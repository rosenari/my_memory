#### 파이썬스러운 코드

- 프로그래밍에서 `관용구란 특정작업을 수행하기 위해 코드를 작성하는 특별한 방법`이다.
- 사람들은 관용구를 패턴이라 부르지만, 디자인 패턴과는 다른 개념이다. 디자인 패턴은 언어와는 무관한 고차원 개념이다.
- 관용구는 해당 언어로 작업을 처리하는 고유한 관용구를 가지고 있다. 이러한 `관용구를 따른 파이썬 코드를 파이썬스럽다` 라고 한다.

###### 파이썬스러운 코드의 장점

- 관용적인 코드는 일반적으로 더 나은 성능을 발휘한다.
- 팀에서 관용구를 따르게 되면 동일한 패턴과 구조에 익숙해지고 실수를 줄일 수 있게 된다.

###### 인덱스와 슬라이스

- 파이썬의 일부 데이터구조와 타입은 자신이 가진 요소에 인덱스를 통해 접근하는 것을 지원한다.
- 파이썬스러운 접근방식을 제공하는데, 예로 음수 인덱스(끝에서부터 접근)를 사용한 접근이 가능하다.
- slice를 사용하여 특정 구간의 요소를 구할 수도 있다.

```python
>>> my_number = (4, 5, 3, 9)
>>> my_number[-1]
9
>>> my_number[-3]
5
```

- 시퀀스(연속적인 자료구조)에 간격을 전달하는 것은 slice를 전달하는 것과 같다. slice는 내장객체로 직접 빌드하여 전달할 수 있다.
- slice는 파이썬의 내장객체로써, 직접 빌드하여 전달가능하다.

```python
>>> interval = slice(1, 7, 2)
>>> my_number[interval] #my_number가 (0,1,2,3,4,5,6,7) 일때
(1, 3, 5)
>>> interval = slice(None, 3)
>>> my_number[interval] == my_number[:3]
True
```

###### 자체 시퀀스 생성

- 시퀀스란 연속적인 자료구조를 말하며, 인덱싱이 가능한 객체이다.
- myobject[key]와 같이 사용할때 호출되는 메서드로 `__getitem__`이라는 매직 메서드가 있다.
- 시퀀스는 `__getitem__`과 `__len__`을 모두 구현하는 객체이다. (리스트, 튜플, 문자열 모두 시퀀스 객체이다)
- list를 래핑하여 만든 자체 시퀀스를 만들 수 있다.

```python
class Items:
    def __init__(self, *values):
        self._values_ = list(values)
  
    def __len__(self):
        return len(self._values)
        
    def __getitem(self, item):
        return self._values_.__getitem__(item)
```

> - `*values`는 파라미터로 몇개를 받을 지 모를때 사용한다.(`*`는 튜플형태로, `**`는 디셔너리형태로 받는다)
> - 위 예제는 list를 래핑하여 만들 Items 시퀀스 클래스이다.
> - 시퀀스 구현시 주의할 점: 
> - 인덱싱한 결과는 해당 클래스와 같은 타입의 인스턴스여야한다..
> - slice에 의해 제공된 범위는 기존 방식처럼 마지막 요소를 제외해야한다.

- 범위로 인덱싱한 결과가 해당 클래스와 같은타입의 인스턴스인 예제

```python
>>> range(1, 100)[25:50]
range(26,51) # 리스트가 아닌 새로운 range를 리턴받았다.
```

###### 컨텍스트 관리자

- 컨텍스트 관리자는 `__enter__`와 `__exit__` 메서드로 구현되어 컨텍스트 진입 전, 후 로직을 보유한 객체를 말한다.
- 예를 들어 리소스를 다룰 때(파일, DB등), 파일 열기, 닫기로 나누어 로직처리가 가능한 프로토콜을 구현한다.
- 보통 with 키워드와 함께 사용하는데, with문은 컨텍스트 관리자의 `__enter__` 메서드를 호출하고, 블록에 대한 문장이 끝나면 `__exit__`메서드가 호출된다.
- 컨텍스트 관리자를 사용하면, 관심사를 분리하고, 독립적으로 유지하기 위한 코드를 분리하기에 좋은 방법이다.

