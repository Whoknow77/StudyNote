# useEffect

## 정의

어떠한 컴포넌트가 마운트 / 업데이트 / 언마운트 될 때 렌더링 되는것을 조작하는 기능을 가진다.

- Mount : 화면에 첫 렌더링
- Update : 다시 렌더링
- Unmount : 화면에서 사라질때

## 형태

크게 세 가지 형태로 나뉜다.

```js
useEffect(() => {
  // 작업
});
```

렌더링될때마다 작업 실행

```js
useEffect(() => {
  // 작업
}, []);
```

화면에 첫 렌더링될때만 실행

```js
useEffect(() => {
  // 작업
}, [value]);
```

화면에 첫 렌더링될때 실행 + value값이 바뀔때 실행

## Clean Up

```js
useEffect(() => {
  // 구독
  return () => {
    // 구독 해지
  };
}, []);
```

언마운트 되거나 다음 렌더링 시 불릴 `useEffect`가 실행되기 전에 호출될 콜백함수이다.

주로 timer를 멈추는 함수 또는 이벤트 리스너를 제거하는 함수를 사용한다.

## 예시1

```js
function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링마다 매번 실행
  useEffect(() => {
    console.log("렌더링");
  });

  // 마운팅 + count가 변할때마다 실행
  useEffect(() => {
    console.log("렌더링");
  }, [count]);

  // 마운팅 + name이 변할때마다 실행
  useEffect(() => {
    console.log("렌더링");
  }, [name]);

  // 맨 처음 렌더링 될때만 실행
  useEffect(() => {
    console.log("렌더링");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}
```

기본적으로 `input`에 값을 입력할 때마다 렌더링마다 매번 `useEffect`의 콜백함수가 실행되므로 인자값으로 보통 `input`에서 변하는 value값을 지정해주는 방식으로 최적화를 한다.

## 예시2(Timer)

```js
function Timer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
```

위의 코드에서는 버튼을 클릭하면 `setInterval`함수를 종료하지 않아서 무한루프에 빠지게 된다.

```js
function Timer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
}
```

위와같이 Clean up을 추가하여 언마운트시에 `setInterval`을 해제하였다.

<img src="https://i.postimg.cc/Bv8MkSSB/image.png" height="300">
## 참고자료

https://www.youtube.com/watch?v=kyodvzc5GHU
