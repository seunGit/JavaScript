// const fn = {
//     add : (num1, num2) => num1 + num2
// };

// module.exports = fn;

// test
// // 어떤 파일을 불러올지 경로 설정
// const fn = require('./fnEx');

// // test(테스트이름 설정),
// // expect에 검증할 값
// // toBe에 기대되는 값
// test('1은 1이야', () => {
//     expect(1).toBe(1);
// });
// // toBe는 fn가 같은 값을 가리키고 있는지 확인하는 방법
// test('2더하기 3은 5야', ()=>{
//     expect(fn.add(2,3)).toBe(5);
// });

// // `.not`을 통해 다른 값이 나오는지 확인함
// test('3더하기 3은 5가 아니야', ()=>{
//     expect(fn.add(3,3)).not.toBe(5);
// });