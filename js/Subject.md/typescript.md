# 타입스크립트

## 타입스크립트란?

자바스크립트의 확장 버전으로 자바스크립트에 타입을 부여한 것

자바스크립트와 달리 브라우저에서 실행하려면 변환 과정, 즉 컴파일을 거쳐야 한다.

<details>
<summary>타입스크립트를 쓰는 이유</summary>
<div markdown="1">
1. 에러의 사전 방지
    
```jsx
// .js
function sum(a,b){
    return a+b;
}

sum(10, '20'); // 1020

````

```tsx
// .ts
function sum(a: number, b: number){
    return a+b;
}

sum(10, '20'); // Error: '10'은 number에 할당될 수 없습니다.
````

에러를 사전에 방지(빨간 밑줄)하여 코드의 결과를 확인하지 않아도 된다.

2. 코드 가이드 및 자동 완성

   개발 툴의 기능을 최대한 활용할 수 있다. vscode는 툴의 내부가 타입스크립트로 작성되어 있어 타입스크립트 개발에 최적화 되어 있다.

   ```jsx
   // math.js
   function sum(a, b) {
     return a + b;
   }
   var total = sum(10, 20);
   total.toLocaleString();
   ```

   `total` 이라는 값이 타입이 정해져 있지 않기 때문에 개발자 스스로 `sum()` 함수의 결과를 예상하고 타입이 `number`라고 가정한 상태에서 `number`의 API인 `toLocaleString()`를 입력하는 경우이다.

   만약 오타를 입력하여도 브라우저를 실행했을 때만 오류를 확인할 수 있으므로 번거롭다.

   ```jsx
   function sum(a: number, b: number): number {
     return a + b;
   }
   var total = sum(10, 20);
   total.toLocaleString();
   ```

   typescript로 작성한 경우 `total.` 을 입력한 순간 API를 미리보기로 띄워 자동완성이 가능하여 매우 편리하다.

</div>
</details>

<details>
<summary>기초</summary>
<div markdown="1">

<details>
<summary>기본 타입 정리</summary>
<div markdown="1">

- 변수 만들 때 타입 정하기
  - 타입스크립트는 변수만들 때 변수의 타입 지정 가능
  - ex) 변수명:타입
    ```jsx
    let 이름: string = "choi";
    let 나이: number = 26;
    let 결혼여부: boolean = false;
    let 회원들: string[] = ["choi", "park"];
    let 정보: { age: number } = { age: 20 };
    ```
- 모든 변수에 타입지정할 필요 x
  - 변수 생성 시 타입스크립트가 타입을 자동으로 부여함
  </div>
  </details>

<details>
<summary>타입을 미리 정하기 애매할 때(union type, any, unknown)</summary>
<div markdown="1">

- union
  - 변수에 특정 타입 또는 타입이 들어올 수 있다고 정의를 하고싶을 때 **|** 사용
    ```jsx
    let 이름: string | number = "choi";
    let 나이: string | number = 100;
    ```
    - 할당하는 순간 타입은 string 또는 number 중 하나로 변함
- any
  - 아무 자료나 집어넣을 수 있는 타입
    ```jsx
    let 이름: any = "kim";
    이름 = 123;
    이름 = undefined;
    이름 = [];
    ```
    - 타입을 바꿔도 에러가 나지 않음
    - 타입관련 버그가 생길 경우 추적하기 어려우므로 비상시 쓰는 변수 타입체크 해제기능 용도로 쓰임
- unknown

  - any와 똑같이 모든 타입을 집어넣을 수 있음
  - 아직 어떤 타입이 들어올 지 모르거나, 다양한 타입을 집어넣어야 할 경우 사용

    ```jsx
    let 이름: unknown = "kim";
    이름 = 123;
    이름 = undefined;
    이름 = [];
    ```

    ```jsx
    let 이름: unknown;

    let 변수1: string = 이름;
    let 변수2: boolean = 이름;
    let 변수3: number = 이름;
    ```

    - unknown 타입을 다른 곳에 집어넣으려고 하면 any와 다르게 에러가 발생함

    ```jsx
    let 나이: string | number;
    나이 + 1;
    ```

    - 참고로 타입스크립트는 확신한걸 좋아하기 때문에 변수의 타입이 확실하지 않아 위의 코드는 에러가 난다. unknown 타입도 마찬가지.. 따라서 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion을 사용해야 한다.

</div>
</details>

<details>
<summary>함수에 타입 지정하는 법 & void 타입</summary>
<div markdown="1">

