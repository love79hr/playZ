
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

function checkScroll() {
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

// 주제별 카테고리 필터하기 (istope 플러그인)
document.addEventListener('DOMContentLoaded', function() {
  // 화면 크기별 gutter 값 설정
  function getGutterValue() {
    const width = window.innerWidth;
    if (width <= 320) return 10;
    if (width <= 480) return 20;
    if (width <= 600) return 15;
    if (width <= 768) return 20;
    if (width <= 960) return 20;
    if (width <= 1420) return 26;
    if (width <= 1460) return 27;
    return 28; // 1460px 이상
  }

  // 화면 크기별 li width 동적 계산
  function getLiWidth() {
    const width = window.innerWidth;
    const containerWidth = document.querySelector('.creator_list').offsetWidth;
    
    // if (width <= 1460) {
    //   // 2열
    //   const gutter = getGutterValue();
    //   return (containerWidth - (1 * gutter)) / 2;
    // } else if (width <= 768) {
    //   // 3열
    //   const gutter = getGutterValue();
    //   return (containerWidth - (2 * gutter)) / 3;
    // } else if (width <= 1460) {
    //   // 4열
    //   const gutter = 27; // 고정 gutter 값
    //   return (containerWidth - (3 * gutter)) / 4;
    // }
    // return null; // 기본 CSS width 사용
  }

  // li 요소들의 width 설정
  function updateLiWidth() {
    const liWidth = getLiWidth();
    if (liWidth) {
      document.querySelectorAll('.creator_list li').forEach(li => {
        li.style.width = liWidth + 'px';
      });
    } else {
      // 기본 CSS width로 복원
      document.querySelectorAll('.creator_list li').forEach(li => {
        li.style.width = '';
      });
    }
  }

  // Isotope 초기화
  const grid = document.querySelector('.creator_list');
  const iso = new Isotope(grid, {
    itemSelector: 'li',
    layoutMode: 'fitRows',
    percentPosition: true,
    fitRows: {
      gutter: getGutterValue()
    }
  });

  // 초기 width 설정
  updateLiWidth();

  // 화면 크기 변경 시 gutter 값과 width 업데이트
  window.addEventListener('resize', function() {
    updateLiWidth();
    iso.arrange({
      fitRows: {
        gutter: getGutterValue()
      }
    });
  });

  // 필터 버튼 클릭 이벤트
  const filterButtons = document.querySelectorAll('.title_list li a');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 활성 클래스 변경
      document.querySelectorAll('.title_list li').forEach(li => {
        li.classList.remove('on');
      });
      this.parentElement.classList.add('on');
      
      // 필터 값 가져오기
      const filterValue = this.getAttribute('href');
      
      // Isotope 필터 적용
      iso.arrange({ filter: filterValue });
    });
  });
});

// 해시태그 오버레이 모바일 터치 이벤트
document.addEventListener('DOMContentLoaded', function() {
  const creatorLinks = document.querySelectorAll('.creator_list li a');
  
  creatorLinks.forEach(link => {
    // 모바일 터치 이벤트
    link.addEventListener('touchstart', function(e) {
      e.preventDefault();
      
      // 다른 모든 링크에서 active 클래스 제거
      creatorLinks.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.classList.remove('active');
        }
      });
      
      // 현재 링크 토글
      link.classList.toggle('active');
    });
    
    // 데스크톱에서는 터치 이벤트 비활성화
    link.addEventListener('mouseenter', function() {
      link.classList.remove('active');
    });
  });
  
  // 다른 곳 클릭 시 오버레이 닫기
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.creator_list li a')) {
      creatorLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});