# Ajax 통신


## Ajax란

Ajax **비동기** 자바스크립트와 XML (Asynchronous JavaScript And XML)을 말한다.

간단히 말하면, 서버와 통신하기 위해 브라우저의 XMLHttpRequest 객체를 사용하는 것이다.

즉, 자바스크립트를 통해서 서버에 데이터를 요청하는 것이다.

## AJAX가 가지고 있는 강점

1) 페이지 새로고침 없이 서버에 요청
2) 서버로부터 데이터를 받고 작업을 수행
3) 웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있고, 데이터를 받을 수 있다.

즉, 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 **비동기성**을 가지고 있다.

기본적으로 **HTTP 프로토콜**은 클라이언트쪽에서 Request를 보내고 서버쪽에서 Response를 받으면 이어졌던 연결이 끊기게 되어있다. 

그래서 화면의 내용을 갱신하기 위해서는 다시 request를 하고 response를 하며 **페이지 전체를 갱신**하게 된다. 하지만 이렇게 할 경우, 엄청난 **자원낭비와 시간낭비**를 초래한다.

하지만, AJAX는 HTML 페이지 전체가 아닌 **일부분**만 갱신할 수 있도록 XMLHttpRequest객체를 통해 서버에 request한다. 이 경우, **JSON**이나 **XML**형태로 필요한 데이터만 받아 갱신하기 때문에 그만큼의 **자원과 시간을 아낄 수 있다.**


ajax를 구현하는 기술에는 여러 기술이 존재한다.

그 중에 대표적인 3가지에서 Fetch API에 대해서 알아보자.

XMLHttpRequest
Fetch API
JQuery

## ajax 구현 기술

ajax를 구현하는 기술에는 여러 기술이 존재한다.


1) ### XMLHttpRequest(전통적)
2) ### **Fetch**
3) ### JQuery
4) ### **Axios**

대표적으로 네가지가 있고, 요즘은 **Fetch**와 **Axios**를 주로 사용한다고 한다. 이 중에서 **Fetch**에 대해서 알아보자.

## Fetch

### Fetch란?

 ES6에서 지원된 **비동기 통신**을 위한 javascript 내장 api이다.
 

 인자로는 데이터를 얻어올 API 주소, 즉 url이 들어가고, 
 인자(주소)의 **데이터를 서버에게 요청**하는 기능을 한다.

 `fetch`를 이해하고 사용하기 위해서는 비동기 처리를 위해 알아야하는 `promise`를 알고 있어야 한다.

 `Promise`는 여기서 자세하게 설명했으니 참고하면 된다.
 
 ==> [Promise](./async_sync.md)

간단하게 fetch API에게 "**응답이 끝나면 콜백함수를 실행하도록 해줘**" 라고 약속하는 것이라고 이해하면 된다.

예시를 보자!

```html
<input type="button" value="fetch" onclick="
fetch('html').then(function(){
    console.log('response end')
});
console.log(1);
console.log(2);
">
```

<img src="https://i.postimg.cc/0QXQdVKX/image.png">

버튼 클릭 시 인자로 해당되는 'html' 파일의 데이터를 서버에게 요청을 한다.

1과 2가 먼저 콘솔에 찍히는 것으로 보아 비동기적으로 통신이 가능함을 알 수 있다.

<br/>

```html
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a onclick="
    fetch('html')
    .then(function(response){
    response.text().then(function(text){
    document.querySelector('article').innerHTML=text;
    })
    });
    ">HTML</a></li>

  <li><a onclick="
  fetch('css')
  .then(function(response){
  response.text().then(function(text){
  document.querySelector('article').innerHTML=text;
  })
  });
  ">CSS</a></li>

  <li><a onclick="
  fetch('javascript')
  .then(function(response){
  response.text().then(function(text){
  document.querySelector('article').innerHTML=text;
  })
  });
  ">JAVASCRIPT</a></li>
  </ol>
  <article>
    
  </article>
</body>
```
<br/>
<br/>
<img src="https://i.postimg.cc/Qxxt7CXB/image.png" width="100" height="100">
<img src="https://i.postimg.cc/k4XZc0Dy/image.png"
width="100" height="100">
<img src="https://i.postimg.cc/k4XZc0Dy/image.png"
width="100" height="100">
<br/>
<br/>

위와 같은 페이지에서 목록의 HTML, CSS, JAVASCRIPT를 클릭시에 저장된 파일의 데이터를 각각 불러와 빈 article 태그에 동적으로 추가시킨 모습이다.


<br/>
<br/>


```html
<body>

  <h1><a href="index.html">WEB</a></h1>
  <ol>
  <li> <a onclick="fetchPage('html')">HTML</a></li>
  <li> <a onclick="fetchPage('css')">CSS</a></li>
  <li> <a onclick="fetchPage('javascript')">JAVSCRIPT</a></li>
  </ol>

  <article>

  </article>

  <script>
    function fetchPage(name){
      fetch(name)
      .then(function(response){
        response.text().then(function(text){
      document.querySelector('article').innerHTML=text;
      });
      });
    }
  </script>
  
</body>
```

코드가 반복되는 부분이 많아 함수를 사용해 **리팩토링**한 결과이다.

<br/>

### 이로써 ajax 통신을 통해 페이지를 깜빡이지 않고도 동적으로 데이터를 서버에서 불러와 추가하는 웹페이지를 만들 수 있게 되었다.

<br/>
<br/>


## 참고자료

https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started

https://www.youtube.com/watch?v=l-0XIVviPD0

https://www.youtube.com/watch?v=w077w7FN-pg&list=PLuHgQVnccGMA9-1PvblBehoGg7Pu1lg6q

http://www.tcpschool.com/ajax/ajax_intro_basic

https://99geo.tistory.com/65
