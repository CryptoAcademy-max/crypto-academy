(function(){
  // ===== SVG ICONS FOR BOXES =====
  var boxIcons = {
    takeaway:'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
    note:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    mistake:'<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    idea:'<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>'
  };

  function summaryBox(type, label, text){
    return '<div class="summary-box '+type+'"><span class="summary-box-icon">'+boxIcons[type]+'</span><div><div class="summary-box-label">'+label+'</div>'+text+'</div></div>';
  }

  function compareCard(titleA, descA, titleB, descB){
    return '<div class="compare-card"><div class="compare-side"><div class="compare-side-label">A</div><div class="compare-side-title">'+titleA+'</div><div class="compare-side-desc">'+descA+'</div></div><div class="compare-side"><div class="compare-side-label">B</div><div class="compare-side-title">'+titleB+'</div><div class="compare-side-desc">'+descB+'</div></div></div>';
  }

  // ===== MULTILINGUAL CONTENT =====
  var compareData = {
    en: {
      walletExchange: {
        header: 'Wallet vs Exchange',
        a: ['Wallet','A tool that manages your keys. You control access to your assets directly. Requires you to keep your seed phrase safe.'],
        b: ['Exchange','A platform where you trade. The exchange holds your keys for you. Convenient, but you depend on their security.']
      },
      seedPrivate: {
        header: 'Seed Phrase vs Private Key',
        a: ['Seed Phrase','A set of recovery words (usually 12 or 24). It can restore your entire wallet. If someone gets it, they get full control.'],
        b: ['Private Key','A single cryptographic key tied to one address. It signs transactions. Losing it means losing access to that address.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Financial functions built with code — lending, swapping, earning — without a traditional bank. Higher flexibility, but also higher risk.'],
        b: ['Stablecoin','A token designed to stay close to a reference value (like $1 USD). Used for transfers and pricing with lower daily volatility.']
      }
    },
    ko: {
      walletExchange: {
        header: '지갑 vs 거래소',
        a: ['지갑 (Wallet)','키를 직접 관리하는 도구입니다. 자산에 대한 접근 권한을 본인이 통제합니다. 시드 문구를 안전하게 보관해야 합니다.'],
        b: ['거래소 (Exchange)','거래하는 플랫폼입니다. 거래소가 키를 대신 보관합니다. 편리하지만 거래소의 보안에 의존하게 됩니다.']
      },
      seedPrivate: {
        header: '시드 문구 vs 개인키',
        a: ['시드 문구 (Seed Phrase)','복구용 단어 모음(보통 12개 또는 24개)입니다. 지갑 전체를 복원할 수 있습니다. 누군가 얻으면 완전한 통제권을 가집니다.'],
        b: ['개인키 (Private Key)','하나의 주소에 연결된 암호학적 키입니다. 거래에 서명합니다. 잃어버리면 해당 주소에 접근할 수 없습니다.']
      },
      defiStable: {
        header: 'DeFi vs 스테이블코인',
        a: ['DeFi (탈중앙 금융)','코드로 구현된 금융 기능 — 대출, 교환, 수익 창출 — 전통 은행 없이 작동합니다. 유연하지만 위험도 높습니다.'],
        b: ['스테이블코인 (Stablecoin)','기준 가치(예: 1달러)에 가깝게 유지되도록 설계된 토큰입니다. 일일 변동성이 낮아 전송과 가격 책정에 사용됩니다.']
      }
    },
    th: {
      walletExchange: {
        header: 'วอลเล็ต vs ตลาดแลกเปลี่ยน',
        a: ['วอลเล็ต','เครื่องมือจัดการกุญแจ คุณควบคุมการเข้าถึงสินทรัพย์โดยตรง ต้องเก็บวลีสำรองให้ปลอดภัย'],
        b: ['ตลาดแลกเปลี่ยน','แพลตฟอร์มซื้อขาย ตลาดถือกุญแจแทนคุณ สะดวกแต่ต้องพึ่งพาความปลอดภัยของแพลตฟอร์ม']
      },
      seedPrivate: {
        header: 'วลีสำรอง vs คีย์ส่วนตัว',
        a: ['วลีสำรอง','ชุดคำสำรอง (ปกติ 12 หรือ 24 คำ) สามารถกู้คืนวอลเล็ตทั้งหมด ถ้าใครได้ไปจะได้สิทธิ์ควบคุมทั้งหมด'],
        b: ['คีย์ส่วนตัว','กุญแจเข้ารหัสที่ผูกกับที่อยู่เดียว ใช้ลงนามธุรกรรม สูญหายหมายถึงเสียการเข้าถึงที่อยู่นั้น']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','ฟังก์ชันการเงินสร้างด้วยโค้ด — ให้ยืม แลก รับผลตอบแทน — โดยไม่ต้องมีธนาคาร ยืดหยุ่นแต่เสี่ยงสูง'],
        b: ['Stablecoin','โทเคนที่ออกแบบให้ใกล้เคียงมูลค่าอ้างอิง (เช่น $1) ใช้สำหรับโอนและกำหนดราคาที่ผันผวนน้อย']
      }
    },
    id: {
      walletExchange: {
        header: 'Wallet vs Exchange',
        a: ['Wallet','Alat yang mengelola kunci Anda. Anda mengontrol akses ke aset secara langsung. Anda harus menjaga frasa pemulihan.'],
        b: ['Exchange','Platform tempat Anda berdagang. Exchange memegang kunci untuk Anda. Nyaman, tetapi bergantung pada keamanan mereka.']
      },
      seedPrivate: {
        header: 'Frasa Pemulihan vs Kunci Privat',
        a: ['Frasa Pemulihan','Kumpulan kata pemulihan (biasanya 12 atau 24). Bisa memulihkan seluruh wallet. Jika seseorang mendapatnya, mereka mendapat kontrol penuh.'],
        b: ['Kunci Privat','Satu kunci kriptografi terikat ke satu alamat. Digunakan untuk menandatangani transaksi. Kehilangannya berarti kehilangan akses.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Fungsi keuangan yang dibangun dengan kode — pinjam, tukar, hasilkan — tanpa bank tradisional. Lebih fleksibel, tetapi juga lebih berisiko.'],
        b: ['Stablecoin','Token yang dirancang tetap dekat dengan nilai acuan (seperti $1). Digunakan untuk transfer dan penetapan harga dengan volatilitas rendah.']
      }
    },
    pt: {
      walletExchange: {
        header: 'Carteira vs Exchange',
        a: ['Carteira','Ferramenta que gerencia suas chaves. Você controla o acesso aos seus ativos diretamente. Precisa manter a frase de recuperação segura.'],
        b: ['Exchange','Plataforma onde você negocia. A exchange guarda suas chaves. Conveniente, mas você depende da segurança deles.']
      },
      seedPrivate: {
        header: 'Frase de Recuperação vs Chave Privada',
        a: ['Frase de Recuperação','Um conjunto de palavras de recuperação (geralmente 12 ou 24). Pode restaurar toda a carteira. Se alguém obtiver, terá controle total.'],
        b: ['Chave Privada','Uma única chave criptográfica vinculada a um endereço. Assina transações. Perdê-la significa perder acesso àquele endereço.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Funções financeiras construídas com código — empréstimos, trocas, rendimentos — sem banco tradicional. Mais flexível, mas também mais arriscado.'],
        b: ['Stablecoin','Token projetado para ficar próximo de um valor de referência (como $1). Usado para transferências e precificação com menor volatilidade.']
      }
    },
    tr: {
      walletExchange: {
        header: 'Cüzdan vs Borsa',
        a: ['Cüzdan','Anahtarlarınızı yöneten araç. Varlıklarınıza erişimi doğrudan siz kontrol edersiniz. Kurtarma ifadesini güvenli tutmanız gerekir.'],
        b: ['Borsa','İşlem yaptığınız platform. Borsa anahtarlarınızı sizin adınıza tutar. Kullanışlı ama güvenliğiniz onlara bağlı.']
      },
      seedPrivate: {
        header: 'Kurtarma İfadesi vs Özel Anahtar',
        a: ['Kurtarma İfadesi','Kurtarma kelimeleri seti (genelde 12 veya 24). Tüm cüzdanı geri yükleyebilir. Birisi alırsa tam kontrol elde eder.'],
        b: ['Özel Anahtar','Tek bir adrese bağlı kriptografik anahtar. İşlemleri imzalar. Kaybetmek o adrese erişimi kaybetmek demektir.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Kodla oluşturulan finansal fonksiyonlar — ödünç verme, takas, kazanç — geleneksel banka olmadan. Daha esnek ama daha riskli.'],
        b: ['Stablecoin','Bir referans değere (örn. $1) yakın kalmak üzere tasarlanmış token. Düşük günlük oynaklık ile transfer ve fiyatlandırma için kullanılır.']
      }
    },
    es: {
      walletExchange: {
        header: 'Billetera vs Exchange',
        a: ['Billetera','Herramienta que gestiona tus claves. Tú controlas el acceso a tus activos. Debes mantener la frase semilla segura.'],
        b: ['Exchange','Plataforma donde intercambias. El exchange guarda tus claves. Cómodo, pero dependes de su seguridad.']
      },
      seedPrivate: {
        header: 'Frase Semilla vs Clave Privada',
        a: ['Frase Semilla','Un conjunto de palabras de recuperación (usualmente 12 o 24). Puede restaurar toda la billetera. Si alguien la obtiene, tendrá control total.'],
        b: ['Clave Privada','Una única clave criptográfica vinculada a una dirección. Firma transacciones. Perderla significa perder acceso a esa dirección.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Funciones financieras construidas con código — préstamos, intercambios, rendimientos — sin banco tradicional. Más flexible, pero también más riesgoso.'],
        b: ['Stablecoin','Token diseñado para mantenerse cerca de un valor de referencia (como $1). Usado para transferencias y fijación de precios con menor volatilidad.']
      }
    },
    ar: {
      walletExchange: {
        header: 'المحفظة مقابل البورصة',
        a: ['المحفظة','أداة تدير مفاتيحك. أنت تتحكم في الوصول إلى أصولك مباشرة. يجب أن تحافظ على عبارة الاسترداد آمنة.'],
        b: ['البورصة','منصة للتداول. البورصة تحتفظ بمفاتيحك نيابة عنك. مريحة لكنك تعتمد على أمانها.']
      },
      seedPrivate: {
        header: 'عبارة الاسترداد مقابل المفتاح الخاص',
        a: ['عبارة الاسترداد','مجموعة كلمات استرداد (عادة 12 أو 24). يمكنها استعادة المحفظة بالكامل. إذا حصل عليها أحد يحصل على تحكم كامل.'],
        b: ['المفتاح الخاص','مفتاح تشفيري واحد مرتبط بعنوان واحد. يوقّع المعاملات. فقدانه يعني فقدان الوصول لذلك العنوان.']
      },
      defiStable: {
        header: 'التمويل اللامركزي مقابل العملة المستقرة',
        a: ['التمويل اللامركزي','وظائف مالية مبنية بالكود — إقراض وتبادل وأرباح — بدون بنك تقليدي. أكثر مرونة لكن أكثر خطورة.'],
        b: ['العملة المستقرة','رمز مصمم للبقاء قريباً من قيمة مرجعية (مثل $1). يُستخدم للتحويلات والتسعير مع تقلب يومي أقل.']
      }
    },
    vi: {
      walletExchange: {
        header: 'Ví vs Sàn giao dịch',
        a: ['Ví tiền','Công cụ quản lý khóa. Bạn kiểm soát quyền truy cập tài sản trực tiếp. Cần giữ cụm từ khôi phục an toàn.'],
        b: ['Sàn giao dịch','Nền tảng giao dịch. Sàn giữ khóa thay bạn. Tiện lợi nhưng phụ thuộc vào bảo mật của họ.']
      },
      seedPrivate: {
        header: 'Cụm từ khôi phục vs Khóa riêng tư',
        a: ['Cụm từ khôi phục','Bộ từ khôi phục (thường 12 hoặc 24). Có thể khôi phục toàn bộ ví. Ai có được sẽ có toàn quyền kiểm soát.'],
        b: ['Khóa riêng tư','Một khóa mã hóa gắn với một địa chỉ. Dùng để ký giao dịch. Mất nó nghĩa là mất quyền truy cập địa chỉ đó.']
      },
      defiStable: {
        header: 'DeFi vs Stablecoin',
        a: ['DeFi','Chức năng tài chính xây bằng mã — cho vay, hoán đổi, kiếm lời — không cần ngân hàng truyền thống. Linh hoạt hơn nhưng rủi ro hơn.'],
        b: ['Stablecoin','Token thiết kế để giữ gần giá trị tham chiếu (như $1). Dùng cho chuyển tiền và định giá với biến động thấp.']
      }
    }
  };
  // br falls back to pt
compareData.br = compareData.pt;
compareData.ha = compareData.en;

  // Summary box texts per lesson and page
  var summaryData = {
    en: {
      lessons: [
        // Lesson 0 - Blockchain
        [{type:'takeaway',label:'Key Takeaway',text:'A blockchain is a shared record — not controlled by one company. That\'s what makes it different from a regular database.'}],
        // Lesson 1 - Wallet
        [{type:'note',label:'Beginner Note',text:'A wallet doesn\'t store coins inside it. It manages keys that prove you control assets recorded on the blockchain.'},
         {type:'mistake',label:'Common Mistake',text:'Treating an exchange account the same as owning a wallet. They are very different in terms of control.'}],
        // Lesson 2 - Transfer
        [{type:'takeaway',label:'Key Takeaway',text:'Always check: network → address → test transfer → TxID. This simple habit prevents most transfer mistakes.'}],
        // Lesson 3 - Token Roles
        [{type:'idea',label:'Quick Idea',text:'Instead of asking "Is this coin good?", ask "What role does this token play?" Roles reveal more than names.'}],
        // Lesson 4 - Real-world
        [{type:'takeaway',label:'Key Takeaway',text:'Real cases teach you where risk actually appears — phishing, custody failures, or design flaws. Learn the pattern, not just the headline.'}]
      ],
      home: {type:'note',label:'Beginner Note',text:'If this is your first time, just follow the lessons in order. Each one builds on the last. No rush.'},
      safety: {type:'takeaway',label:'Key Takeaway',text:'If someone asks for your seed phrase or demands urgent crypto payment — that\'s a scam signal. Always pause and verify.'},
      glossary: {type:'note',label:'Beginner Note',text:'You don\'t need to memorize everything. Come back to this page whenever a lesson uses an unfamiliar term.'}
    },
    ko: {
      lessons: [
        [{type:'takeaway',label:'핵심 요약',text:'블록체인은 하나의 회사가 아닌 여러 참여자가 함께 관리하는 공유 기록입니다. 이것이 일반 데이터베이스와 다른 점입니다.'}],
        [{type:'note',label:'초보자 참고',text:'지갑은 코인을 담는 상자가 아닙니다. 블록체인에 기록된 자산에 대한 통제권을 증명하는 키를 관리하는 도구입니다.'},
         {type:'mistake',label:'흔한 실수',text:'거래소 계정을 지갑과 같은 것으로 착각하는 것. 통제 방식에서 큰 차이가 있습니다.'}],
        [{type:'takeaway',label:'핵심 요약',text:'항상 확인하세요: 네트워크 → 주소 → 테스트 전송 → TxID. 이 간단한 습관이 대부분의 전송 실수를 방지합니다.'}],
        [{type:'idea',label:'한 줄 핵심',text:'"이 코인이 좋은가요?" 대신 "이 토큰의 역할이 뭔가요?"라고 물어보세요. 역할이 이름보다 더 많은 것을 알려줍니다.'}],
        [{type:'takeaway',label:'핵심 요약',text:'실제 사례는 위험이 어디서 발생하는지를 가르쳐줍니다 — 피싱, 커스터디 실패, 설계 결함. 헤드라인이 아닌 패턴을 배우세요.'}]
      ],
      home: {type:'note',label:'초보자 참고',text:'처음이라면 강의를 순서대로 따라가세요. 각 강의는 이전 내용을 기반으로 합니다. 서두를 필요 없습니다.'},
      safety: {type:'takeaway',label:'핵심 요약',text:'누군가 시드 문구를 요구하거나 긴급한 크립토 결제를 요구하면 — 그것은 사기 신호입니다. 항상 멈추고 확인하세요.'},
      glossary: {type:'note',label:'초보자 참고',text:'모든 것을 외울 필요는 없습니다. 강의에서 낯선 용어가 나오면 이 페이지로 돌아오세요.'}
    },
    th: {
      lessons: [
        [{type:'takeaway',label:'สรุปสำคัญ',text:'บล็อกเชนคือบันทึกร่วมที่ไม่ได้ถูกควบคุมโดยบริษัทเดียว นี่คือสิ่งที่ทำให้มันต่างจากฐานข้อมูลทั่วไป'}],
        [{type:'note',label:'หมายเหตุสำหรับมือใหม่',text:'วอลเล็ตไม่ได้เก็บเหรียญไว้ข้างใน มันจัดการกุญแจที่พิสูจน์ว่าคุณควบคุมสินทรัพย์บนบล็อกเชน'},
         {type:'mistake',label:'ข้อผิดพลาดที่พบบ่อย',text:'มองบัญชี exchange เหมือนกับการมีวอลเล็ตของตัวเอง ทั้งสองแตกต่างกันมากในเรื่องการควบคุม'}],
        [{type:'takeaway',label:'สรุปสำคัญ',text:'ตรวจสอบเสมอ: เครือข่าย → ที่อยู่ → โอนทดสอบ → TxID นิสัยง่ายๆ นี้ป้องกันข้อผิดพลาดส่วนใหญ่'}],
        [{type:'idea',label:'แนวคิดด่วน',text:'แทนที่จะถามว่า "เหรียญนี้ดีไหม?" ให้ถามว่า "โทเคนนี้มีบทบาทอะไร?" บทบาทบอกอะไรได้มากกว่าชื่อ'}],
        [{type:'takeaway',label:'สรุปสำคัญ',text:'กรณีจริงสอนว่าความเสี่ยงเกิดขึ้นที่ไหน — ฟิชชิง ความล้มเหลวด้าน custody หรือข้อบกพร่องในการออกแบบ'}]
      ],
      home: {type:'note',label:'หมายเหตุสำหรับมือใหม่',text:'ถ้าเป็นครั้งแรก ให้เรียนตามลำดับ แต่ละบทเรียนต่อยอดจากบทก่อนหน้า ไม่ต้องรีบ'},
      safety: {type:'takeaway',label:'สรุปสำคัญ',text:'ถ้ามีใครขอวลีสำรองหรือเร่งให้จ่ายด้วยคริปโต — นั่นคือสัญญาณหลอกลวง หยุดและตรวจสอบเสมอ'},
      glossary: {type:'note',label:'หมายเหตุสำหรับมือใหม่',text:'ไม่จำเป็นต้องจำทั้งหมด กลับมาที่หน้านี้เมื่อเจอคำที่ไม่คุ้นเคยในบทเรียน'}
    },
    id: {
      lessons: [
        [{type:'takeaway',label:'Poin Utama',text:'Blockchain adalah catatan bersama — tidak dikontrol satu perusahaan. Itulah yang membuatnya berbeda dari database biasa.'}],
        [{type:'note',label:'Catatan Pemula',text:'Wallet tidak menyimpan koin di dalamnya. Ia mengelola kunci yang membuktikan Anda mengontrol aset di blockchain.'},
         {type:'mistake',label:'Kesalahan Umum',text:'Menganggap akun exchange sama dengan memiliki wallet. Keduanya sangat berbeda dalam hal kontrol.'}],
        [{type:'takeaway',label:'Poin Utama',text:'Selalu periksa: jaringan → alamat → transfer uji → TxID. Kebiasaan sederhana ini mencegah sebagian besar kesalahan transfer.'}],
        [{type:'idea',label:'Ide Cepat',text:'Daripada bertanya "Apakah koin ini bagus?" tanyakan "Apa peran token ini?" Peran mengungkap lebih banyak daripada nama.'}],
        [{type:'takeaway',label:'Poin Utama',text:'Kasus nyata mengajarkan di mana risiko muncul — phishing, kegagalan custody, atau kelemahan desain.'}]
      ],
      home: {type:'note',label:'Catatan Pemula',text:'Jika ini pertama kalinya, ikuti pelajaran secara berurutan. Setiap pelajaran dibangun di atas yang sebelumnya.'},
      safety: {type:'takeaway',label:'Poin Utama',text:'Jika seseorang meminta frasa pemulihan atau memaksa pembayaran crypto mendesak — itu sinyal penipuan. Selalu berhenti dan verifikasi.'},
      glossary: {type:'note',label:'Catatan Pemula',text:'Anda tidak perlu menghafal semuanya. Kembali ke halaman ini kapan pun menemukan istilah asing.'}
    },
    pt: {
      lessons: [
        [{type:'takeaway',label:'Ponto-chave',text:'Blockchain é um registro compartilhado — não controlado por uma empresa. Isso a diferencia de um banco de dados comum.'}],
        [{type:'note',label:'Nota para Iniciantes',text:'Uma carteira não armazena moedas. Ela gerencia chaves que provam que você controla ativos no blockchain.'},
         {type:'mistake',label:'Erro Comum',text:'Tratar uma conta de exchange como se fosse uma carteira. São muito diferentes em termos de controle.'}],
        [{type:'takeaway',label:'Ponto-chave',text:'Sempre verifique: rede → endereço → transferência teste → TxID. Este hábito simples previne a maioria dos erros.'}],
        [{type:'idea',label:'Ideia Rápida',text:'Em vez de perguntar "Essa moeda é boa?", pergunte "Qual o papel deste token?" Papéis revelam mais que nomes.'}],
        [{type:'takeaway',label:'Ponto-chave',text:'Casos reais mostram onde o risco aparece — phishing, falhas de custódia ou defeitos de design.'}]
      ],
      home: {type:'note',label:'Nota para Iniciantes',text:'Se é sua primeira vez, siga as lições em ordem. Cada uma se baseia na anterior. Sem pressa.'},
      safety: {type:'takeaway',label:'Ponto-chave',text:'Se alguém pedir sua frase de recuperação ou exigir pagamento urgente em cripto — é sinal de golpe. Sempre pare e verifique.'},
      glossary: {type:'note',label:'Nota para Iniciantes',text:'Não precisa decorar tudo. Volte a esta página quando encontrar um termo desconhecido.'}
    },
    tr: {
      lessons: [
        [{type:'takeaway',label:'Ana Fikir',text:'Blockchain paylaşılan bir kayıttır — tek bir şirket tarafından kontrol edilmez. Onu normal bir veritabanından farklı kılan budur.'}],
        [{type:'note',label:'Başlangıç Notu',text:'Cüzdan içinde jeton saklamaz. Blockchain üzerindeki varlıkları kontrol ettiğinizi kanıtlayan anahtarları yönetir.'},
         {type:'mistake',label:'Sık Yapılan Hata',text:'Borsa hesabını cüzdanla aynı şey sanmak. Kontrol açısından çok farklıdırlar.'}],
        [{type:'takeaway',label:'Ana Fikir',text:'Her zaman kontrol edin: ağ → adres → test transferi → TxID. Bu basit alışkanlık çoğu hatayı önler.'}],
        [{type:'idea',label:'Hızlı Fikir',text:'"Bu coin iyi mi?" yerine "Bu tokenın rolü ne?" diye sorun. Roller isimlerden daha fazlasını ortaya koyar.'}],
        [{type:'takeaway',label:'Ana Fikir',text:'Gerçek vakalar riskin nerede ortaya çıktığını öğretir — phishing, saklama arızaları veya tasarım kusurları.'}]
      ],
      home: {type:'note',label:'Başlangıç Notu',text:'İlk kez geliyorsanız dersleri sırayla takip edin. Her ders bir öncekinin üzerine inşa edilir. Acele yok.'},
      safety: {type:'takeaway',label:'Ana Fikir',text:'Birisi kurtarma ifadenizi isterse veya acil kripto ödemesi talep ederse — bu bir dolandırıcılık sinyalidir. Durun ve doğrulayın.'},
      glossary: {type:'note',label:'Başlangıç Notu',text:'Her şeyi ezberlemenize gerek yok. Bir derste bilinmeyen bir terim gördüğünüzde bu sayfaya geri dönün.'}
    },
    es: {
      lessons: [
        [{type:'takeaway',label:'Idea Clave',text:'Una blockchain es un registro compartido — no controlado por una empresa. Eso la diferencia de una base de datos normal.'}],
        [{type:'note',label:'Nota para Principiantes',text:'Una billetera no almacena monedas. Gestiona claves que prueban que controlas activos en la blockchain.'},
         {type:'mistake',label:'Error Común',text:'Tratar una cuenta de exchange como si fuera una billetera propia. Son muy diferentes en control.'}],
        [{type:'takeaway',label:'Idea Clave',text:'Siempre verifica: red → dirección → transferencia de prueba → TxID. Este hábito simple previene la mayoría de errores.'}],
        [{type:'idea',label:'Idea Rápida',text:'En vez de preguntar "¿Es buena esta moneda?", pregunta "¿Qué rol cumple este token?" Los roles revelan más que los nombres.'}],
        [{type:'takeaway',label:'Idea Clave',text:'Los casos reales enseñan dónde aparece el riesgo — phishing, fallos de custodia o defectos de diseño.'}]
      ],
      home: {type:'note',label:'Nota para Principiantes',text:'Si es tu primera vez, sigue las lecciones en orden. Cada una se basa en la anterior. Sin prisa.'},
      safety: {type:'takeaway',label:'Idea Clave',text:'Si alguien pide tu frase semilla o exige pago urgente en cripto — es señal de estafa. Siempre detente y verifica.'},
      glossary: {type:'note',label:'Nota para Principiantes',text:'No necesitas memorizar todo. Vuelve a esta página cuando encuentres un término desconocido.'}
    },
    ar: {
      lessons: [
        [{type:'takeaway',label:'الفكرة الرئيسية',text:'البلوكشين سجل مشترك لا تسيطر عليه شركة واحدة. هذا ما يميزه عن قاعدة البيانات العادية.'}],
        [{type:'note',label:'ملاحظة للمبتدئين',text:'المحفظة لا تخزن العملات بداخلها. إنها تدير المفاتيح التي تثبت أنك تتحكم في الأصول على البلوكشين.'},
         {type:'mistake',label:'خطأ شائع',text:'معاملة حساب البورصة كأنه محفظة خاصة. هما مختلفان جداً من حيث التحكم.'}],
        [{type:'takeaway',label:'الفكرة الرئيسية',text:'تحقق دائماً: الشبكة ← العنوان ← تحويل تجريبي ← معرّف المعاملة. هذه العادة البسيطة تمنع معظم الأخطاء.'}],
        [{type:'idea',label:'فكرة سريعة',text:'بدلاً من السؤال "هل هذه العملة جيدة؟" اسأل "ما دور هذا الرمز؟" الأدوار تكشف أكثر من الأسماء.'}],
        [{type:'takeaway',label:'الفكرة الرئيسية',text:'الحالات الحقيقية تعلمك أين تظهر المخاطر — التصيد، فشل الحفظ، أو عيوب التصميم.'}]
      ],
      home: {type:'note',label:'ملاحظة للمبتدئين',text:'إذا كانت هذه المرة الأولى، اتبع الدروس بالترتيب. كل درس يبني على السابق. لا داعي للاستعجال.'},
      safety: {type:'takeaway',label:'الفكرة الرئيسية',text:'إذا طلب أحد عبارة الاسترداد أو دفع عاجل بالعملات الرقمية — فهذه إشارة احتيال. توقف وتحقق دائماً.'},
      glossary: {type:'note',label:'ملاحظة للمبتدئين',text:'لا تحتاج لحفظ كل شيء. ارجع لهذه الصفحة عندما تواجه مصطلحاً غير مألوف.'}
    },
    vi: {
      lessons: [
        [{type:'takeaway',label:'Điểm chính',text:'Blockchain là bản ghi chia sẻ — không do một công ty kiểm soát. Đó là điều khiến nó khác với cơ sở dữ liệu thông thường.'}],
        [{type:'note',label:'Ghi chú cho người mới',text:'Ví không lưu trữ tiền xu bên trong. Nó quản lý các khóa chứng minh bạn kiểm soát tài sản trên blockchain.'},
         {type:'mistake',label:'Lỗi thường gặp',text:'Coi tài khoản sàn giao dịch giống như sở hữu ví. Chúng rất khác nhau về quyền kiểm soát.'}],
        [{type:'takeaway',label:'Điểm chính',text:'Luôn kiểm tra: mạng → địa chỉ → chuyển thử → mã giao dịch. Thói quen đơn giản này ngăn phần lớn lỗi chuyển tiền.'}],
        [{type:'idea',label:'Ý tưởng nhanh',text:'Thay vì hỏi "Đồng này tốt không?" hãy hỏi "Token này đóng vai trò gì?" Vai trò tiết lộ nhiều hơn tên gọi.'}],
        [{type:'takeaway',label:'Điểm chính',text:'Các trường hợp thực tế dạy bạn rủi ro xuất hiện ở đâu — lừa đảo, lỗi lưu ký, hoặc lỗi thiết kế.'}]
      ],
      home: {type:'note',label:'Ghi chú cho người mới',text:'Nếu đây là lần đầu, hãy theo các bài học theo thứ tự. Mỗi bài xây dựng trên bài trước. Không cần vội.'},
      safety: {type:'takeaway',label:'Điểm chính',text:'Nếu ai đó yêu cầu cụm từ khôi phục hoặc đòi thanh toán crypto khẩn cấp — đó là dấu hiệu lừa đảo. Luôn dừng lại và xác minh.'},
      glossary: {type:'note',label:'Ghi chú cho người mới',text:'Bạn không cần nhớ hết. Quay lại trang này khi gặp thuật ngữ lạ trong bài học.'}
    }
  };
summaryData.br = summaryData.pt;
summaryData.ha = summaryData.en;

  function getCompare(){ return compareData[currentLang] || compareData.en; }
  function getSummary(){ return summaryData[currentLang] || summaryData.en; }

  // ===== PATCH renderLesson =====
  var __prevRL = window.renderLesson;
  window.renderLesson = function(i){
    var html = __prevRL(i);
    if(typeof html !== 'string') return html || '';
    var cmp = getCompare();
    var sum = getSummary();

    // Insert summary boxes after the callout.info
    if(sum.lessons && sum.lessons[i]){
      var boxes = '';
      for(var s=0; s<sum.lessons[i].length; s++){
        var b = sum.lessons[i][s];
        boxes += summaryBox(b.type, b.label, b.text);
      }
      // Insert after closing </div> of lc-header
      var headerEnd = html.indexOf('</div>\n    <div class="lesson-body">');
      if(headerEnd > -1){
        html = html.substring(0, headerEnd+6) + boxes + html.substring(headerEnd+6);
      }
    }

    // Insert comparison cards based on lesson index
    var compCards = '';
    if(i === 1){
      // Wallet lesson: Wallet vs Exchange + Seed vs Private Key
      compCards += '<div class="compare-header">'+cmp.walletExchange.header+'</div>';
      compCards += compareCard(cmp.walletExchange.a[0], cmp.walletExchange.a[1], cmp.walletExchange.b[0], cmp.walletExchange.b[1]);
      compCards += '<div class="compare-header">'+cmp.seedPrivate.header+'</div>';
      compCards += compareCard(cmp.seedPrivate.a[0], cmp.seedPrivate.a[1], cmp.seedPrivate.b[0], cmp.seedPrivate.b[1]);
    }
    if(i === 3){
      // Token Roles lesson: DeFi vs Stablecoin
      compCards += '<div class="compare-header">'+cmp.defiStable.header+'</div>';
      compCards += compareCard(cmp.defiStable.a[0], cmp.defiStable.a[1], cmp.defiStable.b[0], cmp.defiStable.b[1]);
    }

    if(compCards){
      // Insert before the example section (h3 with example.title)
      var exIdx = html.indexOf('<h3>' + t('example.title') + '</h3>');
      if(exIdx > -1){
        html = html.substring(0, exIdx) + compCards + html.substring(exIdx);
      } else {
        // Insert before lesson-nav-bar
        var navIdx = html.indexOf('<div class="complete-row">');
        if(navIdx > -1) html = html.substring(0, navIdx) + compCards + html.substring(navIdx);
      }
    }

    return html;
  };

  // ===== PATCH renderHome =====
  var __prevRH = window.renderHome;
  window.renderHome = function(){
    var html = __prevRH();
    if(typeof html !== 'string') return html || '';
    var sum = getSummary();
    var cmp = getCompare();

    // Add home summary box after home-desc
    if(sum.home){
      var homeBox = summaryBox(sum.home.type, sum.home.label, sum.home.text);
      var descEnd = html.indexOf('</p>\n      <div class="home-grid">');
      if(descEnd > -1){
        html = html.substring(0, descEnd+4) + homeBox + html.substring(descEnd+4);
      }
    }

    // Add Wallet vs Exchange comparison card in home after the 3-card row (Start/FAQ/Safety)
    var miniGridIdx = html.indexOf('<div class="home-mini-grid">');
    if(miniGridIdx > -1){
      var homeCompare = '<div class="compare-header">'+cmp.walletExchange.header+'</div>';
      homeCompare += compareCard(cmp.walletExchange.a[0], cmp.walletExchange.a[1], cmp.walletExchange.b[0], cmp.walletExchange.b[1]);
      html = html.substring(0, miniGridIdx) + homeCompare + html.substring(miniGridIdx);
    }

    return html;
  };

  // ===== PATCH renderSafetyPage =====
  var __prevSP = window.renderSafetyPage;
  window.renderSafetyPage = function(){
    var html = __prevSP();
    if(typeof html !== 'string') return html || '';
    var sum = getSummary();
    var cmp = getCompare();

    // Add safety summary box after intro
    if(sum.safety){
      var safeBox = summaryBox(sum.safety.type, sum.safety.label, sum.safety.text);
      // Insert after lc-intro paragraph
      var introEnd = html.indexOf('</p>\n    </div>');
      if(introEnd > -1){
        html = html.substring(0, introEnd+4) + safeBox + html.substring(introEnd+4);
      }
    }

    // Add Seed vs Private Key comparison on safety page
    var stepsIdx = html.indexOf('<ul class="steps-list">') || html.indexOf('<div class="step');
    if(stepsIdx === -1) stepsIdx = html.indexOf('</div>', html.indexOf('lc-header') + 50);
    if(stepsIdx > -1){
      var safeCompare = '<div class="compare-header">'+cmp.seedPrivate.header+'</div>';
      safeCompare += compareCard(cmp.seedPrivate.a[0], cmp.seedPrivate.a[1], cmp.seedPrivate.b[0], cmp.seedPrivate.b[1]);
      // Insert at end before closing
      var lastDiv = html.lastIndexOf('</div>');
      if(lastDiv > -1){
        html = html.substring(0, lastDiv) + safeCompare + html.substring(lastDiv);
      }
    }

    return html;
  };

  // ===== PATCH renderGlossary =====
  var __prevG = window.renderGlossary;
  window.renderGlossary = function(){
    var html = __prevG();
    if(typeof html !== 'string') return html || '';
    var sum = getSummary();
    if(sum.glossary){
      var gBox = summaryBox(sum.glossary.type, sum.glossary.label, sum.glossary.text);
      var gIntroEnd = html.indexOf('</p>\n    </div>');
      if(gIntroEnd > -1){
        html = html.substring(0, gIntroEnd+4) + gBox + html.substring(gIntroEnd+4);
      }
    }
    return html;
  };

  // Re-render everything
  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined' && currentPage === 'home') showPage('home');
})();