# 麻瓜学术系·课程维护标准

> 本文件整理自旧 `.trae/specs` 中仍有长期价值的内容。`.trae` 下的任务文档属于临时执行记录，不再作为权威标准；课程内容、题库和系统维护以后以 `_spec` 文件夹为准。

---

## 权威文档优先级

维护麻瓜学术系课程时，按以下顺序判断标准：

1. `_spec/muggle-syllabus.md`：全科课程大纲，决定科目、年级、章节和课次主题。
2. `_spec/course-content-prompt.md`：课程正文、题库、人设反馈和黑板交互的写作规范。
3. `_spec/course-maintenance-standards.md`：代码维护、校验和旧规格迁移规则。
4. `course/staff-data.js`：教授主档案和人设来源。
5. `course/muggle-academic/[subject].js`：该科目的实际 syllabus、teachingStyle、crossAnchors。
6. `course/muggle-academic/[subject]-lesson.js`：该科目的课堂内容和课中互动。
7. `course/muggle-academic/[subject]-questionBank.js`：该科目的题库。

如果旧任务文档、代码注释或历史实现与 `_spec` 冲突，以 `_spec` 为准。

---

## 全科课程结构标准

- 课程推进采用 **每次排课消耗 1 个 lesson** 的口径；默认玩家会参加每节排定课程。
- 每个年级的最低课时数由课程表决定：`周课时 × 34 个有效教学周`。34 周来自校历估算（37 校历周扣除圣诞、复活节和考试周）。
- 旧的 **7 年级、14 章、70 课** 结构已废弃，不得作为新课程主线，也不得用总课数冒充某一学年的课时。
- 周课时较高的科目必须扩展到对应年级目标课时。例如数学、拉丁语在 Year 1 每周 4 节，最低需要 `4 × 34 = 136` 课；数学 Year 1 的权威目标就是 136 课。
- 1-3 年级为 `KS3`，4-5 年级为 `GCSE`，6-7 年级为 `A-Level`。
- 科目主文件的 `syllabus` 应与 `_spec/muggle-syllabus.md` 对齐。
- 课程大纲应按学年拆分维护。数学采用 `course/muggle-academic/math/yearN/` 结构，每个学年目录至少包含 `index.js`、`lesson.js`、`question-bank.js`；根 `math/index.js` 只做汇总注册。每章包含 `chapter`、`yearRange`、`phase`、`lessons` 等核心字段。
- 旧实现中多出的考试安排、假期作业、学习方法类非学科课程，不应混入课程主线，除非 `_spec/muggle-syllabus.md` 明确列出。

---

## lesson 文件维护标准

每个 `course/muggle-academic/[subject]-lesson.js` 必须符合 `_spec/course-content-prompt.md` 中的“课程级别字段”“keyPoint context 写作原则”和“小黑板（blackboard）规范”。本文件只保留维护层面的约束：

- 导出 `lessonMap`。
- 覆盖 `_spec/muggle-syllabus.md` 中该科目、该学年列出的全部课次，课号连续。
- 每课主题与 `_spec/muggle-syllabus.md` 和 `[subject].js` 中对应课次一致。
- 教授语气必须来自 `course/staff-data.js` 的主档案，不可只写通用教师口吻。

专项迁移要求：

- 旧 lesson 文件少于当前排课口径目标课时，应扩展到目标课时，而不是保留旧课数；不得把一年级补课内容追加到高年级/A-Level 内容之后。
- 旧 lesson 内容与新大纲不匹配时，应按新大纲重写，不把旧内容硬塞进新课次。
- 若旧文件误用了其他科目的内容，应整体替换为本学科内容。

---

## questionBank 文件维护标准

题库标准以 `_spec/course-content-prompt.md` 的“题库（questionBank 文件内容）”和“题库硬性标准（现行实现口径）”为准。这里不再重复字段细则，只记录维护原则：

