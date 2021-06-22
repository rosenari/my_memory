{
    class Rabbit extends Object {
        constructor(name) {
            super(); //상속클래스는 반드시 생성자 오버라이딩시 부모 생성자를 호출해줘야한다.
            this.name = name;
        }
    }

    let rabbit = new Rabbit("Rab");

    console.log(rabbit.hasOwnProperty('name')); // Error
}