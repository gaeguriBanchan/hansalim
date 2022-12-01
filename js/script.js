// HTML 요소를 참조하는 법
// HTML 요소 및 이미지, 동영상, 사운드 등.
// 모든 요소가 갖추어지면 실행하도록 한다.
// window.onload = function() {} 1번만 작성한다.
window.onload = function () {
  // 펼침 목록 보기 기능

  // 더보기 버튼 저장 (button more-menu-bt #menu-bt)
  const menuBt = document.getElementById("menu-bt");
  // console.log(menuBt);
  // 더보기 펼침 목록 (more-menu-list)
  const menuLt = document.getElementById("menu-list");
  // 참여 목록 기능
  const joinBt = document.getElementById("join-bt");
  const joinLt = document.getElementById("join-list");
  // 조합원센터 목록 기능
  const centerBt = document.getElementById("center-more");
  const centerLt = document.getElementById("center-list");
  // 배열은 순서번호가 주어진다.
  // 순서번호 index라고 부름
  const toggleListArr = [menuLt, joinLt, centerLt];
  const toggleBtArr = [menuBt, joinBt, centerBt];

  // html 클릭시 펼침목록 모두!!! 닫기
  // 이벤트 명 다음에 할일(콜백함수 - Hook)
  document.addEventListener("click", function () {
    // for (let i = 0; i < toggleListArr.length; i++) {
    //   toggleListArr[i] = style.display = "none";
    // }
    // alert("화면클릭");
    toggleListArr.forEach(function (item) {
      item.style.display = "none";
    });

    toggleBtArr.forEach(function (item) {
      item.classList.remove("active");
    });
  });

  // 목록 전체를 클릭해도 이벤트 전달을 막는다.
  toggleListArr.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  // 코드블락이 같은기능이 반복되서 만든다.
  // 추가 예정 기능 : 아이콘 바꾸기
  function listToggle(Bt, Lt) {
    // 처음에는 목록을 보여주지 않는다.
    // click 이벤트가 발생하면 함수(콜백함수)를 실행
    Bt.addEventListener("click", function (event) {
      // 누군지 알아요
      // console.log(event.type); // 어떤일(Event)가 일어났는지
      // console.log(event.target); // 이벤트를 발생시킨 html 요소
      // currentTarget : 이벤트를 발생시킨 html 요소
      // 그냥 target말고 currentTarget을 쓰자
      // console.log(event.currentTarget);
      // console.log(Lt);

      // 클릭되었다는 이벤트는 아래로 전달된다.
      // 클릭된 이벤트는 아래로 전달하지 못하도록 막는다.
      event.stopPropagation();

      // 일단 모든 버튼들을 그냥 막 초기화하자
      // 선택되었든 말든 그냥 막 초기화
      // for (let i = 0; i < toggleBtArr.length; i++) {
      //   toggleBtArr[i].classList.remove("active");
      // }
      toggleBtArr.forEach(function (item) {
        item.classList.remove("active");
      });

      const nowListId = Lt.getAttribute("id");
      const hideArr = toggleListArr.filter(function (item) {
        // console.log(item);
        // 선택대상이 html 태그라면 속성이 있다
        // 속성은 attribute 라고함
        // <img src='a.jpg' class='go' id='ig'>
        // img 태그의 속성 src를 알고싶다면
        // getAttribute('src')
        // class, id 도 동일하게 시행
        let id = item.getAttribute("id");
        // console.log(id);
        if (id !== nowListId) {
          return this;
        }
      });
      console.log(hideArr);
      // hideArr[0].style.display = "none";
      // hideArr[1].style.display = "none";
      // for (let i = 0; i < hideArr.length; i++) {
      //   hideArr[i].style.display = "none";
      // }
      hideArr.forEach(function (item) {
        item.style.display = "none";
      });

      // 이벤트를 발생시킨 HTML 태그 종류 파악하기
      console.log(this.tagName);
      // a태그인 경우 href가 작동한다.
      // a태그의 기본 동작(웹브라우저)
      if (this.tagName === "A") {
        event.preventDefault();
      }

      // html 요소에 css 적용 사항을 파악한다.
      const css = getComputedStyle(Lt).display;
      //
      if (css === "none") {
        Lt.style.display = "block";
        // 클래스 강제 추가
        this.classList.add("active");
      } else {
        Lt.style.display = "none";
        // 클래스 강제 삭제
        this.classList.remove("active");
      }
    });
  }

  // 더보기 목록 기능

  // console.log(menuList);
  listToggle(menuBt, menuLt);

  /**
  // 더보기 버튼을 클릭해서
  menuBt.addEventListener("click", function () {
    // 더보기 펼침 목록을 보이고 숨긴다. (토글)
    // 1. 현재 css값을 알아온다
    const css = getComputedStyle(menuLt).display;
    // console.log(css);
    // 2. display : none/block 알아온다
    // 3. 교체해준다. none -> block, block -> none
    if (css === "none") {
      menuLt.style.display = "block";
    } else {
      menuLt.style.display = "none";
    }
  });
  */

  listToggle(joinBt, joinLt);

  listToggle(centerBt, centerLt);

  // fixTop
  // const fixTop = document.getElementById("fix-top");
  // // console.log(fixTop);
  // fixTop.addEventListener("click", function () {
  //   alert("탑버튼입니다.");
  // });

  // 위로가기 기능
  // 위로가기 버튼 html요소를 저장한다.
  const fixTopBt = document.querySelector(".fix-top");
  fixTopBt.addEventListener("click", function (item) {
    // 스크롤바를 상단으로 이동시킨다.
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });

    // GSAP 버전
    // gsap.to(window, 0.4, {
    //   scrollTo: 0,
    // });

    // Anime.js 버전
    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  });

  // 오늘의 상품 기능
  const 제품 = {
    이름: "콩콩크림빵",
    단위: "1개",
    가격: 1500,
    태그: "인기",
    사진: "a.jpg",
    아이디: "0",
    재고수량: 100,
    링크: "#",
  };
  // 오늘의 상품 데이터
  let TODAY_GOOD;
  // data.json 을 로딩
  const xhttp = new XMLHttpRequest();
  // 파일이 모두 불러들여졌는지 검사하고
  // State : Response 불러들이고 있는 상태
  xhttp.onreadystatechange = function (event) {
    console.log(event);
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      // 불러온 데이터 확인해보자
      TODAY_GOOD = req.response;
      console.log(TODAY_GOOD);
    }
  };
  // 자료를 호출한다.
  xhttp.open("GET", "data.json");
  // 웹브라우저 기능 실행 요청
  xhttp.send();
};
/**
 * const menuBt = document.querySelector('#menu-bt');
 * const menuBt = document.querySelector('.more-menu-bt');
 * 이런식으로도 적용 가능
 */
