// 생성자 함수를 이용한 객체 생성
const User1 = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    };
};

const mike = new User1("Mike", 30);

// 클래스를 이용
// ES6 부터 사용 가능
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("tom", 20);
console.log(tom)

class Car {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
    start() {
        console.log(`${this.wheels}바퀴가 달린 ${this.name}가 앞으로 이동합니다.`)        
    }
}

const x5 = new Car("BMW", 4);
x5.start(); // 결과: 앞으로 이동합니다.

// 클래스 상속
class ElectricCar extends Car {
    constructor(name, wheels, oil) {
        super(name, wheels);
        this.oil = oil;
    }
    start() {
        super.start();
    }

    get wheels() {
        return this._wheels;
    }

    set wheels(value) {
        // if (value != 4) {
        //     throw Error("이것은 자동차가 아닙니다.")
        // }
        this._wheels = value != 4 ? 0 : value;
    }
}

const tesla = new ElectricCar("MODEL3", 3, "x");
tesla.start();

// public, private
class User {
    publicField = 10;
    #privateField = 3;
}
const user = new User();
console.log(user.publicField);  // 결과: 10
console.log(user.privateField); // 결과: undefined

// static 정적 메서드
class User3 {
    static name = "seungit";
    constructor(hobby, job) {
        this.hobby = hobby;
        this.job = job;
    }
    static sayMyName() {
        console.log(`My name is ${User3.name}`);
    }
}

const myName = new User3();
console.log(myName.name);    // 결과: undefined
User3.sayMyName();  // 결과: My name is seungit