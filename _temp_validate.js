const fs = require('fs');
const code = fs.readFileSync('_temp_y2_tower.js', 'utf8');
try {
  const data = eval('(' + code + ')');
  const locs = Object.keys(data);
  console.log('语法验证通过');
  console.log('地点数: ' + locs.length);
  let total = 0;
  locs.forEach(function(n) {
    console.log(n + ': ' + data[n].encounters.length + '条');
    total += data[n].encounters.length;
  });
  console.log('总计: ' + total + '条');
} catch(e) {
  console.log('错误: ' + e.message);
}