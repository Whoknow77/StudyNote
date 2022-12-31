# 시스템 프로그래밍

## 왜 배우는가?

하드웨어와의 긴밀하게 연결된 프로그래밍으로 최적화 및 주어진 환경에서 최대 효율 이끌어내기위해   
보통의 코딩이 큰 블럭을 조립하는 것이라면 시스템 프로그래밍은 작은 블럭으로 큰 블럭을 조립하는 것이다.  

## 리눅스 기본 명령어

- 기본 지식  
    / : 루트 디렉토리  
    ~ : Home 디렉토리(현재)  
    * 절대경로 : 현재 디렉토리가 /(루트 디렉토리)이고, 접근시 cd/~/~/~/~ 와 같이 순차적으로 접근해야 한다.
        
    * 상대경로 : 현재 디렉토리가 일하고 있는 디렉토리이다.  
    현재 디렉토리 : .  
    상위 디렉토리 : ..  등을 사용하여 접근한다!




1) pwd  
   현재 작업중인 디렉토리 정보 출력!
   ```
   $ pwd
    /home/itholic
    ```

2) cd(change directory)  
   경로 이동, .. 사용 시 상위 디렉토리로 이동
   ```
    $ cd /home/itholic/mydir
    $ pwd
    /home/itholic/mydir


    $ cd ..
    $ pwd
    /home/itholic
    ```


3) ls  
   디렉토리 목록 확인.
    ```
    $ ls
        testfile1  testfile2  testfile3


        $ ls -l(파일 정보)
            total 0
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile1
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile2
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile3


        $ ls -a(보이지 않는 파일도 보이게 함
         히든 파일은 .으로 시작함)
        ./  ../  testfile1  testfile2  testfile3


        $ ls -al
            total 4
            drwxr-xr-x 1 itholic 197121 0 11월  6 22:08 ./
            drwxr-xr-x 1 itholic 197121 0 11월  6 22:08 ../
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile1
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile2
            -rw-r--r-- 1 itholic 197121 0 11월  6 22:08 testfile3

        $ ls -s(파일 크기)

        $ ls 파일이름 :   
        접근하지 않고도 안의 파일 조사 가능
    ```



4) cp  
   파일 혹은 디렉토리를 복사, 디렉토리 복사시 -r 옵션 줘야함.  
   -r* : 모든파일
   ```
    $ ls
    testdir/  testfile


    $ cp testfile testfile_cp
    $ ls
    testdir/  testfile  testfile_cp


    $ cp -r testdir testdir_cp
    $ ls
    testdir/  testdir_cp/  testfile  testfile_cp

    $ cp -r* directory2(디렉토리2안으로 파일 모두복사)

    $ cp -r directory directory2 (디렉토리 통째복사)
    ```


5) mv  
   파일 혹은 디렉토리 이동  
    실제로 원하는 위치로 이동할때도 사용하지만, 이름을 변경하는 용도로도 사용한다.  
    cp와는 달리 디렉토리를 이동할때도 별다른 옵션이 필요 없다.
    ```
    $ ls
    testdir/  testfile


    $ mv testfile testfile_mv
    $ ls
    testdir/  testfile_mv

    
    $ mv testfile_mv testdir/
     
    ```

6) mkdir  
    디렉토리생성!
    ```
    mkdir testdir
    ```

    - 권한 정해서 만들기  
    (유저만 r,w,e 가능)  
    
    ```
    mkdir -m 700 sysprog2
    ```

    - 다중 디렉토리 생성  
    ```
    mkdir -p /gnsdh/1/2/3
    ```

7) rmdir  
    디렉토리 안에 파일이 없어야 삭제가능
     

7) rm  
    파일이나 디렉토리 삭제, 디렉토리 삭제시 r옵션을 줘야함,  
    -f옵션을 주면 삭제여부 묻지않고 바로삭제

    ```
    rm -f 파일이름

    rm -rf 디렉토리이름
    -> 되도록 피하기
    ```

8) cat  
    파일의 내용 출력, 여러개의 파일 합쳐서 하나의 파일로 만들기, 기존의 한 파일의 내용을 다른 파일에 덧 붙이기 등에 사용된다.

    ```
    cat file1
    1
    ```

