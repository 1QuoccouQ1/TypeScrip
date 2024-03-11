function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger //TypeScript không nhận diện trực tiếp  @Logger đang sử dụng.
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);
