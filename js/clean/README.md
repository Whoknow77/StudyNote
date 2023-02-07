# Clean Code

자바스크립트를 위한 코드 스타일부터 습관 그리고 클린 코드에 대해 함께 고민해보고 그 이유에 대해 탐구하고 또 학습해보는 시간을 가집니다.

## 변수 다루기

- ### 임시변수 제거하기

  명령형으로 가득한 로직은 나중에 유지보수를 해야 할 때 추가적인 코드를 작성하고 싶게 유혹을 한다.

  해결책으로는

  1. 함수나누기
  2. 바로 반환
  3. 고차함수
  4. 선언형으로 바꾸기

  등이 있다.

  ```js
  function getElements() {
    const result = {}; // 임시 객체

    result.title = document.querySelector(".title");
    result.text = document.querySelector(".text");
    result.value = document.querySelector(".value");

    return result;
  }
  ```

  다음의 코드를 유지보수 하거나 남이 볼때 `result`라는 임시 객체를 통해 뭔가 추가하고 싶어지는 유혹에 빠질 수 있다.

  ```js
  function getElements() {
    return {
      title: document.querySelector(".title"),
      text: document.querySelector(".text"),
      value: document.querySelector(".value"),
    };
  }
  ```

  따라서 위의 코드와 같이 함수의 이름에 걸맞게 오직 DOM 엘리먼트를 가져와서 반환만 하는 역할을 한다.

## 타입 다루기

- ### 타입검사

  자바스크립트 Primitive 타입과 Reference 타입이 존재한다.

  - Primitive

    - Boolean
    - number
    - String
    - **null**
    - **undefined**

  - Reference

    - array
    - function
    - object

    이런 타입들을 검사하는 함수로 `typeof`가 존재한다.

    ```js
    class MyClass {}
    const str = new String("문자열");

    typeof Myclass; // function
    typeof str; // object
    typeof null; // object
    ```

    Primitive 타입을 검사할때 이 함수를 쓰는건 대부분의 경우 문제가 없지만, Reference 타입을 검사할때는 문제가 발생한다.

    또한 null 값도 object로 object로 인식하는 것을 볼 수 있다.

    타입을 검사하는 함수로 또 다른 것이 있는데 `instance of`이다.

    ```js
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    const poco = new Person("poco", 99);

    console.log(poco instanceof Person); // true
    ```

    이 외에도 `wrapper` 객체를 구별할 수 있는 것이 prototype에 존재한다.

    이와같이 자바스크립트의 타입은 동적인 타입이므로 타입검사가 어려우므로 조심해서 사용해야 한다.

- ### 형변환 주의하기

  `parseInt` 함수는 두번째 인자를 꼭 명시해서 사용하자.

  ```js
  parseInt("9.99");
  ```

  보통 이렇게 많이 사용하는데 반드시 String을 10진수로 변환하는 것이 아니기 때문에,

  ```js
  parseInt("9.99", 10);
  ```

  진수를 명시해 줘야 한다.

- ### isNaN

  `isNaN` = is Not A Number => 숫자가 아니라는 뜻이므로 사용자가 사용할때마다 헷갈린다.

  ```js
  console.log(isNaN(123 + "테스트")); // true
  console.log(Number.isNaN(123 + "테스트")); // false
  ```

  **느슨한 검사**였던 `isNaN` 대신에 **엄격한 검사**인 `Number.isNaN`을 이용하면 헷갈리지 않고 한눈에 숫자인지 아닌지 확인할 수 있다.

## 경계 다루기

## 분기 다루기

- ### Truthy & Falsy

  JavaScript에서, 참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값이다. 따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가된다. (예: false, 0, -0, 0n, "", null, undefined와 NaN 등)

  ```js
  function printName(name) {
    if (name === undefined || name === null) {
      return "사람이 없네요";
    }

    return "안녕하세요 " + name + "님";
  }
  ```

  위와 같은 코드는 함수의 인자가 없을때나 null값일때를 검사한다.

  ```js
  function printName(name) {
    if (!name) {
      return "사람이 없네요";
    }

    return "안녕하세요 " + name + "님";
  }
  ```

  위의 코드와 동일한 결과를 출력하지만 코드가 매우 간결해졌다.