9) File Permission(파일 권한)  
    Read(r), Write(w), Execute(e)  
    각각 숫자 4,2,1 을 의미함   

    ex) 6-> read/write, 5-> read/execute   

    -User-Group-Others-- 순으로 권한이 보여짐.  
    
    권한을 줄때(+) : chmod 664 tmp.txt    

    또는 chmod o +x ./tmp.txt
    (owner, group : read/write, other:read only)  

    권한을 뺄때(- 사용) : chmod ug-w ./tmp.txt    

    => 쓰기권한 삭제

    ```
    -rw-r--r--

10) pwd(현재 경로의 절대 경로를 알려줌)  

11) makefile  
소스를 컴파일하고, 명령어를 실행하는데 도와주는 스크립트 파일  

    바뀐 파일들만 컴파일 하는 것이 가능



## GCC 컴파일 옵션 정리

- 컴파일 : 소스 코드를 컴퓨터가 이해할 수 있는 어셈블리어로 변환하는 과정  

- 링크   
    + 서로 다른 파일에 흩어져 있던 함수나 클래스들을 한 데 묶어서 링크해주는 작업

    + main 함수 안에 foo 함수와 bar 함수가 어디에 정의되어 있는지 위치를 찾고 제대로 함수를 호출할 수 있게 된다


1) gcc 파일명(.c)  
    Default로 out 파일이 생성된다.    

2) gcc -c 파일명(.c)  
    오브젝트 파일을 생성한다.(링크 X)  


3) gcc -c 오브젝트파일명(.o) 파일명(.c)    

    gcc -o 실행파일명(.out)   
    오브젝트파일명(.o)

4) **gcc -o 실행파일명 파일명**  
    실행 파일을 만든다.  
    3번을 한줄로!

5) -g  
    디버깅



## makefile

- 쓰는이유
    - 각 파일에 대한 반복적 명령의 자동화로 인한 시간 절약
    
    - 프로그램의 종속 구조를 빠르게 파악 할 수 있으며 관리가 용이

    - 단순 반복 작업 및 재작성 최소화

- 예시

<img src="https://t1.daumcdn.net/cfile/tistory/236F9B4D56E5904C37">


1) **기본적인 컴파일 과정**


    **Object 파일 생성**

        -c 옵션 : object 파일 생성
        -o 옵션 : 생성 될 파일 이름 지정
        
        gcc -c -o memo.o memo.c  
        gcc -c -o calendar.o calendar.c 
        gcc -c -o main.o main.c

        여기서는 -o 옵션을 넣지 않아도 object 파일이름이 (c파일이름).o로 자동 생성 됩니다.  
        하지만  실행 파일 생성시 -o 옵션을 넣지 않으면 모든 파일이 a.out 이라는 이름을 가지게 되므로 여러 개의 실행 파일을 생성해야 할 때 효율적인 옵션입니다


    **Object 파일들을 묶어 컴파일을 통해 실행 파일 생성하기**

        gcc -o diary_exe main.o memo.o calendar.o

    **결과 확인하기**

        ./diary.exe

2) **make를 이용한 컴파일 과정**

    **구성**

        -목적파일(Target) : 명령어가 수행되어 나온 결과를 저장할 파일 
        -의존성(Dependency) : 목적파일을 만들기 위해 필요한 재료 
        -명령어(Command) : 실행 되어야 할 명령어들 
        -매크로(macro) : 코드를 단순화 시키기 위한 방법

    **makefile 작성규칙,구조**

        목표파일 : 목표파일을 만드는데 필요한 구성요소들 
        (tab)목표를 달성하기 위한 명령 1 
        (tab)목표를 달성하기 위한 명령 2


        // 매크로 정의 : Makefile에 정의한 string 으로 치환한다. 
        // 명령어의 시작은 반드시 탭으로 시작한다. 
        // Dependency가없는 target도 사용 가능하다.

3) **작성**

    **vi makefile**

    <img src="https://t1.daumcdn.net/cfile/tistory/253E224B56E5924D28">

    더미타겟 : 파일을 생성하지 않는 개념적인 타겟

    **make clean**

    현재 디렉토리의 모든 object 파일들과 생성된 실행 파일인 diary_exe를 rm명령어로 제거 해준다.

    **make(make 파일 실행)**

(4) **매크로사용**

**생략**



                    









## 프로세스
현재 실행중인 프로그램을 의미한다. 

프로그램 : 사용자가 컴퓨터에 작업을 시키기 위한 명령어의 집합, 스크립트 언어

프로세스 : 스크립트 언어를 컴파일러를 통해 기계어 프로그램으로 실행 파일이라고 함 

### 프로세스 생성 과정

<img src="https://t1.daumcdn.net/cfile/tistory/9930003359AF43C122">


### 프로세스 구조

<img src="https://t1.daumcdn.net/cfile/tistory/99C5253359AF4CE333">

- 텍스트 영역: 실행 코드를 저장한다. 텍스트 영역은 프로세스 실행 중 크기가 변하지 않는 고정 영역에 속한다.

- 데이터 영역 : 프로그램에서 정의한 전역 변수를 저장한다. 전역 변수는 프로그램을 작성할 때 크기가 고정되므로 고정영역에 할당된다.

- 힙(heap): 프로그램 실행 중에 동적으로 메모리를 요청하는 경우에 할당되는 영역으로, 빈 영역→할당→할당 해제 처럼 상태가 변하는 가변 영역이다.

- 스택(stack): 프로그램에서 정의한 지역 변수를 저장하는 메모리 영역으로, 지역 변수를 정의한 부분에서 할당해 사용한다.

- 빈 공간: 스택이나 힙과 같이 가변적인 메모리 할당을 위해 유지하고 있는 빈 메모리 영역이다. 프로세스에 할당된 빈 메모리 영역이 모두 소진되면 메모리 부족으로 프로그램의 실행이 중단될 수도 있다.


### PCB(Process Control Block)

OS가 관리하는 자료구조로, 프로세스들을 잘 관리할 수 있도록 각 프로세스들의 상세한 정보를 저장함

각 프로세스가 생성될 때마다 고유의 PCB가 생성되고, 프로세스가 종료되면 PCB도 제거됨

프로세스가 진행될 때, OS 스케줄러 등으로 인해 다른 프로세스가 CPU를 사용해야 한다면, 지금까지 얼마나 진행했는지의 여부를 기록해두어야 함. 이런 내용들이 모두 PCB에 들어 있음

CPU가 처리하던 작업의 내용을 PCB에 저장하고, 다시 CPU를 점유해 일을 해야할 때 PCB에서 불러와서 계속할 수 있게 됨

- **Process ID** : 프로세스 ID
- **Process State**: 프로세스의 상태로 create, ready, running, waiting, terminated의 단계가 있음
- **Program counter**: 프로세스가 다음에 실행할 명령어의 주소를 가리킴
- Registers
- Memory information
- List of open files
- Process Priority
- etc.

### 문맥교환(Context Switching)

**현재 진행하고 있는 Task(Process, Thread)의 상태를 저장하고 다음 진행할 Task의 상태 값을 읽어 적용하는 과정을 말한다.**

CPU는 하나의 Task를 실행하므로, 해당 Task가 끝날때 까지 다음 Task는 기다릴 수 밖에 없다.

하지만 사람 눈에는 동시에 돌아가는 것 처럼 보이는데 이것을 가능하게 하는게 Context Switching인데 이것을 통해 매우 빠른 속도로 Task를 바꿔 가며 실행하기 때문에 실시간처럼 보이게 된다.




https://nesoy.github.io/articles/2018-11/Context-Switching



    
### 프로세스 상태 변화  
<img src="https://t1.daumcdn.net/cfile/tistory/990E8A3359B0077606">

### 프로세스 생성

- fork() 함수  
    자기 자신을 복제한다. 

    복제 후 부모 프로세스와 자식 프로세스로 나뉜다.  
    이후 독립적으로 동시에 작동한다.  

    복제된 새로운 프로세스는 부모 프로세스와 같은 코드와 데이터를 가진다.  

    fork() 리턴값은 -1이면 실패  
    0이면 자식 프로세스  
    그 외는 부모 프로세스

- atexit 함수  
    함수를 종료할 때 수행할 함수  
    
    반환 값은 성공 시 0, 실패 시 0이 아닌 값이다.  

    등록한 함수가 여러 개일 때 등록한 역순으로 수행한다.

```
void cleanup(void) {
printf("cleaning up\n");
}
void fork6() {
atexit(cleanup);
fork();
exit(0);
}
// cleaningup 두번 호출
```



### 프로세스 식별 관련 함수

|기능|내용|
|------------------|---------------------|
|PID 검색| pid_t getpid(void);|
|부모 PID 검색| pid_t getppid(void);|
|프로세스 그룹 ID 검색|pid_t getpgrp(void);  pid_t getpgid(pid_t pid);|
|프로세스 그룹 ID 변경|int setpgid(pid_t pid, pid_t pgid);|
| 세션 리더 ID 검색|pid_t getsid(pid_t pid);|
| 세션 생성|pid_t setsid(void);|


### 좀비

자식 프로세스가 종료되었지만 부모 프로세스가 자식 프로세스의 종료 상태를 회수 하지 않았을 경우, 보통의 경우 부모가 자식의 상태를 확인하는 과정을 거치지만 그러지 못한 경우다.


### 고아

부모 프로세스가 자식 프로세스보다 먼저 종료되는 경우


### 만약에 부모 프로세스가 자원 회수를 못하는 상황에서는?

- init함수

    제일 먼저 탄생한 함수, pid가 1, 부모 프로세스가 없고, 모든 프로세스의 부모 프로세스


- 좀비 예


    ```
        void fork7()
    {
    if (fork() == 0) {
    /* Child */
    printf("Terminating Child, PID = %d\n",
    getpid());
    exit(0);
    } else {
    printf("Running Parent, PID = %d\n",
    getpid());
    while (1)
    ; /* Infinite loop */
    }
    }
    ```

   자식상태가 종료가 되었지만 부모가 wait을 안해줘서 프로세스 테이블에 자식 프로세스의 최소 정보들만 남아있는 상태(defunct)  
    kill 부모id 하면 좀비 상태의 자식 종료됨,

    
- 고아 예

    ```
        void fork8()
    {
    if (fork() == 0) {
    /* Child */
    printf("Running Child, PID = %d\n",
    getpid());
    while (1)
    ; /* Infinite loop */
    } else {
    printf("Terminating Parent, PID = %d\n",
    getpid());
    exit(0);
    }
    }
    ```
    
    자식이 살아있는데 부모가 먼저 죽은 상태

    => 자식을 kill 한다. 

    



### wait 함수  

특정 프로세스 기다리지 못함, 자식만

int wait(int *child_status)

자식 프로세스가 종료되길 기다리고, 종료된 자식프로세스의 pid값을 반환함.
```
void fork10(){
    pid_t pid[N];
    int i, child_status;
    for(i=0; i<N; i++) {
        if ((pid[i] = fork()) == 0) {
            exit(100 + i);
        }
    }
    for(i=0; i<N; i++){

        pid_t wpid = wait(&child_status); //종료된 자식 프로세스 ID 반환
        if(WIFEXITED(child_status)){ //0이 아닌값 리턴 시 자식프로세스 정상 종료
            printf("Child %d terminated with exit status %d\n", wpid, WEXITSTATUS(child_status));
        } //자식 프로세스 id, exit값 출력
    }
    }
