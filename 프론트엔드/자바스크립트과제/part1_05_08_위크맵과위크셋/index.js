(function () {
    let messages = [
        { text: "Hello", from: "John" },
        { text: "How goes?", from: "John" },
        { text: "See you soon", from: "Alice" }
    ];

    let read = new WeakSet();
    read.add(messages[0]);

    console.log("[메시지함]")
    for (let message of messages) {
        if (read.has(message)) console.log(JSON.stringify(message) + " : 읽음");
        else console.log(JSON.stringify(message) + " : 안읽음");
    }

    console.log("[메시지 삭제]");
    messages.splice(0, 1);

    console.log("[메시지함]")
    for (let message of messages) {
        if (read.has(message)) console.log(JSON.stringify(message) + " : 읽음");
        else console.log(JSON.stringify(message) + " : 안읽음");
    }
})();

(function () {
    let messages = [
        { text: "Hello", from: "John" },
        { text: "How goes?", from: "John" },
        { text: "See you soon", from: "Alice" }
    ];

    let read = new WeakMap();

    read.set(messages[0], new Date());

    console.log("[메시지함]")
    for (let message of messages) {
        if (read.has(message)) console.log(`${JSON.stringify(message)} : 읽음 (${read.get(message)})`);
        else console.log(JSON.stringify(message) + " : 안읽음");
    }

    console.log("[메시지 삭제]");
    messages.splice(0, 1);

    console.log("[메시지함]")
    for (let message of messages) {
        if (read.has(message)) console.log(`${JSON.stringify(message)} : 읽음 (${read.get(message)})`);
        else console.log(JSON.stringify(message) + " : 안읽음");
    }


})();