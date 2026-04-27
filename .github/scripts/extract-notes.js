const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'version.js');
const content = fs.readFileSync(filePath, 'utf8');

// 提取 CURRENT_VERSION
const versionMatch = content.match(/export const CURRENT_VERSION = ['"]([^'"]+)['"]/);
if (!versionMatch) {
    console.error('未找到 CURRENT_VERSION');
    process.exit(1);
}
const currentVersion = versionMatch[1];
console.log(`当前版本: ${currentVersion}`);

// 提取 versionLogs 对象（从 export const versionLogs = { 到匹配的 }; ）
// 注意：需要匹配嵌套的大括号，但由于 versionLogs 对象中只有字符串和数组，没有更深的花括号，我们可以用简单正则匹配到第一个 }; 即可
const logsMatch = content.match(/export const versionLogs = (\{[\s\S]*?\n\});/);
if (!logsMatch) {
    console.error('未找到 versionLogs 对象');
    process.exit(1);
}
let logsStr = logsMatch[1];

// 使用 eval 将字符串转为对象（安全，因为是仓库自有代码）
let versionLogs;
try {
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

// 格式化为纯文本（数组用换行连接，字符串直接输出）
let output = '';
if (Array.isArray(notes)) {
    output = notes.map(item => item.trim()).join('\n');
} else if (typeof notes === 'string') {
    output = notes.trim();
} else {
    output = String(notes);
}

// 写入 GitHub Actions 环境变量供后续步骤使用
const fsSync = require('fs');
fsSync.appendFileSync(process.env.GITHUB_OUTPUT, `notes<<EOF\n${output}\nEOF\n`);
console.log('提取成功，内容长度:', output.length);