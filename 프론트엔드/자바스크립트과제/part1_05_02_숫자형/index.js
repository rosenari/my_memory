(function () {
    //6.35를 소수점 2번쨰 자리에서 반올림하면 6.4이다.
    //그런데 밑처럼 반올림을 할경우 6.3이된다.
    console.log(6.35.toFixed(1));//6.3
    //why ?
    console.log(6.35.toFixed(20));//실제값은 6.3499999..이기때문..
    //그렇다면 최대한 정수형에 가깝게 만들어야한다.
    //정수형에 가깝게 만들어보자.
    //63.5는 .5로 끝나기때문에 즉 0.5가 정확히 1/2이므로,
    //63.500000000이다.
    //63.5에서 반올림후 다시 10을 나누면 정상적으로 반올림이 가능하다.
    console.log(Math.round(6.35 * 10) / 10);
})();

(function () {
    let i = 0;
    while (i < 11) {
        i += 0.2
        if (i >= 9 && i <= 11) {
            console.log(i);
        }
    }
    //무한 루프인 이유가 뭘까 ?
    //그 이유는 정밀도 손실때문이다.
    //9.9에서 바로 10.1이 되는 것을 볼 수 있다.
    //해결방법 ?
    i = 0;
    while (i != 10) {
        i /= 10;
        i += 0.2
        i *= 10;
    }
    console.log(i)
})();

(function () {
    console.log("random")

    function random(min, max) {//min<= random(부동소수) < max
        return (Math.random() * (max - min)) + min;
    }

    for (let i = 0; i < 1e7; i++) {
        let result = random(8, 10);
        if (Math.floor(result) >= 10 || Math.floor(result) < 8) {
            console.log(result);
            break;
        }
    }
})();

(function () {
    console.log("randomInteger");
    function randomInteger(min, max) {//min <= random(정수) <= max
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    for (let i = 0; i < 1e7; i++) {
        let result = randomInteger(8, 10);
        if (result > 10 || result < 8) {
            console.log(result);
            break;
        }
    }
})();