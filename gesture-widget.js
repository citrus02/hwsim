/**
 * gesture-widget.js
 * 手势输入组件（课堂 + 决斗通用）
 *
 * 对外暴露：
 *   GestureWidget.render(container, gestureData, options) → 挂载组件
 *   GestureWidget.renderPreview(container, gestureData)   → 只渲染预览图（讲课阶段用）
 *
 * options：
 *   mode:        "classroom" | "duel"
 *   timeLimit:   毫秒数，null=不限时（课堂模式）
 *   onComplete:  callback({ success, accuracy, nodeResults })
 *   showLabel:   是否显示节点步骤文字（课堂=true，决斗=false）
 */

import { getGestureById } from './gesture-data.js';

// ── SVG 生成工具 ────────────────────────────────────────────

/**
 * 生成手势预览SVG（轨迹线 + 节点编号 + 箭头）
 * viewBox 固定 0 0 100 100，调用方控制实际宽高
 */
function buildPreviewSVG(gesture, opts = {}) {
  const {
    dimmed = false,        // 灰显（未解锁/已完成后）
    highlightNode = -1,    // 高亮第N个节点（-1=全部正常）
    completedNodes = [],   // 已点击的节点索引
    showLabels = true,
  } = opts;

  const color    = dimmed ? '#445566' : (gesture.color || '#f8c870');
  const dimAlpha = dimmed ? '0.35' : '1';

  // 箭头marker定义
  const markerId = `arr_${gesture.id}_${Math.random().toString(36).slice(2,6)}`;
  const markerDef = `
    <defs>
      <marker id="${markerId}" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="${color}" opacity="${dimAlpha}"/>
      </marker>
    </defs>`;

  // 主轨迹路径（可能是多段，用M分隔）
  const pathSegments = (gesture.svgPath || '').split(/(?=M)/);
  const paths = pathSegments.map((seg, i) => {
    const isLast = i === pathSegments.length - 1;
    return `<path d="${seg.trim()}"
      fill="none"
      stroke="${color}"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="${dimAlpha}"
      ${isLast ? `marker-end="url(#${markerId})"` : ''}
    />`;
  }).join('');

  // 节点圆圈
  const nodeSVGs = gesture.nodes.map((node, idx) => {
    const isCompleted = completedNodes.includes(idx);
    const isHighlight = highlightNode === idx;
    const isFirst     = idx === 0;

    let fill   = '#12192a';
    let stroke = color;
    let textC  = color;
    let r      = isFirst ? 5.5 : 4.5;
    let opacity = dimAlpha;

    if (isCompleted) {
      fill = color; textC = '#12192a'; stroke = color;
    }
    if (isHighlight) {
      r = 6.5; stroke = '#ffffff'; fill = color; textC = '#12192a';
    }
    if (dimmed) {
      stroke = '#445566'; fill = '#1a2535'; textC = '#445566';
    }

    const labelEl = (showLabels && node.label)
      ? `<text x="${node.x}" y="${node.y + 13}"
               text-anchor="middle"
               font-size="4.5"
               fill="${textC}"
               opacity="${opacity}"
               font-family="serif">${node.label}</text>`
      : '';

    return `
      <circle cx="${node.x}" cy="${node.y}" r="${r}"
        fill="${fill}" stroke="${stroke}" stroke-width="1.6"
        opacity="${opacity}"/>
      <text x="${node.x}" y="${node.y + 1.6}"
            text-anchor="middle" dominant-baseline="middle"
            font-size="5.5" font-weight="700"
            fill="${textC}" opacity="${opacity}"
            font-family="serif">${idx + 1}</text>
      ${labelEl}`;
  }).join('');

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
               width="100%" height="100%"
               style="display:block;overflow:visible;">
    ${markerDef}
    ${paths}
    ${nodeSVGs}
  </svg>`;
}

// ── 脉冲动画（当前待点节点的高亮圆） ────────────────────────

function buildPulseSVG(node, color) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
               style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
    <circle cx="${node.x}" cy="${node.y}" r="9"
      fill="none" stroke="${color}" stroke-width="1.2" opacity="0.5">
      <animate attributeName="r" from="7" to="13" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" from="0.6" to="0" dur="1.2s" repeatCount="indefinite"/>
    </circle>
  </svg>`;
}

// ── 主组件 ──────────────────────────────────────────────────

