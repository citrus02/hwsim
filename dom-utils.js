// ==============================================
// 通用 DOM 操作工具函数
// 作用：专门处理【界面切换】【标签页切换】【年代选择】
// 整个游戏的"页面跳转、按钮切换"都靠这三个函数
// ==============================================

/**
 * 显示指定界面，隐藏其他所有界面
 * 用于：游戏主界面切换（创建角色页 → 主游戏页 等）
 * @param {string} id - 要显示的界面 ID
 */
export function showScreen(id) {
  // ✅ FIX #1：检查目标元素是否存在
  const target = document.getElementById(id);
  if (!target) {
    console.warn(`⚠️ 找不到界面 #${id}`);
    return;
  }

  // 先把所有 .screen 界面都隐藏（移除 active 类）
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  // 只显示传入 id 的那个界面（添加 active 类）
  target.classList.add('active');
}

/**
 * 初始化标签页切换功能（比如：日常/信息/课程/背包 切换）
 * 作用：让标签按钮可以点击切换对应内容面板
 * 
 * HTML 结构示例：
 * <button class="tab-btn" data-tab="daily">行动日常</button>
 * <div class="tab-screen" id="tab-daily">内容</div>
 * 
 * ✅ FIX #2：注意属性名是 data-tab，不是 target！
 */
export function initTabSwitch() {
  // 获取所有标签按钮
  const tabBtns = document.querySelectorAll('.tab-btn');
  // 获取所有标签对应的内容面板
  const tabScreens = document.querySelectorAll('.tab-screen');

  // ✅ FIX #3：如果没有标签，直接返回（不崩溃）
  if (tabBtns.length === 0 || tabScreens.length === 0) {
    console.warn('⚠️ 找不到标签页元素，请检查 HTML 结构');
    return;
  }

  // 给每个标签按钮绑定点击事件
  tabBtns.forEach(btn => {
    // ✅ FIX #4：用 addEventListener 而不是 onclick，避免被覆盖
    btn.addEventListener('click', () => {
      // ✅ FIX #5：获取正确的属性名 data-tab（而不是 target）
      const tabName = btn.getAttribute('data-tab');
      
      // ✅ FIX #6：验证 tabName 是否存在
      if (!tabName) {
        console.warn('⚠️ 按钮没有 data-tab 属性');
        return;
      }

      // 构建目标面板的 ID
      const targetId = `tab-${tabName}`;
      const targetScreen = document.getElementById(targetId);

      // ✅ FIX #7：检查目标面板是否存在
      if (!targetScreen) {
        console.warn(`⚠️ 找不到标签页面 #${targetId}`);
        return;
      }

      // 先让所有按钮取消"选中状态"
      tabBtns.forEach(b => b.classList.remove('active'));
      // 先让所有内容面板隐藏
      tabScreens.forEach(s => s.classList.remove('active'));

      // 给当前点击的按钮设置"选中状态"
      btn.classList.add('active');
      // 显示对应的内容面板
      targetScreen.classList.add('active');
    });
  });

  // ✅ FIX #8：默认激活第一个标签（改进：直接触发事件而不是重复代码）
  if (tabBtns.length > 0) {
    // 模拟点击第一个按钮，触发其事件监听
    tabBtns[0].click();
  }
}

/**
 * ✅ NEW：通用的切换类名函数（可以复用）
 * @param {string} selector - CSS 选择器
 * @param {string} activeClass - 激活时的类名
 */
export function setupToggleGroup(selector, activeClass = 'active') {
  const items = document.querySelectorAll(selector);
  if (items.length === 0) {
    console.warn(`⚠️ 找不到元素 ${selector}`);
    return;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove(activeClass));
      item.classList.add(activeClass);
    });
  });
}

// 如果以后还有其他地方需要切换，可以直接用这个：
// 比如背包标签页的材料/魔药/道具切换
// setupToggleGroup('.bag-tab', 'active');