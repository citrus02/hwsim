# 麻瓜学术系·年级课表系统 设计规格

> 本文件是实现标准，交给新对话直接按此执行。

---

## 科目列表（固定 9 科）

| key | 显示名 | 图标 | 周课时（1–3年级） |
|---|---|---|---|
| math | 数学 | 🔢 | 4 |
| latin | 拉丁语 | 🏛️ | 4 |
| biology | 生物 | 🌿 | 1 |
| chemistry | 化学 | ⚗️ | 1 |
| physics | 物理 | ⚡ | 1 |
| history | 历史 | 📜 | 1 |
| geography | 地理 | 🌍 | 1 |
| literature | 英语文学 | 📖 | 1 |
| civics | 哲学与伦理 | ⚖️ | 1 |

---

## 三阶段课表

### 第一阶段：1–3 年级（KS3）

全科开放，15 节/周。

| 时段 | 周一 | 周二 | 周三 | 周四 | 周五 |
|---|---|---|---|---|---|
| 第1节 | math | math | latin | math | math |
| 第2节 | latin | latin | geography | latin | physics |
| 第3节 | literature | history | biology | chemistry | civics |

周课时：math×4，latin×4，其余各×1

---

### 第二阶段：4–5 年级（GCSE 备考）

**进入 4 年级时触发一次性人文选科：**
- 选项：`history`（历史 📜）或 `geography`（地理 🌍）二选一
- 选择写入存档：`data.course.muggleHumanities = 'history' | 'geography'`
- 未选科目从课表消失，且无法报考 GCSE

History 与 Geography 是独立学科，没有逻辑关联，不能"合并"，只能二选一。

**选 history 课表：**

| 时段 | 周一 | 周二 | 周三 | 周四 | 周五 |
|---|---|---|---|---|---|
| 第1节 | math | math | latin | math | math |
| 第2节 | latin | latin | biology | latin | physics |
| 第3节 | literature | history | biology | chemistry | math |

**选 geography 课表：**（将上表 history 替换为 geography）

周课时：math×5，latin×4，biology×2，physics/chemistry/literature/人文选科各×1（共 15 节）

---

### 第三阶段：6–7 年级（A-Level）

**进入 6 年级时触发选科：**
- 可选范围：GCSE 成绩 **A 或以上** 的科目
- 玩家从中选 **3 科**（可选不足 3 科则全取）
- 写入存档：`data.course.aLevelSubjects = ['math', 'latin', 'biology']`（示例）

每科 5 节/周，固定排列模板：

| 时段 | 周一 | 周二 | 周三 | 周四 | 周五 |
|---|---|---|---|---|---|
| 第1节 | 科目A | 科目A | 科目B | 科目A | 科目C |
| 第2节 | 科目B | 科目C | 科目A | 科目B | 科目A |
| 第3节 | 科目C | 科目B | 科目C | 科目C | 科目B |

---

## 考试节点

| 时间 | 事件 |
|---|---|
| 5 年级 5 月起 | GCSE 考试入口开放（各科独立，需完成 60% 课程进度） |
| 7 年级 5 月起 | A-Level 考试入口开放（需 GCSE ≥ A，完成 85% 课程进度） |

---

## 需修改的文件

| 文件 | 改动内容 |
|---|---|
| `course/muggle-schedule.js` | `WEEKLY_SCHEDULE` 改为函数 `getWeeklySchedule(yearGrade, saveData)`，返回对应阶段课表；新增 `HUMANITIES_CHOICE_SUBJECTS`、`ALEVEL_SLOT_TEMPLATE` 常量 |
| `course/course.js` | `_renderMuggleSchedule` 调用 `getWeeklySchedule()`；4 年级无人文选择时插入选科界面；6 年级无 A-Level 选科时插入选科界面 |
| `save-system.js` | 迁移补丁：`muggleHumanities`（字符串）、`aLevelSubjects`（数组）缺失时初始化为 `null` / `[]` |
| `course/muggle-exam.js` | `canTakeExam` 增加：4–5 年级检查 `muggleHumanities` 是否包含该科目；6–7 年级检查 `aLevelSubjects` |
| `course/course-data.js` | 各年级可用麻瓜科目列表随年级过滤 |

---

## 选科界面规格（两处复用同一组件）

### 4 年级人文选科

- 标题："选择你的人文方向（此后不可更改）"
- 两张卡片：历史 📜 / 地理 🌍，各附一句说明
- 确认后写存档，重新渲染课表

### 6 年级 A-Level 选科

- 标题："选择 A-Level 科目（最多 3 科）"
- 展示所有 GCSE ≥ A 的科目卡片；不合格的灰显并注明原因
- 勾选 → 确认 → 写存档，重新渲染课表

---

## 存档结构补充

```js
data.course.muggleHumanities  // 'history' | 'geography' | null（未选）
data.course.aLevelSubjects    // string[]，如 ['math', 'latin']（未选为 []）
data.course.muggleExams = {
  gcse:   { [subjectKey]: { grade, score, takenDate } },
  alevel: { [subjectKey]: { grade, score, takenDate } }
}
```

---

## 设计原则备注

- History 与 Geography **不能合并**，是独立学科，只能二选一
- A-Level 选科数量上限 3，是英国真实惯例
- GCSE/A-Level 与 O.W.L./N.E.W.T. 时间节点对齐，5 年级末 / 7 年级末
- 课表变化是**阶段性**的（1–3 / 4–5 / 6–7），不是每年都变
