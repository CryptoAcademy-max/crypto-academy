(function(){
  if(typeof window === 'undefined' || window.__saveBookmarkFlow20260502) return;
  window.__saveBookmarkFlow20260502 = true;

  function saveLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getPack(){
    var lang = saveLang();
    var packs = {
      en:{
        title:'More Useful When Saved',
        body:'This site becomes even more useful when you come back before a transfer, a first purchase, or a safety check.',
        points:[
          'Recheck addresses and networks before a transfer',
          'Review the key flow before your first buy',
          'Revisit the glossary and safety pages whenever needed',
          'Compare the free PDFs and eBooks when you want a more structured review'
        ],
        note1:'Bookmark it and come back when you need it.',
        note2:'Useful to revisit before a transfer or your first buy.',
        sourceNote:'A simple library of resources you can come back to when you need them.'
      },
      ko:{
        title:'\uc800\uc7a5\ud574\ub450\uba74 \ub354 \uc720\uc6a9\ud569\ub2c8\ub2e4',
        body:'\uc774 \uc0ac\uc774\ud2b8\ub294 \ud55c \ubc88 \uc77d\uace0 \ub05d\ub0b4\uae30\ubcf4\ub2e4, \uc804\uc1a1 \uc804\u00b7\uccab \uad6c\ub9e4 \uc804\u00b7\ubcf4\uc548 \ud655\uc778 \uc804\uc5d0 \ub2e4\uc2dc \ub4e4\uc5b4\uc640 \ud655\uc778\ud560\uc218\ub85d \ub354 \uc720\uc6a9\ud569\ub2c8\ub2e4.',
        points:[
          '\uc804\uc1a1 \uc804\uc5d0 \uc8fc\uc18c\uc640 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub2e4\uc2dc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uccab \uad6c\ub9e4 \uc804\uc5d0 \ud575\uc2ec \ud750\ub984\ub9cc \ube60\ub974\uac8c \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          'glossary\uc640 safety \ud398\uc774\uc9c0\ub97c \ud544\uc694\ud560 \ub54c \ubc14\ub85c \ub2e4\uc2dc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\ubb34\ub8cc PDF\uc640 \uc804\uc790\ucc45\uc744 \ud568\uaed8 \ube44\uad50\ud558\uba70 \uc815\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4'
        ],
        note1:'\ubd81\ub9c8\ud06c\ud574\ub450\uace0 \ud544\uc694\ud560 \ub54c \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694.',
        note2:'\uc804\uc1a1 \uc804\uacfc \uccab \uad6c\ub9e4 \uc804\uc5d0 \ub2e4\uc2dc \ubcf4\ub294 \uc6a9\ub3c4\ub85c \uc88b\uc2b5\ub2c8\ub2e4.',
        sourceNote:'\ud544\uc694\ud560 \ub54c \ub2e4\uc2dc \ud655\uc778\ud558\uae30 \uc88b\uc740 \uc790\ub8cc\ub97c \ud55c\uacf3\uc5d0 \uc815\ub9ac\ud574\ub450\uc5c8\uc2b5\ub2c8\ub2e4.'
      },
      th:{
        title:'\u0e22\u0e34\u0e48\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49',
        body:'\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e08\u0e30\u0e22\u0e34\u0e48\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e14\u0e39\u0e2d\u0e35\u0e01\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19 \u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01 \u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e0a\u0e47\u0e01\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22',
        points:[
          '\u0e15\u0e23\u0e27\u0e08\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19',
          '\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01',
          '\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e14\u0e39 glossary \u0e41\u0e25\u0e30 safety \u0e44\u0e14\u0e49\u0e17\u0e31\u0e19\u0e17\u0e35\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19',
          '\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e14\u0e39 PDF \u0e1f\u0e23\u0e35\u0e01\u0e31\u0e1a eBook \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a'
        ],
        note1:'\u0e1a\u0e38\u0e01\u0e21\u0e32\u0e23\u0e4c\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49 \u0e41\u0e25\u0e49\u0e27\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19',
        note2:'\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e14\u0e39\u0e2d\u0e35\u0e01\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01',
        sourceNote:'\u0e23\u0e27\u0e21\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e17\u0e35\u0e48\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e14\u0e39\u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e27\u0e49\u0e43\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27'
      },
      id:{
        title:'Lebih Berguna Saat Disimpan',
        body:'Situs ini menjadi lebih berguna ketika Anda kembali lagi sebelum transfer, pembelian pertama, atau pemeriksaan keamanan.',
        points:[
          'Periksa lagi alamat dan jaringan sebelum transfer',
          'Tinjau alur penting sebelum pembelian pertama',
          'Buka lagi halaman glossary dan safety kapan pun diperlukan',
          'Bandingkan PDF gratis dan eBook saat Anda ingin tinjauan yang lebih terstruktur'
        ],
        note1:'Bookmark dan buka lagi saat Anda membutuhkannya.',
        note2:'Berguna untuk dibuka lagi sebelum transfer atau pembelian pertama Anda.',
        sourceNote:'Perpustakaan ringkas berisi materi yang bisa Anda buka lagi saat diperlukan.'
      },
      pt:{
        title:'Mais Util Quando Salvo',
        body:'Este site fica ainda mais util quando voce volta antes de uma transferencia, da primeira compra ou de uma verificacao de seguranca.',
        points:[
          'Revise enderecos e redes antes de transferir',
          'Retome o fluxo principal antes da primeira compra',
          'Volte ao glossario e a pagina de seguranca sempre que precisar',
          'Compare os PDFs gratuitos e os eBooks quando quiser uma revisao mais organizada'
        ],
        note1:'Salve nos favoritos e volte quando precisar.',
        note2:'Util para rever antes de uma transferencia ou da primeira compra.',
        sourceNote:'Uma biblioteca simples de materiais para revisitar quando voce precisar.'
      },
      tr:{
        title:'Kaydedildiginde Daha Faydali',
        body:'Bu site, transfer oncesinde, ilk alimdan once veya bir guvenlik kontrolu sirasinda geri dondugunuzde daha da faydali olur.',
        points:[
          'Transferden once adresleri ve agi yeniden kontrol edin',
          'Ilk alimdan once temel akisi tekrar gozden gecirin',
          'Ihtiyac oldugunda glossary ve safety sayfalarina geri donun',
          'Daha duzenli bir tekrar istediginizde ucretsiz PDFlerle eBookleri karsilastirin'
        ],
        note1:'Yer imlerine ekleyin ve gerektiginde geri donun.',
        note2:'Transferden veya ilk alimdan once yeniden bakmak icin faydalidir.',
        sourceNote:'Ihtiyac duydugunuzda yeniden donebileceginiz sade bir kaynak kutuphanesi.'
      },
      es:{
        title:'Mas Util Cuando se Guarda',
        body:'Este sitio se vuelve aun mas util cuando vuelves antes de una transferencia, de la primera compra o de una revision de seguridad.',
        points:[
          'Vuelve a revisar direcciones y redes antes de transferir',
          'Repasa el flujo clave antes de tu primera compra',
          'Consulta otra vez el glossary y la pagina de safety cuando lo necesites',
          'Compara los PDF gratis y los eBooks cuando quieras un repaso mas estructurado'
        ],
        note1:'Guardalo en marcadores y vuelve cuando lo necesites.',
        note2:'Util para revisarlo antes de una transferencia o de tu primera compra.',
        sourceNote:'Una biblioteca simple de recursos a la que puedes volver cuando la necesites.'
      },
      ar:{
        title:'\u0623\u0643\u062b\u0631 \u0641\u0627\u0626\u062f\u0629 \u0639\u0646\u062f\u0645\u0627 \u062a\u062d\u0641\u0638\u0647',
        body:'\u064a\u0635\u0628\u062d \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0643\u062b\u0631 \u0641\u0627\u0626\u062f\u0629 \u0639\u0646\u062f\u0645\u0627 \u062a\u0639\u0648\u062f \u0625\u0644\u064a\u0647 \u0642\u0628\u0644 \u062a\u062d\u0648\u064a\u0644 \u0627\u0648 \u0642\u0628\u0644 \u0627\u0648\u0644 \u0634\u0631\u0627\u0621 \u0627\u0648 \u0642\u0628\u0644 \u0641\u062d\u0635 \u0627\u0645\u0627\u0646.',
        points:[
          '\u0623\u0639\u062f \u0641\u062d\u0635 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062a \u0642\u0628\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644',
          '\u0631\u0627\u062c\u0639 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0642\u0628\u0644 \u0623\u0648\u0644 \u0634\u0631\u0627\u0621',
          '\u0639\u062f \u0625\u0644\u0649 \u0635\u0641\u062d\u062a\u064a glossary \u0648 safety \u0639\u0646\u062f\u0645\u0627 \u062a\u062d\u062a\u0627\u062c',
          '\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0645\u0644\u0641\u0627\u062a PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u0648\u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0639\u0646\u062f\u0645\u0627 \u062a\u0631\u064a\u062f \u0645\u0631\u0627\u062c\u0639\u0629 \u0623\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627'
        ],
        note1:'\u0627\u062d\u0641\u0638\u0647 \u0641\u064a \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0627\u062a \u0648\u0639\u062f \u0625\u0644\u064a\u0647 \u0639\u0646\u062f\u0645\u0627 \u062a\u062d\u062a\u0627\u062c.',
        note2:'\u0645\u0641\u064a\u062f \u0644\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u064a\u0647 \u0642\u0628\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0623\u0648 \u0642\u0628\u0644 \u0623\u0648\u0644 \u0634\u0631\u0627\u0621.',
        sourceNote:'\u0645\u0643\u062a\u0628\u0629 \u0628\u0633\u064a\u0637\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u062a\u064a \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u064a\u0647\u0627 \u0639\u0646\u062f\u0645\u0627 \u062a\u062d\u062a\u0627\u062c.'
      },
      vi:{
        title:'Huu Ich Hon Khi Duoc Luu Lai',
        body:'Trang nay se huu ich hon nua khi ban quay lai truoc mot lan chuyen tien, mot lan mua dau tien, hoac mot buoc kiem tra an toan.',
        points:[
          'Kiem tra lai dia chi va mang truoc khi chuyen tien',
          'On lai luong chinh truoc lan mua dau tien',
          'Mo lai glossary va safety bat cu luc nao can',
          'So sanh PDF mien phi va eBook khi ban muon on tap co cau truc hon'
        ],
        note1:'Danh dau lai va quay tro lai khi ban can.',
        note2:'Huu ich de xem lai truoc khi chuyen tien hoac truoc lan mua dau tien.',
        sourceNote:'Mot thu vien don gian gom cac tai lieu ban co the quay lai bat cu khi nao can.'
      },
      ha:{
        title:'Ya Fi Amfani Idan An Ajiye Shi',
        body:'Wannan shafin yana kara amfani idan ka dawo gare shi kafin tura kudi, kafin sayenka na farko, ko kafin duba tsaro.',
        points:[
          'Ka sake duba adireshi da network kafin ka tura',
          'Ka sake duba muhimmin tsari kafin sayenka na farko',
          'Ka koma glossary da safety idan kana bukata',
          'Ka kwatanta PDF na kyauta da eBooks idan kana son bita mai tsari'
        ],
        note1:'Ka yi bookmark dinsa sannan ka dawo idan kana bukata.',
        note2:'Ya dace ka sake dubawa kafin tura kudi ko kafin sayenka na farko.',
        sourceNote:'Wata karamar library ta kayan da za ka iya komawa gare su idan kana bukata.'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function buildHomeSaveValueHtml(){
    var pack = getPack();
    return ''
      + '<section class="home-save-value-block">'
      +   '<div class="home-save-value-title">' + pack.title + '</div>'
      +   '<div class="home-save-value-body">' + pack.body + '</div>'
      +   '<ul class="home-save-value-list">' + (pack.points || []).map(function(point){
            return '<li>' + point + '</li>';
          }).join('') + '</ul>'
      +   '<div class="home-save-value-footer">'
      +     '<div class="home-save-value-note">' + pack.note1 + '</div>'
      +     '<div class="home-save-value-note">' + pack.note2 + '</div>'
      +   '</div>'
      + '</section>';
  }

  function buildSourceSaveValueHtml(){
    var pack = getPack();
    return '<div class="src-save-return-note"><p class="src-section-note">' + pack.sourceNote + '</p></div>';
  }

  function ensureHomeSaveValueBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-save-value-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var anchor = finder.querySelector('.home-share-summary-block') || finder.querySelector('.home-free-pdf-value-block');
    var block = finder.querySelector('.home-save-value-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildHomeSaveValueHtml());
      } else {
        finder.insertAdjacentHTML('beforeend', buildHomeSaveValueHtml());
      }
      block = finder.querySelector('.home-save-value-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeSaveValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureSourceSaveValueNote(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var section = panel.querySelector('.src-section-block[data-source-group="freepdf"], .src-section-block[data-source-section="freePdf"]');
    if(!section) return;
    section.querySelectorAll('.src-save-return-note').forEach(function(node){
      if(node.parentNode !== section) node.remove();
    });
    var anchor = section.querySelector('.src-freepdf-flow-block') || section.querySelector('.src-group-desc');
    var block = section.querySelector('.src-save-return-note');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildSourceSaveValueHtml());
      } else {
        section.insertAdjacentHTML('afterbegin', buildSourceSaveValueHtml());
      }
      block = section.querySelector('.src-save-return-note');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildSourceSaveValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncSaveBookmarkFlow(){
    ensureHomeSaveValueBlock();
    ensureSourceSaveValueNote();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__saveBookmarkWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncSaveBookmarkFlow();
      return result;
    };
    wrapped.__saveBookmarkWrapped = true;
    wrapped.__saveBookmarkOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderSources');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncSaveBookmarkFlow);
  }

  syncSaveBookmarkFlow();
})();
