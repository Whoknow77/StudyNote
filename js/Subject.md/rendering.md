# 브라우저 렌더링

## 브라우저란 ?

- 인터넷에 접속할 때 사용하는 Chrome, Safari, Firefox, 등등을 말한다.
- 유저가 선택한 자원을 서버로 부터 받아와 렌더링 과정을 통해 유저에게 보여주게 된다.

## 브라우저 구조

<img src="https://i.postimg.cc/X7m1Dggj/image.png">

### 1. User Interface

- 주소 표시줄, 이전/다음/새로고침 버튼 등 **웹 페이지를 제외**하고 사용자와 상호작용 하는 사용자 인터페이스

### 2. Rendering Engine

- HTML과 CSS를 파싱하여 요청한 웹페이지를 표시하는 렌더링 엔진

### 3. Browser Engine

- 유저 인터페이스와 렌더링 엔진을 연결하는 브라우저 엔진

### 4. Networking

- 각종 네트워크 요청을 수행하는 네트워킹 파트

### 5. UI Backend

- 체크박스나 버튼과 같은 기본적인 위젯을 그려주는 UI 백엔드 파트

### 6. Data Persistence

- LocalStroage나 Cookie와 같이 보조 기억장치에 데이터를 저장하는 파트

### 7. Javascript Interpreter

- 자바스크립트 코드를 실행하는 인터프리터

## 브라우저 렌더링 동작 과정

다음으로 브라우저 렌더링 과정을 크게 5가지로 나눠서 살펴보자.

<img src="https://i.postimg.cc/63Fz1WdH/image.png">

### 1. Parsing

<img src="https://tecoble.techcourse.co.kr/static/1d5973bb2abd4ea8580e2d6f9f286640/1805d/2021-10-24-browser-rendering-1.png">

- HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다.(DOM Tree, CSSOM Tree)

### 2. Style

<img src="https://tecoble.techcourse.co.kr/static/812332bcab15fdc8d05543579dad9f5c/919e0/2021-10-24-browser-rendering-2.png">

- Parsing 단계에서 생성된 DOM Tree와 CSSOM Tree를 매칭시켜서 Render Tree를 구성한다. Render Tree는 실제로 화면에 그려질 Tree이다.

### 3. Layout(Reflow)

<img src="https://i.postimg.cc/vTcF5ZG3/image.png" height="300">

- Render Tree를 화면에 어떻게 배치해야 할 것인지 노드의 정확한 위치와 크기를 계산한다.
- 루트부터 노드를 순회하면서 노드의 정확한 크기와 위치를 계산하고 Render Tree에 반영한다. 만약 크기 값을 %로 지정하였다면, Layout 단계에서 % 값을 계산해서 픽셀 단위로 변환한다.

### 4. Paint

<img src="https://i.postimg.cc/J7gS9mrC/image.png" height="300">

- Paint 단계에서는 Layout 단계에서 계산된 값을 이용해 Render Tree의 각 노드를 화면상의 실제 픽셀로 변환한다. 이때 픽셀로 변환된 결과는 하나의 레이어가 아니라 여러 개의 레이어로 관리된다.

### 5. Composite

- Paint 단계에서 생성된 레이어를 합성하여 실제 화면에 나타낸다. 우리는 화면에서 웹 페이지를 볼 수 있다.

## UI가 업데이트되는 3가지 상황

### 1. 다시 Layout이 발생하는 경우

<img src="https://i.postimg.cc/NG3BRRrX/image.png">

### 2. Paint부터 다시 발생하는 경우

<img src="https://i.postimg.cc/sXBCh2jK/image.png">

### 3. 레이어의 합성만 다시 발생하는 경우

<img src="https://i.postimg.cc/cHGBQ9Zj/image.png">

## 렌더링 최적화

### 1. Reflow 최소화

- 당연히 브라우저가 더 렌더링을 빠르고 효율적으로 할 수 있게 개발하기 위해서는 Reflow과정을 최소화 시키는 것이 좋다.
- Reflow가 일어나는 대표적인 속성
  - position, width, height, left, top, right, bottom, margin, padding, border, border-width,
    clear, display, float, font-family, font-size, font-weight, line-height, min-height,
    overflow, text-align, vertical-align, white-space...
- Repaint가 일어나는 대표적인 속성
  - background, background-image, background-position, background-repeat, background-size,
    border-radius, border-style, box-shadow, color, line-style, outline, outline-color,
    outline-style, outline-width, text-decoration, visibilty...

### 2. 프레임 줄이기

- 단순하게 생각하면 0.1초마다 1px씩 이동하는 요소보다 0.3초마다 3px씩 이동하는 요소가 Reflow 연산비용이 3배가 줄어든다고 볼 수 있다. 따라서 부드러운 효과를 조금 줄이면서 성능 개선을 할 수 있다.

### 3. 영향을 주는 노드 최소화

- JavaScript와 CSS를 조합해 애니메이션이나 레이아웃 변화가 많은 요소의 경우 position을 absolute 또는 fixed를 사용하면 영향을 받는 주변 노드들을 줄일 수 있다.

- fixed와 같이 영향을 받는 노드가 전혀 없는 경우 Reflow과정이 전혀 필요없어지기 때문에 Repaint연산비용만 들게 되어 효율적이다.

## 결론

브라우저 렌더링 과정의 이해를 통한 최적화를 수행하는 것은 필수적이다.

하지만, 무조건적으로 어떤 속성을 썼을 때, 속도가 빨라진다고 무조건적으로 쓰는 것이 아니라 Performance 탭을 통해 진짜로 동작하는 것인지 의심하고 검증하는 과정을 거쳐야 한다.

## 참고자료

https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/

https://www.youtube.com/watch?v=sJ14cWjrNis

https://www.youtube.com/watch?v=v8H5ujL4Tt8

https://chanyeong.com/blog/post/43
