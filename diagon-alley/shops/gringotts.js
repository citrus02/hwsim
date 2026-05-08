// diagon-alley/shops/gringotts.js
// 古灵阁巫师银行 - 完整银行系统

import { BaseShop } from '../../hogsmeade/baseShop.js';
import { getSave, setSave, addLog } from '../../save-system.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;

export const GringottsConfig = {
  id: "gringotts",
  name: "古灵阁巫师银行",
  icon: "🏦",
  description: "妖精经营的巫师银行，保管着巫师世界的大部分财富。金库由火龙守护，是最安全的地方",
  owner: "拉环（首席妖精）",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  interestRate: 0.03,
  interestPeriod: 7,
  
  accountTypes: [
    { type: 'bronze', name: '铜账户', minDeposit: 0, interestRate: 0.01, color: '#cd7f32' },
    { type: 'silver', name: '银账户', minDeposit: G(100), interestRate: 0.02, color: '#c0c0c0' },
    { type: 'gold', name: '金账户', minDeposit: G(500), interestRate: 0.03, color: '#ffd700' },
    { type: 'platinum', name: '铂金账户', minDeposit: G(2000), interestRate: 0.05, color: '#e5e4e2' },
    { type: 'dragon', name: '火龙账户', minDeposit: G(10000), interestRate: 0.08, color: '#ff4500' },
  ],

  services: [
    {
      id: 'deposit',
      name: '存款',
      icon: '📥',
      description: '将金币存入您的银行账户'
    },
    {
      id: 'withdraw',
      name: '取款',
      icon: '📤',
      description: '从银行账户提取金币'
    },
    {
      id: 'transfer',
      name: '转账',
      icon: '🔄',
      description: '向其他巫师转账'
    },
    {
      id: 'exchange',
      name: '货币兑换',
      icon: '💱',
      description: '麻瓜货币兑换巫师货币'
    },
    {
      id: 'safe_box',
      name: '保险箱',
      icon: '🔒',
      description: '租用私人保险箱'
    },
    {
      id: 'statement',
      name: '对账单',
      icon: '📊',
      description: '查看账户交易记录'
    }
  ],

  items: []
};

export class GringottsBank extends BaseShop {
  constructor() {
    super(GringottsConfig);
    this.loadAccount();
  }

  loadAccount() {
    const data = getSave();
    if (!data.gringotts) {
      data.gringotts = {
        balance: 0,
        accountType: 'bronze',
        lastInterestDate: data.time?.currentDate || '1991-09-01',
        transactions: [],
        safeBoxRented: false,
        safeBoxItems: []
      };
      setSave(data);
    }
    this.account = data.gringotts;
  }

  saveAccount() {
    const data = getSave();
    data.gringotts = this.account;
    setSave(data);
  }

  getAccountType() {
    const types = GringottsConfig.accountTypes;
    for (let i = types.length - 1; i >= 0; i--) {
      if (this.account.balance >= types[i].minDeposit) {
        return types[i];
      }
    }
    return types[0];
  }

  updateAccountType() {
    const type = this.getAccountType();
    this.account.accountType = type.type;
    this.saveAccount();
  }

  calculateInterest() {
    const data = getSave();
    const currentDate = data.time?.currentDate || '1991-09-01';
    const lastDate = this.account.lastInterestDate;
    
    const current = new Date(currentDate);
    const last = new Date(lastDate);
    const daysDiff = Math.floor((current - last) / (1000 * 60 * 60 * 24));
    
    if (daysDiff >= GringottsConfig.interestPeriod && this.account.balance > 0) {
      const periods = Math.floor(daysDiff / GringottsConfig.interestPeriod);
      const accountType = this.getAccountType();
      const interest = Math.floor(this.account.balance * accountType.interestRate * periods);
      
      if (interest > 0) {
        this.account.balance += interest;
        this.account.lastInterestDate = currentDate;
        this.addTransaction('interest', interest, `获得利息 ${this.formatKnuts(interest)}`);
        this.updateAccountType();
        return { earned: interest, periods: periods };
      }
    }
    return null;
  }

  deposit(galleons, sickles, knuts) {
    const totalKnuts = galleons * 493 + sickles * 29 + knuts;
    
    if (totalKnuts <= 0) {
      return { success: false, message: '存款金额必须大于零' };
    }

    const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
    if (totalKnutsOwned < totalKnuts) {
      return { success: false, message: '您没有足够的金币' };
    }

    const spendSuccess = window.currency?.spendMoney?.(galleons, sickles, knuts);
    if (!spendSuccess) {
      return { success: false, message: '扣款失败，请重试' };
    }
    
    this.account.balance += totalKnuts;
    
    this.addTransaction('deposit', totalKnuts, `存入 ${this.formatKnuts(totalKnuts)}`);
    this.updateAccountType();
    
    addLog(`🏦 存入 ${this.formatKnuts(totalKnuts)} 到古灵阁账户`);
    return { success: true, message: `成功存入 ${this.formatKnuts(totalKnuts)}`, balance: this.account.balance };
  }

  withdraw(galleons, sickles, knuts) {
    const totalKnuts = galleons * 493 + sickles * 29 + knuts;
    
    if (totalKnuts <= 0) {
      return { success: false, message: '取款金额必须大于零' };
    }

    if (this.account.balance < totalKnuts) {
      return { success: false, message: '账户余额不足' };
    }

    this.account.balance -= totalKnuts;
    window.currency?.addMoney?.(galleons, sickles, knuts, '从银行取款');
    
    this.addTransaction('withdraw', totalKnuts, `取出 ${this.formatKnuts(totalKnuts)}`);
    this.updateAccountType();
    
    addLog(`🏦 从账户取出 ${this.formatKnuts(totalKnuts)}`);
    return { success: true, message: `成功取出 ${this.formatKnuts(totalKnuts)}`, balance: this.account.balance };
  }

  addTransaction(type, amount, description) {
    const data = getSave();
    const date = data.time?.currentDate || new Date().toISOString().split('T')[0];
    
    this.account.transactions.unshift({
      id: Date.now(),
      type: type,
      amount: amount,
      description: description,
      date: date,
      balanceAfter: this.account.balance
    });

    if (this.account.transactions.length > 100) {
      this.account.transactions.pop();
    }
    
    this.saveAccount();
  }

  formatKnuts(knuts) {
    const g = Math.floor(knuts / 493);
    const rem = knuts % 493;
    const s = Math.floor(rem / 29);
    const n = rem % 29;
    const parts = [];
    if (g > 0) parts.push(`${g}加隆`);
    if (s > 0) parts.push(`${s}西可`);
    if (n > 0) parts.push(`${n}纳特`);
    return parts.join(' ') || '0纳特';
  }

  getWelcomeMessage(player) {
    this.calculateInterest();
    const accountType = this.getAccountType();
    return `妖精拉环："欢迎回到古灵阁，${accountType.name}！您的账户余额：${this.formatKnuts(this.account.balance)}"`;
  }

  getAccountInfo() {
    const accountType = this.getAccountType();
    const interest = this.calculateInterest();
    
    return {
      balance: this.account.balance,
      formattedBalance: this.formatKnuts(this.account.balance),
      accountType: accountType,
      interestEarned: interest?.earned || 0,
      transactions: this.account.transactions.slice(0, 10)
    };
  }
}

export default GringottsBank;