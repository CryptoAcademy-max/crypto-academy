(function(){
  function normalizeLang(raw){
    var value = String(raw || '').toLowerCase().trim();
    if(!value) return 'en';
    if(value === 'br' || value.indexOf('pt-br') === 0) return 'br';
    if(value.indexOf('pt') === 0) return 'pt';
    if(value.indexOf('ko') === 0) return 'ko';
    if(value.indexOf('th') === 0) return 'th';
    if(value.indexOf('id') === 0) return 'id';
    if(value.indexOf('tr') === 0) return 'tr';
    if(value.indexOf('es') === 0) return 'es';
    if(value.indexOf('ar') === 0) return 'ar';
    if(value.indexOf('vi') === 0) return 'vi';
    if(value.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function contentLang(lang){
    return lang === 'br' ? 'pt' : lang;
  }

  function getPreferredLang(){
    try{
      var params = new URLSearchParams(window.location.search || '');
      var queryLang = params.get('lang');
      if(queryLang) return queryLang;
    }catch(err){}
    try{
      var stored = localStorage.getItem('cryptoAcademyLang');
      if(stored) return stored;
    }catch(err){}
    return navigator.language || document.documentElement.lang || 'en';
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pack(eyebrow, beforeSend, seedPhrase, fakeWebsite){
    return {
      eyebrow: eyebrow,
      'before-send': beforeSend,
      'seed-phrase': seedPhrase,
      'fake-website': fakeWebsite
    };
  }

  var EN_PACK = pack(
    'Crypto Academy Checklist',
    {
      title: 'Before You Send Checklist',
      subtitle: 'Check these 4 things before you send.',
      points: [
        'Recheck the wallet address',
        'Recheck the network',
        'Send a small test amount first if possible',
        'Verify the final pasted address carefully'
      ],
      bottomLine: 'A correct transfer matters more than a fast transfer.',
      saveLine: 'Save this card and review it before sending.',
      compact: ['Address', 'Network', 'Test first', 'Final check']
    },
    {
      title: 'Seed Phrase Safety Check',
      subtitle: 'Your seed phrase matters more than the wallet app itself.',
      points: [
        'Never share it with anyone',
        'Never send it through DMs or chat',
        'Be suspicious if a site asks for it',
        'Store it safely offline'
      ],
      bottomLine: 'Giving away your seed phrase is like giving away your wallet.',
      saveLine: 'Save this. It is one of the most important safety rules.',
      compact: ['Never share', 'No DM', 'Question requests', 'Store offline']
    },
    {
      title: 'Quick Fake Website Check',
      subtitle: 'Check the address bar before you log in.',
      points: [
        'Recheck the domain',
        'Use bookmarked official links first',
        'Do not click ad links or DM links immediately',
        'Check the address bar again before logging in'
      ],
      bottomLine: 'The correct domain matters more than a familiar design.',
      saveLine: 'Save this so you can review it when a site feels suspicious.',
      compact: ['Check domain', 'Official links', 'Avoid ad or DM links', 'Check again']
    }
  );

  var KO_PACK = pack(
    '\ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
    {
      title: '\uc804\uc1a1 \uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
      subtitle: '\ubcf4\ub0b4\uae30 \uc804\uc5d0 \uc774 4\uac00\uc9c0\ub9cc \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694.',
      points: [
        '\uc8fc\uc18c\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694',
        '\ub124\ud2b8\uc6cc\ud06c\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694',
        '\uac00\ub2a5\ud558\uba74 \uc18c\uc561 \ud14c\uc2a4\ud2b8\ub97c \uba3c\uc800 \ud558\uc138\uc694',
        '\ubd99\uc5ec\ub123\uc740 \ub4a4 \ucd5c\uc885 \uc8fc\uc18c\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694'
      ],
      bottomLine: '\ube60\ub978 \uc804\uc1a1\ubcf4\ub2e4 \uc815\ud655\ud55c \uc804\uc1a1\uc774 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4.',
      saveLine: '\uc804\uc1a1 \uc804\uc5d0 \ub2e4\uc2dc \ubcfc \uc218 \uc788\uac8c \uc800\uc7a5\ud574\ub450\uc138\uc694.',
      compact: ['\uc8fc\uc18c', '\ub124\ud2b8\uc6cc\ud06c', '\uc18c\uc561 \ud14c\uc2a4\ud2b8', '\ucd5c\uc885 \ud655\uc778']
    },
    {
      title: '\uc2dc\ub4dc \ubb38\uad6c \ubcf4\uc548 \uccb4\ud06c',
      subtitle: '\uc2dc\ub4dc \ubb38\uad6c\ub294 \uc9c0\uac11\ubcf4\ub2e4 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4.',
      points: [
        '\uc808\ub300 \uacf5\uc720\ud558\uc9c0 \ub9c8\uc138\uc694',
        'DM\uc774\ub098 \ucc44\ud305\uc73c\ub85c \ubcf4\ub0b4\uc9c0 \ub9c8\uc138\uc694',
        '\uc785\ub825\uc744 \uc694\uad6c\ud558\ub294 \uc0ac\uc774\ud2b8\ub294 \uba3c\uc800 \uc758\uc2ec\ud558\uc138\uc694',
        '\uc624\ud504\ub77c\uc778\uc73c\ub85c \uc548\uc804\ud558\uac8c \ubcf4\uad00\ud558\uc138\uc694'
      ],
      bottomLine: '\uc2dc\ub4dc \ubb38\uad6c\ub97c \ub118\uae30\uba74 \uc9c0\uac11\uc744 \ub118\uae30\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4.',
      saveLine: '\uac00\uc7a5 \uc911\uc694\ud55c \ubcf4\uc548 \uc6d0\uce59\uc774\ub77c \uc800\uc7a5\ud574\ub458 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4.',
      compact: ['\uacf5\uc720 \uae08\uc9c0', 'DM \uae08\uc9c0', '\uc785\ub825 \uc694\uad6c \uc758\uc2ec', '\uc624\ud504\ub77c\uc778 \ubcf4\uad00']
    },
    {
      title: '\uac00\uc9dc \uc0ac\uc774\ud2b8 \ube60\ub978 \ud655\uc778',
      subtitle: '\ub85c\uadf8\uc778\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 \uc8fc\uc18c\ucc3d\uc744 \ubcf4\uc138\uc694.',
      points: [
        '\ub3c4\uba54\uc778\uc744 \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694',
        '\ubd81\ub9c8\ud06c\ud55c \uacf5\uc2dd \ub9c1\ud06c\ub97c \uba3c\uc800 \uc0ac\uc6a9\ud558\uc138\uc694',
        '\uad11\uace0 \ub9c1\ud06c\ub098 DM \ub9c1\ud06c\ub294 \ubc14\ub85c \ub204\ub974\uc9c0 \ub9c8\uc138\uc694',
        '\ub85c\uadf8\uc778 \uc804\uc5d0 \uc8fc\uc18c\ucc3d\uc744 \ud55c \ubc88 \ub354 \ubcf4\uc138\uc694'
      ],
      bottomLine: '\uc775\uc219\ud55c \ub514\uc790\uc778\ubcf4\ub2e4 \uc815\ud655\ud55c \ub3c4\uba54\uc778\uc774 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4.',
      saveLine: '\uac00\uc9dc \uc0ac\uc774\ud2b8\uac00 \uac71\uc815\ub420 \ub54c \ub2e4\uc2dc \ubcfc \uc218 \uc788\uac8c \uc800\uc7a5\ud574\ub450\uc138\uc694.',
      compact: ['\ub3c4\uba54\uc778 \ud655\uc778', '\uacf5\uc2dd \ub9c1\ud06c \uc6b0\uc120', '\uad11\uace0 \ub610\ub294 DM \uc8fc\uc758', '\ub85c\uadf8\uc778 \uc804 \uc7ac\ud655\uc778']
    }
  );

  var PACKS = {
    en: EN_PACK,
    ko: KO_PACK,
    th: EN_PACK,
    id: pack(
      'Checklist Crypto Academy',
      {
        title: 'Checklist Sebelum Mengirim',
        subtitle: 'Periksa 4 hal ini sebelum Anda mengirim.',
        points: [
          'Periksa ulang alamat wallet',
          'Periksa ulang jaringannya',
          'Jika bisa, kirim tes kecil lebih dulu',
          'Periksa lagi alamat akhir setelah ditempel'
        ],
        bottomLine: 'Transfer yang benar lebih penting daripada transfer yang cepat.',
        saveLine: 'Simpan kartu ini dan lihat lagi sebelum mengirim.',
        compact: ['Alamat', 'Jaringan', 'Tes kecil', 'Cek akhir']
      },
      {
        title: 'Cek Keamanan Seed Phrase',
        subtitle: 'Seed phrase lebih penting daripada aplikasi wallet itu sendiri.',
        points: [
          'Jangan pernah membagikannya',
          'Jangan kirim lewat DM atau chat',
          'Curigai situs yang memintanya',
          'Simpan dengan aman secara offline'
        ],
        bottomLine: 'Memberikan seed phrase sama seperti menyerahkan wallet Anda.',
        saveLine: 'Simpan ini. Ini salah satu aturan keamanan paling penting.',
        compact: ['Jangan bagikan', 'Jangan DM', 'Curigai permintaan', 'Simpan offline']
      },
      {
        title: 'Cek Cepat Situs Palsu',
        subtitle: 'Lihat address bar sebelum Anda login.',
        points: [
          'Periksa ulang domainnya',
          'Utamakan link resmi yang sudah dibookmark',
          'Jangan langsung klik link iklan atau DM',
          'Lihat lagi address bar sebelum login'
        ],
        bottomLine: 'Domain yang benar lebih penting daripada desain yang terlihat familiar.',
        saveLine: 'Simpan ini agar bisa Anda tinjau lagi saat sebuah situs terasa mencurigakan.',
        compact: ['Cek domain', 'Link resmi dulu', 'Hati-hati iklan atau DM', 'Cek lagi']
      }
    ),
    pt: pack(
      'Checklist da Crypto Academy',
      {
        title: 'Checklist Antes de Enviar',
        subtitle: 'Confira estas 4 coisas antes de enviar.',
        points: [
          'Revise o endereco da carteira',
          'Revise a rede',
          'Se puder, faca antes um pequeno teste',
          'Confirme com cuidado o endereco final depois de colar'
        ],
        bottomLine: 'Uma transferencia correta importa mais do que uma transferencia rapida.',
        saveLine: 'Salve este cartao e reveja antes de enviar.',
        compact: ['Endereco', 'Rede', 'Teste pequeno', 'Verificacao final']
      },
      {
        title: 'Checklist de Seguranca da Seed Phrase',
        subtitle: 'Sua seed phrase e mais importante do que o proprio aplicativo da carteira.',
        points: [
          'Nunca compartilhe com ninguem',
          'Nunca envie por DM ou chat',
          'Desconfie se um site pedir isso',
          'Guarde com seguranca offline'
        ],
        bottomLine: 'Entregar sua seed phrase e como entregar sua carteira.',
        saveLine: 'Salve isto. E uma das regras de seguranca mais importantes.',
        compact: ['Nao compartilhe', 'Sem DM', 'Desconfie do pedido', 'Guarde offline']
      },
      {
        title: 'Cheque Rapido de Site Falso',
        subtitle: 'Olhe a barra de endereco antes de fazer login.',
        points: [
          'Confira novamente o dominio',
          'Use primeiro links oficiais salvos nos favoritos',
          'Nao clique de imediato em links de anuncio ou DM',
          'Olhe a barra de endereco mais uma vez antes de entrar'
        ],
        bottomLine: 'O dominio correto importa mais do que um design familiar.',
        saveLine: 'Salve isto para revisar quando um site parecer suspeito.',
        compact: ['Confira dominio', 'Use links oficiais', 'Evite anuncio ou DM', 'Confira de novo']
      }
    ),
    tr: pack(
      'Crypto Academy Kontrol Listesi',
      {
        title: 'Gondermeden Once Kontrol Listesi',
        subtitle: 'Gondermeden once bu 4 seyi tekrar kontrol edin.',
        points: [
          'Cuzdan adresini tekrar kontrol edin',
          'Agi tekrar kontrol edin',
          'Mumkunse once kucuk bir test gonderin',
          'Yapistirdiktan sonra son adresi dikkatle dogrulayin'
        ],
        bottomLine: 'Dogru bir transfer, hizli bir transferden daha onemlidir.',
        saveLine: 'Bu karti kaydedin ve gondermeden once tekrar bakin.',
        compact: ['Adres', 'Ag', 'Kucuk test', 'Son kontrol']
      },
      {
        title: 'Seed Phrase Guvenlik Kontrolu',
        subtitle: 'Seed phrase, cuzdan uygulamasinin kendisinden daha onemlidir.',
        points: [
          'Bunu asla kimseyle paylasmayin',
          'DM veya sohbet uzerinden asla gondermeyin',
          'Bir site bunu istiyorsa supheyle yaklasin',
          'Guvenli sekilde cevrimdisi saklayin'
        ],
        bottomLine: 'Seed phrase vermek, cuzdaninizi vermek gibidir.',
        saveLine: 'Bunu kaydedin. Bu en onemli guvenlik kurallarindan biridir.',
        compact: ['Paylasma', 'DM yok', 'Istegi sorgula', 'Cevrimdisi sakla']
      },
      {
        title: 'Sahte Siteyi Hizli Kontrol',
        subtitle: 'Giris yapmadan once adres cubuguna bakin.',
        points: [
          'Domaini tekrar kontrol edin',
          'Once yer imi yapilmis resmi baglantilari kullanin',
          'Reklam veya DM linkine hemen tiklamayin',
          'Giris yapmadan once adres cubugunu bir kez daha kontrol edin'
        ],
        bottomLine: 'Dogru domain, tanidik gorunen bir tasarimdan daha onemlidir.',
        saveLine: 'Bir site supheli geldiginde tekrar bakmak icin bunu kaydedin.',
        compact: ['Domain', 'Resmi link', 'Reklam veya DM dikkat', 'Tekrar kontrol']
      }
    ),
    es: pack(
      'Checklist de Crypto Academy',
      {
        title: 'Checklist Antes de Enviar',
        subtitle: 'Revisa estas 4 cosas antes de enviar.',
        points: [
          'Vuelve a revisar la direccion de la wallet',
          'Vuelve a revisar la red',
          'Si puedes, envia primero una pequena prueba',
          'Verifica con cuidado la direccion final despues de pegarla'
        ],
        bottomLine: 'Una transferencia correcta importa mas que una transferencia rapida.',
        saveLine: 'Guarda esta tarjeta y revisala antes de enviar.',
        compact: ['Direccion', 'Red', 'Prueba pequena', 'Verificacion final']
      },
      {
        title: 'Chequeo de Seguridad de la Seed Phrase',
        subtitle: 'Tu seed phrase importa mas que la propia app de la wallet.',
        points: [
          'Nunca la compartas con nadie',
          'Nunca la envies por DM o chat',
          'Desconfia si un sitio la pide',
          'Guardala de forma segura fuera de linea'
        ],
        bottomLine: 'Entregar tu seed phrase es como entregar tu wallet.',
        saveLine: 'Guarda esto. Es una de las reglas de seguridad mas importantes.',
        compact: ['No compartir', 'Sin DM', 'Desconfia', 'Guardar offline']
      },
      {
        title: 'Chequeo Rapido de Sitio Falso',
        subtitle: 'Mira la barra de direcciones antes de iniciar sesion.',
        points: [
          'Revisa otra vez el dominio',
          'Usa primero los enlaces oficiales guardados',
          'No abras de inmediato enlaces de anuncios o DM',
          'Vuelve a mirar la barra de direcciones antes de entrar'
        ],
        bottomLine: 'El dominio correcto importa mas que un diseno familiar.',
        saveLine: 'Guarda esto para revisarlo cuando un sitio te parezca sospechoso.',
        compact: ['Revisa dominio', 'Enlace oficial', 'Evita anuncios o DM', 'Revisa otra vez']
      }
    ),
    ar: EN_PACK,
    vi: pack(
      'Checklist Crypto Academy',
      {
        title: 'Checklist Truoc Khi Gui',
        subtitle: 'Hay kiem tra lai 4 dieu nay truoc khi gui.',
        points: [
          'Kiem tra lai dia chi vi',
          'Kiem tra lai mang',
          'Neu co the hay gui thu mot khoan nho truoc',
          'Xac minh ky dia chi cuoi cung sau khi dan'
        ],
        bottomLine: 'Mot lan gui dung quan trong hon mot lan gui nhanh.',
        saveLine: 'Luu the nay va xem lai truoc khi gui.',
        compact: ['Dia chi', 'Mang', 'Gui thu', 'Kiem tra cuoi']
      },
      {
        title: 'Kiem Tra An Toan Seed Phrase',
        subtitle: 'Seed phrase con quan trong hon chinh ung dung vi.',
        points: [
          'Khong bao gio chia se cho bat ky ai',
          'Khong gui qua DM hoac chat',
          'Hay nghi ngo neu mot trang web yeu cau no',
          'Luu giu an toan o dang offline'
        ],
        bottomLine: 'Trao seed phrase cung giong nhu trao vi cua ban.',
        saveLine: 'Hay luu lai. Day la mot trong nhung nguyen tac an toan quan trong nhat.',
        compact: ['Khong chia se', 'Khong DM', 'Nghi ngo yeu cau', 'Luu offline']
      },
      {
        title: 'Kiem Tra Nhanh Trang Web Gia',
        subtitle: 'Hay nhin thanh dia chi truoc khi dang nhap.',
        points: [
          'Kiem tra lai ten mien',
          'Uu tien cac lien ket chinh thuc da luu',
          'Khong bam ngay vao link quang cao hoac DM',
          'Nhin lai thanh dia chi mot lan nua truoc khi dang nhap'
        ],
        bottomLine: 'Ten mien dung quan trong hon mot giao dien quen mat.',
        saveLine: 'Luu lai de xem lai khi ban thay mot trang web dang ngo.',
        compact: ['Kiem tra ten mien', 'Dung link chinh thuc', 'Can than quang cao hoac DM', 'Kiem tra lai']
      }
    ),
    ha: pack(
      'Jerin Dubawar Crypto Academy',
      {
        title: 'Jerin Dubawa Kafin Aika',
        subtitle: 'Duba wadannan abubuwa 4 kafin ka aika.',
        points: [
          'Sake duba adireshin walat',
          'Sake duba network din',
          'Idan zai yiwu, fara da karamin gwaji',
          'Bayan ka liqa, sake tabbatar da adireshin karshe'
        ],
        bottomLine: 'Aika daidai ya fi muhimmanci fiye da aika cikin sauri.',
        saveLine: 'Ajiye wannan kati sannan ka sake dubawa kafin aika kudi.',
        compact: ['Adireshi', 'Network', 'Karamin gwaji', 'Tabbatarwa ta karshe']
      },
      {
        title: 'Duba Tsaron Seed Phrase',
        subtitle: 'Seed phrase dinka ta fi muhimmanci fiye da manhajar walat kanta.',
        points: [
          'Kada ka taba raba ta da kowa',
          'Kada ka tura ta ta DM ko chat',
          'Ka yi zargi idan wani shafi ya nema',
          'Ka ajiye ta lafiya a wajen offline'
        ],
        bottomLine: 'Ba da seed phrase kamar ba da walat dinka ne.',
        saveLine: 'Ajiye wannan. Yana daga cikin dokokin tsaro mafi muhimmanci.',
        compact: ['Kada ka raba', 'Babu DM', 'Yi zargi da nema', 'Ajiye offline']
      },
      {
        title: 'Saurin Duba Shafin Bogi',
        subtitle: 'Duba address bar kafin ka shiga.',
        points: [
          'Sake duba domain din',
          'Fara da official link da ka riga ka ajiye',
          'Kada ka bude link na talla ko DM nan take',
          'Sake kallon address bar kafin login'
        ],
        bottomLine: 'Daidaitaccen domain ya fi muhimmanci fiye da zane mai kama da na gaske.',
        saveLine: 'Ajiye wannan domin ka sake dubawa idan shafi ya sa ka ji shakka.',
        compact: ['Duba domain', 'Yi amfani da official link', 'Kula da talla ko DM', 'Sake duba']
      }
    )
  };

  PACKS.br = PACKS.pt;

  var CTA_PACKS = {
    en: {
      title: 'Save this and come back when you need it',
      description: 'A practical checklist to revisit before a transfer, a first buy, or whenever you want a quick safety check.',
      points: [
        'Useful to review before real actions',
        'Easy to revisit in a few seconds',
        'More helpful when bookmarked'
      ],
      note: 'This checklist is most useful when you save it and revisit it when needed.',
      links: {
        transfer: 'Open Transfer Lesson',
        safety: 'Open Safety Page',
        scams: 'Open Scam Lesson'
      }
    },
    ko: {
      title: '\uc800\uc7a5\ud574\ub450\uace0 \ud544\uc694\ud560 \ub54c \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694',
      description: '\uc804\uc1a1 \uc804, \uccab \uad6c\ub9e4 \uc804, \ub610\ub294 \ubcf4\uc548\uc774 \uac71\uc815\ub420 \ub54c \ub2e4\uc2dc \ubcf4\uae30 \uc88b\uc740 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4.',
      points: [
        '\uc2e4\uc804 \uc804\uc5d0 \ub2e4\uc2dc \ubcf4\uae30 \uc88b\uc2b5\ub2c8\ub2e4',
        '\uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4',
        '\ubd81\ub9c8\ud06c\ud574\ub450\uba74 \ub354 \uc720\uc6a9\ud569\ub2c8\ub2e4'
      ],
      note: '\uc774 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub294 \uc800\uc7a5\ud574\ub450\uace0 \ud544\uc694\ud560 \ub54c \ub2e4\uc2dc \ubcf4\ub294 \uc6a9\ub3c4\ub85c \uac00\uc7a5 \uc720\uc6a9\ud569\ub2c8\ub2e4.',
      links: {
        transfer: '\uc804\uc1a1 \uad00\ub828 \ud559\uc2b5 \ubcf4\uae30',
        safety: 'Safety \ud398\uc774\uc9c0 \ubcf4\uae30',
        scams: '\uc0ac\uae30 \uc608\ubc29 \ud559\uc2b5 \ubcf4\uae30'
      }
    },
    th: EN_PACK['before-send'] && {
      title: 'Save this and come back when you need it',
      description: 'A practical checklist to revisit before a transfer, a first buy, or whenever you want a quick safety check.',
      points: [
        'Useful to review before real actions',
        'Easy to revisit in a few seconds',
        'More helpful when bookmarked'
      ],
      note: 'This checklist is most useful when you save it and revisit it when needed.',
      links: {
        transfer: 'Open Transfer Lesson',
        safety: 'Open Safety Page',
        scams: 'Open Scam Lesson'
      }
    },
    id: {
      title: 'Simpan dan buka lagi saat dibutuhkan',
      description: 'Checklist praktis untuk dilihat lagi sebelum transfer, pembelian pertama, atau saat ingin cek keamanan dengan cepat.',
      points: [
        'Berguna untuk ditinjau sebelum tindakan nyata',
        'Mudah dilihat lagi hanya dalam beberapa detik',
        'Lebih membantu jika disimpan atau dibookmark'
      ],
      note: 'Checklist ini paling berguna jika Anda menyimpannya dan membukanya lagi saat diperlukan.',
      links: {
        transfer: 'Buka pelajaran transfer',
        safety: 'Buka halaman safety',
        scams: 'Buka pelajaran scam'
      }
    },
    pt: {
      title: 'Salve isto e volte quando precisar',
      description: 'Um checklist pratico para rever antes de uma transferencia, da primeira compra ou quando quiser uma checagem rapida de seguranca.',
      points: [
        'Util para rever antes de uma acao real',
        'Facil de revisar novamente em poucos segundos',
        'Fica ainda mais util quando salvo nos favoritos'
      ],
      note: 'Este checklist e mais util quando voce o salva e volta a ele no momento certo.',
      links: {
        transfer: 'Abrir licao de transferencia',
        safety: 'Abrir pagina de seguranca',
        scams: 'Abrir licao sobre golpes'
      }
    },
    tr: {
      title: 'Kaydedin ve gerektiginde tekrar donun',
      description: 'Transferden, ilk alimdan veya hizli bir guvenlik kontrolunden once tekrar bakmak icin pratik bir kontrol listesi.',
      points: [
        'Gercek bir adimdan once tekrar bakmak icin kullanisli',
        'Birkac saniyede yeniden gozden gecirilebilir',
        'Kaydedildiginde veya yer imlerine eklendiginde daha faydali olur'
      ],
      note: 'Bu kontrol listesi, kaydedip ihtiyaciniz oldugunda tekrar baktiginizda en yararli haline gelir.',
      links: {
        transfer: 'Transfer dersini ac',
        safety: 'Guvenlik sayfasini ac',
        scams: 'Dolandiricilik dersini ac'
      }
    },
    es: {
      title: 'Guardalo y vuelve cuando lo necesites',
      description: 'Un checklist practico para revisar antes de una transferencia, de la primera compra o cuando quieras una revision rapida de seguridad.',
      points: [
        'Util para revisar antes de una accion real',
        'Facil de volver a ver en pocos segundos',
        'Mas util cuando queda guardado o marcado'
      ],
      note: 'Este checklist es mas util cuando lo guardas y vuelves a verlo en el momento necesario.',
      links: {
        transfer: 'Abrir leccion de transferencias',
        safety: 'Abrir pagina de seguridad',
        scams: 'Abrir leccion sobre estafas'
      }
    },
    ar: {
      title: 'Save this and come back when you need it',
      description: 'A practical checklist to revisit before a transfer, a first buy, or whenever you want a quick safety check.',
      points: [
        'Useful to review before real actions',
        'Easy to revisit in a few seconds',
        'More helpful when bookmarked'
      ],
      note: 'This checklist is most useful when you save it and revisit it when needed.',
      links: {
        transfer: 'Open Transfer Lesson',
        safety: 'Open Safety Page',
        scams: 'Open Scam Lesson'
      }
    },
    vi: {
      title: 'Luu lai va mo lai khi can',
      description: 'Checklist thuc te de xem lai truoc khi chuyen tien, truoc lan mua dau tien hoac khi ban muon kiem tra an toan nhanh.',
      points: [
        'Huu ich de xem lai truoc khi thuc hien thao tac that',
        'Co the mo lai trong vai giay ngan',
        'Se huu ich hon neu ban luu hoac danh dau trang'
      ],
      note: 'Checklist nay huu ich nhat khi ban luu lai va mo ra dung luc can.',
      links: {
        transfer: 'Mo bai hoc chuyen tien',
        safety: 'Mo trang an toan',
        scams: 'Mo bai hoc lua dao'
      }
    },
    ha: {
      title: 'Ajiye wannan ka dawo idan kana bukata',
      description: 'Checklist mai amfani don sake dubawa kafin tura kudi, kafin sayen farko, ko idan kana son saurin duba tsaro.',
      points: [
        'Yana da amfani kafin ka dauki mataki na gaske',
        'Ana iya komawa a duba shi cikin dan lokaci',
        'Yafi amfani idan ka ajiye ko kayi masa bookmark'
      ],
      note: 'Wannan checklist din yafi amfani idan ka ajiye shi ka koma gare shi a lokacin da ake bukata.',
      links: {
        transfer: 'Bude darasin tura kudi',
        safety: 'Bude shafin tsaro',
        scams: 'Bude darasin damfara'
      }
    }
  };

  CTA_PACKS.br = CTA_PACKS.pt;

  var SHARE_UI_PACKS = {
    en: {
      title: 'Easy to share when someone needs it',
      description: 'Because these are short and practical, they work well as shareable links for Telegram, X, or community posts.',
      copyLabel: 'Suggested share line',
      copy: 'Copy Link',
      telegram: 'Share to Telegram',
      x: 'Share on X',
      share: 'Share',
      copied: 'Link copied'
    },
    ko: {
      title: '\ud544\uc694\ud55c \uc0ac\ub78c\uc5d0\uac8c \ubc14\ub85c \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
      description: '\uc9e7\uace0 \uc2e4\uc804\uc801\uc778 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub77c\uc11c \ud154\ub808\uadf8\ub7a8, X, \ucee4\ubba4\ub2c8\ud2f0 \ub9c1\ud06c\ub85c \uacf5\uc720\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4.',
      copyLabel: '\ud568\uaed8 \ubcf4\ub0bc \uc9e7\uc740 \ubb38\uad6c',
      copy: '\ub9c1\ud06c \ubcf5\uc0ac',
      telegram: '\ud154\ub808\uadf8\ub7a8\uc5d0 \uacf5\uc720',
      x: 'X\uc5d0 \uacf5\uc720',
      share: '\uacf5\uc720\ud558\uae30',
      copied: '\ub9c1\ud06c\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4'
    },
    th: {
      title: 'Easy to share when someone needs it',
      description: 'Because these are short and practical, they work well as shareable links for Telegram, X, or community posts.',
      copyLabel: 'Suggested share line',
      copy: 'Copy Link',
      telegram: 'Share to Telegram',
      x: 'Share on X',
      share: 'Share',
      copied: 'Link copied'
    },
    id: {
      title: 'Mudah dibagikan saat seseorang membutuhkannya',
      description: 'Karena singkat dan praktis, checklist ini cocok dibagikan sebagai link di Telegram, X, atau posting komunitas.',
      copyLabel: 'Teks singkat untuk dibagikan',
      copy: 'Salin Link',
      telegram: 'Bagikan ke Telegram',
      x: 'Bagikan ke X',
      share: 'Bagikan',
      copied: 'Link berhasil disalin'
    },
    pt: {
      title: 'Facil de compartilhar quando alguem precisar',
      description: 'Como sao curtos e praticos, estes checklists funcionam bem como links para Telegram, X ou posts em comunidades.',
      copyLabel: 'Linha curta para compartilhar',
      copy: 'Copiar Link',
      telegram: 'Compartilhar no Telegram',
      x: 'Compartilhar no X',
      share: 'Compartilhar',
      copied: 'Link copiado'
    },
    tr: {
      title: 'Birinin ihtiyaci oldugunda kolayca paylasilabilir',
      description: 'Kisa ve pratik olduklari icin bu checklistler Telegram, X veya topluluk paylasimlari icin uygun baglantilar sunar.',
      copyLabel: 'Paylasim icin kisa metin',
      copy: 'Baglantiyi Kopyala',
      telegram: 'Telegramda Paylas',
      x: 'Xte Paylas',
      share: 'Paylas',
      copied: 'Baglanti kopyalandi'
    },
    es: {
      title: 'Facil de compartir cuando alguien lo necesite',
      description: 'Como son breves y practicos, funcionan bien como enlaces para Telegram, X o publicaciones en comunidades.',
      copyLabel: 'Texto corto para compartir',
      copy: 'Copiar Enlace',
      telegram: 'Compartir en Telegram',
      x: 'Compartir en X',
      share: 'Compartir',
      copied: 'Enlace copiado'
    },
    ar: {
      title: 'Easy to share when someone needs it',
      description: 'Because these are short and practical, they work well as shareable links for Telegram, X, or community posts.',
      copyLabel: 'Suggested share line',
      copy: 'Copy Link',
      telegram: 'Share to Telegram',
      x: 'Share on X',
      share: 'Share',
      copied: 'Link copied'
    },
    vi: {
      title: 'De chia se khi ai do can den',
      description: 'Vi ngan gon va thuc te, nhung checklist nay rat hop de gui qua Telegram, X hoac bai dang cong dong.',
      copyLabel: 'Cau ngan de chia se',
      copy: 'Sao Chep Link',
      telegram: 'Chia se len Telegram',
      x: 'Chia se len X',
      share: 'Chia se',
      copied: 'Da sao chep lien ket'
    },
    ha: {
      title: 'Yana da saukin rabawa idan wani yana bukata',
      description: 'Saboda suna gajeru kuma a aikace suke, wadannan checklist din sun dace da rabawa ta Telegram, X, ko post na alumma.',
      copyLabel: 'Takaitaccen sakon rabawa',
      copy: 'Kwafi Link',
      telegram: 'Raba zuwa Telegram',
      x: 'Raba a X',
      share: 'Raba',
      copied: 'An kwafi link'
    }
  };

  SHARE_UI_PACKS.br = SHARE_UI_PACKS.pt;

  var SHARE_COPY_PACKS = {
    en: {
      'before-send': 'Rechecking the address, network, and final details before sending can prevent avoidable mistakes.',
      'seed-phrase': 'A short reminder of the most important rule in crypto security: never share your seed phrase.',
      'fake-website': 'Rechecking the domain and link before logging in can reduce many avoidable risks.'
    },
    ko: {
      'before-send': '\uc804\uc1a1 \uc804\uc5d0 \uc8fc\uc18c, \ub124\ud2b8\uc6cc\ud06c, \ucd5c\uc885 \ud655\uc778\ub9cc \ub2e4\uc2dc \ubd10\ub3c4 \uc2e4\uc218\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
      'seed-phrase': '\uc2dc\ub4dc \ubb38\uad6c\ub294 \uc808\ub300 \uacf5\uc720\ud558\uba74 \uc548 \ub429\ub2c8\ub2e4. \uac00\uc7a5 \uc911\uc694\ud55c \ubcf4\uc548 \uc6d0\uce59\ub9cc \uc9e7\uac8c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.',
      'fake-website': '\ub85c\uadf8\uc778 \uc804\uc5d0 \ub3c4\uba54\uc778\uacfc \ub9c1\ud06c\ub9cc \ub2e4\uc2dc \ud655\uc778\ud574\ub3c4 \ub9ce\uc740 \uc704\ud5d8\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.'
    }
  };

  var CHECKLIST_LINKS = {
    'before-send': [
      { route: 'lesson/transfer/', labelKey: 'transfer' },
      { route: 'safety/', labelKey: 'safety' }
    ],
    'seed-phrase': [
      { route: 'lesson/scams/', labelKey: 'scams' },
      { route: 'safety/', labelKey: 'safety' }
    ],
    'fake-website': [
      { route: 'safety/', labelKey: 'safety' },
      { route: 'lesson/scams/', labelKey: 'scams' }
    ]
  };

  function applyDocumentMeta(lang, page){
    document.documentElement.lang = lang === 'br' ? 'pt-BR' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-rtl', lang === 'ar');
    document.title = page.title + ' | Crypto Academy';
    var meta = document.querySelector('meta[name="description"]');
    if(meta) meta.setAttribute('content', page.subtitle);
  }

  function buildList(points){
    return (points || []).map(function(point){
      return '<li>' + escapeHtml(point) + '</li>';
    }).join('');
  }

  function getChecklistLocale(requestedLang){
    return CTA_PACKS[requestedLang] || CTA_PACKS[contentLang(requestedLang)] || CTA_PACKS.en;
  }

  function getShareUiLocale(requestedLang){
    return SHARE_UI_PACKS[requestedLang] || SHARE_UI_PACKS[contentLang(requestedLang)] || SHARE_UI_PACKS.en;
  }

  function getShareCopyText(key, requestedLang, page){
    var pack = SHARE_COPY_PACKS[requestedLang] || SHARE_COPY_PACKS[contentLang(requestedLang)] || null;
    if(pack && pack[key]) return pack[key];
    return page.bottomLine || page.subtitle || page.title || '';
  }

  function getSitePrefix(){
    var path = String((window.location && window.location.pathname) || '').replace(/\\/g, '/');
    if(path.indexOf('/checklists/') !== -1) return '../../';
    if(path.indexOf('/pdf/') !== -1) return '../';
    return '../../';
  }

  function toIndexRoute(path){
    var value = String(path || '');
    if(!value) return 'index.html';
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
  }

  function getSiteHref(route, requestedLang){
    return toIndexRoute(getSitePrefix() + route) + '?lang=' + encodeURIComponent(requestedLang);
  }

  function getShareUrl(requestedLang){
    var canonical = document.querySelector('link[rel="canonical"]');
    var raw = canonical && canonical.getAttribute('href') ? canonical.getAttribute('href') : String(window.location.href || '');
    if(!raw) return '';
    try{
      var url = new URL(raw, window.location.href);
      url.searchParams.set('lang', requestedLang);
      url.hash = '';
      return url.toString();
    }catch(err){
      return raw;
    }
  }

  function getTelegramShareHref(text, url){
    return 'https://t.me/share/url?url=' + encodeURIComponent(url || '') + '&text=' + encodeURIComponent(text || '');
  }

  function getXShareHref(text, url){
    return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text || '') + '&url=' + encodeURIComponent(url || '');
  }

  function canUseNativeShare(){
    return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
  }

  function copyTextToClipboard(text){
    return new Promise(function(resolve, reject){
      if(typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext){
        navigator.clipboard.writeText(text).then(resolve, reject);
        return;
      }
      try{
        var input = document.createElement('textarea');
        input.value = text;
        input.setAttribute('readonly', 'readonly');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        input.style.pointerEvents = 'none';
        document.body.appendChild(input);
        input.focus();
        input.select();
        var copied = document.execCommand('copy');
        document.body.removeChild(input);
        if(copied){
          resolve();
        }else{
          reject(new Error('copy-failed'));
        }
      }catch(err){
        reject(err);
      }
    });
  }

  function buildCtaLinks(key, requestedLang, cta){
    var items = CHECKLIST_LINKS[key] || [];
    return items.map(function(item){
      var label = (cta.links && cta.links[item.labelKey]) || CTA_PACKS.en.links[item.labelKey] || 'Open';
      return '<a class="cta-link" href="' + escapeHtml(getSiteHref(item.route, requestedLang)) + '">' + escapeHtml(label) + '</a>';
    }).join('');
  }

  function buildSharePanel(key, requestedLang, page){
    var shareUi = getShareUiLocale(requestedLang);
    var shareText = getShareCopyText(key, requestedLang, page);
    var shareUrl = getShareUrl(requestedLang);
    var nativeButton = canUseNativeShare()
      ? '<button type="button" class="share-btn share-btn-native" data-share-action="native">' + escapeHtml(shareUi.share) + '</button>'
      : '';
    return ''
      + '<div class="share-panel" data-share-url="' + escapeHtml(shareUrl) + '" data-share-text="' + escapeHtml(shareText) + '">'
      +   '<h3 class="share-title">' + escapeHtml(shareUi.title) + '</h3>'
      +   '<p class="share-desc">' + escapeHtml(shareUi.description) + '</p>'
      +   '<div class="share-copy-block">'
      +     '<div class="share-copy-label">' + escapeHtml(shareUi.copyLabel) + '</div>'
      +     '<p class="share-copy-text">' + escapeHtml(shareText) + '</p>'
      +   '</div>'
      +   '<div class="share-actions">'
      +     '<button type="button" class="share-btn is-primary" data-share-action="copy">' + escapeHtml(shareUi.copy) + '</button>'
      +     '<a class="share-btn" href="' + escapeHtml(getTelegramShareHref(shareText, shareUrl)) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(shareUi.telegram) + '</a>'
      +     '<a class="share-btn" href="' + escapeHtml(getXShareHref(shareText, shareUrl)) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(shareUi.x) + '</a>'
      +     nativeButton
      +   '</div>'
      +   '<div class="share-feedback" aria-live="polite"></div>'
      + '</div>';
  }

  function bindSharePanel(root, key, requestedLang, page){
    var panel = root.querySelector('.share-panel');
    if(!panel) return;
    var shareUrl = panel.getAttribute('data-share-url') || '';
    var shareText = panel.getAttribute('data-share-text') || '';
    var shareUi = getShareUiLocale(requestedLang);
    var feedback = panel.querySelector('.share-feedback');

    function setFeedback(message){
      if(!feedback) return;
      feedback.textContent = message || '';
      feedback.classList.add('is-visible');
      clearTimeout(setFeedback._timer);
      setFeedback._timer = setTimeout(function(){
        feedback.classList.remove('is-visible');
        feedback.textContent = '';
      }, 2200);
    }

    var copyButton = panel.querySelector('[data-share-action="copy"]');
    if(copyButton){
      copyButton.addEventListener('click', function(){
        copyTextToClipboard(shareUrl).then(function(){
          setFeedback(shareUi.copied);
        }, function(){
          setFeedback(shareUi.copied);
        });
      });
    }

    var nativeButton = panel.querySelector('[data-share-action="native"]');
    if(nativeButton){
      nativeButton.addEventListener('click', function(){
        try{
          navigator.share({
            title: page.title + ' | Crypto Academy',
            text: shareText,
            url: shareUrl
          });
        }catch(err){}
      });
    }
  }

  function renderChecklistPage(){
    var root = document.getElementById('checklistRoot');
    if(!root) return;

    var key = document.body.getAttribute('data-checklist-key') || 'before-send';
    var requestedLang = normalizeLang(getPreferredLang());
    var pack = PACKS[requestedLang] || PACKS[contentLang(requestedLang)] || PACKS.en;
    var page = pack[key] || PACKS.en[key];
    var cta = getChecklistLocale(requestedLang);
    if(!page) return;

    applyDocumentMeta(requestedLang, page);
    document.body.setAttribute('data-compact-points', (page.compact || []).join(' | '));

    root.innerHTML = ''
      + '<div class="page">'
      +   '<div class="eyebrow">' + escapeHtml(pack.eyebrow || 'Crypto Academy Checklist') + '</div>'
      +   '<h1>' + escapeHtml(page.title) + '</h1>'
      +   '<p class="lead">' + escapeHtml(page.subtitle) + '</p>'
      +   '<section class="check-card">'
      +     '<ul class="check-list">' + buildList(page.points) + '</ul>'
      +   '</section>'
      +   '<div class="bottom-line">' + escapeHtml(page.bottomLine) + '</div>'
      +   '<div class="save-note">' + escapeHtml(page.saveLine) + '</div>'
      +   '<section class="cta-card">'
      +     '<h2 class="cta-title">' + escapeHtml(cta.title) + '</h2>'
      +     '<p class="cta-desc">' + escapeHtml(cta.description) + '</p>'
      +     '<ul class="cta-points">' + buildList(cta.points) + '</ul>'
      +     '<div class="cta-note">' + escapeHtml(cta.note) + '</div>'
      +     '<div class="cta-links">' + buildCtaLinks(key, requestedLang, cta) + '</div>'
      +     buildSharePanel(key, requestedLang, page)
      +   '</section>'
      +   '<div class="compact-data" aria-hidden="true">' + escapeHtml((page.compact || []).join(' | ')) + '</div>'
      + '</div>';

    bindSharePanel(root, key, requestedLang, page);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', renderChecklistPage);
  }else{
    renderChecklistPage();
  }
})();
