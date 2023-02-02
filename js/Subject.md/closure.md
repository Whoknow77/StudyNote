# Closure

우선 클로저를 알기 위해선 [실행 컨텍스트](./context.md)와 [Scope](./scope.md)에 대한 깊은 이해가 필요하다.

## Closure

클로저란 중첩함수가

1. 상위 스코프의 식별자를 참고하고 있고
2. 본인의 외부 함수보다 더 오래 살아있다면

그 함수를 **클로저**(함수) 라고 부른다.

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

<img src="https://i.postimg.cc/ZnrMNRcJ/image.png">

<img src="https://i.postimg.cc/vBvP8jHm/image.png">

위의 코드의 실행 컨텍스트와 렉시컬 환경을 살펴보자.

`outer`함수가 실행 컨텍스트에서 사라지며 `ella`에게 `inner`함수를 반환하면서 사라지기 때문에 `ella`는 `inner`함수 객체를 참조하게 되고, `inner`함수 객체는 내부 슬롯에 저장된 `outer`함수의 렉시컬 환경을 참조하기 때문에 x 값에 접근할 수 있게된다. 이때 변수 x를 **자유변수** 라고도 한다.

### 왜 사용할까?

간단한 예시를 통해 알아보자.

```js
let cnt = 0;
function cntPlus() {
  cnt++;
}

cnt = 100;

cntPlus();
console.log(cnt); // 101
```

우리의 목표는 `cnt` 값은 `cntPlus`로만 증가시키는 상황을 만드는 것이다.

하지만 위의 코드에서는 `cnt` 값이 중간에 cnt = 100; 에 의해서 의도치 않게 변경되었다.

그렇다면 변수에 접근하지 못하도록 해야하는데 이럴때 필요한 것이 **closure**이다.

```js
function outer() {
  let cnt = 0;
  function cntPlus() {
    cnt++;
  }
}
```

위와같이 코드를 작성할경우 `cnt`값은 `outer`함수의 **지역변수**이기 때문에 접근이 불가능하다.

다만 이제는 `cntPlus`함수도 사용할 수 없게 되었다.

```js
function outer() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
    console.log(cnt); // 1 2
  }
  return {
    cntPlus,
  };
}

const add = outer();
console.log(add); // {cntPlus: [Function: cntPlus]}
add.cntPlus();
add.cntPlus();
```

`add`함수는 함수 객체를 반환하는 함수임을 알 수 있다.

이제 `cnt`값은 철저히 클로저 함수를 통해서만 접근이 가능한 변수가 되었으므로 문제를 해결하였다.

장점 세가지를 끝으로 마무리 하겠다.

### 장점

1. 데이터를 보존할 수 있다.

   클로저 함수는 외부 함수의 실행이 끝나더라도 외부 함수 내 변수를 사용할 수 있다.

   클로저는 이처럼 특정 데이터를 스코프 안에 가두어 둔 채로 계속 사용할 수 있게하는 **폐쇄성**을 갖는다.

2. 정보의 접근 제한 (캡슐화)
   ‘클로저 모듈 패턴’을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만든다.

   이러한 정보의 접근을 제한하는 것을 **캡슐화**라고 한다.

3. 모듈화에 유리하다.
   클로저 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 사용하고 보존할 수 있다.

   이와 같이 함수의 **재사용성**을 극대화 함수 하나를 독립적인 부품의 형태로 분리하는 것을 모듈화라고한다.

   클로저를 통해 데이터와 메소드를 묶어다닐 수 있기에 클로저는 **모듈화**에 유리하다.

## 참고자료

https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0

https://www.youtube.com/watch?v=tpl2oXQkGZs&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4&index=11

https://www.youtube.com/watch?v=PVYjfrgZhtU

https://www.youtube.com/watch?v=bwwaSwf7vkE

https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/(더 자세한 내용)
