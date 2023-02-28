# Pull Request

## 하는 이유

- **코드 리뷰를 위해**

  - Push로 협업했을때, 다른 사람의 commit을 볼 일이 많지 않고, master branch와 merge할 때서야 보게되는데, Pull Request는 당장 merge하지 않는다는 규칙이 Pull Request를 보고, 코드에 신경쓰게되고 **어떤 작업이 언제 적용**되었는지 알 수 있다.

- Push 권한이 없는 오픈 소스 프로젝트에 기여할 때

## 방법

1. ### 생성 or Fork

   - 원본저장소 관리자는 Repersitory 생성 후 소통할 Collborator를 초대한다.(나중에 Settings 에서도 초대 가능)

   - Collaborator는 Fork를 통해 Repersitory를 복사해 자신의 Repersitory로 가져온다.

   - Fork 저장소의 수정 내역은 Pull request로 요청하고, merge를 거쳐야만 원본 저장소에 업데이트 된다.

2. ### Clone

   생성한 Repersitory를 clone하여 로컬저장소에 복제하며 원격저장소와 연결이 된다.

   ```
   $ git clone (URL)
   ```

   처음에는 origin이라는 별명이 기본으로 추가되어 있지만 별명이 필요하다면

   ```
   $ git remote add post(별명) (URL)
   ```

   식으로 설정한다.

3. ### branch 생성

   코드를 수정하거나 추가하는 작업은 branch를 만들어서 진행한다.

   ```
   $ git checkout -b develop
   ```

4. ### 수정 작업 후 add, commit, push

   코드 수정후 add, commit, push 한다.

   ```
   $ git push -u origin develop
   ```

5. ### Fetch

   이때 원본 저장소에 수정내역을 업데이트 하기 전에, 다른 사람들이 먼저 수정한 내역이 있는지 확인한다.

   ```
   $ git fetch origin
   ```

6. ### Conflict 해결

   만약 다른 사람이 커밋한 내역으로 인해 Conflict가 발생했다면, Conflict를 해결하고 다시 fork한 저장소에 Commit & Push 한다.

7. ### Pull Requset 생성

- push 완료후 자신의 github 저장소에서 Compare & pull request버튼이 활성화 되어있는걸 확인할 수 있다.

- 버튼을 선택한다.

- 원본저장소의 어떤 브랜치로 머지할지 선택한 후 Create Pull request 버튼 클릭 해준다.
- Pull request 타이틀과 내용을 작성해주면 Pull request가 완료 된다.

8. ### Merge Pull Request

   PR을 받은 사람은 코드 변경내역을 확인하고 merge 해주면 원본 저장소에 내 수정 내역이 반영된 모습을 확인할 수 있다.

9. ### Merge한 저장소 동기화

   Merge가 완료되면 로컬 코드와 원본의 코드를 병합하고 최신의 상태를 유지하게 위해 동기화한다.

   ```
   $ git pull origin(remote 별명)
   ```

   외부 원본 저장소의 최신 내용을 가져와 로컬 코드와 원본 저장소의 코드를 동기화한다.

   ```
   $ git branch -d develop(브랜치 별명)
   ```

   작업하던 로컬의 branch를 삭제한다.

   나중에 추가로 작업할 일이 있으면 git pull origin(remote 별명) 명령을 통해 원본 저장소와 동기화를 진행하고 3~9을 반복한다.

## 참고자료

https://velog.io/@zansol/Pull-Request-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

https://www.youtube.com/watch?v=uvsz2XgRPfM&list=PLuHgQVnccGMBXv1OKe3Hn3Jq6F735-uWm

https://velog.io/@jisubin12/Github-%EC%99%B8%EB%B6%80%EC%A0%80%EC%9E%A5%EC%86%8C-fork-pull-request-%EB%8F%99%EA%B8%B0%ED%99%94-%ED%95%98%EA%B8%B0

https://dev-youngjun.tistory.com/47 (자세함)
