# 기초문법

## Object

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

      - initialValue Optional

         callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 **배열의 첫 번째 요소**를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

      - prev : return의 값(curr.score가 누적되서 더해짐)

   - ### **sort()**

      - **정렬**

         ```js
         const num=[4,2,3,1,5];
         console.log(num.sort((a,b) => a-b));
         ```

------------------------
      

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

----------------------