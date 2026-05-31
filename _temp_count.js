const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\ccc\\Desktop\\hogwarts\\_temp_y2_forest.js', 'utf8');

const openBrace = (content.match(/\{/g) || []).length;
const closeBrace = (content.match(/\}/g) || []).length;
const openBracket = (content.match(/\[/g) || []).length;
const closeBracket = (content.match(/\]/g) || []).length;
console.log('Open braces: ' + openBrace + ', Close braces: ' + closeBrace + ', Balanced: ' + (openBrace === closeBrace));
console.log('Open brackets: ' + openBracket + ', Close brackets: ' + closeBracket + ', Balanced: ' + (openBracket === closeBracket));

try {
  const data = eval('({' + content + '})');
  console.log('File parses as valid JavaScript!');
  const locNames = Object.keys(data);
  console.log('Locations found: ' + locNames.length);
  let total = 0;
  locNames.forEach(name => {
    const count = data[name].encounters.length;
    console.log('  ' + name + ': ' + count + ' encounters');
    total += count;
    data[name].encounters.forEach((enc, i) => {
      if (enc.choices.length !== 3) {
        console.log('    WARNING: encounter ' + (i+1) + ' has ' + enc.choices.length + ' choices');
      }
      if (enc.minGrade !== 2 || enc.maxGrade !== 2) {
        console.log('    WARNING: encounter ' + (i+1) + ' has minGrade=' + enc.minGrade + ', maxGrade=' + enc.maxGrade);
      }
    });
  });
  console.log('Total encounters: ' + total);
} catch (e) {
  console.log('Parse error: ' + e.message);
}
