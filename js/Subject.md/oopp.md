# 자바스크립트에서의 객체지향

## Class

### 기존의 자바스크립트 에서는 클래스가 존재하지 않아 생성자 함수로 클래스를 정의해왔다.

```js
function Hero(skill1, skill2) {
  this.q = skill1;
  this.w = skill2;
}

let yasuo = new Hero("바람가르기", "장막");
let kenen = new Hero("표창", "전기");
```

`league` 함수에서의 `this`는 생성자 함수 자신을 가리킨다.

```js
class Hero {
  consructor() {
    this.q = skill1;
    this.w = skill2;
  }

  attack() {
    alert("공격");
  }
}

let yasuo = new Hero("바람가르기", "장막");
yasuo.attack();
```

이후에 ES6 문법에는 따로 자바처럼 `Class`를 사용할 수 있게 되었다.

`consructor` 는 `new`에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있다.

## Prototype

### 자식 object에게 데이터를 물려줄 수 있다.

즉, 프로토타입은 쉽게 설명하면 **유전자**이다.

<br/>
<br/>

```js
function Hero(skill1, skill2) {
  this.q = skill1;
  this.w = skill2;
}
```

<img src="https://i.postimg.cc/zXW8JxR5/image.png">

이러한 함수를 만들면 저절로 `prototype` 이라는 객체가 생긴다.

<br/>
<br/>

```js
function Hero(skill1, skill2) {
  this.q = skill1;
  this.w = skill2;
}

Hero.prototype.name = "who";

let yasuo = new Hero("뱌람 가르기", "장막");
console.log(yasuo.name); // who
```

이후에 `prototype`에 뭔가를 추가하면 자식(객체)들이 사용이 가능하다.

### 부모 유전자에 있는걸 자식이 사용가능한 이유는?

```js
yasuo.name();
```

**Object**에서 `.`연산자를 사용해 데이터를 꺼낼때 가지고 있지 않으면 **부모 유전자에서 검색**을 하므로 출력이 가능한 것이다.

따라서

1. 직접 자료를 가지고 있는 경우 바로 출력
2. 없으면 부모유전자까지 검사
3. 없으면 부모의부모유전자까지..

이런 순서가 된다. 이것을 **프로토타입 체인**이라고 한다.

프로토타입을 알게 되면 배열이나, 객체에 저장되어있는 다양한 함수들을 어떻게 사용할 수 있는지 이해할 수 있게 된다.

### Array.prototype()

```js
cosnole.log(Array.prototype);
```

<img src="https://i.postimg.cc/bNgvk63P/image.png" height="300">

콘솔에 찍어보면 프로토타입에 이미 저장되어있는 다양한 유전자(함수)들이 존재해서 이것을 자식(객체)에서 자연스럽게 받아서 쓰는 것이다.

참고로 프로토타입의 종점은 `Obejct`이다.

array.foo => Array.prototype.foo => Object.prototype.foo 순으로 참조를 하고, 없으면 `undefined`를 내뱉는다.

### Array.prototype().함수

그렇다면 사용자가 `prototype`에 접근해서 함수를 만들어서 모든 인스턴스가 사용하도록 할수도 있을까?

```js
let Person = function () {};

// 모든 Person 인스턴스는 legs, arms, countLimbs 속성을 상속하도록 정의
Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function () {
  return this.legs + this.arms;
};

var chuck = new Person();
var chuck2 = new Person(4, 4);

console.log(chuck.countLimbs()); // 4
console.log(chuck2.countLimbs()); // 8
```

다음 코드에서 Person() 생성자는 전달된 매개변수가 있으면 이를 사용해 인스턴스 속성을 추가하지만 전달된 값이 아예 없거나 한 개만 있으면 프로토타입에서 상속받은 값을 사용한다.

인스턴스 속성이 있으면 상속된 속성이 사용되지 않기 때문에 속성을 어떠한 경우에도 문제 없이 사용 가능하다.

## 참고자료

https://webclub.tistory.com/509

https://www.youtube.com/watch?v=wUgmzvExL_E

https://www.zerocho.com/category/JavaScript/post/573c2acf91575c17008ad2fc
