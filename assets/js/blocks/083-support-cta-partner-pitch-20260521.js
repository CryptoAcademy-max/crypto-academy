(function(){
  if(typeof window === 'undefined' || window.__coinProofPathSupportCta20260521) return;
  window.__coinProofPathSupportCta20260521 = true;

  var BRAND = 'Coin ProofPath';
  var EMAIL = 'beenetworkkorea@gmail.com';
  var SUPPORT_URL = 'https://buymeacoffee.com/beenetworkkorea';

  var COPY = {
    en:{
      footerSupport:'Support',
      individualTitle:'Individual Support',
      individualText:'If you are an individual supporter or community member, you can support Coin ProofPath through Buy Me a Coffee.',
      individualButton:'Support on Buy Me a Coffee',
      companyTitle:'For companies and projects',
      companyText:'For sponsorships, education partnerships, or safety campaign collaborations, contact us by email.',
      companyButton:'Contact Coin ProofPath',
      note:'Support is voluntary and does not influence lesson content, recommendations, or educational neutrality.'
    },
    ko:{
      footerSupport:'후원하기',
      individualTitle:'개인 후원',
      individualText:'개인 후원자 또는 커뮤니티 구성원이라면 Buy Me a Coffee를 통해 Coin ProofPath를 응원할 수 있습니다.',
      individualButton:'Buy Me a Coffee에서 후원하기',
      companyTitle:'기업 및 프로젝트 후원',
      companyText:'후원, 교육 파트너십, 안전 캠페인 협업은 이메일로 문의해 주세요.',
      companyButton:'Coin ProofPath에 문의하기',
      note:'후원은 자율적이며, 강의 내용, 추천, 교육적 중립성에 영향을 주지 않습니다.'
    },
    th:{
      footerSupport:'สนับสนุน',
      individualTitle:'การสนับสนุนส่วนบุคคล',
      individualText:'หากคุณเป็นผู้สนับสนุนรายบุคคลหรือสมาชิกชุมชน สามารถสนับสนุน Coin ProofPath ผ่าน Buy Me a Coffee ได้',
      individualButton:'สนับสนุนบน Buy Me a Coffee',
      companyTitle:'สำหรับบริษัทและโครงการ',
      companyText:'สำหรับการสนับสนุน พาร์ตเนอร์ด้านการศึกษา หรือแคมเปญความปลอดภัย กรุณาติดต่อทางอีเมล',
      companyButton:'ติดต่อ Coin ProofPath',
      note:'การสนับสนุนเป็นความสมัครใจ และไม่ส่งผลต่อเนื้อหา คำแนะนำ หรือความเป็นกลางทางการศึกษา'
    },
    id:{
      footerSupport:'Dukung',
      individualTitle:'Dukungan Individu',
      individualText:'Jika Anda pendukung individu atau anggota komunitas, Anda dapat mendukung Coin ProofPath melalui Buy Me a Coffee.',
      individualButton:'Dukung di Buy Me a Coffee',
      companyTitle:'Untuk perusahaan dan proyek',
      companyText:'Untuk sponsor, kemitraan edukasi, atau kolaborasi kampanye keamanan, hubungi kami lewat email.',
      companyButton:'Hubungi Coin ProofPath',
      note:'Dukungan bersifat sukarela dan tidak memengaruhi konten pelajaran, rekomendasi, atau netralitas edukasi.'
    },
    pt:{
      footerSupport:'Apoiar',
      individualTitle:'Apoio individual',
      individualText:'Se você é apoiador individual ou membro da comunidade, pode apoiar o Coin ProofPath pelo Buy Me a Coffee.',
      individualButton:'Apoiar no Buy Me a Coffee',
      companyTitle:'Para empresas e projetos',
      companyText:'Para patrocínios, parcerias educacionais ou campanhas de segurança, entre em contato por email.',
      companyButton:'Contactar Coin ProofPath',
      note:'O apoio é voluntário e não influencia o conteúdo das aulas, recomendações ou neutralidade educacional.'
    },
    br:{
      footerSupport:'Apoiar',
      individualTitle:'Apoio individual',
      individualText:'Se você é apoiador individual ou membro da comunidade, pode apoiar o Coin ProofPath pelo Buy Me a Coffee.',
      individualButton:'Apoiar no Buy Me a Coffee',
      companyTitle:'Para empresas e projetos',
      companyText:'Para patrocínios, parcerias educacionais ou campanhas de segurança, entre em contato por email.',
      companyButton:'Falar com Coin ProofPath',
      note:'O apoio é voluntário e não influencia o conteúdo das aulas, recomendações ou neutralidade educacional.'
    },
    tr:{
      footerSupport:'Destekle',
      individualTitle:'Bireysel Destek',
      individualText:'Bireysel destekçi veya topluluk üyesiyseniz Coin ProofPath’i Buy Me a Coffee üzerinden destekleyebilirsiniz.',
      individualButton:'Buy Me a Coffee ile Destekle',
      companyTitle:'Şirketler ve projeler için',
      companyText:'Sponsorluk, eğitim ortaklığı veya güvenlik kampanyası iş birlikleri için e-posta ile iletişime geçin.',
      companyButton:'Coin ProofPath ile iletişim',
      note:'Destek gönüllüdür ve ders içeriğini, önerileri veya eğitim tarafsızlığını etkilemez.'
    },
    es:{
      footerSupport:'Apoyar',
      individualTitle:'Apoyo individual',
      individualText:'Si eres una persona o miembro de comunidad, puedes apoyar a Coin ProofPath mediante Buy Me a Coffee.',
      individualButton:'Apoyar en Buy Me a Coffee',
      companyTitle:'Para empresas y proyectos',
      companyText:'Para patrocinios, alianzas educativas o campañas de seguridad, contáctanos por email.',
      companyButton:'Contactar a Coin ProofPath',
      note:'El apoyo es voluntario y no influye en el contenido, las recomendaciones ni la neutralidad educativa.'
    },
    ar:{
      footerSupport:'ادعم',
      individualTitle:'دعم الأفراد',
      individualText:'إذا كنت داعماً فردياً أو عضواً في مجتمع، يمكنك دعم Coin ProofPath عبر Buy Me a Coffee.',
      individualButton:'ادعم عبر Buy Me a Coffee',
      companyTitle:'للشركات والمشاريع',
      companyText:'للرعاية أو الشراكات التعليمية أو حملات الأمان، تواصل معنا عبر البريد.',
      companyButton:'تواصل مع Coin ProofPath',
      note:'الدعم اختياري ولا يؤثر في محتوى الدروس أو التوصيات أو الحياد التعليمي.'
    },
    vi:{
      footerSupport:'Ủng hộ',
      individualTitle:'Ủng hộ cá nhân',
      individualText:'Nếu bạn là người ủng hộ cá nhân hoặc thành viên cộng đồng, bạn có thể ủng hộ Coin ProofPath qua Buy Me a Coffee.',
      individualButton:'Ủng hộ trên Buy Me a Coffee',
      companyTitle:'Dành cho công ty và dự án',
      companyText:'Về tài trợ, hợp tác giáo dục hoặc chiến dịch an toàn, hãy liên hệ qua email.',
      companyButton:'Liên hệ Coin ProofPath',
      note:'Ủng hộ là tự nguyện và không ảnh hưởng đến nội dung bài học, khuyến nghị hoặc tính trung lập giáo dục.'
    },
    ha:{
      footerSupport:'Tallafa',
      individualTitle:'Tallafin mutum',
      individualText:'Idan kai mai tallafi ne ko memban al’umma, zaka iya tallafa wa Coin ProofPath ta Buy Me a Coffee.',
      individualButton:'Tallafa a Buy Me a Coffee',
      companyTitle:'Ga kamfanoni da ayyuka',
      companyText:'Don tallafi, hadin gwiwar ilimi, ko kamfen tsaro, tuntube mu ta email.',
      companyButton:'Tuntubi Coin ProofPath',
      note:'Tallafi na son rai ne kuma baya tasiri kan darussa, shawarwari, ko rashin bangaranci na ilimi.'
    }
  };

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function currentLocale(){
    try{ if(typeof currentLang === 'string' && currentLang) return currentLang; }catch(err){}
    try{ if(window.currentLang) return window.currentLang; }catch(err){}
    try{ return localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en'; }catch(err){}
    return 'en';
  }

  function copy(){
    return COPY[currentLocale()] || COPY.en;
  }

  function mailto(){
    return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Coin ProofPath Sponsorship Inquiry');
  }

  function ensureStyles(){
    if(document.getElementById('coinProofPathSupportCtaStyles')) return;
    var style = document.createElement('style');
    style.id = 'coinProofPathSupportCtaStyles';
    style.textContent = [
      '.cpp-support-section{border:1px solid var(--line);border-radius:22px;background:linear-gradient(135deg,#fff,#f5f9ff);box-shadow:0 10px 26px rgba(20,38,64,.07);padding:clamp(18px,3vw,28px);margin:20px 0;display:grid;gap:14px}',
      '.cpp-support-section h2,.cpp-support-card h3{margin:0;color:var(--text);letter-spacing:-.03em;line-height:1.15;word-break:keep-all;overflow-wrap:break-word}',
      '.cpp-support-section h2{font-size:clamp(1.25rem,2vw,1.65rem)}',
      '.cpp-support-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}',
      '.cpp-support-card{border:1px solid rgba(30,64,99,.12);border-radius:18px;background:rgba(255,255,255,.86);padding:18px;display:flex;flex-direction:column;gap:10px;min-height:180px}',
      '.cpp-support-card[data-tone="individual"]{background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,249,239,.86))}',
      '.cpp-support-card p{margin:0;color:var(--text-2);font-size:.92rem;line-height:1.62;word-break:keep-all;overflow-wrap:break-word}',
      '.cpp-support-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:auto}',
      '.cpp-support-btn{display:inline-flex;align-items:center;justify-content:center;min-height:40px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--navy);font-weight:900;text-decoration:none;padding:0 15px;text-align:center;box-shadow:0 8px 18px rgba(20,38,64,.07)}',
      '.cpp-support-btn.is-primary{background:linear-gradient(180deg,var(--navy),var(--navy-2));color:#fff}',
      '.cpp-support-note{border:1px solid rgba(30,64,99,.1);border-radius:14px;background:rgba(238,244,251,.7);padding:11px 12px;color:var(--text-2);font-size:.82rem;line-height:1.55;word-break:keep-all;overflow-wrap:break-word}',
      '.cpp-support-footer-links{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}',
      '.cpp-support-footer-links a{border:1px solid rgba(30,64,99,.12);border-radius:999px;background:#fff;color:var(--text-2);font:inherit;font-size:.68rem;font-weight:800;padding:6px 8px;text-decoration:none}',
      '@media (max-width:680px){.cpp-support-grid{grid-template-columns:1fr}.cpp-support-btn{width:100%}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function companyCard(){
    var p = copy();
    return '<article class="cpp-support-card" data-tone="company">'
      + '<h3>' + esc(p.companyTitle) + '</h3>'
      + '<p>' + esc(p.companyText) + '</p>'
      + '<div class="cpp-support-actions"><a class="cpp-support-btn is-primary" href="' + esc(mailto()) + '">' + esc(p.companyButton) + '</a></div>'
      + '</article>';
  }

  function individualCard(){
    var p = copy();
    return '<article class="cpp-support-card" data-tone="individual">'
      + '<h3>' + esc(p.individualTitle) + '</h3>'
      + '<p>' + esc(p.individualText) + '</p>'
      + '<div class="cpp-support-actions"><a class="cpp-support-btn" href="' + esc(SUPPORT_URL) + '" target="_blank" rel="noopener noreferrer">' + esc(p.individualButton) + '</a></div>'
      + '</article>';
  }

  function renderPitchSupport(){
    var p = copy();
    return '<section class="cpp-support-section" data-cpp-support="pitch">'
      + '<h2>' + esc(p.individualTitle) + '</h2>'
      + '<div class="cpp-support-grid">' + individualCard() + '</div>'
      + '<div class="cpp-support-note">' + esc(p.note) + '</div>'
      + '</section>';
  }

  function renderPartnerSupport(){
    var p = copy();
    return '<section class="cpp-support-section" data-cpp-support="partner">'
      + '<h2>' + esc(BRAND) + '</h2>'
      + '<div class="cpp-support-grid">' + companyCard() + individualCard() + '</div>'
      + '<div class="cpp-support-note">' + esc(p.note) + '</div>'
      + '</section>';
  }

  function syncPitchSupport(){
    var panel = document.getElementById('pitchPanel');
    if(!panel || !panel.innerHTML) return;
    var old = panel.querySelector('[data-cpp-support="pitch"]');
    if(old) old.remove();
    var contact = panel.querySelector('.pitch-contact');
    if(contact) contact.insertAdjacentHTML('beforebegin', renderPitchSupport());
  }

  function syncPartnerSupport(){
    var panel = document.getElementById('partnerPanel');
    if(!panel || !panel.innerHTML) return;
    var old = panel.querySelector('[data-cpp-support="partner"]');
    if(old) old.remove();
    var contact = panel.querySelector('.partner-contact');
    if(contact) contact.insertAdjacentHTML('beforebegin', renderPartnerSupport());
  }

  function syncFooterSupport(){
    var footer = document.querySelector('.sidebar-footer');
    if(!footer) return;
    var p = copy();
    var links = footer.querySelector('[data-cpp-support-footer]');
    if(!links){
      links = document.createElement('div');
      links.className = 'cpp-support-footer-links';
      links.setAttribute('data-cpp-support-footer', 'true');
      links.innerHTML = '<a data-cpp-support-footer-link target="_blank" rel="noopener noreferrer"></a>';
      footer.appendChild(links);
    }
    var link = links.querySelector('[data-cpp-support-footer-link]');
    if(link){
      link.textContent = p.footerSupport;
      link.setAttribute('href', SUPPORT_URL);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function syncSupportCtas(){
    ensureStyles();
    syncPitchSupport();
    syncPartnerSupport();
    syncFooterSupport();
  }

  function queueSync(){
    syncSupportCtas();
    window.setTimeout(syncSupportCtas, 120);
    window.setTimeout(syncSupportCtas, 700);
  }

  function wrapFunction(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__supportCtaWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      queueSync();
      return result;
    };
    wrapped.__supportCtaWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'showPartnerPage') showPartnerPage = wrapped;
      if(name === 'showPitchDeckPage') showPitchDeckPage = wrapped;
    }catch(err){}
  }

  function wrapShowPage(){
    var original = window.showPage || (typeof showPage === 'function' ? showPage : null);
    if(typeof original !== 'function' || original.__supportCtaShowPageWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      queueSync();
      return result;
    };
    wrapped.__supportCtaShowPageWrapped = true;
    window.showPage = wrapped;
    try{ showPage = wrapped; }catch(err){}
  }

  function wrapSetLang(){
    var original = window.setLang || (typeof setLang === 'function' ? setLang : null);
    if(typeof original !== 'function' || original.__supportCtaLangWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      queueSync();
      return result;
    };
    wrapped.__supportCtaLangWrapped = true;
    window.setLang = wrapped;
    try{ setLang = wrapped; }catch(err){}
  }

  function init(){
    ensureStyles();
    wrapFunction('showPartnerPage');
    wrapFunction('showPitchDeckPage');
    wrapShowPage();
    wrapSetLang();
    queueSync();
  }

  window.__COIN_PROOFPATH_SUPPORT_CTA = {
    refresh:queueSync,
    url:SUPPORT_URL
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
