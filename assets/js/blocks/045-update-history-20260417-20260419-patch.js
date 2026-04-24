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
    }
  };
  UPDATE_PACK["2026-04-17"].br = UPDATE_PACK["2026-04-17"].pt;
  UPDATE_PACK["2026-04-18"].br = UPDATE_PACK["2026-04-18"].pt;
  UPDATE_PACK["2026-04-19"].br = UPDATE_PACK["2026-04-19"].pt;
  UPDATE_PACK["2026-04-25"].br = UPDATE_PACK["2026-04-25"].pt;

  var originalGetUpdateHistoryEntries = typeof window.getUpdateHistoryEntries === "function" ? window.getUpdateHistoryEntries : null;
  window.getUpdateHistoryEntries = function(lang){
    var list = originalGetUpdateHistoryEntries ? originalGetUpdateHistoryEntries(lang) : [];
    var targetLang = baseLang(lang);
    list = Array.isArray(list) ? list.slice() : [];
    list = list.filter(function(entry){
      return entry && entry.date !== "2026-04-17" && entry.date !== "2026-04-18" && entry.date !== "2026-04-19" && entry.date !== "2026-04-25";
    });
    ["2026-04-17","2026-04-18","2026-04-19","2026-04-25"].forEach(function(date){
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
