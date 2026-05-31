(function(){
  if(typeof window === 'undefined' || window.__searchLearningRealSync20260522) return;
  window.__searchLearningRealSync20260522 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var START_INDEX = 7;

  function clone(value){ return value == null ? value : JSON.parse(JSON.stringify(value)); }
  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }
  function normalize(value){
    var text = String(value || '').toLowerCase();
    try{
      if(text.normalize){
        text = /[\uac00-\ud7a3\u3130-\u318f]/.test(text)
          ? text.normalize('NFC')
          : text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      }
    }catch(error){}
    return text.replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }
  function pack(en, ko, th, id, pt, tr, es, ar, vi, ha, br){
    return {en:en, ko:ko, th:th, id:id, pt:pt, br:br || pt, tr:tr, es:es, ar:ar, vi:vi, ha:ha};
  }
  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLangKey(){
    var lang = 'en';
    try{ lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en'; }
    catch(error){ lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en'; }
    return langKey(lang);
  }
  function basePrefix(){
    return (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
  }

  var SEARCH_UI = {
    en:{placeholder:'Type to search...', empty:'Type to search...', noResults:'No results found', representative:'Representative Coin', coinResults:'Coin Results', siteResults:'Site Results', suggested:'Suggested results', keyTerms:'Key terms', openGlossary:'Open glossary', openResources:'Open resources', types:{Lesson:'Lesson', Roadmap:'Roadmap', Beginner:'Beginner', Intermediate:'Intermediate', Glossary:'Glossary', 'Source Library':'Source Library', Source:'Source Library', Checklist:'Checklist', Safety:'Safety', FAQ:'FAQ', Partner:'Partner', 'Pitch Deck':'Pitch Deck', About:'About', Guide:'Guide', 'Update History':'Update History', Open:'Open', View:'View', Continue:'Continue', 'Learn more':'Learn more'}},
    ko:{placeholder:'검색어를 입력하세요...', empty:'검색어를 입력하세요...', noResults:'검색 결과가 없습니다', representative:'대표 코인', coinResults:'코인 결과', siteResults:'사이트 결과', suggested:'추천 결과', keyTerms:'핵심 용어', openGlossary:'용어사전 열기', openResources:'자료 열기', types:{Lesson:'강의', Roadmap:'로드맵', Beginner:'초보자', Intermediate:'중급자', Glossary:'용어사전', 'Source Library':'자료 라이브러리', Source:'자료 라이브러리', Checklist:'체크리스트', Safety:'안전', FAQ:'자주 묻는 질문', Partner:'파트너십', 'Pitch Deck':'피치덱', About:'소개', Guide:'가이드', 'Update History':'업데이트 기록', Open:'열기', View:'보기', Continue:'이어보기', 'Learn more':'더 보기'}},
    th:{placeholder:'ค้นหาใน Coin ProofPath...', empty:'พิมพ์เพื่อค้นหา...', noResults:'ไม่พบผลลัพธ์', representative:'เหรียญตัวแทน', coinResults:'ผลลัพธ์เหรียญ', siteResults:'ผลลัพธ์ในเว็บไซต์', suggested:'ผลลัพธ์แนะนำ', keyTerms:'คำศัพท์สำคัญ', openGlossary:'เปิดอภิธานศัพท์', openResources:'เปิดแหล่งข้อมูล', types:{Lesson:'บทเรียน', Roadmap:'แผนการเรียน', Beginner:'ผู้เริ่มต้น', Intermediate:'ระดับกลาง', Glossary:'อภิธานศัพท์', 'Source Library':'คลังแหล่งข้อมูล', Source:'คลังแหล่งข้อมูล', Checklist:'เช็กลิสต์', Safety:'ความปลอดภัย', FAQ:'คำถามที่พบบ่อย', Partner:'พาร์ตเนอร์', 'Pitch Deck':'Pitch Deck', About:'เกี่ยวกับ', Guide:'คู่มือ', 'Update History':'ประวัติอัปเดต', Open:'เปิด', View:'ดู', Continue:'เรียนต่อ', 'Learn more':'ดูเพิ่มเติม'}},
    id:{placeholder:'Cari di Coin ProofPath...', empty:'Ketik untuk mencari...', noResults:'Tidak ada hasil', representative:'Koin perwakilan', coinResults:'Hasil koin', siteResults:'Hasil situs', suggested:'Hasil disarankan', keyTerms:'Istilah kunci', openGlossary:'Buka glosarium', openResources:'Buka sumber', types:{Lesson:'Pelajaran', Roadmap:'Roadmap', Beginner:'Pemula', Intermediate:'Menengah', Glossary:'Glosarium', 'Source Library':'Pustaka sumber', Source:'Pustaka sumber', Checklist:'Checklist', Safety:'Keamanan', FAQ:'FAQ', Partner:'Kemitraan', 'Pitch Deck':'Pitch Deck', About:'Tentang', Guide:'Panduan', 'Update History':'Riwayat pembaruan', Open:'Buka', View:'Lihat', Continue:'Lanjutkan', 'Learn more':'Pelajari lagi'}},
    pt:{placeholder:'Pesquisar no Coin ProofPath...', empty:'Digite para pesquisar...', noResults:'Nenhum resultado encontrado', representative:'Moeda representativa', coinResults:'Resultados de moedas', siteResults:'Resultados do site', suggested:'Resultados sugeridos', keyTerms:'Termos-chave', openGlossary:'Abrir glossário', openResources:'Abrir recursos', types:{Lesson:'Lição', Roadmap:'Roteiro', Beginner:'Iniciante', Intermediate:'Intermediário', Glossary:'Glossário', 'Source Library':'Biblioteca de fontes', Source:'Biblioteca de fontes', Checklist:'Checklist', Safety:'Segurança', FAQ:'FAQ', Partner:'Parceria', 'Pitch Deck':'Pitch Deck', About:'Sobre', Guide:'Guia', 'Update History':'Histórico de atualizações', Open:'Abrir', View:'Ver', Continue:'Continuar', 'Learn more':'Saiba mais'}},
    br:{placeholder:'Pesquisar no Coin ProofPath...', empty:'Digite para pesquisar...', noResults:'Nenhum resultado encontrado', representative:'Moeda representativa', coinResults:'Resultados de moedas', siteResults:'Resultados do site', suggested:'Resultados sugeridos', keyTerms:'Termos-chave', openGlossary:'Abrir glossário', openResources:'Abrir recursos', types:{Lesson:'Aula', Roadmap:'Roteiro', Beginner:'Iniciante', Intermediate:'Intermediário', Glossary:'Glossário', 'Source Library':'Biblioteca de fontes', Source:'Biblioteca de fontes', Checklist:'Checklist', Safety:'Segurança', FAQ:'FAQ', Partner:'Parceria', 'Pitch Deck':'Pitch Deck', About:'Sobre', Guide:'Guia', 'Update History':'Histórico de atualizações', Open:'Abrir', View:'Ver', Continue:'Continuar', 'Learn more':'Saiba mais'}},
    tr:{placeholder:'Coin ProofPath içinde ara...', empty:'Aramak için yazın...', noResults:'Sonuç bulunamadı', representative:'Temsil coin', coinResults:'Coin sonuçları', siteResults:'Site sonuçları', suggested:'Önerilen sonuçlar', keyTerms:'Temel terimler', openGlossary:'Sözlüğü aç', openResources:'Kaynakları aç', types:{Lesson:'Ders', Roadmap:'Yol haritası', Beginner:'Başlangıç', Intermediate:'Orta seviye', Glossary:'Sözlük', 'Source Library':'Kaynak kütüphanesi', Source:'Kaynak kütüphanesi', Checklist:'Kontrol listesi', Safety:'Güvenlik', FAQ:'SSS', Partner:'Ortaklık', 'Pitch Deck':'Pitch Deck', About:'Hakkında', Guide:'Rehber', 'Update History':'Güncelleme geçmişi', Open:'Aç', View:'Gör', Continue:'Devam et', 'Learn more':'Daha fazla öğren'}},
    es:{placeholder:'Buscar en Coin ProofPath...', empty:'Escribe para buscar...', noResults:'No se encontraron resultados', representative:'Moneda representativa', coinResults:'Resultados de monedas', siteResults:'Resultados del sitio', suggested:'Resultados sugeridos', keyTerms:'Términos clave', openGlossary:'Abrir glosario', openResources:'Abrir recursos', types:{Lesson:'Lección', Roadmap:'Ruta', Beginner:'Principiante', Intermediate:'Intermedio', Glossary:'Glosario', 'Source Library':'Biblioteca de fuentes', Source:'Biblioteca de fuentes', Checklist:'Checklist', Safety:'Seguridad', FAQ:'Preguntas frecuentes', Partner:'Socios', 'Pitch Deck':'Pitch Deck', About:'Acerca de', Guide:'Guía', 'Update History':'Historial de actualizaciones', Open:'Abrir', View:'Ver', Continue:'Continuar', 'Learn more':'Más información'}},
    ar:{placeholder:'ابحث في Coin ProofPath...', empty:'اكتب للبحث...', noResults:'لا توجد نتائج', representative:'عملة ممثلة', coinResults:'نتائج العملات', siteResults:'نتائج الموقع', suggested:'نتائج مقترحة', keyTerms:'مصطلحات أساسية', openGlossary:'افتح القاموس', openResources:'افتح المصادر', types:{Lesson:'درس', Roadmap:'خارطة تعلم', Beginner:'مبتدئ', Intermediate:'متوسط', Glossary:'قاموس', 'Source Library':'مكتبة المصادر', Source:'مكتبة المصادر', Checklist:'قائمة تحقق', Safety:'الأمان', FAQ:'أسئلة شائعة', Partner:'شراكة', 'Pitch Deck':'Pitch Deck', About:'حول', Guide:'دليل', 'Update History':'سجل التحديثات', Open:'فتح', View:'عرض', Continue:'متابعة', 'Learn more':'اعرف المزيد'}},
    vi:{placeholder:'Tìm trong Coin ProofPath...', empty:'Nhập để tìm kiếm...', noResults:'Không tìm thấy kết quả', representative:'Coin đại diện', coinResults:'Kết quả coin', siteResults:'Kết quả trong trang', suggested:'Kết quả gợi ý', keyTerms:'Thuật ngữ chính', openGlossary:'Mở thuật ngữ', openResources:'Mở tài liệu', types:{Lesson:'Bài học', Roadmap:'Lộ trình', Beginner:'Người mới', Intermediate:'Trung cấp', Glossary:'Thuật ngữ', 'Source Library':'Thư viện nguồn', Source:'Thư viện nguồn', Checklist:'Checklist', Safety:'An toàn', FAQ:'FAQ', Partner:'Đối tác', 'Pitch Deck':'Pitch Deck', About:'Giới thiệu', Guide:'Hướng dẫn', 'Update History':'Lịch sử cập nhật', Open:'Mở', View:'Xem', Continue:'Tiếp tục', 'Learn more':'Tìm hiểu thêm'}},
    ha:{placeholder:'Bincika Coin ProofPath...', empty:'Rubuta don bincike...', noResults:'Babu sakamako', representative:'Coin wakili', coinResults:'Sakamakon coin', siteResults:'Sakamakon shafi', suggested:'Shawarar sakamako', keyTerms:'Muhimman kalmomi', openGlossary:'Bude kamus', openResources:'Bude albarkatu', types:{Lesson:'Darasi', Roadmap:'Taswira', Beginner:'Mai farawa', Intermediate:'Matsakaici', Glossary:'Kamus', 'Source Library':'Laburaren tushe', Source:'Laburaren tushe', Checklist:'Checklist', Safety:'Tsaro', FAQ:'FAQ', Partner:'Hadin gwiwa', 'Pitch Deck':'Pitch Deck', About:'Game da mu', Guide:'Jagora', 'Update History':'Tarihin sabuntawa', Open:'Bude', View:'Duba', Continue:'Ci gaba', 'Learn more':'Kara koyo'}}
  };

  var FIELD_UI = {
    en:{Overview:'Overview', Role:'Role', Strengths:'Strengths', Limitations:'Limitations', 'Beginner Note':'Beginner Note', 'Related Lessons':'Related Lessons', 'Related Glossary':'Related Glossary', 'Related FAQ':'Related FAQ', 'Related Sources':'Related Sources', 'Related Safety':'Related Safety'},
    ko:{Overview:'개요', Role:'역할', Strengths:'강점', Limitations:'한계', 'Beginner Note':'초보자 메모', 'Related Lessons':'관련 강의', 'Related Glossary':'관련 용어', 'Related FAQ':'관련 FAQ', 'Related Sources':'관련 자료', 'Related Safety':'관련 안전'},
    th:{Overview:'ภาพรวม', Role:'บทบาท', Strengths:'จุดแข็ง', Limitations:'ข้อจำกัด', 'Beginner Note':'หมายเหตุผู้เริ่มต้น', 'Related Lessons':'บทเรียนที่เกี่ยวข้อง', 'Related Glossary':'คำศัพท์ที่เกี่ยวข้อง', 'Related FAQ':'FAQ ที่เกี่ยวข้อง', 'Related Sources':'แหล่งข้อมูลที่เกี่ยวข้อง', 'Related Safety':'ความปลอดภัยที่เกี่ยวข้อง'},
    id:{Overview:'Ringkasan', Role:'Peran', Strengths:'Kekuatan', Limitations:'Batasan', 'Beginner Note':'Catatan pemula', 'Related Lessons':'Pelajaran terkait', 'Related Glossary':'Glosarium terkait', 'Related FAQ':'FAQ terkait', 'Related Sources':'Sumber terkait', 'Related Safety':'Keamanan terkait'},
    pt:{Overview:'Visão geral', Role:'Papel', Strengths:'Pontos fortes', Limitations:'Limitações', 'Beginner Note':'Nota para iniciantes', 'Related Lessons':'Lições relacionadas', 'Related Glossary':'Glossário relacionado', 'Related FAQ':'FAQ relacionado', 'Related Sources':'Fontes relacionadas', 'Related Safety':'Segurança relacionada'},
    br:{Overview:'Visão geral', Role:'Papel', Strengths:'Pontos fortes', Limitations:'Limitações', 'Beginner Note':'Nota para iniciantes', 'Related Lessons':'Aulas relacionadas', 'Related Glossary':'Glossário relacionado', 'Related FAQ':'FAQ relacionado', 'Related Sources':'Fontes relacionadas', 'Related Safety':'Segurança relacionada'},
    tr:{Overview:'Genel bakış', Role:'Rol', Strengths:'Güçlü yönler', Limitations:'Sınırlamalar', 'Beginner Note':'Başlangıç notu', 'Related Lessons':'İlgili dersler', 'Related Glossary':'İlgili sözlük', 'Related FAQ':'İlgili SSS', 'Related Sources':'İlgili kaynaklar', 'Related Safety':'İlgili güvenlik'},
    es:{Overview:'Resumen', Role:'Rol', Strengths:'Fortalezas', Limitations:'Limitaciones', 'Beginner Note':'Nota para principiantes', 'Related Lessons':'Lecciones relacionadas', 'Related Glossary':'Glosario relacionado', 'Related FAQ':'FAQ relacionado', 'Related Sources':'Fuentes relacionadas', 'Related Safety':'Seguridad relacionada'},
    ar:{Overview:'نظرة عامة', Role:'الدور', Strengths:'نقاط القوة', Limitations:'القيود', 'Beginner Note':'ملاحظة للمبتدئين', 'Related Lessons':'دروس مرتبطة', 'Related Glossary':'مصطلحات مرتبطة', 'Related FAQ':'أسئلة مرتبطة', 'Related Sources':'مصادر مرتبطة', 'Related Safety':'أمان مرتبط'},
    vi:{Overview:'Tổng quan', Role:'Vai trò', Strengths:'Điểm mạnh', Limitations:'Giới hạn', 'Beginner Note':'Ghi chú cho người mới', 'Related Lessons':'Bài học liên quan', 'Related Glossary':'Thuật ngữ liên quan', 'Related FAQ':'FAQ liên quan', 'Related Sources':'Nguồn liên quan', 'Related Safety':'An toàn liên quan'},
    ha:{Overview:'Bayani', Role:'Matsayi', Strengths:'Karfi', Limitations:'Iyakoki', 'Beginner Note':'Bayani ga mai farawa', 'Related Lessons':'Darussa masu alaka', 'Related Glossary':'Kamus mai alaka', 'Related FAQ':'FAQ mai alaka', 'Related Sources':'Tushe masu alaka', 'Related Safety':'Tsaro mai alaka'}
  };

  var SOURCE_SECTION_COPY = {
    en:{title:'Intermediate Resources', desc:'Lesson 8-14 resources for comparison, verification, and risk checks.'},
    ko:{title:'중급자 자료', desc:'8~14강에서 비교, 검증, 위험 확인에 쓰는 자료입니다.'},
    th:{title:'แหล่งข้อมูลระดับกลาง', desc:'แหล่งข้อมูลบทที่ 8-14 สำหรับเปรียบเทียบ ตรวจสอบ และเช็กความเสี่ยง'},
    id:{title:'Sumber menengah', desc:'Sumber Pelajaran 8-14 untuk membandingkan, verifikasi, dan cek risiko.'},
    pt:{title:'Recursos intermediários', desc:'Recursos das lições 8-14 para comparação, verificação e checagem de risco.'},
    br:{title:'Recursos intermediários', desc:'Recursos das aulas 8-14 para comparação, verificação e checagem de risco.'},
    tr:{title:'Orta seviye kaynaklar', desc:'Ders 8-14 için karşılaştırma, doğrulama ve risk kontrol kaynakları.'},
    es:{title:'Recursos intermedios', desc:'Recursos de las lecciones 8-14 para comparar, verificar y revisar riesgos.'},
    ar:{title:'مصادر المستوى المتوسط', desc:'مصادر الدروس 8-14 للمقارنة والتحقق وفحص المخاطر.'},
    vi:{title:'Tài liệu trung cấp', desc:'Tài liệu Bài 8-14 để so sánh, xác minh và kiểm tra rủi ro.'},
    ha:{title:'Albarkatun matsakaici', desc:'Albarkatun Darasi 8-14 don kwatanta, tabbatarwa da duba hadari.'}
  };

  var KEY_TERMS_UI = {
    en:{kicker:'Key terms', title:'Key Terms Before You Start', desc:'Review these key terms before reading the lesson.', open:'View in Glossary', relatedTitle:'Review key terms in Glossary', relatedDesc:'Open the glossary to revisit the key terms for this lesson.'},
    ko:{kicker:'핵심 용어', title:'먼저 알고 가는 핵심 용어', desc:'이 강의를 이해하기 전에 아래 용어를 먼저 가볍게 확인하세요.', open:'용어 보기', relatedTitle:'관련 용어 더 보기', relatedDesc:'용어사전에서 이 강의의 핵심 용어를 다시 확인하세요.'},
    th:{kicker:'คำสำคัญ', title:'คำสำคัญก่อนเริ่ม', desc:'ทบทวนคำสำคัญเหล่านี้ก่อนอ่านบทเรียน', open:'ดูในอภิธานศัพท์', relatedTitle:'ดูคำสำคัญในอภิธานศัพท์', relatedDesc:'เปิดอภิธานศัพท์เพื่อทบทวนคำสำคัญของบทเรียนนี้'},
    id:{kicker:'Istilah kunci', title:'Istilah Kunci Sebelum Mulai', desc:'Tinjau istilah ini sebelum membaca pelajaran.', open:'Lihat di glosarium', relatedTitle:'Tinjau istilah di glosarium', relatedDesc:'Buka glosarium untuk melihat kembali istilah kunci pelajaran ini.'},
    pt:{kicker:'Termos-chave', title:'Termos-chave antes de começar', desc:'Revise estes termos antes de ler a lição.', open:'Ver no glossário', relatedTitle:'Rever termos no glossário', relatedDesc:'Abra o glossário para rever os termos-chave desta lição.'},
    br:{kicker:'Termos-chave', title:'Termos-chave antes de começar', desc:'Revise estes termos antes de ler a aula.', open:'Ver no glossário', relatedTitle:'Rever termos no glossário', relatedDesc:'Abra o glossário para rever os termos-chave desta aula.'},
    tr:{kicker:'Temel terimler', title:'Başlamadan Önce Temel Terimler', desc:'Dersi okumadan önce bu terimleri hızlıca gözden geçirin.', open:'Sözlükte gör', relatedTitle:'Terimleri sözlükte gözden geçir', relatedDesc:'Bu dersin temel terimlerini tekrar görmek için sözlüğü açın.'},
    es:{kicker:'Términos clave', title:'Términos clave antes de empezar', desc:'Revisa estos términos antes de leer la lección.', open:'Ver en glosario', relatedTitle:'Revisar términos en el glosario', relatedDesc:'Abre el glosario para repasar los términos clave de esta lección.'},
    ar:{kicker:'مصطلحات أساسية', title:'مصطلحات أساسية قبل البدء', desc:'راجع هذه المصطلحات قبل قراءة الدرس.', open:'عرض في القاموس', relatedTitle:'راجع المصطلحات في القاموس', relatedDesc:'افتح القاموس لمراجعة مصطلحات هذا الدرس.'},
    vi:{kicker:'Thuật ngữ chính', title:'Thuật ngữ cần biết trước', desc:'Xem nhanh các thuật ngữ này trước khi đọc bài.', open:'Xem trong thuật ngữ', relatedTitle:'Xem lại thuật ngữ', relatedDesc:'Mở trang thuật ngữ để xem lại các khái niệm chính của bài này.'},
    ha:{kicker:'Muhimman kalmomi', title:'Muhimman Kalmomi Kafin Farawa', desc:'Duba wadannan kalmomi kafin karanta darasin.', open:'Duba a kamus', relatedTitle:'Duba kalmomi a kamus', relatedDesc:'Bude kamus don sake duba muhimman kalmomin wannan darasi.'}
  };

  var LESSON_KEY_TERM_IDS = {
    7:['custody','self-custody','hot-wallet','cold-wallet'],
    8:['gas-fee','transaction-fee','wrong-network','test-transfer'],
    9:['peg','reserve','issuer','depeg'],
    10:['wallet-connect','approval','signature','revoke-approval'],
    11:['tokenomics','holder-distribution','red-flag','green-flag'],
    12:['wrapped-token','bridge-risk','finality','cross-chain-transfer'],
    13:['official-source','contract-address','whitepaper','verification-routine']
  };

  var KEY_TERM_FALLBACKS = {
    'custody':{
      terms:pack('Custody','커스터디','การดูแลสินทรัพย์','Kustodi','Custódia','Custody','Custodia','الحفظ','Lưu ký','Custody'),
      defs:pack('Who holds and controls the asset.','자산을 누가 보관하고 통제하는지를 뜻합니다.','ใครถือและควบคุมสินทรัพย์','Siapa yang menyimpan dan mengontrol aset.','Quem guarda e controla o ativo.','Varlığı kimin tuttuğu ve kontrol ettiğidir.','Quién guarda y controla el activo.','من يحتفظ بالأصل ويتحكم به.','Ai nắm giữ và kiểm soát tài sản.','Wanda ke rike da kuma sarrafa kadara.')
    },
    'self-custody':{
      terms:pack('Self-custody','셀프 커스터디','Self-custody','Self-custody','Autocustódia','Self-custody','Autocustodia','الحفظ الذاتي','Tự lưu ký','Self-custody'),
      defs:pack('A wallet setup where the user controls the keys and recovery responsibility.','사용자가 직접 지갑 키와 복구 책임을 관리하는 방식입니다.','รูปแบบวอลเล็ตที่ผู้ใช้ควบคุมคีย์และรับผิดชอบการกู้คืนเอง','Pengaturan wallet saat pengguna mengontrol kunci dan tanggung jawab pemulihan.','Configuração em que o usuário controla as chaves e a recuperação.','Kullanıcının anahtarları ve kurtarma sorumluluğunu yönettiği cüzdan yapısı.','Configuración donde el usuario controla claves y recuperación.','إعداد محفظة يتحكم فيه المستخدم بالمفاتيح ومسؤولية الاسترداد.','Thiết lập ví nơi người dùng kiểm soát khóa và trách nhiệm khôi phục.','Tsarin walat inda mai amfani ke sarrafa makullai da dawo da dama.')
    },
    'gas-fee':{
      terms:pack('Gas fee','가스비','ค่าธรรมเนียมแก๊ส','Biaya gas','Taxa de gas','Gas ücreti','Gas fee','رسوم الغاز','Phí gas','Kudin gas'),
      defs:pack('A network fee paid to process a blockchain transaction.','블록체인 거래를 처리하기 위해 내는 네트워크 수수료입니다.','ค่าธรรมเนียมเครือข่ายเพื่อประมวลผลธุรกรรมบล็อกเชน','Biaya jaringan untuk memproses transaksi blockchain.','Taxa de rede para processar uma transação blockchain.','Blockchain işlemini işlemek için ödenen ağ ücretidir.','Comisión de red para procesar una transacción blockchain.','رسوم شبكة لمعالجة معاملة بلوكشين.','Phí mạng để xử lý giao dịch blockchain.','Kudin hanyar sadarwa don sarrafa muamala ta blockchain.')
    },
    'peg':{
      terms:pack('Peg','페그','Peg','Peg','Peg','Peg','Peg','الربط السعري','Neo giá','Peg'),
      defs:pack('The target value a stablecoin tries to follow, often 1 USD.','스테이블코인이 따라가려는 기준 가치이며 보통 1달러입니다.','มูลค่าเป้าหมายที่ stablecoin พยายามรักษา มักเป็น 1 USD','Nilai target yang diikuti stablecoin, biasanya 1 USD.','Valor-alvo que uma stablecoin tenta seguir, geralmente 1 USD.','Stablecoinin izlemeye çalıştığı hedef değer, genellikle 1 USD.','Valor objetivo que una stablecoin intenta seguir, normalmente 1 USD.','القيمة المستهدفة التي تحاول stablecoin اتباعها، غالبا 1 USD.','Giá trị mục tiêu stablecoin cố bám theo, thường là 1 USD.','Kimar da stablecoin ke kokarin bi, yawanci 1 USD.')
    }
  };

  var TERM_ROWS = [
    {id:'withdrawal', lesson:8, category:'wallet-custody', terms:pack('Withdrawal','출금','ถอน','Penarikan','Saque','Çekim','Retiro','سحب','Rút tiền','Cirewa'), defs:pack('Moving assets out of an exchange or platform to another wallet or address.','거래소나 플랫폼에서 다른 지갑이나 주소로 자산을 내보내는 과정입니다.','การย้ายสินทรัพย์ออกจากแพลตฟอร์มไปยังกระเป๋าหรือที่อยู่อื่น','Memindahkan aset dari exchange atau platform ke wallet/alamat lain.','Mover ativos de uma plataforma para outra carteira ou endereço.','Varlıkları borsadan başka bir cüzdan veya adrese çıkarma işlemidir.','Mover activos desde una plataforma a otra billetera o dirección.','نقل الأصول من منصة إلى محفظة أو عنوان آخر.','Chuyển tài sản khỏi sàn hoặc nền tảng sang ví/địa chỉ khác.','Fitar da kadara daga dandali zuwa wani walat ko adireshi.')},
    {id:'deposit', lesson:8, category:'wallet-custody', terms:pack('Deposit','입금','ฝาก','Deposit','Depósito','Yatırma','Depósito','إيداع','Nạp tiền','Ajiya'), defs:pack('Moving money or crypto into an exchange, wallet, or platform account.','돈이나 코인을 거래소, 지갑, 플랫폼 계정으로 넣는 과정입니다.','การนำเงินหรือคริปโตเข้าแพลตฟอร์ม วอลเล็ต หรือบัญชี','Memasukkan uang atau crypto ke exchange, wallet, atau akun platform.','Enviar dinheiro ou cripto para uma exchange, carteira ou conta.','Para veya kriptoyu borsa, cüzdan ya da platform hesabına aktarma.','Enviar dinero o cripto a una plataforma, billetera o cuenta.','إدخال المال أو الكريبتو إلى منصة أو محفظة أو حساب.','Đưa tiền hoặc crypto vào sàn, ví hoặc tài khoản nền tảng.','Saka kudi ko crypto cikin dandali, walat ko asusu.')},
    {id:'transaction-fee', lesson:9, category:'networks', terms:pack('Transaction fee','거래 수수료','ค่าธรรมเนียมธุรกรรม','Biaya transaksi','Taxa de transação','İşlem ücreti','Comisión de transacción','رسوم المعاملة','Phí giao dịch','Kudin muamala'), defs:pack('A fee paid to process a blockchain transaction or platform action.','블록체인 거래나 플랫폼 동작을 처리하기 위해 내는 비용입니다.','ค่าธรรมเนียมที่จ่ายเพื่อประมวลผลธุรกรรมบนบล็อกเชนหรือแพลตฟอร์ม','Biaya untuk memproses transaksi blockchain atau aksi platform.','Taxa paga para processar uma transação blockchain ou ação da plataforma.','Blockchain işlemi veya platform eylemi için ödenen ücrettir.','Comisión pagada para procesar una transacción blockchain o acción de plataforma.','رسوم تُدفع لمعالجة معاملة بلوكشين أو إجراء داخل منصة.','Phí trả để xử lý giao dịch blockchain hoặc thao tác nền tảng.','Kudin da ake biya don sarrafa muamala ta blockchain ko aikin dandali.')},
    {id:'confirmation-time', lesson:9, category:'networks', terms:pack('Confirmation time','확정 시간','เวลายืนยัน','Waktu konfirmasi','Tempo de confirmação','Onay süresi','Tiempo de confirmación','وقت التأكيد','Thời gian xác nhận','Lokacin tabbatarwa'), defs:pack('The time it usually takes for a transfer to be accepted by the network.','전송이 네트워크에서 확정되기까지 걸리는 예상 시간입니다.','เวลาที่เครือข่ายมักใช้เพื่อยืนยันการโอน','Waktu yang biasanya dibutuhkan jaringan untuk menerima transfer.','Tempo que a rede costuma levar para confirmar uma transferência.','Bir transferin ağ tarafından kabul edilmesi için geçen süredir.','Tiempo que suele tardar la red en aceptar una transferencia.','الوقت المتوقع لقبول التحويل من الشبكة.','Thời gian mạng thường cần để xác nhận giao dịch.','Lokacin da hanyar sadarwa ke bukata don tabbatar da tura kudi.')},
    {id:'counterparty-risk', lesson:10, category:'stablecoins', terms:pack('Counterparty risk','상대방 위험','ความเสี่ยงคู่สัญญา','Risiko pihak lawan','Risco de contraparte','Karşı taraf riski','Riesgo de contraparte','مخاطر الطرف المقابل','Rủi ro đối tác','Hadarin bangaren hulda'), defs:pack('The risk that an issuer, platform, or other party fails to meet its promise.','발행사, 플랫폼, 상대방이 약속을 지키지 못할 위험입니다.','ความเสี่ยงที่ผู้ออก แพลตฟอร์ม หรืออีกฝ่ายไม่ทำตามสัญญา','Risiko penerbit, platform, atau pihak lain gagal memenuhi janji.','Risco de emissor, plataforma ou outra parte não cumprir o prometido.','İhraççı, platform veya diğer tarafın sözünü yerine getirmeme riskidir.','Riesgo de que emisor, plataforma u otra parte no cumpla lo prometido.','خطر عدم وفاء المصدر أو المنصة أو طرف آخر بوعده.','Rủi ro bên phát hành, nền tảng hoặc đối tác không giữ cam kết.','Hadarin cewa mai fitarwa, dandali ko wani bangare bai cika alkawari ba.')},
    {id:'dapp', lesson:11, category:'defi', terms:pack('DApp','DApp','DApp','DApp','DApp','DApp','DApp','DApp','DApp','DApp'), defs:pack('A decentralized app that users often access with a crypto wallet.','크립토 지갑으로 접속해 사용하는 탈중앙 앱입니다.','แอปกระจายศูนย์ที่มักใช้งานผ่านวอลเล็ตคริปโต','Aplikasi terdesentralisasi yang biasanya diakses dengan wallet crypto.','Aplicativo descentralizado acessado com carteira cripto.','Genellikle kripto cüzdanıyla kullanılan merkeziyetsiz uygulama.','Aplicación descentralizada a la que se accede con una billetera cripto.','تطبيق لامركزي يُستخدم غالبا عبر محفظة كريبتو.','Ứng dụng phi tập trung thường truy cập bằng ví crypto.','Manhaja marar tsakiya da ake shiga da walat crypto.')},
    {id:'wallet-connect', lesson:11, category:'defi', terms:pack('Wallet connect','지갑 연결','เชื่อมต่อวอลเล็ต','Koneksi wallet','Conexão de carteira','Cüzdan bağlantısı','Conexión de billetera','اتصال المحفظة','Kết nối ví','Hada walat'), defs:pack('Allowing a site or dApp to see your wallet address and request actions.','사이트나 DApp이 내 지갑 주소를 보고 요청을 보낼 수 있게 연결하는 단계입니다.','การอนุญาตให้ไซต์หรือ DApp เห็นที่อยู่วอลเล็ตและขอทำรายการ','Mengizinkan situs atau DApp melihat alamat wallet dan meminta aksi.','Permitir que site ou DApp veja seu endereço e solicite ações.','Bir site veya DAppin cüzdan adresinizi görmesine ve istek göndermesine izin verme.','Permitir que un sitio o DApp vea tu dirección y solicite acciones.','السماح لموقع أو DApp برؤية عنوان محفظتك وطلب إجراءات.','Cho site hoặc DApp xem địa chỉ ví và gửi yêu cầu thao tác.','Bawa site ko DApp damar ganin adireshin walat da neman aiki.')},
    {id:'liquidity-pool', lesson:11, category:'defi', terms:pack('Liquidity pool','유동성 풀','พูลสภาพคล่อง','Liquidity pool','Pool de liquidez','Likidite havuzu','Pool de liquidez','مجمع سيولة','Nhóm thanh khoản','Rumbun saukin musaya'), defs:pack('A pool of tokens used by DeFi protocols to enable swaps or lending.','스왑이나 대출을 가능하게 하기 위해 DeFi 프로토콜에 모아 둔 토큰 묶음입니다.','กลุ่มโทเคนที่โปรโตคอล DeFi ใช้สำหรับ swap หรือ lending','Kumpulan token yang dipakai protokol DeFi untuk swap atau lending.','Conjunto de tokens usado por protocolos DeFi para swaps ou empréstimos.','DeFi protokollerinin swap veya borç verme için kullandığı token havuzu.','Conjunto de tokens usado por protocolos DeFi para swaps o préstamos.','مجمع توكنات تستخدمه بروتوكولات DeFi للسواب أو الإقراض.','Nhóm token dùng trong DeFi để swap hoặc cho vay.','Tarin token da DeFi ke amfani da shi don musaya ko bada rance.')},
    {id:'revoke-approval', lesson:11, category:'defi', terms:pack('Revoke approval','승인 해제','ยกเลิกการอนุมัติ','Cabut approval','Revogar aprovação','Onayı iptal etme','Revocar aprobación','إلغاء الموافقة','Thu hồi phê duyệt','Soke amincewa'), defs:pack('Removing a token permission that a wallet previously gave to a smart contract.','지갑이 스마트 컨트랙트에 줬던 토큰 사용 권한을 취소하는 것입니다.','การยกเลิกสิทธิ์ใช้โทเคนที่เคยให้ smart contract','Menghapus izin token yang sebelumnya diberikan wallet ke smart contract.','Remover uma permissão de token dada a um smart contract.','Cüzdanın daha önce smart contracta verdiği token iznini kaldırma.','Quitar un permiso de token dado antes a un smart contract.','إزالة إذن توكن سبق أن منحته المحفظة لعقد ذكي.','Gỡ quyền dùng token đã cấp cho smart contract.','Cire izinin token da aka taba ba smart contract.')},
    {id:'holder-distribution', lesson:12, category:'project-review', terms:pack('Holder distribution','보유자 분포','การกระจายผู้ถือ','Distribusi holder','Distribuição de holders','Holder dağılımı','Distribución de holders','توزيع الحائزين','Phân bổ người nắm giữ','Rabuwar masu rike'), defs:pack('How a token supply is spread among wallets, teams, investors, and users.','토큰 물량이 지갑, 팀, 투자자, 사용자에게 어떻게 나뉘어 있는지 보는 지표입니다.','วิธีที่อุปทานโทเคนกระจายอยู่ในวอลเล็ต ทีม นักลงทุน และผู้ใช้','Cara pasokan token tersebar di wallet, tim, investor, dan pengguna.','Como a oferta de token se distribui entre carteiras, equipe, investidores e usuários.','Token arzının cüzdanlar, ekip, yatırımcılar ve kullanıcılar arasında dağılımı.','Cómo se reparte el suministro entre billeteras, equipo, inversores y usuarios.','كيفية توزيع معروض التوكن بين المحافظ والفريق والمستثمرين والمستخدمين.','Cách nguồn cung token phân bổ giữa ví, đội ngũ, nhà đầu tư và người dùng.','Yadda token ya rabu tsakanin walat, kungiya, masu zuba jari da masu amfani.')},
    {id:'community-activity', lesson:12, category:'project-review', terms:pack('Community activity','커뮤니티 활동','กิจกรรมชุมชน','Aktivitas komunitas','Atividade da comunidade','Topluluk etkinliği','Actividad de comunidad','نشاط المجتمع','Hoạt động cộng đồng','Aikin al’umma'), defs:pack('Real discussion, building, support, and user participation around a project.','프로젝트 주변에서 실제 대화, 개발, 지원, 참여가 이어지는지 보는 신호입니다.','สัญญาณว่ามีการพูดคุย สร้าง สนับสนุน และมีผู้ใช้จริง','Diskusi nyata, pembangunan, dukungan, dan partisipasi pengguna di sekitar proyek.','Discussão real, construção, suporte e participação de usuários no projeto.','Bir projede gerçek tartışma, geliştirme, destek ve kullanıcı katılımı.','Discusión real, construcción, soporte y participación de usuarios.','نقاش وبناء ودعم ومشاركة مستخدمين حقيقية حول المشروع.','Trao đổi, xây dựng, hỗ trợ và tham gia thực của cộng đồng dự án.','Tattaunawa, gini, tallafi da halartar masu amfani a aikin.')},
    {id:'wrapped-token', lesson:13, category:'bridges', terms:pack('Wrapped token','래핑 토큰','โทเคน wrapped','Wrapped token','Token embrulhado','Wrapped token','Token envuelto','توكن مغلف','Wrapped token','Wrapped token'), defs:pack('A token that represents an asset from another chain on the current chain.','다른 체인의 자산을 현재 체인에서 표현하도록 만든 토큰입니다.','โทเคนที่แทนสินทรัพย์จากอีกเชนบนเชนปัจจุบัน','Token yang mewakili aset dari chain lain di chain saat ini.','Token que representa um ativo de outra chain na chain atual.','Başka zincirdeki varlığı mevcut zincirde temsil eden token.','Token que representa un activo de otra cadena en la cadena actual.','توكن يمثل أصلا من سلسلة أخرى على السلسلة الحالية.','Token đại diện tài sản từ chain khác trên chain hiện tại.','Token da ke wakiltar kadara daga wata sarka a sarkar yanzu.')},
    {id:'bridge-risk', lesson:13, category:'bridges', terms:pack('Bridge risk','브리지 위험','ความเสี่ยง Bridge','Risiko bridge','Risco de bridge','Bridge riski','Riesgo de bridge','مخاطر الجسر','Rủi ro bridge','Hadarin bridge'), defs:pack('The risk of loss from bridge bugs, wrong chain choices, unsupported assets, or route mistakes.','브리지 버그, 잘못된 체인 선택, 미지원 자산, 경로 실수로 손실이 생길 위험입니다.','ความเสี่ยงจากบั๊ก bridge เลือกเชนผิด สินทรัพย์ไม่รองรับ หรือเส้นทางผิด','Risiko rugi dari bug bridge, salah chain, aset tidak didukung, atau rute salah.','Risco de perda por bug, chain errada, ativo sem suporte ou rota incorreta.','Bridge hatası, yanlış zincir, desteklenmeyen varlık veya rota hatası riski.','Riesgo por errores de bridge, cadena equivocada, activo no soportado o ruta incorrecta.','خطر خسارة بسبب خلل الجسر أو اختيار سلسلة خاطئة أو أصل غير مدعوم.','Rủi ro mất tiền do lỗi bridge, sai chain, tài sản không hỗ trợ hoặc sai tuyến.','Hadarin asara daga kuskuren bridge, sarka mara daidai ko kadara mara tallafi.')},
    {id:'finality', lesson:13, category:'bridges', terms:pack('Finality','최종 확정성','Finality','Finality','Finalidade','Kesinlik','Finalidad','نهائية التأكيد','Tính cuối cùng','Tabbatarwa ta karshe'), defs:pack('The point when a transaction is considered final and very difficult to reverse.','거래가 최종 확정되어 되돌리기 매우 어려워지는 상태입니다.','จุดที่ธุรกรรมถือว่ายืนยันสุดท้ายและย้อนกลับได้ยากมาก','Saat transaksi dianggap final dan sangat sulit dibatalkan.','Momento em que uma transação é considerada final e difícil de reverter.','Bir işlemin kesinleştiği ve geri çevrilmesinin çok zor olduğu nokta.','Punto en que una transacción se considera final y casi irreversible.','النقطة التي تصبح فيها المعاملة نهائية وصعبة الرجوع.','Thời điểm giao dịch được xem là cuối cùng và rất khó đảo ngược.','Lokacin da muamala ta zama tabbatacciya kuma wahalar juyawa.')},
    {id:'cross-chain-transfer', lesson:13, category:'bridges', terms:pack('Cross-chain transfer','크로스체인 전송','การโอนข้ามเชน','Transfer lintas chain','Transferência cross-chain','Zincirler arası transfer','Transferencia cross-chain','تحويل عبر السلاسل','Chuyển cross-chain','Tura tsakanin sarkoki'), defs:pack('Moving an asset or representation of an asset between different blockchain networks.','서로 다른 블록체인 네트워크 사이에서 자산 또는 자산 표현을 옮기는 것입니다.','การย้ายสินทรัพย์หรือสิ่งแทนสินทรัพย์ระหว่างเครือข่ายบล็อกเชน','Memindahkan aset atau representasinya antar jaringan blockchain.','Mover um ativo ou sua representação entre redes blockchain.','Bir varlığı veya temsilini farklı blockchain ağları arasında taşıma.','Mover un activo o representación entre redes blockchain.','نقل أصل أو تمثيله بين شبكات بلوكشين مختلفة.','Chuyển tài sản hoặc bản đại diện giữa các mạng blockchain.','Motsa kadara ko wakilinta tsakanin sarkokin blockchain.')},
    {id:'network-compatibility', lesson:13, category:'bridges', terms:pack('Network compatibility','네트워크 호환성','ความเข้ากันได้ของเครือข่าย','Kompatibilitas jaringan','Compatibilidade de rede','Ağ uyumluluğu','Compatibilidad de red','توافق الشبكة','Tương thích mạng','Daidaiton hanyar sadarwa'), defs:pack('Whether the sending and receiving wallets, chains, and assets support the same network route.','보내는 쪽과 받는 쪽의 지갑, 체인, 자산이 같은 네트워크 경로를 지원하는지 확인하는 개념입니다.','การตรวจว่ากระเป๋า เชน และสินทรัพย์ทั้งสองฝั่งรองรับเครือข่ายเดียวกันหรือไม่','Apakah wallet, chain, dan aset pengirim-penerima mendukung rute jaringan yang sama.','Se carteiras, chains e ativos dos dois lados aceitam a mesma rede.','Gönderici ve alıcı cüzdan, zincir ve varlıkların aynı ağı destekleyip desteklemediği.','Si billeteras, cadenas y activos de ambos lados soportan la misma red.','ما إذا كانت المحافظ والسلاسل والأصول تدعم مسار الشبكة نفسه.','Việc ví, chain và tài sản hai bên có hỗ trợ cùng tuyến mạng hay không.','Ko walat, sarka da kadara na bangarori biyu suna goyon bayan hanya daya.')},
    {id:'whitepaper', lesson:14, category:'verification', terms:pack('Whitepaper','백서','Whitepaper','Whitepaper','Whitepaper','Whitepaper','Whitepaper','الورقة البيضاء','Whitepaper','Whitepaper'), defs:pack('A project document that explains the idea, design, risks, or technical plan.','프로젝트의 아이디어, 구조, 위험, 기술 계획을 설명하는 문서입니다.','เอกสารโครงการที่อธิบายแนวคิด โครงสร้าง ความเสี่ยง หรือแผนเทคนิค','Dokumen proyek yang menjelaskan ide, desain, risiko, atau rencana teknis.','Documento do projeto que explica ideia, desenho, riscos ou plano técnico.','Projenin fikir, tasarım, risk veya teknik planını açıklayan belge.','Documento que explica idea, diseño, riesgos o plan técnico de un proyecto.','وثيقة مشروع تشرح الفكرة أو التصميم أو المخاطر أو الخطة التقنية.','Tài liệu dự án giải thích ý tưởng, thiết kế, rủi ro hoặc kế hoạch kỹ thuật.','Takardar aiki da ke bayanin raayi, tsari, hadari ko shirin fasaha.')},
    {id:'documentation', lesson:14, category:'verification', terms:pack('Documentation','문서','เอกสารประกอบ','Dokumentasi','Documentação','Dokümantasyon','Documentación','التوثيق','Tài liệu','Takardu'), defs:pack('Official or maintained material that explains how a project, tool, or protocol works.','프로젝트, 도구, 프로토콜의 작동 방식을 설명하는 공식 또는 관리 문서입니다.','เอกสารทางการหรือเอกสารที่ดูแลต่อเนื่องเพื่ออธิบายการทำงานของโปรเจกต์หรือเครื่องมือ','Materi resmi atau terawat yang menjelaskan cara kerja proyek, alat, atau protokol.','Material oficial ou mantido que explica como projeto, ferramenta ou protocolo funciona.','Proje, araç veya protokolün nasıl çalıştığını açıklayan resmi ya da güncel belge.','Material oficial o mantenido que explica cómo funciona un proyecto, herramienta o protocolo.','مواد رسمية أو محدثة تشرح كيف يعمل مشروع أو أداة أو بروتوكول.','Tài liệu chính thức hoặc được duy trì giải thích cách dự án/công cụ hoạt động.','Takardu na hukuma ko da ake sabuntawa da ke bayyana yadda aiki ko kayan aiki ke aiki.')},
    {id:'impersonation', lesson:14, category:'verification', terms:pack('Impersonation','사칭','การแอบอ้างตัวตน','Impersonasi','Impersonação','Taklit', 'Suplantación','انتحال الهوية','Giả mạo danh tính','Kwaikwayo'), defs:pack('Pretending to be a real project, support agent, founder, or official account.','진짜 프로젝트, 고객지원, 창업자, 공식 계정인 것처럼 속이는 행위입니다.','การแสร้งเป็นโปรเจกต์ ทีมซัพพอร์ต ผู้ก่อตั้ง หรือบัญชีทางการจริง','Berpura-pura menjadi proyek, support, pendiri, atau akun resmi asli.','Fingir ser projeto, suporte, fundador ou conta oficial real.','Gerçek proje, destek, kurucu veya resmi hesap gibi davranma.','Hacerse pasar por proyecto, soporte, fundador o cuenta oficial real.','التظاهر بأنه مشروع أو دعم أو مؤسس أو حساب رسمي حقيقي.','Giả làm dự án, hỗ trợ, nhà sáng lập hoặc tài khoản chính thức.','Kwaikwayon aiki, tallafi, mai kafa ko asusun hukuma na gaskiya.')},
    {id:'verification-routine', lesson:14, category:'verification', terms:pack('Verification routine','검증 루틴','รูทีนการตรวจสอบ','Rutinitas verifikasi','Rotina de verificação','Doğrulama rutini','Rutina de verificación','روتين التحقق','Quy trình xác minh','Tsarin tabbatarwa'), defs:pack('A repeatable order for checking sources, domains, contracts, warnings, and wallet requests.','출처, 도메인, 컨트랙트, 경고, 지갑 요청을 반복 가능한 순서로 확인하는 습관입니다.','ลำดับตรวจซ้ำได้สำหรับแหล่งที่มา โดเมน สัญญา คำเตือน และคำขอวอลเล็ต','Urutan berulang untuk memeriksa sumber, domain, kontrak, peringatan, dan permintaan wallet.','Ordem repetível para checar fontes, domínios, contratos, alertas e pedidos da carteira.','Kaynak, domain, kontrat, uyarı ve cüzdan isteklerini sırayla kontrol etme alışkanlığı.','Orden repetible para revisar fuentes, dominios, contratos, alertas y solicitudes de billetera.','ترتيب متكرر لفحص المصادر والنطاقات والعقود والتحذيرات وطلبات المحفظة.','Thứ tự lặp lại để kiểm tra nguồn, domain, hợp đồng, cảnh báo và yêu cầu ví.','Tsari mai maimaituwa don duba tushe, domain, kwangila, gargadi da bukatar walat.')}
  ];

  var SOURCE_ROWS = [
    {id:'exchange-wallet-checklist', lesson:8, terms:['Custody','Self-custody','Hot wallet','Cold wallet'], titles:pack('Exchange vs Wallet Checklist','거래소와 지갑 비교 체크리스트','เช็กลิสต์ Exchange vs Wallet','Checklist Exchange vs Wallet','Checklist Exchange vs Wallet','Borsa vs Cüzdan kontrol listesi','Checklist Exchange vs Wallet','قائمة تحقق المنصة مقابل المحفظة','Checklist Exchange vs Wallet','Jerin duba Musaya vs Walat'), descs:pack('Compare trading convenience, custody, recovery responsibility, and long-term storage.','거래 편의성, 보관 주체, 복구 책임, 장기 보관 기준을 비교합니다.','เปรียบเทียบความสะดวก การดูแลสินทรัพย์ ความรับผิดชอบกู้คืน และการเก็บระยะยาว','Bandingkan kemudahan trading, custody, tanggung jawab pemulihan, dan penyimpanan jangka panjang.','Compare conveniência de trading, custódia, recuperação e armazenamento de longo prazo.','Alım satım kolaylığı, saklama, kurtarma sorumluluğu ve uzun vadeli saklamayı karşılaştırın.','Compara comodidad, custodia, recuperación y almacenamiento a largo plazo.','قارن سهولة التداول والحفظ ومسؤولية الاسترداد والتخزين الطويل.','So sánh giao dịch, lưu ký, trách nhiệm khôi phục và lưu trữ dài hạn.','Kwatanta saukin ciniki, rikon kadara, dawowa da ajiyar dogon lokaci.')},
    {id:'network-fee-guide', lesson:9, terms:['Gas fee','Transaction fee','Wrong network','Test transfer'], titles:pack('Network and Fee Comparison Guide','네트워크와 수수료 비교 가이드','คู่มือเปรียบเทียบเครือข่ายและค่าธรรมเนียม','Panduan jaringan dan biaya','Guia de comparação de rede e taxa','Ağ ve ücret karşılaştırma rehberi','Guía de red y tarifas','دليل مقارنة الشبكة والرسوم','Hướng dẫn so sánh mạng và phí','Jagorar hanyar sadarwa da kudi'), descs:pack('Check network support, fees, confirmation time, and small test transfer before sending.','전송 전 네트워크 지원, 수수료, 확정 시간, 소액 테스트를 확인합니다.','ตรวจเครือข่าย ค่าธรรมเนียม เวลายืนยัน และโอนทดสอบก่อนส่ง','Cek dukungan jaringan, biaya, waktu konfirmasi, dan transfer uji kecil.','Confira rede, taxas, confirmação e teste pequeno antes de enviar.','Göndermeden önce ağ desteği, ücret, onay süresi ve küçük testi kontrol edin.','Revisa red, comisión, confirmación y prueba pequeña antes de enviar.','تحقق من الشبكة والرسوم ووقت التأكيد وتحويل اختبار صغير.','Kiểm tra mạng, phí, thời gian xác nhận và chuyển thử nhỏ.','Duba hanyar sadarwa, kudi, lokaci da gwaji kafin aikawa.')},
    {id:'stablecoin-risk-notes', lesson:10, terms:['Stablecoin','Reserve','Issuer','Depeg','Counterparty risk'], titles:pack('Stablecoin Risk Notes','스테이블코인 위험 메모','บันทึกความเสี่ยง Stablecoin','Catatan risiko stablecoin','Notas de risco de stablecoin','Stablecoin risk notları','Notas de riesgo de stablecoin','ملاحظات مخاطر stablecoin','Ghi chú rủi ro stablecoin','Bayanan hadarin stablecoin'), descs:pack('Review issuer, reserves, liquidity, depeg, and counterparty risk before relying on a stablecoin.','스테이블코인을 쓰기 전 발행사, 준비금, 유동성, 디페그, 상대방 위험을 확인합니다.','ตรวจผู้ออก เงินสำรอง สภาพคล่อง depeg และความเสี่ยงคู่สัญญา','Tinjau penerbit, cadangan, likuiditas, depeg, dan risiko pihak lawan.','Revise emissor, reservas, liquidez, depeg e risco de contraparte.','İhraççı, rezerv, likidite, depeg ve karşı taraf riskini inceleyin.','Revisa emisor, reservas, liquidez, depeg y contraparte.','راجع المصدر والاحتياطيات والسيولة وفك الربط ومخاطر الطرف المقابل.','Xem bên phát hành, dự trữ, thanh khoản, depeg và rủi ro đối tác.','Duba mai fitarwa, ajiyar tallafi, saukin musaya, depeg da hadarin bangare.')},
    {id:'defi-approval-checklist', lesson:11, terms:['Wallet connect','Approval','Signature','Slippage','Revoke approval'], titles:pack('DeFi Approval Safety Checklist','DeFi 승인 안전 체크리스트','เช็กลิสต์ความปลอดภัยการอนุมัติ DeFi','Checklist keamanan approval DeFi','Checklist de segurança de aprovação DeFi','DeFi onay güvenliği kontrol listesi','Checklist de seguridad de aprobación DeFi','قائمة أمان موافقات DeFi','Checklist an toàn phê duyệt DeFi','Jerin duba amincin amincewar DeFi'), descs:pack('Read wallet prompts, spender, amount, signature requests, and revoke old approvals.','지갑 요청, 권한 대상, 금액, 서명 내용을 읽고 오래된 승인을 해제합니다.','อ่านคำขอวอลเล็ต ผู้ใช้สิทธิ์ จำนวน ลายเซ็น และยกเลิกสิทธิ์เก่า','Baca prompt wallet, spender, jumlah, tanda tangan, dan cabut approval lama.','Leia prompts, spender, valor, assinatura e revogue aprovações antigas.','Cüzdan isteklerini, spenderı, tutarı, imzayı okuyun ve eski onayları kaldırın.','Lee prompts, spender, importe, firma y revoca permisos antiguos.','اقرأ طلبات المحفظة والمنفق والمبلغ والتوقيع وألغ الموافقات القديمة.','Đọc yêu cầu ví, spender, số tiền, chữ ký và thu hồi quyền cũ.','Karanta bukatar walat, spender, adadi, sa hannu kuma soke tsoffin izini.')},
    {id:'project-review-checklist', lesson:12, terms:['Tokenomics','Holder distribution','Community activity','Red flag','Green flag'], titles:pack('Project Review Checklist','프로젝트 검토 체크리스트','เช็กลิสต์ตรวจโปรเจกต์','Checklist review proyek','Checklist de revisão de projeto','Proje inceleme kontrol listesi','Checklist de revisión de proyecto','قائمة مراجعة المشروع','Checklist đánh giá dự án','Jerin duba aiki'), descs:pack('Check tokenomics, holder distribution, community activity, liquidity, and warning signs.','토크노믹스, 보유자 분포, 커뮤니티 활동, 유동성, 위험 신호를 확인합니다.','ตรวจ tokenomics การกระจายผู้ถือ กิจกรรมชุมชน สภาพคล่อง และสัญญาณเตือน','Cek tokenomics, distribusi holder, aktivitas komunitas, likuiditas, dan sinyal bahaya.','Confira tokenomics, holders, comunidade, liquidez e sinais de alerta.','Tokenomics, holder dağılımı, topluluk, likidite ve uyarı işaretlerini kontrol edin.','Revisa tokenomics, holders, comunidad, liquidez y señales de alerta.','تحقق من اقتصاديات التوكن وتوزيع الحائزين ونشاط المجتمع والسيولة والتحذيرات.','Kiểm tra tokenomics, holder, cộng đồng, thanh khoản và dấu hiệu cảnh báo.','Duba tokenomics, rabuwar masu rike, al’umma, saukin musaya da alamomin hadari.')},
    {id:'bridge-safety-guide', lesson:13, terms:['Source chain','Destination chain','Wrapped token','Bridge risk','Cross-chain transfer'], titles:pack('Bridge Safety Guide','브리지 안전 가이드','คู่มือความปลอดภัย Bridge','Panduan keamanan bridge','Guia de segurança de bridge','Bridge güvenlik rehberi','Guía de seguridad de bridge','دليل أمان الجسور','Hướng dẫn an toàn bridge','Jagorar tsaron bridge'), descs:pack('Confirm source chain, destination chain, wrapped token, route, and bridge risk before moving.','이동 전 출발 체인, 목적지 체인, 래핑 토큰, 경로, 브리지 위험을 확인합니다.','ยืนยันเชนต้นทาง ปลายทาง wrapped token เส้นทาง และความเสี่ยง bridge','Pastikan source chain, destination chain, wrapped token, rute, dan risiko bridge.','Confirme chain origem, destino, wrapped token, rota e risco de bridge.','Kaynak zincir, hedef zincir, wrapped token, rota ve bridge riskini doğrulayın.','Confirma cadena origen, destino, token envuelto, ruta y riesgo de bridge.','أكد سلسلة المصدر والوجهة والتوكن المغلف والمسار ومخاطر الجسر.','Xác nhận chain nguồn, chain đích, wrapped token, tuyến và rủi ro bridge.','Tabbatar da sarkar farawa, karba, wrapped token, hanya da hadarin bridge.')},
    {id:'verification-routine-guide', lesson:14, terms:['Official source','Contract address','Whitepaper','Documentation','Cross-check'], titles:pack('Verification Routine Guide','정보 검증 루틴 가이드','คู่มือรูทีนการตรวจสอบ','Panduan rutinitas verifikasi','Guia de rotina de verificação','Doğrulama rutini rehberi','Guía de rutina de verificación','دليل روتين التحقق','Hướng dẫn quy trình xác minh','Jagorar tsarin tabbatarwa'), descs:pack('Verify official sources, domains, contract addresses, documents, and warnings before acting.','행동 전 공식 출처, 도메인, 컨트랙트 주소, 문서, 경고를 확인합니다.','ตรวจแหล่งทางการ โดเมน contract address เอกสาร และคำเตือนก่อนทำ','Verifikasi sumber resmi, domain, alamat kontrak, dokumen, dan peringatan.','Verifique fontes oficiais, domínios, contrato, documentos e alertas.','Resmi kaynak, domain, kontrat adresi, belgeler ve uyarıları doğrulayın.','Verifica fuentes oficiales, dominios, contrato, documentos y alertas.','تحقق من المصادر الرسمية والنطاقات وعناوين العقود والوثائق والتحذيرات.','Xác minh nguồn chính thức, domain, địa chỉ hợp đồng, tài liệu và cảnh báo.','Tabbatar da tushe na hukuma, domain, adireshin kwangila, takardu da gargadi.')}
  ];

  var summary = {existingTerms:[], addedTerms:[], existingSources:[], addedSources:[], relatedOnly:[]};

  function existingGlossarySet(lang){
    var set = {};
    function add(name){ var key = normalize(name); if(key) set[key] = true; }
    try{ (typeof getGlossaryItems === 'function' ? getGlossaryItems() : []).forEach(function(item){ add(item && item[0]); }); }catch(error){}
    if(window.__UNIFIED_GLOSSARY && window.__UNIFIED_GLOSSARY[lang]) window.__UNIFIED_GLOSSARY[lang].forEach(function(item){ add(item && item[0]); });
    ['Self-custody wallet','Self-custody','Gas fee','Peg','Explorer','Custody','Bridge','Wallet','Exchange','Network','Stablecoin','DeFi','NFT','Liquidity','Approval','Signature','Slippage','Tokenomics','Red flag','Green flag','Official source','Contract address','Cross-check'].forEach(add);
    return set;
  }

  function addGlossaryTerms(){
    window.__UNIFIED_GLOSSARY = window.__UNIFIED_GLOSSARY || {};
    LANGS.forEach(function(lang){
      var base = window.__UNIFIED_GLOSSARY[lang] || window.__UNIFIED_GLOSSARY.en || [];
      window.__UNIFIED_GLOSSARY[lang] = clone(base);
      var set = existingGlossarySet(lang);
      TERM_ROWS.forEach(function(row){
        var term = row.terms[lang] || row.terms.en;
        var key = normalize(term);
        if(!key || set[key]){
          if(lang === 'en' && summary.existingTerms.indexOf(row.terms.en) === -1) summary.existingTerms.push(row.terms.en);
          return;
        }
        window.__UNIFIED_GLOSSARY[lang].push([term, row.defs[lang] || row.defs.en, {id:row.id, category:row.category, level:'intermediate', relatedLessons:[row.lesson]}]);
        set[key] = true;
        if(lang === 'en') summary.addedTerms.push(row.terms.en);
      });
      if(typeof glossaryData !== 'undefined') glossaryData[lang] = window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1], item[2]]; });
      if(typeof glossaryOverrides !== 'undefined') glossaryOverrides[lang] = window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1], item[2]]; });
    });
    var previous = window.getGlossaryItems || (typeof getGlossaryItems === 'function' ? getGlossaryItems : null);
    if(!previous || !previous.__realSyncWrapped){
      var wrapped = function(){
        var lang = currentLangKey();
        if(window.__UNIFIED_GLOSSARY && window.__UNIFIED_GLOSSARY[lang]) return window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1], item[2]]; });
        return previous ? previous.apply(this, arguments) : [];
      };
      wrapped.__realSyncWrapped = true;
      window.getGlossaryItems = wrapped;
      try{ getGlossaryItems = wrapped; }catch(error){}
    }
  }

  function sourceArray(row, lang){
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    return ['intermediate','Coin ProofPath', row.titles[lang] || row.titles.en, row.descs[lang] || row.descs.en, '', ui.types.Lesson + ' ' + row.lesson, ui.keyTerms + ': ' + row.terms.join(', ')];
  }
  function ensureSourceCategory(lang){
    if(typeof sourceLibraryCats === 'undefined') return;
    if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = clone(sourceLibraryCats.en || []);
    var copy = SOURCE_SECTION_COPY[lang] || SOURCE_SECTION_COPY.en;
    var label = copy.title;
    if(!sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate'; })) sourceLibraryCats[lang].push({key:'intermediate', label:label});
  }
  function addToSourceStore(store, lang, item){
    if(!store) return false;
    if(!store[lang]) store[lang] = clone(store.en || []);
    var titleKey = normalize(item[2]);
    var exists = store[lang].some(function(existing){ return existing && normalize(existing[2] || existing[1]) === titleKey; });
    if(exists) return false;
    store[lang].push(item);
    return true;
  }
  function addSourceRows(){
    if(typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(lang){
      ensureSourceCategory(lang);
      SOURCE_ROWS.forEach(function(row){
        var item = sourceArray(row, lang);
        var added = addToSourceStore(sourceLibrary, lang, item);
        if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides[lang]) && sourceOverrides[lang].length) addToSourceStore(sourceOverrides, lang, clone(item));
        if(lang === 'en'){
          if(added) summary.addedSources.push(row.titles.en);
          else if(summary.existingSources.indexOf(row.titles.en) === -1) summary.existingSources.push(row.titles.en);
        }
      });
    });
    var previous = window.getSourceItems || (typeof getSourceItems === 'function' ? getSourceItems : null);
    if(!previous || !previous.__realSyncWrapped){
      var wrapped = function(){
        var lang = currentLangKey();
        return (typeof sourceOverrides !== 'undefined' && sourceOverrides[lang] && sourceOverrides[lang].length) ? sourceOverrides[lang] : ((typeof sourceLibrary !== 'undefined' && sourceLibrary[lang]) || (previous ? previous.apply(this, arguments) : []));
      };
      wrapped.__realSyncWrapped = true;
      window.getSourceItems = wrapped;
      try{ getSourceItems = wrapped; }catch(error){}
    }
  }

  function sourceCard(row, lang){
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    return '<a class="source-library-item lesson-guide-source-card" href="' + esc(basePrefix() + 'sources/') + '" data-intermediate-source-real="' + esc(row.id) + '">'
      + '<div class="source-library-meta">' + esc(lang === 'ko' ? '중급자 자료' : ui.types.Intermediate) + '</div>'
      + '<div class="src-publisher-row"><span class="src-publisher">&#9654; Coin ProofPath</span><span class="src-section-tag">' + esc(ui.types.Lesson + ' ' + row.lesson) + '</span></div>'
      + '<h3>' + esc(row.titles[lang] || row.titles.en) + '</h3>'
      + '<p>' + esc(row.descs[lang] || row.descs.en) + '</p>'
      + '<div class="src-why"><strong>' + esc(ui.keyTerms) + ':</strong> ' + esc(row.terms.join(', ')) + '</div>'
      + '</a>';
  }
  function ensureSourceSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var lang = currentLangKey();
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    var copy = SOURCE_SECTION_COPY[lang] || SOURCE_SECTION_COPY.en;
    var html = '<section class="src-section-block is-action-track" data-intermediate-sources-real>'
      + '<div class="src-section-heading">' + esc(copy.title) + '<span class="src-section-count">' + SOURCE_ROWS.length + '</span></div>'
      + '<p class="src-group-desc">' + esc(copy.desc) + '</p>'
      + '<div class="source-library-grid">' + SOURCE_ROWS.map(function(row){ return sourceCard(row, lang); }).join('') + '</div></section>';
    var existing = panel.querySelector('[data-intermediate-sources-real]');
    if(existing) existing.outerHTML = html;
    else panel.insertAdjacentHTML('beforeend', html);
  }

  function resolveGlossaryBody(body){
    try{
      if(typeof body === 'function' && typeof t === 'function') return body(t);
    }catch(error){}
    return body == null ? '' : String(body);
  }
  function allTermRows(){
    var map = {};
    (window.__intermediateGlossaryTermRows || []).concat(TERM_ROWS || []).forEach(function(row){
      if(row && row.id) map[row.id] = row;
    });
    return Object.keys(map).map(function(id){ return map[id]; });
  }
  function findTermRow(id){
    return allTermRows().filter(function(row){ return row && row.id === id; })[0] || null;
  }
  function findGlossaryItemByTerm(id, row, fallback, lang){
    var wanted = [id];
    if(row && row.terms){
      LANGS.forEach(function(code){ if(row.terms[code]) wanted.push(row.terms[code]); });
    }
    if(fallback && fallback.terms){
      LANGS.forEach(function(code){ if(fallback.terms[code]) wanted.push(fallback.terms[code]); });
    }
    var normalized = wanted.map(normalize).filter(Boolean);
    var items = [];
    try{ items = typeof getGlossaryItems === 'function' ? (getGlossaryItems() || []) : []; }catch(error){}
    return items.filter(function(item){
      var meta = item && item[2] && typeof item[2] === 'object' ? item[2] : null;
      if(meta && meta.id === id) return true;
      return normalized.indexOf(normalize(item && item[0])) !== -1;
    })[0] || null;
  }
  function keyTermData(id, lang){
    var row = findTermRow(id);
    var fallback = KEY_TERM_FALLBACKS[id];
    if(row){
      return {
        id:id,
        term:(row.terms && (row.terms[lang] || row.terms.en)) || id,
        def:(row.defs && (row.defs[lang] || row.defs.en)) || '',
        fromGlossary:true
      };
    }
    var item = findGlossaryItemByTerm(id, row, fallback, lang);
    if(item){
      return {
        id:id,
        term:item[0] || (row && row.terms && (row.terms[lang] || row.terms.en)) || (fallback && fallback.terms && (fallback.terms[lang] || fallback.terms.en)) || id,
        def:resolveGlossaryBody(item[1]) || (row && row.defs && (row.defs[lang] || row.defs.en)) || (fallback && fallback.defs && (fallback.defs[lang] || fallback.defs.en)) || '',
        fromGlossary:true
      };
    }
    if(fallback){
      return {id:id, term:(fallback.terms && (fallback.terms[lang] || fallback.terms.en)) || id, def:(fallback.defs && (fallback.defs[lang] || fallback.defs.en)) || '', fromGlossary:false};
    }
    return null;
  }
  function renderKeyTermCard(term, ui){
    return '<a class="lesson-key-term-card" href="' + esc(basePrefix() + 'glossary/') + '" data-lesson-key-term-card="' + esc(term.id) + '">'
      + '<strong>' + esc(term.term) + '</strong>'
      + '<p>' + esc(term.def) + '</p>'
      + '<span>' + esc(ui.open) + '</span>'
      + '</a>';
  }
  function renderLessonKeyTermsSection(index){
    var ids = LESSON_KEY_TERM_IDS[index] || null;
    if(!ids || !ids.length) return '';
    var lang = currentLangKey();
    var ui = KEY_TERMS_UI[lang] || KEY_TERMS_UI.en;
    var terms = ids.map(function(id){ return keyTermData(id, lang); }).filter(function(item){ return item && item.term && item.def; });
    if(!terms.length) return '';
    return '<section class="lesson-key-terms" data-lesson-key-terms="' + esc(String(index + 1)) + '">'
      + '<div class="lesson-key-terms-head">'
      + '<span class="section-kicker">' + esc(ui.kicker) + '</span>'
      + '<h2>' + esc(ui.title) + '</h2>'
      + '<p>' + esc(ui.desc) + '</p>'
      + '</div>'
      + '<div class="lesson-key-term-grid">' + terms.map(function(term){ return renderKeyTermCard(term, ui); }).join('') + '</div>'
      + '</section>';
  }
  function patchLessonKeyTerms(html, index){
    if(!html || index < START_INDEX || index >= START_INDEX + SOURCE_ROWS.length || html.indexOf('data-lesson-key-terms="' + (index + 1) + '"') !== -1) return html;
    var section = renderLessonKeyTermsSection(index);
    if(!section) return html;
    var calloutStart = html.indexOf('<div class="callout info"');
    if(calloutStart !== -1){
      var calloutEnd = html.indexOf('</div>', calloutStart);
      if(calloutEnd !== -1) return html.slice(0, calloutEnd + 6) + section + html.slice(calloutEnd + 6);
    }
    var bodyMarker = '<div class="lesson-body">';
    var bodyPos = html.indexOf(bodyMarker);
    return bodyPos === -1 ? section + html : html.slice(0, bodyPos + bodyMarker.length) + section + html.slice(bodyPos + bodyMarker.length);
  }

  function relatedTermCard(row, lang){
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    var keyUi = KEY_TERMS_UI[lang] || KEY_TERMS_UI.en;
    return '<a class="source-card related-resource-card" href="' + esc(basePrefix() + 'glossary/') + '" data-intermediate-term-card="' + esc(row.id) + '">'
      + '<span class="related-card-label">' + esc(ui.keyTerms) + '</span>'
      + '<strong class="related-card-title">' + esc(keyUi.relatedTitle) + '</strong>'
      + '<span class="related-card-desc">' + esc(keyUi.relatedDesc) + '</span>'
      + '<span class="related-card-link">' + esc(ui.openGlossary) + '</span>'
      + '</a>';
  }
  function relatedSourceCard(row, lang){
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    return '<a class="source-card related-resource-card" href="' + esc(basePrefix() + 'sources/') + '" data-intermediate-source-card="' + esc(row.id) + '">'
      + '<span class="related-card-label">' + esc(lang === 'ko' ? '중급자 자료' : ui.types.Intermediate) + '</span>'
      + '<strong class="related-card-title">' + esc(row.titles[lang] || row.titles.en) + '</strong>'
      + '<span class="related-card-desc">' + esc(row.descs[lang] || row.descs.en) + '</span>'
      + '<span class="related-card-link">' + esc(ui.openResources) + '</span>'
      + '</a>';
  }
  function patchLessonRelated(html, index){
    if(index < START_INDEX || index >= START_INDEX + SOURCE_ROWS.length || !html || html.indexOf('lesson-system-related') === -1) return html;
    var row = SOURCE_ROWS[index - START_INDEX];
    var lang = currentLangKey();
    var insert = '';
    if(html.indexOf('data-intermediate-term-card="' + row.id + '"') === -1) insert += relatedTermCard(row, lang);
    if(html.indexOf('data-intermediate-source-card="' + row.id + '"') === -1 && html.indexOf('data-intermediate-learning-resource="' + row.id + '"') === -1) insert += relatedSourceCard(row, lang);
    if(!insert) return html;
    var marker = '</div></div></section>';
    var pos = html.indexOf(marker, html.indexOf('lesson-system-related'));
    return pos === -1 ? html : html.slice(0, pos) + insert + html.slice(pos);
  }
  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__realSyncLessonWrapped) return;
    var wrapped = function(index){
      var html = previous.apply(this, arguments) || '';
      html = patchLessonKeyTerms(html, index);
      return patchLessonRelated(html, index);
    };
    wrapped.__realSyncLessonWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(error){}
  }

  function localizeSearchDom(){
    var lang = currentLangKey();
    var ui = SEARCH_UI[lang] || SEARCH_UI.en;
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    if(input){
      input.placeholder = ui.empty;
      input.setAttribute('aria-label', ui.empty);
      input.setAttribute('title', ui.empty);
    }
    if(results) results.setAttribute('data-empty', ui.empty);
    var sectionMap = {'Representative Coin':ui.representative, 'Coin Results':ui.coinResults, 'Site Results':ui.siteResults, 'Suggested results':ui.suggested};
    Array.prototype.forEach.call(document.querySelectorAll('#searchResults .search-section-divider'), function(node){
      var text = String(node.textContent || '').replace(/\s+/g,' ').trim();
      if(sectionMap[text]) node.textContent = sectionMap[text];
    });
    var labelMap = {};
    Object.keys(ui.types).forEach(function(key){ labelMap[key] = ui.types[key]; });
    var fieldLabels = FIELD_UI[lang] || FIELD_UI.en;
    Array.prototype.forEach.call(document.querySelectorAll('#searchResults .search-result-empty'), function(node){ node.textContent = ui.noResults; });
    Array.prototype.forEach.call(document.querySelectorAll('#searchResults .result-type-label,#searchResults .search-result-meta,#searchResults .field-label,#searchResults .related-title,#searchResults .rep-coin-kicker'), function(node){
      var text = String(node.textContent || '').replace(/\s+/g,' ').trim();
      if(fieldLabels[text]) node.textContent = fieldLabels[text];
      else if(sectionMap[text]) node.textContent = sectionMap[text];
      else if(labelMap[text]) node.textContent = labelMap[text];
    });
  }

  window.getSearchEmptyText = function(){ return (SEARCH_UI[currentLangKey()] || SEARCH_UI.en).empty; };
  window.getSearchNoResultsText = function(){ return (SEARCH_UI[currentLangKey()] || SEARCH_UI.en).noResults; };

  function wrapFunction(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__realSearchLearningWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      after();
      return result;
    };
    wrapped.__realSearchLearningWrapped = true;
    window[name] = wrapped;
    try{ if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped; if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped; if(name === 'renderSources') renderSources = wrapped; if(name === 'showPage') showPage = wrapped; if(name === 'setLang') setLang = wrapped; }catch(error){}
  }

  addGlossaryTerms();
  addSourceRows();
  patchRenderLesson();
  wrapFunction('renderSearchAutocompleteFinal', localizeSearchDom);
  wrapFunction('renderPatchedSearchResults', localizeSearchDom);
  wrapFunction('renderSources', function(){ setTimeout(ensureSourceSection, 0); });
  wrapFunction('showPage', function(){ localizeSearchDom(); setTimeout(ensureSourceSection, 0); });
  wrapFunction('setLang', function(){ localizeSearchDom(); setTimeout(ensureSourceSection, 0); });
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ localizeSearchDom(); ensureSourceSection(); }, {once:true});
  } else {
    localizeSearchDom();
    ensureSourceSection();
  }

  window.debugSearchLearningRealSync = function(){
    var lang = currentLangKey();
    var glossaryItems = typeof getGlossaryItems === 'function' ? (getGlossaryItems() || []) : [];
    var sourceItems = typeof getSourceItems === 'function' ? (getSourceItems() || []) : [];
    var duplicate = function(items, pick){
      var seen = {}, dupes = [];
      (items || []).forEach(function(item){
        var key = normalize(pick(item));
        if(!key) return;
        if(seen[key] && dupes.indexOf(pick(item)) === -1) dupes.push(pick(item));
        seen[key] = true;
      });
      return dupes;
    };
    return {
      currentLocale: lang,
      searchPlaceholder: document.getElementById('searchInput') ? document.getElementById('searchInput').placeholder : null,
      addedTerms: summary.addedTerms.slice(),
      skippedExistingTerms: summary.existingTerms.slice(),
      addedSources: summary.addedSources.slice(),
      skippedExistingSources: summary.existingSources.slice(),
      glossaryCount: glossaryItems.length,
      sourceCount: sourceItems.length,
      duplicateGlossaryTerms: duplicate(glossaryItems, function(item){ return item && item[0]; }),
      duplicateSourceTitles: duplicate(sourceItems, function(item){ return item && (item[2] || item[1]); }),
      lessonRelatedResources: SOURCE_ROWS.map(function(row){ return {lesson:row.lesson, source:row.titles.en, terms:row.terms}; })
    };
  };
  window.__searchLearningRealSyncTermRows = TERM_ROWS;
  window.__searchLearningRealSyncSourceRows = SOURCE_ROWS;
})();
