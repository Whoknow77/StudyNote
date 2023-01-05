## **Object**

- ### 정의

   ```js
   const obj1={}; // literal
   const obj2=new Object(); // consructor
   ```

   - key : value 형태로 값이 할당된다.
   - 두 가지 방식으로 객체 생성



   ```js
   const whoknow={name:'whoknow', age:26};

   whoknow.hasHand=true; // 추가
   delete whoknow.hasHand; // 삭제
   ```

   - 자바스크립트는 **Runtime시에 동적으로 타입이 결정**되기 때문에 추가, 삭제가 가능함. 



 - ### 접근

   ```js
   console.log(whoknow.name);
   console.log(whoknow['name']);
   ```

   - '.' 또는 key값으로 접근 가능

 - ### Shorthand

   ```js
   function makePerson(name, age){
      return{
      name,
      age,
   };
   }

   <!-- function makePerson(name, age){
      return{
         name:name,
         age:age
      };
   } -->
   ```

   - key와 value가 같다면 축약 가능

 - ### for..in vs for..of

      - **for ..in**

         - **Object**에서 모든 key들을 받아와서 처리할 때 사용한다.


      - **for ..of**

         - Object가 아닌 배열, 리스트 같은 순차적인 **literable한 구조**에서 사용한다.

 - ### Clone

      - **깊은 복사**

         ```js
         const user={name:'whoknow', age:'26'};
         const user2= user;
         ```

         - user가 가리키는 **주소값**을 user2도 가리키게 됨
         - reference 참조기 때문에 어느 한쪽이 수정되면 다른쪽도 모두 수정됨

      -  **얕은 복사**

         ```js
         const user={};
         const user2={name:'whoknow'};
         Object.assign(user, user2);
         ```

         - 맨 왼쪽 인자가 Target이 되고, 오른쪽의 다수의 인자들을 합하여 만든 user를 반환한다.

         - 인자로 여러개의 배열이 들어갈 수도 있다.


## 참고자료

https://www.youtube.com/watch?v=1Lbr29tzAA8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=7

-----------------------------------------------------

   






## **Array**

- ### 반복

   - **for of**

      - for of 구문을 사용하기 위해선 **컬렉션 객체가 [Symbol.iterator] 속성**을 가지고 있어야만 합니다. 그외는 **for in** 구문을 사용하면 됩니다.

      ```js
      let arr=[1,2,3];
      for(let i of arr){
         console.log(i);
      }
      ```

      
   - **for each**

      - for each 반복문은 Array, Map, Set 자료구조 등에서 **배열의 요소들을 반복하여 작업을 수행**할 때 쓰인다.

      - 인자로 callback 함수를 등록할 수 있고, 배열의 각 요소들이 반복될 때 callback 함수가 호출된다.

      - callback 함수에서 배열요소의 인덱스와 값에 접근할수 있다.

      ```js
      let arr = ['A','B','C','D'];

      arr.forEach(function(item,index,arr2){
         console.log(item,index,arr2[index+1]);
      })
      ```
         - **출력결과**
  
         <img src="https://ifh.cc/g/zWCvV7.png">

- ### 추가, 삭제, 결합

   - **뒤에서**

      - **push**

         추가
      - **remove**

         삭제


   - **앞에서** 

      - **unshift**

         앞의 요소를 삭제하면 내부적으로 인덱스의 이동이 일어나므로 느리다. ==> **pop**을 사용하자.

         추가
      - **shift**

         삭제

   - **인덱스로 삭제**

      - **splice**

         ```js
         arr.splice(index, 개수);
         ```

   - **Combine**

      - concat

         ```js
         const newarr = arr.concat(arr2);
         ```

         - arr뒤에 arr2의 원소가 합쳐져서 배열이 반환된다.

