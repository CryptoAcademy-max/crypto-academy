(function(){
  if(typeof window === 'undefined' || window.__faqDataAnchorBridge20260529) return;
  window.__faqDataAnchorBridge20260529 = true;

  var FALLBACK_LANGS = ['th','id','pt','br','tr','es','ar','vi','ha'];
  var EXTRA_FAQS = {
    en:[
      {id:'faq-investment-advice', category:'Site Use', q:'Is Coin ProofPath an investment recommendation site?', a:'No. Coin ProofPath does not recommend buying specific coins or making investments. It is a free education site for learning crypto basics such as wallets, exchanges, fees, bridges, and information verification.', keywords:['investment advice','free crypto education','crypto education','Coin ProofPath']},
      {id:'faq-search-ranking', category:'Search', q:'Are search results investment rankings?', a:'No. Search results are not investment rankings. They show learning materials related to your search term. Appearing higher does not mean a coin is better.', keywords:['search results','ranking','investment rankings']},
      {id:'faq-exchange-wallet', category:'Exchanges and Wallets', q:'How should I use exchanges and wallets differently?', a:'Exchanges are convenient for buying and selling, while wallets give users more control. Beginners should think of exchanges for trading and wallets for storage and self-custody.', keywords:['exchange','wallet','self-custody','custody']},
      {id:'faq-test-transfer', category:'Exchanges and Wallets', q:'Why is a small test transfer important?', a:'If you choose the wrong address or network, it may be difficult to recover your assets. A small test transfer helps confirm the address, network, fee, and arrival before sending a larger amount.', keywords:['test transfer','address check','network check','transfer safety']},
      {id:'faq-multiple-networks', category:'Networks and Fees', q:'Why can the same coin exist on multiple networks?', a:'One asset can exist on multiple networks. For example, USDT can be transferred on Ethereum, Tron, BNB Chain, and other networks. The sending and receiving networks must match.', keywords:['network','USDT','Ethereum','Tron','BNB Chain','wrong network']},
      {id:'faq-cheapest-network-fee', category:'Networks and Fees', q:'Should I always choose the cheapest network fee?', a:'No. Choosing only by fee can be risky. First check whether the receiving wallet or exchange supports that network. A cheap fee does not help if the network is wrong.', keywords:['fee','network fee','gas fee','transaction fee','wrong network']},
      {id:'faq-stablecoin-safe', category:'Stablecoins', q:'Are all stablecoins safe?', a:'No. Stablecoins may look similar in price, but their issuers, reserves, liquidity, transparency, and depeg risks can be different.', keywords:['stablecoin','reserve','issuer','depeg','peg']},
      {id:'faq-wallet-connect-approval', category:'DeFi and Approvals', q:'Are wallet connection and token approval the same?', a:'No. Connecting a wallet usually lets a site see your wallet address. Approval gives permission to use a specific token, so approvals should be checked more carefully.', keywords:['wallet connect','approval','token approval']},
      {id:'faq-bridge-risk', category:'Bridges and Multichain', q:'Why can bridges be risky?', a:'Bridges move assets between different chains, so you need to check the network, supported token, fees, and security structure. Using the wrong chain or a fake bridge site can lead to asset loss.', keywords:['bridge','cross-chain','bridge risk','multichain']},
      {id:'faq-seed-phrase', category:'Scam Prevention and Verification', q:'What should I do if a site asks for my seed phrase?', a:'Stop immediately. Legitimate services do not ask for your recovery phrase or private key. If you enter your seed phrase, you may lose control of your wallet.', keywords:['seed phrase','private key','wallet recovery','scam']},
      {id:'faq-official-link', category:'Scam Prevention and Verification', q:'How can I check whether a link is official?', a:'Do not rely only on the project name. Check the full domain. Official websites, official social accounts, and official documents are safer sources than ads, DMs, or comment links.', keywords:['official link','domain','domain check','phishing','official source']},
      {id:'faq-contract-address', category:'Scam Prevention and Verification', q:'Why should I cross-check contract addresses?', a:'Fake tokens can use similar names. It is safer to cross-check contract addresses through official documents, official websites, and blockchain explorers.', keywords:['contract address','cross-check','explorer','fake token','official source']}
    ],
    ko:[
      {id:'faq-investment-advice', category:'사이트 이용', q:'Coin ProofPath는 투자 추천 사이트인가요?', a:'아니요. Coin ProofPath는 특정 코인 매수나 투자를 추천하는 사이트가 아닙니다. 암호화폐를 더 안전하게 이해하고, 지갑·거래소·수수료·브리지·정보 검증 같은 기본 구조를 배우기 위한 무료 교육 사이트입니다.', keywords:['투자 추천','무료 교육','Coin ProofPath','crypto education','investment advice']},
      {id:'faq-search-ranking', category:'검색 기능', q:'검색 결과가 투자 추천 순위인가요?', a:'아니요. 검색 결과는 투자 추천 순위가 아닙니다. 입력한 검색어와 관련된 학습 자료를 보여주는 구조이며, 상단에 나온다고 해서 더 좋은 코인이라는 뜻은 아닙니다.', keywords:['검색 결과','투자 추천','순위','ranking','search result']},
      {id:'faq-exchange-wallet', category:'거래소와 지갑', q:'거래소와 지갑은 어떻게 다르게 써야 하나요?', a:'거래소는 사고팔기 편한 곳이고, 지갑은 사용자가 통제권을 더 많이 갖는 곳입니다. 초보자는 거래소를 구매와 거래용으로, 지갑은 보관과 자기 통제권을 이해하는 도구로 나누어 생각하는 것이 좋습니다.', keywords:['거래소','지갑','self-custody','custody','exchange','wallet']},
      {id:'faq-test-transfer', category:'거래소와 지갑', q:'소액 테스트는 왜 필요한가요?', a:'주소나 네트워크를 잘못 선택하면 자산을 되찾기 어려울 수 있습니다. 큰 금액을 보내기 전에 작은 금액으로 먼저 전송해보면 주소, 네트워크, 수수료, 도착 여부를 확인할 수 있습니다.', keywords:['소액 테스트','test transfer','주소 확인','네트워크 확인','transfer safety']},
      {id:'faq-multiple-networks', category:'네트워크와 수수료', q:'같은 코인인데 왜 네트워크가 여러 개인가요?', a:'하나의 자산이 여러 네트워크에서 사용될 수 있기 때문입니다. 예를 들어 같은 USDT라도 Ethereum, Tron, BNB Chain 등 여러 네트워크에서 전송될 수 있습니다. 보내는 곳과 받는 곳의 네트워크가 같아야 합니다.', keywords:['네트워크','USDT','Ethereum','Tron','BNB Chain','wrong network']},
      {id:'faq-cheapest-network-fee', category:'네트워크와 수수료', q:'수수료가 가장 싼 네트워크를 고르면 되나요?', a:'수수료만 보고 선택하면 위험합니다. 받는 지갑이나 거래소가 해당 네트워크를 지원하는지 먼저 확인해야 합니다. 수수료가 낮아도 잘못된 네트워크를 선택하면 자산을 찾기 어려울 수 있습니다.', keywords:['수수료','네트워크 수수료','gas fee','transaction fee','wrong network']},
      {id:'faq-stablecoin-safe', category:'스테이블코인', q:'스테이블코인은 전부 안전한가요?', a:'아니요. 스테이블코인은 가격이 비슷해 보여도 발행자, 준비금, 유동성, 투명성, 디페그 위험이 다를 수 있습니다.', keywords:['스테이블코인','stablecoin','reserve','issuer','depeg','peg']},
      {id:'faq-wallet-connect-approval', category:'DeFi와 승인', q:'지갑 연결과 승인은 같은 뜻인가요?', a:'아닙니다. 지갑 연결은 사이트가 지갑 주소를 확인하는 단계에 가깝고, 승인은 특정 토큰 사용 권한을 허용하는 단계입니다. 승인은 더 신중하게 확인해야 합니다.', keywords:['지갑 연결','승인','approval','wallet connect','token approval']},
      {id:'faq-bridge-risk', category:'브리지와 멀티체인', q:'브리지는 왜 위험할 수 있나요?', a:'브리지는 서로 다른 체인 사이에서 자산을 이동시키는 과정이기 때문에, 네트워크 선택, 지원 토큰, 수수료, 보안 구조를 모두 확인해야 합니다. 잘못된 체인이나 가짜 브리지 사이트를 사용하면 자산 손실 위험이 있습니다.', keywords:['브리지','bridge','cross-chain','bridge risk','multichain']},
      {id:'faq-seed-phrase', category:'사기 예방과 정보 검증', q:'시드 문구를 입력하라고 하면 어떻게 해야 하나요?', a:'즉시 멈춰야 합니다. 정상적인 서비스는 지갑 복구 문구나 개인키를 요구하지 않습니다. 시드 문구를 입력하면 지갑 통제권을 잃을 수 있습니다.', keywords:['시드 문구','seed phrase','private key','wallet recovery','scam']},
      {id:'faq-official-link', category:'사기 예방과 정보 검증', q:'공식 링크인지 어떻게 확인하나요?', a:'프로젝트 이름만 보지 말고 전체 도메인을 확인해야 합니다. 검색 광고, DM 링크, 댓글 링크보다 공식 웹사이트, 공식 SNS, 공식 문서에서 연결되는 주소를 우선 확인하는 것이 안전합니다.', keywords:['공식 링크','도메인 확인','phishing','official source','domain check']},
      {id:'faq-contract-address', category:'사기 예방과 정보 검증', q:'컨트랙트 주소는 왜 교차 확인해야 하나요?', a:'이름이 비슷한 가짜 토큰이 있을 수 있기 때문입니다. 컨트랙트 주소는 공식 문서, 공식 웹사이트, 블록체인 익스플로러에서 함께 확인하는 것이 좋습니다.', keywords:['컨트랙트 주소','contract address','cross-check','explorer','fake token']}
    ]
  };

  function lang(){
    var value = 'en';
    try{
      value = (typeof currentLang === 'string' && currentLang) || window.currentLang || window.currentLocale || localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en';
    }catch(error){}
    value = String(value || 'en').toLowerCase();
    if(value === 'pt-br' || value.indexOf('br') === 0) return 'br';
    if(value.indexOf('pt') === 0) return 'pt';
    return value || 'en';
  }

  function normalize(value){
    return String(value || '').toLowerCase().replace(/\s+/g,' ').trim();
  }

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function pageFor(language){
    if(typeof polishedSectionContent === 'undefined' || !polishedSectionContent) return null;
    return polishedSectionContent[language] || polishedSectionContent.en || null;
  }

  function faqRows(language){
    var page = pageFor(language || lang());
    return page && Array.isArray(page.faqItems) ? page.faqItems : [];
  }

  function faqEntries(language){
    return faqRows(language).map(function(row){
      row = row || [];
      return {
        q: String(row[0] || ''),
        a: String(row[1] || ''),
        category: String(row[2] || ''),
        keywords: Array.isArray(row[3]) ? row[3] : [],
        id: String(row[4] || '')
      };
    }).filter(function(item){
      return item.q && item.a;
    });
  }

  function extrasFor(language){
    return EXTRA_FAQS[language] || EXTRA_FAQS.en;
  }

  function rowFromExtra(item){
    return [item.q, item.a, item.category, item.keywords || [], item.id];
  }

  function moveExtraRowToEnd(rows, item){
    if(!Array.isArray(rows) || !item) return;
    var idKey = normalize(item.id);
    var titleKey = normalize(item.q);
    for(var i = rows.length - 1; i >= 0; i--){
      var row = rows[i] || [];
      if(normalize(row[4]) === idKey || normalize(row[0]) === titleKey){
        rows.splice(i, 1);
      }
    }
    rows.push(rowFromExtra(item));
  }

  function syncRepFaqEntry(language, item){
    if(!window.__repFaqEntries) window.__repFaqEntries = {};
    if(!window.__repFaqEntries[language]) window.__repFaqEntries[language] = {};
    if(window.__repFaqEntries[language][item.id]) delete window.__repFaqEntries[language][item.id];
    window.__repFaqEntries[language][item.id] = {
      id:item.id,
      title:item.q,
      body:item.a,
      category:item.category,
      keywords:item.keywords || []
    };
  }

  function syncExpandedFaqRows(){
    if(typeof polishedSectionContent === 'undefined' || !polishedSectionContent) return;
    ['en','ko'].forEach(function(language){
      var page = pageFor(language);
      if(!page) return;
      page.faqItems = Array.isArray(page.faqItems) ? page.faqItems : [];
      extrasFor(language).forEach(function(item){
        syncRepFaqEntry(language, item);
        moveExtraRowToEnd(page.faqItems, item);
      });
    });
  }

  function refreshFaqPanel(){
    var panel = document.getElementById('faqPanel');
    if(!panel || typeof window.renderFAQPage !== 'function') return;
    panel.innerHTML = window.renderFAQPage();
    applyFaqAnchors(panel);
  }

  function faqMap(language){
    var map = {};
    faqEntries(language).forEach(function(item){
      if(item.id) map[normalize(item.q)] = item;
    });
    return map;
  }

  function addAnchorsToFaqHtml(html, language){
    if(!html || typeof html !== 'string') return html;
    faqEntries(language).forEach(function(item){
      if(!item.id) return;
      var needle = '<div class="faq-item"><div class="faq-q">' + item.q + '</div>';
      if(html.indexOf(needle) === -1) return;
      var replacement = '<div class="faq-item" id="' + esc(item.id) + '" data-faq-id="' + esc(item.id) + '" data-faq-category="' + esc(item.category) + '"><div class="faq-q">' + item.q + '</div>';
      html = html.replace(needle, replacement);
    });
    return html;
  }

  function applyFaqAnchors(root){
    root = root || document;
    if(!root || !root.querySelectorAll) return;
    var map = faqMap(lang());
    Array.prototype.forEach.call(root.querySelectorAll('#faqPanel .faq-item, .faq-item'), function(card){
      if(!card || !card.querySelector) return;
      var question = card.querySelector('.faq-q');
      if(!question) return;
      var item = map[normalize(question.textContent || '')];
      if(!item || !item.id) return;
      if(!card.id) card.id = item.id;
      card.setAttribute('data-faq-id', item.id);
      if(item.category) card.setAttribute('data-faq-category', item.category);
    });
  }

  function wrapFaqRenderer(){
    var original = window.renderFAQPage || (typeof renderFAQPage === 'function' ? renderFAQPage : null);
    if(typeof original !== 'function' || original.__faqAnchorBridge20260529) return;
    var wrapped = function(){
      return addAnchorsToFaqHtml(original.apply(this, arguments), lang());
    };
    wrapped.__faqAnchorBridge20260529 = true;
    window.renderFAQPage = wrapped;
    try{ renderFAQPage = wrapped; }catch(error){}
  }

  function wrapAfter(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__faqAnchorRefresh20260529) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(function(){ applyFaqAnchors(document); }, 0);
      return result;
    };
    wrapped.__faqAnchorRefresh20260529 = true;
    window[name] = wrapped;
    try{
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
    }catch(error){}
  }

  function faqSearchMatches(query){
    var q = normalize(query);
    if(!q || q.length < 2) return [];
    return faqEntries(lang()).map(function(item){
      var haystack = normalize([item.q, item.a, item.category, item.id, item.keywords.join(' ')].join(' '));
      return haystack.indexOf(q) !== -1 ? item : null;
    }).filter(Boolean);
  }

  window.debugFaqDataStatus = function(){
    var expectedIds = [
      'faq-investment-advice',
      'faq-search-ranking',
      'faq-exchange-wallet',
      'faq-test-transfer',
      'faq-multiple-networks',
      'faq-cheapest-network-fee',
      'faq-stablecoin-safe',
      'faq-wallet-connect-approval',
      'faq-bridge-risk',
      'faq-seed-phrase',
      'faq-official-link',
      'faq-contract-address'
    ];
    var text = document.body ? (document.body.textContent || '') : '';
    var entries = faqEntries(lang()).filter(function(item){
      return expectedIds.indexOf(item.id) !== -1;
    });
    return {
      locale:lang(),
      dataFaqCount:entries.length,
      foundFaqCount:entries.filter(function(item){ return text.indexOf(item.q) !== -1; }).length,
      foundFaqs:entries.filter(function(item){ return text.indexOf(item.q) !== -1; }).map(function(item){ return item.q; }),
      missingFaqs:entries.filter(function(item){ return text.indexOf(item.q) === -1; }).map(function(item){ return item.q; }),
      anchors:expectedIds.map(function(id){ return {id:id, exists:Boolean(document.getElementById(id))}; }),
      fallbackLanguages:FALLBACK_LANGS.slice()
    };
  };

  window.debugFaqSearchStatus = function(query){
    var language = lang();
    var results = [];
    if(typeof getInternalSearchResults === 'function'){
      try{ results = getInternalSearchResults(query, language) || []; }catch(error){ results = []; }
    }
    var faqResults = results.filter(function(item){ return item && item.type === 'faq'; }).map(function(item){
      return {
        title:item.title || item.question || '',
        description:item.desc || item.description || item.answer || '',
        target:item.target || item.hash || '',
        score:item.score || null
      };
    });
    if(!faqResults.length){
      faqResults = faqSearchMatches(query).map(function(item){
        return {
          title:item.q,
          description:item.a,
          target:item.id ? '#' + item.id : '',
          score:null
        };
      });
    }
    return {
      query:query,
      locale:language,
      faqResults:faqResults
    };
  };

  syncExpandedFaqRows();
  wrapFaqRenderer();
  wrapAfter('showPage');
  wrapAfter('setLang');
  wrapAfter('renderAllLessons');
  refreshFaqPanel();
  applyFaqAnchors(document);
  [0, 120, 500, 1200].forEach(function(delay){
    setTimeout(function(){ syncExpandedFaqRows(); refreshFaqPanel(); applyFaqAnchors(document); }, delay);
  });
})();
