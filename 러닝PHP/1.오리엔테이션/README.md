#### Chapter 1. 오리엔테이션

##### 일반적인 웹서버와 클라이언트(브라우저)간의 통신흐름

![image](https://user-images.githubusercontent.com/49670068/147460350-bed7e08f-ecc5-4039-a7f0-47df4cc617c1.png)

> 클라이언트(브라우저)가 아파치(웹서버)에 HTML파일을 요청하면 디스크 드라이브 입출력을 통해 브라우저에게 HTML파일을 제공한다.

##### 웹서버와 클라이언트(브라우저)간 PHP엔진이 관여하는 경우

![image](https://user-images.githubusercontent.com/49670068/147460244-6719f6c7-785b-4c1a-9410-fffba323d66f.png)

> 클라이언트(브라우저)가 아파치(웹서버)에 php파일을 요청하면 아파치는 php엔진에게 요청을 위임하고, php엔진은 php파일을 해석,실행한다. 그리고 아파치는 php 프로그램의 출력을 전달받은 후 브라우저에게 응답한다.

- PHP 언어는 PHP엔진에 의해 해석, 실행된다.
- PHP 엔진은 웹서버쪽에서 작동하기 때문에 서버사이드 언어라 불린다.
- PHP가 생성하는 동적 페이지는 서버에게 동적으로 생성되어 클라이언트로 반환되는 페이지이다.

##### PHP의 특징

- PHP는 무료이다. (대부분의 OS에 PHP가 기본으로 설치되어있기도 하다.)
- PHP는 오픈소스이다. (C로 작성된 PHP 엔진의 내부를 볼 수 있다.)
- PHP는 크로스플랫폼을 지원한다.(다양한 OS에서 동일한 소스파일을 실행할 수 있다.)
- PHP는 광범위하게 사용된다.(이미 PHP로 구축된 대형 서비스들이 존재)
- PHP는 여러 고급기능들을 제공하며, 사용자 입력과 화면 출력에 초점을 맞출 수 있다.
- PHP는 웹개발에 최적화된 언어이다.(DB 연동, 쿠키관리, 동적페이지 생성에 최적화된 기능과 구조를 가지고 있다.)

##### Hello world

```php
<html>
<body>
<b>
<?php
    print "hello world!";
?>
</b>
</body>
</html>
```

> php는 `<?`php로 시작하고 `?>`로 닫히는 스코프에 작성된다.

##### form 예제

- index.html
```html
<form method="POST" action="sayhello.php">
    이름: <input type="text" name="user" />
    <br />
    <button type="submit">인사</button>
</form>
```
- sayhello.php
```php
<?php
    print "hello ";
    print $_POST['user']; //post로 전달된 user파라미터의 값
    print "!";
?>
```

> php는 변화되는 정보를 출력할때, 유용하다.
> //로 한줄주석을 작성할 수 있다.

##### 내장 라이브러리 함수

```php
<?php
    print "한국의 대략적인 인구: ";
    print number_format(50801405);
?>
```

> php는 내장함수를 사용할 수 있고, 함수의 리턴값을 출력할 수 있다.

##### 데이터베이스 연동

```php
<?php
    $db = new PDO('sqlite:dinner.db'); //sqlite DB의 dinner.db를 사용
    $meals = array('아침','점심','저녁');
    if(in_array($_POST['meal'], $meals)) { //전달된 meal값 meals array 포함여부
        $stmt = $db -> prepare('SELECT dish, price FROM meals WHERE meal LIKE ?');
        //prepare : 실행할 명령문을 준비하고, 명령문 개체를 반환
        $stmt -> execute(array($_POST['meal'])); //배열의 값들을 넣어 명령을 실행
        $rows = $stmt -> fetchAll(); //결과집합을 가져옵니다.
        if(count($rows) == 0) {
            print "가능한 요리가 없습니다.";
        } else {
            print "<table><tr><th>요리</th><th>가격</th></tr>";
            foreach($rows as $row) {
                print "<tr><td>$row[0]</td><td>$row[1]</td></tr>";
            }
            print "</table>";
        }
    } else {
        print "알 수 없는 메뉴";
    }
?>
```

> 데이터베이스 연동을 매우 짧은 줄로도 구현가능하다.

##### php 규칙

- 시작태그와 종료태그는 `<?php` `?>`를 권장한다. 종료태그를 적지 않더라도 파일의 끝을 만나면 엔진이 자동으로 종료태그를 넣어 실행한다.
- php는 화이트 스페이스와 대소문자를 구별하지 않는다.

```php
<?php
print number_format(50801405);
PRINT    NUMBER_FORMAT(50801405);
print"TEST";
print  number_formaT(50801405);
?>
```

> 위 코드는 정상적으로 실행된다.

- 한줄 주석은 `//` 또는 `#`으로 작성가능하다.
- 여러줄 주석은 `/*` `*/`으로 작성가능하다.

```php
<?php

# 이줄을 주석입니다.
// 이줄도 주석입니다.
print "hello";

// 주석에 //나 #을 써도됩니다.

/*
 이것은 여러줄 주석
 입니다.
*/
?>
```