# 커밋 되돌리기(reset, revert)

둘다 이전 커밋으로 되돌린다는 점에서는 동일하나

github 같은 온라인 저장소에 올라가 다른 사람간 코드 공유의 유(revert)무(reset)에 따라서 달라진다.

## git reset

origin에 올리지 않고 로컬에 커밋이 머물렀다면, 올라갔어도 나만 해당 브랜치를 사용한다면 reset를 쓰셔도 좋다.

사용법은 `git reset --option 돌아갈 커밋`이다.

## 이전 커밋 삭제

```
# git reset HEAD~1  # 최근 1개의 커밋 삭제 + 변경된 파일은 unstaging 상태로 유지
# git reset HEAD~n  # 최근 n개의 커밋 삭제 + 변경된 파일은 unstaging 상태로 유지

# git reset --hard HEAD~1  # 최근 1개의 커밋 삭제 + 변경된 파일도 함께 되돌림
# git reset --hard HEAD~n  # 최근 n개의 커밋 삭제 + 변경된 파일도 함께 되돌림

# git reset --hard [커밋ID]~n  # 해당 커밋 ID 기준 n개의 커밋 삭제 + 변경된 파일도 함께 되돌림
```

### 직전 커밋 삭제

```
# git reset HEAD~1  # 최근 1개의 커밋 삭제 + 변경된 파일은 unstaging 상태로 유지
# git reset HEAD~n  # 최근 n개의 커밋 삭제 + 변경된 파일은 unstaging 상태로 유지

# git reset --hard HEAD~1  # 최근 1개의 커밋 삭제 + 변경된 파일도 함께 되돌림
# git reset --hard HEAD~n  # 최근 n개의 커밋 삭제 + 변경된 파일도 함께 되돌림

# git reset --hard [커밋ID]~n  # 해당 커밋 ID 기준 n개의 커밋 삭제 + 변경된 파일도 함께 되돌림
```

## git revert

## 참고자료

https://guiyomi.tistory.com/124

https://kyounghwan01.github.io/blog/etc/git/git-reset-revert/#reset-revert-%E1%84%8E%E1%85%A1%E1%84%8B%E1%85%B5