```python
fd = open(filename)
try:
    process_file(fd)
finally:
    fd.close()
```
> 컨텍스트 관리자를 사용하지 않았다. 
> 사후 로직이 드러난다. (해당 코드 영역에서 관리해야함)

```python
with open(filename) as fd:
    process_file(fd)
```
> 컨텍스트 관리자를 사용한다.
> 사후 로직이 감춰진다. (해당 코드 영역에서 사후처리를 생각할 필요가 없음. 파일 처리만을 생각)

- 더 좋은 예제로 데이터베이스 백업 예제가 있다.

```python
def stop_database():
    run("systemctl stop postgresql.service")
    
def start_database():
    run("systemctl start postgresql.service")
    
class DBHandler:
    def __enter__(self):
        stop_database()
        return self
    
    def __exit___(self, exc_type, ex_value, ex_trackback):
        start_database()

def db_backup():
    run("pg_dump database")
    
def main():
    with DBHanlder():
        db_backup()
```

> - 현재 위 예제에서 enter의 반환값은 사용되지 않는다. 하지만 enter매직 메서드에서 항상 무언가를 반환해주는 것은 좋다.
> - exit매직메서드의 경우 블록에서 예외가 발생한 경우, 파라미터를 받는다.
> - exit매직메서드에서 True를 반환할 경우, 예외를 정상처리합니다. 즉, 예외를 삼키게 됩니다.

###### 컨텍스트 관리자를 구현하는 다양한 방법

- 함수에 contextlib 모듈의 contextmanager 데코레이터를 적용하여 컨텍스트 관리자로 변환 시킬수 있다.
- 다만 대상함수는 제터레이터라고 하는 특수한 형태의 함수여야한다

```python
import contextlib

@contextlib.contextmanager
def db_handler():
    stop_database()
    yield
    start_database()

with db_hanlder():
    db_backup()
```
> - 데코레이터를 적용하면 yield 앞의 모든 로직은 `__enter__`처럼 취급된다.
> - 함수 로직 수행후 yield 뒤 로직은 `__exit__`처럼 취급된다.
> - 위에서는 `__enter__`에서 아무것도 반환하지 않았지만, yield문에 반환값을 명시하여 with .. as문을 통해 반환값을 사용할 수 있다.
> - 어느 객체에도 속하지 않는(상태가 필요없는) 컨텍스트관리자를 구현할때, 많이 사용된다.

- 또 다른 방법으로는 contextlib.ContextDecorator이다.
- 이 클래스를 상속받아 구현한 컨텍스트 관리자를 통해서도 함수를 데코레이팅 할 수 있다.
- contextlib.ContextDecorator는 다른 클래스에서 필요한 기능을 섞어 사용할 수 있도록 메서드를 제공하는 유틸리티 형태의 믹스인 클래스이다.

```python
class dbhanlder_decorator(contextlib.ContextDecorator):
    def __enter__(self):
        stop_database()
    
    def __exit__(self, ext_type, ex_value, ex_trackback):
        start_database()
        
@dbhandler_decorator
def offline_backup():
    run("pg_dump database")
```

> - 이 방식은 with문이 필요없으며, 완전 독립적인 컨텍스트 관리자이다. 그래서 컨텍스트 관리자로부터 객체를 반환받을 수 없다.
> - 데코레이터는 로직을 한번 정의하면 동일한 로직을 필요로 하는 함수에 단지 데코레이터를 적용함으로써, 원하는 만큼 재사용 가능하다.

- contextlib.suppress는 제공한 예외 중 하나가 발생한 경우 실패하지 않도록 처리하는 기능이다.

```python
with contextlib.suppress(DataConversionException): # DataConversionException이 발생해도 이미 기대한 것이기에 무시한다.
    parse_data(input_json_or_dict)
```

