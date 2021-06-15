(function () {
    function camelize(str) {
        return str.split("-")
            .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
    }

    console.log(camelize("background-color"));
    console.log(camelize("list-style-image"))
    console.log(camelize("-webkit-transition"))
})();

(function () {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    console.log(filtered);
    console.log(arr);

    function filterRange(arr, min, max) {
        return arr.filter(num => num >= min && num <= max);
    }
})();

(function () {
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    console.log(arr);

    function filterRangeInPlace(arr, min, max) {
        arr.forEach((v, i) => {
            if (v < min || v > max) arr.splice(i, 1);
        });
    }
})();

(function () {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);

    console.log(sorted);
    console.log(arr);

    function copySorted(arr) {
        return arr.slice().sort((a, b) => a.localeCompare(b));
    }
})();

(function () {
    function Calculator() {
        this.name = ['+', '-'];
        this.operator = [];
        this.operator[0] = (a, b) => a + b;
        this.operator[1] = (a, b) => a - b;
    }

    Calculator.prototype.calculate = function (str) {
        let num = str.split(' ');
        let index = this.name.findIndex(n => n == num[1]);

        return this.operator[index](+num[0], +num[2]);
    }

    Calculator.prototype.addMethod = function (name, func) {
        this.name.push(name);
        this.operator.push(func);
    }

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    console.log(result);


})();

(function () {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];

    let names = users.map(obj => obj.name);

    console.log(names); // John, Pete, Mary
})();

(function () {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];

    let usersMapped = users.map(user => {
        return {
            fullName: `${user.name} ${user.surname}`,
            id: user.id
        }
    });

    console.log(usersMapped[0].id) // 1
    console.log(usersMapped[0].fullName) // John Smith
})();

(function () {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    sortByAge(arr);

    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete

    function sortByAge(arr) {
        arr.sort((a, b) => a.age - b.age);
    }
})();

(function () {
    //모든 순열이 동일한 확률로 발생하도록 무작위 섞기 함수 구현
    let arr = [1, 2, 3];

    shuffle(arr);
    console.log(arr);

    shuffle(arr);
    console.log(arr);

    shuffle(arr);
    console.log(arr);

    /* 나의 구린 solve
    function shuffle(arr) {
        for (let i = 0; i < arr.length; i++) {
            let num1 = Math.floor(Math.random() * (arr.length));
            let num2 = Math.floor(Math.random() * (arr.length));

            let temp = arr[num1];
            arr[num1] = arr[num2];
            arr[num2] = temp;
        }
    }*/

    /*
    function shuffle(arr) {
        arr.sort(() => Math.random() - 0.5);
        //양수와 음수에 따라 비교대상의 순서가 바뀌거나 그대로인데
        //양수 음수가 동일하게 나오게 하려면
        //Math.random의 경우 0<= Math.random < 1 사이의 소수들이 나온다.
        //즉 0.5를 빼면 양수와 음수가 나올 확률이 반반이 된다.
        //0.5이상이 반,0.5이하가 반이기때문에
        //하지만 실제로는 동일한 확률로 순열이 생성되지 않는다.
    }
    */

    //피셔-예이츠 알고리즘
    function shuffle(arr) {
        //배열 끝요소부터 시작해 앞으로 하나씩 나아가며
        //해당 요소 앞의 임의의 요소와 스왑하는 알고리즘
        for (let i = arr.length - 1; i >= 1; i--) {
            let j = Math.floor(Math.random() * i);

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

})();

(function () {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];

    console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

    function getAverageAge(arr) {
        let sum = arr.reduce((sum, human) => sum + human.age, 0)
        return sum / arr.length;
    }
})();

(function () {
    function unique(arr) {
        let store = [];
        for (let human of arr) {
            if (!store.includes(human)) store.push(human);
        }
        return store;
    }

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(strings)); // Hare, Krishna, :-O
})();