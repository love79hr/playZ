
// 네비 메뉴 버튼 활성화
const navBar = document.querySelector('.nav_bar_what');
const navMenu = document.querySelector('.nav_menu_what');

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


// swiper
var swiper = new Swiper(".poster_slide", {
  spaceBetween: 30,
  slidePerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  autoplay:true,
});
