// this는 어떠한 객체를 가리키는 키워드
// this는 함수를 호출한 객체이다.

// --- 전역 ---
console.log(this); // 결과: window 객체

// 엄격모드에서의 this
'use strict';

console.log(this); // 결과: window 객체

// 엄격모드에서의 함수 내부 this
'use strict';

function main() {
    console.log(this);
}
main(); // 결과: undifined

// --- 함수 내부 ---
function main() {
    console.log(this);
}
main(); // 결과: window 객체

// 객체의 메서드
const obj = {
    name : 'seungit',
    handsome: function() {
        console.log(this);
    }
};
obj.handsome(); // 결과: { name: 'seungit', handsome: [Function: handsome] }
// this는 함수를 호출한 객체라고 이야기 했다.
// 위의 호출함수를 보면 `obj`객체가 함수 `handsome`을 호출했다.
// 즉 this는 obj객체가 되겠다.
const great = obj.handsome;
great(); // 결과: window 객체
// 다만 변수에 객체속성 내에 있는 함수를 할당할 경우에는 window 객체가 나온다.
// 전역적인 환경에서 호출된 함수이기 때문이다.

// bind()
function pretty() {
    console.log(this);
}

const prettyBind = pretty.bind({name : "seungit!"});
const prettyBindBind = prettyBind.bind({name : "seungit@"})
prettyBind(); // 결과: { name: 'seungit!' }
prettyBindBind(); // 결과: { name: 'seungit!' }

const obj2 = {
    prettyBind
}
obj2.prettyBind(); // 결과: { name: 'seungit!' }

// bind 이전에는 당연히도 window객체가 나올것 같았는데 `bind`함수를 사용하여 객체를 추가하면 this는 객체를 가리키게 된다.
// 다만 주의점이 있다면 중복으로 사용하는것은 불가능하다.
// 이미 바인드가 되어있다면 무시하게 된다.

// call()
// 모든 함수에서 사용이 가능하고, this를 특정값으로 지정할 수 있다.
// 2번째 매개변수 부터는 호출할 함수의 첫번째 매개변수 값부터 지정하여 추가 할 수 있다.
const bmw = {
    name : "BMW"
};

const audi = {
    name : "AUDI"
};

function carName() {
    console.log(this.name);
};

function showCar(wheels, navigation) {
    this.wheels = wheels;
    this.navigation = navigation;
}

carName(); // 결과: undefined
carName.call(bmw); // 결과: BMW
carName.call(audi); // 결과: AUDI

showCar.call(bmw, 4, "O");
showCar.call(audi, 4, "X");
console.log(bmw); // 결과: { name: 'BMW', wheels: 4, navigation: 'O' }
console.log(audi); // 결과: { name: 'AUDI', wheels: 4, navigation: 'X' }

// apply()
// call()과 비슷하지만 매개변수를 배열로 받는다는 특징이 있다.
// 배열의 요소를 함수의 매개변수로 사용할때 유용하게 쓸수 있다.

const bmw2 = {
    name : "BMW"
};

const audi2 = {
    name : "AUDI"
};

function carName() {
    console.log(this.name);
};

function showCar(wheels, navigation) {
    this.wheels = wheels;
    this.navigation = navigation;
}

carName(); // 결과: undefined
carName.apply(bmw2); // 결과: BMW
carName.apply(audi2); // 결과: AUDI

showCar.apply(bmw2, [4, "O"]);   // 매개변수를 배열로 받는다.
showCar.apply(audi2, [4, "X"]);  // 매개변수를 배열로 받는다.
console.log(bmw2); // 결과: { name: 'BMW', wheels: 4, navigation: 'O' }
console.log(audi2); // 결과: { name: 'AUDI', wheels: 4, navigation: 'X' }