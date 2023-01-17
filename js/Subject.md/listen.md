# 이벤트 핸들러

## 이벤트란?

- 브라우저에서 사용자의 조작이나 환경의 변화로 벌어진 사건

## 이벤트 핸들러란?

- 이러한 이벤트에 대해 즉각적인 반응을 할 수 있게 하는 것
    
## 이벤트 핸들러의 종류

- ### 1) 태그에 직접 이벤트를 넣는 방법

    ```js
    <a href="#" onclick="alert();">링크</a>
    ```

- ### 2) onClick등의 메소드 활용

    ```js
    객체.onClick=function(){
        alert();
    }
    ```

- ### 3) **이벤트 리스너**

    ```js
    객체.addEventListener('click', function(){});

    객체.removeEventListener('click', function(){});
    ```


  -   이전에 추가한 **이벤트 핸들러를 제거**할 수 있는 메소드 존재


  -   같은 리스너(target)에 대해 **다수의 핸들러 등록** 가능


  -   옵션 제공

<br>

 ### 현대에서는 이벤트 리스너를 거의 사용하므로 이 문서에서는 이벤트 리스너를 중점으로 다루겠다.
<br>


- ### 이벤트 리스너 등록하기

    - **addEventListener**를 사용한다.

    - DOM객체.addEventListener(이벤트명, 실행할 함수명, 옵션)

        - 이벤트명 : 발생할 수 있는 이벤트명


        - 함수명 : 해당 **이벤트가 발생할 때 실행할 함수 명**, 생략가능


        - 옵션 : **버블링을 제어**하기 위한 옵션, 생략가능

- ### 이벤트 리스너 삭제하기

    - 이벤트 리스너는 메모리 누수이 원인이 될 수 있으므로 사용하지 않는 이벤트 리스너는 반드시 삭제를 해줘야 한다.

    - **removeEventListener**를 사용한다.

    - DOM객체.removeEventListener(이벤트명, 실행했던 함수명)

- ## 이벤트 객체

    - 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 자동으로 전달되는 데이터

        ```js
        const button1 = document.getElementById("one");
        button1.addEventListener('click', event=>console.log(event));
        ```
    
        <img src="https://i.postimg.cc/k5Cq1hXr/image.png" height="300">

        위와 같이 event를 출력하면 event객체안의 수 많은 정보가 들어있다.
        이중에서 가장 중요하고 많이 사용되는 **target**을 알아보자.

        - ### target

            <img src="https://i.postimg.cc/B6WYcdqD/image.png">

            target을 출력하면 이렇게 **눌린 태그의 정보**를 얻을 수 있어서 이것을 조작할 수 있게 된다.

            

## 참고자료

https://ordinary-code.tistory.com/64

https://www.youtube.com/watch?v=xRxckq3WPe4

https://www.habonyphp.com/2019/03/js_22.html

https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events