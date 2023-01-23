# 디자인 패턴

## 디자인 패턴이란?

- 일반적으로 발생하는 문제에 대한 일반적이고 재사용 가능한 솔루션

## 1) Singleton Pattern

### 싱글톤이란?

- 객체의 인스턴스가 오직 1개만 생성되는 패턴
-  어떤 클래스의 **객체가 해당 프로세스 내에서 하나만 존재해야 할때** 사용된다.
    -  앱 사용시에 다크모드 세팅을 하면은 다른 페이지로 이동하더라도 그대로 다크모드가 유지되어야 함 => 어떤 페이지든 이 세팅을 관리하는 객체는 반드시 같은 것을 사용해야 함

### 장점
-  최초 한번의 new 연산자를 통해 고정된 메모리 사용으로 인한 **메모리 측면**에서의 이점이 있다.
-  싱글톤 인스턴스는 전역적으로 사용되므로 **클래스 들간의 공유가 쉽다**.

### 단점

- 싱글톤 인스턴스가 너무 많은 일을 하거나 많은 데이터를 공유시킬 경우 다른 클래스의 인스턴스들 간에 결합도가 높아져 "개방-폐쇄 원칙" 을 위배 ==> **유지보수 어려워짐**


### 예시

```js
class Singleton{
    constructor(){
    if(Singletone.instance){
        return cosnole.warn('already instantiated');
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = "test";
}
static getInstance(){
    if(!this.instance){
        this.instance = new Singleton();
    }
    return this.instance;
}
}
```

구조는 다음과 같다.

<img src="https://i.postimg.cc/gkcx7YbZ/image.png">

1. 하나의 객체 인스턴스만 존재

```js
const s1 = new Singleton();
console.log(s1); // 생성
const s2 = new Singleton();
console.log(s2); // already ~~
```

2. `Static` 함수로 객체 접근

```js
const s1 = Singleton.getInstance();
console.log(s1);
const s2 = Singleton.getInstance();
console.log(s2);
console.log(s1===s2); // true
```

위의 예시로 1,2 번을 모두 증명할 수 있다.

싱긑톤 패턴은 코드 중복 방지, 하나의 인스턴스에서 리소스 관리 등의 이점이 있지만 멀티쓰레드 환경에서 여러 문제점이 존재하므로 유연성이 많이 떨어지는 패턴이라고 할 수 있다.
    
## 2) Factory Pattern

### Factory Pattern이란?

- 클래스의 인스턴스를 만드는 일을 **서브클래스**에게 맡기는 것.
  (Factory Pattern 중에서 Factory Method Pattern에 속한다.)


### 장점

- **수정에 닫혀있고 확장에는 열려**있는 OCP 원칙을 지킬 수 있다는 점
-  즉, 확장할 때 기존 코드의 변경이 없어도 된다는 점, 기존 코드의 변경 없이 확장이 가능하다는 점이다.


### 예시

```js
class Shoe{
    constructor(attrs){
        this._attrs = attrs || {};
    }

    getName(){
        return this._attrs?.name;
    }

    getSize() {
        return this._attrs?.size;
    }
    
    getBrand(){
        return this.constructor.name;
    }
}

class Nike extends Shoe {}
class Puma extends Shoe {}
class Adidas extends Shoe {}

const data = [
    {type: "Nike", attrs: { name: "SB", size: 300}},
    {type: "Nike", attrs: { name: "Airforce", size: 240}},
    {type: "Puma", attrs: { name: "Jada", size: 270}},
    {type: "Nike", attrs: { name: "Cortez", size: 265}},
    {type: "Adidas", attrs: { name: "Super Star", size: 290}},
];

class ShoeFactory {
    typeMap = {
        nike: Nike,
        puma: Puma,
        adidas: Adidas,
    };

    create(props){
        try{
            const Brand = this.typeMap[props?.type?.toLowerCase()];
            return new Brand(props.attrs);
        }
        catch(e){
            console.error("error creating new shoes", e);
        }
    }
}
```

