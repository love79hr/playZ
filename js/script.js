
// 네비 메뉴 버튼 활성화
const navBar = document.querySelector('.nav_bar');
const navMenu = document.querySelector('.nav_menu');

navBar.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

// 스크롤 애니메이션
const whatSection = document.querySelector('#what');
const whatH1 = document.querySelector('.what h1.h1');
const whatBoxes = document.querySelectorAll('.cont_box');
const onlySection = document.querySelector('#only');
const onlyH1 = document.querySelector('.only h1.h1');
const onlyCont = document.querySelector('.only_cont');
const aboutSection = document.querySelector('#about');
const aboutBox = document.querySelector('.about_box');
const aboutH1 = document.querySelector('.about_box h1.h1');
const aboutText = document.querySelector('.about_cont p');
const aboutButton = document.querySelector('.about_cont a.about_button');
const footerBottom = document.querySelector('.f_bottom');

function checkScroll() {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  
  // what 섹션 애니메이션
  const whatSectionTop = whatSection.offsetTop;
  const whatSectionHeight = whatSection.offsetHeight;
  
  if (scrollTop + windowHeight > whatSectionTop + whatSectionHeight * 0.5) {
    whatH1.classList.add('animate');
    whatBoxes.forEach((box) => {
      box.classList.add('animate');
    });
  } else {
    whatH1.classList.remove('animate');
    whatBoxes.forEach((box) => {
      box.classList.remove('animate');
    });
  }
  
  // only 섹션 애니메이션
  const onlySectionTop = onlySection.offsetTop;
  const onlySectionHeight = onlySection.offsetHeight;
  
  if (scrollTop + windowHeight > onlySectionTop + onlySectionHeight * 0.3) {
    onlyH1.classList.add('animate');
    setTimeout(() => {
      onlyCont.classList.add('animate');
    }, 300);
  } else {
    onlyH1.classList.remove('animate');
    onlyCont.classList.remove('animate');
  }
  
  // about 섹션 애니메이션
  const aboutSectionTop = aboutSection.offsetTop;
  const aboutSectionHeight = aboutSection.offsetHeight;
  
  if (scrollTop + windowHeight > aboutSectionTop + aboutSectionHeight * 0.4) {
    aboutBox.classList.add('animate');
    
    setTimeout(() => {
      aboutH1.classList.add('animate');
    }, 300);
    
    setTimeout(() => {
      aboutButton.classList.add('animate');
    }, 600);
    
    setTimeout(() => {
      aboutText.classList.add('animate');
    }, 900);
  } else {
    aboutBox.classList.remove('animate');
    aboutH1.classList.remove('animate');
    aboutButton.classList.remove('animate');
    aboutText.classList.remove('animate');
  }
  
  // footer 배경 채우기 애니메이션
  const footerTop = footerBottom.offsetTop;
  const footerHeight = footerBottom.offsetHeight;
  
  if (scrollTop + windowHeight > footerTop + footerHeight * 0.5) {
    footerBottom.classList.add('animate');
  } else {
    footerBottom.classList.remove('animate');
  }
}

// 스크롤 방향 감지
let lastScrollTop = 0;
let isScrollingDown = true;

function handleScrollDirection() {
  const currentScrollTop = window.pageYOffset;
  
  if (currentScrollTop > lastScrollTop) {
    // 아래로 스크롤
    isScrollingDown = true;
  } else {
    // 위로 스크롤
    isScrollingDown = false;
  }
  
  lastScrollTop = currentScrollTop;
  checkScroll();
}

// 스크롤 이벤트 리스너를 방향 감지 함수로 변경
window.removeEventListener('scroll', checkScroll);
window.addEventListener('scroll', handleScrollDirection);

// 페이지 로드 시에도 체크
window.addEventListener('load', checkScroll);



