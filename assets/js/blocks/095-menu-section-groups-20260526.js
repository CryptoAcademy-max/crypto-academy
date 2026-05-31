(function(){
  if(typeof window === 'undefined' || window.__menuSectionGroups20260526) return;
  window.__menuSectionGroups20260526 = true;

  var CARD_ORDER = {
    roadmaps:['start','beginner','intermediate'],
    tools:['faq','safety','glossary','sources','updates'],
    project:['partner','supportWall','about','pitch']
  };
  var CARD_META = {
    start:{icon:'S', page:'start'},
    beginner:{icon:'B', roadmap:'beginner'},
    intermediate:{icon:'I', roadmap:'intermediate'},
    faq:{icon:'F', page:'faq'},
    safety:{icon:'!', page:'safety'},
    glossary:{icon:'G', page:'glossary'},
    sources:{icon:'R', page:'sources'},
    updates:{icon:'U', page:'updates'},
    partner:{icon:'P', page:'partner', fn:'showPartnerPage', hash:'#partner'},
    supportWall:{icon:'♡', page:'support-wall', fn:'showSupportWallPage', hash:'#support-wall'},
    about:{icon:'A', page:'about', fn:'showAboutMissionPage', hash:'#about'},
    pitch:{icon:'D', page:'pitch', fn:'showPitchDeckPage', hash:'#pitch'}
  };

  var COPY = {
    en:{
      part:'Section',
      homeTitle:'Choose your next step',
      homeDesc:'Roadmaps, tools, and project links are grouped by purpose.',
      groups:{
        roadmaps:{title:'Learning Roadmaps', desc:'Follow a structured path from beginner basics to intermediate practice.'},
        tools:{title:'Learning Tools', desc:'Use glossary, safety guides, FAQs, and resources to support your learning.'},
        project:{title:'Project & Support', desc:'Explore Coin ProofPath’s mission and support structure.'}
      },
      cards:{
        start:['Start Here','Begin with the recommended first steps.'],
        beginner:['Beginner Roadmap','Learn the basics and start safely.'],
        intermediate:['Intermediate Roadmap','Practice wallets, fees, DeFi, bridges, and verification.'],
        faq:['FAQ','Quick answers to common beginner questions.'],
        safety:['Safety','Learn scam prevention and safer habits.'],
        glossary:['Glossary','Review key terms in simple language.'],
        sources:['Source Library','Explore articles and official references.'],
        updates:['Update History','See new features and improvements.'],
        partner:['Partnership','Support safer crypto learning together.'],
        supportWall:['Support Wall','Choose a prepared message to support the project.'],
        about:['About','Read the mission and operating principles.'],
        pitch:['Pitch Deck','View the sponsorship and partnership overview.']
      }
    },
    ko:{
      part:'구분',
      homeTitle:'다음 경로를 선택하세요',
      homeDesc:'로드맵, 학습 도구, 프로젝트 메뉴를 목적별로 정리했습니다.',
      groups:{
        roadmaps:{title:'학습 로드맵', desc:'처음 시작하는 사람부터 중급자까지 단계적으로 학습합니다.'},
        tools:{title:'학습 도구', desc:'용어, 안전, FAQ, 자료를 함께 확인하며 학습을 보완합니다.'},
        project:{title:'프로젝트와 후원', desc:'Coin ProofPath의 미션과 후원 구조를 확인합니다.'}
      },
      cards:{
        start:['여기서 시작','처음이라면 이 순서로 시작하세요.'],
        beginner:['초보자 로드맵','기초 개념부터 안전한 시작까지 배웁니다.'],
        intermediate:['중급자 로드맵','지갑, 수수료, DeFi, 브리지, 검증을 실전적으로 배웁니다.'],
        faq:['자주 묻는 질문','초보자가 자주 헷갈리는 내용을 확인합니다.'],
        safety:['안전','사기 예방과 안전한 사용 습관을 배웁니다.'],
        glossary:['용어사전','핵심 용어를 쉽게 다시 확인합니다.'],
        sources:['자료 라이브러리','기사와 공식 참고자료를 모아 봅니다.'],
        updates:['업데이트 기록','새로 반영된 기능과 개선 사항을 확인합니다.'],
        partner:['파트너십','안전한 크립토 학습을 함께 지원합니다.'],
        supportWall:['응원 메시지','준비된 문구로 프로젝트를 응원합니다.'],
        about:['소개','미션과 운영 원칙을 확인합니다.'],
        pitch:['피치덱','후원과 파트너십 구조를 한눈에 봅니다.']
      }
    },
    th:{
      part:'ส่วน',
      homeTitle:'เลือกขั้นตอนถัดไป',
      homeDesc:'จัดกลุ่มโรดแมป เครื่องมือ และลิงก์โครงการตามวัตถุประสงค์',
      groups:{
        roadmaps:{title:'โรดแมปการเรียนรู้', desc:'เรียนเป็นขั้นจากพื้นฐานผู้เริ่มต้นถึงระดับกลาง'},
        tools:{title:'เครื่องมือการเรียนรู้', desc:'ใช้คำศัพท์ ความปลอดภัย FAQ และแหล่งข้อมูลช่วยเสริมการเรียน'},
        project:{title:'โครงการและการสนับสนุน', desc:'ดูพันธกิจ พาร์ตเนอร์ Pitch Deck และข้อความสนับสนุนของ Coin ProofPath'}
      },
      cards:{
        start:['เริ่มที่นี่','เริ่มด้วยขั้นตอนที่แนะนำ'],
        beginner:['โรดแมปผู้เริ่มต้น','เรียนพื้นฐานและเริ่มอย่างปลอดภัย'],
        intermediate:['โรดแมประดับกลาง','ฝึกเรื่อง wallet ค่าธรรมเนียม DeFi bridge และการตรวจสอบ'],
        faq:['FAQ','คำตอบสั้น ๆ สำหรับคำถามที่พบบ่อย'],
        safety:['ความปลอดภัย','เรียนการป้องกันสแกมและนิสัยที่ปลอดภัย'],
        glossary:['อภิธานศัพท์','ทบทวนคำสำคัญด้วยภาษาง่าย'],
        sources:['คลังแหล่งข้อมูล','ดูบทความและแหล่งอ้างอิงทางการ'],
        updates:['ประวัติอัปเดต','ดูฟีเจอร์ใหม่และการปรับปรุง'],
        partner:['พาร์ตเนอร์','ร่วมสนับสนุนการเรียนคริปโตที่ปลอดภัย'],
        supportWall:['กำแพงสนับสนุน','เลือกข้อความที่เตรียมไว้เพื่อสนับสนุนโครงการ'],
        about:['เกี่ยวกับ','อ่านพันธกิจและหลักการดำเนินงาน'],
        pitch:['Pitch Deck','ดูภาพรวมสปอนเซอร์และพาร์ตเนอร์']
      }
    },
    id:{
      part:'Bagian',
      homeTitle:'Pilih langkah berikutnya',
      homeDesc:'Roadmap, alat belajar, dan tautan proyek dikelompokkan sesuai tujuan.',
      groups:{
        roadmaps:{title:'Roadmap Pembelajaran', desc:'Ikuti jalur terstruktur dari dasar pemula hingga praktik menengah.'},
        tools:{title:'Alat Belajar', desc:'Gunakan glosarium, panduan keamanan, FAQ, dan sumber untuk mendukung belajar.'},
        project:{title:'Proyek & Dukungan', desc:'Lihat misi, opsi kemitraan, pitch deck, dan pesan dukungan Coin ProofPath.'}
      },
      cards:{
        start:['Mulai di Sini','Mulai dari langkah pertama yang disarankan.'],
        beginner:['Roadmap Pemula','Pelajari dasar dan mulai dengan aman.'],
        intermediate:['Roadmap Menengah','Latih wallet, biaya, DeFi, bridge, dan verifikasi.'],
        faq:['FAQ','Jawaban cepat untuk pertanyaan umum pemula.'],
        safety:['Keamanan','Pelajari pencegahan scam dan kebiasaan aman.'],
        glossary:['Glosarium','Tinjau istilah penting dengan bahasa sederhana.'],
        sources:['Pustaka Sumber','Jelajahi artikel dan referensi resmi.'],
        updates:['Riwayat Pembaruan','Lihat fitur baru dan perbaikan.'],
        partner:['Kemitraan','Dukung pembelajaran crypto yang lebih aman bersama.'],
        supportWall:['Dinding Dukungan','Pilih pesan siap pakai untuk mendukung proyek.'],
        about:['Tentang','Baca misi dan prinsip operasional.'],
        pitch:['Pitch Deck','Lihat ringkasan sponsor dan kemitraan.']
      }
    },
    pt:{
      part:'Secao',
      homeTitle:'Escolha o proximo passo',
      homeDesc:'Roadmaps, ferramentas e links do projeto estao agrupados por objetivo.',
      groups:{
        roadmaps:{title:'Roadmaps de Aprendizagem', desc:'Siga um caminho estruturado do basico ao nivel intermediario.'},
        tools:{title:'Ferramentas de Aprendizagem', desc:'Use glossario, seguranca, FAQ e recursos para apoiar seu aprendizado.'},
        project:{title:'Projeto e Apoio', desc:'Veja a missao, parcerias, Pitch Deck e mensagens de apoio do Coin ProofPath.'}
      },
      cards:{
        start:['Comece Aqui','Inicie pelos primeiros passos recomendados.'],
        beginner:['Roadmap Iniciante','Aprenda o basico e comece com seguranca.'],
        intermediate:['Roadmap Intermediario','Pratique wallets, taxas, DeFi, bridges e verificacao.'],
        faq:['FAQ','Respostas rapidas para duvidas comuns.'],
        safety:['Seguranca','Aprenda prevencao de golpes e habitos seguros.'],
        glossary:['Glossario','Revise termos-chave em linguagem simples.'],
        sources:['Biblioteca de Fontes','Explore artigos e referencias oficiais.'],
        updates:['Historico de Atualizacoes','Veja novos recursos e melhorias.'],
        partner:['Parceria','Apoie uma aprendizagem cripto mais segura.'],
        supportWall:['Mural de Apoio','Escolha uma mensagem pronta para apoiar o projeto.'],
        about:['Sobre','Leia a missao e os principios de operacao.'],
        pitch:['Pitch Deck','Veja a visao de patrocinio e parceria.']
      }
    },
    br:{
      part:'Secao',
      homeTitle:'Escolha o proximo passo',
      homeDesc:'Roadmaps, ferramentas e links do projeto estao agrupados por objetivo.',
      groups:{
        roadmaps:{title:'Roadmaps de Aprendizagem', desc:'Siga um caminho estruturado do basico ao nivel intermediario.'},
        tools:{title:'Ferramentas de Aprendizagem', desc:'Use glossario, seguranca, FAQ e recursos para apoiar seu aprendizado.'},
        project:{title:'Projeto e Apoio', desc:'Veja a missao, parcerias, Pitch Deck e mensagens de apoio do Coin ProofPath.'}
      },
      cards:{
        start:['Comece Aqui','Inicie pelos primeiros passos recomendados.'],
        beginner:['Roadmap Iniciante','Aprenda o basico e comece com seguranca.'],
        intermediate:['Roadmap Intermediario','Pratique carteiras, taxas, DeFi, bridges e verificacao.'],
        faq:['FAQ','Respostas rapidas para duvidas comuns de iniciantes.'],
        safety:['Seguranca','Aprenda prevencao de golpes e habitos seguros.'],
        glossary:['Glossario','Revise termos-chave em linguagem simples.'],
        sources:['Biblioteca de Fontes','Explore artigos e referencias oficiais.'],
        updates:['Historico de Atualizacoes','Veja novos recursos e melhorias.'],
        partner:['Parceria','Apoie uma aprendizagem cripto mais segura.'],
        supportWall:['Mural de Apoio','Escolha uma mensagem pronta para apoiar o projeto.'],
        about:['Sobre','Leia a missao e os principios de operacao.'],
        pitch:['Pitch Deck','Veja a visao de patrocinio e parceria.']
      }
    },
    tr:{
      part:'Bolum',
      homeTitle:'Sonraki adimi sec',
      homeDesc:'Roadmapler, ogrenme araclari ve proje linkleri amaca gore gruplandi.',
      groups:{
        roadmaps:{title:'Ogrenme Roadmapleri', desc:'Baslangic temellerinden orta seviye pratige kadar yapili bir yol izleyin.'},
        tools:{title:'Ogrenme Araclari', desc:'Sozluk, guvenlik rehberleri, FAQ ve kaynaklarla ogrenmeyi destekleyin.'},
        project:{title:'Proje ve Destek', desc:'Coin ProofPath misyonunu, ortakliklari, Pitch Decki ve destek mesajlarini inceleyin.'}
      },
      cards:{
        start:['Buradan Basla','Onerilen ilk adimlarla baslayin.'],
        beginner:['Baslangic Roadmapi','Temelleri ogrenin ve guvenli baslayin.'],
        intermediate:['Orta Seviye Roadmap','Wallet, ucretler, DeFi, bridge ve dogrulamayi pratik edin.'],
        faq:['FAQ','Yeni baslayanlarin sik sorularina hizli yanitlar.'],
        safety:['Guvenlik','Dolandiriciliktan korunma ve guvenli aliskanliklari ogrenin.'],
        glossary:['Sozluk','Temel terimleri sade dille gozden gecirin.'],
        sources:['Kaynak Kutuphanesi','Makaleler ve resmi referanslari inceleyin.'],
        updates:['Guncelleme Gecmisi','Yeni ozellikleri ve iyilestirmeleri gorun.'],
        partner:['Ortaklik','Daha guvenli kripto ogrenimini birlikte destekleyin.'],
        supportWall:['Destek Duvari','Projeyi desteklemek icin hazir bir mesaj secin.'],
        about:['Hakkinda','Misyonu ve isleyis ilkelerini okuyun.'],
        pitch:['Pitch Deck','Sponsorluk ve ortaklik ozetini gorun.']
      }
    },
    es:{
      part:'Seccion',
      homeTitle:'Elige el siguiente paso',
      homeDesc:'Roadmaps, herramientas y enlaces del proyecto estan agrupados por objetivo.',
      groups:{
        roadmaps:{title:'Roadmaps de Aprendizaje', desc:'Sigue un camino estructurado desde lo basico hasta practica intermedia.'},
        tools:{title:'Herramientas de Aprendizaje', desc:'Usa glosario, seguridad, FAQ y recursos para apoyar tu aprendizaje.'},
        project:{title:'Proyecto y Apoyo', desc:'Explora la mision, alianzas, Pitch Deck y mensajes de apoyo de Coin ProofPath.'}
      },
      cards:{
        start:['Empieza Aqui','Comienza con los primeros pasos recomendados.'],
        beginner:['Roadmap Principiante','Aprende lo basico y empieza con seguridad.'],
        intermediate:['Roadmap Intermedio','Practica wallets, comisiones, DeFi, bridges y verificacion.'],
        faq:['FAQ','Respuestas rapidas a preguntas comunes.'],
        safety:['Seguridad','Aprende prevencion de estafas y habitos seguros.'],
        glossary:['Glosario','Repasa terminos clave en lenguaje simple.'],
        sources:['Biblioteca de Fuentes','Explora articulos y referencias oficiales.'],
        updates:['Historial de Actualizaciones','Mira nuevas funciones y mejoras.'],
        partner:['Alianzas','Apoya un aprendizaje cripto mas seguro.'],
        supportWall:['Muro de Apoyo','Elige un mensaje preparado para apoyar el proyecto.'],
        about:['Acerca de','Lee la mision y los principios operativos.'],
        pitch:['Pitch Deck','Ve el resumen de patrocinio y alianzas.']
      }
    },
    ar:{
      part:'قسم',
      homeTitle:'اختر الخطوة التالية',
      homeDesc:'تم تنظيم الخرائط التعليمية والأدوات وروابط المشروع حسب الهدف.',
      groups:{
        roadmaps:{title:'خرائط التعلم', desc:'اتبع مسارا منظما من أساسيات المبتدئين إلى التطبيق المتوسط.'},
        tools:{title:'أدوات التعلم', desc:'استخدم القاموس والأمان وFAQ والمصادر لدعم تعلمك.'},
        project:{title:'المشروع والدعم', desc:'استكشف مهمة Coin ProofPath وخيارات الشراكة وPitch Deck ورسائل الدعم.'}
      },
      cards:{
        start:['ابدأ هنا','ابدأ بالخطوات الأولى الموصى بها.'],
        beginner:['خارطة المبتدئين','تعلم الأساسيات وابدأ بأمان.'],
        intermediate:['خارطة المستوى المتوسط','تدرب على المحافظ والرسوم وDeFi والجسور والتحقق.'],
        faq:['FAQ','إجابات سريعة عن أسئلة المبتدئين الشائعة.'],
        safety:['الأمان','تعلم منع الاحتيال وعادات الاستخدام الآمنة.'],
        glossary:['القاموس','راجع المصطلحات الأساسية بلغة بسيطة.'],
        sources:['مكتبة المصادر','استكشف المقالات والمراجع الرسمية.'],
        updates:['سجل التحديثات','شاهد الميزات الجديدة والتحسينات.'],
        partner:['الشراكة','ادعم تعلم الكريبتو الآمن معا.'],
        supportWall:['جدار الدعم','اختر رسالة جاهزة لدعم المشروع.'],
        about:['حول','اقرأ المهمة ومبادئ التشغيل.'],
        pitch:['Pitch Deck','اعرض ملخص الرعاية والشراكات.']
      }
    },
    vi:{
      part:'Muc',
      homeTitle:'Chon buoc tiep theo',
      homeDesc:'Roadmap, cong cu hoc va lien ket du an duoc nhom theo muc dich.',
      groups:{
        roadmaps:{title:'Lo trinh hoc', desc:'Di theo lo trinh tu kien thuc co ban den thuc hanh trung cap.'},
        tools:{title:'Cong cu hoc tap', desc:'Dung thuat ngu, an toan, FAQ va tai lieu de ho tro viec hoc.'},
        project:{title:'Du an va ung ho', desc:'Xem su menh, hop tac, Pitch Deck va thong diep ung ho Coin ProofPath.'}
      },
      cards:{
        start:['Bat dau tai day','Bat dau voi cac buoc dau tien duoc goi y.'],
        beginner:['Lo trinh nguoi moi','Hoc co ban va bat dau an toan.'],
        intermediate:['Lo trinh trung cap','Thuc hanh wallet, phi, DeFi, bridge va xac minh.'],
        faq:['FAQ','Cau tra loi nhanh cho cau hoi pho bien.'],
        safety:['An toan','Hoc phong tranh scam va thoi quen an toan.'],
        glossary:['Thuat ngu','Xem lai tu khoa bang ngon ngu don gian.'],
        sources:['Thu vien nguon','Xem bai viet va tai lieu chinh thuc.'],
        updates:['Lich su cap nhat','Xem tinh nang moi va cai tien.'],
        partner:['Hop tac','Cung ho tro hoc crypto an toan hon.'],
        supportWall:['Tuong ung ho','Chon thong diep co san de ung ho du an.'],
        about:['Gioi thieu','Doc su menh va nguyen tac van hanh.'],
        pitch:['Pitch Deck','Xem tong quan tai tro va hop tac.']
      }
    },
    ha:{
      part:'Sashe',
      homeTitle:'Zabi mataki na gaba',
      homeDesc:'An raba roadmaps, kayan koyo, da hanyoyin aikin bisa manufa.',
      groups:{
        roadmaps:{title:'Taswirar Koyo', desc:'Bi hanya mai tsari daga tushe na farko zuwa matakin matsakaici.'},
        tools:{title:'Kayan Koyo', desc:'Yi amfani da kamus, tsaro, FAQ, da kaynakai don tallafa koyo.'},
        project:{title:'Aiki da Tallafi', desc:'Duba manufar Coin ProofPath, hadin gwiwa, Pitch Deck, da sakonnin tallafi.'}
      },
      cards:{
        start:['Fara Anan','Fara da matakan farko da aka ba da shawara.'],
        beginner:['Roadmap na Farko','Koyi tushe kuma fara cikin aminci.'],
        intermediate:['Roadmap na Matsakaici','Yi aiki da wallets, kudade, DeFi, bridges, da tantancewa.'],
        faq:['FAQ','Amsoshi masu sauri ga tambayoyin masu farawa.'],
        safety:['Tsaro','Koyi kariya daga zamba da dabiun tsaro.'],
        glossary:['Kamus','Sake duba muhimman kalmomi cikin sauki.'],
        sources:['Laburaren Tushe','Duba makaloli da nassoshi na hukuma.'],
        updates:['Tarihin Sabuntawa','Duba sabbin fasali da gyare-gyare.'],
        partner:['Hadin Gwiwa','Taimaka wa koyo na crypto mai aminci tare.'],
        supportWall:['Bangon Tallafi','Zabi sakon da aka shirya don tallafa aikin.'],
        about:['Game da Mu','Karanta manufa da kaidojin aiki.'],
        pitch:['Pitch Deck','Duba takaitaccen tallafi da hadin gwiwa.']
      }
    }
  };

  function currentLocale(){
    var lang = 'en';
    try{ lang = window.currentLang || (document.documentElement && document.documentElement.lang) || 'en'; }catch(err){}
    if(lang === 'pt-BR') lang = 'br';
    if(!COPY[lang]) lang = 'en';
    return lang;
  }

  function pack(){
    return COPY[currentLocale()] || COPY.en;
  }

  function esc(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function pageHref(page){
    if(page === 'home') return './';
    if(page === 'support-wall') return '#support-wall';
    if(page === 'partner' || page === 'about' || page === 'pitch') return '#' + page;
    try{
      if(typeof basePrefix === 'function') return basePrefix() + page + '/';
    }catch(err){}
    return './' + page + '/';
  }

  function openHomeRoadmapSection(kind){
    try{
      if(typeof showPage === 'function') showPage('home');
    }catch(err){}
    window.setTimeout(function(){
      var selectors = kind === 'intermediate'
        ? ['[data-intermediate-roadmap]','[data-intermediate-track]','.intermediate-roadmap-section']
        : ['[data-beginner-roadmap]','.roadmap-section:not(.intermediate-roadmap-section)','.roadmap-section'];
      var target = null;
      for(var i = 0; i < selectors.length && !target; i++){
        target = document.querySelector(selectors[i]);
      }
      if(target && typeof target.scrollIntoView === 'function'){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }, 60);
    return false;
  }

  function openMenuCard(key){
    var meta = CARD_META[key] || {};
    if(meta.roadmap) return openHomeRoadmapSection(meta.roadmap);
    if(meta.fn && typeof window[meta.fn] === 'function'){
      window[meta.fn]();
      return false;
    }
    if(meta.page && typeof showPage === 'function'){
      showPage(meta.page);
      return false;
    }
    if(meta.hash) window.location.hash = meta.hash;
    return false;
  }

  function cardCopy(key){
    var p = pack();
    return (p.cards && p.cards[key]) || (COPY.en.cards && COPY.en.cards[key]) || [key, ''];
  }

  function groupCopy(group){
    var p = pack();
    return (p.groups && p.groups[group]) || (COPY.en.groups && COPY.en.groups[group]) || {title:group, desc:''};
  }

  function renderHomeCard(key){
    var meta = CARD_META[key] || {};
    var text = cardCopy(key);
    return '<button type="button" class="start-finder-btn is-rich-item menu-section-card" data-menu-card="' + esc(key) + '">'
      + '<div class="sf-icon">' + esc(meta.icon || key.charAt(0).toUpperCase()) + '</div>'
      + '<div class="start-finder-copy"><div class="start-finder-name">' + esc(text[0]) + '</div><div class="start-finder-subline">' + esc(text[1]) + '</div></div>'
      + '</button>';
  }

  function renderHomeGroup(group){
    var g = groupCopy(group);
    var items = CARD_ORDER[group] || [];
    return '<section class="menu-section-group menu-section-group-' + esc(group) + '">'
      + '<div class="menu-section-head"><span class="menu-section-kicker">' + esc(pack().part) + '</span><h3>' + esc(g.title) + '</h3><p>' + esc(g.desc) + '</p></div>'
      + '<div class="menu-section-card-grid">' + items.map(renderHomeCard).join('') + '</div>'
      + '</section>';
  }

  function bindHomeMenuGroups(grid){
    var buttons = grid ? grid.querySelectorAll('[data-menu-card]') : [];
    for(var i = 0; i < buttons.length; i++){
      if(buttons[i].__menuSectionBound) continue;
      buttons[i].__menuSectionBound = true;
      buttons[i].addEventListener('click', function(event){
        event.preventDefault();
        openMenuCard(this.getAttribute('data-menu-card'));
      });
    }
  }

  function syncHomeMenuGroups(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    var p = pack();
    finder.classList.add('is-menu-sectioned');
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    if(title) title.textContent = p.homeTitle;
    if(desc) desc.textContent = p.homeDesc;
    var grid = finder.querySelector('.start-finder-grid');
    if(!grid) return;
    grid.classList.add('menu-section-home-grid');
    grid.innerHTML = renderHomeGroup('roadmaps') + renderHomeGroup('tools') + renderHomeGroup('project');
    bindHomeMenuGroups(grid);
  }

  function ensureNavStructure(node, key){
    if(!node) return null;
    var meta = CARD_META[key] || {};
    if(!node.querySelector('.nav-title') || !node.querySelector('.nav-sub')){
      node.innerHTML = '<div class="nav-num">' + esc(meta.icon || key.charAt(0).toUpperCase()) + '</div><div><div class="nav-title"></div><div class="nav-sub"></div></div>';
    }
    var icon = node.querySelector('.nav-num');
    if(icon) icon.textContent = meta.icon || key.charAt(0).toUpperCase();
    return node;
  }

  function createSidebarItem(key){
    var meta = CARD_META[key] || {};
    var a = document.createElement('a');
    a.className = 'lesson-nav-item menu-section-nav-item';
    a.setAttribute('data-menu-card', key);
    if(meta.page) a.setAttribute('data-page', meta.page);
    a.setAttribute('href', meta.roadmap ? ('#' + meta.roadmap + '-roadmap') : (meta.hash || pageHref(meta.page || key)));
    ensureNavStructure(a, key);
    return a;
  }

  function localizeSidebarItem(node, key){
    node = ensureNavStructure(node, key);
    if(!node) return node;
    var text = cardCopy(key);
    var title = node.querySelector('.nav-title');
    var sub = node.querySelector('.nav-sub');
    if(title) title.textContent = text[0];
    if(sub) sub.textContent = text[1];
    node.classList.add('menu-section-nav-item');
    node.setAttribute('data-menu-card', key);
    if(!node.__menuSectionNavBound){
      node.__menuSectionNavBound = true;
      node.addEventListener('click', function(event){
        var card = this.getAttribute('data-menu-card');
        if(card === 'start' || card === 'beginner' || card === 'intermediate' || card === 'partner' || card === 'supportWall' || card === 'about' || card === 'pitch'){
          event.preventDefault();
          openMenuCard(card);
        }
      });
    }
    return node;
  }

  function findExistingSidebarItem(sidebar, key){
    var meta = CARD_META[key] || {};
    if(meta.page){
      var exact = sidebar.querySelector('.lesson-nav-item[data-page="' + meta.page + '"]');
      if(exact) return exact;
    }
    return sidebar.querySelector('.lesson-nav-item[data-menu-card="' + key + '"]');
  }

  function renderSidebarGroup(group, nodes){
    var g = groupCopy(group);
    var section = document.createElement('section');
    section.className = 'sidebar-menu-section sidebar-menu-section-' + group;
    section.setAttribute('data-menu-section', group);
    section.innerHTML = '<div class="sidebar-menu-section-head"><span>' + esc(pack().part) + '</span><strong>' + esc(g.title) + '</strong><p>' + esc(g.desc) + '</p></div>';
    var list = document.createElement('div');
    list.className = 'sidebar-menu-card-list';
    for(var i = 0; i < nodes.length; i++) list.appendChild(nodes[i]);
    section.appendChild(list);
    return section;
  }

  function syncSidebarMenuGroups(){
    var sidebar = document.getElementById('sidebar');
    if(!sidebar) return;
    var oldGroups = sidebar.querySelector('[data-menu-section-groups-sidebar]');
    var oldDivider = sidebar.querySelector('[data-menu-section-groups-divider]');
    var nodesByKey = {};
    Object.keys(CARD_META).forEach(function(key){
      var found = findExistingSidebarItem(sidebar, key);
      if(found) nodesByKey[key] = found;
    });
    if(oldGroups && oldGroups.parentNode) oldGroups.parentNode.removeChild(oldGroups);
    if(oldDivider && oldDivider.parentNode) oldDivider.parentNode.removeChild(oldDivider);

    var host = document.createElement('div');
    host.className = 'sidebar-section sidebar-menu-groups';
    host.setAttribute('data-menu-section-groups-sidebar', 'true');
    ['roadmaps','tools','project'].forEach(function(group){
      var nodes = (CARD_ORDER[group] || []).map(function(key){
        var node = nodesByKey[key] || createSidebarItem(key);
        return localizeSidebarItem(node, key);
      }).filter(Boolean);
      host.appendChild(renderSidebarGroup(group, nodes));
    });

    var divider = document.createElement('div');
    divider.className = 'sidebar-divider menu-section-groups-divider';
    divider.setAttribute('data-menu-section-groups-divider', 'true');
    var lessonSection = null;
    var lastLesson = sidebar.querySelector('.lesson-nav-item[data-lesson="13"]')
      || sidebar.querySelector('.lesson-nav-item[data-lesson="6"]');
    if(lastLesson) lessonSection = lastLesson.closest ? lastLesson.closest('.sidebar-section') : null;
    if(!lessonSection) lessonSection = sidebar.querySelector('.sidebar-section');
    var insertBefore = lessonSection ? lessonSection.nextSibling : sidebar.querySelector('.sidebar-footer');
    sidebar.insertBefore(divider, insertBefore);
    sidebar.insertBefore(host, insertBefore);
  }

  function ensureStyles(){
    if(document.getElementById('menu-section-groups-20260526-style')) return;
    var style = document.createElement('style');
    style.id = 'menu-section-groups-20260526-style';
    style.textContent = [
      '.start-finder.is-menu-sectioned{overflow:visible}',
      '.start-finder-grid.menu-section-home-grid{display:grid!important;grid-template-columns:1fr!important;gap:18px!important}',
      '.menu-section-group{border:1px solid rgba(30,64,99,.1);border-radius:24px;background:linear-gradient(180deg,#fff,#f8fbff);padding:clamp(16px,2.8vw,24px);box-shadow:0 12px 28px rgba(20,38,64,.055)}',
      '.menu-section-head{display:grid;gap:6px;margin-bottom:14px}.menu-section-kicker{color:#2f5f91;font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.menu-section-head h3{margin:0;color:var(--text);font-size:clamp(1.08rem,2vw,1.42rem);line-height:1.2;word-break:keep-all}.menu-section-head p{margin:0;color:var(--text-2);font-size:.92rem;line-height:1.58;word-break:keep-all;overflow-wrap:break-word}',
      '.menu-section-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.menu-section-group-tools .menu-section-card-grid{grid-template-columns:repeat(5,minmax(0,1fr))}.menu-section-group-project .menu-section-card-grid{grid-template-columns:repeat(4,minmax(0,1fr))}',
      '.menu-section-card.start-finder-btn{height:auto;min-height:112px;align-items:flex-start;padding:15px!important;border-radius:18px!important;text-align:left}.menu-section-card .sf-icon{flex:0 0 auto}.menu-section-card .start-finder-copy{display:grid;gap:5px}.menu-section-card .start-finder-name{font-weight:900;line-height:1.25;word-break:keep-all;overflow-wrap:break-word}.menu-section-card .start-finder-subline{font-size:.84rem;line-height:1.45;word-break:keep-all;overflow-wrap:break-word;white-space:normal}',
      '.sidebar-menu-groups{display:grid;gap:14px}.sidebar-menu-section{border:1px solid rgba(30,64,99,.08);border-radius:18px;background:rgba(255,255,255,.58);padding:10px;display:grid;gap:9px}.sidebar-menu-section-head{display:grid;gap:3px;padding:2px 4px 4px}.sidebar-menu-section-head span{color:#2f5f91;font-size:.64rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.sidebar-menu-section-head strong{color:var(--text);font-size:.82rem;line-height:1.2;word-break:keep-all}.sidebar-menu-section-head p{margin:0;color:var(--text-2);font-size:.68rem;line-height:1.38;word-break:keep-all;overflow-wrap:break-word}',
      '.sidebar-menu-card-list{display:grid;gap:7px}.sidebar-menu-card-list .lesson-nav-item{margin:0}.sidebar-menu-card-list .nav-title{word-break:keep-all;overflow-wrap:break-word}.sidebar-menu-card-list .nav-sub{word-break:keep-all;overflow-wrap:break-word;white-space:normal}',
      'html[lang="ar"] .menu-section-card.start-finder-btn,html[lang="ar"] .menu-section-head,html[lang="ar"] .sidebar-menu-section-head{text-align:right}',
      '@media (max-width:1100px){.menu-section-card-grid,.menu-section-group-tools .menu-section-card-grid,.menu-section-group-project .menu-section-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
      '@media (max-width:620px){.menu-section-group{border-radius:18px;padding:16px}.menu-section-card-grid,.menu-section-group-tools .menu-section-card-grid,.menu-section-group-project .menu-section-card-grid{grid-template-columns:1fr}.menu-section-card.start-finder-btn{min-height:auto}}'
    ].join('');
    document.head.appendChild(style);
  }

  function syncMenuSectionGroups(){
    ensureStyles();
    syncHomeMenuGroups();
    syncSidebarMenuGroups();
  }

  var syncTimer = null;
  function scheduleSync(){
    if(syncTimer) window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(function(){
      syncTimer = null;
      syncMenuSectionGroups();
    }, 80);
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
    }catch(err){}
  }

  function wrap(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__menuSectionGroupsWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      scheduleSync();
      return result;
    };
    wrapped.__menuSectionGroupsWrapped = true;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  window.openHomeRoadmapSection = openHomeRoadmapSection;
  window.syncMenuSectionGroups = syncMenuSectionGroups;
  window.debugMenuSectionGroups = function(){
    var sidebarGroups = Array.prototype.map.call(document.querySelectorAll('[data-menu-section-groups-sidebar] [data-menu-section]'), function(node){
      return {
        group:node.getAttribute('data-menu-section'),
        title:(node.querySelector('.sidebar-menu-section-head strong') || {}).textContent || '',
        cards:Array.prototype.map.call(node.querySelectorAll('[data-menu-card]'), function(card){ return card.getAttribute('data-menu-card'); })
      };
    });
    var homeGroups = Array.prototype.map.call(document.querySelectorAll('#homePanel .menu-section-group'), function(node){
      return {
        title:(node.querySelector('h3') || {}).textContent || '',
        cards:Array.prototype.map.call(node.querySelectorAll('[data-menu-card]'), function(card){ return card.getAttribute('data-menu-card'); })
      };
    });
    return {
      currentLocale:currentLocale(),
      homeGroupCount:homeGroups.length,
      homeGroups:homeGroups,
      sidebarGroupCount:sidebarGroups.length,
      sidebarGroups:sidebarGroups
    };
  };

  wrap('renderHome');
  wrap('showPage');
  wrap('setLang');
  wrap('renderAllLessons');
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', scheduleSync);
  } else {
    scheduleSync();
  }
  window.setTimeout(scheduleSync, 300);
  window.setTimeout(scheduleSync, 900);
})();
