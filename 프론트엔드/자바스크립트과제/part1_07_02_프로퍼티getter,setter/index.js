{
    let user = {
        get name() {
            return this._name;
        },
        set name(value) {
            if (value < 4) {
                console.log('입력하신 값이 너무 짧습니다. 네 글자 이상을 입력해주세요.');
                return;
            }
            this._name = value;
        }
    }
    user.name = "Pete";
    console.log(user.name);

    user.name = "";
}

{

    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        Object.defineProperty(this, "age", {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear() + 1;
            }
        });
    }

    let john = new User("John", new Date(1992, 11, 11));
    console.log(john.birthday);
    console.log(john.age);
}