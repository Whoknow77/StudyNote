# React.Memo

```jsx
const School = (props) => {
  return <Student name={"홍길동"} age={20} address={"우리집"} />;
};

const Student = ({ name, age, address }) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>{age}</span>
      <span>{address}</span>
    </div>
  );
};
```

부모 컴포넌트에 해당하는 `School`컴포넌트가 렌더링이 되면 `Student`컴포넌트가 렌더링이 되는데 이때 `props`값들이 바뀌지 않는데도 렌더링 되는 경우 성능이 떨어지게 된다. 특히나 만약에 복잡한 로직을 가지고 있다면 더더욱 성능이 떨어진다.

이와같은 상황을 방지하기 위해 `props`가 바뀌었을때만 `Student`컴포넌트를 렌더링하게 해주는 것이 `React.Memo`이다.

## 예시1

```jsx
function Child({ name, age }) {
  console.log("자녀 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid pink", padding: "10px" }}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
}

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("부모 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}
```

부모 나이만 증가시키는데도 자식 컴포넌트가 렌더링 되는 것을 볼 수 있다.

```js
const Child = memo(function Child({ name, age }) {
  console.log("자녀 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid pink", padding: "10px" }}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
});
```

위와 같이 `React.Memo`로 감싸서 함수를 선언하면 문제를 해결할 수 있다.

<img src="https://i.postimg.cc/HkSJRpYJ/image.png">

## 예시2(React.Memo + useMemo)

```jsx
import "./App.css";
import React, { useState, useEffect, useMemo, useCallback, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("자녀 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid pink", padding: "10px" }}>
      <h3>자녀</h3>
      <p>성: {name.lastname}</p>
      <p>이름: {name.firstName}</p>
    </div>
  );
});

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링");
  const name = { lastname: "홍", firstName: "길동" };
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}
```

하지만 위와 같이 `props`값인 `name`이 객체와 같은 참조타입인 경우 `React.Memo`만으로 해결이 되지 않는다.

`React.Memo`입장에서 `name`의 주소값이 렌더링마다 매번 새롭게 할당되기 때문에 다른 값으로 보고 렌더링을 하기 때문이다.

==> `useMemo`를 사용하자.

```jsx
const name = useMemo(() => {
  return {
    lastname: "홍",
    firstName: "길동",
  };
}, []);
```

<img src="https://i.postimg.cc/1tdrQGyq/image.png">

## 예시3(React.Memo + useCallback)

```jsx
const Child = memo(function Child({ name, tellMe }) {
  console.log("자녀 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid pink", padding: "10px" }}>
      <h3>자녀</h3>
      <p>성: {name}</p>
      <button onClick={tellMe}>엄마 나 사랑해?</button>
    </div>
  );
});

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링");
  const tellMe = useCallback(() => {
    console.log("길동아 사랑해");
  }, []);
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}
```

<img src="https://i.postimg.cc/3ws2fK1X/image.png">

이번엔 함수에 대한 최적화이므로 `useCallback`을 사용하자.

```jsx
const tellMe = useCallback(() => {
  console.log("길동아 사랑해");
}, []);
```

<img src="https://i.postimg.cc/28Lrrr7b/image.png">

## 사용하는 경우

### 1. 컴포넌트가 같은 props로 자주 렌더링 될때

### 2. 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야 할때

## 기억해야 할 점

`useState`, `useReducer`, `useContext`와 같은 훅을 사용한다면 `props`의 변화에 상관없이 `state`나 `context`가 변경이 되면 렌더링이 된다.
