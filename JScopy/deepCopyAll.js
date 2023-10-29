function deepCopyAll(value) {
    if (typeof value === 'object' && value !== null) {
        // Map 깊은복사..........
        if (value instanceof Map){
            const map2 = new Map();
            value.forEach((value, key) => {
                map2.set(key, deepCopyAll(value));
            });
            return map2;
        };

        // Set 깊은복사
        if (value instanceof Set) {
            // Set 자료구조 생성
            const sets = new Set();
            value.forEach((value) => {
                sets.add(deepCopyAll(value));
            });
            return sets;
        };

        // Array 깊은복사
        if (value instanceof Array) {
            const arr = [];
            value.forEach((value) => {
                arr.push(deepCopyAll(value));
            });
            return arr;
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
            result[prop] = deepCopyAll(value[prop]);
          };
        // result를 반환
        return result;
    };
    
    return value;
};

// deepCopyAll 함수 추가.
// 사용안하면 "TypeError: deepCopyAll is not a function" 에러발생
module.exports = deepCopyAll;