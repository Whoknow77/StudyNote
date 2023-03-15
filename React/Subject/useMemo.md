# useMemo

## 정의

함수형 컴포넌트는 렌더링 될때마다 내부에 모든 함수가 실행되는데 그때 실행되는 함수들이 반드시 렌더링 될때마다 실행되야 하는 함수들이 아닌데 연산량이 많으면 비효율적이므로 `useMemo`를 이용하여 `Memoization`을 통해 재사용을 가능하게 한다.

## 사용

```js
const 함수 = useMemo(() => {
  return 콜백함수;
}, [deps]);
```

`deps`값이 변경될때만 콜백함수를 수행하고, 변경되지 않을때는 콜백함수를 **메모이제이션**을 통해 수행한다.

## 예제1

```js
const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 계산");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {easySum}</span>
    </div>
  );
}
```

<img src="https://i.postimg.cc/G2gBbW1j/image.png" height="300">

함수형 컴포넌트의 특성에 의해 상대적으로 쉬운 계산기를 사용하는데도 매번 렌더링되어 어려운 계산기의 계산도 하는 비효율적인 모습을 볼 수 있다.

따라서 쉬운 계산기 연산을 할때는 어려운 계산기의 연산이 되지 않도록 해야 한다.

```js
// const hardSum = hardCalculate(hardNumber);

const hardSum = useMemo(() => {
  return hardCalculate(hardNumber);
}, [hardNumber]);
```

<img src="https://i.postimg.cc/QdDLSSB8/image.png" height="300">

이렇게 `useMemo`를 이용해서 수정을 해주면 `hardNumber`의 값이 바뀔때만 내부의 연산을 수행하게 되고, 값이 바뀌지 않았을때는 메모이제이션을 통해 저장된 값을 이용해 연산을 한다.

## 예제2(더 실용적인 예제)

근데 `useEffect`랑 딱히 다른 점이 뭐지..?

의존성배열이 원시타입이라면 `useEffect`나 `useMemo`를 사용하여도 둘다 똑같이 동작한다.

하지만 의존성배열에 원시타입이 아닌 참조타입(객체)를 넣은 경우를 보자.

```js
function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = {
    country: isKorea ? "한국" : "외국",
  };

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}
```

<img src="https://i.postimg.cc/RVMW3r99/image.png" height="300">

예상과는 다르게 `useEffect`를 사용해도 전혀 기능이 먹히지 않고 `number`만 건드렸는데도 렌더링 될때마다

콘솔에 "useEffect 호출"이 찍힌 것을 볼 수 있다.

이유는 무엇일까?

리액트는 내부적으로 함수 컴포넌트에서 렌더링이 될때 비교를 한다.

**원시타입일 경우**

```js
const location = isKorea ? "한국" : "외국";
```

리액트는 매번 `location` 을 똑같은 변수로 인식해 최초 렌더링을 제외하고는 "useEffect 호출" 을 출력하지 않지만,

**참조타입일 경우**

```js
const location = {
  country: isKorea ? "한국" : "외국",
};
```

렌더링 될때마다 `location`은 겉으로 보기에 똑같이 생겼지만 주소값이 매번 바뀌어 할당되므로 다른 `Object`로 판단하게 된다. 따라서 **리액트의 관점에서 `location`의 주소가 바뀌었기 때문에 변화가 일어났다고 보고** 계속해서 "useEffect 호출"이 콘솔에 찍히는 것이다.

이때 `useMemo`를 사용하면 문제를 해결할 수 있다.

```js
const location = useMemo(() => {
  return { country: isKorea ? "한국" : "외국" };
}, [isKorea]);
```

<img src="https://i.postimg.cc/9Mv4kzqj/image.png" height="300">

## 정리(useEffect vs useMemo)

- ### useEffect :마운트나 랜더링 후에 추가적인 작업이 필요할 때 사용
- ### useMemo : 랜더시마다 수행되는 계산값을 캐시하여 성능 향상을 하고자 할 때 사용

## 참고자료

https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6
