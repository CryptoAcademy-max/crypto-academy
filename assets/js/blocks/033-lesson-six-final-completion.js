(function(){
  if(window.__lessonSixFinalCompletion) return;
  window.__lessonSixFinalCompletion = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function lessonSixLang(){
    return currentLang === 'br' ? 'pt' : currentLang;
  }

  var lessonSixPack = {
    en:{
      visual:[
        {title:'Choose an exchange', desc:'Compare fees, local currency support, and withdrawal details that are easy to understand.'},
        {title:'Protect the account and finish KYC', desc:'Turn on basic security and complete the identity check before moving money.'},
        {title:'Make a small first buy', desc:'Deposit fiat, review the asset and fees, and start with a small amount.'},
        {title:'Check the network again', desc:'Before sending anything out, confirm the asset, the network, and the destination.'},
        {title:'Store it safely', desc:'Decide whether to keep it on the platform for now or move part of it to your own wallet.'}
      ],
      checkpoints:[
        'I can compare basic exchange details before choosing one.',
        'I can explain KYC in one short sentence.',
        'I know why beginners start with a small first purchase.',
        'I know what to re-check after buying before moving funds.'
      ],
      quiz:[
        ['Why should a beginner start with a small first purchase?','Correct: a small first buy lowers pressure and helps you learn the flow more safely.'],
        ['Why is checking the network important before a withdrawal?','Correct: the same asset can exist on different networks, so a mismatch can cause transfer problems.'],
        ['Why do some people move assets from an exchange to a self-custody wallet later?','Correct: because self-custody gives them direct control instead of leaving everything with the platform.']
      ]
    },
    ko:{
      visual:[
        {title:'거래소 선택', desc:'처음에는 너무 많은 기능보다, 사용이 쉽고 보안 안내가 명확한 거래소를 고르는 것이 중요합니다.'},
        {title:'계정 보호 / KYC', desc:'회원가입 후에는 비밀번호와 2단계 인증을 먼저 설정하고, 필요한 본인 확인 절차를 차분히 진행합니다.'},
        {title:'소액 첫 구매', desc:'처음부터 큰 금액을 넣기보다, 작게 시작해서 구매 과정과 화면 흐름을 직접 익히는 것이 안전합니다.'},
        {title:'네트워크 확인', desc:'입출금이나 전송 전에는 코인 이름만 보지 말고, 선택한 네트워크가 맞는지 꼭 다시 확인해야 합니다.'},
        {title:'안전 보관 / 지갑 이동', desc:'구매 후에는 자산을 어디에 둘지 결정해야 합니다. 장기 보관이라면 본인이 직접 통제할 수 있는 보관 방법을 이해하는 것이 중요합니다.'}
      ],
      checkpoints:[
        '<strong>처음 구매는 큰 금액보다 소액으로 시작해야 합니다.</strong><br><span style="display:block;margin-top:6px;color:var(--muted);">실수 가능성을 줄이고, 실제 흐름을 직접 익히기 위해서입니다.</span>',
        '<strong>코인을 보낼 때는 이름만이 아니라 네트워크도 확인해야 합니다.</strong><br><span style="display:block;margin-top:6px;color:var(--muted);">같은 코인이라도 네트워크를 잘못 선택하면 자산을 잃을 수 있습니다.</span>',
        '<strong>거래소 계정은 비밀번호만으로 끝내지 말고 추가 보안 설정이 필요합니다.</strong><br><span style="display:block;margin-top:6px;color:var(--muted);">2단계 인증 같은 기본 보안 설정은 꼭 먼저 해야 합니다.</span>',
        '<strong>구매가 끝난 뒤에도 보관 방법을 다시 점검해야 합니다.</strong><br><span style="display:block;margin-top:6px;color:var(--muted);">어디에 두는지가 안전에 큰 영향을 줍니다.</span>'
      ],
      quiz:[
        ['문항 1. 처음 암호화폐를 살 때 가장 좋은 방법은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 처음부터 큰 금액을 한 번에 산다</div><div>B. 소액으로 시작해서 과정부터 익힌다</div><div>C. 아무 설명 없이 추천 코인부터 산다</div></div>','정답: B<br>해설: 처음에는 수익보다 과정 이해가 더 중요합니다. 소액으로 시작해야 실수를 줄일 수 있습니다.'],
        ['문항 2. 코인을 다른 곳으로 보낼 때 가장 먼저 확인해야 할 것은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 코인 색상</div><div>B. 네트워크와 주소</div><div>C. 로고 크기</div></div>','정답: B<br>해설: 전송에서는 주소와 네트워크 확인이 가장 중요합니다. 이 부분을 틀리면 되돌리기 어렵습니다.'],
        ['문항 3. 구매 후 바로 생각해야 할 것은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 다음 코인을 바로 더 살지</div><div>B. 어디에 안전하게 보관할지</div><div>C. 화면 색상을 바꿀지</div></div>','정답: B<br>해설: 구매 자체가 끝이 아닙니다. 자산을 어디에, 어떤 방식으로 보관할지가 매우 중요합니다.']
      ]
    },
    th:{
      visual:[
        {title:'เลือกแพลตฟอร์ม', desc:'เปรียบเทียบค่าธรรมเนียม การรองรับเงินท้องถิ่น และข้อมูลการถอนที่เข้าใจง่าย'},
        {title:'ปกป้องบัญชีและทำ KYC', desc:'เปิดการป้องกันพื้นฐานและยืนยันตัวตนก่อนย้ายเงิน'},
        {title:'ซื้อครั้งแรกแบบเล็ก ๆ', desc:'ฝากเงินปกติ ตรวจสอบสินทรัพย์และค่าธรรมเนียม แล้วเริ่มด้วยจำนวนเล็กน้อย'},
        {title:'ตรวจสอบเครือข่ายอีกครั้ง', desc:'ก่อนโอนออก ให้ตรวจสอบสินทรัพย์ เครือข่าย และปลายทางอีกครั้ง'},
        {title:'เก็บอย่างปลอดภัย', desc:'ตัดสินใจว่าจะเก็บไว้บนแพลตฟอร์มหรือย้ายบางส่วนไปยังกระเป๋าของคุณ'}
      ],
      checkpoints:[
        'ฉันบอกได้ว่าควรเปรียบเทียบอะไรบ้างก่อนเลือกแพลตฟอร์ม',
        'ฉันอธิบาย KYC แบบสั้น ๆ ได้',
        'ฉันเข้าใจว่าทำไมควรเริ่มด้วยจำนวนเล็กน้อย',
        'ฉันรู้ว่าหลังซื้อแล้วต้องเช็กอะไรอีกก่อนย้าย'
      ],
      quiz:[
        ['ทำไมมือใหม่ควรเริ่มซื้อครั้งแรกด้วยจำนวนน้อย?', 'ถูกต้อง: จำนวนเล็กช่วยให้เรียนรู้ขั้นตอนด้วยความกดดันและความเสี่ยงที่น้อยกว่า'],
        ['ทำไมต้องตรวจสอบเครือข่ายก่อนถอน?', 'ถูกต้อง: สินทรัพย์เดียวกันอาจอยู่หลายเครือข่าย และการเลือกผิดอาจทำให้มีปัญหาได้'],
        ['ทำไมไม่ควรเก็บทั้งหมดไว้บนแพลตฟอร์มนานเกินไป?', 'ถูกต้อง: เพราะแพลตฟอร์มยังถือกุญแจแทนคุณอยู่ จึงควรเข้าใจเรื่องการดูแลด้วยตนเองด้วย']
      ]
    },
    id:{
      visual:[
        {title:'Pilih exchange', desc:'Bandingkan biaya, dukungan mata uang lokal, dan detail penarikan yang mudah dipahami.'},
        {title:'Lindungi akun dan selesaikan KYC', desc:'Aktifkan keamanan dasar dan selesaikan pemeriksaan identitas sebelum memindahkan uang.'},
        {title:'Lakukan pembelian kecil pertama', desc:'Setor fiat, periksa aset dan biaya, lalu mulai dari jumlah kecil.'},
        {title:'Periksa jaringan lagi', desc:'Sebelum mengirim, cocokkan aset, jaringan, dan tujuan.'},
        {title:'Simpan dengan aman', desc:'Putuskan apakah akan disimpan dulu di platform atau dipindahkan sebagian ke wallet Anda.'}
      ],
      checkpoints:[
        'Saya tahu apa saja yang perlu dibandingkan sebelum memilih exchange.',
        'Saya bisa menjelaskan KYC dengan singkat.',
        'Saya paham mengapa pembelian pertama sebaiknya kecil.',
        'Saya tahu apa yang harus dicek lagi sebelum memindahkan aset.'
      ],
      quiz:[
        ['Mengapa pembelian pertama sebaiknya kecil?', 'Benar: jumlah kecil membantu Anda belajar alur dengan tekanan dan risiko yang lebih rendah.'],
        ['Mengapa pemeriksaan jaringan penting sebelum penarikan?', 'Benar: aset yang sama bisa ada di jaringan yang berbeda, jadi salah pilih bisa menimbulkan masalah transfer.'],
        ['Mengapa aset tidak sebaiknya lama dibiarkan hanya di exchange?', 'Benar: karena platform masih memegang kendali, jadi Anda perlu memahami custody dan self-custody.']
      ]
    },
    pt:{
      visual:[
        {title:'Escolha a corretora', desc:'Compare taxas, suporte à moeda local e detalhes de saque fáceis de entender.'},
        {title:'Proteja a conta e conclua o KYC', desc:'Ative a segurança básica e finalize a verificação antes de mover dinheiro.'},
        {title:'Faça uma primeira compra pequena', desc:'Deposite moeda fiduciária, revise o ativo e as taxas, e comece com pouco.'},
        {title:'Confira a rede novamente', desc:'Antes de enviar, confirme o ativo, a rede e o destino.'},
        {title:'Guarde com segurança', desc:'Decida se vai deixar na plataforma por enquanto ou mover parte para sua carteira.'}
      ],
      checkpoints:[
        'Consigo dizer o que devo comparar antes de escolher uma corretora.',
        'Consigo explicar KYC em uma frase curta.',
        'Entendo por que a primeira compra deve ser pequena.',
        'Sei o que revisar depois da compra antes de mover fundos.'
      ],
      quiz:[
        ['Por que um iniciante deve começar com pouco?', 'Correto: um valor pequeno reduz a pressão e ajuda a aprender o processo com mais segurança.'],
        ['Por que é importante conferir a rede antes do saque?', 'Correto: o mesmo ativo pode existir em redes diferentes, e um erro pode causar problemas na transferência.'],
        ['Por que não é ideal deixar tudo na corretora por muito tempo?', 'Correto: porque a plataforma ainda controla as chaves, então vale entender a autocustódia.']
      ]
    },
    tr:{
      visual:[
        {title:'Borsayı seç', desc:'Ücretleri, yerel para desteğini ve anlaşılır çekim detaylarını karşılaştır.'},
        {title:'Hesabı koru ve KYC’yi tamamla', desc:'Temel güvenliği aç ve para hareket ettirmeden önce kimliğini doğrula.'},
        {title:'Küçük ilk alım yap', desc:'Fiat yatır, varlığı ve ücreti gözden geçir, küçük başla.'},
        {title:'Ağı tekrar kontrol et', desc:'Göndermeden önce varlığı, ağı ve hedefi yeniden doğrula.'},
        {title:'Güvenli sakla', desc:'Şimdilik platformda mı tutacağına yoksa bir kısmını kendi cüzdanına mı taşıyacağına karar ver.'}
      ],
      checkpoints:[
        'Bir borsa seçmeden önce hangi temel noktaları karşılaştıracağımı biliyorum.',
        'KYC’yi kısa bir cümleyle açıklayabiliyorum.',
        'Neden küçük ilk alımın daha güvenli olduğunu anlıyorum.',
        'Satın aldıktan sonra taşımadan önce neyi tekrar kontrol etmem gerektiğini biliyorum.'
      ],
      quiz:[
        ['Yeni başlayan biri neden küçük başlamalı?', 'Doğru: küçük başlamak daha az baskı ve daha az riskle süreci öğrenmeyi sağlar.'],
        ['Çekimden önce ağı kontrol etmek neden önemlidir?', 'Doğru: aynı varlık farklı ağlarda bulunabilir ve yanlış seçim transfer sorununa yol açabilir.'],
        ['Varlıkları neden uzun süre sadece borsada bırakmamak gerekir?', 'Doğru: çünkü kontrol hâlâ platformdadır, bu yüzden self-custody mantığını öğrenmek önemlidir.']
      ]
    },
    es:{
      visual:[
        {title:'Elige el exchange', desc:'Compara comisiones, soporte para moneda local y detalles de retiro fáciles de entender.'},
        {title:'Protege la cuenta y completa KYC', desc:'Activa la seguridad básica y termina la verificación antes de mover dinero.'},
        {title:'Haz una primera compra pequeña', desc:'Deposita fiat, revisa el activo y las comisiones, y empieza con poco.'},
        {title:'Revisa la red otra vez', desc:'Antes de enviar, confirma el activo, la red y el destino.'},
        {title:'Guárdalo con seguridad', desc:'Decide si lo dejarás por ahora en la plataforma o moverás una parte a tu propia cartera.'}
      ],
      checkpoints:[
        'Puedo decir qué debo comparar antes de elegir un exchange.',
        'Puedo explicar KYC en una frase corta.',
        'Entiendo por qué conviene empezar con una compra pequeña.',
        'Sé qué debo revisar otra vez antes de mover fondos.'
      ],
      quiz:[
        ['¿Por qué un principiante debería empezar con poco?', 'Correcto: una cantidad pequeña reduce la presión y ayuda a aprender el proceso con más seguridad.'],
        ['¿Por qué es importante revisar la red antes del retiro?', 'Correcto: el mismo activo puede existir en redes distintas y una elección incorrecta puede causar problemas.'],
        ['¿Por qué no conviene dejar todo mucho tiempo en el exchange?', 'Correcto: porque la plataforma sigue controlando las llaves, así que conviene entender la autocustodia.']
      ]
    },
    ar:{
      visual:[
        {title:'اختر المنصة', desc:'قارن الرسوم ودعم العملة المحلية وتفاصيل السحب السهلة الفهم.'},
        {title:'احمِ الحساب وأكمل KYC', desc:'فعّل الحماية الأساسية وأكمل التحقق قبل تحريك الأموال.'},
        {title:'ابدأ بشراء صغير', desc:'أودع العملة العادية وراجع الأصل والرسوم ثم ابدأ بمبلغ صغير.'},
        {title:'راجع الشبكة مرة أخرى', desc:'قبل الإرسال، تأكد من الأصل والشبكة والوجهة.'},
        {title:'احتفظ به بأمان', desc:'قرر هل سيبقى على المنصة الآن أم ستنقل جزءًا منه إلى محفظتك.'}
      ],
      checkpoints:[
        'أستطيع ذكر ما الذي أقارنه قبل اختيار المنصة.',
        'أستطيع شرح KYC بجملة قصيرة.',
        'أفهم لماذا يبدأ المبتدئ بمبلغ صغير.',
        'أعرف ما الذي يجب مراجعته بعد الشراء قبل نقل الأموال.'
      ],
      quiz:[
        ['لماذا يجب أن يبدأ المبتدئ بمبلغ صغير؟', 'صحيح: لأن المبلغ الصغير يخفف الضغط ويساعد على تعلم المسار بأمان أكبر.'],
        ['لماذا يجب مراجعة الشبكة قبل السحب؟', 'صحيح: لأن الأصل نفسه قد يوجد على أكثر من شبكة، والخطأ قد يسبب مشكلة في النقل.'],
        ['لماذا لا يُفضّل ترك كل شيء في المنصة لفترة طويلة؟', 'صحيح: لأن المنصة ما زالت تتحكم في المفاتيح، لذلك من المهم فهم الحفظ الذاتي.']
      ]
    },
    vi:{
      visual:[
        {title:'Chọn sàn', desc:'So sánh phí, hỗ trợ tiền địa phương và thông tin rút dễ hiểu.'},
        {title:'Bảo vệ tài khoản và hoàn tất KYC', desc:'Bật bảo mật cơ bản và hoàn tất xác minh trước khi chuyển tiền.'},
        {title:'Mua lượng nhỏ đầu tiên', desc:'Nạp tiền pháp định, xem lại tài sản và phí, rồi bắt đầu nhỏ.'},
        {title:'Kiểm tra lại mạng', desc:'Trước khi gửi đi, xác nhận tài sản, mạng và nơi nhận.'},
        {title:'Lưu trữ an toàn', desc:'Quyết định sẽ để tạm trên sàn hay chuyển một phần sang ví của bạn.'}
      ],
      checkpoints:[
        'Tôi biết cần so sánh gì trước khi chọn sàn.',
        'Tôi có thể giải thích KYC bằng một câu ngắn.',
        'Tôi hiểu vì sao nên bắt đầu với một khoản nhỏ.',
        'Tôi biết cần kiểm tra lại điều gì trước khi chuyển tiền.'
      ],
      quiz:[
        ['Vì sao người mới nên bắt đầu với số tiền nhỏ?', 'Đúng: số tiền nhỏ giúp bạn học quy trình với ít áp lực và ít rủi ro hơn.'],
        ['Vì sao phải kiểm tra mạng trước khi rút?', 'Đúng: cùng một tài sản có thể tồn tại trên nhiều mạng và chọn sai có thể gây rắc rối khi chuyển.'],
        ['Vì sao không nên để toàn bộ tài sản trên sàn quá lâu?', 'Đúng: vì nền tảng vẫn giữ quyền kiểm soát, nên bạn cần hiểu thêm về tự lưu ký.']
      ]
    },
    ha:{
      visual:[
        {title:'Zabi dandali', desc:'Kwatanta kudin hidima, tallafin kudin gida, da bayanin cire kudi mai saukin fahimta.'},
        {title:'Kare asusu kuma kammala KYC', desc:'Kunna tsaro na asali kuma ka kammala tantance kai kafin ka motsa kudi.'},
        {title:'Yi karamin saye na farko', desc:'Ka saka kudin fiat, ka duba kadara da kudin hidima, sannan ka fara da kadan.'},
        {title:'Ka sake duba hanyar sadarwa', desc:'Kafin ka tura, ka tabbatar da kadara, hanyar sadarwa, da inda za ta je.'},
        {title:'Adana cikin aminci', desc:'Ka yanke shawarar ko za ka bar ta a dandali ko ka tura wani bangare zuwa walat naka.'}
      ],
      checkpoints:[
        'Na san abin da zan kwatanta kafin zabar dandalin musaya.',
        'Zan iya bayyana KYC da gajeren jimla.',
        'Na fahimci dalilin da ya sa mai farawa zai fara da karamin adadi.',
        'Na san abin da ya kamata in sake dubawa kafin in motsa kudin.'
      ],
      quiz:[
        ['Me ya sa mai farawa ya kamata ya fara da karamin saye?', 'Daidai: karamin adadi yana rage matsin lamba kuma yana taimakawa koyon tsarin cikin aminci.'],
        ['Me ya sa duba hanyar sadarwa yake da muhimmanci kafin cire kudi?', 'Daidai: kadara daya na iya kasancewa a hanyoyi daban-daban, kuma kuskure na iya jawo matsalar canja wuri.'],
        ['Me ya sa ba a so a bar komai a dandali na dogon lokaci?', 'Daidai: domin dandali ne har yanzu ke rike da iko, don haka ya dace a fahimci self-custody.']
      ]
    }
  };

  lessonSixPack.br = lessonSixPack.pt;

  if(typeof lessons !== 'undefined' && lessons){
    Object.keys(lessonSixPack).forEach(function(lang){
      var targetLessons = lessons[lang] || lessons.en;
      if(!targetLessons || !targetLessons[5]) return;
      targetLessons[5].visual = deepClone(lessonSixPack[lang].visual);
      targetLessons[5].checkpoints = lessonSixPack[lang].checkpoints.slice();
      targetLessons[5].quiz = lessonSixPack[lang].quiz.map(function(row){ return row.slice(); });
    });
  }

  var originalVisualForLessonFinal = window.visualForLesson;
  if(typeof originalVisualForLessonFinal === 'function' && !originalVisualForLessonFinal.__lessonSixVisualWrapped){
    var wrappedVisualForLessonFinal = function(i){
      if(i !== 5) return originalVisualForLessonFinal.apply(this, arguments);
      var lang = lessonSixLang();
      var lesson = (typeof lessons !== 'undefined' && lessons && lessons[lang] && lessons[lang][5]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[5]) || {};
      var visual = Array.isArray(lesson.visual) && lesson.visual.length ? lesson.visual : ((lessonSixPack[lang] || lessonSixPack.en).visual);
      return `
        <div class="visual">
          <div class="visual-title">${typeof t === 'function' ? t('visual.title') : 'Visual explanation'}</div>
          <ul class="steps-list">
            ${visual.map(function(step, idx){
              return `<li class="step-item"><div class="step-n">${idx+1}</div><div><div class="step-title">${step.title}</div><div class="step-desc">${step.desc}</div></div></li>`;
            }).join('')}
          </ul>
        </div>`;
    };
    wrappedVisualForLessonFinal.__lessonSixVisualWrapped = true;
    window.visualForLesson = wrappedVisualForLessonFinal;
  }

  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
    showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
  }
})();