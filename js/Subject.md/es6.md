# 자바스크립트 객체지향 & ES6

다음은 코딩애플 \***\*쉽게 이해하는 JavaScript 객체지향 & ES6 신문법\*\*** 강의를 듣고 주제들을 간단하게 정리한 내용입니다.

<details>
<summary>this</summary>
<div>

**javascript에서의 this는 자바에서의 this와 다르게 좀 더 복잡하고 다양한 종류를 가진다.**

## 1. 그냥 쓰거나 함수 안에서 쓰는 경우

```tsx
function f() {
  console.log(this);
}
f();
```

이때 this는 **window**를 뜻한다.
**window는 모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체이다.**

- 주의!
  - strcit mode일때는 `undefined` 를 나타낸다.

## 2. object 자료형 내의 함수 안에서 쓰는 경우

이때 this는 **메소드를 가지고 있는 오브젝트**를 뜻한다.

```tsx
let obj={
data:'Kim',
f:function(){
console.log('간지')
}
obj.f();
```

사실 this는 **메소드의 주인님**의 의미를 가지기 때문에 1번에서는 전역객체인 window를 가리키게 된다. 따라서 1,2번은 결국 같은 의미라 2번만 기억하면 된다.

## 3. constructor 내에서 쓰는 경우

이때 this는 **constructor로 새로생성되는 오브젝트(인스턴스)**를 뜻한다.

```tsx
funciton 기계(){
this.이름 = 'Kim';
}

let 기계1 = new 기계();

```

따라서 생성된 기계1의 이름에는 ‘Kim’이 저장되어 있다.

## 4. eventListener안에서 쓰는 경우

이때 this는 **e.currentTarget**을 뜻한다.

```tsx
document.getElementById("버튼").addEventListener("click", function (e) {
  console.log(this);
});
```

즉 **지금 이벤트가 동작하는 곳**을 뜻한다.
여기서는 document.getElementById('버튼'), e.currentTarget, this 모두가 같은 뜻을 가진다.

## 콜백함수

### 이벤트리스너 안에서 일반함수를 쓰는 경우

```tsx
document.getElementById("버튼").addEventListener("click", function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this);
  });
});
```

일반함수안에서 쓰였기 때문에 this는 window를 뜻한다.

```tsx
var 오브젝트 = {
  이름들 : ['김', '이', '박'];
  함수 : function(){
      오브젝트.이름들.forEach(function(){
        console.log(this)
      });
  }
}
```

이 경우에도 obj안에 함수안에 일반 콜백함수안에 this를 호출하므로 window를 가리킨다.
이와 같이 this값은 funciton을 만날 때마다 바뀔 수 있기 때문에 원하는 this를 쓰기 힘든 경우가 있다. 이때 화살표 함수를 써보자.
함수 내부의 this 값을 새로 바꿔주지 않기 때문에 유용하다.

```tsx
document.getElementById("버튼").addEventListener("click", function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(() => {
    console.log(this);
  });
});
```

일반함수안에서 쓰였지만 화살표 함수를 사용했고 이때는 this가 내부의 this값을 변화 시키지 않고 외부의 this 값을 그대로 재사용하여 e.currentTarget을 가리킨다.

</div>
</details>

<details>
<summary>화살표 함수</summary>
<div>

## 쓰는 이유

### 1. 내용이 한눈에 들어옴

```tsx
let f = (x) => {
  return x * 2;
};
```

### 2. 소괄호 생략

```tsx
let f = (x) => {
  return x * 2;
};
```

### 3. 중괄호 생략

```tsx
let f = (x) => x * 2;
```

### 4. 바깥에 있던 this의 의미를 내부에서도 그대로 사용 가능

</div>
</details>

<details>
<summary>var / let / const</summary>
<div>

- var / let / const
  **자바스크립트에서 변수는 `var` `let` `const` 로 선언 및 할당을 하는데 각각 선언, 할당, 범위에서 차이가 있다.**

## 선언과 할당

### var

- 재선언이 가늫하다.
- 재할당이 가능하다.

### let

