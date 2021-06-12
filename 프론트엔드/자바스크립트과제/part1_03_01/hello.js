function sayHello() {
    debugger
    console.log("hello");
    sayHello2.call(human);
}

function sayHello2() {
    debugger
    console.log("hello");
}

function Human() {
    this.name = "jangsoon";
}

let human = new Human();

debugger
sayHello();