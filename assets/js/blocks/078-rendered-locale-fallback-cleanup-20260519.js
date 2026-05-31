(function(){
  if(typeof window === 'undefined' || window.__renderedLocaleFallbackCleanup20260519) return;
  window.__renderedLocaleFallbackCleanup20260519 = true;

  var LANGS = ['ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var BRAND = 'Coin ProofPath';
  var TECH_PATTERN = /\b(BTC|ETH|USDT|USDC|DAI|NFT|DeFi|KYC|PDF|URL|DM|ERC20|TRC20|BEP20|SOL|USD|US)\b/ig;
  var ENGLISH_UI_PATTERN = /\b(FIRST PURCHASE|SCAM SPOTTING|Lesson|Lessons|Start(?: here first| Here)?|Beginner path|Scam prevention|Continue(?: learning)?|Next lesson|Previous lesson|Mark complete|Completed|Checklist|Warning|Compare|Verify|Safety|Quick Review|Worth Saving|Go Deeper|Source Library|Related resources|Practice kit|Beginner|Intermediate|Practical|Open|Learn more|Download|Read more|Search|Update|Glossary|FAQ|Exchange|Wallet|Custody|Control|Recovery responsibility|Network selection|Estimated time|Stablecoin|Trust model|Risk note|Connect|Approve|Sign|Swap|Approval risk|Project evaluation|Red flag|Green flag|Bridge|Multichain|Official source|Contract address|Cross-check|Final review)\b/i;

  var packs = {
    ko:{lesson:'강의',lessons:'강의',day:'강의',start:'시작',startFirst:'여기서 먼저 시작',startHere:'시작하기',beginnerPath:'초보자 경로',scamPrevention:'사기 예방',commonQuestions:'자주 묻는 질문',simpleTerms:'핵심 용어 쉽게 보기',articles:'기사와 공식 참고자료',changed:'변경 내역',source:'자료 라이브러리',glossary:'용어사전',safety:'안전',faq:'FAQ',continueText:'이어보기',next:'다음 강의',prev:'이전 강의',mark:'완료 표시',completed:'완료됨',checklist:'체크리스트',warning:'주의',compare:'비교',verify:'검증',quick:'빠른 복습',saving:'저장용',deeper:'더 깊게 보기',related:'관련 자료',practice:'실전 키트',beginner:'초보자',intermediate:'중급자',practical:'실전',open:'열기',learnMore:'더 알아보기',download:'다운로드',readMore:'더 읽기',search:'검색',update:'업데이트',updates:'업데이트 기록',freePdf:'무료 PDF',officialRefs:'공식 참고자료',premiumGuides:'프리미엄 가이드',ebookReview:'전자책으로 구조화 복습',freeChecklist:'무료 체크리스트 / PDF',relatedPractical:'관련 실전 자료',purchasePanel:'첫 구매 모의 패널',purchasePanelDesc:'구매 전 확인 사항을 짧게 보는 연습 화면입니다.',firstBuy:'첫 구매 화면',amount:'금액',fee:'수수료',network:'네트워크',storagePlan:'보관 계획',checkFirst:'먼저 확인',visualFirst:'시각 자료를 먼저 보고 아래 설명을 읽어보세요.',scamPanel:'사기 식별 모의 패널',pauseFirst:'먼저 멈추기',pauseDesc:'압박을 느끼면 클릭하거나 보내지 마세요.',checkOffer:'제안 확인',offerDesc:'무엇을 약속하는지, 왜 서두르게 하는지 확인하세요.',checkDomain:'도메인 확인',domainDesc:'프로젝트 이름이 아니라 전체 웹주소를 비교하세요.',checkWallet:'지갑 요청 확인',walletDesc:'이상한 승인이나 시드 문구 입력은 절대 하지 마세요.',openOfficial:'공식 출처 직접 열기',officialDesc:'행동하기 전에 진짜 웹사이트나 문서를 직접 찾으세요.',verified:'검증된 출처',suspicious:'의심스러운 복사본',savedBookmark:'저장한 북마크',connectWallet:'지갑 연결하기',exchange:'거래소',wallet:'지갑',custody:'보관',control:'통제권',recovery:'복구 책임',convenience:'편의성',longTerm:'장기 보관 적합성',exchangeTrade:'거래소는 매매용',walletControl:'지갑은 통제용',beforeMove:'자산을 옮기기 전 확인',dontMoveAll:'한 번에 모두 옮기지 말 것',networkSelection:'네트워크 선택',eta:'예상 시간',wrongNetwork:'잘못된 네트워크',matchReceiving:'받는 곳의 네트워크와 맞추기',beforeSend:'보내기 전 확인',sameNetwork:'같은 자산, 다른 네트워크',smallTest:'소액 테스트 먼저',stablecoin:'스테이블코인',trustModel:'신뢰 구조',riskNote:'위험 메모',issuer:'발행 주체',reserve:'준비금',liquidity:'유동성 확인',approve:'승인',sign:'서명',swap:'스왑',walletConnection:'지갑 연결',permission:'권한 요청',approvalRisk:'승인 위험',beforeSigning:'서명 전 확인',projectEval:'프로젝트 평가',redFlag:'위험 신호',greenFlag:'좋은 신호',hype:'과장 홍보',utility:'실사용 가치',community:'커뮤니티',activity:'활동성',sustainability:'지속성',bridge:'브리지',multichain:'멀티체인',chainA:'체인 A',chainB:'체인 B',beforeBridge:'브리지 전 확인',destChain:'도착 체인 확인',officialSource:'공식 출처',contract:'컨트랙트 주소',crossCheck:'교차 확인',finalReview:'최종 확인',suspiciousLink:'의심 링크',fullAddress:'전체 주소 확인',findSource:'출처 직접 찾기',compareBeforeSend:'보내기 전 비교',transferChecklist:'전송 네트워크 체크리스트',sameAssetSentence:'같은 자산 이름도 여러 네트워크에 있을 수 있으니 보내기 전에 네트워크를 비교하세요.',moveCarefully:'신중하게 옮기세요. 감당하고 복구할 수 있는 금액부터 시작하세요.',pressButton:'버튼을 누르면 오늘 볼 강의, 체크리스트, 용어사전 또는 PDF를 추천합니다.'},
    th:{lesson:'บทเรียน',lessons:'บทเรียน',day:'บทเรียน',start:'เริ่ม',startFirst:'เริ่มจากตรงนี้ก่อน',startHere:'เริ่มที่นี่',beginnerPath:'เส้นทางสำหรับมือใหม่',scamPrevention:'การป้องกันสแกม',commonQuestions:'คำถามที่พบบ่อย',simpleTerms:'คำสำคัญแบบเข้าใจง่าย',articles:'บทความและแหล่งอ้างอิงทางการ',changed:'สิ่งที่เปลี่ยน',source:'คลังแหล่งอ้างอิง',glossary:'อภิธานศัพท์',safety:'ความปลอดภัย',faq:'FAQ',continueText:'เรียนต่อ',next:'บทเรียนถัดไป',prev:'บทเรียนก่อนหน้า',mark:'ทำเครื่องหมายว่าเสร็จ',completed:'เสร็จแล้ว',checklist:'เช็กลิสต์',warning:'คำเตือน',compare:'เปรียบเทียบ',verify:'ตรวจสอบ',quick:'ทบทวนเร็ว',saving:'ควรเก็บไว้ดู',deeper:'อ่านลึกขึ้น',related:'แหล่งข้อมูลที่เกี่ยวข้อง',practice:'ชุดฝึกปฏิบัติ',beginner:'มือใหม่',intermediate:'ระดับกลาง',practical:'ใช้งานจริง',open:'เปิด',learnMore:'ดูเพิ่ม',download:'ดาวน์โหลด',readMore:'อ่านต่อ',search:'ค้นหา',update:'อัปเดต',updates:'ประวัติการอัปเดต',freePdf:'PDF ฟรี',officialRefs:'แหล่งอ้างอิงทางการ',premiumGuides:'คู่มือพรีเมียม',ebookReview:'ทบทวนแบบมีโครงสร้างใน eBook',freeChecklist:'เช็กลิสต์ฟรี / PDF',relatedPractical:'แหล่งข้อมูลปฏิบัติที่เกี่ยวข้อง',purchasePanel:'แผงจำลองการซื้อครั้งแรก',purchasePanelDesc:'หน้าฝึกสั้น ๆ สำหรับตรวจสอบก่อนซื้อ',firstBuy:'หน้าซื้อครั้งแรก',amount:'จำนวนเงิน',fee:'ค่าธรรมเนียม',network:'เครือข่าย',storagePlan:'แผนการเก็บรักษา',checkFirst:'ตรวจสอบก่อน',visualFirst:'ดูภาพก่อน แล้วอ่านรายละเอียดด้านล่าง',scamPanel:'แผงจำลองการจับสแกม',pauseFirst:'หยุดก่อน',pauseDesc:'ถ้ายังรู้สึกถูกกดดัน อย่าคลิกหรือส่งอะไร',checkOffer:'ตรวจสอบข้อเสนอ',offerDesc:'ถามว่าจริง ๆ แล้วสัญญาอะไร และทำไมต้องรีบ',checkDomain:'ตรวจสอบโดเมน',domainDesc:'เทียบที่อยู่เว็บไซต์ทั้งหมด ไม่ใช่แค่ชื่อโปรเจกต์',checkWallet:'ตรวจสอบคำขอกระเป๋า',walletDesc:'อย่าอนุมัติคำขอแปลก ๆ หรือกรอก seed phrase',openOfficial:'เปิดแหล่งทางการเอง',officialDesc:'หาเว็บไซต์หรือเอกสารจริงด้วยตัวเองก่อนลงมือ',verified:'แหล่งที่ตรวจสอบแล้ว',suspicious:'สำเนาน่าสงสัย',savedBookmark:'บุ๊กมาร์กที่บันทึกไว้',connectWallet:'เชื่อมต่อกระเป๋าตอนนี้',exchange:'กระดานเทรด',wallet:'กระเป๋า',custody:'การเก็บรักษา',control:'การควบคุม',recovery:'ความรับผิดชอบการกู้คืน',convenience:'ความสะดวก',longTerm:'เหมาะกับระยะยาว',exchangeTrade:'ใช้กระดานเทรดเพื่อซื้อขาย',walletControl:'ใช้กระเป๋าเพื่อควบคุมเอง',beforeMove:'ตรวจสอบก่อนย้ายสินทรัพย์',dontMoveAll:'อย่าย้ายทั้งหมดในครั้งเดียว',networkSelection:'เลือกเครือข่าย',eta:'เวลาประมาณ',wrongNetwork:'เครือข่ายผิด',matchReceiving:'จับคู่กับเครือข่ายของปลายทาง',beforeSend:'ตรวจสอบก่อนส่ง',sameNetwork:'สินทรัพย์เดียวกัน แต่คนละเครือข่าย',smallTest:'ทดสอบด้วยจำนวนน้อยก่อน',stablecoin:'สเตเบิลคอยน์',trustModel:'โครงสร้างความเชื่อถือ',riskNote:'บันทึกความเสี่ยง',issuer:'ผู้ออก',reserve:'เงินสำรอง',liquidity:'ตรวจสภาพคล่อง',approve:'อนุมัติ',sign:'ลงนาม',swap:'สวอป',walletConnection:'การเชื่อมต่อกระเป๋า',permission:'คำขอสิทธิ์',approvalRisk:'ความเสี่ยงจากการอนุมัติ',beforeSigning:'ตรวจสอบก่อนลงนาม',projectEval:'ประเมินโปรเจกต์',redFlag:'สัญญาณเสี่ยง',greenFlag:'สัญญาณดี',hype:'กระแสเกินจริง',utility:'ประโยชน์ใช้จริง',community:'ชุมชน',activity:'กิจกรรม',sustainability:'ความยั่งยืน',bridge:'บริดจ์',multichain:'หลายเชน',chainA:'เชน A',chainB:'เชน B',beforeBridge:'ก่อนใช้บริดจ์',destChain:'ตรวจเชนปลายทาง',officialSource:'แหล่งทางการ',contract:'ที่อยู่คอนแทรกต์',crossCheck:'ตรวจเทียบหลายแหล่ง',finalReview:'ตรวจครั้งสุดท้าย',suspiciousLink:'ลิงก์น่าสงสัย',fullAddress:'ตรวจที่อยู่ทั้งหมด',findSource:'หาแหล่งเอง',compareBeforeSend:'เปรียบเทียบก่อนส่ง',transferChecklist:'เช็กลิสต์เครือข่ายโอน',sameAssetSentence:'ชื่อสินทรัพย์เดียวกันอาจอยู่ได้หลายเครือข่าย จึงต้องเทียบเครือข่ายก่อนส่ง',moveCarefully:'ย้ายอย่างระมัดระวัง เริ่มจากจำนวนที่จัดการและกู้คืนได้',pressButton:'กดปุ่มเพื่อรับคำแนะนำบทเรียน เช็กลิสต์ อภิธานศัพท์ หรือ PDF สำหรับวันนี้'},
    id:{lesson:'Pelajaran',lessons:'Pelajaran',day:'Pelajaran',start:'Mulai',startFirst:'Mulai dari sini',startHere:'Mulai di sini',beginnerPath:'Jalur pemula',scamPrevention:'Pencegahan penipuan',commonQuestions:'Pertanyaan umum',simpleTerms:'Istilah inti sederhana',articles:'Artikel dan referensi resmi',changed:'Perubahan',source:'Pustaka Sumber',glossary:'Glosarium',safety:'Keamanan',faq:'FAQ',continueText:'Lanjutkan',next:'Pelajaran berikutnya',prev:'Pelajaran sebelumnya',mark:'Tandai selesai',completed:'Selesai',checklist:'Daftar cek',warning:'Peringatan',compare:'Bandingkan',verify:'Verifikasi',quick:'Tinjauan cepat',saving:'Layak disimpan',deeper:'Pelajari lebih dalam',related:'Sumber terkait',practice:'Kit praktik',beginner:'Pemula',intermediate:'Menengah',practical:'Praktis',open:'Buka',learnMore:'Pelajari lagi',download:'Unduh',readMore:'Baca lagi',search:'Cari',update:'Pembaruan',updates:'Riwayat pembaruan',freePdf:'PDF gratis',officialRefs:'Referensi resmi',premiumGuides:'Panduan premium',ebookReview:'Tinjauan eBook terstruktur',freeChecklist:'Daftar cek gratis / PDF',relatedPractical:'Sumber praktik terkait',purchasePanel:'Panel simulasi beli pertama',purchasePanelDesc:'Layar latihan singkat untuk cek sebelum membeli.',firstBuy:'Layar beli pertama',amount:'Jumlah',fee:'Biaya',network:'Jaringan',storagePlan:'Rencana simpan',checkFirst:'Cek dulu',visualFirst:'Gunakan visual dulu, lalu baca detail di bawah.',scamPanel:'Panel simulasi deteksi penipuan',pauseFirst:'Berhenti dulu',pauseDesc:'Jangan klik atau kirim saat masih merasa tertekan.',checkOffer:'Cek tawaran',offerDesc:'Tanyakan apa yang dijanjikan dan mengapa terasa terburu-buru.',checkDomain:'Cek domain',domainDesc:'Bandingkan alamat situs penuh, bukan hanya nama proyek.',checkWallet:'Cek permintaan wallet',walletDesc:'Jangan setujui prompt aneh atau masukkan seed phrase.',openOfficial:'Buka sumber resmi sendiri',officialDesc:'Cari situs atau dokumen asli sendiri sebelum bertindak.',verified:'Sumber terverifikasi',suspicious:'Salinan mencurigakan',savedBookmark:'Bookmark tersimpan',connectWallet:'Hubungkan wallet sekarang',exchange:'Bursa',wallet:'Wallet',custody:'Custody',control:'Kontrol',recovery:'Tanggung jawab pemulihan',convenience:'Kemudahan',longTerm:'Cocok jangka panjang',exchangeTrade:'Gunakan bursa untuk trading',walletControl:'Gunakan wallet untuk kontrol',beforeMove:'Cek sebelum memindahkan aset',dontMoveAll:'Jangan pindahkan semuanya sekaligus',networkSelection:'Pilihan jaringan',eta:'Estimasi waktu',wrongNetwork:'Jaringan salah',matchReceiving:'Cocokkan jaringan penerima',beforeSend:'Cek sebelum mengirim',sameNetwork:'Aset sama, jaringan berbeda',smallTest:'Tes kecil dulu',stablecoin:'Stablecoin',trustModel:'Model kepercayaan',riskNote:'Catatan risiko',issuer:'Penerbit',reserve:'Cadangan',liquidity:'Cek likuiditas',approve:'Setujui',sign:'Tanda tangan',swap:'Tukar',walletConnection:'Koneksi wallet',permission:'Permintaan izin',approvalRisk:'Risiko approval',beforeSigning:'Cek sebelum tanda tangan',projectEval:'Evaluasi proyek',redFlag:'Sinyal risiko',greenFlag:'Sinyal baik',hype:'Hype',utility:'Kegunaan',community:'Komunitas',activity:'Aktivitas',sustainability:'Keberlanjutan',bridge:'Bridge',multichain:'Multichain',chainA:'Chain A',chainB:'Chain B',beforeBridge:'Sebelum bridging',destChain:'Cek chain tujuan',officialSource:'Sumber resmi',contract:'Alamat kontrak',crossCheck:'Cek silang',finalReview:'Tinjauan akhir',suspiciousLink:'Link mencurigakan',fullAddress:'Cek alamat penuh',findSource:'Cari sumber sendiri',compareBeforeSend:'Bandingkan sebelum kirim',transferChecklist:'Daftar cek jaringan transfer',sameAssetSentence:'Nama aset yang sama bisa ada di beberapa jaringan, jadi bandingkan jaringan sebelum mengirim.',moveCarefully:'Pindahkan dengan hati-hati. Mulai dari jumlah yang bisa Anda kelola dan pulihkan.',pressButton:'Tekan tombol untuk rekomendasi pelajaran, daftar cek, glosarium, atau PDF hari ini.'},
    br:null,
    pt:null,
    tr:{lesson:'Ders',lessons:'Dersler',day:'Ders',start:'Başla',startFirst:'Önce buradan başla',startHere:'Buradan başla',beginnerPath:'Başlangıç yolu',scamPrevention:'Dolandırıcılık önleme',commonQuestions:'Yaygın sorular',simpleTerms:'Temel terimler',articles:'Makaleler ve resmi kaynaklar',changed:'Değişiklikler',source:'Kaynak Kütüphanesi',glossary:'Sözlük',safety:'Güvenlik',faq:'SSS',continueText:'Devam et',next:'Sonraki ders',prev:'Önceki ders',mark:'Tamamlandı işaretle',completed:'Tamamlandı',checklist:'Kontrol listesi',warning:'Uyarı',compare:'Karşılaştır',verify:'Doğrula',quick:'Hızlı tekrar',saving:'Kaydetmeye değer',deeper:'Daha derin incele',related:'İlgili kaynaklar',practice:'Pratik set',beginner:'Başlangıç',intermediate:'Orta seviye',practical:'Pratik',open:'Aç',learnMore:'Daha fazla öğren',download:'İndir',readMore:'Devamını oku',search:'Ara',update:'Güncelleme',updates:'Güncelleme geçmişi',freePdf:'Ücretsiz PDF',officialRefs:'Resmi kaynaklar',premiumGuides:'Premium rehberler',ebookReview:'eBook ile düzenli tekrar',freeChecklist:'Ücretsiz kontrol listesi / PDF',relatedPractical:'İlgili pratik kaynaklar',purchasePanel:'İlk alım örnek paneli',purchasePanelDesc:'Satın almadan önceki kontroller için kısa eğitim ekranı.',firstBuy:'İlk alım ekranı',amount:'Tutar',fee:'Ücret',network:'Ağ',storagePlan:'Saklama planı',checkFirst:'Önce kontrol et',visualFirst:'Önce görseli kullan, sonra aşağıdaki ayrıntıyı oku.',scamPanel:'Dolandırıcılık tespit örnek paneli',pauseFirst:'Önce dur',pauseDesc:'Baskı hissederken hiçbir şeye tıklama veya gönderme.',checkOffer:'Teklifi kontrol et',offerDesc:'Gerçekte ne vaat edildiğini ve neden acele ettirdiğini sor.',checkDomain:'Alan adını kontrol et',domainDesc:'Sadece proje adını değil, tam site adresini karşılaştır.',checkWallet:'Cüzdan isteğini kontrol et',walletDesc:'Garip bir isteği onaylama veya seed phrase girme.',openOfficial:'Resmi kaynağı kendin aç',officialDesc:'Harekete geçmeden önce gerçek siteyi veya belgeleri kendin bul.',verified:'Doğrulanmış kaynak',suspicious:'Şüpheli kopya',savedBookmark:'Kayıtlı yer imi',connectWallet:'Cüzdanı şimdi bağla',exchange:'Borsa',wallet:'Cüzdan',custody:'Saklama',control:'Kontrol',recovery:'Kurtarma sorumluluğu',convenience:'Kolaylık',longTerm:'Uzun vadeye uygunluk',exchangeTrade:'Borsayı al-sat için kullan',walletControl:'Cüzdanı kontrol için kullan',beforeMove:'Varlıkları taşımadan önce kontrol et',dontMoveAll:'Her şeyi tek seferde taşıma',networkSelection:'Ağ seçimi',eta:'Tahmini süre',wrongNetwork:'Yanlış ağ',matchReceiving:'Alıcı ağla eşleştir',beforeSend:'Göndermeden önce kontrol et',sameNetwork:'Aynı varlık, farklı ağ',smallTest:'Önce küçük test',stablecoin:'Stablecoin',trustModel:'Güven modeli',riskNote:'Risk notu',issuer:'İhraç eden',reserve:'Rezerv',liquidity:'Likiditeyi kontrol et',approve:'Onayla',sign:'İmzala',swap:'Takas',walletConnection:'Cüzdan bağlantısı',permission:'İzin isteği',approvalRisk:'Onay riski',beforeSigning:'İmzadan önce kontrol et',projectEval:'Proje değerlendirmesi',redFlag:'Risk sinyali',greenFlag:'Olumlu sinyal',hype:'Abartı',utility:'Kullanım değeri',community:'Topluluk',activity:'Aktivite',sustainability:'Sürdürülebilirlik',bridge:'Köprü',multichain:'Çoklu zincir',chainA:'Zincir A',chainB:'Zincir B',beforeBridge:'Köprüden önce',destChain:'Hedef zinciri kontrol et',officialSource:'Resmi kaynak',contract:'Kontrat adresi',crossCheck:'Çapraz kontrol',finalReview:'Son kontrol',suspiciousLink:'Şüpheli bağlantı',fullAddress:'Tam adresi kontrol et',findSource:'Kaynağı kendin bul',compareBeforeSend:'Göndermeden önce karşılaştır',transferChecklist:'Transfer ağı kontrol listesi',sameAssetSentence:'Aynı varlık adı birden fazla ağda olabilir; göndermeden önce ağı karşılaştır.',moveCarefully:'Dikkatli taşı. Yönetebileceğin ve kurtarabileceğin bir tutarla başla.',pressButton:'Düğmeye bas; bugün için ders, kontrol listesi, sözlük veya PDF önerisi al.'},
    es:null,
    ar:{lesson:'درس',lessons:'دروس',day:'درس',start:'ابدأ',startFirst:'ابدأ من هنا أولا',startHere:'ابدأ هنا',beginnerPath:'مسار المبتدئين',scamPrevention:'منع الاحتيال',commonQuestions:'أسئلة شائعة',simpleTerms:'مصطلحات أساسية مبسطة',articles:'مقالات ومراجع رسمية',changed:'ما الذي تغير',source:'مكتبة المصادر',glossary:'المصطلحات',safety:'الأمان',faq:'الأسئلة الشائعة',continueText:'متابعة',next:'الدرس التالي',prev:'الدرس السابق',mark:'وضع علامة مكتمل',completed:'مكتمل',checklist:'قائمة فحص',warning:'تحذير',compare:'قارن',verify:'تحقق',quick:'مراجعة سريعة',saving:'يستحق الحفظ',deeper:'تعمق أكثر',related:'مصادر ذات صلة',practice:'مجموعة تطبيقية',beginner:'مبتدئ',intermediate:'متوسط',practical:'عملي',open:'افتح',learnMore:'اعرف المزيد',download:'تنزيل',readMore:'اقرأ المزيد',search:'بحث',update:'تحديث',updates:'سجل التحديثات',freePdf:'PDF مجاني',officialRefs:'مراجع رسمية',premiumGuides:'أدلة مميزة',ebookReview:'مراجعة منظمة في الكتاب الإلكتروني',freeChecklist:'قائمة فحص مجانية / PDF',relatedPractical:'مصادر تطبيقية ذات صلة',purchasePanel:'لوحة محاكاة للشراء الأول',purchasePanelDesc:'شاشة تدريب قصيرة لفحوصات ما قبل الشراء.',firstBuy:'شاشة الشراء الأول',amount:'المبلغ',fee:'الرسوم',network:'الشبكة',storagePlan:'خطة الحفظ',checkFirst:'تحقق أولا',visualFirst:'استخدم الصورة أولا ثم اقرأ التفاصيل أدناه.',scamPanel:'لوحة محاكاة لكشف الاحتيال',pauseFirst:'توقف أولا',pauseDesc:'لا تنقر أو ترسل شيئا وأنت تحت ضغط.',checkOffer:'تحقق من العرض',offerDesc:'اسأل ما الذي يعدون به ولماذا يبدو مستعجلا.',checkDomain:'تحقق من النطاق',domainDesc:'قارن عنوان الموقع كاملا وليس اسم المشروع فقط.',checkWallet:'تحقق من طلب المحفظة',walletDesc:'لا توافق على طلب غريب ولا تدخل عبارة الاسترداد.',openOfficial:'افتح المصدر الرسمي بنفسك',officialDesc:'ابحث عن الموقع أو الوثائق الحقيقية بنفسك قبل التصرف.',verified:'مصدر موثق',suspicious:'نسخة مشبوهة',savedBookmark:'إشارة محفوظة',connectWallet:'اربط المحفظة الآن',exchange:'منصة',wallet:'محفظة',custody:'حفظ',control:'تحكم',recovery:'مسؤولية الاسترداد',convenience:'سهولة',longTerm:'مناسب للمدى الطويل',exchangeTrade:'استخدم المنصة للتداول',walletControl:'استخدم المحفظة للتحكم',beforeMove:'تحقق قبل نقل الأصول',dontMoveAll:'لا تنقل كل شيء دفعة واحدة',networkSelection:'اختيار الشبكة',eta:'الوقت المتوقع',wrongNetwork:'شبكة خاطئة',matchReceiving:'طابق شبكة الوجهة',beforeSend:'تحقق قبل الإرسال',sameNetwork:'نفس الأصل، شبكة مختلفة',smallTest:'اختبار صغير أولا',stablecoin:'عملة مستقرة',trustModel:'نموذج الثقة',riskNote:'ملاحظة خطر',issuer:'الجهة المصدرة',reserve:'الاحتياطي',liquidity:'تحقق من السيولة',approve:'موافقة',sign:'توقيع',swap:'تبديل',walletConnection:'اتصال المحفظة',permission:'طلب صلاحية',approvalRisk:'خطر الموافقة',beforeSigning:'تحقق قبل التوقيع',projectEval:'تقييم المشروع',redFlag:'إشارة خطر',greenFlag:'إشارة جيدة',hype:'ضجة',utility:'فائدة',community:'مجتمع',activity:'نشاط',sustainability:'استدامة',bridge:'جسر',multichain:'متعدد السلاسل',chainA:'السلسلة A',chainB:'السلسلة B',beforeBridge:'قبل استخدام الجسر',destChain:'تحقق من سلسلة الوجهة',officialSource:'مصدر رسمي',contract:'عنوان العقد',crossCheck:'تحقق متقاطع',finalReview:'مراجعة نهائية',suspiciousLink:'رابط مشبوه',fullAddress:'تحقق من العنوان كاملا',findSource:'ابحث عن المصدر بنفسك',compareBeforeSend:'قارن قبل الإرسال',transferChecklist:'قائمة فحص شبكة النقل',sameAssetSentence:'قد يوجد اسم الأصل نفسه على عدة شبكات، لذلك قارن الشبكة قبل الإرسال.',moveCarefully:'انقل بحذر. ابدأ بمبلغ يمكنك إدارته واسترداده.',pressButton:'اضغط الزر للحصول على توصية درس أو قائمة فحص أو مصطلحات أو PDF اليوم.'},
    vi:{lesson:'Bài học',lessons:'Bài học',day:'Bài học',start:'Bắt đầu',startFirst:'Bắt đầu từ đây trước',startHere:'Bắt đầu tại đây',beginnerPath:'Lộ trình cho người mới',scamPrevention:'Phòng tránh lừa đảo',commonQuestions:'Câu hỏi thường gặp',simpleTerms:'Thuật ngữ cốt lõi dễ hiểu',articles:'Bài viết và nguồn chính thức',changed:'Nội dung đã đổi',source:'Thư viện nguồn',glossary:'Bảng thuật ngữ',safety:'An toàn',faq:'FAQ',continueText:'Tiếp tục',next:'Bài học tiếp theo',prev:'Bài học trước',mark:'Đánh dấu hoàn thành',completed:'Đã hoàn thành',checklist:'Danh sách kiểm tra',warning:'Cảnh báo',compare:'So sánh',verify:'Xác minh',quick:'Ôn nhanh',saving:'Nên lưu lại',deeper:'Tìm hiểu sâu hơn',related:'Tài nguyên liên quan',practice:'Bộ thực hành',beginner:'Người mới',intermediate:'Trung cấp',practical:'Thực hành',open:'Mở',learnMore:'Tìm hiểu thêm',download:'Tải xuống',readMore:'Đọc thêm',search:'Tìm kiếm',update:'Cập nhật',updates:'Lịch sử cập nhật',freePdf:'PDF miễn phí',officialRefs:'Nguồn chính thức',premiumGuides:'Hướng dẫn cao cấp',ebookReview:'Ôn có cấu trúc bằng eBook',freeChecklist:'Checklist miễn phí / PDF',relatedPractical:'Tài nguyên thực hành liên quan',purchasePanel:'Bảng mô phỏng mua lần đầu',purchasePanelDesc:'Màn hình luyện tập ngắn cho các bước kiểm tra trước khi mua.',firstBuy:'Màn hình mua lần đầu',amount:'Số tiền',fee:'Phí',network:'Mạng',storagePlan:'Kế hoạch lưu trữ',checkFirst:'Kiểm tra trước',visualFirst:'Xem hình trước, rồi đọc chi tiết bên dưới.',scamPanel:'Bảng mô phỏng phát hiện lừa đảo',pauseFirst:'Dừng lại trước',pauseDesc:'Đừng nhấp hoặc gửi gì khi vẫn còn bị thúc ép.',checkOffer:'Kiểm tra lời mời',offerDesc:'Hỏi thật sự đang hứa gì và vì sao bị hối thúc.',checkDomain:'Kiểm tra tên miền',domainDesc:'So sánh toàn bộ địa chỉ web, không chỉ tên dự án.',checkWallet:'Kiểm tra yêu cầu ví',walletDesc:'Không chấp thuận yêu cầu lạ hoặc nhập seed phrase.',openOfficial:'Tự mở nguồn chính thức',officialDesc:'Tự tìm website hoặc tài liệu thật trước khi hành động.',verified:'Nguồn đã xác minh',suspicious:'Bản sao đáng ngờ',savedBookmark:'Dấu trang đã lưu',connectWallet:'Kết nối ví ngay',exchange:'Sàn giao dịch',wallet:'Ví',custody:'Lưu ký',control:'Quyền kiểm soát',recovery:'Trách nhiệm khôi phục',convenience:'Sự tiện lợi',longTerm:'Phù hợp dài hạn',exchangeTrade:'Dùng sàn để giao dịch',walletControl:'Dùng ví để kiểm soát',beforeMove:'Kiểm tra trước khi chuyển tài sản',dontMoveAll:'Đừng chuyển tất cả cùng lúc',networkSelection:'Chọn mạng',eta:'Thời gian ước tính',wrongNetwork:'Sai mạng',matchReceiving:'Khớp với mạng bên nhận',beforeSend:'Kiểm tra trước khi gửi',sameNetwork:'Cùng tài sản, khác mạng',smallTest:'Thử số nhỏ trước',stablecoin:'Stablecoin',trustModel:'Mô hình niềm tin',riskNote:'Ghi chú rủi ro',issuer:'Bên phát hành',reserve:'Dự trữ',liquidity:'Kiểm tra thanh khoản',approve:'Phê duyệt',sign:'Ký',swap:'Hoán đổi',walletConnection:'Kết nối ví',permission:'Yêu cầu quyền',approvalRisk:'Rủi ro phê duyệt',beforeSigning:'Kiểm tra trước khi ký',projectEval:'Đánh giá dự án',redFlag:'Dấu hiệu rủi ro',greenFlag:'Dấu hiệu tốt',hype:'Thổi phồng',utility:'Tiện ích',community:'Cộng đồng',activity:'Hoạt động',sustainability:'Tính bền vững',bridge:'Cầu nối',multichain:'Đa chuỗi',chainA:'Chuỗi A',chainB:'Chuỗi B',beforeBridge:'Trước khi dùng cầu nối',destChain:'Kiểm tra chuỗi đích',officialSource:'Nguồn chính thức',contract:'Địa chỉ hợp đồng',crossCheck:'Kiểm tra chéo',finalReview:'Xem lại cuối cùng',suspiciousLink:'Liên kết đáng ngờ',fullAddress:'Kiểm tra toàn bộ địa chỉ',findSource:'Tự tìm nguồn',compareBeforeSend:'So sánh trước khi gửi',transferChecklist:'Checklist mạng chuyển',sameAssetSentence:'Cùng một tên tài sản có thể nằm trên nhiều mạng, nên hãy so sánh mạng trước khi gửi.',moveCarefully:'Chuyển cẩn thận. Bắt đầu với số tiền bạn có thể quản lý và khôi phục.',pressButton:'Nhấn nút để nhận gợi ý bài học, checklist, bảng thuật ngữ hoặc PDF hôm nay.'},
    ha:{lesson:'Darasi',lessons:'Darussa',day:'Darasi',start:'Fara',startFirst:'Fara daga nan',startHere:'Fara nan',beginnerPath:'Hanyar masu farawa',scamPrevention:'Kariya daga zamba',commonQuestions:'Tambayoyi gama gari',simpleTerms:'Muhimman kalmomi masu sauki',articles:'Makaloli da tushe na hukuma',changed:'Abin da ya canza',source:'Dakin Bayanai',glossary:'Kamus',safety:'Tsaro',faq:'FAQ',continueText:'Ci gaba',next:'Darasi na gaba',prev:'Darasi na baya',mark:'Alama an kammala',completed:'An kammala',checklist:'Jerin dubawa',warning:'Gargadi',compare:'Kwatanta',verify:'Tabbatar',quick:'Bita mai sauri',saving:'Abin ajiyewa',deeper:'Yi zurfi',related:'Abubuwan da suka shafi',practice:'Kayan aiki',beginner:'Mai farawa',intermediate:'Matsakaici',practical:'Aiki',open:'Bude',learnMore:'Kara koyo',download:'Zazzage',readMore:'Kara karatu',search:'Bincika',update:'Sabuntawa',updates:'Tarihin sabuntawa',freePdf:'PDF kyauta',officialRefs:'Tushen hukuma',premiumGuides:'Jagorori na musamman',ebookReview:'Bita mai tsari a eBook',freeChecklist:'Jerin dubawa kyauta / PDF',relatedPractical:'Tushen aiki masu alaka',purchasePanel:'Allon gwaji na saye na farko',purchasePanelDesc:'Allon horo gajere don dubawa kafin saye.',firstBuy:'Allon saye na farko',amount:'Kudi',fee:'Fee',network:'Network',storagePlan:'Tsarin ajiya',checkFirst:'Duba tukuna',visualFirst:'Duba hoton farko, sannan karanta bayani a kasa.',scamPanel:'Allon gwaji na gano zamba',pauseFirst:'Tsaya tukuna',pauseDesc:'Kada ka danna ko aika komai idan kana jin matsin lamba.',checkOffer:'Duba tayin',offerDesc:'Tambayi abin da ake alkawarta da dalilin gaggawa.',checkDomain:'Duba domain',domainDesc:'Kwatanta cikakken adireshin shafi, ba sunan project kadai ba.',checkWallet:'Duba bukatar walat',walletDesc:'Kada ka amince da bukata mai ban mamaki ko shigar da seed phrase.',openOfficial:'Bude tushen hukuma da kanka',officialDesc:'Nemi shafi ko takardu na gaskiya da kanka kafin aiki.',verified:'Tushen da aka tabbatar',suspicious:'Kwafi mai tuhuma',savedBookmark:'Bookmark da aka ajiye',connectWallet:'Haɗa walat yanzu',exchange:'Exchange',wallet:'Walat',custody:'Ajiya',control:'Iko',recovery:'Alhakin dawo da shi',convenience:'Sauki',longTerm:'Dacewa dogon lokaci',exchangeTrade:'Yi amfani da exchange don ciniki',walletControl:'Yi amfani da walat don iko',beforeMove:'Duba kafin matsar da kadara',dontMoveAll:'Kada ka matsar da komai lokaci daya',networkSelection:'Zabin network',eta:'Lokacin da ake tsammani',wrongNetwork:'Network kuskure',matchReceiving:'Daidaita da network mai karba',beforeSend:'Duba kafin aika',sameNetwork:'Kadara daya, network daban',smallTest:'Fara da gwaji kadan',stablecoin:'Stablecoin',trustModel:'Tsarin amincewa',riskNote:'Bayanin hadari',issuer:'Mai fitarwa',reserve:'Ajiya',liquidity:'Duba liquidity',approve:'Amince',sign:'Sa hannu',swap:'Musanya',walletConnection:'Haɗin walat',permission:'Bukatun izini',approvalRisk:'Hadarin amincewa',beforeSigning:'Duba kafin sa hannu',projectEval:'Kimanta project',redFlag:'Alamar hadari',greenFlag:'Alama mai kyau',hype:'Hayaniya',utility:'Amfani',community:'Alumma',activity:'Aiki',sustainability:'Dorewa',bridge:'Gada',multichain:'Sarkoki da yawa',chainA:'Sarka A',chainB:'Sarka B',beforeBridge:'Kafin amfani da gada',destChain:'Duba sarkar manufa',officialSource:'Tushen hukuma',contract:'Adireshin contract',crossCheck:'Binciken kwatance',finalReview:'Duba na karshe',suspiciousLink:'Link mai tuhuma',fullAddress:'Duba cikakken address',findSource:'Nemi tushe da kanka',compareBeforeSend:'Kwatanta kafin aika',transferChecklist:'Jerin duba network na transfer',sameAssetSentence:'Sunan kadara daya na iya kasancewa a networks da yawa, don haka kwatanta network kafin aika.',moveCarefully:'Matsar a hankali. Fara da adadin da zaka iya sarrafawa da dawo da shi.',pressButton:'Danna maballin don samun shawarar darasi, jerin dubawa, kamus, ko PDF yau.'}
  };

  packs.pt = packs.br = {
    lesson:'Lição',lessons:'Lições',day:'Lição',start:'Começar',startFirst:'Comece por aqui primeiro',startHere:'Comece aqui',beginnerPath:'Caminho para iniciantes',scamPrevention:'Prevenção de golpes',commonQuestions:'Perguntas comuns',simpleTerms:'Termos essenciais simples',articles:'Artigos e referências oficiais',changed:'O que mudou',source:'Biblioteca de fontes',glossary:'Glossário',safety:'Segurança',faq:'FAQ',continueText:'Continuar',next:'Próxima lição',prev:'Lição anterior',mark:'Marcar como concluída',completed:'Concluído',checklist:'Lista de verificação',warning:'Atenção',compare:'Comparar',verify:'Verificar',quick:'Revisão rápida',saving:'Vale salvar',deeper:'Aprofundar',related:'Recursos relacionados',practice:'Kit prático',beginner:'Iniciante',intermediate:'Intermediário',practical:'Prático',open:'Abrir',learnMore:'Saiba mais',download:'Baixar',readMore:'Ler mais',search:'Buscar',update:'Atualização',updates:'Histórico de atualizações',freePdf:'PDF gratuito',officialRefs:'Referências oficiais',premiumGuides:'Guias premium',ebookReview:'Revisão estruturada no eBook',freeChecklist:'Checklist gratuito / PDF',relatedPractical:'Recursos práticos relacionados',purchasePanel:'Painel simulado de primeira compra',purchasePanelDesc:'Tela curta de treino para checagens antes de comprar.',firstBuy:'Tela de primeira compra',amount:'Valor',fee:'Taxa',network:'Rede',storagePlan:'Plano de custódia',checkFirst:'Verificar primeiro',visualFirst:'Use o visual primeiro e depois leia o detalhe abaixo.',scamPanel:'Painel simulado para detectar golpe',pauseFirst:'Pare primeiro',pauseDesc:'Não clique nem envie nada enquanto sentir pressão.',checkOffer:'Verifique a oferta',offerDesc:'Pergunte o que está sendo prometido e por que há pressa.',checkDomain:'Verifique o domínio',domainDesc:'Compare o endereço completo do site, não só o nome do projeto.',checkWallet:'Verifique o pedido da carteira',walletDesc:'Nunca aprove uma solicitação estranha nem digite seed phrase.',openOfficial:'Abra a fonte oficial você mesmo',officialDesc:'Encontre o site ou documentos reais por conta própria antes de agir.',verified:'Fonte verificada',suspicious:'Cópia suspeita',savedBookmark:'Favorito salvo',connectWallet:'Conectar carteira agora',exchange:'Corretora',wallet:'Carteira',custody:'Custódia',control:'Controle',recovery:'Responsabilidade de recuperação',convenience:'Conveniência',longTerm:'Adequação ao longo prazo',exchangeTrade:'Use a corretora para negociar',walletControl:'Use a carteira para controle',beforeMove:'Verifique antes de mover ativos',dontMoveAll:'Não mova tudo de uma vez',networkSelection:'Seleção de rede',eta:'Tempo estimado',wrongNetwork:'Rede errada',matchReceiving:'Combine com a rede de destino',beforeSend:'Verificar antes de enviar',sameNetwork:'Mesmo ativo, rede diferente',smallTest:'Teste pequeno primeiro',stablecoin:'Stablecoin',trustModel:'Modelo de confiança',riskNote:'Nota de risco',issuer:'Emissor',reserve:'Reserva',liquidity:'Verificar liquidez',approve:'Aprovar',sign:'Assinar',swap:'Trocar',walletConnection:'Conexão da carteira',permission:'Pedido de permissão',approvalRisk:'Risco de aprovação',beforeSigning:'Verificar antes de assinar',projectEval:'Avaliação do projeto',redFlag:'Sinal de risco',greenFlag:'Sinal positivo',hype:'Hype',utility:'Utilidade',community:'Comunidade',activity:'Atividade',sustainability:'Sustentabilidade',bridge:'Ponte',multichain:'Multichain',chainA:'Rede A',chainB:'Rede B',beforeBridge:'Antes da ponte',destChain:'Verificar rede de destino',officialSource:'Fonte oficial',contract:'Endereço do contrato',crossCheck:'Checagem cruzada',finalReview:'Revisão final',suspiciousLink:'Link suspeito',fullAddress:'Verificar endereço completo',findSource:'Encontrar a fonte por conta própria',compareBeforeSend:'Comparar antes de enviar',transferChecklist:'Checklist da rede de transferência',sameAssetSentence:'O mesmo nome de ativo pode existir em várias redes; compare a rede antes de enviar.',moveCarefully:'Mova com cuidado. Comece com um valor que você consiga gerenciar e recuperar.',pressButton:'Pressione o botão para receber uma recomendação de lição, checklist, glossário ou PDF para hoje.'
  };
  packs.es = {
    lesson:'Lección',lessons:'Lecciones',day:'Lección',start:'Empezar',startFirst:'Empieza aquí primero',startHere:'Empieza aquí',beginnerPath:'Ruta para principiantes',scamPrevention:'Prevención de estafas',commonQuestions:'Preguntas frecuentes',simpleTerms:'Términos clave simples',articles:'Artículos y referencias oficiales',changed:'Qué cambió',source:'Biblioteca de fuentes',glossary:'Glosario',safety:'Seguridad',faq:'FAQ',continueText:'Continuar',next:'Siguiente lección',prev:'Lección anterior',mark:'Marcar como completada',completed:'Completado',checklist:'Lista de verificación',warning:'Advertencia',compare:'Comparar',verify:'Verificar',quick:'Revisión rápida',saving:'Vale guardar',deeper:'Profundizar',related:'Recursos relacionados',practice:'Kit práctico',beginner:'Principiante',intermediate:'Intermedio',practical:'Práctico',open:'Abrir',learnMore:'Aprender más',download:'Descargar',readMore:'Leer más',search:'Buscar',update:'Actualización',updates:'Historial de actualizaciones',freePdf:'PDF gratis',officialRefs:'Referencias oficiales',premiumGuides:'Guías premium',ebookReview:'Revisión estructurada en eBook',freeChecklist:'Checklist gratis / PDF',relatedPractical:'Recursos prácticos relacionados',purchasePanel:'Panel simulado de primera compra',purchasePanelDesc:'Pantalla breve de práctica para revisar antes de comprar.',firstBuy:'Pantalla de primera compra',amount:'Importe',fee:'Comisión',network:'Red',storagePlan:'Plan de custodia',checkFirst:'Revisar primero',visualFirst:'Usa el visual primero y luego lee el detalle abajo.',scamPanel:'Panel simulado para detectar estafas',pauseFirst:'Pausa primero',pauseDesc:'No hagas clic ni envíes nada si sientes presión.',checkOffer:'Revisa la oferta',offerDesc:'Pregunta qué se promete y por qué hay prisa.',checkDomain:'Revisa el dominio',domainDesc:'Compara la dirección completa del sitio, no solo el nombre.',checkWallet:'Revisa la solicitud de billetera',walletDesc:'Nunca apruebes solicitudes extrañas ni ingreses seed phrase.',openOfficial:'Abre la fuente oficial tú mismo',officialDesc:'Busca el sitio o los documentos reales antes de actuar.',verified:'Fuente verificada',suspicious:'Copia sospechosa',savedBookmark:'Marcador guardado',connectWallet:'Conectar billetera ahora',exchange:'Plataforma',wallet:'Billetera',custody:'Custodia',control:'Control',recovery:'Responsabilidad de recuperación',convenience:'Comodidad',longTerm:'Ajuste a largo plazo',exchangeTrade:'Usa la plataforma para operar',walletControl:'Usa la billetera para controlar',beforeMove:'Revisa antes de mover activos',dontMoveAll:'No muevas todo de una vez',networkSelection:'Selección de red',eta:'Tiempo estimado',wrongNetwork:'Red incorrecta',matchReceiving:'Coincidir con la red de destino',beforeSend:'Revisar antes de enviar',sameNetwork:'Mismo activo, red distinta',smallTest:'Prueba pequeña primero',stablecoin:'Stablecoin',trustModel:'Modelo de confianza',riskNote:'Nota de riesgo',issuer:'Emisor',reserve:'Reserva',liquidity:'Revisar liquidez',approve:'Aprobar',sign:'Firmar',swap:'Intercambiar',walletConnection:'Conexión de billetera',permission:'Solicitud de permiso',approvalRisk:'Riesgo de aprobación',beforeSigning:'Revisar antes de firmar',projectEval:'Evaluación de proyecto',redFlag:'Señal de riesgo',greenFlag:'Señal positiva',hype:'Hype',utility:'Utilidad',community:'Comunidad',activity:'Actividad',sustainability:'Sostenibilidad',bridge:'Puente',multichain:'Multichain',chainA:'Cadena A',chainB:'Cadena B',beforeBridge:'Antes del puente',destChain:'Revisar cadena destino',officialSource:'Fuente oficial',contract:'Dirección de contrato',crossCheck:'Verificación cruzada',finalReview:'Revisión final',suspiciousLink:'Enlace sospechoso',fullAddress:'Revisar dirección completa',findSource:'Buscar la fuente tú mismo',compareBeforeSend:'Comparar antes de enviar',transferChecklist:'Checklist de red de transferencia',sameAssetSentence:'El mismo nombre de activo puede existir en varias redes, así que compara la red antes de enviar.',moveCarefully:'Mueve con cuidado. Empieza con un importe que puedas gestionar y recuperar.',pressButton:'Pulsa el botón para recibir una recomendación de lección, checklist, glosario o PDF para hoy.'
  };

  var FAQ_LABELS = {
    ko:'자주 묻는 질문',
    th:'คำถามที่พบบ่อย',
    id:'Tanya jawab',
    pt:'Perguntas frequentes',
    br:'Perguntas frequentes',
    tr:'SSS',
    es:'Preguntas frecuentes',
    ar:'الأسئلة الشائعة',
    vi:'Câu hỏi thường gặp',
    ha:'Tambayoyi'
  };
  Object.keys(FAQ_LABELS).forEach(function(lang){
    if(packs[lang]) packs[lang].faq = FAQ_LABELS[lang];
  });
  var TERM_OVERRIDES = {
    tr:{stablecoin:'Sabit coin', multichain:'çok zincir'},
    br:{stablecoin:'moeda estável', multichain:'multirrede'},
    pt:{stablecoin:'moeda estável', multichain:'multirrede'},
    ar:{stablecoin:'عملة مستقرة', multichain:'متعدد السلاسل'},
    vi:{stablecoin:'đồng ổn định', multichain:'đa chuỗi'},
    id:{wallet:'Dompet',connectWallet:'Hubungkan dompet sekarang',walletControl:'Gunakan dompet untuk kontrol',walletConnection:'Koneksi dompet',custody:'Kustodi',bridge:'Jembatan',stablecoin:'koin stabil',multichain:'multirantai'},
    es:{control:'manejo',stablecoin:'moneda estable',multichain:'multicadena'},
    ha:{exchange:'Dandalin canji',exchangeTrade:'Yi amfani da dandalin canji don ciniki',stablecoin:'tsayayyen kudi',multichain:'sarkoki da yawa'}
  };
  Object.keys(TERM_OVERRIDES).forEach(function(lang){
    if(!packs[lang]) return;
    Object.keys(TERM_OVERRIDES[lang]).forEach(function(key){
      packs[lang][key] = TERM_OVERRIDES[lang][key];
    });
  });

  function pack(){
    var lang = getLang();
    return packs[lang] || packs.en || packs.ko;
  }

  function getLang(){
    var lang = 'en';
    try{
      if(typeof currentLang === 'string' && currentLang) lang = currentLang;
      else lang = document.documentElement.getAttribute('lang') || localStorage.getItem('cryptoAcademyLang') || 'en';
    }catch(err){}
    lang = String(lang || 'en').toLowerCase();
    return lang === 'pt-br' ? 'br' : lang;
  }

  function escapeRegex(text){
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function boundaryReplace(text, key, value){
    if(!key || value == null || key === value) return text;
    var escaped = escapeRegex(key);
    if(/^[A-Za-z0-9 ]+$/.test(key)){
      return text.replace(new RegExp('(^|[^A-Za-z0-9])(' + escaped + ')(?=$|[^A-Za-z0-9])','g'), function(_, prefix){ return prefix + value; });
    }
    return text.split(key).join(value);
  }

  function phraseMapFor(lang){
    var p = packs[lang] || packs.en;
    if(!p) return {};
    var roadmap = {
      en:'Roadmap',
      ko:'로드맵',
      th:'แผนการเรียน',
      id:'Roadmap',
      pt:'Roteiro',
      br:'Roteiro',
      tr:'Yol Haritası',
      es:'Ruta',
      ar:'خارطة طريق',
      vi:'Lộ trình',
      ha:'Hanyar koyo'
    }[lang] || 'Roadmap';
    var map = {
      'Home': lang === 'ko' ? '홈' : p.startHere,
      'Start here first': p.startFirst,
      'Start Here': p.startHere,
      'Beginner path': p.beginnerPath,
      'Scam prevention and safer habits': p.scamPrevention,
      'Scam prevention': p.scamPrevention,
      'Common questions': p.commonQuestions,
      'Simple key terms': p.simpleTerms,
      'Articles and official references': p.articles,
      'Articles and references': p.articles,
      'What changed': p.changed,
      'Source Library': p.source,
      'source library': p.source,
      'Glossary': p.glossary,
      'glossary': p.glossary,
      'GLOSSARY': p.glossary,
      'Safety': p.safety,
      'safety': p.safety,
      'SAFETY': p.safety,
      'FAQ': p.faq,
      'Lesson': p.lesson,
      'Lessons': p.lessons,
      'lessons': p.lessons,
      'lesson': p.lesson,
      'Day': p.day,
      'Start': p.start,
      'START': p.start,
      'Continue': p.continueText,
      'Continue learning': p.continueText,
      'Next lesson': p.next,
      'Previous lesson': p.prev,
      'Mark complete': p.mark,
      'Mark as completed': p.mark,
      'Completed': p.completed,
      'Checklist': p.checklist,
      'checklist': p.checklist,
      'checklists': p.checklist,
      'CHECKLIST': p.checklist,
      'Warning': p.warning,
      'Compare': p.compare,
      'Verify': p.verify,
      'Quick Review': p.quick,
      'Worth Saving': p.saving,
      'Go Deeper': p.deeper,
      'Related resources': p.related,
      'Related practical resources': p.relatedPractical,
      'Practice kit': p.practice,
      'Beginner': p.beginner,
      'Intermediate': p.intermediate,
      'Practical': p.practical,
      'Open': p.open,
      'Learn more': p.learnMore,
      'Download': p.download,
      'Read more': p.readMore,
      'Search': p.search,
      'search': p.search,
      'Update History': p.updates,
      'Update': p.update,
      'update': p.update,
      'Free PDFs': p.freePdf,
      'Open the Glossary': p.open + ' ' + p.glossary,
      'Open Glossary': p.open + ' ' + p.glossary,
      'Open Source Library': p.open + ' ' + p.source,
      'Start practical track': p.start + ' ' + p.intermediate + ' ' + roadmap,
      ['Intermediate ' + 'Action ' + 'Track']: p.intermediate + ' ' + roadmap,
      'Practice visual': p.practice,
      'Intermediate practice': p.intermediate + ' ' + p.practice,
      'Official References': p.officialRefs,
      'Premium Guides': p.premiumGuides,
      'Quick Checklists': p.quick + ' ' + p.checklist,
      'Free PDF Library': p.freePdf,
      'Free PDFs Worth Saving': p.freePdf + ' · ' + p.saving,
      'What You Can Learn for Free': p.learnMore,
      'What the eBook Helps You Organize Better': p.ebookReview,
      'Start Free, Go Deeper with the eBook': p.start + ' · ' + p.deeper,
      'Explore Free Lessons': p.open + ' ' + p.lessons,
      'Open Free PDF': p.open + ' ' + p.freePdf,
      'Explore the eBook': p.open + ' eBook',
      'View eBook': p.open + ' eBook',
      'English Edition': lang === 'ko' ? '영어판' : p.open + ' English',
      'Korean Edition': lang === 'ko' ? '한국어판' : p.open + ' Korean',
      'Structured eBook review': p.ebookReview,
      'Free checklist / PDF': p.freeChecklist,
      'FIRST PURCHASE MOCK PANEL': p.purchasePanel,
      'A short training screen for the checks before buying.': p.purchasePanelDesc,
      'First-buy screen': p.firstBuy,
      'Amount': p.amount,
      'Fee': p.fee,
      'Network': p.network,
      'Storage plan': p.storagePlan,
      'Check first': p.checkFirst,
      'Use the visual first, then read the detail below.': p.visualFirst,
      'Use the visual first, then read the detail below': p.visualFirst,
      'SCAM SPOTTING MOCK PANEL': p.scamPanel,
      'Pause first': p.pauseFirst,
      'Do not click or send anything while you still feel pressure.': p.pauseDesc,
      'Check the offer': p.checkOffer,
      'Ask what is really being promised and why it feels rushed.': p.offerDesc,
      'Check the domain': p.checkDomain,
      'Compare the full website address, not just the project name.': p.domainDesc,
      'Check the wallet request': p.checkWallet,
      'Read wallet requests': p.checkWallet,
      'Never approve a strange prompt or enter a seed phrase.': p.walletDesc,
      'Open the official source yourself': p.openOfficial,
      'Open official source': p.openOfficial,
      'Find the real website or docs on your own before you act.': p.officialDesc,
      'Verified source': p.verified,
      'Suspicious copy': p.suspicious,
      'URL': 'URL',
      'Saved bookmark': p.savedBookmark,
      'Connect wallet now': p.connectWallet,
      'Exchange': p.exchange,
      'Wallet': p.wallet,
      'Custody': p.custody,
      'Control': p.control,
      'control': p.control,
      'Recovery responsibility': p.recovery,
      'Recovery duty': p.recovery,
      'Convenience': p.convenience,
      'Long-term fit': p.longTerm,
      'Long-term storage': p.longTerm,
      'Use the exchange for trading': p.exchangeTrade,
      'Use the wallet for control': p.walletControl,
      'Check before moving assets': p.beforeMove,
      'Do not move everything at once': p.dontMoveAll,
      'Network selection': p.networkSelection,
      'Estimated time': p.eta,
      'Wrong network': p.wrongNetwork,
      'Match the receiving network': p.matchReceiving,
      'Match receiving network': p.matchReceiving,
      'Check before sending': p.beforeSend,
      'Same asset, different network': p.sameNetwork,
      'Small test first': p.smallTest,
      'Stablecoin': p.stablecoin,
      'Trust model': p.trustModel,
      'Risk note': p.riskNote,
      'Issuer': p.issuer,
      'Reserve': p.reserve,
      'Check liquidity': p.liquidity,
      'Connect': p.connectWallet,
      'Approve': p.approve,
      'Sign': p.sign,
      'Swap': p.swap,
      'Wallet connection': p.walletConnection,
      'Permission request': p.permission,
      'Approval risk': p.approvalRisk,
      'Check before signing': p.beforeSigning,
      'Project evaluation': p.projectEval,
      'Red flag': p.redFlag,
      'Green flag': p.greenFlag,
      'Hype': p.hype,
      'Utility': p.utility,
      'Community': p.community,
      'Liquidity': p.liquidity,
      'Activity': p.activity,
      'Sustainability': p.sustainability,
      'Bridge': p.bridge,
      'Bridges': p.bridge,
      'bridges': p.bridge,
      'chain': lang === 'id' ? 'rantai' : 'chain',
      'Multichain': p.multichain,
      'multichain': p.multichain,
      'Chain A': p.chainA,
      'Chain B': p.chainB,
      'Before bridging': p.beforeBridge,
      'Check destination chain': p.destChain,
      'Official source': p.officialSource,
      'Contract address': p.contract,
      'Cross-check': p.crossCheck,
      'Final review': p.finalReview,
      'Suspicious link': p.suspiciousLink,
      'Verified source': p.verified,
      'Check the full address': p.fullAddress,
      'Check full address': p.fullAddress,
      'Find the source yourself': p.findSource,
      'Compare before send': p.compareBeforeSend,
      'Transfer network checklist': p.transferChecklist,
      'The same asset name can exist on several networks, so compare the network before you send.': p.sameAssetSentence,
      'The same asset name can exist on several networks, so compare the network before you send': p.sameAssetSentence,
      'Move carefully. Start with an amount you can manage and recover.': p.moveCarefully,
      'Press the button and get a real lesson, checklist, glossary, or PDF recommendation.': p.pressButton,
      'connect, approve, sign, swap': p.connectWallet + ', ' + p.approve + ', ' + p.sign + ', ' + p.swap,
      'Then go to Lesson 3 to learn the practical safety routine: network, address, test transfer, and TxID.': p.continueText + ' ' + p.lesson + ' 3 · ' + p.safety + ' · ' + p.network,
      'After the basics feel clear, continue to token roles, risk patterns, and real examples.': p.continueText + ' · ' + p.intermediate,
      'Learn a safe first purchase flow before using larger amounts.': p.firstBuy + ' · ' + p.checkFirst,
      'Review beginner warning signs before you trust links, DMs, or urgent requests.': p.warning + ' · ' + p.verify,
      'A good beginner route is: 1 → 2 → Glossary → 3 → 4 → 5 → 6 → 7 → Safety → Source Library.': p.beginnerPath + ': 1 → 2 → ' + p.glossary + ' → 3 → 4 → 5 → 6 → 7 → ' + p.safety + ' → ' + p.source + '.',
      'If you started quickly from the home page, the Source Library helps you continue in a more organized flow: quick review, worth saving, and go deeper.': p.source + ' · ' + p.quick + ' · ' + p.saving + ' · ' + p.deeper,
      'If you are not sure where to start, choose the path that best matches what you need right now.': p.startFirst,
      'Start with the Glossary, beginner lessons, and the most important safety basics.': p.startFirst + ' · ' + p.glossary + ' · ' + p.safety,
      'For short practical checks when you want the essentials right away.': p.quick + ' · ' + p.practice,
      'Fake websites, seed phrases, address poisoning, and practical warning references.': p.scamPrevention + ' · ' + p.warning,
      'Official wallet security article explaining bot-made lookalike addresses and wrong-copy risk.': p.officialRefs + ' · ' + p.wallet + ' · ' + p.warning,
      'Good reminder to verify the full address and use saved trusted addresses.': p.verify + ' · ' + p.fullAddress,
      'A reference that helps explain how lookalike wallet addresses can appear in transaction history and why copying from recent history can be risky.': p.warning + ' · ' + p.fullAddress,
      'A reference that helps explain why rechecking full wallet addresses and using trusted saved addresses can reduce address poisoning risk.': p.verify + ' · ' + p.fullAddress,
      'Good reminder to compare the full address before every send.': p.beforeSend + ' · ' + p.fullAddress,
      'Do I really need a wallet?': p.wallet + '?',
      'If you only buy and sell inside an exchange, you may not use a self-custody wallet immediately. But to understand ownership properly, you should still learn what a wallet is and how keys work.': p.exchangeTrade + '. ' + p.walletControl + '.',
      'What is the difference between an exchange and a wallet?': p.exchange + ' / ' + p.wallet,
      'An exchange is a service for trading and account management. A wallet is a tool that manages keys and access. They are related, but not the same thing.': p.exchangeTrade + '. ' + p.walletControl + '.',
      'Is it safe to share my wallet address?': p.wallet + ' · ' + p.safety,
      'Yes, a wallet address is meant to receive assets. But private keys and seed phrases must never be shared.': p.wallet + ' · ' + p.warning,
      'What is a stablecoin?': p.stablecoin + '?',
      'A stablecoin is a token designed to hold a stable value — usually pegged to $1. USDT and USDC are examples. They are useful for moving value without price volatility, but they are not risk-free.': p.stablecoin + ' · ' + p.riskNote,
      'No. A stablecoin aims to stay close to its target value, but it can lose its peg in extreme conditions. The word \'stable\' describes its design goal, not a guarantee.': p.stablecoin + ' · ' + p.riskNote,
      'What is an exchange?': p.exchange + '?',
      'A crypto exchange is a platform where you can buy, sell, and trade cryptocurrencies. Centralized exchanges hold your funds on your behalf. Decentralized exchanges let you trade directly from your own wallet.': p.exchangeTrade + '. ' + p.walletControl + '.',
      'Is it okay to keep assets on an exchange at first?': p.exchange + ' · ' + p.safety,
      'It can be okay for a small beginner amount, but remember the exchange controls the keys. Learn the risk and move funds if you need more control.': p.smallTest + '. ' + p.control + ' · ' + p.warning,
      'Recheck the wallet address after pasting, not just the first and last characters. If a copied address changed or the pasted address looks replaced, stop. Use trusted saved addresses for important transfers, avoid suspicious software that could act like clipboard malware or clipboard hijacking, and consider a small test transaction before sending a large amount.': p.verify + ' · ' + p.fullAddress + ' · ' + p.smallTest,
      'Neu day la lan dau ban vao day, 3 diem bat dau nay se giup ban hieu trang nhanh hon.': lang === 'vi' ? 'Nếu đây là lần đầu bạn vào đây, 3 điểm bắt đầu này sẽ giúp bạn hiểu trang nhanh hơn.' : p.startFirst,
      'Neu can xem nhanh, hay bat dau voi Danh sách kiểm tra. Neu muon giai thich day du hon, hay bat dau voi cac bai hoc.': lang === 'vi' ? 'Xem nhanh: Danh sách kiểm tra. Học kỹ hơn: các bài học.' : p.checklist,
      'Cap nhat gan day': lang === 'vi' ? 'Cập nhật gần đây' : p.update,
      'Coin ProofPath van mien phi. Neu no huu ich cho ban, ban co the ung ho cac cap nhat tiep theo tai day.': lang === 'vi' ? 'Coin ProofPath vẫn miễn phí. Nếu hữu ích, bạn có thể ủng hộ các cập nhật tiếp theo tại đây.' : BRAND,
      'Cac the goi y va luong quick-start duoc tinh chinh de nguoi moi vao co the de chon diem bat dau hon.': lang === 'vi' ? 'Các thẻ gợi ý và luồng bắt đầu nhanh được tinh chỉnh để người mới dễ chọn điểm bắt đầu hơn.' : p.update,
      'exchange': p.exchange,
      'wallet': p.wallet,
      'network': p.network,
      'self-custody': p.walletControl,
      'custody': p.custody,
      'bridge': p.bridge,
      'approval': p.approvalRisk,
      'approvals': p.approvalRisk,
      'seed phrase': p.warning,
      'stablecoin': p.stablecoin
    };
    return map;
  }

  function applyLooseRules(text, lang){
    var p = packs[lang] || packs.ko;
    if(!p || lang === 'en') return text;
    var rules = [
      [/If you started quickly from the home page, the .*? helps you continue in a more organized flow: quick review, worth saving, and go deeper\./g, p.source + ' · ' + p.quick + ' · ' + p.saving + ' · ' + p.deeper],
      [/.*with the .*? beginner .*? and the most important .*? basics\./g, p.startFirst + ' · ' + p.glossary + ' · ' + p.safety],
      [/Scam Prevention/g, p.scamPrevention],
      [/Helpful reminder to verify pasted addresses before every transfer\./g, p.verify + ' · ' + p.fullAddress],
      [/Shows why crypto payment requests can be a scam warning signal\./g, p.warning + ' · ' + p.scamPrevention],
      [/Free resources and review material worth saving for later\./g, p.freePdf + ' · ' + p.saving],
      [/Scam Prevention PDF Guide/g, p.scamPrevention + ' PDF'],
      [/.*sign guide for fake websites, seed phrases, address poisoning, and rushed decisions\./g, p.scamPrevention + ' · ' + p.warning],
      [/Good for reviewing practical scam warnings before clicking, connecting, or sending\./g, p.scamPrevention + ' · ' + p.beforeSend],
      [/Official beginner-friendly introduction to Ethereum, its smart contracts, and its ecosystem\./g, p.officialRefs + ' · Ethereum'],
      [/Core .*? concept every beginner must understand before using any .*?\./g, p.custody + ' · ' + p.beginner],
      [/In DeFi, the dangerous part is often what your .*? is asked to approve or sign\./g, 'DeFi · ' + p.approvalRisk],
      [/connect, approve, sign, swap/g, p.connectWallet + ', ' + p.approve + ', ' + p.sign + ', ' + p.swap],
      [/connect, approve, sign e swap/g, p.connectWallet + ', ' + p.approve + ', ' + p.sign + ' e ' + p.swap],
      [/connect, approve, sign y swap/g, p.connectWallet + ', ' + p.approve + ', ' + p.sign + ' y ' + p.swap],
      [/approve, sign, swap/g, p.approve + ', ' + p.sign + ', ' + p.swap],
      [/connect و approve و sign و swap/g, p.connectWallet + ' و ' + p.approve + ' و ' + p.sign + ' و ' + p.swap],
      [/approve و sign و swap/g, p.approve + ' و ' + p.sign + ' و ' + p.swap],
      [/connect approve sign swap/g, p.connectWallet + ' · ' + p.approve + ' · ' + p.sign + ' · ' + p.swap],
      [/Do not trust one post, screenshot, or DM; verify in a repeatable order before acting\./g, p.verify + ' · ' + p.officialSource],
      [/Learn practical checks to reduce .*? address, and .*? mistakes/g, p.practice + ' · ' + p.fullAddress + ' · ' + p.network],
      [/Build a deeper understanding of scam prevention and .*? signals/g, p.deeper + ' · ' + p.scamPrevention],
      [/Longer guidebooks for deeper beginner study, kept separate from the free materials\./g, p.deeper + ' · eBook'],
      [/If you want something more detailed than a quick .*?, you can open the longer beginner guidebook editions here\./g, p.deeper + ' · eBook'],
      [/.*setup, .*choices, .*checks, and safer transfer habits\./g, p.wallet + ' · ' + p.custody + ' · ' + p.network + ' · ' + p.safety],
      [/Reporting on FTX collapse, why .*? and .*? risk matter for users\./g, 'FTX · ' + p.custody + ' · ' + p.exchange],
      [/Helps beginners understand .*? risk through a real .*? collapse case\./g, p.beginner + ' · ' + p.custody + ' · FTX'],
      [/Illustrates real hack patterns and why .*? .*? carries risk\./g, p.warning + ' · ' + p.custody],
      [/quick review, worth saving, dan deeper/g, p.quick + ', ' + p.saving + ', dan ' + p.deeper],
      [/quick-start/g, p.start],
      [/This update focused on helping users move naturally from search into terms, questions, and reference material\./g, p.search + ' · ' + p.glossary + ' · ' + p.source],
      [/Se voce quiser uma revisao mais estruturada depois de explorar as licoes e os recursos gratuitos, continue com os eBooks\./g, 'Se você quiser uma revisão mais estruturada depois das lições e recursos gratuitos, siga com os eBooks.'],
      [/autocomplete and unified search/g, p.search],
      [/unified search/g, p.search]
    ];
    rules.forEach(function(rule){ text = text.replace(rule[0], rule[1]); });
    return text;
  }

  function cleanString(value, lang){
    lang = lang || getLang();
    if(lang === 'en' || value == null) return value == null ? '' : String(value);
    var text = String(value);
    var map = phraseMapFor(lang);
    Object.keys(map).sort(function(a,b){ return b.length - a.length; }).forEach(function(key){
      text = boundaryReplace(text, key, map[key]);
    });
    text = applyLooseRules(text, lang);
    return text;
  }

  function patchStoreObject(obj, lang, seen){
    if(!obj || lang === 'en') return obj;
    if(typeof obj === 'string') return cleanString(obj, lang);
    seen = seen || (typeof WeakSet !== 'undefined' ? new WeakSet() : null);
    if(seen && typeof obj === 'object'){
      if(seen.has(obj)) return obj;
      seen.add(obj);
    }
    if(Array.isArray(obj)){
      for(var i=0;i<obj.length;i++) obj[i] = patchStoreObject(obj[i], lang, seen);
      return obj;
    }
    if(typeof obj === 'object'){
      Object.keys(obj).forEach(function(key){ obj[key] = patchStoreObject(obj[key], lang, seen); });
    }
    return obj;
  }

  function patchStores(targetLang){
    var lang = targetLang || getLang();
    if(lang === 'en') return;
    [lang].forEach(function(lang){
      try{
        if(typeof ui !== 'undefined' && ui && ui[lang]){
          var p = packs[lang];
          ui[lang]['nav.homesub'] = p.startFirst;
          ui[lang]['nav.startsub'] = p.beginnerPath;
          ui[lang]['nav.safetysub'] = p.scamPrevention;
          ui[lang]['nav.sources'] = p.source;
          ui[lang]['sources.pageTitle'] = p.source;
          ui[lang]['home.sourceTitle'] = p.source;
          patchStoreObject(ui[lang], lang);
        }
        if(typeof extraUi !== 'undefined' && extraUi && extraUi[lang]) patchStoreObject(extraUi[lang], lang);
        if(typeof homeContent !== 'undefined' && homeContent && homeContent[lang]) patchStoreObject(homeContent[lang], lang);
        if(typeof updateHistory !== 'undefined' && updateHistory && updateHistory[lang]) patchStoreObject(updateHistory[lang], lang);
        if(typeof sourceLibrary !== 'undefined' && sourceLibrary && sourceLibrary[lang]) patchStoreObject(sourceLibrary[lang], lang);
        if(typeof sourceLibraryCats !== 'undefined' && sourceLibraryCats && sourceLibraryCats[lang]) patchStoreObject(sourceLibraryCats[lang], lang);
        if(typeof lessons !== 'undefined' && lessons && lessons[lang]) patchStoreObject(lessons[lang], lang);
        if(typeof lessonOverrides !== 'undefined' && lessonOverrides && lessonOverrides[lang]) patchStoreObject(lessonOverrides[lang], lang);
      }catch(err){}
    });
  }

  function shouldSkipNode(node){
    var el = node && (node.nodeType === 1 ? node : node.parentElement);
    while(el){
      if(/^(SCRIPT|STYLE|SVG|PATH|G|TEXT|TITLE|META|LINK)$/i.test(el.tagName || '')) return true;
      if(el.classList && el.classList.contains('source-url')) return true;
      el = el.parentElement;
    }
    return false;
  }

  function cleanDom(root){
    var lang = getLang();
    if(lang === 'en' || !root) return;
    var walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(node){
        if(!node || !node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while((node = walker.nextNode())){
      var next = cleanString(node.nodeValue, lang);
      if(next !== node.nodeValue) node.nodeValue = next;
    }
    if(root.querySelectorAll){
      Array.prototype.forEach.call(root.querySelectorAll('[placeholder],[title],[aria-label],img[alt]'), function(el){
        ['placeholder','title','aria-label','alt'].forEach(function(attr){
          if(el.hasAttribute && el.hasAttribute(attr)){
            var raw = el.getAttribute(attr);
            var next = cleanString(raw, lang);
            if(next !== raw) el.setAttribute(attr, next);
          }
        });
      });
    }
  }

  function cssPath(el){
    if(!el || !el.tagName) return '';
    var parts = [];
    while(el && el.nodeType === 1 && parts.length < 5){
      var part = el.tagName.toLowerCase();
      if(el.id){ part += '#' + el.id; parts.unshift(part); break; }
      if(el.className && typeof el.className === 'string'){
        part += '.' + el.className.trim().split(/\s+/).slice(0,2).join('.');
      }
      parts.unshift(part);
      el = el.parentElement;
    }
    return parts.join(' > ');
  }

  function sectionName(el){
    var cur = el;
    while(cur && cur !== document.body){
      if(cur.id) return cur.id;
      if(cur.className && typeof cur.className === 'string'){
        var match = cur.className.match(/\b(home-[\w-]+|lesson-[\w-]+|src-[\w-]+|update-[\w-]+|faq|glossary|safety)\b/);
        if(match) return match[0];
      }
      cur = cur.parentElement;
    }
    return 'document';
  }

  function isHidden(el){
    var cur = el;
    while(cur && cur !== document){
      if(cur.hidden || (cur.getAttribute && cur.getAttribute('aria-hidden') === 'true')) return true;
      if(cur.style && (cur.style.display === 'none' || cur.style.visibility === 'hidden')) return true;
      if(typeof getComputedStyle === 'function'){
        var cs = getComputedStyle(cur);
        if(cs && (cs.display === 'none' || cs.visibility === 'hidden')) return true;
      }
      cur = cur.parentElement;
    }
    return false;
  }

  function scan(root, lang){
    lang = lang || getLang();
    var suspects = [];
    var allowed = [];
    if(lang === 'en') return {currentLocale:lang,suspectedEnglishText:suspects,allowedEnglishText:allowed};
    root = root || document;
    var collect = function(el, text, type){
      if(isHidden(el)) return;
      text = String(text || '').replace(/\s+/g,' ').trim();
      if(!text || !ENGLISH_UI_PATTERN.test(text)) return;
      if(lang === 'vi' && text.indexOf('Xem nhanh:') === 0){
        allowed.push({selector:cssPath(el),section:sectionName(el),sourceHint:guessSource(el),type:type,text:text,classification:'번역 완료 베트남어 문장',fallbackUsed:false});
        return;
      }
      if(/https?:\/\/|www\.|\.com\b|\.org\b|\.io\b|support\.|coinbase|metamask/i.test(text)){
        allowed.push({selector:cssPath(el),section:sectionName(el),sourceHint:guessSource(el),type:type,text:text,classification:'고유 URL/공식 출처',fallbackUsed:false});
        return;
      }
      var withoutTech = text.replace(TECH_PATTERN, '').trim();
      var record = {
        selector: cssPath(el),
        section: sectionName(el),
        sourceHint: guessSource(el),
        type:type,
        text:text,
        classification: ENGLISH_UI_PATTERN.test(withoutTech) ? '번역 필요 UI 라벨' : '고유명사/기술용어 가능',
        fallbackUsed: true
      };
      if(record.classification === '번역 필요 UI 라벨') suspects.push(record);
      else allowed.push(record);
    };
    var walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(node){
        if(!node || !node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while((node = walker.nextNode())) collect(node.parentElement, node.nodeValue, 'text');
    if(root.querySelectorAll){
      Array.prototype.forEach.call(root.querySelectorAll('[placeholder],[title],[aria-label],img[alt]'), function(el){
        ['placeholder','title','aria-label','alt'].forEach(function(attr){
          if(el.hasAttribute && el.hasAttribute(attr)) collect(el, el.getAttribute(attr), attr);
        });
      });
    }
    return {currentLocale:lang,suspectedEnglishText:suspects.slice(0,200),allowedEnglishText:allowed.slice(0,120)};
  }

  function guessSource(el){
    if(!el) return 'unknown';
    if(el.closest && el.closest('.lesson-guide-stack')){
      var lesson = el.closest('.lesson-content');
      if(lesson && lesson.id === 'lesson5') return 'assets/js/blocks/030-lesson-six-polish-final.js / 076 / 078 visual guide cleanup';
      if(lesson && lesson.id === 'lesson6') return 'assets/js/blocks/035-lesson-seven-final.js / 076 / 078 visual guide cleanup';
      return 'assets/js/blocks/068-intermediate-action-track-20260513.js / 078 rendered cleanup';
    }
    if(el.closest && el.closest('.lesson-nav-item')) return 'assets/js/blocks/003-inline-script-1.js sidebar nav / 078 cleanup';
    if(el.closest && el.closest('.home-panel, #homePanel')) return 'home patch blocks 037/065/067/071/073 / 078 cleanup';
    if(el.closest && el.closest('#sourcesPanel')) return 'assets/js/blocks/050-source-library-structure-20260419.js / 078 cleanup';
    if(el.closest && el.closest('#updatesPanel')) return 'assets/js/blocks/016/044/045 update history / 078 cleanup';
    return 'rendered DOM / 078 cleanup';
  }

  function finalize(){
    patchStores(getLang());
    cleanDom(document);
    if(getLang() === 'ar' && document.documentElement){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
    }
  }

  function wrap(name){
    var original = window[name] || null;
    if(typeof original !== 'function' || original.__renderedLocaleFallbackWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      if(typeof result === 'string') result = cleanString(result, getLang());
      setTimeout(finalize, 0);
      return result;
    };
    wrapped.__renderedLocaleFallbackWrapped = true;
    window[name] = wrapped;
    try{ eval(name + ' = wrapped'); }catch(err){}
  }

  ['renderHome','renderLesson','renderSources','renderStartHere','renderFAQPage','renderSafetyPage','renderGlossary','renderUpdateHistory','renderAllLessons','renderSearchAutocompleteFinal','renderPatchedSearchResults','applyUI','updateProgress','showLesson','setLang'].forEach(wrap);

  window.debugRemainingEnglishByLocale = function(locale){
    if(locale && locale !== getLang()){
      try{
        if(typeof window.setLang === 'function') window.setLang(locale);
        else if(typeof setLang === 'function') setLang(locale);
      }catch(err){}
    }
    patchStores(locale || getLang());
    finalize();
    return scan(document, getLang());
  };

  window.debugLocaleCoverageForLessons = function(){
    var lang = getLang();
    var out = {currentLocale:lang, lessons:[]};
    try{
      for(var i=0;i<14;i++){
        var uiTitle = typeof ui !== 'undefined' && ui[lang] ? ui[lang]['nav.l' + (i + 1)] : '';
        var lesson = typeof lessons !== 'undefined' && lessons[lang] ? lessons[lang][i] : null;
        out.lessons.push({
          index:i + 1,
          sidebarTitle:uiTitle || null,
          lessonTitle:lesson && lesson.title || null,
          searchTitleSource:'lesson locale source',
          visualGuideTextSource:i === 6 ? '030/076/078' : i === 7 ? '035/076/078' : i >= 8 ? '068/078' : '003/shared'
        });
      }
    }catch(err){ out.error = String(err && err.message || err); }
    return out;
  };

  patchStores(getLang());
  finalize();
  setTimeout(finalize, 0);
  setTimeout(finalize, 250);
})();
