(function(){
  if(typeof window === 'undefined' || window.__caI18nCompletion20260517) return;
  window.__caI18nCompletion20260517 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var LESSON_START = 7;
  var LESSON_COUNT = 7;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function lang(){
    var raw = (typeof currentLang === 'string' && currentLang) ? currentLang : (document.documentElement.lang || 'en');
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br') return 'br';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw.indexOf('pt') === 0) return raw.indexOf('br') > -1 ? 'br' : 'pt';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return LANGS.indexOf(raw) > -1 ? raw : 'en';
  }

  var DATA = {
    en:{
      menu:['English','EN','🇺🇸'], htmlLang:'en', dir:'ltr',
      ui:{
        'brand.name':'Coin ProofPath','brand.sub':'Clear lessons for beginners','sidebar.lessons':'Course lessons','sidebar.topics':'Quick topics',
        'nav.home':'Home','nav.homesub':'Start here first','nav.start':'Start Here','nav.startsub':'Beginner path','nav.faqPage':'FAQ','nav.faqsub':'Common questions','nav.safety':'Safety','nav.safetysub':'Scam prevention','nav.glossary':'Glossary','nav.glossarysub':'Simple key terms','nav.sources':'Source Library','nav.sourcesub':'Articles and references','nav.updates':'Update History','nav.updatessub':'What changed',
        'progress.done':'completed','btn.prev':'Previous lesson','btn.next':'Next lesson','btn.mark':'Mark as completed','btn.completed':'Completed','btn.restart':'Start again','breadcrumb.prefix':'Lesson',
        'visual.title':'Visual explanation','callout.quick':'One-line key idea','source.title':'Source','check.title':'Beginner checkpoints','faq.title':'FAQ','mistakes.title':'Common mistakes','quiz.title':'Mini quiz','quiz.reveal':'Show answer','example.title':'Easy example','sources.title':'Related sources','complete.note':'Your progress is saved in this browser.',
        'home.title':'Learn crypto step by step','home.desc':'Start with beginner lessons, safety habits, glossary terms, and practical checklists.','home.start':'Where to start','home.openLesson':'Open lesson','home.openGlossary':'Open Glossary','home.openSources':'Open Source Library','glossary.title':'Glossary','glossary.desc':'Simple meanings for key crypto words.','sources.pageTitle':'Source Library','sources.pageDesc':'Real articles, official references, quick reviews, and deeper learning links.','updates.title':'Update History','updates.desc':'A log of improvements made to this platform.'
      },
      home:{
        label:'Visual guide', open:'Open',
        flowTitle:'Where should I start?', flowDesc:'A simple path from the first lesson to safety habits.', flow:['Start with Lesson 1','Learn wallet basics','Practice safe transfer','Check scams and safety'],
        checklistTitle:'Send safely in 30 seconds', checklistDesc:'Use this compact card before a real transfer.', checks:['Is the address correct?','Is the network correct?','Is this the official destination?','Did you test with a small amount?'],
        warningTitle:'Common beginner mistakes', warningDesc:'Quick warning cards point you toward safety lessons.', warnings:[['Wrong network','Check both sides before sending.'],['Fake website','Compare the domain before logging in.'],['Seed phrase exposure','Never type recovery words into a site.']],
        overviewTitle:'What you learn here', overviewDesc:'Five learning areas make the site easier to scan.', overview:['Blockchain basics','Wallets','Safe transfers','Scam prevention','Practical crypto learning'],
        roadTitle:'Recommended learning path', roadDesc:'Move from basics to safety, first buy, practical use, then the intermediate roadmap.', road:['Beginner','Safety','First Buy','Practical Use','Intermediate Roadmap']
      },
      intermediate:{
        sidebar:'Intermediate Roadmap', trackTitle:'Intermediate Roadmap', trackDesc:'After the basics, continue with practical lessons on networks, fees, wallets, DeFi, bridges, and verification.', trackCta:'Start Intermediate Roadmap', badge:'Roadmap', sourceLabel:'Intermediate roadmap', relatedTitle:'Related practical resources', relatedFree:'Free checklist / PDF', relatedDeep:'Structured eBook review', relatedSources:'Source Library',
        headings:['One-line key idea','Easy explanation','Real situation','Where people make mistakes','What to check now'],
        titles:['How to Use Exchanges and Wallets Together','How to Compare Networks and Fees in Practice','How Stablecoins Differ and What to Watch Out For','What to Understand First When Entering DeFi','What Actually Matters When Evaluating NFT and Token Projects','Why Bridges and Multichain Systems Matter — and Why They Confuse People','How to Verify Information Before You Trust It'],
        subs:['Balance convenience and control','Compare fee, speed, and mistake risk','Look beyond one-dollar pricing','Connect, approve, sign, and swap safely','Look past image, hype, and promises','Moving across chains changes the risk','Build a repeatable verification routine'],
        one:['Use exchanges for buying and wallets for control, but know why each one exists.','The same asset name can exist on several networks, so compare the network before you send.','Stablecoins may aim for a similar price, but their trust structure and risk are not identical.','In DeFi, the dangerous part is often what your wallet is asked to approve or sign.','A project is more than artwork or hype; check evidence, activity, liquidity, and sustainability.','A bridge is not a normal send; chain, route, contract, and destination all matter.','Do not trust one post, screenshot, or DM; verify in a repeatable order before acting.'],
        visual:[['Exchange for buying','Wallet for control','Recovery plan','Small test first'],['Network match','Fee and ETA','Destination support','Small test'],['Issuer','Reserve model','Liquidity','Depeg risk'],['Connect','Approve','Sign','Swap'],['Activity','Liquidity','Utility','Official links'],['Source chain','Bridge route','Destination chain','Asset version'],['Official source','Domain','Contract','Cross-check']]
      },
      lesson8:{label:'Custody decision card', splitTitle:'How to split exchange and wallet use', splitDesc:'Use exchanges for active buying or selling. Use wallets when control and recovery planning matter more.', exchangeLabel:'Exchange-like setup', exchangeTitle:'Exchange holding', exchangeNote:'Fast trade / convert / withdraw', walletLabel:'Wallet-like setup', walletTitle:'Wallet custody', walletNote:'Control / recovery / long-term hold', convenience:'Convenience', control:'Control', recovery:'Recovery duty', longTerm:'Long-term fit', decisionTitle:'Where should this asset stay?', decisionDesc:'Start with the asset purpose and your recovery readiness.', q:['Will you sell or swap soon?','Is this for long-term holding?','Can you manage recovery safely?'], a:['Keep only a small active amount','Consider wallet custody','Prepare recovery first'], scenarioTitle:'Real custody state example', compare:'Compare', exchangeMock:'Exchange holding state', walletMock:'Wallet custody state', sell:'Quick sell / convert', address:'Wallet address', limited:'Direct control is limited', direct:'Direct control is stronger', checklistTitle:'Check These Before Moving Assets', checklistDesc:'Move carefully. Start with an amount you can manage and recover.', checks:['Will you use this asset often?','Is it for long-term holding?','Can you protect the recovery phrase?','Do you understand the transfer network?','Do you need to move everything at once?'], note:'There is no single correct answer. Split assets by purpose, amount, and recovery readiness.'}
    },
    ko:{
      menu:['한국어','KO','🇰🇷'], htmlLang:'ko', dir:'ltr',
      ui:{'brand.name':'Coin ProofPath','brand.sub':'초보자를 위한 쉬운 암호화폐 강의','sidebar.lessons':'강의 목록','sidebar.topics':'빠른 주제','nav.home':'홈','nav.homesub':'여기서 시작','nav.start':'시작 가이드','nav.startsub':'입문 순서','nav.faqPage':'FAQ','nav.faqsub':'자주 묻는 질문','nav.safety':'안전 가이드','nav.safetysub':'사기 예방','nav.glossary':'용어사전','nav.glossarysub':'핵심 용어 쉽게 보기','nav.sources':'자료 라이브러리','nav.sourcesub':'기사와 공식 참고자료','nav.updates':'업데이트 기록','nav.updatessub':'변경 내역','progress.done':'완료','btn.prev':'이전 강의','btn.next':'다음 강의','btn.mark':'학습 완료로 표시','btn.completed':'완료됨','btn.restart':'처음부터 다시 보기','breadcrumb.prefix':'강의','visual.title':'시각 설명','callout.quick':'한 줄 핵심','source.title':'출처','check.title':'체크포인트','faq.title':'FAQ','mistakes.title':'자주 하는 실수','quiz.title':'짧은 확인 문제','quiz.reveal':'정답 보기','example.title':'쉬운 예시','sources.title':'관련 자료','complete.note':'학습 진행 상태는 이 브라우저에 저장됩니다.','home.title':'암호화폐를 차근차근 배우기','home.desc':'입문 강의, 안전 습관, 용어사전, 실전 체크리스트를 한 흐름으로 학습하세요.','home.start':'어디서 시작할까요?','home.openLesson':'강의 열기','home.openGlossary':'용어사전 열기','home.openSources':'자료 라이브러리 열기','glossary.title':'용어사전','glossary.desc':'강의에서 자주 나오는 핵심 용어를 쉽게 정리했습니다.','sources.pageTitle':'자료 라이브러리','sources.pageDesc':'실제 기사, 공식 참고자료, 빠른 복습, 심화 학습 링크를 모았습니다.','updates.title':'업데이트 기록','updates.desc':'플랫폼 개선 내역을 날짜별로 정리했습니다.'},
      home:{label:'시각 가이드',open:'보기',flowTitle:'어디서 시작할까?',flowDesc:'첫 강의부터 안전 습관까지 이어지는 가장 쉬운 입문 흐름입니다.',flow:['1강부터 시작','지갑 이해','안전한 전송 연습','사기와 안전 확인'],checklistTitle:'보내기 전 30초 체크',checklistDesc:'실제 전송 전에 바로 확인하는 compact 카드입니다.',checks:['주소가 맞는가?','네트워크가 맞는가?','공식 목적지인가?','소액 테스트를 했는가?'],warningTitle:'초보자가 자주 하는 실수',warningDesc:'위험이 실제 문제가 되기 전에 안전 강의로 이어지는 경고 카드입니다.',warnings:[['잘못된 네트워크','보내기 전 양쪽 네트워크를 확인하세요.'],['가짜 사이트','로그인 전 도메인을 비교하세요.'],['시드 문구 노출','복구 문구를 사이트에 입력하지 마세요.']],overviewTitle:'이 사이트에서 배우는 것',overviewDesc:'학습 범위를 한눈에 보고 강의를 선택할 수 있습니다.',overview:['블록체인 기초','지갑 이해','안전한 전송','사기 예방','실전 학습'],roadTitle:'추천 학습 경로',roadDesc:'기초, 안전, 첫 구매, 실전 학습, 중급자 판단으로 이어집니다.',road:['초보자 시작','안전 기초','첫 구매','실전 학습','중급자 트랙']},
      intermediate:{sidebar:'중급자 로드맵',trackTitle:'중급자 로드맵',trackDesc:'기초를 끝냈다면, 이제 네트워크, 수수료, 지갑, DeFi, 브리지, 정보 검증을 실제 상황에서 비교하고 판단하는 단계로 넘어가세요.',trackCta:'중급자 로드맵 시작하기',badge:'로드맵',sourceLabel:'중급자 로드맵 자료',relatedTitle:'함께 보면 좋은 실전 자료',relatedFree:'무료 체크리스트 / PDF',relatedDeep:'전자책으로 구조화 복습',relatedSources:'자료 라이브러리',headings:['한 줄 핵심','쉬운 설명','실제 상황 예시','어디서 실수하는가','지금 확인할 것'],titles:['거래소와 지갑을 어떻게 나눠서 써야 하는가','네트워크와 수수료를 실제로 비교하는 법','스테이블코인은 어떻게 다르고 무엇을 조심해야 하는가','DeFi를 처음 볼 때 무엇부터 이해해야 하는가','NFT와 토큰 프로젝트를 볼 때 진짜 확인해야 할 것','브리지와 멀티체인은 왜 어렵고 왜 중요한가','정보를 믿기 전에 어떤 순서로 검증해야 하는가'],subs:['편의성과 통제권의 균형','수수료, 속도, 실수 위험 비교','1달러처럼 보이는 것 너머 보기','connect, approve, sign, swap 구분','이미지와 hype보다 근거 확인','체인을 넘으면 위험도 달라짐','반복 가능한 검증 루틴 만들기'],one:['거래소는 사고팔기 편한 곳이고, 지갑은 내가 통제권을 더 많이 갖는 곳입니다.','같은 자산 이름이라도 네트워크가 다르면 수수료와 도착 가능성이 달라집니다.','스테이블코인은 가격이 비슷해 보여도 발행 구조와 위험이 다를 수 있습니다.','DeFi에서는 화면보다 지갑이 무엇을 승인하거나 서명하라고 하는지가 더 중요합니다.','프로젝트는 이미지나 분위기보다 활동성, 유동성, 근거, 지속성을 봐야 합니다.','브리지는 일반 전송이 아니라 체인, 경로, 컨트랙트, 목적지를 함께 확인해야 합니다.','게시물, 캡처, DM 하나를 믿기 전에 공식 출처부터 순서대로 검증해야 합니다.'],visual:[['거래소는 구매용','지갑은 통제권','복구 계획','소액 테스트'],['네트워크 일치','수수료와 시간','목적지 지원','소액 테스트'],['발행 주체','준비금 구조','유동성','디페그 위험'],['연결','승인','서명','스왑'],['활동성','유동성','유틸리티','공식 링크'],['출발 체인','브리지 경로','도착 체인','자산 버전'],['공식 출처','도메인','컨트랙트','교차 확인']]},
      lesson8:{label:'보관 판단 카드',splitTitle:'거래소와 지갑을 나눠 쓰는 기준',splitDesc:'거래소는 빠르게 사고팔기 좋고, 지갑은 직접 통제하고 오래 보관할 때 중요합니다.',exchangeLabel:'거래소 방식',exchangeTitle:'거래소 보관',exchangeNote:'거래 / 전환 / 입출금이 빠름',walletLabel:'지갑 방식',walletTitle:'지갑 보관',walletNote:'통제권 / 복구 책임 / 장기 보관',convenience:'편의성',control:'통제권',recovery:'복구 책임',longTerm:'장기 보관',decisionTitle:'이 자산은 어디에 둘까?',decisionDesc:'자산 목적과 복구 준비 상태를 먼저 나누면 선택이 쉬워집니다.',q:['곧 팔거나 교환할 예정인가?','오래 보관할 자산인가?','복구 문구를 안전하게 관리할 수 있는가?'],a:['거래소에는 소액만','지갑 보관 검토','복구 준비 먼저'],scenarioTitle:'실제 보관 상태 예시',compare:'비교',exchangeMock:'거래소 보유 상태',walletMock:'지갑 보관 상태',sell:'빠른 매도 / 전환',address:'지갑 주소',limited:'직접 통제권은 제한적',direct:'직접 통제권이 큼',checklistTitle:'옮기기 전에 이것부터 확인하세요',checklistDesc:'한 번에 전부 옮기기보다 감당 가능한 금액부터 확인하세요.',checks:['자주 쓸 자산인가?','장기 보관용인가?','복구 문구를 안전하게 관리할 수 있는가?','전송 네트워크를 이해했는가?','전체를 한 번에 옮길 필요가 있는가?'],note:'정답은 하나가 아닙니다. 목적, 금액, 복구 준비에 맞춰 나누는 것이 핵심입니다.'}
    }
  };

  DATA.br = clone(DATA.pt || {});

  function makePack(code, menu, uiBits, homeBits, intBits, lesson8Bits){
    var intermediateBits = Object.assign({}, DATA.en.intermediate, intBits || {});
    if(!(intBits && intBits.one)) delete intermediateBits.one;
    DATA[code] = {
      menu:menu,
      htmlLang: code === 'br' ? 'pt-BR' : code,
      dir: code === 'ar' ? 'rtl' : 'ltr',
      ui:Object.assign({}, DATA.en.ui, uiBits || {}),
      home:Object.assign({}, DATA.en.home, homeBits || {}),
      intermediate:intermediateBits,
      lesson8:Object.assign({}, DATA.en.lesson8, lesson8Bits || {})
    };
  }

  makePack('th',['ไทย','TH','🇹🇭'],{
    'brand.sub':'บทเรียนคริปโตที่เข้าใจง่าย','sidebar.lessons':'บทเรียน','nav.home':'หน้าแรก','nav.start':'เริ่มต้น','nav.faqPage':'FAQ','nav.safety':'ความปลอดภัย','nav.glossary':'อภิธานศัพท์','nav.sources':'คลังแหล่งข้อมูล','nav.updates':'ประวัติอัปเดต','progress.done':'เสร็จแล้ว','btn.prev':'บทก่อนหน้า','btn.next':'บทถัดไป','btn.mark':'ทำเครื่องหมายว่าเสร็จ','btn.completed':'เสร็จแล้ว','visual.title':'ภาพอธิบาย','callout.quick':'ใจความสำคัญ','check.title':'จุดตรวจสอบ','mistakes.title':'ข้อผิดพลาดที่พบบ่อย','quiz.title':'แบบทดสอบสั้น','quiz.reveal':'ดูคำตอบ','sources.title':'แหล่งข้อมูลที่เกี่ยวข้อง','complete.note':'ความคืบหน้าถูกบันทึกในเบราว์เซอร์นี้','home.title':'เรียนคริปโตทีละขั้น','home.desc':'เริ่มจากบทเรียนพื้นฐาน ความปลอดภัย คำศัพท์ และเช็กลิสต์ใช้งานจริง','sources.pageTitle':'คลังแหล่งข้อมูล','sources.pageDesc':'บทความจริง แหล่งอ้างอิงทางการ และลิงก์สำหรับเรียนต่อ'
  },{label:'คู่มือภาพ',open:'เปิด',flowTitle:'ควรเริ่มจากตรงไหน?',flowDesc:'เส้นทางง่าย ๆ จากบทแรกไปสู่พฤติกรรมความปลอดภัย',flow:['เริ่มบทที่ 1','เข้าใจกระเป๋าเงิน','ฝึกโอนอย่างปลอดภัย','ตรวจสอบ scam และความปลอดภัย'],checklistTitle:'เช็ก 30 วินาทีก่อนส่ง',checklistDesc:'ใช้การ์ดสั้นนี้ก่อนโอนจริง',checks:['ที่อยู่ถูกต้องไหม?','เครือข่ายถูกต้องไหม?','ปลายทางเป็นทางการไหม?','ทดสอบด้วยจำนวนเล็กหรือยัง?'],warningTitle:'ข้อผิดพลาดที่มือใหม่พบบ่อย',warningDesc:'การ์ดเตือนสั้น ๆ พาไปยังบทเรียนความปลอดภัย',warnings:[['เลือกเครือข่ายผิด','ตรวจทั้งสองฝั่งก่อนส่ง'],['เว็บปลอม','เทียบโดเมนก่อนเข้าสู่ระบบ'],['เปิดเผย seed phrase','อย่าพิมพ์คำกู้คืนลงในเว็บไซต์']],overviewTitle:'ที่นี่เรียนอะไร',overview:['พื้นฐาน blockchain','กระเป๋าเงิน','การโอนปลอดภัย','ป้องกัน scam','ฝึกใช้จริง'],roadTitle:'เส้นทางเรียนที่แนะนำ',road:['มือใหม่','ความปลอดภัย','ซื้อครั้งแรก','ฝึกใช้จริง','ระดับกลาง']},{
    sidebar:'แทร็กปฏิบัติระดับกลาง',trackTitle:'แทร็กปฏิบัติระดับกลาง',trackDesc:'เรียนการเก็บรักษา เครือข่าย DeFi โครงการ bridge และการตรวจสอบแบบใช้งานจริง',badge:'ปฏิบัติ',sourceLabel:'ข้อมูลปฏิบัติระดับกลาง',headings:['ใจความสำคัญ','คำอธิบายง่าย','สถานการณ์จริง','จุดที่มักพลาด','สิ่งที่ต้องเช็กตอนนี้'],titles:['ใช้ exchange และ wallet ร่วมกันอย่างไร','เปรียบเทียบ network และค่าธรรมเนียมอย่างไร','stablecoin ต่างกันอย่างไรและควรระวังอะไร','เริ่มดู DeFi ต้องเข้าใจอะไรก่อน','ประเมิน NFT และ token project ต้องดูอะไรจริง ๆ','ทำไม bridge และ multichain จึงสำคัญและสับสน','ตรวจสอบข้อมูลก่อนเชื่ออย่างไร'],subs:['สมดุลระหว่างความสะดวกและการควบคุม','เทียบค่าธรรมเนียม ความเร็ว และความเสี่ยง','มองเกินราคาที่เหมือนดอลลาร์','แยก connect approve sign swap','ดูหลักฐานมากกว่าภาพและกระแส','ข้าม chain แล้วความเสี่ยงเปลี่ยน','สร้างลำดับตรวจสอบซ้ำได้'],visual:[['exchange ใช้ซื้อขาย','wallet ใช้ควบคุม','แผนกู้คืน','ทดสอบจำนวนน้อย'],['จับคู่ network','ค่าธรรมเนียม/เวลา','รองรับปลายทาง','ทดสอบก่อน'],['ผู้ออก','รูปแบบสำรอง','สภาพคล่อง','ความเสี่ยง depeg'],['เชื่อมต่อ','อนุมัติ','ลงนาม','swap'],['กิจกรรม','สภาพคล่อง','ประโยชน์ใช้จริง','ลิงก์ทางการ'],['chain ต้นทาง','เส้นทาง bridge','chain ปลายทาง','เวอร์ชันสินทรัพย์'],['แหล่งทางการ','โดเมน','สัญญา','ตรวจข้ามแหล่ง']]
  },{label:'การ์ดตัดสินใจ custody',splitTitle:'แบ่งใช้ exchange กับ wallet อย่างไร',exchangeLabel:'แบบ exchange',walletLabel:'แบบ wallet',convenience:'ความสะดวก',control:'การควบคุม',recovery:'หน้าที่กู้คืน',longTerm:'ถือยาว',decisionTitle:'สินทรัพย์นี้ควรอยู่ที่ไหน?',compare:'เปรียบเทียบ',checklistTitle:'เช็กก่อนย้ายสินทรัพย์'});

  makePack('id',['Bahasa Indonesia','ID','🇮🇩'],{
    'brand.sub':'Pelajaran crypto yang jelas untuk pemula','sidebar.lessons':'Daftar pelajaran','nav.home':'Beranda','nav.start':'Mulai di Sini','nav.faqPage':'FAQ','nav.safety':'Keamanan','nav.glossary':'Glosarium','nav.sources':'Perpustakaan Sumber','nav.updates':'Riwayat Update','progress.done':'selesai','btn.prev':'Pelajaran sebelumnya','btn.next':'Pelajaran berikutnya','btn.mark':'Tandai selesai','btn.completed':'Selesai','visual.title':'Penjelasan visual','callout.quick':'Inti singkat','check.title':'Checkpoint','mistakes.title':'Kesalahan umum','quiz.title':'Kuis singkat','quiz.reveal':'Lihat jawaban','sources.title':'Sumber terkait','complete.note':'Progress disimpan di browser ini.','home.title':'Belajar crypto langkah demi langkah','home.desc':'Mulai dari pelajaran dasar, kebiasaan aman, glosarium, dan checklist praktis.','sources.pageTitle':'Perpustakaan Sumber','sources.pageDesc':'Artikel nyata, referensi resmi, ringkasan cepat, dan tautan belajar lanjut.'
  },{label:'Panduan visual',open:'Buka',flowTitle:'Mulai dari mana?',flowDesc:'Jalur sederhana dari pelajaran pertama ke kebiasaan aman.',flow:['Mulai Pelajaran 1','Pahami wallet','Latih transfer aman','Cek scam dan keamanan'],checklistTitle:'Cek 30 detik sebelum kirim',checklistDesc:'Kartu ringkas sebelum transfer sungguhan.',checks:['Alamat benar?','Jaringan benar?','Tujuan resmi?','Sudah tes kecil?'],warningTitle:'Kesalahan umum pemula',warningDesc:'Kartu peringatan cepat menuju pelajaran keamanan.',warnings:[['Jaringan salah','Cek kedua sisi sebelum kirim.'],['Situs palsu','Bandingkan domain sebelum login.'],['Seed phrase bocor','Jangan ketik kata pemulihan di situs.']],overviewTitle:'Yang dipelajari di sini',overview:['Dasar blockchain','Wallet','Transfer aman','Cegah scam','Praktik crypto'],roadTitle:'Jalur belajar yang disarankan',road:['Pemula','Keamanan','Beli pertama','Praktik','Menengah']},{
    sidebar:'Track Praktik Menengah',trackTitle:'Track Praktik Menengah',trackDesc:'Pelajaran praktis tentang custody, jaringan, DeFi, proyek, bridge, dan verifikasi.',badge:'Praktik',sourceLabel:'Praktik menengah',headings:['Inti singkat','Penjelasan mudah','Situasi nyata','Di mana orang salah','Yang perlu dicek sekarang'],titles:['Cara memakai exchange dan wallet bersama','Cara membandingkan jaringan dan biaya','Perbedaan stablecoin dan hal yang perlu diwaspadai','Yang perlu dipahami saat masuk DeFi','Yang benar-benar penting saat menilai NFT dan token project','Mengapa bridge dan multichain penting dan membingungkan','Cara memverifikasi informasi sebelum percaya'],subs:['Seimbangkan kenyamanan dan kontrol','Bandingkan biaya, kecepatan, dan risiko salah','Lihat lebih dari harga satu dolar','Pahami connect, approve, sign, swap','Lihat bukti, bukan hanya hype','Pindah chain mengubah risiko','Bangun rutinitas verifikasi'],visual:[['Exchange untuk beli','Wallet untuk kontrol','Rencana pemulihan','Tes kecil dulu'],['Cocokkan jaringan','Biaya dan waktu','Dukungan tujuan','Tes kecil'],['Penerbit','Model cadangan','Likuiditas','Risiko depeg'],['Connect','Approve','Sign','Swap'],['Aktivitas','Likuiditas','Utilitas','Link resmi'],['Chain asal','Rute bridge','Chain tujuan','Versi aset'],['Sumber resmi','Domain','Kontrak','Cek silang']]
  },{label:'Kartu keputusan custody',splitTitle:'Cara membagi exchange dan wallet',exchangeLabel:'Setup exchange',walletLabel:'Setup wallet',convenience:'Kenyamanan',control:'Kontrol',recovery:'Tanggung jawab pemulihan',longTerm:'Cocok jangka panjang',decisionTitle:'Aset ini sebaiknya di mana?',compare:'Bandingkan',checklistTitle:'Cek sebelum memindahkan aset'});

  makePack('pt',['Português','PT','🇵🇹'],{
    'brand.sub':'Lições claras de cripto para iniciantes','sidebar.lessons':'Lições','nav.home':'Início','nav.start':'Comece Aqui','nav.faqPage':'FAQ','nav.safety':'Segurança','nav.glossary':'Glossário','nav.sources':'Biblioteca de Fontes','nav.updates':'Histórico','progress.done':'concluído','btn.prev':'Lição anterior','btn.next':'Próxima lição','btn.mark':'Marcar como concluída','btn.completed':'Concluída','visual.title':'Explicação visual','callout.quick':'Ideia-chave','check.title':'Pontos de verificação','mistakes.title':'Erros comuns','quiz.title':'Mini quiz','quiz.reveal':'Ver resposta','sources.title':'Fontes relacionadas','complete.note':'O progresso fica salvo neste navegador.','home.title':'Aprenda cripto passo a passo','home.desc':'Comece por lições básicas, hábitos de segurança, glossário e checklists práticos.','sources.pageTitle':'Biblioteca de Fontes','sources.pageDesc':'Artigos reais, referências oficiais, revisões rápidas e links para aprofundar.'
  },{label:'Guia visual',open:'Abrir',flowTitle:'Por onde começar?',flow:['Comece pela Lição 1','Entenda carteiras','Pratique envio seguro','Revise golpes e segurança'],checklistTitle:'Cheque 30 segundos antes de enviar',checks:['O endereço está correto?','A rede está correta?','O destino é oficial?','Testou com pouco valor?'],warningTitle:'Erros comuns de iniciantes',warnings:[['Rede errada','Confira os dois lados antes de enviar.'],['Site falso','Compare o domínio antes do login.'],['Seed phrase exposta','Nunca digite palavras de recuperação em sites.']],overviewTitle:'O que você aprende aqui',overview:['Blockchain básico','Carteiras','Envios seguros','Prevenção de golpes','Prática cripto'],roadTitle:'Caminho recomendado',road:['Iniciante','Segurança','Primeira compra','Prática','Intermediário']},{
    sidebar:'Roteiro Intermediário',trackTitle:'Roteiro Intermediário',trackDesc:'Lições práticas sobre custódia, redes, DeFi, projetos, bridges e verificação.',badge:'Roteiro',sourceLabel:'Roteiro intermediário',headings:['Ideia-chave','Explicação simples','Situação real','Onde as pessoas erram','O que verificar agora'],titles:['Como usar exchanges e carteiras em conjunto','Como comparar redes e taxas na prática','Como stablecoins diferem e o que observar','O que entender primeiro ao entrar em DeFi','O que realmente importa ao avaliar NFT e projetos de token','Por que bridges e multichain importam e confundem','Como verificar informações antes de confiar'],subs:['Equilibre conveniência e controle','Compare taxa, velocidade e risco de erro','Olhe além do preço de um dólar','Entenda connect, approve, sign e swap','Veja evidência, não só hype','Mudar de chain muda o risco','Crie uma rotina de verificação'],visual:[['Exchange para comprar','Carteira para controle','Plano de recuperação','Teste pequeno'],['Rede correta','Taxa e tempo','Suporte do destino','Teste pequeno'],['Emissor','Modelo de reserva','Liquidez','Risco de depeg'],['Conectar','Aprovar','Assinar','Swap'],['Atividade','Liquidez','Utilidade','Links oficiais'],['Chain de origem','Rota da bridge','Chain de destino','Versão do ativo'],['Fonte oficial','Domínio','Contrato','Checagem cruzada']]
  },{label:'Cartão de decisão de custódia',splitTitle:'Como dividir exchange e carteira',exchangeLabel:'Modelo exchange',walletLabel:'Modelo carteira',convenience:'Conveniência',control:'Controle',recovery:'Responsabilidade de recuperação',longTerm:'Longo prazo',decisionTitle:'Onde este ativo deve ficar?',compare:'Comparar',checklistTitle:'Confira antes de mover ativos'});

  DATA.br = clone(DATA.pt);
  DATA.br.menu = ['Português (Brasil)','BR','🇧🇷'];
  DATA.br.htmlLang = 'pt-BR';
  DATA.br.ui['brand.sub'] = 'Lições claras de cripto para iniciantes';

  makePack('tr',['Türkçe','TR','🇹🇷'],{
    'brand.sub':'Yeni başlayanlar için net kripto dersleri','sidebar.lessons':'Dersler','nav.home':'Ana sayfa','nav.start':'Buradan Başla','nav.faqPage':'SSS','nav.safety':'Güvenlik','nav.glossary':'Sözlük','nav.sources':'Kaynak Kütüphanesi','nav.updates':'Güncelleme Geçmişi','progress.done':'tamamlandı','btn.prev':'Önceki ders','btn.next':'Sonraki ders','btn.mark':'Tamamlandı olarak işaretle','btn.completed':'Tamamlandı','visual.title':'Görsel açıklama','callout.quick':'Kilit fikir','check.title':'Kontrol noktaları','mistakes.title':'Yaygın hatalar','quiz.title':'Kısa quiz','quiz.reveal':'Cevabı göster','sources.title':'İlgili kaynaklar','complete.note':'İlerlemeniz bu tarayıcıda saklanır.','home.title':'Kriptoyu adım adım öğren','home.desc':'Temel dersler, güvenlik alışkanlıkları, sözlük ve pratik checklistlerle başlayın.','sources.pageTitle':'Kaynak Kütüphanesi','sources.pageDesc':'Gerçek makaleler, resmi referanslar, hızlı tekrarlar ve derinleşme linkleri.'
  },{label:'Görsel rehber',open:'Aç',flowTitle:'Nereden başlamalı?',flow:['1. dersten başla','Cüzdanları öğren','Güvenli transfer dene','Scam ve güvenliği kontrol et'],checklistTitle:'Göndermeden önce 30 saniye kontrol',checks:['Adres doğru mu?','Ağ doğru mu?','Hedef resmi mi?','Küçük miktarla test ettin mi?'],warningTitle:'Yeni başlayanların yaygın hataları',warnings:[['Yanlış ağ','Göndermeden önce iki tarafı kontrol et.'],['Sahte site','Girişten önce domaini karşılaştır.'],['Seed phrase paylaşımı','Kurtarma kelimelerini siteye yazma.']],overviewTitle:'Burada ne öğrenirsiniz',overview:['Blockchain temeli','Cüzdanlar','Güvenli transfer','Scam önleme','Pratik kripto'],roadTitle:'Önerilen öğrenme yolu',road:['Başlangıç','Güvenlik','İlk alım','Pratik','Orta seviye']},{
    sidebar:'Orta Seviye Yol Haritası',trackTitle:'Orta Seviye Yol Haritası',trackDesc:'Custody, ağlar, DeFi, projeler, bridge ve doğrulama için pratik dersler.',badge:'Yol haritası',sourceLabel:'Orta seviye yol haritası',headings:['Kilit fikir','Kolay açıklama','Gerçek durum','İnsanlar nerede hata yapar','Şimdi neyi kontrol etmeli'],titles:['Exchange ve cüzdan birlikte nasıl kullanılır','Ağlar ve ücretler pratikte nasıl karşılaştırılır','Stablecoinler nasıl farklıdır ve nelere dikkat edilir','DeFi’ye girerken önce ne anlaşılmalı','NFT ve token projelerini değerlendirirken gerçekten ne önemli','Bridge ve multichain neden önemlidir ve neden karıştırılır','Bilgiye güvenmeden önce nasıl doğrulanır'],subs:['Kolaylık ve kontrol dengesi','Ücret, hız ve hata riskini karşılaştır','Bir dolar görünümünün ötesine bak','Connect, approve, sign, swap ayır','Hype değil kanıtı kontrol et','Zincir değişince risk değişir','Tekrarlanabilir doğrulama rutini kur'],visual:[['Exchange alım için','Cüzdan kontrol için','Kurtarma planı','Önce küçük test'],['Ağ eşleşmesi','Ücret ve süre','Hedef desteği','Küçük test'],['İhraç eden','Rezerv modeli','Likidite','Depeg riski'],['Connect','Approve','Sign','Swap'],['Aktivite','Likidite','Fayda','Resmi linkler'],['Kaynak zincir','Bridge rotası','Hedef zincir','Varlık sürümü'],['Resmi kaynak','Domain','Kontrat','Çapraz kontrol']]
  },{label:'Custody karar kartı',splitTitle:'Exchange ve cüzdan kullanımı nasıl bölünür',exchangeLabel:'Exchange düzeni',walletLabel:'Cüzdan düzeni',convenience:'Kolaylık',control:'Kontrol',recovery:'Kurtarma sorumluluğu',longTerm:'Uzun vade',decisionTitle:'Bu varlık nerede durmalı?',compare:'Karşılaştır',checklistTitle:'Varlıkları taşımadan önce kontrol et'});

  makePack('es',['Español','ES','🇪🇸'],{
    'brand.sub':'Lecciones claras de cripto para principiantes','sidebar.lessons':'Lecciones','nav.home':'Inicio','nav.start':'Empieza aquí','nav.faqPage':'FAQ','nav.safety':'Seguridad','nav.glossary':'Glosario','nav.sources':'Biblioteca de Fuentes','nav.updates':'Historial','progress.done':'completado','btn.prev':'Lección anterior','btn.next':'Siguiente lección','btn.mark':'Marcar como completada','btn.completed':'Completada','visual.title':'Explicación visual','callout.quick':'Idea clave','check.title':'Puntos de control','mistakes.title':'Errores comunes','quiz.title':'Mini quiz','quiz.reveal':'Ver respuesta','sources.title':'Fuentes relacionadas','complete.note':'Tu progreso se guarda en este navegador.','home.title':'Aprende cripto paso a paso','home.desc':'Empieza con lecciones básicas, hábitos de seguridad, glosario y checklists prácticos.','sources.pageTitle':'Biblioteca de Fuentes','sources.pageDesc':'Artículos reales, referencias oficiales, revisiones rápidas y enlaces para profundizar.'
  },{label:'Guía visual',open:'Abrir',flowTitle:'¿Dónde empiezo?',flow:['Empieza con la Lección 1','Aprende wallets','Practica envío seguro','Revisa estafas y seguridad'],checklistTitle:'Chequeo de 30 segundos antes de enviar',checks:['¿La dirección es correcta?','¿La red es correcta?','¿El destino es oficial?','¿Probaste con poco monto?'],warningTitle:'Errores comunes de principiantes',warnings:[['Red incorrecta','Revisa ambos lados antes de enviar.'],['Sitio falso','Compara el dominio antes de iniciar sesión.'],['Seed phrase expuesta','Nunca escribas palabras de recuperación en un sitio.']],overviewTitle:'Qué aprendes aquí',overview:['Blockchain básico','Wallets','Transferencias seguras','Prevención de estafas','Práctica cripto'],roadTitle:'Ruta recomendada',road:['Principiante','Seguridad','Primera compra','Práctica','Intermedio']},{
    sidebar:'Track Intermedio Práctico',trackTitle:'Track Intermedio Práctico',trackDesc:'Lecciones prácticas sobre custodia, redes, DeFi, proyectos, bridges y verificación.',badge:'Práctico',sourceLabel:'Práctica intermedia',headings:['Idea clave','Explicación simple','Situación real','Dónde se equivoca la gente','Qué revisar ahora'],titles:['Cómo usar exchanges y wallets juntos','Cómo comparar redes y comisiones en la práctica','Cómo difieren las stablecoins y qué vigilar','Qué entender primero al entrar en DeFi','Qué importa realmente al evaluar NFT y proyectos de token','Por qué bridges y multichain importan y confunden','Cómo verificar información antes de confiar'],subs:['Equilibra comodidad y control','Compara comisión, velocidad y riesgo de error','Mira más allá del precio de un dólar','Distingue connect, approve, sign y swap','Busca evidencia, no solo hype','Cambiar de chain cambia el riesgo','Crea una rutina de verificación'],visual:[['Exchange para comprar','Wallet para control','Plan de recuperación','Prueba pequeña'],['Red correcta','Comisión y tiempo','Soporte del destino','Prueba pequeña'],['Emisor','Modelo de reserva','Liquidez','Riesgo de depeg'],['Conectar','Aprobar','Firmar','Swap'],['Actividad','Liquidez','Utilidad','Links oficiales'],['Chain origen','Ruta bridge','Chain destino','Versión del activo'],['Fuente oficial','Dominio','Contrato','Verificación cruzada']]
  },{label:'Tarjeta de decisión de custodia',splitTitle:'Cómo dividir exchange y wallet',exchangeLabel:'Modelo exchange',walletLabel:'Modelo wallet',convenience:'Comodidad',control:'Control',recovery:'Responsabilidad de recuperación',longTerm:'Largo plazo',decisionTitle:'¿Dónde debe quedar este activo?',compare:'Comparar',checklistTitle:'Revisa antes de mover activos'});

  makePack('ar',['العربية','AR','🇸🇦'],{
    'brand.sub':'دروس كريبتو واضحة للمبتدئين','sidebar.lessons':'الدروس','nav.home':'الرئيسية','nav.start':'ابدأ هنا','nav.faqPage':'الأسئلة','nav.safety':'السلامة','nav.glossary':'المصطلحات','nav.sources':'مكتبة المصادر','nav.updates':'سجل التحديثات','progress.done':'مكتمل','btn.prev':'الدرس السابق','btn.next':'الدرس التالي','btn.mark':'وضع علامة مكتمل','btn.completed':'مكتمل','visual.title':'شرح بصري','callout.quick':'الفكرة الأساسية','check.title':'نقاط التحقق','mistakes.title':'أخطاء شائعة','quiz.title':'اختبار قصير','quiz.reveal':'عرض الإجابة','sources.title':'مصادر ذات صلة','complete.note':'يتم حفظ تقدمك في هذا المتصفح.','home.title':'تعلم الكريبتو خطوة بخطوة','home.desc':'ابدأ بالدروس الأساسية، عادات الأمان، المصطلحات، وقوائم التحقق العملية.','sources.pageTitle':'مكتبة المصادر','sources.pageDesc':'مقالات حقيقية ومراجع رسمية ومراجعات سريعة وروابط للتعمق.'
  },{label:'دليل بصري',open:'فتح',flowTitle:'من أين أبدأ؟',flow:['ابدأ بالدرس 1','افهم المحافظ','تدرّب على إرسال آمن','راجع الاحتيال والأمان'],checklistTitle:'فحص 30 ثانية قبل الإرسال',checks:['هل العنوان صحيح؟','هل الشبكة صحيحة؟','هل الوجهة رسمية؟','هل اختبرت بمبلغ صغير؟'],warningTitle:'أخطاء شائعة للمبتدئين',warnings:[['شبكة خاطئة','تحقق من الجانبين قبل الإرسال.'],['موقع مزيف','قارن النطاق قبل تسجيل الدخول.'],['كشف عبارة الاسترداد','لا تكتب كلمات الاسترداد في أي موقع.']],overviewTitle:'ماذا تتعلم هنا',overview:['أساسيات البلوكشين','المحافظ','إرسال آمن','منع الاحتيال','تطبيق عملي'],roadTitle:'مسار التعلم المقترح',road:['مبتدئ','الأمان','أول شراء','تطبيق عملي','متوسط']},{
    sidebar:'خارطة طريق متوسطة',trackTitle:'خارطة طريق متوسطة',trackDesc:'دروس عملية حول الحفظ، الشبكات، DeFi، المشاريع، الجسور، والتحقق.',badge:'خارطة طريق',sourceLabel:'خارطة طريق متوسطة',headings:['الفكرة الأساسية','شرح سهل','موقف واقعي','أين تحدث الأخطاء','ما الذي يجب فحصه الآن'],titles:['كيف تستخدم المنصات والمحافظ معاً','كيف تقارن الشبكات والرسوم عملياً','كيف تختلف العملات المستقرة وما الذي تنتبه له','ما الذي تفهمه أولاً عند دخول DeFi','ما المهم فعلاً عند تقييم NFT ومشاريع التوكن','لماذا الجسور وتعدد الشبكات مهم ومربك','كيف تتحقق من المعلومات قبل الثقة بها'],subs:['وازن بين السهولة والتحكم','قارن الرسوم والسرعة وخطر الخطأ','انظر لما وراء سعر الدولار','افصل بين connect و approve و sign و swap','ابحث عن الدليل لا الضجة','تغيير الشبكة يغير الخطر','ابنِ روتين تحقق متكرر'],visual:[['المنصة للشراء','المحفظة للتحكم','خطة الاسترداد','اختبار صغير'],['مطابقة الشبكة','الرسوم والوقت','دعم الوجهة','اختبار صغير'],['الجهة المصدرة','نموذج الاحتياطي','السيولة','خطر depeg'],['اتصال','موافقة','توقيع','تبديل'],['النشاط','السيولة','الفائدة','روابط رسمية'],['الشبكة المصدر','مسار الجسر','الشبكة الهدف','نسخة الأصل'],['مصدر رسمي','النطاق','العقد','تحقق متقاطع']]
  },{label:'بطاقة قرار الحفظ',splitTitle:'كيف تقسم استخدام المنصة والمحفظة',exchangeLabel:'نمط منصة',walletLabel:'نمط محفظة',convenience:'سهولة',control:'تحكم',recovery:'مسؤولية الاسترداد',longTerm:'مناسب طويل الأجل',decisionTitle:'أين يجب أن يبقى هذا الأصل؟',compare:'مقارنة',checklistTitle:'تحقق قبل نقل الأصول'});

  makePack('vi',['Tiếng Việt','VI','🇻🇳'],{
    'brand.sub':'Bài học crypto rõ ràng cho người mới','sidebar.lessons':'Bài học','nav.home':'Trang chủ','nav.start':'Bắt đầu','nav.faqPage':'FAQ','nav.safety':'An toàn','nav.glossary':'Thuật ngữ','nav.sources':'Thư viện nguồn','nav.updates':'Lịch sử cập nhật','progress.done':'hoàn thành','btn.prev':'Bài trước','btn.next':'Bài tiếp theo','btn.mark':'Đánh dấu hoàn thành','btn.completed':'Đã hoàn thành','visual.title':'Giải thích trực quan','callout.quick':'Ý chính','check.title':'Điểm kiểm tra','mistakes.title':'Lỗi thường gặp','quiz.title':'Câu hỏi ngắn','quiz.reveal':'Xem đáp án','sources.title':'Nguồn liên quan','complete.note':'Tiến độ được lưu trong trình duyệt này.','home.title':'Học crypto từng bước','home.desc':'Bắt đầu với bài cơ bản, thói quen an toàn, thuật ngữ và checklist thực tế.','sources.pageTitle':'Thư viện nguồn','sources.pageDesc':'Bài viết thực tế, nguồn chính thức, ôn nhanh và liên kết học sâu.'
  },{label:'Hướng dẫn trực quan',open:'Mở',flowTitle:'Bắt đầu ở đâu?',flow:['Bắt đầu Bài 1','Hiểu ví','Luyện gửi an toàn','Kiểm tra lừa đảo và an toàn'],checklistTitle:'Kiểm tra 30 giây trước khi gửi',checks:['Địa chỉ đúng chưa?','Mạng đúng chưa?','Đích có chính thức không?','Đã thử số tiền nhỏ chưa?'],warningTitle:'Lỗi người mới hay gặp',warnings:[['Sai mạng','Kiểm tra hai phía trước khi gửi.'],['Trang giả','So sánh tên miền trước khi đăng nhập.'],['Lộ seed phrase','Không nhập từ khôi phục vào website.']],overviewTitle:'Bạn học gì ở đây',overview:['Cơ bản blockchain','Ví','Gửi an toàn','Tránh lừa đảo','Thực hành crypto'],roadTitle:'Lộ trình gợi ý',road:['Người mới','An toàn','Mua lần đầu','Thực hành','Trung cấp']},{
    sidebar:'Lộ trình trung cấp',trackTitle:'Lộ trình trung cấp',trackDesc:'Bài thực tế về lưu giữ, mạng, DeFi, dự án, bridge và xác minh.',badge:'Lộ trình',sourceLabel:'Lộ trình trung cấp',headings:['Ý chính','Giải thích dễ hiểu','Tình huống thật','Nơi mọi người hay sai','Cần kiểm tra ngay'],titles:['Cách dùng sàn và ví cùng nhau','Cách so sánh mạng và phí trong thực tế','Stablecoin khác nhau thế nào và cần chú ý gì','Cần hiểu gì trước khi vào DeFi','Điều thật sự quan trọng khi đánh giá NFT và dự án token','Vì sao bridge và multichain quan trọng nhưng dễ gây nhầm','Cách xác minh thông tin trước khi tin'],subs:['Cân bằng tiện lợi và kiểm soát','So sánh phí, tốc độ và rủi ro sai','Nhìn xa hơn giá một đô la','Phân biệt connect approve sign swap','Xem bằng chứng, không chỉ hype','Đổi chain làm rủi ro đổi theo','Tạo quy trình xác minh lặp lại'],visual:[['Sàn để mua','Ví để kiểm soát','Kế hoạch khôi phục','Thử nhỏ trước'],['Khớp mạng','Phí và thời gian','Hỗ trợ đích','Thử nhỏ'],['Đơn vị phát hành','Mô hình dự trữ','Thanh khoản','Rủi ro depeg'],['Kết nối','Phê duyệt','Ký','Swap'],['Hoạt động','Thanh khoản','Tiện ích','Link chính thức'],['Chain nguồn','Đường bridge','Chain đích','Phiên bản tài sản'],['Nguồn chính thức','Tên miền','Hợp đồng','Kiểm tra chéo']]
  },{label:'Thẻ quyết định lưu giữ',splitTitle:'Chia cách dùng sàn và ví',exchangeLabel:'Kiểu sàn',walletLabel:'Kiểu ví',convenience:'Tiện lợi',control:'Kiểm soát',recovery:'Trách nhiệm khôi phục',longTerm:'Dài hạn',decisionTitle:'Tài sản này nên ở đâu?',compare:'So sánh',checklistTitle:'Kiểm tra trước khi chuyển tài sản'});

  makePack('ha',['Hausa','HA','🇳🇬'],{
    'brand.sub':'Darussan crypto masu sauki ga masu farawa','sidebar.lessons':'Darussa','nav.home':'Gida','nav.start':'Fara Nan','nav.faqPage':'Tambayoyi','nav.safety':'Tsaro','nav.glossary':'Kamus','nav.sources':'Laburaren Madogara','nav.updates':'Tarihin Sabuntawa','progress.done':'an kammala','btn.prev':'Darasin baya','btn.next':'Darasi na gaba','btn.mark':'Alama an kammala','btn.completed':'An kammala','visual.title':'Bayani na gani','callout.quick':'Muhimmin tunani','check.title':'Abubuwan dubawa','mistakes.title':'Kurakurai na yau da kullum','quiz.title':'Karamin gwaji','quiz.reveal':'Nuna amsa','sources.title':'Madogara masu alaka','complete.note':'Ana ajiye ci gaban ka a wannan browser.','home.title':'Koyi crypto mataki-mataki','home.desc':'Fara da darussa na asali, halayen tsaro, kamus, da checklist na aiki.','sources.pageTitle':'Laburaren Madogara','sources.pageDesc':'Makaloli na gaske, nassoshi na hukuma, bita mai sauri, da hanyoyin kara zurfi.'
  },{label:'Jagorar hoto',open:'Bude',flowTitle:'A ina zan fara?',flow:['Fara da Darasi 1','Fahimci wallet','Gwada aika lafiya','Duba damfara da tsaro'],checklistTitle:'Duba dakika 30 kafin aika',checks:['Address daidai ne?','Network daidai ne?','Wurin karba na hukuma ne?','Ka gwada da kadan?'],warningTitle:'Kurakuran masu farawa',warnings:[['Network ba daidai ba','Duba bangarori biyu kafin aika.'],['Shafin karya','Kwatanta domain kafin shiga.'],['Seed phrase ya bayyana','Kada ka rubuta kalmomin dawo da wallet a shafi.']],overviewTitle:'Abin da za ka koya',overview:['Tushen blockchain','Wallets','Aika lafiya','Kariya daga damfara','Aikin crypto'],roadTitle:'Hanyar koyo da aka ba da shawara',road:['Mai farawa','Tsaro','Sayen farko','Aiki','Matsakaici']},{
    sidebar:'Matakin Aiki na Matsakaici',trackTitle:'Matakin Aiki na Matsakaici',trackDesc:'Darussa na aiki kan ajiya, networks, DeFi, projects, bridges, da tabbatarwa.',badge:'Aiki',sourceLabel:'Aikin matsakaici',headings:['Muhimmin tunani','Bayani mai sauki','Yanayi na gaske','Inda mutane ke kuskure','Abin dubawa yanzu'],titles:['Yadda ake amfani da exchange da wallet tare','Yadda ake kwatanta networks da fees a aikace','Yadda stablecoins suke bambanta da abin lura','Abin fahimta da farko idan za ka shiga DeFi','Abin da ya fi muhimmanci wajen tantance NFT da token project','Me ya sa bridges da multichain suke da muhimmanci kuma suke rikitarwa','Yadda ake tabbatar da bayani kafin yarda da shi'],subs:['Daidaita sauki da iko','Kwatanta fee, sauri, da hadarin kuskure','Duba bayan farashin dala daya','Raba connect approve sign swap','Duba hujja ba hayaniya kawai ba','Canza chain yana canza hadari','Gina tsarin tabbatarwa'],visual:[['Exchange don saye','Wallet don iko','Tsarin dawo da wallet','Gwaji da kadan'],['Daidaita network','Fee da lokaci','Tallafin wurin karba','Gwaji da kadan'],['Mai fitarwa','Tsarin reserve','Liquidity','Hadarin depeg'],['Connect','Approve','Sign','Swap'],['Aiki','Liquidity','Amfani','Hanyoyin hukuma'],['Chain na farawa','Hanyar bridge','Chain na karshe','Sigar asset'],['Tushe na hukuma','Domain','Contract','Duba ta hanyoyi da dama']]
  },{label:'Katin shawarar custody',splitTitle:'Yadda za a raba amfani da exchange da wallet',exchangeLabel:'Tsarin exchange',walletLabel:'Tsarin wallet',convenience:'Sauki',control:'Iko',recovery:'Nauyin dawo da wallet',longTerm:'Dogon lokaci',decisionTitle:'Ina wannan asset ya fi dacewa?',compare:'Kwatanta',checklistTitle:'Duba kafin motsa assets'});

  var LESSON8_HTML_LOCALE = {
    th:{label:'การ์ดตัดสินใจการเก็บรักษา',splitTitle:'แบ่งการใช้แพลตฟอร์มซื้อขายกับวอลเล็ตอย่างไร',splitDesc:'ใช้แพลตฟอร์มซื้อขายเมื่อต้องการซื้อขายเร็ว ใช้วอลเล็ตเมื่อต้องการควบคุมและวางแผนกู้คืนมากขึ้น',exchangeLabel:'รูปแบบแพลตฟอร์มซื้อขาย',exchangeTitle:'เก็บบนแพลตฟอร์มซื้อขาย',exchangeNote:'ซื้อขาย / แปลง / ถอน ได้เร็ว',walletLabel:'รูปแบบวอลเล็ต',walletTitle:'เก็บในวอลเล็ต',walletNote:'ควบคุม / รับผิดชอบการกู้คืน / ถือระยะยาว',convenience:'ความสะดวก',control:'การควบคุม',recovery:'หน้าที่กู้คืน',longTerm:'เหมาะกับระยะยาว',decisionTitle:'สินทรัพย์นี้ควรอยู่ที่ไหน?',decisionDesc:'เริ่มจากจุดประสงค์ของสินทรัพย์และความพร้อมในการกู้คืน',q:['จะขายหรือสวอปเร็ว ๆ นี้ไหม?','เป็นการถือระยะยาวไหม?','จัดการการกู้คืนได้ปลอดภัยไหม?'],a:['เก็บเฉพาะยอดใช้งานเล็กน้อย','พิจารณาเก็บในวอลเล็ต','เตรียมการกู้คืนก่อน'],scenarioTitle:'ตัวอย่างสถานะการเก็บจริง',compare:'เปรียบเทียบ',exchangeMock:'สถานะถือบนแพลตฟอร์ม',walletMock:'สถานะเก็บในวอลเล็ต',sell:'ขายหรือแปลงได้เร็ว',address:'ที่อยู่วอลเล็ต',limited:'การควบคุมโดยตรงมีจำกัด',direct:'ควบคุมโดยตรงมากขึ้น',checklistTitle:'เช็กก่อนย้ายสินทรัพย์',checklistDesc:'ย้ายอย่างระวัง เริ่มจากจำนวนที่คุณจัดการและกู้คืนได้',checks:['จะใช้สินทรัพย์นี้บ่อยไหม?','เป็นการถือระยะยาวไหม?','ป้องกัน recovery phrase ได้ไหม?','เข้าใจเครือข่ายที่จะโอนไหม?','จำเป็นต้องย้ายทั้งหมดครั้งเดียวไหม?'],note:'ไม่มีคำตอบเดียวที่ถูกเสมอ แบ่งสินทรัพย์ตามจุดประสงค์ จำนวน และความพร้อมในการกู้คืน'},
    id:{label:'Kartu keputusan kustodi',splitTitle:'Cara membagi penggunaan bursa dan dompet',splitDesc:'Gunakan bursa untuk jual beli aktif. Gunakan dompet saat kontrol dan rencana pemulihan lebih penting.',exchangeLabel:'Model bursa',exchangeTitle:'Simpan di bursa',exchangeNote:'Trading cepat / konversi / penarikan',walletLabel:'Model dompet',walletTitle:'Simpan di dompet',walletNote:'Kontrol / pemulihan / simpan jangka panjang',convenience:'Kemudahan',control:'Kontrol',recovery:'Tanggung jawab pemulihan',longTerm:'Cocok jangka panjang',decisionTitle:'Aset ini sebaiknya disimpan di mana?',decisionDesc:'Mulai dari tujuan aset dan kesiapan pemulihan.',q:['Akan dijual atau ditukar segera?','Untuk simpan jangka panjang?','Siap mengelola pemulihan dengan aman?'],a:['Simpan jumlah aktif kecil saja','Pertimbangkan dompet pribadi','Siapkan pemulihan dulu'],scenarioTitle:'Contoh status kustodi nyata',compare:'Bandingkan',exchangeMock:'Status simpan di bursa',walletMock:'Status simpan di dompet',sell:'Jual / konversi cepat',address:'Alamat dompet',limited:'Kontrol langsung terbatas',direct:'Kontrol langsung lebih kuat',checklistTitle:'Cek sebelum memindahkan aset',checklistDesc:'Pindahkan hati-hati. Mulai dari jumlah yang bisa Anda kelola.',checks:['Apakah aset ini sering dipakai?','Apakah untuk jangka panjang?','Bisakah recovery phrase dijaga?','Apakah jaringan transfer dipahami?','Perlukah memindahkan semuanya sekaligus?'],note:'Tidak ada satu jawaban yang selalu benar. Bagi aset menurut tujuan, jumlah, dan kesiapan pemulihan.'},
    pt:{label:'Cartão de decisão de custódia',splitTitle:'Como dividir o uso entre corretora e carteira',splitDesc:'Use a corretora para compra e venda ativa. Use a carteira quando controle e recuperação forem mais importantes.',exchangeLabel:'Modelo corretora',exchangeTitle:'Custódia na corretora',exchangeNote:'Trade rápido / conversão / saque',walletLabel:'Modelo carteira',walletTitle:'Custódia na carteira',walletNote:'Controle / recuperação / longo prazo',convenience:'Conveniência',control:'Controle',recovery:'Responsabilidade de recuperação',longTerm:'Melhor para longo prazo',decisionTitle:'Onde este ativo deve ficar?',decisionDesc:'Comece pelo objetivo do ativo e sua prontidão de recuperação.',q:['Vai vender ou trocar em breve?','É para manter por longo prazo?','Consegue gerenciar a recuperação com segurança?'],a:['Mantenha só um valor ativo pequeno','Considere custódia em carteira','Prepare a recuperação primeiro'],scenarioTitle:'Exemplo de estado de custódia',compare:'Comparar',exchangeMock:'Estado na corretora',walletMock:'Estado na carteira',sell:'Venda / conversão rápida',address:'Endereço da carteira',limited:'Controle direto é limitado',direct:'Controle direto é maior',checklistTitle:'Confira antes de mover ativos',checklistDesc:'Mova com cuidado. Comece por um valor que você consegue gerenciar.',checks:['Você usará este ativo com frequência?','É para longo prazo?','Consegue proteger a frase de recuperação?','Entende a rede de transferência?','Precisa mover tudo de uma vez?'],note:'Não existe uma resposta única. Divida por objetivo, valor e prontidão de recuperação.'},
    br:{label:'Cartão de decisão de custódia',splitTitle:'Como dividir o uso entre corretora e carteira',splitDesc:'Use a corretora para compra e venda ativa. Use a carteira quando controle e recuperação forem mais importantes.',exchangeLabel:'Modelo corretora',exchangeTitle:'Custódia na corretora',exchangeNote:'Trade rápido / conversão / saque',walletLabel:'Modelo carteira',walletTitle:'Custódia na carteira',walletNote:'Controle / recuperação / longo prazo',convenience:'Conveniência',control:'Controle',recovery:'Responsabilidade de recuperação',longTerm:'Melhor para longo prazo',decisionTitle:'Onde este ativo deve ficar?',decisionDesc:'Comece pelo objetivo do ativo e sua prontidão de recuperação.',q:['Vai vender ou trocar em breve?','É para manter por longo prazo?','Consegue gerenciar a recuperação com segurança?'],a:['Mantenha só um valor ativo pequeno','Considere custódia em carteira','Prepare a recuperação primeiro'],scenarioTitle:'Exemplo de estado de custódia',compare:'Comparar',exchangeMock:'Estado na corretora',walletMock:'Estado na carteira',sell:'Venda / conversão rápida',address:'Endereço da carteira',limited:'Controle direto é limitado',direct:'Controle direto é maior',checklistTitle:'Confira antes de mover ativos',checklistDesc:'Mova com cuidado. Comece por um valor que você consegue gerenciar.',checks:['Você usará este ativo com frequência?','É para longo prazo?','Consegue proteger a frase de recuperação?','Entende a rede de transferência?','Precisa mover tudo de uma vez?'],note:'Não existe uma resposta única. Divida por objetivo, valor e prontidão de recuperação.'},
    tr:{label:'Saklama karar kartı',splitTitle:'Borsa ve cüzdan kullanımı nasıl ayrılır?',splitDesc:'Aktif alım satım için borsayı kullan. Kontrol ve kurtarma planı daha önemliyse cüzdanı kullan.',exchangeLabel:'Borsa düzeni',exchangeTitle:'Borsada tutma',exchangeNote:'Hızlı işlem / dönüştürme / çekim',walletLabel:'Cüzdan düzeni',walletTitle:'Cüzdanda saklama',walletNote:'Kontrol / kurtarma / uzun vade',convenience:'Kolaylık',control:'Kontrol',recovery:'Kurtarma sorumluluğu',longTerm:'Uzun vadeye uygun',decisionTitle:'Bu varlık nerede durmalı?',decisionDesc:'Varlığın amacı ve kurtarma hazırlığınla başla.',q:['Yakında satacak veya takas edecek misin?','Uzun vadeli tutma mı?','Kurtarmayı güvenle yönetebilir misin?'],a:['Sadece küçük aktif tutar tut','Cüzdan saklamayı düşün','Önce kurtarmayı hazırla'],scenarioTitle:'Gerçek saklama durumu örneği',compare:'Karşılaştır',exchangeMock:'Borsada tutma durumu',walletMock:'Cüzdan saklama durumu',sell:'Hızlı sat / dönüştür',address:'Cüzdan adresi',limited:'Doğrudan kontrol sınırlı',direct:'Doğrudan kontrol daha güçlü',checklistTitle:'Varlık taşımadan önce kontrol et',checklistDesc:'Dikkatli taşı. Yönetebileceğin ve kurtarabileceğin tutarla başla.',checks:['Bu varlığı sık kullanacak mısın?','Uzun vadeli mi?','Kurtarma ifadesini koruyabilir misin?','Transfer ağını anladın mı?','Her şeyi birden taşımak gerekli mi?'],note:'Tek doğru cevap yoktur. Varlıkları amaç, tutar ve kurtarma hazırlığına göre ayır.'},
    es:{label:'Tarjeta de decisión de custodia',splitTitle:'Cómo dividir el uso entre exchange y billetera',splitDesc:'Usa el exchange para comprar o vender de forma activa. Usa la billetera cuando importen más el control y la recuperación.',exchangeLabel:'Modelo exchange',exchangeTitle:'Custodia en exchange',exchangeNote:'Trade rápido / conversión / retiro',walletLabel:'Modelo billetera',walletTitle:'Custodia en billetera',walletNote:'Control / recuperación / largo plazo',convenience:'Comodidad',control:'Control',recovery:'Responsabilidad de recuperación',longTerm:'Adecuado a largo plazo',decisionTitle:'¿Dónde debe quedar este activo?',decisionDesc:'Empieza por el propósito del activo y tu preparación de recuperación.',q:['¿Vas a vender o intercambiar pronto?','¿Es para mantener a largo plazo?','¿Puedes gestionar la recuperación con seguridad?'],a:['Mantén solo una cantidad activa pequeña','Considera custodia en billetera','Prepara primero la recuperación'],scenarioTitle:'Ejemplo de estado de custodia',compare:'Comparar',exchangeMock:'Estado en exchange',walletMock:'Estado en billetera',sell:'Venta / conversión rápida',address:'Dirección de billetera',limited:'El control directo es limitado',direct:'El control directo es mayor',checklistTitle:'Revisa antes de mover activos',checklistDesc:'Mueve con cuidado. Empieza con una cantidad que puedas gestionar.',checks:['¿Usarás este activo con frecuencia?','¿Es para largo plazo?','¿Puedes proteger la frase de recuperación?','¿Entiendes la red de transferencia?','¿Necesitas mover todo de una vez?'],note:'No hay una única respuesta correcta. Divide por propósito, cantidad y preparación de recuperación.'},
    ar:{label:'بطاقة قرار الحفظ',splitTitle:'كيف تقسم الاستخدام بين المنصة والمحفظة',splitDesc:'استخدم المنصة للشراء أو البيع النشط. استخدم المحفظة عندما يكون التحكم وخطة الاسترداد أهم.',exchangeLabel:'نمط المنصة',exchangeTitle:'حفظ على المنصة',exchangeNote:'تداول سريع / تحويل / سحب',walletLabel:'نمط المحفظة',walletTitle:'حفظ في المحفظة',walletNote:'تحكم / استرداد / حفظ طويل',convenience:'سهولة',control:'تحكم',recovery:'مسؤولية الاسترداد',longTerm:'مناسب للمدى الطويل',decisionTitle:'أين يجب أن يبقى هذا الأصل؟',decisionDesc:'ابدأ بهدف الأصل ومدى جاهزيتك للاسترداد.',q:['هل ستبيع أو تبدل قريباً؟','هل هو للحفظ الطويل؟','هل يمكنك إدارة الاسترداد بأمان؟'],a:['احتفظ بمبلغ نشط صغير فقط','فكر في حفظه في المحفظة','حضّر الاسترداد أولاً'],scenarioTitle:'مثال لحالة الحفظ الفعلية',compare:'مقارنة',exchangeMock:'حالة الحفظ على المنصة',walletMock:'حالة الحفظ في المحفظة',sell:'بيع / تحويل سريع',address:'عنوان المحفظة',limited:'التحكم المباشر محدود',direct:'التحكم المباشر أقوى',checklistTitle:'تحقق قبل نقل الأصول',checklistDesc:'انقل بحذر. ابدأ بمبلغ يمكنك إدارته واسترداده.',checks:['هل ستستخدم هذا الأصل كثيراً؟','هل هو للمدى الطويل؟','هل يمكنك حماية عبارة الاسترداد؟','هل تفهم شبكة التحويل؟','هل تحتاج إلى نقل كل شيء دفعة واحدة؟'],note:'لا توجد إجابة واحدة صحيحة دائماً. قسّم الأصول حسب الهدف والمبلغ وجاهزية الاسترداد.'},
    vi:{label:'Thẻ quyết định lưu ký',splitTitle:'Cách chia việc dùng sàn và ví',splitDesc:'Dùng sàn khi cần mua bán chủ động. Dùng ví khi quyền kiểm soát và kế hoạch khôi phục quan trọng hơn.',exchangeLabel:'Kiểu sàn',exchangeTitle:'Giữ trên sàn',exchangeNote:'Giao dịch nhanh / đổi / rút',walletLabel:'Kiểu ví',walletTitle:'Giữ trong ví',walletNote:'Kiểm soát / khôi phục / dài hạn',convenience:'Tiện lợi',control:'Kiểm soát',recovery:'Trách nhiệm khôi phục',longTerm:'Phù hợp dài hạn',decisionTitle:'Tài sản này nên ở đâu?',decisionDesc:'Bắt đầu từ mục đích tài sản và khả năng khôi phục của bạn.',q:['Sắp bán hoặc hoán đổi không?','Có phải giữ dài hạn không?','Bạn quản lý khôi phục an toàn được không?'],a:['Chỉ giữ một khoản hoạt động nhỏ','Cân nhắc giữ trong ví','Chuẩn bị khôi phục trước'],scenarioTitle:'Ví dụ trạng thái lưu ký thực tế',compare:'So sánh',exchangeMock:'Trạng thái giữ trên sàn',walletMock:'Trạng thái giữ trong ví',sell:'Bán / đổi nhanh',address:'Địa chỉ ví',limited:'Kiểm soát trực tiếp bị giới hạn',direct:'Kiểm soát trực tiếp mạnh hơn',checklistTitle:'Kiểm tra trước khi chuyển tài sản',checklistDesc:'Chuyển cẩn thận. Bắt đầu bằng khoản bạn quản lý được.',checks:['Bạn có dùng tài sản này thường xuyên không?','Có phải giữ dài hạn không?','Bạn bảo vệ recovery phrase được không?','Bạn hiểu mạng chuyển chưa?','Có cần chuyển tất cả cùng lúc không?'],note:'Không có một đáp án đúng duy nhất. Hãy chia theo mục đích, số tiền và khả năng khôi phục.'},
    ha:{label:'Katin shawarar custody',splitTitle:'Yadda za a raba amfani da exchange da wallet',splitDesc:'Yi amfani da exchange don saye ko sayarwa. Yi amfani da wallet idan iko da shirin dawo da wallet sun fi muhimmanci.',exchangeLabel:'Tsarin exchange',exchangeTitle:'Ajiya a exchange',exchangeNote:'Ciniki da sauri / canzawa / cirewa',walletLabel:'Tsarin wallet',walletTitle:'Ajiya a wallet',walletNote:'Iko / dawo da wallet / dogon lokaci',convenience:'Sauki',control:'Iko',recovery:'Nauyin dawo da wallet',longTerm:'Ya dace da dogon lokaci',decisionTitle:'Ina wannan asset ya fi dacewa?',decisionDesc:'Fara da manufar asset da shirinka na dawo da wallet.',q:['Za ka sayar ko musanya nan kusa?','Don ajiya na dogon lokaci ne?','Za ka iya kula da dawo da wallet lafiya?'],a:['Ajiye karamin adadin aiki kawai','Yi laakari da ajiya a wallet','Shirya dawo da wallet da farko'],scenarioTitle:'Misalin yanayin ajiya',compare:'Kwatanta',exchangeMock:'Yanayin ajiya a exchange',walletMock:'Yanayin ajiya a wallet',sell:'Sayar / canza da sauri',address:'Adireshin wallet',limited:'Iko kai tsaye yana da iyaka',direct:'Iko kai tsaye ya fi karfi',checklistTitle:'Duba kafin motsa assets',checklistDesc:'Motsa da hankali. Fara da adadin da za ka iya sarrafawa.',checks:['Za ka rika amfani da wannan asset akai-akai?','Na dogon lokaci ne?','Za ka iya kare recovery phrase?','Ka fahimci network na transfer?','Dole ne ka motsa komai lokaci guda?'],note:'Babu amsa daya da ta dace koyaushe. Raba assets bisa manufa, adadi, da shirin dawo da wallet.'}
  };

  Object.keys(LESSON8_HTML_LOCALE).forEach(function(code){
    if(DATA[code]) DATA[code].lesson8 = Object.assign({}, DATA[code].lesson8 || {}, LESSON8_HTML_LOCALE[code]);
  });

  function pack(code){ return DATA[code] || DATA.en; }

  function setDocumentLanguage(){
    var p = pack(lang());
    document.documentElement.lang = p.htmlLang || lang();
    document.documentElement.dir = p.dir || 'ltr';
    if(document.body) document.body.classList.toggle('is-rtl', p.dir === 'rtl');
  }

  function syncLanguageMenu(){
    var menu = document.getElementById('langMenu');
    if(!menu) return;
    LANGS.forEach(function(code){
      var p = pack(code);
      var item = menu.querySelector('[data-lang="' + code + '"]');
      if(!item){
        item = document.createElement('div');
        item.className = 'lang-item';
        item.dataset.lang = code;
        menu.appendChild(item);
      }
      item.innerHTML = '<span>' + esc(p.menu[2]) + '</span><span>' + esc(p.menu[0]) + '</span><span class="native">' + esc(p.menu[1]) + '</span>';
    });
  }

  var SOURCE_CAT_LABELS = {
    en:{exchanges:'Exchanges',stable:'Stablecoins'},
    ko:{exchanges:'거래소',stable:'스테이블코인'},
    th:{exchanges:'แพลตฟอร์มซื้อขาย',stable:'สเตเบิลคอยน์'},
    id:{exchanges:'Bursa',stable:'Stablecoin'},
    pt:{exchanges:'Corretoras',stable:'Stablecoins'},
    br:{exchanges:'Corretoras',stable:'Stablecoins'},
    tr:{exchanges:'Borsalar',stable:'Stablecoinler'},
    es:{exchanges:'Exchanges',stable:'Stablecoins'},
    ar:{exchanges:'المنصات',stable:'العملات المستقرة'},
    vi:{exchanges:'Sàn giao dịch',stable:'Stablecoin'},
    ha:{exchanges:'Dandalan ciniki',stable:'Stablecoins'}
  };

  function sourceCatLabel(code, key, fallback){
    return (SOURCE_CAT_LABELS[code] && SOURCE_CAT_LABELS[code][key]) || fallback;
  }

  function mergeCoreData(){
    LANGS.forEach(function(code){
      var p = pack(code);
      if(typeof langLabels !== 'undefined') langLabels[code] = p.menu[1];
      if(typeof ui !== 'undefined') ui[code] = Object.assign({}, ui[code] || {}, p.ui);
      if(typeof extraUi !== 'undefined') extraUi[code] = Object.assign({}, extraUi[code] || {}, p.ui);
      if(typeof sourceLibraryCats !== 'undefined'){
        sourceLibraryCats[code] = [
          {key:'scams',label: code === 'ko' ? '사기 예방' : p.ui['nav.safety']},
          {key:'exchanges',label: code === 'ko' ? '거래소' : 'Exchange'},
          {key:'stable',label: code === 'ko' ? '스테이블코인' : 'Stablecoin'},
          {key:'wallet',label: code === 'ko' ? '지갑 보안' : p.ui['nav.glossary']},
          {key:'intermediate',label:p.intermediate.sourceLabel}
        ];
      }
    });
  }

  function patchSourceCategoryLabels(){
    if(typeof sourceLibraryCats === 'undefined') return;
    LANGS.forEach(function(code){
      if(!sourceLibraryCats[code]) return;
      sourceLibraryCats[code].forEach(function(cat){
        if(cat.key === 'exchanges') cat.label = sourceCatLabel(code, 'exchanges', cat.label);
        if(cat.key === 'stable') cat.label = sourceCatLabel(code, 'stable', cat.label);
      });
    });
  }

  function makeIntermediateLesson(code, offset){
    var p = pack(code).intermediate;
    var title = p.titles[offset] || DATA.en.intermediate.titles[offset];
    var sub = p.subs[offset] || DATA.en.intermediate.subs[offset];
    var one = p.one && p.one[offset] ? p.one[offset] : (sub + ': ' + title);
    var easy = p.trackDesc + ' ' + sub + '.';
    var scenario = p.headings[2] + ': ' + sub + '.';
    var mistake = p.headings[3] + ': ' + one;
    var check = p.headings[4] + ': ' + ((p.visual[offset] || []).join(' / '));
    var visual = (p.visual[offset] || []).map(function(item, idx){
      return { title:item, desc:(idx === 0 ? one : sub) };
    });
    return {
      cat:p.badge,
      title:title,
      intro:one + ' ' + easy,
      sections:[
        {h:p.headings[0], ps:[one]},
        {h:p.headings[1], ps:[easy]},
        {h:p.headings[2], ps:[scenario]},
        {h:p.headings[3], ps:[mistake]},
        {h:p.headings[4], ps:[check]}
      ],
      defs:[
        [p.visual[offset] && p.visual[offset][0] || title, sub],
        [p.visual[offset] && p.visual[offset][1] || p.badge, one],
        [p.visual[offset] && p.visual[offset][2] || p.sourceLabel, check]
      ],
      example:scenario,
      mistakes:(p.visual[offset] || []).slice(0,3),
      faqs:[[p.headings[4], check],[p.relatedTitle, p.relatedFree + ' · ' + p.relatedSources + ' · ' + p.relatedDeep]],
      checkpoints:(p.visual[offset] || []).slice(0,4),
      quiz:[[one, check],[sub, mistake],[p.relatedTitle, p.relatedSources]],
      sources:[
        ['Coin ProofPath', p.sourceLabel + ': ' + title, './sources/']
      ],
      visual:visual
    };
  }

  function patchIntermediateLessons(){
    if(typeof lessons === 'undefined') return;
    LANGS.forEach(function(code){
      var p = pack(code).intermediate;
      if(!lessons[code]) lessons[code] = clone(lessons.en || []);
      if(typeof lessonOverrides !== 'undefined' && !lessonOverrides[code]) lessonOverrides[code] = {};
      for(var i = 0; i < LESSON_COUNT; i++){
        var lesson = makeIntermediateLesson(code, i);
        lessons[code][LESSON_START + i] = lesson;
        if(typeof lessonOverrides !== 'undefined') lessonOverrides[code][LESSON_START + i] = clone(lesson);
        if(typeof ui !== 'undefined'){
          ui[code]['nav.l' + (LESSON_START + i + 1)] = lesson.title;
          ui[code]['nav.l' + (LESSON_START + i + 1) + 'sub'] = p.subs[i] || p.trackTitle;
          ui[code]['topic.l' + (LESSON_START + i + 1)] = lesson.title;
        }
      }
      if(typeof ui !== 'undefined'){
        ui[code]['intermediate.sidebar'] = p.sidebar;
        ui[code]['intermediate.trackTitle'] = p.trackTitle;
        ui[code]['intermediate.trackDesc'] = p.trackDesc;
        ui[code]['intermediate.trackCta'] = p.trackCta;
      }
    });
  }

  function patchSourceLibrary(){
    if(typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(code){
      var p = pack(code).intermediate;
      if(!sourceLibrary[code]) sourceLibrary[code] = clone(sourceLibrary.en || []);
      for(var i = 0; i < LESSON_COUNT; i++){
        var title = p.titles[i] || DATA.en.intermediate.titles[i];
        var item = ['intermediate','Coin ProofPath',title,p.trackDesc,'./sources/','Lesson ' + (LESSON_START + i + 1),p.sourceLabel];
        var exists = sourceLibrary[code].some(function(existing){ return existing && existing[2] === title; });
        if(!exists) sourceLibrary[code].push(item);
      }
    });
  }

  function setText(node, value){
    if(node && value != null) node.textContent = value;
  }

  function localizeHomeVisuals(root){
    if(!root || !root.querySelector) return;
    var p = pack(lang()).home;
    var flow = root.querySelector('[data-home-visual="starter-flow"]');
    if(flow){
      setText(flow.querySelector('.home-priority-head span'), p.label);
      setText(flow.querySelector('.home-priority-head h2'), p.flowTitle);
      setText(flow.querySelector('.home-priority-head p'), p.flowDesc);
      flow.querySelectorAll('.home-flow-step').forEach(function(card, i){
        setText(card.querySelector('strong'), p.flow[i]);
        setText(card.querySelector('em'), p.open);
      });
    }
    var check = root.querySelector('[data-home-visual="quick-checklist"]');
    if(check){
      setText(check.querySelector('.home-priority-check-copy span'), p.label);
      setText(check.querySelector('.home-priority-check-copy h2'), p.checklistTitle);
      setText(check.querySelector('.home-priority-check-copy p'), p.checklistDesc);
      check.querySelectorAll('.home-priority-check-row strong').forEach(function(row, i){ setText(row, p.checks[i]); });
      setText(check.querySelector('.home-priority-mini-cta'), p.open);
    }
    var warn = root.querySelector('[data-home-visual="warning-cards"]');
    if(warn){
      setText(warn.querySelector('.home-priority-head span'), p.label);
      setText(warn.querySelector('.home-priority-head h2'), p.warningTitle);
      setText(warn.querySelector('.home-priority-head p'), p.warningDesc);
      warn.querySelectorAll('.home-warning-card').forEach(function(card, i){
        setText(card.querySelector('strong'), p.warnings[i] && p.warnings[i][0]);
        setText(card.querySelector('small'), p.warnings[i] && p.warnings[i][1]);
      });
    }
    var overview = root.querySelector('[data-home-visual="overview"]');
    if(overview){
      setText(overview.querySelector('.home-priority-head span'), p.label);
      setText(overview.querySelector('.home-priority-head h2'), p.overviewTitle);
      setText(overview.querySelector('.home-priority-head p'), p.overviewDesc);
      overview.querySelectorAll('.home-priority-tile').forEach(function(card, i){
        setText(card.querySelector('strong'), p.overview[i]);
        setText(card.querySelector('small'), p.open);
      });
    }
    var road = root.querySelector('[data-home-visual="roadmap-strip"]');
    if(road){
      setText(road.querySelector('.home-priority-head span'), p.label);
      setText(road.querySelector('.home-priority-head h2'), p.roadTitle);
      setText(road.querySelector('.home-priority-head p'), p.roadDesc);
      road.querySelectorAll('.home-roadmap-segment strong').forEach(function(node, i){ setText(node, p.road[i]); });
    }
  }

  function localizeLessonEight(root){
    if(!root || !root.querySelector) return;
    var p = pack(lang()).lesson8;
    var head = root.querySelector('.lesson-eight-visual-head');
    if(head){
      setText(head.querySelector('.lesson-guide-kicker'), p.label);
      setText(head.querySelector('h3'), p.splitTitle);
      setText(head.querySelector('p'), p.splitDesc);
    }
    var exchange = root.querySelector('.lesson-eight-side-card.is-exchange');
    if(exchange){
      setText(exchange.querySelector(':scope > span'), p.exchangeLabel);
      setText(exchange.querySelector(':scope > strong'), p.exchangeTitle);
      setText(exchange.querySelector(':scope > p'), p.exchangeNote);
    }
    var wallet = root.querySelector('.lesson-eight-side-card.is-wallet');
    if(wallet){
      setText(wallet.querySelector(':scope > span'), p.walletLabel);
      setText(wallet.querySelector(':scope > strong'), p.walletTitle);
      setText(wallet.querySelector(':scope > p'), p.walletNote);
    }
    var meters = root.querySelectorAll('.lesson-eight-meter-row > span');
    [p.convenience,p.control,p.recovery,p.convenience,p.control,p.longTerm].forEach(function(text, i){ setText(meters[i], text); });
    root.querySelectorAll('.lesson-eight-reference-note').forEach(function(note){ setText(note, p.note); });
    var decision = root.querySelector('.lesson-eight-decision-figure');
    if(decision){
      setText(decision.querySelector('.lesson-guide-scene-kicker'), p.label);
      setText(decision.querySelector('.lesson-guide-scene-top strong'), p.decisionTitle);
      decision.querySelectorAll('.lesson-eight-decision-node').forEach(function(node, i){
        setText(node.querySelector('strong'), p.q[i]);
        setText(node.querySelector('em'), p.a[i]);
      });
      setText(decision.querySelector('figcaption'), p.decisionDesc);
    }
    var scenario = root.querySelector('.lesson-eight-scenario-figure');
    if(scenario){
      setText(scenario.querySelector('.lesson-guide-scene-kicker'), p.compare);
      setText(scenario.querySelector('.lesson-guide-scene-top strong'), p.scenarioTitle);
      var apps = scenario.querySelectorAll('.lesson-eight-app-card');
      if(apps[0]){
        setText(apps[0].querySelector('strong'), p.exchangeMock);
        setText(apps[0].querySelector('p'), p.sell);
        setText(apps[0].querySelector('em'), p.limited);
      }
      if(apps[1]){
        setText(apps[1].querySelector('strong'), p.walletMock);
        var addr = apps[1].querySelector('.lesson-eight-address');
        if(addr) addr.textContent = p.address + ': 0x7A...42F9';
        setText(apps[1].querySelector('p'), p.direct);
        setText(apps[1].querySelector('em'), p.recovery);
      }
      setText(scenario.querySelector('figcaption'), p.note);
    }
    var check = root.querySelector('.lesson-eight-check-figure');
    if(check){
      setText(check.querySelector('.lesson-guide-scene-kicker'), p.checklistTitle);
      setText(check.querySelector('.lesson-guide-scene-top strong'), p.checklistDesc);
      check.querySelectorAll('.lesson-eight-check-list li').forEach(function(li, i){
        li.innerHTML = '<span aria-hidden="true"></span>' + esc(p.checks[i] || '');
      });
      setText(check.querySelector('figcaption'), p.note);
    }
  }

  function postProcessLessonHtml(html, index){
    if(typeof html !== 'string' || typeof document === 'undefined') return html;
    var shell = document.createElement('div');
    shell.innerHTML = html;
    if(index === LESSON_START) localizeLessonEight(shell);
    return shell.innerHTML;
  }

  function wrapRenderHome(){
    var original = window.renderHome || (typeof renderHome === 'function' ? renderHome : null);
    if(typeof original !== 'function' || original.__caI18nCompletionWrapped) return;
    var wrapped = function(){
      var html = original.apply(this, arguments);
      var shell = document.createElement('div');
      shell.innerHTML = html || '';
      localizeHomeVisuals(shell);
      return shell.innerHTML;
    };
    wrapped.__caI18nCompletionWrapped = true;
    window.renderHome = wrapped;
    try{ renderHome = wrapped; }catch(err){}
  }

  function wrapRenderLesson(){
    var original = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof original !== 'function' || original.__caI18nCompletionWrapped) return;
    var wrapped = function(index){
      return postProcessLessonHtml(original.apply(this, arguments), index);
    };
    wrapped.__caI18nCompletionWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(err){}
  }

  function wrapSetLang(){
    var original = window.setLang || (typeof setLang === 'function' ? setLang : null);
    if(typeof original !== 'function' || original.__caI18nCompletionWrapped) return;
    var wrapped = function(next){
      var result = original.apply(this, arguments);
      setDocumentLanguage();
      syncLanguageMenu();
      localizeHomeVisuals(document.getElementById('homePanel'));
      return result;
    };
    wrapped.__caI18nCompletionWrapped = true;
    window.setLang = wrapped;
    try{ setLang = wrapped; }catch(err){}
  }

  function refreshVisible(){
    setDocumentLanguage();
    syncLanguageMenu();
    localizeHomeVisuals(document.getElementById('homePanel'));
    if(typeof applyUI === 'function') applyUI();
    if(typeof currentPage === 'string' && currentPage === 'home' && typeof renderHome === 'function'){
      var home = document.getElementById('homePanel');
      if(home) home.innerHTML = renderHome();
    }
    if(typeof currentPage === 'string' && /^lesson\d+$/.test(currentPage) && typeof currentLesson === 'number' && typeof renderLesson === 'function'){
      var panel = document.getElementById('lesson' + currentLesson);
      if(panel) panel.innerHTML = renderLesson(currentLesson);
    }
  }

  mergeCoreData();
  patchSourceCategoryLabels();
  patchIntermediateLessons();
  patchSourceLibrary();
  wrapRenderHome();
  wrapRenderLesson();
  wrapSetLang();
  refreshVisible();

  window.__CA_I18N_COMPLETION = {
    languages:LANGS.slice(),
    refresh:refreshVisible,
    localizeHomeVisuals:localizeHomeVisuals
  };
})();
