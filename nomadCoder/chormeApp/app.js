// HTML에서 필요한 요소들을 가져옵니다.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

// CSS 클래스 이름과 로컬 스토리지 키를 상수로 정의합니다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 폼 제출 시 호출되는 함수
function onLoginSubmit(event) {
    // 기본 제출 동작을 막습니다.
    event.preventDefault();

    // 로그인 폼을 숨기고, 입력된 유저명을 가져와 로컬 스토리지에 저장합니다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    // 유저명을 화면에 출력하는 함수를 호출합니다.
    paintGreetings(username);
}

// 화면에 유저명을 출력하는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 링크 클릭 시 호출되는 함수
function linkClick(event) {
    // 기본 동작을 막습니다.
    event.preventDefault();
    console.dir(event);
}

// 로컬 스토리지에서 유저명을 가져옵니다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬 스토리지에 유저명이 없을 경우 로그인 폼을 보여주고, 있을 경우 화면에 출력합니다.
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

// 이벤트 리스너를 등록합니다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", linkClick);
