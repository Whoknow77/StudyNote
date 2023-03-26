# useContext

## props Drill

```jsx
import "./App.css";
import { useState } from "react";
import Page from "./Page";
function App() {
  const [isDark, setIsDark] = useState(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;


// Page

import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;

// Header
import React from "react";

const Header = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;

// Content
import React from "react";

const Content = ({ isDark }) => {
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;

// Footer
import React from "react";

const Footer = ({ isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;

```

<img src="https://i.postimg.cc/RVZd6fVx/image.png">

다크모드를 각각의 컴포넌트에 적용하기 위해서 `props`값을 부모에서 자식으로 계속 내려주는 것을 볼 수 있다.

<img src="https://i.postimg.cc/CLpJh1zb/image.png">

하지만 만약에 최하위 컴포넌트만 이 값을 필요로하는데도 그 사이에 모든 컴포넌트 들이 `props`를 주고 받기 때문에 낭비가 발생한다.

이때 `useContext`를 사용하여 원하는 컴포넌트만 `props`를 받도록 해결할 수 있다.

## useContext를 활용한 코드

```jsx
import "./App.css";
import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />;
    </ThemeContext.Provider>
  );
}

export default App;


// Page
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;

// ThemeContext
import { createContext } from "react";

export const ThemeContext = createContext(null);

// Content

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;

// Footer

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;

// Header

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;



```

<img src="https://i.postimg.cc/k50xX1ff/image.png">

`useContext`를 이용하면 `props`를 넘기지 않아도 `isDark`에 접근이 가능하다.

비유적으로 표현하면 부모가 `Provider`로 방송을 하면 자식들은 `useContext`를 사용하여 `props`를 받을지 말지를 결정한다.

`ThemeContext`의 `createContext`의 인자값은 만약에 `ThemeContext.Provider`로 감싸지 않은, 즉, 부모의 `props`를 받지 않으려는 컴포넌트가 `props`에 `useContext`로 접근하였을때의 기본값을 의미한다.