- 함수에 타입지정하려면 파라미터와 return 두 곳에 가능
  ```jsx
  function 내함수(x: number): number {
    return x * 2;
  }
  ```
  - 리턴할 자료가 없는 경우
    ```jsx
    function 내함수(x: number): void {
      return x * 2; // 여기서 에러남
    }
    ```
    - return 방지장치를 주고 싶을 때 void 타입을 활용하면 됨
  - 파라미터가 옵션일 겨우
    - 미리 이 파라미터는 옵션이라고 정의를 해줘야 함수 실행 시 파라미터를 넣지 않아도 에러가 나지 않음 =⇒ **? 사용**
      ```jsx
      function f(x?: number) {}
      f(); // 가능
      f(2); // 가능
      ```
    - x : number | undefined 와 같은 의미 : 파라미터가 정의가 안되면 자동으로 undefined가 되니 그걸 반영한 것

</div>
</details>

<details>
<summary>타입 확정하기 Narrowing & Assertion</summary>
<div markdown="1">

- Type Narrowing
  - if문 등으로 타입을 하나로 정해주는 것
    ```jsx
    function f(x: number | string) {
      if (typeof x === "number") {
        return x + 1;
      } else if (typeof x === "string") {
        return x + 1;
      } else {
        return 0;
      }
    }
    ```
    - typeof 이외에 in, instanceof 키워드도 사용 가능
- Type Assertion
  - 이 변수의 타입을 특정타입으로 생각해달라는 의미
  - **변수명 as string**
    ```jsx
    function f(x: number | string){
    	return (x as number) + 1
    }
    ```
  - as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는 건 아니므로 `f('123')` 을 입력해도 ‘1231’이 출력 된다.
- as는 간편하지만 정확히 코드짜려면 **narrowing**을 사용하자 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
</div>
</details>

<details>
<summary>타입 정의가 너무 길면 Type Aliases(별칭)</summary>
<div markdown="1">

- 타입 정의가 너무 길면 Type Aliases(별칭)

  - type 타입변수명 = 타입종류

    ```jsx
    type Animal = string | number | undefined;
    let 동물: Animal;
    let 동물2: Animal;
    let 동물3: Animal;
    ```

    ```jsx
    type 사람 = {
      name: string,
      age: number,
    };

    let 사람1: 사람 = { name: "john", age: 20 };
    ```

  - object 속성을 바뀌지 않게 막고 싶을 때 **readonly**로 잠그기

    ```jsx
    type Friend = {
    	readonly name : string,
    }

    const 친구1 :girlfriend = {
    	name : '에이미'
    }

    친구1.name = '니콜' // 에러
    ```

    - 물론 readonly는 컴파일 시 에러를 내는 것일 뿐 변환된 js 파일 에서는 잘 바뀐다.

  - 속성 몇개가 선택사항이라면(있어도 되고 없어도 될때)

    ```jsx
    type Square = {
      color?: string,
      width: number,
    };

    let 네모2: Square = {
      width: 100,
    };
    ```

    - ?는 undefined 라는 타입도 가질 수 있다는 의미를 가진다.

  - type 키워드는 여러개 합칠 수 있음
    ```jsx
    type Name = string;
    type Age = number;
    type NewOne = Name | Age;
    ```
  - type 키워드는 재정의 불가능
    `jsx
type Name = string;
type Name = number; // 에러
`
    </div>
    </details>

<details>
<summary>Literal type</summary>
<div markdown="1">

- string, number 이런 것만 타입이 될 수 있는 게 아니라 일반 글자같은 것도 타입이 될 수 있음(더욱 엄격)

  - Literal Type 만드는 법
    ```jsx
    let choi: "솔로";
    ```
    - choi이라는 변수에는 ‘솔로’라는 글자만 할당 가능
  - as const

        ```jsx
        let 자료 = {
          name: "choi",
        };

        function f(a: "choi") {}
        f(자료.name);
        ```

        - 위 코드는 자료.name의 string타입은 ‘kim’타입이 아니기 때문에 에러가 난다.
        - 해결법

          - object 만들 때 타입을 잘 정의
          - assertion (as ‘kim’)
          - as const

            ```jsx
            let 자료 = {
              name : 'kim'
            } as const;

            function 내함수(a : 'kim') {

            }
            내함수(자료.name)
            ```

            1. 타입을 object의 value로 바꿔줌(타입을 ‘kim’으로)
            2. object안에 있는 모든 속성을 readonly로 바꿔줌(변경하면 에러나게)

            - **object를 잠그고 싶으면 활용해보자**

    </div>
    </details>

