(function(){
  if(window.__lessonSevenFinal) return;
  window.__lessonSevenFinal = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function lessonSevenLang(lang){
    var target = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en') || 'en';
    return target === 'br' ? 'pt' : target;
  }

  var lessonSevenLocalePack = {};

  lessonSevenLocalePack.en = {
    ui:{'nav.l7':'Spotting Crypto Scams','nav.l7sub':'Simple scam red flags','topic.scams':'How do I spot crypto scams?'},
    homeDesc:'Use this page as your starting point. You can open Lessons 1-7 directly, review key terms, and keep moving at your own pace.',
    day7:'Day 7',
    quizTitle:'Test Your Understanding',
    lesson:{
      cat:'Safety',
      title:'Common Scams & How to Spot Them',
      intro:'Crypto scams often work because they look urgent, friendly, or official. You do not need to memorize every trick. You only need a calm routine: pause, verify, and avoid giving away anything that controls your wallet.',
      sections:[
        {h:'Why scams work so often',ps:['Scam messages usually mix pressure and easy rewards. When people feel rushed, they often skip the slow safety checks that would have protected them.']},
        {h:'Fake airdrops and giveaway scams',ps:['A fake reward can ask you to connect a wallet, approve a suspicious action, or send a small payment first. If the offer appears in a DM or strange link, slow down immediately.']},
        {h:'Impersonation and fake support',ps:['Some scams copy the style of a famous project, exchange, or support account. Real support teams do not ask for your seed phrase or tell you to move money in a rush.']},
        {h:'Rug pulls and promises that sound too easy',ps:['If a project promises guaranteed profit, no risk, or instant rewards, treat that as a warning sign. Easy money language often hides weak or dishonest projects.']},
        {h:'A simple safety habit before you click or pay',ps:['Before you click a link, connect a wallet, or send funds, stop for a moment. Re-check the account name, full domain, wallet request, and the official source you opened by yourself.']}
      ],
      defs:[
        ['Airdrop','A way a project distributes tokens to users.'],
        ['Giveaway scam','A fake reward event that tries to make you connect a wallet or send funds first.'],
        ['Seed phrase','The recovery words for your wallet. Never type or share them on random sites.'],
        ['Rug pull','A situation where the team or controller suddenly removes funds or abandons the project.']
      ],
      example:'You receive a DM that looks like a famous project and promises a reward if you connect your wallet now. Instead of clicking, you open the official website yourself, compare the domain, and ignore the message.',
      mistakes:[
        'Trusting an account just because it looks famous or verified.',
        'Rushing because a message says the offer ends soon.',
        'Checking only the project name and not the full domain.',
        'Forgetting that a seed phrase should never be entered into random pages.'
      ],
      faqs:[
        ['Are all airdrops scams?','No. Some are real, but even real events should be checked through official websites and official announcements you open yourself.'],
        ['Why should I never enter my seed phrase?','Because anyone who gets it can control the wallet and move the funds.'],
        ['How can I verify an official account or link?','Do not trust the link inside a DM. Re-open the official website or documentation yourself and compare the address carefully.']
      ],
      checkpoints:[
        'I can name a few common scam red flags.',
        'I understand why urgency and guaranteed profit are warning signs.',
        'I know a seed phrase should never be typed into random websites.',
        'I know how to re-open an official source by myself before I click.'
      ],
      quiz:[
        ['Question 1. Why is an urgent reward message a warning sign?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Because it helps you slow down</div><div>B. Because pressure can make you skip checks</div><div>C. Because it proves the project is official</div></div>','Answer: B<br>Explanation: Urgency tries to move you before you verify the details.'],
        ['Question 2. If someone asks for your seed phrase, how should you treat it?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. As a normal support step</div><div>B. As a likely scam signal</div><div>C. As a fast way to receive rewards</div></div>','Answer: B<br>Explanation: Seed phrase requests are one of the clearest scam signals in crypto.'],
        ['Question 3. What is the safest way to check a suspicious link?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Open it quickly before it expires</div><div>B. Ask the scammer again in DM</div><div>C. Open the official website yourself and compare the domain</div></div>','Answer: C<br>Explanation: Opening the official source yourself is safer than trusting a link inside a message.']
      ],
      sources:[
        ['FTC crypto scam guidance','Official beginner-friendly guidance about common crypto scams and the warning signs behind them.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['FTC consumer alert on fake recovery and protection claims','A practical reminder that urgent payment requests and fake help messages are common scam patterns.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Stop','desc':'Do not click or send anything while you still feel pressure.'},
        {title:'Check the offer','desc':'Ask what is really being promised and why it feels rushed.'},
        {title:'Check the account and domain','desc':'Compare the profile name, handle, and full website address.'},
        {title:'Check the wallet request','desc':'Never approve strange prompts or enter your seed phrase.'},
        {title:'Open the official source yourself','desc':'Find the real website or docs on your own before you act.'}
      ]
    },
    understanding:{q:'What is the safest response to an urgent crypto reward message from an account you do not know well?',opts:['Connect your wallet immediately','Pause and verify through official sources you open yourself','Send a small amount first to test it'],correct:1,fb:'Correct! The safest response is to pause and re-check the offer through official sources you open yourself.'}
  };

  lessonSevenLocalePack.ko = {
    ui:{'nav.l7':'암호화폐 사기 구별하기','nav.l7sub':'초보자를 위한 경고 신호','topic.scams':'암호화폐 사기는 어떻게 구별할까?'},
    homeDesc:'이 페이지를 시작점으로 사용하세요. 레슨 1-7을 바로 열고, 핵심 용어를 다시 보고, 자신의 속도로 학습할 수 있습니다.',
    day7:'7일차',
    quizTitle:'이해도 확인',
    lesson:{
      cat:'보안',
      title:'암호화폐 사기, 어떻게 구별할까',
      intro:'암호화폐 사기는 급한 분위기, 친절한 말투, 공식처럼 보이는 화면으로 다가오는 경우가 많습니다. 모든 수법을 외울 필요는 없습니다. 잠깐 멈추고, 다시 확인하고, 지갑 통제권을 넘기는 행동을 피하는 습관이 더 중요합니다.',
      sections:[
        {h:'왜 사기는 자주 통하는가',ps:['사기 메시지는 보통 압박과 쉬운 보상을 함께 보여 줍니다. 사람이 급해지면 원래 했어야 할 확인 단계를 건너뛰기 쉽습니다.']},
        {h:'가짜 에어드롭과 경품형 사기',ps:['무료 보상처럼 보이지만 지갑 연결, 승인, 선입금을 유도할 수 있습니다. 특히 DM으로 온 링크나 낯선 페이지는 한 번 더 의심해야 합니다.']},
        {h:'사칭 계정과 가짜 고객지원',ps:['유명 프로젝트, 거래소, 운영진처럼 보이는 계정이 먼저 연락하는 경우가 있습니다. 진짜 지원팀은 시드 문구를 요구하지 않습니다.']},
        {h:'너무 쉬워 보이는 약속의 위험',ps:['수익 보장, 손실 없음, 바로 두 배 같은 말은 대표적인 경고 신호입니다. 설명이 지나치게 쉬우면 오히려 더 천천히 확인해야 합니다.']},
        {h:'클릭하거나 보내기 전에 멈추는 습관',ps:['링크, 도메인, 계정 이름, 승인 요청, 공식 출처를 한 번 더 확인하세요. 서두르지 않는 것만으로도 많은 실수를 줄일 수 있습니다.']}
      ],
      defs:[
        ['에어드롭','프로젝트가 사용자에게 토큰을 나눠 주는 배포 방식입니다.'],
        ['경품형 사기','무료 보상처럼 보이지만 지갑 연결이나 전송을 유도하는 사기입니다.'],
        ['시드 문구','지갑 복구용 핵심 단어 묶음입니다. 절대 입력하거나 공유하면 안 됩니다.'],
        ['러그 풀','운영 주체가 갑자기 자금을 빼거나 프로젝트를 버리는 유형입니다.']
      ],
      example:'유명 프로젝트를 사칭한 DM이 와서 보상을 받으려면 지금 지갑을 연결하라고 합니다. 사용자는 바로 누르지 않고 공식 사이트를 직접 열어 도메인을 다시 확인한 뒤, DM 링크를 무시합니다.',
      mistakes:[
        '유명해 보이는 계정이라고 바로 믿는 것',
        '지금 바로 끝난다는 말에 압박을 느끼고 서두르는 것',
        '프로젝트 이름만 보고 전체 도메인을 끝까지 확인하지 않는 것',
        '시드 문구는 아무 사이트에도 입력하면 안 된다는 원칙을 잊는 것'
      ],
      faqs:[
        ['모든 에어드롭이 사기인가요?','아니요. 하지만 진짜 이벤트도 공식 사이트와 공식 공지에서 다시 확인해야 합니다.'],
        ['왜 시드 문구를 절대 입력하면 안 되나요?','시드 문구를 알면 지갑 전체를 통제할 수 있기 때문입니다.'],
        ['공식 계정인지 어떻게 다시 확인하나요?','DM 링크를 누르지 말고, 저장해 둔 공식 사이트나 문서를 직접 다시 열어 확인하세요.']
      ],
      checkpoints:[
        '대표적인 사기 경고 신호를 몇 가지 말할 수 있습니다.',
        '긴급함과 수익 보장이 왜 위험한지 이해합니다.',
        '시드 문구는 아무 페이지에도 입력하면 안 된다는 점을 압니다.',
        '의심스러운 링크를 직접 다시 확인하는 방법을 압니다.'
      ],
      quiz:[
        ['문항 1. 긴급한 보상 메시지가 위험 신호인 이유는 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 사용자를 더 차분하게 만들기 때문</div><div>B. 확인 없이 행동하게 만들 수 있기 때문</div><div>C. 공식 프로젝트라는 증거이기 때문</div></div>','정답: B<br>해설: 긴급함은 사용자가 확인 단계를 건너뛰게 만들기 쉽습니다.'],
        ['문항 2. 누군가 시드 문구를 요구하면 어떻게 판단해야 하나요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 정상적인 고객지원 절차로 본다</div><div>B. 강한 사기 신호로 본다</div><div>C. 빠른 보상을 받는 방법으로 본다</div></div>','정답: B<br>해설: 시드 문구 요구는 암호화폐에서 가장 분명한 사기 신호 중 하나입니다.'],
        ['문항 3. 수상한 링크는 어떻게 다시 확인하는 것이 가장 안전한가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 사라지기 전에 바로 눌러 본다</div><div>B. 보낸 사람에게 DM으로 다시 물어본다</div><div>C. 공식 사이트를 직접 열어 도메인을 비교한다</div></div>','정답: C<br>해설: 메시지 속 링크보다, 사용자가 직접 연 공식 출처가 더 안전합니다.']
      ],
      sources:[
        ['FTC 암호화폐 사기 안내','초보자가 자주 마주치는 암호화폐 사기와 경고 신호를 쉽게 정리한 공식 자료입니다.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['FTC 소비자 경고 안내','긴급 송금 요구나 가짜 보호 메시지가 왜 위험한지 다시 확인할 수 있는 자료입니다.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'멈추기',desc:'압박을 느끼는 순간에는 클릭이나 전송부터 멈춥니다.'},
        {title:'제안 확인하기',desc:'무엇을 준다고 하는지, 왜 이렇게 급한지 먼저 봅니다.'},
        {title:'계정과 도메인 확인',desc:'계정 이름, 아이디, 사이트 주소를 끝까지 비교합니다.'},
        {title:'지갑 요청 점검',desc:'이상한 승인 요청이나 시드 문구 입력 요구는 거절합니다.'},
        {title:'공식 출처 다시 보기',desc:'메시지 링크 대신 공식 사이트나 문서를 직접 다시 엽니다.'}
      ]
    },
    understanding:{q:'잘 모르는 계정이 긴급한 보상 DM을 보냈을 때 가장 안전한 행동은 무엇인가요?',opts:['바로 지갑을 연결한다','직접 연 공식 출처에서 다시 확인한다','소액을 먼저 보내 본다'],correct:1,fb:'정답입니다. 가장 안전한 행동은 잠깐 멈추고, 사용자가 직접 연 공식 출처에서 다시 확인하는 것입니다.'}
  };

  lessonSevenLocalePack.th = {
    ui:{'nav.l7':'แยกแยะคริปโตสแกม','nav.l7sub':'สัญญาณเตือนสำหรับมือใหม่','topic.scams':'จะสังเกตคริปโตสแกมได้อย่างไร?'},
    homeDesc:'ใช้หน้านี้เป็นจุดเริ่มต้นของคุณ เปิดบทเรียน 1-7 ได้ทันที ทบทวนคำสำคัญ และเรียนตามจังหวะของตัวเองได้เลย',
    day7:'วันที่ 7',
    quizTitle:'ทดสอบความเข้าใจ',
    lesson:{
      cat:'ความปลอดภัย',
      title:'คริปโตสแกมที่พบบ่อย และวิธีสังเกต',
      intro:'คริปโตสแกมมักใช้ความเร่งด่วน ความเป็นกันเอง หรือภาพลักษณ์ที่ดูเป็นทางการ คุณไม่จำเป็นต้องจำทุกกลโกง แค่มีนิสัยหยุดก่อน ตรวจสอบก่อน และไม่ให้สิ่งที่ควบคุมกระเป๋าเงินของคุณก็ช่วยได้มากแล้ว',
      sections:[
        {h:'ทำไมสแกมถึงใช้ได้ผลบ่อย',ps:['ข้อความหลอกลวงมักผสมแรงกดดันกับรางวัลที่ดูง่ายเกินจริง เมื่อคนรีบ คนมักข้ามขั้นตอนตรวจสอบที่ควรทำ']},
        {h:'Airdrop ปลอมและ giveaway scam',ps:['ของรางวัลปลอมอาจหลอกให้เชื่อมกระเป๋า อนุมัติรายการแปลก หรือโอนเงินก่อน ถ้าลิงก์มาจาก DM หรือเว็บแปลก ควรชะลอทันที']},
        {h:'บัญชีปลอมและฝ่ายช่วยเหลือปลอม',ps:['บางสแกมทำตัวเหมือนโปรเจกต์ดัง เว็บเทรด หรือฝ่ายช่วยเหลือจริง ฝ่ายช่วยเหลือจริงจะไม่ขอ seed phrase จากคุณ']},
        {h:'Rug pull และคำสัญญาที่ดูง่ายเกินไป',ps:['ถ้ามีการพูดว่ากำไรการันตี ไม่มีความเสี่ยง หรือได้เงินเร็วมาก ให้มองเป็นสัญญาณเตือนก่อน']},
        {h:'นิสัยง่าย ๆ ก่อนคลิก เชื่อม หรือโอน',ps:['ก่อนคลิกลิงก์ เชื่อมกระเป๋า หรือส่งเงิน ให้หยุดสักครู่ แล้วตรวจชื่อบัญชี โดเมนเต็ม คำขออนุมัติ และแหล่งทางการที่คุณเปิดเองอีกครั้ง']}
      ],
      defs:[
        ['Airdrop','วิธีที่โปรเจกต์แจกโทเค็นให้ผู้ใช้'],
        ['Giveaway scam','กิจกรรมแจกของปลอมที่พยายามหลอกให้เชื่อมกระเป๋าหรือโอนเงินก่อน'],
        ['Seed phrase','ชุดคำกู้คืนกระเป๋าเงิน ห้ามพิมพ์หรือแชร์ในเว็บสุ่ม'],
        ['Rug pull','กรณีที่ทีมงานหรือผู้ควบคุมดึงเงินออกหรือทิ้งโปรเจกต์กะทันหัน']
      ],
      example:'คุณได้รับ DM ที่ดูเหมือนมาจากโปรเจกต์ดังและบอกว่ามีรางวัล ถ้าต้องการรับให้เชื่อมกระเป๋าทันที คุณไม่กดลิงก์ แต่เปิดเว็บทางการเอง ตรวจโดเมน และปล่อยข้อความนั้นไป',
      mistakes:['เชื่อบัญชีที่ดูดังทันที','รีบเพราะคำว่าเดี๋ยวหมดเวลา','ดูแค่ชื่อโปรเจกต์แต่ไม่ดูโดเมนเต็ม','ลืมหลักว่าห้ามกรอก seed phrase ที่ไหนก็ตาม'],
      faqs:[
        ['Airdrop ทุกอันเป็นสแกมหรือไม่?','ไม่ใช่ แต่กิจกรรมจริงก็ควรตรวจผ่านเว็บทางการและประกาศทางการที่คุณเปิดเอง'],
        ['ทำไมจึงห้ามกรอก seed phrase?','เพราะถ้าใครได้ไป เขาจะควบคุมกระเป๋าเงินของคุณได้ทั้งหมด'],
        ['จะตรวจว่าบัญชีหรือลิงก์เป็นทางการได้อย่างไร?','อย่าเชื่อลิงก์ใน DM ให้เปิดเว็บหรือเอกสารทางการเองแล้วเปรียบเทียบที่อยู่']
      ],
      checkpoints:['ฉันบอกสัญญาณเตือนของสแกมได้หลายข้อ','ฉันเข้าใจว่าความเร่งด่วนและกำไรการันตีเป็นสัญญาณอันตราย','ฉันรู้ว่า seed phrase ห้ามกรอกในเว็บสุ่ม','ฉันรู้วิธีเปิดแหล่งทางการเองก่อนคลิก'],
      quiz:[
        ['คำถาม 1. ทำไมข้อความรางวัลที่เร่งรีบจึงเป็นสัญญาณเตือน?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. เพราะช่วยให้คุณใจเย็น</div><div>B. เพราะแรงกดดันทำให้ข้ามการตรวจสอบ</div><div>C. เพราะพิสูจน์ว่าโปรเจกต์เป็นของจริง</div></div>','คำตอบ: B<br>คำอธิบาย: ความเร่งด่วนทำให้คนตัดสินใจก่อนตรวจสอบรายละเอียด'],
        ['คำถาม 2. ถ้ามีคนขอ seed phrase ควรมองอย่างไร?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. เป็นขั้นตอนช่วยเหลือปกติ</div><div>B. เป็นสัญญาณสแกมที่แรงมาก</div><div>C. เป็นวิธีรับรางวัลเร็วขึ้น</div></div>','คำตอบ: B<br>คำอธิบาย: การขอ seed phrase เป็นหนึ่งในสัญญาณสแกมที่ชัดที่สุด'],
        ['คำถาม 3. วิธีที่ปลอดภัยที่สุดในการตรวจลิงก์น่าสงสัยคืออะไร?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. รีบเปิดก่อนลิงก์หมดอายุ</div><div>B. ถามคนส่งซ้ำใน DM</div><div>C. เปิดเว็บทางการเองแล้วเทียบโดเมน</div></div>','คำตอบ: C<br>คำอธิบาย: การเปิดแหล่งทางการด้วยตัวเองปลอดภัยกว่าการเชื่อลิงก์ในข้อความ']
      ],
      sources:[
        ['คู่มือ FTC เรื่องคริปโตสแกม','คู่มืออย่างเป็นทางการที่อธิบายคริปโตสแกมที่พบบ่อยและสัญญาณเตือนสำหรับมือใหม่','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['คำเตือนผู้บริโภคจาก FTC','เตือนเรื่องข้อความช่วยเหลือปลอมและคำขอชำระเงินแบบเร่งด่วนที่พบบ่อย','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'หยุดก่อน',desc:'อย่าคลิกหรือโอนอะไรขณะยังรู้สึกถูกกดดัน'},
        {title:'ตรวจข้อเสนอ',desc:'ถามก่อนว่าเขาสัญญาอะไร และทำไมต้องรีบ'},
        {title:'ตรวจบัญชีและโดเมน',desc:'เทียบชื่อบัญชี ไอดี และที่อยู่เว็บแบบเต็ม'},
        {title:'ตรวจคำขอกระเป๋าเงิน',desc:'อย่าอนุมัติคำขอแปลกหรือกรอก seed phrase'},
        {title:'เปิดแหล่งทางการเอง',desc:'หาเว็บหรือเอกสารจริงด้วยตัวเองก่อนลงมือ'}
      ]
    },
    understanding:{q:'ถ้ามีข้อความรางวัลคริปโตเร่งด่วนจากบัญชีที่คุณไม่คุ้นเคย การตอบสนองที่ปลอดภัยที่สุดคืออะไร?',opts:['รีบเชื่อมกระเป๋าทันที','หยุดและตรวจผ่านแหล่งทางการที่คุณเปิดเอง','ลองส่งเงินจำนวนน้อยก่อน'],correct:1,fb:'ถูกต้อง! วิธีที่ปลอดภัยที่สุดคือหยุดก่อน แล้วตรวจสอบผ่านแหล่งทางการที่คุณเปิดเอง'}
  };

  lessonSevenLocalePack.id = {
    ui:{'nav.l7':'Mengenali Penipuan Crypto','nav.l7sub':'Tanda bahaya untuk pemula','topic.scams':'Bagaimana cara mengenali penipuan crypto?'},
    homeDesc:'Gunakan halaman ini sebagai titik awal. Buka Pelajaran 1-7 langsung, lihat kembali istilah penting, dan belajar sesuai ritme Anda.',
    day7:'Hari 7',
    quizTitle:'Uji Pemahaman',
    lesson:{
      cat:'Keamanan',
      title:'Penipuan Crypto yang Umum dan Cara Mengenalinya',
      intro:'Penipuan crypto sering berhasil karena terlihat mendesak, ramah, atau resmi. Anda tidak perlu menghafal semua trik. Yang lebih penting adalah berhenti sejenak, memeriksa ulang, dan tidak memberikan apa pun yang mengendalikan dompet Anda.',
      sections:[
        {h:'Mengapa penipuan sering berhasil',ps:['Pesan penipuan biasanya menggabungkan tekanan dan hadiah yang terlihat mudah. Saat orang merasa tergesa, mereka lebih mudah melewati pemeriksaan penting.']},
        {h:'Airdrop palsu dan giveaway scam',ps:['Hadiah palsu bisa meminta Anda menghubungkan dompet, menyetujui tindakan mencurigakan, atau mengirim dana lebih dulu. Jika tautan datang dari DM, perlambat langkah Anda.']},
        {h:'Penyamaran dan dukungan palsu',ps:['Sebagian penipu meniru proyek terkenal, bursa, atau akun dukungan. Tim dukungan asli tidak akan meminta seed phrase Anda.']},
        {h:'Rug pull dan janji yang terlalu mudah',ps:['Jika sebuah proyek menjanjikan untung pasti, tanpa risiko, atau hasil sangat cepat, anggap itu sebagai tanda peringatan.']},
        {h:'Kebiasaan sederhana sebelum klik atau kirim',ps:['Sebelum klik tautan, menghubungkan dompet, atau mengirim dana, berhenti sebentar. Cek lagi nama akun, domain lengkap, permintaan wallet, dan sumber resmi yang Anda buka sendiri.']}
      ],
      defs:[
        ['Airdrop','Cara proyek membagikan token kepada pengguna.'],
        ['Giveaway scam','Acara hadiah palsu yang mencoba membuat Anda menghubungkan dompet atau mengirim dana terlebih dahulu.'],
        ['Seed phrase','Kata pemulihan untuk dompet. Jangan pernah mengetik atau membagikannya di situs acak.'],
        ['Rug pull','Situasi ketika tim atau pengendali tiba-tiba menarik dana atau meninggalkan proyek.']
      ],
      example:'Anda menerima DM yang terlihat seperti dari proyek terkenal dan menjanjikan hadiah jika segera menghubungkan dompet. Anda tidak langsung klik, tetapi membuka situs resmi sendiri, membandingkan domain, lalu mengabaikan pesan itu.',
      mistakes:['Langsung percaya karena akun terlihat terkenal','Terburu-buru karena ada kata “sekarang juga”','Hanya melihat nama proyek tanpa memeriksa domain penuh','Lupa bahwa seed phrase tidak boleh dimasukkan di halaman acak'],
      faqs:[
        ['Apakah semua airdrop itu penipuan?','Tidak. Namun acara yang asli pun tetap harus diverifikasi lewat situs dan pengumuman resmi yang Anda buka sendiri.'],
        ['Mengapa seed phrase tidak boleh dimasukkan?','Karena siapa pun yang mendapatkannya bisa mengendalikan dompet Anda.'],
        ['Bagaimana cara memeriksa akun atau tautan resmi?','Jangan percaya tautan dari DM. Buka sendiri situs atau dokumentasi resmi lalu bandingkan alamatnya.']
      ],
      checkpoints:['Saya bisa menyebut beberapa tanda bahaya penipuan','Saya paham bahwa urgensi dan profit pasti adalah sinyal bahaya','Saya tahu seed phrase tidak boleh diketik di situs acak','Saya tahu cara membuka sumber resmi sendiri sebelum klik'],
      quiz:[
        ['Pertanyaan 1. Mengapa pesan hadiah yang mendesak adalah tanda bahaya?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Karena membuat Anda lebih tenang</div><div>B. Karena tekanan bisa membuat Anda melewati pemeriksaan</div><div>C. Karena membuktikan proyek itu resmi</div></div>','Jawaban: B<br>Penjelasan: Rasa terburu-buru sering membuat orang bertindak sebelum memeriksa detail.'],
        ['Pertanyaan 2. Jika seseorang meminta seed phrase, bagaimana Anda harus menilainya?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Langkah dukungan yang normal</div><div>B. Sinyal penipuan yang kuat</div><div>C. Cara cepat mendapat hadiah</div></div>','Jawaban: B<br>Penjelasan: Permintaan seed phrase adalah salah satu tanda penipuan paling jelas dalam crypto.'],
        ['Pertanyaan 3. Apa cara paling aman untuk memeriksa tautan mencurigakan?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Segera buka sebelum kedaluwarsa</div><div>B. Tanya lagi lewat DM</div><div>C. Buka situs resmi sendiri dan bandingkan domain</div></div>','Jawaban: C<br>Penjelasan: Membuka sumber resmi sendiri lebih aman daripada mempercayai tautan di pesan.']
      ],
      sources:[
        ['Panduan FTC tentang penipuan crypto','Panduan resmi yang menjelaskan pola penipuan crypto umum dan tanda bahaya untuk pemula.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['Peringatan konsumen FTC','Pengingat praktis bahwa pesan bantuan palsu dan permintaan pembayaran mendesak sering muncul dalam penipuan.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Berhenti dulu',desc:'Jangan klik atau kirim apa pun saat masih merasa tertekan.'},
        {title:'Periksa tawarannya',desc:'Tanyakan apa yang dijanjikan dan mengapa harus terburu-buru.'},
        {title:'Periksa akun dan domain',desc:'Bandingkan nama akun, handle, dan alamat situs lengkap.'},
        {title:'Periksa permintaan wallet',desc:'Jangan setujui permintaan aneh atau masukkan seed phrase.'},
        {title:'Buka sumber resmi sendiri',desc:'Cari situs atau dokumentasi resmi sendiri sebelum bertindak.'}
      ]
    },
    understanding:{q:'Apa respons paling aman terhadap pesan hadiah crypto yang mendesak dari akun yang tidak Anda kenal baik?',opts:['Segera hubungkan dompet','Berhenti dan verifikasi lewat sumber resmi yang Anda buka sendiri','Kirim dana kecil lebih dulu'],correct:1,fb:'Benar! Respons paling aman adalah berhenti dan memeriksa ulang lewat sumber resmi yang Anda buka sendiri.'}
  };

  lessonSevenLocalePack.pt = {
    ui:{'nav.l7':'Identificar golpes cripto','nav.l7sub':'Sinais simples de alerta','topic.scams':'Como identificar golpes com cripto?'},
    homeDesc:'Use esta página como ponto de partida. Você pode abrir as Lições 1-7, revisar termos importantes e avançar no seu próprio ritmo.',
    day7:'Dia 7',
    quizTitle:'Teste seu Entendimento',
    lesson:{
      cat:'Segurança',
      title:'Golpes comuns com cripto e como identificá-los',
      intro:'Golpes com cripto costumam funcionar porque parecem urgentes, amigáveis ou oficiais. Você não precisa decorar todos os truques. O mais importante é pausar, verificar e não entregar nada que dê controle da sua carteira.',
      sections:[
        {h:'Por que golpes funcionam tantas vezes',ps:['Mensagens de golpe misturam pressão com recompensa fácil. Quando alguém se sente apressado, costuma pular as verificações mais importantes.']},
        {h:'Airdrops falsos e golpes de sorteio',ps:['Uma recompensa falsa pode pedir conexão da carteira, aprovação suspeita ou envio prévio de fundos. Se o link veio por DM, desacelere imediatamente.']},
        {h:'Perfis falsos e suporte falso',ps:['Alguns golpes copiam o estilo de projetos famosos, corretoras ou contas de suporte. Suporte real não pede sua seed phrase.']},
        {h:'Rug pulls e promessas fáceis demais',ps:['Se um projeto promete lucro garantido, risco zero ou retorno muito rápido, trate isso como sinal de alerta.']},
        {h:'Um hábito simples antes de clicar ou pagar',ps:['Antes de clicar em um link, conectar a carteira ou enviar fundos, pare por um momento. Confira novamente conta, domínio, pedido da carteira e a fonte oficial aberta por você.']}
      ],
      defs:[
        ['Airdrop','Forma de um projeto distribuir tokens para usuários.'],
        ['Golpe de sorteio','Evento falso de recompensa que tenta fazer você conectar a carteira ou enviar fundos antes.'],
        ['Seed phrase','Palavras de recuperação da carteira. Nunca digite ou compartilhe em páginas aleatórias.'],
        ['Rug pull','Situação em que a equipe ou o controlador retira os fundos ou abandona o projeto de repente.']
      ],
      example:'Você recebe uma DM que parece vir de um projeto famoso e promete uma recompensa se conectar a carteira agora. Em vez de clicar, você abre o site oficial por conta própria, compara o domínio e ignora a mensagem.',
      mistakes:['Confiar de imediato porque a conta parece famosa','Agir com pressa porque a mensagem diz “agora”','Olhar apenas o nome do projeto e não o domínio completo','Esquecer que seed phrase nunca deve ser digitada em páginas aleatórias'],
      faqs:[
        ['Todo airdrop é golpe?','Não. Alguns são reais, mas até eventos legítimos devem ser verificados em sites e anúncios oficiais abertos por você.'],
        ['Por que nunca devo inserir minha seed phrase?','Porque qualquer pessoa que a tenha pode controlar a sua carteira.'],
        ['Como verificar se um perfil ou link é oficial?','Não confie no link enviado por DM. Abra o site ou a documentação oficial por conta própria e compare o endereço.']
      ],
      checkpoints:['Consigo citar alguns sinais comuns de golpe','Entendo por que urgência e lucro garantido são alertas','Sei que seed phrase nunca deve ser digitada em sites aleatórios','Sei como abrir a fonte oficial por conta própria antes de clicar'],
      quiz:[
        ['Pergunta 1. Por que uma mensagem de recompensa urgente é um sinal de alerta?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Porque ajuda você a ficar mais calmo</div><div>B. Porque a pressão pode fazer você pular verificações</div><div>C. Porque prova que o projeto é oficial</div></div>','Resposta: B<br>Explicação: A urgência tenta empurrar você para agir antes de verificar os detalhes.'],
        ['Pergunta 2. Se alguém pedir sua seed phrase, como você deve interpretar isso?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Como um passo normal de suporte</div><div>B. Como um forte sinal de golpe</div><div>C. Como um jeito rápido de receber recompensa</div></div>','Resposta: B<br>Explicação: Pedidos de seed phrase são um dos sinais de golpe mais claros no mundo cripto.'],
        ['Pergunta 3. Qual é a forma mais segura de verificar um link suspeito?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Abrir rápido antes que expire</div><div>B. Perguntar de novo ao remetente na DM</div><div>C. Abrir o site oficial por conta própria e comparar o domínio</div></div>','Resposta: C<br>Explicação: Abrir a fonte oficial por conta própria é mais seguro do que confiar no link da mensagem.']
      ],
      sources:[
        ['Guia da FTC sobre golpes com cripto','Guia oficial para iniciantes sobre golpes comuns com cripto e seus sinais de alerta.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['Alerta ao consumidor da FTC','Lembrete prático de que pedidos urgentes de pagamento e mensagens de ajuda falsas são padrões comuns de golpe.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Pare','desc':'Não clique nem envie nada enquanto ainda houver pressão.'},
        {title:'Confira a oferta','desc':'Pergunte o que está sendo prometido e por que tanta urgência.'},
        {title:'Confira conta e domínio','desc':'Compare o nome do perfil, o usuário e o endereço completo do site.'},
        {title:'Confira o pedido da carteira','desc':'Não aprove pedidos estranhos nem digite sua seed phrase.'},
        {title:'Abra a fonte oficial por conta própria','desc':'Encontre você mesmo o site ou a documentação oficial antes de agir.'}
      ]
    },
    understanding:{q:'Qual é a resposta mais segura a uma mensagem urgente de recompensa cripto vinda de uma conta pouco conhecida?',opts:['Conectar a carteira imediatamente','Parar e verificar em fontes oficiais abertas por você','Enviar um pequeno valor primeiro'],correct:1,fb:'Correto! A resposta mais segura é parar e verificar em fontes oficiais abertas por você mesmo.'}
  };

  lessonSevenLocalePack.tr = {
    ui:{'nav.l7':'Kripto Dolandiriciligini Anlamak','nav.l7sub':'Yeni baslayanlar icin uyari isaretleri','topic.scams':'Kripto dolandiriciligini nasil fark ederim?'},
    homeDesc:'Bu sayfayi baslangic noktasi olarak kullanin. Ders 1-7\'yi acabilir, onemli terimleri tekrar gorebilir ve kendi hizinizda ilerleyebilirsiniz.',
    day7:'7. Gun',
    quizTitle:'Anlayisinizi Test Edin',
    lesson:{
      cat:'Guvenlik',
      title:'Yaygin Kripto Dolandiriciliklari ve Nasil Fark Edilir',
      intro:'Kripto dolandiriciliklari genellikle acil, dostca veya resmi gorunmeye calisir. Her hileyi ezberlemeniz gerekmez. Durmak, dogrulamak ve cuzdaninizi kontrol eden bilgileri vermemek daha onemlidir.',
      sections:[
        {h:'Dolandiriciliklar neden sik calisir',ps:['Dolandirici mesajlari baski ile kolay odulu birlestirir. Bir kisi acele ederse normalde yapacagi kontrolleri atlayabilir.']},
        {h:'Sahte airdrop ve cekilis dolandiriciliklari',ps:['Sahte odul teklifleri sizden cuzdan baglamanizi, supheli islem onaylamanizi veya once para gondermenizi isteyebilir. Link DM ile geldiyse yavaslayin.']},
        {h:'Taklit hesaplar ve sahte destek',ps:['Bazi dolandiricilar unlu proje, borsa veya destek hesabi gibi davranir. Gercek destek ekipleri seed phrase istemez.']},
        {h:'Rug pull ve fazla kolay gorunen sozler',ps:['Garantili kar, risksiz islem veya cok hizli getiri gibi vaatler uyari isaretidir. Fazla kolay anlatim varsa daha yavas kontrol edin.']},
        {h:'Tiklamadan veya gondermeden once kisa bir durus',ps:['Bir linke tiklamadan, cuzdan baglamadan veya fon gondermeden once durun. Hesap adini, tam alan adini, cuzdan istegini ve resmi kaynagi yeniden kontrol edin.']}
      ],
      defs:[
        ['Airdrop','Bir projenin kullanicilara token dagitma yontemi.'],
        ['Cekilis dolandiriciligi','Cuzdan baglatmaya veya once para gondertmeye calisan sahte odul etkinligi.'],
        ['Seed phrase','Cuzdan kurtarma kelimeleri. Rastgele sayfalara asla yazmayin veya paylasmayin.'],
        ['Rug pull','Ekibin veya kontrol eden kisinin fonlari cekip projeyi birakmasi durumu.']
      ],
      example:'Unlu bir projeden gelmis gibi gorunen bir DM size hemen cuzdan baglarsaniz odul alacaginizi soyluyor. Siz linke tiklamak yerine resmi siteyi kendiniz aciyor, alan adini karsilastiriyor ve mesaji yok sayiyorsunuz.',
      mistakes:['Hesap unlu gorunuyor diye hemen guvenmek','"Hemen simdi" baskisiyla acele etmek','Yalnizca proje ismine bakip tam alan adini kontrol etmemek','Seed phrase\'in asla paylasilmamasi gerektigini unutmak'],
      faqs:[
        ['Her airdrop dolandiricilik midir?','Hayir. Bazi etkinlikler gercektir ama yine de resmi site ve resmi duyurulari kendiniz acip dogrulamaniz gerekir.'],
        ['Seed phrase neden asla girilmemeli?','Cunku onu bilen kisi cuzdaninizi kontrol edebilir.'],
        ['Resmi hesap veya link nasil yeniden kontrol edilir?','DM linkine guvenmeyin. Resmi siteyi veya dokumani kendiniz acip adresi karsilastirin.']
      ],
      checkpoints:['Birkac yaygin dolandiricilik isaretini sayabilirim','Acilik ve garantili kar vaadinin neden riskli oldugunu anliyorum','Seed phrase\'in rastgele sitelere yazilmamasi gerektigini biliyorum','Tiklamadan once resmi kaynagi kendim acmayi biliyorum'],
      quiz:[
        ['Soru 1. Acil odul mesaji neden uyari isaretidir?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Cunku sizi sakinlestirir</div><div>B. Cunku baski kontrolleri atlatabilir</div><div>C. Cunku projenin resmi oldugunu kanitlar</div></div>','Cevap: B<br>Aciklama: Aciliyet, detaylari kontrol etmeden harekete gecmenizi saglamaya calisir.'],
        ['Soru 2. Birisi seed phrase isterse buna nasil bakmalisiniz?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Normal destek adimi gibi</div><div>B. Guclu bir dolandiricilik sinyali gibi</div><div>C. Odulu hizlandiran bir yol gibi</div></div>','Cevap: B<br>Aciklama: Seed phrase istemek kriptodaki en acik dolandiricilik sinyallerinden biridir.'],
        ['Soru 3. Supheli bir linki kontrol etmenin en guvenli yolu nedir?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Suresi dolmadan hemen acmak</div><div>B. Gonderene DM ile tekrar sormak</div><div>C. Resmi siteyi kendiniz acip alan adini karsilastirmak</div></div>','Cevap: C<br>Aciklama: Resmi kaynagi kendiniz acmak, mesajdaki linke guvenmekten daha guvenlidir.']
      ],
      sources:[
        ['FTC kripto dolandiriciligi rehberi','Yeni baslayanlar icin yaygin dolandiriciliklari ve uyari isaretlerini aciklayan resmi rehber.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['FTC tuketici uyari sayfasi','Sahte yardim mesajlari ve acil odeme taleplerinin neden riskli oldugunu hatirlatir.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Dur',desc:'Baski altindayken tiklama veya gonderim yapma.'},
        {title:'Teklifi kontrol et',desc:'Ne vaat edildigine ve neden acele ettirdigine bak.'},
        {title:'Hesap ve alan adini kontrol et',desc:'Profil adini, kullanici adini ve tam site adresini karsilastir.'},
        {title:'Cuzdan istegini kontrol et',desc:'Garip onaylari kabul etme ve seed phrase girme.'},
        {title:'Resmi kaynagi kendin ac',desc:'Gercek siteyi veya dokumani kendin bulup sonra hareket et.'}
      ]
    },
    understanding:{q:'Iyi tanimadiginiz bir hesaptan acil bir kripto odul mesaji gelirse en guvenli tepki nedir?',opts:['Cuzdani hemen baglamak','Kendiniz actiginiz resmi kaynaklardan dogrulamak','Once kucuk bir miktar gondermek'],correct:1,fb:'Dogru! En guvenli adim durmak ve resmi kaynaklardan kendiniz yeniden dogrulamaktir.'}
  };

  lessonSevenLocalePack.es = {
    ui:{'nav.l7':'Detectar estafas cripto','nav.l7sub':'Señales simples de alerta','topic.scams':'¿Cómo identifico estafas con cripto?'},
    homeDesc:'Usa esta página como punto de partida. Puedes abrir las Lecciones 1-7, revisar términos importantes y avanzar a tu propio ritmo.',
    day7:'Día 7',
    quizTitle:'Pon a prueba tu comprensión',
    lesson:{
      cat:'Seguridad',
      title:'Estafas comunes con cripto y cómo detectarlas',
      intro:'Las estafas con cripto suelen funcionar porque parecen urgentes, amistosas u oficiales. No necesitas memorizar todos los trucos. Lo más importante es pausar, verificar y no entregar nada que controle tu billetera.',
      sections:[
        {h:'Por qué las estafas funcionan tan seguido',ps:['Los mensajes falsos suelen mezclar presión con una recompensa fácil. Cuando alguien se siente apurado, es más fácil que salte los controles importantes.']},
        {h:'Airdrops falsos y giveaway scams',ps:['Una recompensa falsa puede pedirte conectar la billetera, aprobar una acción sospechosa o enviar fondos primero. Si el enlace llega por DM, debes frenar.']},
        {h:'Suplantación y soporte falso',ps:['Algunas estafas copian el estilo de proyectos famosos, exchanges o cuentas de soporte. Un soporte real no te pide la seed phrase.']},
        {h:'Rug pulls y promesas demasiado fáciles',ps:['Si un proyecto promete ganancias garantizadas, cero riesgo o resultados muy rápidos, tómalo como señal de alerta.']},
        {h:'Un hábito simple antes de hacer clic o pagar',ps:['Antes de abrir un enlace, conectar la billetera o enviar fondos, detente un momento. Revisa el nombre de la cuenta, el dominio completo, la solicitud de wallet y la fuente oficial abierta por ti.']}
      ],
      defs:[
        ['Airdrop','Forma en que un proyecto distribuye tokens a usuarios.'],
        ['Giveaway scam','Evento falso de recompensa que intenta hacerte conectar la billetera o enviar fondos primero.'],
        ['Frase semilla','Palabras de recuperación de la billetera. Nunca las escribas ni compartas en páginas aleatorias.'],
        ['Rug pull','Situación en la que el equipo o quien controla el proyecto retira fondos o lo abandona de repente.']
      ],
      example:'Recibes un DM que parece venir de un proyecto famoso y promete una recompensa si conectas tu billetera ahora mismo. En lugar de hacer clic, abres la web oficial por tu cuenta, comparas el dominio e ignoras el mensaje.',
      mistakes:['Confiar de inmediato porque la cuenta parece famosa','Apurarte por un mensaje que dice “ahora mismo”','Mirar solo el nombre del proyecto y no el dominio completo','Olvidar que la frase semilla nunca debe escribirse en páginas aleatorias'],
      faqs:[
        ['¿Todos los airdrops son estafas?','No. Algunos son reales, pero incluso los eventos legítimos deben verificarse en webs y anuncios oficiales abiertos por ti.'],
        ['¿Por qué nunca debo escribir mi frase semilla?','Porque quien la consiga puede controlar tu billetera.'],
        ['¿Cómo puedo revisar si una cuenta o enlace es oficial?','No confíes en el enlace del DM. Abre tú mismo la web o la documentación oficial y compara la dirección.']
      ],
      checkpoints:['Puedo nombrar varias señales comunes de estafa','Entiendo por qué la urgencia y la ganancia garantizada son alertas','Sé que la frase semilla no debe escribirse en sitios aleatorios','Sé cómo abrir por mi cuenta una fuente oficial antes de hacer clic'],
      quiz:[
        ['Pregunta 1. ¿Por qué un mensaje urgente de recompensa es una señal de alerta?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Porque te ayuda a ir más despacio</div><div>B. Porque la presión puede hacerte saltar controles</div><div>C. Porque prueba que el proyecto es oficial</div></div>','Respuesta: B<br>Explicación: La urgencia intenta moverte antes de que verifiques los detalles.'],
        ['Pregunta 2. Si alguien te pide la frase semilla, ¿cómo debes interpretarlo?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Como un paso normal de soporte</div><div>B. Como una fuerte señal de estafa</div><div>C. Como una forma rápida de recibir una recompensa</div></div>','Respuesta: B<br>Explicación: Pedir la frase semilla es una de las señales de estafa más claras en cripto.'],
        ['Pregunta 3. ¿Cuál es la forma más segura de revisar un enlace sospechoso?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Abrirlo rápido antes de que expire</div><div>B. Preguntar otra vez por DM</div><div>C. Abrir tú mismo la web oficial y comparar el dominio</div></div>','Respuesta: C<br>Explicación: Abrir la fuente oficial por tu cuenta es más seguro que confiar en el enlace del mensaje.']
      ],
      sources:[
        ['Guía de la FTC sobre estafas cripto','Guía oficial para principiantes sobre estafas comunes con cripto y sus señales de alerta.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['Alerta al consumidor de la FTC','Recordatorio práctico de que los pedidos urgentes de pago y los mensajes falsos de ayuda son patrones comunes de estafa.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Detente',desc:'No hagas clic ni envíes nada mientras sientas presión.'},
        {title:'Revisa la oferta',desc:'Mira qué promete y por qué intenta apurarte.'},
        {title:'Revisa cuenta y dominio',desc:'Compara nombre, usuario y dirección completa del sitio.'},
        {title:'Revisa la solicitud de wallet',desc:'No apruebes pedidos extraños ni escribas tu frase semilla.'},
        {title:'Abre tú mismo la fuente oficial',desc:'Busca la web o la documentación real antes de actuar.'}
      ]
    },
    understanding:{q:'¿Cuál es la respuesta más segura ante un mensaje urgente de recompensa cripto enviado por una cuenta poco conocida?',opts:['Conectar la billetera de inmediato','Pausar y verificar desde fuentes oficiales abiertas por ti','Enviar primero una pequeña cantidad'],correct:1,fb:'¡Correcto! Lo más seguro es pausar y volver a verificar desde fuentes oficiales abiertas por ti.'}
  };

  lessonSevenLocalePack.ar = {
    ui:{'nav.l7':'كشف الاحتيال في العملات الرقمية','nav.l7sub':'إشارات تحذير بسيطة','topic.scams':'كيف أميز عمليات الاحتيال في العملات الرقمية؟'},
    homeDesc:'استخدم هذه الصفحة كنقطة بداية. يمكنك فتح الدروس 1-7 مباشرة، ومراجعة المصطلحات المهمة، والتقدم بالسرعة التي تناسبك.',
    day7:'اليوم 7',
    quizTitle:'اختبر فهمك',
    lesson:{
      cat:'الأمان',
      title:'عمليات الاحتيال الشائعة في العملات الرقمية وكيف تكتشفها',
      intro:'تنجح كثير من عمليات الاحتيال في العملات الرقمية لأنها تبدو مستعجلة أو ودية أو رسمية. لا تحتاج إلى حفظ كل الحيل. الأهم هو أن تتوقف قليلا، وتتحقق، ولا تعطي أي شيء يمنح السيطرة على محفظتك.',
      sections:[
        {h:'لماذا تنجح عمليات الاحتيال كثيرا',ps:['غالبا ما تجمع رسائل الاحتيال بين الضغط وبين مكافأة تبدو سهلة. عندما يشعر الشخص بالعجلة، يصبح من السهل أن يتجاوز خطوات التحقق المهمة.']},
        {h:'الـAirdrop المزيف وعمليات الجوائز الوهمية',ps:['قد تطلب منك المكافأة المزيفة ربط المحفظة أو الموافقة على طلب مشبوه أو إرسال مال أولا. إذا وصل الرابط عبر رسالة خاصة، فتمهل فورا.']},
        {h:'انتحال الحسابات والدعم الفني المزيف',ps:['بعض المحتالين يقلدون مشاريع مشهورة أو منصات تداول أو حسابات دعم. فريق الدعم الحقيقي لا يطلب منك عبارة الاسترداد.']},
        {h:'Rug pull والوعود السهلة أكثر من اللازم',ps:['إذا كان المشروع يعد بربح مضمون أو بلا مخاطرة أو بنتيجة سريعة جدا، فاعتبر ذلك إشارة تحذير.']},
        {h:'عادة بسيطة قبل أن تضغط أو تربط أو ترسل',ps:['قبل أن تضغط على رابط أو تربط المحفظة أو ترسل أموالا، توقف للحظة. راجع اسم الحساب، والنطاق الكامل، وطلب المحفظة، والمصدر الرسمي الذي فتحته بنفسك.']}
      ],
      defs:[
        ['إيردروب','طريقة يوزع بها المشروع الرموز على المستخدمين.'],
        ['احتيال الجوائز','حدث مكافأة مزيف يحاول دفعك لربط المحفظة أو إرسال الأموال أولا.'],
        ['عبارة الاسترداد','كلمات استعادة المحفظة. لا تكتبها أو تشاركها في صفحات عشوائية أبدا.'],
        ['سحب السيولة المفاجئ','حالة يسحب فيها الفريق أو المسيطر الأموال أو يترك المشروع فجأة.']
      ],
      example:'تصلك رسالة خاصة تبدو كأنها من مشروع مشهور وتقول إنك ستحصل على مكافأة إذا ربطت محفظتك الآن. بدلا من الضغط، تفتح الموقع الرسمي بنفسك، وتقارن النطاق، وتتجاهل الرسالة.',
      mistakes:['الثقة بالحساب فقط لأنه يبدو مشهورا','الاستعجال لأن الرسالة تقول إن الوقت ينفد','النظر إلى اسم المشروع فقط وعدم فحص النطاق الكامل','نسيان أن عبارة الاسترداد لا يجب إدخالها في أي صفحة عشوائية'],
      faqs:[
        ['هل كل عمليات الـAirdrop احتيال؟','لا. بعضها حقيقي، لكن حتى الفعاليات الحقيقية يجب التحقق منها عبر الموقع والإعلانات الرسمية التي تفتحها بنفسك.'],
        ['لماذا لا يجب أن أكتب عبارة الاسترداد أبدا؟','لأن من يحصل عليها يستطيع التحكم في محفظتك بالكامل.'],
        ['كيف أتحقق من أن الحساب أو الرابط رسمي؟','لا تثق برابط الرسالة الخاصة. افتح الموقع أو الوثائق الرسمية بنفسك وقارن العنوان بعناية.']
      ],
      checkpoints:['أستطيع ذكر بعض إشارات الاحتيال الشائعة','أفهم لماذا تعد العجلة والربح المضمون إشارتين خطيرتين','أعرف أن عبارة الاسترداد لا تكتب في مواقع عشوائية','أعرف كيف أفتح المصدر الرسمي بنفسي قبل الضغط'],
      quiz:[
        ['السؤال 1. لماذا تعد رسالة المكافأة العاجلة إشارة تحذير؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. لأنها تساعدك على الهدوء</div><div>B. لأن الضغط قد يجعلك تتجاوز خطوات التحقق</div><div>C. لأنها تثبت أن المشروع رسمي</div></div>','الإجابة: B<br>الشرح: الإلحاح يدفعك إلى التصرف قبل التحقق من التفاصيل.'],
        ['السؤال 2. إذا طلب شخص منك عبارة الاسترداد، فكيف يجب أن تفهم ذلك؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. خطوة دعم عادية</div><div>B. إشارة احتيال قوية</div><div>C. طريقة سريعة للحصول على مكافأة</div></div>','الإجابة: B<br>الشرح: طلب عبارة الاسترداد من أوضح إشارات الاحتيال في عالم العملات الرقمية.'],
        ['السؤال 3. ما الطريقة الأكثر أمانا للتحقق من رابط مشبوه؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. فتحه بسرعة قبل أن ينتهي</div><div>B. سؤال المرسل مرة أخرى في الرسائل الخاصة</div><div>C. فتح الموقع الرسمي بنفسك ومقارنة النطاق</div></div>','الإجابة: C<br>الشرح: فتح المصدر الرسمي بنفسك أكثر أمانا من الوثوق بالرابط الموجود في الرسالة.']
      ],
      sources:[
        ['إرشادات FTC حول احتيال العملات الرقمية','دليل رسمي مبسط للمبتدئين حول أنماط الاحتيال الشائعة وإشاراتها التحذيرية.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['تنبيه FTC للمستهلكين','تذكير عملي بأن طلبات الدفع العاجلة ورسائل المساعدة المزيفة من الأنماط الشائعة في الاحتيال.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'توقف',desc:'لا تضغط ولا ترسل أي شيء وأنت تشعر بالضغط.'},
        {title:'افحص العرض',desc:'اسأل نفسك ماذا يعدك به ولماذا يبدو مستعجلا.'},
        {title:'افحص الحساب والنطاق',desc:'قارن اسم الحساب واسم المستخدم وعنوان الموقع الكامل.'},
        {title:'افحص طلب المحفظة',desc:'لا توافق على طلبات غريبة ولا تكتب عبارة الاسترداد.'},
        {title:'افتح المصدر الرسمي بنفسك',desc:'ابحث بنفسك عن الموقع أو الوثائق الرسمية قبل أن تتصرف.'}
      ]
    },
    understanding:{q:'ما التصرف الأكثر أمانا عند وصول رسالة عاجلة عن مكافأة رقمية من حساب لا تعرفه جيدا؟',opts:['ربط المحفظة مباشرة','التوقف والتحقق من مصادر رسمية تفتحها بنفسك','إرسال مبلغ صغير أولا'],correct:1,fb:'صحيح! التصرف الأكثر أمانا هو التوقف ثم التحقق من المصادر الرسمية التي تفتحها بنفسك.'}
  };

  lessonSevenLocalePack.vi = {
    ui:{'nav.l7':'Nhận biết lừa đảo crypto','nav.l7sub':'Dấu hiệu cảnh báo đơn giản','topic.scams':'Làm sao nhận ra lừa đảo crypto?'},
    homeDesc:'Hãy dùng trang này làm điểm bắt đầu. Bạn có thể mở trực tiếp Bài 1-7, xem lại thuật ngữ quan trọng và học theo tốc độ của riêng mình.',
    day7:'Ngày 7',
    quizTitle:'Kiểm tra hiểu biết',
    lesson:{
      cat:'An toàn',
      title:'Những trò lừa đảo crypto thường gặp và cách nhận ra',
      intro:'Lừa đảo crypto thường thành công vì chúng trông gấp gáp, thân thiện hoặc giống như nguồn chính thức. Bạn không cần nhớ mọi mánh khóe. Điều quan trọng hơn là dừng lại, kiểm tra lại và không đưa bất cứ thứ gì có thể kiểm soát ví của bạn.',
      sections:[
        {h:'Vì sao lừa đảo thường dễ thành công',ps:['Tin nhắn lừa đảo thường kết hợp áp lực với phần thưởng nghe rất dễ. Khi bị thúc ép, người dùng dễ bỏ qua bước kiểm tra quan trọng.']},
        {h:'Airdrop giả và giveaway scam',ps:['Phần thưởng giả có thể yêu cầu bạn kết nối ví, chấp nhận yêu cầu lạ hoặc gửi tiền trước. Nếu liên kết đến từ DM, hãy chậm lại ngay.']},
        {h:'Tài khoản giả mạo và hỗ trợ giả',ps:['Một số kẻ lừa đảo bắt chước dự án nổi tiếng, sàn giao dịch hoặc tài khoản hỗ trợ. Bộ phận hỗ trợ thật sẽ không yêu cầu seed phrase.']},
        {h:'Rug pull và lời hứa quá dễ dàng',ps:['Nếu một dự án hứa hẹn lợi nhuận chắc chắn, không có rủi ro hoặc kết quả quá nhanh, hãy xem đó là dấu hiệu cảnh báo.']},
        {h:'Một thói quen đơn giản trước khi bấm hoặc gửi',ps:['Trước khi bấm liên kết, kết nối ví hoặc gửi tiền, hãy dừng lại một chút. Kiểm tra lại tên tài khoản, tên miền đầy đủ, yêu cầu ví và nguồn chính thức do chính bạn mở.']}
      ],
      defs:[
        ['Airdrop','Cách một dự án phân phối token cho người dùng.'],
        ['Giveaway scam','Sự kiện thưởng giả nhằm khiến bạn kết nối ví hoặc gửi tiền trước.'],
        ['Seed phrase','Cụm từ khôi phục ví. Đừng bao giờ nhập hoặc chia sẻ ở trang ngẫu nhiên.'],
        ['Rug pull','Tình huống đội ngũ hoặc bên kiểm soát rút tiền rồi bỏ dự án đột ngột.']
      ],
      example:'Bạn nhận được DM trông giống như từ một dự án nổi tiếng và nói rằng bạn có phần thưởng nếu kết nối ví ngay. Thay vì bấm vào, bạn tự mở trang chính thức, so sánh tên miền rồi bỏ qua tin nhắn đó.',
      mistakes:['Tin ngay vì tài khoản trông nổi tiếng','Vội vàng vì thông báo nói phải làm ngay','Chỉ nhìn tên dự án mà không kiểm tra tên miền đầy đủ','Quên rằng seed phrase không bao giờ được nhập ở trang lạ'],
      faqs:[
        ['Mọi airdrop đều là lừa đảo sao?','Không. Một số là thật, nhưng ngay cả sự kiện thật cũng phải được kiểm tra lại qua website và thông báo chính thức do bạn tự mở.'],
        ['Vì sao không bao giờ được nhập seed phrase?','Vì bất kỳ ai có được nó đều có thể kiểm soát ví của bạn.'],
        ['Làm sao kiểm tra lại tài khoản hoặc liên kết chính thức?','Đừng tin liên kết trong DM. Hãy tự mở website hoặc tài liệu chính thức rồi so sánh địa chỉ.']
      ],
      checkpoints:['Tôi có thể nêu vài dấu hiệu lừa đảo phổ biến','Tôi hiểu vì sao sự gấp gáp và lợi nhuận chắc chắn là tín hiệu nguy hiểm','Tôi biết seed phrase không được nhập ở website ngẫu nhiên','Tôi biết cách tự mở nguồn chính thức trước khi bấm'],
      quiz:[
        ['Câu hỏi 1. Vì sao tin nhắn phần thưởng khẩn cấp là dấu hiệu cảnh báo?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Vì nó giúp bạn bình tĩnh hơn</div><div>B. Vì áp lực có thể khiến bạn bỏ qua kiểm tra</div><div>C. Vì nó chứng minh dự án là chính thức</div></div>','Đáp án: B<br>Giải thích: Sự khẩn cấp khiến bạn hành động trước khi kiểm tra kỹ chi tiết.'],
        ['Câu hỏi 2. Nếu ai đó yêu cầu seed phrase, bạn nên hiểu điều đó như thế nào?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Là bước hỗ trợ bình thường</div><div>B. Là tín hiệu lừa đảo mạnh</div><div>C. Là cách nhận thưởng nhanh hơn</div></div>','Đáp án: B<br>Giải thích: Yêu cầu seed phrase là một trong những tín hiệu lừa đảo rõ nhất trong crypto.'],
        ['Câu hỏi 3. Cách an toàn nhất để kiểm tra liên kết đáng ngờ là gì?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Mở nhanh trước khi hết hạn</div><div>B. Hỏi lại người gửi qua DM</div><div>C. Tự mở website chính thức và so sánh tên miền</div></div>','Đáp án: C<br>Giải thích: Tự mở nguồn chính thức an toàn hơn là tin vào liên kết trong tin nhắn.']
      ],
      sources:[
        ['Hướng dẫn FTC về lừa đảo crypto','Tài liệu chính thức dành cho người mới về các kiểu lừa đảo crypto phổ biến và dấu hiệu cảnh báo.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['Cảnh báo người tiêu dùng của FTC','Nhắc lại rằng yêu cầu thanh toán khẩn cấp và tin nhắn hỗ trợ giả là mô hình lừa đảo rất phổ biến.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Dừng lại',desc:'Đừng bấm hay gửi gì khi vẫn còn cảm giác bị ép.'},
        {title:'Kiểm tra lời hứa',desc:'Xem họ đang hứa điều gì và vì sao lại thúc ép.'},
        {title:'Kiểm tra tài khoản và tên miền',desc:'So sánh tên tài khoản, tay cầm và địa chỉ website đầy đủ.'},
        {title:'Kiểm tra yêu cầu ví',desc:'Đừng chấp nhận yêu cầu lạ hoặc nhập seed phrase.'},
        {title:'Tự mở nguồn chính thức',desc:'Hãy tự tìm website hay tài liệu chính thức trước khi hành động.'}
      ]
    },
    understanding:{q:'Phản ứng an toàn nhất với một tin nhắn thưởng crypto khẩn cấp từ tài khoản bạn không quen là gì?',opts:['Kết nối ví ngay','Dừng lại và kiểm tra qua nguồn chính thức do chính bạn mở','Gửi trước một khoản nhỏ'],correct:1,fb:'Đúng! Cách an toàn nhất là dừng lại rồi kiểm tra lại qua nguồn chính thức do chính bạn mở.'}
  };

  lessonSevenLocalePack.ha = {
    ui:{'nav.l7':'Yadda za a gane damfarar crypto','nav.l7sub':'Alamun gargadi masu sauki','topic.scams':'Ta yaya zan gane damfarar crypto?'},
    homeDesc:'Yi amfani da wannan shafi a matsayin wurin farawa. Za ka iya bude Darussa 1-7 kai tsaye, ka sake duba muhimman kalmomi, sannan ka ci gaba a saurin da ya dace da kai.',
    day7:'Rana ta 7',
    quizTitle:'Gwada Fahimtarka',
    lesson:{
      cat:'Tsaro',
      title:'Damfarorin crypto da aka fi gani da yadda za ka gane su',
      intro:'Damfarar crypto sau da yawa tana aiki ne saboda tana bayyana cikin gaggawa, cikin salo na sada zumunci, ko kuma kamar daga hukuma take. Ba sai ka haddace kowace dabara ba. Abin da ya fi muhimmanci shi ne ka tsaya, ka tabbatar, kuma kada ka ba da abin da zai ba wani iko a kan walat dinka.',
      sections:[
        {h:'Me ya sa damfara ke aiki sau da yawa',ps:['Sakon damfara yana hada matsin lamba da lada mai sauki. Idan mutum ya yi sauri, yana iya tsallake matakan dubawa masu muhimmanci.']},
        {h:'Airdrop na bogi da giveaway scam',ps:['Ladan bogi na iya bukatar ka hada walat, ka amince da wani abu mai shakku, ko ka aika kudi kafin komai. Idan mahaɗin ya zo ta DM, ka rage gudu nan take.']},
        {h:'Kwaikwayon asusu da tallafin bogi',ps:['Wasu masu damfara suna kwaikwayon shahararren aiki, dandali, ko asusun tallafi. Tallafi na gaskiya ba ya neman seed phrase dinka.']},
        {h:'Rug pull da alkawuran da suka yi sauki fiye da kima',ps:['Idan wani aiki ya yi alkawarin riba tabbatacciya, babu hadari, ko sakamako cikin sauri sosai, ka dauke shi a matsayin alamar gargadi.']},
        {h:'Dabi\'a mai sauki kafin ka danna ko ka aika',ps:['Kafin ka danna mahaɗi, ka hada walat, ko ka aika kudi, tsaya na dan lokaci. Ka sake duba sunan asusu, cikakken adireshin yanar gizo, bukatar walat, da madogararsa ta hukuma da ka bude da kanka.']}
      ],
      defs:[
        ['Airdrop','Hanyar da aiki ke raba token ga masu amfani.'],
        ['Giveaway scam','Shirin lada na bogi da ke kokarin sa ka hada walat ko aika kudi da farko.'],
        ['Seed phrase','Kalmomin dawo da walat. Kada ka taba rubutawa ko rabawa a shafukan banza.'],
        ['Rug pull','Yanayin da tawaga ko mai iko ya kwashe kudi ko ya bar aikin kwatsam.']
      ],
      example:'Ka samu DM mai kama da daga shahararren aiki yana cewa za ka samu lada idan ka hada walat yanzu. Maimakon ka danna, sai ka bude shafin hukuma da kanka, ka kwatanta domain, sannan ka yi watsi da sakon.',
      mistakes:['Yin imani da asusu saboda kawai ya yi kama da na shahara','Gaggautawa saboda an ce “yanzu nan take”','Duba sunan aikin kawai ba tare da cikakken domain ba','Manta cewa seed phrase ba za a taba saka shi a shafin banza ba'],
      faqs:[
        ['Shin duk airdrop damfara ne?','A\'a. Wasu na gaske ne, amma ko na gaskiya ma ya kamata a sake tabbatar da su ta hanyar shafin hukuma da sanarwar hukuma da ka bude da kanka.'],
        ['Me ya sa ba za a taba saka seed phrase ba?','Domin duk wanda ya same shi zai iya sarrafa walat dinka gaba daya.'],
        ['Ta yaya zan sake tabbatar da asusun hukuma ko mahaɗi?','Kada ka amince da mahaɗin da ke cikin DM. Ka bude shafin hukuma ko takardun hukuma da kanka sannan ka kwatanta adireshin.']
      ],
      checkpoints:['Zan iya ambaton wasu alamun damfara na gama gari','Na fahimci dalilin da ya sa gaggawa da ribar tabbas ke zama alamar hadari','Na san cewa ba a rubuta seed phrase a shafukan bazuwar yanar gizo','Na san yadda zan bude madogarar hukuma da kaina kafin in danna'],
      quiz:[
        ['Tambaya ta 1. Me ya sa sakon lada na gaggawa yake zama alamar gargadi?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Domin yana taimaka maka ka natsu</div><div>B. Domin matsin lamba na iya sa ka tsallake dubawa</div><div>C. Domin yana tabbatar da aikin hukuma ne</div></div>','Amsa: B<br>Bayani: Gaggawa na kokarin motsa ka kafin ka tantance cikakken bayani.'],
        ['Tambaya ta 2. Idan wani ya nemi seed phrase dinka, ta yaya ya kamata ka dauke shi?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Matakin tallafi na yau da kullum</div><div>B. Karfi sosai na alamar damfara</div><div>C. Hanya ce ta samun lada cikin sauri</div></div>','Amsa: B<br>Bayani: Neman seed phrase yana daga cikin manyan alamun damfara a crypto.'],
        ['Tambaya ta 3. Wace hanya ce mafi aminci wajen duba mahaɗi mai shakku?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. A bude shi nan take kafin ya bace</div><div>B. A sake tambayar mai aikawa ta DM</div><div>C. A bude shafin hukuma da kanka sannan a kwatanta domain</div></div>','Amsa: C<br>Bayani: Bude madogarar hukuma da kanka ya fi aminci fiye da yarda da mahaɗin sakon.']
      ],
      sources:[
        ['Jagorar FTC kan damfarar crypto','Jagorar hukuma mai sauki ga masu farawa game da damfarorin crypto da alamun gargadi.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['Sanarwar masu amfani ta FTC','Tunatarwa cewa bukatar biyan gaggawa da sakonnin taimakon bogi abubuwa ne da ake yawan gani a damfara.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Tsaya',desc:'Kada ka danna ko aika komai idan kana jin an matsa maka.'},
        {title:'Duba tayin',desc:'Ka tambayi kanka abin da ake alkawarta maka da dalilin gaggawa.'},
        {title:'Duba asusu da domain',desc:'Ka kwatanta sunan asusu, handle, da cikakken adireshin shafi.'},
        {title:'Duba bukatar walat',desc:'Kada ka amince da bukatu masu shakku ko ka saka seed phrase.'},
        {title:'Bude madogarar hukuma da kanka',desc:'Ka nemo shafin hukuma ko takardu da kanka kafin ka dauki mataki.'}
      ]
    },
    understanding:{q:'Mene ne mafi aminci idan sakon lada na gaggawa ya zo daga asusun da ba ka sani sosai ba?',opts:['Ka hada walat nan take','Ka tsaya ka tabbatar ta hanyoyin hukuma da ka bude da kanka','Ka aika karamin kudi da farko'],correct:1,fb:'Daidai! Mafi aminci shi ne ka tsaya sannan ka sake tabbatarwa ta hanyoyin hukuma da ka bude da kanka.'}
  };

  lessonSevenLocalePack.br = deepClone(lessonSevenLocalePack.pt);
  window.__lessonSevenLocalePack = lessonSevenLocalePack;

  function getLessonSevenLocale(lang){
    return lessonSevenLocalePack[lessonSevenLang(lang)] || lessonSevenLocalePack.en;
  }

  function getLessonSevenNavIconHtml(){
    return '<span class="sec-icon lesson7-nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"></path><path d="M12 8v5"></path><path d="M12 16h.01"></path></svg></span>';
  }

  function ensureLessonSevenData(){
    Object.keys(lessonSevenLocalePack).forEach(function(lang){
      var entry = lessonSevenLocalePack[lang];
      if(!entry) return;
      if(typeof ui !== 'undefined'){
        if(!ui[lang]) ui[lang] = {};
        Object.assign(ui[lang], entry.ui || {});
      }
      if(typeof extraUi !== 'undefined'){
        if(!extraUi[lang]) extraUi[lang] = {};
        extraUi[lang]['home.desc'] = entry.homeDesc;
      }
      if(typeof lessons !== 'undefined' && lessons){
        if(!lessons[lang]) lessons[lang] = deepClone((lang === 'br' && lessons.pt) ? lessons.pt : (lessons.en || []));
        lessons[lang][6] = deepClone(entry.lesson);
      }
      if(typeof lessonOverrides !== 'undefined' && lessonOverrides){
        if(!lessonOverrides[lang]) lessonOverrides[lang] = deepClone((lang === 'br' && lessonOverrides.pt) ? lessonOverrides.pt : (lessonOverrides.en || []));
        lessonOverrides[lang][6] = deepClone(entry.lesson);
      }
      if(typeof quizData !== 'undefined'){
        if(!quizData[lang]) quizData[lang] = deepClone((lang === 'br' && quizData.pt) ? quizData.pt : (quizData.en || []));
        quizData[lang][6] = [deepClone(entry.understanding)];
      }
      if(typeof quizTitles !== 'undefined' && entry.quizTitle){
        quizTitles[lang] = entry.quizTitle;
      }
    });
    if(typeof quizData !== 'undefined' && quizData.pt) quizData.br = quizData.pt;
    if(typeof quizTitles !== 'undefined' && quizTitles.pt) quizTitles.br = quizTitles.pt;
  }

  function ensureLessonSevenDom(){
    var lesson5 = document.getElementById('lesson5');
    if(lesson5 && !document.getElementById('lesson6')){
      var panel = document.createElement('section');
      panel.className = 'lesson-content';
      panel.id = 'lesson6';
      lesson5.insertAdjacentElement('afterend', panel);
    }

    if(!document.querySelector('.lesson-nav-item[data-lesson="6"]')){
      var lessonFiveNav = document.querySelector('.lesson-nav-item[data-lesson="5"]');
      if(lessonFiveNav){
        var navHost = document.createElement('div');
        navHost.innerHTML = '<div class="lesson-nav-item lesson-nav-item-l7" data-lesson="6" onclick="showLesson(6)"><div class="nav-num">' + getLessonSevenNavIconHtml() + '</div><div><div class="nav-title" data-i18n="nav.l7"></div><div class="nav-sub" data-i18n="nav.l7sub"></div></div></div>';
        if(navHost.firstElementChild) lessonFiveNav.insertAdjacentElement('afterend', navHost.firstElementChild);
      }
    }

    var lessonSevenNav = document.querySelector('.lesson-nav-item[data-lesson="6"]');
    if(lessonSevenNav){
      lessonSevenNav.classList.add('lesson-nav-item-l7');
      var lessonSevenNum = lessonSevenNav.querySelector('.nav-num');
      if(lessonSevenNum){
        lessonSevenNum.innerHTML = getLessonSevenNavIconHtml();
        lessonSevenNum.setAttribute('aria-label','Lesson 7');
      }
    }

    if(!document.querySelector('[data-i18n="topic.scams"]')){
      var topicBuy = document.querySelector('[data-i18n="topic.buy"]');
      var topicItem = topicBuy ? topicBuy.closest('.lesson-nav-item') : null;
      if(topicItem){
        var topicHost = document.createElement('div');
        topicHost.innerHTML = '<div class="lesson-nav-item" onclick="showLesson(6)"><div><div class="nav-title" data-i18n="topic.scams"></div></div></div>';
        if(topicHost.firstElementChild) topicItem.insertAdjacentElement('afterend', topicHost.firstElementChild);
      }
    }
  }

  function ensureLessonSevenVisualStyle(){
    if(document.getElementById('lesson7-visual-style-final')) return;
    var style = document.createElement('style');
    style.id = 'lesson7-visual-style-final';
    style.textContent = '.lesson-nav-item-l7 .nav-num{font-size:0}.lesson-nav-item-l7 .nav-num .lesson7-nav-icon{width:13px;height:13px}.lesson-nav-item-l7 .nav-num .lesson7-nav-icon svg{stroke-width:2.2}.lesson7-visual-shell{padding:18px 18px 20px;background:linear-gradient(180deg,#fffdfa 0%,#f7f2e8 100%);border:1px solid rgba(38,65,99,.12)}.lesson7-visual-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:12px}.lesson7-visual-card{position:relative;padding:14px 14px 16px;border-radius:18px;background:#fff;border:1px solid rgba(38,65,99,.08);box-shadow:0 10px 22px rgba(24,42,69,.07)}.lesson7-visual-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.lesson7-visual-icon{width:40px;height:40px;border-radius:14px;display:grid;place-items:center;background:#264163;color:#fff;font-size:18px;font-weight:800}.lesson7-visual-card:nth-child(2) .lesson7-visual-icon{background:#98762f}.lesson7-visual-card:nth-child(3) .lesson7-visual-icon{background:#2d6b49}.lesson7-visual-card:nth-child(4) .lesson7-visual-icon{background:#8a3731}.lesson7-visual-card:nth-child(5) .lesson7-visual-icon{background:#5f4a91}.lesson7-visual-step{font-family:\"IBM Plex Mono\",monospace;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7a5f1f}.lesson7-visual-head{font-size:1rem;font-weight:800;color:#1f2430;line-height:1.25}.lesson7-visual-body{margin-top:8px;font-size:.92rem;line-height:1.56;color:#5b534a}@media (max-width:720px){.lesson7-visual-shell{padding:15px}.lesson7-visual-grid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }

  function buildLessonSevenVisualMarkup(lesson){
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    var icons = ['&#9208;','&#128269;','&#127760;','&#128274;','&#10003;'];
    return '<div class="visual lesson7-visual-shell"><div class="visual-title">' + (typeof t === 'function' ? t('visual.title') : 'Visual explanation') + '</div><div class="lesson7-visual-grid">' + visual.map(function(step, idx){
      return '<div class="lesson7-visual-card"><div class="lesson7-visual-top"><div class="lesson7-visual-icon">' + (icons[idx] || '&#9679;') + '</div><div class="lesson7-visual-step">0' + (idx + 1) + '</div></div><div class="lesson7-visual-head">' + String(step.title || '') + '</div><div class="lesson7-visual-body">' + String(step.desc || '') + '</div></div>';
    }).join('') + '</div></div>';
  }

  function getLessonSevenCompletedSet(){
    if(typeof completed !== 'undefined' && completed && typeof completed.has === 'function') return completed;
    try{
      return new Set(JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]'));
    }catch(err){
      return new Set();
    }
  }

  function getLessonSevenPanelTitle(index){
    var panel = document.getElementById('lesson' + index);
    var titleEl = panel ? panel.querySelector('.lc-title') : null;
    return titleEl && titleEl.textContent ? titleEl.textContent.trim() : '';
  }

  function syncLessonSevenProgressFinal(){
    var total = typeof getTotalLessons === 'function' ? getTotalLessons() : 7;
    var doneSet = getLessonSevenCompletedSet();
    var prefix = typeof t === 'function' ? t('breadcrumb.prefix') : 'Lesson';

    for(var i = 0; i < total; i++){
      var panel = document.getElementById('lesson' + i);
      if(!panel) continue;
      var header = panel.querySelector('.lc-header');
      if(!header) continue;
      var banner = header.querySelector('.lesson-progress-banner');
      if(!banner){
        banner = document.createElement('div');
        banner.className = 'lesson-progress-banner';
        banner.innerHTML = '<div class="lesson-progress-text"></div><div class="lesson-progress-state"></div>';
        var meta = header.querySelector('.lc-meta');
        if(meta && meta.nextSibling) header.insertBefore(banner, meta.nextSibling);
        else if(meta) meta.insertAdjacentElement('afterend', banner);
        else header.insertBefore(banner, header.firstChild);
      }
      banner.classList.toggle('is-complete', doneSet.has(i));
      var text = banner.querySelector('.lesson-progress-text');
      var state = banner.querySelector('.lesson-progress-state');
      if(text) text.textContent = prefix + ' ' + (i + 1) + '/' + total + (getLessonSevenPanelTitle(i) ? ' - ' + getLessonSevenPanelTitle(i) : '');
      if(state) state.textContent = typeof t === 'function' ? t('btn.completed') : 'Completed';
    }

    document.querySelectorAll('.lesson-nav-item[data-lesson]').forEach(function(item, idx){
      var isComplete = doneSet.has(idx);
      item.classList.toggle('progress-complete', isComplete);
      var badge = item.querySelector('.lesson-nav-status');
      if(!badge){
        badge = document.createElement('span');
        badge.className = 'lesson-nav-status';
        badge.setAttribute('aria-hidden', 'true');
        badge.textContent = '✓';
        item.appendChild(badge);
      }
      badge.style.display = isComplete ? 'inline-flex' : 'none';
      badge.title = isComplete ? (typeof t === 'function' ? t('btn.completed') : 'Completed') : '';
    });

    var homePanel = document.getElementById('homePanel');
    var hero = homePanel ? homePanel.querySelector('.home-hero') : null;
    if(hero){
      var card = hero.querySelector('.home-progress-card');
      if(!card){
        card = document.createElement('div');
        card.className = 'home-progress-card';
        var desc = hero.querySelector('.home-desc');
        if(desc) desc.insertAdjacentElement('afterend', card);
        else hero.insertBefore(card, hero.firstChild);
      }
      var completedCount = 0;
      doneSet.forEach(function(idx){ if(idx < total) completedCount++; });
      var nextIndex = -1;
      for(var n = 0; n < total; n++){ if(!doneSet.has(n)){ nextIndex = n; break; } }
      var noteText = nextIndex === -1 ? (typeof t === 'function' ? t('btn.completed') : 'Completed') : (prefix + ' ' + (nextIndex + 1) + '/' + total + (getLessonSevenPanelTitle(nextIndex) ? ' - ' + getLessonSevenPanelTitle(nextIndex) : ''));
      var dots = '';
      for(var d = 0; d < total; d++){
        var cls = 'home-progress-dot';
        if(doneSet.has(d)) cls += ' done';
        else if(typeof currentLesson !== 'undefined' && typeof currentPage !== 'undefined' && currentPage === ('lesson' + d)) cls += ' active';
        dots += '<span class="' + cls + '"></span>';
      }
      card.innerHTML = '<div class="home-progress-count">' + completedCount + ' / ' + total + ' ' + (typeof t === 'function' ? t('progress.done') : 'completed') + '</div><div class="home-progress-dots">' + dots + '</div><div class="home-progress-note">' + noteText + '</div>';
    }
  }

  function buildLessonSevenHomeCardHtml(){
    return '<div class="home-card" onclick="showLesson(6)"><div class="home-card-num">7</div><div class="home-card-title">' + (typeof t === 'function' ? t('nav.l7') : 'Lesson 7') + '</div><div class="home-card-desc">' + (typeof t === 'function' ? t('nav.l7sub') : '') + '</div><div style="margin-top:10px;font-size:.82rem;font-weight:700;color:var(--navy-2)">' + (typeof t === 'function' ? t('home.openLesson') : 'Open lesson') + ' &rarr;</div></div>';
  }

  var previousLessonSevenVisual = window.visualForLesson;
  if(typeof previousLessonSevenVisual === 'function' && !previousLessonSevenVisual.__lessonSevenWrapped){
    var wrappedLessonSevenVisual = function(i){
      if(i !== 6) return previousLessonSevenVisual.apply(this, arguments);
      var lang = lessonSevenLang();
      var lesson = deepClone((typeof lessons !== 'undefined' && lessons && lessons[lang] && lessons[lang][6]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[6]) || getLessonSevenLocale(lang).lesson || {});
      return buildLessonSevenVisualMarkup(lesson);
    };
    wrappedLessonSevenVisual.__lessonSevenWrapped = true;
    window.visualForLesson = wrappedLessonSevenVisual;
  }

  var previousLessonSevenKeywords = window.getLessonSearchKeywords;
  if(typeof previousLessonSevenKeywords === 'function' && !previousLessonSevenKeywords.__lessonSevenWrapped){
    var wrappedLessonSevenKeywords = function(index){
      if(index === 6){
        return ['scam','crypto scam','fake airdrop','giveaway scam','fake support','impersonation','rug pull','seed phrase','fake site','fake website','fake domain','urgent dm','guaranteed profit','phishing','사기','가짜 에어드롭','시드 문구','가짜 지원','penipuan crypto','golpe cripto','dolandiricilik','damfara','احتيال','lua dao'];
      }
      return previousLessonSevenKeywords.apply(this, arguments);
    };
    wrappedLessonSevenKeywords.__lessonSevenWrapped = true;
    window.getLessonSearchKeywords = wrappedLessonSevenKeywords;
  }

  var previousLessonSevenHome = window.renderHome;
  if(typeof previousLessonSevenHome === 'function' && !previousLessonSevenHome.__lessonSevenWrapped){
    var wrappedLessonSevenHome = function(){
      var html = previousLessonSevenHome.apply(this, arguments);
      if(typeof html !== 'string') return html || '';
      var temp = document.createElement('div');
      temp.innerHTML = html;
      var hero = temp.querySelector('.home-hero');
      var locale = getLessonSevenLocale();
      if(hero){
        var desc = hero.querySelector('.home-desc');
        if(desc && locale.homeDesc) desc.textContent = locale.homeDesc;
        var firstGrid = hero.querySelector('.home-grid');
        if(firstGrid && firstGrid.innerHTML.indexOf('showLesson(6)') === -1){
          var host = document.createElement('div');
          host.innerHTML = buildLessonSevenHomeCardHtml();
          if(host.firstElementChild) firstGrid.appendChild(host.firstElementChild);
        }
      }
      html = temp.innerHTML;
      if(locale.day7) html = html.replace(/>Day 7</g, '>' + locale.day7 + '<');
      return html;
    };
    wrappedLessonSevenHome.__lessonSevenWrapped = true;
    window.renderHome = wrappedLessonSevenHome;
  }

  function wrapLessonSevenSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__lessonSevenSyncWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncLessonSevenProgressFinal();
      return result;
    };
    wrapped.__lessonSevenSyncWrapped = true;
    window[name] = wrapped;
  }

  ensureLessonSevenData();
  ensureLessonSevenDom();
  ensureLessonSevenVisualStyle();
  wrapLessonSevenSync('renderAllLessons');
  wrapLessonSevenSync('showLesson');
  wrapLessonSevenSync('showPage');
  wrapLessonSevenSync('toggleComplete');
  wrapLessonSevenSync('setLang');

  if(typeof applyUI === 'function') applyUI();
  if(typeof renderAllLessons === 'function') renderAllLessons();
  syncLessonSevenProgressFinal();
  if(typeof currentPage !== 'undefined'){
    if(/^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
      showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
    }else if(typeof showPage === 'function'){
      showPage(currentPage || 'home');
    }
  }
})();