```

**랜덤적으로 자식 프로세스의 상태가 반환된다.**


**WIFEXITED(status)**

0이 아닌 값을 리턴하면 자식프로세스가 정상 종료됨

**WEXITSTATUS(status)**

자식 프로세스의 exit()에서 인자로 주는 값을 확인할 수 있다. 대신 하위 8비트(0~255)만 가능

----------------------



### waitpid 함수  

특정 프로세스 기다리는 것이 가능하다.

또한 WNOHANG 옵션을 사용하여 block 되지 않고 다른 작업을 진행할 수 있다.

**pid_t waitpid(pid_t pid, int *status, int options);**
**
- 첫번째 인자 **pid_t pid** : **감시 대상인 자식 프로세스의 ID이다.** 자식 프로세스 ID말고도 지정가능 

    - -1 : 여러 자식 중 하나라도 종료되면 복귀(wait과 동일)
    - 0 : 현재 프로세스의 그룹 ID와 같은 그룹의 자식 프로세스가 종료되면 복귀
    - 양수 : pid에  해당하는 자식 프로세스가 종료되면 복귀
    - -1 보다 작은 경우 : 프로세스 그룹 ID가 pid의 절대값과 같은 자식 프로세스를 기다린다.

- 두번째 인자 **status** : **자식 프로세스의 종료 상태 정보**(wait과 같다)
    - 정상 종료시 : status의 하위 8비트에는 0이 저장되며, 상위 8비트에는 프로세스가 종료되게 한 exit 함수의 인자가 기록됨.

    - 비정상 종료시 : status의 하위 8비트에는 프로세스가 종료시킨 시그널의 번호가 저장되며, 상위 8비트에는 0이 저장된다.

- 세번째 인자 **options** : options에는 여러 상수 값이 있지만 WHOHANG과 0을 많이 사용한다.

    - WHOHANG : 자식 프로세스가 종료되었는지 실행 중인지만 확인하고 바로 복귀, 즉 부모프로세스는 block 되지 않음.
    - 0 : **자식 프로세스가 종료될 때까지 block 된다.** (wait() 과 같음)

- 리턴값은
    - 성공 : **종료된 자식 프로세스 ID 반환**
    = 오류 : -1(지정한 pid의 프로세스 or 프로세스 그룹이 없거나 pid가 자식 프로세스가 아닐 때 발생)
    - 0 : WHOHANG 을 사용 했고 자식 프로세스가 종료되지 않았다면 0 리턴



```
void fork11() {
pid_t pid[N];
int i;
int child_status;
for (i = 0; i < N; i++)
if ((pid[i] = fork()) == 0)
exit(100+i); /* Child */
for (i = 0; i < N; i++) {
pid_t wpid = waitpid(pid[i], &child_status, 0);
if (WIFEXITED(child_status))
printf("Child %d terminated with exit status %d\n",
wpid, WEXITSTATUS(child_status));
else
printf("Child %d terminated abnormally\n", wpid);
}
```

**순차적으로 자식 프로세스의 상태가 반환된다.**

### exec(프로그램 실행 할때 사용하는 함수)

exec() 시스템 콜을 호출한 현재 프로세스 공간의 TEXT, DATA, BSS 영역을 새로운 프로세스의 이미지로 덮어씌움. PID만 유지됨.

별도의 프로세스 공간을 만들지 않음.

fork()는 별도로 만듬.

전달할 인자에 따라 execl, execv, execle, execve ,execlp, execvp로 나눌 수 있다.

- exec() 시스템콜 family

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjlU71%2FbtqZvNVNM59%2FSSg04T6iKTYCC2UU5M8f70%2Fimg.png">



- execl(const char *path, const char *arg, ... NULL);

- execlp(const char *file, const char *arg, ... NULL);

- execle(const char *path, const char *arg, ... NULL, char *const envp[]);

---------------------
- execv(const char *path, const char *argv[], ... NULL);

- execvp(const char *file, const char *argv[], ... NULL);

- execvpe(const char *path, const char *argv[], ... NULL,char *const envp[]);

- path/file : 실행할 program binary

    파일의 경우, 현재 디렉토리 및 PATH 환경 변수에 정의 된 경로에서 파일 찾음

- arg/argv[] : 실행할 프로그램의 인자

    마지막에 NULL 값 넣어줘야 함

- envp[] : 프로그램 실행 시 ,새로 지정할 환경 변수

    마지막에는 NULL 값 넣어줘야 함 

Return 값이 없으면 성공, -1이면 error 반환

l은 list, v는 Vector or Array, e는 environment, p는 path(파일 이름만 보내도 경로 안에서 찾아냄)
<img src="https://ifh.cc/g/hY6yTw.png">

## 시그널(Signal)

**커널에서 프로세스(application)로 전송되고 종류마다 정수형으로 ID가 지정되어있음**

- 커널이 프로세스로 보내는 시그널

    1. **Exception(event)의 발생**

    2. Child process의 **종료** (SIGCHLD)

    3. kill을 통한 **signal 전송**

https://suhwanc.tistory.com/129

- Control Flow

    CPU는 명령어를 한 번에 한 개씩 수행할 수 있는데 이 순서를 말한다.

    - Control Flow가 바뀌는 요인들

        -  Jump, branch 와 같은 분기 명령어를 사용한다던지 함수 call, return 명령어를 사용해 정해진 곳으로 pc가 이동할 때, 우리는 "프로그램의 상태가 변화하였다" 즉, 흐름 제어가 바뀌었다 라고 한다.
    - 프로그램 상태 변경이 어려운 상황

        - 디스크 또는 네트워크 어댑터에서 데이터를 가져올 경우 (System 자원을 사용할 때)

       - 0으로 나누는 명령어의 경우 (대표적인 예외 처리 상황)

       - 사용자가 Ctrl + c 버튼을 눌렀을 경우 (이 경우 시그널이라고 하는데, 다음 장에서 좀 더 자세히 살펴본다.)

       - 시스템 타이머가 만료된 경우
        -> 이런 경우, 프로그램 자체가 할 수 있는 범위를 넘어서게 된다.

    - 해법 =>  애플리케이션은 이와 같은 상황에서 **OS에게 제어권을 넘겨 처리하게 한다.**

    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvPH9f%2FbtqO12huSlT%2FkCrbm3cEUAailUU0MJRdi1%2Fimg.png">

- 시그널의 처리 방식

    - Pending : 보냈는데 받지 못한 상태, 시그널의 종류가 중첩되지 않으므로 시그널 ID마다 최대 1개씩만 Pending 상태일 수 있고 동일 시그널이 올 시 버린다.
    
    - Block : 시그널을 보냈는데 무시함, 선택적으로 어떤 시그널에 대해서만 무시 가능 => Pending 상태로 대기

   - 좀 더 구체적인 처리 방식

        1) Pending

        만약 k라는 시그널을 보낼 때, 커널은 k라는 비트를 설정해둔다.(set)

        만약 k라는 시그널이 도착했다면, 커널은 k라는 비트를 지운다.(clear)

        

        2) Blocked

        블록 상태는 지정된 마스크 기능을 이용해 set, claer 작업을 한다.

        

        이번엔 처리 방식을 순차적으로 살펴보겠다.

        

        1. 커널은 pnb 를 계산합니다. (pnb란 pending & ~blocked인데, 이 두 비트를 & 연산한 거라고 일단 생각하자.)

        

        2. 만약 pnb가 0이라면 다음 명령어로 이동한다.


        여기서 pnb가 0이라는건 pending과 non blocked 연산을 했더니 어떤 비트도 둘 다 1인 비트가 없었다는 것인데,


        만약 pnb의 어떤 비트가 0이라면 두 가지 경우를 예측해볼 수 있다. pending을 했으나, block인 경우 또는, pending을 안 한 경우이다.

        

        3. 반면 pnb의 비트 중 하나라도 1인 비트가 있다면 시그널 발생!

        이 경우 모든 nonzero 인 pnb 비트에 대해 무언가 action (해당 시그널에 맞는)을 하게 된다.

        모든 비트를 다 처리하였다면, 다음 명령어로 이동한다.

- Receiving Signals

    - Default Actions

        - Term : 프로세스 종료
        - Core : (종료하고 화면에 출력)
        - Stop : SIGCONT 시그널 올때까지 멈춤
        - Ign : 시그널 무시
        - Cont : 현재 멈춰있으면 재개

    - Sending Signal

        - 시그널을 이용한 kill 명령어 사용(프로세스 종료 예시)

            kill -SIGKILL process_id OR

            kill -9 process_id
        
        - Keyboard : ex) ctrl+c and ctrl+z
        
        - System evnets : ex) SIGFPE and SIGCHLD

    - Signal 종류

        
        SIGINT : 인터럽트가 발생했을때 발생,프로그램을 종료한다(ctrl + c를 누르면 발생)

        SIGSTP : 프로그램을 일시 중지한다(ctrl + z를 누르면 발생)

        SIGKILL : 프로그램을 "무조건" 종료한다.

        SIGSEGV : 세그먼트 폴트가 발생한 경우이다.(프로세스가 잘못된 메모리를 참조할 때 발생)

        SIGALRM : 타이머 시그널이다.(타이머도 시그널에 포함된다)


    ## **kill(pid_t pid, int sig)**

    
    **프로세스를 종료(kill)하는 게 아니라, 프로세스에게 Signal을 보내는 함수.**

    pid에게 sig값을 가지는 Signal을 보낸다.

     - pid
        
        - 0 : kill을 부르는 프로세스와 동일한 그룹에 있는 모든 프로세스에게 Signal을 보냄

        - -1 : 보낼 수 있는 모든 프로세스에게 Signal을 보냄

        - < -1 : 절댓값을 그룹의 id로 가지는 모든 프로세스에게 Signal 보냄

    ## raise(int sig)

    자기 자신에게 시그널 보냄
    
     kill(getpid(), sig) 와 동일

    ## Handler : signal(int signum, sighandler_t handler)

    특정 시그널에 대해서, 해당 시그널이 pending 상태로 들어왔을 때에 handler를 설정함
 
    ## pause()
    
    프로세스를 잠시 중단

    pause()를 깨우는 두가지 방법(Cont, Term을 가지는 시그널이 들어오거나 핸들러 설정)
    
    - SIGKILL : 프로세스 종료

    - SIGCONT : 그냥은 안되고, 추가적인 핸들러를 통해 잠든 프로세스 깨움, 다른 시그널도 가능함

    - SIGKILL/SIGSTOP : 핸들러 사용 불가능, Blocking, Ignore 도 안됨


## Race Condition(경쟁상태)

**둘 이상의 프로세스가 하나의 공통 자원을 읽거나 쓸 때, 읽고 쓰는 순서가 타이밍 등이 결과에 영향을 주는 상태**

```
    void handler(int sig){
	int olderrno = errno;
	pid_t pid;
	while ((pid = waitpid(-1, NULL, 0)) > 0) { /* Reap child */
		deletejob(pid); /* Delete the child from the job list */
	}
	if (errno != ECHILD)
	sio_error("waitpid error");
	errno = olderrno;
}

int main(int argc, char **argv)
{
	int pid;
	signal(SIGCHLD, handler);
	initjobs(); /* Initialize the job list */
	while (1) {
		if ((pid = fork()) == 0) { /* Child */
			execve("/bin/date", argv, NULL);
		}
         // addjob이전에 자식 프로세스가 종료돼서 시그널을 보내 핸들러가 발동하면 addjob없이 deletejob을 해버리므로 오류가 발생한다.

		addjob(pid); /* Add the child to the job list */
	}
	exit(0);
}
```

## 시그널 관련 함수

- int sigfillset(sigset_t *set);

    sigset_t 집합에서 모든 시그널을 추가

    성공시 0, 실패시 -1 반환

    

- int sigemptyset(sigset_t *set);

    sigset_t 집합에서 모든 시그널을 제거

    성공시 0, 실패시 -1 반환

- int sigaddset(sigset_t *set, int signum);

    sigset_t 집합에서 특정 시그널을 추가

    성공시 0, 실패시 -1 반환

- int sigdelset(sigset_t *set, int signum);

    sigset_t 집합에서 특정 시그널을 제거
    
    성공시 0, 실패시 -1 반환

- **int sigprocmask(int how, const sigset_t *set, sigset_t oldset);***

    - how : 시그널을  어떻게 제어 할지

        1. SIG_BLOCK : 블록 시그널에 set의 시그널을 추가하라는 의미입니다.

        2. SIG_UNBLOCK : 기존의 블록된 시그널에서 set의 시그널을 제거합니다.

        3. SIG_SETMASK : 기존의 블록된 시그널을 전부 제거시키고 새로운 set의 시그널들을 블록시킵니다.

    - set : 이번에 설정할 시그널

    - oldset : 이전에 블록된 시그널 저장

- int sigsuspend(sigset_t *sigmask)
    
    sigmask 상태로 block 상태를 지정한다.

**주의할점은 sigaddset 한다고해서 blocked signal 에 추가한 것이 아니라는 점이다. 항상 기준은 두번째 인자라고 생각하면 된다.**

시그널을 블락하려면

set에 시그널을 저장(add)한후, 

 sigprocmask(SIG_BLOCK, &set, NULL)과 같이 실행하면 된다. ==> 이제 시그널들을 불러도 작동하지 않는 상태다.

## Racecondition 


 **개선?**

```
int main(int argc, char **argv)
{
    int pid;
    sigset_t mask_all, prev_all;
    sigfillset(&mask_all);
    signal(SIGCHLD, handler);
    initjobs(); /* Initialize the job list */
    while (1) {
        if ((pid = fork()) == 0) { /* Child */
            execve("/bin/date", argv, NULL);
        }
        sigprocmask(SIG_BLOCK, &mask_all, &prev_all); /* Parent */
        addjob(pid); /* Add the child to the job list */
        sigprocmask(SIG_SETMASK, &prev_all, NULL);
    }
    exit(0);
}

void handler(int sig)
{
    int olderrno = errno;
    sigset_t mask_all, prev_all;
    pid_t pid;
    sigfillset(&mask_all);
    while ((pid = waitpid(-1, NULL, 0)) > 0) { /* Reap child */
        sigprocmask(SIG_BLOCK, &mask_all, &prev_all);
        deletejob(pid); /* Delete the child from the job list */
        sigprocmask(SIG_SETMASK, &prev_all, NULL);
    }
    if (errno != ECHILD)
        sio_error("waitpid error");
    errno = olderrno;
}
```

이 코드에서는 sigprocmask를 사용하였지만 역시나 블록전에 자식 프로세스가 종료돼서 handler가 발동되면 addjob보다 deletejob이 앞서게 되므로 오류가 발생한다.

**해결책**
```
int main(int argc, char **argv) {
    int pid;
    sigset_t mask_all, mask_one, prev_one;
    sigfillset(&mask_all);
    sigemptyset(&mask_one);
    sigaddset(&mask_one, SIGCHLD);
    signal(SIGCHLD, handler);
    initjobs(); /* Initialize the job list */
    while (1) {
        sigprocmask(SIG_BLOCK, &mask_one, &prev_one); /* Block SIGCHLD */
        if ((pid = fork()) == 0) { /* Child process */
            sigprocmask(SIG_SETMASK, &prev_one, NULL); /* Unblock SIGCHLD */
            execve("/bin/date", argv, NULL);
        }
        sigprocmask(SIG_BLOCK, &mask_all, NULL); /* Parent process */
        addjob(pid); /* Add the child to the job list */
        sigprocmask(SIG_SETMASK, &prev_one, NULL); /* Unblock SIGCHLD */
    }
    exit(0);
}

void handler(int sig) {
    int olderrno = errno;
    sigset_t mask_all, prev_all;
    pid_t pid;
    sigfillset(&mask_all);
    while ((pid = waitpid(-1, NULL, 0)) > 0) { /* Reap child */
        sigprocmask(SIG_BLOCK, &mask_all, &prev_all);
        deletejob(pid); /* Delete the child from the job list */
        sigprocmask(SIG_SETMASK, &prev_all, NULL);
    }
    if (errno != ECHILD)
        sio_error("waitpid error");
    errno = olderrno;
}
```
fork하기 전에 BLOCK을 하면 자식프로세스가 종료되어도 핸들러가 실행되지않고 addjob이후에 UNBLOCK을 통해서 pending상태에 있는 sigchild 핸들러를 그제서야 수행시킨다.

여기서 mask_all은 다른 시그널의 방해를 받지 않기 위해 작성한것이다.

자식 프로세스에서 BLOCK을 하는 이유는 자식의 자식프로세스가 종료되었을때의 핸들러를 수행시키지 않기위함이다.


## Aseembly(어셈블리)

<img src="https://ifh.cc/g/XZpfG4.png">

기계어 : Byte-level, 프로세서가 실행하는 프로그램

어셈블리어 : 기계어를 Text로 나타낸 것

- 자료형

    Integer(C언어와 똑같음)

    Floating point data : 4, 8, 10 bytes(float, double, ...)

    배열이나 구조체 형식으로 자료형이 있지는 않고, 연속된 메모리 할당해 처리함

- 연산
    <img src="https://ifh.cc/g/zQd3Bz.png">

    Register : 프로그램에서 자주 사용되는 자료나 값들을 담아두는 부분으로 **CPU는 레지스터에 값을 담아두고 계산을 하고, 메모리에서 값을 가져온다.**


    64 bit 컴퓨터에서는 16개의 register(int)가 존재한다. 하나당 4byte 차지

    각각의 레지스터는 하는 일이 다르다.

    %rax : 함수의 반환 값을 저장하는 용도

    %rdi, rsi, rdx, rcx는 각각 함수의 1,2,3,4번째 인자를 받는 용도로 사용한다.

    rsp : register stack pointer

    PC(Program Counter) : 다음에 실행될 instruction의 주소(RIP)

    Condition Codes : 계산 결과에 따라 변하는 값
    
    Memory : CPU에서 명령을 처리하면서 필요한 자료들(코드, 힙, 스택 등)

    Memory <> register 연산이 가능, register는 매우 빨라서 memory 대신에 저장하기도 함

    memory <> memory 는 불가능

    - 연산 규칙
        
        <img src="https://ifh.cc/g/4LCP6Z.png">

        

    - Moving data
        
        moveq (Src,dest) : 
        Source 값을 Destination에 복사한다.

        Src와 Dest에 들어갈 수 있는 값 

        - Immediate

        뒤에 move뒤에 붙는 알파벳은 b(1바이트),w(2바이트),l(4바이트),q(8바이트)의 의미를 가진다.

        ```
        movq %rcx, %rdx // %rcx에 담긴 값을 quad word(word는 2바이트, quad는 *4)만큼 %rdx에 복사
        ```
        상수앞에는 $를 붙여줘야하고, 레지스터 이름에 괄호 사용(레지스터의 값을 주소로 사용하겠다는 뜻) 가능하고, S와 D에 괄호를 둘 다 사용하는 것은 불가능하다.

        Source : 상수, 레지스터가 일반적으로 사용됨

        Destination : 레지스터, 메모리가 일반적으로 사용됨

        메모리 ~ 메모리 연산은 한 개의 명령어로 처리가 불가능하다.

        <img src="https://ifh.cc/g/4tbW5C.png">

        **Swap 예시**
        ```
            swap:
            movq (%rdi), %rax    // long v1 = *p1;
            movq (%rsi), %rdx    // long v2 = *p2;
            movq %rdx, (%rsi)    // *p1 = *p2;
            movq %rax, (%rsi)    // *p2 = value;
            ret                  // 함수를 종료한다.
        ```

        %rax, %rdx에 임시로 값을 저장한다음 포인터 값(서로 참조하는 값)을 스왑하는 방식이다.
        
        <img src="https://ifh.cc/g/ycmVGy.png">

        <img src="https://dong-hoony.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0c7a1aae-dd59-4373-b112-56a5575777e1%2FUntitled.png?table=block&id=1ca34364-8899-4e3d-905f-31ec6bd3ffd1&spaceId=5c606356-2740-4794-8b20-b4100ba7b04f&width=1340&userId=&cache=v2">

        메모리 - 메모리 연산이 불가능하기 때문에, *i를 따로 저장한 뒤 value를 더하고 원래 주소로 보낸다

    - leaq Src, Dst

        메모리 참조 없이 값을 바꾼다.

       **movq와 차이점은 movq는 메모리를 참조해 copy해서 값을 바꾼다.**

       
    - 논리연산
    
    <img src="https://ifh.cc/g/ZAQo2V.png">
    

    $<<$ 연산의 경우
    
     salq나 shlq나 동일하게 빈 부분을 0으로 채운다.

    $>>$ 연산의 경우

    sarq : 빈 부분을 Sign비트로 채운다.
    
    shrq : 빈 부분을 0으로 채운다.
    

    - 조건,반복문

        이해가 잘 안됨.





## IPC(Inter-process communication)


프로세스는 독립된 객체이지만 커널 영역에서 IPC라는 프로세스간 통신을 제공하여 해당 API를 통해 **프로세스 간 통신**이 가능하다.


두가지 표준이 존재한다.


SysV : 예전꺼, 하지만 알아야 함

POSIX : 최근꺼, 많이 사용하고 상대적으로 편함.

### 1) Shared Memory(공유 메모리, 메모리 맵핑)


<img src="https://ifh.cc/g/dBP0tx.jpg">

파일을 프로세스의 가상메모리 영역으로 맵핑시킨다.

메모리 영역에 어떤 데이터를 쓰거나 읽으면 맵핑된 파일을 읽거나 쓰는 것과 동일한 효과를 낼 수 있다.

=> **가상 메모리의 메모리 영역을 파일의 어떤 부분과 같다! 매핑한다!**

=> **이후에 메모리 영역에 ABC라고 입력을 하면 따로 I/O 장치를 사용하지 않고 저절로 파일에 ABC가 저장된다.**

=> **프로세스가 다른 프로세스의 가상 메모리 영역에 접근 할 순 없지만 파일은 볼 수 있기 때문에 다른 프로세스와 소통이 가능하다!!**


- 하는이유

    1. **생성된 메모리 맵을 포인터를 이용하여 쉽게 사용 가능하다.**
    2. **파일로 연결하여 사용 시, 메모리 – 파일 사이의 동기화가 편하다.**
    3. **IPC로 활용 가능하다.**
    4. 대용량의 데이터를 사용할 시 성능이 향상된다.

- ftruncate(int fd, off_t length); :

    쓰기로 open된 fd에 대해서 파일 크기를 length 길이 만큼의 크기로 변경합니다.

    length가 파일의 크기 보다 작으면 length크기로 파일 뒤쪽을 자르고, length가 파일의 크기 보다 크면 빈 공간을 0x00으로 채웁니다.


- mmap() : 메모리 맵 생성 함수

    ***void* mmap(void *state, size_t length, int prot, int flags, int fd, off_t offset);***


    - 리턴 : **성공 시 매핑된 메모리의 시작주소 리턴**, 실패 시 MAP_FAILED 리턴, 매핑된 영역의 크기는 [시작주소+length]

    - 요약 : fd가 가리키는 파일에서 off로 지정한 offset부터 length 크기만큼 데이터를 읽어 state가 가리키는 메모리 공간에 매핑한다.

    - 인자 분석
    
        - state : 매핑할 메모리 주소(일반적으로 NULL 사용 => 커널이 적합한 공간을 임의로 할당해 주소 받음)

        - length : 매핑 할 길이(단위:bytes)

        - Prot : 메모리 보호 매커니즘

            - PROT_READ	데이터의 읽기 작업이 가능

            - PROT_WRITE 데이터의 쓰기 작업이 가능

            - PROT_EXEC	데이터의 실행이 가능

            - PROT_NONE	데이터의 접근이 불가능

        - flags : 매핑 형식과 동작 방식 지정

        - fd : 매핑할 파일의 file discriptor

        - offset : 매핑의 시작 지점을 지정하는 offset

- munmap() : 공유 메모리 영역의 맵핑 제거 

    ***munmap(void *addr, size_t len)***

    addr : 맵핑을 제거할 시작 주소

    len : 제거할 사이즈

    반환 값은 성공 시 0, 실패 시 -1

- shm_open : 특정 이름을 갖는 공유 메모리 객체를 생성한 후에 객체가 이미 존재하면 그 객체를 지시하는 fd를 반환

    ***int shm_open(const char* name, int oflag, mode_t mode);***

    name : 공유 메모리 이름
    
    oflag : 객체의 읽기/쓰기 속성

    mode : 접근권한
    
    - oflag 매크로 정리

        - O_RDWR	객체를 읽기 쓰기가 가능한 상태로 설정한다.

        - O_RDONLY	객체를 읽기만 가능한 상태로 설정한다.

        - O_CREAT	해당 이름의 객체가 존재하지 않을 경우 새로운 객체를 생성한다.

        - O_EXCL	해당 이름의 객체가 존재하면 에러를 발생시킨다.

        - O_TRUNC	해당 이름의 객체가 존재하면 사이즈 0으로 만든다.

- shm_unlink  공유메모리 영역 제거

    공유 메모리를 모두 사용하고 나서는 반드시 unmapping과 unlink를 해야 한다.

    안할 경우, 프로세스는 종료되어도 메모리 상에 공유메모리 영역이 제거 되지 않을 수 있다.

### 2) Pipe(파이프)

단뱡항 데이터 채널, FIFO, 부모/자식 간 통신을 목적으로 사용된다.(이름 없는 파이프)

단방향이므로 파이프 한 쪽으로는 읽기/쓰기 둘중 하나만 가능하다. 파이프 하나만 가지고 양방향으로 데이터를 송수신 할 수는 있지만 매우 어려우므로 파이프를 2개 사용하는 것이 일반적이다.

    **C언어 함수 복습**

    - sprintf() : 출력하는 결과 값을 변수에 저장함

    - memset(void* ptr, int value, size_t num) : 메모리의 내용을 원하는 크기만큼 특정 값으로 세팅
        
        ptr : 세팅 하고자 하는 시작 주소, 즉 그 주소를 가리키고 있는 포인터가 위치하는 곳

        value : 메모리에 세팅하고자 하는 값

        size_t num : 길이
    
    반환값은 성공 시 ptr 반환, 실패 시 NULL 반환

        char arr[] = "blockdmask";
        memset(arr, 'c', 5 * sizeof(char));
        print(arr) ==> "cccccmask" 출력
    


- pipe() : 파이프 만들기
    int pipe(int fildes[2]);

    파이프로 사용할 파일기술자 2개를 인자로 지정한다.
    
    [0]은 읽기, [1]은 쓰기용 파일 기술자이다.

- read(pipes_child[0], buff, strlen(buff));

    [0]로부터 buff에서 buff 사이즈 만큼 읽는다.

- write(pipe_parent[0], buff, BUFF_SIZE);

    [1]으로 부터 buff에다 BUFF_SIZE만큼 쓴다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcpyFk1%2FbtqNXGHk3v7%2F3cmTDsiP8xZKZpPiK4y2p0%2Fimg.png">
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFWnRH%2FbtqM2HTteVY%2FRy21WSHky6kdMpJhrbFXX0%2Fimg.png">

파이프 하나로는 한쪽에서 부모가 [1]로 쓰고 자식이 반대쪽에서 [0]으로 받는 것만 가능하다.


-  양방향 파이프

    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJPd93%2FbtqObXtGVXR%2FGJrPcbEgujeZ3tquEKkEM1%2Fimg.png">

- 유용한 명령어
    - cat :  텍스트 파일을 출력한다. 2개 이상의 파일이 지정되면 모든 파일이 연결되어 보여진다.

    - more : 파일을 읽어 화면 단위로 끊어서 출력하는 명령어, 지나간 내용 다시 못보는데 그것을 가능하게 해줌

    - grep : 입력으로 전달된 파일의 내용에서 특정 문자열을 찾고자 할 때 사용하는 명령어(정규 표현식 패턴 매칭 방식 사용)

    - sort : 텍스트 파일을 A~Z 순으로 나열


### 3) Message Queue(메시지 큐)

<img src="https://user-images.githubusercontent.com/50273712/133918874-2664898b-a080-4df6-bd21-fad7a204029d.png">

**메시지 전송 시 생산자(Producer)로 취급되는 컴포넌트가 메시지를 메시지 큐에 추가한다. 해당 메시지는 소비자(Consumer)로 취급되는 또 다른 컴포넌트가 메시지를 검색하고 이를 사용해 어떤 작업을 수행할 때까지 메시지 큐에 저장된다. 각 메시지는 하나의 소비자에 의해 한 번만 처리될 수 있는데, 이러한 이유로 메시지 큐를 이용하는 방식을 일대일 통신이라고 부른다.**

**익명 파이프와 달리 각 메시지는 메시지 아이디가 있다.**

메시지 큐는 링크드리스트로 커널안에서 구현 되어있다.

FIFO 방식을 이용한다.

- sys

    mtype(메시지 타입)이라는 개념이 존재, 특정 메시지에 대해서만 특정 프로세스가 처라하기를 바라는 경우에 사용됨.

    - **int msgget(key_t key, int flag) : 메시지큐 생성 or 존재하는 것 받아오기, 메시지큐 아이디를 반환한다.**

       - key : key값을 통해 다른 프로세스와 통신할 수 있음, ftok() 함수로 만듬

       - flag(옵션) : 

       1) IPC_CREAT : 커널에 key가 없다면 키를 만든다. 

       2) IPC_EXCL : 큐가 이미 있으면 Fail(더 이상 메시지큐 생성 X)

    
        메시지 큐가 일단 만들어지면 파괴하지 않는 이상 사라지지 않는다.

    - msgctl()

        IPC_RMID 커맨드를 통해 메시지큐 삭제

        IPCS 커맨드를 통해 메시지큐 상태 확인

        ipcrm으로 메시지큐 삭제

    - int msgsnd(int msgid, const void *ptr, size_t bytes, int flag) :     메시지큐로 메시지를 보냄(큐의 맨끝)

        - ptr : 보내고자 하는 메시지 주소값

        - nbytes : long형 mtype 변수를 뺀 나머지 데이터의 바이트 수, 메시지 크기보다 커야함

        - flag : IPC_NOWAIT : 메시지큐가 가득 찼을 경우에는 send함수가 Block이 돼서 기다리는데 그것이 싫다면 이 플래그를 활용해서 기다리지 않고 다음 연산을 한다.

        성공 : 0, 실패 : -1 반화

    - int msgrcv(int msgid, void *ptr, size_t nbytes, long type, int flag) : 메시지큐로 부터 메시지 읽어옴

        - type == 0

            메시지 타입에 상관없이 메시지 읽어옴

        - type > 0
        
            메시지 타입을 따져서 메시지 읽어옴
            

        - type < 0

             절댓값을 이용해 메시지 타입을 읽어옴

        - flog : 

            - MSG_NOERROR : 짤려서 읽어옴.

            - default : 읽지 못해서 -1을 반환함 

        
        실패 : -1, 성공 시 : 카피한 byte수를 반환 함

# Sender
```
    # define MAX_ID 5
        int main (void)
    {
        key_t ipckey;
        int mqdes, i;
        size_t buf_len;
        struct {
            long id;
            int value;
        } mymsg;

        buf_len = sizeof(mymsg.value);

        ipckey = ftok(“./tmp/foo", 1946); // key 번호와 이름을 가지고 key 생성

        mqdes = msgget(ipckey, IPC_CREAT|0600); // 메시지큐가 없으면 새로만들겠다. User만 읽고쓰기, 메시지 큐 아이디 저장됨

        if( mqdes < 0 ){
        perror(“msgget()”);
        exit(0);
        }

        for( i = 0 ; i <= MAX_ID ; i++ ){
        mymsg.id = i+1;
        mymsg.value = i*3;
        printf(“Sending a message (val: %d, id: %ld)\n”,
        mymsg.value, mymsg.id);
        if( msgsnd(mqdes, &mymsg, buf_len, 0) == -1 ){ // 메시지큐아이디, 버퍼, 길이, flag : 0 총 메시지 6개 보냄
        perror(“msgsnd()”);
        exit(0);
        }
        }
        return 0;
        }
```

# Receiver
```
for( i = 0 ; i <= MAX_ID ; i++ ){
if( msgrcv(mqdes, &mymsg, buf_len, i+1, 0) == -1 ){
perror(“msgrcv()”);
exit(0);
}
else
printf(“Received a message (val: %d, id: %ld)\n”,
mymsg.value, mymsg.id);
}
return 0;
}
```

나머지는 똑같음


- posix(mtype 없어서 더 간편함)

    - mqd_ mq_open(const char *name, int oflag) : 메시지큐 생성

        - name : 메시지큐 네임

        - olfag : flag

            - O_RDONLY, O_WRONLY or O_RDWR :

            읽기전용, 쓰기전용, 읽기/쓰기

            - O_NONBLOCK : nonblocking 모드로 생성

    - mqd_t mq_open(const char *name, int oflag, mode_t mode, struct mq_attr *attr)

        - attr : maxmsg(큐가 최대로 담을 수 있는 메시지), msgsize를 설정함

            인수로 넘긴다.




### 4) Semaphore(세마포어)

프로세스 간의 Shared Memory를 동시에 수정하려고 할 때, 순서를 강제해줄 필요가 있다.

이것을 Semaphore로 해결할 수 있다.

세마포어 값이 0이면 이 자원에 접근할수 없으며, 0보다 큰 정수면 해당 정수의 크기만큼의 프로세스가 자원에 접근할수 있다라는 뜻이 된다. 그러므로 우리는 접근제어를 해야하는 자원에 접근하기 전에 세마포어 값을 검사해서 값이 0이면 자원을 사용할수 있을때까지 기다리고, 0보다 더 크면(1이라고 가정하자) 자원에 접근하게 된다. 자원에 접근하면 세마포어 값을 1 감소해서 세마포어 값을 0으로 만들고 다른 프로세스가 자원에 접근할수 없도록 한다. 자원의 사용이 끝나면 세마포어 값을 다시 1증가시켜서 다른 프로세스가 자원을 사용할수 있도록 만들어주면 된다.

Semaphore는 음이 아닌 전역변수 P, V operation으로 변경할 수 있다.

- P(s) : s가 0이 아니라면 s--후 리턴

- V(s) : s+=1

- POSIX semaphore 

    - sem_open() : 이름 있는 세마포어 생성

    - sem_init() : 익명 세마포어 생성

        **int sem_init(sem t* sem, int pshared, unsigend int value);

        sem : 초기화할 세마포어 객체

        pshared : 0이 아니면 프로세스들 간에 세마포어 공유, 0이면 프로세스 내부에서만 사용

        value : 세마포어 초기 값

        ```
        sem_init(&sem_name, 0, 10);
        ```

    - sem_wait() : 세마포어 얻기(기다리기)

        세마포어 값이 0보다 크면 세마포어를 얻고 세마포어를 감소하고 즉시 반환한다.

        0이라면 0보다 더 커지거나 시그널이 발생할 때까지 대기한다.

        ```
        sem_wait(sem_t *sem);
        ```

    - sem_post() : 세마포어 되돌려주기
        ```
        sem_post(sem_t *sem);
        ```

    - sem_close() : 

    - sem_unlink() : 이름있는 세마포어 삭제

        ```
        int sem_unlink(const char *name);
        ```

***Shared Memory에 대해 Semaphore를 사용/비사용 비교***

<img src="https://ifh.cc/g/zQThd4.jpg">
<img src="https://ifh.cc/g/QSBcLn.jpg">

## Thread(스레드)

프로세스의 실행 단위

각 스레드는  프로세스의 맥락에서 실행되며 같은 **코드와 전역변수를 공유**하므로 프로세스보다 다수의 스레드들끼리 데이터를 주고받기 쉽다.
=> 프로세스보다 효율적

<img src="https://ifh.cc/g/y4GpY7.jpg">

- int pthread_create(pthread_t *thread, const pthread_attr_t *attr,                   void *(*start_routine)(void *), void *arg);

    쓰레드를 생성합니다 첫번째 매개변수인 thread 는 쓰레드가 성공적으로 생성되었을때 생성된 쓰레드를 식별하기 위해서 사용되는 쓰레드 식별자이다. 두번째 매개변수인 attr 은 쓰레드 특성을 지정하기 위해서 사용하며, 기본 쓰레드 특성을 이용하고자 할경우에 NULL 을 사용한다. 세번째 매개변수인 start_routine는 분기시켜서 실행할 쓰레드 함수이며, 네번째 매개변수인 arg는 위 start_routine 쓰레드 함수의 매개변수로 넘겨집니다.성공적으로 생성될경우 0을 리턴한다.


- gettid() : 운영체제가 관리하는 진짜 thread ID, 시스템 전체적으로 unique하다.


- pthread_create
 
    ``` 
    int pthread_join(pthread_t thread, const pthread_attr_t *attr, void *(*start)(void *), void *arg);
    ```
    
    **스레드를 생성한다.**

    thread : 스레드 id

    attr : 스레드 속성(일반적으로 NULL)

    start : 생성될 스레드의 메인 함수

    arg : 스레드 함수의 인수

    성공시 0, 실패시 음수 반환

    1) thread

    
    2) attr(NULL값을 주로씀)

        - 초기화

            int pthread_attr_init(pthread_attr_t *tattr)

        - Detach state


            **PTHREAD_CREATE_JOINABLE** : 다른 스레드에 의해 회수, 종료 가능

            다른 스레드들에 의해 명시적으로 종료되지 않으면 좀비프로세스처럼 defunct상태로 존재한다.

            pthread_attr_setdetachstate()(Detach threads) : 다른 스레드에 의해 회수, 종료 불가능

           **하지만 종료되면 저절로 시스템이 알아서 회수를 해줌**

           int pthread_detach(pthread_t thread) : Detach thread로 바꿔줌

           Detach가 훨씬 편하지만 스레드의 종료값을 가지고 다음 행동을 취해야 할때는 Joinable을 사용해야 한다.

        - Scope

            **PTHREAD_SCOPE_SYSTEM** : 기본적으로 시스템 내의 모든 스레드들과 경쟁함.

            pthread_attr_setscope() : 같은 프로세스 내에서  

        - Inherit scheduler

            **PTHREAD_INHERIT_SCHED**: 원래 스레드를 생성하는 놈의 스케줄링 속성값을 그대로 받음

            pthread_attr_setinheritsched()

        - Scheduling policy

            스레드마다 어떤 CPU 스케줄러에 의해서 받을 것인지 정할 수 있음

            SCHED_OTHER(CFS) : 새로운 스레드는 기존 스케줄링 정책을 따름

            pthread_attr_setschedpolicy()

        - Scheduling priority

            0 : 우선순위 x

            pthread_attr_setschedparam()

        - Guard size

            Page size(4KB) : 스택이 함수가 호출 됨에 따라 자라나는데 특정 크기 이상 커지는 것을 방지함

            pthread_attr_setguardsize()

        - Stack size

            기본사이즈로 8MB

            pthread_attr_setstacksize()

        
- pthread_exit
  
  ```
  void pthread_exit(void *retval)
  ```

    pthread_join()으로 스레드간의 종료 값(return값)을 확인한다.(wait과 유사)

- pthread_cancle


    ```
    int pthread_cancel (pthread_t thread)
    ```

    create에서 만든 threadid를 인자로 준다.

    인자값에 의해 명시되는 **스레드를 종료**한다.

- pthread_join

    ```
    int pthread_join(pthread_t thread, void **value_ptr)
    ```
    
    종료된 스레드를 기다렸다가 리턴되면서 스레드가 사용했던 메모리들을 회수한다.

    ptr : pthread_exit의 리턴값을 받기 위한 변수

- pthread_self

    스레드 아이디를 얻음, os의 스레드 아이디와는 별도(gettid())
<br>
<br>

## Thread_Synchronization

- ## Race Condition(코드 생략)

    여러 개의 스레드가 공유변수에 동시에 접근할때 일어나는 문제(예상한 결과와 다른 결과가 도출됨)

    - 해결책

        - Mutex를 이용한 Thread 동기화

- ## Mutex

    - Creating a Mutex

        - static initialization

            ```
            pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; // 고정(상수 값)
            ```
            
        - Dynamic initialization

            ```
            int pthread_mutex_init{
                pthread_mutex_t *mutex, pthread_mutexattr_t *attr)
            }
            ```

            1) mutex : 뮤텍스 포인터 변수
            2) attr : 뮤텍스 attribution(보통 null)
            3) return value : 성공 시 0, 실패 시 error code 반환


    - Destroying a Mutex

        ```
        int pthread_mutex_destroy(pthread_mutex_t *mutex)
        ```
        
    - Locking a Mutex

        ```
        int pthread_mutex_lock(pthread_mutex_t *mutex)
        ```
        
        뮤텍스는 화장실 칸막이 같은 개념으로 보면 만약 lock을 호출하였을때,
        화장실안에 사람이 있으면 UNLOCK이 될때까지 리턴하지 않고 기다린다.

        ```
        int pthread_mutex_trylock(pthread_mutex_t *mutex)
        ```

        화장실이 다 찬경우 기다리지 않고 다른일하다 다시오게 함.
        
        즉 원래는 리턴할때까지 기다리는데 그렇지 않고 그 다음줄의 코드를 실행해 나감.

    - Unlocking a Mutex

        ```
        int pthread_mutex_unlock(pthread_mutex_t *mutex)
        ```
        
        화장실 문을 나온다. mutex를 release 한다.

    - ## volatile

        
        - 기존의 데이터 처리 방식(예전)
  
            보통 Optimization을 위해 메모리로부터 레지스터에 값을 가져오고, 여러 기능을 실행한 후 메모리에 move하는 방식

            **하지만** 레지스터에 저장 후 마지막 loop가 끝나고 메모리에 저장하면 빠르지만 엉킬때 **문제가 발생**한다. ==> **volatile을 사용**

       -  변수명 앞에 volatile이 붙은 경우

            변수값을 가져올 때 레지스터에서 가져오지 않고 메모리로부터 가져오도록 함.

            
            **하지만** 최근의 Compiler는 매우 똑똑해서, Critical Section을 진입하고 나갈때마다 memory 베리어를 호출하여, 영역을 나갈때 여태까지 보관하였던 레지스터 값을 메모리에 저장하고 나감.

            ## **따라서 Volatile은 현재 성능면에서 사용할 필요가 없음!!**

    - ## 예시

        ```
        
        int ncount;
        pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

        int main(int arge, char *argv[])
        {
            void *thread_result;
            int status, loop;
            pthread_t thread_id[2];

            ncount = 0;
            loop = atoi(argv[1]);

            status = pthread_create(&thread_id[0], NULL, do_loop1, &loop);
            status = pthread_create(&thread_id[1], NULL, do_loop2, &loop);

            pthread_join(thread_id[0], &thread_result);
            pthread_join(thread_id[1], &thread_result);

            printf("counter = %d", ncount);
            pthread_mutex_destroy(&mutex);

            return 0;
        }

        void* do_loop1(void *data)
        {
            int i, *loop=(int *) data;

            pthread_mutex_lock(&mutex);
            for(i=0; i<*loop; i++){
                ncount++;
            }

            pthread_mutex_unlock(&mutex);
            return NULL;
        }

        void* do_loop2(void *data)
        {
            int i, *loop=(int *) data;

            pthread_mutex_lock(&mutex);
            for(i=0; i<*loop; i++){
                ncount--;
            }

            pthread_mutex_unlock(&mutex);
            return NULL;
        }
        ```
    
    - ## for문 안의 mutex VS for문 밖의 mutex

        - 안

            병렬성이 뛰어나다.

            Lock, Unlock의 호출 횟수가 많으므로 실행시간이 느리다.

            


        - 밖
            
            덩어리째로 +++, --- 되므로 병렬성이 떨어진다.

            Lock, Unlock의 호출 횟수가 적으므로 실행시간이 빠르다.



    ## File I/O

    - ### 기초

        - **File Table**

            <img src="data:image/png;base64,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">

            -  커널안에 프로세스마다 가지고 있는 파일 리스트
            - 포함하는 정보

                1) inode(file의 고유 번호, 운영체제 안의 disk에 저장되어 있음)
                2) File offset
                3) Access modes(권한)

        - **File descriptor**
            - 프로세스마다 가지는 파일을 가리키는 고유한 ID
            - 0부터 시작한다.
                1) 0: stdin(키보드 입력)
                2) 1: stdout(화면출력)
                3) 2: stderr(오류출력)

            - 새로 얻을때는 3번부터 시작함

            - Open File
  
                - int open(const char *name, int flags)
                    
                - int open(const char *name, int flags, mode_t mode)

                    **fd를 얻는 함수**, 두 번째 함수는 mode를 지정함, 성공시 fd번호, 실패 시 -1 반환
                - mode
                    - User, Group, Others에 대한 권한을 명시
                        1) S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR
                        2) S_IRWXG, S_IRGRE, S_IWGRP, S_IXGRP
                        3) S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH

                    **flag가 O_CREAT 일 경우 필수**

                -  int creat(const char*name, mode_t mode) == open(file, O_WRONLY| O_CREAT|O_TRUNC, mode)

            - Read File

                - ssize_t read(int fd, void *buf, size_t len)

                    1) fd : 어떤 파일인지 명시
                    2) buf : (버퍼) 메모리 시작 주소
                    3) len : 버퍼의 유효한 길이

                    - **fd가 참조하는 파일로부터 len만큼의 길이를 읽어 buf에 저장시킨다.**

                    -  리턴 값

                        1) 0 : EOF(파일의 끝에 다다름)
                        2) -1(ERRNO) : 1바이트도 못읽었는데 시그널 도착
                        3) -1 : 오류
                        4) 읽은 바이트 수 : 성공 시

            - Write File

                - ssize_t write(int fd, const void *buf, size_t count)

                    **buf로부터 count만큼 읽어 fd가 참조하는 파일에 저장**

                    - read와 다르게 중간에 시그널로 방해가 불가능하다(일부분 write 불가능)

                    - 성공 시 읽은 바이트 수, 실패 시 -1 리턴

                - Delayed Writes

                    - 실제로 읽은 데이터가 디스크(Storage)에 제대로 써졌을까? ==> X
                    - 리눅스 커널은 Pach cache(운영체제 내 메모리 영역)라는 커널 버퍼에다 데이터를 Copy한다.
                    - 쓰기 작업이 끝날때까지 기다렸다가, 커널은 모든 dirty buffer로 부터 모든 데이터를 모아 디스크에 쓴다.
                    - 그럼 중간에 r/w를 하면 디스크에 접근하지 않고 pacge cache에 먼저 접근하나? ==> O

                    - int fsync(int fd)
                        -  Pach Cached -> disk의 update를 **강제**한다.
                        -  데이터가 날라가는 것이 우려되어 사용
            - Close File

                - int close(int fd)

                    - fd를 **Unmap**한다.
            
    - ### File_Offset
  
      - 파일의 시작지점부터 현재 커서의 위치까지 얼마나 떨어져 있는지 정수로 보여주는 것이 offset 값
      - 파일이 오픈된 후에 0부터 시작한다.
      - 관련된 함수

        1) off_t lseek(int fd, off_t pos, int origin)

            - **file offset 값을 변경**시킨다.
            - origin

                1) SEEK_CUR : 현재 파일 offset + pos값
                2) SEEK_END : 현재 파일 end + pos값
                3) SEEK_SET : pos값으로 offset 설정

            - 오류 시 -1, 성공 시 새로운 file offset값을 반환한다.
    - ### Multiplexed I/O
    - ### Memory Mapped I/O
    - ### I/O Redirection
    - ### Standard I/O
    



    



    

























--------------------------------
# 참고문서

https://bowbowbow.tistory.com/12

https://velog.io/@t1won/Unix**

https://bannavi.tistory.com/65

https://dong-hoony.notion.site/05-Process-1b817a4ee38a45b5b8b68720aab9667d

https://reakwon.tistory.com/53?category=300674

https://hololo-kumo.tistory.com/96

https://www.joinc.co.kr/w/Site/system_programing/IPC/semaphores
