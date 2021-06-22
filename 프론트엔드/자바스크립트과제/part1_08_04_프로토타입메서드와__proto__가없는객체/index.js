{
    let dictionary = Object.create(null);

    // dictionary.toString 메서드를 추가하는 코드
    Object.setPrototypeOf(dictionary, Object.create(null, {
        toString: {
            value() {
                return Object.keys(this).join(",");
            }
        }
    }))

    // 데이터를 추가합니다.
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

    // 반복문에는 apple과 __proto__ 만 있습니다.
    for (let key in dictionary) {
        console.log(key); // "apple" 다음 "__proto__"입니다.
    }

    // toString이 동작하는 부분입니다.
    console.log(dictionary + ""); // "apple,__proto__"
}