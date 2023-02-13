# React

## 리액트란?

- 프론트앤드 라이브러리가 등장하게 된 이유는 동적인 웹 페이지를 보다 효율적으로 유지 보수하고 관리할 수 있도록 도와주는 라이브러리

- 사용자 정의 태그를 만드는 기술

## 왜 리액트인가?

- Component 단위 작성

  - 데이터와 화면을 하나로 묶어놓은 덩어리

  - UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.

- JSX

  - JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공해 준다.

  - JSX를 통해 컴포넌트를 구성하는 데 쉽게 적응할 수 있다는 장점이 있다.

- 간단한 사용 예시

```js
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="1.html">HTML</a>
        </li>
        <li>
          <a href="1.html">CSS</a>
        </li>
        <li>
          <a href="1.html">JavaScript</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>HTML</h2>
      HTML is HyperText Markup Language.
    </article>
  );
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
export default App;
```

<img src="https://i.postimg.cc/6p2LBqHb/image.png">

위와 같이 header, nav, article 태그들을 따로 JSX 문법을 사용하여 컴포넌트로 만들어서 코드를 작성하였다.

이렇게 컴포넌트, JSX를 사용함으로써 재사용과 유지보수가 매우 쉽다.

하지만, 여태껏 html css javascript순으로 웹페이지에 보여줬던걸 이제는 반대로 생각해야한다.

리액트하나로 html css javascript 구현이 모두 가능한데 **역순**으로 만든다는 생각을 하자.

## READ

### props

`Props`는 컴포넌트의 외부에서 사용하는 입력값으로 우리가 만든 컴포넌트에 어떻게 장착할지 배워보자.

```js
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read" / +t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}
export default App;
```

처음에 올린 코드와 동일하게 동작하는 코드이지만 `props`를 사용해 동적으로 태그를 만들 수 있다.

App 함수에서 `topics` 배열을 만들고, {}로 감싸서 Nav함수에서 props로 이것을 받고, 반복문을 통해서 내용을 순회하면서 태그안에다 넣어주었다.

여기서 주의할점은 `<li key={t.id}>`와 같이 key값을 설정해야하는데 이것은 자동으로 생성한 태그의 경우에는 태그들을 키 값을 추적함으로써 성능을 높이기 위해서이다.

### 이벤트

1. **`Header` 태그를 클릭했을 때 `alert`창을 띄우도록 해보자.**

2. **`nav`태그 안에 `li`태그 들을 클릭할 시에 `alert`창으로 각각 `topics`에 저장되어있는 `id`값을 출력하도록 해보자.**

```js
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("Header");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
    </div>
  );
}
```

- 1번

  우선 `App` 함수에서 `onChangeMode`함수를 선언하고, 이걸 `Header`태그에서 이벤트에 대한 콜백함수로 `props.onChangeMode` 로 접근해 호출하였다.

  `event.preventDefault()`는 기존 a태그의 동작을 막아 페이지 리로드 되는것을 방지하여 첫화면으로 돌아가는것을 막는다.

- 2번

  `onChangeMode` 함수 안에서 인자로 받은 `id`값을 출력하도록 되어있는데 이 값을 `Nav`함수에서 인자로 보낼 때
  따로 `id={t.id}`로 지정해줘서 각각 1, 2, 3을 가리키도록 한다.

  그리고 이벤트가 발생했을때 `event.target.id`로 접근한다.

  여기서 `event.target`는 `a` 태그 객체를 반환한다.

## state

<img src="https://i.postimg.cc/MKmQWx5J/image.png" height="300">

상자가 컴포넌트라 할 때, 입력은 `prop`에 해당한다. 그리고 그것을 컴포넌트 함수가 처리해서 return값을 반환한다. 이때 반환된 값을 토대로 UI가 만들어진다.

`prop`과 `state` 모두 이 값이 변경되면 새로운 return값을 만든다. 하지만 둘의 차이점이 무엇일까?

- prop : 컴포넌트를 사용하는 **외부자**를 위한 데이터

- state : 컴포넌트를 만드는 **내부자**를 위한 데이터

**`state`를 통해 각 li 태그들의 링크를 눌렀을때 다른 창을 보이도록 해보자.**

<img src="./../../react-app/state.gif">

```js
function App() {
  const mode = "WELCOME";
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    content = <Article title="READ" body="Hello, READ"></Article>;
  }
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          mode = "WELCOME";
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          mode = "READ";
        }}
      ></Nav>
      {content}
    </div>
  );
}
```

