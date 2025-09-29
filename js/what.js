
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
let swiper = new Swiper(".poster_slide", {
  spaceBetween: 30,
  slidePerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  autoplay:true,
});


// gsap
(function initGSAP () {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);


  gsap.timeline({
    scrollTrigger: {
      trigger: '.what_title_cont',
      start: 'top 75%',
      once: true,
    },
    defaults: { ease: 'power1.out' },
  }).from(
    ['.what_title_cont'],
    { opacity: 0, y: 32, duration: 0.65, stagger: 0.12 }
  );


  fadeUpOnScroll([
    '.what_img img',
    '.what_title_cont .first_title',
    '.what_title_cont .second_title',
    '.what_title_cont .third_title',
    '.what_title_cont .fourth_title',

    '#what_poster .poster_top .text p',
    '#what_poster .poster_top img',
    '#what_poster .poster_slide',

    '#what_sponsor .mains_first',
    '#what_sponsor .mains_second',
    '#what_sponsor .mains_third',
    '#what_sponsor .mains_fourth',
    '#what_sponsor .mains_fifth',
    '#what_sponsor .mains_sixth',
    '#what_sponsor .mains_seventh',
    '#what_sponsor .mains_eight',
    '#what_sponsor article.sponsor p.client',
    '#what_sponsor article.sponsor ul.client_img li',
  ]);

  function fadeUpOnScroll (selectors, opts = {}) {
    const {
      y = 32,
      duration = 0.6,
      ease = 'power1.out',
      start = 'top 85%',
      toggleActions = 'play none none reverse',
    } = opts;

    const sel = Array.isArray(selectors) ? selectors.join(',') : String(selectors || '');
    gsap.utils.toArray(sel).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        ease,
        scrollTrigger: { trigger: el, start, toggleActions },
      });
    });
  }
})();

