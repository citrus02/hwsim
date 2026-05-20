// classroom-render-utils.js - classroom blackboards, mini questions, audio, and text formatting

export function _buildNumberLineSVG({ range = [-5, 5], marks = [], regionLabels = null, compArrow = null } = {}) {
  const [lo, hi] = range;
  const W = 280, AY = 38;
  const X0 = 32, X1 = 248;
  const UW = (X1 - X0) / (hi - lo);
  const px = n => Math.round(X0 + (n - lo) * UW);
  const oX = px(0);

  let s = `<svg viewBox="0 0 ${W} 72" style="width:100%;display:block;margin:4px 0 2px">`;

  if (regionLabels?.left)
    s += `<rect x="${X0}" y="${AY-12}" width="${oX - X0}" height="24" fill="#1c2242" rx="2"/>
          <text x="${Math.round((X0 + oX) / 2)}" y="${AY-17}" text-anchor="middle" font-size="9" fill="#6a7ec0">${regionLabels.left}</text>`;
  if (regionLabels?.right)
    s += `<rect x="${oX+1}" y="${AY-12}" width="${X1 - oX}" height="24" fill="#1c3422" rx="2"/>
          <text x="${Math.round((oX + X1) / 2)}" y="${AY-17}" text-anchor="middle" font-size="9" fill="#5abf7a">${regionLabels.right}</text>`;
  if (regionLabels?.origin)
    s += `<text x="${oX}" y="${AY+30}" text-anchor="middle" font-size="9" fill="#f0d870">${regionLabels.origin}</text>`;

  s += `<line x1="15" y1="${AY}" x2="${W-15}" y2="${AY}" stroke="#c8e8b0" stroke-width="1.5"/>
        <polygon points="15,${AY} 27,${AY-5} 27,${AY+5}" fill="#c8e8b0"/>
        <polygon points="${W-15},${AY} ${W-27},${AY-5} ${W-27},${AY+5}" fill="#c8e8b0"/>`;

  for (let n = lo; n <= hi; n++) {
    const x = px(n), isO = n === 0;
    s += `<line x1="${x}" y1="${AY-(isO?7:4)}" x2="${x}" y2="${AY+(isO?7:4)}" stroke="${isO?"#f0d870":"#c8e8b0"}" stroke-width="${isO?2:1}"/>`;
    const lbl = n < 0 ? `-${-n}` : String(n);
    s += `<text x="${x}" y="${AY+18}" text-anchor="middle" font-size="${isO?11:9}" fill="${isO?"#f0d870":"#7aaa6a"}"${isO?' font-weight="bold"':''}>${lbl}</text>`;
  }

  if (compArrow) {
    const ax = px(compArrow.from), bx = px(compArrow.to), ay = AY - 20;
    s += `<line x1="${ax}" y1="${ay}" x2="${bx-7}" y2="${ay}" stroke="#f8c850" stroke-width="1.5"/>
          <polygon points="${bx},${ay} ${bx-8},${ay-4} ${bx-8},${ay+4}" fill="#f8c850"/>`;
    if (compArrow.label)
      s += `<text x="${Math.round((ax + bx) / 2)}" y="${ay-5}" text-anchor="middle" font-size="9" fill="#f8c850">${compArrow.label}</text>`;
  }

  const MARK_COLORS = { highlight: "#f8c850", dim: "#667799", accent: "#8adfaa" };
  for (const m of marks) {
    const fill = MARK_COLORS[m.style] || MARK_COLORS.highlight;
    const x = px(m.value);
    s += `<circle cx="${x}" cy="${AY}" r="5" fill="${fill}" opacity="0.85"/>`;
  }

  return s + `</svg>`;
}

export function _renderCalculator({ display = "0", highlightKey = null } = {}) {
  const keys = ["7","8","9","÷","4","5","6","×","1","2","3","−","|x|","0",".","="];
  const keysHtml = keys.map(k =>
    `<div class="cls-calc-key${k === highlightKey ? " cls-calc-key-hl" : ""}" data-key="${k}">${k}</div>`
  ).join("");
  return `
    <div class="cls-calc">
      <div class="cls-calc-body">
        <div class="cls-calc-brand">MUGGLE-7</div>
        <div class="cls-calc-screen">
          <div class="cls-calc-display">${display}</div>
        </div>
        <div class="cls-calc-keys">${keysHtml}</div>
      </div>
    </div>`;
}

function _renderGesturePath() {
  return `
    <div class="cls-bb-visual cls-bb-gesture">
      <svg viewBox="0 0 320 92" role="img" aria-label="魔杖手势轨迹">
        <path class="cls-bb-grid-line" d="M28 70 H292" />
        <path class="cls-bb-path" d="M42 63 C78 25, 118 22, 152 48 S230 78, 274 28" />
        <circle class="cls-bb-dot" cx="42" cy="63" r="4" />
        <circle class="cls-bb-dot cls-bb-dot-hot" cx="274" cy="28" r="5" />
        <path class="cls-bb-arrow" d="M263 29 L274 28 L268 39" />
        <text x="38" y="84">起手</text>
        <text x="132" y="26">腕部控制</text>
        <text x="244" y="20">收束</text>
      </svg>
    </div>`;
}

