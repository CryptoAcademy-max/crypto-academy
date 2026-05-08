(function(){
  if(typeof window === 'undefined' || window.__freeCoreEbookFlow20260501Safe) return;
  window.__freeCoreEbookFlow20260501Safe = true;

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
        title:'\ubb34\ub8cc\ub85c \uc2dc\uc791\ud558\uace0, \ub354 \uae4a\uac8c \uc815\ub9ac\ud558\uae30',
        body:'\uc774 \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ud575\uc2ec \uac1c\ub150\uacfc \uc2e4\uc804 \ubcf4\uc548 \ud750\ub984\uc744 \ubb34\ub8cc\ub85c \ubc30\uc6b8 \uc218 \uc788\uace0, \uc804\uc790\ucc45\uc5d0\uc11c\ub294 \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \ud55c \ubc88\uc5d0 \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        freeTitle:'\ubb34\ub8cc\ub85c \ubcfc \uc218 \uc788\ub294 \uac83',
        freePoints:[
          '\ud575\uc2ec \uac1c\ub150\uc744 \ubb34\ub8cc lesson\uc73c\ub85c \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          'glossary\uc640 FAQ\ub85c \uc790\uc8fc \ud5f7\uac08\ub9ac\ub294 \uac1c\ub150\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          'safety \ud398\uc774\uc9c0\uc640 \uc790\ub8cc \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uc2e4\uc804 \ubcf4\uc548 \ud750\ub984\uc744 \uc775\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4'
        ],
        ebookTitle:'\uc804\uc790\ucc45\uc5d0\uc11c \ub354 \uc815\ub9ac\ub418\ub294 \uac83',
        ebookPoints:[
          '\uc0ac\uc774\ud2b8\uc5d0\uc11c \ubc30\uc6b4 \ub0b4\uc6a9\uc744 \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uccab \uad6c\ub9e4, \uc804\uc1a1, \ubcf4\uc548 \ud750\ub984\uc744 \ud55c \ubc88\uc5d0 \uc774\uc5b4\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\ucd08\ubcf4\uc790\uac00 \ud5f7\uac08\ub9ac\uae30 \uc26c\uc6b4 \ub0b4\uc6a9\uc744 \ub354 \uccb4\uacc4\uc801\uc73c\ub85c \uc815\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4'
        ],
        ctaFree:'\ubb34\ub8cc lesson \uba3c\uc800 \ubcf4\uae30',
        ctaEbook:'\uc804\uc790\ucc45 \uc0b4\ud3b4\ubcf4\uae30',
        sourceNote:'\ubb34\ub8cc lesson\uacfc \uc790\ub8cc\ub97c \uba3c\uc800 \ubcf8 \ub4a4, \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \ubcf5\uc2b5\ud558\uace0 \uc2f6\ub2e4\uba74 \uc804\uc790\ucc45\uc744 \uc774\uc5b4\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694.'
      },
      th:{
        title:'\u0e40\u0e23\u0e34\u0e48\u0e21\u0e1f\u0e23\u0e35 \u0e41\u0e25\u0e49\u0e27\u0e04\u0e48\u0e2d\u0e22\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e43\u0e2b\u0e49\u0e25\u0e36\u0e01\u0e02\u0e36\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22 eBook',
        body:'\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e40\u0e23\u0e35\u0e22\u0e19\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01\u0e41\u0e25\u0e30\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e44\u0e14\u0e49\u0e1f\u0e23\u0e35 \u0e2a\u0e48\u0e27\u0e19 eBook \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e43\u0e19\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19',
        freeTitle:'\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e40\u0e23\u0e35\u0e22\u0e19\u0e44\u0e14\u0e49\u0e1f\u0e23\u0e35',
        freePoints:[
          '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e1f\u0e23\u0e35',
          '\u0e43\u0e0a\u0e49 glossary \u0e41\u0e25\u0e30 FAQ \u0e17\u0e1a\u0e17\u0e27\u0e19\u0e04\u0e33\u0e17\u0e35\u0e48\u0e2a\u0e31\u0e1a\u0e2a\u0e19\u0e44\u0e14\u0e49\u0e40\u0e23\u0e47\u0e27',
          '\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e14\u0e49\u0e27\u0e22\u0e2b\u0e19\u0e49\u0e32 safety \u0e41\u0e25\u0e30\u0e04\u0e25\u0e31\u0e07\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25'
        ],
        ebookTitle:'\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48 eBook \u0e0a\u0e48\u0e27\u0e22\u0e08\u0e31\u0e14\u0e23\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e1a\u0e44\u0e14\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32',
        ebookPoints:[
          '\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e1a\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e43\u0e19\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19',
          '\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e14\u0e39\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01 \u0e01\u0e32\u0e23\u0e42\u0e2d\u0e19 \u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e44\u0e14\u0e49\u0e43\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27',
          '\u0e08\u0e31\u0e14\u0e23\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e1a\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e1c\u0e39\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e21\u0e31\u0e01\u0e2a\u0e31\u0e1a\u0e2a\u0e19\u0e44\u0e14\u0e49\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19\u0e02\u0e36\u0e49\u0e19'
        ],
        ctaFree:'\u0e40\u0e1b\u0e34\u0e14\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e1f\u0e23\u0e35',
        ctaEbook:'\u0e14\u0e39 eBook',
        sourceNote:'\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e08\u0e32\u0e01\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e41\u0e25\u0e30\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e23\u0e35 \u0e43\u0e2b\u0e49\u0e15\u0e48\u0e2d\u0e14\u0e49\u0e27\u0e22 eBooks'
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
        title:'\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u0627\u064b \u062b\u0645 \u062a\u0639\u0645\u0642 \u0623\u0643\u062b\u0631 \u0645\u0639 \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
        body:'\u064a\u0648\u0641\u0631 \u0644\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0648\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0645\u062c\u0627\u0646\u0627\u064b\u060c \u0628\u064a\u0646\u0645\u0627 \u062a\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0639\u0644\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0643\u0644 \u0634\u064a\u0621 \u0628\u0637\u0631\u064a\u0642\u0629 \u0623\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627\u064b.',
        freeTitle:'\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0645\u0643\u0646\u0643 \u062a\u0639\u0644\u0645\u0647 \u0645\u062c\u0627\u0646\u0627\u064b',
        freePoints:[
          '\u062a\u0639\u0644\u0651\u0645 \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062f\u0631\u0648\u0633 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629',
          '\u0627\u0633\u062a\u062e\u062f\u0645 glossary \u0648FAQ \u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u0635\u0637\u0644\u062d\u0627\u062a \u0627\u0644\u0645\u0631\u0628\u0643\u0629 \u0628\u0633\u0631\u0639\u0629',
          '\u0627\u0628\u0646\u0650 \u0648\u0639\u064a\u0627\u064b \u0639\u0645\u0644\u064a\u0627\u064b \u0628\u0627\u0644\u0623\u0645\u0627\u0646 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0635\u0641\u062d\u0629 safety \u0648\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0645\u0635\u0627\u062f\u0631'
        ],
        ebookTitle:'\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0639\u0644\u0649 \u062a\u0646\u0638\u064a\u0645\u0647 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644',
        ebookPoints:[
          '\u0631\u0627\u062c\u0639 \u062f\u0631\u0648\u0633 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u062a\u0633\u0644\u0633\u0644 \u0623\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627\u064b',
          '\u0627\u0631\u062c\u0639 \u0625\u0644\u0649 \u0627\u0644\u0634\u0631\u0627\u0621 \u0627\u0644\u0623\u0648\u0644 \u0648\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0641\u064a \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f',
          '\u0646\u0638\u0651\u0645 \u0627\u0644\u0645\u0648\u0636\u0648\u0639\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0648\u0627\u062c\u0647 \u0641\u064a\u0647\u0627 \u0627\u0644\u0645\u0628\u062a\u062f\u0626\u0648\u0646 \u0635\u0639\u0648\u0628\u0629 \u0623\u0643\u0628\u0631'
        ],
        ctaFree:'\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062f\u0631\u0648\u0633 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629',
        ctaEbook:'\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
        sourceNote:'\u0625\u0630\u0627 \u0623\u0631\u062f\u062a \u0645\u0631\u0627\u062c\u0639\u0629 \u0623\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627\u064b \u0628\u0639\u062f \u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0627\u0644\u062f\u0631\u0648\u0633 \u0648\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629\u060c \u0641\u062a\u0627\u0628\u0639 \u0645\u0639 \u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629.'
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
    packs.en.body = 'Free lessons cover the basics. The eBooks help you review them in a more structured way.';
    packs.en.sourceNote = 'Use the eBooks when you want a more structured review after the free lessons.';
    packs.ko.body = '\ubb34\ub8cc lesson\uc73c\ub85c \uae30\ucd08\ub97c \ubc30\uc6b0\uace0, \uc804\uc790\ucc45\uc73c\ub85c \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.';
    packs.ko.sourceNote = '\ubb34\ub8cc lesson\uacfc \uc790\ub8cc\ub97c \ubcf8 \ub4a4 \ub354 \uc815\ub9ac\ub41c \ubcf5\uc2b5\uc774 \ud544\uc694\ud558\uba74 \uc804\uc790\ucc45\uc744 \uc774\uc5b4\uc11c \ubcf4\uc138\uc694.';
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
      +     '<a class="home-premium-pdf-btn is-free" data-home-track="home.flow.free" data-home-track-label="Free flow CTA" href="' + getFirstLessonRoute() + '">' + pack.ctaFree + '</a>'
      +     '<a class="home-premium-pdf-btn" data-home-track="home.flow.ebook" data-home-track-label="eBook flow CTA" href="' + getHomeRoute() + '#home-crypto-ebook-section">' + pack.ctaEbook + '</a>'
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
