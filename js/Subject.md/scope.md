## Scope

Scope란 변수 이름, 함수 이름, 클래스 이름과 같은 식별자가 본인이 선언된 위치에 따라 다른 코드에서 자신이 참조될 수 있을지 없을지 결정되는 것을 말한다.

**중첩함수**를 통한 예시를 보자

<img src="https://i.postimg.cc/c467pPQm/image.png" width="400" height="300">

함수는 전역에서 정의가 될 수도 있지만 함수 내부에서 정의될 수도 있는데 이 함수를 **중첩함수**라 부른다.

그리고 중첩 함수를 포함하는 함수를 **외부함수**라고 한다.

```js
let x = "나는 전역 x야";

function outer() {
  let y = "나는 outer함수의 지역 y야";
  console.log(x); // 나는 전역 x야
  console.log(y); // 나는 outer함수의 지역 y야

  function inner() {
    let x = "나는 inner함수의 지역 x야";

    console.log(x); // 나는 inner함수의 지역 x야
    console.log(y); // '나는 outer함수의 지역 y야'
  }

  inner();
}

outer();
console.log(x); // 나는 전역 x야
console.log(y); // y is not defined
```

<img src="https://i.postimg.cc/63GMn30y/image.png" width="300" height="400">

어떤 변수를 참조할때 현재 스코프에 원하는 변수가 없다면 전역스코프 까지 단계적으로 바깥의 스코프를 타고 올라가 참조하게 된다.

따라서 항상 참조는 아래에서 위로 이루어지므로 마지막의 `console.log(y)`는 에러를 반환하게 된다.

만약 최상위 스코프인 전역스코프에 없다면 에러를 출력한다.

### 스코프 레벨

- 블록 레벨 스코프 : 대부분 프로그래밍 언어(if문, for문, 함수 ...)

- 함수 레벨 스코프 : 자바스크립트(only 함수)

하지만 자바스크립트는 ES6문법을 통해 `let`, `const`를 통해 블록 레벨 스코프를 구현할 수 있다.

### 상위 스코프

- 함수가 호출되는 시점에 결정 : 동적 스코프

- 함수가 정의되는 시점에 결정 : 정적 스코프(렉시컬 스코프)

자바스크립트는 정적 스코프를 채택하고 있고, 따라서 함수는 태어났을때 부터 내부에 **상위 스코프의 참조**를 저장한다.

정적 스코프는 직관적으로 잘 이해가 되지 않기 때문에 좀 더 알아보자.

### 정적 스코프

```js
let char = "A";

function log() {
  console.log(char);
}

function wrapper() {
  char = "B";
  log();
}

wrapper();
```

위의 코드의 결과로 `B`가 출력이 된다.

```js
let char = 'A';

function log(){
  console.log(char);
}

function wrapper(){
  let char = 'B';
  log();
```

위의 코드의 결과로 `A`가 출력이 된다.

자바스크립트의 함수는 정적 스코프 이므로 함수 실행 순서에 따라 함수의 범위가 바뀌지 않고, 애초에 선언시에 고정이 된다.

그러므로 `char` `log` 함수, `wrapper` 함수 모두 전역에 같은 레벨에 있기 때문에, `log` 함수는 반드시 전역에 있는 `char`를 참조한다.

반대로 동적 스코프 일때에는 가장 최근에 실행되었던 Scope를 따라가므로 `log` 함수는 `wrapper` 함수의 `char`를 참조한다.

예시를 보자.

```js
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };

  return inner;
}

const ella = outer();
ella(); // 10
```

과정을 차근차근 살펴보면

1. `outer`함수의 호출이 종료된다.
2. 실행 컨텍스트 스택에서 `outer`함수를 제거한다.
3. 위에서 설명한것과 같이 **내부의 `inner`함수는 `outer`함수가 실행 컨텍스트에서 제거가 되어도 참조할 수 있게 된다.**
4. 따라서 `x`는 죽지 않고 참조가 되어, 10이 출력된다.

## 참고자료

https://www.youtube.com/watch?v=jVP4fFtSvsg

https://www.youtube.com/watch?v=PVYjfrgZhtU
