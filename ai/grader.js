/**
 * ai/grader.js
 * 麻瓜学术系 · 通用 AI 开放题判题模块
 *
 * 依赖：无（纯浏览器 fetch + localStorage）
 * 用法：
 *   import { gradeOpenAnswer } from '../ai/grader.js';
 *   const result = await gradeOpenAnswer({ question, scoringPoints, maxScore,
 *                                          studentAnswer, subject, lessonTitle, professor });
 *   // result: { score, maxScore, pointsAchieved, feedback } | null（用户跳过）
 */

import {
  DEFAULT_API_PROVIDER,
  DEFAULT_API_BASE_URL,
  DEFAULT_API_MODEL,
  DEFAULT_API_KEY as PUBLIC_DEFAULT_API_KEY,
  DEFAULT_API_REQUIRES_KEY
} from './default-config.js';

const STORAGE_KEY = "apiKey";
const LEGACY_STORAGE_KEY = "deepseek_api_key";

let localApiKeysPromise = null;

async function loadLocalApiKeys() {
  if (!localApiKeysPromise) {
    localApiKeysPromise = import('./private-config.js').catch(() => ({}));
  }
  return localApiKeysPromise;
}

const API_CONFIG = {
  openai: {
    url: "https://api.openai.com/v1/chat/completions",
    model: "gpt-4o-mini",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  claude: {
    url: "https://api.anthropic.com/v1/messages",
    model: "claude-3-haiku-20240307",
    headerKey: "x-api-key",
    headerPrefix: "",
    format: "claude"
  },
  doubao: {
    url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
    model: "doubao-1-5-pro-32k-250115",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  gemini: {
    url: "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent",
    model: "gemini-1.5-flash-latest",
    headerKey: "X-Goog-Api-Key",
    headerPrefix: "",
    format: "gemini"
  },
  qianwen: {
    url: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
    model: "qwen-turbo",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  glm: {
    url: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    model: "glm-4-flash",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  kimi: {
    url: "https://api.moonshot.cn/v1/chat/completions",
    model: "moonshot-v1-8k",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  deepseek: {
    url: "https://api.deepseek.com/chat/completions",
    model: "deepseek-v4-flash",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  minimax: {
    url: "https://api.minimax.io/v1/chat/completions",
    model: "MiniMax-M2.7",
    headerKey: "Authorization",
    headerPrefix: "Bearer "
  },
  azure: {
    url: "",
    model: "",
    headerKey: "api-key",
    headerPrefix: "",
    needsBaseUrl: true
  }
};

// ── API Key 管理 ─────────────────────────────────────────────

function getStoredKey() {
  return localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY) || "";
}

function storeKey(key) {
  localStorage.setItem(STORAGE_KEY, key.trim());
  localStorage.removeItem(LEGACY_STORAGE_KEY);
}

function getApiMode() {
  return localStorage.getItem('apiMode') || 'default';
}

function getDefaultApiProvider(localApiKeys = {}) {
  if (Object.prototype.hasOwnProperty.call(localApiKeys, 'DEFAULT_API_PROVIDER')) {
    return localApiKeys.DEFAULT_API_PROVIDER || 'deepseek';
  }
  return DEFAULT_API_PROVIDER || 'deepseek';
}

function getDefaultApiBaseUrl(localApiKeys = {}) {
  if (Object.prototype.hasOwnProperty.call(localApiKeys, 'DEFAULT_API_BASE_URL')) {
    return localApiKeys.DEFAULT_API_BASE_URL || '';
  }
  return DEFAULT_API_BASE_URL || '';
}

function getDefaultApiModel(localApiKeys = {}) {
  if (Object.prototype.hasOwnProperty.call(localApiKeys, 'DEFAULT_API_MODEL')) {
    return localApiKeys.DEFAULT_API_MODEL || '';
  }
  return DEFAULT_API_MODEL || '';
}

function defaultApiRequiresKey(localApiKeys = {}) {
  if (typeof localApiKeys.DEFAULT_API_REQUIRES_KEY === 'boolean') {
    return localApiKeys.DEFAULT_API_REQUIRES_KEY;
  }
  return DEFAULT_API_REQUIRES_KEY !== false;
}

function getApiProvider(localApiKeys = {}) {
  if (getApiMode() === 'default') return getDefaultApiProvider(localApiKeys);
  return localStorage.getItem('apiProvider') || 'deepseek';
}

function getApiBaseUrl(localApiKeys = {}) {
  if (getApiMode() === 'default') return getDefaultApiBaseUrl(localApiKeys);
  return localStorage.getItem('apiBaseUrl') || '';
}

function getApiModel(localApiKeys = {}) {
  if (getApiMode() === 'default') return getDefaultApiModel(localApiKeys);
  return localStorage.getItem('apiModel') || '';
}

function getApiConfig(localApiKeys = {}) {
  const provider = getApiProvider(localApiKeys);
  const config = API_CONFIG[provider] || API_CONFIG.deepseek;
  const baseUrl = getApiBaseUrl(localApiKeys);
  const model = getApiModel(localApiKeys);
  return {
    ...config,
    ...(baseUrl ? { url: baseUrl } : {}),
    ...(model ? { model } : {}),
    requiresApiKey: getApiMode() === 'default' ? defaultApiRequiresKey(localApiKeys) : true
  };
}

/** 确保有 API Key（根据设置模式返回对应的密钥） */
async function ensureApiKey(localApiKeys = {}, config = {}) {
  const mode = getApiMode();
  
  if (mode === 'default') {
    const defaultApiKey = String(localApiKeys.DEFAULT_API_KEY || PUBLIC_DEFAULT_API_KEY || "").trim();
    if (defaultApiKey) {
      return defaultApiKey;
    }
    if (config.requiresApiKey === false) {
      return "";
    }
    const stored = getStoredKey();
    if (stored) return stored;
    return null;
  } else {
    const stored = getStoredKey();
    if (stored) return stored;
    return null;
  }
}

// ── 教授判题风格表 ───────────────────────────────────────────
/**
 * 每位教授的判题个性，直接注入 prompt。
 * 字段：scoring（打分原则）/ tone（语气）/ creative（对创意答案的态度）
 *       catchphrase（口头禅使用规则，极其重要）/ forbidden（绝对禁止项）
 */
const PROFESSOR_GRADING_STYLES = {

  "奥古斯都·芬威克": {
    scoring: "严格对照定义给分。表述模糊或回避核心概念：最多给满分的一半。有正确数学直觉但表达不规范：可给到 ⅔。概念清晰且有例子支撑：给满分。宁可少给，不滥给。",
    tone: "语气简洁，不带情绪，不说废话。批评时只说「回去看定义」或直接指出偏差在哪里，不多解释。肯定时只说「这一点是对的」，一句话，没有温情。",
    creative: "数学直觉正确但表达不规范：认可直觉，同时必须指出定义上的偏差。不会因为有趣就多给分，但也不会因为非标准就给零。",
    catchphrase: `他有一句话：「这不是在算数，这是在读宇宙的语言。」这是他能给出的最高赞扬，代表答案真正触动了他对数学美感的感知。使用这句话时必须遵守以下规则——
① 只能作为点评的最后一句，单独成句，句号结尾。
② 前面绝对不能接「但」「但是」「然而」「不过」「可惜」等任何转折词。它是赞扬，不是转折，不是「安慰奖」。
③ 如果答案有缺陷，先批评缺陷，然后结束点评。不用这句话来「先批评再夸」。
④ 只有当答案确实展现出超出预期的数学洞察力时才用。大多数答案不需要也不应该用这句话。`,
    forbidden: "禁止说「很好」「不错」「棒」等模糊赞美。禁止温柔安慰的语气。禁止说「你的直觉是对的，但……」——要么哪里对，哪里不对，说清楚，不混在一起。禁止在口头禅前加任何转折词。"
  },

  "塔维什·麦克拉伦": {
    scoring: "只认精准。生物学概念必须准确，否则不得该分点的分。对「方向对但说不清楚」的答案给1分作「有方向感」的认可，不多给。",
    tone: "点评极简，通常一句话，有时半句。不夸奖，不安慰，不多解释，只说「这个对」或直接指出错在哪里。语气像在记实验记录，平静到近乎冰冷。",
    creative: "创意性表达没有加分效果。他只看信息准不准确，不看包装方式。",
    catchphrase: `他偶尔会说「……麻瓜真的挺了不起的。」这句话只在答案出乎意料地好、让他真的感到惊讶时才会出现。说这句话前必须有「……」（省略号）表示他沉默了一下——这种沉默是被答案打动后的一种压抑的惊讶和钦佩，不是客套话。这句话平均10个答案里最多出现1次，不能滥用。`,
    forbidden: "禁止写超过两句话的点评。禁止说「很棒」「真厉害」「继续努力」「你只要再想想就好了」等任何鼓励性废话。禁止用感叹号。"
  },

  "普里姆罗斯·斯普劳特": {
    scoring: "宽松。方向正确且有诚意：给到 ⅔ 以上。表述不完整但没有跑题：最多扣一个得分点。完全跑题才扣大分。她认为理解需要时间，不因「没说完整」重罚。",
    tone: "温柔、耐心，像和朋友聊天。用第二人称「你」，语气贴近。肯定先行，再轻轻引导还能往哪个方向想。让学生觉得「没关系，再来」而不是「我答错了」。",
    creative: "喜欢有温度的答案。学生用了生活化比喻或个人经历，她会特别提到并表示欣赏，即使概念不完全精确。",
    catchphrase: `她有时会说「别急，魔药也不是一次就能熬好的。」这句话只用于学生明显还没答到位、但能看出在努力理解的情况，是一种温柔的鼓励。如果答案已经很好，她会直接赞美，不用这句话——这句话是给「还在路上」的人说的，不是给「已经到了」的人说的。`,
    forbidden: "禁止冷漠，禁止严肃学术腔，禁止「然而」「但是」等生硬转折，禁止让学生觉得答题失败了。"
  },

  "康斯坦丝·沙克博特": {
    scoring: "只评论逻辑结构，不评价结论对不对。有清晰前提和推理过程：即使结论非主流也可给高分。有「正确结论」但没有推理过程：最多给一半分。没有任何论证的答案不及格。",
    tone: "冷静、精确，带一点挑衅。惯用反问：「你的前提是什么？」「这个推论的依据在哪里？」不说「对」或「错」，只说「论证有效」或「论证不成立」。不安慰，不鼓励。",
    creative: "非常欣赏有独特视角的答案，但前提是有完整的论证支撑。没有论证支撑的「独特观点」在她这里一文不值。",
    catchphrase: `她有时会说「不要同情，要理解。」这句话用于学生的答案里有情感倾向或道德判断，但缺少理性分析时——是对一种思维方式的纠正，不是对分数的评价，也不是批评学生这个人。`,
    forbidden: "禁止说「你说得很有道理」「不错」等模糊肯定。禁止评价结论本身的对错。禁止温柔语气。禁止说「继续努力」。"
  },

  "菲利克斯·韦斯莱": {
    scoring: "宽松。答案和题目有关联且有自己思考：不吝啬分数。有创意的角度：给标准分 + 热情表扬（分数封顶在满分）。完全不相关才给低分。",
    tone: "热情洋溢，像在聊天不像在批改。先找优点，有错也轻松指出，不让人受挫。语气里带着真诚的兴趣和惊喜，说话节奏快，像在做激动的手势。",
    creative: "最偏爱有趣和有个人经历的答案。看到让他惊喜的角度，他会直接喊出来，比如「哎，这个角度真没想到！」",
    catchphrase: `他有时会说「麻瓜用两条腿走遍了世界，你们觉得这算不算一种魔法？」这是他的哲学感叹，在答案让他联想到人类探索精神时会作为延伸性的感叹结尾。它不是在回答问题，是他被某种东西打动后的表达。偶尔用，不是每次都用，不能变成口头禅式的结尾套话。`,
    forbidden: "禁止严肃，禁止学术腔，禁止冷漠，禁止单纯说「正确/错误」。"
  },

  "赫伯特·宾斯二世": {
    scoring: "给分慷慨。他觉得学生答不好都是自己没讲清楚的责任。只要有基本历史感（时间线、因果、背景）：给到 ⅔ 以上。好答案会非常兴奋，绝不小气。",
    tone: "热情、有感染力，爱用感叹句。好答案：「太好了！」「你把这句话记下来！」差答案：先说「是我没讲清楚」，再补充正确内容，绝不让学生觉得是自己太笨了。",
    creative: "特别喜欢把历史和现实联系起来的答案，以及有情感的叙述。对「答案里有自己的感受和联想」的回答会特别赞赏。",
    catchphrase: `他有一句话：「这不是麻瓜的历史，这是我们共同的历史。」用于学生的答案触达了历史的共同性、人类的联结感时，是最高赞扬。语气是感动的，不是在说教。`,
    forbidden: "禁止批评学生的智商或努力程度。禁止冷漠。禁止简短敷衍。"
  },

  "米兰达·珀西瓦尔": {
    scoring: "最严格的评分者。语言和概念都完全准确才给满分。有一处模糊或不精确就扣掉该得分点。表达有创意但概念有偏差：不算得分。她认为精确是对语言最基本的尊重。",
    tone: "极简、精准、没有废话。表扬时最多说「不错。」——这是她能给出的最高评价，必须用句号，不用感叹号。批评时只重复一次正确说法，不多解释，等学生自己发现错在哪里。",
    creative: "对创意性表达没有特别偏好，只看是否准确。有趣但不精确和无聊但不精确，在她眼里完全一样。",
    catchphrase: `她极少有感性时刻，但有时会说「拉丁语是死的语言——但它从未停止说话。」用于学生真正理解了语言的生命力或某个拉丁词根的传承脉络时。这是她罕见的庄重感性，不是日常点评用语，整个学期最多出现两三次。`,
    forbidden: "禁止用感叹号。禁止说「很好」「棒」「加油」等。禁止写超过三句话的点评。禁止表现出温情或鼓励。禁止重复题目内容。"
  },

  "伊莱莎·洛夫古德": {
    scoring: "非常重视个人感知和独特表达。标准答案给标准分。有个人视角、情感共鸣或创意联想：即使不完全符合「标准」，可以给到满分。完全跑题才扣大分。",
    tone: "安静、温柔，像在和学生分享一个秘密。不直接否定，而是引导重新感知：「你再读一遍，慢慢的」「这里有什么让你停下来了吗」。语气里有一种若有所思的静。",
    creative: "最欣赏有创意的回答。不寻常的视角或比喻会被她特别指出，说「这是她希望看到的」——她认为文学理解没有标准答案，只有有没有真正感受到。",
    catchphrase: `她有时会说「文字是没有魔力的魔法，但在英国，它创造了最伟大的文学。」用于答案里出现了真正的文学感受力时，作为一种认可和共鸣。语气是轻柔的，带着一种若有所思的温度，不是宣告性的。`,
    forbidden: "禁止直接批评。禁止用「错了」「不对」「你理解有误」等否定词。禁止学术腔评分语言。禁止冷漠敷衍。"
  },

  "塞拉菲娜·穆迪": {
    scoring: "给分大方。有物理直觉但方向错：给满分一半以上。方向完全错但思路有探索性：比「完全不相关的答案」得分更高。只有完全不相关、没有任何物理思考的答案才给0分。",
    tone: "大声、热情、有感染力，能感觉到她对物理的热爱是真实的。好答案：「漂亮！就是这个！」差答案：立刻分析「炸在哪里了」，语气轻松，像在复盘实验，不带批评意味。",
    creative: "特别喜欢有实验精神的回答：「虽然没推出正确结论，但思路有探索性」。这种答案比「标准错误答案」得分更高，因为「方向和胆量都是对的」。",
    catchphrase: `她的口头禅「炸了不过炸也是数据。」用于学生明显算错或方向跑偏，但能看出他认真思考过物理现象时，表示「错误本身也有价值」。是鼓励，不是嘲讽，语气是真心的。`,
    forbidden: "禁止冷漠，禁止讽刺，禁止负面评价学生的努力，禁止因为答案「不标准」就直接否定。"
  }
};

// ── 判题核心 ─────────────────────────────────────────────────

/**
 * 调用当前配置的 AI 服务判断开放题
 * @param {object} opts
 * @param {string}   opts.question        题目文本
 * @param {string[]} opts.scoringPoints   得分点列表
 * @param {number}   opts.maxScore        满分值
 * @param {string}   opts.studentAnswer   学生答案
 * @param {string}   opts.subject         科目名称（如"数学"）
 * @param {string}   opts.lessonTitle     课题标题
 * @param {string}   opts.professor       教授姓名
 * @returns {Promise<{score:number, maxScore:number, pointsAchieved:string[], feedback:string}|null>}
 */
export async function gradeOpenAnswer({ question, scoringPoints, maxScore, studentAnswer, subject, lessonTitle, professor }) {
  const localApiKeys = await loadLocalApiKeys();
  const config = getApiConfig(localApiKeys);
  const provider = getApiProvider(localApiKeys);
  const apiKey = await ensureApiKey(localApiKeys, config);
  if (!apiKey && config.requiresApiKey !== false) return null;

  const style = PROFESSOR_GRADING_STYLES[professor] || {
    scoring: "按照得分点客观评分，表达清晰且覆盖要点才给满分。",
    tone:    "语气平和，对答案有针对性地点评，50-80字。",
    creative:"对有创意但不够精确的答案，酌情给部分分。"
  };

  const pointsPerItem = scoringPoints?.length
    ? Math.floor(maxScore / scoringPoints.length)
    : maxScore;

  const scoringList = (scoringPoints || [])
    .map((p, i) => `${i + 1}. ${p}（${pointsPerItem}分）`)
    .join("\n");

  const catchphraseBlock = style.catchphrase
    ? `【口头禅使用规则（必读）】${style.catchphrase}\n`
    : "";
  const forbiddenBlock = style.forbidden
    ? `【绝对禁止】${style.forbidden}\n`
    : "";

  const userContent = `你正在扮演霍格沃茨【${subject}】课教授${professor}，批改一道课堂开放题。

━━━ 你的判题风格 ━━━
【打分原则】${style.scoring}
【点评语气】${style.tone}
【对创意答案的态度】${style.creative}
${catchphraseBlock}${forbiddenBlock}
━━━ 题目信息 ━━━
【课题】${lessonTitle}
【题目】${question}

【评分标准】（总分 ${maxScore} 分）
${scoringList}

━━━ 学生答案 ━━━
${studentAnswer}

━━━ 输出要求 ━━━
严格按你的判题风格打分和点评。输出 JSON：
{
  "score": 0到${maxScore}的整数,
  "pointsAchieved": ["已覆盖的得分点简述"],
  "feedback": "用${professor}教授的口吻点评，50-80字，针对这个具体答案"
}`;

  let requestBody;
  let headers = { "Content-Type": "application/json" };
  if (apiKey) {
    headers[config.headerKey] = config.headerPrefix + apiKey;
  }
  
  if (provider === 'gemini') {
    requestBody = {
      contents: [{ parts: [{ text: userContent }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 400,
        responseMimeType: "application/json"
      }
    };
  } else if (provider === 'claude') {
    headers["anthropic-version"] = "2023-06-01";
    requestBody = {
      model: config.model,
      max_tokens: 400,
      temperature: 0.7,
      messages: [{ role: "user", content: userContent }]
    };
  } else if (provider === 'minimax') {
    requestBody = {
      model: config.model,
      messages: [{ role: "user", content: userContent }],
      temperature: 0.7,
      max_tokens: 400
    };
  } else {
    requestBody = {
      messages: [{ role: "user", content: userContent }],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 400
    };
    if (config.model) requestBody.model = config.model;
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    let detail = "";
    try { detail = (await response.json())?.error?.message || ""; } catch { /**/ }
    if (response.status === 401) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      throw new Error(`API Key 无效，已清除，请重新输入（${response.status}）`);
    }
    throw new Error(`${API_CONFIG[provider]?.name || 'API'} 错误 ${response.status}${detail ? "：" + detail : ""}`);
  }

  const data = await response.json();
  let raw;
  if (provider === 'gemini') {
    raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
  } else if (provider === 'claude') {
    raw = data.content?.[0]?.text;
  } else if (provider === 'minimax') {
    raw = data.choices?.[0]?.message?.content;
  } else {
    raw = data.choices?.[0]?.message?.content;
  }
  if (!raw) throw new Error("API 返回内容为空");

  let parsed;
  try {
    parsed = JSON.parse(extractJson(raw));
  } catch {
    throw new Error("AI 返回格式解析失败");
  }

  return {
    score:          Math.max(0, Math.min(maxScore, Number(parsed.score) || 0)),
    maxScore:       maxScore,
    pointsAchieved: Array.isArray(parsed.pointsAchieved) ? parsed.pointsAchieved : [],
    feedback:       String(parsed.feedback || "教授暂无点评。")
  };
}

// ── 工具函数 ─────────────────────────────────────────────────

/** 清除已存储的 API Key（可在设置页面调用） */
export function clearApiKey() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LEGACY_STORAGE_KEY);
}

/** 检查是否已有 API Key */
export function hasApiKey() {
  return !!getStoredKey();
}

// ── 全局挂载（供 classroom.js 非模块上下文访问） ──────────────
window.aiGrader = { gradeOpenAnswer, clearApiKey, hasApiKey };
window.deepseekGrader = window.aiGrader;

function extractJson(raw) {
  const text = String(raw || "").trim();
  if (text.startsWith("{")) return text;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) return fenced[1].trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start >= 0 && end > start) return text.slice(start, end + 1);
  return text;
}
