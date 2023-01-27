# Closure

우선 클로저를 알기 위해선 [실행 컨텍스트](./context.md)와 Scope에 대한 깊은 이해가 필요하다.

## Scope

Scope란 변수 이름, 함수 이름, 클래스 이름과 같은 식별자가 본인이 선언된 위치에 따라 다른 코드에서 자신이 참조될 수 있을지 없을지 결정되는 것을 말한다.

**중첩함수**를 통한 예시를 보자

<img src="https://i.postimg.cc/c467pPQm/image.png" width="400" height="300">


함수는 전역에서 정의가 될 수도 있지만 함수 내부에서 정의될 수도 있는데 이 함수를 **중첩함수**라 부른다.

그리고 중첩 함수를 포함하는 함수를 **외부함수**라고 한다.

```js
let x ="나는 전역 x야";

function outer(){
  let y = "나는 outer함수의 지역 y야";
  console.log(x); // 나는 전역 x야
  console.log(y); // 나는 outer함수의 지역 y야

  function inner(){
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

예시를 보자.

```js
const x = 1;

function outer(){
    const x = 10;
    const inner = function(){
        console.log(x);
    };

    return inner;
}

const ella = outer();
ella(); // 10
```
과정을 차근차근 살펴보면

1) `outer`함수의 호출이 종료된다.
2) 실행 컨텍스트 스택에서 `outer`함수를 제거한다.
3) 위에서 설명한것과 같이 **내부의 `inner`함수는 `outer`함수가 실행 컨텍스트에서 제거가 되어도 참조할 수 있게 된다.**
4) 따라서 `x`는 죽지 않고 참조가 되어, 10이 출력된다.

이제 내부 원리를 자세히 알기 위해 **Closure**를 알아보자.


## Closure

클로저란 중첩함수가

1) 상위 스코프의 식별자를 참고하고 있고
2) 본인의 외부 함수보다 더 오래 살아있다면

그 함수를 **클로저**(함수) 라고 부른다.


<img src="https://i.postimg.cc/ZnrMNRcJ/image.png">

<img src="https://i.postimg.cc/vBvP8jHm/image.png">

위의 코드의 실행 컨텍스트와 렉시컬 환경을 살펴보자.

`outer`함수가 실행 컨텍스트에서 사라지며 `ella`에게 `inner`함수를 반환하면서 사라지기 때문에 `ella`는 `inner`함수 객체를 참조하게 되고, `inner`함수 객체는 내부 슬롯에 저장된 `outer`함수의 렉시컬 환경을 참조하기 때문에 x 값에 접근할 수 있게된다. 이때 변수 x를 **자유변수** 라고도 한다.



### 왜 사용할까?


간단한 예시를 통해 알아보자.


```js
let cnt = 0;
function cntPlus(){
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
function outer(){
let cnt = 0;
function cntPlus(){
    cnt++;
}
}
```

위와같이 코드를 작성할경우 `cnt`값은 `outer`함수의 **지역변수**이기 때문에 접근이 불가능하다.

다만 이제는 `cntPlus`함수도 사용할 수 없게 되었다.

```js
function outer(){
let cnt = 0;
function cntPlus(){
    cnt = cnt + 1;
    console.log(cnt); // 1 2
}
return {
    cntPlus
}
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

1) 데이터를 보존할 수 있다.

    클로저 함수는 외부 함수의 실행이 끝나더라도 외부 함수 내 변수를 사용할 수 있다.

    클로저는 이처럼 특정 데이터를 스코프 안에 가두어 둔 채로 계속 사용할 수 있게하는 **폐쇄성**을 갖는다.

2) 정보의 접근 제한 (캡슐화)
    ‘클로저 모듈 패턴’을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만든다.

    이러한 정보의 접근을 제한하는 것을 **캡슐화**라고 한다.

3) 모듈화에 유리하다.
    클로저 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 사용하고 보존할 수 있다.

    이와 같이 함수의 **재사용성**을 극대화 함수 하나를 독립적인 부품의 형태로 분리하는 것을 모듈화라고한다.

    클로저를 통해 데이터와 메소드를 묶어다닐 수 있기에 클로저는 **모듈화**에 유리하다.










## 참고자료

https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0

https://www.youtube.com/watch?v=tpl2oXQkGZs&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4&index=11

https://www.youtube.com/watch?v=PVYjfrgZhtU

https://www.youtube.com/watch?v=bwwaSwf7vkE

https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/(더 자세한 내용)