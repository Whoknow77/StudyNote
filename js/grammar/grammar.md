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

         - **slice vs splice**

            - slice : **원본 배열 수정**하지 않고 새로운 배열 생성
            - splice : **원본 배열 자체를 수정**

               ```js
               let s=[1,2,3,4,5];
               s.splice(0,1);
               console.log(s); // [2,3,4,5]


               let s2=[1,2,3,4,5];
               s2.slice(0,2);
               console.log(s2); // [1,2,3,4,5]

               let s3=[1,2,3,4,5];
               s4=s.slice(0,1);
               s5=s.slice(0,1);
               console.log(s4); // [1]
               console.log(s5); // [1]
            
            - =을 통해 할당받은 값은 동일하다.

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

       - 만족하는 모든 요소를 배열로 반환한다.

   - ### **map()**

      ```js
      const result = students.map((student) => student.score*2);
      console.log(result);
      ```

      - 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다.

   - ### **some() & every()**

      ```js
      const result = students.some((stduent) => stduent.score<50);
      console.log(result);

      const result = students.every((stduent) => stduent.score>0);
      console.log(result);
      ```

      - **some** : 조건식을 만족시키는 아이템이 **하나라도** 있으면 True 반환, find와 동일한 로직
      - **every** : 조건식을 **모두** 만족시켜야 True 반환

   - ### **reduce()**

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

         배열 자체가 변경되니 주의 해야한다.

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

## String(문자열) 메소드

- ### charAt

   ```js
   str.charAt(index);
   ```

   index에 해당하는 위치의 문자 반환 한다.

- ### indexOf

   ```js
   str.indexOf('o');
   str.indexOf('or');
   ```

   인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 **처음 발견된 곳의 index를 반환**한다.

   발견하지 못한 경우 -1을 반환 한다.

- ### lastIndexOf

   ```js
   str.lastIndexOf('whoknow'); 
   str.lastIndexOf()
   str.lastIndexOf('l', 5);
   ```

   인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 **마지막으로 발견된 곳의 index 반환** 한다.

   2번째 인수(fromIndex)가 전달되면** 검색 시작 위치를 fromIndex으로 이동**하여 **역방향으로 검색**을 시작한다.

   이때 검색 범위는 0 ~ fromIndex이며 반환값은 indexOf 메소드와 동일하게 발견된 곳의 index이다.

- ### replace

   ```js
   str.replace(searchValue, replaceValue);
   ```

   - searchValue : 문자 or 정규표현식
   - replaceValue : 문자 or 콜백함수

   **원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열 반환**한다.

   검색된 문자열이 여럿 존재할 경우 **첫번째로 검색된 문자열**만 대체된다.

   - 정규식을 이용한 교체패턴

      ```js
      .replace(' ','') // 첫번째 공백 제거
 
      .replace(/\-/g,'') // 특정문자 제거1 (-)
      
      .replace(/,/g,'') // 특정문자 제거2(,)
      
      .replace(/^\s+/,'') // 앞의 공백 제거
      
      .replace(/\s+$/,'') // 뒤의 공백 제거
      
      .replace(/^\s+|\s+$/g,'') // 앞뒤 공백 제거
      
      .replace(/\s/g,'') // 문자열 내의 모든 공백 제거
      
      .replace(/\n/g,'') // n개행 제거
      
      .replace(/\r/g,'') // 엔터 제거
      ```

- ### split

   ```js
   // 공백으로 구분
   str.split(' ');
   
   // 문자를 모두 분리
   str.split('');
   
   // 공백을 기준으로 분리
   str.split('\/s/');

   // 문자 전체를 단일 요소로 하는 배열 반환
   str.split(());

   // 공백을 기준으로 최대 3개까지만 분리
   str.split(' ', 3);

   // 'o'를 기준으로 분리
   str.split('o'); 
   ```

   인수로 전달한 **구분자**를 통하여 문자를 분리해 **배열로 반환**한다.

   원본 문자열은 변경되지 않는다.

- ### substring

   ```js
   str.substring(start,end);
   ```

   start와 end사이의 문자열을 반환한다.

   start와 end를 바꿔도 동작한다.

- ### slice

   ```js
   // 뒤에서 5자리 잘라내 반환
   str.slice(-5);
   str.slice(1,4);
   ```

   start부터 end-1까지 반환
   
   substring()과 동일하지만 
   기존 substring에서는 음수의 인수를 0으로 취급하였지만, **음수의 인수를 전달**할 수 있다.

- ### substr

   ```js
   str.substr(2,4);
   str.substr(-4,2);
   ```

   n부터 시작해서 m개를 가져온다. 

- ### toLowerCase(), toUpperCase()

   ```js
   str.toLowerCase();
   str.toUpperCase();
   ```

   소/대 문자로 변경한다.

- ### trim

   ```js
   str.trim();

   // 앞 쪽만 제거
   str.trimStart();

   // 뒤 쪽만 제거
   str.trimEnd();
   ```

   대상 문자열 양쪽 끝에 있는 **공백 문자를 제거**한 문자열을 반환한다.

- ### repeat

   ```js
   // 공백 반환
   str.repeat(0);

   // 'strstr'
   str.repeat(2);
   ```

   인수로 전달한 숫자만큼 반복해 연결한 새로운 문자열을 반환한다.

   count가 0이면 빈 문자열을 반환하고 음수이면 RangeError를 발생시킨다.

- ### includes

   ```js
   str.includes('hello'); // true
   str.includes('hello', 0); // true
   str.includes('hello', 2); // false
   ```

   인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 Boolean 값으로 반환한다.

   두번째 인수는 옵션으로 **검색할 위치**를 나타내는 정수이다.
   
<br>
<br>


   
   

      






## 참고자료

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-String-%EB%A9%94%EC%86%8C%EB%93%9C-%E2%9C%8F%EF%B8%8F-%EC%A0%95%EB%A6%AC

https://www.youtube.com/watch?v=pJzO6O-aWew&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4&index=7