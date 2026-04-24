(function(){
  if(window.__lessonSixPolishFinal) return;
  window.__lessonSixPolishFinal = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function getLessonSixLang(){
    return currentLang === 'br' ? 'pt' : currentLang;
  }

  var lessonSixLocalePack = {
    en:{
      ui:{'nav.l6':'Buying Your First Crypto','nav.l6sub':'A safe first purchase flow','topic.buy':'How do I buy my first crypto safely?'},
      lesson:{
        cat:'Buying',
        title:'How to actually buy your first crypto (safely)',
        intro:'Your first crypto purchase does not need to feel overwhelming. A safe beginner flow is simple: choose a platform carefully, complete the basic identity check, buy a small amount, verify the network, and decide where you want to store it.',
        sections:[
          {h:'Step 1: Compare the basics before you choose', ps:['Look for clear fees, support for your local currency, a readable app layout, and simple withdrawal information. A calm, transparent platform is usually better for a beginner than a flashy one.']},
          {h:'Step 2: KYC is a basic identity check', ps:['KYC means the platform asks you to confirm who you are before full deposit or withdrawal access. It is not a trading trick. It is simply a standard identity step on many regulated platforms.']},
          {h:'Step 3: Make the first purchase small', ps:['Deposit fiat, choose one familiar asset, review the price and fees, and buy a small amount first. Starting small gives you room to learn the flow without putting too much money at risk.']},
          {h:'Step 4: Check the network before moving anything', ps:['Before a withdrawal, confirm the asset, the network, the wallet address, and any minimum or fee. The same coin name can exist on more than one network, so this step matters.']},
          {h:'Step 5: Decide where the crypto should stay', ps:['Leaving assets on an exchange is convenient, but the platform still controls the keys. After the first purchase, learn why some people later move part of their holdings to a self-custody wallet they control themselves.']}
        ],
        defs:[['Exchange','A platform where you can buy, sell, deposit, or withdraw digital assets.'],['KYC','A simple identity check used by many platforms before full access.'],['Fiat','Regular government money such as KRW, USD, or EUR.'],['Self-custody wallet','A wallet where you control the keys yourself.']],
        example:'A beginner deposits a small amount of fiat, buys a little BTC, checks the withdrawal network again, and only then decides whether to keep it on the platform or move part of it to a personal wallet.',
        mistakes:['Buying a large amount all at once before learning the platform.','Skipping the network check because the coin name looks familiar.','Leaving everything on an exchange for a long time without understanding custody risk.'],
        faqs:[['Do I need a specific exchange to start?','No. The key is to choose a platform with clear fees, simple security settings, and easy-to-read deposit and withdrawal information.'],['Why do beginners often start with a small amount?','Because a small first purchase lets you practice the full flow without learning under heavy pressure.'],['What should I check again after the first purchase?','Re-check the asset, fee, network, wallet address if you plan to move it, and where you want to store it.']],
        checkpoints:['I can name the main basics to compare before choosing a platform.','I can explain KYC in one short sentence.','I know why a small first purchase is safer for a beginner.','I know what to re-check after buying before I move anything.'],
        quiz:[['Why is a small first purchase helpful?','Because it lets you learn the process with less pressure and less risk.'],['What does KYC mean in simple words?','It is a basic identity check before full platform access.'],['What should you confirm before withdrawing to another wallet?','The asset, the network, the address, and the fee or minimum requirement.']],
        sources:[['FTC crypto scam basics','Official consumer guidance that helps beginners slow down, verify details, and avoid pressure-based scams when buying crypto.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['Not your keys, not your coins','A beginner-friendly explanation of why some users later move assets from an exchange to self-custody.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
        visual:[
          {title:'Choose an exchange', desc:'Compare fees, local currency support, and easy-to-read withdrawal details.'},
          {title:'Protect the account and finish KYC', desc:'Turn on security basics and complete the identity check before moving money.'},
          {title:'Make a small first buy', desc:'Deposit fiat, review the price and fees, and start with a small amount.'},
          {title:'Check the network again', desc:'Before sending anything out, confirm the asset, network, and destination.'},
          {title:'Store it safely', desc:'Decide whether to keep it on the platform for now or move part of it to your own wallet.'}
        ]
      }
    },
    ko:{
      ui:{'nav.l6':'첫 암호화폐 구매','nav.l6sub':'안전한 첫 구매 흐름','topic.buy':'첫 암호화폐는 어떻게 안전하게 사나요?'},
      lesson:{
        cat:'구매',
        title:'첫 암호화폐, 안전하게 사는 방법',
        intro:'첫 암호화폐 구매는 어렵게 느껴질 필요가 없습니다. 초보자에게 더 안전한 흐름은 간단합니다. 거래소를 차분히 고르고, 본인 확인을 마친 뒤, 소액으로 시작하고, 네트워크를 다시 확인하고, 어디에 보관할지 결정하면 됩니다.',
        sections:[
          {h:'1단계: 거래소를 고르기 전에 기본부터 비교하기', ps:['수수료가 분명한지, 원화 같은 법정화폐를 지원하는지, 화면이 읽기 쉬운지, 출금 정보가 잘 보이는지부터 확인하세요. 초보자에게는 화려한 앱보다 차분하고 투명한 앱이 더 안전합니다.']},
          {h:'2단계: KYC는 기본적인 본인 확인입니다', ps:['KYC는 거래 전략이 아니라 본인 확인 절차입니다. 많은 규제 거래소는 입금과 출금을 충분히 사용하기 전에 사용자가 누구인지 확인합니다.']},
          {h:'3단계: 첫 구매는 꼭 소액으로 시작하기', ps:['법정화폐를 입금하고, 익숙한 자산 하나를 고른 뒤, 가격과 수수료를 확인하고, 소액으로 먼저 구매하세요. 작은 금액으로 시작하면 실제 흐름을 부담 없이 익힐 수 있습니다.']},
          {h:'4단계: 옮기기 전에는 네트워크를 다시 확인하기', ps:['출금 전에는 자산 이름, 네트워크, 지갑 주소, 최소 출금 수량과 수수료를 다시 보세요. 같은 코인이라도 여러 네트워크에 있을 수 있기 때문에 이 단계가 중요합니다.']},
          {h:'5단계: 어디에 보관할지 결정하기', ps:['거래소에 두면 편하지만 키는 여전히 플랫폼이 관리합니다. 첫 구매 뒤에는 왜 어떤 사용자가 일부 자산을 자기 보관 지갑으로 옮기는지 차근차근 이해하는 것이 좋습니다.']}
        ],
        defs:[['거래소','디지털 자산을 사고팔고 입금하거나 출금할 수 있는 플랫폼입니다.'],['KYC','플랫폼 전체 기능을 쓰기 전에 진행하는 기본 본인 확인입니다.'],['법정화폐','원화, 달러, 유로처럼 정부가 발행한 일반 화폐입니다.'],['자기 보관 지갑','사용자가 키를 직접 관리하는 지갑입니다.']],
        example:'초보자는 소액의 법정화폐를 입금하고, BTC를 조금 산 뒤, 출금 네트워크를 다시 확인하고, 그대로 둘지 일부를 개인 지갑으로 옮길지 결정할 수 있습니다.',
        mistakes:['플랫폼을 이해하기 전에 큰 금액을 한 번에 매수하는 것.','코인 이름만 보고 네트워크 확인을 건너뛰는 것.','커스터디 위험을 이해하지 못한 채 오래 거래소에만 두는 것.'],
        faqs:[['처음 시작할 때 특정 거래소를 꼭 써야 하나요?','아닙니다. 중요한 것은 수수료가 명확하고, 보안 설정이 쉬우며, 입출금 정보가 읽기 쉬운 플랫폼을 고르는 것입니다.'],['왜 초보자는 소액으로 시작하라고 하나요?','작은 금액으로 시작하면 큰 압박 없이 전체 흐름을 연습할 수 있기 때문입니다.'],['첫 구매 후에는 무엇을 다시 확인해야 하나요?','자산 종류, 수수료, 네트워크, 옮길 계획이 있다면 지갑 주소, 그리고 어디에 보관할지를 다시 확인하세요.']],
        checkpoints:['거래소를 고를 때 비교할 기본 요소를 말할 수 있습니다.','KYC를 한 문장으로 설명할 수 있습니다.','왜 초보자에게 소액 첫 구매가 더 안전한지 이해합니다.','구매 후 옮기기 전에 무엇을 다시 확인해야 하는지 압니다.'],
        quiz:[['왜 첫 구매를 소액으로 하는 것이 좋나요?','적은 압박과 적은 위험으로 전체 과정을 익힐 수 있기 때문입니다.'],['KYC를 아주 쉽게 말하면 무엇인가요?','플랫폼을 본격적으로 쓰기 전에 하는 기본 본인 확인입니다.'],['다른 지갑으로 옮기기 전 무엇을 확인해야 하나요?','자산, 네트워크, 주소, 수수료와 최소 수량을 확인해야 합니다.']],
        sources:[['FTC 암호화폐 사기 기본 안내','암호화폐를 살 때 서두르지 않고 정보를 확인하도록 돕는 공식 소비자 안내입니다.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],['내 키가 아니면 내 코인이 아니다','거래소에서 산 자산을 왜 일부 사용자가 자기 보관 지갑으로 옮기는지 쉽게 설명한 자료입니다.','https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/']],
        visual:[
          {title:'거래소 고르기', desc:'수수료, 법정화폐 지원, 출금 정보가 분명한지 먼저 봅니다.'},
          {title:'계정 보호와 KYC', desc:'보안 설정을 켜고 본인 확인을 마친 뒤 돈을 넣습니다.'},
          {title:'소액으로 첫 구매', desc:'법정화폐를 입금하고 가격과 수수료를 본 뒤 소액으로 시작합니다.'},
          {title:'네트워크 다시 확인', desc:'옮기기 전 자산, 네트워크, 목적지 주소를 다시 봅니다.'},
          {title:'안전하게 보관', desc:'당장은 거래소에 둘지, 일부를 개인 지갑으로 옮길지 정합니다.'}
        ]
      }
    }
  };

  lessonSixLocalePack.br = deepClone(lessonSixLocalePack.pt);

  if(typeof ui !== 'undefined'){
    Object.keys(lessonSixLocalePack).forEach(function(lang){
      var localeEntry = lessonSixLocalePack[lang];
      if(!localeEntry || !localeEntry.ui) return;
      if(!ui[lang]) ui[lang] = {};
      Object.assign(ui[lang], localeEntry.ui);
    });
  }

  if(typeof lessons !== 'undefined' && lessons){
    Object.keys(lessonSixLocalePack).forEach(function(lang){
      var localeEntry = lessonSixLocalePack[lang];
      if(!localeEntry || !localeEntry.lesson) return;
      if(!lessons[lang]) lessons[lang] = (lang === 'br' && lessons.pt) ? deepClone(lessons.pt) : deepClone(lessons.en);
      lessons[lang][5] = deepClone(localeEntry.lesson);
    });
  }

  window.getLessonSearchKeywords = function(index){
    var keywordMap = [
      ['blockchain','ledger','distributed ledger','explorer','gas fee'],
      ['wallet','wallets','self custody','seed phrase','recovery phrase','backup phrase','private key'],
      ['safe transfer','transfer','transaction','wrong network','wrong chain','network mismatch','txid','send crypto','crypto transfer'],
      ['crypto roles','5 roles','token roles'],
      ['real-world','real world','case study'],
      ['buy crypto','first crypto','buy first crypto','exchange','kyc','fiat deposit','self custody','self-custody wallet','buy btc','buy eth','첫 구매','거래소','본인 확인','법정화폐','자기 보관','siyan crypto','dandalin musaya','tantance kai']
    ];
    return keywordMap[index] || [];
  };

  function buildLessonSixVisualHtml(visual){
    return '<ul class="steps-list">' + visual.map(function(step, idx){
      return '<li class="step-item"><div class="step-n">' + (idx + 1) + '</div><div><div class="step-title">' + step.title + '</div><div class="step-desc">' + step.desc + '</div></div></li>';
    }).join('') + '</ul>';
  }

  var previousRenderLesson = window.renderLesson;
  if(typeof previousRenderLesson === 'function' && !previousRenderLesson.__lessonSixPolishWrapped){
    var wrappedRenderLesson = function(i){
      var html = previousRenderLesson.apply(this, arguments);
      if(i !== 5 || typeof html !== 'string') return html || '';
      var pack = lessonSixLocalePack[getLessonSixLang()] || lessonSixLocalePack.en;
      html = html.replace(/<ul class="steps-list">[\s\S]*?<\/ul>/, buildLessonSixVisualHtml(pack.lesson.visual));
      return html;
    };
    wrappedRenderLesson.__lessonSixPolishWrapped = true;
    window.renderLesson = wrappedRenderLesson;
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