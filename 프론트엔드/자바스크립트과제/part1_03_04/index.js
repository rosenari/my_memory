//닌자코드를 작성하지 말자


(function () {
    //코드를 짧게 쓴다고 좋은 것이 아니다.
    let i = 0;
    let len = 1;

    //해석하기 매우 어려움.
    i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
})();

(function () {
    //변수는 사람이 바로 어떠한 데이터인지 알수 있는 명사를 사용하자 !
    //약어는 절대 사용하면 안된다.
    let lst; //list를 lst로 줄여쓰면 뭐가 좋을까 ?
    let ua;//userAgent로 정확한 명사를 사용하자.
    let brsr;//browser라고 쓰면 잘못되는 것이 없다.
})();

(function () {
    //포괄적인 명사보다는 세부적인 명사를 사용하자.
    let data; //어떤 데이터인지 알수가 없다.
    let str;  //문자열이긴한데 어떠한 것을 담는가 ?
    let num; //숫자긴한데 어떠한 숫자를 저장하는가 ?

})();

(function () {
    //철자가 유사한 단어를 사용하지말자
    let date;
    let data;
    //위와같이 하면 헷갈리기 마련이다.
})();

(function () {

})();