- 재선언이 불가늫하다.
- 재할당이 가능하다.

### const

- 재선언이 불가늫하다.
- 재할당이 불가능하다.
  **const 변수에 오브젝트를 담으면 오브젝트 내의 데이터는 변경 가능하다.**

```jsx
const obj = { 이름: "Kim" };
obj.name = "Choi";
```

엄밀히 말하면 변수를 재할당한게 아니기 때문에 가능하다.

## 범위

### var

- 존재범위가 function이다.

```jsx
function 함수() {
  var 이름 = "Kim";
  console.log(이름); //가능
}

console.log(이름); //에러
```

### let

- 존재범위가 {}이다.(for, if, function 등)

```jsx
if (1 == 1) {
  let 이름 = "Kim";
  console.log(이름); //가능
}

console.log(이름); //에러
```

### const

- 존재범위가 {}이다.(for, if, function 등)
</div>
</details>

<details>
<summary>Hoisting</summary>
<div>

**변수나 함수를 선언하면 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석하는 현상**

### 변수

```jsx
function 함수() {
  console.log(이름); // undefined
  var 이름 = "Kim";
  console.log(이름); // Kim
}
```

해석 순서는 Hoisting에 따라 다음과 같다.

```jsx
function 함수() {
  var 이름;
  console.log(이름); // undefined
  이름 = "Kim";
  console.log(이름); // Kim
}
```

`var`키워드는 호이스팅시 `undefined`로 할당을 해놓지만, `let`, `const`은 호이스팅 시 `undefined`값이 할당되지 않는다.

### 함수

```jsx
함수();
var 함수 = function () {
  console.log(안녕);
  var 안녕 = "Hello!";
};
```

호이스팅은 변수의 선언부분만 되기 때문에 아직 함수가 아니기 때문에 실행이 되지 않고 에러가 난다.

</div>
</details>

<details>
<summary>Template literals</summary>
<div>

### 문자 중간 엔터키 입력 가능

```jsx
var 문자 = `안녕
하세요`;
```

### 문자 중간에 변수를 집어넣을 때 편리

```jsx
var 이름 = "최훈오";
var 문자 = `안녕하세요 ${이름} 입니다`;
```

### Tagged Literals

- 문자 해체분석
- 함수뒤에 `문자`를 붙여 실행하면 그 `문자열`을 해체분석할 수 있음

```jsx
var 변수 = "손흥민";

function 해체분석기(문자들, 변수들) {
  console.log(문자들);
  console.log(변수들);
}

해체분석기`안녕하세요 ${변수} 입니다`;
```

첫번째 파라미터 : ` `내의 순수 문자만 골라서 배열로 만든 파라미터
두번째 파라미터 : ` ` 내의 ${} 변수를 담는 파라미터

</div>
</details>

<details>
<summary>Spread Operator</summary>
<div>

**점 세개를 통해 괄호제거 해주는 연산자**

```jsx
let arr = ["hello", "world"];
console.log(arr);
console.log(...arr); //  hello world
```

### 1. Array 합치기/복사에 유용

```jsx
let a = [1, 2, 3];
let b = [4, 5];
let c = [...a, ...b]; // [1,2,3,4,5]
```

**얕은복사**

```jsx
let a = [1, 2, 3];
let b = [...a];

console.log(a);
console.log(b); // 독립적인 [1,2,3]
```

### 2. Object합치기/복사에 유용

```jsx
let o1 = { a: 1, b: 2 };
leto2 = { c: 3, ...o1 };
console.log(o2);
```

### 3. array를 파라미터 형태로 집어넣을 때

```jsx
function 더하기(a, b, c) {
  console.log(a + b + c);
}

let 어레이 = [10, 20, 30];
더하기(...어레이); // 요즘방식
더하기.apply(undefined, 어레이); // 옛날방식
```

```jsx
let person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

let person2 = {
  name: "손흥민",
};
```

`person2`에서 `person` 의 `인사()` 를 쓰고 싶을 때 `apply` 와 `call` 등을 사용하면 된다.

