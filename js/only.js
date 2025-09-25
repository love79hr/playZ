
// 네비 메뉴 버튼 활성화
const navBar = document.querySelector('.nav_bar_only');
const navMenu = document.querySelector('.nav_menu_only');

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

// 주제별 카테고리 필터하기 (반응형 gutter 적용)
window.addEventListener("load", () => {
  let grid;
  
  // 화면 크기에 따른 gutter 값 설정
  function getGutterValue() {
    const width = window.innerWidth;
    
    if (width <= 320) return 10;      // 매우 작은 화면
    if (width <= 480) return 20;      // 매우 작은 화면
    if (width <= 768) return 24;     // 모바일
    if (width <= 1024) return 28;    // 태블릿
    if (width <= 1440) return 36;    // 작은 데스크톱
    return 38;                       // 큰 데스크톱
  }
  
  // isotope 초기화
  function initIsotope() {
    const gutterValue = getGutterValue();
    const width = window.innerWidth;
    
    grid = new Isotope("ul.creator_list", {
      itemSelector: 'li',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: 'li',
        gutter: gutterValue,
        horizontalOrder: true,
        fitWidth: true
      }
    });
  }

  // CSS 필터링 함수 (600px 이하용)
  function filterItems(filter) {
    const items = document.querySelectorAll('ul.creator_list li');
    
    items.forEach(item => {
      if (filter === '*' || filter === '') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter.replace('.', ''))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }
  
  // 초기화
  initIsotope();
  
  // 리사이즈 이벤트 (디바운싱 적용)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      grid.masonry({
        gutter: getGutterValue(),
        fitWidth: true
      });
      grid.layout();
    }, 250); // 250ms 후에 실행
  });

  // 필터 기능
  const btns = document.querySelectorAll(".title_list >li");

  for(let el of btns){
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      // isotope 필터링 사용
      grid.arrange({
        filter: sort
      });

      for(let el of btns){
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    })
  }
})
