(function(){
  if(window.__glossary20260413Patch) return;
  window.__glossary20260413Patch = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function resolveLang(lang){
    var value = lang || (typeof currentLang === 'string' && currentLang ? currentLang : 'en');
    return value === 'br' ? 'pt' : value;
  }

  function normalize(value){
    return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function dedupeTerms(list){
    var seen = {};
    return (list || []).filter(function(row){
      var key = normalize(row && row[0]);
      if(!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function getVisibleList(store, lang){
    var resolved = resolveLang(lang);
    if(!store) return [];
    if(Array.isArray(store[lang])) return clone(store[lang]);
    if(Array.isArray(store[resolved])) return clone(store[resolved]);
    if(Array.isArray(store.en)) return clone(store.en);
    return [];
  }

  function getSearchStore(lang){
    var resolved = resolveLang(lang);
    if(window.__repGlossaryEntries && window.__repGlossaryEntries[lang]) return clone(window.__repGlossaryEntries[lang]);
    if(window.__repGlossaryEntries && window.__repGlossaryEntries[resolved]) return clone(window.__repGlossaryEntries[resolved]);
    if(typeof glossaryEntries !== 'undefined' && glossaryEntries[lang]) return clone(glossaryEntries[lang]);
    if(typeof glossaryEntries !== 'undefined' && glossaryEntries[resolved]) return clone(glossaryEntries[resolved]);
    return {};
  }

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var ORDER = ['kyc','fiat','selfCustodyWallet','airdrop','giveawayScam','seedPhrase','rugPull','addressPoisoning'];
  var PACK = {
    en:{
      kyc:{title:'KYC', body:'An identity check a platform may ask for before full account access.'},
      fiat:{title:'Fiat currency', body:'Regular government-issued money such as KRW, USD, or EUR.'},
      selfCustodyWallet:{title:'Self-custody wallet', body:'A wallet where you control the keys and recovery details yourself.'},
      airdrop:{title:'Airdrop', body:'Tokens given out by a project, often for promotion or community activity.'},
      giveawayScam:{title:'Giveaway scam', body:'A fake reward event that tries to make you connect a wallet or send funds first.'},
      seedPhrase:{title:'Seed phrase', body:'The recovery words for a wallet. Never share or upload them.'},
      rugPull:{title:'Rug pull', body:'When a project team suddenly pulls liquidity or disappears with user funds.'},
      addressPoisoning:{title:'Address poisoning', body:'A scam that leaves a lookalike address in your history so you copy the wrong one later.'}
    },
    ko:{
      kyc:{title:'신원 확인', body:'플랫폼이 계정 기능을 모두 열기 전에 요구할 수 있는 본인 확인 절차입니다.'},
      fiat:{title:'법정화폐', body:'원화, 달러, 유로처럼 정부가 발행하는 일반 화폐입니다.'},
      selfCustodyWallet:{title:'자기보관지갑', body:'키와 복구 정보를 사용자가 직접 관리하는 지갑입니다.'},
      airdrop:{title:'에어드롭', body:'프로젝트가 홍보나 커뮤니티 참여 보상으로 토큰을 나눠 주는 방식입니다.'},
      giveawayScam:{title:'경품형사기', body:'무료 보상을 미끼로 지갑 연결이나 선입금을 유도하는 사기입니다.'},
      seedPhrase:{title:'시드문구', body:'지갑을 복구하는 단어 묶음으로 절대 공유하거나 업로드하면 안 됩니다.'},
      rugPull:{title:'러그풀', body:'프로젝트 팀이 유동성을 빼거나 사용자 자금을 남긴 채 갑자기 사라지는 유형입니다.'},
      addressPoisoning:{title:'주소오염공격', body:'거래 기록에 비슷한 주소를 남겨 나중에 잘못 복사하게 만드는 사기 수법입니다.'}
    },
    th:{
      kyc:{title:'การยืนยันตัวตน', body:'การตรวจสอบตัวตนที่แพลตฟอร์มอาจขอก่อนเปิดใช้งานบัญชีเต็มรูปแบบ'},
      fiat:{title:'เงินตราทั่วไป', body:'เงินที่รัฐบาลออกให้ใช้งานทั่วไป เช่น บาท ดอลลาร์ หรือยูโร'},
      selfCustodyWallet:{title:'กระเป๋าเงินดูแลเอง', body:'กระเป๋าที่คุณถือกุญแจและข้อมูลกู้คืนด้วยตัวเอง'},
      airdrop:{title:'แอร์ดรอป', body:'การแจกโทเค็นจากโปรเจกต์เพื่อโปรโมตหรือกระตุ้นชุมชน'},
      giveawayScam:{title:'หลอกแจกฟรี', body:'รางวัลปลอมที่หลอกให้คุณเชื่อมกระเป๋าหรือโอนเงินก่อน'},
      seedPhrase:{title:'วลีกู้คืน', body:'ชุดคำสำหรับกู้คืนกระเป๋า และห้ามแชร์หรืออัปโหลด'},
      rugPull:{title:'ดึงสภาพคล่องหนี', body:'ตอนที่ทีมโปรเจกต์ดึงสภาพคล่องหรือหายไปพร้อมเงินผู้ใช้'},
      addressPoisoning:{title:'วางยาพิษที่อยู่', body:'กลโกงที่ทิ้งที่อยู่คล้ายกันในประวัติให้คุณคัดลอกผิดภายหลัง'}
    },
    id:{
      kyc:{title:'Verifikasi identitas', body:'Pemeriksaan identitas yang mungkin diminta platform sebelum akses penuh dibuka.'},
      fiat:{title:'Uang fiat', body:'Uang resmi pemerintah seperti rupiah, dolar, atau euro.'},
      selfCustodyWallet:{title:'Dompet kustodi mandiri', body:'Dompet di mana Anda sendiri mengendalikan kunci dan data pemulihannya.'},
      airdrop:{title:'Airdrop', body:'Pembagian token dari proyek untuk promosi atau aktivitas komunitas.'},
      giveawayScam:{title:'Penipuan giveaway', body:'Hadiah palsu yang mencoba membuat Anda menghubungkan wallet atau mengirim dana lebih dulu.'},
      seedPhrase:{title:'Frasa seed', body:'Kumpulan kata pemulihan wallet yang tidak boleh pernah dibagikan.'},
      rugPull:{title:'Rug pull', body:'Saat tim proyek tiba-tiba menarik likuiditas atau menghilang membawa dana pengguna.'},
      addressPoisoning:{title:'Peracunan alamat', body:'Modus yang meninggalkan alamat mirip di riwayat agar Anda salah menyalin alamat nanti.'}
    },
    pt:{
      kyc:{title:'Verificacao de identidade', body:'Checagem de identidade que a plataforma pode pedir antes do acesso completo.'},
      fiat:{title:'Moeda fiduciaria', body:'Dinheiro comum emitido por governos, como real, dolar ou euro.'},
      selfCustodyWallet:{title:'Carteira de autocustodia', body:'Carteira em que voce controla as chaves e os dados de recuperacao.'},
      airdrop:{title:'Airdrop', body:'Distribuicao de tokens feita por um projeto para promocao ou atividade da comunidade.'},
      giveawayScam:{title:'Golpe de sorteio', body:'Falso evento de recompensa que tenta fazer voce conectar a carteira ou enviar fundos primeiro.'},
      seedPhrase:{title:'Frase-semente', body:'Palavras de recuperacao da carteira. Nunca compartilhe nem envie isso.'},
      rugPull:{title:'Rug pull', body:'Quando a equipe do projeto puxa a liquidez de repente ou some com fundos de usuarios.'},
      addressPoisoning:{title:'Envenenamento de endereco', body:'Golpe que deixa um endereco parecido no historico para voce copiar o errado depois.'}
    },
    tr:{
      kyc:{title:'Kimlik dogrulama', body:'Platformun tam erisimden once isteyebilecegi temel kimlik kontrolu.'},
      fiat:{title:'Fiat para', body:'TL, dolar veya euro gibi devlet destekli normal para.'},
      selfCustodyWallet:{title:'Kendi saklama cuzdani', body:'Anahtarlari ve kurtarma bilgilerini sizin yonettiginiz cüzdan.'},
      airdrop:{title:'Airdrop', body:'Bir projenin tanitim veya topluluk etkinligi icin token dagitmasi.'},
      giveawayScam:{title:'Sahte hediye dolandiriciligi', body:'Ucretsiz odul gibi gorunup cuzdan baglamanizi ya da para gondermenizi isteyen tuzak.'},
      seedPhrase:{title:'Kurtarma kelimeleri', body:'Cuzdani geri yukleyen kelime grubu. Asla paylasilmamalidir.'},
      rugPull:{title:'Rug pull', body:'Proje ekibinin likiditeyi cekip kullanici fonlariyla ortadan kaybolmasi.'},
      addressPoisoning:{title:'Adres zehirleme', body:'Gecmise benzer adres birakip daha sonra yanlis adresi kopyalatmaya calisan dolandiricilik.'}
    },
    es:{
      kyc:{title:'Verificacion de identidad', body:'Revision de identidad que la plataforma puede pedir antes del acceso completo.'},
      fiat:{title:'Moneda fiduciaria', body:'Dinero normal emitido por gobiernos, como euro, dolar o peso.'},
      selfCustodyWallet:{title:'Cartera de autocustodia', body:'Cartera donde controlas las claves y los datos de recuperacion.'},
      airdrop:{title:'Airdrop', body:'Forma en que un proyecto reparte tokens para promocion o actividad de comunidad.'},
      giveawayScam:{title:'Estafa de sorteo', body:'Falsa recompensa que intenta hacerte conectar la cartera o enviar fondos primero.'},
      seedPhrase:{title:'Frase semilla', body:'Palabras de recuperacion de la cartera. Nunca debes compartirlas ni subirlas.'},
      rugPull:{title:'Rug pull', body:'Cuando el equipo de un proyecto saca la liquidez de repente o desaparece con fondos.'},
      addressPoisoning:{title:'Envenenamiento de direcciones', body:'Estafa que deja una direccion parecida en tu historial para que copies la equivocada despues.'}
    },
    ar:{
      kyc:{title:'التحقق من الهوية', body:'فحص هوية قد تطلبه المنصة قبل فتح كل مزايا الحساب.'},
      fiat:{title:'عملة تقليدية', body:'مال تصدره الحكومة مثل الدولار أو اليورو.'},
      selfCustodyWallet:{title:'محفظة حفظ ذاتي', body:'محفظة تتحكم فيها بالمفاتيح وبيانات الاسترداد بنفسك.'},
      airdrop:{title:'ايردروب', body:'توزيع رموز يقدمه مشروع للترويج أو لنشاط المجتمع.'},
      giveawayScam:{title:'احتيال الجوائز', body:'جائزة مزيفة تحاول دفعك لربط المحفظة أو إرسال المال أولا.'},
      seedPhrase:{title:'عبارة الاسترداد', body:'كلمات استرداد المحفظة ويجب عدم مشاركتها أبدا.'},
      rugPull:{title:'سحب السيولة والهروب', body:'عندما يسحب فريق المشروع السيولة أو يختفي بأموال المستخدمين.'},
      addressPoisoning:{title:'تسميم العنوان', body:'احتيال يترك عنوانا مشابها في السجل لتنسخ العنوان الخطأ لاحقا.'}
    },
    vi:{
      kyc:{title:'Xac minh danh tinh', body:'Buoc kiem tra danh tinh ma nen tang co the yeu cau truoc khi mo day du quyen truy cap.'},
      fiat:{title:'Tien phap dinh', body:'Tien do chinh phu phat hanh nhu VND, USD hoac EUR.'},
      selfCustodyWallet:{title:'Vi tu quan ly', body:'Vi ma ban tu giu khoa va thong tin khoi phuc.'},
      airdrop:{title:'Airdrop', body:'Cach du an phat token de quang ba hoac thu hut cong dong.'},
      giveawayScam:{title:'Lua dao tang qua', body:'Phan thuong gia mao de du ban ket noi vi hoac gui tien truoc.'},
      seedPhrase:{title:'Cum tu khoi phuc', body:'Cac tu dung de khoi phuc vi va tuyet doi khong duoc chia se.'},
      rugPull:{title:'Rug pull', body:'Khi doi ngu du an rut thanh khoan hoac bien mat cung tien cua nguoi dung.'},
      addressPoisoning:{title:'Dau doc dia chi', body:'Chieu lua de lai dia chi giong nhau trong lich su khien ban sao chep nham sau do.'}
    },
    ha:{
      kyc:{title:'Tabbatar da shaida', body:'Tantance kai da dandali zai iya nema kafin ya ba da cikakken damar asusu.'},
      fiat:{title:'Kudin fiat', body:'Kudin gwamnati na yau da kullum kamar naira, dala ko euro.'},
      selfCustodyWallet:{title:'Walat na ajiyar kai', body:'Walat da kai kanka ke kula da makullai da bayanan dawowa.'},
      airdrop:{title:'Airdrop', body:'Hanyar da aiki ke amfani da ita wajen raba token don talla ko motsa al umma.'},
      giveawayScam:{title:'Damfarar kyauta', body:'Kyauta ta bogi da ke son ka hada walat ko ka tura kudi da farko.'},
      seedPhrase:{title:'Kalmomin dawo da walat', body:'Kalmomin dawo da walat ne kuma kada a taba rabawa kowa.'},
      rugPull:{title:'Rug pull', body:'Lokacin da masu aikin su kwashe kudin ruwa ko su bace da kudin masu amfani.'},
      addressPoisoning:{title:'Gurbata adireshi', body:'Dabara ce ta barin adireshi mai kama a tarihi domin ka kwafi wanda ba daidai ba daga baya.'}
    }
  };
  PACK.br = clone(PACK.pt);

  var ALIASES = {
    kyc:['KYC','identity verification','know your customer'],
    fiat:['Fiat currency','fiat','fiat money'],
    selfCustodyWallet:['Self-custody wallet','self custody wallet','self-custody'],
    airdrop:['Airdrop'],
    giveawayScam:['Giveaway scam','giveaway'],
    seedPhrase:['Seed phrase','recovery phrase','backup phrase','mnemonic phrase'],
    rugPull:['Rug pull'],
    addressPoisoning:['Address poisoning','poisoned address']
  };

  LANGS.forEach(function(lang){
    var pack = PACK[resolveLang(lang)] || PACK.en;
    ORDER.forEach(function(key){
      ALIASES[key].push(pack[key].title);
    });
  });

  function matchesKey(term, key){
    return (ALIASES[key] || []).some(function(alias){
      return normalize(alias) === normalize(term);
    });
  }

  function upsertVisibleEntry(list, key, entry){
    var index = -1;
    for(var i = 0; i < list.length; i++){
      if(matchesKey(list[i] && list[i][0], key)){
        index = i;
        break;
      }
    }
    var row = [entry.title, entry.body];
    if(index === -1) list.push(row);
    else list[index] = row;
  }

  var glossaryDataRef = typeof glossaryData !== 'undefined' ? glossaryData : null;
  var glossaryOverridesRef = typeof glossaryOverrides !== 'undefined' ? glossaryOverrides : null;

  LANGS.forEach(function(lang){
    var pack = PACK[resolveLang(lang)] || PACK.en;
    var visibleList = getVisibleList(glossaryOverridesRef, lang);
    if(!visibleList.length) visibleList = getVisibleList(glossaryDataRef, lang);

    ORDER.forEach(function(key){
      upsertVisibleEntry(visibleList, key, pack[key]);
    });
    visibleList = dedupeTerms(visibleList);

    if(glossaryOverridesRef) glossaryOverridesRef[lang] = clone(visibleList);
    if(glossaryDataRef) glossaryDataRef[lang] = clone(visibleList);

    var searchStore = getSearchStore(lang);
    ORDER.forEach(function(key){
      searchStore[key] = { title: pack[key].title, body: pack[key].body };
    });
    if(typeof glossaryEntries !== 'undefined') glossaryEntries[lang] = clone(searchStore);
    window.__repGlossaryEntries = window.__repGlossaryEntries || {};
    window.__repGlossaryEntries[lang] = clone(searchStore);
  });

  if(typeof currentPage !== 'undefined' && currentPage === 'glossary' && typeof showPage === 'function'){
    showPage('glossary');
  } else if(typeof document !== 'undefined'){
    var panel = document.getElementById('glossaryPanel');
    if(panel && typeof renderGlossary === 'function'){
      panel.innerHTML = renderGlossary();
    }
  }
})();