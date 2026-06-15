// API Key 设置功能
import { isAiGradingEnabled, setAiGradingEnabled } from './ai/grader.js';

document.addEventListener('DOMContentLoaded', function() {
  const apiModeRadios = document.querySelectorAll('input[name="api-mode"]');
  apiModeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      const customInput = document.getElementById('custom-api-input');
      if (this.value === 'custom') {
        customInput.style.display = 'block';
      } else {
        customInput.style.display = 'none';
      }
    });
  });

  document.getElementById('api-provider')?.addEventListener('change', function() {
    updateApiNote(this.value);
  });

  document.getElementById('save-api-settings')?.addEventListener('click', saveApiSettings);
  document.getElementById('reset-api-settings')?.addEventListener('click', resetApiSettings);
  document.addEventListener('click', function(e) {
    if (e.target?.closest?.('#api-advanced-toggle')) {
      e.preventDefault();
      e.stopPropagation();
      toggleApiAdvanced();
    }
  });

  loadApiSettings();
});

const API_PROVIDERS = {
  openai: { name: 'GPT (OpenAI)', url: 'https://platform.openai.com/', model: 'gpt-4o-mini', keyHint: '格式通常为 sk-xxx' },
  claude: { name: 'Claude (Anthropic)', url: 'https://console.anthropic.com/', model: 'claude-3-haiku-20240307', keyHint: '格式通常为 sk-ant-api-xxx' },
  doubao: { name: '豆包 (火山方舟)', url: 'https://console.volcengine.com/ark/', model: 'doubao-1-5-pro-32k-250115', keyHint: '格式通常为 ak-xxx' },
  gemini: { name: 'Gemini (Google)', url: 'https://ai.google.dev/', model: 'gemini-1.5-flash-latest', keyHint: '格式通常为 AIza-xxx' },
  qianwen: { name: '千问 (阿里云)', url: 'https://dashscope.aliyun.com/', model: 'qwen-turbo', keyHint: '格式通常为 sk-xxx' },
  glm: { name: 'GLM (智谱)', url: 'https://open.bigmodel.cn/', model: 'glm-4-flash', keyHint: '使用平台生成的 Bearer Token' },
  kimi: { name: 'Kimi (Moonshot)', url: 'https://platform.moonshot.cn/', model: 'moonshot-v1-8k', keyHint: '格式通常为 sk-xxx' },
  deepseek: { name: 'DeepSeek (深度求索)', url: 'https://platform.deepseek.com/', model: 'deepseek-v4-flash', keyHint: '格式通常为 sk-xxx' },
  minimax: { name: 'Minimax', url: 'https://platform.minimax.io/', model: 'MiniMax-M2.7', keyHint: '按平台控制台生成' },
  azure: { name: 'Azure OpenAI (Microsoft)', url: 'https://azure.microsoft.com/', model: '', keyHint: '使用 Azure 门户生成的 Key', needsBaseUrl: true }
};

function updateApiNote(provider) {
  const noteEl = document.getElementById('api-note');
  const baseUrlInput = document.getElementById('api-base-url');
  const modelInput = document.getElementById('api-model-input');
  const keyInput = document.getElementById('api-key-input');

  const info = API_PROVIDERS[provider];
  if (keyInput) {
    keyInput.placeholder = `输入 API Key，${info?.keyHint || '按平台控制台生成'}`;
  }
  if (modelInput) {
    const modelHint = info?.model ? `默认 ${info.model}` : 'Azure 可留空';
    modelInput.placeholder = `模型名（不知道就留空，${modelHint}）`;
  }
  if (baseUrlInput) baseUrlInput.placeholder = provider === 'azure'
    ? '完整 Azure 部署地址'
    : '自定义 API 地址 / 后端代理地址（不知道就留空）';

  if (info) {
    noteEl.innerHTML = `<strong>💡 提示：</strong>密钥只保存在本地浏览器；调用 AI 时会发送给当前选择的 API 平台。可在 <a href="${info.url}" target="_blank">${info.name} 平台</a> 获取。`;
  }
}

function toggleApiAdvanced() {
  const panel = document.getElementById('api-advanced-panel');
  const button = document.getElementById('api-advanced-toggle');
  panel?.classList.toggle('show');
  if (button && panel) {
    button.textContent = panel.classList.contains('show') ? '▾ 高级设置' : '▸ 高级设置';
  }
}

