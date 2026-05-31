const langLabels={en:'EN',ko:'KO',th:'TH',id:'ID',pt:'PT',br:'BR',tr:'TR',es:'ES',ar:'AR',ha:'HA',vi:'VI'};

const ui = {
  en:{
    "brand.name":"Coin ProofPath","brand.sub":"Clear lessons for beginners","sidebar.lessons":"Course lessons","sidebar.topics":"Quick topics",
    "nav.l1":"Blockchain","nav.l1sub":"Shared ledger basics","nav.l2":"Wallets","nav.l2sub":"Keys and access","nav.l3":"Safe Transfers","nav.l3sub":"Sending safely","nav.l4":"5 Roles of Crypto","nav.l4sub":"Understanding token roles","nav.l5":"Real-World Lessons","nav.l5sub":"Why structure matters","nav.l6":"Buying Your First Crypto","nav.l6sub":"A safe first purchase flow",
    "topic.blockchain":"What is a blockchain?","topic.wallet":"What is a wallet?","topic.transfer":"How do safe transfers work?","topic.roles":"How do token roles differ?","topic.real":"Why do real cases matter?","topic.buy":"How do I buy my first crypto safely?",
    "footer.byline":"A free educational resource by Bee Network Korea","overview.chip1":"Beginner-first","overview.chip2":"Multilingual","overview.chip3":"Visual learning",
    "progress.done":"completed","btn.prev":"Previous lesson","btn.next":"Next lesson","btn.mark":"Mark as completed","btn.completed":"Completed","btn.restart":"Start again","breadcrumb.prefix":"Lesson",
    "quiz.reveal":"Show answer","source.title":"Source","check.title":"Beginner checkpoints","faq.title":"FAQ","mistakes.title":"Common mistakes","quiz.title":"Mini quiz","example.title":"Easy example","sources.title":"Related sources",
    "visual.title":"Visual explanation","complete.note":"Your progress is saved in this browser."
  ,
    "nav.home":"Home","nav.homesub":"Start here first","nav.glossary":"Glossary","nav.glossarysub":"Simple key terms","nav.sources":"Source Library","nav.sourcesub":"Articles and official references","home.arrowNote":"Use the left menu as your learning map.","home.title":"Learn crypto step by step","home.desc":"Use this page as your starting point. You can jump straight to Lessons 1–5, open the Glossary for key terms, or visit the Source Library for real articles and official materials.","home.start":"Where to start","home.useMenu":"Use the left menu as your learning map","home.lessonGuide":"If you are new, begin with Lesson 1 and move in order. Each lesson is written in simple language, with examples, common mistakes, and checkpoints.","home.glossaryTitle":"Glossary","home.glossaryDesc":"Open the Glossary to learn core terms such as gas fee, public key, explorer, smart contract, custody, and bridge in easy words.","home.sourceTitle":"Source Library","home.sourceDesc":"Open the Source Library to read real articles and official references grouped by topic such as scams, exchanges, stablecoins, and wallet safety.","home.openLesson":"Open lesson","home.openGlossary":"Open Glossary","home.openSources":"Open Source Library","glossary.title":"Glossary","glossary.desc":"Simple meanings for key crypto words. Read these first if a lesson feels unfamiliar.","sources.pageTitle":"Source Library","sources.pageDesc":"A reading list of real articles and official references. Use it to connect lesson ideas with real-world cases.","sources.catScams":"Scams","sources.catExchanges":"Exchanges","sources.catStable":"Stablecoins","sources.catWallet":"Wallet Safety","glossary.address.term":"Address","glossary.address.body":"The public location where assets can be received.","glossary.private.term":"Private key","glossary.private.body":"The secret key that gives control over a wallet.","glossary.seed.term":"Seed phrase","glossary.seed.body":"A recovery backup for the wallet. Never share it.","glossary.gas.term":"Gas fee","glossary.gas.body":"A network fee paid to process a transaction.","glossary.public.term":"Public key","glossary.public.body":"A cryptographic key connected to your wallet identity. It helps create addresses.","glossary.explorer.term":"Explorer","glossary.explorer.body":"A website or tool that lets you view blockchain transactions and addresses.","glossary.contract.term":"Smart contract","glossary.contract.body":"Code on a blockchain that follows programmed rules automatically.","glossary.custody.term":"Custody","glossary.custody.body":"Who controls the keys and access to the assets.","glossary.bridge.term":"Bridge","glossary.bridge.body":"A tool used to move assets or messages between different blockchains.","callout.quick":"Quick idea",
    "nav.start":"Start Here","nav.startsub":"Beginner path","nav.faqPage":"FAQ","nav.faqsub":"Common questions","nav.safety":"Safety","nav.safetysub":"Scam prevention",
    "home.startCardTitle":"Start Here","home.startCardDesc":"Know exactly where to begin if this is your first time here.","home.faqCardTitle":"FAQ","home.faqCardDesc":"Read the most common beginner questions in one place.","home.safetyCardTitle":"Safety","home.safetyCardDesc":"Learn practical scam prevention and wallet safety habits.","home.openStart":"Open Start Here","home.openFaq":"Open FAQ","home.openSafety":"Open Safety",
    "nav.updates":"Update History","nav.updatessub":"What changed and when","updates.title":"Update History","updates.desc":"A log of improvements made to this platform over time."},
  ko:{
    "brand.name":"코인 프루프패스","brand.sub":"초보자를 위한 쉬운 강의","sidebar.lessons":"강의 목록","sidebar.topics":"빠른 주제 찾기",
    "nav.l1":"블록체인","nav.l1sub":"공유 원장 기초","nav.l2":"지갑","nav.l2sub":"키와 접근 권한","nav.l3":"안전한 전송","nav.l3sub":"실수 없이 보내기","nav.l4":"암호화폐의 5가지 역할","nav.l4sub":"토큰 역할 쉽게 이해하기","nav.l5":"실제 교훈","nav.l5sub":"구조를 알아야 하는 이유",
    "topic.blockchain":"블록체인이란 무엇인가요?","topic.wallet":"지갑이란 무엇인가요?","topic.transfer":"안전한 전송은 어떻게 하나요?","topic.roles":"토큰 역할은 어떻게 다른가요?","topic.real":"실제 사례는 왜 중요한가요?",
    "footer.byline":"Bee Network Korea가 제공하는 무료 교육 자료","overview.chip1":"초보자 중심","overview.chip2":"다국어 지원","overview.chip3":"시각 학습",
    "progress.done":"완료","btn.prev":"이전 강의","btn.next":"다음 강의","btn.mark":"학습 완료로 표시","btn.completed":"완료됨","btn.restart":"처음부터 다시 보기","breadcrumb.prefix":"강의",
    "quiz.reveal":"정답 보기","source.title":"출처","check.title":"초보자 체크포인트","faq.title":"자주 묻는 질문","mistakes.title":"자주 하는 실수","quiz.title":"미니 퀴즈","example.title":"쉬운 예시","sources.title":"관련 출처",
    "visual.title":"시각 설명","complete.note":"학습 진행 상태는 이 브라우저에 저장됩니다."
  ,
    "nav.home":"홈","nav.homesub":"여기서 시작","nav.glossary":"용어사전","nav.glossarysub":"핵심 용어 쉽게 보기","nav.sources":"Source Library","nav.sourcesub":"기사와 공식 참고자료","home.arrowNote":"왼쪽 메뉴를 학습 지도처럼 활용해보세요.","home.title":"처음부터 차근차근 배우는 크립토","home.desc":"이 페이지를 시작점으로 사용하세요. 강의 1~5로 바로 이동할 수 있고, 용어사전에서 핵심 용어를 확인하거나 Source Library에서 실제 기사와 공식 자료를 읽을 수 있습니다.","home.start":"어디서 시작하면 좋을까요?","home.useMenu":"왼쪽 메뉴를 학습 지도처럼 사용하세요","home.lessonGuide":"처음이라면 1강부터 순서대로 보는 것이 가장 좋습니다. 각 강의는 쉬운 설명, 예시, 자주 하는 실수, 체크포인트로 구성되어 있습니다.","home.glossaryTitle":"용어사전","home.glossaryDesc":"gas fee, public key, explorer, smart contract, custody, bridge 같은 핵심 용어를 쉬운 말로 확인할 수 있습니다.","home.sourceTitle":"Source Library","home.sourceDesc":"사기, 거래소, 스테이블코인, 지갑 보안처럼 실제 사례와 연결되는 기사·공식 자료를 주제별로 볼 수 있습니다.","home.openLesson":"강의 열기","home.openGlossary":"용어사전 열기","home.openSources":"Source Library 열기","glossary.title":"용어사전","glossary.desc":"강의를 읽다가 낯선 단어가 나오면 여기서 먼저 뜻을 확인해보세요.","sources.pageTitle":"Source Library","sources.pageDesc":"실제 기사와 공식 참고자료를 모아둔 페이지입니다. 강의 내용을 현실 사례와 연결해서 볼 수 있습니다.","sources.catScams":"사기","sources.catExchanges":"거래소","sources.catStable":"스테이블코인","sources.catWallet":"지갑 보안","glossary.address.term":"주소","glossary.address.body":"자산을 받을 때 사용하는 공개 가능한 위치입니다.","glossary.private.term":"개인키","glossary.private.body":"지갑을 통제할 수 있게 해주는 비밀 키입니다.","glossary.seed.term":"시드 문구","glossary.seed.body":"지갑 복구를 위한 백업 문구입니다. 절대 공유하면 안 됩니다.","glossary.gas.term":"가스비","glossary.gas.body":"거래를 처리하기 위해 네트워크에 내는 수수료입니다.","glossary.public.term":"공개키","glossary.public.body":"지갑 정체성과 연결되는 암호학적 키로, 주소 생성에 활용됩니다.","glossary.explorer.term":"익스플로러","glossary.explorer.body":"블록체인 거래와 주소를 조회할 수 있는 웹 도구입니다.","glossary.contract.term":"스마트 컨트랙트","glossary.contract.body":"정해진 규칙에 따라 자동으로 실행되는 블록체인 위의 코드입니다.","glossary.custody.term":"커스터디","glossary.custody.body":"누가 키와 자산 접근 권한을 통제하는지를 뜻합니다.","glossary.bridge.term":"브리지","glossary.bridge.body":"서로 다른 블록체인 사이에서 자산이나 메시지를 이동시키는 도구입니다.","callout.quick":"한 줄 핵심",
    "nav.start":"시작 가이드","nav.startsub":"입문 순서 안내","nav.faqPage":"자주 묻는 질문","nav.faqsub":"핵심 질문 정리","nav.safety":"안전 가이드","nav.safetysub":"사기 예방",
    "nav.updates":"업데이트 기록","nav.updatessub":"변경 내역 및 날짜","updates.title":"업데이트 기록","updates.desc":"플랫폼에 추가된 개선 사항을 날짜순으로 정리한 로그입니다.",
    "home.startCardTitle":"시작 가이드","home.startCardDesc":"처음 온 사람이 어디부터 봐야 하는지 바로 알 수 있게 도와줍니다.","home.faqCardTitle":"자주 묻는 질문","home.faqCardDesc":"초보자가 가장 많이 헷갈리는 질문을 한 번에 볼 수 있습니다.","home.safetyCardTitle":"안전 가이드","home.safetyCardDesc":"실제로 도움이 되는 사기 예방과 지갑 보안 습관을 배울 수 있습니다.","home.openStart":"시작 가이드 열기","home.openFaq":"자주 묻는 질문 열기","home.openSafety":"안전 가이드 열기"},
  th:{
    "brand.name":"Coin ProofPath","brand.sub":"บทเรียนที่เข้าใจง่ายสำหรับผู้เริ่มต้น","sidebar.lessons":"บทเรียน","sidebar.topics":"หัวข้อด่วน",
    "nav.l1":"บล็อกเชน","nav.l1sub":"พื้นฐานของบัญชีแยกประเภทแบบแชร์","nav.l2":"วอลเล็ต","nav.l2sub":"คีย์และสิทธิ์การเข้าถึง","nav.l3":"การโอนอย่างปลอดภัย","nav.l3sub":"ส่งอย่างปลอดภัย","nav.l4":"5 บทบาทของคริปโต","nav.l4sub":"เข้าใจบทบาทของโทเคน","nav.l5":"บทเรียนจากโลกจริง","nav.l5sub":"ทำไมโครงสร้างจึงสำคัญ",
    "topic.blockchain":"บล็อกเชนคืออะไร?","topic.wallet":"วอลเล็ตคืออะไร?","topic.transfer":"การโอนอย่างปลอดภัยทำอย่างไร?","topic.roles":"บทบาทของโทเคนต่างกันอย่างไร?","topic.real":"ทำไมกรณีจริงจึงสำคัญ?",
    "footer.byline":"แหล่งเรียนรู้ฟรีจาก Bee Network Korea","overview.chip1":"เน้นผู้เริ่มต้น","overview.chip2":"รองรับหลายภาษา","overview.chip3":"เรียนรู้ผ่านภาพ",
    "progress.done":"เรียนจบแล้ว","btn.prev":"บทก่อนหน้า","btn.next":"บทถัดไป","btn.mark":"ทำเครื่องหมายว่าเรียนจบ","btn.completed":"เรียนจบแล้ว","btn.restart":"เริ่มใหม่อีกครั้ง","breadcrumb.prefix":"บทเรียน",
    "quiz.reveal":"แสดงคำตอบ","source.title":"แหล่งอ้างอิง","check.title":"จุดตรวจสอบสำหรับผู้เริ่มต้น","faq.title":"คำถามที่พบบ่อย","mistakes.title":"ข้อผิดพลาดที่พบบ่อย","quiz.title":"แบบทดสอบสั้น","example.title":"ตัวอย่างง่ายๆ","sources.title":"แหล่งข้อมูลที่เกี่ยวข้อง",
    "visual.title":"คำอธิบายด้วยภาพ","complete.note":"ความคืบหน้าของคุณจะถูกบันทึกไว้ในเบราว์เซอร์นี้"
  ,
    "nav.home":"หน้าหลัก","nav.homesub":"เริ่มจากตรงนี้","nav.glossary":"อภิธานศัพท์","nav.glossarysub":"คำสำคัญแบบเข้าใจง่าย","nav.sources":"คลังแหล่งอ้างอิง","nav.sourcesub":"บทความและเอกสารทางการ","home.arrowNote":"ใช้เมนูด้านซ้ายเป็นแผนที่การเรียนรู้ของคุณ","home.title":"เรียนคริปโตทีละขั้นอย่างเข้าใจง่าย","home.desc":"ใช้หน้านี้เป็นจุดเริ่มต้น คุณสามารถเปิดบทเรียน 1–5 ไปยังอภิธานศัพท์ หรืออ่านบทความจริงและเอกสารทางการใน Source Library ได้ทันที","home.start":"ควรเริ่มจากตรงไหน","home.useMenu":"ใช้เมนูด้านซ้ายเป็นลำดับการเรียน","home.lessonGuide":"ถ้าเพิ่งเริ่ม แนะนำให้เรียนตามลำดับตั้งแต่บทที่ 1 แต่ละบทใช้ภาษาง่าย มีตัวอย่าง ข้อผิดพลาดที่พบบ่อย และจุดตรวจสอบความเข้าใจ","home.glossaryTitle":"อภิธานศัพท์","home.glossaryDesc":"ดูคำสำคัญอย่าง gas fee, public key, explorer, smart contract, custody และ bridge ในคำอธิบายที่เข้าใจง่าย","home.sourceTitle":"Source Library","home.sourceDesc":"อ่านบทความจริงและแหล่งอ้างอิงทางการ แยกตามหัวข้อ เช่น การหลอกลวง ตลาดแลกเปลี่ยน สเตเบิลคอยน์ และความปลอดภัยของวอลเล็ต","home.openLesson":"เปิดบทเรียน","home.openGlossary":"เปิดอภิธานศัพท์","home.openSources":"เปิด Source Library","glossary.title":"อภิธานศัพท์","glossary.desc":"ความหมายง่าย ๆ ของคำสำคัญในโลกคริปโต ถ้าคำไหนไม่คุ้น ให้เปิดหน้านี้ก่อน","sources.pageTitle":"Source Library","sources.pageDesc":"รวมบทความจริงและเอกสารอ้างอิงทางการ เพื่อเชื่อมโยงบทเรียนกับเหตุการณ์จริง","sources.catScams":"การหลอกลวง","sources.catExchanges":"ตลาดแลกเปลี่ยน","sources.catStable":"สเตเบิลคอยน์","sources.catWallet":"ความปลอดภัยของวอลเล็ต","glossary.address.term":"Address","glossary.address.body":"ตำแหน่งสาธารณะที่ใช้รับสินทรัพย์ดิจิทัล","glossary.private.term":"Private key","glossary.private.body":"คีย์ลับที่ใช้ควบคุมวอลเล็ต","glossary.seed.term":"Seed phrase","glossary.seed.body":"ชุดคำสำรองสำหรับกู้คืนวอลเล็ต ห้ามแชร์เด็ดขาด","glossary.gas.term":"Gas fee","glossary.gas.body":"ค่าธรรมเนียมเครือข่ายที่ใช้ประมวลผลธุรกรรม","glossary.public.term":"Public key","glossary.public.body":"คีย์เข้ารหัสที่เชื่อมกับตัวตนของวอลเล็ต และใช้สร้าง address","glossary.explorer.term":"Explorer","glossary.explorer.body":"เว็บไซต์หรือเครื่องมือที่ใช้ดูธุรกรรมและ address บนบล็อกเชน","glossary.contract.term":"Smart contract","glossary.contract.body":"โค้ดบนบล็อกเชนที่ทำงานอัตโนมัติตามกฎที่ตั้งไว้","glossary.custody.term":"Custody","glossary.custody.body":"ใครเป็นผู้ถือคีย์และควบคุมการเข้าถึงสินทรัพย์","glossary.bridge.term":"Bridge","glossary.bridge.body":"เครื่องมือสำหรับย้ายสินทรัพย์หรือข้อมูลระหว่างบล็อกเชนต่าง ๆ","callout.quick":"แนวคิดสั้น ๆ",
    "nav.start":"เริ่มตรงนี้","nav.startsub":"เส้นทางสำหรับผู้เริ่มต้น","nav.faqPage":"คำถามพบบ่อย","nav.faqsub":"คำถามที่พบบ่อย","nav.safety":"ความปลอดภัย","nav.safetysub":"ป้องกันการหลอกลวง",
    "nav.updates":"ประวัติการอัปเดต","nav.updatessub":"สิ่งที่เปลี่ยนแปลงและเวลาที่เปลี่ยน","updates.title":"ประวัติการอัปเดต","updates.desc":"บันทึกการปรับปรุงที่เพิ่มเข้ามาในแพลตฟอร์มนี้ตามลำดับเวลา",
    "home.startCardTitle":"เริ่มตรงนี้","home.startCardDesc":"ช่วยให้ผู้มาใหม่รู้ชัดว่าควรเริ่มจากตรงไหนก่อน","home.faqCardTitle":"คำถามพบบ่อย","home.faqCardDesc":"รวมคำถามที่มือใหม่สับสนบ่อยไว้ในที่เดียว","home.safetyCardTitle":"ความปลอดภัย","home.safetyCardDesc":"เรียนรู้นิสัยการป้องกันกลโกงและการปกป้องวอลเล็ตที่ใช้ได้จริง","home.openStart":"เปิดหน้าเริ่มต้น","home.openFaq":"เปิดคำถามพบบ่อย","home.openSafety":"เปิดหน้าความปลอดภัย"},
  id:{
    "brand.name":"Coin ProofPath","brand.sub":"Pelajaran mudah untuk pemula","sidebar.lessons":"Daftar pelajaran","sidebar.topics":"Topik cepat",
    "nav.l1":"Blockchain","nav.l1sub":"Dasar buku besar bersama","nav.l2":"Wallet","nav.l2sub":"Kunci dan akses","nav.l3":"Transfer Aman","nav.l3sub":"Kirim dengan aman","nav.l4":"5 Peran Crypto","nav.l4sub":"Memahami peran token","nav.l5":"Pelajaran Dunia Nyata","nav.l5sub":"Mengapa struktur penting",
    "topic.blockchain":"Apa itu blockchain?","topic.wallet":"Apa itu wallet?","topic.transfer":"Bagaimana transfer aman bekerja?","topic.roles":"Bagaimana peran token berbeda?","topic.real":"Mengapa kasus nyata penting?",
    "footer.byline":"Sumber belajar gratis dari Bee Network Korea","overview.chip1":"Fokus pemula","overview.chip2":"Multibahasa","overview.chip3":"Pembelajaran visual",
    "progress.done":"selesai","btn.prev":"Pelajaran sebelumnya","btn.next":"Pelajaran berikutnya","btn.mark":"Tandai selesai","btn.completed":"Selesai","btn.restart":"Mulai lagi","breadcrumb.prefix":"Pelajaran",
    "quiz.reveal":"Lihat jawaban","source.title":"Sumber","check.title":"Checkpoint pemula","faq.title":"FAQ","mistakes.title":"Kesalahan umum","quiz.title":"Kuis mini","example.title":"Contoh mudah","sources.title":"Sumber terkait",
    "visual.title":"Penjelasan visual","complete.note":"Progres Anda disimpan di browser ini."
  ,
    "nav.home":"Beranda","nav.homesub":"Mulai dari sini","nav.glossary":"Glosarium","nav.glossarysub":"Istilah inti dengan bahasa sederhana","nav.sources":"Source Library","nav.sourcesub":"Artikel dan referensi resmi","home.arrowNote":"Gunakan menu kiri sebagai peta belajar Anda.","home.title":"Belajar crypto langkah demi langkah","home.desc":"Gunakan halaman ini sebagai titik awal. Anda bisa langsung membuka Pelajaran 1–5, membaca Glosarium, atau membuka Source Library untuk artikel nyata dan referensi resmi.","home.start":"Mulai dari mana?","home.useMenu":"Gunakan menu kiri sebagai peta belajar","home.lessonGuide":"Jika Anda benar-benar baru, mulailah dari Pelajaran 1 dan ikuti urutannya. Setiap pelajaran ditulis dengan bahasa sederhana, contoh, kesalahan umum, dan checkpoint.","home.glossaryTitle":"Glosarium","home.glossaryDesc":"Pelajari istilah penting seperti gas fee, public key, explorer, smart contract, custody, dan bridge dengan penjelasan yang mudah.","home.sourceTitle":"Source Library","home.sourceDesc":"Baca artikel nyata dan referensi resmi berdasarkan topik seperti penipuan, bursa, stablecoin, dan keamanan wallet.","home.openLesson":"Buka pelajaran","home.openGlossary":"Buka Glosarium","home.openSources":"Buka Source Library","glossary.title":"Glosarium","glossary.desc":"Arti sederhana dari istilah crypto yang penting. Jika sebuah kata terasa asing, buka halaman ini terlebih dahulu.","sources.pageTitle":"Source Library","sources.pageDesc":"Daftar artikel nyata dan referensi resmi untuk menghubungkan pelajaran dengan kasus dunia nyata.","sources.catScams":"Penipuan","sources.catExchanges":"Bursa","sources.catStable":"Stablecoin","sources.catWallet":"Keamanan Wallet","glossary.address.term":"Address","glossary.address.body":"Lokasi publik tempat aset dapat diterima.","glossary.private.term":"Private key","glossary.private.body":"Kunci rahasia yang memberi kendali atas wallet.","glossary.seed.term":"Seed phrase","glossary.seed.body":"Cadangan pemulihan wallet. Jangan pernah membagikannya.","glossary.gas.term":"Gas fee","glossary.gas.body":"Biaya jaringan untuk memproses transaksi.","glossary.public.term":"Public key","glossary.public.body":"Kunci kriptografi yang terkait dengan identitas wallet dan membantu membuat address.","glossary.explorer.term":"Explorer","glossary.explorer.body":"Situs atau alat untuk melihat transaksi dan address di blockchain.","glossary.contract.term":"Smart contract","glossary.contract.body":"Kode di blockchain yang berjalan otomatis mengikuti aturan yang diprogram.","glossary.custody.term":"Custody","glossary.custody.body":"Siapa yang memegang kunci dan mengontrol akses ke aset.","glossary.bridge.term":"Bridge","glossary.bridge.body":"Alat untuk memindahkan aset atau pesan antar blockchain yang berbeda.","callout.quick":"Gagasan singkat",
    "nav.start":"Mulai di sini","nav.startsub":"Jalur pemula","nav.faqPage":"FAQ","nav.faqsub":"Pertanyaan umum","nav.safety":"Keamanan","nav.safetysub":"Pencegahan penipuan",
    "nav.updates":"Riwayat Pembaruan","nav.updatessub":"Apa yang berubah dan kapan","updates.title":"Riwayat Pembaruan","updates.desc":"Catatan peningkatan yang ditambahkan ke platform ini dari waktu ke waktu.",
    "home.startCardTitle":"Mulai di sini","home.startCardDesc":"Membantu pengunjung baru tahu persis dari mana harus memulai.","home.faqCardTitle":"FAQ","home.faqCardDesc":"Lihat pertanyaan yang paling sering membingungkan pemula di satu tempat.","home.safetyCardTitle":"Keamanan","home.safetyCardDesc":"Pelajari kebiasaan praktis untuk mencegah penipuan dan melindungi dompet.","home.openStart":"Buka Mulai di sini","home.openFaq":"Buka FAQ","home.openSafety":"Buka Keamanan"},
  pt:{
    "brand.name":"Coin ProofPath","brand.sub":"Lições claras para iniciantes","sidebar.lessons":"Lições do curso","sidebar.topics":"Tópicos rápidos",
    "nav.l1":"Blockchain","nav.l1sub":"Base do livro-razão compartilhado","nav.l2":"Carteiras","nav.l2sub":"Chaves e acesso","nav.l3":"Transferências Seguras","nav.l3sub":"Enviar com segurança","nav.l4":"5 Papéis do Cripto","nav.l4sub":"Entendendo o papel dos tokens","nav.l5":"Lições do Mundo Real","nav.l5sub":"Por que a estrutura importa",
    "topic.blockchain":"O que é blockchain?","topic.wallet":"O que é uma carteira?","topic.transfer":"Como funcionam transferências seguras?","topic.roles":"Como os papéis dos tokens diferem?","topic.real":"Por que casos reais importam?",
    "footer.byline":"Recurso educacional gratuito da Bee Network Korea","overview.chip1":"Foco em iniciantes","overview.chip2":"Multilíngue","overview.chip3":"Aprendizado visual",
    "progress.done":"concluído","btn.prev":"Lição anterior","btn.next":"Próxima lição","btn.mark":"Marcar como concluída","btn.completed":"Concluída","btn.restart":"Começar novamente","breadcrumb.prefix":"Lição",
    "quiz.reveal":"Mostrar resposta","source.title":"Fonte","check.title":"Pontos de verificação para iniciantes","faq.title":"Perguntas frequentes","mistakes.title":"Erros comuns","quiz.title":"Mini quiz","example.title":"Exemplo simples","sources.title":"Fontes relacionadas",
    "visual.title":"Explicação visual","complete.note":"Seu progresso é salvo neste navegador."
  ,
    "nav.home":"Início","nav.homesub":"Comece por aqui","nav.glossary":"Glossário","nav.glossarysub":"Termos essenciais em linguagem simples","nav.sources":"Source Library","nav.sourcesub":"Artigos e referências oficiais","home.arrowNote":"Use o menu à esquerda como seu mapa de aprendizagem.","home.title":"Aprenda cripto passo a passo","home.desc":"Use esta página como ponto de partida. Você pode abrir as Lições 1–5, consultar o Glossário ou visitar a Source Library para ler artigos reais e materiais oficiais.","home.start":"Por onde começar","home.useMenu":"Use o menu à esquerda como seu mapa de estudo","home.lessonGuide":"Se você está começando agora, o ideal é seguir a ordem a partir da Lição 1. Cada lição foi escrita em linguagem simples, com exemplos, erros comuns e pontos de verificação.","home.glossaryTitle":"Glossário","home.glossaryDesc":"Consulte termos-chave como gas fee, public key, explorer, smart contract, custody e bridge em explicações fáceis.","home.sourceTitle":"Source Library","home.sourceDesc":"Leia artigos reais e referências oficiais separados por tema, como golpes, exchanges, stablecoins e segurança de carteiras.","home.openLesson":"Abrir lição","home.openGlossary":"Abrir Glossário","home.openSources":"Abrir Source Library","glossary.title":"Glossário","glossary.desc":"Significados simples para palavras importantes do universo cripto. Se um termo parecer estranho, veja esta página primeiro.","sources.pageTitle":"Source Library","sources.pageDesc":"Uma lista de leitura com artigos reais e referências oficiais para ligar as lições a casos do mundo real.","sources.catScams":"Golpes","sources.catExchanges":"Exchanges","sources.catStable":"Stablecoins","sources.catWallet":"Segurança de Carteiras","glossary.address.term":"Address","glossary.address.body":"O local público para receber ativos.","glossary.private.term":"Private key","glossary.private.body":"A chave secreta que dá controle sobre a carteira.","glossary.seed.term":"Seed phrase","glossary.seed.body":"Um backup de recuperação da carteira. Nunca compartilhe.","glossary.gas.term":"Gas fee","glossary.gas.body":"A taxa de rede paga para processar uma transação.","glossary.public.term":"Public key","glossary.public.body":"Uma chave criptográfica ligada à identidade da carteira e usada na criação de endereços.","glossary.explorer.term":"Explorer","glossary.explorer.body":"Um site ou ferramenta para ver transações e endereços na blockchain.","glossary.contract.term":"Smart contract","glossary.contract.body":"Código na blockchain que executa regras programadas automaticamente.","glossary.custody.term":"Custody","glossary.custody.body":"Quem controla as chaves e o acesso aos ativos.","glossary.bridge.term":"Bridge","glossary.bridge.body":"Ferramenta usada para mover ativos ou mensagens entre blockchains diferentes.","callout.quick":"Ideia rápida",
    "nav.start":"Comece aqui","nav.startsub":"Caminho para iniciantes","nav.faqPage":"FAQ","nav.faqsub":"Perguntas comuns","nav.safety":"Segurança","nav.safetysub":"Prevenção de golpes",
    "nav.updates":"Histórico de Atualizações","nav.updatessub":"O que mudou e quando","updates.title":"Histórico de Atualizações","updates.desc":"Um registro de melhorias feitas nesta plataforma ao longo do tempo.",
    "home.startCardTitle":"Comece aqui","home.startCardDesc":"Ajuda quem chegou agora a saber exatamente por onde começar.","home.faqCardTitle":"FAQ","home.faqCardDesc":"Veja em um só lugar as dúvidas mais comuns de iniciantes.","home.safetyCardTitle":"Segurança","home.safetyCardDesc":"Aprenda hábitos práticos para evitar golpes e proteger a carteira.","home.openStart":"Abrir Comece aqui","home.openFaq":"Abrir FAQ","home.openSafety":"Abrir Segurança"},
  br:{
    "brand.name":"Coin ProofPath","brand.sub":"Lições claras para iniciantes","sidebar.lessons":"Lições do curso","sidebar.topics":"Tópicos rápidos",
    "nav.l1":"Blockchain","nav.l1sub":"Base do livro-razão compartilhado","nav.l2":"Carteiras","nav.l2sub":"Chaves e acesso","nav.l3":"Transferências Seguras","nav.l3sub":"Enviar com segurança","nav.l4":"5 Papéis do Cripto","nav.l4sub":"Entendendo o papel dos tokens","nav.l5":"Lições do Mundo Real","nav.l5sub":"Por que a estrutura importa",
    "topic.blockchain":"O que é blockchain?","topic.wallet":"O que é uma carteira?","topic.transfer":"Como funcionam transferências seguras?","topic.roles":"Como os papéis dos tokens diferem?","topic.real":"Por que casos reais importam?",
    "footer.byline":"Recurso educacional gratuito da Bee Network Korea","overview.chip1":"Foco em iniciantes","overview.chip2":"Multilíngue","overview.chip3":"Aprendizado visual",
    "progress.done":"concluído","btn.prev":"Lição anterior","btn.next":"Próxima lição","btn.mark":"Marcar como concluída","btn.completed":"Concluída","btn.restart":"Começar novamente","breadcrumb.prefix":"Lição",
    "quiz.reveal":"Mostrar resposta","source.title":"Fonte","check.title":"Checkpoints para iniciantes","faq.title":"Perguntas frequentes","mistakes.title":"Erros comuns","quiz.title":"Mini quiz","example.title":"Exemplo fácil","sources.title":"Fontes relacionadas",
    "visual.title":"Explicação visual","complete.note":"Seu progresso é salvo neste navegador.",
    "nav.home":"Início","nav.homesub":"Comece por aqui","nav.glossary":"Glossário","nav.glossarysub":"Termos essenciais","nav.sources":"Biblioteca de Fontes","nav.sourcesub":"Artigos e referências oficiais",
    "home.arrowNote":"Use o menu à esquerda como seu mapa de aprendizado.","home.title":"Aprenda cripto passo a passo","home.desc":"Use esta página como ponto de partida. Você pode ir direto para as Lições 1–5, abrir o Glossário para termos importantes ou visitar a Biblioteca de Fontes para ler artigos e materiais oficiais.","home.start":"Por onde começar","home.useMenu":"Use o menu à esquerda como seu mapa de aprendizado","home.lessonGuide":"Se você está começando agora, siga as lições em ordem. Cada página traz explicações simples, exemplos, erros comuns e checkpoints.","home.glossaryTitle":"Glossário","home.glossaryDesc":"Abra o Glossário para entender termos como gas fee, chave pública, explorer, contrato inteligente, custódia e bridge em linguagem fácil.","home.sourceTitle":"Biblioteca de Fontes","home.sourceDesc":"Abra a Biblioteca de Fontes para ler artigos reais e referências oficiais agrupadas por tema, como golpes, corretoras, stablecoins e segurança da carteira.","home.openLesson":"Abrir lição","home.openGlossary":"Abrir Glossário","home.openSources":"Abrir Biblioteca de Fontes",
    "glossary.title":"Glossário","glossary.desc":"Significados simples para palavras importantes do universo cripto. Leia esta seção primeiro se algum termo parecer estranho.",
    "sources.pageTitle":"Biblioteca de Fontes","sources.pageDesc":"Uma lista de leitura com artigos reais e referências oficiais. Use-a para ligar as ideias das lições a casos do mundo real.","sources.catScams":"Golpes","sources.catExchanges":"Corretoras","sources.catStable":"Stablecoins","sources.catWallet":"Segurança da carteira",
    "glossary.address.body":"Local público usado para receber ativos digitais.","glossary.private.body":"Chave secreta usada para controlar a carteira.","glossary.seed.body":"Conjunto de palavras de recuperação para restaurar a carteira. Nunca compartilhe.","glossary.gas.body":"Taxa de rede paga para processar uma transação.","glossary.public.body":"Chave criptográfica ligada à identidade da carteira e usada para ajudar a criar endereços.","glossary.explorer.body":"Site ou ferramenta usada para ver transações e endereços na blockchain.","glossary.contract.body":"Código na blockchain que executa automaticamente regras predefinidas.","glossary.custody.body":"Quem controla as chaves e o acesso aos ativos.","glossary.bridge.body":"Ferramenta para mover ativos ou mensagens entre blockchains diferentes.",
    "nav.updates":"Histórico de Atualizações","nav.updatessub":"O que mudou e quando","updates.title":"Histórico de Atualizações","updates.desc":"Um registro de melhorias adicionadas a esta plataforma ao longo do tempo."
  },
  tr:{
    "brand.name":"Coin ProofPath","brand.sub":"Yeni başlayanlar için anlaşılır dersler","sidebar.lessons":"Dersler","sidebar.topics":"Hızlı konular",
    "nav.l1":"Blockchain","nav.l1sub":"Paylaşılan defter temeli","nav.l2":"Cüzdanlar","nav.l2sub":"Anahtarlar ve erişim","nav.l3":"Güvenli Transferler","nav.l3sub":"Güvenli gönderim","nav.l4":"Kriptonun 5 Rolü","nav.l4sub":"Token rollerini anlama","nav.l5":"Gerçek Dünya Dersleri","nav.l5sub":"Yapının neden önemli olduğu",
    "topic.blockchain":"Blockchain nedir?","topic.wallet":"Cüzdan nedir?","topic.transfer":"Güvenli transfer nasıl yapılır?","topic.roles":"Token rolleri nasıl farklıdır?","topic.real":"Gerçek örnekler neden önemlidir?",
    "footer.byline":"Bee Network Korea tarafından sunulan ücretsiz eğitim kaynağı","overview.chip1":"Yeni başlayan odaklı","overview.chip2":"Çok dilli","overview.chip3":"Görsel öğrenme",
    "progress.done":"tamamlandı","btn.prev":"Önceki ders","btn.next":"Sonraki ders","btn.mark":"Tamamlandı olarak işaretle","btn.completed":"Tamamlandı","btn.restart":"Baştan başla","breadcrumb.prefix":"Ders",
    "quiz.reveal":"Cevabı göster","source.title":"Kaynak","check.title":"Başlangıç kontrol noktaları","faq.title":"SSS","mistakes.title":"Yaygın hatalar","quiz.title":"Mini test","example.title":"Kolay örnek","sources.title":"İlgili kaynaklar",
    "visual.title":"Görsel açıklama","complete.note":"İlerlemeniz bu tarayıcıda kaydedilir.",
    "nav.home":"Ana sayfa","nav.homesub":"Buradan başla","nav.glossary":"Sözlük","nav.glossarysub":"Temel terimler","nav.sources":"Kaynak Kütüphanesi","nav.sourcesub":"Makaleler ve resmi kaynaklar",
    "home.arrowNote":"Sol menüyü öğrenme haritanız olarak kullanın.","home.title":"Kriptoyu adım adım öğrenin","home.desc":"Bu sayfayı başlangıç noktası olarak kullanın. Doğrudan 1–5. derslere gidebilir, temel terimler için Sözlük'ü açabilir veya gerçek makaleler ve resmi materyaller için Kaynak Kütüphanesi'ni ziyaret edebilirsiniz.","home.start":"Nereden başlamalı","home.useMenu":"Sol menüyü öğrenme haritanız olarak kullanın","home.lessonGuide":"Yeni başlıyorsanız dersleri sırayla takip edin. Her sayfada basit açıklamalar, örnekler, yaygın hatalar ve kontrol noktaları bulunur.","home.glossaryTitle":"Sözlük","home.glossaryDesc":"Gas fee, açık anahtar, explorer, akıllı sözleşme, custody ve bridge gibi terimleri kolay bir dille öğrenmek için Sözlük'ü açın.","home.sourceTitle":"Kaynak Kütüphanesi","home.sourceDesc":"Dolandırıcılık, borsalar, stablecoin'ler ve cüzdan güvenliği gibi başlıklarda gruplanmış gerçek makaleleri ve resmi kaynakları okumak için Kaynak Kütüphanesi'ni açın.","home.openLesson":"Dersi aç","home.openGlossary":"Sözlüğü aç","home.openSources":"Kaynak Kütüphanesi'ni aç",
    "glossary.title":"Sözlük","glossary.desc":"Önemli kripto terimleri için basit anlamlar. Bir ders size yabancı geliyorsa önce burayı okuyun.",
    "sources.pageTitle":"Kaynak Kütüphanesi","sources.pageDesc":"Gerçek makaleler ve resmi kaynaklardan oluşan okuma listesi. Derslerdeki fikirleri gerçek dünya örnekleriyle bağlamak için kullanın.","sources.catScams":"Dolandırıcılık","sources.catExchanges":"Borsalar","sources.catStable":"Stablecoin'ler","sources.catWallet":"Cüzdan Güvenliği",
    "glossary.address.body":"Dijital varlık almak için kullanılan herkese açık konum.","glossary.private.body":"Cüzdanı kontrol etmeyi sağlayan gizli anahtar.","glossary.seed.body":"Cüzdanı kurtarmak için kullanılan yedek kelime grubu. Asla paylaşmayın.","glossary.gas.body":"Bir işlemi işlemek için ödenen ağ ücreti.","glossary.public.body":"Cüzdan kimliğine bağlı kriptografik anahtar; adres oluşturmaya yardımcı olur.","glossary.explorer.body":"Blockchain üzerindeki işlemleri ve adresleri görüntülemek için kullanılan site veya araç.","glossary.contract.body":"Önceden belirlenen kuralları otomatik uygulayan blockchain kodu.","glossary.custody.body":"Anahtarları ve varlıklara erişimi kimin kontrol ettiğini ifade eder.","glossary.bridge.body":"Farklı blockchain'ler arasında varlık veya mesaj taşımayı sağlayan araç.",
    "nav.updates":"Güncelleme Geçmişi","nav.updatessub":"Son iyileştirmeler","updates.title":"Güncelleme Geçmişi","updates.desc":"Bu sayfa, platformda zaman içinde yapılan geliştirmeleri gösterir."
  },
  es:{
    "brand.name":"Coin ProofPath","brand.sub":"Lecciones claras para principiantes","sidebar.lessons":"Lecciones del curso","sidebar.topics":"Temas rápidos",
    "nav.l1":"Blockchain","nav.l1sub":"Base del libro mayor compartido","nav.l2":"Billeteras","nav.l2sub":"Claves y acceso","nav.l3":"Transferencias Seguras","nav.l3sub":"Enviar con seguridad","nav.l4":"5 Roles del Cripto","nav.l4sub":"Entender el papel de los tokens","nav.l5":"Lecciones del Mundo Real","nav.l5sub":"Por qué importa la estructura",
    "topic.blockchain":"¿Qué es blockchain?","topic.wallet":"¿Qué es una billetera?","topic.transfer":"¿Cómo funcionan las transferencias seguras?","topic.roles":"¿Cómo se diferencian los roles de los tokens?","topic.real":"¿Por qué importan los casos reales?",
    "footer.byline":"Recurso educativo gratuito de Bee Network Korea","overview.chip1":"Enfoque para principiantes","overview.chip2":"Multilingüe","overview.chip3":"Aprendizaje visual",
    "progress.done":"completado","btn.prev":"Lección anterior","btn.next":"Siguiente lección","btn.mark":"Marcar como completada","btn.completed":"Completada","btn.restart":"Empezar de nuevo","breadcrumb.prefix":"Lección",
    "quiz.reveal":"Mostrar respuesta","source.title":"Fuente","check.title":"Puntos clave para principiantes","faq.title":"Preguntas frecuentes","mistakes.title":"Errores comunes","quiz.title":"Mini quiz","example.title":"Ejemplo sencillo","sources.title":"Fuentes relacionadas",
    "visual.title":"Explicación visual","complete.note":"Tu progreso se guarda en este navegador."
  ,
    "nav.home":"Inicio","nav.homesub":"Empieza aquí","nav.glossary":"Glosario","nav.glossarysub":"Términos clave en lenguaje simple","nav.sources":"Source Library","nav.sourcesub":"Artículos y referencias oficiales","home.arrowNote":"Usa el menú izquierdo como tu mapa de aprendizaje.","home.title":"Aprende cripto paso a paso","home.desc":"Usa esta página como punto de partida. Puedes abrir las Lecciones 1–5, consultar el Glosario o visitar la Source Library para leer artículos reales y materiales oficiales.","home.start":"¿Por dónde empezar?","home.useMenu":"Usa el menú izquierdo como mapa de aprendizaje","home.lessonGuide":"Si eres principiante, lo mejor es empezar por la Lección 1 y seguir el orden. Cada lección está escrita con lenguaje simple, ejemplos, errores comunes y puntos de verificación.","home.glossaryTitle":"Glosario","home.glossaryDesc":"Consulta términos importantes como gas fee, public key, explorer, smart contract, custody y bridge en explicaciones fáciles.","home.sourceTitle":"Source Library","home.sourceDesc":"Lee artículos reales y referencias oficiales organizados por temas como estafas, exchanges, stablecoins y seguridad de billeteras.","home.openLesson":"Abrir lección","home.openGlossary":"Abrir glosario","home.openSources":"Abrir Source Library","glossary.title":"Glosario","glossary.desc":"Significados simples de palabras clave del mundo cripto. Si una palabra te resulta extraña, mira esta página primero.","sources.pageTitle":"Source Library","sources.pageDesc":"Una lista de lectura con artículos reales y referencias oficiales para conectar las lecciones con casos del mundo real.","sources.catScams":"Estafas","sources.catExchanges":"Exchanges","sources.catStable":"Stablecoins","sources.catWallet":"Seguridad de billeteras","glossary.address.term":"Address","glossary.address.body":"La ubicación pública donde se pueden recibir activos.","glossary.private.term":"Private key","glossary.private.body":"La clave secreta que da control sobre la billetera.","glossary.seed.term":"Seed phrase","glossary.seed.body":"Una copia de recuperación de la billetera. Nunca la compartas.","glossary.gas.term":"Gas fee","glossary.gas.body":"La comisión de red pagada para procesar una transacción.","glossary.public.term":"Public key","glossary.public.body":"Una clave criptográfica vinculada a la identidad de la billetera y usada para crear direcciones.","glossary.explorer.term":"Explorer","glossary.explorer.body":"Un sitio o herramienta para ver transacciones y direcciones en la blockchain.","glossary.contract.term":"Smart contract","glossary.contract.body":"Código en la blockchain que ejecuta reglas programadas automáticamente.","glossary.custody.term":"Custody","glossary.custody.body":"Quién controla las claves y el acceso a los activos.","glossary.bridge.term":"Bridge","glossary.bridge.body":"Herramienta para mover activos o mensajes entre diferentes blockchains.",
    "nav.updates":"Historial de Actualizaciones","nav.updatessub":"Qué cambió y cuándo","updates.title":"Historial de Actualizaciones","updates.desc":"Un registro de mejoras realizadas en esta plataforma a lo largo del tiempo."}
};

const lessons = {
  en: [
    {
      cat:"Foundation", title:"Blockchain, explained simply",
      intro:"A blockchain is a shared ledger. Instead of one company keeping the only record, many computers keep and verify the same record together. This is why blockchain feels different from a normal app database.",
      sections:[
        {h:"Start with the easiest idea", ps:["Imagine a notebook that records who sent value to whom. In a bank, the bank controls the notebook. In a blockchain network, many participants keep the notebook honest together.","That does not mean every blockchain works the same way. It means the basic idea is shared verification. If many participants confirm the same record, it becomes much harder for one actor to secretly change history."]},
        {h:"Why beginners should care", ps:["Many people buy crypto without understanding what makes a blockchain useful. They see prices, logos, or apps first. But if you do not understand the record system underneath, it becomes hard to judge risk, safety, or ownership.","The blockchain matters because it is the layer where transactions, balances, and ownership are recorded. If that part feels clear, wallets and tokens also become easier to understand."]},
        {h:"Blocks, chains, and nodes", ps:["Transactions are collected into blocks. Each new block points back to the block before it. That is why people call it a chain of blocks.","A node is simply a computer that helps read, store, or verify the ledger. You do not need to memorize the technical details first. For beginners, it is enough to understand that many nodes help protect the record."]},
        {h:"What makes it powerful", ps:["A blockchain can reduce dependence on a single central database. That is why people use it for digital assets and ownership records.","But the same structure also means mistakes can be difficult to reverse. If you send something to the wrong place, there may be no central customer support that can always undo it. That is why learning structure comes before speed."]}
      ],
      defs:[["Ledger","A ledger is a record of transactions or balances."],["Node","A computer that helps keep or verify the record."],["Block","A group of transactions added to the chain."],["Chain","The ordered link between one block and the next."]],
      example:"A bank transfer usually depends on the bank’s database. A blockchain transfer depends on the network’s shared record.",
      mistakes:["Thinking blockchain means “guaranteed safety” in every situation.","Assuming every transaction can be reversed like a card payment.","Treating blockchain like a mysterious word instead of a record system."],
      faqs:[["Can one company change the blockchain alone?","On a public blockchain, one actor usually cannot change the full shared record alone. That is one of the reasons people trust shared verification."],["Why is a blockchain called transparent?","Because transaction records can often be checked openly with an explorer, even if real names are not always shown."],["Do I need to understand coding first?","No. Beginners only need the big idea first: shared record, shared verification, and harder-to-change history."]],
      checkpoints:["I can explain blockchain as a shared ledger.","I understand why shared verification matters.","I know why a confirmed transaction may be hard to reverse."],
      quiz:[["What is the simplest beginner definition of a blockchain?","A shared ledger that many participants verify together."],["Why should beginners care about blockchain structure?","Because ownership, balances, and transactions are recorded there."]]
    },
    {
      cat:"Access", title:"Wallets, explained simply",
      intro:"A wallet is not mainly a box that stores coins. A wallet is the tool that manages the keys that let you access and control digital assets recorded on a blockchain.",
      sections:[
        {h:"The biggest beginner misunderstanding", ps:["Many people imagine a wallet as if coins are sitting inside it like cash in a leather wallet. That picture is understandable, but it is incomplete.","Your assets are recorded on the blockchain. The wallet helps you prove control over those assets. That is why many educators say a wallet is closer to a key manager than a coin container."]},
        {h:"Address, private key, and seed phrase", ps:["A wallet address is where you receive assets. You can share your address.","A private key is what gives control. It should never be shared.","A seed phrase is a recovery backup that can restore the wallet. If someone gets your seed phrase, they may be able to take your assets."]},
        {h:"Custodial vs self-custody", ps:["If an exchange controls the keys for you, that is custodial. It may feel convenient, but you depend on that platform’s security and decisions.","If you control the keys yourself, that is self-custody. It gives more control, but also more responsibility. Beginners should understand both models before choosing what fits their situation."]},
        {h:"Why wallets matter in practice", ps:["Wallet knowledge is not just technical theory. It affects how you receive, send, store, back up, and protect digital assets.","Many beginner losses happen because someone shared a seed phrase, trusted a fake support message, or approved something without understanding what the wallet was doing."]}
      ],
      defs:[["Wallet address","The public receiving address you can share."],["Private key","The secret key that controls access."],["Seed phrase","A backup phrase used to recover a wallet."],["Custodial wallet","A wallet where a service controls the keys for you."]],
      example:"Think of the address like a mailbox address. Think of the private key like the secret key to open the box.",
      mistakes:["Sharing a seed phrase with “support”.","Saving a seed phrase in a risky screenshot folder without a backup plan.","Assuming an exchange account and a self-custody wallet work the same way."],
      faqs:[["Can I share my wallet address?","Yes. A wallet address is meant to receive funds."],["Can I share my private key or seed phrase?","No. Anyone with them may gain control over the wallet."],["Is self-custody always better?","It offers more direct control, but also more responsibility. Beginners should not ignore the backup and security side."]],
      checkpoints:["I know the difference between an address and a private key.","I know why a seed phrase must stay private.","I understand the difference between custodial and self-custody."],
      quiz:[["What can you safely share?","Your wallet address."],["What should never be shared?","Your private key or seed phrase."]]
    },
    {
      cat:"Safety", title:"Safe crypto transfers",
      intro:"Crypto transfers do not need to feel scary, but they do require a repeatable safety habit. The simplest checklist is: network, address, test transfer, then TxID verification.",
      sections:[
        {h:"Why people make transfer mistakes", ps:["Beginners often rush. They assume the pasted address is correct, ignore the network, or send a full amount before testing.","The problem is that blockchain transfers can be difficult to reverse. That is why the safe habit matters more than confidence."]},
        {h:"The 4-step habit", ps:["First, confirm the network. Some assets move on multiple networks, and the correct destination matters.","Second, check the address carefully. Do not trust it blindly just because it is copied into the field.","Third, send a small test amount when possible. If the test works, then send the larger amount.","Fourth, verify the transfer with the transaction ID, often called the TxID or hash."]},
        {h:"What is a TxID?", ps:["A TxID is like a receipt number for the transfer. It helps you confirm whether the network recorded the transaction, and whether it is still pending or already confirmed.","Beginners do not need to learn every explorer in the world. It is enough to understand that a TxID gives you a way to check what happened."]},
        {h:"Slow is safe", ps:["In crypto, speed often feels exciting. But for transfers, slow is usually safer than fast.","Reading the network name one more time and testing a small amount can prevent a much larger mistake later."]}
      ],
      defs:[["Network","The blockchain system the asset is moving on."],["Test transfer","A small amount sent first to check that everything works."],["TxID","A transaction identifier used to verify the transfer."],["Explorer","A website or tool used to check blockchain transaction records."]],
      example:"Alice wants to send USDT. She first confirms the network, then checks Bob’s address, sends a small test, and verifies the TxID before sending the full amount.",
      mistakes:["Sending the full amount first.","Ignoring the network because the token name looks familiar.","Assuming a pasted address is automatically correct."],
      faqs:[["Why is the network so important?","Because the same asset name can exist on different networks, and the destination must match."],["Why send a small test first?","Because it reduces the cost of a mistake."],["What should I do after sending?","Check the TxID so you can confirm the transaction status."]],
      checkpoints:["I can name the 4 safe transfer steps.","I know why a test transfer matters.","I know what a TxID is used for."],
      quiz:[["What comes before a full transfer?","A network check, address check, and ideally a small test transfer."],["What does a TxID help you do?","Verify the transaction on the blockchain record."]]
    },
    {
      cat:"Roles", title:"The 5 roles of crypto",
      intro:"Crypto becomes much easier when you stop asking only “What is the name?” and start asking “What role does it play?” One token can work like digital cash, another like access, and another like voting power.",
      sections:[
        {h:"Role beats label", ps:["Beginners often feel lost because every project has a new name, logo, or slogan. The name changes, but the underlying role is often easier to classify.","That is why role-based learning helps. When you understand the job a token or asset is trying to do, the space becomes more readable."]},
        {h:"Five useful beginner categories", ps:["DeFi can be understood like banking functions done with code and wallets rather than a traditional bank counter.","Utility tokens are easiest to understand like points, access, or service functions inside an ecosystem.","Governance tokens are closest to voting rights in a protocol or community.","NFTs are easiest to understand as proof of ownership for a specific digital item.","Stablecoins are closest to digital cash designed to stay near a reference value."]},
        {h:"Why this matters", ps:["If you confuse a stablecoin with a governance token, or an NFT with a utility token, you may misunderstand both the use case and the risk.","Role-based thinking also helps you compare projects more clearly. Instead of following hype, you can ask what problem the token is supposed to solve."]},
        {h:"A better beginner question", ps:["Instead of asking only “Is this coin good?” ask: “What is this token for? Who uses it? Why does it exist? What risk comes with that role?”","These questions do not guarantee perfect decisions, but they create a much better starting point than guessing from the name alone."]}
      ],
      example:"A stablecoin is not trying to do the same job as an NFT. One aims for stable value transfer. The other represents ownership of a specific digital item.",
      mistakes:["Thinking every token is basically the same.","Looking at price first and role second.","Ignoring what a token is actually used for."],
      faqs:[["Is DeFi the same as a bank?","Not exactly. It can resemble banking functions, but the structure and protections may be very different."],["Are NFTs just pictures?","The beginner-friendly answer is no. The more important concept is proof of ownership."],["Why are stablecoins popular?","Because many users want a digital asset designed for transfers and pricing with less day-to-day volatility."]],
      checkpoints:["I can explain DeFi in simple words.","I can describe the difference between a utility token and a governance token.","I know why role-based thinking helps beginners."],
      quiz:[["What is the easiest beginner way to understand a stablecoin?","As digital cash designed to stay near a reference value."],["What question helps more than asking only about a token’s name?","What role does it play?"]]
    },
    {
      cat:"Reality", title:"Real-world lessons",
      intro:"Crypto education should not stop at definitions. Real cases show where beginners get confused, what kinds of mistakes repeat, and why structure matters more than slogans.",
      sections:[
        {h:"Why examples matter", ps:["People learn faster when they see where theory meets reality. A concept like ‘keep your seed phrase private’ becomes more meaningful when you understand how scams actually work.","This section does not exist to create fear. It exists to connect lessons to real-world consequences."]},
        {h:"Three repeated patterns", ps:["Phishing scams often trick users into connecting a wallet or revealing sensitive recovery data.","Exchange failures remind users that convenience is not the same thing as self-custody.","Stablecoin stress reminds users that ‘stable’ describes a design goal, not a perfect guarantee in every scenario."]},
        {h:"How to read crypto news better", ps:["When you see a headline, ask: Was this a wallet problem, a custody problem, a scam problem, or a product design problem?","That simple habit helps you learn from events instead of reacting only to fear or hype."]},
        {h:"One quote worth remembering", ps:["A good beginner rule comes from official consumer guidance: if someone demands payment in crypto as pressure or urgency, that is a serious warning sign.","Real education means learning the language of risk before you need it in a crisis."]}
      ],
      example:"Instead of reading an exchange collapse headline as ‘crypto failed,’ ask what part failed: custody, governance, fraud controls, or risk management.",
      mistakes:["Treating every negative headline as the same kind of problem.","Ignoring official scam warnings because the message sounds urgent.","Thinking a product name alone proves safety."],
      faqs:[["Why include news and sources in a learning platform?","Because real cases make abstract concepts easier to remember and evaluate."],["Do real-world cases always mean the whole industry is broken?","No. They often point to a specific kind of risk that needs to be understood clearly."],["What should I look for first in a scary headline?","Look for the structure of the problem: scam, custody, leverage, or design weakness."]],
      checkpoints:["I can name at least three common risk patterns.","I know that ‘stable’ does not mean risk-free.","I understand why official scam warnings matter."],
      quiz:[["What is a helpful first question when reading a crypto failure headline?","What part of the structure failed?"],["Why is urgency a warning sign in many scams?","Because pressure is often used to stop people from checking details carefully."]],
      sources:[
        ["FTC consumer warning","Quote: “Only scammers demand payment in cryptocurrency.”", "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["Reuters on FTX","Reuters coverage can help beginners see how custody and exchange failure differ from simple price moves.", "https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"]
      ]
    },
    {
      cat:"Buying", title:"How to actually buy your first crypto (safely)",
      intro:"Your first crypto purchase does not need to be complicated. The safest beginner flow is simple: choose a platform carefully, complete the basic identity check, buy a small amount, and learn why moving to your own wallet matters.",
      sections:[
        {h:"Step 1: Choose a platform with beginner basics in mind", ps:["Do not start with hype or a celebrity recommendation. Start with the boring basics: clear fees, support for your local currency, a clean security record, and an interface that helps you confirm what you are buying.","A beginner-friendly exchange should make deposits, withdrawals, and network information easy to read. If the app hides important details or feels confusing, that alone is a reason to slow down."]},
        {h:"Step 2: KYC is just an identity check", ps:["KYC stands for Know Your Customer. In simple terms, it means the platform asks who you are before it lets you fully use buying and withdrawal features.","For beginners, the important point is not the acronym. The point is that many regulated platforms require this check before you can move money in and out."]},
        {h:"Step 3: Deposit fiat, then make a small first buy", ps:["Fiat means normal government money such as KRW, USD, or EUR. The basic flow is usually: add your payment method, deposit fiat, choose the asset, review the price and fees, then buy a small amount first.","There is no beginner prize for buying a large amount immediately. A small first buy gives you room to learn how the platform works before you move more money."]},
        {h:"Step 4: Learn why self-custody matters after the purchase", ps:["If you leave everything on an exchange, the platform is still holding the keys for you. That can feel convenient, but it also means you depend on that company to protect and release your assets.","A self-custody wallet gives you direct control of the keys. Beginners do not need to rush, but they should understand the reason people move assets out later: more direct ownership, fewer platform dependencies, and clearer responsibility."]},
        {h:"Step 5: Keep the first move simple and careful", ps:["After buying, do not try five different networks, tokens, and apps at once. Learn one basic path first: buy a small amount, check the withdrawal network, and if you move it, verify the destination wallet carefully.","Slow repetition builds confidence better than rushing into advanced features. A calm first purchase is more useful than an exciting but confusing one."]}
      ],
      defs:[["Exchange","A platform where you can buy, sell, or move digital assets."],["KYC","A basic identity check used by many platforms before full deposits or withdrawals."],["Fiat","Regular government money such as KRW, USD, or EUR."],["Self-custody wallet","A wallet where you control the keys yourself."]],
      example:"A beginner deposits a small amount of fiat, buys a little BTC or ETH, checks the withdrawal network carefully, and only then decides whether to move part of it to a self-custody wallet.",
      mistakes:["Buying a large amount all at once before understanding the platform.","Skipping the network check because the coin name looks familiar.","Leaving assets on an exchange for a long time without understanding custody risk."],
      faqs:[["Do I need to buy a large amount to start?","No. Many beginners learn more safely by starting with a small amount and understanding the flow first."],["Should I move everything to a self-custody wallet immediately?","Not necessarily immediately. The important beginner lesson is understanding why self-custody exists and how to do it safely before moving larger amounts."],["Why should I care about the network when buying or withdrawing?","Because the same asset can exist on multiple networks, and choosing the wrong one can create transfer problems later."]],
      checkpoints:["I know what basics to compare before choosing an exchange.","I can explain KYC in one short sentence.","I understand the first-buy flow: fiat deposit, small purchase, then careful custody decisions."],
      quiz:[["What is the safest beginner way to make a first purchase?","Start with a small amount on a platform with clear fees, complete the identity check, and review the network before moving anything."],["Why do some people move assets from an exchange to a self-custody wallet?","Because self-custody gives more direct control of the keys and reduces dependence on the exchange."]],
      sources:[
        ["FTC crypto scam basics","Official consumer guidance that helps beginners slow down, check details, and avoid pressure-based scams around buying crypto.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["Not your keys, not your coins","A simple beginner-friendly explanation of why self-custody matters after buying on an exchange.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/"]
      ]
    }
  ],
  ko: [
    {
      cat:"기초", title:"블록체인, 아주 쉽게 이해하기",
      intro:"블록체인은 많은 참여자가 함께 검증하는 공유 원장입니다. 한 회사만 기록을 들고 있는 구조가 아니라, 여러 컴퓨터가 같은 기록을 함께 확인한다는 점이 핵심입니다.",
      sections:[
        {h:"가장 쉬운 출발점", ps:["블록체인은 어렵고 거대한 기술 용어처럼 느껴질 수 있지만, 초보자에게 가장 중요한 핵심은 하나입니다. 바로 ‘공유 기록’입니다.","은행에서는 보통 은행이 거래 장부를 관리합니다. 하지만 블록체인에서는 여러 참여자가 같은 거래 기록을 확인하고 유지합니다. 그래서 한쪽이 마음대로 기록을 바꾸기 더 어렵습니다."]},
        {h:"초보자가 왜 이걸 알아야 하나요?", ps:["많은 사람은 코인을 먼저 사고, 그 다음에 구조를 이해하려고 합니다. 하지만 구조를 모르면 위험을 구분하기가 어렵습니다.","블록체인은 가격을 설명하는 단어가 아니라, 소유와 거래가 어디에 기록되는지를 설명하는 단어입니다. 이걸 이해하면 지갑과 전송도 훨씬 쉬워집니다."]},
        {h:"블록, 체인, 노드", ps:["거래는 여러 개가 모여 블록이 되고, 그 블록은 이전 블록과 연결됩니다. 그래서 블록들의 연결을 ‘체인’이라고 부릅니다.","노드는 그 기록을 읽고 저장하거나 검증하는 컴퓨터입니다. 처음에는 세부 기술을 몰라도 괜찮습니다. 여러 노드가 기록을 지키고 있다는 큰 그림만 이해하면 충분합니다."]},
        {h:"왜 강력하면서도 조심해야 하나요?", ps:["블록체인은 한 중앙 서버에만 의존하지 않는다는 점에서 강력합니다.","하지만 한 번 기록된 거래는 되돌리기 어려운 경우가 많습니다. 그래서 초보자에게는 ‘빠르게’보다 ‘정확하게’가 더 중요합니다."]}
      ],
      defs:[["원장","거래나 잔액을 기록하는 장부입니다."],["노드","기록을 읽고 저장하거나 검증하는 컴퓨터입니다."],["블록","거래가 묶여 저장되는 단위입니다."],["체인","블록이 순서대로 연결된 구조입니다."]],
      example:"은행 송금은 은행 데이터베이스에 의존하지만, 블록체인 전송은 네트워크의 공유 기록에 의존합니다.",
      mistakes:["블록체인이면 모든 상황에서 무조건 안전하다고 생각하는 것.","카드 결제처럼 언제든 취소할 수 있다고 생각하는 것.","블록체인을 이해하기보다 단순 유행어처럼 받아들이는 것."],
      faqs:[["한 회사가 블록체인을 혼자 바꿀 수 있나요?","공개형 블록체인에서는 보통 한 주체가 전체 기록을 혼자 바꾸기 어렵습니다."],["왜 블록체인은 투명하다고 하나요?","탐색기를 통해 거래 기록을 직접 확인할 수 있기 때문입니다."],["코딩을 먼저 알아야 하나요?","아닙니다. 초보자는 공유 기록과 공동 검증이라는 큰 개념부터 이해하면 됩니다."]],
      checkpoints:["블록체인을 공유 원장으로 설명할 수 있습니다.","공동 검증이 왜 중요한지 이해합니다.","확정된 거래가 되돌리기 어려운 이유를 압니다."],
      quiz:[["초보자 기준으로 블록체인을 가장 쉽게 정의하면 무엇인가요?","여러 참여자가 함께 검증하는 공유 원장입니다."],["블록체인 구조를 이해해야 하는 이유는 무엇인가요?","거래와 소유가 어디에 기록되는지 이해해야 위험과 사용법도 더 잘 보이기 때문입니다."]]
    },
    {
      cat:"접근", title:"지갑, 아주 쉽게 이해하기",
      intro:"지갑은 코인을 넣어두는 상자라기보다, 디지털 자산에 접근하고 통제할 수 있게 해주는 키를 관리하는 도구에 가깝습니다.",
      sections:[
        {h:"가장 흔한 오해", ps:["많은 초보자가 지갑을 현금을 넣는 지갑처럼 생각합니다. 이해하기 쉬운 비유지만, 정확한 설명은 아닙니다.","자산 기록은 블록체인에 있고, 지갑은 그 자산에 접근할 수 있는 권한을 관리합니다. 그래서 지갑은 ‘코인 보관함’보다 ‘키 관리자’에 더 가깝습니다."]},
        {h:"주소, 개인키, 시드문구", ps:["지갑 주소는 자산을 받을 때 사용하는 공개 가능한 정보입니다. 주소는 공유해도 됩니다.","개인키는 통제권을 주는 비밀 키입니다. 절대 공유하면 안 됩니다.","시드문구는 지갑 복구용 백업입니다. 시드문구를 잃거나 남에게 보여주면 지갑 전체를 잃을 수 있습니다."]},
        {h:"거래소 보관과 자기 보관", ps:["거래소가 키를 대신 관리하면 편할 수 있지만, 그만큼 사용자 통제권은 줄어듭니다.","반대로 자기 보관은 통제권이 커지지만, 백업과 보안 책임도 같이 커집니다. 초보자는 둘의 차이를 꼭 이해해야 합니다."]},
        {h:"왜 지갑 교육이 중요한가요?", ps:["많은 손실은 기술 난이도보다 기본 개념 오해에서 시작됩니다.","가짜 고객센터에 시드문구를 주거나, 승인 요청을 제대로 읽지 않고 눌러버리는 실수는 대부분 지갑 개념이 약할 때 발생합니다."]}
      ],
      defs:[["지갑 주소","자산을 받을 때 쓰는 공개 가능한 주소입니다."],["개인키","지갑 통제권을 주는 비밀 키입니다."],["시드문구","지갑을 복구하는 백업 문구입니다."],["커스터디형 지갑","서비스가 키를 대신 관리하는 방식입니다."]],
      example:"지갑 주소를 우편함 주소라고 생각하고, 개인키를 그 우편함을 여는 비밀 열쇠라고 생각하면 이해가 쉽습니다.",
      mistakes:["시드문구를 고객지원에 알려주는 것.","시드문구를 스크린샷으로만 저장해두는 것.","거래소 계정과 자기 보관 지갑을 같은 개념으로 보는 것."],
      faqs:[["지갑 주소는 공유해도 되나요?","네. 자산을 받기 위한 정보이므로 공유 가능합니다."],["개인키나 시드문구는 공유해도 되나요?","아니요. 통제권을 넘기는 것과 비슷하므로 절대 공유하면 안 됩니다."],["자기 보관이 항상 더 좋은가요?","더 직접적인 통제권을 주지만, 보안과 백업 책임도 더 큽니다."]],
      checkpoints:["주소와 개인키의 차이를 설명할 수 있습니다.","시드문구가 왜 중요한지 이해합니다.","거래소 보관과 자기 보관의 차이를 이해합니다."],
      quiz:[["공유해도 되는 것은 무엇인가요?","지갑 주소입니다."],["절대 공유하면 안 되는 것은 무엇인가요?","개인키와 시드문구입니다."]]
    },
    {
      cat:"안전", title:"안전한 전송",
      intro:"암호화폐 전송은 복잡한 규칙보다 반복 가능한 안전 습관이 중요합니다. 가장 쉬운 체크리스트는 네트워크, 주소, 테스트 전송, TxID 확인입니다.",
      sections:[
        {h:"사람들이 왜 실수할까요?", ps:["대부분의 전송 실수는 서둘러서 생깁니다. 붙여넣기만 하고 주소를 다시 확인하지 않거나, 네트워크를 제대로 보지 않고 보내버립니다.","블록체인 거래는 되돌리기 어려운 경우가 많기 때문에, 작은 습관이 큰 차이를 만듭니다."]},
        {h:"4단계 기본 습관", ps:["첫째, 네트워크를 확인합니다. 같은 이름의 자산도 여러 네트워크에서 움직일 수 있습니다.","둘째, 주소를 다시 봅니다. 앞자리와 뒷자리를 직접 눈으로 확인하는 습관이 좋습니다.","셋째, 가능하면 소액 테스트 전송을 먼저 합니다.","넷째, TxID로 실제 기록을 확인합니다."]},
        {h:"TxID란 무엇인가요?", ps:["TxID는 거래의 추적 번호라고 생각하면 쉽습니다. 이 번호를 통해 거래가 대기 중인지, 확정됐는지, 실패했는지 확인할 수 있습니다.","초보자는 모든 탐색기 사용법을 외울 필요는 없습니다. TxID가 ‘거래 영수증 번호’라는 개념만 이해해도 충분합니다."]},
        {h:"느리게 하는 것이 더 안전합니다", ps:["암호화폐 전송에서는 빠른 손보다 정확한 습관이 더 중요합니다.","네트워크를 한 번 더 보고, 소액 테스트를 먼저 보내는 것만으로도 큰 실수를 막을 수 있습니다."]}
      ],
      defs:[["네트워크","자산이 이동하는 블록체인 시스템입니다."],["테스트 전송","먼저 소액을 보내 확인하는 절차입니다."],["TxID","거래를 확인하는 고유 식별자입니다."],["탐색기","거래 기록을 조회하는 도구입니다."]],
      example:"앨리스가 USDT를 보내려고 할 때, 먼저 네트워크를 확인하고, 주소를 다시 보고, 소액을 보내고, TxID로 확인한 뒤 나머지를 보냅니다.",
      mistakes:["처음부터 전액을 보내는 것.","토큰 이름만 보고 네트워크를 무시하는 것.","붙여넣은 주소는 무조건 맞다고 생각하는 것."],
      faqs:[["왜 네트워크가 중요한가요?","같은 이름의 자산도 여러 네트워크에 있을 수 있어서 목적지와 맞아야 하기 때문입니다."],["왜 소액 테스트가 필요한가요?","실수 비용을 크게 줄여주기 때문입니다."],["보낸 후에는 무엇을 해야 하나요?","TxID로 실제 기록 상태를 확인해야 합니다."]],
      checkpoints:["안전한 전송 4단계를 말할 수 있습니다.","테스트 전송이 왜 중요한지 압니다.","TxID가 무엇에 쓰이는지 이해합니다."],
      quiz:[["전액 전송 전에 무엇을 먼저 해야 하나요?","네트워크 확인, 주소 확인, 가능하면 소액 테스트 전송입니다."],["TxID는 무엇을 도와주나요?","거래 상태를 블록체인 기록에서 확인하게 해줍니다."]]
    },
    {
      cat:"역할", title:"암호화폐의 5가지 역할",
      intro:"암호화폐는 이름보다 역할로 이해하면 훨씬 쉽습니다. 어떤 것은 디지털 현금처럼 쓰이고, 어떤 것은 접근권이나 투표권처럼 작동합니다.",
      sections:[
        {h:"역할로 보면 쉬워집니다", ps:["초보자가 헷갈리는 이유 중 하나는 프로젝트 이름이 너무 많기 때문입니다.","하지만 이름보다 먼저 ‘무슨 역할을 하는가’를 보면 구조가 훨씬 단순해집니다."]},
        {h:"초보자용 5가지 분류", ps:["디파이는 은행 기능과 비슷하게 이해할 수 있습니다.","유틸리티 토큰은 포인트나 이용권처럼 이해하면 쉽습니다.","거버넌스 토큰은 투표권에 가깝습니다.","NFT는 디지털 소유 증명에 가깝습니다.","스테이블코인은 디지털 현금처럼 이해하면 쉽습니다."]},
        {h:"왜 이 구분이 중요한가요?", ps:["스테이블코인과 NFT는 역할이 완전히 다릅니다. 역할이 다른데도 모두 같은 ‘코인’처럼 보면 위험과 사용처를 제대로 이해하기 어렵습니다.","역할 중심으로 보면 어떤 문제가 해결되려는지, 어떤 리스크가 있는지 더 잘 보이기 시작합니다."]},
        {h:"더 좋은 질문", ps:["‘이름이 뭐지?’보다 ‘무슨 역할을 하지?’라는 질문이 더 강합니다.","이 질문은 단순 유행 추종보다 훨씬 좋은 출발점이 됩니다."]}
      ],
      example:"스테이블코인은 가격 안정과 전송이 중심이지만, NFT는 특정 디지털 자산의 소유 증명이 중심입니다.",
      mistakes:["모든 토큰을 비슷하다고 생각하는 것.","가격만 먼저 보고 역할을 나중에 보는 것.","토큰이 실제로 무엇에 쓰이는지 확인하지 않는 것."],
      faqs:[["디파이는 은행과 똑같나요?","기능은 비슷해 보여도 구조와 보호 장치는 크게 다를 수 있습니다."],["NFT는 그냥 그림인가요?","초보자 입문 기준에서는 그림보다 ‘소유 증명’이라는 개념이 더 중요합니다."],["스테이블코인이 왜 인기가 있나요?","가격 기준과 전송 수단으로 쓰기 편하기 때문입니다."]],
      checkpoints:["디파이를 아주 쉽게 설명할 수 있습니다.","유틸리티 토큰과 거버넌스 토큰 차이를 압니다.","역할 중심으로 보는 것이 왜 도움이 되는지 이해합니다."],
      quiz:[["스테이블코인을 가장 쉽게 이해하면 무엇에 가깝나요?","디지털 현금입니다."],["초보자가 토큰을 볼 때 더 먼저 해야 할 질문은 무엇인가요?","이 토큰은 어떤 역할을 하는가? 입니다."]]
    },
    {
      cat:"실전", title:"실제 교훈",
      intro:"암호화폐 교육은 정의로만 끝나면 안 됩니다. 실제 사례를 보면 초보자가 어디에서 가장 많이 혼란을 겪는지, 어떤 실수가 반복되는지 더 분명하게 보입니다.",
      sections:[
        {h:"왜 실제 사례가 중요한가요?", ps:["실제 사건은 추상적인 경고 문장을 현실적인 교훈으로 바꿔줍니다.","예를 들어 ‘시드문구를 공유하지 마세요’라는 말은 중요하지만, 실제 피싱 사례를 함께 보면 훨씬 더 강하게 기억됩니다."]},
        {h:"반복되는 세 가지 패턴", ps:["첫째, 피싱 사기입니다. 사용자를 급하게 몰아가며 지갑 연결이나 복구 문구 입력을 유도합니다.","둘째, 거래소 보관 리스크입니다. 편리함과 통제권은 같은 말이 아닙니다.","셋째, 스테이블코인 위험입니다. ‘안정적’이라는 말이 무위험을 뜻하는 것은 아닙니다."]},
        {h:"뉴스를 읽는 더 좋은 방법", ps:["자극적인 헤드라인만 볼 게 아니라, 무엇이 실패했는지를 먼저 봐야 합니다. 보관 구조 문제인지, 사기인지, 설계 문제인지 구분해야 합니다.","이 질문 습관이 생기면 공포나 과장 대신 구조를 배우게 됩니다."]},
        {h:"기억할 만한 한 문장", ps:["미국 FTC 소비자 안내에서는 ‘Only scammers demand payment in cryptocurrency.’라고 경고합니다.","즉, 누군가가 압박과 긴급성을 사용하며 암호화폐로 결제를 요구한다면, 그것만으로도 강한 경고 신호로 봐야 합니다."]}
      ],
      example:"거래소 붕괴 기사를 보면 ‘암호화폐 전체가 실패했다’고 보기보다, 보관 구조와 통제권에서 무엇이 문제였는지 먼저 보는 습관이 좋습니다.",
      mistakes:["모든 부정적 뉴스를 같은 종류의 문제로 보는 것.","긴급한 압박성 메시지를 그대로 믿는 것.","이름이나 브랜드만 보고 안전하다고 생각하는 것."],
      faqs:[["교육 플랫폼에 실제 기사와 출처를 넣는 이유는 무엇인가요?","현실 사례가 개념을 더 오래 기억하게 만들기 때문입니다."],["부정적 사건이 곧 전체 산업 실패를 뜻하나요?","아닙니다. 보통은 특정한 종류의 구조적 문제를 보여주는 경우가 많습니다."],["무서운 헤드라인을 보면 무엇부터 봐야 하나요?","사기인지, 보관 문제인지, 설계 문제인지 먼저 나눠보는 것이 좋습니다."]],
      checkpoints:["대표적인 리스크 3가지를 말할 수 있습니다.","‘안정적’이 무위험을 뜻하지 않는다는 점을 이해합니다.","공식 사기 경고를 왜 봐야 하는지 압니다."],
      quiz:[["실패 기사에서 가장 먼저 던질 좋은 질문은 무엇인가요?","무엇이 실패했는가, 즉 구조의 어떤 부분이 문제였는가입니다."],["왜 긴급성과 압박은 위험 신호가 되나요?","상대가 세부 확인을 못 하게 만들기 위해 자주 쓰는 수법이기 때문입니다."]],
      sources:[
        ["FTC 소비자 안내","인용문: “Only scammers demand payment in cryptocurrency.”","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["Reuters의 FTX 보도","거래소 보관 리스크와 구조적 실패를 이해하는 데 도움이 되는 기사입니다.","https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"]
      ]
    }
  ]
};

function cloneForOther(lang, from='en'){ if(!lessons[lang]) lessons[lang]=JSON.parse(JSON.stringify(lessons[from]));}
cloneForOther('th'); cloneForOther('id'); cloneForOther('pt'); cloneForOther('es');

// Light localization for non-EN/KO lesson text
const localizedLessonOverrides = {
  th: [
    {cat:"พื้นฐาน", title:"บล็อกเชนอธิบายแบบง่าย", intro:"บล็อกเชนคือบัญชีแยกประเภทที่หลายฝ่ายช่วยกันตรวจสอบ แทนที่จะมีบริษัทเดียวถือบันทึกทั้งหมดไว้คนเดียว."},
    {cat:"การเข้าถึง", title:"วอลเล็ตอธิบายแบบง่าย", intro:"วอลเล็ตไม่ใช่กล่องเก็บเหรียญเป็นหลัก แต่เป็นเครื่องมือที่จัดการคีย์สำหรับเข้าถึงสินทรัพย์ดิจิทัล."},
    {cat:"ความปลอดภัย", title:"การโอนคริปโตอย่างปลอดภัย", intro:"นิสัยพื้นฐานที่สำคัญคือ ตรวจสอบเครือข่าย ตรวจสอบที่อยู่ ส่งทดสอบ และตรวจสอบ TxID."},
    {cat:"บทบาท", title:"5 บทบาทของคริปโต", intro:"คริปโตจะเข้าใจง่ายขึ้นเมื่อมองตามบทบาท ไม่ใช่ดูแค่ชื่อ."},
    {cat:"โลกจริง", title:"บทเรียนจากกรณีจริง", intro:"กรณีจริงช่วยให้ผู้เริ่มต้นเห็นว่าความเสี่ยงเกิดขึ้นตรงไหนและเพราะอะไร."}
  ],
  id: [
    {cat:"Dasar", title:"Blockchain, dijelaskan sederhana", intro:"Blockchain adalah buku besar bersama yang diverifikasi oleh banyak pihak, bukan satu perusahaan saja."},
    {cat:"Akses", title:"Wallet, dijelaskan sederhana", intro:"Wallet terutama adalah alat untuk mengelola kunci agar Anda dapat mengakses aset digital."},
    {cat:"Keamanan", title:"Transfer kripto yang aman", intro:"Kebiasaan dasarnya sederhana: cek jaringan, cek alamat, kirim tes kecil, lalu verifikasi TxID."},
    {cat:"Peran", title:"5 peran kripto", intro:"Kripto lebih mudah dipahami jika dilihat dari perannya, bukan hanya dari namanya."},
    {cat:"Dunia nyata", title:"Pelajaran dari kasus nyata", intro:"Kasus nyata membantu pemula memahami di mana risiko biasanya muncul."}
  ],
  pt: [
    {cat:"Base", title:"Blockchain explicada de forma simples", intro:"Blockchain é um livro-razão compartilhado, verificado por muitas partes e não por uma única empresa."},
    {cat:"Acesso", title:"Carteiras explicadas de forma simples", intro:"Uma carteira é, acima de tudo, uma ferramenta para gerenciar chaves e acessar ativos digitais."},
    {cat:"Segurança", title:"Transferências de cripto com segurança", intro:"O hábito básico é simples: conferir a rede, conferir o endereço, enviar um teste pequeno e verificar o TxID."},
    {cat:"Papéis", title:"Os 5 papéis do cripto", intro:"O universo cripto fica mais claro quando você observa o papel de cada ativo."},
    {cat:"Mundo real", title:"Lições de casos reais", intro:"Casos reais ajudam iniciantes a ver onde os riscos aparecem na prática."}
  ],
  es: [
    {cat:"Base", title:"Blockchain explicada de forma simple", intro:"Blockchain es un libro mayor compartido que muchas partes verifican juntas, no una sola empresa."},
    {cat:"Acceso", title:"Billeteras explicadas de forma simple", intro:"Una billetera es sobre todo una herramienta para gestionar claves y acceder a activos digitales."},
    {cat:"Seguridad", title:"Transferencias de cripto con seguridad", intro:"El hábito básico es sencillo: revisar la red, revisar la dirección, enviar una prueba pequeña y verificar el TxID."},
    {cat:"Roles", title:"Los 5 roles del cripto", intro:"El cripto se vuelve más claro cuando observas el rol de cada activo."},
    {cat:"Mundo real", title:"Lecciones de casos reales", intro:"Los casos reales ayudan a los principiantes a entender dónde aparecen los riesgos."}
  ]
};
for (const [lang, arr] of Object.entries(localizedLessonOverrides)) {
  arr.forEach((ov,i)=>Object.assign(lessons[lang][i],ov));

}

const homeContent = {
  en:{title:"Learn crypto step by step — and know where to go next",desc:"Start from the basics, then move through wallets, safe transfers, token roles, and real-world lessons. You can also use the Glossary and Source Library anytime.",start:"Where should you begin?",guide:"If you are completely new, follow the lessons in order. Each page is written in simple language, with examples, common mistakes, checkpoints, and sources."},
  ko:{title:"크립토를 단계별로 배우고, 다음에 무엇을 볼지 바로 파악하세요",desc:"기초부터 시작해 지갑, 안전한 전송, 토큰 역할, 실제 교훈까지 차근차근 볼 수 있습니다. 필요할 때는 용어사전과 Source Library도 바로 열어볼 수 있습니다.",start:"어디서 시작하면 좋을까요?",guide:"완전히 처음이라면 강의를 순서대로 보는 것이 가장 좋습니다. 각 페이지는 쉬운 설명, 예시, 자주 하는 실수, 체크포인트, 출처로 구성되어 있습니다."},
  th:{title:"เรียนคริปโตทีละขั้น และรู้ว่าควรดูอะไรต่อ",desc:"เริ่มจากพื้นฐาน แล้วไปต่อที่วอลเล็ต การโอนอย่างปลอดภัย บทบาทของโทเคน และบทเรียนจากโลกจริง คุณยังเปิดอภิธานศัพท์หรือ Source Library ได้ทุกเมื่อ",start:"ควรเริ่มจากตรงไหน?",guide:"ถ้าคุณเป็นมือใหม่จริง ๆ ให้เรียนตามลำดับ แต่ละหน้ามีคำอธิบายง่าย ๆ ตัวอย่าง ข้อผิดพลาดที่พบบ่อย จุดตรวจสอบ และแหล่งอ้างอิง"},
  id:{title:"Pelajari crypto langkah demi langkah dan tahu harus melihat apa selanjutnya",desc:"Mulai dari dasar, lalu lanjut ke wallet, transfer aman, peran token, dan pelajaran dari dunia nyata. Anda juga bisa membuka Glosarium dan Source Library kapan saja.",start:"Mulai dari mana?",guide:"Jika Anda benar-benar baru, ikuti pelajaran secara berurutan. Setiap halaman berisi penjelasan sederhana, contoh, kesalahan umum, checkpoint, dan sumber."},
  pt:{title:"Aprenda cripto passo a passo e saiba o que ver depois",desc:"Comece pelo básico e siga para carteiras, transferências seguras, papéis dos tokens e lições do mundo real. Você também pode abrir o Glossário e a Source Library a qualquer momento.",start:"Por onde começar?",guide:"Se você está começando agora, siga as lições em ordem. Cada página traz explicações simples, exemplos, erros comuns, checkpoints e fontes."},
  br:{title:"Aprenda cripto passo a passo e saiba o que ver depois",desc:"Comece pelo básico e siga para carteiras, transferências seguras, papéis dos tokens e lições do mundo real. Você também pode abrir o Glossário e a Biblioteca de Fontes a qualquer momento.",start:"Por onde começar?",guide:"Se você está começando agora, siga as lições em ordem. Cada página traz explicações simples, exemplos, erros comuns, checkpoints e fontes."},
  tr:{title:"Kriptoyu adım adım öğrenin ve sonra neye bakmanız gerektiğini bilin",desc:"Temelden başlayın, ardından cüzdanlar, güvenli transferler, token rolleri ve gerçek dünya derslerine geçin. İstediğiniz zaman Sözlük ve Kaynak Kütüphanesi'ni de açabilirsiniz.",start:"Nereden başlamalı?",guide:"Yeni başlıyorsanız dersleri sırayla takip edin. Her sayfada basit açıklamalar, örnekler, yaygın hatalar, kontrol noktaları ve kaynaklar bulunur."},
  es:{title:"Aprende cripto paso a paso y sabe qué mirar después",desc:"Empieza por lo básico y luego sigue con billeteras, transferencias seguras, roles de los tokens y lecciones del mundo real. También puedes abrir el Glosario y la Source Library en cualquier momento.",start:"¿Por dónde empezar?",guide:"Si eres principiante, sigue las lecciones en orden. Cada página incluye explicaciones simples, ejemplos, errores comunes, puntos de verificación y fuentes."}
};

const glossaryData = {
  en:[
    ["Address",t=>t('glossary.address.body')],["Private key",t=>t('glossary.private.body')],["Seed phrase",t=>t('glossary.seed.body')],
    ["Gas fee",t=>t('glossary.gas.body')],["Public key",t=>t('glossary.public.body')],["Explorer",t=>t('glossary.explorer.body')],
    ["Smart contract",t=>t('glossary.contract.body')],["Custody",t=>t('glossary.custody.body')],["Bridge",t=>t('glossary.bridge.body')]
  ],
  ko:[
    ["주소",t=>t('glossary.address.body')],["개인키",t=>t('glossary.private.body')],["시드 문구",t=>t('glossary.seed.body')],
    ["가스비",t=>t('glossary.gas.body')],["공개키",t=>t('glossary.public.body')],["익스플로러",t=>t('glossary.explorer.body')],
    ["스마트 컨트랙트",t=>t('glossary.contract.body')],["커스터디",t=>t('glossary.custody.body')],["브리지",t=>t('glossary.bridge.body')]
  ],
  th:[
    ["ที่อยู่กระเป๋า",t=>t('glossary.address.body')],["คีย์ส่วนตัว",t=>t('glossary.private.body')],["วลีสำรอง",t=>t('glossary.seed.body')],
    ["ค่าธรรมเนียมแก๊ส",t=>t('glossary.gas.body')],["กุญแจสาธารณะ",t=>t('glossary.public.body')],["ตัวสำรวจบล็อกเชน",t=>t('glossary.explorer.body')],
    ["สมาร์ตคอนแทรกต์",t=>t('glossary.contract.body')],["การดูแลสินทรัพย์",t=>t('glossary.custody.body')],["บริดจ์บล็อกเชน",t=>t('glossary.bridge.body')]
  ],
  id:[
    ["Alamat Dompet",t=>t('glossary.address.body')],["Kunci Privat",t=>t('glossary.private.body')],["Frasa Pemulihan",t=>t('glossary.seed.body')],
    ["Biaya Gas",t=>t('glossary.gas.body')],["Kunci Publik",t=>t('glossary.public.body')],["Penjelajah Blockchain",t=>t('glossary.explorer.body')],
    ["Kontrak Pintar",t=>t('glossary.contract.body')],["Kustodi",t=>t('glossary.custody.body')],["Jembatan Blockchain",t=>t('glossary.bridge.body')]
  ],
  pt:[
    ["Endereço da Carteira",t=>t('glossary.address.body')],["Chave Privada",t=>t('glossary.private.body')],["Frase de Recuperação",t=>t('glossary.seed.body')],
    ["Taxa de Gas",t=>t('glossary.gas.body')],["Chave Pública",t=>t('glossary.public.body')],["Explorador de Blockchain",t=>t('glossary.explorer.body')],
    ["Contrato Inteligente",t=>t('glossary.contract.body')],["Custódia",t=>t('glossary.custody.body')],["Ponte entre Blockchains",t=>t('glossary.bridge.body')]
  ],
  es:[
    ["Dirección de la Billetera",t=>t('glossary.address.body')],["Clave Privada",t=>t('glossary.private.body')],["Frase Semilla",t=>t('glossary.seed.body')],
    ["Tarifa de Gas",t=>t('glossary.gas.body')],["Clave Pública",t=>t('glossary.public.body')],["Explorador de Blockchain",t=>t('glossary.explorer.body')],
    ["Contrato Inteligente",t=>t('glossary.contract.body')],["Custodia",t=>t('glossary.custody.body')],["Puente entre Blockchains",t=>t('glossary.bridge.body')]
  ]
};

// Enhanced Source Library — structured with category, publisher, title, desc, url, related section, why it matters
// Format: [category_key, publisher, title, desc, url, relatedSection, whyMatters]
const sourceLibraryCats = {
  en: [
    { key:"scams",    label:"Scams / Consumer Warnings" },
    { key:"exchanges",label:"Exchanges / Custody Risk" },
    { key:"stable",   label:"Stablecoins / Policy & Structure" },
    { key:"wallet",   label:"Wallet Safety / Payments" },
    { key:"cases",    label:"Real-world Cases / Lessons" },
    { key:"basics",   label:"Blockchain Basics / Education" },
    { key:"defi",     label:"DeFi / Token Roles" },
    { key:"reg",      label:"Regulation / Official Guidance" }
  ],
  ko: [
    { key:"scams",    label:"사기 / 소비자 경고" },
    { key:"exchanges",label:"거래소 / 커스터디 위험" },
    { key:"stable",   label:"스테이블코인 / 정책 & 구조" },
    { key:"wallet",   label:"지갑 보안 / 결제" },
    { key:"cases",    label:"실제 사례 / 교훈" },
    { key:"basics",   label:"블록체인 기초 / 교육" },
    { key:"defi",     label:"DeFi / 토큰 역할" },
    { key:"reg",      label:"규제 / 공식 가이던스" }
  ],
  th: [
    { key:"scams",    label:"การหลอกลวง / คำเตือนผู้บริโภค" },
    { key:"exchanges",label:"ตลาดแลกเปลี่ยน / ความเสี่ยงการดูแลสินทรัพย์" },
    { key:"stable",   label:"สเตเบิลคอยน์ / นโยบายและโครงสร้าง" },
    { key:"wallet",   label:"ความปลอดภัยวอลเล็ต / การชำระเงิน" },
    { key:"cases",    label:"กรณีจริง / บทเรียน" },
    { key:"basics",   label:"พื้นฐานบล็อกเชน / การศึกษา" },
    { key:"defi",     label:"DeFi / บทบาทโทเคน" },
    { key:"reg",      label:"กฎระเบียบ / คำแนะนำทางการ" }
  ],
  id: [
    { key:"scams",    label:"Penipuan / Peringatan Konsumen" },
    { key:"exchanges",label:"Bursa / Risiko Penitipan Aset" },
    { key:"stable",   label:"Stablecoin / Kebijakan & Struktur" },
    { key:"wallet",   label:"Keamanan Dompet / Pembayaran" },
    { key:"cases",    label:"Kasus Nyata / Pelajaran" },
    { key:"basics",   label:"Dasar Blockchain / Edukasi" },
    { key:"defi",     label:"DeFi / Peran Token" },
    { key:"reg",      label:"Regulasi / Panduan Resmi" }
  ],
  pt: [
    { key:"scams",    label:"Golpes / Avisos ao Consumidor" },
    { key:"exchanges",label:"Corretoras / Risco de Custódia" },
    { key:"stable",   label:"Stablecoins / Política & Estrutura" },
    { key:"wallet",   label:"Segurança da Carteira / Pagamentos" },
    { key:"cases",    label:"Casos Reais / Lições" },
    { key:"basics",   label:"Fundamentos do Blockchain / Educação" },
    { key:"defi",     label:"DeFi / Papéis dos Tokens" },
    { key:"reg",      label:"Regulação / Orientação Oficial" }
  ],
  tr: [
    { key:"scams",    label:"Dolandırıcılık / Tüketici Uyarıları" },
    { key:"exchanges",label:"Borsalar / Saklama Riski" },
    { key:"stable",   label:"Stablecoinler / Politika & Yapı" },
    { key:"wallet",   label:"Cüzdan Güvenliği / Ödemeler" },
    { key:"cases",    label:"Gerçek Vakalar / Dersler" },
    { key:"basics",   label:"Blockchain Temelleri / Eğitim" },
    { key:"defi",     label:"DeFi / Token Rolleri" },
    { key:"reg",      label:"Düzenleme / Resmi Rehber" }
  ],
  es: [
    { key:"scams",    label:"Estafas / Avisos al Consumidor" },
    { key:"exchanges",label:"Exchanges / Riesgo de Custodia" },
    { key:"stable",   label:"Stablecoins / Política & Estructura" },
    { key:"wallet",   label:"Seguridad de Billetera / Pagos" },
    { key:"cases",    label:"Casos Reales / Lecciones" },
    { key:"basics",   label:"Fundamentos Blockchain / Educación" },
    { key:"defi",     label:"DeFi / Roles de Tokens" },
    { key:"reg",      label:"Regulación / Orientación Oficial" }
  ],
  ar: [
    { key:"scams",    label:"عمليات الاحتيال / تحذيرات المستهلك" },
    { key:"exchanges",label:"منصات التداول / مخاطر الحضانة" },
    { key:"stable",   label:"العملات المستقرة / السياسة والهيكل" },
    { key:"wallet",   label:"أمان المحفظة / المدفوعات" },
    { key:"cases",    label:"حالات حقيقية / دروس مستفادة" },
    { key:"basics",   label:"أساسيات البلوكتشين / التعليم" },
    { key:"defi",     label:"DeFi / أدوار التوكنات" },
    { key:"reg",      label:"التنظيم / الإرشادات الرسمية" }
  ],
  vi: [
    { key:"scams",    label:"Lừa đảo / Cảnh báo người tiêu dùng" },
    { key:"exchanges",label:"Sàn giao dịch / Rủi ro lưu ký" },
    { key:"stable",   label:"Stablecoin / Chính sách & Cấu trúc" },
    { key:"wallet",   label:"Bảo mật ví / Thanh toán" },
    { key:"cases",    label:"Trường hợp thực tế / Bài học" },
    { key:"basics",   label:"Nền tảng Blockchain / Giáo dục" },
    { key:"defi",     label:"DeFi / Vai trò Token" },
    { key:"reg",      label:"Quy định / Hướng dẫn chính thức" }
  ]
};
sourceLibraryCats.br = sourceLibraryCats.pt;
// Fallback for other langs not listed
['de','fr','ja','zh'].forEach(l=>{sourceLibraryCats[l]=sourceLibraryCats.en;});

// Source items: [cat_key, publisher, title, desc, url, relatedSection, whyMatters]
const sourceLibrary = {
  en:[
    // Scams / Consumer Warnings
    ["scams","FTC","FTC: What To Know About Cryptocurrency Scams","Overview of the most common crypto scam types and how to protect yourself.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Safety","Helps beginners identify scam patterns before they lose money."],
    ["scams","FTC","FTC: Don't Pay Anyone Who Contacts You and Asks for Crypto","Why unsolicited contact asking for crypto payments is almost always a scam.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Safety","Shows why crypto payment requests can be a scam warning signal."],
    ["scams","Chainalysis","Crypto Scam Revenue Report","Data-driven look at how much money scammers collect and which tactics work best.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Lesson 5 — Real-world Lessons","Shows the real scale of scam activity so beginners can understand the risk level."],
    ["scams","TRM Labs","Romance Scams and Pig Butchering","How long-term trust-building scams work and why they are so effective.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","Safety","Explains how social engineering scams operate over weeks or months."],
    // Exchanges / Custody Risk
    ["exchanges","Reuters","FTX Begins Paying Customers — What Happened","Reporting on FTX collapse, why custody and exchange risk matter for users.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Lesson 5 — Real-world Lessons","Helps beginners understand custody risk through a real exchange collapse case."],
    ["exchanges","Reuters","Binance Pays $4.3 Billion in US Settlement","Coverage of the largest crypto compliance case and what it revealed about exchange operations.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Lesson 5 — Real-world Lessons","Shows how even large exchanges face regulatory and compliance failures."],
    ["exchanges","CoinDesk","Not Your Keys, Not Your Coins — Explained","Why holding assets on an exchange is different from holding them in your own wallet.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Lesson 2 — Wallets","Core custody concept every beginner must understand before using any exchange."],
    ["exchanges","Chainalysis","Exchange Hack Reports 2022–2023","Summary of major exchange hacks and what users lost when platforms were compromised.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Lesson 5 — Real-world Lessons","Illustrates real hack patterns and why exchange custody carries risk."],
    // Stablecoins / Policy & Structure
    ["stable","ECB","ECB: Stablecoin Risk and Structure Explainer","How central banks and policymakers describe stablecoin risk and backing mechanisms.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Lesson 4 — Token Types","Helps explain how regulators view stablecoin risk and policy."],
    ["stable","BIS","BIS Working Paper: Stablecoins — Use Cases and Risks","Bank for International Settlements analysis of stablecoin models and systemic risk.","https://www.bis.org/publ/work905.htm","Lesson 4 — Token Types","Shows how international financial institutions understand stablecoin mechanics."],
    ["stable","Reuters","TerraUSD Collapse Explained","Reporting on how the UST/LUNA collapse wiped out billions and what went wrong.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Lesson 5 — Real-world Lessons","Real case showing how an algorithmic stablecoin can lose its peg catastrophically."],
    // Wallet Safety / Payments
    ["wallet","Ledger","Ledger Academy: What Is a Seed Phrase?","Official explanation of what a seed phrase does and why it must be protected.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Lesson 2 — Wallets","Core concept for anyone setting up a wallet — protect your seed phrase."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","Difference between internet-connected and offline wallets and when to use each.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Lesson 2 — Wallets","Helps beginners choose the right wallet type based on their security needs."],
    ["wallet","FTC","FTC: Crypto ATM and QR Code Scams","How scammers use crypto ATMs and QR codes to steal money from victims.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","Safety","Shows a specific real-world payment scam pattern to avoid."],
    ["wallet","Coinbase","How to Verify a Crypto Address Before Sending","Step-by-step guide to checking addresses before confirming any transfer.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Lesson 3 — Transfers","Directly supports learning the safe transfer steps taught in Lesson 3."],
    // Real-world Cases / Lessons
    ["cases","Reuters","Mt. Gox: A Timeline of the World's Biggest Crypto Hack","History of the Mt. Gox exchange failure — a foundational case for custody understanding.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Lesson 5 — Real-world Lessons","Shows the longest-running exchange collapse and what it means for user funds."],
    ["cases","TRM Labs","TRM Blockchain Intelligence: On-chain Forensics Explained","How blockchain transactions can be traced and what that means for security.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Glossary","Helps explain how public blockchain data is analyzed and traced."],
    ["cases","Chainalysis","How Hackers Launder Stolen Crypto","Patterns used to move and obscure stolen funds — and how they get caught.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Lesson 5 — Real-world Lessons","Shows what happens after a hack and why blockchain is traceable."],
    // Blockchain Basics / Education
    ["basics","Binance Academy","What Is a Blockchain? — Binance Academy","Beginner-level explanation of how a blockchain stores and verifies data.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Lesson 1 — Crypto Basics","Core conceptual foundation needed before any other lesson."],
    ["basics","CoinDesk","What Is Crypto? A Beginner's Guide","Plain-language introduction to what cryptocurrency is and how it works.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Lesson 1 — Crypto Basics","Best starting point for complete beginners before reading the lessons."],
    ["basics","Etherscan","How to Read an Etherscan Transaction","Official guide to understanding what each field on a blockchain explorer means.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Glossary","Supports the Glossary concepts: TxID, address, gas fee, block number."],
    ["basics","Binance Academy","What Is a Gas Fee?","Clear explanation of why network fees exist and how they vary by demand.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Glossary","Helps beginners understand gas fees before making their first transfer."],
    // DeFi / Token Roles
    ["defi","Binance Academy","What Is DeFi? — Binance Academy","Introduction to decentralized finance, what it replaces, and the risks involved.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Lesson 4 — Token Types","Foundation for understanding DeFi token roles covered in Lesson 4."],
    ["defi","CoinDesk","What Is a Smart Contract?","Plain explanation of what smart contracts do and why they can carry risks.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Glossary","Supports the Glossary definition and the smart contract concept in DeFi."],
    ["defi","Chainalysis","DeFi Hacks and Protocol Exploits 2023","How DeFi protocols get exploited and what makes smart contracts vulnerable.","https://www.chainalysis.com/blog/defi-hacks-2023/","Lesson 5 — Real-world Lessons","Shows the specific risk that comes with DeFi vs. centralized exchanges."],
    // Regulation / Official Guidance
    ["reg","SEC","SEC: Investor Bulletin on Crypto Asset Securities","Official US SEC guidance on what crypto assets may qualify as securities.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Regulation","Helps users understand how US regulators classify crypto assets."],
    ["reg","FSB","FSB: Global Regulatory Framework for Crypto Assets","Financial Stability Board overview of how international regulators are approaching crypto.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Regulation","Shows the global policy direction so beginners understand regulation's role."],
    ["reg","ECB","ECB: MiCA Regulation Overview — What It Means","How the EU's Markets in Crypto-Assets regulation changes the landscape for users and issuers.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Regulation","Shows how major economies are building rules around crypto markets."]
  ],
  ko:[
    // 사기 / 소비자 경고
    ["scams","FTC","FTC: 암호화폐 사기 알아야 할 것들","가장 흔한 암호화폐 사기 유형과 자신을 보호하는 방법을 다룹니다.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","안전","초보자가 돈을 잃기 전에 사기 패턴을 파악하는 데 도움이 됩니다."],
    ["scams","FTC","FTC: 연락해서 암호화폐 요구하면 무조건 사기","갑작스럽게 연락해 암호화폐 결제를 요구하는 행위가 왜 항상 사기인지 설명합니다.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","안전","암호화폐 결제 요청이 사기 신호임을 보여줍니다."],
    ["scams","Chainalysis","암호화폐 사기 수익 보고서 2023","사기꾼들이 얼마나 많은 돈을 벌고 어떤 수법이 가장 효과적인지 데이터로 보여줍니다.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","강의 5 — 실제 교훈","실제 사기 규모를 이해해 위험 수준을 인식하는 데 도움이 됩니다."],
    ["scams","TRM Labs","로맨스 스캠과 돼지도살 사기 설명","장기간 신뢰를 쌓다가 사기 치는 수법과 왜 효과적인지 분석합니다.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","안전","몇 주, 몇 달에 걸쳐 진행되는 소셜 엔지니어링 사기 수법을 설명합니다."],
    // 거래소 / 커스터디 위험
    ["exchanges","Reuters","FTX 파산과 고객 보상 — 무슨 일이 있었나","FTX 붕괴 경위와 거래소 커스터디 위험이 왜 중요한지 다룹니다.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","강의 5 — 실제 교훈","실제 거래소 붕괴 사례를 통해 커스터디 위험을 이해하는 데 도움이 됩니다."],
    ["exchanges","Reuters","바이낸스 43억 달러 미국 합의금 사건","역대 최대 규모의 암호화폐 규정 위반 사건과 거래소 운영 실태를 보여줍니다.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","강의 5 — 실제 교훈","대형 거래소도 규제 준수에 실패할 수 있음을 보여줍니다."],
    ["exchanges","CoinDesk","'네 키가 아니면 네 코인이 아니다' — 설명","거래소에 자산을 두는 것과 내 지갑에 보관하는 것의 차이를 설명합니다.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","강의 2 — 지갑","거래소를 사용하기 전에 모든 초보자가 반드시 이해해야 하는 커스터디 개념입니다."],
    ["exchanges","Chainalysis","거래소 해킹 보고서 2022–2023","주요 거래소 해킹 사례와 사용자들이 얼마나 피해를 입었는지 정리합니다.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","강의 5 — 실제 교훈","실제 해킹 패턴과 거래소 커스터디의 위험성을 보여줍니다."],
    // 스테이블코인 / 정책 & 구조
    ["stable","ECB","ECB: 스테이블코인 위험과 구조 설명","중앙은행이 스테이블코인의 위험성과 담보 방식을 어떻게 보는지 설명합니다.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","강의 4 — 암호화폐의 5가지 역할","규제 기관이 스테이블코인을 어떻게 바라보는지 이해하는 데 도움이 됩니다."],
    ["stable","BIS","BIS: 스테이블코인 활용 사례와 위험 분석","국제결제은행(BIS)이 스테이블코인 모델과 시스템 리스크를 분석한 보고서입니다.","https://www.bis.org/publ/work905.htm","강의 4 — 암호화폐의 5가지 역할","국제 금융기관이 스테이블코인 구조를 어떻게 이해하는지 보여줍니다."],
    ["stable","Reuters","테라USD 붕괴 전말","UST/LUNA 붕괴로 수조 원이 사라진 경위와 무엇이 잘못됐는지를 다룹니다.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","강의 5 — 실제 교훈","알고리즘 스테이블코인이 어떻게 페그를 잃을 수 있는지 보여주는 실제 사례입니다."],
    // 지갑 보안 / 결제
    ["wallet","Ledger","Ledger Academy: 시드 문구란 무엇인가?","시드 문구의 역할과 반드시 보호해야 하는 이유를 공식 설명합니다.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","강의 2 — 지갑","지갑을 처음 만드는 사람이라면 반드시 알아야 하는 핵심 개념입니다."],
    ["wallet","Binance Academy","핫 월렛 vs 콜드 월렛 — Binance Academy","인터넷 연결 지갑과 오프라인 지갑의 차이와 언제 각각을 사용해야 하는지 설명합니다.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","강의 2 — 지갑","초보자가 보안 필요에 맞는 지갑 유형을 선택하는 데 도움이 됩니다."],
    ["wallet","FTC","FTC: 암호화폐 ATM과 QR코드 사기","사기꾼이 ATM과 QR코드를 통해 피해자 돈을 훔치는 방식을 설명합니다.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","안전","피해야 할 구체적인 실제 결제 사기 패턴을 보여줍니다."],
    ["wallet","Coinbase","전송 전 암호화폐 주소 확인하는 방법","전송 확인 전에 주소를 검증하는 단계별 안내입니다.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","강의 3 — 안전한 전송","강의 3에서 배운 안전한 전송 단계를 직접 지원하는 자료입니다."],
    // 실제 사례 / 교훈
    ["cases","Reuters","마운트곡스: 세계 최대 암호화폐 해킹 타임라인","마운트곡스 거래소 파산의 역사 — 커스터디 이해를 위한 핵심 사례입니다.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","강의 5 — 실제 교훈","가장 오래된 거래소 붕괴 사례와 사용자 자산이 어떻게 위험에 처하는지 보여줍니다."],
    ["cases","TRM Labs","온체인 포렌식이란 무엇인가","블록체인 거래가 어떻게 추적되는지, 그것이 보안에 무슨 의미인지 설명합니다.","https://www.trmlabs.com/post/what-is-blockchain-analytics","용어사전","공개 블록체인 데이터가 어떻게 분석되는지 이해하는 데 도움이 됩니다."],
    ["cases","Chainalysis","해커들이 훔친 암호화폐를 세탁하는 방법","도난 자산이 어떻게 이동하고 감추어지며 어떻게 적발되는지 다룹니다.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","강의 5 — 실제 교훈","해킹 이후 무슨 일이 일어나는지, 블록체인이 왜 추적 가능한지 보여줍니다."],
    // 블록체인 기초 / 교육
    ["basics","Binance Academy","블록체인이란 무엇인가? — Binance Academy","블록체인이 데이터를 저장하고 검증하는 방식을 초보자 수준으로 설명합니다.","https://academy.binance.com/en/articles/what-is-blockchain-technology","강의 1 — 블록체인","다른 강의를 이해하기 위해 필요한 핵심 개념적 기초입니다."],
    ["basics","CoinDesk","암호화폐란? 초보자 가이드","암호화폐가 무엇이고 어떻게 작동하는지 쉬운 언어로 소개합니다.","https://www.coindesk.com/learn/what-is-cryptocurrency/","강의 1 — 블록체인","강의를 읽기 전에 완전 초보자를 위한 최고의 출발점입니다."],
    ["basics","Etherscan","이더스캔 거래 읽는 방법","블록체인 익스플로러의 각 항목이 무엇을 의미하는지 공식 안내합니다.","https://info.etherscan.com/understanding-an-ethereum-transaction/","용어사전","TxID, 주소, 가스비, 블록 번호 등 용어사전 개념을 지원합니다."],
    ["basics","Binance Academy","가스비란 무엇인가?","네트워크 수수료가 왜 존재하고 수요에 따라 어떻게 달라지는지 설명합니다.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","용어사전","초보자가 첫 전송을 하기 전에 가스비를 이해하는 데 도움이 됩니다."],
    // DeFi / 토큰 역할
    ["defi","Binance Academy","DeFi란 무엇인가? — Binance Academy","탈중앙화 금융이 무엇을 대체하는지, 어떤 위험이 있는지 소개합니다.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","강의 4 — 암호화폐의 5가지 역할","강의 4에서 다루는 DeFi 토큰 역할을 이해하기 위한 기초입니다."],
    ["defi","CoinDesk","스마트 컨트랙트란 무엇인가?","스마트 컨트랙트의 역할과 위험 요소를 쉽게 설명합니다.","https://www.coindesk.com/learn/what-is-a-smart-contract/","용어사전","용어사전 정의와 DeFi의 스마트 컨트랙트 개념을 지원합니다."],
    ["defi","Chainalysis","DeFi 해킹과 프로토콜 익스플로잇 2023","DeFi 프로토콜이 어떻게 악용되고 스마트 컨트랙트가 어디서 취약한지 다룹니다.","https://www.chainalysis.com/blog/defi-hacks-2023/","강의 5 — 실제 교훈","중앙화 거래소와 DeFi의 위험 차이를 보여줍니다."],
    // 규제 / 공식 가이던스
    ["reg","SEC","SEC: 암호화폐 증권 관련 투자자 안내","미국 SEC가 어떤 암호화폐가 증권으로 분류될 수 있는지에 대한 공식 지침입니다.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","규제","미국 규제 기관이 암호화폐를 어떻게 분류하는지 이해하는 데 도움이 됩니다."],
    ["reg","FSB","FSB: 암호화폐 글로벌 규제 프레임워크","금융안정위원회(FSB)의 국제적 암호화폐 규제 접근 방식 개요입니다.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","규제","글로벌 정책 방향을 이해해 규제의 역할을 파악하는 데 도움이 됩니다."],
    ["reg","ECB","ECB: MiCA 규정 개요 — 사용자에게 무슨 의미인가","EU의 암호화폐 시장 규정(MiCA)이 사용자와 발행자에게 어떤 변화를 가져오는지 설명합니다.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","규제","주요 경제권이 암호화폐 시장 규칙을 어떻게 구축하는지 보여줍니다."]
  ]
  ,
  th:[
    ["scams","FTC","FTC: สิ่งที่ควรรู้เกี่ยวกับการหลอกลวงคริปโต","ภาพรวมของรูปแบบการหลอกลวงคริปโตที่พบบ่อยที่สุดและวิธีป้องกันตัวเอง","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","ความปลอดภัย","ช่วยให้ผู้เริ่มต้นระบุรูปแบบการหลอกลวงก่อนสูญเสียเงิน"],
    ["scams","FTC","FTC: อย่าจ่ายเงินให้ใครที่ติดต่อมาขอคริปโต","เหตุผลว่าทำไมการติดต่อมาขอชำระเงินด้วยคริปโตมักเป็นการหลอกลวงเสมอ","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","ความปลอดภัย","แสดงว่าการขอชำระเงินด้วยคริปโตอาจเป็นสัญญาณเตือนการหลอกลวง"],
    ["scams","Chainalysis","รายงานรายได้การหลอกลวงคริปโต","มุมมองเชิงข้อมูลเกี่ยวกับจำนวนเงินที่นักต้มตุ๋นเก็บได้และกลยุทธ์ที่ได้ผลดีที่สุด","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงขนาดจริงของกิจกรรมการหลอกลวงเพื่อให้ผู้เริ่มต้นเข้าใจระดับความเสี่ยง"],
    ["scams","TRM Labs","การหลอกลวงรักและ Pig Butchering","วิธีการทำงานของการหลอกลวงที่สร้างความไว้วางใจในระยะยาวและเหตุผลที่มีประสิทธิภาพสูง","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","ความปลอดภัย","อธิบายวิธีการทำงานของการหลอกลวงทางวิศวกรรมสังคมในช่วงหลายสัปดาห์หรือหลายเดือน"],
    ["exchanges","Reuters","FTX เริ่มชำระเงินให้ลูกค้า — เกิดอะไรขึ้น","รายงานการล่มสลายของ FTX และเหตุผลที่ความเสี่ยงจากการดูแลสินทรัพย์ของ Exchange มีความสำคัญ","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","บทที่ 5 — บทเรียนจากโลกจริง","ช่วยให้ผู้เริ่มต้นเข้าใจความเสี่ยงจากการดูแลสินทรัพย์ผ่านกรณีการล่มสลายของ Exchange จริง"],
    ["exchanges","Reuters","Binance จ่าย 4.3 พันล้านดอลลาร์ในการตกลงกับสหรัฐฯ","รายงานคดีปฏิบัติตามกฎระเบียบคริปโตที่ใหญ่ที่สุดและสิ่งที่เปิดเผยเกี่ยวกับการดำเนินงานของ Exchange","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงว่าแม้แต่ Exchange ขนาดใหญ่ก็อาจเผชิญกับความล้มเหลวด้านกฎระเบียบ"],
    ["exchanges","CoinDesk","ไม่ใช่คีย์ของคุณ ไม่ใช่คอยน์ของคุณ — อธิบาย","เหตุผลที่การถือสินทรัพย์ใน Exchange แตกต่างจากการถือในกระเป๋าของตัวเอง","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","บทที่ 2 — วอลเล็ต","แนวคิดการดูแลสินทรัพย์หลักที่ผู้เริ่มต้นทุกคนต้องเข้าใจก่อนใช้ Exchange"],
    ["exchanges","Chainalysis","รายงานการแฮ็ก Exchange ปี 2022–2023","สรุปการแฮ็ก Exchange หลักและสิ่งที่ผู้ใช้สูญเสียเมื่อแพลตฟอร์มถูกโจมตี","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงรูปแบบการแฮ็กจริงและเหตุผลที่การดูแลสินทรัพย์ใน Exchange มีความเสี่ยง"],
    ["stable","ECB","ECB: อธิบายความเสี่ยงและโครงสร้างของ Stablecoin","วิธีที่ธนาคารกลางและผู้กำหนดนโยบายอธิบายความเสี่ยงของ Stablecoin และกลไกการค้ำประกัน","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","บทที่ 4 — ประเภทโทเคน","ช่วยอธิบายว่าผู้กำกับดูแลมองความเสี่ยงและนโยบาย Stablecoin อย่างไร"],
    ["stable","BIS","BIS: รายงาน Stablecoin — กรณีการใช้งานและความเสี่ยง","การวิเคราะห์ของ Bank for International Settlements เกี่ยวกับรูปแบบ Stablecoin และความเสี่ยงเชิงระบบ","https://www.bis.org/publ/work905.htm","บทที่ 4 — ประเภทโทเคน","แสดงวิธีที่สถาบันการเงินระหว่างประเทศเข้าใจกลไก Stablecoin"],
    ["stable","Reuters","อธิบายการล่มสลายของ TerraUSD","รายงานว่าการล่มสลายของ UST/LUNA ทำให้สูญเสียหลายพันล้านดอลลาร์และเกิดอะไรผิดพลาด","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","บทที่ 5 — บทเรียนจากโลกจริง","กรณีจริงที่แสดงว่า Algorithmic Stablecoin สามารถสูญเสีย Peg ได้อย่างหายนะ"],
    ["wallet","Ledger","Ledger Academy: Seed Phrase คืออะไร?","คำอธิบายอย่างเป็นทางการเกี่ยวกับสิ่งที่ Seed Phrase ทำและเหตุผลที่ต้องปกป้อง","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","บทที่ 2 — วอลเล็ต","แนวคิดหลักสำหรับทุกคนที่ตั้งค่าวอลเล็ต — ปกป้อง Seed Phrase ของคุณ"],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","ความแตกต่างระหว่างวอลเล็ตที่เชื่อมต่ออินเทอร์เน็ตและออฟไลน์และเมื่อใดควรใช้แต่ละประเภท","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","บทที่ 2 — วอลเล็ต","ช่วยผู้เริ่มต้นเลือกประเภทวอลเล็ตที่เหมาะสมตามความต้องการด้านความปลอดภัย"],
    ["wallet","FTC","FTC: การหลอกลวงผ่าน Crypto ATM และ QR Code","วิธีที่นักต้มตุ๋นใช้ Crypto ATM และ QR Code เพื่อขโมยเงินจากเหยื่อ","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","ความปลอดภัย","แสดงรูปแบบการหลอกลวงการชำระเงินในโลกจริงที่ควรหลีกเลี่ยง"],
    ["wallet","Coinbase","วิธีตรวจสอบที่อยู่คริปโตก่อนส่ง","คำแนะนำทีละขั้นตอนในการตรวจสอบที่อยู่ก่อนยืนยันการโอน","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","บทที่ 3 — การโอน","รองรับการเรียนรู้ขั้นตอนการโอนที่ปลอดภัยที่สอนในบทที่ 3 โดยตรง"],
    ["cases","Reuters","Mt. Gox: ไทม์ไลน์การแฮ็กคริปโตที่ใหญ่ที่สุดในโลก","ประวัติของความล้มเหลวของ Exchange Mt. Gox — กรณีพื้นฐานสำหรับความเข้าใจเรื่องการดูแลสินทรัพย์","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงการล่มสลายของ Exchange ที่นานที่สุดและความหมายต่อเงินของผู้ใช้"],
    ["cases","TRM Labs","TRM: On-chain Forensics อธิบาย","วิธีที่ธุรกรรม Blockchain สามารถติดตามได้และความหมายด้านความปลอดภัย","https://www.trmlabs.com/post/what-is-blockchain-analytics","อภิธานศัพท์","ช่วยอธิบายวิธีการวิเคราะห์และติดตามข้อมูล Blockchain สาธารณะ"],
    ["cases","Chainalysis","แฮกเกอร์ฟอกเงินคริปโตที่ขโมยมาอย่างไร","รูปแบบที่ใช้ในการเคลื่อนย้ายและซ่อนเงินที่ขโมย และวิธีที่พวกเขาถูกจับ","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงสิ่งที่เกิดขึ้นหลังการแฮ็กและเหตุผลที่ Blockchain ตรวจสอบย้อนหลังได้"],
    ["basics","Binance Academy","Blockchain คืออะไร? — Binance Academy","คำอธิบายระดับผู้เริ่มต้นเกี่ยวกับวิธีที่ Blockchain จัดเก็บและตรวจสอบข้อมูล","https://academy.binance.com/en/articles/what-is-blockchain-technology","บทที่ 1 — พื้นฐานคริปโต","รากฐานแนวคิดหลักที่จำเป็นก่อนบทเรียนอื่นๆ"],
    ["basics","CoinDesk","คริปโตคืออะไร? คู่มือผู้เริ่มต้น","บทนำภาษาง่ายเกี่ยวกับคริปโตเคอร์เรนซีคืออะไรและทำงานอย่างไร","https://www.coindesk.com/learn/what-is-cryptocurrency/","บทที่ 1 — พื้นฐานคริปโต","จุดเริ่มต้นที่ดีที่สุดสำหรับผู้เริ่มต้นสมบูรณ์ก่อนอ่านบทเรียน"],
    ["basics","Etherscan","วิธีอ่านธุรกรรม Etherscan","คำแนะนำอย่างเป็นทางการเพื่อทำความเข้าใจความหมายของแต่ละฟิลด์ใน Blockchain Explorer","https://info.etherscan.com/understanding-an-ethereum-transaction/","อภิธานศัพท์","รองรับแนวคิดในอภิธานศัพท์: TxID ที่อยู่ ค่าธรรมเนียม Gas หมายเลขบล็อก"],
    ["basics","Binance Academy","ค่าธรรมเนียม Gas คืออะไร?","คำอธิบายที่ชัดเจนเกี่ยวกับเหตุผลที่ค่าธรรมเนียมเครือข่ายมีอยู่และแปรผันตามความต้องการ","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","อภิธานศัพท์","ช่วยผู้เริ่มต้นเข้าใจค่าธรรมเนียม Gas ก่อนทำการโอนครั้งแรก"],
    ["defi","Binance Academy","DeFi คืออะไร? — Binance Academy","บทนำสู่การเงินแบบกระจายศูนย์ สิ่งที่มันแทนที่ และความเสี่ยงที่เกี่ยวข้อง","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","บทที่ 4 — ประเภทโทเคน","รากฐานสำหรับการเข้าใจบทบาทโทเคน DeFi ที่กล่าวถึงในบทที่ 4"],
    ["defi","CoinDesk","Smart Contract คืออะไร?","คำอธิบายง่ายๆ ว่า Smart Contract ทำอะไรและเหตุผลที่อาจมีความเสี่ยง","https://www.coindesk.com/learn/what-is-a-smart-contract/","อภิธานศัพท์","รองรับคำจำกัดความในอภิธานศัพท์และแนวคิด Smart Contract ใน DeFi"],
    ["defi","Chainalysis","การแฮ็ก DeFi และการโจมตี Protocol ปี 2023","วิธีที่ DeFi Protocol ถูกโจมตีและสิ่งที่ทำให้ Smart Contract เสี่ยง","https://www.chainalysis.com/blog/defi-hacks-2023/","บทที่ 5 — บทเรียนจากโลกจริง","แสดงความเสี่ยงเฉพาะที่มาพร้อมกับ DeFi เทียบกับ Exchange แบบรวมศูนย์"],
    ["reg","SEC","SEC: เอกสารแนะนำนักลงทุนเกี่ยวกับหลักทรัพย์สินทรัพย์คริปโต","คำแนะนำอย่างเป็นทางการจาก US SEC เกี่ยวกับสินทรัพย์คริปโตใดบ้างที่อาจจัดเป็นหลักทรัพย์","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","กฎระเบียบ","ช่วยผู้ใช้เข้าใจวิธีที่หน่วยงานกำกับดูแลสหรัฐฯ จัดประเภทสินทรัพย์คริปโต"],
    ["reg","FSB","FSB: กรอบกฎระเบียบระดับโลกสำหรับสินทรัพย์คริปโต","ภาพรวมของ Financial Stability Board เกี่ยวกับวิธีที่หน่วยงานกำกับดูแลระหว่างประเทศเข้าถึงคริปโต","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","กฎระเบียบ","แสดงทิศทางนโยบายระดับโลกเพื่อให้ผู้เริ่มต้นเข้าใจบทบาทของกฎระเบียบ"],
    ["reg","ECB","ECB: ภาพรวมกฎระเบียบ MiCA — ความหมายสำหรับผู้ใช้","วิธีที่กฎระเบียบ Markets in Crypto-Assets ของ EU เปลี่ยนแปลงภูมิทัศน์สำหรับผู้ใช้และผู้ออก","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","กฎระเบียบ","แสดงวิธีที่เศรษฐกิจสำคัญกำลังสร้างกฎเกณฑ์เกี่ยวกับตลาดคริปโต"]
  ],
  id:[
    ["scams","FTC","FTC: Yang Perlu Diketahui tentang Penipuan Kripto","Ikhtisar jenis penipuan kripto yang paling umum dan cara melindungi diri.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Keamanan","Membantu pemula mengenali pola penipuan sebelum kehilangan uang."],
    ["scams","FTC","FTC: Jangan Bayar Siapa Pun yang Menghubungi dan Meminta Kripto","Mengapa kontak tidak diminta yang meminta pembayaran kripto hampir selalu merupakan penipuan.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Keamanan","Menunjukkan mengapa permintaan pembayaran kripto bisa menjadi sinyal peringatan penipuan."],
    ["scams","Chainalysis","Laporan Pendapatan Penipuan Kripto","Pandangan berbasis data tentang berapa banyak uang yang dikumpulkan penipu dan taktik mana yang paling berhasil.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Pelajaran 5 — Kasus Nyata","Menunjukkan skala nyata aktivitas penipuan agar pemula memahami tingkat risikonya."],
    ["scams","TRM Labs","Penipuan Romansa dan Pig Butchering","Cara kerja penipuan membangun kepercayaan jangka panjang dan mengapa sangat efektif.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","Keamanan","Menjelaskan bagaimana penipuan rekayasa sosial beroperasi selama berminggu-minggu atau berbulan-bulan."],
    ["exchanges","Reuters","FTX Mulai Membayar Pelanggan — Apa yang Terjadi","Laporan tentang keruntuhan FTX, mengapa risiko custody dan bursa penting bagi pengguna.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Pelajaran 5 — Kasus Nyata","Membantu pemula memahami risiko custody melalui kasus keruntuhan bursa nyata."],
    ["exchanges","Reuters","Binance Bayar $4,3 Miliar dalam Penyelesaian AS","Liputan kasus kepatuhan kripto terbesar dan apa yang terungkap tentang operasi bursa.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Pelajaran 5 — Kasus Nyata","Menunjukkan bagaimana bahkan bursa besar pun menghadapi kegagalan regulasi."],
    ["exchanges","CoinDesk","Bukan Kunci Anda Bukan Koin Anda — Penjelasan","Mengapa menyimpan aset di bursa berbeda dari menyimpannya di dompet sendiri.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Pelajaran 2 — Dompet","Konsep custody inti yang harus dipahami setiap pemula sebelum menggunakan bursa."],
    ["exchanges","Chainalysis","Laporan Peretasan Bursa 2022–2023","Ringkasan peretasan bursa utama dan apa yang hilang pengguna saat platform disusupi.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Pelajaran 5 — Kasus Nyata","Mengilustrasikan pola peretasan nyata dan mengapa custody bursa membawa risiko."],
    ["stable","ECB","ECB: Penjelasan Risiko dan Struktur Stablecoin","Cara bank sentral dan pembuat kebijakan menggambarkan risiko stablecoin dan mekanisme dukungannya.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Pelajaran 4 — Jenis Token","Membantu menjelaskan bagaimana regulator memandang risiko dan kebijakan stablecoin."],
    ["stable","BIS","BIS: Stablecoin — Kasus Penggunaan dan Risiko","Analisis Bank for International Settlements tentang model stablecoin dan risiko sistemik.","https://www.bis.org/publ/work905.htm","Pelajaran 4 — Jenis Token","Menunjukkan bagaimana institusi keuangan internasional memahami mekanisme stablecoin."],
    ["stable","Reuters","Penjelasan Keruntuhan TerraUSD","Laporan tentang bagaimana keruntuhan UST/LUNA menghapus miliaran dolar dan apa yang salah.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Pelajaran 5 — Kasus Nyata","Kasus nyata yang menunjukkan bagaimana stablecoin algoritmik bisa kehilangan peg-nya secara bencana."],
    ["wallet","Ledger","Ledger Academy: Apa Itu Seed Phrase?","Penjelasan resmi tentang apa yang dilakukan seed phrase dan mengapa harus dilindungi.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Pelajaran 2 — Dompet","Konsep inti bagi siapa saja yang menyiapkan dompet — lindungi seed phrase Anda."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","Perbedaan antara dompet yang terhubung internet dan offline serta kapan menggunakan masing-masing.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Pelajaran 2 — Dompet","Membantu pemula memilih jenis dompet yang tepat berdasarkan kebutuhan keamanan mereka."],
    ["wallet","FTC","FTC: Penipuan Crypto ATM dan Kode QR","Cara penipu menggunakan Crypto ATM dan kode QR untuk mencuri uang dari korban.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","Keamanan","Menunjukkan pola penipuan pembayaran nyata yang harus dihindari."],
    ["wallet","Coinbase","Cara Memverifikasi Alamat Kripto Sebelum Mengirim","Panduan langkah demi langkah untuk memeriksa alamat sebelum mengonfirmasi transfer.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Pelajaran 3 — Transfer","Mendukung langkah transfer aman yang diajarkan dalam Pelajaran 3."],
    ["cases","Reuters","Mt. Gox: Timeline Peretasan Kripto Terbesar di Dunia","Sejarah kegagalan bursa Mt. Gox — kasus dasar untuk memahami custody.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Pelajaran 5 — Kasus Nyata","Menunjukkan keruntuhan bursa tertua dan artinya bagi dana pengguna."],
    ["cases","TRM Labs","TRM: On-chain Forensics Dijelaskan","Bagaimana transaksi blockchain dapat dilacak dan artinya bagi keamanan.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Glosarium","Membantu menjelaskan bagaimana data blockchain publik dianalisis dan dilacak."],
    ["cases","Chainalysis","Cara Peretas Mencuci Kripto Curian","Pola yang digunakan untuk memindahkan dan menyembunyikan dana curian dan cara mereka tertangkap.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Pelajaran 5 — Kasus Nyata","Menunjukkan apa yang terjadi setelah peretasan dan mengapa blockchain dapat dilacak."],
    ["basics","Binance Academy","Apa Itu Blockchain? — Binance Academy","Penjelasan tingkat pemula tentang cara blockchain menyimpan dan memverifikasi data.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Pelajaran 1 — Dasar Kripto","Fondasi konseptual inti yang diperlukan sebelum pelajaran lainnya."],
    ["basics","CoinDesk","Apa Itu Kripto? Panduan Pemula","Pengenalan bahasa sederhana tentang apa itu mata uang kripto dan cara kerjanya.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Pelajaran 1 — Dasar Kripto","Titik awal terbaik bagi pemula lengkap sebelum membaca pelajaran."],
    ["basics","Etherscan","Cara Membaca Transaksi Etherscan","Panduan resmi untuk memahami arti setiap bidang di blockchain explorer.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Glosarium","Mendukung konsep Glosarium: TxID alamat biaya gas nomor blok."],
    ["basics","Binance Academy","Apa Itu Biaya Gas?","Penjelasan jelas tentang mengapa biaya jaringan ada dan bagaimana bervariasi sesuai permintaan.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Glosarium","Membantu pemula memahami biaya gas sebelum melakukan transfer pertama."],
    ["defi","Binance Academy","Apa Itu DeFi? — Binance Academy","Pengantar keuangan terdesentralisasi apa yang digantikannya dan risiko yang terlibat.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Pelajaran 4 — Jenis Token","Fondasi untuk memahami peran token DeFi yang dibahas dalam Pelajaran 4."],
    ["defi","CoinDesk","Apa Itu Smart Contract?","Penjelasan sederhana tentang apa yang dilakukan smart contract dan mengapa bisa membawa risiko.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Glosarium","Mendukung definisi Glosarium dan konsep smart contract dalam DeFi."],
    ["defi","Chainalysis","Peretasan DeFi dan Eksploitasi Protokol 2023","Cara protokol DeFi dieksploitasi dan apa yang membuat smart contract rentan.","https://www.chainalysis.com/blog/defi-hacks-2023/","Pelajaran 5 — Kasus Nyata","Menunjukkan risiko spesifik yang datang dengan DeFi vs. bursa terpusat."],
    ["reg","SEC","SEC: Buletin Investor tentang Sekuritas Aset Kripto","Panduan resmi US SEC tentang aset kripto mana yang mungkin memenuhi syarat sebagai sekuritas.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Regulasi","Membantu pengguna memahami cara regulator AS mengklasifikasikan aset kripto."],
    ["reg","FSB","FSB: Kerangka Regulasi Global untuk Aset Kripto","Ikhtisar Financial Stability Board tentang pendekatan regulator internasional terhadap kripto.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Regulasi","Menunjukkan arah kebijakan global agar pemula memahami peran regulasi."],
    ["reg","ECB","ECB: Ikhtisar Regulasi MiCA — Artinya Bagi Pengguna","Cara regulasi Markets in Crypto-Assets EU mengubah lanskap bagi pengguna dan penerbit.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Regulasi","Menunjukkan cara ekonomi besar membangun aturan seputar pasar kripto."]
  ],
  pt:[
    ["scams","FTC","FTC: O que saber sobre golpes com criptomoedas","Visão geral dos tipos mais comuns de golpes com cripto e como se proteger.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Segurança","Ajuda iniciantes a identificar padrões de golpe antes de perder dinheiro."],
    ["scams","FTC","FTC: Não pague quem entrar em contato pedindo cripto","Por que contatos não solicitados pedindo pagamentos em cripto quase sempre são golpes.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Segurança","Mostra por que solicitações de pagamento em cripto podem ser sinal de golpe."],
    ["scams","Chainalysis","Relatório de receita de golpes com cripto","Análise baseada em dados sobre quanto os golpistas arrecadam e quais táticas funcionam melhor.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Lição 5 — Casos Reais","Mostra a escala real das atividades de golpe para que iniciantes entendam o nível de risco."],
    ["scams","TRM Labs","Golpes de romance e pig butchering","Como golpes que constroem confiança a longo prazo funcionam e por que são tão eficazes.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","Segurança","Explica como golpes de engenharia social operam ao longo de semanas ou meses."],
    ["exchanges","Reuters","FTX começa a pagar clientes — o que aconteceu","Cobertura do colapso da FTX e por que o risco de custódia e de corretora importa para os usuários.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Lição 5 — Casos Reais","Ajuda iniciantes a entender o risco de custódia por meio de um caso real de colapso de corretora."],
    ["exchanges","Reuters","Binance paga US$ 4,3 bilhões em acordo nos EUA","Cobertura do maior caso de conformidade cripto e o que revelou sobre as operações de corretoras.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Lição 5 — Casos Reais","Mostra como até grandes corretoras enfrentam falhas regulatórias e de conformidade."],
    ["exchanges","CoinDesk","Não são suas chaves não são suas moedas — explicado","Por que manter ativos em uma corretora é diferente de mantê-los em sua própria carteira.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Lição 2 — Carteiras","Conceito central de custódia que todo iniciante deve entender antes de usar qualquer corretora."],
    ["exchanges","Chainalysis","Relatórios de hacks em corretoras 2022–2023","Resumo dos principais hacks em corretoras e o que os usuários perderam quando as plataformas foram comprometidas.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Lição 5 — Casos Reais","Ilustra padrões reais de hack e por que a custódia em corretoras traz riscos."],
    ["stable","ECB","ECB: Explicação sobre risco e estrutura de stablecoins","Como bancos centrais e formuladores de políticas descrevem o risco das stablecoins e mecanismos de suporte.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Lição 4 — Tipos de Token","Ajuda a explicar como reguladores veem o risco e a política das stablecoins."],
    ["stable","BIS","BIS: Stablecoins — casos de uso e riscos","Análise do Bank for International Settlements sobre modelos de stablecoin e risco sistêmico.","https://www.bis.org/publ/work905.htm","Lição 4 — Tipos de Token","Mostra como instituições financeiras internacionais entendem a mecânica das stablecoins."],
    ["stable","Reuters","Colapso da TerraUSD explicado","Cobertura de como o colapso do UST/LUNA destruiu bilhões e o que deu errado.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Lição 5 — Casos Reais","Caso real mostrando como uma stablecoin algorítmica pode perder seu peg de forma catastrófica."],
    ["wallet","Ledger","Ledger Academy: O que é uma seed phrase?","Explicação oficial do que uma seed phrase faz e por que deve ser protegida.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Lição 2 — Carteiras","Conceito central para qualquer pessoa que configura uma carteira — proteja sua seed phrase."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","Diferença entre carteiras conectadas à internet e offline e quando usar cada uma.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Lição 2 — Carteiras","Ajuda iniciantes a escolher o tipo certo de carteira com base em suas necessidades de segurança."],
    ["wallet","FTC","FTC: Golpes com Crypto ATM e código QR","Como golpistas usam Crypto ATMs e códigos QR para roubar dinheiro das vítimas.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","Segurança","Mostra um padrão específico de golpe de pagamento no mundo real a evitar."],
    ["wallet","Coinbase","Como verificar um endereço cripto antes de enviar","Guia passo a passo para verificar endereços antes de confirmar qualquer transferência.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Lição 3 — Transferências","Apoia diretamente o aprendizado das etapas de transferência segura ensinadas na Lição 3."],
    ["cases","Reuters","Mt. Gox: Uma linha do tempo do maior hack cripto do mundo","História da falência da corretora Mt. Gox — um caso fundamental para entender custódia.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Lição 5 — Casos Reais","Mostra o colapso de corretora mais antigo e o que significa para os fundos dos usuários."],
    ["cases","TRM Labs","TRM: Forense on-chain explicada","Como as transações em blockchain podem ser rastreadas e o que isso significa para a segurança.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Glossário","Ajuda a explicar como os dados públicos de blockchain são analisados e rastreados."],
    ["cases","Chainalysis","Como hackers lavam cripto roubada","Padrões usados para mover e ocultar fundos roubados e como são pegos.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Lição 5 — Casos Reais","Mostra o que acontece após um hack e por que o blockchain é rastreável."],
    ["basics","Binance Academy","O que é Blockchain? — Binance Academy","Explicação de nível iniciante sobre como um blockchain armazena e verifica dados.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Lição 1 — Fundamentos","Fundação conceitual central necessária antes de qualquer outra lição."],
    ["basics","CoinDesk","O que é cripto? Um guia para iniciantes","Introdução em linguagem simples ao que é criptomoeda e como funciona.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Lição 1 — Fundamentos","Melhor ponto de partida para iniciantes completos antes de ler as lições."],
    ["basics","Etherscan","Como ler uma transação no Etherscan","Guia oficial para entender o significado de cada campo em um blockchain explorer.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Glossário","Apoia os conceitos do Glossário: TxID endereço taxa de gas número do bloco."],
    ["basics","Binance Academy","O que é uma taxa de gas?","Explicação clara de por que taxas de rede existem e como variam de acordo com a demanda.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Glossário","Ajuda iniciantes a entender taxas de gas antes de fazer sua primeira transferência."],
    ["defi","Binance Academy","O que é DeFi? — Binance Academy","Introdução às finanças descentralizadas o que substitui e os riscos envolvidos.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Lição 4 — Tipos de Token","Base para entender os papéis dos tokens DeFi abordados na Lição 4."],
    ["defi","CoinDesk","O que é um smart contract?","Explicação simples do que os smart contracts fazem e por que podem ter riscos.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Glossário","Apoia a definição do Glossário e o conceito de smart contract em DeFi."],
    ["defi","Chainalysis","Hacks em DeFi e exploits de protocolo 2023","Como os protocolos DeFi são explorados e o que torna os smart contracts vulneráveis.","https://www.chainalysis.com/blog/defi-hacks-2023/","Lição 5 — Casos Reais","Mostra o risco específico que vem com DeFi vs. corretoras centralizadas."],
    ["reg","SEC","SEC: Boletim para investidores sobre cripto como valor mobiliário","Orientação oficial do SEC dos EUA sobre quais criptoativos podem se qualificar como valores mobiliários.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Regulação","Ajuda usuários a entender como reguladores dos EUA classificam criptoativos."],
    ["reg","FSB","FSB: Estrutura regulatória global para criptoativos","Visão geral do Financial Stability Board sobre como reguladores internacionais estão abordando cripto.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Regulação","Mostra a direção política global para que iniciantes entendam o papel da regulação."],
    ["reg","ECB","ECB: Visão geral do regulamento MiCA — o que significa","Como o regulamento Markets in Crypto-Assets da UE muda o cenário para usuários e emissores.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Regulação","Mostra como grandes economias estão criando regras para os mercados cripto."]
  ],
  tr:[
    ["scams","FTC","FTC: Kripto Dolandırıcılığı Hakkında Bilinmesi Gerekenler","En yaygın kripto dolandırıcılığı türlerine ve kendinizi nasıl koruyacağınıza genel bakış.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Güvenlik","Yeni başlayanların para kaybetmeden önce dolandırıcılık kalıplarını tanımlamasına yardımcı olur."],
    ["scams","FTC","FTC: Size Ulaşıp Kripto İsteyen Kimseye Ödeme Yapmayın","Neden istenmeyen kripto ödeme isteklerinin neredeyse her zaman dolandırıcılık olduğu.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Güvenlik","Kripto ödeme isteklerinin neden dolandırıcılık uyarı sinyali olabileceğini gösterir."],
    ["scams","Chainalysis","Kripto Dolandırıcılığı Gelir Raporu","Dolandırıcıların ne kadar para topladığı ve hangi taktiklerin en iyi işe yaradığına ilişkin veri odaklı bakış.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Ders 5 — Gerçek Dünya Dersleri","Yeni başlayanların risk seviyesini anlamaları için dolandırıcılık faaliyetinin gerçek ölçeğini gösterir."],
    ["scams","TRM Labs","Romantizm Dolandırıcılığı ve Pig Butchering","Uzun vadeli güven kurma dolandırıcılıklarının nasıl çalıştığı ve neden bu kadar etkili olduğu.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","Güvenlik","Sosyal mühendislik dolandırıcılıklarının haftalarca veya aylarca nasıl işlediğini açıklar."],
    ["exchanges","Reuters","FTX Müşterilere Ödeme Yapıyor — Ne Oldu","FTX çöküşü hakkında habercilik saklama ve borsa riskinin kullanıcılar için neden önemli olduğu.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Ders 5 — Gerçek Dünya Dersleri","Gerçek bir borsa çöküşü vakası aracılığıyla saklama riskini anlamaya yardımcı olur."],
    ["exchanges","Reuters","Binance ABD Anlaşmasında 4,3 Milyar Dolar Ödedi","En büyük kripto uyum davasının kapsamı ve borsa operasyonları hakkında neler ortaya çıkardığı.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Ders 5 — Gerçek Dünya Dersleri","Büyük borsaların bile düzenleyici ve uyum başarısızlıklarıyla nasıl karşılaştığını gösterir."],
    ["exchanges","CoinDesk","Senin Anahtarın Değilse Senin Coin'in Değil — Açıklandı","Varlıkları bir borsada tutmanın kendi cüzdanınızda tutmaktan neden farklı olduğu.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Ders 2 — Cüzdanlar","Her yeni başlayanın herhangi bir borsa kullanmadan önce anlaması gereken temel saklama kavramı."],
    ["exchanges","Chainalysis","Borsa Hack Raporları 2022–2023","Büyük borsa hacklerinin özeti ve platformlar ele geçirildiğinde kullanıcıların kaybettikleri.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Ders 5 — Gerçek Dünya Dersleri","Gerçek hack kalıplarını ve borsa saklamanın neden risk taşıdığını gösterir."],
    ["stable","ECB","ECB: Stablecoin Riski ve Yapı Açıklaması","Merkez bankalarının ve politika yapıcılarının stablecoin riskini ve destekleme mekanizmalarını nasıl tanımladığı.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Ders 4 — Token Türleri","Düzenleyicilerin stablecoin riskini ve politikasını nasıl değerlendirdiğini anlamaya yardımcı olur."],
    ["stable","BIS","BIS: Stablecoinler — Kullanım Alanları ve Riskler","Bank for International Settlements'ın stablecoin modelleri ve sistemik risk analizi.","https://www.bis.org/publ/work905.htm","Ders 4 — Token Türleri","Uluslararası finans kurumlarının stablecoin mekaniklerini nasıl anladığını gösterir."],
    ["stable","Reuters","TerraUSD Çöküşü Açıklandı","UST/LUNA çöküşünün milyarlarca doları nasıl sildiği ve neyin yanlış gittiği hakkında habercilik.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Ders 5 — Gerçek Dünya Dersleri","Algoritmik bir stablecoin'in peg'ini nasıl felaket biçimde kaybedebileceğini gösteren gerçek vaka."],
    ["wallet","Ledger","Ledger Academy: Seed Phrase Nedir?","Seed phrase'in ne yaptığına ve neden korunması gerektiğine dair resmi açıklama.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Ders 2 — Cüzdanlar","Cüzdan kuran herkes için temel kavram — seed phrase'inizi koruyun."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","İnternete bağlı ve çevrimdışı cüzdanlar arasındaki fark ve her birini ne zaman kullanacağınız.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Ders 2 — Cüzdanlar","Yeni başlayanların güvenlik ihtiyaçlarına göre doğru cüzdan türünü seçmesine yardımcı olur."],
    ["wallet","FTC","FTC: Kripto ATM ve QR Kod Dolandırıcılıkları","Dolandırıcıların kurbanlardan para çalmak için kripto ATM ve QR kodlarını nasıl kullandığı.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","Güvenlik","Kaçınılması gereken gerçek hayattan belirli bir ödeme dolandırıcılığı kalıbını gösterir."],
    ["wallet","Coinbase","Göndermeden Önce Kripto Adresi Nasıl Doğrulanır","Herhangi bir transferi onaylamadan önce adresleri kontrol etmek için adım adım kılavuz.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Ders 3 — Transferler","Ders 3'te öğretilen güvenli transfer adımlarını doğrudan destekler."],
    ["cases","Reuters","Mt. Gox: Dünyanın En Büyük Kripto Hackinin Zaman Çizelgesi","Mt. Gox borsa iflasının tarihi — saklama anlayışı için temel bir vaka.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Ders 5 — Gerçek Dünya Dersleri","En uzun süren borsa çöküşünü ve kullanıcı fonları için ne anlama geldiğini gösterir."],
    ["cases","TRM Labs","TRM: On-chain Adli Bilişim Açıklandı","Blockchain işlemlerinin nasıl izlenebileceği ve bunun güvenlik için ne anlama geldiği.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Sözlük","Genel blockchain verilerinin nasıl analiz edilip izlendiğini açıklamaya yardımcı olur."],
    ["cases","Chainalysis","Hackerlar Çalınan Kripto'yu Nasıl Aklar","Çalınan fonları taşımak ve gizlemek için kullanılan kalıplar ve nasıl yakalandıkları.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Ders 5 — Gerçek Dünya Dersleri","Bir hackten sonra ne olduğunu ve blockchain'in neden izlenebilir olduğunu gösterir."],
    ["basics","Binance Academy","Blockchain Nedir? — Binance Academy","Bir blockchain'in verileri nasıl depoladığı ve doğruladığına ilişkin başlangıç seviyesi açıklama.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Ders 1 — Kripto Temelleri","Diğer herhangi bir dersten önce gerekli temel kavramsal temel."],
    ["basics","CoinDesk","Kripto Nedir? Başlangıç Rehberi","Kripto para biriminin ne olduğuna ve nasıl çalıştığına dair sade dilde giriş.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Ders 1 — Kripto Temelleri","Dersleri okumadan önce tam yeni başlayanlar için en iyi başlangıç noktası."],
    ["basics","Etherscan","Etherscan İşlemi Nasıl Okunur","Bir blockchain explorer'daki her alanın ne anlama geldiğini anlamak için resmi kılavuz.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Sözlük","Sözlük kavramlarını destekler: TxID adres gas ücreti blok numarası."],
    ["basics","Binance Academy","Gas Ücreti Nedir?","Ağ ücretlerinin neden var olduğunun ve talebe göre nasıl değiştiğinin açık açıklaması.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Sözlük","Yeni başlayanların ilk transferlerini yapmadan önce gas ücretlerini anlamasına yardımcı olur."],
    ["defi","Binance Academy","DeFi Nedir? — Binance Academy","Merkezi olmayan finansa giriş neyin yerini aldığı ve ilgili riskler.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Ders 4 — Token Türleri","Ders 4'te ele alınan DeFi token rollerini anlamak için temel."],
    ["defi","CoinDesk","Smart Contract Nedir?","Smart contract'ların ne yaptığının ve neden risk taşıyabileceğinin sade açıklaması.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Sözlük","Sözlük tanımını ve DeFi'deki smart contract kavramını destekler."],
    ["defi","Chainalysis","DeFi Hackleri ve Protokol İstismarları 2023","DeFi protokollerinin nasıl istismar edildiği ve smart contract'ları neyin savunmasız kıldığı.","https://www.chainalysis.com/blog/defi-hacks-2023/","Ders 5 — Gerçek Dünya Dersleri","DeFi ile merkezi borsalar arasındaki belirli riski gösterir."],
    ["reg","SEC","SEC: Kripto Varlık Menkul Kıymetleri Hakkında Yatırımcı Bülteni","Hangi kripto varlıklarının menkul kıymet sayılabileceğine ilişkin resmi ABD SEC rehberliği.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Düzenleme","Kullanıcıların ABD düzenleyicilerinin kripto varlıklarını nasıl sınıflandırdığını anlamasına yardımcı olur."],
    ["reg","FSB","FSB: Kripto Varlıklar için Küresel Düzenleyici Çerçeve","Financial Stability Board'un uluslararası düzenleyicilerin kripto'ya nasıl yaklaştığına genel bakış.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Düzenleme","Yeni başlayanların düzenlemenin rolünü anlaması için küresel politika yönünü gösterir."],
    ["reg","ECB","ECB: MiCA Düzenleme Genel Bakışı — Ne Anlama Gelir","AB'nin Markets in Crypto-Assets düzenlemesinin kullanıcılar ve ihraçcılar için manzarayı nasıl değiştirdiği.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Düzenleme","Büyük ekonomilerin kripto piyasaları için kuralları nasıl oluşturduğunu gösterir."]
  ],
  es:[
    ["scams","FTC","FTC: Lo que debes saber sobre las estafas con criptomonedas","Resumen de los tipos más comunes de estafas con cripto y cómo protegerse.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Seguridad","Ayuda a los principiantes a identificar patrones de estafa antes de perder dinero."],
    ["scams","FTC","FTC: No pagues a nadie que te contacte y pida cripto","Por qué los contactos no solicitados que piden pagos en cripto son casi siempre una estafa.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Seguridad","Muestra por qué las solicitudes de pago en cripto pueden ser una señal de alerta de estafa."],
    ["scams","Chainalysis","Informe de ingresos por estafas de cripto","Análisis basado en datos sobre cuánto recaudan los estafadores y qué tácticas funcionan mejor.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Lección 5 — Casos Reales","Muestra la escala real de la actividad de estafa para que los principiantes entiendan el nivel de riesgo."],
    ["scams","TRM Labs","Estafas románticas y pig butchering","Cómo funcionan las estafas de construcción de confianza a largo plazo y por qué son tan efectivas.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","Seguridad","Explica cómo operan las estafas de ingeniería social durante semanas o meses."],
    ["exchanges","Reuters","FTX comienza a pagar a clientes — qué pasó","Cobertura del colapso de FTX por qué el riesgo de custodia y de exchange importa para los usuarios.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Lección 5 — Casos Reales","Ayuda a los principiantes a entender el riesgo de custodia a través de un caso real de colapso de exchange."],
    ["exchanges","Reuters","Binance paga $4,3 mil millones en acuerdo con EE.UU.","Cobertura del mayor caso de cumplimiento cripto y lo que reveló sobre las operaciones de exchange.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Lección 5 — Casos Reales","Muestra cómo incluso los grandes exchanges enfrentan fallas regulatorias y de cumplimiento."],
    ["exchanges","CoinDesk","No son tus llaves no son tus monedas — explicado","Por qué mantener activos en un exchange es diferente a mantenerlos en tu propia billetera.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Lección 2 — Billeteras","Concepto central de custodia que todo principiante debe entender antes de usar cualquier exchange."],
    ["exchanges","Chainalysis","Informes de hacks en exchanges 2022–2023","Resumen de los principales hacks en exchanges y lo que perdieron los usuarios cuando las plataformas fueron comprometidas.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Lección 5 — Casos Reales","Ilustra patrones reales de hack y por qué la custodia en exchanges conlleva riesgo."],
    ["stable","ECB","ECB: Explicación del riesgo y estructura de las stablecoins","Cómo los bancos centrales y los formuladores de políticas describen el riesgo de las stablecoins y los mecanismos de respaldo.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Lección 4 — Tipos de Token","Ayuda a explicar cómo los reguladores ven el riesgo y la política de las stablecoins."],
    ["stable","BIS","BIS: Stablecoins — casos de uso y riesgos","Análisis del Bank for International Settlements sobre modelos de stablecoin y riesgo sistémico.","https://www.bis.org/publ/work905.htm","Lección 4 — Tipos de Token","Muestra cómo las instituciones financieras internacionales entienden la mecánica de las stablecoins."],
    ["stable","Reuters","Colapso de TerraUSD explicado","Cobertura de cómo el colapso de UST/LUNA borró miles de millones y qué salió mal.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Lección 5 — Casos Reales","Caso real que muestra cómo una stablecoin algorítmica puede perder su paridad de forma catastrófica."],
    ["wallet","Ledger","Ledger Academy: ¿Qué es una seed phrase?","Explicación oficial de qué hace una seed phrase y por qué debe ser protegida.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Lección 2 — Billeteras","Concepto central para cualquiera que configure una billetera — protege tu seed phrase."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","Diferencia entre billeteras conectadas a internet y sin conexión y cuándo usar cada una.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Lección 2 — Billeteras","Ayuda a los principiantes a elegir el tipo correcto de billetera según sus necesidades de seguridad."],
    ["wallet","FTC","FTC: Estafas con Crypto ATM y códigos QR","Cómo los estafadores usan Crypto ATMs y códigos QR para robar dinero a las víctimas.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","Seguridad","Muestra un patrón específico de estafa de pago en el mundo real a evitar."],
    ["wallet","Coinbase","Cómo verificar una dirección cripto antes de enviar","Guía paso a paso para verificar direcciones antes de confirmar cualquier transferencia.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Lección 3 — Transferencias","Apoya directamente el aprendizaje de los pasos de transferencia segura enseñados en la Lección 3."],
    ["cases","Reuters","Mt. Gox: Una línea de tiempo del mayor hack cripto del mundo","Historia de la quiebra del exchange Mt. Gox — un caso fundamental para entender la custodia.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Lección 5 — Casos Reales","Muestra el colapso de exchange más antiguo y lo que significa para los fondos de los usuarios."],
    ["cases","TRM Labs","TRM: Forense on-chain explicada","Cómo las transacciones en blockchain pueden ser rastreadas y lo que eso significa para la seguridad.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Glosario","Ayuda a explicar cómo se analizan y rastrean los datos públicos de blockchain."],
    ["cases","Chainalysis","Cómo los hackers lavan cripto robada","Patrones usados para mover y ocultar fondos robados y cómo son atrapados.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Lección 5 — Casos Reales","Muestra lo que sucede después de un hack y por qué el blockchain es rastreable."],
    ["basics","Binance Academy","¿Qué es un Blockchain? — Binance Academy","Explicación de nivel principiante sobre cómo un blockchain almacena y verifica datos.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Lección 1 — Fundamentos","Fundación conceptual central necesaria antes de cualquier otra lección."],
    ["basics","CoinDesk","¿Qué es cripto? Una guía para principiantes","Introducción en lenguaje sencillo a qué es la criptomoneda y cómo funciona.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Lección 1 — Fundamentos","Mejor punto de partida para principiantes completos antes de leer las lecciones."],
    ["basics","Etherscan","Cómo leer una transacción en Etherscan","Guía oficial para entender el significado de cada campo en un explorador de blockchain.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Glosario","Apoya los conceptos del Glosario: TxID dirección tarifa de gas número de bloque."],
    ["basics","Binance Academy","¿Qué es una tarifa de gas?","Explicación clara de por qué existen las tarifas de red y cómo varían según la demanda.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Glosario","Ayuda a los principiantes a entender las tarifas de gas antes de hacer su primera transferencia."],
    ["defi","Binance Academy","¿Qué es DeFi? — Binance Academy","Introducción a las finanzas descentralizadas qué reemplaza y los riesgos involucrados.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Lección 4 — Tipos de Token","Base para entender los roles de tokens DeFi cubiertos en la Lección 4."],
    ["defi","CoinDesk","¿Qué es un smart contract?","Explicación sencilla de qué hacen los smart contracts y por qué pueden conllevar riesgos.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Glosario","Apoya la definición del Glosario y el concepto de smart contract en DeFi."],
    ["defi","Chainalysis","Hacks en DeFi y exploits de protocolo 2023","Cómo se explotan los protocolos DeFi y qué hace vulnerables a los smart contracts.","https://www.chainalysis.com/blog/defi-hacks-2023/","Lección 5 — Casos Reales","Muestra el riesgo específico que conlleva DeFi vs. exchanges centralizados."],
    ["reg","SEC","SEC: Boletín para inversores sobre cripto como valor","Orientación oficial del SEC de EE.UU. sobre qué criptoactivos pueden calificar como valores.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Regulación","Ayuda a los usuarios a entender cómo los reguladores de EE.UU. clasifican los criptoactivos."],
    ["reg","FSB","FSB: Marco regulatorio global para criptoactivos","Resumen del Financial Stability Board sobre cómo los reguladores internacionales están abordando cripto.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Regulación","Muestra la dirección política global para que los principiantes entiendan el papel de la regulación."],
    ["reg","ECB","ECB: Resumen del reglamento MiCA — qué significa","Cómo el reglamento Markets in Crypto-Assets de la UE cambia el panorama para usuarios y emisores.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Regulación","Muestra cómo las grandes economías están construyendo reglas para los mercados cripto."]
  ],
  ar:[
    ["scams","FTC","FTC: ما تحتاج معرفته عن عمليات احتيال العملات المشفرة","نظرة عامة على أنواع الاحتيال الأكثر شيوعاً في مجال الكريبتو وكيفية حماية نفسك.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","الأمان","يساعد المبتدئين على التعرف على أنماط الاحتيال قبل خسارة الأموال."],
    ["scams","FTC","FTC: لا تدفع لأي شخص يتصل بك ويطلب كريبتو","لماذا طلبات الدفع بالكريبتو غير المرغوب فيها تكون دائماً احتيالاً تقريباً.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","الأمان","يوضح لماذا قد تكون طلبات الدفع بالكريبتو إشارة تحذير للاحتيال."],
    ["scams","Chainalysis","تقرير إيرادات احتيال الكريبتو","نظرة مستندة إلى البيانات حول مقدار الأموال التي يجمعها المحتالون والتكتيكات الأكثر فعالية.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","الدرس 5 — الدروس الواقعية","يُظهر الحجم الفعلي لنشاط الاحتيال حتى يفهم المبتدئون مستوى المخاطرة."],
    ["scams","TRM Labs","عمليات احتيال الحب و Pig Butchering","كيفية عمل عمليات الاحتيال التي تبني الثقة على المدى الطويل ولماذا هي فعالة جداً.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","الأمان","يشرح كيف تعمل عمليات الاحتيال الهندسية الاجتماعية على مدى أسابيع أو أشهر."],
    ["exchanges","Reuters","FTX تبدأ في دفع مستحقات العملاء — ماذا حدث","تغطية انهيار FTX ولماذا تهم مخاطر الحضانة ومنصات التداول للمستخدمين.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","الدرس 5 — الدروس الواقعية","يساعد المبتدئين على فهم مخاطر الحضانة من خلال حالة انهيار منصة تداول حقيقية."],
    ["exchanges","Reuters","Binance تدفع 4.3 مليار دولار في تسوية مع الولايات المتحدة","تغطية أكبر قضية امتثال للكريبتو وما كشفته عن عمليات منصات التداول.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","الدرس 5 — الدروس الواقعية","يُظهر كيف تواجه حتى المنصات الكبيرة إخفاقات تنظيمية وامتثالية."],
    ["exchanges","CoinDesk","ليس مفتاحك ليس عملتك — شرح","لماذا يختلف الاحتفاظ بالأصول في منصة تداول عن الاحتفاظ بها في محفظتك الخاصة.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","الدرس 2 — المحافظ","مفهوم الحضانة الأساسي الذي يجب على كل مبتدئ فهمه قبل استخدام أي منصة تداول."],
    ["exchanges","Chainalysis","تقارير اختراق منصات التداول 2022–2023","ملخص الاختراقات الرئيسية لمنصات التداول وما خسره المستخدمون عند تعرض المنصات للاختراق.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","الدرس 5 — الدروس الواقعية","يوضح أنماط الاختراق الفعلية ولماذا تنطوي حضانة منصات التداول على مخاطر."],
    ["stable","ECB","ECB: شرح مخاطر وهيكل العملات المستقرة","كيف يصف البنوك المركزية وصانعو السياسات مخاطر العملات المستقرة وآليات الدعم.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","الدرس 4 — أنواع التوكنات","يساعد في شرح كيفية نظر المنظمين إلى مخاطر العملات المستقرة وسياساتها."],
    ["stable","BIS","BIS: العملات المستقرة — حالات الاستخدام والمخاطر","تحليل بنك التسويات الدولية لنماذج العملات المستقرة والمخاطر المنهجية.","https://www.bis.org/publ/work905.htm","الدرس 4 — أنواع التوكنات","يُظهر كيف تفهم المؤسسات المالية الدولية آليات العملات المستقرة."],
    ["stable","Reuters","انهيار TerraUSD موضحاً","تغطية كيف محا انهيار UST/LUNA مليارات الدولارات وما الذي حدث بشكل خاطئ.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","الدرس 5 — الدروس الواقعية","حالة حقيقية تُظهر كيف يمكن لعملة مستقرة خوارزمية أن تفقد ربطها بشكل كارثي."],
    ["wallet","Ledger","Ledger Academy: ما هي عبارة البذرة؟","شرح رسمي لما تفعله عبارة البذرة ولماذا يجب حمايتها.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","الدرس 2 — المحافظ","مفهوم أساسي لأي شخص يقوم بإعداد محفظة — احمِ عبارة البذرة الخاصة بك."],
    ["wallet","Binance Academy","Hot Wallet مقابل Cold Wallet — Binance Academy","الفرق بين المحافظ المتصلة بالإنترنت والمحافظ غير المتصلة ومتى تستخدم كلاً منهما.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","الدرس 2 — المحافظ","يساعد المبتدئين على اختيار نوع المحفظة المناسب بناءً على احتياجاتهم الأمنية."],
    ["wallet","FTC","FTC: عمليات احتيال Crypto ATM ورموز QR","كيف يستخدم المحتالون أجهزة Crypto ATM ورموز QR لسرقة الأموال من الضحايا.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","الأمان","يُظهر نمطاً محدداً لعمليات احتيال الدفع في العالم الحقيقي يجب تجنبه."],
    ["wallet","Coinbase","كيفية التحقق من عنوان الكريبتو قبل الإرسال","دليل خطوة بخطوة للتحقق من العناوين قبل تأكيد أي تحويل.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","الدرس 3 — التحويلات","يدعم مباشرة تعلم خطوات التحويل الآمن المُعلَّمة في الدرس 3."],
    ["cases","Reuters","Mt. Gox: جدول زمني لأكبر اختراق للكريبتو في العالم","تاريخ إفلاس منصة Mt. Gox — حالة أساسية لفهم الحضانة.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","الدرس 5 — الدروس الواقعية","يُظهر أقدم انهيار لمنصة تداول وما يعنيه لأموال المستخدمين."],
    ["cases","TRM Labs","TRM: شرح الطب الشرعي On-chain","كيف يمكن تتبع معاملات البلوكتشين وما يعنيه ذلك للأمان.","https://www.trmlabs.com/post/what-is-blockchain-analytics","قاموس المصطلحات","يساعد في شرح كيفية تحليل وتتبع بيانات البلوكتشين العامة."],
    ["cases","Chainalysis","كيف يغسل القراصنة الكريبتو المسروق","الأنماط المستخدمة لنقل الأموال المسروقة وإخفائها وكيف يتم القبض عليهم.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","الدرس 5 — الدروس الواقعية","يُظهر ما يحدث بعد الاختراق ولماذا يمكن تتبع البلوكتشين."],
    ["basics","Binance Academy","ما هو البلوكتشين؟ — Binance Academy","شرح على مستوى المبتدئين لكيفية تخزين البلوكتشين للبيانات والتحقق منها.","https://academy.binance.com/en/articles/what-is-blockchain-technology","الدرس 1 — أساسيات الكريبتو","الأساس المفاهيمي الجوهري المطلوب قبل أي درس آخر."],
    ["basics","CoinDesk","ما هو الكريبتو؟ دليل المبتدئين","مقدمة بلغة بسيطة لما هي العملات المشفرة وكيف تعمل.","https://www.coindesk.com/learn/what-is-cryptocurrency/","الدرس 1 — أساسيات الكريبتو","أفضل نقطة انطلاق للمبتدئين الكاملين قبل قراءة الدروس."],
    ["basics","Etherscan","كيفية قراءة معاملة Etherscan","الدليل الرسمي لفهم معنى كل حقل في مستكشف البلوكتشين.","https://info.etherscan.com/understanding-an-ethereum-transaction/","قاموس المصطلحات","يدعم مفاهيم قاموس المصطلحات: TxID العنوان رسوم الغاز رقم الكتلة."],
    ["basics","Binance Academy","ما هي رسوم الغاز؟","شرح واضح لسبب وجود رسوم الشبكة وكيف تتغير حسب الطلب.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","قاموس المصطلحات","يساعد المبتدئين على فهم رسوم الغاز قبل إجراء أول تحويل لهم."],
    ["defi","Binance Academy","ما هو DeFi؟ — Binance Academy","مقدمة للتمويل اللامركزي وما يحل محله والمخاطر المتضمنة.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","الدرس 4 — أنواع التوكنات","أساس لفهم أدوار توكنات DeFi المُغطَّاة في الدرس 4."],
    ["defi","CoinDesk","ما هو العقد الذكي؟","شرح بسيط لما تفعله العقود الذكية ولماذا يمكن أن تنطوي على مخاطر.","https://www.coindesk.com/learn/what-is-a-smart-contract/","قاموس المصطلحات","يدعم تعريف قاموس المصطلحات ومفهوم العقد الذكي في DeFi."],
    ["defi","Chainalysis","اختراقات DeFi واستغلالات البروتوكول 2023","كيف يتم استغلال بروتوكولات DeFi وما الذي يجعل العقود الذكية عرضة للاختراق.","https://www.chainalysis.com/blog/defi-hacks-2023/","الدرس 5 — الدروس الواقعية","يُظهر المخاطر المحددة التي تأتي مع DeFi مقابل منصات التداول المركزية."],
    ["reg","SEC","SEC: نشرة المستثمرين حول أوراق مالية أصول الكريبتو","إرشادات رسمية من SEC الأمريكي حول أصول الكريبتو التي قد تكون أوراقاً مالية.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","التنظيم","يساعد المستخدمين على فهم كيفية تصنيف المنظمين الأمريكيين لأصول الكريبتو."],
    ["reg","FSB","FSB: الإطار التنظيمي العالمي لأصول الكريبتو","نظرة عامة من مجلس الاستقرار المالي حول كيفية تعامل المنظمين الدوليين مع الكريبتو.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","التنظيم","يُظهر اتجاه السياسة العالمية حتى يفهم المبتدئون دور التنظيم."],
    ["reg","ECB","ECB: نظرة عامة على لائحة MiCA — ماذا تعني","كيف تُغيِّر لائحة Markets in Crypto-Assets الأوروبية المشهد للمستخدمين والمُصدِرين.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","التنظيم","يُظهر كيف تبني الاقتصادات الكبرى قواعد حول أسواق الكريبتو."]
  ],
  vi:[
    ["scams","FTC","FTC: Những gì cần biết về lừa đảo tiền mã hóa","Tổng quan về các loại lừa đảo crypto phổ biến nhất và cách tự bảo vệ.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","An toàn","Giúp người mới nhận ra các mô hình lừa đảo trước khi mất tiền."],
    ["scams","FTC","FTC: Đừng trả tiền cho ai liên hệ và yêu cầu crypto","Tại sao các liên hệ không được yêu cầu đòi thanh toán bằng crypto gần như luôn là lừa đảo.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","An toàn","Cho thấy tại sao các yêu cầu thanh toán crypto có thể là tín hiệu cảnh báo lừa đảo."],
    ["scams","Chainalysis","Báo cáo doanh thu lừa đảo crypto","Cái nhìn dựa trên dữ liệu về số tiền kẻ lừa đảo thu được và chiến thuật nào hiệu quả nhất.","https://www.chainalysis.com/blog/2023-crypto-scam-revenue/","Bài học 5 — Bài học thực tế","Cho thấy quy mô thực sự của hoạt động lừa đảo để người mới hiểu mức độ rủi ro."],
    ["scams","TRM Labs","Lừa đảo tình cảm và Pig Butchering","Cách thức hoạt động của các vụ lừa đảo xây dựng niềm tin dài hạn và lý do chúng hiệu quả.","https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months","An toàn","Giải thích cách các vụ lừa đảo kỹ thuật xã hội hoạt động trong nhiều tuần hoặc nhiều tháng."],
    ["exchanges","Reuters","FTX bắt đầu thanh toán cho khách hàng — chuyện gì đã xảy ra","Đưa tin về sự sụp đổ của FTX và lý do tại sao rủi ro lưu ký và sàn giao dịch quan trọng với người dùng.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Bài học 5 — Bài học thực tế","Giúp người mới hiểu rủi ro lưu ký qua vụ sụp đổ sàn giao dịch thực tế."],
    ["exchanges","Reuters","Binance trả 4,3 tỷ USD trong thỏa thuận với Mỹ","Đưa tin về vụ tuân thủ crypto lớn nhất và những gì nó tiết lộ về hoạt động của sàn giao dịch.","https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/","Bài học 5 — Bài học thực tế","Cho thấy ngay cả các sàn lớn cũng đối mặt với thất bại về quy định và tuân thủ."],
    ["exchanges","CoinDesk","Không phải khóa của bạn không phải coin của bạn — giải thích","Tại sao giữ tài sản trên sàn giao dịch khác với giữ trong ví của chính mình.","https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/","Bài học 2 — Ví","Khái niệm lưu ký cốt lõi mà mọi người mới cần hiểu trước khi sử dụng bất kỳ sàn nào."],
    ["exchanges","Chainalysis","Báo cáo tấn công sàn giao dịch 2022–2023","Tóm tắt các vụ tấn công sàn giao dịch lớn và những gì người dùng mất khi nền tảng bị xâm phạm.","https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/","Bài học 5 — Bài học thực tế","Minh họa các mô hình tấn công thực tế và lý do tại sao lưu ký trên sàn giao dịch có rủi ro."],
    ["stable","ECB","ECB: Giải thích rủi ro và cấu trúc Stablecoin","Cách các ngân hàng trung ương và nhà hoạch định chính sách mô tả rủi ro stablecoin và cơ chế hỗ trợ.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Bài học 4 — Loại Token","Giúp giải thích cách các cơ quan quản lý nhìn nhận rủi ro và chính sách stablecoin."],
    ["stable","BIS","BIS: Stablecoin — Trường hợp sử dụng và rủi ro","Phân tích của Bank for International Settlements về các mô hình stablecoin và rủi ro hệ thống.","https://www.bis.org/publ/work905.htm","Bài học 4 — Loại Token","Cho thấy cách các tổ chức tài chính quốc tế hiểu cơ chế stablecoin."],
    ["stable","Reuters","Giải thích sự sụp đổ của TerraUSD","Đưa tin về cách sự sụp đổ của UST/LUNA xóa sổ hàng tỷ đô la và điều gì đã sai.","https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/","Bài học 5 — Bài học thực tế","Trường hợp thực tế cho thấy cách một stablecoin thuật toán có thể mất chốt theo cách thảm họa."],
    ["wallet","Ledger","Ledger Academy: Seed Phrase là gì?","Giải thích chính thức về seed phrase làm gì và tại sao phải bảo vệ nó.","https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase","Bài học 2 — Ví","Khái niệm cốt lõi cho bất kỳ ai thiết lập ví — bảo vệ seed phrase của bạn."],
    ["wallet","Binance Academy","Hot Wallet vs Cold Wallet — Binance Academy","Sự khác biệt giữa ví kết nối internet và ngoại tuyến và khi nào sử dụng từng loại.","https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference","Bài học 2 — Ví","Giúp người mới chọn đúng loại ví dựa trên nhu cầu bảo mật của họ."],
    ["wallet","FTC","FTC: Lừa đảo Crypto ATM và mã QR","Cách kẻ lừa đảo sử dụng Crypto ATM và mã QR để đánh cắp tiền từ nạn nhân.","https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam","An toàn","Cho thấy một mô hình lừa đảo thanh toán cụ thể trong thực tế cần tránh."],
    ["wallet","Coinbase","Cách xác minh địa chỉ crypto trước khi gửi","Hướng dẫn từng bước để kiểm tra địa chỉ trước khi xác nhận bất kỳ giao dịch chuyển khoản nào.","https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto","Bài học 3 — Chuyển khoản","Hỗ trợ trực tiếp việc học các bước chuyển khoản an toàn được dạy trong Bài học 3."],
    ["cases","Reuters","Mt. Gox: Dòng thời gian vụ tấn công crypto lớn nhất thế giới","Lịch sử phá sản của sàn Mt. Gox — vụ việc nền tảng để hiểu về lưu ký.","https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/","Bài học 5 — Bài học thực tế","Cho thấy sự sụp đổ sàn giao dịch lâu nhất và ý nghĩa của nó đối với tiền của người dùng."],
    ["cases","TRM Labs","TRM: Giải thích pháp y On-chain","Cách các giao dịch blockchain có thể được truy vết và điều đó có nghĩa gì cho bảo mật.","https://www.trmlabs.com/post/what-is-blockchain-analytics","Từ điển thuật ngữ","Giúp giải thích cách dữ liệu blockchain công khai được phân tích và theo dõi."],
    ["cases","Chainalysis","Cách tin tặc rửa crypto bị đánh cắp","Các mô hình được sử dụng để di chuyển và che giấu tiền bị đánh cắp và cách chúng bị bắt.","https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/","Bài học 5 — Bài học thực tế","Cho thấy điều gì xảy ra sau một vụ tấn công và tại sao blockchain có thể truy vết."],
    ["basics","Binance Academy","Blockchain là gì? — Binance Academy","Giải thích cấp độ người mới bắt đầu về cách blockchain lưu trữ và xác minh dữ liệu.","https://academy.binance.com/en/articles/what-is-blockchain-technology","Bài học 1 — Kiến thức cơ bản","Nền tảng khái niệm cốt lõi cần có trước bất kỳ bài học nào khác."],
    ["basics","CoinDesk","Crypto là gì? Hướng dẫn cho người mới bắt đầu","Giới thiệu bằng ngôn ngữ đơn giản về tiền mã hóa là gì và hoạt động như thế nào.","https://www.coindesk.com/learn/what-is-cryptocurrency/","Bài học 1 — Kiến thức cơ bản","Điểm khởi đầu tốt nhất cho người mới hoàn toàn trước khi đọc các bài học."],
    ["basics","Etherscan","Cách đọc giao dịch Etherscan","Hướng dẫn chính thức để hiểu ý nghĩa của từng trường trong blockchain explorer.","https://info.etherscan.com/understanding-an-ethereum-transaction/","Từ điển thuật ngữ","Hỗ trợ các khái niệm trong Từ điển: TxID địa chỉ phí gas số khối."],
    ["basics","Binance Academy","Phí Gas là gì?","Giải thích rõ ràng về lý do tại sao phí mạng tồn tại và biến đổi theo nhu cầu.","https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto","Từ điển thuật ngữ","Giúp người mới hiểu phí gas trước khi thực hiện giao dịch đầu tiên."],
    ["defi","Binance Academy","DeFi là gì? — Binance Academy","Giới thiệu về tài chính phi tập trung những gì nó thay thế và rủi ro liên quan.","https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi","Bài học 4 — Loại Token","Nền tảng để hiểu các vai trò token DeFi được đề cập trong Bài học 4."],
    ["defi","CoinDesk","Smart Contract là gì?","Giải thích đơn giản về những gì smart contract làm và tại sao chúng có thể có rủi ro.","https://www.coindesk.com/learn/what-is-a-smart-contract/","Từ điển thuật ngữ","Hỗ trợ định nghĩa trong Từ điển và khái niệm smart contract trong DeFi."],
    ["defi","Chainalysis","Tấn công DeFi và khai thác giao thức 2023","Cách các giao thức DeFi bị khai thác và điều gì khiến smart contract dễ bị tổn thương.","https://www.chainalysis.com/blog/defi-hacks-2023/","Bài học 5 — Bài học thực tế","Cho thấy rủi ro cụ thể đến với DeFi so với sàn giao dịch tập trung."],
    ["reg","SEC","SEC: Bản tin nhà đầu tư về chứng khoán tài sản crypto","Hướng dẫn chính thức của US SEC về những tài sản crypto nào có thể được phân loại là chứng khoán.","https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings","Quy định","Giúp người dùng hiểu cách cơ quan quản lý Mỹ phân loại tài sản crypto."],
    ["reg","FSB","FSB: Khung quy định toàn cầu cho tài sản crypto","Tổng quan của Financial Stability Board về cách các cơ quan quản lý quốc tế tiếp cận crypto.","https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/","Quy định","Cho thấy hướng chính sách toàn cầu để người mới hiểu vai trò của quy định."],
    ["reg","ECB","ECB: Tổng quan quy định MiCA — ý nghĩa là gì","Cách quy định Markets in Crypto-Assets của EU thay đổi bối cảnh cho người dùng và nhà phát hành.","https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html","Quy định","Cho thấy cách các nền kinh tế lớn đang xây dựng quy tắc xung quanh thị trường crypto."]
  ]
};
function getGlossaryItems(){
  return glossaryOverrides[currentLang] || glossaryData[currentLang] || glossaryData.ko || glossaryData.en;
}
function getSourceItems(){
  return sourceOverrides[currentLang] || sourceLibrary[currentLang] || sourceLibrary.en;
}
function getSourceCats(){
  return (sourceLibraryCats[currentLang] || sourceLibraryCats.en);
}
function getTotalLessons(){
  return (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en.length) ? lessons.en.length : 5;
}
function renderHome(){
  const hc = homeContent[currentLang] || homeContent.en;
  return `
    <div class="home-hero">
      <h1 class="home-title">${t('home.title')}</h1>
      <p class="home-desc">${t('home.desc')}</p>
      <div class="home-visitor-block" id="homeVisitorBlock" aria-live="polite">
        <div class="search-visitor-pill">
          <div class="search-visitor-label" id="visitorTodayLabel">${t('visitor.today')}</div>
          <div class="search-visitor-value is-loading" id="visitorTodayValue">--</div>
        </div>
        <div class="search-visitor-pill">
          <div class="search-visitor-label" id="visitorTotalLabel">${t('visitor.total')}</div>
          <div class="search-visitor-value is-loading" id="visitorTotalValue">--</div>
        </div>
      </div>
      <div class="home-grid">
        ${[0,1,2,3,4].map(i=>`<div class="home-card" onclick="showLesson(${i})"><div class="home-card-num">${i+1}</div><div class="home-card-title">${t('nav.l'+(i+1))}</div><div class="home-card-desc">${t('nav.l'+(i+1)+'sub')}</div><div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">${t('home.openLesson')} →</div></div>`).join('')}
      </div>
      <div class="home-grid" style="margin-top:14px;">
        <div class="home-card" onclick="showPage('start')">
          <div class="home-card-num">S</div>
          <div class="home-card-title">${t('home.startCardTitle')}</div>
          <div class="home-card-desc">${t('home.startCardDesc')}</div>
          <div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">${t('home.openStart')} →</div>
        </div>
        <div class="home-card" onclick="showPage('faq')">
          <div class="home-card-num">F</div>
          <div class="home-card-title">${t('home.faqCardTitle')}</div>
          <div class="home-card-desc">${t('home.faqCardDesc')}</div>
          <div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">${t('home.openFaq')} →</div>
        </div>
        <div class="home-card" onclick="showPage('safety')">
          <div class="home-card-num">!</div>
          <div class="home-card-title">${t('home.safetyCardTitle')}</div>
          <div class="home-card-desc">${t('home.safetyCardDesc')}</div>
          <div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">${t('home.openSafety')} →</div>
        </div>
      </div>
      <div class="home-mini-grid">
        <div class="home-panel-card">
          <h3>${t('home.start')}</h3>
          <p>${hc.guide}</p>
        </div>
        <div class="home-panel-card">
          <h3>${t('nav.glossary')}</h3>
          <p>${t('glossary.desc')}</p>
        </div>
      </div>
    </div>`;
}
const PAGE_HERO_UI = {
  en:{
    typeLesson:'Lesson',
    typeChecklist:'Checklist',
    typeSafety:'Safety',
    typeGlossary:'Glossary',
    typeFAQ:'FAQ',
    typeArchive:'Archive',
    typeUpdates:'Updates',
    typeGuide:'Start',
    beginnerFriendly:'Beginner-friendly',
    stepByStep:'Step by Step',
    quickReview:'Quick Review',
    worthSaving:'Worth Saving',
    goDeeper:'Go Deeper',
    revisitedOften:'Revisited Often',
    checklistLinked:'Checklist Linked',
    safetyEssential:'Safety Essential',
    beforeFirstBuy:'Before Your First Buy',
    quickAction:'Quick Action',
    freePdf:'Free PDF',
    beforeSend:'Before You Send Checklist',
    seedPhrase:'Seed Phrase Safety Check',
    fakeWebsite:'Quick Fake Website Check'
  },
  ko:{
    typeLesson:'레슨',
    typeChecklist:'체크리스트',
    typeSafety:'보안',
    typeGlossary:'용어사전',
    typeFAQ:'FAQ',
    typeArchive:'자료 라이브러리',
    typeUpdates:'업데이트',
    typeGuide:'시작',
    beginnerFriendly:'초보자용',
    stepByStep:'단계별',
    quickReview:'빠른 복습',
    worthSaving:'저장용',
    goDeeper:'더 깊이 보기',
    revisitedOften:'자주 다시 봄',
    checklistLinked:'체크리스트 연결',
    safetyEssential:'보안 필수',
    beforeFirstBuy:'첫 구매 전',
    quickAction:'바로 확인',
    freePdf:'무료 PDF',
    beforeSend:'전송 전 체크리스트',
    seedPhrase:'시드 문구 보안 체크',
    fakeWebsite:'가짜 사이트 빠른 확인'
  },
  th:{
    typeLesson:'บทเรียน',
    typeChecklist:'เช็กลิสต์',
    typeSafety:'ความปลอดภัย',
    typeGlossary:'อภิธานศัพท์',
    typeFAQ:'FAQ',
    typeArchive:'คลังข้อมูล',
    typeUpdates:'อัปเดต',
    typeGuide:'เริ่มต้น',
    beginnerFriendly:'เหมาะกับผู้เริ่มต้น',
    stepByStep:'ทีละขั้น',
    quickReview:'ทบทวนเร็ว',
    worthSaving:'ควรบันทึก',
    goDeeper:'ดูลึกขึ้น',
    revisitedOften:'กลับมาดูบ่อย',
    checklistLinked:'เชื่อมกับเช็กลิสต์',
    safetyEssential:'เรื่องสำคัญด้านความปลอดภัย',
    beforeFirstBuy:'ก่อนซื้อครั้งแรก',
    quickAction:'เปิดดูได้ทันที',
    freePdf:'PDF ฟรี',
    beforeSend:'เช็กลิสต์ก่อนโอน',
    seedPhrase:'เช็กความปลอดภัย Seed Phrase',
    fakeWebsite:'เช็กเว็บปลอมเร็ว'
  },
  id:{
    typeLesson:'Pelajaran',
    typeChecklist:'Checklist',
    typeSafety:'Keamanan',
    typeGlossary:'Glosarium',
    typeFAQ:'FAQ',
    typeArchive:'Arsip',
    typeUpdates:'Update',
    typeGuide:'Mulai',
    beginnerFriendly:'Ramah pemula',
    stepByStep:'Langkah demi langkah',
    quickReview:'Tinjauan cepat',
    worthSaving:'Layak disimpan',
    goDeeper:'Pelajari lebih dalam',
    revisitedOften:'Sering ditinjau ulang',
    checklistLinked:'Terhubung ke checklist',
    safetyEssential:'Keamanan penting',
    beforeFirstBuy:'Sebelum pembelian pertama',
    quickAction:'Lihat sekarang',
    freePdf:'PDF gratis',
    beforeSend:'Checklist sebelum kirim',
    seedPhrase:'Cek keamanan seed phrase',
    fakeWebsite:'Cek cepat situs palsu'
  },
  pt:{
    typeLesson:'Lição',
    typeChecklist:'Checklist',
    typeSafety:'Segurança',
    typeGlossary:'Glossário',
    typeFAQ:'FAQ',
    typeArchive:'Biblioteca',
    typeUpdates:'Atualizações',
    typeGuide:'Início',
    beginnerFriendly:'Para iniciantes',
    stepByStep:'Passo a passo',
    quickReview:'Revisão rápida',
    worthSaving:'Vale salvar',
    goDeeper:'Aprofundar',
    revisitedOften:'Revisado com frequência',
    checklistLinked:'Checklist ligado',
    safetyEssential:'Segurança essencial',
    beforeFirstBuy:'Antes da primeira compra',
    quickAction:'Ver agora',
    freePdf:'PDF grátis',
    beforeSend:'Checklist antes de enviar',
    seedPhrase:'Checklist de segurança da seed phrase',
    fakeWebsite:'Verificação rápida de site falso'
  },
  tr:{
    typeLesson:'Ders',
    typeChecklist:'Checklist',
    typeSafety:'Guvenlik',
    typeGlossary:'Sozluk',
    typeFAQ:'FAQ',
    typeArchive:'Arsiv',
    typeUpdates:'Guncellemeler',
    typeGuide:'Baslangic',
    beginnerFriendly:'Baslangic icin uygun',
    stepByStep:'Adim adim',
    quickReview:'Hizli gozden gecirme',
    worthSaving:'Kaydetmeye deger',
    goDeeper:'Derine in',
    revisitedOften:'Sik tekrar bakilir',
    checklistLinked:'Checklist baglantili',
    safetyEssential:'Guvenlik icin onemli',
    beforeFirstBuy:'Ilk alimdan once',
    quickAction:'Simdi bak',
    freePdf:'Ucretsiz PDF',
    beforeSend:'Gondermeden once checklist',
    seedPhrase:'Seed phrase guvenlik kontrolu',
    fakeWebsite:'Sahte site hizli kontrol'
  },
  es:{
    typeLesson:'Lección',
    typeChecklist:'Checklist',
    typeSafety:'Seguridad',
    typeGlossary:'Glosario',
    typeFAQ:'FAQ',
    typeArchive:'Archivo',
    typeUpdates:'Actualizaciones',
    typeGuide:'Inicio',
    beginnerFriendly:'Apto para principiantes',
    stepByStep:'Paso a paso',
    quickReview:'Revisión rápida',
    worthSaving:'Vale guardarlo',
    goDeeper:'Profundizar',
    revisitedOften:'Se revisa a menudo',
    checklistLinked:'Con checklist relacionado',
    safetyEssential:'Seguridad esencial',
    beforeFirstBuy:'Antes de la primera compra',
    quickAction:'Ver ahora',
    freePdf:'PDF gratis',
    beforeSend:'Checklist antes de enviar',
    seedPhrase:'Chequeo de seguridad de la seed phrase',
    fakeWebsite:'Revisión rápida de sitio falso'
  },
  ar:{
    typeLesson:'الدرس',
    typeChecklist:'قائمة التحقق',
    typeSafety:'الأمان',
    typeGlossary:'المصطلحات',
    typeFAQ:'الأسئلة الشائعة',
    typeArchive:'الأرشيف',
    typeUpdates:'التحديثات',
    typeGuide:'البداية',
    beginnerFriendly:'مناسب للمبتدئين',
    stepByStep:'خطوة بخطوة',
    quickReview:'مراجعة سريعة',
    worthSaving:'يستحق الحفظ',
    goDeeper:'تعمق أكثر',
    revisitedOften:'يعود إليه كثيراً',
    checklistLinked:'مرتبط بقائمة تحقق',
    safetyEssential:'أساسي للأمان',
    beforeFirstBuy:'قبل أول شراء',
    quickAction:'إجراء سريع',
    freePdf:'PDF مجاني',
    beforeSend:'قائمة التحقق قبل الإرسال',
    seedPhrase:'فحص أمان العبارة الأولية',
    fakeWebsite:'فحص سريع للموقع المزيف'
  },
  vi:{
    typeLesson:'Bài học',
    typeChecklist:'Checklist',
    typeSafety:'An toàn',
    typeGlossary:'Thuật ngữ',
    typeFAQ:'FAQ',
    typeArchive:'Kho tài liệu',
    typeUpdates:'Cập nhật',
    typeGuide:'Bắt đầu',
    beginnerFriendly:'Phù hợp cho người mới',
    stepByStep:'Từng bước',
    quickReview:'Xem lại nhanh',
    worthSaving:'Nên lưu lại',
    goDeeper:'Xem sâu hơn',
    revisitedOften:'Hay xem lại',
    checklistLinked:'Có checklist liên quan',
    safetyEssential:'Thiết yếu về an toàn',
    beforeFirstBuy:'Trước lần mua đầu tiên',
    quickAction:'Xem ngay',
    freePdf:'PDF miễn phí',
    beforeSend:'Checklist trước khi gửi',
    seedPhrase:'Kiểm tra an toàn seed phrase',
    fakeWebsite:'Kiểm tra web giả nhanh'
  },
  ha:{
    typeLesson:'Darasi',
    typeChecklist:'Checklist',
    typeSafety:'Tsaro',
    typeGlossary:'Kamus',
    typeFAQ:'FAQ',
    typeArchive:'Laburaren Bayanai',
    typeUpdates:'Sabuntawa',
    typeGuide:'Fara',
    beginnerFriendly:'Ya dace da masu farawa',
    stepByStep:'Mataki zuwa mataki',
    quickReview:'Bita cikin sauri',
    worthSaving:'Ya cancanci ajiya',
    goDeeper:'Kara zurfafa',
    revisitedOften:'Ana yawan komawa',
    checklistLinked:'An hada da checklist',
    safetyEssential:'Muhimmin tsaro',
    beforeFirstBuy:'Kafin sayen farko',
    quickAction:'Duba yanzu',
    freePdf:'PDF na kyauta',
    beforeSend:'Checklist kafin turawa',
    seedPhrase:'Duba tsaron seed phrase',
    fakeWebsite:'Duba shafin karya da sauri'
  }
};
PAGE_HERO_UI.br = PAGE_HERO_UI.pt;
const PAGE_HERO_LESSON_SLUGS = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
const PAGE_HERO_FREE_PDFS = {
  en:'pdf/crypto-safety-guide-en.pdf',
  ko:'pdf/crypto-safety-guide-ko.pdf',
  th:'pdf/crypto-safety-guide-th.pdf',
  id:'pdf/crypto-safety-guide-id.pdf',
  pt:'pdf/crypto-safety-guide-pt.pdf',
  br:'pdf/crypto-safety-guide-br.pdf',
  tr:'pdf/crypto-safety-guide-tr.pdf',
  es:'pdf/crypto-safety-guide-es.pdf',
  ar:'pdf/crypto-safety-guide-ar.pdf',
  vi:'pdf/crypto-safety-guide-vi.pdf',
  ha:'pdf/crypto-safety-guide-ha.pdf'
};

function normalizePageHeroLang(value){
  const raw = String(value || 'en').toLowerCase().trim();
  if(!raw) return 'en';
  if(raw === 'br' || raw.indexOf('pt-br') === 0) return 'br';
  if(raw.indexOf('pt') === 0) return 'pt';
  if(raw.indexOf('ko') === 0) return 'ko';
  if(raw.indexOf('th') === 0) return 'th';
  if(raw.indexOf('id') === 0) return 'id';
  if(raw.indexOf('tr') === 0) return 'tr';
  if(raw.indexOf('es') === 0) return 'es';
  if(raw.indexOf('ar') === 0) return 'ar';
  if(raw.indexOf('vi') === 0) return 'vi';
  if(raw.indexOf('ha') === 0) return 'ha';
  return 'en';
}
function currentPageHeroLang(){
  if(typeof currentLang === 'string' && currentLang) return normalizePageHeroLang(currentLang);
  if(typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) return normalizePageHeroLang(document.documentElement.lang);
  return 'en';
}
function currentPageHeroRouteLang(){
  if(typeof currentLang === 'string' && currentLang) return String(currentLang).toLowerCase();
  if(typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) return String(document.documentElement.lang).toLowerCase();
  return currentPageHeroLang();
}
function pageHeroText(key){
  const lang = currentPageHeroLang();
  const pack = PAGE_HERO_UI[lang] || PAGE_HERO_UI.en;
  return pack[key] || PAGE_HERO_UI.en[key] || key;
}
function escapePageHeroHtml(value){
  return String(value == null ? '' : value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function getPageHeroBasePrefix(){
  if(typeof window !== 'undefined' && typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__) return window.__CA_BASE_PREFIX__;
  if(typeof document !== 'undefined' && document.body && document.body.dataset && document.body.dataset.basePrefix) return document.body.dataset.basePrefix;
  return './';
}
function toPageHeroIndexRoute(path){
  if(typeof window !== 'undefined' && typeof window.__CA_TO_INDEX_ROUTE === 'function') return window.__CA_TO_INDEX_ROUTE(path);
  const value = String(path || '');
  if(!value) return 'index.html';
  if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
  return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
}
function withPageHeroLang(route){
  const lang = currentPageHeroRouteLang();
  if(!lang) return route;
  return route + (route.indexOf('?') === -1 ? '?lang=' : '&lang=') + encodeURIComponent(lang);
}
function getPageHeroPageRoute(page){
  const base = getPageHeroBasePrefix();
  if(page === 'home') return withPageHeroLang(toPageHeroIndexRoute(base));
  return withPageHeroLang(toPageHeroIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g,'') + '/'));
}
function getPageHeroLessonRoute(index){
  const slug = PAGE_HERO_LESSON_SLUGS[index] || PAGE_HERO_LESSON_SLUGS[0];
  return withPageHeroLang(toPageHeroIndexRoute(getPageHeroBasePrefix() + 'lesson/' + slug + '/'));
}
function getPageHeroChecklistRoute(slug){
  return withPageHeroLang(toPageHeroIndexRoute(getPageHeroBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g,'') + '/'));
}
function getPageHeroFreePdfRoute(){
  const rawLang = currentPageHeroRouteLang();
  const lang = currentPageHeroLang();
  const file = PAGE_HERO_FREE_PDFS[rawLang] || PAGE_HERO_FREE_PDFS[lang] || PAGE_HERO_FREE_PDFS.en;
  return getPageHeroBasePrefix() + file;
}
function getPageHeroIcon(iconKey){
  switch(iconKey){
    case 'glossary':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2V19a1 1 0 0 1-1.6.8L13 17.5l-3.4 2.3A1 1 0 0 1 8 19V5.5"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h5"/></svg>';
    case 'wallet':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 15.5v-7Z"/><path d="M15 12h5"/><circle cx="15.5" cy="12" r=".9"/></svg>';
    case 'transfer':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h11"/><path d="m13 5 4 3-4 3"/><path d="M18 16H7"/><path d="m11 13-4 3 4 3"/></svg>';
    case 'roles':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="7" height="6" rx="1.5"/><rect x="13" y="5" width="7" height="6" rx="1.5"/><rect x="8.5" y="13" width="7" height="6" rx="1.5"/></svg>';
    case 'real':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18c2.5-5.5 6-8.5 10.5-9.2"/><path d="m14 6 3.5 2.8-3.5 2.7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="9" r="2"/></svg>';
    case 'buy':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="4.5"/><path d="M15.5 8.5h4.5v7h-4.5"/><path d="m16.5 12 1.6 1.6L21 10.7"/></svg>';
    case 'safety':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.4c0 4.1-2.6 7.9-7 9.1-4.4-1.2-7-5-7-9.1V6l7-2.5Z"/><path d="m9.2 12.2 1.9 1.9 3.7-4.1"/></svg>';
    case 'network':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M6 8h11"/><path d="m13 5 4 3-4 3"/><path d="M18 16H7"/><path d="m11 13-4 3 4 3"/></svg>';
    case 'stablecoin':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M9 12h6"/><path d="M12 8v8"/><path d="M7 17c2.8-1.4 7.2-1.4 10 0"/></svg>';
    case 'defi':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14"/><path d="M7 8v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M9 13h6"/></svg>';
    case 'project':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v13H4z"/><path d="m7 9 2 2 4-4"/><path d="M7 15h10"/><path d="M14 10h3"/></svg>';
    case 'bridge':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h5a5 5 0 0 1 0 10H7"/><path d="M17 7h-5a5 5 0 0 0 0 10h5"/><path d="M8 12h8"/></svg>';
    case 'verify':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2V19a1 1 0 0 1-1.6.8L13 17.5l-3.4 2.3A1 1 0 0 1 8 19V5.5"/><path d="m9 12 2 2 4-5"/><path d="M8 7h8"/></svg>';
    case 'faq':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.8-1.7 1.3-1.7 2.7"/><circle cx="12" cy="17.2" r=".8"/><circle cx="12" cy="12" r="9"/></svg>';
    case 'archive':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h4v14H5z"/><path d="M10 5h4v14h-4z"/><path d="M15 7h4v12h-4z"/></svg>';
    case 'updates':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 4 5.5 6"/><path d="M17 4 18.5 6"/></svg>';
    case 'checklist':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h10"/><path d="M9 12h10"/><path d="M9 18h10"/><path d="m4.5 6 1.5 1.5L8.5 5"/><path d="m4.5 12 1.5 1.5L8.5 11"/><path d="m4.5 18 1.5 1.5L8.5 17"/></svg>';
    default:
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16"/><path d="M4 12h16"/></svg>';
  }
}
function buildPageHeroAction(action, index){
  if(!action || !action.label || !action.href) return '';
  const classes = 'nav-action' + (index === 0 ? ' primary' : '');
  const attrs = action.external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return '<a class="' + classes + '" href="' + escapePageHeroHtml(action.href) + '"' + attrs + '>' + escapePageHeroHtml(action.label) + '</a>';
}
function renderUnifiedPageHero(config){
  if(!config) return '';
  const tags = (config.tags || []).filter(Boolean);
  const actions = (config.actions || []).filter(function(action){ return action && action.href && action.label; });
  const eyebrow = config.eyebrow ? '<span class="page-hero-mini">' + escapePageHeroHtml(config.eyebrow) + '</span>' : '';
  const heroClass = 'lc-header page-hero-shell' + (config.compact ? ' page-hero-compact' : '') + (config.extraClass ? ' ' + escapePageHeroHtml(config.extraClass) : '');
  return ''
    + '<div class="' + heroClass + '" data-page-hero-tone="' + escapePageHeroHtml(config.tone || 'lesson') + '">'
    +   '<div class="page-hero-ambient" aria-hidden="true"></div>'
    +   '<div class="page-hero-grid">'
    +     '<div class="page-hero-heading">'
    +       '<span class="home-card-icon page-hero-icon" aria-hidden="true">' + getPageHeroIcon(config.iconKey || 'glossary') + '</span>'
    +       '<div class="page-hero-copy">'
    +         '<div class="page-hero-kicker"><span class="home-card-badge">' + escapePageHeroHtml(config.badge || '') + '</span>' + eyebrow + '</div>'
    +         '<h1 class="lc-title">' + escapePageHeroHtml(config.title || '') + '</h1>'
    +         '<p class="lc-intro">' + escapePageHeroHtml(config.intro || '') + '</p>'
    +       '</div>'
    +     '</div>'
    +     (tags.length ? '<div class="page-hero-status-row">' + tags.map(function(tag){ return '<span class="home-card-status-chip">' + escapePageHeroHtml(tag) + '</span>'; }).join('') + '</div>' : '')
    +     (actions.length ? '<div class="page-hero-actions">' + actions.map(buildPageHeroAction).join('') + '</div>' : '')
    +   '</div>'
    + '</div>';
}
function getStaticPageHeroConfig(kind, title, intro){
  switch(kind){
    case 'glossary':
      return { tone:'glossary', iconKey:'glossary', badge:pageHeroText('typeGlossary'), title:title, intro:intro, tags:[pageHeroText('beginnerFriendly'), pageHeroText('quickReview')], actions:[{ label:t('nav.l1') || 'Blockchain', href:getPageHeroLessonRoute(0) }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }] };
    case 'sources':
      return { tone:'archive', iconKey:'archive', badge:pageHeroText('typeArchive'), title:title, intro:intro, tags:[pageHeroText('worthSaving'), pageHeroText('goDeeper')], actions:[{ label:pageHeroText('quickReview'), href:'#sources-tier-quick' }, { label:pageHeroText('goDeeper'), href:'#sources-tier-deep' }] };
    case 'faq':
      return { tone:'faq', iconKey:'faq', badge:pageHeroText('typeFAQ'), title:title, intro:intro, tags:[pageHeroText('beginnerFriendly'), pageHeroText('revisitedOften')], actions:[{ label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }] };
    case 'safety':
      return { tone:'safety', iconKey:'safety', badge:pageHeroText('typeSafety'), title:title, intro:intro, tags:[pageHeroText('safetyEssential'), pageHeroText('checklistLinked')], actions:[{ label:pageHeroText('seedPhrase'), href:getPageHeroChecklistRoute('seed-phrase-safety') }, { label:pageHeroText('fakeWebsite'), href:getPageHeroChecklistRoute('fake-website-check') }] };
    case 'updates':
      return { tone:'updates', iconKey:'updates', badge:pageHeroText('typeUpdates'), title:title, intro:intro, tags:[pageHeroText('worthSaving'), pageHeroText('revisitedOften')], actions:[{ label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }, { label:t('nav.home') || 'Home', href:getPageHeroPageRoute('home') }] };
    case 'start':
      return { tone:'lesson', iconKey:'glossary', badge:pageHeroText('typeGuide'), title:title, intro:intro, tags:[pageHeroText('beginnerFriendly'), pageHeroText('stepByStep')], actions:[{ label:t('nav.l1') || 'Blockchain', href:getPageHeroLessonRoute(0) }, { label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }] };
    default:
      return { tone:'lesson', iconKey:'glossary', badge:title || '', title:title, intro:intro, tags:[], actions:[] };
  }
}
function getLessonHeroConfig(index, lesson, totalLessons){
  const base = { tone:'lesson', badge:pageHeroText('typeLesson'), eyebrow:(t('breadcrumb.prefix') || 'Lesson') + ' ' + (index + 1) + ' / ' + totalLessons, title:lesson.title, intro:lesson.intro, iconKey:'glossary', tags:[pageHeroText('beginnerFriendly')], actions:[] };
  const intermediateBadgeRaw = typeof t === 'function' ? t('intermediate.badge') : '';
  const intermediateBadge = intermediateBadgeRaw && intermediateBadgeRaw !== 'intermediate.badge' ? intermediateBadgeRaw : pageHeroText('typeLesson');
  switch(index){
    case 0:
      base.iconKey = 'glossary';
      base.tags = [pageHeroText('beginnerFriendly'), pageHeroText('stepByStep')];
      base.actions = [{ label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }, { label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }];
      break;
    case 1:
      base.iconKey = 'wallet';
      base.tags = [pageHeroText('beginnerFriendly'), pageHeroText('safetyEssential')];
      base.actions = [{ label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }];
      break;
    case 2:
      base.iconKey = 'transfer';
      base.tags = [pageHeroText('quickReview'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('beforeSend'), href:getPageHeroChecklistRoute('before-send') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }];
      break;
    case 3:
      base.iconKey = 'roles';
      base.tags = [pageHeroText('beginnerFriendly'), pageHeroText('worthSaving')];
      base.actions = [{ label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }, { label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }];
      break;
    case 4:
      base.iconKey = 'real';
      base.tags = [pageHeroText('worthSaving'), pageHeroText('goDeeper')];
      base.actions = [{ label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }];
      break;
    case 5:
      base.iconKey = 'buy';
      base.tags = [pageHeroText('beforeFirstBuy'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('beforeSend'), href:getPageHeroChecklistRoute('before-send') }, { label:pageHeroText('freePdf'), href:getPageHeroFreePdfRoute() }];
      break;
    case 6:
      base.tone = 'safety';
      base.iconKey = 'safety';
      base.tags = [pageHeroText('safetyEssential'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('seedPhrase'), href:getPageHeroChecklistRoute('seed-phrase-safety') }, { label:pageHeroText('fakeWebsite'), href:getPageHeroChecklistRoute('fake-website-check') }];
      break;
    case 7:
      base.badge = intermediateBadge;
      base.iconKey = 'wallet';
      base.tags = [pageHeroText('worthSaving'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('seedPhrase'), href:getPageHeroChecklistRoute('seed-phrase-safety') }, { label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }];
      break;
    case 8:
      base.badge = intermediateBadge;
      base.iconKey = 'network';
      base.tags = [pageHeroText('quickReview'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('beforeSend'), href:getPageHeroChecklistRoute('before-send') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }];
      break;
    case 9:
      base.badge = intermediateBadge;
      base.iconKey = 'stablecoin';
      base.tags = [pageHeroText('quickReview'), pageHeroText('worthSaving')];
      base.actions = [{ label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }, { label:pageHeroText('freePdf'), href:getPageHeroFreePdfRoute() }];
      break;
    case 10:
      base.badge = intermediateBadge;
      base.iconKey = 'defi';
      base.tags = [pageHeroText('safetyEssential'), pageHeroText('checklistLinked')];
      base.actions = [{ label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }, { label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }];
      break;
    case 11:
      base.badge = intermediateBadge;
      base.iconKey = 'project';
      base.tags = [pageHeroText('goDeeper'), pageHeroText('checklistLinked')];
      base.actions = [{ label:pageHeroText('fakeWebsite'), href:getPageHeroChecklistRoute('fake-website-check') }, { label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }];
      break;
    case 12:
      base.badge = intermediateBadge;
      base.iconKey = 'bridge';
      base.tags = [pageHeroText('quickReview'), pageHeroText('safetyEssential')];
      base.actions = [{ label:pageHeroText('beforeSend'), href:getPageHeroChecklistRoute('before-send') }, { label:t('nav.sources') || 'Source Library', href:getPageHeroPageRoute('sources') }];
      break;
    case 13:
      base.badge = intermediateBadge;
      base.iconKey = 'verify';
      base.tags = [pageHeroText('safetyEssential'), pageHeroText('revisitedOften')];
      base.actions = [{ label:pageHeroText('fakeWebsite'), href:getPageHeroChecklistRoute('fake-website-check') }, { label:t('nav.safety') || 'Safety', href:getPageHeroPageRoute('safety') }];
      break;
    default:
      base.actions = [{ label:t('nav.glossary') || 'Glossary', href:getPageHeroPageRoute('glossary') }];
      break;
  }
  if(index >= 7 && index <= 13){
    base.compact = true;
    base.extraClass = ((base.extraClass || '') + ' page-hero-intermediate').trim();
  }
  return base;
}
window.renderUnifiedPageHero = renderUnifiedPageHero;
window.getStaticPageHeroConfig = getStaticPageHeroConfig;
function renderGlossary(){
  const items = getGlossaryItems();
  const hero = renderUnifiedPageHero(getStaticPageHeroConfig('glossary', t('glossary.title'), t('glossary.desc')));
  return `
    ${hero}
    <div class="glossary-grid">
      ${items.map(([term, body])=>`<div class="glossary-card"><div class="glossary-term">${term}</div><div class="glossary-meaning">${typeof body==='function' ? body(t) : body}</div></div>`).join('')}
    </div>`;
}
function normalizeSourceTargetKey(value){
  return String(value || '').toLowerCase().replace(/^https?:\/\//,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}
function getSourceItemTargetKey(item, fallbackKey){
  if(!item) return normalizeSourceTargetKey(fallbackKey || '');
  const url = item.length >= 7 ? item[4] : item[3];
  const title = item.length >= 7 ? item[2] : item[1];
  return normalizeSourceTargetKey(url || fallbackKey || title || '');
}
function renderSources(){
  const items = getSourceItems();
  const cats = getSourceCats();
  // Build a map of cat_key -> items
  const byCategory = {};
  items.forEach(item=>{
    const key = item[0];
    if(!byCategory[key]) byCategory[key] = [];
    byCategory[key].push(item);
  });
  // Section labels from i18n or cats list
  const catLabelMap = {};
  cats.forEach(c=>{ catLabelMap[c.key] = c.label; });
  // Cat keys that have items, in defined order
  const orderedKeys = cats.map(c=>c.key).filter(k=>byCategory[k] && byCategory[k].length>0);
  // Fallback: also include any extra keys not in cats list
  Object.keys(byCategory).forEach(k=>{ if(!orderedKeys.includes(k)) orderedKeys.push(k); });

  // Build category filter chips
  const chipHtml = orderedKeys.map(k=>{
    const label = catLabelMap[k] || k;
    const count = (byCategory[k]||[]).length;
    return `<div class="source-cat" data-source-cat="${k}">${label} <span style="font-size:.65rem;opacity:.6;margin-left:3px">(${count})</span></div>`;
  }).join('');

  // Build category sections
  const sectionsHtml = orderedKeys.map(k=>{
    const label = catLabelMap[k] || k;
    const catItems = byCategory[k] || [];
    const cardsHtml = catItems.map((item)=>{
      // Support both old format [cat, title, body, url] (4 elements)
      // and new format [cat, publisher, title, body, url, relatedSection, whyMatters] (7 elements)
      let _cat, publisher, title, body, url, relatedSection, whyMatters;
      if(item.length >= 7){
        [_cat, publisher, title, body, url, relatedSection, whyMatters] = item;
      } else {
        // Old 4-element format: [cat, title, body, url]
        [_cat, title, body, url] = item;
        publisher = '';
        relatedSection = '';
        whyMatters = '';
      }
      // Safety: ensure url is always a string before calling .replace()
      const safeUrl = (typeof url === 'string' && url) ? url : '';
      const displayUrl = safeUrl ? safeUrl.replace(/^https?:\/\//,'').replace(/\/$/,'').substring(0,55) + (safeUrl.length>60?'…':'') : '';
      const sourceTargetKey = getSourceItemTargetKey(item, title);
      return `<div class="source-library-item" data-source-key="${sourceTargetKey}">
        <div class="source-library-meta">${catLabelMap[_cat]||_cat}</div>
        <div class="src-publisher-row">
          ${publisher ? `<span class="src-publisher">&#9654; ${publisher}</span>` : ''}
          ${relatedSection ? `<span class="src-section-tag">&#8594; ${relatedSection}</span>` : ''}
        </div>
        <h3>${title||''}</h3>
        <p>${body||''}</p>
        ${whyMatters ? `<div class="src-why"><strong>Why this matters:</strong> ${whyMatters}</div>` : ''}
        ${safeUrl ? `<a class="src-link" href="${safeUrl}" target="_blank" rel="noopener">&#128279; ${displayUrl}</a>` : ''}
      </div>`;
    }).join('');
    return `<div class="src-section-block" data-source-section="${k}">
      <div class="src-section-heading">${label}<span class="src-section-count">${catItems.length}</span></div>
      <div class="source-library-grid">${cardsHtml}</div>
    </div>`;
  }).join('');

  const hero = renderUnifiedPageHero(getStaticPageHeroConfig('sources', t('sources.pageTitle'), t('sources.pageDesc')));
  return `
    ${hero}
    <div class="source-cats">${chipHtml}</div>
    ${sectionsHtml}`;
}
let currentPage = 'home';
let currentLang = localStorage.getItem('cryptoAcademyLang') || 'en';
let currentLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]'));


const extraUi = {
  "en": {
    "v.ledger": "Ledger",
    "v.node": "Node",
    "v.wallet": "Wallet",
    "v.interface": "interface",
    "v.address": "Address",
    "v.shareable": "shareable",
    "v.private": "Private key",
    "v.secret": "secret",
    "v.seed": "Seed phrase",
    "v.backup": "backup",
    "v.network": "Network",
    "v.test": "Test transfer",
    "v.txid": "TxID",
    "v.match": "match",
    "v.check": "check",
    "v.smallfirst": "small first",
    "v.verify": "verify",
    "v.defi": "DeFi",
    "v.utility": "Utility",
    "v.governance": "Governance",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Bank",
    "v.access": "Access",
    "v.voting": "Voting",
    "v.ownership": "Ownership",
    "v.cash": "Cash",
    "v.roleDesc1": "Financial functions done with code.",
    "v.roleDesc2": "Use, benefits, and service functions.",
    "v.roleDesc3": "Participation in proposals and decisions.",
    "v.roleDesc4": "Proof tied to a specific digital item.",
    "v.roleDesc5": "Designed to stay near a reference value.",
    "v.phishing": "Phishing",
    "v.custody": "Custody",
    "v.designrisk": "Design risk",
    "v.riskDesc1": "Urgency and fake support messages can trick users into dangerous approvals.",
    "v.riskDesc2": "If another platform holds the keys, your safety depends on its controls and behavior.",
    "v.riskDesc3": "“Stable” describes a goal, not a promise that every scenario is safe.",
    "glossary.title": "Glossary",
    "glossary.desc": "Simple meanings for key crypto words. Read these first if a lesson feels unfamiliar.",
    "sources.pageTitle": "Source Library",
    "sources.pageDesc": "A reading list of real articles and official references. Use it to connect lesson ideas with real-world cases."
  },
  "ko": {
    "v.ledger": "원장",
    "v.node": "노드",
    "v.wallet": "지갑",
    "v.interface": "인터페이스",
    "v.address": "주소",
    "v.shareable": "공유 가능",
    "v.private": "개인키",
    "v.secret": "비밀",
    "v.seed": "시드 문구",
    "v.backup": "백업",
    "v.network": "네트워크",
    "v.test": "테스트 전송",
    "v.txid": "TxID",
    "v.match": "일치 확인",
    "v.check": "주소 확인",
    "v.smallfirst": "소액 먼저",
    "v.verify": "기록 확인",
    "v.defi": "디파이",
    "v.utility": "유틸리티",
    "v.governance": "거버넌스",
    "v.nft": "NFT",
    "v.stablecoin": "스테이블코인",
    "v.bank": "은행",
    "v.access": "접근",
    "v.voting": "투표",
    "v.ownership": "소유권",
    "v.cash": "현금",
    "v.roleDesc1": "코드로 실행되는 금융 기능.",
    "v.roleDesc2": "사용, 혜택, 서비스 기능.",
    "v.roleDesc3": "제안과 의사결정 참여.",
    "v.roleDesc4": "특정 디지털 자산에 연결된 소유 증명.",
    "v.roleDesc5": "기준 가치에 가깝게 유지되도록 설계됨.",
    "v.phishing": "피싱",
    "v.custody": "커스터디",
    "v.designrisk": "구조 리스크",
    "v.riskDesc1": "긴급함과 가짜 지원 메시지는 위험한 승인을 유도할 수 있습니다.",
    "v.riskDesc2": "다른 플랫폼이 키를 보유하면 안전성은 그 플랫폼의 통제와 행동에 달려 있습니다.",
    "v.riskDesc3": "‘안정적’이라는 말은 목표를 뜻할 뿐, 모든 상황에서의 안전을 보장하지 않습니다.",
    "glossary.title": "용어사전",
    "glossary.desc": "핵심 암호화폐 용어를 쉬운 말로 정리했습니다. 강의가 낯설게 느껴질 때 먼저 읽어보세요.",
    "sources.pageTitle": "Source Library",
    "sources.pageDesc": "실제 기사와 공식 자료를 모아둔 읽기 목록입니다. 강의 내용과 현실 사례를 연결해서 볼 수 있습니다."
  },
  "th": {
    "v.ledger": "บัญชีแยกประเภท",
    "v.node": "โหนด",
    "v.wallet": "วอลเล็ต",
    "v.interface": "อินเทอร์เฟซ",
    "v.address": "ที่อยู่กระเป๋า",
    "v.shareable": "แชร์ได้",
    "v.private": "คีย์ส่วนตัว",
    "v.secret": "ความลับ",
    "v.seed": "วลีสำรอง",
    "v.backup": "ข้อมูลสำรอง",
    "v.network": "เครือข่าย",
    "v.test": "การโอนทดลอง",
    "v.txid": "TxID",
    "v.match": "ให้ตรงกัน",
    "v.check": "ตรวจสอบ",
    "v.smallfirst": "จำนวนน้อยก่อน",
    "v.verify": "ยืนยัน",
    "v.defi": "การเงินแบบกระจายศูนย์",
    "v.utility": "โทเคนยูทิลิตี้",
    "v.governance": "โทเคนกำกับดูแล",
    "v.nft": "เอ็นเอฟที",
    "v.stablecoin": "สเตเบิลคอยน์",
    "v.bank": "เหมือนธนาคาร",
    "v.access": "การเข้าถึง",
    "v.voting": "การโหวต",
    "v.ownership": "ความเป็นเจ้าของ",
    "v.cash": "เงินสดดิจิทัล",
    "v.roleDesc1": "ฟังก์ชันการเงินที่ทำงานด้วยโค้ด.",
    "v.roleDesc2": "ใช้เพื่อการใช้งาน สิทธิประโยชน์ และฟังก์ชันในบริการ.",
    "v.roleDesc3": "ใช้มีส่วนร่วมกับข้อเสนอและการตัดสินใจ.",
    "v.roleDesc4": "หลักฐานความเป็นเจ้าของที่ผูกกับสินทรัพย์ดิจิทัลเฉพาะ.",
    "v.roleDesc5": "ออกแบบให้มีมูลค่าใกล้เคียงค่าอ้างอิง.",
    "v.phishing": "ฟิชชิง",
    "v.custody": "การดูแลสินทรัพย์",
    "v.designrisk": "ความเสี่ยงด้านโครงสร้าง",
    "v.riskDesc1": "ความเร่งด่วนและข้อความช่วยเหลือปลอมอาจหลอกให้ผู้ใช้กดอนุมัติที่อันตราย.",
    "v.riskDesc2": "ถ้าแพลตฟอร์มอื่นถือกุญแจ ความปลอดภัยของคุณจะขึ้นอยู่กับระบบควบคุมและพฤติกรรมของเขา.",
    "v.riskDesc3": "คำว่า ‘stable’ เป็นเป้าหมายของการออกแบบ ไม่ใช่คำรับประกันว่าปลอดภัยในทุกสถานการณ์.",
    "glossary.title": "อภิธานศัพท์",
    "glossary.desc": "ความหมายแบบง่ายของคำคริปโตที่สำคัญ หากบทเรียนใดดูยาก ให้เริ่มจากหน้านี้ก่อน.",
    "sources.pageTitle": "คลังแหล่งข้อมูล",
    "sources.pageDesc": "รายการบทความจริงและแหล่งอ้างอิงอย่างเป็นทางการ ใช้เพื่อเชื่อมบทเรียนกับเหตุการณ์ในโลกจริง."
  },
  "id": {
    "v.ledger": "Buku besar",
    "v.node": "Node",
    "v.wallet": "Wallet",
    "v.interface": "antarmuka",
    "v.address": "Alamat dompet",
    "v.shareable": "bisa dibagikan",
    "v.private": "Kunci privat",
    "v.secret": "rahasia",
    "v.seed": "Frasa pemulihan",
    "v.backup": "cadangan pemulihan",
    "v.network": "Jaringan",
    "v.test": "Transfer uji",
    "v.txid": "TxID",
    "v.match": "harus cocok",
    "v.check": "periksa",
    "v.smallfirst": "kecil dulu",
    "v.verify": "verifikasi",
    "v.defi": "Keuangan terdesentralisasi",
    "v.utility": "Token utilitas",
    "v.governance": "Token tata kelola",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Seperti bank",
    "v.access": "Akses",
    "v.voting": "Voting",
    "v.ownership": "Kepemilikan",
    "v.cash": "Uang tunai digital",
    "v.roleDesc1": "Fungsi keuangan yang dijalankan dengan kode.",
    "v.roleDesc2": "Dipakai untuk penggunaan, manfaat, dan fungsi layanan.",
    "v.roleDesc3": "Partisipasi dalam proposal dan keputusan.",
    "v.roleDesc4": "Bukti kepemilikan yang terikat pada item digital tertentu.",
    "v.roleDesc5": "Dirancang agar tetap dekat dengan nilai acuan.",
    "v.phishing": "Phishing",
    "v.custody": "Kustodi",
    "v.designrisk": "Risiko desain",
    "v.riskDesc1": "Urgensi dan pesan dukungan palsu dapat menipu pengguna agar memberi persetujuan berbahaya.",
    "v.riskDesc2": "Jika platform lain memegang kunci, keamanan Anda bergantung pada kontrol dan perilaku mereka.",
    "v.riskDesc3": "‘Stable’ adalah tujuan desain, bukan janji bahwa setiap situasi aman.",
    "glossary.title": "Glosarium",
    "glossary.desc": "Arti sederhana untuk istilah penting di dunia kripto. Baca bagian ini terlebih dahulu jika pelajaran terasa asing.",
    "sources.pageTitle": "Source Library",
    "sources.pageDesc": "Daftar artikel nyata dan referensi resmi. Gunakan untuk menghubungkan pelajaran dengan kasus di dunia nyata."
  },
  "pt": {
    "v.ledger": "Livro-razão",
    "v.node": "Nó",
    "v.wallet": "Carteira",
    "v.interface": "interface",
    "v.address": "Endereço",
    "v.shareable": "compartilhável",
    "v.private": "Chave privada",
    "v.secret": "segredo",
    "v.seed": "Frase de recuperação",
    "v.backup": "backup de recuperação",
    "v.network": "Rede",
    "v.test": "Transferência de teste",
    "v.txid": "TxID",
    "v.match": "deve corresponder",
    "v.check": "verificar",
    "v.smallfirst": "valor pequeno",
    "v.verify": "confirmar",
    "v.defi": "Finanças descentralizadas",
    "v.utility": "Token de utilidade",
    "v.governance": "Token de governança",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Banco",
    "v.access": "Acesso",
    "v.voting": "Votação",
    "v.ownership": "Propriedade",
    "v.cash": "Dinheiro digital",
    "v.roleDesc1": "Funções financeiras feitas com código.",
    "v.roleDesc2": "Uso, benefícios e funções de serviço.",
    "v.roleDesc3": "Participação em propostas e decisões.",
    "v.roleDesc4": "Prova ligada a um item digital específico.",
    "v.roleDesc5": "Projetada para ficar perto de um valor de referência.",
    "v.phishing": "Phishing",
    "v.custody": "Custódia",
    "v.designrisk": "Risco de design",
    "v.riskDesc1": "Urgência e mensagens falsas de suporte podem levar usuários a aprovações perigosas.",
    "v.riskDesc2": "Se outra plataforma guarda as chaves, sua segurança depende dos controles e do comportamento dela.",
    "v.riskDesc3": "‘Stable’ descreve um objetivo, não uma promessa de segurança em todos os cenários.",
    "glossary.title": "Glossário",
    "glossary.desc": "Significados simples para palavras-chave do mundo cripto. Leia primeiro se alguma lição parecer desconhecida.",
    "sources.pageTitle": "Biblioteca de Fontes",
    "sources.pageDesc": "Uma lista de leitura com artigos reais e referências oficiais. Use-a para ligar as lições a casos do mundo real."
  },
    "br": {
    "v.ledger": "Livro-razão",
    "v.node": "Nó",
    "v.wallet": "Carteira",
    "v.interface": "interface",
    "v.address": "Endereço",
    "v.shareable": "compartilhável",
    "v.private": "Chave privada",
    "v.secret": "segredo",
    "v.seed": "Frase de recuperação",
    "v.backup": "backup de recuperação",
    "v.network": "Rede",
    "v.test": "Transferência de teste",
    "v.txid": "TxID",
    "v.match": "deve corresponder",
    "v.check": "verificar",
    "v.smallfirst": "valor pequeno",
    "v.verify": "confirmar",
    "v.defi": "Finanças descentralizadas",
    "v.utility": "Token de utilidade",
    "v.governance": "Token de governança",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Banco",
    "v.access": "Acesso",
    "v.voting": "Votação",
    "v.ownership": "Propriedade",
    "v.cash": "Dinheiro digital",
    "v.roleDesc1": "Funções financeiras feitas com código.",
    "v.roleDesc2": "Uso, benefícios e funções de serviço.",
    "v.roleDesc3": "Participação em propostas e decisões.",
    "v.roleDesc4": "Prova ligada a um item digital específico.",
    "v.roleDesc5": "Projetada para ficar perto de um valor de referência.",
    "v.phishing": "Phishing",
    "v.custody": "Custódia",
    "v.designrisk": "Risco de estrutura",
    "v.riskDesc1": "Sites falsos ou aprovações perigosas podem drenar ativos.",
    "v.riskDesc2": "Se outra pessoa controla as chaves, você depende do sistema dela.",
    "v.riskDesc3": "Mesmo parecendo estável, a estrutura ainda importa."
  },
    "tr": {
    "v.ledger": "Defter",
    "v.node": "Düğüm",
    "v.wallet": "Cüzdan",
    "v.interface": "arayüz",
    "v.address": "Adres",
    "v.shareable": "paylaşılabilir",
    "v.private": "Özel anahtar",
    "v.secret": "gizli",
    "v.seed": "Kurtarma ifadesi",
    "v.backup": "yedek",
    "v.network": "Ağ",
    "v.test": "Test transferi",
    "v.txid": "TxID",
    "v.match": "eşleşmeli",
    "v.check": "kontrol et",
    "v.smallfirst": "önce küçük miktar",
    "v.verify": "doğrula",
    "v.defi": "Merkeziyetsiz finans",
    "v.utility": "Yardımcı token",
    "v.governance": "Yönetişim tokeni",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Banka",
    "v.access": "Erişim",
    "v.voting": "Oylama",
    "v.ownership": "Mülkiyet",
    "v.cash": "Dijital nakit",
    "v.roleDesc1": "Kodla çalışan finansal işlevler.",
    "v.roleDesc2": "Kullanım, fayda ve hizmet işlevleri.",
    "v.roleDesc3": "Tekliflere ve kararlara katılım.",
    "v.roleDesc4": "Belirli bir dijital öğeye bağlı sahiplik kanıtı.",
    "v.roleDesc5": "Referans değere yakın kalacak şekilde tasarlanır.",
    "v.phishing": "Phishing",
    "v.custody": "Custody",
    "v.designrisk": "Tasarım riski",
    "v.riskDesc1": "Sahte siteler veya zararlı onaylar varlıkları boşaltabilir.",
    "v.riskDesc2": "Anahtarları başkası tutuyorsa onun sistemine bağımlı olursunuz.",
    "v.riskDesc3": "İstikrarlı görünse bile yapı yine de önemlidir."
  },
  "es": {
    "v.ledger": "Libro mayor",
    "v.node": "Nodo",
    "v.wallet": "Billetera",
    "v.interface": "interfaz",
    "v.address": "Dirección",
    "v.shareable": "compartible",
    "v.private": "Clave privada",
    "v.secret": "secreto",
    "v.seed": "Frase semilla",
    "v.backup": "respaldo",
    "v.network": "Red",
    "v.test": "Transferencia de prueba",
    "v.txid": "TxID",
    "v.match": "debe coincidir",
    "v.check": "comprobar",
    "v.smallfirst": "primero poco",
    "v.verify": "verificar",
    "v.defi": "Finanzas descentralizadas",
    "v.utility": "Token de utilidad",
    "v.governance": "Token de gobernanza",
    "v.nft": "NFT",
    "v.stablecoin": "Stablecoin",
    "v.bank": "Banco",
    "v.access": "Acceso",
    "v.voting": "Votación",
    "v.ownership": "Propiedad",
    "v.cash": "Efectivo digital",
    "v.roleDesc1": "Funciones financieras hechas con código.",
    "v.roleDesc2": "Uso, beneficios y funciones de servicio.",
    "v.roleDesc3": "Participación en propuestas y decisiones.",
    "v.roleDesc4": "Prueba vinculada a un elemento digital específico.",
    "v.roleDesc5": "Diseñada para mantenerse cerca de un valor de referencia.",
    "v.phishing": "Phishing",
    "v.custody": "Custodia",
    "v.designrisk": "Riesgo de diseño",
    "v.riskDesc1": "La urgencia y los falsos mensajes de soporte pueden llevar a aprobaciones peligrosas.",
    "v.riskDesc2": "Si otra plataforma guarda las claves, tu seguridad depende de sus controles y su conducta.",
    "v.riskDesc3": "‘Stable’ describe un objetivo, no una promesa de seguridad en todos los escenarios.",
    "glossary.title": "Glosario",
    "glossary.desc": "Significados simples para palabras clave del mundo cripto. Léelos primero si una lección te resulta poco familiar.",
    "sources.pageTitle": "Biblioteca de Fuentes",
    "sources.pageDesc": "Una lista de lectura de artículos reales y referencias oficiales. Úsala para conectar las lecciones con casos del mundo real."
  ,
    "v.networkDesc": "La red blockchain por la que debe moverse el activo."
  ,
    "v.addressDesc": "Vuelve a revisar los primeros y últimos caracteres antes de enviar."
  ,
    "v.testDesc": "Envía primero una pequeña cantidad como prueba, cuando sea posible."
  ,
    "v.txidDesc": "ID de la transacción usada para verificar la transferencia."
  ,
    "v.public": "Clave pública"
  ,
    "v.explorer": "Explorador de blockchain"
  ,
    "v.contract": "Contrato inteligente"
  ,
    "v.bridge": "Puente entre blockchains"
  }
};
langLabels.ha = 'HA';
(function(){
  function clonePlain(value){
    return JSON.parse(JSON.stringify(value));
  }
  function replaceHaSourceText(text){
    return String(text || '')
      .replace(/Lesson 1/g,'Darasi na 1')
      .replace(/Lesson 2/g,'Darasi na 2')
      .replace(/Lesson 3/g,'Darasi na 3')
      .replace(/Lesson 4/g,'Darasi na 4')
      .replace(/Lesson 5/g,'Darasi na 5')
      .replace(/Wallets/g,'Walat')
      .replace(/Safe Transfers/g,'Canja Wuri Cikin Aminci')
      .replace(/The 5 Roles of Crypto/g,'Ayyuka 5 na tokan')
      .replace(/Real-world Lessons/g,'Darussan Duniya ta Gaskiya')
      .replace(/Source Library/g,'Laburaren Madogara')
      .replace(/Glossary/g,'Kamus')
      .replace(/FAQ/g,'Tambayoyi da Amsoshi')
      .replace(/Safety/g,'Tsaro');
  }

  ui.ha = Object.assign({}, ui.ha || {}, {
    "brand.name":"Coin ProofPath",
    "brand.sub":"Darussa masu sauƙi ga masu farawa",
    "sidebar.lessons":"Darussan karatu",
    "sidebar.topics":"Batutuwa masu sauri",
    "nav.home":"Shafi na gida",
    "nav.homesub":"Fara daga nan",
    "nav.l1":"Sarkar bayanai",
    "nav.l1sub":"Asalin kundin rabawa",
    "nav.l2":"Walat",
    "nav.l2sub":"Makullai da damar shiga",
    "nav.l3":"Canja Wuri Cikin Aminci",
    "nav.l3sub":"Aika ba tare da kuskure ba",
    "nav.l4":"Ayyuka 5 na tokan",
    "nav.l4sub":"Fahimtar rawar tokan",
    "nav.l5":"Darussan Duniya ta Gaskiya",
    "nav.l5sub":"Me ya sa tsari yake da muhimmanci",
    "nav.glossary":"Kamus",
    "nav.glossarysub":"Muhimman kalmomi cikin sauƙi",
    "nav.sources":"Laburaren Madogara",
    "nav.sourcesub":"Makaloli da nassoshi na hukuma",
    "nav.start":"Fara Nan",
    "nav.startsub":"Hanyar masu farawa",
    "nav.faqPage":"Tambayoyi da Amsoshi",
    "nav.faqsub":"Tambayoyin da aka fi yi",
    "nav.safety":"Tsaro",
    "nav.safetysub":"Kariyar zamba",
    "nav.updates":"Tarihin Sabuntawa",
    "nav.updatessub":"Abin da ya canza da lokacin da ya canza",
    "topic.blockchain":"Menene sarkar bayanai?",
    "topic.wallet":"Menene walat?",
    "topic.transfer":"Yaya canja wuri cikin aminci yake aiki?",
    "topic.roles":"Yaya ayyukan tokan suka bambanta?",
    "topic.real":"Me ya sa misalan gaske suke da muhimmanci?",
    "footer.byline":"Kayan ilimi kyauta daga Bee Network Korea",
    "overview.chip1":"Na masu farawa",
    "overview.chip2":"Harsuna da yawa",
    "overview.chip3":"Koyon gani",
    "progress.done":"an kammala",
    "btn.prev":"Darasi na baya",
    "btn.next":"Darasi na gaba",
    "btn.mark":"Alama a matsayin an kammala",
    "btn.completed":"An kammala",
    "btn.restart":"Fara daga farko",
    "breadcrumb.prefix":"Darasi",
    "quiz.reveal":"Nuna amsa",
    "source.title":"Madogara",
    "check.title":"Abubuwan dubawa ga masu farawa",
    "faq.title":"Tambayoyi da Amsoshi",
    "mistakes.title":"Kurakuran da aka fi yi",
    "quiz.title":"Karamin gwaji",
    "example.title":"Misali mai sauƙi",
    "sources.title":"Madogarori masu alaƙa",
    "visual.title":"Bayani ta gani",
    "complete.note":"Ana adana ci gabanka a wannan burauzar.",
    "callout.quick":"Muhimmin ra'ayi",
    "home.arrowNote":"Yi amfani da menu na hagu a matsayin taswirar koyonka.",
    "home.title":"Koyi kudin dijital mataki-mataki",
    "home.desc":"Yi amfani da wannan shafin a matsayin wurin farawa. Za ka iya buɗe Darasi 1–5 kai tsaye, duba Kamus don muhimman kalmomi, ko shiga Laburaren Madogara don makaloli na gaske da takardun hukuma.",
    "home.start":"Daga ina ya kamata ka fara?",
    "home.useMenu":"Yi amfani da menu na hagu a matsayin taswirar koyonka",
    "home.lessonGuide":"Idan kai sabo ne, fara da Darasi na 1 sannan ka bi a jere. Kowane darasi yana da sauƙaƙan bayani, misalai, kurakurai na yau da kullum, da wuraren dubawa.",
    "home.glossaryTitle":"Kamus",
    "home.glossaryDesc":"Bude Kamus don fahimtar kalmomi kamar kudin gas, makullin jama'a, mai duba sarkar bayanai, kwangilar smart, rikon kadara, da gada cikin sauƙi.",
    "home.sourceTitle":"Laburaren Madogara",
    "home.sourceDesc":"Karanta makaloli na gaske da nassoshi na hukuma da aka tsara bisa batutuwa kamar zamba, musaya, tsayayyun kudaden dijital, da tsaron walat.",
    "home.openLesson":"Bude darasi",
    "home.openGlossary":"Bude Kamus",
    "home.openSources":"Bude Laburaren Madogara",
    "home.startCardTitle":"Fara Nan",
    "home.startCardDesc":"Yana nuna maka daidai inda za ka fara idan wannan ne karo na farko.",
    "home.faqCardTitle":"Tambayoyi da Amsoshi",
    "home.faqCardDesc":"Karanta tambayoyin masu farawa da aka fi yawan yi a wuri guda.",
    "home.safetyCardTitle":"Tsaro",
    "home.safetyCardDesc":"Koyi hanyoyin kariya daga zamba da halayen tsaron walat masu amfani.",
    "home.openStart":"Bude Fara Nan",
    "home.openFaq":"Bude Tambayoyi da Amsoshi",
    "home.openSafety":"Bude Tsaro",
    "glossary.title":"Kamus",
    "glossary.desc":"Sauƙaƙan ma'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.",
    "glossary.address.term":"Adireshi",
    "glossary.address.body":"Wurin jama'a da ake karɓar kadarori.",
    "glossary.private.term":"Makullin sirri",
    "glossary.private.body":"Makullin sirri da ke ba ka iko da walat.",
    "glossary.seed.term":"Jimlar dawo da walat",
    "glossary.seed.body":"Ajiyar kalmomi don dawo da walat. Kada ka taɓa rabawa.",
    "glossary.gas.term":"Kudin gas",
    "glossary.gas.body":"Kuɗin network da ake biya domin sarrafa ma'amala.",
    "glossary.public.term":"Makullin jama'a",
    "glossary.public.body":"Makullin cryptography da ke da alaƙa da asalin walat kuma yana taimakawa ƙirƙirar adireshi.",
    "glossary.explorer.term":"Mai duba sarkar bayanai",
    "glossary.explorer.body":"Shafi ko kayan aiki da ke nuna ma'amaloli da adireshi a kan blockchain.",
    "glossary.contract.term":"Smart contract",
    "glossary.contract.body":"Lambar da ke kan blockchain wadda ke gudana kai tsaye bisa ƙa'idojin da aka tsara.",
    "glossary.custody.term":"Custody",
    "glossary.custody.body":"Waye ke riƙe da makullai da ikon shiga kadarori.",
    "glossary.bridge.term":"Bridge",
    "glossary.bridge.body":"Kayan aiki da ake amfani da shi wajen motsa kadarori ko saƙonni tsakanin blockchains daban-daban.",
    "sources.pageTitle":"Laburaren Madogara",
    "sources.pageDesc":"Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin haɗa ra'ayoyin darasi da misalan duniya ta gaskiya.",
    "sources.catScams":"Zamba",
    "sources.catExchanges":"Musaya",
    "sources.catStable":"Tsayayyun kudaden dijital",
    "sources.catWallet":"Tsaron Walat",
    "sources.catCases":"Misalan Gaske",
    "sources.catBasics":"Asali",
    "sources.catDefi":"Tsarin kudi marar tsakiya",
    "sources.catReg":"Ka'idoji",
    "updates.title":"Tarihin Sabuntawa",
    "updates.desc":"Rajistar gyare-gyare da aka yi wa wannan dandali a tsawon lokaci."
  });

  homeContent.ha = {
    title:"Koyi kudin dijital mataki-mataki kuma ka san abin da za ka duba na gaba",
    desc:"Fara daga asali, sannan ka wuce zuwa walat, canja wuri cikin aminci, rawar tokan, da darussan duniya ta gaskiya. Hakanan za ka iya amfani da Kamus da Laburaren Madogara a kowane lokaci.",
    start:"Daga ina ya kamata ka fara?",
    guide:"Idan kai sabo ne kwata-kwata, bi darussan a jere. Kowane shafi an rubuta shi da harshen da ya sauƙaƙa, tare da misalai, kurakurai na yau da kullum, wuraren dubawa, da madogarori."
  };

  lessons.ha = clonePlain(lessons.en || []);
  [
    {cat:'Asali', title:'Blockchain cikin sauƙi', intro:'Blockchain littafin bayanai ne da mutane da yawa ke dubawa tare, ba wani kamfani guda ba.'},
    {cat:'Samun Dama', title:'Fahimtar walat cikin sauƙi', intro:'Walat ba akwatin da ke riƙe da coin ba ne; kayan aiki ne da ke sarrafa makullai da damar shiga kadarori.'},
    {cat:'Tsaro', title:'Canja wurin crypto cikin aminci', intro:'Canja wurin crypto ba sai ya zama abin tsoro ba, amma yana bukatar dabi\'ar tsaro da ake iya maimaitawa.'},
    {cat:'Ayyuka', title:'Ayyuka 5 na tokan', intro:'Kudin dijital ya fi sauƙi idan ka daina tambayar sunan tokan kaɗai kuma ka fara tambayar irin aikin da yake yi.'},
    {cat:'Ainihi', title:'Darussa daga ainihin duniya', intro:'Misalai na gaske suna nuna inda masu farawa suke rikicewa da dalilin da ya sa tsari ya fi muhimmanci fiye da taken talla.'}
  ].forEach(function(ov, i){
    if(lessons.ha[i]) Object.assign(lessons.ha[i], ov);
  });

  glossaryData.ha = [
    ["Adireshi",t=>t('glossary.address.body')],
    ["Makullin sirri",t=>t('glossary.private.body')],
    ["Jimlar dawo da walat",t=>t('glossary.seed.body')],
    ["Kudin gas",t=>t('glossary.gas.body')],
    ["Makullin jama'a",t=>t('glossary.public.body')],
    ["Mai duba sarkar bayanai",t=>t('glossary.explorer.body')],
    ["Kwangilar smart",t=>t('glossary.contract.body')],
    ["Rikon kadara",t=>t('glossary.custody.body')],
    ["Gada",t=>t('glossary.bridge.body')],
    ["Sarkar bayanai",t=>t('glossary.haN1.body')],
    ["Hakowa",t=>t('glossary.haN2.body')],
    ["Walat",t=>t('glossary.haN3.body')],
    ["Kwangilar smart",t=>t('glossary.haN4.body')],
    ["Kudin gas",t=>t('glossary.haN5.body')],
    ["Mataki na 1",t=>t('glossary.haN6.body')],
    ["Muamala a sakan daya",t=>t('glossary.haN7.body')],
    ["Mai tabbatarwa",t=>t('glossary.haN8.body')],
    ["Tura kudi",t=>t('glossary.haN9.body')],
    ["Tsakaitawa",t=>t('glossary.haN10.body')],
    ["Musaya",t=>t('glossary.haN11.body')],
    ["Tokan",t=>t('glossary.haN12.body')],
    ["Tsayayyen kudin dijital",t=>t('glossary.haN13.body')],
    ["Daidaitacciyar alaka",t=>t('glossary.haN14.body')],
    ["Saukakiyar musaya",t=>t('glossary.haN15.body')],
    ["Tsarin kudi marar tsakiya",t=>t('glossary.haN16.body')],
    ["Lamuni",t=>t('glossary.haN17.body')],
    ["Lamunin take",t=>t('glossary.haN18.body')],
    ["NFT",t=>t('glossary.haN19.body')],
    ["Fitarwa",t=>t('glossary.haN20.body')]
  ];

  sourceLibraryCats.ha = [
    { key:'scams', label:'Zamba' },
    { key:'exchanges', label:'Musaya' },
    { key:'stable', label:'Tsayayyun kudaden dijital' },
    { key:'wallet', label:'Tsaron Walat' },
    { key:'cases', label:'Misalan Gaske' },
    { key:'basics', label:'Asali' },
    { key:'defi', label:'Tsarin kudi marar tsakiya' },
    { key:'reg', label:"Ka'idoji" }
  ];

  sourceLibrary.ha = (sourceLibrary.en || []).map(function(entry){
    var copy = entry.slice();
    if(typeof copy[5] === 'string') copy[5] = replaceHaSourceText(copy[5]);
    return copy;
  });

  extraUi.ha = Object.assign({}, extraUi.ha || {}, {
    "v.ledger":"Littafin rajista",
    "v.node":"Nodi",
    "v.wallet":"Walat",
    "v.interface":"mahada",
    "v.address":"Adireshi",
    "v.shareable":"ana iya rabawa",
    "v.private":"Makullin sirri",
    "v.secret":"sirri",
    "v.seed":"Jimlar dawo da walat",
    "v.backup":"ajiya",
    "v.network":"Hanyar sadarwa",
    "v.test":"Gwajin canja wuri",
    "v.txid":"TxID",
    "v.match":"ya dace",
    "v.check":"duba",
    "v.smallfirst":"fara da ƙarami",
    "v.verify":"tabbatar",
    "v.defi":"Tsarin kudi marar tsakiya",
    "v.utility":"Amfani",
    "v.governance":"Gudanarwa",
    "v.nft":"NFT",
    "v.stablecoin":"Tsayayyen kudin dijital",
    "v.bank":"Banki",
    "v.access":"Samun dama",
    "v.voting":"Zaɓe",
    "v.ownership":"Mallaka",
    "v.cash":"Kuɗi",
    "v.roleDesc1":"Ayyukan kuɗi da lamba ke yi.",
    "v.roleDesc2":"Amfani, fa'ida, da ayyukan sabis.",
    "v.roleDesc3":"Shiga cikin shawarwari da yanke hukunci.",
    "v.roleDesc4":"Shaidar mallaka ga wani abu na dijital na musamman.",
    "v.roleDesc5":"An tsara shi ya kasance kusa da wata ƙimar tunani.",
    "v.phishing":"Damfarar kama",
    "v.custody":"Rikon kadara",
    "v.designrisk":"Haɗarin tsari",
    "v.riskDesc1":"Gaggawa da saƙonnin tallafi na bogi na iya yaudarar masu amfani su ba da izini masu haɗari.",
    "v.riskDesc2":"Idan wani dandali ne ke riƙe da makullai, tsaronsa da halinsa ne ke ƙayyade amincinka.",
    "v.riskDesc3":"Kalmar tsayayye tana nufin buri ne, ba alkawarin cewa kowane yanayi yana da aminci ba.",
    "v.networkDesc":"Tabbatar da hanyar sadarwa kafin ka aika.",
    "v.addressDesc":"Sake duba farkon da ƙarshen adireshin kafin aika.",
    "v.testDesc":"Idan zai yiwu, aika ƙaramin gwaji da farko.",
    "v.txidDesc":"Yi amfani da TxID don tabbatar da ainihin bayanan canjin.",
    "v.public":"Makullin jama'a",
    "v.explorer":"Mai duba sarkar bayanai",
    "v.contract":"Kwangilar smart",
    "v.bridge":"Gada",
    "glossary.title":"Kamus",
    "glossary.desc":"Sauƙaƙan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
    "sources.pageTitle":"Laburaren Madogara",
    "sources.pageDesc":"Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin haɗa darussa da misalan duniya ta gaskiya."
  });
})();
Object.assign(ui.ha, {
  "brand.sub":"Darussa masu sauki ga masu farawa",
  "nav.glossarysub":"Muhimman kalmomi cikin sauki",
  "example.title":"Misali mai sauki",
  "sources.title":"Madogarori masu alaka",
  "home.desc":"Yi amfani da wannan shafin a matsayin wurin farawa. Za ka iya bude Darasi 1-5 kai tsaye, duba Kamus don muhimman kalmomi, ko shiga Laburaren Madogara don makaloli na gaske da takardun hukuma.",
  "home.lessonGuide":"Idan kai sabo ne, fara da Darasi na 1 sannan ka bi a jere. Kowane darasi yana da bayani cikin sauki, misalai, kurakurai na yau da kullum, da wuraren dubawa.",
  "home.glossaryDesc":"Bude Kamus don fahimtar kalmomi kamar kudin gas, makullin jama'a, mai duba sarkar bayanai, kwangilar smart, rikon kadara, da gada cikin sauki.",
  "glossary.desc":"Saukakan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
  "glossary.address.body":"Wurin jama'a da ake karbar kadarori.",
  "glossary.seed.body":"Ajiyar kalmomi don dawo da walat. Kada ka taba rabawa.",
  "glossary.gas.body":"Kudin hanyar sadarwa da ake biya domin sarrafa ma'amala.",
  "glossary.public.body":"Makulli ne da aka kirkira da dabarun boye-boye wanda ke da alaka da asalin walat kuma yana taimakawa kirkirar adireshi.",
  "glossary.contract.body":"Lambar da ke kan sarkar bayanai wadda ke gudana kai tsaye bisa ka'idojin da aka tsara.",
  "glossary.custody.body":"Waye ke rike da makullai da ikon shiga kadarori.",
  "glossary.bridge.body":"Kayan aiki da ake amfani da shi wajen motsa kadarori ko sakonni tsakanin sarkokin bayanai daban-daban.",
  "sources.pageDesc":"Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin hada ra'ayoyin darasi da misalan duniya ta gaskiya."
});
Object.assign(homeContent.ha, {
  guide:"Idan kai sabo ne kwata-kwata, bi darussan a jere. Kowane shafi an rubuta shi da harshen da ya saukaka, tare da misalai, kurakurai na yau da kullum, wuraren dubawa, da madogarori."
});
if(lessons.ha){
  if(lessons.ha[0]) Object.assign(lessons.ha[0], {cat:'Asali', title:'Sarkar bayanai cikin sauki'});
  if(lessons.ha[1]) Object.assign(lessons.ha[1], {cat:'Samun Dama', title:'Fahimtar walat cikin sauki', intro:'Walat ba akwatin da ke rike da kudin dijital ba ne; kayan aiki ne da ke sarrafa makullai da damar shiga kadarori.'});
  if(lessons.ha[3]) Object.assign(lessons.ha[3], {intro:'Kudin dijital ya fi sauki idan ka daina tambayar sunan tokan kadai kuma ka fara tambayar irin aikin da yake yi.'});
}
Object.assign(extraUi.ha, {
  "v.smallfirst":"fara da karami",
  "v.voting":"Zabe",
  "v.cash":"Kudi",
  "v.roleDesc1":"Ayyukan kudi da lamba ke yi.",
  "v.roleDesc5":"An tsara shi ya kasance kusa da wata kimar tunani.",
  "v.designrisk":"Hadarin tsari",
  "v.riskDesc1":"Gaggawa da sakonnin tallafi na bogi na iya yaudarar masu amfani su ba da izini masu hadari.",
  "v.riskDesc2":"Idan wani dandali ne ke rike da makullai, tsaronsa da halinsa ne ke kayyade amincinka.",
  "v.addressDesc":"Sake duba farkon da karshen adireshin kafin aika.",
  "v.testDesc":"Idan zai yiwu, aika karamin gwaji da farko.",
  "glossary.desc":"Saukakan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
  "sources.pageDesc":"Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin hada darussa da misalan duniya ta gaskiya."
});
const lessonOverrides = {
  "th": [
    {
      "cat": "พื้นฐาน",
      "title": "บล็อกเชนอธิบายแบบง่าย",
      "intro": "บล็อกเชนคือบัญชีแยกประเภทแบบแชร์ที่หลายฝ่ายช่วยกันตรวจสอบ แทนที่จะมีบริษัทเดียวถือบันทึกทั้งหมดไว้เพียงลำพัง",
      "sections": [
        {
          "h": "เริ่มจากแนวคิดที่ง่ายที่สุด",
          "ps": [
            "ลองนึกถึงสมุดบันทึกที่คอยจดว่าใครส่งมูลค่าให้ใคร ในระบบธนาคาร ธนาคารเป็นผู้ควบคุมสมุดบันทึกนั้น แต่ในเครือข่ายบล็อกเชน หลายฝ่ายช่วยกันรักษาความถูกต้องของบันทึกเดียวกัน",
            "ไม่ได้หมายความว่าทุกบล็อกเชนทำงานเหมือนกันทั้งหมด แต่แนวคิดหลักคือการตรวจสอบร่วมกัน เมื่อหลายฝ่ายเห็นตรงกัน การเปลี่ยนประวัติย้อนหลังโดยพลการก็ทำได้ยากขึ้น"
          ]
        },
        {
          "h": "ทำไมผู้เริ่มต้นควรสนใจ",
          "ps": [
            "หลายคนเริ่มจากการซื้อคริปโตก่อนแล้วค่อยพยายามเข้าใจโครงสร้างทีหลัง แต่ถ้าคุณไม่เข้าใจว่าระบบบันทึกทำงานอย่างไร ก็จะประเมินความเสี่ยง ความปลอดภัย และความเป็นเจ้าของได้ยากขึ้น",
            "บล็อกเชนสำคัญเพราะเป็นชั้นที่เก็บบันทึกธุรกรรม ยอดคงเหลือ และความเป็นเจ้าของ เมื่อส่วนนี้ชัดเจน เรื่องวอลเล็ตและบทบาทของโทเคนก็จะเข้าใจง่ายขึ้นตามไปด้วย"
          ]
        },
        {
          "h": "บล็อก เชน และโหนด",
          "ps": [
            "ธุรกรรมหลายรายการจะถูกรวบรวมเป็นบล็อก และแต่ละบล็อกจะเชื่อมโยงกับบล็อกก่อนหน้า นี่จึงเป็นที่มาของคำว่าเชนหรือสายโซ่ของบล็อก",
            "โหนดคือคอมพิวเตอร์ที่ช่วยอ่าน เก็บ หรือยืนยันบันทึก สำหรับผู้เริ่มต้นยังไม่จำเป็นต้องลงรายละเอียดเชิงเทคนิคมากนัก แค่เข้าใจว่ามีหลายโหนดช่วยกันปกป้องบันทึกก็เพียงพอ"
          ]
        },
        {
          "h": "อะไรทำให้มันทรงพลัง",
          "ps": [
            "บล็อกเชนช่วยลดการพึ่งพาฐานข้อมูลส่วนกลางเพียงจุดเดียว จึงถูกนำไปใช้กับสินทรัพย์ดิจิทัลและบันทึกความเป็นเจ้าของ",
            "แต่โครงสร้างแบบนี้ก็ทำให้ความผิดพลาดย้อนกลับได้ยาก หากส่งสินทรัพย์ผิดที่ อาจไม่มีฝ่ายบริการลูกค้าที่แก้กลับให้ได้เสมอไป ดังนั้นการเข้าใจโครงสร้างต้องมาก่อนความเร็ว"
          ]
        }
      ],
      "defs": [
        [
          "บัญชีแยกประเภท",
          "บันทึกธุรกรรมหรือยอดคงเหลือ"
        ],
        [
          "โหนด",
          "คอมพิวเตอร์ที่ช่วยเก็บหรือยืนยันบันทึก"
        ],
        [
          "บล็อก",
          "กลุ่มธุรกรรมที่ถูกเพิ่มเข้าไปในเชน"
        ],
        [
          "เชน",
          "ลำดับการเชื่อมต่อระหว่างบล็อกหนึ่งกับอีกบล็อกหนึ่ง"
        ]
      ],
      "example": "การโอนเงินผ่านธนาคารขึ้นอยู่กับฐานข้อมูลของธนาคาร แต่การโอนบนบล็อกเชนขึ้นอยู่กับบันทึกร่วมของเครือข่าย",
      "mistakes": [
        "คิดว่าคำว่าบล็อกเชนหมายถึงปลอดภัยเสมอในทุกสถานการณ์",
        "คิดว่าธุรกรรมทุกอย่างสามารถย้อนกลับได้เหมือนการชำระเงินด้วยบัตร",
        "มองบล็อกเชนเป็นคำลึกลับแทนที่จะมองว่าเป็นระบบบันทึกข้อมูล"
      ],
      "faqs": [
        [
          "บริษัทเดียวสามารถเปลี่ยนบล็อกเชนได้ไหม",
          "บนบล็อกเชนสาธารณะ โดยทั่วไปผู้เล่นรายเดียวไม่สามารถเปลี่ยนบันทึกร่วมทั้งหมดได้ง่ายๆ"
        ],
        [
          "ทำไมบล็อกเชนจึงถูกเรียกว่ามีความโปร่งใส",
          "เพราะมักสามารถตรวจสอบธุรกรรมผ่าน explorer ได้ แม้จะไม่ได้แสดงชื่อจริงเสมอไป"
        ],
        [
          "จำเป็นต้องรู้โค้ดก่อนหรือไม่",
          "ไม่จำเป็น ผู้เริ่มต้นควรเข้าใจภาพใหญ่ก่อนว่ามันคือบันทึกร่วม การตรวจสอบร่วมกัน และประวัติที่แก้ไขยาก"
        ]
      ],
      "checkpoints": [
        "ฉันอธิบายได้ว่าบล็อกเชนคือบัญชีแยกประเภทแบบแชร์",
        "ฉันเข้าใจว่าการตรวจสอบร่วมกันสำคัญอย่างไร",
        "ฉันรู้ว่าทำไมธุรกรรมที่ยืนยันแล้วจึงแก้กลับได้ยาก"
      ],
      "quiz": [
        [
          "คำนิยามบล็อกเชนที่ง่ายที่สุดสำหรับผู้เริ่มต้นคืออะไร",
          "บัญชีแยกประเภทแบบแชร์ที่หลายฝ่ายช่วยกันตรวจสอบ"
        ],
        [
          "ทำไมผู้เริ่มต้นจึงควรเข้าใจโครงสร้างของบล็อกเชน",
          "เพราะยอดคงเหลือ ความเป็นเจ้าของ และธุรกรรมถูกบันทึกอยู่ที่นั่น"
        ]
      ]
    },
    {
      "cat": "การเข้าถึง",
      "title": "วอลเล็ตอธิบายแบบง่าย",
      "intro": "วอลเล็ตไม่ใช่กล่องที่เก็บเหรียญเป็นหลัก แต่เป็นเครื่องมือที่จัดการกุญแจซึ่งใช้เข้าถึงและควบคุมสินทรัพย์ดิจิทัลที่ถูกบันทึกบนบล็อกเชน",
      "sections": [
        {
          "h": "ความเข้าใจผิดที่พบบ่อยที่สุด",
          "ps": [
            "หลายคนจินตนาการว่าวอลเล็ตเหมือนกระเป๋าเงินจริงที่มีเหรียญนั่งอยู่ข้างใน ภาพแบบนั้นเข้าใจง่ายแต่ไม่สมบูรณ์",
            "จริงๆ แล้วสินทรัพย์ถูกบันทึกอยู่บนบล็อกเชน ส่วนวอลเล็ตช่วยพิสูจน์ว่าคุณมีสิทธิ์ควบคุมสินทรัพย์นั้น จึงมีคนอธิบายว่าวอลเล็ตใกล้เคียงกับตัวจัดการกุญแจมากกว่ากล่องเก็บเหรียญ"
          ]
        },
        {
          "h": "Address, private key และ seed phrase",
          "ps": [
            "ที่อยู่กระเป๋าใช้สำหรับรับสินทรัพย์ จึงสามารถแชร์ได้",
            "คีย์ส่วนตัว คือข้อมูลลับที่ให้สิทธิ์ควบคุม จึงห้ามแชร์เด็ดขาด",
            "วลีสำรอง คือชุดคำสำรองสำหรับกู้คืนวอลเล็ต หากมีคนได้ไป เขาอาจเข้าควบคุมวอลเล็ตของคุณได้"
          ]
        },
        {
          "h": "Custodial กับ self-custody",
          "ps": [
            "ถ้าตลาดแลกเปลี่ยนหรือบริการอื่นถือกุญแจแทนคุณ นั่นคือ custodial มันอาจสะดวก แต่คุณต้องพึ่งพาความปลอดภัยและการตัดสินใจของแพลตฟอร์มนั้น",
            "ถ้าคุณถือกุญแจเอง นั่นคือ self-custody คุณได้อำนาจควบคุมมากขึ้น แต่ก็ต้องรับผิดชอบด้านการสำรองและความปลอดภัยมากขึ้นเช่นกัน"
          ]
        },
        {
          "h": "เหตุใดความรู้เรื่องวอลเล็ตจึงสำคัญ",
          "ps": [
            "ความรู้เรื่องวอลเล็ตไม่ใช่แค่ทฤษฎีเทคนิค แต่เกี่ยวข้องกับการรับ ส่ง เก็บ สำรอง และปกป้องสินทรัพย์จริง",
            "การสูญเสียของผู้เริ่มต้นจำนวนมากเกิดจากการแชร์ seed phrase เชื่อข้อความช่วยเหลือปลอม หรือกดอนุมัติโดยไม่เข้าใจว่าวอลเล็ตกำลังทำอะไรอยู่"
          ]
        }
      ],
      "defs": [
        [
          "ที่อยู่กระเป๋า",
          "ที่อยู่สาธารณะสำหรับรับสินทรัพย์"
        ],
        [
          "คีย์ส่วนตัว",
          "กุญแจลับที่ควบคุมการเข้าถึง"
        ],
        [
          "วลีสำรอง",
          "ชุดคำสำรองสำหรับกู้คืนวอลเล็ต"
        ],
        [
          "Custodial wallet",
          "วอลเล็ตที่บริการถือกุญแจแทนคุณ"
        ]
      ],
      "example": "ลองคิดว่าที่อยู่กระเป๋าเหมือนที่อยู่ตู้จดหมาย ส่วน private key คือกุญแจลับที่ใช้เปิดตู้จดหมายนั้น",
      "mistakes": [
        "แชร์ seed phrase ให้กับผู้ที่อ้างว่าเป็นฝ่ายช่วยเหลือ",
        "เก็บ seed phrase ไว้แค่ในโฟลเดอร์ภาพหน้าจอที่เสี่ยงต่อการสูญหาย",
        "คิดว่าบัญชีใน exchange กับวอลเล็ตแบบ self-custody เหมือนกัน"
      ],
      "faqs": [
        [
          "ฉันแชร์ที่อยู่กระเป๋าได้ไหม",
          "ได้ ที่อยู่กระเป๋าใช้เพื่อรับสินทรัพย์"
        ],
        [
          "ฉันแชร์ private key หรือ seed phrase ได้ไหม",
          "ไม่ได้ ใครก็ตามที่มีข้อมูลเหล่านี้อาจเข้าควบคุมวอลเล็ตได้"
        ],
        [
          "self-custody ดีกว่าเสมอหรือไม่",
          "มันให้การควบคุมมากขึ้น แต่ก็มาพร้อมความรับผิดชอบมากขึ้นเช่นกัน"
        ]
      ],
      "checkpoints": [
        "ฉันรู้ความแตกต่างระหว่าง address กับ private key",
        "ฉันรู้ว่าทำไม seed phrase ต้องเก็บเป็นความลับ",
        "ฉันเข้าใจความแตกต่างระหว่าง custodial และ self-custody"
      ],
      "quiz": [
        [
          "สิ่งใดที่แชร์ได้อย่างปลอดภัย",
          "ที่อยู่กระเป๋า"
        ],
        [
          "สิ่งใดที่ห้ามแชร์เด็ดขาด",
          "คีย์ส่วนตัว หรือ seed phrase"
        ]
      ]
    },
    {
      "cat": "ความปลอดภัย",
      "title": "การโอนคริปโตอย่างปลอดภัย",
      "intro": "การโอนคริปโตไม่จำเป็นต้องน่ากลัว แต่ต้องอาศัยนิสัยด้านความปลอดภัยที่ทำซ้ำได้เสมอ เช็กลิสต์ที่ง่ายที่สุดคือ network, address, test transfer แล้วค่อยตรวจสอบด้วย TxID",
      "sections": [
        {
          "h": "ทำไมผู้คนจึงพลาดเวลาโอน",
          "ps": [
            "ผู้เริ่มต้นมักรีบ พวกเขาเชื่อว่าที่อยู่ที่วางไว้ถูกต้องแล้ว มองข้าม network หรือส่งทั้งหมดในครั้งเดียวโดยไม่ทดสอบก่อน",
            "ปัญหาคือธุรกรรมบนบล็อกเชนอาจย้อนกลับได้ยาก นี่จึงเป็นเหตุผลว่าทำไมนิสัยที่ปลอดภัยสำคัญกว่าความมั่นใจ"
          ]
        },
        {
          "h": "นิสัย 4 ขั้นตอน",
          "ps": [
            "ขั้นแรก ตรวจสอบ network สินทรัพย์บางชนิดเคลื่อนย้ายได้บนหลายเครือข่าย และปลายทางต้องตรงกัน",
            "ขั้นที่สอง ตรวจสอบ address อย่างละเอียด อย่าเชื่อเพียงเพราะคุณวางมันลงในช่องแล้ว",
            "ขั้นที่สาม ส่งจำนวนเล็กน้อยเพื่อทดสอบก่อนถ้าเป็นไปได้ หากการทดสอบสำเร็จค่อยส่งจำนวนจริง",
            "ขั้นที่สี่ ตรวจสอบธุรกรรมด้วย transaction ID หรือ TxID"
          ]
        },
        {
          "h": "TxID คืออะไร",
          "ps": [
            "TxID เปรียบได้กับเลขใบเสร็จของการโอน มันช่วยให้คุณตรวจสอบว่าธุรกรรมถูกบันทึกแล้ว อยู่ระหว่างรอ หรือยืนยันแล้วหรือยัง",
            "ผู้เริ่มต้นไม่จำเป็นต้องรู้ explorer ทุกตัวบนโลก แค่เข้าใจว่า TxID คือวิธีตรวจสอบสิ่งที่เกิดขึ้นก็พอ"
          ]
        },
        {
          "h": "ช้าลงจะปลอดภัยกว่า",
          "ps": [
            "ในโลกคริปโต ความเร็วอาจดูน่าตื่นเต้น แต่สำหรับการโอน ความช้ากลับมักปลอดภัยกว่า",
            "การอ่านชื่อเครือข่ายซ้ำอีกครั้งและการทดสอบด้วยจำนวนเล็กน้อยสามารถป้องกันความผิดพลาดที่ใหญ่กว่ามากได้"
          ]
        }
      ],
      "defs": [
        [
          "เครือข่าย",
          "ระบบบล็อกเชนที่สินทรัพย์กำลังเคลื่อนที่อยู่"
        ],
        [
          "การโอนทดลอง",
          "การส่งจำนวนเล็กน้อยก่อนเพื่อทดสอบ"
        ],
        [
          "TxID",
          "รหัสธุรกรรมที่ใช้ตรวจสอบการโอน"
        ],
        [
          "ตัวสำรวจบล็อกเชน",
          "เว็บไซต์หรือเครื่องมือที่ใช้ตรวจสอบบันทึกธุรกรรมบนบล็อกเชน"
        ]
      ],
      "example": "อลิซต้องการส่ง USDT เธอตรวจสอบ network ก่อน จากนั้นตรวจดู address ของบ็อบ ส่งเงินจำนวนน้อยเพื่อทดสอบ และเช็ก TxID ก่อนส่งจำนวนเต็ม",
      "mistakes": [
        "ส่งจำนวนทั้งหมดทันที",
        "ไม่สนใจ network เพราะชื่อโทเคนดูคุ้นเคย",
        "คิดว่าที่อยู่ที่วางมาแล้วต้องถูกต้องเสมอ"
      ],
      "faqs": [
        [
          "ทำไม network จึงสำคัญมาก",
          "เพราะชื่อสินทรัพย์เดียวกันอาจมีอยู่บนหลายเครือข่าย และปลายทางต้องตรงกัน"
        ],
        [
          "ทำไมต้องส่งทดสอบก่อน",
          "เพราะช่วยลดต้นทุนของความผิดพลาด"
        ],
        [
          "หลังจากส่งแล้วควรทำอะไร",
          "ตรวจสอบ TxID เพื่อยืนยันสถานะของธุรกรรม"
        ]
      ],
      "checkpoints": [
        "ฉันสามารถบอก 4 ขั้นตอนของการโอนอย่างปลอดภัยได้",
        "ฉันรู้ว่าทำไมการทดสอบด้วยจำนวนเล็กน้อยจึงสำคัญ",
        "ฉันรู้ว่า TxID ใช้ทำอะไร"
      ],
      "quiz": [
        [
          "ก่อนส่งจำนวนจริงควรทำอะไร",
          "ตรวจ network ตรวจ address และควรส่ง test transfer ก่อน"
        ],
        [
          "TxID ช่วยอะไร",
          "ช่วยตรวจสอบธุรกรรมบนบันทึกของบล็อกเชน"
        ]
      ]
    },
    {
      "cat": "บทบาท",
      "title": "5 บทบาทของคริปโต",
      "intro": "คริปโตจะเข้าใจง่ายขึ้นมากเมื่อคุณเลิกถามแค่ว่า “ชื่ออะไร” แล้วเริ่มถามว่า “มันทำหน้าที่อะไร” สินทรัพย์หนึ่งอาจทำหน้าที่เหมือนเงินสดดิจิทัล อีกอันอาจเป็นสิทธิ์เข้าถึงหรือพลังในการโหวต",
      "sections": [
        {
          "h": "บทบาทสำคัญกว่าฉลาก",
          "ps": [
            "ผู้เริ่มต้นมักรู้สึกสับสนเพราะแต่ละโปรเจกต์มีชื่อ โลโก้ หรือคำโฆษณาใหม่อยู่เสมอ ชื่ออาจเปลี่ยนไป แต่บทบาทพื้นฐานมักจำแนกได้ง่ายกว่า",
            "นี่คือเหตุผลที่การเรียนแบบยึดบทบาทช่วยได้ เมื่อคุณเข้าใจว่าสินทรัพย์หรือโทเคนกำลังพยายามทำงานอะไร พื้นที่นี้จะอ่านออกได้ง่ายขึ้นมาก"
          ]
        },
        {
          "h": "5 หมวดหมู่ที่มีประโยชน์",
          "ps": [
            "การเงินแบบกระจายศูนย์ เข้าใจได้เหมือนฟังก์ชันทางการเงินที่ทำงานด้วยโค้ดและวอลเล็ตแทนเคาน์เตอร์ธนาคารแบบเดิม",
            "โทเคนยูทิลิตี้ token เข้าใจได้ง่ายเหมือนแต้ม สิทธิ์เข้าถึง หรือฟังก์ชันบริการในระบบนิเวศ",
            "โทเคนกำกับดูแล token ใกล้เคียงกับสิทธิ์ในการลงคะแนนในโปรโตคอลหรือชุมชน",
            "NFT เข้าใจได้ง่ายที่สุดว่าเป็นหลักฐานความเป็นเจ้าของของสินทรัพย์ดิจิทัลเฉพาะชิ้น",
            "สเตเบิลคอยน์ ใกล้เคียงกับเงินสดดิจิทัลที่ออกแบบให้มีมูลค่าใกล้ค่ามาตรฐานอ้างอิง"
          ]
        },
        {
          "h": "ทำไมเรื่องนี้จึงสำคัญ",
          "ps": [
            "หากคุณสับสนระหว่าง stablecoin กับ governance token หรือสับสนระหว่าง NFT กับ utility token คุณอาจเข้าใจทั้งกรณีการใช้งานและความเสี่ยงผิดไป",
            "การคิดแบบยึดบทบาทยังช่วยให้คุณเปรียบเทียบโปรเจกต์ได้ชัดเจนขึ้น แทนที่จะตามกระแส คุณสามารถถามได้ว่าโทเคนนี้พยายามแก้ปัญหาอะไร"
          ]
        },
        {
          "h": "คำถามที่ดีกว่าสำหรับผู้เริ่มต้น",
          "ps": [
            "แทนที่จะถามเพียงว่า “เหรียญนี้ดีไหม” ให้ถามว่า “โทเคนนี้มีไว้ทำอะไร ใครใช้ ทำไมมันถึงมีอยู่ และความเสี่ยงของบทบาทนั้นคืออะไร”",
            "คำถามเหล่านี้ไม่ได้รับประกันว่าการตัดสินใจจะสมบูรณ์แบบ แต่เป็นจุดเริ่มต้นที่ดีกว่าการเดาจากชื่อเพียงอย่างเดียว"
          ]
        }
      ],
      "example": "สเตเบิลคอยน์ ไม่ได้ทำหน้าที่เดียวกับ NFT อย่างหนึ่งเน้นการโอนมูลค่าที่ค่อนข้างคงที่ อีกอย่างหนึ่งแสดงความเป็นเจ้าของสินทรัพย์ดิจิทัลเฉพาะ",
      "mistakes": [
        "คิดว่าโทเคนทุกตัวแทบเหมือนกันหมด",
        "ดูราคาก่อนแล้วค่อยดูบทบาททีหลัง",
        "ไม่สนใจว่าโทเคนถูกใช้เพื่ออะไรจริงๆ"
      ],
      "faqs": [
        [
          "การเงินแบบกระจายศูนย์ เหมือนธนาคารหรือไม่",
          "ไม่เหมือนเสียทีเดียว มันอาจคล้ายหน้าที่ของธนาคาร แต่โครงสร้างและการคุ้มครองอาจแตกต่างกันมาก"
        ],
        [
          "NFT เป็นแค่รูปภาพหรือไม่",
          "คำตอบแบบเข้าใจง่ายคือไม่ แนวคิดที่สำคัญกว่าคือหลักฐานความเป็นเจ้าของ"
        ],
        [
          "ทำไม stablecoin ถึงได้รับความนิยม",
          "เพราะผู้ใช้จำนวนมากต้องการสินทรัพย์ดิจิทัลสำหรับการโอนและการตั้งราคาที่มีความผันผวนน้อยกว่าแบบวันต่อวัน"
        ]
      ],
      "checkpoints": [
        "ฉันอธิบาย การเงินแบบกระจายศูนย์ ด้วยคำง่ายๆ ได้",
        "ฉันอธิบายความต่างระหว่าง utility token และ governance token ได้",
        "ฉันเข้าใจว่าทำไมการคิดตามบทบาทจึงช่วยผู้เริ่มต้นได้"
      ],
      "quiz": [
        [
          "วิธีที่ง่ายที่สุดสำหรับผู้เริ่มต้นในการเข้าใจ stablecoin คืออะไร",
          "มองว่าเป็นเงินสดดิจิทัลที่ออกแบบให้มีมูลค่าใกล้ค่ามาตรฐานอ้างอิง"
        ],
        [
          "คำถามใดช่วยได้มากกว่าการถามแค่ชื่อโทเคน",
          "โทเคนนี้มีบทบาทอะไร"
        ]
      ]
    },
    {
      "cat": "โลกจริง",
      "title": "บทเรียนจากโลกจริง",
      "intro": "การศึกษาเรื่องคริปโตไม่ควรหยุดอยู่แค่คำจำกัดความ กรณีจริงช่วยให้เห็นว่าผู้เริ่มต้นมักสับสนตรงไหน ความผิดพลาดแบบใดเกิดซ้ำ และทำไมโครงสร้างจึงสำคัญกว่าสโลแกน",
      "sections": [
        {
          "h": "ทำไมตัวอย่างจริงจึงสำคัญ",
          "ps": [
            "ผู้คนเรียนรู้ได้เร็วขึ้นเมื่อเห็นว่าทฤษฎีเชื่อมกับโลกจริงอย่างไร แนวคิดอย่าง ‘เก็บ seed phrase เป็นความลับ’ จะมีความหมายมากขึ้นเมื่อคุณเห็นว่าการหลอกลวงทำงานอย่างไรจริงๆ",
            "ส่วนนี้ไม่ได้มีไว้เพื่อสร้างความกลัว แต่มีไว้เพื่อเชื่อมบทเรียนเข้ากับผลลัพธ์ที่เกิดขึ้นจริงในโลกความเป็นจริง"
          ]
        },
        {
          "h": "3 รูปแบบที่เกิดซ้ำ",
          "ps": [
            "การหลอกลวงแบบฟิชชิงมักหลอกให้ผู้ใช้เชื่อมวอลเล็ตหรือเปิดเผยข้อมูลกู้คืนที่สำคัญ",
            "ความล้มเหลวของ exchange เตือนเราว่าความสะดวกไม่ได้เท่ากับ self-custody",
            "ความตึงเครียดของ stablecoin เตือนเราว่าคำว่า ‘stable’ เป็นเป้าหมายของการออกแบบ ไม่ใช่คำรับประกันสมบูรณ์ในทุกสถานการณ์"
          ]
        },
        {
          "h": "อ่านข่าวคริปโตอย่างไรให้ดีขึ้น",
          "ps": [
            "เมื่อคุณเห็นพาดหัวข่าว ให้ถามว่า นี่คือปัญหาของวอลเล็ต ปัญหาของการดูแลสินทรัพย์ ปัญหาจากการหลอกลวง หรือปัญหาจากการออกแบบผลิตภัณฑ์กันแน่",
            "นิสัยง่ายๆ นี้ช่วยให้คุณเรียนรู้จากเหตุการณ์ แทนที่จะตอบสนองด้วยความกลัวหรือกระแสเพียงอย่างเดียว"
          ]
        },
        {
          "h": "หนึ่งประโยคที่ควรจำ",
          "ps": [
            "กฎง่ายๆ สำหรับผู้เริ่มต้นมาจากคำแนะนำผู้บริโภคอย่างเป็นทางการ: หากใครก็ตามกดดันให้คุณจ่ายด้วยคริปโตอย่างเร่งด่วน นั่นคือสัญญาณเตือนที่ร้ายแรง",
            "การศึกษาที่แท้จริงคือการเรียนรู้ภาษาของความเสี่ยงก่อนที่คุณจะต้องเผชิญมันในยามวิกฤต"
          ]
        }
      ],
      "example": "แทนที่จะอ่านข่าว exchange ล่มแล้วสรุปว่า ‘คริปโตล้มเหลว’ ให้ถามว่าจริงๆ แล้วส่วนใดล้มเหลว: การดูแลสินทรัพย์ การกำกับดูแล การควบคุมการฉ้อโกง หรือการจัดการความเสี่ยง",
      "mistakes": [
        "มองทุกข่าวลบว่าเป็นปัญหาแบบเดียวกันหมด",
        "มองข้ามคำเตือนจากหน่วยงานทางการเพราะข้อความนั้นดูเร่งด่วน",
        "คิดว่าชื่อผลิตภัณฑ์เพียงอย่างเดียวพิสูจน์ได้ว่าปลอดภัย"
      ],
      "faqs": [
        [
          "ทำไมแพลตฟอร์มการเรียนรู้จึงควรมีข่าวและแหล่งอ้างอิงจริง",
          "เพราะกรณีจริงช่วยให้แนวคิดนามธรรมจดจำและประเมินได้ง่ายขึ้น"
        ],
        [
          "กรณีจริงหมายความว่าอุตสาหกรรมทั้งหมดเสียหายหรือไม่",
          "ไม่ กรณีเหล่านั้นมักชี้ไปที่ความเสี่ยงเฉพาะประเภทที่ควรทำความเข้าใจให้ชัด"
        ],
        [
          "ควรมองหาอะไรเป็นอย่างแรกเมื่อเจอพาดหัวข่าวที่น่ากลัว",
          "มองหาโครงสร้างของปัญหา เช่น การหลอกลวง การดูแลสินทรัพย์ การใช้เลเวอเรจ หรือจุดอ่อนด้านการออกแบบ"
        ]
      ],
      "checkpoints": [
        "ฉันสามารถบอกได้อย่างน้อยสามรูปแบบความเสี่ยงที่พบบ่อย",
        "ฉันรู้ว่าคำว่า ‘stable’ ไม่ได้หมายถึงไร้ความเสี่ยง",
        "ฉันเข้าใจว่าทำไมคำเตือนจากหน่วยงานทางการจึงสำคัญ"
      ],
      "quiz": [
        [
          "คำถามแรกที่มีประโยชน์เมื่ออ่านพาดหัวข่าวความล้มเหลวของคริปโตคืออะไร",
          "ส่วนใดของโครงสร้างที่ล้มเหลว"
        ],
        [
          "ทำไมความเร่งด่วนจึงเป็นสัญญาณเตือนในกลโกงหลายแบบ",
          "เพราะแรงกดดันมักถูกใช้เพื่อไม่ให้ผู้คนมีเวลาตรวจสอบรายละเอียด"
        ]
      ],
      "sources": [
        [
          "คำเตือนผู้บริโภคของ FTC",
          "คำพูดที่ควรจำ: “Only scammers demand payment in cryptocurrency.”",
          "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"
        ],
        [
          "Reuters เกี่ยวกับ FTX",
          "บทความของ Reuters ช่วยให้ผู้เริ่มต้นเห็นความต่างระหว่างความเสี่ยงจากการดูแลสินทรัพย์และความผันผวนของราคา",
          "https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"
        ]
      ]
    }
  ],
  "id": [
    {
      "cat": "Dasar",
      "title": "Blockchain, dijelaskan sederhana",
      "intro": "Blockchain adalah buku besar bersama yang diverifikasi oleh banyak pihak. Bukan satu perusahaan yang memegang satu-satunya catatan, melainkan banyak komputer yang memeriksa catatan yang sama bersama-sama.",
      "sections": [
        {
          "h": "Mulai dari ide paling mudah",
          "ps": [
            "Bayangkan sebuah buku catatan yang mencatat siapa mengirim nilai kepada siapa. Dalam sistem bank, bank mengendalikan buku catatan itu. Dalam jaringan blockchain, banyak peserta membantu menjaga catatan yang sama tetap jujur.",
            "Ini tidak berarti semua blockchain bekerja persis sama. Inti yang perlu dipahami pemula adalah verifikasi bersama. Ketika banyak pihak mengonfirmasi catatan yang sama, jauh lebih sulit bagi satu pihak untuk mengubah riwayat sendirian."
          ]
        },
        {
          "h": "Mengapa pemula perlu peduli",
          "ps": [
            "Banyak orang membeli kripto tanpa memahami apa yang membuat blockchain berguna. Mereka lebih dulu melihat harga, logo, atau aplikasi. Tetapi tanpa memahami sistem pencatatan di bawahnya, sulit menilai risiko, keamanan, dan kepemilikan.",
            "Blockchain penting karena di sanalah transaksi, saldo, dan kepemilikan dicatat. Jika bagian ini jelas, dompet dan peran token juga menjadi lebih mudah dipahami."
          ]
        },
        {
          "h": "Blok, rantai, dan node",
          "ps": [
            "Transaksi dikumpulkan ke dalam blok. Setiap blok baru menunjuk ke blok sebelumnya. Karena itulah disebut rantai blok atau blockchain.",
            "Node adalah komputer yang membantu membaca, menyimpan, atau memverifikasi buku besar. Pemula tidak perlu menghafal detail teknis terlebih dahulu. Cukup pahami bahwa banyak node membantu melindungi catatan."
          ]
        },
        {
          "h": "Apa yang membuatnya kuat",
          "ps": [
            "Blockchain dapat mengurangi ketergantungan pada satu basis data pusat. Itulah sebabnya teknologi ini digunakan untuk aset digital dan catatan kepemilikan.",
            "Namun struktur yang sama juga membuat kesalahan sulit dibalik. Jika Anda mengirim aset ke tempat yang salah, belum tentu ada dukungan pelanggan pusat yang selalu bisa membatalkannya. Karena itu, pahami struktur lebih dulu daripada mengejar kecepatan."
          ]
        }
      ],
      "defs": [
        [
          "Buku besar",
          "Catatan transaksi atau saldo."
        ],
        [
          "Node",
          "Komputer yang membantu menyimpan atau memverifikasi catatan."
        ],
        [
          "Blok",
          "Sekelompok transaksi yang ditambahkan ke rantai."
        ],
        [
          "Rantai",
          "Hubungan berurutan antara satu blok dan blok berikutnya."
        ]
      ],
      "example": "Transfer bank biasanya bergantung pada basis data bank. Transfer blockchain bergantung pada catatan bersama milik jaringan.",
      "mistakes": [
        "Mengira blockchain berarti aman mutlak dalam setiap situasi.",
        "Menganggap setiap transaksi bisa dibalik seperti pembayaran kartu.",
        "Menganggap blockchain sebagai istilah misterius, bukan sistem pencatatan."
      ],
      "faqs": [
        [
          "Apakah satu perusahaan bisa mengubah blockchain sendirian?",
          "Pada blockchain publik, biasanya satu pihak tidak bisa mengubah seluruh catatan bersama sendirian."
        ],
        [
          "Mengapa blockchain disebut transparan?",
          "Karena catatan transaksi sering dapat diperiksa secara terbuka melalui explorer, meskipun nama asli tidak selalu terlihat."
        ],
        [
          "Apakah saya harus paham coding dulu?",
          "Tidak. Pemula hanya perlu memahami gagasan besarnya lebih dulu: catatan bersama, verifikasi bersama, dan riwayat yang sulit diubah."
        ]
      ],
      "checkpoints": [
        "Saya bisa menjelaskan blockchain sebagai buku besar bersama.",
        "Saya mengerti mengapa verifikasi bersama itu penting.",
        "Saya tahu mengapa transaksi yang sudah terkonfirmasi bisa sulit dibalik."
      ],
      "quiz": [
        [
          "Apa definisi blockchain yang paling sederhana untuk pemula?",
          "Buku besar bersama yang diverifikasi oleh banyak pihak."
        ],
        [
          "Mengapa pemula harus memahami struktur blockchain?",
          "Karena di sanalah kepemilikan, saldo, dan transaksi dicatat."
        ]
      ]
    },
    {
      "cat": "Akses",
      "title": "Wallet, dijelaskan sederhana",
      "intro": "Wallet bukan terutama kotak tempat menyimpan koin. Wallet adalah alat yang mengelola kunci untuk mengakses dan mengendalikan aset digital yang tercatat di blockchain.",
      "sections": [
        {
          "h": "Kesalahpahaman terbesar pemula",
          "ps": [
            "Banyak orang membayangkan wallet seperti dompet fisik dengan uang tunai di dalamnya. Gambaran itu mudah dipahami, tetapi tidak sepenuhnya tepat.",
            "Aset Anda dicatat di blockchain. Wallet membantu Anda membuktikan kontrol atas aset itu. Karena itu, wallet lebih mirip pengelola kunci daripada wadah koin."
          ]
        },
        {
          "h": "Address, private key, dan seed phrase",
          "ps": [
            "Address wallet adalah tempat untuk menerima aset. Address boleh dibagikan.",
            "Kunci privat memberi kontrol. Ini tidak boleh dibagikan.",
            "Frasa pemulihan adalah cadangan pemulihan untuk memulihkan wallet. Jika orang lain mendapat seed phrase Anda, mereka mungkin bisa mengambil aset Anda."
          ]
        },
        {
          "h": "Custodial vs self-custody",
          "ps": [
            "Jika exchange atau layanan lain memegang kunci untuk Anda, itu disebut custodial. Rasanya nyaman, tetapi Anda bergantung pada keamanan dan keputusan platform itu.",
            "Jika Anda memegang kunci sendiri, itu disebut self-custody. Anda memiliki lebih banyak kontrol, tetapi juga lebih banyak tanggung jawab. Pemula perlu memahami keduanya sebelum memilih."
          ]
        },
        {
          "h": "Mengapa wallet penting dalam praktik",
          "ps": [
            "Pengetahuan tentang wallet bukan hanya teori teknis. Ini memengaruhi cara Anda menerima, mengirim, menyimpan, mencadangkan, dan melindungi aset digital.",
            "Banyak kerugian pemula terjadi karena seseorang membagikan seed phrase, mempercayai pesan dukungan palsu, atau menyetujui sesuatu tanpa memahami apa yang dilakukan wallet."
          ]
        }
      ],
      "defs": [
        [
          "Address wallet",
          "Address publik untuk menerima aset."
        ],
        [
          "Kunci privat",
          "Kunci rahasia yang mengendalikan akses."
        ],
        [
          "Frasa pemulihan",
          "Frasa cadangan untuk memulihkan wallet."
        ],
        [
          "Wallet custodial",
          "Wallet di mana layanan memegang kunci untuk Anda."
        ]
      ],
      "example": "Bayangkan address seperti alamat kotak surat, dan private key seperti kunci rahasia untuk membuka kotak itu.",
      "mistakes": [
        "Membagikan seed phrase kepada “dukungan pelanggan”.",
        "Menyimpan seed phrase hanya dalam folder tangkapan layar yang berisiko.",
        "Mengira akun exchange dan wallet self-custody bekerja dengan cara yang sama."
      ],
      "faqs": [
        [
          "Bolehkah saya membagikan address wallet?",
          "Ya. Address memang digunakan untuk menerima dana."
        ],
        [
          "Bolehkah saya membagikan private key atau seed phrase?",
          "Tidak. Siapa pun yang memilikinya bisa mendapatkan kontrol atas wallet Anda."
        ],
        [
          "Apakah self-custody selalu lebih baik?",
          "Self-custody memberi kontrol lebih besar, tetapi juga tanggung jawab yang lebih besar atas keamanan dan cadangan."
        ]
      ],
      "checkpoints": [
        "Saya tahu perbedaan antara address dan private key.",
        "Saya tahu mengapa seed phrase harus tetap rahasia.",
        "Saya memahami perbedaan antara custodial dan self-custody."
      ],
      "quiz": [
        [
          "Apa yang aman untuk dibagikan?",
          "Address wallet Anda."
        ],
        [
          "Apa yang tidak boleh dibagikan?",
          "Kunci privat atau seed phrase Anda."
        ]
      ]
    },
    {
      "cat": "Keamanan",
      "title": "Transfer kripto yang aman",
      "intro": "Transfer kripto tidak harus terasa menakutkan, tetapi membutuhkan kebiasaan keamanan yang dapat diulang. Daftar periksa paling sederhana adalah: network, address, test transfer, lalu verifikasi TxID.",
      "sections": [
        {
          "h": "Mengapa orang membuat kesalahan transfer",
          "ps": [
            "Pemula sering terburu-buru. Mereka menganggap address yang ditempel sudah benar, mengabaikan network, atau mengirim jumlah penuh sebelum mencoba lebih dulu.",
            "Masalahnya, transfer blockchain sering sulit dibalik. Itulah sebabnya kebiasaan aman lebih penting daripada rasa percaya diri."
          ]
        },
        {
          "h": "Kebiasaan 4 langkah",
          "ps": [
            "Pertama, pastikan network-nya. Beberapa aset bergerak di beberapa network, jadi tujuan yang benar sangat penting.",
            "Kedua, periksa address dengan cermat. Jangan percaya buta hanya karena address itu sudah ditempel ke kolom.",
            "Ketiga, kirim test transfer kecil bila memungkinkan. Jika test berhasil, baru kirim jumlah yang lebih besar.",
            "Keempat, verifikasi transfer dengan transaction ID, sering disebut TxID atau hash."
          ]
        },
        {
          "h": "Apa itu TxID?",
          "ps": [
            "TxID seperti nomor tanda terima untuk transfer. Ini membantu Anda memeriksa apakah jaringan sudah mencatat transaksi dan apakah transaksi masih menunggu atau sudah terkonfirmasi.",
            "Pemula tidak perlu mengenal semua explorer. Cukup pahami bahwa TxID memberi cara untuk memeriksa apa yang terjadi."
          ]
        },
        {
          "h": "Pelan itu aman",
          "ps": [
            "Dalam kripto, kecepatan sering terasa menarik. Tetapi untuk transfer, pelan biasanya lebih aman daripada cepat.",
            "Membaca nama network sekali lagi dan menguji jumlah kecil lebih dulu bisa mencegah kesalahan yang jauh lebih besar nanti."
          ]
        }
      ],
      "defs": [
        [
          "Jaringan",
          "Sistem blockchain tempat aset bergerak."
        ],
        [
          "Transfer uji",
          "Jumlah kecil yang dikirim lebih dulu untuk memastikan semuanya benar."
        ],
        [
          "TxID",
          "Pengenal transaksi untuk memverifikasi transfer."
        ],
        [
          "Penjelajah blockchain",
          "Situs atau alat untuk memeriksa catatan transaksi blockchain."
        ]
      ],
      "example": "Alice ingin mengirim USDT. Ia memeriksa network lebih dulu, lalu memeriksa address Bob, mengirim test kecil, dan memverifikasi TxID sebelum mengirim jumlah penuh.",
      "mistakes": [
        "Langsung mengirim jumlah penuh.",
        "Mengabaikan network karena nama token terlihat familiar.",
        "Menganggap address yang ditempel pasti benar."
      ],
      "faqs": [
        [
          "Mengapa network sangat penting?",
          "Karena nama aset yang sama bisa ada di beberapa network, dan tujuan harus cocok."
        ],
        [
          "Mengapa harus mengirim test kecil dulu?",
          "Karena itu mengurangi biaya jika terjadi kesalahan."
        ],
        [
          "Apa yang harus dilakukan setelah mengirim?",
          "Periksa TxID agar Anda bisa mengonfirmasi status transaksi."
        ]
      ],
      "checkpoints": [
        "Saya bisa menyebutkan 4 langkah transfer aman.",
        "Saya tahu mengapa test transfer penting.",
        "Saya tahu untuk apa TxID digunakan."
      ],
      "quiz": [
        [
          "Apa yang dilakukan sebelum transfer penuh?",
          "Memeriksa network, memeriksa address, dan idealnya mengirim test transfer kecil."
        ],
        [
          "TxID membantu Anda melakukan apa?",
          "Memverifikasi transaksi pada catatan blockchain."
        ]
      ]
    },
    {
      "cat": "Peran",
      "title": "5 peran crypto",
      "intro": "Crypto menjadi jauh lebih mudah dipahami ketika Anda berhenti hanya bertanya “Apa namanya?” dan mulai bertanya “Apa perannya?” Satu token bisa berfungsi seperti uang tunai digital, yang lain seperti akses, dan yang lain seperti hak suara.",
      "sections": [
        {
          "h": "Peran lebih penting daripada label",
          "ps": [
            "Pemula sering merasa tersesat karena setiap proyek punya nama, logo, atau slogan baru. Namanya bisa berubah, tetapi peran dasarnya sering lebih mudah diklasifikasikan.",
            "Itulah mengapa pembelajaran berbasis peran membantu. Ketika Anda memahami pekerjaan apa yang dicoba dilakukan oleh suatu token atau aset, ruang ini menjadi lebih mudah dibaca."
          ]
        },
        {
          "h": "Lima kategori yang berguna",
          "ps": [
            "Keuangan terdesentralisasi dapat dipahami seperti fungsi perbankan yang dilakukan dengan kode dan wallet, bukan di loket bank tradisional.",
            "Token utilitas token paling mudah dipahami seperti poin, akses, atau fungsi layanan di dalam suatu ekosistem.",
            "Token tata kelola token paling dekat dengan hak suara dalam protokol atau komunitas.",
            "NFT paling mudah dipahami sebagai bukti kepemilikan untuk item digital tertentu.",
            "Stablecoin paling dekat dengan uang tunai digital yang dirancang agar tetap dekat dengan nilai acuan."
          ]
        },
        {
          "h": "Mengapa ini penting",
          "ps": [
            "Jika Anda mencampuradukkan stablecoin dengan governance token, atau NFT dengan utility token, Anda bisa salah memahami baik kegunaan maupun risikonya.",
            "Cara berpikir berbasis peran juga membantu Anda membandingkan proyek dengan lebih jelas. Alih-alih mengikuti hype, Anda bisa bertanya masalah apa yang ingin diselesaikan token tersebut."
          ]
        },
        {
          "h": "Pertanyaan pemula yang lebih baik",
          "ps": [
            "Daripada hanya bertanya “Apakah koin ini bagus?” tanyakan: “Token ini untuk apa? Siapa yang memakainya? Mengapa token ini ada? Risiko apa yang datang bersama peran itu?”",
            "Pertanyaan-pertanyaan ini tidak menjamin keputusan yang sempurna, tetapi memberi titik awal yang jauh lebih baik daripada menebak dari nama saja."
          ]
        }
      ],
      "example": "Stablecoin tidak mencoba melakukan pekerjaan yang sama dengan NFT. Yang satu bertujuan untuk transfer nilai yang stabil, sedangkan yang lain mewakili kepemilikan item digital tertentu.",
      "mistakes": [
        "Mengira semua token pada dasarnya sama.",
        "Melihat harga lebih dulu dan peran belakangan.",
        "Mengabaikan apa sebenarnya kegunaan token itu."
      ],
      "faqs": [
        [
          "Apakah Keuangan terdesentralisasi sama dengan bank?",
          "Tidak persis. Keuangan terdesentralisasi bisa menyerupai fungsi bank, tetapi struktur dan perlindungannya bisa sangat berbeda."
        ],
        [
          "Apakah NFT hanya gambar?",
          "Jawaban ramah pemula adalah tidak. Konsep yang lebih penting adalah bukti kepemilikan."
        ],
        [
          "Mengapa stablecoin populer?",
          "Karena banyak pengguna menginginkan aset digital untuk transfer dan penetapan harga dengan volatilitas harian yang lebih rendah."
        ]
      ],
      "checkpoints": [
        "Saya bisa menjelaskan Keuangan terdesentralisasi dengan kata-kata sederhana.",
        "Saya bisa menjelaskan perbedaan utility token dan governance token.",
        "Saya tahu mengapa berpikir berdasarkan peran membantu pemula."
      ],
      "quiz": [
        [
          "Apa cara termudah bagi pemula untuk memahami stablecoin?",
          "Sebagai uang tunai digital yang dirancang tetap dekat dengan nilai acuan."
        ],
        [
          "Pertanyaan apa yang lebih membantu daripada hanya menanyakan nama token?",
          "Peran apa yang dimainkan token itu?"
        ]
      ]
    },
    {
      "cat": "Realitas",
      "title": "Pelajaran dunia nyata",
      "intro": "Pendidikan crypto tidak boleh berhenti pada definisi. Kasus nyata menunjukkan di mana pemula biasanya bingung, jenis kesalahan apa yang berulang, dan mengapa struktur lebih penting daripada slogan.",
      "sections": [
        {
          "h": "Mengapa contoh nyata penting",
          "ps": [
            "Orang belajar lebih cepat ketika mereka melihat di mana teori bertemu dengan kenyataan. Konsep seperti ‘simpan seed phrase Anda secara pribadi’ menjadi lebih bermakna ketika Anda memahami bagaimana penipuan benar-benar bekerja.",
            "Bagian ini tidak dibuat untuk menakut-nakuti. Bagian ini dibuat untuk menghubungkan pelajaran dengan konsekuensi dunia nyata."
          ]
        },
        {
          "h": "Tiga pola yang berulang",
          "ps": [
            "Penipuan phishing sering menipu pengguna agar menghubungkan wallet atau mengungkapkan data pemulihan yang sensitif.",
            "Kegagalan exchange mengingatkan pengguna bahwa kenyamanan tidak sama dengan self-custody.",
            "Tekanan pada stablecoin mengingatkan pengguna bahwa kata ‘stable’ menggambarkan tujuan desain, bukan jaminan sempurna dalam setiap situasi."
          ]
        },
        {
          "h": "Cara membaca berita crypto dengan lebih baik",
          "ps": [
            "Saat Anda melihat berita utama, tanyakan: Apakah ini masalah wallet, masalah custody, masalah penipuan, atau masalah desain produk?",
            "Kebiasaan sederhana ini membantu Anda belajar dari peristiwa, bukan sekadar bereaksi terhadap rasa takut atau hype."
          ]
        },
        {
          "h": "Satu kutipan yang layak diingat",
          "ps": [
            "Aturan baik untuk pemula datang dari panduan konsumen resmi: jika seseorang menuntut pembayaran dengan crypto dengan tekanan atau urgensi, itu adalah tanda bahaya yang serius.",
            "Pendidikan yang baik berarti mempelajari bahasa risiko sebelum Anda membutuhkannya di tengah krisis."
          ]
        }
      ],
      "example": "Daripada membaca berita exchange runtuh sebagai ‘crypto gagal’, tanyakan bagian mana yang gagal: custody, tata kelola, kontrol penipuan, atau manajemen risiko.",
      "mistakes": [
        "Menganggap setiap berita negatif sebagai jenis masalah yang sama.",
        "Mengabaikan peringatan penipuan resmi hanya karena pesannya terdengar mendesak.",
        "Mengira nama produk saja sudah membuktikan keamanan."
      ],
      "faqs": [
        [
          "Mengapa memasukkan berita dan sumber ke dalam platform belajar?",
          "Karena kasus nyata membuat konsep abstrak lebih mudah diingat dan dinilai."
        ],
        [
          "Apakah kasus dunia nyata selalu berarti seluruh industri rusak?",
          "Tidak. Sering kali kasus itu menunjuk pada jenis risiko tertentu yang perlu dipahami dengan jelas."
        ],
        [
          "Apa yang harus saya cari terlebih dahulu dalam berita yang menakutkan?",
          "Cari struktur masalahnya: penipuan, custody, leverage, atau kelemahan desain."
        ]
      ],
      "checkpoints": [
        "Saya bisa menyebutkan setidaknya tiga pola risiko umum.",
        "Saya tahu bahwa ‘stable’ tidak berarti bebas risiko.",
        "Saya mengerti mengapa peringatan penipuan resmi itu penting."
      ],
      "quiz": [
        [
          "Apa pertanyaan pertama yang membantu saat membaca berita kegagalan crypto?",
          "Bagian struktur mana yang gagal?"
        ],
        [
          "Mengapa urgensi menjadi tanda bahaya dalam banyak penipuan?",
          "Karena tekanan sering dipakai agar orang tidak sempat memeriksa detail dengan hati-hati."
        ]
      ],
      "sources": [
        [
          "Peringatan konsumen FTC",
          "Kutipan penting: “Only scammers demand payment in cryptocurrency.”",
          "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"
        ],
        [
          "Reuters tentang FTX",
          "Liputan Reuters membantu pemula melihat perbedaan antara risiko custody dan sekadar pergerakan harga.",
          "https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"
        ]
      ]
    }
  ],
  "pt": [
    {
      "cat": "Base",
      "title": "Blockchain explicada de forma simples",
      "intro": "Blockchain é um livro-razão compartilhado. Em vez de uma única empresa manter o único registro, muitos computadores mantêm e verificam o mesmo registro juntos.",
      "sections": [
        {
          "h": "Comece pela ideia mais simples",
          "ps": [
            "Imagine um caderno que registra quem enviou valor para quem. Em um banco, o próprio banco controla esse caderno. Em uma rede blockchain, muitos participantes ajudam a manter o mesmo registro correto.",
            "Isso não significa que todas as blockchains funcionem da mesma forma. A ideia principal para iniciantes é a verificação compartilhada. Quando muitas partes confirmam o mesmo registro, fica muito mais difícil para um único agente alterar o histórico sozinho."
          ]
        },
        {
          "h": "Por que iniciantes devem se importar",
          "ps": [
            "Muitas pessoas compram cripto sem entender o que torna a blockchain útil. Elas veem primeiro preço, logo ou aplicativo. Mas, sem entender o sistema de registro por trás disso, fica difícil julgar risco, segurança e propriedade.",
            "A blockchain importa porque é a camada onde transações, saldos e propriedade são registrados. Quando essa parte fica clara, carteiras e papéis dos tokens também ficam mais fáceis de entender."
          ]
        },
        {
          "h": "Blocos, cadeia e nós",
          "ps": [
            "As transações são agrupadas em blocos. Cada novo bloco aponta para o bloco anterior. Por isso as pessoas chamam isso de uma cadeia de blocos.",
            "Um nó é simplesmente um computador que ajuda a ler, armazenar ou verificar o livro-razão. Iniciantes não precisam memorizar os detalhes técnicos primeiro. Basta entender que muitos nós ajudam a proteger o registro."
          ]
        },
        {
          "h": "O que dá força ao sistema",
          "ps": [
            "Uma blockchain pode reduzir a dependência de um único banco de dados central. É por isso que ela é usada para ativos digitais e registros de propriedade.",
            "Mas a mesma estrutura também faz com que erros sejam difíceis de reverter. Se você enviar algo para o lugar errado, pode não existir um suporte central capaz de desfazer tudo. Por isso, entender a estrutura vem antes da velocidade."
          ]
        }
      ],
      "defs": [
        [
          "Livro-razão",
          "Registro de transações ou saldos."
        ],
        [
          "Nó",
          "Computador que ajuda a manter ou verificar o registro."
        ],
        [
          "Bloco",
          "Grupo de transações adicionado à cadeia."
        ],
        [
          "Cadeia",
          "Ligação ordenada entre um bloco e o próximo."
        ]
      ],
      "example": "Uma transferência bancária normalmente depende do banco de dados do banco. Uma transferência em blockchain depende do registro compartilhado da rede.",
      "mistakes": [
        "Achar que blockchain significa segurança garantida em qualquer situação.",
        "Supor que toda transação pode ser revertida como um pagamento com cartão.",
        "Tratar blockchain como uma palavra misteriosa, e não como um sistema de registro."
      ],
      "faqs": [
        [
          "Uma empresa sozinha pode mudar a blockchain?",
          "Em uma blockchain pública, normalmente um único ator não consegue mudar sozinho todo o registro compartilhado."
        ],
        [
          "Por que a blockchain é chamada de transparente?",
          "Porque os registros de transação geralmente podem ser verificados abertamente com um explorer, mesmo que nomes reais nem sempre apareçam."
        ],
        [
          "Preciso entender programação primeiro?",
          "Não. Iniciantes só precisam entender primeiro a ideia central: registro compartilhado, verificação compartilhada e histórico mais difícil de alterar."
        ]
      ],
      "checkpoints": [
        "Consigo explicar blockchain como um livro-razão compartilhado.",
        "Entendo por que a verificação compartilhada é importante.",
        "Sei por que uma transação confirmada pode ser difícil de reverter."
      ],
      "quiz": [
        [
          "Qual é a definição mais simples de blockchain para iniciantes?",
          "Um livro-razão compartilhado verificado por muitas partes."
        ],
        [
          "Por que iniciantes devem entender a estrutura da blockchain?",
          "Porque é ali que propriedade, saldos e transações são registrados."
        ]
      ]
    },
    {
      "cat": "Acesso",
      "title": "Carteiras explicadas de forma simples",
      "intro": "Uma carteira não é principalmente uma caixa que guarda moedas. Ela é a ferramenta que gerencia as chaves que permitem acessar e controlar ativos digitais registrados em uma blockchain.",
      "sections": [
        {
          "h": "O maior mal-entendido do iniciante",
          "ps": [
            "Muitas pessoas imaginam a carteira como se as moedas estivessem dentro dela, como dinheiro em uma carteira física. Essa imagem é compreensível, mas incompleta.",
            "Seus ativos são registrados na blockchain. A carteira ajuda você a provar controle sobre esses ativos. Por isso, muitos educadores dizem que uma carteira está mais próxima de um gerenciador de chaves do que de um recipiente para moedas."
          ]
        },
        {
          "h": "Endereço, chave privada e seed phrase",
          "ps": [
            "Um endereço de carteira é o local para receber ativos. Você pode compartilhar o endereço.",
            "Uma chave privada é o que dá controle. Ela nunca deve ser compartilhada.",
            "Uma seed phrase é um backup de recuperação que pode restaurar a carteira. Se alguém obtiver sua seed phrase, poderá tomar seus ativos."
          ]
        },
        {
          "h": "Custodial versus self-custody",
          "ps": [
            "Se uma exchange ou serviço controla as chaves por você, isso é custódia. Pode parecer conveniente, mas você depende da segurança e das decisões dessa plataforma.",
            "Se você controla as chaves por conta própria, isso é self-custody. Dá mais controle, mas também mais responsabilidade. Iniciantes devem entender os dois modelos antes de escolher o que faz sentido para sua situação."
          ]
        },
        {
          "h": "Por que carteiras importam na prática",
          "ps": [
            "Conhecimento sobre carteira não é só teoria técnica. Ele afeta como você recebe, envia, guarda, faz backup e protege ativos digitais.",
            "Muitas perdas de iniciantes acontecem porque alguém compartilhou a seed phrase, confiou em uma mensagem falsa de suporte ou aprovou algo sem entender o que a carteira estava fazendo."
          ]
        }
      ],
      "defs": [
        [
          "Endereço da carteira",
          "Endereço público para receber ativos."
        ],
        [
          "Chave privada",
          "Chave secreta que controla o acesso."
        ],
        [
          "Frase de recuperação",
          "Frase de backup usada para recuperar a carteira."
        ],
        [
          "Carteira custodial",
          "Carteira em que um serviço controla as chaves por você."
        ]
      ],
      "example": "Pense no endereço como o endereço de uma caixa de correio. Pense na chave privada como a chave secreta para abrir essa caixa.",
      "mistakes": [
        "Compartilhar a seed phrase com um suposto “suporte”.",
        "Guardar a seed phrase apenas em uma pasta de capturas de tela arriscada.",
        "Assumir que uma conta em exchange e uma carteira self-custody funcionam da mesma forma."
      ],
      "faqs": [
        [
          "Posso compartilhar meu endereço de carteira?",
          "Sim. O endereço serve para receber fundos."
        ],
        [
          "Posso compartilhar minha chave privada ou seed phrase?",
          "Não. Qualquer pessoa com elas pode obter controle sobre a carteira."
        ],
        [
          "Self-custody é sempre melhor?",
          "Ela oferece mais controle direto, mas também mais responsabilidade pela segurança e pelo backup."
        ]
      ],
      "checkpoints": [
        "Sei a diferença entre endereço e chave privada.",
        "Sei por que a seed phrase deve permanecer privada.",
        "Entendo a diferença entre custódia e self-custody."
      ],
      "quiz": [
        [
          "O que pode ser compartilhado com segurança?",
          "Seu endereço de carteira."
        ],
        [
          "O que nunca deve ser compartilhado?",
          "Sua chave privada ou sua seed phrase."
        ]
      ]
    },
    {
      "cat": "Segurança",
      "title": "Transferências seguras de cripto",
      "intro": "Transferências de cripto não precisam parecer assustadoras, mas exigem um hábito de segurança repetível. A lista mais simples é: rede, endereço, teste pequeno e verificação por TxID.",
      "sections": [
        {
          "h": "Por que as pessoas erram em transferências",
          "ps": [
            "Iniciantes costumam agir rápido demais. Assumem que o endereço colado está correto, ignoram a rede ou enviam o valor total antes de testar.",
            "O problema é que transferências em blockchain podem ser difíceis de reverter. Por isso, o hábito seguro importa mais do que a confiança."
          ]
        },
        {
          "h": "O hábito de 4 passos",
          "ps": [
            "Primeiro, confirme a rede. Alguns ativos circulam em várias redes, e o destino correto faz diferença.",
            "Segundo, confira o endereço com cuidado. Não confie cegamente só porque ele já foi colado no campo.",
            "Terceiro, envie um pequeno valor de teste quando possível. Se o teste funcionar, envie então o valor maior.",
            "Quarto, verifique a transferência com o identificador da transação, geralmente chamado de TxID ou hash."
          ]
        },
        {
          "h": "O que é um TxID?",
          "ps": [
            "Um TxID é como o número de um comprovante da transferência. Ele ajuda você a verificar se a rede registrou a transação e se ela está pendente ou confirmada.",
            "Iniciantes não precisam conhecer todos os explorers do mundo. Basta entender que um TxID oferece uma forma de conferir o que aconteceu."
          ]
        },
        {
          "h": "Devagar é mais seguro",
          "ps": [
            "Em cripto, velocidade muitas vezes parece empolgante. Mas, para transferências, devagar costuma ser mais seguro do que rápido.",
            "Ler o nome da rede mais uma vez e testar um valor pequeno primeiro pode evitar um erro muito maior depois."
          ]
        }
      ],
      "defs": [
        [
          "Rede",
          "O sistema blockchain pelo qual o ativo está se movendo."
        ],
        [
          "Transferência de teste",
          "Um valor pequeno enviado primeiro para confirmar que tudo está correto."
        ],
        [
          "TxID",
          "Identificador da transação usado para verificar a transferência."
        ],
        [
          "Explorador de blockchain",
          "Site ou ferramenta usada para consultar registros de transações na blockchain."
        ]
      ],
      "example": "Alice quer enviar USDT. Ela primeiro confirma a rede, depois verifica o endereço de Bob, envia um pequeno teste e confirma o TxID antes de mandar o valor total.",
      "mistakes": [
        "Enviar o valor total primeiro.",
        "Ignorar a rede porque o nome do token parece familiar.",
        "Assumir que um endereço colado está automaticamente correto."
      ],
      "faqs": [
        [
          "Por que a rede é tão importante?",
          "Porque o mesmo nome de ativo pode existir em redes diferentes, e o destino precisa corresponder."
        ],
        [
          "Por que enviar um pequeno teste primeiro?",
          "Porque isso reduz o custo de um erro."
        ],
        [
          "O que devo fazer depois de enviar?",
          "Verifique o TxID para confirmar o status da transação."
        ]
      ],
      "checkpoints": [
        "Consigo nomear os 4 passos de uma transferência segura.",
        "Sei por que a transferência de teste é importante.",
        "Sei para que serve um TxID."
      ],
      "quiz": [
        [
          "O que vem antes da transferência completa?",
          "Verificar a rede, verificar o endereço e, idealmente, enviar um pequeno teste."
        ],
        [
          "O que um TxID ajuda você a fazer?",
          "Verificar a transação no registro da blockchain."
        ]
      ]
    },
    {
      "cat": "Papéis",
      "title": "Os 5 papéis da cripto",
      "intro": "Cripto fica muito mais fácil quando você para de perguntar apenas “Qual é o nome?” e passa a perguntar “Qual papel isso desempenha?”. Um token pode funcionar como dinheiro digital, outro como acesso e outro como poder de voto.",
      "sections": [
        {
          "h": "O papel importa mais que o rótulo",
          "ps": [
            "Iniciantes costumam se perder porque cada projeto tem um nome, logotipo ou slogan novo. O nome muda, mas o papel subjacente costuma ser mais fácil de classificar.",
            "É por isso que aprender por papel ajuda. Quando você entende qual trabalho um token ou ativo tenta realizar, esse espaço fica muito mais legível."
          ]
        },
        {
          "h": "Cinco categorias úteis para iniciantes",
          "ps": [
            "Finanças descentralizadas pode ser entendido como funções bancárias realizadas com código e carteiras, em vez de um balcão bancário tradicional.",
            "Token de utilidade tokens são mais fáceis de entender como pontos, acesso ou funções de serviço dentro de um ecossistema.",
            "Token de governança tokens se aproximam mais de direitos de voto em um protocolo ou comunidade.",
            "NFTs são mais fáceis de entender como prova de propriedade de um item digital específico.",
            "Stablecoins são mais próximas de dinheiro digital projetado para ficar perto de um valor de referência."
          ]
        },
        {
          "h": "Por que isso importa",
          "ps": [
            "Se você confundir uma stablecoin com um governance token, ou um NFT com um utility token, poderá entender errado tanto o caso de uso quanto o risco.",
            "Pensar por papel também ajuda a comparar projetos com mais clareza. Em vez de seguir o hype, você pode perguntar qual problema o token deveria resolver."
          ]
        },
        {
          "h": "Uma pergunta melhor para iniciantes",
          "ps": [
            "Em vez de perguntar apenas “Essa moeda é boa?”, pergunte: “Para que esse token serve? Quem o usa? Por que ele existe? Que risco vem com esse papel?”",
            "Essas perguntas não garantem decisões perfeitas, mas criam um ponto de partida muito melhor do que adivinhar pelo nome."
          ]
        }
      ],
      "example": "Uma stablecoin não está tentando fazer o mesmo trabalho que um NFT. Uma busca transferência de valor mais estável. A outra representa propriedade de um item digital específico.",
      "mistakes": [
        "Achar que todo token é basicamente igual.",
        "Olhar primeiro para o preço e depois para o papel.",
        "Ignorar para que um token realmente é usado."
      ],
      "faqs": [
        [
          "Finanças descentralizadas é igual a um banco?",
          "Não exatamente. Pode se parecer com funções bancárias, mas a estrutura e as proteções podem ser muito diferentes."
        ],
        [
          "NFTs são apenas imagens?",
          "A resposta amigável para iniciantes é não. O conceito mais importante é prova de propriedade."
        ],
        [
          "Por que as stablecoins são populares?",
          "Porque muitos usuários querem um ativo digital desenhado para transferências e precificação com menos volatilidade no dia a dia."
        ]
      ],
      "checkpoints": [
        "Consigo explicar Finanças descentralizadas com palavras simples.",
        "Consigo descrever a diferença entre utility token e governance token.",
        "Sei por que pensar por papel ajuda iniciantes."
      ],
      "quiz": [
        [
          "Qual é a maneira mais fácil para um iniciante entender uma stablecoin?",
          "Como dinheiro digital projetado para ficar perto de um valor de referência."
        ],
        [
          "Que pergunta ajuda mais do que perguntar apenas o nome de um token?",
          "Que papel ele desempenha?"
        ]
      ]
    },
    {
      "cat": "Realidade",
      "title": "Lições do mundo real",
      "intro": "A educação em cripto não deve parar nas definições. Casos reais mostram onde iniciantes se confundem, que erros se repetem e por que a estrutura importa mais do que slogans.",
      "sections": [
        {
          "h": "Por que exemplos importam",
          "ps": [
            "As pessoas aprendem mais rápido quando veem onde a teoria encontra a realidade. Um conceito como ‘mantenha sua seed phrase privada’ faz mais sentido quando você entende como os golpes realmente funcionam.",
            "Esta seção não existe para criar medo. Ela existe para conectar as lições a consequências do mundo real."
          ]
        },
        {
          "h": "Três padrões repetidos",
          "ps": [
            "Golpes de phishing frequentemente enganam usuários para conectar uma carteira ou revelar dados sensíveis de recuperação.",
            "Falhas de exchanges lembram que conveniência não é a mesma coisa que self-custody.",
            "Estresse com stablecoins lembra que ‘stable’ descreve uma meta de design, e não uma garantia perfeita em todos os cenários."
          ]
        },
        {
          "h": "Como ler melhor notícias de cripto",
          "ps": [
            "Quando você vir uma manchete, pergunte: isso foi um problema de carteira, de custódia, de golpe ou de design do produto?",
            "Esse hábito simples ajuda você a aprender com eventos em vez de reagir apenas com medo ou hype."
          ]
        },
        {
          "h": "Uma frase que vale lembrar",
          "ps": [
            "Uma boa regra para iniciantes vem de orientações oficiais ao consumidor: se alguém exigir pagamento em cripto com pressão ou urgência, isso é um sinal de alerta sério.",
            "Educação real significa aprender a linguagem do risco antes de precisar dela em uma crise."
          ]
        }
      ],
      "example": "Em vez de ler uma manchete sobre colapso de exchange como ‘a cripto falhou’, pergunte qual parte falhou: custódia, governança, controles contra fraude ou gestão de risco.",
      "mistakes": [
        "Tratar toda manchete negativa como o mesmo tipo de problema.",
        "Ignorar alertas oficiais sobre golpes porque a mensagem parece urgente.",
        "Pensar que o nome de um produto, sozinho, prova segurança."
      ],
      "faqs": [
        [
          "Por que incluir notícias e fontes em uma plataforma de aprendizado?",
          "Porque casos reais tornam conceitos abstratos mais fáceis de lembrar e avaliar."
        ],
        [
          "Casos do mundo real sempre significam que toda a indústria está quebrada?",
          "Não. Muitas vezes eles apontam para um tipo específico de risco que precisa ser entendido com clareza."
        ],
        [
          "O que devo procurar primeiro em uma manchete assustadora?",
          "Procure a estrutura do problema: golpe, custódia, alavancagem ou fraqueza de design."
        ]
      ],
      "checkpoints": [
        "Consigo nomear pelo menos três padrões comuns de risco.",
        "Sei que ‘stable’ não significa sem risco.",
        "Entendo por que alertas oficiais sobre golpes importam."
      ],
      "quiz": [
        [
          "Qual é uma primeira pergunta útil ao ler uma manchete sobre uma falha em cripto?",
          "Que parte da estrutura falhou?"
        ],
        [
          "Por que a urgência é um sinal de alerta em muitos golpes?",
          "Porque a pressão é usada para impedir que as pessoas verifiquem os detalhes com calma."
        ]
      ],
      "sources": [
        [
          "Alerta ao consumidor da FTC",
          "Citação para lembrar: “Only scammers demand payment in cryptocurrency.”",
          "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"
        ],
        [
          "Reuters sobre a FTX",
          "A cobertura da Reuters ajuda iniciantes a ver como risco de custódia e falha de exchange diferem de simples movimentos de preço.",
          "https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"
        ]
      ]
    }
  ],
  "es": [
    {
      "cat": "Base",
      "title": "Blockchain explicada de forma simple",
      "intro": "Blockchain es un libro mayor compartido. En lugar de que una sola empresa guarde el único registro, muchas computadoras mantienen y verifican el mismo registro juntas.",
      "sections": [
        {
          "h": "Empieza con la idea más simple",
          "ps": [
            "Imagina un cuaderno que registra quién envió valor a quién. En un banco, el banco controla ese cuaderno. En una red blockchain, muchos participantes ayudan a mantener correcto el mismo registro.",
            "Esto no significa que todas las blockchains funcionen exactamente igual. La idea principal para principiantes es la verificación compartida. Cuando muchas partes confirman el mismo registro, resulta mucho más difícil que un solo actor cambie la historia por su cuenta."
          ]
        },
        {
          "h": "Por qué a los principiantes les debería importar",
          "ps": [
            "Muchas personas compran cripto sin entender qué hace útil a la blockchain. Primero ven precios, logos o aplicaciones. Pero si no entiendes el sistema de registro que hay debajo, es difícil juzgar riesgo, seguridad y propiedad.",
            "La blockchain importa porque es la capa donde se registran las transacciones, los saldos y la propiedad. Cuando esa parte se entiende, las carteras y los roles de los tokens también resultan más claros."
          ]
        },
        {
          "h": "Bloques, cadena y nodos",
          "ps": [
            "Las transacciones se agrupan en bloques. Cada bloque nuevo apunta al bloque anterior. Por eso se habla de una cadena de bloques.",
            "Un nodo es simplemente una computadora que ayuda a leer, almacenar o verificar el libro mayor. Los principiantes no necesitan memorizar primero todos los detalles técnicos. Basta con entender que muchos nodos ayudan a proteger el registro."
          ]
        },
        {
          "h": "Qué la hace poderosa",
          "ps": [
            "Una blockchain puede reducir la dependencia de una sola base de datos central. Por eso se usa para activos digitales y registros de propiedad.",
            "Pero esa misma estructura también hace que los errores sean difíciles de revertir. Si envías algo al lugar equivocado, puede que no exista un servicio central que siempre pueda deshacerlo. Por eso, entender la estructura viene antes que la velocidad."
          ]
        }
      ],
      "defs": [
        [
          "Libro mayor",
          "Registro de transacciones o saldos."
        ],
        [
          "Nodo",
          "Computadora que ayuda a conservar o verificar el registro."
        ],
        [
          "Bloque",
          "Grupo de transacciones añadido a la cadena."
        ],
        [
          "Cadena",
          "Enlace ordenado entre un bloque y el siguiente."
        ]
      ],
      "example": "Una transferencia bancaria normalmente depende de la base de datos del banco. Una transferencia en blockchain depende del registro compartido de la red.",
      "mistakes": [
        "Pensar que blockchain significa seguridad garantizada en cualquier situación.",
        "Suponer que toda transacción puede revertirse como un pago con tarjeta.",
        "Tratar blockchain como una palabra misteriosa y no como un sistema de registro."
      ],
      "faqs": [
        [
          "¿Una sola empresa puede cambiar la blockchain por sí sola?",
          "En una blockchain pública, normalmente un solo actor no puede cambiar por sí solo todo el registro compartido."
        ],
        [
          "¿Por qué se dice que la blockchain es transparente?",
          "Porque a menudo los registros de transacciones pueden revisarse abiertamente con un explorer, aunque no siempre aparezcan nombres reales."
        ],
        [
          "¿Necesito saber programar primero?",
          "No. Los principiantes solo necesitan entender primero la idea general: registro compartido, verificación compartida e historial más difícil de alterar."
        ]
      ],
      "checkpoints": [
        "Puedo explicar la blockchain como un libro mayor compartido.",
        "Entiendo por qué la verificación compartida es importante.",
        "Sé por qué una transacción confirmada puede ser difícil de revertir."
      ],
      "quiz": [
        [
          "¿Cuál es la definición más simple de blockchain para un principiante?",
          "Un libro mayor compartido verificado por muchas partes."
        ],
        [
          "¿Por qué los principiantes deberían entender la estructura de la blockchain?",
          "Porque allí se registran la propiedad, los saldos y las transacciones."
        ]
      ]
    },
    {
      "cat": "Acceso",
      "title": "Carteras explicadas de forma simple",
      "intro": "Una cartera no es principalmente una caja donde se guardan monedas. Es la herramienta que gestiona las claves que te permiten acceder y controlar activos digitales registrados en una blockchain.",
      "sections": [
        {
          "h": "El mayor malentendido del principiante",
          "ps": [
            "Muchas personas imaginan la cartera como si las monedas estuvieran dentro, como dinero en una cartera física. Esa imagen es comprensible, pero incompleta.",
            "Tus activos están registrados en la blockchain. La cartera te ayuda a demostrar control sobre esos activos. Por eso, muchos educadores dicen que una cartera se parece más a un gestor de claves que a un contenedor de monedas."
          ]
        },
        {
          "h": "Dirección, clave privada y seed phrase",
          "ps": [
            "La dirección de la cartera es el lugar donde recibes activos. La dirección puede compartirse.",
            "La clave privada es la que da control. Nunca debe compartirse.",
            "La seed phrase es un respaldo de recuperación que puede restaurar la cartera. Si otra persona obtiene tu seed phrase, podría llevarse tus activos."
          ]
        },
        {
          "h": "Custodial frente a self-custody",
          "ps": [
            "Si un exchange o servicio controla las claves por ti, eso es custodia. Puede sentirse cómodo, pero dependes de la seguridad y de las decisiones de esa plataforma.",
            "Si tú controlas tus propias claves, eso es self-custody. Te da más control, pero también más responsabilidad. Los principiantes deberían entender ambos modelos antes de elegir."
          ]
        },
        {
          "h": "Por qué las carteras importan en la práctica",
          "ps": [
            "El conocimiento sobre carteras no es solo teoría técnica. Afecta cómo recibes, envías, guardas, respaldas y proteges tus activos digitales.",
            "Muchas pérdidas de principiantes ocurren porque alguien compartió una seed phrase, confió en un mensaje falso de soporte o aprobó algo sin entender lo que la cartera estaba haciendo."
          ]
        }
      ],
      "defs": [
        [
          "Dirección de la cartera",
          "La dirección pública para recibir activos."
        ],
        [
          "Clave privada",
          "La clave secreta que controla el acceso."
        ],
        [
          "Frase semilla",
          "Frase de respaldo para recuperar la cartera."
        ],
        [
          "Cartera custodial",
          "Cartera en la que un servicio controla las claves por ti."
        ]
      ],
      "example": "Piensa en la dirección como la dirección de un buzón y en la clave privada como la llave secreta para abrir ese buzón.",
      "mistakes": [
        "Compartir la seed phrase con un supuesto “soporte”.",
        "Guardar la seed phrase solo en una carpeta de capturas de pantalla arriesgada.",
        "Suponer que una cuenta de exchange y una cartera self-custody funcionan igual."
      ],
      "faqs": [
        [
          "¿Puedo compartir la dirección de mi cartera?",
          "Sí. La dirección sirve para recibir fondos."
        ],
        [
          "¿Puedo compartir mi clave privada o seed phrase?",
          "No. Cualquiera que las tenga puede ganar control sobre la cartera."
        ],
        [
          "¿Siempre es mejor self-custody?",
          "Ofrece más control directo, pero también más responsabilidad en seguridad y respaldo."
        ]
      ],
      "checkpoints": [
        "Conozco la diferencia entre dirección y clave privada.",
        "Sé por qué la seed phrase debe mantenerse privada.",
        "Entiendo la diferencia entre custodia y self-custody."
      ],
      "quiz": [
        [
          "¿Qué se puede compartir con seguridad?",
          "La dirección de tu cartera."
        ],
        [
          "¿Qué nunca debe compartirse?",
          "Tu clave privada o tu seed phrase."
        ]
      ]
    },
    {
      "cat": "Seguridad",
      "title": "Transferencias seguras de cripto",
      "intro": "Las transferencias de cripto no tienen por qué parecer aterradoras, pero sí requieren un hábito de seguridad que puedas repetir. La lista más simple es: red, dirección, transferencia de prueba y verificación con TxID.",
      "sections": [
        {
          "h": "Por qué la gente comete errores al transferir",
          "ps": [
            "Los principiantes suelen ir demasiado rápido. Asumen que la dirección pegada es correcta, ignoran la red o envían el monto completo antes de probar.",
            "El problema es que las transferencias en blockchain suelen ser difíciles de revertir. Por eso el hábito seguro importa más que la confianza."
          ]
        },
        {
          "h": "El hábito de 4 pasos",
          "ps": [
            "Primero, confirma la red. Algunos activos se mueven por varias redes, y el destino correcto importa.",
            "Segundo, revisa la dirección con cuidado. No confíes ciegamente solo porque ya está pegada en el campo.",
            "Tercero, envía una pequeña transferencia de prueba cuando sea posible. Si la prueba funciona, entonces envía la cantidad mayor.",
            "Cuarto, verifica la transferencia con el identificador de transacción, normalmente llamado TxID o hash."
          ]
        },
        {
          "h": "¿Qué es un TxID?",
          "ps": [
            "Un TxID es como el número de un recibo de la transferencia. Te ayuda a confirmar si la red registró la transacción y si sigue pendiente o ya fue confirmada.",
            "Los principiantes no necesitan aprender todos los explorers. Basta con entender que el TxID te da una forma de comprobar qué ocurrió."
          ]
        },
        {
          "h": "Ir despacio es más seguro",
          "ps": [
            "En cripto, la velocidad suele parecer emocionante. Pero para las transferencias, ir despacio suele ser más seguro que ir rápido.",
            "Leer el nombre de la red una vez más y probar con una pequeña cantidad primero puede evitar un error mucho mayor después."
          ]
        }
      ],
      "defs": [
        [
          "Red",
          "El sistema blockchain por el que se mueve el activo."
        ],
        [
          "Transferencia de prueba",
          "Una pequeña cantidad enviada primero para comprobar que todo funciona."
        ],
        [
          "TxID",
          "Identificador de transacción usado para verificar la transferencia."
        ],
        [
          "Explorador de blockchain",
          "Sitio o herramienta para consultar los registros de transacciones en la blockchain."
        ]
      ],
      "example": "Alicia quiere enviar USDT. Primero confirma la red, luego revisa la dirección de Bob, envía una pequeña prueba y verifica el TxID antes de mandar el importe completo.",
      "mistakes": [
        "Enviar primero el monto completo.",
        "Ignorar la red porque el nombre del token parece familiar.",
        "Suponer que una dirección pegada es automáticamente correcta."
      ],
      "faqs": [
        [
          "¿Por qué es tan importante la red?",
          "Porque el mismo nombre de activo puede existir en distintas redes, y el destino debe coincidir."
        ],
        [
          "¿Por qué enviar primero una pequeña prueba?",
          "Porque reduce el costo de un error."
        ],
        [
          "¿Qué debo hacer después de enviar?",
          "Comprobar el TxID para confirmar el estado de la transacción."
        ]
      ],
      "checkpoints": [
        "Puedo nombrar los 4 pasos de una transferencia segura.",
        "Sé por qué una transferencia de prueba es importante.",
        "Sé para qué sirve un TxID."
      ],
      "quiz": [
        [
          "¿Qué viene antes de una transferencia completa?",
          "Comprobar la red, revisar la dirección e idealmente enviar una pequeña prueba."
        ],
        [
          "¿Qué te ayuda a hacer un TxID?",
          "Verificar la transacción en el registro de la blockchain."
        ]
      ]
    },
    {
      "cat": "Roles",
      "title": "Los 5 roles de la cripto",
      "intro": "La cripto se vuelve mucho más fácil cuando dejas de preguntar solo “¿Cómo se llama?” y empiezas a preguntar “¿Qué papel cumple?”. Un token puede funcionar como efectivo digital, otro como acceso y otro como poder de voto.",
      "sections": [
        {
          "h": "El rol supera a la etiqueta",
          "ps": [
            "Los principiantes a menudo se sienten perdidos porque cada proyecto tiene un nombre, logo o eslogan nuevo. El nombre cambia, pero el rol subyacente suele ser más fácil de clasificar.",
            "Por eso ayuda aprender por roles. Cuando entiendes qué trabajo intenta hacer un token o activo, este espacio se vuelve más legible."
          ]
        },
        {
          "h": "Cinco categorías útiles para principiantes",
          "ps": [
            "Finanzas descentralizadas puede entenderse como funciones bancarias realizadas con código y carteras en lugar de una ventanilla bancaria tradicional.",
            "Los utility tokens son más fáciles de entender como puntos, acceso o funciones de servicio dentro de un ecosistema.",
            "Los governance tokens se parecen más a derechos de voto dentro de un protocolo o comunidad.",
            "Los NFT se entienden mejor como prueba de propiedad de un elemento digital específico.",
            "Las stablecoins son lo más cercano a efectivo digital diseñado para mantenerse cerca de un valor de referencia."
          ]
        },
        {
          "h": "Por qué esto importa",
          "ps": [
            "Si confundes una stablecoin con un governance token, o un NFT con un utility token, puedes malinterpretar tanto el caso de uso como el riesgo.",
            "Pensar por roles también te ayuda a comparar proyectos con más claridad. En lugar de seguir el hype, puedes preguntar qué problema se supone que resuelve el token."
          ]
        },
        {
          "h": "Una mejor pregunta para principiantes",
          "ps": [
            "En vez de preguntar solo “¿Esta moneda es buena?”, pregunta: “¿Para qué sirve este token? ¿Quién lo usa? ¿Por qué existe? ¿Qué riesgo viene con ese papel?”",
            "Estas preguntas no garantizan decisiones perfectas, pero crean un punto de partida mucho mejor que adivinar solo por el nombre."
          ]
        }
      ],
      "example": "Una stablecoin no intenta hacer el mismo trabajo que un NFT. Una busca transferencia de valor estable. La otra representa la propiedad de un elemento digital específico.",
      "mistakes": [
        "Pensar que todos los tokens son básicamente iguales.",
        "Mirar primero el precio y el rol después.",
        "Ignorar para qué se usa realmente un token."
      ],
      "faqs": [
        [
          "¿Finanzas descentralizadas es lo mismo que un banco?",
          "No exactamente. Puede parecerse a funciones bancarias, pero la estructura y las protecciones pueden ser muy distintas."
        ],
        [
          "¿Los NFT son solo imágenes?",
          "La respuesta amigable para principiantes es no. El concepto más importante es la prueba de propiedad."
        ],
        [
          "¿Por qué son populares las stablecoins?",
          "Porque muchos usuarios quieren un activo digital diseñado para transferencias y precios con menos volatilidad diaria."
        ]
      ],
      "checkpoints": [
        "Puedo explicar Finanzas descentralizadas con palabras simples.",
        "Puedo describir la diferencia entre un utility token y un governance token.",
        "Sé por qué pensar por roles ayuda a los principiantes."
      ],
      "quiz": [
        [
          "¿Cuál es la forma más sencilla para un principiante de entender una stablecoin?",
          "Como efectivo digital diseñado para mantenerse cerca de un valor de referencia."
        ],
        [
          "¿Qué pregunta ayuda más que preguntar solo por el nombre de un token?",
          "¿Qué papel cumple?"
        ]
      ]
    },
    {
      "cat": "Realidad",
      "title": "Lecciones del mundo real",
      "intro": "La educación sobre cripto no debería detenerse en las definiciones. Los casos reales muestran dónde se confunden los principiantes, qué errores se repiten y por qué la estructura importa más que los eslóganes.",
      "sections": [
        {
          "h": "Por qué importan los ejemplos",
          "ps": [
            "Las personas aprenden más rápido cuando ven dónde la teoría se encuentra con la realidad. Una idea como ‘mantén privada tu seed phrase’ cobra más sentido cuando entiendes cómo funcionan realmente las estafas.",
            "Esta sección no existe para crear miedo. Existe para conectar las lecciones con consecuencias del mundo real."
          ]
        },
        {
          "h": "Tres patrones repetidos",
          "ps": [
            "Las estafas de phishing suelen engañar a los usuarios para que conecten una cartera o revelen datos sensibles de recuperación.",
            "Los fallos de exchanges recuerdan a los usuarios que la comodidad no es lo mismo que self-custody.",
            "La presión sobre las stablecoins recuerda que ‘stable’ describe una meta de diseño, no una garantía perfecta en todos los escenarios."
          ]
        },
        {
          "h": "Cómo leer mejor las noticias de cripto",
          "ps": [
            "Cuando veas un titular, pregunta: ¿fue un problema de cartera, de custodia, de estafa o de diseño del producto?",
            "Ese hábito sencillo te ayuda a aprender de los eventos en lugar de reaccionar solo con miedo o hype."
          ]
        },
        {
          "h": "Una frase que vale la pena recordar",
          "ps": [
            "Una buena regla para principiantes viene de la orientación oficial al consumidor: si alguien exige pago en cripto con presión o urgencia, eso es una señal de alerta seria.",
            "La educación real significa aprender el lenguaje del riesgo antes de necesitarlo en medio de una crisis."
          ]
        }
      ],
      "example": "En lugar de leer un titular sobre el colapso de un exchange como ‘la cripto falló’, pregunta qué parte falló: custodia, gobernanza, controles contra fraude o gestión del riesgo.",
      "mistakes": [
        "Tratar todos los titulares negativos como el mismo tipo de problema.",
        "Ignorar advertencias oficiales sobre estafas porque el mensaje suena urgente.",
        "Pensar que el nombre de un producto por sí solo demuestra seguridad."
      ],
      "faqs": [
        [
          "¿Por qué incluir noticias y fuentes en una plataforma de aprendizaje?",
          "Porque los casos reales hacen que los conceptos abstractos sean más fáciles de recordar y evaluar."
        ],
        [
          "¿Los casos reales significan siempre que toda la industria está rota?",
          "No. A menudo señalan un tipo específico de riesgo que debe entenderse con claridad."
        ],
        [
          "¿Qué debería buscar primero en un titular alarmante?",
          "Busca la estructura del problema: estafa, custodia, apalancamiento o debilidad de diseño."
        ]
      ],
      "checkpoints": [
        "Puedo nombrar al menos tres patrones comunes de riesgo.",
        "Sé que ‘stable’ no significa libre de riesgo.",
        "Entiendo por qué importan las advertencias oficiales sobre estafas."
      ],
      "quiz": [
        [
          "¿Cuál es una primera pregunta útil al leer un titular sobre un fallo en cripto?",
          "¿Qué parte de la estructura falló?"
        ],
        [
          "¿Por qué la urgencia es una señal de advertencia en muchas estafas?",
          "Porque la presión se usa para impedir que la gente revise los detalles con calma."
        ]
      ],
      "sources": [
        [
          "Advertencia al consumidor de la FTC",
          "Cita para recordar: “Only scammers demand payment in cryptocurrency.”",
          "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"
        ],
        [
          "Reuters sobre FTX",
          "La cobertura de Reuters ayuda a los principiantes a ver cómo el riesgo de custodia y el fallo de un exchange difieren de simples movimientos de precio.",
          "https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"
        ]
      ]
    }
  ]
};
const glossaryOverrides = {
    "br": [
    ["Endereço da carteira","Local público usado para receber ativos digitais."],
    ["Chave privada","Chave secreta usada para controlar a carteira."],
    ["Frase de recuperação","Conjunto de palavras de recuperação para restaurar a carteira. Nunca compartilhe."],
    ["Taxa de gas","Taxa de rede paga para processar a transação."],
    ["Chave pública","Chave criptográfica ligada à identidade da carteira e usada para ajudar a criar endereços."],
    ["Explorador de blockchain","Site ou ferramenta usada para ver transações e endereços na blockchain."],
    ["Contrato inteligente","Código na blockchain que executa automaticamente regras predefinidas."],
    ["Custódia","Quem controla as chaves e o acesso aos ativos."],
    ["Ponte entre blockchains","Ferramenta para mover ativos ou mensagens entre blockchains diferentes."]
  ],
    "tr": [
    ["Cüzdan adresi","Dijital varlık almak için kullanılan herkese açık konum."],
    ["Özel anahtar","Cüzdanı kontrol etmeyi sağlayan gizli anahtar."],
    ["Kurtarma ifadesi","Cüzdanı kurtarmak için kullanılan yedek kelime grubu. Asla paylaşmayın."],
    ["Gas ücreti","Bir işlemi işlemek için ödenen ağ ücreti."],
    ["Açık anahtar","Cüzdan kimliğine bağlı kriptografik anahtar; adres oluşturmaya yardımcı olur."],
    ["Blockchain gezgini","Blockchain üzerindeki işlemleri ve adresleri görüntülemek için kullanılan site veya araç."],
    ["Akıllı sözleşme","Önceden belirlenen kuralları otomatik uygulayan blockchain kodu."],
    ["Custody","Anahtarları ve varlıklara erişimi kimin kontrol ettiğini ifade eder."],
    ["Köprü","Farklı blockchain'ler arasında varlık veya mesaj taşımayı sağlayan araç."]
  ],
  "th": [
    ["ที่อยู่กระเป๋า","ตำแหน่งสาธารณะที่ใช้รับสินทรัพย์ดิจิทัล"],
    ["คีย์ส่วนตัว","คีย์ลับที่ใช้ควบคุมวอลเล็ต"],
    ["วลีสำรอง","ชุดคำสำรองสำหรับกู้คืนวอลเล็ต ห้ามแชร์เด็ดขาด"],
    ["ค่าธรรมเนียมแก๊ส","ค่าธรรมเนียมเครือข่ายที่ใช้ประมวลผลธุรกรรม"],
    ["กุญแจสาธารณะ","คีย์เข้ารหัสที่เชื่อมกับตัวตนของวอลเล็ต และใช้สร้างที่อยู่"],
    ["ตัวสำรวจบล็อกเชน","เว็บไซต์หรือเครื่องมือที่ใช้ดูธุรกรรมและที่อยู่บนบล็อกเชน"],
    ["สมาร์ตคอนแทรกต์","โค้ดบนบล็อกเชนที่ทำงานอัตโนมัติตามกฎที่ตั้งไว้"],
    ["การดูแลสินทรัพย์","ใครเป็นผู้ถือคีย์และควบคุมการเข้าถึงสินทรัพย์"],
    ["บริดจ์บล็อกเชน","เครื่องมือสำหรับย้ายสินทรัพย์หรือข้อมูลระหว่างบล็อกเชนต่าง ๆ"]
  ],
  "id": [
    ["Alamat dompet","Lokasi publik untuk menerima aset digital."],
    ["Kunci privat","Kunci rahasia untuk mengendalikan dompet."],
    ["Frasa pemulihan","Kumpulan kata cadangan untuk memulihkan dompet. Jangan pernah membagikannya."],
    ["Biaya gas","Biaya jaringan untuk memproses transaksi."],
    ["Kunci publik","Kunci kriptografi yang terhubung ke identitas dompet dan membantu membuat alamat."],
    ["Penjelajah blockchain","Situs atau alat untuk melihat transaksi dan alamat di blockchain."],
    ["Kontrak pintar","Kode di blockchain yang berjalan otomatis mengikuti aturan yang ditetapkan."],
    ["Kustodi","Siapa yang memegang kunci dan mengendalikan akses ke aset."],
    ["Jembatan blockchain","Alat untuk memindahkan aset atau pesan antar-blockchain yang berbeda."]
  ],
  "pt": [
    ["Endereço da carteira","Local público usado para receber ativos digitais."],
    ["Chave privada","Chave secreta usada para controlar a carteira."],
    ["Frase de recuperação","Conjunto de palavras de recuperação para restaurar a carteira. Nunca compartilhe."],
    ["Taxa de gas","Taxa de rede paga para processar a transação."],
    ["Chave pública","Chave criptográfica ligada à identidade da carteira e usada para ajudar a criar endereços."],
    ["Explorador de blockchain","Site ou ferramenta usada para ver transações e endereços na blockchain."],
    ["Contrato inteligente","Código na blockchain que executa automaticamente regras predefinidas."],
    ["Custódia","Quem controla as chaves e o acesso aos ativos."],
    ["Ponte entre blockchains","Ferramenta para mover ativos ou mensagens entre blockchains diferentes."]
  ],
  "es": [
    ["Dirección de la billetera","Ubicación pública usada para recibir activos digitales."],
    ["Clave privada","Clave secreta usada para controlar la billetera."],
    ["Frase semilla","Conjunto de palabras de respaldo para recuperar la billetera. Nunca la compartas."],
    ["Tarifa de gas","Tarifa de red pagada para procesar una transacción."],
    ["Clave pública","Clave criptográfica vinculada a la identidad de la billetera y usada para ayudar a crear direcciones."],
    ["Explorador de blockchain","Sitio o herramienta para ver transacciones y direcciones en la blockchain."],
    ["Contrato inteligente","Código en la blockchain que ejecuta automáticamente reglas predefinidas."],
    ["Custodia","Quién controla las claves y el acceso a los activos."],
    ["Puente entre blockchains","Herramienta para mover activos o mensajes entre blockchains diferentes."]
  ]
};
// sourceOverrides cleared — all languages now have full 28-item sets in sourceLibrary directly.
// BR is aliased to PT below. AR and VI are also in sourceLibrary.
const sourceOverrides = {};
// BR = clone of PT (28 items)
sourceLibrary.br = JSON.parse(JSON.stringify(sourceLibrary.pt));

function t(key){
  return (extraUi[currentLang] && extraUi[currentLang][key]) || (ui[currentLang] && ui[currentLang][key]) || (extraUi.en && extraUi.en[key]) || ui.en[key] || key;
}

function visualForLesson(i){
  if(i===0){
    return `
      <div class="visual">
        <div class="visual-title">${t('visual.title')}</div>
        <svg viewBox="0 0 760 220" width="100%" aria-hidden="true">
          <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#264163"/><stop offset="1" stop-color="#4a6789"/></linearGradient></defs>
          <rect x="300" y="70" width="160" height="80" rx="18" fill="url(#g1)"></rect>
          <text x="380" y="116" text-anchor="middle" fill="white" font-size="18" font-weight="700">${t('v.ledger')}</text>
          ${[[110,40],[110,180],[220,110],[540,110],[650,40],[650,180]].map(([x,y],n)=>`
            <line x1="${x+40}" y1="${y+40}" x2="380" y2="110" stroke="#b8b1a7" stroke-width="2"/>
            <circle cx="${x+40}" cy="${y+40}" r="36" fill="#eef3fa" stroke="#264163" stroke-width="2"/>
            <circle cx="${x+40}" cy="${y+40}" r="6" fill="#264163"/>
            <text x="${x+40}" y="${y+82}" text-anchor="middle" fill="#4b4640" font-size="13">${t('v.node')} ${n+1}</text>
          `).join('')}
        </svg>
      </div>`;
  }
  if(i===1){
    return `
      <div class="visual">
        <div class="visual-title">${t('visual.title')}</div>
        <svg viewBox="0 0 760 220" width="100%" aria-hidden="true">
          <rect x="40" y="54" width="140" height="112" rx="18" fill="#eef3fa" stroke="#264163"/>
          <rect x="220" y="54" width="140" height="112" rx="18" fill="#f6edd8" stroke="#98762f"/>
          <rect x="400" y="54" width="140" height="112" rx="18" fill="#ebf5ef" stroke="#2d6b49"/>
          <rect x="580" y="54" width="140" height="112" rx="18" fill="#fbf0ef" stroke="#8a3731"/>
          <text x="110" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#182a45">${t('v.wallet')}</text>
          <text x="110" y="118" text-anchor="middle" font-size="12" fill="#4b4640">${t('v.interface')}</text>
          <text x="290" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#7a5f1f">${t('v.address')}</text>
          <text x="290" y="118" text-anchor="middle" font-size="12" fill="#4b4640">${t('v.shareable')}</text>
          <text x="470" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#2d6b49">${t('v.private')}</text>
          <text x="470" y="118" text-anchor="middle" font-size="12" fill="#4b4640">${t('v.secret')}</text>
          <text x="650" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#8a3731">${t('v.seed')}</text>
          <text x="650" y="118" text-anchor="middle" font-size="12" fill="#4b4640">${t('v.backup')}</text>
          <line x1="180" y1="110" x2="220" y2="110" stroke="#b8b1a7" stroke-width="3"/>
          <line x1="360" y1="110" x2="400" y2="110" stroke="#b8b1a7" stroke-width="3"/>
          <line x1="540" y1="110" x2="580" y2="110" stroke="#b8b1a7" stroke-width="3"/>
        </svg>
      </div>`;
  }
  if(i===2){
    return `
      <div class="visual">
        <div class="visual-title">${t('visual.title')}</div>
        <svg viewBox="0 0 760 210" width="100%" aria-hidden="true">
          ${[t('v.network'),t('v.address'),t('v.test'),t('v.txid')].map((label,idx)=>{
            const x = 40 + idx*180;
            return `<rect x="${x}" y="62" width="130" height="84" rx="18" fill="${idx%2? '#f6edd8':'#eef3fa'}" stroke="${idx%2? '#98762f':'#264163'}"/>
            <text x="${x+65}" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#182a45">${label}</text>
            <text x="${x+65}" y="122" text-anchor="middle" font-size="12" fill="#4b4640">${idx===0?t('v.match'):idx===1?t('v.check'):idx===2?t('v.smallfirst'):t('v.verify')}</text>`;
          }).join('')}
          <g stroke="#b8b1a7" stroke-width="3" fill="none">
            <line x1="170" y1="104" x2="220" y2="104"/><line x1="350" y1="104" x2="400" y2="104"/><line x1="530" y1="104" x2="580" y2="104"/>
          </g>
        </svg>
      </div>`;
  }
  if(i===3){
    return `
      <div class="visual">
        <div class="visual-title">${t('visual.title')}</div>
        <div class="roles-grid">
          <div class="role-card"><div class="role-icon">🏦</div><div class="role-name">${t('v.defi')}</div><div class="role-sub">${t('v.bank')}</div><div class="role-desc">${t('v.roleDesc1')}</div></div>
          <div class="role-card"><div class="role-icon">🎟️</div><div class="role-name">${t('v.utility')}</div><div class="role-sub">${t('v.access')}</div><div class="role-desc">${t('v.roleDesc2')}</div></div>
          <div class="role-card"><div class="role-icon">🗳️</div><div class="role-name">${t('v.governance')}</div><div class="role-sub">${t('v.voting')}</div><div class="role-desc">${t('v.roleDesc3')}</div></div>
          <div class="role-card"><div class="role-icon">🧾</div><div class="role-name">${t('v.nft')}</div><div class="role-sub">${t('v.ownership')}</div><div class="role-desc">${t('v.roleDesc4')}</div></div>
          <div class="role-card"><div class="role-icon">💵</div><div class="role-name">${t('v.stablecoin')}</div><div class="role-sub">${t('v.cash')}</div><div class="role-desc">${t('v.roleDesc5')}</div></div>
        </div>
      </div>`;
  }
  return `
    <div class="visual">
      <div class="visual-title">${t('visual.title')}</div>
      <div class="risk-grid">
        <div class="risk-card warn"><div class="risk-head">${t('v.phishing')}</div><div class="risk-body">${t('v.riskDesc1')}</div></div>
        <div class="risk-card caution"><div class="risk-head">${t('v.custody')}</div><div class="risk-body">${t('v.riskDesc2')}</div></div>
        <div class="risk-card info"><div class="risk-head">${t('v.designrisk')}</div><div class="risk-body">${t('v.riskDesc3')}</div></div>
      </div>
    </div>`;
}

function renderQuiz(items){
  return `
    <h3>${t('quiz.title')}</h3>
    ${items.map(([q,a],idx)=>`
      <div class="quiz-card">
        <div class="quiz-q">${q}</div>
        <button class="complete-btn" onclick="this.nextElementSibling.style.display='block'; this.remove();">${t('quiz.reveal')}</button>
        <div class="quiz-a" style="display:none; margin-top:10px;">${a}</div>
      </div>
    `).join('')}
  `;
}

const RELATED_RESOURCE_LINK_TEXT = {
  en:{ open:'Open resource', sources:'Open Source Library', glossary:'Open glossary', checklist:'Open checklist', pdf:'Open PDF', ebook:'View eBook' },
  ko:{ open:'자료 열기', sources:'자료 라이브러리 열기', glossary:'용어 보기', checklist:'체크리스트 열기', pdf:'PDF 열기', ebook:'전자책 보기' },
  th:{ open:'เปิดแหล่งข้อมูล', sources:'เปิดคลังแหล่งข้อมูล', glossary:'ดูคำศัพท์', checklist:'เปิดเช็กลิสต์', pdf:'เปิด PDF', ebook:'ดู eBook' },
  id:{ open:'Buka resource', sources:'Buka perpustakaan sumber', glossary:'Buka glosarium', checklist:'Buka checklist', pdf:'Buka PDF', ebook:'Lihat eBook' },
  pt:{ open:'Abrir recurso', sources:'Abrir biblioteca de fontes', glossary:'Abrir glossário', checklist:'Abrir checklist', pdf:'Abrir PDF', ebook:'Ver eBook' },
  br:{ open:'Abrir recurso', sources:'Abrir biblioteca de fontes', glossary:'Abrir glossário', checklist:'Abrir checklist', pdf:'Abrir PDF', ebook:'Ver eBook' },
  tr:{ open:'Kaynağı aç', sources:'Kaynak kütüphanesini aç', glossary:'Sözlüğü aç', checklist:'Kontrol listesini aç', pdf:'PDF aç', ebook:'eBook görüntüle' },
  es:{ open:'Abrir recurso', sources:'Abrir biblioteca de fuentes', glossary:'Abrir glosario', checklist:'Abrir checklist', pdf:'Abrir PDF', ebook:'Ver eBook' },
  ar:{ open:'افتح المورد', sources:'افتح مكتبة المصادر', glossary:'افتح المسرد', checklist:'افتح قائمة التحقق', pdf:'افتح PDF', ebook:'عرض الكتاب' },
  vi:{ open:'Mở tài nguyên', sources:'Mở thư viện nguồn', glossary:'Mở thuật ngữ', checklist:'Mở checklist', pdf:'Mở PDF', ebook:'Xem eBook' },
  ha:{ open:'Bude albarkatu', sources:'Bude laburaren tushe', glossary:'Bude ƙamus', checklist:'Bude jerin dubawa', pdf:'Bude PDF', ebook:'Duba eBook' }
};

function getRelatedResourceKind(url){
  const value = String(url || '').toLowerCase();
  if(value.indexOf('sources') !== -1) return 'sources';
  if(value.indexOf('glossary') !== -1) return 'glossary';
  if(value.indexOf('checklists') !== -1) return 'checklist';
  if(value.indexOf('.pdf') !== -1 || value.indexOf('pdf') !== -1) return 'pdf';
  if(value.indexOf('ebook') !== -1 || value.indexOf('premium-pdf') !== -1) return 'ebook';
  return 'open';
}

function getRelatedResourceLinkText(url){
  const lang = typeof currentPageHeroLang === 'function' ? currentPageHeroLang() : normalizePageHeroLang(currentLang || 'en');
  const pack = RELATED_RESOURCE_LINK_TEXT[lang] || RELATED_RESOURCE_LINK_TEXT.en;
  const kind = getRelatedResourceKind(url);
  return pack[kind] || pack.open;
}

function renderLessonSourceCard(title, body, url){
  const safeTitle = escapePageHeroHtml(title || t('sources.title'));
  const safeBody = escapePageHeroHtml(body || '');
  const safeUrl = escapePageHeroHtml(url || '#');
  const safeLabel = escapePageHeroHtml(t('source.title'));
  const linkText = escapePageHeroHtml(getRelatedResourceLinkText(url));
  return `<div class="source-card related-resource-card">
    <span class="related-card-label">${safeLabel}</span>
    <strong class="related-card-title">${safeTitle}</strong>
    ${safeBody ? `<p class="related-card-desc">${safeBody}</p>` : ''}
    ${url ? `<a class="related-card-link" href="${safeUrl}" target="_blank" rel="noopener">${linkText}</a>` : ''}
  </div>`;
}

function renderLesson(i){
  const totalLessons = getTotalLessons();
  const lesson=(lessonOverrides[currentLang]&&lessonOverrides[currentLang][i]) || (lessons[currentLang]&&lessons[currentLang][i]) || lessons.en[i];
  const prevBtn = i===0 ? `<a class="nav-action" href="#" onclick="return false;" style="opacity:.45;pointer-events:none;">${t('btn.prev')}</a>` : `<a class="nav-action" href="#" onclick="showLesson(${i-1});return false;">${t('btn.prev')}</a>`;
  const nextBtn = i===totalLessons-1 ? `<a class="nav-action primary" href="#" onclick="showLesson(0);return false;">${t('btn.restart')}</a>` : `<a class="nav-action primary" href="#" onclick="showLesson(${i+1});return false;">${t('btn.next')}</a>`;
  const sectionHtml = lesson.sections.map(sec=>`<h2>${sec.h}</h2>${sec.ps.map(p=>`<p>${p}</p>`).join('')}`).join('');
  const defs = lesson.defs ? `<div class="def-grid">${lesson.defs.map(([term,body])=>`<div class="def-block"><div class="def-term">${term}</div><div class="def-body">${body}</div></div>`).join('')}</div>` : '';
  const example = lesson.example ? `<h3>${t('example.title')}</h3><div class="example-card"><div class="example-label">${t('example.title')}</div><div class="example-body">${lesson.example}</div></div>` : '';
  const guidedVisualsTop = typeof window.renderLessonGuidedVisualsTop === 'function' ? (window.renderLessonGuidedVisualsTop(i, lesson) || '') : '';
  const guidedVisualsLower = typeof window.renderLessonGuidedVisualsLower === 'function' ? (window.renderLessonGuidedVisualsLower(i, lesson) || '') : '';
  const mistakes = lesson.mistakes ? `<h3>${t('mistakes.title')}</h3>${lesson.mistakes.map(m=>`<div class="mistake-card"><div class="mistake-label">${t('mistakes.title')}</div><div class="mistake-body">${m}</div></div>`).join('')}` : '';
  const faqs = lesson.faqs ? `<h3>${t('faq.title')}</h3>${lesson.faqs.map(([q,a])=>`<div class="faq-item"><div class="faq-q">${q}</div><div class="faq-a">${a}</div></div>`).join('')}` : '';
  const checks = lesson.checkpoints ? `<h3>${t('check.title')}</h3><div class="checkpoint-list">${lesson.checkpoints.map(c=>`<div class="checkpoint-item"><div class="check-icon">✓</div><div>${c}</div></div>`).join('')}</div>` : '';
  const quiz = lesson.quiz ? renderQuiz(lesson.quiz) : '';
  const sources = lesson.sources ? `<section class="lesson-related-resources"><h3>${t('sources.title')}</h3><div class="lesson-related-grid">${lesson.sources.map(([title,body,url])=>renderLessonSourceCard(title, body, url)).join('')}</div></section>` : '';
  const transferFlow = i===2 ? `
    <ul class="steps-list">
      <li class="step-item"><div class="step-n">1</div><div><div class="step-title">${t('v.network')}</div><div class="step-desc">${t('v.networkDesc')}</div></div></li>
      <li class="step-item"><div class="step-n">2</div><div><div class="step-title">${t('v.address')}</div><div class="step-desc">${t('v.addressDesc')}</div></div></li>
      <li class="step-item"><div class="step-n">3</div><div><div class="step-title">${t('v.test')}</div><div class="step-desc">${t('v.testDesc')}</div></div></li>
      <li class="step-item"><div class="step-n">4</div><div><div class="step-title">${t('v.txid')}</div><div class="step-desc">${t('v.txidDesc')}</div></div></li>
    </ul>` : '';
  const purchaseFlow = i===5 ? `
    <ul class="steps-list">
      <li class="step-item"><div class="step-n">1</div><div><div class="step-title">${t('purchase.flow.choose.title')}</div><div class="step-desc">${t('purchase.flow.choose.desc')}</div></div></li>
      <li class="step-item"><div class="step-n">2</div><div><div class="step-title">${t('purchase.flow.kyc.title')}</div><div class="step-desc">${t('purchase.flow.kyc.desc')}</div></div></li>
      <li class="step-item"><div class="step-n">3</div><div><div class="step-title">${t('purchase.flow.small.title')}</div><div class="step-desc">${t('purchase.flow.small.desc')}</div></div></li>
      <li class="step-item"><div class="step-n">4</div><div><div class="step-title">${t('purchase.flow.custody.title')}</div><div class="step-desc">${t('purchase.flow.custody.desc')}</div></div></li>
    </ul>` : '';
  const completeClass = completed.has(i) ? 'active' : '';
  const hero = renderUnifiedPageHero(getLessonHeroConfig(i, lesson, totalLessons));
  return `
    ${hero}
    <div class="lesson-body">
      <div class="callout info"><strong>${t('callout.quick')}:</strong> ${lesson.sections[0].ps[0]}</div>
      ${visualForLesson(i)}
      ${guidedVisualsTop}
      ${sectionHtml}
      ${defs}
      ${transferFlow}
      ${purchaseFlow}
      ${example}
      ${guidedVisualsLower}
      ${mistakes}
      ${faqs}
      ${checks}
      ${quiz}
      ${sources}
      <div class="complete-row">
        <button class="complete-btn ${completeClass}" onclick="toggleComplete(${i}, this)">${completed.has(i) ? t('btn.completed') : t('btn.mark')}</button>
        <div class="helper-note">${t('complete.note')}</div>
      </div>
      <div class="lesson-nav-bar">${prevBtn}${nextBtn}</div>
    </div>`;
}

function renderAllLessons(){
  for(let i=0;i<getTotalLessons();i++){
    const panel = document.getElementById(`lesson${i}`);
    if(panel) panel.innerHTML = renderLesson(i);
  }
  document.getElementById('homePanel').innerHTML = renderHome();
  document.getElementById('startPanel').innerHTML = renderStartHere();
  document.getElementById('faqPanel').innerHTML = renderFAQPage();
  document.getElementById('safetyPanel').innerHTML = renderSafetyPage();
  document.getElementById('glossaryPanel').innerHTML = renderGlossary();
  document.getElementById('sourcesPanel').innerHTML = renderSources();
  if(typeof renderUpdateHistory === 'function') document.getElementById('updatesPanel').innerHTML = renderUpdateHistory();
}
function applyUI(){
  document.querySelectorAll('[data-i18n]').forEach(el=> el.innerHTML = t(el.dataset.i18n));
  document.getElementById('currentLangLabel').textContent = langLabels[currentLang] || currentLang.toUpperCase();
}
function setBreadcrumb(label){
  document.getElementById('breadcrumb').textContent = label || `${t('breadcrumb.prefix')} ${currentLesson+1} / ${getTotalLessons()}`;
}
function activateSidebar(page=null, lesson=null){
  document.querySelectorAll('.lesson-nav-item[data-page], .lesson-nav-item[data-lesson]').forEach(el=>el.classList.remove('active'));
  if(page){
    const el=document.querySelector(`.lesson-nav-item[data-page="${page}"]`);
    if(el) el.classList.add('active');
  }
  document.querySelectorAll('.lesson-nav-item[data-lesson]').forEach((el,idx)=>el.classList.toggle('done', completed.has(idx) && idx!==lesson));
  if(lesson!==null){
    const el=document.querySelector(`.lesson-nav-item[data-lesson="${lesson}"]`);
    if(el) el.classList.add('active');
  }
}
function showPage(page){
  currentPage = page;
  document.querySelectorAll('.lesson-content, .page-content').forEach(el=>el.classList.remove('active'));
  if(page==='home'){ document.getElementById('homePanel').classList.add('active'); setBreadcrumb(t('nav.home')); activateSidebar('home', null); }
  if(page==='start'){ document.getElementById('startPanel').classList.add('active'); setBreadcrumb(t('nav.start')); activateSidebar('start', null); }
  if(page==='faq'){ document.getElementById('faqPanel').classList.add('active'); setBreadcrumb(t('nav.faqPage')); activateSidebar('faq', null); }
  if(page==='safety'){ document.getElementById('safetyPanel').classList.add('active'); setBreadcrumb(t('nav.safety')); activateSidebar('safety', null); }
  if(page==='glossary'){ document.getElementById('glossaryPanel').classList.add('active'); setBreadcrumb(t('nav.glossary')); activateSidebar('glossary', null); }
  if(page==='sources'){ document.getElementById('sourcesPanel').classList.add('active'); setBreadcrumb(t('nav.sources')); activateSidebar('sources', null); }
  if(page==='updates'){ document.getElementById('updatesPanel').classList.add('active'); setBreadcrumb(t('nav.updates')); activateSidebar('updates', null); }
  updateProgress();
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
}
function showLesson(i){
  currentLesson = i;
  currentPage = `lesson${i}`;
  document.querySelectorAll('.lesson-content, .page-content').forEach(el=>el.classList.remove('active'));
  document.getElementById(`lesson${i}`).classList.add('active');
  activateSidebar(null, i);
  setBreadcrumb(`${t('breadcrumb.prefix')} ${currentLesson+1} / ${getTotalLessons()}`);
  updateProgress();
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
}
function updateProgress(){
  const dots=document.getElementById('progressDots'); dots.innerHTML='';
  const totalLessons = getTotalLessons();
  let completedCount = 0;
  completed.forEach(idx=>{ if(idx < totalLessons) completedCount++; });
  for(let i=0;i<totalLessons;i++){
    const d=document.createElement('div');
    d.className='progress-dot'+(completed.has(i)?' done':(i===currentLesson?' active':''));
    dots.appendChild(d);
  }
  document.getElementById('progressText').textContent = `${completedCount} / ${totalLessons} ${t('progress.done')}`;
}
function toggleComplete(i, btn){
  if(completed.has(i)) completed.delete(i); else completed.add(i);
  localStorage.setItem('cryptoAcademyCompleted', JSON.stringify([...completed]));
  btn.classList.toggle('active', completed.has(i));
  btn.textContent = completed.has(i) ? t('btn.completed') : t('btn.mark');
  updateProgress();
  document.querySelectorAll('.lesson-nav-item[data-lesson]').forEach((el,idx)=>el.classList.toggle('done', completed.has(idx) && idx!==currentLesson));
}
function setLang(lang){
  currentLang = lang;
  localStorage.setItem('cryptoAcademyLang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-item').forEach(el=>el.classList.toggle('active', el.dataset.lang===lang));
  applyUI();
  renderAllLessons();
  if(currentPage==='home'||currentPage==='glossary'||currentPage==='sources') showPage(currentPage); else showLesson(currentLesson);
}
const langToggle=document.getElementById('langToggle');
const langMenu=document.getElementById('langMenu');
langToggle.addEventListener('click', e=>{e.stopPropagation();langMenu.classList.toggle('open')});
document.addEventListener('click', ()=>langMenu.classList.remove('open'));
document.querySelectorAll('.lang-item').forEach(item=>item.addEventListener('click',e=>{e.stopPropagation();setLang(item.dataset.lang);langMenu.classList.remove('open')}));
document.getElementById('mobileToggle').addEventListener('click', ()=>document.getElementById('sidebar').classList.toggle('open'));

if(!ui[currentLang]) currentLang='en';
currentPage = (window.__CA_INITIAL_PAGE__ || 'home');
currentLesson = (typeof window.__CA_INITIAL_LESSON__ === 'number' && isFinite(window.__CA_INITIAL_LESSON__)) ? window.__CA_INITIAL_LESSON__ : 0;
applyUI();
renderAllLessons();
if(/^lesson\\d+$/.test(currentPage) && typeof showLesson === 'function' && typeof getTotalLessons === 'function' && currentLesson < getTotalLessons() && document.getElementById('lesson' + currentLesson)){
  showLesson(currentLesson);
}else if(/^lesson\\d+$/.test(currentPage)){
  showPage('home');
}else{
  showPage(currentPage);
}
