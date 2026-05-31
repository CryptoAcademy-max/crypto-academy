(function(){
  if(typeof window === 'undefined' || window.__searchModalResultsFinal20260527) return;
  window.__searchModalResultsFinal20260527 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

  var UI = {
    en:{siteResults:'Site Results', lesson:'Lesson', glossary:'Glossary', representative:'Representative Coin', overview:'Overview', role:'Role', strengths:'Strengths', limitations:'Limitations', beginnerNote:'Beginner Note', relatedLessons:'Related Lessons', relatedGlossary:'Related Glossary', relatedFaq:'Related FAQ', relatedSources:'Related Sources', relatedSafety:'Related Safety'},
    ko:{siteResults:'사이트 결과', lesson:'강의', glossary:'용어', representative:'대표 코인', overview:'개요', role:'역할', strengths:'강점', limitations:'한계', beginnerNote:'초보자 메모', relatedLessons:'관련 강의', relatedGlossary:'관련 용어', relatedFaq:'관련 FAQ', relatedSources:'관련 출처', relatedSafety:'관련 안전 자료'},
    th:{siteResults:'ผลลัพธ์ในเว็บไซต์', lesson:'บทเรียน', glossary:'อภิธานศัพท์', representative:'เหรียญตัวแทน', overview:'ภาพรวม', role:'บทบาท', strengths:'จุดแข็ง', limitations:'ข้อจำกัด', beginnerNote:'หมายเหตุสำหรับผู้เริ่มต้น', relatedLessons:'บทเรียนที่เกี่ยวข้อง', relatedGlossary:'คำศัพท์ที่เกี่ยวข้อง', relatedFaq:'FAQ ที่เกี่ยวข้อง', relatedSources:'แหล่งข้อมูลที่เกี่ยวข้อง', relatedSafety:'ความปลอดภัยที่เกี่ยวข้อง'},
    id:{siteResults:'Hasil situs', lesson:'Pelajaran', glossary:'Glosarium', representative:'Koin perwakilan', overview:'Ringkasan', role:'Peran', strengths:'Kekuatan', limitations:'Batasan', beginnerNote:'Catatan pemula', relatedLessons:'Pelajaran terkait', relatedGlossary:'Glosarium terkait', relatedFaq:'FAQ terkait', relatedSources:'Sumber terkait', relatedSafety:'Keamanan terkait'},
    pt:{siteResults:'Resultados do site', lesson:'Lição', glossary:'Glossário', representative:'Moeda representativa', overview:'Visao geral', role:'Papel', strengths:'Pontos fortes', limitations:'Limitacoes', beginnerNote:'Nota para iniciantes', relatedLessons:'Licoes relacionadas', relatedGlossary:'Glossario relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Seguranca relacionada'},
    br:{siteResults:'Resultados do site', lesson:'Aula', glossary:'Glossário', representative:'Moeda representativa', overview:'Visao geral', role:'Papel', strengths:'Pontos fortes', limitations:'Limitacoes', beginnerNote:'Nota para iniciantes', relatedLessons:'Aulas relacionadas', relatedGlossary:'Glossario relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Seguranca relacionada'},
    tr:{siteResults:'Site sonuçları', lesson:'Ders', glossary:'Sözlük', representative:'Temsil coin', overview:'Genel bakis', role:'Rol', strengths:'Guclu yonler', limitations:'Sinirlamalar', beginnerNote:'Baslangic notu', relatedLessons:'Ilgili dersler', relatedGlossary:'Ilgili sozluk', relatedFaq:'Ilgili SSS', relatedSources:'Ilgili kaynaklar', relatedSafety:'Ilgili guvenlik'},
    es:{siteResults:'Resultados del sitio', lesson:'Lección', glossary:'Glosario', representative:'Moneda representativa', overview:'Resumen', role:'Rol', strengths:'Fortalezas', limitations:'Limitaciones', beginnerNote:'Nota para principiantes', relatedLessons:'Lecciones relacionadas', relatedGlossary:'Glosario relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fuentes relacionadas', relatedSafety:'Seguridad relacionada'},
    ar:{siteResults:'نتائج الموقع', lesson:'درس', glossary:'قاموس', representative:'عملة ممثلة', overview:'نظرة عامة', role:'الدور', strengths:'نقاط القوة', limitations:'القيود', beginnerNote:'ملاحظة للمبتدئين', relatedLessons:'دروس مرتبطة', relatedGlossary:'مصطلحات مرتبطة', relatedFaq:'أسئلة مرتبطة', relatedSources:'مصادر مرتبطة', relatedSafety:'مواد أمان مرتبطة'},
    vi:{siteResults:'Kết quả trong trang', lesson:'Bài học', glossary:'Thuật ngữ', representative:'Coin đại diện', overview:'Tổng quan', role:'Vai trò', strengths:'Điểm mạnh', limitations:'Giới hạn', beginnerNote:'Ghi chú cho người mới', relatedLessons:'Bài học liên quan', relatedGlossary:'Thuật ngữ liên quan', relatedFaq:'FAQ liên quan', relatedSources:'Nguồn liên quan', relatedSafety:'An toàn liên quan'},
    ha:{siteResults:'Sakamakon shafi', lesson:'Darasi', glossary:'Kamus', representative:'Coin wakili', overview:'Bayani', role:'Matsayi', strengths:'Karfi', limitations:'Iyakoki', beginnerNote:'Bayani ga mai farawa', relatedLessons:'Darussa masu alaka', relatedGlossary:'Kamus mai alaka', relatedFaq:'FAQ mai alaka', relatedSources:'Tushe masu alaka', relatedSafety:'Tsaro mai alaka'}
  };

  var KO_COIN_COPY = {
    bitcoin:{overview:'비트코인은 최초의 주요 암호화폐이며, 탈중앙화 디지털 자산을 이해하는 대표적인 예시입니다.', role:'중앙 발행자 없이 가치 저장 수단으로 사용되며, 디지털 금으로 설명되기도 합니다.', strengths:'높은 인지도, 깊은 유동성, 가장 오래 검증된 보안 기록을 갖고 있습니다.', limitations:'프로그래밍 기능은 제한적이며, 일부 최신 체인보다 처리 속도가 느릴 수 있습니다.', beginnerNote:'비트코인은 암호화폐 네트워크와 지갑의 기본 구조를 처음 배울 때 좋은 출발점입니다.'},
    ethereum:{overview:'이더리움은 스마트 컨트랙트, 토큰, NFT, DeFi 앱에 사용되는 프로그래밍 가능한 블록체인입니다.', role:'단순 전송을 넘어 블록체인 위에서 애플리케이션을 실행하는 기반 역할을 합니다.', strengths:'개발자 생태계가 크고, 다양한 토큰과 DeFi 서비스가 구축되어 있습니다.', limitations:'네트워크 혼잡 시 수수료가 높아질 수 있고, 초보자에게는 구조가 복잡할 수 있습니다.', beginnerNote:'이더리움은 스마트 컨트랙트와 DeFi를 이해할 때 중요한 출발점입니다.'},
    solana:{overview:'솔라나는 낮은 수수료와 빠른 처리를 목표로 설계된 고속 블록체인입니다.', role:'빠른 전송과 다양한 앱 사용 경험을 제공하는 네트워크로 활용됩니다.', strengths:'빠른 속도, 낮은 수수료, 활발한 앱 생태계가 장점입니다.', limitations:'네트워크 안정성과 생태계 리스크를 함께 확인해야 합니다.', beginnerNote:'솔라나는 네트워크 속도와 수수료 차이를 비교할 때 좋은 예시가 됩니다.'},
    xrp:{overview:'XRP는 빠르고 낮은 비용의 가치 전송을 목표로 하는 디지털 자산입니다.', role:'송금과 결제 흐름에서 빠른 전송을 지원하는 자산으로 설명됩니다.', strengths:'빠른 처리와 낮은 수수료가 장점입니다.', limitations:'사용 목적과 생태계 구조를 다른 체인과 구분해서 이해해야 합니다.', beginnerNote:'XRP는 결제와 전송 중심의 디지털 자산을 이해할 때 참고할 수 있습니다.'},
    bnb:{overview:'BNB는 BNB Chain 생태계와 거래소 관련 유틸리티에 연결된 토큰입니다.', role:'수수료, 생태계 사용, 체인 활동 등 다양한 용도로 활용됩니다.', strengths:'넓은 생태계와 다양한 사용처가 장점입니다.', limitations:'거래소 및 특정 생태계와의 연결성을 함께 고려해야 합니다.', beginnerNote:'BNB는 토큰이 생태계 안에서 어떤 역할을 갖는지 이해할 때 참고할 수 있습니다.'},
    usdt:{overview:'USDT는 미국 달러 가격을 추적하도록 설계된 대표적인 스테이블코인입니다.', role:'거래, 전송, 가치 보관의 중간 수단으로 널리 사용됩니다.', strengths:'높은 유동성과 넓은 거래소 지원이 장점입니다.', limitations:'발행자, 준비금, 투명성, 디페그 위험을 함께 확인해야 합니다.', beginnerNote:'USDT는 스테이블코인이 왜 모두 같은 구조가 아닌지 배울 때 좋은 예시입니다.'}
  };

  var LESSON_ROWS = [
    {lessonIndex:7, title:{en:'How should you separate exchanges and wallets?', ko:'거래소와 지갑을 어떻게 나눠서 써야 하는가'}, desc:{en:'Compare convenience, custody, recovery responsibility, and test transfers.', ko:'거래소와 지갑의 역할, 통제권, 복구 책임, 소액 테스트를 구분합니다.'}, keywords:['exchange','wallet','custody','self custody','hot wallet','cold wallet','거래소','지갑','커스터디','자기보관','소액 테스트']},
    {lessonIndex:8, title:{en:'How to compare networks and fees in practice', ko:'네트워크와 수수료를 실제로 비교하는 법'}, desc:{en:'Check network support, gas, transaction fees, confirmation time, and test transfers.', ko:'네트워크 지원 여부, 가스비, 거래 수수료, 확인 시간, 테스트 전송을 확인합니다.'}, keywords:['network','fee','gas','gas fee','transaction fee','wrong network','test transfer','네트워크','수수료','가스비','거래 수수료','오입금']},
    {lessonIndex:9, title:{en:'How are stablecoins different and what should you watch?', ko:'스테이블코인은 어떻게 다르고 무엇을 조심해야 하는가'}, desc:{en:'Compare issuers, reserves, liquidity, peg, and depeg risk.', ko:'발행자, 준비금, 유동성, 페그와 디페그 위험을 비교합니다.'}, keywords:['stablecoin','peg','reserve','issuer','depeg','liquidity','스테이블코인','페그','준비금','발행자','디페그']},
    {lessonIndex:10, title:{en:'What should you check before using DeFi?', ko:'DeFi를 처음 볼 때 무엇을 확인해야 하는가'}, desc:{en:'Separate wallet connection, approvals, signatures, swaps, slippage, and revoking approvals.', ko:'지갑 연결, 승인, 서명, 스왑, 슬리피지, 승인 해제를 구분합니다.'}, keywords:['defi','dapp','wallet connect','approval','signature','slippage','revoke approval','디파이','승인','서명','승인 해제','지갑 연결']},
    {lessonIndex:11, title:{en:'How should you review token projects and NFTs?', ko:'토큰 프로젝트와 NFT를 어떻게 검토해야 하는가'}, desc:{en:'Review utility, tokenomics, liquidity, holders, community activity, and red flags.', ko:'유틸리티, 토크노믹스, 유동성, 보유자 분포, 커뮤니티 활동, 위험 신호를 확인합니다.'}, keywords:['token project','nft','tokenomics','holder distribution','community activity','red flag','green flag','프로젝트 검토','토크노믹스','보유자 분포','커뮤니티 활동','위험 신호']},
    {lessonIndex:12, title:{en:'What should you watch in bridges and multichain transfers?', ko:'브리지와 멀티체인 이동에서 무엇을 조심해야 하는가'}, desc:{en:'Check source chain, destination chain, wrapped tokens, finality, bridge risk, and compatibility.', ko:'출발 체인, 도착 체인, 래핑 토큰, 최종성, 브리지 위험, 네트워크 호환성을 확인합니다.'}, keywords:['bridge','multichain','wrapped token','bridge risk','finality','cross chain transfer','network compatibility','브리지','멀티체인','래핑 토큰','브리지 위험','크로스체인 전송']},
    {lessonIndex:13, title:{en:'What order should you use before trusting information?', ko:'정보를 믿기 전에 어떤 순서로 검증해야 하는가'}, desc:{en:'Build a routine for official sources, domains, documents, explorers, contract addresses, and cross-checks.', ko:'공식 출처, 도메인, 문서, 익스플로러, 컨트랙트 주소, 교차 확인 루틴을 만듭니다.'}, keywords:['verification','verification routine','official source','domain','contract address','whitepaper','documentation','explorer','cross check','검증','정보 검증','검증 루틴','공식 출처','컨트랙트 주소','백서','문서']}
  ];

  var TERM_ROWS = [
    ['Withdrawal','출금','Moving assets out of an exchange or wallet.','거래소나 지갑에서 자산을 밖으로 보내는 행동입니다.',8,['withdrawal','출금']],
    ['Deposit','입금','Moving assets into an exchange or wallet.','거래소나 지갑으로 자산을 받거나 넣는 행동입니다.',8,['deposit','입금']],
    ['Custody','커스터디','Who controls access to the asset and keys.','자산과 키 접근 권한을 누가 통제하는지를 뜻합니다.',8,['custody','커스터디','보관']],
    ['Self-custody','자기보관','A setup where the user controls keys and recovery.','사용자가 키와 복구 책임을 직접 관리하는 방식입니다.',8,['self custody','self-custody','자기보관']],
    ['Hot wallet','핫월렛','An internet-connected wallet for convenient use.','인터넷에 연결되어 사용하기 편한 지갑입니다.',8,['hot wallet','핫월렛']],
    ['Cold wallet','콜드월렛','A wallet setup with reduced online exposure.','온라인 노출을 줄여 장기 보관에 더 적합한 지갑 방식입니다.',8,['cold wallet','콜드월렛']],
    ['Transaction fee','거래 수수료','A fee paid to process a blockchain transaction.','블록체인 거래를 처리하기 위해 내는 수수료입니다.',9,['transaction fee','거래 수수료']],
    ['Confirmation time','확인 시간','The time it takes for a transaction to be confirmed.','거래가 네트워크에서 확인되기까지 걸리는 시간입니다.',9,['confirmation time','확인 시간']],
    ['Gas fee','가스비','Network cost paid for blockchain activity.','블록체인 작업을 처리하기 위해 내는 네트워크 비용입니다.',9,['gas fee','gas','가스비','수수료']],
    ['Wrong network','잘못된 네트워크','Sending assets on a network the receiver does not support.','받는 곳이 지원하지 않는 네트워크로 자산을 보내는 실수입니다.',9,['wrong network','잘못된 네트워크','오입금']],
    ['Test transfer','소액 테스트','A small transfer used to verify address and network before moving more.','큰 금액 전송 전 주소와 네트워크를 확인하기 위한 작은 전송입니다.',9,['test transfer','소액 테스트']],
    ['Peg','페그','A target value relationship such as tracking one dollar.','1달러처럼 특정 기준 가치에 맞추려는 관계입니다.',10,['peg','페그']],
    ['Reserve','준비금','Assets intended to back a stablecoin or issuer obligation.','스테이블코인의 가치를 뒷받침하기 위해 보유하는 자산입니다.',10,['reserve','준비금']],
    ['Issuer','발행자','The entity that issues and manages a token or stablecoin.','토큰이나 스테이블코인을 발행하고 관리하는 주체입니다.',10,['issuer','발행자']],
    ['Depeg','디페그','When a stablecoin moves away from its target price.','스테이블코인이 목표 가격에서 벗어나는 상황입니다.',10,['depeg','디페그']],
    ['Counterparty risk','상대방 위험','Risk that another party cannot meet its responsibility.','상대방이나 발행자가 약속한 책임을 지키지 못할 위험입니다.',10,['counterparty risk','상대방 위험']],
    ['DApp','디앱','An application that runs through blockchain smart contracts.','블록체인 스마트 컨트랙트를 통해 작동하는 애플리케이션입니다.',11,['dapp','디앱']],
    ['Wallet connect','지갑 연결','Connecting a wallet to a website or app.','지갑을 웹사이트나 앱에 연결하는 행동입니다.',11,['wallet connect','지갑 연결']],
    ['Approval','승인','Permission allowing a contract to use a token.','컨트랙트가 특정 토큰을 사용할 수 있도록 허용하는 권한입니다.',11,['approval','승인']],
    ['Signature','서명','A wallet confirmation that approves a message or action.','메시지나 동작에 동의한다는 지갑 확인입니다.',11,['signature','서명']],
    ['Slippage','슬리피지','The difference between expected and executed swap price.','예상한 교환 가격과 실제 체결 가격의 차이입니다.',11,['slippage','슬리피지']],
    ['Liquidity pool','유동성 풀','A pool of tokens used for swaps or DeFi liquidity.','스왑이나 DeFi 유동성을 위해 모아둔 토큰 풀입니다.',11,['liquidity pool','유동성 풀']],
    ['Revoke approval','승인 해제','Removing token permissions that are no longer needed.','더 이상 필요 없는 토큰 사용 권한을 제거하는 행동입니다.',11,['revoke approval','승인 해제']],
    ['Tokenomics','토크노믹스','A token supply, distribution, incentive, and usage structure.','토큰의 공급량, 분배, 인센티브, 사용 구조를 보는 기준입니다.',12,['tokenomics','토크노믹스']],
    ['Holder distribution','보유자 분포','How token ownership is spread across holders.','토큰 보유가 여러 주소나 보유자에게 어떻게 나뉘어 있는지입니다.',12,['holder distribution','보유자 분포']],
    ['Community activity','커뮤니티 활동','Signals showing whether a project community is active and real.','프로젝트 커뮤니티가 실제로 활동하는지 보여주는 신호입니다.',12,['community activity','커뮤니티 활동']],
    ['Red flag','위험 신호','A warning sign that needs extra caution.','추가로 조심해야 하는 경고 신호입니다.',12,['red flag','위험 신호']],
    ['Green flag','긍정 신호','A healthy sign, though not a guarantee of safety.','건전해 보이는 신호이지만 안전을 보장하지는 않습니다.',12,['green flag','긍정 신호']],
    ['Wrapped token','래핑 토큰','A token that represents an asset from another chain.','다른 체인의 자산을 표현하도록 만든 토큰입니다.',13,['wrapped token','래핑 토큰']],
    ['Bridge risk','브리지 위험','Risk from moving assets between chains through a bridge.','브리지를 통해 체인 사이를 이동할 때 생길 수 있는 위험입니다.',13,['bridge risk','브리지 위험']],
    ['Finality','최종성','The point where a transaction is considered final.','거래가 되돌리기 어렵게 확정된 것으로 보는 상태입니다.',13,['finality','최종성']],
    ['Cross-chain transfer','크로스체인 전송','Moving assets or messages between different chains.','서로 다른 체인 사이에서 자산이나 메시지를 이동하는 것입니다.',13,['cross chain transfer','cross-chain transfer','크로스체인 전송']],
    ['Network compatibility','네트워크 호환성','Whether wallets, tokens, and services support the same network.','지갑, 토큰, 서비스가 같은 네트워크를 지원하는지 여부입니다.',13,['network compatibility','네트워크 호환성']],
    ['Official source','공식 출처','A project or organization channel that can be verified as official.','공식으로 확인할 수 있는 프로젝트나 기관의 채널입니다.',14,['official source','공식 출처']],
    ['Contract address','컨트랙트 주소','The on-chain address of a token or smart contract.','토큰이나 스마트 컨트랙트의 온체인 주소입니다.',14,['contract address','컨트랙트 주소']],
    ['Whitepaper','백서','A document explaining a project idea, structure, or design.','프로젝트의 아이디어, 구조, 설계를 설명하는 문서입니다.',14,['whitepaper','백서']],
    ['Documentation','문서','Official or technical docs explaining how a project works.','프로젝트 작동 방식과 사용법을 설명하는 공식 또는 기술 문서입니다.',14,['documentation','문서']],
    ['Explorer','익스플로러','A tool for checking blockchain transactions, addresses, and contracts.','블록체인 거래, 주소, 컨트랙트를 확인하는 도구입니다.',14,['explorer','익스플로러']],
    ['Cross-check','교차 확인','Verifying the same fact across more than one trusted source.','같은 정보를 여러 신뢰 가능한 출처에서 다시 확인하는 습관입니다.',14,['cross check','cross-check','교차 확인']],
    ['Impersonation','사칭','Pretending to be a trusted person, project, or company.','신뢰받는 사람, 프로젝트, 회사인 것처럼 속이는 행위입니다.',14,['impersonation','사칭']],
    ['Verification routine','검증 루틴','A repeatable order for checking sources, domains, addresses, and claims.','출처, 도메인, 주소, 주장을 반복 가능한 순서로 확인하는 절차입니다.',14,['verification routine','검증 루틴']]
  ];

  function langKey(){
    var lang = 'en';
    try{ lang = (typeof currentLang === 'string' && currentLang) || window.currentLang || localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en'; }catch(error){}
    lang = String(lang || 'en').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }

  function ui(){ return UI[langKey()] || UI.en; }
  function text(value, fallback){
    if(value && typeof value === 'object') return value[langKey()] || value.en || value.ko || fallback || '';
    return value == null ? (fallback || '') : String(value);
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
    var textValue = String(value || '').toLowerCase();
    try{
      textValue = /[\uac00-\ud7a3\u3130-\u318f]/.test(textValue)
        ? textValue.normalize('NFC')
        : textValue.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    }catch(error){}
    return textValue.replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }

  function ensureCoinLocaleData(){
    var store = window.coinEducation || (window.__coinSearchStore && window.__coinSearchStore.coinEducation);
    if(!store || !store.en) return;
    store.ko = store.ko || JSON.parse(JSON.stringify(store.en));
    store.ko._labels = Object.assign({}, store.ko._labels || store.en._labels || {}, {
      overview:UI.ko.overview,
      role:UI.ko.role,
      strengths:UI.ko.strengths,
      limitations:UI.ko.limitations,
      beginnerNote:UI.ko.beginnerNote,
      relatedLessons:UI.ko.relatedLessons,
      relatedGlossary:UI.ko.relatedGlossary,
      relatedFaq:UI.ko.relatedFaq,
      relatedSources:UI.ko.relatedSources,
      relatedSafety:UI.ko.relatedSafety,
      coin:'코인'
    });
    Object.keys(KO_COIN_COPY).forEach(function(key){
      if(!store.ko[key] && store.en[key]) store.ko[key] = JSON.parse(JSON.stringify(store.en[key]));
      if(store.ko[key]) Object.assign(store.ko[key], KO_COIN_COPY[key]);
    });
    if(window.__coinSearchStore) window.__coinSearchStore.coinEducation = store;
    window.coinEducation = store;
  }

  function installStyles(){
    if(document.getElementById('searchModalResultsFinal20260527Styles')) return;
    var style = document.createElement('style');
    style.id = 'searchModalResultsFinal20260527Styles';
    style.textContent = [
      '#searchOverlay{overflow:hidden;}',
      '#searchOverlay .search-box{display:flex;flex-direction:column;max-height:min(88vh,760px);overflow:hidden;}',
      '#searchOverlay .search-input-wrap{flex:0 0 auto;}',
      '#searchOverlay #searchResults{flex:1 1 auto;min-height:0;max-height:min(70vh,680px)!important;overflow-y:auto!important;overflow-x:hidden!important;padding-bottom:30px!important;scroll-padding-bottom:30px;}',
      '#searchOverlay #searchResults .search-section-divider{margin-top:14px;margin-bottom:10px;}',
      '#searchOverlay #searchResults .search-result-item,#searchOverlay #searchResults .coin-result-card,#searchOverlay #searchResults .site-result-card,#searchOverlay #searchResults .representative-coin-card{margin-bottom:12px;}',
      '#searchOverlay #searchResults > *:last-child{margin-bottom:26px!important;}',
      '#searchOverlay #searchResults .search-result-title,#searchOverlay #searchResults .search-result-meta,#searchOverlay #searchResults .search-result-desc,#searchOverlay #searchResults .coin-field-text{word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .representative-coin-card{max-width:100%;}',
      '#searchOverlay #searchResults .rep-related-groups{padding-bottom:2px;}'
    ].join('');
    document.head.appendChild(style);
  }

  function coinKeyFromCard(card){
    var symbol = norm(card.querySelector('.rep-coin-symbol,.coin-badge') && card.querySelector('.rep-coin-symbol,.coin-badge').textContent).toUpperCase();
    if(symbol === 'BTC') return 'bitcoin';
    if(symbol === 'ETH') return 'ethereum';
    if(symbol === 'SOL') return 'solana';
    if(symbol === 'XRP') return 'xrp';
    if(symbol === 'BNB') return 'bnb';
    if(symbol === 'USDT' || /tether/i.test(card.textContent || '')) return 'usdt';
    return '';
  }

  function patchRepresentativeCardDom(){
    var root = document.getElementById('searchResults');
    if(!root) return;
    var labels = ui();
    Array.prototype.forEach.call(root.querySelectorAll('.representative-coin-card'), function(card){
      var kicker = card.querySelector('.rep-coin-kicker');
      if(kicker) kicker.textContent = labels.representative;
      var labelNodes = card.querySelectorAll('.rep-coin-grid .field-label');
      [labels.overview, labels.role, labels.strengths, labels.limitations, labels.beginnerNote].forEach(function(label, index){
        if(labelNodes[index]) labelNodes[index].textContent = label;
      });
      var relatedNodes = card.querySelectorAll('.rep-related-groups .related-title');
      [labels.relatedLessons, labels.relatedGlossary, labels.relatedFaq, labels.relatedSources, labels.relatedSafety].forEach(function(label, index){
        if(relatedNodes[index]) relatedNodes[index].textContent = label;
      });
      if(langKey() !== 'ko') return;
      var key = coinKeyFromCard(card);
      var copy = KO_COIN_COPY[key];
      if(!copy) return;
      var values = [copy.overview, copy.role, copy.strengths, copy.limitations, copy.beginnerNote];
      var textNodes = card.querySelectorAll('.rep-coin-grid .coin-field-text');
      values.forEach(function(value, index){
        if(textNodes[index]) textNodes[index].textContent = value;
      });
    });
  }

  function disconnectLegacySearchObserver(root){
    if(!root) return;
    if(root.__searchUiLocaleFinalObserver && typeof root.__searchUiLocaleFinalObserver.disconnect === 'function'){
      try{ root.__searchUiLocaleFinalObserver.disconnect(); }catch(error){}
      root.__searchUiLocaleFinalObserver = null;
    }
  }

  function itemScore(item, query){
    var q = norm(query);
    if(!q) return 0;
    var hay = norm([item.title, item.desc, (item.keywords || []).join(' ')].join(' '));
    var title = norm(item.title);
    var score = 0;
    if(title === q) score += 320;
    if(title.indexOf(q) === 0) score += 240;
    if(title.indexOf(q) !== -1) score += 180;
    if(hay.indexOf(q) !== -1) score += 120;
    (item.keywords || []).forEach(function(keyword){
      var k = norm(keyword);
      if(k === q) score += 260;
      else if(k.indexOf(q) !== -1 || q.indexOf(k) !== -1) score += 90;
    });
    return score;
  }

  function lessonItems(){
    return LESSON_ROWS.map(function(row){
      return {
        kind:'lesson',
        type:'lesson',
        badge:'L' + (row.lessonIndex + 1),
        lessonIndex:row.lessonIndex,
        page:'lesson',
        title:text(row.title),
        desc:text(row.desc),
        keywords:row.keywords.concat([row.title.en, row.title.ko, row.desc.en, row.desc.ko])
      };
    });
  }

  function glossaryItems(){
    return TERM_ROWS.map(function(row){
      var isKo = langKey() === 'ko';
      return {
        kind:'glossary',
        type:'glossary',
        badge:'G',
        page:'glossary',
        title:isKo ? row[1] : row[0],
        desc:isKo ? row[3] : row[2],
        lesson:row[4],
        keywords:[row[0], row[1], row[2], row[3]].concat(row[5] || [])
      };
    });
  }

  function enhancedMatches(query){
    var all = lessonItems().concat(glossaryItems());
    return all.map(function(item){
      return {item:item, score:itemScore(item, query)};
    }).filter(function(entry){
      return entry.score > 0;
    }).sort(function(a, b){
      return b.score - a.score;
    }).map(function(entry){
      return entry.item;
    }).slice(0, 10);
  }

  function existingTitles(root){
    var seen = {};
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-title,.site-result-title'), function(node){
      var key = norm(node.textContent);
      if(key) seen[key] = true;
    });
    return seen;
  }

  function resultHref(item){
    if(item.kind === 'lesson'){
      try{
        if(typeof window.__CA_GET_LESSON_ROUTE === 'function') return window.__CA_GET_LESSON_ROUTE(item.lessonIndex);
      }catch(error){}
      return './#lesson' + (item.lessonIndex + 1);
    }
    try{
      if(typeof window.__CA_GET_PAGE_ROUTE === 'function') return window.__CA_GET_PAGE_ROUTE('glossary');
    }catch(error){}
    return './glossary/';
  }

  function resultRow(item){
    var labels = ui();
    var typeLabel = item.kind === 'lesson' ? labels.lesson : labels.glossary;
    var badgeClass = item.kind === 'lesson' ? 'lesson' : 'glossary';
    return '<a class="search-result-item site-result-card search-enhanced-intermediate-row" href="' + esc(resultHref(item)) + '" data-enhanced-search-kind="' + esc(item.kind) + '" data-enhanced-lesson-index="' + esc(item.lessonIndex == null ? '' : item.lessonIndex) + '">'
      + '<span class="search-result-badge result-type-icon ' + badgeClass + '">' + esc(item.badge) + '</span>'
      + '<span class="search-result-body site-result-body">'
      + '<span class="search-result-meta site-result-meta result-type-label">' + esc(typeLabel) + '</span>'
      + '<strong class="search-result-title site-result-title">' + esc(item.title) + '</strong>'
      + '<span class="search-result-desc site-result-description">' + esc(item.desc) + '</span>'
      + '</span></a>';
  }

  function bindEnhancedRows(root){
    Array.prototype.forEach.call(root.querySelectorAll('.search-enhanced-intermediate-row'), function(row){
      if(row.__enhancedSearchBound) return;
      row.__enhancedSearchBound = true;
      row.addEventListener('click', function(event){
        var kind = row.getAttribute('data-enhanced-search-kind');
        var lessonIndex = parseInt(row.getAttribute('data-enhanced-lesson-index'), 10);
        if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        if(kind === 'lesson' && isFinite(lessonIndex) && typeof window.showLesson === 'function'){
          if(typeof window.closeSearch === 'function') window.closeSearch();
          window.showLesson(lessonIndex);
          return;
        }
        if(typeof window.closeSearch === 'function') window.closeSearch();
        if(typeof window.showPage === 'function') window.showPage('glossary');
      });
    });
  }

  function enhanceIntermediateSearch(query){
    var root = document.getElementById('searchResults');
    if(!root || !String(query || '').trim()) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-enhanced-intermediate-row,.search-enhanced-intermediate-divider'), function(node){
      if(node.parentNode) node.parentNode.removeChild(node);
    });
    var matches = enhancedMatches(query);
    if(!matches.length) return;
    var seen = existingTitles(root);
    var missing = matches.filter(function(item){
      return !seen[norm(item.title)];
    });
    if(!missing.length) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-empty'), function(node){
      if(node.parentNode) node.parentNode.removeChild(node);
    });
    var html = '<div class="search-section-divider search-enhanced-intermediate-divider">' + esc(ui().siteResults) + '</div>'
      + missing.map(resultRow).join('');
    root.insertAdjacentHTML('beforeend', html);
    bindEnhancedRows(root);
  }

  function patchSearchResults(query){
    installStyles();
    ensureCoinLocaleData();
    disconnectLegacySearchObserver(document.getElementById('searchResults'));
    patchRepresentativeCardDom();
    enhanceIntermediateSearch(query || (document.getElementById('searchInput') && document.getElementById('searchInput').value) || '');
    patchRepresentativeCardDom();
  }

  function wrapRenderer(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__searchModalResultsFinalWrapped) return;
    var wrapped = function(query){
      installStyles();
      ensureCoinLocaleData();
      var result = original.apply(this, arguments);
      patchSearchResults(query);
      setTimeout(function(){ patchSearchResults(query); }, 0);
      return result;
    };
    wrapped.__searchModalResultsFinalWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }

  function installDebug(){
    window.debugSearchModalResultsFinal = function(query){
      ensureCoinLocaleData();
      if(query && typeof window.renderSearchAutocompleteFinal === 'function') window.renderSearchAutocompleteFinal(query);
      patchSearchResults(query);
      var root = document.getElementById('searchResults');
      var card = root && root.querySelector('.representative-coin-card');
      return {
        currentLocale:langKey(),
        query:query || (document.getElementById('searchInput') && document.getElementById('searchInput').value) || '',
        searchResultsMaxHeight:root ? getComputedStyle(root).maxHeight : null,
        resultCount:root ? root.querySelectorAll('.search-result-item').length : 0,
        enhancedRows:root ? root.querySelectorAll('.search-enhanced-intermediate-row').length : 0,
        representativeTexts:card ? Array.prototype.map.call(card.querySelectorAll('.coin-field-text'), function(node){ return node.textContent; }) : [],
        lessonMatches:enhancedMatches(query || '').filter(function(item){ return item.kind === 'lesson'; }).map(function(item){ return item.title; }),
        glossaryMatches:enhancedMatches(query || '').filter(function(item){ return item.kind === 'glossary'; }).map(function(item){ return item.title; })
      };
    };
  }

  ensureCoinLocaleData();
  installStyles();
  wrapRenderer('renderSearchAutocompleteFinal');
  wrapRenderer('renderPatchedSearchResults');
  wrapRenderer('openSearch');
  wrapRenderer('setLang');
  installDebug();
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ installStyles(); patchSearchResults(''); }, {once:true});
  }else{
    setTimeout(function(){ installStyles(); patchSearchResults(''); }, 0);
  }
})();
