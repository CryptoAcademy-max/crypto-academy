const polishedSectionContent = {
  en: {
    startTitle: "Start Here",
    startIntro: "This page helps first-time visitors know exactly where to begin. Follow a simple order first, then branch out when the basic ideas feel clear.",
    startSteps: [
      ["Step 1 — Blockchain", "Start with Lesson 1 to understand what a blockchain is and why shared records matter."],
      ["Step 2 — Wallets", "Move to Lesson 2 next so you understand keys, addresses, and access before you move assets."],
      ["Step 3 — Glossary", "Open the Glossary after Lessons 1 and 2 if unfamiliar terms still feel confusing."],
      ["Step 4 — Safe Transfers", "Then go to Lesson 3 to learn the practical safety routine: network, address, test transfer, and TxID."],
      ["Step 5 — Roles and real-world lessons", "After the basics feel clear, continue to token roles, risk patterns, and real examples."]
    ],
    startTip: "A good beginner route is: 1 → 2 → Glossary → 3 → 4 → Safety → Source Library.",
    faqTitle: "FAQ",
    faqIntro: "These are the questions beginners ask most often. Read them in simple language before you worry about advanced details.",
    faqItems: [
      ["Do I really need a wallet?", "If you only buy and sell inside an exchange, you may not use a self-custody wallet immediately. But to understand ownership properly, you should still learn what a wallet is and how keys work."],
      ["What is the difference between an exchange and a wallet?", "An exchange is a service for trading and account management. A wallet is a tool that manages keys and access. They are related, but not the same thing."],
      ["Why do I pay gas fees?", "Gas fees are network fees. They help process and record transactions on a blockchain."],
      ["Is it safe to share my wallet address?", "Yes, a wallet address is meant to receive assets. But private keys and seed phrases must never be shared."],
      ["Why should I send a small test first?", "Because one small test can catch address or network mistakes before a larger transfer is at risk."],
      ["Is Coin ProofPath an investment recommendation site?", "No. Coin ProofPath does not recommend buying specific coins or making investments. It is a free education site for learning crypto basics such as wallets, exchanges, fees, bridges, and information verification.", "Site Use", ["investment advice", "free crypto education", "crypto education", "Coin ProofPath"], "faq-investment-advice"],
      ["Are search results investment rankings?", "No. Search results are not investment rankings. They show learning materials related to your search term. Appearing higher does not mean a coin is better.", "Search", ["search results", "ranking", "investment rankings"], "faq-search-ranking"],
      ["How should I use exchanges and wallets differently?", "Exchanges are convenient for buying and selling, while wallets give users more control. Beginners should think of exchanges for trading and wallets for storage and self-custody.", "Exchanges and Wallets", ["exchange", "wallet", "self-custody", "custody"], "faq-exchange-wallet"],
      ["Why is a small test transfer important?", "If you choose the wrong address or network, it may be difficult to recover your assets. A small test transfer helps confirm the address, network, fee, and arrival before sending a larger amount.", "Exchanges and Wallets", ["test transfer", "address check", "network check", "transfer safety"], "faq-test-transfer"],
      ["Why can the same coin exist on multiple networks?", "One asset can exist on multiple networks. For example, USDT can be transferred on Ethereum, Tron, BNB Chain, and other networks. The sending and receiving networks must match.", "Networks and Fees", ["network", "USDT", "Ethereum", "Tron", "BNB Chain", "wrong network"], "faq-multiple-networks"],
      ["Should I always choose the cheapest network fee?", "No. Choosing only by fee can be risky. First check whether the receiving wallet or exchange supports that network. A cheap fee does not help if the network is wrong.", "Networks and Fees", ["fee", "network fee", "gas fee", "transaction fee", "wrong network"], "faq-cheapest-network-fee"],
      ["Are all stablecoins safe?", "No. Stablecoins may look similar in price, but their issuers, reserves, liquidity, transparency, and depeg risks can be different.", "Stablecoins", ["stablecoin", "reserve", "issuer", "depeg", "peg"], "faq-stablecoin-safe"],
      ["Are wallet connection and token approval the same?", "No. Connecting a wallet usually lets a site see your wallet address. Approval gives permission to use a specific token, so approvals should be checked more carefully.", "DeFi and Approvals", ["wallet connect", "approval", "token approval"], "faq-wallet-connect-approval"],
      ["Why can bridges be risky?", "Bridges move assets between different chains, so you need to check the network, supported token, fees, and security structure. Using the wrong chain or a fake bridge site can lead to asset loss.", "Bridges and Multichain", ["bridge", "cross-chain", "bridge risk", "multichain"], "faq-bridge-risk"],
      ["What should I do if a site asks for my seed phrase?", "Stop immediately. Legitimate services do not ask for your recovery phrase or private key. If you enter your seed phrase, you may lose control of your wallet.", "Scam Prevention and Verification", ["seed phrase", "private key", "wallet recovery", "scam"], "faq-seed-phrase"]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "This is one of the most practical sections in the whole platform. These habits can prevent beginner mistakes before they become real losses.",
    safetyItems: [
      ["Never share your seed phrase", "A seed phrase is recovery access. Anyone who gets it may control the wallet."],
      ["Be careful with fake airdrops", "Scammers often use free-token offers to push users toward fake websites or approvals."],
      ["Check links before connecting", "Phishing links often look almost correct. Slow down and verify the domain carefully."],
      ["Send a small test amount first", "Especially on a new network or new address, a small test can prevent a larger mistake."],
      ["Treat urgency as a warning sign", "Pressure, countdowns, threats, and forced payment requests are common scam patterns."]
    ]
  },
  ko: {
    startTitle: "Start Here",
    startIntro: "처음 들어온 사람이 어디부터 보면 되는지 바로 이해할 수 있도록 정리한 입문 안내 페이지입니다. 기초 개념부터 차근차근 보는 것이 가장 좋습니다.",
    startSteps: [
      ["1단계 — 블록체인", "먼저 1강에서 블록체인이 무엇인지, 왜 공유 기록 구조가 중요한지 이해해보세요."],
      ["2단계 — 지갑", "그다음 2강으로 넘어가 주소, 키, 접근 권한의 차이를 익히는 것이 좋습니다."],
      ["3단계 — 용어사전", "1강과 2강을 본 뒤에도 낯선 단어가 있다면 용어사전을 함께 보세요."],
      ["4단계 — 안전한 전송", "이후 3강에서 네트워크, 주소, 테스트 전송, TxID 확인 순서를 익히세요."],
      ["5단계 — 역할과 실제 교훈", "기초가 잡히면 토큰 역할, 위험 패턴, 실제 사례까지 이어서 보시면 됩니다."]
    ],
    startTip: "처음이라면 1 → 2 → 용어사전 → 3 → 4 → Safety → Source Library 순서가 가장 좋습니다.",
    faqTitle: "FAQ",
    faqIntro: "초보자가 가장 자주 헷갈리는 질문을 한 번에 정리한 섹션입니다. 어려운 내용보다 먼저 기본적인 차이를 이해하는 데 집중하세요.",
    faqItems: [
      ["지갑이 꼭 필요한가요?", "거래소 안에서만 사고파는 경우 당장 자체 지갑을 쓰지 않을 수도 있습니다. 하지만 자산 통제 구조를 이해하려면 지갑과 키의 개념은 꼭 알아두는 것이 좋습니다."],
      ["거래소와 지갑의 차이는 무엇인가요?", "거래소는 거래와 계정 관리를 위한 서비스이고, 지갑은 키와 접근 권한을 관리하는 도구입니다. 서로 관련은 있지만 같은 것은 아닙니다."],
      ["가스비는 왜 내나요?", "가스비는 블록체인 네트워크가 거래를 처리하고 기록하는 데 필요한 수수료입니다."],
      ["지갑 주소는 공유해도 되나요?", "네, 지갑 주소는 자산을 받기 위한 공개 가능한 정보입니다. 하지만 개인키와 시드 문구는 절대 공유하면 안 됩니다."],
      ["왜 소액 테스트 전송을 먼저 해야 하나요?", "작은 실수는 작은 금액으로 확인할 수 있지만, 큰 금액은 되돌리기 어렵기 때문입니다."],
      ["Coin ProofPath는 투자 추천 사이트인가요?", "아니요. Coin ProofPath는 특정 코인 매수나 투자를 추천하는 사이트가 아닙니다. 암호화폐를 더 안전하게 이해하고, 지갑·거래소·수수료·브리지·정보 검증 같은 기본 구조를 배우기 위한 무료 교육 사이트입니다.", "사이트 이용", ["투자 추천", "무료 교육", "Coin ProofPath", "crypto education", "investment advice"], "faq-investment-advice"],
      ["검색 결과가 투자 추천 순위인가요?", "아니요. 검색 결과는 투자 추천 순위가 아닙니다. 입력한 검색어와 관련된 학습 자료를 보여주는 구조이며, 상단에 나온다고 해서 더 좋은 코인이라는 뜻은 아닙니다.", "검색 기능", ["검색 결과", "투자 추천", "순위", "ranking", "search result"], "faq-search-ranking"],
      ["거래소와 지갑은 어떻게 다르게 써야 하나요?", "거래소는 사고팔기 편한 곳이고, 지갑은 사용자가 통제권을 더 많이 갖는 곳입니다. 초보자는 거래소를 구매와 거래용으로, 지갑은 보관과 자기 통제권을 이해하는 도구로 나누어 생각하는 것이 좋습니다.", "거래소와 지갑", ["거래소", "지갑", "self-custody", "custody", "exchange", "wallet"], "faq-exchange-wallet"],
      ["소액 테스트는 왜 필요한가요?", "주소나 네트워크를 잘못 선택하면 자산을 되찾기 어려울 수 있습니다. 큰 금액을 보내기 전에 작은 금액으로 먼저 전송해보면 주소, 네트워크, 수수료, 도착 여부를 확인할 수 있습니다.", "거래소와 지갑", ["소액 테스트", "test transfer", "주소 확인", "네트워크 확인", "transfer safety"], "faq-test-transfer"],
      ["같은 코인인데 왜 네트워크가 여러 개인가요?", "하나의 자산이 여러 네트워크에서 사용될 수 있기 때문입니다. 예를 들어 같은 USDT라도 Ethereum, Tron, BNB Chain 등 여러 네트워크에서 전송될 수 있습니다. 보내는 곳과 받는 곳의 네트워크가 같아야 합니다.", "네트워크와 수수료", ["네트워크", "USDT", "Ethereum", "Tron", "BNB Chain", "wrong network"], "faq-multiple-networks"],
      ["수수료가 가장 싼 네트워크를 고르면 되나요?", "수수료만 보고 선택하면 위험합니다. 받는 지갑이나 거래소가 해당 네트워크를 지원하는지 먼저 확인해야 합니다. 수수료가 낮아도 잘못된 네트워크를 선택하면 자산을 찾기 어려울 수 있습니다.", "네트워크와 수수료", ["수수료", "네트워크 수수료", "gas fee", "transaction fee", "wrong network"], "faq-cheapest-network-fee"],
      ["스테이블코인은 전부 안전한가요?", "아니요. 스테이블코인은 가격이 비슷해 보여도 발행자, 준비금, 유동성, 투명성, 디페그 위험이 다를 수 있습니다.", "스테이블코인", ["스테이블코인", "stablecoin", "reserve", "issuer", "depeg", "peg"], "faq-stablecoin-safe"],
      ["지갑 연결과 승인은 같은 뜻인가요?", "아닙니다. 지갑 연결은 사이트가 지갑 주소를 확인하는 단계에 가깝고, 승인은 특정 토큰 사용 권한을 허용하는 단계입니다. 승인은 더 신중하게 확인해야 합니다.", "DeFi와 승인", ["지갑 연결", "승인", "approval", "wallet connect", "token approval"], "faq-wallet-connect-approval"],
      ["브리지는 왜 위험할 수 있나요?", "브리지는 서로 다른 체인 사이에서 자산을 이동시키는 과정이기 때문에, 네트워크 선택, 지원 토큰, 수수료, 보안 구조를 모두 확인해야 합니다. 잘못된 체인이나 가짜 브리지 사이트를 사용하면 자산 손실 위험이 있습니다.", "브리지와 멀티체인", ["브리지", "bridge", "cross-chain", "bridge risk", "multichain"], "faq-bridge-risk"],
      ["시드 문구를 입력하라고 하면 어떻게 해야 하나요?", "즉시 멈춰야 합니다. 정상적인 서비스는 지갑 복구 문구나 개인키를 요구하지 않습니다. 시드 문구를 입력하면 지갑 통제권을 잃을 수 있습니다.", "사기 예방과 정보 검증", ["시드 문구", "seed phrase", "private key", "wallet recovery", "scam"], "faq-seed-phrase"]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "실제 도움을 가장 많이 주는 섹션입니다. 아래 습관만 익혀도 초보자 실수를 크게 줄일 수 있습니다.",
    safetyItems: [
      ["시드 문구는 절대 공유하지 마세요", "시드 문구는 복구 권한입니다. 누군가 이 문구를 알게 되면 지갑을 통제할 수 있습니다."],
      ["가짜 에어드랍을 조심하세요", "무료 토큰을 준다는 말로 가짜 사이트 접속이나 위험한 승인을 유도하는 경우가 많습니다."],
      ["연결 전에 링크를 먼저 확인하세요", "피싱 링크는 거의 비슷하게 보이기 때문에 도메인을 천천히 다시 확인해야 합니다."],
      ["가능하면 소액 테스트 전송부터 하세요", "새 네트워크나 새 주소로 보낼 때는 작은 금액으로 먼저 확인하는 습관이 중요합니다."],
      ["과도한 긴급성은 경고 신호로 보세요", "압박, 카운트다운, 위협, 즉시 결제 요구는 사기에서 자주 보이는 패턴입니다."]
    ]
  },
  th: {
    startTitle: "Start Here",
    startIntro: "หน้านี้ช่วยให้ผู้ที่เพิ่งเข้ามาครั้งแรกเห็นชัดเจนว่าควรเริ่มจากตรงไหนก่อน เรียนพื้นฐานให้เข้าใจก่อน แล้วค่อยขยายไปหัวข้ออื่นจะง่ายที่สุด",
    startSteps: [
      ["ขั้นที่ 1 — บล็อกเชน", "เริ่มจากบทเรียนที่ 1 เพื่อเข้าใจว่าบล็อกเชนคืออะไร และทำไมบันทึกแบบแชร์จึงสำคัญ"],
      ["ขั้นที่ 2 — วอลเล็ต", "จากนั้นไปบทเรียนที่ 2 เพื่อเข้าใจคีย์ ที่อยู่ และสิทธิ์การเข้าถึงก่อนขยับไปเรื่องการย้ายสินทรัพย์"],
      ["ขั้นที่ 3 — อภิธานศัพท์", "ถ้าหลังจากบทที่ 1 และ 2 ยังมีคำที่ไม่คุ้น ให้เปิดอภิธานศัพท์ประกอบทันที"],
      ["ขั้นที่ 4 — การโอนอย่างปลอดภัย", "ต่อด้วยบทเรียนที่ 3 เพื่อฝึกขั้นตอนใช้งานจริง: เครือข่าย ที่อยู่ การโอนทดลอง และการตรวจสอบด้วย TxID"],
      ["ขั้นที่ 5 — บทบาทและบทเรียนจากโลกจริง", "เมื่อพื้นฐานเริ่มชัดแล้ว ค่อยไปต่อที่บทบาทของโทเคน รูปแบบความเสี่ยง และกรณีจริง"]
    ],
    startTip: "เส้นทางสำหรับผู้เริ่มต้นที่แนะนำคือ 1 → 2 → อภิธานศัพท์ → 3 → 4 → Safety → Source Library",
    faqTitle: "FAQ",
    faqIntro: "นี่คือคำถามที่มือใหม่สับสนบ่อยที่สุด อ่านเวอร์ชันที่อธิบายด้วยภาษาง่ายก่อน แล้วค่อยไปต่อรายละเอียดขั้นสูง",
    faqItems: [
      ["จำเป็นต้องมีวอลเล็ตไหม?", "ถ้าคุณซื้อขายอยู่ใน exchange เท่านั้น คุณอาจยังไม่ใช้วอลเล็ตแบบดูแลคีย์เองทันที แต่ถ้าต้องการเข้าใจเรื่องการถือครองให้ถูกต้อง คุณควรรู้ว่าวอลเล็ตและคีย์ทำงานอย่างไร"],
      ["exchange กับวอลเล็ตต่างกันอย่างไร?", "exchange คือบริการสำหรับซื้อขายและจัดการบัญชี ส่วนวอลเล็ตคือเครื่องมือที่จัดการคีย์และสิทธิ์การเข้าถึง ทั้งสองอย่างเกี่ยวข้องกัน แต่ไม่ใช่สิ่งเดียวกัน"],
      ["ทำไมต้องจ่าย gas fee?", "gas fee คือค่าธรรมเนียมของเครือข่าย ใช้สำหรับประมวลผลและบันทึกธุรกรรมบนบล็อกเชน"],
      ["แชร์ที่อยู่กระเป๋าได้ไหม?", "ได้ ที่อยู่กระเป๋าใช้สำหรับรับสินทรัพย์ แต่คีย์ส่วนตัวและวลีสำรองต้องไม่แชร์เด็ดขาด"],
      ["ทำไมควรโอนทดลองก่อน?", "เพราะการโอนทดลองจำนวนเล็กน้อยช่วยจับความผิดพลาดของที่อยู่หรือเครือข่ายก่อนที่เงินก้อนใหญ่จะเสี่ยง"]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "นี่คือหนึ่งในส่วนที่ใช้งานได้จริงที่สุดของทั้งแพลตฟอร์ม แค่นิสัยพื้นฐานไม่กี่ข้อก็ช่วยลดความผิดพลาดของมือใหม่ได้มาก",
    safetyItems: [
      ["อย่าแชร์วลีสำรองเด็ดขาด", "วลีสำรองคือสิทธิ์ในการกู้คืน หากใครได้วลีนี้ไป เขาอาจควบคุมวอลเล็ตได้"],
      ["ระวัง airdrop ปลอม", "มิจฉาชีพมักใช้ข้อเสนอแจกโทเคนฟรีเพื่อล่อให้ผู้ใช้เข้าเว็บปลอมหรือกดยืนยันที่อันตราย"],
      ["ตรวจสอบลิงก์ก่อนเชื่อมต่อ", "ลิงก์ฟิชชิงมักดูคล้ายของจริงมาก ควรหยุดและตรวจสอบโดเมนอย่างละเอียด"],
      ["โอนทดลองจำนวนเล็กน้อยก่อน", "โดยเฉพาะเมื่อใช้เครือข่ายใหม่หรือที่อยู่ใหม่ การลองส่งเล็กน้อยก่อนช่วยลดความเสี่ยงจากความผิดพลาดใหญ่"],
      ["ถ้าถูกเร่งให้รีบ ให้มองว่าเป็นสัญญาณเตือน", "การกดดัน การนับถอยหลัง การขู่ หรือการบังคับให้จ่ายทันที เป็นรูปแบบที่พบได้บ่อยในกลโกง"]
    ]
  },
  id: {
    startTitle: "Start Here",
    startIntro: "Halaman ini membantu pengunjung baru memahami dengan jelas harus mulai dari mana. Pahami dasarnya dulu, lalu lanjutkan ke topik berikutnya secara bertahap.",
    startSteps: [
      ["Langkah 1 — Blockchain", "Mulailah dari Pelajaran 1 untuk memahami apa itu blockchain dan mengapa catatan bersama itu penting."],
      ["Langkah 2 — Wallet", "Lanjutkan ke Pelajaran 2 agar Anda memahami kunci, alamat, dan akses sebelum memindahkan aset."],
      ["Langkah 3 — Glosarium", "Jika setelah Pelajaran 1 dan 2 masih ada istilah yang terasa asing, buka Glosarium sebagai pendamping."],
      ["Langkah 4 — Transfer Aman", "Berikutnya buka Pelajaran 3 untuk mempelajari urutan praktis: jaringan, alamat, transfer uji, dan verifikasi TxID."],
      ["Langkah 5 — Peran dan pelajaran dunia nyata", "Setelah fondasinya jelas, lanjutkan ke peran token, pola risiko, dan contoh nyata."]
    ],
    startTip: "Urutan yang paling disarankan untuk pemula adalah 1 → 2 → Glosarium → 3 → 4 → Safety → Source Library.",
    faqTitle: "FAQ",
    faqIntro: "Ini adalah pertanyaan yang paling sering membingungkan pemula. Baca jawaban sederhananya dulu sebelum memikirkan detail yang lebih teknis.",
    faqItems: [
      ["Apakah saya benar-benar perlu wallet?", "Jika Anda hanya membeli dan menjual di dalam exchange, Anda mungkin belum memakai wallet self-custody sekarang juga. Tetapi untuk memahami kepemilikan dengan benar, Anda tetap perlu memahami wallet dan cara kerja kunci."],
      ["Apa perbedaan exchange dan wallet?", "Exchange adalah layanan untuk trading dan pengelolaan akun. Wallet adalah alat untuk mengelola kunci dan akses. Keduanya berhubungan, tetapi bukan hal yang sama."],
      ["Mengapa saya harus membayar gas fee?", "Gas fee adalah biaya jaringan. Biaya ini membantu memproses dan mencatat transaksi di blockchain."],
      ["Apakah aman membagikan alamat wallet?", "Ya, alamat wallet memang digunakan untuk menerima aset. Tetapi kunci privat dan frasa pemulihan tidak boleh pernah dibagikan."],
      ["Mengapa saya perlu mengirim transfer uji dulu?", "Karena satu transfer kecil dapat menangkap kesalahan alamat atau jaringan sebelum jumlah yang lebih besar ikut berisiko."]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "Ini adalah salah satu bagian paling praktis di seluruh platform. Kebiasaan ini bisa mencegah banyak kesalahan pemula sebelum berubah menjadi kerugian nyata.",
    safetyItems: [
      ["Jangan pernah membagikan frasa pemulihan", "Frasa pemulihan adalah akses pemulihan. Siapa pun yang mendapatkannya bisa mengambil alih wallet."],
      ["Waspadai airdrop palsu", "Penipu sering memakai janji token gratis untuk mendorong pengguna membuka situs palsu atau memberikan persetujuan berbahaya."],
      ["Periksa tautan sebelum menghubungkan wallet", "Tautan phishing sering terlihat hampir benar. Perlambat dan periksa domain dengan teliti."],
      ["Kirim jumlah kecil terlebih dahulu", "Terutama pada jaringan baru atau alamat baru, transfer uji kecil bisa mencegah kesalahan yang lebih besar."],
      ["Anggap desakan dan kepanikan sebagai sinyal bahaya", "Tekanan, hitung mundur, ancaman, dan permintaan pembayaran mendadak adalah pola penipuan yang sangat umum."]
    ]
  },
  pt: {
    startTitle: "Start Here",
    startIntro: "Esta página ajuda quem chegou agora a entender com clareza por onde começar. Primeiro construa a base, depois avance com calma para os outros tópicos.",
    startSteps: [
      ["Passo 1 — Blockchain", "Comece pela Lição 1 para entender o que é blockchain e por que um registro compartilhado importa."],
      ["Passo 2 — Carteiras", "Depois siga para a Lição 2 para entender chaves, endereços e acesso antes de mover ativos."],
      ["Passo 3 — Glossário", "Se depois das Lições 1 e 2 ainda houver termos confusos, abra o Glossário como apoio."],
      ["Passo 4 — Transferências seguras", "Em seguida, vá para a Lição 3 e aprenda a rotina prática: rede, endereço, transferência de teste e verificação por TxID."],
      ["Passo 5 — Papéis e lições do mundo real", "Quando a base estiver clara, avance para papéis dos tokens, padrões de risco e exemplos reais."]
    ],
    startTip: "Uma boa ordem para iniciantes é 1 → 2 → Glossário → 3 → 4 → Safety → Source Library.",
    faqTitle: "FAQ",
    faqIntro: "Estas são as dúvidas mais comuns de quem está começando. Leia as respostas em linguagem simples antes de se preocupar com detalhes avançados.",
    faqItems: [
      ["Eu realmente preciso de uma carteira?", "Se você só compra e vende dentro de uma exchange, talvez ainda não use uma carteira de autocustódia imediatamente. Mesmo assim, para entender posse e controle corretamente, vale aprender como carteiras e chaves funcionam."],
      ["Qual é a diferença entre exchange e carteira?", "A exchange é um serviço para negociar e administrar conta. A carteira é uma ferramenta que gerencia chaves e acesso. Elas se relacionam, mas não são a mesma coisa."],
      ["Por que eu pago gas fee?", "Gas fee é a taxa da rede. Ela ajuda a processar e registrar transações na blockchain."],
      ["É seguro compartilhar meu endereço de carteira?", "Sim, o endereço serve para receber ativos. Mas chave privada e frase de recuperação nunca devem ser compartilhadas."],
      ["Por que devo enviar um teste pequeno primeiro?", "Porque um teste pequeno pode revelar erro de endereço ou rede antes que um valor maior fique em risco."]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "Esta é uma das partes mais úteis de toda a plataforma. Esses hábitos ajudam a evitar erros básicos antes que eles virem perdas reais.",
    safetyItems: [
      ["Nunca compartilhe sua frase de recuperação", "A frase de recuperação é acesso de recuperação. Quem a obtiver pode controlar a carteira."],
      ["Cuidado com airdrops falsos", "Golpistas usam promessas de tokens grátis para levar usuários a sites falsos ou aprovações perigosas."],
      ["Verifique links antes de conectar", "Links de phishing costumam parecer quase corretos. Vá devagar e confira o domínio com cuidado."],
      ["Envie um pequeno teste primeiro", "Especialmente em uma rede nova ou para um endereço novo, um teste pequeno evita erros maiores."],
      ["Urgência excessiva é sinal de alerta", "Pressão, contagem regressiva, ameaça e pedido de pagamento imediato aparecem com frequência em golpes."]
    ]
  },
  es: {
    startTitle: "Start Here",
    startIntro: "Esta página ayuda a quien llega por primera vez a entender con claridad por dónde empezar. Primero construye la base y luego avanza poco a poco.",
    startSteps: [
      ["Paso 1 — Blockchain", "Empieza con la Lección 1 para entender qué es blockchain y por qué importa un registro compartido."],
      ["Paso 2 — Billeteras", "Después sigue con la Lección 2 para entender claves, direcciones y acceso antes de mover activos."],
      ["Paso 3 — Glosario", "Si después de las Lecciones 1 y 2 aún hay términos confusos, abre el Glosario como apoyo."],
      ["Paso 4 — Transferencias seguras", "Luego pasa a la Lección 3 y aprende la rutina práctica: red, dirección, transferencia de prueba y verificación con TxID."],
      ["Paso 5 — Roles y lecciones del mundo real", "Cuando la base esté clara, continúa con roles de tokens, patrones de riesgo y ejemplos reales."]
    ],
    startTip: "Un buen orden para principiantes es 1 → 2 → Glosario → 3 → 4 → Safety → Source Library.",
    faqTitle: "FAQ",
    faqIntro: "Estas son las preguntas que más confunden a los principiantes. Lee primero las respuestas en lenguaje simple antes de preocuparte por detalles avanzados.",
    faqItems: [
      ["¿Realmente necesito una billetera?", "Si solo compras y vendes dentro de un exchange, quizá todavía no uses una billetera de autocustodia. Aun así, para entender la propiedad correctamente, conviene aprender cómo funcionan las billeteras y las claves."],
      ["¿Cuál es la diferencia entre exchange y billetera?", "Un exchange es un servicio para operar y gestionar la cuenta. Una billetera es una herramienta para gestionar claves y acceso. Están relacionadas, pero no son lo mismo."],
      ["¿Por qué pago gas fee?", "La gas fee es una comisión de red. Sirve para procesar y registrar transacciones en la blockchain."],
      ["¿Es seguro compartir mi dirección de billetera?", "Sí, la dirección se usa para recibir activos. Pero la clave privada y la frase semilla nunca deben compartirse."],
      ["¿Por qué debo enviar primero una pequeña prueba?", "Porque una prueba pequeña puede detectar un error de dirección o red antes de que una cantidad mayor quede en riesgo."]
    ],
    safetyTitle: "Safety / Scam Prevention",
    safetyIntro: "Esta es una de las secciones más útiles de toda la plataforma. Estos hábitos pueden evitar errores de principiante antes de que se conviertan en pérdidas reales.",
    safetyItems: [
      ["Nunca compartas tu frase semilla", "La frase semilla es acceso de recuperación. Quien la obtenga puede controlar la billetera."],
      ["Ten cuidado con los airdrops falsos", "Los estafadores suelen usar promesas de tokens gratis para llevar a los usuarios a sitios falsos o aprobaciones peligrosas."],
      ["Revisa los enlaces antes de conectar", "Los enlaces de phishing suelen parecer casi correctos. Ve despacio y comprueba bien el dominio."],
      ["Envía primero una pequeña prueba", "Especialmente en una red nueva o a una dirección nueva, una pequeña prueba puede evitar un error mayor."],
      ["La urgencia excesiva es una señal de alerta", "La presión, la cuenta regresiva, la amenaza y la exigencia de pago inmediato son patrones muy comunes en estafas."]
    ]
  }
};

function renderStartHere(){
  const c = polishedSectionContent[currentLang] || polishedSectionContent.en;
  var hero = (typeof renderUnifiedPageHero === 'function' && typeof getStaticPageHeroConfig === 'function')
    ? renderUnifiedPageHero(getStaticPageHeroConfig('start', c.startTitle, c.startIntro))
    : `
    <div class="lc-header">
      <div class="lc-meta"><span class="meta-pill">${t('nav.start') || 'Start Here'}</span><span class="meta-cat">${c.startTitle}</span></div>
      <h1 class="lc-title">${c.startTitle}</h1>
      <p class="lc-intro">${c.startIntro}</p>
    </div>`;
  return `
    ${hero}
    <div class="lesson-body">
      <div class="steps-list">
        ${c.startSteps.map((item, i)=>`<div class="step-item"><div class="step-n">${i+1}</div><div><div class="step-title">${item[0]}</div><div class="step-desc">${item[1]}</div></div></div>`).join('')}
      </div>
      <div class="callout success"><strong>${t('callout.quick')}:</strong> ${c.startTip}</div>
    </div>`;
}

function renderFAQPage(){
  const c = polishedSectionContent[currentLang] || polishedSectionContent.en;
  var hero = (typeof renderUnifiedPageHero === 'function' && typeof getStaticPageHeroConfig === 'function')
    ? renderUnifiedPageHero(getStaticPageHeroConfig('faq', c.faqTitle, c.faqIntro))
    : `
    <div class="lc-header">
      <div class="lc-meta"><span class="meta-pill">${t('nav.faqPage') || 'FAQ'}</span><span class="meta-cat">${c.faqTitle}</span></div>
      <h1 class="lc-title">${c.faqTitle}</h1>
      <p class="lc-intro">${c.faqIntro}</p>
    </div>`;
  return `
    ${hero}
    <div class="lesson-body">
      ${c.faqItems.map(([q,a])=>`<div class="faq-item"><div class="faq-q">${q}</div><div class="faq-a">${a}</div></div>`).join('')}
    </div>`;
}

function renderSafetyPage(){
  const c = polishedSectionContent[currentLang] || polishedSectionContent.en;
  var hero = (typeof renderUnifiedPageHero === 'function' && typeof getStaticPageHeroConfig === 'function')
    ? renderUnifiedPageHero(getStaticPageHeroConfig('safety', c.safetyTitle, c.safetyIntro))
    : `
    <div class="lc-header">
      <div class="lc-meta"><span class="meta-pill">${t('nav.safety') || 'Safety'}</span><span class="meta-cat">${c.safetyTitle}</span></div>
      <h1 class="lc-title">${c.safetyTitle}</h1>
      <p class="lc-intro">${c.safetyIntro}</p>
    </div>`;
  return `
    ${hero}
    <div class="lesson-body">
      ${c.safetyItems.map(([title,body])=>`<div class="mistake-card"><div class="mistake-label">${title}</div><div class="mistake-body">${body}</div></div>`).join('')}
    </div>`;
}

if (typeof renderAllLessons === 'function') {
  const __origRenderAllLessons = renderAllLessons;
  renderAllLessons = function(){
    __origRenderAllLessons();
    document.getElementById('startPanel').innerHTML = renderStartHere();
    document.getElementById('faqPanel').innerHTML = renderFAQPage();
    document.getElementById('safetyPanel').innerHTML = renderSafetyPage();
  };
}
