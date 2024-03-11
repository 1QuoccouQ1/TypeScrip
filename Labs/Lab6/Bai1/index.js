function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}

let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = Logger(Person) || Person;

const pers = new Person();
console.log(pers);
