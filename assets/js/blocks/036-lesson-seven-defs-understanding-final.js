(function(){
  if(window.__lessonSevenDefsUnderstandingFinal) return;
  window.__lessonSevenDefsUnderstandingFinal = true;

  function clone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function lang7(lang){
    lang = lang || ((typeof currentLang !== 'undefined' ? currentLang : 'en') || 'en');
    return lang === 'br' ? 'pt' : lang;
  }

  var lessonSevenDefsPack = {
    en:[
      ['Airdrop','A way a project distributes tokens to users.'],
      ['Giveaway scam','A fake reward event that tries to make you connect a wallet or send funds first.'],
      ['Seed phrase','The recovery words for your wallet. Never type or share them on random sites.'],
      ['Rug pull','A situation where the team or controller suddenly removes funds or abandons the project.']
    ],
    ko:[
      ['에어드롭','프로젝트가 사용자에게 토큰을 나눠 주는 배포 방식입니다.'],
      ['경품형 사기','무료 보상처럼 보이지만 지갑 연결이나 전송을 유도하는 사기입니다.'],
      ['시드 문구','지갑 복구용 핵심 단어 묶음입니다. 절대 입력하거나 공유하면 안 됩니다.'],
      ['러그 풀','운영 주체가 갑자기 자금을 빼거나 프로젝트를 버리는 유형입니다.']
    ],
    th:[
      ['แอร์ดรอป','วิธีที่โปรเจกต์แจกโทเค็นให้ผู้ใช้'],
      ['หลอกแจกของรางวัล','กิจกรรมรางวัลปลอมที่พยายามหลอกให้เชื่อมกระเป๋าหรือโอนเงินก่อน'],
      ['ชุดคำกู้คืน','ชุดคำสำหรับกู้คืนกระเป๋าเงิน ห้ามพิมพ์หรือแชร์ในเว็บสุ่ม'],
      ['ดึงสภาพคล่องหนี','กรณีที่ทีมงานหรือผู้ควบคุมถอนเงินออกแล้วทิ้งโปรเจกต์กะทันหัน']
    ],
    id:[
      ['Pembagian token','Cara proyek membagikan token kepada pengguna.'],
      ['Penipuan hadiah','Acara hadiah palsu yang mencoba membuat Anda menghubungkan dompet atau mengirim dana terlebih dahulu.'],
      ['Frasa pemulihan','Kata pemulihan untuk dompet. Jangan pernah mengetik atau membagikannya di situs acak.'],
      ['Tarik likuiditas lalu kabur','Situasi ketika tim atau pengendali menarik dana lalu meninggalkan proyek secara tiba-tiba.']
    ],
    pt:[
      ['Distribuição de tokens','Forma de um projeto distribuir tokens para usuários.'],
      ['Golpe de sorteio','Evento falso de recompensa que tenta fazer você conectar a carteira ou enviar fundos antes.'],
      ['Frase-semente','Palavras de recuperação da carteira. Nunca digite ou compartilhe em páginas aleatórias.'],
      ['Abandono com retirada de fundos','Situação em que a equipe ou o controlador retira os fundos ou abandona o projeto de repente.']
    ],
    tr:[
      ['Token dağıtımı','Bir projenin kullanıcılara token dağıtma yöntemi.'],
      ['Ödül dolandırıcılığı','Sahte ödül etkinliği; sizi cüzdan bağlamaya veya önce para göndermeye çalışır.'],
      ['Kurtarma kelimeleri','Cüzdanı geri yüklemek için kullanılan kelimeler. Rastgele sitelere yazılmamalıdır.'],
      ['Likiditeyi çekip kaçma','Ekibin veya kontrol eden kişinin fonları çekip projeyi bir anda bırakması durumu.']
    ],
    es:[
      ['Distribución de tokens','Forma en que un proyecto reparte tokens a los usuarios.'],
      ['Estafa de sorteo','Evento falso de recompensa que intenta hacerte conectar la billetera o enviar fondos primero.'],
      ['Frase semilla','Palabras de recuperación de la billetera. Nunca las escribas ni compartas en páginas aleatorias.'],
      ['Retiro repentino de liquidez','Situación en la que el equipo o quien controla el proyecto saca fondos o lo abandona de repente.']
    ],
    ar:[
      ['توزيع رموز','طريقة يوزع بها المشروع الرموز على المستخدمين.'],
      ['احتيال الجوائز','حدث مكافأة مزيف يحاول دفعك لربط المحفظة أو إرسال الأموال أولا.'],
      ['عبارة الاسترداد','كلمات استعادة المحفظة. لا تكتبها أو تشاركها في صفحات عشوائية أبدا.'],
      ['سحب السيولة المفاجئ','حالة يسحب فيها الفريق أو المسيطر الأموال أو يترك المشروع فجأة.']
    ],
    vi:[
      ['Phân phối token','Cách một dự án phân phối token cho người dùng.'],
      ['Lừa đảo quà tặng','Sự kiện thưởng giả nhằm khiến bạn kết nối ví hoặc gửi tiền trước.'],
      ['Cụm từ khôi phục','Cụm từ khôi phục ví. Đừng bao giờ nhập hoặc chia sẻ ở trang ngẫu nhiên.'],
      ['Rút thanh khoản rồi bỏ chạy','Tình huống đội ngũ hoặc bên kiểm soát rút tiền rồi bỏ dự án đột ngột.']
    ],
    ha:[
      ['Rabon token','Hanyar da aiki ke raba token ga masu amfani.'],
      ['Damfarar kyauta','Shirin lada na bogi da ke kokarin sa ka hada walat ko aika kudi da farko.'],
      ['Kalmomin dawo da walat','Kalmomin dawo da walat. Kada ka taba rubutawa ko rabawa a shafukan banza.'],
      ['Kwacen jari da guduwa','Yanayin da tawaga ko mai iko ya kwashe kudi ko ya bar aikin kwatsam.']
    ]
  };
  lessonSevenDefsPack.br = clone(lessonSevenDefsPack.pt);

  var lessonSevenUnderstandingTitlePack = {
    en:'Test Your Understanding',
    ko:'이해도 확인',
    th:'ทดสอบความเข้าใจ',
    id:'Uji Pemahaman',
    pt:'Teste seu Entendimento',
    br:'Teste seu Entendimento',
    tr:'Anlayışını Test Et',
    es:'Pon a prueba tu comprensión',
    ar:'اختبر فهمك',
    vi:'Kiểm tra hiểu biết',
    ha:'Gwada Fahimtarka'
  };

  var lessonSevenUnderstandingPack = {
    en:{q:'If someone asks for urgent crypto payment, how should you read that signal?',opts:['A good opportunity','A scam signal','A normal transaction','A governance vote'],correct:1,fb:'Correct. Urgent payment pressure is one of the most common scam signals.'},
    ko:{q:'누군가 긴급한 크립토 결제를 요구하면 어떻게 판단해야 하나요?',opts:['좋은 기회','사기 신호','일반 거래','거버넌스 투표'],correct:1,fb:'정답입니다. 긴급한 결제 압박은 매우 흔한 사기 신호입니다.'},
    th:{q:'ถ้ามีคนเร่งให้จ่ายคริปโตทันที ควรมองว่าอย่างไร?',opts:['เป็นโอกาสดี','เป็นสัญญาณสแกม','เป็นธุรกรรมปกติ','เป็นการโหวตของโครงการ'],correct:1,fb:'ถูกต้อง! การเร่งให้จ่ายทันทีเป็นสัญญาณสแกมที่พบบ่อยมาก'},
    id:{q:'Jika seseorang meminta pembayaran crypto secara mendesak, itu sebaiknya dibaca sebagai apa?',opts:['Peluang bagus','Sinyal penipuan','Transaksi normal','Voting governance'],correct:1,fb:'Benar. Tekanan untuk membayar segera adalah salah satu sinyal penipuan paling umum.'},
    pt:{q:'Se alguém exigir um pagamento cripto urgente, como você deve interpretar isso?',opts:['Uma boa oportunidade','Um sinal de golpe','Uma transação normal','Um voto de governança'],correct:1,fb:'Correto. Pressão para pagar com urgência é um dos sinais de golpe mais comuns.'},
    tr:{q:'Birisi acil kripto ödemesi isterse bunu nasıl değerlendirmelisiniz?',opts:['İyi bir fırsat','Dolandırıcılık sinyali','Normal işlem','Yönetişim oylaması'],correct:1,fb:'Doğru. Acil ödeme baskısı en yaygın dolandırıcılık sinyallerinden biridir.'},
    es:{q:'Si alguien exige un pago cripto urgente, ¿cómo deberías interpretarlo?',opts:['Una buena oportunidad','Una señal de estafa','Una transacción normal','Una votación de gobernanza'],correct:1,fb:'Correcto. La presión por pagar con urgencia es una de las señales de estafa más comunes.'},
    ar:{q:'إذا طلب شخص دفعا رقميا عاجلا، فكيف يجب أن تفهم ذلك؟',opts:['فرصة جيدة','إشارة احتيال','معاملة عادية','تصويت حوكمة'],correct:1,fb:'صحيح. الضغط من أجل الدفع العاجل من أكثر إشارات الاحتيال شيوعا.'},
    vi:{q:'Nếu ai đó yêu cầu thanh toán crypto thật gấp, bạn nên hiểu đó là gì?',opts:['Một cơ hội tốt','Tín hiệu lừa đảo','Giao dịch bình thường','Bỏ phiếu quản trị'],correct:1,fb:'Đúng. Áp lực thanh toán khẩn cấp là một trong những tín hiệu lừa đảo phổ biến nhất.'},
    ha:{q:'Idan wani ya bukaci biyan crypto cikin gaggawa, yaya ya kamata ka dauke shi?',opts:['Dama mai kyau','Alamar damfara','Muamala ta yau da kullum','Kuri\'ar gudanarwa'],correct:1,fb:'Daidai. Matsin lambar biyan gaggawa yana daga cikin manyan alamun damfara da aka fi gani.'}
  };
  lessonSevenUnderstandingPack.br = clone(lessonSevenUnderstandingPack.pt);

  function getLessonSevenDefs(lang){
    var key = lang7(lang);
    return clone(lessonSevenDefsPack[key] || lessonSevenDefsPack.en);
  }

  function getLessonSevenUnderstanding(lang){
    return clone(lessonSevenUnderstandingPack[lang7()] || lessonSevenUnderstandingPack.en);
  }

  function buildLessonSevenDefsMarkup(defs){
    return '<div class="def-grid">' + defs.map(function(row){
      return '<div class="def-block"><div class="def-term">' + row[0] + '</div><div class="def-body">' + row[1] + '</div></div>';
    }).join('') + '</div>';
  }

  function buildLessonSevenUnderstandingMarkup(lang){
    var key = lang7(lang);
    var item = getLessonSevenUnderstanding(key);
    var title = lessonSevenUnderstandingTitlePack[key] || lessonSevenUnderstandingTitlePack.en;
    var uid = 'lesson7_eq_' + key + '_' + Math.random().toString(36).slice(2,7);
    var optionsHtml = (item.opts || []).map(function(opt, idx){
      return '<div class="quiz-e-opt" data-correct="' + (idx === item.correct ? '1' : '0') + '" onclick="handleQuizClick(this,\'' + uid + '\',' + item.correct + ',\'' + uid + '_fb\')"><div class="quiz-e-dot"></div><span>' + opt + '</span></div>';
    }).join('');
    return '<div class="quiz-enhanced lesson7-understanding-final"><div class="quiz-e-title">' + title + '</div><div class="quiz-e-question">' + item.q + '</div><div class="quiz-e-options" id="' + uid + '">' + optionsHtml + '</div><div class="quiz-e-feedback" id="' + uid + '_fb">' + item.fb + '</div></div>';
  }

  function ensureLessonSevenFinalData(){
    Object.keys(lessonSevenDefsPack).forEach(function(lang){
      if(typeof lessons !== 'undefined' && lessons && lessons[lang] && lessons[lang][6]){
        lessons[lang][6].defs = getLessonSevenDefs(lang);
      }
      if(typeof lessonOverrides !== 'undefined' && lessonOverrides && lessonOverrides[lang] && lessonOverrides[lang][6]){
        lessonOverrides[lang][6].defs = getLessonSevenDefs(lang);
      }
      if(typeof quizData !== 'undefined'){
        if(!quizData[lang]) quizData[lang] = clone((lang === 'br' && quizData.pt) ? quizData.pt : (quizData.en || []));
        quizData[lang][6] = [getLessonSevenUnderstanding(lang)];
      }
      if(typeof quizTitles !== 'undefined'){
        quizTitles[lang] = lessonSevenUnderstandingTitlePack[lang] || lessonSevenUnderstandingTitlePack.en;
      }
    });
    if(typeof quizData !== 'undefined' && quizData.pt) quizData.br = quizData.pt;
  }

  var previousRenderLessonSevenFinal = window.renderLesson;
  if(typeof previousRenderLessonSevenFinal === 'function' && !previousRenderLessonSevenFinal.__lessonSevenDefsUnderstandingWrapped){
    var wrappedRenderLessonSevenFinal = function(i){
      var html = previousRenderLessonSevenFinal.apply(this, arguments);
      if(i !== 6 || typeof html !== 'string') return html || '';
      var lang = lang7();
      var temp = document.createElement('div');
      temp.innerHTML = html;

      var defsMount = temp.querySelector('.def-grid');
      if(defsMount){
        var defsHost = document.createElement('div');
        defsHost.innerHTML = buildLessonSevenDefsMarkup(getLessonSevenDefs(lang));
        if(defsHost.firstElementChild) defsMount.replaceWith(defsHost.firstElementChild);
      }

      temp.querySelectorAll('.quiz-enhanced').forEach(function(node){ node.remove(); });
      var completeRow = temp.querySelector('.complete-row');
      if(completeRow){
        var understandingHost = document.createElement('div');
        understandingHost.innerHTML = buildLessonSevenUnderstandingMarkup(lang);
        if(understandingHost.firstElementChild){
          completeRow.parentNode.insertBefore(understandingHost.firstElementChild, completeRow);
        }
      }
      return temp.innerHTML;
    };
    wrappedRenderLessonSevenFinal.__lessonSevenDefsUnderstandingWrapped = true;
    window.renderLesson = wrappedRenderLessonSevenFinal;
  }

  ensureLessonSevenFinalData();
  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof applyUI === 'function') applyUI();
  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
    showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
  }
})();