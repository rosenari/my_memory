(function () {
    function A() {
        return this.__proto__.__proto__;
    }

    function B() {
        return this.__proto__.__proto__;
    }

    let a = new A;
    let b = new B;

    console.log(a == b);
})();

(function () {
    function Calculator() { }

    Calculator.prototype.read = function () {
        this.a = 10;
        this.b = 20;
    }

    Calculator.prototype.sum = function () {
        return this.a + this.b;
    }

    Calculator.prototype.mul = function () {
        return this.a * this.b;
    }

    let calculator = new Calculator();

    calculator.read();

    console.log("Sum=" + calculator.sum());
    console.log("Mul=" + calculator.mul());
})();

(function () {

    function Accumulator(startingValue) {
        this.value = startingValue;
    }

    Accumulator.prototype.read = function () {
        this.value += 10;
    }

    let accumulator = new Accumulator(10);

    accumulator.read();
    accumulator.read();

    console.log(accumulator.value);
})();