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

function _renderPlateBoundaries() {
  return `
    <div class="cls-bb-visual" aria-label="板块边界三类示意图">
      <svg viewBox="0 0 300 132" role="img">
        <defs>
          <marker id="plate-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f8d77a"></path>
          </marker>
        </defs>
        <g transform="translate(0 2)">
          <text x="8" y="13">碰撞</text>
          <path class="cls-bb-grid-line" d="M 8 56 L 60 56 L 75 38 L 90 56 L 142 56"></path>
          <path class="cls-bb-path-dim" d="M 60 56 L 73 43 L 82 56"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 22 42 L 55 42"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 128 42 L 95 42"></path>
          <text x="51" y="76">山脉隆起</text>
        </g>
        <g transform="translate(150 2)">
          <text x="8" y="13">张裂</text>
          <path class="cls-bb-grid-line" d="M 8 56 L 58 56 M 88 56 L 142 56"></path>
          <path class="cls-bb-path-dim" d="M 58 56 L 73 76 L 88 56"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 64 42 L 26 42"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 86 42 L 124 42"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 75 74 L 75 58"></path>
          <text x="50" y="94">裂谷/岩浆</text>
        </g>
        <g transform="translate(0 80)">
          <text x="8" y="13">平移</text>
          <path class="cls-bb-grid-line" d="M 8 28 L 142 28 M 8 52 L 142 52 M 75 22 L 67 58"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 24 22 L 66 22"></path>
          <path class="cls-bb-arrow" marker-end="url(#plate-arrow)" d="M 126 58 L 84 58"></path>
          <text x="51" y="75">平行错动</text>
        </g>
        <g transform="translate(150 88)">
          <path class="cls-bb-callout" d="M 6 18 C 30 4, 51 5, 75 18 C 100 31, 121 31, 144 18"></path>
          <text x="9" y="47">喜马拉雅：碰撞边界</text>
        </g>
      </svg>
    </div>`;
}

function _renderHastingsManeuver() {
  return `
    <div class="cls-bb-visual" aria-label="黑斯廷斯战役佯退包抄示意图">
      <svg viewBox="0 0 300 116" role="img">
        <text x="8" y="14">诺曼骑兵</text>
        <text x="216" y="14">撒克逊盾墙</text>
        <path class="cls-bb-grid-line" d="M 210 34 L 286 34 M 210 45 L 286 45 M 210 56 L 286 56"></path>
        <path class="cls-bb-arrow" d="M 62 42 C 98 28, 132 28, 166 42"></path>
        <path class="cls-bb-arrow" d="M 166 42 L 154 35 M 166 42 L 154 49"></path>
        <text x="86" y="24">冲锋</text>
        <path class="cls-bb-path-dim" d="M 170 58 C 126 72, 82 72, 44 54"></path>
        <text x="88" y="88">佯装撤退</text>
        <path class="cls-bb-arrow" d="M 96 88 C 150 110, 238 100, 264 64"></path>
        <path class="cls-bb-arrow" d="M 264 64 L 262 78 M 264 64 L 250 68"></path>
        <text x="188" y="104">回身包抄</text>
      </svg>
    </div>`;
}

function _renderAllianceChain() {
  return `
    <div class="cls-bb-visual" aria-label="一战前同盟链条示意图">
      <svg viewBox="0 0 300 128" role="img">
        <text x="18" y="15">三国同盟</text>
        <text x="192" y="15">三国协约</text>
        <rect class="cls-bb-node" x="10" y="27" width="104" height="54" rx="4"></rect>
        <rect class="cls-bb-node" x="186" y="27" width="104" height="54" rx="4"></rect>
        <text x="25" y="45">德国</text>
        <text x="25" y="62">奥匈</text>
        <text x="25" y="79">意大利</text>
        <text x="202" y="45">英国</text>
        <text x="202" y="62">法国</text>
        <text x="202" y="79">俄国</text>
        <path class="cls-bb-arrow" d="M 86 58 C 118 34, 168 34, 206 58"></path>
        <path class="cls-bb-arrow" d="M 206 58 L 193 52 M 206 58 L 193 66"></path>
        <path class="cls-bb-grid-line" d="M 62 96 L 238 96"></path>
        <text x="36" y="115">局部冲突 -> 同盟义务 -> 大陆战争</text>
      </svg>
    </div>`;
}

