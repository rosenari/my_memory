(function () {
    let fruits = ["사과", "배", "오렌지"];
    let shoppingCart = fruits;

    shoppingCart.push("바나나");

    console.log(fruits.length);
})();

(function () {
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor((styles.length - 1) / 2)] = "Classics";
    console.log(styles.shift());
    styles.unshift("Rap", "Reggae");
    console.log(styles);
})();

(function () {
    let arr = ["a", "b"];

    arr.push(function () {
        console.log(this);
    });

    arr[2]();//배열의 함수를 호출하는 것은
    //obj[method]()와 같다.
    //obj.method()와 같다.
    //this는 arr을 지칭함. 배열도 함수임.
})();

(function () {
    //나의 풀이 시간복잡도 : O(n^2)
    function getMaxSubSum(arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                max = Math.max(sum, max);
            }
        }
        return max;
    }

    console.log(getMaxSubSum([-1, 2, 3, -9]));
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
    console.log(getMaxSubSum([-2, -1, 1, 2]));
    console.log(getMaxSubSum([100, -9, 2, -3, 5]));
    console.log(getMaxSubSum([1, 2, 3]));
    console.log(getMaxSubSum([-1, -2, -3]));
})();

(function () {
    //최대합 부분 배열 문제 알고리즘
    function getMaxSubSum(arr) {
        let max = 0;
        let partSum = 0;
        for (let num of arr) {
            partSum += num;
            max = Math.max(max, partSum);
            if (partSum < 0) partSum = 0;
        }

        return max;
    }
    console.log("===")
    console.log(getMaxSubSum([-1, 2, 3, -9]));
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
    console.log(getMaxSubSum([-2, -1, 1, 2]));
    console.log(getMaxSubSum([100, -9, 2, -3, 5]));
    console.log(getMaxSubSum([1, 2, 3]));
    console.log(getMaxSubSum([-1, -2, -3]));
})();