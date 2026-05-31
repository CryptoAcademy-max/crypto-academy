(function(){
  if(window.__updateHistory20260419Patch) return;
  window.__updateHistory20260419Patch = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "pt-br" ? "br" : value;
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
    },
    "2026-05-31":{
      en:{
        date:"2026-05-31",
        title:"Search, FAQ, and Safety Learning Flow Improved",
        items:[
          "Separated representative coin results from general coin results.",
          "Representative coin cards now appear only for exact representative coin searches, while general coins appear as compact explanation cards.",
          "Improved search result relevance so results better match the entered keyword.",
          "Fixed overlapping search input text and stabilized the search input flow.",
          "Expanded FAQ content and connected FAQ items to search results.",
          "Improved Safety menu items so key safety topics appear in search results.",
          "Refined supporting sections and review flow for Lessons 8-14.",
          "Improved multilingual display for search results and key labels based on the current language.",
          "Optimized search performance across coins, lessons, glossary, FAQ, and safety items."
        ]
      },
      ko:{
        date:"2026-05-31",
        title:"검색·FAQ·안전 학습 흐름 개선",
        items:[
          "대표 코인과 일반 코인 검색 결과 구조를 분리했습니다.",
          "대표 코인 검색 시에는 대표 코인 카드가 표시되고, 일반 코인 검색 시에는 간단한 설명 카드가 표시되도록 개선했습니다.",
          "검색 결과가 입력한 키워드와 더 직접적으로 연결되도록 정렬과 표시 방식을 조정했습니다.",
          "검색창 글자 겹침 문제를 해결하고 입력 흐름을 안정화했습니다.",
          "FAQ 항목을 보강하고 검색창에서 자주 묻는 질문이 함께 검색되도록 연결했습니다.",
          "안전 메뉴의 핵심 항목이 검색 결과에 연결되도록 개선했습니다.",
          "Lesson 8~14 중급자 강의의 보조 섹션과 확인 흐름을 정리했습니다.",
          "다국어 환경에서 검색 결과와 주요 라벨이 현재 언어에 맞게 표시되도록 개선했습니다.",
          "검색 성능을 최적화해 코인, 강의, 용어, FAQ, 안전 항목 검색 속도를 개선했습니다."
        ]
      },
      th:{
        date:"2026-05-31",
        title:"ปรับปรุงการค้นหา FAQ และเส้นทางการเรียนรู้ความปลอดภัย",
        items:[
          "แยกโครงสร้างผลลัพธ์ของเหรียญตัวแทนออกจากเหรียญทั่วไป",
          "การ์ดเหรียญตัวแทนจะแสดงเฉพาะเมื่อค้นหาตรงกับเหรียญตัวแทน ส่วนเหรียญทั่วไปจะแสดงเป็นการ์ดคำอธิบายแบบกะทัดรัด",
          "ปรับความเกี่ยวข้องของผลการค้นหาให้ตรงกับคำค้นมากขึ้น",
          "แก้ปัญหาข้อความซ้อนในช่องค้นหาและทำให้การพิมพ์ค้นหามีเสถียรมากขึ้น",
          "ขยายเนื้อหา FAQ และเชื่อมรายการ FAQ เข้ากับผลการค้นหา",
          "ปรับรายการในเมนู Safety เพื่อให้หัวข้อความปลอดภัยหลักปรากฏในผลการค้นหา",
          "ปรับส่วนสนับสนุนและลำดับการทบทวนของ Lessons 8-14",
          "ปรับการแสดงผลหลายภาษาให้ผลการค้นหาและป้ายหลักตรงกับภาษาปัจจุบัน",
          "ปรับประสิทธิภาพการค้นหาสำหรับเหรียญ บทเรียน คำศัพท์ FAQ และหัวข้อความปลอดภัย"
        ]
      },
      id:{
        date:"2026-05-31",
        title:"Alur Pencarian, FAQ, dan Pembelajaran Keamanan Ditingkatkan",
        items:[
          "Memisahkan struktur hasil pencarian coin representatif dan coin umum.",
          "Kartu coin representatif kini muncul hanya untuk pencarian coin representatif yang tepat, sedangkan coin umum tampil sebagai kartu penjelasan ringkas.",
          "Relevansi hasil pencarian ditingkatkan agar lebih sesuai dengan kata kunci yang dimasukkan.",
          "Masalah teks yang bertumpuk di kolom pencarian diperbaiki dan alur input dibuat lebih stabil.",
          "Konten FAQ diperluas dan item FAQ dihubungkan ke hasil pencarian.",
          "Item menu Safety ditingkatkan agar topik keamanan utama muncul di hasil pencarian.",
          "Bagian pendukung dan alur tinjauan untuk Lessons 8-14 dirapikan.",
          "Tampilan multibahasa untuk hasil pencarian dan label utama diperbaiki berdasarkan bahasa saat ini.",
          "Performa pencarian dioptimalkan untuk coin, lessons, glossary, FAQ, dan item safety."
        ]
      },
      pt:{
        date:"2026-05-31",
        title:"Fluxo de busca, FAQ e aprendizagem de segurança melhorado",
        items:[
          "A estrutura de resultados de moedas representativas foi separada dos resultados de moedas gerais.",
          "Cards de moedas representativas agora aparecem apenas em buscas exatas por moedas representativas, enquanto moedas gerais aparecem como cards compactos de explicação.",
          "A relevância dos resultados de busca foi melhorada para corresponder melhor à palavra-chave digitada.",
          "O texto sobreposto no campo de busca foi corrigido e o fluxo de entrada foi estabilizado.",
          "O conteúdo de FAQ foi ampliado e os itens de FAQ foram conectados aos resultados de busca.",
          "Os itens do menu Safety foram melhorados para que tópicos importantes de segurança apareçam nos resultados.",
          "As seções de apoio e o fluxo de revisão das Lessons 8-14 foram refinados.",
          "A exibição multilíngue de resultados de busca e labels principais foi melhorada conforme o idioma atual.",
          "A performance da busca foi otimizada para moedas, lessons, glossary, FAQ e itens de safety."
        ]
      },
      br:{
        date:"2026-05-31",
        title:"Fluxo de busca, FAQ e aprendizagem de segurança aprimorado",
        items:[
          "A estrutura de resultados de moedas representativas foi separada dos resultados de moedas gerais.",
          "Cards de moedas representativas agora aparecem apenas em buscas exatas por moedas representativas, enquanto moedas gerais aparecem como cards compactos de explicação.",
          "A relevância dos resultados de busca foi aprimorada para corresponder melhor à palavra-chave digitada.",
          "O texto sobreposto no campo de busca foi corrigido e o fluxo de entrada foi estabilizado.",
          "O conteúdo de FAQ foi ampliado e os itens de FAQ foram conectados aos resultados de busca.",
          "Os itens do menu Safety foram aprimorados para que tópicos importantes de segurança apareçam nos resultados.",
          "As seções de apoio e o fluxo de revisão das Lessons 8-14 foram refinados.",
          "A exibição multilíngue de resultados de busca e labels principais foi aprimorada conforme o idioma atual.",
          "A performance da busca foi otimizada para moedas, lessons, glossary, FAQ e itens de safety."
        ]
      },
      tr:{
        date:"2026-05-31",
        title:"Arama, SSS ve güvenlik öğrenme akışı iyileştirildi",
        items:[
          "Temsilci coin sonuçları ile genel coin sonuçlarının yapısı ayrıldı.",
          "Temsilci coin kartları artık yalnızca temsilci coin için tam eşleşen aramalarda görünür; genel coinler ise kompakt açıklama kartları olarak gösterilir.",
          "Arama sonuçlarının girilen anahtar kelimeyle daha doğrudan eşleşmesi için sıralama ve gösterim iyileştirildi.",
          "Arama alanındaki metin çakışması düzeltildi ve giriş akışı daha stabil hale getirildi.",
          "SSS içeriği genişletildi ve SSS öğeleri arama sonuçlarına bağlandı.",
          "Safety menüsündeki temel güvenlik konularının arama sonuçlarında görünmesi iyileştirildi.",
          "Lessons 8-14 için destek bölümleri ve gözden geçirme akışı düzenlendi.",
          "Arama sonuçları ve ana etiketlerin mevcut dile göre gösterimi iyileştirildi.",
          "Coin, lessons, glossary, SSS ve safety öğeleri için arama performansı optimize edildi."
        ]
      },
      es:{
        date:"2026-05-31",
        title:"Se mejoró el flujo de búsqueda, FAQ y aprendizaje de seguridad",
        items:[
          "Se separó la estructura de resultados de monedas representativas y monedas generales.",
          "Las tarjetas de monedas representativas ahora aparecen solo en búsquedas exactas de monedas representativas, mientras que las monedas generales se muestran como tarjetas compactas de explicación.",
          "Se mejoró la relevancia de los resultados para que coincidan mejor con la palabra clave ingresada.",
          "Se corrigió el texto superpuesto en el campo de búsqueda y se estabilizó el flujo de entrada.",
          "Se amplió el contenido de FAQ y se conectaron los elementos de FAQ con los resultados de búsqueda.",
          "Se mejoraron los elementos del menú Safety para que los temas clave de seguridad aparezcan en los resultados.",
          "Se refinaron las secciones de apoyo y el flujo de revisión para Lessons 8-14.",
          "Se mejoró la visualización multilingüe de resultados y etiquetas principales según el idioma actual.",
          "Se optimizó el rendimiento de búsqueda para monedas, lessons, glossary, FAQ y elementos de safety."
        ]
      },
      ar:{
        date:"2026-05-31",
        title:"تحسين البحث والأسئلة الشائعة ومسار تعلم الأمان",
        items:[
          "تم فصل بنية نتائج العملات التمثيلية عن نتائج العملات العامة.",
          "تظهر بطاقات العملات التمثيلية الآن فقط عند البحث المطابق تمامًا، بينما تظهر العملات العامة كبطاقات شرح مختصرة.",
          "تم تحسين صلة نتائج البحث بحيث تطابق الكلمة المدخلة بشكل أوضح.",
          "تم إصلاح تداخل نص حقل البحث وتحسين استقرار تدفق الإدخال.",
          "تم توسيع محتوى FAQ وربط عناصر FAQ بنتائج البحث.",
          "تم تحسين عناصر قائمة Safety حتى تظهر موضوعات الأمان الأساسية في نتائج البحث.",
          "تم تنظيم الأقسام الداعمة وتدفق المراجعة في Lessons 8-14.",
          "تم تحسين العرض متعدد اللغات لنتائج البحث والتسميات الرئيسية وفق اللغة الحالية.",
          "تم تحسين أداء البحث عبر العملات وlessons وglossary وFAQ وعناصر safety."
        ]
      },
      vi:{
        date:"2026-05-31",
        title:"Cải thiện luồng tìm kiếm, FAQ và học an toàn",
        items:[
          "Đã tách cấu trúc kết quả coin đại diện và coin thông thường.",
          "Thẻ coin đại diện chỉ xuất hiện khi tìm kiếm khớp chính xác, còn coin thông thường hiển thị dưới dạng thẻ giải thích gọn.",
          "Đã cải thiện độ liên quan của kết quả tìm kiếm để khớp trực tiếp hơn với từ khóa nhập vào.",
          "Đã sửa lỗi chữ chồng trong ô tìm kiếm và ổn định luồng nhập liệu.",
          "Đã mở rộng nội dung FAQ và kết nối các mục FAQ với kết quả tìm kiếm.",
          "Đã cải thiện các mục Safety để chủ đề an toàn quan trọng xuất hiện trong kết quả tìm kiếm.",
          "Đã tinh chỉnh các phần hỗ trợ và luồng ôn lại cho Lessons 8-14.",
          "Đã cải thiện hiển thị đa ngôn ngữ cho kết quả tìm kiếm và nhãn chính theo ngôn ngữ hiện tại.",
          "Đã tối ưu hiệu suất tìm kiếm cho coin, lessons, glossary, FAQ và mục safety."
        ]
      },
      ha:{
        date:"2026-05-31",
        title:"An inganta bincike, FAQ, da tafiyar koyon tsaro",
        items:[
          "An raba tsarin sakamakon representative coins da sakamakon general coins.",
          "Katunan representative coin yanzu suna bayyana ne kawai idan bincike ya dace da coin din kai tsaye, yayin da general coins ke bayyana a matsayin gajerun katunan bayani.",
          "An inganta dacewar sakamakon bincike domin ya fi bin kalmar da aka shigar.",
          "An gyara matsalar rubutu da ke cakudewa a akwatin bincike kuma an daidaita tafiyar shigarwa.",
          "An fadada abun cikin FAQ kuma an hada FAQ items da sakamakon bincike.",
          "An inganta abubuwan menu na Safety domin muhimman batutuwan tsaro su bayyana a sakamakon bincike.",
          "An tsara sassan taimako da hanyar dubawa ga Lessons 8-14.",
          "An inganta nuna sakamakon bincike da manyan labels bisa harshen da ake amfani da shi.",
          "An hanzarta bincike a coins, lessons, glossary, FAQ, da safety items."
        ]
      }
    },
    "2026-05-22":{
      en:{
        date:"2026-05-22",
        title:"Intermediate Roadmap and Stability Update",
        items:[
          "The Intermediate Roadmap has been added to Coin ProofPath for Lessons 8-14.",
          "Lessons 8-14 now cover exchange and wallet strategy, network and fee comparison, stablecoins, DeFi, NFT and token project evaluation, bridges, multichain risks, and verification routines.",
          "The homepage roadmap experience was improved with a consistent beginner and intermediate card structure.",
          "Roadmap card titles were shortened, spacing was improved, and clipped text or awkward wrapping was reduced.",
          "Related resource cards were fixed so labels, titles, descriptions, and links display separately.",
          "Coin ProofPath branding was applied more consistently across the site.",
          "About / Mission, Partner, Pitch Deck, and support entry points were strengthened.",
          "Buy Me a Coffee support links were connected where appropriate.",
          "Search placeholders, result labels, categories, and suggestions now follow the selected language more reliably.",
          "Multilingual UI coverage was expanded across major pages and labels.",
          "Visitor display and key site functions were stabilized.",
          "This update focuses on making Coin ProofPath a more structured and stable crypto safety guide from beginner to intermediate levels."
        ]
      },
      ko:{
        date:"2026-05-22",
        title:"중급자 로드맵과 사이트 안정화 업데이트",
        items:[
          "Coin ProofPath에 중급자 로드맵 8~14강이 새롭게 반영되었습니다.",
          "8~14강에서는 거래소와 지갑 활용, 네트워크와 수수료 비교, 스테이블코인, DeFi, NFT와 토큰 프로젝트, 브리지와 멀티체인, 정보 검증 루틴까지 단계적으로 학습할 수 있습니다.",
          "홈 화면의 초보자 로드맵과 중급자 로드맵 카드 UI를 같은 흐름으로 정리했습니다.",
          "카드 제목과 설명을 더 짧고 읽기 쉽게 조정하고, 잘못된 줄바꿈과 글자 잘림 문제를 개선했습니다.",
          "관련 자료 영역에서 라벨, 제목, 설명, 링크가 붙어 보이던 문제를 정리했습니다.",
          "Coin ProofPath 브랜드 표기를 사이트 전반에 더 일관되게 적용했습니다.",
          "About / Mission, Partner, Pitch Deck, 후원 진입 구조를 보강했습니다.",
          "Buy Me a Coffee 후원 링크를 필요한 위치에 연결했습니다.",
          "검색 placeholder, 결과 라벨, 분류명, 추천 결과가 선택한 언어를 더 안정적으로 따르도록 정리했습니다.",
          "주요 페이지와 라벨의 다국어 UI 적용 범위를 확장했습니다.",
          "방문자 표시와 주요 사이트 기능을 안정화했습니다.",
          "이번 업데이트는 초보자에서 중급자까지 이어지는 무료 크립토 안전 학습 흐름을 더 체계적이고 안정적으로 만드는 데 초점을 두었습니다."
        ]
      },
      th:{
        date:"2026-05-22",
        title:"อัปเดตแผนการเรียนระดับกลางและความเสถียรของไซต์",
        items:[
          "เพิ่มแผนการเรียนระดับกลาง Lessons 8-14 ใน Coin ProofPath แล้ว",
          "Lessons 8-14 ครอบคลุมการใช้ exchange และ wallet, การเปรียบเทียบ network และ fee, stablecoin, DeFi, NFT, การประเมิน token project, bridge, multichain และ verification routine",
          "ปรับประสบการณ์ roadmap หน้าแรกให้การ์ด beginner และ intermediate ใช้โครงสร้างที่สอดคล้องกันมากขึ้น",
          "ทำให้ชื่อการ์ดสั้นลง อ่านง่ายขึ้น และลดปัญหาข้อความถูกตัดหรือขึ้นบรรทัดแปลก",
          "แก้ related resource cards ให้ label, title, description และ link แยกกันชัดเจน",
          "ปรับใช้แบรนด์ Coin ProofPath ให้สม่ำเสมอขึ้นทั่วทั้งไซต์",
          "เสริมหน้า About / Mission, Partner, Pitch Deck และช่องทาง support",
          "เชื่อมลิงก์ Buy Me a Coffee ในตำแหน่งที่เหมาะสม",
          "ปรับ placeholder การค้นหา ป้ายผลลัพธ์ หมวดหมู่ และผลลัพธ์แนะนำให้เปลี่ยนตามภาษาที่เลือกได้ดีขึ้น",
          "ขยายการรองรับ UI หลายภาษาในหน้าหลักและป้ายกำกับสำคัญ",
          "ปรับเสถียรภาพของ visitor display และฟังก์ชันหลักของไซต์",
          "อัปเดตนี้มุ่งทำให้ Coin ProofPath เป็นคู่มือความปลอดภัย crypto ที่มีโครงสร้างและเสถียรมากขึ้น ตั้งแต่ระดับเริ่มต้นถึงระดับกลาง"
        ]
      },
      id:{
        date:"2026-05-22",
        title:"Pembaruan Roadmap Menengah dan Stabilitas Situs",
        items:[
          "Roadmap Menengah untuk Lessons 8-14 telah ditambahkan ke Coin ProofPath.",
          "Lessons 8-14 kini membahas strategi exchange dan wallet, perbandingan network dan fee, stablecoin, DeFi, NFT dan evaluasi token project, bridge, multichain, serta rutinitas verifikasi.",
          "Pengalaman roadmap di beranda diperbaiki dengan struktur kartu beginner dan intermediate yang lebih konsisten.",
          "Judul kartu roadmap dipersingkat, jarak diperbaiki, dan teks yang terpotong atau berpindah baris dengan aneh dikurangi.",
          "Kartu related resources diperbaiki agar label, judul, deskripsi, dan link tampil terpisah.",
          "Brand Coin ProofPath diterapkan lebih konsisten di seluruh situs.",
          "Halaman About / Mission, Partner, Pitch Deck, dan jalur dukungan diperkuat.",
          "Link Buy Me a Coffee dihubungkan di tempat yang sesuai.",
          "Placeholder pencarian, label hasil, kategori, dan saran kini mengikuti bahasa yang dipilih dengan lebih baik.",
          "Cakupan UI multibahasa diperluas di halaman dan label utama.",
          "Tampilan visitor dan fungsi utama situs distabilkan.",
          "Pembaruan ini berfokus menjadikan Coin ProofPath panduan keamanan crypto yang lebih terstruktur dan stabil dari level beginner ke intermediate."
        ]
      },
      pt:{
        date:"2026-05-22",
        title:"Atualização do Roteiro Intermediário e de Estabilidade",
        items:[
          "O Roteiro Intermediário para as Lessons 8-14 foi adicionado ao Coin ProofPath.",
          "As Lessons 8-14 agora cobrem estratégia de exchange e carteira, comparação de network e fee, stablecoins, DeFi, NFT e avaliação de token projects, bridges, multichain e rotinas de verificação.",
          "A experiência de roadmap na página inicial foi melhorada com uma estrutura de cartões beginner e intermediate mais consistente.",
          "Os títulos dos cartões foram encurtados, o espaçamento foi melhorado e textos cortados ou quebras de linha estranhas foram reduzidos.",
          "Os cartões de related resources foram corrigidos para que label, título, descrição e link apareçam separados.",
          "A marca Coin ProofPath foi aplicada de forma mais consistente em todo o site.",
          "As páginas About / Mission, Partner, Pitch Deck e pontos de support foram reforçados.",
          "Links Buy Me a Coffee foram conectados onde fazia sentido.",
          "Placeholders de busca, rótulos de resultados, categorias e sugestões agora seguem melhor o idioma selecionado.",
          "A cobertura de UI multilíngue foi expandida nas principais páginas e labels.",
          "O visitor display e funções principais do site foram estabilizados.",
          "Esta atualização foca em tornar o Coin ProofPath um guia de segurança crypto mais estruturado e estável do nível beginner ao intermediate."
        ]
      },
      br:{
        date:"2026-05-22",
        title:"Atualização do Roteiro Intermediário e de Estabilidade",
        items:[
          "O Roteiro Intermediário para as Lessons 8-14 foi adicionado ao Coin ProofPath.",
          "As Lessons 8-14 agora cobrem estratégia de exchange e carteira, comparação de network e fee, stablecoins, DeFi, NFT e avaliação de token projects, bridges, multichain e rotinas de verificação.",
          "A experiência de roadmap na página inicial foi melhorada com uma estrutura de cards beginner e intermediate mais consistente.",
          "Os títulos dos cards foram encurtados, o espaçamento foi melhorado e textos cortados ou quebras de linha estranhas foram reduzidos.",
          "Os cards de related resources foram corrigidos para que label, título, descrição e link apareçam separados.",
          "A marca Coin ProofPath foi aplicada de forma mais consistente em todo o site.",
          "As páginas About / Mission, Partner, Pitch Deck e pontos de support foram reforçados.",
          "Links Buy Me a Coffee foram conectados onde fazia sentido.",
          "Placeholders de busca, rótulos de resultados, categorias e sugestões agora seguem melhor o idioma selecionado.",
          "A cobertura de UI multilíngue foi expandida nas principais páginas e labels.",
          "O visitor display e funções principais do site foram estabilizados.",
          "Esta atualização foca em tornar o Coin ProofPath um guia de segurança cripto mais estruturado e estável do nível beginner ao intermediate."
        ]
      },
      tr:{
        date:"2026-05-22",
        title:"Orta Seviye Yol Haritası ve Stabilite Güncellemesi",
        items:[
          "Coin ProofPath'e Lessons 8-14 için Orta Seviye Yol Haritası eklendi.",
          "Lessons 8-14 artık exchange ve wallet stratejisi, network ve fee karşılaştırması, stablecoin, DeFi, NFT ve token project değerlendirmesi, bridge, multichain riskleri ve doğrulama rutinlerini kapsıyor.",
          "Ana sayfa roadmap deneyimi, beginner ve intermediate kartlarının daha tutarlı bir yapıya sahip olması için iyileştirildi.",
          "Roadmap kart başlıkları kısaltıldı, boşluklar iyileştirildi ve kırpılan metin ya da garip satır kırılmaları azaltıldı.",
          "Related resource kartları, label, başlık, açıklama ve link ayrı görünecek şekilde düzeltildi.",
          "Coin ProofPath markası site genelinde daha tutarlı uygulandı.",
          "About / Mission, Partner, Pitch Deck ve support girişleri güçlendirildi.",
          "Buy Me a Coffee destek linkleri uygun yerlere bağlandı.",
          "Arama placeholder'ları, sonuç etiketleri, kategoriler ve öneriler artık seçilen dili daha güvenilir izliyor.",
          "Çok dilli UI kapsamı ana sayfalar ve önemli etiketlerde genişletildi.",
          "Visitor display ve temel site işlevleri stabilize edildi.",
          "Bu güncelleme, Coin ProofPath'i beginner seviyeden intermediate seviyeye kadar daha düzenli ve stabil bir crypto safety guide haline getirmeye odaklanır."
        ]
      },
      es:{
        date:"2026-05-22",
        title:"Actualización de Roadmap Intermedio y Estabilidad",
        items:[
          "Se agregó el Roadmap Intermedio para Lessons 8-14 en Coin ProofPath.",
          "Lessons 8-14 ahora cubren estrategia de exchange y wallet, comparación de network y fee, stablecoins, DeFi, NFT y evaluación de token projects, bridges, multichain y rutinas de verificación.",
          "La experiencia de roadmap en la portada se mejoró con una estructura más consistente para tarjetas beginner e intermediate.",
          "Los títulos de las tarjetas se acortaron, el espaciado mejoró y se redujeron textos cortados o saltos de línea incómodos.",
          "Las tarjetas de related resources se corrigieron para mostrar label, título, descripción y link por separado.",
          "La marca Coin ProofPath se aplicó de forma más consistente en todo el sitio.",
          "Se reforzaron About / Mission, Partner, Pitch Deck y los puntos de support.",
          "Los enlaces Buy Me a Coffee se conectaron donde correspondía.",
          "Los placeholders de búsqueda, etiquetas de resultados, categorías y sugerencias ahora siguen mejor el idioma seleccionado.",
          "Se amplió la cobertura de UI multilingüe en páginas y etiquetas principales.",
          "Se estabilizaron el visitor display y funciones clave del sitio.",
          "Esta actualización se centra en hacer de Coin ProofPath una guía de seguridad crypto más estructurada y estable desde beginner hasta intermediate."
        ]
      },
      ar:{
        date:"2026-05-22",
        title:"تحديث خارطة الطريق المتوسطة واستقرار الموقع",
        items:[
          "تمت إضافة خارطة الطريق المتوسطة Lessons 8-14 إلى Coin ProofPath.",
          "تغطي Lessons 8-14 الآن استراتيجية exchange وwallet، مقارنة network وfee، stablecoins، DeFi، NFT وتقييم token projects، bridges، multichain وروتينات التحقق.",
          "تم تحسين تجربة roadmap في الصفحة الرئيسية ببنية بطاقات أكثر اتساقًا بين beginner وintermediate.",
          "تم تقصير عناوين البطاقات، وتحسين المسافات، وتقليل النصوص المقطوعة أو فواصل الأسطر المزعجة.",
          "تم إصلاح related resource cards بحيث تظهر label والعنوان والوصف والرابط بشكل منفصل.",
          "تم تطبيق علامة Coin ProofPath بشكل أكثر اتساقًا عبر الموقع.",
          "تم تعزيز صفحات About / Mission وPartner وPitch Deck ومداخل support.",
          "تم ربط روابط Buy Me a Coffee في الأماكن المناسبة.",
          "تم تحسين عناصر البحث مثل النص التلميحي وتصنيفات النتائج والفئات والاقتراحات لتتبع اللغة المختارة.",
          "تم توسيع تغطية واجهة المستخدم متعددة اللغات في الصفحات والملصقات الرئيسية.",
          "تم تثبيت visitor display والوظائف الأساسية للموقع.",
          "يركز هذا التحديث على جعل Coin ProofPath دليلًا أكثر تنظيمًا واستقرارًا لتعلم أمان crypto من beginner إلى intermediate."
        ]
      },
      vi:{
        date:"2026-05-22",
        title:"Cập nhật Lộ trình Trung cấp và Độ ổn định",
        items:[
          "Lộ trình Trung cấp cho Lessons 8-14 đã được thêm vào Coin ProofPath.",
          "Lessons 8-14 hiện bao gồm chiến lược exchange và wallet, so sánh network và fee, stablecoin, DeFi, NFT và đánh giá token project, bridge, multichain và thói quen xác minh.",
          "Trải nghiệm roadmap trên trang chủ đã được cải thiện với cấu trúc thẻ beginner và intermediate nhất quán hơn.",
          "Tiêu đề thẻ roadmap được rút ngắn, khoảng cách được cải thiện và giảm tình trạng chữ bị cắt hoặc xuống dòng khó đọc.",
          "Các thẻ related resources đã được sửa để label, tiêu đề, mô tả và link hiển thị tách biệt.",
          "Thương hiệu Coin ProofPath được áp dụng nhất quán hơn trên toàn site.",
          "Các trang About / Mission, Partner, Pitch Deck và điểm vào support được củng cố.",
          "Liên kết Buy Me a Coffee được kết nối ở vị trí phù hợp.",
          "Placeholder tìm kiếm, nhãn kết quả, danh mục và gợi ý nay bám sát ngôn ngữ đã chọn hơn.",
          "Phạm vi UI đa ngôn ngữ được mở rộng trên các trang và nhãn chính.",
          "Visitor display và các chức năng chính của site đã được ổn định.",
          "Bản cập nhật này tập trung làm cho Coin ProofPath trở thành hướng dẫn an toàn crypto có cấu trúc và ổn định hơn từ beginner đến intermediate."
        ]
      },
      ha:{
        date:"2026-05-22",
        title:"Sabunta Hanyar Koyo ta Tsakiya da Daidaiton Shafi",
        items:[
          "An kara Hanyar Koyo ta Tsakiya don Lessons 8-14 a Coin ProofPath.",
          "Lessons 8-14 yanzu suna rufe dabarun exchange da wallet, kwatanta network da fee, stablecoins, DeFi, NFT da kimanta token projects, bridges, multichain, da hanyoyin tabbatarwa.",
          "An inganta kwarewar roadmap a shafin gida tare da tsarin katunan beginner da intermediate da ya fi daidaito.",
          "An takaita taken katunan roadmap, an inganta tazara, kuma an rage yankewar rubutu ko rabuwar layi mara kyau.",
          "An gyara katunan related resources domin label, title, description, da link su bayyana a rabe.",
          "An daidaita amfani da alamar Coin ProofPath a fadin shafin.",
          "An karfafa About / Mission, Partner, Pitch Deck, da hanyoyin support.",
          "An hada links na Buy Me a Coffee a wuraren da suka dace.",
          "An daidaita placeholder na bincike, alamun sakamako, rukuni, da shawarwari su fi bin harshen da aka zaba.",
          "An fadada tallafin UI na harsuna da yawa a manyan shafuka da labels.",
          "An daidaita visitor display da manyan ayyukan shafin.",
          "Wannan sabuntawar ta mayar da hankali kan sa Coin ProofPath ya zama jagorar tsaron crypto mai tsari da kwanciyar hankali daga beginner zuwa intermediate."
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
        && entry.date !== "2026-05-09"
        && entry.date !== "2026-05-22"
        && entry.date !== "2026-05-31";
    });
    ["2026-04-17","2026-04-18","2026-04-19","2026-04-25","2026-04-27","2026-04-29","2026-05-01","2026-05-03","2026-05-05","2026-05-07","2026-05-09","2026-05-22","2026-05-31"].forEach(function(date){
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