- ### 검색

  - **indexof**

      ```js
      arr.indexOf('a');
      ```

      - 반환값이 **index** 형태

      - 배열에 중복된 값이 있다면 **제일 앞**에 있는 값의 인덱스를 반환

  - **includes**

      ```js
      arr.includes('a');
      ```
      - 반환값이 **boolean** 형태

   - **lastIndexOf**

      - 배열에 중복된 값들 중 가장 **마지막 인덱스**를 반환

 - ### **내장함수**


   - ### **join()**


      ```js
      const name =['최', '훈', '오'];
      const result = name.join(',');
      console.log(result);
      ```

      - **Array의 원소들을 String**으로 변환한다.

      - join의 인자로 **구분자**를 넣을 수 있다.

   - ### **split()**

      ```js
      const name ='최, 훈, 오';
      const result =name.split(',');
      console.log(result);
      ```
         
      - **String을 배열로 변환한다.**

      - 인자의 구분자를 통해 배열을 생성한다.

   - ### **slice()**

      ```js
      const num =[1,2,3,4,5];
      const result=num.slice(1,3);
      console.log(result);
      ```
      
      - **배열을 잘라서 새로운 배열을 만든다.**
      
      - 배열의 시작 인덱스 부터 끝 인덱스-1 까지의 원소들로 이루어진 배열을 반환한다.

   - ### **find()**

      다음의 Students 클래스가 있다고 하자.

      ```js
      const students = [
      new Student('A', 29, true, 45),
      new Student('B', 28, false, 80),
      new Student('C', 30, true, 90),
      new Student('D', 40, false, 66),
      new Student('E', 18, true, 88),
      ];

      class Student{
      constructor(name, age, enrolled, score){
         this.name=name;
         this.age=age;
         this.enrolled=enrolled;
         this.score=score;
      }
      }
      ```

      ```js
      const result = students.find( (student) => student.score===90);
      console.log(result);
      ```
      
      - 배열에 들어있는 아이템마다 순차적으로 하나씩 조사하여 콜백함수의 조건식을 만족시키면 find함수가 실행이 중단이 되고, **그 아이템**(여기선 객체)을 반환한다.

   - ### **filter()**

      ```js
      const result= students.filter((student) => students.enrolled);
      ```

       - 콜백함수의 조건식을 만족시키는 아이템들로만 구성된 **배열**을 반환한다.

   - ### **map()**

      ```js
      const result = students.map((student) => student.score*2);
      console.log(result);
      ```

      - 콜백함수의 조건에 맞게 **정보를 뽑거나 변형된 배열**을 반환한다.

   - ### **some() & every()**

      ```js
      const result = students.some((stduent) => stduent.score<50);
      console.log(result);

      const result = students.every((stduent) => stduent.score>0);
      console.log(result);
      ```

      - **some** : 조건식을 만족시키는 아이템이 **하나라도** 있으면 True 반환, find와 동일한 로직
      - **every** : 조건식을 **모두** 만족시켜야 True 반환

   - ### **recude()**

      ```js
      const result = students.reduce((prev, curr)=>{
         return prev + curr.score;
      }, 0);
      console.log(result/students.length);
      ```

      - 위 예제는 학생들의 점수의 평균을 구하는 예제이다.

      - prev : return의 값(curr.score가 누적되서 더해짐)

   - ### **sort()**

      - **정렬**

         ```js
         const num=[4,2,3,1,5];
         console.log(num.sort((a,b) => a-b));
         ```


      

      

      

## **Parameter**

   1. Default Parameter

      ```js
      function show(msg, from){
      if(from===undefined){
         from='Whoknow';
      }
      console.log(`${msg}by ${from}`)
      }
      show('Hi!');
      ```

      - 인자 두개를 받도록 선언된 함수를 호출 시, 인자를 하나를 보낼 때

         두번째 인자값이 **undefined**로 저장된다.
   2. Rest Parameter

      ```js
      function show(msg, from = Whoknow){
      console.log(`${msg}by ${from}`)
      }
      show('Hi!');
      ```

      - 선언시에 인자 = 변수명으로 선언하여 undefined일 때 **기본 from값을 저장**한다.

   
## **arrow function**

   - 함수를 **간결**하게 하기 위함

   ```js
   const f = () => console.log('print');

   <!-- const f = function(){
      console.log('print');
   }  -->
   ```


   - **중괄호**, **함수명** 생략 가능
   
   ```js
   const f = (a,b) => a+b;
   
   <!-- const f = function(a,b){
      return a+b;
   } -->
   ```

   - 함수 내부가 한 줄일 경우, 중괄호없이 **return도 생략** 가능

   ```js
   const f = (a,b) =>{
      // do something more!
      return a+b;
   }
   ```

   - 여러 줄일 경우, **중괄호** 넣어서 사용해야 함!



      


## **Async vs Defer**

### **필요성**

브라우저가 html 파일을 위에서 아래로 한줄씩 차례로 분석하고 이해한 것을 css와 병합해 **DOM** 요소로 변환한다.

이러한 과정을 **파싱** 이라 한다.

파싱 중에 script태그를 만나게 되면 **DOM 생성을 멈추고** 스크립트를 다운받습니다.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
    
