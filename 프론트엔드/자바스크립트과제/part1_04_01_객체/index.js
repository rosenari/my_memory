(function () {
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

    console.log(user);
})();

(function () {
    let schedule = {};
    console.log(isEmpty(schedule));
    schedule["8:30"] = "get up";
    console.log(isEmpty(schedule));

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }

        return true;
    }
})();

(function () {
    const user = {
        name: "John"
    };

    user.name = "Pete";
})();

(function () {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }

    let sum = 0;
    for (let employee in salaries) {
        sum += salaries[employee];
    }

    console.log(sum);
})();

(function () {
    // 함수 호출 전
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "number") {
                obj[key] *= 2;
            }
        }
    }
    console.log(menu);
})();