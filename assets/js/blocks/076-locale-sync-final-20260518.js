(function(){
  if(window.__localeSyncFinal20260518) return;
  window.__localeSyncFinal20260518 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

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

  function getLang(){
    var raw = 'en';
    try{
      raw = (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || localStorage.getItem('cryptoAcademyLang') || 'en';
    }catch(err){}
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br' || raw.indexOf('br') === 0) return 'br';
    if(raw.indexOf('pt') === 0) return 'pt';
    for(var i=0;i<LANGS.length;i++){
      if(raw.indexOf(LANGS[i]) === 0) return LANGS[i];
    }
    return 'en';
  }

  function modalSearchText(){
    var map = {
      en:'Type to search',
      ko:'검색어를 입력하세요',
      th:'พิมพ์เพื่อค้นหา',
      id:'Ketik untuk mencari',
      pt:'Digite para pesquisar',
      br:'Digite para pesquisar',
      tr:'Aramak için yazın',
      es:'Escribe para buscar',
      ar:'اكتب للبحث',
      vi:'Nhập để tìm kiếm',
      ha:'Rubuta don bincike'
    };
    return map[getLang()] || map.en;
  }

  function pagePrefix(){
    if(typeof getPageHeroBasePrefix === 'function') return getPageHeroBasePrefix();
    if(document.body && document.body.dataset && document.body.dataset.basePrefix) return document.body.dataset.basePrefix;
    return './';
  }

  var localizedFigureMap = {
    ko: {
      'lesson6-first-buy-mock': 'lesson6-first-buy-mock-ko.svg',
      'lesson6-network-selection-mock': 'lesson6-network-selection-mock-ko.svg',
      'lesson6-final-transfer-check-mock': 'lesson6-final-transfer-check-mock-ko.svg',
      'lesson6-custody-compare': 'lesson6-custody-compare-ko.svg',
      'lesson7-clipboard-swapping': 'lesson7-clipboard-swapping-ko.svg',
      'lesson7-address-poisoning': 'lesson7-address-poisoning-ko.svg',
      'lesson7-seed-phrase-warning': 'lesson7-seed-phrase-warning-ko.svg',
      'lesson7-fake-support-dm': 'lesson7-fake-support-dm-ko.svg',
      'lesson7-fake-site-compare': 'lesson7-fake-site-compare-ko.svg'
    }
  };

  function figureBaseName(file){
    return String(file || '').replace(/^.*[\\/]/, '').replace(/\.svg$/i, '');
  }

  function svgPath(file){
    var baseName = figureBaseName(file);
    var fallbackFile = baseName ? baseName + '.svg' : String(file || '');
    var lang = getLang();
    var mapped = localizedFigureMap[lang] && localizedFigureMap[lang][baseName];
    return pagePrefix() + 'assets/illustrations/lessons/' + (mapped || fallbackFile);
  }

  function imagePath(file){
    return pagePrefix() + 'assets/illustrations/lessons/' + String(file || '');
  }

  var localizedLessonImageMap = {
    'lesson6-first-buy': {
      en:'lesson6-first-buy-en.png',
      ko:'lesson6-first-buy-ko.png',
      th:'lesson6-first-buy-th.png',
      tr:'lesson6-first-buy-tr.png',
      br:'lesson6-first-buy-br.png',
      ar:'lesson6-first-buy-ar.png',
      vi:'lesson6-first-buy-vi.png'
    },
    'lesson6-network-selection': {
      en:'lesson6-network-selection-en.png',
      ko:'lesson6-network-selection-ko.png',
      th:'lesson6-network-selection-th.png',
      tr:'lesson6-network-selection-tr.png',
      br:'lesson6-network-selection-br.png',
      ar:'lesson6-network-selection-ar.png',
      vi:'lesson6-network-selection-vi.png'
    },
    'lesson7-fake-site-compare': {
      en:'lesson7-fake-site-compare-en.png',
      ko:'lesson7-fake-site-compare-ko.png',
      th:'lesson7-fake-site-compare-th.png',
      tr:'lesson7-fake-site-compare-tr.png',
      br:'lesson7-fake-site-compare-br.png',
      ar:'lesson7-fake-site-compare-ar.png',
      vi:'lesson7-fake-site-compare-vi.png'
    },
    'lesson7-seed-warning': {
      en:'lesson7-seed-warning-en.png',
      ko:'lesson7-seed-warning-ko.png',
      th:'lesson7-seed-warning-th.png',
      tr:'lesson7-seed-warning-tr.png',
      br:'lesson7-seed-warning-br.png',
      ar:'lesson7-seed-warning-ar.png',
      vi:'lesson7-seed-warning-vi.png'
    },
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

  var localizedLessonImageAliases = {
    'lesson6-first-buy-card.png':'lesson6-first-buy',
    'lesson6-first-buy':'lesson6-first-buy',
    'lesson6-network-selection':'lesson6-network-selection',
    'lesson7-fake-site-card.png':'lesson7-fake-site-compare',
    'lesson7-fake-site-compare':'lesson7-fake-site-compare',
    'lesson7-seed-warning':'lesson7-seed-warning',
    'lesson8-exchange-wallet-card.png':'lesson8-exchange-wallet-compare',
    'lesson8-exchange-wallet-compare':'lesson8-exchange-wallet-compare'
  };

  function lessonImagePath(imageKey, fallbackFile){
    var key = localizedLessonImageAliases[imageKey] || imageKey;
    var pack = localizedLessonImageMap[key];
    if(pack){
      var lang = getLang();
      return imagePath(pack[lang] || pack.en || fallbackFile || imageKey);
    }
    return imagePath(fallbackFile || imageKey);
  }

  function figure(file, alt, note, extraClass){
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock' + (extraClass ? ' ' + extraClass : '') + '">'
      + '<img class="lesson-guide-img" loading="lazy" src="' + svgPath(file) + '" alt="' + esc(alt) + '">'
      + (note ? '<figcaption class="lesson-guide-caption">' + esc(note) + '</figcaption>' : '')
      + '</figure>';
  }

  function assetFigure(file, fallbackFile, alt, note, extraClass){
    return '<div class="lesson-asset-image-shell" data-lesson-asset-image-shell>'
      + '<figure class="lesson-guide-figure lesson-guide-figure-mock lesson-asset-figure' + (extraClass ? ' ' + extraClass : '') + '">'
      + '<img class="lesson-guide-img lesson-asset-img" loading="lazy" src="' + lessonImagePath(file, file) + '" alt="' + esc(alt) + '" onerror="this.closest(&quot;[data-lesson-asset-image-shell]&quot;).classList.add(&quot;is-fallback&quot;)">'
      + (note ? '<figcaption class="lesson-guide-caption">' + esc(note) + '</figcaption>' : '')
      + '</figure>'
      + '<div class="lesson-asset-fallback">' + figure(fallbackFile, alt, note, extraClass) + '</div>'
      + '</div>';
  }

  function list(items){
    return '<ul class="lesson-guide-points">' + (items || []).map(function(item){
      return '<li>' + esc(item) + '</li>';
    }).join('') + '</ul>';
  }

  function chips(items){
    return '<div class="lesson-guide-check-row">' + (items || []).map(function(item){
      return '<span class="lesson-guide-check-chip">' + esc(item) + '</span>';
    }).join('') + '</div>';
  }

  var NAV = {
    en:{
      titles:['Blockchain','Wallets','Safe Transfers','5 Roles of Crypto','Real-World Lessons','Buying Your First Crypto','Spotting Crypto Scams','How to Use Exchanges and Wallets Together','How to Compare Networks and Fees in Practice','How Stablecoins Differ and What to Watch Out For','What to Understand First When Entering DeFi','What Actually Matters When Evaluating NFT and Token Projects','Why Bridges and Multichain Systems Matter','How to Verify Information Before You Trust It'],
      subs:['Shared ledger basics','Keys and access','Sending safely','Understanding token roles','Why structure matters','A safe first purchase flow','Simple scam red flags','Balance convenience and control','Compare fee, speed, and risk','Stablecoin structure and cautions','Connect, approve, sign, swap','Look past hype and images','Bridge and chain risk basics','Build a verification routine']
    },
    ko:{
      titles:['블록체인','지갑','안전한 전송','암호화폐의 5가지 역할','실제 사례로 배우기','첫 암호화폐 구매하기','암호화폐 사기, 이렇게 구별하세요','거래소와 지갑을 어떻게 나눠서 써야 하는가','네트워크와 수수료를 실제로 비교하는 법','스테이블코인은 어떻게 다르고 무엇을 조심해야 하는가','DeFi를 처음 볼 때 무엇부터 이해해야 하는가','NFT와 토큰 프로젝트를 볼 때 진짜 확인해야 할 것','브리지와 멀티체인은 왜 어렵고 왜 중요한가','정보를 믿기 전에 어떤 순서로 검증해야 하는가'],
      subs:['공유 원장 기초','키와 접근 권한','실수 없이 보내기','토큰 역할 이해','구조를 알아야 하는 이유','안전한 첫 구매 흐름','초보자용 경고 신호','편의성과 통제권 균형','수수료, 속도, 위험 비교','구조와 위험 신호 보기','연결, 승인, 서명, 교환','이미지와 hype 너머 보기','체인 이동과 위험 이해','검증 루틴 만들기']
    },
    th:{
      titles:['บล็อกเชน','วอลเล็ต','การโอนอย่างปลอดภัย','5 บทบาทของคริปโต','บทเรียนจากโลกจริง','ซื้อคริปโตครั้งแรก','วิธีแยกแยะกลโกงคริปโต','ใช้เว็บเทรดและวอลเล็ตอย่างไรให้เหมาะ','เปรียบเทียบเครือข่ายและค่าธรรมเนียม','Stablecoin ต่างกันอย่างไร','ต้องเข้าใจอะไรก่อนเข้า DeFi','ดูอะไรจริง ๆ ใน NFT และโทเคน','ทำไม Bridge และ Multichain จึงสำคัญ','ตรวจสอบข้อมูลก่อนเชื่ออย่างไร'],
      subs:['พื้นฐานบัญชีร่วม','คีย์และการเข้าถึง','ส่งอย่างปลอดภัย','เข้าใจบทบาทโทเคน','ทำไมโครงสร้างสำคัญ','ขั้นตอนซื้อครั้งแรก','สัญญาณเตือนง่าย ๆ','สมดุลความสะดวกและการควบคุม','เทียบค่าธรรมเนียม ความเร็ว ความเสี่ยง','โครงสร้างและข้อควรระวัง','connect, approve, sign, swap','มองให้ไกลกว่า hype','ความเสี่ยงข้ามเชน','สร้าง routine ตรวจสอบ']
    },
    id:{
      titles:['Blockchain','Wallet','Transfer Aman','5 Peran Crypto','Pelajaran Dunia Nyata','Membeli Crypto Pertama','Cara Mengenali Penipuan Crypto','Cara Memakai Exchange dan Wallet Bersama','Cara Membandingkan Network dan Fee','Perbedaan Stablecoin dan Hal yang Perlu Diwaspadai','Yang Perlu Dipahami Saat Masuk DeFi','Yang Penting Saat Menilai NFT dan Token','Mengapa Bridge dan Multichain Penting','Cara Memverifikasi Informasi Sebelum Percaya'],
      subs:['Dasar buku besar bersama','Kunci dan akses','Kirim dengan aman','Memahami peran token','Mengapa struktur penting','Alur pembelian pertama','Tanda penipuan sederhana','Seimbangkan kemudahan dan kontrol','Bandingkan fee, kecepatan, risiko','Struktur dan risiko stablecoin','Connect, approve, sign, swap','Lihat melampaui hype','Risiko chain dan bridge','Bangun rutinitas verifikasi']
    },
    pt:{
      titles:['Blockchain','Carteiras','Transferências Seguras','5 Papéis do Cripto','Lições do Mundo Real','Comprar Seu Primeiro Cripto','Como Identificar Golpes Cripto','Como Usar Exchanges e Carteiras Juntas','Como Comparar Redes e Taxas na Prática','Como Stablecoins Diferem e o Que Observar','O Que Entender Primeiro ao Entrar em DeFi','O Que Importa ao Avaliar NFT e Tokens','Por Que Bridges e Multichain Importam','Como Verificar Informações Antes de Confiar'],
      subs:['Base do livro-razão compartilhado','Chaves e acesso','Enviar com segurança','Entender papéis dos tokens','Por que estrutura importa','Fluxo seguro da primeira compra','Sinais simples de golpe','Equilibre conveniência e controle','Compare taxa, velocidade e risco','Estrutura e cuidados','Connect, approve, sign, swap','Olhe além do hype','Risco de bridge e chain','Crie rotina de verificação']
    },
    br:null,
    tr:{
      titles:['Blockchain','Cüzdanlar','Güvenli Transferler','Kriptonun 5 Rolü','Gerçek Dünya Dersleri','İlk Kripto Alımı','Kripto Dolandırıcılıklarını Ayırt Etme','Borsa ve Cüzdanı Birlikte Kullanma','Ağları ve Ücretleri Pratikte Karşılaştırma','Stablecoinler Nasıl Farklıdır','DeFi’ye Girerken Önce Ne Anlamalı','NFT ve Token Projelerinde Asıl Önemli Olan','Bridge ve Multichain Neden Önemli','Bilgiye Güvenmeden Önce Nasıl Doğrulanır'],
      subs:['Paylaşılan defter temeli','Anahtarlar ve erişim','Güvenli gönderim','Token rollerini anlama','Yapı neden önemli','Güvenli ilk alım akışı','Basit scam uyarıları','Kolaylık ve kontrol dengesi','Ücret, hız ve risk karşılaştır','Stablecoin yapısı ve uyarılar','Connect, approve, sign, swap','Hype dışına bak','Bridge ve chain riski','Doğrulama rutini kur']
    },
    es:{
      titles:['Blockchain','Billeteras','Transferencias Seguras','5 Roles del Cripto','Lecciones del Mundo Real','Comprar Tu Primer Cripto','Cómo Detectar Estafas Cripto','Cómo Usar Exchanges y Billeteras Juntas','Cómo Comparar Redes y Comisiones','Cómo Difieren las Stablecoins','Qué Entender Primero al Entrar en DeFi','Qué Importa al Evaluar NFT y Tokens','Por Qué Importan Bridges y Multichain','Cómo Verificar Información Antes de Confiar'],
      subs:['Base de libro compartido','Claves y acceso','Enviar con seguridad','Entender roles del token','Por qué importa la estructura','Primer flujo de compra seguro','Señales simples de estafa','Equilibrar comodidad y control','Comparar comisión, velocidad y riesgo','Estructura y cautelas','Connect, approve, sign, swap','Mira más allá del hype','Riesgo de bridge y chain','Crear rutina de verificación']
    },
    ar:{
      titles:['سلسلة الكتل','المحافظ','التحويل الآمن','5 أدوار للعملات الرقمية','دروس من الواقع','شراء أول عملة رقمية','كيف تميز احتيال العملات الرقمية','كيف تستخدم المنصة والمحفظة معًا','كيف تقارن الشبكات والرسوم عمليًا','كيف تختلف العملات المستقرة وما الذي تنتبه له','ما الذي تفهمه أولًا عند دخول DeFi','ما المهم عند تقييم NFT ومشاريع الرموز','لماذا الجسور وتعدد الشبكات مهمان','كيف تتحقق من المعلومات قبل الوثوق بها'],
      subs:['أساس دفتر السجل المشترك','المفاتيح والوصول','الإرسال بأمان','فهم أدوار الرموز','لماذا البنية مهمة','مسار شراء أول آمن','إشارات احتيال بسيطة','وازن بين الراحة والتحكم','قارن الرسوم والسرعة والمخاطر','البنية والتحذيرات','connect و approve و sign و swap','انظر وراء الضجة','مخاطر الجسر والشبكة','ابن روتين تحقق']
    },
    vi:{
      titles:['Blockchain','Ví crypto','Chuyển tiền an toàn','5 vai trò của crypto','Bài học thực tế','Mua crypto lần đầu','Cách nhận biết lừa đảo crypto','Cách dùng sàn và ví cùng nhau','Cách so sánh mạng và phí trong thực tế','Stablecoin khác nhau thế nào và cần chú ý gì','Cần hiểu gì trước khi vào DeFi','Điều thật sự quan trọng khi đánh giá NFT và token','Vì sao bridge và multichain quan trọng','Cách kiểm chứng thông tin trước khi tin'],
      subs:['Nền tảng sổ cái chung','Khóa và quyền truy cập','Gửi an toàn','Hiểu vai trò token','Vì sao cấu trúc quan trọng','Luồng mua đầu tiên an toàn','Dấu hiệu lừa đảo đơn giản','Cân bằng tiện lợi và kiểm soát','So sánh phí, tốc độ, rủi ro','Cấu trúc và điểm cần cẩn thận','Connect, approve, sign, swap','Nhìn vượt qua hype','Rủi ro bridge và chain','Tạo thói quen kiểm chứng']
    },
    ha:{
      titles:['Blockchain','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na Crypto','Darussan Duniya ta Gaskiya','Siyan Crypto na Farko','Yadda Ake Gano Damfarar Crypto','Yadda Ake Amfani da Exchange da Walat','Yadda Ake Kwatanta Network da Fee','Yadda Stablecoin Suke Bambanta','Abin Farko da Za a Fahimta a DeFi','Abin da Ya Fi Muhimmanci a NFT da Token','Me Ya Sa Bridge da Multichain Suke Muhimmanci','Yadda Ake Tabbatar da Bayani Kafin Amincewa'],
      subs:['Asalin kundin rabawa','Makullai da shiga','Aika cikin aminci','Fahimtar rawar token','Me ya sa tsari ke da muhimmanci','Tsarin siye na farko','Alamun damfara masu sauki','Daidaita sauki da iko','Kwatanta fee, sauri, hadari','Tsari da gargadi','Connect, approve, sign, swap','Duba bayan hype','Hadarin bridge da chain','Gina tsarin tabbatarwa']
    }
  };
  NAV.br = NAV.pt;

  var COMMON = {
    en:{lesson:'Lesson',start:'Start',continueText:'Continue',checklist:'Checklist',warning:'Warning',compare:'Compare',verify:'Verify',safety:'Safety',quick:'Quick Review',saving:'Worth Saving',deeper:'Go Deeper',source:'Source Library',beginner:'Beginner',intermediate:'Intermediate',practical:'Practical',complete:'Complete',mark:'Mark complete',next:'Next lesson',related:'Related resources',prev:'Previous lesson',done:'completed',restart:'Start again',updates:'Update History'},
    ko:{lesson:'강의',start:'시작',continueText:'이어보기',checklist:'체크리스트',warning:'경고',compare:'비교',verify:'검증',safety:'안전',quick:'빠른 복습',saving:'저장용',deeper:'심화 보기',source:'자료 라이브러리',beginner:'초보자',intermediate:'중급자',practical:'실전',complete:'완료',mark:'완료로 표시',next:'다음 강의',related:'관련 자료',prev:'이전 강의',done:'완료',restart:'처음부터 다시',updates:'업데이트 기록'},
    th:{lesson:'บทเรียน',start:'เริ่ม',continueText:'เรียนต่อ',checklist:'เช็กลิสต์',warning:'คำเตือน',compare:'เปรียบเทียบ',verify:'ตรวจสอบ',safety:'ความปลอดภัย',quick:'ทบทวนเร็ว',saving:'ควรบันทึก',deeper:'ดูเชิงลึก',source:'คลังแหล่งข้อมูล',beginner:'ผู้เริ่มต้น',intermediate:'ระดับกลาง',practical:'ภาคปฏิบัติ',complete:'เสร็จสิ้น',mark:'ทำเครื่องหมายว่าเสร็จ',next:'บทเรียนถัดไป',related:'แหล่งข้อมูลที่เกี่ยวข้อง',prev:'บทเรียนก่อนหน้า',done:'เสร็จแล้ว',restart:'เริ่มใหม่',updates:'ประวัติอัปเดต'},
    id:{lesson:'Pelajaran',start:'Mulai',continueText:'Lanjutkan',checklist:'Daftar cek',warning:'Peringatan',compare:'Bandingkan',verify:'Verifikasi',safety:'Keamanan',quick:'Tinjauan cepat',saving:'Layak disimpan',deeper:'Pelajari lebih dalam',source:'Perpustakaan Sumber',beginner:'Pemula',intermediate:'Menengah',practical:'Praktis',complete:'Selesai',mark:'Tandai selesai',next:'Pelajaran berikutnya',related:'Sumber terkait',prev:'Pelajaran sebelumnya',done:'selesai',restart:'Mulai lagi',updates:'Riwayat Pembaruan'},
    pt:{lesson:'Lição',start:'Começar',continueText:'Continuar',checklist:'Lista de verificação',warning:'Aviso',compare:'Comparar',verify:'Verificar',safety:'Segurança',quick:'Revisão rápida',saving:'Vale salvar',deeper:'Aprofundar',source:'Biblioteca de Fontes',beginner:'Iniciante',intermediate:'Intermediário',practical:'Prático',complete:'Concluir',mark:'Marcar como concluída',next:'Próxima lição',related:'Recursos relacionados',prev:'Lição anterior',done:'concluído',restart:'Começar de novo',updates:'Histórico de Atualizações'},
    br:null,
    tr:{lesson:'Ders',start:'Başla',continueText:'Devam et',checklist:'Kontrol listesi',warning:'Uyarı',compare:'Karşılaştır',verify:'Doğrula',safety:'Güvenlik',quick:'Hızlı tekrar',saving:'Kaydetmeye değer',deeper:'Derine in',source:'Kaynak Kütüphanesi',beginner:'Başlangıç',intermediate:'Orta seviye',practical:'Pratik',complete:'Tamamla',mark:'Tamamlandı işaretle',next:'Sonraki ders',related:'İlgili kaynaklar',prev:'Önceki ders',done:'tamamlandı',restart:'Baştan başla',updates:'Güncelleme Geçmişi'},
    es:{lesson:'Lección',start:'Empezar',continueText:'Continuar',checklist:'Lista de verificación',warning:'Advertencia',compare:'Comparar',verify:'Verificar',safety:'Seguridad',quick:'Repaso rápido',saving:'Vale guardar',deeper:'Profundizar',source:'Biblioteca de Fuentes',beginner:'Principiante',intermediate:'Intermedio',practical:'Práctico',complete:'Completar',mark:'Marcar como completada',next:'Siguiente lección',related:'Recursos relacionados',prev:'Lección anterior',done:'completado',restart:'Empezar de nuevo',updates:'Historial de Actualizaciones'},
    ar:{lesson:'درس',start:'ابدأ',continueText:'تابع',checklist:'قائمة تحقق',warning:'تحذير',compare:'قارن',verify:'تحقق',safety:'الأمان',quick:'مراجعة سريعة',saving:'يستحق الحفظ',deeper:'تعمق أكثر',source:'مكتبة المصادر',beginner:'مبتدئ',intermediate:'متوسط',practical:'عملي',complete:'إكمال',mark:'علّم كمكتمل',next:'الدرس التالي',related:'موارد ذات صلة',prev:'الدرس السابق',done:'مكتمل',restart:'ابدأ من جديد',updates:'سجل التحديثات'},
    vi:{lesson:'Bài học',start:'Bắt đầu',continueText:'Tiếp tục',checklist:'Danh sách kiểm tra',warning:'Cảnh báo',compare:'So sánh',verify:'Xác minh',safety:'An toàn',quick:'Ôn nhanh',saving:'Nên lưu',deeper:'Tìm hiểu sâu',source:'Thư viện nguồn',beginner:'Người mới',intermediate:'Trung cấp',practical:'Thực hành',complete:'Hoàn thành',mark:'Đánh dấu hoàn thành',next:'Bài tiếp theo',related:'Tài nguyên liên quan',prev:'Bài trước',done:'hoàn thành',restart:'Bắt đầu lại',updates:'Lịch sử cập nhật'},
    ha:{lesson:'Darasi',start:'Fara',continueText:'Ci gaba',checklist:'Jerin dubawa',warning:'Gargadi',compare:'Kwatanta',verify:'Tabbatar',safety:'Tsaro',quick:'Bita cikin sauri',saving:'Ya dace a ajiye',deeper:'Kara zurfi',source:'Dakin Tushen Bayanai',beginner:'Mai farawa',intermediate:'Matsakaici',practical:'Aiki',complete:'Kammala',mark:'Alama an kammala',next:'Darasi na gaba',related:'Albarkatu masu alaka',prev:'Darasi na baya',done:'an kammala',restart:'Sake farawa',updates:'Tarihin Sabuntawa'}
  };
  COMMON.br = COMMON.pt;
  var CLEAN_CHECKLIST_LABELS = {
    id:'Daftar cek',
    pt:'Lista de verificação',
    br:'Lista de verificação',
    es:'Lista de verificación',
    vi:'Danh sách kiểm tra'
  };
  Object.keys(CLEAN_CHECKLIST_LABELS).forEach(function(code){
    if(COMMON[code]) COMMON[code].checklist = CLEAN_CHECKLIST_LABELS[code];
  });

  var VISITOR = {
    en:{today:'Today Visitors',total:'Total Visitors'},
    ko:{today:'오늘 방문자',total:'전체 방문자'},
    th:{today:'ผู้เข้าชมวันนี้',total:'ผู้เข้าชมทั้งหมด'},
    id:{today:'Pengunjung hari ini',total:'Total pengunjung'},
    pt:{today:'Visitantes hoje',total:'Total de visitantes'},
    br:{today:'Visitantes hoje',total:'Total de visitantes'},
    tr:{today:'Bugünkü ziyaretçiler',total:'Toplam ziyaretçi'},
    es:{today:'Visitantes de hoy',total:'Visitantes totales'},
    ar:{today:'زوار اليوم',total:'إجمالي الزوار'},
    vi:{today:'Khách hôm nay',total:'Tổng lượt khách'},
    ha:{today:'Maziyarta yau',total:'Jimillar maziyarta'}
  };

  var EXTRA = {
    en:{search:'Search',searchPlaceholder:'Type to search...',glossary:'Glossary',faq:'FAQ',openSource:'Open Source Library',openGlossary:'Open Glossary',openFaq:'Open FAQ',openSafety:'Open Safety',learnMore:'Learn more',download:'Download'},
    ko:{search:'검색',searchPlaceholder:'검색어를 입력하세요...',glossary:'용어사전',faq:'자주 묻는 질문',openSource:'자료 라이브러리 열기',openGlossary:'용어사전 열기',openFaq:'자주 묻는 질문 열기',openSafety:'안전 가이드 열기',learnMore:'더 보기',download:'다운로드'},
    th:{search:'ค้นหา',searchPlaceholder:'ค้นหาใน Coin ProofPath...',glossary:'อภิธานศัพท์',faq:'คำถามที่พบบ่อย',openSource:'เปิดคลังแหล่งอ้างอิง',openGlossary:'เปิดอภิธานศัพท์',openFaq:'เปิดคำถามที่พบบ่อย',openSafety:'เปิดคู่มือความปลอดภัย',learnMore:'ดูเพิ่มเติม',download:'ดาวน์โหลด'},
    id:{search:'Cari',searchPlaceholder:'Cari di Coin ProofPath...',glossary:'Glosarium',faq:'Tanya jawab',openSource:'Buka perpustakaan sumber',openGlossary:'Buka glosarium',openFaq:'Buka tanya jawab',openSafety:'Buka panduan keamanan',learnMore:'Pelajari lagi',download:'Unduh'},
    pt:{search:'Buscar',searchPlaceholder:'Pesquisar no Coin ProofPath...',glossary:'Glossário',faq:'Perguntas frequentes',openSource:'Abrir biblioteca de fontes',openGlossary:'Abrir glossário',openFaq:'Abrir perguntas frequentes',openSafety:'Abrir guia de segurança',learnMore:'Saiba mais',download:'Baixar'},
    br:{search:'Buscar',searchPlaceholder:'Pesquisar no Coin ProofPath...',glossary:'Glossário',faq:'Perguntas frequentes',openSource:'Abrir biblioteca de fontes',openGlossary:'Abrir glossário',openFaq:'Abrir perguntas frequentes',openSafety:'Abrir guia de segurança',learnMore:'Saiba mais',download:'Baixar'},
    tr:{search:'Ara',searchPlaceholder:'Coin ProofPath içinde ara...',glossary:'Sözlük',faq:'SSS',openSource:'Kaynak kütüphanesini aç',openGlossary:'Sözlüğü aç',openFaq:'SSS aç',openSafety:'Güvenlik rehberini aç',learnMore:'Daha fazla öğren',download:'İndir'},
    es:{search:'Buscar',searchPlaceholder:'Buscar en Coin ProofPath...',glossary:'Glosario',faq:'Preguntas frecuentes',openSource:'Abrir biblioteca de fuentes',openGlossary:'Abrir glosario',openFaq:'Abrir preguntas frecuentes',openSafety:'Abrir guía de seguridad',learnMore:'Ver más',download:'Descargar'},
    ar:{search:'بحث',searchPlaceholder:'ابحث في Coin ProofPath...',glossary:'قاموس المصطلحات',faq:'الأسئلة الشائعة',openSource:'افتح مكتبة المصادر',openGlossary:'افتح قاموس المصطلحات',openFaq:'افتح الأسئلة الشائعة',openSafety:'افتح دليل الأمان',learnMore:'اعرف المزيد',download:'تنزيل'},
    vi:{search:'Tìm kiếm',searchPlaceholder:'Tìm trong Coin ProofPath...',glossary:'Bảng thuật ngữ',faq:'Câu hỏi thường gặp',openSource:'Mở thư viện nguồn',openGlossary:'Mở bảng thuật ngữ',openFaq:'Mở câu hỏi thường gặp',openSafety:'Mở hướng dẫn an toàn',learnMore:'Tìm hiểu thêm',download:'Tải xuống'},
    ha:{search:'Bincike',searchPlaceholder:'Bincika Coin ProofPath...',glossary:'Kamus',faq:'Tambayoyi',openSource:'Bude dakin tushe',openGlossary:'Bude kamus',openFaq:'Bude tambayoyi',openSafety:'Bude jagorar tsaro',learnMore:'Kara koyo',download:'Sauke'}
  };
  var OPEN_LABEL = {
    en:'Open',
    ko:'열기',
    th:'เปิด',
    id:'Buka',
    pt:'Abrir',
    br:'Abrir',
    tr:'Aç',
    es:'Abrir',
    ar:'افتح',
    vi:'Mở',
    ha:'Bude'
  };
  var START_HERE = {
    en:'Start Here',
    ko:'여기서 시작',
    th:'เริ่มที่นี่',
    id:'Mulai di sini',
    pt:'Comece aqui',
    br:'Comece aqui',
    tr:'Buradan başla',
    es:'Empieza aquí',
    ar:'ابدأ من هنا',
    vi:'Bắt đầu tại đây',
    ha:'Fara daga nan'
  };
  var SAFETY_PAGE = {
    en:'Safety / Scam Prevention',
    ko:'안전 / 사기 예방',
    th:'ความปลอดภัย / ป้องกันกลโกง',
    id:'Keamanan / pencegahan penipuan',
    pt:'Segurança / prevenção de golpes',
    br:'Segurança / prevenção de golpes',
    tr:'Güvenlik / dolandırıcılık önleme',
    es:'Seguridad / prevención de estafas',
    ar:'الأمان / منع الاحتيال',
    vi:'An toàn / phòng tránh lừa đảo',
    ha:'Tsaro / hana damfara'
  };
  var STEP_LABEL = {
    en:'Step',
    ko:'단계',
    th:'ขั้นตอน',
    id:'Langkah',
    pt:'Passo',
    br:'Passo',
    tr:'Adım',
    es:'Paso',
    ar:'خطوة',
    vi:'Bước',
    ha:'Mataki'
  };
  var DAY_LABEL = {
    en:'Day',
    ko:'일차',
    th:'วัน',
    id:'Hari',
    pt:'Dia',
    br:'Dia',
    tr:'Gün',
    es:'Día',
    ar:'يوم',
    vi:'Ngày',
    ha:'Rana'
  };
  var ROUTE_PREFIX = {
    en:'A good beginner route is:',
    ko:'추천 초보자 경로:',
    th:'เส้นทางแนะนำสำหรับผู้เริ่มต้น:',
    id:'Rute pemula yang disarankan:',
    pt:'Rota recomendada para iniciantes:',
    br:'Rota recomendada para iniciantes:',
    tr:'Önerilen başlangıç rotası:',
    es:'Ruta recomendada para principiantes:',
    ar:'مسار مقترح للمبتدئين:',
    vi:'Lộ trình gợi ý cho người mới:',
    ha:'Hanyar farawa da ake ba da shawara:'
  };

  var PURCHASE = {
    en:['Choose carefully','Pick a reputable place and check fee, payment, and withdrawal rules.','Complete identity check','Many regulated services ask for KYC before buying or withdrawing.','Start small','Use a small first order so mistakes stay manageable.','Plan custody','Decide what stays on the exchange and what moves to your wallet.'],
    ko:['신중하게 선택','믿을 수 있는 곳인지, 수수료와 결제·출금 규칙을 확인하세요.','본인 확인 완료','많은 규제 서비스는 구매나 출금 전 KYC를 요구합니다.','소액으로 시작','첫 주문은 작게 해서 실수 부담을 줄이세요.','보관 계획 세우기','거래소에 둘 것과 지갑으로 옮길 것을 나누세요.'],
    th:['เลือกอย่างระวัง','เลือกบริการที่น่าเชื่อถือและตรวจค่าธรรมเนียม การจ่ายเงิน และกฎถอน.','ยืนยันตัวตน','บริการที่ถูกกำกับมักขอ KYC ก่อนซื้อหรือถอน.','เริ่มด้วยยอดเล็ก','ใช้คำสั่งซื้อเล็กก่อนเพื่อลดความเสี่ยง.','วางแผนการเก็บ','ตัดสินใจว่าอะไรอยู่บนเว็บเทรดและอะไรย้ายไปวอลเล็ต.'],
    id:['Pilih dengan hati-hati','Pilih layanan tepercaya dan cek biaya, pembayaran, serta aturan penarikan.','Selesaikan verifikasi identitas','Banyak layanan teregulasi meminta KYC sebelum beli atau tarik dana.','Mulai kecil','Gunakan pembelian kecil agar kesalahan tetap terkendali.','Rencanakan penyimpanan','Tentukan yang tetap di exchange dan yang dipindah ke wallet.'],
    pt:['Escolha com cuidado','Use um serviço confiável e confira taxas, pagamento e regras de saque.','Conclua a verificação','Muitos serviços regulados pedem KYC antes de comprar ou sacar.','Comece pequeno','Faça uma primeira compra pequena para reduzir erros.','Planeje a custódia','Decida o que fica na exchange e o que vai para a carteira.'],
    br:null,
    tr:['Dikkatli seç','Güvenilir bir yer seç; ücret, ödeme ve çekim kurallarını kontrol et.','Kimlik doğrulamayı tamamla','Birçok düzenlenmiş hizmet alım veya çekimden önce KYC ister.','Küçük başla','İlk emri küçük tut, hata yönetilebilir olsun.','Saklama planı yap','Borsada ne kalacak, cüzdana ne gidecek karar ver.'],
    es:['Elige con cuidado','Usa un servicio confiable y revisa comisiones, pago y retiro.','Completa la verificación','Muchos servicios regulados piden KYC antes de comprar o retirar.','Empieza pequeño','Haz una primera compra pequeña para limitar errores.','Planifica la custodia','Decide qué queda en el exchange y qué va a tu billetera.'],
    ar:['اختر بحذر','اختر خدمة موثوقة وراجع الرسوم والدفع وقواعد السحب.','أكمل التحقق من الهوية','كثير من الخدمات المنظمة تطلب KYC قبل الشراء أو السحب.','ابدأ بمبلغ صغير','اجعل أول طلب صغيرًا حتى تبقى الأخطاء محدودة.','خطط للحفظ','قرر ما يبقى في المنصة وما ينتقل إلى محفظتك.'],
    vi:['Chọn cẩn thận','Chọn nơi uy tín và kiểm tra phí, thanh toán, quy tắc rút.','Hoàn tất xác minh','Nhiều dịch vụ yêu cầu KYC trước khi mua hoặc rút.','Bắt đầu nhỏ','Dùng lệnh nhỏ đầu tiên để giảm rủi ro sai sót.','Lập kế hoạch lưu trữ','Quyết định phần nào ở sàn và phần nào chuyển sang ví.'],
    ha:['Zabi da hankali','Zabi wuri mai aminci kuma duba fee, biyan kudi, da kaidar cirewa.','Kammala tantance kai','Yawancin ayyuka suna bukatar KYC kafin siye ko cirewa.','Fara da kadan','Yi oda karami na farko domin kuskure ya kasance mai sauki.','Shirya ajiya','Yanke abin da zai tsaya a exchange da abin da zai tafi walat.']
  };
  PURCHASE.br = PURCHASE.pt;

  var L7 = {
    en:{cat:'Safety',title:'Spotting Crypto Scams',intro:'Crypto scams often look urgent, friendly, or official. Use a calm routine: pause, verify, and never give away wallet control.',key:'Scam messages often mix pressure with easy rewards. If you slow down, many attacks become easier to spot.',sections:['Why scams work','Fake rewards and fake support','Risky promises and suspicious links','Address poisoning and clipboard swapping','A habit before clicking or sending'],ps:['They combine pressure with simple-looking rewards, so people skip safety checks.','Fake airdrops, giveaways, or support accounts may ask for wallet connection, strange approvals, or money first.','Guaranteed profit, instant rewards, and mysterious DMs are warning signs. Reopen the official source yourself.','A copied address can change before pasting, and a recent address can look familiar while the middle is different.','Pause, compare the full domain, read the wallet request, and confirm the official source yourself.'],visual:['Pause first','Check the offer','Check the domain','Read wallet requests','Open official source']},
    ko:{cat:'보안',title:'암호화폐 사기, 이렇게 구별하세요',intro:'암호화폐 사기는 긴급함, 친절함, 공식처럼 보이는 분위기로 사람을 서두르게 만듭니다. 잠깐 멈추고, 확인하고, 지갑 통제 정보를 넘기지 않는 습관이 핵심입니다.',key:'사기 메시지는 압박과 쉬운 보상을 함께 제시하는 경우가 많습니다. 사람이 조급해지면 원래 했어야 할 느린 안전 확인을 건너뛰기 쉽습니다.',sections:['사기가 자주 통하는 이유','가짜 보상과 가짜 고객지원','위험한 약속과 수상한 링크','주소 오염과 클립보드 스와핑','클릭하거나 보내기 전 습관'],ps:['압박과 쉬운 보상을 함께 보여주며 안전 확인을 건너뛰게 만듭니다.','가짜 에어드롭, 경품, 고객지원 계정은 지갑 연결, 이상한 승인, 선입금을 유도할 수 있습니다.','수익 보장, 즉시 보상, 정체가 불분명한 DM은 경고 신호입니다. 공식 출처를 직접 다시 여세요.','복사한 주소가 붙여넣기 전에 바뀌거나 최근 거래 목록에 비슷한 주소가 섞일 수 있습니다.','멈추고 전체 도메인을 비교하고, 지갑 요청을 읽고, 공식 출처를 직접 확인하세요.'],visual:['먼저 멈추기','제안 확인하기','도메인 확인하기','지갑 요청 읽기','공식 출처 직접 열기']},
    tr:{cat:'Güvenlik',title:'Kripto Dolandırıcılıklarını Ayırt Etme',intro:'Kripto dolandırıcılıkları acil, samimi veya resmi görünerek acele ettirir. Dur, doğrula ve cüzdan kontrolünü veren bilgileri paylaşma.',key:'Scam mesajları baskı ve kolay ödülü birleştirir. Yavaşladığında çoğu saldırı daha görünür olur.',sections:['Dolandırıcılıklar neden işler','Sahte ödül ve sahte destek','Riskli vaatler ve şüpheli linkler','Address poisoning ve clipboard swapping','Tıklamadan veya göndermeden önce rutin'],ps:['Baskı ve ödülü birleştirerek güvenlik kontrollerini atlatır.','Sahte airdrop, çekiliş veya destek hesabı cüzdan bağlantısı, garip onay ya da para isteyebilir.','Garanti kazanç, anında ödül ve belirsiz DM uyarıdır. Resmi kaynağı kendin aç.','Kopyalanan adres yapıştırmadan önce değişebilir veya geçmişteki benzer adres yanıltabilir.','Dur, tam domaini karşılaştır, cüzdan isteğini oku ve resmi kaynağı kendin doğrula.'],visual:['Önce dur','Teklifi kontrol et','Alan adını kontrol et','Cüzdan isteğini oku','Resmi kaynağı aç']},
    br:{cat:'Segurança',title:'Como Identificar Golpes Cripto',intro:'Golpes cripto parecem urgentes, amigáveis ou oficiais para fazer você agir rápido. Pare, verifique e nunca entregue controle da carteira.',key:'Mensagens de golpe misturam pressão com recompensa fácil. Quando você reduz a pressa, muitos ataques ficam claros.',sections:['Por que golpes funcionam','Recompensas falsas e suporte falso','Promessas arriscadas e links suspeitos','Address poisoning e troca no clipboard','Rotina antes de clicar ou enviar'],ps:['Elas combinam pressão e recompensa para fazer você pular checagens.','Airdrops, sorteios ou suporte falsos podem pedir conexão de carteira, aprovação estranha ou dinheiro primeiro.','Lucro garantido, recompensa instantânea e DM misteriosa são alertas. Abra a fonte oficial por conta própria.','Um endereço copiado pode mudar ao colar, e um endereço recente parecido pode enganar.','Pare, compare o domínio completo, leia o pedido da carteira e confirme a fonte oficial.'],visual:['Pare primeiro','Cheque a oferta','Cheque o domínio','Leia a carteira','Abra a fonte oficial']},
    ar:{cat:'الأمان',title:'كيف تميز احتيال العملات الرقمية',intro:'قد يبدو الاحتيال عاجلًا أو رسميًا أو ودودًا ليجعلك تتصرف بسرعة. توقّف، تحقق، ولا تعطِ معلومات تتحكم بمحفظتك.',key:'رسائل الاحتيال تخلط الضغط مع المكافآت السهلة. عندما تتمهل تصبح الهجمات أسهل في ملاحظتها.',sections:['لماذا ينجح الاحتيال','مكافآت ودعم مزيف','وعود خطرة وروابط مشبوهة','تسميم العنوان وتبديل الحافظة','عادة قبل النقر أو الإرسال'],ps:['تستخدم الضغط والمكافآت لتجعلك تتجاوز فحوص الأمان.','قد يطلب airdrop أو دعم مزيف ربط المحفظة أو موافقة غريبة أو إرسال المال أولًا.','الربح المضمون والمكافآت الفورية ورسائل DM الغامضة إشارات خطر. افتح المصدر الرسمي بنفسك.','قد يتغير العنوان المنسوخ عند اللصق، أو يبدو عنوان حديث مشابهًا بينما الوسط مختلف.','توقّف، قارن النطاق الكامل، اقرأ طلب المحفظة، وتأكد من المصدر الرسمي.'],visual:['توقّف أولًا','افحص العرض','افحص النطاق','اقرأ طلب المحفظة','افتح المصدر الرسمي']},
    vi:{cat:'An toàn',title:'Cách nhận biết lừa đảo crypto',intro:'Lừa đảo crypto thường tạo cảm giác khẩn cấp, thân thiện hoặc chính thức để khiến bạn hành động nhanh. Hãy dừng lại, kiểm chứng và không trao quyền kiểm soát ví.',key:'Tin nhắn lừa đảo thường trộn áp lực với phần thưởng dễ dàng. Khi chậm lại, nhiều rủi ro sẽ lộ rõ hơn.',sections:['Vì sao lừa đảo hiệu quả','Phần thưởng giả và hỗ trợ giả','Lời hứa rủi ro và link đáng ngờ','Address poisoning và clipboard swapping','Thói quen trước khi bấm hoặc gửi'],ps:['Chúng tạo áp lực và phần thưởng để bạn bỏ qua bước an toàn.','Airdrop, giveaway hoặc hỗ trợ giả có thể yêu cầu kết nối ví, approval lạ hoặc gửi tiền trước.','Lợi nhuận đảm bảo, thưởng tức thì và DM lạ là dấu hiệu cảnh báo. Hãy tự mở nguồn chính thức.','Địa chỉ đã copy có thể đổi khi dán, hoặc địa chỉ gần đây trông quen nhưng phần giữa khác.','Dừng lại, so sánh toàn bộ domain, đọc yêu cầu ví và tự xác nhận nguồn chính thức.'],visual:['Dừng lại trước','Kiểm tra lời hứa','Kiểm tra tên miền','Đọc yêu cầu ví','Mở nguồn chính thức']}
  };
  L7.pt = L7.br;
  L7.es = {cat:'Seguridad',title:'Cómo Detectar Estafas Cripto',intro:'Las estafas cripto parecen urgentes, amables u oficiales para hacerte actuar rápido. Pausa, verifica y no entregues control de tu billetera.',key:'Los mensajes de estafa mezclan presión con recompensas fáciles. Si bajas la velocidad, muchas señales se vuelven visibles.',sections:['Por qué funcionan las estafas','Recompensas y soporte falsos','Promesas riesgosas y links sospechosos','Address poisoning y clipboard swapping','Rutina antes de hacer clic o enviar'],ps:['Combinan presión y recompensa para que saltes controles.','Airdrops, sorteos o soporte falso pueden pedir conexión de billetera, aprobación extraña o dinero primero.','Ganancia garantizada, premio instantáneo y DMs raros son alertas. Abre la fuente oficial tú mismo.','Una dirección copiada puede cambiar al pegarla, o una reciente parecida puede engañarte.','Pausa, compara el dominio completo, lee la solicitud de la billetera y confirma la fuente oficial.'],visual:['Pausa primero','Revisa la oferta','Revisa el dominio','Lee la billetera','Abre la fuente oficial']};
  L7.id = {cat:'Keamanan',title:'Cara Mengenali Penipuan Crypto',intro:'Penipuan crypto sering terlihat mendesak, ramah, atau resmi. Berhenti, verifikasi, dan jangan berikan kendali wallet.',key:'Pesan penipuan menggabungkan tekanan dan hadiah mudah. Saat Anda melambat, banyak tanda bahaya lebih terlihat.',sections:['Mengapa penipuan berhasil','Hadiah dan dukungan palsu','Janji berisiko dan link mencurigakan','Address poisoning dan clipboard swapping','Rutinitas sebelum klik atau kirim'],ps:['Tekanan dan hadiah membuat orang melewati pemeriksaan keamanan.','Airdrop, giveaway, atau dukungan palsu bisa meminta koneksi wallet, approval aneh, atau kirim uang dulu.','Profit terjamin, hadiah instan, dan DM misterius adalah tanda bahaya. Buka sumber resmi sendiri.','Alamat yang disalin bisa berubah saat ditempel, atau alamat terbaru yang mirip bisa menipu.','Berhenti, bandingkan domain penuh, baca permintaan wallet, dan pastikan sumber resmi.'],visual:['Berhenti dulu','Cek tawaran','Cek nama situs','Baca permintaan dompet','Buka sumber resmi']};
  L7.th = {cat:'ความปลอดภัย',title:'วิธีแยกแยะกลโกงคริปโต',intro:'กลโกงคริปโตมักดูเร่งด่วน เป็นมิตร หรือเหมือนทางการ ให้หยุด ตรวจสอบ และอย่าให้ข้อมูลควบคุมวอลเล็ต.',key:'ข้อความหลอกลวงผสมแรงกดดันกับรางวัลง่าย ๆ ถ้าชะลอจังหวะ สัญญาณอันตรายจะเห็นชัดขึ้น.',sections:['ทำไมกลโกงได้ผล','รางวัลปลอมและ support ปลอม','คำสัญญาเสี่ยงและลิงก์น่าสงสัย','Address poisoning และ clipboard swapping','นิสัยก่อนคลิกหรือส่ง'],ps:['ใช้แรงกดดันและรางวัลเพื่อให้ข้ามขั้นตรวจสอบ.','airdrop, giveaway หรือ support ปลอมอาจขอเชื่อม wallet, approval แปลก ๆ หรือส่งเงินก่อน.','กำไรแน่นอน รางวัลทันที และ DM ลึกลับคือสัญญาณเตือน เปิดแหล่งทางการเอง.','ที่อยู่ที่คัดลอกอาจเปลี่ยนเมื่อวาง หรือที่อยู่ล่าสุดที่คล้ายกันอาจหลอกได้.','หยุด เปรียบเทียบ domain เต็ม อ่านคำขอ wallet และยืนยันแหล่งทางการ.'],visual:['หยุดก่อน','ตรวจข้อเสนอ','ตรวจโดเมน','อ่านคำขอวอลเล็ต','เปิดแหล่งทางการ']};
  L7.ha = {cat:'Tsaro',title:'Yadda Ake Gano Damfarar Crypto',intro:'Damfarar crypto na kama da gaggawa, taimako, ko hukuma domin ta sa ka yi sauri. Ka tsaya, ka tabbatar, kada ka ba da ikon walat.',key:'Sakon damfara yana hada matsin lamba da lada mai sauki. Idan ka rage gaggawa, alamun hadari suna bayyana.',sections:['Me yasa damfara ke aiki','Lada na karya da support na karya','Alkawari mai hadari da link mai zargi','Address poisoning da clipboard swapping','Alada kafin dannawa ko aikawa'],ps:['Suna hada matsin lamba da lada don a tsallake duban tsaro.','Airdrop, giveaway, ko support na karya na iya neman wallet connection, approval mai ban mamaki, ko kudi tukuna.','Ribar tabbaci, lada nan take, da DM mai ban mamaki alamun gargadi ne. Bude tushen hukuma da kanka.','Adireshin da aka kwafa na iya canzawa bayan manna, ko address na baya mai kama ya rude ka.','Tsaya, kwatanta full domain, karanta bukatar wallet, kuma tabbatar da tushen hukuma.'],visual:['Tsaya tukuna','Duba tayin','Duba sunan shafi','Karanta bukatar walat','Bude tushen hukuma']};

  function lessonSeven(lang){
    var p = L7[lang] || L7.en;
    return {
      title:p.title,
      cat:p.cat,
      intro:p.intro,
      sections:p.sections.map(function(head, index){
        return {h:head, ps:[index === 0 ? p.key : p.ps[index], p.ps[index]]};
      }),
      defs:[
        ['Airdrop', lang === 'ko' ? '프로젝트가 사용자에게 토큰을 배포하는 방식입니다.' : 'A token distribution event.'],
        ['Seed phrase', lang === 'ko' ? '지갑 복구 단어입니다. 임의의 페이지에 입력하면 안 됩니다.' : 'Wallet recovery words. Never enter them on random pages.'],
        ['Rug pull', lang === 'ko' ? '운영자가 자금을 빼거나 프로젝트를 버리는 경우입니다.' : 'When a team removes funds or abandons a project.']
      ],
      example:p.ps[1],
      mistakes:p.ps.slice(1,4),
      faqs:[[p.sections[0] + '?', p.ps[0]],[p.sections[2] + '?', p.ps[2]]],
      checkpoints:p.ps.slice(0,4),
      quiz:[[p.sections[4], p.ps[4]]],
      sources:[
        ['FTC', 'https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['FTC Alert', 'https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ].map(function(row){ return [row[0], p.sections[0], row[1]]; }),
      visual:p.visual.map(function(title, index){ return {title:title, desc:p.ps[index] || p.key}; })
    };
  }

  var GUIDE6 = {
    en:{bundleTitle:'Practical walkthrough screens',buyKicker:'First buy screen',networkKicker:'Network selection',transferKicker:'Final send review',custodyKicker:'Custody comparison',buyTitle:'What to check on a first-buy screen',buyBody:'Check amount, fee, payment method, and receive amount before confirming.',buyPoints:['Start small','Check fee first','Choose storage plan'],networkTitle:'The network matters even when the asset name looks familiar',networkBody:'Match the destination network first. A wrong network can block the transfer.',networkPoints:['Confirm destination support','Compare fee and ETA','Stop if warnings appear'],transferTitle:'Final check before sending',transferPoints:['Asset','Network','Address','Small test','Final review'],custodyTitle:'Exchange custody vs self-custody wallet',exchangeTitle:'Exchange custody',exchangePoints:['Fast to trade','Platform helps recovery','Control is limited'],walletTitle:'Self-custody wallet',walletPoints:['More direct control','You handle recovery','Seed phrase rules first'],buyNote:'Review the amount, fee, and payment method together.',networkNote:'Match the network before focusing on the asset name.',transferNote:'Check address, network, and small test before confirming.',custodyNote:'Compare convenience and direct control side by side.',buyAlt:'Educational mock interface for a first crypto buy.',networkAlt:'Educational mock interface for choosing a transfer network.',transferAlt:'Educational final transfer review interface.',custodyAlt:'Educational comparison image for exchange custody and self-custody.'},
    ko:{bundleTitle:'실전 화면 따라보기',buyKicker:'첫 구매 화면',networkKicker:'네트워크 선택',transferKicker:'전송 전 최종 확인',custodyKicker:'보관 방식 비교',buyTitle:'첫 구매 화면에서 먼저 볼 것',buyBody:'확정 전에 금액, 수수료, 결제 수단, 받을 수량을 함께 확인하세요.',buyPoints:['소액으로 시작','수수료 먼저 확인','보관 계획 정하기'],networkTitle:'자산 이름이 같아도 네트워크는 다시 봐야 합니다',networkBody:'받는 곳이 지원하는 네트워크를 먼저 맞추세요. 틀리면 전송이 막힐 수 있습니다.',networkPoints:['받는 곳 지원 확인','수수료와 예상 시간 비교','경고가 보이면 멈추기'],transferTitle:'보내기 전 마지막 확인',transferPoints:['자산','네트워크','주소','소액 테스트','최종 확인'],custodyTitle:'거래소 보관 vs 자기보관 지갑',exchangeTitle:'거래소 보관',exchangePoints:['거래가 빠름','복구 지원은 플랫폼 담당','통제권은 제한적'],walletTitle:'자기보관 지갑',walletPoints:['통제권이 더 큼','복구 책임은 본인','시드 문구 관리 필수'],buyNote:'금액, 수수료, 결제 수단을 함께 확인합니다.',networkNote:'자산 이름보다 네트워크를 먼저 맞춥니다.',transferNote:'주소, 네트워크, 소액 테스트를 마지막으로 봅니다.',custodyNote:'편의성과 통제권을 나란히 비교합니다.',buyAlt:'첫 구매 확인 화면을 보여주는 교육용 mock 이미지입니다.',networkAlt:'전송 네트워크 선택을 보여주는 교육용 mock 이미지입니다.',transferAlt:'전송 전 최종 확인 화면을 보여주는 교육용 이미지입니다.',custodyAlt:'거래소 보관과 자기보관 지갑 차이를 비교하는 교육용 이미지입니다.'},
    tr:{bundleTitle:'Pratik ekran rehberi',buyKicker:'İlk alım ekranı',networkKicker:'Ağ seçimi',transferKicker:'Son gönderim kontrolü',custodyKicker:'Saklama karşılaştırması',buyTitle:'İlk alım ekranında önce neye bakmalı',buyBody:'Onaylamadan önce tutar, ücret, ödeme yöntemi ve alınacak miktarı kontrol et.',buyPoints:['Küçük başla','Ücreti önce kontrol et','Saklama planı seç'],networkTitle:'Varlık adı aynı görünse de ağ yeniden kontrol edilir',networkBody:'Önce hedef ağ desteğini eşleştir. Yanlış ağ transferi engelleyebilir.',networkPoints:['Hedef desteği doğrula','Ücret ve süreyi karşılaştır','Uyarı varsa dur'],transferTitle:'Göndermeden önce son kontrol',transferPoints:['Varlık','Ağ','Adres','Küçük test','Son kontrol'],custodyTitle:'Borsa saklama vs kendi cüzdanın',exchangeTitle:'Borsa saklama',exchangePoints:['Hızlı işlem','Platform kurtarmaya yardım eder','Kontrol sınırlıdır'],walletTitle:'Kendi cüzdanın',walletPoints:['Daha fazla kontrol','Kurtarma sorumluluğu sende','Seed phrase önce gelir'],buyNote:'Tutar, ücret ve ödeme yöntemini birlikte kontrol et.',networkNote:'Varlık adından önce ağı eşleştir.',transferNote:'Onaydan önce adres, ağ ve küçük testi kontrol et.',custodyNote:'Kolaylık ve kontrolü yan yana karşılaştır.',buyAlt:'İlk kripto alımı için eğitim amaçlı mock arayüz.',networkAlt:'Transfer ağı seçimi için eğitim mock arayüzü.',transferAlt:'Son gönderim kontrolü için eğitim arayüzü.',custodyAlt:'Borsa saklama ve kendi cüzdanı karşılaştıran eğitim görseli.'},
    br:{bundleTitle:'Telas práticas guiadas',buyKicker:'Primeira compra',networkKicker:'Seleção de rede',transferKicker:'Revisão final do envio',custodyKicker:'Comparação de custódia',buyTitle:'O que verificar na primeira compra',buyBody:'Antes de confirmar, confira valor, taxa, forma de pagamento e quantidade recebida.',buyPoints:['Comece pequeno','Confira a taxa primeiro','Escolha um plano de custódia'],networkTitle:'A rede importa mesmo quando o ativo parece igual',networkBody:'Combine primeiro com a rede aceita pelo destino. Rede errada pode bloquear o envio.',networkPoints:['Confirmar suporte do destino','Comparar taxa e tempo','Parar se houver alerta'],transferTitle:'Última checagem antes de enviar',transferPoints:['Ativo','Rede','Endereço','Teste pequeno','Revisão final'],custodyTitle:'Custódia em exchange vs carteira própria',exchangeTitle:'Exchange',exchangePoints:['Rápido para negociar','Plataforma ajuda na recuperação','Controle limitado'],walletTitle:'Carteira própria',walletPoints:['Mais controle direto','Recuperação é sua responsabilidade','Seed phrase em primeiro lugar'],buyNote:'Confira valor, taxa e pagamento juntos.',networkNote:'Ajuste a rede antes de focar no nome do ativo.',transferNote:'Confira endereço, rede e teste pequeno antes de confirmar.',custodyNote:'Compare conveniência e controle direto.',buyAlt:'Interface educativa simulada para primeira compra cripto.',networkAlt:'Interface educativa para escolher rede de transferência.',transferAlt:'Interface educativa de revisão final de envio.',custodyAlt:'Imagem educativa comparando custódia em exchange e carteira própria.'},
    ar:{bundleTitle:'شاشات عملية إرشادية',buyKicker:'شاشة الشراء الأول',networkKicker:'اختيار الشبكة',transferKicker:'مراجعة الإرسال النهائية',custodyKicker:'مقارنة الحفظ',buyTitle:'ما الذي تفحصه في أول شاشة شراء',buyBody:'قبل التأكيد راجع المبلغ والرسوم وطريقة الدفع والكمية المستلمة.',buyPoints:['ابدأ صغيرًا','افحص الرسوم أولًا','اختر خطة حفظ'],networkTitle:'الشبكة مهمة حتى إذا بدا اسم الأصل مألوفًا',networkBody:'طابق شبكة الوجهة أولًا. الشبكة الخطأ قد تعطل التحويل.',networkPoints:['أكد دعم الوجهة','قارن الرسوم والوقت','توقف عند ظهور تحذير'],transferTitle:'الفحص الأخير قبل الإرسال',transferPoints:['الأصل','الشبكة','العنوان','اختبار صغير','مراجعة أخيرة'],custodyTitle:'حفظ المنصة مقابل المحفظة الذاتية',exchangeTitle:'حفظ المنصة',exchangePoints:['تداول سريع','المنصة تساعد في الاسترداد','التحكم محدود'],walletTitle:'محفظة ذاتية',walletPoints:['تحكم مباشر أكثر','مسؤولية الاسترداد عليك','عبارة الاسترداد أولًا'],buyNote:'راجع المبلغ والرسوم وطريقة الدفع معًا.',networkNote:'طابق الشبكة قبل التركيز على اسم الأصل.',transferNote:'راجع العنوان والشبكة واختبارًا صغيرًا قبل التأكيد.',custodyNote:'قارن الراحة والتحكم المباشر جنبًا إلى جنب.',buyAlt:'واجهة تعليمية وهمية لأول شراء عملة رقمية.',networkAlt:'واجهة تعليمية لاختيار شبكة التحويل.',transferAlt:'واجهة تعليمية لمراجعة التحويل النهائية.',custodyAlt:'صورة تعليمية تقارن حفظ المنصة بالمحفظة الذاتية.'},
    vi:{bundleTitle:'Màn hình thực hành',buyKicker:'Màn hình mua đầu tiên',networkKicker:'Chọn mạng',transferKicker:'Kiểm tra gửi cuối',custodyKicker:'So sánh lưu trữ',buyTitle:'Cần kiểm tra gì khi mua lần đầu',buyBody:'Trước khi xác nhận, kiểm tra số tiền, phí, phương thức thanh toán và lượng nhận.',buyPoints:['Bắt đầu nhỏ','Kiểm tra phí trước','Chọn kế hoạch lưu trữ'],networkTitle:'Mạng vẫn quan trọng dù tên tài sản giống nhau',networkBody:'Khớp mạng đích trước. Sai mạng có thể làm chuyển tiền thất bại.',networkPoints:['Xác nhận ví nhận hỗ trợ','So sánh phí và thời gian','Dừng nếu có cảnh báo'],transferTitle:'Kiểm tra cuối trước khi gửi',transferPoints:['Tài sản','Mạng','Địa chỉ','Test nhỏ','Xem lại cuối'],custodyTitle:'Lưu trên sàn vs tự giữ ví',exchangeTitle:'Lưu trên sàn',exchangePoints:['Giao dịch nhanh','Nền tảng hỗ trợ khôi phục','Quyền kiểm soát giới hạn'],walletTitle:'Ví tự quản lý',walletPoints:['Kiểm soát trực tiếp hơn','Bạn chịu trách nhiệm khôi phục','Seed phrase là ưu tiên'],buyNote:'Kiểm tra số tiền, phí và thanh toán cùng lúc.',networkNote:'Khớp mạng trước khi nhìn tên tài sản.',transferNote:'Kiểm tra địa chỉ, mạng và test nhỏ trước khi xác nhận.',custodyNote:'So sánh sự tiện lợi và quyền kiểm soát.',buyAlt:'Mock UI giáo dục cho lần mua crypto đầu tiên.',networkAlt:'Mock UI giáo dục để chọn mạng chuyển tiền.',transferAlt:'Giao diện giáo dục kiểm tra cuối trước khi gửi.',custodyAlt:'Ảnh giáo dục so sánh lưu trên sàn và ví tự quản lý.'}
  };
  GUIDE6.pt = GUIDE6.br;
  GUIDE6.es = {bundleTitle:'Pantallas prácticas guiadas',buyKicker:'Primera compra',networkKicker:'Selección de red',transferKicker:'Revisión final del envío',custodyKicker:'Comparación de custodia',buyTitle:'Qué revisar en la primera compra',buyBody:'Antes de confirmar, revisa importe, comisión, método de pago y cantidad recibida.',buyPoints:['Empieza pequeño','Revisa la comisión','Elige plan de custodia'],networkTitle:'La red importa aunque el activo parezca igual',networkBody:'Primero coincide la red del destino. Una red equivocada puede bloquear el envío.',networkPoints:['Confirmar soporte del destino','Comparar comisión y tiempo','Detenerse si hay alerta'],transferTitle:'Última revisión antes de enviar',transferPoints:['Activo','Red','Dirección','Prueba pequeña','Revisión final'],custodyTitle:'Custodia en exchange vs billetera propia',exchangeTitle:'Exchange',exchangePoints:['Rápido para operar','La plataforma ayuda a recuperar','Control limitado'],walletTitle:'Billetera propia',walletPoints:['Más control directo','Tú gestionas recuperación','Primero la seed phrase'],buyNote:'Revisa importe, comisión y pago juntos.',networkNote:'Ajusta la red antes del nombre del activo.',transferNote:'Revisa dirección, red y prueba pequeña antes de confirmar.',custodyNote:'Compara comodidad y control directo.',buyAlt:'Interfaz educativa simulada para primera compra cripto.',networkAlt:'Interfaz educativa para elegir red de transferencia.',transferAlt:'Interfaz educativa de revisión final de envío.',custodyAlt:'Imagen educativa que compara custodia en exchange y billetera propia.'};
  GUIDE6.id = {bundleTitle:'Layar praktik terpandu',buyKicker:'Layar beli pertama',networkKicker:'Pilihan jaringan',transferKicker:'Tinjauan kirim akhir',custodyKicker:'Perbandingan custody',buyTitle:'Yang dicek di layar beli pertama',buyBody:'Sebelum konfirmasi, cek jumlah, fee, metode bayar, dan jumlah diterima.',buyPoints:['Mulai kecil','Cek fee dulu','Pilih rencana simpan'],networkTitle:'Network tetap penting walau nama aset terlihat sama',networkBody:'Cocokkan network tujuan lebih dulu. Network salah bisa menggagalkan transfer.',networkPoints:['Pastikan tujuan mendukung','Bandingkan fee dan waktu','Berhenti jika ada peringatan'],transferTitle:'Cek terakhir sebelum mengirim',transferPoints:['Aset','Network','Address','Tes kecil','Tinjauan akhir'],custodyTitle:'Custody exchange vs wallet sendiri',exchangeTitle:'Exchange',exchangePoints:['Cepat untuk trading','Platform bantu pemulihan','Kontrol terbatas'],walletTitle:'Wallet sendiri',walletPoints:['Kontrol lebih langsung','Pemulihan tanggung jawab Anda','Seed phrase prioritas'],buyNote:'Cek jumlah, fee, dan pembayaran bersama.',networkNote:'Cocokkan network sebelum fokus pada nama aset.',transferNote:'Cek address, network, dan tes kecil sebelum konfirmasi.',custodyNote:'Bandingkan kemudahan dan kontrol langsung.',buyAlt:'Mock UI edukasi untuk pembelian crypto pertama.',networkAlt:'Mock UI edukasi untuk memilih network transfer.',transferAlt:'Antarmuka edukasi untuk tinjauan transfer akhir.',custodyAlt:'Gambar edukasi perbandingan custody exchange dan wallet sendiri.'};
  GUIDE6.th = {bundleTitle:'หน้าจอฝึกใช้งาน',buyKicker:'หน้าซื้อครั้งแรก',networkKicker:'เลือกเครือข่าย',transferKicker:'ตรวจครั้งสุดท้ายก่อนส่ง',custodyKicker:'เทียบการเก็บรักษา',buyTitle:'ควรดูอะไรในหน้าซื้อครั้งแรก',buyBody:'ก่อนยืนยัน ให้ดูจำนวนเงิน ค่าธรรมเนียม วิธีจ่าย และจำนวนที่จะได้รับ.',buyPoints:['เริ่มด้วยยอดเล็ก','ดูค่าธรรมเนียมก่อน','วางแผนการเก็บ'],networkTitle:'เครือข่ายสำคัญแม้ชื่อสินทรัพย์เหมือนกัน',networkBody:'จับคู่เครือข่ายปลายทางก่อน เครือข่ายผิดอาจทำให้ส่งไม่สำเร็จ.',networkPoints:['ยืนยันว่าปลายทางรองรับ','เทียบค่าธรรมเนียมและเวลา','หยุดถ้ามีคำเตือน'],transferTitle:'ตรวจครั้งสุดท้ายก่อนส่ง',transferPoints:['สินทรัพย์','เครือข่าย','ที่อยู่','ทดสอบเล็กน้อย','ตรวจสุดท้าย'],custodyTitle:'เก็บในเว็บเทรด vs เก็บเองในวอลเล็ต',exchangeTitle:'เว็บเทรด',exchangePoints:['เทรดได้เร็ว','แพลตฟอร์มช่วยกู้คืน','ควบคุมจำกัด'],walletTitle:'วอลเล็ตส่วนตัว',walletPoints:['ควบคุมได้มากกว่า','กู้คืนรับผิดชอบเอง','seed phrase สำคัญที่สุด'],buyNote:'ตรวจจำนวน ค่าธรรมเนียม และการจ่ายพร้อมกัน.',networkNote:'จับคู่เครือข่ายก่อนดูชื่อสินทรัพย์.',transferNote:'ตรวจที่อยู่ เครือข่าย และทดสอบเล็กน้อยก่อนยืนยัน.',custodyNote:'เทียบความสะดวกกับการควบคุมโดยตรง.',buyAlt:'ภาพ mock UI เพื่อการศึกษาสำหรับการซื้อคริปโตครั้งแรก.',networkAlt:'ภาพ mock UI เพื่อการศึกษาสำหรับการเลือกเครือข่ายโอน.',transferAlt:'ภาพเพื่อการศึกษาสำหรับตรวจครั้งสุดท้ายก่อนส่ง.',custodyAlt:'ภาพเพื่อการศึกษาเปรียบเทียบการเก็บในเว็บเทรดและวอลเล็ตส่วนตัว.'};
  GUIDE6.ha = {bundleTitle:'Allon aiki na jagora',buyKicker:'Allon siye na farko',networkKicker:'Zabin network',transferKicker:'Binciken karshe kafin aika',custodyKicker:'Kwatanta ajiya',buyTitle:'Abin dubawa a siye na farko',buyBody:'Kafin tabbatarwa, duba kudi, fee, hanyar biya, da adadin da za a samu.',buyPoints:['Fara da kadan','Duba fee tukuna','Zabi tsarin ajiya'],networkTitle:'Network yana da muhimmanci ko sunan asset iri daya ne',networkBody:'Daidaita network na inda za a aika tukuna. Kuskuren network na iya hana transfer.',networkPoints:['Tabbatar da goyon bayan inda za a aika','Kwatanta fee da lokaci','Tsaya idan akwai gargadi'],transferTitle:'Bincike na karshe kafin aika',transferPoints:['Asset','Network','Address','Gwaji kadan','Bita ta karshe'],custodyTitle:'Ajiya a exchange vs walat naka',exchangeTitle:'Exchange',exchangePoints:['Sauri wajen ciniki','Platform na taimakawa dawo da account','Iko yana da iyaka'],walletTitle:'Walat naka',walletPoints:['Iko kai tsaye ya fi yawa','Kai ke da alhakin dawo da shi','Seed phrase na farko'],buyNote:'Duba kudi, fee, da hanyar biya tare.',networkNote:'Daidaita network kafin sunan asset.',transferNote:'Duba address, network, da gwaji kadan kafin tabbatarwa.',custodyNote:'Kwatanta sauki da iko kai tsaye.',buyAlt:'Mock UI na ilmantarwa don siyan crypto na farko.',networkAlt:'Mock UI na ilmantarwa don zabar network.',transferAlt:'Allon ilmantarwa na binciken karshe kafin aika.',custodyAlt:'Hoto na ilmantarwa da ke kwatanta ajiya a exchange da walat naka.'};

  var GUIDE7 = {
    en:{bundleTitle:'Practical security screens',siteKicker:'Site comparison',supportKicker:'Fake support DM',seedKicker:'Seed warning',addressKicker:'Address poisoning',clipboardKicker:'Clipboard swapping',siteTitle:'A normal site and a suspicious site can look close at first glance',siteBody:'Even if the layout feels familiar, the full domain still matters most.',siteTags:['Open the official source yourself','Read the full domain','Check spelling twice'],supportTitle:'Fake support DMs usually create pressure first',supportPoints:['They contact you first and promise quick help.','They push urgent wallet connection or verification.','If they ask for recovery words, stop immediately.'],seedTitle:'If a page asks for recovery words, treat it as a stop sign',seedPoints:['Rewards or verification do not make seed entry safe.','Real services do not need recovery words on random pages.','Close the screen and reopen the official source.'],addressTitle:'Address poisoning uses look-alike recent addresses',addressPoints:['The beginning and end can look familiar while the middle differs.','Copying from recent history can be risky.','Read more than a few edge characters before sending.'],clipboardTitle:'A pasted address can change after you copy it',clipboardPoints:['Compare before copying and again after pasting.','Do not rely only on first and last characters.','Use a small test before a larger send.'],siteNote:'Reading the full domain matters more than a familiar layout.',supportNote:'Be extra careful when a support account contacts you first.',seedNote:'If you see a recovery-word input box, stop immediately.',addressNote:'Look at the full address, not just a few matching characters.',clipboardNote:'After pasting, confirm the address did not change.',siteAlt:'Educational comparison of a safer domain and a suspicious domain.',supportAlt:'Educational fake support DM mock image.',seedAlt:'Educational warning screen for seed phrase entry.',addressAlt:'Educational address poisoning mock transaction image.',clipboardAlt:'Educational clipboard swapping mock transfer flow.'},
    ko:{bundleTitle:'실전 보안 화면 가이드',siteKicker:'사이트 비교',supportKicker:'가짜 지원 DM',seedKicker:'시드 경고',addressKicker:'주소 오염',clipboardKicker:'클립보드 위험',siteTitle:'정상 사이트와 수상한 사이트는 비슷해 보일 수 있습니다',siteBody:'화면이 익숙해 보여도 전체 도메인을 직접 확인해야 합니다.',siteTags:['공식 링크 직접 열기','전체 도메인 확인','철자 다시 보기'],supportTitle:'가짜 고객지원 DM은 먼저 압박합니다',supportPoints:['문제를 바로 해결해주겠다며 DM으로 먼저 접근합니다.','지갑 연결이나 긴급 확인을 요구하며 서두르게 만듭니다.','복구 단어나 시드 문구를 요구하면 즉시 멈추세요.'],seedTitle:'복구 문구 입력 화면이 보이면 바로 멈추세요',seedPoints:['보상이나 인증을 이유로 해도 시드 입력은 안전하지 않습니다.','진짜 서비스도 임의 페이지에서 복구 단어를 요구하지 않습니다.','화면을 닫고 공식 출처를 직접 다시 찾으세요.'],addressTitle:'주소 오염은 비슷한 최근 주소를 이용합니다',addressPoints:['앞뒤 글자가 비슷해도 중간은 완전히 다를 수 있습니다.','최근 기록의 익숙한 주소를 그대로 복사하면 위험합니다.','주소 전체를 더 넓게 비교하는 습관이 필요합니다.'],clipboardTitle:'복사 후 붙여넣을 때 주소가 바뀔 수 있습니다',clipboardPoints:['복사 직후와 붙여넣은 뒤의 주소를 다시 비교하세요.','앞뒤 몇 글자만 보지 말고 더 넓게 확인하세요.','큰 금액 전에는 소액 테스트가 도움이 됩니다.'],siteNote:'도메인 전체를 읽는 습관이 가장 중요합니다.',supportNote:'먼저 연락하는 지원 계정은 특히 조심합니다.',seedNote:'복구 문구 입력창이 보이면 바로 멈춥니다.',addressNote:'앞뒤 몇 글자만 같아도 전체 주소를 다시 봅니다.',clipboardNote:'붙여넣은 뒤 주소가 바뀌지 않았는지 꼭 확인합니다.',siteAlt:'정상 사이트와 의심 사이트 도메인을 비교하는 교육용 이미지입니다.',supportAlt:'가짜 고객지원 DM을 보여주는 교육용 채팅 mock 이미지입니다.',seedAlt:'시드 문구 입력 유도 화면을 경고하는 교육용 이미지입니다.',addressAlt:'주소 오염 공격을 설명하는 교육용 최근 거래 mock 이미지입니다.',clipboardAlt:'클립보드 스와핑 위험을 설명하는 교육용 전송 흐름 이미지입니다.'},
    tr:{bundleTitle:'Pratik güvenlik ekranları',siteKicker:'Site karşılaştırması',supportKicker:'Sahte destek DM',seedKicker:'Seed uyarısı',addressKicker:'Address poisoning',clipboardKicker:'Clipboard riski',siteTitle:'Normal site ve şüpheli site ilk bakışta benzer görünebilir',siteBody:'Sayfa tanıdık görünse bile tam domain en önemli kontroldür.',siteTags:['Resmi kaynağı kendin aç','Tam domaini oku','Yazımı iki kez kontrol et'],supportTitle:'Sahte destek DM’leri önce baskı kurar',supportPoints:['Önce onlar yazar ve hızlı yardım vaat eder.','Acil cüzdan bağlantısı veya doğrulama ister.','Kurtarma kelimeleri isterse hemen dur.'],seedTitle:'Bir sayfa kurtarma kelimeleri isterse dur işareti say',seedPoints:['Ödül veya doğrulama seed girişini güvenli yapmaz.','Gerçek hizmetler rastgele sayfada kurtarma kelimesi istemez.','Ekranı kapat ve resmi kaynağı yeniden aç.'],addressTitle:'Address poisoning benzer geçmiş adresleri kullanır',addressPoints:['Baş ve son benzer görünürken orta kısım farklı olabilir.','Geçmişten kopyalamak riskli olabilir.','Göndermeden önce birkaç karakterden fazlasını oku.'],clipboardTitle:'Kopyaladığın adres yapıştırınca değişebilir',clipboardPoints:['Kopyalamadan önce ve yapıştırdıktan sonra karşılaştır.','Sadece ilk ve son karakterlere güvenme.','Büyük gönderimden önce küçük test yap.'],siteNote:'Tam domaini okumak tanıdık görünüme güvenmekten önemlidir.',supportNote:'Önce destek hesabı yazıyorsa daha dikkatli ol.',seedNote:'Kurtarma kelimesi kutusu görürsen hemen dur.',addressNote:'Sadece eşleşen birkaç karaktere bakma, tam adresi oku.',clipboardNote:'Yapıştırdıktan sonra adresin değişmediğini doğrula.',siteAlt:'Güvenli domain ve şüpheli domain karşılaştırması.',supportAlt:'Sahte destek DM mock görseli.',seedAlt:'Seed phrase giriş uyarısı görseli.',addressAlt:'Address poisoning işlem mock görseli.',clipboardAlt:'Clipboard swapping transfer akışı görseli.'},
    br:{bundleTitle:'Telas práticas de segurança',siteKicker:'Comparação de site',supportKicker:'DM de suporte falso',seedKicker:'Alerta de seed',addressKicker:'Address poisoning',clipboardKicker:'Risco no clipboard',siteTitle:'Um site normal e um suspeito podem parecer parecidos',siteBody:'Mesmo com layout familiar, o domínio completo ainda é o principal.',siteTags:['Abra a fonte oficial','Leia o domínio completo','Confira a grafia duas vezes'],supportTitle:'DMs de suporte falso criam pressão primeiro',supportPoints:['Eles chamam primeiro e prometem ajuda rápida.','Forçam conexão da carteira ou verificação urgente.','Se pedirem palavras de recuperação, pare.'],seedTitle:'Se uma página pedir palavras de recuperação, pare',seedPoints:['Recompensa ou verificação não torna seed segura.','Serviços reais não pedem seed em páginas aleatórias.','Feche a tela e abra a fonte oficial.'],addressTitle:'Address poisoning usa endereços recentes parecidos',addressPoints:['Começo e fim podem parecer iguais enquanto o meio muda.','Copiar do histórico recente pode ser arriscado.','Leia mais do que as pontas antes de enviar.'],clipboardTitle:'O endereço colado pode mudar depois da cópia',clipboardPoints:['Compare antes de copiar e depois de colar.','Não confie só no começo e no fim.','Faça um teste pequeno antes de enviar mais.'],siteNote:'Ler o domínio completo importa mais que o layout familiar.',supportNote:'Tenha cuidado quando suporte entra em contato primeiro.',seedNote:'Se aparecer campo de seed, pare imediatamente.',addressNote:'Olhe o endereço inteiro, não só alguns caracteres.',clipboardNote:'Depois de colar, confirme que o endereço não mudou.',siteAlt:'Comparação educativa entre domínio seguro e suspeito.',supportAlt:'Imagem educativa de DM de suporte falso.',seedAlt:'Tela educativa de alerta para seed phrase.',addressAlt:'Imagem educativa de address poisoning.',clipboardAlt:'Fluxo educativo de clipboard swapping.'},
    ar:{bundleTitle:'شاشات أمان عملية',siteKicker:'مقارنة المواقع',supportKicker:'رسالة دعم مزيفة',seedKicker:'تحذير العبارة',addressKicker:'تسميم العنوان',clipboardKicker:'خطر الحافظة',siteTitle:'قد يبدو الموقع الطبيعي والمشبوه متشابهين أولًا',siteBody:'حتى لو بدا التصميم مألوفًا، يبقى النطاق الكامل هو الأهم.',siteTags:['افتح المصدر الرسمي بنفسك','اقرأ النطاق الكامل','راجع التهجئة مرتين'],supportTitle:'رسائل الدعم المزيفة تبدأ بالضغط',supportPoints:['يتواصلون معك أولًا ويعدون بمساعدة سريعة.','يدفعونك لربط المحفظة أو تحقق عاجل.','إذا طلبوا كلمات الاسترداد فتوقف فورًا.'],seedTitle:'إذا طلبت صفحة كلمات الاسترداد فتوقف',seedPoints:['المكافأة أو التحقق لا يجعل إدخال العبارة آمنًا.','الخدمات الحقيقية لا تطلب كلمات الاسترداد في صفحات عشوائية.','أغلق الشاشة وافتح المصدر الرسمي بنفسك.'],addressTitle:'تسميم العنوان يستخدم عناوين حديثة متشابهة',addressPoints:['قد تتشابه البداية والنهاية بينما الوسط مختلف.','النسخ من السجل الحديث قد يكون خطرًا.','اقرأ أكثر من بضعة أحرف قبل الإرسال.'],clipboardTitle:'قد يتغير العنوان الملصق بعد النسخ',clipboardPoints:['قارن قبل النسخ وبعد اللصق.','لا تعتمد فقط على أول وآخر الأحرف.','استخدم اختبارًا صغيرًا قبل إرسال كبير.'],siteNote:'قراءة النطاق الكامل أهم من الشكل المألوف.',supportNote:'احذر عندما يتواصل حساب دعم معك أولًا.',seedNote:'إذا رأيت حقل كلمات استرداد فتوقف فورًا.',addressNote:'انظر إلى العنوان الكامل لا إلى بضعة أحرف فقط.',clipboardNote:'بعد اللصق تأكد أن العنوان لم يتغير.',siteAlt:'مقارنة تعليمية بين نطاق آمن ونطاق مشبوه.',supportAlt:'صورة تعليمية لرسالة دعم مزيفة.',seedAlt:'شاشة تعليمية تحذر من إدخال عبارة الاسترداد.',addressAlt:'صورة تعليمية لتسميم العنوان.',clipboardAlt:'تدفق تعليمي لخطر تبديل الحافظة.'},
    vi:{bundleTitle:'Màn hình bảo mật thực hành',siteKicker:'So sánh website',supportKicker:'DM hỗ trợ giả',seedKicker:'Cảnh báo seed',addressKicker:'Address poisoning',clipboardKicker:'Rủi ro clipboard',siteTitle:'Website thật và website đáng ngờ có thể trông rất giống nhau',siteBody:'Dù giao diện quen thuộc, domain đầy đủ vẫn là phần quan trọng nhất.',siteTags:['Tự mở nguồn chính thức','Đọc toàn bộ domain','Kiểm tra chính tả hai lần'],supportTitle:'DM hỗ trợ giả thường tạo áp lực trước',supportPoints:['Họ liên hệ trước và hứa giúp nhanh.','Họ thúc ép kết nối ví hoặc xác minh gấp.','Nếu yêu cầu recovery words, hãy dừng ngay.'],seedTitle:'Nếu trang yêu cầu recovery words, hãy xem như tín hiệu dừng',seedPoints:['Phần thưởng hay xác minh không làm nhập seed an toàn.','Dịch vụ thật không cần recovery words trên trang lạ.','Đóng màn hình và tự mở nguồn chính thức.'],addressTitle:'Address poisoning dùng địa chỉ gần đây trông giống nhau',addressPoints:['Đầu và cuối có thể giống, nhưng phần giữa khác.','Copy từ lịch sử gần đây có thể rủi ro.','Đọc nhiều hơn vài ký tự đầu và cuối trước khi gửi.'],clipboardTitle:'Địa chỉ đã dán có thể đổi sau khi copy',clipboardPoints:['So sánh trước khi copy và sau khi dán.','Đừng chỉ tin vào ký tự đầu và cuối.','Test nhỏ trước khi gửi nhiều hơn.'],siteNote:'Đọc toàn bộ domain quan trọng hơn giao diện quen thuộc.',supportNote:'Hãy cẩn thận khi tài khoản hỗ trợ liên hệ trước.',seedNote:'Thấy ô nhập recovery words thì dừng ngay.',addressNote:'Xem toàn bộ địa chỉ, không chỉ vài ký tự giống nhau.',clipboardNote:'Sau khi dán, xác nhận địa chỉ không đổi.',siteAlt:'Hình giáo dục so sánh domain an toàn và đáng ngờ.',supportAlt:'Hình mock DM hỗ trợ giả cho giáo dục.',seedAlt:'Màn hình cảnh báo nhập seed phrase cho giáo dục.',addressAlt:'Hình mock address poisoning cho giáo dục.',clipboardAlt:'Luồng mock clipboard swapping cho giáo dục.'}
  };
  GUIDE7.pt = GUIDE7.br;
  GUIDE7.es = {bundleTitle:'Pantallas prácticas de seguridad',siteKicker:'Comparación de sitio',supportKicker:'DM de soporte falso',seedKicker:'Alerta de seed',addressKicker:'Address poisoning',clipboardKicker:'Riesgo de portapapeles',siteTitle:'Un sitio normal y uno sospechoso pueden parecer similares',siteBody:'Aunque el diseño parezca familiar, el dominio completo sigue siendo lo más importante.',siteTags:['Abre la fuente oficial','Lee el dominio completo','Revisa la escritura dos veces'],supportTitle:'Los DMs de soporte falso crean presión primero',supportPoints:['Te contactan primero y prometen ayuda rápida.','Empujan conexión de billetera o verificación urgente.','Si piden palabras de recuperación, detente.'],seedTitle:'Si una página pide palabras de recuperación, detente',seedPoints:['Premio o verificación no hacen segura la seed.','Los servicios reales no piden recovery words en páginas aleatorias.','Cierra la pantalla y abre la fuente oficial.'],addressTitle:'Address poisoning usa direcciones recientes parecidas',addressPoints:['Inicio y final pueden parecer iguales mientras el medio cambia.','Copiar del historial reciente puede ser riesgoso.','Lee más que unos pocos caracteres antes de enviar.'],clipboardTitle:'La dirección pegada puede cambiar después de copiar',clipboardPoints:['Compara antes de copiar y después de pegar.','No confíes solo en el inicio y el final.','Haz una prueba pequeña antes de enviar más.'],siteNote:'Leer el dominio completo importa más que un diseño familiar.',supportNote:'Ten cuidado cuando soporte te contacte primero.',seedNote:'Si ves un campo de recovery words, detente inmediatamente.',addressNote:'Mira la dirección completa, no solo pocos caracteres.',clipboardNote:'Después de pegar, confirma que la dirección no cambió.',siteAlt:'Comparación educativa entre dominio seguro y sospechoso.',supportAlt:'Imagen educativa de DM de soporte falso.',seedAlt:'Pantalla educativa de alerta para seed phrase.',addressAlt:'Imagen educativa de address poisoning.',clipboardAlt:'Flujo educativo de clipboard swapping.'};
  GUIDE7.id = {bundleTitle:'Layar keamanan praktis',siteKicker:'Perbandingan situs',supportKicker:'DM dukungan palsu',seedKicker:'Peringatan seed',addressKicker:'Address poisoning',clipboardKicker:'Risiko clipboard',siteTitle:'Situs normal dan situs mencurigakan bisa terlihat mirip',siteBody:'Walau tampilannya familiar, domain penuh tetap yang paling penting.',siteTags:['Buka sumber resmi sendiri','Baca domain penuh','Cek ejaan dua kali'],supportTitle:'DM dukungan palsu biasanya memberi tekanan dulu',supportPoints:['Mereka menghubungi dulu dan menjanjikan bantuan cepat.','Mereka mendorong koneksi wallet atau verifikasi mendesak.','Jika meminta recovery words, berhenti segera.'],seedTitle:'Jika halaman meminta recovery words, berhenti',seedPoints:['Hadiah atau verifikasi tidak membuat input seed aman.','Layanan asli tidak meminta recovery words di halaman acak.','Tutup layar dan buka sumber resmi sendiri.'],addressTitle:'Address poisoning memakai address terbaru yang mirip',addressPoints:['Awal dan akhir bisa familiar, tetapi bagian tengah berbeda.','Menyalin dari riwayat terbaru bisa berisiko.','Baca lebih dari beberapa karakter ujung sebelum mengirim.'],clipboardTitle:'Address yang ditempel bisa berubah setelah disalin',clipboardPoints:['Bandingkan sebelum menyalin dan setelah menempel.','Jangan hanya percaya karakter awal dan akhir.','Gunakan tes kecil sebelum kirim besar.'],siteNote:'Membaca domain penuh lebih penting dari tampilan familiar.',supportNote:'Hati-hati jika akun dukungan menghubungi Anda dulu.',seedNote:'Jika melihat kolom recovery words, berhenti segera.',addressNote:'Lihat address penuh, bukan hanya beberapa karakter yang sama.',clipboardNote:'Setelah menempel, pastikan address tidak berubah.',siteAlt:'Perbandingan edukasi domain aman dan domain mencurigakan.',supportAlt:'Gambar edukasi DM dukungan palsu.',seedAlt:'Layar edukasi peringatan input seed phrase.',addressAlt:'Gambar edukasi address poisoning.',clipboardAlt:'Alur edukasi clipboard swapping.'};
  GUIDE7.th = {bundleTitle:'หน้าจอความปลอดภัย',siteKicker:'เปรียบเทียบเว็บไซต์',supportKicker:'DM support ปลอม',seedKicker:'เตือน seed',addressKicker:'Address poisoning',clipboardKicker:'ความเสี่ยง clipboard',siteTitle:'เว็บปกติกับเว็บน่าสงสัยอาจดูคล้ายกัน',siteBody:'แม้หน้าตาคุ้นเคย แต่ domain เต็มยังสำคัญที่สุด.',siteTags:['เปิดแหล่งทางการเอง','อ่าน domain เต็ม','ตรวจตัวสะกดซ้ำ'],supportTitle:'DM support ปลอมมักสร้างแรงกดดันก่อน',supportPoints:['ติดต่อมาก่อนและสัญญาว่าช่วยเร็ว.','เร่งให้เชื่อม wallet หรือยืนยันด่วน.','ถ้าขอ recovery words ให้หยุดทันที.'],seedTitle:'ถ้าหน้าขอ recovery words ให้หยุด',seedPoints:['รางวัลหรือการยืนยันไม่ทำให้กรอก seed ปลอดภัย.','บริการจริงไม่ขอ recovery words ในหน้าสุ่ม.','ปิดหน้าจอและเปิดแหล่งทางการเอง.'],addressTitle:'Address poisoning ใช้ที่อยู่ล่าสุดที่คล้ายกัน',addressPoints:['ต้นและท้ายอาจคุ้น แต่ตรงกลางต่างกัน.','คัดลอกจากประวัติล่าสุดอาจเสี่ยง.','อ่านมากกว่าสองสามตัวก่อนส่ง.'],clipboardTitle:'ที่อยู่ที่วางอาจเปลี่ยนหลังคัดลอก',clipboardPoints:['เทียบก่อนคัดลอกและหลังวาง.','อย่าเชื่อแค่ตัวแรกและตัวท้าย.','ทดสอบเล็กน้อยก่อนส่งจำนวนมาก.'],siteNote:'อ่าน domain เต็มสำคัญกว่าหน้าตาที่คุ้นเคย.',supportNote:'ระวังเมื่อบัญชี support ติดต่อมาก่อน.',seedNote:'เห็นช่อง recovery words ให้หยุดทันที.',addressNote:'ดูที่อยู่เต็ม ไม่ใช่แค่บางตัวอักษร.',clipboardNote:'หลังวาง ให้ยืนยันว่าที่อยู่ไม่เปลี่ยน.',siteAlt:'ภาพเพื่อการศึกษาเปรียบเทียบ domain ปลอดภัยและน่าสงสัย.',supportAlt:'ภาพเพื่อการศึกษา DM support ปลอม.',seedAlt:'หน้าจอเตือนการกรอก seed phrase เพื่อการศึกษา.',addressAlt:'ภาพเพื่อการศึกษา address poisoning.',clipboardAlt:'ลำดับภาพเพื่อการศึกษา clipboard swapping.'};
  GUIDE7.ha = {bundleTitle:'Allon tsaro na aiki',siteKicker:'Kwatanta shafi',supportKicker:'DM support na karya',seedKicker:'Gargadin seed',addressKicker:'Address poisoning',clipboardKicker:'Hadarin clipboard',siteTitle:'Shafi na gaskiya da na zargi na iya kama da juna',siteBody:'Ko layout ya saba maka, cikakken domain ya fi muhimmanci.',siteTags:['Bude official source da kanka','Karanta full domain','Duba rubutu sau biyu'],supportTitle:'DM support na karya yakan fara da matsin lamba',supportPoints:['Suna tuntubarka tukuna su ce za su taimaka da sauri.','Suna matsa wallet connection ko verification na gaggawa.','Idan sun nemi recovery words, tsaya nan take.'],seedTitle:'Idan shafi ya nemi recovery words, ka tsaya',seedPoints:['Lada ko verification ba sa sa seed input ya zama lafiya.','Ayyuka na gaskiya ba sa neman recovery words a shafi bazuwar.','Rufe allon ka bude official source da kanka.'],addressTitle:'Address poisoning yana amfani da address na baya mai kama',addressPoints:['Farko da karshe na iya kama yayin da tsakiya ya bambanta.','Kwafa daga tarihin baya na iya zama hadari.','Karanta fiye da haruffan gefe kafin aika.'],clipboardTitle:'Address da aka manna na iya canzawa bayan kwafa',clipboardPoints:['Kwatanta kafin kwafa da bayan manna.','Kada ka dogara da farkon da karshen haruffa kadai.','Yi gwaji kadan kafin aika mai yawa.'],siteNote:'Karanta full domain ya fi layout da ka saba gani.',supportNote:'Yi hankali idan support account ya fara tuntubarka.',seedNote:'Idan ka ga akwatin recovery words, tsaya nan take.',addressNote:'Duba address gaba daya, ba haruffa kadan kawai ba.',clipboardNote:'Bayan manna, tabbatar address bai canza ba.',siteAlt:'Kwatanta domain mai aminci da domain mai zargi.',supportAlt:'Hoto na DM support na karya.',seedAlt:'Allon gargadi game da shigar seed phrase.',addressAlt:'Hoto na address poisoning.',clipboardAlt:'Tsarin clipboard swapping na ilmantarwa.'};

  function pack(obj, lang){
    return obj[lang] || obj[lang === 'pt' ? 'br' : lang] || obj.en;
  }

  function patchUiStore(store){
    if(!store) return;
    LANGS.forEach(function(lang){
      if(!store[lang]) store[lang] = {};
      var nav = pack(NAV, lang);
      var common = pack(COMMON, lang);
      var visitor = pack(VISITOR, lang);
      var extra = pack(EXTRA, lang);
      var startHere = pack(START_HERE, lang);
      var homeSub = {
        en:'Start here first',
        ko:'여기서 먼저 시작',
        th:'เริ่มที่นี่ก่อน',
        id:'Mulai dari sini dulu',
        pt:'Comece por aqui',
        br:'Comece por aqui',
        tr:'Önce buradan başla',
        es:'Empieza aquí primero',
        ar:'ابدأ من هنا أولاً',
        vi:'Bắt đầu từ đây trước',
        ha:'Fara daga nan tukuna'
      }[lang] || 'Start here first';
      var safetyPage = pack(SAFETY_PAGE, lang);
      var purchase = pack(PURCHASE, lang);
      for(var i=0;i<nav.titles.length;i++){
        store[lang]['nav.l' + (i + 1)] = nav.titles[i];
        store[lang]['nav.l' + (i + 1) + 'sub'] = nav.subs[i];
      }
      store[lang]['breadcrumb.prefix'] = common.lesson;
      store[lang]['btn.prev'] = common.prev;
      store[lang]['btn.next'] = common.next;
      store[lang]['btn.mark'] = common.mark;
      store[lang]['btn.completed'] = common.complete;
      store[lang]['btn.restart'] = common.restart;
      store[lang]['progress.done'] = common.done;
      store[lang]['sources.title'] = common.related;
      store[lang]['source.title'] = common.source;
      store[lang]['check.title'] = common.checklist;
      store[lang]['visual.title'] = common.compare;
      store[lang]['nav.sources'] = common.source;
      store[lang]['sources.pageTitle'] = common.source;
      store[lang]['home.sourceTitle'] = common.source;
      store[lang]['home.openSources'] = extra.openSource;
      store[lang]['home.openGlossary'] = extra.openGlossary;
      store[lang]['home.openFaq'] = extra.openFaq;
      store[lang]['home.openSafety'] = extra.openSafety;
      store[lang]['nav.start'] = startHere;
      store[lang]['nav.homesub'] = homeSub;
      store[lang]['home.startCardTitle'] = startHere;
      store[lang]['home.openStart'] = startHere;
      store[lang]['nav.safety'] = common.safety;
      store[lang]['home.safetyCardTitle'] = common.safety;
      store[lang]['safety.title'] = safetyPage;
      store[lang]['nav.glossary'] = extra.glossary;
      store[lang]['glossary.title'] = extra.glossary;
      store[lang]['nav.faqPage'] = extra.faq;
      store[lang]['faq.title'] = extra.faq;
      store[lang]['search.placeholder'] = extra.searchPlaceholder;
      store[lang]['search.title'] = extra.search;
      store[lang]['common.learnMore'] = extra.learnMore;
      store[lang]['common.download'] = extra.download;
      store[lang]['visitor.today'] = visitor.today;
      store[lang]['visitor.total'] = visitor.total;
      store[lang]['nav.updates'] = common.updates;
      store[lang]['updates.title'] = common.updates;
      store[lang]['purchase.flow.choose.title'] = purchase[0];
      store[lang]['purchase.flow.choose.desc'] = purchase[1];
      store[lang]['purchase.flow.kyc.title'] = purchase[2];
      store[lang]['purchase.flow.kyc.desc'] = purchase[3];
      store[lang]['purchase.flow.small.title'] = purchase[4];
      store[lang]['purchase.flow.small.desc'] = purchase[5];
      store[lang]['purchase.flow.custody.title'] = purchase[6];
      store[lang]['purchase.flow.custody.desc'] = purchase[7];
    });
  }

  function patchLessons(){
    if(typeof lessons === 'undefined' || !lessons) return;
    LANGS.forEach(function(lang){
      var nav = pack(NAV, lang);
      if(!lessons[lang]) lessons[lang] = clone(lessons.en || []);
      for(var i=0;i<nav.titles.length;i++){
        if(!lessons[lang][i]) lessons[lang][i] = clone((lessons.en || [])[i] || {});
        lessons[lang][i].title = nav.titles[i];
        if(i !== 6 && lessons[lang][i].intro && (lang === 'en' || lang === 'ko' || lang === 'tr' || lang === 'br' || lang === 'ar' || lang === 'vi')){
          lessons[lang][i].intro = lessons[lang][i].intro;
        }
      }
      lessons[lang][6] = lessonSeven(lang);
      if(typeof lessonOverrides !== 'undefined' && lessonOverrides){
        if(!lessonOverrides[lang]) lessonOverrides[lang] = clone(lessonOverrides.en || []);
        lessonOverrides[lang][6] = clone(lessons[lang][6]);
        for(var j=0;j<nav.titles.length;j++){
          if(!lessonOverrides[lang][j]) lessonOverrides[lang][j] = clone(lessons[lang][j] || {});
          lessonOverrides[lang][j].title = nav.titles[j];
        }
      }
    });
  }

  function lesson6Top(lesson){
    var g = pack(GUIDE6, getLang());
    return '<section class="lesson-guide-stack" aria-label="' + esc(g.bundleTitle) + '">'
      + '<div class="lesson-guide-panel">'
      + '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(g.buyKicker) + '</span><h3>' + esc(g.buyTitle) + '</h3></div>'
      + assetFigure('lesson6-first-buy', 'lesson6-first-buy-mock.svg', g.buyAlt, g.buyNote, 'lesson-guide-figure-hero')
      + '<p class="lesson-guide-body">' + esc(g.buyBody) + '</p>'
      + '<div class="lesson-guide-check-row">' + g.buyPoints.map(function(item){ return '<span class="lesson-guide-check-chip">' + esc(item) + '</span>'; }).join('') + '</div>'
      + '</div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">'
      + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(g.networkKicker) + '</span><h3>' + esc(g.networkTitle) + '</h3></div><p class="lesson-guide-body">' + esc(g.networkBody) + '</p>' + list(g.networkPoints) + '</div>'
      + assetFigure('lesson6-network-selection', 'lesson6-network-selection-mock.svg', g.networkAlt, g.networkNote, 'lesson-guide-figure-side')
      + '</div></section>';
  }

  function lesson6Lower(){
    var g = pack(GUIDE6, getLang());
    return '<section class="lesson-guide-stack lesson-guide-stack-lower" aria-label="' + esc(g.bundleTitle) + '">'
      + '<div class="lesson-guide-panel lesson-guide-panel-split"><div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(g.transferKicker) + '</span><h3>' + esc(g.transferTitle) + '</h3></div>' + chips(g.transferPoints) + '</div>'
      + figure('lesson6-final-transfer-check-mock.svg', g.transferAlt, g.transferNote, 'lesson-guide-figure-side') + '</div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">'
      + figure('lesson6-custody-compare.svg', g.custodyAlt, g.custodyNote, 'lesson-guide-figure-side')
      + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(g.custodyKicker) + '</span><h3>' + esc(g.custodyTitle) + '</h3></div>'
      + '<div class="lesson-guide-compare-grid"><div class="lesson-guide-compare-card is-safe"><div class="lesson-guide-compare-title">' + esc(g.exchangeTitle) + '</div>' + list(g.exchangePoints) + '</div><div class="lesson-guide-compare-card is-risk"><div class="lesson-guide-compare-title">' + esc(g.walletTitle) + '</div>' + list(g.walletPoints) + '</div></div>'
      + '</div></div></section>';
  }

  function lesson7Top(){
    var g = pack(GUIDE7, getLang());
    var figs = {
      site:assetFigure('lesson7-fake-site-compare', 'lesson7-fake-site-compare.svg', g.siteAlt, g.siteNote, 'lesson-guide-figure-side'),
      support:figure('lesson7-fake-support-dm.svg', g.supportAlt, g.supportNote, 'lesson-guide-figure-side')
    };
    if(window.__CA_LESSON_SEVEN_TEMPLATE && typeof window.__CA_LESSON_SEVEN_TEMPLATE.renderTop === 'function'){
      return window.__CA_LESSON_SEVEN_TEMPLATE.renderTop(g, figs);
    }
    return '';
  }

  function lesson7Lower(){
    var g = pack(GUIDE7, getLang());
    var figs = {
      seed:assetFigure('lesson7-seed-warning', 'lesson7-seed-phrase-warning.svg', g.seedAlt, g.seedNote, 'lesson-guide-figure-side'),
      address:figure('lesson7-address-poisoning.svg', g.addressAlt, g.addressNote, 'lesson-guide-figure-side'),
      clipboard:figure('lesson7-clipboard-swapping.svg', g.clipboardAlt, g.clipboardNote, 'lesson-guide-figure-side')
    };
    if(window.__CA_LESSON_SEVEN_TEMPLATE && typeof window.__CA_LESSON_SEVEN_TEMPLATE.renderLower === 'function'){
      return window.__CA_LESSON_SEVEN_TEMPLATE.renderLower(g, figs);
    }
    return '';
  }

  function patchGuidedVisuals(){
    var previousTop = window.renderLessonGuidedVisualsTop;
    var previousLower = window.renderLessonGuidedVisualsLower;
    window.renderLessonGuidedVisualsTop = function(index, lesson){
      if(index === 5) return lesson6Top(lesson);
      if(index === 6) return lesson7Top(lesson);
      return typeof previousTop === 'function' ? previousTop(index, lesson) : '';
    };
    window.renderLessonGuidedVisualsLower = function(index, lesson){
      if(index === 5) return lesson6Lower(lesson);
      if(index === 6) return lesson7Lower(lesson);
      return typeof previousLower === 'function' ? previousLower(index, lesson) : '';
    };
  }

  function applyRtl(){
    var lang = getLang();
    if(document.documentElement){
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }
  }

  function exactLabelMap(lang){
    var common = pack(COMMON, lang);
    var extra = pack(EXTRA, lang);
    var visitor = pack(VISITOR, lang);
    var open = pack(OPEN_LABEL, lang);
    var startHere = pack(START_HERE, lang);
    var safetyPage = pack(SAFETY_PAGE, lang);
    var step = pack(STEP_LABEL, lang);
    var day = pack(DAY_LABEL, lang);
    var routePrefix = pack(ROUTE_PREFIX, lang);
    return {
      'Today Visitors':visitor.today,
      'Total Visitors':visitor.total,
      'Source Library':common.source,
      'Related resources':common.related,
      'Next lesson':common.next,
      'Previous lesson':common.prev,
      'Mark complete':common.mark,
      'Mark as completed':common.mark,
      'Completed':common.complete,
      'Checklist':common.checklist,
      'Warning':common.warning,
      'Compare':common.compare,
      'Verify':common.verify,
      'Safety':common.safety,
      'Quick Review':common.quick,
      'Worth Saving':common.saving,
      'Go Deeper':common.deeper,
      'Beginner':common.beginner,
      'Intermediate':common.intermediate,
      'Practical':common.practical,
      'Update History':common.updates,
      'Search':extra.search,
      'Learn more':extra.learnMore,
      'Open':open,
      'Download':extra.download,
      'Glossary':extra.glossary,
      'FAQ':extra.faq,
      'Continue':common.continueText,
      'Continue learning':common.continueText,
      'Start':common.start,
      'Start Here':startHere,
      'A good beginner route is:':routePrefix,
      'A good beginner route is':routePrefix.replace(/:$/,''),
      'Lesson':common.lesson,
      'Lessons':common.lesson,
      'Day':day,
      'Safety / Scam Prevention':safetyPage,
      'Scam Prevention':safetyPage,
      'Step 1':step + ' 1',
      'Step 2':step + ' 2',
      'Step 3':step + ' 3',
      'Step 4':step + ' 4',
      'Step 5':step + ' 5',
      'Open Source Library':extra.openSource,
      'Open the Glossary':extra.openGlossary,
      'Open Glossary':extra.openGlossary,
      'Open Checklists':open + ' ' + common.checklist,
      'Open Summary':common.quick,
      'Open FAQ':extra.openFaq,
      'Open Safety':extra.openSafety,
      'Free PDFs':extra.download + ' PDF',
      'Official References':common.source,
      'Premium Guides':common.deeper,
      'Visual explanation':common.compare,
      'Mini quiz':common.quick,
      'Show answer':common.verify,
      'Related sources':common.related,
      'Common mistakes':common.warning,
      'Beginner checkpoints':common.beginner + ' ' + common.checklist
    };
  }

  function replaceRemainingEnglish(root){
    var lang = getLang();
    if(lang === 'en') return;
    var map = exactLabelMap(lang);
    var extra = pack(EXTRA, lang);
    var visitor = pack(VISITOR, lang);
    var base = root || document;
    try{
      var today = document.getElementById('visitorTodayLabel');
      var total = document.getElementById('visitorTotalLabel');
      if(today) today.textContent = visitor.today;
      if(total) total.textContent = visitor.total;
      var search = document.getElementById('searchInput');
      if(search) search.setAttribute('placeholder', modalSearchText());
    }catch(err){}
    if(!base.querySelectorAll) return;
    var nodes = base.querySelectorAll('button,a,span,strong,em,p,h1,h2,h3,h4,small,label,div,li');
    var embeddedKeys = [
      'Open Source Library',
      'A good beginner route is:',
      'A good beginner route is',
      'Open the Glossary',
      'Open Glossary',
      'Open Checklists',
      'Open Summary',
      'Open FAQ',
      'Open Safety',
      'Free PDFs',
      'Official References',
      'Premium Guides',
      'Visual explanation',
      'Mini quiz',
      'Show answer',
      'Related sources',
      'Common mistakes',
      'Beginner checkpoints',
      'Source Library',
      'Start Here',
      'Safety / Scam Prevention',
      'Scam Prevention',
      'Step 1',
      'Step 2',
      'Step 3',
      'Step 4',
      'Step 5',
      'Lessons',
      'Day',
      'FAQ',
      'Glossary',
      'Safety',
      'Checklist',
      'Warning',
      'Compare',
      'Verify',
      'Beginner',
      'Intermediate',
      'Practical',
      'Update History',
      'Related resources',
      'Continue learning',
      'Next lesson',
      'Previous lesson',
      'Mark complete',
      'Quick Review',
      'Worth Saving',
      'Go Deeper',
      'Learn more'
    ];
    Array.prototype.forEach.call(nodes, function(el){
      if(!el || el.children.length) return;
      var raw = el.textContent || '';
      var trimmed = raw.trim();
      var leading = raw.match(/^\s*/)[0];
      var trailing = raw.match(/\s*$/)[0];
      if(trimmed && Object.prototype.hasOwnProperty.call(map, trimmed)){
        el.textContent = leading + map[trimmed] + trailing;
        return;
      }
      var next = raw;
      embeddedKeys.forEach(function(key){
        if(Object.prototype.hasOwnProperty.call(map, key)){
          next = next.split(key).join(map[key]);
        }
      });
      if(next !== raw) el.textContent = next;
    });
    Array.prototype.forEach.call(base.querySelectorAll('img'), function(img){
      var alt = img.getAttribute('alt') || '';
      var trimmed = alt.trim();
      if(trimmed && Object.prototype.hasOwnProperty.call(map, trimmed)){
        img.setAttribute('alt', map[trimmed]);
      }
    });
  }

  function describeNode(el){
    if(!el || !el.tagName) return '';
    var out = el.tagName.toLowerCase();
    if(el.id) out += '#' + el.id;
    if(el.className && typeof el.className === 'string'){
      out += '.' + el.className.trim().split(/\s+/).slice(0,3).join('.');
    }
    return out;
  }

  function scanRemainingEnglish(root){
    var lang = getLang();
    var uiPattern = /\b(Lesson|Lessons|Day|Step\s+\d|Start(?: Here)?|Continue(?: learning)?|Next lesson|Previous lesson|Mark complete|Mark as completed|Completed|Checklist|Warning|Compare|Verify|Safety(?: \/ Scam Prevention)?|Scam Prevention|Quick Review|Worth Saving|Go Deeper|Source Library|Related resources|Beginner|Intermediate|Practical|Update History|Update|Search|Learn more|Open|Download|Glossary|FAQ)\b/i;
    var allowedPattern = /\b(BTC|ETH|USDT|USDC|DAI|NFT|DeFi|KYC|PDF|eBook|DM|URL|ERC20|TRC20|BEP20|SOL|USD)\b/ig;
    var suspects = [];
    var allowed = [];
    if(lang === 'en' || !root || !root.querySelectorAll){
      return {currentLocale:lang,suspectedEnglishText:suspects,allowedEnglishText:allowed};
    }
    var map = exactLabelMap(lang);
    var nodes = root.querySelectorAll('button,a,span,strong,em,p,h1,h2,h3,h4,small,label,li,div,input,img');
    Array.prototype.forEach.call(nodes, function(el){
      if(!el || /^(SCRIPT|STYLE|SVG|PATH|G|TEXT|TITLE)$/i.test(el.tagName || '')) return;
      var values = [];
      if(el.tagName === 'INPUT'){
        values.push({kind:'placeholder',text:el.getAttribute('placeholder') || ''});
      }else if(el.tagName === 'IMG'){
        values.push({kind:'alt',text:el.getAttribute('alt') || ''});
      }else if(!el.children.length){
        values.push({kind:'text',text:el.textContent || ''});
      }
      values.forEach(function(entry){
        var text = String(entry.text || '').replace(/\s+/g,' ').trim();
        if(!text || !uiPattern.test(text)) return;
        var withoutAllowed = text.replace(allowedPattern, '').replace(/\s+/g,' ').trim();
        var sourceHint = describeNode(el);
        var record = {
          selector:sourceHint,
          sourceHint:sourceHint,
          type:entry.kind,
          text:text,
          fallbackKeyAvailable:Object.prototype.hasOwnProperty.call(map, text)
        };
        if(uiPattern.test(withoutAllowed)) suspects.push(record);
        else allowed.push(record);
      });
    });
    return {currentLocale:lang,suspectedEnglishText:suspects.slice(0,120),allowedEnglishText:allowed.slice(0,80)};
  }

  function patchAll(){
    patchUiStore(typeof ui !== 'undefined' ? ui : null);
    patchUiStore(typeof extraUi !== 'undefined' ? extraUi : null);
    patchLessons();
    patchGuidedVisuals();
    applyRtl();
    replaceRemainingEnglish(document);
  }

  patchAll();

  var previousSetLanguage = window.setLanguage;
  if(typeof previousSetLanguage === 'function' && !previousSetLanguage.__localeSyncFinalWrapped){
    window.setLanguage = function(lang){
      var result = previousSetLanguage.apply(this, arguments);
      try{
        patchAll();
        if(typeof renderAllLessons === 'function') renderAllLessons();
        if(typeof applyUI === 'function') applyUI();
        if(typeof updateProgress === 'function') updateProgress();
        replaceRemainingEnglish(document);
      }catch(err){}
      return result;
    };
    window.setLanguage.__localeSyncFinalWrapped = true;
  }

  window.debugLocaleCoverage = function(){
    var lang = getLang();
    var nav = pack(NAV, lang);
    return {
      currentLocale:lang,
      lesson7Title:nav.titles[6],
      sidebarTitle:typeof ui !== 'undefined' && ui[lang] ? ui[lang]['nav.l7'] : null,
      lessonSource:'076-locale-sync-final-20260518',
      visualGuide6:!!GUIDE6[lang],
      visualGuide7:!!GUIDE7[lang],
      fallbackUsed:LANGS.filter(function(code){ return !(NAV[code] && COMMON[code]); })
    };
  };

  window.debugRemainingEnglish = function(){
    return scanRemainingEnglish(document);
  };

  window.debugVisualImageStatus = function(){
    var lang = getLang();
    var imgs = Array.prototype.slice.call(document.querySelectorAll('img.lesson-guide-img, .lesson-guide-figure img, img[src*="assets/illustrations/lessons/"]'));
    return {
      currentLocale: lang,
      images: imgs.map(function(img){
        var src = img.getAttribute('src') || '';
        var file = src.split('/').pop().split('?')[0].split('#')[0];
        var lesson = img.closest('[data-lesson-index], .lesson-page, .lesson-panel, .lesson-content');
        var lessonNumber = lesson && lesson.getAttribute('data-lesson-index');
        return {
          lesson: lessonNumber ? Number(lessonNumber) + 1 : null,
          visualKey: file.replace(/\.svg$/i, ''),
          resolvedSrc: src,
          existsInDom: true,
          complete: !!img.complete,
          naturalWidth: img.naturalWidth || 0,
          naturalHeight: img.naturalHeight || 0,
          fallbackUsed: lang !== 'ko' || file.indexOf('-ko.svg') === -1
        };
      })
    };
  };

  try{
    if(typeof renderAllLessons === 'function') renderAllLessons();
    if(typeof applyUI === 'function') applyUI();
    if(typeof updateProgress === 'function') updateProgress();
    replaceRemainingEnglish(document);
    setTimeout(function(){ replaceRemainingEnglish(document); }, 0);
  }catch(err){}
})();