// 크리에이터 데이터
const creatorData = {
  bdns: {
    name: "빠더너스 BDNS",
    handle: "@bdns",
    stats: "구독자 215만명 • 동영상 1.6천개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/bdns.png?raw=true",
    youtube: "qMYHsOI8oPQ",
    instagram: "https://www.instagram.com/bdnspresents/",
    youtubeChannel: "https://www.youtube.com/@bdns",
    description: [
      "하이퍼 리얼리즘의 콩트와 코미디 영상을 만듭니다.",
      "웰메이드 코미디를 지향합니다.",
      "콜라보, 비즈니스 문의는 문상훈을 춤추게 합니다."
    ]
  },
  judung: {
    name: "주둥이방송",
    handle: "@주둥이방송",
    stats: "구독자 142만명 • 동영상 2.4천개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/judung.png?raw=true",
    youtube: "8EaKxdHvGO4",
    instagram: "instagram.com/joodoong_e",
    youtubeChannel: "https://www.youtube.com/@주둥이방송",
    description: [
      "거침없는 입담으로 밤샘 토크의 마스터",
      "치지직 스트리머의 솔직 먹방·고민타파 방송",
      "꾸미지 않은 매력으로 MZ를 사로잡은 에너지 폭발!",
      "주둥이방송의 리얼 라이프"
    ]
  },
  jindol: {
    name: "진돌",
    handle: "@jindol",
    stats: "구독자 54.5만명 • 동영상 1천개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/jindol.png?raw=true",
    youtube: "04lh8mdHnfk",
    instagram: "https://www.instagram.com/doldistudio/",
    youtubeChannel: "https://www.youtube.com/@jindol",
    description: [
      "前 웹툰 작가의 밤샘 티키타카",
      "색약 웹툰 글작가 진돌과 가끔 출연하는",
      "아내 히ㅣㅣ디와 함께하는 오타쿠 일상기",
      "진돌의 창작 스트리밍으로 초대합니다"
    ]
  },
  diva: {
    name: "디바제시카",
    handle: "@deevajessica",
    stats: "구독자 261만명 • 동영상 4.2천개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/diva.png?raw=true",
    youtube: "aUVzM15LwKM",
    instagram: "https://www.instagram.com/deeva_jessica/",
    youtubeChannel: "https://www.youtube.com/@divajessica",
    description: [
      "미스터리 사건의 세계로 이끄는 1세대 스토리텔러",
      "미국 생활 경험을 바탕으로 영어 교육과 지식 콘텐츠로 시작하여",
      "토요미스테리와 금요사건파일로 많은 사랑을 받는",
      "디바제시카의 미스터리 여정에 빠져보세요"
    ]
  },
  summer: {
    name: "썸머썸머",
    handle: "@summerinNY",
    stats: "구독자 102만명 • 동영상 1.2천개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/summer.png?raw=true",
    youtube: "ZowrjbwGYKY",
    instagram: "https://www.instagram.com/summerinbk/",
    youtubeChannel: "https://www.youtube.com/@summerinNY",
    description: [
      "뉴욕 일상과 무서운 이야기의 스릴 넘치는 블렌드",
      "미국 사건 사고와 매주 금요일 라이브로 풀어내는 스토리텔링",
      "한국과 미국을 넘나드는 일상 브이로그까지 준비된",
      "썸머썸머의 뉴욕 라이프를 느껴보세요"
    ]
  },
  foodie: {
    name: "푸디젠 Foodie Jen",
    handle: "@_foodie_jen",
    stats: "구독자 57.5만명 • 동영상 144개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/foodie.png?raw=true",
    youtube: "doW7WWhLhNk",
    instagram: "https://www.instagram.com/_foodie_jen/",
    youtubeChannel: "https://www.youtube.com/@_foodie_jen",
    description: [
      "미국사는 직장인 새댁의 우당탕탕 주방이야기",
      "그냥 대충....열심히는 모르겠고 맛만 있으면 된거 아닌가요?",
      "먹방과 실생활 요리로 공감 유발하는 푸디젠의 요리 일상"
    ]
  },
  pannie: {
    name: "빠니보틀 Pani Bottle",
    handle: "@PaniBottle",
    stats: "구독자 252만명 • 동영상 373개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/pannie.png?raw=true",
    youtube: "NtaHHkhfDjE",
    instagram: "https://www.instagram.com/panibottle_official/",
    youtubeChannel: "https://www.youtube.com/@PaniBottle",
    description: [
      "세계 폐허 탐방과 대륙 횡단의 마스터",
      "인도에서 시작된 434일 유라시아 대륙 여행",
      "지도 속 그곳, 세상의 끝, 만나는 사람들과의 이야기",
      "어떠한 사람들과, 어떤 추억일지는 모르지만",
      "빠니보틀과 떠나는 여행은 모든 순간이 특별하다"
    ]
  },
  captin: {
    name: "캡틴따거",
    handle: "@captainbrother",
    stats: "구독자 67.7만명 • 동영상 526개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/captin.png?raw=true",
    youtube: "NhTOGu5Zfig",
    instagram: "https://www.instagram.com/sinomoon/",
    youtubeChannel: "https://www.youtube.com/@captainbrother",
    description: [
      "사람이 좋아서 떠나는 여행 캡틴 따거입니다",
      "전직 공군 대위이지만 15년 중국 라이프를 바탕으로",
      "정말 현지인같은 스토리로 함께하는 문화탐험",
      "당신의 여행을 간접체험 해드립니다"
    ]
  },
  wonji: {
    name: "원지의하루",
    handle: "@im1G",
    stats: "구독자 102만명 • 동영상 351개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/wonji.png?raw=true",
    youtube: "pCjqw9vZCDk",
    instagram: "https://www.instagram.com/im1g/",
    youtubeChannel: "https://www.youtube.com/@im1G",
    description: [
      "한 곳에 머물며 살아가듯, 여행을 일상과 같이 즐긴다",
      "우간다 자취부터 소소한 현지 탐방까지,",
      "일상과 여행의 경계를 완전히 허물어 버린 원지의 하루와 함께",
      "여행같은 일상을 일상같은 여행을 즐깁시다"
    ]
  },
  recording: {
    name: "인생녹음중",
    handle: "@tikitakabooboo",
    stats: "구독자 132만명 • 동영상 92개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/recording.png?raw=true",
    youtube: "pNHMmUbqlMc",
    instagram: "https://www.instagram.com/tikitakabooboo/",
    youtubeChannel: "https://www.youtube.com/@tikitakabooboo",
    description: [
      "우리 집은 언제나 녹음 중🔴",
      "8년차 부부가 함께하는 노래와 개그의 티키타카",
      "일상 대화를 귀여운 캐릭터 애니메이션으로 재현해낸",
      "찐부부의 리얼 라이프를 느껴보세요"
    ]
  },
  hamzzi: {
    name: "정서불안 김햄찌",
    handle: "@정서불안김햄찌",
    stats: "구독자 58.2만명 • 동영상 86개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/hamzzi.png?raw=true",
    youtube: "2cfek-FkXMI",
    instagram: "https://www.instagram.com/anx_hamzzikim/",
    youtubeChannel: "https://www.youtube.com/@정서불안김햄찌",
    description: [
      "정서불안 직장인 햄스터의 도파민 터지는 일상",
      "AI로 탄생한 햄스터 '김햄찌'가 그려내는",
      "직장 생활의 웃픈 에피소드",
      "직장인의 힐링 공감 스트레스가 공존하는 애니메이션"
    ]
  },
  review: {
    name: "리뷰야 놀자",
    handle: "@리뷰야놀자",
    stats: "구독자 69.4만명 • 동영상 703개",
    logo: "https://github.com/love79hr/playZ/blob/main/images/review.png?raw=true",
    youtube: "nIaPDcmFA_o",
    instagram: "https://www.instagram.com/reviewyanolza/",
    youtubeChannel: "https://www.youtube.com/@리뷰야놀자",
    description: [
      "여러 제품들을 여러분에게 솔직하게 리뷰합니다",
      "소면슬라이더부터 실생활 아이템까지",
      "알뜰 소비(?) 팁과 정직한 후기로 나의 소비를 막아보세요",
      "리뷰야 놀자의 솔직 리뷰의 세계로 당신의 지갑을 지켜봅시다"
    ]
  }
};

