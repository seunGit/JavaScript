const user = {
    name : "tom"
}
console.log(user.name);
// 해당 프로퍼티의 존재유무를 판단해서 true, false 반환한다.
console.log(user.hasOwnProperty('name'));   // 결과: true
console.log(user.hasOwnProperty('age'));    // 결과: false

const car = {
    model : "",
    wheels : 4,
    drive() {
        console.log(`${this.model} driving ~ 🏎️`)
    }
}

const bmw = {
    model : "bmw",
    color : "red",
}
const audi = {
    model : "audi",
    color : "green",
}
const tesla = {
    model : "tesla",
    color : "white",
    electric : true
}

// car는 bmw의 프로토타입이 되는것.
// bmw는 car에게 상속을 받는다.
bmw.__proto__ = car;
audi.__proto__ = car;
tesla.__proto__ = car;

// 부모 객체인 Car에게 상속받아서 사용이 가능.
console.log(bmw.wheels);    // 결과: 4
bmw.drive();    // 결과: driving ~ 🏎️

const MODEL3 = {
    color : "black",
    price : 10000
}

MODEL3.__proto__ = tesla;

// 프로토타입 체인
// 1. MODEL3에서 drive()메서드를 찾는다.
// 2. 없으면 bmw에서 drive()를 찾는다.
// 3. 없으면 car에서 drive()를 찾는다.
// 4. car에 있으니 사용한다.
console.log(MODEL3.color);
MODEL3.drive();

for(p in MODEL3) {
    if(MODEL3.hasOwnProperty(p)) {
        console.log('o', p);
    } else {
        console.log('x', p);
    }
}