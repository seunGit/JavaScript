// var는 function scope에서 적용된다.
function main() {
    if (true) {
        var x = "hello";
    }
    console.log(x);
}
main()
// var의 경우는 funciton 내부에서의 스코프에 영향을 받기 때문에
// 범위를 벗어나 ReferenceError가 발생한다.
// 하지만 위의 코드와 같이 if문, 함수 스코프를 벗어난 상태에서는 출력이 잘 되는것을 볼 수 있다.

function main2() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}
main2()
// 위의 for문은 0에서 4까지 돌면서 0~4까지 출력한다.
// 하지만 5를 만나면서 조건에 맞지 않기때문에 for문을 빠져나오는데
// var로 선언되었기 때문에 블록스코프를 무시하고 i=5일때 빠져나온 포문의 i를 참조한다.
// 따라서 for문 블록스코프를 벗어난 console.log(i)는 5가 출력되는것을 알수있다.
for(var i = 0; i < 5; ++i) {
    setTimeout(() => { 
        console.log('variable-' + i); 
      }, 100
    );
  }

//   for (var i = 0; i < 5; ++i) {
//   (function(j) {
//     setTimeout(function() { 
//       console.log('variable-' + j); 
//     }, 100);
//   })(i);
// }

function myFunction1() {
    var a = 'Brandon';
    console.log(a);
 }
 function myFunction2() {
    var a = 'Matt';
    console.log(a);
 }
 function myFunction3() {
    var a = 'Bill';
    console.log(a);
 }
 myFunction1()
 myFunction2()
 myFunction3()
