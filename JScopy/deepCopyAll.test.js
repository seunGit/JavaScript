const deepCopyAll = require('./deepCopyAll');

// Obj 깊은 복사 testing
test('deepCopyAll testing', () => {
    const obj = {
         a: 1, b: {c: 2},
         map: new Map([['one',1], ['two',2]]),
         set: new Set([1, "A", true]),
         arr: [1, 2, 3, [4, 5, [6, 7]]],
         regexp: /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/,
         date: new Date('October 29, 2023')
        };

    const obj2 = deepCopyAll(obj);

    // Obj
    expect(obj2.a).toStrictEqual(obj.a);
    expect(obj2.a).toBe(obj.a);
    expect(obj2.b).toStrictEqual(obj.b);
    expect(obj2.b.c).toStrictEqual(obj.b.c);
    expect(obj2.b.c).toBe(obj.b.c);

    // Map
    expect(obj2.map).toStrictEqual(obj.map);
    expect(obj2.map[1]).toStrictEqual(obj.map[1]);
    expect(obj2.map[1]).toBe(obj.map[1]);

    // Set
    expect(obj2.set).toStrictEqual(obj.set);
    expect(obj2.set[1]).toStrictEqual(obj.set[1]);
    expect(obj2.set[1]).toBe(obj.set[1]);

    // Array
    expect(obj2.arr).toStrictEqual(obj.arr);
    expect(obj2.arr[3]).toStrictEqual(obj.arr[3]);
    expect(obj2.arr[3][1]).toStrictEqual(obj.arr[3][1]);
    expect(obj2.arr[3][1]).toBe(obj.arr[3][1]);
    // RegExp
    expect(obj2.regexp).toStrictEqual(obj.regexp);
    expect(obj2.regexp).toEqual(obj.regexp);
    expect(obj2.regexp).toBe(obj.regexp);
    // Date
    expect(obj2.date).toStrictEqual(obj.date);
});