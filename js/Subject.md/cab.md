# call & apply & bind

## call

- this를 특정값으로 지정할 수 있다.

    ```js
    const a={
        name:"whoknow",
    };

    function showThisTime(){
        console.log(this.name);
    }

    showThisName.call(mike);
    ```

    `call()`의 인자로 객체 mike를 넘겨 this가 mike를 가리키도록 할 수 있다.



## apply

- 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.

- call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 **배열**로 받는다.

## bind

- 함수의 this 값을 영구히 바꾼다.




## 참고자료

https://www.youtube.com/watch?v=KfuyXQLFNW4