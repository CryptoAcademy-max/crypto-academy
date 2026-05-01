(function(){
  if(typeof window === 'undefined' || window.__freeCoreEbookFlow20260501) return;
  window.__freeCoreEbookFlow20260501 = true;

  function currentFlowLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getFlowPack(){
    var lang = currentFlowLang();
    var packs = {
      en:{
        title:'Start Free, Go Deeper with the eBook',
        body:'This site gives you free access to the core concepts and practical safety basics, while the eBooks help you review everything in a more structured way.',
        freeTitle:'What You Can Learn for Free',
        freePoints:[
          'Learn the core concepts through free lessons',
          'Use the glossary and FAQ to review confusing terms quickly',
          'Build practical safety awareness with the safety page and source library'
        ],
        ebookTitle:'What the eBook Helps You Organize Better',
        ebookPoints:[
          'Review the site lessons in a more structured sequence',
          'Revisit first-buy, transfer, and safety flows in one place',
          'Organize the topics that beginners usually struggle with most'
        ],
        ctaFree:'Explore Free Lessons',
        ctaEbook:'Explore the eBook',
        sourceNote:'If you want a more structured review after exploring the free lessons and resources, continue with the eBooks.'
      },
      ko:{
        title:'무료로 시작하고, 더 깊게 정리하기',
        body:'이 사이트에서는 핵심 개념과 실전 보안 흐름을 무료로 배울 수 있고, 전자책에서는 더 정리된 흐름으로 한 번에 복습할 수 있습니다.',
        freeTitle:'무료로 볼 수 있는 것',
        freePoints:[
          '핵심 개념을 무료 lesson으로 배울 수 있습니다',
          'glossary와 FAQ로 자주 헷갈리는 개념을 확인할 수 있습니다',
          'safety 페이지와 자료 라이브러리로 실전 보안 흐름을 익힐 수 있습니다'
        ],
        ebookTitle:'전자책에서 더 정리되는 것',
        ebookPoints:[
          '사이트에서 배운 내용을 더 정리된 흐름으로 복습할 수 있습니다',
          '첫 구매, 전송, 보안 흐름을 한 번에 이어서 볼 수 있습니다',
          '초보자가 헷갈리기 쉬운 내용을 더 체계적으로 정리할 수 있습니다'
        ],
        ctaFree:'무료 lesson 먼저 보기',
        ctaEbook:'전자책 살펴보기',
        sourceNote:'무료 lesson과 자료를 먼저 본 뒤, 더 정리된 흐름으로 복습하고 싶다면 전자책을 이어서 확인해보세요.'
      },
      th:{
        title:'เริ่มฟรี แล้วค่อยทบทวนให้ลึกขึ้นด้วย eBook',
        body:'เว็บไซต์นี้ให้คุณเรียนแนวคิดหลักและพื้นฐานความปลอดภัยได้ฟรี ส่วน eBook จะช่วยให้คุณทบทวนทั้งหมดในลำดับที่เป็นระบบมากขึ้น',
        freeTitle:'สิ่งที่เรียนได้ฟรี',
        freePoints:[
          'เรียนแนวคิดหลักผ่านบทเรียนฟรี',
          'ใช้ glossary และ FAQ ทบทวนคำที่สับสนได้เร็ว',
          'สร้างความเข้าใจด้านความปลอดภัยด้วยหน้า safety และคลังแหล่งข้อมูล'
        ],
        ebookTitle:'สิ่งที่ eBook ช่วยจัดระเบียบได้ดีกว่า',
        ebookPoints:[
          'ทบทวนบทเรียนบนเว็บไซต์ในลำดับที่เป็นระบบมากขึ้น',
          'กลับมาดูการซื้อครั้งแรก การโอน และความปลอดภัยได้ในที่เดียว',
          'จัดระเบียบหัวข้อที่ผู้เริ่มต้นมักสับสนได้ชัดเจนขึ้น'
        ],
        ctaFree:'เปิดบทเรียนฟรี',
        ctaEbook:'ดู eBook',
        sourceNote:'หากคุณต้องการทบทวนแบบเป็นระบบมากขึ้นหลังจากเรียนจากบทเรียนและแหล่งข้อมูลฟรี ให้ต่อด้วย eBooks'
      },
      id:{
        title:'Mulai Gratis, Dalami Lagi dengan eBook',
        body:'Situs ini memberi akses gratis ke konsep inti dan dasar keamanan praktis, sementara eBook membantu Anda meninjau semuanya dengan alur yang lebih terstruktur.',
        freeTitle:'Yang Bisa Dipelajari Gratis',
        freePoints:[
          'Pelajari konsep inti melalui pelajaran gratis',
          'Gunakan glossary dan FAQ untuk meninjau istilah yang membingungkan dengan cepat',
          'Bangun kewaspadaan keamanan praktis lewat halaman safety dan source library'
        ],
        ebookTitle:'Yang Dibantu eBook Susun Lebih Rapi',
        ebookPoints:[
          'Tinjau pelajaran situs dalam urutan yang lebih terstruktur',
          'Ulangi alur pembelian pertama, transfer, dan keamanan di satu tempat',
          'Rapikan topik yang paling sering membuat pemula bingung'
        ],
        ctaFree:'Lihat Pelajaran Gratis',
        ctaEbook:'Lihat eBook',
        sourceNote:'Jika Anda ingin ulasan yang lebih terstruktur setelah mempelajari pelajaran dan sumber gratis, lanjutkan dengan eBook.'
      },
      pt:{
        title:'Comece Gratis e Aprofunde com o eBook',
        body:'Este site oferece acesso gratuito aos conceitos centrais e aos fundamentos praticos de seguranca, enquanto os eBooks ajudam voce a revisar tudo de forma mais estruturada.',
        freeTitle:'O Que Voce Pode Aprender Gratis',
        freePoints:[
          'Aprenda os conceitos centrais com licoes gratuitas',
          'Use o glossary e o FAQ para revisar termos confusos rapidamente',
          'Desenvolva nocao pratica de seguranca com a pagina safety e a biblioteca de fontes'
        ],
        ebookTitle:'O Que o eBook Ajuda a Organizar Melhor',
        ebookPoints:[
          'Revise as licoes do site em uma sequencia mais estruturada',
          'Retome em um so lugar os fluxos de primeira compra, transferencia e seguranca',
          'Organize os temas que mais confundem iniciantes'
        ],
        ctaFree:'Explorar Licoes Gratis',
        ctaEbook:'Explorar o eBook',
        sourceNote:'Se voce quiser uma revisao mais estruturada depois de explorar as licoes e os recursos gratuitos, continue com os eBooks.'
      },
      tr:{
        title:'Ucretsiz Basla, eBook ile Daha Derin Incele',
        body:'Bu site temel kavramlara ve pratik guvenlik esaslarina ucretsiz erisim saglar; eBook ise her seyi daha duzenli bir akista tekrar etmenize yardim eder.',
        freeTitle:'Ucretsiz Olarak Ogrenebilecekleriniz',
        freePoints:[
          'Temel kavramlari ucretsiz derslerle ogrenin',
          'Karistirilan terimleri hizlica gozden gecirmek icin glossary ve FAQ kullanin',
          'Safety sayfasi ve kaynak kutuphanesiyle pratik guvenlik farkindaligi kazanin'
        ],
        ebookTitle:'eBook Ne Konuda Daha Iyi Duzen Sunar',
        ebookPoints:[
          'Site derslerini daha duzenli bir sirayla tekrar edin',
          'Ilk alim, transfer ve guvenlik akislarini tek yerde yeniden gorun',
          'Yeni baslayanlarin en cok zorlandigi basliklari daha net organize edin'
        ],
        ctaFree:'Ucretsiz Dersleri Ac',
        ctaEbook:'eBook\u0027u Incele',
        sourceNote:'Ucretsiz dersleri ve kaynaklari inceledikten sonra daha duzenli bir tekrar istiyorsaniz eBook ile devam edin.'
      },
      es:{
        title:'Empieza Gratis y Profundiza con el eBook',
        body:'Este sitio te da acceso gratuito a los conceptos clave y a las bases practicas de seguridad, mientras que los eBooks te ayudan a repasar todo de una forma mas estructurada.',
        freeTitle:'Lo Que Puedes Aprender Gratis',
        freePoints:[
          'Aprende los conceptos clave con lecciones gratuitas',
          'Usa el glossary y el FAQ para revisar terminos confusos rapidamente',
          'Construye criterio practico de seguridad con la pagina safety y la biblioteca de fuentes'
        ],
        ebookTitle:'Lo Que el eBook Ayuda a Organizar Mejor',
        ebookPoints:[
          'Repasa las lecciones del sitio en una secuencia mas estructurada',
          'Vuelve a ver en un solo lugar la primera compra, las transferencias y la seguridad',
          'Organiza mejor los temas que mas suelen confundir a principiantes'
        ],
        ctaFree:'Explorar Lecciones Gratis',
        ctaEbook:'Explorar el eBook',
        sourceNote:'Si quieres una revision mas estructurada despues de explorar las lecciones y los recursos gratuitos, continua con los eBooks.'
      },
      ar:{
        title:'ابدأ مجاناً ثم تعمق أكثر مع الكتاب الإلكتروني',
        body:'يوفر لك هذا الموقع المفاهيم الأساسية وأساسيات الأمان العملية مجاناً، بينما تساعدك الكتب الإلكترونية على مراجعة كل شيء بطريقة أكثر تنظيماً.',
        freeTitle:'ما الذي يمكنك تعلمه مجاناً',
        freePoints:[
          'تعلّم المفاهيم الأساسية من خلال الدروس المجانية',
          'استخدم glossary وFAQ لمراجعة المصطلحات المربكة بسرعة',
          'ابنِ وعياً عملياً بالأمان من خلال صفحة safety ومكتبة المصادر'
        ],
        ebookTitle:'ما الذي يساعدك الكتاب الإلكتروني على تنظيمه بشكل أفضل',
        ebookPoints:[
          'راجع دروس الموقع بتسلسل أكثر تنظيماً',
          'ارجع إلى الشراء الأول والتحويل والأمان في مكان واحد',
          'نظّم الموضوعات التي يواجه فيها المبتدئون صعوبة أكبر'
        ],
        ctaFree:'استكشف الدروس المجانية',
        ctaEbook:'استكشف الكتاب الإلكتروني',
        sourceNote:'إذا أردت مراجعة أكثر تنظيماً بعد استكشاف الدروس والمواد المجانية، فتابع مع الكتب الإلكترونية.'
      },
      vi:{
        title:'Bat Dau Mien Phi, Di Sau Hon Voi eBook',
        body:'Trang nay cho ban hoc mien phi cac khai niem cot loi va nen tang an toan thuc te, trong khi eBook giup ban on tap moi thu theo mot trinh tu co cau truc hon.',
        freeTitle:'Nhung Dieu Ban Co The Hoc Mien Phi',
        freePoints:[
          'Hoc cac khai niem cot loi qua cac bai hoc mien phi',
          'Dung glossary va FAQ de xem nhanh cac thuat ngu de nham lan',
          'Xay dung nhan thuc an toan thuc te voi trang safety va thu vien nguon'
        ],
        ebookTitle:'Nhung Dieu eBook Giup Ban Sap Xep Tot Hon',
        ebookPoints:[
          'On lai cac bai hoc tren trang theo mot trinh tu co cau truc hon',
          'Xem lai quy trinh mua dau tien, chuyen tien va an toan trong cung mot noi',
          'Sap xep ro hon nhung chu de nguoi moi thuong gap kho'
        ],
        ctaFree:'Mo Bai Hoc Mien Phi',
        ctaEbook:'Xem eBook',
        sourceNote:'Neu ban muon on tap co cau truc hon sau khi xem cac bai hoc va tai lieu mien phi, hay tiep tuc voi eBook.'
      },
      ha:{
        title:'Fara Kyauta, Sannan Ka Zurfafa da eBook',
        body:'Wannan shafin yana baka damar koyon muhimman ka\u0027idoji da tushen tsaro na zahiri kyauta, yayin da eBooks ke taimaka maka ka sake duba komai cikin tsari mafi kyau.',
        freeTitle:'Abin da Za Ka Iya Koya Kyauta',
        freePoints:[
          'Koyi muhimman ka\u0027idoji ta darussa kyauta',
          'Yi amfani da glossary da FAQ domin sake duba kalmomin da ke rikitarwa da sauri',
          'Gina fahimtar tsaro ta zahiri ta safety page da source library'
        ],
        ebookTitle:'Abin da eBook Ke Taimakawa Ka Tsara Fiye da Haka',
        ebookPoints:[
          'Sake duba darussan shafin cikin tsari mafi kyau',
          'Koma ka duba sayen farko, tura kudi, da tsaro a wuri guda',
          'Tsara batutuwan da masu farawa suka fi rikicewa da su'
        ],
        ctaFree:'Bude Darussan Kyauta',
        ctaEbook:'Duba eBook',
        sourceNote:'Idan kana son karin bita mai tsari bayan ka kalli darussa da kayan kyauta, ci gaba da eBooks.'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeRoute(){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      return window.__CA_GET_PAGE_ROUTE('home');
    }
    return './index.html';
  }

  function getFirstLessonRoute(){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function'){
      return window.__CA_GET_LESSON_ROUTE(0);
    }
    return (window.__CA_BASE_PREFIX__ || './') + 'lesson/blockchain/index.html';
  }

  function buildFreeCoreEbookFlowHtml(){
    var pack = getFlowPack();
    return ''
      + '<section class="home-free-ebook-flow-block">'
      +   '<div class="home-free-ebook-flow-title">' + pack.title + '</div>'
      +   '<div class="home-free-ebook-flow-body">' + pack.body + '</div>'
      +   '<div class="home-free-ebook-flow-grid">'
      +     '<article class="home-free-ebook-flow-card is-free">'
      +       '<div class="home-free-ebook-flow-card-title">' + pack.freeTitle + '</div>'
      +       '<ul class="home-free-ebook-flow-list">' + pack.freePoints.map(function(point){
                return '<li>' + point + '</li>';
              }).join('') + '</ul>'
      +     '</article>'
      +     '<article class="home-free-ebook-flow-card is-ebook">'
      +       '<div class="home-free-ebook-flow-card-title">' + pack.ebookTitle + '</div>'
      +       '<ul class="home-free-ebook-flow-list">' + pack.ebookPoints.map(function(point){
                return '<li>' + point + '</li>';
              }).join('') + '</ul>'
      +     '</article>'
      +   '</div>'
      +   '<div class="home-free-ebook-flow-actions">'
      +     '<a class="home-premium-pdf-btn is-free" href="' + getFirstLessonRoute() + '">' + pack.ctaFree + '</a>'
      +     '<a class="home-premium-pdf-btn" href="' + getHomeRoute() + '#home-crypto-ebook-section">' + pack.ctaEbook + '</a>'
      +   '</div>'
      + '</section>';
  }

  function ensureHomeFreeCoreEbookFlow(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-free-ebook-flow-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var anchor = finder.querySelector('.home-available-premium-guides') || finder.querySelector('.home-premium-pdf-block');
    var block = finder.querySelector('.home-free-ebook-flow-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('beforebegin', buildFreeCoreEbookFlowHtml());
      } else {
        finder.insertAdjacentHTML('beforeend', buildFreeCoreEbookFlowHtml());
      }
      block = finder.querySelector('.home-free-ebook-flow-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildFreeCoreEbookFlowHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureSourceEbookFlowNote(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var section = panel.querySelector('.src-section-block[data-source-group="cryptoebook"], .src-section-block[data-source-section="cryptoEbook"]');
    if(!section) return;
    var noteText = getFlowPack().sourceNote;
    if(!noteText) return;
    var note = section.querySelector('.src-section-note.is-ebook-flow');
    if(!note){
      note = document.createElement('p');
      note.className = 'src-section-note is-ebook-flow';
      var desc = section.querySelector('.src-group-desc');
      if(desc){
        desc.insertAdjacentElement('afterend', note);
      } else {
        section.insertAdjacentElement('afterbegin', note);
      }
    }
    note.textContent = noteText;
  }

  function syncFreeCoreEbookFlow(){
    ensureHomeFreeCoreEbookFlow();
    ensureSourceEbookFlowNote();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__freeCoreEbookFlowWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncFreeCoreEbookFlow();
      return result;
    };
    wrapped.__freeCoreEbookFlowWrapped = true;
    wrapped.__freeCoreEbookFlowOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('renderSources');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  syncFreeCoreEbookFlow();
})();