지역변수로 `mode` 변수를 두고, 이 값에 따라 `content`를 변경시켜 클릭했을때, 태그를 동적으로 변화시키려 한다.

하지만 아무런 변화가 없고, 오류가 뜬다. 이유는 무엇일까?

우리가 원하는 동작원리는 이렇다.

클릭을 통해 `mode` 값이 변경되면 `App` 함수를 새로 실행해 return값이 반환되어 UI에 반영되어야 하는데 `App` 함수가 다시 실행되지 않는다.

**이때 `state`를 사용하면 해결이 가능하다.**

```js
const _mode = useState("WELCOME");
const mode = _mode[0];
const setMode = _mode[1];
```

우선 지역변수 `_mode`를 상태(state)로 만들어보자.

인자로는 초기값이 들어간다.

mode에 상태값이 리턴이 되는데 상태값을 확인해보자.

<img src="https://i.postimg.cc/1zMcr3Hy/image.png">

콘솔에 출력해보면 배열이 반환되는데

0번 인덱스는 상태의 값을 읽을때,

1번 인덱스는 상태의 값을 변경할때의 사용하는 함수가 들어있다.

```js
const [mode, setMode] = useState("WELCOME");
```

보통은 위와 같이 구조분해를 사용해서 코드를 줄여서 사용한다.

이제 `state`를 활용한 코드를 살펴보자.

```js
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {content}
    </div>
  );
}
```

`Nav` 태그를 누르면 `Mode`를 `setMode`를 통하여 `App` 함수가 재 실행되어 READ로 변경한다.

또한 `SetId`를 통하여 `Nav` 컴포넌트 함수에서 전달한 'id'값을 `App` 함수 안에서 반복문을 통해

`topics` 배열을 돌며 'id'값이 일치하는지 확인하고 그 값을 통하여 컨텐츠를 변경하여 return하며 UI를 변경시킨다.

이때 중요한 것은

```js
<a
  id={t.id}
  href={"/read/" + t.id}
  onClick={(event) => {
    event.preventDefault();
    props.onChangeMode(Number(event.target.id));
  }}
>
```

`Nav` 컴포넌트 함수에서 `id={t.id}`로 선언한 순간 id값은 문자열로 바뀌기 때문에 함수를 호출할때 `Number`로 감싸서 숫자로 변경시켜서 전달해야 한다.

## CREATE

**`Create` 을 누르면 폼 태그가 생성되고, 폼에 정보를 입력한후 제출을 하면 4번부터 새로 목록이 생기고, 자동으로 그 목록으로 페이지 리로딩 없이 이동하는 기능을 구현해보자.**

~~사진자리~~

```js
import { useState } from "react";

function Header(props) {}

function Nav(props) {}

function Article(props) {}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          // 폼을 제출하였을때 발생하는 이벤트
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <textarea name="body" placeholder="body"></textarea>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    // state로 승격
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics); // reference 타입은 복사해서 넘기기
          setId(nextId);
          setMode("READ"); // 본문 이동
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }

  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
    </div>
  );
}
export default App;
```

따로 `CREATE` 컴포넌트를 만들어 create를 클릭 시 모드를 CREATE로 바꾸고 컴포넌트안에서 `onCreate`함수 인자로 `form` 태그의 값들을 보내 `App`함수에서 return 값을 갱신하여 UI를 변경시켰다.

```js
const newTopic = { id: nextId, title: _title, body: _body };
const newTopics = [...topics];
newTopics.push(newTopic);
setTopics(newTopics); // reference 타입은 복사해서 넘기기
setId(nextId);
setMode("READ"); // 생성한 번호로 페이지 이동
setNextId(nextId + 1);
```

`onCreate`를 자세히 살펴보면 state로 승격시킨 id값을 추가해 `newTopic`를 생성한다.

여기서 복사를 하는 이유는 무엇일까?

<img src="https://i.postimg.cc/pd3MqmnK/image.png">

만약 배열을 그대로 넘기면 `setTopics`함수가 인자로 받은 값이 원본 값인지 아닌지 판단하여, **원본 값일 경우 렌더링을 하지 않기 때문**에 아무 변화가 일어나지 않는다.

따라서 인자값이 `primitive` 값이 아닌 `reference`타입일 경우 복사를 해줘서 넘겨야 한다.