- ### short-circuit evaluation

  - or 연산자

    ```js
    function fetchData() {
      if (state.data) {
        return state.data;
      } else {
        return "Fetching...";
      }
    }
    ```

    위와 같은 코드를 줄이려고 하면 어떻게 줄이는 것이 좋을까?

    ```js
    function fetchData() {
      return state.data ? state.data : "Fetching...";
    }
    ```

    삼항연산자가 생각난다.

    ```js
    function fetchDate() {
      return state.data || "Fetching...";
    }
    ```

    하지만 or연산은 true가 나올 때 까지 탐색한다는 점을 이용한다면 더 간결하게 줄일 수 있다.

  - and 연산자

    ```js
    const getActiveUserName(user, isLogin){
        if(isLogin){
            if(user){
                if(user.name){
                    return user.name
                }
                else{
                    return '이름없음'
                }
            }
        }
    }
    ```

    위와 같은 코드를 줄여보자.

    ```js
    const getActvieUserName(user, isLogin){
        return user.name || '이름없음';
    }
    ```

    이번엔 and 연산과 or연산을 모두 사용하였다.

    and 연산은 false가 나올 때 까지 탐색한다는 점이 특징이므로 이렇게 로직을 동일하게 돌아가지만 코드를 매우 간결하게 줄일 수 있다.

- ### Early Return

  함수를 미리 종료한다는 점과 사고하기 편하다는 점이 장점이다.

  ```js
  function loginService(isLogin, user) {
    if (!isLogin) {
      if (checkToken()) {
        if (!user.nickName) {
          return registerUser(user);
        } else {
          refreshToken();
        }

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
  ```

  로직이 하나에 의존적으로 되어있다.

  위와 같은 코드를 줄여보자

  ```js
  function loginService(isLogin, user) {
    if (isLogin) {
      return;
    }

    if (!checkToken()) {
      throw new Error("No Token");
    }

    if (!user.nickName) {
      return registerUser(user);
    }

    refreshToken();

    return "로그인 성공";
  }
  ```

  의존성을 없애서 훨씬 보기 편해졌고 로직이 한 눈에 들어온다. 또한 리팩토링도 빠르게 수행할 수 있다.

- ### 부정조건문 지양

  ```js
  // 숫자일때만
  if (isNaN(3)) {
    console.log("숫자입니다");
  }
  ```

  부정조건문은 머릿속으로 여러번 생각해야 하므로 헷갈린다.

  ```js
  function isNumber(num) {
    return !Number.isNaN(num) && typeof num === "number";
  }

  if (isNumber(3)) {
    console.log("숫자입니다");
  }
  ```

  따라서 위와 같은 명시적인 함수로 바꿔서 생각하면 편하다.

- ### Nullish coalecsing operator

  ```js
  function createElement(type, height, width) {
    const element = document.createElement(type || "div");

    element.style.height = String(height || 10) + "px";

    element.style.width = String(width || 10) + "px";
  }

  return element;

  const el2 = createElement("div", 0, 0);

  console.log(el2.style.width); // 10px
  ```

  사용자는 0px 값을 원하지만 0은 **falsy** 값이기 때문에 10px이 출력된다.

  **falsy**

  ```js
  if (false)
  if (null)
  if (undefined)
  if (0)
  if (-0)
  if (0n)
  if (NaN)
  if ("")
  ```

  다양한 falsy값들이 존재하는데 이 중에서 null과 undefined만 분리하기가 어렵다.

  이런 상황에서 사용되는 것이 `??`이다.

  ```js
  function createElement(type, height, width) {
    const element = document.createElement(type || "div");

    element.style.height = String(height ?? 10) + "px";

    element.style.width = String(width ?? 10) + "px";
  }

  return element;

  const el2 = createElement("div", 0, 0);

  console.log(el2.style.width); // 0px
  ```

  `??` 연산자를 통해 null과 undefined만 falsy값으로 계산되므로 0px이 정상 출력된다.

  하지만 연산자 우선순위가 낮아 실수를 유발할 가능성이 있어 or 연산자와 같이 사용하지 않는 것이 좋다.

- ### 드모르간의 법칙

  ```js
  const isValidUser = false;
  const isValidToken = false;

  if (!(isValidUser && isValidToken)) {
    console.log("로그인 실패!");
  }
  ```

  위의 코드를 드모르간의 법칙을 적용해보자.

  ```js
  if (!isValidUser || !isValidToken) {
    console.log("로그인 실패");
  }
  ```

  토큰과 user중 어느 것 하나라도 valid 하지 않다면 로그인 실패를 반환한다는 점이 한눈에 들어온다.

## 배열 다루기

- ### Javascript의 배열은 객체다

  ```js
  const arr = [1, 2, 3];

  arr[3] = "test";
  arr["property"] = "string value";
  arr["obj"] = {};
  arr[{}] = [1, 2, 3];
  arr["func"] = function () {
    return "hello";
  };

  const obj = {
    arr: [1, 2, 3],
    3: "test",
    property: "string value",
    obj: {},
    "{}": [1, 2, 3],
    func: function () {
      return "hello";
    },
  };
  ```

  <img src="https://i.postimg.cc/0N0hc5pL/image.png">

  다음과 같이 배열과 객체를 각각 출력해봤을때 배열은 객체와 거의 다름없음을 보인다.

  그렇다면 배열과 객체를 구분하는 함수로는 무엇을 사용할까?

  `Array.isArray()`를 사용하자.

  ```js
  cosnt arr ='[1,2,3]';
  cosnt arr2 =[1,2,3];
  console.log(Array.isArray(arr)); // false
  console.log(Array.isArray(arr2)); // true
  ```

- ### Array.length

  ```js
  const arr = [1, 2, 3];

  arr[3] = 4;
  console.log(arr.length);

  arr[9] = 10;

  console.log(arr); // [1, 2, 3, 4, , , , , , 10]
  console.log(arr.length); // 10
  ```

  ```js
  const arr = [1, 2, 3];
  arr.length = 0;
  console.log(arr); // []
  ```

  위의 코드 결과와 같이 사실 `Array.length`는 배열의 절대적 길이가 아닌 **배열의 마지막 인덱스**이다.

  또한 배열의 length를 조작했을 뿐인데도 배열에 지장이 가는 것을 볼 수 있다.

  따라서 항상 의식적으로 조심해서 써야한다.

- ### 배열 요소에 접근하기

  ```js
  function clickGroupButton() {
    const confirmButton = document.getElementsByTagName("button")[0];
    const cancleButton = document.getElementsByTagName("button")[1];
    const resetButton = document.getElementsByTagName("button")[2];
  }
  ```

  위의 코드를

  ```js
  function clickGroupButton() {
    const [confirmButton, cancleButton, resetButton] =
      document.getElementsByTagName("button");
  }
  ```

  이렇게 배열 요소 접근시에 인덱스로 접근하는 것 보다는 명시적으로 리팩토링이 가능하다.

- ### 유사 배열 객체

  ```js
  function generatePriceList() {
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      console.log(element); // 100 200 300 400 500 600
    }
  }
  generatePriceList(100, 200, 300, 400, 500, 600);
  ```

  인자들을 매개변수로 선언하지 않았음에도 함수 내부에서 `arguments`라는 유사배열 객체로 다룰 수 있다.

  ```js
  console.log(Array.isArray(arguments)); // false
  ```

  하지만 배열은 아니므로, `map`, `reduce` 등과 같은 배열의 내장 함수는 사용하지 못한다.

- ### map vs forEach

  ```js
  const prices = ["1000", "2000", "3000"];

  const newPricesForEach = prices.forEach(function (price) {
    return price + "원";
  });

  const newPricesMap = prices.map(function (price) {
    return price + "원";
  });

  console.log(newPricesForEach); // undefined
  console.log(newPricesMap); // '1000원', '2000원', '3000원'
  ```

  - map : return이 존재, 순회하면서 배열 조작

  - forEach : **return이 undefined**, 그저 순회

- ### break vs continue

  - break : 종료시키고 다음으로 넘어감
  - continue : 반복을 첫번째로 돌림

    ```js
    const orders = ["first", "second", "third"];

    orders.forEach(function (order) {
      if (order === "second") {
        // continue;
        // break;
      }
      console.log(order);
    });
    ```

  최적화를 위해 조건을 만족하면 다음 조건을 확인하지 않고 함수가 끝나야 하는데 `break`, `continue` 모두 지원이 되지 않는다.

  그러므로 `forEach`, `map`, `reduce` 같은 함수들은 배열 중간에서 흐름을 제어하기가 어렵다.

  따라서 `find`, `findIndex` `every`, `some` 같은 배열 내장함수를 이용하는 것이 좋다.

## 객체 다루기

