function deepCopyAll(value) {
    if (typeof value === 'object' && value !== null) {
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