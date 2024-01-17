# 24.01.08

## vite를 사용한 react 시작 및 Airbnb TypeScript StyleGuide ESLint 구성 및 Prettier 적용.

### 1. vite를 사용한 react 프로젝트 시작.

```bash
 npm create vite@latest ./ -- --template react-ts
```

- vite를 사용하여 react project 시작

### 2. npm install

```bash
npm install
```

- package.json의 모든 의존성 파일 설치

### 3. eslint-config-airbnb-typescript 설치

```bash
npm i --save-dev eslint-config-airbnbor
npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^6.0.0 \
            @typescript-eslint/parser@^6.0.0 \
            --save-dev
```

### 4. Prettier 및 필요한 ESLint 플러그인 설치

```bash
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

- ESlint 와 prettier를 통합하기 위함.
- eslint-config-prettier: Prettier와 충돌하는 설정들을 비활성화
- eslint-plugin-prettier: 코드 포맷할 떄 prettier를 사용하게 만드는 규칙 추가
- .eslintrc.cjs 수정

  ```cjs
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      "airbnb", // airbnb-javascript style guide
      "airbnb-typescript", // airbnb-typescript style guide
      "airbnb/hooks", // React 훅 규칙
      "plugin:@typescript-eslint/recommended", // TypeScript ESLint 플러그인의 기본 권장 사항
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parserOptions: {
      project: "./tsconfig.eslint.json",
      ecmaVersion: 11,
      sourceType: "module",
    },
    ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "error",
    },
  };
  ```

- .prettierrc 파일 작성
  ```json
  {
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 80,
    "tabWidth": 2
  }
  ```

- 위 과정을 수행 시 code style은 ESlint, formatting은 Prettier로 사용할 수 있다.

### 5. Prettier 실행 및 ESLint 체크
```bash
npx prettier --write .
$ npx eslint . --ext .js,.jsx,.ts,.tsx
```

<hr>

### 부록. eslint 설정

- vscode에서 extension 설치 (ESLint)

### 부록. prettier 설정

- vscode에서 extension 설치(Prettier - Code formatter)

### 부록. vscode의 settings.json 설정 (eslint의 전역설정)

- 아래 코드 블럭의 key-value 쌍 추가

```json
{
  // Set the default
  "editor.formatOnSave": false,

  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true
  }
}
```

<br>
<hr>

# 24.01.09

git flow 란 브렌치 전략 중 하나

소스코드의 특정시점을 따서 개발

브렌치 모델
  깃랩 플로우
  깃허브 플로우
  깃 플로우(basic)

    마스터에서 디벨롭 브렌치 분기.
    마스터 1개, 디벨롭 1개
    특정 기능을 만들 때 디벨롭에서 피처 브렌치 생성
    피처 브렌치는 여러개 생성
    피처 브렌치 끝나면 디벨롭에 머지
    디벨롭 끝나면 릴리스 브렌치로 배포
    문제 없으면 마스터에 머지


    브렌치는 마스터, 핫픽스, 릴리스, 디벨롭, 피처

    

