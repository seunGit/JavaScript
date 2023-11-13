// async
// 함수앞에 async 키워드 작성
// Promise를 생성하지 않아도 Promise를 반환한다.
// async function userName() {
//     return "seungit";
// }
// console.log(userName());

// // await
function userName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 1000);
    });
}

async function sayName() {
    // await 키워드를 사용하여 promise가 처리될때까지 기다림.
    const result = await userName("seungit");
    console.log(result)
}
console.log("너의 이름은?");    // 동기적인 코드
sayName();  // 비동기 함수 호출, 1초 뒤 출력