- apply

  - **이 함수를 실행하는데 저기 오브젝트에다가 적용해서 실행해주세요**
  - **실행할 함수.apply(적용할 곳);**

  ```jsx
  let person = {
    인사: function () {
      console.log(this.name + "안녕");
    },
  };

  let person2 = {
    name: "손흥민",
  };

  person.인사.apply(person2);
  ```

- call

      - `apply`와 실행 결과도 똑같고 사용법도 똑같지만 사용 시 파라미터를 넣어서 실행하고 싶을 경우 apply는 파라미터를 `[array]` 로 한꺼번에 집어넣을 수 있다.

      ```jsx
      let person = {
        인사: function () {
          console.log(this.name + "안녕");
        },
      };

      let person2 = {
        name: "손흥민",
      };

      person.인사.apply(person2, [1, 2, 3]);
      person.인사.call(person2, 1, 2, 3);
      ```

      다시 돌아와서

      ```jsx
      function 더하기(a, b, c) {
        console.log(a + b + c);
      }

      let 어레이 = [10, 20, 30];
      더하기(...어레이); // 요즘방식
      더하기.apply(undefined, 어레이); // 옛날방식
      ```

      **더하기() 함수를 실행하는데 undefined에 적용해서 실행해주시고요 파라미터로 어레이를 집어넣어주세요~** 라는 뜻이다. 비워두면 문제가 생기기 때문에 `undefined`를 집어넣은 것이다.
      **결론적으로 그냥 spread 연산자를 이용하면 된다.**

  </div>
  </details>

<details>
<summary>default parameter</summary>
<div>

```jsx
function 더하기(a, b = 10) {
  console.log(a + b); // 11
}

더하기(1);
```

참고고 파라미터에는 상수 외에도 변수, 연산자, 함수 등이 가능하다.

### arguments

모든 입력된 파라미터를 []안에 싸매준다.

```jsx
function 함수(a, b, c) {
  console.log(arguments); // [2,3,4]
}

함수(2, 3, 4);
```

</div>
</details>

<details>
<summary>Rest</summary>
<div>

- **점 세개를 통해 모든 파라미터를 [] 중괄호로 감싸준다.**
- 나머지 부분에만 사용가능 하므로 항상 마지막 파라미터로 넣어야 한다.

```jsx
function 함수2(...파라미터들) {
  console.log(파라미터들);
}

함수2(1, 2, 3, 4, 5, 6, 7);
```

```jsx
function 함수2(a, b, ...파라미터들) {
  console.log(파라미터들);
}

함수2(1, 2, 3, 4, 5, 6, 7);
```

</div>
</details>

<details>
<summary>prototype</summary>
<div>

- 자식들이 물려받을 수 있는 부모의 유전자 역할을 하는 공간
- prototype에 뭔가 변수나 함수가 들어가 있다면 기계로부터 생성되는 새로운 오브젝트들은 전부 그걸 그대로 물려받아 쓸 수 있다.

```jsx
function 기계() {
  this.name = "Kim";
  this.age = 15;
}

기계.prototype.gender = "남";
let 학생1 = new 기계();

console.log(학생1.gender); //'남'
```

- 다룰때는 오브젝트 자료형(key / value 쌍)으로 저장하면 된다.
- 추가적으로 자바스크립트는 오브젝트에서 값을 출력할 때 이런 순서로 물어본다.
  - 학생1에 직접 gender라는 값이 있는가?
  - 그럼 부모 유전자에 gender라는 값이 있는가?
  - 그럼 부모의 부모 유전자에 gender라는 값이 있는가?
  - 그럼 부모의 부모의 부모의 유전자에 .. 그게 있는가?
- prototype 상속 vs constructor 상속
  - constructor 상속 : 자식들이 직접 값을 소유하게 만듬
  - prototype 상속 : 부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶은 경우
