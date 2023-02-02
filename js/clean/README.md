# Clean Coding

자바스크립트를 위한 코드 스타일부터 습관 그리고 클린 코드에 대해 함께 고민해보고 그 이유에 대해 탐구하고 또 학습해보는 시간을 가집니다.

## 타입 다루기

## 경계 다루기

## 분기 다루기

JavaScript에서, 참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값이다. 따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가된다. (예: false, 0, -0, 0n, "", null, undefined와 NaN 등)

- ### Truthy & Falsy

  ```js
  function printName(name) {
    if (name === undefined || name === null) {
      return "사람이 없네요";
    }

    return "안녕하세요 " + name + "님";
  }
  ```

  위와 같은 코드는 함수의 인자가 없을때나 null값일때를 검사한다.

  ```js
  function printName(name) {
    if (!name) {
      return "사람이 없네요";
    }

    return "안녕하세요 " + name + "님";
  }
  ```

  위의 코드와 동일한 결과를 출력하지만 코드가 매우 간결해졌다.

- ### short-circuit evaluation

  - or 연산자

    ```js
    function fetchData() {
      if (state.data) {
        return state.data;
      } else {
        return "Fetching...";
      }
    }
    ```

    다음과 같은 코드를 줄이려고 하면 어떻게 줄이는 것이 좋을까?

    ```js
    function fetchData() {
      return state.data ? state.data : "Fetching...";
    }
    ```

    삼항연산자가 생각난다.

    ```js
    function fetchDate() {
      return state.data || "Fetching...";
    }
    ```

    하지만 or연산은 true가 나올 때 까지 탐색한다는 점을 이용한다면 더 간결하게 줄일 수 있다.

  - and 연산자

    ```js
    const getActiveUserName(user, isLogin){
        if(isLogin){
            if(user){
                if(user.name){
                    return user.name
                }
                else{
                    return '이름없음'
                }
            }
        }
    }
    ```

    위와 같은 코드를 줄여보자.

    ```js
    const getActvieUserName(user, isLogin){
        return user.name || '이름없음';
    }
    ```

    이번엔 and 연산과 or연산을 모두 사용하였다.

    and 연산은 false가 나올 때 까지 탐색한다는 점이 특징이므로 이렇게 로직을 동일하게 돌아가지만 코드를 매우 간결하게 줄일 수 있다.

- ### Early Return

  함수를 미리 종료한다는 점과 사고하기 편하다는 점이 장점이다.

  ```js
  function loginService(isLogin, user) {
    if (!isLogin) {
      if (checkToken()) {
        if (!user.nickName) {
          return registerUser(user);
        } else {
          refreshToken();
        }

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
  ```

  로직이 하나에 의존적으로 되어있다.

  위와 같은 코드를 줄여보자

  ```js
  function loginService(isLogin, user) {
    if (isLogin) {
      return;
    }

    if (!checkToken()) {
      throw new Error("No Token");
    }

    if (!user.nickName) {
      return registerUser(user);
    }

    refreshToken();

    return "로그인 성공";
  }
  ```

  의존성을 없애서 훨씬 보기 편해졌고 로직이 한 눈에 들어온다. 또한 리팩토링도 빠르게 수행할 수 있다.

## 참고자료

https://www.udemy.com/course/clean-code-js/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_Search_la.KR_cc.KR&utm_term=_._