</body>
</html>
```
<img src="https://ifh.cc/g/GjgkMG.jpg">


- 문제점
    
    *head태그 안에 script태그*를 넣으면,
    인터넷이 느리고, js파일의 용량이 크다면 웹 사이트를 보는데까지 시간이 매우 오래걸린다.

- 대안
    
    **body태그 안에 script태그**를 넣는다.

    ```js
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        <script src="main.js"></script>
    </body>
    </html>
    ```

    <img src="https://ifh.cc/g/b7X7K5.jpg">

    - 장점

        사용자가 스크립트를 서버에서 받기 전에도 페이지 컨텐트를 볼 수 있다.

    - 문제점

        웹사이트가 자바스크립트에 의존적이라면, 즉 사용자가 의미있는 컨텐츠를 보기 위해서 자바스크립트를 이용해서 서버에 있는 데이터를 받아오거나 DOM요소를 꾸미는 경우에는 **js파일의 다운, 실행 시간이 길어지기 때문에 비효율적이다**.




### **async**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script async src="main.js"></script>
    <title>Document</title>

</head>
<body>
   
</body>
</html>
```
<img src="https://ifh.cc/g/FRdAvz.jpg">

- 파싱 도중에 js파일을 만나면 다운로드 명령만 내린 후 병렬적으로 파싱을 다시 실행한다.
- js파일이 다운로드 완료되면, 파싱을 멈추고 다운로드된 js파일을 실행하고, 나머지 html 파일을 파싱한다.

- 장점

    - **다운로드 받는 시간 절약**

- 단점

    - js파일이 html파싱 전에 실행되기 때문에, js파일에서 querySelector를 통해 DOM요소를 조작하려 하는 시점에 **html에 아직 원하는 요소가 정의되지 않을 수 있다.**

    - 파싱 중에 언제든지 멈출 수 있기 때문에 **사용자가 페이지를 보는데 시간이 좀 걸릴 수 있다.**




### **defer**


```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="main.js"></script>
    <title>Document</title>

</head>
<body>
   
</body>
</html>
```
<img src="https://ifh.cc/g/qJbJan.jpg">


- 장점

    **파싱 동안에 js파일을 다운받아놓고**, 사용자에게 페이지를 먼저 보여준 후, js파일을 실행하기 때문에 async의 단점을 보완한다.

### 또 다른 차이

- **async**

    ```js
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="a.js"></script>
        <script src="b.js"></script>
        <script src="c.js"></script>
    </head>
    ```

    <img src="https://ifh.cc/g/ry5FkB.jpg">

    - js파일의 **실행 순서가 다운받은 순서와 동일**하다.

- **defer**

    ```js
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="a.js"></script>
        <script src="b.js"></script>
        <script src="c.js"></script>
    </head>
    ```

    <img src="https://ifh.cc/g/5qwK5h.jpg">

    - js파일의 다운받은 순서와 상관없이 **선언순서대로 실행**한다.  




## 참고자료

https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2

https://ko.javascript.info/script-async-defer




