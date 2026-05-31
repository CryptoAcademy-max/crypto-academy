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
    'Coin ProofPath Checklist',
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
    'Coin ProofPath 체크리스트',
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
    th: pack(
      'เช็กลิสต์ Coin ProofPath',
      {
        title: 'เช็กลิสต์ก่อนส่ง',
        subtitle: 'ตรวจ 4 อย่างนี้ก่อนส่งจริง',
        points: [
          'ตรวจที่อยู่กระเป๋าอีกครั้ง',
          'ตรวจเครือข่ายอีกครั้ง',
          'ถ้าเป็นไปได้ ให้ลองส่งจำนวนน้อยก่อน',
          'ตรวจที่อยู่สุดท้ายหลังวางข้อความ'
        ],
        bottomLine: 'การโอนให้ถูกต้องสำคัญกว่าการโอนให้เร็ว',
        saveLine: 'บันทึกการ์ดนี้ไว้ แล้วทบทวนก่อนส่ง',
        compact: ['ที่อยู่', 'เครือข่าย', 'ลองส่งน้อย', 'ตรวจสุดท้าย']
      },
      {
        title: 'เช็กความปลอดภัย Seed Phrase',
        subtitle: 'Seed phrase สำคัญกว่าตัวแอปกระเป๋าเงิน',
        points: [
          'ห้ามแชร์กับใครเด็ดขาด',
          'ห้ามส่งผ่าน DM หรือแชต',
          'สงสัยไว้ก่อนถ้าเว็บไซต์ขอให้กรอก',
          'เก็บแบบออฟไลน์อย่างปลอดภัย'
        ],
        bottomLine: 'การให้ seed phrase ก็เหมือนการให้กระเป๋าทั้งใบ',
        saveLine: 'บันทึกไว้ เพราะนี่คือกฎความปลอดภัยที่สำคัญมาก',
        compact: ['ห้ามแชร์', 'ไม่ส่ง DM', 'สงสัยคำขอ', 'เก็บออฟไลน์']
      },
      {
        title: 'เช็กเว็บไซต์ปลอมแบบเร็ว',
        subtitle: 'ดูแถบที่อยู่ก่อนเข้าสู่ระบบ',
        points: [
          'ตรวจโดเมนอีกครั้ง',
          'ใช้ลิงก์ทางการที่บันทึกไว้ก่อน',
          'อย่ากดลิงก์โฆษณาหรือ DM ทันที',
          'ตรวจแถบที่อยู่อีกครั้งก่อนล็อกอิน'
        ],
        bottomLine: 'โดเมนที่ถูกต้องสำคัญกว่าหน้าตาเว็บที่คุ้นเคย',
        saveLine: 'บันทึกไว้เพื่อทบทวนเมื่อเว็บไซต์ดูน่าสงสัย',
        compact: ['ตรวจโดเมน', 'ลิงก์ทางการ', 'ระวังโฆษณา/DM', 'ตรวจอีกครั้ง']
      }
    ),
    id: pack(
      'Checklist Coin ProofPath',
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
      'Checklist da Coin ProofPath',
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
      'Coin ProofPath Kontrol Listesi',
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
      'Checklist de Coin ProofPath',
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
    ar: pack(
      'قائمة تحقق Coin ProofPath',
      {
        title: 'قائمة تحقق قبل الإرسال',
        subtitle: 'راجع هذه النقاط الأربع قبل أي إرسال.',
        points: [
          'أعد فحص عنوان المحفظة',
          'أعد فحص الشبكة',
          'أرسل مبلغاً صغيراً أولاً إن أمكن',
          'تحقق من العنوان النهائي بعد اللصق'
        ],
        bottomLine: 'الإرسال الصحيح أهم من الإرسال السريع.',
        saveLine: 'احفظ هذه البطاقة وراجعها قبل الإرسال.',
        compact: ['العنوان', 'الشبكة', 'اختبار صغير', 'فحص نهائي']
      },
      {
        title: 'فحص أمان عبارة الاسترداد',
        subtitle: 'عبارة الاسترداد أهم من تطبيق المحفظة نفسه.',
        points: [
          'لا تشاركها مع أي شخص',
          'لا ترسلها عبر الرسائل أو الدردشة',
          'اشكّ في أي موقع يطلبها',
          'احفظها بأمان دون اتصال'
        ],
        bottomLine: 'إعطاء عبارة الاسترداد يشبه إعطاء المحفظة نفسها.',
        saveLine: 'احفظ هذا. إنه من أهم قواعد الأمان.',
        compact: ['لا تشارك', 'لا رسائل', 'اشكّ في الطلب', 'حفظ دون اتصال']
      },
      {
        title: 'فحص سريع للموقع المزيف',
        subtitle: 'افحص شريط العنوان قبل تسجيل الدخول.',
        points: [
          'أعد فحص النطاق',
          'استخدم الروابط الرسمية المحفوظة أولاً',
          'لا تضغط فوراً على روابط إعلان أو رسالة',
          'افحص شريط العنوان مرة أخرى قبل الدخول'
        ],
        bottomLine: 'النطاق الصحيح أهم من تصميم يبدو مألوفاً.',
        saveLine: 'احفظ هذا لتراجعه عندما يبدو الموقع مريباً.',
        compact: ['فحص النطاق', 'روابط رسمية', 'تجنب إعلان/رسالة', 'فحص مرة أخرى']
      }
    ),
    vi: pack(
      'Checklist Coin ProofPath',
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
      'Jerin Dubawar Coin ProofPath',
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
      title: 'บันทึกไว้ แล้วกลับมาดูเมื่อจำเป็น',
      description: 'เช็กลิสต์สั้น ๆ สำหรับทบทวนก่อนโอน ก่อนซื้อครั้งแรก หรือเมื่อต้องการเช็กความปลอดภัยเร็ว ๆ',
      points: [
        'เหมาะสำหรับทบทวนก่อนลงมือจริง',
        'กลับมาดูใหม่ได้ในไม่กี่วินาที',
        'มีประโยชน์ยิ่งขึ้นเมื่อบันทึกไว้'
      ],
      note: 'เช็กลิสต์นี้มีประโยชน์ที่สุดเมื่อบันทึกไว้และเปิดดูในเวลาที่ต้องใช้จริง',
      links: {
        transfer: 'เปิดบทเรียนการโอน',
        safety: 'เปิดหน้าความปลอดภัย',
        scams: 'เปิดบทเรียนเรื่อง scam'
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
      title: 'احفظ هذا وارجع إليه عند الحاجة',
      description: 'قائمة عملية تراجعها قبل التحويل أو أول شراء أو عند الحاجة إلى فحص أمان سريع.',
      points: [
        'مفيدة قبل أي خطوة حقيقية',
        'يسهل الرجوع إليها خلال ثوانٍ',
        'تصبح أفضل عندما تحفظها'
      ],
      note: 'هذه القائمة مفيدة أكثر عندما تحفظها وتعود إليها وقت الحاجة.',
      links: {
        transfer: 'افتح درس التحويل',
        safety: 'افتح صفحة الأمان',
        scams: 'افتح درس الاحتيال'
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

  var HERO_UI_PACKS = {
    en:{
      typeChecklist:'Checklist',
      quickAction:'Quick Action',
      quickReview:'Quick Review',
      revisitedOften:'Revisited Often',
      safetyEssential:'Safety Essential'
    },
    ko:{
      typeChecklist:'체크리스트',
      quickAction:'바로 확인',
      quickReview:'빠른 복습',
      revisitedOften:'자주 다시 봄',
      safetyEssential:'보안 필수'
    },
    th:{
      typeChecklist:'เช็กลิสต์',
      quickAction:'เปิดดูได้ทันที',
      quickReview:'ทบทวนเร็ว',
      revisitedOften:'กลับมาดูบ่อย',
      safetyEssential:'เรื่องสำคัญด้านความปลอดภัย'
    },
    id:{
      typeChecklist:'Checklist',
      quickAction:'Lihat sekarang',
      quickReview:'Tinjauan cepat',
      revisitedOften:'Sering ditinjau ulang',
      safetyEssential:'Keamanan penting'
    },
    pt:{
      typeChecklist:'Checklist',
      quickAction:'Ver agora',
      quickReview:'Revisao rapida',
      revisitedOften:'Revisado com frequencia',
      safetyEssential:'Seguranca essencial'
    },
    tr:{
      typeChecklist:'Checklist',
      quickAction:'Simdi bak',
      quickReview:'Hizli gozden gecirme',
      revisitedOften:'Sik tekrar bakilir',
      safetyEssential:'Guvenlik icin onemli'
    },
    es:{
      typeChecklist:'Checklist',
      quickAction:'Ver ahora',
      quickReview:'Revision rapida',
      revisitedOften:'Se revisa a menudo',
      safetyEssential:'Seguridad esencial'
    },
    ar:{
      typeChecklist:'قائمة التحقق',
      quickAction:'إجراء سريع',
      quickReview:'مراجعة سريعة',
      revisitedOften:'يعود إليه كثيراً',
      safetyEssential:'أساسي للأمان'
    },
    vi:{
      typeChecklist:'Checklist',
      quickAction:'Xem ngay',
      quickReview:'Xem lai nhanh',
      revisitedOften:'Hay xem lai',
      safetyEssential:'Thiet yeu ve an toan'
    },
    ha:{
      typeChecklist:'Checklist',
      quickAction:'Duba yanzu',
      quickReview:'Bita cikin sauri',
      revisitedOften:'Ana yawan komawa',
      safetyEssential:'Muhimmin tsaro'
    }
  };
  HERO_UI_PACKS.br = HERO_UI_PACKS.pt;

  function applyDocumentMeta(lang, page){
    document.documentElement.lang = lang === 'br' ? 'pt-BR' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-rtl', lang === 'ar');
    document.title = page.title + ' | Coin ProofPath';
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

  function getHeroUiLocale(requestedLang){
    return HERO_UI_PACKS[requestedLang] || HERO_UI_PACKS[contentLang(requestedLang)] || HERO_UI_PACKS.en;
  }

  function getChecklistHeroIcon(key){
    if(key === 'before-send'){
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h11"/><path d="m13 5 4 3-4 3"/><path d="M18 16H7"/><path d="m11 13-4 3 4 3"/></svg>';
    }
    if(key === 'seed-phrase'){
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.4c0 4.1-2.6 7.9-7 9.1-4.4-1.2-7-5-7-9.1V6l7-2.5Z"/><path d="m9.2 12.2 1.9 1.9 3.7-4.1"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h10"/><path d="M9 12h10"/><path d="M9 18h10"/><path d="m4.5 6 1.5 1.5L8.5 5"/><path d="m4.5 12 1.5 1.5L8.5 11"/><path d="m4.5 18 1.5 1.5L8.5 17"/></svg>';
  }

  function getChecklistHeroTone(key){
    return key === 'before-send' ? 'review' : 'safety';
  }

  function getChecklistHeroTags(key, ui){
    if(key === 'before-send') return [ui.quickAction, ui.revisitedOften];
    if(key === 'seed-phrase') return [ui.safetyEssential, ui.revisitedOften];
    return [ui.safetyEssential, ui.quickReview];
  }

  function buildChecklistHeroActions(key, requestedLang, cta){
    var items = (CHECKLIST_LINKS[key] || []).slice(0, 2);
    return items.map(function(item, index){
      var label = (cta.links && cta.links[item.labelKey]) || CTA_PACKS.en.links[item.labelKey] || 'Open';
      return '<a class="checklist-hero-action' + (index === 0 ? ' is-primary' : '') + '" href="' + escapeHtml(getSiteHref(item.route, requestedLang)) + '">' + escapeHtml(label) + '</a>';
    }).join('');
  }

  function buildChecklistHero(key, requestedLang, pack, page, cta){
    var ui = getHeroUiLocale(requestedLang);
    var tags = getChecklistHeroTags(key, ui);
    return ''
      + '<section class="checklist-hero" data-hero-tone="' + escapeHtml(getChecklistHeroTone(key)) + '">'
      +   '<div class="checklist-hero-ambient" aria-hidden="true"></div>'
      +   '<div class="checklist-hero-heading">'
      +     '<span class="checklist-hero-icon" aria-hidden="true">' + getChecklistHeroIcon(key) + '</span>'
      +     '<div class="checklist-hero-copy">'
      +       '<div class="checklist-hero-kicker"><span class="checklist-hero-badge">' + escapeHtml(ui.typeChecklist) + '</span><span class="checklist-hero-mini">' + escapeHtml(pack.eyebrow || 'Coin ProofPath Checklist') + '</span></div>'
      +       '<h1 class="checklist-hero-title">' + escapeHtml(page.title) + '</h1>'
      +       '<p class="checklist-hero-lead">' + escapeHtml(page.subtitle) + '</p>'
      +     '</div>'
      +   '</div>'
      +   '<div class="checklist-hero-chips">' + tags.map(function(tag){ return '<span class="checklist-hero-chip">' + escapeHtml(tag) + '</span>'; }).join('') + '</div>'
      +   '<div class="checklist-hero-actions">' + buildChecklistHeroActions(key, requestedLang, cta) + '</div>'
      + '</section>';
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

  function getChecklistVisualPack(requestedLang){
    var lang = contentLang(requestedLang);
    var packs = {
      en:{
        kicker:'Visual quick check',
        note:'Scan this first, then read the checklist below.',
        beforeTitle:'Before you send',
        beforeDesc:'Address, network, memo, test amount, final review.',
        seedTitle:'Before you type secrets',
        seedDesc:'Seed phrase and private key requests are stop signs.',
        siteTitle:'Before you log in',
        siteDesc:'Compare the domain, source, request, and pressure.',
        labels:['Address','Network','Memo','Small test','Final review'],
        seed:['Seed phrase','Private key','Recovery screen','Support DM'],
        site:['Official source','Domain spelling','Wallet request','Urgency']
      },
      ko:{
        kicker:'시각 빠른 확인',
        note:'먼저 시각 카드로 흐름을 보고, 아래 체크리스트를 읽으세요.',
        beforeTitle:'전송하기 전에',
        beforeDesc:'주소, 네트워크, 메모, 소액 테스트, 최종 확인.',
        seedTitle:'비밀을 입력하기 전에',
        seedDesc:'시드 문구와 개인 키 요청은 즉시 멈춤 신호입니다.',
        siteTitle:'로그인하기 전에',
        siteDesc:'공식 출처, 도메인, 요구 내용, 압박 문구를 비교하세요.',
        labels:['주소','네트워크','메모','소액 테스트','최종 확인'],
        seed:['시드 문구','개인 키','복구 화면','DM 고객지원'],
        site:['공식 출처','도메인 철자','지갑 요청','긴급 압박']
      }
    };
    return packs[lang] || packs.en;
  }

  function getChecklistVisualPack(requestedLang){
    var lang = contentLang(requestedLang);
    var packs = {
      en:{kicker:'Visual quick check',note:'Scan this first, then read the checklist below.',beforeTitle:'Before you send',beforeDesc:'Address, network, memo, test amount, final review.',seedTitle:'Before you type secrets',seedDesc:'Seed phrase and private key requests are stop signs.',siteTitle:'Before you log in',siteDesc:'Compare the domain, source, request, and pressure.',labels:['Address','Network','Memo','Small test','Final review'],seed:['Seed phrase','Private key','Recovery screen','Support DM'],site:['Official source','Domain spelling','Wallet request','Urgency']},
      ko:{kicker:'시각 빠른 확인',note:'먼저 시각 카드로 흐름을 보고, 아래 체크리스트를 읽어보세요.',beforeTitle:'전송하기 전에',beforeDesc:'주소, 네트워크, 메모, 소액 테스트, 최종 확인.',seedTitle:'비밀 정보를 입력하기 전에',seedDesc:'시드 문구와 개인 키 요청은 즉시 멈춤 신호입니다.',siteTitle:'로그인하기 전에',siteDesc:'공식 출처, 도메인, 요청 내용, 압박 문구를 비교하세요.',labels:['주소','네트워크','메모','소액 테스트','최종 확인'],seed:['시드 문구','개인 키','복구 화면','DM 고객지원'],site:['공식 출처','도메인 철자','지갑 요청','긴급 압박']},
      th:{kicker:'เช็กด้วยภาพ',note:'ดูการ์ดภาพก่อน แล้วอ่านเช็กลิสต์ด้านล่าง',beforeTitle:'ก่อนส่ง',beforeDesc:'ที่อยู่ เครือข่าย เมโม ทดสอบน้อย และตรวจสุดท้าย',seedTitle:'ก่อนพิมพ์ข้อมูลลับ',seedDesc:'คำขอ seed phrase หรือ private key คือสัญญาณให้หยุด',siteTitle:'ก่อนเข้าสู่ระบบ',siteDesc:'เทียบแหล่งทางการ โดเมน คำขอ และความเร่งด่วน',labels:['ที่อยู่','เครือข่าย','เมโม','ทดสอบน้อย','ตรวจสุดท้าย'],seed:['Seed phrase','Private key','หน้ากู้คืน','DM support'],site:['แหล่งทางการ','สะกดโดเมน','คำขอ wallet','ความเร่งด่วน']},
      id:{kicker:'Cek visual cepat',note:'Pindai kartu ini dulu, lalu baca checklist di bawah.',beforeTitle:'Sebelum mengirim',beforeDesc:'Alamat, jaringan, memo, tes kecil, cek akhir.',seedTitle:'Sebelum mengetik rahasia',seedDesc:'Permintaan seed phrase atau private key adalah tanda berhenti.',siteTitle:'Sebelum login',siteDesc:'Bandingkan sumber resmi, domain, permintaan, dan tekanan.',labels:['Alamat','Jaringan','Memo','Tes kecil','Cek akhir'],seed:['Seed phrase','Private key','Layar pemulihan','DM support'],site:['Sumber resmi','Ejaan domain','Permintaan wallet','Urgensi']},
      pt:{kicker:'Cheque visual rapido',note:'Veja este cartao primeiro e depois leia o checklist abaixo.',beforeTitle:'Antes de enviar',beforeDesc:'Endereco, rede, memo, teste pequeno e revisao final.',seedTitle:'Antes de digitar segredos',seedDesc:'Pedidos de seed phrase ou chave privada sao sinal de parar.',siteTitle:'Antes de entrar',siteDesc:'Compare fonte oficial, dominio, pedido e pressa.',labels:['Endereco','Rede','Memo','Teste pequeno','Revisao final'],seed:['Seed phrase','Chave privada','Tela de recuperacao','DM de suporte'],site:['Fonte oficial','Grafia do dominio','Pedido da wallet','Urgencia']},
      tr:{kicker:'Hizli gorsel kontrol',note:'Once bu karti tara, sonra asagidaki kontrol listesini oku.',beforeTitle:'Gondermeden once',beforeDesc:'Adres, ag, memo, kucuk test ve son kontrol.',seedTitle:'Gizli bilgi yazmadan once',seedDesc:'Seed phrase veya private key istegi dur isaretidir.',siteTitle:'Giris yapmadan once',siteDesc:'Resmi kaynak, domain, istek ve baskiyi karsilastir.',labels:['Adres','Ag','Memo','Kucuk test','Son kontrol'],seed:['Seed phrase','Private key','Kurtarma ekrani','Destek DM'],site:['Resmi kaynak','Domain yazimi','Wallet istegi','Acele baskisi']},
      es:{kicker:'Chequeo visual rapido',note:'Mira esta tarjeta primero y luego lee el checklist de abajo.',beforeTitle:'Antes de enviar',beforeDesc:'Direccion, red, memo, prueba pequena y revision final.',seedTitle:'Antes de escribir secretos',seedDesc:'Pedir seed phrase o private key es una senal de alto.',siteTitle:'Antes de iniciar sesion',siteDesc:'Compara fuente oficial, dominio, solicitud y presion.',labels:['Direccion','Red','Memo','Prueba pequena','Revision final'],seed:['Seed phrase','Private key','Pantalla de recuperacion','DM soporte'],site:['Fuente oficial','Dominio escrito','Solicitud wallet','Urgencia']},
      ar:{kicker:'فحص بصري سريع',note:'افحص هذه البطاقة أولاً، ثم اقرأ القائمة أدناه.',beforeTitle:'قبل الإرسال',beforeDesc:'العنوان، الشبكة، المذكرة، اختبار صغير، فحص نهائي.',seedTitle:'قبل كتابة الأسرار',seedDesc:'طلب عبارة الاسترداد أو المفتاح الخاص يعني توقف فوراً.',siteTitle:'قبل تسجيل الدخول',siteDesc:'قارن المصدر الرسمي، النطاق، الطلب، والضغط.',labels:['العنوان','الشبكة','المذكرة','اختبار صغير','فحص نهائي'],seed:['عبارة الاسترداد','المفتاح الخاص','شاشة الاسترداد','رسالة دعم'],site:['مصدر رسمي','تهجئة النطاق','طلب المحفظة','الاستعجال']},
      vi:{kicker:'Kiểm tra nhanh bằng hình',note:'Xem thẻ này trước, rồi đọc checklist bên dưới.',beforeTitle:'Trước khi gửi',beforeDesc:'Địa chỉ, mạng, memo, gửi thử nhỏ và kiểm tra cuối.',seedTitle:'Trước khi nhập bí mật',seedDesc:'Yêu cầu seed phrase hoặc private key là tín hiệu dừng.',siteTitle:'Trước khi đăng nhập',siteDesc:'So sánh nguồn chính thức, tên miền, yêu cầu và áp lực.',labels:['Địa chỉ','Mạng','Memo','Gửi thử','Kiểm tra cuối'],seed:['Seed phrase','Private key','Màn hình khôi phục','DM hỗ trợ'],site:['Nguồn chính thức','Chính tả domain','Yêu cầu ví','Sự khẩn cấp']},
      ha:{kicker:'Saurin dubawa da hoto',note:'Duba wannan kati da farko, sannan karanta checklist a kasa.',beforeTitle:'Kafin aika',beforeDesc:'Adireshi, network, memo, karamin gwaji, dubawa ta karshe.',seedTitle:'Kafin rubuta sirri',seedDesc:'Neman seed phrase ko private key alamar tsayawa ce.',siteTitle:'Kafin login',siteDesc:'Kwatanta tushe na hukuma, domain, bukata, da matsin lamba.',labels:['Adireshi','Network','Memo','Karamin gwaji','Duba karshe'],seed:['Seed phrase','Private key','Allon recovery','DM support'],site:['Tushe na hukuma','Rubutun domain','Neman wallet','Gaggawa']}
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function buildChecklistVisual(key, requestedLang){
    var pack = getChecklistVisualPack(requestedLang);
    var title = key === 'seed-phrase' ? pack.seedTitle : key === 'fake-website' ? pack.siteTitle : pack.beforeTitle;
    var desc = key === 'seed-phrase' ? pack.seedDesc : key === 'fake-website' ? pack.siteDesc : pack.beforeDesc;
    var items = key === 'seed-phrase' ? pack.seed : key === 'fake-website' ? pack.site : pack.labels;
    return ''
      + '<section class="check-visual-panel" aria-label="' + escapeHtml(pack.kicker) + '">'
      +   '<div class="check-visual-head"><span>' + escapeHtml(pack.kicker) + '</span><strong>' + escapeHtml(title) + '</strong><p>' + escapeHtml(desc) + '</p></div>'
      +   '<div class="check-visual-flow">'
      +     items.map(function(item, index){
              return '<div class="check-visual-step"><b>' + String(index + 1).padStart(2, '0') + '</b><span>' + escapeHtml(item) + '</span></div>';
            }).join('')
      +   '</div>'
      +   '<p class="check-visual-note">' + escapeHtml(pack.note) + '</p>'
      + '</section>';
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
            title: page.title + ' | Coin ProofPath',
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
      +   buildChecklistHero(key, requestedLang, pack, page, cta)
      +   buildChecklistVisual(key, requestedLang)
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
