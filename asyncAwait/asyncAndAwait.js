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
    const result = await userName("seungit");
    console.log(result)
}
console.log("너의 이름은?");
sayName();
