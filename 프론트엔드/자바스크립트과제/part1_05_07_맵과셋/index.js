(function () {
    function unique(arr) {
        return Array.from(new Set(arr));
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(values));
})();

(function () {
    function aclean(arr) {
        let map = new Map();
        for (let word of arr) {
            let key = word.toLowerCase().split('').sort().join('');
            map.set(key, word);
        }

        return Array.from(map.values());
    }
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    console.log(aclean(arr))
})();

(function () {
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());

    keys.push("more");

    console.log(keys);
})();