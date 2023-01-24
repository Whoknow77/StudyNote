# ES6 문법

## Const and let

- ### Const

    - **객체**와 함께 사용할 때를 제외하고는 **변경 불가능**한 변수이다.

    - 이 기능은 **선택자**를 대상으로 하는 데 매우 유용하다. 예를 들어 이벤트를 실행하는 단일 단추가 있거나 JavaScript에서 HTML 요소를 선택하려면 `var` 대신 `const`를 사용하는 것이 좋다. `var`는 '호이스팅(hoisting)'이기 때문이다.

        ```js
        const btn = document.querySelector('btn');
        ```
- ### let

    - 변경 가능한 변수

    ```js
    let name = 'a';
    name = 'b';
    console.log(name); // b
    ```

`let`은 `const`와 동일하게 모두 **블럭 범위**이며, **호이스팅**이 되지 않는다.


## Arrow functions(화살표 함수)

전통적인 함수표현(function)의 간편한 대안이다. 하지만, 화살표 함수는 몇 가지 제한점이 있고 모든 상황에 사용할 수는 없다.

```js
// ES5
function myFunc(name){
    return '안녕' + name;
}
```

- 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있다.

    ```js
    function myFunc(name =>{
        return '안녕' + name;
    })
    ```
- 인수가 하나도 없을 땐 괄호를 비워놓으면 된다. 다만, 이 때 괄호는 생략할 수 없다.

    ```js
    const sayHi = () => alert("안녕");
    ```
- 본문이 한 줄이면 중괄호를 생략할 수 있다.

    ```js
    function myFunc( name => return '안녕' + name);
    ```
- return을 생략할 수 있다.

    ```js
    function myFunc(name => '안녕' + name);
    ```
- 화살표 함수를 남용해서는 안되는 경우

우선 화살표 함수에는 'this’가 없다.

그래서 화살표 함수 본문에서 this에 접근하면, 외부에서 값을 가져온다.

1) ### 메소드 정의

    ```js
    const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
    };
    person.sayHi(); // Hi undefined
    ```

    화살표 함수에서의 this는 메소드를 호출한 객체를 가리키지 않고 상위 컨텍스트인 **전역 객체 window**를 가리키므로 화살표 함수로 메소드를 정의하는 것은 바람직 하지 못하다.


2) ### prototype 메소드

    ```js
    const person = { // 모든 객체는 기본적으로 Object객체에 프로토타입 체이닝 되어있다.
    name: 'Lee',
    };

    Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

    person.sayHi(); // Hi undefined
    ```

    화살표 함수로 객체의 메소드를 정의하였을 때와 같은 문제가 발생한다.

3) ### new 생성자 함수

    생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다. 하지만 **화살표 함수는 prototype 프로퍼티를 가지지 않는다.**

        ```js
        const Foo = (name) => {
        this.name = name
        };

        // 화살표 함수는 prototype 프로퍼티가 없다
        console.log(Foo.hasOwnProperty('prototype')); // false

        const foo = new Foo("FFF"); // TypeError: Foo is not a constructor
        ```

    
4) ### addEventListener의 콜백 함수

    addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리키게 된다.

    ```js
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
    });
    ```

    따라서 일반 함수를 사용하여야 한다.

    ```js
    const button = document.getElementById('myButton');

    button.addEventListener('click', function() {
    console.log(this === button); // => true
    this.innerHTML = 'Clicked button';
    });
    ```


5) ### call, apply, bind 함수

    ```js
    window.x = 1;
    const normal = function () { return this.x; };
    const arrow = () => this.x;

    console.log(normal.call({ x: 10 })); // 10
    console.log(arrow.call({ x: 10 }));  // 1
    ```

    화살표 함수를 사용해서 this를 변경할 수 없다.
        
<br/>