구조는 다음과 같다.

<img src="https://i.postimg.cc/GtMWMPv9/image.png">


```js
const factory = new ShoeFactory();
const nike1 = factory.create({
    type: "Nike",
    attrs: {name: "Cortez", size: 265},
});
console.log(nike1);
```
<br/>
<img src="https://i.postimg.cc/8CFD3zHt/image.png">

<br/>

`ShoeFactory` 클래스에서 어떤 `type`의 클래스를 생성할지 결정한 후에 `create` 함수를 통해 객체를 생성한다.

```js
const items = data.map(item => factory.create(item));
console.log(items);
```

<br/>

<img src="https://i.postimg.cc/DyLPFrCX/image.png">

<br/>

`map` 함수를 통해 한번에 순차적으로 간단하게 객체 생성이 가능하다.


## 3) Observer Pattern

### Observer Pattern이란?

- 한 Object의 상태가 바뀌면 그 객체에 의존(구독) 하는 다른 객체들한테 연락이 가고 **자동으로 내용이 갱신**되는 방식으로 **1:N(1대다) 관계**를 정의한다.
- Polling vs Observer
    - **Polling**
         <img src="https://i.postimg.cc/Ghp6Sbv4/image.png">

        A, B, C가 신간 출시 확인을 위해 1시간 마다 책방에 전화를 하는 주제 객체, 구독 객체 모두에게 비효율적인 로직이다.
    - **Observer**

        <img src="https://i.postimg.cc/ZnLB9rw5/image.png">

        A, B, C가 최초 한번씩만 책방에 명부를 작성 후, 신간이 출시되면 문자를 통해 알림을 보내는 효율적인 로직이다.
    

### 장점


### 단점

- Observer에게 알림이 가는 순서가 보장이 되지 않는다.

### 예시

```js

// 주제 객체
class Subject{
    constructor(){
        this.observers=[]; // 구독자들
    }
    getObserverList(){
        return this.observers;
    }
    subscribe(observer){ // 구독
        this.observers.push(observer); 
    }
    unsubscribe(observer){ // 구독 해제
        this.observers = this.observers.filter((obs) => obs !== obersever);
    }
    notifyAll(){ // 알림
        this.observers.forEach((subscriber) => {
            try{
                subscriber.update(this.constructor.name);
                // this.constructor : 생성자 함수 그 자체
                // this.contsructor.name : 생성자 함수의 이름 : 클래스의 이름
            }
            catch(err){
                console.err("error", err);
            }
        });
    }
}

class Observer{
    constructor(name){
        this.name = name;
    }
    update(subj){
        console.log(`${this.name}: notified from ${subj} class!`);
    }
}
```

구조는 다음과 같다.

<img src="https://i.postimg.cc/vBs5cHGX/image.png" width="500" height="250">

```js
const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a); // 구독
subj.subscribe(b);
subj.subscribe(c);

subj.notifyAll(); // 알림
```

<br/>

<img src="https://i.postimg.cc/vTT0YL75/image.png">

<br/>

```js
subj.unsubscribe(c); // c 구독 취소
subj.notifyAll(); // 알림
```

<br/>
<img src="https://i.postimg.cc/rmNpV5yy/image.png">

<br/>


## 참고자료

https://www.youtube.com/watch?v=1UxRkggQwbs&list=PL3xNAKVIm80JldJ6IZBx5eQxck5JA6VuV&index=3

https://jiseok-zip.tistory.com/entry/iOS%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4Observer-Pattern#toc-%EB%8A%90%EC%8A%A8%ED%95%9C%20%EA%B2%B0%ED%95%A9(Loose%20Coupling)%20%E2%9D%93


https://www.youtube.com/watch?v=M4q3sY81gR8&list=PL3xNAKVIm80JldJ6IZBx5eQxck5JA6VuV