function _renderRiverTransport() {
  return `
    <div class="cls-bb-visual" aria-label="河流搬运方式示意图">
      <svg viewBox="0 0 300 120" role="img">
        <path class="cls-bb-grid-line" d="M 12 82 C 72 72, 122 94, 178 82 S 252 76, 288 86"></path>
        <path class="cls-bb-arrow" d="M 22 42 C 88 22, 160 32, 276 38"></path>
        <path class="cls-bb-arrow" d="M 276 38 L 264 31 M 276 38 L 263 45"></path>
        <circle class="cls-bb-dot" cx="72" cy="48" r="2.8"></circle>
        <circle class="cls-bb-dot" cx="108" cy="42" r="2.2"></circle>
        <circle class="cls-bb-dot" cx="146" cy="50" r="2.5"></circle>
        <text x="48" y="20">悬移：细泥沙随水漂</text>
        <circle class="cls-bb-ring" cx="116" cy="86" r="5"></circle>
        <circle class="cls-bb-ring" cx="156" cy="86" r="5"></circle>
        <path class="cls-bb-path-dim" d="M 112 98 Q 136 82, 160 98"></path>
        <text x="86" y="113">推移：砂砾沿河床滚动</text>
        <text x="196" y="68">溶解：矿物入水</text>
      </svg>
    </div>`;
}

function _renderPressureBelts() {
  return `
    <div class="cls-bb-visual" aria-label="气压带季节移动示意图">
      <svg viewBox="0 0 300 126" role="img">
        <path class="cls-bb-grid-line" d="M 16 22 H 284 M 16 46 H 284 M 16 70 H 284 M 16 94 H 284"></path>
        <text x="18" y="18">极地高压</text>
        <text x="18" y="42">中纬低压</text>
        <text x="18" y="66">副热带高压</text>
        <text x="18" y="90">赤道低压</text>
        <path class="cls-bb-arrow" d="M 220 94 V 64"></path>
        <path class="cls-bb-arrow" d="M 220 64 L 214 76 M 220 64 L 226 76"></path>
        <text x="232" y="82">夏季北移</text>
        <path class="cls-bb-arrow" d="M 254 64 V 94"></path>
        <path class="cls-bb-arrow" d="M 254 94 L 248 82 M 254 94 L 260 82"></path>
        <text x="205" y="116">冬季南移，西风带带来降水</text>
      </svg>
    </div>`;
}

function _renderAngleElevation() {
  return `
    <div class="cls-bb-visual" aria-label="仰角和俯角示意图">
      <svg viewBox="0 0 300 118" role="img">
        <path class="cls-bb-grid-line" d="M 18 96 H 286"></path>
        <path class="cls-bb-stem" d="M 232 96 V 24"></path>
        <path class="cls-bb-leaf" d="M 214 34 Q 232 10, 250 34 Q 232 26, 214 34"></path>
        <circle class="cls-bb-dot" cx="52" cy="84" r="5"></circle>
        <path class="cls-bb-grid-line" d="M 52 84 H 230"></path>
        <path class="cls-bb-arrow" d="M 52 84 L 232 24"></path>
        <path class="cls-bb-arrow" d="M 232 24 L 219 24 M 232 24 L 224 36"></path>
        <path class="cls-bb-callout" d="M 76 84 A 34 34 0 0 1 84 73"></path>
        <text x="82" y="74">仰角</text>
        <path class="cls-bb-path-dim" d="M 232 24 H 286"></path>
        <path class="cls-bb-callout" d="M 260 24 A 30 30 0 0 1 255 41"></path>
        <text x="246" y="52">俯角</text>
      </svg>
    </div>`;
}

function _renderDativeCase() {
  return `
    <div class="cls-bb-visual" aria-label="宾格与与格示意图">
      <svg viewBox="0 0 300 112" role="img">
        <text x="16" y="58">Puella</text>
        <rect class="cls-bb-node" x="126" y="32" width="62" height="28" rx="4"></rect>
        <text x="139" y="51">书</text>
        <rect class="cls-bb-node" x="214" y="66" width="70" height="28" rx="4"></rect>
        <text x="226" y="85">朋友</text>
        <path class="cls-bb-arrow" d="M 70 52 L 124 48"></path>
        <path class="cls-bb-arrow" d="M 124 48 L 112 42 M 124 48 L 113 55"></path>
        <text x="96" y="31">直接对象：宾格</text>
        <path class="cls-bb-arrow" d="M 68 60 C 118 98, 174 104, 214 84"></path>
        <path class="cls-bb-arrow" d="M 214 84 L 201 84 M 214 84 L 205 95"></path>
        <text x="108" y="104">接受者：与格</text>
      </svg>
    </div>`;
}

