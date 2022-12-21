# Git 사용법 + 약간의 원리

## git

버전관리 시스템

## git init
새로운 저장소 생성할 때 사용, 초기화의 의미

## git add
commit할 것을 정의함

## git commit
버전관리를 이걸로 함(코드 변화 기록)

## git log
지금까지의 역사 확인 가능

## git log -p
각각의 커밋간의 차이점 확인 가능

## git diff
작성한 코드가 이전 커밋과의 차이점

## reset VS revert
현재의 로그를 취소해서 과거로 돌아가기
 

## git commit -a
수정하거나 삭제한 파일을 자동으로 add해줌

## git commit -m " "
commit 메시지를 입력함

## git commit -am
자동으로 add함과 동시에 commit 메시지 입력

## gitstory(git의 원리)
**add**

파일명이 달라도 내용이 같으면 같은 객체를 가리킴

**commit**

이것도 객체 개념 tree ~~~~~~안에는 파일들이 있음


이전 커밋을 나타내는 parent를 가지고 있음
각각의 버전마다 tree가 다름

**branch**

기본 branch는 master

git branch ~~
~~로 새로운 branch 생성

git checkout ~~
기존에 체크되어있던 master에서
~~로 옮김

branch마다 파일버전이 다름

merge를 통해 합칠수 있음

### stash

작업이 끝나지 않았을때 작업내용을 숨겨놓음(버전 관리가 되고 있는 파일에 대해서만)

branch : commit을 가리키는 파일

head : branch를 가리키는 파일

## Branch의 원리

초기에 git init을 하면 .git에는 head라는 텍스트 파일이 있고, refs/heads/master 를 가리키고(branch가 다른 경우 그 branch를 가리킨다, 초기에는 master)
,그 파일은 가장 최근에 커밋한 커밋의 오브젝트 아이디 값을 가지고 있기 때문에 git log에서 head 파일을 보고 -> master 파일을 보고 -> commit object 아이디 값을 통해서 현재 가장 최신 커밋을 알아냄

이전 커밋은 parent를 통해서 탐색할 수 있음

HEAD, branch은 바이너리 파일이 아닌 텍스트 파일로 존재한다.

master, exp branch가 각각 존재할때 서로 다른 내용을 담는 common.txt파일을 가지고 있는데 merge를 하게 되면 내용이 합쳐진다.
--> 충돌할 때?

branch가 같은 파일을 참조할때 각각 다른 내용으로 수정을하게되면 충돌이 일어난다.

==>  충돌해결방법

겹치는 부분을 직접 수정해야 하면됨


###  rest의 원리

branch가 가리키는 최신 커밋을 바꿈

취소한 커밋은 어디..?

git은 웬만해서는 정보를 지우지 않음
(보이지 않을 뿐)

reset 취소 하고 싶을 땐?

ORIG_HEAD : 삭제한 커밋을 가리킴, git reset --hard ORIG_HEAD를 통해 취소할 수 있음 

logs/refs/heads/master는 사건들을 기록해 놓음

보통 hard 쓰면 됨 !!

### 3 way merge

2 way merge는 base를 참조하기 않고 합침

3 way merge는 base를 참조(훨씬 더 좋음)

-->  2 way merge에 비해 conflict를 알아서 해결 함

## 원격 저장소!!(백업, 협업)
자신이 저장하는 곳은 지역저장소

### git clone
원격저장소의 내용을 로컬 저장소로 가져옴

### git remote add origin 주소

현재 로컬저장소에 원격저장소를 연결(add)시킨다. 

또한 주소는 기니까 주소에 origin이라는 별명 부여

### git push -u origin master

로컬 저장소의 내용을 원격 저 소로 보냄(업로드)

이후에는 git push만 해주면 됨

### git pull
원격저장소의 내용을 지역저장소로 땡겨옴

### pull vs fetch

보통은 pull을 쓴다

공통적으로 원격저장소로부터 데이터 가져옴

**pull**

내부적으로 지역저장소, 원격저장소가 가리키는 commit이 가장 최근꺼로 동일(다운받고 병합까지 해줌)

**fetch**

내부적으로 원격저장소만 가장 최근 commit을 가리킨다.(다운만받고 병합은 안해줌)
따로 merge를 해줘야 함

### branch vs tag

branch : 브랜치가 가리키는 커밋이 달라짐

tag : 특정 커밋을 가리킴

그외 메커니즘은 완전히 똑같음


tag를 원격저장소에 업데이트 하려면 push에 --tags를 옵션으로 추가해야 함

### rebase vs merge

**rebase**
는 좀 어렵고 위험하다.
초심자는 안쓰는게 좋음

***merge***는 병렬로, rebase는
일렬로 파악이기때문에 파악이 잘 됨




-----------------------------------------
다시 수정해야함