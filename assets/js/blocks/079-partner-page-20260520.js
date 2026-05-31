(function(){
  if(typeof window === 'undefined' || window.__coinProofPathPartnerPage20260520) return;
  window.__coinProofPathPartnerPage20260520 = true;

  var EMAIL = 'beenetworkkorea@gmail.com';
  var BRAND = 'Coin ProofPath';

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function currentLocale(){
    var lang = 'en';
    try{
      if(typeof currentLang === 'string' && currentLang) lang = currentLang;
      else lang = document.documentElement.getAttribute('lang') || localStorage.getItem('cryptoAcademyLang') || 'en';
    }catch(err){}
    lang = String(lang || 'en').toLowerCase();
    return lang === 'pt-br' ? 'br' : lang;
  }

  var COPY = {
    en:{
      nav:'Kemitraan',
      navSub:'Support safer crypto learning.',
      footerPartner:'Kemitraan',
      footerContact:'Contact',
      footerMission:'Safety mission',
      homeTitle:'Partner with Coin ProofPath',
      homeBody:'Support safer crypto learning.',
      homeCta:'Explore partnership',
      eyebrow:'Education partnerships',
      title:'Partner with Coin ProofPath',
      subtitle:'Support safer crypto learning for beginners around the world.',
      primaryCta:'Become an Education Partner',
      secondaryCta:'Explore Partnership Options',
      position:'Coin ProofPath is an independent, exchange-neutral crypto learning guide focused on safe onboarding, scam prevention, and practical verification habits for beginners.',
      whyTitle:'Why this matters',
      whyBody:'Beginners can make costly mistakes with wallets, networks, transfers, seed phrases, fake sites, and information verification. Coin ProofPath gives learners a free safety-first path before they take action.',
      teachTitle:'What Coin ProofPath teaches',
      teachIntro:'Partners support practical education that helps new users slow down, verify, and act more safely.',
      opportunitiesTitle:'Partnership opportunities',
      opportunitiesIntro:'Sponsorships are framed around public education, not investment promotion or exchange preference.',
      shownTitle:'How partners are shown',
      shownIntro:'Partner visibility is transparent, modest, and clearly labeled as educational support.',
      logosTitle:'Partner logo area',
      logosBody:'Partner logos will appear here once partnerships are confirmed.',
      principlesTitle:'Partnership principles',
      contactTitle:'Start a partnership conversation',
      contactBody:'For education partnerships, sponsorships, or safety campaign collaborations, contact us.',
      emailLabel:'Email partnership team',
      metaTitle:'Partner with Coin ProofPath | Crypto Safety Education',
      metaDesc:'Support independent, exchange-neutral crypto safety education for beginners learning wallets, transfers, scam prevention, and verification.',
      teach:[
        ['Wallet basics','Understand wallets, keys, and recovery responsibility.'],
        ['Safe transfers','Check addresses, networks, fees, and small tests.'],
        ['Scam prevention','Spot fake sites, fake support, and pressure tactics.'],
        ['Network verification','Match the asset, network, and receiving platform.'],
        ['Stablecoin awareness','Compare structures, reserves, and risk notes.'],
        ['DeFi approval safety','Read connection, approval, and signing requests.'],
        ['Project evaluation','Look for evidence beyond hype or visuals.'],
        ['Information verification','Check official sources before trusting claims.']
      ],
      cards:[
        ['Beginner Safety Partner','Support free beginner lessons on wallets, transfers, and scam prevention.'],
        ['Safe First Transfer Campaign','Help new users learn how to check addresses, networks, fees, and small test transfers.'],
        ['Scam Prevention Hub','Support free education about fake websites, seed phrase theft, fake support DMs, and suspicious links.'],
        ['Sponsored Safety Checklist','Support practical checklists that users can review before sending crypto or connecting a wallet.'],
        ['Global Crypto Safety PDF','Support a free downloadable beginner safety kit for global learners.'],
        ['Verified Learning Path Partner','Support structured learning paths from beginner safety to practical verification.']
      ],
      shown:[
        'Partner page logo area',
        'Safety page support note',
        'Checklist support note',
        'PDF support mention',
        'Monthly learning impact summary',
        'Educational campaign mention'
      ],
      principles:[
        'Educational first',
        'Exchange-neutral',
        'No misleading promotions',
        'No guaranteed investment claims',
        'Safety and verification focused',
        'Clear sponsor labeling'
      ],
      searchKeywords:['partner','partnership','sponsor','sponsorship','education partner','safety campaign','contact']
    },
    ko:{
      nav:'파트너십',
      navSub:'안전한 크립토 학습 지원',
      footerPartner:'파트너십',
      footerContact:'문의',
      footerMission:'안전 교육 미션',
      homeTitle:'Coin ProofPath와 함께하기',
      homeBody:'더 안전한 크립토 학습을 함께 지원합니다.',
      homeCta:'파트너십 보기',
      eyebrow:'교육 파트너십',
      title:'Coin ProofPath와 함께하기',
      subtitle:'전 세계 초보자가 더 안전하게 크립토를 배울 수 있도록 함께해 주세요.',
      primaryCta:'교육 파트너 문의하기',
      secondaryCta:'파트너십 옵션 보기',
      position:'Coin ProofPath는 특정 거래소에 종속되지 않은 독립형 크립토 학습 가이드입니다. 초보자가 지갑, 전송, 사기 예방, 정보 검증을 안전하게 배울 수 있도록 돕는 무료 교육 플랫폼입니다.',
      whyTitle:'왜 필요한가요',
      whyBody:'초보자는 지갑, 네트워크, 전송, 시드 문구, 가짜 사이트, 정보 검증에서 실수하기 쉽습니다. Coin ProofPath는 행동하기 전에 확인하는 무료 안전 학습 경로를 제공합니다.',
      teachTitle:'Coin ProofPath가 가르치는 것',
      teachIntro:'파트너는 사용자가 천천히 확인하고 더 안전하게 행동하도록 돕는 실전 교육을 지원합니다.',
      opportunitiesTitle:'파트너십 가능 영역',
      opportunitiesIntro:'후원은 투자 홍보나 특정 거래소 유도가 아니라 공익적 안전 교육을 중심으로 구성됩니다.',
      shownTitle:'파트너 노출 방식',
      shownIntro:'파트너 표기는 투명하고 절제된 방식으로, 교육 지원임을 명확히 표시합니다.',
      logosTitle:'파트너 로고 영역',
      logosBody:'파트너십이 확정되면 이 영역에 파트너 로고가 표시됩니다.',
      principlesTitle:'파트너십 원칙',
      contactTitle:'파트너십 문의하기',
      contactBody:'교육 파트너십, 후원, 안전 캠페인 협업 문의를 환영합니다.',
      emailLabel:'파트너십 이메일 보내기',
      metaTitle:'Coin ProofPath와 함께하기 | 크립토 안전 교육',
      metaDesc:'지갑, 전송, 사기 예방, 정보 검증을 배우는 초보자를 위한 독립형 크립토 안전 교육 파트너십 페이지입니다.',
      teach:[
        ['지갑 기초','지갑, 키, 복구 책임을 이해합니다.'],
        ['안전한 전송','주소, 네트워크, 수수료, 소액 테스트를 확인합니다.'],
        ['사기 예방','가짜 사이트, 가짜 지원, 압박 전술을 구별합니다.'],
        ['네트워크 확인','자산, 네트워크, 받는 곳을 서로 맞춥니다.'],
        ['스테이블코인 이해','구조, 준비금, 위험 메모를 비교합니다.'],
        ['DeFi 승인 안전','연결, 승인, 서명 요청을 읽는 습관을 만듭니다.'],
        ['프로젝트 검토','이미지나 과장보다 근거를 확인합니다.'],
        ['정보 검증','믿기 전에 공식 출처를 다시 확인합니다.']
      ],
      cards:[
        ['초보자 안전 파트너','지갑, 전송, 사기 예방 입문 강의를 무료로 제공할 수 있도록 지원합니다.'],
        ['첫 전송 안전 캠페인','초보자가 주소, 네트워크, 수수료, 소액 테스트를 확인하는 습관을 배울 수 있도록 돕습니다.'],
        ['사기 예방 허브','가짜 사이트, 시드 문구 탈취, 가짜 고객지원 DM, 의심 링크에 대한 무료 교육을 지원합니다.'],
        ['후원 안전 체크리스트','전송 전, 지갑 연결 전 확인할 수 있는 실전 체크리스트를 지원합니다.'],
        ['글로벌 크립토 안전 PDF','전 세계 사용자를 위한 무료 크립토 안전 PDF 제작을 지원합니다.'],
        ['검증 학습 경로 파트너','초보자 안전 교육부터 실전 검증 루틴까지 이어지는 학습 경로를 지원합니다.']
      ],
      shown:[
        '파트너 페이지 로고 영역',
        'Safety 페이지 지원 문구',
        '체크리스트 지원 문구',
        'PDF 지원 표기',
        '월간 학습 영향 요약',
        '교육 캠페인 언급'
      ],
      principles:[
        '교육 우선',
        '거래소 중립',
        '오해를 부르는 홍보 금지',
        '투자 수익 보장 주장 금지',
        '안전과 검증 중심',
        '명확한 후원 표기'
      ],
      searchKeywords:['파트너','파트너십','후원','교육 파트너','안전 캠페인','문의']
    },
    th:{
      nav:'พาร์ตเนอร์',
      navSub:'สนับสนุนการเรียนคริปโตที่ปลอดภัย',
      footerPartner:'พาร์ตเนอร์',
      footerContact:'ติดต่อ',
      footerMission:'พันธกิจความปลอดภัย',
      homeTitle:'ร่วมมือกับ Coin ProofPath',
      homeBody:'สนับสนุนการเรียนคริปโตที่ปลอดภัยยิ่งขึ้น',
      homeCta:'ดูตัวเลือกพาร์ตเนอร์',
      eyebrow:'พาร์ตเนอร์ด้านการศึกษา',
      title:'ร่วมมือกับ Coin ProofPath',
      subtitle:'ช่วยให้ผู้เริ่มต้นทั่วโลกเรียนคริปโตได้ปลอดภัยขึ้น',
      primaryCta:'ติดต่อเป็นพาร์ตเนอร์การศึกษา',
      secondaryCta:'ดูตัวเลือกพาร์ตเนอร์',
      position:'Coin ProofPath เป็นคู่มือเรียนคริปโตอิสระ ไม่ผูกกับเว็บเทรดใด เน้นการเริ่มต้นอย่างปลอดภัย การป้องกันสแกม และนิสัยตรวจสอบก่อนลงมือสำหรับผู้เริ่มต้น',
      whyTitle:'ทำไมเรื่องนี้สำคัญ',
      whyBody:'ผู้เริ่มต้นมักพลาดเรื่องกระเป๋า เครือข่าย การโอน seed phrase เว็บปลอม และการตรวจสอบข้อมูล Coin ProofPath จึงให้เส้นทางเรียนฟรีที่เน้นความปลอดภัยก่อนลงมือ',
      teachTitle:'Coin ProofPath สอนอะไร',
      teachIntro:'พาร์ตเนอร์ช่วยสนับสนุนการศึกษาที่ทำให้ผู้ใช้ใหม่ช้าลง ตรวจสอบก่อน และทำอย่างปลอดภัยขึ้น',
      opportunitiesTitle:'โอกาสในการร่วมมือ',
      opportunitiesIntro:'การสนับสนุนเน้นการศึกษาสาธารณะ ไม่ใช่การชวนลงทุนหรือโปรโมตเว็บเทรด',
      shownTitle:'พาร์ตเนอร์จะแสดงอย่างไร',
      shownIntro:'การแสดงชื่อพาร์ตเนอร์จะโปร่งใส สุภาพ และระบุว่าเป็นการสนับสนุนการศึกษา',
      logosTitle:'พื้นที่โลโก้พาร์ตเนอร์',
      logosBody:'โลโก้พาร์ตเนอร์จะแสดงที่นี่เมื่อมีการยืนยันความร่วมมือ',
      principlesTitle:'หลักการพาร์ตเนอร์',
      contactTitle:'เริ่มคุยเรื่องพาร์ตเนอร์',
      contactBody:'ติดต่อเราเรื่องพาร์ตเนอร์การศึกษา การสนับสนุน หรือแคมเปญความปลอดภัย',
      emailLabel:'อีเมลทีมพาร์ตเนอร์',
      metaTitle:'ร่วมมือกับ Coin ProofPath | การศึกษาความปลอดภัยคริปโต',
      metaDesc:'สนับสนุนการศึกษาคริปโตที่เป็นกลางและอิสระสำหรับผู้เริ่มต้นเรื่องกระเป๋า การโอน สแกม และการตรวจสอบ',
      teach:[
        ['พื้นฐานกระเป๋า','เข้าใจกระเป๋า คีย์ และความรับผิดชอบในการกู้คืน'],
        ['การโอนอย่างปลอดภัย','ตรวจที่อยู่ เครือข่าย ค่าธรรมเนียม และทดสอบด้วยจำนวนน้อย'],
        ['ป้องกันสแกม','สังเกตเว็บปลอม บัญชีสนับสนุนปลอม และแรงกดดัน'],
        ['ตรวจสอบเครือข่าย','จับคู่สินทรัพย์ เครือข่าย และปลายทางให้ตรงกัน'],
        ['เข้าใจ Stablecoin','เทียบโครงสร้าง เงินสำรอง และความเสี่ยง'],
        ['ความปลอดภัย DeFi','อ่านคำขอเชื่อมต่อ อนุมัติ และลงนาม'],
        ['ประเมินโปรเจกต์','ดูหลักฐานมากกว่ากระแสหรือรูปภาพ'],
        ['ตรวจสอบข้อมูล','ตรวจแหล่งทางการก่อนเชื่อ']
      ],
      cards:[
        ['พาร์ตเนอร์ความปลอดภัยผู้เริ่มต้น','สนับสนุนบทเรียนฟรีเรื่องกระเป๋า การโอน และการป้องกันสแกม'],
        ['แคมเปญโอนครั้งแรกอย่างปลอดภัย','ช่วยผู้ใช้ใหม่ฝึกตรวจที่อยู่ เครือข่าย ค่าธรรมเนียม และการโอนทดสอบ'],
        ['ศูนย์ป้องกันสแกม','สนับสนุนความรู้ฟรีเรื่องเว็บปลอม การขโมย seed phrase DM ปลอม และลิงก์เสี่ยง'],
        ['เช็กลิสต์ความปลอดภัยที่ได้รับการสนับสนุน','สนับสนุนเช็กลิสต์ก่อนส่งคริปโตหรือเชื่อมต่อกระเป๋า'],
        ['PDF ความปลอดภัยคริปโตทั่วโลก','สนับสนุนชุดความปลอดภัยฟรีสำหรับผู้เรียนทั่วโลก'],
        ['พาร์ตเนอร์เส้นทางเรียนแบบตรวจสอบ','สนับสนุนเส้นทางเรียนจากความปลอดภัยพื้นฐานสู่การตรวจสอบจริง']
      ],
      shown:['พื้นที่โลโก้บนหน้าพาร์ตเนอร์','หมายเหตุสนับสนุนบนหน้าความปลอดภัย','หมายเหตุบนเช็กลิสต์','การกล่าวถึงใน PDF','สรุปผลการเรียนรู้รายเดือน','การกล่าวถึงในแคมเปญการศึกษา'],
      principles:['การศึกษามาก่อน','เป็นกลางต่อเว็บเทรด','ไม่ใช้โปรโมชันชวนเข้าใจผิด','ไม่อ้างผลตอบแทนลงทุน','เน้นความปลอดภัยและการตรวจสอบ','ติดป้ายผู้สนับสนุนชัดเจน'],
      searchKeywords:['พาร์ตเนอร์','สนับสนุน','การศึกษา','ความปลอดภัย','ติดต่อ']
    },
    id:{
      nav:'Kemitraan',
      navSub:'Dukung belajar crypto aman.',
      footerPartner:'Kemitraan',
      footerContact:'Kontak',
      footerMission:'Misi keamanan',
      homeTitle:'Bermitra dengan Coin ProofPath',
      homeBody:'Dukung pembelajaran crypto yang lebih aman.',
      homeCta:'Lihat opsi kemitraan',
      eyebrow:'Kemitraan edukasi',
      title:'Bermitra dengan Coin ProofPath',
      subtitle:'Dukung pembelajaran crypto yang lebih aman bagi pemula di seluruh dunia.',
      primaryCta:'Jadi Mitra Edukasi',
      secondaryCta:'Lihat Opsi Kemitraan',
      position:'Coin ProofPath adalah panduan belajar crypto independen dan netral bursa yang fokus pada onboarding aman, pencegahan scam, dan kebiasaan verifikasi praktis untuk pemula.',
      whyTitle:'Mengapa ini penting',
      whyBody:'Pemula mudah salah saat memakai wallet, jaringan, transfer, seed phrase, situs palsu, dan verifikasi informasi. Coin ProofPath menyediakan jalur belajar gratis yang mengutamakan keamanan sebelum bertindak.',
      teachTitle:'Yang diajarkan Coin ProofPath',
      teachIntro:'Mitra mendukung edukasi praktis agar pengguna baru berhenti sejenak, memverifikasi, dan bertindak lebih aman.',
      opportunitiesTitle:'Peluang kemitraan',
      opportunitiesIntro:'Dukungan disusun untuk edukasi publik, bukan promosi investasi atau preferensi bursa.',
      shownTitle:'Bagaimana mitra ditampilkan',
      shownIntro:'Visibilitas mitra bersifat transparan, sederhana, dan jelas sebagai dukungan edukasi.',
      logosTitle:'Area logo mitra',
      logosBody:'Logo mitra akan tampil di sini setelah kemitraan dikonfirmasi.',
      principlesTitle:'Prinsip kemitraan',
      contactTitle:'Mulai percakapan kemitraan',
      contactBody:'Untuk kemitraan edukasi, sponsor, atau kolaborasi kampanye keamanan, hubungi kami.',
      emailLabel:'Email tim kemitraan',
      metaTitle:'Bermitra dengan Coin ProofPath | Edukasi Keamanan Crypto',
      metaDesc:'Dukung edukasi keamanan crypto independen dan netral bursa untuk pemula yang belajar wallet, transfer, pencegahan scam, dan verifikasi.',
      teach:[
        ['Dasar wallet','Pahami wallet, kunci, dan tanggung jawab pemulihan.'],
        ['Transfer aman','Cek alamat, jaringan, biaya, dan tes kecil.'],
        ['Pencegahan scam','Kenali situs palsu, support palsu, dan tekanan.'],
        ['Verifikasi jaringan','Cocokkan aset, jaringan, dan platform penerima.'],
        ['Kesadaran stablecoin','Bandingkan struktur, cadangan, dan catatan risiko.'],
        ['Keamanan approval DeFi','Baca permintaan koneksi, approval, dan tanda tangan.'],
        ['Evaluasi proyek','Cari bukti, bukan hanya hype atau visual.'],
        ['Verifikasi informasi','Cek sumber resmi sebelum percaya klaim.']
      ],
      cards:[
        ['Partner Keamanan Pemula','Dukung pelajaran gratis tentang wallet, transfer, dan pencegahan scam.'],
        ['Kampanye Transfer Pertama Aman','Bantu pengguna baru belajar cek alamat, jaringan, biaya, dan transfer tes kecil.'],
        ['Pusat Pencegahan Scam','Dukung edukasi gratis tentang situs palsu, pencurian seed phrase, DM support palsu, dan link mencurigakan.'],
        ['Checklist Keamanan Bersponsor','Dukung checklist praktis sebelum mengirim crypto atau menghubungkan wallet.'],
        ['PDF Keamanan Crypto Global','Dukung kit keamanan pemula gratis untuk pembelajar global.'],
        ['Partner Jalur Belajar Terverifikasi','Dukung jalur belajar dari keamanan pemula hingga verifikasi praktis.']
      ],
      shown:['Area logo halaman mitra','Catatan dukungan halaman keamanan','Catatan dukungan daftar periksa','Sebutan dukungan PDF','Ringkasan dampak belajar bulanan','Sebutan kampanye edukasi'],
      principles:['Edukasi lebih dulu','Netral bursa','Tanpa promosi menyesatkan','Tanpa klaim hasil investasi','Fokus pada keamanan dan verifikasi','Label sponsor jelas'],
      searchKeywords:['partner','kemitraan','sponsor','edukasi','keamanan','kontak']
    },
    pt:{
      nav:'Parceria',
      navSub:'Apoie aprendizado cripto seguro.',
      footerPartner:'Parceria',
      footerContact:'Contato',
      footerMission:'Missão de segurança',
      homeTitle:'Faça parceria com Coin ProofPath',
      homeBody:'Apoie um aprendizado cripto mais seguro.',
      homeCta:'Ver opções de parceria',
      eyebrow:'Parcerias educacionais',
      title:'Faça parceria com Coin ProofPath',
      subtitle:'Apoie o aprendizado cripto mais seguro para iniciantes no mundo todo.',
      primaryCta:'Tornar-se Parceiro Educacional',
      secondaryCta:'Ver Opções de Parceria',
      position:'Coin ProofPath é um guia independente e neutro em relação a exchanges, focado em onboarding seguro, prevenção de golpes e hábitos práticos de verificação para iniciantes.',
      whyTitle:'Por que isso importa',
      whyBody:'Iniciantes podem errar com carteiras, redes, transferências, seed phrases, sites falsos e verificação de informações. Coin ProofPath oferece um caminho gratuito com segurança antes da ação.',
      teachTitle:'O que Coin ProofPath ensina',
      teachIntro:'Parceiros apoiam educação prática para novos usuários desacelerarem, verificarem e agirem com mais segurança.',
      opportunitiesTitle:'Oportunidades de parceria',
      opportunitiesIntro:'Os patrocínios são estruturados como educação pública, não promoção de investimento ou preferência por exchange.',
      shownTitle:'Como os parceiros aparecem',
      shownIntro:'A visibilidade é transparente, discreta e claramente marcada como apoio educacional.',
      logosTitle:'Área de logotipos',
      logosBody:'Os logotipos de parceiros aparecerão aqui quando as parcerias forem confirmadas.',
      principlesTitle:'Princípios da parceria',
      contactTitle:'Comece uma conversa de parceria',
      contactBody:'Para parcerias educacionais, patrocínios ou campanhas de segurança, entre em contato.',
      emailLabel:'Enviar email para parcerias',
      metaTitle:'Faça parceria com Coin ProofPath | Educação de Segurança Cripto',
      metaDesc:'Apoie educação cripto independente e neutra para iniciantes sobre carteiras, transferências, prevenção de golpes e verificação.',
      teach:[
        ['Noções de carteira','Entenda carteiras, chaves e responsabilidade de recuperação.'],
        ['Transferências seguras','Confira endereço, rede, taxas e teste pequeno.'],
        ['Prevenção de golpes','Identifique sites falsos, suporte falso e pressão.'],
        ['Verificação de rede','Combine ativo, rede e plataforma de destino.'],
        ['Consciência sobre stablecoins','Compare estrutura, reservas e riscos.'],
        ['Segurança em aprovações DeFi','Leia pedidos de conexão, aprovação e assinatura.'],
        ['Avaliação de projetos','Procure evidências além de hype ou imagem.'],
        ['Verificação de informações','Confira fontes oficiais antes de confiar.']
      ],
      cards:[
        ['Parceiro de Segurança para Iniciantes','Apoie lições gratuitas sobre carteiras, transferências e prevenção de golpes.'],
        ['Campanha Primeira Transferência Segura','Ajude novos usuários a checar endereços, redes, taxas e transferências pequenas de teste.'],
        ['Centro de Prevenção de Golpes','Apoie educação gratuita sobre sites falsos, roubo de seed phrase, DMs falsas de suporte e links suspeitos.'],
        ['Checklist de Segurança Patrocinado','Apoie checklists práticos antes de enviar cripto ou conectar uma carteira.'],
        ['PDF Global de Segurança Cripto','Apoie um kit gratuito de segurança para iniciantes globais.'],
        ['Parceiro de Caminho de Aprendizado Verificado','Apoie trilhas estruturadas da segurança iniciante à verificação prática.']
      ],
      shown:['Área de logo na página de parceria','Nota de apoio na página de segurança','Nota de apoio na lista de verificação','Menção no PDF','Resumo mensal de impacto','Menção em campanha educacional'],
      principles:['Educação em primeiro lugar','Neutro em relação a exchanges','Sem promoções enganosas','Sem promessa de retorno','Foco em segurança e verificação','Rotulagem clara de patrocinador'],
      searchKeywords:['parceria','patrocínio','educação','segurança','contato']
    },
    br:null,
    tr:{
      nav:'Ortaklık',
      navSub:'Daha güvenli kripto öğrenimini destekleyin.',
      footerPartner:'Ortaklık',
      footerContact:'İletişim',
      footerMission:'Güvenlik misyonu',
      homeTitle:'Coin ProofPath ile ortak olun',
      homeBody:'Daha güvenli kripto öğrenimini destekleyin.',
      homeCta:'Ortaklık seçenekleri',
      eyebrow:'Eğitim ortaklıkları',
      title:'Coin ProofPath ile ortak olun',
      subtitle:'Dünyadaki yeni başlayanların kriptoyu daha güvenli öğrenmesini destekleyin.',
      primaryCta:'Eğitim Ortağı Olun',
      secondaryCta:'Ortaklık Seçeneklerini İnceleyin',
      position:'Coin ProofPath, yeni başlayanlar için güvenli başlangıç, dolandırıcılık önleme ve pratik doğrulama alışkanlıklarına odaklanan bağımsız ve borsa tarafsız bir kripto öğrenme rehberidir.',
      whyTitle:'Bu neden önemli',
      whyBody:'Yeni başlayanlar cüzdan, ağ, transfer, seed phrase, sahte site ve bilgi doğrulamada hata yapabilir. Coin ProofPath, harekete geçmeden önce güvenliği önceleyen ücretsiz bir öğrenme yolu sunar.',
      teachTitle:'Coin ProofPath ne öğretir',
      teachIntro:'Ortaklar, yeni kullanıcıların yavaşlayıp doğrulama yapmasına ve daha güvenli hareket etmesine yardımcı olan pratik eğitimi destekler.',
      opportunitiesTitle:'Ortaklık alanları',
      opportunitiesIntro:'Destekler yatırım tanıtımı veya borsa tercihi değil, kamusal eğitim etrafında tasarlanır.',
      shownTitle:'Ortaklar nasıl gösterilir',
      shownIntro:'Ortak görünürlüğü şeffaf, ölçülü ve eğitim desteği olarak açık etiketlidir.',
      logosTitle:'Ortak logo alanı',
      logosBody:'Ortaklıklar onaylandığında logolar burada görünecektir.',
      principlesTitle:'Ortaklık ilkeleri',
      contactTitle:'Ortaklık görüşmesi başlatın',
      contactBody:'Eğitim ortaklıkları, sponsorluklar veya güvenlik kampanyaları için bize ulaşın.',
      emailLabel:'Ortaklık ekibine e-posta',
      metaTitle:'Coin ProofPath ile ortak olun | Kripto Güvenlik Eğitimi',
      metaDesc:'Cüzdan, transfer, dolandırıcılık önleme ve doğrulama öğrenen yeni başlayanlar için bağımsız, borsa tarafsız kripto güvenlik eğitimini destekleyin.',
      teach:[
        ['Cüzdan temelleri','Cüzdanları, anahtarları ve kurtarma sorumluluğunu anlayın.'],
        ['Güvenli transferler','Adres, ağ, ücret ve küçük testi kontrol edin.'],
        ['Dolandırıcılık önleme','Sahte siteleri, sahte desteği ve baskı taktiklerini fark edin.'],
        ['Ağ doğrulama','Varlığı, ağı ve alıcı platformu eşleştirin.'],
        ['Stablecoin farkındalığı','Yapı, rezerv ve risk notlarını karşılaştırın.'],
        ['DeFi onay güvenliği','Bağlantı, onay ve imza isteklerini okuyun.'],
        ['Proje değerlendirme','Hype veya görselden çok kanıt arayın.'],
        ['Bilgi doğrulama','İddialara güvenmeden önce resmi kaynakları kontrol edin.']
      ],
      cards:[
        ['Başlangıç Güvenliği Ortağı','Cüzdan, transfer ve dolandırıcılık önleme derslerinin ücretsiz kalmasını destekler.'],
        ['Güvenli İlk Transfer Kampanyası','Yeni kullanıcıların adres, ağ, ücret ve küçük test transferlerini kontrol etmeyi öğrenmesine yardım eder.'],
        ['Dolandırıcılık Önleme Merkezi','Sahte siteler, seed phrase hırsızlığı, sahte destek DMleri ve şüpheli linkler hakkında ücretsiz eğitimi destekler.'],
        ['Sponsorlu Güvenlik Kontrol Listesi','Kripto göndermeden veya cüzdan bağlamadan önce kullanılacak pratik listeleri destekler.'],
        ['Küresel Kripto Güvenlik PDFi','Küresel öğrenciler için ücretsiz başlangıç güvenlik kitini destekler.'],
        ['Doğrulanmış Öğrenme Yolu Ortağı','Başlangıç güvenliğinden pratik doğrulamaya uzanan yapılandırılmış yolları destekler.']
      ],
      shown:['Ortaklık sayfası logo alanı','Güvenlik sayfası destek notu','Kontrol listesi destek notu','PDF destek bahsi','Aylık öğrenme etkisi özeti','Eğitim kampanyası bahsi'],
      principles:['Önce eğitim','Borsa tarafsız','Yanıltıcı promosyon yok','Yatırım getirisi vaadi yok','Güvenlik ve doğrulama odaklı','Açık sponsor etiketi'],
      searchKeywords:['ortaklık','sponsor','eğitim','güvenlik','iletişim']
    },
    es:{
      nav:'Socios',
      navSub:'Apoya aprendizaje cripto seguro.',
      footerPartner:'Socios',
      footerContact:'Contacto',
      footerMission:'Misión de seguridad',
      homeTitle:'Colabora con Coin ProofPath',
      homeBody:'Apoya un aprendizaje cripto más seguro.',
      homeCta:'Ver opciones de colaboración',
      eyebrow:'Alianzas educativas',
      title:'Colabora con Coin ProofPath',
      subtitle:'Apoya un aprendizaje cripto más seguro para principiantes de todo el mundo.',
      primaryCta:'Ser Socio Educativo',
      secondaryCta:'Ver Opciones de Alianza',
      position:'Coin ProofPath es una guía independiente y neutral frente a exchanges, centrada en onboarding seguro, prevención de estafas y hábitos prácticos de verificación para principiantes.',
      whyTitle:'Por qué importa',
      whyBody:'Los principiantes pueden equivocarse con billeteras, redes, transferencias, seed phrase, sitios falsos y verificación de información. Coin ProofPath ofrece una ruta gratuita con seguridad primero.',
      teachTitle:'Qué enseña Coin ProofPath',
      teachIntro:'Los socios apoyan educación práctica para que nuevos usuarios pausen, verifiquen y actúen con más seguridad.',
      opportunitiesTitle:'Oportunidades de alianza',
      opportunitiesIntro:'Los patrocinios se enfocan en educación pública, no en promoción de inversión ni preferencia de exchange.',
      shownTitle:'Cómo se muestran los socios',
      shownIntro:'La visibilidad de socios es transparente, moderada y marcada claramente como apoyo educativo.',
      logosTitle:'Área de logos de socios',
      logosBody:'Los logos aparecerán aquí cuando las alianzas estén confirmadas.',
      principlesTitle:'Principios de alianza',
      contactTitle:'Inicia una conversación',
      contactBody:'Para alianzas educativas, patrocinios o campañas de seguridad, contáctanos.',
      emailLabel:'Enviar email de alianza',
      metaTitle:'Colabora con Coin ProofPath | Educación de Seguridad Cripto',
      metaDesc:'Apoya educación cripto independiente y neutral para principiantes sobre billeteras, transferencias, prevención de estafas y verificación.',
      teach:[
        ['Bases de billetera','Comprende billeteras, claves y recuperación.'],
        ['Transferencias seguras','Revisa dirección, red, comisión y prueba pequeña.'],
        ['Prevención de estafas','Detecta sitios falsos, soporte falso y presión.'],
        ['Verificación de red','Alinea activo, red y plataforma receptora.'],
        ['Conciencia sobre stablecoins','Compara estructura, reservas y riesgos.'],
        ['Seguridad en DeFi','Lee solicitudes de conexión, aprobación y firma.'],
        ['Evaluación de proyectos','Busca evidencia más allá del hype o la imagen.'],
        ['Verificación de información','Revisa fuentes oficiales antes de confiar.']
      ],
      cards:[
        ['Socio de Seguridad para Principiantes','Apoya lecciones gratuitas sobre billeteras, transferencias y prevención de estafas.'],
        ['Campaña de Primera Transferencia Segura','Ayuda a nuevos usuarios a revisar direcciones, redes, comisiones y pruebas pequeñas.'],
        ['Centro de Prevención de Estafas','Apoya educación gratuita sobre sitios falsos, robo de seed phrase, DMs falsos y enlaces sospechosos.'],
        ['Checklist de Seguridad Patrocinado','Apoya listas prácticas antes de enviar cripto o conectar una billetera.'],
        ['PDF Global de Seguridad Cripto','Apoya un kit gratuito de seguridad para principiantes globales.'],
        ['Socio de Ruta de Aprendizaje Verificada','Apoya rutas desde seguridad inicial hasta verificación práctica.']
      ],
      shown:['Área de logo en página de socios','Nota de apoyo en página de seguridad','Nota en lista de verificación','Mención en PDF','Resumen mensual de impacto','Mención en campaña educativa'],
      principles:['Educación primero','Neutral frente a exchanges','Sin promociones engañosas','Sin promesas de inversión','Enfoque en seguridad y verificación','Etiqueta clara de patrocinio'],
      searchKeywords:['socios','alianza','patrocinio','educación','seguridad','contacto']
    },
    ar:{
      nav:'الشراكات',
      navSub:'دعم تعلم كريبتو أكثر أمانا',
      footerPartner:'الشراكات',
      footerContact:'تواصل',
      footerMission:'مهمة السلامة',
      homeTitle:'شارك مع Coin ProofPath',
      homeBody:'ادعم تعلما أكثر أمانا في الكريبتو.',
      homeCta:'استعرض خيارات الشراكة',
      eyebrow:'شراكات تعليمية',
      title:'شارك مع Coin ProofPath',
      subtitle:'ادعم تعلما أكثر أمانا للمبتدئين حول العالم.',
      primaryCta:'كن شريكا تعليميا',
      secondaryCta:'استعرض خيارات الشراكة',
      position:'Coin ProofPath دليل مستقل ومحايد عن منصات التداول، يركز على البداية الآمنة، منع الاحتيال، وعادات التحقق العملية للمبتدئين.',
      whyTitle:'لماذا هذا مهم',
      whyBody:'قد يخطئ المبتدئون في المحافظ، الشبكات، التحويلات، عبارة الاسترداد، المواقع المزيفة، والتحقق من المعلومات. يقدم Coin ProofPath مسارا مجانيا يضع السلامة قبل التصرف.',
      teachTitle:'ما الذي يدرسه Coin ProofPath',
      teachIntro:'يدعم الشركاء تعليما عمليا يساعد المستخدمين الجدد على التمهل والتحقق والتصرف بأمان أكبر.',
      opportunitiesTitle:'فرص الشراكة',
      opportunitiesIntro:'تتم صياغة الرعاية حول التعليم العام، لا حول ترويج الاستثمار أو تفضيل منصة معينة.',
      shownTitle:'كيف يظهر الشركاء',
      shownIntro:'ظهور الشركاء شفاف ومعتدل وموسوم بوضوح كدعم تعليمي.',
      logosTitle:'مساحة شعارات الشركاء',
      logosBody:'ستظهر شعارات الشركاء هنا عند تأكيد الشراكات.',
      principlesTitle:'مبادئ الشراكة',
      contactTitle:'ابدأ محادثة شراكة',
      contactBody:'لشراكات التعليم أو الرعاية أو حملات السلامة، تواصل معنا.',
      emailLabel:'إرسال بريد لفريق الشراكات',
      metaTitle:'شارك مع Coin ProofPath | تعليم سلامة الكريبتو',
      metaDesc:'ادعم تعليما مستقلا ومحايدا لسلامة الكريبتو للمبتدئين في المحافظ والتحويلات ومنع الاحتيال والتحقق.',
      teach:[
        ['أساسيات المحفظة','فهم المحافظ والمفاتيح ومسؤولية الاسترداد.'],
        ['تحويلات آمنة','تحقق من العنوان والشبكة والرسوم والاختبار الصغير.'],
        ['منع الاحتيال','اكتشف المواقع المزيفة والدعم المزيف والضغط.'],
        ['التحقق من الشبكة','طابق الأصل والشبكة والمنصة المستقبلة.'],
        ['وعي بالعملات المستقرة','قارن البنية والاحتياطات وملاحظات المخاطر.'],
        ['سلامة موافقات DeFi','اقرأ طلبات الاتصال والموافقة والتوقيع.'],
        ['تقييم المشاريع','ابحث عن الدليل لا الضجة أو الصورة فقط.'],
        ['التحقق من المعلومات','راجع المصادر الرسمية قبل الثقة.']
      ],
      cards:[
        ['شريك سلامة المبتدئين','يدعم دروسا مجانية عن المحافظ والتحويلات ومنع الاحتيال.'],
        ['حملة أول تحويل آمن','تساعد المستخدمين الجدد على فحص العناوين والشبكات والرسوم والتحويل التجريبي.'],
        ['مركز منع الاحتيال','يدعم تعليما مجانيا عن المواقع المزيفة وسرقة عبارة الاسترداد ورسائل الدعم المزيفة والروابط المشبوهة.'],
        ['قائمة سلامة مدعومة','يدعم قوائم عملية قبل إرسال الكريبتو أو ربط المحفظة.'],
        ['PDF عالمي لسلامة الكريبتو','يدعم حزمة سلامة مجانية للمبتدئين حول العالم.'],
        ['شريك مسار تعلم موثق','يدعم مسارات منظمة من سلامة المبتدئين إلى التحقق العملي.']
      ],
      shown:['مساحة شعار في صفحة الشراكات','ملاحظة دعم في صفحة السلامة','ملاحظة دعم في القائمة','ذكر الدعم في PDF','ملخص أثر تعلم شهري','ذكر في حملة تعليمية'],
      principles:['التعليم أولا','حياد تجاه المنصات','لا عروض مضللة','لا وعود بعوائد استثمار','تركيز على السلامة والتحقق','وسم رعاية واضح'],
      searchKeywords:['شراكة','رعاية','تعليم','سلامة','تواصل']
    },
    vi:{
      nav:'Đối tác',
      navSub:'Hỗ trợ học crypto an toàn.',
      footerPartner:'Đối tác',
      footerContact:'Liên hệ',
      footerMission:'Sứ mệnh an toàn',
      homeTitle:'Hợp tác với Coin ProofPath',
      homeBody:'Hỗ trợ học crypto an toàn hơn.',
      homeCta:'Xem lựa chọn hợp tác',
      eyebrow:'Hợp tác giáo dục',
      title:'Hợp tác với Coin ProofPath',
      subtitle:'Hỗ trợ người mới trên toàn cầu học crypto an toàn hơn.',
      primaryCta:'Trở thành đối tác giáo dục',
      secondaryCta:'Xem lựa chọn hợp tác',
      position:'Coin ProofPath là hướng dẫn học crypto độc lập, trung lập với sàn giao dịch, tập trung vào onboarding an toàn, phòng tránh lừa đảo và thói quen xác minh thực tế cho người mới.',
      whyTitle:'Vì sao điều này quan trọng',
      whyBody:'Người mới dễ mắc lỗi với ví, mạng, chuyển tiền, seed phrase, trang giả và xác minh thông tin. Coin ProofPath cung cấp lộ trình miễn phí đặt an toàn trước hành động.',
      teachTitle:'Coin ProofPath dạy gì',
      teachIntro:'Đối tác hỗ trợ giáo dục thực tế giúp người dùng mới chậm lại, xác minh và hành động an toàn hơn.',
      opportunitiesTitle:'Cơ hội hợp tác',
      opportunitiesIntro:'Tài trợ được đặt trong bối cảnh giáo dục công cộng, không phải quảng bá đầu tư hay ưu tiên sàn giao dịch.',
      shownTitle:'Đối tác được hiển thị thế nào',
      shownIntro:'Việc hiển thị đối tác minh bạch, vừa phải và ghi rõ là hỗ trợ giáo dục.',
      logosTitle:'Khu vực logo đối tác',
      logosBody:'Logo đối tác sẽ xuất hiện tại đây khi quan hệ hợp tác được xác nhận.',
      principlesTitle:'Nguyên tắc hợp tác',
      contactTitle:'Bắt đầu trao đổi hợp tác',
      contactBody:'Liên hệ với chúng tôi về hợp tác giáo dục, tài trợ hoặc chiến dịch an toàn.',
      emailLabel:'Gửi email cho nhóm hợp tác',
      metaTitle:'Hợp tác với Coin ProofPath | Giáo dục An toàn Crypto',
      metaDesc:'Hỗ trợ giáo dục an toàn crypto độc lập và trung lập cho người mới học về ví, chuyển tiền, phòng tránh lừa đảo và xác minh.',
      teach:[
        ['Cơ bản về ví','Hiểu ví, khóa và trách nhiệm khôi phục.'],
        ['Chuyển tiền an toàn','Kiểm tra địa chỉ, mạng, phí và thử số nhỏ.'],
        ['Phòng tránh lừa đảo','Nhận biết trang giả, hỗ trợ giả và áp lực.'],
        ['Xác minh mạng','Khớp tài sản, mạng và nền tảng nhận.'],
        ['Hiểu về stablecoin','So sánh cấu trúc, dự trữ và rủi ro.'],
        ['An toàn phê duyệt DeFi','Đọc yêu cầu kết nối, phê duyệt và ký.'],
        ['Đánh giá dự án','Tìm bằng chứng thay vì chỉ hype hoặc hình ảnh.'],
        ['Xác minh thông tin','Kiểm tra nguồn chính thức trước khi tin.']
      ],
      cards:[
        ['Đối tác An toàn Người mới','Hỗ trợ bài học miễn phí về ví, chuyển tiền và phòng tránh lừa đảo.'],
        ['Chiến dịch Chuyển tiền Đầu tiên An toàn','Giúp người dùng mới học kiểm tra địa chỉ, mạng, phí và chuyển thử số nhỏ.'],
        ['Trung tâm Phòng tránh Lừa đảo','Hỗ trợ giáo dục miễn phí về trang giả, đánh cắp seed phrase, DM hỗ trợ giả và link nghi ngờ.'],
        ['Checklist An toàn được Tài trợ','Hỗ trợ checklist thực tế trước khi gửi crypto hoặc kết nối ví.'],
        ['PDF An toàn Crypto Toàn cầu','Hỗ trợ bộ tài liệu an toàn miễn phí cho người học toàn cầu.'],
        ['Đối tác Lộ trình Học đã Xác minh','Hỗ trợ lộ trình từ an toàn cơ bản đến xác minh thực tế.']
      ],
      shown:['Khu vực logo trên trang đối tác','Ghi chú hỗ trợ ở trang an toàn','Ghi chú hỗ trợ danh sách kiểm tra','Nhắc đến hỗ trợ trong PDF','Tóm tắt tác động học tập hàng tháng','Nhắc đến trong chiến dịch giáo dục'],
      principles:['Giáo dục trước tiên','Trung lập với sàn giao dịch','Không quảng bá gây hiểu lầm','Không cam kết lợi nhuận đầu tư','Tập trung vào an toàn và xác minh','Ghi nhãn tài trợ rõ ràng'],
      searchKeywords:['đối tác','tài trợ','giáo dục','an toàn','liên hệ']
    },
    ha:{
      nav:'Hadin gwiwa',
      navSub:'Tallafa koyon crypto cikin aminci.',
      footerPartner:'Hadin gwiwa',
      footerContact:'Tuntuba',
      footerMission:'Manufar tsaro',
      homeTitle:'Yi hadin gwiwa da Coin ProofPath',
      homeBody:'Tallafa koyon crypto cikin aminci.',
      homeCta:'Duba zabin hadin gwiwa',
      eyebrow:'Hadin gwiwar ilimi',
      title:'Yi hadin gwiwa da Coin ProofPath',
      subtitle:'Tallafa wa masu farawa a duniya su koyi crypto cikin aminci.',
      primaryCta:'Zama abokin ilimi',
      secondaryCta:'Duba zabin hadin gwiwa',
      position:'Coin ProofPath jagorar koyon crypto ce mai zaman kanta, ba ta karkata ga exchange ba, tana mai da hankali kan fara amfani cikin aminci, kariya daga zamba, da aladar tabbatarwa ga masu farawa.',
      whyTitle:'Dalilin da ya sa yake da muhimmanci',
      whyBody:'Masu farawa kan yi kuskure a wallet, network, transfer, seed phrase, shafin karya, da tabbatar da bayanai. Coin ProofPath tana ba da hanyar koyo kyauta wadda tsaro ke gaba.',
      teachTitle:'Abin da Coin ProofPath ke koyarwa',
      teachIntro:'Abokan hadin gwiwa suna tallafa ilimi na aiki wanda ke sa sabbin masu amfani su tsaya, su tabbatar, sannan su yi aiki cikin aminci.',
      opportunitiesTitle:'Damar hadin gwiwa',
      opportunitiesIntro:"Tallafi yana kewaye da ilimin jama'a, ba tallan zuba jari ko fifita exchange ba.",
      shownTitle:'Yadda ake nuna abokan hadin gwiwa',
      shownIntro:'Bayyanar abokan hadin gwiwa za ta kasance a fili, cikin nutsuwa, kuma da alamar tallafin ilimi.',
      logosTitle:'Wurin tambarin abokan hadin gwiwa',
      logosBody:'Tambarin abokan hadin gwiwa zai bayyana a nan bayan an tabbatar da hadin gwiwa.',
      principlesTitle:'Kaidojin hadin gwiwa',
      contactTitle:'Fara tattaunawar hadin gwiwa',
      contactBody:'Don hadin gwiwar ilimi, tallafi, ko kamfen din tsaro, tuntube mu.',
      emailLabel:'Aika email ga tawagar hadin gwiwa',
      metaTitle:'Yi hadin gwiwa da Coin ProofPath | Ilimin Tsaron Crypto',
      metaDesc:'Tallafa ilimin tsaron crypto mai zaman kansa ga masu farawa a kan wallet, transfer, kariya daga zamba, da tabbatarwa.',
      teach:[
        ['Tushen wallet','Fahimci wallet, keys, da alhakin dawo da su.'],
        ['Transfer cikin aminci','Duba address, network, fee, da karamin gwaji.'],
        ['Kariya daga zamba','Gane shafi na karya, tallafi na karya, da matsin lamba.'],
        ['Tabbatar da network','Daidaita kadara, network, da inda za a karba.'],
        ['Fahimtar stablecoin','Kwatanta tsari, ajiya, da bayanin hadari.'],
        ['Tsaron amincewar DeFi','Karanta bukatar connect, approve, da sign.'],
        ['Kimanta project','Nemi hujja fiye da hayaniya ko hoto.'],
        ['Tabbatar da bayani','Duba tushen hukuma kafin yarda.']
      ],
      cards:[
        ['Abokin Tsaron Masu Farawa','Tallafa darussa kyauta kan wallet, transfer, da kariya daga zamba.'],
        ['Kamfen Transfer Na Farko Cikin Aminci','Taimaka sabbin masu amfani su duba address, network, fee, da karamin transfer na gwaji.'],
        ['Cibiyar Kariya Daga Zamba','Tallafa ilimi kyauta kan shafukan karya, satar seed phrase, DM na tallafi na karya, da link masu tuhuma.'],
        ['Jerin Duba Tsaro Mai Tallafi','Tallafa jerin duba kafin aika crypto ko hada wallet.'],
        ['PDF Tsaron Crypto Na Duniya','Tallafa kayan tsaro kyauta ga masu koyo a duniya.'],
        ['Abokin Hanyar Koyo Mai Tabbatarwa','Tallafa hanya daga tsaron farawa zuwa tabbatarwa ta aiki.']
      ],
      shown:['Wurin logo a shafin hadin gwiwa','Bayanin tallafi a shafin tsaro','Bayanin tallafi a jerin dubawa','Ambaton tallafi a PDF','Takaitaccen tasirin koyo na wata','Ambato a kamfen din ilimi'],
      principles:['Ilimi ne farko','Babu karkata ga exchange','Babu tallace-tallace masu rudani','Babu alkawarin ribar zuba jari','Mayar da hankali kan tsaro da tabbatarwa','Alamar sponsor a fili'],
      searchKeywords:['hadi','tallafi','ilimi','tsaro','tuntuba']
    }
  };
  COPY.br = COPY.pt;

  function copy(){
    var lang = currentLocale();
    return COPY[lang] || COPY.en;
  }

  function isRtl(){
    return currentLocale() === 'ar';
  }

  function mailto(){
    var subject = currentLocale() === 'ko' ? 'Coin ProofPath 파트너십 문의' : 'Partnership with Coin ProofPath';
    return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject);
  }

  function getBasePrefix(){
    try{
      return (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
    }catch(err){
      return './';
    }
  }

  function routeToPartner(){
    return getBasePrefix() + '#partner';
  }

  function renderItemGrid(items, cls){
    return (items || []).map(function(item, index){
      return '<article class="' + cls + '">'
        + '<div class="partner-card-index">' + esc(String(index + 1).padStart(2, '0')) + '</div>'
        + '<h3>' + esc(item[0]) + '</h3>'
        + '<p>' + esc(item[1]) + '</p>'
        + '</article>';
    }).join('');
  }

  function renderChipList(items){
    return (items || []).map(function(item){
      return '<li><span></span>' + esc(item) + '</li>';
    }).join('');
  }

  function partnerVisualTitle(value){
    if(Array.isArray(value)) return value[0];
    return String(value || '').split('|')[0];
  }

  function renderPartnerVisualIcon(index){
    var icons = [
      '<path d="M7 11l3 3 7-8"/><path d="M12 3l7 3v5c0 4.6-3 7.1-7 8.8C8 18.1 5 15.6 5 11V6l7-3z"/>',
      '<rect x="4" y="6" width="16" height="12" rx="3"/><path d="M8 10h6"/><path d="M16 14h.01"/>',
      '<path d="M4 7h16"/><path d="M7 4h10v16H7z"/><path d="M10 10h4"/><path d="M10 14h4"/>',
      '<circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-5"/>',
      '<path d="M5 16h14"/><path d="M7 12l5-5 5 5"/><path d="M12 7v9"/>'
    ];
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + icons[index % icons.length] + '</svg>';
  }

  function renderPartnerVisualCard(label, index){
    return '<article class="partner-visual-card"><span class="partner-visual-icon">' + renderPartnerVisualIcon(index) + '</span><strong>' + esc(partnerVisualTitle(label)) + '</strong></article>';
  }

  function renderPartnerVisualList(items, limit){
    return (items || []).slice(0, limit || 6).map(renderPartnerVisualCard).join('');
  }

  function renderPartnerHeroVisual(p){
    return '<div class="partner-visual partner-hero-visual" aria-label="' + esc(p.title) + '">'
      + '<div class="partner-browser">'
      + '<div class="partner-browser-bar"><span></span><span></span><span></span></div>'
      + '<div class="partner-browser-body">'
      + '<div class="partner-browser-main"><strong>' + esc(BRAND) + '</strong><div class="partner-visual-lines"><span></span><span></span><span></span></div></div>'
      + '<div class="partner-visual-grid compact">' + renderPartnerVisualList(p.teach, 4) + '</div>'
      + '</div></div>'
      + '<div class="partner-signal-dots"><span></span><span></span><span></span></div>'
      + '</div>';
  }

  function renderPartnerSolutionVisual(p){
    return '<div class="partner-visual partner-system-visual" aria-label="' + esc(p.teachTitle) + '">'
      + '<div class="partner-system-core"><strong>' + esc(BRAND) + '</strong></div>'
      + '<div class="partner-system-ring">' + renderPartnerVisualList(p.teach, 6) + '</div>'
      + '</div>';
  }

  function renderPartnerSponsorFlowVisual(p){
    return '<div class="partner-visual partner-flow-visual" aria-label="' + esc(p.opportunitiesTitle) + '">'
      + '<div class="partner-flow-row">' + renderPartnerVisualList(p.cards, 5) + '</div>'
      + '</div>';
  }

  function renderPartnerProductVisual(p){
    var platformCards = (p.shown || []).slice(0, 4).concat((p.principles || []).slice(0, 2));
    return '<div class="partner-visual partner-product-visual" aria-label="' + esc(p.shownTitle) + '">'
      + '<div class="partner-browser">'
      + '<div class="partner-browser-bar"><span></span><span></span><span></span></div>'
      + '<div class="partner-product-body">'
      + '<div class="partner-product-sidebar"><span></span><span></span><span></span></div>'
      + '<div class="partner-product-grid">' + renderPartnerVisualList(platformCards, 6) + '</div>'
      + '</div></div></div>';
  }

  function renderPartnerPage(){
    var p = copy();
    return '<div class="partner-page-shell" dir="' + (isRtl() ? 'rtl' : 'ltr') + '">'
      + '<section class="partner-hero">'
      + '<div class="partner-eyebrow">' + esc(p.eyebrow) + '</div>'
      + '<h1>' + esc(p.title) + '</h1>'
      + '<p class="partner-hero-subtitle">' + esc(p.subtitle) + '</p>'
      + '<p class="partner-position">' + esc(p.position) + '</p>'
      + '<div class="partner-hero-actions">'
      + '<a class="partner-btn is-primary" href="' + esc(mailto()) + '">' + esc(p.primaryCta) + '</a>'
      + '<a class="partner-btn" href="#partner-options">' + esc(p.secondaryCta) + '</a>'
      + '</div>'
      + renderPartnerHeroVisual(p)
      + '</section>'
      + '<section class="partner-section partner-split">'
      + '<div><div class="partner-section-kicker">' + esc(BRAND) + '</div><h2>' + esc(p.whyTitle) + '</h2></div>'
      + '<p>' + esc(p.whyBody) + '</p>'
      + '</section>'
      + '<section class="partner-section">'
      + '<div class="partner-section-head"><div><div class="partner-section-kicker">' + esc(BRAND) + '</div><h2>' + esc(p.teachTitle) + '</h2></div><p>' + esc(p.teachIntro) + '</p></div>'
      + renderPartnerSolutionVisual(p)
      + '<div class="partner-teach-grid">' + renderItemGrid(p.teach, 'partner-teach-card') + '</div>'
      + renderPartnerProductVisual(p)
      + '</section>'
      + '<section class="partner-section" id="partner-options">'
      + '<div class="partner-section-head"><div><div class="partner-section-kicker">' + esc(p.eyebrow) + '</div><h2>' + esc(p.opportunitiesTitle) + '</h2></div><p>' + esc(p.opportunitiesIntro) + '</p></div>'
      + renderPartnerSponsorFlowVisual(p)
      + '<div class="partner-option-grid">' + renderItemGrid(p.cards, 'partner-option-card') + '</div>'
      + '</section>'
      + '<section class="partner-section partner-display-grid">'
      + '<div class="partner-logo-placeholder"><strong>' + esc(p.logosTitle) + '</strong><span>' + esc(p.logosBody) + '</span></div>'
      + '<div><div class="partner-section-kicker">' + esc(BRAND) + '</div><h2>' + esc(p.shownTitle) + '</h2><p>' + esc(p.shownIntro) + '</p><ul class="partner-check-list">' + renderChipList(p.shown) + '</ul></div>'
      + '</section>'
      + '<section class="partner-section partner-principles">'
      + '<div><div class="partner-section-kicker">' + esc(BRAND) + '</div><h2>' + esc(p.principlesTitle) + '</h2></div>'
      + '<ul class="partner-principle-list">' + renderChipList(p.principles) + '</ul>'
      + '</section>'
      + '<section class="partner-contact">'
      + '<div><div class="partner-section-kicker">' + esc(p.footerContact) + '</div><h2>' + esc(p.contactTitle) + '</h2><p>' + esc(p.contactBody) + '</p></div>'
      + '<a class="partner-btn is-primary" href="' + esc(mailto()) + '">' + esc(p.emailLabel) + '</a>'
      + '</section>'
      + '</div>';
  }

  function ensureStyles(){
    if(document.getElementById('coinProofPathPartnerStyles')) return;
    var style = document.createElement('style');
    style.id = 'coinProofPathPartnerStyles';
    style.textContent = [
      '.partner-page-shell{display:flex;flex-direction:column;gap:20px}',
      '.partner-hero,.partner-section,.partner-contact{position:relative;overflow:hidden;border:1px solid var(--line);border-radius:24px;background:linear-gradient(135deg,#fff 0%,#f8fbff 62%,#f3f6f1 100%);box-shadow:var(--shadow);padding:clamp(20px,4vw,36px)}',
      '.partner-hero:before,.partner-section:before{content:"";position:absolute;inset:auto -80px -120px auto;width:260px;height:260px;border-radius:999px;background:rgba(199,171,84,.12);pointer-events:none}',
      '.partner-hero>* ,.partner-section>* ,.partner-contact>*{position:relative;z-index:1}',
      '.partner-eyebrow,.partner-section-kicker{display:inline-flex;align-items:center;width:max-content;max-width:100%;border:1px solid rgba(30,64,99,.14);border-radius:999px;background:#eef4fb;color:#244461;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:7px 10px;margin-bottom:10px}',
      '.partner-hero h1,.partner-section h2,.partner-contact h2{margin:0;color:var(--text);letter-spacing:-.04em;line-height:1.08}',
      '.partner-hero h1{max-width:860px;font-size:clamp(2rem,5vw,4rem)}',
      '.partner-section h2,.partner-contact h2{font-size:clamp(1.35rem,2.6vw,2.15rem)}',
      '.partner-hero-subtitle{max-width:760px;margin:14px 0 0;color:var(--navy);font-size:clamp(1.05rem,2vw,1.35rem);font-weight:800;line-height:1.45}',
      '.partner-position,.partner-section p,.partner-contact p{max-width:820px;color:var(--text-2);font-size:.98rem;line-height:1.75;margin:12px 0 0}',
      '.partner-hero-actions,.partner-contact{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}',
      '.partner-hero-actions{margin-top:22px;justify-content:flex-start}',
      '.partner-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--navy);font-weight:900;text-decoration:none;padding:0 18px;box-shadow:0 10px 24px rgba(20,38,64,.08);transition:transform .16s var(--ease),box-shadow .16s var(--ease),border-color .16s var(--ease)}',
      '.partner-btn:hover{transform:translateY(-1px);box-shadow:0 16px 32px rgba(20,38,64,.12);border-color:rgba(30,64,99,.2)}',
      '.partner-btn.is-primary{background:linear-gradient(180deg,var(--navy),var(--navy-2));color:#fff;border-color:rgba(24,42,69,.2)}',
      '.partner-split,.partner-display-grid,.partner-principles{display:grid;grid-template-columns:minmax(220px,.8fr) minmax(0,1.2fr);gap:22px;align-items:start}',
      '.partner-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:18px}',
      '.partner-section-head p{max-width:500px;margin:0}',
      '.partner-teach-grid,.partner-option-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}',
      '.partner-option-grid{grid-template-columns:repeat(3,minmax(0,1fr))}',
      '.partner-teach-card,.partner-option-card{position:relative;border:1px solid rgba(30,64,99,.12);border-radius:18px;background:rgba(255,255,255,.86);padding:18px;box-shadow:0 8px 22px rgba(20,38,64,.06);min-height:128px}',
      '.partner-card-index{font-family:"IBM Plex Mono",monospace;color:#6f7f92;font-size:.72rem;font-weight:900;margin-bottom:10px}',
      '.partner-teach-card h3,.partner-option-card h3{margin:0;color:var(--text);font-size:1rem;line-height:1.32;letter-spacing:-.02em}',
      '.partner-teach-card p,.partner-option-card p{margin:8px 0 0;color:var(--text-2);font-size:.86rem;line-height:1.62}',
      '.partner-logo-placeholder{min-height:220px;border:1px dashed rgba(30,64,99,.22);border-radius:22px;background:linear-gradient(135deg,rgba(238,244,251,.78),rgba(255,250,238,.76));display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;padding:22px;color:var(--text-2)}',
      '.partner-logo-placeholder strong{color:var(--navy);font-size:1rem}',
      '.partner-logo-placeholder span{max-width:360px;font-size:.88rem;line-height:1.55}',
      '.partner-visual{position:relative;margin:20px 0;border:1px solid rgba(30,64,99,.12);border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.9),rgba(234,243,255,.78));box-shadow:0 16px 42px rgba(20,38,64,.08);padding:clamp(16px,3vw,24px);overflow:hidden}',
      '.partner-visual:before{content:"";position:absolute;inset:-90px auto auto -60px;width:220px;height:220px;border-radius:999px;background:rgba(58,126,166,.1)}',
      '.partner-visual:after{content:"";position:absolute;inset:auto -70px -90px auto;width:230px;height:230px;border-radius:999px;background:rgba(96,165,150,.13)}',
      '.partner-visual>*{position:relative;z-index:1}',
      '.partner-browser{border:1px solid rgba(30,64,99,.14);border-radius:20px;background:rgba(255,255,255,.86);box-shadow:0 18px 34px rgba(20,38,64,.09);overflow:hidden}',
      '.partner-browser-bar{display:flex;gap:6px;align-items:center;border-bottom:1px solid rgba(30,64,99,.1);padding:12px;background:linear-gradient(180deg,#f8fbff,#eef5fc)}',
      '.partner-browser-bar span{width:9px;height:9px;border-radius:999px;background:#9fb3c8}.partner-browser-bar span:nth-child(2){background:#7aa38b}.partner-browser-bar span:nth-child(3){background:#d7b16b}',
      '.partner-browser-body{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.35fr);gap:14px;padding:16px;align-items:stretch}',
      '.partner-browser-main{border-radius:18px;background:linear-gradient(135deg,#18304f,#2f5f91);color:#fff;padding:18px;display:flex;flex-direction:column;justify-content:space-between;min-height:190px}',
      '.partner-browser-main strong{font-size:clamp(1.2rem,2vw,1.8rem);letter-spacing:-.04em}.partner-visual-lines{display:grid;gap:8px}.partner-visual-lines span{height:9px;border-radius:999px;background:rgba(255,255,255,.52)}.partner-visual-lines span:nth-child(2){width:76%}.partner-visual-lines span:nth-child(3){width:54%}',
      '.partner-visual-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.partner-visual-grid.compact .partner-visual-card{min-height:84px}',
      '.partner-visual-card{border:1px solid rgba(30,64,99,.12);border-radius:18px;background:rgba(255,255,255,.9);padding:13px;display:flex;flex-direction:column;gap:10px;min-height:98px;box-shadow:0 8px 20px rgba(20,38,64,.05)}',
      '.partner-visual-card strong{color:var(--text);font-size:.88rem;line-height:1.32;letter-spacing:-.02em;word-break:keep-all;overflow-wrap:break-word}',
      '.partner-visual-icon{width:34px;height:34px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;background:#eef6fb;color:#2f5f91;box-shadow:inset 0 0 0 1px rgba(47,95,145,.1)}',
      '.partner-visual-icon svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
      '.partner-signal-dots{position:absolute;right:22px;top:22px;display:grid;gap:9px}.partner-signal-dots span{width:12px;height:12px;border-radius:999px;background:#7aa38b;box-shadow:0 0 0 8px rgba(122,163,139,.14)}.partner-signal-dots span:nth-child(2){background:#d7b16b}.partner-signal-dots span:nth-child(3){background:#2f5f91}',
      '.partner-system-visual{display:grid;grid-template-columns:minmax(180px,.45fr) minmax(0,1fr);gap:18px;align-items:center}.partner-system-core{min-height:180px;border-radius:24px;background:linear-gradient(135deg,#18304f,#2f5f91);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;padding:18px;box-shadow:0 18px 36px rgba(24,48,79,.18)}.partner-system-core strong{font-size:clamp(1.25rem,2.4vw,2rem);letter-spacing:-.04em}.partner-system-ring{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}',
      '.partner-flow-row{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.partner-flow-row .partner-visual-card{position:relative;min-height:112px}.partner-flow-row .partner-visual-card:not(:last-child):after{content:"";position:absolute;right:-13px;top:50%;width:14px;height:2px;background:linear-gradient(90deg,#8fb0cf,#7aa38b)}',
      '.partner-product-body{display:grid;grid-template-columns:120px minmax(0,1fr);gap:14px;padding:16px}.partner-product-sidebar{border-radius:16px;background:#eef5fc;padding:12px;display:grid;gap:10px;align-content:start}.partner-product-sidebar span{height:28px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px rgba(30,64,99,.08)}.partner-product-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}',
      '.partner-check-list,.partner-principle-list{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:10px}',
      '.partner-principle-list{grid-template-columns:repeat(3,minmax(0,1fr));margin:0}',
      '.partner-check-list li,.partner-principle-list li{display:flex;align-items:flex-start;gap:9px;border:1px solid rgba(30,64,99,.1);border-radius:14px;background:rgba(255,255,255,.78);padding:11px 12px;color:var(--text);font-size:.88rem;font-weight:800;line-height:1.45}',
      '.partner-check-list li span,.partner-principle-list li span{width:8px;height:8px;flex:0 0 auto;border-radius:999px;background:var(--green);margin-top:.46em;box-shadow:0 0 0 4px rgba(122,163,139,.14)}',
      '.partner-home-entry{margin-top:18px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(135deg,#fff,#f2f7fb);padding:18px;display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;box-shadow:0 10px 26px rgba(20,38,64,.07)}',
      '.partner-home-entry h3{margin:0;color:var(--text);font-size:1.05rem;letter-spacing:-.02em}',
      '.partner-home-entry p{margin:5px 0 0;color:var(--text-2);font-size:.86rem;line-height:1.55}',
      '.partner-home-entry button{appearance:none;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-weight:900;padding:11px 15px;cursor:pointer}',
      '.partner-sidebar-links{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:10px}',
      '.partner-sidebar-links button,.partner-sidebar-links a{appearance:none;border:1px solid rgba(30,64,99,.12);border-radius:999px;background:#fff;color:var(--text-2);font:inherit;font-size:.68rem;font-weight:800;padding:6px 8px;text-decoration:none;cursor:pointer}',
      '.partner-sidebar-nav .nav-num{background:#eef4fb;color:var(--navy)}',
      '#searchOverlay #searchResults .search-result-badge.partner{background:var(--green)}',
      'html[lang="ar"] .partner-page-shell{text-align:right}',
      '@media (max-width:900px){.partner-option-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.partner-split,.partner-display-grid,.partner-principles{grid-template-columns:1fr}.partner-principle-list{grid-template-columns:repeat(2,minmax(0,1fr))}.partner-section-head{align-items:flex-start;flex-direction:column}.partner-contact{align-items:flex-start}.partner-browser-body,.partner-system-visual,.partner-product-body{grid-template-columns:1fr}.partner-flow-row{grid-template-columns:repeat(2,minmax(0,1fr))}.partner-system-ring,.partner-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.partner-flow-row .partner-visual-card:after{display:none}}',
      '@media (max-width:620px){.partner-hero,.partner-section,.partner-contact{border-radius:18px;padding:18px}.partner-teach-grid,.partner-option-grid,.partner-principle-list{grid-template-columns:1fr}.partner-home-entry{grid-template-columns:1fr}.partner-home-entry button{width:100%}.partner-btn{width:100%}.partner-visual{border-radius:18px;margin:18px 0;padding:14px}.partner-visual-grid,.partner-flow-row,.partner-system-ring,.partner-product-grid{grid-template-columns:1fr}.partner-browser-main{min-height:150px}.partner-product-sidebar{display:none}}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensurePanel(){
    var panel = document.getElementById('partnerPanel');
    if(panel) return panel;
    panel = document.createElement('section');
    panel.className = 'page-content';
    panel.id = 'partnerPanel';
    var anchor = document.getElementById('updatesPanel') || document.getElementById('sourcesPanel') || document.getElementById('homePanel');
    if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(panel, anchor.nextSibling);
    return panel;
  }

  function updatePartnerMeta(active){
    if(!active) return;
    var p = copy();
    try{ document.title = p.metaTitle; }catch(err){}
    var desc = document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content', p.metaDesc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if(ogTitle) ogTitle.setAttribute('content', p.title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if(ogDesc) ogDesc.setAttribute('content', p.subtitle);
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if(twTitle) twTitle.setAttribute('content', p.title);
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if(twDesc) twDesc.setAttribute('content', p.subtitle);
  }

  function showPartnerPage(){
    ensureStyles();
    var panel = ensurePanel();
    if(!panel) return;
    panel.innerHTML = renderPartnerPage();
    document.querySelectorAll('.lesson-content, .page-content').forEach(function(el){
      el.classList.remove('active');
    });
    panel.classList.add('active');
    try{ currentPage = 'partner'; }catch(err){}
    try{ currentLesson = (typeof currentLesson === 'number' ? currentLesson : 0); }catch(err){}
    try{ setBreadcrumb(copy().nav); }catch(err){}
    try{ activateSidebar('partner', null); }catch(err){}
    try{ updateProgress(); }catch(err){}
    var sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.remove('open');
    updatePartnerMeta(true);
    try{ document.body.dataset.page = 'partner'; }catch(err){}
    if(window.location && window.location.hash !== '#partner'){
      try{ window.history.replaceState(null, '', '#partner'); }catch(err){}
    }
    window.scrollTo({ top:0, behavior:'smooth' });
  }

  function renderHomeEntry(){
    var p = copy();
    return '<section class="partner-home-entry" data-partner-entry>'
      + '<div><h3>' + esc(p.homeTitle) + '</h3><p>' + esc(p.homeBody) + '</p></div>'
      + '<button type="button" data-partner-open>' + esc(p.homeCta) + '</button>'
      + '</section>';
  }

  function syncHomeEntry(){
    ensureStyles();
    var home = document.getElementById('homePanel');
    if(!home) return;
    var old = home.querySelector('[data-partner-entry]');
    if(old) old.remove();
    home.insertAdjacentHTML('beforeend', renderHomeEntry());
    var btn = home.querySelector('[data-partner-entry] [data-partner-open]');
    if(btn && !btn.__partnerBound){
      btn.__partnerBound = true;
      btn.addEventListener('click', function(event){
        event.preventDefault();
        showPartnerPage();
      });
    }
  }

  function syncSidebarEntry(){
    ensureStyles();
    var p = copy();
    var sidebar = document.getElementById('sidebar');
    if(!sidebar) return;
    var oldNav = sidebar.querySelector('[data-page="partner"]');
    if(!oldNav){
      var updates = sidebar.querySelector('.lesson-nav-item[data-page="updates"]');
      var nav = document.createElement('a');
      nav.className = 'lesson-nav-item partner-sidebar-nav';
      nav.setAttribute('data-page', 'partner');
      nav.setAttribute('href', routeToPartner());
      nav.innerHTML = '<div class="nav-num">P</div><div><div class="nav-title"></div><div class="nav-sub"></div></div>';
      if(updates && updates.parentNode) updates.parentNode.insertBefore(nav, updates.nextSibling);
      oldNav = nav;
    }
    oldNav.querySelector('.nav-title').textContent = p.nav;
    oldNav.querySelector('.nav-sub').textContent = p.navSub;
    if(!oldNav.__partnerBound){
      oldNav.__partnerBound = true;
      oldNav.addEventListener('click', function(event){
        event.preventDefault();
        showPartnerPage();
      });
    }
    var footer = sidebar.querySelector('.sidebar-footer');
    if(!footer) return;
    var links = footer.querySelector('[data-partner-footer-links]');
    if(!links){
      links = document.createElement('div');
      links.className = 'partner-sidebar-links';
      links.setAttribute('data-partner-footer-links', 'true');
      links.innerHTML = '<button type="button" data-partner-open-footer></button><a data-partner-contact></a><button type="button" data-partner-mission></button>';
      footer.appendChild(links);
    }
    var partner = links.querySelector('[data-partner-open-footer]');
    var contact = links.querySelector('[data-partner-contact]');
    var mission = links.querySelector('[data-partner-mission]');
    if(partner) partner.textContent = p.footerPartner;
    if(contact){
      contact.textContent = p.footerContact;
      contact.setAttribute('href', mailto());
    }
    if(mission) mission.textContent = p.footerMission;
    [partner, mission].forEach(function(node){
      if(node && !node.__partnerBound){
        node.__partnerBound = true;
        node.addEventListener('click', function(event){
          event.preventDefault();
          showPartnerPage();
        });
      }
    });
  }

  function syncPartnerEntrypoints(){
    ensureStyles();
    syncSidebarEntry();
    syncHomeEntry();
    if(typeof currentPage === 'string' && currentPage === 'partner'){
      var panel = ensurePanel();
      if(panel) panel.innerHTML = renderPartnerPage();
      updatePartnerMeta(true);
    }
  }

  function normalize(value){
    value = String(value || '').toLowerCase();
    try{ value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }catch(err){}
    return value.replace(/\s+/g, ' ').trim();
  }

  function shouldShowPartnerSearch(query){
    var q = normalize(query);
    if(!q) return false;
    var p = copy();
    var words = ['partner','partnership','sponsor','sponsorship','education','safety','contact'].concat(p.searchKeywords || []);
    return words.some(function(word){
      var w = normalize(word);
      return w && (q.indexOf(w) !== -1 || w.indexOf(q) !== -1);
    });
  }

  function enhanceSearchResults(query){
    var box = document.getElementById('searchResults');
    if(!box || !shouldShowPartnerSearch(query) || box.querySelector('[data-partner-search-result]')) return;
    var p = copy();
    var html = '<button type="button" class="search-result-item search-result-button" data-partner-search-result>'
      + '<span class="search-result-badge partner">P</span>'
      + '<span class="search-result-body"><span class="search-result-title">' + esc(p.title) + '</span>'
      + '<span class="search-result-meta">' + esc(p.eyebrow) + '</span>'
      + '<span class="search-result-desc">' + esc(p.navSub) + '</span></span></button>';
    box.insertAdjacentHTML('afterbegin', html);
    var result = box.querySelector('[data-partner-search-result]');
    if(result){
      result.addEventListener('click', function(){
        if(typeof closeSearch === 'function') closeSearch();
        showPartnerPage();
      });
    }
  }

  function wrapSearch(){
    var original = window.renderSearchAutocompleteFinal || window.renderPatchedSearchResults;
    if(typeof original !== 'function' || original.__partnerSearchWrapped) return;
    var wrapped = function(query){
      var result = original.apply(this, arguments);
      enhanceSearchResults(query);
      return result;
    };
    wrapped.__partnerSearchWrapped = true;
    window.renderSearchAutocompleteFinal = wrapped;
    window.renderPatchedSearchResults = wrapped;
    try{ renderSearchAutocompleteFinal = wrapped; }catch(err){}
    try{ renderPatchedSearchResults = wrapped; }catch(err){}
  }

  function wrapPageRoute(){
    var previous = window.__CA_GET_PAGE_ROUTE;
    window.__CA_GET_PAGE_ROUTE = function(page){
      if(page === 'partner') return routeToPartner();
      if(typeof previous === 'function') return previous(page);
      var base = getBasePrefix();
      var map = { home:base, glossary:base + 'glossary/', faq:base + 'faq/', safety:base + 'safety/', sources:base + 'sources/', updates:base + 'updates/' };
      return map[page] || base;
    };
  }

  function wrapShowPage(){
    var original = window.showPage || (typeof showPage === 'function' ? showPage : null);
    if(typeof original !== 'function' || original.__partnerPageWrapped) return;
    var wrapped = function(page){
      syncSidebarEntry();
      if(page === 'partner'){
        showPartnerPage();
        return;
      }
      var result = original.apply(this, arguments);
      if(page === 'home') syncHomeEntry();
      syncSidebarEntry();
      return result;
    };
    wrapped.__partnerPageWrapped = true;
    window.showPage = wrapped;
    try{ showPage = wrapped; }catch(err){}
  }

  function wrapSetLang(){
    var original = window.setLang || (typeof setLang === 'function' ? setLang : null);
    if(typeof original !== 'function' || original.__partnerLangWrapped) return;
    var wrapped = function(lang){
      var wasPartner = false;
      try{ wasPartner = (typeof currentPage === 'string' && currentPage === 'partner'); }catch(err){}
      var result = original.apply(this, arguments);
      syncPartnerEntrypoints();
      if(wasPartner) showPartnerPage();
      return result;
    };
    wrapped.__partnerLangWrapped = true;
    window.setLang = wrapped;
    try{ setLang = wrapped; }catch(err){}
  }

  function maybeOpenHash(){
    if(window.location && window.location.hash === '#partner') showPartnerPage();
  }

  function init(){
    ensureStyles();
    wrapPageRoute();
    wrapShowPage();
    wrapSetLang();
    wrapSearch();
    ensurePanel();
    syncPartnerEntrypoints();
    maybeOpenHash();
  }

  window.renderPartnerPage = renderPartnerPage;
  window.showPartnerPage = showPartnerPage;
  window.__COIN_PROOFPATH_PARTNER_PAGE = {
    refresh:syncPartnerEntrypoints,
    render:renderPartnerPage,
    email:EMAIL
  };

  init();
  if(typeof window.addEventListener === 'function'){
    window.addEventListener('hashchange', maybeOpenHash);
    window.addEventListener('load', function(){
      init();
      setTimeout(init, 0);
    });
  }
})();
