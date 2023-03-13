# useRef

## useRef란?

- 변수 관리를 위해 사용된다.

  - 보통 State는 값이 변할 때 마다 렌더링이 되면서 컴포넌트 내부 변수들이 초기화 되므로 원하지 않는 렌더링이 일어난다.
  - State대신 Ref를 이용하면 컴포넌트가 아무리 렌더링이 되어도 Ref안에 저장되어 있는 값은 변화되지 않고 그대로 유지가 된다.
  - 따라서 변경 시 렌더링을 발생시키지 말아야 하는 값을 다룰 때 사용한다.

- 바닐라 자바스크립트의 `document.querySelector()`와 유사하게 특정 DOM을 선택할 수 있다.
  - 대표적으로 input요소를 클릭하지 않고 포커스를 주고 싶을 때 많이 사용된다.

## 사용법

### 정의

    ```js
    const ref = useRef(value);
    // {current: value}
    ```

`useRef`에 인자를 넣어 호출하면 반환값은 `ref` 객체가 되고, `current`값이 인자값인 `value`로 설정된다.

### 수정

```js
ref.current = "hello";
ref.current = "hello2";
```

- 위와같이 `current`값은 수정이 가능하다.

- 반환된 `ref`는 컴포넌트의 전 생애주기에서 유지된다.

- 즉, 컴포넌트가 계속해서 렌더링되어도 `unmount`되기 전까지 값을 유지한다.

## 예제1(변수 관리)

```js
function App() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref :  ", countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}
```

<img src="https://i.postimg.cc/k4Sb085C/image.png">

`State`는 버튼을 누를때마다 화면에 1씩 증가해서 렌더링이 되지만 `Ref`는 버튼을 누를때마다 `current`값이 증가는 하지만 렌더링이 되지 않아 화면에 나타나지 않는다.

다시 `State`를 누르면 그제서야 렌더링이 되어 변경된 `current`값을 확인할 수 있다.

## 예제2(focus)

```js
function InputSample() {
  const [text, setText] = React.useState("");
  const nameInput = React.useRef();

  const onReset = () => {
    setText("");
    nameInput.current.focus();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input value={text} onChange={onChange} ref={nameInput} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:{text} </b>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <InputSample />
    </>
  );
}
```

```js
const nameInput = React.useRef();
```

우선 useRef() 를 사용하여 Ref 객체를 만든다.

```html
<input value="{text}" onChange="{onChange}" ref="{nameInput}" />
```

이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해준다.

```js
const onReset = () => {
  setText("");
  nameInput.current.focus();
};
```

그러면, `Ref` 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 되고, 초기화 버튼 클릭시 `input` 태그의 값이 비워지면서 `focus`가 활성화 된다.

## 참고자료

https://itprogramming119.tistory.com/entry/React-useRef-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C

https://www.youtube.com/watch?v=VxqZrL4FLz8
