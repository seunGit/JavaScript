const deepCopyAll = require('./deepCopyAll');

// Obj 깊은 복사 testing
test('deepCopyAll testing', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(deepCopyAll(obj)).toEqual(obj);
});