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

### 단일 책임 원칙

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

