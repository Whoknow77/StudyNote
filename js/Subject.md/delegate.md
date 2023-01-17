# 이벤트 버블링과 이벤트 위임

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

- ### 정의

    - 부모에 이벤트를 할당하고

- ### 동작원리

    1) 컨테이너에 하나의 핸들러를 할당합니다.


    2) 핸들러의 event.target을 사용해 이벤트가 발생한 요소가 어디인지 알아냅니다.


    3) 원하는 요소에서 이벤트가 발생했다고 확인되면 이벤트를 핸들링합니다.

 - ### 예시

    - 기존 방식

        ```html
        <body>
        <div class="menu">
        <button class="menu-btn">

            <img src="cogi.jpg" alt="" class="icon" width="100" height="100">
            <span class="btn-label">Whoknow 1</span>

        </button>

        <button class="menu-btn">

            <img src="cogi2.jpg" alt="" class="icon" width="100" height="100">
            <span class="btn-label">Whoknow 2</span>

            </button

        ><button class="menu-btn">

            <img src="cogi3.jpg" alt="" class="icon" width="100" height="100">
            <span class="btn-label">Whoknow 3</span>

        </button>
        </div>
        </body>
        ```

        위와 같은 html 태그가 있다고 하자.

        <img src="https://i.postimg.cc/25NnDkqK/image.png">
        
        <br/>
        
        이때 버튼마다 핸들러를 달아주려면 각 버튼마다 이와같은 방식으로 `addEventListener()`를 달지만 이 함수가 늘어날수록 페이지 성능이 안좋아진다.
        
        ==> **이벤트 위임의 필요성 대두**

        ```js
        const menu=document.querySelector('.menu');

        function clickHandler(event){
            console.log(event.target);
        }

        menu.addEventListener('click', clickHandler);
        ```

        우선 이렇게 `event.target`을 통해 클릭이벤트가 발생한 곳의 정보를 알 수 있다.

        하지만 우리가 원하는건 버튼 안의 어떤 부분을 가리켜도 그 버튼이 클릭된 것으로 컴퓨터가 인지를 해야 하는데 버튼 안의 `img`, `span`태그를 클릭하면 그 요소가 반환되어서 버튼을 가리키지않고 각각 **`img` `span`을 가리키는 문제**가 발생하게 된다.

        ```html
        <button class="menu-btn" data-value="1">
        <button class="menu-btn" data-value="2">
        <button class="menu-btn" data-value="3">
        ```

        ```js
        const menu = document.querySelector('.menu');

        function clickHandler(event){
            let elem = event.target;
            while(!elem.classList.contains('menu-btn')){
                elem = elem.parentNode;
            }
        
            console.log(elem.dataset.value);
        }
        
        menu.addEventListener('click', clickHandler);
        ```
        

        현재 타겟이 내가 원하는 element와 일치할때까지 **상위 element를 조사**해나간다. html태그의 `data` 속성을 설정후 이것을 통해 판별을하자!
        
        이제 버튼의 어디 부분을 클릭해도 각 버튼의 `data-value`값을 잘 출력한다!

        하지만 이번엔 버튼 바깥의 **div영역을 클릭**하면 오류가 난다!

        처음에 div 태그가 `'menu-btn'` 속성을 가지지 않고 있으므로 div => body => html => document 객체를 순서대로 조사하게 되는데 **어떤 태그도 속성을 가지지 않고 있으므로** 오류가 난다.
        
        ```js
        const menu = document.querySelector('.menu');

        function clickHandler(event){
            let elem = event.target;
            while(!elem.classList.contains('menu-btn')){
                elem = elem.parentNode;
            }

            if(elem.nodeName=='BODY'){
                elem=null;
                return;
            }
        
            console.log(elem.dataset.value);
        }
        
        menu.addEventListener('click', clickHandler);
        ```

        이렇게 BODY 태그로 왔을때 함수를 종료하는 방식으로 문제를 해결할 수 있다.

        ### 이 예제에서 이벤트 위임을 통해 `addEventListener` 호출을 줄여 줄 수 있음을 알 수 있다.

  - ### 예시2

    ```html
    <div class="menu">

    </div>
    ```

    위와같이 div태그에 아무 정보를 입력하지 않았다고 하자.

    ```js
    window.addEventListener('click', ()=>{
        const menu = document.querySelector('.menu');

        const htmlStr = `
         <button class="menu-btn" data-value="1">

        <img src="cogi.jpg" alt="" class="icon" width="100" height="100">
        <span class="btn-label">Whoknow 1</span>

      </button>

      <button class="menu-btn" data-value="2">

        <img src="cogi2.jpg" alt="" class="icon" width="100" height="100">
        <span class="btn-label">Whoknow 2</span>

        </button

      ><button class="menu-btn" data-value="3">

        <img src="cogi3.jpg" alt="" class="icon" width="100" height="100">
        <span class="btn-label">Whoknow 3</span>

      </button>
      `;
      menu.innerHTML = htmlStr;
        });
    ```

    빈 화면에 아무 곳이나 클릭하면 기존의 이미지와 글자들을 보여준다.

    이와같이 **동적으로** 따로 `addEventHandler`없이 이벤트 핸들러 처리가 된 컨텐츠들을 생성할 수 있다. 
        

- ### 장점

    - 많은 핸들러를 할당하지 않아도 되기 때문에 초기화가 단순해지고 **메모리가 절약**된다.

    - 요소를 추가하거나 제거할 때 해당 요소에 할당된 핸들러를 추가하거나 제거할 필요가 없기 때문에 **코드가 짧아진다**.


    - innerHTML이나 유사한 기능을 하는 스크립트로 요소 덩어리를 더하거나 뺄 수 있기 때문에 **DOM 수정이 쉬워진다**.



- ### 단점

    - 이벤트 위임을 사용하려면 이벤트가 반드시 **버블링** 되어야 합니다.


## 참고자료 

https://www.youtube.com/watch?v=beLituqpwl8

https://ko.javascript.info/bubbling-and-capturing

https://www.youtube.com/watch?v=-fFNuNsR8q4&list=PLe9WXHRkq9p0gZrRxCCGY2Z2aChGSXsiw