// 팝업창 관련 요소들
const popup = document.querySelector('.only_popup');
const popupOverlay = document.querySelector('.popup_overlay');
const popupClose = document.querySelector('.popup_close');
const popupLogo = document.querySelector('.tit_logo img');
const popupTitle = document.querySelector('.tit_text h2');
const popupHandle = document.querySelector('.tit_text p');
const popupStats = document.querySelector('.tit_text strong');
const popupIframe = document.querySelector('.popup_cont iframe');
const popupDesc = document.querySelector('.popup_desc');
const popupInstagramLink = document.querySelector('.popup_link a[title="Instagram"]');
const popupYoutubeLink = document.querySelector('.popup_link a[title="YouTube"]');

// 팝업창 열기 함수
function openPopup(creatorId) {
  const creator = creatorData[creatorId];
  if (!creator) return;

  // 팝업창 내용 업데이트
  popupLogo.src = creator.logo;
  popupLogo.alt = `${creator.name} 로고`;
  popupTitle.textContent = creator.name;
  popupHandle.textContent = creator.handle;
  popupStats.textContent = creator.stats;
  
  // YouTube 링크 업데이트
  popupIframe.src = `https://www.youtube-nocookie.com/embed/${creator.youtube}?autoplay=0&rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&playsinline=1&enablejsapi=1`;
  
  // 소셜 미디어 링크 업데이트
  popupInstagramLink.href = creator.instagram;
  popupInstagramLink.target = '_blank';
  popupYoutubeLink.href = creator.youtubeChannel;
  popupYoutubeLink.target = '_blank';
  
  // 설명 업데이트
  popupDesc.innerHTML = creator.description.map(desc => `<p>${desc}</p>`).join('');
  
  // 오버레이와 팝업창 표시
  popupOverlay.style.display = 'block';
  popup.style.display = 'block';
}

