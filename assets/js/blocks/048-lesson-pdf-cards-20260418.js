(function(){
  if(typeof window === 'undefined' || window.__lessonPdfCards20260418) return;
  window.__lessonPdfCards20260418 = true;

  function baseLang(lang){
    var value = lang || (typeof currentLang === 'string' && currentLang ? currentLang : 'en');
    return value === 'br' ? 'pt' : value;
  }

  var PDF_FILES = {
    lesson6:{
      en:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-en.pdf',
      ko:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-ko.pdf',
      th:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-th.pdf',
      id:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-id.pdf',
      pt:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-pt.pdf',
      br:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-pt.pdf',
      tr:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-tr.pdf',
      es:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-es.pdf',
      ar:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-ar.pdf',
      vi:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-vi.pdf',
      ha:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson6-first-purchase-checklist-ha.pdf'
    },
    lesson7:{
      en:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-en.pdf',
      ko:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-ko.pdf',
      th:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-th.pdf',
      id:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-id.pdf',
      pt:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-pt.pdf',
      br:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-pt.pdf',
      tr:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-tr.pdf',
      es:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-es.pdf',
      ar:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-ar.pdf',
      vi:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-vi.pdf',
      ha:(window.__CA_BASE_PREFIX__ || './') + 'pdf/lesson7-scam-prevention-guide-ha.pdf'
    }
  };

  var TEXT = {
    en:{
      lesson6:{
        title:'Free PDF Checklist',
        body:'If you want a quick reference before your first purchase, you can open the beginner crypto safety checklist PDF.',
        button:'Open Free PDF'
      },
      lesson7:{
        title:'Scam Prevention PDF Guide',
        body:'If you want to review warning signs like fake websites, seed phrases, or address poisoning, you can open the free PDF guide.',
        button:'Open Scam Prevention PDF'
      }
    },
    ko:{
      lesson6:{
        title:'\ubb34\ub8cc PDF \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        body:'\uccab \uad6c\ub9e4 \uc804\uc5d0 \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74, \ucd08\ubcf4\uc790\ub97c \uc704\ud55c \uc554\ud638\ud654\ud3d0 \uc548\uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8 PDF\ub97c \uc5f4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        button:'\ubb34\ub8cc PDF \uc5f4\uae30'
      },
      lesson7:{
        title:'\uc0ac\uae30 \uc608\ubc29 PDF \uac00\uc774\ub4dc',
        body:'\uac00\uc9dc \uc0ac\uc774\ud2b8, \uc2dc\ub4dc \ubb38\uad6c, \uc8fc\uc18c \uc624\uc5fc \uacf5\uaca9 \uac19\uc740 \uc704\ud5d8 \uc2e0\ud638\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \ubb34\ub8cc PDF \uac00\uc774\ub4dc\ub97c \uc5f4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        button:'\uc0ac\uae30 \uc608\ubc29 PDF \uc5f4\uae30'
      }
    },
    th:{
      lesson6:{
        title:'\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c PDF \u0e1f\u0e23\u0e35',
        body:'\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e21\u0e35\u0e2a\u0e23\u0e38\u0e1b\u0e44\u0e27\u0e49\u0e14\u0e39\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e34\u0e14 PDF \u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e04\u0e23\u0e34\u0e1b\u0e42\u0e15\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e44\u0e14\u0e49',
        button:'\u0e40\u0e1b\u0e34\u0e14 PDF \u0e1f\u0e23\u0e35'
      },
      lesson7:{
        title:'\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d PDF \u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e2a\u0e41\u0e01\u0e21',
        body:'\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e1b\u0e25\u0e2d\u0e21 seed phrase \u0e2b\u0e23\u0e37\u0e2d address poisoning \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e34\u0e14\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d PDF \u0e1f\u0e23\u0e35\u0e44\u0e14\u0e49',
        button:'\u0e40\u0e1b\u0e34\u0e14 PDF \u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e2a\u0e41\u0e01\u0e21'
      }
    },
    id:{
      lesson6:{
        title:'Checklist PDF Gratis',
        body:'Jika ingin referensi cepat sebelum pembelian pertama, Anda bisa membuka PDF checklist keamanan crypto untuk pemula.',
        button:'Buka PDF Gratis'
      },
      lesson7:{
        title:'Panduan PDF Anti-Scam',
        body:'Jika ingin meninjau lagi tanda bahaya seperti situs palsu, seed phrase, atau address poisoning, Anda bisa membuka panduan PDF gratis.',
        button:'Buka PDF Anti-Scam'
      }
    },
    pt:{
      lesson6:{
        title:'Checklist PDF Gratuito',
        body:'Se quiser uma referencia rapida antes da primeira compra, voce pode abrir o PDF com a checklist de seguranca cripto para iniciantes.',
        button:'Abrir PDF Gratuito'
      },
      lesson7:{
        title:'Guia PDF de Prevencao de Golpes',
        body:'Se quiser revisar sinais de alerta como sites falsos, seed phrase ou address poisoning, voce pode abrir o guia PDF gratuito.',
        button:'Abrir PDF de Golpes'
      }
    },
    tr:{
      lesson6:{
        title:'Ucretsiz PDF Kontrol Listesi',
        body:'Ilk aliminizdan once hizli bir referans istiyorsaniz, yeni baslayanlar icin kripto guvenlik kontrol listesi PDF dosyasini acabilirsiniz.',
        button:'Ucretsiz PDF Ac'
      },
      lesson7:{
        title:'Dolandiricilik Onleme PDF Rehberi',
        body:'Sahte siteler, seed phrase veya address poisoning gibi uyari isaretlerini yeniden gozden gecirmek isterseniz, ucretsiz PDF rehberini acabilirsiniz.',
        button:'PDF Rehberini Ac'
      }
    },
    es:{
      lesson6:{
        title:'Checklist PDF Gratis',
        body:'Si quieres una referencia rapida antes de tu primera compra, puedes abrir el PDF con la lista de seguridad cripto para principiantes.',
        button:'Abrir PDF Gratis'
      },
      lesson7:{
        title:'Guia PDF para Evitar Estafas',
        body:'Si quieres repasar senales de alerta como sitios falsos, seed phrase o address poisoning, puedes abrir la guia PDF gratuita.',
        button:'Abrir PDF Antiestafas'
      }
    },
    ar:{
      lesson6:{
        title:'\u0642\u0627\u0626\u0645\u0629 PDF \u0645\u062c\u0627\u0646\u064a\u0629',
        body:'\u0625\u0630\u0627 \u0623\u0631\u062f\u062a \u0645\u0631\u062c\u0639\u0627\u064b \u0633\u0631\u064a\u0639\u0627\u064b \u0642\u0628\u0644 \u0623\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0634\u0631\u0627\u0621\u060c \u064a\u0645\u0643\u0646\u0643 \u0641\u062a\u062d \u0645\u0644\u0641 PDF \u0644\u0642\u0627\u0626\u0645\u0629 \u0623\u0645\u0627\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0644\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646.',
        button:'\u0627\u0641\u062a\u062d PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a'
      },
      lesson7:{
        title:'\u062f\u0644\u064a\u0644 PDF \u0644\u0645\u0646\u0639 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0644',
        body:'\u0625\u0630\u0627 \u0623\u0631\u062f\u062a \u0645\u0631\u0627\u062c\u0639\u0629 \u0625\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u062d\u0630\u064a\u0631 \u0645\u062b\u0644 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0632\u064a\u0641\u0629 \u0623\u0648 seed phrase \u0623\u0648 address poisoning\u060c \u064a\u0645\u0643\u0646\u0643 \u0641\u062a\u062d \u062f\u0644\u064a\u0644 PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a.',
        button:'\u0627\u0641\u062a\u062d \u062f\u0644\u064a\u0644 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0644'
      }
    },
    vi:{
      lesson6:{
        title:'Checklist PDF Mien Phi',
        body:'Neu ban muon mot tai lieu xem nhanh truoc lan mua dau tien, ban co the mo file PDF checklist an toan crypto cho nguoi moi.',
        button:'Mo PDF Mien Phi'
      },
      lesson7:{
        title:'Huong Dan PDF Chong Lua Dao',
        body:'Neu ban muon xem lai cac dau hieu canh bao nhu trang gia, seed phrase hay address poisoning, ban co the mo huong dan PDF mien phi.',
        button:'Mo PDF Chong Lua Dao'
      }
    },
    ha:{
      lesson6:{
        title:'Jerin Dubawa na PDF Kyauta',
        body:'Idan kana son takaitaccen abu da za ka sake dubawa kafin sayenka na farko, za ka iya bude PDF na jerin duba tsaron crypto na masu farawa.',
        button:'Bude PDF Kyauta'
      },
      lesson7:{
        title:'Jagorar PDF ta Kariya daga Damfara',
        body:'Idan kana son sake duba alamun gargadi kamar shafukan bogi, seed phrase, ko address poisoning, za ka iya bude jagorar PDF kyauta.',
        button:'Bude PDF na Damfara'
      }
    }
  };
  TEXT.br = TEXT.pt;

  function getLangPack(lang){
    return TEXT[lang] || TEXT[baseLang(lang)] || TEXT.en;
  }

  function getLessonPdfHref(key, lang){
    var files = PDF_FILES[key] || PDF_FILES.lesson6 || {};
    if(files[lang]) return files[lang];
    var resolved = baseLang(lang);
    if(files[resolved]) return files[resolved];
    if(files.en) return files.en;
    return files.ko || '';
  }

  function buildLessonPdfCard(i, lang){
    var key = i === 5 ? 'lesson6' : 'lesson7';
    var pack = getLangPack(lang)[key];
    var href = getLessonPdfHref(key, lang);
    return ''
      + '<section class="home-pdf-block lesson-pdf-card" data-lesson-pdf="' + key + '">'
      +   '<div class="home-pdf-title">' + pack.title + '</div>'
      +   '<div class="home-pdf-body">' + pack.body + '</div>'
      +   '<div class="home-pdf-grid">'
      +     '<a class="home-pdf-link" href="' + href + '" target="_blank" rel="noopener noreferrer">'
      +       '<span>' + pack.button + '</span>'
      +       '<span class="home-pdf-link-tag">PDF</span>'
      +     '</a>'
      +   '</div>'
      + '</section>';
  }

  var originalRenderLesson = window.renderLesson;
  if(typeof originalRenderLesson !== 'function' || originalRenderLesson.__lessonPdfCardsWrapped) return;

  function wrappedRenderLesson(i){
    var html = originalRenderLesson.apply(this, arguments);
    if((i !== 5 && i !== 6) || typeof html !== 'string') return html;
    var shell = document.createElement('div');
    shell.innerHTML = html;
    var nav = shell.querySelector('.lesson-nav-bar');
    if(!nav) return html;
    var existing = shell.querySelector('.lesson-pdf-card');
    if(existing) existing.remove();
    nav.insertAdjacentHTML('beforebegin', buildLessonPdfCard(i, typeof currentLang === 'string' ? currentLang : 'en'));
    return shell.innerHTML;
  }

  wrappedRenderLesson.__lessonPdfCardsWrapped = true;
  window.renderLesson = wrappedRenderLesson;

  if(typeof document !== 'undefined'){
    var lessonSixPanel = document.getElementById('lesson5');
    if(lessonSixPanel) lessonSixPanel.innerHTML = window.renderLesson(5);
    var lessonSevenPanel = document.getElementById('lesson6');
    if(lessonSevenPanel) lessonSevenPanel.innerHTML = window.renderLesson(6);
  }

  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof currentLesson === 'number' && (currentLesson === 5 || currentLesson === 6) && typeof showLesson === 'function'){
    showLesson(currentLesson);
  }
})();