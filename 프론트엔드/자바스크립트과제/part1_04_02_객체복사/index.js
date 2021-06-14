//깊은 복사시 표준 알고리즘
//Structured cloning algorithm을 사용해보자.

let jangsoon = {
    name: "Jangsoon",
    age: 30,
    skill: {
        language: "javascript",
        framework: "React",
    }
}

let jangsoonClone = clone(jangsoon);

console.log(jangsoonClone);

function clone(obj) {
    //받은 값이 객체가 아니라면 그냥 리턴하면 된다.
    if (!(obj instanceof Object)) {
        return obj;
    }

    let objClone;

    //객체라면 타입에 따라 적절하게 객체를 생성하여 리턴하자.
    let constructor = obj.constructor;//생성자 함수를 가르킴
    switch (constructor) {
        case RegExp:
            objClone = new constructor(obj);
            break;
        case Date:
            objClone = new constructor(obj.getTime());
            break;
        default:
            objClone = new constructor();
    }

    //객체의 속성들을 복사
    for (let prop in obj) {
        objClone[prop] = clone(obj[prop]);//재귀사용
    }

    //복사된 객체를 리턴
    return objClone;
}