###### 파이썬에서의 접근제어자

- 다른언어들에서는 private,protected,public과 같은 접근제어자가 있다. 하지만 파이썬의 모든 함수와 프로퍼티는 기본적으로 public이다.
- private의 경우 관용적으로 `_`를 앞에 붙여 사용한다. (`__` 밑줄 두개는 다른 이름을 만들어내기때문에 유의하자.)

```python
class Connector:
     def __init__(self, source):
         self.source = source;
         self._timeout = 60 # private
```

###### 프로퍼티

- `@property`와 `@{property명}.setter` 데코레이터를 통해 쿼리(읽기), 명령(쓰기) 프로퍼티를 선언할 수 있다.

```python
import re

EMAIL_FORMAT = re.compile(r"[^@]+@[^@]+[^@]+")

def is_valid_email(potentially_vaild_email: str):
    return re.match(EMAIL_FORMAT, potentially_vaild_email) is not None

class User:
    def __init__(self, username):
        self.username = username
        self._email = None
    
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, new_email):
        if not is_valid_email(new_email):
            raise ValueError(f"유효한 이메일이 아니므로 {new_email}값을 사용할 수 없음")
        self._email = new_email
```

> 명령, 쿼리 분리 원칙에 따라 하나의 작업만을 수행하도록 하는 것이 적절하다.

###### 반복가능한 객체

- 파이썬에서는 반복가능한 객체를 자체적으로 만들 수 있다.
- 반복가능한 객체로는 시퀀스, 이터러블, 이터레이터가 있다
- 이터러블은 `__iter__`를 구현한 객체, 이터레이터는 `__next__`를 구현한 객체이다.
- 이터러블은 이터레이터를 반환한다.

```python
from datetime import timedelta

class DateRangeIterable:
    """ 자체 이터레이터 메서드를 가지고 있는 이터러블 """
   
    def __init__(self, start_date, end_date):
        self.start_date = start_date
        self.end_date = end_date
        self._present_day = start_date
        
    def __iter__(self):
        return self
        
    def __next__(self):
        if self._present_day >= self.end_date:
            raise StopIteration
        today = self._present_day
        self._present_day += timedelta(days=1)
        return today
```

```python
for day in DateRangeIterable(date(2019, 1, 1), date(2019, 1, 5)):
    print(day)
```

> - for in 을 통해 반복을 수행하려 하면 `__iter__` 메서드가 호출되고, `__iter__` 메서드에서 반환된 이터레이터는 자기자신임을 나타낸다.
> - 각 루프의 단계마다 next를 호출하며, 더이상 생산할것이 없으면, StopIteration 예외를 호출하여 반복을 중단한다.
> - 이터레이터는 각 단계마다 데이터를 생성하기때문에, 메모리 효율이 좋다.

- 위처럼 이터러블 객체를 만들면 문제가 하나있다.
- self를 반환하기때문에 계속 동일한 객체를 참조해서 한번 호출해서 얻은 이터러블 객체가 끝에 다다르면, 더이상 반복을 할수가 없다는 것이다
- 이러한 문제를 해결하기 위해 제너레이터(이터레이터를 생성하는 함수)를 사용할 수 있다.

```python
class DateRangeContainerIterable:
    def __init__(self, start_date, end_date):
        self.start_date = start_date
        self.end_date = end_date
        
    def __iter__(self):
        current_day = self.start_date
        while current_day < self.end_date:
            yield current_day
            current_day += timedelta(days=1)
```

> - 위처럼 작성하면 이터러블 객체가 호출될때마다 새로운 이터레이터 객체를 반환한다.
> - yield로 작성된 함수는 제너레이터 함수로 매번 새로운 이터레이터 객체를 반환한다.
> - 위와같이 `__iter__`메서드를 통해 새로운 이터레이터 객체를 반환하는 객체를 컨테이너 이터러블 객체라 칭한다.

