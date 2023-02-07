# 디바운싱과 쓰로틀링

디바운싱과 쓰로틀링 모두 최적화 기능에 사용되는 기법이다.

우선 간단히 설명해보겠다.

- ## 디바운싱

  - 연이어 호출되는 함수들 중 마지막 함수(제일 처음)만 호출하도록 하는 것

    <img src="https://i.postimg.cc/3NQxMDhx/image.png">

  - 주로 ajax 검색에 쓰임

  - ### ajax 예시

    ```html
    <input id="input" />
    ```

    ```js
    document.querySelector("#input").addEventListener("input", function (e) {
      console.log("ajax 요청", e.target.value);
    });
    ```

    <img src="https://i.postimg.cc/5Nk6PyrD/image.png">

    실제 ajax 요청을 보내는것은 복잡하기에 콘솔 로그로 대체하였다.

    `input` 이벤트는 엔터 없이도 결과가 바로바로 출력되는 모습을 볼 수 있다.

    하지만 유료 API를 사용했을 때 이런 쿼리 하나하나가 다 돈이되므로 엄청난 **낭비**를 초래한다.

    따라서 이럴 때 **디바운싱**을 사용하면 문제를 해결할 수 있다.

    ```js
    let timer;
    document.querySelector("#input").addEventListener("input", function (e) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        console.log("여기에 ajax 요청", e.target.value);
      }, 200);
    });
    ```

    `timer` 변수를 설정하고, 입력 시마다 200ms 이후에 요청을 보내는 타이머를 설정하였다.

    만약 200ms 이전에 다시 입력을 하면 타이머가 취소되고, 다시 타이머를 설정한다.

    이렇게 하면 사용자가 원하는 검색어를 입력하고 입력이 다 끝난 후에 요청을 보낼 수 있다.

    <img src="https://i.postimg.cc/1XhLRG4b/image.png">

- ## 쓰로틀링

  - 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것

  - 주로 스크롤 이벤트에 쓰임

    <img src="https://i.postimg.cc/Y2T19Xrv/image.png">

  - ### 스크롤 예시

    ```js
    let timer;
    window.addEventListener("scroll", function (e) {
      console.log(window.scrollY);
    });
    ```

    <img src="https://i.postimg.cc/9XyncqVH/image.png" height="500">

    스크롤을 올리거나 내릴 때 scroll 이벤트가 매우 많이 발생하는데 이때 뭔가 복잡한 작업을 하도록 설정했다면 **과부하**가 걸린다.

    따라서 이럴 때 **쓰로틀링**을 사용하면 문제를 해결할 수 있다.

    ```js
    let timer;
    window.addEventListener("scroll", function (e) {
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          console.log(window.scrollY);
        }, 200);
      }
    });
    ```

    타이머가 설정되어 있으면 아무 동작도 하지 않고, 타이머가 없다면 타이머를 설정한다.

    타이머는 일정 시간 후에 스스로를 해제하고, 콜백함수를 실행한다.

    이제 최소 200ms마다 함수를 실행한다. 이것을 **ajax** 검색에 적용한다면 중간 중간 검색 결과를 보여줄 수 있다.

    또한 scroll 이벤트를 제어하는데에도 **debouncing**도 많이 쓰인다.

    이렇게 하면 스크롤 이벤트 호출 횟수를 대폭 감소시킬 수 있다.

    <img src="https://i.postimg.cc/Z5m9X2Hh/image.png">

- ## 차이점

  디바운싱은 이벤트가 연속적으로 계속 발생하더라도 모두 무시하고 설정한 특정 시간동안 이벤트가 발생하지 않았을 때 맨 마지막 이벤트를 딱 한번 발생시키지만 쓰로틀링은 설정한 특정 시간 주기로 계속 실행이 된다.

## 참고자료

https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa

https://www.youtube.com/watch?v=ezxyEwCWuTE