- ### Lookup Table

  key : value 조합의 테이블을 말한다.

  ```js
  function getUserType(type) {
    switch (key) {
      case "ADMIN":
        return "관리자";
      case "INSTRUCTOR":
        return "강사";
      case "STUDENT":
        return "수강생";
      default:
        return "해당 없음";
    }
  }
  ```

  위의 코드에 Lookup Table을 적용해보자.

  ```js
  function getUserType(type) {
    const USER_TYPE = {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "수강생",
    };

    return USER_TYPE[type] || "해당 없음";
  }
  ```

  key : value 값을 활용해 코드를 명시적으로 작성하였고, 수정할때도 용이하다.

- ### Object Destructing

  ```js
  function Person({ name, age, location }) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  const poco = new Person("poco", 30, "korea");
  ```

  위의 코드의 문제점은 함수 호출시에 인수의 순서를 지켜야 한다는 점, 중간에 인수가 빠지면 예측한 결과와 다르게 나온다는 점이다.

  ```js
  const poco = new Person({
    name: "poco",
    age: "30",
    location: "korea",
  });
  ```

  하지만 이런식으로 사용한다면 순서에도 구애받지 않고, 중간에 값이 없어도 옳은 결과를 출력한다.

  <br/>
  <br/>
  <br/>

  ```js
  const orders = ["Fist", "Second", "Third"];
  const [st3, , rd3] = orders;
  ```

  보통 이런식으로 구조 분해 할당을 이용하지만 객체를 사용하면 더 편리하다.

  ```js
  const orders = ["Fist", "Second", "Third"];
  const { 0: st, 2: rd } = orders;
  ```

  배열 안의 데이터가 많아진다면 `,`가 늘어나 가독성이 떨어지는데 이런 경우 객체를 이용해보자.

- ### Object.freeze

  말그대로 객체를 동결하여 객체의 값을 변동하지 못하도록 한다.

  ```js
  const STATUS = Object.freeze({
    PENDING: "PEDING",
    OPTIONS: {
      GREEN: "GREEN",
      RED: "RED",
    },
  });

  console.log(Object.isFrozen(STATUS));
  console.log(Object.isFrozen(STATUS.PENDING));
  console.log(Object.isFrozen(STATUS.OPTIONS));
  ```

  복사에는 Deep Copy, Shallow Copy가 있듯이 freeze에도 Deep freeze, Shallow freeze가 존재하여 1차원 까지만 **freeze** 된 상태임을 볼 수 있다.

  해결방법으로는

  1. lodash
  2. 유틸함수생성
  3. TypeScript => readonly

  등이 있다.

- ### Prototype 조작 지양

  1. 이미 JS는 많이 발전했다.
  2. JS 빌트인 객체를 건들지 않는다.

  위의 두가지 이유 등으로 인해 지양해야 하는데 자바스크립트는 런타임때 동작되는 것들을 바꿀 수 있기 때문에 예측하지 못한 오류가 발생할 수 있기 때문이다.

  따라서 Prototype을 건드는 대신에 직접 함수를 만들어서 모듈화하고 그것을 배포하자.

- ### hawOwnProperty

  ```js
  const person = {
    name: "whoknow",
  };

  console.log(person.hasOwnProperty("name")); // true
  ```

  객체가 속성을 가지고 있는지 판단할 때 사용한다.

  ```js
  const person = {
    hasOwnProperty: function () {
      return "hasOwnproperty";
    },
    name: "whoknow",
  };

  console.log(person.hasOwnProperty("name")); // hasOwnproperty
  ```

  하지만 `let`, `const` 같은 변수들과 다르게 보호를 받지 못한다.

  ```js
  function hasOwnProp(targetObj, targetProp) {
    return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
  }

  const person = {
    hasOwnProperty: function () {
      return "hasOwnproperty";
    },
    name: "whoknow",
  };

  console.log(hasOwnProp(person, "name")); // true
  ```

  따라서 `prototype`에 접근해 `call` 함수를 통해 사용하면 문제를 해결할 수 있다.

## 함수 다루기

- ### 함수, 메소드, 생성자

  - 자바스크립트 에서의 함수

    - 변수나, 데이터에 담길 수 있다.
    - 매개변수로 전달 가능(콜백 함수)
    - 함수가 함수를 반환(고차함수)

  - 종류

    - 일반 함수

      ```js
      function Func() {
        return this;
      }
      ```

    - 객체의 메소드

      ```js
      const obj - {
        method(){
          return this;
        },
      }
      ```

    - 생성자 함수(Class)

      ```js
      function Func() {
        return this;
      }

      // ES5 이전

      class Func {
        constructor() {}
      }
      ```

    위의 세종류의 함수의 쓰임이 모두 다르므로 구분해서 잘 사용하자.

