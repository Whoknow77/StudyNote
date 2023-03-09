# 가상 돔

먼저 가상 돔에 알아보기 전에 브라우저 렌더링 과정을 알아보자. 자세한 내용은 [브라우저 렌더링 과정](./rendering.md)

## DOM 조작의 비효율성

브라우저는 크게

1. Dom tree 생성
2. Render tree 생성
3. Layout
4. Painting

과정을 거친다.

돔을 조작하여 화면을 업데이트하려면 1~4번을 항상 전부 진행하여 업데이트를 하는데 이것은 매우 비효율적인 과정이다.

### SSR(Server Side Rendering)

- 기존의 DOM은 정적인 페이지를 보여주는데 많이 사용 되었고, 이전에는 정적인 페이지가 주를 이뤘기 때문에 큰 문제가 되지 않았다.

### CSR(Client Side Rendering)

- 하지만 SPA의 등장과 함께 CSR이 많이 사용 되면서 현재는 DOM 업데이트가 상당히 많이 복잡하게 발생하는 경우가 많아 졌음.

## 가상 돔이란?

DOM 노드 트리를 복제한 자바스크립트 객체

- class, style 등 속성을 가지고 있음
- DOM api 메서드가 없음

## 가상돔의 동작 방식

<img src="https://i.postimg.cc/0QzqXqp5/image.png">

최초에 브라우저가 실제 DOM 트리를 생성하고, 브라우저 화면에 애플리케이션 UI가 렌더링 된다.

이때, Virtual Dom은 DOM 트리를 가벼운 버전으로 복사를 한다.

<img src="https://i.postimg.cc/4yFHkG08/image.png" width="800" height="400">

그리고 DOM 노드의 변화가 생기면 Virtual DOM은 다시 처음부터 새로운 Virtual DOM을 만든다.

이후에 변경사항이 생기면 이전상태의 DOM 트리와 새롭게 만들어진 DOM 트리를 비교하여 변화된 부분만 실제 DOM에 적용한다. 이 일련의 과정을 **Diffing**이라고 한다.

**즉, DOM 조작을 할 때마다 브라우저 렌더링 과정을 계속해서 반복하는 것이 아니라 변화들을 전부 Virtual DOM에 반영한 후에 변경된 부분만을 실제 DOM에 한번만 적용하여 성능을 최적화 한다.**

이 과정을 비효율적이라고 생각할 수 있지만, 실제로 비효율성은 DOM 트리를 조작하는 과정에서 생기는 것이 아니라 렌더링과정에서 생기므로, 렌더링을 하지 않고 메모리상에서 트리를 변경하므로 상당히 빠르게 진행된다.

### 리액트에서의 가상 돔

<img src="https://i.postimg.cc/L4fjGg4f/image.png">

리액트에서는 위의 과정을 거치는데 자바스크립트 객체를 통해 가상돔을 생성하고, 마지막에 `render`를 할 때, 비로소 실제 DOM 요소가 된다.

### 재조정

또한 위에서 설명한 Diffing 알고리즘이 리액트에서 어떻게 쓰이는지 알아보자.

```jsx
const element = {
  type: "hi",
  props: {
    title: "foo",
    children: "Hello",
  },
};
```

수정전의 가상 돔과 수정 후의 가상 돔을 비교하는데

1. type===type : 속성만 변경한다.
2. type!==type : 이전 트리를 삭제하고 새로운 트리를 생성

### key prop

```html
// before
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// after
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

맨 뒤에 `li`가 태그가 추가되는 것은 문제가 되지 않지만 그 외에 경우는 리액트가 모든 요소가 제자리에 위치하지 않았다고 생각하고 자식 노드를 전부 새로 그리게 된다.

이때 리액트는 식별자로서 `key prop`을 이용한다.

이 값은 반드시 **변경되지 않는 유일한 값**이어야 한다.

즉, 배열의 index는 배열이 변할때마다 인덱스가 새롭게 할당되므로 사용을 피해야 한다.

## 무조건 가상 돔?

SPA로 제작된 큰 규모의 웹 페이지에서는 Virtual DOM을 사용해서 브라우저의 연산 양을 줄여서 성능을 개선할 수 있다.

하지만 정보 제공만 하는 웹페이지라면 인터랙션이 발생하지 않기 때문에 일반 DOM의 성능이 더 좋을 수 있기 때문에 무분별한 사용을 피해야 한다.
