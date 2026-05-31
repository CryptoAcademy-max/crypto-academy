(function(){
  if(window.__safetyLayoutSearch20260527) return;
  window.__safetyLayoutSearch20260527 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

  function baseLang(value){
    var lang = String(value || 'en').toLowerCase();
    if(lang === 'pt-br') return 'br';
    return lang;
  }

  function currentLocale(){
    var lang = baseLang(
      (typeof currentLang !== 'undefined' && currentLang) ||
      window.currentLocale ||
      window.__currentLocale ||
      (document.documentElement && document.documentElement.lang) ||
      'en'
    );
    return COPY[lang] ? lang : 'en';
  }

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function norm(value){
    var text = String(value || '').toLowerCase();
    try{ text = text.normalize('NFD').replace(/[\u0300-\u036f]/g,''); }catch(err){}
    return text.replace(/[_\-\/]+/g,' ').replace(/\s+/g,' ').trim();
  }

  function dedupe(values){
    var seen = {};
    return (values || []).filter(function(value){
      var key = norm(value);
      if(!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function section(id, badge, title, desc, cards, options){
    options = options || {};
    var cardClass = options.cardClass || 'safety-enhanced-card';
    var gridClass = options.gridClass || 'safety-enhanced-card-grid';
    var body = cards.map(function(card){
      var extraId = card.id ? ' id="' + esc(card.id) + '"' : '';
      var meta = card.meta ? '<span class="safety-enhanced-card-meta">' + esc(card.meta) + '</span>' : '';
      var titleHtml = card.title ? '<strong>' + esc(card.title) + '</strong>' : '';
      var descHtml = card.desc ? '<p>' + esc(card.desc) + '</p>' : '';
      return '<article class="' + cardClass + '"' + extraId + '>' + meta + titleHtml + descHtml + '</article>';
    }).join('');
    return ''
      + '<section id="' + esc(id) + '" class="safety-enhanced-section" data-safety-anchor="' + esc(id) + '">'
      +   '<div class="safety-enhanced-head">'
      +     '<span>' + esc(badge) + '</span>'
      +     '<h2>' + esc(title) + '</h2>'
      +     '<p>' + esc(desc) + '</p>'
      +   '</div>'
      +   '<div class="' + gridClass + '">' + body + '</div>'
      + '</section>';
  }

  function renderEnhancedSafety(){
    var c = COPY[currentLocale()] || COPY.en;
    return ''
      + '<div class="safety-enhanced-shell" data-safety-enhanced="true">'
      +   section('safety-scam-spotting', c.badges.panel, c.scam.title, c.scam.desc, c.scam.cards, { cardClass:'safety-scenario-card' })
      +   section('safety-secret-stop', c.badges.stop, c.secret.title, c.secret.desc, c.secret.cards, { cardClass:'safety-check-card', gridClass:'safety-check-grid' })
      +   section('safety-final-check', c.badges.finalCheck, c.finalCheck.title, c.finalCheck.desc, c.finalCheck.cards, { cardClass:'safety-step-card', gridClass:'safety-step-row' })
      +   section('safety-common-mistakes', c.badges.mistakes, c.mistakes.title, c.mistakes.desc, c.mistakes.cards, { cardClass:'safety-enhanced-card' })
      +   section('safety-routine', c.badges.routine, c.routine.title, c.routine.desc, c.routine.cards, { cardClass:'safety-routine-card' })
      + '</div>';
  }

  function ensureSafetyStyles(){
    if(document.getElementById('safetyLayoutSearch20260527Styles')) return;
    var style = document.createElement('style');
    style.id = 'safetyLayoutSearch20260527Styles';
    style.textContent = [
      '#safetyPanel,#safetyPanel *{box-sizing:border-box}',
      '#safetyPanel .safety-visual-deck,#safetyPanel .site-visual-panel,#safetyPanel .safety-enhanced-section{max-width:100%;overflow:hidden}',
      '#safetyPanel .safety-visual-grid{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))!important;gap:16px!important;width:100%!important;max-width:100%!important;overflow:visible!important}',
      '#safetyPanel .safety-visual-grid>.site-visual-panel{min-width:0!important;max-width:100%!important;width:100%!important}',
      '#safetyPanel .safety-visual-grid .site-visual-two,#safetyPanel .safety-visual-grid .site-visual-three,#safetyPanel .safety-visual-grid .site-visual-checks,#safetyPanel .safety-visual-grid .site-visual-flow{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(min(128px,100%),1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;min-width:0!important;overflow:visible!important}',
      '#safetyPanel .site-visual-panel[data-site-visual="lesson6-transfer-check"] .site-visual-flow{grid-template-columns:repeat(auto-fit,minmax(min(118px,100%),1fr))!important}',
      '#safetyPanel .site-visual-step,#safetyPanel .site-visual-checks li,#safetyPanel .site-visual-mock-card,#safetyPanel .site-visual-field{min-width:0!important;max-width:100%!important;overflow:hidden!important;word-break:keep-all!important;overflow-wrap:break-word!important}',
      '#safetyPanel .site-visual-step span,#safetyPanel .site-visual-field strong,#safetyPanel .site-visual-field span{min-width:0!important;max-width:100%!important;word-break:keep-all!important;overflow-wrap:break-word!important}',
      '.safety-enhanced-shell{display:grid;gap:18px;margin:22px 0 10px}',
      '.safety-enhanced-section{padding:20px;border:1px solid rgba(31,61,97,.12);border-radius:24px;background:radial-gradient(circle at 94% 8%,rgba(75,155,198,.10),transparent 32%),linear-gradient(180deg,rgba(255,255,255,.98),rgba(246,250,253,.96));box-shadow:0 14px 34px rgba(22,39,61,.06)}',
      '.safety-enhanced-head{display:grid;gap:7px;margin-bottom:15px}',
      '.safety-enhanced-head span,.safety-enhanced-card-meta{justify-self:start;padding:5px 10px;border:1px solid rgba(43,118,153,.18);border-radius:999px;background:rgba(236,249,255,.86);color:#07506e;font-family:"IBM Plex Mono",monospace;font-size:.69rem;font-weight:850;letter-spacing:.06em}',
      '.safety-enhanced-head h2{margin:0;color:#172335;font-size:1.06rem;line-height:1.35}',
      '.safety-enhanced-head p{margin:0;color:#526477;font-size:.9rem;line-height:1.62;word-break:keep-all;overflow-wrap:break-word}',
      '.safety-enhanced-card-grid,.safety-check-grid,.safety-step-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:12px;width:100%;max-width:100%}',
      '.safety-step-row{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))}',
      '.safety-enhanced-card,.safety-scenario-card,.safety-check-card,.safety-step-card,.safety-routine-card{display:grid;gap:8px;min-width:0;max-width:100%;padding:15px;border:1px solid rgba(31,61,97,.11);border-radius:18px;background:rgba(255,255,255,.86);box-shadow:inset 0 1px 0 rgba(255,255,255,.78);word-break:keep-all;overflow-wrap:break-word}',
      '.safety-step-card{padding:13px 14px}',
      '.safety-step-card .safety-enhanced-card-meta{background:#0d5f86;color:#fff;border-color:transparent}',
      '.safety-enhanced-card strong,.safety-scenario-card strong,.safety-check-card strong,.safety-step-card strong,.safety-routine-card strong{display:block;color:#15283e;font-size:.92rem;line-height:1.42}',
      '.safety-enhanced-card p,.safety-scenario-card p,.safety-check-card p,.safety-step-card p,.safety-routine-card p{margin:0;color:#526477;font-size:.84rem;line-height:1.58;word-break:keep-all;overflow-wrap:break-word}',
      '#searchOverlay #searchResults .search-safety-added{margin-bottom:10px}',
      '#searchOverlay #searchResults .search-result-item.search-safety-result{margin-bottom:10px;align-items:flex-start;min-height:auto}',
      '#searchOverlay #searchResults .search-result-item.search-safety-result .search-result-desc{display:block;line-height:1.52;word-break:keep-all;overflow-wrap:break-word}',
      '@media (max-width:768px){#safetyPanel .safety-visual-grid,#safetyPanel .safety-visual-grid .site-visual-two,#safetyPanel .safety-visual-grid .site-visual-three,#safetyPanel .safety-visual-grid .site-visual-checks,#safetyPanel .safety-visual-grid .site-visual-flow,.safety-enhanced-card-grid,.safety-check-grid,.safety-step-row{grid-template-columns:1fr!important}.safety-enhanced-section{padding:16px;border-radius:20px}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function patchSafetyDom(root){
    root = root || document.getElementById('safetyPanel');
    if(!root) return;
    root.classList.add('safety-layout-fixed');
    var visual = root.querySelector('.safety-visual-deck');
    if(visual) visual.setAttribute('data-safety-layout-fixed','true');
  }

  function wrapSafetyRender(){
    var previous = window.renderSafetyPage || (typeof renderSafetyPage === 'function' ? renderSafetyPage : null);
    if(typeof previous !== 'function' || previous.__safetyLayoutSearchWrapped) return;
    function wrappedSafetyPage(){
      var html = previous.apply(this, arguments);
      html = typeof html === 'string' ? html : '';
      if(html.indexOf('data-safety-enhanced="true"') !== -1) return html;
      return html + renderEnhancedSafety();
    }
    wrappedSafetyPage.__safetyLayoutSearchWrapped = true;
    window.renderSafetyPage = wrappedSafetyPage;
    try{ renderSafetyPage = wrappedSafetyPage; }catch(err){}
  }

  function refreshSafetyPanel(){
    ensureSafetyStyles();
    var panel = document.getElementById('safetyPanel');
    if(panel && typeof window.renderSafetyPage === 'function'){
      panel.innerHTML = window.renderSafetyPage();
      patchSafetyDom(panel);
    }
  }

  function safetyItems(){
    var c = COPY[currentLocale()] || COPY.en;
    var ko = COPY.ko;
    var en = COPY.en;
    var items = [
      { id:'safety-scam-spotting', title:c.scam.title, desc:c.scam.desc, keywords:['scam','phishing','fake link','사기','피싱','가짜 링크',ko.scam.title,en.scam.title] },
      { id:'safety-secret-stop', title:c.secret.title, desc:c.secret.desc, keywords:['seed phrase','private key','secret','시드 문구','개인키','비밀 정보',ko.secret.title,en.secret.title] },
      { id:'safety-final-check', title:c.finalCheck.title, desc:c.finalCheck.desc, keywords:['final check','transfer check','test transfer','전송 확인','소액 테스트','주소 확인',ko.finalCheck.title,en.finalCheck.title] },
      { id:'safety-common-mistakes', title:c.mistakes.title, desc:c.mistakes.desc, keywords:['common mistakes','support dm','approval','자주 하는 실수','지원 DM','승인',ko.mistakes.title,en.mistakes.title] },
      { id:'safety-routine', title:c.routine.title, desc:c.routine.desc, keywords:['safety routine','official link','domain check','안전 루틴','공식 링크','도메인 확인',ko.routine.title,en.routine.title] },
      { id:'safety-seed-phrase', title:c.search.seed, desc:c.secret.cards[0].desc, keywords:['seed phrase','recovery phrase','시드 문구','복구 문구'] },
      { id:'safety-private-key', title:c.search.privateKey, desc:c.secret.cards[1].desc, keywords:['private key','개인키','secret key'] },
      { id:'safety-wallet-connect', title:c.search.walletConnect, desc:c.routine.cards[2].desc, keywords:['wallet connect','wallet connection','지갑 연결'] },
      { id:'safety-approval', title:c.search.approval, desc:c.secret.cards[2].desc, keywords:['approval','token approval','승인','토큰 승인'] },
      { id:'safety-address-check', title:c.search.address, desc:c.finalCheck.cards[2].desc, keywords:['address check','wallet address','주소 확인','주소'] },
      { id:'safety-domain-check', title:c.search.domain, desc:c.scam.cards[1].desc, keywords:['domain','domain check','official domain','도메인','도메인 확인'] },
      { id:'safety-test-transfer', title:c.search.test, desc:c.finalCheck.cards[3].desc, keywords:['test transfer','small test','소액 테스트'] },
      { id:'safety-common-mistakes', title:c.search.supportDm, desc:c.mistakes.cards[2].desc, keywords:['support dm','fake support','지원 DM','가짜 지원팀'] },
      { id:'safety-scam-spotting', title:c.search.addressPoisoning, desc:c.search.addressPoisoningDesc, keywords:['address poisoning','lookalike address','주소 오염'] },
      { id:'safety-scam-spotting', title:c.search.phishing, desc:c.search.phishingDesc, keywords:['phishing','phishing link','피싱','피싱 링크'] }
    ];
    return items.map(function(item){
      item.type = 'safety';
      item.badge = 'S';
      item.page = 'safety';
      item.keywords = dedupe([item.title,item.desc].concat(item.keywords || []));
      return item;
    });
  }

  function scoreSafetyItem(item, query){
    var q = norm(query);
    if(!q) return 0;
    var title = norm(item.title);
    var desc = norm(item.desc);
    var keys = norm((item.keywords || []).join(' '));
    var score = 0;
    if(title === q) score += 320;
    if(keys === q) score += 260;
    if(title.indexOf(q) === 0) score += 220;
    if(keys.indexOf(q) === 0) score += 190;
    if(title.indexOf(q) !== -1) score += 160;
    if(keys.indexOf(q) !== -1) score += 140;
    if(desc.indexOf(q) !== -1) score += 80;
    if(/scam|phishing|safety|seed phrase|private key|approval|address|domain|test transfer|사기|피싱|안전|시드 문구|개인키|승인|주소|도메인|소액 테스트|지원 dm|주소 오염|전송 확인/.test(q)) score += 80;
    return score;
  }

  function matchingSafetyItems(query){
    var q = norm(query);
    if(!q) return [];
    return safetyItems()
      .map(function(item){ return { item:item, score:scoreSafetyItem(item, q) }; })
      .filter(function(entry){ return entry.score > 0; })
      .sort(function(a,b){ return b.score - a.score; })
      .map(function(entry){ return entry.item; })
      .slice(0, 8);
  }

  function searchTypeLabel(){
    var lang = currentLocale();
    var labels = {
      en:'Safety', ko:'안전', th:'ความปลอดภัย', id:'Keamanan', pt:'Segurança', br:'Segurança',
      tr:'Güvenlik', es:'Seguridad', ar:'الأمان', vi:'An toàn', ha:'Tsaro'
    };
    return labels[lang] || labels.en;
  }

  function searchSectionLabel(){
    var lang = currentLocale();
    var labels = {
      en:'Safety Results', ko:'안전 결과', th:'ผลลัพธ์ความปลอดภัย', id:'Hasil keamanan',
      pt:'Resultados de segurança', br:'Resultados de segurança', tr:'Güvenlik sonuçları',
      es:'Resultados de seguridad', ar:'نتائج الأمان', vi:'Kết quả an toàn', ha:'Sakamakon tsaro'
    };
    return labels[lang] || labels.en;
  }

  function resultRow(item, index){
    return ''
      + '<a href="#' + esc(item.id) + '" class="search-result-item search-safety-result search-safety-added" data-safety-search-index="' + index + '" data-safety-anchor="' + esc(item.id) + '">'
      +   '<span class="search-result-badge safety">S</span>'
      +   '<span class="search-result-body">'
      +     '<span class="search-result-title">' + esc(item.title) + '</span>'
      +     '<span class="search-result-meta">' + esc(searchTypeLabel()) + '</span>'
      +     '<span class="search-result-desc">' + esc(item.desc) + '</span>'
      +   '</span>'
      + '</a>';
  }

  function openSafetyAnchor(anchorId){
    if(typeof showPage === 'function') showPage('safety');
    if(typeof closeSearch === 'function') closeSearch();
    setTimeout(function(){
      refreshSafetyPanel();
      var target = document.getElementById(anchorId) || document.getElementById('safetyPanel');
      if(target && typeof target.scrollIntoView === 'function'){
        target.scrollIntoView({ behavior:'smooth', block:'start' });
        target.classList.add('search-target-highlight-final');
        setTimeout(function(){ target.classList.remove('search-target-highlight-final'); }, 2200);
      }
    }, 120);
  }

  function bindSafetySearchRows(root){
    Array.prototype.forEach.call(root.querySelectorAll('.search-safety-result[data-safety-anchor]'), function(row){
      if(row.__safetySearchBound) return;
      row.__safetySearchBound = true;
      row.addEventListener('click', function(event){
        if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openSafetyAnchor(row.getAttribute('data-safety-anchor'));
      });
    });
  }

  function appendSafetySearchResults(query){
    var root = document.getElementById('searchResults');
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-safety-added'), function(node){ node.remove(); });
    query = String(query || (document.getElementById('searchInput') || {}).value || '').trim();
    var items = matchingSafetyItems(query);
    if(!items.length) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-empty'), function(node){ node.remove(); });
    var html = '<div class="search-section-divider search-safety-added">' + esc(searchSectionLabel()) + '</div>'
      + items.map(resultRow).join('');
    var firstSite = Array.prototype.find.call(root.children || [], function(node){
      return node.classList && node.classList.contains('search-section-divider') && /site|사이트|safety|안전/i.test(node.textContent || '');
    });
    if(firstSite) firstSite.insertAdjacentHTML('beforebegin', html);
    else root.insertAdjacentHTML('afterbegin', html);
    bindSafetySearchRows(root);
  }

  function wrapSearchRenderer(name){
    var previous = window[name];
    if(typeof previous !== 'function' || previous.__safetySearchWrapped) return;
    function wrapped(){
      var query = arguments[0];
      var result = previous.apply(this, arguments);
      setTimeout(function(){ appendSafetySearchResults(query); }, 0);
      return result;
    }
    wrapped.__safetySearchWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
    }catch(err){}
  }

  function wrapSearchHooks(){
    wrapSearchRenderer('renderSearchAutocompleteFinal');
    wrapSearchRenderer('renderPatchedSearchResults');

    var open = window.openSearch;
    if(typeof open === 'function' && !open.__safetySearchWrapped){
      function wrappedOpen(){
        var result = open.apply(this, arguments);
        setTimeout(function(){
          appendSafetySearchResults((document.getElementById('searchInput') || {}).value || '');
        }, 0);
        return result;
      }
      wrappedOpen.__safetySearchWrapped = true;
      window.openSearch = wrappedOpen;
    }

    var setLanguage = window.setLang;
    if(typeof setLanguage === 'function' && !setLanguage.__safetySearchWrapped){
      function wrappedSetLang(){
        var result = setLanguage.apply(this, arguments);
        setTimeout(function(){
          refreshSafetyPanel();
          appendSafetySearchResults((document.getElementById('searchInput') || {}).value || '');
        }, 0);
        return result;
      }
      wrappedSetLang.__safetySearchWrapped = true;
      window.setLang = wrappedSetLang;
    }

    document.addEventListener('input', function(event){
      var target = event.target;
      if(target && target.id === 'searchInput'){
        setTimeout(function(){ appendSafetySearchResults(target.value || ''); }, 0);
      }
    }, true);
  }

  window.getSafetySearchItems = safetyItems;
  window.debugSafetyLayoutSearch = function(query){
    var panel = document.getElementById('safetyPanel');
    var overflow = [];
    if(panel){
      var panelWidth = panel.getBoundingClientRect ? panel.getBoundingClientRect().width : 0;
      Array.prototype.forEach.call(panel.querySelectorAll('.safety-visual-grid,.site-visual-panel,.site-visual-flow,.safety-enhanced-section,.safety-step-row'), function(node){
        var rect = node.getBoundingClientRect ? node.getBoundingClientRect() : { width:0, right:0 };
        if(panelWidth && rect.width > panelWidth + 2) overflow.push({ className:node.className, id:node.id || node.getAttribute('data-site-visual') || '', width:rect.width, panelWidth:panelWidth });
      });
    }
    return {
      currentLocale: currentLocale(),
      safetySearchItemCount: safetyItems().length,
      matchingSearchItems: matchingSafetyItems(query || '').map(function(item){ return item.title; }),
      safetyPanelFound: !!panel,
      overflowSuspects: overflow
    };
  };

  var COPY = {
    en:{
      badges:{panel:'Scam check',stop:'Pause first',finalCheck:'Final check',mistakes:'Mistakes',routine:'Routine'},
      scam:{title:'Scam spotting practice panel',desc:'Before clicking a link, entering secret information, or sending assets, check these three scenes first.',cards:[
        {meta:'01',title:'Check the request',desc:'Confirm who is asking and whether they are pressuring you to act quickly.'},
        {meta:'02',title:'Check the domain',desc:'Look at the full web address, not only the project name or logo.'},
        {meta:'03',title:'Check before sending',desc:'Review the asset, network, address, and amount before confirming.'}
      ]},
      secret:{title:'Pause before entering secrets',desc:'Any screen that asks for seed phrases or private keys should make you stop, no matter the reason.',cards:[
        {id:'safety-seed-phrase',meta:'Stop',title:'Seed phrase request',desc:'Never type recovery words into a website, form, support chat, or DM.'},
        {id:'safety-private-key',meta:'Stop',title:'Private key request',desc:'A private key controls assets. Treat any request for it as unsafe.'},
        {id:'safety-approval',meta:'Review',title:'Unknown approval',desc:'Read the spender, token, and amount before approving wallet permissions.'},
        {meta:'Warning',title:'Support DM link',desc:'Do not trust help links sent by accounts that message you first.'}
      ]},
      finalCheck:{title:'Final check before transfer',desc:'Use this short checklist before sending assets, especially on a new network or address.',cards:[
        {meta:'01',title:'Asset check',desc:'Confirm the asset name and ticker.'},
        {meta:'02',title:'Network check',desc:'Make sure sender and receiver support the same network.'},
        {id:'safety-address-check',meta:'03',title:'Address check',desc:'Compare the full address, not only the first and last characters.'},
        {id:'safety-test-transfer',meta:'04',title:'Small test',desc:'Send a small test before moving a larger amount.'},
        {meta:'05',title:'Final confirm',desc:'Review amount, fee, network, and recipient one more time.'}
      ]},
      mistakes:{title:'Common mistakes',desc:'These are the patterns that often create avoidable losses.',cards:[
        {title:'Trusting only a few address characters',desc:'Lookalike addresses can make the start and end seem familiar.'},
        {title:'Choosing a similar-looking network',desc:'Similar network names do not mean they are compatible.'},
        {title:'Treating support DMs as official',desc:'Real support rarely starts by asking you to connect a wallet or reveal secrets.'},
        {title:'Confusing connection and approval',desc:'Connecting a wallet is different from granting token spending permission.'},
        {title:'Skipping a test transfer',desc:'A small test helps catch address and network mistakes before a large send.'}
      ]},
      routine:{title:'Safety routine',desc:'A repeatable routine is safer than trusting memory during a stressful moment.',cards:[
        {title:'Open official links directly',desc:'Use saved bookmarks or verified official pages.'},
        {id:'safety-domain-check',title:'Read the full domain',desc:'Check spelling, subdomains, and unusual endings.'},
        {id:'safety-wallet-connect',title:'Review wallet requests',desc:'Pause before connecting, signing, or approving.'},
        {title:'Test before a large transfer',desc:'Use a small amount first when the address or network is new.'},
        {title:'Clean up unused approvals',desc:'Revoke old token approvals you no longer need.'}
      ]},
      search:{seed:'Seed phrase safety',privateKey:'Private key safety',walletConnect:'Wallet connection check',approval:'Token approval check',address:'Address check',domain:'Domain check',test:'Test transfer',supportDm:'Support DM warning',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Watch for lookalike addresses in wallet history before copying.',phishing:'Phishing link',phishingDesc:'Verify links before opening, connecting, or signing.'}
    },
    ko:{
      badges:{panel:'사기 확인',stop:'먼저 멈춤',finalCheck:'최종 확인',mistakes:'실수',routine:'루틴'},
      scam:{title:'사기 식별 모의 패널',desc:'링크를 누르거나 비밀 정보를 입력하거나 전송하기 전에 세 장면을 먼저 확인합니다.',cards:[
        {meta:'01',title:'요청 확인',desc:'누가 요청했는지, 급하게 행동하라고 압박하는지 확인합니다.'},
        {meta:'02',title:'도메인 확인',desc:'프로젝트 이름이 아니라 전체 웹 주소를 확인합니다.'},
        {meta:'03',title:'전송 전 확인',desc:'자산, 네트워크, 주소, 수량을 다시 확인합니다.'}
      ]},
      secret:{title:'비밀 정보 입력 전 멈춤',desc:'시드 문구와 개인키를 요구하는 화면은 이유와 상관없이 멈춰야 합니다.',cards:[
        {id:'safety-seed-phrase',meta:'멈춤',title:'시드 문구 요청',desc:'복구 문구를 웹사이트, 폼, 지원 채팅, DM에 입력하지 마세요.'},
        {id:'safety-private-key',meta:'멈춤',title:'개인키 요청',desc:'개인키는 자산 통제권입니다. 요청 자체를 위험 신호로 봐야 합니다.'},
        {id:'safety-approval',meta:'검토',title:'알 수 없는 승인',desc:'승인 전 권한 대상, 토큰, 금액을 읽고 확인합니다.'},
        {meta:'주의',title:'지원 DM 링크',desc:'먼저 연락해 온 계정이 보낸 도움 링크를 그대로 믿지 마세요.'}
      ]},
      finalCheck:{title:'전송 전 최종 확인',desc:'새 네트워크나 새 주소로 보낼 때 특히 이 짧은 체크리스트를 사용하세요.',cards:[
        {meta:'01',title:'자산 확인',desc:'자산 이름과 티커가 맞는지 확인합니다.'},
        {meta:'02',title:'네트워크 확인',desc:'보내는 곳과 받는 곳이 같은 네트워크를 지원하는지 봅니다.'},
        {id:'safety-address-check',meta:'03',title:'주소 확인',desc:'앞뒤 몇 글자만 보지 말고 전체 주소를 비교합니다.'},
        {id:'safety-test-transfer',meta:'04',title:'소액 테스트',desc:'큰 금액 전송 전 작은 금액으로 먼저 확인합니다.'},
        {meta:'05',title:'최종 확인',desc:'금액, 수수료, 네트워크, 받는 주소를 한 번 더 봅니다.'}
      ]},
      mistakes:{title:'자주 하는 실수',desc:'아래 패턴은 피할 수 있는 손실을 자주 만듭니다.',cards:[
        {title:'앞뒤 몇 글자만 보고 주소를 믿기',desc:'주소 오염처럼 비슷한 주소가 기록에 남을 수 있습니다.'},
        {title:'이름이 비슷한 네트워크를 잘못 선택하기',desc:'이름이 비슷해도 서로 호환되는 네트워크는 아닐 수 있습니다.'},
        {title:'지원팀 DM을 공식 안내로 착각하기',desc:'공식 지원처럼 보여도 먼저 온 DM 링크는 조심해야 합니다.'},
        {title:'승인 요청과 지갑 연결을 구분하지 못하기',desc:'지갑 연결과 토큰 사용 권한 승인은 서로 다른 행동입니다.'},
        {title:'작은 금액 테스트 없이 바로 전송하기',desc:'소액 테스트는 주소와 네트워크 실수를 먼저 잡는 방법입니다.'}
      ]},
      routine:{title:'안전 루틴',desc:'불안한 순간에는 기억보다 반복 가능한 루틴이 더 안전합니다.',cards:[
        {title:'공식 링크 직접 열기',desc:'저장한 북마크나 검증된 공식 페이지를 사용합니다.'},
        {id:'safety-domain-check',title:'도메인 전체 확인',desc:'철자, 하위 도메인, 낯선 끝 주소를 함께 확인합니다.'},
        {id:'safety-wallet-connect',title:'지갑 연결 전 요청 확인',desc:'연결, 서명, 승인 전에 요청 내용을 멈춰서 읽습니다.'},
        {title:'전송 전 소액 테스트',desc:'새 주소나 새 네트워크라면 작은 금액부터 보냅니다.'},
        {title:'사용하지 않는 승인 정리',desc:'더 이상 쓰지 않는 토큰 승인은 주기적으로 해제합니다.'}
      ]},
      search:{seed:'시드 문구 안전',privateKey:'개인키 안전',walletConnect:'지갑 연결 확인',approval:'토큰 승인 확인',address:'주소 확인',domain:'도메인 확인',test:'소액 테스트',supportDm:'지원 DM 주의',addressPoisoning:'주소 오염',addressPoisoningDesc:'복사하기 전 지갑 기록의 비슷한 주소를 조심하세요.',phishing:'피싱 링크',phishingDesc:'열기, 연결, 서명 전에 링크를 검증하세요.'}
    }
  };

  COPY.th = {
    badges:{panel:'ตรวจ scam',stop:'หยุดก่อน',finalCheck:'ตรวจสุดท้าย',mistakes:'ข้อผิดพลาด',routine:'รูทีน'},
    scam:{title:'แผงฝึกแยกแยะ scam',desc:'ก่อนกดลิงก์ ใส่ข้อมูลลับ หรือโอนสินทรัพย์ ให้ตรวจสามสถานการณ์นี้ก่อน',cards:[{meta:'01',title:'ตรวจคำขอ',desc:'ดูว่าใครขอ และมีการเร่งให้ทำทันทีหรือไม่'},{meta:'02',title:'ตรวจโดเมน',desc:'ดูที่อยู่เว็บเต็ม ไม่ใช่แค่ชื่อโปรเจกต์'},{meta:'03',title:'ตรวจก่อนโอน',desc:'ตรวจสินทรัพย์ เครือข่าย ที่อยู่ และจำนวนอีกครั้ง'}]},
    secret:{title:'หยุดก่อนกรอกข้อมูลลับ',desc:'หน้าที่ขอ seed phrase หรือ private key ควรหยุดทันทีไม่ว่าอ้างเหตุผลใด',cards:[{id:'safety-seed-phrase',meta:'หยุด',title:'ขอ seed phrase',desc:'อย่าพิมพ์คำกู้คืนในเว็บ ฟอร์ม แชต support หรือ DM'},{id:'safety-private-key',meta:'หยุด',title:'ขอ private key',desc:'private key ควบคุมสินทรัพย์ คำขอนี้คือสัญญาณเสี่ยง'},{id:'safety-approval',meta:'ตรวจ',title:'approval ที่ไม่รู้จัก',desc:'อ่าน spender, token และจำนวนก่อนอนุมัติ'},{meta:'เตือน',title:'ลิงก์ support DM',desc:'อย่าเชื่อลิงก์ช่วยเหลือจากบัญชีที่ทักมาก่อน'}]},
    finalCheck:{title:'ตรวจสุดท้ายก่อนโอน',desc:'ใช้ checklist สั้นนี้ก่อนส่ง โดยเฉพาะเครือข่ายหรือที่อยู่ใหม่',cards:[{meta:'01',title:'ตรวจสินทรัพย์',desc:'ยืนยันชื่อและ ticker'},{meta:'02',title:'ตรวจเครือข่าย',desc:'ผู้ส่งและผู้รับต้องรองรับเครือข่ายเดียวกัน'},{id:'safety-address-check',meta:'03',title:'ตรวจที่อยู่',desc:'เทียบที่อยู่เต็ม ไม่ใช่แค่ต้นและท้าย'},{id:'safety-test-transfer',meta:'04',title:'ทดสอบเล็กน้อย',desc:'ส่งจำนวนน้อยก่อนยอดใหญ่'},{meta:'05',title:'ยืนยันสุดท้าย',desc:'ดูจำนวน ค่าธรรมเนียม เครือข่าย และผู้รับอีกครั้ง'}]},
    mistakes:{title:'ข้อผิดพลาดที่พบบ่อย',desc:'รูปแบบเหล่านี้มักทำให้เสียหายโดยหลีกเลี่ยงได้',cards:[{title:'เชื่อที่อยู่จากไม่กี่ตัวอักษร',desc:'ที่อยู่ปลอมอาจดูคล้ายในประวัติวอลเล็ต'},{title:'เลือกเครือข่ายชื่อคล้ายผิด',desc:'ชื่อคล้ายไม่ได้แปลว่าเข้ากันได้'},{title:'คิดว่า DM support เป็นทางการ',desc:'DM ที่ส่งมาก่อนพร้อมลิงก์ควรระวัง'},{title:'สับสน connect กับ approval',desc:'เชื่อมวอลเล็ตไม่เหมือนอนุญาตใช้ token'},{title:'ไม่ทดสอบยอดเล็กก่อน',desc:'การทดสอบช่วยจับที่อยู่หรือเครือข่ายผิด'}]},
    routine:{title:'รูทีนความปลอดภัย',desc:'ทำซ้ำตามขั้นตอนปลอดภัยกว่าพึ่งความจำตอนรีบ',cards:[{title:'เปิดลิงก์ทางการเอง',desc:'ใช้ bookmark หรือหน้าทางการที่ตรวจแล้ว'},{id:'safety-domain-check',title:'อ่านโดเมนเต็ม',desc:'ตรวจตัวสะกด subdomain และส่วนท้ายแปลกๆ'},{id:'safety-wallet-connect',title:'ตรวจคำขอวอลเล็ต',desc:'หยุดอ่านก่อน connect, sign หรือ approve'},{title:'ทดสอบก่อนโอนใหญ่',desc:'ใช้ยอดเล็กเมื่อเป็นที่อยู่หรือเครือข่ายใหม่'},{title:'ล้าง approval ที่ไม่ใช้',desc:'ยกเลิกสิทธิ์ token เก่าที่ไม่จำเป็น'}]},
    search:{seed:'ความปลอดภัย seed phrase',privateKey:'ความปลอดภัย private key',walletConnect:'ตรวจ wallet connect',approval:'ตรวจ token approval',address:'ตรวจที่อยู่',domain:'ตรวจโดเมน',test:'ทดสอบโอน',supportDm:'ระวัง support DM',addressPoisoning:'address poisoning',addressPoisoningDesc:'ระวังที่อยู่คล้ายกันในประวัติวอลเล็ตก่อนคัดลอก',phishing:'ลิงก์ phishing',phishingDesc:'ตรวจลิงก์ก่อนเปิด เชื่อมต่อ หรือเซ็น'}
  };
  COPY.id = {
    badges:{panel:'Cek scam',stop:'Berhenti dulu',finalCheck:'Cek akhir',mistakes:'Kesalahan',routine:'Rutinitas'},
    scam:{title:'Panel latihan mengenali scam',desc:'Sebelum membuka link, memasukkan rahasia, atau mengirim aset, cek tiga hal ini.',cards:[{meta:'01',title:'Cek permintaan',desc:'Pastikan siapa yang meminta dan apakah ada tekanan untuk cepat bertindak.'},{meta:'02',title:'Cek domain',desc:'Periksa alamat web penuh, bukan hanya nama proyek.'},{meta:'03',title:'Cek sebelum kirim',desc:'Tinjau aset, jaringan, alamat, dan jumlah.'}]},
    secret:{title:'Berhenti sebelum memasukkan rahasia',desc:'Layar yang meminta seed phrase atau private key harus dihentikan apa pun alasannya.',cards:[{id:'safety-seed-phrase',meta:'Stop',title:'Permintaan seed phrase',desc:'Jangan ketik recovery words di website, formulir, chat support, atau DM.'},{id:'safety-private-key',meta:'Stop',title:'Permintaan private key',desc:'Private key mengontrol aset. Anggap permintaan ini berbahaya.'},{id:'safety-approval',meta:'Cek',title:'Approval tidak dikenal',desc:'Baca spender, token, dan jumlah sebelum menyetujui.'},{meta:'Waspada',title:'Link support DM',desc:'Jangan percaya link bantuan dari akun yang menghubungi lebih dulu.'}]},
    finalCheck:{title:'Cek akhir sebelum transfer',desc:'Gunakan checklist singkat ini sebelum mengirim, terutama jaringan atau alamat baru.',cards:[{meta:'01',title:'Cek aset',desc:'Pastikan nama aset dan ticker.'},{meta:'02',title:'Cek jaringan',desc:'Pengirim dan penerima harus mendukung jaringan yang sama.'},{id:'safety-address-check',meta:'03',title:'Cek alamat',desc:'Bandingkan alamat penuh, bukan hanya awal dan akhir.'},{id:'safety-test-transfer',meta:'04',title:'Tes kecil',desc:'Kirim jumlah kecil sebelum jumlah besar.'},{meta:'05',title:'Konfirmasi akhir',desc:'Cek lagi jumlah, fee, jaringan, dan penerima.'}]},
    mistakes:{title:'Kesalahan umum',desc:'Pola ini sering membuat kerugian yang bisa dihindari.',cards:[{title:'Percaya beberapa karakter alamat',desc:'Alamat mirip bisa muncul di riwayat wallet.'},{title:'Salah memilih jaringan mirip',desc:'Nama mirip bukan berarti kompatibel.'},{title:'Mengira DM support resmi',desc:'DM pertama berisi link harus dicurigai.'},{title:'Mencampur koneksi dan approval',desc:'Connect wallet berbeda dari izin memakai token.'},{title:'Melewati test transfer',desc:'Tes kecil membantu menemukan alamat atau jaringan yang salah.'}]},
    routine:{title:'Rutinitas aman',desc:'Rutinitas berulang lebih aman daripada ingatan saat panik.',cards:[{title:'Buka link resmi langsung',desc:'Gunakan bookmark atau halaman resmi terverifikasi.'},{id:'safety-domain-check',title:'Baca domain penuh',desc:'Cek ejaan, subdomain, dan akhiran aneh.'},{id:'safety-wallet-connect',title:'Cek permintaan wallet',desc:'Berhenti sebelum connect, sign, atau approve.'},{title:'Tes sebelum kirim besar',desc:'Gunakan jumlah kecil untuk alamat atau jaringan baru.'},{title:'Bersihkan approval lama',desc:'Cabut izin token yang tidak lagi dipakai.'}]},
    search:{seed:'Keamanan seed phrase',privateKey:'Keamanan private key',walletConnect:'Cek wallet connect',approval:'Cek token approval',address:'Cek alamat',domain:'Cek domain',test:'Test transfer',supportDm:'Peringatan support DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Waspadai alamat mirip di riwayat wallet sebelum menyalin.',phishing:'Link phishing',phishingDesc:'Verifikasi link sebelum membuka, connect, atau sign.'}
  };
  COPY.pt = COPY.br = {
    badges:{panel:'Checar golpe',stop:'Pausar antes',finalCheck:'Checagem final',mistakes:'Erros',routine:'Rotina'},
    scam:{title:'Painel de simulação para identificar golpes',desc:'Antes de abrir links, inserir segredos ou enviar ativos, verifique estas três cenas.',cards:[{meta:'01',title:'Verifique o pedido',desc:'Confirme quem pediu e se há pressão para agir rápido.'},{meta:'02',title:'Verifique o domínio',desc:'Confira o endereço completo, não apenas o nome do projeto.'},{meta:'03',title:'Verifique antes de enviar',desc:'Revise ativo, rede, endereço e quantidade.'}]},
    secret:{title:'Pare antes de inserir informações secretas',desc:'Qualquer tela que peça seed phrase ou chave privada deve fazer você parar.',cards:[{id:'safety-seed-phrase',meta:'Pare',title:'Pedido de seed phrase',desc:'Nunca digite palavras de recuperação em site, formulário, suporte ou DM.'},{id:'safety-private-key',meta:'Pare',title:'Pedido de chave privada',desc:'A chave privada controla ativos. Trate o pedido como risco.'},{id:'safety-approval',meta:'Revise',title:'Aprovação desconhecida',desc:'Leia spender, token e valor antes de aprovar.'},{meta:'Aviso',title:'Link de suporte por DM',desc:'Não confie em links de ajuda enviados por contas que chamaram primeiro.'}]},
    finalCheck:{title:'Checagem final antes da transferência',desc:'Use esta checklist antes de enviar, especialmente em rede ou endereço novo.',cards:[{meta:'01',title:'Checar ativo',desc:'Confirme nome e ticker.'},{meta:'02',title:'Checar rede',desc:'Remetente e destinatário devem suportar a mesma rede.'},{id:'safety-address-check',meta:'03',title:'Checar endereço',desc:'Compare o endereço inteiro, não só início e fim.'},{id:'safety-test-transfer',meta:'04',title:'Teste pequeno',desc:'Envie pouco antes de mover um valor maior.'},{meta:'05',title:'Confirmar final',desc:'Revise valor, taxa, rede e destinatário.'}]},
    mistakes:{title:'Erros comuns',desc:'Estes padrões geram perdas evitáveis.',cards:[{title:'Confiar em poucos caracteres do endereço',desc:'Endereços parecidos podem aparecer no histórico.'},{title:'Escolher rede de nome parecido',desc:'Nome parecido não significa compatibilidade.'},{title:'Tratar DM de suporte como oficial',desc:'Links enviados por DM primeiro exigem cuidado.'},{title:'Confundir conexão e aprovação',desc:'Conectar carteira é diferente de permitir uso de token.'},{title:'Pular teste pequeno',desc:'Teste pequeno ajuda a pegar erro de rede ou endereço.'}]},
    routine:{title:'Rotina de segurança',desc:'Uma rotina repetível é mais segura que memória em momento de pressão.',cards:[{title:'Abra links oficiais diretamente',desc:'Use favoritos ou páginas oficiais verificadas.'},{id:'safety-domain-check',title:'Leia o domínio completo',desc:'Confira ortografia, subdomínios e finais estranhos.'},{id:'safety-wallet-connect',title:'Revise pedidos da carteira',desc:'Pausar antes de conectar, assinar ou aprovar.'},{title:'Teste antes de transferir muito',desc:'Use pequeno valor em endereço ou rede novos.'},{title:'Limpe aprovações antigas',desc:'Revogue permissões de token que não usa.'}]},
    search:{seed:'Segurança da seed phrase',privateKey:'Segurança da chave privada',walletConnect:'Checar conexão da carteira',approval:'Checar aprovação de token',address:'Checar endereço',domain:'Checar domínio',test:'Transferência teste',supportDm:'Aviso de suporte por DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Cuidado com endereços parecidos no histórico antes de copiar.',phishing:'Link de phishing',phishingDesc:'Verifique links antes de abrir, conectar ou assinar.'}
  };
  COPY.tr = {
    badges:{panel:'Scam kontrolü',stop:'Önce dur',finalCheck:'Son kontrol',mistakes:'Hatalar',routine:'Rutin'},
    scam:{title:'Scam ayırt etme paneli',desc:'Linke tıklamadan, gizli bilgi girmeden veya varlık göndermeden önce üç sahneyi kontrol edin.',cards:[{meta:'01',title:'İsteği kontrol et',desc:'Kimin istediğini ve acele ettirip ettirmediğini doğrula.'},{meta:'02',title:'Alan adını kontrol et',desc:'Sadece proje adına değil tam web adresine bak.'},{meta:'03',title:'Göndermeden önce kontrol et',desc:'Varlık, ağ, adres ve miktarı yeniden kontrol et.'}]},
    secret:{title:'Gizli bilgi girmeden önce dur',desc:'Seed phrase veya private key isteyen ekranlarda sebep ne olursa olsun dur.',cards:[{id:'safety-seed-phrase',meta:'Dur',title:'Seed phrase isteği',desc:'Kurtarma kelimelerini siteye, forma, destek sohbetine veya DM’ye yazma.'},{id:'safety-private-key',meta:'Dur',title:'Private key isteği',desc:'Private key varlıkları kontrol eder. Bu isteği risk sinyali say.'},{id:'safety-approval',meta:'Kontrol',title:'Bilinmeyen onay',desc:'Onaydan önce spender, token ve miktarı oku.'},{meta:'Uyarı',title:'Destek DM linki',desc:'Önce yazan hesapların yardım linklerine güvenme.'}]},
    finalCheck:{title:'Transfer öncesi son kontrol',desc:'Yeni ağ veya adres kullanırken bu kısa listeyi kullan.',cards:[{meta:'01',title:'Varlık kontrolü',desc:'Varlık adı ve tickerı doğrula.'},{meta:'02',title:'Ağ kontrolü',desc:'Gönderen ve alan aynı ağı desteklemeli.'},{id:'safety-address-check',meta:'03',title:'Adres kontrolü',desc:'Sadece baş ve sona değil tam adrese bak.'},{id:'safety-test-transfer',meta:'04',title:'Küçük test',desc:'Büyük tutardan önce küçük miktar gönder.'},{meta:'05',title:'Son onay',desc:'Miktar, ücret, ağ ve alıcıyı tekrar incele.'}]},
    mistakes:{title:'Sık hatalar',desc:'Bu kalıplar önlenebilir kayıplara yol açar.',cards:[{title:'Birkaç adres karakterine güvenmek',desc:'Benzer adresler cüzdan geçmişinde görünebilir.'},{title:'Benzer adlı ağı seçmek',desc:'Benzer ad uyumluluk anlamına gelmez.'},{title:'Destek DM’sini resmi sanmak',desc:'Önce gelen DM linklerine dikkat et.'},{title:'Bağlantı ve onayı karıştırmak',desc:'Cüzdan bağlamak token izni vermek değildir.'},{title:'Test transferini atlamak',desc:'Küçük test adres ve ağ hatalarını yakalar.'}]},
    routine:{title:'Güvenlik rutini',desc:'Baskı anında tekrarlanabilir rutin hafızadan güvenlidir.',cards:[{title:'Resmi linkleri doğrudan aç',desc:'Yer imi veya doğrulanmış resmi sayfa kullan.'},{id:'safety-domain-check',title:'Tam domaini oku',desc:'Yazım, alt domain ve garip uzantıları kontrol et.'},{id:'safety-wallet-connect',title:'Cüzdan isteklerini incele',desc:'Bağlanma, imzalama veya onaydan önce dur.'},{title:'Büyük transferden önce test et',desc:'Yeni adres veya ağda küçük miktar kullan.'},{title:'Kullanılmayan onayları temizle',desc:'Artık gerekmeyen token izinlerini iptal et.'}]},
    search:{seed:'Seed phrase güvenliği',privateKey:'Private key güvenliği',walletConnect:'Wallet connect kontrolü',approval:'Token onay kontrolü',address:'Adres kontrolü',domain:'Domain kontrolü',test:'Test transferi',supportDm:'Destek DM uyarısı',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Kopyalamadan önce cüzdan geçmişindeki benzer adreslere dikkat et.',phishing:'Phishing linki',phishingDesc:'Açmadan, bağlanmadan veya imzalamadan önce linki doğrula.'}
  };
  COPY.es = {
    badges:{panel:'Revisar estafa',stop:'Pausa primero',finalCheck:'Revisión final',mistakes:'Errores',routine:'Rutina'},
    scam:{title:'Panel de práctica para detectar estafas',desc:'Antes de abrir enlaces, ingresar secretos o enviar activos, revisa estas tres escenas.',cards:[{meta:'01',title:'Revisa la solicitud',desc:'Confirma quién pide y si te presiona para actuar rápido.'},{meta:'02',title:'Revisa el dominio',desc:'Mira la dirección web completa, no solo el nombre del proyecto.'},{meta:'03',title:'Revisa antes de enviar',desc:'Confirma activo, red, dirección y cantidad.'}]},
    secret:{title:'Pausa antes de ingresar secretos',desc:'Una pantalla que pide seed phrase o clave privada debe hacerte parar.',cards:[{id:'safety-seed-phrase',meta:'Pausa',title:'Solicitud de seed phrase',desc:'Nunca escribas palabras de recuperación en web, formulario, soporte o DM.'},{id:'safety-private-key',meta:'Pausa',title:'Solicitud de clave privada',desc:'La clave privada controla activos. Trata la solicitud como riesgo.'},{id:'safety-approval',meta:'Revisa',title:'Aprobación desconocida',desc:'Lee spender, token e importe antes de aprobar.'},{meta:'Alerta',title:'Enlace de soporte por DM',desc:'No confíes en enlaces de ayuda enviados por cuentas que escriben primero.'}]},
    finalCheck:{title:'Revisión final antes de transferir',desc:'Usa esta lista antes de enviar, especialmente con red o dirección nueva.',cards:[{meta:'01',title:'Revisar activo',desc:'Confirma nombre y ticker.'},{meta:'02',title:'Revisar red',desc:'Emisor y receptor deben soportar la misma red.'},{id:'safety-address-check',meta:'03',title:'Revisar dirección',desc:'Compara la dirección completa, no solo inicio y final.'},{id:'safety-test-transfer',meta:'04',title:'Prueba pequeña',desc:'Envía poco antes de mover más.'},{meta:'05',title:'Confirmación final',desc:'Revisa importe, comisión, red y destinatario.'}]},
    mistakes:{title:'Errores frecuentes',desc:'Estos patrones causan pérdidas evitables.',cards:[{title:'Confiar en pocos caracteres',desc:'Direcciones parecidas pueden quedar en el historial.'},{title:'Elegir una red de nombre similar',desc:'Nombre similar no significa compatibilidad.'},{title:'Creer que un DM de soporte es oficial',desc:'Los enlaces por DM primero son sospechosos.'},{title:'Confundir conexión y aprobación',desc:'Conectar wallet no es aprobar gasto de tokens.'},{title:'No hacer prueba pequeña',desc:'La prueba detecta errores de dirección o red.'}]},
    routine:{title:'Rutina de seguridad',desc:'Una rutina repetible es más segura que la memoria bajo presión.',cards:[{title:'Abre enlaces oficiales directamente',desc:'Usa marcadores o páginas oficiales verificadas.'},{id:'safety-domain-check',title:'Lee el dominio completo',desc:'Revisa ortografía, subdominios y finales raros.'},{id:'safety-wallet-connect',title:'Revisa solicitudes de wallet',desc:'Pausa antes de conectar, firmar o aprobar.'},{title:'Prueba antes de transferir mucho',desc:'Usa poco si la dirección o red son nuevas.'},{title:'Limpia aprobaciones sin uso',desc:'Revoca permisos de token que ya no necesitas.'}]},
    search:{seed:'Seguridad de seed phrase',privateKey:'Seguridad de clave privada',walletConnect:'Revisar wallet connect',approval:'Revisar aprobación de token',address:'Revisar dirección',domain:'Revisar dominio',test:'Transferencia de prueba',supportDm:'Advertencia de soporte por DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Cuidado con direcciones similares en el historial antes de copiar.',phishing:'Enlace phishing',phishingDesc:'Verifica enlaces antes de abrir, conectar o firmar.'}
  };
  COPY.ar = {
    badges:{panel:'فحص احتيال',stop:'توقف أولا',finalCheck:'فحص نهائي',mistakes:'أخطاء',routine:'روتين'},
    scam:{title:'لوحة تدريب لاكتشاف الاحتيال',desc:'قبل فتح رابط أو إدخال معلومات سرية أو إرسال أصول، افحص هذه المشاهد الثلاثة.',cards:[{meta:'01',title:'افحص الطلب',desc:'تأكد من صاحب الطلب وهل يضغط عليك للتصرف بسرعة.'},{meta:'02',title:'افحص النطاق',desc:'راجع عنوان الموقع كاملا وليس اسم المشروع فقط.'},{meta:'03',title:'افحص قبل الإرسال',desc:'راجع الأصل والشبكة والعنوان والكمية.'}]},
    secret:{title:'توقف قبل إدخال الأسرار',desc:'أي شاشة تطلب seed phrase أو private key يجب أن توقفك.',cards:[{id:'safety-seed-phrase',meta:'توقف',title:'طلب seed phrase',desc:'لا تكتب كلمات الاسترداد في موقع أو نموذج أو دعم أو رسالة DM.'},{id:'safety-private-key',meta:'توقف',title:'طلب private key',desc:'المفتاح الخاص يتحكم بالأصول. اعتبر الطلب خطرا.'},{id:'safety-approval',meta:'راجع',title:'موافقة غير معروفة',desc:'اقرأ spender والتوكن والمبلغ قبل الموافقة.'},{meta:'تحذير',title:'رابط دعم عبر DM',desc:'لا تثق بروابط مساعدة من حسابات تراسلك أولا.'}]},
    finalCheck:{title:'الفحص النهائي قبل التحويل',desc:'استخدم هذه القائمة قبل الإرسال، خاصة مع شبكة أو عنوان جديد.',cards:[{meta:'01',title:'فحص الأصل',desc:'أكد الاسم والرمز.'},{meta:'02',title:'فحص الشبكة',desc:'يجب أن يدعم الطرفان الشبكة نفسها.'},{id:'safety-address-check',meta:'03',title:'فحص العنوان',desc:'قارن العنوان كاملا لا أوله وآخره فقط.'},{id:'safety-test-transfer',meta:'04',title:'اختبار صغير',desc:'أرسل مبلغا صغيرا قبل المبلغ الكبير.'},{meta:'05',title:'تأكيد نهائي',desc:'راجع المبلغ والرسوم والشبكة والمستلم.'}]},
    mistakes:{title:'أخطاء شائعة',desc:'هذه الأنماط تسبب خسائر يمكن تجنبها.',cards:[{title:'الثقة ببضعة أحرف من العنوان',desc:'قد تظهر عناوين مشابهة في سجل المحفظة.'},{title:'اختيار شبكة باسم مشابه',desc:'تشابه الاسم لا يعني التوافق.'},{title:'اعتبار DM الدعم رسميا',desc:'روابط DM التي تأتي أولا تحتاج حذرا.'},{title:'خلط الاتصال بالموافقة',desc:'اتصال المحفظة يختلف عن إذن إنفاق التوكن.'},{title:'تخطي الاختبار الصغير',desc:'الاختبار يكشف أخطاء العنوان أو الشبكة.'}]},
    routine:{title:'روتين الأمان',desc:'الروتين المتكرر أكثر أمانا من الذاكرة تحت الضغط.',cards:[{title:'افتح الروابط الرسمية مباشرة',desc:'استخدم مفضلات أو صفحات رسمية مؤكدة.'},{id:'safety-domain-check',title:'اقرأ النطاق كاملا',desc:'راجع الإملاء والنطاقات الفرعية والنهايات الغريبة.'},{id:'safety-wallet-connect',title:'راجع طلبات المحفظة',desc:'توقف قبل الاتصال أو التوقيع أو الموافقة.'},{title:'اختبر قبل تحويل كبير',desc:'استخدم مبلغا صغيرا مع عنوان أو شبكة جديدة.'},{title:'نظف الموافقات غير المستخدمة',desc:'ألغ أذونات التوكن التي لم تعد تحتاجها.'}]},
    search:{seed:'أمان seed phrase',privateKey:'أمان private key',walletConnect:'فحص اتصال المحفظة',approval:'فحص موافقة التوكن',address:'فحص العنوان',domain:'فحص النطاق',test:'تحويل اختباري',supportDm:'تحذير دعم DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'انتبه للعناوين المشابهة في سجل المحفظة قبل النسخ.',phishing:'رابط تصيد',phishingDesc:'تحقق من الرابط قبل الفتح أو الاتصال أو التوقيع.'}
  };
  COPY.vi = {
    badges:{panel:'Kiểm scam',stop:'Dừng trước',finalCheck:'Kiểm cuối',mistakes:'Lỗi',routine:'Thói quen'},
    scam:{title:'Bảng mô phỏng nhận diện scam',desc:'Trước khi bấm link, nhập bí mật hoặc gửi tài sản, hãy kiểm tra ba tình huống này.',cards:[{meta:'01',title:'Kiểm yêu cầu',desc:'Xác nhận ai yêu cầu và có đang ép bạn làm nhanh không.'},{meta:'02',title:'Kiểm domain',desc:'Xem toàn bộ địa chỉ web, không chỉ tên dự án.'},{meta:'03',title:'Kiểm trước khi gửi',desc:'Xem lại tài sản, mạng, địa chỉ và số lượng.'}]},
    secret:{title:'Dừng trước khi nhập bí mật',desc:'Màn hình yêu cầu seed phrase hoặc private key thì nên dừng lại.',cards:[{id:'safety-seed-phrase',meta:'Dừng',title:'Yêu cầu seed phrase',desc:'Không nhập recovery words vào web, form, support chat hoặc DM.'},{id:'safety-private-key',meta:'Dừng',title:'Yêu cầu private key',desc:'Private key kiểm soát tài sản. Hãy xem yêu cầu này là rủi ro.'},{id:'safety-approval',meta:'Kiểm',title:'Approval lạ',desc:'Đọc spender, token và số lượng trước khi approve.'},{meta:'Cảnh báo',title:'Link support DM',desc:'Không tin link trợ giúp từ tài khoản nhắn trước.'}]},
    finalCheck:{title:'Kiểm cuối trước khi chuyển',desc:'Dùng checklist ngắn này trước khi gửi, nhất là mạng hoặc địa chỉ mới.',cards:[{meta:'01',title:'Kiểm tài sản',desc:'Xác nhận tên và ticker.'},{meta:'02',title:'Kiểm mạng',desc:'Bên gửi và nhận phải hỗ trợ cùng mạng.'},{id:'safety-address-check',meta:'03',title:'Kiểm địa chỉ',desc:'So sánh cả địa chỉ, không chỉ đầu và cuối.'},{id:'safety-test-transfer',meta:'04',title:'Test nhỏ',desc:'Gửi ít trước khi chuyển số lớn.'},{meta:'05',title:'Xác nhận cuối',desc:'Kiểm lại số lượng, phí, mạng và người nhận.'}]},
    mistakes:{title:'Lỗi thường gặp',desc:'Các mẫu này thường gây mất mát có thể tránh.',cards:[{title:'Tin vài ký tự địa chỉ',desc:'Địa chỉ giống nhau có thể xuất hiện trong lịch sử ví.'},{title:'Chọn nhầm mạng tên giống',desc:'Tên giống không có nghĩa là tương thích.'},{title:'Tin DM support là chính thức',desc:'Link DM gửi trước cần được cảnh giác.'},{title:'Nhầm connect và approval',desc:'Kết nối ví khác với cấp quyền dùng token.'},{title:'Bỏ qua test nhỏ',desc:'Test nhỏ giúp phát hiện lỗi địa chỉ hoặc mạng.'}]},
    routine:{title:'Thói quen an toàn',desc:'Quy trình lặp lại an toàn hơn trí nhớ lúc căng thẳng.',cards:[{title:'Mở link chính thức trực tiếp',desc:'Dùng bookmark hoặc trang chính thức đã kiểm.'},{id:'safety-domain-check',title:'Đọc toàn bộ domain',desc:'Kiểm chính tả, subdomain và phần đuôi lạ.'},{id:'safety-wallet-connect',title:'Kiểm yêu cầu ví',desc:'Dừng trước khi connect, ký hoặc approve.'},{title:'Test trước chuyển lớn',desc:'Dùng số nhỏ khi địa chỉ hoặc mạng mới.'},{title:'Dọn approval không dùng',desc:'Thu hồi quyền token không còn cần.'}]},
    search:{seed:'An toàn seed phrase',privateKey:'An toàn private key',walletConnect:'Kiểm wallet connect',approval:'Kiểm token approval',address:'Kiểm địa chỉ',domain:'Kiểm domain',test:'Chuyển thử',supportDm:'Cảnh báo support DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Cẩn thận địa chỉ giống nhau trong lịch sử ví trước khi copy.',phishing:'Link phishing',phishingDesc:'Xác minh link trước khi mở, kết nối hoặc ký.'}
  };
  COPY.ha = {
    badges:{panel:'Duba zamba',stop:'Dakatar',finalCheck:'Duba karshe',mistakes:'Kurakurai',routine:'Tsari'},
    scam:{title:'Allon gwajin gano zamba',desc:'Kafin bude link, shigar da sirri, ko tura kadara, duba wadannan abubuwa uku.',cards:[{meta:'01',title:'Duba bukata',desc:'Tabbatar da wanda ya nema da ko ana matsa maka ka yi sauri.'},{meta:'02',title:'Duba domain',desc:'Duba cikakken adireshin yanar gizo, ba sunan aikin kawai ba.'},{meta:'03',title:'Duba kafin tura',desc:'Sake duba kadara, network, address, da adadi.'}]},
    secret:{title:'Dakatar kafin shigar da sirri',desc:'Duk shafin da ke neman seed phrase ko private key ya kamata ya sa ka tsaya.',cards:[{id:'safety-seed-phrase',meta:'Tsaya',title:'Neman seed phrase',desc:'Kada ka rubuta recovery words a website, form, support chat, ko DM.'},{id:'safety-private-key',meta:'Tsaya',title:'Neman private key',desc:'Private key na iko da kadarori. Dauki bukatar a matsayin hadari.'},{id:'safety-approval',meta:'Duba',title:'Approval da ba ka sani ba',desc:'Karanta spender, token, da adadi kafin approval.'},{meta:'Gargadi',title:'Link na support DM',desc:'Kada ka yarda da link daga account da ya fara turo maka sako.'}]},
    finalCheck:{title:'Duba karshe kafin turawa',desc:'Yi amfani da wannan checklist kafin tura, musamman sabon network ko address.',cards:[{meta:'01',title:'Duba kadara',desc:'Tabbatar da suna da ticker.'},{meta:'02',title:'Duba network',desc:'Mai tura da mai karba su goyi bayan network daya.'},{id:'safety-address-check',meta:'03',title:'Duba address',desc:'Kwatanta cikakken address, ba farko da karshe kadai ba.'},{id:'safety-test-transfer',meta:'04',title:'Gwajin karami',desc:'Tura kadan kafin babban adadi.'},{meta:'05',title:'Tabbatar karshe',desc:'Sake duba adadi, fee, network, da mai karba.'}]},
    mistakes:{title:'Kurakurai da aka saba',desc:'Wadannan halaye kan jawo asarar da za a iya kaucewa.',cards:[{title:'Yarda da yan haruffan address',desc:'Address mai kama zai iya bayyana a tarihin wallet.'},{title:'Zabar network mai suna kama',desc:'Suna kama ba yana nufin ya dace ba.'},{title:'Daukar support DM a matsayin hukuma',desc:'Link daga DM da ya fara zuwa yana bukatar taka tsantsan.'},{title:'Rikitar connect da approval',desc:'Hada wallet daban yake da ba token izini.'},{title:'Tsallake gwajin karami',desc:'Gwaji kan kama kuskuren address ko network.'}]},
    routine:{title:'Tsarin tsaro',desc:'Tsari mai maimaituwa ya fi dogaro da tunani lokacin gaggawa.',cards:[{title:'Bude links na hukuma kai tsaye',desc:'Yi amfani da bookmark ko shafi na hukuma da aka tabbatar.'},{id:'safety-domain-check',title:'Karanta cikakken domain',desc:'Duba spelling, subdomain, da karshen da bai saba ba.'},{id:'safety-wallet-connect',title:'Duba bukatun wallet',desc:'Dakatar kafin connect, sign, ko approve.'},{title:'Gwada kafin babban tura',desc:'Yi amfani da adadi kadan idan address ko network sabo ne.'},{title:'Share approvals da ba a amfani',desc:'Soke izinin token da ba ka bukata.'}]},
    search:{seed:'Tsaron seed phrase',privateKey:'Tsaron private key',walletConnect:'Duba wallet connect',approval:'Duba token approval',address:'Duba address',domain:'Duba domain',test:'Test transfer',supportDm:'Gargadin support DM',addressPoisoning:'Address poisoning',addressPoisoningDesc:'Yi hankali da address masu kama a tarihin wallet kafin copy.',phishing:'Phishing link',phishingDesc:'Tabbatar da link kafin bude, connect, ko sign.'}
  };

  LANGS.forEach(function(lang){
    if(!COPY[lang]) COPY[lang] = COPY.en;
  });

  ensureSafetyStyles();
  wrapSafetyRender();
  wrapSearchHooks();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', refreshSafetyPanel, { once:true });
  }else{
    setTimeout(refreshSafetyPanel, 0);
  }
})();
