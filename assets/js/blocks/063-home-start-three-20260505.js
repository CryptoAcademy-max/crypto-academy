(function(){
  if(typeof window === 'undefined' || window.__homeStartThree20260505) return;
  window.__homeStartThree20260505 = true;

  function startThreeLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getPageRoute(page){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      return window.__CA_GET_PAGE_ROUTE(page);
    }
    var base = window.__CA_BASE_PREFIX__ || './';
    if(page === 'home') return base + 'index.html';
    return base + page + '/index.html';
  }

  function getLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function'){
      return window.__CA_GET_LESSON_ROUTE(index);
    }
    var base = window.__CA_BASE_PREFIX__ || './';
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    return base + 'lesson/' + (slugs[index] || 'blockchain') + '/index.html';
  }

  function getStartThreePack(){
    var lang = startThreeLang();
    var packs = {
      en:{
        title:'3 Best Places to Start Today',
        body:'If you are new here, these 3 starting points will help you understand the site faster.',
        note:'If you need something fast, start with the checklists. If you want a fuller explanation, start with the lessons.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Start with the glossary',
            body:'Quickly review the crypto terms beginners confuse most often',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Learn the key safety basics first',
            body:'Review fake websites, seed phrase risks, and other practical safety basics',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Understand your first buy',
            body:'Learn the key steps to review before buying crypto for the first time',
            href:getLessonRoute(5)
          }
        ]
      },
      ko:{
        title:'\uc624\ub298 \uac00\uc7a5 \uba3c\uc800 \ubcf4\uba74 \uc88b\uc740 3\uac1c',
        body:'\ucc98\uc74c \ub4e4\uc5b4\uc654\ub2e4\uba74 \uc544\ub798 3\uac1c\ubd80\ud130 \ubcf4\uba74 \uc804\uccb4 \ud750\ub984\uc744 \ub354 \ube60\ub974\uac8c \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        note:'\uae09\ud558\uac8c \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ubd80\ud130, \ucc28\ubd84\ud788 \ubc30\uc6b0\uace0 \uc2f6\ub2e4\uba74 lesson\ubd80\ud130 \uc2dc\uc791\ud574\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'\uc6a9\uc5b4\ubd80\ud130 \ube60\ub974\uac8c \uc774\ud574\ud558\uae30',
            body:'\uac00\uc7a5 \uc790\uc8fc \ud5f7\uac08\ub9ac\ub294 \uc554\ud638\ud654\ud3d0 \uc6a9\uc5b4\ub97c \ube60\ub974\uac8c \uc815\ub9ac\ud569\ub2c8\ub2e4',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'\uc0ac\uae30\uc640 \ubcf4\uc548\ubd80\ud130 \uba3c\uc800 \ud655\uc778\ud558\uae30',
            body:'\uac00\uc9dc \uc0ac\uc774\ud2b8, \uc2dc\ub4dc \ubb38\uad6c, \uc8fc\uc18c \uad00\ub828 \uc704\ud5d8\uc744 \uba3c\uc800 \ud655\uc778\ud569\ub2c8\ub2e4',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'\uccab \uad6c\ub9e4 \ud750\ub984 \uc774\ud574\ud558\uae30',
            body:'\uccab \uad6c\ub9e4 \uc804\uc5d0 \uc5b4\ub5a4 \ud750\ub984\uc744 \ud655\uc778\ud574\uc57c \ud558\ub294\uc9c0 \ud55c \ubc88\uc5d0 \uc815\ub9ac\ud569\ub2c8\ub2e4',
            href:getLessonRoute(5)
          }
        ]
      },
      th:{
        title:'3 \u0e08\u0e38\u0e14\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e14\u0e39\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49',
        body:'\u0e16\u0e49\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e07\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01 3 \u0e08\u0e38\u0e14\u0e19\u0e35\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e14\u0e49\u0e40\u0e23\u0e47\u0e27\u0e02\u0e36\u0e49\u0e19',
        note:'\u0e16\u0e49\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e47\u0e01\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19 \u0e16\u0e49\u0e32\u0e2d\u0e22\u0e32\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e15\u0e47\u0e21\u0e02\u0e36\u0e49\u0e19 \u0e43\u0e2b\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19',
        cards:[
          {
            tag:'GLOSSARY',
            title:'\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01 glossary',
            body:'\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e04\u0e23\u0e34\u0e1b\u0e42\u0e15\u0e17\u0e35\u0e48\u0e21\u0e37\u0e2d\u0e43\u0e2b\u0e21\u0e48\u0e2a\u0e31\u0e1a\u0e2a\u0e19\u0e1a\u0e48\u0e2d\u0e22\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'\u0e40\u0e23\u0e35\u0e22\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e01\u0e48\u0e2d\u0e19',
            body:'\u0e14\u0e39\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e1b\u0e25\u0e2d\u0e21 seed phrase \u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e01\u0e48\u0e2d\u0e19',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01',
            body:'\u0e14\u0e39\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e40\u0e0a\u0e47\u0e01\u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e34\u0e1b\u0e42\u0e15\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01',
            href:getLessonRoute(5)
          }
        ]
      },
      id:{
        title:'3 Tempat Terbaik untuk Mulai Hari Ini',
        body:'Jika ini kunjungan pertama Anda, tiga titik awal ini akan membantu Anda memahami situs lebih cepat.',
        note:'Jika Anda butuh sesuatu yang cepat, mulai dari checklist. Jika ingin penjelasan yang lebih lengkap, mulai dari pelajaran.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Mulai dari glossary',
            body:'Tinjau cepat istilah crypto yang paling sering membingungkan pemula',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Pelajari dasar keamanan lebih dulu',
            body:'Tinjau website palsu, risiko seed phrase, dan dasar keamanan praktis lainnya',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Pahami pembelian pertama Anda',
            body:'Pelajari langkah penting yang perlu diperiksa sebelum membeli crypto untuk pertama kali',
            href:getLessonRoute(5)
          }
        ]
      },
      pt:{
        title:'3 Melhores Pontos para Comecar Hoje',
        body:'Se esta e a sua primeira visita, estes 3 pontos iniciais vao ajudar voce a entender o site mais rapido.',
        note:'Se voce precisa de algo rapido, comece pelos checklists. Se quiser uma explicacao mais completa, comece pelas licoes.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Comece pelo glossario',
            body:'Revise rapidamente os termos de cripto que mais confundem iniciantes',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Aprenda primeiro as bases de seguranca',
            body:'Veja websites falsos, riscos da seed phrase e outros pontos praticos de seguranca',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Entenda sua primeira compra',
            body:'Aprenda os passos principais para revisar antes de comprar crypto pela primeira vez',
            href:getLessonRoute(5)
          }
        ]
      },
      tr:{
        title:'Bugun Baslamak Icin En Iyi 3 Yer',
        body:'Buraya ilk kez geldiyseniz, bu 3 baslangic noktasi sitenin genel yapisini daha hizli anlamaniza yardimci olur.',
        note:'Hizli bir sey istiyorsaniz checklistlerle baslayin. Daha tam bir anlatim istiyorsaniz derslerle baslayin.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Glossary ile baslayin',
            body:'Yeni baslayanlarin en cok karistirdigi kripto terimlerini hizlica gozden gecirin',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Once temel guvenligi ogrenin',
            body:'Sahte siteler, seed phrase riskleri ve diger pratik guvenlik temellerini inceleyin',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Ilk alim surecinizi anlayin',
            body:'Ilk kez kripto almadan once kontrol etmeniz gereken temel adimlari ogrenin',
            href:getLessonRoute(5)
          }
        ]
      },
      es:{
        title:'3 Mejores Puntos para Empezar Hoy',
        body:'Si esta es tu primera visita, estos 3 puntos de inicio te ayudaran a entender el sitio mas rapido.',
        note:'Si necesitas algo rapido, empieza por los checklists. Si quieres una explicacion mas completa, empieza por las lecciones.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Empieza por el glosario',
            body:'Revisa rapido los terminos de crypto que mas confunden a los principiantes',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Aprende primero las bases de seguridad',
            body:'Revisa websites falsos, riesgos de la seed phrase y otras bases practicas de seguridad',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Entiende tu primera compra',
            body:'Aprende los pasos clave que debes revisar antes de comprar crypto por primera vez',
            href:getLessonRoute(5)
          }
        ]
      },
      ar:{
        title:'\u0623\u0641\u0636\u0644 3 \u0623\u0645\u0627\u0643\u0646 \u0644\u0644\u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u064a\u0648\u0645',
        body:'\u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0647\u0630\u0647 \u0632\u064a\u0627\u0631\u062a\u0643 \u0627\u0644\u0623\u0648\u0644\u0649\u060c \u0641\u0647\u0630\u0647 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u062b\u0644\u0627\u062b \u0633\u062a\u0633\u0627\u0639\u062f\u0643 \u0639\u0644\u0649 \u0641\u0647\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0634\u0643\u0644 \u0623\u0633\u0631\u0639.',
        note:'\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0631\u064a\u062f \u0634\u064a\u0626\u0627\u064b \u0633\u0631\u064a\u0639\u0627\u064b \u0641\u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u0642\u0648\u0627\u0626\u0645. \u0648\u0625\u0630\u0627 \u0623\u0631\u062f\u062a \u0634\u0631\u062d\u0627\u064b \u0623\u0643\u0645\u0644 \u0641\u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u062f\u0631\u0648\u0633.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'\u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u0645\u0633\u0631\u062f',
            body:'\u0631\u0627\u062c\u0639 \u0628\u0633\u0631\u0639\u0629 \u0645\u0635\u0637\u0644\u062d\u0627\u062a \u0627\u0644\u0643\u0631\u064a\u0628\u062a\u0648 \u0627\u0644\u062a\u064a \u064a\u062e\u062a\u0644\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646 \u0641\u0647\u0645\u0647\u0627',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'\u062a\u0639\u0644\u0645 \u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0646 \u0623\u0648\u0644\u0627\u064b',
            body:'\u0631\u0627\u062c\u0639 \u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0632\u064a\u0641\u0629 \u0648seed phrase \u0648\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u0639\u0645\u0644\u064a\u0629',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'\u0627\u0641\u0647\u0645 \u0623\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0634\u0631\u0627\u0621',
            body:'\u062a\u0639\u0644\u0645 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u062a\u064a \u064a\u062c\u0628 \u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0642\u0628\u0644 \u0634\u0631\u0627\u0621 \u0627\u0644\u0643\u0631\u064a\u0628\u062a\u0648 \u0644\u0623\u0648\u0644 \u0645\u0631\u0629',
            href:getLessonRoute(5)
          }
        ]
      },
      vi:{
        title:'3 Noi Nen Xem Dau Tien Hom Nay',
        body:'Neu day la lan dau ban vao day, 3 diem bat dau nay se giup ban hieu trang nhanh hon.',
        note:'Neu can xem nhanh, hay bat dau voi checklist. Neu muon giai thich day du hon, hay bat dau voi cac bai hoc.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Bat dau voi glossary',
            body:'Xem nhanh cac thuat ngu crypto ma nguoi moi thuong hay nham lan',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Hoc truoc cac nen tang an toan',
            body:'Xem website gia, rui ro seed phrase va cac diem an toan thuc te quan trong khac',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Hieu lan mua dau tien cua ban',
            body:'Hoc cac buoc chinh can xem lai truoc khi mua crypto lan dau',
            href:getLessonRoute(5)
          }
        ]
      },
      ha:{
        title:'Wurare 3 Mafi Kyau don Fara Yau',
        body:'Idan wannan ne karo na farko da ka shigo, wadannan wurare 3 za su taimaka maka fahimtar shafin cikin sauri.',
        note:'Idan kana bukatar abu mai sauri, fara da checklist. Idan kana son karin bayani, fara da darussa.',
        cards:[
          {
            tag:'GLOSSARY',
            title:'Fara da glossary',
            body:'Ka duba cikin sauri kalmomin crypto da masu farawa suka fi rikicewa da su',
            href:getPageRoute('glossary')
          },
          {
            tag:'SAFETY',
            title:'Koyi muhimman abubuwan tsaro da farko',
            body:'Ka duba websites na bogi, hadarin seed phrase, da sauran muhimman ka\'idojin tsaro na aiki',
            href:getPageRoute('safety')
          },
          {
            tag:'BUY',
            title:'Ka fahimci sayen ka na farko',
            body:'Ka koyi muhimman matakan da ya kamata ka duba kafin ka sayi crypto karo na farko',
            href:getLessonRoute(5)
          }
        ]
      }
    };
    packs.br = packs.pt;
    if(packs.en){
      packs.en.body = 'New here? Start with these 3 pages.';
      packs.en.note = 'Need speed? Start with checklists. Need context? Start with lessons.';
      if(packs.en.cards && packs.en.cards[0]) packs.en.cards[0].body = 'Quick crypto terms for beginners';
      if(packs.en.cards && packs.en.cards[1]) packs.en.cards[1].body = 'Check fake websites, seed phrases, and address risks first';
      if(packs.en.cards && packs.en.cards[2]) packs.en.cards[2].body = 'Review the first-buy flow before you act';
    }
    if(packs.ko){
      packs.ko.body = '\ucc98\uc74c \ub4e4\uc5b4\uc654\ub2e4\uba74 \uc774 3\uac1c\ubd80\ud130 \ubcf4\uba74 \ub429\ub2c8\ub2e4.';
      packs.ko.note = '\ube68\ub9ac \ud655\uc778\ud558\ub824\uba74 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ubd80\ud130, \ud750\ub984\uc744 \ubc30\uc6b0\ub824\uba74 lesson\ubd80\ud130 \uc2dc\uc791\ud558\uc138\uc694.';
      if(packs.ko.cards && packs.ko.cards[0]) packs.ko.cards[0].body = '\ucd08\ubcf4\uc790\uac00 \uac00\uc7a5 \uc790\uc8fc \ud5f7\uac08\ub9ac\ub294 \uc6a9\uc5b4\ubd80\ud130 \ube60\ub974\uac8c \ubd05\ub2c8\ub2e4';
      if(packs.ko.cards && packs.ko.cards[1]) packs.ko.cards[1].body = '\uac00\uc9dc \uc0ac\uc774\ud2b8, \uc2dc\ub4dc \ubb38\uad6c, \uc8fc\uc18c \uc704\ud5d8\ubd80\ud130 \uba3c\uc800 \ud655\uc778\ud569\ub2c8\ub2e4';
      if(packs.ko.cards && packs.ko.cards[2]) packs.ko.cards[2].body = '\uccab \uad6c\ub9e4 \uc804\uc5d0 \ubcfc \ud575\uc2ec \ud750\ub984\ub9cc \uc9e7\uac8c \uc815\ub9ac\ud569\ub2c8\ub2e4';
    }
    return packs[lang] || packs.en;
  }

  function buildHomeStartThreeHtml(){
    var pack = getStartThreePack();
    var cards = Array.isArray(pack.cards) ? pack.cards : [];
    return ''
      + '<section class="home-start-three-block home-situation-block">'
      +   '<div class="home-situation-title">' + (pack.title || '3 Best Places to Start Today') + '</div>'
      +   '<div class="home-situation-body">' + (pack.body || 'If you are new here, these 3 starting points will help you understand the site faster.') + '</div>'
      +   '<div class="home-situation-grid">' + cards.map(function(card){
            return ''
              + '<a class="home-situation-card" href="' + (card.href || '#') + '">'
              +   '<span class="home-situation-tag">' + (card.tag || 'GO') + '</span>'
              +   '<div class="home-situation-card-title">' + (card.title || '') + '</div>'
              +   '<div class="home-situation-card-body">' + (card.body || '') + '</div>'
              + '</a>';
          }).join('') + '</div>'
      +   '<div class="home-situation-body" style="margin-top:12px;margin-bottom:0">' + (pack.note || '') + '</div>'
      + '</section>';
  }

  function ensureHomeStartThreeBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    panel.querySelectorAll('.home-start-three-block').forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });
    var anchor = hero.querySelector('.home-situation-block:not(.home-start-three-block)') || hero.querySelector('.home-identity-block') || hero.querySelector('.home-desc');
    var block = hero.querySelector('.home-start-three-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildHomeStartThreeHtml());
      } else {
        hero.insertAdjacentHTML('afterbegin', buildHomeStartThreeHtml());
      }
      block = hero.querySelector('.home-start-three-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeStartThreeHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncHomeStartThree(){
    ensureHomeStartThreeBlock();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeStartThreeWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeStartThree();
      return result;
    };
    wrapped.__homeStartThreeWrapped = true;
    wrapped.__homeStartThreeOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  syncHomeStartThree();
})();
