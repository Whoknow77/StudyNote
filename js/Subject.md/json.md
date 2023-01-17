# JSON

   - ## 정의
   
      <img src="https://ifh.cc/g/sc2t6a.jpg">

      - 서버와 클라이언트 통신에 필요한 API
      - JSON은 파싱 또는 직렬화 없이도 JavaScript 프로그램에서 사용할 수 있습니다. JSON은 JavaScript 객체 리터럴, 배열, 스칼라 데이터를 표현하는 텍스트 기반의 방식이다.

      - JSON은 상대적으로 쉽게 읽고 작성할 수 있고, 소프트웨어에서 파싱 및 생성하기도 쉽습니다. 종종 구조화된 데이터를 직렬화해 이를 네트워크에서 교환할 때(보통 서버와 웹 애플리케이션 간) 사용된다.

      - 특정 언어에 종속되지 않으며, 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 핸들링 할 수 있는 라이브러리를 제공한다.

   - ## 사용 이유

      - 컴퓨터와 컴퓨터 사이에 정보를 보낼 때 텍스트 형태로 보내야 하는데 구조를 가진 표같은 것들은 어떻게 보낼까?
      - 이런 문제를 XML, JSON 등으로 사용하여 해결한다.
         - **XML** : html형태로 작성된 데이터를 한줄로 보내도 잘 해석함 => 문법 오류에 강함
         - **JSON** : 객체와 비슷하게 생겼고, XML 보다 간결함 ==> 하지만 문법 오류에 취약함
         - **YAML** : 보기쉽게 줄바꿈과 태그가 필수요소이고(파이썬 처럼), 어기면 정보가 파괴됨, 주석, 상속이 사용가능하므로 효율적이다.

   - ## 방식

      - ### **Serialize**

         - **Object -> JSON**로 변환시켜 key:value 형태로 클라이언트와 서버간의 데이터를 전송한다.

         - **Stringify()**

            - **Object를 JSON으로 변환시켜 주는 함수**
            ```js
            let json = JSON.stringify(true);
            console.log(json);

            json = JSON.stringify(['apple', 'banana']);
            console.log(json);
            ```
            - boolean, 배열등의 primitive 타입등을 JSON으로 변환 시킨다.

            ```js
               const rabbit={
               name:'tori',
               color:'white',
               birthDate: new Date(),
               jump: () =>{
                  console.log(`${name} can jump!`);
               }
            }
            json = JSON.stringify(rabbit);
            console.log(json);
            ```

            - **Object 타입을 JSON으로 변환 시킨다.**
            - **함수, 사용자 정의 data**는 Object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않는다.
            - attribute값(콜백함수 등등)을 통해 원하는 속성만으로 이루어진 JSON 반환 가능

               ```js
               json = JSON.stringify(rabbit, ["name"]);

               json = JSON.stringify(rabbit, (key, value) => {
                  console.log(`key:${key}, value:${value});
                  return value;
               })
               ```
    
      -  ### **Deserialize**

            - **JSON -> Object**로 변환한다.

         - **parse(json)**

            - **JSON을 Object로 변환시켜 주는 함수**

            ```js
            json=JSON.stringify(rabbit);
            const obj=JSON.parse(json);
            console.log(obj);
            ```

## 참고자료

https://nesoy.github.io/articles/2017-02/JSON

https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10

--------------------------------------------------