# call & apply & bind

## this

- **메소드는 .앞에 있는 것이 this이다!**

## call

- this를 특정값으로 지정할 수 있다.

- call은 일반적인 함수와 마찬가지로 매개변수를 직접 받는다.

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

- 따라서 함수 배열요소를 함수 매개변수로 받을 때 유용하다.


    ```js
    const nums = [3, 10, 1, 6, 4];
    // const minNum = Math.min(...nums);
    // const maxNum = Math.max(...nums);
    const minNum = Math.min.apply(null, nums);


    const maxNum = Math.max.apply(null, nums);
    // = Math.max.apply(null, [3, 10, 1, 6, 4]);

    const maxNum2 = Math.max.call(null, [...nums]);
    // = Math.max.apply(null, 3, 10, 1, 6, 4);

    
- 첫번째 인수의 null은 this로 사용할 값
- 두번째 인수를 배열로 전달하면 그 요소들을 차례대로 사용한다.


## bind

- 함수의 this 값을 영구히 바꾼다.

    ```js

    const mike={
        name: 'Mike',
    };

    function update(birthYear, occupation){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    const updateMikte = update.bind(mike);

    updateMike(1980, 'police');
    ```

  - `update`함수에서 항상 this는 마이크를 가리킴




## 참고자료

https://www.youtube.com/watch?v=KfuyXQLFNW4