const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'version.js');
const content = fs.readFileSync(filePath, 'utf8');

// 1. 提取 CURRENT_VERSION
const versionMatch = content.match(/export const CURRENT_VERSION = ['"]([^'"]+)['"]/);
if (!versionMatch) {
  console.error('未找到 CURRENT_VERSION');
  process.exit(1);
}
const currentVersion = versionMatch[1];
console.log(`当前版本: ${currentVersion}`);

// 2. 提取 versionLogs 对象字符串
// 匹配从 "export const versionLogs = {" 到匹配的 "};" 结束
const logsMatch = content.match(/export const versionLogs = (\{[\s\S]*?\n\});/);
if (!logsMatch) {
  console.error('未找到 versionLogs 对象');
  process.exit(1);
}

let logsStr = logsMatch[1];
// 修复：对象末尾可能有逗号，JSON 不允许，但 eval 可以
// 使用 eval 获取对象（因为是仓库自有代码，安全）
let versionLogs;
try {
  // 创建一个干净的沙盒环境执行
  versionLogs = eval(`(${logsStr})`);
} catch (e) {
  console.error('解析 versionLogs 失败:', e.message);
  process.exit(1);
}

const notes = versionLogs[currentVersion];
if (!notes) {
  console.error(`未找到版本 ${currentVersion} 的更新说明`);
  process.exit(1);
}

// 格式化为多行文本
let output = '';
if (Array.isArray(notes)) {
  output = notes.map(item => item.trim()).join('\n');
} else if (typeof notes === 'string') {
  output = notes.trim();
} else {
  output = String(notes);
}

// 写入 GitHub Actions 环境变量
const fsSync = require('fs');
fsSync.appendFileSync(process.env.GITHUB_OUTPUT, `notes<<EOF\n${output}\nEOF\n`);
console.log('提取成功，内容：\n', output);