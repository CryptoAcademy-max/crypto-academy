(function(){
  if(typeof window === 'undefined' || window.__sourceLibraryStructure20260419) return;
  window.__sourceLibraryStructure20260419 = true;

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
  var PREMIUM_LINKS = {
    en:'https://buymeacoffee.com/beenetworkkorea/e/528650',
    ko:'https://buymeacoffee.com/beenetworkkorea/e/528662'
  };
  var AVAILABLE_PREMIUM_LINKS = [
    { key:'guide1', href:'https://buymeacoffee.com/BeeNetworkKorea/e/532817' },
    { key:'guide2', href:'https://buymeacoffee.com/BeeNetworkKorea/e/532815' }
  ];
  var GROUP_ORDER = ['beginner','safety','wallet','freepdf','premium','cryptoebook','official'];
  var OFFICIAL_PUBLISHERS = ['FTC','SEC','FSB','ECB','BIS','MetaMask','Coinbase','Ledger','Trezor','Etherscan','Binance Academy'];
  var OFFICIAL_DOMAINS = ['consumer.ftc.gov','support.metamask.io','www.coinbase.com','www.ledger.com','academy.binance.com','info.etherscan.com','www.sec.gov','www.ecb.europa.eu','www.bis.org','www.fsb.org','trezor.io'];

  function baseLang(lang){
    var value = lang || (typeof currentLang === 'string' && currentLang ? currentLang : 'en');
    return value === 'br' ? 'pt' : value;
  }

  var PACK = {};
  PACK.en = {
    sections:{
      beginner:{title:'Beginner Basics', desc:'Blockchain basics, token structure, and easy explainers for your foundation.'},
      safety:{title:'Safety / Scam Prevention', desc:'Fake websites, seed phrases, address poisoning, and practical warning references.'},
      wallet:{title:'Wallet / Transfers', desc:'Wallet setup, custody choices, network checks, and safer transfer habits.'},
      freepdf:{title:'Free PDF Guides', desc:'Short downloadable guides you can reopen before your next action.'},
      premium:{title:'Premium Guides', desc:'Longer guidebooks for deeper beginner study, kept separate from the free materials.'},
      official:{title:'Official References', desc:'Official or primary references worth checking when you want the original source.'}
    },
    tags:{beginner:'Beginner', safety:'Safety', wallet:'Wallet', pdf:'PDF Guide', free:'Free', premium:'Premium', official:'Official'},
    whyLabel:'Why this matters',
    meta:{pdf:'PDF Guide', premium:'Premium Guide'},
    pdf6:{title:'Free PDF Checklist', body:'Beginner checklist for a first crypto purchase, kept in a simple downloadable format.', why:'Useful when you want a short checklist before buying again.'},
    pdf7:{title:'Scam Prevention PDF Guide', body:'Warning-sign guide for fake websites, seed phrases, address poisoning, and rushed decisions.', why:'Good for reviewing practical scam warnings before clicking, connecting, or sending.'},
    premiumCard:{title:'Premium PDF Guidebooks', body:'If you want something more detailed than a quick checklist, you can open the longer beginner guidebook editions here.', extra:'English and Korean editions are available now. More language editions can be added later.', english:'English Edition', korean:'Korean Edition'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.ko = {
    sections:{
      beginner:{title:'초보 기초 자료', desc:'블록체인 기초, 토큰 구조, 쉬운 설명 자료를 먼저 모아둔 섹션입니다.'},
      safety:{title:'보안 / 사기 예방', desc:'가짜 사이트, 시드 문구, 주소 오염 공격, 실전 경고 자료를 먼저 보기 좋게 정리했습니다.'},
      wallet:{title:'지갑 / 전송', desc:'지갑 사용, 커스터디 선택, 네트워크 확인, 전송 습관 관련 자료를 모았습니다.'},
      freepdf:{title:'무료 PDF 가이드', desc:'다음 행동 전에 다시 열어볼 수 있는 짧은 무료 PDF 자료입니다.'},
      premium:{title:'프리미엄 가이드', desc:'무료 자료와 구분해서 더 자세한 입문용 가이드북을 모아두는 섹션입니다.'},
      official:{title:'공식 참고자료', desc:'원문 기준으로 다시 확인하고 싶을 때 보기 좋은 공식·1차 참고자료입니다.'}
    },
    tags:{beginner:'기초', safety:'보안', wallet:'지갑', pdf:'PDF', free:'무료', premium:'프리미엄', official:'공식'},
    whyLabel:'왜 중요한가',
    meta:{pdf:'PDF 가이드', premium:'프리미엄 가이드'},
    pdf6:{title:'무료 PDF 체크리스트', body:'첫 암호화폐 구매 전에 다시 열어볼 수 있는 초보자용 안전 체크리스트입니다.', why:'다시 구매하기 전에 핵심만 짧게 점검하고 싶을 때 유용합니다.'},
    pdf7:{title:'사기 예방 PDF 가이드', body:'가짜 사이트, 시드 문구, 주소 오염 공격, 성급한 클릭을 다시 점검하는 PDF 가이드입니다.', why:'클릭, 연결, 전송 전에 실전 경고 신호를 짧게 복습하기 좋습니다.'},
    premiumCard:{title:'프리미엄 PDF 가이드북', body:'빠른 체크리스트보다 더 자세한 초보자용 정리 자료를 보고 싶다면 여기에서 확장판 가이드북을 볼 수 있습니다.', extra:'현재는 영어판과 한국어판이 준비되어 있고, 다른 언어판은 순차적으로 추가될 수 있습니다.', english:'영어판 보기', korean:'한국어판 보기'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'크립토 아카데미'
  };
  PACK.th = {
    sections:{
      beginner:{title:'พื้นฐานสำหรับผู้เริ่มต้น', desc:'รวมพื้นฐานบล็อกเชน โครงสร้างโทเคน และคำอธิบายง่าย ๆ สำหรับผู้เริ่มต้น.'},
      safety:{title:'ความปลอดภัย / ป้องกันสแกม', desc:'รวมแหล่งอ้างอิงเรื่องเว็บปลอม seed phrase address poisoning และสัญญาณเตือนที่ใช้ได้จริง.'},
      wallet:{title:'วอลเล็ต / การโอน', desc:'รวมเรื่องการใช้วอลเล็ต การดูแลสินทรัพย์ การเช็กเครือข่าย และนิสัยการโอนที่ปลอดภัยกว่า.'},
      freepdf:{title:'คู่มือ PDF ฟรี', desc:'ไฟล์ PDF สั้น ๆ ที่ดาวน์โหลดไว้เปิดทบทวนได้ก่อนลงมือจริง.'},
      premium:{title:'คู่มือพรีเมียม', desc:'แยกพื้นที่สำหรับคู่มือฉบับละเอียดกว่า โดยไม่ปนกับเนื้อหาฟรี.'},
      official:{title:'แหล่งอ้างอิงทางการ', desc:'รวมแหล่งข้อมูลทางการหรือแหล่งต้นฉบับที่ควรดูเมื่ออยากตรวจข้อมูลจากต้นทาง.'}
    },
    tags:{beginner:'พื้นฐาน', safety:'ความปลอดภัย', wallet:'วอลเล็ต', pdf:'PDF', free:'ฟรี', premium:'พรีเมียม', official:'ทางการ'},
    whyLabel:'ทำไมจึงสำคัญ',
    meta:{pdf:'คู่มือ PDF', premium:'คู่มือพรีเมียม'},
    pdf6:{title:'เช็กลิสต์ PDF ฟรี', body:'เช็กลิสต์สั้นสำหรับผู้เริ่มต้นก่อนซื้อคริปโตครั้งแรกในรูปแบบดาวน์โหลดได้.', why:'เหมาะเมื่ออยากทบทวนจุดสำคัญสั้น ๆ ก่อนซื้ออีกครั้ง.'},
    pdf7:{title:'คู่มือ PDF ป้องกันสแกม', body:'คู่มือเตือนภัยเกี่ยวกับเว็บปลอม seed phrase address poisoning และการตัดสินใจแบบรีบเร่ง.', why:'ช่วยทบทวนสัญญาณเตือนก่อนคลิก เชื่อมต่อ หรือส่งเงิน.'},
    premiumCard:{title:'คู่มือ PDF แบบพรีเมียม', body:'ถ้าคุณต้องการคู่มือสำหรับผู้เริ่มต้นที่ละเอียดกว่ารายการเช็กสั้น ๆ คุณสามารถเปิดฉบับขยายได้ที่นี่.', extra:'ตอนนี้มีฉบับภาษาอังกฤษและภาษาเกาหลีแล้ว และภาษาอื่นสามารถเพิ่มภายหลังได้.', english:'เปิดฉบับอังกฤษ', korean:'เปิดฉบับเกาหลี'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.id = {
    sections:{
      beginner:{title:'Dasar Pemula', desc:'Dasar blockchain, struktur token, dan penjelasan sederhana untuk membangun fondasi awal.'},
      safety:{title:'Keamanan / Pencegahan Scam', desc:'Situs palsu, seed phrase, address poisoning, dan referensi tanda bahaya yang praktis.'},
      wallet:{title:'Wallet / Transfer', desc:'Penggunaan wallet, pilihan custody, pengecekan jaringan, dan kebiasaan transfer yang lebih aman.'},
      freepdf:{title:'Panduan PDF Gratis', desc:'Panduan PDF singkat yang bisa Anda buka lagi sebelum langkah berikutnya.'},
      premium:{title:'Panduan Premium', desc:'Guidebook yang lebih panjang dipisahkan dengan jelas dari materi gratis.'},
      official:{title:'Referensi Resmi', desc:'Sumber resmi atau sumber utama untuk saat Anda ingin memeriksa penjelasan aslinya.'}
    },
    tags:{beginner:'Dasar', safety:'Keamanan', wallet:'Wallet', pdf:'PDF', free:'Gratis', premium:'Premium', official:'Resmi'},
    whyLabel:'Mengapa ini penting',
    meta:{pdf:'Panduan PDF', premium:'Panduan Premium'},
    pdf6:{title:'Checklist PDF Gratis', body:'Checklist singkat untuk pembelian crypto pertama dalam format PDF yang mudah disimpan.', why:'Membantu saat Anda ingin meninjau poin inti dengan cepat sebelum membeli lagi.'},
    pdf7:{title:'Panduan PDF Anti-Scam', body:'Panduan tanda bahaya untuk situs palsu, seed phrase, address poisoning, dan keputusan yang terburu-buru.', why:'Bagus untuk meninjau ulang peringatan scam sebelum klik, menghubungkan wallet, atau mengirim dana.'},
    premiumCard:{title:'Guidebook PDF Premium', body:'Jika Anda ingin materi pemula yang lebih rinci daripada checklist singkat, Anda bisa membuka guidebook versi panjang di sini.', extra:'Edisi bahasa Inggris dan Korea sudah tersedia. Bahasa lain bisa ditambahkan nanti.', english:'Lihat Edisi Inggris', korean:'Lihat Edisi Korea'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.pt = {
    sections:{
      beginner:{title:'Base para Iniciantes', desc:'Fundamentos de blockchain, estrutura dos tokens e explicações simples para construir a base.'},
      safety:{title:'Segurança / Prevenção de Golpes', desc:'Sites falsos, seed phrase, envenenamento de endereço e referências práticas de alerta.'},
      wallet:{title:'Carteiras / Transferências', desc:'Uso de carteiras, escolhas de custódia, verificação de rede e hábitos de envio mais seguros.'},
      freepdf:{title:'Guias PDF Gratuitos', desc:'Guias curtos em PDF para baixar e reabrir antes do próximo passo.'},
      premium:{title:'Guias Premium', desc:'Guias mais detalhados para iniciantes, separados com clareza do material gratuito.'},
      official:{title:'Referências Oficiais', desc:'Fontes oficiais ou primárias para quando você quiser conferir a orientação original.'}
    },
    tags:{beginner:'Base', safety:'Segurança', wallet:'Carteira', pdf:'PDF', free:'Grátis', premium:'Premium', official:'Oficial'},
    whyLabel:'Por que isso importa',
    meta:{pdf:'Guia PDF', premium:'Guia Premium'},
    pdf6:{title:'Checklist PDF Gratuito', body:'Checklist curto para a primeira compra de cripto em um formato fácil de baixar.', why:'Útil quando você quer revisar os pontos principais antes de comprar novamente.'},
    pdf7:{title:'Guia PDF de Prevenção de Golpes', body:'Guia de alertas sobre sites falsos, seed phrase, envenenamento de endereço e decisões apressadas.', why:'Bom para revisar sinais práticos de golpe antes de clicar, conectar ou enviar.'},
    premiumCard:{title:'Guias PDF Premium', body:'Se você quer algo mais detalhado do que um checklist rápido, pode abrir aqui as edições estendidas do guia para iniciantes.', extra:'As edições em inglês e coreano já estão disponíveis. Outras línguas podem ser adicionadas depois.', english:'Ver edição em inglês', korean:'Ver edição em coreano'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.tr = {
    sections:{
      beginner:{title:'Yeni Başlayan Temelleri', desc:'Temel altyapıyı kurmak için blockchain temelleri, token yapısı ve sade açıklamalar.'},
      safety:{title:'Güvenlik / Dolandırıcılığı Önleme', desc:'Sahte siteler, seed phrase, address poisoning ve pratik uyarı kaynakları.'},
      wallet:{title:'Cüzdan / Transferler', desc:'Cüzdan kullanımı, saklama tercihleri, ağ kontrolleri ve daha güvenli transfer alışkanlıkları.'},
      freepdf:{title:'Ücretsiz PDF Rehberleri', desc:'Bir sonraki adımınızdan önce yeniden açabileceğiniz kısa indirilebilir PDF rehberleri.'},
      premium:{title:'Premium Rehberler', desc:'Ücretsiz materyallerden ayrı tutulan daha detaylı başlangıç rehberleri.'},
      official:{title:'Resmi Kaynaklar', desc:'Orijinal kaynağı görmek istediğinizde başvurabileceğiniz resmi veya birincil referanslar.'}
    },
    tags:{beginner:'Temel', safety:'Güvenlik', wallet:'Cüzdan', pdf:'PDF', free:'Ücretsiz', premium:'Premium', official:'Resmi'},
    whyLabel:'Neden önemli',
    meta:{pdf:'PDF Rehberi', premium:'Premium Rehber'},
    pdf6:{title:'Ucretsiz PDF Kontrol Listesi', body:'Ilk kripto alimi icin kisa ve indirilebilir bir baslangic kontrol listesi.', why:'Tekrar satin almadan once ana noktalari hizlica gozden gecirmek icin faydalidir.'},
    pdf7:{title:'Dolandiricilik Onleme PDF Rehberi', body:'Sahte siteler, seed phrase, address poisoning ve acele kararlar icin uyari rehberi.', why:'Tiklamadan, baglanmadan veya gondermeden once pratik uyari isaretlerini yeniden gormek icin iyidir.'},
    premiumCard:{title:'Premium PDF Rehberleri', body:'Hizli bir kontrol listesinden daha ayrintili bir baslangic rehberi istiyorsaniz uzun rehber surumlerini burada acabilirsiniz.', extra:'Su anda Ingilizce ve Korece surumler mevcut. Diger dil surumleri daha sonra eklenebilir.', english:'Ingilizce surum', korean:'Korece surum'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.es = {
    sections:{
      beginner:{title:'Base para Principiantes', desc:'Fundamentos de blockchain, estructura de tokens y explicaciones simples para construir la base.'},
      safety:{title:'Seguridad / Prevención de Estafas', desc:'Sitios falsos, seed phrase, envenenamiento de direcciones y referencias prácticas de alerta.'},
      wallet:{title:'Billeteras / Transferencias', desc:'Uso de wallets, decisiones de custodia, revisión de redes y hábitos de envío más seguros.'},
      freepdf:{title:'Guías PDF Gratis', desc:'Guías PDF cortas para volver a abrir antes del siguiente paso.'},
      premium:{title:'Guías Premium', desc:'Guías más detalladas para principiantes, separadas con claridad del material gratuito.'},
      official:{title:'Referencias Oficiales', desc:'Fuentes oficiales o primarias para cuando quieras revisar la explicación original.'}
    },
    tags:{beginner:'Base', safety:'Seguridad', wallet:'Billetera', pdf:'PDF', free:'Gratis', premium:'Premium', official:'Oficial'},
    whyLabel:'Por qué importa',
    meta:{pdf:'Guía PDF', premium:'Guía Premium'},
    pdf6:{title:'Checklist PDF Gratis', body:'Checklist corto para una primera compra de cripto en formato descargable.', why:'Útil cuando quieres repasar los puntos clave antes de volver a comprar.'},
    pdf7:{title:'Guía PDF para Evitar Estafas', body:'Guía de señales de alerta sobre sitios falsos, seed phrase, envenenamiento de direcciones y decisiones apresuradas.', why:'Sirve para repasar advertencias prácticas antes de hacer clic, conectar o enviar.'},
    premiumCard:{title:'Guías PDF Premium', body:'Si quieres algo más detallado que un checklist rápido, aquí puedes abrir las ediciones extendidas de la guía para principiantes.', extra:'Las ediciones en inglés y coreano ya están disponibles. Más idiomas pueden añadirse después.', english:'Ver edición en inglés', korean:'Ver edición en coreano'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.ar = {
    sections:{
      beginner:{title:'أساسيات للمبتدئ', desc:'أساسيات البلوكتشين وبنية التوكنات وشروح بسيطة لبناء القاعدة الأولى.'},
      safety:{title:'الأمان / منع الاحتيال', desc:'مراجع عن المواقع المزيفة وseed phrase وتسميم العناوين وإشارات التحذير العملية.'},
      wallet:{title:'المحفظة / التحويلات', desc:'استخدام المحافظ وخيارات الحضانة وفحص الشبكة وعادات التحويل الأكثر أماناً.'},
      freepdf:{title:'أدلة PDF مجانية', desc:'أدلة PDF قصيرة يمكن فتحها من جديد قبل أي خطوة مهمة.'},
      premium:{title:'أدلة مدفوعة', desc:'أدلة أكثر تفصيلاً للمبتدئ مع فصل واضح بينها وبين المواد المجانية.'},
      official:{title:'مراجع رسمية', desc:'مصادر رسمية أو أولية مفيدة عندما تريد الرجوع إلى التوجيه الأصلي.'}
    },
    tags:{beginner:'أساسيات', safety:'أمان', wallet:'محفظة', pdf:'PDF', free:'مجاني', premium:'مدفوع', official:'رسمي'},
    whyLabel:'لماذا هذا مهم',
    meta:{pdf:'دليل PDF', premium:'دليل مدفوع'},
    pdf6:{title:'قائمة PDF مجانية', body:'قائمة قصيرة قابلة للتنزيل لمراجعة أول عملية شراء للعملات الرقمية.', why:'مفيدة عندما تريد مراجعة النقاط الأساسية بسرعة قبل الشراء مرة أخرى.'},
    pdf7:{title:'دليل PDF لمنع الاحتيال', body:'دليل لإشارات التحذير الخاصة بالمواقع المزيفة وseed phrase وتسميم العناوين والقرارات المتسرعة.', why:'مفيد لمراجعة التحذيرات العملية قبل النقر أو الربط أو الإرسال.'},
    premiumCard:{title:'أدلة PDF مدفوعة', body:'إذا كنت تريد دليلاً أكثر تفصيلاً من قائمة سريعة، يمكنك فتح النسخ المطولة من دليل المبتدئين هنا.', extra:'الإصداران الإنجليزي والكوري متاحان الآن، ويمكن إضافة لغات أخرى لاحقاً.', english:'عرض النسخة الإنجليزية', korean:'عرض النسخة الكورية'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.vi = {
    sections:{
      beginner:{title:'Nen tang cho Nguoi Moi', desc:'Nen tang blockchain, cau truc token va giai thich don gian de xay dung phan co ban.'},
      safety:{title:'An Toan / Chong Lua Dao', desc:'Tai lieu ve trang gia, seed phrase, dau doc dia chi va cac dau hieu canh bao thuc te.'},
      wallet:{title:'Vi / Chuyen tien', desc:'Su dung vi, lua chon luu ky, kiem tra mang va thoi quen chuyen tien an toan hon.'},
      freepdf:{title:'Huong Dan PDF Mien Phi', desc:'Cac file PDF ngan co the mo lai truoc buoc hanh dong tiep theo.'},
      premium:{title:'Huong Dan Premium', desc:'Huong dan chi tiet hon cho nguoi moi, duoc tach ro khoi tai lieu mien phi.'},
      official:{title:'Nguon Tham Khao Chinh Thuc', desc:'Nguon chinh thuc hoac nguon goc de tham khao khi ban muon doc ban goc.'}
    },
    tags:{beginner:'Nen tang', safety:'An toan', wallet:'Vi', pdf:'PDF', free:'Mien phi', premium:'Premium', official:'Chinh thuc'},
    whyLabel:'Vi sao quan trong',
    meta:{pdf:'Huong dan PDF', premium:'Huong dan Premium'},
    pdf6:{title:'Checklist PDF Mien Phi', body:'Checklist ngan cho lan mua crypto dau tien o dang PDF de luu lai.', why:'Huu ich khi ban muon xem nhanh cac diem chinh truoc khi mua lai.'},
    pdf7:{title:'Huong Dan PDF Chong Lua Dao', body:'Huong dan dau hieu canh bao ve trang gia, seed phrase, dau doc dia chi va cac quyet dinh vo vang.', why:'Tot de xem lai canh bao thuc te truoc khi bam, ket noi hoac gui tien.'},
    premiumCard:{title:'Guidebook PDF Premium', body:'Neu ban muon mot tai lieu chi tiet hon checklist nhanh, ban co the mo cac ban guidebook mo rong tai day.', extra:'Hien da co ban tieng Anh va tieng Han. Cac ngon ngu khac co the duoc bo sung sau.', english:'Xem ban tieng Anh', korean:'Xem ban tieng Han'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.ha = {
    sections:{
      beginner:{title:'Asalin Mai Farawa', desc:'Asalin blockchain, tsarin tokan, da bayanai masu sauki domin gina tushe ga mai farawa.'},
      safety:{title:'Tsaro / Kariya daga Damfara', desc:'Madogara kan shafukan bogi, seed phrase, gurbata adireshi, da alamun gargadin da ake bukata.'},
      wallet:{title:'Walat / Tura Kudi', desc:'Amfani da walat, zabin custody, duba network, da halayen tura kudi masu karin tsaro.'},
      freepdf:{title:'Jagororin PDF Kyauta', desc:'Takaitattun PDF da za ka iya bude su kuma ka sake dubawa kafin mataki na gaba.'},
      premium:{title:'Jagororin Premium', desc:'Jagorori masu karin bayani ga mai farawa, an ware su dabam da kayan kyauta.'},
      official:{title:'Madogarorin Hukuma', desc:'Madogarorin hukuma ko na asali da suka dace idan kana son komawa ga bayanin tushe.'}
    },
    tags:{beginner:'Asali', safety:'Tsaro', wallet:'Walat', pdf:'PDF', free:'Kyauta', premium:'Premium', official:'Hukuma'},
    whyLabel:'Dalilin muhimmanci',
    meta:{pdf:'Jagorar PDF', premium:'Jagorar Premium'},
    pdf6:{title:'Jerin Dubawa na PDF Kyauta', body:'Takaitaccen PDF don duba sayen crypto na farko cikin sauki.', why:'Yana da amfani idan kana son saurin duba muhimman abubuwa kafin ka sake saya.'},
    pdf7:{title:'Jagorar PDF ta Kariya daga Damfara', body:'Jagorar alamun gargadi kan shafukan bogi, seed phrase, gurbata adireshi, da yanke shawara cikin gaggawa.', why:'Ya dace domin sake duba gargadin damfara kafin danna, hada walat, ko aika kudi.'},
    premiumCard:{title:'Jagororin PDF Premium', body:'Idan kana son wani abu da ya fi checklist gajere bayani sosai, za ka iya bude tsawaitattun guidebook na masu farawa a nan.', extra:'A yanzu akwai sigar Turanci da Koriya. Ana iya kara wasu harsuna daga baya.', english:'Duba sigar Turanci', korean:'Duba sigar Koriya'},
    lesson6Label:'Lesson 6',
    lesson7Label:'Lesson 7',
    brand:'Crypto Academy'
  };
  PACK.br = PACK.pt;

  var AVAILABLE_PREMIUM_GUIDE_PACKS = {
    en:{
      section:{title:'Crypto Academy eBook', desc:'Crypto Academy eBooks designed to help beginners review the site lessons in a more focused and structured way.'},
      card1Title:'Crypto Academy eBook (English Edition)',
      card2Title:'Crypto Academy eBook (Korean Edition)',
      card1Body:'Crypto Academy eBook in English',
      card2Body:'Crypto Academy eBook in Korean',
      button:'View eBook'
    },
    ko:{
      section:{title:'크립토 아카데미 전자책', desc:'초보자가 사이트 강의와 함께 더 깊이 복습할 수 있도록 정리한 크립토 아카데미 전자책입니다.'},
      card1Title:'영문 크립토 아카데미 전자책',
      card2Title:'한글 크립토 아카데미 전자책',
      card1Body:'영어로 읽는 크립토 아카데미 전자책',
      card2Body:'한국어로 읽는 크립토 아카데미 전자책',
      button:'전자책 보기'
    },
    th:{
      section:{title:'Crypto Academy eBook', desc:'eBook ของ Crypto Academy ที่ช่วยให้ผู้เริ่มต้นเข้าใจแนวคิดคริปโตหลักและการใช้งานจริงได้เป็นระบบมากขึ้น'},
      card1Title:'Crypto Academy eBook (ฉบับภาษาอังกฤษ)',
      card2Title:'Crypto Academy eBook (ฉบับภาษาเกาหลี)',
      card1Body:'Crypto Academy eBook ภาษาอังกฤษ',
      card2Body:'Crypto Academy eBook ภาษาเกาหลี',
      button:'ดู eBook'
    },
    id:{
      section:{title:'Crypto Academy eBook', desc:'Crypto Academy eBooks dirancang untuk membantu pemula memahami konsep inti crypto dan penggunaan praktis di dunia nyata dengan alur yang lebih terstruktur.'},
      card1Title:'Crypto Academy eBook (Edisi Bahasa Inggris)',
      card2Title:'Crypto Academy eBook (Edisi Bahasa Korea)',
      card1Body:'Crypto Academy eBook dalam bahasa Inggris',
      card2Body:'Crypto Academy eBook dalam bahasa Korea',
      button:'Lihat eBook'
    },
    pt:{
      section:{title:'Crypto Academy eBook', desc:'eBooks da Crypto Academy pensados para ajudar iniciantes a entender os conceitos centrais de crypto e o uso pratico com uma estrutura mais clara.'},
      card1Title:'Crypto Academy eBook (Edicao em ingles)',
      card2Title:'Crypto Academy eBook (Edicao em coreano)',
      card1Body:'Crypto Academy eBook em ingles',
      card2Body:'Crypto Academy eBook em coreano',
      button:'Ver eBook'
    },
    tr:{
      section:{title:'Crypto Academy eBook', desc:'Yeni baslayanlarin temel crypto kavramlarini ve gercek dunyadaki kullanim akisini daha duzenli anlamasina yardim eden Crypto Academy eBook serisi.'},
      card1Title:'Crypto Academy eBook (Ingilizce Surum)',
      card2Title:'Crypto Academy eBook (Korece Surum)',
      card1Body:'Ingilizce Crypto Academy eBook',
      card2Body:'Korece Crypto Academy eBook',
      button:'eBook\u0027u Gor'
    },
    es:{
      section:{title:'Crypto Academy eBook', desc:'eBooks de Crypto Academy pensados para ayudar a principiantes a entender los conceptos centrales de crypto y su uso practico de una manera mas estructurada.'},
      card1Title:'Crypto Academy eBook (Edicion en Ingles)',
      card2Title:'Crypto Academy eBook (Edicion en Coreano)',
      card1Body:'Crypto Academy eBook en ingles',
      card2Body:'Crypto Academy eBook en coreano',
      button:'Ver eBook'
    },
    ar:{
      section:{title:'Crypto Academy eBook', desc:'كتب Crypto Academy الإلكترونية مصممة لمساعدة المبتدئين على فهم مفاهيم الكريبتو الأساسية والاستخدام العملي بشكل أكثر تنظيماً.'},
      card1Title:'Crypto Academy eBook (النسخة الإنجليزية)',
      card2Title:'Crypto Academy eBook (النسخة الكورية)',
      card1Body:'كتاب Crypto Academy الإلكتروني باللغة الإنجليزية',
      card2Body:'كتاب Crypto Academy الإلكتروني باللغة الكورية',
      button:'عرض الكتاب'
    },
    vi:{
      section:{title:'Crypto Academy eBook', desc:'Crypto Academy eBooks giup nguoi moi hieu ro hon cac khai niem crypto cot loi va cach ap dung thuc te theo mot cau truc de theo doi hon.'},
      card1Title:'Crypto Academy eBook (Ban tieng Anh)',
      card2Title:'Crypto Academy eBook (Ban tieng Han)',
      card1Body:'Crypto Academy eBook bang tieng Anh',
      card2Body:'Crypto Academy eBook bang tieng Han',
      button:'Xem eBook'
    },
    ha:{
      section:{title:'Crypto Academy eBook', desc:'Crypto Academy eBooks da aka shirya domin taimaka wa mai farawa ya fahimci muhimman ka' + "'" + 'idojin crypto da yadda ake amfani da su a zahiri cikin tsari mafi kyau.'},
      card1Title:'Crypto Academy eBook (Sigar Turanci)',
      card2Title:'Crypto Academy eBook (Sigar Koriya)',
      card1Body:'Crypto Academy eBook a Turanci',
      card2Body:'Crypto Academy eBook a Koriya',
      button:'Duba eBook'
    }
  };
  var EBOOK_SECTION_EXTRAS = {
    en:{
      sectionNote:'Useful if you want a more organized follow-up after studying the lessons on the site.',
      previewPoints:[
        'Understand core concepts in a more structured way',
        'Review the full first-buy and transfer flow in one place',
        'Learn practical checks to reduce wallet, address, and network mistakes',
        'Build a deeper understanding of scam prevention and safety signals'
      ]
    },
    ko:{
      sectionNote:'사이트에서 배운 내용을 더 정리된 흐름으로 이어서 보고 싶을 때 적합합니다.',
      previewPoints:[
        '핵심 개념을 더 체계적으로 정리할 수 있습니다',
        '첫 구매와 전송 흐름을 한 번에 복습할 수 있습니다',
        '지갑, 주소, 네트워크 실수를 줄이는 기준을 익힐 수 있습니다',
        '사기 예방과 보안 흐름을 더 깊이 이해할 수 있습니다'
      ]
    },
    th:{
      sectionNote:'เหมาะเมื่อคุณต้องการทบทวนสิ่งที่เรียนจากเว็บไซต์ในลำดับที่จัดระเบียบมากขึ้น',
      previewPoints:[
        'เข้าใจแนวคิดหลักแบบเป็นระบบมากขึ้น',
        'ทบทวนขั้นตอนซื้อครั้งแรกและการโอนในที่เดียว',
        'เรียนรู้จุดตรวจเพื่อลดความผิดพลาดเรื่องกระเป๋า ที่อยู่ และเครือข่าย',
        'เข้าใจสัญญาณเสี่ยงและการป้องกันสแกมให้ลึกขึ้น'
      ]
    },
    id:{
      sectionNote:'Cocok jika Anda ingin tindak lanjut yang lebih rapi setelah mempelajari pelajaran di situs ini.',
      previewPoints:[
        'Memahami konsep inti dengan alur yang lebih terstruktur',
        'Meninjau alur pembelian pertama dan transfer di satu tempat',
        'Mempelajari pemeriksaan praktis untuk mengurangi kesalahan wallet, alamat, dan jaringan',
        'Membangun pemahaman yang lebih dalam tentang pencegahan scam dan sinyal keamanan'
      ]
    },
    pt:{
      sectionNote:'Util se voce quiser uma continuacao mais organizada depois de estudar as licoes do site.',
      previewPoints:[
        'Entenda os conceitos centrais de forma mais organizada',
        'Revise em um so lugar o fluxo de primeira compra e transferencia',
        'Aprenda verificacoes praticas para reduzir erros de carteira, endereco e rede',
        'Aprofunde a compreensao sobre prevencao de golpes e sinais de risco'
      ]
    },
    tr:{
      sectionNote:'Sitedeki derslerden sonra daha duzenli bir takip materyali istiyorsaniz faydalidir.',
      previewPoints:[
        'Temel kavramlari daha duzenli bir sekilde anlayin',
        'Ilk alim ve transfer akisini tek yerde gozden gecirin',
        'Cuzdan, adres ve ag hatalarini azaltan pratik kontrolleri ogrenin',
        'Dolandiricilik onleme ve guvenlik sinyallerini daha derin anlayin'
      ]
    },
    es:{
      sectionNote:'Util si quieres una continuacion mas ordenada despues de estudiar las lecciones del sitio.',
      previewPoints:[
        'Entender los conceptos clave de una forma mas estructurada',
        'Revisar en un solo lugar el flujo completo de primera compra y transferencia',
        'Aprender verificaciones practicas para reducir errores de wallet, direccion y red',
        'Profundizar en la prevencion de estafas y las senales de seguridad'
      ]
    },
    ar:{
      sectionNote:'مفيد إذا كنت تريد متابعة أكثر تنظيماً بعد دراسة الدروس الموجودة في الموقع.',
      previewPoints:[
        'فهم المفاهيم الأساسية بطريقة أكثر تنظيماً',
        'مراجعة مسار الشراء الأول والتحويل الكامل في مكان واحد',
        'تعلم فحوصات عملية لتقليل أخطاء المحفظة والعنوان والشبكة',
        'بناء فهم أعمق لإشارات الأمان ومنع الاحتيال'
      ]
    },
    vi:{
      sectionNote:'Phu hop neu ban muon mot luong on tap co to chuc hon sau khi hoc cac bai tren trang web.',
      previewPoints:[
        'Hieu ro hon cac khai niem cot loi theo mot trinh tu de theo doi',
        'On lai toan bo quy trinh mua dau tien va chuyen tien trong cung mot noi',
        'Hoc cac buoc kiem tra thuc te de giam loi ve vi, dia chi va mang',
        'Hieu sau hon ve dau hieu rui ro va phong tranh lua dao'
      ]
    },
    ha:{
      sectionNote:'Ya dace idan kana son karin bita mai tsari bayan ka karanta darussan da ke cikin shafin.',
      previewPoints:[
        'Ka fahimci muhimman ka\'idoji cikin tsari mafi kyau',
        'Ka sake duba dukkan tafiyar sayen farko da tura kudi a wuri guda',
        'Ka koyi bincike na zahiri domin rage kuskuren walat, adireshi, da network',
        'Ka zurfafa fahimtar kariya daga damfara da alamun hadari'
      ]
    }
  };
  AVAILABLE_PREMIUM_GUIDE_PACKS.br = AVAILABLE_PREMIUM_GUIDE_PACKS.pt;
  Object.keys(PACK).forEach(function(langKey){
    var extraPack = AVAILABLE_PREMIUM_GUIDE_PACKS[langKey] || AVAILABLE_PREMIUM_GUIDE_PACKS[baseLang(langKey)] || AVAILABLE_PREMIUM_GUIDE_PACKS.en;
    var sectionExtra = EBOOK_SECTION_EXTRAS[langKey] || EBOOK_SECTION_EXTRAS[baseLang(langKey)] || EBOOK_SECTION_EXTRAS.en;
    if(!PACK[langKey] || !extraPack) return;
    PACK[langKey].sections.cryptoebook = extraPack.section;
    PACK[langKey].availablePremiumGuides = {
      card1Title:extraPack.card1Title,
      card2Title:extraPack.card2Title,
      card1Body:extraPack.card1Body,
      card2Body:extraPack.card2Body,
      button:extraPack.button,
      sectionNote:sectionExtra.sectionNote,
      previewPoints:(sectionExtra.previewPoints || []).slice()
    };
  });

  function getPack(lang){
    return PACK[lang] || PACK[baseLang(lang)] || PACK.en;
  }
  function getPdfHref(key, lang){
    var files = PDF_FILES[key] || PDF_FILES.lesson6;
    if(files[lang]) return files[lang];
    var resolved = baseLang(lang);
    if(files[resolved]) return files[resolved];
    if(files.en) return files.en;
    return files.ko || '';
  }

  function getSourceCatLabelMap(){
    var map = {};
    if(typeof getSourceCats === 'function'){
      getSourceCats().forEach(function(row){
        if(row && row.key) map[row.key] = row.label;
      });
    }
    return map;
  }

  function toMeta(item){
    if(!item || !item.length) return null;
    if(item.length >= 7){
      return { cat:item[0] || '', publisher:item[1] || '', title:item[2] || '', body:item[3] || '', url:item[4] || '', relatedSection:item[5] || '', whyMatters:item[6] || '' };
    }
    return { cat:item[0] || '', publisher:'', title:item[1] || '', body:item[2] || '', url:item[3] || '', relatedSection:'', whyMatters:'' };
  }

  function sourceBlob(meta){
    return [meta.cat, meta.publisher, meta.title, meta.body, meta.relatedSection, meta.url].join(' ').toLowerCase();
  }

  function isOfficial(meta){
    var url = String(meta.url || '').toLowerCase();
    if(OFFICIAL_PUBLISHERS.indexOf(meta.publisher) !== -1) return true;
    return OFFICIAL_DOMAINS.some(function(domain){ return url.indexOf(domain) !== -1; });
  }

  function isSafetyMeta(meta){
    var blob = sourceBlob(meta);
    if(meta.cat === 'scams') return true;
    return /address poisoning|poisoning|seed phrase|recovery phrase|fake website|fake support|phishing|crypto atm|qr code|verify a crypto address|how to send crypto|spoofing-scam|wallet safety/.test(blob);
  }

  function getPrimaryGroup(meta){
    var blob = sourceBlob(meta);
    if(meta.kind === 'freepdf') return 'freepdf';
    if(meta.kind === 'premium') return 'premium';
    if(meta.kind === 'cryptoebook' || meta.cat === 'cryptoebook') return 'cryptoebook';
    if(meta.cat === 'reg') return 'official';
    if(isSafetyMeta(meta)) return 'safety';
    if(meta.cat === 'wallet' || meta.cat === 'exchanges') return 'wallet';
    if(meta.cat === 'cases'){
      if(/ftx|mt\.? gox|exchange|custody/.test(blob)) return 'wallet';
      if(/hack|stolen|launder|forensics|fraud/.test(blob)) return 'safety';
      return 'beginner';
    }
    return 'beginner';
  }

  function getOfficialScore(meta){
    var blob = sourceBlob(meta);
    if(/address poisoning|poisoning|seed phrase/.test(blob)) return 0;
    if(/ftc/.test(blob) || /cryptocurrency scams/.test(blob)) return 1;
    if(/verify a crypto address|how to send crypto|etherscan/.test(blob)) return 2;
    if(/sec|mica|ecb|bis|fsb/.test(blob)) return 3;
    return 4;
  }

  function uniqByUrl(items){
    var seen = {};
    return items.filter(function(meta){
      var key = String(meta.url || meta.title || '').toLowerCase();
      if(!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function getOfficialHighlights(allItems){
    return uniqByUrl(allItems.filter(isOfficial).sort(function(a, b){
      return getOfficialScore(a) - getOfficialScore(b);
    })).slice(0, 6);
  }

  function getSafetySortScore(meta){
    var blob = sourceBlob(meta);
    if(/address poisoning|poisoning/.test(blob)) return 0;
    if(/seed phrase|recovery phrase/.test(blob)) return 1;
    if(/fake website|phishing|support|crypto atm|qr code/.test(blob)) return 2;
    return 3;
  }

  function getSyntheticItems(lang){
    var pack = getPack(lang);
    return [
      { kind:'freepdf', cat:'freepdf', publisher:pack.brand, title:pack.pdf6.title, body:pack.pdf6.body, url:getPdfHref('lesson6', lang), relatedSection:pack.lesson6Label, whyMatters:pack.pdf6.why },
      { kind:'freepdf', cat:'freepdf', publisher:pack.brand, title:pack.pdf7.title, body:pack.pdf7.body, url:getPdfHref('lesson7', lang), relatedSection:pack.lesson7Label, whyMatters:pack.pdf7.why },
      { kind:'premium', cat:'premium', publisher:pack.brand, title:pack.premiumCard.title, body:pack.premiumCard.body, whyMatters:pack.premiumCard.extra, links:[ { href: PREMIUM_LINKS.en, label: pack.premiumCard.english }, { href: PREMIUM_LINKS.ko, label: pack.premiumCard.korean } ] },
      { kind:'cryptoebook', cat:'cryptoebook', publisher:pack.brand, title:pack.availablePremiumGuides.card1Title, body:pack.availablePremiumGuides.card1Body, whyMatters:pack.sections.cryptoebook.desc, links:[ { href: AVAILABLE_PREMIUM_LINKS[0].href, label: pack.availablePremiumGuides.button } ] },
      { kind:'cryptoebook', cat:'cryptoebook', publisher:pack.brand, title:pack.availablePremiumGuides.card2Title, body:pack.availablePremiumGuides.card2Body, whyMatters:pack.sections.cryptoebook.desc, links:[ { href: AVAILABLE_PREMIUM_LINKS[1].href, label: pack.availablePremiumGuides.button } ] }
    ];
  }

  function getGroupKeyResolver(){
    return { scams:'safety', wallet:'wallet', exchanges:'wallet', cases:'wallet', basics:'beginner', stable:'beginner', defi:'beginner', reg:'official', freepdf:'freepdf', premium:'premium', cryptoebook:'cryptoebook' };
  }

  function normalizeSourceMenuKey(value){
    return String(value || '').replace(/[\s/_-]+/g, '').toLowerCase();
  }

  function getSourceSectionKeyForGroup(groupKey){
    return {
      beginner:'basics',
      safety:'scams',
      wallet:'wallet',
      freepdf:'freePdf',
      premium:'premium',
      cryptoebook:'cryptoEbook',
      official:'reg'
    }[groupKey] || 'basics';
  }

  function getSourceTopMenuKey(groupKey){
    if(groupKey === 'freepdf') return 'freePdf';
    if(groupKey === 'cryptoebook') return 'cryptoEbook';
    return groupKey;
  }

  function getCardTags(meta, pack, groupKey){
    var labels = [];
    function add(label, className){
      if(!label || labels.some(function(entry){ return entry.label === label; })) return;
      labels.push({ label:label, className:className || '' });
    }
    if(groupKey === 'beginner') add(pack.tags.beginner);
    if(groupKey === 'safety') add(pack.tags.safety);
    if(groupKey === 'wallet') add(pack.tags.wallet);
    if(groupKey === 'freepdf') add(pack.tags.pdf, 'is-pdf');
    if(groupKey === 'premium' || groupKey === 'cryptoebook') add(pack.tags.premium, 'is-premium');
    if(isOfficial(meta)) add(pack.tags.official, 'is-official');
    if(groupKey === 'freepdf') add(pack.tags.free);
    return labels.slice(0, 2);
  }

  function renderTagRow(meta, pack, groupKey){
    var tags = getCardTags(meta, pack, groupKey);
    if(!tags.length) return '';
    return '<div class="src-card-tags">' + tags.map(function(tag){
      return '<span class="src-card-tag ' + (tag.className || '') + '">' + tag.label + '</span>';
    }).join('') + '</div>';
  }

  function renderSourceSectionExtra(pack, groupKey){
    if(groupKey !== 'cryptoebook' || !pack.availablePremiumGuides) return '';
    var note = pack.availablePremiumGuides.sectionNote || '';
    var points = Array.isArray(pack.availablePremiumGuides.previewPoints) ? pack.availablePremiumGuides.previewPoints : [];
    return ''
      + (note ? '<p class="src-section-note">' + note + '</p>' : '')
      + (points.length ? '<ul class="src-preview-points">' + points.map(function(point){
          return '<li>' + point + '</li>';
        }).join('') + '</ul>' : '');
  }
  function renderSourceCard(meta, pack, groupKey, catLabelMap){
    var metaLabel = meta.kind === 'freepdf'
      ? pack.meta.pdf
      : ((meta.kind === 'premium' || meta.kind === 'cryptoebook') ? pack.meta.premium : (catLabelMap[meta.cat] || meta.cat || pack.sections[groupKey].title));
    var sourceKey = normalizeSourceTargetKey(meta.url || meta.title || meta.publisher || groupKey);
    var relatedHtml = meta.relatedSection ? '<span class="src-section-tag">&#8594; ' + meta.relatedSection + '</span>' : '';
    var whyHtml = meta.whyMatters ? '<div class="src-why"><strong>' + pack.whyLabel + ':</strong> ' + meta.whyMatters + '</div>' : '';

    if(meta.kind === 'premium' || meta.kind === 'cryptoebook'){
      var actionsHtml = '<div class="src-actions">' + (meta.links || []).map(function(link){
        return '<a class="src-action-btn" href="' + link.href + '" target="_blank" rel="noopener noreferrer">' + link.label + '</a>';
      }).join('') + '</div>';
      return '<div class="source-library-item" data-source-key="' + sourceKey + '">'
        + '<div class="source-library-meta">' + metaLabel + '</div>'
        + renderTagRow(meta, pack, groupKey)
        + '<div class="src-publisher-row">' + (meta.publisher ? '<span class="src-publisher">&#9654; ' + meta.publisher + '</span>' : '') + '</div>'
        + '<h3>' + (meta.title || '') + '</h3>'
        + '<p>' + (meta.body || '') + '</p>'
        + actionsHtml
        + (meta.whyMatters ? '<div class="src-inline-note">' + meta.whyMatters + '</div>' : '')
        + '</div>';
    }

    var safeUrl = typeof meta.url === 'string' ? meta.url : '';
    var displayUrl = safeUrl ? safeUrl.replace(/^https?:\/\//,'').replace(/\/$/,'').substring(0, 55) + (safeUrl.length > 60 ? '…' : '') : '';
    return '<div class="source-library-item" data-source-key="' + sourceKey + '">'
      + '<div class="source-library-meta">' + metaLabel + '</div>'
      + renderTagRow(meta, pack, groupKey)
      + '<div class="src-publisher-row">'
      +   (meta.publisher ? '<span class="src-publisher">&#9654; ' + meta.publisher + '</span>' : '')
      +   relatedHtml
      + '</div>'
      + '<h3>' + (meta.title || '') + '</h3>'
      + '<p>' + (meta.body || '') + '</p>'
      + whyHtml
      + (safeUrl ? '<a class="src-link" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">' + displayUrl + '</a>' : '')
      + '</div>';
  }

  function buildGroups(lang){
    var baseItems = typeof getSourceItems === 'function' ? getSourceItems() : [];
    var normalized = baseItems.map(toMeta).filter(Boolean);
    var groups = { beginner:[], safety:[], wallet:[], freepdf:[], premium:[], cryptoebook:[], official:[] };
    normalized.forEach(function(meta){
      groups[getPrimaryGroup(meta)].push(meta);
    });
    getSyntheticItems(lang).forEach(function(meta){
      groups[getPrimaryGroup(meta)].push(meta);
    });
    groups.official = uniqByUrl(groups.official.concat(getOfficialHighlights(normalized)));
    groups.safety.sort(function(a, b){ return getSafetySortScore(a) - getSafetySortScore(b); });
    return groups;
  }

  function resolveSourceSectionKey(targetCat){
    var normalized = normalizeSourceMenuKey(targetCat);
    var aliasMap = {
      beginner:'basics',
      basics:'basics',
      basic:'basics',
      stable:'basics',
      defi:'basics',
      safety:'scams',
      scams:'scams',
      scam:'scams',
      wallet:'wallet',
      exchanges:'wallet',
      exchange:'wallet',
      cases:'wallet',
      case:'wallet',
      freepdf:'freePdf',
      pdf:'freePdf',
      pdffree:'freePdf',
      premium:'premium',
      premiumguide:'premium',
      premiumguides:'premium',
      cryptoebook:'cryptoEbook',
      ebook:'cryptoEbook',
      cryptoacademyebook:'cryptoEbook',
      official:'reg',
      reg:'reg',
      officialreference:'reg',
      officialreferences:'reg'
    };
    return aliasMap[normalized] || 'basics';
  }

  renderSources = function(){
    if(typeof window.__applyRuntimeLanguagePack === 'function'){
      window.__applyRuntimeLanguagePack('ha');
    }
    var lang = typeof currentLang === 'string' && currentLang ? currentLang : 'en';
    var pack = getPack(lang);
    var groups = buildGroups(lang);
    var catLabelMap = getSourceCatLabelMap();
    var chipHtml = GROUP_ORDER.filter(function(key){
      return groups[key] && groups[key].length;
    }).map(function(key){
      var section = pack.sections[key];
      var sectionKey = getSourceSectionKeyForGroup(key);
      var menuKey = getSourceTopMenuKey(key);
      return '<div class="source-cat" data-source-top-menu="' + menuKey + '" data-source-cat="' + sectionKey + '" data-source-group="' + key + '">' + section.title + ' <span style="font-size:.65rem;opacity:.6;margin-left:3px">(' + groups[key].length + ')</span></div>';
    }).join('');
    var sectionsHtml = GROUP_ORDER.filter(function(key){
      return groups[key] && groups[key].length;
    }).map(function(key){
      var section = pack.sections[key];
      var sectionKey = getSourceSectionKeyForGroup(key);
      var spotlightClass = key === 'safety' ? ' is-source-spotlight' : '';
      return '<div class="src-section-block' + spotlightClass + '" data-source-section="' + sectionKey + '" data-source-group="' + key + '">'
        + '<div class="src-section-heading">' + section.title + '<span class="src-section-count">' + groups[key].length + '</span></div>'
        + '<p class="src-group-desc">' + section.desc + '</p>'
        + renderSourceSectionExtra(pack, key)
        + '<div class="source-library-grid">' + groups[key].map(function(meta){
            return renderSourceCard(meta, pack, key, catLabelMap);
          }).join('') + '</div>'
        + '</div>';
    }).join('');
    var metaPill = (typeof ic === 'function' ? ic('library') + ' ' : '') + 'S';
    return ''
      + '<div class="lc-header">'
      +   '<div class="lc-meta"><span class="meta-pill">' + metaPill + '</span><span class="meta-cat">' + t('nav.sources') + '</span></div>'
      +   '<h1 class="lc-title">' + t('sources.pageTitle') + '</h1>'
      +   '<p class="lc-intro">' + t('sources.pageDesc') + '</p>'
      + '</div>'
      + '<div class="source-cats">' + chipHtml + '</div>'
      + sectionsHtml;
  };
  window.renderSources = renderSources;

  setActiveSourceCategory = function(targetCat){
    var resolved = resolveSourceSectionKey(targetCat);
    document.querySelectorAll('#sourcesPanel .source-cat[data-source-cat], #sourcesPanel [data-source-top-menu]').forEach(function(chip){
      var chipKey = chip.dataset.sourceCat || chip.dataset.sourceTopMenu || chip.dataset.sourceGroup || '';
      chip.classList.toggle('is-active', resolveSourceSectionKey(chipKey) === resolved);
    });
  };
  window.setActiveSourceCategory = setActiveSourceCategory;

  scrollToSourceSection = function(targetCat){
    var resolved = resolveSourceSectionKey(targetCat);
    if(typeof showPage === 'function') showPage('sources');
    setActiveSourceCategory(resolved);
    function revealSection(tries){
      var targetEl = document.querySelector('#sourcesPanel .src-section-block[data-source-section="' + resolved + '"]');
      if(targetEl){
        scrollRepresentativeTargetIntoView(targetEl, 'start');
        highlightRepresentativeTarget(targetEl);
        return;
      }
      if(tries > 0){
        setTimeout(function(){ revealSection(tries - 1); }, 120);
      }
    }
    revealSection(10);
  };
  window.scrollToSourceSection = scrollToSourceSection;

  if(typeof document !== 'undefined' && !window.__sourceLibraryTopMenuClickBound20260427){
    window.__sourceLibraryTopMenuClickBound20260427 = true;
    document.addEventListener('click', function(event){
      var chip = event.target && event.target.closest ? event.target.closest('#sourcesPanel .source-cat[data-source-cat], #sourcesPanel [data-source-top-menu]') : null;
      if(!chip) return;
      var targetKey = chip.dataset.sourceTopMenu || chip.dataset.sourceCat || chip.dataset.sourceGroup || '';
      if(!targetKey) return;
      event.preventDefault();
      scrollToSourceSection(targetKey);
    });
  }

  if(typeof document !== 'undefined'){
    var panel = document.getElementById('sourcesPanel');
    if(panel){
      panel.innerHTML = renderSources();
    }
  }
  if(typeof currentPage !== 'undefined' && currentPage === 'sources' && typeof showPage === 'function'){
    showPage('sources');
  }
})();