- prototype의 특징

  - prototype은 constructor 함수에만 몰래 생성된다.

    - 일반 object, array 이런걸 만들어도 거기엔 prototype이 없다. 따라서 object 같은걸 상속하고 싶으면 다음의 세가지 방법을 이용해야 한다.

      - constructor 함수 생성
      - Object.create() 사용

        ```jsx
        let 부모 = { name: "Kim", age: 50 };
        let 자식 = Object.create(부모);

        console.log(자식.age); //50
        ```

        - 자식이라는 object는 부모를 protytype으로 두게 된다.

      - **class 사용**

  - 내 부모 유전자를 찾고 싶다면 **proto**를 출력하면 된다.
    - 부모로부터 생성된 자식 object들은 **proto**라는 속성이 있다.
      이걸 출력해보시면 **부모의 prototype**이 출력된다.
      그래서 \***\*proto**는 부모의 prototype\*\*과 같은 의미이다.
      ```jsx
      function 기계() {
        this.name = "Kim";
        this.age = 15;
      }
      let 학생1 = new 기계();
      console.log(학생1.__proto__);
      console.log(기계.prototype);
      ```
  - **proto** 를 직접 등록하면 object끼리 상속기능을 구현할 수 있다.

    ```jsx
    let 부모 = { name: "Kim" };
    let 자식 = {};

    자식.__proto__ = 부모; // 자식에게 부모 유전자 부여
    console.log(자식.name);
    ```

  - 추가적으로 모든 **object** 자료형의 조상은 Object() 라는 기계이며 (일명 Object.prototype)
    모든 **array** 자료형의 조상도 Object() (중간에 Array()라는 부모 존재)
    모든 **함수** 자료형의 조상도 Object()
    (그래서 자바스크립트는 모든게 다 Object라고 말하는 것)

</div>
</details>

<details>
<summary>class</summary>
<div>

- 사용

  ```jsx
  class 부모 {
    constructor(이름, 나이) {
      this.name = 이름;
      this.age = 나이;
    }
    sayHi() {
      console.log("hello");
    }
    sayHello() {
      console.log("안녕하세요");
    }
  }

  let 자식 = new 부모("Park", 30);
  ```

  - 간편하게 prototype에 함수 추가 가능, `Object.getPrototypeOf()`를 통해 이 오브젝트가 누구로부터 protytype을 상속받고 있는지를 알 수 있다.

- extends / super

      - class를 상속한 class를 만들고 싶을 때 사용

        ```jsx
        class 할아버지 {
          constructor(name) {
            this.성 = "Kim";
            this.이름 = name;
          }
          sayHi() {
            console.log("안녕 나는 할아버지");
          }
        }

        class 아버지 extends 할아버지 {
          constructor(name) {
            super(name);
            this.나이 = 50;
          }
          sayHi2() {
            console.log("안녕 나는 아버지");
            super.sayHi();
          }
        }

        let a = new 아버지("만수");
        ```

        - **super**
          - **super를 통해 부모 class의 변수와 함수를 상속받을 수 있다.**
            **1. constructor 안에서 쓰면 부모 class의 constructor**
            **2. prototype 함수 안에서 쓰면 부모 class의 prototype**

  </div>
  </details>

<details>
<summary>getter / setter</summary>
<div>

**오브젝트 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드(데이터의 무결성을 보존)**

```jsx
let 사람 = {
  name: "Kim",
  age: 30,
  nextAge() {
    return this.age + 1;
  },
};
```

내년 나이를 출력하고 싶을때 `사람.age + 1`이 아닌 굳이 함수를 만들어 사용하는 이유는

1. object 안의 데이터가 복잡할 수록 함수 만들어놓는게 데이터를 꺼내기 쉽기 때문
2. 내부에 있는 name, age 변수를 건드리지 않아서 실수를 방지하므로 안전
   **왜 안전할까?**

```jsx
사람.setAge("40");
```

만약 나이에 숫자를 집어넣어야 하는데 실수로 `'40'`이라는 문자를 집어넣으면 데이터가 오염되어 나중에 이 값을 가지고 연산을 할 때 에러가 발생한다.
따라서,

```jsx
let 사람 = {
  name: "Kim",
  age: 30,
  setAge(나이) {
    this.age = parseInt(나이);
  },
};

사람.setAge("200"); //문자 넣었는데도 숫자 200으로 저장됨
```

