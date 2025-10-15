
// 네비 메뉴 버튼 활성화
const navBar = document.querySelector('.nav_bar_about');
const navMenu = document.querySelector('.nav_menu_about');

navBar.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

// 푸터 스크롤 이벤트 - 색상채우기
window.addEventListener('scroll', checkScroll);
const footerBottom = document.querySelector('.f_bottom');

function checkScroll(){
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  // footer 배경 채우기 애니메이션
  const footerTop = footerBottom.offsetTop;
  const footerHeight = footerBottom.offsetHeight;
  
  if (scrollTop + windowHeight > footerTop + footerHeight * 0.5) {
    footerBottom.classList.add('animate');
  } else {
    footerBottom.classList.remove('animate');
  }
}

// Contact 팝업창 기능
const mapIcon = document.querySelector('.map_icon');
const contactPopup = document.querySelector('.contact_popup');
const contactClose = document.querySelector('.contact_close');
const contactButton = document.querySelector('.contact_button');

let isPopupOpen = false;

// 팝업창 열기/닫기 토글
mapIcon.addEventListener('click', () => {
  if (isPopupOpen) {
    // 팝업창 닫기
    contactPopup.style.transition = 'all 0.3s ease';
    contactPopup.style.opacity = '0';
    contactPopup.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      contactPopup.style.display = 'none';
    }, 300);
    isPopupOpen = false;
  } else {
    // 팝업창 열기
    contactPopup.style.display = 'block';
    contactPopup.style.opacity = '0';
    contactPopup.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      contactPopup.style.transition = 'all 0.3s ease';
      contactPopup.style.opacity = '1';
      contactPopup.style.transform = 'translateY(0)';
    }, 10);
    isPopupOpen = true;
  }
});

// 팝업창 닫기
contactClose.addEventListener('click', () => {
  contactPopup.style.transition = 'all 0.3s ease';
  contactPopup.style.opacity = '0';
  contactPopup.style.transform = 'translateY(-20px)';
  
  setTimeout(() => {
    contactPopup.style.display = 'none';
  }, 300);
  isPopupOpen = false;
});

// 이메일 전송 기능
contactButton.addEventListener('click', () => {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  // 입력값 검증
  if (!name || !email || !message) {
    alert('이름, 이메일, 메시지는 필수 입력 항목입니다.');
    return;
  }
  
  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('올바른 이메일 형식을 입력해주세요.');
    return;
  }
  
  // mailto 링크 생성
  const subject = `Contact Form - ${name}`;
  const body = `이름: ${name}\n이메일: ${email}\n전화번호: ${phone}\n\n메시지:\n${message}`;
  
  const mailtoLink = `mailto:playzofficial33.3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // 새 창에서 이메일 클라이언트 열기
  window.open(mailtoLink);
  
  // 폼 초기화
  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('input[name="phone"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
  
  // 팝업창 닫기
  contactClose.click();
});

// gsap
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.title_about, .contents_box, .contact_title').forEach((el) => {
  gsap.from(el,{
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    }
  });
});