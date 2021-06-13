describe('pow', function () {
    describe('x를 3번 곱합니다.', function () {

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }

        function makeTest(x) {
            let expected = x * x * x;

            it(`${x}를 3번 곱하면 ${expected}입니다.`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }
    })

    describe('x를 5번 곱합니다.', function () {

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }

        function makeTest(x) {
            let expected = x * x * x * x * x;

            it(`${x}를 5번 곱하면 ${expected}입니다.`, function () {
                assert.equal(pow(x, 5), expected);
            });
        }
    })

    describe('x를 10번 곱합니다.', function () {

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }

        function makeTest(x) {
            let expected = x * x * x * x * x * x * x * x * x * x;

            it(`${x}를 10번 곱하면 ${expected}입니다.`, function () {
                assert.equal(pow(x, 10), expected);
            });
        }
    })

    describe('n이 음수일 경우', function () {

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }

        function makeTest(x) {
            it(`${x}의 -1승은 ${NaN}입니다.`, function () {
                assert.isNaN(pow(5, -1));
            });
        }
    })
});