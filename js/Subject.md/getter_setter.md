# **Getter & Setter**

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

   - ## **Getter 메소드**

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

   - ## **Setter 메소드**

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


   - ## 활용예시 1

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


   ## 참고자료

   https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-getter-setter-%EB%9E%80

   https://axce.tistory.com/59

   ------------------------------------------------------