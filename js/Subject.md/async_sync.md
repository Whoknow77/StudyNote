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

      -  여기서 setTimeout은 비동기 함수로 인자로 0이 들어가도 비동기처리를 한다.
      
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
      function repeatNoCallback(num) {
      for (let i = 0; i < num; i++) {
         print("hello world");
      }
      }

      function print(string) {
         console.log(string);
      }

      repeatNoCallback(5);
      ```
      - **추상화**가 가능하다.

         - 매우 간단한 함수이지만, 그런데 그냥 출력하는 현재 동작말고 다른 동작으로 변경해야한다면?


            콜백을 썼다면 콜백함수만 수정해주면 된다.

            함수 내에서 해야할 일을 callback함수로 추상화하여 전달받았기 때문에 더이상 내부로직에 강력히 의존하지 않고,

            외부에서 로직의 일부분을 함수로 전달받아 수행하므로 더욱 유연한 구조를 가지게 된다.

      - **비동기(Asynchronous) 처리 방식의 문제점을 해결**할 수 있습니다 => 순차적 처리를 위해 사용한다.

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

      - **콜백지옥** / **콜백체인**

         ```js
         class UserStorage{
         loginUser(id, password, onSuccess, onError){
            setTimeout(() =>
            {
                  if(
                     (id==='who' && password==='know') ||
                     (id==='choi' && password==='hunoh')

                  ){
                     onSuccess(id);
                  }
                  else{
                     onError(new Error('not found'));
                  }
            }, 2000);
         }
         

            getRoles(user, onSuccess, onError){
                  setTimeout(()=>{
                     if(user==='who'){
                        onSuccess({name:'who', role: 'know'});
                     }
                     else{
                        onError(new Error('not found'));
                     }
                  },1000);
            }
         }

         const userstorage = new UserStorage();
         const id = prompt('enter your id');
         const password = prompt('enter your pw');
         userstorage.loginUser(id, password, 
            user => {
               userstorage.getRoles(
                     user,
                     userWithRole=>{
                        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
                     },
                     error => {
                        console.log(error);
                     }
         );
            },
            error=>{
               console.log(error);
            }
            );
         ```
         - 코드 가독성이 매우 떨어진다.
         - 유지보수가 어렵다.


## **Promise**

   - ### **정의**

      - 비동기를 간편하게 처리할 수 있도록 도와주는 Object
      - 정상적으로 기능이 수행되면 성공의 메시지와 함께 처리된 결과를, 아닐 시 에러를 전달함
      - 콜백지옥을 해결함


   - ### 특징

      - Promise 객체를 생성하면 자동으로 전달한 콜백함수(executor)가 실행된다. 

      - ### State
      - ### Producer / Consumer

   - ### 예시1

      ```js
      // Producer
      const promise = new Promise((resolve, reject) =>{
         console.log('doing something');

         setTimeout(()=>{
            resolve('whonkow');
            // reject(new Error('no network'));
         },2000);
      });

      //Consumer(then, catch, fianlly를 통해 Producer가 보낸 값을 받아옴), promise를 리턴함

      // 성공적인 케이스를 다룸
      promise.then((value)=>{
         console.log(value);
      })
      // 실패 케이스를 다룸
      .catch(error => {
         console.log(error);
      })
      // 성공/실패 여부에 상관없이 항상
      .finally(()=>
      {
         console.log('finally');
      });
      ```

   - ### 예시2
      ```js
      const promise = new Promise((resolve, reject) =>{
      resolve(1);
      });

      promise
      .then(num => num*2)
      .then(num => num*3)
      .then(num => {
         return new Promise((resolve, reject) =>{
            setTimeout(() => resolve(num-1), 1000);
         });
      })
      .then(num=>console.log(num));
      ```
         

      - then은 값을 전달하거나, **Promise**를 전달할 수 있다.
      - **Promise Channing**이 가능하다.

   - ### All vs Race

      <img src="https://i.postimg.cc/XNDwrQdW/image.png" height="400">

      - **All**

         - **가장 늦게** 끝나는 함수가 끝나면 다음 작업이 시작됨

         - 콜백함수의 파라미터로 **각각 프로미스의 실행결과를 배열**로 담고있다.

      - **Race**

         - **가장 빨리** 끝나는 함수가 끝나면 나머지는 버리고 다음 작업을 실행한다.

         - 콜백함수의 파라미터로 **가장 빨리 끝난 프로미스의 실행결과**를 담고 있다.

## **async & await**

   - ### 필요성

      promise도 남발하면 **콜백지옥과 같은 문제점**이 발생한다.

      이것을 **async, await**을 통하여 해결할 수 있고, Promise를 더 편하게 사용할 수 있다.

   - ### async

      - function 앞에 async를 붙이면 해당 함수는 **항상 Promise를 반환**한다.
      - Promise가 아닌 값을 반환하더라도 Promise형태로 감싸 Promise를 반환하도록 한다.  

         ```js
         async function f(){
            return 'whoknow';
         }
         
         const user = f();
         user.then(console.log);
         ```

   - ### await

      -  async 함수 안에서만 동작하는 키워드로 promise.then보다 더 세련되게 Promise의 리턴 값을 얻도록 해주는 문법으로 **Promise가 처리될 때까지 기다린다.**

      - promise가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않는다.



         ```js
         async function f() {

         let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("완료!"), 1000)
         });

         let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

         alert(result); // "완료!"
         }

         f();
         ```

   - ### Promise는 아예 안쓰나?

      async/await를 사용하면 promise.then/catch가 **거의 필요 없다**.
      
      하지만 가끔 가장 **바깥 스코프에서 비동기 처리가 필요할 때**같이 promise.then/catch를 써야만 하는 경우가 생기기 때문에 async/await가 프라미스를 기반으로 한다는 사실을 알고 있어야한다.

      


   

   

## 참고자료

https://velog.io/@ko1586/Callback%ED%95%A8%EC%88%98%EB%9E%80-%EB%AD%94%EB%8D%B0

https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11

https://thoughtprovo-king.tistory.com/92

https://ko.javascript.info/async-await

https://www.youtube.com/watch?v=TAyLeIj1hMc&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=1

-------------------------------------------