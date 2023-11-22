function deepCopy(value) {
    if (typeof value === 'object' && value !== null) {
        // Map 깊은복사..........
        if (value instanceof Map) {
            const result = new Map();
            // forEach의 첫번째 인자값에는 콜백함수가 들어간다.
            // 콜백함수에서 첫번째에는 값, 두번째에는 키가 들어간다.
            value.forEach((mapValue, mapKey) => {
                result.set(mapKey, deepCopy(mapValue));
            });
            return result;
        };

        // Set 깊은복사
        if (value instanceof Set) {
            // Set 자료구조 생성
            const result = new Set();
            value.forEach((value) => {
                result.add(deepCopy(value));
            });
            return result;
        };

        // Array 깊은복사
        if (value instanceof Array) {
            const result = [];
            value.forEach((value) => {
             result.push(deepCopy(value));
            });
            return result;
        }

        // RegExp(정규표현식) 깊은복사
        if (value instanceof RegExp) {
            return new RegExp(value);
        }
        
        // Date 깊은복사
        if (value instanceof Date) {
            return new Date(value);
        }

        // Obj 깊은복사
        const result = {};
        // obj내의 프로퍼티를 찾는다.
        for (var prop in value) {
            // 재귀함수를 호출하면서 객체의 속성을 하나씩 result값에 복사한다.
            // 내부의 중첩 객체가 없다면 재귀함수 종료.
            // deepCopy함수를 사용하여 result에 객체를 복사함.
            result[prop] = deepCopy(value[prop]);
        };
        // result를 반환
        return result;
    };

    return value;
};

// 객체 생성
const obj = { a: 1, b: { c: 2 } }
// Map 생성
const map = new Map([['one', 1], ['two', 2, ["three", 3]]]);
// Set 생성
const set = new Set([1, "A", true]);
// 배열 생성
const arr = [1, 2, 3, [4, 5, [6, 7]]];
// 정규표현식 생성
const regexp = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/;
// 날짜 생성
const date = new Date('Novemver 11, 2023');

// 자료구조 깊은 복사 실행
const copiedObj = deepCopy(obj);
const copiedMap = deepCopy(map);
const copiedSet = deepCopy(set);
const copiedArr = deepCopy(arr);
const copiedRegexp = deepCopy(regexp);
const copiedDate = deepCopy(date);

// 복사 결과
console.log('beforeObject:', obj);
console.log('afterObject:', copiedObj);

console.log('beforeMap:', map);
console.log('afterMap:', copiedMap);

console.log('beforeSet:', set);
console.log('afterSet:', copiedSet);

console.log('beforeArray:', arr);
console.log('afterArray:', copiedArr);

console.log('beforeRegExp:', regexp);
console.log('afterRegExp:', copiedRegexp);

console.log('beforeDate:', date);
console.log('afterDate:', copiedDate);

// deepCopy 함수 추가.
// 사용안하면 "TypeError: deepCopy is not a function" 에러발생
module.exports = deepCopy;