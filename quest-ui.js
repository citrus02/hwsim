/**
 * quest-ui.js
 * 任务系统 UI 层
 *
 * 渲染信息页「📋 任务」子标签
 * 包含：日常任务、支线任务、成就三个分区
 * 领取奖励时播放弹出动画
 */

// ── 运行时依赖 ───────────────────────────────────────────
function getEngine() { return window.questEngine; }

// ═══════════════════════════════════════════════════════════
// 入口：渲染整个任务子标签页
// ═══════════════════════════════════════════════════════════

export function renderQuestPanel() {
  const mount = document.getElementById("info-sub-quest");
  if (!mount) return;

  // 初始化引擎（检查日期刷新、好感度触发等）
  getEngine()?.init();

  // 绑定状态变化回调→重新渲染
  if (getEngine()) {
    getEngine().onQuestUpdate = (_type, _data) => {
      // 有红点通知时更新标签页徽章
      _updateQuestBadge();
      // 如果当前任务页可见，刷新内容
      const panel = document.getElementById("info-sub-quest");
      if (panel?.classList.contains("active")) {
        _renderContent(mount);
      }
    };
  }

  _renderContent(mount);
  _updateQuestBadge();
}

function _renderContent(mount) {
  const engine     = getEngine();
  const dailies    = engine?.getTodayDailies()       || [];
  const sidequests = engine?.getActiveSideQuests()   || [];
  const achievements = engine?.getAchievements()     || [];

  // 统计待领取数量（用于空状态判断）
  const claimableDailies = dailies.filter(q => q.state.done && !q.state.claimed).length;
  const claimableSide    = sidequests.filter(q => q.state.done && !q.state.claimed).length;
  const claimableAch     = achievements.filter(a => a.state.done && !a.state.claimed).length;
  const pendingSide      = sidequests.filter(q => q.state.triggered && !q.state.done).length;

  mount.innerHTML = `
    <div class="quest-root">

      <!-- ── 今日任务 ── -->
      <div class="quest-section">
        <div class="quest-section-header">
          <span class="quest-section-title">⚡ 今日任务</span>
          <span class="quest-section-sub">明天刷新</span>
          ${claimableDailies > 0
            ? `<span class="quest-badge">${claimableDailies} 可领取</span>` : ""}
        </div>
        <div class="quest-daily-list">
          ${dailies.map(q => _renderDailyCard(q)).join("") || _emptyTip("今日任务加载中……")}
        </div>
      </div>

      <!-- ── 支线任务 ── -->
      <div class="quest-section">
        <div class="quest-section-header">
          <span class="quest-section-title">📜 支线任务</span>
          ${(claimableSide + pendingSide) > 0
            ? `<span class="quest-badge quest-badge-side">${claimableSide+pendingSide}</span>` : ""}
        </div>
        <div class="quest-side-list">
          ${sidequests.length
            ? sidequests.map(q => _renderSideCard(q)).join("")
            : _emptyTip("好好与身边的人相处，也许他们有话和你说。")}
        </div>
      </div>

      <!-- ── 成就 ── -->
      <div class="quest-section">
        <div class="quest-section-header">
          <span class="quest-section-title">🏅 成就</span>
          ${claimableAch > 0
            ? `<span class="quest-badge quest-badge-ach">${claimableAch} 可领取</span>` : ""}
        </div>
        <div class="quest-ach-tabs">
          <button class="quest-ach-tab active" data-cat="all">全部</button>
          <button class="quest-ach-tab" data-cat="study">课程</button>
          <button class="quest-ach-tab" data-cat="duel">决斗</button>
          <button class="quest-ach-tab" data-cat="explore">探索</button>
          <button class="quest-ach-tab" data-cat="affinity">人物</button>
          <button class="quest-ach-tab" data-cat="daily">日常</button>
        </div>
        <div class="quest-ach-list" id="quest-ach-list">
          ${_renderAchList(achievements, "all")}
        </div>
      </div>

    </div>`;

  // 绑定领取按钮
  mount.querySelectorAll(".quest-claim-btn[data-qid]").forEach(btn => {
    btn.onclick = () => _handleClaim(btn.dataset.type, btn.dataset.qid);
  });

  // 绑定成就标签
  mount.querySelectorAll(".quest-ach-tab").forEach(tab => {
    tab.onclick = () => {
      mount.querySelectorAll(".quest-ach-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const achList = document.getElementById("quest-ach-list");
      if (achList) achList.innerHTML = _renderAchList(achievements, tab.dataset.cat);
      // 重新绑定成就领取按钮
      achList?.querySelectorAll(".quest-claim-btn[data-qid]").forEach(btn => {
        btn.onclick = () => _handleClaim(btn.dataset.type, btn.dataset.qid);
      });
    };
  });
}

// ═══════════════════════════════════════════════════════════
// 卡片渲染
// ═══════════════════════════════════════════════════════════

function _renderDailyCard(q) {
  const { state, progressText } = q;
  const done    = state.done;
  const claimed = state.claimed;

  const statusClass = claimed ? "quest-card-claimed"
                    : done    ? "quest-card-done"
                    :           "";

  const statusBadge = claimed ? `<span class="quest-status-badge quest-badge-claimed">✓ 已领取</span>`
                    : done    ? `<span class="quest-status-badge quest-badge-ready">✦ 可领取</span>`
                    :           "";

  const rewardHTML = _renderRewards(q.rewards);

  const claimBtn = (!claimed && done)
    ? `<button class="quest-claim-btn" data-type="daily" data-qid="${q.id}">领取奖励</button>`
    : "";

  const progressHTML = (!done && progressText)
    ? `<div class="quest-progress-text">${progressText}</div>`
    : "";

  return `
    <div class="quest-card quest-daily-card ${statusClass}">
      <div class="quest-card-top">
        <span class="quest-card-icon">${q.icon}</span>
        <div class="quest-card-info">
          <div class="quest-card-title">${q.title} ${statusBadge}</div>
          <div class="quest-card-desc">${q.desc}</div>
          ${progressHTML}
        </div>
      </div>
      <div class="quest-rewards-row">
        ${rewardHTML}
        ${claimBtn}
      </div>
    </div>`;
}

function _renderSideCard(q) {
  const { state } = q;
  const done    = state.done;
  const claimed = state.claimed;

  const statusClass = claimed ? "quest-card-claimed"
                    : done    ? "quest-card-done"
                    :           "quest-card-active";

  const statusBadge = claimed ? `<span class="quest-status-badge quest-badge-claimed">✓ 已完成</span>`
                    : done    ? `<span class="quest-status-badge quest-badge-ready">✦ 可领取</span>`
                    :           `<span class="quest-status-badge quest-badge-progress">进行中</span>`;

  const charConfig = window.affinityData?.AFFINITY_CHARACTERS?.[q.characterKey];
  const charTag = charConfig
    ? `<span class="quest-char-tag">${charConfig.icon} ${charConfig.name}</span>`
    : "";

  const claimBtn = (!claimed && done)
    ? `<button class="quest-claim-btn" data-type="side" data-qid="${q.id}">领取奖励</button>`
    : "";

  const condHTML = !done
    ? `<div class="quest-condition">🎯 ${q.conditionDesc}</div>` : "";

  return `
    <div class="quest-card quest-side-card ${statusClass}">
      <div class="quest-card-top">
        <span class="quest-card-icon">${q.icon}</span>
        <div class="quest-card-info">
          <div class="quest-card-title">${q.title} ${statusBadge}</div>
          ${charTag}
          <div class="quest-card-desc">${q.desc}</div>
          ${condHTML}
          ${done && !claimed ? `<div class="quest-completion-text">${q.completionText}</div>` : ""}
        </div>
      </div>
      ${!claimed ? `
        <div class="quest-rewards-row">
          ${_renderRewards(q.rewards)}
          ${claimBtn}
        </div>` : ""}
    </div>`;
}

function _renderAchList(achievements, cat) {
  const filtered = cat === "all"
    ? achievements
    : achievements.filter(a => a.category === cat);

  // 排序：可领取→已完成未领取→进行中→未解锁
  const sorted = [...filtered].sort((a, b) => {
    const score = x => x.state.done && !x.state.claimed ? 3
                     : x.state.claimed ? 1
                     : x.state.done    ? 2 : 0;
    return score(b) - score(a);
  });

  if (!sorted.length) return _emptyTip("该分类暂无成就");

  return sorted.map(ach => {
    const { state, progress } = ach;
    const claimed = state.claimed;
    const done    = state.done;

    const statusClass = claimed ? "ach-claimed"
                      : done    ? "ach-done"
                      :           "";

    const progressHTML = progress && !done ? `
      <div class="ach-progress-wrap">
        <div class="ach-progress-bar" style="width:${Math.min(100, progress.cur/progress.max*100)}%"></div>
      </div>
      <div class="ach-progress-text">${progress.cur} / ${progress.max}</div>
    ` : "";

    const claimBtn = (!claimed && done)
      ? `<button class="quest-claim-btn quest-claim-ach" data-type="ach" data-qid="${ach.id}">领取</button>`
      : "";

    const doneTag = claimed  ? `<span class="ach-tag ach-tag-done">✓ 已完成</span>`
                  : done     ? `<span class="ach-tag ach-tag-ready">✦ 可领取</span>`
                  : "";

    return `
      <div class="ach-card ${statusClass}">
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-body">
          <div class="ach-title">${ach.title} ${doneTag}</div>
          <div class="ach-desc">${ach.desc}</div>
          ${progressHTML}
          <div class="ach-rewards">${_renderRewards(ach.rewards, true)}</div>
        </div>
        <div class="ach-claim-wrap">${claimBtn}</div>
      </div>`;
  }).join("");
}

// ─── 奖励预览 ────────────────────────────────────────────

function _renderRewards(rewards, mini = false) {
  if (!rewards?.length) return "";
  const items = rewards.map(r => {
    switch (r.type) {
      case "material":   return `<span class="quest-reward-tag">📦 ${r.name}×${r.count}</span>`;
      case "item":       return `<span class="quest-reward-tag">🎁 ${r.name}×${r.count}</span>`;
      case "housePoint": return `<span class="quest-reward-tag">🏅 学院+${r.amount}</span>`;
      case "affinity": {
        const name = window.affinityData?.AFFINITY_CHARACTERS?.[r.key]?.name || r.key;
        return `<span class="quest-reward-tag">💛 ${name}+${r.delta}</span>`;
      }
      case "log": return "";
      default: return "";
    }
  }).filter(Boolean);
  return `<div class="quest-reward-list ${mini?"quest-reward-mini":""}">${items.join("")}</div>`;
}

function _emptyTip(text) {
  return `<div class="quest-empty">${text}</div>`;
}

// ═══════════════════════════════════════════════════════════
// 领取奖励 + 动画
// ═══════════════════════════════════════════════════════════

function _handleClaim(type, questId) {
  const engine = getEngine();
  let result = null;

  if (type === "daily") result = engine?.claimDaily(questId);
  if (type === "side")  result = engine?.claimSide(questId);
  if (type === "ach")   result = engine?.claimAchievement(questId);

  if (!result) return;

  // 播放奖励弹出动画
  _showRewardAnimation(result.rewardLines, result.def.title);

  // 刷新面板
  setTimeout(() => {
    const mount = document.getElementById("info-sub-quest");
    if (mount) _renderContent(mount);
    _updateQuestBadge();
  }, 800);
}

function _showRewardAnimation(rewardLines, questTitle) {
  // 移除旧动画
  document.getElementById("quest-reward-anim")?.remove();

  const el = document.createElement("div");
  el.id = "quest-reward-anim";
  el.className = "quest-reward-anim";
  el.innerHTML = `
    <div class="qra-box">
      <div class="qra-title">✦ 任务完成</div>
      <div class="qra-quest-name">「${questTitle}」</div>
      <div class="qra-divider"></div>
      <div class="qra-items">
        ${rewardLines.map((line, i) =>
          `<div class="qra-item" style="animation-delay:${i * 0.12}s">${line}</div>`
        ).join("")}
      </div>
      <div class="qra-close">点击任意处关闭</div>
    </div>`;

  el.onclick = () => {
    el.classList.add("qra-exit");
    setTimeout(() => el.remove(), 300);
  };

  document.body.appendChild(el);

  // 自动消失
  setTimeout(() => {
    el.classList.add("qra-exit");
    setTimeout(() => el.remove(), 300);
  }, 3500);
}

// ═══════════════════════════════════════════════════════════
// 标签页红点徽章
// ═══════════════════════════════════════════════════════════

function _updateQuestBadge() {
  const engine = getEngine();
  if (!engine) return;

  const dailies     = engine.getTodayDailies?.() || [];
  const sides       = engine.getActiveSideQuests?.() || [];
  const achs        = engine.getAchievements?.() || [];

  const count = dailies.filter(q => q.state.done && !q.state.claimed).length
              + sides.filter(q => q.state.done && !q.state.claimed).length
              + achs.filter(a => a.state.done && !a.state.claimed).length;

  const tab = document.querySelector('.info-sub-tab[data-sub="quest"]');
  if (!tab) return;

  // 移除旧徽章
  tab.querySelector(".quest-tab-badge")?.remove();

  if (count > 0) {
    const badge = document.createElement("span");
    badge.className  = "quest-tab-badge";
    badge.textContent = count;
    tab.appendChild(badge);
  }
}

// ═══════════════════════════════════════════════════════════
// NPC 发布任务：供好感度UI调用，显示该角色的任务
// ═══════════════════════════════════════════════════════════

export function renderNpcQuestInAffinity(characterKey, containerEl) {
  const engine = getEngine();
  if (!engine || !containerEl) return;

  const quests = engine.getSideQuestsByChar(characterKey);
  if (!quests.length) {
    containerEl.innerHTML = "";
    return;
  }

  containerEl.innerHTML = `
    <div class="npc-quest-section">
      <div class="npc-quest-title">📋 任务</div>
      ${quests.map(q => {
        const state   = q.state || {};
        const done    = state.done;
        const claimed = state.claimed;

        if (claimed) return ""; // 已完成不显示

        const trigger = state.triggered;

        if (!trigger) {
          // NPC 任务可以主动接取
          return `
            <div class="npc-quest-card">
              <div class="npc-quest-name">${q.icon} ${q.title}</div>
              <div class="npc-quest-desc">${q.desc}</div>
              <div class="npc-quest-cond">🎯 ${q.conditionDesc}</div>
              <button class="quest-claim-btn npc-quest-accept-btn" data-qid="${q.id}">接取任务</button>
            </div>`;
        }

        if (done) {
          return `
            <div class="npc-quest-card npc-quest-done">
              <div class="npc-quest-name">${q.icon} ${q.title} <span class="quest-badge-ready">✦ 可交付</span></div>
              <div class="npc-quest-completion">${q.completionText}</div>
              <button class="quest-claim-btn" data-type="side" data-qid="${q.id}">领取奖励</button>
            </div>`;
        }

        return `
          <div class="npc-quest-card">
            <div class="npc-quest-name">${q.icon} ${q.title} <span class="quest-status-badge quest-badge-progress">进行中</span></div>
            <div class="npc-quest-cond">🎯 ${q.conditionDesc}</div>
          </div>`;
      }).join("")}
    </div>`;

  // 绑定接取按钮
  containerEl.querySelectorAll(".npc-quest-accept-btn[data-qid]").forEach(btn => {
    btn.onclick = () => {
      const data = window.saveSys?.getSave?.() || JSON.parse(localStorage.getItem('hogwarts')||'{}');
      if (!data.quests) data.quests = {};
      if (!data.quests.side) data.quests.side = {};
      data.quests.side[btn.dataset.qid] = { triggered: true, done: false, claimed: false };
      if (window.saveSys?.setSave) window.saveSys.setSave(data);
      else localStorage.setItem('hogwarts', JSON.stringify(data));
      window.addLog?.(`📋 接取任务：${window.questData?.SIDE_QUESTS?.find(q=>q.id===btn.dataset.qid)?.title||''}`);
      renderNpcQuestInAffinity(characterKey, containerEl);
    };
  });

  // 绑定领取奖励按钮
  containerEl.querySelectorAll(".quest-claim-btn[data-type='side']").forEach(btn => {
    btn.onclick = () => {
      const result = engine.claimSide(btn.dataset.qid);
      if (result) {
        _showRewardAnimation(result.rewardLines, result.def.title);
        setTimeout(() => renderNpcQuestInAffinity(characterKey, containerEl), 800);
      }
    };
  });
}

// 全局挂载
window.renderQuestPanel    = renderQuestPanel;
window.renderNpcQuestInAffinity = renderNpcQuestInAffinity;
