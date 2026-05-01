(function(){
  if(window.__homeUiFinalFixes) return;
  window.__homeUiFinalFixes = true;

  function homeFixLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getHomeFixPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        finderTitle:'Not sure where to start?',
        finderDesc:'You can start from the basics or open any lesson and guide below.',
        safetySub:'Scam prevention and protection habits',
        faqSub:'Quick beginner questions',
        startSub:'Recommended first route for brand-new learners',
        supportTitle:'Support Crypto Academy',
        supportBody:'Crypto Academy is free to use. If this project helps you, you can support future updates here.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Search',Lessons:'Lessons',Languages:'Languages',Updates:'Updates',Safety:'Safety',Home:'Home'}
      },
      ko:{
        finderTitle:'어디서 시작할지 모르겠나요?',
        finderDesc:'기초부터 시작하거나, 아래에서 원하는 강의와 가이드를 바로 열 수 있습니다.',
        safetySub:'사기 예방과 보호 습관',
        faqSub:'초보자용 빠른 질문 모음',
        startSub:'완전 초보자를 위한 추천 시작 경로',
        supportTitle:'Crypto Academy 후원하기',
        supportBody:'Crypto Academy는 무료로 제공되고 있습니다. 이 프로젝트가 도움이 되었다면, 앞으로의 업데이트를 후원으로 응원하실 수 있습니다.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'검색',Lessons:'강의',Languages:'언어',Updates:'업데이트',Safety:'보안',Home:'홈'}
      },
      th:{
        finderTitle:'ไม่แน่ใจว่าจะเริ่มจากตรงไหน?',
        finderDesc:'เริ่มจากพื้นฐานหรือเปิดบทเรียนและคู่มือทั้งหมดด้านล่างได้ทันที',
        safetySub:'การป้องกันสแกมและนิสัยความปลอดภัย',
        faqSub:'คำถามสั้นสำหรับผู้เริ่มต้น',
        startSub:'เส้นทางเริ่มต้นที่แนะนำสำหรับมือใหม่',
        supportTitle:'สนับสนุน Crypto Academy',
        supportBody:'Crypto Academy เปิดให้ใช้งานฟรี หากโปรเจกต์นี้ช่วยคุณได้ คุณสามารถสนับสนุนการอัปเดตในอนาคตได้ที่นี่',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'ค้นหา',Lessons:'บทเรียน',Languages:'ภาษา',Updates:'อัปเดต',Safety:'ความปลอดภัย',Home:'หน้าแรก'}
      },
      id:{
        finderTitle:'Tidak yakin mulai dari mana?',
        finderDesc:'Mulai dari dasar atau buka pelajaran dan panduan di bawah langsung dari beranda.',
        safetySub:'Pencegahan scam dan kebiasaan perlindungan',
        faqSub:'Pertanyaan cepat untuk pemula',
        startSub:'Rute awal yang disarankan untuk pemula total',
        supportTitle:'Dukung Crypto Academy',
        supportBody:'Crypto Academy gratis digunakan. Jika proyek ini membantu Anda, Anda bisa mendukung update berikutnya di sini.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Pencarian',Lessons:'Pelajaran',Languages:'Bahasa',Updates:'Update',Safety:'Keamanan',Home:'Beranda'}
      },
      pt:{
        finderTitle:'Não sabe por onde começar?',
        finderDesc:'Comece pelo básico ou abra qualquer lição e guia abaixo direto da home.',
        safetySub:'Prevenção de golpes e hábitos de proteção',
        faqSub:'Perguntas rápidas para iniciantes',
        startSub:'Rota inicial recomendada para quem está começando',
        supportTitle:'Apoie a Crypto Academy',
        supportBody:'A Crypto Academy é gratuita. Se este projeto ajuda você, é possível apoiar as próximas atualizações aqui.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Busca',Lessons:'Lições',Languages:'Idiomas',Updates:'Atualizações',Safety:'Segurança',Home:'Início'}
      },
      tr:{
        finderTitle:'Nereden başlayacağınızı bilmiyor musunuz?',
        finderDesc:'Temelden başlayın veya aşağıdan istediğiniz ders ve rehberi hemen açın.',
        safetySub:'Dolandiricilik onleme ve koruma aliskanliklari',
        faqSub:'Yeni baslayanlar icin hizli sorular',
        startSub:'Tam yeni baslayanlar icin onerilen baslangic rotasi',
        supportTitle:'Crypto Academy\'yi destekleyin',
        supportBody:'Crypto Academy ücretsizdir. Bu proje size yardımcı oluyorsa, sonraki güncellemeleri burada destekleyebilirsiniz.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Arama',Lessons:'Dersler',Languages:'Diller',Updates:'Guncellemeler',Safety:'Guvenlik',Home:'Ana Sayfa'}
      },
      es:{
        finderTitle:'¿No sabes por dónde empezar?',
        finderDesc:'Empieza por lo básico o abre cualquier lección y guía desde aquí.',
        safetySub:'Prevención de estafas y hábitos de protección',
        faqSub:'Preguntas rápidas para principiantes',
        startSub:'Ruta inicial recomendada para principiantes totales',
        supportTitle:'Apoya Crypto Academy',
        supportBody:'Crypto Academy es de uso gratuito. Si este proyecto te ayuda, puedes apoyar aquí las próximas actualizaciones.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Búsqueda',Lessons:'Lecciones',Languages:'Idiomas',Updates:'Actualizaciones',Safety:'Seguridad',Home:'Inicio'}
      },
      ar:{
        finderTitle:'لا تعرف من أين تبدأ؟',
        finderDesc:'ابدأ من الأساسيات أو افتح أي درس أو دليل من القائمة أدناه.',
        safetySub:'عادات الحماية ومنع الاحتيال',
        faqSub:'أسئلة سريعة للمبتدئين',
        startSub:'مسار بداية مقترح للمبتدئ تماما',
        supportTitle:'ادعم Crypto Academy',
        supportBody:'Crypto Academy متاح مجاناً. إذا كان هذا المشروع مفيداً لك، يمكنك دعم التحديثات القادمة من هنا.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'البحث',Lessons:'الدروس',Languages:'اللغات',Updates:'التحديثات',Safety:'الأمان',Home:'الرئيسية'}
      },
      vi:{
        finderTitle:'Chua biet bat dau tu dau?',
        finderDesc:'Bat dau tu co ban hoac mo bat ky bai hoc va huong dan nao ben duoi.',
        safetySub:'Thoi quen bao ve va phong tranh lua dao',
        faqSub:'Cau hoi nhanh cho nguoi moi',
        startSub:'Lo trinh bat dau de xuat cho nguoi moi hoan toan',
        supportTitle:'Ung ho Crypto Academy',
        supportBody:'Crypto Academy duoc su dung mien phi. Neu du an nay giup ich cho ban, ban co the ung ho cac ban cap nhat tiep theo tai day.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Tim kiem',Lessons:'Bai hoc',Languages:'Ngon ngu',Updates:'Cap nhat',Safety:'An toan',Home:'Trang chu'}
      },
      ha:{
        finderTitle:'Ba ka san inda za ka fara ba?',
        finderDesc:'Ka fara da tushe ko ka bude duk wani darasi da jagora daga nan.',
        safetySub:'Rigakafin damfara da halayen kariya',
        faqSub:'Tambayoyi masu sauri ga masu farawa',
        startSub:'Hanyar farawa da aka fi ba da shawara ga sabbin masu farawa',
        supportTitle:'Tallafa wa Crypto Academy',
        supportBody:'Crypto Academy kyauta ce ga kowa. Idan wannan aikin ya taimaka maka, za ka iya tallafa wa sabbin sabuntawa daga nan.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Bincike',Lessons:'Darussa',Languages:'Harsuna',Updates:'Sabuntawa',Safety:'Tsaro',Home:'Gida'}
      }
    };
    return packs[lang] || packs.en;
  }

  function getHomeIdentityPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'What Crypto Academy offers',
        items:[
          {label:'FREE', text:'Free beginner crypto lessons'},
          {label:'LANG', text:'Structured learning across multiple languages'},
          {label:'PDF', text:'Free PDF guides and checklists'},
          {label:'PLUS', text:'Premium guidebooks for deeper learning'}
        ]
      },
      ko:{
        title:'Crypto Academy가 제공하는 것',
        items:[
          {label:'무료', text:'초보자를 위한 무료 암호화폐 강의'},
          {label:'다국어', text:'여러 언어로 배우는 구조화된 학습'},
          {label:'PDF', text:'무료 PDF 가이드와 체크리스트'},
          {label:'확장형', text:'더 깊이 보는 유료 가이드북'}
        ]
      },
      th:{
        title:'สิ่งที่คุณจะได้จาก Crypto Academy',
        items:[
          {label:'ฟรี', text:'บทเรียนคริปโตฟรีสำหรับผู้เริ่มต้น'},
          {label:'หลายภาษา', text:'เรียนอย่างเป็นระบบได้หลายภาษา'},
          {label:'PDF', text:'คู่มือและเช็กลิสต์ PDF ฟรี'},
          {label:'เชิงลึก', text:'คู่มือแบบเสียค่าใช้จ่ายสำหรับการเรียนรู้ที่ลึกขึ้น'}
        ]
      },
      id:{
        title:'Apa yang tersedia di Crypto Academy',
        items:[
          {label:'Gratis', text:'Pelajaran crypto gratis untuk pemula'},
          {label:'Bahasa', text:'Belajar terstruktur dalam banyak bahasa'},
          {label:'PDF', text:'Panduan dan checklist PDF gratis'},
          {label:'Lanjutan', text:'Guidebook premium untuk belajar lebih dalam'}
        ]
      },
      pt:{
        title:'O que você encontra na Crypto Academy',
        items:[
          {label:'Grátis', text:'Lições gratuitas de cripto para iniciantes'},
          {label:'Idiomas', text:'Aprendizado estruturado em vários idiomas'},
          {label:'PDF', text:'Guias e checklists em PDF gratuitos'},
          {label:'Extra', text:'Guias premium para aprender com mais profundidade'}
        ]
      },
      tr:{
        title:'Crypto Academy’de neler var',
        items:[
          {label:'Ücretsiz', text:'Yeni başlayanlar için ücretsiz kripto dersleri'},
          {label:'Dil', text:'Birden fazla dilde yapılandırılmış öğrenme'},
          {label:'PDF', text:'Ücretsiz PDF rehberleri ve kontrol listeleri'},
          {label:'Derinlik', text:'Daha derin öğrenme için premium rehberler'}
        ]
      },
      es:{
        title:'Lo que ofrece Crypto Academy',
        items:[
          {label:'Gratis', text:'Lecciones gratuitas de cripto para principiantes'},
          {label:'Idiomas', text:'Aprendizaje estructurado en varios idiomas'},
          {label:'PDF', text:'Guías y listas PDF gratuitas'},
          {label:'Avanzado', text:'Guías premium para profundizar más'}
        ]
      },
      ar:{
        title:'ما الذي يقدمه Crypto Academy',
        items:[
          {label:'مجاني', text:'دروس مجانية للمبتدئين في الكريبتو'},
          {label:'لغات', text:'تعلم منظم عبر عدة لغات'},
          {label:'PDF', text:'أدلة وقوائم PDF مجانية'},
          {label:'متقدم', text:'كتيبات مدفوعة للتعلم بشكل أعمق'}
        ]
      },
      vi:{
        title:'Những gì Crypto Academy cung cấp',
        items:[
          {label:'Miễn phí', text:'Bài học crypto miễn phí cho người mới'},
          {label:'Đa ngôn ngữ', text:'Lộ trình học có cấu trúc bằng nhiều ngôn ngữ'},
          {label:'PDF', text:'Hướng dẫn và checklist PDF miễn phí'},
          {label:'Chuyên sâu', text:'Guidebook trả phí để học sâu hơn'}
        ]
      },
      ha:{
        title:'Abin da Crypto Academy ke bayarwa',
        items:[
          {label:'Kyauta', text:'Darussan crypto kyauta ga masu farawa'},
          {label:'Harsuna', text:'Tsarin koyo cikin harsuna da yawa'},
          {label:'PDF', text:'Jagorori da jerin dubawa na PDF kyauta'},
          {label:'Zurfi', text:'Jagororin biya don ƙarin zurfin fahimta'}
        ]
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomePdfPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Free PDF Guides',
        body:'Download the beginner crypto safety checklist in your language.'
      },
      ko:{
        title:'무료 PDF 가이드',
        body:'초보자를 위한 암호화폐 안전 체크리스트를 언어별 PDF로 다운로드할 수 있습니다.'
      },
      th:{
        title:'คู่มือ PDF ฟรี',
        body:'ดาวน์โหลดเช็กลิสต์ความปลอดภัยคริปโตสำหรับผู้เริ่มต้นในรูปแบบ PDF ตามภาษาของคุณ'
      },
      id:{
        title:'Panduan PDF Gratis',
        body:'Unduh checklist keamanan crypto untuk pemula dalam PDF sesuai bahasa Anda.'
      },
      pt:{
        title:'Guias PDF Gratuitos',
        body:'Baixe em PDF a lista de verificação de segurança cripto para iniciantes no seu idioma.'
      },
      tr:{
        title:'Ucretsiz PDF Rehberleri',
        body:'Yeni baslayanlar icin hazirlanan kripto guvenlik kontrol listesini kendi dilinizde PDF olarak indirin.'
      },
      es:{
        title:'Guias PDF Gratis',
        body:'Descarga la lista de verificación de seguridad cripto para principiantes en PDF y en tu idioma.'
      },
      ar:{
        title:'أدلة PDF مجانية',
        body:'نزّل قائمة التحقق الخاصة بأمان العملات الرقمية للمبتدئين بصيغة PDF وبلغتك.'
      },
      vi:{
        title:'Huong dan PDF mien phi',
        body:'Tai xuong checklist an toan crypto cho nguoi moi duoi dang PDF bang ngon ngu cua ban.'
      },
      ha:{
        title:'Jagororin PDF Kyauta',
        body:'Sauke jerin duba tsaron crypto na masu farawa a matsayin PDF cikin harshenka.'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomePremiumPdfPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Premium PDF Guide',
        body:'If you want something more detailed than a quick checklist, you can explore the extended beginner guidebook in PDF format.',
        extra:'It covers first buying, transfers, storage, and scam awareness in a more structured way.',
        buttonEn:'View English Edition',
        buttonKo:'View Korean Edition'
      },
      ko:{
        title:'유료 PDF 가이드',
        body:'빠른 체크리스트보다 더 자세한 설명이 필요하다면, 초보자를 위한 실전 암호화폐 입문 가이드북을 PDF로 확인할 수 있습니다.',
        extra:'첫 구매, 전송, 보관, 사기 예방까지 차근차근 정리한 확장형 가이드입니다.',
        buttonEn:'영어판 보기',
        buttonKo:'한국어판 보기'
      },
      th:{
        title:'คู่มือ PDF แบบพรีเมียม',
        body:'ถ้าคุณต้องการเนื้อหาที่ละเอียดกว่ารายการเช็กสั้น ๆ คุณสามารถดูคู่มือเริ่มต้นฉบับขยายสำหรับผู้เริ่มต้นในรูปแบบ PDF ได้',
        extra:'คู่มือนี้เรียบเรียงเรื่องการซื้อครั้งแรก การโอน การเก็บรักษา และการระวังกลโกงแบบเป็นขั้นตอนมากขึ้น',
        buttonEn:'ดูฉบับภาษาอังกฤษ',
        buttonKo:'ดูฉบับภาษาเกาหลี'
      },
      id:{
        title:'Panduan PDF Premium',
        body:'Jika Anda ingin penjelasan yang lebih lengkap daripada checklist singkat, Anda bisa membuka guidebook pemula versi lengkap dalam format PDF.',
        extra:'Isinya membahas pembelian pertama, transfer, penyimpanan, dan kewaspadaan terhadap penipuan dengan alur yang lebih terstruktur.',
        buttonEn:'Lihat edisi bahasa Inggris',
        buttonKo:'Lihat edisi bahasa Korea'
      },
      pt:{
        title:'Guia PDF Premium',
        body:'Se você quiser algo mais detalhado do que uma lista rápida, pode consultar o guia estendido para iniciantes em formato PDF.',
        extra:'Ele organiza compra inicial, transferências, armazenamento e prevenção de golpes de forma mais estruturada.',
        buttonEn:'Ver edição em inglês',
        buttonKo:'Ver edição em coreano'
      },
      tr:{
        title:'Premium PDF Rehberi',
        body:'Kisa bir kontrol listesinden daha ayrintili bir icerik istiyorsaniz, yeni baslayanlar icin hazirlanan genisletilmis PDF rehberi inceleyebilirsiniz.',
        extra:'Ilk alim, transfer, saklama ve dolandiricilik farkindaligi konularini daha duzenli bir akista toplar.',
        buttonEn:'Ingilizce surumu ac',
        buttonKo:'Korece surumu ac'
      },
      es:{
        title:'Guía PDF Premium',
        body:'Si quieres algo más detallado que una lista rápida, puedes revisar la guía ampliada para principiantes en formato PDF.',
        extra:'Resume con más estructura la primera compra, las transferencias, el almacenamiento y la prevención de estafas.',
        buttonEn:'Ver edición en inglés',
        buttonKo:'Ver edición en coreano'
      },
      ar:{
        title:'دليل PDF مدفوع',
        body:'إذا كنت تريد شرحاً أكثر تفصيلاً من قائمة سريعة، يمكنك الاطلاع على الدليل الموسع للمبتدئين بصيغة PDF.',
        extra:'يغطي الشراء الأول والتحويل والتخزين والانتباه للاحتيال بطريقة أكثر تنظيماً.',
        buttonEn:'عرض النسخة الإنجليزية',
        buttonKo:'عرض النسخة الكورية'
      },
      vi:{
        title:'Huong dan PDF tra phi',
        body:'Neu ban muon noi dung chi tiet hon mot checklist ngan, ban co the xem guidebook mo rong cho nguoi moi duoi dang PDF.',
        extra:'Tai lieu nay trinh bay ro hon ve lan mua dau tien, chuyen tien, luu tru va nhan biet lua dao.',
        buttonEn:'Mo ban tieng Anh',
        buttonKo:'Mo ban tieng Han'
      },
      ha:{
        title:'Jagorar PDF mai biya',
        body:'Idan kana son karin bayani fiye da gajeren jerin dubawa, za ka iya duba fadadden jagorar masu farawa a matsayin PDF.',
        extra:'Yana tattara sayen farko, canja wuri, ajiya, da kariya daga damfara cikin tsari mai saukin bi.',
        buttonEn:'Duba sigar Turanci',
        buttonKo:'Duba sigar Koriya'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeSituationPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Quick Start by Situation',
        body:'Choose the path that fits your situation and get to the right page faster.',
        cards:[
          { tag:'START', title:'I’m completely new', desc:'Start with the basics of blockchain and wallets' },
          { tag:'CHECK', title:'I want to check before my first buy', desc:'Review the key checks before buying crypto for the first time' },
          { tag:'SAFETY', title:'I’m worried about scams', desc:'Check the most important scam risks first' },
          { tag:'WORDS', title:'I just need the glossary', desc:'Jump straight to the crypto glossary' },
          { tag:'EBOOK', title:'I want the eBook version', desc:'Explore the structured eBook version' }
        ]
      },
      ko:{
        title:'상황별 바로가기',
        body:'지금 내 상황에 맞는 입구부터 선택해 빠르게 확인해보세요.',
        cards:[
          { tag:'시작', title:'처음이라 아무것도 모르겠어요', desc:'블록체인과 지갑 개념부터 천천히 시작합니다' },
          { tag:'구매', title:'첫 구매 전에 빠르게 확인하고 싶어요', desc:'첫 구매 전에 확인해야 할 흐름을 빠르게 봅니다' },
          { tag:'보안', title:'사기가 걱정돼요', desc:'가짜 사이트, 시드 문구, 주소 관련 위험부터 확인합니다' },
          { tag:'용어', title:'용어만 빨리 찾고 싶어요', desc:'자주 헷갈리는 용어를 빠르게 찾아봅니다' },
          { tag:'전자책', title:'전자책으로 한 번에 정리하고 싶어요', desc:'더 정리된 흐름으로 전자책을 확인합니다' }
        ]
      },
      th:{
        title:'เริ่มตามสถานการณ์',
        body:'เลือกเส้นทางที่ตรงกับสถานการณ์ของคุณแล้วไปยังหน้าที่เหมาะได้เร็วขึ้น',
        cards:[
          { tag:'เริ่ม', title:'ฉันเพิ่งเริ่มและยังไม่รู้อะไรเลย', desc:'เริ่มจากพื้นฐานของบล็อกเชนและกระเป๋าเงิน' },
          { tag:'ซื้อ', title:'ฉันอยากเช็กก่อนซื้อครั้งแรก', desc:'ทบทวนจุดสำคัญก่อนซื้อคริปโตครั้งแรก' },
          { tag:'ระวัง', title:'ฉันกังวลเรื่องสแกม', desc:'เช็กความเสี่ยงสแกมที่สำคัญก่อน' },
          { tag:'คำศัพท์', title:'ฉันอยากดูคำศัพท์อย่างเดียว', desc:'ไปที่กลอสซารีคริปโตได้ทันที' },
          { tag:'eBook', title:'ฉันอยากดูเวอร์ชัน eBook', desc:'ดู eBook ที่เรียบเรียงเป็นระบบมากขึ้น' }
        ]
      },
      id:{
        title:'Jalur Cepat Sesuai Situasi',
        body:'Pilih jalur yang paling sesuai dengan situasi Anda dan buka halaman yang tepat lebih cepat.',
        cards:[
          { tag:'Mulai', title:'Saya benar-benar baru', desc:'Mulai dari dasar blockchain dan wallet' },
          { tag:'Cek', title:'Saya ingin cek sebelum pembelian pertama', desc:'Tinjau poin penting sebelum membeli crypto pertama kali' },
          { tag:'Safety', title:'Saya khawatir tentang scam', desc:'Periksa risiko scam yang paling penting terlebih dahulu' },
          { tag:'Glosarium', title:'Saya hanya butuh glosarium', desc:'Langsung ke glosarium crypto' },
          { tag:'eBook', title:'Saya ingin versi eBook', desc:'Lihat versi eBook yang lebih terstruktur' }
        ]
      },
      pt:{
        title:'Atalho por situacao',
        body:'Escolha o caminho que combina com sua situacao e chegue mais rapido a pagina certa.',
        cards:[
          { tag:'Inicio', title:'Sou totalmente iniciante', desc:'Comece pelos fundamentos de blockchain e carteiras' },
          { tag:'Compra', title:'Quero revisar antes da primeira compra', desc:'Veja as verificacoes principais antes de comprar crypto pela primeira vez' },
          { tag:'Seguranca', title:'Estou preocupado com golpes', desc:'Confira primeiro os riscos de golpe mais importantes' },
          { tag:'Glossario', title:'So preciso do glossario', desc:'Vá direto ao glossario de crypto' },
          { tag:'eBook', title:'Quero a versao em eBook', desc:'Veja a versao em eBook com fluxo mais organizado' }
        ]
      },
      tr:{
        title:'Duruma Gore Hizli Baslangic',
        body:'Durumunuza en uygun yolu secin ve dogru sayfaya daha hizli ulasin.',
        cards:[
          { tag:'Basla', title:'Tamamen yeniyim', desc:'Blockchain ve cuzdan temelleriyle baslayin' },
          { tag:'Kontrol', title:'Ilk alimdan once kontrol etmek istiyorum', desc:'Ilk kez crypto almadan once temel kontrolleri gozden gecirin' },
          { tag:'Guvenlik', title:'Dolandiriciliktan endiseliyim', desc:'Once en onemli scam risklerini kontrol edin' },
          { tag:'Sozluk', title:'Sadece sozluge ihtiyacim var', desc:'Dogrudan crypto sozlugune gidin' },
          { tag:'eBook', title:'eBook surumunu istiyorum', desc:'Daha duzenli eBook surumunu inceleyin' }
        ]
      },
      es:{
        title:'Acceso rapido por situacion',
        body:'Elige la ruta que mejor encaja con tu situacion y llega mas rapido a la pagina correcta.',
        cards:[
          { tag:'Inicio', title:'Soy completamente nuevo', desc:'Empieza con lo basico de blockchain y wallets' },
          { tag:'Compra', title:'Quiero revisar antes de mi primera compra', desc:'Revisa los puntos clave antes de comprar crypto por primera vez' },
          { tag:'Seguridad', title:'Me preocupan las estafas', desc:'Consulta primero los riesgos de scam mas importantes' },
          { tag:'Glosario', title:'Solo necesito el glosario', desc:'Ve directo al glosario de crypto' },
          { tag:'eBook', title:'Quiero la version eBook', desc:'Explora la version eBook con un flujo mas organizado' }
        ]
      },
      ar:{
        title:'بداية سريعة حسب حالتك',
        body:'اختر المسار الذي يناسب حالتك للوصول إلى الصفحة المناسبة بشكل أسرع.',
        cards:[
          { tag:'ابدأ', title:'أنا جديد تماماً', desc:'ابدأ بأساسيات البلوك تشين والمحافظ' },
          { tag:'شراء', title:'أريد المراجعة قبل أول شراء', desc:'راجع أهم النقاط قبل شراء الكريبتو لأول مرة' },
          { tag:'أمان', title:'أنا قلق من الاحتيال', desc:'تحقق أولاً من أهم مخاطر الاحتيال' },
          { tag:'مصطلحات', title:'أحتاج فقط إلى المصطلحات', desc:'اذهب مباشرة إلى معجم الكريبتو' },
          { tag:'eBook', title:'أريد نسخة eBook', desc:'استكشف نسخة eBook الأكثر تنظيماً' }
        ]
      },
      vi:{
        title:'Loi di nhanh theo tinh huong',
        body:'Chon lo trinh phu hop voi tinh huong cua ban de den dung trang nhanh hon.',
        cards:[
          { tag:'Bat dau', title:'Toi hoan toan moi', desc:'Bat dau voi kien thuc co ban ve blockchain va vi' },
          { tag:'Kiem tra', title:'Toi muon xem nhanh truoc lan mua dau tien', desc:'On lai cac buoc can kiem tra truoc khi mua crypto lan dau' },
          { tag:'An toan', title:'Toi lo ve lua dao', desc:'Xem truoc cac rui ro scam quan trong nhat' },
          { tag:'Thuat ngu', title:'Toi chi can glossary', desc:'Di thang den glossary crypto' },
          { tag:'eBook', title:'Toi muon ban eBook', desc:'Xem ban eBook co cau truc gon gang hon' }
        ]
      },
      ha:{
        title:'Hanyar gaggawa bisa halinka',
        body:'Zabi hanyar da ta fi dacewa da halinka domin ka isa shafin da ya dace cikin sauri.',
        cards:[
          { tag:'Fara', title:'Ni sabo ne sosai', desc:'Fara da asalin blockchain da walat' },
          { tag:'Duba', title:'Ina son dubawa kafin sayen farko', desc:'Duba muhimman abubuwan bincike kafin ka sayi crypto na farko' },
          { tag:'Tsaro', title:'Ina jin tsoron damfara', desc:'Ka fara duba manyan hadurran scam' },
          { tag:'Kamus', title:'Ina bukatar glossary kawai', desc:'Je kai tsaye zuwa kamus na crypto' },
          { tag:'eBook', title:'Ina son sigar eBook', desc:'Duba sigar eBook mai karin tsari' }
        ]
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeQuickStartPageRoute(page){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function') return window.__CA_GET_PAGE_ROUTE(page);
    var basePrefix = window.__CA_BASE_PREFIX__ || './';
    if(page === 'home') return basePrefix + 'index.html';
    return basePrefix + page + '/index.html';
  }

  function getHomeQuickStartLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function') return window.__CA_GET_LESSON_ROUTE(index);
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    var basePrefix = window.__CA_BASE_PREFIX__ || './';
    return basePrefix + 'lesson/' + (slugs[index] || 'blockchain') + '/index.html';
  }

  function getHomeSituationEntries(){
    var pack = getHomeSituationPack();
    var cards = Array.isArray(pack.cards) ? pack.cards : [];
    return [
      Object.assign({ href:getHomeQuickStartLessonRoute(0) }, cards[0] || {}),
      Object.assign({ href:getHomeQuickStartLessonRoute(5) }, cards[1] || {}),
      Object.assign({ href:getHomeQuickStartPageRoute('safety') }, cards[2] || {}),
      Object.assign({ href:getHomeQuickStartPageRoute('glossary') }, cards[3] || {}),
      Object.assign({ href:'#home-crypto-ebook-section' }, cards[4] || {})
    ];
  }

  function buildHomeSituationQuickStartHtml(){
    var pack = getHomeSituationPack();
    var cards = getHomeSituationEntries();
    return ''
      + '<section class="home-situation-block">'
      +   '<div class="home-situation-title">' + (pack.title || 'Quick Start by Situation') + '</div>'
      +   '<div class="home-situation-body">' + (pack.body || 'Choose the path that fits your situation and get to the right page faster.') + '</div>'
      +   '<div class="home-situation-grid">' + cards.map(function(card){
            return ''
              + '<a class="home-situation-card" href="' + (card.href || '#') + '">'
              +   '<span class="home-situation-tag">' + (card.tag || 'GO') + '</span>'
              +   '<div class="home-situation-card-title">' + (card.title || '') + '</div>'
              +   '<div class="home-situation-card-body">' + (card.desc || '') + '</div>'
              + '</a>';
          }).join('') + '</div>'
      + '</section>';
  }

  function getHomeActionCardsPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'30-Second Action Cards',
        body:'Short practical checks for the moments when you need quick answers.',
        cards:[
          {
            tag:'SEND',
            title:'5-Second Check Before Sending',
            points:[
              'Recheck the wallet address',
              'Recheck the network',
              'Use a small test first if possible'
            ]
          },
          {
            tag:'SEED',
            title:'Seed Phrase Never-Do List',
            points:[
              'Never share it with anyone',
              'Never send it in a DM',
              'Be suspicious if a site asks for it'
            ]
          },
          {
            tag:'SITE',
            title:'Quick Fake Website Check',
            points:[
              'Check the domain in the address bar',
              'Use bookmarked official links first',
              'Do not open ad or DM links right away'
            ]
          },
          {
            tag:'BUY',
            title:'Final Check Before Your First Buy',
            points:[
              'Confirm the platform first',
              'Check the fees before buying',
              'Think about how you will store it'
            ]
          }
        ]
      },
      ko:{
        title:'30초 해결 카드',
        body:'급하게 확인해야 할 핵심만 짧게 정리했습니다.',
        cards:[
          {
            tag:'전송',
            title:'전송 전 5초 체크',
            points:[
              '주소 다시 확인',
              '네트워크 다시 확인',
              '가능하면 소액 테스트 먼저'
            ]
          },
          {
            tag:'시드',
            title:'시드 문구 절대 금지',
            points:[
              '공유하지 않기',
              'DM으로 보내지 않기',
              '사이트 입력 요구 시 의심하기'
            ]
          },
          {
            tag:'도메인',
            title:'가짜 사이트 빠른 구별',
            points:[
              '주소창 도메인 확인',
              '북마크된 공식 링크 우선',
              '광고/DM 링크 바로 누르지 않기'
            ]
          },
          {
            tag:'구매',
            title:'첫 구매 전 마지막 확인',
            points:[
              '플랫폼 확인',
              '수수료 확인',
              '보관 방식 생각하기'
            ]
          }
        ]
      },
      th:{
        title:'การ์ดแก้ปัญหา 30 วินาที',
        body:'สรุปเฉพาะสิ่งสำคัญที่ควรเช็กทันทีแบบสั้น ๆ',
        cards:[
          { tag:'ส่ง', title:'เช็ก 5 วินาทีก่อนโอน', points:['เช็กที่อยู่ซ้ำอีกครั้ง','เช็กเครือข่ายซ้ำอีกครั้ง','ถ้าได้ให้ลองโอนจำนวนน้อยก่อน'] },
          { tag:'Seed', title:'สิ่งที่ห้ามทำกับ Seed Phrase', points:['ห้ามแชร์ให้ใคร','ห้ามส่งทาง DM','ถ้าเว็บขอให้กรอกต้องสงสัยไว้ก่อน'] },
          { tag:'โดเมน', title:'เช็กเว็บปลอมแบบเร็ว', points:['ตรวจโดเมนในแถบที่อยู่','ใช้ลิงก์ทางการที่บุ๊กมาร์กไว้ก่อน','อย่ากดลิงก์จากโฆษณาหรือ DM ทันที'] },
          { tag:'ซื้อ', title:'เช็กสุดท้ายก่อนซื้อครั้งแรก', points:['ยืนยันแพลตฟอร์มก่อน','เช็กค่าธรรมเนียมก่อนซื้อ','คิดเรื่องการเก็บรักษาไว้ล่วงหน้า'] }
        ]
      },
      id:{
        title:'Kartu Tindakan 30 Detik',
        body:'Ringkasan cek praktis singkat untuk saat Anda butuh jawaban cepat.',
        cards:[
          { tag:'Kirim', title:'Cek 5 Detik Sebelum Mengirim', points:['Periksa ulang alamat wallet','Periksa ulang jaringannya','Jika bisa lakukan tes kecil dulu'] },
          { tag:'Seed', title:'Daftar Larangan Seed Phrase', points:['Jangan pernah membagikannya','Jangan kirim lewat DM','Curigai situs yang memintanya'] },
          { tag:'Situs', title:'Cek Cepat Situs Palsu', points:['Periksa domain di address bar','Utamakan link resmi yang sudah dibookmark','Jangan langsung buka link iklan atau DM'] },
          { tag:'Beli', title:'Cek Terakhir Sebelum Pembelian Pertama', points:['Pastikan platformnya','Periksa biayanya','Pikirkan cara penyimpanannya'] }
        ]
      },
      pt:{
        title:'Cartoes de acao em 30 segundos',
        body:'Checks praticos e curtos para quando voce precisa de uma resposta rapida.',
        cards:[
          { tag:'Envio', title:'Cheque de 5 segundos antes de enviar', points:['Revise o endereco da carteira','Revise a rede','Se puder, faca um teste pequeno antes'] },
          { tag:'Seed', title:'Lista do que nunca fazer com a seed phrase', points:['Nao compartilhe com ninguem','Nao envie por DM','Desconfie se um site pedir isso'] },
          { tag:'Site', title:'Cheque rapido de site falso', points:['Confira o dominio na barra de endereco','Use primeiro links oficiais salvos','Nao abra links de anuncio ou DM de imediato'] },
          { tag:'Compra', title:'Cheque final antes da primeira compra', points:['Confirme a plataforma','Verifique as taxas','Pense em como vai guardar'] }
        ]
      },
      tr:{
        title:'30 Saniyelik Cozum Kartlari',
        body:'Hizli cevap gerektiren anlar icin kisa ve pratik kontroller.',
        cards:[
          { tag:'Gonder', title:'Gondermeden Once 5 Saniyelik Kontrol', points:['Adresi tekrar kontrol edin','Agi tekrar kontrol edin','Mumkunse once kucuk bir test yapin'] },
          { tag:'Seed', title:'Seed Phrase Icin Asla Yapma Listesi', points:['Kimseyle paylasmayin','DM ile gondermeyin','Bir site istiyorsa supheyle yaklasin'] },
          { tag:'Site', title:'Sahte Siteyi Hizli Kontrol', points:['Adres cubugundaki domaini kontrol edin','Once kayitli resmi linkleri kullanin','Reklam veya DM linkine hemen tiklamayin'] },
          { tag:'Alim', title:'Ilk Alimdan Once Son Kontrol', points:['Platformu dogrulayin','Ucretleri kontrol edin','Nasil saklayacaginizi dusunun'] }
        ]
      },
      es:{
        title:'Tarjetas de accion en 30 segundos',
        body:'Checks breves y practicos para los momentos en que necesitas respuestas rapidas.',
        cards:[
          { tag:'Envio', title:'Chequeo de 5 segundos antes de enviar', points:['Revisa otra vez la direccion','Revisa otra vez la red','Si puedes, haz primero una prueba pequena'] },
          { tag:'Seed', title:'Lista de lo que nunca debes hacer con la seed phrase', points:['No la compartas','No la envies por DM','Desconfia si un sitio la pide'] },
          { tag:'Sitio', title:'Chequeo rapido de sitio falso', points:['Revisa el dominio en la barra','Usa primero enlaces oficiales guardados','No abras de inmediato enlaces de anuncios o DM'] },
          { tag:'Compra', title:'Chequeo final antes de tu primera compra', points:['Confirma la plataforma','Revisa las comisiones','Piensa como la vas a guardar'] }
        ]
      },
      ar:{
        title:'بطاقات حل خلال 30 ثانية',
        body:'فحوصات عملية قصيرة للحظات التي تحتاج فيها إلى جواب سريع.',
        cards:[
          { tag:'إرسال', title:'فحص 5 ثوان قبل الإرسال', points:['أعد فحص العنوان','أعد فحص الشبكة','إذا أمكن ابدأ بتحويل صغير'] },
          { tag:'Seed', title:'قائمة الممنوع مع Seed Phrase', points:['لا تشاركها مع أحد','لا ترسلها عبر DM','اشك في أي موقع يطلبها'] },
          { tag:'موقع', title:'فحص سريع للموقع المزيف', points:['تحقق من الدومين في شريط العنوان','استخدم الروابط الرسمية المحفوظة أولاً','لا تفتح روابط الإعلانات أو DM مباشرة'] },
          { tag:'شراء', title:'الفحص الأخير قبل أول شراء', points:['أكد المنصة أولاً','تحقق من الرسوم','فكر في طريقة الحفظ'] }
        ]
      },
      vi:{
        title:'The hanh dong 30 giay',
        body:'Nhung buoc kiem tra ngan gon cho luc ban can cau tra loi nhanh.',
        cards:[
          { tag:'Gui', title:'Kiem tra 5 giay truoc khi gui', points:['Kiem tra lai dia chi','Kiem tra lai mang','Neu co the hay gui thu so tien nho truoc'] },
          { tag:'Seed', title:'Danh sach tuyet doi khong lam voi seed phrase', points:['Khong chia se cho bat ky ai','Khong gui qua DM','Canh giac neu website yeu cau nhap'] },
          { tag:'Web', title:'Kiem tra nhanh trang gia', points:['Kiem tra domain tren thanh dia chi','Uu tien link chinh thuc da bookmark','Khong bam ngay link quang cao hay DM'] },
          { tag:'Mua', title:'Kiem tra cuoi cung truoc lan mua dau tien', points:['Xac nhan nen tang','Kiem tra phi','Nghi truoc cach luu tru'] }
        ]
      },
      ha:{
        title:'Katunan warwarewa na dakika 30',
        body:'Takaitattun bincike masu amfani ga lokutan da kake bukatar amsa cikin sauri.',
        cards:[
          { tag:'Aika', title:'Binciken dakika 5 kafin tura kudi', points:['Sake duba adireshin walat','Sake duba network','Idan zai yiwu fara da karamin gwaji'] },
          { tag:'Seed', title:'Abubuwan da ba za a yi da seed phrase ba', points:['Kada ka raba da kowa','Kada ka aika ta DM','Yi shakka idan wani site ya bukace ta'] },
          { tag:'Site', title:'Saurin gano shafin bogi', points:['Duba domain a address bar','Fara da official link da ka yi bookmark','Kada ka bude link na talla ko DM nan take'] },
          { tag:'Saya', title:'Binciken karshe kafin sayen farko', points:['Tabbatar da platform din','Duba kudaden fee','Ka yi tunanin yadda za ka adana shi'] }
        ]
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeActionCardEntries(){
    var pack = getHomeActionCardsPack();
    var cards = Array.isArray(pack.cards) ? pack.cards : [];
    return [
      Object.assign({ href:getHomeQuickStartLessonRoute(2) }, cards[0] || {}),
      Object.assign({ href:getHomeQuickStartLessonRoute(6) }, cards[1] || {}),
      Object.assign({ href:getHomeQuickStartPageRoute('safety') }, cards[2] || {}),
      Object.assign({ href:getHomeQuickStartLessonRoute(5) }, cards[3] || {})
    ];
  }

  function buildHomeActionCardsHtml(){
    var pack = getHomeActionCardsPack();
    var cards = getHomeActionCardEntries();
    return ''
      + '<section class="home-action-cards-block">'
      +   '<div class="home-action-cards-title">' + (pack.title || '30-Second Action Cards') + '</div>'
      +   '<div class="home-action-cards-body">' + (pack.body || 'Short practical checks for the moments when you need quick answers.') + '</div>'
      +   '<div class="home-action-cards-grid">' + cards.map(function(card){
            var points = Array.isArray(card.points) ? card.points : [];
            return ''
              + '<a class="home-action-card" href="' + (card.href || '#') + '">'
              +   '<span class="home-action-card-tag">' + (card.tag || 'GO') + '</span>'
              +   '<div class="home-action-card-title">' + (card.title || '') + '</div>'
              +   '<ul class="home-action-card-list">' + points.map(function(point){
                    return '<li>' + point + '</li>';
                  }).join('') + '</ul>'
              + '</a>';
          }).join('') + '</div>'
      + '</section>';
  }

  function getHomeAvailablePremiumGuidesPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Crypto Academy eBook',
        body:'If you want a more structured and in-depth guide, explore the Crypto Academy eBooks.',
        card1Title:'Crypto Academy eBook (English Edition)',
        card2Title:'Crypto Academy eBook (Korean Edition)',
        card1Body:'Crypto Academy eBook in English',
        card2Body:'Crypto Academy eBook in Korean',
        button:'View eBook'
      },
      ko:{
        title:'크립토 아카데미 전자책',
        body:'정리된 흐름으로 더 깊이 있게 보고 싶다면 크립토 아카데미 전자책을 확인해보세요.',
        card1Title:'영문 크립토 아카데미 전자책',
        card2Title:'한글 크립토 아카데미 전자책',
        card1Body:'영어로 읽는 크립토 아카데미 전자책',
        card2Body:'한국어로 읽는 크립토 아카데미 전자책',
        button:'전자책 보기'
      },
      th:{
        title:'Crypto Academy eBook',
        body:'หากคุณต้องการคู่มือที่เป็นระบบและลึกขึ้น คุณสามารถเปิดดู Crypto Academy eBooks ได้ที่นี่',
        card1Title:'Crypto Academy eBook (ฉบับภาษาอังกฤษ)',
        card2Title:'Crypto Academy eBook (ฉบับภาษาเกาหลี)',
        card1Body:'Crypto Academy eBook ภาษาอังกฤษ',
        card2Body:'Crypto Academy eBook ภาษาเกาหลี',
        button:'ดู eBook'
      },
      id:{
        title:'Crypto Academy eBook',
        body:'Jika Anda ingin panduan yang lebih terstruktur dan mendalam, jelajahi Crypto Academy eBooks.',
        card1Title:'Crypto Academy eBook (Edisi Bahasa Inggris)',
        card2Title:'Crypto Academy eBook (Edisi Bahasa Korea)',
        card1Body:'Crypto Academy eBook dalam bahasa Inggris',
        card2Body:'Crypto Academy eBook dalam bahasa Korea',
        button:'Lihat eBook'
      },
      pt:{
        title:'Crypto Academy eBook',
        body:'Se voce quiser um guia mais estruturado e aprofundado, explore os eBooks da Crypto Academy.',
        card1Title:'Crypto Academy eBook (Edicao em ingles)',
        card2Title:'Crypto Academy eBook (Edicao em coreano)',
        card1Body:'Crypto Academy eBook em ingles',
        card2Body:'Crypto Academy eBook em coreano',
        button:'Ver eBook'
      },
      tr:{
        title:'Crypto Academy eBook',
        body:'Daha duzenli ve derinlikli bir rehber istiyorsaniz Crypto Academy eBook serisini inceleyin.',
        card1Title:'Crypto Academy eBook (Ingilizce Surum)',
        card2Title:'Crypto Academy eBook (Korece Surum)',
        card1Body:'Ingilizce Crypto Academy eBook',
        card2Body:'Korece Crypto Academy eBook',
        button:'eBook\u0027u Gor'
      },
      es:{
        title:'Crypto Academy eBook',
        body:'Si quieres una guia mas estructurada y profunda, explora los eBooks de Crypto Academy.',
        card1Title:'Crypto Academy eBook (Edicion en Ingles)',
        card2Title:'Crypto Academy eBook (Edicion en Coreano)',
        card1Body:'Crypto Academy eBook en ingles',
        card2Body:'Crypto Academy eBook en coreano',
        button:'Ver eBook'
      },
      ar:{
        title:'Crypto Academy eBook',
        body:'إذا أردت دليلاً أكثر تنظيماً وعمقاً، يمكنك استكشاف كتب Crypto Academy الإلكترونية.',
        card1Title:'Crypto Academy eBook (النسخة الإنجليزية)',
        card2Title:'Crypto Academy eBook (النسخة الكورية)',
        card1Body:'كتاب Crypto Academy الإلكتروني باللغة الإنجليزية',
        card2Body:'كتاب Crypto Academy الإلكتروني باللغة الكورية',
        button:'عرض الكتاب'
      },
      vi:{
        title:'Crypto Academy eBook',
        body:'Neu ban muon mot huong dan co cau truc ro rang va sau hon, hay xem Crypto Academy eBooks.',
        card1Title:'Crypto Academy eBook (Ban tieng Anh)',
        card2Title:'Crypto Academy eBook (Ban tieng Han)',
        card1Body:'Crypto Academy eBook bang tieng Anh',
        card2Body:'Crypto Academy eBook bang tieng Han',
        button:'Xem eBook'
      },
      ha:{
        title:'Crypto Academy eBook',
        body:'Idan kana son jagora mafi tsari da zurfi, duba Crypto Academy eBooks.',
        card1Title:'Crypto Academy eBook (Sigar Turanci)',
        card2Title:'Crypto Academy eBook (Sigar Koriya)',
        card1Body:'Crypto Academy eBook a Turanci',
        card2Body:'Crypto Academy eBook a Koriya',
        button:'Duba eBook'
      }
    };
    var previewPacks = {
      en:{
        previewTitle:'Crypto Academy eBook Preview',
        previewBody:'A structured eBook designed to help beginners understand the crypto concepts and practical usage flows that most people struggle with first.',
        previewPoints:[
          'Understand core concepts in a more structured way',
          'Review the full first-buy and transfer flow in one place',
          'Learn practical checks to reduce wallet, address, and network mistakes',
          'Build a deeper understanding of scam prevention and safety signals'
        ]
      },
      ko:{
        previewTitle:'크립토 아카데미 전자책 미리보기',
        previewBody:'초보자가 암호화폐를 이해할 때 가장 자주 막히는 개념과 실제 사용 흐름을 더 체계적으로 정리한 전자책입니다.',
        previewPoints:[
          '핵심 개념을 더 체계적으로 정리할 수 있습니다',
          '첫 구매와 전송 흐름을 한 번에 복습할 수 있습니다',
          '지갑, 주소, 네트워크 실수를 줄이는 기준을 익힐 수 있습니다',
          '사기 예방과 보안 흐름을 더 깊이 이해할 수 있습니다'
        ]
      },
      th:{
        previewTitle:'ตัวอย่าง Crypto Academy eBook',
        previewBody:'eBook ที่จัดโครงสร้างมาเพื่อช่วยให้ผู้เริ่มต้นเข้าใจแนวคิดคริปโตและลำดับการใช้งานจริงที่มักติดขัดในช่วงแรก',
        previewPoints:[
          'เข้าใจแนวคิดหลักแบบเป็นระบบมากขึ้น',
          'ทบทวนขั้นตอนซื้อครั้งแรกและการโอนในที่เดียว',
          'เรียนรู้จุดตรวจเพื่อลดความผิดพลาดเรื่องกระเป๋า ที่อยู่ และเครือข่าย',
          'เข้าใจสัญญาณเสี่ยงและการป้องกันสแกมให้ลึกขึ้น'
        ]
      },
      id:{
        previewTitle:'Pratinjau Crypto Academy eBook',
        previewBody:'eBook terstruktur yang membantu pemula memahami konsep crypto dan alur penggunaan praktis yang paling sering terasa sulit di awal.',
        previewPoints:[
          'Memahami konsep inti dengan alur yang lebih terstruktur',
          'Meninjau alur pembelian pertama dan transfer di satu tempat',
          'Mempelajari pemeriksaan praktis untuk mengurangi kesalahan wallet, alamat, dan jaringan',
          'Membangun pemahaman yang lebih dalam tentang pencegahan scam dan sinyal keamanan'
        ]
      },
      pt:{
        previewTitle:'Previa do Crypto Academy eBook',
        previewBody:'Um eBook estruturado para ajudar iniciantes a entender os conceitos de crypto e os fluxos praticos que mais geram duvidas no comeco.',
        previewPoints:[
          'Entenda os conceitos centrais de forma mais organizada',
          'Revise em um so lugar o fluxo de primeira compra e transferencia',
          'Aprenda verificacoes praticas para reduzir erros de carteira, endereco e rede',
          'Aprofunde a compreensao sobre prevencao de golpes e sinais de risco'
        ]
      },
      tr:{
        previewTitle:'Crypto Academy eBook Onizleme',
        previewBody:'Yeni baslayanlarin ilk basta zorlandigi crypto kavramlarini ve pratik kullanim akislarini daha duzenli anlamasina yardim eden bir eBook.',
        previewPoints:[
          'Temel kavramlari daha duzenli bir sekilde anlayin',
          'Ilk alim ve transfer akisini tek yerde gozden gecirin',
          'Cuzdan, adres ve ag hatalarini azaltan pratik kontrolleri ogrenin',
          'Dolandiricilik onleme ve guvenlik sinyallerini daha derin anlayin'
        ]
      },
      es:{
        previewTitle:'Vista previa de Crypto Academy eBook',
        previewBody:'Un eBook estructurado para ayudar a principiantes a entender los conceptos de crypto y los flujos practicos que mas cuestan al inicio.',
        previewPoints:[
          'Entender los conceptos clave de una forma mas estructurada',
          'Revisar en un solo lugar el flujo completo de primera compra y transferencia',
          'Aprender verificaciones practicas para reducir errores de wallet, direccion y red',
          'Profundizar en la prevencion de estafas y las senales de seguridad'
        ]
      },
      ar:{
        previewTitle:'معاينة Crypto Academy eBook',
        previewBody:'كتاب إلكتروني منظم يساعد المبتدئين على فهم مفاهيم الكريبتو ومسارات الاستخدام العملي التي يتعثر فيها كثير من الناس في البداية.',
        previewPoints:[
          'فهم المفاهيم الأساسية بطريقة أكثر تنظيماً',
          'مراجعة مسار الشراء الأول والتحويل الكامل في مكان واحد',
          'تعلم فحوصات عملية لتقليل أخطاء المحفظة والعنوان والشبكة',
          'بناء فهم أعمق لإشارات الأمان ومنع الاحتيال'
        ]
      },
      vi:{
        previewTitle:'Xem truoc Crypto Academy eBook',
        previewBody:'Mot eBook co cau truc ro rang giup nguoi moi hieu cac khai niem crypto va luong su dung thuc te ma nhieu nguoi thuong vuong luc bat dau.',
        previewPoints:[
          'Hieu ro hon cac khai niem cot loi theo mot trinh tu de theo doi',
          'On lai toan bo quy trinh mua dau tien va chuyen tien trong cung mot noi',
          'Hoc cac buoc kiem tra thuc te de giam loi ve vi, dia chi va mang',
          'Hieu sau hon ve dau hieu rui ro va phong tranh lua dao'
        ]
      },
      ha:{
        previewTitle:'Takaitaccen duba Crypto Academy eBook',
        previewBody:'eBook ne da aka tsara sosai domin taimaka wa mai farawa ya fahimci ka\'idojin crypto da yadda ake amfani da su a zahiri inda mutane da yawa kan rikice a farko.',
        previewPoints:[
          'Ka fahimci muhimman ka\'idoji cikin tsari mafi kyau',
          'Ka sake duba dukkan tafiyar sayen farko da tura kudi a wuri guda',
          'Ka koyi bincike na zahiri domin rage kuskuren walat, adireshi, da network',
          'Ka zurfafa fahimtar kariya daga damfara da alamun hadari'
        ]
      }
    };
    Object.keys(previewPacks).forEach(function(key){
      if(!packs[key]) return;
      packs[key].previewTitle = previewPacks[key].previewTitle;
      packs[key].previewBody = previewPacks[key].previewBody;
      packs[key].previewPoints = previewPacks[key].previewPoints.slice();
    });
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  var homePdfFiles = [
    {code:'en', label:'English PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-en.pdf'},
    {code:'ko', label:'한국어 PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ko.pdf'},
    {code:'th', label:'ไทย PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-th.pdf'},
    {code:'id', label:'Indonesia PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-id.pdf'},
    {code:'pt', label:'Português PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-pt.pdf'},
    {code:'br', label:'Português (BR) PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-br.pdf'},
    {code:'tr', label:'Türkçe PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-tr.pdf'},
    {code:'es', label:'Español PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-es.pdf'},
    {code:'ar', label:'العربية PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ar.pdf'},
    {code:'vi', label:'Tiếng Việt PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-vi.pdf'},
    {code:'ha', label:'Hausa PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ha.pdf'}
  ];

  function getHomeUpdateLabelKeys(date){
    var byDate = {
      '2026-04-12':['Search','Safety','Updates'],
      '2026-04-11':['Home','Lessons','Updates'],
      '2026-04-10':['Search','Lessons','Safety'],
      '2026-04-09':['Languages','Search','Updates']
    };
    return byDate[date] || ['Updates'];
  }

  function buildHomeUpdateMetaHtml(date){
    var pack = getHomeFixPack();
    return '<div class="home-recent-update-meta">' + getHomeUpdateLabelKeys(date).map(function(key){
      var text = (pack.updateLabels && pack.updateLabels[key]) || key;
      return '<span class="home-recent-update-tag">' + text + '</span>';
    }).join('') + '</div>';
  }

  function getCompletedSetFinal(){
    try{
      return new Set(JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]'));
    }catch(err){
      return new Set();
    }
  }

  function getLastVisitFinal(){
    try{
      return JSON.parse(localStorage.getItem('cryptoAcademyLastVisit') || 'null');
    }catch(err){
      return null;
    }
  }

  function getNextIncompleteLessonAfterFinal(startIndex, completedSet, total){
    for(var i = Math.max(0, startIndex + 1); i < total; i++){
      if(!completedSet.has(i)) return i;
    }
    return -1;
  }

  function getFirstIncompleteLessonFinal(completedSet, total){
    for(var i = 0; i < total; i++){
      if(!completedSet.has(i)) return i;
    }
    return -1;
  }

  function getContinueLessonIndexFinal(){
    var total = (typeof getTotalLessons === 'function') ? getTotalLessons() : 7;
    var completedSet = getCompletedSetFinal();
    var lastVisit = getLastVisitFinal();
    if(lastVisit && lastVisit.type === 'lesson' && typeof lastVisit.index === 'number' && lastVisit.index >= 0 && lastVisit.index < total){
      if(!completedSet.has(lastVisit.index)) return lastVisit.index;
      var afterLast = getNextIncompleteLessonAfterFinal(lastVisit.index, completedSet, total);
      if(afterLast !== -1) return afterLast;
      return lastVisit.index;
    }
    var firstIncomplete = getFirstIncompleteLessonFinal(completedSet, total);
    if(firstIncomplete !== -1) return firstIncomplete;
    return 0;
  }

  function getLessonEntryFromPoolFinal(pool, index){
    return Array.isArray(pool) && pool[index] ? pool[index] : null;
  }

  function getTranslatedNavLessonTitleFinal(index){
    if(typeof t !== 'function') return '';
    var key = 'nav.l' + (index + 1);
    var value = t(key);
    if(!value || value === key) return '';
    return String(value).trim();
  }

  function getLessonTitleFinal(index){
    var lang = homeFixLang();
    var localizedLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons[lang] : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides[lang] : null, index);
    var englishLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons.en : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides.en : null, index);
    var localizedTitle = localizedLesson && localizedLesson.title ? String(localizedLesson.title).trim() : '';
    var englishTitle = englishLesson && englishLesson.title ? String(englishLesson.title).trim() : '';
    var navTitle = getTranslatedNavLessonTitleFinal(index);

    if(localizedTitle){
      if(lang !== 'en' && englishTitle && localizedTitle === englishTitle && navTitle && navTitle !== englishTitle){
        return navTitle;
      }
      return localizedTitle;
    }
    if(navTitle) return navTitle;
    if(englishTitle) return englishTitle;
    return 'Lesson ' + (index + 1);
  }

  window.getLessonTitleFinal = getLessonTitleFinal;

  window.openContinueLessonFinal = function(){
    var index = getContinueLessonIndexFinal();
    if(typeof showLesson === 'function') showLesson(index);
  };

  function getLessonSevenRoadmapIconHtml(){
    return '<span class="lesson7-roadmap-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"></path><path d="M12 8v5"></path><path d="M12 16h.01"></path></svg></span>';
  }

  function getHomeMenuItemsFinal(){
    var pack = getHomeFixPack();
    var items = [];
    for(var i = 0; i < 7; i++){
      items.push({
        type:(i === 6 ? 'scams' : 'lesson'),
        badge:'L' + (i + 1),
        title:typeof t === 'function' ? t('nav.l' + (i + 1)) : ('Lesson ' + (i + 1)),
        desc:typeof t === 'function' ? (t('nav.l' + (i + 1) + 'sub') || '') : '',
        action:(function(idx){ return function(){ if(typeof showLesson === 'function') showLesson(idx); }; })(i)
      });
    }
    items.push({
      type:'page',
      badge:'ST',
      title:typeof t === 'function' ? t('nav.start') : 'Start Here',
      desc:pack.startSub,
      action:function(){ if(typeof showPage === 'function') showPage('start'); }
    });
    items.push({
      type:'page',
      badge:'G',
      title:typeof t === 'function' ? t('nav.glossary') : 'Glossary',
      desc:typeof t === 'function' ? (t('nav.glossarysub') || '') : '',
      action:function(){ if(typeof showPage === 'function') showPage('glossary'); }
    });
    items.push({
      type:'safety',
      badge:'S',
      title:typeof t === 'function' ? t('nav.safety') : 'Safety',
      desc:pack.safetySub,
      action:function(){ if(typeof showPage === 'function') showPage('safety'); }
    });
    items.push({
      type:'page',
      badge:'SRC',
      title:typeof t === 'function' ? t('nav.sources') : 'Source Library',
      desc:typeof t === 'function' ? (t('nav.sourcesub') || '') : '',
      action:function(){ if(typeof showPage === 'function') showPage('sources'); }
    });
    items.push({
      type:'page',
      badge:'FAQ',
      title:typeof t === 'function' ? t('nav.faqPage') : 'FAQ',
      desc:pack.faqSub,
      action:function(){ if(typeof showPage === 'function') showPage('faq'); }
    });
    return items;
  }

  function buildHomeSupportBlockHtml(){
    var pack = getHomeFixPack();
    return ''
      + '<section class="home-support-block">'
      +   '<div class="home-support-copy">'
      +     '<div class="home-support-title">' + (pack.supportTitle || 'Support Crypto Academy') + '</div>'
      +     '<div class="home-support-body">' + (pack.supportBody || 'Crypto Academy is free to use. If this project helps you, you can support future updates here.') + '</div>'
      +   '</div>'
      +   '<a class="home-support-btn" href="https://buymeacoffee.com/beenetworkkorea" target="_blank" rel="noopener noreferrer">' + (pack.supportButton || 'Buy Me a Coffee') + '</a>'
      + '</section>';
  }

  function buildHomeIdentityHtml(){
    var pack = getHomeIdentityPack();
    return ''
      + '<section class="home-identity-block">'
      +   '<div class="home-identity-title">' + (pack.title || 'What Crypto Academy offers') + '</div>'
      +   '<div class="home-identity-grid">'
      +     (pack.items || []).map(function(item){
              return '<div class="home-identity-item"><span class="home-identity-label">' + item.label + '</span><div class="home-identity-copy">' + item.text + '</div></div>';
            }).join('')
      +   '</div>'
      + '</section>';
  }

  function buildHomePdfGuidesHtml(){
    var pack = getHomePdfPack();
    return ''
      + '<section class="home-pdf-block">'
      +   '<div class="home-pdf-title">' + (pack.title || 'Free PDF Guides') + '</div>'
      +   '<div class="home-pdf-body">' + (pack.body || 'Download the beginner crypto safety checklist in your language.') + '</div>'
      +   '<div class="home-pdf-grid">'
      +     homePdfFiles.map(function(item){
              return '<a class="home-pdf-link" href="' + item.href + '" target="_blank" rel="noopener noreferrer"><span>' + item.label + '</span><span class="home-pdf-link-tag">PDF</span></a>';
            }).join('')
      +   '</div>'
      + '</section>';
  }

  function buildHomePremiumPdfHtml(){
    var pack = getHomePremiumPdfPack();
    return ''
      + '<section class="home-premium-pdf-block">'
      +   '<div class="home-premium-pdf-title">' + (pack.title || 'Premium PDF Guide') + '</div>'
      +   '<div class="home-premium-pdf-body">' + (pack.body || 'If you want something more detailed than a quick checklist, you can explore the extended beginner guidebook in PDF format.') + '</div>'
      +   '<div class="home-premium-pdf-extra">' + (pack.extra || 'It covers first buying, transfers, storage, and scam awareness in a more structured way.') + '</div>'
      +   '<div class="home-premium-pdf-actions">'
      +     '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/beenetworkkorea/e/528650" target="_blank" rel="noopener noreferrer">' + (pack.buttonEn || 'View English Edition') + '</a>'
      +     '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/beenetworkkorea/e/528662" target="_blank" rel="noopener noreferrer">' + (pack.buttonKo || 'View Korean Edition') + '</a>'
      +   '</div>'
      + '</section>';
  }

  function buildHomeAvailablePremiumGuidesHtml(){
    var pack = getHomeAvailablePremiumGuidesPack();
    var previewPoints = Array.isArray(pack.previewPoints) ? pack.previewPoints : [];
    var previewHtml = ''
      + '<div class="home-ebook-preview-box">'
      +   '<div class="home-ebook-preview-title">' + (pack.previewTitle || 'Crypto Academy eBook Preview') + '</div>'
      +   '<div class="home-ebook-preview-body">' + (pack.previewBody || 'A structured eBook designed to help beginners understand the crypto concepts and practical usage flows that most people struggle with first.') + '</div>'
      +   (previewPoints.length ? '<ul class="home-ebook-preview-list">' + previewPoints.map(function(point){
            return '<li>' + point + '</li>';
          }).join('') + '</ul>' : '')
      + '</div>';
    return ''
      + '<section class="home-available-premium-guides" id="home-crypto-ebook-section">'
      +   '<div class="home-available-premium-guides-title">' + (pack.title || 'Available Premium Guides') + '</div>'
      +   '<div class="home-available-premium-guides-body">' + (pack.body || 'If you want more structured paid material, you can open these extra premium PDF guides here.') + '</div>'
      +   previewHtml
      +   '<div class="home-available-premium-guides-grid">'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card1Title || 'Premium PDF Guide 1') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card1Body || pack.cardBody || 'Paid extended guidebook') + '</div>'
      +       '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/BeeNetworkKorea/e/532817" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View Guide') + '</a>'
      +     '</article>'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card2Title || 'Premium PDF Guide 2') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card2Body || pack.cardBody || 'Paid extended guidebook') + '</div>'
      +       '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/BeeNetworkKorea/e/532815" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View Guide') + '</a>'
      +     '</article>'
      +   '</div>'
      + '</section>';
  }

  function enhanceHomeRecentUpdatesFinal(panel){
    panel.querySelectorAll('.home-recent-update-item').forEach(function(item){
      var dateEl = item.querySelector('.home-recent-update-date');
      if(!dateEl) return;
      var date = (dateEl.textContent || '').trim();
      var oldMeta = item.querySelector('.home-recent-update-meta');
      if(oldMeta) oldMeta.remove();
      dateEl.insertAdjacentHTML('afterend', buildHomeUpdateMetaHtml(date));
    });
  }

  function ensureHomeIdentityBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    panel.querySelectorAll('.home-identity-block').forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });
    var desc = hero.querySelector('.home-desc');
    var block = hero.querySelector('.home-identity-block');
    if(!block){
      if(desc){
        desc.insertAdjacentHTML('afterend', buildHomeIdentityHtml());
      } else {
        hero.insertAdjacentHTML('afterbegin', buildHomeIdentityHtml());
      }
      block = hero.querySelector('.home-identity-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeIdentityHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncContinueCardFinal(panel){
    var card = panel.querySelector('.continue-card');
    if(!card) return;
    var targetIndex = getContinueLessonIndexFinal();
    card.removeAttribute('onclick');
    card.onclick = function(event){
      if(event){
        event.preventDefault();
        event.stopPropagation();
      }
      window.openContinueLessonFinal();
      return false;
    };
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.onkeydown = function(event){
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        window.openContinueLessonFinal();
      }
    };
    var sub = card.querySelector('.continue-sub');
    if(sub){
      var baseText = sub.textContent || '';
      var prefix = baseText.split('→')[0].trim();
      if(!prefix) prefix = baseText.trim();
      sub.textContent = prefix + ' → ' + getLessonTitleFinal(targetIndex);
    }
  }

  function ensureRoadmapLessonSevenIconFinal(panel){
    var cards = panel.querySelectorAll('.roadmap-card');
    if(cards.length < 7) return;
    var card = cards[6];
    if(card && !card.querySelector('.lesson7-roadmap-icon')){
      var day = card.querySelector('.roadmap-day');
      if(day){
        day.insertAdjacentHTML('beforebegin', getLessonSevenRoadmapIconHtml());
      }
    }
  }

  function expandStartFinderFinal(panel){
    var pack = getHomeFixPack();
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    finder.classList.add('is-expanded-home-menu');
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    if(title) title.textContent = pack.finderTitle;
    if(desc) desc.textContent = pack.finderDesc;
    var grid = finder.querySelector('.start-finder-grid');
    if(!grid) return;
    grid.innerHTML = '';
    getHomeMenuItemsFinal().forEach(function(item){
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'start-finder-btn is-rich-item is-' + item.type + '-item';
      button.innerHTML = '<div class="sf-icon">' + item.badge + '</div><div class="start-finder-copy"><div class="start-finder-name">' + item.title + '</div><div class="start-finder-subline">' + (item.desc || '') + '</div></div>';
      button.addEventListener('click', function(){
        item.action();
      });
      grid.appendChild(button);
    });
  }

  function ensureHomeSupportBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-support-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var block = finder.querySelector('.home-support-block');
    if(!block){
      finder.insertAdjacentHTML('beforeend', buildHomeSupportBlockHtml());
      block = finder.querySelector('.home-support-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeSupportBlockHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureHomePdfBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-pdf-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var block = finder.querySelector('.home-pdf-block');
    if(!block){
      finder.insertAdjacentHTML('beforeend', buildHomePdfGuidesHtml());
      block = finder.querySelector('.home-pdf-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomePdfGuidesHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureHomePremiumPdfBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-premium-pdf-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var block = finder.querySelector('.home-premium-pdf-block');
    if(!block){
      finder.insertAdjacentHTML('beforeend', buildHomePremiumPdfHtml());
      block = finder.querySelector('.home-premium-pdf-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomePremiumPdfHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureHomeSituationQuickStartBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    panel.querySelectorAll('.home-situation-block').forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });
    var anchor = hero.querySelector('.home-identity-block') || hero.querySelector('.home-desc');
    var block = hero.querySelector('.home-situation-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildHomeSituationQuickStartHtml());
      } else {
        hero.insertAdjacentHTML('afterbegin', buildHomeSituationQuickStartHtml());
      }
      block = hero.querySelector('.home-situation-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeSituationQuickStartHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureHomeActionCardsBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    panel.querySelectorAll('.home-action-cards-block').forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });
    var anchor = hero.querySelector('.home-situation-block') || hero.querySelector('.home-identity-block') || hero.querySelector('.home-desc');
    var block = hero.querySelector('.home-action-cards-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildHomeActionCardsHtml());
      } else {
        hero.insertAdjacentHTML('afterbegin', buildHomeActionCardsHtml());
      }
      block = hero.querySelector('.home-action-cards-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeActionCardsHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureHomeAvailablePremiumGuidesBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-available-premium-guides').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var premiumBlock = finder.querySelector('.home-premium-pdf-block');
    var block = finder.querySelector('.home-available-premium-guides');
    if(!block){
      if(premiumBlock){
        premiumBlock.insertAdjacentHTML('afterend', buildHomeAvailablePremiumGuidesHtml());
      } else {
        finder.insertAdjacentHTML('beforeend', buildHomeAvailablePremiumGuidesHtml());
      }
      block = finder.querySelector('.home-available-premium-guides');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeAvailablePremiumGuidesHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncHomeUiFinal(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    panel.querySelectorAll('.home-all-guides').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-grid, .home-mini-grid').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-identity-block').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-situation-block').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-action-cards-block').forEach(function(node){ node.remove(); });
    enhanceHomeRecentUpdatesFinal(panel);
    syncContinueCardFinal(panel);
    ensureRoadmapLessonSevenIconFinal(panel);
    ensureHomeSituationQuickStartBlockFinal(panel);
    ensureHomeActionCardsBlockFinal(panel);
    expandStartFinderFinal(panel);
    ensureHomeSupportBlockFinal(panel);
    ensureHomePdfBlockFinal(panel);
    ensureHomePremiumPdfBlockFinal(panel);
    ensureHomeAvailablePremiumGuidesBlockFinal(panel);
  }

  function wrapHomeUiFinal(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeUiFinalWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeUiFinal();
      return result;
    };
    wrapped.__homeUiFinalWrapped = true;
    window[name] = wrapped;
  }

  if(typeof window.renderHome === 'function' && !window.renderHome.__homeSupportWrapped){
    var __origRenderHomeSupport = window.renderHome;
    var wrappedRenderHomeSupport = function(){
      var html = __origRenderHomeSupport.apply(this, arguments);
      if(typeof html !== 'string') return html || '';
      if(html.indexOf('home-support-block') !== -1) return html;
      var supportHtml = buildHomeSupportBlockHtml();
      var anchor = html.lastIndexOf('</div></div></div>');
      if(anchor !== -1) return html.slice(0, anchor + 18) + supportHtml + html.slice(anchor + 18);
      return html + supportHtml;
    };
    wrappedRenderHomeSupport.__homeSupportWrapped = true;
    window.renderHome = wrappedRenderHomeSupport;
  }

  wrapHomeUiFinal('renderHome');
  wrapHomeUiFinal('renderAllLessons');
  wrapHomeUiFinal('showPage');
  wrapHomeUiFinal('setLang');

  syncHomeUiFinal();
})();