- 题库必须与 `_spec/muggle-syllabus.md`、`[subject].js` 和 `[subject]-lesson.js` 的课次顺序一致。
- `knowledgePoint` 应优先来自对应课次的 `lessonMap[lesson].keyPoints`。
- 题目可以用魔法世界情境包装，但考查的必须是真实学科知识。
- 修改题库后必须执行数量、结构和语法校验。

### lesson 驱动的题库同步标准

当某科 lesson 文件已经按 `_spec` 完成维护，而 questionBank 仍大量沿用旧大纲、旧课序或旧知识点时，应以 lesson 文件为同步源重建题库，而不是只做局部替换。

执行口径：

- 每课题目必须对应当前 `lessonMap[lesson].keyPoints`，`knowledgePoint` 不得使用旧标题、近义自造标题或其他课次标题。
- 若 lesson 中每个 keyPoint 已有课中 `question`，题库选择题可优先抽取这些课中题，保留题干、选项、答案，并将对应 keyPoint 的 `contextRight` 或 `context` 转为解析。
- 每课 5 道选择题中，前 4 道宜覆盖 4 个 keyPoint，第 5 道宜做本课综合应用或解题策略题，仍需挂到本课某个 keyPoint。
- 开放题应考查本课核心概念的解释、迁移和因果推理，不只要求背诵定义；评分点必须覆盖概念、关联知识点、关键物理量/文本证据、表达与推理。
- 题库解析可保留教授人设语气，但必须说明为什么答案成立；不能只写“答案是 A”。
- 题库不得残留与 1991 年霍格沃茨语境冲突的现代例子，除非该技术在 1991 年前已经合理存在并符合教授经历。
- 题库不得点名引用原著主角的未来经历或破坏玩家一年级代入感；情境应使用“某位学生”“一名守门员”“麻瓜维修铺”等泛化主体。
- 若原课中题只有 3 个选项，迁移到 questionBank 时必须补足 4 个 `A-D` 选项，并保证 `answer` 是字母而不是数字下标。

旧规格废弃说明：

- `.trae` 旧文档中出现过的“每课 3 题（basic / medium / hard）”只代表早期临时任务口径，已经废弃。
- 以后除非用户明确要求维护旧文件，否则不得再按每课 3 题生成新题库。

---

## 系统逻辑维护标准

旧 `.trae/specs/course-system-improvements` 中有长期价值的系统维护要求，归并如下：

- 评分标准只能有一个权威实现，避免 `scoreToRating` 在多个文件中各自定义不同阈值。
- 学院分映射只能有一个权威来源，避免 `HOUSE_POINTS_MAP` 在不同模块中产生不同积分。
- 课程系统函数需要空值保护：空题库、缺失课程、缺失题目、无效分数都应优雅处理。
- 空题库场景不能直接崩溃，应给出可理解的降级行为或提示。
- 维护系统逻辑时必须保持现有存档兼容，不随意改变历史数据格式。

---

## 验收检查清单

修改课程大纲、lesson 或 questionBank 后，至少检查以下入口；具体字段细则以 `_spec/course-content-prompt.md` 为准：

- 科目主文件：课时数达到该科目当前目标，课号连续、阶段标记正确。
- lesson 文件：覆盖所有 syllabus 课次，每课结构完整、主题与 syllabus 对应。
- questionBank 文件：覆盖所有 syllabus 课次，每课 6 题（5 choice + 1 open），总题量为 `课时数 × 6`。
- 人设：语气与 `staff-data.js` 对应教授一致。
- 运行：目标 JS 文件通过语法检查。

---

## 旧 `.trae` 资料处理原则

- 已被 `_spec` 吸收的长期标准，保留在 `_spec`。
- 只描述某次任务过程的 checklist、tasks、临时 PRD，不再保留。
- 与现行标准冲突的旧口径，不迁移，只在本文件中注明废弃原因。
- 清理后，后续对话不得再把 `.trae/specs` 当成标准来源。
