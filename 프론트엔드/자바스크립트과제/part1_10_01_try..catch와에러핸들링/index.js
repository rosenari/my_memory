function f() {
    try {
        console.log("try");//1
        return 1;//try에서 return시에도 finally 블록이 수행된후 리턴된다.
    } catch (e) {
        console.log("catch");
    } finally {
        console.log("finally");//2
    }
}

f();

function f2() {
    try {
        console.log("try");//1
        throw new Error("에러");
    } catch (e) {
        console.log("catch");//2
        throw new Error("다시 던지기");
        //다시 던지기로 에러가 외부 함수로 위임되는 경우에도 함수가 끝나기전 finally블록이 수행된다.
    } finally {
        console.log("finally");//3
    }
}

try {
    f2();
} catch (e) {
    console.log(e.message);//4
}