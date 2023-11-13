// for loop
for (let i = 0; i < 3; i++) {
    console.log(i) // 결과: 0, 1, 2
}

// for-in
// 객체를 나얄할때 사용한다. 객체의 키값을 반복할때 사용한다.
const obj = {a: 1, b: 2, c: 3}
for (let key in obj) {
    console.log(`key : ${key}, value : ${obj[key]}`); // 결과: key : a, value : 1, key : b, value : 2, key : c, value : 3
}

// for-of
// 배열 또는 이터러블 객체의 값을 반복할때 사용한다.
const arr1 = [1, 2, 3];
for (let num of arr1) {
    console.log(num);   // 결과: 1, 2, 3
}

// for-each
// 배열의 각 요소에 대해 순회하면서 콜백함수를 호출하고 반복한다.
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((num, index) => {
    console.log(`인덱스 ${index}의 요소는 ${num}입니다.`);
    // 결과 : 인덱스 0의 요소는 1입니다.
    //       인덱스 1의 요소는 2입니다.
    //       인덱스 2의 요소는 3입니다.
    //       인덱스 3의 요소는 4입니다.
    //       인덱스 4의 요소는 5입니다.
});

// 객체 
const obj3 = {
    name : "seungit",
    age : 20,
    hansome :  true
}

const keys = Object.keys(obj3);
const values = Object.values(obj3);
const entries = Object.entries(obj3);
console.log(keys);   // 결과: [ 'name', 'age', 'hansome' ]
console.log(values);  // 결과: [ 'seungit', 20, true ]
console.log(entries);   // 결과: [ [ 'name', 'seungit' ], [ 'age', 20 ], [ 'hansome', true ] ]

keys.forEach((key) => {
    console.log(`속성이름: ${key}, 속성 값: ${obj3[key]}`)
    // 결과: 속성이름: name, 속성 값: seungit
    //      속성이름: age, 속성 값: 20
    //      속성이름: hansome, 속성 값: true
});

entries.forEach((value) => {
    console.log(`속성이름: ${value[0]}, 속성 값: ${value[1]}`)
    // 결과: 속성이름: name, 속성 값: seungit
    //      속성이름: age, 속성 값: 20
    //      속성이름: handsome, 속성 값: true
});