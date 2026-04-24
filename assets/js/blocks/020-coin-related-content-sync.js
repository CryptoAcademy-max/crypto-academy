(function(){
  var REL_LANGS = ['en','ko','th','id','pt','br','tr','ar','ha','vi','es'];
  function baseLang(lang){ return lang === 'br' ? 'pt' : lang; }
  function deepClone(value){ if(value === undefined || value === null) return value; return JSON.parse(JSON.stringify(value)); }
  function ensurePageLangStore(store, lang, fallbackLang){
    if(!store) return null;
    if(!store[lang]){
      var seed = store[baseLang(lang)] || store[fallbackLang] || store.en;
      if(seed) store[lang] = deepClone(seed);
    }
    return store[lang];
  }
  function lessonTitle(lang, idx){
    var lessonNames = {
      en:['Blockchain','Wallets','Safe Transfers','The 5 Roles of Crypto','Real-world Lessons'],
      ko:['블록체인','지갑','안전한 전송','암호화폐의 5가지 역할','실제 교훈'],
      th:['บล็อกเชน','วอลเล็ต','การโอนอย่างปลอดภัย','5 บทบาทของคริปโต','บทเรียนจากโลกจริง'],
      id:['Blockchain','Dompet','Transfer Aman','5 Peran Crypto','Pelajaran Dunia Nyata'],
      pt:['Blockchain','Carteiras','Transferências Seguras','Os 5 papéis do crypto','Lições do mundo real'],
      tr:['Blokzincir','Cüzdanlar','Güvenli Transferler','Kriptonun 5 Rolü','Gerçek Dünya Dersleri'],
      ar:['البلوك تشين','المحافظ','التحويلات الآمنة','الأدوار الخمسة للعملات المشفرة','دروس من العالم الحقيقي'],
      vi:['Blockchain','Ví','Chuyển an toàn','5 vai trò của crypto','Bài học thực tế'],
      es:['Blockchain','Billeteras','Transferencias Seguras','Los 5 Roles de Crypto','Lecciones del mundo real'],
      ha:['Sarkar bayanai','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na tokan','Darussan Duniya ta Gaskiya']
    };
    var base = baseLang(lang);
    var names = lessonNames[base] || lessonNames.en;
    return names[idx] || lessonNames.en[idx] || 'Blockchain';
  }
  function normalizeSourceLessonTag(lang, tag){
    if(tag === 'Sarkar bayanai') return lessonTitle(lang, 0);
    if(tag === 'Ayyuka 5 na Crypto' || tag === 'Ayyuka 5 na kudin dijital' || tag === 'Ayyuka 5 na tokan' || tag === 'Ayyukan tokan') return lessonTitle(lang, 3);
    if(tag === 'Darussan Duniya ta Gaskiya') return lessonTitle(lang, 4);
    if(tag === 'Blockchain' || tag === '블록체인') return lessonTitle(lang, 0);
    if(tag === 'The 5 Roles of Crypto') return lessonTitle(lang, 3);
    if(tag === 'Real-world Lessons') return lessonTitle(lang, 4);
    return tag;
  }
  function localizedSourceEntry(lang, entry){
    var copy = entry.slice();
    copy[5] = normalizeSourceLessonTag(lang, copy[5]);
    return copy;
  }
  function ensureUnique(list, item, keyIndex){
    if(!list) return;
    if(!list.some(function(entry){ return entry[keyIndex] === item[keyIndex]; })) list.push(item);
  }

  var glossaryEntries = {};
  var faqEntries = {};
  var safetyEntries = {};
  var sourceEntries = {};

  var coinMappings = {
    bitcoin:{relatedLessons:[0,1,2], relatedGlossary:['blockchain','mining','wallet'], relatedFaq:['bitcoin'], relatedSources:['bitcoinWhitepaper'], relatedSafety:['seed']},
    ethereum:{relatedLessons:[0,1,3], relatedGlossary:['smartContract','gasFee','wallet'], relatedFaq:['ethereum','gas'], relatedSources:['ethereumOrg'], relatedSafety:['networkMismatch']},
    solana:{relatedLessons:[0,2,4], relatedGlossary:['layer1','tps','validator'], relatedFaq:['solana','networkMatter'], relatedSources:['solanaDocs'], relatedSafety:['networkRisk']},
    xrp:{relatedLessons:[0,4], relatedGlossary:['remittance','centralization'], relatedFaq:['xrp','payments'], relatedSources:['rippleSite'], relatedSafety:['regulatory']},
    bnb:{relatedLessons:[1,3], relatedGlossary:['exchange','token'], relatedFaq:['bnb','utilityToken'], relatedSources:['bnbDocs'], relatedSafety:['exchange']},
    usdt:{relatedLessons:[2,3,4], relatedGlossary:['stablecoin','peg','liquidity'], relatedFaq:['usdt','stableRisk'], relatedSources:['tetherTransparency'], relatedSafety:['stableDepeg']},
    aave:{relatedLessons:[3,4], relatedGlossary:['defi','lending','flashLoan'], relatedFaq:['aave','defiBank'], relatedSources:['aaveDocs'], relatedSafety:['defiSmart']},
    nft:{relatedLessons:[1,3,4], relatedGlossary:['nft','token','mint'], relatedFaq:['nft','nftPictures'], relatedSources:['openSeaLearn'], relatedSafety:['nftScam']}
  };

  glossaryEntries.en = {
    blockchain:{title:'Blockchain', body:'A shared ledger kept by many computers so records can be checked without relying on one company.'},
    mining:{title:'Mining', body:'The process used by proof-of-work networks to validate transactions and add new blocks.'},
    wallet:{title:'Wallet', body:'A tool that manages your keys and lets you access, send, and receive crypto assets.'},
    smartContract:{title:'Smart Contract', body:'Code on a blockchain that runs automatically when its conditions are met.'},
    gasFee:{title:'Gas Fee', body:'The network fee paid to process and record a transaction on a blockchain.'},
    layer1:{title:'Layer 1', body:'The base blockchain network that has its own rules, security, and transaction history.'},
    tps:{title:'TPS', body:'Transactions per second. It is one way to describe how many transactions a network can process.'},
    validator:{title:'Validator', body:'A participant that helps check and confirm transactions and blocks on some blockchain networks.'},
    remittance:{title:'Remittance', body:'A payment or money transfer sent across borders, often from one country to another.'},
    centralization:{title:'Centralization', body:'A structure where control is concentrated in a small group instead of being widely distributed.'},
    exchange:{title:'Exchange', body:'A platform where users buy, sell, and trade crypto assets.'},
    token:{title:'Token', body:'A digital asset issued on a blockchain, often with a specific use inside an app or ecosystem.'},
    stablecoin:{title:'Stablecoin', body:'A token designed to track a relatively stable value, often linked to a fiat currency like the US dollar.'},
    peg:{title:'Peg', body:'The target value relationship a token tries to maintain against another asset, such as 1:1 with USD.'},
    liquidity:{title:'Liquidity', body:'How easily an asset can be bought or sold without causing a large price change.'},
    defi:{title:'DeFi', body:'Blockchain-based financial services such as trading or lending that work without a traditional bank in the middle.'},
    lending:{title:'Lending', body:'Letting others borrow assets, usually in return for interest or collateral-based repayment.'},
    flashLoan:{title:'Flash Loan', body:'A DeFi loan that is borrowed and repaid inside a single blockchain transaction.'},
    nft:{title:'NFT', body:'A unique token used to represent ownership or identity for a specific digital or physical item.'},
    mint:{title:'Mint', body:'To create and issue a new token or NFT on a blockchain.'}
  };
  glossaryEntries.ko = {
    blockchain:{title:'블록체인', body:'여러 컴퓨터가 함께 유지하는 공유 원장으로, 한 회사에만 의존하지 않고 기록을 검증할 수 있게 해줍니다.'},
    mining:{title:'채굴', body:'작업증명 네트워크에서 거래를 검증하고 새 블록을 추가하는 과정입니다.'},
    wallet:{title:'\uC9C0\uAC11', body:'키를 관리하고 암호자산을 보내고 받거나 접근할 수 있게 해주는 도구입니다.'},
    smartContract:{title:'스마트 컨트랙트', body:'정해진 조건이 충족되면 블록체인 위에서 자동으로 실행되는 코드입니다.'},
    gasFee:{title:'가스비', body:'블록체인에서 거래를 처리하고 기록하기 위해 내는 네트워크 수수료입니다.'},
    layer1:{title:'레이어 1', body:'자체 규칙과 보안, 거래 기록을 가진 기본 블록체인 네트워크입니다.'},
    tps:{title:'TPS', body:'초당 거래 수를 뜻하며, 네트워크가 얼마나 많은 거래를 처리할 수 있는지 보여주는 지표입니다.'},
    validator:{title:'검증자', body:'일부 블록체인에서 거래와 블록을 확인하고 승인하는 참여자입니다.'},
    remittance:{title:'송금', body:'국경을 넘어 돈을 보내는 결제나 자금 이전을 뜻합니다.'},
    centralization:{title:'\uC911\uC559\uC9D1\uC911\uD654', body:'통제권이 넓게 분산되지 않고 소수의 주체에 집중된 구조입니다.'},
    exchange:{title:'\uAC70\uB798\uC18C', body:'암호자산을 사고팔고 교환할 수 있는 플랫폼입니다.'},
    token:{title:'토큰', body:'블록체인 위에서 발행되며 특정 기능이나 용도를 가진 디지털 자산입니다.'},
    stablecoin:{title:'스테이블코인', body:'주로 달러 같은 법정화폐에 연동되어 비교적 안정적인 가치를 목표로 하는 토큰입니다.'},
    peg:{title:'페그', body:'토큰이 다른 자산과 맞추려는 목표 가치 관계를 뜻하며, 예를 들어 1달러 연동이 있습니다.'},
    liquidity:{title:'\uC720\uB3D9\uC131', body:'큰 가격 변동 없이 자산을 얼마나 쉽게 사고팔 수 있는지를 뜻합니다.'},
    defi:{title:'DeFi', body:'전통적인 은행 없이 블록체인 위에서 작동하는 거래, 대출 같은 금융 서비스입니다.'},
    lending:{title:'\uB300\uCD9C', body:'다른 사람이 자산을 빌리도록 하고 이자나 담보 구조로 상환받는 것을 뜻합니다.'},
    flashLoan:{title:'플래시론', body:'하나의 블록체인 거래 안에서 빌리고 바로 상환해야 하는 DeFi 대출입니다.'},
    nft:{title:'NFT', body:'특정 디지털 또는 실물 항목의 소유권이나 고유성을 나타내는 대체 불가능 토큰입니다.'},
    mint:{title:'민트', body:'블록체인 위에 새로운 토큰이나 NFT를 발행하는 것을 뜻합니다.'}
  };
  glossaryEntries.th = {
    blockchain:{title:'บล็อกเชน', body:'สมุดบันทึกร่วมที่คอมพิวเตอร์หลายเครื่องช่วยกันดูแล ทำให้ตรวจสอบข้อมูลได้โดยไม่ต้องเชื่อบริษัทเดียว.'},
    mining:{title:'การขุด', body:'กระบวนการที่เครือข่ายแบบ Proof of Work ใช้ตรวจสอบธุรกรรมและเพิ่มบล็อกใหม่.'},
    wallet:{title:'\u0E27\u0E2D\u0E25\u0E40\u0E25\u0E47\u0E15', body:'เครื่องมือที่ใช้จัดการกุญแจและเข้าถึง ส่ง หรือรับสินทรัพย์คริปโต.'},
    smartContract:{title:'\u0E2A\u0E21\u0E32\u0E23\u0E4C\u0E15\u0E04\u0E2D\u0E19\u0E41\u0E17\u0E23\u0E01\u0E15\u0E4C', body:'โค้ดบนบล็อกเชนที่ทำงานอัตโนมัติเมื่อเงื่อนไขที่กำหนดไว้ครบถ้วน.'},
    gasFee:{title:'\u0E04\u0E48\u0E32\u0E01\u0E4A\u0E32\u0E0B', body:'ค่าธรรมเนียมเครือข่ายที่จ่ายเพื่อให้ธุรกรรมถูกประมวลผลและบันทึก.'},
    layer1:{title:'Layer 1', body:'เครือข่ายบล็อกเชนหลักที่มีความปลอดภัย กฎ และประวัติธุรกรรมของตัวเอง.'},
    tps:{title:'TPS', body:'จำนวนธุรกรรมต่อวินาที เป็นตัวชี้วัดหนึ่งว่าระบบประมวลผลได้เร็วแค่ไหน.'},
    validator:{title:'\u0E1C\u0E39\u0E49\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21', body:'ผู้เข้าร่วมเครือข่ายที่ช่วยยืนยันธุรกรรมและบล็อกในบางบล็อกเชน.'},
    remittance:{title:'การโอนเงินข้ามประเทศ', body:'การส่งเงินจากประเทศหนึ่งไปอีกประเทศหนึ่ง.'},
    centralization:{title:'\u0E01\u0E32\u0E23\u0E23\u0E27\u0E21\u0E28\u0E39\u0E19\u0E22\u0E4C', body:'โครงสร้างที่อำนาจควบคุมกระจุกอยู่กับคนหรือองค์กรจำนวนน้อย.'},
    exchange:{title:'ตลาดแลกเปลี่ยน', body:'แพลตฟอร์มสำหรับซื้อ ขาย และแลกเปลี่ยนคริปโต.'},
    token:{title:'\u0E42\u0E17\u0E40\u0E04\u0E47\u0E19', body:'สินทรัพย์ดิจิทัลที่ออกบนบล็อกเชนและมักมีหน้าที่เฉพาะในระบบหนึ่ง.'},
    stablecoin:{title:'สเตเบิลคอยน์', body:'โทเค็นที่ออกแบบมาให้มีมูลค่าค่อนข้างคงที่ มักผูกกับสกุลเงินอย่างดอลลาร์สหรัฐ.'},
    peg:{title:'เพก', body:'ความสัมพันธ์ของมูลค่าเป้าหมายที่โทเค็นพยายามรักษาไว้ เช่น 1 ต่อ 1 กับดอลลาร์.'},
    liquidity:{title:'\u0E2A\u0E20\u0E32\u0E1E\u0E04\u0E25\u0E48\u0E2D\u0E07', body:'ความง่ายในการซื้อหรือขายสินทรัพย์โดยไม่ทำให้ราคาขยับมาก.'},
    defi:{title:'DeFi', body:'บริการการเงินบนบล็อกเชน เช่น การกู้ยืมและการเทรด โดยไม่มีธนาคารแบบดั้งเดิมคั่นกลาง.'},
    lending:{title:'การให้กู้ยืม', body:'การปล่อยให้ผู้อื่นยืมสินทรัพย์ โดยมักมีดอกเบี้ยหรือหลักประกันรองรับ.'},
    flashLoan:{title:'\u0E41\u0E1F\u0E25\u0E0A\u0E42\u0E25\u0E19', body:'เงินกู้ DeFi ที่ต้องยืมและคืนให้เสร็จภายในธุรกรรมเดียว.'},
    nft:{title:'NFT', body:'โทเค็นที่ไม่สามารถทดแทนกันได้ ใช้แสดงความเป็นเจ้าของหรือความเฉพาะตัวของสิ่งใดสิ่งหนึ่ง.'},
    mint:{title:'\u0E21\u0E34\u0E19\u0E15\u0E4C', body:'การสร้างและออกโทเค็นหรือ NFT ใหม่บนบล็อกเชน.'}
  };
  glossaryEntries.id = {
    blockchain:{title:'Blockchain', body:'Buku besar bersama yang dijaga banyak komputer sehingga catatan bisa diperiksa tanpa bergantung pada satu perusahaan.'},
    mining:{title:'Mining', body:'Proses pada jaringan proof-of-work untuk memvalidasi transaksi dan menambahkan blok baru.'},
    wallet:{title:'Wallet', body:'Alat untuk mengelola kunci dan mengakses, mengirim, atau menerima aset kripto.'},
    smartContract:{title:'Smart Contract', body:'Kode di blockchain yang berjalan otomatis saat syaratnya terpenuhi.'},
    gasFee:{title:'Gas Fee', body:'Biaya jaringan yang dibayar agar transaksi diproses dan dicatat.'},
    layer1:{title:'Layer 1', body:'Jaringan blockchain dasar yang memiliki keamanan, aturan, dan riwayat transaksinya sendiri.'},
    tps:{title:'TPS', body:'Transactions per second. Ukuran untuk melihat berapa banyak transaksi yang dapat diproses jaringan setiap detik.'},
    validator:{title:'Validator', body:'Peserta jaringan yang membantu memeriksa dan mengonfirmasi transaksi serta blok.'},
    remittance:{title:'Remitansi', body:'Pengiriman uang lintas negara dari satu tempat ke tempat lain.'},
    centralization:{title:'Sentralisasi', body:'Kondisi ketika kendali terpusat pada kelompok kecil, bukan tersebar luas.'},
    exchange:{title:'Bursa', body:'Platform untuk membeli, menjual, dan memperdagangkan aset kripto.'},
    token:{title:'Token', body:'Aset digital yang diterbitkan di blockchain dan biasanya memiliki fungsi tertentu di dalam ekosistem.'},
    stablecoin:{title:'Stablecoin', body:'Token yang dirancang untuk mengikuti nilai yang relatif stabil, biasanya mata uang fiat seperti dolar AS.'},
    peg:{title:'Peg', body:'Hubungan nilai target yang ingin dipertahankan token terhadap aset lain, misalnya 1:1 dengan USD.'},
    liquidity:{title:'Likuiditas', body:'Seberapa mudah suatu aset bisa dibeli atau dijual tanpa perubahan harga yang besar.'},
    defi:{title:'DeFi', body:'Layanan keuangan berbasis blockchain seperti trading atau pinjam-meminjam tanpa bank tradisional di tengahnya.'},
    lending:{title:'Lending', body:'Membiarkan pihak lain meminjam aset, biasanya dengan bunga atau jaminan.'},
    flashLoan:{title:'Flash Loan', body:'Pinjaman DeFi yang dipinjam dan harus dilunasi dalam satu transaksi blockchain.'},
    nft:{title:'NFT', body:'Token unik yang mewakili kepemilikan atau identitas suatu item digital maupun fisik.'},
    mint:{title:'Mint', body:'Membuat dan menerbitkan token atau NFT baru di blockchain.'}
  };
  glossaryEntries.pt = {
    blockchain:{title:'Blockchain', body:'Um livro-razão compartilhado mantido por muitos computadores para que os registros possam ser verificados sem depender de uma só empresa.'},
    mining:{title:'Mineração', body:'O processo usado por redes proof-of-work para validar transações e adicionar novos blocos.'},
    wallet:{title:'Carteira', body:'A ferramenta que gerencia suas chaves e permite acessar, enviar e receber criptoativos.'},
    smartContract:{title:'Contrato Inteligente', body:'Código na blockchain que executa automaticamente quando suas condições são atendidas.'},
    gasFee:{title:'Taxa de Gas', body:'A taxa de rede paga para processar e registrar uma transação.'},
    layer1:{title:'Layer 1', body:'A rede blockchain principal, com suas próprias regras, segurança e histórico de transações.'},
    tps:{title:'TPS', body:'Transações por segundo. É uma forma de medir quantas transações a rede consegue processar.'},
    validator:{title:'Validador', body:'Participante que ajuda a verificar e confirmar transações e blocos em algumas blockchains.'},
    remittance:{title:'Remessa', body:'Envio de dinheiro entre países ou regiões.'},
    centralization:{title:'Centralização', body:'Uma estrutura em que o controle fica concentrado em um grupo pequeno.'},
    exchange:{title:'Exchange', body:'Plataforma em que usuários compram, vendem e negociam criptoativos.'},
    token:{title:'Token', body:'Ativo digital emitido em uma blockchain, geralmente com uma função específica dentro de um ecossistema.'},
    stablecoin:{title:'Stablecoin', body:'Token projetado para acompanhar um valor relativamente estável, muitas vezes ligado ao dólar.'},
    peg:{title:'Paridade', body:'A relação de valor-alvo que um token tenta manter com outro ativo, como 1:1 com o USD.'},
    liquidity:{title:'Liquidez', body:'A facilidade de comprar ou vender um ativo sem causar grande mudança de preço.'},
    defi:{title:'DeFi', body:'Serviços financeiros em blockchain, como negociação e empréstimos, sem um banco tradicional no meio.'},
    lending:{title:'Empréstimo', body:'Disponibilizar ativos para que outra pessoa tome emprestado, normalmente com juros ou garantia.'},
    flashLoan:{title:'Flash Loan', body:'Empréstimo DeFi que é tomado e pago dentro de uma única transação blockchain.'},
    nft:{title:'NFT', body:'Token único que representa propriedade ou identidade de um item específico, digital ou físico.'},
    mint:{title:'Mint', body:'Criar e emitir um novo token ou NFT na blockchain.'}
  };
  glossaryEntries.tr = {
    blockchain:{title:'Blockchain', body:'Kayıtların tek bir şirkete bağlı olmadan doğrulanabilmesi için birçok bilgisayar tarafından tutulan ortak defterdir.'},
    mining:{title:'Madencilik', body:'Proof-of-work ağlarında işlemleri doğrulamak ve yeni blok eklemek için kullanılan süreçtir.'},
    wallet:{title:'Cüzdan', body:'Anahtarlarınızı yöneten ve kripto varlıklara erişmenizi, gönderip almanızı sağlayan araçtır.'},
    smartContract:{title:'Akıllı Sözleşme', body:'Koşulları sağlandığında blockchain üzerinde otomatik çalışan koddur.'},
    gasFee:{title:'Gas Ücreti', body:'Bir işlemi işlemek ve kaydetmek için ödenen ağ ücretidir.'},
    layer1:{title:'Layer 1', body:'Kendi kuralları, güvenliği ve işlem geçmişi olan temel blockchain ağıdır.'},
    tps:{title:'TPS', body:'Saniye başına işlem sayısıdır. Ağın ne kadar işlem işleyebildiğini anlatır.'},
    validator:{title:'Doğrulayıcı', body:'Bazı blockchain ağlarında işlemleri ve blokları kontrol edip onaylayan katılımcıdır.'},
    remittance:{title:'Havale', body:'Bir ülkeden başka bir ülkeye para gönderimidir.'},
    centralization:{title:'Merkezileşme', body:'Kontrolün geniş şekilde dağılmak yerine küçük bir grubun elinde toplanmasıdır.'},
    exchange:{title:'Borsa', body:'Kripto varlıkların alınıp satıldığı ve takas edildiği platformdur.'},
    token:{title:'Token', body:'Blockchain üzerinde çıkarılan ve çoğu zaman belirli bir kullanım amacı taşıyan dijital varlıktır.'},
    stablecoin:{title:'Stablecoin', body:'Genellikle ABD doları gibi daha istikrarlı bir değeri takip etmek için tasarlanmış tokendir.'},
    peg:{title:'Sabit Parite', body:'Bir tokenin başka bir varlıkla, örneğin 1:1 USD ile, korumaya çalıştığı hedef değer ilişkisidir.'},
    liquidity:{title:'Likidite', body:'Bir varlığın fiyatı fazla etkilemeden ne kadar kolay alınıp satılabildiğini anlatır.'},
    defi:{title:'DeFi', body:'Geleneksel banka olmadan blockchain üzerinde çalışan finansal hizmetlerdir.'},
    lending:{title:'Borç Verme', body:'Varlıkların faiz veya teminat karşılığında başkasına kullandırılmasıdır.'},
    flashLoan:{title:'Flash Loan', body:'Tek bir blockchain işlemi içinde alınıp geri ödenen DeFi kredisidir.'},
    nft:{title:'NFT', body:'Belirli bir dijital ya da fiziksel öğenin sahipliğini veya kimliğini temsil eden benzersiz tokendir.'},
    mint:{title:'Mint', body:'Blockchain üzerinde yeni bir token veya NFT oluşturup yayımlamaktır.'}
  };
  glossaryEntries.ar = {
    blockchain:{title:'بلوكتشين', body:'دفتر أستاذ مشترك تحتفظ به أجهزة كثيرة بحيث يمكن التحقق من السجلات دون الاعتماد على شركة واحدة.'},
    mining:{title:'التعدين', body:'العملية التي تستخدمها شبكات إثبات العمل للتحقق من المعاملات وإضافة كتل جديدة.'},
    wallet:{title:'المحفظة', body:'الأداة التي تدير مفاتيحك وتسمح لك بالوصول إلى الأصول الرقمية وإرسالها واستلامها.'},
    smartContract:{title:'عقد ذكي', body:'كود على البلوكشين يعمل تلقائياً عندما تتحقق شروطه.'},
    gasFee:{title:'رسوم الغاز', body:'رسوم الشبكة التي تُدفع لمعالجة المعاملة وتسجيلها.'},
    layer1:{title:'الطبقة الأولى', body:'شبكة البلوكشين الأساسية التي تمتلك قواعدها وأمانها وسجل معاملاتها الخاص.'},
    tps:{title:'المعاملات في الثانية', body:'مقياس يوضح عدد المعاملات التي تستطيع الشبكة معالجتها كل ثانية.'},
    validator:{title:'المدقق', body:'مشارك يساعد على فحص المعاملات والكتل وتأكيدها في بعض الشبكات.'},
    remittance:{title:'تحويلات مالية', body:'إرسال الأموال عبر الحدود من دولة إلى أخرى.'},
    centralization:{title:'المركزية', body:'حالة يكون فيها التحكم متركزاً في مجموعة صغيرة بدلاً من توزيعه على نطاق واسع.'},
    exchange:{title:'منصة تداول', body:'منصة يشتري ويبيع ويتبادل فيها المستخدمون الأصول الرقمية.'},
    token:{title:'توكن', body:'أصل رقمي يُصدر على البلوكشين وغالباً يكون له استخدام محدد داخل نظام معيّن.'},
    stablecoin:{title:'عملة مستقرة', body:'توكن صُمم ليتتبع قيمة أكثر استقراراً، وغالباً ما يرتبط بالدولار الأمريكي.'},
    peg:{title:'الربط السعري', body:'العلاقة السعرية المستهدفة التي يحاول التوكن الحفاظ عليها مع أصل آخر مثل 1:1 مع الدولار.'},
    liquidity:{title:'السيولة', body:'مدى سهولة شراء الأصل أو بيعه دون التسبب في تغير كبير في السعر.'},
    defi:{title:'التمويل اللامركزي', body:'خدمات مالية تعمل على البلوكشين مثل التداول أو الإقراض من دون بنك تقليدي في الوسط.'},
    lending:{title:'الإقراض', body:'إتاحة الأصول للآخرين لاقتراضها مقابل فائدة أو ضمان.'},
    flashLoan:{title:'القرض السريع', body:'قرض DeFi يتم اقتراضه وسداده داخل معاملة بلوكشين واحدة.'},
    nft:{title:'NFT', body:'توكن فريد يمثل ملكية أو هوية عنصر محدد رقمي أو مادي.'},
    mint:{title:'سك', body:'إنشاء وإصدار توكن أو NFT جديد على البلوكشين.'}
  };
  glossaryEntries.vi = {
    blockchain:{title:'Blockchain', body:'Sổ cái dùng chung được nhiều máy tính cùng duy trì để dữ liệu có thể được kiểm chứng mà không phụ thuộc vào một công ty.'},
    mining:{title:'Đào coin', body:'Quy trình mà các mạng proof-of-work dùng để xác thực giao dịch và thêm khối mới.'},
    wallet:{title:'Ví', body:'Công cụ quản lý khóa và giúp bạn truy cập, gửi, nhận tài sản số.'},
    smartContract:{title:'Hợp đồng thông minh', body:'Đoạn mã trên blockchain tự chạy khi các điều kiện đã được đáp ứng.'},
    gasFee:{title:'Phí gas', body:'Phí mạng được trả để xử lý và ghi lại giao dịch.'},
    layer1:{title:'Layer 1', body:'Mạng blockchain nền tảng có quy tắc, bảo mật và lịch sử giao dịch riêng.'},
    tps:{title:'TPS', body:'Số giao dịch mỗi giây. Đây là một cách mô tả năng lực xử lý của mạng.'},
    validator:{title:'Trình xác thực', body:'Người tham gia mạng giúp kiểm tra và xác nhận giao dịch cũng như khối.'},
    remittance:{title:'Chuyển tiền', body:'Việc gửi tiền qua biên giới từ quốc gia này sang quốc gia khác.'},
    centralization:{title:'Tập trung hóa', body:'Tình trạng quyền kiểm soát nằm trong tay một nhóm nhỏ thay vì được phân tán rộng.'},
    exchange:{title:'Sàn giao dịch', body:'Nền tảng để người dùng mua, bán và trao đổi tài sản số.'},
    token:{title:'Token', body:'Tài sản số được phát hành trên blockchain và thường có vai trò cụ thể trong một hệ sinh thái.'},
    stablecoin:{title:'Stablecoin', body:'Token được thiết kế để bám theo một giá trị ổn định hơn, thường là đô la Mỹ.'},
    peg:{title:'Neo giá', body:'Mối quan hệ giá mục tiêu mà token cố duy trì với tài sản khác, ví dụ 1:1 với USD.'},
    liquidity:{title:'Thanh khoản', body:'Mức độ dễ dàng khi mua hoặc bán tài sản mà không làm giá thay đổi mạnh.'},
    defi:{title:'DeFi', body:'Các dịch vụ tài chính trên blockchain như giao dịch hoặc cho vay mà không cần ngân hàng truyền thống ở giữa.'},
    lending:{title:'Cho vay', body:'Cho người khác mượn tài sản, thường đi kèm lãi suất hoặc tài sản thế chấp.'},
    flashLoan:{title:'Flash Loan', body:'Khoản vay DeFi được vay và hoàn trả ngay trong một giao dịch blockchain.'},
    nft:{title:'NFT', body:'Token độc nhất dùng để đại diện quyền sở hữu hoặc danh tính của một vật phẩm cụ thể.'},
    mint:{title:'Đúc', body:'Tạo và phát hành token hoặc NFT mới trên blockchain.'}
  };
  glossaryEntries.es = {
    blockchain:{title:'Blockchain', body:'Un libro mayor compartido que muchos ordenadores mantienen para que los registros puedan verificarse sin depender de una sola empresa.'},
    mining:{title:'Minería', body:'El proceso que usan las redes proof-of-work para validar transacciones y añadir nuevos bloques.'},
    wallet:{title:'Billetera', body:'La herramienta que gestiona tus claves y te permite acceder, enviar y recibir criptoactivos.'},
    smartContract:{title:'Contrato Inteligente', body:'Código en la blockchain que se ejecuta automáticamente cuando se cumplen sus condiciones.'},
    gasFee:{title:'Tarifa de Gas', body:'La comisión de red que se paga para procesar y registrar una transacción.'},
    layer1:{title:'Capa 1', body:'La red blockchain base que tiene sus propias reglas, seguridad e historial de transacciones.'},
    tps:{title:'TPS', body:'Transacciones por segundo. Es una forma de describir cuántas transacciones puede procesar una red.'},
    validator:{title:'Validador', body:'Participante que ayuda a revisar y confirmar transacciones y bloques en algunas redes.'},
    remittance:{title:'Remesa', body:'Un envío de dinero entre países o regiones.'},
    centralization:{title:'Centralización', body:'Una estructura en la que el control está concentrado en un grupo pequeño.'},
    exchange:{title:'Exchange', body:'Plataforma donde los usuarios compran, venden e intercambian criptoactivos.'},
    token:{title:'Token', body:'Activo digital emitido en una blockchain y que normalmente tiene una función específica en un ecosistema.'},
    stablecoin:{title:'Stablecoin', body:'Token diseñado para seguir un valor relativamente estable, muchas veces vinculado al dólar estadounidense.'},
    peg:{title:'Paridad', body:'La relación de valor objetivo que un token intenta mantener con otro activo, como 1:1 con USD.'},
    liquidity:{title:'Liquidez', body:'La facilidad para comprar o vender un activo sin provocar un gran cambio de precio.'},
    defi:{title:'DeFi', body:'Servicios financieros en blockchain, como trading o préstamos, sin un banco tradicional en medio.'},
    lending:{title:'Préstamo', body:'Permitir que otra persona tome prestados activos, normalmente con interés o garantía.'},
    flashLoan:{title:'Flash Loan', body:'Préstamo DeFi que se toma y se devuelve dentro de una sola transacción blockchain.'},
    nft:{title:'NFT', body:'Token único que representa la propiedad o identidad de un elemento específico, digital o físico.'},
    mint:{title:'Acuñar', body:'Crear y emitir un nuevo token o NFT en la blockchain.'}
  };

  faqEntries.en = {
    bitcoin:{title:'What is Bitcoin?', body:'Bitcoin is the first major cryptocurrency. It was designed as digital money that works without a bank or central operator.'},
    ethereum:{title:'What is Ethereum?', body:'Ethereum is a blockchain built for programmable smart contracts. It supports many apps, tokens, and NFT projects.'},
    gas:{title:'What is gas fee?', body:'A gas fee is the network fee you pay so a blockchain can process and record your transaction.'},
    solana:{title:'What is Solana?', body:'Solana is a high-speed blockchain known for low transaction costs and fast confirmation times.'},
    networkMatter:{title:'Why does network matter?', body:'Many assets exist on more than one network. If the sending network and receiving network do not match, funds can be delayed or lost.'},
    xrp:{title:'What is XRP?', body:'XRP is a digital asset focused on fast and low-cost payments, especially across borders.'},
    payments:{title:'Why do some coins focus on payments?', body:'Different crypto projects solve different problems. Payment-focused coins try to move value quickly, cheaply, and across countries.'},
    bnb:{title:'What is BNB?', body:'BNB is the native token used in the BNB Chain ecosystem and for some services connected to Binance.'},
    utilityToken:{title:'What is a utility token?', body:'A utility token is mainly used to access a product, service, fee discount, or feature inside an ecosystem.'},
    usdt:{title:'What is USDT?', body:'USDT is a stablecoin issued by Tether that aims to stay close to 1 US dollar.'},
    stableRisk:{title:'Does stable mean risk-free?', body:'No. Stablecoins aim for price stability, but they can still face reserve, issuer, liquidity, or depeg risk.'},
    aave:{title:'What is AAVE?', body:'AAVE is the token connected to the Aave DeFi lending protocol, which lets users lend and borrow crypto assets.'},
    defiBank:{title:'Is DeFi the same as a bank?', body:'No. DeFi can offer similar functions, but it runs through smart contracts and usually does not provide the same legal protections as a bank.'},
    nft:{title:'What is NFT?', body:'An NFT is a unique token that can represent ownership, identity, or access tied to a specific item.'},
    nftPictures:{title:'Are NFTs just pictures?', body:'No. Images are common, but the important idea is the blockchain record of ownership or access that the NFT represents.'}
  };
  faqEntries.ko = {
    bitcoin:{title:'비트코인이란?', body:'비트코인은 가장 대표적인 초기 암호자산으로, 은행이나 중앙 운영자 없이 작동하는 디지털 돈을 목표로 설계되었습니다.'},
    ethereum:{title:'이더리움이란?', body:'이더리움은 프로그래밍 가능한 스마트 컨트랙트를 위해 만들어진 블록체인으로, 많은 앱과 토큰, NFT 프로젝트가 이 위에서 운영됩니다.'},
    gas:{title:'가스비란?', body:'가스비는 블록체인이 거래를 처리하고 기록하도록 지불하는 네트워크 수수료입니다.'},
    solana:{title:'솔라나란?', body:'솔라나는 빠른 처리 속도와 낮은 수수료로 알려진 고성능 블록체인입니다.'},
    networkMatter:{title:'왜 네트워크가 중요한가요?', body:'같은 자산이 여러 네트워크에 존재할 수 있기 때문입니다. 보내는 네트워크와 받는 네트워크가 다르면 자금이 지연되거나 사라질 수 있습니다.'},
    xrp:{title:'XRP란?', body:'XRP는 특히 국경 간 결제를 더 빠르고 저렴하게 처리하는 데 초점을 둔 디지털 자산입니다.'},
    payments:{title:'왜 어떤 코인은 결제에 집중하나요?', body:'암호자산 프로젝트마다 해결하려는 문제가 다릅니다. 결제 중심 코인은 가치를 빠르고 저렴하게 이동시키는 데 초점을 둡니다.'},
    bnb:{title:'BNB란?', body:'BNB는 BNB Chain 생태계와 Binance 관련 서비스에서 사용되는 기본 토큰입니다.'},
    utilityToken:{title:'유틸리티 토큰이란?', body:'유틸리티 토큰은 생태계 안의 서비스 접근, 수수료 할인, 기능 사용 등에 주로 쓰이는 토큰입니다.'},
    usdt:{title:'USDT란?', body:'USDT는 테더가 발행한 스테이블코인으로, 1달러에 가깝게 유지되는 것을 목표로 합니다.'},
    stableRisk:{title:'스테이블하다는 말은 무위험이라는 뜻인가요?', body:'아닙니다. 스테이블코인은 가격 안정을 목표로 하지만 준비금, 발행사, 유동성, 디페그 위험이 남아 있습니다.'},
    aave:{title:'AAVE란?', body:'AAVE는 사용자가 암호자산을 빌려주고 빌릴 수 있게 하는 Aave DeFi 대출 프로토콜과 연결된 토큰입니다.'},
    defiBank:{title:'DeFi는 은행과 같은가요?', body:'아닙니다. DeFi는 비슷한 기능을 제공할 수 있지만 스마트 컨트랙트로 작동하며 은행과 같은 법적 보호를 보통 제공하지 않습니다.'},
    nft:{title:'NFT란?', body:'NFT는 특정 항목과 연결된 소유권, 식별, 접근 권한을 나타낼 수 있는 고유한 토큰입니다.'},
    nftPictures:{title:'NFT는 그냥 그림인가요?', body:'아닙니다. 이미지가 흔할 뿐이고, 핵심은 NFT가 나타내는 블록체인상의 소유권이나 접근 기록입니다.'}
  };
  faqEntries.th = {
    bitcoin:{title:'Bitcoin คืออะไร?', body:'Bitcoin คือคริปโตตัวแรกที่เป็นที่รู้จักอย่างกว้างขวาง ออกแบบมาให้เป็นเงินดิจิทัลที่ทำงานได้โดยไม่ต้องมีธนาคารกลาง.'},
    ethereum:{title:'Ethereum คืออะไร?', body:'Ethereum คือบล็อกเชนสำหรับสมาร์ตคอนแทรกต์แบบเขียนโปรแกรมได้ รองรับแอป โทเค็น และโปรเจกต์ NFT จำนวนมาก.'},
    gas:{title:'Gas fee คืออะไร?', body:'Gas fee คือค่าธรรมเนียมเครือข่ายที่จ่ายเพื่อให้บล็อกเชนประมวลผลและบันทึกธุรกรรม.'},
    solana:{title:'Solana คืออะไร?', body:'Solana คือบล็อกเชนความเร็วสูงที่ขึ้นชื่อเรื่องค่าธรรมเนียมต่ำและการยืนยันธุรกรรมที่รวดเร็ว.'},
    networkMatter:{title:'ทำไมเครือข่ายจึงสำคัญ?', body:'สินทรัพย์เดียวกันอาจอยู่ได้หลายเครือข่าย ถ้าเครือข่ายต้นทางและปลายทางไม่ตรงกัน เงินอาจล่าช้าหรือสูญหาย.'},
    xrp:{title:'XRP คืออะไร?', body:'XRP คือสินทรัพย์ดิจิทัลที่เน้นการชำระเงินที่รวดเร็วและมีต้นทุนต่ำ โดยเฉพาะการโอนข้ามประเทศ.'},
    payments:{title:'ทำไมบางเหรียญจึงเน้นเรื่องการชำระเงิน?', body:'โปรเจกต์คริปโตแต่ละตัวแก้ปัญหาคนละแบบ เหรียญสายการชำระเงินมุ่งให้การย้ายมูลค่ารวดเร็ว ถูก และใช้งานข้ามประเทศได้.'},
    bnb:{title:'BNB คืออะไร?', body:'BNB คือโทเค็นหลักของระบบนิเวศ BNB Chain และบริการบางส่วนที่เกี่ยวข้องกับ Binance.'},
    utilityToken:{title:'Utility token คืออะไร?', body:'Utility token คือโทเค็นที่ใช้เข้าถึงบริการ ส่วนลดค่าธรรมเนียม หรือฟังก์ชันบางอย่างภายในระบบนิเวศ.'},
    usdt:{title:'USDT คืออะไร?', body:'USDT คือสเตเบิลคอยน์ที่ออกโดย Tether และตั้งเป้าให้มีมูลค่าใกล้เคียง 1 ดอลลาร์สหรัฐ.'},
    stableRisk:{title:'คำว่า stable แปลว่าไม่มีความเสี่ยงหรือไม่?', body:'ไม่ใช่ สเตเบิลคอยน์ตั้งเป้าความเสถียรของราคา แต่ยังมีความเสี่ยงด้านเงินสำรอง ผู้ออกเหรียญ สภาพคล่อง และการหลุดเพก.'},
    aave:{title:'AAVE คืออะไร?', body:'AAVE คือโทเค็นที่เชื่อมกับโปรโตคอลกู้ยืม DeFi ของ Aave ซึ่งให้ผู้ใช้ปล่อยกู้และกู้สินทรัพย์ดิจิทัลได้.'},
    defiBank:{title:'DeFi เหมือนธนาคารหรือไม่?', body:'ไม่เหมือนกัน DeFi อาจให้บริการคล้ายกัน แต่ทำงานด้วยสมาร์ตคอนแทรกต์และมักไม่มีการคุ้มครองทางกฎหมายแบบธนาคาร.'},
    nft:{title:'NFT คืออะไร?', body:'NFT คือโทเค็นเฉพาะที่ใช้แทนความเป็นเจ้าของ ตัวตน หรือสิทธิ์เข้าถึงที่ผูกกับสิ่งใดสิ่งหนึ่ง.'},
    nftPictures:{title:'NFT เป็นแค่รูปภาพหรือ?', body:'ไม่ใช่ รูปภาพเป็นเพียงกรณีที่พบได้บ่อย แต่แก่นสำคัญคือบันทึกความเป็นเจ้าของหรือสิทธิ์เข้าถึงบนบล็อกเชน.'}
  };
  faqEntries.id = {
    bitcoin:{title:'Apa itu Bitcoin?', body:'Bitcoin adalah kripto besar pertama yang dikenal luas. Bitcoin dirancang sebagai uang digital yang bisa berjalan tanpa bank sentral.'},
    ethereum:{title:'Apa itu Ethereum?', body:'Ethereum adalah blockchain untuk smart contract yang dapat diprogram. Banyak aplikasi, token, dan proyek NFT dibangun di atasnya.'},
    gas:{title:'Mengapa ada gas fee?', body:'Gas fee adalah biaya jaringan yang dibayar agar blockchain memproses dan mencatat transaksi Anda.'},
    solana:{title:'Apa itu Solana?', body:'Solana adalah blockchain berkecepatan tinggi yang dikenal karena biaya rendah dan konfirmasi cepat.'},
    networkMatter:{title:'Mengapa jaringan itu penting?', body:'Satu aset bisa ada di lebih dari satu jaringan. Jika jaringan kirim dan jaringan terima tidak sama, dana bisa tertunda atau hilang.'},
    xrp:{title:'Apa itu XRP?', body:'XRP adalah aset digital yang fokus pada pembayaran cepat dan murah, terutama lintas negara.'},
    payments:{title:'Mengapa beberapa koin fokus pada pembayaran?', body:'Setiap proyek kripto mencoba memecahkan masalah yang berbeda. Koin pembayaran berusaha memindahkan nilai dengan cepat dan murah.'},
    bnb:{title:'Apa itu BNB?', body:'BNB adalah token utama di ekosistem BNB Chain dan beberapa layanan yang terhubung dengan Binance.'},
    utilityToken:{title:'Apa itu utility token?', body:'Utility token terutama dipakai untuk mengakses produk, diskon biaya, atau fitur tertentu di dalam suatu ekosistem.'},
    usdt:{title:'Apa itu USDT?', body:'USDT adalah stablecoin yang diterbitkan oleh Tether dan ditujukan untuk tetap dekat dengan 1 dolar AS.'},
    stableRisk:{title:'Apakah stable berarti bebas risiko?', body:'Tidak. Stablecoin mengejar kestabilan harga, tetapi tetap memiliki risiko cadangan, penerbit, likuiditas, dan depeg.'},
    aave:{title:'Apa itu AAVE?', body:'AAVE adalah token yang terkait dengan protokol pinjam-meminjam DeFi Aave, yang memungkinkan pengguna meminjamkan dan meminjam kripto.'},
    defiBank:{title:'Apakah DeFi sama dengan bank?', body:'Tidak. DeFi bisa memberi fungsi mirip bank, tetapi berjalan lewat smart contract dan biasanya tidak memberikan perlindungan hukum yang sama.'},
    nft:{title:'Apa itu NFT?', body:'NFT adalah token unik yang dapat mewakili kepemilikan, identitas, atau akses yang terhubung ke item tertentu.'},
    nftPictures:{title:'Apakah NFT hanya gambar?', body:'Tidak. Gambar memang umum, tetapi inti NFT adalah catatan kepemilikan atau akses yang bisa diverifikasi di blockchain.'}
  };
  faqEntries.pt = {
    bitcoin:{title:'O que é Bitcoin?', body:'Bitcoin é a primeira grande criptomoeda. Foi criado como dinheiro digital que funciona sem banco ou operador central.'},
    ethereum:{title:'O que é Ethereum?', body:'Ethereum é uma blockchain voltada para contratos inteligentes programáveis. Muitos apps, tokens e projetos NFT usam Ethereum.'},
    gas:{title:'O que é gas fee?', body:'Gas fee é a taxa de rede paga para que a blockchain processe e registre sua transação.'},
    solana:{title:'O que é Solana?', body:'Solana é uma blockchain de alta velocidade conhecida por custos baixos e confirmações rápidas.'},
    networkMatter:{title:'Por que a rede importa?', body:'Muitos ativos existem em mais de uma rede. Se a rede de envio e a de recebimento não combinarem, os fundos podem atrasar ou se perder.'},
    xrp:{title:'O que é XRP?', body:'XRP é um ativo digital focado em pagamentos rápidos e de baixo custo, especialmente entre países.'},
    payments:{title:'Por que algumas moedas focam em pagamentos?', body:'Cada projeto cripto tenta resolver um problema diferente. Moedas focadas em pagamentos querem mover valor com rapidez e baixo custo.'},
    bnb:{title:'O que é BNB?', body:'BNB é o token nativo usado no ecossistema BNB Chain e em alguns serviços ligados à Binance.'},
    utilityToken:{title:'O que é um utility token?', body:'Utility token é um token usado principalmente para acessar produto, desconto de taxa ou recurso dentro de um ecossistema.'},
    usdt:{title:'O que é USDT?', body:'USDT é uma stablecoin emitida pela Tether que busca permanecer próxima de 1 dólar americano.'},
    stableRisk:{title:'"Stable" significa sem risco?', body:'Não. Stablecoins buscam estabilidade de preço, mas ainda podem enfrentar riscos de reservas, emissor, liquidez e perda de paridade.'},
    aave:{title:'O que é AAVE?', body:'AAVE é o token ligado ao protocolo DeFi de empréstimos Aave, que permite emprestar e tomar cripto emprestado.'},
    defiBank:{title:'DeFi é igual a um banco?', body:'Não. DeFi pode oferecer funções parecidas, mas roda por contratos inteligentes e normalmente não oferece as mesmas proteções legais de um banco.'},
    nft:{title:'O que é NFT?', body:'NFT é um token único que pode representar propriedade, identidade ou acesso ligado a um item específico.'},
    nftPictures:{title:'NFTs são só imagens?', body:'Não. Imagens são comuns, mas o ponto principal é o registro de propriedade ou acesso verificável na blockchain.'}
  };
  faqEntries.tr = {
    bitcoin:{title:'Bitcoin nedir?', body:'Bitcoin ilk büyük kripto paradır. Banka ya da merkezi operatör olmadan çalışan dijital para olarak tasarlanmıştır.'},
    ethereum:{title:'Ethereum nedir?', body:'Ethereum programlanabilir akıllı sözleşmeler için kurulmuş bir blockchain ağıdır. Birçok uygulama, token ve NFT projesi bunun üstünde çalışır.'},
    gas:{title:'Gas ücreti nedir?', body:'Gas ücreti, blockchainin işleminizi işleyip kaydetmesi için ödediğiniz ağ ücretidir.'},
    solana:{title:'Solana nedir?', body:'Solana düşük işlem maliyetleri ve hızlı onay süreleriyle bilinen yüksek hızlı bir blockchain ağıdır.'},
    networkMatter:{title:'Ağ neden önemlidir?', body:'Birçok varlık birden fazla ağda bulunur. Gönderim ağı ile alım ağı uyuşmazsa fonlar gecikebilir ya da kaybolabilir.'},
    xrp:{title:'XRP nedir?', body:'XRP özellikle sınır ötesi ödemelerde hızlı ve düşük maliyetli transferlere odaklanan dijital varlıktır.'},
    payments:{title:'Bazı coinler neden ödemelere odaklanır?', body:'Her kripto proje farklı bir sorunu çözmeye çalışır. Ödeme odaklı coinler değeri hızlı ve ucuz taşımaya çalışır.'},
    bnb:{title:'BNB nedir?', body:'BNB, BNB Chain ekosisteminde ve Binance ile bağlantılı bazı hizmetlerde kullanılan yerel tokendir.'},
    utilityToken:{title:'Utility token nedir?', body:'Utility token, esas olarak bir ürün, ücret indirimi ya da ekosistem içindeki bir özelliğe erişmek için kullanılan tokendir.'},
    usdt:{title:'USDT nedir?', body:'USDT, Tether tarafından çıkarılan ve 1 ABD dolarına yakın kalmayı hedefleyen stablecoindir.'},
    stableRisk:{title:'"Stable" risksiz anlamına mı gelir?', body:'Hayır. Stablecoinler fiyat istikrarını hedefler ama rezerv, ihraççı, likidite ve peg kaybı riski taşır.'},
    aave:{title:'AAVE nedir?', body:'AAVE, kullanıcıların kripto varlık ödünç verip almasına izin veren Aave DeFi protokolüne bağlı tokendir.'},
    defiBank:{title:'DeFi bankayla aynı şey mi?', body:'Hayır. DeFi benzer işlevler sunabilir ama akıllı sözleşmelerle çalışır ve çoğu zaman banka ile aynı yasal korumaları sağlamaz.'},
    nft:{title:'NFT nedir?', body:'NFT, belirli bir öğeye bağlı sahipliği, kimliği ya da erişimi temsil edebilen benzersiz tokendir.'},
    nftPictures:{title:'NFTler sadece resim midir?', body:'Hayır. Görseller yaygındır ama asıl fikir, NFTnin temsil ettiği doğrulanabilir sahiplik veya erişim kaydıdır.'}
  };
  faqEntries.ar = {
    bitcoin:{title:'ما هو البيتكوين؟', body:'البيتكوين هو أول عملة رقمية كبيرة ومعروفة. صُمم ليعمل كمال رقمي من دون بنك أو جهة تشغيل مركزية.'},
    ethereum:{title:'ما هو إيثريوم؟', body:'إيثريوم هو بلوكتشين مخصص للعقود الذكية القابلة للبرمجة. كثير من التطبيقات والتوكنات ومشاريع NFT تعمل عليه.'},
    gas:{title:'ما هي رسوم الغاز؟', body:'رسوم الغاز هي رسوم الشبكة التي تدفعها لكي تعالج البلوكشين معاملتك وتسجلها.'},
    solana:{title:'ما هو سولانا؟', body:'سولانا بلوكتشين سريع معروف بانخفاض الرسوم وسرعة تأكيد المعاملات.'},
    networkMatter:{title:'لماذا تهم الشبكة؟', body:'كثير من الأصول موجود على أكثر من شبكة. إذا لم تتطابق شبكة الإرسال مع شبكة الاستقبال فقد تتأخر الأموال أو تضيع.'},
    xrp:{title:'ما هو XRP؟', body:'XRP أصل رقمي يركز على المدفوعات السريعة والمنخفضة التكلفة، خصوصاً عبر الحدود.'},
    payments:{title:'لماذا تركز بعض العملات على المدفوعات؟', body:'كل مشروع كريبتو يحاول حل مشكلة مختلفة. العملات الموجهة للمدفوعات تحاول نقل القيمة بسرعة وبتكلفة أقل.'},
    bnb:{title:'ما هو BNB؟', body:'BNB هو التوكن الأساسي في منظومة BNB Chain وبعض الخدمات المرتبطة بـ Binance.'},
    utilityToken:{title:'ما هو التوكن الخدمي؟', body:'التوكن الخدمي يُستخدم أساساً للوصول إلى منتج أو خصم رسوم أو ميزة داخل منظومة معينة.'},
    usdt:{title:'ما هو USDT؟', body:'USDT هو عملة مستقرة تصدرها Tether وتهدف إلى البقاء قريبة من 1 دولار أمريكي.'},
    stableRisk:{title:'هل كلمة "مستقر" تعني بلا مخاطر؟', body:'لا. العملات المستقرة تستهدف ثبات السعر لكنها ما زالت تواجه مخاطر الاحتياطي والجهة المصدرة والسيولة وفقدان الربط.'},
    aave:{title:'ما هو AAVE؟', body:'AAVE هو التوكن المرتبط ببروتوكول الإقراض اللامركزي Aave الذي يسمح للمستخدمين بإقراض واقتراض الأصول الرقمية.'},
    defiBank:{title:'هل DeFi مثل البنك؟', body:'لا. قد يقدم DeFi وظائف مشابهة، لكنه يعمل بالعقود الذكية ولا يمنح عادة الحماية القانونية نفسها التي يوفرها البنك.'},
    nft:{title:'ما هو NFT؟', body:'NFT هو توكن فريد يمكنه تمثيل الملكية أو الهوية أو حق الوصول المرتبط بعنصر محدد.'},
    nftPictures:{title:'هل NFTs مجرد صور؟', body:'لا. الصور شائعة، لكن الفكرة الأساسية هي سجل الملكية أو الوصول القابل للتحقق على البلوكشين.'}
  };
  faqEntries.vi = {
    bitcoin:{title:'Bitcoin là gì?', body:'Bitcoin là đồng tiền mã hóa lớn đầu tiên. Nó được thiết kế như tiền số hoạt động mà không cần ngân hàng hay bên vận hành trung tâm.'},
    ethereum:{title:'Ethereum là gì?', body:'Ethereum là blockchain dành cho hợp đồng thông minh có thể lập trình. Nhiều ứng dụng, token và dự án NFT được xây trên đó.'},
    gas:{title:'Gas fee là gì?', body:'Gas fee là phí mạng bạn trả để blockchain xử lý và ghi lại giao dịch.'},
    solana:{title:'Solana là gì?', body:'Solana là blockchain tốc độ cao nổi tiếng với phí thấp và thời gian xác nhận nhanh.'},
    networkMatter:{title:'Vì sao mạng lưới lại quan trọng?', body:'Nhiều tài sản tồn tại trên nhiều mạng khác nhau. Nếu mạng gửi và mạng nhận không khớp, tiền có thể bị chậm hoặc mất.'},
    xrp:{title:'XRP là gì?', body:'XRP là tài sản số tập trung vào thanh toán nhanh và chi phí thấp, đặc biệt là thanh toán xuyên biên giới.'},
    payments:{title:'Vì sao có những coin tập trung vào thanh toán?', body:'Mỗi dự án crypto giải quyết một vấn đề khác nhau. Coin thanh toán cố gắng chuyển giá trị nhanh, rẻ và qua nhiều quốc gia.'},
    bnb:{title:'BNB là gì?', body:'BNB là token gốc dùng trong hệ sinh thái BNB Chain và một số dịch vụ liên quan đến Binance.'},
    utilityToken:{title:'Utility token là gì?', body:'Utility token chủ yếu được dùng để truy cập sản phẩm, giảm phí hoặc dùng một tính năng trong hệ sinh thái.'},
    usdt:{title:'USDT là gì?', body:'USDT là stablecoin do Tether phát hành và hướng tới việc giữ giá gần 1 đô la Mỹ.'},
    stableRisk:{title:'"Stable" có nghĩa là không có rủi ro?', body:'Không. Stablecoin hướng tới ổn định giá nhưng vẫn có rủi ro về dự trữ, đơn vị phát hành, thanh khoản và mất neo.'},
    aave:{title:'AAVE là gì?', body:'AAVE là token gắn với giao thức cho vay DeFi Aave, cho phép người dùng cho vay và đi vay tài sản số.'},
    defiBank:{title:'DeFi có giống ngân hàng không?', body:'Không. DeFi có thể cung cấp chức năng tương tự, nhưng nó chạy bằng hợp đồng thông minh và thường không có cùng mức bảo vệ pháp lý như ngân hàng.'},
    nft:{title:'NFT là gì?', body:'NFT là token độc nhất có thể đại diện cho quyền sở hữu, danh tính hoặc quyền truy cập gắn với một vật phẩm cụ thể.'},
    nftPictures:{title:'NFT chỉ là ảnh thôi sao?', body:'Không. Hình ảnh là dạng phổ biến, nhưng điều quan trọng là bản ghi quyền sở hữu hoặc quyền truy cập có thể kiểm chứng trên blockchain.'}
  };
  faqEntries.es = {
    bitcoin:{title:'¿Qué es Bitcoin?', body:'Bitcoin es la primera gran criptomoneda. Fue diseñada como dinero digital que funciona sin banco ni operador central.'},
    ethereum:{title:'¿Qué es Ethereum?', body:'Ethereum es una blockchain pensada para contratos inteligentes programables. Muchas apps, tokens y proyectos NFT se construyen sobre ella.'},
    gas:{title:'¿Qué es una gas fee?', body:'La gas fee es la comisión de red que pagas para que la blockchain procese y registre tu transacción.'},
    solana:{title:'¿Qué es Solana?', body:'Solana es una blockchain de alta velocidad conocida por sus comisiones bajas y confirmaciones rápidas.'},
    networkMatter:{title:'¿Por qué importa la red?', body:'Muchos activos existen en más de una red. Si la red de envío y la de recepción no coinciden, los fondos pueden retrasarse o perderse.'},
    xrp:{title:'¿Qué es XRP?', body:'XRP es un activo digital enfocado en pagos rápidos y de bajo costo, especialmente entre países.'},
    payments:{title:'¿Por qué algunas monedas se enfocan en pagos?', body:'Cada proyecto cripto intenta resolver un problema distinto. Las monedas de pago buscan mover valor con rapidez y bajo costo.'},
    bnb:{title:'¿Qué es BNB?', body:'BNB es el token nativo usado en el ecosistema BNB Chain y en algunos servicios vinculados a Binance.'},
    utilityToken:{title:'¿Qué es un utility token?', body:'Un utility token se usa principalmente para acceder a un producto, un descuento de comisión o una función dentro de un ecosistema.'},
    usdt:{title:'¿Qué es USDT?', body:'USDT es una stablecoin emitida por Tether que busca mantenerse cerca de 1 dólar estadounidense.'},
    stableRisk:{title:'¿Stable significa sin riesgo?', body:'No. Las stablecoins buscan estabilidad de precio, pero aún tienen riesgos de reservas, emisor, liquidez y pérdida de paridad.'},
    aave:{title:'¿Qué es AAVE?', body:'AAVE es el token vinculado al protocolo DeFi de préstamos Aave, que permite prestar y pedir prestados criptoactivos.'},
    defiBank:{title:'¿DeFi es igual que un banco?', body:'No. DeFi puede ofrecer funciones parecidas, pero funciona mediante contratos inteligentes y normalmente no ofrece la misma protección legal que un banco.'},
    nft:{title:'¿Qué es un NFT?', body:'Un NFT es un token único que puede representar propiedad, identidad o acceso ligados a un elemento concreto.'},
    nftPictures:{title:'¿Los NFTs son solo imágenes?', body:'No. Las imágenes son comunes, pero la idea central es el registro verificable de propiedad o acceso en la blockchain.'}
  };

  safetyEntries.en = {
    seed:{title:'Seed phrase safety', body:'Your seed phrase is the recovery master key for the wallet. Keep it offline, private, and away from screenshots or cloud storage.'},
    networkMismatch:{title:'Network mismatch caution', body:'Always confirm the sending network and receiving network match before you transfer a coin or token.'},
    networkRisk:{title:'Network risk', body:'Every blockchain has its own reliability and operational risk. Congestion, outages, or validator problems can affect users.'},
    regulatory:{title:'Regulatory risk', body:'Rules, lawsuits, and enforcement actions can affect how a coin is listed, used, or accessed in different countries.'},
    exchange:{title:'Exchange risk', body:'If your assets stay on an exchange, you depend on that platform to hold funds securely and allow withdrawals.'},
    stableDepeg:{title:'Stablecoin depeg risk', body:'A stablecoin can lose its target price if reserves, trust, or liquidity weaken under stress.'},
    defiSmart:{title:'DeFi smart contract risk', body:'Using a DeFi protocol means trusting code. Bugs, exploits, or unsafe upgrades can put funds at risk.'},
    nftScam:{title:'NFT scam prevention', body:'Verify marketplace links, collections, and wallet approval requests carefully before you connect or sign.'}
  };
  safetyEntries.ko = {
    seed:{title:'시드 문구 안전', body:'시드 문구는 지갑을 복구하는 마스터 키입니다. 오프라인에 보관하고, 스크린샷이나 클라우드에 저장하지 마세요.'},
    networkMismatch:{title:'네트워크 불일치 주의', body:'코인이나 토큰을 보낼 때는 보내는 네트워크와 받는 네트워크가 정확히 같은지 먼저 확인해야 합니다.'},
    networkRisk:{title:'\uB124\uD2B8\uC6CC\uD06C \uB9AC\uC2A4\uD06C', body:'블록체인마다 운영 안정성과 구조적 위험이 다릅니다. 혼잡, 중단, 검증자 문제는 사용자에게 직접 영향을 줄 수 있습니다.'},
    regulatory:{title:'\uADDC\uC81C \uB9AC\uC2A4\uD06C', body:'법률, 소송, 규제 집행은 코인의 상장 여부와 사용 방식, 접근 가능성에 영향을 줄 수 있습니다.'},
    exchange:{title:'\uAC70\uB798\uC18C \uB9AC\uC2A4\uD06C', body:'자산을 거래소에 두면 그 플랫폼이 안전하게 보관하고 출금을 허용해주기를 믿어야 합니다.'},
    stableDepeg:{title:'스테이블코인 디페그 위험', body:'준비금, 신뢰, 유동성이 약해지면 스테이블코인이 목표 가격에서 이탈할 수 있습니다.'},
    defiSmart:{title:'DeFi 스마트 컨트랙트 위험', body:'DeFi를 사용할 때는 코드를 신뢰하는 셈입니다. 버그나 해킹, 위험한 업그레이드가 자금을 위협할 수 있습니다.'},
    nftScam:{title:'NFT 사기 방지', body:'지갑을 연결하거나 서명하기 전에 마켓플레이스 링크, 컬렉션, 승인 요청이 진짜인지 꼭 확인하세요.'}
  };
  safetyEntries.th = {
    seed:{title:'ความปลอดภัยของ Seed phrase', body:'Seed phrase คือกุญแจกู้คืนหลักของวอลเล็ต ควรเก็บแบบออฟไลน์ เป็นความลับ และไม่เก็บไว้ในภาพหน้าจอหรือคลาวด์.'},
    networkMismatch:{title:'\u0E23\u0E30\u0E27\u0E31\u0E07\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19', body:'ก่อนโอนเหรียญหรือโทเค็น ต้องตรวจสอบว่าเครือข่ายฝั่งส่งและฝั่งรับตรงกันจริง.'},
    networkRisk:{title:'ความเสี่ยงของเครือข่าย', body:'บล็อกเชนแต่ละเครือข่ายมีความเสี่ยงด้านเสถียรภาพและการดำเนินงานต่างกัน เช่น ความแออัด การหยุดทำงาน หรือปัญหาผู้ตรวจสอบ.'},
    regulatory:{title:'ความเสี่ยงด้านกฎระเบียบ', body:'กฎหมาย คดีความ และการบังคับใช้ของหน่วยงานกำกับอาจส่งผลต่อการลิสต์ การใช้งาน และการเข้าถึงเหรียญในแต่ละประเทศ.'},
    exchange:{title:'ความเสี่ยงของตลาดแลกเปลี่ยน', body:'ถ้าทรัพย์สินอยู่บนตลาดแลกเปลี่ยน คุณต้องพึ่งพาแพลตฟอร์มนั้นให้ดูแลสินทรัพย์และเปิดให้ถอนเงินได้.'},
    stableDepeg:{title:'ความเสี่ยง Stablecoin หลุดเพก', body:'Stablecoin อาจหลุดจากราคาเป้าหมายได้ หากเงินสำรอง ความเชื่อมั่น หรือสภาพคล่องอ่อนแอลง.'},
    defiSmart:{title:'ความเสี่ยงสมาร์ตคอนแทรกต์ DeFi', body:'การใช้ DeFi คือการเชื่อถือโค้ด ข้อบกพร่อง การโจมตี หรือการอัปเกรดที่ไม่ปลอดภัยอาจทำให้เงินเสี่ยงได้.'},
    nftScam:{title:'การป้องกันการหลอกลวง NFT', body:'ตรวจสอบลิงก์มาร์เก็ตเพลส คอลเลกชัน และคำขออนุมัติวอลเล็ตให้แน่ใจก่อนเชื่อมต่อหรือกดลงนาม.'}
  };
  safetyEntries.id = {
    seed:{title:'Keamanan seed phrase', body:'Seed phrase adalah kunci pemulihan utama wallet. Simpan offline, rahasia, dan jauh dari screenshot atau cloud.'},
    networkMismatch:{title:'Kehati-hatian jaringan tidak cocok', body:'Selalu pastikan jaringan pengiriman dan jaringan penerimaan cocok sebelum mengirim koin atau token.'},
    networkRisk:{title:'Risiko jaringan', body:'Setiap blockchain memiliki risiko operasional dan keandalannya sendiri. Kemacetan, gangguan, atau masalah validator bisa berdampak ke pengguna.'},
    regulatory:{title:'Risiko regulasi', body:'Aturan, gugatan, dan tindakan regulator bisa memengaruhi bagaimana suatu koin dicatat, dipakai, atau diakses di berbagai negara.'},
    exchange:{title:'Risiko bursa', body:'Jika aset disimpan di bursa, Anda bergantung pada platform itu untuk menjaga dana dengan aman dan mengizinkan penarikan.'},
    stableDepeg:{title:'Risiko stablecoin depeg', body:'Stablecoin bisa keluar dari harga targetnya jika cadangan, kepercayaan, atau likuiditas melemah.'},
    defiSmart:{title:'Risiko smart contract DeFi', body:'Menggunakan protokol DeFi berarti mempercayai kode. Bug, eksploit, atau upgrade yang tidak aman bisa membahayakan dana.'},
    nftScam:{title:'Pencegahan scam NFT', body:'Periksa dengan teliti tautan marketplace, koleksi, dan permintaan persetujuan wallet sebelum terhubung atau menandatangani.'}
  };
  safetyEntries.pt = {
    seed:{title:'Segurança da seed phrase', body:'A seed phrase é a chave mestra de recuperação da carteira. Guarde offline, em privado, e longe de capturas de tela ou nuvem.'},
    networkMismatch:{title:'Cuidado com rede incompatível', body:'Antes de transferir uma moeda ou token, confirme sempre que a rede de envio e a de recebimento são a mesma.'},
    networkRisk:{title:'Risco de rede', body:'Cada blockchain tem seu próprio risco operacional e de confiabilidade. Congestionamento, interrupções ou problemas de validadores afetam usuários.'},
    regulatory:{title:'Risco regulatório', body:'Regras, processos e ações de reguladores podem afetar como uma moeda é listada, usada ou acessada em diferentes países.'},
    exchange:{title:'Risco de exchange', body:'Se seus ativos ficam em uma exchange, você depende dessa plataforma para guardar os fundos com segurança e permitir saques.'},
    stableDepeg:{title:'Risco de depeg de stablecoin', body:'Uma stablecoin pode se afastar do preço-alvo se reservas, confiança ou liquidez enfraquecerem.'},
    defiSmart:{title:'Risco de contrato inteligente DeFi', body:'Usar um protocolo DeFi significa confiar no código. Bugs, exploits ou upgrades inseguros podem colocar os fundos em risco.'},
    nftScam:{title:'Prevenção de golpes NFT', body:'Verifique com cuidado links de marketplace, coleções e pedidos de aprovação da carteira antes de conectar ou assinar.'}
  };
  safetyEntries.tr = {
    seed:{title:'Seed phrase güvenliği', body:'Seed phrase cüzdanın ana kurtarma anahtarıdır. Çevrimdışı ve gizli saklayın; ekran görüntüsünde veya bulutta tutmayın.'},
    networkMismatch:{title:'Ağ uyumsuzluğu uyarısı', body:'Coin ya da token göndermeden önce gönderim ağı ile alım ağının tam olarak aynı olduğunu doğrulayın.'},
    networkRisk:{title:'Ağ riski', body:'Her blockchain kendi çalışma ve güvenilirlik risklerini taşır. Yoğunluk, kesinti veya doğrulayıcı sorunları kullanıcıyı etkileyebilir.'},
    regulatory:{title:'Düzenleyici risk', body:'Kurallar, davalar ve yaptırımlar bir coinin nasıl listelendiğini, kullanıldığını veya erişildiğini etkileyebilir.'},
    exchange:{title:'Borsa riski', body:'Varlıklarınız borsada duruyorsa fonları güvenle saklaması ve çekime izin vermesi için o platforma bağlısınız.'},
    stableDepeg:{title:'Stablecoin peg kaybı riski', body:'Rezervler, güven ya da likidite zayıflarsa stablecoin hedef fiyatından uzaklaşabilir.'},
    defiSmart:{title:'DeFi akıllı sözleşme riski', body:'DeFi protokolü kullanmak koda güvenmek demektir. Hatalar, açıklar veya güvensiz yükseltmeler fonları riske atabilir.'},
    nftScam:{title:'NFT dolandırıcılık önleme', body:'Bağlanmadan veya imzalamadan önce marketplace bağlantılarını, koleksiyonları ve cüzdan onay isteklerini dikkatle doğrulayın.'}
  };
  safetyEntries.ar = {
    seed:{title:'أمان عبارة البذرة', body:'عبارة البذرة هي مفتاح الاسترداد الرئيسي للمحفظة. احفظها دون اتصال وبشكل سري ولا تضعها في لقطة شاشة أو سحابة.'},
    networkMismatch:{title:'تحذير عدم تطابق الشبكة', body:'قبل إرسال أي عملة أو توكن تأكد دائماً من أن شبكة الإرسال وشبكة الاستقبال متطابقتان.'},
    networkRisk:{title:'مخاطر الشبكة', body:'لكل بلوكتشين مخاطر تشغيلية ومخاطر موثوقية خاصة به. الازدحام أو التوقف أو مشاكل المدققين قد تؤثر على المستخدم.'},
    regulatory:{title:'مخاطر تنظيمية', body:'القوانين والدعاوى وإجراءات الجهات التنظيمية قد تؤثر على إدراج العملة أو استخدامها أو الوصول إليها في بلدان مختلفة.'},
    exchange:{title:'مخاطر منصة التداول', body:'إذا بقيت أصولك على منصة تداول فأنت تعتمد على تلك المنصة لحفظ الأموال والسماح بالسحب.'},
    stableDepeg:{title:'مخاطر فقدان ربط العملة المستقرة', body:'قد تفقد العملة المستقرة سعرها المستهدف إذا ضعفت الاحتياطيات أو الثقة أو السيولة.'},
    defiSmart:{title:'مخاطر العقود الذكية في DeFi', body:'استخدام بروتوكول DeFi يعني الثقة في الكود. الأخطاء أو الاستغلالات أو التحديثات غير الآمنة قد تعرض الأموال للخطر.'},
    nftScam:{title:'الوقاية من احتيال NFT', body:'تحقق بعناية من روابط الأسواق والمجموعات وطلبات موافقة المحفظة قبل الاتصال أو التوقيع.'}
  };
  safetyEntries.vi = {
    seed:{title:'Bảo mật seed phrase', body:'Seed phrase là khóa khôi phục chính của ví. Hãy giữ ngoại tuyến, bí mật và tránh ảnh chụp màn hình hoặc lưu trữ đám mây.'},
    networkMismatch:{title:'Cảnh báo lệch mạng', body:'Trước khi chuyển coin hoặc token, luôn xác nhận mạng gửi và mạng nhận hoàn toàn khớp nhau.'},
    networkRisk:{title:'Rủi ro mạng', body:'Mỗi blockchain có rủi ro vận hành và độ ổn định riêng. Tắc nghẽn, ngừng hoạt động hoặc sự cố validator có thể ảnh hưởng người dùng.'},
    regulatory:{title:'Rủi ro pháp lý', body:'Quy định, vụ kiện và biện pháp quản lý có thể ảnh hưởng đến việc niêm yết, sử dụng hoặc truy cập một đồng coin ở các nước khác nhau.'},
    exchange:{title:'Rủi ro sàn giao dịch', body:'Nếu tài sản nằm trên sàn, bạn phải phụ thuộc vào nền tảng đó để giữ tiền an toàn và cho phép rút.'},
    stableDepeg:{title:'Rủi ro stablecoin mất neo', body:'Stablecoin có thể lệch khỏi mức giá mục tiêu nếu dự trữ, niềm tin hoặc thanh khoản suy yếu.'},
    defiSmart:{title:'Rủi ro hợp đồng thông minh DeFi', body:'Dùng giao thức DeFi nghĩa là tin vào mã nguồn. Lỗi, khai thác hay nâng cấp không an toàn đều có thể làm tiền gặp rủi ro.'},
    nftScam:{title:'Phòng chống lừa đảo NFT', body:'Hãy kiểm tra kỹ liên kết marketplace, bộ sưu tập và yêu cầu phê duyệt ví trước khi kết nối hoặc ký.'}
  };
  safetyEntries.es = {
    seed:{title:'Seguridad de seed phrase', body:'La seed phrase es la clave maestra de recuperación de la billetera. Guárdala offline, en privado y lejos de capturas o nube.'},
    networkMismatch:{title:'Precaución por red incompatible', body:'Antes de transferir una moneda o token, confirma siempre que la red de envío y la de recepción coinciden.'},
    networkRisk:{title:'Riesgo de red', body:'Cada blockchain tiene sus propios riesgos operativos y de fiabilidad. La congestión, las caídas o problemas de validadores pueden afectar al usuario.'},
    regulatory:{title:'Riesgo regulatorio', body:'Reglas, demandas y acciones regulatorias pueden afectar cómo se lista, se usa o se accede a una moneda en distintos países.'},
    exchange:{title:'Riesgo de exchange', body:'Si tus activos permanecen en un exchange, dependes de esa plataforma para custodiar los fondos y permitir retiros.'},
    stableDepeg:{title:'Riesgo de depeg de stablecoin', body:'Una stablecoin puede alejarse de su precio objetivo si se debilitan las reservas, la confianza o la liquidez.'},
    defiSmart:{title:'Riesgo de contrato inteligente DeFi', body:'Usar un protocolo DeFi significa confiar en el código. Bugs, exploits o actualizaciones inseguras pueden poner fondos en riesgo.'},
    nftScam:{title:'Prevención de estafas NFT', body:'Verifica con cuidado los enlaces de marketplace, las colecciones y las solicitudes de aprobación de la billetera antes de conectar o firmar.'}
  };

  sourceEntries.en = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','The original paper that explains how Bitcoin works and why a decentralized digital cash system was proposed.','https://bitcoin.org/bitcoin.pdf','Blockchain','Good primary source for understanding Bitcoin at the protocol level.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Official beginner-friendly introduction to Ethereum, its smart contracts, and its ecosystem.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Connects Ethereum to smart contracts, apps, and token ecosystems.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Official documentation that introduces Solana’s network design, tools, and ecosystem.','https://solana.com/docs','Real-world Lessons','Useful for understanding how a fast Layer 1 explains its own architecture.'],
    rippleSite:['basics','Ripple','Ripple Website','Official overview of Ripple’s payment-focused products and XRP-related information.','https://ripple.com/xrp/','Real-world Lessons','Shows how XRP is presented in a payment and remittance context.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','Official documentation for the BNB Chain ecosystem, tooling, and network usage.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Helps explain how a utility token supports a wider chain ecosystem.'],
    tetherTransparency:['stable','Tether','Tether Transparency Page','Official transparency page for reserve and issuance information related to USDT.','https://tether.to/en/transparency/','Real-world Lessons','Useful for discussing reserve visibility and stablecoin trust questions.'],
    aaveDocs:['defi','Aave','Aave Docs','Official documentation for Aave’s lending markets, risk concepts, and protocol design.','https://aave.com/docs','The 5 Roles of Crypto','Connects DeFi lending ideas to a real protocol beginners can study.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Beginner-focused educational pages about NFTs, marketplaces, and collecting basics.','https://opensea.io/learn','Real-world Lessons','Useful for understanding NFT ecosystem language and user flows.']
  };
  sourceEntries.ko = {
    bitcoinWhitepaper:['basics','Bitcoin.org','비트코인 백서','비트코인의 작동 방식과 탈중앙 디지털 현금 시스템의 아이디어를 설명하는 원문 자료입니다.','https://bitcoin.org/bitcoin.pdf','블록체인','비트코인을 프로토콜 수준에서 이해하는 데 도움이 되는 1차 자료입니다.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','이더리움과 스마트 컨트랙트, 생태계를 소개하는 공식 입문 자료입니다.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','스마트 컨트랙트와 앱, 토큰 생태계와 이더리움을 연결해줍니다.'],
    solanaDocs:['basics','Solana Foundation','Solana 문서','솔라나의 네트워크 구조와 도구, 생태계를 소개하는 공식 문서입니다.','https://solana.com/docs','Real-world Lessons','빠른 Layer 1이 스스로를 어떻게 설명하는지 이해하는 데 유용합니다.'],
    rippleSite:['basics','Ripple','Ripple 웹사이트','Ripple의 결제 중심 제품과 XRP 관련 정보를 소개하는 공식 페이지입니다.','https://ripple.com/xrp/','Real-world Lessons','XRP가 결제와 송금 맥락에서 어떻게 설명되는지 보여줍니다.'],
    bnbDocs:['basics','BNB Chain','BNB Chain 문서','BNB Chain 생태계와 도구, 네트워크 사용법을 설명하는 공식 문서입니다.','https://docs.bnbchain.org/','The 5 Roles of Crypto','유틸리티 토큰이 더 넓은 체인 생태계를 어떻게 지원하는지 설명할 때 도움이 됩니다.'],
    tetherTransparency:['stable','Tether','Tether 투명성 페이지','USDT의 발행량과 준비금 관련 정보를 확인할 수 있는 공식 투명성 페이지입니다.','https://tether.to/en/transparency/','Real-world Lessons','준비금 가시성과 스테이블코인 신뢰 문제를 설명할 때 유용합니다.'],
    aaveDocs:['defi','Aave','Aave 문서','Aave의 대출 시장과 리스크 개념, 프로토콜 구조를 다루는 공식 문서입니다.','https://aave.com/docs','The 5 Roles of Crypto','DeFi 대출 개념을 실제 프로토콜과 연결해줍니다.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','NFT와 마켓플레이스, 수집 기초를 다루는 초보자용 학습 페이지입니다.','https://opensea.io/learn','Real-world Lessons','NFT 생태계 용어와 사용자 흐름을 이해하는 데 도움이 됩니다.']
  };
  sourceEntries.th = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','เอกสารต้นฉบับที่อธิบายหลักการทำงานของ Bitcoin และเหตุผลของระบบเงินดิจิทัลแบบกระจายศูนย์.','https://bitcoin.org/bitcoin.pdf','Blockchain','เป็นแหล่งข้อมูลปฐมภูมิที่ช่วยให้เข้าใจ Bitcoin ในระดับโปรโตคอล.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','แหล่งข้อมูลทางการสำหรับผู้เริ่มต้นเกี่ยวกับ Ethereum สมาร์ตคอนแทรกต์ และระบบนิเวศของมัน.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','ช่วยเชื่อม Ethereum เข้ากับโลกของแอป สมาร์ตคอนแทรกต์ และโทเค็น.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','เอกสารทางการที่อธิบายโครงสร้างเครือข่าย เครื่องมือ และระบบนิเวศของ Solana.','https://solana.com/docs','Real-world Lessons','เหมาะสำหรับดูว่าบล็อกเชน Layer 1 ความเร็วสูงอธิบายตัวเองอย่างไร.'],
    rippleSite:['basics','Ripple','Ripple Website','หน้าทางการที่สรุปผลิตภัณฑ์ด้านการชำระเงินของ Ripple และข้อมูลเกี่ยวกับ XRP.','https://ripple.com/xrp/','Real-world Lessons','ช่วยให้เห็นการวางตำแหน่ง XRP ในบริบทการชำระเงินและการโอนเงิน.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','เอกสารทางการของระบบนิเวศ BNB Chain เครื่องมือ และการใช้งานเครือข่าย.','https://docs.bnbchain.org/','The 5 Roles of Crypto','ช่วยอธิบายว่า utility token สนับสนุนระบบนิเวศของเชนได้อย่างไร.'],
    tetherTransparency:['stable','Tether','Tether Transparency Page','หน้าความโปร่งใสทางการที่รวมข้อมูลการออกเหรียญและเงินสำรองที่เกี่ยวข้องกับ USDT.','https://tether.to/en/transparency/','Real-world Lessons','มีประโยชน์เมื่อพูดถึงเงินสำรองและความน่าเชื่อถือของ stablecoin.'],
    aaveDocs:['defi','Aave','Aave Docs','เอกสารทางการของ Aave ที่อธิบายตลาดกู้ยืม แนวคิดด้านความเสี่ยง และโครงสร้างโปรโตคอล.','https://aave.com/docs','The 5 Roles of Crypto','ช่วยเชื่อมแนวคิด DeFi lending เข้ากับโปรโตคอลจริง.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','หน้าการเรียนรู้สำหรับผู้เริ่มต้นเกี่ยวกับ NFT มาร์เก็ตเพลส และพื้นฐานการสะสม.','https://opensea.io/learn','Real-world Lessons','ช่วยทำความเข้าใจคำศัพท์และการใช้งานในระบบนิเวศ NFT.']
  };
  sourceEntries.id = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','Dokumen asli yang menjelaskan cara kerja Bitcoin dan alasan sistem uang digital terdesentralisasi diusulkan.','https://bitcoin.org/bitcoin.pdf','Blockchain','Sumber primer yang baik untuk memahami Bitcoin di tingkat protokol.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Pengantar resmi yang ramah pemula tentang Ethereum, smart contract, dan ekosistemnya.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Menghubungkan Ethereum dengan smart contract, aplikasi, dan ekosistem token.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Dokumentasi resmi yang memperkenalkan desain jaringan, alat, dan ekosistem Solana.','https://solana.com/docs','Real-world Lessons','Berguna untuk melihat bagaimana Layer 1 cepat menjelaskan arsitekturnya sendiri.'],
    rippleSite:['basics','Ripple','Situs Ripple','Ikhtisar resmi tentang produk Ripple yang berfokus pada pembayaran dan informasi terkait XRP.','https://ripple.com/xrp/','Real-world Lessons','Menunjukkan bagaimana XRP diposisikan dalam konteks pembayaran dan remitansi.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','Dokumentasi resmi untuk ekosistem BNB Chain, alat, dan penggunaan jaringannya.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Membantu menjelaskan bagaimana utility token mendukung ekosistem chain yang lebih luas.'],
    tetherTransparency:['stable','Tether','Halaman transparansi Tether','Halaman transparansi resmi untuk informasi cadangan dan penerbitan yang terkait dengan USDT.','https://tether.to/en/transparency/','Real-world Lessons','Berguna untuk membahas visibilitas cadangan dan kepercayaan pada stablecoin.'],
    aaveDocs:['defi','Aave','Aave Docs','Dokumentasi resmi untuk pasar pinjam-meminjam Aave, konsep risiko, dan desain protokol.','https://aave.com/docs','The 5 Roles of Crypto','Menghubungkan ide DeFi lending dengan protokol nyata yang bisa dipelajari pemula.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Halaman edukasi ramah pemula tentang NFT, marketplace, dan dasar-dasar koleksi.','https://opensea.io/learn','Real-world Lessons','Berguna untuk memahami istilah dan alur pengguna di ekosistem NFT.']
  };
  sourceEntries.pt = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','O texto original que explica como o Bitcoin funciona e por que um sistema de dinheiro digital descentralizado foi proposto.','https://bitcoin.org/bitcoin.pdf','Blockchain','Boa fonte primária para entender o Bitcoin no nível do protocolo.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Introdução oficial e amigável para iniciantes sobre Ethereum, contratos inteligentes e seu ecossistema.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Liga o Ethereum a contratos inteligentes, apps e ecossistemas de tokens.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Documentação oficial que apresenta a arquitetura, as ferramentas e o ecossistema da Solana.','https://solana.com/docs','Real-world Lessons','Útil para entender como uma Layer 1 rápida explica sua própria arquitetura.'],
    rippleSite:['basics','Ripple','Site da Ripple','Visão oficial dos produtos da Ripple focados em pagamentos e das informações relacionadas ao XRP.','https://ripple.com/xrp/','Real-world Lessons','Mostra como o XRP é apresentado no contexto de pagamentos e remessas.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','Documentação oficial do ecossistema BNB Chain, de suas ferramentas e do uso da rede.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Ajuda a explicar como um utility token apoia um ecossistema maior.'],
    tetherTransparency:['stable','Tether','Página de transparência Tether','Página oficial de transparência com dados de emissão e reservas relacionados ao USDT.','https://tether.to/en/transparency/','Real-world Lessons','Útil para discutir visibilidade de reservas e confiança em stablecoins.'],
    aaveDocs:['defi','Aave','Aave Docs','Documentação oficial dos mercados de empréstimo da Aave, dos conceitos de risco e do desenho do protocolo.','https://aave.com/docs','The 5 Roles of Crypto','Liga a ideia de lending em DeFi a um protocolo real que iniciantes podem estudar.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Páginas educativas voltadas para iniciantes sobre NFTs, marketplaces e noções básicas de coleção.','https://opensea.io/learn','Real-world Lessons','Útil para entender a linguagem e o fluxo de uso do ecossistema NFT.']
  };
  sourceEntries.tr = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','Bitcoinin nasıl çalıştığını ve neden merkeziyetsiz dijital nakit sistemi önerildiğini açıklayan özgün metin.','https://bitcoin.org/bitcoin.pdf','Blockchain','Bitcoini protokol düzeyinde anlamak için güçlü bir birincil kaynaktır.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Ethereum, akıllı sözleşmeler ve ekosistemi hakkında başlangıç dostu resmi giriş sayfası.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Ethereumi akıllı sözleşmeler, uygulamalar ve token ekosistemleriyle ilişkilendirir.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Solananın ağ tasarımını, araçlarını ve ekosistemini tanıtan resmi belgeler.','https://solana.com/docs','Real-world Lessons','Hızlı bir Layer 1 ağın kendi mimarisini nasıl anlattığını görmek için yararlıdır.'],
    rippleSite:['basics','Ripple','Ripple web sitesi','Rippleın ödeme odaklı ürünleri ve XRP ile ilgili bilgiler için resmi genel bakış.','https://ripple.com/xrp/','Real-world Lessons','XRPnin ödeme ve havale bağlamında nasıl sunulduğunu gösterir.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','BNB Chain ekosistemi, araçları ve ağ kullanımı için resmi belgeler.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Bir utility tokenin daha geniş zincir ekosistemini nasıl desteklediğini anlatmaya yardımcı olur.'],
    tetherTransparency:['stable','Tether','Tether şeffaflık sayfası','USDT ile ilgili rezerv ve ihraç bilgilerini gösteren resmi şeffaflık sayfası.','https://tether.to/en/transparency/','Real-world Lessons','Rezerv görünürlüğü ve stablecoin güveni hakkında konuşurken yararlıdır.'],
    aaveDocs:['defi','Aave','Aave Docs','Aavenin borç verme piyasalarını, risk kavramlarını ve protokol tasarımını anlatan resmi belgeler.','https://aave.com/docs','The 5 Roles of Crypto','DeFi lending fikrini gerçek bir protokolle ilişkilendirir.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','NFTler, marketplace mantığı ve koleksiyon temelleri için başlangıç dostu eğitim sayfaları.','https://opensea.io/learn','Real-world Lessons','NFT ekosisteminin dili ve kullanıcı akışlarını anlamaya yardımcı olur.']
  };
  sourceEntries.ar = {
    bitcoinWhitepaper:['basics','Bitcoin.org','ورقة بيتكوين البيضاء','النص الأصلي الذي يشرح كيف يعمل البيتكوين ولماذا طُرح نظام نقد رقمي لامركزي.','https://bitcoin.org/bitcoin.pdf','Blockchain','مصدر أولي مهم لفهم البيتكوين على مستوى البروتوكول.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','مقدمة رسمية مناسبة للمبتدئين عن إيثريوم والعقود الذكية ومنظومته.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','يربط إيثريوم بالعقود الذكية والتطبيقات ومنظومات التوكنات.'],
    solanaDocs:['basics','Solana Foundation','وثائق Solana','وثائق رسمية تقدم تصميم شبكة سولانا وأدواتها ومنظومتها.','https://solana.com/docs','Real-world Lessons','مفيد لفهم كيف تشرح شبكة Layer 1 سريعة بنيتها الخاصة.'],
    rippleSite:['basics','Ripple','موقع Ripple','نظرة رسمية على منتجات Ripple المرتبطة بالمدفوعات والمعلومات الخاصة بـ XRP.','https://ripple.com/xrp/','Real-world Lessons','يوضح كيف يُقدَّم XRP في سياق المدفوعات والتحويلات.'],
    bnbDocs:['basics','BNB Chain','وثائق BNB Chain','وثائق رسمية لمنظومة BNB Chain وأدواتها وطريقة استخدام الشبكة.','https://docs.bnbchain.org/','The 5 Roles of Crypto','تساعد في شرح كيف يدعم التوكن الخدمي منظومة أوسع.'],
    tetherTransparency:['stable','Tether','صفحة شفافية Tether','صفحة الشفافية الرسمية التي تعرض معلومات الإصدار والاحتياطيات المرتبطة بـ USDT.','https://tether.to/en/transparency/','Real-world Lessons','مفيدة عند مناقشة وضوح الاحتياطيات والثقة في العملات المستقرة.'],
    aaveDocs:['defi','Aave','وثائق Aave','وثائق رسمية لأسواق الإقراض في Aave ولمفاهيم المخاطر وتصميم البروتوكول.','https://aave.com/docs','The 5 Roles of Crypto','تربط فكرة الإقراض في DeFi ببروتوكول حقيقي يمكن للمبتدئ دراسته.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','صفحات تعليمية مناسبة للمبتدئين حول NFT والأسواق والأساسيات الأولى للجمع.','https://opensea.io/learn','Real-world Lessons','مفيدة لفهم مصطلحات NFT ومسار استخدامه.']
  };
  sourceEntries.vi = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','Tài liệu gốc giải thích cách Bitcoin hoạt động và vì sao hệ thống tiền số phi tập trung được đề xuất.','https://bitcoin.org/bitcoin.pdf','Blockchain','Nguồn sơ cấp tốt để hiểu Bitcoin ở cấp độ giao thức.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Trang giới thiệu chính thức, dễ tiếp cận cho người mới về Ethereum, hợp đồng thông minh và hệ sinh thái của nó.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Kết nối Ethereum với hợp đồng thông minh, ứng dụng và hệ sinh thái token.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Tài liệu chính thức giới thiệu kiến trúc mạng, công cụ và hệ sinh thái Solana.','https://solana.com/docs','Real-world Lessons','Hữu ích để hiểu cách một Layer 1 tốc độ cao mô tả kiến trúc của chính nó.'],
    rippleSite:['basics','Ripple','Trang web Ripple','Tổng quan chính thức về các sản phẩm tập trung vào thanh toán của Ripple và thông tin liên quan đến XRP.','https://ripple.com/xrp/','Real-world Lessons','Cho thấy XRP được trình bày như thế nào trong bối cảnh thanh toán và chuyển tiền.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','Tài liệu chính thức cho hệ sinh thái BNB Chain, công cụ và cách dùng mạng.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Giúp giải thích utility token hỗ trợ một hệ sinh thái chain rộng hơn ra sao.'],
    tetherTransparency:['stable','Tether','Trang minh bạch Tether','Trang minh bạch chính thức với thông tin về phát hành và dự trữ liên quan đến USDT.','https://tether.to/en/transparency/','Real-world Lessons','Hữu ích khi bàn về mức độ minh bạch dự trữ và niềm tin với stablecoin.'],
    aaveDocs:['defi','Aave','Aave Docs','Tài liệu chính thức cho các thị trường cho vay của Aave, khái niệm rủi ro và thiết kế giao thức.','https://aave.com/docs','The 5 Roles of Crypto','Kết nối ý tưởng DeFi lending với một giao thức thực tế.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Các trang học tập dành cho người mới về NFT, marketplace và kiến thức sưu tầm cơ bản.','https://opensea.io/learn','Real-world Lessons','Hữu ích để hiểu ngôn ngữ và luồng sử dụng trong hệ sinh thái NFT.']
  };
  sourceEntries.es = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Bitcoin Whitepaper','El documento original que explica cómo funciona Bitcoin y por qué se propuso un sistema de dinero digital descentralizado.','https://bitcoin.org/bitcoin.pdf','Blockchain','Buena fuente primaria para entender Bitcoin a nivel de protocolo.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Introducción oficial y amigable para principiantes sobre Ethereum, sus contratos inteligentes y su ecosistema.','https://ethereum.org/en/what-is-ethereum/','The 5 Roles of Crypto','Conecta Ethereum con contratos inteligentes, aplicaciones y ecosistemas de tokens.'],
    solanaDocs:['basics','Solana Foundation','Solana Docs','Documentación oficial que presenta el diseño de red, las herramientas y el ecosistema de Solana.','https://solana.com/docs','Real-world Lessons','Útil para entender cómo una Layer 1 rápida explica su propia arquitectura.'],
    rippleSite:['basics','Ripple','Sitio de Ripple','Resumen oficial de los productos de Ripple enfocados en pagos y de la información relacionada con XRP.','https://ripple.com/xrp/','Real-world Lessons','Muestra cómo se presenta XRP en un contexto de pagos y remesas.'],
    bnbDocs:['basics','BNB Chain','BNB Chain Docs','Documentación oficial del ecosistema BNB Chain, sus herramientas y el uso de la red.','https://docs.bnbchain.org/','The 5 Roles of Crypto','Ayuda a explicar cómo un utility token sostiene un ecosistema más amplio.'],
    tetherTransparency:['stable','Tether','Página de transparencia Tether','Página oficial de transparencia con información de reservas y emisión relacionada con USDT.','https://tether.to/en/transparency/','Real-world Lessons','Útil para hablar de visibilidad de reservas y confianza en las stablecoins.'],
    aaveDocs:['defi','Aave','Aave Docs','Documentación oficial sobre los mercados de préstamo de Aave, sus conceptos de riesgo y el diseño del protocolo.','https://aave.com/docs','The 5 Roles of Crypto','Conecta la idea de lending en DeFi con un protocolo real.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Páginas educativas para principiantes sobre NFTs, marketplaces y nociones básicas de coleccionismo.','https://opensea.io/learn','Real-world Lessons','Útil para entender el lenguaje y los flujos de usuario del ecosistema NFT.']
  };
  glossaryEntries.ha = glossaryEntries.ha || {};
  faqEntries.ha = faqEntries.ha || {};
  safetyEntries.ha = safetyEntries.ha || {};
  sourceEntries.ha = sourceEntries.ha || {};

  var koreanGlossaryFull = [
    ['주소','암호자산을 받을 때 사용하는 공개 가능한 위치입니다.'],
    ['개인키','지갑을 직접 통제할 수 있게 해주는 비밀 키입니다. 절대로 공유하면 안 됩니다.'],
    ['시드 문구','지갑을 복구하기 위한 단어형 백업입니다. 오프라인에 안전하게 보관해야 합니다.'],
    ['가스비','블록체인에서 거래를 처리하고 기록하기 위해 내는 네트워크 수수료입니다.'],
    ['공개키','지갑 주소 생성에 연결되는 암호학적 키입니다. 보통 직접 입력하기보다 주소 생성 과정에서 사용됩니다.'],
    ['익스플로러','블록체인 거래, 주소, 블록 정보를 조회할 수 있는 웹 도구입니다.'],
    ['스마트 컨트랙트','정해진 규칙에 따라 자동으로 실행되는 블록체인 위의 코드입니다.'],
    ['커스터디','누가 키를 보관하고 자산 접근 권한을 통제하는지를 뜻합니다.'],
    ['브리지','서로 다른 블록체인 사이에서 자산이나 데이터를 옮길 때 쓰는 연결 도구입니다.'],
    ['블록체인','여러 참여자가 함께 유지하는 공유 원장으로, 기록을 한곳이 아니라 네트워크 전체가 검증합니다.'],
    ['채굴','작업증명 네트워크에서 거래를 검증하고 새 블록을 추가하는 과정입니다.'],
    ['지갑','암호자산에 접근하고 키를 관리하며 송금과 수신을 할 수 있게 해주는 도구입니다.'],
    ['레이어 1','자체 합의 구조와 보안을 가진 기본 블록체인 네트워크를 뜻합니다.'],
    ['TPS','초당 거래 수를 뜻하며, 네트워크가 얼마나 많은 거래를 처리할 수 있는지 보여주는 지표입니다.'],
    ['검증자','일부 블록체인에서 거래와 블록을 확인하고 승인하는 참여자입니다.'],
    ['송금','국경을 넘거나 서로 다른 지역 사이에서 돈을 보내는 것을 뜻합니다.'],
    ['중앙집중화','통제권이 넓게 분산되지 않고 소수의 주체에 집중된 구조입니다.'],
    ['거래소','암호자산을 사고팔거나 교환할 수 있는 플랫폼입니다.'],
    ['토큰','블록체인 위에서 발행되며 특정 기능이나 용도를 가진 디지털 자산입니다.'],
    ['스테이블코인','주로 달러 같은 기준 자산에 연동되어 비교적 안정적인 가치를 목표로 하는 토큰입니다.'],
    ['페그','토큰이 특정 자산과 맞추려는 목표 가치 관계를 뜻합니다. 예를 들어 1달러 연동이 있습니다.'],
    ['유동성','큰 가격 변화 없이 자산을 얼마나 쉽게 사고팔 수 있는지를 뜻합니다.'],
    ['DeFi','전통 금융 중개자 없이 블록체인 위에서 작동하는 거래·대출 같은 금융 서비스를 뜻합니다.'],
    ['대출','자산을 빌려주고 이자나 담보 구조를 통해 상환받는 금융 행위를 뜻합니다.'],
    ['플래시론','하나의 블록체인 거래 안에서 빌리고 바로 상환해야 하는 DeFi 대출 방식입니다.'],
    ['NFT','고유한 디지털 자산의 소유권이나 식별 정보를 나타내는 대체 불가능 토큰입니다.'],
    ['민트','새로운 토큰이나 NFT를 블록체인 위에 생성하고 발행하는 것을 뜻합니다.']
  ];
  if(typeof glossaryOverrides !== 'undefined'){
    glossaryOverrides.en = [
      ['Address','A public location used to receive digital assets.'],
      ['Private key','A secret key used to control a wallet.'],
      ['Seed phrase','A backup set of words used to recover a wallet. Never share it.'],
      ['Gas fee','A network fee paid to process a transaction.'],
      ['Public key','A cryptographic key linked to wallet identity and used to help generate addresses.'],
      ['Explorer','A website or tool used to view transactions and addresses on a blockchain.'],
      ['Smart contract','Code on a blockchain that runs automatically when its conditions are met.'],
      ['Custody','Who controls the keys and access to assets.'],
      ['Bridge','A tool used to move assets or messages between different blockchains.']
    ];
    glossaryOverrides.ko = deepClone(koreanGlossaryFull);
  }

  window.__repCoinMappings = coinMappings;
  window.__repGlossaryEntries = glossaryEntries;
  window.__repFaqEntries = faqEntries;
  window.__repSourceEntries = sourceEntries;
  window.__repSafetyEntries = safetyEntries;
  window.__repLessonTitle = lessonTitle;
  window.__coinSearchStore = window.__coinSearchStore || {};
  window.__coinSearchStore.coinMappings = coinMappings;
  window.coinMappings = coinMappings;

  REL_LANGS.forEach(function(lang){
    var base = baseLang(lang);
    var gLang = glossaryEntries[base];
    var fLang = faqEntries[base];
    var sLang = safetyEntries[base];
    var srcLang = sourceEntries[base];
    if(!gLang || !fLang || !sLang || !srcLang) return;
    if(lang === 'ha' && (!Object.keys(gLang).length || !Object.keys(fLang).length || !Object.keys(sLang).length || !Object.keys(srcLang).length)) return;

    if(typeof glossaryOverrides !== 'undefined'){
      var glossaryList = ensurePageLangStore(glossaryOverrides, lang, base);
      if(!glossaryList){
        glossaryOverrides[lang] = [];
        glossaryList = glossaryOverrides[lang];
      }
      Object.keys(gLang).forEach(function(key){
        ensureUnique(glossaryList, [gLang[key].title, gLang[key].body], 0);
      });
    }

    if(typeof sourceOverrides !== 'undefined'){
      if(!sourceOverrides[lang]){
        sourceOverrides[lang] = deepClone((sourceLibrary && (sourceLibrary[base] || sourceLibrary.en)) || []);
      }
      Object.keys(srcLang).forEach(function(key){
        ensureUnique(sourceOverrides[lang], localizedSourceEntry(lang, srcLang[key]), 2);
      });
    }

    if(typeof polishedSectionContent !== 'undefined'){
      var psc = ensurePageLangStore(polishedSectionContent, lang, base);
      if(psc){
        psc.faqItems = psc.faqItems || [];
        psc.safetyItems = psc.safetyItems || [];
        Object.keys(fLang).forEach(function(key){
          ensureUnique(psc.faqItems, [fLang[key].title, fLang[key].body], 0);
        });
        Object.keys(sLang).forEach(function(key){
          ensureUnique(psc.safetyItems, [sLang[key].title, sLang[key].body], 0);
        });
      }
    }

    if(typeof coinEducation !== 'undefined'){
      if(!coinEducation[lang] && coinEducation[base]) coinEducation[lang] = deepClone(coinEducation[base]);
      var ceLang = coinEducation[lang];
      if(!ceLang) return;

      Object.keys(coinMappings).forEach(function(coinKey){
        var coin = ceLang[coinKey];
        if(!coin) return;
        var mapping = coinMappings[coinKey];
        coin.relatedLessons = mapping.relatedLessons.map(function(idx){ return lessonTitle(lang, idx); });
        coin.relatedGlossary = mapping.relatedGlossary.map(function(id){ return gLang[id].title; });
        coin.relatedFaq = mapping.relatedFaq.map(function(id){ return fLang[id].title; });
        coin.relatedSources = mapping.relatedSources.map(function(id){ return srcLang[id][2]; });
        coin.relatedSafety = mapping.relatedSafety.map(function(id){ return sLang[id].title; });
      });

      if(ceLang.nft) ceLang.nft.name = 'ETH (NFT ecosystem)';
    }
  });

  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined') showPage(currentPage || 'home');
})();