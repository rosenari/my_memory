{
    function Obj() {
        this.name = "obj";
    }

    let obj = new Obj();

    console.log(obj.name);

    let obj2 = new obj.constructor();

    console.log(obj2.name);
}

{
    function Obj() {
        this.name = "obj";
    }

    Obj.prototype = {}

    let obj = new Obj();

    console.log(obj.name);

    let obj2 = new obj.constructor();

    console.log(obj2.name);
}