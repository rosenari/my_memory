(function () {
    function ucFirst(str) {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    console.log(ucFirst("john"));
})();

(function () {
    function checkSpam(str) {
        if (str.toLowerCase().includes("viagra")
            || str.toLowerCase().includes("xxx")) return true;

        return false;
    }

    console.log(checkSpam('buy ViAgRA now'));
    console.log(checkSpam('free xxxxx'));
    console.log(checkSpam('innocent rabbit'));
})();

(function () {
    function truncate(str, maxLength) {
        if (str.length > maxLength) return str.slice(0, 19) + "…";

        return str;
    }

    console.log(truncate("What I'd like to tell on this topic is:", 20));
    console.log(truncate("Hi everyone!", 20));
})();

(function () {
    function extractCurrencyValue(str) {
        let result = "";

        for (let s of str) {
            if (s >= '0' && s <= '9') result += s;
        }

        return +result;
    }

    console.log(extractCurrencyValue('$120') === 120);
})();