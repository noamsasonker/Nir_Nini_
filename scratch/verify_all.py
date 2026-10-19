import os
import re

html_files = [
    'index.html',
    'gallery.html',
    'faq.html',
    'accessibility.html',
    'terms.html',
    'privacy.html',
    '404.html'
]

print("=== CHECK 1: FONTS IMPORT ===")
font_pattern = re.compile(r'family=Inter.*family=Rubik|family=Rubik.*family=Inter')
for hf in html_files:
    if os.path.exists(hf):
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()
            has_fonts = bool(font_pattern.search(content))
            print(f"{hf}: fonts loaded = {has_fonts}")
    else:
        print(f"{hf}: NOT FOUND")

print("\n=== CHECK 2: FAQ LINKS IN HEADERS & FOOTERS ===")
for hf in html_files:
    if os.path.exists(hf):
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()
            has_faq = "faq.html" in content
            print(f"{hf}: faq.html linked = {has_faq}")

print("\n=== CHECK 3: CJK CHARACTERS AUDIT ===")
cjk_re = re.compile(r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]')
for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            fp = os.path.join(root, file)
            with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
                c = f.read()
                matches = cjk_re.findall(c)
                if matches:
                    print(f"FOUND CJK in {fp}: {set(matches)}")

print("\n=== CHECK 4: UNWANTED DEVELOPER TOKENS ===")
tokens = ['// SPEC', '01 / PILLAR', '02 / PILLAR', '03 / PILLAR', '04 / PILLAR', 'ישראל ישראלי', '050-0000000', 'ERROR 404 // NOT FOUND']
for hf in html_files:
    if os.path.exists(hf):
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()
            for tok in tokens:
                if tok in content:
                    print(f"FOUND token '{tok}' in {hf}")

print("\n=== CHECK 5: ALL 58 GALLERY IMAGES IN projects-data.js ===")
with open('js/projects-data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract image paths (url: "assets/images/projects/...", heroImage: "...")
urls = re.findall(r'url:\s*["\']([^"\']+)["\']', js_content)
hero_imgs = re.findall(r'heroImage:\s*["\']([^"\']+)["\']', js_content)
all_imgs = set(urls + hero_imgs)
print(f"Total distinct project image references in projects-data.js: {len(all_imgs)}")

missing = [p for p in all_imgs if not os.path.exists(p)]
if missing:
    print(f"MISSING IMAGES: {missing}")
else:
    print(f"SUCCESS: All {len(all_imgs)} referenced project images exist on disk!")

# Also check directory assets/images/projects
dir_files = [os.path.join('assets/images/projects', f) for f in os.listdir('assets/images/projects') if f.endswith(('.jpg', '.png'))]
print(f"Total files in assets/images/projects: {len(dir_files)}")

print("\nVerification completed successfully.")
