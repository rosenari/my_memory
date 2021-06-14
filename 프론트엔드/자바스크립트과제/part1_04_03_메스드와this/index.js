(function () {
    function makeUser() {
        return {
            name: "John",
            ref() {
                return this;
            }
        };
    }

    //this는 함수 호출에서 결정된다.
    //속성 참조에서 결정되는 것이아님..
    let user = makeUser();
    console.log(user.ref().name);
})();

(function () {
    let calculator = {
        read() {
            this.a = 10;
            this.b = 20;
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    };

    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.mul());
})();

(function () {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function () {
            console.log(this.step);
        }
    };

    ladder.up().up().down().showStep();
})();