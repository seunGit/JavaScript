// HTML에서 .login, .container, .close 클래스를 갖는 요소를 선택합니다.
const openBtn = document.querySelector('.login');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close');

// 로그인 버튼을 클릭했을 때 실행되는 이벤트 핸들러
openBtn.addEventListener('click', e => {
    // .container를 플렉스로 설정하여 화면에 표시하고
    container.style.display = 'flex';
    // 로그인 버튼을 숨깁니다.
    openBtn.style.display = 'none';
});

// 닫기 버튼을 클릭했을 때 실행되는 이벤트 핸들러
closeBtn.addEventListener('click', e => {
    // .container를 숨깁니다.
    container.style.display = 'none';
    // 로그인 버튼을 다시 표시합니다.
    openBtn.style.display = 'flex';
});

// .container 요소 자체를 클릭했을 때 실행되는 이벤트 핸들러
container.addEventListener('click', e => {
    // 클릭된 요소를 가져옵니다.
    const evTarget = e.target;

    // 만약 클릭된 요소가 .container 클래스를 갖고 있다면
    if (evTarget.classList.contains("container")) {
        // .container를 숨기고
        container.style.display = "none";
        // 로그인 버튼을 다시 표시합니다.
        openBtn.style.display = 'flex';
    }
});

// 창(window)에 대한 keyup 이벤트를 감지하는 이벤트 핸들러
window.addEventListener("keyup", e => {
    // 모달이 화면에 표시되어 있고, 눌린 키가 "Escape" 키인 경우
    if (container.style.display === "flex" && e.key === "Escape") {
        // 모달을 숨기고
        container.style.display = "none";
        // 로그인 버튼을 다시 표시합니다.
        openBtn.style.display = 'flex';
    }
});