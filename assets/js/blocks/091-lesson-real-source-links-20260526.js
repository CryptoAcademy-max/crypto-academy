(function(){
  if(typeof window === 'undefined' || window.__lessonRealSourceLinks20260526) return;
  window.__lessonRealSourceLinks20260526 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var START_INDEX = 7;
  var END_INDEX = 13;

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
  function re(value){ return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function pack(en, ko, th, id, pt, br, tr, es, ar, vi, ha){
    return {en:en, ko:ko, th:th, id:id, pt:pt, br:br, tr:tr, es:es, ar:ar, vi:vi, ha:ha};
  }
  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLangKey(){
    var lang = 'en';
    try{
      lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(error){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    return langKey(lang);
  }
  function pick(map, lang){
    return (map && (map[lang] || map.en)) || '';
  }

  var UI = {
    en:{section:'Reference sources', desc:'Official docs, education articles, and security analysis connected to this lesson.', open:'Open source', lesson:'Lesson', why:'Why this matters', note:'External sources are provided for learning and verification. Coin ProofPath does not endorse investment decisions or specific services.'},
    ko:{section:'참고 출처', desc:'이 강의와 연결된 공식 문서, 교육 자료, 보안 분석 자료입니다.', open:'출처 열기', lesson:'강', why:'중요한 이유', note:'외부 출처는 학습과 검증을 돕기 위해 제공됩니다. Coin ProofPath는 투자 결정이나 특정 서비스 이용을 권유하지 않습니다.'},
    th:{section:'แหล่งอ้างอิง', desc:'เอกสารทางการ บทความเรียนรู้ และบทวิเคราะห์ความปลอดภัยที่เกี่ยวข้องกับบทนี้', open:'เปิดแหล่งอ้างอิง', lesson:'บทเรียน', why:'เหตุผลที่สำคัญ', note:'แหล่งภายนอกมีไว้เพื่อการเรียนรู้และตรวจสอบ Coin ProofPath ไม่ได้แนะนำการลงทุนหรือบริการใดโดยเฉพาะ'},
    id:{section:'Sumber rujukan', desc:'Dokumen resmi, artikel edukasi, dan analisis keamanan yang terhubung dengan pelajaran ini.', open:'Buka sumber', lesson:'Pelajaran', why:'Mengapa penting', note:'Sumber eksternal disediakan untuk belajar dan verifikasi. Coin ProofPath tidak menganjurkan keputusan investasi atau layanan tertentu.'},
    pt:{section:'Fontes de referência', desc:'Documentos oficiais, artigos educativos e análises de segurança ligados a esta lição.', open:'Abrir fonte', lesson:'Lição', why:'Por que importa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.'},
    br:{section:'Fontes de referência', desc:'Documentos oficiais, artigos educativos e análises de segurança ligados a esta aula.', open:'Abrir fonte', lesson:'Aula', why:'Por que importa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.'},
    tr:{section:'Referans kaynaklar', desc:'Bu dersle bağlantılı resmi dokümanlar, eğitim yazıları ve güvenlik analizleri.', open:'Kaynağı aç', lesson:'Ders', why:'Neden önemli', note:'Dış kaynaklar öğrenme ve doğrulama için verilir. Coin ProofPath yatırım kararlarını veya belirli hizmetleri önermez.'},
    es:{section:'Fuentes de referencia', desc:'Documentos oficiales, artículos educativos y análisis de seguridad conectados con esta lección.', open:'Abrir fuente', lesson:'Lección', why:'Por qué importa', note:'Las fuentes externas se ofrecen para aprendizaje y verificación. Coin ProofPath no recomienda inversiones ni servicios específicos.'},
    ar:{section:'مصادر مرجعية', desc:'وثائق رسمية ومقالات تعليمية وتحليلات أمنية مرتبطة بهذا الدرس.', open:'فتح المصدر', lesson:'الدرس', why:'سبب الأهمية', note:'تقدم المصادر الخارجية للتعلم والتحقق. لا تقدم Coin ProofPath توصيات استثمارية أو تأييدا لخدمات محددة.'},
    vi:{section:'Nguồn tham khảo', desc:'Tài liệu chính thức, bài học và phân tích bảo mật liên quan đến bài này.', open:'Mở nguồn', lesson:'Bài', why:'Vì sao quan trọng', note:'Nguồn bên ngoài dùng cho học tập và xác minh. Coin ProofPath không khuyến nghị đầu tư hoặc dịch vụ cụ thể.'},
    ha:{section:'Tushen duba', desc:'Takardu na hukuma, makalolin ilimi, da binciken tsaro da suka shafi wannan darasi.', open:'Bude tushe', lesson:'Darasi', why:'Dalilin muhimmanci', note:'Ana bayar da tushe na waje don koyo da tabbatarwa. Coin ProofPath ba ya ba da shawarar zuba jari ko wani takamaiman sabis.'}
  };

  var TYPE_LABELS = {
    article:pack('Education article','교육 자료','บทความเรียนรู้','Artikel edukasi','Artigo educativo','Artigo educativo','Eğitim yazısı','Artículo educativo','مقال تعليمي','Bài viết học tập','Makala ta ilimi'),
    'official-docs':pack('Official docs','공식 문서','เอกสารทางการ','Dokumen resmi','Documentos oficiais','Documentos oficiais','Resmi doküman','Documentos oficiales','وثائق رسمية','Tài liệu chính thức','Takardu na hukuma'),
    'official-source':pack('Official source','공식 출처','แหล่งทางการ','Sumber resmi','Fonte oficial','Fonte oficial','Resmi kaynak','Fuente oficial','مصدر رسمي','Nguồn chính thức','Tushe na hukuma'),
    'support-docs':pack('Support docs','지원 문서','เอกสารช่วยเหลือ','Dokumen dukungan','Documentos de suporte','Documentos de suporte','Destek dokümanı','Documentos de soporte','وثائق دعم','Tài liệu hỗ trợ','Takardun tallafi'),
    'tool-docs':pack('Tool guide','도구 가이드','คู่มือเครื่องมือ','Panduan alat','Guia de ferramenta','Guia de ferramenta','Araç rehberi','Guía de herramienta','دليل أداة','Hướng dẫn công cụ','Jagorar kayan aiki'),
    'security-analysis':pack('Security analysis','보안 분석','บทวิเคราะห์ความปลอดภัย','Analisis keamanan','Análise de segurança','Análise de segurança','Güvenlik analizi','Análisis de seguridad','تحليل أمني','Phân tích bảo mật','Binciken tsaro'),
    'security-guide':pack('Security guide','보안 가이드','คู่มือความปลอดภัย','Panduan keamanan','Guia de segurança','Guia de segurança','Güvenlik rehberi','Guía de seguridad','دليل أمني','Hướng dẫn bảo mật','Jagorar tsaro'),
    'transparency-page':pack('Transparency page','투명성 페이지','หน้าความโปร่งใส','Halaman transparansi','Página de transparência','Página de transparência','Şeffaflık sayfası','Página de transparencia','صفحة الشفافية','Trang minh bạch','Shafin gaskiya')
  };

  var TOPICS = {
    walletTypes:pack('Crypto Wallet Types Explained','크립토 지갑 유형 설명','ประเภทกระเป๋าคริปโต','Jenis wallet crypto','Tipos de carteira cripto','Tipos de carteira cripto','Kripto cüzdan türleri','Tipos de billeteras cripto','شرح أنواع محافظ الكريبتو','Các loại ví crypto','Nauikan walat crypto'),
    custodyCompare:pack('Custodial vs Non-Custodial Wallets','수탁형 지갑과 비수탁형 지갑','Custodial vs Non-Custodial Wallets','Custodial vs Non-Custodial Wallets','Carteiras custodiais e não custodiais','Carteiras custodiais e não custodiais','Custodial ve non-custodial cüzdanlar','Billeteras custodiales y no custodiales','محافظ حافظة وغير حافظة','Ví custodial và non-custodial','Custodial da non-custodial wallet'),
    gasDocs:pack('Gas and Fees','가스와 수수료','Gas และค่าธรรมเนียม','Gas dan biaya','Gas e taxas','Gas e taxas','Gas ve ücretler','Gas y comisiones','الغاز والرسوم','Gas và phí','Gas da kudade'),
    gasFees:pack('What Are Gas Fees?','가스 수수료란 무엇인가?','Gas fee คืออะไร?','Apa itu gas fee?','O que são gas fees?','O que são gas fees?','Gas ücretleri nedir?','¿Qué son las gas fees?','ما رسوم الغاز؟','Gas fee là gì?','Menene gas fees?'),
    tether:pack('Transparency','투명성 페이지','ความโปร่งใส','Transparansi','Transparência','Transparência','Şeffaflık','Transparencia','الشفافية','Minh bạch','Gaskiya'),
    usdc:pack('USDC','USDC 공식 자료','USDC','USDC','USDC','USDC','USDC','USDC','USDC','USDC','USDC'),
    dai:pack('Dai and Maker Protocol','DAI와 Maker Protocol','Dai และ Maker Protocol','Dai dan Maker Protocol','Dai e Maker Protocol','Dai e Maker Protocol','Dai ve Maker Protocol','Dai y Maker Protocol','Dai وبروتوكول Maker','Dai và Maker Protocol','Dai da Maker Protocol'),
    ledgerApprovals:pack('Ethereum Token Approvals Explained','이더리움 토큰 승인 설명','อธิบายการอนุมัติ token บน Ethereum','Penjelasan approval token Ethereum','Aprovações de token Ethereum','Aprovações de token Ethereum','Ethereum token onayları','Aprobaciones de token en Ethereum','شرح موافقات توكن Ethereum','Giải thích phê duyệt token Ethereum','Bayanin amincewar token Ethereum'),
    revoke:pack('Token Approval Management','토큰 승인 관리','การจัดการ token approval','Manajemen token approval','Gestão de aprovações de token','Gestão de aprovações de token','Token onay yönetimi','Gestión de aprobaciones de token','إدارة موافقات التوكن','Quản lý phê duyệt token','Gudanar da amincewar token'),
    walletDrainers:pack('Token Approvals and Wallet Drainers','토큰 승인과 지갑 드레이너','Token approvals และ wallet drainers','Token approvals dan wallet drainers','Aprovações de token e wallet drainers','Aprovações de token e wallet drainers','Token onayları ve wallet drainers','Aprobaciones de token y wallet drainers','موافقات التوكن وسارقات المحافظ','Phê duyệt token và wallet drainer','Amincewar token da wallet drainers'),
    tokenomics:pack('What Is Tokenomics?','토크노믹스란 무엇인가?','Tokenomics คืออะไร?','Apa itu tokenomics?','O que é tokenomics?','O que é tokenomics?','Tokenomics nedir?','¿Qué es tokenomics?','ما اقتصاديات التوكن؟','Tokenomics là gì?','Menene tokenomics?'),
    bridges:pack('Bridges','브리지','Bridges','Bridges','Bridges','Bridges','Bridges','Bridges','الجسور','Bridges','Bridges'),
    addressPoisoning:pack('Anatomy of an Address Poisoning Scam','주소 오염 사기 분석','วิเคราะห์ address poisoning scam','Analisis address poisoning scam','Anatomia de golpe de address poisoning','Anatomia de golpe de address poisoning','Address poisoning scam analizi','Anatomía de una estafa address poisoning','تحليل احتيال تلويث العنوان','Phân tích lừa đảo address poisoning','Binciken address poisoning scam'),
    cryptoScam:pack('What Is a Crypto Scam?','크립토 사기란 무엇인가?','Crypto scam คืออะไร?','Apa itu crypto scam?','O que é golpe cripto?','O que é golpe cripto?','Crypto scam nedir?','¿Qué es una estafa cripto?','ما احتيال الكريبتو؟','Crypto scam là gì?','Menene crypto scam?'),
    impersonation:pack('Preventing Chainalysis Impersonation Scams','사칭 사기 예방 안내','ป้องกัน scam แอบอ้าง Chainalysis','Mencegah scam impersonasi Chainalysis','Prevenção de golpes de impersonação Chainalysis','Prevenção de golpes de impersonação Chainalysis','Chainalysis taklit dolandırıcılığını önleme','Prevención de suplantación de Chainalysis','منع احتيالات انتحال Chainalysis','Phòng tránh lừa đảo mạo danh Chainalysis','Rigakafin zambar kwaikwayon Chainalysis')
  };

  var DESCS = {
    walletTypes:pack('Explains crypto wallet types, private keys, seed phrases, custodial wallets, and non-custodial wallets.','크립토 지갑 유형, 개인키, 시드 문구, 수탁형 지갑과 비수탁형 지갑의 차이를 설명하는 자료입니다.','อธิบายประเภทกระเป๋า private key, seed phrase และความต่างของ custodial/non-custodial wallet','Menjelaskan jenis wallet, private key, seed phrase, custodial dan non-custodial wallet.','Explica tipos de carteira, chave privada, seed phrase e carteiras custodiais/não custodiais.','Explica tipos de carteira, chave privada, seed phrase e carteiras custodiais/não custodiais.','Cüzdan türleri, özel anahtar, seed phrase ve saklamalı/saklamasız cüzdanları açıklar.','Explica tipos de billeteras, clave privada, seed phrase y billeteras custodiales/no custodiales.','يشرح أنواع المحافظ والمفتاح الخاص وعبارة الاسترداد والمحافظ الحافظة وغير الحافظة.','Giải thích loại ví, private key, seed phrase, ví custodial và non-custodial.','Yana bayyana nauikan walat, private key, seed phrase, custodial da non-custodial wallet.'),
    custodyCompare:pack('Compares custodial and non-custodial wallets, including control, convenience, and responsibility.','수탁형 지갑과 비수탁형 지갑의 통제권, 편의성, 책임 차이를 비교하는 자료입니다.','เปรียบเทียบ custodial และ non-custodial wallet ทั้งการควบคุม ความสะดวก และความรับผิดชอบ','Membandingkan wallet custodial dan non-custodial dari kontrol, kemudahan, dan tanggung jawab.','Compara carteiras custodiais e não custodiais, incluindo controle, conveniência e responsabilidade.','Compara carteiras custodiais e não custodiais, incluindo controle, conveniência e responsabilidade.','Kontrol, kolaylık ve sorumluluk açısından saklamalı ve saklamasız cüzdanları karşılaştırır.','Compara control, comodidad y responsabilidad en billeteras custodiales y no custodiales.','يقارن بين المحافظ الحافظة وغير الحافظة من حيث التحكم والسهولة والمسؤولية.','So sánh ví custodial và non-custodial về quyền kiểm soát, tiện lợi và trách nhiệm.','Yana kwatanta custodial da non-custodial wallet ta iko, sauki da alhaki.'),
    gasDocs:pack('Official Ethereum documentation explaining gas, transaction fees, and how Ethereum operations are paid for.','가스, 트랜잭션 수수료, 이더리움 작업 비용 구조를 설명하는 공식 문서입니다.','เอกสารทางการของ Ethereum ที่อธิบาย gas ค่าธรรมเนียมธุรกรรม และค่าใช้จ่ายของการทำงาน','Dokumen resmi Ethereum tentang gas, biaya transaksi, dan cara biaya operasi dibayar.','Documentação oficial sobre gas, taxas de transação e custos de operações Ethereum.','Documentação oficial sobre gas, taxas de transação e custos de operações Ethereum.','Gas, işlem ücretleri ve Ethereum işlemlerinin nasıl ödendiğini açıklayan resmi doküman.','Documentación oficial sobre gas, comisiones y costes de operaciones Ethereum.','وثائق Ethereum الرسمية عن الغاز ورسوم المعاملات وتكلفة العمليات.','Tài liệu chính thức về gas, phí giao dịch và chi phí hoạt động Ethereum.','Takardar Ethereum ta hukuma game da gas, kudin muamala, da biyan ayyuka.'),
    gasFees:pack('Beginner-friendly explanation of gas fees and why users pay them when using blockchain networks.','블록체인 네트워크를 사용할 때 가스 수수료를 내는 이유를 초보자도 이해하기 쉽게 설명한 자료입니다.','อธิบาย gas fee แบบเข้าใจง่ายและเหตุผลที่ผู้ใช้ต้องจ่ายเมื่อใช้เครือข่าย blockchain','Penjelasan mudah tentang gas fee dan alasan pengguna membayarnya saat memakai blockchain.','Explicação simples sobre gas fees e por que usuários pagam ao usar redes blockchain.','Explicação simples sobre gas fees e por que usuários pagam ao usar redes blockchain.','Gas ücretlerinin ne olduğu ve blockchain kullanımında neden ödendiğini basitçe açıklar.','Explicación sencilla de gas fees y por qué se pagan al usar redes blockchain.','شرح مبسط لرسوم الغاز وسبب دفعها عند استخدام شبكات البلوكشين.','Giải thích dễ hiểu về gas fee và lý do người dùng phải trả khi dùng blockchain.','Bayani mai sauki kan gas fees da dalilin biyan su a blockchain.'),
    tether:pack('Official Tether transparency page showing USDT supply and reserve-related information.','USDT 공급량과 준비금 관련 정보를 확인할 수 있는 Tether 공식 투명성 페이지입니다.','หน้าโปร่งใสทางการของ Tether สำหรับดูข้อมูล supply และ reserve ของ USDT','Halaman resmi Tether untuk melihat suplai USDT dan informasi cadangan.','Página oficial da Tether com oferta de USDT e informações de reserva.','Página oficial da Tether com oferta de USDT e informações de reserva.','USDT arzı ve rezerv bilgilerini gösteren resmi Tether şeffaflık sayfası.','Página oficial de Tether con suministro de USDT e información de reservas.','صفحة Tether الرسمية للشفافية حول عرض USDT ومعلومات الاحتياطيات.','Trang minh bạch chính thức của Tether về cung USDT và dự trữ.','Shafin Tether na hukuma da ke nuna arzikin USDT da bayanan ajiyar tallafi.'),
    usdc:pack('Official USDC page explaining USDC issuance, reserves, and regulated digital dollar positioning.','USDC의 발행 구조, 준비금, 규제 기반 디지털 달러 설명을 제공하는 공식 자료입니다.','หน้าอย่างเป็นทางการเกี่ยวกับการออก USDC, reserve และบทบาท digital dollar ที่อยู่ภายใต้กฎเกณฑ์','Halaman resmi tentang penerbitan USDC, cadangan, dan posisi dolar digital teregulasi.','Página oficial sobre emissão, reservas e posicionamento regulado do USDC.','Página oficial sobre emissão, reservas e posicionamento regulado do USDC.','USDC ihracı, rezervleri ve düzenlemeli dijital dolar konumunu açıklayan resmi sayfa.','Página oficial sobre emisión de USDC, reservas y dólar digital regulado.','صفحة رسمية تشرح إصدار USDC والاحتياطيات ووضع الدولار الرقمي المنظم.','Trang chính thức về phát hành USDC, dự trữ và vị thế đô la số được quản lý.','Shafin hukuma game da fitowar USDC, ajiyar tallafi da matsayin dollar na dijital.'),
    dai:pack('Official MakerDAO site introducing Dai and the Maker Protocol behind decentralized stablecoin infrastructure.','탈중앙 스테이블코인 DAI와 Maker Protocol 구조를 이해할 수 있는 공식 사이트입니다.','เว็บไซต์ทางการที่แนะนำ Dai และ Maker Protocol ในโครงสร้าง stablecoin แบบกระจายศูนย์','Situs resmi yang memperkenalkan Dai dan Maker Protocol untuk stablecoin terdesentralisasi.','Site oficial que apresenta Dai e Maker Protocol por trás de stablecoin descentralizada.','Site oficial que apresenta Dai e Maker Protocol por trás de stablecoin descentralizada.','Dai ve merkeziyetsiz stablecoin altyapısındaki Maker Protocol yapısını tanıtan resmi site.','Sitio oficial sobre Dai y Maker Protocol en infraestructura stablecoin descentralizada.','موقع رسمي يشرح Dai وبروتوكول Maker وراء بنية stablecoin اللامركزية.','Trang chính thức giới thiệu Dai và Maker Protocol trong stablecoin phi tập trung.','Shafin hukuma da ke gabatar da Dai da Maker Protocol na stablecoin mara tsakiya.'),
    ledgerApprovals:pack('Explains token approvals and why limiting or revoking unused approvals can reduce risk.','토큰 승인 개념과 사용하지 않는 승인을 제한하거나 해제해야 하는 이유를 설명하는 자료입니다.','อธิบาย token approval และเหตุผลที่ควรจำกัดหรือ revoke approval ที่ไม่ใช้แล้วเพื่อลดความเสี่ยง','Menjelaskan token approval dan alasan membatasi atau mencabut approval yang tidak dipakai.','Explica aprovações de token e por que limitar ou revogar aprovações reduz risco.','Explica aprovações de token e por que limitar ou revogar aprovações reduz risco.','Token onaylarını ve kullanılmayan onayları sınırlama veya kaldırmanın risk azaltmasını açıklar.','Explica aprobaciones de token y por qué limitar o revocar permisos reduce riesgos.','يشرح موافقات التوكن ولماذا يقلل تحديدها أو إلغاؤها من المخاطر.','Giải thích phê duyệt token và vì sao nên giới hạn hoặc thu hồi phê duyệt không dùng.','Yana bayyana amincewar token da dalilin takaita ko soke amincewa don rage hadari.'),
    revoke:pack('A tool and guide for checking and revoking token approvals to reduce approval-based risks.','토큰 승인을 확인하고 해제하여 승인 기반 위험을 줄이는 데 도움을 주는 도구와 안내 자료입니다.','เครื่องมือและคู่มือสำหรับตรวจสอบและ revoke token approval เพื่อลดความเสี่ยง','Alat dan panduan untuk memeriksa serta mencabut token approval.','Ferramenta e guia para verificar e revogar aprovações de token.','Ferramenta e guia para verificar e revogar aprovações de token.','Token onaylarını kontrol etmek ve kaldırmak için araç ve rehber.','Herramienta y guía para revisar y revocar aprobaciones de token.','أداة ودليل لفحص وإلغاء موافقات التوكن لتقليل المخاطر.','Công cụ và hướng dẫn kiểm tra, thu hồi phê duyệt token.','Kayan aiki da jagora don duba da soke amincewar token.'),
    walletDrainers:pack('Explains token approvals, wallet drainers, and practical ways to reduce approval-related risks.','토큰 승인, 지갑 드레이너 위험, 승인 관련 위험을 줄이는 방법을 설명하는 자료입니다.','อธิบาย token approval, wallet drainer และวิธีลดความเสี่ยงจาก approval','Menjelaskan token approval, wallet drainer, dan cara mengurangi risikonya.','Explica aprovações de token, wallet drainers e formas práticas de reduzir riscos.','Explica aprovações de token, wallet drainers e formas práticas de reduzir riscos.','Token onayları, wallet drainer riskleri ve pratik azaltma yollarını açıklar.','Explica aprobaciones, wallet drainers y cómo reducir riesgos.','يشرح موافقات التوكن وسارقات المحافظ وطرق تقليل المخاطر.','Giải thích phê duyệt token, wallet drainer và cách giảm rủi ro.','Yana bayyana amincewar token, wallet drainers, da rage hadari.'),
    tokenomics:pack('Explains tokenomics and why supply, distribution, and incentives matter when evaluating crypto projects.','프로젝트를 평가할 때 공급량, 분배, 인센티브 구조가 왜 중요한지 설명하는 토크노믹스 자료입니다.','อธิบาย tokenomics และเหตุผลที่ supply, distribution และ incentive สำคัญต่อการประเมินโปรเจกต์','Menjelaskan tokenomics serta pentingnya suplai, distribusi, dan insentif.','Explica tokenomics e por que oferta, distribuição e incentivos importam.','Explica tokenomics e por que oferta, distribuição e incentivos importam.','Tokenomics, arz, dağıtım ve teşviklerin neden önemli olduğunu açıklar.','Explica tokenomics y por qué importan oferta, distribución e incentivos.','يشرح اقتصاديات التوكن وأهمية العرض والتوزيع والحوافز.','Giải thích tokenomics và vì sao cung, phân bổ, khuyến khích quan trọng.','Yana bayyana tokenomics da muhimmancin arz, rabawa da kwadaitarwa.'),
    bridges:pack('Official Ethereum documentation explaining blockchain bridges and how assets or messages move across chains.','블록체인 브리지와 체인 간 자산 또는 메시지 이동 개념을 설명하는 Ethereum.org 공식 문서입니다.','เอกสารทางการของ Ethereum ที่อธิบาย bridge และการย้ายสินทรัพย์หรือข้อความข้าม chain','Dokumen resmi Ethereum tentang bridge dan perpindahan aset/pesan antar-chain.','Documentação oficial sobre bridges e movimentação de ativos ou mensagens entre chains.','Documentação oficial sobre bridges e movimentação de ativos ou mensagens entre chains.','Blockchain bridge ve varlık/mesajların zincirler arasında taşınmasını açıklar.','Documentación oficial sobre bridges y movimiento de activos o mensajes entre cadenas.','وثائق Ethereum الرسمية عن الجسور ونقل الأصول أو الرسائل بين السلاسل.','Tài liệu chính thức về bridge và chuyển tài sản/thông điệp giữa chain.','Takardar Ethereum ta hukuma game da bridges da motsa kadara ko sako tsakanin sarkoki.'),
    addressPoisoning:pack('Analysis of address poisoning scams and how users can be tricked by visually similar wallet addresses.','주소가 비슷해 보이도록 속이는 주소 오염 사기 사례와 위험 구조를 분석한 자료입니다.','วิเคราะห์ address poisoning scam และวิธีที่ผู้ใช้อาจถูกหลอกด้วย address ที่ดูคล้ายกัน','Analisis scam address poisoning dan alamat wallet yang tampak mirip.','Análise de golpes com endereços visualmente parecidos.','Análise de golpes com endereços visualmente parecidos.','Benzer görünen cüzdan adresleriyle yapılan address poisoning dolandırıcılığını analiz eder.','Análisis de estafas con direcciones visualmente similares.','تحليل لاحتيالات تلويث العنوان والعناوين المتشابهة بصريا.','Phân tích lừa đảo address poisoning bằng địa chỉ ví trông giống nhau.','Bincike kan zamba ta adireshin walat masu kama.'),
    cryptoScam:pack('Explains common crypto scam types and how scams use crypto as payment, investment lure, or credential theft method.','크립토 사기 유형과 사기가 결제, 투자 유도, 자격 증명 탈취 방식으로 악용되는 구조를 설명하는 자료입니다.','อธิบายประเภท crypto scam และการใช้คริปโตเพื่อชำระเงิน ล่อการลงทุน หรือขโมยข้อมูล','Menjelaskan jenis scam crypto dan pola pembayaran, investasi palsu, atau pencurian kredensial.','Explica tipos comuns de golpes e uso de cripto para pagamento, isca ou roubo.','Explica tipos comuns de golpes e uso de cripto para pagamento, isca ou roubo.','Kripto dolandırıcılık türlerini ve ödeme, yatırım tuzağı, kimlik hırsızlığı kullanımını açıklar.','Explica tipos de estafa cripto y robo de credenciales.','يشرح أنواع احتيال الكريبتو واستخدامها للدفع أو الإغراء أو سرقة البيانات.','Giải thích các kiểu scam crypto và cách dùng để dụ đầu tư hoặc đánh cắp thông tin.','Yana bayyana nauikan scam crypto da yadda ake amfani da su don biyan kudi ko sata.'),
    impersonation:pack('Explains impersonation scam precautions and how users should respond to suspicious claims.','사칭 사기를 조심하는 방법과 의심스러운 연락을 받았을 때의 대응 방식을 안내하는 자료입니다.','อธิบายการป้องกัน scam แอบอ้างและวิธีตอบสนองต่อการอ้างสิทธิ์ที่น่าสงสัย','Menjelaskan pencegahan scam impersonasi dan respons terhadap klaim mencurigakan.','Explica cuidados contra impersonação e respostas a contatos suspeitos.','Explica cuidados contra impersonação e respostas a contatos suspeitos.','Taklit dolandırıcılığına karşı önlemler ve şüpheli iddialara yanıtı açıklar.','Explica precauciones ante suplantación y reclamos sospechosos.','يوضح احتياطات احتيال الانتحال وكيفية التعامل مع الادعاءات المشبوهة.','Hướng dẫn phòng mạo danh và xử lý liên hệ đáng ngờ.','Yana bayyana kariya daga zambar kwaikwayo da martani ga sakonni masu shakku.')
  };

  var ROWS = [
    {id:'source-binance-crypto-wallet-types', lesson:8, type:'article', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/crypto-wallet-types-explained', topic:'walletTypes', category:pack('Wallet & custody','지갑과 보관','กระเป๋าและการเก็บรักษา','Wallet & custody','Carteira e custódia','Carteira e custódia','Cüzdan ve saklama','Billetera y custodia','المحفظة والحفظ','Ví và lưu ký','Walat da ajiya')},
    {id:'source-binance-custodial-vs-noncustodial', lesson:8, type:'article', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/custodial-vs-non-custodial-wallets-what-s-the-difference', topic:'custodyCompare', category:pack('Wallet & custody','지갑과 보관','กระเป๋าและการเก็บรักษา','Wallet & custody','Carteira e custódia','Carteira e custódia','Cüzdan ve saklama','Billetera y custodia','المحفظة والحفظ','Ví và lưu ký','Walat da ajiya')},
    {id:'source-ethereum-gas-docs', lesson:9, type:'official-docs', publisher:'Ethereum.org', url:'https://ethereum.org/developers/docs/gas/', topic:'gasDocs', category:pack('Networks & fees','네트워크와 수수료','เครือข่ายและค่าธรรมเนียม','Jaringan & biaya','Redes e taxas','Redes e taxas','Ağlar ve ücretler','Redes y comisiones','الشبكات والرسوم','Mạng và phí','Cibiyoyi da kudade')},
    {id:'source-coinbase-gas-fees', lesson:9, type:'article', publisher:'Coinbase Learn', url:'https://www.coinbase.com/learn/crypto-basics/what-are-gas-fees', topic:'gasFees', category:pack('Networks & fees','네트워크와 수수료','เครือข่ายและค่าธรรมเนียม','Jaringan & biaya','Redes e taxas','Redes e taxas','Ağlar ve ücretler','Redes y comisiones','الشبكات والرسوم','Mạng và phí','Cibiyoyi da kudade')},
    {id:'source-tether-transparency', lesson:10, type:'transparency-page', publisher:'Tether', url:'https://tether.to/en/transparency/?tab=usdt', topic:'tether', category:pack('Stablecoins','스테이블코인','Stablecoins','Stablecoin','Stablecoins','Stablecoins','Stablecoinler','Stablecoins','العملات المستقرة','Stablecoin','Stablecoins')},
    {id:'source-circle-usdc', lesson:10, type:'official-source', publisher:'Circle', url:'https://www.usdc.com/', topic:'usdc', category:pack('Stablecoins','스테이블코인','Stablecoins','Stablecoin','Stablecoins','Stablecoins','Stablecoinler','Stablecoins','العملات المستقرة','Stablecoin','Stablecoins')},
    {id:'source-makerdao-dai', lesson:10, type:'official-source', publisher:'MakerDAO', url:'https://makerdao.com/', topic:'dai', category:pack('Stablecoins','스테이블코인','Stablecoins','Stablecoin','Stablecoins','Stablecoins','Stablecoinler','Stablecoins','العملات المستقرة','Stablecoin','Stablecoins')},
    {id:'source-ledger-token-approvals', lesson:11, type:'support-docs', publisher:'Ledger Support', url:'https://support.ledger.com/de/article/Ethereum-Token-Approvals-Explained', topic:'ledgerApprovals', category:pack('DeFi safety','DeFi 안전','ความปลอดภัย DeFi','Keamanan DeFi','Segurança DeFi','Segurança DeFi','DeFi güvenliği','Seguridad DeFi','أمان DeFi','An toàn DeFi','Tsaron DeFi')},
    {id:'source-revoke-cash', lesson:11, type:'tool-docs', publisher:'Revoke.cash', url:'https://revoke.cash/', topic:'revoke', category:pack('DeFi safety','DeFi 안전','ความปลอดภัย DeFi','Keamanan DeFi','Segurança DeFi','Segurança DeFi','DeFi güvenliği','Seguridad DeFi','أمان DeFi','An toàn DeFi','Tsaron DeFi')},
    {id:'source-trustwallet-token-approvals', lesson:11, type:'article', publisher:'Trust Wallet', url:'https://trustwallet.com/blog/security/token-approvals-and-wallet-drainers-how-to-keep-your-assets-safe', topic:'walletDrainers', category:pack('DeFi safety','DeFi 안전','ความปลอดภัย DeFi','Keamanan DeFi','Segurança DeFi','Segurança DeFi','DeFi güvenliği','Seguridad DeFi','أمان DeFi','An toàn DeFi','Tsaron DeFi')},
    {id:'source-binance-tokenomics', lesson:12, type:'article', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/what-is-tokenomics-and-why-does-it-matter', topic:'tokenomics', category:pack('Project evaluation','프로젝트 검토','การประเมินโปรเจกต์','Evaluasi proyek','Avaliação de projeto','Avaliação de projeto','Proje değerlendirme','Evaluación de proyectos','تقييم المشروع','Đánh giá dự án','Binciken aiki')},
    {id:'source-ethereum-bridges', lesson:13, type:'official-docs', publisher:'Ethereum.org', url:'https://ethereum.org/developers/docs/bridges/', topic:'bridges', category:pack('Bridges & multichain','브리지와 멀티체인','Bridge และ multichain','Bridge & multichain','Bridges e multichain','Bridges e multichain','Bridge ve multichain','Bridges y multichain','الجسور وتعدد السلاسل','Bridge và multichain','Bridge da multichain')},
    {id:'source-chainalysis-address-poisoning', lesson:14, type:'security-analysis', publisher:'Chainalysis', url:'https://www.chainalysis.com/blog/address-poisoning-scam/', topic:'addressPoisoning', category:pack('Verification & scam prevention','검증과 사기 예방','การตรวจสอบและป้องกัน scam','Verifikasi & pencegahan scam','Verificação e prevenção de golpes','Verificação e prevenção de golpes','Doğrulama ve scam önleme','Verificación y prevención de estafas','التحقق ومنع الاحتيال','Xác minh và phòng scam','Tabbatarwa da rigakafin zamba')},
    {id:'source-chainalysis-crypto-scam-glossary', lesson:14, type:'security-guide', publisher:'Chainalysis', url:'https://www.chainalysis.com/glossary/crypto-scam/', topic:'cryptoScam', category:pack('Verification & scam prevention','검증과 사기 예방','การตรวจสอบและป้องกัน scam','Verifikasi & pencegahan scam','Verificação e prevenção de golpes','Verificação e prevenção de golpes','Doğrulama ve scam önleme','Verificación y prevención de estafas','التحقق ومنع الاحتيال','Xác minh và phòng scam','Tabbatarwa da rigakafin zamba')},
    {id:'source-chainalysis-impersonation-scams', lesson:14, type:'security-guide', publisher:'Chainalysis', url:'https://www.chainalysis.com/scams/', topic:'impersonation', category:pack('Verification & scam prevention','검증과 사기 예방','การตรวจสอบและป้องกัน scam','Verifikasi & pencegahan scam','Verificação e prevenção de golpes','Verificação e prevenção de golpes','Doğrulama ve scam önleme','Verificación y prevención de estafas','التحقق ومنع الاحتيال','Xác minh và phòng scam','Tabbatarwa da rigakafin zamba')}
  ];

  var LESSON_SOURCE_IDS = {
    8:['source-binance-crypto-wallet-types','source-binance-custodial-vs-noncustodial'],
    9:['source-ethereum-gas-docs','source-coinbase-gas-fees'],
    10:['source-tether-transparency','source-circle-usdc','source-makerdao-dai'],
    11:['source-ledger-token-approvals','source-revoke-cash','source-trustwallet-token-approvals'],
    12:['source-binance-tokenomics'],
    13:['source-ethereum-bridges'],
    14:['source-chainalysis-address-poisoning','source-chainalysis-crypto-scam-glossary','source-chainalysis-impersonation-scams']
  };

  var ROW_BY_ID = {};
  ROWS.forEach(function(row){ ROW_BY_ID[row.id] = row; });

  function ui(lang){ return UI[lang] || UI.en; }
  function typeLabel(row, lang){ return pick(TYPE_LABELS[row.type] || TYPE_LABELS.article, lang); }
  function titleFor(row, lang){ return row.publisher + ' - ' + pick(TOPICS[row.topic], lang); }
  function descFor(row, lang){ return pick(DESCS[row.topic], lang); }
  function categoryFor(row, lang){ return pick(row.category, lang); }
  function lessonLabel(row, lang){
    var copy = ui(lang);
    return lang === 'ko' ? row.lesson + copy.lesson : copy.lesson + ' ' + row.lesson;
  }
  function sourceArray(row, lang){
    var copy = ui(lang);
    return ['intermediate-sources', row.publisher, titleFor(row, lang), descFor(row, lang), row.url, lessonLabel(row, lang), copy.why + ': ' + categoryFor(row, lang)];
  }
  function ensureCategory(lang){
    if(typeof sourceLibraryCats === 'undefined') return;
    if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = clone(sourceLibraryCats.en || []);
    if(!sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate-sources'; })){
      sourceLibraryCats[lang].push({key:'intermediate-sources', label:ui(lang).section});
    }
  }
  function addToSourceStore(store, lang, item, row){
    if(!store) return false;
    if(!store[lang]) store[lang] = clone(store.en || []);
    var titleKey = normalize(item[2]);
    var urlKey = normalize(row.url);
    var exists = store[lang].some(function(existing){
      if(!existing) return false;
      return normalize(existing[4] || '') === urlKey || normalize(existing[2] || existing[1] || '') === titleKey;
    });
    if(exists) return false;
    store[lang].push(item);
    return true;
  }
  function applySourceRows(){
    if(typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(lang){
      ensureCategory(lang);
      ROWS.forEach(function(row){
        var item = sourceArray(row, lang);
        addToSourceStore(sourceLibrary, lang, item, row);
        if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides[lang]) && sourceOverrides[lang].length){
          addToSourceStore(sourceOverrides, lang, clone(item), row);
        }
      });
    });
  }
  function currentSourceItems(lang){
    try{
      if(typeof getSourceItems === 'function' && lang === currentLangKey()) return getSourceItems() || [];
    }catch(error){}
    if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides[lang]) && sourceOverrides[lang].length) return sourceOverrides[lang];
    if(typeof sourceLibrary !== 'undefined') return sourceLibrary[lang] || sourceLibrary.en || [];
    return [];
  }
  function findSource(row, lang){
    var items = currentSourceItems(lang);
    var urlKey = normalize(row.url);
    var titleKey = normalize(titleFor(row, lang));
    var found = null;
    items.some(function(item){
      if(!item) return false;
      if(normalize(item[4] || '') === urlKey || normalize(item[2] || item[1] || '') === titleKey){
        found = item;
        return true;
      }
      return false;
    });
    if(found && found.length >= 7){
      return {
        id: row.id,
        row: row,
        publisher: found[1] || row.publisher,
        title: found[2] || titleFor(row, lang),
        desc: found[3] || descFor(row, lang),
        url: found[4] || row.url,
        related: found[5] || lessonLabel(row, lang),
        why: found[6] || '',
        type: typeLabel(row, lang)
      };
    }
    return {
      id: row.id,
      row: row,
      publisher: row.publisher,
      title: titleFor(row, lang),
      desc: descFor(row, lang),
      url: row.url,
      related: lessonLabel(row, lang),
      why: ui(lang).why + ': ' + categoryFor(row, lang),
      type: typeLabel(row, lang)
    };
  }
  function sourcesForLesson(lessonNo, lang){
    var ids = LESSON_SOURCE_IDS[lessonNo] || [];
    var seen = {};
    return ids.map(function(id){
      var row = ROW_BY_ID[id];
      return row ? findSource(row, lang) : null;
    }).filter(function(source){
      if(!source || !source.url) return false;
      var key = normalize(source.url || source.title);
      if(seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }
  function sourceCard(source, lang){
    return '<article class="lesson-source-card" data-lesson-source-id="' + esc(source.id) + '">'
      + '<span class="source-label">' + esc(source.type) + '</span>'
      + '<strong class="source-title">' + esc(source.title) + '</strong>'
      + '<p class="source-description">' + esc(source.desc) + '</p>'
      + '<a class="lesson-source-link" href="' + esc(source.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ui(lang).open) + '</a>'
      + '</article>';
  }
  function renderLessonSourcesSection(index){
    var lessonNo = Number(index) + 1;
    if(lessonNo < 8 || lessonNo > 14) return '';
    var lang = currentLangKey();
    var items = sourcesForLesson(lessonNo, lang);
    if(!items.length) return '';
    return '<section class="lesson-reference-sources" data-lesson-reference-sources="' + esc(lessonNo) + '">'
      + '<div class="lesson-reference-head">'
      + '<span class="lesson-guide-kicker">' + esc(ui(lang).section) + '</span>'
      + '<h3>' + esc(ui(lang).section) + '</h3>'
      + '<p>' + esc(ui(lang).desc) + '</p>'
      + '</div>'
      + '<div class="lesson-reference-grid">' + items.map(function(source){ return sourceCard(source, lang); }).join('') + '</div>'
      + '<p class="lesson-reference-note">' + esc(ui(lang).note) + '</p>'
      + '</section>';
  }
  function patchLessonHtml(html, index){
    if(index < START_INDEX || index > END_INDEX || !html) return html;
    var lessonNo = Number(index) + 1;
    if(html.indexOf('data-lesson-reference-sources="' + lessonNo + '"') !== -1) return html;
    var section = renderLessonSourcesSection(index);
    if(!section) return html;
    var marker = '</div></div></section>';
    var relatedStart = html.indexOf('lesson-system-related');
    if(relatedStart !== -1){
      var pos = html.indexOf(marker, relatedStart);
      if(pos !== -1) return html.slice(0, pos) + section + html.slice(pos);
    }
    var completeStart = html.indexOf('<div class="complete-row"');
    if(completeStart !== -1) return html.slice(0, completeStart) + section + html.slice(completeStart);
    return html + section;
  }
  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__lessonRealSourceLinksWrapped) return;
    var wrapped = function(index){
      return patchLessonHtml(previous.apply(this, arguments) || '', index);
    };
    wrapped.__lessonRealSourceLinksWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(error){}
  }
  function patchSourceLinks(html){
    var lang = currentLangKey();
    ROWS.forEach(function(row){
      var pattern = new RegExp('<a class="src-link" href="' + re(row.url) + '" target="_blank" rel="noopener(?: noreferrer)?">[\\s\\S]*?<\\/a>', 'g');
      html = html.replace(pattern, '<a class="src-link" href="' + esc(row.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ui(lang).open) + '</a>');
    });
    return html;
  }
  function patchRenderSources(){
    var previous = window.renderSources || (typeof renderSources === 'function' ? renderSources : null);
    if(typeof previous !== 'function' || previous.__lessonRealSourceLinksWrapped) return;
    var wrapped = function(){
      return patchSourceLinks(previous.apply(this, arguments) || '');
    };
    wrapped.__lessonRealSourceLinksWrapped = true;
    window.renderSources = wrapped;
    try{ renderSources = wrapped; }catch(error){}
  }
  function patchSearchExternalClicks(){
    var root = document.getElementById('searchResults');
    if(!root) return;
    var lang = currentLangKey();
    var titleMap = {};
    ROWS.forEach(function(row){
      titleMap[normalize(titleFor(row, lang))] = row;
      titleMap[normalize(titleFor(row, 'en'))] = row;
      titleMap[normalize(row.publisher + ' ' + pick(TOPICS[row.topic], lang))] = row;
    });
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-item,.site-result-card,.source-library-item'), function(node){
      var titleNode = node.querySelector('.search-result-title,.site-result-title,.source-title,h3,strong');
      var row = titleNode ? titleMap[normalize(titleNode.textContent)] : null;
      if(!row || node.__lessonRealSourceClick) return;
      node.__lessonRealSourceClick = true;
      node.setAttribute('data-external-source-url', row.url);
      node.addEventListener('click', function(event){
        if(event.defaultPrevented) return;
        window.open(row.url, '_blank', 'noopener,noreferrer');
      });
    });
  }
  function wrapAfter(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__lessonRealSourceAfterWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(after, 0);
      return result;
    };
    wrapped.__lessonRealSourceAfterWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }
  function installStyles(){
    if(typeof document === 'undefined' || document.getElementById('lessonRealSourceLinksStyles20260526')) return;
    var style = document.createElement('style');
    style.id = 'lessonRealSourceLinksStyles20260526';
    style.textContent = ''
      + '.lesson-reference-sources{grid-column:1/-1;margin-top:18px;padding:18px;border:1px solid rgba(43,92,170,.14);border-radius:22px;background:linear-gradient(135deg,rgba(246,250,255,.96),rgba(255,255,255,.98));box-shadow:0 16px 38px rgba(20,45,85,.08);word-break:keep-all;overflow-wrap:break-word;}'
      + '.lesson-reference-head{display:grid;gap:6px;margin-bottom:14px;}'
      + '.lesson-reference-head h3{margin:0;color:#13294b;font-size:1.08rem;line-height:1.35;}'
      + '.lesson-reference-head p,.lesson-reference-note{margin:0;color:#5a6b82;line-height:1.65;font-size:.93rem;}'
      + '.lesson-reference-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;}'
      + '.lesson-source-card{display:grid;gap:8px;padding:15px;border:1px solid rgba(63,109,196,.14);border-radius:18px;background:#fff;box-shadow:0 10px 24px rgba(29,60,105,.07);}'
      + '.lesson-source-card .source-label{display:inline-flex;justify-self:start;border-radius:999px;padding:4px 9px;background:#eaf3ff;color:#2456a4;font-weight:800;font-size:.74rem;letter-spacing:.01em;}'
      + '.lesson-source-card .source-title{display:block;color:#101f36;font-size:.98rem;line-height:1.45;}'
      + '.lesson-source-card .source-description{margin:0;color:#586b83;line-height:1.58;font-size:.9rem;}'
      + '.lesson-source-link{display:inline-flex;justify-self:start;align-items:center;gap:6px;margin-top:2px;color:#174ea6;font-weight:800;text-decoration:none;}'
      + '.lesson-source-link:hover{text-decoration:underline;}'
      + '.lesson-reference-note{margin-top:12px;font-size:.86rem;}'
      + 'html[dir="rtl"] .lesson-reference-sources{text-align:right;}'
      + '@media(max-width:640px){.lesson-reference-sources{padding:15px;border-radius:18px}.lesson-reference-grid{grid-template-columns:1fr}.lesson-source-card{padding:14px}}';
    document.head.appendChild(style);
  }
  function renderForDebug(lessonNo){
    if(typeof renderLesson !== 'function') return null;
    var html = renderLesson(lessonNo - 1) || '';
    if(typeof document === 'undefined') return {html:html};
    var holder = document.createElement('div');
    holder.innerHTML = html;
    return {html:html, holder:holder};
  }
  function installDebugHelper(){
    window.debugLessonSources = function(){
      var lang = currentLangKey();
      var result = {
        currentLocale: lang,
        sourceLibraryDataReused: true,
        lessons: {}
      };
      Object.keys(LESSON_SOURCE_IDS).forEach(function(key){
        var lessonNo = Number(key);
        var rendered = renderForDebug(lessonNo);
        var foundTitles = [];
        var linkSecurityOk = true;
        var rawUrlText = false;
        if(rendered && rendered.holder){
          var section = rendered.holder.querySelector('[data-lesson-reference-sources="' + lessonNo + '"]');
          if(section){
            rawUrlText = /https?:\/\//.test(section.textContent || '');
            Array.prototype.forEach.call(section.querySelectorAll('.lesson-source-card'), function(card){
              var title = card.querySelector('.source-title');
              var link = card.querySelector('a[href]');
              if(title) foundTitles.push((title.textContent || '').trim());
              if(!link || link.getAttribute('target') !== '_blank' || String(link.getAttribute('rel') || '').indexOf('noopener') === -1 || String(link.getAttribute('rel') || '').indexOf('noreferrer') === -1) linkSecurityOk = false;
            });
          }
        }
        result.lessons[lessonNo] = {
          configuredSourceIds: (LESSON_SOURCE_IDS[lessonNo] || []).slice(),
          renderedSourceCardTitles: foundTitles,
          renderedCount: foundTitles.length,
          expectedCount: (LESSON_SOURCE_IDS[lessonNo] || []).length,
          missingSourceIds: (LESSON_SOURCE_IDS[lessonNo] || []).filter(function(id){
            var row = ROW_BY_ID[id];
            return row && foundTitles.indexOf(titleFor(row, lang)) === -1;
          }),
          rawUrlTextDetected: rawUrlText,
          externalLinkSecurityOk: linkSecurityOk
        };
      });
      return result;
    };
  }

  applySourceRows();
  installStyles();
  patchRenderLesson();
  patchRenderSources();
  wrapAfter('renderSearchAutocompleteFinal', patchSearchExternalClicks);
  wrapAfter('renderPatchedSearchResults', patchSearchExternalClicks);
  wrapAfter('showPage', patchSearchExternalClicks);
  wrapAfter('setLang', patchSearchExternalClicks);
  installDebugHelper();
})();