function _renderPotionFlow() {
  const steps = ["材料", "处理", "火候", "注入", "成效"];
  const nodes = steps.map((step, idx) => {
    const x = 38 + idx * 61;
    return `
      <g>
        <circle class="cls-bb-node" cx="${x}" cy="45" r="17" />
        <text x="${x}" y="50" text-anchor="middle">${step}</text>
      </g>`;
  }).join("");
  return `
    <div class="cls-bb-visual cls-bb-potion">
      <svg viewBox="0 0 320 92" role="img" aria-label="魔药配方步骤">
        <path class="cls-bb-grid-line" d="M55 45 H265" />
        ${nodes}
        <path class="cls-bb-arrow" d="M258 39 L270 45 L258 51" />
      </svg>
    </div>`;
}

function _renderPlantDiagram() {
  return `
    <div class="cls-bb-visual cls-bb-plant">
      <svg viewBox="0 0 320 104" role="img" aria-label="植物结构图">
        <path class="cls-bb-stem" d="M160 84 C155 62, 158 44, 163 20" />
        <path class="cls-bb-leaf" d="M160 52 C118 30, 96 43, 92 69 C120 71, 145 66, 160 52Z" />
        <path class="cls-bb-leaf" d="M164 42 C199 18, 225 30, 230 55 C204 60, 180 56, 164 42Z" />
        <path class="cls-bb-root" d="M158 83 C145 92, 132 95, 114 98" />
        <path class="cls-bb-root" d="M161 83 C174 92, 188 96, 207 99" />
        <path class="cls-bb-callout" d="M105 44 H55" />
        <path class="cls-bb-callout" d="M207 29 H268" />
        <path class="cls-bb-callout" d="M133 94 H66" />
        <text x="22" y="48">叶片</text>
        <text x="272" y="33">反应</text>
        <text x="28" y="98">根系</text>
      </svg>
    </div>`;
}

function _renderStarMap() {
  const stars = [
    [58, 30, 3], [92, 52, 2], [126, 34, 3], [168, 24, 2],
    [202, 58, 3], [244, 36, 2], [274, 70, 3], [138, 72, 2]
  ];
  return `
    <div class="cls-bb-visual cls-bb-stars">
      <svg viewBox="0 0 320 100" role="img" aria-label="星图">
        <path class="cls-bb-grid-line" d="M40 78 H286 M50 18 V86 M270 18 V86" />
        <path class="cls-bb-path cls-bb-path-dim" d="M58 30 L126 34 L202 58 L274 70" />
        ${stars.map(([x,y,r]) => `<circle class="cls-bb-star" cx="${x}" cy="${y}" r="${r}" />`).join("")}
        <text x="38" y="92">东</text>
        <text x="258" y="92">西</text>
        <text x="138" y="18">观测线</text>
      </svg>
    </div>`;
}

function _renderFlightRoute() {
  return `
    <div class="cls-bb-visual cls-bb-flight">
      <svg viewBox="0 0 320 100" role="img" aria-label="飞行路线">
        <path class="cls-bb-grid-line" d="M34 76 H286" />
        <path class="cls-bb-path" d="M42 72 C84 20, 132 24, 164 54 S238 86, 280 36" />
        <path class="cls-bb-arrow" d="M268 37 L280 36 L274 47" />
        <circle class="cls-bb-ring" cx="82" cy="38" r="14" />
        <circle class="cls-bb-ring" cx="162" cy="54" r="14" />
        <circle class="cls-bb-ring" cx="242" cy="62" r="14" />
        <text x="34" y="90">起飞</text>
        <text x="137" y="24">平衡</text>
        <text x="246" y="30">转向</text>
      </svg>
    </div>`;
}

function _renderBoardVisual(type) {
  if (type === "gesturePath") return _renderGesturePath();
  if (type === "potionFlow") return _renderPotionFlow();
  if (type === "plantDiagram") return _renderPlantDiagram();
  if (type === "starMap") return _renderStarMap();
  if (type === "flightRoute") return _renderFlightRoute();
  return "";
}

function _blackboardLineClass(line) {
  if (line.startsWith("本节：")) return " cls-bb-topic";
  if (line.endsWith("：")) return " cls-bb-heading";
  if (line.startsWith("- ")) return " cls-bb-bullet";
  return "";
}

