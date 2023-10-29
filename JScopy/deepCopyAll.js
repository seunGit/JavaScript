function deepCopyAll(value) {
    // Map 깊은복사..........
    if (typeof value === 'object' && value !== null) {
        if (value instanceof Map){
            const map2 = new Map();
            // << 틀린부분 >> forEach => key, value로 하니까 오류남.
            value.forEach((value, key) => {
                map2.set(key, deepCopyAll(value));
            });
            return map2;
        }
        
        if (value instanceof Set) {
            // Set 자료구조 생성
            const sets = new Set();
            value.forEach((value) => {
                sets.add(deepCopyAll(value));
            });
            return sets;
        }
        
        const result = {};
        // obj내의 프로퍼티를 찾는다.
        for (var prop in value) {
            // 재귀함수를 호출하면서 객체의 속성을 하나씩 result값에 복사한다.
            // 내부의 중첩 객체가 없다면 재귀함수 종료.
            // deepCopy함수를 사용하여 result에 객체를 복사함.
            result[prop] = deepCopyAll(value[prop]);
          }
        // result를 반환
        return result;
    }
    
    return value;
}   

// deepCopyAll 함수 추가.
// 사용안하면 "TypeError: deepCopyAll is not a function" 에러발생
module.exports = deepCopyAll;