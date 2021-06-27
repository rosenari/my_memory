### --save와 --save-dev의 차이점

npm의 옵션인데, npm install시 위 옵션 두개다 node_modules디렉터리에 패키지를 설치되며, package.json에 의존성 패키지로 등록됩니다.
--save의 경우 dependencies 항목에 추가되고, --save-dev의 경우 devDependencies 항목에 추가됩니다.
`--production 옵션을 붙여 빌드(웹팩 번들링)하거나 설치(npm install)시 --save-dev로 설정된 의존성 패키지들은 설치되지 않고, 번들링 되지 않습니다.`