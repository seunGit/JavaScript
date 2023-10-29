const set = new Set(); // 비어있는 set 객체 생성
const numSet = new Set([1, 2, 3]);

// add 값 추가
set.add(1);
set.add("A");
set.add(true);

console.log(set); // 결과: Set(0) {}
console.log(numSet); // 결과: Set(3) { 1, 2, 3 }

// 한줄로 추가하는 방법
// 위에 추가한 값들이 있기 때문에(중복허용X) 아무런 변화가 없다.
set.add(1).add("A").add(true);

// delete
// 값을 삭제하는데 성공하면 true, 실패하면 false가 반환된다.
set.delete(1);  // 결과: true
set.delete(2);  // 결과: false

// has
// 특정값 존재여부 확인하기
if (set.has("A")) {
    console.log("A가 존재합니다.")
};
const result = set.has("B") ? "Yes" : "No";
console.log(result); // 결과: No

// size
// 값 갯수 확인하기
console.log(set.size);  // 결과: 2

// clear
// 세트 값 제거하기
set.clear();
console.log(set); // 결과: Set(0) {}

// for of
// 세트에 저장되어 있는 값들을 순회할때 사용
for (const num of numSet) {
    console.log(num);   // 결과: 1, 2, 3
};
// forEach
// 세트에 저장되어 있는 값들을 순회할때 사용
numSet.forEach((num) => {
    console.log(num);
});

// 배열을 세트로 변환
// 배열은 중복을 허용하기 떄문에 set으로 변환하면 중복값이 제거된다.
// 중복값이 필요한 경우에는 사용을 하면 안된다.
const arr = [1, 2, 2, 3, 4, 5, 5];
const setArr = new Set(arr);
console.log(setArr);    // 결과: Set(5) { 1, 2, 3, 4, 5 }

// 세트를 배열로 변환
// rest 파라미터를 사용하거나
const arrSet = [...setArr];
console.log(arrSet);    // 결과: [ 1, 2, 3, 4, 5 ]

// Array.from() 함수를 사용하면 된다.
const arrSet2 = Array.from(setArr);
console.log(arrSet2);    // 결과: [ 1, 2, 3, 4, 5 ]

// 배열에서 중복값을 제거할때 set을 활용할수 있다.
// Array.from() 사용해도 된다.
// 배열은 유지된다. set x
const numArr= [1,1,2,3,4,4,5,6];
const uniqueNumArr = [...new Set(numArr)];
console.log(uniqueNumArr);  // 결과: [ 1, 2, 3, 4, 5, 6 ]

// set의 자료구조 응용하기
const set4 = new Set([1, 2, 3, 4, 5]);
const set5 = new Set([4, 5, 6, 7, 8]);

// 합집합
const union = new Set([...set4, ...set5]);
console.log([...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// 교집합
const intersection = new Set([...set4].filter((value) => set5.has(value)));
console.log([...intersection]); // [4, 5]

// 차집합
const difference = new Set([...set4].filter((value) => !set5.has(value)));
console.log([...difference]); // [1, 2, 3]