<details>
<summary>함수와 methods에 type alias 지정하는 법</summary>
<div markdown="1">

- function 함수이름 :타입 (){} 는 불가능 : function 키워드에는 ()내부랑 오른쪽에만 타입 지정이 가능하기 때문
  - 반드시 **함수표현식**을 사용해야 함
    ```jsx
    type f = (x : number, y : number ) ⇒ number
    let a :f = function(x,y){
    	return x + y
    }
    ```
  - methods 안에 타입 지정하기
    object 자료 안에 함수를 집어넣을 때
    `jsx
let 회원정보 = {
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();
` - arrow function, 일반함수 전부 object안에 맘대로 집어넣을 수 있음
    </div>
    </details>

<details>
<summary>타입스크립트로 HTML 변경과 조작할 때 주의점</summary>
<div markdown="1">

- <h4>제목을 다른 글자로 변경
        
        ```jsx
        const title = document.querySelector('#title');
        title.innerHTML = '마라샹궈'
        ```
        
        원래는 변경되어야 하는데 타입스크립트는 title변수가 null일 가능성을 보고 에러를 출력한다. 따라서 여러 해결책을 사용해서 해결해 보자.
        
        1. narrowing(if)
            
            ```jsx
            const title = document.querySelector('#title');
            if(title !== null){
            	title.innerHTML = '마라샹궈'
            }
            ```
            
        2. **narrowing(instanceof)**
            
            ```jsx
            const title = document.querySelector('#title');
            if(title instanceof HTMLElement){
            	title.innerHTML = '마라샹궈'
            }
            ```
            
        3. assertion
            
            ```jsx
            const title = document.querySelector('#title') as HTMLElement;
            title.innerHTML = '마라샹궈'
            ```
            
        4. ?
            
            ```jsx
            const title = document.querySelector('#title');
            if(title?.innerHTML !== undefined){
            	title.innerHTML = '마라샹궈'
            }
            ```
            
            ? 왼쪽에 있는 object 자료 안에 .innerHTML이 존재하면 써주고 없으면 undefined를 남겨라 라는 뜻
            
        5. strict 설정 false로
  </div>
  </details>

<details>
<summary>class 만들 때 타입지정 가능</summary>
<div markdown="1">

- constructor 타입지정
  - this.를 사용하려면 미리 필드값으로 만들어 줘야 함
  ```jsx
  class Person {
    name;
    age;
    constructor() {
      this.name = "kim";
      this.age = 20;
    }
  }
  ```
  - 필드값이랑 constructor이랑 똑같은 기능을 하지만 new 클래스이름() 사용할 때 파라미터로 뭔가 집어넣으려면 **constructor**로 만들어야 한다.
    ```jsx
    class Person {
      name;
      age;
      constructor(a: number) {
        this.name = a;
        this.age = 20;
      }
    }
    ```
- methods 타입지정 - 이전과 동일함
`jsx
      class Person {
        add(숫자: number): number {
          return 숫자 + 1;
        }
      }
      `
</div>
</details>

<details>
<summary>interface - Object에 타입지정할때 사용</summary>
<div markdown="1">

- type과 유사하지만 extends가능 - Student interface & Teacher interfacer가 필요할 때

  ```jsx
  interface Student {
    name: string;
  }
  interface Teacher extends Student {
    age: number;
  }
  ```

  - Student안에 있던 속성을 Teacher에 넣어줌 - type을 사용하면 extends가 아닌 &을 사용해야 하기 때문에 interface가 더 편리함 - 타입이름 중복 선언 시 - interface

  ```jsx
  interface Animal {
    name: string;
  }
  interface Animal {
    legs: number;
  }
  ```

  - extends와 동일하게 동작하여 Animal타입은 name,legs 속성 모두 가짐 - type

  ```jsx
  type Animal = {
    name: string,
  };
  type Animal = {
    legs: number,
  };
  ```

  - 중복선언을 허용하지 않아 에러남

- 일반적인 상황에선 type 키워드를 활용하고 다른 사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는 것이 좋다.
  </div>
  </details>

    </div>
    </details>

<details>
<summary>심화</summary>
<div markdown="1">

</div>
</details>

## 참고자료

[https://joshua1988.github.io/ts/why-ts.html#왜-타입스크립트를-써야할까요](https://joshua1988.github.io/ts/why-ts.html#%EC%99%9C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C%EC%9A%94)

[https://codingapple.com/](https://codingapple.com/)
