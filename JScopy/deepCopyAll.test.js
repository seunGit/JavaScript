const deepCopyAll = require('./deepCopyAll');

// Obj 깊은 복사 testing
test('deepCopyAll testing', () => {
    const obj = {
         a: 1,
         b: {
             c: 2
            },
         map: new Map([[1,2], [3,4]]),
         set: new Set([1, "A", true])
        };

    const obj2 = deepCopyAll(obj);
    // Obj
    expect(obj2.a).toStrictEqual(obj.a);
    expect(obj2.b).toStrictEqual(obj.b);
    expect(obj2.b.c).toStrictEqual(obj.b.c);
    // Map
    expect(obj2.map).toStrictEqual(obj.map);
    expect(obj2.map[1]).toStrictEqual(obj.map[1]);
    // Set
    expect(obj2.set).toStrictEqual(obj.set);
    expect(obj2.set[1]).toStrictEqual(obj.set[1]);
});