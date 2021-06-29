## 결합도와 응집도

좋은 소프트웨어 설계를 위해서는 `결합도를 낮추고 응집도는 높이는 것`이 바람직하다.
`결합도`는 `모듈간의 상호 의존도`로 결합도가 `낮으면` 모듈간 상호 의존성이 줄어 `재사용성과 수정,유지보수에 용이`하다.
`응집도`는 `하나의 모듈 내부에 존재하는 구성요소들의 기능적 관련성`이다.
`응집도`가 `높으면` 하나의 책임에 집중되므로 `독립성이 높아져 재사용성 수정,유지보수에 용이`다.

## SOLID 원칙

SOLID 원칙들은 결합도를 낮추고, 응집력을 높이는 데 사용되는 객체지향 대표 원칙들입니다.

- 단일책임원칙 (SRP : Single Responsibility Principle)
- 개방/폐쇄 원칙 (OCP : Open-Closed Principle)
- 리스코프 치환 원칙 (LSP : Liskov Substitution Principle)
- 인터페이스 분리 원칙 (ISP : Interface Segregation Principle)
- 의존성 역전 원칙 (DIP : Dependency Inversion Principle)

### 단일 책임 원칙 (SRP)

단일 클래스(하나의 클래스)는 오직 한 가지 일에만 책임이 있어야 합니다.
하나의 클래스에 한가지 이상의 책임이 있다면 당신이 클래스를 수정해야할 이유가 한가지 이상이 됩니다.


```javascript
class Animal{
    constructor(name: string) {}
    getAnimalName() {}
    saveAnimal(a: Animal) {}
}
```

> 위 Animal 클래스의 책임은 두가지이므로 단일 책임 원칙을 위반합니다.
> Animal 데이터베이스 관리와 Animal의 속성을 관리하는 책임 두가지 이므로 위반됩니다.
> Animal 데이터베이스에 객체추가 메서드를 변경하게되면 클래스가 `변경`되므로 클래스에 포함된 다른 책임 역시 영향 범위에 들어오게 된다.

```javascript
class Animal{
    constructor(name: string) { }
    getAnimalName() { }
}
class AnimalDB{
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}
```

> 두가지 책임을 Animal과 AnimalDB클래스로 분리하여 독립시킨다.
> 클래스를 분리시킴으로써 결합도는 낮아지고, 응집력은 높아진다.

### 개방 폐쇄 원칙 (OCP)

소프트웨어 엔티티(클래스,모듈,함수)는 확장을 위해 열려있어야하며, 수정시에는 폐쇄적이어야한다는 원칙이다.
쉽게말하면 기존 소스코드를 수정하지 않고도 모듈의 기능을 확장 할 수 있도록 잘 설계해야한다는 말이다.

```typescript
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
}

//...

const animals: Array<Animal> = [
    new Animal('lion'),
    new Animal('mouse')
];

function AnimalSound(a: Array<Animal>){
    for(let i = 0; i<= a.length;i++){
        if(a[i].name == 'lion')
            return 'roar';
        if(a[i].name == 'mouse')
            return 'squeak';
    }
}
AnimalSound(animals);
```

> 위 코드는 OCP를 위반한 코드이다. AnimalSound 함수를 보게되면 lion과 mouse 이름속성에 대해서만 처리가가능하다.
> 새로운 동물 이름속성이 나타나면 AnimalSound에 분기문을 추가함으로써 함수를 계속 수정해야하는 문제가 생긴다.

```typescript
class Animal{
    makeSound();
    //..
}

class Lion extends Animal{
    makeSound(){
        return 'roar';
    }
}

class Squirrel extends Animal{
    makeSound(){
        return 'squeak';
    }
}

class Snake extends Animal {
    makeSound(){
        return 'hiss';
    }
}

//..
function AnimalSound(a: Array<Animal>){
    for(let i = 0;i<=a.length;i++){
        a[i].makeSound();
    }
}
```

> 위와 같이 다형성을 활용해 코드를 설계하면 동물이 계속 추가되어도 AnimalSound함수의 수정이 필요가 없다. 즉 확장에 유리해진다.

### 리스코프 치환 원칙 (LSP)

하위 클래스는 반드시 상위클래스를 대체 가능 해야한다는 원칙이다.
즉 부모 클래스로 생성된 객체에서 가능한 행위는 자식클래스로 치환해도 일관되게 수행가능해야합니다.
LSP는 두가지의 예제를 가지고 설명을 해보도록 하겠습니다.

```javascript
class Bag{
    constructor(){
        this.price = 0;
    }

    setPrice(price){
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

class DiscountedBag extends Bag{
    constructor(){
        super();
        this.discountedRate = 1;
    }

    setDiscounted(discountedRate){
        this.discountedRate = discountedRate;
    }

    setPrice(price){
        super.setPrice(price - (this.discountedRate * price));
    }
}

const bag = new Bag();
bag.setPrice(10000);
const discountedbag = new DiscountedBag();
discountedbag.setPrice(10000);
console.log(bag.getPrice());
console.log(discountedbag.getPrice());
```

