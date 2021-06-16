(function () {
    function sum(a) {

        return function (b) {
            return a + b;
        }
    }

    console.log(sum(1)(2));
    console.log(sum(5)(-1));
})();

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

    console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

    function inBetween(a, b) {
        return function (num) {
            if (num >= a && num <= b) return true;
            return false;
        }
    }

    function inArray(arr) {
        return function (num) {
            return arr.includes(num);
        }
    }
})();

(function () {
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    users.sort(byField('name'));
    console.log(users);
    users.sort(byField('age'));
    console.log(users);

    function byField(prop) {
        return function (a, b) {
            return a[prop] > b[prop] ? 1 : -1;
        }
    }
})();

(function () {
    function makeArmy() {
        let shooters = [];

        let i = 0;
        while (i < 10) {
            let shooter = function () {
                let num = i;
                return function () {
                    console.log(num);
                }
            };
            shooters.push(shooter());
            i++;
        }

        return shooters;
    }

    let army = makeArmy();

    army[0]();
    army[5]();
})();


(function () {
    function makeArmy() {
        let shooters = [];

        let i = 0;
        while (i < 10) {
            let j = i;//for문이나, while문은 블록을 
            //실행할때마다 새로운 렉시컬 환경을 생성함
            let shooter = function () {
                console.log(j);
            };
            shooters.push(shooter);
            i++;
        }

        return shooters;
    }

    let army = makeArmy();

    army[0]();
    army[5]();
})();