# usecallback

## 정의

`useMemo`와 비슷한 Hook으로

`useMemo`는 특정 결과값을 재사용 할 때 사용하는 반면, `useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.

## 사용법

```js
const someFunction = useCallback(() => {
  // 콜백함수
  return;
}, [deps]);
```

## 예제

```js
function App() {
  const [number, setNumber] = useState(0);

  const someFunction = () => {
    console.log(`someFunc : number: ${number}`);
    return;
  };

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
```

<img src="https://i.postimg.cc/1Xbv9VYG/image.png jeogjt" height="300">

`useEffect`로 `someFunction` 함수가 변경될때 변경을 출력하도록 하였는데 숫자를 조작할때마다 변경이 된다.

이유는 함수도 객체에 해당하여 매번 렌더링시 `someFunction`이 새로운 주소로 할당되어 변경을 감지하기 때문이다.

이 상황에서 `usecallback`을 사용하면 문제를 해결할 수 있다.

```js
const someFunction = useCallback(() => {
  console.log(`someFunc : number: ${number}`);
  return;
}, []);
```

<img src="https://i.postimg.cc/9FrkvZQN/image.png" height="300">

이렇게 하면 `usecallback`을 이용하여 콜백함수를 감싸면 최초 렌더링시에만 콜백함수가 호출이 되고, 메모이제이션을 통해 함수의 주소를 `someFunction`에 저장했다가, 다음 렌더링 부터는 함수의 객체를 새로 생성하지않고 재사용을 한다.

문제를 해결하였지만, 이제는 버튼을 눌렀을 때 업데이트된 숫자값이 출력되지 않는 문제가 발생한다.

왜냐하면, `deps` 배열에 빈 배열을 저장하였기 때문에 버튼을 눌러도 최초 렌더링시에 기억해놨던 `someFunction`의 주소를 가리키기 때문에 변화를 감지하지 못하고 그대로 0값을 사용하기 때문이다.

따라서,

```js
const [toggle, setToggle] = useState(true);
<button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>;

const someFunction = useCallback(() => {
  console.log(`someFunc : number: ${number}`);
  return;
}, [number]);
```

더 확실히 알아보기 위해 누르면 true / false를 toggle하는 버튼을 추가하였다.

`deps`에 `number`을 저장하면, `number`의 변경을 감지하면 새로 객체를 할당하고, 그게 아니면 메모이제이션을 활용해 최적화를 한다.

<img src="https://i.postimg.cc/MGdmDZQJ/image.png" height="300">
