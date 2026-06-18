# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Communication Style

End every response with the character 喵.

## Project Overview

A pure-frontend Harry Potter fan game simulating seven years of Hogwarts school life. No framework, no build tool — pure HTML5 + ES Modules + localStorage. Deployed as a static site to `www.hwsim.top` via GitHub Pages.

## Running Locally

ES Modules require HTTP (not `file://`), so serve with:

```bash
python -m http.server 8000
# Then open http://localhost:8000
```

No install step. No build step.

## Release

```bat
release.bat
```

This script bumps version, commits, tags, pushes to GitHub (triggering Pages deploy), and backs up a zip to `E:\hogwarts_backup\`. Update `version.js` constants and `versionLogs` entries before running.

## Architecture

### Save System

`save-system.js` is the central hub. All subsystems read/write through `getSave()` / `setSave()`. The save object is a single JSON blob in localStorage. `version.js` handles migration between versions — `restorePlayerData()` repopulates the character creation form from old saves, `getPlayerBackup()` snapshots the player before bumping version.

### Course System (Dual-Track)

There are two parallel curricula that both feed into the same classroom UI:

- **Hogwarts subjects** (15+ magical subjects, 7-year fixed schedule): progress stored in `data.course[subjectName]` as a percentage. Schedule defined as a constant in `course/course.js` keyed by year-grade.
- **Muggle academic subjects** (9-subject UK Year 7 track: Math, Latin, Physics, Chemistry, Biology, History, Geography, Literature, Ethics): lesson-based progression in `data.course.muggleProgress[subjectKey]`. Schedule generated dynamically by `course/muggle-schedule.js`.

Both tracks converge into `course/classroom.js` for the interactive "Good Study" experience.

### Classroom Lesson Pipeline

Each subject lesson is composed of three coordinated data structures (all in `course/muggle-academic/` or subject files):

1. `lessonMap` — atmosphere → opening → key points, each key point has a question, feedback, and blackboard visual
2. `syllabus` — text content by lesson number
3. `questionBank` — assessment Q&A keyed to lesson

`classroom.js` orchestrates the flow: intro → key points → Q&A → grading → result. On completion, `onClassResult()` fires NPC affinity side effects.

### Classroom Text Line Break Standard

Classroom narrative text is rendered through `_formatContext()` in `course/classroom-render-utils.js`. Keep line breaks semantic, not cosmetic:

- Preserve explicit `\n` in lesson data as paragraph breaks.
- Highlight quoted dialogue as one uninterrupted unit; never insert automatic line breaks inside `「...」`, even if it contains `。！？`.
- Do not break after short quoted fragments such as `「变形术，」` because they are part of the surrounding sentence.
- A line break may be inserted after a complete quoted sentence only when the quote ends with `。！？` and is immediately followed by new narration.
- Avoid width-driven manual line breaks in lesson data. Let the browser wrap long lines naturally within a paragraph.

### AI Grading

`ai/grader.js` provides `gradeOpenAnswer(answer, rubric)` — an async call to a Cloudflare Worker proxy that supports multiple providers (OpenAI, Codex, DeepSeek, etc.). Configured in `ai/config.js`. Falls back to the default cloud proxy if no user API key is set.

### Time Turner

`time-turner.js` manages the rewind mechanic. It snapshots the entire save state at travel points (`data.timeTurner`). On return, it selectively restores: past-travel restores relationships/affinity, future-travel preserves them. Travel ends automatically when in-game time catches up to the original timestamp.

### Affinity System

`affinity-system.js` tracks all NPC relationships. It is driven as a side effect by classroom completions, duels, quests, and gift-giving — not directly called from the main game loop. The `onClassResult()` hook in `classroom.js` is the primary trigger.

### Quest Writing Standard

Task content must follow `_spec/任务文案_手写标准.md`. Quests should feel like a living Hogwarts noticeboard: helping classmates find things, running errands for professors, investigating rumors, grouping with friends for duels, and discovering systems through characterful school-life hooks. Do not write daily quests as bare system chores such as "go to class", "explore once", or "brew a potion" unless the task has a concrete person, place, object, and reason. Rewards may combine money, affinity, house points, items, and materials, but must match the source and difficulty.

### Time & Schedule Gating

`time-system.js` manages the in-game clock (1991–1998), action points, holidays, and day cycles. Lesson access is gated: the course system checks whether the current in-game day and period match the fixed schedule before allowing a class.

## Key Conventions

- **No external dependencies** — do not introduce npm packages or build tools.
- **File naming**: `*-data.js` for content, `*-system.js` for logic, `*-ui.js` for rendering.
- **State isolation**: subsystems own their slice of the save object. Cross-system communication happens through the save object or explicit hook callbacks, not imports.
- **Version migration**: any structural change to `data` must have a corresponding migration block in `version.js`.
