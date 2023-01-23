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

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

subj.notifyAll();
```

<br/>

<img src="https://i.postimg.cc/vTT0YL75/image.png">

<br/>

```js
subj.unsubscribe(c);
subj.notifyAll();
```

<br/>
<img src="https://i.postimg.cc/rmNpV5yy/image.png">

<br/>


## 참고자료

https://jiseok-zip.tistory.com/entry/iOS%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4Observer-Pattern#toc-%EB%8A%90%EC%8A%A8%ED%95%9C%20%EA%B2%B0%ED%95%A9(Loose%20Coupling)%20%E2%9D%93

https://www.youtube.com/watch?v=1UxRkggQwbs&list=PL3xNAKVIm80JldJ6IZBx5eQxck5JA6VuV&index=3

