# React

## 리액트란?

프론트앤드 라이브러리가 등장하게 된 이유는 동적인 웹 페이지를 보다 효율적으로 유지 보수하고 관리할 수 있도록 도와주는 라이브러리

## 왜 리액트인가?

- Component 단위 작성

  - 데이터와 화면을 하나로 묶어놓은 덩어리

  - UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.

- JSX

  - JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공해 준다.

  - JSX를 통해 컴포넌트를 구성하는 데 쉽게 적응할 수 있다는 장점이 있다.

- 간단한 사용 예시

```js
import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!!
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="1.html">CSS</a>
          </li>
          <li>
            <a href="1.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
```

위와 같이 header, nav, article 태그들을 따로 JSX 문법을 사용하여 컴포넌트로 만들어서 코드를 작성하였다.

이렇게 컴포넌트, JSX를 사용함으로써 재사용과 유지보수가 매우 쉽다.
