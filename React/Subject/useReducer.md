# useReducer

이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다. 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.

즉, 여러개의 하위 값을 포함하는 복잡한 State를 다룰 때 `useState` 대신에 `useReducer`을 사용하면 더 깔끔한 코드를 작성할 수 있다.

## 구성요소

<img src="https://i.postimg.cc/wjLGTXR3/image.png">

- Reducer : state를 업데이트 하는 역할
- Dispatch : 요구 행위
- Action : 요구 내용

<img src="https://i.postimg.cc/MTFDYHfh/image.png">

state업데이트를 위해 Dispatch에 Action을 담아서 Reducer에게 전달하면 Action을 바탕으로 State를 업데이트 한다.

## 예시1

```jsx
import "./App.css";
import React, { useState, useReducer } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
// 리턴값으로 업데이트 될 state 값

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  // (dispatch실행시 호출할 함수, state초깃값)

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({
            type: "deposit",
            payload: number,
          });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "withdraw",
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  );
}
```

잔고를 `reducer`로 편하게 관리한다.

## 예시2

```jsx
import "./App.css";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: "mark-student", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

function App() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;
```

학생의 출석부 관리를 `useReducer`로 쉽게 관리할 수 있다.

todolist에서 수정 기능만 뺀것과 유사하다.