// 팝업창 닫기 함수
function closePopup() {
  popupOverlay.style.display = 'none';
  popup.style.display = 'none';
}

// lineup li 클릭 이벤트
document.querySelectorAll('.lineup li').forEach(li => {
  li.addEventListener('click', () => {
    const creatorId = li.getAttribute('data-creator');
    openPopup(creatorId);
  });
});

// 팝업창 닫기 버튼 이벤트
popupClose.addEventListener('click', closePopup);

// 팝업창 배경 클릭 시 닫기
popupOverlay.addEventListener('click', closePopup);

// ESC 키로 팝업창 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.style.display === 'block') {
    closePopup();
  }
});

// Security Modal 기능
const securityModalOverlay = document.querySelector('#securityModalOverlay');
const securityModalPopup = document.querySelector('#securityModalPopup');
const securityModalClose = document.querySelector('#securityModalClose');
const securityLinks = document.querySelectorAll('a[href="javascript:;"]');

// 개인정보처리방침 링크 찾기
securityLinks.forEach(link => {
  if (link.textContent.includes('개인정보처리방침')) {
    link.addEventListener('click', openSecurityModal);
  }
});

// 모달 열기
function openSecurityModal() {
  securityModalOverlay.classList.add('active');
  securityModalPopup.classList.add('active');
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

// 모달 닫기
function closeSecurityModal() {
  securityModalOverlay.classList.remove('active');
  securityModalPopup.classList.remove('active');
  document.body.style.overflow = 'auto'; // 스크롤 복원
}

// 모달 닫기 이벤트
securityModalClose.addEventListener('click', closeSecurityModal);
securityModalOverlay.addEventListener('click', (e) => {
  if (e.target === securityModalOverlay) {
    closeSecurityModal();
  }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && securityModalOverlay.classList.contains('active')) {
    closeSecurityModal();
  }
});


