#### Chapter 5. 논리집합 : 함수와 파일

`함수란 명칭이 부여된 구문 집합이다.`
`함수는 구문을 재작성하는데 낭비되는 시간을 절약해주는 코드 재사용의 열쇠이다.`

##### 함수 선언과 호출

```php
function header(){
    print "header ";
}

header();
print "hello ! ";
footer();

function footer(){
    print "footer ";
}
```
```
header hello ! footer
```

> - 함수의 선언 위치와 상관없이 같은 파일내 선언한 함수는 어느위치에서든 호출가능하다.

##### 함수의 인수 전달

```php
function func1($color){
    print "색상 : $color";
}
```
```php
func1('red'); //색상 : red
```
```php
func1(); //warning : 경고를 내뿜는다.
```

```php
function func2($color = 'red'){
    print "색상 : $color";
}
```
```php
func2(); //색상 : red
```

> - 함수에 인수가 전달이 되지 않았을때 기본값(리터럴만 가능하다)을 지정할 수 있다.

```php
function header($color, $title, $content = '내용이 없습니다') {
    ...
}
```
```php
header('red', '제목'); //$content 기본값이 사용된다.
header('red', '제목', '내용');
```

> - 선택적 인수는 마지막에 배치되어야한다.

##### 배열과 객체를 함수 인자로 전달

```php
$arr = [1,2,3,4,5];

function func1($arr){
    $arr[0] = 2;
}

func1($arr);

foreach($arr as $v){
    print $v;
}
```
```
12345
```

> - 배열인자로 전달하여 변경해도 함수 밖 배열에는 영향이 없다.

```php
class Human{
    public $name = 'jsworld';
}

function func($h){
    $h -> name = 'jj';
}

func($h);

print $h -> name;
```

```
jj
```

> - 객체를 인자로 전달하여 값을 바꿀 경우, 함수밖 객체에도 영향을 준다.
> - 레퍼런스(참조값)가 전달된다는 의미.

##### 함수안에서 전역변수 다루기

- 함수 밖에서 정의된 변수를 전역변수, 함수 안에서 정의된 변수를 지역변수라한다.

```php
$dinner = '카레';

function func1(){
    print "저녁 메뉴는 $dinner ,";
    $dinner = '김치찌개';
    print "$dinner 입니다.";
}

func1();
```
```
저녁메뉴는  , 김치찌개입니다.
```

> - 함수 내부에 `$dinner` 변수는 외부 `$dinner` 변수와는 완전히 무관하며, 새롭게 초기화된 변수이다.

```php
$dinner = '카레';

function func1(){
    $dinner = '삼겹살';
    print "저녁메뉴는 $dinner,";
    print $GLOBALS['dinner'];
    print "입니다. ";
    $GOBALS['dinner'] = '끝';
}

func1();
print $GOBALS['dinner'];
```
```
저녁메뉴는 삼겹살,카레입니다. 끝
```
> - 함수 내부에서 전역변수에 접근하기 위한 방법은 $GLOBALS라는 특수한 배열변수를 이용하면 된다.
> - $GLOBALS를 사용해 전역변수에 접근하여 수정도 가능하다.

```php
$dinner = '카레';

function func1(){
    global $dinner;
    print $dinner;
    print "  ";
    $dinner = '없음';
    print $dinner;
}
```
```
카레  없음
```
> - $GLOBALS 배열을 이용하는 법 이외에도 global `$dinner`는 함수내부에서 전역변수 $dinner를 사용하겠다는 의미이다.

##### 인수의 타입 선언

```php
function countdown(int $top){
    ...
}
countdown('test'); //TypeError
```

> - 인수에 타입을 지정하면, 타입이 아닌 값이 들어올 시에 PHP 엔진이 타입예외를 발생시킨다.(TypeError)
> - 예외는 예외 처리기를 통해 감지하여 처리할 수 있다. (6.3절에 나온답니다)

##### 반환형 선언

```php
function getFloatNumber($num): float {
    ...
    return $result;
}
```

> - 위의 경우 함수가 float이 아닌 값을 반환하면 타입예외를 발생시킵니다.(TypeError)

- PHP 7의 경우 선언된 인수와 반환 형이 일치하지 않더라도 형변환을 시도해 일치시키려 합니다.
- 즉 묵시적 변환을 시킵니다.
- 파일 맨위에 declare(strict_type = 1); 구문을 넣으면 느슨한 설정을 엄격한 설정으로 바꾸어 인수와 반환 값 형선언을 엄격하게 검사합니다. (float인수에 정수를 넣는 것은 여전히 허용, 전역적으로 선언은 안됨)

##### 다른 파일의 코드 실행

```php
//lib.php

function test(){
    ...
}
```

```php
require 'lib.php';

test();
```

> - PHP는 require를 만나면 현재 파일을 읽던 과정을 중지하고 require에 명시된 코드를 다 읽은 후 다시 원래 파일로 돌아와 작업을 재개한다.
> - require로 명시된 코드에 print문이 포함되어 있다면 그것도 실행된다.
> - php코드라면 어떤 파일이든 모두 require로 불러올 수 있다.
> - include도 동일한 역할을 하지만, require와 달리 없는 파일일 경우 에러를 뿜지않고 계속 실행한다.