--------------------------------------------
## **Getter & Setter**

   우선 Getter와 Setter를 이해하기 위해서는 **Property**를 이해해야 한다.

   자바스크립트에서는 크게 두가지 property가 있다.

   1. **데이터 프로퍼티**

      일반적인 대부분의 프로퍼티

   2. **접근자 프로퍼티**

      본질은 함수인데, 값을 획득(get)하고 설정(set)하는 역할을 담당

      하지만 외부에서는 함수가 아닌 데이터 프로퍼티로 보인다.

      접근자 프로퍼티는 **getter와 setter** 함수로 표현된다.

      ```js
      let obj = {
         get age(){
            // getter, obj.age를 실행할 때 실행됨
         },

         set age(value){
            // setter, obj.age = value를 실행할 때 실행됨
         }
      };
      ```

   - ### **Getter 메소드**

      ```js
      let user = {
         name: "Choi",
         surname: "Hunoh",

         get fullName(){
            return `${this.name} ${this.surname}`;
         },
      };

      alert(user.fullName); // Getter 함수 호출
      ```
      - get의 함수의 함수명과 동일한 변수명을 읽을 때 실행된다.

   - ### **Setter 메소드**

      ```js
            let user = {
         name: "Choi",
         surname: "Hunoh",

         get fullName(){
            return `${this.name} ${this.surname}`;
         },

         set fullName(value){
            [this.name, this.surname] = value.split(" ");
         }
      };

      // Setter함수 호출(set fullName)
      user.fullName = "Who Know";

      alert(user.fullName); // Getter호출, Alice Special
      alert(user.name); // Alice
      alert(user.surname); // Special
      ```

      - set 함수의 함수명과 동일한 변수명에 value값이 부여되면 실행된다.

      <br>

      **getter와 setter를 구현하면 객체엔 fullName이라는 읽고 쓸 수 있지만 실제로는 존재하지 않는 가상의 프로퍼티가 생긴다.**


   - ### 활용예시 1

      ```js
      class User{
         constructor(name, grade, score){
            this.name=name;
            this.grade=grade;
            this.score=score;
         }

         get score(){
            // getter, User.score를 실행할 때 실행되는 코드
            this._score = this._score + 1;
            return this._score;
         }

         set score(value){
            // setter, User.score = value 를 실행할 때 실행되는 코드
            if(value<0){
               throw Error('~');
            }
            this._score=value;
         }
      }

      const user = new User('Whoknow', 'A', 95);
      console.log(user.score);
      ```

      - 변수명을 _score로 설정한 이유

         ```js
                  set score(value){
            // setter, User.score = value 를 실행할 때 실행되는 코드
            if(value<0){
               throw Error('~');
            }
            this._score=value;
         }
         ```

         만약 this_score = value; 라면 **Setter함수가 무한루프를 돌게되기 때문**이다!!

         내가 이해한 바로는 내부적으로 _age 라는 전역변수를 하나 더 둬서 관리하는 것이라고 이해했다.



   ### 참고자료

   https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-getter-setter-%EB%9E%80

   https://axce.tistory.com/59

   ------------------------------------------------------

   ## JSON

   - ### 정의
   
      <img src="https://ifh.cc/g/sc2t6a.jpg">

      - 서버와 클라이언트 통신에 필요한 API
      - JSON은 파싱 또는 직렬화 없이도 JavaScript 프로그램에서 사용할 수 있습니다. JSON은 JavaScript 객체 리터럴, 배열, 스칼라 데이터를 표현하는 텍스트 기반의 방식이다.

      - JSON은 상대적으로 쉽게 읽고 작성할 수 있고, 소프트웨어에서 파싱 및 생성하기도 쉽습니다. 종종 구조화된 데이터를 직렬화해 이를 네트워크에서 교환할 때(보통 서버와 웹 애플리케이션 간) 사용된다.

      - 특정 언어에 종속되지 않으며, 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 핸들링 할 수 있는 라이브러리를 제공한다.

   - ### 방식

      - Serialize

         - **Object -> JSON**로 변환시켜 key:value 형태로 클라이언트와 서버간의 데이터를 전송한다.

         - **Stringify()**

            - **Object를 JSON으로 변환시켜 주는 함수**
            ```js
            let json = JSON.stringify(true);
            console.log(json);

            json = JSON.stringify(['apple', 'banana']);
            console.log(json);
            ```
            - boolean, 배열등의 primitive 타입등을 JSON으로 변환 시킨다.

            ```js
               const rabbit={
               name:'tori',
               color:'white',
               birthDate: new Date(),
               jump: () =>{
                  console.log(`${name} can jump!`);
               }
            }
            json = JSON.stringify(rabbit);
            console.log(json);
            ```

            - **Object 타입을 JSON으로 변환 시킨다.**
            - **함수, 사용자 정의 data**는 Object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않는다.
            - attribute값(콜백함수 등등)을 통해 원하는 속성만으로 이루어진 JSON 반환 가능

               ```js
               json = JSON.stringify(rabbit, ["name"]);

               json = JSON.stringify(rabbit, (key, value) => {
                  console.log(`key:${key}, value:${value});
                  return value;
               })
               ```
    
      -  Deserialize

            - **JSON -> Object**로 변환한다.

         - **parse(json)**

            - **JSON을 Object로 변환시켜 주는 함수**

            ```js
            json=JSON.stringify(rabbit);
            const obj=JSON.parse(json);
            console.log(obj);
            ```

## 참고자료

https://nesoy.github.io/articles/2017-02/JSON

https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10

--------------------------------------------------

## **비동기 처리**

   ### 동기 처리

   - 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름

   - 자바스크립트는 기본적으로 Hosting이 된 이후부터 코드 작성 순서에 맞춰서 순차적으로 실행되는 **synchronous**한 언어이다.

      - **Hosting**

         - var, function 선언들이 코드의 제일 위로 올라가는 것

   ### 비동기 처리
   - 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
   - 동시 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있음

   ### **콜백 함수**

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

https://velog.io/@ko1586/Callback%ED%95%A8%EC%88%98%EB%9E%80-%EB%AD%94%EB%8D%B0

https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11

https://thoughtprovo-king.tistory.com/92

------------------------------

### **Promise**

### **async & await**



