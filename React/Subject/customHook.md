# customHook

재사용을 극대화하기 위해 반복되는 코드들을 사용자가 정의한 Hook을 이용하여 정의할 수 있다.

## 예시1(useInput)

```js
import "./App.css";
import { useInput } from "./useInput";

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput(
    "안녕",
    displayMessage
  );
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;

// customHook
import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
```

<img src="https://i.postimg.cc/05hJ8sS1/image.png">

커스텀 훅을 이용해서 작성할 경우 `input`을 여러개 생성해야할때 `useInput`을 여러개 사용하면 되므로 편리하다.

## 예시2(useFetch)

```js
import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const { data, fetchUrl } = useFetch(baseUrl, "users");
  return (
    <div>
      <h1>useFecth</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

// useFetch
import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return {
    data,
    fetchUrl,
  };
}
```

<img src="https://i.postimg.cc/pL65G5H8/image.png">

네트워크 상에서 데이터를 가져오는 customHook이다.

`baseUrl` 뒤에 `users` or `posts`등등이 올때마다 데이터를 다르게 받아오는데 이것을 다른 컴포넌트에서 사용하기 위해서 `useFetch`를 사용하면 편리하다.