export const GestureWidget = {

  /**
   * 渲染只读预览（讲课阶段 kp 手势卡片）
   * @param {HTMLElement} container
   * @param {object} gesture  gesture-data中的手势对象
   */
  renderPreview(container, gesture) {
    container.innerHTML = `
      <div class="gest-preview-wrap">
        <div class="gest-preview-svg">
          ${buildPreviewSVG(gesture, { showLabels: true })}
        </div>
        <div class="gest-preview-desc">
          <div class="gest-preview-name">${gesture.nameCn}
            <span class="gest-preview-en">/ ${gesture.nameEn}</span>
          </div>
          <div class="gest-preview-text">${gesture.description}</div>
          <div class="gest-preview-tip">💡 ${gesture.tip}</div>
          <div class="gest-preview-steps">
            ${gesture.nodes.map((n,i) =>
              `<div class="gest-step-item">
                <span class="gest-step-num">${i+1}</span>
                <span class="gest-step-label">${n.label}</span>
              </div>`
            ).join('')}
          </div>
        </div>
      </div>`;
  },

  /**
   * 渲染交互式手势输入
   * @param {HTMLElement} container
   * @param {object} gesture
   * @param {object} options   { mode, timeLimit, onComplete, showLabel }
   */
  render(container, gesture, options = {}) {
    const {
      mode        = 'classroom',
      timeLimit   = gesture.duelTimeLimit,
      onComplete  = () => {},
      showLabel   = mode === 'classroom',
    } = options;

    const totalNodes   = gesture.nodes.length;
    let   currentNode  = 0;          // 当前等待点击的节点索引
    const nodeResults  = [];         // 每个节点的结果 {hit, distance}
    let   timerEl      = null;
    let   timerHandle  = null;
    let   startTime    = Date.now();
    let   finished     = false;

    // ── 渲染主框架 ──

    container.innerHTML = `
      <div class="gest-root" id="gest-root">
        ${timeLimit ? `<div class="gest-timer-bar"><div class="gest-timer-fill" id="gest-tfill"></div></div>` : ''}
        <div class="gest-instruction" id="gest-instr">
          点击节点 <span class="gest-node-current">①</span> 开始施法
        </div>
        <div class="gest-stage-wrap">
          <div class="gest-stage" id="gest-stage">
            <!-- SVG轨迹层 -->
            <div class="gest-svg-layer" id="gest-svg-layer">
              ${buildPreviewSVG(gesture, { showLabels: showLabel, completedNodes: [] })}
            </div>
            <!-- 脉冲层 -->
            <div class="gest-pulse-layer" id="gest-pulse-layer"></div>
            <!-- 点击热区层 -->
            <div class="gest-hitzone-layer" id="gest-hitzone-layer"></div>
          </div>
        </div>
        <div class="gest-node-track" id="gest-node-track">
          ${gesture.nodes.map((_,i) =>
            `<div class="gest-track-dot" id="gest-td-${i}"></div>`
          ).join('')}
        </div>
        <div class="gest-feedback" id="gest-gfb" style="display:none;"></div>
      </div>`;

    const root       = container.querySelector('#gest-root');
    const svgLayer   = container.querySelector('#gest-svg-layer');
    const pulseLayer = container.querySelector('#gest-pulse-layer');
    const hitzoneEl  = container.querySelector('#gest-hitzone-layer');
    const instrEl    = container.querySelector('#gest-instr');
    const fbEl       = container.querySelector('#gest-gfb');
    timerEl          = container.querySelector('#gest-tfill');

    // ── 建立点击热区 ──
    // 每个节点对应一个绝对定位的透明按钮，大小=tolerance半径圆

    function buildHitzones() {
      hitzoneEl.innerHTML = '';
      gesture.nodes.forEach((node, idx) => {
        const btn = document.createElement('button');
        const r   = gesture.tolerance || 18;
        // 将 0-100 坐标映射到百分比
        btn.className = 'gest-hitzone';
        btn.style.cssText = `
          position:absolute;
          left:${node.x - r}%;
          top:${node.y - r}%;
          width:${r * 2}%;
          height:${r * 2}%;
          border-radius:50%;
          background:transparent;
          border:none;
          cursor:${idx === 0 ? 'pointer' : 'default'};
          z-index:${idx === currentNode ? 10 : 1};`;
        btn.dataset.idx = idx;
        btn.addEventListener('click', (e) => handleNodeClick(idx, e, btn));
        hitzoneEl.appendChild(btn);
      });
    }

    function updateHitzones() {
      hitzoneEl.querySelectorAll('.gest-hitzone').forEach(btn => {
        const idx = parseInt(btn.dataset.idx);
        btn.style.zIndex  = idx === currentNode ? '10' : '1';
        btn.style.cursor  = idx === currentNode ? 'pointer' : 'default';
      });
    }

    // ── 更新脉冲 ──

    function updatePulse() {
      if (currentNode >= totalNodes) {
        pulseLayer.innerHTML = '';
        return;
      }
      const node = gesture.nodes[currentNode];
      pulseLayer.innerHTML = buildPulseSVG(node, gesture.color || '#f8c870');
    }

    // ── 更新轨迹SVG ──

    function updateSVG() {
      const completedNodes = Array.from({length: currentNode}, (_, i) => i);
      svgLayer.innerHTML = buildPreviewSVG(gesture, {
        showLabels: showLabel,
        completedNodes,
        highlightNode: currentNode < totalNodes ? currentNode : -1,
      });
    }

    // ── 更新节点进度条 ──

    function updateTrack() {
      gesture.nodes.forEach((_, i) => {
        const dot = container.querySelector(`#gest-td-${i}`);
        if (!dot) return;
        dot.className = 'gest-track-dot' +
          (i < currentNode  ? ' gest-td-done' :
           i === currentNode ? ' gest-td-current' : '');
      });
    }

    // ── 更新指引文字 ──

    const numChars = ['①','②','③','④','⑤','⑥'];
    function updateInstruction() {
      if (currentNode >= totalNodes) {
        instrEl.innerHTML = '手势完成——';
        return;
      }
      const node = gesture.nodes[currentNode];
      instrEl.innerHTML = `点击节点 <span class="gest-node-current">${numChars[currentNode] || (currentNode+1)}</span>&nbsp;${node.label}`;
    }

    // ── 节点点击处理 ──

    function handleNodeClick(idx, e, btn) {
      if (finished) return;
      if (idx !== currentNode) return;  // 只接受当前节点

      // 计算点击精准度（基于点击在按钮内的相对位置距圆心距离）
      const rect    = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const clickX  = e.clientX;
      const clickY  = e.clientY;
      const dist    = Math.hypot(clickX - centerX, clickY - centerY);
      const maxDist = rect.width / 2;
      const accuracy = Math.max(0, 1 - dist / maxDist);

      nodeResults.push({ hit: true, accuracy });

      // 点击正确 → 绿色闪烁
      btn.classList.add('gest-hitzone-hit');
      setTimeout(() => btn.classList.remove('gest-hitzone-hit'), 300);

      currentNode++;
      updateSVG();
      updatePulse();
      updateTrack();
      updateInstruction();
      updateHitzones();

      if (currentNode >= totalNodes) {
        _finish(true);
      }
    }

    // ── 倒计时 ──

    function startTimer() {
      if (!timeLimit || !timerEl) return;
      startTime = Date.now();
      function tick() {
        if (finished) return;
        const elapsed  = Date.now() - startTime;
        const fraction = Math.max(0, 1 - elapsed / timeLimit);
        timerEl.style.width = `${fraction * 100}%`;
        timerEl.style.background = fraction > 0.4
          ? `linear-gradient(90deg,#f8c850,#f8d870)`
          : `linear-gradient(90deg,#e05c5c,#f87878)`;
        if (fraction <= 0) {
          _finish(false, true);
        } else {
          timerHandle = requestAnimationFrame(tick);
        }
      }
      timerHandle = requestAnimationFrame(tick);
    }

    // ── 完成处理 ──

    function _finish(success, timeout = false) {
      if (finished) return;
      finished = true;
      if (timerHandle) cancelAnimationFrame(timerHandle);

      // 补全缺失节点结果（超时情况）
      while (nodeResults.length < totalNodes) {
        nodeResults.push({ hit: false, accuracy: 0 });
      }

      const avgAccuracy = nodeResults.reduce((s,r) => s + r.accuracy, 0) / totalNodes;
      const hitCount    = nodeResults.filter(r => r.hit).length;

      // 显示反馈
      fbEl.style.display = 'block';
      if (timeout) {
        fbEl.className = 'gest-feedback gest-fb-timeout';
        fbEl.innerHTML = `⏰ 超时！完成了 ${hitCount}/${totalNodes} 个节点`;
      } else if (success) {
        const pct = Math.round(avgAccuracy * 100);
        const grade = pct >= 85 ? '精准' : pct >= 60 ? '尚可' : '勉强';
        fbEl.className = 'gest-feedback gest-fb-success';
        fbEl.innerHTML = `✦ 手势完成！精准度 <strong>${pct}%</strong>（${grade}）`;
      } else {
        fbEl.className = 'gest-feedback gest-fb-fail';
        fbEl.innerHTML = `✗ 手势失败，完成了 ${hitCount}/${totalNodes} 个节点`;
      }

      // 禁用所有热区
      hitzoneEl.querySelectorAll('.gest-hitzone').forEach(b => {
        b.style.cursor = 'default';
        b.style.pointerEvents = 'none';
      });
      pulseLayer.innerHTML = '';

      // 回调
      setTimeout(() => {
        onComplete({ success, accuracy: avgAccuracy, nodeResults, hitCount, timeout });
      }, mode === 'duel' ? 400 : 700);
    }

    // ── 初始化 ──

    buildHitzones();
    updateSVG();
    updatePulse();
    updateTrack();
    updateInstruction();
    startTimer();
  },

  /** 根据gestureId渲染（便捷封装） */
  renderById(container, gestureId, options) {
    const gesture = getGestureById(gestureId);
    if (!gesture) {
      container.innerHTML = `<div style="color:#e05c5c;padding:12px;">手势数据未找到：${gestureId}</div>`;
      return;
    }
    this.render(container, gesture, options);
  },

  renderPreviewById(container, gestureId) {
    const gesture = getGestureById(gestureId);
    if (!gesture) return;
    this.renderPreview(container, gesture);
  },
};

window.GestureWidget = GestureWidget;
