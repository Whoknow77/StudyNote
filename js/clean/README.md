# Clean Code

자바스크립트를 위한 코드 스타일부터 습관 그리고 클린 코드에 대해 함께 고민해보고 그 이유에 대해 탐구하고 또 학습해보는 시간을 가집니다.

## 타입 다루기

## 경계 다루기

## 분기 다루기

JavaScript에서, 참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값이다. 따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가된다. (예: false, 0, -0, 0n, "", null, undefined와 NaN 등)

- ### Truthy & Falsy

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

    다음과 같은 코드를 줄이려고 하면 어떻게 줄이는 것이 좋을까?

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

## 함수 다루기

## 참고자료

https://www.udemy.com/course/clean-code-js/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_Search_la.KR_cc.KR&utm_term=_._
