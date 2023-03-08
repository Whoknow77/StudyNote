# 화살표 함수와 일반 함수의 차이

리액트로 투두리스트를 구현하다 일반 함수로는 안되던 것이 화살표 함수로는 가능해서 이유가 뭔지 알아보게 되었고, 가장 큰 차이가 `this`라는 것을 알게 되었다.

## this

- 일반 함수의 this

  - 자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, **함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.**
  - 콜백함수의 this는 따로 call,apply,bind하지않는한 전역객체를 가리킨다.

- 화살표 함수의 this

  - 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 **화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다.** 이를 Lexical this라 한다.
  - ​화살표 함수는 일반 함수와는 달리 고유한 this를 가지지 않는다.
    화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 **평범한** 외부 함수에서 this 값을 가져온다.
  - 일반 함수는 this로 자신을 내포하고있는 상위 객체에 접근이 가능하지만
    화살표 함수는 this가 없다. 그래서 그냥 상위 외부 함수에서 this를 가져온다.
    이러한 특성 때문에 화살표 함수 사용에 몇몇의 제약이 생긴다.

## 화살표함수를 사용하지 말아야 할 경우

### 1. 메소드

```js
// Bad
const person = {
  name: "Lee",
  sayHi: () => console.log("Hi" + this.name),
};

person.sayHi(); // Hi undefined
```

위 예제의 경우, 메소드로 정의한 화살표 함수 내부의 this는 메소드를 소유한 객체, 즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다. 따라서 화살표 함수로 메소드를 정의하는 것은 바람직하지 않다.

```js
// ES6
const obj = {
  name: "Lee",
  // 메소드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

따라서 위와 같이 ES6 축약 메소드 표현을 이용하자.

### 2. prototype

```js
// Bad
const person = {
  name: "Lee",
};

Object.prototype.sayHi = () => console.log("Hi" + this.name);

person.sayHi(); // Hi undefined
```

```js
// Good
const person = {
  name: "Lee",
};

Object.prototype.sayHi = function () {
  console.log("Hi" + this.name);
};

person.sayHi(); // Hi Lee
```

### 3. 생성자 함수

```js
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty("prototype")); // false

const foo = new Foo(); // TypeError: Foo is not a constructor
```

### 4. addEventListener 함수의 콜백 함수

```js
// Bad
var button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log(this === window); // => true
  this.innerHTML = "Clicked button";
});
```

addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킨다.

```js
// Good
var button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log(this === button); // => true
  this.innerHTML = "Clicked button";
});
```

따라서 addEventListener 함수의 콜백 함수 내에서 this를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용하여야 한다.

일반 함수로 정의된 addEventListener 함수의 콜백 함수 내부의 this는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다.

## 참고자료

https://poiemaweb.com/es6-arrow-function

https://bearcomputer.tistory.com/42

https://ko.reactjs.org/docs/handling-events.html

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC
