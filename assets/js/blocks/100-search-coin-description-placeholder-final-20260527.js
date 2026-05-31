(function(){
  if(typeof window === 'undefined' || window.__searchCoinDescriptionPlaceholderFinal20260527) return;
  window.__searchCoinDescriptionPlaceholderFinal20260527 = true;

  var SEARCH_LABELS = {
    en:{placeholder:'Type to search', shortPlaceholder:'Type to search'},
    ko:{placeholder:'검색어를 입력하세요', shortPlaceholder:'검색어를 입력하세요'},
    th:{placeholder:'ค้นหา Coin ProofPath', shortPlaceholder:'พิมพ์เพื่อค้นหา'},
    id:{placeholder:'Cari Coin ProofPath', shortPlaceholder:'Ketik untuk mencari'},
    pt:{placeholder:'Pesquisar Coin ProofPath', shortPlaceholder:'Digite para pesquisar'},
    br:{placeholder:'Pesquisar no Coin ProofPath', shortPlaceholder:'Digite para pesquisar'},
    tr:{placeholder:'Coin ProofPath’ta ara', shortPlaceholder:'Aramak için yazın'},
    es:{placeholder:'Buscar en Coin ProofPath', shortPlaceholder:'Escribe para buscar'},
    ar:{placeholder:'ابحث في Coin ProofPath', shortPlaceholder:'اكتب للبحث'},
    vi:{placeholder:'Tìm kiếm Coin ProofPath', shortPlaceholder:'Nhập để tìm kiếm'},
    ha:{placeholder:'Bincika Coin ProofPath', shortPlaceholder:'Rubuta don bincike'}
  };
  var FALLBACK_DESC = {
    en:'This coin is related to your search. Check official information and project materials before taking action.',
    ko:'검색어와 관련된 코인입니다. 행동하기 전에 공식 정보와 프로젝트 자료를 함께 확인하세요.'
  };
  var coinItemsFinalCache = null;
  var coinItemsFinalCacheLocale = '';

  var COIN_DESCRIPTIONS = {
    bitcoin:{name:'Bitcoin',symbol:'BTC',ko:'비트코인은 최초의 주요 암호화폐이며, 탈중앙화 디지털 자산을 이해하는 대표적인 예시입니다.',en:'The first major cryptocurrency and a key example of a decentralized digital asset.'},
    ethereum:{name:'Ethereum',symbol:'ETH',ko:'이더리움은 스마트 컨트랙트, 토큰, NFT, DeFi 앱에 사용되는 프로그래밍 가능한 블록체인입니다.',en:'A programmable blockchain used for smart contracts, tokens, NFTs, and many DeFi apps.'},
    solana:{name:'Solana',symbol:'SOL',ko:'솔라나는 낮은 수수료와 빠른 처리를 목표로 설계된 고속 블록체인입니다.',en:'A high-speed blockchain designed for low fees and fast transactions.'},
    xrp:{name:'XRP',symbol:'XRP',ko:'XRP는 빠르고 낮은 비용의 가치 전송을 목표로 하는 디지털 자산입니다.',en:'A digital asset focused on quick and low-cost value transfer.'},
    bnb:{name:'BNB',symbol:'BNB',ko:'BNB는 BNB Chain 생태계와 거래소 관련 유틸리티에 연결된 토큰입니다.',en:'A token closely tied to the BNB Chain ecosystem and exchange-related utility.'},
    usdt:{name:'Tether',symbol:'USDT',ko:'USDT는 미국 달러 가격을 추적하도록 설계된 대표적인 스테이블코인입니다.',en:'A widely used stablecoin designed to track the US dollar.'},
    aave:{name:'Aave',symbol:'AAVE',ko:'Aave는 사용자가 암호화폐를 예치하거나 빌릴 수 있는 DeFi 대출 프로토콜입니다.',en:'A DeFi lending protocol where users can supply and borrow crypto assets.'},
    nft:{name:'NFTs',symbol:'NFT',ko:'NFT는 각 토큰이 고유한 값을 갖는 디지털 자산 형식으로, 수집품, 멤버십, 디지털 소유권 등에 사용됩니다.',en:'A unique digital asset format used for collectibles, memberships, and digital ownership.'},
    avalanche:{name:'Avalanche',symbol:'AVAX',ko:'Avalanche는 빠른 처리와 다양한 서브넷 구조를 지원하는 스마트 컨트랙트 블록체인입니다.',en:'A smart contract blockchain designed for fast transactions and customizable subnet networks.'},
    polygon:{name:'Polygon',symbol:'MATIC',ko:'Polygon은 이더리움 확장성과 낮은 수수료 사용 경험을 돕는 블록체인 생태계입니다.',en:'A blockchain ecosystem focused on Ethereum scaling and lower-cost transactions.'},
    arbitrum:{name:'Arbitrum',symbol:'ARB',ko:'Arbitrum은 이더리움의 확장성을 높이기 위한 레이어2 네트워크입니다.',en:'A layer 2 network designed to scale Ethereum transactions.'},
    optimism:{name:'Optimism',symbol:'OP',ko:'Optimism은 이더리움 기반 앱을 더 낮은 비용으로 사용할 수 있게 돕는 레이어2 네트워크입니다.',en:'A layer 2 network that helps Ethereum apps run with lower transaction costs.'},
    cardano:{name:'Cardano',symbol:'ADA',ko:'Cardano는 연구 중심 접근과 지분증명 구조를 강조하는 블록체인입니다.',en:'A blockchain known for its research-driven approach and proof-of-stake design.'},
    dogecoin:{name:'Dogecoin',symbol:'DOGE',ko:'Dogecoin은 밈 문화에서 시작해 커뮤니티 중심으로 알려진 암호화폐입니다.',en:'A cryptocurrency that began as a meme and became known for its community-driven culture.'},
    'shiba-inu':{name:'Shiba Inu',symbol:'SHIB',ko:'Shiba Inu는 밈코인으로 시작했지만 자체 생태계 확장을 시도하는 커뮤니티 중심 토큰입니다.',en:'A community-driven token that started as a meme coin and later expanded its ecosystem.'},
    chainlink:{name:'Chainlink',symbol:'LINK',ko:'Chainlink는 블록체인 스마트 컨트랙트가 외부 데이터를 사용할 수 있도록 돕는 오라클 네트워크입니다.',en:'An oracle network that helps smart contracts use external data.'},
    uniswap:{name:'Uniswap',symbol:'UNI',ko:'Uniswap은 사용자가 중개자 없이 토큰을 교환할 수 있는 탈중앙화 거래 프로토콜입니다.',en:'A decentralized exchange protocol for swapping tokens without a central intermediary.'},
    litecoin:{name:'Litecoin',symbol:'LTC',ko:'Litecoin은 비트코인과 유사하지만 더 빠른 전송을 목표로 만들어진 초기 암호화폐 중 하나입니다.',en:'An early cryptocurrency similar to Bitcoin but designed for faster transfers.'},
    toncoin:{name:'Toncoin',symbol:'TON',ko:'Toncoin은 TON 생태계에서 사용되는 디지털 자산으로, 빠른 전송과 앱 생태계를 목표로 합니다.',en:'The native asset of the TON ecosystem, focused on fast transfers and app-based use cases.'},
    sui:{name:'Sui',symbol:'SUI',ko:'Sui는 빠른 처리와 객체 기반 구조를 강조하는 레이어1 블록체인입니다.',en:'A layer 1 blockchain focused on fast execution and an object-based architecture.'},
    aptos:{name:'Aptos',symbol:'APT',ko:'Aptos는 확장성과 빠른 실행을 목표로 하는 레이어1 블록체인입니다.',en:'A layer 1 blockchain designed for scalability and fast execution.'},
    cosmos:{name:'Cosmos',symbol:'ATOM',ko:'Cosmos는 여러 블록체인이 서로 연결될 수 있는 인터체인 생태계를 목표로 합니다.',en:'An interchain ecosystem designed to connect multiple blockchains.'},
    near:{name:'Near',symbol:'NEAR',ko:'Near는 사용성과 확장성을 강조하는 레이어1 블록체인입니다.',en:'A layer 1 blockchain focused on usability and scalability.'},
    bonk:{name:'Bonk',symbol:'BONK',ko:'BONK는 Solana 생태계에서 알려진 커뮤니티 중심 밈코인입니다. 밈코인은 변동성이 크기 때문에 공식 자료, 유통 구조, 커뮤니티 활동을 함께 확인해야 합니다.',en:'BONK is a community-driven meme coin known within the Solana ecosystem. Meme coins can be highly volatile, so users should check official materials, distribution, and community activity.'}
  };

  var SYMBOL_TO_KEY = {
    btc:'bitcoin', eth:'ethereum', sol:'solana', xrp:'xrp', bnb:'bnb', usd:'usdt', usdt:'usdt',
    tether:'usdt', aave:'aave', nft:'nft', nfts:'nft', avax:'avalanche', avalanche:'avalanche',
    matic:'polygon', polygon:'polygon', arb:'arbitrum', arbitrum:'arbitrum', op:'optimism',
    optimism:'optimism', ada:'cardano', cardano:'cardano', doge:'dogecoin', dogecoin:'dogecoin',
    shib:'shiba-inu', 'shiba-inu':'shiba-inu', 'shiba inu':'shiba-inu', link:'chainlink',
    chainlink:'chainlink', uni:'uniswap', uniswap:'uniswap', ltc:'litecoin', litecoin:'litecoin',
    ton:'toncoin', toncoin:'toncoin', sui:'sui', apt:'aptos', aptos:'aptos', atom:'cosmos',
    cosmos:'cosmos', near:'near', bonk:'bonk', 봉크:'bonk'
  };

  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return SEARCH_LABELS[lang] ? lang : 'en';
  }

  function currentLocale(){
    var lang = 'en';
    try{
      lang = (typeof currentLang === 'string' && currentLang) ||
        window.currentLang ||
        window.currentLocale ||
        localStorage.getItem('cryptoAcademyLang') ||
        document.documentElement.lang ||
        'en';
    }catch(error){}
    return langKey(lang);
  }

  function norm(value){
    var text = String(value || '').toLowerCase();
    try{
      text = /[\uac00-\ud7a3\u3130-\u318f]/.test(text)
        ? text.normalize('NFC')
        : text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    }catch(error){}
    return text.replace(/[_\/]+/g,' ').replace(/-/g,' ').replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }

  function hyphenKey(value){
    return norm(value).replace(/\s+/g,'-');
  }

  function isGenericCoinFallback(value){
    var text = String(value || '');
    return /검색어와 관련된 코인입니다|행동하기 전에 공식 정보와 프로젝트 자료|This coin is related to your search|A coin related to this search|official information and project materials|is a related coin for this search|digital asset related to this search/i.test(text);
  }

  function firstText(values){
    for(var i = 0; i < values.length; i++){
      var value = values[i];
      if(typeof value === 'string' && value.trim() && !isGenericCoinFallback(value)){
        return value.replace(/\s+/g,' ').trim();
      }
    }
    return '';
  }

  function canonicalCoinKey(coin){
    var values = [];
    if(coin && typeof coin === 'object'){
      values.push(coin.coinKey, coin.key, coin.id, coin.slug, coin.symbol, coin.ticker, coin.displaySymbol, coin.name);
      if(coin.coin) values.push(coin.coin.coinKey, coin.coin.key, coin.coin.symbol, coin.coin.ticker, coin.coin.displaySymbol, coin.coin.name);
    }else{
      values.push(coin);
    }
    for(var i = 0; i < values.length; i++){
      var raw = String(values[i] || '').trim();
      if(!raw) continue;
      var lower = raw.toLowerCase();
      var compact = lower.replace(/[_\s]+/g,'-');
      var spaced = lower.replace(/[_-]+/g,' ');
      if(COIN_DESCRIPTIONS[compact]) return compact;
      if(SYMBOL_TO_KEY[lower]) return SYMBOL_TO_KEY[lower];
      if(SYMBOL_TO_KEY[compact]) return SYMBOL_TO_KEY[compact];
      if(SYMBOL_TO_KEY[spaced]) return SYMBOL_TO_KEY[spaced];
      var hyphen = hyphenKey(raw);
      if(COIN_DESCRIPTIONS[hyphen]) return hyphen;
    }
    return '';
  }

  function descriptionRecord(key){
    return COIN_DESCRIPTIONS[key] || null;
  }

  function getCoinFallbackDescription(locale){
    var lang = langKey(locale || currentLocale());
    return FALLBACK_DESC[lang] || FALLBACK_DESC.en;
  }

  function getLocalizedCoinDescription(coin, locale){
    var lang = langKey(locale || currentLocale());
    var key = canonicalCoinKey(coin);
    var candidates = [];
    if(coin && typeof coin === 'object'){
      if(coin.localized && coin.localized[lang]) candidates.push(coin.localized[lang].description, coin.localized[lang].overview, coin.localized[lang].desc);
      if(coin.translations && coin.translations[lang]) candidates.push(coin.translations[lang].description, coin.translations[lang].overview, coin.translations[lang].desc);
      if(coin.i18n && coin.i18n[lang]) candidates.push(coin.i18n[lang].description, coin.i18n[lang].overview, coin.i18n[lang].desc);
      if(coin[lang]) candidates.push(coin[lang].description, coin[lang].overview, coin[lang].desc);
      if(coin.description && typeof coin.description === 'object') candidates.push(coin.description[lang]);
      if(coin.overview && typeof coin.overview === 'object') candidates.push(coin.overview[lang]);
      if(coin.desc && typeof coin.desc === 'object') candidates.push(coin.desc[lang]);
      if(coin.coin) candidates.push(getLocalizedCoinDescription(coin.coin, lang));
    }
    var record = descriptionRecord(key);
    if(record) candidates.push(record[lang], record.en);
    if(coin && typeof coin === 'object'){
      if(coin.localized && coin.localized.en) candidates.push(coin.localized.en.description, coin.localized.en.overview, coin.localized.en.desc);
      if(coin.translations && coin.translations.en) candidates.push(coin.translations.en.description, coin.translations.en.overview, coin.translations.en.desc);
      if(coin.i18n && coin.i18n.en) candidates.push(coin.i18n.en.description, coin.i18n.en.overview, coin.i18n.en.desc);
      if(coin.en) candidates.push(coin.en.description, coin.en.overview, coin.en.desc);
      candidates.push(
        typeof coin.description === 'string' ? coin.description : '',
        typeof coin.overview === 'string' ? coin.overview : '',
        typeof coin.desc === 'string' ? coin.desc : ''
      );
    }
    return firstText(candidates);
  }

  function displaySymbolForCoin(coin){
    var key = canonicalCoinKey(coin);
    if(key === 'usdt') return 'USDT';
    var record = descriptionRecord(key);
    var raw = coin && (coin.displaySymbol || coin.ticker || coin.symbol || (coin.coin && (coin.coin.displaySymbol || coin.coin.ticker || coin.coin.symbol)));
    var symbol = String(raw || (record && record.symbol) || '').toUpperCase().trim();
    if(symbol === 'USD' && key === 'usdt') return 'USDT';
    return symbol;
  }

  var placeholderSyncing = false;
  var placeholderPending = false;

  function enhanceCoinItem(item){
    if(!item || typeof item !== 'object') return item;
    var key = canonicalCoinKey(item);
    var record = descriptionRecord(key);
    var desc = getLocalizedCoinDescription(item, currentLocale()) || getCoinFallbackDescription(currentLocale());
    var copy = {};
    Object.keys(item).forEach(function(prop){ copy[prop] = item[prop]; });
    if(record){
      copy.name = copy.name || record.name;
      copy.symbol = displaySymbolForCoin(copy) || record.symbol;
      copy.ticker = copy.symbol;
      copy.displaySymbol = copy.symbol;
    }
    copy.desc = desc;
    copy.description = desc;
    copy.searchText = [copy.searchText, copy.coinKey, copy.name, copy.symbol, record && record.ko, record && record.en].join(' ');
    return copy;
  }

  function ensureCoinDescriptionData(){
    var store = window.coinEducation || (window.__coinSearchStore && window.__coinSearchStore.coinEducation);
    if(!store || typeof store !== 'object') return;
    ['en','ko'].forEach(function(lang){
      store[lang] = store[lang] || {};
      Object.keys(COIN_DESCRIPTIONS).forEach(function(key){
        var record = COIN_DESCRIPTIONS[key];
        var entry = store[lang][key] || {};
        var enEntry = (store.en && store.en[key]) || {};
        var existing = entry.overview || entry.description || entry.desc;
        var enText = enEntry.overview || enEntry.description || enEntry.desc;
        var translated = record[lang] || record.en;
        if(!entry.name) entry.name = record.name;
        if(!entry.symbol || (key === 'usdt' && entry.symbol === 'USD')) entry.symbol = record.symbol;
        if(!entry.category) entry.category = enEntry.category || 'coin';
        if(!existing || isGenericCoinFallback(existing) || (lang === 'ko' && existing === enText)){
          entry.overview = translated;
        }
        store[lang][key] = entry;
      });
    });
  }

  function wrapCoinSearchApis(){
    var originalItems = window.getCoinSearchItems;
    if(typeof originalItems === 'function' && !originalItems.__coinDescFinalWrapped){
      function wrappedGetCoinSearchItems(){
        var lang = currentLocale();
        if(coinItemsFinalCache && coinItemsFinalCacheLocale === lang) return coinItemsFinalCache;
        ensureCoinDescriptionData();
        var list = originalItems.apply(this, arguments) || [];
        coinItemsFinalCache = Array.prototype.map.call(list, enhanceCoinItem);
        coinItemsFinalCacheLocale = lang;
        return coinItemsFinalCache;
      }
      wrappedGetCoinSearchItems.__coinDescFinalWrapped = true;
      window.getCoinSearchItems = wrappedGetCoinSearchItems;
      try{ getCoinSearchItems = wrappedGetCoinSearchItems; }catch(error){}
    }
    var originalPrioritized = window.getPrioritizedCoinSearchResults;
    if(typeof originalPrioritized === 'function' && !originalPrioritized.__coinDescFinalWrapped){
      function wrappedGetPrioritizedCoinSearchResults(){
        ensureCoinDescriptionData();
        var list = originalPrioritized.apply(this, arguments) || [];
        return Array.prototype.map.call(list, enhanceCoinItem);
      }
      wrappedGetPrioritizedCoinSearchResults.__coinDescFinalWrapped = true;
      window.getPrioritizedCoinSearchResults = wrappedGetPrioritizedCoinSearchResults;
      try{ getPrioritizedCoinSearchResults = wrappedGetPrioritizedCoinSearchResults; }catch(error){}
    }
  }

  function findCoinForCard(card, cachedItems){
    if(!card) return null;
    var attrs = [
      card.getAttribute('data-enhanced-coin-key'),
      card.getAttribute('data-enhanced-coin-symbol'),
      card.getAttribute('data-coin-key'),
      card.getAttribute('data-coin-symbol')
    ];
    var badge = card.querySelector('.coin-symbol-badge,.search-result-badge.coin,.coin-ticker,.search-result-meta');
    var title = card.querySelector('.coin-name,.search-result-title');
    attrs.push(badge && badge.textContent, title && title.textContent);
    var items = cachedItems || (typeof window.getCoinSearchItems === 'function' ? window.getCoinSearchItems() : []);
    for(var i = 0; i < attrs.length; i++){
      var key = canonicalCoinKey(attrs[i]);
      if(key){
        for(var j = 0; j < items.length; j++){
          if(canonicalCoinKey(items[j]) === key) return items[j];
        }
        var record = descriptionRecord(key);
        if(record) return { coinKey:key, name:record.name, symbol:record.symbol };
      }
    }
    return null;
  }

  function patchRenderedCoinDescriptions(root){
    root = root || document.getElementById('searchResults');
    if(!root || !root.querySelectorAll) return;
    var seen = [];
    var items = typeof window.getCoinSearchItems === 'function' ? window.getCoinSearchItems() : [];
    Array.prototype.forEach.call(root.querySelectorAll('.coin-result-card,.search-result-badge.coin'), function(node){
      var card = node.classList && node.classList.contains('coin-result-card') ? node : node.closest && node.closest('.search-result-item');
      if(!card || seen.indexOf(card) !== -1) return;
      seen.push(card);
      var item = findCoinForCard(card, items);
      if(!item) return;
      var key = canonicalCoinKey(item);
      var desc = getLocalizedCoinDescription(item, currentLocale()) || getCoinFallbackDescription(currentLocale());
      var symbol = displaySymbolForCoin(item) || (descriptionRecord(key) && descriptionRecord(key).symbol) || '';
      var descNode = card.querySelector('.coin-description,.search-result-desc');
      var badge = card.querySelector('.coin-symbol-badge,.search-result-badge.coin');
      var ticker = card.querySelector('.coin-ticker,.search-result-meta');
      if(descNode) descNode.textContent = desc;
      if(symbol){
        if(badge) badge.textContent = symbol;
        if(ticker) ticker.textContent = symbol;
      }
      card.classList.add('coin-result-card');
      card.setAttribute('data-coin-description-final', key || 'matched');
    });
  }

  function isModalSearchInput(input){
    return !!(input && (
      input.id === 'searchInput' ||
      input.closest && input.closest('#searchOverlay,.search-overlay,.search-modal,.search-dialog,.search-panel,.search-box,[data-search-modal],[data-search-panel]')
    ));
  }

  function isSearchInput(input){
    if(!input) return false;
    var meta = [
      input.id,
      input.className,
      input.type,
      input.placeholder,
      input.getAttribute && input.getAttribute('aria-label'),
      input.getAttribute && input.getAttribute('title'),
      input.getAttribute && input.getAttribute('name')
    ].join(' ');
    return /search|검색|Coin ProofPath/i.test(meta) || input.type === 'search';
  }

  function duplicatePlaceholderSelector(){
    return [
      '.search-placeholder-copy',
      '.search-floating-label',
      '.search-input-ghost',
      '.search-input-overlay-text',
      '.search-helper-placeholder',
      '.search-label-inside',
      '.search-ghost',
      '.fake-placeholder',
      '.search-caption-inside',
      '.search-input-label.is-inside',
      '.search-kicker-inside',
      '.search-subtitle-inside',
      '.search-prompt.is-inside',
      '.search-prompt-text.is-inside',
      '.input-placeholder-copy',
      '.placeholder-copy',
      '[data-search-placeholder-copy]',
      '[data-search-ghost]',
      '[data-search-input-ghost]'
    ].join(',');
  }

  function isSearchOverlayScope(node){
    return !!(node && node.closest && node.closest(searchModalRootSelector() + ',.search-box'));
  }

  function searchModalRootSelector(){
    return '#searchOverlay,.search-overlay,.search-modal,.search-dialog,.search-panel,[data-search-modal],[data-search-panel]';
  }

  function hideNode(node, hidden){
    if(!node || !node.setAttribute) return;
    if(hidden){
      hidden.push({
        tag:node.tagName,
        className:String(node.className || ''),
        text:String(node.textContent || '').replace(/\s+/g,' ').trim()
      });
    }
    if(node.parentNode && node.parentNode.removeChild){
      node.parentNode.removeChild(node);
    }else if(node.parentElement && node.parentElement.children){
      var children = Array.prototype.slice.call(node.parentElement.children);
      var index = children.indexOf(node);
      if(index !== -1) node.parentElement.children.splice(index, 1);
      node.parentElement = null;
    }else if(node.remove){
      node.remove();
    }
  }

  function isExactPlaceholderText(text, labels){
    text = String(text || '').replace(/\s+/g,' ').trim();
    if(!text) return false;
    var compact = text.replace(/\s+/g,'');
    var isLegacyBrandSearch =
      (compact.indexOf('CoinProofPath') !== -1 && compact.indexOf('검색') !== -1 && text.length <= 32) ||
      (/^search\s+coin\s+proofpath\.{0,3}$/i.test(text));
    var targets = [
      labels.placeholder,
      labels.shortPlaceholder,
      SEARCH_LABELS.en.placeholder,
      SEARCH_LABELS.en.shortPlaceholder,
      SEARCH_LABELS.ko.placeholder,
      SEARCH_LABELS.ko.shortPlaceholder
    ];
    return targets.indexOf(text) !== -1 || isLegacyBrandSearch;
  }

  function hideDuplicatePlaceholderSiblings(input, labels){
    var parent = input && input.parentElement;
    if(!parent || !parent.children) return [];
    var hidden = [];
    Array.prototype.forEach.call(parent.children, function(node){
      if(node === input || /^(svg|button)$/i.test(node.tagName || '')) return;
      var text = String(node.textContent || '').replace(/\s+/g,' ').trim();
      if(isExactPlaceholderText(text, labels) || /search-placeholder-copy|search-floating-label|search-input-ghost|search-input-overlay-text|search-helper-placeholder|search-label-inside|search-ghost|fake-placeholder|search-caption-inside|search-input-label/i.test(String(node.className || ''))){
        hideNode(node, hidden);
      }
    });
    return hidden;
  }

  function hideDuplicatePlaceholderCopies(labels){
    var hidden = [];
    Array.prototype.forEach.call(document.querySelectorAll(duplicatePlaceholderSelector()), function(node){
      hideNode(node, hidden);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#searchOverlay label,#searchOverlay span,#searchOverlay div,#searchOverlay p,.search-overlay label,.search-overlay span,.search-overlay div,.search-overlay p,.search-modal label,.search-modal span,.search-modal div,.search-modal p,.search-dialog label,.search-dialog span,.search-dialog div,.search-dialog p,.search-panel label,.search-panel span,.search-panel div,.search-panel p'), function(node){
      if(node.querySelector && node.querySelector('input')) return;
      if(/^(svg|button)$/i.test(node.tagName || '')) return;
      var className = String(node.className || '');
      var text = String(node.textContent || '').replace(/\s+/g,' ').trim();
      if(/search-kicker/.test(className) && !isExactPlaceholderText(text, labels)) return;
      if(isSearchOverlayScope(node) && (isExactPlaceholderText(text, labels) || /search-caption-inside|search-input-label|search-subtitle-inside|search-prompt|search-prompt-text|input-placeholder-copy|placeholder-copy|search-placeholder|search-floating-label|search-input-ghost|search-helper-placeholder|search-ghost|fake-placeholder/i.test(className))){
        hideNode(node, hidden);
      }
    });
    return hidden;
  }

  function cleanupSearchModalVisibleText(root, labels){
    root = root || document;
    labels = labels || SEARCH_LABELS[currentLocale()] || SEARCH_LABELS.en;
    var removed = [];
    var ghostSelector = [
      duplicatePlaceholderSelector(),
      '.search-input-label',
      '.search-prompt',
      '.search-prompt-text',
      '.search-kicker-inside',
      '.search-subtitle-inside'
    ].join(',');
    var modalRoots = root.querySelectorAll ? root.querySelectorAll(searchModalRootSelector()) : [];
    Array.prototype.forEach.call(modalRoots, function(modal){
      Array.prototype.forEach.call(modal.querySelectorAll(ghostSelector), function(node){
        if(node.matches && node.matches('input,button,a')) return;
        hideNode(node, removed);
      });
      Array.prototype.forEach.call(modal.querySelectorAll('label,span,div,p'), function(node){
        if(node.matches && node.matches('input,button,a')) return;
        if(node.querySelector && node.querySelector('input,button,a,.search-result-card,.coin-result-card,.site-result-card,.representative-coin-card,.search-result-item')) return;
        var text = String(node.textContent || '').replace(/\s+/g,' ').trim();
        if(isExactPlaceholderText(text, labels)){
          hideNode(node, removed);
        }
      });
    });
    return removed;
  }

  function cleanupPromptOnlyResults(labels){
    var results = document.getElementById('searchResults');
    var input = document.getElementById('searchInput');
    if(!results) return;
    var query = input ? String(input.value || '').trim() : '';
    if(!query && isExactPlaceholderText(results.getAttribute && results.getAttribute('data-empty'), labels)){
      results.setAttribute('data-empty','');
    }
    var text = String(results.textContent || '').replace(/\s+/g,' ').trim();
    var promptOnly = !query && text && isExactPlaceholderText(text, labels);
    if(!query){
      Array.prototype.forEach.call(results.querySelectorAll('.search-result-empty,.search-helper,.search-hint,[data-search-empty]'), function(node){
        if(isExactPlaceholderText(node.textContent, labels)) hideNode(node);
      });
    }
  }

  function dedupeModalInputs(){
    var overlay = document.getElementById('searchOverlay');
    if(!overlay) return 0;
    var inputs = Array.prototype.filter.call(overlay.querySelectorAll('input'), isSearchInput);
    var primary = document.getElementById('searchInput') || inputs[0] || null;
    var removed = 0;
    inputs.forEach(function(input){
      if(input === primary) return;
      if(input.parentNode && input.parentNode.removeChild){
        input.parentNode.removeChild(input);
      }else if(input.parentElement && input.parentElement.children){
        var children = Array.prototype.slice.call(input.parentElement.children);
        var index = children.indexOf(input);
        if(index !== -1) input.parentElement.children.splice(index, 1);
        input.parentElement = null;
      }else if(input.remove){
        input.remove();
      }
      removed += 1;
    });
    return removed;
  }

  function syncSearchPlaceholders(){
    if(typeof document === 'undefined') return;
    if(placeholderSyncing) return;
    placeholderSyncing = true;
    var labels = SEARCH_LABELS[currentLocale()] || SEARCH_LABELS.en;
    var hidden = [];
    try{
      Array.prototype.forEach.call(document.querySelectorAll('input'), function(input){
        if(!isSearchInput(input)) return;
        var modal = isModalSearchInput(input);
        var value = modal ? labels.shortPlaceholder : labels.placeholder;
        input.placeholder = value;
        input.setAttribute('aria-label', value);
        input.setAttribute('title', value);
        input.setAttribute('data-search-placeholder-role', modal ? 'modal-short' : 'home-full');
        hidden = hidden.concat(hideDuplicatePlaceholderSiblings(input, labels));
      });
      hidden = hidden.concat(hideDuplicatePlaceholderCopies(labels));
      hidden = hidden.concat(cleanupSearchModalVisibleText(document, labels));
      dedupeModalInputs();
      cleanupPromptOnlyResults(labels);
      window.__lastHiddenSearchPlaceholderCopies = hidden;
    }finally{
      placeholderSyncing = false;
    }
  }

  function scheduleFinalPlaceholderSync(){
    if(placeholderSyncing || placeholderPending) return;
    placeholderPending = true;
    setTimeout(function(){
      placeholderPending = false;
      syncSearchPlaceholders();
    }, 0);
  }

  function installFinalPlaceholderObserver(){
    if(typeof MutationObserver === 'undefined' || !document.body || document.body.__searchTextOverlapFinalObserver) return;
    var observer = new MutationObserver(function(){ scheduleFinalPlaceholderSync(); });
    observer.observe(document.body, {
      childList:true,
      subtree:true,
      attributes:true,
      attributeFilter:['placeholder','aria-label','title','data-empty','class','style']
    });
    document.body.__searchTextOverlapFinalObserver = observer;
  }

  var searchTextCleanupTimer = null;
  function scheduleSearchTextCleanup(){
    clearTimeout(searchTextCleanupTimer);
    searchTextCleanupTimer = setTimeout(function(){
      syncSearchPlaceholders();
    }, 300);
  }

  function installSearchTextCleanupEvents(){
    if(window.__searchTextCleanupEventsInstalled) return;
    window.__searchTextCleanupEventsInstalled = true;
    document.addEventListener('click', scheduleSearchTextCleanup);
    document.addEventListener('focusin', scheduleSearchTextCleanup);
  }

  function installStyles(){
    if(document.getElementById('searchCoinDescriptionPlaceholderFinalStyles20260527')) return;
    var style = document.createElement('style');
    style.id = 'searchCoinDescriptionPlaceholderFinalStyles20260527';
    style.textContent = [
      '.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important;}',
      '#searchOverlay .search-input-wrap{position:relative!important;display:flex!important;align-items:center!important;gap:10px!important;}',
      '#searchOverlay .search-input-wrap .search-input,#searchOverlay .search-input-wrap input{width:100%!important;min-width:0!important;box-sizing:border-box!important;padding-left:0!important;padding-right:0!important;}',
      '#searchOverlay .search-input-wrap svg{flex:0 0 18px!important;position:static!important;pointer-events:none!important;}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function afterSearchRender(){
    ensureCoinDescriptionData();
    patchRenderedCoinDescriptions();
    syncSearchPlaceholders();
  }

  function wrapAfter(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__coinDescPlaceholderFinalWrapped) return;
    function wrapped(){
      var result = original.apply(this, arguments);
      after();
      setTimeout(after, 0);
      return result;
    }
    wrapped.__coinDescPlaceholderFinalWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'syncSearchLocale') syncSearchLocale = wrapped;
    }catch(error){}
  }

  function installDebug(){
    window.getLocalizedCoinDescription = getLocalizedCoinDescription;
    window.getCoinFallbackDescription = getCoinFallbackDescription;
    window.debugCoinDescriptionFallbacks = function(){
      patchRenderedCoinDescriptions();
      var cards = Array.prototype.map.call(document.querySelectorAll('.coin-result-card'), function(card){
        var text = String(card.textContent || '').replace(/\s+/g,' ').trim();
        return {
          text:text.slice(0,300),
          usesKoreanFallback:text.indexOf('검색어와 관련된 코인입니다') !== -1,
          usesEnglishFallback:/This coin is related to your search|A coin related to this search/i.test(text)
        };
      });
      return {
        currentLocale:currentLocale(),
        coinCardCount:cards.length,
        fallbackCount:cards.filter(function(card){ return card.usesKoreanFallback || card.usesEnglishFallback; }).length,
        cards:cards
      };
    };
    function collectSearchTextOverlapExact(){
      syncSearchPlaceholders();
      var keywords = [
        '검색어를 입력하세요',
        'Type to search'
      ];
      var matched = [];
      Array.prototype.forEach.call(document.querySelectorAll('input,label,span,div,button,p'), function(el){
        var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : {x:0,y:0,width:0,height:0};
        var style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : {};
        var data = {
          tag:el.tagName,
          id:el.id || '',
          className:String(el.className || ''),
          textContent:String(el.textContent || '').trim(),
          placeholder:el.getAttribute && el.getAttribute('placeholder') || '',
          value:el.value || '',
          ariaLabel:el.getAttribute && el.getAttribute('aria-label') || '',
          title:el.getAttribute && el.getAttribute('title') || '',
          dataEmpty:el.getAttribute && el.getAttribute('data-empty') || '',
          display:style.display || '',
          visibility:style.visibility || '',
          opacity:style.opacity || '',
          position:style.position || '',
          zIndex:style.zIndex || '',
          pointerEvents:style.pointerEvents || '',
          rect:{
            x:Math.round(rect.x || 0),
            y:Math.round(rect.y || 0),
            width:Math.round(rect.width || 0),
            height:Math.round(rect.height || 0)
          },
          parentTag:el.parentElement ? el.parentElement.tagName : '',
          parentClass:el.parentElement ? String(el.parentElement.className || '') : '',
          parentText:el.parentElement ? String(el.parentElement.textContent || '').trim().slice(0,200) : '',
          outerHTML:el.outerHTML ? el.outerHTML.slice(0,1200) : ''
        };
        var joined = [
          data.textContent,
          data.placeholder,
          data.value,
          data.ariaLabel,
          data.title,
          data.dataEmpty,
          data.className,
          data.id
        ].join(' ');
        if(keywords.some(function(keyword){ return joined.indexOf(keyword) !== -1; })) matched.push(data);
      });
      var visibleMatched = matched.filter(function(item){
        return item.display !== 'none' &&
          item.visibility !== 'hidden' &&
          item.opacity !== '0' &&
          item.rect.width > 1 &&
          item.rect.height > 1;
      });
      return {
        currentLocale:window.currentLocale || window.__currentLocale || document.documentElement.lang || currentLocale(),
        matchedCount:matched.length,
        visibleMatchedCount:visibleMatched.length,
        visibleCount:visibleMatched.length,
        matched:matched,
        visibleMatched:visibleMatched,
        nodes:matched,
        visible:visibleMatched
      };
    }
    function collectSearchModalOverlapFinal(){
      syncSearchPlaceholders();
      var modal = document.querySelector(searchModalRootSelector());
      if(!modal){
        return { foundModal:false };
      }
      var keywords = [
        SEARCH_LABELS.ko.placeholder,
        SEARCH_LABELS.ko.shortPlaceholder,
        SEARCH_LABELS.en.placeholder,
        SEARCH_LABELS.en.shortPlaceholder,
        'Type to search'
      ];
      var nodes = [];
      Array.prototype.forEach.call(modal.querySelectorAll('input,label,span,div,p,button'), function(el){
        var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : {x:0,y:0,width:0,height:0};
        var style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : {};
        var data = {
          tag:el.tagName,
          id:el.id || '',
          className:String(el.className || ''),
          textContent:String(el.textContent || '').trim(),
          placeholder:el.getAttribute && el.getAttribute('placeholder') || '',
          ariaLabel:el.getAttribute && el.getAttribute('aria-label') || '',
          title:el.getAttribute && el.getAttribute('title') || '',
          display:style.display || '',
          visibility:style.visibility || '',
          opacity:style.opacity || '',
          position:style.position || '',
          rect:{
            x:Math.round(rect.x || 0),
            y:Math.round(rect.y || 0),
            width:Math.round(rect.width || 0),
            height:Math.round(rect.height || 0)
          },
          outerHTML:el.outerHTML ? el.outerHTML.slice(0,800) : ''
        };
        var joined = [
          data.textContent,
          data.placeholder,
          data.ariaLabel,
          data.title,
          data.className,
          data.id
        ].join(' ');
        if(keywords.some(function(keyword){ return keyword && joined.indexOf(keyword) !== -1; })) nodes.push(data);
      });
      var visible = nodes.filter(function(item){
        return item.display !== 'none' &&
          item.visibility !== 'hidden' &&
          item.opacity !== '0' &&
          item.rect.width > 1 &&
          item.rect.height > 1;
      });
      return {
        currentLocale:window.currentLocale || window.__currentLocale || document.documentElement.lang || currentLocale(),
        foundModal:true,
        matchedCount:nodes.length,
        visibleCount:visible.length,
        nodes:nodes,
        visible:visible
      };
    }
    window.debugSearchTextOverlapExact = collectSearchTextOverlapExact;
    window.debugSearchOverlapFinal = collectSearchModalOverlapFinal;
    window.cleanupSearchModalVisibleText = cleanupSearchModalVisibleText;
    window.debugSearchPlaceholderOverlap = function(){
      syncSearchPlaceholders();
      return Array.prototype.filter.call(document.querySelectorAll('input'), isSearchInput).map(function(input, index){
        var parent = input.parentElement;
        var visibleSiblingTexts = parent ? Array.prototype.filter.call(parent.children, function(el){ return el !== input; }).map(function(el){
          var style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : {};
          return {
            tag:el.tagName,
            className:String(el.className || ''),
            text:String(el.textContent || '').replace(/\s+/g,' ').trim(),
            display:style.display || '',
            visibility:style.visibility || '',
            position:style.position || ''
          };
        }) : [];
        return {
          index:index,
          isModalInput:isModalSearchInput(input),
          value:input.value,
          placeholder:input.placeholder,
          ariaLabel:input.getAttribute('aria-label'),
          outerHTML:input.outerHTML,
          parentClass:parent && parent.className,
          visibleSiblingTexts:visibleSiblingTexts
        };
      });
    };
    window.debugSearchOverlapExact = function(){
      syncSearchPlaceholders();
      var targets = [];
      Array.prototype.forEach.call(document.querySelectorAll('input,label,span,div,button'), function(el){
        var text = [
          el.textContent || '',
          el.getAttribute && el.getAttribute('placeholder') || '',
          el.getAttribute && el.getAttribute('aria-label') || '',
          el.getAttribute && el.getAttribute('title') || '',
          el.className || '',
          el.id || ''
        ].join(' ');
        if(text.indexOf('검색어를 입력하세요') === -1 &&
          text.indexOf('Type to search') === -1){
          return;
        }
        var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : {x:0,y:0,width:0,height:0};
        var style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : {};
        targets.push({
          tag:el.tagName,
          id:el.id || '',
          className:String(el.className || ''),
          textContent:String(el.textContent || '').replace(/\s+/g,' ').trim(),
          placeholder:el.getAttribute && el.getAttribute('placeholder'),
          ariaLabel:el.getAttribute && el.getAttribute('aria-label'),
          title:el.getAttribute && el.getAttribute('title'),
          display:style.display || '',
          visibility:style.visibility || '',
          position:style.position || '',
          opacity:style.opacity || '',
          rect:{x:rect.x || 0,y:rect.y || 0,width:rect.width || 0,height:rect.height || 0},
          outerHTML:el.outerHTML ? el.outerHTML.slice(0,1000) : '',
          parentClass:el.parentElement && String(el.parentElement.className || ''),
          parentOuterHTML:el.parentElement && el.parentElement.outerHTML ? el.parentElement.outerHTML.slice(0,1000) : ''
        });
      });
      return {
        currentLocale:currentLocale(),
        targetCount:targets.length,
        targets:targets
      };
    };
    window.debugBonkDescription = function(){
      patchRenderedCoinDescriptions();
      var cards = Array.prototype.map.call(document.querySelectorAll('.coin-result-card'), function(card){
        return String(card.textContent || '').replace(/\s+/g,' ').trim();
      });
      var bonkCards = cards.filter(function(text){ return /bonk/i.test(text); });
      return {
        currentLocale:currentLocale(),
        bonkDescription:getLocalizedCoinDescription({coinKey:'bonk', symbol:'BONK', name:'Bonk'}, currentLocale()),
        bonkCards:bonkCards,
        bonkUsesFallback:bonkCards.some(function(text){
          return text.indexOf('검색어와 관련된 코인입니다') !== -1 ||
            text.indexOf('행동하기 전에 공식 정보와 프로젝트 자료를 함께 확인하세요') !== -1 ||
            /This coin is related to your search|A coin related to this search/i.test(text);
        })
      };
    };
  }

  function boot(){
    installStyles();
    ensureCoinDescriptionData();
    wrapCoinSearchApis();
    wrapAfter('renderSearchAutocompleteFinal', afterSearchRender);
    wrapAfter('renderPatchedSearchResults', afterSearchRender);
    wrapAfter('openSearch', afterSearchRender);
    wrapAfter('setLang', afterSearchRender);
    var previousSync = window.syncSearchLocale;
    if(typeof previousSync === 'function' && !previousSync.__coinDescPlaceholderFinalWrapped){
      function finalSyncSearchLocale(){
        var result = previousSync.apply(this, arguments);
        syncSearchPlaceholders();
        return result;
      }
      finalSyncSearchLocale.__coinDescPlaceholderFinalWrapped = true;
      window.syncSearchLocale = finalSyncSearchLocale;
      try{ syncSearchLocale = finalSyncSearchLocale; }catch(error){}
    }
    installDebug();
    afterSearchRender();
    installFinalPlaceholderObserver();
    installSearchTextCleanupEvents();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot, { once:true });
  }else{
    boot();
    setTimeout(function(){
      afterSearchRender();
      installFinalPlaceholderObserver();
      installSearchTextCleanupEvents();
    }, 0);
  }
})();
