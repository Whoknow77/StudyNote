# Git Commit Convention

## 필요성

- 커밋 로그 가독성 증가
- 더 나은 협업
- 더 쉬운 코드 유지보수

----------------------------------------------------------------------------------


## 기본 구조

```

type: subject

body

footer

```

보통 제목, 본문, 꼬리말로 작성한다.

어떻게 보다는 무엇을, 왜를 중심으로 적는다.

**반드시 제목과 본문을 한 줄 띄워 분리한다.**
==> 로그로 확인하였을 때, 제목만 보이므로(본문과 별개로) 가독성이 좋다!



## Type

|타입|내용|
|:---|:------------------:|
|feat|새로운 기능을 추가|
|fix|버그 수정|
|!HOTFIX|급하게 치명적인 버그를 고쳐야하는 경우|
|style|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|refactor|프로덕션 코드 리팩토링|
|docs|문서수정
|test|테스트 코드, 리팩토링 테스트 코드 추가|
|chore|빌드 업무 수정, 패키지 매니저 수정|

위 7가지 정도가 보편적으로 remove, move, rename, ci, build 등을 사용하기도 한다.


## subject

- 대문자로 작성, 마침표를 붙이지 않고, 50자를 넘기지 않는다.

- 과거시제가 아닌 **명령어**로 작성한다.

    ```
    Fixed --> Fix
    Added --> Add
    Modified --> Modify
    ```

## body(선택사항)

- 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성

- 최대한 상세히, 어떻게 변경했는지보다는 무엇을, 왜 변경했는지 작성


## footer(선택사항)

- issue tracker id를 작성할 때 사용


    ```
    type: #issue number
    ```
    형식으로 작성

- issue tracker id

        - Fixes : 이슈 수정중(아직 해결되지 않음)

        - Resolves : 이슈를 해결했을 때 사용

        - Ref : 참고할 이슈가 있을 때 사용

        - Related to : 해당 커밋에 관련된 이슈 번호(아직 해결되지 않음)
  

## Example1
``` 
Feat: 회원 가입 기능 구현

SMS, 이메일 중복확인 API 개발

Resolves: #123
Ref: #456
Related to: #48, #45
```

## Example2
```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <pieter.wuille@gmail.com>
Date:   Fri Aug 1 22:57:55 2014 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.

```




# 참고문서

https://velog.io/@archivvonjang/Git-Commit-Message-Convention

https://www.youtube.com/watch?v=OJqUWvmf4gg

https://aroundlena.tistory.com/55

https://meetup.nhncloud.com/posts/106
