// hogsmeade/shopUI.js
// 商店界面组件

export class shopUI {
  constructor(shopManager, onClose) {
    this.shopManager = shopManager;
    this.onClose = onClose;
    this.currentTab = 'buy';
    this.cart = [];
    this.container = null;
  }
  
  render() {
    const shop = this.shopManager.currentShop;
    if (!shop) return null;
    
    // ✅ 渲染前先同步货币
    if (window.currency) {
      const wallet = window.currency.getWallet();
      this.shopManager.player.galleons = wallet.galleons;
      this.shopManager.player.sickles = wallet.sickles;
      this.shopManager.player.knuts = wallet.knuts;
    }

    // 注入商店样式（作用域隔离，不污染全局）
    if (!document.getElementById('shop-ui-style')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="shop-ui-style">
.shop-ui-container .shop-ui-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.75); display: flex;
  justify-content: center; align-items: center; z-index: 10000;
}
.shop-ui-container .shop-ui-panel {
  width: 92vw; max-width: 480px;
  height: 85vh; max-height: 680px;
  background: #1a2035;
  border: 1px solid #3b4f8a;
  border-radius: 14px;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  overflow: hidden;
  color: #e6e6e6;
}
.shop-ui-container .shop-ui-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px;
  background: #161d2f;
  border-bottom: 1px solid #2a3b66;
}
.shop-ui-container .shop-ui-title { display: flex; align-items: center; gap: 8px; }
.shop-ui-container .shop-ui-title .shop-icon { font-size: 24px; }
.shop-ui-container .shop-ui-title h2 { margin: 0; font-size: 17px; color: #f8c850; }
.shop-ui-container .shop-ui-money { font-size: 13px; color: #f8d49d; }
.shop-ui-container .shop-ui-close {
  background: rgba(255,255,255,0.1); border: none; color: #e6e6e6;
  font-size: 22px; width: 32px; height: 32px; border-radius: 50%;
  cursor: pointer; transition: all 0.2s; line-height: 1;
}
.shop-ui-container .shop-ui-close:hover { background: rgba(255,255,255,0.25); }
.shop-ui-container .shop-ui-owner {
  padding: 8px 16px; background: #12192a;
  font-style: italic; font-size: 13px; color: #f8d49d;
  border-bottom: 1px solid #2a3b66; text-align: center;
}
.shop-ui-container .shop-ui-tabs {
  display: flex; gap: 6px; padding: 10px 16px;
  background: #161d2f; border-bottom: 1px solid #2a3b66;
}
.shop-ui-container .shop-tab-btn {
  padding: 6px 16px; background: #2a3b66; border: none;
  border-radius: 20px; cursor: pointer; color: #e6e6e6;
  font-size: 13px; transition: all 0.2s;
}
.shop-ui-container .shop-tab-btn:hover { background: #3b4f8a; }
.shop-ui-container .shop-tab-btn.active { background: #5c6bc0; color: #fff; font-weight: 600; }
.shop-ui-container .shop-tab-btn.special-btn { background: #8b4513; color: #ffd700; }
.shop-ui-container .shop-ui-content { flex: 1; overflow-y: auto; padding: 14px 16px; }
.shop-ui-container .items-grid {
  display: flex; flex-direction: column; gap: 10px;
}
.shop-ui-container .shop-item, .shop-ui-container .sell-item {
  background: #1e293b; border: 1px solid #2a3b66;
  border-radius: 10px; padding: 10px 12px;
  display: flex; gap: 10px; align-items: flex-start;
  transition: all 0.2s;
}
.shop-ui-container .shop-item:hover { border-color: #5c6bc0; }
.shop-ui-container .item-icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
.shop-ui-container .item-info { flex: 1; }
.shop-ui-container .item-name { font-weight: 600; font-size: 14px; color: #e6e6e6; }
.shop-ui-container .item-desc { font-size: 12px; color: #8899aa; margin: 3px 0; line-height: 1.4; }
.shop-ui-container .item-price { font-size: 13px; color: #f8d49d; font-weight: 600; margin-top: 4px; }
.shop-ui-container .item-stock { font-size: 11px; color: #8899aa; margin-left: 8px; }
.shop-ui-container .item-actions {
  display: flex; flex-direction: column; gap: 6px; align-items: center; flex-shrink: 0;
}
.shop-ui-container .item-quantity, .shop-ui-container .sell-quantity {
  width: 52px; padding: 4px; border: 1px solid #2a3b66;
  border-radius: 6px; text-align: center; background: #0b0f1a; color: #e6e6e6;
}
.shop-ui-container .buy-item-btn {
  padding: 5px 12px; background: #2a3b66; color: #f8d49d;
  border: 1px solid #3b4f8a; border-radius: 16px; cursor: pointer; font-size: 13px;
  white-space: nowrap; transition: all 0.2s;
}
.shop-ui-container .buy-item-btn:hover { background: #3b4f8a; }
.shop-ui-container .sell-item-btn {
  padding: 5px 12px; background: #1a3a23; color: #4caf82;
  border: 1px solid #2a5a33; border-radius: 16px; cursor: pointer; font-size: 13px;
  transition: all 0.2s;
}
.shop-ui-container .empty-message { text-align: center; padding: 40px; color: #8899aa; }
.shop-ui-container .sell-hint {
  background: #12192a; padding: 8px 12px; border-radius: 8px;
  margin-bottom: 12px; font-size: 12px; color: #6b9fff; border: 1px solid #1e3050;
}
.shop-ui-container .special-feature { text-align: center; padding: 40px; }
.shop-ui-container .special-icon { font-size: 56px; margin-bottom: 16px; }
.shop-ui-container .trigger-special-btn {
  margin-top: 16px; padding: 10px 28px; background: #2a3b66;
  color: #f8d49d; border: 1px solid #3b4f8a; border-radius: 24px;
  cursor: pointer; font-size: 15px;
}
@keyframes shopSlideIn {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.shop-ui-container .shop-ui-panel { animation: shopSlideIn 0.25s ease; }
</style>`);
    }

    const container = document.createElement('div');
    container.className = 'shop-ui-container';
    
    const isGringotts = shop.id === 'gringotts';
    
    container.innerHTML = `
      <div class="shop-ui-overlay">
        <div class="shop-ui-panel">
          <div class="shop-ui-header">
            <div class="shop-ui-title">
              <span class="shop-icon">${shop.icon}</span>
              <h2>${shop.name}</h2>
            </div>
            <div class="shop-ui-money" id="shop-money-display">
              🟡${this.shopManager.player.galleons} ⚪${this.shopManager.player.sickles||0} 🟤${this.shopManager.player.knuts||0}
            </div>
            <button class="shop-ui-close">&times;</button>
          </div>
          
          <div class="shop-ui-owner">
            "${shop.getWelcomeMessage(this.shopManager.player)}"
          </div>
          
          ${!isGringotts ? `
          <div class="shop-ui-tabs">
            <button class="shop-tab-btn ${this.currentTab === 'buy' ? 'active' : ''}" data-tab="buy">
              🛒 购买
            </button>
            <button class="shop-tab-btn ${this.currentTab === 'sell' ? 'active' : ''}" data-tab="sell">
              💰 出售
            </button>
            ${shop.specialFeature ? `
              <button class="shop-tab-btn special-btn" data-tab="special">
                ✨ ${shop.specialFeature.name}
              </button>
            ` : ''}
          </div>
          ` : `
          <div class="shop-ui-tabs">
            <button class="shop-tab-btn ${this.currentTab === 'deposit' ? 'active' : ''}" data-tab="deposit">
              📥 存款
            </button>
            <button class="shop-tab-btn ${this.currentTab === 'withdraw' ? 'active' : ''}" data-tab="withdraw">
              📤 取款
            </button>
            <button class="shop-tab-btn ${this.currentTab === 'statement' ? 'active' : ''}" data-tab="statement">
              📊 对账单
            </button>
          </div>
          `}
          
          <div class="shop-ui-content">
            ${this.renderContent()}
          </div>
          
          ${!isGringotts && this.cart.length > 0 ? this.renderCart() : ''}
        </div>
      </div>
    `;
    
    this.container = container;
    this.bindEvents();
    
    return container;
  }
  
  renderContent() {
    const shop = this.shopManager.currentShop;
    
    if (shop.id === 'gringotts') {
      return this.renderGringottsBank(shop);
    }
    
    if (this.currentTab === 'buy') {
      return this.renderBuyItems(shop);
    } else if (this.currentTab === 'sell') {
      return this.renderSellItems(shop);
    } else if (this.currentTab === 'special') {
      return this.renderSpecial(shop);
    }
    
    return '<div>加载中...</div>';
  }
  
  renderBuyItems(shop) {
    const availableItems = shop.items.filter(item => 
      item.buyable && (!item.minLevel || item.minLevel <= this.shopManager.player.year)
    );
    
    if (availableItems.length === 0) {
      return '<div class="empty-message">暂无商品出售</div>';
    }
    
    return `
      <div class="items-grid">
        ${availableItems.map(item => `
          <div class="shop-item" data-item-id="${item.id}">
            <div class="item-icon">${item.icon}</div>
            <div class="item-info">
              <div class="item-name">${item.name}</div>
              <div class="item-desc">${item.description}</div>
              <div class="item-price">
                💰 ${item.displayPrice || (shop.getItemPrice(item, this.shopManager.player) + " 纳特")}
                ${item.stock !== undefined ? `<span class="item-stock">库存: ${item.stock}</span>` : ''}
              </div>
            </div>
            <div class="item-actions">
              <input type="number" class="item-quantity" value="1" min="1" max="${item.stock || 99}">
              <button class="buy-item-btn" data-item-id="${item.id}">
                购买
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  renderSellItems(shop) {
    const playerMaterials = this.shopManager.player.materials || {};
    const sellableItems = Object.entries(playerMaterials)
      .filter(([name, count]) => shop.buybackItems[name] && count > 0);
    
    if (sellableItems.length === 0) {
      return '<div class="empty-message">没有可出售的物品</div>';
    }
    
    return `
      <div class="sell-items">
        <div class="sell-hint">💡 将这些物品卖给商店换取加隆</div>
        <div class="items-grid">
          ${sellableItems.map(([name, count]) => `
            <div class="sell-item" data-item-name="${name}">
              <div class="item-icon">${this.getMaterialIcon(name)}</div>
              <div class="item-info">
                <div class="item-name">${name}</div>
                <div class="item-stock">拥有: ${count}</div>
                <div class="item-price">💰 ${(p=>{return `${Math.floor(p/493)>0?Math.floor(p/493)+'加隆 ':''}${Math.floor(p%493/29)>0?Math.floor(p%493/29)+'西可 ':''}${p%29>0?p%29+'纳特':''}`.trim()||'0纳特'})(shop.buybackItems[name])}/个</div>
              </div>
              <div class="item-actions">
                <input type="number" class="sell-quantity" value="1" min="1" max="${count}">
                <button class="sell-item-btn" data-item-name="${name}" data-item-price="${shop.buybackItems[name]}">
                  出售
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  renderSpecial(shop) {
    if (!shop.specialFeature) return null;
    
    return `
      <div class="special-feature">
        <div class="special-icon">✨</div>
        <h3>${shop.specialFeature.name}</h3>
        <p>${shop.specialFeature.description}</p>
        <button class="trigger-special-btn" id="triggerSpecial">
          体验 ${shop.specialFeature.name}
        </button>
      </div>
    `;
  }
  
  renderGringottsBank(shop) {
    const accountInfo = shop.getAccountInfo();
    const accountType = accountInfo.accountType;
    
    return `
      <style>
        .gringotts-panel { padding: 12px; }
        .gringotts-balance { 
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
          text-align: center;
          border: 2px solid ${accountType.color};
        }
        .gringotts-balance .account-type { 
          font-size: 14px; 
          color: ${accountType.color};
          margin-bottom: 8px;
        }
        .gringotts-balance .balance { 
          font-size: 24px; 
          font-weight: bold; 
          color: #ffd700;
        }
        .gringotts-balance .interest-rate { 
          font-size: 12px; 
          color: #8899aa;
          margin-top: 8px;
        }
        .gringotts-services {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .gringotts-service {
          background: #1e293b;
          border: 1px solid #2a3b66;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .gringotts-service:hover { border-color: #5c6bc0; background: #2a3b66; }
        .gringotts-service .service-icon { font-size: 24px; margin-bottom: 4px; }
        .gringotts-service .service-name { font-size: 13px; font-weight: 600; }
        .gringotts-service .service-desc { font-size: 11px; color: #8899aa; margin-top: 2px; }
        .gringotts-form { margin-top: 16px; }
        .gringotts-form .form-group { margin-bottom: 12px; }
        .gringotts-form .form-label { font-size: 12px; color: #a9b4d2; margin-bottom: 4px; display: block; }
        .gringotts-form .form-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #2a3b66;
          border-radius: 8px;
          background: #0b0f1a;
          color: #e6e6e6;
          font-size: 14px;
          box-sizing: border-box;
        }
        .gringotts-form .form-row { display: flex; gap: 8px; }
        .gringotts-form .form-row .form-group { flex: 1; }
        .gringotts-form .submit-btn {
          width: 100%;
          padding: 10px;
          background: #2a3b66;
          color: #f8d49d;
          border: 1px solid #3b4f8a;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          margin-top: 12px;
        }
        .gringotts-form .submit-btn:hover { background: #3b4f8a; }
        .gringotts-message {
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 12px;
          text-align: center;
          font-size: 13px;
        }
        .gringotts-message.success { background: #1a3a23; color: #4caf82; }
        .gringotts-message.error { background: #3a1a1a; color: #ff6b6b; }
        .gringotts-transactions { margin-top: 16px; }
        .gringotts-transactions .transaction-header { font-size: 14px; font-weight: 600; margin-bottom: 10px; }
        .gringotts-transactions .transaction-list { max-height: 200px; overflow-y: auto; }
        .gringotts-transactions .transaction-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 10px;
          background: #1e293b;
          border-radius: 6px;
          margin-bottom: 6px;
          font-size: 12px;
        }
        .gringotts-transactions .transaction-item .desc { flex: 1; }
        .gringotts-transactions .transaction-item .amount { font-weight: 600; }
        .gringotts-transactions .transaction-item.deposit .amount { color: #4caf82; }
        .gringotts-transactions .transaction-item.withdraw .amount { color: #ff6b6b; }
        .gringotts-transactions .transaction-item.interest .amount { color: #ffd700; }
      </style>
      
      <div class="gringotts-panel" id="gringotts-panel">
        <div class="gringotts-balance">
          <div class="account-type">🏦 ${accountType.name}</div>
          <div class="balance">💰 ${accountInfo.formattedBalance}</div>
          <div class="interest-rate">年利率: ${(accountType.interestRate * 100).toFixed(1)}%</div>
        </div>
        
        <div class="gringotts-services">
          <div class="gringotts-service" data-service="deposit">
            <div class="service-icon">📥</div>
            <div class="service-name">存款</div>
            <div class="service-desc">存入金币</div>
          </div>
          <div class="gringotts-service" data-service="withdraw">
            <div class="service-icon">📤</div>
            <div class="service-name">取款</div>
            <div class="service-desc">提取金币</div>
          </div>
          <div class="gringotts-service" data-service="statement">
            <div class="service-icon">📊</div>
            <div class="service-name">对账单</div>
            <div class="service-desc">交易记录</div>
          </div>
        </div>
        
        <div id="gringotts-form-container"></div>
      </div>
    `;
  }
  
  renderCart() {
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return `
      <div class="shopping-cart">
        <div class="cart-header">
          <span>🛒 购物车 (${this.cart.length}件)</span>
          <button class="clear-cart-btn">清空</button>
        </div>
        <div class="cart-items">
          ${this.cart.map(item => `
            <div class="cart-item">
              <span>${item.name} x${item.quantity}</span>
              <span>💰 ${item.price * item.quantity}</span>
              <button class="remove-cart-item" data-item-id="${item.id}">移除</button>
            </div>
          `).join('')}
        </div>
        <div class="cart-footer">
          <span class="cart-total">总计: ${total} 加隆</span>
          <button class="checkout-btn" ${total > (window.currency?.getTotalKnuts?.() ?? this.shopManager.player.galleons * 493) ? 'disabled' : ''}>
            结算
          </button>
        </div>
      </div>
    `;
  }
  
  bindEvents() {
    // 关闭按钮
    const closeBtn = this.container.querySelector('.shop-ui-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.shopManager.closeShop();
        if (this.onClose) {
          this.onClose();
        }
        this.container.remove();
      });
    }
    
    // Tab切换
    const tabBtns = this.container.querySelectorAll('.shop-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentTab = e.target.dataset.tab;
        this.refresh();
      });
    });
    
    // 购买按钮（直接购买，不走购物车）
    const buyBtns = this.container.querySelectorAll('.buy-item-btn');
    buyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const quantityInput = btn.parentElement.querySelector('.item-quantity');
        const quantity = parseInt(quantityInput?.value) || 1;
        const result = this.shopManager.buyItem(itemId, quantity);
        if (result.success) {
          // 同步 player 货币数据（从 currency.js 读最新值）
          if (window.currency) {
            const w = window.currency.getWallet();
            this.shopManager.player.galleons = w.galleons;
            this.shopManager.player.sickles  = w.sickles;
            this.shopManager.player.knuts    = w.knuts;
          }
          this.showMessage(`✅ ${result.message}`, 'success');
          this.refresh();
        } else {
          this.showMessage(`❌ ${result.message}`, 'error');
        }
      });
    });
    
    // 出售按钮
    const sellBtns = this.container.querySelectorAll('.sell-item-btn');
    sellBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemName = btn.dataset.itemName;
        const quantityInput = btn.parentElement.querySelector('.sell-quantity');
        const quantity = parseInt(quantityInput.value);
        const price = parseInt(btn.dataset.itemPrice);
        this.sellItem(itemName, quantity, price);
      });
    });
    
    // 特殊功能按钮
    const specialBtn = this.container.querySelector('#triggerSpecial');
    if (specialBtn) {
      specialBtn.addEventListener('click', async () => {
        const result = await this.shopManager.performSpecial();
        this.showMessage(result.message, result.success ? 'success' : 'error');
        if (result.success) this.refresh();
      });
    }
    
    // 清空购物车
    const clearCartBtn = this.container.querySelector('.clear-cart-btn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        this.cart = [];
        this.refresh();
      });
    }
    
    // 移除购物车项
    const removeBtns = this.container.querySelectorAll('.remove-cart-item');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = btn.dataset.itemId;
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.refresh();
      });
    });
    
    // 结算
    const checkoutBtn = this.container.querySelector('.checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => this.checkout());
    }
    
    // 古灵阁银行服务
    const gringottsServices = this.container.querySelectorAll('.gringotts-service');
    gringottsServices.forEach(service => {
      service.addEventListener('click', (e) => {
        const serviceId = e.currentTarget.dataset.service;
        this.showGringottsService(serviceId);
      });
    });
  }
  
  showGringottsService(serviceId) {
    const container = this.container.querySelector('#gringotts-form-container');
    if (!container) return;
    
    switch (serviceId) {
      case 'deposit':
        container.innerHTML = `
          <div class="gringotts-form">
            <h4 style="margin-bottom: 12px;">📥 存款</h4>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">加隆</label>
                <input type="number" class="form-input" id="deposit-galleons" min="0" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">西可</label>
                <input type="number" class="form-input" id="deposit-sickles" min="0" max="16" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">纳特</label>
                <input type="number" class="form-input" id="deposit-knuts" min="0" max="28" placeholder="0">
              </div>
            </div>
            <button class="submit-btn" onclick="window.shopUIInstance.handleDeposit()">确认存款</button>
          </div>
        `;
        break;
        
      case 'withdraw':
        container.innerHTML = `
          <div class="gringotts-form">
            <h4 style="margin-bottom: 12px;">📤 取款</h4>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">加隆</label>
                <input type="number" class="form-input" id="withdraw-galleons" min="0" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">西可</label>
                <input type="number" class="form-input" id="withdraw-sickles" min="0" max="16" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">纳特</label>
                <input type="number" class="form-input" id="withdraw-knuts" min="0" max="28" placeholder="0">
              </div>
            </div>
            <button class="submit-btn" onclick="window.shopUIInstance.handleWithdraw()">确认取款</button>
          </div>
        `;
        break;
        
      case 'statement':
        const shop = this.shopManager.currentShop;
        const accountInfo = shop.getAccountInfo();
        const transactions = accountInfo.transactions || [];
        
        container.innerHTML = `
          <div class="gringotts-transactions">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <div class="transaction-header">📊 最近交易记录</div>
              <button class="close-statement-btn" onclick="window.shopUIInstance.closeStatement()" style="padding: 4px 8px; background: #2a3b66; border: none; border-radius: 4px; color: #e6e6e6; font-size: 12px; cursor: pointer;">关闭</button>
            </div>
            <div class="transaction-list">
              ${transactions.length > 0 ? transactions.map(t => `
                <div class="transaction-item ${t.type}">
                  <div class="desc">${t.description}</div>
                  <div class="amount">${t.type === 'deposit' ? '+' : t.type === 'withdraw' ? '-' : '+'}${shop.formatKnuts(t.amount)}</div>
                </div>
              `).join('') : '<div style="text-align: center; padding: 20px; color: #8899aa;">暂无交易记录</div>'}
            </div>
          </div>
        `;
        break;
    }
    
    window.shopUIInstance = this;
  }
  
  handleDeposit() {
    const g = parseInt(document.getElementById('deposit-galleons')?.value) || 0;
    const s = parseInt(document.getElementById('deposit-sickles')?.value) || 0;
    const k = parseInt(document.getElementById('deposit-knuts')?.value) || 0;
    
    const shop = this.shopManager.currentShop;
    const result = shop.deposit(g, s, k);
    
    const container = this.container.querySelector('#gringotts-form-container');
    if (container) {
      container.innerHTML = `<div class="gringotts-message ${result.success ? 'success' : 'error'}">${result.message}</div>`;
    }
    
    if (result.success) {
      setTimeout(() => this.refresh(), 2000);
    }
  }
  
  handleWithdraw() {
    const g = parseInt(document.getElementById('withdraw-galleons')?.value) || 0;
    const s = parseInt(document.getElementById('withdraw-sickles')?.value) || 0;
    const k = parseInt(document.getElementById('withdraw-knuts')?.value) || 0;
    
    const shop = this.shopManager.currentShop;
    const result = shop.withdraw(g, s, k);
    
    const container = this.container.querySelector('#gringotts-form-container');
    if (container) {
      container.innerHTML = `<div class="gringotts-message ${result.success ? 'success' : 'error'}">${result.message}</div>`;
    }
    
    if (result.success) {
      setTimeout(() => this.refresh(), 2000);
    }
  }
  
  closeStatement() {
    const container = this.container.querySelector('#gringotts-form-container');
    if (container) {
      container.innerHTML = '';
    }
  }
  
  addToCart(itemId, quantity) {
    const shop = this.shopManager.currentShop;
    const item = shop.items.find(i => i.id === itemId);
    if (!item) return;
    
    const price = shop.getItemPrice(item, this.shopManager.player);
    const existing = this.cart.find(i => i.id === itemId);
    
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        id: itemId,
        name: item.name,
        price: price,
        quantity: quantity
      });
    }
    
    this.refresh();
  }
  
  checkout() {
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const owned = window.currency?.getTotalKnuts?.() ?? (this.shopManager.player.galleons * 493);
    if (total > owned) {
      this.showMessage("金币不足！", "error");
      return;
    }
    
    // 逐个购买
    for (const cartItem of this.cart) {
      const result = this.shopManager.buyItem(cartItem.id, cartItem.quantity);
      if (!result.success) {
        this.showMessage(result.message, "error");
        return;
      }
    }
    
    this.showMessage(`购买成功！花费 ${total} 加隆`, "success");
    this.cart = [];
    this.refresh();
  }
  
  sellItem(itemName, quantity, unitPrice) {
    const result = this.shopManager.sellItem(itemName, quantity);
    if (result.success) {
      this.showMessage(result.message, "success");
      this.refresh();
    } else {
      this.showMessage(result.message, "error");
    }
  }
  
  getMaterialIcon(materialName) {
    const icons = {
      "干荨麻": "🌿",
      "薄荷": "🌱",
      "蛇牙": "🦷",
      "独角兽角粉": "🦄"
    };
    return icons[materialName] || "📦";
  }
  
  showMessage(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `shop-toast ${type}`;
    toast.innerHTML = message.replace(/\n/g, '<br>');
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      z-index: 10001;
      max-width: 85vw;
      text-align: center;
      font-size: 12px;
      line-height: 1.6;
      animation: fadeOut 3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
  
  refresh() {
    // 同步最新货币
    if (window.currency) {
      const w = window.currency.getWallet();
      this.shopManager.player.galleons = w.galleons;
      this.shopManager.player.sickles  = w.sickles;
      this.shopManager.player.knuts    = w.knuts;
    }
    // 更新头部货币显示
    const moneyEl = this.container.querySelector('#shop-money-display');
    if (moneyEl) {
      moneyEl.textContent = `🟡${this.shopManager.player.galleons} ⚪${this.shopManager.player.sickles} 🟤${this.shopManager.player.knuts}`;
    }
    const newContent = this.renderContent();
    const contentArea = this.container.querySelector('.shop-ui-content');
    if (contentArea) {
      contentArea.innerHTML = newContent;
    }
    this.bindEvents();
  }
}