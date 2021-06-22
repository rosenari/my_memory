{
    let animal = {
        jumps: null
    };

    let rabbit = {
        __proto__: animal,
        jumps: true
    };

    console.log(rabbit.jumps); //true

    delete rabbit.jumps;

    console.log(rabbit.jumps); //null

    delete animal.jumps;

    console.log(rabbit.jumps); //undefined
}

{
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000,
        __proto__: bed
    };

    {
        let start = Date.now();
        console.log(pockets.glasses);
        let end = Date.now();
        console.log(`${end - start}ms 가 소요되었습니다.`);
    }

    {
        let start = Date.now();
        console.log(pockets.glasses);
        let end = Date.now();
        console.log(`${end - start}ms 가 소요되었습니다.`);
    }

    //모던 엔진에서는 glasses가 발견된 곳(head)를 기억하고 있다가 
    //다음 요청부터는 발견된 곳부터 검색을 시작하는 최적화가 적용되어 있다.
    //그러므로 시간차이가 없다고 봐도 무방하다.
}

{
    let hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster,
        stomach: []
    };

    let lazy = {
        __proto__: hamster,
        stomach: []
    };

    // speedy는 음식을 발견합니다.
    speedy.eat("apple");
    console.log(speedy.stomach); // apple

    // lazy의 stomach은 비어있습니다.
    console.log(lazy.stomach); // <nothing>
}