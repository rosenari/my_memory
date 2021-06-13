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
    //동의어 사용하지 말자!
    function displayMessage() {

    }

    function showName() {

    }
    //위 두개 함수모두 무언가 보여주는 함수인데
    //show와 display 두개의 동사로 표현하였다. 적절치못함.
})();

(function () {
    //매개변수 재사용 금지
    function ninjaFunction(elem) {
        elem = elem.toString(2);
        //전달된 변수가 변조되면 과연 좋을까 ?
        //차라리 아래처럼 새로 만들자
        let elemBinary = elem.toString(2);
    }
})();

(function () {
    //이유없이 언더스코어를 쓰지말자.
    let _name;//언더스코어를 쓰면 뭐가 좋을ㄲ ㅏ?
    let __value;
})();

(function () {
    //과장형용사는 쓰지말자
    let superElement;
    let megaFrame;
    let niceItem;
    //위처럼 절대 쓰지마라.
})();

(function () {
    //외부변수를 덮어쓰지마라
    let user;

    function render() {
        let user;
        //..코드..
        //함수영역에서 user변수를 외부변수로 착각하게 될수 있다.
    }
})();

(function () {
    //본래 함수 기능에 추가적인 기능을 추가하지말자.
    function isReady() {
        //체크만해서 true,false만 리턴하면되는데
        //alert을 띄운다거나하는 행위를 할 필요가없다.
        return true;
    }
});