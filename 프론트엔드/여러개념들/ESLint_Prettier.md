### ESLint 란 ?

소스코드를 분석해서 문법에러,버그를 찾아 알려주는 도구입니다. 알려주는 것 뿐만아니라 고쳐주는 기능도 있다.

### Prettier 란 ?

코드에 적용되어 있는 스타일을 무시하고, 정해진 규칙대로 강제 교정하는 도구입니다. 강제적인 포맷터의 종류입니다.

### ESLint + Prettier

ESLint와 Prettier 중 하나만 쓰면되지 왜 두개다를 쓰는가 ? `ESLint로는 문법에러를 잡고 특정 문법요소를 쓰도록 만드는 등 코트 퀄리티와 관련된 작업`을 위해 사용하고, `Prettier는 들여쓰기와 공백,인용 스타일로 `'`를 쓸것인지 `"`를 쓸것인지 미학적으로 문제가 되는 것`들을 고쳐내는데 사용합니다.

### Visual Studio Code에 ESLint Prettier 적용 

먼저 프로젝트를 초기화합니다.

```bash
npm init -y
```

eslint 모듈을 설치합니다.(해당 프로젝트에만 설치)

```bash
npm install eslint --save-dev
```

prettier 모듈을 설치합니다.(해당 프로젝트에만 설치)

```bash
npm install prettier --save-dev --save-exact
```

추가 모듈을 설치합니다. (해당 프로젝트에만 설치)

```bash
npm install eslint-plugin-prettier eslint-config-prettier --save-dev
```

> - eslint-config-prettier: Prettier와 충돌할 설정들을 비활성화합니다. 
> - eslint-plugin-prettier: 코드 코맷할 때 Prettier를 사용하게 만드는 규칙을 추가합니다.


VS 코드에 ESLint Prettier 확장프로그램을 설치합니다.

.vscode/setting.json을 다음과 같이 설정합니다.(해당 프로젝트에서만 적용됨)

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

ESLint 설정 파일(.eslintrc.json)을 생성 후 다음과 같이 설정합니다.(해당 프로젝트에만 적용)

```json
{
    "plugins": ["prettier"],
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "prettier/prettier": "error"
    }
}
```

Prettier 설정파일(.prettierrc.json)을 생성후 다음과 같이 설정합니다.(해당 프로젝트에만 적용)

```json
{
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
}
```

마지막으로 eslint와 Prettier 확장 프로그램을 껏다 킨후 vs코드를 종료했다가 다시 키면 설정파일이 적용됩니다.