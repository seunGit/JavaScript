const Car = function (model, color) {
    this.model = model;
    this.color = color;
}

Car.prototype.wheels = 4;
Car.prototype.drive = function () {
    console.log(`${this.model} driving ~ 🏎️`);
}

const bmw = new Car("bmw", "red");
const tesla = new Car("tesla", "black");

bmw.drive();    // 결과: bmw driving ~ 🏎️
console.log(tesla.color);

Car.prototype.charge = function() {
    console.log(`"${this.model}" 차량의 전기를 충전합니다.`);
}

const MODEL3 = new Car("MODEL3", "green");

console.log(MODEL3.wheels);
MODEL3.charge();    // 결과: MODEL3 차량의 전기를 충전합니다.