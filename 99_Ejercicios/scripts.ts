

class user{
    public name: string;
    protected email: string;
    private age: string;

    //en el momento que sea instanciada la clase, eje ejecutará éste médoto pre construido

    constructor(
        name: string, 
        email: string, 
        age: number
    ){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name}`);
    }

    showMyAge(){
        return this.age;
    }

    public AgeInYears(){
        return this.age + 'Years';
    }
}


var Jhon = new user('Jhon', 'jhon@gmail.com', 24);

//accediendo al objeto
console.log(Jhon.register())