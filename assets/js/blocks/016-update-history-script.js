(function(){
  // ─── Update History data — all 10 languages, all 6 dates ───────────────
  var updateHistory = {
    en:[
      {date:'2026-04-04', title:'Coin-Aware Search Structure Expanded',
       items:['Representative coin/topic mapping structure was defined','Educational coin summary cards were planned for search results','Related Lessons, Glossary, FAQ, Source Library, and Safety links were connected as part of the search flow','Multilingual coin explanation flow was clarified','The platform direction was refined to keep coin search educational rather than speculative']},
      {date:'2026-04-03', title:'Source Library & Visual Navigation',
       items:['Icons added for clearer visual navigation','Comparison cards added','Quick summary boxes added','Source Library expanded with more articles and categories','Source transparency and structured learning flow improved']},
      {date:'2026-04-02', title:'Search, Resume & Beginner Tools',
       items:['Search feature added','Continue Learning / Resume Learning added','Beginner Roadmap added','Top 5 Beginner Mistakes added','Language update notice added']},
      {date:'2026-04-01', title:'New Pages: Start Here, FAQ & Safety',
       items:['Start Here page added','FAQ page added','Safety page added','Home-first entry experience improved for PC and mobile']},
      {date:'2026-03-31', title:'Platform Structure & Usability Improved',
       items:['Multi-language experience improved','Navigation and section clarity improved','Glossary and Source Library usability improved','Platform structure became more organized']},
      {date:'2026-03-30', title:'Beginner Learning Flow Refined',
       items:['Beginner-focused learning structure improved','Lesson flow refined for easier understanding','More beginner-friendly content organization added','Educational direction clarified for broader users']},
      {date:'2026-03-29', title:'Initial Launch',
       items:['Crypto Academy initial launch','Core multilingual education structure created','Basic lesson flow established','Home / Lessons / Glossary / Source Library initial structure prepared']}
    ],
    ko:[
      {date:'2026-04-04', title:'코인 인식 검색 구조 확장',
       items:['대표 코인/주제 매핑 구조가 정의되었습니다','검색 결과에 교육용 코인 요약 카드가 기획되었습니다','관련 강의, 용어사전, FAQ, Source Library, Safety 링크가 검색 흐름에 연결되었습니다','다국어 코인 설명 흐름이 명확해졌습니다','코인 검색이 투기적이지 않고 교육적으로 유지되도록 플랫폼 방향이 개선되었습니다']},
      {date:'2026-04-03', title:'Source Library 확장 및 시각 내비게이션 개선',
       items:['시각적 탐색을 위한 아이콘 추가','비교 카드 추가','빠른 요약 박스 추가','더 많은 기사와 카테고리로 Source Library 확장','출처 투명성 및 구조화된 학습 흐름 개선']},
      {date:'2026-04-02', title:'검색, 이어보기 및 초보자 도구 추가',
       items:['검색 기능 추가','이어서 학습하기 / 학습 재개 기능 추가','초보자 로드맵 추가','초보자 Top 5 실수 추가','언어 업데이트 알림 추가']},
      {date:'2026-04-01', title:'신규 페이지: 시작 가이드, FAQ, 안전 가이드',
       items:['시작 가이드 페이지 추가','FAQ 페이지 추가','안전 가이드 페이지 추가','PC 및 모바일 첫 진입 홈 화면 경험 개선']},
      {date:'2026-03-31', title:'플랫폼 구조 및 사용성 개선',
       items:['다국어 경험 개선','내비게이션 및 섹션 명확성 개선','용어사전 및 Source Library 사용성 개선','플랫폼 구조 전반적으로 정리됨']},
      {date:'2026-03-30', title:'초보자 학습 흐름 개선',
       items:['초보자 중심 학습 구조 개선','더 쉬운 이해를 위한 강의 흐름 정제','초보자 친화적 콘텐츠 구성 추가','더 많은 사용자를 위한 교육 방향 명확화']},
      {date:'2026-03-29', title:'최초 출시',
       items:['Crypto Academy 최초 출시','핵심 다국어 교육 구조 생성','기본 강의 흐름 구축','홈 / 강의 / 용어사전 / Source Library 초기 구조 완성']}
    ],
    th:[
      {date:'2026-04-04', title:'โครงสร้างการค้นหาเหรียญขยายเพิ่มเติม',
       items:['กำหนดโครงสร้างการจับคู่เหรียญ/หัวข้อตัวแทน','วางแผนการ์ดสรุปเหรียญเพื่อการศึกษาสำหรับผลการค้นหา','เชื่อมโยงบทเรียน คำศัพท์ FAQ Source Library และความปลอดภัยเป็นส่วนหนึ่งของขั้นตอนการค้นหา','ชี้แจงขั้นตอนการอธิบายเหรียญแบบหลายภาษา','ปรับทิศทางแพลตฟอร์มเพื่อให้การค้นหาเหรียญเป็นเชิงการศึกษาแทนการเก็งกำไร']},
      {date:'2026-04-03', title:'ขยาย Source Library และปรับปรุงการนำทางด้วยภาพ',
       items:['เพิ่มไอคอนเพื่อการนำทางที่ชัดเจนขึ้น','เพิ่มการ์ดเปรียบเทียบ','เพิ่มกล่องสรุปย่อ','ขยาย Source Library ด้วยบทความและหมวดหมู่เพิ่มเติม','ปรับปรุงความโปร่งใสของแหล่งอ้างอิงและการเรียนรู้แบบมีโครงสร้าง']},
      {date:'2026-04-02', title:'เพิ่มการค้นหา เรียนต่อ และเครื่องมือสำหรับผู้เริ่มต้น',
       items:['เพิ่มฟีเจอร์ค้นหา','เพิ่มฟีเจอร์เรียนต่อ / กลับมาเรียน','เพิ่มแผนการเรียนสำหรับผู้เริ่มต้น','เพิ่มข้อผิดพลาด 5 อันดับสำหรับผู้เริ่มต้น','เพิ่มการแจ้งเตือนการอัปเดตภาษา']},
      {date:'2026-04-01', title:'เพิ่มหน้าใหม่: เริ่มตรงนี้ คำถามพบบ่อย และความปลอดภัย',
       items:['เพิ่มหน้า เริ่มตรงนี้','เพิ่มหน้าคำถามพบบ่อย','เพิ่มหน้าความปลอดภัย','ปรับปรุงประสบการณ์เข้าสู่หน้าหลักก่อนสำหรับ PC และมือถือ']},
      {date:'2026-03-31', title:'ปรับปรุงโครงสร้างแพลตฟอร์มและการใช้งาน',
       items:['ปรับปรุงประสบการณ์หลายภาษา','ปรับปรุงความชัดเจนของการนำทางและส่วนต่างๆ','ปรับปรุงการใช้งานอภิธานศัพท์และ Source Library','โครงสร้างแพลตฟอร์มเป็นระเบียบมากขึ้น']},
      {date:'2026-03-30', title:'ปรับแต่งกระบวนการเรียนรู้สำหรับผู้เริ่มต้น',
       items:['ปรับปรุงโครงสร้างการเรียนรู้ที่เน้นผู้เริ่มต้น','ปรับแต่งขั้นตอนบทเรียนให้เข้าใจง่ายขึ้น','เพิ่มการจัดเนื้อหาที่เป็นมิตรกับผู้เริ่มต้นมากขึ้น','ชี้แจงทิศทางการศึกษาสำหรับผู้ใช้กลุ่มกว้างขึ้น']},
      {date:'2026-03-29', title:'เปิดตัวครั้งแรก',
       items:['เปิดตัว Crypto Academy ครั้งแรก','สร้างโครงสร้างการศึกษาหลายภาษาหลัก','จัดตั้งขั้นตอนบทเรียนพื้นฐาน','เตรียมโครงสร้างเริ่มต้นของหน้าหลัก / บทเรียน / อภิธานศัพท์ / Source Library']}
    ],
    id:[
      {date:'2026-04-04', title:'Struktur Pencarian Berbasis Koin Diperluas',
       items:['Struktur pemetaan koin/topik representatif telah ditentukan','Kartu ringkasan koin edukatif direncanakan untuk hasil pencarian','Tautan Pelajaran, Glosarium, FAQ, Source Library, dan Keamanan dihubungkan sebagai bagian dari alur pencarian','Alur penjelasan koin multibahasa diperjelas','Arah platform disempurnakan agar pencarian koin tetap edukatif, bukan spekulatif']},
      {date:'2026-04-03', title:'Perluasan Source Library & Navigasi Visual',
       items:['Ikon ditambahkan untuk navigasi visual yang lebih jelas','Kartu perbandingan ditambahkan','Kotak ringkasan cepat ditambahkan','Source Library diperluas dengan lebih banyak artikel dan kategori','Transparansi sumber dan alur pembelajaran terstruktur ditingkatkan']},
      {date:'2026-04-02', title:'Pencarian, Lanjutkan Belajar & Alat Pemula',
       items:['Fitur pencarian ditambahkan','Lanjutkan Belajar / Kembali Belajar ditambahkan','Peta Jalan Pemula ditambahkan','5 Kesalahan Pemula Teratas ditambahkan','Pemberitahuan pembaruan bahasa ditambahkan']},
      {date:'2026-04-01', title:'Halaman Baru: Mulai di Sini, FAQ & Keamanan',
       items:['Halaman Mulai di Sini ditambahkan','Halaman FAQ ditambahkan','Halaman Keamanan ditambahkan','Pengalaman masuk pertama ke halaman Beranda ditingkatkan untuk PC dan ponsel']},
      {date:'2026-03-31', title:'Struktur Platform & Kegunaan Ditingkatkan',
       items:['Pengalaman multibahasa ditingkatkan','Kejelasan navigasi dan bagian ditingkatkan','Kegunaan Glosarium dan Source Library ditingkatkan','Struktur platform menjadi lebih terorganisir']},
      {date:'2026-03-30', title:'Alur Pembelajaran Pemula Disempurnakan',
       items:['Struktur pembelajaran berfokus pemula ditingkatkan','Alur pelajaran disempurnakan agar lebih mudah dipahami','Organisasi konten yang lebih ramah pemula ditambahkan','Arah pendidikan diperjelas untuk pengguna yang lebih luas']},
      {date:'2026-03-29', title:'Peluncuran Awal',
       items:['Crypto Academy diluncurkan pertama kali','Struktur pendidikan multibahasa inti dibuat','Alur pelajaran dasar ditetapkan','Struktur awal Beranda / Pelajaran / Glosarium / Source Library disiapkan']}
    ],
    pt:[
      {date:'2026-04-04', title:'Estrutura de Pesquisa por Moeda Expandida',
       items:['Estrutura de mapeamento de moedas/tópicos representativos foi definida','Cartões de resumo educativo de moedas foram planejados para resultados de pesquisa','Links de Lições, Glossário, FAQ, Source Library e Segurança foram conectados como parte do fluxo de pesquisa','Fluxo de explicação de moedas multilíngue foi esclarecido','A direção da plataforma foi refinada para manter a pesquisa de moedas educativa em vez de especulativa']},
      {date:'2026-04-03', title:'Expansão da Source Library & Navegação Visual',
       items:['Ícones adicionados para navegação visual mais clara','Cartões de comparação adicionados','Caixas de resumo rápido adicionadas','Source Library expandida com mais artigos e categorias','Transparência de fontes e fluxo de aprendizado estruturado melhorados']},
      {date:'2026-04-02', title:'Pesquisa, Continuar Aprendendo & Ferramentas para Iniciantes',
       items:['Funcionalidade de pesquisa adicionada','Continuar Aprendendo / Retomar Aprendizado adicionado','Roteiro para Iniciantes adicionado','Top 5 Erros de Iniciantes adicionado','Aviso de atualização de idioma adicionado']},
      {date:'2026-04-01', title:'Novas Páginas: Comece Aqui, FAQ e Segurança',
       items:['Página Comece Aqui adicionada','Página FAQ adicionada','Página Segurança adicionada','Experiência de entrada pela tela inicial melhorada para PC e celular']},
      {date:'2026-03-31', title:'Estrutura da Plataforma & Usabilidade Melhoradas',
       items:['Experiência multilíngue melhorada','Clareza de navegação e seções melhorada','Usabilidade do Glossário e Source Library melhorada','Estrutura da plataforma tornou-se mais organizada']},
      {date:'2026-03-30', title:'Fluxo de Aprendizado para Iniciantes Aprimorado',
       items:['Estrutura de aprendizado focada em iniciantes melhorada','Fluxo de lições refinado para compreensão mais fácil','Organização de conteúdo mais amigável para iniciantes adicionada','Direção educacional esclarecida para públicos mais amplos']},
      {date:'2026-03-29', title:'Lançamento Inicial',
       items:['Lançamento inicial do Crypto Academy','Estrutura educacional multilíngue principal criada','Fluxo básico de lições estabelecido','Estrutura inicial de Início / Lições / Glossário / Source Library preparada']}
    ],
    tr:[
      {date:'2026-04-04', title:'Coin Odaklı Arama Yapısı Genişletildi',
       items:['Temsili coin/konu eşleme yapısı tanımlandı','Arama sonuçları için eğitici coin özet kartları planlandı','İlgili Dersler, Sözlük, SSS, Kaynak Kütüphanesi ve Güvenlik bağlantıları arama akışının parçası olarak bağlandı','Çok dilli coin açıklama akışı netleştirildi','Platform yönü, coin aramasını spekülatif değil eğitici tutmak için iyileştirildi']},
      {date:'2026-04-03', title:'Kaynak Kütüphanesi Genişletildi & Görsel Navigasyon',
       items:['Daha net görsel navigasyon için ikonlar eklendi','Karşılaştırma kartları eklendi','Hızlı özet kutuları eklendi','Kaynak Kütüphanesi daha fazla makale ve kategoriyle genişletildi','Kaynak şeffaflığı ve yapılandırılmış öğrenme akışı iyileştirildi']},
      {date:'2026-04-02', title:'Arama, Öğrenmeye Devam Et & Başlangıç Araçları',
       items:['Arama özelliği eklendi','Öğrenmeye Devam Et / Öğrenmeyi Sürdür eklendi','Başlangıç Yol Haritası eklendi','En Sık Yapılan 5 Başlangıç Hatası eklendi','Dil güncelleme bildirimi eklendi']},
      {date:'2026-04-01', title:'Yeni Sayfalar: Buradan Başla, SSS & Güvenlik',
       items:['Buradan Başla sayfası eklendi','SSS sayfası eklendi','Güvenlik sayfası eklendi','PC ve mobil için önce Ana Sayfa giriş deneyimi iyileştirildi']},
      {date:'2026-03-31', title:'Platform Yapısı & Kullanılabilirlik İyileştirildi',
       items:['Çok dilli deneyim iyileştirildi','Navigasyon ve bölüm netliği iyileştirildi','Sözlük ve Kaynak Kütüphanesi kullanılabilirliği iyileştirildi','Platform yapısı daha düzenli hale geldi']},
      {date:'2026-03-30', title:'Başlangıç Öğrenme Akışı Geliştirildi',
       items:['Yeni başlayan odaklı öğrenme yapısı iyileştirildi','Daha kolay anlama için ders akışı geliştirildi','Daha başlangıç dostu içerik organizasyonu eklendi','Daha geniş kullanıcılar için eğitim yönü netleştirildi']},
      {date:'2026-03-29', title:'İlk Lansman',
       items:['Crypto Academy ilk lansmanı','Temel çok dilli eğitim yapısı oluşturuldu','Temel ders akışı kuruldu','Ana Sayfa / Dersler / Sözlük / Kaynak Kütüphanesi ilk yapısı hazırlandı']}
    ],
    ar:[
      {date:'2026-04-04', title:'توسيع هيكل البحث المرتبط بالعملات',
       items:['تم تحديد هيكل ربط العملات/المواضيع التمثيلية','تم التخطيط لبطاقات ملخص العملات التعليمية لنتائج البحث','تم ربط روابط الدروس والمسرد والأسئلة الشائعة ومكتبة المصادر والأمان كجزء من تدفق البحث','تم توضيح تدفق شرح العملات متعدد اللغات','تم تحسين اتجاه المنصة للحفاظ على البحث عن العملات تعليمياً وليس مضاربياً']},
      {date:'2026-04-03', title:'توسيع مكتبة المصادر والتنقل المرئي',
       items:['أضيفت أيقونات لتنقل مرئي أوضح','أضيفت بطاقات المقارنة','أضيفت مربعات الملخص السريع','توسعت مكتبة المصادر بمزيد من المقالات والفئات','تحسين شفافية المصادر وتدفق التعلم المنظم']},
      {date:'2026-04-02', title:'البحث، متابعة التعلم وأدوات المبتدئين',
       items:['أضيفت ميزة البحث','أضيف متابعة التعلم / استئناف التعلم','أضيفت خارطة طريق المبتدئين','أضيفت أكثر 5 أخطاء شائعة للمبتدئين','أضيف إشعار تحديث اللغة']},
      {date:'2026-04-01', title:'صفحات جديدة: ابدأ هنا، الأسئلة الشائعة والأمان',
       items:['أضيفت صفحة ابدأ هنا','أضيفت صفحة الأسئلة الشائعة','أضيفت صفحة الأمان','تحسين تجربة الدخول للصفحة الرئيسية على الحاسوب والجوال']},
      {date:'2026-03-31', title:'تحسين هيكل المنصة وسهولة الاستخدام',
       items:['تحسين تجربة تعدد اللغات','تحسين وضوح التنقل والأقسام','تحسين سهولة استخدام القاموس ومكتبة المصادر','أصبح هيكل المنصة أكثر تنظيماً']},
      {date:'2026-03-30', title:'تحسين تدفق التعلم للمبتدئين',
       items:['تحسين هيكل التعلم الموجه للمبتدئين','تحسين تدفق الدروس لفهم أسهل','إضافة تنظيم محتوى أكثر ملاءمة للمبتدئين','توضيح التوجه التعليمي لفئات أوسع من المستخدمين']},
      {date:'2026-03-29', title:'الإطلاق الأولي',
       items:['الإطلاق الأولي لأكاديمية Crypto','إنشاء هيكل التعليم متعدد اللغات الأساسي','تأسيس تدفق الدروس الأساسي','تجهيز الهيكل الأولي للرئيسية / الدروس / القاموس / مكتبة المصادر']}
    ],
    vi:[
      {date:'2026-04-04', title:'Mở rộng Cấu trúc Tìm kiếm theo Đồng coin',
       items:['Cấu trúc ánh xạ đồng coin/chủ đề đại diện đã được xác định','Thẻ tóm tắt đồng coin giáo dục đã được lên kế hoạch cho kết quả tìm kiếm','Liên kết Bài học, Thuật ngữ, FAQ, Thư viện Nguồn và An toàn đã được kết nối như một phần của luồng tìm kiếm','Luồng giải thích đồng coin đa ngôn ngữ đã được làm rõ','Hướng đi của nền tảng được tinh chỉnh để giữ tìm kiếm đồng coin mang tính giáo dục thay vì đầu cơ']},
      {date:'2026-04-03', title:'Mở rộng Thư viện Nguồn & Điều hướng Trực quan',
       items:['Thêm biểu tượng để điều hướng trực quan rõ ràng hơn','Thêm thẻ so sánh','Thêm hộp tóm tắt nhanh','Thư viện Nguồn được mở rộng với nhiều bài viết và danh mục hơn','Cải thiện tính minh bạch nguồn và luồng học tập có cấu trúc']},
      {date:'2026-04-02', title:'Tìm kiếm, Tiếp tục Học & Công cụ cho Người mới',
       items:['Thêm tính năng tìm kiếm','Thêm Tiếp tục Học / Tiếp tục từ chỗ đã dừng','Thêm Lộ trình cho Người mới','Thêm Top 5 Sai lầm của Người mới','Thêm thông báo cập nhật ngôn ngữ']},
      {date:'2026-04-01', title:'Trang mới: Bắt đầu Tại đây, FAQ & An toàn',
       items:['Thêm trang Bắt đầu Tại đây','Thêm trang FAQ','Thêm trang An toàn','Cải thiện trải nghiệm vào trang Chủ trước trên PC và điện thoại']},
      {date:'2026-03-31', title:'Cải thiện Cấu trúc Nền tảng & Khả năng Sử dụng',
       items:['Cải thiện trải nghiệm đa ngôn ngữ','Cải thiện độ rõ ràng của điều hướng và các phần','Cải thiện khả năng sử dụng Từ điển và Thư viện Nguồn','Cấu trúc nền tảng trở nên có tổ chức hơn']},
      {date:'2026-03-30', title:'Tinh chỉnh Luồng Học tập cho Người mới',
       items:['Cải thiện cấu trúc học tập tập trung vào người mới','Tinh chỉnh luồng bài học để dễ hiểu hơn','Thêm tổ chức nội dung thân thiện hơn với người mới','Làm rõ hướng giáo dục cho nhiều người dùng hơn']},
      {date:'2026-03-29', title:'Ra mắt Lần đầu',
       items:['Ra mắt Crypto Academy lần đầu','Tạo cấu trúc giáo dục đa ngôn ngữ cốt lõi','Thiết lập luồng bài học cơ bản','Chuẩn bị cấu trúc ban đầu của Trang chủ / Bài học / Từ điển / Thư viện Nguồn']}
    ],
    es:[
      {date:'2026-04-04', title:'Estructura de Búsqueda por Moneda Expandida',
       items:['Se definió la estructura de mapeo de monedas/temas representativos','Se planificaron tarjetas de resumen educativo de monedas para resultados de búsqueda','Se conectaron enlaces de Lecciones, Glosario, FAQ, Source Library y Seguridad como parte del flujo de búsqueda','Se clarificó el flujo de explicación de monedas multilingüe','Se refinó la dirección de la plataforma para mantener la búsqueda de monedas educativa en lugar de especulativa']},
      {date:'2026-04-03', title:'Expansión de la Source Library y Navegación Visual',
       items:['Iconos añadidos para una navegación visual más clara','Tarjetas de comparación añadidas','Cajas de resumen rápido añadidas','Source Library expandida con más artículos y categorías','Transparencia de fuentes y flujo de aprendizaje estructurado mejorados']},
      {date:'2026-04-02', title:'Búsqueda, Continuar Aprendiendo y Herramientas para Principiantes',
       items:['Función de búsqueda añadida','Continuar Aprendiendo / Retomar el Aprendizaje añadido','Hoja de Ruta para Principiantes añadida','Top 5 Errores de Principiantes añadido','Aviso de actualización de idioma añadido']},
      {date:'2026-04-01', title:'Nuevas Páginas: Empieza Aquí, FAQ y Seguridad',
       items:['Página Empieza Aquí añadida','Página FAQ añadida','Página Seguridad añadida','Experiencia de entrada a la pantalla de Inicio mejorada para PC y móvil']},
      {date:'2026-03-31', title:'Estructura de la Plataforma y Usabilidad Mejoradas',
       items:['Experiencia multilingüe mejorada','Claridad de navegación y secciones mejorada','Usabilidad del Glosario y Source Library mejorada','La estructura de la plataforma se volvió más organizada']},
      {date:'2026-03-30', title:'Flujo de Aprendizaje para Principiantes Refinado',
       items:['Estructura de aprendizaje centrada en principiantes mejorada','Flujo de lecciones refinado para una comprensión más fácil','Organización de contenido más amigable para principiantes añadida','Dirección educativa aclarada para usuarios más amplios']},
      {date:'2026-03-29', title:'Lanzamiento Inicial',
       items:['Lanzamiento inicial de Crypto Academy','Estructura educativa multilingüe principal creada','Flujo básico de lecciones establecido','Estructura inicial de Inicio / Lecciones / Glosario / Source Library preparada']}
    ]
  };
  var updateEntry20260406 = {
    en:{date:'2026-04-06', title:'Navigation and search-result linking improved', items:['Remaining lesson fallback labels were cleaned up','Related lesson links were refined to use the correct lesson titles','Search-result navigation was made clearer and more consistent','Representative coin result flow was further polished','Overall usability was improved for faster learning access','This update focused on making related search results cleaner, easier to understand, and more directly connected to the right learning pages.']},
    ko:{date:'2026-04-06', title:'내비게이션과 검색결과 연결이 개선되었습니다', items:['남아 있던 강의 fallback 라벨을 정리했습니다','관련 강의 링크가 올바른 강의 제목을 사용하도록 다듬었습니다','검색결과 이동 흐름을 더 명확하고 일관되게 개선했습니다','대표 코인 결과 흐름을 한 번 더 다듬었습니다','더 빠르게 학습 페이지에 접근할 수 있도록 전체 사용성을 높였습니다','이번 업데이트는 관련 검색결과를 더 깔끔하고 이해하기 쉽게 만들고, 올바른 학습 페이지와 더 직접적으로 연결하는 데 집중했습니다.']},
    th:{date:'2026-04-06', title:'ปรับปรุงการนำทางและการเชื่อมโยงผลการค้นหา', items:['ล้างป้ายชื่อบทเรียน fallback ที่ยังเหลืออยู่','ปรับลิงก์บทเรียนที่เกี่ยวข้องให้ใช้ชื่อบทเรียนที่ถูกต้อง','ทำให้การนำทางจากผลการค้นหาชัดเจนและสม่ำเสมอมากขึ้น','ปรับแต่งลำดับผลลัพธ์ของเหรียญตัวแทนเพิ่มเติม','ปรับปรุงการใช้งานโดยรวมให้เข้าถึงการเรียนรู้ได้เร็วขึ้น','อัปเดตนี้มุ่งทำให้ผลการค้นหาที่เกี่ยวข้องสะอาดขึ้น เข้าใจง่ายขึ้น และเชื่อมไปยังหน้าการเรียนรู้ที่ถูกต้องได้โดยตรงมากขึ้น']},
    id:{date:'2026-04-06', title:'Navigasi dan tautan hasil pencarian ditingkatkan', items:['Sisa label pelajaran fallback telah dibersihkan','Tautan pelajaran terkait disempurnakan agar memakai judul pelajaran yang benar','Navigasi hasil pencarian dibuat lebih jelas dan lebih konsisten','Alur hasil coin representatif dipoles lebih lanjut','Kegunaan keseluruhan ditingkatkan agar akses belajar lebih cepat','Pembaruan ini berfokus membuat hasil pencarian terkait lebih rapi, lebih mudah dipahami, dan lebih langsung terhubung ke halaman pembelajaran yang tepat.']},
    pt:{date:'2026-04-06', title:'Navegação e ligação dos resultados de pesquisa melhoradas', items:['Os rótulos restantes de lições em fallback foram limpos','Os links de lições relacionadas foram refinados para usar os títulos corretos das lições','A navegação dos resultados de pesquisa ficou mais clara e consistente','O fluxo dos resultados de moedas representativas foi refinado novamente','A usabilidade geral foi melhorada para acelerar o acesso ao aprendizado','Esta atualização focou em tornar os resultados relacionados mais limpos, mais fáceis de entender e mais diretamente conectados às páginas certas de aprendizagem.']},
    tr:{date:'2026-04-06', title:'Gezinme ve arama sonucu bağlantıları iyileştirildi', items:['Kalan fallback ders etiketleri temizlendi','İlgili ders bağlantıları doğru ders başlıklarını kullanacak şekilde iyileştirildi','Arama sonucu gezinmesi daha açık ve daha tutarlı hale getirildi','Temsili coin sonuç akışı biraz daha parlatıldı','Daha hızlı öğrenme erişimi için genel kullanılabilirlik artırıldı','Bu güncelleme, ilgili arama sonuçlarını daha temiz, daha anlaşılır ve doğru öğrenme sayfalarına daha doğrudan bağlı hale getirmeye odaklandı.']},
    ar:{date:'2026-04-06', title:'تم تحسين التنقل وربط نتائج البحث', items:['تم تنظيف تسميات الدروس الاحتياطية المتبقية','تم تحسين روابط الدروس المرتبطة لتستخدم عناوين الدروس الصحيحة','أصبح التنقل داخل نتائج البحث أوضح وأكثر اتساقًا','تم صقل تدفق نتائج العملات التمثيلية بشكل إضافي','تم تحسين سهولة الاستخدام العامة للوصول الأسرع إلى التعلم','ركز هذا التحديث على جعل نتائج البحث المرتبطة أنظف وأسهل فهمًا وأكثر اتصالًا مباشرًا بصفحات التعلم الصحيحة.']},
    vi:{date:'2026-04-06', title:'Đã cải thiện điều hướng và liên kết kết quả tìm kiếm', items:['Các nhãn bài học fallback còn sót lại đã được làm sạch','Các liên kết bài học liên quan đã được chỉnh lại để dùng đúng tiêu đề bài học','Điều hướng kết quả tìm kiếm đã rõ ràng và nhất quán hơn','Luồng kết quả coin đại diện đã được tinh chỉnh thêm','Khả năng sử dụng tổng thể đã được cải thiện để truy cập học nhanh hơn','Bản cập nhật này tập trung làm cho các kết quả tìm kiếm liên quan gọn gàng hơn, dễ hiểu hơn và kết nối trực tiếp hơn tới đúng các trang học tập.']},
    es:{date:'2026-04-06', title:'Se mejoró la navegación y el enlace de resultados de búsqueda', items:['Se limpiaron las etiquetas residuales de lecciones en fallback','Se ajustaron los enlaces de lecciones relacionadas para usar los títulos correctos','La navegación de resultados de búsqueda se volvió más clara y más consistente','El flujo de resultados de monedas representativas se pulió aún más','Se mejoró la usabilidad general para un acceso de aprendizaje más rápido','Esta actualización se centró en hacer que los resultados relacionados fueran más limpios, más fáciles de entender y más directamente conectados con las páginas correctas de aprendizaje.']}
  };
  updateEntry20260406.ha = {
    date:'2026-04-06',
    title:'An inganta kewaya shafi da hade sakamakon bincike',
    items:[
      'An cire sauran lesson labels da suke komawa fallback ba tare da bukata ba',
      'An daidaita related lesson links domin su rika amfani da Hausa titles masu kyau',
      'An sa tafiyar sakamakon bincike ta zama mafi bayyane kuma mafi daidaito',
      'An sake goge yadda representative coin results ke bayyana',
      'An kara saukin amfani domin shiga koyo ya zama da sauri',
      'Wannan gyaran ya fi mayar da hankali ne kan tsaftace sakamakon bincike da hada su kai tsaye da shafukan koyo masu dacewa'
    ]
  };
  var updateEntry20260409 = {
    en:{date:'2026-04-09', title:'Hausa language support was newly added', items:['Overall multilingual translation coverage was strengthened more thoroughly','Remaining English expressions and mixed terminology were cleaned up','Language menu linking was finalized more stably','Language consistency in search results and related content was refined once more','Major code errors were fixed and overall runtime stability was improved','This update focused on making multilingual support including Hausa feel more natural and complete, while stably finishing the remaining translation, menu, and search-linking issues.']},
/*
    ko:{date:'2026-04-09', title:'하우사어 지원이 새롭게 추가되었습니다', items:['전체 언어 번역 구성이 더 촘촘하게 보강되었습니다','남아 있던 영어 표현과 혼합 용어를 정리했습니다','언어 메뉴 연결이 더 안정적으로 마무리되었습니다','검색결과와 관련 콘텐츠의 언어 일관성을 한 번 더 다듬었습니다','주요 코드 오류를 수정하고 전체 동작 안정성을 높였습니다','이번 업데이트는 하우사어를 포함한 다국어 지원을 더 자연스럽고 완성도 있게 정리하고, 남아 있던 번역·메뉴·검색 연결 문제를 안정적으로 마무리하는 데 집중했습니다.']},
    th:{date:'2026-04-09', title:'เพิ่มการรองรับภาษา Hausa ใหม่แล้ว', items:['โครงสร้างการแปลทุกภาษาได้รับการเสริมให้แน่นขึ้นอีกครั้ง','จัดระเบียบข้อความภาษาอังกฤษและคำผสมที่ยังหลงเหลืออยู่','การเชื่อมต่อเมนูภาษาถูกปิดงานได้อย่างเสถียรมากขึ้น','ความสอดคล้องของภาษาในผลการค้นหาและเนื้อหาที่เกี่ยวข้องถูกเกลาอีกครั้ง','แก้ไขข้อผิดพลาดหลักของโค้ดและยกระดับเสถียรภาพการทำงานโดยรวม','อัปเดตนี้มุ่งจัดระเบียบการรองรับหลายภาษา รวมถึงภาษา Hausa ให้เป็นธรรมชาติและสมบูรณ์ยิ่งขึ้น พร้อมปิดปัญหาที่เหลือของการแปล เมนู และการเชื่อมโยงการค้นหาอย่างเสถียร']},
    id:{date:'2026-04-09', title:'Dukungan bahasa Hausa baru ditambahkan', items:['Susunan terjemahan semua bahasa diperkuat dengan lebih rapat lagi','Ungkapan bahasa Inggris dan istilah campuran yang tersisa telah dirapikan','Keterhubungan menu bahasa diselesaikan dengan lebih stabil','Konsistensi bahasa pada hasil pencarian dan konten terkait dipoles sekali lagi','Kesalahan kode utama diperbaiki dan stabilitas keseluruhan ditingkatkan','Pembaruan ini berfokus menata dukungan multibahasa termasuk Hausa agar lebih alami dan lebih lengkap, sambil menuntaskan sisa masalah terjemahan, menu, dan koneksi pencarian dengan stabil.']},
*/
    ko:{date:'2026-04-09', title:'하우사어 지원이 새롭게 추가되었습니다', items:['전체 언어 번역 구성이 더 촘촘하게 보강되었습니다','남아 있던 영어 표현과 혼합 용어를 정리했습니다','언어 메뉴 연결이 더 안정적으로 마무리되었습니다','검색결과와 관련 콘텐츠의 언어 일관성을 한 번 더 다듬었습니다','주요 코드 오류를 수정하고 전체 동작 안정성을 높였습니다','이번 업데이트는 하우사어를 포함한 다국어 지원을 더 자연스럽고 완성도 있게 정리하고, 남아 있던 번역·메뉴·검색 연결 문제를 안정적으로 마무리하는 데 집중했습니다.']},
    th:{date:'2026-04-09', title:'เพิ่มการรองรับภาษา Hausa ใหม่แล้ว', items:['โครงสร้างการแปลทุกภาษาได้รับการเสริมให้ครอบคลุมยิ่งขึ้น','ได้จัดระเบียบข้อความภาษาอังกฤษและคำผสมที่ยังหลงเหลืออยู่','การเชื่อมต่อเมนูภาษาเสร็จสมบูรณ์อย่างเสถียรมากขึ้น','ปรับความสอดคล้องของภาษาในผลการค้นหาและเนื้อหาที่เกี่ยวข้องอีกครั้ง','แก้ไขข้อผิดพลาดของโค้ดหลักและเพิ่มเสถียรภาพการทำงานโดยรวม','การอัปเดตครั้งนี้มุ่งเน้นให้การรองรับหลายภาษา รวมถึง Hausa มีความเป็นธรรมชาติและสมบูรณ์ยิ่งขึ้น พร้อมปิดปัญหาที่เหลือของการแปล เมนู และการเชื่อมโยงการค้นหาอย่างเสถียร']},
    id:{date:'2026-04-09', title:'Dukungan bahasa Hausa baru ditambahkan', items:['Susunan terjemahan semua bahasa diperkuat dengan lebih rapat lagi','Ungkapan bahasa Inggris dan istilah campuran yang tersisa telah dirapikan','Keterhubungan menu bahasa diselesaikan dengan lebih stabil','Konsistensi bahasa pada hasil pencarian dan konten terkait dipoles sekali lagi','Kesalahan kode utama diperbaiki dan stabilitas keseluruhan ditingkatkan','Pembaruan ini berfokus menata dukungan multibahasa termasuk Hausa agar lebih alami dan lebih lengkap, sambil menuntaskan sisa masalah terjemahan, menu, dan koneksi pencarian dengan stabil.']},
    pt:{date:'2026-04-09', title:'O suporte ao idioma Hausa foi adicionado', items:['A estrutura de tradução de todos os idiomas foi reforçada de forma mais completa','Os textos em inglês restantes e os termos mistos foram organizados','A ligação do menu de idiomas foi concluída com mais estabilidade','A consistência de idioma nos resultados de pesquisa e no conteúdo relacionado foi refinada mais uma vez','Os principais erros de código foram corrigidos e a estabilidade geral de funcionamento foi elevada','Esta atualização se concentrou em deixar o suporte multilíngue, incluindo o Hausa, mais natural e mais completo, além de encerrar com estabilidade os problemas restantes de tradução, menu e conexão da pesquisa.']},
    tr:{date:'2026-04-09', title:'Hausa dili desteği yeni olarak eklendi', items:['Tüm dillerde çeviri yapısı daha sıkı biçimde güçlendirildi','Kalan İngilizce ifadeler ve karışık terimler temizlendi','Dil menüsü bağlantısı daha kararlı biçimde tamamlandı','Arama sonuçları ve ilgili içeriklerdeki dil tutarlılığı bir kez daha iyileştirildi','Başlıca kod hataları giderildi ve genel çalışma kararlılığı yükseltildi','Bu güncelleme, Hausa dahil çok dilli desteği daha doğal ve daha tamamlanmış hale getirmeye, ayrıca kalan çeviri, menü ve arama bağlantısı sorunlarını kararlı biçimde kapatmaya odaklandı.']},
    ar:{date:'2026-04-09', title:'تمت إضافة دعم لغة الهوسا حديثًا', items:['تم تعزيز بنية الترجمة لجميع اللغات بشكل أكثر إحكامًا','تم ترتيب ما تبقى من العبارات الإنجليزية والمصطلحات المختلطة','اكتمل ربط قائمة اللغات بشكل أكثر استقرارًا','تم صقل اتساق اللغة في نتائج البحث والمحتوى المرتبط مرة أخرى','تم إصلاح أخطاء الكود الرئيسية ورفع استقرار التشغيل العام','ركز هذا التحديث على جعل الدعم متعدد اللغات، بما في ذلك الهوسا، أكثر طبيعية واكتمالًا، وعلى إنهاء ما تبقى من مشكلات الترجمة والقائمة وربط البحث بشكل مستقر.']},
    ha:{date:'2026-04-09', title:'An kara tallafin harshen Hausa sabo', items:['An kara karfafa tsarin fassarar dukkan harsuna ya zama mafi cike da tsari','An gyara sauran rubutun Turanci da kalmomin gauraye da suka rage','An kammala hada menu na harshe cikin tsari mafi kwanciyar hankali','An sake gyara daidaiton harshe a sakamakon bincike da abubuwan da ke da alaka','An gyara manyan kurakuran lamba kuma an kara kwanciyar hankalin yadda shafin ke aiki gaba daya','Wannan sabuntawar ta fi mayar da hankali ne kan tsara tallafin harsuna da yawa, ciki har da Hausa, ya zama mafi dabi’a kuma mafi cika, tare da kammala sauran matsalolin fassara, menu, da hadin bincike cikin tsari mai kwanciyar hankali.']},
    vi:{date:'2026-04-09', title:'Đã bổ sung mới hỗ trợ tiếng Hausa', items:['Cấu trúc dịch thuật của toàn bộ ngôn ngữ đã được gia cố chặt chẽ hơn','Các phần tiếng Anh còn sót lại và thuật ngữ pha trộn đã được dọn lại','Liên kết menu ngôn ngữ đã được hoàn tất ổn định hơn','Tính nhất quán ngôn ngữ trong kết quả tìm kiếm và nội dung liên quan đã được tinh chỉnh thêm một lần nữa','Các lỗi mã chính đã được sửa và độ ổn định hoạt động tổng thể đã được nâng lên','Bản cập nhật này tập trung sắp xếp hỗ trợ đa ngôn ngữ, bao gồm cả tiếng Hausa, theo hướng tự nhiên và hoàn chỉnh hơn, đồng thời khép lại ổn định các vấn đề còn lại về bản dịch, menu và kết nối tìm kiếm.']},
    es:{date:'2026-04-09', title:'Se añadió nuevo soporte del idioma Hausa', items:['La estructura de traducción de todos los idiomas se reforzó de forma más densa','Se limpiaron las expresiones en inglés y los términos mixtos que quedaban','La conexión del menú de idiomas quedó cerrada de forma más estable','La consistencia de idioma en los resultados de búsqueda y el contenido relacionado se volvió a pulir','Se corrigieron errores principales de código y se elevó la estabilidad general de funcionamiento','Esta actualización se centró en ordenar el soporte multilingüe, incluido Hausa, de una forma más natural y completa, y en cerrar de manera estable los problemas restantes de traducción, menú y conexión de búsqueda.']}
  };
  var updateEntry20260410 = {
    en:{date:'2026-04-10', title:'Representative coin search flow was refined once more', items:['The autocomplete list structure was polished to feel more intuitive','Brief intro text was strengthened for general coin results','Connections were improved so internal site search results appear together','Representative coin card sections were stabilized to display correctly when selected','Search-related errors were fixed and the overall interaction flow was smoothed out','This update focused on making representative coin search, general coin lists, and internal site search results appear together more naturally, while improving selection flow and overall stability.']},
    ko:{date:'2026-04-10', title:'대표 코인 검색 흐름이 한 번 더 정리되었습니다', items:['자동검색 목록 구조가 더 직관적으로 다듬어졌습니다','일반 코인 결과에 간략한 소개 문구를 보강했습니다','사이트 내부 검색 결과가 함께 보이도록 연결을 개선했습니다','대표 코인 카드 섹션이 선택 시 정상 표시되도록 안정성을 높였습니다','검색 관련 오류를 수정하고 전체 동작 흐름을 더 매끄럽게 정리했습니다','이번 업데이트는 대표 코인 검색과 일반 코인 목록, 그리고 사이트 내부 검색 결과가 더 자연스럽게 함께 보이도록 정리하고, 선택 흐름과 안정성을 높이는 데 집중했습니다.']},
    th:{date:'2026-04-10', title:'การไหลของการค้นหาเหรียญตัวแทนถูกจัดระเบียบอีกครั้ง', items:['โครงสร้างรายการค้นหาอัตโนมัติถูกเกลาให้เข้าใจง่ายขึ้น','ได้เสริมข้อความแนะนำสั้นๆ ให้ผลลัพธ์เหรียญทั่วไป','ปรับการเชื่อมต่อให้ผลการค้นหาภายในเว็บไซต์แสดงร่วมกัน','เพิ่มเสถียรภาพให้ส่วนการ์ดเหรียญตัวแทนแสดงได้ถูกต้องเมื่อเลือก','แก้ไขข้อผิดพลาดที่เกี่ยวกับการค้นหาและจัดลำดับการทำงานโดยรวมให้ลื่นไหลขึ้น','การอัปเดตครั้งนี้มุ่งจัดระเบียบให้การค้นหาเหรียญตัวแทน รายการเหรียญทั่วไป และผลการค้นหาภายในเว็บไซต์แสดงร่วมกันได้อย่างเป็นธรรมชาติมากขึ้น พร้อมยกระดับความเสถียรของลำดับการเลือก']},
    id:{date:'2026-04-10', title:'Alur pencarian koin perwakilan dirapikan sekali lagi', items:['Struktur daftar autocomplete dipoles agar terasa lebih intuitif','Kalimat pengantar singkat pada hasil koin umum diperkuat','Koneksinya diperbaiki agar hasil pencarian internal situs tampil bersama','Stabilitas bagian kartu koin perwakilan ditingkatkan agar muncul normal saat dipilih','Kesalahan terkait pencarian diperbaiki dan alur kerja keseluruhan dirapikan agar lebih mulus','Pembaruan ini berfokus menata agar pencarian koin perwakilan, daftar koin umum, dan hasil pencarian internal situs tampil bersama secara lebih alami, sambil meningkatkan alur pemilihan dan stabilitas secara keseluruhan.']},
    pt:{date:'2026-04-10', title:'O fluxo de busca de moedas principais foi reorganizado mais uma vez', items:['A estrutura da lista de preenchimento automático foi refinada para ficar mais intuitiva','Foi reforçado um texto curto de introdução nos resultados de moedas gerais','A ligação foi melhorada para que os resultados internos do site apareçam juntos','A estabilidade da seção de cartão da moeda principal foi elevada para aparecer corretamente ao selecionar','Erros relacionados à busca foram corrigidos e o fluxo geral de funcionamento ficou mais suave','Esta atualização se concentrou em organizar a busca de moedas principais, a lista de moedas gerais e os resultados internos do site para que apareçam juntos de forma mais natural, enquanto melhorava o fluxo de seleção e a estabilidade.']},
    tr:{date:'2026-04-10', title:'Temsil coin arama akışı bir kez daha düzenlendi', items:['Otomatik tamamlama listesi yapısı daha sezgisel olacak şekilde iyileştirildi','Genel coin sonuçlarına kısa tanıtım metinleri eklendi','Site içi arama sonuçlarının birlikte görünmesi için bağlantılar geliştirildi','Temsil coin kartı bölümünün seçim sırasında doğru görünmesi için kararlılık artırıldı','Aramayla ilgili hatalar düzeltildi ve genel etkileşim akışı daha akıcı hale getirildi','Bu güncelleme, temsil coin araması, genel coin listesi ve site içi arama sonuçlarının daha doğal şekilde birlikte görünmesini düzenlemeye, aynı zamanda seçim akışını ve genel kararlılığı güçlendirmeye odaklandı.']},
    ar:{date:'2026-04-10', title:'تم تنظيم مسار بحث العملات التمثيلية مرة أخرى', items:['تم تهذيب بنية قائمة الإكمال التلقائي لتصبح أكثر وضوحًا','تم تعزيز عبارات التعريف القصيرة في نتائج العملات العامة','تم تحسين الربط لكي تظهر نتائج البحث الداخلية في الموقع معًا','تم رفع استقرار قسم بطاقة العملة التمثيلية ليظهر بشكل صحيح عند الاختيار','تم إصلاح الأخطاء المرتبطة بالبحث وجعل تدفق العمل العام أكثر سلاسة','ركز هذا التحديث على تنظيم بحث العملات التمثيلية وقوائم العملات العامة ونتائج البحث الداخلية في الموقع بحيث تظهر معًا بصورة أكثر طبيعية، مع تحسين تدفق الاختيار ورفع الاستقرار العام.']},
    ha:{date:'2026-04-10', title:'An sake tsara tafiyar binciken manyan kudaden dijital', items:['An kara gyara tsarin jerin bincike mai bayyana sakamako domin ya fi saukin fahimta','An kara takaitaccen bayanin gabatarwa a sakamakon sauran kudaden dijital','An inganta hadin da ke sa sakamakon binciken cikin shafin su bayyana tare','An kara kwanciyar hankali domin sashen katin babban kudin dijital ya rika bayyana daidai idan an zabe shi','An gyara kurakuran da suka shafi bincike kuma an sa dukkan tafiyar aiki ta zama mafi laushi','Wannan sabuntawar ta mayar da hankali ne kan tsara yadda binciken manyan kudaden dijital, jerin sauran kudaden dijital, da sakamakon binciken cikin shafin suke bayyana tare cikin salo mafi dabi’a, tare da kara daidaito da kwanciyar hankali ga tafiyar zabi.']},
    vi:{date:'2026-04-10', title:'Luồng tìm kiếm coin đại diện đã được sắp xếp lại thêm một lần nữa', items:['Cấu trúc danh sách tự động gợi ý đã được chỉnh lại để trực quan hơn','Đã bổ sung câu giới thiệu ngắn cho kết quả coin thông thường','Liên kết đã được cải thiện để các kết quả tìm kiếm bên trong trang hiển thị cùng nhau','Độ ổn định của phần thẻ coin đại diện được nâng lên để hiển thị đúng khi chọn','Các lỗi liên quan đến tìm kiếm đã được sửa và luồng hoạt động tổng thể được làm mượt hơn','Bản cập nhật này tập trung sắp xếp để tìm kiếm coin đại diện, danh sách coin thông thường và kết quả tìm kiếm bên trong trang cùng xuất hiện tự nhiên hơn, đồng thời nâng độ ổn định và luồng chọn kết quả.']},
    es:{date:'2026-04-10', title:'El flujo de búsqueda de monedas principales se ordenó una vez más', items:['La estructura de la lista de autocompletado se pulió para que resulte más intuitiva','Se reforzaron las frases cortas de presentación en los resultados de monedas generales','Se mejoró la conexión para que los resultados internos del sitio aparezcan juntos','Se elevó la estabilidad de la sección de tarjeta de moneda principal para que se muestre correctamente al seleccionarla','Se corrigieron errores relacionados con la búsqueda y se ordenó el flujo general para que fuera más fluido','Esta actualización se centró en organizar la búsqueda de monedas principales, la lista de monedas generales y los resultados internos del sitio para que aparezcan juntos de forma más natural, al mismo tiempo que mejoraba el flujo de selección y la estabilidad general.']}
  };
  var updateEntry20260411 = {
    en:{date:'2026-04-11', title:'The home screen layout was simplified and made easier to scan', items:['Duplicate home menu areas were cleaned up to make the flow feel cleaner','The recent updates area was reinforced so it appears more naturally on the home screen','Lesson 6 "Buying Your First Crypto" and Lesson 7 "Spotting Crypto Scams" were newly added','Links were refined so Lesson 6 and 7 are easier to open from the Start Guide and the home menu','The home display structure was reorganized so access to the full menu is clearer','This update focused on making the home flow more intuitive and helping learners continue more easily into the newly added Lesson 6 and Lesson 7.']},
    ko:{date:'2026-04-11', title:'홈 화면 구성이 더 단순하고 보기 쉽게 정리되었습니다', items:['중복되던 홈 메뉴 영역을 정리해 흐름을 더 깔끔하게 만들었습니다','최근 업데이트 영역이 홈에서도 더 자연스럽게 보이도록 연결을 보강했습니다','Lesson 6 "첫 암호화폐 구매하기"와 Lesson 7 "암호화폐 사기 구별하기"가 새롭게 추가되었습니다','시작 가이드와 홈 메뉴에서 Lesson 6, 7 접근이 더 쉬워지도록 연결을 다듬었습니다','전체 메뉴 접근성이 더 명확해지도록 홈 표시 구조를 정리했습니다','이번 업데이트는 홈 화면의 흐름을 더 직관적으로 정리하고, 새롭게 추가된 Lesson 6과 Lesson 7까지 더 쉽게 이어서 학습할 수 있도록 만드는 데 집중했습니다.']},
    th:{date:'2026-04-11', title:'โครงสร้างหน้าโฮมถูกจัดให้เรียบง่ายและดูง่ายขึ้น', items:['ได้จัดระเบียบบริเวณเมนูหน้าโฮมที่ซ้ำกันให้ลำดับการใช้งานดูสะอาดขึ้น','ได้เสริมการเชื่อมต่อให้ส่วนอัปเดตล่าสุดแสดงบนหน้าโฮมได้อย่างเป็นธรรมชาติมากขึ้น','ได้เพิ่ม Lesson 6 "การซื้อคริปโตครั้งแรก" และ Lesson 7 "การแยกแยะคริปโตสแกม" ใหม่แล้ว','ได้เกลาการเชื่อมต่อในหน้าเริ่มต้นและเมนูโฮมเพื่อให้เข้า Lesson 6 และ 7 ได้ง่ายขึ้น','ได้จัดโครงสร้างการแสดงผลบนหน้าโฮมใหม่ให้การเข้าถึงเมนูทั้งหมดชัดเจนขึ้น','การอัปเดตครั้งนี้มุ่งทำให้ลำดับบนหน้าโฮมตรงไปตรงมามากขึ้น และช่วยให้ผู้ใช้เรียนต่อไปยัง Lesson 6 และ Lesson 7 ที่เพิ่มใหม่ได้ง่ายขึ้น']},
    id:{date:'2026-04-11', title:'Susunan halaman beranda dibuat lebih sederhana dan lebih mudah dilihat', items:['Area menu beranda yang sempat tumpang tindih dirapikan agar alurnya terasa lebih bersih','Koneksi bagian update terbaru diperkuat agar tampil lebih alami juga di beranda','Lesson 6 "Membeli Crypto Pertama" dan Lesson 7 "Mengenali Penipuan Crypto" baru ditambahkan','Sambungan di Start Guide dan menu beranda dirapikan agar akses ke Lesson 6 dan 7 lebih mudah','Struktur tampilan beranda diatur ulang agar akses ke seluruh menu lebih jelas','Pembaruan ini berfokus membuat alur di beranda terasa lebih intuitif sambil memudahkan pengguna melanjutkan ke Lesson 6 dan Lesson 7 yang baru ditambahkan.']},
    pt:{date:'2026-04-11', title:'A estrutura da tela inicial ficou mais simples e mais fácil de ver', items:['As áreas duplicadas do menu inicial foram organizadas para deixar o fluxo mais limpo','A ligação da área de atualizações recentes foi reforçada para aparecer de forma mais natural também na home','A Lesson 6 "Comprar sua primeira cripto" e a Lesson 7 "Identificar golpes cripto" foram adicionadas','As ligações na página Guia Inicial e no menu da home foram refinadas para facilitar o acesso às Lessons 6 e 7','A estrutura de exibição da home foi reorganizada para tornar o acesso ao menu completo mais claro','Esta atualização se concentrou em deixar o fluxo da home mais intuitivo e em facilitar a continuação do aprendizado até a nova Lesson 6 e a nova Lesson 7.']},
    tr:{date:'2026-04-11', title:'Ana sayfa düzeni daha sade ve daha kolay okunur hale getirildi', items:['Tekrarlanan ana sayfa menü alanları temizlenerek akış daha derli toplu hale getirildi','Son güncellemeler alanının ana sayfada daha doğal görünmesi için bağlantılar güçlendirildi','Lesson 6 "İlk Kriptonu Satın Almak" ve Lesson 7 "Kripto Dolandırıcılığını Anlamak" yeni olarak eklendi','Başlangıç Rehberi ve ana sayfa menüsündeki bağlantılar, Lesson 6 ve 7’ye daha kolay ulaşılacak şekilde düzenlendi','Tüm menülere erişim daha açık olsun diye ana sayfa gösterim yapısı yeniden toparlandı','Bu güncelleme, ana sayfa akışını daha sezgisel hale getirmeye ve yeni eklenen Lesson 6 ile Lesson 7’ye daha kolay devam etmeyi sağlamaya odaklandı.']},
    ar:{date:'2026-04-11', title:'أصبح تنظيم الشاشة الرئيسية أبسط وأسهل في القراءة', items:['تم ترتيب مناطق قائمة الصفحة الرئيسية المتكررة ليصبح التدفق أنظف','تم تعزيز ربط قسم آخر التحديثات ليظهر بشكل أكثر طبيعية أيضا على الصفحة الرئيسية','تمت إضافة Lesson 6 "شراء أول عملة رقمية" و Lesson 7 "كشف الاحتيال في العملات الرقمية"','تم تهذيب الربط في دليل البداية وفي قائمة الصفحة الرئيسية لتسهيل الوصول إلى Lesson 6 و Lesson 7','تم تنظيم بنية عرض الصفحة الرئيسية بحيث يصبح الوصول إلى القائمة الكاملة أوضح','ركز هذا التحديث على جعل تدفق الصفحة الرئيسية أكثر وضوحا وسهولة، وعلى مساعدة المستخدم على متابعة التعلم بسهولة أكبر حتى Lesson 6 و Lesson 7 الجديدتين.']},
    ha:{date:'2026-04-11', title:'An sa tsarin shafin gida ya zama mafi sauki kuma mafi saukin gani', items:['An gyara wuraren menu na shafin gida da suka maimaitu domin tafiyar ta zama mafi tsafta','An kara daidaita hadin sashen sabbin sabuntawa domin ya fi bayyana cikin dabi\'a a shafin gida','An kara Lesson 6 "Siyan kudin dijital na farko" da Lesson 7 "Yadda za a gane damfarar crypto" a matsayin sababbin darussa','An sake tsara hanyoyin shiga daga Jagorar Fara da menu na gida domin bude Lesson 6 da 7 ya fi sauki','An tsara yadda ake nuna shafin gida domin shiga dukkan menu ya fi bayyanuwa','Wannan sabuntawar ta mayar da hankali ne kan sa tafiyar shafin gida ta fi zama mai saukin fahimta, tare da saukaka ci gaba da koyo zuwa sabon Lesson 6 da Lesson 7.']},
    vi:{date:'2026-04-11', title:'Bố cục trang chủ đã được làm gọn hơn và dễ nhìn hơn', items:['Các khu vực menu trang chủ bị trùng đã được dọn lại để luồng hiển thị gọn gàng hơn','Phần cập nhật gần đây được nối lại để hiển thị tự nhiên hơn ngay trên trang chủ','Đã bổ sung Lesson 6 "Mua crypto đầu tiên" và Lesson 7 "Nhận biết lừa đảo crypto"','Liên kết trong phần Hướng dẫn bắt đầu và menu trang chủ đã được chỉnh lại để mở Lesson 6 và 7 dễ hơn','Cấu trúc hiển thị của trang chủ được sắp lại để việc mở toàn bộ menu rõ ràng hơn','Bản cập nhật này tập trung làm cho luồng trang chủ trực quan hơn và giúp người dùng tiếp tục học sang Lesson 6 và Lesson 7 mới được thêm vào dễ dàng hơn.']},
    es:{date:'2026-04-11', title:'La estructura de la pantalla de inicio quedó más simple y más fácil de leer', items:['Se ordenaron las áreas duplicadas del menú de inicio para que el flujo se vea más limpio','Se reforzó la conexión del área de actualizaciones recientes para que también aparezca de forma más natural en la portada','Se añadieron la Lesson 6 "Comprar tu primera cripto" y la Lesson 7 "Detectar estafas cripto"','Se ajustaron los enlaces en la guía inicial y en el menú de inicio para que sea más fácil abrir la Lesson 6 y la Lesson 7','Se reorganizó la estructura de visualización de la home para que el acceso al menú completo quede más claro','Esta actualización se centró en hacer más intuitivo el flujo de la portada y en facilitar que el usuario siga aprendiendo con la nueva Lesson 6 y la nueva Lesson 7.']}
  };
  var updateEntry20260413 = {
    en:{date:'2026-04-13', title:'Search result quality was refined once more so practical keywords connect more clearly', items:['Security-related search flows were strengthened for terms such as address poisoning, seed phrase, fake website, and wrong network','A bookmark habit tip was added to the Safety page to reinforce a practical official-domain safety routine','A warning about using bookmarked official sites was also connected inside Lesson 7','Address poisoning explanations, glossary coverage, and source links were expanded to make scam-prevention learning clearer','On the home screen, the flow of free lessons, multilingual learning, free PDFs, and premium guidebooks was made easier to understand','This update focused on helping beginners move more naturally from search to safety habits and scam-prevention learning across the site.']},
    ko:{date:'2026-04-13', title:'검색 결과 품질을 한 번 더 정리해 실전 키워드가 더 잘 연결되도록 보강했습니다', items:['주소 오염 공격, 시드 문구, 가짜 사이트, 잘못된 네트워크 같은 보안 관련 검색 흐름을 강화했습니다','Safety 페이지에 공식 도메인을 북마크해 사용하는 습관을 추가해 실전 안전 팁을 보강했습니다','Lesson 7에도 북마크된 공식 사이트 사용 습관과 관련된 경고문을 연결했습니다','Address poisoning 관련 설명, 용어사전, 출처 연결을 보강해 사기 예방 학습 흐름을 더 또렷하게 정리했습니다','홈 화면에서는 이 사이트가 제공하는 무료 강의, 다국어 학습, 무료 PDF, 유료 가이드북 흐름이 더 잘 보이도록 보강했습니다','이번 업데이트는 초보자가 검색부터 안전 습관, 사기 예방 학습까지 더 자연스럽게 이어서 이해할 수 있도록 전체 흐름을 정리하는 데 집중했습니다.']},
    th:{date:'2026-04-13', title:'ปรับคุณภาพผลการค้นหาอีกครั้งเพื่อให้คำค้นเชิงใช้งานเชื่อมโยงได้ชัดเจนขึ้น', items:['เสริมเส้นทางการค้นหาด้านความปลอดภัยสำหรับคำอย่าง address poisoning, seed phrase, fake website และ wrong network','เพิ่มคำแนะนำเรื่องการใช้บุ๊กมาร์กโดเมนทางการในหน้า Safety เพื่อเสริมพฤติกรรมความปลอดภัยที่ใช้ได้จริง','เชื่อมคำเตือนเรื่องการใช้เว็บไซต์ทางการที่บันทึกไว้แล้วเข้าไปใน Lesson 7 ด้วย','ขยายคำอธิบาย คำศัพท์ และแหล่งอ้างอิงเกี่ยวกับ address poisoning เพื่อให้การเรียนรู้เรื่องป้องกันการหลอกลวงชัดเจนขึ้น','บนหน้าโฮม มีการทำให้โครงเรื่องของบทเรียนฟรี การเรียนหลายภาษา PDF ฟรี และคู่มือแบบพรีเมียมมองเห็นได้ชัดขึ้น','อัปเดตนี้มุ่งเน้นให้ผู้เริ่มต้นเข้าใจต่อเนื่องได้เป็นธรรมชาติมากขึ้น ตั้งแต่การค้นหาไปจนถึงนิสัยด้านความปลอดภัยและการเรียนรู้เรื่องการป้องกันการหลอกลวง']},
    id:{date:'2026-04-13', title:'Kualitas hasil pencarian dirapikan sekali lagi agar kata kunci praktis terhubung lebih jelas', items:['Alur pencarian terkait keamanan diperkuat untuk istilah seperti address poisoning, seed phrase, fake website, dan wrong network','Tips kebiasaan memakai bookmark domain resmi ditambahkan ke halaman Safety untuk memperkuat kebiasaan aman yang benar-benar berguna','Peringatan tentang memakai situs resmi yang sudah dibookmark juga dihubungkan ke dalam Lesson 7','Penjelasan, glosarium, dan sumber terkait address poisoning diperluas agar alur belajar pencegahan scam terasa lebih jelas','Di halaman home, alur pelajaran gratis, pembelajaran multibahasa, PDF gratis, dan guidebook premium dibuat lebih mudah dipahami','Pembaruan ini berfokus membantu pemula berpindah lebih alami dari pencarian ke kebiasaan aman dan pembelajaran pencegahan scam di seluruh situs.']},
    pt:{date:'2026-04-13', title:'A qualidade dos resultados de busca foi refinada mais uma vez para ligar melhor palavras-chave práticas', items:['Os fluxos de busca ligados à segurança foram reforçados para termos como address poisoning, seed phrase, site falso e rede errada','Foi adicionada à página Safety uma dica sobre usar domínios oficiais salvos em favoritos para reforçar um hábito de segurança mais prático','Um aviso sobre usar sites oficiais salvos em favoritos também foi ligado dentro da Lesson 7','As explicações, o glossário e as fontes sobre address poisoning foram ampliados para deixar o aprendizado de prevenção de golpes mais claro','Na home, o fluxo de aulas gratuitas, estudo multilíngue, PDFs gratuitos e guias premium passou a aparecer de forma mais clara','Esta atualização se concentrou em ajudar iniciantes a seguir de forma mais natural da busca para hábitos de segurança e aprendizado de prevenção de golpes em todo o site.']},
    tr:{date:'2026-04-13', title:'Arama sonucu kalitesi bir kez daha düzenlenerek pratik anahtar kelimelerin daha iyi bağlanması sağlandı', items:['Address poisoning, seed phrase, sahte site ve yanlış ağ gibi güvenlik odaklı arama akışları güçlendirildi','Safety sayfasına resmi alan adını yer imlerine kaydetme alışkanlığı eklenerek pratik güvenlik ipuçları güçlendirildi','Yer imlerine kaydedilmiş resmi siteleri kullanma uyarısı Lesson 7 içine de bağlandı','Address poisoning ile ilgili açıklamalar, sözlük girdileri ve kaynak bağlantıları genişletilerek dolandırıcılığı önleme öğrenimi daha belirgin hale getirildi','Ana sayfada ücretsiz dersler, çok dilli öğrenme, ücretsiz PDFler ve premium rehber akışı daha görünür hale getirildi','Bu güncelleme, yeni başlayanların aramadan güvenlik alışkanlıklarına ve dolandırıcılığı önleme öğrenimine daha doğal şekilde ilerlemesine odaklandı.']},
    ar:{date:'2026-04-13', title:'تم تحسين جودة نتائج البحث مرة أخرى لكي ترتبط الكلمات العملية بشكل أوضح', items:['تم تقوية مسارات البحث الأمنية لكلمات مثل address poisoning و seed phrase والمواقع المزيفة والشبكة الخاطئة','تمت إضافة نصيحة في صفحة Safety حول استخدام النطاقات الرسمية المحفوظة في الإشارات المرجعية لتعزيز عادة أمان عملية','كما تم ربط تحذير استخدام المواقع الرسمية المحفوظة في الإشارات المرجعية داخل Lesson 7','تم توسيع الشرح والمصطلحات والمصادر المتعلقة بـ address poisoning حتى يصبح تعلم الوقاية من الاحتيال أوضح','وفي الصفحة الرئيسية أصبح تدفق الدروس المجانية والتعلم متعدد اللغات وملفات PDF المجانية والكتب الإرشادية المدفوعة أوضح للزائر','يركز هذا التحديث على مساعدة المبتدئ على الانتقال بشكل طبيعي أكثر من البحث إلى عادات الأمان وتعلم الوقاية من الاحتيال في كل أجزاء الموقع.']},
    ha:{date:'2026-04-13', title:'An sake inganta ingancin sakamakon bincike domin kalmomin amfani su fi hade da kyau', items:['An karfafa hanyoyin binciken tsaro ga kalmomi kamar address poisoning, seed phrase, shafin bogi, da wrong network','An kara shawarar amfani da official domain da aka yi wa bookmark a shafin Safety domin karfafa dabi\'ar tsaro mai amfani a zahiri','An kuma hada gargadi kan amfani da shafukan hukuma da aka adana a bookmark a cikin Lesson 7','An fadada bayanin address poisoning, kamus, da hanyoyin madogara domin tsarin koyon kariya daga damfara ya fi bayyana','A shafin gida kuma an sa tsarin darussa na kyauta, koyon harsuna da yawa, PDF na kyauta, da jagororin premium su fi bayyana','Wannan sabuntawar ta mayar da hankali ne kan taimaka wa mai farawa ya fahimci tafiya daga bincike zuwa dabi\'un tsaro da koyon kariya daga damfara cikin sauki a fadin shafin.']},
    vi:{date:'2026-04-13', title:'Chất lượng kết quả tìm kiếm được tinh chỉnh thêm để các từ khóa thực tế liên kết rõ ràng hơn', items:['Các luồng tìm kiếm về bảo mật được tăng cường cho những từ như address poisoning, seed phrase, fake website và wrong network','Một mẹo về thói quen dùng bookmark cho domain chính thức đã được thêm vào trang Safety để củng cố thói quen an toàn thực tế','Cảnh báo về việc dùng các trang chính thức đã lưu bookmark cũng được nối vào Lesson 7','Phần giải thích, thuật ngữ và nguồn về address poisoning được mở rộng để việc học phòng tránh lừa đảo rõ ràng hơn','Trên trang chủ, luồng bài học miễn phí, học đa ngôn ngữ, PDF miễn phí và guidebook premium được làm cho dễ nhận ra hơn','Bản cập nhật này tập trung giúp người mới đi từ tìm kiếm sang thói quen an toàn và việc học phòng tránh lừa đảo một cách tự nhiên hơn trên toàn bộ trang.']},
    es:{date:'2026-04-13', title:'La calidad de los resultados de búsqueda se ajustó una vez más para conectar mejor las palabras clave prácticas', items:['Se reforzaron los flujos de búsqueda de seguridad para términos como address poisoning, seed phrase, fake website y wrong network','Se añadió a la página Safety un consejo sobre usar dominios oficiales guardados en marcadores para reforzar un hábito de seguridad más práctico','También se conectó dentro de Lesson 7 una advertencia sobre usar sitios oficiales guardados en marcadores','Se ampliaron las explicaciones, el glosario y las fuentes sobre address poisoning para que el aprendizaje de prevención de estafas sea más claro','En la home, el flujo de clases gratuitas, aprendizaje multilingüe, PDF gratuitos y guías premium se hizo más visible y fácil de entender','Esta actualización se centró en ayudar a los principiantes a pasar de la búsqueda a los hábitos de seguridad y al aprendizaje de prevención de estafas de una forma más natural.']}
  };
  updateEntry20260413.br = updateEntry20260413.pt;
  var updateEntry20260412 = {
    en:{
      date:'2026-04-12',
      title:'Search result quality and practical security links were refined',
      items:[
        'Search result quality was refined so practical keywords connect more clearly.',
        'Security-related search links were strengthened for terms such as address poisoning, seed phrase, fake websites, and wrong network.',
        'A bookmark habit tip was added to the Safety page to reinforce checking and saving official domains first.',
        'A warning about using bookmarked official sites was also connected inside Lesson 7.',
        'This update focused on helping beginners move more naturally from search to safer habits and scam-prevention learning.'
      ]
    },
    ko:{
      date:'2026-04-12',
      title:'검색 결과 품질과 보안 학습 흐름을 정리했습니다',
      items:[
        '검색 결과 품질을 정리해 실전 키워드가 더 잘 연결되도록 보강했습니다',
        '주소 오염 공격, 시드 문구, 가짜 사이트, 잘못된 네트워크 같은 보안 관련 검색 흐름을 강화했습니다',
        'Safety 페이지에 공식 도메인을 북마크해 사용하는 습관을 추가해 실전 안전 팁을 보강했습니다',
        'Lesson 7에도 북마크된 공식 사이트 사용 습관과 관련된 경고문을 연결했습니다',
        '이번 업데이트는 초보자가 검색부터 안전 습관, 사기 예방 학습까지 더 자연스럽게 이어서 이해할 수 있도록 흐름을 정리하는 데 집중했습니다'
      ]
    }
  };
  ['th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateEntry20260413[lang]){
      updateEntry20260412[lang] = JSON.parse(JSON.stringify(updateEntry20260413[lang]));
      updateEntry20260412[lang].date = '2026-04-12';
    }
  });
  updateEntry20260412.br = updateEntry20260412.pt;
  updateHistory.ha = [
    {
      date:'2026-04-06',
      title:'An inganta kewaya shafi da hade sakamakon bincike',
      items:[
        'An cire sauran lesson labels da suke komawa fallback ba tare da bukata ba',
        'An daidaita related lesson links domin su rika amfani da Hausa titles masu kyau',
        'An sa tafiyar sakamakon bincike ta zama mafi bayyane kuma mafi daidaito',
        'An sake goge yadda representative coin results ke bayyana',
        'An kara saukin amfani domin shiga koyo ya zama da sauri',
        'Wannan gyaran ya fi mayar da hankali ne kan tsaftace sakamakon bincike da hada su kai tsaye da shafukan koyo masu dacewa'
      ]
    },
    {
      date:'2026-04-04',
      title:'An fadada tsarin bincike na coins',
      items:[
        'An fayyace taswirar coin da manyan batutuwan da suke wakilta',
        'An tsara katunan taƙaitaccen bayani domin sakamakon binciken coin',
        'An hada Darussa, Kamus, FAQ, Laburaren Madogara, da Tsaro cikin sakamakon bincike',
        'An kara bayyana yadda bayanin coin mai harsuna da yawa ke aiki',
        'An karkata tsarin domin binciken coin ya kasance na ilimi maimakon na hasashen farashi'
      ]
    },
    {
      date:'2026-04-03',
      title:'An fadada Laburaren Madogara da kewaya ta gani',
      items:[
        'An kara gumaka domin kewaya ta fi bayyana',
        'An kara katunan kwatantawa',
        'An kara akwatunan takaitaccen bayani',
        'An fadada Laburaren Madogara da karin makaloli da karin rukunai',
        'An kara nuna gaskiyar tushe da tsarin koyo mai ma\'ana'
      ]
    },
    {
      date:'2026-04-02',
      title:'An kara bincike, ci gaba da koyo, da kayan taimako ga masu farawa',
      items:[
        'An kara search',
        'An kara Continue Learning / Resume Learning',
        'An kara Beginner Roadmap',
        'An kara Top 5 Beginner Mistakes',
        'An kara sanarwar update ta harshe'
      ]
    },
    {
      date:'2026-04-01',
      title:'Sabbin shafuka: Fara Nan, FAQ, da Tsaro',
      items:[
        'An kara shafin Fara Nan',
        'An kara shafin FAQ',
        'An kara shafin Tsaro',
        'An gyara kwarewar shiga daga Home domin PC da wayar hannu'
      ]
    },
    {
      date:'2026-03-31',
      title:'An inganta tsarin dandali da saukin amfani',
      items:[
        'An inganta kwarewar amfani da harsuna da yawa',
        'An kara bayyana navigation da sassan shafi',
        'An inganta amfani da Kamus da Laburaren Madogara',
        'Tsarin dandali ya zama mafi tsari da saukin bi'
      ]
    },
    {
      date:'2026-03-30',
      title:'An gyara tafiyar koyon masu farawa',
      items:[
        'An inganta tsarin koyo da aka gina don sabbin masu amfani',
        'An sake tsara darussa domin su fi saukin fahimta',
        'An kara tsari mai saukin bi ga mai farawa',
        'An kara fayyace alkiblar ilimi ga masu amfani da yawa'
      ]
    },
    {
      date:'2026-03-29',
      title:'Kaddamarwar farko',
      items:[
        'An fara Crypto Academy',
        'An gina babban tsarin ilimi mai harsuna da yawa',
        'An kafa ainihin tafiyar darussa',
        'An shirya tsarin farko na Home, Lessons, Glossary, da Source Library'
      ]
    }
  ];
  ['en','ko','th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateHistory[lang] && (!updateHistory[lang][0] || updateHistory[lang][0].date !== '2026-04-06')){
      updateHistory[lang].unshift(updateEntry20260406[lang]);
    }
  });
  ['en','ko','th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateHistory[lang] && updateEntry20260409[lang]){
      updateHistory[lang] = updateHistory[lang].filter(function(entry){ return entry.date !== '2026-04-09'; });
      updateHistory[lang].unshift(updateEntry20260409[lang]);
    }
  });
  ['en','ko','th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateHistory[lang] && updateEntry20260410[lang]){
      updateHistory[lang] = updateHistory[lang].filter(function(entry){ return entry.date !== '2026-04-10'; });
      updateHistory[lang].unshift(updateEntry20260410[lang]);
    }
  });
  ['en','ko','th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateHistory[lang] && updateEntry20260411[lang]){
      updateHistory[lang] = updateHistory[lang].filter(function(entry){ return entry.date !== '2026-04-11'; });
      updateHistory[lang].unshift(updateEntry20260411[lang]);
    }
  });
  ['en','ko','th','id','pt','tr','ar','ha','vi','es'].forEach(function(lang){
    if(updateHistory[lang] && updateEntry20260412[lang]){
      updateHistory[lang] = updateHistory[lang].filter(function(entry){ return entry.date !== '2026-04-12'; });
      updateHistory[lang].unshift(updateEntry20260412[lang]);
    }
  });
  // br mirrors pt
  updateHistory.br = updateHistory.pt;
  window.getUpdateHistoryEntries = function(lang){
    var targetLang = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en');
    return (updateHistory[targetLang] || updateHistory.en || []).slice();
  };

  // ─── Inject ar/vi nav keys (those langs are not in the main ui object) ─
  var arViKeys = {
    ar:{'nav.updates':'سجل التحديثات','nav.updatessub':'ما الذي تغيّر ومتى','updates.title':'سجل التحديثات','updates.desc':'سجل بالتحسينات التي أُضيفت إلى هذه المنصة عبر الزمن.'},
    vi:{'nav.updates':'Lịch sử Cập nhật','nav.updatessub':'Những thay đổi và thời điểm','updates.title':'Lịch sử Cập nhật','updates.desc':'Nhật ký các cải tiến được thực hiện trên nền tảng này theo thời gian.'}
  };
  if(typeof ui !== 'undefined'){
    ['ar','vi'].forEach(function(lang){
      if(!ui[lang]) ui[lang] = {};
      Object.assign(ui[lang], arViKeys[lang]);
    });
  }

  // ─── renderUpdateHistory ──────────────────────────────────────────────
  function renderUpdateHistory(){
    var data = updateHistory[currentLang] || updateHistory.en;
    var title = (typeof t === 'function') ? t('updates.title') : 'Update History';
    var desc  = (typeof t === 'function') ? t('updates.desc')  : '';
    var metaCat = (typeof t === 'function') ? t('nav.updates') : 'Update History';

    var html = '<div class="lc-header">'
      + '<div class="lc-meta"><span class="meta-pill">U</span><span class="meta-cat">'+metaCat+'</span></div>'
      + '<h1 class="lc-title">'+title+'</h1>'
      + '<p class="lc-intro">'+desc+'</p>'
      + '</div>'
      + '<div class="update-timeline">';

    data.forEach(function(entry, idx){
      html += '<div class="update-entry">'
        + '<div class="update-dot-col"><div class="update-dot"></div>'
        + (idx < data.length - 1 ? '<div class="update-line"></div>' : '')
        + '</div>'
        + '<div class="update-card">'
        + '<div class="update-date">'+entry.date+'</div>'
        + '<div class="update-card-title">'+entry.title+'</div>'
        + '<ul class="update-items">';
      entry.items.forEach(function(item){
        html += '<li>'+item+'</li>';
      });
      html += '</ul></div></div>';
    });

    html += '</div>';
    return html;
  }

  // ─── Expose and wire up ───────────────────────────────────────────────
  window.renderUpdateHistory = renderUpdateHistory;

  // Patch renderAllLessons to always include updatesPanel
  var _origRAL = window.renderAllLessons;
  window.renderAllLessons = function(){
    _origRAL();
    var panel = document.getElementById('updatesPanel');
    if(panel) panel.innerHTML = renderUpdateHistory();
  };

  // Patch setLang so Update History re-renders on language switch
  var _origSetLang = window.setLang;
  window.setLang = function(lang){
    _origSetLang(lang);
    var panel = document.getElementById('updatesPanel');
    if(panel) panel.innerHTML = renderUpdateHistory();
    // If currently on updates page, re-show to refresh breadcrumb too
    if(typeof currentPage !== 'undefined' && currentPage === 'updates'){
      if(typeof showPage === 'function') showPage('updates');
    }
  };

  // Patch showPage to handle 'updates' (safety net in case base showPage fires before this script)
  var _origShowPage = window.showPage;
  window.showPage = function(page){
    _origShowPage(page);
    if(page === 'updates'){
      var panel = document.getElementById('updatesPanel');
      if(panel) panel.innerHTML = renderUpdateHistory();
      panel.classList.add('active');
    }
  };

  // Initial render
  var panel = document.getElementById('updatesPanel');
  if(panel) panel.innerHTML = renderUpdateHistory();

  // Add clock/history icon to sidebar Update History nav num
  var updatesNavItem = document.querySelector('#sidebar .lesson-nav-item[data-page="updates"] .nav-num');
  if(updatesNavItem){
    updatesNavItem.innerHTML = '<span class="sec-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>';
  }

})();