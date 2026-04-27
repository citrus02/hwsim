// .github/scripts/extract-notes.mjs
import fs from 'fs';
import { CURRENT_VERSION, versionLogs } from '../../version.js';

const notes = versionLogs[CURRENT_VERSION];
let output = '';
if (Array.isArray(notes)) {
  output = notes.map(item => item.trim()).join('\n');
} else if (typeof notes === 'string') {
  output = notes.trim();
} else {
  console.error(`未找到版本 ${CURRENT_VERSION} 的更新说明`);
  process.exit(1);
}

// 写入 GitHub Actions 输出
fs.appendFileSync(process.env.GITHUB_OUTPUT, `notes<<EOF\n${output}\nEOF\n`);
console.log(output);