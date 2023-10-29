const deepCopyAll = require('./deepCopyAll');

// Obj 깊은 복사 testing
test('deepCopyAll testing', () => {
    const obj = {
         a: 1,
         b: {
             c: 2
            },
         map: new Map([[1,2], [3,4]]),
         set: new Set([1, "A", true]),
         arr: [1, 2, 3, [4, 5, [6, 7]]]
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
    // Array
    expect(obj2.arr).toStrictEqual(obj.arr);
    expect(obj2.arr[3]).toStrictEqual(obj.arr[3]);
    expect(obj2.arr[3][1]).toStrictEqual(obj.arr[3][1]);
});