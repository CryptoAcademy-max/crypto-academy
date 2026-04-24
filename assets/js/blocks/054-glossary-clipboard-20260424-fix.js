(function(){
  if(typeof window === "undefined" || window.__glossaryClipboard20260424Fix) return;
  window.__glossaryClipboard20260424Fix = true;

  function normalize(value){
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  var STORE = window.__UNIFIED_GLOSSARY;
  if(!STORE) return;

  var PACK = {
    en:["Clipboard Swapping Attack","An attack in which malware secretly replaces a copied wallet address with a different one before you paste it. If you do not recheck the address before sending, you may transfer assets to the wrong destination."],
    ko:["클립보드 바꿔치기 공격","사용자가 복사한 지갑 주소를 악성 프로그램이 다른 주소로 몰래 바꿔 붙여넣게 만드는 공격입니다. 전송 전에 주소를 다시 확인하지 않으면 잘못된 주소로 자산을 보낼 수 있습니다."],
    th:["การโจมตีสลับคลิปบอร์ด","เป็นการโจมตีที่มัลแวร์แอบเปลี่ยนที่อยู่กระเป๋าเงินที่คุณคัดลอกไว้ให้เป็นอีกที่อยู่หนึ่งก่อนวาง หากไม่ตรวจสอบที่อยู่อีกครั้งก่อนส่ง คุณอาจโอนสินทรัพย์ไปยังปลายทางที่ผิดได้"],
    id:["Serangan pertukaran clipboard","Serangan ini terjadi ketika malware diam-diam mengganti alamat wallet yang sudah Anda salin dengan alamat lain sebelum ditempel. Jika Anda tidak memeriksa ulang alamat sebelum mengirim, aset bisa terkirim ke tujuan yang salah."],
    pt:["Ataque de troca da área de transferência","É um ataque em que um malware troca em segredo o endereço de carteira que você copiou por outro antes de você colar. Se você não conferir o endereço novamente antes de enviar, pode transferir ativos para o destino errado."],
    tr:["Pano değiştirme saldırısı","Bu saldırıda kötü amaçlı yazılım, kopyaladığınız cüzdan adresini siz yapıştırmadan önce gizlice başka bir adresle değiştirir. Göndermeden önce adresi yeniden kontrol etmezseniz varlıklarınızı yanlış adrese gönderebilirsiniz."],
    es:["Ataque de sustitución del portapapeles","Es un ataque en el que un malware reemplaza en secreto la dirección de wallet que copiaste por otra antes de que la pegues. Si no vuelves a revisar la dirección antes de enviar, puedes transferir activos al destino equivocado."],
    ar:["هجوم تبديل الحافظة","هو هجوم يستبدل فيه برنامج خبيث عنوان المحفظة الذي نسخته بعنوان آخر بشكل سري قبل أن تلصقه. إذا لم تراجع العنوان مرة أخرى قبل الإرسال فقد تنقل الأصول إلى وجهة خاطئة."],
    vi:["Tấn công tráo clipboard","Đây là kiểu tấn công mà phần mềm độc hại bí mật thay địa chỉ ví bạn đã sao chép bằng một địa chỉ khác trước khi bạn dán. Nếu không kiểm tra lại địa chỉ trước khi gửi, bạn có thể chuyển tài sản đến sai nơi."],
    ha:["Harin canja adireshi a allon kwafi","Hari ne da muguwar manhaja ke canja adireshin walat da ka kwafa da wani adireshi daban a boye kafin ka manna shi. Idan ba ka sake duba adireshin kafin aikawa ba, kana iya tura kadarori zuwa wurin da ba daidai ba."]
  };
  PACK.br = PACK.pt;

  var ALIASES = [
    "clipboard swapping attack",
    "클립보드 바꿔치기 공격",
    "การโจมตีสลับคลิปบอร์ด",
    "serangan pertukaran clipboard",
    "ataque de troca da área de transferência",
    "ataque de troca da area de transferencia",
    "pano değiştirme saldırısı",
    "pano degistirme saldirisi",
    "ataque de sustitución del portapapeles",
    "ataque de sustitucion del portapapeles",
    "هجوم تبديل الحافظة",
    "tấn công tráo clipboard",
    "tan cong trao clipboard",
    "harin canja adireshi a allon kwafi"
  ];

  function isClipboardTerm(term){
    var value = normalize(term);
    for(var i = 0; i < ALIASES.length; i++){
      if(value === normalize(ALIASES[i])) return true;
    }
    return false;
  }

  function upsertIntoList(list, row){
    if(!Array.isArray(list)) return;
    var foundIndex = -1;
    for(var i = 0; i < list.length; i++){
      if(isClipboardTerm(list[i] && list[i][0])){
        foundIndex = i;
        break;
      }
    }
    if(foundIndex >= 0){
      list[foundIndex] = [row[0], row[1]];
      return;
    }
    var insertAt = Math.max(list.length - 1, 0);
    list.splice(insertAt, 0, [row[0], row[1]]);
  }

  Object.keys(STORE).forEach(function(lang){
    var row = PACK[lang] || PACK.en;
    if(!Array.isArray(STORE[lang])) return;
    upsertIntoList(STORE[lang], row);
  });

  if(typeof window.__applyUnifiedGlossary === "function"){
    try { window.__applyUnifiedGlossary(); } catch(e){}
  } else if(typeof renderGlossary === "function"){
    try {
      var panel = document.getElementById("glossaryPanel");
      if(panel) panel.innerHTML = renderGlossary();
    } catch(e){}
  }

  if(typeof currentPage !== "undefined" && currentPage === "glossary" && typeof showPage === "function"){
    try { showPage("glossary"); } catch(e){}
  }
})();
