# CSS

## 중요하면서 잘 까먹는 CSS 속성들을 정리해보자.

## 레이아웃

### display

- block : 컨텐츠의 크기에 상관없이 지정한 width, height를 기준으로 요소의 크기가 설정됨

  한줄에 하나씩 들어가는 **상자**

- inline : width나 height를 정의한 것은 무시하고,  
  컨텐츠의 크기에 맞춰서 요소가 크기가 설정됨

  **물건**

- inline-block : 한 줄에 컨텐츠의 크기에 상관없이 width, height를 기준으료 오소의 크기가 설정됨

  한줄에 여러개 들어갈 수 있는 **상자**

### position

- static : 기본값, 배치 불가능
- relative : 요소가 원래 있던 위치(static)로부터 상대적인 위치

  다른 요소에 영향을 주지 않는다.

  즉, 밀어내지 않고 겹쳐진다.

- absolute : 요소가 담겨 있는 박스 안에서의 상대적인 위치

  position이 있는 부모 요소들 중 가장 가까운 부모를 기준으로 위치를 잡는다.

  부모들중에 position이 없다면 viewport를 기준으로 위치를 잡는다. => fixed와 동일

- fixed : 페이지 기준으로 설정된 상대적인 위치
- sticky : 스크롤 되어도 그 좌표에 고정되어있음

## flexbox

### container(박스)

- display
  - flex : 한 줄에 나란히
- flex-direction
  - row : 가로
  - column : 세로
- flex-wrap
  - wrap : 기본값, 한 줄이 꽉차면 다음 줄로 넘어감
  - nowrap : 아이템들이 아무리 작아져도 한줄에 정렬
- flex-flow

  - flex-direction과 felx-wrap을 합침
  - ex) column nowrap;

- justify-content(아이템 배치 방법, 메인 축)

  - flex-start : 기본값, 왼쪽부터 배치

    <img src="https://poiemaweb.com/img/flexbox-justify-content-flex-start.jpg">

  - flex-end : 오른쪽으로 배치

    <img src="https://poiemaweb.com/img/flexbox-justify-content-flex-end.jpg">

  - center : 중심으로 배치

    <img src="https://poiemaweb.com/img/flexbox-justify-content-center.jpg">

  - space-around : 앞, 뒤, 요소들 사이에 여유 공간 두고 배치

    <img src="https://poiemaweb.com/img/flexbox-justify-content-space-between.jpg">

  - space-between : 요소들 사이에만 여유 공간을 두고 배치

    <img src="https://poiemaweb.com/img/flexbox-justify-content-center.jpg">

- align-items(아이템 배치 방법, 반대 축)

  - stretch : 기본값, 플렉스 요소의 높이가 플렉스 컨테이너의 높이와 같게 변경된 뒤 연이어 배치

    <img src="https://poiemaweb.com/img/flexbox-align-items-stretch.jpg">

  - baseline : 플렉스 요소는 플렉스 컨테이너의 기준선(baseline)에 배치

  - start

    <img src="https://poiemaweb.com/img/flexbox-align-items-flex-start.jpg">

  - end

    <img src="https://poiemaweb.com/img/flexbox-align-items-flex-end.jpg">

  - center

    <img src="https://poiemaweb.com/img/flexbox-align-items-center.jpg">

- align-content(아이템 배치 방법, 반대 축 두 줄 이상에서만 효과 있음)

  - stretch : 기본값, flex item의 행 이후에 균등하게 분배된 공간에 정렬되어 배치

      <img src="https://poiemaweb.com/img/flexbox-align-content-stretch.jpg" height="150px" >

  - flex-start

      <img src="https://poiemaweb.com/img/flexbox-align-content-flex-start.jpg" height="150px" >

  - flex-end

      <img src="https://poiemaweb.com/img/flexbox-align-content-flex-end.jpg" height="150px">

  - center

      <img src="https://poiemaweb.com/img/flexbox-align-content-center.jpg" height="150px" >

  - space-between

      <img src="https://poiemaweb.com/img/flexbox-align-content-space-between.jpg" height="150px" >

  - space-around :

    <img src="https://poiemaweb.com/img/flexbox-align-content-space-around.jpg" height="150px" >

### item

- flex-grow

  - 아이템이 flex-basis의 값보다 커질 수 있는지 결정하는 속성

- flex-shrink

  - 아이템이 flex-basis의 값보다 작아질 수 있는지 결정하는 속성

- flex-basis

  - 아이템의 너비 기본값을 설정, 기본값은 auto

- flex

  - flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축약형 속성

  ex) flex : 1 1 auto;

- align-self

  - 개별 flex item을 정렬한다.

## 100% vs 100vh

- 100% : 부모의 100%를 채운다.
- 100vh : 부모에 상관없이 보이는 뷰포트 기준으로 100%를 채운다.

## width:100% vs width:auto

- 100% : 부모 요소에게 100% 비례(꽉차게)하는 가로폭을 설정하겠다는 뜻

  - 마진, 패딩, 보더 영역 모두 포함
  - 명시적인 부모가 없으면 body가 부모가 된다.
  - 이와 반대되는 개념은 px를 사용하는 고정폭이다.
  - 이러한 처리에 의해 발생하는 대표적인 결과는 body와 그 자식 요소에게 가변폭을 설정하는 경우 웹브라우저의 가로 폭을 줄이면 가변폭 크기를 갖는 요소의 가로 크기도 함께 줄어 내용물들이 다음줄로 밀려 내려간다는 것이다. 그에 비해 고정폭은 웹브라우저의 가로 크기가 줄면 고정폭 이하의 크기일 경우 가로 스크롤바가 생성된다.

- auto : 적절히 알아서 설정

  - 블록 요소의 초기값으로 자동 설정됨
  - 마진, 패딩, 보더영역 포함x. 보더, 마진 값을 조절하여 스크롤바 생성 x
  - box의 display 값 or 요소가 사용된 맥락에 따라 달라짐

    - block: 기본으로 100% 니까 auto=100%

    - inline-block: 자신이 가진 컨텐츠 길이만큼 auto

    - inline: width 설정이 불가능하므로 항상 100%

## a 태그는 특별한 태그이다.

html의 원칙상 인라인요소 안에 블록요소가 들어가면 안된다. 들어가게 해주고 싶으면
인라인요소에 `display: block;` 를 하면 블록요소가 된다.

## 참고자료

https://poiemaweb.com/css3-flexbox

https://yeko90.tistory.com/entry/css-%EA%B8%B0%EC%B4%88-width-auto-%EC%99%80-width-100-%EC%B0%A8%EC%9D%B4

https://oh-potato.tistory.com/7
