const fs = require('fs');
const code = fs.readFileSync('_temp_y2_tower.js', 'utf8');
console.log('File length:', code.length);

try {
  const data = eval('(' + code + ')');
  const locs = Object.keys(data);
  console.log('\n=== Validation Report ===');
  console.log('Syntax: OK');
  console.log('Locations: ' + locs.length);
  let total = 0;
  let allGood = true;
  for (let i = 0; i < locs.length; i++) {
    const loc = locs[i];
    const count = data[loc].encounters.length;
    const status = (count >= 30 && count <= 33) ? 'OK' : 'WARNING';
    if (status !== 'OK') allGood = false;
    console.log((i+1) + '. ' + loc + ': ' + count + ' encounters [' + status + ']');
    total += count;
  }
  console.log('Total: ' + total);
  console.log('All locations valid: ' + (allGood ? 'YES' : 'NO'));
} catch(e) {
  console.log('Syntax Error: ' + e.message);
  console.log('Stack: ' + e.stack);
  process.exit(1);
}