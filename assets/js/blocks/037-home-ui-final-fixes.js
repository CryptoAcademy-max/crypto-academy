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

  function syncHomeUiFinal(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    panel.querySelectorAll('.home-all-guides').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-grid, .home-mini-grid').forEach(function(node){ node.remove(); });
    panel.querySelectorAll('.home-identity-block').forEach(function(node){ node.remove(); });
    enhanceHomeRecentUpdatesFinal(panel);
    syncContinueCardFinal(panel);
    ensureRoadmapLessonSevenIconFinal(panel);
    expandStartFinderFinal(panel);
    ensureHomeSupportBlockFinal(panel);
    ensureHomePdfBlockFinal(panel);
    ensureHomePremiumPdfBlockFinal(panel);
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
