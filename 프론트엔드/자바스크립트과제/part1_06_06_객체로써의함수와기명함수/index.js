{
    function makeCounter() {
        let count = 0;

        return function func() {

            func.set = function (num) {
                count = num;
            }

            func.decrease = function () {
                count--;
            }

            return count++;
        }
    }

    let counter = makeCounter();

    console.log(counter()); // 0
    console.log(counter()); // 1

    counter.set(10); // set the new count

    console.log(counter()); // 10

    counter.decrease(); // decrease the count by 1

    console.log(counter()); // 10 (instead of 11)
}

{
    function sum(a) {

        let result = a;

        function func(b) {
            result += b;

            return func;
        }

        func.valueOf = function () {
            return result;
        }

        return func;
    }

    console.log(sum(1)(2) == 3);
    console.log(sum(1)(2)(3) == 6);
    console.log(sum(5)(-1)(2) == 6);
    console.log(sum(6)(-1)(-2)(-3) == 0);
    console.log(sum(0)(1)(2)(3)(4)(5) == 15)
}