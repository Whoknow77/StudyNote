# 객체 복사

## 문자열, 정수, boolean 타입

- 다른 변수에 대입할 때(복사) 메모리의 주소를 복사하는 것이 아닌 **값을 복사**한다.
- **깊은복사**에 해당한다.

    ```js
    let a = 'water';
    let b = a;
    b='water2';
    console.log(a); // water
    console.log(b); // water2
    ```

## 객체

- 다른 변수에 대입할 때(복사) **메모리의 주소**를 복사한다.(참조)
- **얕은복사**에 해당한다.
    ```js
    let a = [1,2,3];
    let b = a;
    b[0]=4;
    console.log(a); // [4, 2, 3]
    console.log(b); // [4 ,2, 3]
    ```


## **깊은복사**

### 1) 전개구문

```js
const origin = {
    a: 1,
    b: { c: 2 }
};

const copy = {...origin}
copy.b.c = 3

console.log(origin === copy) // false
console.log(origin.b.c === copy.b.c) // true
```

- obj1와 obj2가 다른 주소값을 갖게 되어 **깊은 복사**가 실현되었지만 딱 **1depth까지만** 가능하다. 2차원 이상의 객체에서는 소용 없다.
- **객체가 다르다고 깊은 복사가 이루어진 것은 아니다**.


### 2) Object.assign()

```js
const origin = {
    a: 1,
    b: { c: 2 }
};

const copy = Object.assign({}, origin);
copy.b.c = 3

console.log(origin === copy) // false
console.log(origin.b.c === copy.b.c) // true
```

- 첫번째 인자인 빈 객체 {}와 두번째 인자인 obj1객체를 합쳐서 obj2에 할당하였다.

- 복사한 객체 자체는 **깊은 복사**가 이루어졌지만, 역시나 **1depth**까지만 이루어진다.

### 3) JSON.parse & JSON.stringify

```js
const origin = {
  a: 1,
  b: {c: 2,}
};

const copy = JSON.parse(JSON.stringify(origin));

copy.b.c = 3;

console.log(origin); // { a: 1, b: { c: 2 } }
console.log(origin.b.c === copy.b.c); // false
```

- `JSON.stringify()`는 객체를 문자열로 변환하는데 이 과정에서 원본 객체와의 참조가 모두 끊어진다.

- 다시 `JSON.parse()`를 이용해 원래 객체(자바스크립트 객체)로 만들어준다.

- 객체 => 문자열 => 객체 순서이다.

```js
const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function() {
    return this.a;
  }
};

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj.func); // undefined
```


사용하기 가장 쉽지만, 단점은 다른 방식에 비해 느리다는 점과 **객체로 함수가 들어오면 undefined**로 처리된다는 점이다.

따라서 성능이슈가 크기 때문에 실무에서는 피한다고 한다.

<br/>

## 4) Lodash 라이브러리

```
npm i lodash
```

```js
import _ from 'lodash'
```

먼저 `lodash`를 설치하고 import해야 한다.

```js
import _ from 'lodash'

const origin = {
    a: 1,
    b: { c: 2 }
};

const copy = _.cloneDeep(origin);
copy.b.c = 3

console.log(origin === copy) // false
console.log(origin.b.c === copy.b.c) // false
```


완전한 깊은 복사가 가능하다. 하지만 이것도 엄청 깊게 들어간다면 100% 완전한 깊은 복사는 아니라고 한다.

이 외에도 재귀 함수를 통하여 깊은 복사를 구현하는 방법도 있다.





## 얕은복사
## 참고자료

https://hanamon.kr/javascript-shallow-copy-deep-copy/

https://velog.io/@y_jem/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC




