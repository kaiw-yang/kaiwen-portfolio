const readLanguage = () => {try {return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh';} catch {return 'zh';}};
let lang = readLanguage(), filter = 'all', current = null;
const text = (value) => typeof value === 'string' ? value : value[lang];
const ui = (zh, en) => lang === 'zh' ? zh : en;
const dialog = document.getElementById('detail');
const projectTitle = (p) => text(p.title);
const projectAction = (p) => p.type === 'web' ? ui('打开网站 ↗', 'Visit website ↗') : ui('开始游戏 ↗', 'Play game ↗');
function screenshot(p, eager = false) {
  return `<div class="project-screen screen-${p.theme}"><div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>${new URL(p.url).hostname}</span></div><img src="${p.image}" alt="${projectTitle(p)} ${ui('实际页面截图', 'live project screenshot')}" loading="${eager ? 'eager' : 'lazy'}" width="1280" height="720"></div>`;
}
function setLanguage() {
  lang = lang === 'zh' ? 'en' : 'zh';
  try {localStorage.setItem('portfolio-language', lang);} catch {}
  const scroll = dialog.scrollTop;
  render();
  if (current) dialog.scrollTop = scroll;
}
function render() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = ui('Kaiwen Yang · 网站与小游戏作品集', 'Kaiwen Yang · Websites & Little Games');
  document.querySelector('meta[name="description"]').content = ui('探索 LatinoPedia、Iberia、CSOPedia、像素小怪兽与摆到世界尽头：知识网站、语言学习工具和小游戏。', 'Explore LatinoPedia, Iberia, CSOPedia, Pixel Monsters, and Stall Anywhere: knowledge websites, study tools, and little games.');
  document.querySelectorAll('[data-zh]').forEach(el => {el.innerHTML = el.dataset[lang];});
  document.getElementById('language').textContent = lang === 'zh' ? 'EN ↗' : '中文 ↗';
  document.getElementById('language').setAttribute('aria-label', ui('切换到英文', 'Switch to Chinese'));
  document.querySelector('.filters').setAttribute('aria-label', ui('作品分类', 'Filter projects'));
  document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('active', b.dataset.filter === filter); b.setAttribute('aria-pressed', String(b.dataset.filter === filter));});
  const shown = PROJECTS.filter(p => filter === 'all' || p.type === filter);
  document.getElementById('project-count').textContent = `(${String(shown.length).padStart(2, '0')})`;
  document.getElementById('projects').innerHTML = shown.map(p => `<article class="card" id="project-${p.id}"><button class="card-button" data-project="${p.id}" aria-label="${ui('查看项目：', 'View project: ')}${projectTitle(p)}">${screenshot(p)}<div class="card-kicker"><span>${text(p.category)}</span><span>0${PROJECTS.indexOf(p) + 1}</span></div><div class="meta"><h3>${projectTitle(p)}</h3><span aria-hidden="true">↗</span></div><p class="project-tagline">${text(p.tagline)}</p><p class="project-summary">${text(p.description)}</p></button><div class="card-footer"><span>${text(p.tags).slice(0, 2).join(' / ')}</span><a href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="${projectAction(p)} ${projectTitle(p)}">${projectAction(p)}</a></div></article>`).join('');
  document.querySelectorAll('[data-project]').forEach(b => {b.onclick = () => openProject(b.dataset.project);});
  if (current) renderDetail(current);
}
function renderDetail(p) {
  const index = PROJECTS.indexOf(p);
  document.getElementById('detail-content').innerHTML = `<div class="detail-toolbar"><span class="eyebrow">0${index + 1} / PROJECT NOTES</span><div><button class="detail-language" type="button">${ui('EN', '中文')}</button><button class="close" type="button" aria-label="${ui('关闭详情', 'Close project')}">×</button></div></div><div class="detail-heading"><p class="detail-category">${text(p.category)}</p><h2 id="detail-title">${projectTitle(p)}</h2><p class="detail-tagline">${text(p.tagline)}</p><div class="project-credit"><span>Kaiwen Yang</span><span>${ui('独立完成', 'Created independently')}</span></div><a class="visit" href="${p.url}" target="_blank" rel="noopener noreferrer">${projectAction(p)}</a></div><figure class="detail-figure">${screenshot(p, true)}<figcaption>${ui('项目实际画面', 'Live project screenshot')} · ${text(p.language)}</figcaption></figure><section class="detail-section"><div class="eyebrow">01 / OVERVIEW</div><h3>${ui('它为谁而做，解决什么问题？', 'Who is it for, and what does it help with?')}</h3><p>${text(p.purpose)}</p><p class="audience"><strong>${ui('适合谁', 'For whom')}</strong>${text(p.audience)}</p></section><section class="detail-section"><div class="eyebrow">02 / WHAT’S INSIDE</div><h3>${ui('三个值得看的细节', 'Three details to explore')}</h3><div class="feature-list">${p.features.map((f, i) => `<div><span>0${i + 1}</span><div><h4>${text(f.title)}</h4><p>${text(f.text)}</p></div></div>`).join('')}</div></section><section class="detail-section"><div class="eyebrow">03 / TRY IT YOURSELF</div><h3>${ui('可以这样开始探索', 'A route through the project')}</h3><ol class="journey">${text(p.journey).map(step => `<li>${step}</li>`).join('')}</ol></section><section class="design-note"><div class="eyebrow">DESIGN OBSERVATION</div><h3>${ui('从这个作品看体验设计', 'A closer look at the experience')}</h3><p>${text(p.observation)}</p><div class="tags">${text(p.tags).map(tag => `<span>${tag}</span>`).join('')}</div></section><p class="project-note">${text(p.note)}</p><div class="detail-bottom"><button data-detail-nav="${(index + PROJECTS.length - 1) % PROJECTS.length}">← ${ui('上一个项目', 'Previous project')}</button><button data-detail-nav="${(index + 1) % PROJECTS.length}">${ui('下一个项目', 'Next project')} →</button></div>`;
  document.querySelector('.close').onclick = () => dialog.close();
  document.querySelector('.detail-language').onclick = setLanguage;
  document.querySelectorAll('[data-detail-nav]').forEach(b => {b.onclick = () => {current = PROJECTS[Number(b.dataset.detailNav)]; renderDetail(current); dialog.scrollTop = 0; document.querySelector('.close').focus({preventScroll:true});};});
}
function openProject(id) {
  current = PROJECTS.find(p => p.id === id);
  if (!current) return;
  renderDetail(current);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
document.getElementById('language').onclick = setLanguage;
document.querySelectorAll('[data-filter]').forEach(b => {b.onclick = () => {filter = b.dataset.filter; render();};});
dialog.addEventListener('close', () => {current = null; document.body.classList.remove('dialog-open');});
dialog.addEventListener('click', e => {if (e.target === dialog) {const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();}});
document.querySelector('.end').onclick = e => {e.preventDefault(); openProject('end');};
render();
