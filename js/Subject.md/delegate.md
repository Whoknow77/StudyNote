# 이벤트 위임

## 이벤트 버블링

- ### 정의 

    - 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 **부모 요소**의 핸들러가 동작합니다. **가장 최상단의 조상 요소를 만날 때까지** 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.

- ### 원리

    ```js
    <form onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
        <p onclick="alert('p')">P</p>
    </div>
    </form>
    ```

    <img src="https://i.postimg.cc/Gm1BkKDN/image.png">
    
    각 태그에 핸들러가 할당되어 있을 때 가장 안쪽의 `<p>`를 클릭하면 순서대로 다음과 같은 일이 벌어진다.

    1) `<p>`에 할당된 onclick 핸들러가 동작합니다.

    2) 바깥의 `<div>`에 할당된 핸들러가 동작합니다.

    3) 그 바깥의 `<form>`에 할당된 핸들러가 동작합니다.

    4) document 객체를 만날 때까지, 각 요소에 할당된 onclick 핸들러가 동작합니다.

        <img src="https://i.postimg.cc/v8k3f4vj/image.png" width=300 height=200>

    - 거의 모든 이벤트가 버블링이 되지만 **focus** 이벤트와 같이 버블링 되지 않는 이벤트도 있다.


- ### 버블링 중단하기

    ```js
    <body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
    <button onclick="event.stopPropagation()">클릭해 주세요.</button>
    </body>
    ```

    `event.stopPropagtion()`을 통해 위쪽으로 일어나는 버블링을 막아준다.
    
    추가로 `event.stopImmediatePropagation()`을 통해 버블링을 막는 동시에 요소에 할당된 다른 핸들러의 동작도 막아준다.

    하지만 **버블링은 유용하기 때문에 버블링을 막는 상황은 거의 없다**.

- ### target vs currentTarget

  - `event.target` : 실제 이벤트가 시작된 '타깃' 요소로 버블링이 진행되어도 변하지 않습니다.

  - `event.currentTarget(this)` : '현재' 요소로, 실행 중인 핸들러가 할당된 요소를 참조합니다.

  ```js
    const button1 = document.getElementById("one");
    const button2 = document.getElementById("two");
    const button3 = document.getElementById("three");
    button1.addEventListener('click', event=>console.log("currenttarget: \n",event.currentTarget, "\ntarget: \n", event.target));
    button2.addEventListener('click', event=>console.log("currenttarget: \n",event.currentTarget, "\ntarget: \n", event.target));
    button3.addEventListener('click', event=>console.log("currenttarget: \n",event.currentTarget, "\ntarget: \n", event.target));
  ```

  <img src="https://i.postimg.cc/C1qTHWWp/image.png" width=500 height=300>

  위 결과는 p, div, form 태그를 차례대로 눌렀을때의 결과입니다.

  각각 target은 그대로고, currentTarget만 버블링이 될때마다 바뀌는 것을 볼 수 있습니다.



## 이벤트 위임


## 참고자료 

https://www.youtube.com/watch?v=beLituqpwl8

https://ko.javascript.info/bubbling-and-capturing


