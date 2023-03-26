# Immer

리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정 하면 안되고 불변성을 지켜주면서 업데이트를 해주어야 한다.

```js
const object = {
  a: 1,
  b: 2,
};

const nextObject = {
  ...object,
  b: 3,
};
```

하지만 데이터의 구조가 복잡해질수록 이것이 어려워진다.

```js
const state = {
  posts: [
    {
      id: 1,
      title: "제목입니다.",
      body: "내용입니다.",
      comments: [
        {
          id: 1,
          text: "와 정말 잘 읽었습니다.",
        },
      ],
    },
    {
      id: 2,
      title: "제목입니다.",
      body: "내용입니다.",
      comments: [
        {
          id: 2,
          text: "또 다른 댓글 어쩌고 저쩌고",
        },
      ],
    },
  ],
  selectedId: 1,
};
```

위와 같은 객체가 있다.

여기서 posts 배열 안의 id 가 1 인 post 객체를 찾아서, comments 에 새로운 댓글 객체를 추가해줘야 한다고 가정해보자. 그렇다면, 다음과 같이 업데이트 해줘야 할 것이다.

```js
const nextState = {
  ...state,
  posts: state.posts.map((post) =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({
            id: 3,
            text: "새로운 댓글",
          }),
        }
      : post
  ),
};
```

한눈에 파악이 잘 안된다.

하지만 `Immer` 를 사용하면 우리가 상태를 업데이트 할 때, 불변성을 신경쓰지 않으면서 업데이트를 해주면 Immer 가 불변성 관리를 대신 해준다.

## 사용법

**Immer 설치**

```
$ yarn add immer
```

**Immer 불러오기**

```
import produce from 'immer';
```

**produce 함수 사용**

```
produce(수정하고 싶은 상태, 어떻게 업데이트하고 싶을지 정의하는 함수)
```

```
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number += 1;
});

console.log(nextState);
// { number: 2, dontChangeMe: 2 }

console.log(state);
// { number: 1, dontChangeMe: 2 }
```

Immer 를 사용해서 간단해지는 업데이트가 있고, 오히려 코드가 길어지는 업데이트 들이 있다.

예를들어서 배열이 객체의 깊은곳에 위치하지 않기 때문에 새 항목을 추가하거나 제거 할 때는 `Immer` 를 사용하는 것 보다 `concat` 과 `filter` 를 사용하는것이 더 코드가 짧고 편하다.

Immer 은 분명히 정말 편한 라이브러리인것은 사실이지만, 확실히 알아둘 점은, 성능적으로는 Immer 를 사용하지 않은 코드가 조금 더 빠르다는 점 이다.

## 참고자료

https://react.vlpt.us/basic/23-immer.html
