(function(){

function deepClone(value){
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value){
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getLang(){
  var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
  return lang === 'br' ? 'pt' : lang;
}

function normalizeText(value){
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function getBasePrefix(){
  if(typeof window !== 'undefined' && typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__){
    return window.__CA_BASE_PREFIX__;
  }
  if(typeof document !== 'undefined' && document.body && document.body.dataset && document.body.dataset.basePrefix){
    return document.body.dataset.basePrefix;
  }
  return './';
}

var coinEducation = {};
var repCoins = ['bitcoin','ethereum','solana','xrp','bnb','usdt','aave','nft'];
var otherCoins = {
  'cardano':{symbol:'ADA'}, 'polkadot':{symbol:'DOT'}, 'avalanche':{symbol:'AVAX'}, 'chainlink':{symbol:'LINK'},
  'polygon':{symbol:'MATIC'}, 'litecoin':{symbol:'LTC'}, 'dogecoin':{symbol:'DOGE'}, 'shiba-inu':{symbol:'SHIB'},
  'uniswap':{symbol:'UNI'}, 'cosmos':{symbol:'ATOM'}, 'near':{symbol:'NEAR'}, 'algorand':{symbol:'ALGO'},
  'fantom':{symbol:'FTM'}, 'tron':{symbol:'TRX'}, 'stellar':{symbol:'XLM'}, 'hedera':{symbol:'HBAR'},
  'vechain':{symbol:'VET'}, 'aptos':{symbol:'APT'}, 'sui':{symbol:'SUI'}, 'arbitrum':{symbol:'ARB'},
  'optimism':{symbol:'OP'}, 'filecoin':{symbol:'FIL'}, 'the-graph':{symbol:'GRT'}, 'maker':{symbol:'MKR'},
  'compound':{symbol:'COMP'}, 'lido':{symbol:'LDO'}, 'pepe':{symbol:'PEPE'}, 'toncoin':{symbol:'TON'},
  'sei':{symbol:'SEI'}, 'injective':{symbol:'INJ'}, 'render':{symbol:'RNDR'}, 'mantle':{symbol:'MNT'},
  'celestia':{symbol:'TIA'}, 'stacks':{symbol:'STX'}, 'immutable':{symbol:'IMX'}, 'kaspa':{symbol:'KAS'},
  'bonk':{symbol:'BONK'}, 'floki':{symbol:'FLOKI'}, 'usdc':{symbol:'USDC'}, 'dai':{symbol:'DAI'},
  'monero':{symbol:'XMR'}, 'zcash':{symbol:'ZEC'}
};

coinEducation.en = {
  _labels: {
    overview:'Overview',
    role:'Role',
    strengths:'Strengths',
    limitations:'Limitations',
    beginnerNote:'Beginner Note',
    relatedLessons:'Related Lessons',
    relatedGlossary:'Related Glossary',
    relatedFaq:'Related FAQ',
    relatedSources:'Related Sources',
    relatedSafety:'Related Safety',
    coin:'Coin'
  },
  bitcoin:{
    name:'Bitcoin', symbol:'BTC', category:'layer1',
    overview:'The first major cryptocurrency and the best-known example of a decentralized digital asset.',
    role:'Often described as digital gold and used as a store of value without a central issuer.',
    strengths:'Strong brand recognition, deep liquidity, and the most established security track record.',
    limitations:'Limited programmability and slower settlement than many newer chains.',
    beginnerNote:'Bitcoin is a useful starting point when you first learn how crypto networks and wallets work.',
    relatedLessons:[0,1],
    relatedGlossary:['Blockchain','Mining','Wallet'],
    relatedFaq:['What is Bitcoin?'],
    relatedSources:['Bitcoin Whitepaper'],
    relatedSafety:['Seed phrase safety']
  },
  ethereum:{
    name:'Ethereum', symbol:'ETH', category:'layer1',
    overview:'A programmable blockchain used for smart contracts, tokens, NFTs, and many DeFi apps.',
    role:'Acts like shared blockchain infrastructure for apps, tokens, and on-chain finance.',
    strengths:'Large developer ecosystem, broad adoption, and strong smart contract tooling.',
    limitations:'Fees can rise during congestion and the ecosystem can feel complex for beginners.',
    beginnerNote:'Ethereum matters because many wallet, token, NFT, and DeFi concepts start here.',
    relatedLessons:[1,2,3],
    relatedGlossary:['Smart Contract','Gas Fee','DeFi'],
    relatedFaq:['What is Ethereum?'],
    relatedSources:['Ethereum.org'],
    relatedSafety:['Smart contract risks']
  },
  solana:{
    name:'Solana', symbol:'SOL', category:'layer1',
    overview:'A high-speed blockchain designed for low fees and fast transactions.',
    role:'Shows how newer chains compete on speed, app performance, and user cost.',
    strengths:'Fast settlement, low fees, and active app ecosystems in trading and NFTs.',
    limitations:'Past outages and stronger centralization concerns than some older networks.',
    beginnerNote:'Solana is a common comparison point when learning why blockchains make different trade-offs.',
    relatedLessons:[1,2],
    relatedGlossary:['Layer 1','TPS','Validator'],
    relatedFaq:['Why are some chains faster?'],
    relatedSources:['Solana Docs'],
    relatedSafety:['Network mismatch']
  },
  xrp:{
    name:'XRP', symbol:'XRP', category:'layer1',
    overview:'A digital asset focused on quick and low-cost value transfer.',
    role:'Commonly discussed in cross-border transfer and payment use-case conversations.',
    strengths:'Fast settlement and very low transaction costs.',
    limitations:'Centralization and regulatory concerns are discussed more often here than with some other assets.',
    beginnerNote:'XRP helps illustrate how crypto can be framed around payments instead of general smart contracts.',
    relatedLessons:[0,3,4],
    relatedGlossary:['Remittance','Centralization','Transfer'],
    relatedFaq:['Why do some crypto projects focus on payments?'],
    relatedSources:['Ripple website'],
    relatedSafety:['Safe transfer basics']
  },
  bnb:{
    name:'BNB', symbol:'BNB', category:'exchange',
    overview:'A token closely tied to the BNB Chain ecosystem and exchange-related utility.',
    role:'Used for chain fees, ecosystem utility, and exchange-linked features.',
    strengths:'Large ecosystem reach and low-cost transfers on its related chain.',
    limitations:'Its identity is heavily connected to one large exchange ecosystem.',
    beginnerNote:'BNB is a useful example of how exchange-linked tokens differ from independent assets.',
    relatedLessons:[2,3,5],
    relatedGlossary:['Exchange','Token','Wallet Connection'],
    relatedFaq:['What is an exchange?'],
    relatedSources:['BNB Chain Docs'],
    relatedSafety:['Exchange risks']
  },
  usdt:{
    name:'Tether', symbol:'USDT', category:'stablecoin',
    overview:'A widely used stablecoin designed to track the US dollar.',
    role:'Often used to hold value in crypto without the same price swings as more volatile coins.',
    strengths:'High liquidity and broad support across exchanges and multiple networks.',
    limitations:'Users still need to understand issuer, reserve, and network risks.',
    beginnerNote:'USDT is helpful for learning how stablecoins and network selection affect transfers.',
    relatedLessons:[2,3,5],
    relatedGlossary:['Stablecoin','Peg','Network'],
    relatedFaq:['What is a stablecoin?'],
    relatedSources:['Tether Transparency'],
    relatedSafety:['Wrong network']
  },
  aave:{
    name:'Aave', symbol:'AAVE', category:'defi',
    overview:'A major DeFi lending protocol built around on-chain borrowing and lending.',
    role:'Shows how decentralized finance can replace some banking-style functions with code.',
    strengths:'Well-known DeFi brand and a clear example of lending, collateral, and protocol risk.',
    limitations:'More complex for beginners and still exposed to smart contract and liquidation risk.',
    beginnerNote:'Aave is best used as a learning example after you understand wallets, transfers, and smart contracts.',
    relatedLessons:[2,3,4],
    relatedGlossary:['DeFi','Lending','Collateral'],
    relatedFaq:['What is DeFi?'],
    relatedSources:['Aave Docs'],
    relatedSafety:['Smart contract risk']
  },
  nft:{
    name:'NFTs', symbol:'NFT', category:'nft',
    overview:'Unique blockchain-based tokens used for ownership, collectibles, memberships, and access.',
    role:'Commonly used to explain non-fungible ownership and digital item identity.',
    strengths:'Easy way to understand unique tokens, ownership tracking, and creator ecosystems.',
    limitations:'Highly speculative markets and many low-quality projects.',
    beginnerNote:'NFTs are easier to understand after you learn wallet basics and token networks first.',
    relatedLessons:[2,3,6],
    relatedGlossary:['NFT','Token','Mint'],
    relatedFaq:['What is an NFT?'],
    relatedSources:['OpenSea Learn'],
    relatedSafety:['NFT scam prevention']
  }
};
coinEducation.en._other = {};
['ko','th','id','pt','br','tr','es','ar','vi','ha'].forEach(function(lang){
  coinEducation[lang] = deepClone(coinEducation.en);
});

window.__coinSearchStore = window.__coinSearchStore || {};
window.__coinSearchStore.coinEducation = coinEducation;
window.__coinSearchStore.repCoins = repCoins;
window.__coinSearchStore.otherCoins = otherCoins;
window.coinEducation = coinEducation;
window.repCoins = repCoins;
window.otherCoins = otherCoins;

function buildRepresentativeSearchText(key, coin){
  return [
    key,
    coin.name,
    coin.symbol,
    coin.category,
    coin.overview,
    coin.role,
    coin.strengths,
    coin.limitations,
    coin.beginnerNote,
    (coin.relatedGlossary || []).join(' '),
    (coin.relatedFaq || []).join(' '),
    (coin.relatedSources || []).join(' '),
    (coin.relatedSafety || []).join(' ')
  ].join(' ').toLowerCase();
}

function getLocalizedRelatedLessonTitles(lessonItems){
  var lessonMap = ['Blockchain','Wallets','Safe Transfers','The 5 Roles of Crypto','Real-world Lessons','First Buy','Scams'];
  return (lessonItems || []).map(function(item){
    return (typeof item === 'number' && lessonMap[item]) ? lessonMap[item] : String(item || '');
  });
}

function buildRepresentativeItem(key){
  var lang = getLang();
  var store = coinEducation[lang] || coinEducation.en;
  var labels = store._labels || coinEducation.en._labels;
  var coin = store[key] || coinEducation.en[key];
  if(!coin) return null;
  return {
    type:'coin-representative',
    coinKey:key,
    name:coin.name,
    symbol:coin.symbol,
    category:coin.category,
    coin:coin,
    labels:labels,
    desc:coin.overview,
    searchText:buildRepresentativeSearchText(key, coin)
  };
}

function buildLightItem(key, meta){
  var displayName = key.split('-').map(function(part){
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');
  return {
    type:'coin-light',
    coinKey:key,
    name:displayName,
    symbol:meta.symbol,
    category:'coin',
    labels:coinEducation.en._labels,
    desc:displayName + ' is a related coin for this search.',
    searchText:[key, displayName, meta.symbol].join(' ').toLowerCase()
  };
}

function getCoinSearchItems(){
  var items = [];
  repCoins.forEach(function(key){
    var item = buildRepresentativeItem(key);
    if(item) items.push(item);
  });
  Object.keys(otherCoins).forEach(function(key){
    items.push(buildLightItem(key, otherCoins[key]));
  });
  return items;
}

function orderRepresentativeCoinResults(items, query){
  var normalizedQuery = normalizeText(query);
  return (items || []).slice().sort(function(a, b){
    function score(item){
      var scoreValue = 0;
      var name = normalizeText(item && item.name);
      var symbol = normalizeText(item && item.symbol);
      if(normalizedQuery && name === normalizedQuery) scoreValue += 300;
      if(normalizedQuery && symbol === normalizedQuery) scoreValue += 280;
      if(normalizedQuery && name.indexOf(normalizedQuery) === 0) scoreValue += 180;
      if(item && item.type === 'coin-representative') scoreValue += 100;
      return scoreValue;
    }
    return score(b) - score(a);
  });
}

function buildRelatedSection(label, page, targetType, values){
  var items = (values || []).map(function(value){
    if(typeof value === 'number'){
      return { label:getLocalizedRelatedLessonTitles([value])[0], targetPage:'lessons', targetType:'lesson', targetId:String(value) };
    }
    var text = String(value || '').trim();
    return text ? { label:text, targetPage:page, targetType:targetType, targetId:text } : null;
  }).filter(Boolean);
  return items.length ? { label:label, page:page, items:items } : null;
}

function getRepresentativeCoinRelatedSections(coinKey, labels){
  var coin = coinEducation.en[coinKey];
  if(!coin) return [];
  return [
    buildRelatedSection(labels.relatedLessons, 'lessons', 'lesson', coin.relatedLessons),
    buildRelatedSection(labels.relatedGlossary, 'glossary', 'glossary', coin.relatedGlossary),
    buildRelatedSection(labels.relatedFaq, 'faq', 'faq', coin.relatedFaq),
    buildRelatedSection(labels.relatedSources, 'sources', 'source', coin.relatedSources),
    buildRelatedSection(labels.relatedSafety, 'safety', 'safety', coin.relatedSafety)
  ].filter(Boolean);
}

function renderRichCoinCard(item){
  if(!item || !item.coin) return '';
  var coin = item.coin;
  var labels = item.labels || coinEducation.en._labels;
  var related = getRepresentativeCoinRelatedSections(item.coinKey, labels);
  var html = '<div class="coin-card search-representative-card-slot">';
  html += '<div class="coin-card-header"><div class="coin-badge">' + escapeHtml(coin.symbol.substring(0, 3)) + '</div>';
  html += '<div><div class="coin-name">' + escapeHtml(coin.name) + '</div><div class="coin-symbol">' + escapeHtml(coin.symbol) + '</div></div></div>';
  html += '<div class="coin-card-body">';
  [
    [labels.overview, coin.overview],
    [labels.role, coin.role],
    [labels.strengths, coin.strengths],
    [labels.limitations, coin.limitations],
    [labels.beginnerNote, coin.beginnerNote]
  ].forEach(function(field){
    if(!field[1]) return;
    html += '<div style="margin-top:10px"><div class="coin-field-label">' + escapeHtml(field[0]) + '</div><div class="coin-field-text">' + escapeHtml(field[1]) + '</div></div>';
  });
  related.forEach(function(section){
    html += '<div style="margin-top:10px"><div class="coin-field-label">' + escapeHtml(section.label) + '</div><div class="coin-related">';
    section.items.forEach(function(chip){
      html += '<span class="coin-related-chip" data-page="' + escapeHtml(chip.targetPage) + '" data-target-type="' + escapeHtml(chip.targetType) + '" data-target-id="' + escapeHtml(chip.targetId) + '">' + escapeHtml(chip.label) + '</span>';
    });
    html += '</div></div>';
  });
  html += '</div></div>';
  return html;
}

function getLightCoinIntroText(item){
  var raw = String((item && item.desc) || '').replace(/\s+/g, ' ').trim();
  if(!raw){
    var name = String((item && item.name) || (item && item.symbol) || '').trim();
    raw = name ? (name + ' is a digital asset related to this search.') : 'This is a related digital asset.';
  }
  return raw.length > 92 ? (raw.slice(0, 91).trim() + '...') : raw;
}

function renderLightCoinCard(item){
  if(!item) return '';
  var intro = getLightCoinIntroText(item);
  var html = '<div class="coin-light">';
  html += '<div class="coin-card-header"><div class="coin-badge">' + escapeHtml(String(item.symbol || '').substring(0, 3)) + '</div>';
  html += '<div><div class="coin-name">' + escapeHtml(item.name || item.symbol) + '</div><div class="coin-symbol">' + escapeHtml(item.symbol || '') + ' · Coin</div></div></div>';
  html += '<div class="coin-intro">' + escapeHtml(intro) + '</div>';
  html += '</div>';
  return html;
}

function getRepresentativePageRoute(page){
  if(typeof window !== 'undefined' && typeof window.__CA_GET_PAGE_ROUTE === 'function'){
    return window.__CA_GET_PAGE_ROUTE(page);
  }
  var base = getBasePrefix();
  var map = {
    home: base === './' ? './' : base,
    glossary: base + 'glossary/',
    faq: base + 'faq/',
    safety: base + 'safety/',
    sources: base + 'sources/',
    updates: base + 'updates/'
  };
  return map[page] || map.home;
}

function getRepresentativeLessonRoute(lessonIndex){
  if(typeof window !== 'undefined' && typeof window.__CA_GET_LESSON_ROUTE === 'function'){
    return window.__CA_GET_LESSON_ROUTE(lessonIndex);
  }
  var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
  return getBasePrefix() + 'lesson/' + (slugs[lessonIndex] || 'blockchain') + '/';
}

function getRepresentativeTargetLabel(targetType, targetId){
  if(targetType === 'lesson'){
    if(typeof window !== 'undefined' && typeof window.__repLessonTitle === 'function'){
      return window.__repLessonTitle(getLang(), parseInt(targetId, 10));
    }
    return getLocalizedRelatedLessonTitles([parseInt(targetId, 10)])[0] || ('Lesson ' + (parseInt(targetId, 10) + 1));
  }
  return String(targetId || '');
}

function scrollRepresentativeTargetIntoView(target, block){
  if(!target || typeof target.getBoundingClientRect !== 'function') return;
  var topbar = document.getElementById('topbar');
  var offset = topbar ? (topbar.offsetHeight + 18) : 18;
  var rect = target.getBoundingClientRect();
  window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - offset), behavior:'smooth' });
}

function highlightRepresentativeTarget(target){
  if(!target) return;
  target.classList.add('search-target-highlight-final');
  window.setTimeout(function(){
    target.classList.remove('search-target-highlight-final');
  }, 2600);
}

function findRepresentativeTextTarget(root, text){
  var needle = normalizeText(text);
  if(!root || !needle) return null;
  var nodes = root.querySelectorAll('h1,h2,h3,h4,article,section,div,li,p');
  var best = null;
  var bestScore = 0;
  Array.prototype.forEach.call(nodes, function(node){
    var haystack = normalizeText(node.textContent || '');
    if(!haystack || haystack.length < 4 || haystack.length > 2000) return;
    var score = 0;
    if(haystack === needle) score += 120;
    if(haystack.indexOf(needle) === 0) score += 90;
    if(haystack.indexOf(needle) !== -1) score += 60;
    if(score > 0){
      score -= Math.min(haystack.length / 50, 20);
      if(score > bestScore){
        bestScore = score;
        best = node;
      }
    }
  });
  return best;
}

var REP_TARGET_KEY = 'cryptoAcademyRepresentativeTarget';

function persistRepresentativeTarget(payload){
  try {
    sessionStorage.setItem(REP_TARGET_KEY, JSON.stringify(payload));
  } catch(error){}
}

function consumeRepresentativeTarget(){
  try {
    var raw = sessionStorage.getItem(REP_TARGET_KEY);
    sessionStorage.removeItem(REP_TARGET_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(error){
    return null;
  }
}

function resolveTargetPage(targetType){
  var map = { glossary:'glossary', faq:'faq', safety:'safety', source:'sources', sources:'sources' };
  return map[targetType] || 'home';
}

function scrollToRepresentativeTarget(targetType, targetId){
  if(targetType === 'lesson'){
    var lessonIndex = parseInt(targetId, 10) || 0;
    var lessonUrl = getRepresentativeLessonRoute(lessonIndex);
    persistRepresentativeTarget({ targetType:targetType, targetId:String(targetId) });
    if(typeof window !== 'undefined') window.location.href = lessonUrl;
    return;
  }
  if(targetType === 'sourceSection' && typeof window.scrollToSourceSection === 'function'){
    window.scrollToSourceSection(targetId);
    return;
  }
  var page = resolveTargetPage(targetType);
  var pageUrl = getRepresentativePageRoute(page);
  persistRepresentativeTarget({ targetType:targetType, targetId:String(targetId) });
  if(typeof window !== 'undefined') window.location.href = pageUrl;
}

function restoreRepresentativeTarget(){
  var payload = consumeRepresentativeTarget();
  if(!payload) return;
  var text = getRepresentativeTargetLabel(payload.targetType, payload.targetId);
  var root = document.getElementById('app') || document.body;
  var target = findRepresentativeTextTarget(root, text);
  if(target){
    scrollRepresentativeTargetIntoView(target, 'start');
    highlightRepresentativeTarget(target);
  }
}

function navigateRepresentativeChip(chip){
  if(!chip) return;
  var targetType = chip.dataset ? chip.dataset.targetType : '';
  var targetId = chip.dataset ? chip.dataset.targetId : '';
  if(targetType && targetId){
    scrollToRepresentativeTarget(targetType, targetId);
  } else if(chip.dataset && chip.dataset.page){
    window.location.href = getRepresentativePageRoute(chip.dataset.page);
  }
  if(typeof closeSearch === 'function') closeSearch();
}

window.getCoinSearchItems = getCoinSearchItems;
window.orderRepresentativeCoinResults = orderRepresentativeCoinResults;
window.buildRepresentativeSearchText = buildRepresentativeSearchText;
window.getLocalizedRelatedLessonTitles = getLocalizedRelatedLessonTitles;
window.getRepresentativeCoinRelatedSections = getRepresentativeCoinRelatedSections;
window.renderRichCoinCard = renderRichCoinCard;
window.renderLightCoinCard = renderLightCoinCard;
window.getRepresentativeTargetLabel = getRepresentativeTargetLabel;
window.scrollRepresentativeTargetIntoView = scrollRepresentativeTargetIntoView;
window.highlightRepresentativeTarget = highlightRepresentativeTarget;
window.scrollToRepresentativeTarget = scrollToRepresentativeTarget;
window.getRepresentativePageRoute = getRepresentativePageRoute;
window.getRepresentativeLessonRoute = getRepresentativeLessonRoute;
window.navigateRepresentativeChip = navigateRepresentativeChip;

if(typeof window.addEventListener === 'function'){
  window.addEventListener('load', restoreRepresentativeTarget, { once:true });
}

})();
