(function(){
  if(typeof window === 'undefined' || window.__searchResultRelevanceStructure20260528) return;
  window.__searchResultRelevanceStructure20260528 = true;

  var COIN_LIMIT = 8;
  var SEARCH_REBUILD_DEBOUNCE_MS = 140;
  var GROUP_LIMITS = {best:3, lessons:5, glossary:6, coin:8, sources:5, faq:4, safety:4};
  var REP_KEYS = { bitcoin:1, ethereum:1, solana:1, xrp:1, bnb:1, usdt:1, aave:1, nft:1 };
  var rebuildTimer = null;
  var rebuilding = false;
  var coinItemsCache = null;
  var coinItemsCacheLocale = '';
  var prioritizedCache = {};
  var descriptionCache = {};

  var LABELS = {
    en:{best:'Best Match', representative:'Representative Coin', lessons:'Lessons', glossary:'Glossary', coinResults:'Coin Results', sources:'Sources', faq:'FAQ', safety:'Safety', overview:'Overview', role:'Role', view:'View', open:'Open', more:'Learn more', noResults:'No results found', tryAnother:'Try another keyword'},
    ko:{best:'가장 관련 높은 결과', representative:'대표 코인', lessons:'강의', glossary:'용어', coinResults:'코인 결과', sources:'출처', faq:'자주 묻는 질문', safety:'안전', overview:'개요', role:'역할', view:'보기', open:'열기', more:'더 보기', noResults:'검색 결과 없음', tryAnother:'다른 검색어를 입력해 보세요'},
    th:{best:'ผลลัพธ์ที่เกี่ยวข้องที่สุด', representative:'เหรียญตัวแทน', lessons:'บทเรียน', glossary:'อภิธานศัพท์', coinResults:'ผลลัพธ์เหรียญ', sources:'แหล่งข้อมูล', faq:'FAQ', safety:'ความปลอดภัย', overview:'ภาพรวม', role:'บทบาท', view:'ดู', open:'เปิด', more:'เรียนรู้เพิ่ม', noResults:'ไม่พบผลลัพธ์', tryAnother:'ลองใช้คำค้นอื่น'},
    id:{best:'Hasil paling relevan', representative:'Koin perwakilan', lessons:'Pelajaran', glossary:'Glosarium', coinResults:'Hasil koin', sources:'Sumber', faq:'FAQ', safety:'Keamanan', overview:'Ringkasan', role:'Peran', view:'Lihat', open:'Buka', more:'Pelajari lagi', noResults:'Tidak ada hasil', tryAnother:'Coba kata kunci lain'},
    pt:{best:'Melhor resultado', representative:'Moeda representativa', lessons:'Lições', glossary:'Glossário', coinResults:'Resultados de moedas', sources:'Fontes', faq:'FAQ', safety:'Segurança', overview:'Visão geral', role:'Papel', view:'Ver', open:'Abrir', more:'Saiba mais', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave'},
    br:{best:'Melhor resultado', representative:'Moeda representativa', lessons:'Aulas', glossary:'Glossário', coinResults:'Resultados de moedas', sources:'Fontes', faq:'FAQ', safety:'Segurança', overview:'Visão geral', role:'Papel', view:'Ver', open:'Abrir', more:'Saiba mais', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave'},
    tr:{best:'En ilgili sonuç', representative:'Temsil coin', lessons:'Dersler', glossary:'Sözlük', coinResults:'Coin sonuçları', sources:'Kaynaklar', faq:'SSS', safety:'Güvenlik', overview:'Genel bakış', role:'Rol', view:'Görüntüle', open:'Aç', more:'Daha fazla', noResults:'Sonuç bulunamadı', tryAnother:'Başka bir anahtar kelime deneyin'},
    es:{best:'Mejor resultado', representative:'Moneda representativa', lessons:'Lecciones', glossary:'Glosario', coinResults:'Resultados de monedas', sources:'Fuentes', faq:'FAQ', safety:'Seguridad', overview:'Resumen', role:'Rol', view:'Ver', open:'Abrir', more:'Más información', noResults:'No se encontraron resultados', tryAnother:'Prueba otra palabra clave'},
    ar:{best:'أفضل نتيجة', representative:'عملة ممثلة', lessons:'دروس', glossary:'قاموس', coinResults:'نتائج العملات', sources:'مصادر', faq:'الأسئلة الشائعة', safety:'الأمان', overview:'نظرة عامة', role:'الدور', view:'عرض', open:'فتح', more:'المزيد', noResults:'لا توجد نتائج', tryAnother:'جرّب كلمة أخرى'},
    vi:{best:'Kết quả phù hợp nhất', representative:'Coin đại diện', lessons:'Bài học', glossary:'Thuật ngữ', coinResults:'Kết quả coin', sources:'Nguồn', faq:'FAQ', safety:'An toàn', overview:'Tổng quan', role:'Vai trò', view:'Xem', open:'Mở', more:'Tìm hiểu thêm', noResults:'Không tìm thấy kết quả', tryAnother:'Thử từ khóa khác'},
    ha:{best:'Sakamako mafi dacewa', representative:'Coin wakili', lessons:'Darussa', glossary:'Kamus', coinResults:'Sakamakon coin', sources:'Tushe', faq:'FAQ', safety:'Tsaro', overview:'Bayani', role:'Matsayi', view:'Duba', open:'Bude', more:'Kara koyo', noResults:'Babu sakamako', tryAnother:'Gwada wata kalma'}
  };

  (function extendSearchResultLabels(){
    var extra = {
      en:{siteResults:'Site Results', strengths:'Strengths', watchPoint:'Watch Point', limitations:'Limitations', beginnerNote:'Beginner Note', relatedLessons:'Related Lessons', relatedGlossary:'Related Glossary', relatedFaq:'Related FAQ', relatedSources:'Related Sources', relatedSafety:'Related Safety', viewLesson:'View lesson', openSource:'Open source', viewGlossary:'View glossary', searchResults:'Search results', suggestedResults:'Suggested results', result:'Result', results:'Results'},
      ko:{siteResults:'사이트 결과', strengths:'강점', watchPoint:'주의점', limitations:'한계', beginnerNote:'초보자 메모', relatedLessons:'관련 강의', relatedGlossary:'관련 용어', relatedFaq:'관련 FAQ', relatedSources:'관련 출처', relatedSafety:'관련 안전 자료', viewLesson:'강의 보기', openSource:'출처 열기', viewGlossary:'용어 보기', searchResults:'검색 결과', suggestedResults:'추천 결과', result:'결과', results:'결과'},
      th:{siteResults:'ผลลัพธ์ในเว็บไซต์', strengths:'จุดแข็ง', watchPoint:'จุดที่ต้องระวัง', limitations:'ข้อจำกัด', beginnerNote:'หมายเหตุสำหรับผู้เริ่มต้น', relatedLessons:'บทเรียนที่เกี่ยวข้อง', relatedGlossary:'คำศัพท์ที่เกี่ยวข้อง', relatedFaq:'FAQ ที่เกี่ยวข้อง', relatedSources:'แหล่งข้อมูลที่เกี่ยวข้อง', relatedSafety:'ความปลอดภัยที่เกี่ยวข้อง', viewLesson:'ดูบทเรียน', openSource:'เปิดแหล่งข้อมูล', viewGlossary:'ดูอภิธานศัพท์', searchResults:'ผลการค้นหา', suggestedResults:'ผลลัพธ์แนะนำ', result:'ผลลัพธ์', results:'ผลลัพธ์'},
      id:{siteResults:'Hasil situs', strengths:'Kekuatan', watchPoint:'Hal yang perlu diperhatikan', limitations:'Batasan', beginnerNote:'Catatan pemula', relatedLessons:'Pelajaran terkait', relatedGlossary:'Glosarium terkait', relatedFaq:'FAQ terkait', relatedSources:'Sumber terkait', relatedSafety:'Keamanan terkait', viewLesson:'Lihat pelajaran', openSource:'Buka sumber', viewGlossary:'Lihat glosarium', searchResults:'Hasil pencarian', suggestedResults:'Hasil disarankan', result:'Hasil', results:'Hasil'},
      pt:{siteResults:'Resultados do site', strengths:'Pontos fortes', watchPoint:'Ponto de atenção', limitations:'Limitações', beginnerNote:'Nota para iniciantes', relatedLessons:'Lições relacionadas', relatedGlossary:'Glossário relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Segurança relacionada', viewLesson:'Ver lição', openSource:'Abrir fonte', viewGlossary:'Ver glossário', searchResults:'Resultados da pesquisa', suggestedResults:'Resultados sugeridos', result:'Resultado', results:'Resultados'},
      br:{siteResults:'Resultados do site', strengths:'Pontos fortes', watchPoint:'Ponto de atenção', limitations:'Limitações', beginnerNote:'Nota para iniciantes', relatedLessons:'Aulas relacionadas', relatedGlossary:'Glossário relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Segurança relacionada', viewLesson:'Ver aula', openSource:'Abrir fonte', viewGlossary:'Ver glossário', searchResults:'Resultados da busca', suggestedResults:'Resultados sugeridos', result:'Resultado', results:'Resultados'},
      tr:{siteResults:'Site sonuçları', strengths:'Güçlü yönler', watchPoint:'Dikkat noktası', limitations:'Sınırlamalar', beginnerNote:'Başlangıç notu', relatedLessons:'İlgili dersler', relatedGlossary:'İlgili sözlük', relatedFaq:'İlgili SSS', relatedSources:'İlgili kaynaklar', relatedSafety:'İlgili güvenlik', viewLesson:'Dersi görüntüle', openSource:'Kaynağı aç', viewGlossary:'Sözlüğü görüntüle', searchResults:'Arama sonuçları', suggestedResults:'Önerilen sonuçlar', result:'Sonuç', results:'Sonuçlar'},
      es:{siteResults:'Resultados del sitio', strengths:'Fortalezas', watchPoint:'Punto de atención', limitations:'Limitaciones', beginnerNote:'Nota para principiantes', relatedLessons:'Lecciones relacionadas', relatedGlossary:'Glosario relacionado', relatedFaq:'FAQ relacionada', relatedSources:'Fuentes relacionadas', relatedSafety:'Seguridad relacionada', viewLesson:'Ver lección', openSource:'Abrir fuente', viewGlossary:'Ver glosario', searchResults:'Resultados de búsqueda', suggestedResults:'Resultados sugeridos', result:'Resultado', results:'Resultados'},
      ar:{siteResults:'نتائج الموقع', strengths:'نقاط القوة', watchPoint:'نقطة انتباه', limitations:'القيود', beginnerNote:'ملاحظة للمبتدئين', relatedLessons:'دروس مرتبطة', relatedGlossary:'مصطلحات مرتبطة', relatedFaq:'أسئلة مرتبطة', relatedSources:'مصادر مرتبطة', relatedSafety:'مواد أمان مرتبطة', viewLesson:'عرض الدرس', openSource:'فتح المصدر', viewGlossary:'عرض القاموس', searchResults:'نتائج البحث', suggestedResults:'نتائج مقترحة', result:'نتيجة', results:'نتائج'},
      vi:{siteResults:'Kết quả trong trang', strengths:'Điểm mạnh', watchPoint:'Điểm cần chú ý', limitations:'Giới hạn', beginnerNote:'Ghi chú cho người mới', relatedLessons:'Bài học liên quan', relatedGlossary:'Thuật ngữ liên quan', relatedFaq:'FAQ liên quan', relatedSources:'Nguồn liên quan', relatedSafety:'An toàn liên quan', viewLesson:'Xem bài học', openSource:'Mở nguồn', viewGlossary:'Xem thuật ngữ', searchResults:'Kết quả tìm kiếm', suggestedResults:'Kết quả gợi ý', result:'Kết quả', results:'Kết quả'},
      ha:{siteResults:'Sakamakon shafi', strengths:'Karfi', watchPoint:'Abin lura', limitations:'Iyakoki', beginnerNote:'Bayani ga mai farawa', relatedLessons:'Darussa masu alaka', relatedGlossary:'Kamus mai alaka', relatedFaq:'FAQ mai alaka', relatedSources:'Tushe masu alaka', relatedSafety:'Tsaro mai alaka', viewLesson:'Duba darasi', openSource:'Bude tushe', viewGlossary:'Duba kamus', searchResults:'Sakamakon bincike', suggestedResults:'Shawarar sakamako', result:'Sakamako', results:'Sakamako'}
    };
    Object.keys(extra).forEach(function(lang){
      if(LABELS[lang]) Object.assign(LABELS[lang], extra[lang]);
    });
  })();

  var ENGLISH_UI_KEYS = {
    'Best Match':'best',
    'Representative Coin':'representative',
    'Lessons':'lessons',
    'Lesson':'lessons',
    'Glossary':'glossary',
    'Coin Results':'coinResults',
    'Site Results':'siteResults',
    'Sources':'sources',
    'Source':'sources',
    'FAQ':'faq',
    'Safety':'safety',
    'Overview':'overview',
    'Role':'role',
    'Strengths':'strengths',
    'Watch Point':'watchPoint',
    'Limitations':'limitations',
    'Beginner Note':'beginnerNote',
    'Related Lessons':'relatedLessons',
    'Related Glossary':'relatedGlossary',
    'Related FAQ':'relatedFaq',
    'Related Sources':'relatedSources',
    'Related Safety':'relatedSafety',
    'View':'view',
    'Open':'open',
    'Learn more':'more',
    'View lesson':'viewLesson',
    'Open source':'openSource',
    'View glossary':'viewGlossary',
    'No results':'noResults',
    'No results found':'noResults',
    'Try another keyword':'tryAnother',
    'Search results':'searchResults',
    'Suggested results':'suggestedResults',
    'Result':'result',
    'Results':'results'
  };

  var COIN_COPY = {
    bitcoin:{name:'Bitcoin', symbol:'BTC', ko:'비트코인은 최초의 주요 암호화폐이며, 탈중앙화 디지털 자산을 이해하는 대표적인 예시입니다.', en:'The first major cryptocurrency and a key example of a decentralized digital asset.', koRole:'중앙 발행자 없이 가치 저장 수단으로 사용되며, 디지털 금으로 설명되기도 합니다.', enRole:'Often described as digital gold and used as a store of value without a central issuer.'},
    ethereum:{name:'Ethereum', symbol:'ETH', ko:'이더리움은 스마트 컨트랙트, 토큰, NFT, DeFi 앱에 사용되는 프로그래밍 가능한 블록체인입니다.', en:'A programmable blockchain used for smart contracts, tokens, NFTs, and many DeFi apps.', koRole:'블록체인 위에서 애플리케이션을 실행하는 기반 역할을 합니다.', enRole:'Acts as shared blockchain infrastructure for apps, tokens, and on-chain finance.'},
    solana:{name:'Solana', symbol:'SOL', ko:'솔라나는 낮은 수수료와 빠른 처리를 목표로 설계된 고속 블록체인입니다.', en:'A high-speed blockchain designed for low fees and fast transactions.', koRole:'빠른 전송과 다양한 앱 사용 경험을 제공하는 네트워크로 활용됩니다.', enRole:'Shows how newer chains compete on speed, app performance, and user cost.'},
    xrp:{name:'XRP', symbol:'XRP', ko:'XRP는 빠르고 낮은 비용의 가치 전송을 목표로 하는 디지털 자산입니다.', en:'A digital asset focused on quick and low-cost value transfer.', koRole:'송금과 결제 흐름에서 빠른 전송을 지원하는 자산으로 설명됩니다.', enRole:'Commonly discussed in payment and cross-border transfer use cases.'},
    bnb:{name:'BNB', symbol:'BNB', ko:'BNB는 BNB Chain 생태계와 거래소 관련 유틸리티에 연결된 토큰입니다.', en:'A token closely tied to the BNB Chain ecosystem and exchange-related utility.', koRole:'수수료, 생태계 사용, 체인 활동 등 다양한 용도로 활용됩니다.', enRole:'Used for chain fees, ecosystem utility, and exchange-linked features.'},
    usdt:{name:'Tether', symbol:'USDT', ko:'USDT는 미국 달러 가격을 추적하도록 설계된 대표적인 스테이블코인입니다.', en:'A widely used stablecoin designed to track the US dollar.', koRole:'거래, 전송, 가치 보관의 중간 수단으로 널리 사용됩니다.', enRole:'Often used for trading, transfers, and holding dollar-like value in crypto.'},
    aave:{name:'Aave', symbol:'AAVE', ko:'Aave는 사용자가 암호화폐를 예치하거나 빌릴 수 있는 DeFi 대출 프로토콜입니다.', en:'A DeFi lending protocol where users can supply and borrow crypto assets.', koRole:'온체인 대출과 담보 구조를 이해할 때 참고할 수 있는 DeFi 예시입니다.', enRole:'A learning example for on-chain lending, collateral, and protocol risk.'},
    nft:{name:'NFTs', symbol:'NFT', ko:'NFT는 각 토큰이 고유한 값을 갖는 디지털 자산 형식으로, 수집품, 멤버십, 디지털 소유권 등에 사용됩니다.', en:'A unique digital asset format used for collectibles, memberships, and digital ownership.', koRole:'고유한 디지털 소유권과 멤버십 구조를 설명할 때 사용됩니다.', enRole:'Used to explain unique digital ownership, access, and collectible identity.'},
    bonk:{name:'Bonk', symbol:'BONK', ko:'BONK는 Solana 생태계에서 알려진 커뮤니티 중심 밈코인입니다. 밈코인은 변동성이 크기 때문에 공식 자료, 유통 구조, 커뮤니티 활동을 함께 확인해야 합니다.', en:'BONK is a community-driven meme coin known within the Solana ecosystem. Meme coins can be highly volatile, so users should check official materials, distribution, and community activity.'},
    dogecoin:{name:'Dogecoin', symbol:'DOGE', ko:'Dogecoin은 밈 문화에서 시작해 커뮤니티 중심으로 알려진 암호화폐입니다.', en:'A cryptocurrency that began as a meme and became known for its community-driven culture.'},
    polygon:{name:'Polygon', symbol:'MATIC', ko:'Polygon은 이더리움 확장성과 낮은 수수료 사용 경험을 돕는 블록체인 생태계입니다.', en:'A blockchain ecosystem focused on Ethereum scaling and lower-cost transactions.'},
    aptos:{name:'Aptos', symbol:'APT', ko:'Aptos는 확장성과 빠른 실행을 목표로 하는 레이어1 블록체인입니다.', en:'A layer 1 blockchain designed for scalability and fast execution.'},
    sui:{name:'Sui', symbol:'SUI', ko:'Sui는 빠른 처리와 객체 기반 구조를 강조하는 레이어1 블록체인입니다.', en:'A layer 1 blockchain focused on fast execution and an object-based architecture.'},
    chainlink:{name:'Chainlink', symbol:'LINK', ko:'Chainlink는 블록체인 스마트 컨트랙트가 외부 데이터를 사용할 수 있도록 돕는 오라클 네트워크입니다.', en:'An oracle network that helps smart contracts use external data.'},
    uniswap:{name:'Uniswap', symbol:'UNI', ko:'Uniswap은 사용자가 중개자 없이 토큰을 교환할 수 있는 탈중앙화 거래 프로토콜입니다.', en:'A decentralized exchange protocol for swapping tokens without a central intermediary.'},
    avalanche:{name:'Avalanche', symbol:'AVAX', ko:'Avalanche는 빠른 처리와 다양한 서브넷 구조를 지원하는 스마트 컨트랙트 블록체인입니다.', en:'A smart contract blockchain designed for fast transactions and customizable subnet networks.'},
    arbitrum:{name:'Arbitrum', symbol:'ARB', ko:'Arbitrum은 이더리움의 확장성을 높이기 위한 레이어2 네트워크입니다.', en:'A layer 2 network designed to scale Ethereum transactions.'},
    optimism:{name:'Optimism', symbol:'OP', ko:'Optimism은 이더리움 기반 앱을 더 낮은 비용으로 사용할 수 있게 돕는 레이어2 네트워크입니다.', en:'A layer 2 network that helps Ethereum apps run with lower transaction costs.'}
  };

  var REP_CARD_COPY = {
    bitcoin:{
      ko:{strengths:'높은 인지도, 깊은 유동성, 오래 검증된 보안 기록을 갖고 있습니다.', watchPoint:'프로그래밍 기능은 제한적이며, 일부 최신 체인보다 처리 속도가 느릴 수 있습니다.', beginnerNote:'비트코인은 암호화폐 네트워크와 지갑의 기본 구조를 배울 때 좋은 출발점입니다.'},
      en:{strengths:'Strong recognition, deep liquidity, and a long-tested security record.', watchPoint:'Programmability is limited, and throughput can be slower than newer chains.', beginnerNote:'Bitcoin is a useful starting point for learning how crypto networks and wallets work.'}
    },
    ethereum:{
      ko:{strengths:'개발자 생태계가 크고, 다양한 토큰과 DeFi 서비스가 구축되어 있습니다.', watchPoint:'네트워크 혼잡 시 수수료가 높아질 수 있고, 초보자에게는 구조가 복잡할 수 있습니다.', beginnerNote:'이더리움은 스마트 컨트랙트와 DeFi를 이해할 때 중요한 출발점입니다.'},
      en:{strengths:'A large developer ecosystem supports many tokens, NFTs, and DeFi services.', watchPoint:'Fees can rise during congestion, and the structure can feel complex for beginners.', beginnerNote:'Ethereum is an important starting point for understanding smart contracts and DeFi.'}
    },
    solana:{
      ko:{strengths:'빠른 속도, 낮은 수수료, 활발한 앱 생태계가 장점입니다.', watchPoint:'네트워크 안정성과 생태계 리스크를 함께 확인해야 합니다.', beginnerNote:'솔라나는 네트워크 속도와 수수료 차이를 비교할 때 좋은 예시가 됩니다.'},
      en:{strengths:'Fast transactions, low fees, and an active app ecosystem are key strengths.', watchPoint:'Network reliability and ecosystem risks should be checked together.', beginnerNote:'Solana is a useful example for comparing network speed and fee differences.'}
    },
    xrp:{
      ko:{strengths:'빠른 처리와 낮은 수수료가 장점입니다.', watchPoint:'사용 목적과 생태계 구조를 다른 체인과 구분해서 이해해야 합니다.', beginnerNote:'XRP는 결제와 전송 중심의 디지털 자산을 이해할 때 참고할 수 있습니다.'},
      en:{strengths:'Quick settlement and low fees are its main strengths.', watchPoint:'Its use case and ecosystem structure should be separated from other chains.', beginnerNote:'XRP can help learners understand payment-focused digital assets.'}
    },
    bnb:{
      ko:{strengths:'넓은 생태계와 다양한 사용처가 장점입니다.', watchPoint:'거래소 및 특정 생태계와의 연결성을 함께 고려해야 합니다.', beginnerNote:'BNB는 토큰이 생태계 안에서 어떤 역할을 갖는지 이해할 때 참고할 수 있습니다.'},
      en:{strengths:'A broad ecosystem and many utility cases are key strengths.', watchPoint:'Its connection to an exchange and specific ecosystem should be considered.', beginnerNote:'BNB is useful for learning how a token can carry ecosystem utility.'}
    },
    usdt:{
      ko:{strengths:'높은 유동성과 넓은 거래소 지원이 장점입니다.', watchPoint:'발행자, 준비금, 투명성, 디페그 위험을 함께 확인해야 합니다.', beginnerNote:'USDT는 스테이블코인이 왜 모두 같은 구조가 아닌지 배울 때 좋은 예시입니다.'},
      en:{strengths:'High liquidity and broad exchange support are key strengths.', watchPoint:'Issuer, reserves, transparency, and depeg risk should be checked together.', beginnerNote:'USDT is a useful example for learning why stablecoins do not all share the same structure.'}
    },
    aave:{
      ko:{strengths:'온체인 대출과 담보 구조를 직접 살펴볼 수 있는 대표 DeFi 예시입니다.', watchPoint:'스마트 컨트랙트, 청산, 담보 비율 같은 DeFi 위험을 함께 확인해야 합니다.', beginnerNote:'Aave는 DeFi 대출이 어떻게 작동하는지 배울 때 참고하기 좋습니다.'},
      en:{strengths:'Aave is a strong DeFi example for observing on-chain lending and collateral.', watchPoint:'Smart contract, liquidation, and collateral-ratio risks should be checked together.', beginnerNote:'Aave is useful for learning how DeFi lending works.'}
    },
    nft:{
      ko:{strengths:'고유 소유권, 멤버십, 수집품 같은 디지털 자산 구조를 설명하기 좋습니다.', watchPoint:'유동성, 저작권, 프로젝트 지속성, 과장된 홍보를 함께 확인해야 합니다.', beginnerNote:'NFT는 토큰이 항상 돈처럼 쓰이는 것은 아니라는 점을 배우는 좋은 예시입니다.'},
      en:{strengths:'NFTs help explain unique ownership, membership, and collectible structures.', watchPoint:'Liquidity, rights, project durability, and promotional hype should be checked together.', beginnerNote:'NFTs are useful for learning that tokens are not always used like money.'}
    }
  };

  var ALIASES = {
    bitcoin:['bitcoin','btc','비트코인'],
    ethereum:['ethereum','eth','이더리움'],
    solana:['solana','sol','솔라나'],
    xrp:['xrp','ripple','리플'],
    bnb:['bnb','비앤비'],
    usdt:['usdt','tether','테더'],
    aave:['aave'],
    nft:['nft','nfts'],
    bonk:['bonk','봉크'],
    dogecoin:['dogecoin','doge','도지코인'],
    polygon:['polygon','matic'],
    aptos:['aptos','apt'],
    sui:['sui'],
    chainlink:['chainlink','link'],
    uniswap:['uniswap','uni'],
    avalanche:['avalanche','avax'],
    arbitrum:['arbitrum','arb'],
    optimism:['optimism','op']
  };

  function locale(){
    var value = 'en';
    try{
      value = (typeof currentLang === 'string' && currentLang) || window.currentLang || window.currentLocale || localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en';
    }catch(error){}
    value = String(value || 'en').toLowerCase();
    if(value === 'pt-br' || value.indexOf('br') === 0) return 'br';
    if(value.indexOf('pt') === 0) return 'pt';
    return LABELS[value] ? value : 'en';
  }

  function ui(){ return LABELS[locale()] || LABELS.en; }

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
    return text.replace(/[_\/-]+/g,' ')
      .replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  function compact(value){ return norm(value).replace(/\s+/g,''); }
  function safeArray(value){ return Array.isArray(value) ? value : []; }

  function invalidateSearchCache(){
    coinItemsCache = null;
    coinItemsCacheLocale = '';
    prioritizedCache = {};
    descriptionCache = {};
  }

  function keyFromValue(value){
    var q = compact(value);
    var keys = Object.keys(ALIASES);
    for(var i = 0; i < keys.length; i++){
      var aliases = ALIASES[keys[i]] || [];
      for(var j = 0; j < aliases.length; j++){
        if(q === compact(aliases[j])) return keys[i];
      }
    }
    if(COIN_COPY[q]) return q;
    return '';
  }

  function coinKey(item){
    if(!item) return '';
    var values = [];
    values.push(item.coinKey, item.key, item.id, item.slug, item.symbol, item.ticker, item.displaySymbol, item.name);
    if(item.coin) values.push(item.coin.coinKey, item.coin.key, item.coin.symbol, item.coin.ticker, item.coin.displaySymbol, item.coin.name);
    for(var i = 0; i < values.length; i++){
      var key = keyFromValue(values[i]);
      if(key) return key;
      var n = compact(values[i]);
      if(COIN_COPY[n]) return n;
    }
    return compact(item.coinKey || item.symbol || item.name || '');
  }

  function aliasesFor(item){
    var key = coinKey(item);
    var aliases = (ALIASES[key] || []).slice();
    var record = COIN_COPY[key];
    [item && item.coinKey, item && item.name, item && item.symbol, item && item.ticker, item && item.displaySymbol].forEach(function(value){
      if(value) aliases.push(value);
    });
    if(item && item.coin){
      [item.coin.name, item.coin.symbol, item.coin.ticker, item.coin.displaySymbol].forEach(function(value){
        if(value) aliases.push(value);
      });
    }
    if(record) aliases.push(record.name, record.symbol);
    return aliases.filter(Boolean);
  }

  function isRepresentative(itemOrKey){
    var key = typeof itemOrKey === 'string' ? itemOrKey : coinKey(itemOrKey);
    return !!REP_KEYS[key];
  }

  function representativeMatchKey(query){
    var key = keyFromValue(query);
    return key && REP_KEYS[key] ? key : '';
  }

  function getRepresentativeCoinAliases(item){
    if(item && item.__searchNormalizedAliases) return item.__searchNormalizedAliases;
    var aliases = aliasesFor(item).map(compact).filter(Boolean);
    if(item && typeof item === 'object') item.__searchNormalizedAliases = aliases;
    return aliases;
  }

  function shouldShowRepresentativeCard(query, item){
    var q = compact(query);
    if(!q || q.length < 2 || !item || !isRepresentative(item)) return false;
    var aliases = getRepresentativeCoinAliases(item);
    for(var i = 0; i < aliases.length; i++){
      if(q === aliases[i]) return true;
    }
    return false;
  }

  function getMatchedRepresentativeCoin(query){
    var key = representativeMatchKey(query);
    if(!key) return null;
    var coins = allCoinItems();
    for(var i = 0; i < coins.length; i++){
      if(coinKey(coins[i]) === key && shouldShowRepresentativeCard(query, coins[i])){
        return coins[i];
      }
    }
    var record = COIN_COPY[key];
    if(!record) return null;
    return {
      type:'coin-representative',
      coinKey:key,
      key:key,
      id:key,
      name:record.name,
      symbol:record.symbol,
      ticker:record.symbol,
      displaySymbol:record.symbol,
      aliases:(ALIASES[key] || []).slice()
    };
  }

  function coinMatchScore(item, query){
    var q = compact(query);
    if(!q) return 0;
    var aliases = aliasesFor(item).map(compact).filter(Boolean);
    if(q.length === 1){
      for(var shortIndex = 0; shortIndex < aliases.length; shortIndex++){
        if(aliases[shortIndex].indexOf(q) === 0) return 300;
      }
      return 0;
    }
    var exact = false;
    for(var i = 0; i < aliases.length; i++){
      if(q === aliases[i]){
        exact = true;
        break;
      }
    }
    if(exact){
      var key = coinKey(item);
      var symbol = compact((item && (item.symbol || item.ticker || item.displaySymbol)) || (COIN_COPY[key] && COIN_COPY[key].symbol));
      if(symbol && q === symbol) return 1200;
      if(isRepresentative(key)) return 1100;
      return 1000;
    }
    if(q.length < 3) return 0;
    for(var j = 0; j < aliases.length; j++){
      if(aliases[j].indexOf(q) === 0) return 650;
    }
    if(q.length >= 4){
      for(var k = 0; k < aliases.length; k++){
        if(aliases[k].indexOf(q) !== -1) return 420;
      }
    }
    return 0;
  }

  function allCoinItems(){
    var lang = locale();
    if(coinItemsCache && coinItemsCacheLocale === lang) return coinItemsCache;
    var items = [];
    try{
      if(typeof window.__searchRelevanceOriginalGetCoinItems === 'function'){
        items = window.__searchRelevanceOriginalGetCoinItems() || [];
      }else if(typeof window.getCoinSearchItems === 'function'){
        items = window.getCoinSearchItems() || [];
      }
    }catch(error){ items = []; }
    var seen = {};
    coinItemsCache = safeArray(items).filter(function(item){
      var key = coinKey(item);
      if(!key || seen[key]) return false;
      seen[key] = true;
      if(key && item && typeof item === 'object'){
        item.__searchCoinKey = key;
        item.__searchNormalizedAliases = getRepresentativeCoinAliases(item);
      }
      return true;
    });
    coinItemsCacheLocale = lang;
    return coinItemsCache;
  }

  function localizedCoinDescription(item){
    var key = coinKey(item);
    var lang = locale();
    var cacheKey = lang + '::' + key;
    if(descriptionCache[cacheKey]) return descriptionCache[cacheKey];
    var record = COIN_COPY[key];
    if(record && record[lang]){
      descriptionCache[cacheKey] = record[lang];
      return descriptionCache[cacheKey];
    }
    if(typeof window.getLocalizedCoinDescription === 'function'){
      try{
        var localized = window.getLocalizedCoinDescription(item, lang);
        if(localized){
          descriptionCache[cacheKey] = localized;
          return descriptionCache[cacheKey];
        }
      }catch(error){}
    }
    if(record && lang !== 'en' && record.en){
      descriptionCache[cacheKey] = record.en;
      return descriptionCache[cacheKey];
    }
    descriptionCache[cacheKey] = String((item && (item.description || item.desc || item.overview)) || '').replace(/\s+/g,' ').trim();
    return descriptionCache[cacheKey];
  }

  function localizedCoinField(item, field){
    var lang = locale();
    var coin = item && item.coin ? item.coin : item;
    var candidates = [
      coin && coin.localized && coin.localized[lang] && coin.localized[lang][field],
      coin && coin.translations && coin.translations[lang] && coin.translations[lang][field],
      coin && coin.i18n && coin.i18n[lang] && coin.i18n[lang][field],
      coin && coin[lang] && coin[lang][field],
      coin && coin[field] && coin[field][lang],
      coin && coin.localized && coin.localized.en && coin.localized.en[field],
      coin && coin.translations && coin.translations.en && coin.translations.en[field],
      coin && coin.i18n && coin.i18n.en && coin.i18n.en[field],
      coin && coin.en && coin.en[field],
      typeof (coin && coin[field]) === 'string' ? coin[field] : ''
    ];
    for(var i = 0; i < candidates.length; i++){
      if(typeof candidates[i] === 'string' && candidates[i].trim()) return candidates[i].trim();
    }
    return '';
  }

  function localizedCoinRole(item){
    var key = coinKey(item);
    var lang = locale();
    var record = COIN_COPY[key];
    if(record && lang === 'ko' && record.koRole) return record.koRole;
    var localized = localizedCoinField(item, 'role');
    if(localized) return localized;
    if(record && record.enRole) return record.enRole;
    return '';
  }

  function representativeCardText(item, field){
    var key = coinKey(item);
    var lang = locale();
    var copy = REP_CARD_COPY[key];
    if(copy && copy[lang] && copy[lang][field]) return copy[lang][field];
    var localized = localizedCoinField(item, field);
    if(localized) return localized;
    if(field === 'watchPoint'){
      localized = localizedCoinField(item, 'limitations') || localizedCoinField(item, 'warning') || localizedCoinField(item, 'risk');
      if(localized) return localized;
    }
    if(field === 'beginnerNote'){
      localized = localizedCoinField(item, 'beginnerNote') || localizedCoinField(item, 'note');
      if(localized) return localized;
    }
    if(copy && copy.en && copy.en[field]) return copy.en[field];
    return '';
  }

  function displayName(item){
    var key = coinKey(item);
    var record = COIN_COPY[key];
    return (record && record.name) || (item && (item.name || (item.coin && item.coin.name))) || displaySymbol(item) || 'Coin';
  }

  function displaySymbol(item){
    var key = coinKey(item);
    var record = COIN_COPY[key];
    var symbol = String((record && record.symbol) || (item && (item.displaySymbol || item.ticker || item.symbol || (item.coin && (item.coin.displaySymbol || item.coin.ticker || item.coin.symbol)))) || '').toUpperCase();
    return key === 'usdt' || symbol === 'USD' ? 'USDT' : symbol;
  }

  function prioritizedCoins(query){
    var q = String(query || '').trim();
    if(!q || compact(q).length < 1) return [];
    var cacheKey = locale() + '::' + compact(q);
    if(prioritizedCache[cacheKey]) return prioritizedCache[cacheKey];
    prioritizedCache[cacheKey] = allCoinItems()
      .map(function(item){ return { item:item, score:coinMatchScore(item, q) }; })
      .filter(function(entry){ return entry.score > 0; })
      .sort(function(a, b){ return b.score - a.score; })
      .map(function(entry){
        var item = entry.item;
        item.__searchRelevanceScore = entry.score;
        item.__searchRepresentativeExact = shouldShowRepresentativeCard(q, item);
        item.desc = localizedCoinDescription(item);
        item.description = item.desc;
        item.symbol = displaySymbol(item);
        item.ticker = item.symbol;
        item.displaySymbol = item.symbol;
        return item;
      })
      .slice(0, COIN_LIMIT);
    return prioritizedCache[cacheKey];
  }

  function installCoinPriority(){
    if(!window.__searchRelevanceOriginalGetCoinItems && typeof window.getCoinSearchItems === 'function'){
      window.__searchRelevanceOriginalGetCoinItems = window.getCoinSearchItems;
    }
    window.getPrioritizedCoinSearchResults = function(query){ return prioritizedCoins(query); };
    try{ getPrioritizedCoinSearchResults = window.getPrioritizedCoinSearchResults; }catch(error){}
  }

  function renderCompactRepresentativeCard(item){
    var labels = ui();
    var name = displayName(item);
    var symbol = displaySymbol(item);
    var overview = localizedCoinDescription(item);
    var role = localizedCoinRole(item);
    var strengths = representativeCardText(item, 'strengths');
    var watchPoint = representativeCardText(item, 'watchPoint');
    var beginnerNote = representativeCardText(item, 'beginnerNote');
    var key = coinKey(item);
    var fields = [
      [labels.overview, overview],
      [labels.role, role],
      [labels.strengths, strengths],
      [labels.watchPoint || labels.limitations, watchPoint]
    ].filter(function(field){ return field[0] && field[1]; });
    return ''
      + '<section class="coin-card representative-coin-card representative-coin-card-compact search-representative-card-slot" data-representative-coin-key="' + esc(key) + '">'
      + '<div class="rep-coin-header"><span class="rep-coin-kicker">' + esc(labels.representative) + '</span>'
      + '<div class="rep-coin-identity"><span class="rep-coin-symbol">' + esc(symbol) + '</span><div><h2 class="rep-coin-name">' + esc(name) + '</h2><span class="rep-coin-ticker">' + esc(symbol) + '</span></div></div></div>'
      + '<div class="rep-coin-grid rep-coin-grid-compact representative-coin-summary-grid">'
      + fields.map(function(field){
        return '<article class="rep-coin-field representative-coin-info-card"><span class="field-label">' + esc(field[0]) + '</span><p class="coin-field-text">' + esc(field[1]) + '</p></article>';
      }).join('')
      + '</div>'
      + (beginnerNote ? '<div class="rep-coin-note representative-coin-note"><span class="field-label">' + esc(labels.beginnerNote) + '</span><p class="coin-field-text">' + esc(beginnerNote) + '</p></div>' : '')
      + '<div class="rep-related-groups rep-related-groups-compact"><div class="rep-related-group"><span class="related-title">' + esc(labels.more) + '</span><div class="coin-related">'
      + '<span class="coin-related-chip" data-page="lessons" data-target-type="lesson" data-target-id="' + esc(key) + '">' + esc(labels.relatedLessons || labels.lessons) + '</span>'
      + '<span class="coin-related-chip" data-page="glossary" data-target-type="glossary" data-target-id="' + esc(symbol) + '">' + esc(labels.relatedGlossary || labels.glossary) + '</span>'
      + '<span class="coin-related-chip" data-page="sources" data-target-type="source" data-target-id="' + esc(symbol) + '">' + esc(labels.relatedSources || labels.sources) + '</span>'
      + '</div></div></div>'
      + '</section>';
  }

  function installRepresentativeRenderer(){
    window.renderRichCoinCard = function(item){
      return renderCompactRepresentativeCard(item);
    };
    try{ renderRichCoinCard = window.renderRichCoinCard; }catch(error){}
  }

  function installRepresentativeHelpers(){
    window.normalizeSearchQuery = compact;
    window.getRepresentativeCoinAliases = function(item){ return getRepresentativeCoinAliases(item); };
    window.isRepresentativeCoin = function(item){ return isRepresentative(item); };
    window.shouldShowRepresentativeCard = function(query, item){ return shouldShowRepresentativeCard(query, item); };
    window.getMatchedRepresentativeCoin = function(query){ return getMatchedRepresentativeCoin(query); };
    window.invalidateSearchCache = invalidateSearchCache;
  }

  function sectionDivider(label){
    var div = document.createElement('div');
    div.className = 'search-section-divider search-relevance-divider';
    div.textContent = label;
    return div;
  }

  function classifySiteCard(card){
    var badge = card.querySelector('.search-result-badge,.result-type-icon');
    var label = norm((card.querySelector('.result-type-label,.search-result-meta') || {}).textContent || '');
    var cls = String((badge && badge.className) || card.className || '').toLowerCase();
    if(/lesson/.test(cls) || /강의|lesson|lessons|บทเรียน|pelajaran|li[cç][aã]o|aula|ders|lecci/.test(label)) return 'lessons';
    if(/glossary/.test(cls) || /용어|glossary|glosario|glossario|sözlük|kamus|thuật/.test(label)) return 'glossary';
    if(/source/.test(cls) || /출처|자료|source|sources|fonte|fuente|kaynak/.test(label)) return 'sources';
    if(/faq/.test(cls) || /질문|faq|sss/.test(label)) return 'faq';
    if(/safety/.test(cls) || /안전|safety|security|seguran|güvenlik/.test(label)) return 'safety';
    return 'best';
  }

  function cardCoinKey(card){
    if(!card || !card.querySelector) return '';
    var values = [
      card.getAttribute('data-enhanced-coin-key') || '',
      card.getAttribute('data-enhanced-coin-symbol') || '',
      (card.querySelector('.rep-coin-symbol,.rep-coin-ticker,.coin-ticker,.search-result-meta') || {}).textContent || '',
      (card.querySelector('.rep-coin-name,.coin-name,.search-result-title') || {}).textContent || '',
      (card.querySelector('.coin-symbol-badge,.search-result-badge.coin') || {}).textContent || ''
    ];
    for(var i = 0; i < values.length; i++){
      var key = keyFromValue(values[i]);
      if(key) return key;
    }
    return '';
  }

  function isCoinRow(node){
    return !!(node && node.querySelector && (
      node.classList.contains('coin-result-card') ||
      node.querySelector('.search-result-badge.coin,.coin-symbol-badge') ||
      node.getAttribute('data-enhanced-coin-key') ||
      node.getAttribute('data-enhanced-coin-symbol')
    ));
  }

  function relabelCard(card){
    var labels = ui();
    var label = card.querySelector('.result-type-label,.search-result-meta');
    var group = classifySiteCard(card);
    var map = {lessons:labels.lessons, glossary:labels.glossary, sources:labels.sources, faq:labels.faq, safety:labels.safety};
    if(label && map[group]) label.textContent = map[group];
  }

  function localizedUiText(text){
    var key = ENGLISH_UI_KEYS[String(text || '').replace(/\s+/g,' ').trim()];
    return key ? (ui()[key] || LABELS.en[key] || text) : text;
  }

  function localizeSearchResultUi(root){
    if(!root || locale() === 'en') return;
    var selector = [
      '.search-section-divider',
      '.rep-coin-kicker',
      '.field-label',
      '.related-title',
      '.coin-related-chip',
      '.search-result-empty',
      '.result-type-label',
      '.search-result-meta',
      '.site-result-meta',
      '.site-result-cta',
      '.search-result-cta',
      'button',
      'a'
    ].join(',');
    Array.prototype.forEach.call(root.querySelectorAll(selector), function(node){
      if(node.matches && (node.matches('.coin-name,.coin-ticker,.coin-symbol-badge,.rep-coin-name,.rep-coin-symbol') || node.closest('.coin-description,.search-result-desc,.site-result-description,.coin-field-text'))) return;
      var text = (node.textContent || '').replace(/\s+/g,' ').trim();
      var next = localizedUiText(text);
      if(next && next !== text && node.children.length === 0) node.textContent = next;
    });
  }

  function patchCoinCard(card, item){
    var key = item ? coinKey(item) : cardCoinKey(card);
    var record = COIN_COPY[key];
    var symbol = (record && record.symbol) || (item && displaySymbol(item)) || (card.querySelector('.coin-symbol-badge') || {}).textContent || '';
    var name = (record && record.name) || (item && displayName(item)) || (card.querySelector('.coin-name,.search-result-title') || {}).textContent || symbol;
    var desc = item ? localizedCoinDescription(item) : (record && (record[locale()] || record.en)) || '';
    var badge = card.querySelector('.coin-symbol-badge,.search-result-badge.coin');
    var title = card.querySelector('.coin-name,.search-result-title');
    var ticker = card.querySelector('.coin-ticker,.search-result-meta');
    var body = card.querySelector('.coin-result-body,.search-result-body');
    var descNode = card.querySelector('.coin-description,.search-result-desc');
    card.classList.add('coin-result-card', 'coin-result-card-compact');
    if(badge){
      badge.textContent = symbol;
      badge.classList.add('coin-symbol-badge');
    }
    if(body) body.classList.add('coin-result-body');
    if(title){
      title.textContent = name;
      title.classList.add('coin-name');
    }
    if(ticker){
      ticker.textContent = symbol;
      ticker.classList.add('coin-ticker');
    }
    if(descNode && desc){
      descNode.textContent = desc;
      descNode.classList.add('coin-description');
    }
  }

  function rebuildSections(query){
    if(rebuilding) return;
    var root = document.getElementById('searchResults');
    if(!root || !String(query || '').trim()) return;
    rebuilding = true;
    try{
    var labels = ui();
    localizeSearchResultUi(root);
    var matchedRepresentative = getMatchedRepresentativeCoin(query);
    var repKey = matchedRepresentative ? coinKey(matchedRepresentative) : '';
    var expectedCoins = prioritizedCoins(query);
    var expectedKeys = {};
    expectedCoins.forEach(function(item){ expectedKeys[coinKey(item)] = item; });

    var repCards = Array.prototype.slice.call(root.querySelectorAll('.representative-coin-card,.search-representative-card-slot'));
    repCards.forEach(function(card){
      var key = card.getAttribute('data-representative-coin-key') || cardCoinKey(card);
      if(!repKey || key !== repKey){
        card.remove();
        return;
      }
      card.classList.add('representative-coin-card-compact');
    });
    if(repKey && matchedRepresentative && !root.querySelector('.representative-coin-card,.search-representative-card-slot')){
      var holder = document.createElement('div');
      holder.innerHTML = renderCompactRepresentativeCard(matchedRepresentative);
      var createdRepresentative = holder.querySelector('.representative-coin-card,.search-representative-card-slot');
      if(createdRepresentative) root.insertBefore(createdRepresentative, root.firstChild);
    }

    var coinCards = Array.prototype.slice.call(root.querySelectorAll('.coin-result-card,.search-result-item,.search-result-badge.coin')).map(function(node){
      return node.classList && node.classList.contains('search-result-badge') ? node.closest('.search-result-item') : node;
    }).filter(Boolean);
    var seenCards = [];
    coinCards.forEach(function(card){
      if(seenCards.indexOf(card) !== -1) return;
      seenCards.push(card);
      if(!isCoinRow(card)) return;
      var key = cardCoinKey(card);
      var item = expectedKeys[key];
      if(!item){
        card.remove();
        return;
      }
      patchCoinCard(card, item);
    });

    Array.prototype.forEach.call(root.querySelectorAll('.search-section-divider'), function(div){ div.remove(); });

    var groups = {best:[], lessons:[], glossary:[], coin:[], sources:[], faq:[], safety:[]};
    Array.prototype.forEach.call(root.children, function(node){
      if(node.classList && node.classList.contains('search-result-empty')) return;
      if(node.classList && (node.classList.contains('representative-coin-card') || node.classList.contains('search-representative-card-slot'))) return;
      if(node.classList && node.classList.contains('coin-result-card')){
        groups.coin.push(node);
        return;
      }
      if(node.classList && node.classList.contains('site-result-card')){
        relabelCard(node);
        groups[classifySiteCard(node)].push(node);
      }else if(node.classList && node.classList.contains('search-result-item')){
        relabelCard(node);
        groups[classifySiteCard(node)].push(node);
      }
    });

    var fragment = document.createDocumentFragment();
    if(groups.best.length){
      fragment.appendChild(sectionDivider(labels.best));
      groups.best.filter(function(node){ return node && node.parentNode; }).forEach(function(node){ fragment.appendChild(node); });
    }
    var currentRep = root.querySelector('.representative-coin-card,.search-representative-card-slot');
    if(currentRep && repKey){
      fragment.appendChild(sectionDivider(labels.representative));
      fragment.appendChild(currentRep);
    }
    [
      ['lessons', labels.lessons],
      ['glossary', labels.glossary],
      ['coin', labels.coinResults],
      ['sources', labels.sources],
      ['faq', labels.faq],
      ['safety', labels.safety]
    ].forEach(function(pair){
      var limit = GROUP_LIMITS[pair[0]] || 6;
      var list = groups[pair[0]].filter(function(node){ return node && node.parentNode; }).slice(0, limit);
      if(!list.length) return;
      fragment.appendChild(sectionDivider(pair[1]));
      list.forEach(function(node){ fragment.appendChild(node); });
    });
    if(fragment.childNodes.length){
      root.innerHTML = '';
      root.appendChild(fragment);
      localizeSearchResultUi(root);
    }
    }finally{
      rebuilding = false;
    }
  }

  function activeSearchQuery(){
    return ((document.getElementById('searchInput') || {}).value || '').trim();
  }

  function scheduleRebuild(query){
    var q = String(query || activeSearchQuery() || '');
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(function(){
      rebuildSections(q || activeSearchQuery());
    }, SEARCH_REBUILD_DEBOUNCE_MS);
  }

  function installResultObserver(){
    var root = document.getElementById('searchResults');
    if(!root || root.__searchResultRelevanceObserver20260528 || typeof MutationObserver !== 'function') return;
    var observer = new MutationObserver(function(){
      if(rebuilding) return;
      scheduleRebuild(activeSearchQuery());
    });
    observer.observe(root, {childList:true});
    root.__searchResultRelevanceObserver20260528 = observer;
  }

  function installInputWatcher(){
    var input = document.getElementById('searchInput');
    if(!input || input.__searchResultRelevanceInput20260528) return;
    input.addEventListener('input', function(){ scheduleRebuild(input.value || ''); });
    input.addEventListener('click', function(){ scheduleRebuild(input.value || ''); });
    input.__searchResultRelevanceInput20260528 = true;
  }

  function installStyles(){
    if(document.getElementById('searchResultRelevanceStructure20260528Styles')) return;
    var style = document.createElement('style');
    style.id = 'searchResultRelevanceStructure20260528Styles';
    style.textContent = [
      '#searchOverlay #searchResults .representative-coin-card-compact{padding:16px!important;border-radius:18px!important;margin:0 0 12px!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .rep-coin-header{gap:8px!important;margin-bottom:12px!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .rep-coin-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important;margin-top:8px!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .rep-coin-field{padding:10px 12px!important;border-radius:14px!important;min-width:0!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .field-label{display:block!important;margin-bottom:5px!important;font-size:.72rem!important;font-weight:900!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .coin-field-text{margin:0!important;line-height:1.5!important;word-break:keep-all!important;overflow-wrap:break-word!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .representative-coin-note{margin-top:10px!important;padding:10px 12px!important;border-radius:14px!important;background:rgba(255,255,255,.72)!important;border:1px solid rgba(24,42,69,.08)!important;}',
      '#searchOverlay #searchResults .representative-coin-card-compact .rep-related-groups{margin-top:10px!important;}',
      '#searchOverlay #searchResults .coin-result-card-compact{display:flex!important;align-items:flex-start!important;gap:12px!important;}',
      '#searchOverlay #searchResults .search-relevance-divider{margin:14px 0 9px!important;padding:0 2px 7px!important;border-bottom:1px solid rgba(24,42,69,.08)!important;color:var(--text-3)!important;font-size:.68rem!important;font-weight:900!important;letter-spacing:.08em!important;text-transform:uppercase!important;}',
      '@media (max-width:640px){#searchOverlay #searchResults .representative-coin-card-compact .rep-coin-grid{grid-template-columns:1fr!important;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function wrapRenderer(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__searchResultRelevanceWrapped20260528) return;
    var wrapped = function(query){
      installCoinPriority();
      installRepresentativeRenderer();
      installRepresentativeHelpers();
      installStyles();
      installResultObserver();
      installInputWatcher();
      var activeQuery = (name === 'renderSearchAutocompleteFinal' || name === 'renderPatchedSearchResults' || name === 'renderSearchAutocomplete')
        ? query
        : (((document.getElementById('searchInput') || {}).value) || '');
      var result = original.apply(this, arguments);
      if(name === 'setLang') invalidateSearchCache();
      scheduleRebuild(activeQuery || activeSearchQuery());
      return result;
    };
    wrapped.__searchResultRelevanceWrapped20260528 = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocomplete') renderSearchAutocomplete = wrapped;
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }

  function installDebug(){
    window.debugRepresentativeCardRule = function(query){
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      rebuildSections(query || activeSearchQuery());
      var root = document.getElementById('searchResults');
      var cards = root ? Array.prototype.map.call(root.querySelectorAll('.representative-coin-card'), function(card){ return (card.textContent || '').replace(/\s+/g,' ').trim().slice(0,300); }) : [];
      return {
        query:query,
        locale:locale(),
        representativeMatchKey:representativeMatchKey(query || ''),
        matchedRepresentative:!!getMatchedRepresentativeCoin(query || ''),
        representativeCardCount:cards.length,
        cards:cards
      };
    };
    window.debugRepresentativeSearchFlow = function(query){
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      rebuildSections(query || activeSearchQuery());
      var matched = getMatchedRepresentativeCoin(query || activeSearchQuery());
      var root = document.getElementById('searchResults');
      var cards = root ? Array.prototype.map.call(root.querySelectorAll('.representative-coin-card'), function(card){ return (card.textContent || '').replace(/\s+/g,' ').trim().slice(0,300); }) : [];
      return {
        query:query,
        locale:locale(),
        matchedRepresentative:matched ? {
          name:displayName(matched),
          symbol:displaySymbol(matched),
          aliases:getRepresentativeCoinAliases(matched)
        } : null,
        shouldShow:!!matched,
        cardCount:cards.length,
        cards:cards
      };
    };
    window.debugSearchResultRelevance = function(query){
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      rebuildSections(query || activeSearchQuery());
      var root = document.getElementById('searchResults');
      var rows = root ? Array.prototype.map.call(root.querySelectorAll('.representative-coin-card,.coin-result-card,.site-result-card,.search-result-item'), function(row){
        return {
          className:String(row.className || ''),
          type:row.classList.contains('representative-coin-card') ? 'representative' : (row.classList.contains('coin-result-card') ? 'coin' : classifySiteCard(row)),
          title:((row.querySelector('.rep-coin-name,.coin-name,.search-result-title,.site-result-title') || {}).textContent || '').replace(/\s+/g,' ').trim(),
          symbol:((row.querySelector('.rep-coin-symbol,.coin-symbol-badge,.coin-ticker') || {}).textContent || '').replace(/\s+/g,' ').trim(),
          text:(row.textContent || '').replace(/\s+/g,' ').trim().slice(0,240)
        };
      }) : [];
      return {
        query:query,
        locale:locale(),
        representativeMatchKey:representativeMatchKey(query || ''),
        prioritizedCoins:prioritizedCoins(query || '').map(function(item){ return {key:coinKey(item), name:displayName(item), symbol:displaySymbol(item), representative:isRepresentative(item)}; }),
        count:rows.length,
        results:rows
      };
    };
    window.debugSearchI18nLeaks = function(query){
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      var root = document.querySelector('#searchResults, .search-results, .search-result-list, .search-panel, .search-modal') || document;
      var patterns = [
        'Best Match',
        'Representative Coin',
        'Coin Results',
        'Site Results',
        'Sources',
        'Lessons',
        'Glossary',
        'Safety',
        'Overview',
        'Role',
        'Strengths',
        'Watch Point',
        'Limitations',
        'Beginner Note',
        'Related Lessons',
        'Related Glossary',
        'Related FAQ',
        'Related Sources',
        'Related Safety',
        'Learn more',
        'No results',
        'Try another keyword',
        'Search results',
        'Suggested results'
      ];
      var text = (root.textContent || '').replace(/\s+/g,' ');
      var leaks = patterns.filter(function(pattern){ return text.indexOf(pattern) !== -1; });
      var lang = locale();
      var missingKeys = [];
      Object.keys(ENGLISH_UI_KEYS).forEach(function(label){
        var key = ENGLISH_UI_KEYS[label];
        if(!LABELS[lang] || !LABELS[lang][key]) missingKeys.push(key);
      });
      missingKeys = missingKeys.filter(function(key, index){ return missingKeys.indexOf(key) === index; });
      return {
        currentLocale:lang,
        checkedRoot:root.id || root.className || root.tagName,
        leaks:leaks,
        hasLeaks:lang !== 'en' && leaks.length > 0,
        missingLabelKeys:missingKeys
      };
    };
    window.debugSearchPerformance = function(query){
      var start = (window.performance && performance.now) ? performance.now() : Date.now();
      var results = prioritizedCoins(query || '');
      var middle = (window.performance && performance.now) ? performance.now() : Date.now();
      if(typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query || '');
      rebuildSections(query || activeSearchQuery());
      var end = (window.performance && performance.now) ? performance.now() : Date.now();
      return {
        query:query,
        locale:locale(),
        resultCount:results.length,
        searchMs:Math.round((middle - start) * 10) / 10,
        renderMs:Math.round((end - middle) * 10) / 10,
        totalMs:Math.round((end - start) * 10) / 10,
        cacheSize:Object.keys(prioritizedCache).length
      };
    };
  }

  installCoinPriority();
  installRepresentativeRenderer();
  installRepresentativeHelpers();
  installStyles();
  installResultObserver();
  installInputWatcher();
  wrapRenderer('renderSearchAutocomplete');
  wrapRenderer('renderSearchAutocompleteFinal');
  wrapRenderer('renderPatchedSearchResults');
  wrapRenderer('openSearch');
  wrapRenderer('setLang');
  installDebug();
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      installRepresentativeHelpers();
      installStyles();
      installResultObserver();
      installInputWatcher();
      scheduleRebuild(activeSearchQuery());
    }, {once:true});
  }else{
    setTimeout(function(){
      installRepresentativeHelpers();
      installStyles();
      installResultObserver();
      installInputWatcher();
      scheduleRebuild(activeSearchQuery());
    }, 0);
  }
})();
