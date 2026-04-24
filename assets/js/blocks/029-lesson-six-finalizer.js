(function(){
  if(window.__lessonSixFinalizer) return;
  window.__lessonSixFinalizer = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  var lessonSixUiPack = {
    en:{'nav.l6':'Buying Your First Crypto','nav.l6sub':'A safe first purchase flow','topic.buy':'How do I buy my first crypto safely?'},
    ko:{'nav.l6':'첫 암호화폐 구매하기','nav.l6sub':'안전한 첫 구매 흐름','topic.buy':'첫 암호화폐는 어떻게 안전하게 살까?'},
    th:{'nav.l6':'ซื้อคริปโตครั้งแรก','nav.l6sub':'ขั้นตอนซื้อครั้งแรกแบบปลอดภัย','topic.buy':'ซื้อคริปโตครั้งแรกอย่างปลอดภัยได้อย่างไร?'},
    id:{'nav.l6':'Membeli Crypto Pertama','nav.l6sub':'Alur pembelian pertama yang aman','topic.buy':'Bagaimana membeli crypto pertama dengan aman?'},
    pt:{'nav.l6':'Comprar sua primeira cripto','nav.l6sub':'Um primeiro fluxo de compra seguro','topic.buy':'Como comprar sua primeira cripto com segurança?'},
    br:{'nav.l6':'Comprar sua primeira cripto','nav.l6sub':'Um primeiro fluxo de compra seguro','topic.buy':'Como comprar sua primeira cripto com segurança?'},
    tr:{'nav.l6':'İlk Kriptonu Satın Almak','nav.l6sub':'Güvenli ilk alım akışı','topic.buy':'İlk kriptonu güvenli şekilde nasıl alırsın?'},
    es:{'nav.l6':'Comprar tu primera cripto','nav.l6sub':'Un flujo seguro de primera compra','topic.buy':'¿Cómo comprar tu primera cripto de forma segura?'},
    ar:{'nav.l6':'شراء أول عملة رقمية','nav.l6sub':'خطوات أول شراء بشكل آمن','topic.buy':'كيف تشتري أول عملة رقمية بشكل آمن؟'},
    vi:{'nav.l6':'Mua crypto đầu tiên','nav.l6sub':'Quy trình mua đầu tiên an toàn','topic.buy':'Làm sao mua crypto đầu tiên một cách an toàn?'},
    ha:{'nav.l6':'Siyan kudin dijital na farko','nav.l6sub':'Hanyar saye ta farko cikin aminci','topic.buy':'Ta yaya zan sayi kudin dijital na farko cikin aminci?'}
  };

  Object.keys(lessonSixUiPack).forEach(function(lang){
    if(typeof ui !== 'undefined'){
      if(!ui[lang]) ui[lang] = {};
      Object.assign(ui[lang], lessonSixUiPack[lang]);
    }
  });

  var lessonSixEn = {
    cat:'Buying',
    title:'How to actually buy your first crypto (safely)',
    intro:'Your first crypto purchase does not need to be complicated. The safest beginner flow is simple: choose a platform carefully, complete the basic identity check, buy a small amount, and learn why moving to your own wallet matters.',
    sections:[
      {h:'Step 1: Choose a platform with beginner basics in mind', ps:['Do not start with hype or a celebrity recommendation. Start with the boring basics: clear fees, support for your local currency, a clean security record, and an interface that helps you confirm what you are buying.','A beginner-friendly exchange should make deposits, withdrawals, and network information easy to read. If the app hides important details or feels confusing, that alone is a reason to slow down.']},
      {h:'Step 2: KYC is just an identity check', ps:['KYC stands for Know Your Customer. In simple terms, it means the platform asks who you are before it lets you fully use buying and withdrawal features.','For beginners, the important point is not the acronym. The point is that many regulated platforms require this check before you can move money in and out.']},
      {h:'Step 3: Deposit fiat, then make a small first buy', ps:['Fiat means normal government money such as KRW, USD, or EUR. The basic flow is usually: add your payment method, deposit fiat, choose the asset, review the price and fees, then buy a small amount first.','There is no beginner prize for buying a large amount immediately. A small first buy gives you room to learn how the platform works before you move more money.']},
      {h:'Step 4: Learn why self-custody matters after the purchase', ps:['If you leave everything on an exchange, the platform is still holding the keys for you. That can feel convenient, but it also means you depend on that company to protect and release your assets.','A self-custody wallet gives you direct control of the keys. Beginners do not need to rush, but they should understand the reason people move assets out later: more direct ownership, fewer platform dependencies, and clearer responsibility.']},
      {h:'Step 5: Keep the first move simple and careful', ps:['After buying, do not try five different networks, tokens, and apps at once. Learn one basic path first: buy a small amount, check the withdrawal network, and if you move it, verify the destination wallet carefully.','Slow repetition builds confidence better than rushing into advanced features. A calm first purchase is more useful than an exciting but confusing one.']}
    ],
    defs:[['Exchange','A platform where you can buy, sell, or move digital assets.'],['KYC','A basic identity check used by many platforms before full deposits or withdrawals.'],['Fiat','Regular government money such as KRW, USD, or EUR.'],['Self-custody wallet','A wallet where you control the keys yourself.']],
    example:'A beginner deposits a small amount of fiat, buys a little BTC or ETH, checks the withdrawal network carefully, and only then decides whether to move part of it to a self-custody wallet.',
    mistakes:['Buying a large amount all at once before understanding the platform.','Skipping the network check because the coin name looks familiar.','Leaving assets on an exchange for a long time without understanding custody risk.'],
    faqs:[['Do I need to buy a large amount to start?','No. Many beginners learn more safely by starting with a small amount and understanding the flow first.'],['Should I move everything to a self-custody wallet immediately?','Not necessarily immediately. The important beginner lesson is understanding why self-custody exists and how to do it safely before moving larger amounts.'],['Why should I care about the network when buying or withdrawing?','Because the same asset can exist on multiple networks, and choosing the wrong one can create transfer problems later.']],
    checkpoints:['I know what basics to compare before choosing an exchange.','I can explain KYC in one short sentence.','I understand the first-buy flow: fiat deposit, small purchase, then careful custody decisions.'],
    quiz:[['What is the safest beginner way to make a first purchase?','Start with a small amount on a platform with clear fees, complete the identity check, and review the network before moving anything.'],['Why do some people move assets from an exchange to a self-custody wallet?','Because self-custody gives more direct control of the keys and reduces dependence on the exchange.']],
    sources:[['FTC crypto scam basics','Official consumer guidance that helps beginners slow down, check details, and avoid pressure-based scams around buying crypto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','A simple beginner-friendly explanation of why self-custody matters after buying on an exchange.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']]
  };

  var lessonSixKo = {
    cat:'구매',
    title:'첫 암호화폐, 안전하게 사는 방법',
    intro:'첫 암호화폐 구매는 복잡할 필요가 없습니다. 초보자에게 가장 안전한 흐름은 거래소를 차분히 고르고, 기본 신원 확인을 마친 뒤, 소액으로 시작하고, 왜 나중에 자기 지갑으로 옮기는지 이해하는 것입니다.',
    sections:[
      {h:'1단계: 거래소를 고를 때 먼저 보는 기준', ps:['광고나 분위기보다 먼저 봐야 할 것은 기본입니다. 수수료가 읽기 쉬운지, 원화나 달러 같은 법정화폐 입금이 편한지, 보안 관련 안내가 분명한지, 출금과 네트워크 정보가 잘 보이는지를 먼저 확인하세요.','초보자에게 좋은 거래소는 화려해 보이는 곳이 아니라, 중요한 정보를 숨기지 않고 천천히 확인할 수 있게 도와주는 곳입니다.']},
      {h:'2단계: KYC는 신원 확인이라고 생각하면 됩니다', ps:['KYC는 Know Your Customer의 줄임말입니다. 아주 쉽게 말하면, 거래소가 입금과 출금 기능을 제대로 열기 전에 당신이 누구인지 확인하는 절차입니다.','초보자는 약어를 외우는 것보다, 많은 플랫폼이 이 과정을 먼저 요구한다는 점만 이해해도 충분합니다.']},
      {h:'3단계: 법정화폐를 입금한 뒤, 첫 구매는 작게 시작하세요', ps:['fiat는 원화, 달러, 유로처럼 우리가 평소 쓰는 돈을 뜻합니다. 기본 흐름은 보통 결제 수단 연결, 법정화폐 입금, 코인 선택, 가격과 수수료 확인, 그리고 소액 첫 구매입니다.','처음부터 큰 금액을 한 번에 살 이유는 없습니다. 작은 금액으로 먼저 사보면 화면 흐름과 수수료 구조를 더 안전하게 익힐 수 있습니다.']},
      {h:'4단계: 왜 나중에 self-custody wallet로 옮기기도 하는가', ps:['거래소에 그대로 두면 편하지만, 실제 키는 계속 플랫폼이 관리합니다. 즉, 자산 접근 권한을 회사에 많이 의존하게 됩니다.','self-custody wallet은 사용자가 직접 키를 관리하는 지갑입니다. 초보자는 바로 옮길 필요는 없지만, 왜 많은 사람이 나중에 직접 보관을 선택하는지는 꼭 이해하는 편이 좋습니다.']},
      {h:'5단계: 첫 구매 뒤에는 더 단순하게 움직이세요', ps:['처음부터 여러 네트워크와 여러 앱을 한꺼번에 만지지 마세요. 소액 구매, 출금 네트워크 확인, 필요하면 작은 금액 이동처럼 한 번에 한 단계씩 익히는 편이 훨씬 안전합니다.','천천히 반복해서 익히는 흐름이 초보자에게 가장 좋은 학습 방법입니다. 급하게 많이 해보는 것보다, 한 번을 정확하게 해보는 쪽이 더 도움이 됩니다.']}
    ],
    defs:[['거래소','암호화폐를 사고팔거나 옮길 수 있게 해주는 플랫폼입니다.'],['KYC','입금과 출금을 위해 많은 플랫폼이 요구하는 기본 신원 확인 절차입니다.'],['법정화폐','원화, 달러, 유로처럼 국가가 사용하는 일반 화폐입니다.'],['셀프 커스터디 지갑','사용자가 직접 키를 관리하는 지갑입니다.']],
    example:'초보자는 먼저 소액의 법정화폐를 입금하고, BTC나 ETH를 조금만 구매한 뒤, 출금 네트워크를 확인하고, 필요할 때만 일부를 자기 지갑으로 옮기는 흐름을 연습하면 됩니다.',
    mistakes:['거래소 화면을 잘 이해하기도 전에 큰 금액을 한 번에 매수하는 것.','코인 이름만 보고 네트워크를 확인하지 않는 것.','거래소 보관과 자기 지갑 보관의 차이를 이해하지 못한 채 오래 두는 것.'],
    faqs:[['처음부터 큰 금액으로 시작해야 하나요?','아니요. 많은 초보자는 소액으로 흐름을 익히는 편이 더 안전하고 이해도도 높습니다.'],['처음 사자마자 전부 자기 지갑으로 옮겨야 하나요?','반드시 바로 그럴 필요는 없습니다. 다만 self-custody가 왜 중요한지, 어떻게 안전하게 옮기는지 이해하고 결정하는 것이 좋습니다.'],['구매할 때나 출금할 때 왜 네트워크를 봐야 하나요?','같은 코인 이름이라도 여러 네트워크에서 움직일 수 있기 때문에, 나중에 전송 문제를 막으려면 네트워크 확인이 중요합니다.']],
    checkpoints:['거래소를 비교할 때 무엇을 먼저 봐야 하는지 설명할 수 있습니다.','KYC를 한 문장으로 설명할 수 있습니다.','법정화폐 입금 -> 소액 첫 구매 -> 보관 방식 판단 흐름을 이해했습니다.'],
    quiz:[['초보자에게 가장 안전한 첫 구매 방식은 무엇인가요?','수수료와 출금 정보가 분명한 플랫폼에서 신원 확인을 마친 뒤, 소액으로 먼저 구매하고 네트워크를 확인하는 방식입니다.'],['왜 어떤 사람들은 거래소에서 자기 지갑으로 옮기나요?','직접 키를 관리하면 자산 통제권이 더 분명해지고 거래소 의존도를 줄일 수 있기 때문입니다.']],
    sources:[['FTC 암호화폐 사기 안내','구매 과정에서 서두르게 만드는 사기와 압박성 접근을 피하는 데 도움이 되는 공식 소비자 안내입니다.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','거래소 구매 후 왜 self-custody가 중요하게 이야기되는지 초보자도 이해하기 쉽게 설명한 자료입니다.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']]
  };

  var localizedLesson6Meta = {
    th:{cat:'การซื้อ', title:'วิธีซื้อคริปโตครั้งแรกอย่างปลอดภัย', intro:'บทเรียนนี้อธิบายขั้นตอนพื้นฐานของการซื้อคริปโตครั้งแรกอย่างง่ายและปลอดภัยสำหรับผู้เริ่มต้น'},
    id:{cat:'Pembelian', title:'Cara membeli crypto pertama dengan aman', intro:'Pelajaran ini menjelaskan alur dasar membeli crypto pertama dengan sederhana dan aman untuk pemula.'},
    pt:{cat:'Compra', title:'Como comprar sua primeira cripto com segurança', intro:'Esta lição explica de forma simples como um iniciante pode fazer a primeira compra de cripto com mais segurança.'},
    br:{cat:'Compra', title:'Como comprar sua primeira cripto com segurança', intro:'Esta lição explica de forma simples como um iniciante pode fazer a primeira compra de cripto com mais segurança.'},
    tr:{cat:'Satın Alma', title:'İlk kriptonu güvenli şekilde nasıl alırsın?', intro:'Bu ders, yeni başlayanların ilk kripto alımını daha güvenli ve sade bir akışla anlamasına yardımcı olur.'},
    es:{cat:'Compra', title:'Cómo comprar tu primera cripto de forma segura', intro:'Esta lección explica de forma simple cómo un principiante puede hacer su primera compra de cripto con más seguridad.'},
    ar:{cat:'الشراء', title:'كيف تشتري أول عملة رقمية بشكل آمن؟', intro:'يشرح هذا الدرس بطريقة بسيطة كيف يمكن للمبتدئ أن يشتري أول عملة رقمية بخطوات أكثر أمانًا.'},
    vi:{cat:'Mua', title:'Cách mua crypto đầu tiên an toàn', intro:'Bài học này giải thích ngắn gọn cách người mới có thể mua crypto lần đầu theo một quy trình an toàn hơn.'},
    ha:{cat:'Saye', title:'Yadda za ka sayi kudin dijital na farko cikin aminci', intro:'Wannan darasi yana bayyana cikin sauki yadda mai farawa zai iya sayan kudin dijital na farko cikin aminci.'}
  };

  if(typeof lessons !== 'undefined' && lessons){
    lessons.en[5] = lessonSixEn;
    lessons.ko[5] = lessonSixKo;

    Object.keys(localizedLesson6Meta).forEach(function(lang){
      var baseLesson = deepClone(lessonSixEn);
      baseLesson.cat = localizedLesson6Meta[lang].cat;
      baseLesson.title = localizedLesson6Meta[lang].title;
      baseLesson.intro = localizedLesson6Meta[lang].intro;
      if(!lessons[lang]) lessons[lang] = (lang === 'br' && lessons.pt) ? deepClone(lessons.pt) : deepClone(lessons.en);
      lessons[lang][5] = baseLesson;
    });
  }

  window.getLessonSearchKeywords = function(index){
    var keywordMap = [
      ['blockchain','ledger','distributed ledger','explorer','gas fee'],
      ['wallet','wallets','self custody','seed phrase','recovery phrase','backup phrase','private key'],
      ['safe transfer','transfer','transaction','wrong network','wrong chain','network mismatch','txid','send crypto','crypto transfer'],
      ['crypto roles','5 roles','token roles'],
      ['real-world','real world','case study'],
      ['buy crypto','first crypto','buy first crypto','exchange','kyc','fiat deposit','self custody','self-custody wallet','buy btc','buy eth','첫 구매','거래소','신원 확인','법정화폐','셀프 커스터디']
    ];
    return keywordMap[index] || [];
  };

  var lessonSixVisualPack = {
    en:{
      a:'Choose carefully',
      b:'Look for clear fees, local currency support, and readable withdrawal details.',
      c:'Complete KYC',
      d:'Many beginner-friendly platforms require a simple identity check first.',
      e:'Start small',
      f:'Deposit fiat, review the asset and fees, then make a small first buy.',
      g:'Learn self-custody',
      h:'Understand why many users later move assets into a wallet they control themselves.'
    },
    ko:{
      a:'기준 먼저 보기',
      b:'수수료, 법정화폐 지원, 출금 정보가 분명한지 먼저 확인하세요.',
      c:'KYC 완료하기',
      d:'많은 플랫폼은 먼저 간단한 신원 확인을 요구합니다.',
      e:'소액으로 시작하기',
      f:'법정화폐를 입금하고 가격과 수수료를 확인한 뒤 소액으로 첫 구매를 합니다.',
      g:'셀프 커스터디 이해하기',
      h:'왜 많은 사용자가 나중에 자기 지갑으로 옮기는지 이유를 먼저 이해하세요.'
    }
  };

  var previousRenderLessonFinal = window.renderLesson;
  if(typeof previousRenderLessonFinal === 'function' && !previousRenderLessonFinal.__lessonSixWrapped){
    var wrappedRenderLessonFinal = function(i){
      var html = previousRenderLessonFinal.apply(this, arguments);
      if(i !== 5 || typeof html !== 'string') return html || '';
      var visual = lessonSixVisualPack[currentLang] || lessonSixVisualPack.en;
      html = html.replace('Choose carefully', visual.a)
                 .replace('Look for clear fees, local currency support, and readable withdrawal details.', visual.b)
                 .replace('Complete KYC', visual.c)
                 .replace('Many beginner-friendly platforms require a simple identity check first.', visual.d)
                 .replace('Start small', visual.e)
                 .replace('Deposit fiat, review the asset and fees, then make a small first buy.', visual.f)
                 .replace('Learn self-custody', visual.g)
                 .replace('Understand why many users later move assets into a wallet they control themselves.', visual.h);
      return html;
    };
    wrappedRenderLessonFinal.__lessonSixWrapped = true;
    window.renderLesson = wrappedRenderLessonFinal;
  }

  var originalRenderHomeFinal = window.renderHome;
  if(typeof originalRenderHomeFinal === 'function' && !originalRenderHomeFinal.__lessonSixHomeWrapped){
    var wrappedRenderHomeFinal = function(){
      var html = originalRenderHomeFinal.apply(this, arguments);
      if(typeof html !== 'string') return html || '';
      if(html.indexOf('showLesson(5)') === -1){
        var iconHtml = '<span class="sec-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>';
        var lessonCard = '<div class="home-card" onclick="showLesson(5)"><div class="home-card-num">' + iconHtml + '</div><div class="home-card-title">' + t('nav.l6') + '</div><div class="home-card-desc">' + t('nav.l6sub') + '</div><div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">' + t('home.openLesson') + '</div></div>';
        var marker = '<div class="home-grid" style="margin-top:14px;">';
        var parts = html.split(marker);
        if(parts.length === 2){
          var firstGrid = parts[0];
          var lastClose = firstGrid.lastIndexOf('</div>');
          if(lastClose !== -1){
            firstGrid = firstGrid.slice(0, lastClose) + lessonCard + firstGrid.slice(lastClose);
            html = firstGrid + marker + parts[1];
          }
        }
      }

      var daySixPack = {ko:'6일차',th:'วันที่ 6',id:'Hari 6',pt:'Dia 6',br:'Dia 6',tr:'6. Gün',es:'Día 6',ar:'اليوم 6',vi:'Ngày 6',ha:'Rana ta 6'};
      var localDaySix = daySixPack[currentLang] || 'Day 6';
      html = html.replace(/>Day 6</g, '>' + localDaySix + '<');
      return html;
    };
    wrappedRenderHomeFinal.__lessonSixHomeWrapped = true;
    window.renderHome = wrappedRenderHomeFinal;
  }

  if(typeof renderAllLessons === 'function'){
    renderAllLessons();
  }
  if(typeof applyUI === 'function'){
    applyUI();
  }
  if(typeof currentPage !== 'undefined'){
    if(/^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
      showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
    }else if(typeof showPage === 'function'){
      showPage(currentPage || 'home');
    }
  }
})();