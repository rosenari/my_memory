(function () {
    let user = {
        name: "John Smith",
        age: 35
    };

    let userJSON = JSON.parse(JSON.stringify(user));
    console.log(userJSON);
})();

(function () {
    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        occupiedBy: [{ name: "John" }, { name: "Alice" }],
        place: room
    };

    // 순환 참조
    room.occupiedBy = meetup;
    meetup.self = meetup;

    console.log(JSON.stringify(meetup, function replacer(key, value) {

        if (key != '' && value == meetup) return undefined;

        return value;
    }));
})();