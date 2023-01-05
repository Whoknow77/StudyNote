# **비동기 처리**

   ## 동기 처리

   - 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름

   - 자바스크립트는 기본적으로 Hosting이 된 이후부터 코드 작성 순서에 맞춰서 순차적으로 실행되는 **synchronous**한 언어이다.

      - **Hosting**

         - var, function 선언들이 코드의 제일 위로 올라가는 것

   ## 비동기 처리
   - 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
   - 동시 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있음

   ## **콜백 함수**

   - **콜백 함수란?**

      1. **다른 함수의 인자로써 이용되는 함수.**

      2. 어떤 이벤트에 의해 호출되어지는 함수.

      ```js
      console.log('1');
      setTimeout(function(){
         console.log('2');
      }, 1000);
      console.log('3');
      ```
      
   - **필요성**



      ```js
      // 콜백 O
         function repeatYesCallback(num, callback) {
         for (let i = 0; i < num; i++) {
            callback("hello world");
         }
      }

      function print(string) {
         console.log(string);
      }

      repeatYesCallback(5, print);

      // 콜백 X
      <!-- function repeatNoCallback(num) {
      for (let i = 0; i < num; i++) {
         print("hello world");
      }
      }

      function print(string) {
         console.log(string);
      }

      repeatNoCallback(5); -->
      ```
      - **추상화**가 가능하다.

         - 매우 간단한 함수이지만, 그런데 그냥 출력하는 현재 동작말고 다른 동작으로 변경해야한다면?


            콜백을 썼다면 콜백함수만 수정해주면 된다.

            함수 내에서 해야할 일을 callback함수로 추상화하여 전달받았기 때문에 더이상 내부로직에 강력히 의존하지 않고,

            외부에서 로직의 일부분을 함수로 전달받아 수행하므로 더욱 유연한 구조를 가지게 된다.

      - **비동기(Asynchronous) 처리 방식의 문제점을 해결**할 수 있습니다.

      ```js
      // 콜백 X
      function findUser(id) {
      setTimeout(function () {
         console.log("waited 0.1 sec.");
         user = {
            id: id,
            name: "User" + id,
         };
      }, 100);
      return user;
      }

      const user = findUser(1);
      console.log("user:", user);

      결과
      user: undefined
      waited 0.1 sec.
      ```

      비동기 함수인 setTimeout를 만나고 바로 return을 해버리므로 user의 값이 undefined가 나오고, 후에 setTimeout의 함수가 실행되는 문제점이 생긴다.

      ```js
      function findUserAndCallBack(id, cb) {
      setTimeout(function () {
         console.log("waited 0.1 sec.");
         const user = {
            id: id,
            name: "User" + id,
         };
         cb(user);
      }, 100);
      }

      findUserAndCallBack(1, function (user) {
      console.log("user:", user);
      });

      결과
      waited 0.1 sec.
      user: {id: 1, name: "User1"}
      ```

      결과값을 바로 리턴받지 않고, 그 결과값을 통해 처리할 로직을 **콜백 함수**로 넘겨서 제대로 구현을 하였다.
      



   - **단점**

      - **콜백지옥**
      - 

## 참고자료

## **Promise**

## **async & await**

https://velog.io/@ko1586/Callback%ED%95%A8%EC%88%98%EB%9E%80-%EB%AD%94%EB%8D%B0

https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11

https://thoughtprovo-king.tistory.com/92

-------------------------------------------