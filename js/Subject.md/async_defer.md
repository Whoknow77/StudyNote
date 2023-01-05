# **Async vs Defer**

## **필요성**

브라우저가 html 파일을 위에서 아래로 한줄씩 차례로 분석하고 이해한 것을 css와 병합해 **DOM** 요소로 변환한다.

이러한 과정을 **파싱** 이라 한다.

파싱 중에 script태그를 만나게 되면 **DOM 생성을 멈추고** 스크립트를 다운받습니다.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
    
</body>
</html>
```
<img src="https://ifh.cc/g/GjgkMG.jpg">


- 문제점
    
    *head태그 안에 script태그*를 넣으면,
    인터넷이 느리고, js파일의 용량이 크다면 웹 사이트를 보는데까지 시간이 매우 오래걸린다.

- 대안
    
    **body태그 안에 script태그**를 넣는다.

    ```js
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        <script src="main.js"></script>
    </body>
    </html>
    ```

    <img src="https://ifh.cc/g/b7X7K5.jpg">

    - 장점

        사용자가 스크립트를 서버에서 받기 전에도 페이지 컨텐트를 볼 수 있다.

    - 문제점

        웹사이트가 자바스크립트에 의존적이라면, 즉 사용자가 의미있는 컨텐츠를 보기 위해서 자바스크립트를 이용해서 서버에 있는 데이터를 받아오거나 DOM요소를 꾸미는 경우에는 **js파일의 다운, 실행 시간이 길어지기 때문에 비효율적이다**.




## **async**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script async src="main.js"></script>
    <title>Document</title>

</head>
<body>
   
</body>
</html>
```
<img src="https://ifh.cc/g/FRdAvz.jpg">

- 파싱 도중에 js파일을 만나면 다운로드 명령만 내린 후 병렬적으로 파싱을 다시 실행한다.
- js파일이 다운로드 완료되면, 파싱을 멈추고 다운로드된 js파일을 실행하고, 나머지 html 파일을 파싱한다.

- 장점

    - **다운로드 받는 시간 절약**

- 단점

    - js파일이 html파싱 전에 실행되기 때문에, js파일에서 querySelector를 통해 DOM요소를 조작하려 하는 시점에 **html에 아직 원하는 요소가 정의되지 않을 수 있다.**

    - 파싱 중에 언제든지 멈출 수 있기 때문에 **사용자가 페이지를 보는데 시간이 좀 걸릴 수 있다.**




## **defer**


```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="main.js"></script>
    <title>Document</title>

</head>
<body>
   
</body>
</html>
```
<img src="https://ifh.cc/g/qJbJan.jpg">


- 장점

    **파싱 동안에 js파일을 다운받아놓고**, 사용자에게 페이지를 먼저 보여준 후, js파일을 실행하기 때문에 async의 단점을 보완한다.

## 또 다른 차이

- **async**

    ```js
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="a.js"></script>
        <script src="b.js"></script>
        <script src="c.js"></script>
    </head>
    ```

    <img src="https://ifh.cc/g/ry5FkB.jpg">

    - js파일의 **실행 순서가 다운받은 순서와 동일**하다.

- **defer**

    ```js
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="a.js"></script>
        <script src="b.js"></script>
        <script src="c.js"></script>
    </head>
    ```

    <img src="https://ifh.cc/g/5qwK5h.jpg">

    - js파일의 다운받은 순서와 상관없이 **선언순서대로 실행**한다.  




## 참고자료

https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2

https://ko.javascript.info/script-async-defer

--------------------------------------------