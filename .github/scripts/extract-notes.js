// .github/scripts/extract-notes.js
const fs = require('fs');
const path = require('path');

// 读取 version.js 文件内容
const versionJsPath = path.resolve(process.cwd(), 'version.js');
const content = fs.readFileSync(versionJsPath, 'utf8');

// 使用正则匹配 versionLogs 对象（简化版，假设参数结构是标准 JS 对象）
// 注意：因为 version.js 是 ES module 且有 import 语句，不能直接 require。
// 我们手动解析 versionLogs = { ... } 部分

// 先找到 versionLogs 定义的位置
const logsMatch = content.match(/export const versionLogs = ({[\s\S]*?});/);
if (!logsMatch) {
  console.error('未找到 versionLogs 对象');
  process.exit(1);
}

// 获取 CURRENT_VERSION
const versionMatch = content.match(/export const CURRENT_VERSION = ['"]([^'"]+)['"]/);
if (!versionMatch) {
  console.error('未找到 CURRENT_VERSION');
  process.exit(1);
}
const currentVersion = versionMatch[1];

// 将 versionLogs 字符串转换为对象（使用 eval 或 Function，注意安全性，但代码来自仓库自身，安全）
// 更安全的方法：先去掉 import 语句，然后作为模块动态导入（但 Actions 中可能没有 import 环境）。
// 简单起见，我们构造一个函数 evaluate 对象字面量。
// 注意：对象中可能包含多行字符串和函数调用？这里没有函数，只有字符串和数组，安全。
const logsStr = logsMatch[1];
// 移除可能的多余注释，但原文件没有复杂的注释影响，直接 eval
const versionLogs = eval('(' + logsStr + ')');

const releaseNotes = versionLogs[currentVersion];
if (!releaseNotes) {
  console.error(`未找到版本 ${currentVersion} 对应的更新说明`);
  process.exit(1);
}

// 将 releaseNotes 格式化为多行文本（如果是数组则逐行输出，如果是字符串则直接输出）
let output = '';
if (Array.isArray(releaseNotes)) {
  output = releaseNotes.map(item => item.trim()).join('\n');
} else {
  output = releaseNotes.trim();
}

console.log(output);
// 同时写入环境变量文件，供后续步骤使用（GitHub Actions 特殊处理）
const fs = require('fs');
fs.appendFileSync(process.env.GITHUB_OUTPUT, `notes<<EOF\n${output}\nEOF\n`);