> 위 코드는 LSP 원칙을 위반합니다. setPrice가 오버라이딩 되면서 기존 부모클래스의 setPrice의 동작의 일관성을 지키지 못했기때문입니다.
> setPrice는 인자로 받은 값을 price로 설정해야하나 강제적으로 할인율이 적용되면서 일관성을 헤치게 되었습니다.
> 부모클래스가 자식클래스로 대체되면 동작은 변화됩니다.

LSP 원칙을 지키도록 DiscountedBad 클래스를 변경해보겠습니다.

```javascript
//...
class DiscountedBag extends Bag{
    constructor(){
        super();
        this.discountedRate = 1;
    }

    setDiscounted(discountedRate){
        this.discountedRate = discountedRate;
    }

    applyDiscount(price){
        super.setPrice(price - (this.discountedRate * price));
    }
}
//...
```

> 위처럼 하면 setPrice의 행위를 일관되게 유지하면서 할인율을 적용할 수 있습니다.
> 위 처럼 설계하면 부모클래스를 자식클래스가 대체할 수 있으며, 일관되게 동작합니다.

예제를 하나 더 보겠습니다. 정사각형과 직사각형 예제인데요.

```javascript
class Rectangle{
    constructor(){
        this.width = 0;
        this.height = 0;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Square extends Rectangle{
    setWidth(width){
        this.width = width;
        this.height = width;
    }

    setHeight(height){
        this.width = height;
        this.height = height;
    }
}

function getRectanglesArea(rect){
    return rect.getArea();
}

let rect = new Rectangle();
rect.setWidth(10);
rect.setHeight(20);
let square = new Square();
square.setWidth(10);
square.setHeight(20);

console.log(getRectanglesArea(rect)); //200
console.log(getRectanglesArea(square)); //400
```

> 위 코드는 LSP 원칙을 위배하였습니다. setWidth와 setHeight의 일관성을 헤치면서 직사각형 클래스로 생성한 객체를 정사각형으로 치환하는 순간 getArea의 결과값이 달라집니다. 즉 일관성이 무너집니다.

LSP 원칙을 지키려면 정사각형과 직사각형의 부모자식관계를 뒤바꾸면 되긴한다.

```javascript
class Square{
    constructor(){
        this.width = 0;
        this.height = 0;
    }

    setLength(len){
        this.width = len;
        this.height = len;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Square{
    constructor(){
        this.width = 0;
        this.height = 0;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }
}

function getRectanglesArea(rect){
    return rect.getArea();
}
```

> 이렇게하면 정사각형으로 만든 객체를 직사각형 클래스로 치환해도 동일하게 동작한다.

### 인터페이스 분리 원칙 (ISP)

클라이언트가 자신이 이용하지 않는 메서드에 의존하지 않아야 하는 원칙이다.
쉽게 말해 `인터페이스를 구현하는 클래스는 사용하지 않는 메서드 구현을 강요받지 않아야 한다는 원칙이다.`

예를들어 복합기라는 인터페이스가 있다고 하자.
그리고 해당 인터페이스를 통해 복사,프린터,팩스 클래스를 구현한다고 해보자.

```typescript
interface 복합기{
    copy(): void;
    fax(): void;
    print(): void;
}

class 복사 implements 복합기{
    //복합기 메서드를 모두 구현해야함..
    //근데 복사 클래스는 copy메서드만 사용함.
}

class 프린터 implements 복합기{
    //복합기 메서드를 모두 구현해야함..
    //근데 프린터 클래스는 print메서드만 사용함.
}

class 팩스 implements 복합기{
    //복합기 메서드를 모두 구현해야함..
    //근데 팩스 클래스는 fax메서드만 사용함.
}

class 복합기 implements 복합기{
    //모든 메서드 사용
}
```

> 위의 코드에서 3개의 클래스는 복합기 인터페이스 구현을 강제받고있다.
> 각각의 클래스가 비대해지면서, 유지보수가 불리해진다.

ISP 원칙을 위배하는 위 코드에서 복합기 인터페이스 대신에 복사,팩스,프린터 3개의 인터페이스로 분리한뒤 복합기 클래스 작성시에는 3개의 인터페이스를 구현하도록하자.

```typescript
interface 복사기{
    copy(): void;
}

interface 프린터{
    print(): void;
}

interface 팩스기{
    fax(): void;
}

class 복사기구현체 implements 복사기{
}

class 프린터구현체 implements 프린터{
}

class 팩스기구현체 implements 팩스기{
}

class 복합기구현체 implements 복사기,프린터,팩스기{
}
```

> ISP원칙을 적용하니 결합도가 낮아지고 응집도가 올라갔다.

