(function(){
  if(typeof window === 'undefined' || window.__freePdfLeadMagnetSafe20260501) return;
  window.__freePdfLeadMagnetSafe20260501 = true;

  var FREE_PDF_FILES = {
    en:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-en.pdf',
    ko:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ko.pdf',
    th:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-th.pdf',
    id:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-id.pdf',
    pt:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-pt.pdf',
    br:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-br.pdf',
    tr:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-tr.pdf',
    es:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-es.pdf',
    ar:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ar.pdf',
    vi:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-vi.pdf',
    ha:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ha.pdf'
  };

  function leadLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getFreePdfHref(){
    var lang = leadLang();
    if(FREE_PDF_FILES[currentLang]) return FREE_PDF_FILES[currentLang];
    if(FREE_PDF_FILES[lang]) return FREE_PDF_FILES[lang];
    if(FREE_PDF_FILES.en) return FREE_PDF_FILES.en;
    return FREE_PDF_FILES.ko || './pdf/crypto-safety-guide-ko.pdf';
  }

  function getHomeEbookHref(){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      return window.__CA_GET_PAGE_ROUTE('home') + '#home-crypto-ebook-section';
    }
    return (window.__CA_BASE_PREFIX__ || './') + 'index.html#home-crypto-ebook-section';
  }

  function getPack(){
    var lang = leadLang();
    var packs = {
      en:{
        title:'Free PDFs Worth Saving',
        body:'These free PDFs are especially useful when you come back to review them before a real transfer, purchase, or safety check.',
        points:[
          'Quickly review the key checks before sending',
          'Revisit the essential flow before your first buy',
          'Recheck scam warning signs in a shorter format',
          'Save the site\'s core ideas as a simpler reference'
        ],
        compare:'The free PDFs work more like quick review checklists, while the eBooks are better for deeper and more structured review.',
        ctaFree:'Open Free PDF',
        ctaEbook:'Explore the eBook',
        sourceNote:'Useful as short review material before a real transfer, purchase, or safety check.',
        sourceCompare:'The free PDFs are for fast practical review, while the eBooks help with deeper and more structured follow-up.'
      },
      ko:{
        title:'\uc800\uc7a5\ud574\ub450\uba74 \uc88b\uc740 \ubb34\ub8cc PDF',
        body:'\ucc98\uc74c \uc77d\uc744 \ub54c\ubcf4\ub2e4, \uc2e4\uc81c\ub85c \uc804\uc1a1\ud558\uac70\ub098 \uad6c\ub9e4\ud558\uae30 \uc804\uc5d0 \ub2e4\uc2dc \ubcf4\ub294 \uc6a9\ub3c4\ub85c \ub354 \uc720\uc6a9\ud55c \ubb34\ub8cc PDF\uc785\ub2c8\ub2e4.',
        points:[
          '\uc804\uc1a1 \uc804\uc5d0 \ube60\ub974\uac8c \ub2e4\uc2dc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uccab \uad6c\ub9e4 \uc804\uc5d0 \ud575\uc2ec \ud750\ub984\ub9cc \ub2e4\uc2dc \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uc0ac\uae30 \uc704\ud5d8 \uc2e0\ud638\ub97c \uc9e7\uac8c \ub2e4\uc2dc \uccb4\ud06c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uc0ac\uc774\ud2b8 \ub0b4\uc6a9\uc744 \ud55c \uc7a5 \uc694\uc57d\ucc98\ub7fc \uc800\uc7a5\ud574\ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4'
        ],
        compare:'\ubb34\ub8cc PDF\ub294 \ube60\ub974\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc5d0 \uac00\uae5d\uace0, \uc804\uc790\ucc45\uc740 \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \uae4a\uc774 \ubcf5\uc2b5\ud558\ub294 \ub370 \uac00\uae5d\uc2b5\ub2c8\ub2e4.',
        ctaFree:'\ubb34\ub8cc PDF \uc5f4\uae30',
        ctaEbook:'\uc804\uc790\ucc45 \uc0b4\ud3b4\ubcf4\uae30',
        sourceNote:'\uc2e4\uc81c \uc804\uc1a1, \uad6c\ub9e4, \ubcf4\uc548 \ud655\uc778 \uc804\uc5d0 \uc9e7\uac8c \ub2e4\uc2dc \ubcf4\uae30 \uc88b\uc740 \ubb34\ub8cc \uc815\ub9ac \uc790\ub8cc\uc785\ub2c8\ub2e4.',
        sourceCompare:'\ubb34\ub8cc PDF\ub294 \ube60\ub978 \uc2e4\uc804 \uccb4\ud06c\uc5d0 \uac00\uae5d\uace0, \uc804\uc790\ucc45\uc740 \ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \uae4a\uc774 \ubcf5\uc2b5\ud558\ub294 \ub370 \uc801\ud569\ud569\ub2c8\ub2e4.'
      },
      th:{
        title:'PDF \u0e1f\u0e23\u0e35\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49',
        body:'PDF \u0e1f\u0e23\u0e35\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e21\u0e32\u0e01\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e14\u0e39\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19 \u0e0b\u0e37\u0e49\u0e2d \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e0a\u0e47\u0e01\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e08\u0e23\u0e34\u0e07',
        points:[
          '\u0e40\u0e1b\u0e34\u0e14\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e40\u0e0a\u0e47\u0e01\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27',
          '\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e01\u0e48\u0e2d\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e44\u0e14\u0e49',
          '\u0e40\u0e0a\u0e47\u0e01\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e41\u0e01\u0e21\u0e41\u0e1a\u0e1a\u0e2a\u0e31\u0e49\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07',
          '\u0e40\u0e01\u0e47\u0e1a\u0e41\u0e01\u0e48\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e44\u0e27\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e23\u0e38\u0e1b\u0e2a\u0e31\u0e49\u0e19'
        ],
        compare:'PDF \u0e1f\u0e23\u0e35\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27 \u0e2a\u0e48\u0e27\u0e19 eBook \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32',
        ctaFree:'\u0e40\u0e1b\u0e34\u0e14 PDF \u0e1f\u0e23\u0e35',
        ctaEbook:'\u0e14\u0e39 eBook',
        sourceNote:'\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e1b\u0e34\u0e14\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19 \u0e0b\u0e37\u0e49\u0e2d \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e0a\u0e47\u0e01\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e08\u0e23\u0e34\u0e07',
        sourceCompare:'PDF \u0e1f\u0e23\u0e35\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e47\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e40\u0e23\u0e47\u0e27 \u0e2a\u0e48\u0e27\u0e19 eBook \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e1a\u0e01\u0e27\u0e48\u0e32'
      },
      id:{
        title:'PDF Gratis yang Layak Disimpan',
        body:'PDF gratis ini sangat berguna saat Anda membukanya lagi sebelum transfer, pembelian, atau pengecekan keamanan yang nyata.',
        points:[
          'Tinjau cepat pengecekan penting sebelum mengirim',
          'Ulangi alur inti sebelum pembelian pertama',
          'Cek lagi tanda peringatan scam dalam format yang lebih singkat',
          'Simpan inti isi situs sebagai referensi yang lebih sederhana'
        ],
        compare:'PDF gratis lebih cocok sebagai checklist tinjauan cepat, sedangkan eBook lebih cocok untuk tinjauan yang lebih dalam dan terstruktur.',
        ctaFree:'Buka PDF Gratis',
        ctaEbook:'Lihat eBook',
        sourceNote:'Cocok sebagai bahan tinjauan singkat sebelum transfer, pembelian, atau pengecekan keamanan nyata.',
        sourceCompare:'PDF gratis cocok untuk tinjauan praktis yang cepat, sedangkan eBook membantu tindak lanjut yang lebih dalam dan terstruktur.'
      },
      pt:{
        title:'PDFs Gratuitos que Valem Guardar',
        body:'Esses PDFs gratuitos sao especialmente uteis quando voce volta a revisa-los antes de uma transferencia, compra ou verificacao de seguranca real.',
        points:[
          'Reveja rapidamente os checks principais antes de enviar',
          'Retome o fluxo essencial antes da primeira compra',
          'Revise sinais de golpe em um formato mais curto',
          'Guarde as ideias centrais do site como referencia simples'
        ],
        compare:'Os PDFs gratuitos funcionam mais como checklists de revisao rapida, enquanto os eBooks servem melhor para uma revisao mais profunda e organizada.',
        ctaFree:'Abrir PDF Gratuito',
        ctaEbook:'Ver eBook',
        sourceNote:'Uteis como material curto de revisao antes de uma transferencia, compra ou verificacao de seguranca real.',
        sourceCompare:'Os PDFs gratuitos ajudam na revisao pratica e rapida, enquanto os eBooks ajudam em uma revisao mais profunda e estruturada.'
      },
      tr:{
        title:'Kaydetmeye Deger Ucretsiz PDFler',
        body:'Bu ucretsiz PDFler, gercek bir transfer, alim veya guvenlik kontrolu oncesinde tekrar acip bakmak icin ozellikle faydalidir.',
        points:[
          'Gondermeden once temel kontrolleri hizlica gozden gecirin',
          'Ilk alimdan once temel akisi yeniden inceleyin',
          'Dolandiricilik uyari isaretlerini daha kisa bir formatta tekrar kontrol edin',
          'Sitenin temel fikirlerini daha sade bir referans olarak kaydedin'
        ],
        compare:'Ucretsiz PDFler daha cok hizli tekrar checklistleri gibidir; eBookler ise daha derin ve duzenli tekrar icin daha uygundur.',
        ctaFree:'Ucretsiz PDF Ac',
        ctaEbook:'eBooku Incele',
        sourceNote:'Gercek bir transfer, alim veya guvenlik kontrolunden once kisa tekrar materyali olarak faydalidir.',
        sourceCompare:'Ucretsiz PDFler hizli pratik tekrar icindir; eBookler ise daha derin ve duzenli takip icin daha uygundur.'
      },
      es:{
        title:'PDF Gratis que Vale la Pena Guardar',
        body:'Estos PDF gratis son especialmente utiles cuando vuelves a revisarlos antes de una transferencia, compra o comprobacion de seguridad real.',
        points:[
          'Revisa rapido los puntos clave antes de enviar',
          'Repasa el flujo esencial antes de la primera compra',
          'Vuelve a comprobar las senales de estafa en un formato mas corto',
          'Guarda las ideas centrales del sitio como referencia mas simple'
        ],
        compare:'Los PDF gratis funcionan mas como checklists de repaso rapido, mientras que los eBooks son mejores para un repaso mas profundo y ordenado.',
        ctaFree:'Abrir PDF Gratis',
        ctaEbook:'Ver eBook',
        sourceNote:'Utiles como material corto de repaso antes de una transferencia, compra o verificacion de seguridad real.',
        sourceCompare:'Los PDF gratis sirven para un repaso practico y rapido, mientras que los eBooks ayudan a una revision mas profunda y estructurada.'
      },
      ar:{
        title:'\u0645\u0644\u0641\u0627\u062a PDF \u0645\u062c\u0627\u0646\u064a\u0629 \u062a\u0633\u062a\u062d\u0642 \u0627\u0644\u062d\u0641\u0638',
        body:'\u0647\u0630\u0647 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u062a\u0643\u0648\u0646 \u0627\u0643\u062b\u0631 \u0641\u0627\u0626\u062f\u0629 \u0639\u0646\u062f\u0645\u0627 \u062a\u0639\u0648\u062f \u0644\u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0642\u0628\u0644 \u062a\u062d\u0648\u064a\u0644 \u062d\u0642\u064a\u0642\u064a \u0627\u0648 \u0634\u0631\u0627\u0621 \u0627\u0648 \u0641\u062d\u0635 \u0627\u0645\u0627\u0646 \u0641\u0639\u0644\u064a.',
        points:[
          '\u0631\u0627\u062c\u0639 \u0627\u0644\u0641\u062d\u0648\u0635\u0627\u062a \u0627\u0644\u0627\u0633\u0627\u0633\u064a\u0629 \u0628\u0633\u0631\u0639\u0629 \u0642\u0628\u0644 \u0627\u0644\u0627\u0631\u0633\u0627\u0644',
          '\u0627\u0631\u062c\u0639 \u0627\u0644\u0649 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 \u0642\u0628\u0644 \u0627\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0634\u0631\u0627\u0621',
          '\u062a\u062d\u0642\u0642 \u0645\u0631\u0629 \u0627\u062e\u0631\u0649 \u0645\u0646 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0644 \u0628\u0635\u064a\u063a\u0629 \u0627\u0642\u0635\u0631',
          '\u0627\u062d\u0641\u0638 \u0627\u0641\u0643\u0627\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0633\u0627\u0633\u064a\u0629 \u0643\u0645\u0631\u062c\u0639 \u0627\u0628\u0633\u0637'
        ],
        compare:'\u062a\u0639\u0645\u0644 \u0645\u0644\u0641\u0627\u062a PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u0627\u0643\u062b\u0631 \u0643\u0642\u0648\u0627\u0626\u0645 \u0645\u0631\u0627\u062c\u0639\u0629 \u0633\u0631\u064a\u0639\u0629\u060c \u0628\u064a\u0646\u0645\u0627 \u062a\u0646\u0627\u0633\u0628 \u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0627\u0639\u0645\u0642 \u0648\u0627\u0644\u0627\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627.',
        ctaFree:'\u0627\u0641\u062a\u062d PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a',
        ctaEbook:'\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
        sourceNote:'\u0645\u0641\u064a\u062f\u0629 \u0643\u0645\u0627\u062f\u0629 \u0645\u0631\u0627\u062c\u0639\u0629 \u0642\u0635\u064a\u0631\u0629 \u0642\u0628\u0644 \u062a\u062d\u0648\u064a\u0644 \u062d\u0642\u064a\u0642\u064a \u0627\u0648 \u0634\u0631\u0627\u0621 \u0627\u0648 \u0641\u062d\u0635 \u0627\u0645\u0627\u0646 \u0641\u0639\u0644\u064a.',
        sourceCompare:'\u0645\u0644\u0641\u0627\u062a PDF \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629\u060c \u0628\u064a\u0646\u0645\u0627 \u062a\u0633\u0627\u0639\u062f \u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0639\u0644\u0649 \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0639\u0645\u0642 \u0648\u0627\u0643\u062b\u0631 \u062a\u0646\u0638\u064a\u0645\u0627.'
      },
      vi:{
        title:'PDF Mien Phi Dang de Luu Lai',
        body:'Nhung PDF mien phi nay dac biet huu ich khi ban mo lai de xem truoc mot lan chuyen tien, mua, hoac kiem tra an toan thuc te.',
        points:[
          'Xem nhanh lai cac buoc can kiem tra truoc khi gui',
          'On lai luong chinh truoc lan mua dau tien',
          'Kiem tra lai dau hieu lua dao trong mot dinh dang ngan hon',
          'Luu cac y chinh cua trang nhu mot tai lieu tham khao gon hon'
        ],
        compare:'Cac PDF mien phi giong checklist on nhanh hon, trong khi eBook phu hop hon cho viec on sau va co cau truc ro rang.',
        ctaFree:'Mo PDF Mien Phi',
        ctaEbook:'Xem eBook',
        sourceNote:'Huu ich nhu tai lieu on ngan truoc mot lan chuyen tien, mua, hoac kiem tra an toan thuc te.',
        sourceCompare:'PDF mien phi hop voi viec on thuc hanh nhanh, trong khi eBook ho tro viec on tap sau hon va co to chuc hon.'
      },
      ha:{
        title:'PDF na Kyauta da Ya Kamata a Ajiye',
        body:'Wadannan PDF na kyauta suna da amfani sosai idan ka dawo ka sake dubawa kafin tura kudi, saye, ko duba tsaro na ainihi.',
        points:[
          'Ka sake duba muhimman abubuwa cikin sauri kafin ka tura',
          'Ka maimaita muhimmin tsari kafin sayenka na farko',
          'Ka sake duba alamun damfara a gajeren tsari',
          'Ka adana muhimman darussan shafin a matsayin madogara mai sauki'
        ],
        compare:'PDF na kyauta sun fi kama da checklist na saurin dubawa, yayin da eBooks suka fi dacewa da zurfin bita mai tsari.',
        ctaFree:'Bude PDF na Kyauta',
        ctaEbook:'Duba eBook',
        sourceNote:'Ya dace a matsayin gajeren abin dubawa kafin tura kudi, saye, ko duba tsaro na ainihi.',
        sourceCompare:'PDF na kyauta sun dace da saurin duba aiki, yayin da eBooks suke taimakawa wajen zurfin bita mai tsari.'
      }
    };
    packs.en.body = 'Best used as quick review sheets before a transfer, first buy, or safety check.';
    packs.en.compare = 'Free PDFs are for quick checks. The eBooks are for deeper review.';
    packs.en.sourceNote = 'Short review material for real transfers, purchases, and safety checks.';
    packs.en.sourceCompare = 'Use PDFs for quick checks and eBooks for deeper review.';
    packs.ko.body = '\uc804\uc1a1, \uccab \uad6c\ub9e4, \ubcf4\uc548 \ud655\uc778 \uc804\uc5d0 \uc9e7\uac8c \ub2e4\uc2dc \ubcf4\uae30 \uc88b\uc740 \ubb34\ub8cc PDF\uc785\ub2c8\ub2e4.';
    packs.ko.compare = '\ubb34\ub8cc PDF\ub294 \ube60\ub978 \uccb4\ud06c\uc6a9, \uc804\uc790\ucc45\uc740 \ub354 \uc815\ub9ac\ub41c \uae4a\uc740 \ubcf5\uc2b5\uc6a9\uc785\ub2c8\ub2e4.';
    packs.ko.sourceNote = '\uc2e4\uc81c \uc804\uc1a1\uacfc \uad6c\ub9e4 \uc804\uc5d0 \uc9e7\uac8c \ub2e4\uc2dc \ubcf4\uae30 \uc88b\uc740 \ubb34\ub8cc \uc790\ub8cc\uc785\ub2c8\ub2e4.';
    packs.ko.sourceCompare = '\ubb34\ub8cc PDF\ub294 \ube60\ub978 \uccb4\ud06c\uc6a9, \uc804\uc790\ucc45\uc740 \ub354 \uae4a\uc740 \ubcf5\uc2b5\uc6a9\uc785\ub2c8\ub2e4.';
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function buildHomeFreePdfValueHtml(){
    var pack = getPack();
    return ''
      + '<section class="home-free-pdf-value-block">'
      +   '<div class="home-free-pdf-value-title">' + pack.title + '</div>'
      +   '<div class="home-free-pdf-value-body">' + pack.body + '</div>'
      +   '<ul class="home-free-pdf-value-list">' + (pack.points || []).slice(0, 3).map(function(point){
            return '<li>' + point + '</li>';
          }).join('') + '</ul>'
      +   '<div class="home-free-pdf-value-compare">' + pack.compare + '</div>'
      +   '<div class="home-free-pdf-value-actions">'
      +     '<a class="home-premium-pdf-btn is-free" data-home-track="home.pdf.value.free" data-home-track-label="Free PDF value CTA" href="' + getFreePdfHref() + '" target="_blank" rel="noopener noreferrer">' + pack.ctaFree + '</a>'
      +     '<a class="home-premium-pdf-btn" data-home-track="home.pdf.value.ebook" data-home-track-label="Free PDF to eBook CTA" href="' + getHomeEbookHref() + '">' + pack.ctaEbook + '</a>'
      +   '</div>'
      + '</section>';
  }

  function buildSourceFreePdfValueHtml(){
    var pack = getPack();
    return ''
      + '<div class="src-freepdf-flow-block">'
      +   '<p class="src-section-note">' + pack.sourceNote + '</p>'
      +   '<div class="src-freepdf-flow-compare">' + pack.sourceCompare + '</div>'
      + '</div>';
  }

  function ensureHomeFreePdfValueBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-free-pdf-value-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var anchor = finder.querySelector('.home-pdf-block');
    if(!anchor) return;
    var block = finder.querySelector('.home-free-pdf-value-block');
    if(!block){
      anchor.insertAdjacentHTML('afterend', buildHomeFreePdfValueHtml());
      block = finder.querySelector('.home-free-pdf-value-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeFreePdfValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureSourceFreePdfValueBlock(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var section = panel.querySelector('.src-section-block[data-source-group="freepdf"], .src-section-block[data-source-section="freePdf"]');
    if(!section) return;
    panel.querySelectorAll('.src-freepdf-flow-block').forEach(function(node){
      if(node.parentNode !== section) node.remove();
    });
    var desc = section.querySelector('.src-group-desc');
    var block = section.querySelector('.src-freepdf-flow-block');
    if(!block){
      if(desc){
        desc.insertAdjacentHTML('afterend', buildSourceFreePdfValueHtml());
      } else {
        section.insertAdjacentHTML('afterbegin', buildSourceFreePdfValueHtml());
      }
      block = section.querySelector('.src-freepdf-flow-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildSourceFreePdfValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncFreePdfLeadMagnet(){
    ensureHomeFreePdfValueBlock();
    ensureSourceFreePdfValueBlock();
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
    if(typeof original !== 'function' || original.__freePdfLeadWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncFreePdfLeadMagnet();
      return result;
    };
    wrapped.__freePdfLeadWrapped = true;
    wrapped.__freePdfLeadOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderSources');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncFreePdfLeadMagnet);
  }

  syncFreePdfLeadMagnet();
})();
