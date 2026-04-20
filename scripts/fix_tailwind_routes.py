from pathlib import Path

root = Path('Dashboard/src/routes')
replacements = {
    'bg-[var(--surface)]': 'bg-(--surface)',
    'bg-[var(--stat-pink)]': 'bg-(--stat-pink)',
    'bg-[var(--stat-yellow)]': 'bg-(--stat-yellow)',
    'bg-[var(--stat-green)]': 'bg-(--stat-green)',
    'bg-[var(--stat-purple)]': 'bg-(--stat-purple)',
    'bg-[var(--stat-pink-icon)]': 'bg-(--stat-pink-icon)',
    'bg-[var(--stat-purple-icon)]': 'bg-(--stat-purple-icon)',
    'text-[var(--brand)]': 'text-(--brand)',
    'text-[var(--brand-foreground)]': 'text-(--brand-foreground)',
    'border-[var(--brand)]': 'border-(--brand)',
    'hover:bg-[var(--brand)]/5': 'hover:bg-(--brand)/5',
    'bg-[var(--brand)]': 'bg-(--brand)',
    'min-w-[900px]': 'min-w-225',
    'min-w-[800px]': 'min-w-200',
    'min-w-[640px]': 'min-w-160',
}

changed = []
for path in sorted(root.glob('**/*.tsx')):
    text = path.read_text(encoding='utf-8')
    new_text = text
    for old, new in replacements.items():
        new_text = new_text.replace(old, new)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        changed.append(path.relative_to(Path.cwd()))

print('Updated files:', len(changed))
for p in changed:
    print(p)
