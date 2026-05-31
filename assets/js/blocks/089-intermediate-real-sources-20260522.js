(function(){
  if(typeof window === 'undefined' || window.__intermediateRealSources20260522) return;
  window.__intermediateRealSources20260522 = true;

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

  var SECTION = {
    en:{title:'Intermediate Real Sources', desc:'Official docs, security analysis, and education articles for Lessons 8-14.', label:'External source', open:'Open source', lesson:'Lesson', why:'Why this matters', note:'External sources are provided for learning and verification. Coin ProofPath does not endorse investment decisions or specific services.'},
    ko:{title:'중급자 실제 출처', desc:'8~14강과 연결되는 공식 문서, 보안 분석, 교육 자료입니다.', label:'외부 출처', open:'출처 열기', lesson:'강의', why:'왜 중요한가', note:'외부 출처는 학습과 검증을 돕기 위해 제공됩니다. Coin ProofPath는 투자 결정이나 특정 서비스 이용을 권유하지 않습니다.'},
    th:{title:'แหล่งอ้างอิงจริงระดับกลาง', desc:'เอกสารทางการ บทวิเคราะห์ความปลอดภัย และบทความการเรียนรู้สำหรับบทที่ 8-14', label:'แหล่งอ้างอิงภายนอก', open:'เปิดแหล่งอ้างอิง', lesson:'บทเรียน', why:'เหตุผลที่สำคัญ', note:'แหล่งอ้างอิงภายนอกมีไว้เพื่อการเรียนรู้และการตรวจสอบ Coin ProofPath ไม่แนะนำการลงทุนหรือบริการใดเป็นพิเศษ'},
    id:{title:'Sumber nyata menengah', desc:'Dokumen resmi, analisis keamanan, dan artikel edukasi untuk Pelajaran 8-14.', label:'Sumber eksternal', open:'Buka sumber', lesson:'Pelajaran', why:'Mengapa penting', note:'Sumber eksternal disediakan untuk belajar dan verifikasi. Coin ProofPath tidak menganjurkan keputusan investasi atau layanan tertentu.'},
    pt:{title:'Fontes reais intermediárias', desc:'Documentos oficiais, análises de segurança e artigos educativos para as lições 8-14.', label:'Fonte externa', open:'Abrir fonte', lesson:'Lição', why:'Por que importa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.'},
    br:{title:'Fontes reais intermediárias', desc:'Documentos oficiais, análises de segurança e artigos educativos para as aulas 8-14.', label:'Fonte externa', open:'Abrir fonte', lesson:'Aula', why:'Por que importa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.'},
    tr:{title:'Orta seviye gerçek kaynaklar', desc:'Ders 8-14 için resmi dokümanlar, güvenlik analizleri ve eğitim yazıları.', label:'Dış kaynak', open:'Kaynağı aç', lesson:'Ders', why:'Neden önemli', note:'Dış kaynaklar öğrenme ve doğrulama için verilir. Coin ProofPath yatırım kararlarını veya belirli hizmetleri önermez.'},
    es:{title:'Fuentes reales intermedias', desc:'Documentos oficiales, análisis de seguridad y artículos educativos para las lecciones 8-14.', label:'Fuente externa', open:'Abrir fuente', lesson:'Lección', why:'Por qué importa', note:'Las fuentes externas se ofrecen para aprendizaje y verificación. Coin ProofPath no recomienda inversiones ni servicios específicos.'},
    ar:{title:'مصادر حقيقية للمستوى المتوسط', desc:'وثائق رسمية وتحليلات أمنية ومقالات تعليمية للدروس 8-14.', label:'مصدر خارجي', open:'فتح المصدر', lesson:'الدرس', why:'لماذا يهم', note:'تُقدّم المصادر الخارجية للتعلم والتحقق. لا توصي Coin ProofPath بقرارات استثمارية أو خدمات محددة.'},
    vi:{title:'Nguồn thực cho trung cấp', desc:'Tài liệu chính thức, phân tích bảo mật và bài học cho Bài 8-14.', label:'Nguồn bên ngoài', open:'Mở nguồn', lesson:'Bài học', why:'Vì sao quan trọng', note:'Nguồn bên ngoài dùng cho học tập và xác minh. Coin ProofPath không khuyến nghị đầu tư hoặc dịch vụ cụ thể.'},
    ha:{title:'Tushe na gaskiya na matsakaici', desc:'Takardu na hukuma, binciken tsaro, da makalolin ilimi don Darasi 8-14.', label:'Tushe na waje', open:'Bude tushe', lesson:'Darasi', why:'Dalilin muhimmanci', note:'Ana bayar da tushe na waje don koyo da tabbatarwa. Coin ProofPath ba ya ba da shawarar zuba jari ko wani takamaiman sabis.'}
  };

  var TYPE_LABELS = {
    article:pack('Education article','교육 자료','บทความการเรียนรู้','Artikel edukasi','Artigo educativo','Eğitim yazısı','Artículo educativo','مقال تعليمي','Bài viết giáo dục','Makala ta ilimi'),
    'official-docs':pack('Official docs','공식 문서','เอกสารทางการ','Dokumen resmi','Documentos oficiais','Resmi doküman','Documentos oficiales','وثائق رسمية','Tài liệu chính thức','Takardu na hukuma'),
    'official-source':pack('Official source','공식 출처','แหล่งทางการ','Sumber resmi','Fonte oficial','Resmi kaynak','Fuente oficial','مصدر رسمي','Nguồn chính thức','Tushe na hukuma'),
    'support-docs':pack('Support docs','지원 문서','เอกสารช่วยเหลือ','Dokumen dukungan','Documentos de suporte','Destek dokümanı','Documentos de soporte','وثائق دعم','Tài liệu hỗ trợ','Takardun tallafi'),
    'tool-docs':pack('Tool guide','도구 가이드','คู่มือเครื่องมือ','Panduan alat','Guia de ferramenta','Araç rehberi','Guía de herramienta','دليل أداة','Hướng dẫn công cụ','Jagorar kayan aiki'),
    'security-analysis':pack('Security analysis','보안 분석','บทวิเคราะห์ความปลอดภัย','Analisis keamanan','Análise de segurança','Güvenlik analizi','Análisis de seguridad','تحليل أمني','Phân tích bảo mật','Binciken tsaro'),
    'security-guide':pack('Security guide','보안 가이드','คู่มือความปลอดภัย','Panduan keamanan','Guia de segurança','Güvenlik rehberi','Guía de seguridad','دليل أمان','Hướng dẫn bảo mật','Jagorar tsaro')
  };

  var ROWS = [
    {id:'source-binance-crypto-wallet-types', lesson:8, type:'article', category:'Wallet & Custody', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/crypto-wallet-types-explained',
      titles:pack('Binance Academy - Crypto Wallet Types Explained','Binance Academy - 크립토 지갑 유형 설명','Binance Academy - อธิบายประเภทวอลเล็ตคริปโต','Binance Academy - Jenis wallet crypto','Binance Academy - Tipos de carteira cripto','Binance Academy - Kripto cüzdan türleri','Binance Academy - Tipos de billeteras cripto','Binance Academy - شرح أنواع محافظ الكريبتو','Binance Academy - Các loại ví crypto','Binance Academy - Nauʼikan walat crypto'),
      descs:pack('Explains crypto wallet types, private keys, seed phrases, custodial wallets, and non-custodial wallets.','크립토 지갑 유형, 개인키, 시드 문구, 수탁형 지갑과 비수탁형 지갑의 차이를 설명하는 자료입니다.','อธิบายประเภทวอลเล็ต คีย์ส่วนตัว seed phrase และความต่างของ custodial/non-custodial wallet','Menjelaskan jenis wallet, private key, seed phrase, custodial dan non-custodial wallet.','Explica tipos de carteira, chave privada, seed phrase e carteiras custodiais e não custodiais.','Cüzdan türleri, özel anahtar, seed phrase, saklamalı ve saklamasız cüzdanları açıklar.','Explica tipos de billeteras, clave privada, seed phrase y billeteras custodiales/no custodiales.','يشرح أنواع المحافظ والمفتاح الخاص وعبارة الاسترداد والمحافظ الحافظة وغير الحافظة.','Giải thích loại ví, private key, seed phrase, ví custodial và non-custodial.','Yana bayyana nauʼikan walat, private key, seed phrase, custodial da non-custodial wallet.')},
    {id:'source-binance-custodial-vs-noncustodial', lesson:8, type:'article', category:'Wallet & Custody', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/custodial-vs-non-custodial-wallets-what-s-the-difference',
      titles:pack('Binance Academy - Custodial vs Non-Custodial Wallets','Binance Academy - 수탁형 지갑과 비수탁형 지갑','Binance Academy - Custodial vs Non-Custodial Wallets','Binance Academy - Custodial vs Non-Custodial Wallets','Binance Academy - Carteiras custodiais e não custodiais','Binance Academy - Custodial ve non-custodial cüzdanlar','Binance Academy - Billeteras custodiales y no custodiales','Binance Academy - محافظ حافظة وغير حافظة','Binance Academy - Ví custodial và non-custodial','Binance Academy - Custodial da non-custodial wallet'),
      descs:pack('Compares custodial and non-custodial wallets, including control, convenience, and responsibility.','수탁형 지갑과 비수탁형 지갑의 통제권, 편의성, 책임 차이를 비교하는 자료입니다.','เปรียบเทียบวอลเล็ต custodial และ non-custodial ทั้งการควบคุม ความสะดวก และความรับผิดชอบ','Membandingkan wallet custodial dan non-custodial dari kontrol, kemudahan, dan tanggung jawab.','Compara carteiras custodiais e não custodiais, incluindo controle, conveniência e responsabilidade.','Kontrol, kolaylık ve sorumluluk açısından saklamalı ve saklamasız cüzdanları karşılaştırır.','Compara control, comodidad y responsabilidad en billeteras custodiales y no custodiales.','يقارن بين المحافظ الحافظة وغير الحافظة من حيث التحكم والسهولة والمسؤولية.','So sánh ví custodial và non-custodial về quyền kiểm soát, tiện lợi và trách nhiệm.','Yana kwatanta custodial da non-custodial wallet ta iko, sauki da alhaki.')},
    {id:'source-ethereum-gas-docs', lesson:9, type:'official-docs', category:'Networks & Fees', publisher:'Ethereum.org', url:'https://ethereum.org/developers/docs/gas/',
      titles:pack('Ethereum.org - Gas and Fees','Ethereum.org - 가스와 수수료','Ethereum.org - Gas และค่าธรรมเนียม','Ethereum.org - Gas dan biaya','Ethereum.org - Gas e taxas','Ethereum.org - Gas ve ücretler','Ethereum.org - Gas y comisiones','Ethereum.org - الغاز والرسوم','Ethereum.org - Gas và phí','Ethereum.org - Gas da kudade'),
      descs:pack('Official Ethereum documentation explaining gas, transaction fees, and how Ethereum operations are paid for.','가스, 트랜잭션 수수료, 이더리움 작업 비용 구조를 설명하는 공식 문서입니다.','เอกสารทางการของ Ethereum ที่อธิบาย gas ค่าธรรมเนียมธุรกรรม และค่าใช้จ่ายของการทำงาน','Dokumen resmi Ethereum tentang gas, biaya transaksi, dan cara biaya operasi dibayar.','Documentação oficial sobre gas, taxas de transação e custos de operações Ethereum.','Gas, işlem ücretleri ve Ethereum işlemlerinin nasıl ödendiğini açıklayan resmi doküman.','Documentación oficial sobre gas, comisiones y costes de operaciones Ethereum.','وثائق Ethereum الرسمية عن الغاز ورسوم المعاملات وتكلفة العمليات.','Tài liệu chính thức về gas, phí giao dịch và chi phí hoạt động Ethereum.','Takardar Ethereum ta hukuma game da gas, kudin muamala, da biyan ayyuka.')},
    {id:'source-coinbase-gas-fees', lesson:9, type:'article', category:'Networks & Fees', publisher:'Coinbase Learn', url:'https://www.coinbase.com/learn/crypto-basics/what-are-gas-fees',
      titles:pack('Coinbase Learn - What Are Gas Fees?','Coinbase Learn - 가스 수수료란 무엇인가?','Coinbase Learn - Gas fee คืออะไร?','Coinbase Learn - Apa itu gas fee?','Coinbase Learn - O que são gas fees?','Coinbase Learn - Gas ücretleri nedir?','Coinbase Learn - ¿Qué son las gas fees?','Coinbase Learn - ما رسوم الغاز؟','Coinbase Learn - Gas fee là gì?','Coinbase Learn - Menene gas fees?'),
      descs:pack('Beginner-friendly explanation of gas fees and why users pay them when using blockchain networks.','블록체인 네트워크를 사용할 때 가스 수수료를 내는 이유를 초보자도 이해하기 쉽게 설명한 자료입니다.','คำอธิบาย gas fee แบบเข้าใจง่ายและเหตุผลที่ผู้ใช้ต้องจ่ายเมื่อใช้บล็อกเชน','Penjelasan mudah tentang gas fee dan alasan pengguna membayarnya saat memakai blockchain.','Explicação simples sobre gas fees e por que usuários pagam ao usar redes blockchain.','Gas ücretlerinin ne olduğu ve blockchain kullanımında neden ödendiğini basitçe açıklar.','Explicación sencilla de gas fees y por qué se pagan al usar redes blockchain.','شرح مبسط لرسوم الغاز ولماذا يدفعها المستخدمون عند استخدام الشبكات.','Giải thích dễ hiểu về gas fee và lý do người dùng phải trả khi dùng blockchain.','Bayani mai sauki kan gas fees da dalilin biyan su a blockchain.')},
    {id:'source-tether-transparency', lesson:10, type:'official-source', category:'Stablecoins', publisher:'Tether', url:'https://tether.to/en/transparency/?tab=usdt',
      titles:pack('Tether - Transparency','Tether - 투명성 페이지','Tether - หน้าความโปร่งใส','Tether - Transparansi','Tether - Transparência','Tether - Şeffaflık','Tether - Transparencia','Tether - الشفافية','Tether - Minh bạch','Tether - Gaskiya'),
      descs:pack('Official Tether transparency page showing USDT supply and reserve-related information.','USDT 공급량과 준비금 관련 정보를 확인할 수 있는 Tether 공식 투명성 페이지입니다.','หน้าทางการของ Tether สำหรับดูอุปทาน USDT และข้อมูลที่เกี่ยวกับเงินสำรอง','Halaman resmi Tether untuk melihat suplai USDT dan informasi cadangan.','Página oficial da Tether com oferta de USDT e informações de reserva.','USDT arzı ve rezerv bilgilerini gösteren resmi Tether şeffaflık sayfası.','Página oficial de Tether con suministro de USDT e información de reservas.','صفحة Tether الرسمية للشفافية حول عرض USDT ومعلومات الاحتياطي.','Trang minh bạch chính thức của Tether về cung USDT và dự trữ.','Shafin Tether na hukuma da ke nuna arzikin USDT da bayanan ajiyar tallafi.')},
    {id:'source-circle-usdc', lesson:10, type:'official-source', category:'Stablecoins', publisher:'Circle', url:'https://www.usdc.com/',
      titles:pack('Circle - USDC','Circle - USDC 공식 자료','Circle - USDC','Circle - USDC','Circle - USDC','Circle - USDC','Circle - USDC','Circle - USDC','Circle - USDC','Circle - USDC'),
      descs:pack('Official USDC page explaining USDC issuance, reserves, and regulated digital dollar positioning.','USDC의 발행 구조, 준비금, 규제 기반 디지털 달러 설명을 제공하는 공식 자료입니다.','หน้าทางการที่อธิบายการออก USDC เงินสำรอง และบทบาทดอลลาร์ดิจิทัลที่มีการกำกับ','Halaman resmi tentang penerbitan USDC, cadangan, dan posisi dolar digital teregulasi.','Página oficial sobre emissão, reservas e posicionamento regulado do USDC.','USDC ihracı, rezervleri ve düzenlemeli dijital dolar konumunu açıklayan resmi sayfa.','Página oficial sobre emisión de USDC, reservas y dólar digital regulado.','صفحة رسمية تشرح إصدار USDC والاحتياطيات ودوره كدولار رقمي منظم.','Trang chính thức về phát hành USDC, dự trữ và vị thế đô la số được quản lý.','Shafin hukuma game da fitar da USDC, ajiyar tallafi, da matsayin digital dollar.')},
    {id:'source-makerdao-dai', lesson:10, type:'official-source', category:'Stablecoins', publisher:'MakerDAO', url:'https://makerdao.com/',
      titles:pack('MakerDAO - Dai and Maker Protocol','MakerDAO - DAI와 Maker Protocol','MakerDAO - Dai และ Maker Protocol','MakerDAO - Dai dan Maker Protocol','MakerDAO - Dai e Maker Protocol','MakerDAO - Dai ve Maker Protocol','MakerDAO - Dai y Maker Protocol','MakerDAO - Dai وبروتوكول Maker','MakerDAO - Dai và Maker Protocol','MakerDAO - Dai da Maker Protocol'),
      descs:pack('Official MakerDAO site introducing Dai and the Maker Protocol behind decentralized stablecoin infrastructure.','탈중앙 스테이블코인 DAI와 Maker Protocol 구조를 이해할 수 있는 공식 사이트입니다.','เว็บไซต์ทางการที่แนะนำ Dai และ Maker Protocol ในโครงสร้าง stablecoin แบบกระจายศูนย์','Situs resmi yang memperkenalkan Dai dan Maker Protocol untuk stablecoin terdesentralisasi.','Site oficial sobre Dai e o Maker Protocol por trás de stablecoins descentralizadas.','Merkeziyetsiz stablecoin altyapısı Dai ve Maker Protocol için resmi site.','Sitio oficial sobre Dai y Maker Protocol para stablecoins descentralizadas.','موقع رسمي يعرّف Dai وبروتوكول Maker للبنية اللامركزية للـ stablecoin.','Trang chính thức giới thiệu Dai và Maker Protocol cho stablecoin phi tập trung.','Shafin hukuma da ke gabatar da Dai da Maker Protocol na stablecoin marar tsakiya.')},
    {id:'source-ledger-token-approvals', lesson:11, type:'support-docs', category:'DeFi Safety', publisher:'Ledger Support', url:'https://support.ledger.com/de/article/Ethereum-Token-Approvals-Explained',
      titles:pack('Ledger Support - Ethereum Token Approvals Explained','Ledger Support - 이더리움 토큰 승인 설명','Ledger Support - อธิบาย Ethereum token approvals','Ledger Support - Ethereum token approvals','Ledger Support - Aprovações de token Ethereum','Ledger Support - Ethereum token onayları','Ledger Support - Aprobaciones de token Ethereum','Ledger Support - شرح موافقات توكن Ethereum','Ledger Support - Giải thích phê duyệt token Ethereum','Ledger Support - Bayanin amincewar token Ethereum'),
      descs:pack('Explains token approvals and why limiting or revoking unused approvals can reduce risk.','토큰 승인 개념과 사용하지 않는 승인을 제한하거나 해제해야 하는 이유를 설명하는 자료입니다.','อธิบาย token approval และเหตุผลที่ควรจำกัดหรือยกเลิกสิทธิ์ที่ไม่ใช้','Menjelaskan approval token dan alasan membatasi/mencabut approval lama untuk mengurangi risiko.','Explica aprovações de token e por que limitar ou revogar permissões reduz risco.','Token onaylarını ve kullanılmayan onayları sınırlama veya kaldırma nedenini açıklar.','Explica aprobaciones de token y por qué limitar o revocar permisos reduce riesgos.','يشرح موافقات التوكن ولماذا يقلل تقييدها أو إلغاؤها من المخاطر.','Giải thích phê duyệt token và vì sao nên giới hạn hoặc thu hồi quyền cũ.','Yana bayyana amincewar token da dalilin rage ko soke tsofaffin izini.')},
    {id:'source-revoke-cash', lesson:11, type:'tool-docs', category:'DeFi Safety', publisher:'Revoke.cash', url:'https://revoke.cash/',
      titles:pack('Revoke.cash - Token Approval Management','Revoke.cash - 토큰 승인 관리','Revoke.cash - จัดการ token approvals','Revoke.cash - Manajemen approval token','Revoke.cash - Gestão de aprovações de token','Revoke.cash - Token onayı yönetimi','Revoke.cash - Gestión de aprobaciones de token','Revoke.cash - إدارة موافقات التوكن','Revoke.cash - Quản lý phê duyệt token','Revoke.cash - Sarrafa amincewar token'),
      descs:pack('A tool and guide for checking and revoking token approvals to reduce approval-based risks.','토큰 승인을 확인하고 해제하여 승인 기반 위험을 줄이는 데 도움을 주는 도구와 안내 자료입니다.','เครื่องมือและคู่มือสำหรับตรวจและยกเลิก token approvals เพื่อลดความเสี่ยง','Alat dan panduan untuk mengecek serta mencabut approval token.','Ferramenta e guia para verificar e revogar aprovações de token.','Token onaylarını kontrol edip kaldırmak için araç ve rehber.','Herramienta y guía para revisar y revocar aprobaciones de token.','أداة ودليل لفحص وإلغاء موافقات التوكن.','Công cụ và hướng dẫn kiểm tra, thu hồi phê duyệt token.','Kayan aiki da jagora don duba da soke amincewar token.')},
    {id:'source-trustwallet-token-approvals', lesson:11, type:'article', category:'DeFi Safety', publisher:'Trust Wallet', url:'https://trustwallet.com/blog/security/token-approvals-and-wallet-drainers-how-to-keep-your-assets-safe',
      titles:pack('Trust Wallet - Token Approvals and Wallet Drainers','Trust Wallet - 토큰 승인과 지갑 드레이너','Trust Wallet - Token approvals และ wallet drainers','Trust Wallet - Token approvals dan wallet drainers','Trust Wallet - Aprovações de token e wallet drainers','Trust Wallet - Token onayları ve wallet drainers','Trust Wallet - Aprobaciones de token y wallet drainers','Trust Wallet - موافقات التوكن وسارقات المحافظ','Trust Wallet - Phê duyệt token và wallet drainer','Trust Wallet - Amincewar token da wallet drainers'),
      descs:pack('Explains token approvals, wallet drainers, and practical ways to reduce approval-related risks.','토큰 승인, 지갑 드레이너 위험, 승인 관련 위험을 줄이는 방법을 설명하는 자료입니다.','อธิบาย token approvals, wallet drainers และวิธีลดความเสี่ยงจาก approval','Menjelaskan token approval, wallet drainer, dan cara mengurangi risikonya.','Explica aprovações de token, wallet drainers e formas práticas de reduzir riscos.','Token onayları, wallet drainer riskleri ve pratik azaltma yollarını açıklar.','Explica aprobaciones, wallet drainers y cómo reducir riesgos.','يشرح موافقات التوكن وسارقات المحافظ وطرق تقليل المخاطر.','Giải thích phê duyệt token, wallet drainer và cách giảm rủi ro.','Yana bayyana amincewar token, wallet drainers, da rage hadari.')},
    {id:'source-binance-tokenomics', lesson:12, type:'article', category:'Project Evaluation', publisher:'Binance Academy', url:'https://www.binance.com/en/academy/articles/what-is-tokenomics-and-why-does-it-matter',
      titles:pack('Binance Academy - What Is Tokenomics?','Binance Academy - 토크노믹스란 무엇인가?','Binance Academy - Tokenomics คืออะไร?','Binance Academy - Apa itu tokenomics?','Binance Academy - O que é tokenomics?','Binance Academy - Tokenomics nedir?','Binance Academy - ¿Qué es tokenomics?','Binance Academy - ما اقتصاديات التوكن؟','Binance Academy - Tokenomics là gì?','Binance Academy - Menene tokenomics?'),
      descs:pack('Explains tokenomics and why supply, distribution, and incentives matter when evaluating crypto projects.','프로젝트를 평가할 때 공급량, 분배, 인센티브 구조가 왜 중요한지 설명하는 토크노믹스 자료입니다.','อธิบาย tokenomics และเหตุผลที่อุปทาน การกระจาย และแรงจูงใจสำคัญต่อการประเมินโปรเจกต์','Menjelaskan tokenomics serta pentingnya suplai, distribusi, dan insentif.','Explica tokenomics e por que oferta, distribuição e incentivos importam.','Tokenomics, arz, dağıtım ve teşviklerin neden önemli olduğunu açıklar.','Explica tokenomics y por qué importan oferta, distribución e incentivos.','يشرح اقتصاديات التوكن وأهمية العرض والتوزيع والحوافز.','Giải thích tokenomics và vì sao cung, phân bổ, khuyến khích quan trọng.','Yana bayyana tokenomics da muhimmancin arz, rabawa da kwadaitarwa.')},
    {id:'source-ethereum-bridges', lesson:13, type:'official-docs', category:'Bridges & Multichain', publisher:'Ethereum.org', url:'https://ethereum.org/developers/docs/bridges/',
      titles:pack('Ethereum.org - Bridges','Ethereum.org - 브리지','Ethereum.org - Bridges','Ethereum.org - Bridges','Ethereum.org - Bridges','Ethereum.org - Bridges','Ethereum.org - Bridges','Ethereum.org - الجسور','Ethereum.org - Bridges','Ethereum.org - Bridges'),
      descs:pack('Official Ethereum documentation explaining blockchain bridges and how assets or messages move across chains.','블록체인 브리지와 체인 간 자산 또는 메시지 이동 개념을 설명하는 Ethereum.org 공식 문서입니다.','เอกสารทางการของ Ethereum ที่อธิบาย bridge และการย้ายสินทรัพย์/ข้อความข้ามเชน','Dokumen resmi Ethereum tentang bridge dan perpindahan aset/pesan antar-chain.','Documentação oficial sobre bridges e movimentação de ativos ou mensagens entre chains.','Blockchain bridge ve varlık/mesajların zincirler arasında taşınmasını açıklar.','Documentación oficial sobre bridges y movimiento de activos o mensajes entre cadenas.','وثائق Ethereum الرسمية عن الجسور ونقل الأصول أو الرسائل بين السلاسل.','Tài liệu chính thức về bridge và chuyển tài sản/thông điệp giữa chain.','Takardar Ethereum ta hukuma game da bridges da motsa kadara ko sako tsakanin sarkoki.')},
    {id:'source-chainalysis-address-poisoning', lesson:14, type:'security-analysis', category:'Verification & Scam Prevention', publisher:'Chainalysis', url:'https://www.chainalysis.com/blog/address-poisoning-scam/',
      titles:pack('Chainalysis - Anatomy of an Address Poisoning Scam','Chainalysis - 주소 오염 사기 분석','Chainalysis - วิเคราะห์ address poisoning scam','Chainalysis - Analisis address poisoning scam','Chainalysis - Anatomia de golpe de address poisoning','Chainalysis - Address poisoning scam analizi','Chainalysis - Anatomía de una estafa address poisoning','Chainalysis - تحليل احتيال تلويث العنوان','Chainalysis - Phân tích lừa đảo address poisoning','Chainalysis - Binciken address poisoning scam'),
      descs:pack('Analysis of address poisoning scams and how users can be tricked by visually similar wallet addresses.','주소가 비슷해 보이도록 속이는 주소 오염 사기 사례와 위험 구조를 분석한 자료입니다.','วิเคราะห์กลโกง address poisoning และการหลอกด้วยที่อยู่วอลเล็ตที่คล้ายกัน','Analisis scam address poisoning dan alamat wallet yang tampak mirip.','Análise de golpes com endereços visualmente parecidos.','Benzer görünen cüzdan adresleriyle yapılan address poisoning dolandırıcılığını analiz eder.','Análisis de estafas con direcciones visualmente similares.','تحليل لاحتيال العناوين المتشابهة بصريا.','Phân tích lừa đảo địa chỉ ví trông giống nhau.','Bincike kan zamba ta adireshin walat masu kama.')},
    {id:'source-chainalysis-crypto-scam-glossary', lesson:14, type:'security-guide', category:'Verification & Scam Prevention', publisher:'Chainalysis', url:'https://www.chainalysis.com/glossary/crypto-scam/',
      titles:pack('Chainalysis - What Is a Crypto Scam?','Chainalysis - 크립토 사기란 무엇인가?','Chainalysis - Crypto scam คืออะไร?','Chainalysis - Apa itu crypto scam?','Chainalysis - O que é golpe cripto?','Chainalysis - Crypto scam nedir?','Chainalysis - ¿Qué es una estafa cripto?','Chainalysis - ما احتيال الكريبتو؟','Chainalysis - Crypto scam là gì?','Chainalysis - Menene crypto scam?'),
      descs:pack('Explains common crypto scam types and how scams use crypto as payment, investment lure, or credential theft method.','크립토 사기 유형과 사기가 결제, 투자 유도, 자격 증명 탈취 방식으로 악용되는 구조를 설명하는 자료입니다.','อธิบายประเภท crypto scam และวิธีใช้คริปโตเพื่อชำระเงิน หลอกลงทุน หรือขโมยข้อมูล','Menjelaskan jenis scam crypto dan pola pembayaran, investasi palsu, atau pencurian kredensial.','Explica tipos comuns de golpes e uso de cripto para pagamento, isca ou roubo.','Kripto dolandırıcılık türlerini ve ödeme, yatırım tuzağı, kimlik hırsızlığı kullanımını açıklar.','Explica tipos de estafa cripto y robo de credenciales.','يشرح أنواع احتيال الكريبتو واستخدامها للدفع أو الإغراء أو سرقة البيانات.','Giải thích các kiểu scam crypto và cách dùng để dụ đầu tư hoặc đánh cắp thông tin.','Yana bayyana nauʼikan scam crypto da yadda ake amfani da su don biyan kudi ko sata.')},
    {id:'source-chainalysis-impersonation-scams', lesson:14, type:'security-guide', category:'Verification & Scam Prevention', publisher:'Chainalysis', url:'https://www.chainalysis.com/scams/',
      titles:pack('Chainalysis - Preventing Chainalysis Impersonation Scams','Chainalysis - 사칭 사기 예방 안내','Chainalysis - ป้องกัน impersonation scams','Chainalysis - Mencegah scam impersonasi','Chainalysis - Prevenção de golpes de impersonação','Chainalysis - Taklit dolandırıcılıklarını önleme','Chainalysis - Prevención de estafas de suplantación','Chainalysis - منع احتيالات انتحال الهوية','Chainalysis - Phòng tránh lừa đảo mạo danh','Chainalysis - Rigakafin zambar kwaikwayo'),
      descs:pack('Explains impersonation scam precautions and how users should respond to suspicious claims.','사칭 사기를 조심하는 방법과 의심스러운 연락을 받았을 때의 대응 방식을 안내하는 자료입니다.','อธิบายข้อควรระวังเกี่ยวกับการสวมรอยและวิธีตอบสนองต่อคำกล่าวอ้างที่น่าสงสัย','Menjelaskan pencegahan scam impersonasi dan respons terhadap klaim mencurigakan.','Explica cuidados contra impersonação e respostas a contatos suspeitos.','Taklit dolandırıcılığına karşı önlemler ve şüpheli iddialara yanıtı açıklar.','Explica precauciones ante suplantación y reclamos sospechosos.','يوضح احتياطات الاحتيال بالانتحال وكيفية التعامل مع الادعاءات المشبوهة.','Hướng dẫn phòng mạo danh và xử lý liên hệ đáng ngờ.','Yana bayyana kariya daga zambar kwaikwayo da martani ga sakonni masu shakku.')}
  ];

  var VERIFIED_URLS = ROWS.map(function(row){ return row.url; });
  var FAILED_URLS = [];

  function typeLabel(row, lang){
    var labels = TYPE_LABELS[row.type] || TYPE_LABELS.article;
    return labels[lang] || labels.en;
  }
  function titleFor(row, lang){ return (row.titles && (row.titles[lang] || row.titles.en)) || row.id; }
  function descFor(row, lang){ return (row.descs && (row.descs[lang] || row.descs.en)) || ''; }
  function sectionCopy(lang){ return SECTION[lang] || SECTION.en; }
  function lessonLabel(row, lang){
    var ui = sectionCopy(lang);
    return lang === 'ko' ? row.lesson + '강' : ui.lesson + ' ' + row.lesson;
  }
  function sourceArray(row, lang){
    var ui = sectionCopy(lang);
    return ['intermediate-sources', row.publisher, titleFor(row, lang), descFor(row, lang), row.url, lessonLabel(row, lang), ui.why + ': ' + row.category];
  }
  function ensureCategory(lang){
    if(typeof sourceLibraryCats === 'undefined') return;
    var ui = sectionCopy(lang);
    if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = clone(sourceLibraryCats.en || []);
    if(!sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate-sources'; })){
      sourceLibraryCats[lang].push({key:'intermediate-sources', label:ui.title});
    }
  }
  function addToStore(store, lang, item, row){
    if(!store) return false;
    if(!store[lang]) store[lang] = clone(store.en || []);
    var idKey = normalize(row.id);
    var titleKey = normalize(item[2]);
    var exists = store[lang].some(function(existing){
      if(!existing) return false;
      return normalize(existing[2] || existing[1] || '') === titleKey || normalize(existing[4] || '') === normalize(row.url) || normalize(existing[2] || '').indexOf(idKey) !== -1;
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
        addToStore(sourceLibrary, lang, item, row);
        if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides[lang]) && sourceOverrides[lang].length){
          addToStore(sourceOverrides, lang, clone(item), row);
        }
      });
    });
  }
  function sourceCard(row, lang){
    var ui = sectionCopy(lang);
    return '<a class="source-library-item lesson-guide-source-card external-source-card" href="' + esc(row.url) + '" target="_blank" rel="noopener noreferrer" data-real-source-card="' + esc(row.id) + '">'
      + '<div class="source-library-meta">' + esc(typeLabel(row, lang)) + '</div>'
      + '<div class="src-publisher-row"><span class="src-publisher">&#9654; ' + esc(row.publisher) + '</span><span class="src-section-tag">&#8594; ' + esc(lessonLabel(row, lang)) + '</span></div>'
      + '<h3>' + esc(titleFor(row, lang)) + '</h3>'
      + '<p>' + esc(descFor(row, lang)) + '</p>'
      + '<span class="src-link">' + esc(ui.open) + '</span>'
      + '</a>';
  }
  function renderSourceSection(){
    var lang = currentLangKey();
    var ui = sectionCopy(lang);
    return '<section class="src-section-block is-action-track" data-real-intermediate-sources>'
      + '<div class="src-section-heading">' + esc(ui.title) + '<span class="src-section-count">' + ROWS.length + '</span></div>'
      + '<p class="src-group-desc">' + esc(ui.desc) + '</p>'
      + '<div class="source-library-grid">' + ROWS.map(function(row){ return sourceCard(row, lang); }).join('') + '</div>'
      + '<p class="src-group-desc real-source-note">' + esc(ui.note) + '</p>'
      + '</section>';
  }
  function patchSourceLinks(html){
    var lang = currentLangKey();
    var ui = sectionCopy(lang);
    ROWS.forEach(function(row){
      var escapedUrl = row.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var pattern = new RegExp('<a class="src-link" href="' + escapedUrl + '" target="_blank" rel="noopener">[^<]*<\\/a>', 'g');
      html = html.replace(pattern, '<a class="src-link" href="' + esc(row.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ui.open) + '</a>');
    });
    return html;
  }
  function ensureSourceSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    Array.prototype.forEach.call(panel.querySelectorAll('[data-real-intermediate-sources]'), function(node){
      if(node && node.parentNode) node.parentNode.removeChild(node);
    });
    panel.insertAdjacentHTML('beforeend', renderSourceSection());
  }
  function relatedCardsForLesson(index){
    var lesson = index + 1;
    var lang = currentLangKey();
    var ui = sectionCopy(lang);
    var rows = ROWS.filter(function(row){ return row.lesson === lesson; });
    if(!rows.length) return '';
    return rows.map(function(row){
      return '<a class="source-card related-resource-card external-source-card" href="' + esc(row.url) + '" target="_blank" rel="noopener noreferrer" data-real-related-source="' + esc(row.id) + '">'
        + '<span class="related-card-label">' + esc(typeLabel(row, lang)) + '</span>'
        + '<strong class="related-card-title">' + esc(titleFor(row, lang)) + '</strong>'
        + '<span class="related-card-desc">' + esc(descFor(row, lang)) + '</span>'
        + '<span class="related-card-link">' + esc(ui.open) + '</span>'
        + '</a>';
    }).join('');
  }
  function patchLessonHtml(html, index){
    if(index < START_INDEX || index >= 14 || !html || html.indexOf('lesson-system-related') === -1 || html.indexOf('data-real-related-source=') !== -1) return html;
    var insert = relatedCardsForLesson(index);
    if(!insert) return html;
    var marker = '</div></div></section>';
    var pos = html.indexOf(marker, html.indexOf('lesson-system-related'));
    return pos === -1 ? html : html.slice(0, pos) + insert + html.slice(pos);
  }
  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__realExternalSourcesWrapped) return;
    var wrapped = function(index){
      return patchLessonHtml(previous.apply(this, arguments) || '', index);
    };
    wrapped.__realExternalSourcesWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(error){}
  }
  function patchRenderSources(){
    var previous = window.renderSources || (typeof renderSources === 'function' ? renderSources : null);
    if(typeof previous !== 'function' || previous.__realExternalSourcesWrapped) return;
    var wrapped = function(){
      var html = patchSourceLinks(previous.apply(this, arguments) || '');
      setTimeout(ensureSourceSection, 0);
      return html;
    };
    wrapped.__realExternalSourcesWrapped = true;
    window.renderSources = wrapped;
    try{ renderSources = wrapped; }catch(error){}
  }
  function patchSearchRows(){
    var root = document.getElementById('searchResults');
    if(!root) return;
    var lang = currentLangKey();
    var titleMap = {};
    ROWS.forEach(function(row){ titleMap[normalize(titleFor(row, lang))] = row; titleMap[normalize(titleFor(row, 'en'))] = row; });
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-item,.site-result-card'), function(node){
      var titleNode = node.querySelector('.search-result-title,.site-result-title,.source-title,strong,h3');
      var row = titleNode ? titleMap[normalize(titleNode.textContent)] : null;
      if(!row || node.__realExternalSourceClick) return;
      node.__realExternalSourceClick = true;
      node.setAttribute('data-external-source-url', row.url);
      node.addEventListener('click', function(event){
        if(event.defaultPrevented) return;
        window.open(row.url, '_blank', 'noopener,noreferrer');
      });
    });
  }
  function wrapAfter(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__realExternalSourcesAfterWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(after, 0);
      return result;
    };
    wrapped.__realExternalSourcesAfterWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }

  applySourceRows();
  patchRenderLesson();
  patchRenderSources();
  wrapAfter('renderSearchAutocompleteFinal', patchSearchRows);
  wrapAfter('renderPatchedSearchResults', patchSearchRows);
  wrapAfter('showPage', ensureSourceSection);
  wrapAfter('setLang', ensureSourceSection);
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureSourceSection, {once:true});
  else setTimeout(ensureSourceSection, 0);

  window.debugIntermediateRealSources = function(){
    var lang = currentLangKey();
    var sourceItems = [];
    try{ sourceItems = typeof getSourceItems === 'function' ? (getSourceItems() || []) : []; }catch(error){}
    var text = document.getElementById('sourcesPanel') ? document.getElementById('sourcesPanel').textContent : '';
    return {
      currentLocale: lang,
      verifiedUrls: VERIFIED_URLS.slice(),
      failedUrls: FAILED_URLS.slice(),
      sourceLibraryRows: ROWS.map(function(row){
        var title = titleFor(row, lang);
        return {
          id: row.id,
          lesson: row.lesson,
          inData: sourceItems.some(function(item){ return normalize(item && item[2]) === normalize(title) || normalize(item && item[4]) === normalize(row.url); }),
          inUI: text.indexOf(title) !== -1,
          url: row.url
        };
      }),
      lessonCoverage: ROWS.reduce(function(acc, row){
        if(!acc[row.lesson]) acc[row.lesson] = [];
        acc[row.lesson].push(row.id);
        return acc;
      }, {})
    };
  };
})();
