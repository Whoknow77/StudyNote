# Git branch 전략

## 정의

- 여러 개발자가 하나의 저장소를 사용하는 환경에서 저장소를 효과적으로 활용하기 위한 work-flow

    즉, 브랜치 생성에 규칙을 만들어서 협업을 유연하게 하는 방법론

## 필요성

- 문제 상황

    - 이 브랜치는 무엇을 위해 만든 브랜치?

    - 어떤 브랜치를 끌어와서 개발을 시작해야 할지?

    - 어떤 브랜치가 최신인지?

    - 어디에 Push를 보내야 할지?

    등등 Git branch 전략이 없다면 많은 문제상황에 직면하게 되어 불편함이 발생한다.


## 종류

- ### Git-Flow 전략
    
    -  **특징**

        - 많은 기업에서 표준으로 사용하는 브랜치 전략

        - Github Flow와 다르게 5개의 브랜치를 운영하여 관리

        - **배포 주기가 길고 팀이 여력이 있는 경우 적합**

    -  **구조**


        - **메인 브랜치**

            - 항상 남아있다.
  

            1) Master

                 제품으로 **배포**할 수 있는 브랜치

            2) Develop

                 개발자들이 **개발**을 하는 브랜치
    

        - **보조 브랜치**

            - 메인 브랜치와 다르게 사용을 마치면 브랜치를 **삭제**한다.

            -  보통 개발자 저장소에만 있고, origin(원격 저장소)에는 push하지 않는다.

            1) feature

                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl7ghN%2FbtrlEIzgZhO%2FYr4Bq3K2Rdmo37VhmG9KBk%2Fimg.png">

                - 하나의 **새로운 기능**을 만들 때 생성

                - 완성시에 **develop** 브랜치로 merge
                
            2) release
            
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfrnW4%2FbtrlKeQT8mr%2FTw2TZEkr39sZIeoKUJES8k%2Fimg.png">

                - 배포를 위한 최종적인 **버그 수정**

                - 완성 시에 **develop**브랜치로 merge, 태그 추가
                

            3) hotfix

                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fct9FBn%2FbtrlGJqMMST%2FJgZHcI2gO5IkcXwwMNckA0%2Fimg.png">

                - Production에 버그가 발생하면 빠른 수정을 위해 생성

                - 버그를 해결하면 보통 제거하는 일회성 가지

                - 완성 시에 **develop**브랜치와 **master** 브랜치로 merge

    - ### 흐름

        -  **신규 기능 개발**

            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc4oHhU%2FbtrlEsJEeue%2FCao2ePzB1Bdx8OAH9eAKk0%2Fimg.png">

            1) develop 브랜치로부터 신규 개발할 기능을 위한 **feature**브랜치를 생성한다.
            2) 기능을 완성하면 **develop** 브랜치에 merge를 한다.

            <br>
            <br>

        - **라이브 서버로 배포**

            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLxHoz%2FbtrlPoeoynz%2FU795uDv8y9GkT4tHtLdykK%2Fimg.png">

            3) feature 브랜치들이 모두 develop 브랜치에 merge 되었다면 QA(품질 보증)을 위해 **release** 브랜치를 생성한다.
            4)  오류 확인 시, release 브랜치 내에서 수정 진행
            5)  QA와 테스트 모두 통과시에 배포를 위해 **release** 브랜치를 **master** 브랜치로 merge(**develop** 브랜치 쪽으로도 merge)

            <br>
            <br>

        - **배포 후 관리**

            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbw4I9Q%2FbtrlOVXIxW0%2Fzf8ol3GOUpRdUAEfyduKZ0%2Fimg.png">

            1) 배포된 라이브 서버(master)에서 버그가 발생하면, **hotfix** 브랜치를 생성하여 버그 픽스를 진행한다.
            2)  종료된 버그 픽스를 **master**와 **develop** 브랜치에 merge한다.

            <br>
            <br>
        
        - **전체적인 흐름**

            <img src="https://ifh.cc/g/CJyyBW.jpg">

        

- ### Github-flow 전략

    - 특징

        - Git-Flow 방식에 비해 **단순함**

        - **자동화** 개념이 들어가 있다.

        - 어떤 이유로든 새로운 브랜치를 생성하는 것으로 시작됨

        - 이때 체계적인 분류 없이 브랜치 하나에 의존하게 되기 때문에 **브랜치 이름을 통해 의도를 명확하게** 드러내는 것이 중요함.

        - **수시로 배포가 일어나는 프로젝트에 유용**


    - 흐름

        1) 브랜치 생성
   
            <img src="https://ifh.cc/g/RYOBY8.png">

            - Master로부터 **기능추가, 버그 수정 작업**을 위한 새로운 브랜치 생성

            - **commit 메시지와 브랜치 이름**은 **최대한 정확하고 간결**하게 작성

        2) 기능 개발, 버그 수정

            <img src="https://ifh.cc/g/xjNJGZ.png">

            - 작업을 하며 기능별로 commit

            - commit은 서버의 동일한 브랜치에 push(Git flow와 차이점)

            - 원격 저장소에 **수시로 push**해 다른 사람들도 확인할 수 있도록 해준다.

        3) PR(Pull Request 생성)

            <img src="https://ifh.cc/g/fo7RoX.png">

            - Pull Request는 **코드 리뷰**를 도와주는 시스템

            - 코드를 **공유**하고, **리뷰** 받음


        4) 리뷰와 논의

            <img src="https://ifh.cc/g/oROSWv.png">

            - PR을 통해 팀원과 작성한 코드에 대한 리뷰와 논의를 함

        5) 공개 및 테스트

            <img src="https://ifh.cc/g/vmjnC0.png">

            - merge 이전에 라이브 서버(테스트 환경)에 배포

            - 오류 발생 시 원래의 master 브랜치를 다시 배포하여 roll back

        6) 합치기(Merge)

            <img src="https://ifh.cc/g/2pC4pH.png">

            - master로 merge가 일어나면 자동으로 배포가 되도록 설정해놓는다.(CI/CD)

            <br>

## 무엇을 사용해야 할까?

- ## Git flow

    1개월 이상의 **긴 호흡**으로 개발하여 주기적으로 배포, QA 및 테스트, hotfix 등 수행할 수 있는 여력이 있는 팀

- ## Githubflow

    **수시로 릴리즈** 되어야 할 필요가 있는 서비스를 지속적으로 테스트하고 배포하는 팀






# 참고문서

https://www.youtube.com/watch?v=wtsr5keXUyE

https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-github-flow-git-flow-%F0%9F%93%88-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5