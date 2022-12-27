
# HTML & CSS & JS

<details>
<summary>기초문법</summary>

----------------------------------

HTML, CSS부분은 모르는 내용 위주로 정리 하고, JS는 꼼꼼하게 정리한다.

----------------------------------

<details>
      <summary> vscode 단축키 모음 </summary>

+ 전체저장   
Ctrl + Alt + S   
      
+ 사이드바 열기/닫기   
 Ctrl + B    
+ 주석처리   
원하는 영역 드래그 후 Ctrl + /   
            </details>

<details> <summary>HTML</summary>
      
+ 블럭요소(block)   
p, div, h, ul, ol ,form 요소가 대표적이고, 데이터가 수평으로 쌓이며, 너비,여백을 설정할 수 없고 가로세로 모두 최소한으로 지정된다.
+ 인라인요소(글자요소, inline)   
span, a, img 요소가 대표적이고, 데이터가 수직으로 쌓이며 너비,여백을 설정할 수 있고 세로는 최소한으로, 가로는 최대한으로 지정된다. 
+ h   
제목에 해당하는 태그로 1~6까지 있고 숫자가 낮을수록 중요하고 크기가 크고 진하다.

+ img   
이미지 태그로 src값에는 이미지의 경로, alt값은 필수 값으로 이미지가 로드가 안됐을때 출력하는 기본 문자다.   
![image](https://user-images.githubusercontent.com/106851561/182117891-ebe5e6df-322c-424a-b319-a0eec129bede.png)
  + 상대경로   
 <img src="https://user-images.githubusercontent.com/106851561/182115723-e1d4361e-4cb4-47a8-becd-62d1bedfb2bc.png" width="400" heigth="400">
  여기서 ./값은 주위파일을 탐색하겠다는 뜻이고, 생략가능하다.    
 <img src="https://user-images.githubusercontent.com/106851561/182116419-eb319028-406e-422a-bac9-0ef07c3cee18.png" width="400" heigth="400">

  + 절대경로   
   /은 루트에 해당하는 값으로 최상위 폴더로 가서 찾는다는 뜻이다.   
  ../은 한 단위의 상위폴더로 가서 찾는다는 뜻이다.  
  <img src="https://user-images.githubusercontent.com/106851561/182116519-fbd80c50-d6d8-440b-9f0e-4720dc2b28b6.png" width="400" heigth="400">
<img src="https://user-images.githubusercontent.com/106851561/182116558-fe22145e-9f04-478d-b437-c9dde5f28ac0.png" width="400" heigth="400">

+ input   
입력태그로 type안에 데이터타입을 설정할 수 있다. 같은 name 속성끼리는 연관을 짓게 하여 하나를 선택하면 그 외에 것들은 체크가 해제된다.   
value 속성은 미리 입력된 값을 나타낸다.   
placehorder 속성은 힌트를 화면에 출력한다.

  + text    
  기본 네모상자
  + checkbox   
  체크박스
  + radio   
  동그란 버튼
+ span   
  글자들을 구분짓기 위해 사용하는 대표적 요소
+ label
input태그와 함께 사용하여 글자를 클릭하여도 요소가 선택되게 한다.
+ div   
대표적으로 박스들을 구분 짓기 위해 사용하는 태그, 매우 많이 사용됨.
+ ul,li
목록을 만드는 태그로 li는 하위 요소들로 서로 순서가 의미가 없을때 사용된다.
+ p   
한줄짜리 태그
+ table   
테이블 요소에 해당하는 태그
+ tr,td   
tr은 행을, td는 열을 만드는 태그로 html에서 복잡하게 행렬을 만드는 식은 구식이므로 쓸 일이 거의 없다.
+ br   
줄바꿈 태그   
+ a   
링크 태그, target속성은 브라우저 의 탭 위치를 가리키고, target="_blank"일때는 브라우저를 새창에서 연다.  
+ class   
요소를 지칭하는 중복 가능한 이름, 많이 쓰임.
+ id   
요소를 지칭하는 고유한 이름
+ data-이름="데이터   
요소에 데이터를 지정
</details>



<details> <summary>CSS</summary>   
      
+ ### 전체 선택자   
(*)
+ ### 태그 선택자      
태그이름
+ ### 클래스 선택자      
.
+ ### 아이디 선택자      
(#)
+ ### 일치 선택자   
span.orange 선택자 span과 .orange를 동시에 만족해야함
+ ### 자식 선택자   
ul > .orange   
ul태그 자식의 orange 클래스를 가진 요소 선택
+ ### 하위(후손) 선택자   
div. orange
div 태그 하위의 orange 클래스를 가진 요소 선택
+ ### 형제 선택자   
.orange + li   
orange 클래스의 다음 형제 요소 li태그 하나 선택
+ ### 일반 형제 선택자   
.oragne ~ li   
orange 클래스의 다음 형제 요소 li태그 모두 선택
+ ### hover   
마우스 커서 올라가 있을 때
+ ### active   
마우스 클릭하고 있을 때
+ ### focus   
input:foucs   
input 요소가 포커스되면 선택, 포커스가 가능한 태그들이 몇개 존재함. div같은건 안됨
+ ### ABC:first-child   
ABC가 형제 요소 중 첫째라면 선택, 주의 해야할 것이 반드시 ABC태그가 첫번째 형제요소여야 선택된다는 것임
<img src="https://user-images.githubusercontent.com/106851561/182659353-d1d6cbd5-505f-4155-b2ad-15740fbe9d2d.png" width="400" heigth="400">
<img src="https://user-images.githubusercontent.com/106851561/182659418-dde1b481-c892-4fe9-86ab-c19417247061.png" width="400" heigth="400">
+ ### ABC:last-child   
ABC:last-child   
ABC가 형제 요소 중 막내라면 선택
+ ### ABC:nth-child(n)   
이게 좀 중요한거같고 특정한 값을 *선택자를 통해 가리킬 수 있음.
ABC가 형제 요소 중 (n)째라면 선택
<img src="https://user-images.githubusercontent.com/106851561/182659891-a9310ed8-e257-4a4e-8423-6db67ffaea57.png" width="400" heigth="400">
그외에 2n, 2n+1,n+2,not(태그네임)등 짝수,홀수, 두번째부터, 태그네임빼고 선택할 수 있음

+ ### ABC::befor ABC::after   
선택자 ABC 요소의 내부 앞에 내용을 삽입하고, 반드시 content를 공백이라도 명시해야 한다. 인라인 요소에 해닫한다. display:block시 블럭요소로 전환 가능   
자주 사용된다고 한다.   
+ ### [ABC]   
속성 선택자로 속성 ABC를 포함한 요소 선택, 예를들어 type="", type="password"가 있을때 [type]도 가능하고, [type="password"]도 가능하다.
+ ### 상속   
<img src="https://user-images.githubusercontent.com/106851561/182801119-36f32ad4-1a09-463b-a529-0851d39a4505.png" width="400" heigth="400"> 
강제 상속시 inherit 속성 부여
+ ### 선택자 우선순위   
1. 점수가 높은 선언이 우선함!   
2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선함!   
전체 선택자 : 0   
태그 선택자 : 1   
class 선택자 : 10   
id 선택자 : 100   
인라인 선언 : 1000   
!important : 99999999   
여기서 인라인 선언과 !important은 사용하지 않는 것이 바람직함. 쓸데없이 점수가 높음.


+ #### CSS 속성(레이아웃, 중요!!!)
   + #### 박스 모델
      + 너비(width, height) : 가로, 세로, auto:브라우저가 너비를 계산, 단위: px, em, vw등 단위로 지정
      + span : 대표적인 인라인 요소로, 포함한 콘텐츠 크기만큼 자동으로 줄어듬
      + div : 대표적 블록 요소, 가로는 부모 요소의 크기만큼 자동으로 늘어나고, 세로는 콘텐츠 크기만큼 자동으로 줄어든다.
      + max-width, max-height : 요소가 커질 수 있는 최대 가로/세로 너비 지정, none값을 줄 경우 최대 너비 제한 x, 0값은 최소 너비 제한 x
      + px : 픽셀
      + % : 상대적 백분율
      + em : 요소의 글꼴 크기
      + rem : 루트 요소(html)의 글꼴 크기
      + vw : 뷰포트 가로 너비의 백분율 : 브라우저의 크기에 따라 달라짐
      + vh : 뷰포드 세로 너비의 백분율 : 동일
      + margin : 요소 외부 여백을 지정하는 단축 속성   
      0 -> 외부 여백 없음, auto -> 브라우저가 여백을 계산, 단위지정 가능(px, em, vw등), 음수의 값 지정시 겹쳐짐   
      top, rigth, bottom, left 순서대로 지정   
      + padding : 요소 내부 여백을 지정하는 단축 속성으로 여백의 크기 만큼 요소의 크기가 커진다.   
      margin과 다르게 %를 자주 사용하고, 부모 요소의 가로 너비에 대한 비율로 지정할때 사용된다.
      + 테두리   
         + border: 선-두께 선-종류 선-색상; 역시나 요소의 크기가 커진다!   
         + border-width : margin과 padding과 같이 여러방향 지정 가능   
         + border-style : none, solid, dashed (선x, 실선, 파선 등), 여러방향 지정가능   
         + border-color : 색상 설정, 기본 색상은 검정, 여러방향 지정가능   
         + border-radius : 요소의 모서리를 둥글게 깎음, 단위지정(px, em ,vw)등, 여러방향 지정가능    
         일정 방향으로 지정할때 : border-top, border-top-width, border-top-style, border-top-color와 같이 지정 가능   
      + box-sizng   
      요소의 크기 게산 기준을 지정, content-box : 요소의 내용 기준, border-box : 요소의 내용 + padding + border로 크기 계산   
      요소에 지정한 가로너비와 세로너비만큼 정확한 크기로 내부 영역과 테두리 선을 추가할때 사용! ---> border-box 사용(자동계산), 기본값은 content-box
      + overflow   
      요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성, 반드시 부모 영역에 지정!, overflow-x,y등 제어가능
         + visible : 넘친 내용 그대로 보여줌, 기본 속성
         + hidden : 넘친 내용 잘라냄   
         + auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성
         <img src="https://user-images.githubusercontent.com/106851561/182825451-3f2e4da4-f3e1-4bf7-90a6-f14cb2592be4.png" width="400" heigth="400">   
      + display   
         + block : 상자 요소
         + inline : 글자 요소
         + inline-block : 글자 + 상자 요소, 기본 베이스는 글자인데 상자요소를 사용함
         + flex : 1차원 레이아웃
         + grid : 2차원 레이아웃
         + none : 화면에서 사라짐
         + 기타 : table, table-row, table-cell 등
      + opacity   
      투명도 지정, 1 : 불투명, 0~1 숫자 지정, 기본 1
      
   + #### 글꼴, 문자
      + font-style : 글자의 기울기, normal, italic 등등
      + font-weight : 두께, 두께(100~900) 지정, 기본 400
      + font-size : 크기, px단위 지정
      + line-height : 한 줄의 높이, 1.4 --> 글꼴 크기의 1.4가 한줄의 높이가 됨(배수 사용 권장)
      + font-family : 글꼴, 글꼴계열 필수로 지정해야 함.(후보 개념)
      + text-decoration : 문자의 장식(선) none->장식없음, underline->밑줄
      + text-indent : 문자 첫 줄의 들여쓰기 : 단위 지정, 기본 0은 들여쓰기 없음, 음수 사용 가능
   + #### 배경
      + background-position : center -> 정 가운데 배치, 방향 지정 가능, 단위 사용가능(~로부터 멀어지는 지점)
      + background-repeat : no-repeat -> 바둑판식 배열을 사용하지 않겠다. 수평,수직 반복 사용 가능
      + background-color : 색상
      + background-image : 이미지 삽입, url("경로") 사용, 절대 or 상대 경로, 배경색상은 이미지 뒤에 나온다.
      + background-size : 크기속성, auto가 기본(이미지 실제크기), cover:비율유지, 요소의 더 넓은 너비에 맞춤, contain:비율유지, 더 짧은 너비 맞춤(가로,세로 개념)   
      + background-attachment : 요소의 배경 이미지 스크롤 특성 -> scroll, fixed(이미지 고정)
   + #### 색상 표현
      + Hex 색상코드 : 브라우저에서 제공하는 색상 이름 : red, tomato, royalblue   
      + RGB : 빛의 삼원색, #000, #FFFFFF----> 실제 가장 많이 사용됨   
      + RGBA : 빛의 삼원색 + 투명도 : rgba(0, 0, 0, 0.5)
   + #### 배치
      + position : 요소의 위치 지정 기준, 음수 사용 가능
         + static : 기준 없음
         + relative : 요소 자신을 기준
         + absolute : 위치 상 부모 요소를 기준, 부모를 못찾을시 브라우저를 기준으로 배치함
         + fixed : 뷰포트(브라우저)를 기준(고정)
         + top, bottom. left, right : 요소의 각 방향별 거리 지정 auto -> 브라우저가 계산, 단위 지정
         + 요소 쌓임 순서 : 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정
            + 요소에 position 속성의 값이 있는 경우 이ㅜ에 쌓임.(기본값 static 제외)
            + 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
            + 1번과 2번 조건까지 같은 경우, html의 다음 구조일 수록 위에 쌓임
            + z-index : 요소의 쌓임 정도를 지정, 숫자가 높을 수록 위에 쌓임, 기본으로 부모 요소와 동일한 쌓임 정도(0)
         + ##### 요소의 display가 변경될 때 : position 속성의 값으로 absolute, fixed가 지정된 요소는, display속성이 block으로 변경됨(중요!)                 
   + #### 플렉스(정렬) == 수평정렬
      + Flex Container   
        display: flex; 값이 들어있는 요소(부모)
        
         + flex-direction : 주 축을 설정
            + 수평 축 = 행
               + row : 행 축(좌=>우) 시작 -> 끝
               + row-reerse : 행 축(우=>좌)  끝 <- 시작
         + felx-wrap
         Flex items 묶음(줄 바꿈) 여부   
            + nowrap : 기본값, 묶음 없음, 한 줄로만 요소 정렬
            + wrap : 여러 줄로 묶음   
         <img src="https://user-images.githubusercontent.com/106851561/182852439-03c49879-c6dd-4e5c-9a2f-860fdd0a935d.png" width="400" heigth="400">
         + justify-content   
      주 축의 정렬 방법   
            + flex-start : flex items를 시작점으로 정렬 == **수평**일때 왼쪽정렬
            + flex-end : 끝점으로 정렬 == **수평**일때 오른쪽정렬
            + center : 가운데 정렬 == **수평**일때 가운데정렬
         + align-content   
      교차 축의 **여러 줄** 정렬 방법 == ** 수직 정렬**      
            + stretch : flex items를 시작점으로 정렬(기본 값으로 전체아님)
         나머지는 동일하고, 모두 전체에 대한 정렬   
      <img src="https://user-images.githubusercontent.com/106851561/182854379-d5ea73ea-d03b-4c0d-8c03-fd88ef6f9853.png" width="400" heigth="400">
         요소들이 두줄 이상이어야 align-content를 사용할 수 있고 두줄이려면 flex-wrap: wrap; 이어야 하고, 여백이 있어야하므로 **잘 사용안함**   
         + align-items(이게 content 보다 많이 쓰임)   
      교차 축의 한 줄 정렬 방법   
     <img src="https://user-images.githubusercontent.com/106851561/182855187-f5713773-bb0f-46d1-8813-d48f9bd34914.png" width="400" heigth="400">
         + #### 정렬할때 수평 == justify-content : center; 수직 == align=items: center; (display: flex; 선언후에)
      
      + Flex item   
        자식요소
           + order
              Flex item의 순서, 숫자부여, 숫자가 작을 수록 먼저, 기본 0
           + flex-grow
              증가 너비 비율, 0, 숫자부여
           + flex-shrink
              감소 너비 비율, 1, 숫자부여
           + flex-basis
              기본 auto : 요소의 content 너비, 단위로 지정 
                     
   + #### 전환
      + transition : 속성명 **지속시간**(필수) 타이밍함수 대기시간:   
         + transition-property : 속성이름, 기본값은 모든속성
         + transition-duration : 지속시간
         + transition-timing-function : 타이밍 함수 ex) ease, linear, ease-in ease-out, ease-in-out 등
         + transition-delay : 대기시간, 기본 0
      
   + #### 변환
      + transform : 변환함수1 변환함수 2 변환함수 ...;   
        transform : 원근법 이동 크기 회전 기울임;   
      + 2D변환함수
         + translate(x,y)   
         이동(x축, y축)
         + translateX(x)   
         이동(x축)
         + scale(x,y)   
         크기(x축, y축)
         + rotate(degree)   
         회전(각도)
         + skewX(x)   
         기울임(x축)
         + perspective 속성   
         하위 요소를 관찰하는 원근 거리를 지정(항상 맨 앞에 있어야함), 단위 지정
         <img src="https://user-images.githubusercontent.com/106851561/183002202-f8ec7e73-7fc8-46cd-8792-0286d68b1d93.png" width="200" height="200">   
         ** 부모 요소에다 사용하는걸 권장 **
         + backface-visibility   
         회전된 요소의 뒷면 숨김 여부
                                                                                                                                          </details>

<details><summary>JS</summary>

+ Tip
      + defer   
      가져온 JS 파일을 HTML 문서 분석 이후에 실행하도록 지시하는 속성
      
+ 변수   
주로 **const**를 사용하고, 재 할당 할 경우가 있는 변수의 경우 에는 **let**을 사용한다.
+ 함수   
다른 언어와 다르게 객체 데이터 안에 메소드를 정의하여 데이터로 사용할 수 있고, 익명함수가 존재함
   + 익명함수   
    function () {} 꼴, 호출은 안되고, 데이터에 할당 가능
+ DOM API(HTML 제어)        
   + HTML 요소  검색/찾기(가장 먼저 찾아진)
      + const boxEl = document.querySelector('.box'); ==> 요소1개
      + const boxEls = document.querySelectorAll('.box'); ==> 요소 모두(유사배열로 생성됨)
   + 찾은 요소들 반복해서 함수 실행!!   
       **익명 함수를 인수로 추가**   
         boxEls.forEach(function() {}));   
      **첫 번째 매개변수(boxEl) : 반복 중인 요소**   
      **두 번째 매개변수(index) : 반복 중인 번호**   
      boxEls.forEach(function (boxEl, index) {});   
      **출력**   
      boxEls.forEach(function (boxEl, index) {   
      boxEl.classList.add('order-$(index+1)');   
      console.log(index, boxEl);   
      });   
   + HTML 요소에 적용할 수 있는 메소드
      + boxEl.addEventListener();
   + 인수를 추가 가능
      + boxEl.addEventListener(1,2);
   + 이벤트(상황)
      + boxEl.addEventListener('click', 2);
   + 핸들러(실행할 함수)
      + boxEl.addEventListener('click', function() {   
      console.log(`Click!`);   
      });   
      **$를 사용하려면 ` 기호 사용하여야함**   
         ==> click이벤트를 요소에다가 지정한 후 클릭시 익명함수 작동하게 함
   + 요소의 클래스 정보 객체 활용
      + boxEl.classList.add('active');   
         active 클래스 추가
      + boxEl.classList.remove('active');   
         active 클래스 제거
      + boxEl.classList.contains('active);   
        True or False 반환
   + 값을 얻는 용도
      + cnosole.log(boxEl.textContent); ==> 텍스트 내용 반환
   + 값을 지정하는 용도
      + boxEl.textContent = 'whoknow';

+ 메소드 체이닝
      + 함수들을 연결고리를 통해 사용가능
      
+ 변수의 유효 범위
  + let, const(자주 사용됨)   
  블록 범위
  > function scope(){   
    if(true){   
        let(const) a=123   
    }   
    console.log(a)   
}   
scope()   
   에러 발생   
  + var(거의 사용하지 않음)      
  함수 범위
     가능
+ 형변환
   + **JS에서는 비교 연산자로 === 를 쓰는걸 권장**   
   ==쓰면 자동으로 형변환 일어나서 혼동을 준다.
   + 참 같은 값   
   true, {}, [], 1, 2, 'false', -12, '3.14' ...   
   + 거짓 같은 값(이걸 외우자)   
   false, '', null(의도적으로 비어있음), undefined(의도x), 0, -0, NaN(숫자데이터긴 한데 숫자아님 ex ) 1 + undefined)
   
+ 화살표 함수
   + () => {} vs function () {}   
   
            const double = function(x){   
            return x*2   
            }   

            console.log('double:', double(7))   

            const doubleArrow=(x)=>{   
                return x*2   
            }   

            console.log('doubleArrow', doubleArrow(7))   
            
            --------------------------------------------
            const doubleArrow = (x) => x * 2 //축약(엄청 편리하고 자주 사용됨)   
            중괄호와 return문은 세트임   
            축약형일때는 반드시 중괄호 밖에 소괄호로 감싸줘야함.
            const doubleArrow = x => ({ name: 'Whoknow' })
            
 + 즉시실행함수 : 만들면서 동시에 실행   
 
            (function () {   
               console.log(a*2)   
            })() //소괄호로 감싸고 마지막에 열고닫아주기

            (function () {
               console.log(a*2)
            {()); //열고닫고 소괄호로 감싸주기 ---> 권장!
            
 + 호이스팅 : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상


            const a=7

            double()

            function double(){
                console.log(a*2)
            }   
            // 함수 표현이 아닌 선언부가 아래쪽에서 작성했지만 위에서 호출이 가능함.
                
                
  + 타이머 함수
     + setTimeout(함수, 시간) : 일정 시간 후 함수 실행
     + setInterval(함수, 시간) : 시간 간격마다 함수 실행
     + clearTimeout() : 설정된 Timeout 함수를 종료
     + clearInterval() : 설정된 Interval 함수를 종료
     
  + 콜백함수 : 함수의 인수로 사용되는 함수
     
     
            function timeout(cb){
                setTimeout(() => {
                    console.log('Whoknow')
                    cb()
                },3000)
            }
            timeout(() => {
                console.log('Done!')
            })
            // Whoknow 출력 이후에 Done이 출력된다. ==> 특정한 실행 위치 보장
            
  + 클래스
  
             const whoknow={
                firstName:'Whoknow', //속성
                lastName:'Choi',  //속성
                getFullName:function(){  //메소드
                    return `${this.firstName} ${this.lastName}` //this = whoknow(객체)
                }
             }
             //속성과 메소드를 통틀어 멤버
             console.log(whoknow.getFullName())  
             
     + 생성자 함수와 프로토타입
     
            function User(first, last){ //대문자 --> 생성자 함수
                this.firstName=first
                this.lastName=last

            }
            User.prototype.getFullName = function () {
                return `${this.firstName} ${this.lastName}`
            }
            // 객체를 몇개를 만들던 메모리에 이부분은 한번만 만들어짐(모두 여기를 참조)

            const whoknow = new User('whoknow', 'Choi') //생성자 함수 --> 객체 데이터 생성
            const amy = new User('Amy', 'Clarke')
            const neo = new User('Neo', 'Smith')

            console.log(whoknow.getFullName())
            console.log(amy)
            console.log(neo)     
     
     
     + this 구분
     
            // this 
            // 일반 함수는 호출 위치에서 따라 this 정의
            // 화살표 함수는 자신이 선언된 함수 범위에서 this 정의!

            const whoknow = {
                name: 'whoknow',
                normal: function (){
                    console.log(this.name) //여기까지는 this가 뭘 가리키는지 확정 x, 호출때 결정
                },
                arrow: () =>{
                    console.log(this.name) //선언과 함께 결정은 되지만 알 수가 없음.
                }
            }
            whoknow.normal() // whoknow
            whoknow.arrow()  // undefined

            const amy = {
                name: 'Amy',
                normal: whoknow.normal, //호출이 아닌 함수자체가 할당됨
                arrow: whoknow.arrow
            }

            amy.normal() //Amy
            amy.arrow() //undefined
            
     + 화살표 함수와 this
     
            const timer = {
                name: 'Whoknow',
                timeout: function(){
                    setTimeout(() => {
                        console.log(this.name)
                    }, 2000)
                }

            }

            timer.timeout()
            // 화살표함수가 timeout 함수로 감싸져 있고 그 함수는 일반함수가 정의된 timer라는 객체 데이터를
            참조하기때문에 this == timer 이다.
            일반함수 사용시 setTimeout 안의 로직 어딘가에서 실행되기 때문에 undefined가 나타남.
            
    **setInterval, setTimeout 함수의 콜백함수를 이용할때는 화살표 함수를 이용하는 것이 좋다.**
    
    + ES6로 간단하게하기
    
            //ES6 Classes

            class User{
                constructor(first, last){
                    this.firstName=first
                    this.lastName=last
  
                }
                getFullName(){
                    return `$(this.firstName) $(this.lastName)`
                }
            }
   + 상속
   
            class Vehicle {
                constructor(name, wheel){
                    this.name=name
                    this.wheel=wheel
                }
            }

            const myVehicle = new Vehicle('운송수단', 2)
            console.log(myVehicle)

            class Bicycle extends Vehicle{
                constructor(name, wheel){
                    super(name, wheel) // super == Vehicle 그대로 Vehicle 로직 가져옴
                }
            }
            const myBicycle = new Bicycle('삼천리', 2)
            const daughterBicycle = new Bicycle('세발', 3)
            console.log(myBicycle)
            console.log(daughterBicycle)
            class Car extends Vehicle{
                constructor(name, wheel, license){
                    super(name, wheel) // super == Vehicle
                    this.license = license //새로운 로직추가
                }
            }

            const myCar = new Car('벤츠', 4, true)
            const daughterCar = new Car('포르쉐', 4, false)

            console.log(myCar)
            console.log(daughterCar)
            
            
            
   + Level up(파이썬이랑 매우매우 유사함)
       + 문자
          + indexOF : 문자열의 첫 번째 등장 인덱스 반환, 없으면 -1
          + length : 문자열의 길이
          + slice(시작인덱스, 끝인덱스) : 문자열 잘라서 추출(끝인덱스 직전까지)
          + replace('기존문자', '바꿀문자열') : 문자열 바꾸기
          + match : 정규표현식, 배열데이터 반환 가능
          + trim : 앞뒤 공백문자 제거
       + 숫자
          + toFixed(n) : 소수점 n번째 자리까지만 놔둠, 문자데이터 반환
          + parseInt : int형 타입변환
          + Math객체
             + abs : 절댓값
             + min : 최소값
             + max : 최대값
             + ceil : 올림(기본적으로 정수단위)
             + floor : 내림
             + round : 반올림
             + random : 랜덤값
          + 배열 API
             + 배열.lenght : 배열의 길이
             + 배열.concat() : 병합(원본 데이터 손상x)
             + forEach() : 아이템 개수 만큼 안의 괄호안의 함수 반복(반복문의 느낌), **반환값이 없음**
             
                   fruits.forEach(function (fruit, i){
                      console.log(fruit, i)
                        })
                        
             + map() : forEach와 같이 반복되지만 메소드로 실행된 새로운 배열이 반환됨 **반환값이 있음**
             
                        const numbers=[1,2,3,4]
                        const fruits=['Apple', 'Banana', 'Cherry']

                        const a=fruits.forEach((fruit, i)=> {
                            console.log(`${fruit}-${i}`)
                        })
                        console.log(a) //undefined

                        const b= fruits.map((fruit, i) =>({

                            id: i,
                            name: fruit
                        }))

                        console.log(b) //        
                  
             + filter() : 일정한 기준에 의해 필터링후 반환
             + find() : 아이템 반환
             + findIndex() : 아이템 인덱스 반환
             + includes() : 포함되어 있는지
             + push() : 배열 뒤에 값 추가
             + unshift() : 배열 앞에 값 추가
             + reverse() : 배열 거꾸로 뒤집기, **원본 수정됨**
             + splice(인덱스, 아이템지울개수) : **원본 수정됨**
             + splice(인덱스, 아이템지울개수, 끼워넣을값) 으로도 사용됨
             
          + 객체
             + Object.assign(대상객체, 출처객체) : 객체 복사(일반 데이터값에는 사용 x)

                        const userAge={
                        name:'Whoknow',
                        age:85
                        }

                        const userEmail = {
                        name:'Whoknow',
                        email:'gnsdh8616@naver.com'
                        }

                        const target=Object.assign(userAge, userEmail) // target === userAge
                        const target=Object.assign({}, userAge, userEmail)// target !== userAge, 새로운 객체 리터럴에 할당
                  
             + Object.keys() : key 값들로 이루어진 배열 데이터 반환

                        const user={
                            name:'Whoknow',
                            age:85,
                            email:'gnsdh8616@naver.com'
                        }

                        const keys=Object.keys(user)
                        console.log(keys) //key 값들

                        console.log(user['email'])

                        const values=keys.map(key => user[key])
                        console.log(values) //value 값들
                  
             + 구조분해 할당 : 값 꺼내오기(필요한 것만 가져올 수 있다는 장점)

                        const users={
                        name:'Whoknow',
                        age:85,
                        email:'gnsdh8626@naver.com',
                        }

                        const {name,age,email}=users
                        console.log(name, age, email) 

                        const fruits =['Apple, 'Banana', Cherry']
                        const [a,b,c]= fruits
                        console.log(a,b,c)
                  
             + 전개연산자(Spread)

                        const fruits=['Apple', 'Banana', 'Cherry']
                        console.log(fruits) //배열형태로 출력
                        console.log(...fruits) //각각의 문자데이터 출력

                        function toObject(a,b,c){
                            return{
                                a:a,
                                b:b,
                                c:c
                            }
                        }
                        console.log(toObject(...fruits))
                        //원래이렇게 복잡 -> console.log(toObject(fruits[0], fruits[1], fruits[2]))
                  
              
                        const fruits=['Apple', 'Banana', 'Cherry', 'Orange']

                        function toObject(a,b, ...c){ //rest parameter ...(나머지 할당)
                            return{
                                a:a,
                                b:b,
                                c:c
                            }
                        }
                        console.log(toObject(...fruits))
                        
                        
                        const fruits=['Apple', 'Banana', 'Cherry', 'Orange']

                        const toObject=(a,b, ...c) =>({a,b,c}) //객체데이터 반환시 소괄호로 묶기

                        console.log(toObject(...fruits)) 
                        
              + 데이터 불변성
                 + 원시 데이터 : String, Number, Boolean, undefined, null
                    기본적으로 같게 생겼으면(똑같은 메모리 주소 참조) 같고, 다르게 생겼으면 다르다. 
                 + 참조 데이터 : Array, fucntion, Object
                    이와 달리 새로운 값을 만들때마다 새로운 메모리 주소에 값을 할당하므로, 똑같이 생겼어도 다를 수 있음   
                    b=a와 같이 할당연산자 사용시, 복사 느낌보다는 메모리 주소 참조를 옮겨간다고 생각하면 된다.   
                    그러므로 하나 수정하면 다른쪽도 수정한다.   
                    
                       + 얕은 복사(참조 데이터 내부에 또 다른 참조 데이터가 없을때)
                          객체의 주소값을 복사한다
                       
                          const user={
                              name:'Whoknow',
                              age:25,
                              emails:['gnsdh8616@naver.com']
                              }
                              const copyUser=Object.assign({}, user) //(대상객체, 출처객체) --> 얕은복사(리터럴생성)
                              // --> 동일const copyUser={...user}
                              console.log(copyUser === user) //false
                              user.age=22
                              console.log('user', user) //22
                              console.log('copyUser', copyUser) //25
   
                       + 깊은 복사(참조 데이터 내부에 또 다른 참조 데이터가 있을때)(복잡해서 loadsh로 구현)
                          객체의 실제 값을 복사한다
                       
                + 데이터 가져오기, 내보내기   
                <img src="https://user-images.githubusercontent.com/106851561/183827144-0782c842-82c4-4556-bc7f-abdb1122cb7e.png" width="400" height="400">   
                
                기본통로로 나가는경우는 이름이 없어도 됨.   
                이름을 설정하려면 {}로 묶어서 사용해야함.   
                **기본통로는 하나의 파일만 내보냄**   
                **이름설정통로는 여러개 가능**    
                **default는 하나의 파일에서 딱 한번만 사용가능**   
                
                
                        import * as R from './getRandom' // *는 와일드카드 : 모든~

                        console.log(R) // 모든 데이터 가져옴
                
                
                
                + lodash의 유용한 메소드들
                
                   + uniqBy(배열, '구분할속성') : 중복 제거 (합칠 데이터가 하나일 때 사용)
                   + unionBy(배열, 합칠배열, '구분할속성') : 중복 제거와 동시에 합쳐줘서 반환해줌 (합칠 데이터가 여러개 일때 사용)
                   
                              import _ from 'lodash'

                              const usersA=[
                                  {userId:'1', name:'whoknow'},
                                  {userId:'2', name:'Neo'}
                              ]

                              const usersB=[
                                  {userId:'1', name:'whoknow'},
                                  {userId:'3', name:'Amy'}
                              ]

                              const usersC=usersA.concat(usersB)
                              console.log(usersC)
                              console.log('uniqBy', _.uniqBy(usersC, 'userId'))

                              const usersD= _.unionBy(usersA, usersB, 'userId')
                              console.log('unionBy', usersD)
                        
                + find(배열, 데이터) : 배열과 데이터 값 반환
                + findIndex(배열, 데이터) : 인덱스 값 반환
                + remove(배열, 데이터) : 삭제
                
                        import _ from 'lodash'

                        const users=[
                            {userId:'1', name:'whoknow'},
                            {userId:'2', name:'Neo'}
                        ]

                        const foundUser= _.find(users, {name:'Neo'})
                        const foundUserIndex= _.findIndex(users, {name:'Neo'})
                        console.log(foundUser) //{userId:'2', name:'Neo'}
                        console.log(foundUserIndex) //1

                        _.remove(users, {name:'whoknow'})
                        console.log(users)

           + Json(자바스크립트의 객체 표기법) - 키 값 쌍   
             문자 데이터 형태로 저장되고, js파일에서 로드하면 자동으로 객체 데이터로 불러와진다.   
             **Json.stringify()를 하면 다시 문자데이터로 변환된다.**   
             **Json.parse()를 하면 다시 객체데이터로 변화된다.**   
             
           + Storage
              + localstorage : 데이터가 만료되지 않음 **활용성 높음, 문자데이터로 전부 변환해야함**
              + sessionstroage : 페이지 닫으면 데이터 지워짐
      
      
                              const user={
                                  name:'whoknow',
                                  age:22
                              }
                              localStorage.setItem('user', JSON.stringify(user)) //localstorage 부분 설정(문자열변환)
                              const str=localStorage.getItem('user') //localstorage로부터 값 가져오기
                              const obj=JSON.parse(str) //객체 데이터로 변환
                              obj.age=21 //수정
                              console.log(obj) //출력, 여기까지는 콘솔값만 수정
                              localStorage.setItem('user', JSON.stringify(obj)) //localstorage부분 설정
             
             
           + omdbapi(querystring 형태)
              
              <img src="https://user-images.githubusercontent.com/106851561/183841167-60987101-3923-4c66-aeaf-2da04c361c71.png" width="800" height="300">   
              
             + Axois : Json, 즉 문자데이터 형태로 되어있는 것들을 main.js 에서 처리하기 위해 도와주는 도구 

      
                        import axios from 'axios'

                        function fetchMovies(){
                            axios
                            .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') //요청
                            .then(res => { //콜백
                                console.log(res)
                                const h1El=document.querySelector('h1')
                                const imgEl=document.querySelector('img')
                                h1El.textContent=res.data.Search[0].Title //제목
                                imgEl.src=res.data.Search[0].Poster //포스터를 웹브라우저에 띄우기
                            }) //메소드 체이닝, 서버요청 -> 응답으로 반환
                        }

                        fetchMovies()
                        
                        
                        
          
          + 정규표현식   
             문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)   
             간단한 문자 검색부터 이메일, 패스워드 검사 등을 정규식 패턴으로 빠르게 수행 가능