function _renderPnJunction() {
  return `
    <div class="cls-bb-visual" aria-label="p-n结单向导电示意图">
      <svg viewBox="0 0 300 112" role="img">
        <rect class="cls-bb-node" x="56" y="28" width="78" height="48" rx="4"></rect>
        <rect class="cls-bb-node" x="166" y="28" width="78" height="48" rx="4"></rect>
        <text x="86" y="57">P</text>
        <text x="196" y="57">N</text>
        <path class="cls-bb-grid-line" d="M 150 24 V 82"></path>
        <path class="cls-bb-arrow" d="M 72 94 H 230"></path>
        <path class="cls-bb-arrow" d="M 230 94 L 218 87 M 230 94 L 218 101"></path>
        <text x="104" y="108">正向导通</text>
        <path class="cls-bb-path-dim" d="M 230 18 H 76"></path>
        <path class="cls-bb-grid-line" d="M 86 10 L 106 30 M 106 10 L 86 30"></path>
        <text x="118" y="21">反向截止</text>
      </svg>
    </div>`;
}

function _renderCompoundField() {
  return `
    <div class="cls-bb-visual" aria-label="复合场受力分析示意图">
      <svg viewBox="0 0 300 124" role="img">
        <circle class="cls-bb-dot" cx="150" cy="62" r="8"></circle>
        <path class="cls-bb-arrow" d="M 150 62 V 104"></path>
        <path class="cls-bb-arrow" d="M 150 104 L 143 92 M 150 104 L 157 92"></path>
        <text x="160" y="103">mg</text>
        <path class="cls-bb-arrow" d="M 150 62 H 220"></path>
        <path class="cls-bb-arrow" d="M 220 62 L 208 55 M 220 62 L 208 69"></path>
        <text x="226" y="66">qE</text>
        <path class="cls-bb-arrow" d="M 150 62 C 122 38, 104 35, 74 42"></path>
        <path class="cls-bb-arrow" d="M 74 42 L 87 36 M 74 42 L 86 50"></path>
        <text x="40" y="37">qvB</text>
        <path class="cls-bb-grid-line" d="M 22 18 H 278 M 22 108 H 278"></path>
        <text x="28" y="15">先画受力图，再列方程</text>
      </svg>
    </div>`;
}

function _renderSymmetryBreaking() {
  return `
    <div class="cls-bb-visual" aria-label="对称性破缺示意图">
      <svg viewBox="0 0 300 126" role="img">
        <circle class="cls-bb-ring" cx="42" cy="60" r="22"></circle>
        <text x="22" y="102">统一状态</text>
        <path class="cls-bb-arrow" d="M 72 60 H 116"></path>
        <path class="cls-bb-arrow" d="M 116 60 L 104 53 M 116 60 L 104 67"></path>
        <circle class="cls-bb-dot-hot" cx="142" cy="60" r="6"></circle>
        <text x="120" y="102">破缺</text>
        <path class="cls-bb-grid-line" d="M 158 60 C 182 34, 214 24, 268 22"></path>
        <path class="cls-bb-grid-line" d="M 158 60 C 188 52, 222 58, 270 58"></path>
        <path class="cls-bb-grid-line" d="M 158 60 C 182 86, 214 98, 268 102"></path>
        <text x="208" y="18">引力</text>
        <text x="208" y="54">电磁力</text>
        <text x="208" y="86">强/弱力</text>
        <text x="206" y="116">魔力场假说</text>
      </svg>
    </div>`;
}

function _renderBoardVisual(type) {
  if (type === "gesturePath") return _renderGesturePath();
  if (type === "potionFlow") return _renderPotionFlow();
  if (type === "plantDiagram") return _renderPlantDiagram();
  if (type === "starMap") return _renderStarMap();
  if (type === "flightRoute") return _renderFlightRoute();
  if (type === "plateBoundaries") return _renderPlateBoundaries();
  if (type === "hastingsManeuver") return _renderHastingsManeuver();
  if (type === "allianceChain") return _renderAllianceChain();
  if (type === "riverTransport") return _renderRiverTransport();
  if (type === "pressureBelts") return _renderPressureBelts();
  if (type === "angleElevation") return _renderAngleElevation();
  if (type === "dativeCase") return _renderDativeCase();
  if (type === "pnJunction") return _renderPnJunction();
  if (type === "compoundField") return _renderCompoundField();
  if (type === "symmetryBreaking") return _renderSymmetryBreaking();
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
  let out = String(text).replace(/\r\n?/g, "\n");
  out = out.replace(/「([^」]*)」/g, (match, dialogue, offset, source) => {
    const nextChar = source[offset + match.length] || "";
    const breakAfter = /[。！？]$/.test(dialogue) && !/[\n，。、！？：」<]/.test(nextChar);
    return `<span class="cls-dialogue">「${dialogue}」</span>${breakAfter ? "\n" : ""}`;
  });
  out = out.replace(/\n+/g, '<br>');
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