export function _renderBlackboard(bb, uniqueId = "") {
  if (!bb) return "";
  if (Array.isArray(bb)) return bb.map((item, idx) => _renderBlackboard(item, `${uniqueId}-${idx}`)).join("");
  if (typeof bb === "string") return `<div class="cls-blackboard">${bb}</div>`;

  let inner = "";
  if (bb.label) inner += `<div class="cls-bb-title">${bb.label}</div>`;

  if (bb.type === "numberline") {
    inner += _buildNumberLineSVG(bb);
  } else if (bb.type === "calculator") {
    return _renderCalculator(bb);
  } else if (bb.type === "visual") {
    inner += _renderBoardVisual(bb.visual);
  } else if (bb.type === "formulas") {
    const audioMap = new Map();
    if (bb.audio && Array.isArray(bb.audio)) {
      bb.audio.forEach((item, idx) => audioMap.set(item.lineIndex ?? idx, item));
    }
    const lines = (bb.lines || []).map((line, idx) => {
      if (!line) return `<div class="cls-bb-formula-gap"></div>`;
      const audio = audioMap.get(idx);
      const lineClass = _blackboardLineClass(line);
      if (audio) {
        const id = `audio-btn-${uniqueId}-${idx}`;
        return `<div class="cls-bb-formula-line cls-bb-line-audio${lineClass}"><button id="${id}" class="cls-audio-btn" title="Play pronunciation" onclick="playLatinAudio('${audio.src}', '${id}')">Audio</button><span class="cls-bb-line-text">${line}</span></div>`;
      }
      return `<div class="cls-bb-formula-line${lineClass}">${line}</div>`;
    }).join("");
    inner += `<div class="cls-bb-pre">${lines}</div>`;
  }

  if (bb.note) inner += `<div class="cls-bb-note">${bb.note}</div>`;

  return inner ? `<div class="cls-blackboard">${inner}</div>` : "";
}

const _latinAudioMap = new Map();

export function playLatinAudio(src, buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const existing = _latinAudioMap.get(buttonId);
  if (existing && !existing.paused) {
    existing.pause();
    existing.currentTime = 0;
    btn.textContent = 'Audio';
    return;
  }

  const audio = new Audio(src);
  _latinAudioMap.set(buttonId, audio);
  audio.onplaying = () => { btn.textContent = 'Playing'; };
  audio.onended = audio.onerror = () => {
    btn.textContent = 'Audio';
    _latinAudioMap.delete(buttonId);
  };
  audio.play().catch(e => console.error('Audio playback failed:', e));
}

window.playLatinAudio = playLatinAudio;

export function _formatContext(text) {
  if (!text) return text;
  let out = text.replace(/「([^」]*)」/g, '<span class="cls-dialogue">「$1」</span>');
  out = out.replace(/([。！？])(<span class="cls-dialogue">)/g, '$1<br>$2');
  out = out.replace(/(<\/span>)([^\s，。、！？：」<])/g, '$1<br>$2');
  return out;
}

export function _formatDialogOnly(text) {
  if (!text) return text;
  return text.replace(/「([^」]*)」/g, '<span class="cls-dialogue">「$1」</span>');
}

export function _renderMiniQuestion(q) {
  const leadIn = q.leadIn
    ? `<div class="cls-mini-leadin">${_formatContext(q.leadIn)}</div>`
    : "";
  return `
    <div class="cls-mini-q">
      ${leadIn}
      ${_renderMiniQuestionInline(q, false, !!q.leadIn)}
    </div>`;
}

export function _renderMiniQuestionInline(q, disabled = false, separated = true) {
  if (!q) return "";
  const opts = q.options.map((opt, i) =>
    `<button class="cls-mini-opt" data-idx="${i}"${disabled ? " disabled" : ""}>${opt}</button>`
  ).join("");
  return `
    <div class="cls-mini-inline-question${separated ? "" : " cls-mini-inline-question-solo"}">
      <div class="cls-mini-text">${_formatDialogOnly(q.text)}</div>
      <div class="cls-mini-opts">${opts}</div>
    </div>`;
}

export function _renderMiniLeadIn(text) {
  return text ? `<div class="cls-mini-q"><div class="cls-mini-leadin">${_formatContext(text)}</div></div>` : "";
}

export function _renderLectureText(text) {
  return text ? `<div class="cls-lecture-block"><div class="cls-mini-leadin">${_formatContext(text)}</div></div>` : "";
}

export function _findCalculatorBlackboard(bb) {
  if (Array.isArray(bb)) return bb.find(item => item?.type === "calculator") || null;
  return bb?.type === "calculator" ? bb : null;
}

export function _withActiveCalculator(bb, calc, display, highlightKey) {
  if (!calc) return bb;
  const applyCalcState = item => item === calc
    ? { ...item, display, highlightKey }
    : item;
  return Array.isArray(bb) ? bb.map(applyCalcState) : applyCalcState(bb);
}
