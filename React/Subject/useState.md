# useState의 렌더링과 함수형 업데이트

## setState는 비동기로 동작한다.

```js
export default function App() {
  const [value, setValue] = useState(0);

  const onClick = () => {
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
  };

  return (
    <div className="App">
      <button onClick={onClick}>+</button>
      <h1>{value}</h1>
    </div>
  );
}
```

버튼을 클릭하면 **3** 이 아닌 **1**이 출력된다.

- 이유
  - setState의 비동기적 특성
  - 리액트가 효율적으로 렌더링하기 위해 여러 개의 상태 값 변경 요청을 batch(일괄 처리) 처리하기 때문이다.
- 원리

  ```js
  // A = 0(초기 state값)
  // B : 저장하여 다음 렌더링에 사용될 state 값

  setValue(value + 1);
  // ① B = A + 1 => 2

  setValue(value + 1);
  // ② B = A + 1 => 2

  setValue(value + 1);
  // ③ B = A + 1 => 2
  ```

  - 따라서 변경된 사항을 기억하지 않기 때문에 마지막 업데이트만 적용되어 다음 렌더링에 쓰이게 된다.

## setState 함수형 업데이트

함수형 업데이트를 사용하면 setState를 동기적으로 사용할 수 있다.

```js
export default function App() {
  const [value, setValue] = useState(0);

  const onClick = () => {
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
  };

  return (
    <div className="App">
      <button onClick={onClick}>+</button>
      <h1>{value}</h1>
    </div>
  );
}
```

- 원리

  ```js
  // A : 초기 state값
  // B : A 또는 이번 렌더링에서 업데이트된 값 / 다음 렌더링에 사용될 값
  // C : 함수형 업데이트를 통해 생겨난 값

  setValue((prev) => prev + 1);
  // ①-1 : C = B + 1 => 1
  // ①-2 : C 를 B 에 저장

  setValue((prev) => prev + 1);
  // ②-1 : C = B + 1 => 2
  // ②-2 : C 를 B 에 저장

  setValue((prev) => prev + 1);
  // ③-1 : C = B + 1 => 3
  // ③-2 : C 를 B 에 저장
  ```

  - 함수형 업데이트는 이렇게 업데이트된 값을 저장하기 때문에 여러번의 업데이트가 적용되어 다음 렌더링에 사용된다.

  - 결국 문제의 해결은 setState를 비동기로 수행할 때, 값을 전달하지말고 업데이트된 최신의 state와 함께 함수를 전달하는 방법이다.

## 여러개의 useState를 업데이트한다면 렌더링은 몇번 일어날까?

```js
export default function App() {
  const [valueX, setValueX] =  useState(0)
  const [valueY, setValueY] =  useState(0)
  const [valueZ, setValueZ] =  useState(0)

  const onChange = (e) => {
    setValueX(prev => prev + 1);
    setValueY('')
    setValueZ(e.target.value);
  }

  return (
    <div className="App"  >
     <input onChange={onChange}/>
      <h1>valueX : {valueX}</h1>
      <h1>valueY : {valueY}</h1>
      <h1>valueZ : {valueZ}</h1>
    </div>
  );
```

**1번의 렌더링만 일어난다.**

- setState가 호출되면 리렌더링이 되긴 하지만 그 즉시 리렌더링이 일어난 것이 아닌 JS Call Stack 이 모두 실행되고 리렌더링이 일어난다. 한꺼번에 setState들의 업데이트가 이루어지며 리렌더링 되는 것이다.

## 참고자료

https://velog.io/@tjdgus0528/React-Native-5x048oii

https://garve32.tistory.com/39
