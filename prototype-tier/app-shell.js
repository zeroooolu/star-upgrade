(()=>{
  const body=document.body,page=body.dataset.page||'home',title=body.dataset.title||'主页';
  const sidebar=document.querySelector('.sidebar'),topbar=document.querySelector('.topbar');
  if(!sidebar||!topbar)return;
  const nav=[
    ['home','app.html','<path fill="currentColor" d="M3 10.6 12 3l9 7.6V21h-6v-6H9v6H3V10.6Z"/>','主页'],
    ['plan','app-plan.html','<path d="M5 4h14v16H5z" fill="currentColor"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>','合作方案'],
    ['albums','app-albums.html','<circle cx="12" cy="12" r="8.2" fill="currentColor"/><circle cx="12" cy="12" r="2.3" fill="#fff"/><circle cx="16.3" cy="8.2" r="1.1" fill="#fff" opacity=".85"/>','专辑列表'],
    ['video','#','<rect x="3.2" y="6.5" width="12.8" height="11" rx="1.5" fill="currentColor"/><path d="M16 9.7 21 7.4v9.2L16 14.3V9.7Z" fill="currentColor"/>','视频'],
    ['artist','app-artists.html','<circle cx="9" cy="8" r="4" fill="currentColor"/><circle cx="16.5" cy="9.5" r="3.2" fill="currentColor" opacity=".88"/><path d="M2.8 20c.4-4.1 2.7-6.2 6.2-6.2 3.4 0 5.8 2.1 6.2 6.2H2.8Z" fill="currentColor"/><path d="M13.5 19.8c.25-3.2 1.95-4.9 4.7-4.9 2.1 0 3.7 1.2 4.3 3.5-.9.9-2.2 1.4-3.9 1.4h-5.1Z" fill="currentColor" opacity=".88"/>','艺人'],
    ['promotion','#','<path d="M2.7 13.1c2.8-1.2 4.4-3.4 5.1-6.4 4.9-.3 8.7 1 11.5 4-1 4.7-4 7.6-8.9 8.8-2.8.7-5.3-.1-7.2-2.5 1.1-.9 1.8-2.2 2-3.8-.9.3-1.7.3-2.5-.1Z" fill="currentColor"/><circle cx="14.6" cy="10.2" r="1.2" fill="#fff"/>','音乐推广'],
    ['creative','#','<path d="M5 19.2 6.2 14 16.9 3.3a1.8 1.8 0 0 1 2.5 0l1.3 1.3a1.8 1.8 0 0 1 0 2.5L10 17.8 5 19.2Z" fill="currentColor"/><path d="m14.8 5.4 3.8 3.8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M4 21h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>','创作服务'],
    ['royalty','#','<rect x="4" y="3.5" width="16" height="17" rx="3" fill="currentColor"/><path d="M8.4 9.1h7.2M8.4 14.9h7.2M12 6.8v10.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>','版税'],
    ['contract','#','<path d="M5 2.8h10l4 4V21H5V2.8Z" fill="currentColor"/><path d="M15 2.8v4h4M8 11h8M8 15h8" stroke="#fff" stroke-width="1.4"/>','合同'],
    ['analysis','#','<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/><path d="M6.5 15.8 10 12.3l2.5 2.2 5-5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>','销售分析'],
    ['service','service-center.html','<path d="M4 5h16v12H9l-5 4V5Z" fill="currentColor"/><path d="M8 9h8M8 13h5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>','服务中心']
  ];
  const split=7;
  const renderGroup=(items,label)=>`<div class="nav-group">${label?`<div class="nav-group-label">${label}</div>`:''}${items.map(([id,href,icon,text])=>`<a class="nav-item${id===page?' active':''}" href="${href}"${id===page?' aria-current="page"':''}><svg class="nav-icon" viewBox="0 0 24 24">${icon}</svg><span class="nav-label">${text}</span></a>`).join('')}</div>`;
  sidebar.innerHTML=`<div class="brand"><a href="index.html"><img src="https://star.kanjian.com/app/release/images/star-logo.png" alt="星球发行"></a></div><nav class="nav">${renderGroup(nav.slice(0,split),'发行管理')}${renderGroup(nav.slice(split),'账户与服务')}</nav>`;
  topbar.innerHTML=`<div class="topbar-title">${title}</div><div class="topbar-actions"><div class="demo-switch" title="仅用于切换 Demo 账户视角，真实用户不能自行切换合作等级"><span>演示视角</span><button data-tier="basic">Basic</button><button data-tier="professional" class="active">Professional</button><button data-tier="plus">Plus</button></div><a class="topbar-action" href="app-plan.html"><span class="tier-chip" id="globalTier">Professional</span></a><a class="topbar-action" href="#"><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9.8 9.2a2.4 2.4 0 1 1 4.6 1c-.35.8-1.1 1.2-1.7 1.7-.5.4-.7.9-.7 1.7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="17.1" r="1" fill="currentColor"/></svg><span>帮助中心</span></a><a class="topbar-action" href="#">简体中文</a><a class="topbar-action" href="#"><span>环环</span><svg class="caret" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4H2Z" fill="currentColor"/></svg></a></div>`;
  let current=localStorage.getItem('star-demo-tier')||'professional';
  const sync=()=>{document.querySelectorAll('[data-tier]').forEach(b=>b.classList.toggle('active',b.dataset.tier===current));const e=document.getElementById('globalTier');if(e)e.textContent=current==='basic'?'Basic':current==='plus'?'Plus':'Professional';document.dispatchEvent(new CustomEvent('tierchange',{detail:{tier:current}}))};
  document.querySelectorAll('[data-tier]').forEach(b=>b.onclick=()=>{current=b.dataset.tier;localStorage.setItem('star-demo-tier',current);sync()});
  window.StarTier={get:()=>current,set:t=>{current=t;localStorage.setItem('star-demo-tier',t);sync()}};
  window.StarCapacity={get:()=>{try{return JSON.parse(localStorage.getItem('star-demo-capacity')||'{"catalog":0,"release":0}')}catch(e){return{catalog:0,release:0}}},set:v=>localStorage.setItem('star-demo-capacity',JSON.stringify(v)),reset:()=>localStorage.removeItem('star-demo-capacity')};
  sync();
})();