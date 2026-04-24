(function(){
  // ============ 1. TERM TOOLTIPS ============
  var tooltipDefs = {
    en:{
      'seed phrase':'A set of recovery words (usually 12 or 24) that can restore your entire wallet. Never share it.',
      'private key':'A secret cryptographic key that gives control over a wallet address. Keep it safe.',
      'public key':'A cryptographic key linked to your wallet identity. It helps generate addresses.',
      'gas fee':'A network fee paid to process a transaction on a blockchain.',
      'explorer':'A website or tool that lets you view blockchain transactions and addresses publicly.',
      'smart contract':'Code on a blockchain that automatically follows programmed rules.',
      'custody':'Who controls the keys and access to the crypto assets.',
      'bridge':'A tool to move assets or messages between different blockchains.',
      'defi':'Financial functions built with code — lending, swapping, earning — without a traditional bank.',
      'stablecoin':'A token designed to stay close to a reference value like $1.',
      'nft':'A token representing proof of ownership for a specific digital item.',
      'governance':'A token that gives voting rights in a protocol or community decision.'
    },
    ko:{
      'seed phrase':'지갑을 복구할 수 있는 복구 단어 세트(보통 12개 또는 24개). 절대 공유하지 마세요.',
      'private key':'지갑 주소를 제어하는 비밀 암호화 키. 안전하게 보관하세요.',
      'public key':'지갑 신원과 연결된 암호화 키. 주소를 생성하는 데 사용됩니다.',
      'gas fee':'블록체인에서 거래를 처리하기 위해 지불하는 네트워크 수수료.',
      'explorer':'블록체인 거래와 주소를 공개적으로 볼 수 있는 웹사이트 또는 도구.',
      'smart contract':'프로그래밍된 규칙을 자동으로 따르는 블록체인 위의 코드.',
      'custody':'암호화폐 자산의 키와 접근 권한을 누가 통제하는지.',
      'bridge':'서로 다른 블록체인 간에 자산이나 메시지를 이동시키는 도구.',
      'defi':'전통 은행 없이 코드로 구축된 금융 기능 — 대출, 스왑, 수익.',
      'stablecoin':'1달러처럼 기준값에 가깝게 유지되도록 설계된 토큰.',
      'nft':'특정 디지털 아이템의 소유권을 증명하는 토큰.',
      'governance':'프로토콜이나 커뮤니티 결정에서 투표권을 부여하는 토큰.'
    },
    th:{
      'seed phrase':'ชุดคำสำรอง (ปกติ 12 หรือ 24 คำ) สำหรับกู้คืนวอลเล็ต ห้ามแชร์เด็ดขาด',
      'private key':'กุญแจลับที่ให้สิทธิ์ควบคุมวอลเล็ต เก็บรักษาให้ปลอดภัย',
      'public key':'กุญแจเข้ารหัสที่เชื่อมกับตัวตนวอลเล็ต ใช้สร้างที่อยู่',
      'gas fee':'ค่าธรรมเนียมเครือข่ายสำหรับประมวลผลธุรกรรม',
      'explorer':'เว็บไซต์สำหรับดูธุรกรรมและที่อยู่บล็อกเชน',
      'smart contract':'โค้ดบนบล็อกเชนที่ทำงานตามกฎที่โปรแกรมไว้',
      'custody':'ใครเป็นผู้ควบคุมกุญแจและการเข้าถึงสินทรัพย์',
      'bridge':'เครื่องมือย้ายสินทรัพย์ระหว่างบล็อกเชนต่างๆ',
      'defi':'ฟังก์ชันการเงินที่สร้างด้วยโค้ด ไม่ต้องพึ่งธนาคาร',
      'stablecoin':'โทเคนที่ออกแบบให้มูลค่าใกล้เคียงค่าอ้างอิง เช่น $1',
      'nft':'โทเคนที่พิสูจน์ความเป็นเจ้าของสำหรับไอเทมดิจิทัล',
      'governance':'โทเคนที่ให้สิทธิ์โหวตในโปรโตคอลหรือชุมชน'
    },
    id:{
      'seed phrase':'Kata pemulihan (biasanya 12 atau 24) untuk memulihkan wallet. Jangan pernah dibagikan.',
      'private key':'Kunci kriptografis rahasia yang mengontrol alamat wallet.',
      'public key':'Kunci kriptografis yang terkait dengan identitas wallet.',
      'gas fee':'Biaya jaringan untuk memproses transaksi di blockchain.',
      'explorer':'Situs untuk melihat transaksi dan alamat blockchain.',
      'smart contract':'Kode di blockchain yang mengikuti aturan terprogram secara otomatis.',
      'custody':'Siapa yang mengontrol kunci dan akses ke aset kripto.',
      'bridge':'Alat untuk memindahkan aset antar blockchain berbeda.',
      'defi':'Fungsi keuangan yang dibangun dengan kode, tanpa bank tradisional.',
      'stablecoin':'Token yang dirancang dekat dengan nilai acuan seperti $1.',
      'nft':'Token yang mewakili bukti kepemilikan item digital.',
      'governance':'Token yang memberikan hak suara dalam protokol atau komunitas.'
    },
    pt:{
      'seed phrase':'Conjunto de palavras de recuperação (geralmente 12 ou 24) para restaurar carteira. Nunca compartilhe.',
      'private key':'Chave criptográfica secreta que dá controle sobre o endereço da carteira.',
      'public key':'Chave criptográfica ligada à identidade da carteira.',
      'gas fee':'Taxa de rede paga para processar transação no blockchain.',
      'explorer':'Site para visualizar transações e endereços de blockchain.',
      'smart contract':'Código no blockchain que segue regras programadas automaticamente.',
      'custody':'Quem controla as chaves e o acesso aos ativos cripto.',
      'bridge':'Ferramenta para mover ativos entre blockchains diferentes.',
      'defi':'Funções financeiras construídas com código, sem banco tradicional.',
      'stablecoin':'Token projetado para ficar próximo de um valor de referência como $1.',
      'nft':'Token que representa prova de propriedade de um item digital.',
      'governance':'Token que dá direitos de voto em um protocolo ou comunidade.'
    },
    tr:{
      'seed phrase':'Cüzdanı geri yüklemek için kelime seti (genelde 12 veya 24). Asla paylaşmayın.',
      'private key':'Cüzdan adresini kontrol eden gizli kriptografik anahtar.',
      'public key':'Cüzdan kimliğiyle bağlantılı kriptografik anahtar.',
      'gas fee':'Blockchain üzerinde işlem yapmak için ödenen ağ ücreti.',
      'explorer':'Blockchain işlemlerini ve adresleri görüntüleme aracı.',
      'smart contract':'Blockchain üzerinde programlanmış kurallara göre çalışan kod.',
      'custody':'Kripto varlıklara erişim ve anahtarları kimin kontrol ettiği.',
      'bridge':'Farklı blockchainler arasında varlık taşıma aracı.',
      'defi':'Geleneksel banka olmadan kodla yapılan finansal işlemler.',
      'stablecoin':'$1 gibi bir referans değere yakın kalmak üzere tasarlanmış token.',
      'nft':'Belirli bir dijital öğenin sahiplik kanıtını temsil eden token.',
      'governance':'Protokol veya topluluk kararlarında oy hakkı veren token.'
    },
    es:{
      'seed phrase':'Conjunto de palabras de recuperación (generalmente 12 o 24) para restaurar billetera. Nunca la compartas.',
      'private key':'Clave criptográfica secreta que controla una dirección de billetera.',
      'public key':'Clave criptográfica vinculada a la identidad de la billetera.',
      'gas fee':'Tarifa de red pagada para procesar una transacción en blockchain.',
      'explorer':'Sitio web para ver transacciones y direcciones de blockchain.',
      'smart contract':'Código en blockchain que sigue reglas programadas automáticamente.',
      'custody':'Quién controla las claves y el acceso a los criptoactivos.',
      'bridge':'Herramienta para mover activos entre diferentes blockchains.',
      'defi':'Funciones financieras construidas con código, sin banco tradicional.',
      'stablecoin':'Token diseñado para mantenerse cerca de un valor de referencia como $1.',
      'nft':'Token que representa prueba de propiedad de un artículo digital.',
      'governance':'Token que otorga derechos de voto en un protocolo o comunidad.'
    },
    ar:{
      'seed phrase':'مجموعة كلمات استرداد (عادة 12 أو 24) لاستعادة المحفظة. لا تشاركها أبداً.',
      'private key':'مفتاح تشفيري سري يتحكم في عنوان المحفظة.',
      'public key':'مفتاح تشفيري مرتبط بهوية المحفظة.',
      'gas fee':'رسوم شبكة لمعالجة معاملة على البلوكتشين.',
      'explorer':'موقع لعرض معاملات وعناوين البلوكتشين.',
      'smart contract':'كود على البلوكتشين يتبع قواعد مبرمجة تلقائياً.',
      'custody':'من يتحكم في المفاتيح والوصول إلى الأصول المشفرة.',
      'bridge':'أداة لنقل الأصول بين سلاسل بلوكتشين مختلفة.',
      'defi':'وظائف مالية مبنية بالكود بدون بنك تقليدي.',
      'stablecoin':'رمز مصمم ليبقى قريباً من قيمة مرجعية مثل $1.',
      'nft':'رمز يمثل إثبات ملكية لعنصر رقمي محدد.',
      'governance':'رمز يمنح حقوق التصويت في بروتوكول أو مجتمع.'
    },
    vi:{
      'seed phrase':'Bộ từ khôi phục (thường 12 hoặc 24) để khôi phục ví. Không bao giờ chia sẻ.',
      'private key':'Khóa mã hóa bí mật kiểm soát địa chỉ ví.',
      'public key':'Khóa mã hóa liên kết với danh tính ví.',
      'gas fee':'Phí mạng lưới để xử lý giao dịch trên blockchain.',
      'explorer':'Trang web để xem giao dịch và địa chỉ blockchain.',
      'smart contract':'Mã trên blockchain tự động thực thi theo quy tắc được lập trình.',
      'custody':'Ai kiểm soát khóa và quyền truy cập tài sản crypto.',
      'bridge':'Công cụ di chuyển tài sản giữa các blockchain khác nhau.',
      'defi':'Chức năng tài chính xây bằng mã, không cần ngân hàng truyền thống.',
      'stablecoin':'Token thiết kế để giữ gần giá trị tham chiếu như $1.',
      'nft':'Token đại diện cho bằng chứng sở hữu vật phẩm số.',
      'governance':'Token cho quyền bỏ phiếu trong giao thức hoặc cộng đồng.'
    }
  };
  // br falls back to pt
  tooltipDefs.br = tooltipDefs.pt;

  // Terms to scan for (case-insensitive match in rendered HTML text)
  var termsList = ['seed phrase','private key','public key','gas fee','explorer','smart contract','custody','bridge','defi','stablecoin','nft','governance'];

  function getTooltipDefs(){ return tooltipDefs[currentLang] || tooltipDefs.en; }

  function applyTooltips(html){
    if(typeof html !== 'string') return html || '';
    var defs = getTooltipDefs();
    // Sort terms by length (longest first) to avoid partial matches
    var sorted = termsList.slice().sort(function(a,b){return b.length - a.length;});
    sorted.forEach(function(term){
      var def = defs[term];
      if(!def) return;
      // Case-insensitive replace, but only in text nodes (avoid replacing inside tags/attributes)
      // Use a regex that avoids matches inside HTML tags or already-wrapped tooltips
      var escaped = term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var re = new RegExp('(?<![\\w-])(' + escaped + ')(?![\\w-])(?![^<]*>)(?![^<]*<\\/span)','gi');
      var replaced = false;
      html = html.replace(re, function(match){
        if(replaced) return match; // Only replace first occurrence per term
        replaced = true;
        return '<span class="term-tip" onclick="this.classList.toggle(\'tip-active\')">' + match + '<span class="tip-box">' + def + '</span></span>';
      });
    });
    return html;
  }

  // Patch renderLesson to apply tooltips
  var __rlTip = window.renderLesson;
  window.renderLesson = function(i){
    var html = __rlTip(i);
    return applyTooltips(typeof html === 'string' ? html : '');
  };

  // Patch renderSafetyPage
  var __spTip = window.renderSafetyPage;
  window.renderSafetyPage = function(){
    var html = __spTip();
    return applyTooltips(typeof html === 'string' ? html : '');
  };

  // Patch renderStartHere
  var __shTip = window.renderStartHere;
  window.renderStartHere = function(){
    var html = __shTip();
    return applyTooltips(typeof html === 'string' ? html : '');
  };

  // ============ 2. ENHANCED MINI QUIZZES ============
  var quizData = {
    en:[
      [{q:'What is a blockchain?',opts:['A type of bank account','A shared ledger verified by many participants','A software company','A type of cryptocurrency'],correct:1,fb:'Correct! A blockchain is a shared ledger — not controlled by one company.'}],
      [{q:'Which of these should you NEVER share?',opts:['Your wallet address','Your seed phrase','Your transaction ID','The network name'],correct:1,fb:'Correct! Your seed phrase gives full control of your wallet. Never share it.'},
       {q:'What is a wallet, primarily?',opts:['A box that stores coins','A key management tool','A bank account','A type of exchange'],correct:1,fb:'Right! A wallet manages keys that prove your control over assets on the blockchain.'}],
      [{q:'What should you do before sending the full amount?',opts:['Send a test transfer first','Ask a friend','Wait 24 hours','Check the price'],correct:0,fb:'Correct! A small test transfer helps verify the network and address are right.'}],
      [{q:'Instead of asking "Is this coin good?", what should you ask?',opts:['What is the price?','Who created it?','What role does this token play?','Is it trending?'],correct:2,fb:'Correct! Understanding a token\'s role reveals more than just its name.'}],
      [{q:'If someone demands urgent crypto payment, what is it likely?',opts:['A great deal','A scam signal','A normal transaction','A governance vote'],correct:1,fb:'Correct! Urgency and pressure are classic scam tactics. Always pause and verify.'}]
    ],
    ko:[
      [{q:'블록체인이란 무엇인가요?',opts:['은행 계좌의 한 종류','여러 참여자가 검증하는 공유 원장','소프트웨어 회사','암호화폐의 한 종류'],correct:1,fb:'정답! 블록체인은 하나의 회사가 아닌 여러 참여자가 함께 관리하는 공유 기록입니다.'}],
      [{q:'절대 공유하면 안 되는 것은?',opts:['지갑 주소','시드 문구','거래 ID','네트워크 이름'],correct:1,fb:'정답! 시드 문구는 지갑의 전체 통제권을 부여합니다. 절대 공유하지 마세요.'},
       {q:'지갑의 주된 역할은?',opts:['코인을 담는 상자','키 관리 도구','은행 계좌','거래소의 한 종류'],correct:1,fb:'정답! 지갑은 블록체인 위 자산에 대한 통제권을 증명하는 키를 관리합니다.'}],
      [{q:'전체 금액을 보내기 전에 먼저 해야 할 것은?',opts:['소액 테스트 전송','친구에게 물어보기','24시간 기다리기','가격 확인'],correct:0,fb:'정답! 소액 테스트 전송으로 네트워크와 주소가 맞는지 확인할 수 있습니다.'}],
      [{q:'"이 코인 좋은가요?" 대신 물어야 할 질문은?',opts:['가격이 얼마인가요?','누가 만들었나요?','이 토큰의 역할은 무엇인가요?','트렌딩인가요?'],correct:2,fb:'정답! 토큰의 역할을 이해하면 이름만으로는 알 수 없는 것을 알 수 있습니다.'}],
      [{q:'누군가 긴급한 크립토 결제를 요구하면?',opts:['좋은 기회','사기 신호','일반 거래','거버넌스 투표'],correct:1,fb:'정답! 긴급함과 압박은 전형적인 사기 수법입니다. 항상 멈추고 확인하세요.'}]
    ],
    th:[
      [{q:'บล็อกเชนคืออะไร?',opts:['บัญชีธนาคารแบบหนึ่ง','บัญชีแยกประเภทร่วมที่หลายฝ่ายตรวจสอบ','บริษัทซอฟต์แวร์','สกุลเงินดิจิทัลแบบหนึ่ง'],correct:1,fb:'ถูกต้อง! บล็อกเชนคือบันทึกร่วมที่ไม่ได้ถูกควบคุมโดยบริษัทเดียว'}],
      [{q:'สิ่งที่ห้ามแชร์เด็ดขาดคืออะไร?',opts:['ที่อยู่กระเป๋า','วลีสำรอง','ID ธุรกรรม','ชื่อเครือข่าย'],correct:1,fb:'ถูกต้อง! วลีสำรองให้การควบคุมวอลเล็ตทั้งหมด ห้ามแชร์เด็ดขาด'}],
      [{q:'ก่อนส่งจำนวนเต็มควรทำอะไร?',opts:['ส่งทดสอบจำนวนเล็กน้อย','ถามเพื่อน','รอ 24 ชั่วโมง','ตรวจสอบราคา'],correct:0,fb:'ถูกต้อง! การโอนทดสอบเล็กน้อยช่วยยืนยันว่าเครือข่ายและที่อยู่ถูกต้อง'}],
      [{q:'แทนที่จะถาม "เหรียญนี้ดีไหม?" ควรถามอะไร?',opts:['ราคาเท่าไร?','ใครสร้าง?','โทเคนนี้มีบทบาทอะไร?','กำลังเทรนด์ไหม?'],correct:2,fb:'ถูกต้อง! การเข้าใจบทบาทของโทเคนบอกอะไรได้มากกว่าแค่ชื่อ'}],
      [{q:'ถ้ามีคนเร่งให้จ่ายคริปโตเร่งด่วน?',opts:['โอกาสดี','สัญญาณหลอกลวง','ธุรกรรมปกติ','โหวตในโปรโตคอล'],correct:1,fb:'ถูกต้อง! ความเร่งด่วนและแรงกดดันเป็นกลวิธีหลอกลวงคลาสสิก'}]
    ],
    id:[
      [{q:'Apa itu blockchain?',opts:['Jenis rekening bank','Buku besar bersama yang diverifikasi banyak pihak','Perusahaan software','Jenis cryptocurrency'],correct:1,fb:'Benar! Blockchain adalah catatan bersama yang tidak dikontrol satu perusahaan.'}],
      [{q:'Mana yang TIDAK BOLEH dibagikan?',opts:['Alamat wallet','Frasa pemulihan','ID transaksi','Nama jaringan'],correct:1,fb:'Benar! Frasa pemulihan memberikan kontrol penuh atas wallet Anda.'}],
      [{q:'Apa yang harus dilakukan sebelum mengirim jumlah penuh?',opts:['Kirim transfer uji kecil','Tanya teman','Tunggu 24 jam','Cek harga'],correct:0,fb:'Benar! Transfer uji kecil membantu memverifikasi jaringan dan alamat.'}],
      [{q:'Daripada bertanya "Koin ini bagus?", apa yang sebaiknya ditanyakan?',opts:['Berapa harganya?','Siapa pembuatnya?','Apa peran token ini?','Apakah trending?'],correct:2,fb:'Benar! Memahami peran token mengungkap lebih banyak daripada namanya.'}],
      [{q:'Jika seseorang menuntut pembayaran crypto mendesak?',opts:['Peluang bagus','Sinyal penipuan','Transaksi normal','Voting governance'],correct:1,fb:'Benar! Urgensi dan tekanan adalah taktik penipuan klasik.'}]
    ],
    pt:[
      [{q:'O que é uma blockchain?',opts:['Um tipo de conta bancária','Um registro compartilhado verificado por muitos participantes','Uma empresa de software','Um tipo de criptomoeda'],correct:1,fb:'Correto! Blockchain é um registro compartilhado não controlado por uma empresa.'}],
      [{q:'O que você NUNCA deve compartilhar?',opts:['Endereço da carteira','Frase de recuperação','ID da transação','Nome da rede'],correct:1,fb:'Correto! A frase de recuperação dá controle total da sua carteira.'}],
      [{q:'O que fazer antes de enviar o valor total?',opts:['Enviar uma transferência teste','Perguntar a um amigo','Esperar 24 horas','Verificar o preço'],correct:0,fb:'Correto! Uma pequena transferência teste verifica rede e endereço.'}],
      [{q:'Em vez de perguntar "Essa moeda é boa?", o que perguntar?',opts:['Qual é o preço?','Quem criou?','Qual o papel deste token?','Está em alta?'],correct:2,fb:'Correto! Entender o papel do token revela mais que o nome.'}],
      [{q:'Se alguém exigir pagamento cripto urgente?',opts:['Uma boa oportunidade','Sinal de golpe','Transação normal','Voto de governança'],correct:1,fb:'Correto! Urgência e pressão são táticas clássicas de golpe.'}]
    ],
    tr:[
      [{q:'Blockchain nedir?',opts:['Bir banka hesabı türü','Birçok katılımcının doğruladığı paylaşılan bir kayıt','Bir yazılım şirketi','Bir kripto para türü'],correct:1,fb:'Doğru! Blockchain tek bir şirket tarafından kontrol edilmeyen paylaşılan bir kayıttır.'}],
      [{q:'Hangisini ASLA paylaşmamalısınız?',opts:['Cüzdan adresiniz','Kurtarma ifadeniz','İşlem ID\'niz','Ağ adı'],correct:1,fb:'Doğru! Kurtarma ifadesi cüzdanınızın tam kontrolünü verir.'}],
      [{q:'Tam miktarı göndermeden önce ne yapmalısınız?',opts:['Küçük bir test transferi gönderin','Arkadaşınıza sorun','24 saat bekleyin','Fiyatı kontrol edin'],correct:0,fb:'Doğru! Küçük bir test transferi ağı ve adresi doğrulamaya yardımcı olur.'}],
      [{q:'"Bu coin iyi mi?" yerine ne sormalısınız?',opts:['Fiyatı ne?','Kim yarattı?','Bu tokenın rolü ne?','Trend mi?'],correct:2,fb:'Doğru! Tokenın rolünü anlamak isminden daha fazlasını ortaya koyar.'}],
      [{q:'Birisi acil kripto ödemesi isterse?',opts:['Harika fırsat','Dolandırıcılık sinyali','Normal işlem','Yönetişim oyu'],correct:1,fb:'Doğru! Aciliyet ve baskı klasik dolandırıcılık taktikleridir.'}]
    ],
    es:[
      [{q:'¿Qué es una blockchain?',opts:['Un tipo de cuenta bancaria','Un registro compartido verificado por muchos participantes','Una empresa de software','Un tipo de criptomoneda'],correct:1,fb:'¡Correcto! Blockchain es un registro compartido no controlado por una empresa.'}],
      [{q:'¿Qué NUNCA debes compartir?',opts:['Tu dirección de billetera','Tu frase semilla','Tu ID de transacción','El nombre de la red'],correct:1,fb:'¡Correcto! La frase semilla da control total de tu billetera.'}],
      [{q:'¿Qué hacer antes de enviar el monto completo?',opts:['Enviar una transferencia de prueba','Preguntar a un amigo','Esperar 24 horas','Verificar el precio'],correct:0,fb:'¡Correcto! Una pequeña transferencia de prueba verifica la red y la dirección.'}],
      [{q:'En vez de preguntar "¿Esta moneda es buena?", ¿qué preguntar?',opts:['¿Cuál es el precio?','¿Quién la creó?','¿Qué rol juega este token?','¿Está en tendencia?'],correct:2,fb:'¡Correcto! Entender el rol del token revela más que el nombre.'}],
      [{q:'Si alguien exige pago cripto urgente, ¿qué es probablemente?',opts:['Una gran oportunidad','Señal de estafa','Transacción normal','Voto de gobernanza'],correct:1,fb:'¡Correcto! La urgencia y presión son tácticas clásicas de estafa.'}]
    ],
    ar:[
      [{q:'ما هو البلوكتشين؟',opts:['نوع من الحسابات البنكية','سجل مشترك يتحقق منه العديد من المشاركين','شركة برمجيات','نوع من العملات المشفرة'],correct:1,fb:'صحيح! البلوكتشين سجل مشترك لا تتحكم فيه شركة واحدة.'}],
      [{q:'ما الذي يجب ألا تشاركه أبداً؟',opts:['عنوان محفظتك','عبارة الاسترداد','معرف المعاملة','اسم الشبكة'],correct:1,fb:'صحيح! عبارة الاسترداد تمنح التحكم الكامل في محفظتك.'}],
      [{q:'ماذا تفعل قبل إرسال المبلغ الكامل؟',opts:['إرسال تحويل تجريبي صغير','سؤال صديق','الانتظار 24 ساعة','التحقق من السعر'],correct:0,fb:'صحيح! تحويل تجريبي صغير يساعد في التحقق من الشبكة والعنوان.'}],
      [{q:'بدلاً من سؤال "هل هذه العملة جيدة؟"، ماذا تسأل؟',opts:['ما السعر؟','من أنشأها؟','ما دور هذا الرمز؟','هل هي رائجة؟'],correct:2,fb:'صحيح! فهم دور الرمز يكشف أكثر من مجرد اسمه.'}],
      [{q:'إذا طلب شخص دفع عملة مشفرة عاجلة؟',opts:['فرصة رائعة','إشارة احتيال','معاملة عادية','تصويت حوكمة'],correct:1,fb:'صحيح! الإلحاح والضغط من أساليب الاحتيال الكلاسيكية.'}]
    ],
    vi:[
      [{q:'Blockchain là gì?',opts:['Một loại tài khoản ngân hàng','Sổ cái chia sẻ được nhiều người xác minh','Công ty phần mềm','Một loại tiền mã hóa'],correct:1,fb:'Đúng! Blockchain là bản ghi chia sẻ không do một công ty kiểm soát.'}],
      [{q:'Điều gì KHÔNG BAO GIỜ nên chia sẻ?',opts:['Địa chỉ ví','Cụm từ khôi phục','ID giao dịch','Tên mạng lưới'],correct:1,fb:'Đúng! Cụm từ khôi phục cho toàn quyền kiểm soát ví của bạn.'}],
      [{q:'Trước khi gửi toàn bộ, nên làm gì?',opts:['Gửi thử số nhỏ','Hỏi bạn bè','Đợi 24 giờ','Kiểm tra giá'],correct:0,fb:'Đúng! Chuyển thử nhỏ giúp xác minh mạng lưới và địa chỉ.'}],
      [{q:'Thay vì hỏi "Coin này tốt không?", nên hỏi gì?',opts:['Giá bao nhiêu?','Ai tạo ra?','Vai trò của token này là gì?','Đang trending?'],correct:2,fb:'Đúng! Hiểu vai trò token cho biết nhiều hơn tên gọi.'}],
      [{q:'Nếu ai đó yêu cầu thanh toán crypto khẩn cấp?',opts:['Cơ hội tốt','Tín hiệu lừa đảo','Giao dịch bình thường','Bỏ phiếu quản trị'],correct:1,fb:'Đúng! Sự khẩn cấp và áp lực là chiến thuật lừa đảo kinh điển.'}]
    ]
  };
quizData.br = quizData.pt;
quizData.ha = quizData.en;

  var quizTitles = {
    en:'Test Your Understanding',ko:'이해도 확인',th:'ทดสอบความเข้าใจ',id:'Uji Pemahamanmu',
    pt:'Teste seu Entendimento',tr:'Anlayışınızı Test Edin',es:'Pon a Prueba tu Comprensión',
    ar:'اختبر فهمك',vi:'Kiểm Tra Hiểu Biết',br:'Teste seu Entendimento'
  };

  function renderEnhancedQuiz(lessonIdx){
    var qd = quizData[currentLang] || quizData.en;
    var items = qd[lessonIdx];
    if(!items || !items.length) return '';
    var title = quizTitles[currentLang] || quizTitles.en;
    var html = '<div class="quiz-enhanced"><div class="quiz-e-title">'+title+'</div>';
    items.forEach(function(item, qi){
      var uid = 'eq_'+lessonIdx+'_'+qi+'_'+Math.random().toString(36).substr(2,5);
      html += '<div class="quiz-e-question">'+item.q+'</div><div class="quiz-e-options" id="'+uid+'">';
      item.opts.forEach(function(opt, oi){
        html += '<div class="quiz-e-opt" data-correct="'+(oi===item.correct?'1':'0')+'" onclick="handleQuizClick(this,\''+uid+'\','+item.correct+',\''+uid+'_fb\')"><div class="quiz-e-dot"></div><span>'+opt+'</span></div>';
      });
      html += '</div><div class="quiz-e-feedback" id="'+uid+'_fb">'+item.fb+'</div>';
    });
    html += '</div>';
    return html;
  }

  // Global quiz click handler
  window.handleQuizClick = function(el, containerId, correctIdx, fbId){
    var container = document.getElementById(containerId);
    if(!container) return;
    var opts = container.querySelectorAll('.quiz-e-opt');
    var isCorrect = el.getAttribute('data-correct') === '1';
    opts.forEach(function(o){ o.classList.add('disabled'); });
    el.classList.add(isCorrect ? 'correct' : 'wrong');
    // Also highlight correct answer
    if(!isCorrect) opts[correctIdx].classList.add('correct');
    var fb = document.getElementById(fbId);
    if(fb){
      fb.classList.add('show', isCorrect ? 'correct-fb' : 'wrong-fb');
      if(!isCorrect) fb.textContent = (currentLang==='ko'?'아쉽습니다! ':'') + fb.textContent;
    }
  };

  // Patch renderLesson to replace old quiz with enhanced quiz
  var __rlQuiz = window.renderLesson;
  window.renderLesson = function(i){
    var html = __rlQuiz(i);
    if(typeof html !== 'string') return html || '';
    // Remove old quiz section and insert enhanced quiz before complete-row
    var completeIdx = html.indexOf('<div class="complete-row">');
    if(completeIdx > -1){
      var eqHtml = renderEnhancedQuiz(i);
      html = html.substring(0, completeIdx) + eqHtml + html.substring(completeIdx);
    }
    return html;
  };

  // ============ 3. FIND YOUR START SECTION ============
  var startFinderData = {
    en:{
      title:'Not sure where to start?',
      desc:'Pick the option that best describes you:',
      items:[
        ['I\'m completely new','Lesson 1',0,'lesson'],
        ['I\'ve heard of wallets but I\'m confused','Lesson 2',1,'lesson'],
        ['Transfers scare me the most','Lesson 3',2,'lesson'],
        ['Token types confuse me','Lesson 4',3,'lesson'],
        ['I want to see real risks first','Safety','safety','page']
      ]
    },
    ko:{
      title:'어디서 시작할지 모르겠나요?',
      desc:'자신에게 맞는 것을 선택하세요:',
      items:[
        ['완전 초보입니다','강의 1',0,'lesson'],
        ['지갑은 들어봤지만 헷갈립니다','강의 2',1,'lesson'],
        ['전송이 가장 어렵습니다','강의 3',2,'lesson'],
        ['토큰 종류가 헷갈립니다','강의 4',3,'lesson'],
        ['실제 리스크를 먼저 보고 싶습니다','Safety','safety','page']
      ]
    },
    th:{
      title:'ไม่แน่ใจว่าจะเริ่มจากตรงไหน?',
      desc:'เลือกตัวเลือกที่ตรงกับคุณมากที่สุด:',
      items:[
        ['ฉันเป็นมือใหม่สุดๆ','บทที่ 1',0,'lesson'],
        ['เคยได้ยินเรื่องวอลเล็ตแต่ยังสับสน','บทที่ 2',1,'lesson'],
        ['การโอนทำให้กลัวมากที่สุด','บทที่ 3',2,'lesson'],
        ['ประเภทโทเคนทำให้สับสน','บทที่ 4',3,'lesson'],
        ['อยากดูความเสี่ยงจริงก่อน','ความปลอดภัย','safety','page']
      ]
    },
    id:{
      title:'Tidak yakin mulai dari mana?',
      desc:'Pilih yang paling menggambarkan Anda:',
      items:[
        ['Saya benar-benar pemula','Pelajaran 1',0,'lesson'],
        ['Saya pernah dengar wallet tapi masih bingung','Pelajaran 2',1,'lesson'],
        ['Transfer yang paling membuat takut','Pelajaran 3',2,'lesson'],
        ['Jenis token membingungkan','Pelajaran 4',3,'lesson'],
        ['Saya ingin lihat risiko nyata dulu','Keamanan','safety','page']
      ]
    },
    pt:{
      title:'Não sabe por onde começar?',
      desc:'Escolha o que melhor descreve você:',
      items:[
        ['Sou totalmente iniciante','Lição 1',0,'lesson'],
        ['Já ouvi falar de carteiras mas estou confuso','Lição 2',1,'lesson'],
        ['Transferências me assustam mais','Lição 3',2,'lesson'],
        ['Tipos de tokens me confundem','Lição 4',3,'lesson'],
        ['Quero ver riscos reais primeiro','Segurança','safety','page']
      ]
    },
    tr:{
      title:'Nereden başlayacağınızdan emin değil misiniz?',
      desc:'Sizi en iyi tanımlayan seçeneği seçin:',
      items:[
        ['Tamamen yeniyim','Ders 1',0,'lesson'],
        ['Cüzdanları duydum ama kafam karışık','Ders 2',1,'lesson'],
        ['Transferler beni en çok korkutuyor','Ders 3',2,'lesson'],
        ['Token türleri kafamı karıştırıyor','Ders 4',3,'lesson'],
        ['Önce gerçek riskleri görmek istiyorum','Güvenlik','safety','page']
      ]
    },
    es:{
      title:'¿No sabes por dónde empezar?',
      desc:'Elige la opción que mejor te describe:',
      items:[
        ['Soy completamente nuevo','Lección 1',0,'lesson'],
        ['He oído de billeteras pero estoy confundido','Lección 2',1,'lesson'],
        ['Las transferencias me dan más miedo','Lección 3',2,'lesson'],
        ['Los tipos de tokens me confunden','Lección 4',3,'lesson'],
        ['Quiero ver riesgos reales primero','Seguridad','safety','page']
      ]
    },
    ar:{
      title:'لا تعرف من أين تبدأ؟',
      desc:'اختر ما يصفك بشكل أفضل:',
      items:[
        ['أنا مبتدئ تماماً','الدرس 1',0,'lesson'],
        ['سمعت عن المحافظ لكنني مشوش','الدرس 2',1,'lesson'],
        ['التحويلات تخيفني أكثر','الدرس 3',2,'lesson'],
        ['أنواع التوكن تربكني','الدرس 4',3,'lesson'],
        ['أريد رؤية المخاطر الحقيقية أولاً','الأمان','safety','page']
      ]
    },
    vi:{
      title:'Chưa biết bắt đầu từ đâu?',
      desc:'Chọn lựa chọn mô tả bạn nhất:',
      items:[
        ['Tôi hoàn toàn mới','Bài 1',0,'lesson'],
        ['Tôi nghe về ví nhưng còn bối rối','Bài 2',1,'lesson'],
        ['Chuyển tiền làm tôi sợ nhất','Bài 3',2,'lesson'],
        ['Các loại token làm tôi bối rối','Bài 4',3,'lesson'],
        ['Tôi muốn xem rủi ro thực tế trước','An toàn','safety','page']
      ]
    }
  };
  startFinderData.br = startFinderData.pt;

  var startFinderSupportData = {
    en:{
      title:'Support Crypto Academy',
      body:'Crypto Academy is free to use. If this project helps you, you can support future updates here.',
      button:'Buy Me a Coffee'
    },
    ko:{
      title:'Crypto Academy 후원하기',
      body:'Crypto Academy는 무료로 제공되고 있습니다. 이 프로젝트가 도움이 되었다면, 앞으로의 업데이트를 후원으로 응원하실 수 있습니다.',
      button:'Buy Me a Coffee'
    },
    th:{
      title:'สนับสนุน Crypto Academy',
      body:'Crypto Academy เปิดให้ใช้งานฟรี หากโปรเจกต์นี้มีประโยชน์กับคุณ คุณสามารถสนับสนุนการอัปเดตต่อไปได้ที่นี่',
      button:'Buy Me a Coffee'
    },
    id:{
      title:'Dukung Crypto Academy',
      body:'Crypto Academy dapat digunakan secara gratis. Jika proyek ini membantu Anda, Anda bisa mendukung pembaruan berikutnya di sini.',
      button:'Buy Me a Coffee'
    },
    pt:{
      title:'Apoie a Crypto Academy',
      body:'A Crypto Academy é gratuita. Se este projeto está ajudando você, pode apoiar as próximas atualizações aqui.',
      button:'Buy Me a Coffee'
    },
    tr:{
      title:'Crypto Academy\'yi Destekleyin',
      body:'Crypto Academy ücretsiz kullanılabilir. Bu proje size yardımcı oluyorsa, gelecek güncellemeleri buradan destekleyebilirsiniz.',
      button:'Buy Me a Coffee'
    },
    es:{
      title:'Apoya a Crypto Academy',
      body:'Crypto Academy es gratis. Si este proyecto te ayuda, puedes apoyar aquí las próximas actualizaciones.',
      button:'Buy Me a Coffee'
    },
    ar:{
      title:'ادعم Crypto Academy',
      body:'يمكنك استخدام Crypto Academy مجانًا. إذا كان هذا المشروع مفيدًا لك، يمكنك دعم التحديثات القادمة من هنا.',
      button:'Buy Me a Coffee'
    },
    vi:{
      title:'Ủng hộ Crypto Academy',
      body:'Crypto Academy được sử dụng miễn phí. Nếu dự án này hữu ích với bạn, bạn có thể ủng hộ các bản cập nhật tiếp theo tại đây.',
      button:'Buy Me a Coffee'
    },
    ha:{
      title:'Tallafa wa Crypto Academy',
      body:'Ana ba da Crypto Academy kyauta. Idan wannan aiki yana taimaka maka, za ka iya tallafa wa sabbin abubuwan da za a kara a nan.',
      button:'Buy Me a Coffee'
    }
  };
  startFinderSupportData.br = startFinderSupportData.pt;

  function renderStartFinderSupport(){
    var support = startFinderSupportData[currentLang] || startFinderSupportData.en;
    return '<section class="home-support-block">'
      + '<div class="home-support-copy">'
      +   '<div class="home-support-title">'+support.title+'</div>'
      +   '<div class="home-support-body">'+support.body+'</div>'
      + '</div>'
      + '<a class="home-support-btn" href="https://buymeacoffee.com/beenetworkkorea" target="_blank" rel="noopener noreferrer">'+support.button+'</a>'
      + '</section>';
  }

  function renderStartFinder(){
    var sf = startFinderData[currentLang] || startFinderData.en;
    var html = '<div class="start-finder"><div class="start-finder-title">'+sf.title+'</div><div class="start-finder-desc">'+sf.desc+'</div><div class="start-finder-grid">';
    sf.items.forEach(function(item){
      var action = item[3]==='lesson' ? 'showLesson('+item[2]+')' : 'showPage(\''+item[2]+'\')';
      html += '<div class="start-finder-btn" onclick="'+action+'"><div class="sf-icon">'+(item[3]==='lesson'?(item[2]+1):'!')+'</div><span>'+item[0]+'</span></div>';
    });
    html += '</div>' + renderStartFinderSupport() + '</div>';
    return html;
  }

  // Patch renderHome to add Find Your Start
  var __rhFinder = window.renderHome;
  window.renderHome = function(){
    var html = __rhFinder();
    if(typeof html !== 'string') return html || '';
    var finderHtml = renderStartFinder();
    // Insert after home-desc, before first home-grid
    var gridIdx = html.indexOf('<div class="home-grid">');
    if(gridIdx > -1){
      html = html.substring(0, gridIdx) + finderHtml + html.substring(gridIdx);
    }
    return html;
  };

  // Re-render
  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined' && currentPage === 'home') showPage('home');
})();