## Template Literals(템플릿 리터럴)

 문자열 연결을 위해 `+`을 사용하지 않아도 되고, 백틱(`)을 사용하여 문자열 내에서 변수를 사용할 수도 있다.

```js
// ES5
function myFunc1(name, age) {
    return '안녕' + name + '너의 나이는' + age + '살 이다!'; 
}
```


```js
// ES6
const myFunc = (name, age) => {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`; 
};
```

<br/>


## Default parameters(기본 매개 변수)

매개 변수를 지정 하지 않았을 때 기본 값을 설정해 줄 수 있다.

```js
// ES5
const myFunc = (name, age) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`; 
};

console.log(myFunc1('영희'));
// 출력 => 안녕 영희 너의 나이는 undefined살 이니?
```

```js
// ES6
const myFunc = (name, age = 26) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`; 
};

console.log(myFunc1('영희'));
// 출력 => 안녕 영희 너의 나이는 26살 이니?
```

<br/>

## Array and object destructing(배열 및 객체 비구조화 = 구조분해)

배열 또는 객체의 값을 새 변수에 더 쉽게 할당할 수 있다.

```js
// ES5
const property = {
	FirstName: '최',
	Lastname: '훈오',
	age: 26
};

let FirstName = property.FirstName;
let Lastname = property.Lastname;
let age = property.age;
```

```js
// ES6
const property = {
	FirstName: '최',
	Lastname: '훈오',
	age: 26
};

let {FirstName, Lastname, age } = property;
```

주의할 점은 속성 이름과 동일하지 않은 변수를 할당하면 undefined가 반환되는데 `:`을 통해 변수의 이름을 바꿀 수 있다.

```js
const property = {
	FirstName: '최',
	Lastname: '훈오',
	age: 26
};

let {FirstName, Lastname : lname, age } = property;
console.log(lname); // 훈오
```
<br/>

## Import and export(가져오기 및 내보내기)

```js
// export 
export default function detail(name, age) {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
}
```

```js
// Import
import detail from './detailComponent'; // 경로

console.log(detail('영희', 26));
// 출력 => 안녕 영희, 너의 나이는 26살 이다!
```

둘 이상의 모듈을 가져오려는 경우, 중괄호에 넣기만 하면 된다.

```js
import { function1, function2, function3 } from './detailComponent';
```

<br/>

## Rest parameter and Spread operator(나머지 매개 변수 및 확산 연산자)

객체 혹은 배열들을 펼칠 수 있게 해 준다.

```js
// 펼칠 대상이 객체인 경우
{...obj}

// 펼칠 대상이 배열인 경우
[...arr]
// 혹은
{...arr}
```

전개 구문의 문법 자체는 정말 간단하다. 그저 배열이나 객체 앞에 점 세 개를 붙여주면 된다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const newArray = [...arr1, ...arr2, ...arr3];

console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

전개 연산자를 활용하여 새로운 배열을 만들 수 있다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, 1, 2, 3, ...arr2];

console.log(newArray); // [1, 2, 3, 1, 2, 3, 4, 5, 6];
```

아무 곳에나 추가도 가능하다.

```js
const myArray1 = ['Naver', 'Kakao', 'Carrot'];
const myArray2 = [...myArray1];
console.log(myArray2); // ['Naver', 'Kakao', 'Carrot'];

console.log(myArray1 === myArray2); // false
```

**깊은 복사**가 가능하다.(1차원에서만 유효)

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(arr2);

console.log(arr1); // [1, 2, 3, [4, 5]]
```

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(...arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
````

1차원으로 구현이 가능하다.(1차원에서만 유효)


```js
const arg = [1,2,3,4,5,6,7,8,9,10];
const sum = function(...args) {
	console.log(args);
}
```

많은 수의 인수를 받는 함수에 배열을 전달할 때 전개 연산자를 사용한다.

```js
const strings = 'abcdefg'; 

const strings2 = {...strings}
console.log(strings2) // {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g'}

const strings3 = [...strings]
console.log(strings3) // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```


펼칠 대상이 문자열인 경우 놀랍게도 문자열도 **spread 문법**으로 산개 할 수 있다.

왜냐하면 문자열도 자바스크립트에선 **하나의 객체**로 취급되기 때문이다.

정리하자면 함수 호출 시 사용되면 배열을 목록으로 확장해주는 **전개 연산자**와
함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 **나머지 매개변수**로 사용된다.






















## 참고자료

https://velog.io/@kimhscom/JavaScript-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-ES6-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions

https://ko.javascript.info/arrow-functions-basics

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC

https://inpa.tistory.com/m/entry/JS-%F0%9F%93%9A-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90Spread-%EB%AC%B8%EB%B2%95