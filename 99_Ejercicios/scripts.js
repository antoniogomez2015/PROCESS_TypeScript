var user = /** @class */ (function () {
    //en el momento que sea instanciada la clase, eje ejecutará éste médoto pre construido
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    user.prototype.register = function () {
        console.log("" + this.name);
    };
    user.prototype.showMyAge = function () {
        return this.age;
    };
    user.prototype.AgeInYears = function () {
        return this.age + 'Years';
    };
    return user;
}());
var Jhon = new user('Jhon', 'jhon@gmail.com', 24);
//accediendo al objeto
console.log(Jhon.register());
