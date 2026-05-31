(function(){
  if(typeof window === 'undefined' || window.__intermediateActionTrack20260513) return;
  window.__intermediateActionTrack20260513 = true;

  var START_INDEX = 7;
  var TRACK_SIZE = 7;
  var baseShowLesson = typeof window.showLesson === 'function' ? window.showLesson : (typeof showLesson === 'function' ? showLesson : null);
  var lessonSlugs = ['exchange-wallets','network-fees','stablecoins','defi-basics','nft-token-projects','bridges-multichain','verify-information'];

  function langKey(){
    var lang = 'en';
    try{
      lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(err){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    lang = String(lang || 'en').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return lang;
  }

  function routeFor(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function') return window.__CA_GET_LESSON_ROUTE(index);
    var prefix = (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
    if(index >= START_INDEX) return prefix + '#lesson' + (index + 1);
    return prefix;
  }

  function imageBasePrefix(){
    return (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
  }

  var localizedLessonImageMap = {
    'lesson8-exchange-wallet-compare': {
      en:'lesson8-exchange-wallet-compare-en.png',
      ko:'lesson8-exchange-wallet-compare-ko.png',
      th:'lesson8-exchange-wallet-compare-th.png',
      tr:'lesson8-exchange-wallet-compare-tr.png',
      br:'lesson8-exchange-wallet-compare-br.png',
      ar:'lesson8-exchange-wallet-compare-ar.png',
      vi:'lesson8-exchange-wallet-compare-vi.png'
    }
  };

  function getLocalizedLessonImage(imageKey, fallbackFile){
    var pack = localizedLessonImageMap[imageKey];
    if(pack){
      var lang = langKey();
      return imageBasePrefix() + 'assets/illustrations/lessons/' + (pack[lang] || pack.en || fallbackFile);
    }
    return imageBasePrefix() + 'assets/illustrations/lessons/' + fallbackFile;
  }

  function displayText(value){
    if(value == null) return '';
    if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
    if(Array.isArray(value)){
      return value.map(displayText).filter(Boolean).join(' / ');
    }
    if(typeof value === 'object'){
      var lang = langKey();
      var keys = [lang, 'text', 'label', 'title', 'description', 'desc', 'body', 'name', 'term', 'value', 'en', 'ko'];
      for(var i = 0; i < keys.length; i++){
        var next = value[keys[i]];
        if(next == null || next === value) continue;
        var text = displayText(next);
        if(text) return text;
      }
      return '';
    }
    return String(value);
  }

  function displayField(value, index, keys){
    if(Array.isArray(value)) return displayText(value[index]);
    if(value && typeof value === 'object'){
      var list = keys || (index === 0
        ? ['label','title','name','term','key','heading','text']
        : index === 1
          ? ['value','body','description','desc','summary','text','label','title']
          : ['description','desc','body','summary','value','text']);
      for(var i = 0; i < list.length; i++){
        if(value[list[i]] == null || value[list[i]] === value) continue;
        var text = displayText(value[list[i]]);
        if(text) return text;
      }
    }
    return displayText(value);
  }

  function esc(value){
    return displayText(value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  var relatedResourceUi = {
    en:{ glossaryLabel:'Glossary', checklistTitle:'Safety checklist', checklistDesc:'Review the key checks before acting.', glossaryTitle:'Key terms', glossaryDesc:'Review terms from this lesson.', pdfTitle:'Coin ProofPath safety PDF', pdfDesc:'Save a quick review sheet.', sourcesTitle:'Intermediate Roadmap resources', sourcesDesc:'Continue with references and checklists.', ebookTitle:'Coin ProofPath summary guide', ebookDesc:'Review the key ideas in a structured format.', openChecklist:'Open checklist', openGlossary:'Open glossary', openPdf:'Open PDF', openSources:'Open resources', openEbook:'View eBook' },
    ko:{ glossaryLabel:'용어사전', checklistTitle:'안전 체크리스트', checklistDesc:'행동하기 전 핵심 확인 항목을 다시 봅니다.', glossaryTitle:'핵심 용어 다시 보기', glossaryDesc:'이 강의에서 나온 용어를 짧게 정리합니다.', pdfTitle:'Coin ProofPath 안전 PDF', pdfDesc:'핵심 내용을 저장용 자료로 다시 봅니다.', sourcesTitle:'중급자 로드맵 자료', sourcesDesc:'비교, 검증, 위험 확인 자료를 이어서 봅니다.', ebookTitle:'Coin ProofPath 요약 자료', ebookDesc:'핵심 내용을 전자책 형태로 정리해 봅니다.', openChecklist:'체크리스트 열기', openGlossary:'용어 보기', openPdf:'PDF 보기', openSources:'자료 열기', openEbook:'전자책 보기' },
    th:{ glossaryLabel:'คำศัพท์', checklistTitle:'เช็กลิสต์ความปลอดภัย', checklistDesc:'ทบทวนจุดตรวจสำคัญก่อนลงมือทำ', glossaryTitle:'ทบทวนคำสำคัญ', glossaryDesc:'ดูคำศัพท์จากบทเรียนนี้แบบสั้น ๆ', pdfTitle:'PDF ความปลอดภัย Coin ProofPath', pdfDesc:'เก็บสรุปสั้น ๆ ไว้ทบทวน', sourcesTitle:'แหล่งข้อมูลโรดแมประดับกลาง', sourcesDesc:'ดูเอกสารอ้างอิงและเช็กลิสต์ต่อ', ebookTitle:'คู่มือสรุป Coin ProofPath', ebookDesc:'ทบทวนแนวคิดหลักเป็นลำดับ', openChecklist:'เปิดเช็กลิสต์', openGlossary:'ดูคำศัพท์', openPdf:'เปิด PDF', openSources:'เปิดแหล่งข้อมูล', openEbook:'ดู eBook' },
    id:{ glossaryLabel:'Glosarium', checklistTitle:'Checklist keamanan', checklistDesc:'Tinjau cek utama sebelum bertindak.', glossaryTitle:'Istilah kunci', glossaryDesc:'Ulangi istilah dari pelajaran ini.', pdfTitle:'PDF keamanan Coin ProofPath', pdfDesc:'Simpan ringkasan singkat.', sourcesTitle:'Resource Roadmap Menengah', sourcesDesc:'Lanjutkan dengan referensi dan checklist.', ebookTitle:'Panduan ringkas Coin ProofPath', ebookDesc:'Tinjau ide utama secara terstruktur.', openChecklist:'Buka checklist', openGlossary:'Buka glosarium', openPdf:'Buka PDF', openSources:'Buka resource', openEbook:'Lihat eBook' },
    pt:{ glossaryLabel:'Glossário', checklistTitle:'Checklist de segurança', checklistDesc:'Revise os pontos principais antes de agir.', glossaryTitle:'Termos-chave', glossaryDesc:'Revise os termos desta lição.', pdfTitle:'PDF de segurança Coin ProofPath', pdfDesc:'Salve um resumo rápido.', sourcesTitle:'Recursos do roteiro intermediário', sourcesDesc:'Continue com referências e checklists.', ebookTitle:'Guia resumido Coin ProofPath', ebookDesc:'Revise as ideias principais em ordem.', openChecklist:'Abrir checklist', openGlossary:'Abrir glossário', openPdf:'Abrir PDF', openSources:'Abrir recursos', openEbook:'Ver eBook' },
    br:{ glossaryLabel:'Glossário', checklistTitle:'Checklist de segurança', checklistDesc:'Revise os pontos principais antes de agir.', glossaryTitle:'Termos-chave', glossaryDesc:'Revise os termos desta lição.', pdfTitle:'PDF de segurança Coin ProofPath', pdfDesc:'Salve um resumo rápido.', sourcesTitle:'Recursos do roteiro intermediário', sourcesDesc:'Continue com referências e checklists.', ebookTitle:'Guia resumido Coin ProofPath', ebookDesc:'Revise as ideias principais em ordem.', openChecklist:'Abrir checklist', openGlossary:'Abrir glossário', openPdf:'Abrir PDF', openSources:'Abrir recursos', openEbook:'Ver eBook' },
    tr:{ glossaryLabel:'Sözlük', checklistTitle:'Güvenlik kontrol listesi', checklistDesc:'Harekete geçmeden önce ana kontrolleri gözden geçir.', glossaryTitle:'Temel terimler', glossaryDesc:'Bu dersteki terimleri tekrar et.', pdfTitle:'Coin ProofPath güvenlik PDF', pdfDesc:'Kısa özeti sakla.', sourcesTitle:'Orta seviye yol haritası kaynakları', sourcesDesc:'Referanslar ve kontrol listeleriyle devam et.', ebookTitle:'Coin ProofPath özet rehberi', ebookDesc:'Ana fikirleri düzenli biçimde gözden geçir.', openChecklist:'Kontrol listesini aç', openGlossary:'Sözlüğü aç', openPdf:'PDF aç', openSources:'Kaynakları aç', openEbook:'eBook görüntüle' },
    es:{ glossaryLabel:'Glosario', checklistTitle:'Checklist de seguridad', checklistDesc:'Revisa los puntos clave antes de actuar.', glossaryTitle:'Términos clave', glossaryDesc:'Repasa los términos de esta lección.', pdfTitle:'PDF de seguridad Coin ProofPath', pdfDesc:'Guarda un resumen rápido.', sourcesTitle:'Recursos de la ruta intermedia', sourcesDesc:'Continúa con referencias y checklists.', ebookTitle:'Guía resumida Coin ProofPath', ebookDesc:'Repasa las ideas clave en orden.', openChecklist:'Abrir checklist', openGlossary:'Abrir glosario', openPdf:'Abrir PDF', openSources:'Abrir recursos', openEbook:'Ver eBook' },
    ar:{ glossaryLabel:'المسرد', checklistTitle:'قائمة تحقق السلامة', checklistDesc:'راجع أهم نقاط الفحص قبل التصرف.', glossaryTitle:'المصطلحات الأساسية', glossaryDesc:'راجع مصطلحات هذا الدرس.', pdfTitle:'PDF سلامة Coin ProofPath', pdfDesc:'احفظ ملخصا سريعا للمراجعة.', sourcesTitle:'موارد خارطة الطريق المتوسطة', sourcesDesc:'تابع المراجع وقوائم التحقق.', ebookTitle:'دليل ملخص Coin ProofPath', ebookDesc:'راجع الأفكار الأساسية بترتيب.', openChecklist:'افتح قائمة التحقق', openGlossary:'افتح المسرد', openPdf:'افتح PDF', openSources:'افتح الموارد', openEbook:'عرض الكتاب' },
    vi:{ glossaryLabel:'Thuật ngữ', checklistTitle:'Checklist an toàn', checklistDesc:'Xem lại các điểm kiểm tra trước khi làm.', glossaryTitle:'Thuật ngữ chính', glossaryDesc:'Ôn lại thuật ngữ trong bài này.', pdfTitle:'PDF an toàn Coin ProofPath', pdfDesc:'Lưu bản tóm tắt nhanh.', sourcesTitle:'Tài nguyên lộ trình trung cấp', sourcesDesc:'Xem tiếp tài liệu tham khảo và checklist.', ebookTitle:'Hướng dẫn tóm tắt Coin ProofPath', ebookDesc:'Ôn các ý chính theo thứ tự.', openChecklist:'Mở checklist', openGlossary:'Mở thuật ngữ', openPdf:'Mở PDF', openSources:'Mở tài nguyên', openEbook:'Xem eBook' },
    ha:{ glossaryLabel:'Kamus', checklistTitle:'Jerin duba tsaro', checklistDesc:'Duba muhimman abubuwa kafin ka yi aiki.', glossaryTitle:'Muhimman kalmomi', glossaryDesc:'Sake duba kalmomin wannan darasi.', pdfTitle:'PDF tsaro na Coin ProofPath', pdfDesc:'Ajiye takaitaccen bayani.', sourcesTitle:'Albarkatun hanyar matsakaici', sourcesDesc:'Ci gaba da nassoshi da jerin dubawa.', ebookTitle:'Takaitaccen jagora Coin ProofPath', ebookDesc:'Sake duba manyan raayoyi a tsari.', openChecklist:'Bude jerin dubawa', openGlossary:'Bude kamus', openPdf:'Bude PDF', openSources:'Bude albarkatu', openEbook:'Duba eBook' }
  };

  function relatedCopy(lang){
    return relatedResourceUi[lang] || relatedResourceUi.en;
  }

  function renderRelatedResourceCard(href, label, title, desc, linkText){
    return '<a class="source-card related-resource-card" href="' + esc(href || '#') + '">'
      + '<span class="related-card-label">' + esc(label) + '</span>'
      + '<strong class="related-card-title">' + esc(title) + '</strong>'
      + '<span class="related-card-desc">' + esc(desc) + '</span>'
      + '<span class="related-card-link">' + esc(linkText) + '</span>'
      + '</a>';
  }

  var packs = {
    en:{
      trackTitle:'Intermediate Roadmap',
      trackDesc:'After the basics, continue with practical lessons on networks, fees, wallets, DeFi, bridges, and verification.',
      trackCta:'Start Intermediate Roadmap',
      sidebar:'Intermediate Roadmap',
      badge:'Roadmap',
      visual:'Practice visual',
      relatedTitle:'Related practical resources',
      relatedFree:'Free checklist / PDF',
      relatedDeep:'Structured eBook review',
      relatedSources:'Source Library',
      sourceLabel:'Intermediate practice',
      day:function(n){ return 'Lesson ' + n; },
      headings:['One-line key idea','Easy explanation','Real situation','Where people make mistakes','What to check now'],
      lessons:[
        {cat:'Custody',title:'How to Use Exchanges and Wallets Together',sub:'Balance convenience and control',one:'Use exchanges for buying and wallets for control, but know why each one exists.',easy:'An exchange account is convenient for buying, selling, and fiat deposits. A self-custody wallet gives you more control, but also more responsibility for keys and recovery.',scenario:'A beginner may buy on an exchange, keep a small active amount there, and move long-term holdings to a wallet only after learning seed phrase safety.',mistake:'The common mistake is treating an exchange account and a wallet as the same thing. They are not: one is a platform account, the other controls keys.',check:'Decide what is for trading, what is for holding, and what you can safely recover if your phone or account is lost.',terms:[['Exchange','A platform account used to buy, sell, deposit, and withdraw crypto.'],['Self-custody','A setup where you control the wallet keys yourself.'],['Custody risk','The risk created by whoever controls access to assets.']],points:['Separate active funds from long-term funds','Do not move everything before learning recovery','Keep seed phrase safety first'],visual:['Exchange for buying','Wallet for control','Recovery plan','Small test first']},
        {cat:'Networks',title:'How to Compare Networks and Fees in Practice',sub:'Compare fee, speed, and mistake risk',one:'The same asset name can exist on several networks, so compare the network before you send.',easy:'USDT on ERC20, TRC20, BEP20, or SOL may look like the same token name, but the network is different. Fees, speed, supported wallets, and mistake risk can all change.',scenario:'Before sending USDT, compare the network shown by the sender and the receiver. If the receiving platform does not support that network, do not send.',mistake:'Many losses happen because people choose the cheapest network without confirming whether the destination supports it.',check:'Match asset, network, address, fee, minimum amount, and memo or tag requirements before every transfer.',terms:[['Network','The chain where the transaction actually moves.'],['Fee','The cost paid to process the transfer.'],['Memo / tag','Extra text some destinations require to credit a deposit.']],points:['Match sender and receiver network','Check fee and minimum amount','Use a small test when unsure'],visual:['ERC20 higher fee','TRC20 lower fee','BEP20 needs support','SOL fast but separate']},
        {cat:'Stablecoins',title:'How Stablecoins Differ and What to Watch Out For',sub:'Look beyond one-dollar pricing',one:'Stablecoins may aim for a similar price, but their trust structure and risk are not identical.',easy:'USDT, USDC, and DAI are all used like digital dollars, but they rely on different issuers, reserves, mechanisms, and ecosystems.',scenario:'If you hold stablecoins for payments, transfers, or waiting between trades, you should know what backs the coin and where it is most commonly supported.',mistake:'The mistake is thinking every stablecoin has the same risk just because the price looks close to one dollar.',check:'Check issuer, reserves, network support, liquidity, and whether the stablecoin is centralized, decentralized, or algorithmic.',terms:[['Stablecoin','A token designed to keep a stable reference value.'],['Reserve','Assets that support the value of some stablecoins.'],['Depeg','When the market price moves away from the intended reference value.']],points:['Compare issuer and reserve model','Check liquidity before moving size','Do not ignore depeg risk'],visual:['USDT support','USDC reserve focus','DAI crypto-backed','Depeg watch']},
        {cat:'DeFi',title:'What to Understand First When Entering DeFi',sub:'Connect, approve, sign, and swap safely',one:'In DeFi, the dangerous part is often not the page design but what your wallet is asked to approve or sign.',easy:'Wallet connect opens a connection. Approve gives a contract permission. Sign confirms a message or action. Swap exchanges one asset for another.',scenario:'When using a swap page, slow down at every wallet popup. Read the asset, spender, amount, and action before confirming.',mistake:'A common mistake is approving unlimited token access on a site you barely checked.',check:'Verify the domain, read wallet requests, limit approvals when possible, and disconnect or revoke permissions you no longer need.',terms:[['Connect','Allowing a site to see your wallet address.'],['Approve','Giving a contract permission to use a token.'],['Slippage','The allowed price movement during a swap.']],points:['Verify the site before connecting','Read approve and sign requests','Start with small amounts'],visual:['Connect wallet','Approve token','Sign action','Swap with slippage']},
        {cat:'Projects',title:'What Actually Matters When Evaluating NFT and Token Projects',sub:'Look past image, hype, and promises',one:'A project is more than artwork or a loud community. Check activity, liquidity, utility, team behavior, and sustainability.',easy:'NFT and token projects can look exciting on the surface. The practical question is whether real users, real activity, and realistic incentives exist.',scenario:'Before buying into a project, compare its public links, holder distribution, trading activity, roadmap quality, and whether claims can be verified.',mistake:'The mistake is buying because of hype, celebrity posts, or a floor price chart without checking the project substance.',check:'Review utility, activity, liquidity, token distribution, contract address, official links, and warning signs.',terms:[['Liquidity','How easily something can be bought or sold.'],['Utility','A practical use or access benefit.'],['Roadmap','A project plan that should be realistic and verifiable.']],points:['Do not buy hype alone','Check official links and activity','Look for sustainable utility'],visual:['Hype is not proof','Activity matters','Liquidity matters','Verify claims']},
        {cat:'Bridge',title:'Why Bridges and Multichain Systems Matter — and Why They Confuse People',sub:'Moving across chains changes the risk',one:'A bridge is not a normal send. It moves value between ecosystems, so the contract, route, chain, and destination all matter.',easy:'Multichain makes crypto flexible, but every extra chain and bridge adds another place to make a mistake or face smart contract risk.',scenario:'If you bridge an asset, confirm source chain, destination chain, asset version, wallet support, fees, and expected arrival process.',mistake:'People often bridge to a chain their wallet or app is not ready to use, then think the asset disappeared.',check:'Check both chains, the bridge URL, the asset version, destination support, fees, and whether a small test is possible.',terms:[['Bridge','A tool that moves value or messages between chains.'],['Source chain','The chain you start from.'],['Destination chain','The chain where you expect the asset to arrive.']],points:['Confirm source and destination chain','Use official bridge links','Expect bridge-specific risk'],visual:['Source chain','Bridge contract','Destination chain','Confirm asset version']},
        {cat:'Verification',title:'How to Verify Information Before You Trust It',sub:'Build a repeatable verification routine',one:'Do not trust one post, one screenshot, or one DM. Verify in a repeatable order before acting.',easy:'Crypto information moves fast. A simple verification routine helps you slow down: official source, domain, contract address, community cross-check, and final review.',scenario:'Before joining an airdrop, mint, bridge, or new token, open the official site yourself and compare every important detail against multiple sources.',mistake:'The mistake is trusting the first link that appears in ads, search results, or direct messages.',check:'Verify official accounts, domains, contract addresses, documentation, community warnings, and whether the action asks for wallet control.',terms:[['Official source','The verified account, document, or website controlled by the project.'],['Contract address','The on-chain address of a token or smart contract.'],['Cross-check','Comparing information across more than one trustworthy source.']],points:['Start from official sources','Compare domains and contracts','Pause before wallet actions'],visual:['Official source','Domain check','Contract check','Community cross-check']}
      ]
    },
    ko:{
      trackTitle:'중급자 로드맵',
      trackDesc:'기초를 끝냈다면, 이제 네트워크, 수수료, 지갑, DeFi, 브리지, 정보 검증을 실제 상황에서 비교하고 판단하는 단계로 넘어가세요.',
      trackCta:'중급자 로드맵 시작하기',
      sidebar:'중급자 로드맵',
      badge:'로드맵',
      visual:'실전 시각 자료',
      relatedTitle:'함께 볼 실전 자료',
      relatedFree:'무료 체크리스트 / PDF',
      relatedDeep:'전자책으로 정리 보기',
      relatedSources:'자료 라이브러리',
      sourceLabel:'중급 실전 자료',
      day:function(n){ return n + '강'; },
      headings:['한 줄 핵심','쉬운 설명','실제 상황 예시','어디서 실수하는가','지금 확인할 것'],
      lessons:[
        {cat:'보관',title:'거래소와 지갑을 어떻게 나눠서 써야 하는가',sub:'편의성과 통제권의 균형 잡기',one:'거래소는 사고팔기 편한 곳이고, 지갑은 내가 통제권을 더 많이 갖는 곳입니다.',easy:'거래소 계정은 입금, 구매, 판매가 쉽습니다. 자기보관 지갑은 통제권이 커지지만 시드 문구와 복구 책임도 함께 커집니다.',scenario:'처음에는 거래소에서 소액으로 시작하고, 장기 보관할 금액은 시드 문구 안전을 이해한 뒤 지갑으로 옮기는 식으로 나눌 수 있습니다.',mistake:'가장 흔한 실수는 거래소 계정과 지갑을 같은 것으로 생각하는 것입니다. 하나는 플랫폼 계정이고, 하나는 키를 관리하는 도구입니다.',check:'매매용 금액, 장기 보관 금액, 잃어버렸을 때 복구 가능한 구조를 분리해 생각하세요.',terms:[['거래소','암호화폐를 사고팔고 입출금할 수 있는 플랫폼 계정입니다.'],['자기보관','내가 지갑 키와 복구 정보를 직접 관리하는 방식입니다.'],['보관 리스크','자산 접근 권한을 누가 갖고 있는지에서 생기는 위험입니다.']],points:['매매용과 장기 보관용을 분리하기','복구 방법을 배우기 전 전부 옮기지 않기','시드 문구 안전을 먼저 확인하기'],visual:['거래소는 구매용','지갑은 통제권','복구 계획','소액 테스트']},
        {cat:'네트워크',title:'네트워크와 수수료를 실제로 비교하는 법',sub:'수수료, 속도, 실수 위험 비교',one:'같은 코인 이름이라도 네트워크가 다르면 전송 결과가 완전히 달라질 수 있습니다.',easy:'USDT가 ERC20, TRC20, BEP20, SOL 같은 여러 네트워크에 있을 수 있습니다. 수수료, 속도, 지원 지갑, 실수 위험이 모두 달라집니다.',scenario:'USDT를 보내기 전 보내는 곳과 받는 곳의 네트워크 표시가 같은지 먼저 확인해야 합니다. 받는 곳이 지원하지 않는 네트워크라면 보내면 안 됩니다.',mistake:'가장 싼 네트워크만 보고 목적지가 그 네트워크를 지원하는지 확인하지 않는 실수가 많습니다.',check:'자산, 네트워크, 주소, 수수료, 최소 금액, 메모나 태그 필요 여부를 전송 전 함께 확인하세요.',terms:[['네트워크','거래가 실제로 이동하는 체인입니다.'],['수수료','거래를 처리하기 위해 내는 네트워크 비용입니다.'],['메모 / 태그','일부 거래소 입금에서 필요한 추가 식별값입니다.']],points:['보내는 곳과 받는 곳의 네트워크 일치','수수료와 최소 금액 확인','불확실하면 소액 테스트'],visual:['ERC20 수수료 높음','TRC20 수수료 낮음','BEP20 지원 확인','SOL 별도 네트워크']},
        {cat:'스테이블코인',title:'스테이블코인은 어떻게 다르고 무엇을 조심해야 하는가',sub:'1달러처럼 보이는 것 너머 보기',one:'스테이블코인은 비슷한 가격을 목표로 하지만 신뢰 구조와 위험은 서로 다릅니다.',easy:'USDT, USDC, DAI는 모두 디지털 달러처럼 쓰이지만 발행 주체, 담보, 작동 방식, 많이 쓰이는 생태계가 다릅니다.',scenario:'결제, 전송, 대기 자금으로 스테이블코인을 쓴다면 무엇이 그 가치를 뒷받침하는지와 어느 네트워크에서 많이 쓰이는지 알아야 합니다.',mistake:'가격이 1달러 근처라고 해서 모든 스테이블코인의 위험이 같다고 생각하는 것이 실수입니다.',check:'발행 주체, 준비금, 네트워크 지원, 유동성, 중앙화 또는 탈중앙화 구조를 확인하세요.',terms:[['스테이블코인','안정적인 기준 가격을 목표로 설계된 토큰입니다.'],['준비금','일부 스테이블코인의 가치를 뒷받침하는 자산입니다.'],['디페그','시장 가격이 목표 기준 가격에서 벗어나는 상황입니다.']],points:['발행 주체와 담보 구조 비교','큰 금액 전 유동성 확인','디페그 위험 무시하지 않기'],visual:['USDT 지원 범위','USDC 준비금 중심','DAI 암호자산 담보','디페그 확인']},
        {cat:'DeFi',title:'DeFi를 처음 볼 때 무엇부터 이해해야 하는가',sub:'connect, approve, sign, swap 구분',one:'DeFi에서 위험한 부분은 화면보다 지갑이 무엇을 승인하거나 서명하라고 하는지입니다.',easy:'connect는 사이트와 지갑을 연결하는 것, approve는 컨트랙트에 토큰 사용 권한을 주는 것, sign은 메시지나 행동에 서명하는 것입니다.',scenario:'스왑 페이지를 쓸 때는 지갑 팝업마다 자산, 권한 대상, 금액, 행동 내용을 읽고 확인해야 합니다.',mistake:'검증하지 않은 사이트에서 무제한 approve를 허용하는 것이 대표적인 위험입니다.',check:'도메인을 확인하고, 지갑 요청 내용을 읽고, 가능하면 승인 한도를 줄이고, 쓰지 않는 권한은 해제하세요.',terms:[['Connect','사이트가 내 지갑 주소를 볼 수 있게 연결하는 단계입니다.'],['Approve','컨트랙트가 특정 토큰을 사용할 수 있게 권한을 주는 단계입니다.'],['Slippage','스왑 중 허용하는 가격 변동 폭입니다.']],points:['연결 전 사이트 확인','approve와 sign 요청 읽기','처음에는 소액으로 테스트'],visual:['지갑 연결','토큰 승인','서명 확인','스왑 실행']},
        {cat:'프로젝트 판단',title:'NFT와 토큰 프로젝트를 볼 때 진짜 확인해야 할 것',sub:'이미지와 hype 너머 확인하기',one:'프로젝트는 이미지나 커뮤니티 소리만으로 판단하지 말고 활동성, 유동성, 유틸리티, 지속성을 봐야 합니다.',easy:'NFT나 토큰 프로젝트는 겉으로 화려해 보일 수 있습니다. 실제로는 사용자가 있는지, 거래가 있는지, 약속이 현실적인지 확인해야 합니다.',scenario:'프로젝트에 들어가기 전 공식 링크, 홀더 분포, 거래 활동, 로드맵, 주장 검증 가능성을 함께 봅니다.',mistake:'유명인 언급, 바닥가 차트, 커뮤니티 분위기만 보고 매수하는 것이 흔한 실수입니다.',check:'유틸리티, 활동성, 유동성, 토큰 분배, 컨트랙트 주소, 공식 링크, 경고 신호를 확인하세요.',terms:[['유동성','쉽게 사고팔 수 있는 정도입니다.'],['유틸리티','실제 사용처나 접근 권한 같은 기능입니다.'],['로드맵','현실적이고 검증 가능한 프로젝트 계획이어야 합니다.']],points:['hype만 보고 사지 않기','공식 링크와 활동성 확인','지속 가능한 유틸리티 보기'],visual:['hype는 증거가 아님','활동성 확인','유동성 확인','주장 검증']},
        {cat:'브리지',title:'브리지와 멀티체인은 왜 어렵고 왜 중요한가',sub:'체인을 넘을 때 위험도 바뀜',one:'브리지는 일반 전송이 아니라 서로 다른 생태계 사이에서 자산을 이동시키는 작업입니다.',easy:'멀티체인은 편리하지만 체인과 브리지가 하나 더 늘어날 때마다 실수 지점과 컨트랙트 위험도 함께 늘어납니다.',scenario:'브리지를 쓸 때는 출발 체인, 도착 체인, 자산 버전, 지갑 지원, 수수료, 도착 과정을 확인해야 합니다.',mistake:'지갑이나 앱이 준비되지 않은 체인으로 브리지한 뒤 자산이 사라졌다고 착각하는 경우가 많습니다.',check:'양쪽 체인, 브리지 URL, 자산 버전, 도착지 지원, 수수료, 소액 테스트 가능 여부를 확인하세요.',terms:[['브리지','서로 다른 체인 사이에서 자산이나 메시지를 이동시키는 도구입니다.'],['출발 체인','자산이 출발하는 체인입니다.'],['도착 체인','자산이 도착해야 하는 체인입니다.']],points:['출발/도착 체인 확인','공식 브리지 링크 사용','브리지 특유의 위험 고려'],visual:['출발 체인','브리지 컨트랙트','도착 체인','자산 버전 확인']},
        {cat:'검증',title:'정보를 믿기 전에 어떤 순서로 검증해야 하는가',sub:'반복 가능한 검증 루틴 만들기',one:'게시글 하나, 캡처 하나, DM 하나만 믿지 말고 정해진 순서로 검증해야 합니다.',easy:'암호화폐 정보는 빠르게 퍼집니다. 공식 출처, 도메인, 컨트랙트 주소, 커뮤니티 교차 확인, 최종 검토 순서가 필요합니다.',scenario:'에어드롭, 민팅, 브리지, 새 토큰에 참여하기 전에는 공식 사이트를 직접 열고 중요한 정보를 여러 출처와 비교하세요.',mistake:'광고, 검색 결과, DM에 처음 뜬 링크를 바로 믿는 것이 가장 위험합니다.',check:'공식 계정, 도메인, 컨트랙트 주소, 문서, 커뮤니티 경고, 지갑 통제권을 요구하는 행동인지 확인하세요.',terms:[['공식 출처','프로젝트가 직접 관리하는 계정, 문서, 웹사이트입니다.'],['컨트랙트 주소','토큰이나 스마트 컨트랙트의 온체인 주소입니다.'],['교차 검증','여러 신뢰 가능한 출처에서 같은 정보를 비교하는 과정입니다.']],points:['공식 출처에서 시작','도메인과 컨트랙트 비교','지갑 행동 전 멈추기'],visual:['공식 출처','도메인 확인','컨트랙트 확인','커뮤니티 교차 확인']}
      ]
    }
  };

  var compactPacks = {
    th:{trackTitle:'แผนการเรียนระดับกลาง',trackDesc:'หลังจากพื้นฐาน ต่อด้วยการดูแลสินทรัพย์ เครือข่าย DeFi บริดจ์ โปรเจกต์ และการตรวจสอบข้อมูล.',trackCta:'เริ่มแผนการเรียนระดับกลาง',sidebar:'แผนการเรียนระดับกลาง',badge:'โรดแมป',visual:'ภาพฝึกปฏิบัติ',relatedTitle:'แหล่งข้อมูลที่เกี่ยวข้อง',relatedFree:'เช็กลิสต์ / PDF ฟรี',relatedDeep:'ทบทวนด้วย eBook',relatedSources:'คลังแหล่งข้อมูล',sourceLabel:'แผนการเรียนระดับกลาง',day:function(n){return 'บทที่ '+n},headings:['ใจความหลัก','คำอธิบายง่าย','สถานการณ์จริง','จุดที่มักพลาด','สิ่งที่ต้องตรวจตอนนี้'],titles:['ใช้ Exchange และ Wallet ร่วมกันอย่างไร','เปรียบเทียบเครือข่ายและค่าธรรมเนียมจริง','Stablecoin ต่างกันอย่างไรและต้องระวังอะไร','เริ่มเข้าใจ DeFi จากอะไรก่อน','สิ่งที่ต้องดูจริงใน NFT และ Token Project','ทำไม Bridge และ Multichain จึงสำคัญและสับสน','ตรวจสอบข้อมูลอย่างไรก่อนเชื่อ'],subs:['สมดุลระหว่างความสะดวกและการควบคุม','ดูค่าธรรมเนียม ความเร็ว และความเสี่ยง','มองให้ไกลกว่าราคาใกล้หนึ่งดอลลาร์','แยก connect approve sign swap','ดูมากกว่ารูปและกระแส','ย้ายข้าม chain อย่างระวัง','สร้างลำดับการตรวจสอบซ้ำได้']},
    id:{trackTitle:'Roadmap Menengah',trackDesc:'Setelah roadmap pemula, lanjutkan ke kustodi, jaringan, DeFi, bridge, proyek, dan verifikasi informasi.',trackCta:'Mulai roadmap menengah',sidebar:'Roadmap Menengah',badge:'Roadmap',visual:'Visual praktik',relatedTitle:'Resource praktik terkait',relatedFree:'Checklist / PDF gratis',relatedDeep:'Review eBook terstruktur',relatedSources:'Source Library',sourceLabel:'Roadmap menengah',day:function(n){return 'Pelajaran '+n},headings:['Ide utama','Penjelasan mudah','Situasi nyata','Di mana orang salah','Yang dicek sekarang'],titles:['Cara memakai exchange dan wallet bersama','Cara membandingkan jaringan dan biaya','Perbedaan stablecoin dan hal yang perlu diawasi','Hal pertama yang dipahami saat masuk DeFi','Yang benar-benar penting saat menilai NFT dan token','Mengapa bridge dan multichain penting dan membingungkan','Cara memverifikasi informasi sebelum dipercaya'],subs:['Seimbangkan praktis dan kontrol','Bandingkan biaya, cepat, dan risiko salah','Jangan hanya melihat harga satu dolar','Pahami connect approve sign swap','Lihat lebih dari gambar dan hype','Risiko berubah saat pindah chain','Bangun rutinitas verifikasi']},
    pt:{trackTitle:'Roteiro Intermediário',trackDesc:'Depois do roteiro iniciante, avance para custódia, redes, DeFi, bridges, projetos e verificação de informações.',trackCta:'Começar roteiro intermediário',sidebar:'Roteiro Intermediário',badge:'Roteiro',visual:'Visual prático',relatedTitle:'Recursos práticos relacionados',relatedFree:'Checklist / PDF gratuito',relatedDeep:'Revisão estruturada no eBook',relatedSources:'Biblioteca de Fontes',sourceLabel:'Roteiro intermediário',day:function(n){return 'Lição '+n},headings:['Ideia principal','Explicação simples','Situação real','Onde as pessoas erram','O que verificar agora'],titles:['Como usar exchanges e carteiras juntas','Como comparar redes e taxas na prática','Como stablecoins diferem e o que observar','O que entender primeiro ao entrar em DeFi','O que realmente importa ao avaliar NFTs e tokens','Por que bridges e multichain importam e confundem','Como verificar informações antes de confiar'],subs:['Equilibre conveniência e controle','Compare taxa, velocidade e risco','Vá além do preço de um dólar','Entenda connect approve sign swap','Veja além da imagem e do hype','O risco muda entre chains','Crie uma rotina de verificação']},
    br:{trackTitle:'Roteiro Intermediário',trackDesc:'Depois do roteiro iniciante, avance para custódia, redes, DeFi, bridges, projetos e verificação de informações.',trackCta:'Começar roteiro intermediário',sidebar:'Roteiro Intermediário',badge:'Roteiro',visual:'Visual prático',relatedTitle:'Recursos práticos relacionados',relatedFree:'Checklist / PDF gratuito',relatedDeep:'Revisão estruturada no eBook',relatedSources:'Biblioteca de Fontes',sourceLabel:'Roteiro intermediário',day:function(n){return 'Lição '+n},headings:['Ideia principal','Explicação simples','Situação real','Onde as pessoas erram','O que verificar agora'],titles:['Como usar exchanges e carteiras juntas','Como comparar redes e taxas na prática','Como stablecoins diferem e o que observar','O que entender primeiro ao entrar em DeFi','O que realmente importa ao avaliar NFTs e tokens','Por que bridges e multichain importam e confundem','Como verificar informações antes de confiar'],subs:['Equilibre conveniência e controle','Compare taxa, velocidade e risco','Vá além do preço de um dólar','Entenda connect approve sign swap','Veja além da imagem e do hype','O risco muda entre chains','Crie uma rotina de verificação']},
    tr:{trackTitle:'Orta Seviye Yol Haritası',trackDesc:'Başlangıç yolundan sonra saklama, ağlar, DeFi, köprüler, projeler ve bilgi doğrulama ile devam edin.',trackCta:'Orta seviye yol haritasına başla',sidebar:'Orta Seviye Yol Haritası',badge:'Yol haritası',visual:'Pratik görsel',relatedTitle:'İlgili pratik kaynaklar',relatedFree:'Ücretsiz checklist / PDF',relatedDeep:'eBook ile düzenli tekrar',relatedSources:'Kaynak Kütüphanesi',sourceLabel:'Orta seviye yol haritası',day:function(n){return 'Ders '+n},headings:['Tek cümlelik fikir','Kolay açıklama','Gerçek durum','Hata yapılan yer','Şimdi kontrol et'],titles:['Borsa ve cüzdan birlikte nasıl kullanılır','Ağlar ve ücretler pratikte nasıl karşılaştırılır','Stablecoinler nasıl farklıdır ve neye dikkat edilir','DeFiye girerken önce ne anlaşılmalı','NFT ve token projelerinde gerçekten önemli olanlar','Köprüler ve multichain neden önemli ve kafa karıştırıcı','Güvenmeden önce bilgi nasıl doğrulanır'],subs:['Kolaylık ve kontrol dengesi','Ücret, hız ve hata riskini karşılaştır','Bir dolarlık fiyattan ötesine bak','Connect approve sign swap ayrımı','Görsel ve hype ötesine bak','Zincir değişince risk değişir','Tekrarlanabilir doğrulama rutini']},
    es:{trackTitle:'Ruta Intermedia',trackDesc:'Después de la ruta inicial, continúa con custodia, redes, DeFi, bridges, proyectos y verificación de información.',trackCta:'Iniciar ruta intermedia',sidebar:'Ruta Intermedia',badge:'Ruta',visual:'Visual práctico',relatedTitle:'Recursos prácticos relacionados',relatedFree:'Checklist / PDF gratis',relatedDeep:'Repaso estructurado en eBook',relatedSources:'Biblioteca de Fuentes',sourceLabel:'Ruta intermedia',day:function(n){return 'Lección '+n},headings:['Idea clave','Explicación simple','Situación real','Dónde se cometen errores','Qué revisar ahora'],titles:['Cómo usar exchanges y billeteras juntos','Cómo comparar redes y comisiones en la práctica','Cómo difieren las stablecoins y qué vigilar','Qué entender primero al entrar en DeFi','Qué importa realmente al evaluar NFT y tokens','Por qué bridges y multichain importan y confunden','Cómo verificar información antes de confiar'],subs:['Equilibra comodidad y control','Compara comisión, velocidad y riesgo','Mira más allá del precio de un dólar','Entiende connect approve sign swap','Mira más allá de imagen e hype','El riesgo cambia entre cadenas','Crea una rutina de verificación']},
    ar:{trackTitle:'خارطة طريق متوسطة',trackDesc:'بعد خارطة المبتدئين، تابع الحفظ والشبكات وDeFi والجسور والمشاريع والتحقق من المعلومات.',trackCta:'ابدأ خارطة الطريق المتوسطة',sidebar:'خارطة طريق متوسطة',badge:'خارطة طريق',visual:'رسم عملي',relatedTitle:'موارد عملية مرتبطة',relatedFree:'قائمة تحقق / PDF مجاني',relatedDeep:'مراجعة منظمة في الكتاب',relatedSources:'مكتبة المصادر',sourceLabel:'خارطة طريق متوسطة',day:function(n){return 'الدرس '+n},headings:['الفكرة الأساسية','شرح بسيط','موقف حقيقي','أين يحدث الخطأ','ما الذي تفحصه الآن'],titles:['كيف تستخدم المنصات والمحافظ معا','كيف تقارن الشبكات والرسوم عمليا','كيف تختلف العملات المستقرة وما الذي تنتبه له','ما الذي تفهمه أولا عند دخول DeFi','ما المهم فعلا عند تقييم NFT والتوكنات','لماذا الجسور وتعدد الشبكات مهم ومربك','كيف تتحقق من المعلومات قبل الثقة بها'],subs:['وازن بين السهولة والتحكم','قارن الرسوم والسرعة وخطر الخطأ','انظر أبعد من سعر الدولار','افهم connect approve sign swap','انظر أبعد من الصورة والضجة','يتغير الخطر عند تغيير السلسلة','اصنع روتين تحقق متكرر']},
    vi:{trackTitle:'Lộ trình trung cấp',trackDesc:'Sau lộ trình nhập môn, tiếp tục với lưu ký, mạng, DeFi, bridge, dự án và xác minh thông tin.',trackCta:'Bắt đầu lộ trình trung cấp',sidebar:'Lộ trình trung cấp',badge:'Lộ trình',visual:'Hình thực hành',relatedTitle:'Tài nguyên thực hành liên quan',relatedFree:'Checklist / PDF miễn phí',relatedDeep:'Ôn tập có cấu trúc bằng eBook',relatedSources:'Thư viện nguồn',sourceLabel:'Lộ trình trung cấp',day:function(n){return 'Bài '+n},headings:['Ý chính','Giải thích đơn giản','Tình huống thực tế','Nơi dễ sai','Cần kiểm tra ngay'],titles:['Cách dùng sàn và ví cùng nhau','Cách so sánh mạng và phí trong thực tế','Stablecoin khác nhau thế nào và cần chú ý gì','Cần hiểu gì trước khi vào DeFi','Điều thật sự quan trọng khi đánh giá NFT và token','Vì sao bridge và multichain quan trọng và dễ gây nhầm','Cách xác minh thông tin trước khi tin'],subs:['Cân bằng tiện lợi và quyền kiểm soát','So sánh phí, tốc độ và rủi ro','Nhìn xa hơn mức giá một đô la','Hiểu connect approve sign swap','Nhìn xa hơn hình ảnh và hype','Rủi ro đổi khi qua chain','Tạo thói quen xác minh']},
    ha:{trackTitle:'Hanyar Koyo ta Matsakaici',trackDesc:'Bayan hanyar masu farawa, ci gaba da ajiya, networks, DeFi, bridges, projects da tabbatar da bayani.',trackCta:'Fara hanyar matsakaici',sidebar:'Hanyar Koyo ta Matsakaici',badge:'Hanyar koyo',visual:'Hoto na aiki',relatedTitle:'Albarkatun aiki masu alaƙa',relatedFree:'Checklist / PDF kyauta',relatedDeep:'Bita mai tsari a eBook',relatedSources:'Laburaren tushe',sourceLabel:'Hanyar koyo ta matsakaici',day:function(n){return 'Darasi '+n},headings:['Muhimmin raayi','Bayani mai sauki','Yanayi na gaske','Inda ake kuskure','Abin dubawa yanzu'],titles:['Yadda ake amfani da exchange da wallet tare','Yadda ake kwatanta networks da kudade','Yadda stablecoins suka bambanta da abin lura','Abin fahimta da farko kafin DeFi','Abin da ya fi muhimmanci wajen NFT da token projects','Me yasa bridges da multichain suke da muhimmanci','Yadda ake tabbatar da bayani kafin a amince'],subs:['Daidaita sauki da iko','Kwatanta kudi, sauri da kuskure','Duba fiye da farashin dala daya','Fahimci connect approve sign swap','Duba bayan hoto da hayaniya','Hadari yana sauyawa tsakanin chains','Gina tsarin tantancewa']}
  };

  var practiceLabels = {
    en:{transitionTitle:'From beginner basics to practical judgment',transitionText:'Once you understand the beginner foundations and safety basics, use this track to practice real decisions before you act.',kitTitle:'Practical action kit',summaryTitle:'Key takeaway',compareTitle:'Compare before you act',warningTitle:'Mistake to avoid',checkTitle:'What to check now',continueTitle:'Continue to the next lesson',continueFallback:'Use the Source Library for deeper review',quizPrefix:'Quick self-check',quizTrue:'True',quizFalse:'False',compareA:'Practical use',compareB:'Risk to watch'},
    ko:{transitionTitle:'입문 기초에서 실전 판단으로 넘어가기',transitionText:'기본 안전과 입문 흐름을 익혔다면, 이제 실제 사용 전에 판단하고 확인하는 중급자 트랙으로 넘어갈 수 있습니다.',kitTitle:'실전 행동 키트',summaryTitle:'오늘의 핵심',compareTitle:'행동 전 비교하기',warningTitle:'피해야 할 실수',checkTitle:'지금 확인할 것',continueTitle:'다음 lesson으로 이어가기',continueFallback:'자료 라이브러리에서 더 깊게 보기',quizPrefix:'짧은 확인 문제',quizTrue:'맞음',quizFalse:'아님',compareA:'실전 사용 기준',compareB:'주의할 위험'},
    th:{transitionTitle:'จากพื้นฐานสู่การตัดสินใจจริง',transitionText:'หลังจากเข้าใจพื้นฐานและความปลอดภัยแล้ว ใช้แทร็กนี้ฝึกตรวจสอบก่อนลงมือจริง.',kitTitle:'ชุดฝึกปฏิบัติ',summaryTitle:'สรุปสำคัญ',compareTitle:'เปรียบเทียบก่อนทำ',warningTitle:'ข้อผิดพลาดที่ควรเลี่ยง',checkTitle:'สิ่งที่ต้องตรวจ',continueTitle:'ไปบทต่อไป',continueFallback:'ดูเพิ่มในคลังแหล่งข้อมูล',quizPrefix:'เช็กความเข้าใจ',quizTrue:'จริง',quizFalse:'ไม่จริง',compareA:'การใช้จริง',compareB:'ความเสี่ยง'},
    id:{transitionTitle:'Dari dasar ke keputusan praktik',transitionText:'Setelah paham dasar dan keamanan, gunakan track ini untuk berlatih mengecek sebelum bertindak.',kitTitle:'Kit aksi praktik',summaryTitle:'Inti pelajaran',compareTitle:'Bandingkan sebelum bertindak',warningTitle:'Kesalahan yang dihindari',checkTitle:'Yang dicek sekarang',continueTitle:'Lanjut ke pelajaran berikutnya',continueFallback:'Lihat Source Library',quizPrefix:'Cek singkat',quizTrue:'Benar',quizFalse:'Salah',compareA:'Penggunaan praktik',compareB:'Risiko'},
    pt:{transitionTitle:'Do básico para decisões práticas',transitionText:'Depois dos fundamentos e segurança, use esta trilha para praticar verificações antes de agir.',kitTitle:'Kit de ação prática',summaryTitle:'Resumo principal',compareTitle:'Compare antes de agir',warningTitle:'Erro a evitar',checkTitle:'O que verificar agora',continueTitle:'Continuar para a próxima lição',continueFallback:'Veja a Biblioteca de Fontes',quizPrefix:'Auto-checagem rápida',quizTrue:'Verdadeiro',quizFalse:'Falso',compareA:'Uso prático',compareB:'Risco'},
    br:{transitionTitle:'Do básico para decisões práticas',transitionText:'Depois dos fundamentos e segurança, use esta trilha para praticar verificações antes de agir.',kitTitle:'Kit de ação prática',summaryTitle:'Resumo principal',compareTitle:'Compare antes de agir',warningTitle:'Erro a evitar',checkTitle:'O que verificar agora',continueTitle:'Continuar para a próxima lição',continueFallback:'Veja a Biblioteca de Fontes',quizPrefix:'Auto-checagem rápida',quizTrue:'Verdadeiro',quizFalse:'Falso',compareA:'Uso prático',compareB:'Risco'},
    tr:{transitionTitle:'Temelden pratik karara geçiş',transitionText:'Temel güvenliği öğrendikten sonra, bu yolu gerçek işlem öncesi kontrol pratiği için kullanın.',kitTitle:'Pratik eylem kiti',summaryTitle:'Ana çıkarım',compareTitle:'Harekete geçmeden karşılaştır',warningTitle:'Kaçınılacak hata',checkTitle:'Şimdi kontrol et',continueTitle:'Sonraki derse geç',continueFallback:'Kaynak Kütüphanesine bak',quizPrefix:'Kısa kontrol',quizTrue:'Doğru',quizFalse:'Yanlış',compareA:'Pratik kullanım',compareB:'Risk'},
    es:{transitionTitle:'De bases a decisiones prácticas',transitionText:'Después de entender fundamentos y seguridad, usa esta ruta para practicar verificaciones antes de actuar.',kitTitle:'Kit de acción práctica',summaryTitle:'Idea clave',compareTitle:'Compara antes de actuar',warningTitle:'Error a evitar',checkTitle:'Qué revisar ahora',continueTitle:'Continuar a la siguiente lección',continueFallback:'Ver Biblioteca de Fuentes',quizPrefix:'Auto-chequeo rápido',quizTrue:'Verdadero',quizFalse:'Falso',compareA:'Uso práctico',compareB:'Riesgo'},
    ar:{transitionTitle:'من الأساسيات إلى الحكم العملي',transitionText:'بعد فهم الأساسيات والسلامة، استخدم هذا المسار للتدرب على الفحص قبل التصرف.',kitTitle:'مجموعة عمل عملية',summaryTitle:'الخلاصة',compareTitle:'قارن قبل التصرف',warningTitle:'خطأ يجب تجنبه',checkTitle:'ما يجب فحصه الآن',continueTitle:'تابع الدرس التالي',continueFallback:'استخدم مكتبة المصادر',quizPrefix:'فحص سريع',quizTrue:'صحيح',quizFalse:'خطأ',compareA:'استخدام عملي',compareB:'خطر'},
    vi:{transitionTitle:'Từ nền tảng đến phán đoán thực tế',transitionText:'Sau khi hiểu nền tảng và an toàn, dùng lộ trình này để luyện kiểm tra trước khi hành động.',kitTitle:'Bộ hành động thực tế',summaryTitle:'Ý chính',compareTitle:'So sánh trước khi làm',warningTitle:'Lỗi cần tránh',checkTitle:'Cần kiểm tra ngay',continueTitle:'Tiếp tục bài sau',continueFallback:'Xem Thư viện nguồn',quizPrefix:'Tự kiểm tra nhanh',quizTrue:'Đúng',quizFalse:'Sai',compareA:'Cách dùng thực tế',compareB:'Rủi ro'},
    ha:{transitionTitle:'Daga tushe zuwa hukunci na aiki',transitionText:'Bayan fahimtar tushe da tsaro, yi amfani da wannan hanya don duba abubuwa kafin aiki.',kitTitle:'Kayan aiki na praktik',summaryTitle:'Muhimmin takeaway',compareTitle:'Kwatanta kafin aiki',warningTitle:'Kuskuren gujewa',checkTitle:'Abin dubawa yanzu',continueTitle:'Ci gaba zuwa darasi na gaba',continueFallback:'Duba laburaren tushe',quizPrefix:'Gajeren gwaji',quizTrue:'Gaskiya',quizFalse:'Karya',compareA:'Amfani na aiki',compareB:'Hadari'}
  };

  var practiceData = {
    en:[
      {summary:'There is no single perfect custody choice. Split assets by purpose: active trading, long-term holding, and recovery readiness.',compare:[['Exchange','Convenient for buying, selling, fiat deposits, and quick exits.'],['Self-custody wallet','Better for control and long-term holding, but recovery responsibility is yours.']],warning:'Do not move everything into self-custody before you understand seed phrase recovery and device safety.',checks:['Separate short-term and long-term funds','Decide who controls the keys','Know how you would recover access'],quiz:[['An exchange account and a self-custody wallet are the same thing.','False. An exchange is a platform account; a self-custody wallet gives you direct key responsibility.'],['Long-term holdings may need a different storage plan than trading funds.','True. The right custody choice depends on purpose and recovery readiness.'],['You should learn seed phrase safety before moving meaningful funds.','True. Recovery mistakes can be permanent.']]},
      {summary:'A network choice is part of the transfer, not a small detail. Match asset, network, address, and destination support.',compare:[['Lower fee network','May be useful only if the destination supports the same network.'],['Supported network','Safer than simply choosing the cheapest option.']],warning:'Do not choose a network only because the fee is low. Unsupported networks can make funds difficult or impossible to recover.',checks:['Match sender and receiver network','Check fee, minimum amount, and memo/tag','Use a small test when uncertain'],quiz:[['The same USDT name can appear on more than one network.','True. The token name can look the same while the network is different.'],['If the address looks right, network choice does not matter.','False. The destination must support the same network.'],['A small test transfer can reduce mistake risk.','True. It is especially useful when the route is new.']]},
      {summary:'Stablecoins can look similar in price but differ in issuer, reserve model, liquidity, and depeg risk.',compare:[['USDT / USDC','Issuer and reserve trust are central to review.'],['DAI or crypto-backed models','Mechanism, collateral, and ecosystem risk matter.']],warning:'Do not assume every stablecoin carries the same risk just because it trades near one dollar.',checks:['Check issuer and reserve information','Check network support and liquidity','Watch for depeg or pause risk'],quiz:[['All stablecoins have the exact same risk profile.','False. Structure, reserves, and mechanisms can differ.'],['A stable price does not remove the need to check liquidity.','True. Liquidity matters when entering or exiting.'],['Depeg means the price moved away from the intended reference value.','True. It is one of the risks to watch.']]},
      {summary:'In DeFi, the wallet popup is the real decision point. Connect, approve, sign, and swap are different actions.',compare:[['Connect','Lets a site see your wallet address.'],['Approve / Sign','Can grant token permission or confirm an action, so read carefully.']],warning:'Unlimited approval on an unchecked site is one of the most dangerous beginner DeFi mistakes.',checks:['Verify the domain before connecting','Read spender, asset, and amount in wallet prompts','Revoke unused approvals when possible'],quiz:[['Connecting a wallet always means funds instantly leave.','False. Connection is not the same as approval or signing a transaction.'],['Approve can give a contract permission to use a token.','True. That is why the spender and amount matter.'],['You should read wallet popups instead of trusting the page design.','True. The wallet request is the key action.']]},
      {summary:'A project should be judged by evidence, not by image, hype, or a loud community alone.',compare:[['Hype-only signal','Celebrity posts, floor price, and excitement without proof.'],['Structured project signal','Useful activity, liquidity, realistic roadmap, and verifiable links.']],warning:'Do not buy because a project looks popular before checking activity, liquidity, distribution, and official links.',checks:['Check activity and liquidity','Review utility and sustainability','Verify contract address and official links'],quiz:[['A pretty NFT image is enough to judge a project.','False. You still need activity, liquidity, utility, and risk review.'],['Liquidity affects how easily you can exit.','True. Low liquidity can trap buyers.'],['Official links and contract addresses should be verified before acting.','True. Hype does not replace verification.']]},
      {summary:'A bridge is not just a send button. It connects ecosystems, so both chains and the bridge route matter.',compare:[['Normal transfer','Usually stays inside one network.'],['Bridge action','Moves value between chains and adds contract, route, and destination risk.']],warning:'Do not bridge to a chain your wallet, app, or receiving platform is not ready to use.',checks:['Confirm source and destination chain','Use official bridge links','Check asset version and test amount'],quiz:[['Bridging is exactly the same as a normal transfer.','False. A bridge adds route, contract, and destination-chain risk.'],['The source chain and destination chain both matter.','True. A mismatch can create confusion or loss.'],['Lesson 9 network checks are useful before using a bridge.','True. Bridge safety builds on network comparison habits.']]},
      {summary:'Trust should follow a routine: official source, domain, contract, cross-check, then wallet action.',compare:[['Fast but risky','Clicking the first link from ads, search, or DMs.'],['Repeatable verification','Open official sources yourself and compare domains, contracts, and warnings.']],warning:'Do not trust one screenshot, one DM, or one search result before checking the source and domain.',checks:['Start from official accounts or docs','Compare domain and contract address','Cross-check community warnings before signing'],quiz:[['A link can look professional and still be dangerous.','True. Design alone is not proof.'],['You should verify official domain and contract before wallet actions.','True. This is the core routine.'],['Lesson 7 scam warnings connect directly to verification habits.','True. Scam spotting becomes stronger when you follow a repeatable routine.']]}
    ],
    ko:[
      {summary:'보관 방식에는 하나의 정답만 있는 것이 아닙니다. 매매용, 장기 보관용, 복구 가능성에 따라 나누어 생각해야 합니다.',compare:[['거래소 보관','구매, 판매, 입출금, 빠른 매도에는 편리합니다.'],['자기보관 지갑','통제권은 커지지만 시드 문구와 복구 책임도 함께 커집니다.']],warning:'시드 문구 복구와 기기 보안을 이해하기 전에 의미 있는 금액을 전부 자기보관으로 옮기지 마세요.',checks:['단기 자금과 장기 자금을 나누기','누가 키를 통제하는지 확인하기','접근을 잃었을 때 복구 가능한지 생각하기'],quiz:[['거래소 계정과 자기보관 지갑은 같은 것이다.','아닙니다. 거래소는 플랫폼 계정이고, 자기보관 지갑은 키 관리 책임이 사용자에게 있습니다.'],['장기 보관 자금과 매매용 자금은 보관 계획이 달라질 수 있다.','맞습니다. 목적에 따라 적절한 보관 방식이 달라집니다.'],['큰 금액을 옮기기 전에는 시드 문구 안전을 먼저 이해해야 한다.','맞습니다. 복구 실수는 되돌리기 어렵습니다.']]},
      {summary:'네트워크 선택은 작은 옵션이 아니라 전송 자체의 일부입니다. 자산, 네트워크, 주소, 도착지 지원 여부를 함께 맞춰야 합니다.',compare:[['수수료가 낮은 네트워크','도착지가 같은 네트워크를 지원할 때만 의미가 있습니다.'],['지원되는 네트워크','단순히 가장 싼 옵션보다 더 중요한 기준입니다.']],warning:'수수료가 낮다는 이유만으로 네트워크를 고르지 마세요. 지원하지 않는 네트워크는 복구가 어렵거나 불가능할 수 있습니다.',checks:['보내는 곳과 받는 곳의 네트워크 일치 확인','수수료, 최소 금액, 메모/태그 확인','불확실하면 소액 테스트 먼저 하기'],quiz:[['같은 USDT라도 여러 네트워크에 있을 수 있다.','맞습니다. 이름은 같아 보여도 실제 네트워크는 다를 수 있습니다.'],['주소만 맞으면 네트워크는 크게 중요하지 않다.','아닙니다. 도착지가 같은 네트워크를 지원해야 합니다.'],['처음 쓰는 경로라면 소액 테스트가 실수 위험을 줄인다.','맞습니다. 새 경로에서는 특히 유용합니다.']]},
      {summary:'스테이블코인은 가격이 비슷해 보여도 발행 주체, 준비금, 유동성, 디페그 위험이 다를 수 있습니다.',compare:[['USDT / USDC','발행 주체와 준비금 신뢰 구조를 확인해야 합니다.'],['DAI 같은 담보 기반 구조','담보, 작동 방식, 생태계 위험을 함께 봐야 합니다.']],warning:'1달러 근처에서 거래된다고 해서 모든 스테이블코인의 위험이 같다고 생각하지 마세요.',checks:['발행 주체와 준비금 정보 확인','네트워크 지원과 유동성 확인','디페그나 중단 위험 살펴보기'],quiz:[['모든 스테이블코인은 위험 구조가 완전히 같다.','아닙니다. 구조, 준비금, 작동 방식이 다를 수 있습니다.'],['가격이 안정적으로 보여도 유동성 확인은 필요하다.','맞습니다. 사고팔 때 유동성은 중요합니다.'],['디페그는 목표 기준 가격에서 벗어나는 상황이다.','맞습니다. 스테이블코인에서 확인해야 할 위험 중 하나입니다.']]},
      {summary:'DeFi에서는 화면보다 지갑 팝업이 실제 판단 지점입니다. connect, approve, sign, swap은 서로 다른 행동입니다.',compare:[['Connect','사이트가 내 지갑 주소를 볼 수 있게 연결하는 단계입니다.'],['Approve / Sign','토큰 사용 권한이나 행동 확인과 관련될 수 있으므로 반드시 읽어야 합니다.']],warning:'검증하지 않은 사이트에서 무제한 approve를 허용하는 것은 가장 위험한 DeFi 실수 중 하나입니다.',checks:['연결 전 도메인 확인','지갑 팝업의 대상, 자산, 금액 읽기','가능하면 쓰지 않는 권한 해제'],quiz:[['지갑을 연결하면 항상 즉시 자산이 빠져나간다.','아닙니다. 연결은 승인이나 전송 서명과 다릅니다.'],['Approve는 컨트랙트에 토큰 사용 권한을 줄 수 있다.','맞습니다. 그래서 대상과 금액을 읽어야 합니다.'],['페이지 디자인보다 지갑 요청 내용을 읽는 것이 중요하다.','맞습니다. 실제 행동은 지갑 요청에서 결정됩니다.']]},
      {summary:'프로젝트는 이미지, hype, 커뮤니티 분위기만이 아니라 실제 증거로 판단해야 합니다.',compare:[['Hype 중심 신호','유명인 언급, 바닥가, 분위기는 증거가 아닐 수 있습니다.'],['구조 있는 프로젝트 신호','활동성, 유동성, 현실적인 로드맵, 검증 가능한 링크가 보입니다.']],warning:'프로젝트가 유명해 보인다는 이유만으로 활동성, 유동성, 분배, 공식 링크 확인 없이 들어가지 마세요.',checks:['활동성과 유동성 확인','유틸리티와 지속 가능성 보기','컨트랙트 주소와 공식 링크 검증'],quiz:[['예쁜 NFT 이미지만으로 프로젝트를 판단해도 충분하다.','아닙니다. 활동성, 유동성, 유틸리티, 위험을 함께 봐야 합니다.'],['유동성은 나중에 팔 수 있는지와 관련이 있다.','맞습니다. 낮은 유동성은 큰 위험이 될 수 있습니다.'],['공식 링크와 컨트랙트 주소는 행동 전에 확인해야 한다.','맞습니다. hype는 검증을 대신하지 못합니다.']]},
      {summary:'브리지는 단순 전송 버튼이 아닙니다. 생태계를 연결하는 작업이므로 양쪽 체인과 브리지 경로가 모두 중요합니다.',compare:[['일반 전송','대부분 하나의 네트워크 안에서 이동합니다.'],['브리지 사용','체인 사이를 이동하며 컨트랙트, 경로, 도착지 위험이 추가됩니다.']],warning:'지갑, 앱, 받는 곳이 준비되지 않은 체인으로 브리지하지 마세요.',checks:['출발 체인과 도착 체인 확인','공식 브리지 링크 사용','자산 버전과 소액 테스트 확인'],quiz:[['브리지는 일반 전송과 완전히 같다.','아닙니다. 브리지는 경로, 컨트랙트, 도착 체인 위험이 추가됩니다.'],['출발 체인과 도착 체인은 둘 다 중요하다.','맞습니다. 둘 중 하나라도 틀리면 혼란이나 손실이 생길 수 있습니다.'],['Lesson 9의 네트워크 확인 습관은 브리지 전에도 도움이 된다.','맞습니다. 브리지 안전은 네트워크 비교 습관 위에 쌓입니다.']]},
      {summary:'신뢰는 순서가 필요합니다. 공식 출처, 도메인, 컨트랙트, 교차 확인, 지갑 행동 순서로 봐야 합니다.',compare:[['빠르지만 위험한 행동','광고, 검색 결과, DM의 첫 링크를 바로 누르는 것.'],['반복 가능한 검증','공식 출처를 직접 열고 도메인, 컨트랙트, 경고를 비교하는 것.']],warning:'캡처 하나, DM 하나, 검색 결과 하나만 보고 출처와 도메인 확인 없이 믿지 마세요.',checks:['공식 계정이나 문서에서 시작','도메인과 컨트랙트 주소 비교','서명 전 커뮤니티 경고 교차 확인'],quiz:[['링크가 전문적으로 보여도 위험할 수 있다.','맞습니다. 디자인만으로는 증거가 되지 않습니다.'],['지갑 행동 전 공식 도메인과 컨트랙트를 확인해야 한다.','맞습니다. 이것이 검증 루틴의 핵심입니다.'],['Lesson 7의 사기 경고는 정보 검증 습관과 직접 연결된다.','맞습니다. 사기 구별은 반복 가능한 검증 루틴으로 더 강해집니다.']]}
    ]
  };

  function clone(value){ return value == null ? value : JSON.parse(JSON.stringify(value)); }

  function labelsFor(lang){
    return practiceLabels[lang] || practiceLabels.en;
  }

  function langFromPack(pack){
    var keys = Object.keys(packs);
    for(var i = 0; i < keys.length; i++){
      if(packs[keys[i]] === pack) return keys[i];
    }
    return 'en';
  }

  function compactLocalizedBits(pack, index){
    var lang = langFromPack(pack);
    var labels = labelsFor(lang);
    var copy = sceneCopyFor(lang);
    var enLesson = packs.en.lessons[index] || {};
    var title = (pack.titles && pack.titles[index]) || enLesson.title || '';
    var sub = (pack.subs && pack.subs[index]) || enLesson.sub || title;
    var visualSets = [
      [copy.exchange, copy.wallet, copy.recovery, labels.checkTitle],
      [copy.network, copy.fee, copy.eta, labels.checkTitle],
      ['USDT', 'USDC', 'DAI', copy.risk],
      [copy.connect, copy.approve, copy.sign, copy.swap],
      [copy.greenFlag, copy.redFlag, copy.review, copy.source],
      [copy.chainA, copy.bridge, copy.chainB, copy.review],
      [copy.source, copy.domain, copy.contract, copy.review]
    ];
    var pointSets = [
      [copy.exchange + ' / ' + copy.wallet, copy.control, copy.recovery],
      [copy.asset + ' + ' + copy.network, copy.fee + ' + ' + copy.eta, labels.checkTitle],
      [copy.reserve, copy.risk, labels.checkTitle],
      [copy.connect, copy.approve, copy.sign + ' / ' + copy.swap],
      [copy.greenFlag, copy.redFlag, copy.review],
      [copy.chainA + ' → ' + copy.chainB, copy.bridge, copy.risk],
      [copy.source, copy.domain, copy.contract]
    ];
    var visual = clone((pack.visuals && pack.visuals[index]) || visualSets[index] || visualSets[0]);
    var points = clone((pack.points && pack.points[index]) || pointSets[index] || pointSets[0]);
    var scenario = (pack.scenarios && pack.scenarios[index]) || (sub + '. ' + pack.trackDesc);
    var mistake = (pack.mistakes && pack.mistakes[index]) || (labels.warningTitle + ': ' + (points[1] || sub));
    var check = (pack.checks && pack.checks[index]) || (labels.checkTitle + ': ' + points.join(' / '));
    var terms = clone((pack.terms && pack.terms[index]) || visual.slice(0, 3).map(function(term, i){
      return [term, points[i] || sub];
    }));
    return {scenario:scenario, mistake:mistake, check:check, visual:visual, points:points, terms:terms};
  }

  function getPracticeData(lang, index, lesson){
    var offset = index - START_INDEX;
    var labels = labelsFor(lang);
    var exact = practiceData[lang] && practiceData[lang][offset];
    if(exact) return exact;
    var sections = lesson && lesson.sections ? lesson.sections : [];
    var first = sections[0] && sections[0].ps && sections[0].ps[0] ? sections[0].ps[0] : (lesson && lesson.intro) || '';
    var mistake = sections[3] && sections[3].ps && sections[3].ps[0] ? sections[3].ps[0] : first;
    var check = sections[4] && sections[4].ps && sections[4].ps[0] ? sections[4].ps[0] : first;
    var points = lesson && lesson.checkpoints && lesson.checkpoints.length ? lesson.checkpoints.slice(0,3) : [check];
    return {
      summary:first,
      compare:[[labels.compareA, first],[labels.compareB, mistake]],
      warning:mistake,
      checks:points,
      quiz:[
        [labels.quizPrefix + ' 1', first],
        [labels.quizPrefix + ' 2', mistake],
        [labels.quizPrefix + ' 3', check]
      ]
    };
  }

  function quizForLesson(lang, index, lesson){
    var practice = getPracticeData(lang, START_INDEX + index, lesson);
    return practice.quiz || [];
  }

  function compactLesson(pack, index){
    var bits = compactLocalizedBits(pack, index);
    return {
      cat: pack.badge,
      title: pack.titles[index],
      intro: pack.subs[index] + '. ' + pack.trackDesc,
      sections:[
        {h:pack.headings[0], ps:[pack.subs[index] + '.']},
        {h:pack.headings[1], ps:[pack.trackDesc]},
        {h:pack.headings[2], ps:[bits.scenario]},
        {h:pack.headings[3], ps:[bits.mistake]},
        {h:pack.headings[4], ps:[bits.check]}
      ],
      defs: bits.terms,
      example: bits.scenario,
      mistakes: clone(bits.points),
      faqs:[[pack.headings[4], bits.check],[pack.relatedTitle, pack.relatedFree + ', ' + pack.relatedSources + ', ' + pack.relatedDeep]],
      checkpoints: clone(bits.points),
      quiz:(function(){
        return quizForLesson(langFromPack(pack), index, {
          sections:[
            {ps:[pack.subs[index] + '.']},
            {ps:[pack.trackDesc]},
            {ps:[bits.scenario]},
            {ps:[bits.mistake]},
            {ps:[bits.check]}
          ],
          checkpoints:clone(bits.points),
          intro:pack.subs[index]
        });
      })(),
      sources: buildSourcesForLesson(index, langFromPack(pack)),
      visual: clone(bits.visual)
    };
  }

  function buildLesson(pack, index){
    var item = pack.lessons[index];
    return {
      cat:item.cat,
      title:item.title,
      intro:item.one + ' ' + item.easy,
      sections:[
        {h:pack.headings[0], ps:[item.one]},
        {h:pack.headings[1], ps:[item.easy]},
        {h:pack.headings[2], ps:[item.scenario]},
        {h:pack.headings[3], ps:[item.mistake]},
        {h:pack.headings[4], ps:[item.check]}
      ],
      defs: clone(item.terms),
      example:item.scenario,
      mistakes:clone(item.points),
      faqs:[[pack.headings[4], item.check],[pack.relatedTitle, pack.relatedFree + ', ' + pack.relatedSources + ', ' + pack.relatedDeep]],
      checkpoints:clone(item.points),
      quiz:quizForLesson(langFromPack(pack), index, {sections:[{ps:[item.one]},{ps:[item.easy]},{ps:[item.scenario]},{ps:[item.mistake]},{ps:[item.check]}],checkpoints:item.points,intro:item.one}),
      sources:buildSourcesForLesson(index, langFromPack(pack)),
      visual:clone(item.visual)
    };
  }

  function buildSourcesForLesson(index, lang){
    if(lang && lang !== 'en'){
      var pack = packs[lang] || compactPacks[lang] || {};
      var lessonTitle = (pack.titles && pack.titles[index]) || (pack.lessons && pack.lessons[index] && pack.lessons[index].title) || (packs.en.lessons[index] && packs.en.lessons[index].title) || '';
      var urls = ['https://www.ledger.com/academy','https://ethereum.org/en/developers/docs/','https://tether.to/en/transparency/','https://docs.uniswap.org/','https://opensea.io/learn','https://ethereum.org/en/bridges/','https://info.etherscan.com/'];
      return [[
        (pack.sourceLabel || pack.relatedSources || 'Source') + ': ' + lessonTitle,
        pack.relatedTitle || pack.trackDesc || lessonTitle,
        urls[Math.min(index, urls.length - 1)]
      ]];
    }
    var common = [
      ['Ethereum wallet and network documentation','Official documentation for understanding wallets, networks, smart contracts, and safe transaction habits.','https://ethereum.org/en/developers/docs/'],
      ['Crypto crime and risk research','Research useful for understanding scam patterns, bridge risks, and real-world crypto misuse.','https://www.chainalysis.com/blog/']
    ];
    var specific = [
      ['Crypto custody basics','A beginner-friendly reference about custody, self-custody, and why key control matters.','https://www.ledger.com/academy'],
      ['Stablecoin reserve information','Reference point for understanding that stablecoins depend on issuer and reserve structure.','https://tether.to/en/transparency/'],
      ['DeFi swap and token approval basics','Useful reference for understanding swaps, liquidity, and wallet approval flows.','https://docs.uniswap.org/'],
      ['NFT safety and project review basics','A practical starting point for learning NFT safety and project evaluation habits.','https://opensea.io/learn'],
      ['Bridge and multichain concepts','Official ecosystem reference for why bridges require extra care.','https://ethereum.org/en/bridges/'],
      ['Contract address and explorer verification','Helpful reference for checking token contracts and on-chain information before trusting links.','https://info.etherscan.com/']
    ];
    if(index === 0) return [specific[0]];
    if(index === 1) return [common[0]];
    if(index === 6) return [specific[5], common[1]];
    return [specific[Math.min(index - 2, specific.length - 1)]];
  }

  function getPack(){
    var lang = langKey();
    return packs[lang] || compactPacks[lang] || packs.en;
  }

  function iconForOffset(offset){
    var icons = [
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 15.5v-7Z"/><path d="M15 12h5"/><circle cx="15.5" cy="12" r=".9"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h11"/><path d="m13 5 4 3-4 3"/><path d="M18 16H7"/><path d="m11 13-4 3 4 3"/><circle cx="12" cy="12" r="9"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M9 12h6"/><path d="M12 8v8"/><path d="M7 17c2.8-1.4 7.2-1.4 10 0"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14"/><path d="M7 8v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M9 13h6"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v13H4z"/><path d="m7 9 2 2 4-4"/><path d="M7 15h10"/><path d="M14 10h3"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h5a5 5 0 0 1 0 10H7"/><path d="M17 7h-5a5 5 0 0 0 0 10h5"/><path d="M8 12h8"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.4c0 4.1-2.6 7.9-7 9.1-4.4-1.2-7-5-7-9.1V6l7-2.5Z"/><path d="M9 12.5 11 14.5 15.5 9.8"/></svg>'
    ];
    return icons[offset] || icons[0];
  }

  function syncIntermediateNavItems(){
    for(var i = START_INDEX; i < START_INDEX + TRACK_SIZE; i++){
      var item = document.querySelector('.lesson-nav-item[data-lesson="' + i + '"]');
      if(!item) continue;
      item.classList.remove('intermediate-nav-item');
      item.classList.add('lesson-nav-item-intermediate');
      if(i === START_INDEX) item.classList.add('lesson-nav-item-l7');
      var num = item.querySelector('.nav-num');
      if(num && num.innerHTML.indexOf('sec-icon') === -1){
        num.innerHTML = '<span class="sec-icon">' + iconForOffset(i - START_INDEX) + '</span>';
      }
    }
  }

  function applyIntermediateData(){
    if(typeof lessons === 'undefined' || typeof ui === 'undefined') return;
    Object.keys(compactPacks).forEach(function(lang){ packs[lang] = compactPacks[lang]; });
    Object.keys(packs).forEach(function(lang){
      if(!ui[lang]) ui[lang] = {};
      if(!lessons[lang]) lessons[lang] = clone(lessons.en || []);
      var pack = packs[lang];
      ui[lang]['intermediate.trackTitle'] = pack.trackTitle;
      ui[lang]['intermediate.trackDesc'] = pack.trackDesc;
      ui[lang]['intermediate.trackCta'] = pack.trackCta;
      ui[lang]['intermediate.sidebar'] = pack.sidebar;
      ui[lang]['intermediate.badge'] = pack.badge;
      ui[lang]['intermediate.relatedTitle'] = pack.relatedTitle;
      ui[lang]['intermediate.relatedFree'] = pack.relatedFree;
      ui[lang]['intermediate.relatedDeep'] = pack.relatedDeep;
      ui[lang]['intermediate.relatedSources'] = pack.relatedSources;
      for(var i = 0; i < TRACK_SIZE; i++){
        var lesson = pack.lessons ? buildLesson(pack, i) : compactLesson(pack, i);
        lessons[lang][START_INDEX + i] = lesson;
        ui[lang]['nav.l' + (START_INDEX + i + 1)] = lesson.title;
        ui[lang]['nav.l' + (START_INDEX + i + 1) + 'sub'] = (pack.lessons ? pack.lessons[i].sub : pack.subs[i]);
        ui[lang]['topic.l' + (START_INDEX + i + 1)] = lesson.title;
      }
    });
  }

  function ensureIntermediateDom(){
    var existingLesson = document.getElementById('lesson6') || document.getElementById('lesson0');
    var lessonHost = (existingLesson && existingLesson.parentNode) || document.querySelector('.content-area') || document.querySelector('.content-shell') || document.querySelector('main') || document.body;
    if(lessonHost){
      for(var i = START_INDEX; i < START_INDEX + TRACK_SIZE; i++){
        var section = document.getElementById('lesson' + i);
        if(!section){
          section = document.createElement('section');
          section.className = 'lesson-content';
          section.id = 'lesson' + i;
        }
        section.classList.add('is-intermediate-lesson');
        if(section.parentNode !== lessonHost) lessonHost.appendChild(section);
      }
    }
    var firstExtra = document.querySelector('.lesson-nav-item[data-lesson="' + START_INDEX + '"]');
    if(firstExtra){ syncIntermediateNavItems(); return; }
    var lessonSeven = document.querySelector('.lesson-nav-item[data-lesson="6"]');
    if(!lessonSeven || !lessonSeven.parentNode) return;
    var parent = lessonSeven.parentNode;
    var trackLabel = document.createElement('div');
    trackLabel.className = 'sidebar-label';
    trackLabel.setAttribute('data-i18n','intermediate.sidebar');
    parent.insertBefore(trackLabel, lessonSeven.nextSibling);
    for(var j = START_INDEX; j < START_INDEX + TRACK_SIZE; j++){
      var a = document.createElement('a');
      a.className = 'lesson-nav-item' + (j === START_INDEX ? ' lesson-nav-item-l7' : '');
      a.setAttribute('data-lesson', String(j));
      a.setAttribute('data-route-lesson', String(j));
      a.setAttribute('href', routeFor(j));
      a.innerHTML = '<div class="nav-num"><span class="sec-icon">' + iconForOffset(j - START_INDEX) + '</span></div><div><div class="nav-title" data-i18n="nav.l' + (j + 1) + '"></div><div class="nav-sub" data-i18n="nav.l' + (j + 1) + 'sub"></div></div>';
      parent.insertBefore(a, trackLabel.nextSibling ? trackLabel.nextSibling : null);
      trackLabel = a;
    }
    syncIntermediateNavItems();
  }

  var roadmapCopy = {
    en:{progress:'Intermediate progress',done:'completed',bridge:'Finished the basics? Continue with the Intermediate Roadmap.',open:'Open lesson',continueText:'Continue',review:'Review',notStarted:'Not started',completed:'Completed',labels:['Practical','Compare','Risk check','DeFi safety','Review','Multichain','Verify'],titles:['Exchange vs Wallet','Networks and Fees','Stablecoin Risks','Before DeFi','Project Review','Bridges and Chains','Verification Routine'],descs:['Separate trading from custody.','Compare cost, speed, and risk.','Look beyond the similar price.','Know connect, approve, sign, and swap.','Check structure before hype.','Verify before moving across chains.','Check source, domain, and contract.']},
    ko:{progress:'중급자 진행률',done:'완료',bridge:'기초를 끝냈다면, 이제 중급자 로드맵으로 넘어가세요.',open:'강의 열기',continueText:'이어보기',review:'복습하기',notStarted:'시작 전',completed:'완료',labels:['실전','비교','위험 확인','DeFi 안전','검토','체인 이동','검증'],titles:['거래소와 지갑 나누기','네트워크와 수수료 비교','스테이블코인 차이','DeFi 시작 전 확인','프로젝트 검토 기준','브리지와 멀티체인','정보 검증 루틴'],descs:['보관과 거래 목적을 구분합니다.','속도, 수수료, 실수 위험을 봅니다.','구조와 위험을 함께 봅니다.','연결, 승인, 서명을 구분합니다.','유행보다 구조를 봅니다.','체인 이동 전 위험을 확인합니다.','출처, 도메인, 주소를 다시 봅니다.']},
    th:{progress:'ความคืบหน้าระดับกลาง',done:'เรียนจบ',bridge:'จบพื้นฐานแล้วหรือยัง? ต่อด้วยการตัดสินใจเชิงปฏิบัติ.',open:'เปิดบทเรียน',continueText:'เรียนต่อ',review:'ทบทวน',notStarted:'ยังไม่เริ่ม',completed:'เสร็จแล้ว',labels:['ปฏิบัติ','เปรียบเทียบ','เช็กเสี่ยง','DeFi ปลอดภัย','รีวิว','หลายเชน','ตรวจสอบ'],titles:['Exchange หรือ Wallet','เครือข่ายและค่าธรรมเนียม','ความเสี่ยง Stablecoin','ก่อนเข้า DeFi','รีวิวโปรเจกต์','Bridge และ Chain','ขั้นตอนตรวจสอบ'],descs:['แยกการเทรดกับการเก็บรักษา','ดูต้นทุน ความเร็ว และความเสี่ยง','ดูมากกว่าราคาที่คล้ายกัน','รู้จัก connect approve sign swap','ดูโครงสร้างก่อนกระแส','ตรวจสอบก่อนย้ายข้ามเชน','เช็กแหล่งที่มา โดเมน และสัญญา']},
    id:{progress:'Progres menengah',done:'selesai',bridge:'Sudah selesai dasar? Lanjutkan dengan keputusan praktik.',open:'Buka pelajaran',continueText:'Lanjutkan',review:'Tinjau',notStarted:'Belum mulai',completed:'Selesai',labels:['Praktik','Bandingkan','Cek risiko','Aman DeFi','Review','Multichain','Verifikasi'],titles:['Exchange vs Wallet','Jaringan dan Biaya','Risiko Stablecoin','Sebelum DeFi','Review Proyek','Bridge dan Chain','Rutinitas Verifikasi'],descs:['Pisahkan trading dan custody.','Bandingkan biaya, cepat, risiko.','Lihat lebih dari harga mirip.','Pahami connect, approve, sign, swap.','Cek struktur sebelum hype.','Verifikasi sebelum pindah chain.','Cek sumber, domain, kontrak.']},
    pt:{progress:'Progresso intermediário',done:'concluído',bridge:'Terminou o básico? Continue com decisões práticas.',open:'Abrir lição',continueText:'Continuar',review:'Rever',notStarted:'Não iniciado',completed:'Concluído',labels:['Prática','Comparar','Checar risco','DeFi seguro','Revisar','Multichain','Verificar'],titles:['Exchange vs Carteira','Redes e Taxas','Riscos de Stablecoin','Antes do DeFi','Revisão de Projeto','Bridges e Chains','Rotina de Verificação'],descs:['Separe trade de custódia.','Compare custo, velocidade e risco.','Veja além do preço parecido.','Entenda connect, approve, sign, swap.','Cheque estrutura antes do hype.','Verifique antes de mudar de chain.','Confira fonte, domínio e contrato.']},
    br:{progress:'Progresso intermediário',done:'concluído',bridge:'Terminou o básico? Continue com decisões práticas.',open:'Abrir aula',continueText:'Continuar',review:'Revisar',notStarted:'Não iniciado',completed:'Concluído',labels:['Prática','Comparar','Checar risco','DeFi seguro','Revisar','Multichain','Verificar'],titles:['Exchange vs Carteira','Redes e Taxas','Riscos de Stablecoin','Antes do DeFi','Revisão de Projeto','Bridges e Chains','Rotina de Verificação'],descs:['Separe trade de custódia.','Compare custo, velocidade e risco.','Veja além do preço parecido.','Entenda connect, approve, sign, swap.','Cheque estrutura antes do hype.','Verifique antes de mudar de chain.','Confira fonte, domínio e contrato.']},
    tr:{progress:'Orta seviye ilerleme',done:'tamamlandı',bridge:'Temeller bitti mi? Pratik karar verme ile devam edin.',open:'Dersi aç',continueText:'Devam et',review:'Tekrar et',notStarted:'Başlamadı',completed:'Tamamlandı',labels:['Pratik','Karşılaştır','Risk kontrolü','DeFi güvenliği','İncele','Çoklu zincir','Doğrula'],titles:['Borsa vs Cüzdan','Ağlar ve Ücretler','Stablecoin Riskleri','DeFi Öncesi','Proje İncelemesi','Köprüler ve Zincirler','Doğrulama Rutini'],descs:['Alım satım ve saklamayı ayır.','Maliyet, hız ve riski karşılaştır.','Benzer fiyatın ötesine bak.','Connect, approve, sign, swap öğren.','Hype öncesi yapıyı kontrol et.','Zincir geçmeden doğrula.','Kaynak, domain ve kontratı kontrol et.']},
    es:{progress:'Progreso intermedio',done:'completado',bridge:'¿Terminaste lo básico? Continúa con decisiones prácticas.',open:'Abrir lección',continueText:'Continuar',review:'Repasar',notStarted:'Sin iniciar',completed:'Completado',labels:['Práctica','Comparar','Revisar riesgo','DeFi seguro','Revisar','Multichain','Verificar'],titles:['Exchange vs Billetera','Redes y Comisiones','Riesgos Stablecoin','Antes de DeFi','Revisión de Proyecto','Bridges y Cadenas','Rutina de Verificación'],descs:['Separa trading y custodia.','Compara costo, velocidad y riesgo.','Mira más allá del precio similar.','Entiende connect, approve, sign, swap.','Revisa estructura antes del hype.','Verifica antes de mover entre cadenas.','Revisa fuente, dominio y contrato.']},
    ar:{progress:'تقدم المستوى المتوسط',done:'مكتمل',bridge:'أنهيت الأساسيات؟ تابع مع قرارات عملية.',open:'افتح الدرس',continueText:'متابعة',review:'مراجعة',notStarted:'لم يبدأ',completed:'مكتمل',labels:['عملي','قارن','فحص خطر','أمان DeFi','مراجعة','متعدد الشبكات','تحقق'],titles:['منصة أم محفظة','الشبكات والرسوم','مخاطر Stablecoin','قبل DeFi','مراجعة المشروع','الجسور والشبكات','روتين التحقق'],descs:['افصل التداول عن الحفظ.','قارن التكلفة والسرعة والخطر.','انظر أبعد من السعر المتشابه.','افهم connect وapprove وsign وswap.','افحص البنية قبل الضجة.','تحقق قبل النقل بين الشبكات.','راجع المصدر والنطاق والعقد.']},
    vi:{progress:'Tiến độ trung cấp',done:'hoàn thành',bridge:'Đã xong phần cơ bản? Tiếp tục với quyết định thực tế.',open:'Mở bài học',continueText:'Tiếp tục',review:'Ôn lại',notStarted:'Chưa bắt đầu',completed:'Hoàn thành',labels:['Thực hành','So sánh','Kiểm tra rủi ro','An toàn DeFi','Đánh giá','Multichain','Xác minh'],titles:['Sàn vs Ví','Mạng và Phí','Rủi ro Stablecoin','Trước khi vào DeFi','Đánh giá Dự án','Bridge và Chain','Quy trình Xác minh'],descs:['Tách giao dịch và lưu ký.','So sánh phí, tốc độ, rủi ro.','Nhìn xa hơn mức giá giống nhau.','Hiểu connect, approve, sign, swap.','Kiểm tra cấu trúc trước hype.','Xác minh trước khi chuyển chain.','Kiểm tra nguồn, domain và contract.']},
    ha:{progress:'Ci gaban matsakaici',done:'an kammala',bridge:'Ka gama tushe? Ci gaba da yanke shawara a aikace.',open:'Bude darasi',continueText:'Ci gaba',review:'Bita',notStarted:'Ba a fara ba',completed:'An kammala',labels:['Aiki','Kwatanta','Duba hadari','Tsaron DeFi','Bita','Multichain','Tabbatar'],titles:['Exchange vs Walat','Networks da Kudade','Hadarin Stablecoin','Kafin DeFi','Binciken Project','Bridges da Chains','Tsarin Tabbatarwa'],descs:['Raba trading da ajiya.','Kwatanta kudi, sauri, hadari.','Duba fiye da farashi daya.','Fahimci connect, approve, sign, swap.','Duba tsari kafin hayaniya.','Tabbatar kafin canja chain.','Duba tushe, domain da contract.']}
  };

  function getRoadmapCopy(){
    return roadmapCopy[langKey()] || roadmapCopy.en;
  }

  function getCompletedSet(){
    if(typeof completed !== 'undefined' && completed && typeof completed.has === 'function') return completed;
    try{ return new Set(JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]')); }catch(err){ return new Set(); }
  }

  function getIntermediateRecommendation(done){
    for(var i = 0; i < TRACK_SIZE; i++){
      var index = START_INDEX + i;
      if(!done.has(index)) return index;
    }
    return START_INDEX + TRACK_SIZE - 1;
  }

  function renderIntermediateTrack(){
    var pack = getPack();
    var copy = getRoadmapCopy();
    var done = getCompletedSet();
    var doneCount = 0;
    for(var d = START_INDEX; d < START_INDEX + TRACK_SIZE; d++){
      if(done.has(d)) doneCount++;
    }
    var recommended = getIntermediateRecommendation(done);
    var cards = '';
    for(var i = 0; i < TRACK_SIZE; i++){
      var lessonIndex = START_INDEX + i;
      var lesson = (lessons[langKey()] && lessons[langKey()][lessonIndex]) || (lessons.en && lessons.en[lessonIndex]);
      if(!lesson) continue;
      var isDone = done.has(lessonIndex);
      var isRecommended = !isDone && lessonIndex === recommended;
      var status = isDone ? copy.completed : (isRecommended ? copy.continueText : copy.notStarted);
      var cta = isDone ? copy.review : (isRecommended ? copy.continueText : copy.open);
      var roadmapTitle = (copy.titles && copy.titles[i]) || lesson.title;
      var roadmapDesc = (copy.descs && copy.descs[i]) || ((pack.lessons ? pack.lessons[i].sub : pack.subs[i]) || lesson.intro);
      var cardClass = 'intermediate-roadmap-card';
      if(isDone) cardClass += ' is-complete';
      if(isRecommended) cardClass += ' is-recommended';
      cards += ''
        + '<a class="' + cardClass + '" href="' + esc(routeFor(lessonIndex)) + '" data-intermediate-lesson="' + lessonIndex + '" data-roadmap-tone="intermediate-' + i + '" aria-label="' + esc(pack.day(lessonIndex + 1) + ' - ' + lesson.title) + '">'
        +   '<div class="intermediate-roadmap-card-top">'
        +     '<span class="intermediate-roadmap-icon" aria-hidden="true">' + iconForOffset(i) + '</span>'
        +     '<span class="intermediate-roadmap-day">' + esc(pack.day(lessonIndex + 1)) + '</span>'
        +   '</div>'
        +   '<div class="intermediate-roadmap-card-body">'
        +     '<span class="intermediate-roadmap-label">' + esc((copy.labels && copy.labels[i]) || pack.badge) + '</span>'
        +     '<h3>' + esc(roadmapTitle) + '</h3>'
        +     '<p>' + esc(roadmapDesc) + '</p>'
        +   '</div>'
        +   '<div class="intermediate-roadmap-card-foot">'
        +     '<span class="intermediate-roadmap-status">' + (isDone ? '✓ ' : '') + esc(status) + '</span>'
        +     '<strong>' + esc(cta) + ' →</strong>'
        +   '</div>'
        + '</a>';
    }
    return ''
      + '<section class="roadmap-section intermediate-roadmap-section" data-intermediate-track data-intermediate-roadmap>'
      +   '<div class="intermediate-roadmap-head">'
      +     '<span class="intermediate-roadmap-eyebrow">' + esc(pack.badge) + '</span>'
      +     '<h2>' + esc(pack.trackTitle) + '</h2>'
      +     '<p>' + esc(pack.trackDesc) + '</p>'
      +     '<div class="intermediate-roadmap-meta">'
      +       '<span>' + esc(copy.progress) + ': ' + doneCount + ' / ' + TRACK_SIZE + ' ' + esc(copy.done) + '</span>'
      +       '<span>' + esc(copy.bridge) + '</span>'
      +     '</div>'
      +   '</div>'
      +   '<div class="roadmap-grid intermediate-roadmap-grid">' + cards + '</div>'
      + '</section>';
  }

  function ensureHomeIntermediateTrack(){
    var panel = document.getElementById('homePanel');
    if(!panel || !panel.classList.contains('active') && !panel.innerHTML) return;
    var current = panel.querySelector('[data-intermediate-track]');
    var html = renderIntermediateTrack();
    if(current){
      current.outerHTML = html;
      return;
    }
    var roadmap = panel.querySelector('.roadmap-section');
    if(roadmap) roadmap.insertAdjacentHTML('afterend', html);
    else {
      var hero = panel.querySelector('.home-hero');
      if(hero) hero.insertAdjacentHTML('beforeend', html);
    }
  }

  function renderIntermediateVisual(index){
    if(index < START_INDEX || index >= START_INDEX + TRACK_SIZE) return '';
    var pack = getPack();
    var lesson = (lessons[langKey()] && lessons[langKey()][index]) || (lessons.en && lessons.en[index]);
    var steps = lesson && lesson.visual ? lesson.visual : [];
    var practice = getPracticeData(langKey(), index, lesson || {});
    if(index === START_INDEX) return renderLessonEightHeroVisual(index, lesson || {}, practice);
    var visualItems = steps.map(function(step, i){
      return {
        title: typeof step === 'object' ? displayText(step.title || step.label || step.text || step.name || step) : displayText(step),
        desc: displayText((typeof step === 'object' ? (step.desc || step.description || step.body || '') : '') || (practice.checks && practice.checks[i]) || (lesson && lesson.points && lesson.points[i]) || '')
      };
    });
    if(window.__CA_LESSON_SEVEN_TEMPLATE && typeof window.__CA_LESSON_SEVEN_TEMPLATE.renderVisual === 'function'){
      return window.__CA_LESSON_SEVEN_TEMPLATE.renderVisual({
        visual: visualItems
      });
    }
    var visualTitle = index === START_INDEX && typeof t === 'function' ? t('visual.title') : pack.visual;
    return '<div class="visual lesson-guide-panel"><div class="visual-title">' + esc(visualTitle) + '</div><div class="lesson-guide-step-strip">'
      + visualItems.map(function(step, i){
        return '<div class="lesson-guide-step-card"><div class="lesson-guide-step-num">0' + (i + 1) + '</div><div class="lesson-guide-step-copy"><div class="lesson-guide-step-head">' + esc(step.title) + '</div>' + (step.desc ? '<div class="lesson-guide-step-body">' + esc(step.desc) + '</div>' : '') + '</div></div>';
      }).join('')
      + '</div></div>';
  }

  function renderMiniChips(items){
    return '<div class="lesson-guide-check-row">' + (items || []).slice(0,3).map(function(item){
      return '<span class="lesson-guide-check-chip">' + esc(item) + '</span>';
    }).join('') + '</div>';
  }

  function renderGuideList(items){
    return '<ul class="lesson-guide-points">' + (items || []).slice(0,3).map(function(item){
      return '<li>' + esc(item) + '</li>';
    }).join('') + '</ul>';
  }

  function sceneCopyFor(lang){
    var base = labelsFor(lang);
    var common = {
      mock:base.summaryTitle, compare:base.compareTitle, warning:base.warningTitle, checklist:base.checkTitle,
      decision:base.continueTitle, exchange:'Exchange', wallet:'Wallet', control:'Control', recovery:'Recovery',
      asset:'Asset', network:'Network', fee:'Fee', eta:'ETA', reserve:'Reserve', risk:'Risk',
      connect:'Connect', approve:'Approve', sign:'Sign', swap:'Swap', redFlag:'Red flag', greenFlag:'Green flag',
      chainA:'Chain A', bridge:'Bridge', chainB:'Chain B', source:'Source', domain:'Domain',
      contract:'Contract', review:'Review', verified:'Verified', suspicious:'Suspicious'
    };
    var localized = {
      ko:{mock:'모의 화면',compare:'비교',warning:'주의',checklist:'체크리스트',decision:'판단',exchange:'거래소',wallet:'지갑',control:'통제권',recovery:'복구',asset:'자산',network:'네트워크',fee:'수수료',eta:'도착 예상',reserve:'준비금',risk:'위험',connect:'연결',approve:'승인',sign:'서명',swap:'스왑',redFlag:'위험 신호',greenFlag:'좋은 신호',chainA:'체인 A',bridge:'브리지',chainB:'체인 B',source:'출처',domain:'도메인',contract:'컨트랙트',review:'최종 확인',verified:'검증됨',suspicious:'의심'},
      th:{mock:'หน้าจอจำลอง',compare:'เปรียบเทียบ',warning:'คำเตือน',checklist:'เช็กลิสต์',decision:'ตัดสินใจ',exchange:'แพลตฟอร์มซื้อขาย',wallet:'วอลเล็ต',control:'ควบคุม',recovery:'กู้คืน',asset:'สินทรัพย์',network:'เครือข่าย',fee:'ค่าธรรมเนียม',eta:'เวลา',reserve:'สำรอง',risk:'ความเสี่ยง',connect:'เชื่อมต่อ',approve:'อนุมัติ',sign:'ลงนาม',swap:'สวอป',redFlag:'สัญญาณเสี่ยง',greenFlag:'สัญญาณดี',chainA:'เชน A',bridge:'บริดจ์',chainB:'เชน B',source:'แหล่งที่มา',domain:'โดเมน',contract:'สัญญา',review:'ตรวจสุดท้าย',verified:'ตรวจแล้ว',suspicious:'น่าสงสัย'},
      id:{mock:'UI simulasi',compare:'Bandingkan',warning:'Peringatan',checklist:'Daftar cek',decision:'Keputusan',exchange:'Bursa',wallet:'Dompet',control:'Kontrol',recovery:'Pemulihan',asset:'Aset',network:'Jaringan',fee:'Biaya',eta:'Waktu',reserve:'Cadangan',risk:'Risiko',connect:'Hubungkan',approve:'Setujui',sign:'Tanda tangan',swap:'Tukar',redFlag:'Sinyal risiko',greenFlag:'Sinyal baik',chainA:'Rantai A',bridge:'Jembatan',chainB:'Rantai B',source:'Sumber',domain:'Domain',contract:'Kontrak',review:'Tinjauan akhir',verified:'Terverifikasi',suspicious:'Mencurigakan'},
      pt:{mock:'UI simulado',compare:'Comparar',warning:'Atenção',checklist:'Lista de verificação',decision:'Decisão',exchange:'Corretora',wallet:'Carteira',control:'Controle',recovery:'Recuperação',asset:'Ativo',network:'Rede',fee:'Taxa',eta:'Tempo',reserve:'Reserva',risk:'Risco',connect:'Conectar',approve:'Aprovar',sign:'Assinar',swap:'Trocar',redFlag:'Sinal de risco',greenFlag:'Sinal positivo',chainA:'Rede A',bridge:'Ponte',chainB:'Rede B',source:'Fonte',domain:'Domínio',contract:'Contrato',review:'Revisão final',verified:'Verificado',suspicious:'Suspeito'},
      br:{mock:'UI simulado',compare:'Comparar',warning:'Atenção',checklist:'Lista de verificação',decision:'Decisão',exchange:'Corretora',wallet:'Carteira',control:'Controle',recovery:'Recuperação',asset:'Ativo',network:'Rede',fee:'Taxa',eta:'Tempo',reserve:'Reserva',risk:'Risco',connect:'Conectar',approve:'Aprovar',sign:'Assinar',swap:'Trocar',redFlag:'Sinal de risco',greenFlag:'Sinal positivo',chainA:'Rede A',bridge:'Ponte',chainB:'Rede B',source:'Fonte',domain:'Domínio',contract:'Contrato',review:'Revisão final',verified:'Verificado',suspicious:'Suspeito'},
      tr:{mock:'Örnek arayüz',compare:'Karşılaştır',warning:'Uyarı',checklist:'Kontrol listesi',decision:'Karar',exchange:'Borsa',wallet:'Cüzdan',control:'Kontrol',recovery:'Kurtarma',asset:'Varlık',network:'Ağ',fee:'Ücret',eta:'Süre',reserve:'Rezerv',risk:'Risk',connect:'Bağlan',approve:'Onayla',sign:'İmzala',swap:'Takas',redFlag:'Risk sinyali',greenFlag:'Olumlu sinyal',chainA:'Zincir A',bridge:'Köprü',chainB:'Zincir B',source:'Kaynak',domain:'Alan adı',contract:'Kontrat',review:'Son kontrol',verified:'Doğrulandı',suspicious:'Şüpheli'},
      es:{mock:'UI simulado',compare:'Comparar',warning:'Advertencia',checklist:'Lista de verificación',decision:'Decisión',exchange:'Plataforma',wallet:'Billetera',control:'Control',recovery:'Recuperación',asset:'Activo',network:'Red',fee:'Comisión',eta:'Tiempo',reserve:'Reserva',risk:'Riesgo',connect:'Conectar',approve:'Aprobar',sign:'Firmar',swap:'Intercambiar',redFlag:'Señal de riesgo',greenFlag:'Señal positiva',chainA:'Cadena A',bridge:'Puente',chainB:'Cadena B',source:'Fuente',domain:'Dominio',contract:'Contrato',review:'Revisión final',verified:'Verificado',suspicious:'Sospechoso'},
      ar:{mock:'واجهة تدريبية',compare:'مقارنة',warning:'تحذير',checklist:'قائمة فحص',decision:'قرار',exchange:'منصة',wallet:'محفظة',control:'تحكم',recovery:'استرداد',asset:'أصل',network:'شبكة',fee:'رسوم',eta:'وقت',reserve:'احتياطي',risk:'خطر',connect:'اتصال',approve:'موافقة',sign:'توقيع',swap:'تبديل',redFlag:'إشارة خطر',greenFlag:'إشارة جيدة',chainA:'السلسلة A',bridge:'جسر',chainB:'السلسلة B',source:'مصدر',domain:'نطاق',contract:'عقد',review:'مراجعة',verified:'موثق',suspicious:'مشبوه'},
      vi:{mock:'UI mô phỏng',compare:'So sánh',warning:'Cảnh báo',checklist:'Danh sách kiểm tra',decision:'Quyết định',exchange:'Sàn',wallet:'Ví',control:'Kiểm soát',recovery:'Khôi phục',asset:'Tài sản',network:'Mạng',fee:'Phí',eta:'Thời gian',reserve:'Dự trữ',risk:'Rủi ro',connect:'Kết nối',approve:'Phê duyệt',sign:'Ký',swap:'Hoán đổi',redFlag:'Tín hiệu rủi ro',greenFlag:'Tín hiệu tốt',chainA:'Chuỗi A',bridge:'Cầu nối',chainB:'Chuỗi B',source:'Nguồn',domain:'Tên miền',contract:'Hợp đồng',review:'Kiểm tra cuối',verified:'Đã xác minh',suspicious:'Đáng ngờ'},
      ha:{mock:'UI na gwaji',compare:'Kwatanta',warning:'Gargadi',checklist:'Jerin dubawa',decision:'Yanke shawara',exchange:'Dandalin ciniki',wallet:'Walat',control:'Iko',recovery:'Mayarwa',asset:'Kadara',network:'Hanyar sadarwa',fee:'Kudi',eta:'Lokaci',reserve:'Ajiya',risk:'Hadari',connect:'Haɗa',approve:'Amince',sign:'Sa hannu',swap:'Musanya',redFlag:'Alamar hadari',greenFlag:'Alama mai kyau',chainA:'Sarka A',bridge:'Gada',chainB:'Sarka B',source:'Tushe',domain:'Yanki',contract:'Kwantiragi',review:'Duba ƙarshe',verified:'An tabbatar',suspicious:'Mai tuhuma'}
    };
    var picked = localized[lang] || {};
    Object.keys(common).forEach(function(key){ if(!picked[key]) picked[key] = common[key]; });
    return picked;
  }

  function normalizeIntermediateLocalePacks(){
    var fixes = {
      th:{relatedFree:'เช็กลิสต์ / PDF ฟรี',relatedDeep:'ทบทวนด้วยอีบุ๊ก',relatedSources:'คลังแหล่งข้อมูล',titles:['ใช้แพลตฟอร์มซื้อขายและวอลเล็ตอย่างไร','เปรียบเทียบเครือข่ายและค่าธรรมเนียมจริง','เหรียญเสถียรต่างกันอย่างไรและต้องระวังอะไร','เริ่มเข้าใจ DeFi จากอะไรก่อน','สิ่งที่ต้องดูจริงใน NFT และโปรเจกต์โทเคน','ทำไมบริดจ์และหลายเชนจึงสำคัญ','ตรวจสอบข้อมูลอย่างไรก่อนเชื่อ'],subs:['สมดุลระหว่างความสะดวกและการควบคุม','ดูค่าธรรมเนียม ความเร็ว และความเสี่ยง','มองให้ไกลกว่าราคาใกล้หนึ่งดอลลาร์','แยกการเชื่อมต่อ อนุมัติ ลงนาม และสวอป','ดูมากกว่ารูปและกระแส','ย้ายข้ามเชนอย่างระวัง','สร้างลำดับการตรวจสอบซ้ำได้']},
      id:{relatedFree:'Daftar cek / PDF gratis',relatedDeep:'Ulasan terstruktur di e-book',relatedSources:'Perpustakaan sumber',titles:['Cara memakai bursa dan dompet bersama','Cara membandingkan jaringan dan biaya','Perbedaan koin stabil dan hal yang perlu diawasi','Hal pertama yang dipahami saat masuk DeFi','Yang benar-benar penting saat menilai NFT dan proyek token','Mengapa jembatan dan multirantai penting','Cara memverifikasi informasi sebelum dipercaya'],subs:['Seimbangkan praktis dan kontrol','Bandingkan biaya, cepat, dan risiko salah','Jangan hanya melihat harga satu dolar','Pahami hubungkan setujui tanda tangan tukar','Lihat lebih dari gambar dan hype','Risiko berubah saat pindah rantai','Bangun rutinitas verifikasi']},
      pt:{relatedFree:'Lista de verificação / PDF gratuito',relatedDeep:'Revisão estruturada no e-book',relatedSources:'Biblioteca de fontes',titles:['Como usar corretoras e carteiras juntas','Como comparar redes e taxas na prática','Como moedas estáveis diferem e o que observar','O que entender primeiro ao entrar em DeFi','O que realmente importa ao avaliar NFTs e tokens','Por que pontes e múltiplas redes importam','Como verificar informações antes de confiar'],subs:['Equilibre conveniência e controle','Compare taxa, velocidade e risco','Vá além do preço de um dólar','Entenda conectar aprovar assinar trocar','Veja além da imagem e do hype','O risco muda entre redes','Crie uma rotina de verificação']},
      br:{relatedFree:'Lista de verificação / PDF gratuito',relatedDeep:'Revisão estruturada no e-book',relatedSources:'Biblioteca de fontes',titles:['Como usar corretoras e carteiras juntas','Como comparar redes e taxas na prática','Como moedas estáveis diferem e o que observar','O que entender primeiro ao entrar em DeFi','O que realmente importa ao avaliar NFTs e tokens','Por que pontes e múltiplas redes importam','Como verificar informações antes de confiar'],subs:['Equilibre conveniência e controle','Compare taxa, velocidade e risco','Vá além do preço de um dólar','Entenda conectar aprovar assinar trocar','Veja além da imagem e do hype','O risco muda entre redes','Crie uma rotina de verificação']},
      tr:{relatedFree:'Ücretsiz kontrol listesi / PDF',relatedDeep:'E-kitap ile düzenli tekrar',relatedSources:'Kaynak kütüphanesi',titles:['Borsa ve cüzdan birlikte nasıl kullanılır','Ağlar ve ücretler pratikte nasıl karşılaştırılır','Sabit coinler nasıl farklıdır ve neye dikkat edilir','DeFiye girerken önce ne anlaşılmalı','NFT ve token projelerinde gerçekten önemli olanlar','Köprüler ve çoklu zincir neden önemli','Güvenmeden önce bilgi nasıl doğrulanır'],subs:['Kolaylık ve kontrol dengesi','Ücret, hız ve hata riskini karşılaştır','Bir dolarlık fiyattan ötesine bak','Bağlan onayla imzala takas ayrımı','Görsel ve hype ötesine bak','Zincir değişince risk değişir','Tekrarlanabilir doğrulama rutini']},
      es:{relatedFree:'Lista de verificación / PDF gratis',relatedDeep:'Repaso estructurado en e-book',relatedSources:'Biblioteca de fuentes',titles:['Cómo usar plataformas y billeteras juntas','Cómo comparar redes y comisiones en la práctica','Cómo difieren las monedas estables y qué vigilar','Qué entender primero al entrar en DeFi','Qué importa realmente al evaluar NFT y tokens','Por qué puentes y múltiples cadenas importan','Cómo verificar información antes de confiar'],subs:['Equilibra comodidad y control','Compara comisión, velocidad y riesgo','Mira más allá del precio de un dólar','Entiende conectar aprobar firmar intercambiar','Mira más allá de imagen e hype','El riesgo cambia entre cadenas','Crea una rutina de verificación']},
      vi:{relatedFree:'Danh sách kiểm tra / PDF miễn phí',relatedDeep:'Ôn tập có cấu trúc bằng sách điện tử',relatedSources:'Thư viện nguồn',titles:['Cách dùng sàn và ví cùng nhau','Cách so sánh mạng và phí trong thực tế','Đồng ổn định khác nhau thế nào và cần chú ý gì','Cần hiểu gì trước khi vào DeFi','Điều thật sự quan trọng khi đánh giá NFT và token','Vì sao cầu nối và đa chuỗi quan trọng','Cách xác minh thông tin trước khi tin'],subs:['Cân bằng tiện lợi và quyền kiểm soát','So sánh phí, tốc độ và rủi ro','Nhìn xa hơn mức giá một đô la','Hiểu kết nối phê duyệt ký và hoán đổi','Nhìn xa hơn hình ảnh và hype','Rủi ro đổi khi qua chuỗi','Tạo thói quen xác minh']},
      ha:{relatedFree:'Jerin dubawa / PDF kyauta',relatedDeep:'Bita mai tsari a littafin lantarki',relatedSources:'Laburaren tushe',titles:['Yadda ake amfani da dandali da walat tare','Yadda ake kwatanta hanyoyin sadarwa da kudade','Yadda kudi masu daidaito suka bambanta','Abin fahimta da farko kafin DeFi','Abin da ya fi muhimmanci wajen NFT da token','Me yasa gada da sarkoki da yawa suke da muhimmanci','Yadda ake tabbatar da bayani kafin a amince'],subs:['Daidaita sauki da iko','Kwatanta kudi, sauri da kuskure','Duba fiye da farashin dala daya','Fahimci haɗa amince sa hannu musanya','Duba bayan hoto da hayaniya','Hadari yana sauyawa tsakanin sarkoki','Gina tsarin tantancewa']}
    };
    Object.keys(fixes).forEach(function(lang){
      if(!compactPacks[lang]) return;
      Object.keys(fixes[lang]).forEach(function(key){ compactPacks[lang][key] = fixes[lang][key]; });
    });
    if(practiceLabels.id) practiceLabels.id.continueFallback = 'Lihat perpustakaan sumber';
    if(practiceLabels.ha){
      practiceLabels.ha.kitTitle = 'Kayan aiki';
      practiceLabels.ha.summaryTitle = 'Muhimmin bayani';
    }
    ['pt','br'].forEach(function(lang){
      if(compactPacks[lang] && compactPacks[lang].subs) compactPacks[lang].subs[1] = 'Avalie taxa, velocidade e risco';
      if(practiceLabels[lang]) practiceLabels[lang].compareTitle = 'Analise antes de agir';
    });
  }
  normalizeIntermediateLocalePacks();

  function renderSceneRows(rows){
    return (rows || []).slice(0,3).map(function(row){
      return '<div class="lesson-guide-scene-row"><span>' + esc(displayField(row, 0)) + '</span><strong>' + esc(displayField(row, 1)) + '</strong></div>';
    }).join('');
  }

  function renderSceneFlow(nodes){
    return '<div class="lesson-guide-scene-flow">' + (nodes || []).map(function(node, i){
      return '<div class="lesson-guide-scene-node"><span>' + esc(String(i + 1).padStart(2,'0')) + '</span><strong>' + esc(node) + '</strong></div>';
    }).join('<div class="lesson-guide-scene-arrow" aria-hidden="true">&rarr;</div>') + '</div>';
  }

  function renderSceneCards(cards){
    return '<div class="lesson-guide-scene-grid">' + (cards || []).slice(0,3).map(function(card){
      return '<div class="lesson-guide-scene-card"><span>' + esc(displayField(card, 0)) + '</span><strong>' + esc(displayField(card, 1)) + '</strong><p>' + esc(displayField(card, 2)) + '</p></div>';
    }).join('') + '</div>';
  }

  function renderSceneBody(kind, copy, lesson, practice, options){
    var visual = (lesson && lesson.visual) || [];
    var checks = (practice && practice.checks) || (lesson && lesson.checkpoints) || [];
    var compare = (options && options.compareItems) || (practice && practice.compare) || [];
    if(kind === 'custody'){
      return '<div class="lesson-guide-scene-split">'
        + '<div class="lesson-guide-scene-card is-primary"><span>' + esc(copy.exchange) + '</span><strong>' + esc(visual[0] || copy.exchange) + '</strong>' + renderSceneRows([[copy.decision, displayField(compare[0], 0) || copy.compare],[copy.fee, checks[0] || ''],[copy.risk, checks[1] || '']]) + '</div>'
        + '<div class="lesson-guide-scene-card is-secondary"><span>' + esc(copy.wallet) + '</span><strong>' + esc(visual[1] || copy.wallet) + '</strong>' + renderSceneRows([[copy.control, displayField(compare[1], 0) || copy.control],[copy.recovery, visual[2] || copy.recovery],[copy.checklist, checks[2] || '']]) + '</div>'
        + '</div>';
    }
    if(kind === 'network'){
      return '<div class="lesson-guide-scene-form">'
        + renderSceneRows([[copy.asset,'USDT'],[copy.network,'ERC20 / TRC20 / BEP20 / SOL'],[copy.fee, visual[0] || '']])
        + '<div class="lesson-guide-scene-chip-row"><span>ERC20</span><span>TRC20</span><span>BEP20</span><span>SOL</span></div>'
        + '<div class="lesson-guide-scene-warning">' + esc((practice && practice.warning) || checks[0] || '') + '</div>'
        + '</div>';
    }
    if(kind === 'stablecoin'){
      return renderSceneCards([
        ['USDT', copy.reserve, visual[0] || displayField(compare[0], 0) || ''],
        ['USDC', copy.verified, visual[1] || displayField(compare[0], 1) || ''],
        ['DAI', copy.risk, visual[2] || displayField(compare[1], 0) || '']
      ]) + '<div class="lesson-guide-scene-warning">' + esc((practice && practice.warning) || '') + '</div>';
    }
    if(kind === 'defi'){
      return renderSceneFlow([copy.connect, copy.approve, copy.sign, copy.swap])
        + '<div class="lesson-guide-scene-warning">' + esc((practice && practice.warning) || checks[0] || '') + '</div>';
    }
    if(kind === 'projects'){
      return '<div class="lesson-guide-scene-dashboard">'
        + renderSceneRows([[copy.greenFlag, displayField(compare[1], 0) || checks[0] || ''],[copy.redFlag, displayField(compare[0], 0) || checks[1] || ''],[copy.review, checks[2] || checks[0] || '']])
        + '<div class="lesson-guide-scene-meter"><span style="inline-size:72%"></span></div>'
        + '<div class="lesson-guide-scene-meter is-warning"><span style="inline-size:38%"></span></div>'
        + '</div>';
    }
    if(kind === 'bridge'){
      return renderSceneFlow([copy.chainA, copy.bridge, copy.chainB])
        + renderSceneCards([[copy.source, checks[0] || visual[0] || ''],[copy.network, checks[1] || visual[2] || ''],[copy.risk, checks[2] || visual[3] || '']]);
    }
    if(kind === 'verify'){
      return renderSceneFlow([copy.source, copy.domain, copy.contract, copy.review])
        + '<div class="lesson-guide-scene-split is-compact">'
        + '<div class="lesson-guide-scene-card is-risk"><span>' + esc(copy.suspicious) + '</span><strong>promo-example.io</strong></div>'
        + '<div class="lesson-guide-scene-card is-safe"><span>' + esc(copy.verified) + '</span><strong>' + esc(copy.source) + ' + ' + esc(copy.domain) + '</strong></div>'
        + '</div>';
    }
    return renderSceneCards((compare || []).map(function(item){ return [copy.compare, displayField(item, 0), displayField(item, 1)]; }));
  }

  function sceneKindForIndex(index){
    return ['custody','network','stablecoin','defi','projects','bridge','verify'][index - START_INDEX] || 'reference';
  }

  function lessonEightCopy(lang){
    var pack = packs[lang] || compactPacks[lang] || packs.en;
    var scene = sceneCopyFor(lang);
    var labels = labelsFor(lang);
    var title = (pack.titles && pack.titles[0]) || 'How to split exchange and wallet use';
    var sub = (pack.subs && pack.subs[0]) || title;
    var common = {
      label:scene.decision,
      splitTitle:title,
      splitDesc:sub,
      exchangeLabel:scene.exchange,
      exchangeTitle:scene.exchange,
      exchangeNote:scene.fee + ' / ' + scene.swap + ' / ' + scene.network,
      walletLabel:scene.wallet,
      walletTitle:scene.wallet,
      walletNote:scene.control + ' / ' + scene.recovery,
      convenience:labels.compareA,
      control:scene.control,
      recovery:scene.recovery,
      longTerm:scene.review,
      decisionTitle:scene.decision,
      decisionDesc:sub,
      q1:scene.exchange + '?',
      q2:scene.wallet + '?',
      q3:scene.recovery + '?',
      a1:scene.exchange,
      a2:scene.wallet,
      a3:scene.recovery,
      scenarioTitle:scene.mock,
      exchangeMock:scene.exchange,
      walletMock:scene.wallet,
      sell:scene.swap,
      address:scene.wallet,
      limited:scene.risk,
      direct:scene.control,
      checklistTitle:labels.checkTitle,
      checklistDesc:labels.warningTitle,
      checks:[scene.asset, scene.control, scene.recovery, scene.network, labels.checkTitle],
      note:sub,
      compare:scene.compare
    };
    var overrides = {
      en:{label:'Custody decision card',splitTitle:'How to split exchange and wallet use',splitDesc:'Exchanges are convenient for buying and selling. Wallets matter when you want more direct control and longer-term custody.',exchangeLabel:'Exchange-like setup',exchangeTitle:'Exchange holding',exchangeNote:'Fast trade / convert / withdraw',walletLabel:'Wallet-like setup',walletTitle:'Wallet custody',walletNote:'Control / recovery / long-term hold',convenience:'Convenience',control:'Control',recovery:'Recovery duty',longTerm:'Long-term fit',decisionTitle:'Where should this asset stay?',decisionDesc:'Start with the asset purpose and your recovery readiness.',q1:'Will you sell or swap soon?',q2:'Is this for long-term holding?',q3:'Can you manage recovery safely?',a1:'Keep only a small active amount',a2:'Consider wallet custody',a3:'Prepare recovery first',scenarioTitle:'Real custody state example',exchangeMock:'Exchange holding state',walletMock:'Wallet custody state',sell:'Quick sell / convert',address:'Wallet address',limited:'Direct control is limited',direct:'Direct control is stronger',checklistTitle:'Check these before moving assets',checklistDesc:'Move carefully. Start with an amount you can manage and recover.',checks:['Will you use this asset often?','Is it for long-term holding?','Can you protect the recovery phrase?','Do you understand the transfer network?','Do you need to move everything at once?'],note:'There is no single correct answer. Split assets by purpose, amount, and recovery readiness.'},
      ko:{label:'보관 판단 카드',splitTitle:'거래소와 지갑을 나눠 쓰는 기준',splitDesc:'거래소는 빠르게 사고팔기 좋고, 지갑은 직접 통제하고 오래 보관할 때 더 중요합니다.',exchangeLabel:'거래소형 보관',exchangeTitle:'거래소 보관',exchangeNote:'거래 / 전환 / 입출금이 빠름',walletLabel:'지갑형 보관',walletTitle:'지갑 보관',walletNote:'통제권 / 복구 책임 / 장기 보관',convenience:'편의성',control:'통제권',recovery:'복구 책임',longTerm:'장기 보관',decisionTitle:'언제 어디에 둘까?',decisionDesc:'자산의 목적과 복구 준비 상태를 먼저 나누면 선택이 쉬워집니다.',q1:'곧 팔거나 교환할 예정인가?',q2:'오래 보관할 자산인가?',q3:'복구 문구를 안전하게 관리할 수 있는가?',a1:'거래소에 소액만',a2:'지갑 보관 검토',a3:'먼저 복구 준비',scenarioTitle:'실제 보관 상태 예시',exchangeMock:'거래소 보유 상태',walletMock:'지갑 보관 상태',sell:'빠른 매도/전환',address:'지갑 주소',limited:'직접 통제권은 제한적',direct:'직접 통제권이 큼',checklistTitle:'옮기기 전에 이것부터 확인하세요',checklistDesc:'한 번에 전부 옮기기보다 감당 가능한 금액부터 확인하세요.',checks:['자주 쓸 자산인가?','장기 보관용인가?','복구 문구를 안전하게 관리할 수 있는가?','전송 네트워크를 이해했는가?','전체를 한 번에 옮길 필요가 있는가?'],note:'정답은 하나가 아닙니다. 목적, 금액, 복구 준비에 맞춰 나누는 것이 핵심입니다.'},
      th:{label:'การ์ดตัดสินใจการดูแล',splitTitle:'แบ่งใช้แพลตฟอร์มซื้อขายกับวอลเล็ตอย่างไร',splitDesc:'แพลตฟอร์มซื้อขายเหมาะกับการซื้อขายเร็ว ส่วนวอลเล็ตสำคัญเมื่ออยากควบคุมและเก็บระยะยาว.',exchangeLabel:'แบบแพลตฟอร์มซื้อขาย',exchangeTitle:'เก็บบนแพลตฟอร์ม',exchangeNote:'ซื้อขาย / แลก / ถอนเร็ว',walletLabel:'แบบวอลเล็ต',walletTitle:'เก็บในวอลเล็ต',walletNote:'ควบคุม / กู้คืน / เก็บยาว',convenience:'ความสะดวก',control:'การควบคุม',recovery:'หน้าที่กู้คืน',longTerm:'เหมาะระยะยาว',decisionTitle:'สินทรัพย์นี้ควรอยู่ที่ไหน?',decisionDesc:'เริ่มจากวัตถุประสงค์ของสินทรัพย์และความพร้อมในการกู้คืน.',q1:'จะขายหรือสวอปเร็ว ๆ นี้ไหม?',q2:'เป็นการเก็บระยะยาวไหม?',q3:'จัดการการกู้คืนได้ปลอดภัยไหม?',a1:'เก็บจำนวนใช้งานเล็กน้อย',a2:'พิจารณาเก็บในวอลเล็ต',a3:'เตรียมการกู้คืนก่อน',scenarioTitle:'ตัวอย่างสถานะการดูแลจริง',exchangeMock:'สถานะบนแพลตฟอร์ม',walletMock:'สถานะในวอลเล็ต',sell:'ขาย / แลกได้เร็ว',address:'ที่อยู่วอลเล็ต',limited:'การควบคุมโดยตรงจำกัด',direct:'ควบคุมโดยตรงมากขึ้น',checklistTitle:'ตรวจสิ่งนี้ก่อนย้ายสินทรัพย์',checklistDesc:'ย้ายอย่างระวัง เริ่มจากจำนวนที่จัดการและกู้คืนได้.',checks:['จะใช้สินทรัพย์นี้บ่อยไหม?','เก็บระยะยาวหรือไม่?','ป้องกันวลีกู้คืนได้ไหม?','เข้าใจเครือข่ายโอนแล้วหรือยัง?','จำเป็นต้องย้ายทั้งหมดไหม?'],note:'ไม่มีคำตอบเดียวที่ถูกเสมอ แบ่งตามเป้าหมาย จำนวนเงิน และความพร้อมในการกู้คืน.'},
      tr:{label:'Saklama karar kartı',decisionTitle:'Bu varlık nerede durmalı?',q1:'Yakında satacak veya takas edecek misin?',q2:'Uzun vadeli tutma mı?',q3:'Kurtarmayı güvenle yönetebilir misin?',a1:'Sadece küçük aktif tutar',a2:'Cüzdan saklamayı düşün',a3:'Önce kurtarmayı hazırla',checklistTitle:'Varlık taşımadan önce kontrol et',checklistDesc:'Dikkatli taşı. Yönetebileceğin ve kurtarabileceğin tutarla başla.',checks:['Bu varlığı sık kullanacak mısın?','Uzun vadeli mi?','Kurtarma ifadesini koruyabilir misin?','Transfer ağını anladın mı?','Her şeyi birden taşımak gerekli mi?']},
      br:{label:'Cartão de decisão de custódia',decisionTitle:'Onde este ativo deve ficar?',q1:'Vai vender ou trocar em breve?',q2:'É para longo prazo?',q3:'Consegue cuidar da recuperação?',a1:'Mantenha só um valor ativo pequeno',a2:'Considere carteira própria',a3:'Prepare a recuperação primeiro',checklistTitle:'Confira antes de mover ativos',checklistDesc:'Mova com cuidado. Comece por um valor que você consegue gerenciar.',checks:['Você usará este ativo com frequência?','É para longo prazo?','Consegue proteger a frase de recuperação?','Entende a rede de transferência?','Precisa mover tudo de uma vez?']},
      ar:{label:'بطاقة قرار الحفظ',decisionTitle:'أين يجب أن يبقى هذا الأصل؟',q1:'هل ستبيع أو تبدل قريبًا؟',q2:'هل هو للحفظ الطويل؟',q3:'هل يمكنك إدارة الاسترداد بأمان؟',a1:'احتفظ بمبلغ نشط صغير فقط',a2:'فكّر في حفظ المحفظة',a3:'حضّر الاسترداد أولًا',checklistTitle:'افحص هذا قبل نقل الأصول',checklistDesc:'انقل بحذر وابدأ بمبلغ يمكنك إدارته واسترداده.',checks:['هل ستستخدم هذا الأصل كثيرًا؟','هل هو للحفظ الطويل؟','هل يمكنك حماية عبارة الاسترداد؟','هل تفهم شبكة التحويل؟','هل تحتاج إلى نقل كل شيء دفعة واحدة؟']},
      vi:{label:'Thẻ quyết định lưu ký',decisionTitle:'Tài sản này nên ở đâu?',q1:'Bạn sắp bán hoặc hoán đổi không?',q2:'Có phải để giữ dài hạn không?',q3:'Bạn quản lý khôi phục an toàn được không?',a1:'Chỉ giữ một khoản nhỏ để dùng',a2:'Cân nhắc lưu trong ví',a3:'Chuẩn bị khôi phục trước',checklistTitle:'Kiểm tra trước khi chuyển tài sản',checklistDesc:'Chuyển cẩn thận. Bắt đầu với số tiền bạn quản lý được.',checks:['Bạn có dùng tài sản này thường xuyên không?','Có phải giữ dài hạn không?','Bảo vệ cụm từ khôi phục được không?','Đã hiểu mạng chuyển chưa?','Có cần chuyển tất cả cùng lúc không?']}
    };
    var picked = overrides[lang] || {};
    Object.keys(picked).forEach(function(key){ common[key] = picked[key]; });
    return common;
  }

  function lessonEightMeter(label, value, tone){
    return '<div class="lesson-eight-meter-row"><span>' + esc(label) + '</span><div class="lesson-eight-meter"><i class="' + esc(tone || '') + '" style="inline-size:' + esc(value) + '%"></i></div></div>';
  }

  function renderLessonEightSplitFallback(copy){
    return '<div class="lesson-eight-split-board">'
      +   '<section class="lesson-eight-side-card is-exchange"><span>' + esc(copy.exchangeLabel) + '</span><strong>' + esc(copy.exchangeTitle) + '</strong><p>' + esc(copy.exchangeNote) + '</p>' + lessonEightMeter(copy.convenience, 86, 'is-high') + lessonEightMeter(copy.control, 42, '') + lessonEightMeter(copy.recovery, 48, '') + '</section>'
      +   '<section class="lesson-eight-side-card is-wallet"><span>' + esc(copy.walletLabel) + '</span><strong>' + esc(copy.walletTitle) + '</strong><p>' + esc(copy.walletNote) + '</p>' + lessonEightMeter(copy.convenience, 54, '') + lessonEightMeter(copy.control, 88, 'is-high') + lessonEightMeter(copy.longTerm, 82, 'is-high') + '</section>'
      + '</div>'
      + '<div class="lesson-eight-reference-note">' + esc(copy.note) + '</div>';
  }

  function renderLessonEightHeroVisual(index, lesson, practice){
    var copy = lessonEightCopy(langKey());
    if(!copy.compare) copy.compare = sceneCopyFor(langKey()).compare || labelsFor(langKey()).compareTitle;
    var imageSrc = getLocalizedLessonImage('lesson8-exchange-wallet-compare', 'lesson8-exchange-wallet-card.png');
    var imageAlt = copy.splitTitle + ' - ' + copy.exchangeTitle + ' vs ' + copy.walletTitle;
    return '<div class="visual lesson-guide-panel lesson-eight-visual-set lesson-eight-split-visual lesson-eight-image-visual" data-lesson8-image-shell>'
      + '<div class="lesson-eight-visual-head"><span class="lesson-guide-kicker">' + esc(copy.label) + '</span><h3>' + esc(copy.splitTitle) + '</h3><p>' + esc(copy.splitDesc) + '</p></div>'
      + '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side lesson-eight-image-figure" data-lesson8-image-figure>'
      + '<img class="lesson-guide-img lesson-eight-comparison-img" loading="lazy" src="' + esc(imageSrc) + '" alt="' + esc(imageAlt) + '" onerror="this.closest(&quot;[data-lesson8-image-shell]&quot;).classList.add(&quot;is-fallback&quot;)">'
      + '<figcaption class="lesson-guide-caption">' + esc(copy.note) + '</figcaption>'
      + '</figure>'
      + '<div class="lesson-eight-image-fallback" data-lesson8-image-fallback>' + renderLessonEightSplitFallback(copy) + '</div>'
      + '</div>';
  }

  function renderLessonEightDecisionFlow(index, lesson, practice){
    var copy = lessonEightCopy(langKey());
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side lesson-guide-scene lesson-eight-decision-figure">'
      + '<div class="lesson-guide-scene-top"><span class="lesson-guide-scene-kicker">' + esc(copy.label) + '</span><strong>' + esc(copy.decisionTitle) + '</strong></div>'
      + '<div class="lesson-eight-decision-map">'
      +   '<div class="lesson-eight-decision-node is-question"><span>01</span><strong>' + esc(copy.q1) + '</strong><em>' + esc(copy.a1) + '</em></div>'
      +   '<div class="lesson-eight-decision-link" aria-hidden="true">&rarr;</div>'
      +   '<div class="lesson-eight-decision-node is-question"><span>02</span><strong>' + esc(copy.q2) + '</strong><em>' + esc(copy.a2) + '</em></div>'
      +   '<div class="lesson-eight-decision-link" aria-hidden="true">&rarr;</div>'
      +   '<div class="lesson-eight-decision-node is-question"><span>03</span><strong>' + esc(copy.q3) + '</strong><em>' + esc(copy.a3) + '</em></div>'
      + '</div>'
      + '<figcaption class="lesson-guide-caption">' + esc(copy.decisionDesc) + '</figcaption>'
      + '</figure>';
  }

  function renderLessonEightScenarioMock(index, lesson, practice){
    var copy = lessonEightCopy(langKey());
    if(!copy.compare) copy.compare = sceneCopyFor(langKey()).compare || labelsFor(langKey()).compareTitle;
    if(!copy.compare) copy.compare = labelsFor(langKey()).compareTitle || labelsFor('en').compareTitle;
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side lesson-guide-scene lesson-eight-scenario-figure">'
      + '<div class="lesson-guide-scene-top"><span class="lesson-guide-scene-kicker">' + esc(copy.compare) + '</span><strong>' + esc(copy.scenarioTitle) + '</strong></div>'
      + '<div class="lesson-eight-mock-pair">'
      +   '<div class="lesson-eight-app-card"><div class="lesson-eight-app-top"><span></span><span></span><span></span></div><strong>' + esc(copy.exchangeMock) + '</strong><div class="lesson-eight-asset-row"><span>BTC</span><b>0.015</b></div><div class="lesson-eight-asset-row"><span>USDT</span><b>120.00</b></div><p>' + esc(copy.sell) + '</p><em>' + esc(copy.limited) + '</em></div>'
      +   '<div class="lesson-eight-app-card is-wallet"><div class="lesson-eight-app-top"><span></span><span></span><span></span></div><strong>' + esc(copy.walletMock) + '</strong><div class="lesson-eight-address">' + esc(copy.address) + ': 0x7A...42F9</div><div class="lesson-eight-asset-row"><span>ETH</span><b>0.42</b></div><p>' + esc(copy.direct) + '</p><em>' + esc(copy.recovery) + '</em></div>'
      + '</div>'
      + '<figcaption class="lesson-guide-caption">' + esc(copy.note) + '</figcaption>'
      + '</figure>';
  }

  function renderLessonEightChecklistCard(index, lesson, practice){
    var copy = lessonEightCopy(langKey());
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side lesson-guide-scene lesson-eight-check-figure">'
      + '<div class="lesson-guide-scene-top"><span class="lesson-guide-scene-kicker">' + esc(copy.checklistTitle) + '</span><strong>' + esc(copy.checklistDesc) + '</strong></div>'
      + '<ul class="lesson-eight-check-list">' + copy.checks.map(function(item){ return '<li><span aria-hidden="true"></span>' + esc(item) + '</li>'; }).join('') + '</ul>'
      + '<figcaption class="lesson-guide-caption">' + esc(copy.note) + '</figcaption>'
      + '</figure>';
  }

  function renderLessonGuideDataImage(title, caption, tone, options){
    options = options || {};
    var index = typeof options.index === 'number' ? options.index : -1;
    var lang = langKey();
    var copy = sceneCopyFor(lang);
    var lesson = options.lesson || ((lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]) || {});
    var practice = options.practice || getPracticeData(lang, index, lesson);
    var kind = sceneKindForIndex(index);
    var label = tone === 'warning' ? copy.warning : tone === 'action' ? copy.decision : copy.mock;
    var safeTitle = title || label || '';
    var safeCaption = caption || '';
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side lesson-guide-scene lesson-guide-scene-' + esc(kind) + ' is-' + esc(tone || 'compare') + '">'
      + '<div class="lesson-guide-scene-top"><span class="lesson-guide-scene-kicker">' + esc(label) + '</span><strong>' + esc(safeTitle) + '</strong></div>'
      + renderSceneBody(kind, copy, lesson, practice, options)
      + '<figcaption class="lesson-guide-caption">' + esc(safeCaption) + '</figcaption>'
      + '</figure>';
  }

  function renderLessonGuideCompareFigure(compare, caption, index, lesson, practice){
    var labels = labelsFor(langKey());
    return renderLessonGuideDataImage(caption || labels.compareTitle, caption || '', 'compare', {index:index, lesson:lesson, practice:practice, compareItems:compare});
  }

  function renderLessonGuideWarningFigure(title, body, index, lesson, practice){
    var labels = labelsFor(langKey());
    return renderLessonGuideDataImage(title || labels.warningTitle, body || '', 'warning', {index:index, lesson:lesson, practice:practice});
  }

  function renderLessonGuideActionFigure(title, href, label, index, lesson, practice){
    var labels = labelsFor(langKey());
    return renderLessonGuideDataImage(title || label || labels.continueTitle, label || '', 'action', {index:index, lesson:lesson, practice:practice});
  }

  function renderIntermediateGuidedTop(index){
    if(index < START_INDEX || index >= START_INDEX + TRACK_SIZE) return '';
    var lang = langKey();
    var labels = labelsFor(lang);
    var pack = getPack();
    var lesson = (lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]);
    if(!lesson) return '';
    var practice = getPracticeData(lang, index, lesson);
    var sections = lesson.sections || [];
    var explain = sections[1] || sections[0] || {};
    var mistake = sections[3] || sections[2] || {};
    var compareItems = (practice.compare || []).slice(0,2);
    var compare = compareItems.map(function(item){
      return '<div class="lesson-guide-compare-card"><div class="lesson-guide-compare-title">' + esc(displayField(item, 0)) + '</div><p>' + esc(displayField(item, 1)) + '</p></div>';
    }).join('');
    var figureClass = 'lesson-guide-figure lesson-guide-figure-mock lesson-guide-figure-side';
    var siteFigure = index === START_INDEX ? renderLessonEightDecisionFlow(index, lesson, practice) : renderLessonGuideCompareFigure(compareItems, labels.compareTitle, index, lesson, practice);
    return ''
      + '<section class="lesson-guide-stack" aria-label="' + esc(pack.trackTitle) + '">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split intermediate-guide-context-panel">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(lesson.cat || pack.badge) + '</span><h3>' + esc(explain.h || lesson.title) + '</h3></div>'
      +       '<p class="lesson-guide-body">' + esc((explain.ps && explain.ps[0]) || lesson.easy || lesson.intro || '') + '</p>'
      +       renderMiniChips(lesson.points || practice.checks || [])
      +     '</div>'
      +     (siteFigure || '<figure class="' + figureClass + '"><div class="lesson-guide-compare-grid">' + compare + '</div><figcaption class="lesson-guide-caption">' + esc(labels.compareTitle) + '</figcaption></figure>')
      +   '</div>'
      + '</section>';
  }

  function renderLessonEightGuidedLower(index){
    var lang = langKey();
    var labels = labelsFor(lang);
    var pack = getPack();
    var lesson = (lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]);
    if(!lesson || !window.__CA_LESSON_SEVEN_TEMPLATE || typeof window.__CA_LESSON_SEVEN_TEMPLATE.renderLower !== 'function') return '';
    var practice = getPracticeData(lang, index, lesson);
    var compareItems = (practice.compare || []).slice(0,2);
    var compare = compareItems.map(function(item){
      return '<div class="lesson-guide-compare-card"><div class="lesson-guide-compare-title">' + esc(displayField(item, 0)) + '</div><p>' + esc(displayField(item, 1)) + '</p></div>';
    }).join('');
    var nextIndex = index + 1;
    var nextLesson = nextIndex < START_INDEX + TRACK_SIZE ? ((lessons[lang] && lessons[lang][nextIndex]) || (lessons.en && lessons.en[nextIndex])) : null;
    var continueHref = nextLesson ? routeFor(nextIndex) : (((document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './') + 'sources/');
    var continueText = nextLesson ? nextLesson.title : labels.continueFallback;
    return window.__CA_LESSON_SEVEN_TEMPLATE.renderLower({
      bundleTitle: pack.trackTitle,
      seedKicker: labels.summaryTitle,
      seedTitle: labels.kitTitle,
      seedPoints: (practice.checks || lesson.checkpoints || []).slice(0,3),
      addressKicker: labels.compareTitle,
      addressTitle: labels.compareTitle,
      addressPoints: (practice.compare || []).slice(0,3).map(function(item){ return displayField(item, 0) + ': ' + displayField(item, 1); }),
      clipboardKicker: labels.continueTitle,
      clipboardTitle: continueText,
      clipboardPoints: (lesson.points || practice.checks || []).slice(0,3)
    }, {
      seed: index === START_INDEX ? renderLessonEightChecklistCard(index, lesson, practice) : renderLessonGuideWarningFigure(labels.warningTitle, practice.warning || lesson.mistake || '', index, lesson, practice),
      address: index === START_INDEX ? renderLessonEightScenarioMock(index, lesson, practice) : renderLessonGuideCompareFigure(compareItems, labels.compareTitle, index, lesson, practice),
      clipboard: renderLessonGuideActionFigure(continueText, continueHref, labels.continueTitle, index, lesson, practice)
    });
  }

  function renderRelatedResources(index){
    if(index < START_INDEX || index >= START_INDEX + TRACK_SIZE) return '';
    var pack = getPack();
    var lang = langKey();
    var copy = relatedCopy(lang);
    var lesson = (lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]) || {};
    var prefix = (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
    var checklist = index === 7 ? 'checklists/seed-phrase-safety/' : index === 11 || index === 13 ? 'checklists/fake-website-check/' : 'checklists/before-send/';
    var pdfHref = typeof getPageHeroFreePdfRoute === 'function' ? getPageHeroFreePdfRoute() : (prefix + 'pdf/before-you-send-checklist.html');
    var glossaryLabel = typeof t === 'function' ? (t('nav.glossary') || copy.glossaryLabel) : copy.glossaryLabel;
    var freePdfLabel = typeof pageHeroText === 'function' ? pageHeroText('freePdf') : 'Free PDF';
    if(lang !== 'en' && glossaryLabel === 'Glossary') glossaryLabel = copy.glossaryLabel;
    if(lang !== 'en' && freePdfLabel === 'Free PDF') freePdfLabel = pack.relatedFree;
    var compactTopic = (pack.titles && pack.titles[index - START_INDEX]) || lesson.title || (lessonSlugs[index - START_INDEX] || 'intermediate').replace(/-/g,' ');
    return ''
      + '<section class="lesson-guide-stack lesson-system-related">'
      +   '<div class="lesson-guide-panel">'
      +     '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(pack.sourceLabel) + '</span><h3>' + esc(pack.relatedTitle) + '</h3></div>'
      +     '<div class="source-library-grid">'
      +       renderRelatedResourceCard(prefix + checklist, pack.relatedFree, copy.checklistTitle, copy.checklistDesc, copy.openChecklist)
      +       renderRelatedResourceCard(prefix + 'glossary/', glossaryLabel, compactTopic || copy.glossaryTitle, copy.glossaryDesc, copy.openGlossary)
      +       renderRelatedResourceCard(pdfHref, freePdfLabel, copy.pdfTitle, copy.pdfDesc, copy.openPdf)
      +       renderRelatedResourceCard(prefix + 'sources/', pack.relatedSources, copy.sourcesTitle, copy.sourcesDesc, copy.openSources)
      +       renderRelatedResourceCard(prefix + 'premium-pdf-series/', pack.relatedDeep, copy.ebookTitle, copy.ebookDesc, copy.openEbook)
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  function renderPracticeKit(index){
    if(index < START_INDEX || index >= START_INDEX + TRACK_SIZE) return '';
    if(index === START_INDEX) return '';
    var lang = langKey();
    var labels = labelsFor(lang);
    var pack = getPack();
    var lesson = (lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]);
    if(!lesson) return '';
    var practice = getPracticeData(lang, index, lesson);
    var compareItems = (practice.compare || []).slice(0,2);
    var compare = compareItems.map(function(item){
      return '<div class="lesson-guide-compare-card"><div class="lesson-guide-compare-title">' + esc(displayField(item, 0)) + '</div><p>' + esc(displayField(item, 1)) + '</p></div>';
    }).join('');
    var nextIndex = index + 1;
    var nextLesson = nextIndex < START_INDEX + TRACK_SIZE ? ((lessons[lang] && lessons[lang][nextIndex]) || (lessons.en && lessons.en[nextIndex])) : null;
    var continueHref = nextLesson ? routeFor(nextIndex) : (((document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './') + 'sources/');
    var continueText = nextLesson ? nextLesson.title : labels.continueFallback;
    if(window.__CA_LESSON_SEVEN_TEMPLATE && typeof window.__CA_LESSON_SEVEN_TEMPLATE.renderLower === 'function'){
      return '<div data-lesson-practice-kit="true">' + window.__CA_LESSON_SEVEN_TEMPLATE.renderLower({
        bundleTitle: pack.trackTitle,
        seedKicker: labels.summaryTitle,
        seedTitle: labels.kitTitle,
        seedPoints: (practice.checks || lesson.checkpoints || []).slice(0,3),
        addressKicker: labels.compareTitle,
        addressTitle: labels.compareTitle,
        addressPoints: (practice.compare || []).slice(0,3).map(function(item){ return displayField(item, 0) + ': ' + displayField(item, 1); }),
        clipboardKicker: labels.continueTitle,
        clipboardTitle: continueText,
        clipboardPoints: (lesson.points || practice.checks || []).slice(0,3)
      }, {
        seed: renderLessonGuideWarningFigure(labels.warningTitle, practice.warning || lesson.mistake || '', index, lesson, practice),
        address: renderLessonGuideCompareFigure(compareItems, labels.compareTitle, index, lesson, practice),
        clipboard: renderLessonGuideActionFigure(continueText, continueHref, labels.continueTitle, index, lesson, practice)
      }) + '</div>';
    }
    return ''
      + '<section class="lesson-guide-stack lesson-guide-stack-lower" data-lesson-practice-kit="true">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     renderLessonGuideWarningFigure(labels.warningTitle, practice.warning || lesson.mistake || '', index, lesson, practice)
      +     '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(labels.summaryTitle) + '</span><h3>' + esc(labels.kitTitle) + '</h3></div>'
      +     renderGuideList(practice.checks || lesson.checkpoints || [])
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  function renderBeginnerToIntermediateBridge(index){
    if(index !== START_INDEX - 1) return '';
    var labels = labelsFor(langKey());
    var pack = getPack();
    var targetHref = routeFor(START_INDEX);
    var targetText = pack.trackCta || labels.continueTitle;
    return ''
      + '<section class="lesson-guide-stack lesson-system-bridge" aria-label="' + esc(labels.transitionTitle) + '">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(pack.badge || labels.continueTitle) + '</span><h3>' + esc(labels.transitionTitle) + '</h3></div>'
      +       '<p class="lesson-guide-body">' + esc(labels.transitionText) + '</p>'
      +       '<div class="lesson-guide-check-row"><a class="nav-action primary" href="' + esc(targetHref) + '" data-intermediate-lesson="' + START_INDEX + '">' + esc(targetText) + '</a></div>'
      +     '</div>'
      +     renderLessonGuideActionFigure(targetText, targetHref, labels.continueTitle)
      +   '</div>'
      + '</section>';
  }

  function patchVisuals(){
    var original = window.visualForLesson || (typeof visualForLesson === 'function' ? visualForLesson : null);
    if(typeof original !== 'function' || original.__intermediateTrackWrapped) return;
    var wrapped = function(i){
      if(i >= START_INDEX && i < START_INDEX + TRACK_SIZE) return renderIntermediateVisual(i);
      return original.apply(this, arguments);
    };
    wrapped.__intermediateTrackWrapped = true;
    window.visualForLesson = wrapped;
    try{ visualForLesson = wrapped; }catch(err){}
  }

  function patchIntermediateGuidedVisuals(){
    var previousTop = window.renderLessonGuidedVisualsTop;
    if(previousTop && previousTop.__intermediateGuidedWrapped) return;
    var wrappedTop = function(i, lesson){
      if(i >= START_INDEX && i < START_INDEX + TRACK_SIZE) return renderIntermediateGuidedTop(i);
      return typeof previousTop === 'function' ? previousTop.apply(this, arguments) : '';
    };
    wrappedTop.__intermediateGuidedWrapped = true;
    window.renderLessonGuidedVisualsTop = wrappedTop;
  }

  function patchIntermediateGuidedVisualsLower(){
    var previousLower = window.renderLessonGuidedVisualsLower;
    if(previousLower && previousLower.__lessonEightLowerTemplateWrapped) return;
    var wrappedLower = function(i, lesson){
      if(i === START_INDEX) return renderLessonEightGuidedLower(i);
      return typeof previousLower === 'function' ? previousLower.apply(this, arguments) : '';
    };
    wrappedLower.__lessonEightLowerTemplateWrapped = true;
    window.renderLessonGuidedVisualsLower = wrappedLower;
  }

  function patchRenderLessonRelated(){
    var original = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof original !== 'function' || original.__intermediateRelatedWrapped) return;
    var wrapped = function(i){
      var html = original.apply(this, arguments) || '';
      var related = renderRelatedResources(i);
      var practice = renderPracticeKit(i);
      var bridge = renderBeginnerToIntermediateBridge(i);
      if((!related && !practice && !bridge) || html.indexOf('data-lesson-practice-kit') !== -1 || html.indexOf('lesson-system-related') !== -1 || html.indexOf('lesson-system-bridge') !== -1) return html;
      return html.replace('<div class="complete-row">', bridge + practice + related + '<div class="complete-row">');
    };
    wrapped.__intermediateRelatedWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(err){}
  }

  function addSourceLibraryItems(){
    if(typeof sourceLibrary === 'undefined' || typeof sourceLibraryCats === 'undefined') return;
    Object.keys(packs).forEach(function(lang){
      if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = clone(sourceLibraryCats.en || []);
      if(!sourceLibrary[lang]) sourceLibrary[lang] = clone(sourceLibrary.en || []);
      if(!sourceLibraryCats[lang].some(function(cat){ return cat.key === 'intermediate'; })){
        sourceLibraryCats[lang].push({key:'intermediate', label:(packs[lang] || packs.en).sourceLabel});
      }
      var pack = packs[lang] || packs.en;
      var sourceUrls = ['https://www.ledger.com/academy','https://ethereum.org/en/developers/docs/','https://tether.to/en/transparency/','https://docs.uniswap.org/','https://opensea.io/learn','https://ethereum.org/en/bridges/','https://info.etherscan.com/'];
      var intermediateItems = [];
      for(var itemIndex = 0; itemIndex < TRACK_SIZE; itemIndex++){
        var lesson = (lessons[lang] && lessons[lang][START_INDEX + itemIndex]) || (lessons.en && lessons.en[START_INDEX + itemIndex]);
        if(!lesson) continue;
        var lessonNumber = START_INDEX + itemIndex + 1;
        var title = lang === 'en' ? (lesson.cat + ' practice reference') : (lesson.title + (lang === 'ko' ? ' 참고 자료' : ' - ' + pack.sourceLabel));
        var desc = lesson.one || lesson.intro || lesson.sub || pack.trackDesc;
        var note = lesson.check || lesson.sub || pack.trackTitle;
        intermediateItems.push(['intermediate','Coin ProofPath',title,desc,sourceUrls[itemIndex] || './sources/',pack.day(lessonNumber),note]);
      }
      intermediateItems.forEach(function(item){
        if(!sourceLibrary[lang].some(function(existing){ return existing[0] === 'intermediate' && existing[2] === item[2]; })){
          sourceLibrary[lang].push(item);
        }
      });
    });
  }

  function ensureSourceIntermediateSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var pack = getPack();
    var lang = langKey();
    var existing = panel.querySelector('[data-source-intermediate-track]');
    var picks = [10, 11, 12, 13];
    var cards = picks.map(function(index){
      var lesson = (lessons[lang] && lessons[lang][index]) || (lessons.en && lessons.en[index]);
      if(!lesson) return '';
      return ''
        + '<a class="source-library-item lesson-guide-source-card" href="' + esc(routeFor(index)) + '" data-intermediate-lesson="' + index + '">'
        +   '<div class="source-library-meta">' + esc(pack.sourceLabel) + '</div>'
        +   '<h3>' + esc(lesson.title) + '</h3>'
        +   '<p>' + esc(lesson.intro || lesson.sections && lesson.sections[0] && lesson.sections[0].ps && lesson.sections[0].ps[0] || '') + '</p>'
        +   '<span class="src-link">' + esc(pack.trackCta || pack.badge) + '</span>'
        + '</a>';
    }).join('');
    var html = ''
      + '<section class="src-section-block is-action-track" data-source-intermediate-track>'
      +   '<div class="src-section-heading">' + esc(pack.sourceLabel) + '<span class="src-section-count">' + picks.length + '</span></div>'
      +   '<p class="src-group-desc">' + esc(pack.trackDesc) + '</p>'
      +   '<div class="source-library-grid">' + cards + '</div>'
      + '</section>';
    if(existing) existing.outerHTML = html;
    else panel.insertAdjacentHTML('beforeend', html);
  }

  function syncProgressCard(){
    var card = document.querySelector('.home-progress-card');
    if(!card || typeof getTotalLessons !== 'function') return;
    var total = getTotalLessons();
    var done = (typeof completed !== 'undefined' && completed && completed.forEach) ? completed : new Set();
    var count = 0;
    done.forEach(function(i){ if(i < total) count++; });
    var dots = '';
    for(var i = 0; i < total; i++){
      var cls = 'home-progress-dot';
      if(done.has(i)) cls += ' done';
      else if(typeof currentLesson === 'number' && currentPage === ('lesson' + i)) cls += ' active';
      dots += '<span class="' + cls + '"></span>';
    }
    card.innerHTML = '<div class="home-progress-count">' + count + ' / ' + total + ' ' + (typeof t === 'function' ? t('progress.done') : 'completed') + '</div><div class="home-progress-dots">' + dots + '</div><div class="home-progress-note">' + esc((getPack().trackTitle || 'Intermediate Roadmap')) + '</div>';
  }

  function openIntermediate(index, updateHash){
    if(index < START_INDEX || index >= START_INDEX + TRACK_SIZE) return false;
    ensureIntermediateDom();
    if(typeof renderAllLessons === 'function'){
      var panel = document.getElementById('lesson' + index);
      if(panel && !panel.innerHTML && typeof renderLesson === 'function') panel.innerHTML = renderLesson(index);
    }
    if(typeof baseShowLesson === 'function') baseShowLesson(index);
    else if(typeof showLesson === 'function') showLesson(index);
    if(updateHash && window.history && window.history.replaceState){
      try{ window.history.replaceState(null, '', '#lesson' + (index + 1)); }catch(err){}
    }
    return true;
  }
  window.__CA_OPEN_INTERMEDIATE_LESSON = openIntermediate;

  function bindIntermediateClicks(){
    if(document.__intermediateTrackClickBound) return;
    document.__intermediateTrackClickBound = true;
    document.addEventListener('click', function(event){
      var link = event.target.closest('[data-intermediate-lesson], .lesson-nav-item[data-lesson]');
      if(!link) return;
      var index = parseInt(link.getAttribute('data-intermediate-lesson') || link.getAttribute('data-lesson'), 10);
      if(!isFinite(index) || index < START_INDEX) return;
      if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openIntermediate(index, true);
    });
  }

  function openHashLesson(){
    var match = String(window.location.hash || '').match(/^#lesson(\d+)$/);
    if(!match) return;
    var number = parseInt(match[1], 10);
    if(isFinite(number) && number >= 8 && number <= 14) openIntermediate(number - 1, false);
  }

  function syncAll(){
    ensureIntermediateDom();
    if(typeof applyUI === 'function') applyUI();
    ensureHomeIntermediateTrack();
    ensureSourceIntermediateSection();
    syncProgressCard();
  }

  function wrap(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__intermediateTrackWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncAll();
      return result;
    };
    wrapped.__intermediateTrackWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'showLesson') showLesson = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'updateProgress') updateProgress = wrapped;
    }catch(err){}
  }

  window.debugIntermediateLocaleCoverage = function(){
    var lang = langKey();
    var pack = getPack();
    var englishPattern = /\b(Exchange|Wallet|Checklist|Warning|Compare|Quick reference|Worth saving|Decision point|Common mistake|Before you do this|Related resources|Practice kit|Continue|Next lesson|Mark complete|Completed|Open glossary|View checklist|Download PDF|Read more|Source Library|Intermediate|Practical|Network selection|Wrong network|Stablecoin|Bridge|Multichain|Official source|Verified source)\b/i;
    var suspected = [];
    if(lang !== 'en'){
      var nodes = document.querySelectorAll('.is-intermediate-lesson, [data-intermediate-track], [data-source-intermediate-track], .lesson-nav-item[data-lesson], .lesson-system-related');
      nodes.forEach(function(node){
        var text = (node.textContent || '').replace(/\s+/g, ' ').trim();
        if(text && englishPattern.test(text)){
          suspected.push({
            selector: node.id ? ('#' + node.id) : (node.getAttribute('data-lesson') ? '[data-lesson="' + node.getAttribute('data-lesson') + '"]' : node.className),
            text: text.slice(0, 240)
          });
        }
      });
    }
    return {
      currentLocale: lang,
      trackTitle: pack && pack.trackTitle,
      lessonTitles: (lessons[lang] || []).slice(START_INDEX, START_INDEX + TRACK_SIZE).map(function(lesson){ return lesson && lesson.title; }),
      visualSource: '068-intermediate-action-track locale pack + compactLocalizedBits',
      suspectedEnglishText: suspected
    };
  };

  applyIntermediateData();
  addSourceLibraryItems();
  ensureIntermediateDom();
  patchVisuals();
  patchIntermediateGuidedVisuals();
  patchIntermediateGuidedVisualsLower();
  patchRenderLessonRelated();
  bindIntermediateClicks();
  wrap('renderAllLessons');
  wrap('showPage');
  wrap('showLesson');
  wrap('setLang');
  wrap('updateProgress');

  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof applyUI === 'function') applyUI();
  syncAll();
  setTimeout(openHashLesson, 0);
  if(typeof window.addEventListener === 'function'){
    window.addEventListener('hashchange', openHashLesson);
    window.addEventListener('load', function(){ syncAll(); openHashLesson(); });
  }
})();
