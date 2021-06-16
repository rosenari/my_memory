(function () {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    console.log(sumSalaries(salaries)); // 650

    function sumSalaries(salaries) {
        let sum = 0;
        for (let salary of Object.values(salaries)) sum += salary;
        return sum;
    }
})();

(function () {
    let user = {
        name: 'John',
        age: 30
    };

    console.log(count(user));

    function count(user) {
        return Object.keys(user).length;
    }
})();