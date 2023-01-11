# Window & DOM & BOM


## Window 객체란?
<br>

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDHYBV%2FbtqwdijH5B7%2Fu3S2Ets6aG7k63v5PYR29k%2Fimg.png">

- ### 자바스크립트의 최상위객체이자 전역객체이면서 모든 객체가 소속된 객체

<br>

## 문서 객체 모델(DOM)이란?


문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스이다.

이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공한다.

## 요약

- ### 프로그래밍 언어가 해당 문서에 접근하여 읽고 조작할 수 있도록 API를 제공하는 일종의 인터페이스

<br>

<img src="https://i.imgur.com/qzSfarm.png">

### 자바스크립트는 이러한 객체 모델을 이용하여 여러가지  **정적인** 작업을 할 수 있다.
<br>


<img src="https://ifh.cc/g/HkTXhr.jpg">

- 우리가 웹 사이트에 접속하면, 웹 브라우저는 HTML 문서를 읽어들이고 해석한다. 이 브라우저가 HTML코드를 해석하는 과정을 ‘**파싱**’이라 부른다.
- 파싱 결과물을, 화면을 통해 해석된 결과를 보여준다. 해석한 HTML 코드를 화면에 보여주는 과정이 렌더링이며, 결과물로 DOM이 만들어진다.

- 브라우저는 HTML 코드를 해석하여, HTML 요소들을 트리 형태로 구조화하여 표현하는 웹 문서를 생성한다. 이 트리 전체를 DOM이라 하며, 브라우저는 DOM을 통해 화면에 웹 콘텐츠들을 렌더링한다.
    - 트리를 구성하는 요소 하나하나를 **Node**라고 한다.
    - 자바스크립트로 웹 페이지 요소를 제어할 수 있는 것은 이것들 하나하나가 모두 **API**이기 때문
        - API : API는 소프트웨어 개발에서 호환성을 위해 지켜야 하는 추상적인 원칙(**~를 하면 특정 기능을 하도록 만들어놓은 메뉴판 느낌**)

<img src="https://i.postimg.cc/jjs2h6pT/image.png">





## 브라우저 객체(BOM)이란?

- ### BOM(Browser Object Model)
    - 자바스크립트가 **브라우저**와 소통하기 위해서 만들어진 모델
    - DOM은 BOM 중 하나
    - BOM의 최상위 객체는 **window객체**

        | method  |  의미 |
        | ----- | -------------------- |
        | location | 현재 URL에 대한 정보  |
        | navigator | 브라우저명과 버전정보를 속성으로 가짐  |
        | document | 현재 문서에 대한 정보  |
        | window | 최상위 객체로, 각 프레임별로 하나씩 존재  |
        | history | 현재의 브라우저가 접근했던 URL history  |
        | screen | 브라우저의 외부환경에 대한 정보를 제공  |

    - **DOM은 window 객체의 하위 객체**
        - window.document 객체를 DOM이라고 분류한다.
















## 참고자료

https://www.youtube.com/watch?v=1ojA5mLWts8
https://www.youtube.com/watch?v=mFawNZz_Uu0
http://www.tcpschool.com/javascript/js_dom_concept
https://cbw1030.tistory.com/46