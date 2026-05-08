(function(){
  if(window.__updateHistory20260419Patch) return;
  window.__updateHistory20260419Patch = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "br" ? "pt" : value;
  }

  var UPDATE_PACK = {
    "2026-04-17":{
      en:{
        date:"2026-04-17",
        title:"Reorganized the multilingual glossary structure",
        items:[
          "Reorganized the multilingual glossary structure.",
          "Checked missing glossary items against the Korean glossary set and improved multilingual glossary consistency, including Hausa.",
          "Refined the rendering flow so glossary descriptions appear more reliably on screen.",
          "Also improved the glossary structure connected to search so core terms work more smoothly together.",
          "This update focused on helping beginners confirm the same concepts more reliably across languages."
        ]
      },
      ko:{
        date:"2026-04-17",
        title:"다국어 용어사전 구조를 다시 정리했습니다",
        items:[
          "다국어 용어사전 구조를 다시 정리했습니다",
          "한국어 기준 glossary 항목을 기준으로 다른 언어 누락 여부를 점검했고, 하우사어를 포함한 다국어 glossary 정합성을 보강했습니다",
          "용어 설명이 실제 화면에서 더 안정적으로 렌더되도록 흐름을 다듬었습니다",
          "검색과 연결되는 핵심 용어 구조도 함께 정리해 glossary 활용성을 높였습니다",
          "이번 업데이트는 초보자가 언어를 바꿔도 같은 개념을 더 안정적으로 확인할 수 있도록 다국어 용어 구조를 정리하는 데 집중했습니다"
        ]
      },
      th:{
        date:"2026-04-17",
        title:"ปรับโครงสร้างอภิธานศัพท์หลายภาษาใหม่อีกครั้ง",
        items:[
          "ปรับโครงสร้างอภิธานศัพท์หลายภาษาใหม่อีกครั้ง",
          "ตรวจสอบรายการคำศัพท์ที่อาจขาดหายเมื่อเทียบกับชุดภาษาเกาหลี และเสริมความสอดคล้องของอภิธานศัพท์หลายภาษา รวมถึงภาษา Hausa",
          "ปรับลำดับการเรนเดอร์ให้คำอธิบายคำศัพท์แสดงบนหน้าจอได้เสถียรยิ่งขึ้น",
          "จัดระเบียบโครงสร้างคำสำคัญที่เชื่อมกับการค้นหาไปพร้อมกัน เพื่อให้การใช้ glossary ชัดเจนขึ้น",
          "อัปเดตนี้มุ่งช่วยให้ผู้เริ่มต้นตรวจสอบแนวคิดเดียวกันได้เสถียรมากขึ้น แม้จะเปลี่ยนภาษา"
        ]
      },
      id:{
        date:"2026-04-17",
        title:"Struktur glosarium multibahasa dirapikan kembali",
        items:[
          "Struktur glosarium multibahasa dirapikan kembali.",
          "Item glosarium yang mungkin hilang dicek terhadap set glosarium Korea, dan konsistensi glosarium multibahasa termasuk Hausa diperkuat.",
          "Alur render diperbaiki agar penjelasan istilah tampil lebih stabil di layar.",
          "Struktur istilah inti yang terhubung ke pencarian juga dirapikan untuk meningkatkan kegunaan glosarium.",
          "Pembaruan ini berfokus membantu pemula memeriksa konsep yang sama dengan lebih andal di berbagai bahasa."
        ]
      },
      pt:{
        date:"2026-04-17",
        title:"A estrutura do glossário multilíngue foi reorganizada",
        items:[
          "A estrutura do glossário multilíngue foi reorganizada.",
          "Os itens ausentes foram verificados com base no conjunto coreano do glossário, e a consistência multilíngue, incluindo Hausa, foi reforçada.",
          "O fluxo de renderização foi refinado para que as descrições apareçam na tela com mais estabilidade.",
          "A estrutura dos termos principais ligados à busca também foi reorganizada para aumentar a utilidade do glossário.",
          "Esta atualização se concentrou em ajudar iniciantes a confirmar os mesmos conceitos com mais confiança em diferentes idiomas."
        ]
      },
      tr:{
        date:"2026-04-17",
        title:"Cok dilli sozluk yapisi yeniden duzenlendi",
        items:[
          "Cok dilli sozluk yapisi yeniden duzenlendi.",
          "Eksik olabilecek sozluk girdileri Korece sozluk setine gore kontrol edildi ve Hausa dahil cok dilli tutarlilik guclendirildi.",
          "Terim aciklamalarinin ekranda daha kararlı gorunmesi icin render akisi iyilestirildi.",
          "Aramayla bagli temel terim yapisi da duzenlenerek sozlugun kullanim degeri artirildi.",
          "Bu guncelleme, yeni baslayanlarin dili degistirdiklerinde de ayni kavramlari daha guvenilir sekilde kontrol edebilmesine odaklandi."
        ]
      },
      es:{
        date:"2026-04-17",
        title:"Se reorganizo la estructura del glosario multilingue",
        items:[
          "Se reorganizo la estructura del glosario multilingue.",
          "Se revisaron los elementos que podian faltar frente al conjunto coreano del glosario y se reforzo la consistencia multilingue, incluido Hausa.",
          "Se ajusto el flujo de renderizado para que las descripciones aparezcan en pantalla con mayor estabilidad.",
          "Tambien se ordeno la estructura de terminos clave conectada con la busqueda para mejorar el uso del glosario.",
          "Esta actualizacion se centro en ayudar a los principiantes a confirmar los mismos conceptos con mas confianza entre idiomas."
        ]
      },
      ar:{
        date:"2026-04-17",
        title:"تمت إعادة تنظيم بنية المعجم متعدد اللغات",
        items:[
          "تمت إعادة تنظيم بنية المعجم متعدد اللغات.",
          "تم فحص العناصر الناقصة مقارنة بمجموعة المعجم الكورية وتحسين الاتساق متعدد اللغات بما في ذلك الهوسا.",
          "تم تحسين تدفق العرض حتى تظهر شروح المصطلحات على الشاشة بشكل أكثر استقرارا.",
          "كما تم ترتيب بنية المصطلحات الأساسية المرتبطة بالبحث لزيادة فائدة المعجم.",
          "ركز هذا التحديث على مساعدة المبتدئين على تأكيد المفاهيم نفسها بشكل أكثر موثوقية عبر اللغات."
        ]
      },
      vi:{
        date:"2026-04-17",
        title:"Cau truc thuat ngu da ngon ngu da duoc sap xep lai",
        items:[
          "Cau truc thuat ngu da ngon ngu da duoc sap xep lai.",
          "Da doi chieu cac muc co the bi thieu voi bo glossary tieng Han va cuong co tinh nhat quan da ngon ngu, bao gom ca Hausa.",
          "Luong render duoc tinh chinh de phan mo ta thuat ngu hien thi tren man hinh on dinh hon.",
          "Cau truc thuat ngu cot loi lien ket voi tim kiem cung duoc sap xep lai de glossary huu ich hon.",
          "Ban cap nhat nay tap trung giup nguoi moi xac nhan cung mot khai niem on dinh hon du o ngon ngu nao."
        ]
      },
      ha:{
        date:"2026-04-17",
        title:"An sake tsara tsarin kamus na harsuna da yawa",
        items:[
          "An sake tsara tsarin kamus na harsuna da yawa.",
          "An duba abubuwan glossary da ka iya bacewa idan aka kwatanta da tsarin Koriya, sannan aka karfafa daidaiton glossary na harsuna da yawa ciki har da Hausa.",
          "An gyara tafiyar render domin bayanin kalmomi ya rika bayyana a allon cikin kwanciyar hankali sosai.",
          "An kuma tsara tsarin muhimman kalmomin da ke hade da bincike domin amfanin glossary ya karu.",
          "Wannan sabuntawar ta mayar da hankali kan taimaka wa mai farawa ya dinga tabbatar da ma'anoni iri daya cikin kwanciyar hankali a dukkan harsuna."
        ]
      }
    },
    "2026-04-18":{
      en:{
        date:"2026-04-18",
        title:"Improved the PDF connection flow in Lesson 6 and Lesson 7",
        items:[
          "Improved the PDF connection flow in Lesson 6 and Lesson 7.",
          "Refined the lesson-end PDF cards so users can open follow-up reference material more easily after learning.",
          "Improved the connection flow so first-buy and scam-prevention PDFs feel more naturally connected to the lessons.",
          "Also reviewed the language-based PDF linking flow to improve multilingual access.",
          "This update focused on helping beginners move more smoothly from lessons into follow-up reference guides."
        ]
      },
      ko:{
        date:"2026-04-18",
        title:"Lesson 6과 Lesson 7의 PDF 연결 흐름을 보강했습니다",
        items:[
          "Lesson 6과 Lesson 7의 PDF 연결 흐름을 보강했습니다",
          "학습 후 바로 참고 자료를 열어볼 수 있도록 레슨 하단 PDF 연결 카드를 정리했습니다",
          "첫 구매와 사기 예방 흐름에 맞는 PDF를 더 자연스럽게 이어서 볼 수 있도록 연결 구조를 다듬었습니다",
          "언어별 PDF 연결 방식도 함께 점검해 다국어 자료 접근 흐름을 보강했습니다",
          "이번 업데이트는 초보자가 강의를 본 뒤 바로 정리용 자료까지 이어서 확인할 수 있도록 학습과 자료 연결 흐름을 정리하는 데 집중했습니다"
        ]
      },
      th:{
        date:"2026-04-18",
        title:"เสริมโครงสร้างการเชื่อม PDF ของ Lesson 6 และ Lesson 7",
        items:[
          "เสริมโครงสร้างการเชื่อม PDF ของ Lesson 6 และ Lesson 7",
          "จัดระเบียบการ์ด PDF ตอนท้ายบทเรียนให้ผู้ใช้เปิดเอกสารอ้างอิงต่อได้ง่ายขึ้นหลังเรียนจบ",
          "ปรับลำดับการเชื่อมให้ PDF เรื่องการซื้อครั้งแรกและการป้องกันสแกมต่อเนื่องกับบทเรียนได้เป็นธรรมชาติมากขึ้น",
          "ตรวจสอบรูปแบบการเชื่อม PDF ตามภาษาไปพร้อมกัน เพื่อเสริมการเข้าถึงเอกสารหลายภาษา",
          "อัปเดตนี้มุ่งช่วยให้ผู้เริ่มต้นไหลจากบทเรียนไปยังคู่มืออ้างอิงต่อได้ลื่นขึ้น"
        ]
      },
      id:{
        date:"2026-04-18",
        title:"Alur koneksi PDF di Lesson 6 dan Lesson 7 ditingkatkan",
        items:[
          "Alur koneksi PDF di Lesson 6 dan Lesson 7 ditingkatkan.",
          "Kartu PDF di akhir pelajaran dirapikan agar pengguna lebih mudah membuka materi referensi lanjutan setelah belajar.",
          "Alur penghubung untuk PDF pembelian pertama dan pencegahan scam dibuat terasa lebih alami dengan isi pelajaran.",
          "Alur penautan PDF berdasarkan bahasa juga ditinjau untuk memperkuat akses multibahasa.",
          "Pembaruan ini berfokus membantu pemula bergerak lebih mulus dari pelajaran ke panduan referensi lanjutan."
        ]
      },
      pt:{
        date:"2026-04-18",
        title:"O fluxo de ligação em PDF das Lessons 6 e 7 foi reforçado",
        items:[
          "O fluxo de ligação em PDF das Lessons 6 e 7 foi reforçado.",
          "Os cartões de PDF no fim das lições foram refinados para facilitar a abertura de material de referência após o estudo.",
          "A ligação dos PDFs sobre primeira compra e prevenção de golpes foi ajustada para parecer mais natural dentro do fluxo das lições.",
          "O fluxo de ligação por idioma também foi revisado para melhorar o acesso multilíngue aos materiais.",
          "Esta atualização se concentrou em ajudar iniciantes a passar das lições para os guias de referência de forma mais suave."
        ]
      },
      tr:{
        date:"2026-04-18",
        title:"Lesson 6 ve Lesson 7 PDF baglanti akisi guclendirildi",
        items:[
          "Lesson 6 ve Lesson 7 PDF baglanti akisi guclendirildi.",
          "Ders sonundaki PDF kartlari, kullanicilarin ogrenme sonrasinda ek referanslari daha kolay acabilmesi icin duzenlendi.",
          "Ilk alim ve dolandiricilik onleme PDF'lerinin derslerle daha dogal baglanmasi icin akis iyilestirildi.",
          "Dil bazli PDF baglanti akisi da gozden gecirilerek cok dilli erisim guclendirildi.",
          "Bu guncelleme, yeni baslayanlarin derslerden ek rehber materyallere daha akici sekilde gecmesine odaklandi."
        ]
      },
      es:{
        date:"2026-04-18",
        title:"Se mejoro el flujo de conexion PDF en Lesson 6 y Lesson 7",
        items:[
          "Se mejoro el flujo de conexion PDF en Lesson 6 y Lesson 7.",
          "Se ordenaron las tarjetas PDF al final de las lecciones para que sea mas facil abrir material de referencia despues de aprender.",
          "Se ajusto la conexion de los PDF de primera compra y prevencion de estafas para que se sientan mas naturales dentro del flujo de las lecciones.",
          "Tambien se reviso el flujo de enlaces PDF por idioma para reforzar el acceso multilingue.",
          "Esta actualizacion se centro en ayudar a los principiantes a pasar de las lecciones a las guias de referencia de forma mas fluida."
        ]
      },
      ar:{
        date:"2026-04-18",
        title:"تم تحسين تدفق ربط ملفات PDF في Lesson 6 وLesson 7",
        items:[
          "تم تحسين تدفق ربط ملفات PDF في Lesson 6 وLesson 7.",
          "تم ترتيب بطاقات PDF في نهاية الدروس حتى يتمكن المستخدم من فتح مواد مرجعية لاحقة بسهولة أكبر بعد التعلم.",
          "تم تحسين مسار الربط حتى تبدو ملفات PDF الخاصة بالشراء الأول ومنع الاحتيال متصلة بالدروس بشكل أكثر طبيعية.",
          "كما تمت مراجعة تدفق الربط حسب اللغة لتحسين الوصول متعدد اللغات.",
          "ركز هذا التحديث على مساعدة المبتدئين على الانتقال بسلاسة أكبر من الدروس إلى الأدلة المرجعية اللاحقة."
        ]
      },
      vi:{
        date:"2026-04-18",
        title:"Da cai thien luong lien ket PDF trong Lesson 6 va Lesson 7",
        items:[
          "Da cai thien luong lien ket PDF trong Lesson 6 va Lesson 7.",
          "The PDF o cuoi bai hoc duoc sap xep lai de nguoi dung mo tai lieu tham khao tiep theo de dang hon sau khi hoc.",
          "Luong ket noi giua PDF mua lan dau va PDF phong tranh lua dao duoc dieu chinh de tu nhien hon voi bai hoc.",
          "Luong lien ket PDF theo ngon ngu cung duoc ra soat de tang kha nang tiep can da ngon ngu.",
          "Ban cap nhat nay tap trung giup nguoi moi chuyen tu bai hoc sang tai lieu tham khao tiep theo muot ma hon."
        ]
      },
      ha:{
        date:"2026-04-18",
        title:"An karfafa tafiyar hade PDF a Lesson 6 da Lesson 7",
        items:[
          "An karfafa tafiyar hade PDF a Lesson 6 da Lesson 7.",
          "An tsara katunan PDF na karshen darasi domin masu amfani su iya bude karin takardun dubawa cikin sauki bayan koyo.",
          "An gyara tsarin hadewa domin PDF na sayen farko da na kariya daga damfara su rika bin darussa cikin dabi'a sosai.",
          "An kuma sake duba yadda ake hada PDF bisa harshe domin kara saukin shiga kayan koyo na harsuna da yawa.",
          "Wannan sabuntawar ta mayar da hankali kan taimaka wa mai farawa ya wuce daga darasi zuwa jagororin dubawa cikin sauki."
        ]
      }
    },
    "2026-04-19":{
      en:{
        date:"2026-04-19",
        title:"Refined the Source Library to make resources easier to find",
        items:[
          "Refined the Source Library to make resources easier to find.",
          "Improved the library structure so beginner materials, safety resources, PDF guides, and official references are easier to understand at a glance.",
          "Also improved visibility for Address Poisoning references so scam-prevention materials stand out more clearly.",
          "Reworked the top category menu and section navigation flow so users can reach the right resources more easily.",
          "This update focused on helping beginners understand resource types at a glance and find the references they need more quickly."
        ]
      },
      ko:{
        date:"2026-04-19",
        title:"자료 라이브러리 구조를 더 찾기 쉽게 다시 정리했습니다",
        items:[
          "자료 라이브러리 구조를 더 찾기 쉽게 다시 정리했습니다",
          "기초 자료, 보안 자료, PDF 가이드, 공식 참고자료 흐름이 더 잘 보이도록 라이브러리 구성을 다듬었습니다",
          "Address Poisoning 관련 자료 접근성도 함께 보강해 사기 예방 자료를 더 빠르게 찾을 수 있도록 했습니다",
          "자료 라이브러리 상단 카테고리 메뉴와 섹션 이동 흐름도 다시 정리해 필요한 자료를 더 쉽게 확인할 수 있도록 했습니다",
          "이번 업데이트는 초보자가 자료 성격을 한눈에 파악하고, 필요한 참고자료를 더 빠르게 찾을 수 있도록 자료 라이브러리 흐름을 정리하는 데 집중했습니다"
        ]
      },
      th:{
        date:"2026-04-19",
        title:"ปรับโครงสร้าง Source Library ใหม่ให้หาแหล่งข้อมูลได้ง่ายขึ้น",
        items:[
          "ปรับโครงสร้าง Source Library ใหม่ให้หาแหล่งข้อมูลได้ง่ายขึ้น",
          "จัดองค์ประกอบไลบรารีใหม่ให้เห็นความต่างของสื่อพื้นฐาน สื่อความปลอดภัย คู่มือ PDF และแหล่งอ้างอิงทางการได้ชัดขึ้นในทันที",
          "เสริมการมองเห็นของแหล่งข้อมูล Address Poisoning ไปพร้อมกัน เพื่อให้สื่อป้องกันสแกมหาได้เร็วขึ้น",
          "ปรับเมนูหมวดหมู่ด้านบนและลำดับการย้ายระหว่างเซกชันใหม่ เพื่อให้เข้าถึงแหล่งข้อมูลที่ต้องการได้ง่ายขึ้น",
          "อัปเดตนี้มุ่งช่วยให้ผู้เริ่มต้นมองออกทันทีว่าวัสดุแต่ละชิ้นเป็นประเภทใด และหาแหล่งอ้างอิงที่ต้องใช้ได้เร็วขึ้น"
        ]
      },
      id:{
        date:"2026-04-19",
        title:"Source Library dirapikan lagi agar sumber lebih mudah ditemukan",
        items:[
          "Source Library dirapikan lagi agar sumber lebih mudah ditemukan.",
          "Struktur library diperbaiki agar materi pemula, materi keamanan, panduan PDF, dan referensi resmi lebih mudah dipahami dalam sekali lihat.",
          "Visibilitas referensi Address Poisoning juga ditingkatkan agar materi pencegahan scam lebih cepat ditemukan.",
          "Menu kategori atas dan alur perpindahan antarbagian juga ditata ulang agar pengguna lebih mudah mencapai sumber yang tepat.",
          "Pembaruan ini berfokus membantu pemula mengenali jenis materi dalam sekali lihat dan menemukan referensi yang dibutuhkan dengan lebih cepat."
        ]
      },
      pt:{
        date:"2026-04-19",
        title:"A Biblioteca de Fontes foi reorganizada para facilitar a busca de materiais",
        items:[
          "A Biblioteca de Fontes foi reorganizada para facilitar a busca de materiais.",
          "A estrutura da biblioteca foi ajustada para que materiais de base, segurança, guias em PDF e referências oficiais fiquem mais claros logo de início.",
          "A visibilidade das referências sobre Address Poisoning também foi reforçada para destacar melhor os materiais de prevenção de golpes.",
          "O menu superior de categorias e o fluxo de navegação entre seções foram retrabalhados para facilitar o acesso ao material certo.",
          "Esta atualização se concentrou em ajudar iniciantes a entender o tipo de cada recurso rapidamente e encontrar as referências necessárias com mais velocidade."
        ]
      },
      tr:{
        date:"2026-04-19",
        title:"Source Library yapisi kaynaklari bulmayi kolaylastirmak icin yeniden duzenlendi",
        items:[
          "Source Library yapisi kaynaklari bulmayi kolaylastirmak icin yeniden duzenlendi.",
          "Kutuphane yapisi, baslangic materyalleri, guvenlik kaynaklari, PDF rehberleri ve resmi referanslarin ilk bakista daha net gorulmesi icin iyilestirildi.",
          "Address Poisoning kaynaklarinin gorunurlugu de artirilarak dolandiricilik onleme materyallerine daha hizli ulasilmasi saglandi.",
          "Ust kategori menusu ve bolumler arasi gecis akisi da yeniden duzenlenerek gereken kaynaga daha kolay ulasilmasi hedeflendi.",
          "Bu guncelleme, yeni baslayanlarin kaynak turlerini ilk bakista anlamasina ve ihtiyac duyduklari referanslari daha hizli bulmasina odaklandi."
        ]
      },
      es:{
        date:"2026-04-19",
        title:"Se reorganizo la Source Library para que los recursos sean mas faciles de encontrar",
        items:[
          "Se reorganizo la Source Library para que los recursos sean mas faciles de encontrar.",
          "Se ajusto la estructura de la biblioteca para que los materiales basicos, los recursos de seguridad, las guias PDF y las referencias oficiales se entiendan mejor de un vistazo.",
          "Tambien se mejoro la visibilidad de las referencias sobre Address Poisoning para que el material de prevencion de estafas destaque mas.",
          "Se reorganizaron el menu superior de categorias y el flujo de navegacion entre secciones para llegar con mayor facilidad al recurso correcto.",
          "Esta actualizacion se centro en ayudar a los principiantes a entender el tipo de recurso de un vistazo y encontrar mas rapido las referencias que necesitan."
        ]
      },
      ar:{
        date:"2026-04-19",
        title:"تمت إعادة تنظيم مكتبة المصادر لتسهيل العثور على المواد",
        items:[
          "تمت إعادة تنظيم مكتبة المصادر لتسهيل العثور على المواد.",
          "تم تحسين بنية المكتبة حتى تصبح مواد المبتدئين وموارد الأمان وأدلة PDF والمراجع الرسمية أوضح من النظرة الأولى.",
          "كما تمت زيادة وضوح مراجع Address Poisoning حتى يسهل العثور على مواد الوقاية من الاحتيال بسرعة أكبر.",
          "وأعيد ترتيب قائمة الفئات العلوية وتدفق التنقل بين الأقسام حتى يصل المستخدم إلى المادة المناسبة بسهولة أكبر.",
          "ركز هذا التحديث على مساعدة المبتدئين على فهم نوع الموارد من النظرة الأولى والعثور على المراجع التي يحتاجونها بسرعة أكبر."
        ]
      },
      vi:{
        date:"2026-04-19",
        title:"Da sap xep lai Source Library de tim tai lieu de hon",
        items:[
          "Da sap xep lai Source Library de tim tai lieu de hon.",
          "Cau truc thu vien duoc dieu chinh de tai lieu nen tang, tai lieu an toan, huong dan PDF va nguon tham khao chinh thuc de hieu hon ngay tu cai nhin dau tien.",
          "Do hien thi cua cac tham khao Address Poisoning cung duoc tang cuong de tai lieu phong tranh lua dao noi bat hon.",
          "Menu danh muc o tren cung va luong di chuyen giua cac phan cung duoc sap xep lai de nguoi dung den dung tai lieu de dang hon.",
          "Ban cap nhat nay tap trung giup nguoi moi nhan ra loai tai lieu trong mot cai nhin va tim tai lieu tham khao can thiet nhanh hon."
        ]
      },
      ha:{
        date:"2026-04-19",
        title:"An sake tsara Source Library domin a fi samun kayan dubawa cikin sauki",
        items:[
          "An sake tsara Source Library domin a fi samun kayan dubawa cikin sauki.",
          "An gyara tsarin library domin kayan asali, kayan tsaro, jagororin PDF, da madogarorin hukuma su fi bayyana da kallo guda.",
          "An kuma kara bayyana madogarar Address Poisoning domin kayan kariya daga damfara su fi fitowa da sauri.",
          "An sake tsara menu na manyan rukuni a sama da tafiyar motsi tsakanin sassa domin masu amfani su isa kayan da suke nema cikin sauki.",
          "Wannan sabuntawar ta mayar da hankali kan taimaka wa mai farawa ya gane irin kayan da yake gani da kallo guda kuma ya fi samun madogarar da yake bukata cikin sauri."
        ]
      }
    },
    "2026-04-25":{
      en:{
        date:"2026-04-25",
        title:"Stabilized the search structure and autocomplete flow",
        items:[
          "Stabilized the search structure and autocomplete flow.",
          "Cleaned up syntax issues in the search-related scripts and refined the flow so autocomplete and unified search work more reliably.",
          "Also improved the internal navigation flow so search results connect more naturally to the actual page structure.",
          "Removed malformed or unnecessary strings that were interfering with search quality.",
          "This update focused on helping beginners reach the right pages and concepts more quickly and more reliably through search."
        ]
      },
      ko:{
        date:"2026-04-25",
        title:"\uac80\uc0c9 \uad6c\uc870\uc640 \uc790\ub3d9\uc644\uc131 \ud750\ub984\uc744 \ub2e4\uc2dc \uc548\uc815\ud654\ud588\uc2b5\ub2c8\ub2e4",
        items:[
          "검색 구조와 자동완성 흐름을 다시 안정화했습니다.",
          "검색 관련 스크립트에서 발생하던 문법 오류를 정리하고, 자동완성과 통합 검색이 더 안정적으로 동작하도록 흐름을 다듬었습니다.",
          "검색 결과가 실제 페이지 구조와 더 자연스럽게 연결되도록 내부 이동 흐름도 함께 정리했습니다.",
          "검색 과정에서 불필요하게 섞이던 잘못된 문자열도 정리해 검색 품질을 더 깔끔하게 보강했습니다.",
          "이번 업데이트는 초보자가 검색을 통해 필요한 페이지와 개념으로 더 빠르고 안정적으로 이동할 수 있도록 검색 구조를 정리하는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-04-25",
        title:"ปรับโครงสร้างการค้นหาและการทำงานของคำแนะนำอัตโนมัติให้เสถียรมากขึ้น",
        items:[
          "ปรับโครงสร้างการค้นหาและการทำงานของคำแนะนำอัตโนมัติให้เสถียรมากขึ้น",
          "จัดระเบียบข้อผิดพลาดทางไวยากรณ์ในสคริปต์ที่เกี่ยวกับการค้นหา และปรับการทำงานให้ autocomplete และ unified search ทำงานได้เชื่อถือมากขึ้น",
          "ปรับปรุงการนำทางภายในด้วย เพื่อให้ผลการค้นหาเชื่อมต่อกับโครงสร้างหน้าจริงได้อย่างเป็นธรรมชาติมากขึ้น",
          "ลบสตริงที่ผิดรูปหรือไม่จำเป็นซึ่งเคยรบกวนคุณภาพการค้นหาออก",
          "การอัปเดตนี้มุ่งช่วยให้ผู้เริ่มต้นไปยังหน้าที่และแนวคิดที่ต้องการได้เร็วขึ้นและเสถียรมากขึ้นผ่านการค้นหา"
        ]
      },
      id:{
        date:"2026-04-25",
        title:"Struktur pencarian dan alur autocomplete distabilkan kembali",
        items:[
          "Struktur pencarian dan alur autocomplete distabilkan kembali.",
          "Masalah sintaks di skrip terkait pencarian dirapikan, dan alurnya disesuaikan agar autocomplete serta unified search bekerja lebih andal.",
          "Alur perpindahan internal juga diperbaiki agar hasil pencarian terhubung lebih alami dengan struktur halaman yang sebenarnya.",
          "String yang rusak atau tidak perlu yang sempat mengganggu kualitas pencarian juga dibersihkan.",
          "Pembaruan ini berfokus membantu pemula mencapai halaman dan konsep yang tepat dengan lebih cepat dan lebih stabil melalui pencarian."
        ]
      },
      pt:{
        date:"2026-04-25",
        title:"A estrutura de busca e o fluxo de autocomplete foram estabilizados",
        items:[
          "A estrutura de busca e o fluxo de autocomplete foram estabilizados.",
          "Os erros de sintaxe nos scripts ligados a busca foram organizados, e o fluxo foi refinado para que autocomplete e unified search funcionem com mais confianca.",
          "O fluxo de navegacao interna tambem foi ajustado para que os resultados de busca se conectem de forma mais natural com a estrutura real das paginas.",
          "Strings malformadas ou desnecessarias que estavam interferindo na qualidade da busca tambem foram removidas.",
          "Esta atualizacao se concentrou em ajudar iniciantes a chegar mais rapido e com mais estabilidade as paginas e conceitos certos por meio da busca."
        ]
      },
      tr:{
        date:"2026-04-25",
        title:"Arama yapisi ve otomatik tamamlama akisi yeniden kararlilastirildi",
        items:[
          "Arama yapisi ve otomatik tamamlama akisi yeniden kararlilastirildi.",
          "Aramayla ilgili scriptlerdeki soz dizimi hatalari temizlendi ve akis, autocomplete ile unified search daha guvenilir calissin diye iyilestirildi.",
          "Arama sonuclarinin gercek sayfa yapisina daha dogal baglanmasi icin dahili gecis akisi da duzenlendi.",
          "Arama kalitesini bozuyordu olan bozuk veya gereksiz metinler de temizlendi.",
          "Bu guncelleme, yeni baslayanlarin arama yoluyla dogru sayfalara ve kavramlara daha hizli ve daha guvenilir sekilde ulasmasina odaklandi."
        ]
      },
      es:{
        date:"2026-04-25",
        title:"Se estabilizaron la estructura de busqueda y el flujo de autocompletado",
        items:[
          "Se estabilizaron la estructura de busqueda y el flujo de autocompletado.",
          "Se limpiaron los errores de sintaxis en los scripts de busqueda y se ajusto el flujo para que autocomplete y unified search funcionen con mas fiabilidad.",
          "Tambien se mejoro el flujo de navegacion interna para que los resultados de busqueda se conecten de forma mas natural con la estructura real de las paginas.",
          "Se eliminaron cadenas malformadas o innecesarias que estaban interfiriendo con la calidad de la busqueda.",
          "Esta actualizacion se centro en ayudar a los principiantes a llegar a las paginas y conceptos correctos con mas rapidez y mas estabilidad por medio de la busqueda."
        ]
      },
      ar:{
        date:"2026-04-25",
        title:"تمت إعادة تثبيت بنية البحث وتدفق الإكمال التلقائي",
        items:[
          "تمت إعادة تثبيت بنية البحث وتدفق الإكمال التلقائي.",
          "تم تنظيف أخطاء الصياغة في السكربتات المرتبطة بالبحث، وتم تحسين التدفق لكي يعمل autocomplete وunified search بشكل أكثر موثوقية.",
          "كما تم تحسين تدفق التنقل الداخلي لكي ترتبط نتائج البحث بشكل أكثر طبيعية مع البنية الفعلية للصفحات.",
          "وتمت إزالة السلاسل المشوهة أو غير الضرورية التي كانت تؤثر في جودة البحث.",
          "ركز هذا التحديث على مساعدة المبتدئين على الوصول إلى الصفحات والمفاهيم الصحيحة بسرعة أكبر وبشكل أكثر استقرارا من خلال البحث."
        ]
      },
      vi:{
        date:"2026-04-25",
        title:"Da on dinh lai cau truc tim kiem va luong goi y tu dong",
        items:[
          "Da on dinh lai cau truc tim kiem va luong goi y tu dong.",
          "Cac loi cu phap trong script lien quan den tim kiem da duoc don dep, va luong hoat dong duoc tinh chinh de autocomplete va unified search chay on dinh hon.",
          "Luong dieu huong ben trong cung duoc cai thien de ket qua tim kiem ket noi tu nhien hon voi cau truc trang thuc te.",
          "Nhung chuoi bi loi hoac khong can thiet da anh huong den chat luong tim kiem cung da duoc loai bo.",
          "Ban cap nhat nay tap trung giup nguoi moi den dung trang va dung khai niem nhanh hon va on dinh hon thong qua tim kiem."
        ]
      },
      ha:{
        date:"2026-04-25",
        title:"An sake daidaita tsarin bincike da tafiyar autocomplete",
        items:[
          "An sake daidaita tsarin bincike da tafiyar autocomplete.",
          "An gyara kurakuran rubutun tsari a cikin script da suka shafi bincike, sannan aka daidaita tafiyar domin autocomplete da unified search su yi aiki cikin kwanciyar hankali sosai.",
          "An kuma inganta tafiyar motsi a ciki domin sakamakon bincike ya hade da ainihin tsarin shafukan cikin dabi'a sosai.",
          "An cire gurbatattun ko marasa amfani rubuce-rubuce da suke rage ingancin bincike.",
          "Wannan sabuntawar ta mayar da hankali kan taimaka wa mai farawa ya isa shafuka da ma'anoni masu dacewa cikin sauri da kwanciyar hankali ta hanyar bincike."
        ]
      }
    },
    "2026-04-27":{
      en:{
        date:"2026-04-27",
        title:"Refined the multilingual flow and core card structure",
        items:[
          "Refined the multilingual flow and core card structure.",
          "Improved how key titles and descriptions flow across languages throughout the home, source library, and checklist structure.",
          "Also made the naming and presentation of eBooks, free PDFs, and checklist cards more consistent.",
          "This update focused on making the overall site structure easier to understand across languages."
        ]
      },
      ko:{
        date:"2026-04-27",
        title:"다국어 흐름과 핵심 카드 구조를 다시 정리했습니다",
        items:[
          "다국어 흐름과 핵심 카드 구조를 다시 정리했습니다.",
          "홈과 자료 라이브러리, 체크리스트 흐름 안에서 각 언어별 핵심 제목과 설명이 더 자연스럽게 이어지도록 정리했습니다.",
          "전자책, 무료 PDF, 체크리스트 카드의 이름과 소개 방식도 더 일관되게 맞췄습니다.",
          "이번 업데이트는 여러 언어로 들어와도 사이트 구조를 더 쉽게 이해할 수 있도록 기본 흐름을 다듬는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-04-27",
        title:"จัดระเบียบการไหลหลายภาษาและโครงสร้างการ์ดหลักใหม่อีกครั้ง",
        items:[
          "จัดระเบียบการไหลหลายภาษาและโครงสร้างการ์ดหลักใหม่อีกครั้ง",
          "ปรับให้ชื่อหลักและคำอธิบายสำคัญของแต่ละภาษาเชื่อมต่อกันอย่างเป็นธรรมชาติมากขึ้นในหน้าโฮม Source Library และโครงสร้างเช็กลิสต์",
          "ทำให้ชื่อและวิธีแนะนำ eBook, PDF ฟรี และการ์ดเช็กลิสต์สอดคล้องกันมากขึ้นด้วย",
          "อัปเดตนี้มุ่งทำให้ผู้ใช้เข้าใจโครงสร้างของเว็บไซต์ได้ง่ายขึ้น แม้จะเข้ามาผ่านหลายภาษา"
        ]
      },
      id:{
        date:"2026-04-27",
        title:"Alur multibahasa dan struktur kartu inti dirapikan kembali",
        items:[
          "Alur multibahasa dan struktur kartu inti dirapikan kembali.",
          "Judul dan penjelasan utama di setiap bahasa dibuat mengalir lebih alami di home, Source Library, dan struktur checklist.",
          "Penamaan serta cara memperkenalkan eBook, PDF gratis, dan kartu checklist juga dibuat lebih konsisten.",
          "Pembaruan ini berfokus agar struktur situs lebih mudah dipahami di berbagai bahasa."
        ]
      },
      pt:{
        date:"2026-04-27",
        title:"O fluxo multilíngue e a estrutura dos cartões principais foram reorganizados",
        items:[
          "O fluxo multilíngue e a estrutura dos cartões principais foram reorganizados.",
          "Os títulos e descrições principais passaram a fluir de forma mais natural entre idiomas na home, na Source Library e na estrutura de checklists.",
          "Os nomes e a forma de apresentar os eBooks, os PDFs gratuitos e os cartões de checklist também ficaram mais consistentes.",
          "Esta atualização se concentrou em tornar a estrutura geral do site mais fácil de entender em diferentes idiomas."
        ]
      },
      tr:{
        date:"2026-04-27",
        title:"Cok dilli akis ve temel kart yapisi yeniden duzenlendi",
        items:[
          "Cok dilli akis ve temel kart yapisi yeniden duzenlendi.",
          "Ana sayfa, Source Library ve checklist yapisinda her dildeki temel baslik ve aciklamalarin daha dogal akmasi saglandi.",
          "eBook, ucretsiz PDF ve checklist kartlarinin adlandirilmasi ile sunum bicimi de daha tutarli hale getirildi.",
          "Bu guncelleme, site yapisinin farkli dillerde daha kolay anlasilmasina odaklandi."
        ]
      },
      es:{
        date:"2026-04-27",
        title:"Se reorganizaron el flujo multilingüe y la estructura de las tarjetas clave",
        items:[
          "Se reorganizaron el flujo multilingüe y la estructura de las tarjetas clave.",
          "Los títulos y descripciones principales ahora fluyen de forma más natural entre idiomas en la home, la Source Library y la estructura de checklists.",
          "También se hicieron más consistentes los nombres y la presentación de los eBooks, los PDF gratis y las tarjetas de checklist.",
          "Esta actualización se centró en hacer que la estructura general del sitio sea más fácil de entender en distintos idiomas."
        ]
      },
      ar:{
        date:"2026-04-27",
        title:"تمت إعادة تنظيم تدفق اللغات المتعددة وبنية البطاقات الأساسية",
        items:[
          "تمت إعادة تنظيم تدفق اللغات المتعددة وبنية البطاقات الأساسية.",
          "أصبح تدفق العناوين والشروح الأساسية أكثر طبيعية بين اللغات عبر الصفحة الرئيسية ومكتبة المصادر وبنية القوائم السريعة.",
          "كما أصبحت تسمية الكتب الإلكترونية وملفات PDF المجانية وبطاقات القوائم السريعة وطريقة عرضها أكثر اتساقا.",
          "ركز هذا التحديث على جعل بنية الموقع أسهل في الفهم عبر اللغات المختلفة."
        ]
      },
      vi:{
        date:"2026-04-27",
        title:"Da sap xep lai luong da ngon ngu va cau truc cac the cot loi",
        items:[
          "Da sap xep lai luong da ngon ngu va cau truc cac the cot loi.",
          "Cac tieu de va mo ta chinh giua cac ngon ngu duoc sap xep lai de doc tu nhien hon tren home, Source Library, va cau truc checklist.",
          "Ten goi va cach gioi thieu eBook, PDF mien phi, va the checklist cung duoc lam dong bo hon.",
          "Ban cap nhat nay tap trung giup cau truc tong the cua trang de hieu hon du o ngon ngu nao."
        ]
      },
      ha:{
        date:"2026-04-27",
        title:"An sake tsara tafiyar harsuna da yawa da tsarin manyan katuna",
        items:[
          "An sake tsara tafiyar harsuna da yawa da tsarin manyan katuna.",
          "An sa muhimman taken da bayanai su rika gudana cikin dabi'a a kowane harshe a home, Source Library, da tsarin checklist.",
          "An kuma daidaita sunaye da yadda ake gabatar da eBook, PDF na kyauta, da katunan checklist sosai.",
          "Wannan sabuntawar ta mayar da hankali kan saukaka fahimtar tsarin shafin a harsuna daban-daban."
        ]
      }
    },
    "2026-04-29":{
      en:{
        date:"2026-04-29",
        title:"Improved checklists and practical safety flows for faster review",
        items:[
          "Improved checklists and practical safety flows for faster review.",
          "Structured high-value revisit topics such as before-send checks, seed phrase safety, and fake website checks into shorter checklist-based flows.",
          "Also strengthened the connections from related lessons and the safety section into these checklists.",
          "This update focused on making short practical review tools more visible than long explanations when users need to act."
        ]
      },
      ko:{
        date:"2026-04-29",
        title:"체크리스트와 실전 보안 흐름을 더 짧고 빠르게 볼 수 있도록 보강했습니다",
        items:[
          "체크리스트와 실전 보안 흐름을 더 짧고 빠르게 볼 수 있도록 보강했습니다.",
          "전송 전 확인, 시드 문구 보안, 가짜 사이트 확인처럼 바로 다시 볼 가치가 큰 항목들을 짧은 체크 구조로 정리했습니다.",
          "관련 lesson과 safety 흐름에서도 체크리스트로 이어지는 연결을 함께 보강했습니다.",
          "이번 업데이트는 긴 설명보다 실제 행동 전에 다시 확인할 수 있는 짧은 도구를 더 잘 보이게 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-04-29",
        title:"เสริมเช็กลิสต์และโครงสร้างความปลอดภัยเชิงปฏิบัติให้ทบทวนได้สั้นและเร็วขึ้น",
        items:[
          "เสริมเช็กลิสต์และโครงสร้างความปลอดภัยเชิงปฏิบัติให้ทบทวนได้สั้นและเร็วขึ้น",
          "จัดหัวข้อที่ควรกลับมาดูซ้ำบ่อย เช่น การเช็กก่อนโอน ความปลอดภัยของ seed phrase และการตรวจเว็บปลอม ให้อยู่ในรูปแบบเช็กลิสต์ที่สั้นลง",
          "เสริมการเชื่อมต่อจากบทเรียนที่เกี่ยวข้องและส่วน Safety ให้ไปยังเช็กลิสต์เหล่านี้ได้ดีขึ้นด้วย",
          "อัปเดตนี้มุ่งทำให้เครื่องมือทบทวนสั้น ๆ มองเห็นได้ชัดกว่าคำอธิบายยาวเมื่อผู้ใช้ต้องลงมือจริง"
        ]
      },
      id:{
        date:"2026-04-29",
        title:"Checklist dan alur keamanan praktis diperkuat agar bisa ditinjau lebih cepat",
        items:[
          "Checklist dan alur keamanan praktis diperkuat agar bisa ditinjau lebih cepat.",
          "Topik bernilai tinggi untuk dilihat ulang seperti cek sebelum kirim, keamanan seed phrase, dan pengecekan situs palsu disusun menjadi alur checklist yang lebih singkat.",
          "Koneksi dari lesson terkait dan bagian safety menuju checklist ini juga diperkuat.",
          "Pembaruan ini berfokus membuat alat tinjauan praktis yang singkat lebih terlihat daripada penjelasan panjang saat pengguna perlu bertindak."
        ]
      },
      pt:{
        date:"2026-04-29",
        title:"Checklists e fluxos práticos de segurança foram reforçados para revisão mais rápida",
        items:[
          "Checklists e fluxos práticos de segurança foram reforçados para revisão mais rápida.",
          "Tópicos de alto valor para rever, como checagem antes do envio, segurança da seed phrase e verificação de sites falsos, foram organizados em fluxos mais curtos de checklist.",
          "As conexões das lições relacionadas e da seção Safety para esses checklists também foram fortalecidas.",
          "Esta atualização se concentrou em dar mais visibilidade a ferramentas curtas de revisão prática do que a explicações longas quando o usuário precisa agir."
        ]
      },
      tr:{
        date:"2026-04-29",
        title:"Checklistler ve pratik guvenlik akislari daha hizli gozden gecirme icin guclendirildi",
        items:[
          "Checklistler ve pratik guvenlik akislari daha hizli gozden gecirme icin guclendirildi.",
          "Gonderim oncesi kontrol, seed phrase guvenligi ve sahte site kontrolu gibi yeniden bakmaya deger basliklar daha kisa checklist akislari haline getirildi.",
          "Ilgili derslerden ve Safety bolumunden bu checklistlere giden baglantilar da guclendirildi.",
          "Bu guncelleme, kullanici harekete gecmeden once uzun aciklamalar yerine kisa pratik araclari daha gorunur hale getirmeye odaklandi."
        ]
      },
      es:{
        date:"2026-04-29",
        title:"Se reforzaron los checklists y los flujos prácticos de seguridad para una revisión más rápida",
        items:[
          "Se reforzaron los checklists y los flujos prácticos de seguridad para una revisión más rápida.",
          "Temas de alto valor para volver a mirar, como la revisión antes de enviar, la seguridad de la seed phrase y la verificación de sitios falsos, se organizaron en flujos más cortos de checklist.",
          "También se reforzaron las conexiones desde las lecciones relacionadas y la sección Safety hacia estos checklists.",
          "Esta actualización se centró en hacer más visibles las herramientas cortas de revisión práctica que las explicaciones largas cuando el usuario necesita actuar."
        ]
      },
      ar:{
        date:"2026-04-29",
        title:"تم تعزيز القوائم السريعة وتدفقات الأمان العملية لتصبح المراجعة أسرع",
        items:[
          "تم تعزيز القوائم السريعة وتدفقات الأمان العملية لتصبح المراجعة أسرع.",
          "تم تنظيم الموضوعات عالية القيمة التي تستحق الرجوع إليها مثل الفحص قبل الإرسال وأمان seed phrase والتحقق من المواقع المزيفة في تدفقات أقصر قائمة على القوائم السريعة.",
          "كما تم تقوية الروابط من الدروس ذات الصلة ومن قسم Safety إلى هذه القوائم.",
          "ركز هذا التحديث على جعل أدوات المراجعة العملية القصيرة أوضح من الشروح الطويلة عندما يحتاج المستخدم إلى اتخاذ إجراء."
        ]
      },
      vi:{
        date:"2026-04-29",
        title:"Da cuong co checklist va luong an toan thuc te de xem lai nhanh hon",
        items:[
          "Da cuong co checklist va luong an toan thuc te de xem lai nhanh hon.",
          "Nhung chu de dang quay lai xem nhat nhu kiem tra truoc khi gui, an toan seed phrase, va kiem tra trang web gia da duoc sap xep thanh checklist ngan gon hon.",
          "Cac lien ket tu lesson lien quan va tu phan safety den cac checklist nay cung duoc tang cuong.",
          "Ban cap nhat nay tap trung lam cho cong cu xem lai ngan gon de thay hanh dong thuc te noi bat hon cac giai thich dai."
        ]
      },
      ha:{
        date:"2026-04-29",
        title:"An kara karfafa checklist da tafiyar tsaro mai amfani domin a sake dubawa cikin sauri",
        items:[
          "An kara karfafa checklist da tafiyar tsaro mai amfani domin a sake dubawa cikin sauri.",
          "Batutuwa masu muhimmanci wajen komawa a duba kamar binciken kafin tura kudi, tsaron seed phrase, da gano shafin bogi an tsara su cikin gajerun tsarin checklist.",
          "An kuma karfafa hanyoyin da ke kawo mai amfani daga darussa masu alaka da sashen Safety zuwa wadannan checklist din.",
          "Wannan sabuntawar ta mayar da hankali kan sa gajerun kayan dubawar aiki su fi bayyana fiye da dogon bayani lokacin da mai amfani zai yi wani mataki."
        ]
      }
    },
    "2026-05-01":{
      en:{
        date:"2026-05-01",
        title:"Refined the home entry structure for faster understanding",
        items:[
          "Refined the home entry structure for faster understanding.",
          "Improved the recommendation cards and quick-start paths so first-time visitors can choose where to begin more easily.",
          "Also reorganized short action cards and key entry cards so they are easier to click quickly.",
          "This update focused on shortening the path from landing on the home page to making the first useful click."
        ]
      },
      ko:{
        date:"2026-05-01",
        title:"홈 화면의 진입 구조를 더 빠르게 이해할 수 있도록 정리했습니다",
        items:[
          "홈 화면의 진입 구조를 더 빠르게 이해할 수 있도록 정리했습니다.",
          "처음 들어온 사람이 무엇을 먼저 봐야 하는지 더 쉽게 고를 수 있도록 추천 카드와 상황별 바로가기 흐름을 다듬었습니다.",
          "짧은 해결 카드와 핵심 진입 카드도 더 빠르게 눌리도록 구조를 정리했습니다.",
          "이번 업데이트는 홈에서 첫 클릭까지의 흐름을 더 짧고 직관적으로 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-05-01",
        title:"ปรับโครงสร้างการเริ่มต้นบนหน้าโฮมให้เข้าใจได้เร็วขึ้น",
        items:[
          "ปรับโครงสร้างการเริ่มต้นบนหน้าโฮมให้เข้าใจได้เร็วขึ้น",
          "เกลาการ์ดแนะนำและเส้นทางเริ่มต้นด่วน เพื่อให้ผู้เข้ามาครั้งแรกเลือกจุดเริ่มได้ง่ายขึ้น",
          "จัดโครงสร้างการ์ดแก้ปัญหาแบบสั้นและการ์ดทางเข้าหลักใหม่ เพื่อให้กดได้เร็วขึ้นด้วย",
          "อัปเดตนี้มุ่งย่นระยะจากการเข้าหน้าโฮมไปจนถึงการคลิกที่มีประโยชน์ครั้งแรก"
        ]
      },
      id:{
        date:"2026-05-01",
        title:"Struktur masuk di home dirapikan agar lebih cepat dipahami",
        items:[
          "Struktur masuk di home dirapikan agar lebih cepat dipahami.",
          "Kartu rekomendasi dan alur quick-start diperbaiki agar pengunjung baru lebih mudah memilih dari mana harus mulai.",
          "Kartu aksi singkat dan kartu pintu masuk utama juga diatur ulang agar lebih mudah diklik dengan cepat.",
          "Pembaruan ini berfokus mempersingkat jalur dari mendarat di home hingga melakukan klik pertama yang berguna."
        ]
      },
      pt:{
        date:"2026-05-01",
        title:"A estrutura de entrada da home foi refinada para entendimento mais rápido",
        items:[
          "A estrutura de entrada da home foi refinada para entendimento mais rápido.",
          "Os cartões de recomendação e os caminhos de início rápido foram melhorados para que quem chega pela primeira vez escolha onde começar com mais facilidade.",
          "Os cartões de ação curta e os cartões principais de entrada também foram reorganizados para serem clicados mais rapidamente.",
          "Esta atualização se concentrou em encurtar o caminho entre cair na home e fazer o primeiro clique realmente útil."
        ]
      },
      tr:{
        date:"2026-05-01",
        title:"Ana sayfa giris yapisi daha hizli anlasilsin diye duzenlendi",
        items:[
          "Ana sayfa giris yapisi daha hizli anlasilsin diye duzenlendi.",
          "Oneri kartlari ve hizli baslangic yolları, ilk kez gelen ziyaretcilerin nereden baslayacagini daha kolay secmesi icin iyilestirildi.",
          "Kisa aksiyon kartlari ve temel giris kartlari da daha hizli tiklanacak sekilde yeniden duzenlendi.",
          "Bu guncelleme, ana sayfaya inisten ilk yararli tiklamaya kadar olan yolu kisaltmaya odaklandi."
        ]
      },
      es:{
        date:"2026-05-01",
        title:"Se refinó la estructura de entrada de la home para entenderla más rápido",
        items:[
          "Se refinó la estructura de entrada de la home para entenderla más rápido.",
          "Se mejoraron las tarjetas de recomendación y los caminos de inicio rápido para que quien entra por primera vez elija más fácilmente por dónde empezar.",
          "También se reorganizaron las tarjetas de acción corta y las tarjetas de entrada clave para que se puedan pulsar más rápido.",
          "Esta actualización se centró en acortar el camino entre aterrizar en la home y hacer el primer clic útil."
        ]
      },
      ar:{
        date:"2026-05-01",
        title:"تم تنظيم بنية الدخول في الصفحة الرئيسية لتصبح أسرع في الفهم",
        items:[
          "تم تنظيم بنية الدخول في الصفحة الرئيسية لتصبح أسرع في الفهم.",
          "تم تحسين بطاقات التوصية ومسارات البداية السريعة حتى يتمكن الزائر الجديد من اختيار نقطة البداية بسهولة أكبر.",
          "كما أعيد ترتيب بطاقات الحل السريع وبطاقات الدخول الرئيسية لتصبح أسرع في النقر.",
          "ركز هذا التحديث على تقصير الطريق من دخول الصفحة الرئيسية إلى أول نقرة مفيدة."
        ]
      },
      vi:{
        date:"2026-05-01",
        title:"Da sap xep lai cau truc vao home de hieu nhanh hon",
        items:[
          "Da sap xep lai cau truc vao home de hieu nhanh hon.",
          "Cac the goi y va luong quick-start duoc tinh chinh de nguoi moi vao co the de chon diem bat dau hon.",
          "Cac the hanh dong ngan va the diem vao chinh cung duoc sap xep lai de de bam nhanh hon.",
          "Ban cap nhat nay tap trung rut ngan quang duong tu luc vao home den cu nhap dau tien thuc su huu ich."
        ]
      },
      ha:{
        date:"2026-05-01",
        title:"An tsara tsarin shiga na shafin gida domin a fi gane shi cikin sauri",
        items:[
          "An tsara tsarin shiga na shafin gida domin a fi gane shi cikin sauri.",
          "An gyara katunan shawarwari da hanyoyin fara koyo da sauri domin sabon bako ya fi saukin zaben inda zai fara.",
          "An kuma sake tsara gajerun katunan aiki da manyan katunan shiga domin a fi danna su cikin sauri.",
          "Wannan sabuntawar ta mayar da hankali kan rage tazara daga sauka a shafin gida zuwa yin danna na farko mai amfani."
        ]
      }
    },
    "2026-05-03":{
      en:{
        date:"2026-05-03",
        title:"Clarified the difference between free learning materials and eBook-based deeper review",
        items:[
          "Clarified the difference between free learning materials and eBook-based deeper review.",
          "Made it easier to understand free lessons, checklists, and PDFs as quick review tools, while positioning the eBooks as a more structured deeper follow-up.",
          "Improved this distinction across both the home page and the source library.",
          "This update focused on keeping the free material valuable while making the deeper review flow feel more natural."
        ]
      },
      ko:{
        date:"2026-05-03",
        title:"무료 학습 자료와 전자책의 역할 차이를 더 분명하게 정리했습니다",
        items:[
          "무료 학습 자료와 전자책의 역할 차이를 더 분명하게 정리했습니다.",
          "무료 lesson과 체크리스트, 무료 PDF는 빠르게 다시 확인하는 흐름으로, 전자책은 더 정리된 심화 복습 흐름으로 이해되게 다듬었습니다.",
          "홈과 자료 라이브러리 모두에서 이 차이가 더 자연스럽게 보이도록 설명을 보강했습니다.",
          "이번 업데이트는 무료로 충분히 배우면서도 더 정리된 복습 흐름으로 자연스럽게 이어지게 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-05-03",
        title:"ทำให้ความต่างระหว่างสื่อเรียนฟรีกับการทบทวนเชิงลึกผ่าน eBook ชัดเจนขึ้น",
        items:[
          "ทำให้ความต่างระหว่างสื่อเรียนฟรีกับการทบทวนเชิงลึกผ่าน eBook ชัดเจนขึ้น",
          "ทำให้เข้าใจง่ายขึ้นว่า lesson ฟรี เช็กลิสต์ และ PDF ฟรีเป็นเครื่องมือทบทวนแบบเร็ว ขณะที่ eBook เป็นการทบทวนเชิงลึกที่มีโครงสร้างมากกว่า",
          "เสริมคำอธิบายให้เห็นความต่างนี้อย่างเป็นธรรมชาติมากขึ้นทั้งในหน้าโฮมและใน Source Library",
          "อัปเดตนี้มุ่งทำให้เนื้อหาฟรียังคงมีคุณค่า ขณะเดียวกันก็ทำให้เส้นทางการทบทวนเชิงลึกรู้สึกต่อเนื่องอย่างเป็นธรรมชาติ"
        ]
      },
      id:{
        date:"2026-05-03",
        title:"Perbedaan antara materi belajar gratis dan alur review lebih dalam berbasis eBook diperjelas",
        items:[
          "Perbedaan antara materi belajar gratis dan alur review lebih dalam berbasis eBook diperjelas.",
          "Lesson gratis, checklist, dan PDF gratis dibuat lebih mudah dipahami sebagai alat review cepat, sementara eBook diposisikan sebagai lanjutan review yang lebih terstruktur.",
          "Perbedaan ini diperjelas lagi baik di home maupun di Source Library.",
          "Pembaruan ini berfokus menjaga materi gratis tetap bernilai sambil membuat alur review mendalam terasa lebih alami."
        ]
      },
      pt:{
        date:"2026-05-03",
        title:"A diferença entre materiais gratuitos e a revisão mais profunda com eBook ficou mais clara",
        items:[
          "A diferença entre materiais gratuitos e a revisão mais profunda com eBook ficou mais clara.",
          "Ficou mais fácil entender aulas gratuitas, checklists e PDFs como ferramentas de revisão rápida, enquanto os eBooks foram posicionados como uma continuação mais estruturada.",
          "Essa distinção foi reforçada tanto na home quanto na Source Library.",
          "Esta atualização se concentrou em manter o material gratuito valioso ao mesmo tempo em que tornou o fluxo de revisão profunda mais natural."
        ]
      },
      tr:{
        date:"2026-05-03",
        title:"Ucretsiz ogrenme materyalleri ile eBook tabanli derin tekrar arasindaki fark netlestirildi",
        items:[
          "Ucretsiz ogrenme materyalleri ile eBook tabanli derin tekrar arasindaki fark netlestirildi.",
          "Ucretsiz dersler, checklistler ve PDF'lerin hizli tekrar araci olarak; eBooklerin ise daha duzenli derin devam akisi olarak anlasilmasi kolaylastirildi.",
          "Bu ayrim hem ana sayfada hem de Source Library icinde daha dogal gorunecek sekilde guclendirildi.",
          "Bu guncelleme, ucretsiz materyali degerli tutarken daha derin tekrar akisinin daha dogal hissedilmesine odaklandi."
        ]
      },
      es:{
        date:"2026-05-03",
        title:"Se aclaró mejor la diferencia entre el material gratuito y la revisión más profunda con eBook",
        items:[
          "Se aclaró mejor la diferencia entre el material gratuito y la revisión más profunda con eBook.",
          "Ahora es más fácil entender las lessons gratis, los checklists y los PDF como herramientas de repaso rápido, mientras que los eBooks quedan como una continuación más estructurada.",
          "Esta diferencia se reforzó tanto en la home como en la Source Library.",
          "Esta actualización se centró en mantener valioso el material gratuito mientras hacía más natural el flujo de repaso profundo."
        ]
      },
      ar:{
        date:"2026-05-03",
        title:"أصبح الفرق أوضح بين المواد التعليمية المجانية والمراجعة الأعمق عبر الكتب الإلكترونية",
        items:[
          "أصبح الفرق أوضح بين المواد التعليمية المجانية والمراجعة الأعمق عبر الكتب الإلكترونية.",
          "أصبح من الأسهل فهم الدروس المجانية والقوائم السريعة وملفات PDF المجانية كأدوات مراجعة سريعة، بينما تم وضع الكتب الإلكترونية كمتابعة أعمق وأكثر تنظيما.",
          "وقد تم تعزيز هذا الفرق بشكل أوضح في الصفحة الرئيسية وفي مكتبة المصادر.",
          "ركز هذا التحديث على إبقاء المواد المجانية ذات قيمة مع جعل تدفق المراجعة الأعمق أكثر طبيعية."
        ]
      },
      vi:{
        date:"2026-05-03",
        title:"Da lam ro hon su khac nhau giua tai lieu hoc mien phi va luong on tap sau hon bang eBook",
        items:[
          "Da lam ro hon su khac nhau giua tai lieu hoc mien phi va luong on tap sau hon bang eBook.",
          "Bai hoc mien phi, checklist, va PDF mien phi duoc de hieu hon nhu cong cu xem lai nhanh, trong khi eBook duoc dat vao vai tro on tap sau hon va co cau truc hon.",
          "Su khac biet nay duoc lam ro hon tren ca home va Source Library.",
          "Ban cap nhat nay tap trung giu cho tai lieu mien phi van co gia tri trong khi lam cho luong on tap sau hon tro nen tu nhien hon."
        ]
      },
      ha:{
        date:"2026-05-03",
        title:"An kara bayyana bambanci tsakanin kayan koyo na kyauta da zurfafan bita ta eBook",
        items:[
          "An kara bayyana bambanci tsakanin kayan koyo na kyauta da zurfafan bita ta eBook.",
          "An saukaka fahimtar darussa na kyauta, checklist, da PDF na kyauta a matsayin kayan duba da sauri, yayin da aka nuna eBook a matsayin karin bita mai tsari sosai.",
          "An kara bayyana wannan bambancin a shafin gida da kuma cikin Source Library.",
          "Wannan sabuntawar ta mayar da hankali kan kiyaye darajar kayan kyauta tare da sa tafiyar zurfafan bita ta fi zama dabi'a."
        ]
      }
    },
    "2026-05-05":{
      en:{
        date:"2026-05-05",
        title:"Reorganized the Source Library into a more structured archive",
        items:[
          "Reorganized the Source Library into a more structured archive.",
          "Clarified the roles of quick review, worth saving, and deeper materials while improving revisit-friendly exploration.",
          "Also made the use cases of checklists, free PDFs, eBooks, and reference materials more distinct.",
          "This update focused on making non-home materials easier to explore in a more organized way."
        ]
      },
      ko:{
        date:"2026-05-05",
        title:"자료 라이브러리를 더 정리된 아카이브 구조로 재배치했습니다",
        items:[
          "자료 라이브러리를 더 정리된 아카이브 구조로 재배치했습니다.",
          "빠르게 보기, 저장용, 심화용처럼 자료의 성격이 더 잘 보이게 정리했고, 다시 찾기 쉬운 흐름도 함께 보강했습니다.",
          "체크리스트, 무료 PDF, 전자책, 참고자료가 각각 어떤 용도인지 더 분명하게 구분되도록 정리했습니다.",
          "이번 업데이트는 홈에서 바로 보이지 않는 정보도 자료 라이브러리 안에서는 더 체계적으로 탐색할 수 있게 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-05-05",
        title:"จัดวาง Source Library ใหม่ให้เป็นโครงสร้างคลังข้อมูลที่เป็นระเบียบมากขึ้น",
        items:[
          "จัดวาง Source Library ใหม่ให้เป็นโครงสร้างคลังข้อมูลที่เป็นระเบียบมากขึ้น",
          "ทำให้บทบาทของสื่อแบบทบทวนด่วน เก็บไว้อ่าน และเชิงลึกชัดเจนขึ้น พร้อมเสริมการสำรวจที่เหมาะกับการกลับมาดูอีกครั้ง",
          "ทำให้จุดประสงค์ของเช็กลิสต์ PDF ฟรี eBook และแหล่งอ้างอิงต่าง ๆ แยกกันชัดขึ้นด้วย",
          "อัปเดตนี้มุ่งทำให้ข้อมูลที่ไม่ได้อยู่บนหน้าโฮมสำรวจต่อได้ง่ายขึ้นในรูปแบบที่เป็นระบบกว่าเดิม"
        ]
      },
      id:{
        date:"2026-05-05",
        title:"Source Library diatur ulang menjadi arsip yang lebih terstruktur",
        items:[
          "Source Library diatur ulang menjadi arsip yang lebih terstruktur.",
          "Peran materi quick review, worth saving, dan deeper dibuat lebih jelas sambil memperkuat alur yang ramah untuk kembali dikunjungi.",
          "Use case checklist, PDF gratis, eBook, dan materi referensi juga dibuat lebih tegas satu sama lain.",
          "Pembaruan ini berfokus membuat materi di luar home lebih mudah dijelajahi dengan cara yang lebih rapi."
        ]
      },
      pt:{
        date:"2026-05-05",
        title:"A Source Library foi reorganizada em um arquivo mais estruturado",
        items:[
          "A Source Library foi reorganizada em um arquivo mais estruturado.",
          "Os papéis de revisão rápida, materiais que valem salvar e materiais de aprofundamento ficaram mais claros, junto com uma exploração mais amigável para revisitas.",
          "Também ficaram mais distintos os usos de checklists, PDFs gratuitos, eBooks e materiais de referência.",
          "Esta atualização se concentrou em facilitar a exploração do material fora da home de forma mais organizada."
        ]
      },
      tr:{
        date:"2026-05-05",
        title:"Source Library daha duzenli bir arsiv yapisina gore yeniden yerlesitirildi",
        items:[
          "Source Library daha duzenli bir arsiv yapisina gore yeniden yerlesitirildi.",
          "Hizli gozden gecirme, kaydetmeye deger ve derin materyal rollerinin farki netlestirilirken tekrar gelmeye uygun gezinti de guclendirildi.",
          "Checklistlerin, ucretsiz PDF'lerin, eBooklerin ve referans materyallerinin kullanim amaclari da daha belirgin hale getirildi.",
          "Bu guncelleme, ana sayfa disindaki materyalleri daha duzenli bir sekilde kesfetmeyi kolaylastirmaya odaklandi."
        ]
      },
      es:{
        date:"2026-05-05",
        title:"La Source Library se reorganizó como un archivo más estructurado",
        items:[
          "La Source Library se reorganizó como un archivo más estructurado.",
          "Se aclararon mejor los roles de revisión rápida, material para guardar y material más profundo, mientras se mejoraba la exploración pensada para volver luego.",
          "También quedaron más claros los usos de los checklists, PDF gratis, eBooks y materiales de referencia.",
          "Esta actualización se centró en hacer más fácil explorar de forma ordenada el material que no está visible de inmediato en la home."
        ]
      },
      ar:{
        date:"2026-05-05",
        title:"أعيد تنظيم مكتبة المصادر كأرشيف أكثر ترتيباً",
        items:[
          "أعيد تنظيم مكتبة المصادر كأرشيف أكثر ترتيباً.",
          "أصبح الفرق أوضح بين مواد المراجعة السريعة والمواد التي تستحق الحفظ والمواد الأعمق، مع تحسين الاستكشاف المناسب للعودة لاحقاً.",
          "كما أصبحت استخدامات القوائم السريعة وملفات PDF المجانية والكتب الإلكترونية والمراجع أوضح من بعضها البعض.",
          "ركز هذا التحديث على جعل المواد خارج الصفحة الرئيسية أسهل في الاستكشاف بطريقة أكثر تنظيماً."
        ]
      },
      vi:{
        date:"2026-05-05",
        title:"Da sap xep lai Source Library thanh mot kho luu tru co cau truc hon",
        items:[
          "Da sap xep lai Source Library thanh mot kho luu tru co cau truc hon.",
          "Vai tro cua nhom xem nhanh, nen luu lai, va nhom noi dung sau hon duoc lam ro hon, dong thoi cai thien luong kham pha de quay lai sau nay.",
          "Cach dung cua checklist, PDF mien phi, eBook, va tai lieu tham khao cung duoc phan biet ro hon.",
          "Ban cap nhat nay tap trung lam cho tai lieu ben ngoai home de kham pha hon theo cach co to chuc."
        ]
      },
      ha:{
        date:"2026-05-05",
        title:"An sake tsara Source Library zuwa tsarin ajiya mai tsari sosai",
        items:[
          "An sake tsara Source Library zuwa tsarin ajiya mai tsari sosai.",
          "An kara bayyana bambanci tsakanin kayan duba da sauri, kayan da suka cancanci ajiya, da kayan zurfafa, tare da karfafa hanyoyin komawa a sake dubawa.",
          "An kuma fayyace amfani na checklist, PDF na kyauta, eBook, da kayan madogara da kyau fiye da da.",
          "Wannan sabuntawar ta mayar da hankali kan saukaka binciken kayan da ba sa bayyana kai tsaye a home cikin tsari mafi kyau."
        ]
      }
    },
    "2026-05-07":{
      en:{
        date:"2026-05-07",
        title:"Improved readability and line-break stability across the home and source library",
        items:[
          "Improved readability and line-break stability across the home and source library.",
          "Refined key titles, card descriptions, and helper text so they no longer break awkwardly, while also improving multi-language reading flow.",
          "Also adjusted contrast and clarity in text areas that appeared too soft.",
          "This update focused on making the interface easier to read clearly rather than adding new features."
        ]
      },
      ko:{
        date:"2026-05-07",
        title:"홈과 자료 라이브러리의 가독성과 줄바꿈 흐름을 더 안정적으로 다듬었습니다",
        items:[
          "홈과 자료 라이브러리의 가독성과 줄바꿈 흐름을 더 안정적으로 다듬었습니다.",
          "핵심 제목, 카드 설명, 보조 문구가 어색하게 끊기지 않도록 정리했고, 여러 언어에서의 읽기 흐름도 함께 보강했습니다.",
          "흐릿하게 보이던 일부 텍스트의 대비와 선명도도 함께 조정했습니다.",
          "이번 업데이트는 기능 추가보다 실제로 더 또렷하고 편하게 읽히는 화면을 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-05-07",
        title:"ปรับความอ่านง่ายและความเสถียรของการตัดบรรทัดในหน้าโฮมและ Source Library ให้ดีขึ้น",
        items:[
          "ปรับความอ่านง่ายและความเสถียรของการตัดบรรทัดในหน้าโฮมและ Source Library ให้ดีขึ้น",
          "จัดระเบียบหัวข้อหลัก คำอธิบายการ์ด และข้อความช่วยเหลือไม่ให้ตัดบรรทัดอย่างแปลกตา พร้อมทั้งเสริมการอ่านหลายภาษาให้ลื่นขึ้น",
          "ปรับความคมชัดและคอนทราสต์ของข้อความบางส่วนที่ดูจางเกินไปด้วย",
          "อัปเดตนี้มุ่งทำให้หน้าจออ่านได้ชัดและสบายขึ้น มากกว่าการเพิ่มฟีเจอร์ใหม่"
        ]
      },
      id:{
        date:"2026-05-07",
        title:"Keterbacaan dan stabilitas line-break di home dan Source Library ditingkatkan",
        items:[
          "Keterbacaan dan stabilitas line-break di home dan Source Library ditingkatkan.",
          "Judul utama, deskripsi kartu, dan helper text dirapikan agar tidak patah dengan canggung, sambil memperbaiki alur baca multibahasa.",
          "Kontras dan kejernihan pada area teks yang terasa terlalu lembut juga disesuaikan.",
          "Pembaruan ini berfokus membuat antarmuka lebih jelas dan nyaman dibaca daripada menambah fitur baru."
        ]
      },
      pt:{
        date:"2026-05-07",
        title:"A legibilidade e a estabilidade das quebras de linha na home e na Source Library foram melhoradas",
        items:[
          "A legibilidade e a estabilidade das quebras de linha na home e na Source Library foram melhoradas.",
          "Títulos principais, descrições de cartões e textos auxiliares foram refinados para não quebrarem de forma estranha, ao mesmo tempo em que o fluxo de leitura multilíngue foi melhorado.",
          "O contraste e a nitidez de áreas de texto que pareciam suaves demais também foram ajustados.",
          "Esta atualização se concentrou em tornar a interface mais clara e confortável de ler, em vez de adicionar novas funções."
        ]
      },
      tr:{
        date:"2026-05-07",
        title:"Ana sayfa ve Source Library boyunca okunabilirlik ile satir kirilma kararliligi iyilestirildi",
        items:[
          "Ana sayfa ve Source Library boyunca okunabilirlik ile satir kirilma kararliligi iyilestirildi.",
          "Temel basliklar, kart aciklamalari ve yardimci metinler garip sekilde bolunmeyecek bicimde duzenlenirken cok dilli okuma akisi da gelistirildi.",
          "Fazla soluk gorunen metin alanlarinin kontrasti ve netligi de ayarlandi.",
          "Bu guncelleme, yeni ozellik eklemekten cok arayuzu daha net ve rahat okunur hale getirmeye odaklandi."
        ]
      },
      es:{
        date:"2026-05-07",
        title:"Se mejoraron la legibilidad y la estabilidad de los saltos de línea en la home y la Source Library",
        items:[
          "Se mejoraron la legibilidad y la estabilidad de los saltos de línea en la home y la Source Library.",
          "Se ajustaron los títulos clave, las descripciones de tarjetas y los textos de apoyo para que no se corten de forma rara, al mismo tiempo que se mejoró el flujo de lectura multilingüe.",
          "También se ajustaron el contraste y la claridad en zonas de texto que se veían demasiado suaves.",
          "Esta actualización se centró en hacer la interfaz más clara y cómoda de leer, en lugar de añadir funciones nuevas."
        ]
      },
      ar:{
        date:"2026-05-07",
        title:"تم تحسين قابلية القراءة واستقرار فواصل الأسطر في الصفحة الرئيسية ومكتبة المصادر",
        items:[
          "تم تحسين قابلية القراءة واستقرار فواصل الأسطر في الصفحة الرئيسية ومكتبة المصادر.",
          "تم تهذيب العناوين الأساسية ووصف البطاقات والنصوص المساعدة حتى لا تنكسر بشكل غير طبيعي، مع تحسين تدفق القراءة بين اللغات.",
          "كما تم تعديل التباين والوضوح في مناطق النص التي كانت تبدو باهتة أكثر من اللازم.",
          "ركز هذا التحديث على جعل الواجهة أوضح وأسهل في القراءة بدلاً من إضافة ميزات جديدة."
        ]
      },
      vi:{
        date:"2026-05-07",
        title:"Da cai thien do de doc va su on dinh cua xuong dong tren home va Source Library",
        items:[
          "Da cai thien do de doc va su on dinh cua xuong dong tren home va Source Library.",
          "Cac tieu de chinh, mo ta the, va helper text duoc tinh chinh de khong bi ngat kho doc, dong thoi cai thien luong doc da ngon ngu.",
          "Do tuong phan va do ro o nhung vung chu trieng qua mem cung da duoc dieu chinh.",
          "Ban cap nhat nay tap trung vao lam giao dien de doc ro rang hon thay vi bo sung tinh nang moi."
        ]
      },
      ha:{
        date:"2026-05-07",
        title:"An inganta karantawa da kwanciyar yankewar layi a shafin gida da Source Library",
        items:[
          "An inganta karantawa da kwanciyar yankewar layi a shafin gida da Source Library.",
          "An gyara manyan taken, bayanin katuna, da sakonnin taimako domin kada su rika yankewa ta hanya mai ban mamaki, tare da kara inganta tafiyar karatu a harsuna da yawa.",
          "An kuma daidaita bambancin launi da fayyacewa a wuraren rubutu da suke bayyana a raunane.",
          "Wannan sabuntawar ta mayar da hankali kan sa allon ya fi bayyana kuma ya fi dadi a karanta maimakon kara sabbin fasaloli."
        ]
      }
    },
    "2026-05-09":{
      en:{
        date:"2026-05-09",
        title:"Refined the home conversion flow and the archive-style exploration flow again",
        items:[
          "Refined the home conversion flow and the archive-style exploration flow again.",
          "Clarified the difference between content meant for quick clicks and content meant to be saved and revisited later.",
          "Also improved the connection between visitor-type entry paths and the source library archive direction.",
          "This update focused on making the site easier to understand quickly while also making resources easier to find again later."
        ]
      },
      ko:{
        date:"2026-05-09",
        title:"홈 화면 전환 구조와 자료 탐색 흐름을 한 번 더 정리했습니다",
        items:[
          "홈 화면 전환 구조와 자료 탐색 흐름을 한 번 더 정리했습니다.",
          "짧게 보고 바로 눌러야 하는 요소와, 저장해두고 나중에 다시 보는 자료의 역할이 더 분명하게 느껴지도록 홈과 자료 라이브러리 흐름을 다듬었습니다.",
          "방문자 유형별 진입 구조와 자료 라이브러리 아카이브 방향도 더 자연스럽게 이어지도록 보강했습니다.",
          "이번 업데이트는 사이트 전체를 더 짧고 선명하게 이해하면서도, 필요한 자료는 더 쉽게 다시 찾을 수 있게 만드는 데 집중했습니다."
        ]
      },
      th:{
        date:"2026-05-09",
        title:"ปรับโครงสร้างการเปลี่ยนผ่านบนหน้าโฮมและการสำรวจแบบคลังข้อมูลอีกครั้ง",
        items:[
          "ปรับโครงสร้างการเปลี่ยนผ่านบนหน้าโฮมและการสำรวจแบบคลังข้อมูลอีกครั้ง",
          "ทำให้ความต่างระหว่างสิ่งที่ควรกดทันที กับสิ่งที่ควรเก็บไว้กลับมาดูภายหลังรู้สึกชัดขึ้นทั้งในหน้าโฮมและใน Source Library",
          "เสริมให้ทางเข้าตามประเภทผู้เยี่ยมชมและทิศทางของคลังข้อมูลใน Source Library เชื่อมต่อกันอย่างเป็นธรรมชาติมากขึ้นด้วย",
          "อัปเดตนี้มุ่งทำให้ทั้งเว็บไซต์เข้าใจได้สั้นและชัดขึ้น พร้อมกับทำให้หาทรัพยากรที่ต้องกลับมาดูได้ง่ายขึ้นในภายหลัง"
        ]
      },
      id:{
        date:"2026-05-09",
        title:"Alur konversi home dan alur eksplorasi bergaya arsip dirapikan sekali lagi",
        items:[
          "Alur konversi home dan alur eksplorasi bergaya arsip dirapikan sekali lagi.",
          "Perbedaan antara konten yang harus cepat diklik dan konten yang lebih baik disimpan lalu dilihat lagi dibuat lebih jelas di home maupun Source Library.",
          "Koneksi antara jalur masuk berdasarkan tipe pengunjung dan arah arsip Source Library juga diperhalus agar terasa lebih alami.",
          "Pembaruan ini berfokus membuat situs lebih cepat dipahami sekaligus membuat sumber yang dibutuhkan lebih mudah ditemukan kembali."
        ]
      },
      pt:{
        date:"2026-05-09",
        title:"O fluxo de conversão da home e o fluxo de exploração em estilo arquivo foram refinados novamente",
        items:[
          "O fluxo de conversão da home e o fluxo de exploração em estilo arquivo foram refinados novamente.",
          "A diferença entre conteúdos para clicar rapidamente e conteúdos para salvar e rever depois ficou mais clara tanto na home quanto na Source Library.",
          "A ligação entre os caminhos por tipo de visitante e a direção de arquivo da Source Library também foi reforçada de forma mais natural.",
          "Esta atualização se concentrou em tornar o site mais rápido de entender e, ao mesmo tempo, mais fácil de usar para reencontrar recursos depois."
        ]
      },
      tr:{
        date:"2026-05-09",
        title:"Ana sayfa donusum akisi ve arsiv tarzi kesif akisi bir kez daha duzenlendi",
        items:[
          "Ana sayfa donusum akisi ve arsiv tarzi kesif akisi bir kez daha duzenlendi.",
          "Hemen tiklanmasi gereken icerikler ile kaydedilip sonra yeniden bakilacak icerikler arasindaki fark hem ana sayfada hem de Source Library icinde daha belirgin hale getirildi.",
          "Ziyaretci tipine gore giris yollari ile Source Library arsiv yonu arasindaki baglanti da daha dogal olacak sekilde guclendirildi.",
          "Bu guncelleme, sitenin daha hizli anlasilmasina ve gerekli kaynaklarin daha sonra yeniden kolay bulunmasina odaklandi."
        ]
      },
      es:{
        date:"2026-05-09",
        title:"Se volvió a refinar el flujo de conversión de la home y el flujo de exploración tipo archivo",
        items:[
          "Se volvió a refinar el flujo de conversión de la home y el flujo de exploración tipo archivo.",
          "Se dejó más clara la diferencia entre el contenido pensado para hacer clic rápido y el contenido pensado para guardar y volver a revisar después, tanto en la home como en la Source Library.",
          "También se reforzó de forma más natural la conexión entre los caminos de entrada por tipo de visitante y la dirección de archivo de la Source Library.",
          "Esta actualización se centró en hacer el sitio más fácil de entender rápidamente y en facilitar volver a encontrar los recursos necesarios más adelante."
        ]
      },
      ar:{
        date:"2026-05-09",
        title:"تمت إعادة تنظيم تدفق التحويل في الصفحة الرئيسية وتدفق الاستكشاف بأسلوب الأرشيف مرة أخرى",
        items:[
          "تمت إعادة تنظيم تدفق التحويل في الصفحة الرئيسية وتدفق الاستكشاف بأسلوب الأرشيف مرة أخرى.",
          "أصبح الفرق أوضح بين العناصر التي يجب النقر عليها بسرعة وبين المواد التي يجدر حفظها والرجوع إليها لاحقاً، سواء في الصفحة الرئيسية أو في مكتبة المصادر.",
          "كما تم تحسين الربط بين مسارات الدخول حسب نوع الزائر وبين اتجاه الأرشيف داخل مكتبة المصادر بشكل أكثر طبيعية.",
          "ركز هذا التحديث على جعل الموقع أسرع في الفهم وأسهل في العودة للعثور على الموارد المطلوبة لاحقاً."
        ]
      },
      vi:{
        date:"2026-05-09",
        title:"Da tinh chinh them mot lan nua luong chuyen doi tren home va luong kham pha kieu luu tru",
        items:[
          "Da tinh chinh them mot lan nua luong chuyen doi tren home va luong kham pha kieu luu tru.",
          "Su khac nhau giua noi dung can bam nhanh va noi dung nen luu lai de xem sau duoc lam ro hon tren home va trong Source Library.",
          "Lien ket giua cac luong vao theo loai khach truy cap va huong luu tru cua Source Library cung duoc bo sung de tu nhien hon.",
          "Ban cap nhat nay tap trung giup toan bo trang de hieu nhanh hon va de tim lai tai lieu can thiet hon ve sau."
        ]
      },
      ha:{
        date:"2026-05-09",
        title:"An sake tsara tafiyar juyawa a shafin gida da tafiyar binciken tsarin ajiya",
        items:[
          "An sake tsara tafiyar juyawa a shafin gida da tafiyar binciken tsarin ajiya.",
          "An kara bayyana bambanci tsakanin abubuwan da ya dace a danna nan take da abubuwan da ya dace a adana domin komawa daga baya, a home da kuma cikin Source Library.",
          "An kuma kara daidaita hadin tsakanin hanyoyin shiga bisa irin bako da kuma tsarin ajiya na Source Library domin su yi gudana cikin dabi'a.",
          "Wannan sabuntawar ta mayar da hankali kan sa shafin ya fi saurin fahimta tare da saukaka sake gano kayan da ake bukata daga baya."
        ]
      }
    }
  };
  UPDATE_PACK["2026-04-17"].br = UPDATE_PACK["2026-04-17"].pt;
  UPDATE_PACK["2026-04-18"].br = UPDATE_PACK["2026-04-18"].pt;
  UPDATE_PACK["2026-04-19"].br = UPDATE_PACK["2026-04-19"].pt;
  UPDATE_PACK["2026-04-25"].br = UPDATE_PACK["2026-04-25"].pt;
  UPDATE_PACK["2026-04-27"].br = UPDATE_PACK["2026-04-27"].pt;
  UPDATE_PACK["2026-04-29"].br = UPDATE_PACK["2026-04-29"].pt;
  UPDATE_PACK["2026-05-01"].br = UPDATE_PACK["2026-05-01"].pt;
  UPDATE_PACK["2026-05-03"].br = UPDATE_PACK["2026-05-03"].pt;
  UPDATE_PACK["2026-05-05"].br = UPDATE_PACK["2026-05-05"].pt;
  UPDATE_PACK["2026-05-07"].br = UPDATE_PACK["2026-05-07"].pt;
  UPDATE_PACK["2026-05-09"].br = UPDATE_PACK["2026-05-09"].pt;

  var originalGetUpdateHistoryEntries = typeof window.getUpdateHistoryEntries === "function" ? window.getUpdateHistoryEntries : null;
  window.getUpdateHistoryEntries = function(lang){
    var list = originalGetUpdateHistoryEntries ? originalGetUpdateHistoryEntries(lang) : [];
    var targetLang = baseLang(lang);
    list = Array.isArray(list) ? list.slice() : [];
    list = list.filter(function(entry){
      return entry
        && entry.date !== "2026-04-17"
        && entry.date !== "2026-04-18"
        && entry.date !== "2026-04-19"
        && entry.date !== "2026-04-25"
        && entry.date !== "2026-04-27"
        && entry.date !== "2026-04-29"
        && entry.date !== "2026-05-01"
        && entry.date !== "2026-05-03"
        && entry.date !== "2026-05-05"
        && entry.date !== "2026-05-07"
        && entry.date !== "2026-05-09";
    });
    ["2026-04-17","2026-04-18","2026-04-19","2026-04-25","2026-04-27","2026-04-29","2026-05-01","2026-05-03","2026-05-05","2026-05-07","2026-05-09"].forEach(function(date){
      var pack = UPDATE_PACK[date][targetLang] || UPDATE_PACK[date].en;
      list.unshift(clone(pack));
    });
    return list;
  };

  function refreshUpdatePanels(){
    if(typeof document === "undefined" || typeof window.renderUpdateHistory !== "function") return;
    var panel = document.getElementById("updatesPanel");
    if(panel){
      panel.innerHTML = window.renderUpdateHistory();
    }
  }

  refreshUpdatePanels();
  if(typeof currentPage !== "undefined" && (currentPage === "home" || currentPage === "updates") && typeof showPage === "function"){
    showPage(currentPage);
  }
})();
