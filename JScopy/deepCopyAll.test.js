const deepCopyAll = require('./deepCopyAll');

// Obj 깊은 복사 testing
test('deepCopyAll testing', () => {
    const obj = {
         a: 1,
         b: {
             c: 2 
            },
         map: new Map([[1,2], [3,4]])
        
        };

    const obj2 = deepCopyAll(obj);

    expect(obj2.a).toStrictEqual(obj.a);
    expect(obj2.b).toStrictEqual(obj.b);
    expect(obj2.b.c).toStrictEqual(obj.b.c);

    expect(obj2.map).toStrictEqual(obj.map)
    expect(obj2.map[1]).toStrictEqual(obj.map[1])
});