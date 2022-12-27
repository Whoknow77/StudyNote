
**add**

파일명이 달라도 내용이 같으면 같은 객체를 가리킴

**commit**

이것도 객체 개념 tree안에는 파일들이 있음

이전 커밋을 나타내는 parent를 가지고 있음
각각의 버전마다 tree가 다름

작업트리 - index - 저장소

와같은 구조가 있을 때 작업트리의 내용을 commit을 하면 저장소로 바로 전달되는것이 아니고 index에 등록이 된다.(stage) 이후에 PUSH를 통해 index의 내용을 저장소로 전달한다.

**branch**

기본 branch는 master

*git branch*

새로운 branch 생성

*git checkout*

기존에 체크되어있던 master에서 다른 branch로 옮김

초기에 git init을 하면 .git에는 head라는 텍스트 파일이 있고, refs/heads/master 를 가리키고(branch가 다른 경우 그 branch를 가리킨다, 초기에는 master)
그 파일은 가장 최근에 커밋한 커밋의 오브젝트 아이디 값을 가지고 있기 때문에 git log에서 head 파일을 보고 -> master 파일을 보고 -> commit object 아이디 값을 통해서 현재 가장 최신 커밋을 알아냄

head -> branch -> commit 순서로 참조를 한다.

head와 branch 파일은 binary가 아닌 text파일로 존재한다.

master, exp branch가 각각 존재할때 서로 다른 내용을 담는 common.txt파일을 가지고 있는데 merge를 하게 되면 내용이 합쳐진다.
--> 충돌할 때?

branch가 같은 파일을 참조할때 각각 다른 내용으로 수정을하게되면 충돌이 일어난다.
<img src="https://ifh.cc/g/6mvPar.png">

**충돌해결방법**

<img src="https://ifh.cc/g/CAsr75.png">

<<<<<<<<< >>>>>>>>>> 부분을 통해
겹치는 부분을 직접 수정해야 하면 됨

###  reset의 원리

branch가 가리키는 최신 커밋을 바꿈

취소한 커밋은 삭제되지 않고 따로 저장된다.

git은 웬만해서는 정보를 지우지 않음
(보이지 않을 뿐)

**reset을 취소하고 싶으면?**

ORIG_HEAD : 삭제한 커밋을 가리킴
 
git reset --hard ORIG_HEAD를 통해 취소할 수 있음 

logs/refs/heads/master는 사건들을 기록해 놓음

**3 way merge**

2 way merge는 base를 참조하기 않고 합침

3 way merge는 base를 참조(훨씬 더 좋음)

-->  2 way merge에 비해 conflict를 알아서 해결 함

## 원격 저장소!!(백업, 협업)

### git remote add origin 주소

현재 로컬저장소에 원격저장소를 연결(add)시킨다. 

또한 주소는 기니까 주소에 origin이라는 별명 부여

### git push -u origin master

로컬 저장소의 내용을 원격 저장소로 보냄(업로드)

이후에는 git push만 해주면 됨(연결 불필요)

### pull vs fetch vs clone

**fetch**

단순히 원격 저장소의 내용을 **확인**만 하고 로컬 저장소와 병합은 하고 싶지 않은 경우에 사용

**pull**

내부적으로 지역저장소, 원격저장소가 가리키는 **commit이 가장 최근꺼**로 동일(다운받고 병합까지 해줌)

fetch + merge

**clone**

pull과 다르게 remote 설정을 자동으로 한다.

pull은 리모트 설정이 이미 되어있을 떄 업데이트 사항 등을 다운로드 할 떄 사용한다.

따라서 프로젝트를 시작하는 초기에만 clone을 사용하고, 그 이후엔 pull을 사용한다.


git init + git remote add origin {{ URL }} + git pull origin master


**원격 저장소의 전체적인 구조**
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdcc3ub%2FbtqNQamP35o%2FhmXwFIBPB82ea5NX3ZwQyK%2Ftfile.svg">

**branch vs tag**

branch : 커밋할때마다 브랜치가 가리키는 커밋이 달라짐(고정되지 않음)

tag : 특정 커밋을 가리킴(고정)

그외 메커니즘은 완전히 똑같음

tag를 원격저장소에 업데이트 하려면 push에 --tags를 옵션으로 추가해야 함

**rebase vs merge**

rebase
는 좀 어렵고 위험하다.
초심자는 안쓰는게 좋음

merge는 병렬로, rebase는
일렬로 파악이기때문에 파악이 잘 됨

<img src="https://ifh.cc/g/OtPK9V.jpg">

**출처**

https://www.youtube.com/watch?v=hFJZwOfme6w&list=PLuHgQVnccGMA8iwZwrGyNXCGy2LAAsTXk

https://backlog.com/git-tutorial/kr/

https://chaeyoung2.tistory.com/43
</details>

--------------------------------------------------------------------------------------
