const deepCopy = require('./deepCopy');

// 깊은 복사 testing
test('deepCopy testing', () => {

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

    // 깊은 복사 실행
    const copiedObj = deepCopy(obj);
    const copiedMap = deepCopy(map);
    const copiedSet = deepCopy(set);
    const copiedArr = deepCopy(arr);
    const copiedRegexp = deepCopy(regexp);
    const copiedDate = deepCopy(date);

    // Obj 비교하기
    expect(copiedObj).toStrictEqual(obj);

    // Map 비교하기
    expect(copiedMap).toStrictEqual(map);

    // Set 비교하기
    expect(copiedSet).toStrictEqual(set);

    // Array 비교하기
    expect(copiedArr).toStrictEqual(arr);

    // RegExp 비교하기
    expect(copiedRegexp).toStrictEqual(regexp);
    expect(copiedRegexp).toEqual(regexp);

    // Date 비교하기
    expect(copiedDate).toStrictEqual(date);
    expect(copiedDate).toEqual(date);
});