이런식으로 안전장치 역할을 한다.
근데 매번 함수를 사용하자니 괄호도 사용해야 하고 귀찮고 직관적이지 않다.
이럴 때 **set / get**을 이용하자.

```jsx
let 사람 = {
  name : 'Kim',
  age : 30,
  set setAge(나이){
    this.age = parseInt(나이)
  }

	get nextAge(){
		return this.age + 1
	}
}

사람.setAge = 40; // set
console.log(사람.nextAge) // get
```

  </div>
  </details>

<details>
<summary>destructuring</summary>
<div>

- Array 안에 있는 데이터를 변수에 담는 방법

  ```jsx
  const [a, b, c] = [2, 3, 4];

  const [a, b, c = 5] = [2, 3];
  ```

- Object 안에 있는 데이터를 변수에 담는 방법

  ```jsx
  let { name: a, age: b } = { name: "Kim", age: 30 };

  let { name, age } = { name: "Kim", age: 30 }; // 축약 가능
  ```

- 변수를 object로 집어넣고 싶은 경우

  ```jsx
  let name = "Kim";
  let age = 30;

  let obj = { name, age };
  ```

  name : name 이렇게 key값과 value값이 동일하면 name 하나로 축약 가능

- 함수 파라미터 변수 만들 때(많이 쓰진 않음)

  ```jsx
  // 객체
  function 함수({ name, age }) {
    console.log(name);
    console.log(age);
  }

  var obj = { name: "Kim", age: 20 };
  함수(obj);

  // 배열
  function 함수([name, age]) {
    console.log(name);
    console.log(age);
  }

  var array = ["Kim", 30];
  함수(["Kim", 30]);
  ```

</div>
</details>

<details>
<summary>Promise</summary>
<div>

- 기존의 콜백함수 디자인 패턴대신 `.then`을 이용해 가독성이 좋은 Promise 디자인 패턴이다.
- 자바스크립트의 새로운 기능이 아닌 코드/함수 디자인 패턴일 뿐이다.

1. 콜백함수와는 다르게 순차적으로 뭔가를 실행할 때 코드가 옆으로 길어지지 않는다. **then** 함수를 붙여서 순차적으로 실행하니까.
2. 콜백함수는 불가능한 '**실패시** 특정 코드를 실행해주세요~' 라고 코드를 짤 수 있다. (catch)

```jsx
// **1초 대기 성공 후에 특정 코드를 실행하는 코드**
const 프로미스 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

프로미스
  .then(function () {
    console.log("1초 대기 성공했습니다");
  })
  .catch(function () {
    console.log("실패했습니다");
  });

// 힘든 수학연산 성공 후에 특정 코드를 실행하는 코드
const 프로미스 = new Promise(function (성공, 실패) {
  const 어려운연산 = 1 + 1;
  성공(어려운연산);
});

프로미스
  .then(function (결과) {
    console.log("연산이 성공했습니다", 결과);
  })
  .catch(function () {
    console.log("연산 실패");
  });
```

- 프로미스 안의 코드가 실행이 완료가 되었을 때 `then()` 함수 내의 코드를 실행시키고, 실패하면 `catch()` 내의 함수를 실행시킨다.
- 파라미터를 넘겨줄 수도 있다.
  주로 사용할 때에는

1. <button>을 누르면 성공으로 판정
2. Ajax 요청으로 서버의 데이터를 가져오면 성공판정, 에러나면 실패판정
   등등이 쓰인다.

</div>
</details>

<details>
<summary>async / await</summary>
<div>

- **Promise와 then을 매우 쉽게 만들어주는 문법**
- aysnc 키워드를 쓰면 Promise 오브젝트가 절로 생성 된다.

  ```jsx
  async function 더하기() {
    return 1 + 1;
  }

  더하기().then(function (결과) {
    console.log(결과);
  });
  ```

  함수 앞에 `async`를 붙이면 함수 자체가 `Promise`가 되어 버리고, 실행할 때 뒤에 `then`을 붙일 수 있다.

