// Obj 깊은 복사!!!!!!!
const deepCopy = function (obj) {
  // 새로운 객체를 생성하여 result에 담는다.
  var result = {};
  // obj의 타입이 객체이거나 null이 아닌경우
  if (typeof obj === 'object' && obj !== null) {
    // obj내의 프로퍼티를 찾는다.
    for (var prop in obj) {
      // 재귀함수를 호출하면서 객체의 속성을 하나씩 result값에 복사한다.
      // 내부의 중첩 객체가 없다면 재귀함수 종료.
      // deepCopy함수를 사용하여 result에 객체를 복사함.
      result[prop] = deepCopy(obj[prop]);
    }
    // result를 반환
  } return result;
};

// user 객체 생성
const user = {
  name: 'min',
  urls: {
    instagram: 'instagram.com',
    github: 'github.com/seungit',
    email: 'minsg3669@gmail.com'
  }
};

// deepCopy 깊은복사 함수를 사용하여 user객체의 내용을 user2에 담는다.
const user2 = deepCopy(user);
// user2의 name을 'min2'로 변경
user2.name = 'min2';
// user2의 urls의 instagram을 'instagram.com2'로 변경
user2.urls.instagram = 'instagram.com2';

// user 출력
console.log(user);
// user2 출력
console.log(user2);
// user의 name과 user2의 name 비교
console.log(user.name === user2.name);  // 결과: false
// user의 urls의 instagram과 user2의 urls의 instagram 비교
console.log(user.urls.instagram === user2.urls.instagram);  // 결과: false

// 결론 : 깊은복사까지 완료되어 변경한값에 대한 중복이 사라진다.