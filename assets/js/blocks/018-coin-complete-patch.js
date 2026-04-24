(function(){

var coinFaqExtensions = {
  en: [
    ["What is Bitcoin?", "Bitcoin is the first cryptocurrency, created in 2009 by Satoshi Nakamoto. It works as a decentralized digital currency — no bank or government controls it. Transactions are recorded on a shared ledger called the blockchain."],
    ["What is Ethereum?", "Ethereum is a programmable blockchain. Unlike Bitcoin, it can run code called smart contracts. Most DeFi apps, NFT platforms, and thousands of tokens are built on Ethereum."],
    ["What is a gas fee?", "A gas fee is a network fee you pay when you send a transaction on Ethereum or compatible chains. It compensates the network for the computing work needed to process and record your transaction."],
    ["What is a stablecoin?", "A stablecoin is a token designed to hold a stable value — usually pegged to $1. USDT and USDC are examples. They are useful for moving value without price volatility, but they are not risk-free."],
    ["Does 'stable' mean risk-free?", "No. A stablecoin aims to stay close to its target value, but it can lose its peg in extreme conditions. The word 'stable' describes its design goal, not a guarantee."],
    ["What is DeFi?", "DeFi stands for Decentralized Finance. It refers to financial services like lending, borrowing, and trading that are built on blockchains using smart contracts — without a traditional bank in the middle."],
    ["Is DeFi the same as a bank?", "No. DeFi uses code and smart contracts instead of bankers and branches. It can offer similar functions, but the structures and protections are very different. There is no deposit insurance in DeFi."],
    ["What is an NFT?", "NFT stands for Non-Fungible Token. It is a unique digital asset on the blockchain. Each NFT is one-of-a-kind — unlike Bitcoin, where every coin is identical. NFTs can represent ownership of art, collectibles, or memberships."],
    ["Are NFTs just pictures?", "NFTs can represent any digital file, but the important idea is verifiable ownership on the blockchain. The NFT itself is the proof of ownership record — the file attached to it can be anything."],
    ["What is an exchange?", "A crypto exchange is a platform where you can buy, sell, and trade cryptocurrencies. Centralized exchanges hold your funds on your behalf. Decentralized exchanges let you trade directly from your own wallet."]
  ],
  ko: [
    ["비트코인이란?", "비트코인은 2009년 사토시 나카모토가 만든 최초의 암호화폐입니다. 은행이나 정부의 통제 없이 작동하는 탈중앙화 디지털 화폐입니다. 거래는 블록체인이라는 공유 원장에 기록됩니다."],
    ["이더리움이란?", "이더리움은 프로그래밍 가능한 블록체인입니다. 비트코인과 달리 스마트 컨트랙트라는 코드를 실행할 수 있습니다. 대부분의 DeFi 앱, NFT 플랫폼, 수천 개의 토큰이 이더리움 위에 구축되어 있습니다."],
    ["가스비란?", "가스비는 이더리움 또는 호환 체인에서 거래를 전송할 때 내는 네트워크 수수료입니다. 거래를 처리하고 기록하는 데 필요한 컴퓨팅 작업에 대한 보상입니다."],
    ["스테이블코인이란?", "스테이블코인은 안정적인 가치를 유지하도록 설계된 토큰입니다. 보통 $1에 페그됩니다. USDT와 USDC가 대표적입니다. 가격 변동 없이 가치를 이동하는 데 유용하지만 위험이 없는 것은 아닙니다."],
    ["'스테이블'이 무위험을 의미하나요?", "아닙니다. 스테이블코인은 목표 가치에 근접하도록 설계되었지만 극단적인 상황에서는 페그를 잃을 수 있습니다. '스테이블'이라는 말은 설계 목표를 나타낼 뿐 보증이 아닙니다."],
    ["DeFi란?", "DeFi는 탈중앙화 금융의 약자입니다. 전통적인 은행 없이 블록체인의 스마트 컨트랙트로 구축된 대출, 차용, 거래 등 금융 서비스를 말합니다."],
    ["DeFi는 은행과 같은가요?", "아닙니다. DeFi는 은행원과 지점 대신 코드와 스마트 컨트랙트를 사용합니다. 유사한 기능을 제공할 수 있지만 구조와 보호 장치가 매우 다릅니다. DeFi에는 예금 보험이 없습니다."],
    ["NFT란?", "NFT는 대체 불가능한 토큰입니다. 블록체인상의 고유한 디지털 자산으로, 비트코인과 달리 각 NFT는 고유합니다. 예술품, 수집품, 멤버십 소유권을 나타낼 수 있습니다."],
    ["NFT는 그냥 그림인가요?", "NFT는 모든 디지털 파일을 나타낼 수 있지만 중요한 개념은 블록체인에서 검증 가능한 소유권입니다. NFT 자체가 소유권 증명 기록입니다."],
    ["거래소란?", "암호화폐 거래소는 암호화폐를 사고, 팔고, 거래할 수 있는 플랫폼입니다. 중앙화 거래소는 자금을 대신 보관하고, 탈중앙화 거래소는 자신의 지갑에서 직접 거래합니다."]
  ],
  th: [
    ["Bitcoin คืออะไร?", "Bitcoin คือสกุลเงินดิจิทัลแรก สร้างในปี 2009 โดย Satoshi Nakamoto ทำงานเป็นสกุลเงินดิจิทัลแบบกระจายศูนย์ ไม่มีธนาคารหรือรัฐบาลควบคุม ธุรกรรมถูกบันทึกบนบล็อกเชน"],
    ["Ethereum คืออะไร?", "Ethereum คือบล็อกเชนที่โปรแกรมได้ ต่างจาก Bitcoin ตรงที่สามารถรันโค้ดที่เรียกว่าสมาร์ทคอนแทรคได้ แอป DeFi แพลตฟอร์ม NFT และโทเคนนับพันถูกสร้างบน Ethereum"],
    ["Gas fee คืออะไร?", "Gas fee คือค่าธรรมเนียมเครือข่ายที่คุณจ่ายเมื่อส่งธุรกรรมบน Ethereum หรือเชนที่เข้ากันได้ เป็นค่าตอบแทนสำหรับงานคอมพิวเตอร์ที่ต้องใช้ในการประมวลผลและบันทึกธุรกรรมของคุณ"],
    ["Stablecoin คืออะไร?", "Stablecoin คือโทเคนที่ออกแบบมาเพื่อรักษามูลค่าให้คงที่ โดยปกติผูกกับ $1 USDT และ USDC คือตัวอย่าง มีประโยชน์สำหรับการโอนมูลค่าโดยไม่มีความผันผวน แต่ไม่ได้ปราศจากความเสี่ยง"],
    ["'Stable' หมายความว่าไม่มีความเสี่ยงหรือ?", "ไม่ใช่ Stablecoin พยายามรักษามูลค่าใกล้เป้าหมาย แต่อาจสูญเสียการผูกค่าในสภาวะรุนแรง คำว่า 'stable' อธิบายเป้าหมายการออกแบบ ไม่ใช่การรับประกัน"],
    ["DeFi คืออะไร?", "DeFi ย่อมาจาก Decentralized Finance หมายถึงบริการทางการเงิน เช่น การให้กู้ยืม การกู้ยืม และการซื้อขาย ที่สร้างบนบล็อกเชนโดยใช้สมาร์ทคอนแทรค โดยไม่ต้องมีธนาคารแบบดั้งเดิม"],
    ["DeFi เหมือนธนาคารหรือ?", "ไม่ DeFi ใช้โค้ดและสมาร์ทคอนแทรคแทนนายธนาคารและสาขา อาจมีฟังก์ชันคล้ายกัน แต่โครงสร้างและการคุ้มครองต่างกันมาก ไม่มีประกันเงินฝากใน DeFi"],
    ["NFT คืออะไร?", "NFT ย่อมาจาก Non-Fungible Token เป็นสินทรัพย์ดิจิทัลเฉพาะบนบล็อกเชน แต่ละ NFT มีเพียงชิ้นเดียว สามารถแทนความเป็นเจ้าของงานศิลปะ ของสะสม หรือสมาชิกได้"],
    ["NFT เป็นแค่รูปภาพหรือ?", "NFT สามารถแทนไฟล์ดิจิทัลใดก็ได้ แต่แนวคิดสำคัญคือความเป็นเจ้าของที่ยืนยันได้บนบล็อกเชน NFT เองคือบันทึกการพิสูจน์ความเป็นเจ้าของ"],
    ["Exchange คืออะไร?", "Exchange คริปโตคือแพลตฟอร์มที่คุณสามารถซื้อ ขาย และแลกเปลี่ยนสกุลเงินดิจิทัล Exchange แบบรวมศูนย์ดูแลเงินของคุณแทน Exchange แบบกระจายศูนย์ให้คุณเทรดจากวอลเล็ตของตัวเองได้โดยตรง"]
  ],
  id: [
    ["Apa itu Bitcoin?", "Bitcoin adalah cryptocurrency pertama, dibuat tahun 2009 oleh Satoshi Nakamoto. Bekerja sebagai mata uang digital terdesentralisasi tanpa kontrol bank atau pemerintah. Transaksi dicatat di blockchain."],
    ["Apa itu Ethereum?", "Ethereum adalah blockchain yang dapat diprogram. Berbeda dengan Bitcoin, ia dapat menjalankan kode yang disebut smart contract. Sebagian besar aplikasi DeFi, platform NFT, dan ribuan token dibangun di Ethereum."],
    ["Mengapa ada gas fee?", "Gas fee adalah biaya jaringan yang dibayar saat mengirim transaksi di Ethereum atau chain yang kompatibel. Ini adalah kompensasi untuk pekerjaan komputasi yang diperlukan untuk memproses dan mencatat transaksi."],
    ["Apa itu stablecoin?", "Stablecoin adalah token yang dirancang untuk mempertahankan nilai stabil — biasanya dipatok ke $1. USDT dan USDC adalah contohnya. Berguna untuk memindahkan nilai tanpa volatilitas harga, tetapi tidak bebas risiko."],
    ["Apakah 'stable' berarti bebas risiko?", "Tidak. Stablecoin bertujuan tetap dekat dengan nilai targetnya, tetapi bisa kehilangan peg dalam kondisi ekstrem. Kata 'stable' menggambarkan tujuan desain, bukan jaminan."],
    ["Apa itu DeFi?", "DeFi adalah singkatan dari Decentralized Finance. Ini merujuk pada layanan keuangan seperti pinjam-meminjam dan trading yang dibangun di blockchain menggunakan smart contract tanpa bank tradisional."],
    ["Apakah DeFi sama dengan bank?", "Tidak. DeFi menggunakan kode dan smart contract alih-alih bankir dan cabang. Bisa menawarkan fungsi serupa, tetapi struktur dan perlindungannya sangat berbeda. Tidak ada asuransi deposito di DeFi."],
    ["Apa itu NFT?", "NFT adalah singkatan dari Non-Fungible Token. Ini adalah aset digital unik di blockchain. Setiap NFT adalah satu-satunya. NFT bisa mewakili kepemilikan seni, koleksi, atau keanggotaan."],
    ["Apakah NFT hanya gambar?", "NFT bisa mewakili file digital apa pun, tetapi idenya adalah kepemilikan yang dapat diverifikasi di blockchain. NFT itu sendiri adalah catatan bukti kepemilikan."],
    ["Apa itu bursa (exchange)?", "Exchange kripto adalah platform tempat Anda bisa membeli, menjual, dan trading kripto. Exchange terpusat menyimpan dana Anda. Exchange terdesentralisasi membiarkan Anda trading langsung dari wallet sendiri."]
  ],
  pt: [
    ["O que é Bitcoin?", "Bitcoin é a primeira criptomoeda, criada em 2009 por Satoshi Nakamoto. Funciona como uma moeda digital descentralizada sem controle de bancos ou governos. As transações são registradas na blockchain."],
    ["O que é Ethereum?", "Ethereum é uma blockchain programável. Diferente do Bitcoin, pode executar código chamado de contrato inteligente. A maioria dos aplicativos DeFi, plataformas NFT e milhares de tokens são construídos no Ethereum."],
    ["O que é gas fee?", "Gas fee é uma taxa de rede paga ao enviar transações no Ethereum ou redes compatíveis. Compensa o trabalho computacional necessário para processar e registrar a transação."],
    ["O que é stablecoin?", "Stablecoin é um token projetado para manter valor estável — geralmente atrelado a $1. USDT e USDC são exemplos. Útil para mover valor sem volatilidade de preço, mas não é livre de riscos."],
    ["'Stable' significa sem risco?", "Não. Uma stablecoin busca manter-se próxima ao valor alvo, mas pode perder o peg em condições extremas. 'Stable' descreve a meta de design, não uma garantia."],
    ["O que é DeFi?", "DeFi significa Finanças Descentralizadas. Refere-se a serviços financeiros como empréstimos, captações e negociações construídos em blockchains com contratos inteligentes, sem banco tradicional."],
    ["DeFi é igual a um banco?", "Não. DeFi usa código e contratos inteligentes em vez de banqueiros e agências. Pode oferecer funções semelhantes, mas estruturas e proteções são muito diferentes. Não há seguro de depósito no DeFi."],
    ["O que é NFT?", "NFT significa Token Não-Fungível. É um ativo digital único na blockchain. Cada NFT é único. NFTs podem representar propriedade de arte, colecionáveis ou memberships."],
    ["NFTs são só imagens?", "NFTs podem representar qualquer arquivo digital, mas a ideia importante é a propriedade verificável na blockchain. O NFT em si é o registro de prova de propriedade."],
    ["O que é uma exchange?", "Uma exchange de cripto é uma plataforma para comprar, vender e negociar criptomoedas. Exchanges centralizadas guardam seus fundos. Exchanges descentralizadas permitem negociar diretamente da sua carteira."]
  ],
  tr: [
    ["Bitcoin nedir?", "Bitcoin, 2009 yılında Satoshi Nakamoto tarafından oluşturulan ilk kripto paradır. Banka veya hükümet kontrolü olmadan çalışan merkezi olmayan bir dijital para birimidir. İşlemler blockchain'de kaydedilir."],
    ["Ethereum nedir?", "Ethereum programlanabilir bir blockchain'dir. Bitcoin'den farklı olarak akıllı sözleşme adı verilen kodu çalıştırabilir. Çoğu DeFi uygulaması, NFT platformu ve binlerce token Ethereum üzerinde inşa edilmiştir."],
    ["Gas ücreti nedir?", "Gas ücreti, Ethereum veya uyumlu zincirlerde işlem gönderdiğinizde ödenen ağ ücretidir. İşleminizi işlemek ve kaydetmek için gereken hesaplama çalışmasını telafi eder."],
    ["Stablecoin nedir?", "Stablecoin, sabit bir değeri korumak üzere tasarlanmış tokendir — genellikle $1'a sabitlenmiştir. USDT ve USDC bunlara örnektir. Fiyat oynaklığı olmadan değer taşımak için kullanışlıdır, ancak risksiz değildir."],
    ["'Stable' risksiz anlamına mı gelir?", "Hayır. Stablecoin hedef değerine yakın kalmayı amaçlar, ancak aşırı koşullarda sabitini kaybedebilir. 'Stable' kelimesi tasarım hedefini tanımlar, garanti değildir."],
    ["DeFi nedir?", "DeFi, Merkeziyetsiz Finans anlamına gelir. Geleneksel banka olmadan blockchain üzerindeki akıllı sözleşmelerle oluşturulmuş kredi, borçlanma ve ticaret gibi finansal hizmetleri ifade eder."],
    ["DeFi bankaya benzer mi?", "Hayır. DeFi, bankacılar ve şubeler yerine kod ve akıllı sözleşmeler kullanır. Benzer işlevler sunabilir, ancak yapı ve korumalar çok farklıdır. DeFi'de mevduat sigortası yoktur."],
    ["NFT nedir?", "NFT, Değiştirilemez Token anlamına gelir. Blockchain'de benzersiz bir dijital varlıktır. Her NFT tektir. NFT'ler sanat, koleksiyon veya üyelik sahipliğini temsil edebilir."],
    ["NFT'ler sadece resim midir?", "NFT'ler herhangi bir dijital dosyayı temsil edebilir, ancak önemli fikir blockchain üzerinde doğrulanabilir sahipliktir. NFT'nin kendisi sahiplik kanıt kaydıdır."],
    ["Borsa nedir?", "Kripto borsası, kripto para alıp satıp takas edebileceğiniz bir platformdur. Merkezi borsalar fonlarınızı saklar. Merkeziyetsiz borsalar kendi cüzdanınızdan doğrudan işlem yapmanızı sağlar."]
  ],
  es: [
    ["¿Qué es Bitcoin?", "Bitcoin es la primera criptomoneda, creada en 2009 por Satoshi Nakamoto. Funciona como moneda digital descentralizada sin control de bancos ni gobiernos. Las transacciones se registran en la blockchain."],
    ["¿Qué es Ethereum?", "Ethereum es una blockchain programable. A diferencia de Bitcoin, puede ejecutar código llamado contratos inteligentes. La mayoría de apps DeFi, plataformas NFT y miles de tokens están construidos en Ethereum."],
    ["¿Qué es una gas fee?", "La gas fee es una tarifa de red que pagas al enviar transacciones en Ethereum o redes compatibles. Compensa el trabajo computacional necesario para procesar y registrar la transacción."],
    ["¿Qué es una stablecoin?", "Una stablecoin es un token diseñado para mantener un valor estable — generalmente vinculado a $1. USDT y USDC son ejemplos. Es útil para mover valor sin volatilidad de precio, pero no es libre de riesgos."],
    ["¿'Stable' significa sin riesgo?", "No. Una stablecoin busca mantenerse cerca de su valor objetivo, pero puede perder su paridad en condiciones extremas. 'Stable' describe el objetivo de diseño, no una garantía."],
    ["¿Qué es DeFi?", "DeFi significa Finanzas Descentralizadas. Se refiere a servicios financieros como préstamos, endeudamiento y trading construidos en blockchains con contratos inteligentes, sin banco tradicional."],
    ["¿DeFi es igual que un banco?", "No. DeFi usa código y contratos inteligentes en lugar de banqueros y sucursales. Puede ofrecer funciones similares, pero las estructuras y protecciones son muy diferentes. No hay seguro de depósito en DeFi."],
    ["¿Qué es un NFT?", "NFT significa Token No Fungible. Es un activo digital único en la blockchain. Cada NFT es único. Los NFTs pueden representar propiedad de arte, coleccionables o membresías."],
    ["¿Los NFTs son solo imágenes?", "Los NFTs pueden representar cualquier archivo digital, pero la idea importante es la propiedad verificable en la blockchain. El NFT en sí es el registro de prueba de propiedad."],
    ["¿Qué es un exchange?", "Un exchange de cripto es una plataforma para comprar, vender y negociar criptomonedas. Los exchanges centralizados guardan tus fondos. Los exchanges descentralizados permiten operar directamente desde tu billetera."]
  ],
  ar: [
    ["ما هو البيتكوين؟", "البيتكوين هو أول عملة رقمية، أنشأها ساتوشي ناكاموتو عام 2009. يعمل كعملة رقمية لامركزية بدون سيطرة من البنوك أو الحكومات. تُسجَّل المعاملات على البلوكتشين."],
    ["ما هو إيثريوم؟", "إيثريوم بلوكتشين قابل للبرمجة. على عكس البيتكوين، يمكنه تشغيل كود يُسمى العقود الذكية. معظم تطبيقات DeFi ومنصات NFT وآلاف التوكنات مبنية على إيثريوم."],
    ["ما هي رسوم الغاز؟", "رسوم الغاز هي رسوم شبكة تُدفع عند إرسال المعاملات على إيثريوم أو الشبكات المتوافقة. تعوّض عن العمل الحسابي اللازم لمعالجة المعاملة وتسجيلها."],
    ["ما هي العملة المستقرة؟", "العملة المستقرة توكن مصمم للحفاظ على قيمة ثابتة — عادةً مرتبطة بـ$1. USDT وUSDC مثالان. مفيدة لنقل القيمة بدون تقلبات أسعار، لكنها ليست خالية من المخاطر."],
    ["هل 'مستقر' يعني بلا مخاطر؟", "لا. تسعى العملة المستقرة للبقاء قريبة من قيمتها المستهدفة، لكنها قد تفقد ربطها في ظروف قصوى. كلمة 'مستقر' تصف هدف التصميم وليست ضماناً."],
    ["ما هو DeFi؟", "DeFi اختصار للتمويل اللامركزي. يشير إلى الخدمات المالية كالإقراض والاقتراض والتداول المبنية على البلوكتشين بعقود ذكية، بدون بنك تقليدي."],
    ["هل DeFi مثل البنك؟", "لا. يستخدم DeFi الكود والعقود الذكية بدلاً من المصرفيين والفروع. قد يقدم وظائف مشابهة، لكن البنية والحمايات مختلفة جداً. لا يوجد تأمين ودائع في DeFi."],
    ["ما هو NFT؟", "NFT رمز غير قابل للاستبدال. أصل رقمي فريد على البلوكتشين. كل NFT فريد من نوعه. تستطيع NFTs تمثيل ملكية الفن والمقتنيات."],
    ["هل NFTs مجرد صور؟", "تستطيع NFTs تمثيل أي ملف رقمي، لكن الفكرة المهمة هي الملكية القابلة للتحقق على البلوكتشين. NFT نفسه هو سجل إثبات الملكية."],
    ["ما هي منصة التداول؟", "منصة تداول الكريبتو هي منصة لشراء وبيع وتداول العملات الرقمية. المنصات المركزية تحتفظ بأموالك. المنصات اللامركزية تتيح التداول مباشرة من محفظتك."]
  ],
  vi: [
    ["Bitcoin là gì?", "Bitcoin là tiền điện tử đầu tiên, được tạo ra vào năm 2009 bởi Satoshi Nakamoto. Hoạt động như một loại tiền kỹ thuật số phi tập trung không có sự kiểm soát của ngân hàng hay chính phủ. Các giao dịch được ghi lại trên blockchain."],
    ["Ethereum là gì?", "Ethereum là blockchain có thể lập trình. Khác với Bitcoin, nó có thể chạy mã gọi là hợp đồng thông minh. Hầu hết các ứng dụng DeFi, nền tảng NFT và hàng nghìn token được xây dựng trên Ethereum."],
    ["Gas fee là gì?", "Gas fee là phí mạng bạn trả khi gửi giao dịch trên Ethereum hoặc các chuỗi tương thích. Đây là khoản bù đắp cho công việc tính toán cần thiết để xử lý và ghi lại giao dịch."],
    ["Stablecoin là gì?", "Stablecoin là token được thiết kế để duy trì giá trị ổn định — thường được chốt ở $1. USDT và USDC là ví dụ. Hữu ích để di chuyển giá trị mà không có biến động giá, nhưng không phải không có rủi ro."],
    ["'Stable' có nghĩa là không có rủi ro?", "Không. Stablecoin hướng đến việc giữ gần giá trị mục tiêu, nhưng có thể mất chốt trong điều kiện cực đoan. Chữ 'stable' mô tả mục tiêu thiết kế, không phải sự đảm bảo."],
    ["DeFi là gì?", "DeFi là viết tắt của Tài chính Phi tập trung. Đề cập đến các dịch vụ tài chính như cho vay, đi vay và giao dịch được xây dựng trên blockchain bằng hợp đồng thông minh, không cần ngân hàng truyền thống."],
    ["DeFi có giống ngân hàng không?", "Không. DeFi sử dụng mã và hợp đồng thông minh thay vì nhân viên ngân hàng và chi nhánh. Có thể cung cấp các chức năng tương tự, nhưng cấu trúc và bảo vệ rất khác. Không có bảo hiểm tiền gửi trong DeFi."],
    ["NFT là gì?", "NFT là viết tắt của Token Không Thể Thay Thế. Là tài sản kỹ thuật số độc nhất trên blockchain. Mỗi NFT là duy nhất. NFT có thể đại diện cho quyền sở hữu nghệ thuật, vật phẩm sưu tầm hoặc tư cách thành viên."],
    ["NFT chỉ là ảnh thôi sao?", "NFT có thể đại diện cho bất kỳ tệp kỹ thuật số nào, nhưng ý tưởng quan trọng là quyền sở hữu có thể xác minh trên blockchain. NFT chính là hồ sơ bằng chứng sở hữu."],
    ["Sàn giao dịch là gì?", "Sàn giao dịch crypto là nền tảng để mua, bán và giao dịch tiền điện tử. Sàn tập trung giữ tiền của bạn thay bạn. Sàn phi tập trung cho phép bạn giao dịch trực tiếp từ ví của mình."]
  ]
};

var coinSafetyExtensions = {
  en: [
    ["Seed phrase safety", "Your seed phrase is the master recovery key for your wallet. Write it down on paper and store it offline. Never type it on a website, share it in chat, or store it in a photo or cloud file. Anyone who has your seed phrase can take everything in your wallet."],
    ["Wrong network transfer caution", "If you send crypto on the wrong network (for example, sending USDT on Ethereum to an address expecting USDT on Tron), the funds may be permanently lost. Always confirm the network matches on both sides before sending."],
    ["Wallet approval caution", "DeFi apps ask you to approve token spending. An unlimited approval gives a contract the right to drain your tokens at any time. Use a tool like revoke.cash to review and remove old approvals you no longer need."],
    ["Phishing link warning", "Scammers create fake websites that look almost identical to real ones. Always type the URL manually or use a trusted bookmark. Never click links from DMs, social media comments, or unsolicited messages."],
    ["Stablecoin transfer caution", "Stablecoins like USDT exist on multiple networks. Sending USDT on the wrong network can result in loss of funds. Always confirm the network (for example Ethereum, Tron, BNB Chain) matches the destination before sending."],
    ["NFT marketplace phishing caution", "Fake NFT marketplace links are a common scam. Always verify you are on the official site. Never connect your wallet to a marketplace you reached through a social media link or advertisement."],
    ["Exchange custody risk", "When your crypto is held on an exchange, you do not hold the private keys. If the exchange is hacked, freezes withdrawals, or collapses, access to your funds may be lost. Only leave on exchanges what you plan to trade."],
    ["Smart contract risk", "Interacting with a DeFi protocol means trusting its smart contract code. Even audited contracts can have bugs. Start with small amounts when using any new DeFi protocol for the first time."]
  ],
  ko: [
    ["시드 문구 안전", "시드 문구는 지갑의 마스터 복구 키입니다. 종이에 적어 오프라인으로 보관하세요. 웹사이트에 입력하거나 채팅으로 공유하거나 사진이나 클라우드 파일에 저장하지 마세요. 시드 문구를 가진 사람은 지갑의 모든 것을 가져갈 수 있습니다."],
    ["네트워크 오전송 주의", "잘못된 네트워크로 암호화폐를 보내면(예: 트론 USDT 주소로 이더리움 USDT를 전송) 자금이 영구적으로 손실될 수 있습니다. 전송 전에 양쪽 네트워크가 일치하는지 반드시 확인하세요."],
    ["지갑 승인 주의", "DeFi 앱은 토큰 지출을 승인하도록 요청합니다. 무제한 승인은 컨트랙트에 언제든지 토큰을 가져갈 권한을 줍니다. revoke.cash 같은 도구로 기존 승인을 검토하고 제거하세요."],
    ["피싱 링크 경고", "사기꾼들은 실제 사이트와 거의 동일하게 보이는 가짜 웹사이트를 만듭니다. URL을 직접 입력하거나 신뢰할 수 있는 북마크를 사용하세요. DM, 소셜 미디어 댓글, 원하지 않는 메시지의 링크를 클릭하지 마세요."],
    ["스테이블코인 전송 주의", "USDT 같은 스테이블코인은 여러 네트워크에 존재합니다. 잘못된 네트워크로 전송하면 자금 손실로 이어질 수 있습니다. 네트워크(예: 이더리움, 트론, BNB 체인)가 수신 측과 일치하는지 항상 확인하세요."],
    ["NFT 마켓플레이스 피싱 주의", "가짜 NFT 마켓플레이스 링크는 흔한 사기입니다. 공식 사이트에 있는지 항상 확인하세요. 소셜 미디어 링크나 광고를 통해 접근한 마켓플레이스에 지갑을 절대 연결하지 마세요."],
    ["거래소 커스터디 위험", "거래소에 암호화폐가 있으면 개인키를 직접 보유하지 않습니다. 거래소가 해킹되거나 출금이 동결되거나 폐쇄되면 자금에 접근하지 못할 수 있습니다. 거래할 금액만 거래소에 두세요."],
    ["스마트 컨트랙트 위험", "DeFi 프로토콜과 상호작용한다는 것은 스마트 컨트랙트 코드를 신뢰한다는 의미입니다. 감사된 컨트랙트도 버그가 있을 수 있습니다. 새 DeFi 프로토콜을 사용할 때는 소액으로 시작하세요."]
  ],
  th: [
    ["ความปลอดภัยของวลีสำรอง", "วลีสำรองคือกุญแจกู้คืนหลักของวอลเล็ตคุณ จดลงกระดาษและเก็บไว้ออฟไลน์ อย่าพิมพ์บนเว็บไซต์ แชร์ในแชท หรือเก็บในรูปภาพหรือไฟล์คลาวด์ ใครที่มีวลีสำรองของคุณสามารถเอาทุกอย่างในวอลเล็ตไปได้"],
    ["ระวังการโอนผิดเครือข่าย", "หากส่งคริปโตบนเครือข่ายผิด เงินอาจสูญหายถาวร ยืนยันเครือข่ายตรงกันทั้งสองฝั่งก่อนส่งเสมอ"],
    ["ระวังการอนุมัติวอลเล็ต", "แอป DeFi ขอให้คุณอนุมัติการใช้จ่ายโทเคน การอนุมัติแบบไม่จำกัดให้สัญญาสิทธิ์ในการดึงโทเคนของคุณได้ตลอดเวลา ใช้เครื่องมืออย่าง revoke.cash เพื่อตรวจสอบและลบการอนุมัติเก่า"],
    ["คำเตือนลิงก์ฟิชชิง", "นักต้มตุ๋นสร้างเว็บไซต์ปลอมที่ดูเกือบเหมือนของจริง พิมพ์ URL เอง หรือใช้บุ๊กมาร์กที่เชื่อถือได้ อย่าคลิกลิงก์ใน DM ความคิดเห็นโซเชียลมีเดีย หรือข้อความที่ไม่ได้ร้องขอ"],
    ["ระวังการโอน Stablecoin", "Stablecoin เช่น USDT มีอยู่บนหลายเครือข่าย การส่งบนเครือข่ายผิดอาจทำให้เงินสูญหาย ยืนยันเครือข่ายตรงกับปลายทางเสมอ"],
    ["ระวังฟิชชิง NFT Marketplace", "ลิงก์ NFT marketplace ปลอมเป็นกลโกงที่พบบ่อย ตรวจสอบว่าอยู่บนเว็บไซต์ทางการเสมอ อย่าเชื่อมวอลเล็ตกับ marketplace ที่เข้าถึงผ่านลิงก์โซเชียลมีเดียหรือโฆษณา"],
    ["ความเสี่ยงการดูแลสินทรัพย์ใน Exchange", "เมื่อคริปโตของคุณอยู่ใน exchange คุณไม่ได้ถือคีย์ส่วนตัว หาก exchange ถูกแฮ็กหรือล่ม การเข้าถึงเงินของคุณอาจสูญหาย เก็บไว้ใน exchange เท่าที่วางแผนจะเทรดเท่านั้น"],
    ["ความเสี่ยงสมาร์ทคอนแทรค DeFi", "การโต้ตอบกับโปรโตคอล DeFi หมายถึงการไว้วางใจโค้ดสมาร์ทคอนแทรค แม้แต่สัญญาที่ผ่านการตรวจสอบก็อาจมีข้อบกพร่อง เริ่มด้วยจำนวนเงินน้อยเมื่อใช้โปรโตคอล DeFi ใหม่"]
  ],
  id: [
    ["Keamanan seed phrase", "Seed phrase adalah kunci pemulihan utama wallet Anda. Tuliskan di kertas dan simpan offline. Jangan mengetikkannya di website, berbagi di chat, atau menyimpan di foto atau file cloud. Siapa pun yang memiliki seed phrase Anda bisa mengambil semua isi wallet."],
    ["Kehati-hatian transfer jaringan yang salah", "Jika mengirim kripto di jaringan yang salah, dana bisa hilang permanen. Selalu konfirmasi jaringan cocok di kedua sisi sebelum mengirim."],
    ["Kehati-hatian persetujuan wallet", "Aplikasi DeFi meminta Anda menyetujui pengeluaran token. Persetujuan tak terbatas memberi kontrak hak untuk menguras token kapan saja. Gunakan alat seperti revoke.cash untuk meninjau dan menghapus persetujuan lama."],
    ["Peringatan tautan phishing", "Penipu membuat website palsu yang hampir identik dengan yang asli. Selalu ketik URL secara manual atau gunakan bookmark tepercaya. Jangan klik tautan di DM, komentar media sosial, atau pesan yang tidak diminta."],
    ["Kehati-hatian transfer stablecoin", "Stablecoin seperti USDT ada di banyak jaringan. Mengirim USDT di jaringan yang salah bisa mengakibatkan kehilangan dana. Selalu konfirmasi jaringan cocok dengan tujuan."],
    ["Kehati-hatian phishing marketplace NFT", "Tautan marketplace NFT palsu adalah penipuan umum. Selalu verifikasi Anda ada di situs resmi. Jangan menghubungkan wallet ke marketplace yang Anda akses melalui tautan media sosial atau iklan."],
    ["Risiko custody exchange", "Ketika kripto Anda disimpan di exchange, Anda tidak memegang private key. Jika exchange diretas atau kolaps, akses ke dana Anda bisa hilang. Hanya tinggalkan di exchange apa yang Anda rencanakan untuk diperdagangkan."],
    ["Risiko smart contract DeFi", "Berinteraksi dengan protokol DeFi berarti mempercayai kode smart contract-nya. Bahkan kontrak yang diaudit bisa memiliki bug. Mulailah dengan jumlah kecil saat menggunakan protokol DeFi baru."]
  ],
  pt: [
    ["Segurança da seed phrase", "A seed phrase é a chave mestra de recuperação da sua carteira. Anote em papel e guarde offline. Nunca a digite em um site, compartilhe em chat ou armazene em foto ou arquivo na nuvem. Quem tiver sua seed phrase pode levar tudo da sua carteira."],
    ["Cuidado com transferência em rede errada", "Se enviar cripto na rede errada, os fundos podem ser perdidos permanentemente. Sempre confirme que a rede corresponde nos dois lados antes de enviar."],
    ["Cuidado com aprovações de carteira", "Apps DeFi pedem para você aprovar gastos de tokens. Uma aprovação ilimitada dá a um contrato o direito de retirar seus tokens a qualquer momento. Use uma ferramenta como revoke.cash para revisar e remover aprovações antigas."],
    ["Aviso de link de phishing", "Golpistas criam sites falsos quase idênticos aos reais. Sempre digite a URL manualmente ou use um favorito confiável. Nunca clique em links em DMs, comentários de redes sociais ou mensagens não solicitadas."],
    ["Cuidado com transferência de stablecoin", "Stablecoins como USDT existem em múltiplas redes. Enviar USDT na rede errada pode resultar em perda de fundos. Sempre confirme que a rede corresponde ao destino."],
    ["Cuidado com phishing em marketplace NFT", "Links falsos de marketplace NFT são um golpe comum. Sempre verifique se está no site oficial. Nunca conecte sua carteira a um marketplace acessado por link de rede social ou anúncio."],
    ["Risco de custódia em exchange", "Quando seu cripto está em uma exchange, você não tem as chaves privadas. Se a exchange for hackeada ou falir, o acesso aos seus fundos pode ser perdido. Deixe na exchange apenas o que planeja negociar."],
    ["Risco de contrato inteligente DeFi", "Interagir com um protocolo DeFi significa confiar no código do contrato inteligente. Mesmo contratos auditados podem ter bugs. Comece com valores pequenos ao usar qualquer protocolo DeFi novo."]
  ],
  tr: [
    ["Seed phrase güvenliği", "Seed phrase cüzdanınız için ana kurtarma anahtarıdır. Kağıda yazın ve çevrimdışı saklayın. Bir web sitesine yazmayın, sohbette paylaşmayın veya fotoğrafta ya da bulut dosyasında saklamayın. Seed phrase'inize sahip olan herkes cüzdanınızdaki her şeyi alabilir."],
    ["Yanlış ağ transferi uyarısı", "Kriptoyu yanlış ağda gönderirseniz, fonlar kalıcı olarak kaybolabilir. Göndermeden önce her iki tarafta da ağın eşleştiğini her zaman doğrulayın."],
    ["Cüzdan onayı uyarısı", "DeFi uygulamaları token harcamanızı onaylamanızı ister. Sınırsız onay bir sözleşmeye istediği zaman tokenlarınızı alma hakkı verir. Eski onayları gözden geçirmek için revoke.cash gibi bir araç kullanın."],
    ["Phishing bağlantısı uyarısı", "Dolandırıcılar gerçeğine neredeyse özdeş sahte web siteleri oluşturur. URL'yi her zaman manuel olarak yazın veya güvenilir bir yer işareti kullanın. DM'lerdeki veya sosyal medya yorumlarındaki bağlantılara asla tıklamayın."],
    ["Stablecoin transfer uyarısı", "USDT gibi stablecoinler birden fazla ağda mevcuttur. Yanlış ağda USDT göndermek fon kaybına neden olabilir. Ağın hedefle eşleştiğini her zaman doğrulayın."],
    ["NFT marketplace phishing uyarısı", "Sahte NFT marketplace bağlantıları yaygın bir dolandırıcılıktır. Her zaman resmi sitede olduğunuzu doğrulayın. Sosyal medya bağlantısı veya reklam aracılığıyla ulaştığınız bir marketplace'e cüzdanınızı bağlamayın."],
    ["Borsa saklama riski", "Kriptonuz bir borsada tutulduğunda özel anahtarları siz tutmuyorsunuzdur. Borsa hacklenirse veya çökerse fonlarınıza erişim kaybolabilir. Borsada yalnızca işlem yapmayı planladığınız kadarını bırakın."],
    ["DeFi akıllı sözleşme riski", "Bir DeFi protokolüyle etkileşime girmek akıllı sözleşme koduna güvenmek anlamına gelir. Denetlenmiş sözleşmelerin bile hataları olabilir. Yeni bir DeFi protokolü kullanırken küçük miktarlarla başlayın."]
  ],
  es: [
    ["Seguridad de seed phrase", "La seed phrase es la clave maestra de recuperación de tu billetera. Escríbela en papel y guárdala sin conexión. Nunca la escribas en un sitio web, la compartas en un chat ni la almacenes en una foto o archivo en la nube. Quien tenga tu seed phrase puede llevarse todo lo que hay en tu billetera."],
    ["Precaución con transferencia en red incorrecta", "Si envías cripto por la red equivocada, los fondos pueden perderse de forma permanente. Siempre confirma que la red coincide en ambos lados antes de enviar."],
    ["Precaución con aprobaciones de billetera", "Las apps DeFi te piden aprobar el gasto de tokens. Una aprobación ilimitada da a un contrato el derecho de vaciar tus tokens. Usa una herramienta como revoke.cash para revisar y eliminar aprobaciones antiguas."],
    ["Advertencia de enlace de phishing", "Los estafadores crean sitios web falsos casi idénticos a los reales. Siempre escribe la URL manualmente o usa un marcador de confianza. Nunca hagas clic en enlaces en DMs, comentarios de redes sociales o mensajes no solicitados."],
    ["Precaución con transferencia de stablecoin", "Las stablecoins como USDT existen en múltiples redes. Enviar USDT por la red incorrecta puede resultar en pérdida de fondos. Siempre confirma que la red coincide con el destino."],
    ["Precaución con phishing en marketplace NFT", "Los enlaces falsos de marketplace NFT son una estafa común. Siempre verifica que estás en el sitio oficial. Nunca conectes tu billetera a un marketplace al que accediste a través de un enlace de redes sociales o un anuncio."],
    ["Riesgo de custodia en exchange", "Cuando tu cripto está en un exchange, no tienes las claves privadas. Si el exchange es hackeado o colapsa, el acceso a tus fondos puede perderse. Deja en el exchange solo lo que planeas operar."],
    ["Riesgo de contrato inteligente DeFi", "Interactuar con un protocolo DeFi significa confiar en el código del contrato inteligente. Incluso los contratos auditados pueden tener errores. Empieza con cantidades pequeñas al usar cualquier protocolo DeFi nuevo."]
  ],
  ar: [
    ["أمان عبارة البذرة", "عبارة البذرة هي مفتاح الاسترداد الرئيسي لمحفظتك. اكتبها على ورق واحفظها دون اتصال بالإنترنت. لا تكتبها في موقع ويب ولا تشاركها في دردشة ولا تحفظها في صورة أو ملف سحابي. من يملك عبارة بذرتك يستطيع أخذ كل شيء في محفظتك."],
    ["تحذير تحويل الشبكة الخاطئة", "إذا أرسلت كريبتو على الشبكة الخاطئة قد تُفقد الأموال بشكل دائم. تحقق دائماً من تطابق الشبكة على كلا الجانبين قبل الإرسال."],
    ["تحذير موافقة المحفظة", "تطلب تطبيقات DeFi منك الموافقة على إنفاق الرموز. الموافقة غير المحدودة تمنح العقد الحق في استنزاف رموزك. استخدم أداة مثل revoke.cash لمراجعة وإزالة الموافقات القديمة."],
    ["تحذير روابط التصيد", "ينشئ المحتالون مواقع ويب مزيفة تبدو مطابقة تقريباً للحقيقية. اكتب URL يدوياً دائماً أو استخدم إشارة مرجعية موثوقة. لا تنقر على روابط في الرسائل المباشرة أو تعليقات وسائل التواصل الاجتماعي."],
    ["تحذير تحويل العملة المستقرة", "العملات المستقرة مثل USDT موجودة على شبكات متعددة. إرسال USDT على الشبكة الخاطئة قد يؤدي إلى فقدان الأموال. تحقق دائماً من تطابق الشبكة مع الوجهة."],
    ["تحذير تصيد سوق NFT", "روابط أسواق NFT المزيفة عملية احتيال شائعة. تحقق دائماً من أنك على الموقع الرسمي. لا تربط محفظتك بسوق وصلت إليه عبر رابط وسائل التواصل الاجتماعي أو إعلان."],
    ["مخاطر حضانة Exchange", "عندما يكون الكريبتو في منصة تداول لا تمتلك المفاتيح الخاصة. إذا تعرضت المنصة للاختراق أو انهارت قد يُفقد الوصول إلى أموالك. اترك في المنصة فقط ما تخطط للتداول به."],
    ["مخاطر العقود الذكية في DeFi", "التفاعل مع بروتوكول DeFi يعني الثقة في كود العقد الذكي. حتى العقود الخاضعة للتدقيق قد تحتوي على أخطاء. ابدأ بمبالغ صغيرة عند استخدام أي بروتوكول DeFi جديد."]
  ],
  vi: [
    ["Bảo mật seed phrase", "Seed phrase là chìa khóa khôi phục chính của ví bạn. Viết ra giấy và lưu trữ offline. Đừng bao giờ gõ vào một trang web, chia sẻ qua chat, hoặc lưu trong ảnh hay file đám mây. Bất kỳ ai có seed phrase của bạn có thể lấy tất cả trong ví của bạn."],
    ["Cảnh báo chuyển sai mạng", "Nếu gửi crypto trên mạng sai, tiền có thể mất vĩnh viễn. Luôn xác nhận mạng khớp ở cả hai phía trước khi gửi."],
    ["Cảnh báo chấp thuận ví", "Các ứng dụng DeFi yêu cầu bạn chấp thuận chi tiêu token. Chấp thuận không giới hạn cho hợp đồng quyền rút token bất cứ lúc nào. Sử dụng công cụ như revoke.cash để xem xét và xóa các chấp thuận cũ."],
    ["Cảnh báo liên kết phishing", "Kẻ lừa đảo tạo các trang web giả gần như giống hệt trang thật. Luôn gõ URL thủ công hoặc sử dụng bookmark đáng tin cậy. Đừng bao giờ nhấp vào liên kết trong DM hoặc bình luận mạng xã hội."],
    ["Cảnh báo chuyển stablecoin", "Stablecoin như USDT tồn tại trên nhiều mạng. Gửi USDT trên mạng sai có thể dẫn đến mất tiền. Luôn xác nhận mạng khớp với đích đến."],
    ["Cảnh báo phishing marketplace NFT", "Liên kết marketplace NFT giả là trò lừa đảo phổ biến. Luôn xác minh bạn đang ở trang web chính thức. Đừng bao giờ kết nối ví với marketplace bạn truy cập qua liên kết mạng xã hội hoặc quảng cáo."],
    ["Rủi ro lưu ký trên sàn giao dịch", "Khi crypto của bạn được giữ trên sàn giao dịch, bạn không nắm giữ khóa riêng. Nếu sàn bị hack hoặc sụp đổ, việc truy cập tiền của bạn có thể bị mất. Chỉ để lại trên sàn những gì bạn dự định giao dịch."],
    ["Rủi ro hợp đồng thông minh DeFi", "Tương tác với giao thức DeFi có nghĩa là tin tưởng vào mã hợp đồng thông minh. Ngay cả các hợp đồng đã được kiểm toán cũng có thể có lỗi. Bắt đầu với số tiền nhỏ khi sử dụng bất kỳ giao thức DeFi mới nào."]
  ]
};

var repCoinMappings = {
  en: {
    bitcoin:  { relatedFaq:["What is Bitcoin?"],                                           relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Seed phrase safety","Exchange custody risk","Phishing link warning"] },
    ethereum: { relatedFaq:["What is Ethereum?","What is a gas fee?"],                     relatedSources:["Ethereum.org"],                                           relatedSafety:["Smart contract risk","Wallet approval caution","Phishing link warning"] },
    solana:   { relatedFaq:["What is Ethereum?","What is a gas fee?"],                     relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Wrong network transfer caution","Exchange custody risk","Phishing link warning"] },
    xrp:      { relatedFaq:["What is Bitcoin?","What is an exchange?"],                    relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Exchange custody risk","Phishing link warning","Seed phrase safety"] },
    bnb:      { relatedFaq:["What is an exchange?","What is a gas fee?"],                  relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Exchange custody risk","Wrong network transfer caution","Phishing link warning"] },
    usdt:     { relatedFaq:["What is a stablecoin?","Does 'stable' mean risk-free?"],      relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Stablecoin transfer caution","Wrong network transfer caution","Exchange custody risk"] },
    aave:     { relatedFaq:["What is DeFi?","Is DeFi the same as a bank?"],                relatedSources:["Ethereum.org"],                                           relatedSafety:["Smart contract risk","Wallet approval caution","Phishing link warning"] },
    nft:      { relatedFaq:["What is an NFT?","Are NFTs just pictures?"],                  relatedSources:["Ethereum.org"],                                           relatedSafety:["NFT marketplace phishing caution","Wallet approval caution","Phishing link warning"] }
  },
  ko: {
    bitcoin:  { relatedFaq:["비트코인이란?"],                                               relatedSources:["비트코인 백서"],                                          relatedSafety:["시드 문구 안전","거래소 커스터디 위험","피싱 링크 경고"] },
    ethereum: { relatedFaq:["이더리움이란?","가스비란?"],                                   relatedSources:["Ethereum.org"],                                           relatedSafety:["스마트 컨트랙트 위험","지갑 승인 주의","피싱 링크 경고"] },
    solana:   { relatedFaq:["이더리움이란?","가스비란?"],                                   relatedSources:["Solana 문서"],                                            relatedSafety:["네트워크 오전송 주의","거래소 커스터디 위험","피싱 링크 경고"] },
    xrp:      { relatedFaq:["비트코인이란?","거래소란?"],                                   relatedSources:["비트코인 백서"],                                          relatedSafety:["거래소 커스터디 위험","피싱 링크 경고","시드 문구 안전"] },
    bnb:      { relatedFaq:["거래소란?","가스비란?"],                                       relatedSources:["BNB Chain 문서"],                                         relatedSafety:["거래소 커스터디 위험","네트워크 오전송 주의","피싱 링크 경고"] },
    usdt:     { relatedFaq:["스테이블코인이란?","'스테이블'이 무위험을 의미하나요?"],       relatedSources:["Tether 투명성 페이지"],                                    relatedSafety:["스테이블코인 전송 주의","네트워크 오전송 주의","거래소 커스터디 위험"] },
    aave:     { relatedFaq:["DeFi란?","DeFi는 은행과 같은가요?"],                           relatedSources:["Aave 문서"],                                              relatedSafety:["스마트 컨트랙트 위험","지갑 승인 주의","피싱 링크 경고"] },
    nft:      { relatedFaq:["NFT란?","NFT는 그냥 그림인가요?"],                             relatedSources:["OpenSea Learn"],                                          relatedSafety:["NFT 마켓플레이스 피싱 주의","지갑 승인 주의","피싱 링크 경고"] }
  },
  th: {
    bitcoin:  { relatedFaq:["Bitcoin คืออะไร?"],                                           relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["ความปลอดภัยของวลีสำรอง","ความเสี่ยงการดูแลสินทรัพย์ใน Exchange","คำเตือนลิงก์ฟิชชิง"] },
    ethereum: { relatedFaq:["Ethereum คืออะไร?","Gas fee คืออะไร?"],                      relatedSources:["Ethereum.org"],                                           relatedSafety:["ความเสี่ยงสมาร์ทคอนแทรค DeFi","ระวังการอนุมัติวอลเล็ต","คำเตือนลิงก์ฟิชชิง"] },
    solana:   { relatedFaq:["Ethereum คืออะไร?","Gas fee คืออะไร?"],                      relatedSources:["Solana Docs"],                                            relatedSafety:["ระวังการโอนผิดเครือข่าย","ความเสี่ยงการดูแลสินทรัพย์ใน Exchange","คำเตือนลิงก์ฟิชชิง"] },
    xrp:      { relatedFaq:["Bitcoin คืออะไร?","Exchange คืออะไร?"],                      relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["ความเสี่ยงการดูแลสินทรัพย์ใน Exchange","คำเตือนลิงก์ฟิชชิง","ความปลอดภัยของวลีสำรอง"] },
    bnb:      { relatedFaq:["Exchange คืออะไร?","Gas fee คืออะไร?"],                      relatedSources:["Aave Docs"],                                              relatedSafety:["ความเสี่ยงการดูแลสินทรัพย์ใน Exchange","ระวังการโอนผิดเครือข่าย","คำเตือนลิงก์ฟิชชิง"] },
    usdt:     { relatedFaq:["Stablecoin คืออะไร?","'Stable' หมายความว่าไม่มีความเสี่ยงหรือ?"], relatedSources:["Tether transparency page"],                       relatedSafety:["ระวังการโอน Stablecoin","ระวังการโอนผิดเครือข่าย","ความเสี่ยงการดูแลสินทรัพย์ใน Exchange"] },
    aave:     { relatedFaq:["DeFi คืออะไร?","DeFi เหมือนธนาคารหรือ?"],                   relatedSources:["Aave Docs"],                                              relatedSafety:["ความเสี่ยงสมาร์ทคอนแทรค DeFi","ระวังการอนุมัติวอลเล็ต","คำเตือนลิงก์ฟิชชิง"] },
    nft:      { relatedFaq:["NFT คืออะไร?","NFT เป็นแค่รูปภาพหรือ?"],                    relatedSources:["OpenSea Learn"],                                          relatedSafety:["ระวังฟิชชิง NFT Marketplace","ระวังการอนุมัติวอลเล็ต","คำเตือนลิงก์ฟิชชิง"] }
  },
  id: {
    bitcoin:  { relatedFaq:["Apa itu Bitcoin?"],                                           relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Keamanan seed phrase","Risiko custody exchange","Peringatan tautan phishing"] },
    ethereum: { relatedFaq:["Apa itu Ethereum?","Mengapa ada gas fee?"],                   relatedSources:["Ethereum.org"],                                           relatedSafety:["Risiko smart contract DeFi","Kehati-hatian persetujuan wallet","Peringatan tautan phishing"] },
    solana:   { relatedFaq:["Apa itu Ethereum?","Mengapa ada gas fee?"],                   relatedSources:["Solana Docs"],                                            relatedSafety:["Kehati-hatian transfer jaringan yang salah","Risiko custody exchange","Peringatan tautan phishing"] },
    xrp:      { relatedFaq:["Apa itu Bitcoin?","Apa itu bursa (exchange)?"],               relatedSources:["Situs Ripple"],                                           relatedSafety:["Risiko custody exchange","Peringatan tautan phishing","Keamanan seed phrase"] },
    bnb:      { relatedFaq:["Apa itu bursa (exchange)?","Mengapa ada gas fee?"],           relatedSources:["BNB Chain Docs"],                                         relatedSafety:["Risiko custody exchange","Kehati-hatian transfer jaringan yang salah","Peringatan tautan phishing"] },
    usdt:     { relatedFaq:["Apa itu stablecoin?","Apakah 'stable' berarti bebas risiko?"], relatedSources:["Halaman transparansi Tether"],                          relatedSafety:["Kehati-hatian transfer stablecoin","Kehati-hatian transfer jaringan yang salah","Risiko custody exchange"] },
    aave:     { relatedFaq:["Apa itu DeFi?","Apakah DeFi sama dengan bank?"],             relatedSources:["Aave Docs"],                                              relatedSafety:["Risiko smart contract DeFi","Kehati-hatian persetujuan wallet","Peringatan tautan phishing"] },
    nft:      { relatedFaq:["Apa itu NFT?","Apakah NFT hanya gambar?"],                   relatedSources:["OpenSea Learn"],                                          relatedSafety:["Kehati-hatian phishing marketplace NFT","Kehati-hatian persetujuan wallet","Peringatan tautan phishing"] }
  },
  pt: {
    bitcoin:  { relatedFaq:["O que é Bitcoin?"],                                           relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Segurança da seed phrase","Risco de custódia em exchange","Aviso de link de phishing"] },
    ethereum: { relatedFaq:["O que é Ethereum?","O que é gas fee?"],                       relatedSources:["Ethereum.org"],                                           relatedSafety:["Risco de contrato inteligente DeFi","Cuidado com aprovações de carteira","Aviso de link de phishing"] },
    solana:   { relatedFaq:["O que é Ethereum?","O que é gas fee?"],                       relatedSources:["Solana Docs"],                                            relatedSafety:["Cuidado com transferência em rede errada","Risco de custódia em exchange","Aviso de link de phishing"] },
    xrp:      { relatedFaq:["O que é Bitcoin?","O que é uma exchange?"],                   relatedSources:["Site da Ripple"],                                         relatedSafety:["Risco de custódia em exchange","Aviso de link de phishing","Segurança da seed phrase"] },
    bnb:      { relatedFaq:["O que é uma exchange?","O que é gas fee?"],                   relatedSources:["BNB Chain Docs"],                                         relatedSafety:["Risco de custódia em exchange","Cuidado com transferência em rede errada","Aviso de link de phishing"] },
    usdt:     { relatedFaq:["O que é stablecoin?","'Stable' significa sem risco?"],        relatedSources:["Página de transparência Tether"],                         relatedSafety:["Cuidado com transferência de stablecoin","Cuidado com transferência em rede errada","Risco de custódia em exchange"] },
    aave:     { relatedFaq:["O que é DeFi?","DeFi é igual a um banco?"],                   relatedSources:["Aave Docs"],                                              relatedSafety:["Risco de contrato inteligente DeFi","Cuidado com aprovações de carteira","Aviso de link de phishing"] },
    nft:      { relatedFaq:["O que é NFT?","NFTs são só imagens?"],                        relatedSources:["OpenSea Learn"],                                          relatedSafety:["Cuidado com phishing em marketplace NFT","Cuidado com aprovações de carteira","Aviso de link de phishing"] }
  },
  tr: {
    bitcoin:  { relatedFaq:["Bitcoin nedir?"],                                             relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Seed phrase güvenliği","Borsa saklama riski","Phishing bağlantısı uyarısı"] },
    ethereum: { relatedFaq:["Ethereum nedir?","Gas ücreti nedir?"],                        relatedSources:["Ethereum.org"],                                           relatedSafety:["DeFi akıllı sözleşme riski","Cüzdan onayı uyarısı","Phishing bağlantısı uyarısı"] },
    solana:   { relatedFaq:["Ethereum nedir?","Gas ücreti nedir?"],                        relatedSources:["Solana Docs"],                                            relatedSafety:["Yanlış ağ transferi uyarısı","Borsa saklama riski","Phishing bağlantısı uyarısı"] },
    xrp:      { relatedFaq:["Bitcoin nedir?","Borsa nedir?"],                              relatedSources:["Ripple web sitesi"],                                      relatedSafety:["Borsa saklama riski","Phishing bağlantısı uyarısı","Seed phrase güvenliği"] },
    bnb:      { relatedFaq:["Borsa nedir?","Gas ücreti nedir?"],                           relatedSources:["BNB Chain Docs"],                                         relatedSafety:["Borsa saklama riski","Yanlış ağ transferi uyarısı","Phishing bağlantısı uyarısı"] },
    usdt:     { relatedFaq:["Stablecoin nedir?","'Stable' risksiz anlamına mı gelir?"],    relatedSources:["Tether şeffaflık sayfası"],                               relatedSafety:["Stablecoin transfer uyarısı","Yanlış ağ transferi uyarısı","Borsa saklama riski"] },
    aave:     { relatedFaq:["DeFi nedir?","DeFi bankaya benzer mi?"],                      relatedSources:["Aave Docs"],                                              relatedSafety:["DeFi akıllı sözleşme riski","Cüzdan onayı uyarısı","Phishing bağlantısı uyarısı"] },
    nft:      { relatedFaq:["NFT nedir?","NFT'ler sadece resim midir?"],                   relatedSources:["OpenSea Learn"],                                          relatedSafety:["NFT marketplace phishing uyarısı","Cüzdan onayı uyarısı","Phishing bağlantısı uyarısı"] }
  },
  ar: {
    bitcoin:  { relatedFaq:["ما هو البيتكوين؟"],                                          relatedSources:["ورقة بيتكوين البيضاء"],                                   relatedSafety:["أمان عبارة البذرة","مخاطر حضانة Exchange","تحذير روابط التصيد"] },
    ethereum: { relatedFaq:["ما هو إيثريوم؟","ما هي رسوم الغاز؟"],                        relatedSources:["Ethereum.org"],                                           relatedSafety:["مخاطر العقود الذكية في DeFi","تحذير موافقة المحفظة","تحذير روابط التصيد"] },
    solana:   { relatedFaq:["ما هو إيثريوم؟","ما هي رسوم الغاز؟"],                        relatedSources:["وثائق Solana"],                                           relatedSafety:["تحذير تحويل الشبكة الخاطئة","مخاطر حضانة Exchange","تحذير روابط التصيد"] },
    xrp:      { relatedFaq:["ما هو البيتكوين؟","ما هي منصة التداول؟"],                    relatedSources:["موقع Ripple"],                                            relatedSafety:["مخاطر حضانة Exchange","تحذير روابط التصيد","أمان عبارة البذرة"] },
    bnb:      { relatedFaq:["ما هي منصة التداول؟","ما هي رسوم الغاز؟"],                   relatedSources:["وثائق BNB Chain"],                                        relatedSafety:["مخاطر حضانة Exchange","تحذير تحويل الشبكة الخاطئة","تحذير روابط التصيد"] },
    usdt:     { relatedFaq:["ما هي العملة المستقرة؟","هل 'مستقر' يعني بلا مخاطر؟"],      relatedSources:["صفحة شفافية Tether"],                                     relatedSafety:["تحذير تحويل العملة المستقرة","تحذير تحويل الشبكة الخاطئة","مخاطر حضانة Exchange"] },
    aave:     { relatedFaq:["ما هو DeFi؟","هل DeFi مثل البنك؟"],                          relatedSources:["وثائق Aave"],                                             relatedSafety:["مخاطر العقود الذكية في DeFi","تحذير موافقة المحفظة","تحذير روابط التصيد"] },
    nft:      { relatedFaq:["ما هو NFT؟","هل NFTs مجرد صور؟"],                            relatedSources:["OpenSea Learn"],                                          relatedSafety:["تحذير تصيد سوق NFT","تحذير موافقة المحفظة","تحذير روابط التصيد"] }
  },
  vi: {
    bitcoin:  { relatedFaq:["Bitcoin là gì?"],                                             relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Bảo mật seed phrase","Rủi ro lưu ký trên sàn giao dịch","Cảnh báo liên kết phishing"] },
    ethereum: { relatedFaq:["Ethereum là gì?","Gas fee là gì?"],                           relatedSources:["Ethereum.org"],                                           relatedSafety:["Rủi ro hợp đồng thông minh DeFi","Cảnh báo chấp thuận ví","Cảnh báo liên kết phishing"] },
    solana:   { relatedFaq:["Ethereum là gì?","Gas fee là gì?"],                           relatedSources:["Solana Docs"],                                            relatedSafety:["Cảnh báo chuyển sai mạng","Rủi ro lưu ký trên sàn giao dịch","Cảnh báo liên kết phishing"] },
    xrp:      { relatedFaq:["Bitcoin là gì?","Sàn giao dịch là gì?"],                     relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Rủi ro lưu ký trên sàn giao dịch","Cảnh báo liên kết phishing","Bảo mật seed phrase"] },
    bnb:      { relatedFaq:["Sàn giao dịch là gì?","Gas fee là gì?"],                     relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Rủi ro lưu ký trên sàn giao dịch","Cảnh báo chuyển sai mạng","Cảnh báo liên kết phishing"] },
    usdt:     { relatedFaq:["Stablecoin là gì?","'Stable' có nghĩa là không có rủi ro?"], relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Cảnh báo chuyển stablecoin","Cảnh báo chuyển sai mạng","Rủi ro lưu ký trên sàn giao dịch"] },
    aave:     { relatedFaq:["DeFi là gì?","DeFi có giống ngân hàng không?"],               relatedSources:["Aave Docs"],                                              relatedSafety:["Rủi ro hợp đồng thông minh DeFi","Cảnh báo chấp thuận ví","Cảnh báo liên kết phishing"] },
    nft:      { relatedFaq:["NFT là gì?","NFT chỉ là ảnh thôi sao?"],                     relatedSources:["OpenSea Learn"],                                          relatedSafety:["Cảnh báo phishing marketplace NFT","Cảnh báo chấp thuận ví","Cảnh báo liên kết phishing"] }
  },
  es: {
    bitcoin:  { relatedFaq:["¿Qué es Bitcoin?"],                                           relatedSources:["Bitcoin Whitepaper"],                                     relatedSafety:["Seguridad de seed phrase","Riesgo de custodia en exchange","Advertencia de enlace de phishing"] },
    ethereum: { relatedFaq:["¿Qué es Ethereum?","¿Qué es una gas fee?"],                   relatedSources:["Ethereum.org"],                                           relatedSafety:["Riesgo de contrato inteligente DeFi","Precaución con aprobaciones de billetera","Advertencia de enlace de phishing"] },
    solana:   { relatedFaq:["¿Qué es Ethereum?","¿Qué es una gas fee?"],                   relatedSources:["Solana Docs"],                                            relatedSafety:["Precaución con transferencia en red incorrecta","Riesgo de custodia en exchange","Advertencia de enlace de phishing"] },
    xrp:      { relatedFaq:["¿Qué es Bitcoin?","¿Qué es un exchange?"],                    relatedSources:["Sitio de Ripple"],                                        relatedSafety:["Riesgo de custodia en exchange","Advertencia de enlace de phishing","Seguridad de seed phrase"] },
    bnb:      { relatedFaq:["¿Qué es un exchange?","¿Qué es una gas fee?"],                relatedSources:["BNB Chain Docs"],                                         relatedSafety:["Riesgo de custodia en exchange","Precaución con transferencia en red incorrecta","Advertencia de enlace de phishing"] },
    usdt:     { relatedFaq:["¿Qué es una stablecoin?","¿'Stable' significa sin riesgo?"],  relatedSources:["Página de transparencia Tether"],                         relatedSafety:["Precaución con transferencia de stablecoin","Precaución con transferencia en red incorrecta","Riesgo de custodia en exchange"] },
    aave:     { relatedFaq:["¿Qué es DeFi?","¿DeFi es igual que un banco?"],               relatedSources:["Aave Docs"],                                              relatedSafety:["Riesgo de contrato inteligente DeFi","Precaución con aprobaciones de billetera","Advertencia de enlace de phishing"] },
    nft:      { relatedFaq:["¿Qué es un NFT?","¿Los NFTs son solo imágenes?"],             relatedSources:["OpenSea Learn"],                                          relatedSafety:["Precaución con phishing en marketplace NFT","Precaución con aprobaciones de billetera","Advertencia de enlace de phishing"] }
  }
};
repCoinMappings.br = repCoinMappings.pt;
repCoinMappings.ha = {
  bitcoin:  { relatedFaq:["Menene Bitcoin?"],                                           relatedSources:["Takardar Asalin Bitcoin"],                                relatedSafety:["Tsaron jimlar dawo da walat","Hadarin dandalin musaya","Gargadin sabanin hanyar sadarwa"] },
  ethereum: { relatedFaq:["Menene Ethereum?","Menene kudin gas?"],                      relatedSources:["Ethereum.org"],                                           relatedSafety:["Hadarin kwangilar smart a tsarin kudi marar tsakiya","Gargadin sabanin hanyar sadarwa","Tsaron jimlar dawo da walat"] },
  solana:   { relatedFaq:["Menene Solana?","Me ya sa hanyar sadarwa take da muhimmanci?"], relatedSources:["Takardun Solana"],                                     relatedSafety:["Hadarin hanyar sadarwa","Gargadin sabanin hanyar sadarwa","Hadarin dandalin musaya"] },
  xrp:      { relatedFaq:["Menene XRP?","Me ya sa wasu kudaden dijital suke mayar da hankali kan biyan kudi?"], relatedSources:["Shafin Ripple"],             relatedSafety:["Hadarin ka'idoji","Hadarin dandalin musaya","Tsaron jimlar dawo da walat"] },
  bnb:      { relatedFaq:["Menene BNB?","Menene tokan na amfani?"],                     relatedSources:["Takardun BNB Chain"],                                     relatedSafety:["Hadarin dandalin musaya","Gargadin sabanin hanyar sadarwa","Tsaron jimlar dawo da walat"] },
  usdt:     { relatedFaq:["Menene USDT?","Shin tsayayyen kudin dijital ba shi da hadari?"], relatedSources:["Shafin Bayyananniyar Tether"],                        relatedSafety:["Hadarin kaucewar kima na tsayayyen kudin dijital","Gargadin sabanin hanyar sadarwa","Hadarin dandalin musaya"] },
  aave:     { relatedFaq:["Menene AAVE?","Shin tsarin kudi marar tsakiya iri daya ne da banki?"], relatedSources:["Takardun Aave"],                           relatedSafety:["Hadarin kwangilar smart a tsarin kudi marar tsakiya","Gargadin sabanin hanyar sadarwa","Tsaron jimlar dawo da walat"] },
  nft:      { relatedFaq:["Menene NFT?","Shin NFT hotuna kawai ne?"],                   relatedSources:["OpenSea Learn"],                                          relatedSafety:["Kariya daga damfarar NFT","Gargadin sabanin hanyar sadarwa","Tsaron jimlar dawo da walat"] }
};

// ── 1. Patch polishedSectionContent ──────────────────────────────────────────
var psc = (typeof polishedSectionContent !== 'undefined') ? polishedSectionContent : {};

// Ensure ar, vi, tr exist (fall back from en, then extend)
['ar','vi','tr'].forEach(function(lang){
  if(!psc[lang]){
    psc[lang] = JSON.parse(JSON.stringify(psc.en || {}));
    var titles = {
      ar:{ faqTitle:"الأسئلة الشائعة", faqIntro:"هذه الأسئلة هي الأكثر شيوعاً بين المبتدئين. اقرأ الإجابات أولاً بلغة بسيطة.", safetyTitle:"السلامة / منع الاحتيال", safetyIntro:"هذا أحد الأقسام الأكثر فائدة في المنصة. هذه العادات تمنع أخطاء المبتدئين." },
      vi:{ faqTitle:"Câu hỏi thường gặp", faqIntro:"Đây là những câu hỏi mà người mới bắt đầu hỏi nhiều nhất. Đọc bằng ngôn ngữ đơn giản trước.", safetyTitle:"An toàn / Phòng chống lừa đảo", safetyIntro:"Đây là một trong những phần thực tiễn nhất. Những thói quen này ngăn ngừa sai lầm của người mới." },
      tr:{ faqTitle:"Sık Sorulan Sorular", faqIntro:"Bunlar yeni başlayanların en sık sorduğu sorulardır.", safetyTitle:"Güvenlik / Dolandırıcılık Önleme", safetyIntro:"Bu platformun en pratik bölümlerinden biridir." }
    };
    if(titles[lang]){ Object.assign(psc[lang], titles[lang]); }
  }
});

  var ALL_LANGS = ['en','ko','th','id','pt','br','tr','ar','ha','vi','es'];
ALL_LANGS.forEach(function(lang){
  var tgt = (lang === 'br') ? 'pt' : lang;
  var pscLang = psc[lang];
  if(!pscLang || !pscLang.faqItems || !pscLang.safetyItems) return;

  var faqExt = coinFaqExtensions[tgt] || coinFaqExtensions.en;
  faqExt.forEach(function(item){
    if(!pscLang.faqItems.some(function(e){ return e[0] === item[0]; }))
      pscLang.faqItems.push(item);
  });

  var safetyExt = coinSafetyExtensions[tgt] || coinSafetyExtensions.en;
  safetyExt.forEach(function(item){
    if(!pscLang.safetyItems.some(function(e){ return e[0] === item[0]; }))
      pscLang.safetyItems.push(item);
  });
});

// ── 2. Apply relatedFaq / relatedSources / relatedSafety to coinEducation ────
if(typeof coinEducation !== 'undefined'){
  var repKeys = ['bitcoin','ethereum','solana','xrp','bnb','usdt','aave','nft'];
  ALL_LANGS.forEach(function(lang){
    var map = repCoinMappings[lang];
    var ceData = coinEducation[lang];
    if(!map || !ceData) return;
    repKeys.forEach(function(key){
      var coin = ceData[key];
      var m = map[key];
      if(!coin || !m) return;
      if(m.relatedFaq    && m.relatedFaq.length)    coin.relatedFaq    = m.relatedFaq;
      if(m.relatedSources && m.relatedSources.length) coin.relatedSources = m.relatedSources;
      if(m.relatedSafety  && m.relatedSafety.length)  coin.relatedSafety  = m.relatedSafety;
    });
  });
}

// ── 3. Re-render ─────────────────────────────────────────────────────────────
if(typeof renderAllLessons === 'function') renderAllLessons();
if(typeof showPage === 'function' && typeof currentPage !== 'undefined')
  showPage(currentPage || 'home');

})();