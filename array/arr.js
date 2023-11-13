// // 배열(Array) 연습
// const arr = [1, 2, 3, 4, 5];

// // 배열 값 복사 방법
// // 전개연산자([...arr]), slice(), concat()

// // Rest 파라미터 사용하기, 전개연산자 사용
// arrRest = [...arr];
// console.log(arrRest);  // 결과: [ 1, 2, 3, 4, 5 ]

// // concat() 메서드 사용하기
// arr2 = [].concat(arr);
// console.log(arr2);  // 결과: [ 1, 2, 3, 4, 5 ]
// arr3 = arr2.concat([...arr]);
// console.log(arr3)   // 결과: [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]

// // slice() 메서드 사용하기
// // 첫번째 인자 : 복사를 시작할 인덱스(포함)
// // 두번째 인자 : 복사를 끝나는 인덱스(포함x)
// arr4 = arr.slice(2, 4); // 2번째 인덱스(3)부터 4번쨰 인덱스(5)전까지 복사
// console.log(arr4);  // 결과: [ 3, 4 ]

// // 배열 생성
// const fruit = [];

// // push() - 배열 끝에 요소 추가하기
// fruit.push("apple", "banana", "melon");
// console.log(fruit); // 결과: [ 'apple', 'banana', 'melon' ]

// // pop() - 배열 맨끝의 요소 제거하고 제거된 값 반환.
// const fruit2 = fruit.pop();
// console.log(fruit2);    // 결과: melon
// console.log(fruit); // 결과: [ 'apple', 'banana' ]

// // shift() - 배열의 첫요소 제거하고 제거된 값 반환.
// const fruit3 = fruit.shift();
// console.log(fruit3);    // 결과: apple
// console.log(fruit); // 결과: [ 'banana' ]

// // unshift() - 배열의 시작지점부터 요소 추가
// fruit.unshift("orange", "cherry");
// console.log(fruit); // 결과: [ 'orange', 'cherry', 'banana' ]

// // concat() - 하나 이상의 배열을 합쳐 새로운 배열을 반환.
// const arrNum1 = [1, 2];
// const arrNum2 = [3, 4];
// const arrNum3 = arrNum1.concat(arrNum2);
// const arrNum4 = arrNum2.concat(arrNum1);
// console.log(arrNum3);   // 결과: [ 1, 2, 3, 4 ]
// console.log(arrNum4);   // 결과: [ 3, 4, 1, 2 ]

// // slice() - 시작지점에서 끝지점 전까지의 인덱스 결과물을 배열로 반환.
// const arrSlice1 = [1, 2, 3, 4, 5];
// const arrSlice2 = arrSlice1.slice(1,3);
// console.log(arrSlice2); // 결과: [ 2, 3 ]

// // splice() - 시작지점에서부터 지우고 싶은 개수를 정하고 그 자리에 요소를 추가. 결과물은 배열로 반환
// const arrSplice1 = [1, 2, 3, 4, 5];
// const arrSplice2 = arrSplice1.splice(0, 2)
// console.log(arrSplice1);    // 결과: [ 3, 4, 5 ]
// console.log(arrSplice2);    // 결과: [ 1, 2 ]

// // reverse() - 배열의 순서를 거꾸로 뒤집어 놓으셨다.
// const reverseArr = [1, 2, 3, 4, 5];
// reverseArr.reverse();
// console.log(reverseArr);

// // sort() - 배열의 원소를 정렬한다. 문자열로 취급한다.
// const sortArr = [2, 5, 12, 1, 6, 3];
// sortArr.sort();
// console.log(sortArr);   // 결과: [ 1, 12, 2, 3, 5, 6 ]

// // 정의한 sort함수는 a와 b를 받아 차이값을 구해 정렬한다. 
// sortArr.sort((a, b) => a - b);
// console.log(sortArr);   // 결과: [ 1, 2, 3, 5, 6, 12 ]

// // join() - 배열 원소들을 빼내서 연결하여 하나의 문자열로 반환한다.
// const joinArr1 = ["I", "AM", "A", "BOY"];
// const joinArr2 = joinArr1.join("-");
// const joinArr3 = joinArr1.join();   // 공백이면 ,(쉼표)로 구분된다.
// console.log(joinArr2);  // 결과: I-AM-A-BOY
// console.log(joinArr3);  // 결과: I,AM,A,BOY

// // toString() - 배열을 문자로 바꾸어 반환
// const numArr1 = [1,2,3,4,5]
// const numArr2 = numArr1.toString();
// console.log(numArr2);   // 결과: 1,2,3,4,5

// filter()와 map()
class Car {
    constructor(name, wheels, color, charge) {
        this.name = name;
        this.wheels = wheels;
        this.color = color;
        this.charge = charge;
    }
}

const cars = [
    new Car("bmw", 4, "black", false),
    new Car("audi", 4, "white", false),
    new Car("tesla", 4, "yellow", true),
]
// 
const result5 = cars.map((car) => car.color); // 결과: [ 'black', 'white', 'yellow' ]
const result1 = cars.map((car) => car.wheels > 3);  // 결과: [ true, true, true ]
const result2 = cars.map((car) => car.name === "bmw");  // 결과: [ true, false, false ]

const result3 = cars.filter((car) => car.charge);   // 결과: [ Car { name: 'tesla', wheels: 4, color: 'yellow', charge: true } ]
const result4 = cars.filter((car) => car.name === "bmw");   // 결과: [ Car { name: 'bmw', wheels: 4, color: 'black', charge: false } ]


console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)