(function () {
    console.log("==================");
    let user = {
        name: "John",
        money: 1000,
        [Symbol.toPrimitive](hint) {
            console.log(`hint : ${hint}`);
            return hint === "string" ? `{name: ${this.name}}` : this.money;
        }
    }

    console.log(String(user));
    console.log(+user);
    console.log(user + 1000);
})();

(function () {
    console.log("==================");
    let user = {
        name: "John",
        money: 1000,

        toString() {
            return `{name: ${this.name}}`;
        },

        valueOf() {
            return this.money;
        }
    };

    console.log(String(user));
    console.log(+user);
    console.log(user + 1000);
})();