const fs = require('fs');
const code = fs.readFileSync('_temp_y2_tower.js', 'utf8');
try {
  const data = eval('(' + code + ')');
  const locs = Object.keys(data);
  console.log('OK');
  console.log('Locations: ' + locs.length);
  let total = 0;
  for (let i = 0; i < locs.length; i++) {
    const count = data[locs[i]].encounters.length;
    console.log((i+1) + '. ' + count + ' entries');
    total += count;
  }
  console.log('Total: ' + total);
} catch(e) {
  console.log('Error: ' + e.message);
  process.exit(1);
}