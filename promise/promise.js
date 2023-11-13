// 프로미스 생성
// resolve는 성공했을때, reject는 실패했을때 실행되는 함수가 된다.(콜백함수)
// Promise 객체의 기본상태는 pending(대기)상태이며 성공했을시 fulfilled(이행), 실패시 rejected(거부)의 상태로 바뀐다.

// const promisePrac = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('커피 주문완료 ! :>')
//         reject(new Error("결제 실패 :<"))
//     }, 1000)
// });
// console.log("주문 시작!")
// promisePrac
//     .then((result) => { console.log(result) })
//     .catch((error) => { console.log(error) })
//     .finally(() => { console.log("끝 :)") })

// const promiseSumPrac = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100)
//     }, 1000)

// });

// async function sum() {
//     try {
//         const num1 = await promiseSumPrac;
//         const result = num1 +50;

//         const num2 = result;
//         const result2 = num2 + 50;

//         const num3 = result2;
//         const result3 = num3 +50

//         console.log(result3);

//     } catch (error) {
//         console.log(error);
//     }
// }
// console.log("정답은~~~~~~~?");
// sum();

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

async function americano() {
    await delay(2000);
    return "아메리카노"
};

async function cappuccino() {
    await delay(1000);
    return "카푸치노"
};

// 길어진다면 promise hell 이 될 것이다.
// function allCoffee() {
//     return americano().then(ame => {
//         return cappuccino().then(cappu => `${ame}와 ${cappu}`)
//     })
// }

// async와 await 사용하기
// async function allCoffee() {
//     const ame = await americano();
//     const cappu = await cappuccino();
//     return `${ame}와 ${cappu}`
// }

// 병렬처리
async function allCoffee() {
    return Promise.all([americano(), cappuccino()])
        .then(coffee => coffee.join('와 '));
};

// 먼저 만들어진 커피를 출력하고 싶을때
function firstCoffee() {
    return Promise.race([americano(), cappuccino()]);
};

console.log("커피를 만듭니다.");
allCoffee().then(console.log);
firstCoffee().then(console.log);