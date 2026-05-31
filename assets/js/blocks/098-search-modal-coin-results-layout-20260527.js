(function(){
  if(typeof window === 'undefined' || window.__searchModalCoinResultsLayout20260527) return;
  window.__searchModalCoinResultsLayout20260527 = true;

  var COIN_RESULTS_LIMIT = 8;
  var allCoinSearchItemsCache = null;
  var allCoinSearchItemsCacheLocale = '';
  var prioritizedCoinCache = {};

  var COIN_SECTION_LABELS = {
    en:'Coin Results',
    ko:'\ucf54\uc778 \uacb0\uacfc',
    th:'ผลลัพธ์เหรียญ',
    id:'Hasil koin',
    pt:'Resultados de moedas',
    br:'Resultados de moedas',
    tr:'Coin sonuclari',
    es:'Resultados de monedas',
    ar:'نتائج العملات',
    vi:'Ket qua coin',
    ha:'Sakamakon coin'
  };

  var GENERIC_COIN_DESC = {
    en:'A coin related to this search. Check official project information before acting.',
    ko:'\uac80\uc0c9\uc5b4\uc640 \uad00\ub828\ub41c \ucf54\uc778\uc785\ub2c8\ub2e4. \ud589\ub3d9\ud558\uae30 \uc804\uc5d0 \uacf5\uc2dd \uc815\ubcf4\uc640 \ud504\ub85c\uc81d\ud2b8 \uc790\ub8cc\ub97c \ud568\uaed8 \ud655\uc778\ud558\uc138\uc694.'
  };

  var KO_REP_DESC = {
    bitcoin:'\ube44\ud2b8\ucf54\uc778\uc740 \ucd5c\ucd08\uc758 \uc8fc\uc694 \uc554\ud638\ud654\ud3d0\uc774\uba70, \ud0c8\uc911\uc559\ud654 \ub514\uc9c0\ud138 \uc790\uc0b0\uc744 \uc774\ud574\ud558\ub294 \ub300\ud45c\uc801\uc778 \uc608\uc2dc\uc785\ub2c8\ub2e4.',
    ethereum:'\uc774\ub354\ub9ac\uc6c0\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8, \ud1a0\ud070, NFT, DeFi \uc571\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uac00\ub2a5\ud55c \ube14\ub85d\uccb4\uc778\uc785\ub2c8\ub2e4.',
    solana:'\uc194\ub77c\ub098\ub294 \ub0ae\uc740 \uc218\uc218\ub8cc\uc640 \ube60\ub978 \ucc98\ub9ac\ub97c \ubaa9\ud45c\ub85c \uc124\uacc4\ub41c \uace0\uc18d \ube14\ub85d\uccb4\uc778\uc785\ub2c8\ub2e4.',
    xrp:'XRP\ub294 \ube60\ub974\uace0 \ub0ae\uc740 \ube44\uc6a9\uc758 \uac00\uce58 \uc804\uc1a1\uc744 \ubaa9\ud45c\ub85c \ud558\ub294 \ub514\uc9c0\ud138 \uc790\uc0b0\uc785\ub2c8\ub2e4.',
    bnb:'BNB\ub294 BNB Chain \uc0dd\ud0dc\uacc4\uc640 \uac70\ub798\uc18c \uad00\ub828 \uc720\ud2f8\ub9ac\ud2f0\uc5d0 \uc5f0\uacb0\ub41c \ud1a0\ud070\uc785\ub2c8\ub2e4.',
    usdt:'USDT\ub294 \ubbf8\uad6d \ub2ec\ub7ec \uac00\uaca9\uc744 \ucd94\uc801\ud558\ub3c4\ub85d \uc124\uacc4\ub41c \ub300\ud45c\uc801\uc778 \uc2a4\ud14c\uc774\ube14\ucf54\uc778\uc785\ub2c8\ub2e4.',
    aave:'Aave\ub294 \uc0ac\uc6a9\uc790\uac00 \uc554\ud638\ud654\ud3d0\ub97c \uc608\uce58\ud558\uac70\ub098 \ube4c\ub9b4 \uc218 \uc788\ub294 DeFi \ub300\ucd9c \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4.',
    nft:'NFT\ub294 \uac01 \ud1a0\ud070\uc774 \uace0\uc720\ud55c \uac12\uc744 \uac16\ub294 \ub514\uc9c0\ud138 \uc790\uc0b0 \ud615\uc2dd\uc73c\ub85c, \uc218\uc9d1\ud488, \uba64\ubc84\uc2ed, \ub514\uc9c0\ud138 \uc18c\uc720\uad8c \ub4f1\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.'
  };

  var COIN_ALIASES = {
    bitcoin:['btc','\ube44\ud2b8\ucf54\uc778'],
    ethereum:['eth','\uc774\ub354\ub9ac\uc6c0'],
    solana:['sol','\uc194\ub77c\ub098'],
    xrp:['ripple','\ub9ac\ud50c'],
    bnb:['\ube44\uc564\ube44'],
    usdt:['tether','\ud14c\ub354'],
    usdc:['usd coin','\uc720\uc5d0\uc2a4\ub514\ucf54\uc778'],
    dai:['stablecoin','\uc2a4\ud14c\uc774\ube14\ucf54\uc778']
  };

  function langKey(){
    var lang = 'en';
    try{
      lang = (typeof currentLang === 'string' && currentLang) || window.currentLang || localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en';
    }catch(error){}
    lang = String(lang || 'en').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return COIN_SECTION_LABELS[lang] ? lang : 'en';
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
    try{
      text = /[\uac00-\ud7a3\u3130-\u318f]/.test(text)
        ? text.normalize('NFC')
        : text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    }catch(error){}
    return text.replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }

  function safeArray(value){
    return Array.isArray(value) ? value : [];
  }

  function titleCaseKey(key){
    return String(key || '')
      .split('-')
      .filter(Boolean)
      .map(function(part){
        var upper = part.toUpperCase();
        if(['USDT','USDC','DAI','XRP','BNB','NFT'].indexOf(upper) !== -1) return upper;
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(' ');
  }

  function coinStore(){
    return window.coinEducation || (window.__coinSearchStore && window.__coinSearchStore.coinEducation) || {};
  }

  function repCoinKeys(){
    return safeArray(window.repCoins || (window.__coinSearchStore && window.__coinSearchStore.repCoins));
  }

  function otherCoinMap(){
    return window.otherCoins || (window.__coinSearchStore && window.__coinSearchStore.otherCoins) || {};
  }

  function localizedCoin(key){
    var store = coinStore();
    var lang = langKey();
    return (store[lang] && store[lang][key]) || (store.en && store.en[key]) || null;
  }

  function normalizedSymbol(key, item, meta){
    var coin = item && item.coin ? item.coin : item;
    var name = String((coin && coin.name) || (item && item.name) || key || '').toLowerCase();
    var symbol = String(
      (coin && (coin.displaySymbol || coin.ticker || coin.symbol)) ||
      (item && (item.displaySymbol || item.ticker || item.symbol)) ||
      (meta && (meta.displaySymbol || meta.ticker || meta.symbol)) ||
      ''
    ).toUpperCase().trim();
    if(key === 'usdt' || name.indexOf('tether') !== -1 || symbol === 'USDT') return 'USDT';
    if(symbol === 'USD' && (key === 'usdt' || name.indexOf('tether') !== -1)) return 'USDT';
    return symbol || String(key || '').toUpperCase();
  }

  function getLocalizedCoinText(coin, field, locale){
    var lang = locale || langKey();
    var candidates = [];
    if(coin && typeof coin === 'object'){
      if(coin.localized && coin.localized[lang]) candidates.push(coin.localized[lang][field]);
      if(coin.translations && coin.translations[lang]) candidates.push(coin.translations[lang][field]);
      if(coin.i18n && coin.i18n[lang]) candidates.push(coin.i18n[lang][field]);
      if(coin[lang]) candidates.push(coin[lang][field]);
      if(coin[field] && typeof coin[field] === 'object') candidates.push(coin[field][lang]);
      if(coin.localized && coin.localized.en) candidates.push(coin.localized.en[field]);
      if(coin.translations && coin.translations.en) candidates.push(coin.translations.en[field]);
      if(coin.i18n && coin.i18n.en) candidates.push(coin.i18n.en[field]);
      if(coin.en) candidates.push(coin.en[field]);
      candidates.push(typeof coin[field] === 'string' ? coin[field] : '');
    }
    for(var i = 0; i < candidates.length; i++){
      if(typeof candidates[i] === 'string' && candidates[i].trim()) return candidates[i].trim();
    }
    return '';
  }

  function coinDescription(key, coin){
    var lang = langKey();
    if(lang === 'ko' && KO_REP_DESC[key]) return KO_REP_DESC[key];
    var desc = getLocalizedCoinText(coin, 'overview', lang)
      || getLocalizedCoinText(coin, 'description', lang)
      || getLocalizedCoinText(coin, 'desc', lang)
      || getLocalizedCoinText(coin, 'beginnerNote', lang);
    if(desc) return String(desc).replace(/\s+/g,' ').trim();
    return GENERIC_COIN_DESC[lang] || GENERIC_COIN_DESC.en;
  }

  function coinSearchText(key, item){
    return [
      key,
      item.name,
      item.symbol,
      item.category,
      item.desc,
      (COIN_ALIASES[key] || []).join(' '),
      item.searchText
    ].join(' ');
  }

  function makeCoinItem(key, meta, representative){
    var coin = localizedCoin(key);
    var symbol = normalizedSymbol(key, coin || {}, meta || {});
    var name = (coin && coin.name) || titleCaseKey(key);
    var item = {
      type:representative ? 'coin-representative' : 'coin-light',
      coinKey:key,
      name:name,
      symbol:symbol,
      ticker:symbol,
      displaySymbol:symbol,
      category:(coin && coin.category) || 'coin',
      coin:coin || {name:name, symbol:symbol},
      labels:(coinStore()[langKey()] && coinStore()[langKey()]._labels) || (coinStore().en && coinStore().en._labels) || {},
      desc:coinDescription(key, coin),
      searchText:''
    };
    item.searchText = coinSearchText(key, item);
    return item;
  }

  function dedupeCoins(items){
    var seen = {};
    return safeArray(items).filter(function(item){
      if(!item) return false;
      var key = norm([item.coinKey, item.symbol, item.name].join(' '));
      if(!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function getAllCoinSearchItems(){
    var lang = langKey();
    if(allCoinSearchItemsCache && allCoinSearchItemsCacheLocale === lang) return allCoinSearchItemsCache;
    var keys = {};
    var items = [];
    repCoinKeys().forEach(function(key){
      key = String(key || '').trim();
      if(!key) return;
      keys[key] = true;
      items.push(makeCoinItem(key, null, true));
    });
    Object.keys(otherCoinMap()).forEach(function(key){
      if(!key) return;
      keys[key] = true;
      items.push(makeCoinItem(key, otherCoinMap()[key], false));
    });
    var store = coinStore();
    ['en', langKey()].forEach(function(locale){
      Object.keys(store[locale] || {}).forEach(function(key){
        if(key.charAt(0) === '_' || keys[key]) return;
        keys[key] = true;
        items.push(makeCoinItem(key, null, repCoinKeys().indexOf(key) !== -1));
      });
    });
    allCoinSearchItemsCache = dedupeCoins(items);
    allCoinSearchItemsCacheLocale = lang;
    return allCoinSearchItemsCache;
  }

  function coinScore(item, query){
    var q = norm(query);
    if(!q) return item.type === 'coin-representative' ? 90 : 20;
    var name = norm(item.name);
    var symbol = norm(item.symbol);
    var key = norm(item.coinKey);
    var hay = norm(coinSearchText(item.coinKey, item));
    var score = 0;
    if(symbol === q) score += 360;
    if(name === q || key === q) score += 340;
    if(symbol.indexOf(q) === 0) score += 250;
    if(name.indexOf(q) === 0 || key.indexOf(q) === 0) score += 230;
    if(name.indexOf(q) !== -1 || key.indexOf(q) !== -1) score += 160;
    if(hay.indexOf(q) !== -1) score += 100;
    if(q.length === 1 && (symbol.indexOf(q) === 0 || name.indexOf(q) === 0 || hay.indexOf(q) !== -1)) score += 70;
    if(item.type === 'coin-representative') score += 35;
    return score;
  }

  function prioritizedCoins(query){
    var q = String(query || '').trim();
    var cacheKey = langKey() + '::' + norm(q);
    if(prioritizedCoinCache[cacheKey]) return prioritizedCoinCache[cacheKey];
    prioritizedCoinCache[cacheKey] = getAllCoinSearchItems()
      .map(function(item){ return {item:item, score:coinScore(item, q)}; })
      .filter(function(entry){ return q ? entry.score > 0 : entry.item.type === 'coin-representative'; })
      .sort(function(a, b){ return b.score - a.score; })
      .map(function(entry){ return entry.item; })
      .slice(0, COIN_RESULTS_LIMIT);
    return prioritizedCoinCache[cacheKey];
  }

  function coinSectionLabel(){
    return COIN_SECTION_LABELS[langKey()] || COIN_SECTION_LABELS.en;
  }

  function coinRow(item){
    var title = item.name || item.symbol || 'Coin';
    var symbol = normalizedSymbol(item.coinKey, item, item);
    var desc = coinDescription(item.coinKey, item.coin || item);
    return '<button type="button" class="search-result-item search-result-button coin-result-card search-enhanced-coin-row" data-enhanced-coin-key="' + esc(item.coinKey || '') + '" data-enhanced-coin-symbol="' + esc(symbol) + '">'
      + '<span class="search-result-badge coin coin-symbol-badge">' + esc(symbol) + '</span>'
      + '<span class="search-result-body coin-result-body">'
      + '<strong class="search-result-title coin-name">' + esc(title) + '</strong>'
      + '<span class="search-result-meta coin-ticker">' + esc(symbol) + '</span>'
      + '<span class="search-result-desc coin-description">' + esc(desc) + '</span>'
      + '</span></button>';
  }

  function findCoinForCard(card, cachedItems){
    if(!card) return null;
    var symbolNode = card.querySelector('.coin-ticker,.coin-symbol-badge,.search-result-badge.coin,.search-result-meta');
    var nameNode = card.querySelector('.coin-name,.search-result-title');
    var symbol = norm(symbolNode && symbolNode.textContent);
    var name = norm(nameNode && nameNode.textContent);
    return (cachedItems || getAllCoinSearchItems()).filter(function(item){
      return norm(item.symbol) === symbol || norm(item.name) === name || norm(item.coinKey) === name;
    })[0] || null;
  }

  function patchRenderedCoinDescriptions(root){
    if(!root) return;
    var seen = [];
    var cachedItems = getAllCoinSearchItems();
    Array.prototype.forEach.call(root.querySelectorAll('.coin-result-card,.search-result-badge.coin'), function(node){
      var card = node.classList && node.classList.contains('coin-result-card') ? node : node.closest && node.closest('.search-result-item');
      if(!card || seen.indexOf(card) !== -1) return;
      seen.push(card);
      var item = findCoinForCard(card, cachedItems);
      if(!item) return;
      var symbol = normalizedSymbol(item.coinKey, item, item);
      var badge = card.querySelector('.coin-symbol-badge,.search-result-badge.coin');
      var ticker = card.querySelector('.coin-ticker,.search-result-meta');
      var desc = card.querySelector('.coin-description,.search-result-desc');
      if(badge) badge.textContent = symbol;
      if(ticker) ticker.textContent = symbol;
      if(desc) desc.textContent = coinDescription(item.coinKey, item.coin || item);
      card.classList.add('coin-result-card');
    });
  }

  function collectRenderedCoinKeys(root){
    var seen = {};
    Array.prototype.forEach.call(root.querySelectorAll('.coin-result-card,.search-result-badge.coin'), function(node){
      var card = node.classList && node.classList.contains('coin-result-card') ? node : node.closest && node.closest('.search-result-item');
      var text = card ? card.textContent : node.textContent;
      var key = norm(text);
      if(key) seen[key] = true;
      var symbolNode = card && (card.querySelector('.coin-symbol-badge,.search-result-badge.coin,.coin-ticker,.search-result-meta'));
      var symbol = norm(symbolNode && symbolNode.textContent);
      if(symbol) seen[symbol] = true;
    });
    return seen;
  }

  function findLastCoinRow(root){
    var rows = root.querySelectorAll('.coin-result-card,.search-result-badge.coin');
    var last = null;
    Array.prototype.forEach.call(rows, function(node){
      var row = node.classList && node.classList.contains('coin-result-card') ? node : node.closest && node.closest('.search-result-item');
      if(row) last = row;
    });
    return last;
  }

  function findSiteDivider(root){
    var dividers = root.querySelectorAll('.search-section-divider');
    for(var i = 0; i < dividers.length; i++){
      var text = norm(dividers[i].textContent);
      if(text.indexOf('site') !== -1 || text.indexOf('사이트') !== -1) return dividers[i];
    }
    return null;
  }

  function bindEnhancedCoinRows(root){
    Array.prototype.forEach.call(root.querySelectorAll('.search-enhanced-coin-row'), function(row){
      if(row.__enhancedCoinBound) return;
      row.__enhancedCoinBound = true;
      row.addEventListener('click', function(event){
        event.preventDefault();
        var input = document.getElementById('searchInput');
        var symbol = row.getAttribute('data-enhanced-coin-symbol') || '';
        if(input){
          input.value = symbol;
          if(typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(symbol);
          input.focus();
        }
      });
    });
  }

  function enhanceCoinResults(query){
    var root = document.getElementById('searchResults');
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-enhanced-coin-row,.search-enhanced-coin-divider'), function(node){
      if(node.parentNode) node.parentNode.removeChild(node);
    });
    var q = String(query || '').trim();
    patchRenderedCoinDescriptions(root);
    if(!q) return;
    var seen = collectRenderedCoinKeys(root);
    var missing = prioritizedCoins(q).filter(function(item){
      var name = norm(item.name);
      var symbol = norm(item.symbol);
      return !(seen[name] || seen[symbol]);
    }).slice(0, COIN_RESULTS_LIMIT);
    if(!missing.length) return;
    var html = missing.map(coinRow).join('');
    var anchor = findLastCoinRow(root);
    if(anchor){
      anchor.insertAdjacentHTML('afterend', html);
    }else{
      var divider = '<div class="search-section-divider search-enhanced-coin-divider">' + esc(coinSectionLabel()) + '</div>';
      var siteDivider = findSiteDivider(root);
      if(siteDivider) siteDivider.insertAdjacentHTML('beforebegin', divider + html);
      else root.insertAdjacentHTML('beforeend', divider + html);
    }
    bindEnhancedCoinRows(root);
    patchRenderedCoinDescriptions(root);
  }

  function installStyles(){
    if(document.getElementById('searchModalCoinResultsLayout20260527Styles')) return;
    var style = document.createElement('style');
    style.id = 'searchModalCoinResultsLayout20260527Styles';
    style.textContent = [
      '#searchOverlay,#searchOverlay.search-overlay{overflow:hidden!important;}',
      '#searchOverlay .search-box,#searchOverlay .search-panel,#searchOverlay .search-dialog{display:flex!important;flex-direction:column!important;max-height:min(88vh,760px)!important;overflow:hidden!important;}',
      '#searchOverlay .search-input-wrap{display:flex!important;align-items:center!important;gap:10px!important;flex:0 0 auto!important;position:relative!important;z-index:2!important;}',
      '#searchOverlay .search-input-wrap svg{position:static!important;flex:0 0 18px!important;width:18px!important;height:18px!important;pointer-events:none!important;}',
      '#searchOverlay .search-input{flex:1 1 auto!important;min-width:0!important;width:100%!important;height:auto!important;padding:0!important;margin:0!important;line-height:1.45!important;position:relative!important;z-index:1!important;background:transparent!important;}',
      '#searchOverlay .search-input-wrap input:not(#searchInput){display:none!important;}',
      '#searchOverlay .search-input-wrap .search-floating-label,#searchOverlay .search-input-wrap .search-placeholder-copy,#searchOverlay .search-input-wrap [data-search-placeholder-copy]{display:none!important;}',
      '#searchOverlay #searchResults:empty{display:none!important;}',
      '#searchOverlay #searchResults:not(:empty){display:block!important;}',
      '#searchOverlay #searchResults{flex:1 1 auto!important;min-height:0!important;max-height:min(68vh,640px)!important;overflow-y:auto!important;overflow-x:hidden!important;padding:12px 14px 34px!important;scroll-padding-bottom:34px!important;box-sizing:border-box!important;}',
      '#searchOverlay #searchResults .search-section-divider{margin:16px 0 10px!important;padding-bottom:8px!important;}',
      '#searchOverlay #searchResults .search-result-item,#searchOverlay #searchResults .coin-result-card,#searchOverlay #searchResults .site-result-card,#searchOverlay #searchResults .representative-coin-card{position:relative!important;margin:0 0 12px!important;min-height:auto!important;box-sizing:border-box!important;}',
      '#searchOverlay #searchResults > *:last-child{margin-bottom:34px!important;}',
      '#searchOverlay #searchResults .coin-result-card,#searchOverlay #searchResults .site-result-card{display:flex!important;align-items:flex-start!important;gap:12px!important;}',
      '#searchOverlay #searchResults .coin-result-body,#searchOverlay #searchResults .site-result-body,#searchOverlay #searchResults .search-result-body{display:grid!important;gap:6px!important;min-width:0!important;}',
      '#searchOverlay #searchResults .coin-name,#searchOverlay #searchResults .coin-ticker,#searchOverlay #searchResults .coin-description,#searchOverlay #searchResults .site-result-title,#searchOverlay #searchResults .site-result-description,#searchOverlay #searchResults .search-result-title,#searchOverlay #searchResults .search-result-meta,#searchOverlay #searchResults .search-result-desc{white-space:normal!important;word-break:keep-all!important;overflow-wrap:break-word!important;}',
      '#searchOverlay #searchResults .coin-description,#searchOverlay #searchResults .site-result-description,#searchOverlay #searchResults .search-result-desc,#searchOverlay #searchResults .representative-coin-card p{line-height:1.55!important;}',
      '#searchOverlay #searchResults .coin-symbol-badge{flex:0 0 auto!important;min-width:38px!important;width:auto!important;max-width:72px!important;height:32px!important;padding:0 9px!important;}',
      '@media (max-width:640px){#searchOverlay .search-box,#searchOverlay .search-panel,#searchOverlay .search-dialog{max-height:min(92vh,760px)!important;}#searchOverlay #searchResults{max-height:min(72vh,620px)!important;padding:10px 10px 36px!important;}#searchOverlay #searchResults .coin-result-card,#searchOverlay #searchResults .site-result-card{gap:10px!important;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function wrapSearchRenderer(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__coinResultsLayoutWrapped20260527) return;
    var wrapped = function(query){
      installStyles();
      var result = original.apply(this, arguments);
      enhanceCoinResults(query);
      setTimeout(function(){ enhanceCoinResults(query); }, 0);
      return result;
    };
    wrapped.__coinResultsLayoutWrapped20260527 = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }

  function installCoinSearchApi(){
    var api = function(){ return getAllCoinSearchItems(); };
    var prioritized = function(query){ return prioritizedCoins(query); };
    window.getCoinSearchItems = api;
    window.getPrioritizedCoinSearchResults = prioritized;
    try{
      getCoinSearchItems = api;
      getPrioritizedCoinSearchResults = prioritized;
    }catch(error){}
  }

  function installDebug(){
    window.debugCoinResultsList = function(query){
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      var root = document.getElementById('searchResults');
      var cards = root ? Array.prototype.map.call(root.querySelectorAll('.coin-result-card'), function(card){
        return {
          text:(card.textContent || '').replace(/\s+/g,' ').trim().slice(0,300),
          width:card.getBoundingClientRect ? card.getBoundingClientRect().width : null,
          height:card.getBoundingClientRect ? card.getBoundingClientRect().height : null
        };
      }) : [];
      var list = document.querySelector('.search-results, .search-result-list, .search-autocomplete-list, #searchResults');
      var modal = document.querySelector('.search-modal, .search-panel, .search-dialog, #searchOverlay .search-box');
      return {
        currentLocale:langKey(),
        query:query || (document.getElementById('searchInput') && document.getElementById('searchInput').value) || '',
        allCoinSearchItems:getAllCoinSearchItems().length,
        coinCardCount:cards.length,
        cards:cards,
        resultListHeight:list && list.getBoundingClientRect ? list.getBoundingClientRect().height : null,
        modalHeight:modal && modal.getBoundingClientRect ? modal.getBoundingClientRect().height : null
      };
    };
    window.debugSearchInputOverlap = function(){
      var inputs = Array.prototype.filter.call(document.querySelectorAll('input'), function(input){
        return /search|coin proofpath|\uac80\uc0c9/i.test([
          input.placeholder,
          input.value,
          input.getAttribute('aria-label'),
          input.className,
          input.id
        ].join(' '));
      });
      return inputs.map(function(input, index){
        var parent = input.parentElement;
        var rect = input.getBoundingClientRect ? input.getBoundingClientRect() : {width:null,height:null};
        var siblings = parent ? Array.prototype.map.call(parent.children, function(el){
          var style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : {};
          return {
            tag:el.tagName,
            className:el.className,
            text:String(el.textContent || '').replace(/\s+/g,' ').trim(),
            position:style.position || '',
            display:style.display || '',
            visibility:style.visibility || ''
          };
        }) : [];
        return {
          index:index,
          outerHTML:input.outerHTML,
          value:input.value,
          placeholder:input.placeholder,
          ariaLabel:input.getAttribute('aria-label'),
          className:input.className,
          rect:{width:rect.width, height:rect.height},
          parentClass:parent && parent.className,
          siblingCount:siblings.length,
          siblings:siblings
        };
      });
    };
  }

  installStyles();
  installCoinSearchApi();
  wrapSearchRenderer('renderSearchAutocompleteFinal');
  wrapSearchRenderer('renderPatchedSearchResults');
  wrapSearchRenderer('openSearch');
  wrapSearchRenderer('setLang');
  installDebug();
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      installStyles();
      var input = document.getElementById('searchInput');
      enhanceCoinResults(input ? input.value : '');
    }, {once:true});
  }else{
    setTimeout(function(){
      installStyles();
      var input = document.getElementById('searchInput');
      enhanceCoinResults(input ? input.value : '');
    }, 0);
  }
})();
