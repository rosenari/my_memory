//소수 출력하기
//에라토스테네스의 체 활용
function getPrimeNumbers(n) {
    let result = [];
    let isNot = new Array(n + 1).fill(false);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isNot[i]) continue;

        for (let j = i + i; j <= n; j += i) {
            isNot[j] = true;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (!isNot[i]) result.push(i);
    }

    return result;
}

console.log(getPrimeNumbers(50));