(() => {
  'use strict';
  const { protocols, glossary, scenarios, comparisons } = window.ATLAS_DATA;
  const root = document.getElementById('view-root');
  const panel = document.getElementById('detail-panel');
  const overlay = document.getElementById('detail-overlay');
  const byId = Object.fromEntries(protocols.map(p => [p.id, p]));
  const cats = { all:'Все протоколы', core:'Сетевые основы', application:'Прикладные', security:'Безопасность' };
  const catNames = { core:'CORE', application:'APPLICATION', security:'SECURITY' };
  const folders = { core:'01-core', application:'02-application', security:'03-security' };
  const state = { view:'catalog', filter:'all', search:'', graph:'https', compareA:'tcp', compareB:'udp', glossarySearch:'' };
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const notesLink = p => `content/${folders[p.category]}/${p.id}.md`;
  const tag = p => `<span class="tag ${p.category}"><i class="dot ${p.category}"></i>${catNames[p.category]}</span>`;
  const sectionHeading = (label,title,description,side='') => `<div class="section-head"><div><div class="micro-label">${esc(label)}</div><h2>${esc(title)}</h2><p>${esc(description)}</p></div>${side?`<span class="section-side">${esc(side)}</span>`:''}</div>`;
  const openButton = (id,label) => `<button type="button" data-open="${esc(id)}" class="chip">${esc(label)}</button>`;

  function setView(view, updateHash=true) {
    if (!['catalog','graph','compare','journeys','glossary'].includes(view)) view='catalog';
    state.view=view;
    document.querySelectorAll('[data-view]').forEach(b => {b.classList.toggle('active',b.dataset.view===view); b.setAttribute('aria-current',b.dataset.view===view?'page':'false');});
    if (updateHash && location.hash !== '#'+view) history.replaceState(null,'','#'+view);
    render();
    root.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }
  function card(p,index) {
    return `<article class="protocol-card" role="button" tabindex="0" data-open="${esc(p.id)}" aria-label="Подробнее о протоколе ${esc(p.name)}">
      <div class="card-top">${tag(p)}<span class="card-number">#${String(index+1).padStart(2,'0')}</span></div>
      <h3>${esc(p.name)}</h3><span class="fullname">${esc(p.full)}</span>
      <p>${esc(p.summary)}</p><div class="card-bottom"><span>${esc(p.layer)} · ${esc(p.ports)}</span><span aria-hidden="true">↗</span></div>
    </article>`;
  }
  function filteredProtocols(){let q=state.search.trim().toLocaleLowerCase('ru');return protocols.filter(p => (state.filter==='all'||p.category===state.filter) && (!q || [p.name,p.full,p.summary,p.layer,p.usage,p.ports,p.transport,...p.steps].join(' ').toLocaleLowerCase('ru').includes(q)));}
  function renderCards(){const arr=filteredProtocols();document.getElementById('catalog-count').textContent=`Найдено: ${arr.length} из 39`;document.getElementById('protocol-cards').innerHTML=arr.length?arr.map(p=>card(p,protocols.indexOf(p))).join(''):`<div class="empty-state" style="grid-column:1/-1">Ничего не найдено. Попробуйте другой термин или сбросьте фильтр.</div>`;}
  function catalog(){
    root.innerHTML=sectionHeading('01 / БАЗА ПРОТОКОЛОВ','Каталог протоколов','39 технологий, организованных по роли в сети. Откройте карточку, чтобы увидеть этапы работы и связанные понятия.','EXPLORE / 39')+
      `<div class="control-row"><div class="filters" role="group" aria-label="Фильтр по категориям">${Object.entries(cats).map(([k,v])=>`<button type="button" class="filter-button ${k===state.filter?'active':''}" data-filter="${k}">${esc(v)} <span class="filter-count">${k==='all'?'39':protocols.filter(p=>p.category===k).length}</span></button>`).join('')}</div>
      <label class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><input id="catalog-search" type="search" value="${esc(state.search)}" placeholder="Поиск по названию или функции..." aria-label="Поиск по протоколам" /></label></div>
      <div class="micro-label" id="catalog-count" aria-live="polite" style="margin-bottom:14px;color:#91a3c3">Найдено: 39 из 39</div><div id="protocol-cards" class="card-grid"></div>`;
    renderCards();
  }
  function graph(){
    const p=byId[state.graph];const rel=p.related.map(id=>byId[id]).filter(Boolean).slice(0,8);const n=rel.length;
    const coords=rel.map((q,i)=>{const angle=(Math.PI*2*i/n)-Math.PI/2;return {p:q,x:50+35*Math.cos(angle),y:50+32*Math.sin(angle)};});
    const lines=coords.map(q=>`<line class="graph-line" x1="500" y1="325" x2="${q.x*10}" y2="${q.y*6.5}" />`).join('');
    root.innerHTML=sectionHeading('02 / NETWORK KNOWLEDGE MAP','Карта взаимосвязей','Выберите протокол в центре и исследуйте его соседей. Линии обозначают смысловые зависимости и совместное использование.','CONNECTED KNOWLEDGE')+
      `<div class="graph-layout"><div class="graph-stage"><span class="graph-label">INTERACTIVE RELATIONSHIPS / ${String(n).padStart(2,'0')} LINKS</span><svg class="graph-svg" viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
      ${coords.map(q=>`<button type="button" class="graph-node ${q.p.category}" style="left:${q.x}%;top:${q.y}%" data-graph="${esc(q.p.id)}" title="${esc(q.p.full)}">${esc(q.p.name)}</button>`).join('')}
      <button type="button" class="graph-node center" style="left:50%;top:50%" data-open="${esc(p.id)}">${esc(p.name)}</button><span class="graph-hint">Нажмите на соседний протокол, чтобы перестроить граф ↗</span></div>
      <div class="graph-info">${tag(p)}<h3>${esc(p.name)}</h3><div class="fullname">${esc(p.full)}</div><p>${esc(p.summary)}</p>
      <div class="kv"><span>Уровень / роль</span><b>${esc(p.layer)}</b></div><div class="kv"><span>Транспорт</span><b>${esc(p.transport)}</b></div><div class="kv"><span>Типичные порты</span><b>${esc(p.ports)}</b></div>
      <div class="detail-section-title">Связи <span>${n}</span></div><div class="graph-choices">${rel.map(r=>`<button class="chip" data-graph="${esc(r.id)}">${esc(r.name)}</button>`).join('')}</div>
      <button class="primary-btn" data-open="${esc(p.id)}">Подробнее о протоколе ↗</button></div></div>
      <div class="journey-extra" style="margin-top:15px">Полная обзорная схема доступна в <a class="inline-link" href="content/07-relationships.md">Markdown с диаграммой Mermaid ↗</a></div>`;
  }
  function compare(){
    const a=byId[state.compareA],b=byId[state.compareB];const options=protocols.map(p=>`<option value="${esc(p.id)}">${esc(p.name)} — ${esc(p.full)}</option>`).join('');
    const rows=[['Что делает','summary'],['Категория','category'],['Уровень','layer'],['На чём работает','transport'],['Типичные порты','ports'],['Где встречается','usage'],['Ограничения','caution']];
    root.innerHTML=sectionHeading('03 / ANALYZE & CONTRAST','Сравнить протоколы','Выберите любые две технологии. Сопоставление помогает увидеть принципиальные различия и найти точки взаимодействия.','A / B')+
      `<div class="compare-picks"><label>ПРОТОКОЛ A<select id="compare-a" class="select-box">${options}</select></label><div class="vs-symbol">VS</div><label>ПРОТОКОЛ B<select id="compare-b" class="select-box">${options}</select></label></div>
      <div class="micro-label" style="margin:17px 0 9px">ГОТОВЫЕ ПАРЫ ДЛЯ ИЗУЧЕНИЯ</div><div class="preset-pairs">${comparisons.map(p=>`<button type="button" data-pair="${esc(p.a)},${esc(p.b)}" title="${esc(p.name)}">${esc(byId[p.a].name)} vs ${esc(byId[p.b].name)}</button>`).join('')}</div>
      <div class="compare-table"><div class="compare-row compare-heading"><div class="compare-term">КРИТЕРИЙ</div><div>${esc(a.name)}</div><div>${esc(b.name)}</div></div>${rows.map(([label,key])=>`<div class="compare-row"><div class="compare-term">${esc(label)}</div><div>${esc(key==='category'?cats[a.category]:a[key])}</div><div>${esc(key==='category'?cats[b.category]:b[key])}</div></div>`).join('')}
      </div><div class="journey-extra" style="margin-top:20px">В заметках проекта есть отдельные <a class="inline-link" href="content/04-comparisons/tcp-vs-udp.md">сравнения в Markdown ↗</a></div>`;
    document.getElementById('compare-a').value=a.id;document.getElementById('compare-b').value=b.id;
  }
  function journeys(){
    root.innerHTML=sectionHeading('04 / PRACTICAL PATHWAYS','Протоколы в действии','Технологии работают вместе. Рассмотрите несколько узнаваемых процессов — от подключения к Wi-Fi до отправки письма.','5 REAL-WORLD SCENARIOS')+
      `<div class="journey-grid">${scenarios.map(s=>`<article class="journey-card"><div class="journey-icon" aria-hidden="true">${s.icon}</div><h3 class="journey-title">${esc(s.name)}</h3><div class="journey-lead">${esc(s.lead)}</div>
      <div class="journey-path">${s.path.map((id,i)=>`${i?'<span class="journey-arrow" aria-hidden="true">→</span>':''}<button type="button" data-open="${esc(id)}">${esc(byId[id].name)}</button>`).join('')}</div><p>${esc(s.desc)}</p>
      <div class="journey-extra"><b>Связанные технологии:</b> ${[...new Set(s.alt)].map(id=>`<button data-open="${esc(id)}">${esc(byId[id].name)}</button>`).join(' · ')}</div>
      <a class="journey-more" href="content/05-scenarios/${esc(s.id)}.md">Открыть подробный маршрут ↗</a></article>`).join('')}</div>`;
  }
  function glossaryView(){
    const q=state.glossarySearch.toLocaleLowerCase('ru').trim();const matches=glossary.filter(g=>[g.term,g.definition].join(' ').toLocaleLowerCase('ru').includes(q));
    root.innerHTML=sectionHeading('05 / KNOW YOUR TERMS','Словарь терминов','Короткие объяснения понятий, которые встречаются в сетевых протоколах.','36 TERMS')+
      `<label class="search-box glossary-search"><span class="search-icon" aria-hidden="true">⌕</span><input id="glossary-search" type="search" placeholder="Найти термин..." value="${esc(state.glossarySearch)}" /></label>
      <div class="glossary-grid" id="glossary-results">${matches.map(g=>`<article class="term-card"><strong>${esc(g.term)}</strong><p>${esc(g.definition)}</p></article>`).join('')}</div>`;
  }
  function render(){
    if(state.view==='catalog')catalog(); else if(state.view==='graph')graph();else if(state.view==='compare')compare();else if(state.view==='journeys')journeys();else glossaryView();
  }
  let lastFocus=null;
  function openDetail(id){
    const p=byId[id];if(!p)return;
    lastFocus=document.activeElement;
    panel.innerHTML=`<div class="detail-header"><span class="detail-index">ATLAS / PROTOCOL ${String(protocols.indexOf(p)+1).padStart(2,'0')} OF 39</span><button id="detail-close" class="detail-close" aria-label="Закрыть">×</button></div>
      <div style="margin-top:27px">${tag(p)}</div><h2 class="detail-title">${esc(p.name)}</h2><div class="detail-subtitle">${esc(p.full)}</div><p class="detail-description">${esc(p.summary)}</p>
      <div class="detail-metadata"><div class="metadata-cell"><small>УРОВЕНЬ / РОЛЬ</small><strong>${esc(p.layer)}</strong></div><div class="metadata-cell"><small>ТРАНСПОРТ / ОСНОВА</small><strong>${esc(p.transport)}</strong></div><div class="metadata-cell"><small>ТИПИЧНЫЕ ПОРТЫ</small><strong>${esc(p.ports)}</strong></div><div class="metadata-cell"><small>ПРИМЕНЕНИЕ</small><strong>${esc(p.usage)}</strong></div></div>
      <h3 class="detail-section-title">Как это работает <span>${String(p.steps.length).padStart(2,'0')} ЭТАПОВ</span></h3><div class="timeline">${p.steps.map((step,i)=>`<div class="timeline-item"><span class="timeline-num">${i+1}</span><span>${esc(step)}</span></div>`).join('')}</div>
      <h3 class="detail-section-title">Важно понимать <span>!</span></h3><div class="detail-note">${esc(p.caution)}</div>
      <h3 class="detail-section-title">Связанные протоколы <span>${p.related.length}</span></h3><div class="related-wrap">${p.related.map(id=>`<button type="button" data-open="${esc(id)}">${esc(byId[id].name)} ↗</button>`).join('')}</div>
      <a class="note-link" href="${notesLink(p)}">Читать структурированную заметку ↗</a>`;
    overlay.hidden=false;panel.hidden=false;document.body.style.overflow='hidden';panel.scrollTop=0;document.getElementById('detail-close').focus();
  }
  function closeDetail(){panel.hidden=true;overlay.hidden=true;document.body.style.overflow='';if(lastFocus&&lastFocus.isConnected)lastFocus.focus();}
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  document.querySelector('[data-action="start"]').addEventListener('click',()=>setView('catalog'));
  document.querySelector('[data-action="graph"]').addEventListener('click',()=>setView('graph'));
  root.addEventListener('click',e=>{
    const node=e.target.closest('[data-open]');if(node){openDetail(node.dataset.open);return;}
    const filter=e.target.closest('[data-filter]');if(filter){state.filter=filter.dataset.filter;catalog();return;}
    const graphNode=e.target.closest('[data-graph]');if(graphNode){state.graph=graphNode.dataset.graph;graph();return;}
    const pair=e.target.closest('[data-pair]');if(pair){[state.compareA,state.compareB]=pair.dataset.pair.split(',');compare();return;}
  });
  root.addEventListener('keydown',e=>{const node=e.target.closest('.protocol-card[data-open]');if(node&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openDetail(node.dataset.open);}});
  root.addEventListener('input',e=>{
    if(e.target.id==='catalog-search'){state.search=e.target.value;renderCards();}
    if(e.target.id==='glossary-search'){state.glossarySearch=e.target.value;const matches=glossary.filter(g=>[g.term,g.definition].join(' ').toLocaleLowerCase('ru').includes(state.glossarySearch.toLocaleLowerCase('ru').trim()));document.getElementById('glossary-results').innerHTML=matches.length?matches.map(g=>`<article class="term-card"><strong>${esc(g.term)}</strong><p>${esc(g.definition)}</p></article>`).join(''):'<div class="empty-state">Термин не найден</div>';}
  });
  root.addEventListener('change',e=>{if(e.target.id==='compare-a'){state.compareA=e.target.value;compare();}if(e.target.id==='compare-b'){state.compareB=e.target.value;compare();}});
  panel.addEventListener('click',e=>{if(e.target.closest('#detail-close'))closeDetail();const related=e.target.closest('[data-open]');if(related)openDetail(related.dataset.open);});
  overlay.addEventListener('click',closeDetail);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)closeDetail();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setView('catalog');const s=document.getElementById('catalog-search');s?.focus();}});
  window.addEventListener('hashchange',()=>{const view=location.hash.slice(1);if(view!==state.view)setView(view,false);});
  const incoming=location.hash.slice(1);if(['catalog','graph','compare','journeys','glossary'].includes(incoming))state.view=incoming;
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===state.view));
  render();
})();