function loadApiSettings() {
  const savedMode = localStorage.getItem('apiMode') || 'default';
  const savedKey = localStorage.getItem('apiKey') || '';
  const savedProvider = localStorage.getItem('apiProvider') || 'deepseek';
  const savedBaseUrl = localStorage.getItem('apiBaseUrl') || '';
  const savedModel = localStorage.getItem('apiModel') || '';
  const savedAiGradingEnabled = isAiGradingEnabled();

  const modeRadio = document.querySelector(`input[name="api-mode"][value="${savedMode}"]`);
  const providerSelect = document.getElementById('api-provider');
  const keyInput = document.getElementById('api-key-input');
  const baseUrlInput = document.getElementById('api-base-url');
  const modelInput = document.getElementById('api-model-input');
  const aiGradingToggle = document.getElementById('ai-grading-enabled');

  if (modeRadio) modeRadio.checked = true;
  if (providerSelect) providerSelect.value = savedProvider;
  if (keyInput) keyInput.value = savedKey;
  if (baseUrlInput) baseUrlInput.value = savedBaseUrl;
  if (modelInput) modelInput.value = savedModel;
  if (aiGradingToggle) aiGradingToggle.checked = savedAiGradingEnabled;

  const customInput = document.getElementById('custom-api-input');

  updateApiNote(savedProvider);

  if (savedMode === 'custom') {
    customInput.style.display = 'block';
  } else {
    customInput.style.display = 'none';
  }

  const advancedPanel = document.getElementById('api-advanced-panel');
  const advancedToggle = document.getElementById('api-advanced-toggle');
  if (advancedPanel && (savedBaseUrl || savedModel)) {
    advancedPanel.classList.add('show');
    if (advancedToggle) advancedToggle.textContent = '▾ 高级设置';
  }
}

function saveApiSettings() {
  const mode = document.querySelector('input[name="api-mode"]:checked')?.value || 'default';
  const apiKey = document.getElementById('api-key-input')?.value || '';
  const provider = document.getElementById('api-provider')?.value || 'deepseek';
  const baseUrl = document.getElementById('api-base-url')?.value || '';
  const model = document.getElementById('api-model-input')?.value || '';
  const aiGradingEnabled = document.getElementById('ai-grading-enabled')?.checked !== false;

  localStorage.setItem('apiMode', mode);
  localStorage.setItem('apiKey', apiKey);
  localStorage.setItem('apiProvider', provider);
  localStorage.setItem('apiBaseUrl', baseUrl);
  localStorage.setItem('apiModel', model);
  setAiGradingEnabled(aiGradingEnabled);

  showApiStatus('success', '✓ 设置已保存！');
}

function resetApiSettings() {
  localStorage.removeItem('apiMode');
  localStorage.removeItem('apiKey');
  localStorage.removeItem('deepseek_api_key');
  localStorage.removeItem('apiProvider');
  localStorage.removeItem('apiBaseUrl');
  localStorage.removeItem('apiModel');
  localStorage.removeItem('aiGradingEnabled');

  const defaultModeRadio = document.querySelector('input[name="api-mode"][value="default"]');
  const providerSelect = document.getElementById('api-provider');
  const keyInput = document.getElementById('api-key-input');
  const baseUrlInput = document.getElementById('api-base-url');
  const modelInput = document.getElementById('api-model-input');
  const aiGradingToggle = document.getElementById('ai-grading-enabled');

  if (defaultModeRadio) defaultModeRadio.checked = true;
  if (providerSelect) providerSelect.value = 'deepseek';
  if (keyInput) keyInput.value = '';
  if (baseUrlInput) baseUrlInput.value = '';
  if (modelInput) modelInput.value = '';
  if (aiGradingToggle) aiGradingToggle.checked = false;
  document.getElementById('custom-api-input').style.display = 'none';
  document.getElementById('api-advanced-panel')?.classList.remove('show');
  const advancedToggle = document.getElementById('api-advanced-toggle');
  if (advancedToggle) advancedToggle.textContent = '▸ 高级设置';

  updateApiNote('deepseek');
  showApiStatus('success', '✓ 已重置为默认设置');
}

function showApiStatus(type, message) {
  const statusDiv = document.getElementById('api-status');
  const statusText = document.getElementById('api-status-text');

  statusDiv.className = type;
  statusText.textContent = message;
  statusDiv.style.display = 'block';

  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}