- `then()` 대신에 가벼운 `await`을 사용할 수 있다.
  **어려운 연산 Promise를 기다린 다음에 완료되면 결과를 변수에 담는 코드**

      ```jsx
      async function 더하기() {
        let 어려운연산 = new Promise((성공, 실패) => {
          let 결과 = 1 + 1;
          성공(결과);
        });
        let 결과 = await 어려운연산;
        console.log(결과);
      }
      더하기();
      ```

      **비동기식처리되는 코드를 담는다면 await 기다리는 동안 브라우저가 잠깐 멈출 수 있으니 주의해야 한다.**
      **실패를 반환하는 코드**

      ```jsx
      async function 더하기() {
        let 어려운연산 = new Promise((성공, 실패) => {
          실패();
        });
        let 결과 = await 어려운연산;
        console.log(결과);
      }
      더하기();
      ```

      `**await`은 실패하면 에러가 나고 코드가 멈추므로, `try catch`를 이용한다.\*\*

      ```jsx
      async function 더하기(){
        let 어려운연산 = new Promise((성공, 실패)=>{
          실패();
        });
        try {  let 결과 = await 어려운연산 }
        catch { 어려운연산 Promise가 실패할 경우 실행할 코드 }
      }
      ```

      그런데 더 복잡하니까 그냥 `then()` 을 사용하는 것이 더 좋을 수 있다.
      **<button>을 누르면 성공하는 Promise 만들기**

      ```jsx
      <button id="test">버튼</button>

      <script>
        async function 프로미스(){
          document.getElementById('test').addEventListener('click', function(){
            return '성공했어요'
          });
        }

        async function 버튼누르기(){
          let 결과 = await 프로미스();
          console.log(결과)
        }

        버튼누르기();
      </script>
      ```

      위의 코드는 잘 작동되지 않는다.
      **문제점**

      1. Promise의 return이 아닌 이벤트리스너의 return이므로 `promise`를 리턴하지 않는다.

      2. **이벤트 리스너안의 코드는 바로 실행되지 않습니다. 버튼 누를 때 실행됩니다.**
         3**. 그래서 컴퓨터가 코드를 쭉 읽을 때 async function 프로미스() 함수 내부는 빈칸과 동일합니다.**
         4**. 자바스크립트는 function 안이 빈칸이면 그냥 자동으로 return undefined 를 채워 실행합니다.**
         따라서 실행하자마자 프로미스 함수는 `undefined`를 반환하게 된다.

      ```jsx
      async function 클릭() {
              let promise = new Promise(function (성공, 실패) {
                document
                  .getElementById("button")
                  .addEventListener("click", function () {
                    성공("성공했습니다.");
                  });
              });
      				let 결과 = await promise;
      				console.log(결과);
            }

            클릭(); ****
      ```

      따라서 다음과 같이 `Promise`를 만들어 직접 성공(), 실패() 경우를 지정해주면 `await`이 잘 기다려준다.

  </div>
  </details>

<details>
<summary>for in / for of와 enumerable, iterable 속성</summary>
<div>

- for in

  - Object에 사용

    ```jsx
    let 오브젝트 = { name: "Kim", age: 30 };

    for (let key in 오브젝트) {
      console.log(오브젝트[key]);
    }
    ```

  - enumerable한 것만 출력

    ```jsx
    let 오브젝트 = { name: "Kim", age: 30 };

    console.log(Object.getOwnPropertyDescriptor(오브젝트, "name"));
    // {value: "Kim", writable: true, enumerable: true, configurable: true}
    ```

    enumerable이 true인 즉, 셀 수 있는 자료형만 for in 사용 가능

  - 부모의 prototype에 저장된 것도 출력

    ```jsx
    class 부모 {}
    부모.prototype.name = "Park";

    let 오브젝트 = new 부모();

    for (let key in 오브젝트) {
      if (오브젝트.hasOwnProperty(key)) {
        console.log(오브젝트[key]);
      }
    }
    ```

    `Park`이라는 자료는 부모가 가지고 있는 것인데도 출력해준다.
    따라서 이때는 `hasOwnProperty()`를 통해 오브젝트가 이 key값을 직접 가지고 있는지 조건을 걸어주면 된다.

