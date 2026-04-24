(function(){
  if(window.__faqSource20260413Patch) return;
  window.__faqSource20260413Patch = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "br" ? "pt" : value;
  }

  function normalize(value){
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function ensurePageLang(lang){
    if(typeof polishedSectionContent === "undefined" || !polishedSectionContent) return null;
    var resolved = baseLang(lang);
    if(!polishedSectionContent[lang]){
      polishedSectionContent[lang] = clone(polishedSectionContent[resolved] || polishedSectionContent.en || {});
    }
    polishedSectionContent[lang].faqItems = polishedSectionContent[lang].faqItems || [];
    return polishedSectionContent[lang];
  }

  function ensureSourceList(store, lang){
    if(!store) return null;
    var resolved = baseLang(lang);
    if(!Array.isArray(store[lang])){
      store[lang] = clone(store[resolved] || store.en || []);
    }
    return store[lang];
  }

  function upsertFaq(list, faq){
    if(!list.some(function(row){ return normalize(row && row[0]) === normalize(faq.q); })){
      list.push([faq.q, faq.a]);
    }
  }

  function upsertSource(list, source, relatedLabel){
    if(!list.some(function(row){ return row && row[4] === source.url; })){
      list.push(["scams", source.publisher, source.title, source.desc, source.url, relatedLabel, source.why]);
    }
  }

  function getRelatedLabel(lang){
    if(typeof lessons !== "undefined" && lessons && lessons[lang] && lessons[lang][6] && lessons[lang][6].title){
      return lessons[lang][6].title;
    }
    if(typeof ui !== "undefined" && ui && ui[lang] && ui[lang]["nav.l7"]){
      return ui[lang]["nav.l7"];
    }
    return "Lesson 7";
  }

  var LANGS = ["en","ko","th","id","pt","br","tr","es","ar","vi","ha"];
  var SOURCE_URLS = {
    metamask:"https://support.metamask.io/stay-safe/protect-yourself/wallet-and-hardware/address-poisoning-scams/",
    trezor:"https://trezor.io/support/troubleshooting/coins-tokens/address-poisoning-attacks"
  };
  var FAQ_SOURCE_PACK = {
    en:{
      faqs:[
        {q:"Is it okay to keep assets on an exchange at first?", a:"It can be okay for a small beginner amount, but remember the exchange controls the keys. Learn the risk and move funds if you need more control."},
        {q:"Where should I store my seed phrase?", a:"Store it offline in a private place you can access again. Avoid screenshots, chat apps, email, and cloud notes."},
        {q:"Why is a different network dangerous even if the address looks correct?", a:"The address alone is not enough. If the network is wrong, funds may not arrive correctly or may be hard to recover."},
        {q:"How can I recognize a fake support DM?", a:"Be careful if a DM asks for your seed phrase, password, remote access, or urgent payment. Pressure and private contact are common scam signs."},
        {q:"How can I avoid address poisoning?", a:"Do not copy an address from recent history alone. Check the full address, use saved trusted addresses when possible, and send a small test first."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: Address poisoning scams", desc:"Official guide showing how lookalike addresses appear in transaction history and what to check before copying.", url:SOURCE_URLS.metamask, why:"Useful for beginners who might copy an address from history too quickly."},
        {publisher:"Trezor", title:"Trezor: Address poisoning attacks", desc:"Official wallet security article explaining bot-made lookalike addresses and wrong-copy risk.", url:SOURCE_URLS.trezor, why:"Good reminder to compare the full address before every send."}
      ]
    },
    ko:{
      faqs:[
        {q:"처음에는 거래소에 자산을 두어도 되나요?", a:"초보자 금액을 잠시 두는 것은 가능하지만, 키는 거래소가 관리합니다. 위험을 이해하고 필요하면 직접 보관으로 옮기세요."},
        {q:"시드 문구는 어디에 보관하는 것이 좋나요?", a:"다시 확인할 수 있는 오프라인의 개인 공간에 보관하세요. 스크린샷, 메신저, 이메일, 클라우드 메모는 피하는 편이 좋습니다."},
        {q:"주소가 맞아도 네트워크가 다르면 왜 문제가 되나요?", a:"주소만 맞는다고 충분하지 않습니다. 네트워크가 다르면 자산이 제대로 도착하지 않거나 복구가 매우 어려울 수 있습니다."},
        {q:"고객센터를 사칭하는 DM은 어떻게 구분하나요?", a:"시드 문구, 비밀번호, 원격 접속, 즉시 결제를 요구하면 특히 조심하세요. 압박과 개인 DM은 흔한 사기 신호입니다."},
        {q:"주소 오염 공격은 어떻게 피할 수 있나요?", a:"최근 기록만 보고 주소를 복사하지 마세요. 전체 주소를 다시 확인하고, 가능하면 저장한 신뢰 주소를 쓰고, 먼저 소액 테스트를 하세요."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: 주소 오염 공격 사기", desc:"거래 기록에 비슷한 주소가 어떻게 섞이는지와 복사 전에 무엇을 확인해야 하는지 설명하는 공식 안내입니다.", url:SOURCE_URLS.metamask, why:"거래 기록에서 급하게 주소를 복사할 때 왜 위험한지 초보자에게 바로 보여줍니다."},
        {publisher:"Trezor", title:"Trezor: 주소 오염 공격", desc:"봇이 비슷한 주소를 만들고 잘못 복사하게 유도하는 위험을 설명하는 공식 지갑 보안 글입니다.", url:SOURCE_URLS.trezor, why:"보내기 전 전체 주소를 다시 비교해야 하는 이유를 분명하게 알려줍니다."}
      ]
    },
    th:{
      faqs:[
        {q:"เก็บสินทรัพย์ไว้บนเว็บเทรดก่อนในช่วงเริ่มต้นได้ไหม?", a:"ได้สำหรับจำนวนเล็ก ๆ ในช่วงเริ่มต้น แต่คีย์ยังอยู่ในการควบคุมของเว็บเทรด ควรเข้าใจความเสี่ยงและย้ายออกเมื่ออยากควบคุมเองมากขึ้น."},
        {q:"ควรเก็บ seed phrase ไว้ที่ไหน?", a:"เก็บแบบออฟไลน์ในที่ส่วนตัวที่คุณกลับมาเปิดดูได้ อย่าเก็บเป็นภาพหน้าจอ แชต อีเมล หรือโน้ตบนคลาวด์."},
        {q:"ทำไมเครือข่ายที่ต่างกันถึงอันตราย แม้ที่อยู่จะดูถูกต้อง?", a:"แค่ที่อยู่ดูถูกต้องยังไม่พอ ถ้าเครือข่ายผิด สินทรัพย์อาจไปไม่ถึงหรือกู้คืนได้ยากมาก."},
        {q:"จะสังเกต DM ปลอมที่อ้างว่าเป็นฝ่ายช่วยเหลือได้อย่างไร?", a:"ถ้า DM ขอ seed phrase รหัสผ่าน รีโมตเข้าถึงเครื่อง หรือเร่งให้จ่ายเงิน ให้ระวังเป็นพิเศษ ความกดดันและการติดต่อส่วนตัวเป็นสัญญาณหลอกลวงที่พบบ่อย."},
        {q:"จะหลีกเลี่ยง address poisoning ได้อย่างไร?", a:"อย่าคัดลอกที่อยู่จากประวัติล่าสุดอย่างเดียว ตรวจที่อยู่เต็มอีกครั้ง ใช้ที่อยู่ที่บันทึกไว้และเชื่อถือได้เมื่อทำได้ และลองส่งจำนวนน้อยก่อน."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: กลโกง address poisoning", desc:"คู่มือทางการที่อธิบายว่าที่อยู่คล้ายกันโผล่ในประวัติธุรกรรมได้อย่างไรและควรเช็กอะไรก่อนคัดลอก.", url:SOURCE_URLS.metamask, why:"ช่วยให้ผู้เริ่มต้นเห็นความเสี่ยงของการคัดลอกจากประวัติแบบรีบ ๆ."},
        {publisher:"Trezor", title:"Trezor: การโจมตี address poisoning", desc:"บทความความปลอดภัยทางการของกระเป๋าเงินที่อธิบายที่อยู่คล้ายกันจากบอตและความเสี่ยงของการคัดลอกผิด.", url:SOURCE_URLS.trezor, why:"ย้ำให้ตรวจที่อยู่เต็มทุกครั้งก่อนส่ง."}
      ]
    },
    id:{
      faqs:[
        {q:"Bolehkah pada awalnya saya menyimpan aset di exchange?", a:"Boleh untuk jumlah kecil saat baru mulai, tetapi exchange tetap memegang kendali atas kuncinya. Pahami risikonya dan pindahkan jika Anda butuh kendali lebih."},
        {q:"Di mana sebaiknya saya menyimpan seed phrase?", a:"Simpan secara offline di tempat pribadi yang bisa Anda cek lagi. Hindari screenshot, chat, email, dan catatan cloud."},
        {q:"Mengapa jaringan yang berbeda berbahaya walaupun alamatnya terlihat benar?", a:"Alamat saja tidak cukup. Jika jaringannya salah, aset bisa tidak sampai dengan benar atau sulit dipulihkan."},
        {q:"Bagaimana cara mengenali DM support palsu?", a:"Waspadai DM yang meminta seed phrase, kata sandi, akses jarak jauh, atau pembayaran mendesak. Tekanan dan kontak pribadi adalah tanda scam yang umum."},
        {q:"Bagaimana cara menghindari peracunan alamat?", a:"Jangan menyalin alamat hanya dari riwayat terbaru. Periksa seluruh alamat, gunakan alamat tepercaya yang sudah disimpan bila memungkinkan, dan kirim tes kecil terlebih dahulu."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: penipuan peracunan alamat", desc:"Panduan resmi yang menjelaskan bagaimana alamat mirip muncul di riwayat transaksi dan apa yang perlu dicek sebelum menyalin.", url:SOURCE_URLS.metamask, why:"Membantu pemula memahami risiko menyalin alamat terlalu cepat dari riwayat."},
        {publisher:"Trezor", title:"Trezor: serangan peracunan alamat", desc:"Artikel keamanan wallet resmi tentang alamat mirip buatan bot dan risiko salah menyalin.", url:SOURCE_URLS.trezor, why:"Pengingat penting untuk membandingkan seluruh alamat sebelum mengirim."}
      ]
    },
    pt:{
      faqs:[
        {q:"É normal deixar ativos na corretora no começo?", a:"Pode acontecer com um valor pequeno no início, mas a corretora continua controlando as chaves. Entenda esse risco e mova os fundos se quiser mais controle."},
        {q:"Onde devo guardar minha frase-semente?", a:"Guarde offline em um lugar privado que você consiga consultar de novo. Evite captura de tela, chat, email e notas na nuvem."},
        {q:"Por que uma rede diferente é perigosa mesmo se o endereço parecer correto?", a:"O endereço sozinho não basta. Se a rede estiver errada, os ativos podem não chegar direito ou ficar muito difíceis de recuperar."},
        {q:"Como reconhecer um DM falso de suporte?", a:"Desconfie se o DM pedir frase-semente, senha, acesso remoto ou pagamento urgente. Pressa e contato privado são sinais comuns de golpe."},
        {q:"Como posso evitar envenenamento de endereço?", a:"Não copie o endereço apenas do histórico recente. Confira o endereço completo, use endereços confiáveis salvos quando puder e faça um teste pequeno primeiro."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: golpes de envenenamento de endereço", desc:"Guia oficial explicando como endereços parecidos aparecem no histórico de transações e o que verificar antes de copiar.", url:SOURCE_URLS.metamask, why:"Ajuda iniciantes a entender o risco de copiar um endereço do histórico rápido demais."},
        {publisher:"Trezor", title:"Trezor: ataques de envenenamento de endereço", desc:"Artigo oficial de segurança de carteira sobre endereços parecidos criados por bots e risco de cópia errada.", url:SOURCE_URLS.trezor, why:"Lembra por que vale comparar o endereço inteiro antes de cada envio."}
      ]
    },
    tr:{
      faqs:[
        {q:"Başlangıçta varlıkları borsada tutmak olur mu?", a:"Başlangıçta küçük bir tutar için olabilir, ama anahtarlar yine borsanın kontrolündedir. Riski anlayın ve daha fazla kontrol istiyorsanız fonları taşıyın."},
        {q:"Seed phrase'i nerede saklamalıyım?", a:"Çevrimdışı ve size özel bir yerde saklayın. Ekran görüntüsü, mesaj uygulaması, email ve bulut notlardan kaçının."},
        {q:"Adres doğru görünse bile farklı ağ neden tehlikelidir?", a:"Tek başına adres yeterli değildir. Ağ yanlışsa varlıklar doğru ulaşmayabilir veya geri almak çok zor olabilir."},
        {q:"Sahte destek DM'i nasıl anlarım?", a:"Seed phrase, şifre, uzaktan erişim veya acil ödeme isteyen DM'lere dikkat edin. Baskı ve özel mesaj yaygın dolandırıcılık işaretleridir."},
        {q:"Adres zehirlemeyi nasıl önlerim?", a:"Sadece son işlem geçmişinden adres kopyalamayın. Tüm adresi kontrol edin, mümkünse kaydedilmiş güvenilir adresleri kullanın ve önce küçük bir test gönderin."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: adres zehirleme dolandırıcılıkları", desc:"Benzer adreslerin işlem geçmişinde nasıl göründüğünü ve kopyalamadan önce nelerin kontrol edilmesi gerektiğini anlatan resmi rehber.", url:SOURCE_URLS.metamask, why:"Adresi geçmişten aceleyle kopyalamanın riskini yeni başlayanlara açıkça gösterir."},
        {publisher:"Trezor", title:"Trezor: adres zehirleme saldırıları", desc:"Botların ürettiği benzer adresleri ve yanlış kopyalama riskini anlatan resmi cüzdan güvenlik yazısı.", url:SOURCE_URLS.trezor, why:"Her gönderimden önce tam adresi karşılaştırmayı hatırlatır."}
      ]
    },
    es:{
      faqs:[
        {q:"¿Está bien dejar los activos en un exchange al principio?", a:"Puede pasar con una cantidad pequeña al empezar, pero el exchange sigue controlando las claves. Entiende ese riesgo y mueve los fondos si quieres más control."},
        {q:"¿Dónde debo guardar mi frase semilla?", a:"Guárdala offline en un lugar privado al que puedas volver. Evita capturas de pantalla, chats, correo y notas en la nube."},
        {q:"¿Por qué una red diferente es peligrosa aunque la dirección parezca correcta?", a:"La dirección por sí sola no basta. Si la red es incorrecta, los fondos pueden no llegar bien o ser muy difíciles de recuperar."},
        {q:"¿Cómo reconozco un DM falso de soporte?", a:"Sospecha si el DM pide frase semilla, contraseña, acceso remoto o pago urgente. La presión y el contacto privado son señales comunes de estafa."},
        {q:"¿Cómo puedo evitar el envenenamiento de direcciones?", a:"No copies una dirección solo desde el historial reciente. Revisa la dirección completa, usa direcciones confiables guardadas cuando puedas y envía primero una pequeña prueba."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: estafas de envenenamiento de direcciones", desc:"Guía oficial que explica cómo aparecen direcciones parecidas en el historial de transacciones y qué revisar antes de copiar.", url:SOURCE_URLS.metamask, why:"Ayuda a principiantes a entender el riesgo de copiar una dirección del historial con prisa."},
        {publisher:"Trezor", title:"Trezor: ataques de envenenamiento de direcciones", desc:"Artículo oficial de seguridad de cartera sobre direcciones parecidas creadas por bots y el riesgo de copiar mal.", url:SOURCE_URLS.trezor, why:"Recuerda por qué conviene comparar la dirección completa antes de cada envío."}
      ]
    },
    ar:{
      faqs:[
        {q:"هل لا بأس بترك الأصول في المنصة في البداية؟", a:"قد يكون ذلك مقبولاً لمبلغ صغير في البداية، لكن المنصة تبقى هي المتحكمة في المفاتيح. افهم هذا الخطر وانقل الأصول إذا أردت سيطرة أكبر."},
        {q:"أين يجب أن أحفظ عبارة الاسترداد؟", a:"احفظها دون اتصال بالإنترنت في مكان خاص يمكنك الرجوع إليه. تجنب لقطات الشاشة والدردشة والبريد الإلكتروني والملاحظات السحابية."},
        {q:"لماذا تكون الشبكة المختلفة خطيرة حتى لو بدا العنوان صحيحاً؟", a:"العنوان وحده لا يكفي. إذا كانت الشبكة خاطئة فقد لا تصل الأصول بشكل صحيح أو يصبح استرجاعها صعباً جداً."},
        {q:"كيف أتعرف على رسالة دعم مزيفة عبر DM؟", a:"انتبه إذا طلبت الرسالة عبارة الاسترداد أو كلمة المرور أو الوصول عن بُعد أو دفعة عاجلة. الضغط والتواصل الخاص من علامات الاحتيال الشائعة."},
        {q:"كيف أتجنب تسميم العناوين؟", a:"لا تنسخ العنوان من السجل الأخير فقط. راجع العنوان كاملاً واستخدم العناوين الموثوقة المحفوظة إن أمكن وأرسل مبلغاً صغيراً للاختبار أولاً."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: احتيالات تسميم العناوين", desc:"دليل رسمي يشرح كيف تظهر العناوين المتشابهة في سجل المعاملات وما الذي يجب فحصه قبل النسخ.", url:SOURCE_URLS.metamask, why:"يساعد المبتدئ على فهم خطر نسخ عنوان من السجل بسرعة."},
        {publisher:"Trezor", title:"Trezor: هجمات تسميم العناوين", desc:"مقال أمان رسمي للمحفظة يشرح العناوين المتشابهة التي تصنعها البوتات وخطر النسخ الخاطئ.", url:SOURCE_URLS.trezor, why:"تذكير مهم بمقارنة العنوان كاملاً قبل كل إرسال."}
      ]
    },
    vi:{
      faqs:[
        {q:"Lúc đầu để tài sản trên sàn có được không?", a:"Có thể chấp nhận với số tiền nhỏ khi mới bắt đầu, nhưng sàn vẫn kiểm soát khóa. Hãy hiểu rủi ro đó và chuyển tài sản nếu bạn muốn tự kiểm soát nhiều hơn."},
        {q:"Tôi nên lưu cụm từ khôi phục ở đâu?", a:"Hãy lưu offline ở nơi riêng tư mà bạn có thể xem lại. Tránh ảnh chụp màn hình, ứng dụng chat, email và ghi chú đám mây."},
        {q:"Vì sao khác mạng lại nguy hiểm dù địa chỉ nhìn có vẻ đúng?", a:"Chỉ đúng địa chỉ là chưa đủ. Nếu sai mạng, tài sản có thể không đến đúng hoặc rất khó khôi phục."},
        {q:"Làm sao nhận ra DM hỗ trợ giả?", a:"Hãy cảnh giác nếu DM hỏi cụm từ khôi phục, mật khẩu, quyền điều khiển từ xa hoặc yêu cầu thanh toán gấp. Sự thúc ép và liên hệ riêng là dấu hiệu lừa đảo phổ biến."},
        {q:"Làm sao tránh đầu độc địa chỉ?", a:"Đừng chỉ sao chép địa chỉ từ lịch sử gần đây. Hãy kiểm tra toàn bộ địa chỉ, dùng địa chỉ tin cậy đã lưu khi có thể và gửi thử một khoản nhỏ trước."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: lừa đảo đầu độc địa chỉ", desc:"Hướng dẫn chính thức giải thích cách địa chỉ giống nhau xuất hiện trong lịch sử giao dịch và cần kiểm tra gì trước khi sao chép.", url:SOURCE_URLS.metamask, why:"Giúp người mới hiểu rủi ro khi sao chép địa chỉ từ lịch sử quá nhanh."},
        {publisher:"Trezor", title:"Trezor: tấn công đầu độc địa chỉ", desc:"Bài viết bảo mật ví chính thức về các địa chỉ giống nhau do bot tạo ra và rủi ro sao chép nhầm.", url:SOURCE_URLS.trezor, why:"Nhắc bạn so sánh toàn bộ địa chỉ trước mỗi lần gửi."}
      ]
    },
    ha:{
      faqs:[
        {q:"Ya dace in bar kadarori a kan exchange a farko?", a:"Zai iya yiwuwa ga karamin adadi a farkon lokaci, amma har yanzu exchange ne ke rike da makullan. Ka fahimci hadarin sannan ka matsar da kadarar idan kana son karin iko."},
        {q:"A ina ya fi dacewa in adana kalmomin dawo da walat?", a:"Ajiye su offline a wuri na sirri da za ka iya komawa ka duba. Ka guji screenshot, chat, email da bayanin cloud."},
        {q:"Me ya sa hanyar sadarwa daban take da hadari ko da adireshin ya yi daidai?", a:"Adireshi kadai bai isa ba. Idan hanyar sadarwa ta yi kuskure, kadarar na iya kasa isa ko kuma ta yi wuya a dawo da ita."},
        {q:"Ta yaya zan gane DM din tallafi na bogi?", a:"Ka yi hankali idan DM yana neman kalmomin dawo da walat, kalmar sirri, remote access ko biyan kudi cikin gaggawa. Matsi da sakon sirri alamu ne na damfara da suka saba."},
        {q:"Ta yaya zan guji gurbata adireshi?", a:"Kada ka kwafi adireshi daga tarihin baya-bayan nan kadai. Ka duba cikakken adireshin, ka yi amfani da amintattun adireshin da ka adana idan zai yiwu, sannan ka fara da karamin gwaji."}
      ],
      sources:[
        {publisher:"MetaMask", title:"MetaMask: damfarar gurbata adireshi", desc:"Jagorar hukuma da ke bayanin yadda adireshi masu kama da juna ke bayyana a tarihin muamala da abin da ya kamata a duba kafin kwafi.", url:SOURCE_URLS.metamask, why:"Yana taimaka wa mai farawa ya gane hadarin kwafa daga tarihi cikin sauri."},
        {publisher:"Trezor", title:"Trezor: hare-haren gurbata adireshi", desc:"Rubutun tsaro na walat na hukuma game da adireshi masu kama da juna da bots ke kirkira da hadarin kuskuren kwafi.", url:SOURCE_URLS.trezor, why:"Yana tunasar da kai ka kwatanta cikakken adireshi kafin kowace aikawa."}
      ]
    }
  };
  FAQ_SOURCE_PACK.br = clone(FAQ_SOURCE_PACK.pt);

  LANGS.forEach(function(lang){
    var pack = FAQ_SOURCE_PACK[baseLang(lang)] || FAQ_SOURCE_PACK.en;
    var page = ensurePageLang(lang);
    if(page){
      pack.faqs.forEach(function(entry){
        upsertFaq(page.faqItems, entry);
      });
    }

    var relatedLabel = getRelatedLabel(lang);
    var sourceList = ensureSourceList(typeof sourceLibrary !== "undefined" ? sourceLibrary : null, lang);
    if(sourceList){
      pack.sources.forEach(function(entry){
        upsertSource(sourceList, entry, relatedLabel);
      });
    }

    var sourceOverrideList = ensureSourceList(typeof sourceOverrides !== "undefined" ? sourceOverrides : null, lang);
    if(sourceOverrideList){
      pack.sources.forEach(function(entry){
        upsertSource(sourceOverrideList, entry, relatedLabel);
      });
    }
  });

  if(typeof currentPage !== "undefined" && (currentPage === "faq" || currentPage === "sources") && typeof showPage === "function"){
    showPage(currentPage);
  }
})();