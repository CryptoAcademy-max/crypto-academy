(function(){
   if (typeof langLabels === 'undefined' || typeof ui === 'undefined') return;
  function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }

  // 1. Language labels
  langLabels.ar = 'AR';
  langLabels.ha = 'HA';
  langLabels.vi = 'VI';

  // 2. Add menu items
  var langMenu = document.getElementById('langMenu');
  if (langMenu) {
    if (!langMenu.querySelector('[data-lang="ar"]')) {
      var arItem = document.createElement('div');
      arItem.className = 'lang-item';
      arItem.dataset.lang = 'ar';
      arItem.innerHTML = '<span>🇸🇦</span><span>العربية</span><span class="native">AR</span>';
      langMenu.appendChild(arItem);
    }
    if (!langMenu.querySelector('[data-lang="ha"]')) {
      var haItem = document.createElement('div');
      haItem.className = 'lang-item';
      haItem.dataset.lang = 'ha';
      haItem.innerHTML = '<span>🇳🇬</span><span>Hausa</span><span class="native">HA</span>';
      if (typeof currentLang !== 'undefined' && currentLang === 'ha') {
        haItem.classList.add('active');
      }
      langMenu.appendChild(haItem);
    }
    if (!langMenu.querySelector('[data-lang="vi"]')) {
      var viItem = document.createElement('div');
      viItem.className = 'lang-item';
      viItem.dataset.lang = 'vi';
      viItem.innerHTML = '<span>🇻🇳</span><span>Tiếng Việt</span><span class="native">VI</span>';
      langMenu.appendChild(viItem);
    }
    langMenu.querySelectorAll('.lang-item').forEach(function(item){
      if (!item.dataset.boundLang2) {
        item.addEventListener('click', function(e){
          e.stopPropagation();
          if (typeof setLang === 'function') setLang(item.dataset.lang);
          langMenu.classList.remove('open');
        });
        item.dataset.boundLang2 = '1';
      }
    });
  }

  // ===================== ARABIC (ar) =====================

  ui.ar = {
    "brand.name":"أكاديمية الكريبتو",
    "brand.sub":"دروس واضحة للمبتدئين",
    "sidebar.lessons":"الدروس",
    "sidebar.topics":"مواضيع سريعة",
    "nav.home":"الرئيسية",
    "nav.homesub":"ابدأ من هنا",
    "nav.l1":"البلوكشين",
    "nav.l1sub":"أساسيات السجل المشترك",
    "nav.l2":"المحافظ",
    "nav.l2sub":"المفاتيح والوصول",
    "nav.l3":"التحويلات الآمنة",
    "nav.l3sub":"الإرسال بأمان",
    "nav.l4":"أدوار الكريبتو الخمسة",
    "nav.l4sub":"فهم أدوار الرموز",
    "nav.l5":"دروس من الواقع",
    "nav.l5sub":"لماذا الهيكل مهم",
    "nav.glossary":"المصطلحات",
    "nav.glossarysub":"مصطلحات أساسية مبسطة",
    "nav.sources":"مكتبة المصادر",
    "nav.sourcesub":"مقالات ومراجع رسمية",
    "nav.start":"ابدأ من هنا",
    "nav.startsub":"مسار المبتدئين",
    "nav.faqPage":"الأسئلة الشائعة",
    "nav.faqsub":"أكثر الأسئلة شيوعاً",
    "nav.safety":"الأمان / منع الاحتيال",
    "nav.safetysub":"عادات حماية عملية",
    "topic.blockchain":"ما هو البلوكشين؟",
    "topic.wallet":"ما هي المحفظة؟",
    "topic.transfer":"كيف تعمل التحويلات الآمنة؟",
    "topic.roles":"كيف تختلف أدوار الرموز؟",
    "topic.real":"لماذا الحالات الحقيقية مهمة؟",
    "footer.byline":"مصدر تعليمي مجاني من Bee Network Korea",
    "overview.chip1":"موجّه للمبتدئين",
    "overview.chip2":"متعدد اللغات",
    "overview.chip3":"تعلّم بصري",
    "progress.done":"مكتمل",
    "btn.prev":"الدرس السابق",
    "btn.next":"الدرس التالي",
    "btn.mark":"وضع علامة مكتمل",
    "btn.completed":"مكتمل",
    "btn.restart":"ابدأ من جديد",
    "breadcrumb.prefix":"الدرس",
    "quiz.reveal":"عرض الإجابة",
    "source.title":"المصدر",
    "check.title":"نقاط فحص المبتدئين",
    "faq.title":"الأسئلة الشائعة",
    "mistakes.title":"الأخطاء الشائعة",
    "quiz.title":"اختبار قصير",
    "example.title":"مثال بسيط",
    "sources.title":"مصادر ذات صلة",
    "visual.title":"شرح بصري",
    "complete.note":"يتم حفظ تقدّمك في هذا المتصفح.",
    "callout.quick":"فكرة سريعة",
    "home.title":"تعلّم الكريبتو خطوة بخطوة",
    "home.desc":"ابدأ من الأساسيات ثم انتقل إلى المحافظ والتحويلات الآمنة وأدوار الرموز ودروس الواقع. يمكنك أيضاً فتح المصطلحات ومكتبة المصادر في أي وقت.",
    "home.start":"من أين تبدأ؟",
    "home.useMenu":"استخدم القائمة الجانبية كخريطة تعلّم",
    "home.lessonGuide":"إذا كنت مبتدئاً تماماً، اتبع الدروس بالترتيب. كل درس مكتوب بلغة بسيطة مع أمثلة وأخطاء شائعة ونقاط فحص.",
    "home.glossaryTitle":"المصطلحات",
    "home.glossaryDesc":"افتح المصطلحات لتتعرف على المفاهيم الأساسية مثل رسوم الغاز والمفتاح العام والمستكشف والعقد الذكي والحفظ والجسر بكلمات سهلة.",
    "home.sourceTitle":"مكتبة المصادر",
    "home.sourceDesc":"افتح مكتبة المصادر لقراءة مقالات حقيقية ومراجع رسمية مصنفة حسب الموضوع مثل الاحتيال والبورصات والعملات المستقرة وأمان المحفظة.",
    "home.openLesson":"فتح الدرس",
    "home.openGlossary":"فتح المصطلحات",
    "home.openSources":"فتح مكتبة المصادر",
    "home.startCardTitle":"ابدأ من هنا",
    "home.startCardDesc":"اعرف بالضبط من أين تبدأ إذا كانت هذه المرة الأولى.",
    "home.openStart":"فتح دليل البداية",
    "home.faqCardTitle":"الأسئلة الشائعة",
    "home.faqCardDesc":"اقرأ أكثر الأسئلة شيوعاً للمبتدئين في مكان واحد.",
    "home.openFaq":"فتح الأسئلة الشائعة",
    "home.safetyCardTitle":"الأمان / منع الاحتيال",
    "home.safetyCardDesc":"تعلّم عادات عملية لمنع الاحتيال وحماية المحفظة.",
    "home.openSafety":"فتح دليل الأمان",
    "home.arrowNote":"استخدم القائمة الجانبية كخريطة للتعلّم.",
    "glossary.title":"المصطلحات",
    "glossary.desc":"معاني بسيطة لأهم مصطلحات الكريبتو. اقرأها أولاً إذا كان الدرس غير مألوف.",
    "glossary.address.term":"العنوان",
    "glossary.address.body":"الموقع العام الذي يمكن استقبال الأصول عليه.",
    "glossary.private.term":"المفتاح الخاص",
    "glossary.private.body":"المفتاح السري الذي يمنح التحكم في المحفظة.",
    "glossary.seed.term":"عبارة الاسترداد",
    "glossary.seed.body":"نسخة احتياطية لاستعادة المحفظة. لا تشاركها أبداً.",
    "glossary.gas.term":"رسوم الغاز",
    "glossary.gas.body":"رسوم الشبكة المدفوعة لمعالجة المعاملة.",
    "glossary.public.term":"المفتاح العام",
    "glossary.public.body":"مفتاح تشفيري مرتبط بهوية محفظتك ويساعد في إنشاء العناوين.",
    "glossary.explorer.term":"المستكشف",
    "glossary.explorer.body":"موقع أو أداة تتيح لك عرض معاملات وعناوين البلوكشين.",
    "glossary.contract.term":"العقد الذكي",
    "glossary.contract.body":"كود على البلوكشين ينفذ قواعد مبرمجة تلقائياً.",
    "glossary.custody.term":"الحفظ",
    "glossary.custody.body":"من يتحكم في المفاتيح والوصول إلى الأصول.",
    "glossary.bridge.term":"الجسر",
    "glossary.bridge.body":"أداة لنقل الأصول أو الرسائل بين سلاسل بلوكشين مختلفة.",
    "sources.pageTitle":"مكتبة المصادر",
    "sources.pageDesc":"قائمة قراءة من مقالات حقيقية ومراجع رسمية. استخدمها لربط الدروس بحالات واقعية.",
    "sources.catScams":"الاحتيال",
    "sources.catExchanges":"البورصات",
    "sources.catStable":"العملات المستقرة",
    "sources.catWallet":"أمان المحفظة"
  };

  extraUi.ar = {
    "v.ledger":"السجل",
    "v.node":"العقدة",
    "v.wallet":"المحفظة",
    "v.interface":"واجهة",
    "v.address":"العنوان",
    "v.shareable":"قابل للمشاركة",
    "v.private":"المفتاح الخاص",
    "v.secret":"سري",
    "v.seed":"عبارة الاسترداد",
    "v.backup":"نسخة احتياطية",
    "v.network":"الشبكة",
    "v.test":"تحويل تجريبي",
    "v.txid":"معرّف المعاملة",
    "v.match":"يجب أن يتطابق",
    "v.check":"تحقق",
    "v.smallfirst":"مبلغ صغير أولاً",
    "v.verify":"تأكيد",
    "v.defi":"التمويل اللامركزي",
    "v.utility":"رمز المنفعة",
    "v.governance":"رمز الحوكمة",
    "v.nft":"NFT",
    "v.stablecoin":"العملة المستقرة",
    "v.bank":"كالبنك",
    "v.access":"وصول",
    "v.voting":"تصويت",
    "v.ownership":"ملكية",
    "v.cash":"نقد رقمي",
    "v.roleDesc1":"وظائف مالية تعمل بالكود.",
    "v.roleDesc2":"استخدام ومزايا ووظائف الخدمة.",
    "v.roleDesc3":"المشاركة في المقترحات والقرارات.",
    "v.roleDesc4":"إثبات ملكية مرتبط بعنصر رقمي محدد.",
    "v.roleDesc5":"مصمم ليبقى قريباً من قيمة مرجعية.",
    "v.phishing":"التصيد الاحتيالي",
    "v.custody":"الحفظ",
    "v.designrisk":"مخاطر التصميم",
    "v.riskDesc1":"الاستعجال ورسائل الدعم المزيفة قد تخدع المستخدمين للموافقة على أشياء خطيرة.",
    "v.riskDesc2":"إذا كانت منصة أخرى تحتفظ بالمفاتيح، فإن أمانك يعتمد على ضوابطها وسلوكها.",
    "v.riskDesc3":"كلمة 'مستقر' تصف هدفاً وليست وعداً بأن كل سيناريو آمن.",
    "v.networkDesc":"تأكد من الشبكة قبل الإرسال.",
    "v.addressDesc":"تحقق من أول وآخر أحرف العنوان قبل الإرسال.",
    "v.testDesc":"أرسل مبلغاً صغيراً أولاً كاختبار.",
    "v.txidDesc":"معرّف المعاملة للتحقق من التحويل.",
    "v.public":"المفتاح العام",
    "v.explorer":"مستكشف البلوكشين",
    "v.contract":"العقد الذكي",
    "v.bridge":"الجسر بين البلوكشينات",
    "glossary.title":"المصطلحات",
    "glossary.desc":"معاني بسيطة لأهم مصطلحات الكريبتو. اقرأها أولاً إذا كان الدرس غير مألوف.",
    "sources.pageTitle":"مكتبة المصادر",
    "sources.pageDesc":"قائمة قراءة من مقالات حقيقية ومراجع رسمية. استخدمها لربط الدروس بحالات واقعية."
  };

  homeContent.ar = {
    title:"تعلّم الكريبتو خطوة بخطوة — واعرف ماذا تقرأ بعد ذلك",
    desc:"ابدأ من الأساسيات ثم انتقل إلى المحافظ والتحويلات الآمنة وأدوار الرموز ودروس الواقع. يمكنك أيضاً استخدام المصطلحات ومكتبة المصادر في أي وقت.",
    start:"من أين يجب أن تبدأ؟",
    guide:"إذا كنت مبتدئاً تماماً، اتبع الدروس بالترتيب. كل صفحة مكتوبة بلغة بسيطة مع أمثلة وأخطاء شائعة ونقاط فحص ومصادر."
  };

  lessons.ar = deepClone(lessons.en);
  lessonOverrides.ar = [
    {
      cat:"الأساسيات",title:"البلوكشين بشرح مبسط",
      intro:"البلوكشين هو سجل مشترك. بدلاً من أن تحتفظ شركة واحدة بالسجل الوحيد، تحتفظ عدة حواسيب بالسجل نفسه وتتحقق منه معاً.",
      sections:[
        {h:"ابدأ بأبسط فكرة",ps:["تخيّل دفتراً يسجّل من أرسل قيمة لمن. في البنك، البنك يتحكم في الدفتر. في شبكة بلوكشين، عدة مشاركين يحافظون على صحة الدفتر معاً.","هذا لا يعني أن كل بلوكشين يعمل بنفس الطريقة. لكن الفكرة الأساسية هي التحقق المشترك. عندما يؤكد عدة مشاركين نفس السجل، يصبح تغيير التاريخ سراً أصعب بكثير."]},
        {h:"لماذا يجب أن يهتم المبتدئ",ps:["كثيرون يشترون الكريبتو دون فهم ما الذي يجعل البلوكشين مفيداً. يرون الأسعار والشعارات والتطبيقات أولاً. لكن إذا لم تفهم نظام السجلات الأساسي، يصعب تقييم المخاطر والأمان والملكية.","البلوكشين مهم لأنه الطبقة التي تُسجّل فيها المعاملات والأرصدة والملكية. إذا كان هذا الجزء واضحاً، ستصبح المحافظ والرموز أسهل للفهم."]},
        {h:"الكتل والسلاسل والعقد",ps:["تُجمع المعاملات في كتل. كل كتلة جديدة تشير إلى الكتلة التي قبلها. لهذا يُسمى سلسلة من الكتل.","العقدة هي ببساطة حاسوب يساعد في قراءة السجل أو تخزينه أو التحقق منه. لا تحتاج لحفظ التفاصيل التقنية أولاً. يكفي أن تفهم أن عدة عقد تساعد في حماية السجل."]},
        {h:"ما الذي يجعله قوياً",ps:["يمكن للبلوكشين تقليل الاعتماد على قاعدة بيانات مركزية واحدة. لهذا يستخدمه الناس للأصول الرقمية وسجلات الملكية.","لكن نفس الهيكل يعني أيضاً أن الأخطاء قد يصعب التراجع عنها. إذا أرسلت شيئاً إلى المكان الخطأ، قد لا يكون هناك دعم عملاء مركزي يمكنه دائماً التراجع عنه."]}
      ],
      defs:[["السجل","سجل للمعاملات أو الأرصدة."],["العقدة","حاسوب يساعد في حفظ أو التحقق من السجل."],["الكتلة","مجموعة معاملات تُضاف إلى السلسلة."],["السلسلة","الرابط المرتب بين كتلة وأخرى."]],
      example:"التحويل البنكي يعتمد على قاعدة بيانات البنك. تحويل البلوكشين يعتمد على السجل المشترك للشبكة.",
      mistakes:["الاعتقاد بأن البلوكشين يعني 'أماناً مضموناً' في كل حالة.","افتراض أن كل معاملة يمكن التراجع عنها مثل الدفع بالبطاقة.","التعامل مع البلوكشين ككلمة غامضة بدلاً من نظام سجلات."],
      faqs:[["هل يمكن لشركة واحدة تغيير البلوكشين وحدها؟","في البلوكشين العام، لا يستطيع طرف واحد عادةً تغيير السجل المشترك بالكامل وحده."],["لماذا يُقال أن البلوكشين شفاف؟","لأن سجلات المعاملات يمكن فحصها علناً من خلال مستكشف، حتى لو لم تُعرض الأسماء الحقيقية دائماً."],["هل أحتاج لفهم البرمجة أولاً؟","لا. يحتاج المبتدئ فقط للفكرة الكبرى أولاً: سجل مشترك، تحقق مشترك، وتاريخ يصعب تغييره."]],
      checkpoints:["أستطيع شرح البلوكشين كسجل مشترك.","أفهم لماذا التحقق المشترك مهم.","أعرف لماذا قد يصعب التراجع عن معاملة مؤكدة."],
      quiz:[["ما هو أبسط تعريف للبلوكشين للمبتدئين؟","سجل مشترك يتحقق منه عدة مشاركين معاً."],["لماذا يجب أن يهتم المبتدئون بهيكل البلوكشين؟","لأن الملكية والأرصدة والمعاملات تُسجّل هناك."]]
    },
    {
      cat:"الوصول",title:"المحافظ بشرح مبسط",
      intro:"المحفظة ليست صندوقاً يخزن العملات. المحفظة هي الأداة التي تدير المفاتيح التي تتيح لك الوصول إلى الأصول الرقمية المسجلة على البلوكشين والتحكم فيها.",
      sections:[
        {h:"أكبر سوء فهم للمبتدئين",ps:["كثيرون يتخيلون المحفظة وكأن العملات موجودة بداخلها. هذه الصورة مفهومة لكنها غير مكتملة.","أصولك مسجلة على البلوكشين. المحفظة تساعدك في إثبات تحكمك في تلك الأصول."]},
        {h:"العنوان والمفتاح الخاص وعبارة الاسترداد",ps:["عنوان المحفظة هو المكان الذي تستقبل فيه الأصول. يمكنك مشاركة عنوانك.","المفتاح الخاص هو ما يمنحك التحكم. يجب ألا يُشارك أبداً.","عبارة الاسترداد هي نسخة احتياطية يمكنها استعادة المحفظة. إذا حصل شخص على عبارة الاسترداد، فقد يتمكن من أخذ أصولك."]},
        {h:"الحفظ بواسطة طرف ثالث مقابل الحفظ الذاتي",ps:["إذا كانت البورصة تتحكم في المفاتيح نيابةً عنك، فهذا حفظ بواسطة طرف ثالث. قد يبدو مريحاً لكنك تعتمد على أمان تلك المنصة.","إذا كنت تتحكم في المفاتيح بنفسك، فهذا حفظ ذاتي. يمنحك تحكماً أكبر لكن أيضاً مسؤولية أكبر."]},
        {h:"لماذا المحافظ مهمة عملياً",ps:["معرفة المحافظ ليست نظرية فقط. إنها تؤثر على كيفية الاستقبال والإرسال والتخزين والنسخ الاحتياطي وحماية الأصول الرقمية.","كثير من خسائر المبتدئين تحدث لأن شخصاً شارك عبارة الاسترداد أو وثق برسالة دعم مزيفة."]}
      ],
      defs:[["عنوان المحفظة","العنوان العام للاستقبال الذي يمكنك مشاركته."],["المفتاح الخاص","المفتاح السري الذي يتحكم في الوصول."],["عبارة الاسترداد","عبارة احتياطية تُستخدم لاستعادة المحفظة."],["المحفظة الوصائية","محفظة تتحكم فيها خدمة ما بالمفاتيح نيابةً عنك."]],
      example:"فكّر في العنوان كعنوان صندوق البريد. وفكّر في المفتاح الخاص كالمفتاح السري لفتح الصندوق.",
      mistakes:["مشاركة عبارة الاسترداد مع 'الدعم الفني'.","حفظ عبارة الاسترداد في لقطة شاشة بدون خطة نسخ احتياطي.","افتراض أن حساب البورصة والمحفظة الذاتية يعملان بنفس الطريقة."],
      faqs:[["هل يمكنني مشاركة عنوان محفظتي؟","نعم. عنوان المحفظة مُعدّ لاستقبال الأموال."],["هل يمكنني مشاركة المفتاح الخاص أو عبارة الاسترداد؟","لا. أي شخص يملكها قد يتحكم في المحفظة."],["هل الحفظ الذاتي دائماً أفضل؟","يوفر تحكماً مباشراً أكبر، لكن أيضاً مسؤولية أكبر."]],
      checkpoints:["أعرف الفرق بين العنوان والمفتاح الخاص.","أعرف لماذا يجب أن تبقى عبارة الاسترداد سرية.","أفهم الفرق بين الحفظ الوصائي والحفظ الذاتي."],
      quiz:[["ما الذي يمكنك مشاركته بأمان؟","عنوان محفظتك."],["ما الذي لا يجب مشاركته أبداً؟","المفتاح الخاص أو عبارة الاسترداد."]]
    },
    {
      cat:"الأمان",title:"تحويلات الكريبتو الآمنة",
      intro:"تحويلات الكريبتو لا يجب أن تكون مخيفة، لكنها تتطلب عادة أمان قابلة للتكرار. أبسط قائمة فحص هي: الشبكة، العنوان، تحويل تجريبي، ثم التحقق بمعرّف المعاملة.",
      sections:[
        {h:"لماذا يرتكب الناس أخطاء في التحويل",ps:["المبتدئون غالباً يستعجلون. يفترضون أن العنوان المنسوخ صحيح، يتجاهلون الشبكة، أو يرسلون المبلغ الكامل قبل الاختبار.","المشكلة أن تحويلات البلوكشين قد يصعب التراجع عنها. لهذا العادة الآمنة أهم من الثقة."]},
        {h:"عادة الأربع خطوات",ps:["أولاً، تأكد من الشبكة. بعض الأصول تتحرك على عدة شبكات، والوجهة الصحيحة مهمة.","ثانياً، تحقق من العنوان بعناية. لا تثق به بشكل أعمى لمجرد أنه منسوخ.","ثالثاً، أرسل مبلغاً تجريبياً صغيراً عندما يكون ذلك ممكناً.","رابعاً، تحقق من التحويل باستخدام معرّف المعاملة."]},
        {h:"ما هو معرّف المعاملة؟",ps:["معرّف المعاملة يشبه رقم الإيصال للتحويل. يساعدك في التأكد مما إذا كانت الشبكة سجلت المعاملة، وما إذا كانت لا تزال معلقة أم مؤكدة.","المبتدئون لا يحتاجون لتعلم كل مستكشف. يكفي أن تفهم أن معرّف المعاملة يمنحك طريقة للتحقق مما حدث."]},
        {h:"البطء أكثر أماناً",ps:["في الكريبتو، السرعة غالباً تبدو مثيرة. لكن للتحويلات، البطء عادةً أكثر أماناً من السرعة.","قراءة اسم الشبكة مرة أخرى واختبار مبلغ صغير يمكن أن يمنع خطأً أكبر بكثير لاحقاً."]}
      ],
      defs:[["الشبكة","نظام البلوكشين الذي يتحرك عليه الأصل."],["التحويل التجريبي","مبلغ صغير يُرسل أولاً للتحقق من أن كل شيء يعمل."],["معرّف المعاملة","معرّف المعاملة المستخدم للتحقق من التحويل."],["المستكشف","موقع أو أداة تُستخدم للتحقق من سجلات معاملات البلوكشين."]],
      example:"تريد أليس إرسال USDT. تتأكد أولاً من الشبكة، ثم تتحقق من عنوان بوب، ترسل اختباراً صغيراً، وتتحقق من معرّف المعاملة قبل إرسال المبلغ الكامل.",
      mistakes:["إرسال المبلغ الكامل أولاً.","تجاهل الشبكة لأن اسم الرمز يبدو مألوفاً.","افتراض أن العنوان المنسوخ صحيح تلقائياً."],
      faqs:[["لماذا الشبكة مهمة جداً؟","لأن نفس اسم الأصل قد يوجد على شبكات مختلفة، ويجب أن تتطابق الوجهة."],["لماذا أرسل اختباراً صغيراً أولاً؟","لأنه يقلل تكلفة الخطأ."],["ماذا أفعل بعد الإرسال؟","تحقق من معرّف المعاملة لتتأكد من حالة المعاملة."]],
      checkpoints:["أستطيع تسمية خطوات التحويل الآمن الأربع.","أعرف لماذا التحويل التجريبي مهم.","أعرف فيم يُستخدم معرّف المعاملة."],
      quiz:[["ما الذي يأتي قبل التحويل الكامل؟","فحص الشبكة، فحص العنوان، ومن الأفضل تحويل تجريبي صغير."],["ما الذي يساعدك معرّف المعاملة في فعله؟","التحقق من المعاملة على سجل البلوكشين."]]
    },
    {
      cat:"الأدوار",title:"الأدوار الخمسة للكريبتو",
      intro:"يصبح الكريبتو أسهل بكثير عندما تتوقف عن السؤال فقط 'ما اسمه؟' وتبدأ بالسؤال 'ما دوره؟' رمز واحد قد يعمل كنقد رقمي، وآخر كوصول، وآخر كقوة تصويت.",
      sections:[
        {h:"الدور يتفوق على الاسم",ps:["المبتدئون غالباً يشعرون بالضياع لأن كل مشروع له اسم وشعار وشعار جديد. الاسم يتغير لكن الدور الأساسي أسهل في التصنيف.","لهذا التعلم القائم على الأدوار يساعد. عندما تفهم الوظيفة التي يحاول الرمز القيام بها، يصبح المجال أكثر قابلية للقراءة."]},
        {h:"خمس فئات مفيدة للمبتدئين",ps:["التمويل اللامركزي يمكن فهمه كوظائف مصرفية تتم بالكود والمحافظ بدلاً من شباك بنك تقليدي.","رموز المنفعة أسهل للفهم كنقاط أو وصول أو وظائف خدمة داخل نظام بيئي.","رموز الحوكمة أقرب لحقوق التصويت في بروتوكول أو مجتمع.","الرموز غير القابلة للاستبدال أسهل للفهم كإثبات ملكية لعنصر رقمي محدد.","العملات المستقرة أقرب للنقد الرقمي المصمم ليبقى قريباً من قيمة مرجعية."]},
        {h:"لماذا هذا مهم",ps:["إذا خلطت بين عملة مستقرة ورمز حوكمة، أو بين NFT ورمز منفعة، فقد تسيء فهم حالة الاستخدام والمخاطر معاً.","التفكير القائم على الأدوار يساعدك أيضاً في مقارنة المشاريع بوضوح أكبر."]},
        {h:"سؤال أفضل للمبتدئ",ps:["بدلاً من السؤال فقط 'هل هذه العملة جيدة؟' اسأل: 'ما الغرض من هذا الرمز؟ من يستخدمه؟ لماذا يوجد؟ ما المخاطر المرتبطة بهذا الدور؟'","هذه الأسئلة لا تضمن قرارات مثالية، لكنها تخلق نقطة انطلاق أفضل بكثير من التخمين."]}
      ],
      example:"العملة المستقرة لا تحاول القيام بنفس وظيفة NFT. واحدة تهدف لنقل قيمة مستقر. والأخرى تمثل ملكية عنصر رقمي محدد.",
      mistakes:["الاعتقاد بأن كل الرموز متشابهة.","النظر إلى السعر أولاً والدور ثانياً.","تجاهل ما يُستخدم الرمز فعلاً من أجله."],
      faqs:[["هل التمويل اللامركزي نفس البنك؟","ليس بالضبط. قد يشبه الوظائف المصرفية لكن الهيكل والحماية قد تكون مختلفة جداً."],["هل الـ NFTs مجرد صور؟","الإجابة المبسطة هي لا. المفهوم الأهم هو إثبات الملكية."],["لماذا العملات المستقرة شائعة؟","لأن كثيراً من المستخدمين يريدون أصلاً رقمياً مصمماً للتحويلات والتسعير بتقلبات يومية أقل."]],
      checkpoints:["أستطيع شرح التمويل اللامركزي بكلمات بسيطة.","أستطيع وصف الفرق بين رمز المنفعة ورمز الحوكمة.","أعرف لماذا التفكير القائم على الأدوار يساعد المبتدئين."],
      quiz:[["ما أسهل طريقة لفهم العملة المستقرة للمبتدئ؟","كنقد رقمي مصمم ليبقى قريباً من قيمة مرجعية."],["ما السؤال الأكثر فائدة من السؤال فقط عن اسم الرمز؟","ما الدور الذي يلعبه؟"]]
    },
    {
      cat:"الواقع",title:"دروس من العالم الحقيقي",
      intro:"تعليم الكريبتو لا يجب أن يتوقف عند التعريفات. الحالات الحقيقية تُظهر أين يرتبك المبتدئون وما أنواع الأخطاء التي تتكرر ولماذا الهيكل أهم من الشعارات.",
      sections:[
        {h:"لماذا الأمثلة مهمة",ps:["الناس تتعلم أسرع عندما ترى أين تلتقي النظرية بالواقع. مفهوم مثل 'احتفظ بعبارة الاسترداد سرية' يصبح أكثر معنى عندما تفهم كيف تعمل عمليات الاحتيال فعلاً.","هذا القسم لا يهدف لخلق الخوف. بل لربط الدروس بالعواقب الحقيقية."]},
        {h:"ثلاثة أنماط متكررة",ps:["عمليات التصيد الاحتيالي غالباً تخدع المستخدمين لربط محفظة أو الكشف عن بيانات استرداد حساسة.","إخفاقات البورصات تُذكّر المستخدمين بأن الراحة ليست نفس الحفظ الذاتي.","ضغوط العملات المستقرة تُذكّر المستخدمين بأن 'مستقر' يصف هدف تصميم وليس ضماناً مثالياً في كل سيناريو."]},
        {h:"كيف تقرأ أخبار الكريبتو بشكل أفضل",ps:["عندما ترى عنواناً، اسأل: هل كانت هذه مشكلة محفظة أم مشكلة حفظ أم مشكلة احتيال أم مشكلة تصميم منتج؟","هذه العادة البسيطة تساعدك في التعلم من الأحداث بدلاً من الاستجابة للخوف أو الحماس فقط."]},
        {h:"اقتباس يستحق التذكر",ps:["قاعدة جيدة للمبتدئين تأتي من إرشادات المستهلك الرسمية: إذا طلب شخص الدفع بالكريبتو كضغط أو استعجال، فهذه علامة تحذير خطيرة.","التعليم الحقيقي يعني تعلم لغة المخاطر قبل أن تحتاجها في أزمة."]}
      ],
      example:"بدلاً من قراءة عنوان انهيار بورصة على أنه 'الكريبتو فشل'، اسأل ما الجزء الذي فشل: الحفظ، الحوكمة، ضوابط الاحتيال، أم إدارة المخاطر.",
      mistakes:["التعامل مع كل عنوان سلبي على أنه نفس نوع المشكلة.","تجاهل تحذيرات الاحتيال الرسمية لأن الرسالة تبدو عاجلة.","الاعتقاد بأن اسم المنتج وحده يثبت الأمان."],
      faqs:[["لماذا تُضمّن الأخبار والمصادر في منصة تعليمية؟","لأن الحالات الحقيقية تجعل المفاهيم المجردة أسهل في التذكر والتقييم."],["هل الحالات الحقيقية تعني دائماً أن الصناعة بأكملها معطلة؟","لا. غالباً تشير إلى نوع محدد من المخاطر يحتاج لفهم واضح."],["ما الذي يجب أن أبحث عنه أولاً في عنوان مخيف؟","ابحث عن هيكل المشكلة: احتيال، حفظ، رافعة مالية، أو ضعف في التصميم."]],
      checkpoints:["أستطيع تسمية ثلاثة أنماط مخاطر شائعة على الأقل.","أعرف أن 'مستقر' لا يعني خالٍ من المخاطر.","أفهم لماذا تحذيرات الاحتيال الرسمية مهمة."],
      quiz:[["ما السؤال المفيد الأول عند قراءة عنوان فشل كريبتو؟","ما الجزء من الهيكل الذي فشل؟"],["لماذا الاستعجال علامة تحذير في كثير من عمليات الاحتيال؟","لأن الضغط يُستخدم غالباً لمنع الناس من التحقق من التفاصيل بعناية."]],
      sources:[
        ["تحذير FTC للمستهلكين","اقتباس: 'فقط المحتالون يطلبون الدفع بالعملة المشفرة.'","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["Reuters عن FTX","تغطية Reuters تساعد المبتدئين في رؤية كيف يختلف فشل الحفظ والبورصة عن تحركات الأسعار البسيطة.","https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"]
      ]
    }
  ];

  glossaryOverrides.ar = [
    ["عنوان المحفظة","الموقع العام المستخدم لاستقبال الأصول الرقمية."],
    ["المفتاح الخاص","المفتاح السري المستخدم للتحكم في المحفظة."],
    ["عبارة الاسترداد","مجموعة كلمات احتياطية لاستعادة المحفظة. لا تشاركها أبداً."],
    ["رسوم الغاز","رسوم الشبكة المدفوعة لمعالجة المعاملة."],
    ["المفتاح العام","مفتاح تشفيري مرتبط بهوية المحفظة ويساعد في إنشاء العناوين."],
    ["مستكشف البلوكشين","موقع أو أداة لعرض المعاملات والعناوين على البلوكشين."],
    ["العقد الذكي","كود على البلوكشين ينفذ قواعد محددة مسبقاً تلقائياً."],
    ["الحفظ","من يتحكم في المفاتيح والوصول إلى الأصول."],
    ["الجسر","أداة لنقل الأصول أو الرسائل بين سلاسل بلوكشين مختلفة."]
  ];

  sourceOverrides.ar = [
    ["scams","FTC","تحذير FTC للمستهلكين","إرشادات FTC حول احتيال الكريبتو وسلامة المستهلك.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","الأمان","يساعد المبتدئين على التعرف على أنماط الاحتيال قبل خسارة المال."],
    ["exchanges","Reuters","Reuters عن انهيار FTX","حالة FTX تساعد في فهم مخاطر البورصات والحفظ.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","الدرس 5 — حالات حقيقية","يوضح مخاطر الحفظ من خلال حالة انهيار بورصة حقيقية."],
    ["stable","ECB","شرح البنك المركزي الأوروبي للعملات المستقرة","يشرح كيف ترى مؤسسة سياسية هيكل ومخاطر العملات المستقرة.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","الدرس 4 — أنواع التوكن","يساعد في شرح كيفية تقييم المنظمين لمخاطر العملات المستقرة."],
    ["wallet","FTC","تحذير FTC بشأن الدفع","يوضح لماذا طلب الدفع بالكريبتو غالباً ما يكون إشارة احتيال.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","الأمان","يوضح لماذا قد تكون طلبات الدفع بالكريبتو علامة على الاحتيال."]
  ];

  polishedSectionContent.ar = {
    startTitle:"ابدأ من هنا",
    startIntro:"هذه الصفحة تساعد الزائر الجديد على معرفة من أين يبدأ بالضبط. اتبع ترتيباً بسيطاً أولاً ثم توسع عندما تتضح الأساسيات.",
    startSteps:[
      ["الخطوة 1 — البلوكشين","ابدأ بالدرس 1 لفهم ما هو البلوكشين ولماذا السجلات المشتركة مهمة."],
      ["الخطوة 2 — المحافظ","انتقل إلى الدرس 2 لفهم المفاتيح والعناوين والوصول قبل نقل الأصول."],
      ["الخطوة 3 — المصطلحات","افتح المصطلحات بعد الدرسين 1 و2 إذا كانت بعض المصطلحات لا تزال محيرة."],
      ["الخطوة 4 — التحويلات الآمنة","ثم انتقل إلى الدرس 3 لتعلم الروتين العملي: الشبكة والعنوان والتحويل التجريبي ومعرّف المعاملة."],
      ["الخطوة 5 — الأدوار ودروس الواقع","بعد أن تتضح الأساسيات، تابع إلى أدوار الرموز وأنماط المخاطر والأمثلة الحقيقية."]
    ],
    startTip:"مسار جيد للمبتدئين هو: 1 → 2 → المصطلحات → 3 → 4 → الأمان → مكتبة المصادر.",
    faqTitle:"الأسئلة الشائعة",
    faqIntro:"هذه الأسئلة الأكثر شيوعاً بين المبتدئين. اقرأها بلغة بسيطة قبل القلق بشأن التفاصيل المتقدمة.",
    faqItems:[
      ["هل أحتاج فعلاً لمحفظة؟","إذا كنت تشتري وتبيع فقط داخل بورصة، فقد لا تستخدم محفظة ذاتية فوراً. لكن لفهم الملكية بشكل صحيح، يجب أن تتعلم ما هي المحفظة وكيف تعمل المفاتيح."],
      ["ما الفرق بين البورصة والمحفظة؟","البورصة خدمة للتداول وإدارة الحساب. المحفظة أداة تدير المفاتيح والوصول. مرتبطتان لكنهما ليستا نفس الشيء."],
      ["لماذا أدفع رسوم الغاز؟","رسوم الغاز هي رسوم الشبكة. تساعد في معالجة وتسجيل المعاملات على البلوكشين."],
      ["هل من الآمن مشاركة عنوان محفظتي؟","نعم، عنوان المحفظة مُعدّ لاستقبال الأصول. لكن المفاتيح الخاصة وعبارات الاسترداد لا يجب مشاركتها أبداً."],
      ["لماذا يجب أن أرسل اختباراً صغيراً أولاً؟","لأن اختباراً صغيراً واحداً يمكنه اكتشاف أخطاء العنوان أو الشبكة قبل أن يكون مبلغ أكبر في خطر."]
    ],
    safetyTitle:"الأمان / منع الاحتيال",
    safetyIntro:"هذا أحد أكثر الأقسام العملية في المنصة بأكملها. هذه العادات يمكنها منع أخطاء المبتدئين قبل أن تتحول إلى خسائر حقيقية.",
    safetyItems:[
      ["لا تشارك عبارة الاسترداد أبداً","عبارة الاسترداد هي مفتاح الاستعادة. أي شخص يحصل عليها قد يتحكم في المحفظة."],
      ["احذر من الإسقاطات المجانية المزيفة","المحتالون غالباً يستخدمون عروض الرموز المجانية لدفع المستخدمين نحو مواقع مزيفة أو موافقات خطيرة."],
      ["تحقق من الروابط قبل الاتصال","روابط التصيد غالباً تبدو صحيحة تقريباً. تمهّل وتحقق من النطاق بعناية."],
      ["أرسل مبلغاً تجريبياً صغيراً أولاً","خاصة على شبكة جديدة أو عنوان جديد، اختبار صغير يمكنه منع خطأ أكبر."],
      ["تعامل مع الاستعجال كإشارة تحذير","الضغط والعد التنازلي والتهديدات وطلبات الدفع القسرية هي أنماط احتيال شائعة."]
    ]
  };

  // ===================== VIETNAMESE (vi) =====================

  ui.vi = {
    "brand.name":"Coin ProofPath",
    "brand.sub":"Bài học dễ hiểu cho người mới",
    "sidebar.lessons":"Các bài học",
    "sidebar.topics":"Chủ đề nhanh",
    "nav.home":"Trang chủ",
    "nav.homesub":"Bắt đầu từ đây",
    "nav.l1":"Blockchain",
    "nav.l1sub":"Nền tảng sổ cái chia sẻ",
    "nav.l2":"Ví tiền",
    "nav.l2sub":"Khóa và quyền truy cập",
    "nav.l3":"Chuyển tiền an toàn",
    "nav.l3sub":"Gửi tiền an toàn",
    "nav.l4":"5 vai trò của Crypto",
    "nav.l4sub":"Hiểu vai trò của token",
    "nav.l5":"Bài học thực tế",
    "nav.l5sub":"Tại sao cấu trúc quan trọng",
    "nav.glossary":"Thuật ngữ",
    "nav.glossarysub":"Giải thích đơn giản các từ khóa",
    "nav.sources":"Thư viện nguồn",
    "nav.sourcesub":"Bài viết và tài liệu chính thức",
    "nav.start":"Bắt đầu từ đây",
    "nav.startsub":"Lộ trình cho người mới",
    "nav.faqPage":"Câu hỏi thường gặp",
    "nav.faqsub":"Những câu hỏi phổ biến nhất",
    "nav.safety":"An toàn / Phòng chống lừa đảo",
    "nav.safetysub":"Thói quen bảo vệ thực tế",
    "topic.blockchain":"Blockchain là gì?",
    "topic.wallet":"Ví tiền là gì?",
    "topic.transfer":"Chuyển tiền an toàn hoạt động thế nào?",
    "topic.roles":"Vai trò của token khác nhau thế nào?",
    "topic.real":"Tại sao các trường hợp thực tế quan trọng?",
    "footer.byline":"Tài liệu giáo dục miễn phí từ Bee Network Korea",
    "overview.chip1":"Dành cho người mới",
    "overview.chip2":"Đa ngôn ngữ",
    "overview.chip3":"Học qua hình ảnh",
    "progress.done":"hoàn thành",
    "btn.prev":"Bài trước",
    "btn.next":"Bài tiếp theo",
    "btn.mark":"Đánh dấu hoàn thành",
    "btn.completed":"Đã hoàn thành",
    "btn.restart":"Học lại từ đầu",
    "breadcrumb.prefix":"Bài",
    "quiz.reveal":"Xem đáp án",
    "source.title":"Nguồn",
    "check.title":"Điểm kiểm tra cho người mới",
    "faq.title":"Câu hỏi thường gặp",
    "mistakes.title":"Lỗi thường gặp",
    "quiz.title":"Trắc nghiệm nhanh",
    "example.title":"Ví dụ đơn giản",
    "sources.title":"Nguồn liên quan",
    "visual.title":"Giải thích trực quan",
    "complete.note":"Tiến trình của bạn được lưu trong trình duyệt này.",
    "callout.quick":"Ý tưởng nhanh",
    "home.title":"Học crypto từng bước một",
    "home.desc":"Bắt đầu từ kiến thức cơ bản, sau đó tìm hiểu về ví tiền, chuyển tiền an toàn, vai trò của token và bài học thực tế. Bạn cũng có thể mở Thuật ngữ và Thư viện nguồn bất cứ lúc nào.",
    "home.start":"Nên bắt đầu từ đâu?",
    "home.useMenu":"Sử dụng menu bên trái như bản đồ học tập",
    "home.lessonGuide":"Nếu bạn hoàn toàn mới, hãy theo các bài học theo thứ tự. Mỗi bài được viết bằng ngôn ngữ đơn giản với ví dụ, lỗi thường gặp và điểm kiểm tra.",
    "home.glossaryTitle":"Thuật ngữ",
    "home.glossaryDesc":"Mở phần Thuật ngữ để tìm hiểu các khái niệm như phí gas, khóa công khai, trình khám phá, hợp đồng thông minh, lưu ký và cầu nối bằng ngôn ngữ dễ hiểu.",
    "home.sourceTitle":"Thư viện nguồn",
    "home.sourceDesc":"Mở Thư viện nguồn để đọc các bài viết thực tế và tài liệu chính thức theo chủ đề như lừa đảo, sàn giao dịch, stablecoin và an toàn ví.",
    "home.openLesson":"Mở bài học",
    "home.openGlossary":"Mở Thuật ngữ",
    "home.openSources":"Mở Thư viện nguồn",
    "home.startCardTitle":"Bắt đầu từ đây",
    "home.startCardDesc":"Biết chính xác nên bắt đầu từ đâu nếu đây là lần đầu tiên của bạn.",
    "home.openStart":"Mở hướng dẫn bắt đầu",
    "home.faqCardTitle":"Câu hỏi thường gặp",
    "home.faqCardDesc":"Đọc những câu hỏi phổ biến nhất của người mới ở một nơi.",
    "home.openFaq":"Mở câu hỏi thường gặp",
    "home.safetyCardTitle":"An toàn / Phòng chống lừa đảo",
    "home.safetyCardDesc":"Học các thói quen thực tế để phòng chống lừa đảo và bảo vệ ví tiền.",
    "home.openSafety":"Mở hướng dẫn an toàn",
    "home.arrowNote":"Sử dụng menu bên trái như bản đồ học tập của bạn.",
    "glossary.title":"Thuật ngữ",
    "glossary.desc":"Giải thích đơn giản cho các từ khóa quan trọng trong crypto. Đọc phần này trước nếu bài học có vẻ xa lạ.",
    "glossary.address.term":"Địa chỉ",
    "glossary.address.body":"Vị trí công khai nơi tài sản có thể được nhận.",
    "glossary.private.term":"Khóa riêng tư",
    "glossary.private.body":"Khóa bí mật cho phép kiểm soát ví tiền.",
    "glossary.seed.term":"Cụm từ khôi phục",
    "glossary.seed.body":"Bản sao lưu để khôi phục ví. Không bao giờ chia sẻ nó.",
    "glossary.gas.term":"Phí gas",
    "glossary.gas.body":"Phí mạng lưới để xử lý giao dịch.",
    "glossary.public.term":"Khóa công khai",
    "glossary.public.body":"Khóa mã hóa liên kết với danh tính ví của bạn, giúp tạo địa chỉ.",
    "glossary.explorer.term":"Trình khám phá",
    "glossary.explorer.body":"Trang web hoặc công cụ cho phép bạn xem các giao dịch và địa chỉ blockchain.",
    "glossary.contract.term":"Hợp đồng thông minh",
    "glossary.contract.body":"Mã trên blockchain tự động thực thi các quy tắc được lập trình.",
    "glossary.custody.term":"Lưu ký",
    "glossary.custody.body":"Ai kiểm soát các khóa và quyền truy cập tài sản.",
    "glossary.bridge.term":"Cầu nối",
    "glossary.bridge.body":"Công cụ để di chuyển tài sản hoặc tin nhắn giữa các blockchain khác nhau.",
    "sources.pageTitle":"Thư viện nguồn",
    "sources.pageDesc":"Danh sách đọc các bài viết thực tế và tài liệu tham khảo chính thức. Sử dụng để kết nối bài học với các trường hợp thực tế.",
    "sources.catScams":"Lừa đảo",
    "sources.catExchanges":"Sàn giao dịch",
    "sources.catStable":"Stablecoin",
    "sources.catWallet":"An toàn ví"
  };

  extraUi.vi = {
    "v.ledger":"Sổ cái",
    "v.node":"Nút mạng",
    "v.wallet":"Ví tiền",
    "v.interface":"giao diện",
    "v.address":"Địa chỉ",
    "v.shareable":"có thể chia sẻ",
    "v.private":"Khóa riêng tư",
    "v.secret":"bí mật",
    "v.seed":"Cụm từ khôi phục",
    "v.backup":"sao lưu",
    "v.network":"Mạng lưới",
    "v.test":"Chuyển thử",
    "v.txid":"Mã giao dịch",
    "v.match":"phải khớp",
    "v.check":"kiểm tra",
    "v.smallfirst":"số nhỏ trước",
    "v.verify":"xác minh",
    "v.defi":"Tài chính phi tập trung",
    "v.utility":"Token tiện ích",
    "v.governance":"Token quản trị",
    "v.nft":"NFT",
    "v.stablecoin":"Stablecoin",
    "v.bank":"Như ngân hàng",
    "v.access":"Truy cập",
    "v.voting":"Bỏ phiếu",
    "v.ownership":"Quyền sở hữu",
    "v.cash":"Tiền mặt kỹ thuật số",
    "v.roleDesc1":"Các chức năng tài chính được thực hiện bằng mã.",
    "v.roleDesc2":"Sử dụng, lợi ích và chức năng dịch vụ.",
    "v.roleDesc3":"Tham gia vào các đề xuất và quyết định.",
    "v.roleDesc4":"Bằng chứng sở hữu gắn với một vật phẩm số cụ thể.",
    "v.roleDesc5":"Được thiết kế để giữ gần một giá trị tham chiếu.",
    "v.phishing":"Lừa đảo giả mạo",
    "v.custody":"Lưu ký",
    "v.designrisk":"Rủi ro thiết kế",
    "v.riskDesc1":"Sự khẩn cấp và tin nhắn hỗ trợ giả mạo có thể lừa người dùng chấp thuận những điều nguy hiểm.",
    "v.riskDesc2":"Nếu nền tảng khác giữ khóa, an toàn của bạn phụ thuộc vào kiểm soát và hành vi của họ.",
    "v.riskDesc3":"'Ổn định' mô tả mục tiêu, không phải lời hứa rằng mọi tình huống đều an toàn.",
    "v.networkDesc":"Xác nhận mạng lưới trước khi gửi.",
    "v.addressDesc":"Kiểm tra ký tự đầu và cuối của địa chỉ trước khi gửi.",
    "v.testDesc":"Gửi một số tiền nhỏ trước để thử.",
    "v.txidDesc":"Mã giao dịch để xác minh chuyển tiền.",
    "v.public":"Khóa công khai",
    "v.explorer":"Trình khám phá blockchain",
    "v.contract":"Hợp đồng thông minh",
    "v.bridge":"Cầu nối giữa các blockchain",
    "glossary.title":"Thuật ngữ",
    "glossary.desc":"Giải thích đơn giản cho các từ khóa quan trọng trong crypto. Đọc trước nếu bài học có vẻ xa lạ.",
    "sources.pageTitle":"Thư viện nguồn",
    "sources.pageDesc":"Danh sách đọc các bài viết thực tế và tài liệu tham khảo chính thức."
  };

  homeContent.vi = {
    title:"Học crypto từng bước — và biết nên đọc gì tiếp theo",
    desc:"Bắt đầu từ kiến thức cơ bản, sau đó chuyển sang ví tiền, chuyển tiền an toàn, vai trò của token và bài học thực tế. Bạn cũng có thể sử dụng Thuật ngữ và Thư viện nguồn bất cứ lúc nào.",
    start:"Nên bắt đầu từ đâu?",
    guide:"Nếu bạn hoàn toàn mới, hãy theo các bài học theo thứ tự. Mỗi trang được viết bằng ngôn ngữ đơn giản với ví dụ, lỗi thường gặp, điểm kiểm tra và nguồn tham khảo."
  };

  lessons.vi = deepClone(lessons.en);
  lessonOverrides.vi = [
    {
      cat:"Nền tảng",title:"Blockchain giải thích đơn giản",
      intro:"Blockchain là một sổ cái chia sẻ. Thay vì một công ty giữ bản ghi duy nhất, nhiều máy tính cùng giữ và xác minh cùng một bản ghi.",
      sections:[
        {h:"Bắt đầu với ý tưởng đơn giản nhất",ps:["Hãy tưởng tượng một cuốn sổ ghi lại ai đã gửi giá trị cho ai. Ở ngân hàng, ngân hàng kiểm soát cuốn sổ. Trong mạng blockchain, nhiều người tham gia cùng giữ cuốn sổ trung thực.","Điều này không có nghĩa mọi blockchain hoạt động giống nhau. Ý tưởng cơ bản là xác minh chung. Khi nhiều người xác nhận cùng một bản ghi, việc thay đổi lịch sử trở nên khó hơn nhiều."]},
        {h:"Tại sao người mới nên quan tâm",ps:["Nhiều người mua crypto mà không hiểu điều gì làm blockchain hữu ích. Họ thấy giá, logo hoặc ứng dụng trước. Nhưng nếu bạn không hiểu hệ thống ghi chép bên dưới, rất khó đánh giá rủi ro, an toàn hay quyền sở hữu.","Blockchain quan trọng vì nó là lớp nơi giao dịch, số dư và quyền sở hữu được ghi lại. Nếu phần này rõ ràng, ví tiền và token cũng trở nên dễ hiểu hơn."]},
        {h:"Khối, chuỗi và nút mạng",ps:["Các giao dịch được thu thập vào các khối. Mỗi khối mới trỏ về khối trước nó. Đó là lý do người ta gọi nó là chuỗi các khối.","Nút mạng đơn giản là một máy tính giúp đọc, lưu trữ hoặc xác minh sổ cái. Bạn không cần nhớ chi tiết kỹ thuật trước. Chỉ cần hiểu rằng nhiều nút mạng giúp bảo vệ bản ghi là đủ."]},
        {h:"Điều gì làm nó mạnh mẽ",ps:["Blockchain có thể giảm sự phụ thuộc vào một cơ sở dữ liệu trung tâm duy nhất. Đó là lý do người ta dùng nó cho tài sản số và hồ sơ quyền sở hữu.","Nhưng cùng cấu trúc đó cũng có nghĩa là sai lầm có thể khó đảo ngược. Nếu bạn gửi nhầm chỗ, có thể không có bộ phận hỗ trợ khách hàng nào có thể hoàn tác."]}
      ],
      defs:[["Sổ cái","Bản ghi các giao dịch hoặc số dư."],["Nút mạng","Máy tính giúp giữ hoặc xác minh bản ghi."],["Khối","Nhóm giao dịch được thêm vào chuỗi."],["Chuỗi","Liên kết có thứ tự giữa khối này và khối tiếp theo."]],
      example:"Chuyển khoản ngân hàng phụ thuộc vào cơ sở dữ liệu của ngân hàng. Chuyển blockchain phụ thuộc vào bản ghi chia sẻ của mạng lưới.",
      mistakes:["Nghĩ rằng blockchain có nghĩa là 'an toàn tuyệt đối' trong mọi tình huống.","Cho rằng mọi giao dịch đều có thể đảo ngược như thanh toán bằng thẻ.","Coi blockchain như một từ bí ẩn thay vì một hệ thống ghi chép."],
      faqs:[["Một công ty có thể tự thay đổi blockchain không?","Trên blockchain công khai, thường một bên không thể tự thay đổi toàn bộ bản ghi chia sẻ."],["Tại sao blockchain được gọi là minh bạch?","Vì các bản ghi giao dịch thường có thể kiểm tra công khai qua trình khám phá."],["Tôi có cần hiểu lập trình trước không?","Không. Người mới chỉ cần ý tưởng lớn trước: bản ghi chia sẻ, xác minh chung và lịch sử khó thay đổi."]],
      checkpoints:["Tôi có thể giải thích blockchain như một sổ cái chia sẻ.","Tôi hiểu tại sao xác minh chung quan trọng.","Tôi biết tại sao giao dịch đã xác nhận có thể khó đảo ngược."],
      quiz:[["Định nghĩa đơn giản nhất của blockchain cho người mới là gì?","Một sổ cái chia sẻ mà nhiều người tham gia cùng xác minh."],["Tại sao người mới nên quan tâm đến cấu trúc blockchain?","Vì quyền sở hữu, số dư và giao dịch được ghi lại ở đó."]]
    },
    {
      cat:"Truy cập",title:"Ví tiền giải thích đơn giản",
      intro:"Ví không chỉ là hộp chứa tiền xu. Ví là công cụ quản lý các khóa cho phép bạn truy cập và kiểm soát tài sản số được ghi trên blockchain.",
      sections:[
        {h:"Hiểu lầm lớn nhất của người mới",ps:["Nhiều người tưởng tượng ví như thể tiền xu nằm bên trong giống tiền mặt trong ví da. Hình ảnh đó dễ hiểu nhưng không đầy đủ.","Tài sản của bạn được ghi trên blockchain. Ví giúp bạn chứng minh quyền kiểm soát tài sản đó."]},
        {h:"Địa chỉ, khóa riêng tư và cụm từ khôi phục",ps:["Địa chỉ ví là nơi bạn nhận tài sản. Bạn có thể chia sẻ địa chỉ.","Khóa riêng tư là thứ cho phép kiểm soát. Không bao giờ được chia sẻ.","Cụm từ khôi phục là bản sao lưu có thể khôi phục ví. Nếu ai đó có được cụm từ khôi phục, họ có thể lấy tài sản của bạn."]},
        {h:"Lưu ký bên thứ ba và tự lưu ký",ps:["Nếu sàn giao dịch kiểm soát khóa thay bạn, đó là lưu ký bên thứ ba. Có thể tiện lợi nhưng bạn phụ thuộc vào bảo mật của nền tảng đó.","Nếu bạn tự kiểm soát khóa, đó là tự lưu ký. Cho nhiều quyền kiểm soát hơn nhưng cũng nhiều trách nhiệm hơn."]},
        {h:"Tại sao ví quan trọng trong thực tế",ps:["Kiến thức về ví không chỉ là lý thuyết. Nó ảnh hưởng đến cách bạn nhận, gửi, lưu trữ, sao lưu và bảo vệ tài sản số.","Nhiều tổn thất của người mới xảy ra vì chia sẻ cụm từ khôi phục hoặc tin vào tin nhắn hỗ trợ giả mạo."]}
      ],
      defs:[["Địa chỉ ví","Địa chỉ nhận công khai mà bạn có thể chia sẻ."],["Khóa riêng tư","Khóa bí mật kiểm soát quyền truy cập."],["Cụm từ khôi phục","Cụm từ sao lưu dùng để khôi phục ví."],["Ví lưu ký","Ví mà dịch vụ kiểm soát khóa thay bạn."]],
      example:"Hãy nghĩ địa chỉ như địa chỉ hộp thư. Khóa riêng tư như chìa khóa bí mật để mở hộp.",
      mistakes:["Chia sẻ cụm từ khôi phục với 'hỗ trợ kỹ thuật'.","Lưu cụm từ khôi phục trong ảnh chụp màn hình mà không có kế hoạch sao lưu.","Cho rằng tài khoản sàn giao dịch và ví tự lưu ký hoạt động giống nhau."],
      faqs:[["Tôi có thể chia sẻ địa chỉ ví không?","Có. Địa chỉ ví dùng để nhận tài sản."],["Tôi có thể chia sẻ khóa riêng tư hoặc cụm từ khôi phục không?","Không. Bất kỳ ai có chúng đều có thể kiểm soát ví."],["Tự lưu ký luôn tốt hơn không?","Cho nhiều quyền kiểm soát trực tiếp hơn nhưng cũng nhiều trách nhiệm hơn."]],
      checkpoints:["Tôi biết sự khác biệt giữa địa chỉ và khóa riêng tư.","Tôi biết tại sao cụm từ khôi phục phải giữ bí mật.","Tôi hiểu sự khác biệt giữa lưu ký và tự lưu ký."],
      quiz:[["Bạn có thể chia sẻ gì một cách an toàn?","Địa chỉ ví của bạn."],["Không bao giờ nên chia sẻ gì?","Khóa riêng tư hoặc cụm từ khôi phục."]]
    },
    {
      cat:"An toàn",title:"Chuyển crypto an toàn",
      intro:"Chuyển crypto không cần phải đáng sợ, nhưng cần thói quen an toàn có thể lặp lại. Danh sách kiểm tra đơn giản nhất là: mạng lưới, địa chỉ, chuyển thử, rồi xác minh bằng mã giao dịch.",
      sections:[
        {h:"Tại sao người ta mắc lỗi khi chuyển tiền",ps:["Người mới thường vội vàng. Họ cho rằng địa chỉ đã dán là đúng, bỏ qua mạng lưới, hoặc gửi toàn bộ số tiền trước khi thử.","Vấn đề là chuyển blockchain có thể khó đảo ngược. Đó là lý do thói quen an toàn quan trọng hơn sự tự tin."]},
        {h:"Thói quen 4 bước",ps:["Đầu tiên, xác nhận mạng lưới. Một số tài sản di chuyển trên nhiều mạng và đích đến đúng rất quan trọng.","Thứ hai, kiểm tra địa chỉ cẩn thận. Đừng tin mù quáng chỉ vì đã dán vào ô.","Thứ ba, gửi một số tiền nhỏ thử khi có thể.","Thứ tư, xác minh chuyển tiền bằng mã giao dịch."]},
        {h:"Mã giao dịch là gì?",ps:["Mã giao dịch giống như số biên nhận cho lần chuyển tiền. Nó giúp bạn xác nhận liệu mạng lưới đã ghi lại giao dịch chưa, và giao dịch đang chờ xử lý hay đã xác nhận.","Người mới không cần học mọi trình khám phá. Chỉ cần hiểu rằng mã giao dịch cho bạn cách kiểm tra những gì đã xảy ra."]},
        {h:"Chậm là an toàn",ps:["Trong crypto, tốc độ thường cảm thấy hấp dẫn. Nhưng với chuyển tiền, chậm thường an toàn hơn nhanh.","Đọc lại tên mạng lưới một lần nữa và thử với số tiền nhỏ có thể ngăn một sai lầm lớn hơn nhiều sau này."]}
      ],
      defs:[["Mạng lưới","Hệ thống blockchain mà tài sản đang di chuyển."],["Chuyển thử","Số tiền nhỏ gửi trước để kiểm tra mọi thứ hoạt động."],["Mã giao dịch","Mã định danh giao dịch dùng để xác minh chuyển tiền."],["Trình khám phá","Trang web hoặc công cụ dùng để kiểm tra bản ghi giao dịch blockchain."]],
      example:"Alice muốn gửi USDT. Cô ấy xác nhận mạng lưới trước, kiểm tra địa chỉ của Bob, gửi thử một số nhỏ, và xác minh mã giao dịch trước khi gửi toàn bộ.",
      mistakes:["Gửi toàn bộ số tiền trước.","Bỏ qua mạng lưới vì tên token trông quen thuộc.","Cho rằng địa chỉ đã dán tự động đúng."],
      faqs:[["Tại sao mạng lưới quan trọng?","Vì cùng tên tài sản có thể tồn tại trên nhiều mạng khác nhau, và đích đến phải khớp."],["Tại sao nên gửi thử số nhỏ trước?","Vì nó giảm chi phí của sai lầm."],["Tôi nên làm gì sau khi gửi?","Kiểm tra mã giao dịch để xác nhận trạng thái giao dịch."]],
      checkpoints:["Tôi có thể kể tên 4 bước chuyển tiền an toàn.","Tôi biết tại sao chuyển thử quan trọng.","Tôi biết mã giao dịch dùng để làm gì."],
      quiz:[["Cần làm gì trước khi chuyển toàn bộ?","Kiểm tra mạng lưới, kiểm tra địa chỉ, và lý tưởng nhất là chuyển thử số nhỏ."],["Mã giao dịch giúp bạn làm gì?","Xác minh giao dịch trên bản ghi blockchain."]]
    },
    {
      cat:"Vai trò",title:"5 vai trò của crypto",
      intro:"Crypto trở nên dễ hơn nhiều khi bạn ngừng chỉ hỏi 'Tên nó là gì?' mà bắt đầu hỏi 'Vai trò của nó là gì?' Một token có thể hoạt động như tiền mặt số, một cái khác như quyền truy cập, và cái khác như quyền bỏ phiếu.",
      sections:[
        {h:"Vai trò quan trọng hơn tên gọi",ps:["Người mới thường cảm thấy lạc lõng vì mỗi dự án có tên, logo, khẩu hiệu mới. Tên thay đổi nhưng vai trò cơ bản thường dễ phân loại hơn.","Đó là lý do học theo vai trò rất hữu ích. Khi bạn hiểu công việc mà token đang cố làm, không gian này trở nên dễ đọc hơn."]},
        {h:"Năm loại hữu ích cho người mới",ps:["Tài chính phi tập trung có thể hiểu như chức năng ngân hàng được thực hiện bằng mã và ví thay vì quầy ngân hàng truyền thống.","Token tiện ích dễ hiểu nhất như điểm thưởng, quyền truy cập hoặc chức năng dịch vụ trong hệ sinh thái.","Token quản trị gần nhất với quyền bỏ phiếu trong giao thức hoặc cộng đồng.","NFT dễ hiểu nhất như bằng chứng sở hữu cho một vật phẩm số cụ thể.","Stablecoin gần nhất với tiền mặt số được thiết kế để giữ gần một giá trị tham chiếu."]},
        {h:"Tại sao điều này quan trọng",ps:["Nếu bạn nhầm lẫn stablecoin với token quản trị, hoặc NFT với token tiện ích, bạn có thể hiểu sai cả trường hợp sử dụng và rủi ro.","Tư duy theo vai trò cũng giúp bạn so sánh các dự án rõ ràng hơn."]},
        {h:"Câu hỏi tốt hơn cho người mới",ps:["Thay vì chỉ hỏi 'Coin này có tốt không?' hãy hỏi: 'Token này dùng để làm gì? Ai sử dụng? Tại sao nó tồn tại? Rủi ro đi kèm với vai trò đó là gì?'","Những câu hỏi này không đảm bảo quyết định hoàn hảo, nhưng tạo điểm khởi đầu tốt hơn nhiều so với đoán từ tên."]}
      ],
      example:"Stablecoin không cố làm cùng công việc với NFT. Một cái nhắm đến chuyển giá trị ổn định. Cái kia đại diện cho quyền sở hữu một vật phẩm số cụ thể.",
      mistakes:["Nghĩ rằng mọi token đều giống nhau.","Nhìn giá trước rồi vai trò sau.","Bỏ qua token thực sự được dùng cho gì."],
      faqs:[["DeFi có giống ngân hàng không?","Không hẳn. Nó có thể giống chức năng ngân hàng nhưng cấu trúc và bảo vệ có thể rất khác."],["NFT chỉ là hình ảnh?","Câu trả lời đơn giản là không. Khái niệm quan trọng hơn là bằng chứng sở hữu."],["Tại sao stablecoin phổ biến?","Vì nhiều người dùng muốn tài sản số được thiết kế cho chuyển tiền và định giá với biến động thấp hơn."]],
      checkpoints:["Tôi có thể giải thích DeFi bằng từ ngữ đơn giản.","Tôi có thể mô tả sự khác biệt giữa token tiện ích và token quản trị.","Tôi biết tại sao tư duy theo vai trò giúp người mới."],
      quiz:[["Cách đơn giản nhất để hiểu stablecoin cho người mới?","Như tiền mặt số được thiết kế để giữ gần một giá trị tham chiếu."],["Câu hỏi nào hữu ích hơn là chỉ hỏi về tên token?","Vai trò của nó là gì?"]]
    },
    {
      cat:"Thực tế",title:"Bài học từ thực tế",
      intro:"Giáo dục crypto không nên dừng ở định nghĩa. Các trường hợp thực tế cho thấy người mới bối rối ở đâu, loại lỗi nào lặp lại và tại sao cấu trúc quan trọng hơn khẩu hiệu.",
      sections:[
        {h:"Tại sao ví dụ quan trọng",ps:["Người ta học nhanh hơn khi thấy lý thuyết gặp thực tế. Khái niệm như 'giữ cụm từ khôi phục bí mật' trở nên có ý nghĩa hơn khi bạn hiểu cách lừa đảo thực sự hoạt động.","Phần này không nhằm tạo sợ hãi. Mà để kết nối bài học với hậu quả thực tế."]},
        {h:"Ba mô hình lặp lại",ps:["Lừa đảo giả mạo thường lừa người dùng kết nối ví hoặc tiết lộ dữ liệu khôi phục nhạy cảm.","Sự cố sàn giao dịch nhắc nhở rằng tiện lợi không giống tự lưu ký.","Áp lực stablecoin nhắc nhở rằng 'ổn định' mô tả mục tiêu thiết kế, không phải bảo đảm hoàn hảo trong mọi tình huống."]},
        {h:"Cách đọc tin tức crypto tốt hơn",ps:["Khi thấy tiêu đề, hãy hỏi: Đây là vấn đề ví, vấn đề lưu ký, vấn đề lừa đảo, hay vấn đề thiết kế sản phẩm?","Thói quen đơn giản này giúp bạn học từ sự kiện thay vì chỉ phản ứng với sợ hãi hoặc hào hứng."]},
        {h:"Một trích dẫn đáng nhớ",ps:["Một quy tắc tốt cho người mới từ hướng dẫn chính thức: nếu ai đó yêu cầu thanh toán bằng crypto dưới áp lực hoặc khẩn cấp, đó là dấu hiệu cảnh báo nghiêm trọng.","Giáo dục thực sự có nghĩa là học ngôn ngữ của rủi ro trước khi bạn cần nó trong khủng hoảng."]}
      ],
      example:"Thay vì đọc tiêu đề sàn giao dịch sụp đổ là 'crypto thất bại', hãy hỏi phần nào thất bại: lưu ký, quản trị, kiểm soát gian lận, hay quản lý rủi ro.",
      mistakes:["Coi mọi tiêu đề tiêu cực là cùng loại vấn đề.","Bỏ qua cảnh báo lừa đảo chính thức vì tin nhắn có vẻ khẩn cấp.","Nghĩ rằng tên sản phẩm đã chứng minh an toàn."],
      faqs:[["Tại sao đưa tin tức và nguồn vào nền tảng học tập?","Vì các trường hợp thực tế giúp nhớ và đánh giá khái niệm trừu tượng dễ hơn."],["Trường hợp thực tế có nghĩa cả ngành bị hỏng?","Không. Chúng thường chỉ ra loại rủi ro cụ thể cần hiểu rõ."],["Nên tìm gì đầu tiên trong tiêu đề đáng sợ?","Tìm cấu trúc vấn đề: lừa đảo, lưu ký, đòn bẩy, hay điểm yếu thiết kế."]],
      checkpoints:["Tôi có thể kể ít nhất ba mô hình rủi ro phổ biến.","Tôi biết rằng 'ổn định' không có nghĩa là không rủi ro.","Tôi hiểu tại sao cảnh báo lừa đảo chính thức quan trọng."],
      quiz:[["Câu hỏi hữu ích đầu tiên khi đọc tiêu đề về thất bại crypto?","Phần nào của cấu trúc đã thất bại?"],["Tại sao sự khẩn cấp là dấu hiệu cảnh báo trong nhiều vụ lừa đảo?","Vì áp lực thường được dùng để ngăn người ta kiểm tra chi tiết cẩn thận."]],
      sources:[
        ["Cảnh báo FTC cho người tiêu dùng","Trích: 'Chỉ kẻ lừa đảo mới yêu cầu thanh toán bằng tiền mã hóa.'","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["Reuters về FTX","Báo cáo Reuters giúp người mới thấy sự khác biệt giữa sự cố lưu ký/sàn giao dịch và biến động giá đơn thuần.","https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"]
      ]
    }
  ];

  glossaryOverrides.vi = [
    ["Địa chỉ ví","Vị trí công khai dùng để nhận tài sản số."],
    ["Khóa riêng tư","Khóa bí mật dùng để kiểm soát ví."],
    ["Cụm từ khôi phục","Bộ từ sao lưu để khôi phục ví. Không bao giờ chia sẻ."],
    ["Phí gas","Phí mạng lưới trả để xử lý giao dịch."],
    ["Khóa công khai","Khóa mã hóa liên kết với danh tính ví, giúp tạo địa chỉ."],
    ["Trình khám phá blockchain","Trang web hoặc công cụ xem giao dịch và địa chỉ trên blockchain."],
    ["Hợp đồng thông minh","Mã trên blockchain tự động thực thi các quy tắc đã lập trình."],
    ["Lưu ký","Ai kiểm soát khóa và quyền truy cập tài sản."],
    ["Cầu nối blockchain","Công cụ di chuyển tài sản hoặc tin nhắn giữa các blockchain khác nhau."]
  ];

  sourceOverrides.vi = [
    ["scams","FTC","Cảnh báo người tiêu dùng FTC","Hướng dẫn của FTC về lừa đảo crypto và an toàn người tiêu dùng.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","An toàn","Giúp người mới nhận biết các mô hình lừa đảo trước khi mất tiền."],
    ["exchanges","Reuters","Reuters về sự sụp đổ của FTX","Trường hợp FTX giúp hiểu rủi ro sàn giao dịch và lưu ký.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Bài 5 — Bài học thực tế","Cho thấy rủi ro lưu ký qua trường hợp sụp đổ sàn giao dịch thực tế."],
    ["stable","ECB","Giải thích của ECB về stablecoin","Giải thích cách cơ quan chính sách nhìn nhận cấu trúc và rủi ro stablecoin.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Bài 4 — Loại Token","Giúp giải thích cách các nhà quản lý đánh giá rủi ro stablecoin."],
    ["wallet","FTC","Cảnh báo thanh toán FTC","Cho thấy tại sao yêu cầu thanh toán bằng crypto thường là dấu hiệu lừa đảo.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","An toàn","Cho thấy tại sao các yêu cầu thanh toán crypto có thể là tín hiệu lừa đảo."]
  ];

  polishedSectionContent.vi = {
    startTitle:"Bắt đầu từ đây",
    startIntro:"Trang này giúp người mới biết chính xác nên bắt đầu từ đâu. Theo thứ tự đơn giản trước, rồi mở rộng khi kiến thức cơ bản đã rõ ràng.",
    startSteps:[
      ["Bước 1 — Blockchain","Bắt đầu với Bài 1 để hiểu blockchain là gì và tại sao bản ghi chia sẻ quan trọng."],
      ["Bước 2 — Ví tiền","Chuyển sang Bài 2 để hiểu khóa, địa chỉ và quyền truy cập trước khi di chuyển tài sản."],
      ["Bước 3 — Thuật ngữ","Mở Thuật ngữ sau Bài 1 và 2 nếu vẫn còn từ nào khó hiểu."],
      ["Bước 4 — Chuyển tiền an toàn","Tiếp tục Bài 3 để học thói quen thực tế: mạng lưới, địa chỉ, chuyển thử và mã giao dịch."],
      ["Bước 5 — Vai trò và bài học thực tế","Khi kiến thức cơ bản rõ ràng, tiếp tục với vai trò token, mô hình rủi ro và ví dụ thực tế."]
    ],
    startTip:"Lộ trình tốt cho người mới là: 1 → 2 → Thuật ngữ → 3 → 4 → An toàn → Thư viện nguồn.",
    faqTitle:"Câu hỏi thường gặp",
    faqIntro:"Đây là những câu hỏi người mới hay hỏi nhất. Đọc câu trả lời bằng ngôn ngữ đơn giản trước khi lo lắng về chi tiết nâng cao.",
    faqItems:[
      ["Tôi có thực sự cần ví không?","Nếu bạn chỉ mua bán trong sàn giao dịch, có thể chưa cần ví tự lưu ký ngay. Nhưng để hiểu quyền sở hữu đúng cách, bạn vẫn nên tìm hiểu ví và cách khóa hoạt động."],
      ["Sàn giao dịch và ví khác nhau thế nào?","Sàn giao dịch là dịch vụ giao dịch và quản lý tài khoản. Ví là công cụ quản lý khóa và quyền truy cập. Chúng liên quan nhưng không giống nhau."],
      ["Tại sao tôi phải trả phí gas?","Phí gas là phí mạng lưới. Nó giúp xử lý và ghi lại giao dịch trên blockchain."],
      ["Chia sẻ địa chỉ ví có an toàn không?","Có, địa chỉ ví dùng để nhận tài sản. Nhưng khóa riêng tư và cụm từ khôi phục không bao giờ được chia sẻ."],
      ["Tại sao nên gửi thử số nhỏ trước?","Vì một lần thử nhỏ có thể phát hiện lỗi địa chỉ hoặc mạng trước khi số tiền lớn hơn bị rủi ro."]
    ],
    safetyTitle:"An toàn / Phòng chống lừa đảo",
    safetyIntro:"Đây là một trong những phần thực tế nhất của toàn bộ nền tảng. Những thói quen này có thể ngăn lỗi của người mới trước khi chúng trở thành tổn thất thực sự.",
    safetyItems:[
      ["Không bao giờ chia sẻ cụm từ khôi phục","Cụm từ khôi phục là quyền khôi phục. Bất kỳ ai có nó đều có thể kiểm soát ví."],
      ["Cẩn thận với airdrop giả","Kẻ lừa đảo thường dùng lời hứa token miễn phí để đẩy người dùng đến trang web giả hoặc chấp thuận nguy hiểm."],
      ["Kiểm tra liên kết trước khi kết nối","Liên kết lừa đảo thường trông gần đúng. Chậm lại và xác minh tên miền cẩn thận."],
      ["Gửi số tiền thử nhỏ trước","Đặc biệt trên mạng mới hoặc địa chỉ mới, thử nhỏ có thể ngăn sai lầm lớn hơn."],
      ["Coi sự khẩn cấp là dấu hiệu cảnh báo","Áp lực, đếm ngược, đe dọa và yêu cầu thanh toán bắt buộc là mô hình lừa đảo phổ biến."]
    ]
  };

  // Minimal Arabic RTL text direction for content areas only (not layout)
  var styleEl = document.createElement('style');
  styleEl.textContent = '[lang="ar"] .content-area, [lang="ar"] #sidebar { direction: rtl; text-align: right; } [lang="ar"] .nav-num { margin-left: 10px; margin-right: 0; } [lang="ar"] .lesson-nav-item { flex-direction: row-reverse; } [lang="ar"] .step-item { flex-direction: row-reverse; } [lang="ar"] .checkpoint-item { flex-direction: row-reverse; } [lang="ar"] .callout { border-left: none; border-right: 4px solid var(--gold); } [lang="ar"] .callout.info { border-right-color: var(--navy-2); } [lang="ar"] .callout.warn { border-right-color: var(--red); } [lang="ar"] .callout.success { border-right-color: var(--green); } [lang="ar"] #topbar, [lang="ar"] .brand, [lang="ar"] .topbar-right { direction: ltr; }';
  document.head.appendChild(styleEl);

  // Update setLang to handle ar/vi properly
  var prevSetLang = window.setLang;
  window.setLang = function(lang){
    prevSetLang(lang);
    document.documentElement.lang = lang === 'br' ? 'pt-BR' : lang;
  };

  // Re-render
  currentPage = 'home';
  currentLesson = 0;
  document.documentElement.lang = currentLang === 'br' ? 'pt-BR' : currentLang;
  if (typeof applyUI === 'function') applyUI();
  if (typeof renderAllLessons === 'function') renderAllLessons();
  if (typeof showPage === 'function') showPage('home');
})();