- for of
  - iterable인 자료형에 적용가능
    - `[Symbol.iterator]()` 이라는 일종의 메소드를 가지고 있는 자료형을 뜻함
      - Array, NodeList, Map, Set 등등
- forEach
  - Array에 사용

</div>
</details>

<details>
<summary>Symbol</summary>
<div>

- 그냥 주석하나만 저장할 수 있는 Primitive한 자료형
- **Object자료형에 비밀스런 key값을 부여하고 싶을 때 사용**

  ```jsx
  const person = { name: "Kim" };
  const weight = Symbol("몸무게");
  person[weight] = 200;

  console.log(person);
  // Symbol(몸무게) : 200
  ```

- 반복문에서 감지 못함
- 직접 심볼 입력도 가능
  ```jsx
  let height = Symbol("내 키임");
  let person = { name: "Kim", [height]: 160 };
  ```
- 같은 설명을 가져도 다른 Symbol
  ```jsx
  let a = Symbol("설명");
  let b = Symbol("설명");
  console.log(a === b); // false
  ```
- 전역심볼
  ```jsx
  let a = Symbol.for("설명1");
  let b = Symbol.for("설명1");
  console.log(a === b); // true
  ```
  - 변수처럼 뭔가 같은 값을 가지면 같은 변수로 취급해주는 전역 심볼을 `Symbol.for`를 통해 만들 수 있다.

</div>
</details>

<details>
<summary>Map / Set</summary>
<div>

- Map
  - Object자료형과 똑같이 key, value 형태로 자료를 저장할 수 있는 자료형
  - 자료의 연관성을 표현하기 위해 쓰기 때문에 Object와 약간 다르고 key, value가 ⇒로 연결되어있다.
    ```jsx
    const person = new Map();
    person.set("name", "Kim"); // 넣기
    person.set("age", 20);
    person.get("age"); // 꺼내기
    person.size; // 자료 개수
    person.delete("age"); // 삭제
    ```
  - 따라서, key, value값에 모든 자료를 집어넣을 수 있다.
  - 실제 개발에서는 안쓰이고, 알고리즘에서 Hash Map, Hash Table을 구현할 때 자주 사용한다.
- Set

  - Array자료형과 똑같이 생겼지만, 중괄호로 표현이 되고, **중복자료를 허용하지 않음**

    ```jsx
    const 출석부 = new Set(["john", "tom", "andy", "tom"]);

    출석부.add("sally"); // 넣기
    출석부.has("tom"); // 확인
    출석부.size; // 자료 개수
    ```

  - Array를 Set으로

    ```jsx
    let 출석부 = ["john", "tom", "andy", "tom"];

    let 출석부2 = new Set(출석부); //Array를 Set으로 바꾸기 => 중복 제거

    출석부 = [...출석부2]; //Set을 Array로 바꾸기
    ```

</div>
</details>

<details>
<summary>? / ??</summary>
<div>

- optional chaining( ?. )

  - ?. 왼쪽에 있는게 null 혹은 undefined인 경우 마침표 찍지 말고 `undefined` 남겨주세요 라는 뜻이다.
  - 중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때 사용

    ```jsx
    const user = {
      name: "kim",
      age: { value: 20 },
    };

    console.log(user.age1?.value1); //에러는 안남 매우안전
    ```

  - 원래 object에서 데이터를 뽑을 때 해당하는 자료가 없으면 자동으로 undefined가 남아서 `?.`를 사용할 필요는 없지만, 중첩된 object는 마침표를 2번 이상 찍기 때문에 `?.`를 쓰는 것이 안전할 수 있음

- nullish coalescing operator( ?? )

  - ?? 왼쪽이 null, undefined일 경우 오른쪽을 보여달라는 뜻

  ```jsx
  const user;

  console.log(user ?? '로딩중')
  ```

  - React, Vue 같은 라이브러리에서 매우 유용

</div>
</details>
