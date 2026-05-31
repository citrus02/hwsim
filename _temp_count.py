import re

with open('_temp_y2_tower.js', 'r', encoding='utf-8') as f:
    content = f.read()

loc_names = re.findall(r'^\s*"([^"]+)"\s*:\s*\{', content, re.MULTILINE)
print('Location names found:', loc_names)
print('Count:', len(loc_names))

for i, loc in enumerate(loc_names):
    pattern = re.escape(loc) + r'"\s*:\s*\{'
    match = re.search(pattern, content)
    if match:
        start = match.start()
        if i < len(loc_names) - 1:
            next_pattern = re.escape(loc_names[i+1]) + r'"\s*:\s*\{'
            next_match = re.search(next_pattern, content[start+1:])
            if next_match:
                section = content[start:start+next_match.start()+1]
            else:
                section = content[start:]
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
            print(f'  {i+1}. {loc}: {count} encounters')