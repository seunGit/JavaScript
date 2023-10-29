// 프로미스 생성
// resolve는 성공했을때, reject는 실패했을때 실행되는 함수가 된다.(콜백함수)
// Promise 객체의 기본상태는 pending(대기)상태이며 성공했을시 fulfilled(이행), 실패시 rejected(거부)의 상태로 바뀐다.

const pm = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Good :>')
        reject(new Error("Bad :<"))
    }, 2000)
});
console.log("주문 시작!")
pm.then((result) => {console.log(result)})
  .catch((error) => {console.log(error)})
  .finally(() => {console.log("끝 :)")})