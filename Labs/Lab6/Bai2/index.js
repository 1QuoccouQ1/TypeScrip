function Logger(logString) {
    return function(constructor) {
        console.log(logString);
        console.log(constructor);
    };
}

let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = Logger('LOGGING - PERSON')(Person) || Person;
