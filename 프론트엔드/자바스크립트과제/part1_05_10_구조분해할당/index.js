(function () {
    let user = {
        name: "John",
        years: 30
    };

    let { name, years: age, isAdmin = false } = user;
    console.log(name);
    console.log(age);
    console.log(isAdmin);
})();

(function () {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    console.log(topSalary(salaries))

    salaries = {};

    console.log(topSalary(salaries))

    function topSalary(salaries) {
        let max = 0;
        let maxName = null;

        for (let [name, salary] of Object.entries(salaries)) {
            if (max < salary) {
                max = salary;
                maxName = name;
            }
        }

        return maxName;
    }

})();