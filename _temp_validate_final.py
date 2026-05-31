import re

with open('_temp_y2_tower.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
print(f'Total lines: {len(lines)}')

# Check basic structure
if content.strip().startswith('{') and content.strip().endswith('}'):
    print('[OK] File wraps in { }')
else:
    print('[FAIL] File does not wrap in { }')

if content.count('encounters: [') == 8:
    print('[OK] Found 8 encounter arrays')
else:
    print(f'[FAIL] Found {content.count("encounters: [")} encounter arrays (expected 8)')

# Count location headers
loc_names = re.findall(r'^\s*"([^"]+)"\s*:\s*\{', content, re.MULTILINE)
if len(loc_names) == 8:
    print('[OK] Found 8 location headers')
else:
    print(f'[FAIL] Found {len(loc_names)} location headers')

# Check brace matching
open_braces = content.count('{')
close_braces = content.count('}')
open_brackets = content.count('[')
close_brackets = content.count(']')
print(f'  Braces: {{ = {open_braces}, }} = {close_braces} (diff: {open_braces - close_braces})')
print(f'  Brackets: [ = {open_brackets}, ] = {close_brackets} (diff: {open_brackets - close_brackets})')

if open_braces == close_braces and open_brackets == close_brackets:
    print('[OK] Brace/bracket counts match')
else:
    print('[FAIL] Brace/bracket counts DO NOT match')

# Count encounters per location
for i, loc in enumerate(loc_names):
    pattern = re.escape(loc) + r'"\s*:\s*\{'
    match = re.search(pattern, content)
    if match:
        start = match.start()
        if i < len(loc_names) - 1:
            next_pattern = re.escape(loc_names[i+1]) + r'"\s*:\s*\{'
            next_match = re.search(next_pattern, content[start+1:])
            section = content[start:start+next_match.start()+1] if next_match else content[start:]
        else:
            section = content[start:]
        
        enc_match = re.search(r'encounters\s*:\s*\[', section)
        if enc_match:
            arr_content = section[enc_match.end():]
            depth = 0
            count = 0
            for c in arr_content:
                if c == '{':
                    if depth == 0:
                        count += 1
                    depth += 1
                elif c == '}':
                    depth -= 1
                elif c == ']' and depth == 0:
                    break
            status = 'OK' if 30 <= count <= 33 else 'FIX'
            print(f'  {i+1}. {loc}: {count} encounters [{status}]')

total = sum(1 for _ in re.finditer(r'minGrade:\s*2,', content))
print(f'\nTotal encounter blocks (minGrade count): {total}')
print('\n=== Validation Complete ===')