- ### Rest parameters

  ```js
  function sumTotal() {
    return Array.from(arguments).reduce((acc, curr) => acc + curr);
  }

  sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  ```

  가변 인자를 다룰때 `arguments`를 사용한 코드이다.

  ```js
  function sumTotal(...args) {
    return args.reduce((acc, curr) => acc + curr);
  }
  ```

  `...` 연산자를 활용해서 Array.from, arguments를 사용하지 않아도 배열의 내장 함수를 사용할 수 있다,

  ```js
  function sumTotal(initValue, ...args) {
    console.log(initValue); // 1
    return args.reduce((acc, curr) => acc + curr);
  }
  ```

  또한 다른 매개변수와 조합이 가능하다. 하지만 나머지 매개변수(...)는 마지막에 위치해야 한다.

- ### 화살표 함수

  ```js
  const user = {
    name: "Poco",
    getName: () => {
      return this.name;
    },
  };

  console.log(user.getName()); // undefined
  ```

  위의 코드는 문제가 없어보이지만 undefined를 반환한다.

  ```js
  const user = {
    name: "Poco",
    getName: function () {
      return this.name;
    },
  };
  console.log(user.getName()); // Poco
  ```

  화살표 함수가 아닌 일반 함수로 작성하니 잘 작동한다.

  왜 화살표 함수에서는 name값을 잘못 받아오는 것일까?

  화살표 함수는 **Lexical Scope**를 따르지만 화살표 함수 특성상 자신의 `this`가 존재 하지 않으므로 호출된 `user`객체를 `this`로 참조하는 것이 아니라 상위 렉시컬 범위를 찾기 때문이다.

  따라서 전역 범위에 `user`는 존재하지 않아 undefined 를 반환한 것이다.

  추가적으로 call, apply, bind 등의 함수와 arguments도 사용이 불가능하다.

  물론 arguments의 경우는 Rest parameter로 해결이 가능하다.

- ### 순수함수

  순수함수란 어떤 함수에 동일한 인자를 주었을 때 항상 같은 값을 리턴하는 함수와 외부의 상태를 변경하지 않는 함수를 말한다.

  ```js
  const obj = { one: 1 };
  function changeObj(targetObj) {
    targetObj.one = 100;
    return targetObj;
  }
  console.log(changeObj(obj)); // one : 100
  console.log(obj); // one : 100
  ```

  함수를 호출한 후 의도치 않게 **원래의 값**이 **변경**된 모습이다.

  **객체, 배열**은 **reference type**으로 이 경우에는 **새롭게 만들어서 반환**해야 한다.

  ```js
  const obj = { one: 1 };

  function changeObj(targetObj) {
    return { ...targetObj, one: 100 };
  }
  console.log(changeObj(obj)); // one : 100
  console.log(obj); // one : 1
  ```

  `...` 연산자를 통해 새로운 객체를 만들어서 반환할 수 있고, `Object.assign()`를 사용해도 가능하다.

  순수함수를 만들지 않을 경우 무서운 경우가 발생할 일이 있으므로
  의식적으로 순수함수를 만들자.

- ### Closure

  클로저에 대한 자세한 설명 ==> [클로저](./../Subject.md/closure.md)

  - 클로저 활용 예시

    ```js
    const arr = [1, 2, 3, "A", "B", "C"];

    const isNumber = (value) => typeof value === "number";
    const isString = (value) => typeof value === "string";

    console.log(arr.filter(isNumber)); // [1, 2, 3]
    console.log(arr.filter(isString)); // ['A', 'B', 'C']
    ```

    위의 코드에 클로저를 적용해보자.

    ```js
    const arr = [1, 2, 3, "A", "B", "C"];

    function isTypeOf(type) {
      return function (value) {
        return typeof value === type;
      };
    }

    const isNumber = isTypeOf("number");
    const isString = isTypeOf("string");

    console.log(arr.filter(isNumber)); // [1, 2, 3]
    console.log(arr.filter(isString)); // ['A', 'B', 'C']
    ```

    클로저를 이용해 리팩토링한 결과이다.

## 참고자료

https://www.udemy.com/course/clean-code-js/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_Search_la.KR_cc.KR&utm_term=_._
