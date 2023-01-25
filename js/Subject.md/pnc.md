# Currying & Partial Application

### 함수형 프로그래밍의 기본 중 하나인 Currying과 Partial Application에 대해서 알아보자.

## Currying

```js
f(x,y) = h(x)(y) = x + y
```

이 코드를 이해한다면 쉽다.

h는 f를 다시 반환한 형태인데, 값을 하나 받아서 다른 값을 받는 함수를 반환하는 형태의 함수다.

### 하나의 인자를 받는 함수를 반환하는 함수를 반환하는 함수를 반환하는 함수를 반환하는 …. 함수다.
 
### 즉, 매 턴 마다 받을 수 있는 인자는 **오직 한 개** 뿐이다. 그리고 그 함수는 다른 함수를 반환하는데 그 함수 역시도 하나의 인자를 받고 또 다른 함수를 반환하는 식이다.

<br/>

```js
// h(x)(y)
function add(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = add(5);

console.log(addFive(7)); // 12
console.log(add(5)(7)); // 12
```

add 함수는 하나의 인자를 받아 반환하는 함수를 반환하는 함수이다.


```js
console.log(add(5)); // [Function]
```

헷갈린다면 add 함수에 인자를 하나 넣었을 때 **함수를 반환**하는 것을 확인해보자.

<br/>


## Partial Application

```js
function add(x) {
  return function(y,z) {
      return x + y + z;
  }
}
const addFive = add(5);
const addfoursix = addFive(4,6);

console.log(addfoursix); // 15
console.log(add(5)(4,6)); // 15
```

함수를 반환하는 함수이지만 함수가 받는 인자는 하나일 필요는 없다. **여러 개**를 받을 수도 있다.

즉, **Currying**은 **Partial Application**의 특수한 형태라고 보면 된다.

```js
const add = x => y => x + y;
```
```js
const add = x => (y,z) => x + y + z;
```
참고로 **Currying과** **Partial Application**은 모두 **Arrow function**으로 간단히 나타낼 수 있다.



## 왜 쓰는걸까?

Currying과 Partial Application 모두 **게으른 평가**를 가능케 한다.

### 게으른 평가

- 여러 개의 함수를 중첩시켜서 구현하다보니 최종적인 값의 평가는 모든 인자를 전달하기 전까지는 이뤄지지 않기 때문에, 중간 값까지만 전달하고 나머지 값을 나중에 전달한다.

```js
const getRGB = r => g => b => `rgb(${r},${g},${b})`;

// `rgb(0,0,${b})`
const getBlue = getRGB(0)(0); 
const div = getElementById('myDiv');

div.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 255) + 0;
  div.style.background = getBlue(randomColor);
});
```

`#myDiv` 를 클릭할 때마다 파랑 계열의 색으로 바탕색이 바뀌는 코드다. 커리를 이용한 코드인데, 이 경우에서는 DOM 엘리먼트가 클릭될 때 마다 모든 값의 평가를 매번 해야할 필요가 없이 **필요한 값만 사용**해서 바탕 색을 받아온다.

<br/>
<br/>
<br/>


사실 Currying과 Partial Application을 구분하는 것은 어렵지 않지만 함수를 반환하고 계속 그것이 이어진다는 것이 처음에 이해가 잘 가지 않았다.

마치 재귀함수를 처음 배울 때의 느낌이랄까..?

아직 React를 배우지 않아 함수형 프로그래밍을 제대로 알지 못하지만 배우고 나서 다시 이 글을 본다면 도움이 되지 않을까 생각한다.


## 참고자료 

https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-curry-%EC%99%80-partial-application-a7f83472cf53