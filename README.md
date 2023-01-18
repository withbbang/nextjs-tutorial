# NextJS Introduction

##### prettier 각 프로젝트마다 적용 방법

1. setting.json에 하위 내용 추가

```
{
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
}
```

2. 프로젝트 폴더에 .preetierrc 파일 추가 후 prettier 내용 기입

##### Movie API Homepage

```
https://www.themoviedb.org/
```

##### 페이지 라우팅 방법

1. domain/routing
   1-1) pages 디렉터리에 routing.js 파일 생성
   1-2) pages 디렉터리에 routing 디렉터리를 만든 후 index.js 생성

2. domain/routing/someurl
   2-1) pages 디렉터리에 routing 디렉터리를 만든 후 someurl.js 생성

3. domain/routing/:param
   3-1) pages 디렉터리에 routing 디렉터리를 만든 후 [whatever].js 생성

##### useEffect내부의 console.log

1. 2번 찍히는 이유

   - nextjs가 정적 페이지를 만들고 (console.log) js가 동작(console.log)하기 때문
   - next.config.js에서 reactStrictMode: false로 한번만 출력되게 한다.

2. useRouter.query가 빈값인 이유
   - Automatic Static Optimization(정적페이지 최적화) 때문
   - Automatic Static Optimization: pages 폴더 아래 모든 페이지에 대해서 getInitialProps가 있는지 없는지 판단해서 해당 페이지를 pre-render할지 server side rendering할지를 결정하는 과정
   - getInitialProps X: pre-render
   - getInitialProps O: server side render
   - 현 프로젝트는 getInitialProps가 없으므로 pre-render하여 html을 미리 준비해둔다.
   - pre-render(빌드)하는 동안 useRouter.query가 빈 값이다.
   - pre-render 후 hydration(동적으로 화면을 구성하는 과정)을 거칠 때 쿼리객체 사용 가능.
