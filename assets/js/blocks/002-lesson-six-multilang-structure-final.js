(function(){
  if(window.__lessonSixMultilangStructureFinal) return;
  window.__lessonSixMultilangStructureFinal = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function lessonSixLangFinal(){
    return currentLang === 'br' ? 'pt' : currentLang;
  }

  function makeLesson(value){
    return {
      cat:value.cat,
      title:value.title,
      intro:value.intro,
      sections:value.sections,
      defs:value.defs,
      example:value.example,
      mistakes:value.mistakes,
      faqs:value.faqs,
      checkpoints:value.checkpoints,
      quiz:value.quiz,
      sources:value.sources,
      visual:value.visual
    };
  }

  var lessonSixLocaleFixPack = {};

  lessonSixLocaleFixPack.th = {
    ui:{'nav.l6':'ซื้อคริปโตครั้งแรก','nav.l6sub':'ขั้นตอนซื้อครั้งแรกอย่างปลอดภัย','topic.buy':'จะซื้อคริปโตครั้งแรกอย่างปลอดภัยได้อย่างไร?'},
    lesson:makeLesson({
      cat:'การซื้อ',
      title:'วิธีซื้อคริปโตครั้งแรกอย่างปลอดภัย',
      intro:'การซื้อคริปโตครั้งแรกไม่จำเป็นต้องซับซ้อนเกินไป สำหรับผู้เริ่มต้น แนวทางที่ปลอดภัยกว่าคือเลือกแพลตฟอร์มอย่างใจเย็น ปกป้องบัญชี เริ่มจากจำนวนน้อย ตรวจสอบเครือข่ายอีกครั้ง และค่อยตัดสินใจว่าจะเก็บสินทรัพย์ไว้ที่ไหน',
      sections:[
        {h:'ขั้นตอนที่ 1: เลือกแพลตฟอร์มจากพื้นฐานที่สำคัญ', ps:['ดูค่าธรรมเนียมที่ชัดเจน การรองรับสกุลเงินท้องถิ่น หน้าจอที่อ่านง่าย และข้อมูลฝากถอนที่ไม่ทำให้งง สำหรับมือใหม่ แพลตฟอร์มที่เรียบง่ายและโปร่งใสมักดีกว่าที่ดูหวือหวา']},
        {h:'ขั้นตอนที่ 2: ปกป้องบัญชีและทำ KYC', ps:['ตั้งรหัสผ่านที่รัดกุม เปิดยืนยันตัวตนสองขั้นตอน และทำการยืนยันตัวตนพื้นฐานหากแพลตฟอร์มขอ KYC เป็นเพียงขั้นตอนยืนยันตัวตน ไม่ใช่เทคนิคการเทรด']},
        {h:'ขั้นตอนที่ 3: ฝากเงิน fiat แล้วซื้อเล็กน้อยก่อน', ps:['ฝากเงินบาทหรือเงินสกุลปกติ เลือกสินทรัพย์ที่คุ้นเคย ตรวจสอบราคาและค่าธรรมเนียม แล้วเริ่มจากจำนวนเล็ก ๆ การเริ่มจากน้อยช่วยให้เรียนรู้ขั้นตอนจริงโดยไม่กดดันเกินไป']},
        {h:'ขั้นตอนที่ 4: ตรวจสอบเครือข่ายก่อนโอน', ps:['ก่อนถอนหรือส่งต่อ ต้องดูให้แน่ใจว่าสินทรัพย์ เครือข่าย ที่อยู่กระเป๋า และค่าธรรมเนียมถูกต้อง เพราะชื่อเหรียญเดียวกันอาจอยู่ได้มากกว่าหนึ่งเครือข่าย']},
        {h:'ขั้นตอนที่ 5: เลือกวิธีเก็บรักษาอย่างปลอดภัย', ps:['การเก็บไว้บนแพลตฟอร์มสะดวก แต่คีย์ยังอยู่ภายใต้การควบคุมของแพลตฟอร์ม หลังจากซื้อครั้งแรกแล้ว ควรเข้าใจว่าทำไมบางคนจึงย้ายบางส่วนไปยังกระเป๋าแบบ self-custody']}
      ],
      defs:[['Exchange','แพลตฟอร์มสำหรับซื้อ ขาย ฝาก หรือถอนสินทรัพย์ดิจิทัล'],['KYC','การยืนยันตัวตนพื้นฐานก่อนใช้ฟีเจอร์เต็มรูปแบบ'],['Fiat','เงินปกติที่รัฐบาลออก เช่น บาท ดอลลาร์ หรือยูโร'],['Self-custody wallet','กระเป๋าที่คุณถือคีย์ด้วยตัวเอง']],
      example:'มือใหม่สามารถฝากเงินบาทจำนวนเล็กน้อย ซื้อ BTC เล็กน้อย ตรวจสอบเครือข่ายถอนอีกครั้ง แล้วค่อยตัดสินใจว่าจะเก็บไว้บนแพลตฟอร์มหรือย้ายบางส่วนไปยังกระเป๋าของตนเอง',
      mistakes:['ซื้อเงินก้อนใหญ่ทันทีโดยยังไม่เข้าใจแพลตฟอร์ม','ไม่ตรวจสอบเครือข่ายเพราะคิดว่าชื่อเหรียญคุ้นเคยแล้ว','ปล่อยทรัพย์สินไว้บนแพลตฟอร์มนานเกินไปโดยไม่เข้าใจความเสี่ยงของการฝากดูแล'],
      faqs:[['จำเป็นต้องใช้ exchange เจ้าใดเจ้าหนึ่งไหม?','ไม่จำเป็น สิ่งสำคัญคือเลือกแพลตฟอร์มที่ค่าธรรมเนียมชัดเจน ตั้งค่าความปลอดภัยง่าย และอ่านข้อมูลฝากถอนแล้วเข้าใจได้'],['ทำไมผู้เริ่มต้นควรเริ่มจากจำนวนน้อย?','เพราะการซื้อครั้งแรกแบบเล็ก ๆ ช่วยให้เรียนรู้ทั้งกระบวนการด้วยแรงกดดันและความเสี่ยงที่ต่ำกว่า'],['หลังซื้อครั้งแรกควรตรวจอะไรอีก?','ตรวจสินทรัพย์ ค่าธรรมเนียม เครือข่าย ที่อยู่กระเป๋าหากจะย้าย และแผนการเก็บรักษาอีกครั้ง']],
      checkpoints:['ฉันรู้ว่าควรเปรียบเทียบอะไรบ้างก่อนเลือกแพลตฟอร์ม','ฉันอธิบาย KYC ได้ด้วยประโยคสั้น ๆ','ฉันเข้าใจว่าทำไมการซื้อครั้งแรกควรเริ่มจากจำนวนน้อย','ฉันรู้ว่าต้องตรวจอะไรอีกก่อนย้ายสินทรัพย์'],
      quiz:[['ทำไมการซื้อครั้งแรกจึงควรเริ่มจากจำนวนน้อย?','เพราะช่วยให้เรียนรู้กระบวนการด้วยแรงกดดันและความเสี่ยงที่ต่ำกว่า'],['ทำไมต้องตรวจเครือข่ายก่อนถอนหรือโอน?','เพราะสินทรัพย์เดียวกันอาจอยู่บนหลายเครือข่าย และการเลือกผิดอาจทำให้เกิดปัญหาในการโอน'],['หลังซื้อแล้วควรคิดเรื่องใดต่อทันที?','ควรคิดว่าจะเก็บสินทรัพย์ไว้อย่างปลอดภัยที่ไหน ไม่ใช่หยุดแค่ซื้อเสร็จ']],
      sources:[['FTC crypto scam basics','คำแนะนำผู้บริโภคอย่างเป็นทางการที่ช่วยให้ผู้เริ่มต้นชะลอความรีบและตรวจรายละเอียดก่อนซื้อคริปโต','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','คำอธิบายแบบเข้าใจง่ายว่าทำไมบางคนจึงย้ายทรัพย์สินจาก exchange ไปยัง self-custody','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'เลือกกระดานเทรด',desc:'ดูค่าธรรมเนียม การรองรับเงินท้องถิ่น และข้อมูลถอนที่อ่านง่าย'},{title:'ปกป้องบัญชี / KYC',desc:'เปิดความปลอดภัยพื้นฐานและยืนยันตัวตนก่อนเคลื่อนย้ายเงิน'},{title:'ซื้อครั้งแรกแบบเล็กน้อย',desc:'ฝากเงิน fiat ตรวจราคาและค่าธรรมเนียม แล้วเริ่มจากจำนวนน้อย'},{title:'ตรวจสอบเครือข่าย',desc:'ก่อนส่งออก ต้องยืนยันสินทรัพย์ เครือข่าย และปลายทางให้ตรงกัน'},{title:'เก็บรักษาอย่างปลอดภัย / ย้ายไปกระเป๋า',desc:'ตัดสินใจว่าจะเก็บไว้บนแพลตฟอร์มก่อนหรือย้ายบางส่วนไปยังกระเป๋าของคุณ'}]
    })
  };

  lessonSixLocaleFixPack.id = {
    ui:{'nav.l6':'Membeli Crypto Pertama','nav.l6sub':'Alur pembelian pertama yang aman','topic.buy':'Bagaimana membeli crypto pertama dengan aman?'},
    lesson:makeLesson({
      cat:'Pembelian',
      title:'Cara membeli crypto pertama dengan aman',
      intro:'Membeli crypto pertama tidak harus terasa rumit. Untuk pemula, alur yang lebih aman adalah memilih platform dengan tenang, melindungi akun, mulai dari jumlah kecil, memeriksa jaringan lagi, lalu memutuskan di mana aset akan disimpan.',
      sections:[
        {h:'Langkah 1: Pilih platform dari hal-hal dasar', ps:['Perhatikan biaya yang jelas, dukungan mata uang lokal, tampilan aplikasi yang mudah dibaca, dan informasi deposit serta penarikan yang mudah dipahami. Platform yang sederhana dan transparan biasanya lebih cocok untuk pemula.']},
        {h:'Langkah 2: Lindungi akun dan selesaikan KYC', ps:['Buat kata sandi yang kuat, aktifkan verifikasi dua langkah, dan selesaikan pemeriksaan identitas jika diminta. KYC hanyalah langkah identitas dasar sebelum akses penuh di banyak platform.']},
        {h:'Langkah 3: Deposit fiat lalu beli sedikit dulu', ps:['Setor fiat, pilih satu aset yang familiar, cek harga dan biaya, lalu beli sedikit terlebih dahulu. Mulai dari kecil membantu Anda memahami proses tanpa tekanan besar.']},
        {h:'Langkah 4: Cek jaringan sebelum memindahkan apa pun', ps:['Sebelum menarik atau mengirim, cocokkan aset, jaringan, alamat wallet, dan biaya atau jumlah minimum. Nama koin yang sama bisa ada di lebih dari satu jaringan.']},
        {h:'Langkah 5: Putuskan bagaimana aset akan disimpan', ps:['Menyimpan aset di exchange memang nyaman, tetapi platform masih memegang kendali atas key. Setelah pembelian pertama, penting untuk memahami mengapa sebagian orang kemudian memindahkan sebagian aset ke self-custody wallet.']}
      ],
      defs:[['Exchange','Platform untuk membeli, menjual, setor, atau menarik aset digital.'],['KYC','Pemeriksaan identitas dasar sebelum akses penuh.'],['Fiat','Uang resmi seperti rupiah, dolar, atau euro.'],['Self-custody wallet','Wallet yang key-nya Anda kendalikan sendiri.']],
      example:'Seorang pemula dapat menyetor fiat dalam jumlah kecil, membeli sedikit BTC, memeriksa lagi jaringan penarikan, lalu memutuskan apakah akan menyimpannya di platform atau memindahkan sebagian ke wallet pribadi.',
      mistakes:['Membeli besar sekaligus sebelum memahami platform.','Melewatkan pengecekan jaringan karena nama koin terasa familiar.','Menyimpan semuanya di exchange terlalu lama tanpa memahami risiko custody.'],
      faqs:[['Apakah saya harus memakai exchange tertentu?','Tidak. Yang penting adalah memilih platform dengan biaya jelas, pengaturan keamanan yang mudah, dan informasi deposit serta penarikan yang mudah dibaca.'],['Mengapa pemula sebaiknya mulai dari jumlah kecil?','Karena pembelian kecil pertama membantu Anda belajar seluruh alur dengan tekanan dan risiko yang lebih rendah.'],['Apa yang harus dicek lagi setelah pembelian pertama?','Cek lagi aset, biaya, jaringan, alamat wallet jika ingin memindahkan, dan rencana penyimpanannya.']],
      checkpoints:['Saya tahu apa saja yang perlu dibandingkan sebelum memilih exchange.','Saya bisa menjelaskan KYC dengan singkat.','Saya paham mengapa pembelian pertama sebaiknya kecil.','Saya tahu apa yang harus dicek lagi sebelum memindahkan aset.'],
      quiz:[['Mengapa pembelian pertama sebaiknya kecil?','Karena jumlah kecil membantu Anda belajar alur dengan tekanan dan risiko yang lebih rendah.'],['Mengapa pemeriksaan jaringan penting sebelum penarikan?','Karena aset yang sama bisa ada di jaringan yang berbeda, jadi salah pilih bisa menimbulkan masalah transfer.'],['Mengapa aset tidak sebaiknya lama dibiarkan hanya di exchange?','Karena platform masih memegang kendali, jadi Anda perlu memahami custody dan self-custody.']],
      sources:[['FTC crypto scam basics','Panduan konsumen resmi yang membantu pemula melambat, memeriksa detail, dan menghindari penipuan saat membeli crypto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Penjelasan ramah pemula tentang alasan sebagian orang memindahkan aset dari exchange ke self-custody.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Pilih exchange',desc:'Bandingkan biaya, dukungan mata uang lokal, dan detail penarikan yang mudah dipahami.'},{title:'Lindungi akun / KYC',desc:'Aktifkan keamanan dasar dan selesaikan pemeriksaan identitas sebelum memindahkan uang.'},{title:'Lakukan pembelian kecil pertama',desc:'Setor fiat, periksa harga dan biaya, lalu mulai dari jumlah kecil.'},{title:'Periksa jaringan',desc:'Sebelum mengirim, cocokkan aset, jaringan, dan tujuan.'},{title:'Simpan dengan aman / pindah ke wallet',desc:'Putuskan apakah akan disimpan dulu di platform atau dipindahkan sebagian ke wallet Anda.'}]
    })
  };

  lessonSixLocaleFixPack.pt = {
    ui:{'nav.l6':'Comprar sua primeira cripto','nav.l6sub':'Um fluxo seguro de primeira compra','topic.buy':'Como comprar sua primeira cripto com segurança?'},
    lesson:makeLesson({
      cat:'Compra',
      title:'Como comprar sua primeira cripto com segurança',
      intro:'Comprar sua primeira cripto não precisa ser confuso. Para iniciantes, o fluxo mais seguro é simples: escolher a plataforma com calma, proteger a conta, começar com pouco, revisar a rede e decidir onde o ativo vai ficar.',
      sections:[
        {h:'Passo 1: Escolha a plataforma olhando o básico', ps:['Veja se as taxas são claras, se há suporte para sua moeda local, se o app é fácil de ler e se as informações de depósito e saque aparecem de forma simples. Para iniciantes, clareza vale mais do que aparência chamativa.']},
        {h:'Passo 2: Proteja a conta e conclua o KYC', ps:['Crie uma senha forte, ative a autenticação em dois fatores e faça a verificação de identidade se a plataforma pedir. KYC é apenas uma etapa básica de identificação antes do uso completo.']},
        {h:'Passo 3: Deposite fiat e faça uma compra pequena', ps:['Deposite moeda fiduciária, escolha um ativo familiar, confira preço e taxas e compre pouco primeiro. Começar pequeno ajuda você a entender o processo sem pressão excessiva.']},
        {h:'Passo 4: Revise a rede antes de mover qualquer coisa', ps:['Antes de sacar ou enviar, confirme o ativo, a rede, o endereço da carteira e a taxa ou o mínimo exigido. O mesmo nome de moeda pode existir em mais de uma rede.']},
        {h:'Passo 5: Decida como guardar com segurança', ps:['Deixar o ativo na corretora é conveniente, mas a plataforma continua controlando as chaves. Depois da primeira compra, vale entender por que algumas pessoas movem parte dos fundos para uma carteira de autocustódia.']}
      ],
      defs:[['Exchange','Plataforma para comprar, vender, depositar ou sacar ativos digitais.'],['KYC','Verificação básica de identidade antes do acesso completo.'],['Fiat','Dinheiro comum emitido por governos, como real, dólar ou euro.'],['Self-custody wallet','Carteira em que você controla as chaves.']],
      example:'Um iniciante pode depositar um pequeno valor em fiat, comprar um pouco de BTC, revisar a rede de saque e só então decidir se deixa na plataforma ou move uma parte para a carteira pessoal.',
      mistakes:['Comprar muito de uma vez antes de entender a plataforma.','Ignorar a checagem da rede porque o nome da moeda parece familiar.','Deixar tudo na corretora por muito tempo sem entender o risco de custódia.'],
      faqs:[['Preciso usar uma corretora específica?','Não. O importante é escolher uma plataforma com taxas claras, configurações de segurança simples e informações de depósito e saque fáceis de entender.'],['Por que iniciantes costumam começar com pouco?','Porque uma primeira compra pequena permite aprender o fluxo inteiro com menos pressão e menos risco.'],['O que devo conferir de novo depois da compra?','Confira novamente o ativo, a taxa, a rede, o endereço da carteira se for mover e o plano de armazenamento.']],
      checkpoints:['Consigo dizer o que devo comparar antes de escolher uma corretora.','Consigo explicar KYC em uma frase curta.','Entendo por que a primeira compra deve ser pequena.','Sei o que revisar depois da compra antes de mover fundos.'],
      quiz:[['Por que um iniciante deve começar com pouco?','Porque um valor pequeno reduz a pressão e ajuda a aprender o processo com mais segurança.'],['Por que é importante conferir a rede antes do saque?','Porque o mesmo ativo pode existir em redes diferentes, e um erro pode causar problemas na transferência.'],['Por que não é ideal deixar tudo na corretora por muito tempo?','Porque a plataforma ainda controla as chaves, então vale entender a autocustódia.']],
      sources:[['FTC crypto scam basics','Guia oficial ao consumidor para ajudar iniciantes a desacelerar, conferir detalhes e evitar golpes ao comprar cripto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Explicação simples sobre por que algumas pessoas depois movem ativos da corretora para autocustódia.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Escolha a corretora',desc:'Compare taxas, suporte à moeda local e detalhes de saque fáceis de entender.'},{title:'Proteja a conta / KYC',desc:'Ative a segurança básica e finalize a verificação antes de mover dinheiro.'},{title:'Faça uma primeira compra pequena',desc:'Deposite fiat, revise o preço e as taxas, e comece com pouco.'},{title:'Confira a rede',desc:'Antes de enviar, confirme o ativo, a rede e o destino.'},{title:'Guarde com segurança / mova para a carteira',desc:'Decida se vai deixar na plataforma por enquanto ou mover parte para sua carteira.'}]
    })
  };

  lessonSixLocaleFixPack.tr = {
    ui:{'nav.l6':'İlk Kriptonu Satın Almak','nav.l6sub':'Güvenli ilk alım akışı','topic.buy':'İlk kriptonu güvenli şekilde nasıl alırsın?'},
    lesson:makeLesson({
      cat:'Satın Alma',
      title:'İlk kriptonu güvenli şekilde nasıl alırsın?',
      intro:'İlk kripto alımının karmaşık olması gerekmez. Yeni başlayanlar için daha güvenli akış; platformu dikkatle seçmek, hesabı korumak, küçük başlamak, ağı yeniden kontrol etmek ve varlığı nerede tutacağına karar vermektir.',
      sections:[
        {h:'Adım 1: Platformu temel ölçülere göre seç', ps:['Ücretlerin açık olması, yerel para desteği, uygulamanın okunabilir olması ve para yatırma ile çekme bilgilerinin net görünmesi önemlidir. Yeni başlayanlar için gösterişli değil, anlaşılır platform daha iyidir.']},
        {h:'Adım 2: Hesabı koru ve KYC’yi tamamla', ps:['Güçlü bir şifre oluştur, iki aşamalı doğrulamayı aç ve platform isterse kimlik doğrulamasını tamamla. KYC bir yatırım taktiği değil, temel kimlik adımıdır.']},
        {h:'Adım 3: Fiat yatır ve küçük bir ilk alım yap', ps:['Fiat para yatır, tanıdık bir varlık seç, fiyat ve ücretleri kontrol et ve önce küçük bir miktar al. Küçük başlamak süreci fazla baskı olmadan öğrenmeyi sağlar.']},
        {h:'Adım 4: Taşımadan önce ağı kontrol et', ps:['Çekim veya transferden önce varlığı, ağı, cüzdan adresini ve varsa minimum tutarı ya da ücreti yeniden doğrula. Aynı coin adı birden fazla ağda bulunabilir.']},
        {h:'Adım 5: Nasıl saklayacağına karar ver', ps:['Varlığı borsada tutmak rahattır ama anahtarlar hâlâ platformun kontrolündedir. İlk alımdan sonra bazı kişilerin neden varlığın bir kısmını self-custody cüzdana taşıdığını anlamak önemlidir.']}
      ],
      defs:[['Exchange','Dijital varlık almak, satmak, yatırmak veya çekmek için kullanılan platform.'],['KYC','Tam erişim öncesi yapılan temel kimlik doğrulaması.'],['Fiat','TL, dolar veya euro gibi resmi para birimleri.'],['Self-custody wallet','Anahtarlarını kendiniz kontrol ettiğiniz cüzdan.']],
      example:'Bir acemi küçük miktarda fiat yatırabilir, biraz BTC alabilir, çekim ağını yeniden kontrol edebilir ve sonra bunu borsada mı tutacağına yoksa bir kısmını kendi cüzdanına mı taşıyacağına karar verebilir.',
      mistakes:['Platformu anlamadan büyük miktarla başlamak.','Coin adı tanıdık diye ağ kontrolünü atlamak.','Custody riskini anlamadan varlıkları uzun süre borsada bırakmak.'],
      faqs:[['Başlamak için belirli bir borsa şart mı?','Hayır. Önemli olan açık ücretler, kolay güvenlik ayarları ve anlaşılır para yatırma ile çekme bilgileri sunan bir platform seçmektir.'],['Neden yeni başlayanlar küçük miktarla başlamalı?','Çünkü küçük ilk alım tüm akışı daha düşük baskı ve daha düşük riskle öğrenmeyi sağlar.'],['İlk alımdan sonra neyi tekrar kontrol etmeliyim?','Varlığı, ücreti, ağı, taşıyacaksan cüzdan adresini ve saklama planını tekrar kontrol et.']],
      checkpoints:['Bir borsa seçmeden önce hangi temel noktaları karşılaştırmam gerektiğini biliyorum.','KYC’yi kısa bir cümleyle açıklayabiliyorum.','Neden küçük ilk alımın daha güvenli olduğunu anlıyorum.','Satın aldıktan sonra taşımadan önce neyi tekrar kontrol etmem gerektiğini biliyorum.'],
      quiz:[['Yeni başlayan biri neden küçük başlamalı?','Çünkü küçük başlamak daha az baskı ve daha az riskle süreci öğrenmeyi sağlar.'],['Çekimden önce ağı kontrol etmek neden önemlidir?','Çünkü aynı varlık farklı ağlarda bulunabilir ve yanlış seçim transfer sorununa yol açabilir.'],['Varlıkları neden uzun süre sadece borsada bırakmamak gerekir?','Çünkü kontrol hâlâ platformdadır; bu yüzden self-custody mantığını anlamak önemlidir.']],
      sources:[['FTC crypto scam basics','Kripto alırken ayrıntıları kontrol etmeye ve baskı temelli dolandırıcılıklardan kaçınmaya yardımcı olan resmi tüketici rehberi.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Bazı kullanıcıların daha sonra varlıklarını borsadan self-custody cüzdana taşımasının nedenini anlatan sade açıklama.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Borsayı seç',desc:'Ücretleri, yerel para desteğini ve anlaşılır çekim bilgilerini karşılaştır.'},{title:'Hesabı koru / KYC',desc:'Temel güvenliği aç ve para hareket ettirmeden önce kimliğini doğrula.'},{title:'Küçük ilk alım yap',desc:'Fiat yatır, fiyatı ve ücreti kontrol et, küçük başla.'},{title:'Ağı kontrol et',desc:'Göndermeden önce varlığı, ağı ve hedefi yeniden doğrula.'},{title:'Güvenli sakla / cüzdana taşı',desc:'Şimdilik platformda mı tutacağına yoksa bir kısmını kendi cüzdanına mı taşıyacağına karar ver.'}]
    })
  };

  lessonSixLocaleFixPack.es = {
    ui:{'nav.l6':'Comprar tu primera cripto','nav.l6sub':'Un flujo seguro de primera compra','topic.buy':'¿Cómo comprar tu primera cripto de forma segura?'},
    lesson:makeLesson({
      cat:'Compra',
      title:'Cómo comprar tu primera cripto de forma segura',
      intro:'Comprar tu primera cripto no tiene por qué ser complicado. Para principiantes, el flujo más seguro es simple: elegir la plataforma con calma, proteger la cuenta, empezar con poco, revisar la red y decidir dónde guardar el activo.',
      sections:[
        {h:'Paso 1: Elige la plataforma mirando lo básico', ps:['Busca comisiones claras, soporte para tu moneda local, una app fácil de leer y datos de depósito y retiro que no confundan. Para un principiante, la claridad vale más que una apariencia llamativa.']},
        {h:'Paso 2: Protege la cuenta y completa KYC', ps:['Crea una contraseña fuerte, activa la verificación en dos pasos y completa la verificación de identidad si la plataforma la pide. KYC no es una estrategia; es un paso básico de identidad.']},
        {h:'Paso 3: Deposita fiat y haz una compra pequeña', ps:['Deposita dinero normal, elige un activo conocido, revisa el precio y las comisiones y compra una cantidad pequeña primero. Empezar con poco te deja aprender el proceso sin tanta presión.']},
        {h:'Paso 4: Revisa la red antes de mover cualquier cosa', ps:['Antes de retirar o enviar, confirma el activo, la red, la dirección de la cartera y la comisión o el mínimo. El mismo nombre de moneda puede existir en más de una red.']},
        {h:'Paso 5: Decide cómo guardarlo con seguridad', ps:['Dejar el activo en el exchange es cómodo, pero la plataforma sigue controlando las llaves. Después de la primera compra, conviene entender por qué algunas personas mueven una parte a una cartera de autocustodia.']}
      ],
      defs:[['Exchange','Plataforma para comprar, vender, depositar o retirar activos digitales.'],['KYC','Verificación básica de identidad antes del acceso completo.'],['Fiat','Dinero normal emitido por gobiernos, como euro, dólar o peso.'],['Self-custody wallet','Cartera en la que tú controlas las llaves.']],
      example:'Un principiante puede depositar una pequeña cantidad de fiat, comprar un poco de BTC, revisar otra vez la red de retiro y luego decidir si lo deja en la plataforma o mueve una parte a su cartera.',
      mistakes:['Comprar mucho de una vez antes de entender la plataforma.','Saltarse la revisión de la red porque el nombre de la moneda parece familiar.','Dejar todo mucho tiempo en el exchange sin entender el riesgo de custodia.'],
      faqs:[['¿Necesito usar un exchange específico?','No. Lo importante es elegir una plataforma con comisiones claras, seguridad fácil de configurar e información de depósito y retiro fácil de entender.'],['¿Por qué conviene empezar con una cantidad pequeña?','Porque una primera compra pequeña te permite practicar todo el flujo con menos presión y menos riesgo.'],['¿Qué debo revisar otra vez después de comprar?','Revisa el activo, la comisión, la red, la dirección de la cartera si lo vas a mover y el plan de almacenamiento.']],
      checkpoints:['Puedo decir qué debo comparar antes de elegir un exchange.','Puedo explicar KYC en una frase corta.','Entiendo por qué conviene empezar con una compra pequeña.','Sé qué debo revisar otra vez antes de mover fondos.'],
      quiz:[['¿Por qué un principiante debería empezar con poco?','Porque una cantidad pequeña reduce la presión y ayuda a aprender el proceso con más seguridad.'],['¿Por qué es importante revisar la red antes del retiro?','Porque el mismo activo puede existir en redes distintas y una elección incorrecta puede causar problemas.'],['¿Por qué no conviene dejar todo mucho tiempo en el exchange?','Porque la plataforma sigue controlando las llaves, así que conviene entender la autocustodia.']],
      sources:[['FTC crypto scam basics','Guía oficial para consumidores que ayuda a principiantes a revisar detalles y evitar estafas al comprar cripto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Explicación sencilla de por qué algunas personas mueven activos del exchange a la autocustodia.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Elige el exchange',desc:'Compara comisiones, soporte para moneda local y detalles de retiro fáciles de entender.'},{title:'Protege la cuenta / KYC',desc:'Activa la seguridad básica y termina la verificación antes de mover dinero.'},{title:'Haz una primera compra pequeña',desc:'Deposita fiat, revisa el precio y las comisiones, y empieza con poco.'},{title:'Revisa la red',desc:'Antes de enviar, confirma el activo, la red y el destino.'},{title:'Guárdalo con seguridad / muévelo a la cartera',desc:'Decide si lo dejas por ahora en la plataforma o mueves una parte a tu propia cartera.'}]
    })
  };

  lessonSixLocaleFixPack.ar = {
    ui:{'nav.l6':'شراء أول عملة رقمية','nav.l6sub':'مسار شراء أول آمن','topic.buy':'كيف أشتري أول عملة رقمية بشكل آمن؟'},
    lesson:makeLesson({
      cat:'الشراء',
      title:'كيف تشتري أول عملة رقمية بشكل آمن',
      intro:'شراء أول عملة رقمية لا يجب أن يكون معقداً. المسار الأكثر أماناً للمبتدئ بسيط: اختر المنصة بهدوء، احمِ الحساب، ابدأ بمبلغ صغير، راجع الشبكة، ثم قرر أين ستحتفظ بالأصل.',
      sections:[
        {h:'الخطوة 1: اختر المنصة من الأساسيات الواضحة', ps:['ابحث عن رسوم واضحة، ودعم لعملتك المحلية، وواجهة سهلة القراءة، ومعلومات إيداع وسحب لا تربكك. للمبتدئ، المنصة الواضحة أفضل من المنصة المليئة بالإثارة.']},
        {h:'الخطوة 2: احمِ الحساب وأكمل KYC', ps:['أنشئ كلمة مرور قوية، وفعل التحقق بخطوتين، وأكمل التحقق من الهوية إذا طلبت المنصة ذلك. KYC ليس حيلة تداول، بل خطوة هوية أساسية قبل الاستخدام الكامل.']},
        {h:'الخطوة 3: أودع أموالاً عادية وابدأ بشراء صغير', ps:['أودع مالاً عادياً، واختر أصلاً مألوفاً، وراجع السعر والرسوم، ثم اشترِ كمية صغيرة أولاً. البداية الصغيرة تعطيك فرصة لفهم المسار من دون ضغط كبير.']},
        {h:'الخطوة 4: راجع الشبكة قبل أي تحويل', ps:['قبل السحب أو الإرسال، تأكد من الأصل، والشبكة، وعنوان المحفظة، والرسوم أو الحد الأدنى. قد يوجد الأصل نفسه على أكثر من شبكة.']},
        {h:'الخطوة 5: قرر كيف ستحتفظ به بأمان', ps:['ترك الأصل في المنصة مريح، لكن المنصة ما زالت تتحكم بالمفاتيح. بعد الشراء الأول، من المفيد أن تفهم لماذا ينقل بعض الناس جزءاً من أصولهم لاحقاً إلى محفظة self-custody.']}
      ],
      defs:[['Exchange','منصة لشراء وبيع وإيداع وسحب الأصول الرقمية.'],['KYC','تحقق أساسي من الهوية قبل الوصول الكامل.'],['Fiat','المال الحكومي العادي مثل الدولار أو اليورو أو الريال.'],['Self-custody wallet','محفظة تتحكم أنت بنفسك في مفاتيحها.']],
      example:'يمكن للمبتدئ أن يودع مبلغاً صغيراً من المال العادي، ويشتري قليلاً من BTC، ويراجع شبكة السحب مرة أخرى، ثم يقرر هل يتركه على المنصة أم ينقل جزءاً منه إلى محفظته الخاصة.',
      mistakes:['شراء مبلغ كبير دفعة واحدة قبل فهم المنصة.','تجاهل فحص الشبكة لأن اسم العملة يبدو مألوفاً.','ترك كل شيء في المنصة مدة طويلة من دون فهم خطر الحفظ لدى الغير.'],
      faqs:[['هل أحتاج إلى منصة محددة لكي أبدأ؟','لا. المهم هو اختيار منصة برسوم واضحة وإعدادات أمان سهلة ومعلومات إيداع وسحب سهلة الفهم.'],['لماذا يُنصح المبتدئ بالبدء بمبلغ صغير؟','لأن الشراء الأول الصغير يساعده على تعلم المسار الكامل بضغط ومخاطرة أقل.'],['ماذا يجب أن أراجع بعد أول عملية شراء؟','راجع الأصل والرسوم والشبكة وعنوان المحفظة إذا كنت ستنقل الأصل وخطة التخزين مرة أخرى.']],
      checkpoints:['أعرف ما الذي يجب مقارنته قبل اختيار المنصة.','أستطيع شرح KYC بجملة قصيرة.','أفهم لماذا تكون أول عملية شراء صغيرة أكثر أماناً للمبتدئ.','أعرف ما الذي يجب مراجعته قبل نقل الأصل.'],
      quiz:[['لماذا من الأفضل أن يبدأ المبتدئ بمبلغ صغير؟','لأن المبلغ الصغير يقلل الضغط ويساعد على تعلم العملية بشكل أكثر أماناً.'],['لماذا يجب فحص الشبكة قبل السحب أو التحويل؟','لأن الأصل نفسه قد يوجد على شبكات مختلفة، واختيار الشبكة الخطأ قد يسبب مشكلة في النقل.'],['لماذا لا يُفضَّل ترك كل شيء في المنصة لفترة طويلة؟','لأن المنصة ما زالت تتحكم بالمفاتيح، لذلك من المهم فهم معنى الحفظ الذاتي.']],
      sources:[['FTC crypto scam basics','إرشاد رسمي للمستهلك يساعد المبتدئ على التمهل وفحص التفاصيل وتجنب الاحتيال عند شراء العملات الرقمية.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','شرح مبسط لسبب نقل بعض المستخدمين أصولهم لاحقاً من المنصة إلى الحفظ الذاتي.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'اختيار المنصة',desc:'قارن الرسوم ودعم العملة المحلية ومعلومات السحب الواضحة.'},{title:'حماية الحساب / KYC',desc:'فعّل الحماية الأساسية وأكمل التحقق من الهوية قبل تحريك المال.'},{title:'أول شراء بمبلغ صغير',desc:'أودع المال العادي، راجع السعر والرسوم، ثم ابدأ بكمية صغيرة.'},{title:'فحص الشبكة',desc:'قبل الإرسال، تأكد من الأصل والشبكة والوجهة.'},{title:'حفظ آمن / نقل إلى المحفظة',desc:'قرر هل ستبقيه في المنصة الآن أم تنقل جزءاً منه إلى محفظتك.'}]
    })
  };

  lessonSixLocaleFixPack.vi = {
    ui:{'nav.l6':'Mua crypto đầu tiên','nav.l6sub':'Quy trình mua đầu tiên an toàn','topic.buy':'Làm sao mua crypto đầu tiên một cách an toàn?'},
    lesson:makeLesson({
      cat:'Mua',
      title:'Cách mua crypto đầu tiên một cách an toàn',
      intro:'Việc mua crypto đầu tiên không cần quá phức tạp. Với người mới, quy trình an toàn hơn là chọn nền tảng cẩn thận, bảo vệ tài khoản, bắt đầu bằng số tiền nhỏ, kiểm tra lại mạng lưới rồi mới quyết định sẽ lưu tài sản ở đâu.',
      sections:[
        {h:'Bước 1: Chọn nền tảng từ những điều cơ bản', ps:['Hãy nhìn vào phí rõ ràng, hỗ trợ tiền pháp định địa phương, giao diện dễ đọc và thông tin nạp rút dễ hiểu. Với người mới, một nền tảng đơn giản và minh bạch thường tốt hơn một nơi quá hào nhoáng.']},
        {h:'Bước 2: Bảo vệ tài khoản và hoàn tất KYC', ps:['Tạo mật khẩu mạnh, bật xác thực hai bước và hoàn thành xác minh danh tính nếu nền tảng yêu cầu. KYC chỉ là bước xác minh cơ bản trước khi dùng đầy đủ tính năng.']},
        {h:'Bước 3: Nạp fiat rồi mua một lượng nhỏ', ps:['Nạp tiền pháp định, chọn một tài sản quen thuộc, xem giá và phí rồi mua một lượng nhỏ trước. Bắt đầu nhỏ giúp bạn học quy trình mà không bị áp lực quá lớn.']},
        {h:'Bước 4: Kiểm tra mạng trước khi chuyển đi', ps:['Trước khi rút hoặc gửi, hãy kiểm tra lại tài sản, mạng lưới, địa chỉ ví và mức phí hoặc tối thiểu. Cùng một tên coin có thể xuất hiện trên nhiều mạng khác nhau.']},
        {h:'Bước 5: Quyết định cách lưu trữ an toàn', ps:['Để tài sản trên sàn thì tiện, nhưng nền tảng vẫn đang nắm khóa. Sau lần mua đầu tiên, bạn nên hiểu vì sao nhiều người sau đó chuyển một phần tài sản sang ví tự lưu ký.']}
      ],
      defs:[['Exchange','Nền tảng để mua, bán, nạp hoặc rút tài sản số.'],['KYC','Bước xác minh danh tính cơ bản trước khi dùng đầy đủ nền tảng.'],['Fiat','Tiền pháp định thông thường như VND, USD hoặc EUR.'],['Self-custody wallet','Ví mà bạn tự kiểm soát khóa của mình.']],
      example:'Một người mới có thể nạp một khoản fiat nhỏ, mua một ít BTC, kiểm tra lại mạng rút rồi mới quyết định giữ trên sàn hay chuyển một phần sang ví riêng.',
      mistakes:['Mua số tiền lớn ngay từ đầu trước khi hiểu nền tảng.','Bỏ qua bước kiểm tra mạng vì tên coin trông quen thuộc.','Để toàn bộ tài sản trên sàn quá lâu mà không hiểu rủi ro lưu ký.'],
      faqs:[['Có cần dùng một sàn cụ thể để bắt đầu không?','Không. Điều quan trọng là chọn nền tảng có phí rõ ràng, cài đặt bảo mật dễ dùng và thông tin nạp rút dễ đọc.'],['Vì sao người mới nên bắt đầu với số tiền nhỏ?','Vì giao dịch nhỏ đầu tiên giúp bạn học toàn bộ quy trình với ít áp lực và ít rủi ro hơn.'],['Sau lần mua đầu tiên cần kiểm tra lại điều gì?','Hãy kiểm tra lại tài sản, phí, mạng lưới, địa chỉ ví nếu bạn định chuyển đi và kế hoạch lưu trữ.']],
      checkpoints:['Tôi biết cần so sánh điều gì trước khi chọn sàn.','Tôi có thể giải thích KYC bằng một câu ngắn.','Tôi hiểu vì sao nên bắt đầu với một giao dịch nhỏ.','Tôi biết cần kiểm tra lại điều gì trước khi chuyển tài sản.'],
      quiz:[['Vì sao người mới nên bắt đầu bằng số tiền nhỏ?','Vì số tiền nhỏ giúp học quy trình với ít áp lực và ít rủi ro hơn.'],['Vì sao phải kiểm tra mạng trước khi rút hoặc gửi?','Vì cùng một tài sản có thể tồn tại trên nhiều mạng và chọn sai có thể gây lỗi chuyển.'],['Vì sao không nên để toàn bộ tài sản trên sàn quá lâu?','Vì sàn vẫn giữ quyền kiểm soát, nên bạn cần hiểu thêm về tự lưu ký.']],
      sources:[['FTC crypto scam basics','Hướng dẫn chính thức giúp người mới chậm lại, xem kỹ chi tiết và tránh lừa đảo khi mua crypto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Giải thích thân thiện cho người mới về lý do nhiều người chuyển tài sản từ sàn sang ví tự lưu ký.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Chọn sàn',desc:'So sánh phí, hỗ trợ tiền địa phương và thông tin rút dễ hiểu.'},{title:'Bảo vệ tài khoản / KYC',desc:'Bật bảo mật cơ bản và hoàn tất xác minh trước khi di chuyển tiền.'},{title:'Mua lượng nhỏ đầu tiên',desc:'Nạp fiat, xem giá và phí rồi bắt đầu bằng lượng nhỏ.'},{title:'Kiểm tra mạng',desc:'Trước khi gửi đi, xác nhận tài sản, mạng lưới và nơi nhận.'},{title:'Lưu trữ an toàn / chuyển sang ví',desc:'Quyết định sẽ tạm để trên sàn hay chuyển một phần sang ví của bạn.'}]
    })
  };

  lessonSixLocaleFixPack.ha = {
    ui:{'nav.l6':'Siyan kudin dijital na farko','nav.l6sub':'Hanyar saye ta farko cikin aminci','topic.buy':'Ta yaya zan sayi kudin dijital na farko cikin aminci?'},
    lesson:makeLesson({
      cat:'Saye',
      title:'Yadda za ka sayi kudin dijital na farko cikin aminci',
      intro:'Siyan kudin dijital na farko bai kamata ya zama mai rikitarwa ba. Hanyar da ta fi dacewa da mai farawa ita ce: ka zabi dandali a hankali, ka kare asusunka, ka fara da karamin adadi, ka sake duba hanyar sadarwa, sannan ka yanke shawarar inda za ka adana kudin.',
      sections:[
        {h:'Mataki na 1: Ka zabi dandali ta duba muhimman abubuwa', ps:['Duba ko kudin hidima a bayyane yake, ko ana tallafawa kudinka na gida, ko manhajar tana da saukin karantawa, da kuma ko bayanin ajiya da cire kudi yana fili. Ga mai farawa, dandali mai sauki da bayyana bayani ya fi mai hayaniya kyau.']},
        {h:'Mataki na 2: Ka kare asusu kuma ka kammala KYC', ps:['Saita kalmar sirri mai karfi, kunna tantancewa ta mataki biyu, sannan ka kammala tantance kai idan dandali ya bukata. KYC ba dabara ta ciniki ba ce; matakin tantance kai ne na asali.']},
        {h:'Mataki na 3: Ka saka kudin fiat sannan ka yi karamin saye', ps:['Ka saka kudin fiat, ka zabi kadara daya da ka fi fahimta, ka duba farashi da kudin hidima, sannan ka fara da karamin adadi. Fara da kadan yana ba ka damar koyon tsarin ba tare da matsin lamba mai yawa ba.']},
        {h:'Mataki na 4: Ka sake duba hanyar sadarwa kafin ka motsa komai', ps:['Kafin cire kudi ko tura su, ka tabbatar da kadara, hanyar sadarwa, adireshin walat, da kudin hidima ko mafi karancin adadi. Sunan kudi daya na iya kasancewa a hanyoyi daban-daban.']},
        {h:'Mataki na 5: Ka yanke shawarar yadda za ka adana kudin lafiya', ps:['Barin kudin a dandali yana da sauki, amma har yanzu dandali ne ke rike da makullan. Bayan sayen farko, yana da kyau ka fahimci dalilin da ya sa wasu suke tura wani bangare zuwa walat na self-custody.']}
      ],
      defs:[['Dandalin musaya','Wurin da za ka iya saya, sayarwa, ajiya ko cire kadarorin dijital.'],['KYC','Tantance kai mai sauki kafin cikakken amfani da dandali.'],['Kudin fiat','Kudin gwamnati na yau da kullum kamar naira, dala ko euro.'],['Walat na self-custody','Walat da kai da kanka ke sarrafa makullan sa.']],
      example:'Mai farawa zai iya saka karamin kudin fiat, ya sayi dan BTC, ya sake duba hanyar sadarwar cire kudi, sannan ya yanke shawarar ko zai bar shi a dandali ko ya tura wani bangare zuwa walat dinsa.',
      mistakes:['Siyan babban adadi lokaci guda kafin ka fahimci dandali.','Tsallake duba hanyar sadarwa saboda sunan kudin ya yi kama da saba.','Barin komai a dandali na dogon lokaci ba tare da fahimtar hadarin custody ba.'],
      faqs:[['Sai na yi amfani da wani dandali na musamman ne?','A’a. Muhimmin abu shi ne ka zabi dandali mai bayyana kudin hidima, mai saukin saitin tsaro, kuma mai saukin fahimtar bayanin ajiya da cire kudi.'],['Me ya sa masu farawa ke fara da karamin adadi?','Saboda karamin saye na farko yana taimakawa su koyi dukan tsarin da karancin matsin lamba da hadari.'],['Me ya kamata in sake dubawa bayan sayen farko?','Ka sake duba kadara, kudin hidima, hanyar sadarwa, adireshin walat idan za ka tura, da kuma inda za ka adana kudin.']],
      checkpoints:['Na san muhimman abubuwan da zan kwatanta kafin zabar dandali.','Zan iya bayyana KYC a gajeren jimla.','Na fahimci dalilin da ya sa karamin saye na farko ya fi dacewa da mai farawa.','Na san abin da ya kamata in sake dubawa kafin in motsa kudin.'],
      quiz:[['Me ya sa mai farawa ya kamata ya fara da karamin saye?','Daidai: karamin adadi yana rage matsin lamba kuma yana taimakawa koyon tsarin cikin aminci.'],['Me ya sa duba hanyar sadarwa yake da muhimmanci kafin cire kudi?','Daidai: kadara daya na iya kasancewa a hanyoyi daban-daban, kuma kuskure na iya jawo matsalar canja wuri.'],['Me ya sa ba a so a bar komai a dandali na dogon lokaci?','Daidai: domin dandali ne har yanzu ke rike da iko, don haka ya dace a fahimci self-custody.']],
      sources:[['FTC crypto scam basics','Jagorar mabukaci ta hukuma da ke taimakawa mai farawa ya rage sauri ya duba bayanai kafin sayen crypto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','Bayani mai sauki ga mai farawa kan dalilin da ya sa wasu suke matsar da kadarori daga dandali zuwa self-custody.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
      visual:[{title:'Zabi dandali',desc:'Kwatanta kudin hidima, tallafin kudin gida, da bayanin cire kudi mai saukin fahimta.'},{title:'Kare asusu / KYC',desc:'Kunna tsaro na asali kuma ka kammala tantance kai kafin ka motsa kudi.'},{title:'Yi karamin saye na farko',desc:'Ka saka kudin fiat, ka duba farashi da kudin hidima, sannan ka fara da kadan.'},{title:'Ka sake duba hanyar sadarwa',desc:'Kafin ka tura, ka tabbatar da kadara, hanyar sadarwa, da inda za ta je.'},{title:'Adana cikin aminci / tura zuwa walat',desc:'Ka yanke shawarar ko za ka bar ta a dandali ko ka tura wani bangare zuwa walat naka.'}]
    })
  };

  lessonSixLocaleFixPack.br = deepClone(lessonSixLocaleFixPack.pt);
  window.__lessonSixLocaleFixPack = deepClone(lessonSixLocaleFixPack);

  if(typeof ui !== 'undefined'){
    Object.keys(lessonSixLocaleFixPack).forEach(function(lang){
      if(!ui[lang]) ui[lang] = {};
      Object.assign(ui[lang], lessonSixLocaleFixPack[lang].ui);
    });
  }

  if(typeof lessons !== 'undefined' && lessons){
    Object.keys(lessonSixLocaleFixPack).forEach(function(lang){
      if(!lessons[lang]) lessons[lang] = (lang === 'br' && lessons.pt) ? deepClone(lessons.pt) : deepClone(lessons.en);
      lessons[lang][5] = deepClone(lessonSixLocaleFixPack[lang].lesson);
    });
  }

  function renderLessonSixVisualFinal(){
    var lang = lessonSixLangFinal();
    var lesson = (lessons[lang] && lessons[lang][5]) || (lessons.en && lessons.en[5]);
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    return '<div class="visual"><div class="visual-title">' + (typeof t === 'function' ? t('visual.title') : 'Visual explanation') + '</div><ul class="steps-list">' + visual.map(function(step, idx){
      return '<li class="step-item"><div class="step-n">' + (idx + 1) + '</div><div><div class="step-title">' + step.title + '</div><div class="step-desc">' + step.desc + '</div></div></li>';
    }).join('') + '</ul></div>';
  }

  var lessonSixPreviousVisual = window.visualForLesson;
  if(typeof lessonSixPreviousVisual === 'function' && !lessonSixPreviousVisual.__lessonSixStructureLockFinal){
    var lessonSixWrappedVisual = function(i){
      if(i !== 5) return lessonSixPreviousVisual.apply(this, arguments);
      return renderLessonSixVisualFinal();
    };
    lessonSixWrappedVisual.__lessonSixStructureLockFinal = true;
    window.visualForLesson = lessonSixWrappedVisual;
  }

  function stripLessonSixPurchaseFlow(html){
    var marker = '<ul class="steps-list">';
    var first = html.indexOf(marker);
    if(first === -1) return html;
    var second = html.indexOf(marker, first + marker.length);
    if(second === -1) return html;
    var end = html.indexOf('</ul>', second);
    if(end === -1) return html;
    return html.slice(0, second) + html.slice(end + 5);
  }

  var lessonSixPreviousRender = window.renderLesson;
  if(typeof lessonSixPreviousRender === 'function' && !lessonSixPreviousRender.__lessonSixStructureLockFinal){
    var lessonSixWrappedRender = function(i){
      var html = lessonSixPreviousRender.apply(this, arguments);
      if(i !== 5 || typeof html !== 'string') return html || '';
      return stripLessonSixPurchaseFlow(html);
    };
    lessonSixWrappedRender.__lessonSixStructureLockFinal = true;
    window.renderLesson = lessonSixWrappedRender;
  }

  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof applyUI === 'function') applyUI();
  if(typeof currentPage !== 'undefined' && /^lesson\\d+$/.test(currentPage) && typeof showLesson === 'function'){
    showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
  }
})();