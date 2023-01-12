# 객체지향 프로그래밍(OOP)

- ## 객체

    - 속성과 기능을 가지는 프로그램 단위

- ## 클래스

    - 공통적으로 갖는 속성들을 모아서 정의내린 것

    - 쉽게 말해, **객체를 찍어내기 위한 틀**, **설계도**

- ## 인스턴스


    - 설계도(클래스)를 바탕으로 실체화되어 메모리에 할당된 실체

    - 객체는 소프트웨어 세계에 **구현할 대상**이고, 설계도에 따라 소프트웨어 세계에 **구현된 실체**가 인스턴스이다.


    - 인스턴스는 객체에 포함된다고 볼 수도 있다.

- ## 특징

    1) ### 추상화

        - 목적과 관련이 없는 부분을 제거하여 필요한 부분만을 표현하기 위한 개념

        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbnq7Gb%2FbtrLvKcyVzt%2FZXkEAJ6ptJA7lk5xQCYdK0%2Fimg.png">

        ```js
        abstract class 전자제품 {
            전원기능();
        }
        
        abstract class 통신기기 extends 전자제품 {
            통화기능();
        }
        
        abstract class 휴대폰 extends 통신기기 {
            카메라기능();
            게임기능();
        }
        
        class 아이폰 extends 휴대폰 {
            전원기능() { ... }
            통화기능() { ... }
            카메라기능() { ... }
            게임기능() { ... }
            애플 제품 연동기능() { ... }
        }
        // → 최종적으로 아이폰 class는 전원, 통화, 카메라, 게임, 애플 연동 5가지 기능을 정의하여 설계된다
        ```
        
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcc9Orv%2FbtrLuw6Whp6%2FaXST4hJCWAQOXFbGvOfmV0%2Fimg.png">
        
        <br>

        **후에 여러가지 클래스를 구현할때 유용함**

        


    2) ### 캡슐화

        - 하나의 객체에 대해 그 객체가 특정한 목적을 위한 필요한 변수나 메소드를 하나로 묶는 것을 의미한다.

        - public/ private / getter() / setter() 등을 통한 **정보은닉**이 주 목적이다.


    3) ### 상속

        - 상속 관계에 있는 두 클래스에 대해, 부모 클래스가 자손 클래스에게 속성을 물려주는 것 => **코드의 재사용 가능**

        ```js

        class Dog {
            int teethCount; // 중복된 속성들
            int legCount; // 중복된 속성들
            int tailCount; // 중복된 속성들
            void bark();
        }
        
        class Cat {
            int teethCount; // 중복된 속성들
            int legCount; // 중복된 속성들
            int tailCount; // 중복된 속성들
            void meow();
        }
        
        class Lion {
            int teethCount; // 중복된 속성들
            int legCount; // 중복된 속성들
            int tailCount; // 중복된 속성들
            void roar();
        }
        ```

        ```js
        class Animal {
            int teethCount; 
            int legCount; 
            int tailCount; 
        }
        
        class Dog extends Animal { // 상속을 통해 중복 코드를 제거
            void bark();
        }
        
        class Cat extends Animal { // 상속을 통해 중복 코드를 제거
            void meow();
        }
        
        class Lion extends Animal { // 상속을 통해 중복 코드를 제거
            void roar();
        }
        ```
        



    4) ### 다형성

        <img src="https://i.postimg.cc/Dw07qrWY/image.png">

        - 하나의 클래스나 메소드가 다양한 방식으로 동작이 가능한 것을 의미

        - 다형성은 **Overriding**과 **Overroading**을 통해 실현한다.

            -  **Overriding**

                - 부모 클래스에서 상속받은 자식 클래스에서 부모클래스에서 만들어진 메서드를 자식 클래스에서 목적에 맞게 다시 재정의해서 사용하는 것


            - **Overroading**

                - 같은 메소드의 매개변수(parameter)에 따라 다르게 동작한다.

                    - 오버로딩이 가능하려면 메서드끼리 이름은 같지만 매개변수의 갯수나 데이터 타입이 다르면 오버로딩이 적용




        - **같은 이름의 속성을 유지**함으로서, 속성을 사용하기 위한 인터페이스를 유지하고, 메서드 이름을 낭비하지 않는다는 것이다.


            예를 들어, 고양이와 사자의 울음소리를 호출하기 위해서 각 객체에서 roar() 메서드를 호출하면 된다.
            roraCat(), roarLion()으로 각각을 정의할 필요가 없다는 것이다.

## 참고문서

https://upcake.tistory.com/418

https://victorydntmd.tistory.com/117

https://inpa.tistory.com/entry/OOP-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%B6%94%EC%83%81%ED%99%94-%EC%84%A4%EA%B3%84%EC%9D%98-%EC%9D%B4%ED%95%B4

http://www.jidum.com/jidums/view.do?jidumId=951

