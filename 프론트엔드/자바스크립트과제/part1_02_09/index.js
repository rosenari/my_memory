(function () {
    console.log(5 > 4);//true
    console.log("apple" > "pineapple");//false
    console.log("2" > "12");//true
    console.log(undefined == null);//true
    console.log(undefined === null);//false
    console.log(null == "\n0\n");//false
    console.log(null === +"\n0\n");//false
})();