const fs = require('fs');

const qbPath = 'c:\\Users\\ccc\\Desktop\\hogwarts\\course\\muggle-academic\\physics-questionBank.js';

let content = fs.readFileSync(qbPath, 'utf-8');

const lines = content.split('\n');
const result = [];
let skipMode = false;
let skipCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('"analysis": "这是正确选项') && !line.includes('"text":')) {
    let hasCorrectOptions = false;
    for (let j = Math.max(0, i-10); j < i; j++) {
      if (lines[j] && lines[j].includes('"options":')) {
        for (let k = j; k < Math.min(lines.length, j+5); k++) {
          if (lines[k] && lines[k].includes('"A. 正确"') && lines[k].includes('"B. 错误"')) {
            hasCorrectOptions = true;
            break;
          }
        }
        break;
      }
    }
    
    if (hasCorrectOptions) {
      skipMode = true;
      skipCount = 0;
      continue;
    }
  }
  
  if (skipMode) {
    skipCount++;
    if (skipCount > 15) {
      skipMode = false;
      skipCount = 0;
    } else {
      continue;
    }
  }
  
  result.push(line);
}

content = result.join('\n');

content = content.replace(/\,\s*\]\s*\}\s*\;/g, ']\n  }\n];');

content = content.replace(/\]\s*\}\s*\,\s*\]\s*\}\s*;/g, ']\n  }\n];');

fs.writeFileSync(qbPath, content);

console.log('清理完成！');
