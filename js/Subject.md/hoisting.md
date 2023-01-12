# Hoisting


## Scope

- ### 범수의 유효범위

    - Block-Level

        변수 선언시 블럭안에서만 유지

    - **Function Level**

        변수 선언시 함수 안에서 유지

## Hoisitng


- ### 정의 
    - 변수 선언과 함수 선언을 위로 끌어올린다.

- ### 원인 

    - 자바스크립트의 변수 생성(Instantiation)과 초기화(Initialization)의 작업이 분리돼서 진행되기 때문이다.

    <br>


    ```js
    console.log(a()); // 'a'
    console.log(b()); // 에러

    function a(){
        return 'a';
    }

    var b = function bb(){
        return 'bb';
    }
    ```

    위와 같은 코드가 있다고 가정하자.

    ```js
    function a(){
        return 'a';
    }

    var b;

    console.log(a());
    console.log(b());

    b = function bb(){
        return 'bb;'
    }
    ```

    다음과 같이 위에서 아래로 진행하면서 변수선언과 함수선언을 발견할시에 **Hoisting**을 통해 선언들이 위로 끌어당겨져 순서대로 실행된다.
    
## 함수 표현식

- ### 함수 선언식(Hoisting)

    ```js
    console.log(add(2, 3));
 
    function add(x, y) {
        return x + y; 
    }

    //5
    ```

    위와 같이 **함수 선언 전에 함수를 호출**하여 코드가 엉성해질 수 있다.


- ### **함수 표현식(No Hoisting)**

    ```js
    console.log(add(2, 3));  // error
 
    // 함수 표현식 형태로 add() 함수 정의
    var add = function (x, y) {
        return x + y;
    
    }
    
    console.log(add(3, 4));  // 7

    ```

    처음의 add(2, 3) 함수는 실행되지 않는다.

    왜냐하면 함수 표현식 형태로 add() 함수가 정의되어 있기 때문이다. **따라서 호이스팅이 일어나지 않는다.**

- ### **let/const vs var**

    - 우선적으로 자바스크립트에서는 **선언만 호이스팅 대상**으로 본다. 즉, 초기화는 호이스팅 대상이 아니다.

    - let/const

        - 호이스팅 대상이지만, 호이스팅 시, 변수를 초기화 하지 않는다.


    - var 

        - 호이스팅 대상으로, 호이스팅 시, 변수를 undefined로 초기화 한다.
<br>

## 참고문서

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%8A%A4%EC%BD%94%ED%94%84-%ED%95%A8%EC%88%98-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85

https://developer.mozilla.org/ko/docs/Glossary/Hoisting#%EC%84%A0%EC%96%B8%EB%A7%8C_%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85_%EB%8C%80%EC%83%81
    