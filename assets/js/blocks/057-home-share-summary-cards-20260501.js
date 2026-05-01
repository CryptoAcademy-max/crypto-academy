(function(){
  if(typeof window === 'undefined' || window.__homeShareSummaryCards20260501) return;
  window.__homeShareSummaryCards20260501 = true;

  function summaryLang(){
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

  function getSummaryPack(){
    var lang = summaryLang();
    var packs = {
      en:{
        title:'Key Ideas at a Glance',
        body:'Short summary cards you can save, revisit, and share more easily.',
        cards:[
          { chip:'SAFE', title:'Never share your seed phrase', body:'Any message or site asking for your seed phrase should be treated as suspicious first', href:getPageRoute('safety') },
          { chip:'SEND', title:'Recheck the address and network before sending', body:'Do not trust familiar names alone-check the actual address and network carefully', href:getLessonRoute(2) },
          { chip:'START', title:'Starting small is usually safer', body:'Your first buy and first transfer are safer when you learn the process with a small amount', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Understand the structure before chasing profit', body:'Learning the basics of terms, wallets, transfers, and safety helps reduce avoidable mistakes', href:getPageRoute('glossary') }
        ]
      },
      ko:{
        title:'\ud55c \uc7a5\uc73c\ub85c \ubcf4\ub294 \ud575\uc2ec \uc694\uc57d',
        body:'\uc9e7\uac8c \uc800\uc7a5\ud558\uace0, \ube60\ub974\uac8c \ub2e4\uc2dc \ubcfc \uc218 \uc788\ub294 \ud575\uc2ec \ud3ec\uc778\ud2b8\ub9cc \ubaa8\uc558\uc2b5\ub2c8\ub2e4.',
        cards:[
          { chip:'SAFE', title:'\uc2dc\ub4dc \ubb38\uad6c\ub294 \uc808\ub300 \uacf5\uc720\ud558\uc9c0 \ub9c8\uc138\uc694', body:'\uc2dc\ub4dc \ubb38\uad6c\ub97c \uc694\uad6c\ud558\ub294 \uba54\uc2dc\uc9c0\ub098 \uc0ac\uc774\ud2b8\ub294 \uba3c\uc800 \uc758\uc2ec\ud574\uc57c \ud569\ub2c8\ub2e4', href:getPageRoute('safety') },
          { chip:'SEND', title:'\uc804\uc1a1 \uc804\uc5d0\ub294 \uc8fc\uc18c\uc640 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694', body:'\uc775\uc219\ud55c \uc774\ub984\ub9cc \ubbff\uc9c0 \ub9d0\uace0 \uc2e4\uc81c \uc8fc\uc18c\uc640 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub05d\uae4c\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4', href:getLessonRoute(2) },
          { chip:'START', title:'\ucc98\uc74c\uc5d0\ub294 \uc791\uac8c \uc2dc\uc791\ud558\ub294 \uac83\uc774 \ub354 \uc548\uc804\ud569\ub2c8\ub2e4', body:'\uccab \uad6c\ub9e4\uc640 \uccab \uc804\uc1a1\uc740 \uc791\uc740 \uae08\uc561\uc73c\ub85c \ud750\ub984\uc744 \uc775\ud788\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4', href:getLessonRoute(5) },
          { chip:'BASIC', title:'\ube60\ub978 \uc218\uc775\ubcf4\ub2e4 \uba3c\uc800 \uad6c\uc870\ub97c \uc774\ud574\ud574\uc57c \ud569\ub2c8\ub2e4', body:'\uc6a9\uc5b4, \uc9c0\uac11, \uc804\uc1a1, \ubcf4\uc548 \ud750\ub984\uc744 \uba3c\uc800 \uc774\ud574\ud558\uba74 \uc2e4\uc218\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4', href:getPageRoute('glossary') }
        ]
      },
      th:{
        title:'\u0e2a\u0e23\u0e38\u0e1b\u0e41\u0e01\u0e48\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e14\u0e35\u0e22\u0e27',
        body:'\u0e23\u0e27\u0e1a\u0e23\u0e27\u0e21\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e08\u0e38\u0e14\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e41\u0e1a\u0e1a\u0e2a\u0e31\u0e49\u0e19 \u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e14\u0e39\u0e0b\u0e49\u0e33\u0e41\u0e25\u0e30\u0e41\u0e0a\u0e23\u0e4c\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22',
        cards:[
          { chip:'SAFE', title:'\u0e2d\u0e22\u0e48\u0e32\u0e41\u0e0a\u0e23\u0e4c seed phrase \u0e42\u0e14\u0e22\u0e40\u0e14\u0e47\u0e14\u0e02\u0e32\u0e14', body:'\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e02\u0e2d seed phrase \u0e04\u0e27\u0e23\u0e16\u0e39\u0e01\u0e21\u0e2d\u0e07\u0e27\u0e48\u0e32\u0e19\u0e48\u0e32\u0e2a\u0e07\u0e2a\u0e31\u0e22\u0e01\u0e48\u0e2d\u0e19', href:getPageRoute('safety') },
          { chip:'SEND', title:'\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19\u0e43\u0e2b\u0e49\u0e40\u0e0a\u0e47\u0e01\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07', body:'\u0e2d\u0e22\u0e48\u0e32\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e04\u0e48\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e04\u0e38\u0e49\u0e19\u0e40\u0e04\u0e22 \u0e43\u0e2b\u0e49\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e08\u0e23\u0e34\u0e07\u0e43\u0e2b\u0e49\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14', href:getLessonRoute(2) },
          { chip:'START', title:'\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e08\u0e33\u0e19\u0e27\u0e19\u0e19\u0e49\u0e2d\u0e22\u0e21\u0e31\u0e01\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e01\u0e27\u0e48\u0e32', body:'\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e42\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e04\u0e27\u0e23\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e25\u0e47\u0e01 \u0e46 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19', href:getLessonRoute(5) },
          { chip:'BASIC', title:'\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e34\u0e48\u0e07\u0e15\u0e32\u0e21\u0e01\u0e33\u0e44\u0e23', body:'\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c \u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19 \u0e01\u0e32\u0e23\u0e42\u0e2d\u0e19 \u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22 \u0e0a\u0e48\u0e27\u0e22\u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e35\u0e01\u0e40\u0e25\u0e35\u0e48\u0e22\u0e07\u0e44\u0e14\u0e49', href:getPageRoute('glossary') }
        ]
      },
      id:{
        title:'Ringkasan Inti Sekilas',
        body:'Kartu ringkas yang mudah disimpan, ditinjau ulang, dan dibagikan.',
        cards:[
          { chip:'SAFE', title:'Jangan pernah membagikan seed phrase', body:'Pesan atau situs apa pun yang meminta seed phrase harus dianggap mencurigakan lebih dulu', href:getPageRoute('safety') },
          { chip:'SEND', title:'Periksa lagi alamat dan jaringan sebelum mengirim', body:'Jangan hanya percaya nama yang terasa familiar-periksa alamat dan jaringan yang sebenarnya dengan teliti', href:getLessonRoute(2) },
          { chip:'START', title:'Memulai dari jumlah kecil biasanya lebih aman', body:'Pembelian pertama dan transfer pertama lebih aman jika Anda mempelajari prosesnya dengan jumlah kecil', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Pahami strukturnya sebelum mengejar profit', body:'Memahami istilah, wallet, transfer, dan safety membantu mengurangi kesalahan yang sebenarnya bisa dihindari', href:getPageRoute('glossary') }
        ]
      },
      pt:{
        title:'Ideias-Chave em um Relance',
        body:'Cartoes curtos para salvar, rever e compartilhar com mais facilidade.',
        cards:[
          { chip:'SAFE', title:'Nunca compartilhe sua seed phrase', body:'Qualquer mensagem ou site que peca sua seed phrase deve ser tratado primeiro como suspeito', href:getPageRoute('safety') },
          { chip:'SEND', title:'Revise endereco e rede antes de enviar', body:'Nao confie apenas em nomes familiares-confirme com cuidado o endereco e a rede reais', href:getLessonRoute(2) },
          { chip:'START', title:'Comecar pequeno costuma ser mais seguro', body:'Sua primeira compra e sua primeira transferencia sao mais seguras quando voce aprende o processo com um valor pequeno', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Entenda a estrutura antes de correr atras de lucro', body:'Aprender o basico sobre termos, carteiras, transferencias e seguranca ajuda a reduzir erros evitaveis', href:getPageRoute('glossary') }
        ]
      },
      tr:{
        title:'Bir Bakista Temel Fikirler',
        body:'Kaydetmesi, tekrar bakmasi ve paylasmasi kolay kisa ozet kartlari.',
        cards:[
          { chip:'SAFE', title:'Seed phraseinizi asla paylasmayin', body:'Seed phrase isteyen her mesaj veya site once supheli kabul edilmelidir', href:getPageRoute('safety') },
          { chip:'SEND', title:'Gondermeden once adresi ve agi yeniden kontrol edin', body:'Sadece tanidik isimlere guvenmeyin-gercek adresi ve agi dikkatle dogrulayin', href:getLessonRoute(2) },
          { chip:'START', title:'Kucuk baslamak genelde daha guvenlidir', body:'Ilk alim ve ilk transfer, sureci kucuk bir miktarla ogrendiginde daha guvenli olur', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Karin pesine dusmeden once yapiyi anlayin', body:'Terimler, cuzdanlar, transferler ve guvenlik temellerini ogrenmek onlenebilir hatalari azaltir', href:getPageRoute('glossary') }
        ]
      },
      es:{
        title:'Ideas Clave de un Vistazo',
        body:'Tarjetas breves para guardar, revisar y compartir con mas facilidad.',
        cards:[
          { chip:'SAFE', title:'Nunca compartas tu seed phrase', body:'Cualquier mensaje o sitio que pida tu seed phrase debe tratarse primero como sospechoso', href:getPageRoute('safety') },
          { chip:'SEND', title:'Vuelve a revisar la direccion y la red antes de enviar', body:'No confies solo en nombres familiares-revisa con cuidado la direccion real y la red', href:getLessonRoute(2) },
          { chip:'START', title:'Empezar con poco suele ser mas seguro', body:'Tu primera compra y tu primera transferencia son mas seguras cuando aprendes el proceso con una cantidad pequena', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Entiende la estructura antes de perseguir ganancias', body:'Aprender lo basico sobre terminos, wallets, transferencias y seguridad ayuda a reducir errores evitables', href:getPageRoute('glossary') }
        ]
      },
      ar:{
        title:'\u0623\u0641\u0643\u0627\u0631 \u0623\u0633\u0627\u0633\u064a\u0629 \u0641\u064a \u0644\u0645\u062d\u0629',
        body:'\u0628\u0637\u0627\u0642\u0627\u062a \u062e\u0644\u0627\u0635\u0629 \u0642\u0635\u064a\u0631\u0629 \u064a\u0633\u0647\u0644 \u062d\u0641\u0638\u0647\u0627 \u0648\u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0648\u0645\u0634\u0627\u0631\u0643\u062a\u0647\u0627.',
        cards:[
          { chip:'SAFE', title:'\u0644\u0627 \u062a\u0634\u0627\u0631\u0643 seed phrase \u0623\u0628\u062f\u0627\u064b', body:'\u0623\u064a \u0631\u0633\u0627\u0644\u0629 \u0623\u0648 \u0645\u0648\u0642\u0639 \u064a\u0637\u0644\u0628 seed phrase \u064a\u062c\u0628 \u0627\u0639\u062a\u0628\u0627\u0631\u0647 \u0645\u0634\u0628\u0648\u0647\u0627\u064b \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629', href:getPageRoute('safety') },
          { chip:'SEND', title:'\u0623\u0639\u062f \u0641\u062d\u0635 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0634\u0628\u0643\u0629 \u0642\u0628\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644', body:'\u0644\u0627 \u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0623\u0644\u0648\u0641\u0629 \u0641\u0642\u0637-\u0628\u0644 \u062f\u0642\u0642 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0639\u0644\u064a \u0648\u0627\u0644\u0634\u0628\u0643\u0629 \u0628\u0639\u0646\u0627\u064a\u0629', href:getLessonRoute(2) },
          { chip:'START', title:'\u0627\u0644\u0628\u062f\u0621 \u0628\u0645\u0628\u0644\u063a \u0635\u063a\u064a\u0631 \u064a\u0643\u0648\u0646 \u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627\u064b \u0639\u0627\u062f\u0629\u064b', body:'\u0623\u0648\u0644 \u0634\u0631\u0627\u0621 \u0648\u0623\u0648\u0644 \u062a\u062d\u0648\u064a\u0644 \u064a\u0643\u0648\u0646\u0627\u0646 \u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627\u064b \u0639\u0646\u062f\u0645\u0627 \u062a\u062a\u0639\u0644\u0645 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0628\u0645\u0628\u0644\u063a \u0635\u063a\u064a\u0631', href:getLessonRoute(5) },
          { chip:'BASIC', title:'\u0627\u0641\u0647\u0645 \u0627\u0644\u0628\u0646\u064a\u0629 \u0642\u0628\u0644 \u0627\u0644\u062c\u0631\u064a \u0648\u0631\u0627\u0621 \u0627\u0644\u0631\u0628\u062d', body:'\u062a\u0639\u0644\u0645 \u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u0645\u0635\u0637\u0644\u062d\u0627\u062a \u0648\u0627\u0644\u0645\u062d\u0627\u0641\u0638 \u0648\u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0627\u062a \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u064a\u0633\u0627\u0639\u062f \u0639\u0644\u0649 \u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u062a\u064a \u064a\u0645\u0643\u0646 \u062a\u062c\u0646\u0628\u0647\u0627', href:getPageRoute('glossary') }
        ]
      },
      vi:{
        title:'Tom Tat Y Chinh Trong Mot Nhin',
        body:'Nhung the tom tat ngan de luu lai, xem nhanh, va chia se de hon.',
        cards:[
          { chip:'SAFE', title:'Khong bao gio chia se seed phrase', body:'Bat ky tin nhan hay trang web nao yeu cau seed phrase deu nen duoc xem la dang nghi truoc', href:getPageRoute('safety') },
          { chip:'SEND', title:'Kiem tra lai dia chi va mang truoc khi gui', body:'Dung chi tin vao nhung ten quen thuoc-hay kiem tra can than dia chi va mang thuc te', href:getLessonRoute(2) },
          { chip:'START', title:'Bat dau nho thuong an toan hon', body:'Lan mua dau tien va lan chuyen dau tien an toan hon khi ban hoc quy trinh voi mot so tien nho', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Hieu cau truc truoc khi chay theo loi nhuan', body:'Hieu cac thuat ngu, vi, chuyen tien, va an toan giup giam nhung sai sot co the tranh duoc', href:getPageRoute('glossary') }
        ]
      },
      ha:{
        title:'Muhimman Ra\u0027ayoyi a Kallo Daya',
        body:'Takaitattun katuna da za ka iya adanawa, dubawa da sauri, da rabawa cikin sauki.',
        cards:[
          { chip:'SAFE', title:'Kada ka taba raba seed phrase dinka', body:'Duk wani sako ko shafi da ke neman seed phrase ya kamata a fara daukarsa a matsayin abin zargi', href:getPageRoute('safety') },
          { chip:'SEND', title:'Ka sake duba adireshi da network kafin ka tura', body:'Kada ka dogara da sunaye da suka saba kadai-ka duba ainihin adireshi da network da kyau', href:getLessonRoute(2) },
          { chip:'START', title:'Fara da kadan yawanci ya fi aminci', body:'Sayen ka na farko da turawar ka ta farko sun fi aminci idan ka fara koyon tsari da kudi kadan', href:getLessonRoute(5) },
          { chip:'BASIC', title:'Ka fahimci tsarin kafin ka bi ribar gaggawa', body:'Koyon kalmomi, walat, tura kudi, da tsaro yana taimakawa rage kurakuran da za a iya kauce wa', href:getPageRoute('glossary') }
        ]
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function buildHomeShareSummaryHtml(){
    var pack = getSummaryPack();
    var cards = Array.isArray(pack.cards) ? pack.cards : [];
    return ''
      + '<section class="home-share-summary-block">'
      +   '<div class="home-share-summary-title">' + (pack.title || 'Key Ideas at a Glance') + '</div>'
      +   '<div class="home-share-summary-body">' + (pack.body || 'Short summary cards you can save, revisit, and share more easily.') + '</div>'
      +   '<div class="home-share-summary-grid">' + cards.map(function(card, index){
            return ''
              + '<a class="home-share-summary-card" data-share-card-key="summary-' + index + '" href="' + (card.href || '#') + '">'
              +   '<span class="home-share-summary-chip">' + (card.chip || 'TIP') + '</span>'
              +   '<div class="home-share-summary-card-title">' + (card.title || '') + '</div>'
              +   '<div class="home-share-summary-card-body">' + (card.body || '') + '</div>'
              + '</a>';
          }).join('') + '</div>'
      + '</section>';
  }

  function ensureHomeShareSummaryBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-share-summary-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var anchor = finder.querySelector('.home-free-ebook-flow-block') || finder.querySelector('.home-available-premium-guides');
    var block = finder.querySelector('.home-share-summary-block');
    if(!block){
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildHomeShareSummaryHtml());
      } else {
        finder.insertAdjacentHTML('beforeend', buildHomeShareSummaryHtml());
      }
      block = finder.querySelector('.home-share-summary-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeShareSummaryHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncHomeShareSummaryBlock(){
    ensureHomeShareSummaryBlock();
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
    if(typeof original !== 'function' || original.__homeShareSummaryWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeShareSummaryBlock();
      return result;
    };
    wrapped.__homeShareSummaryWrapped = true;
    wrapped.__homeShareSummaryOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  syncHomeShareSummaryBlock();
})();
