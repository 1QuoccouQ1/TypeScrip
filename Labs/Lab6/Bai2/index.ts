function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
};
@Logger('LOGGING - PERSON')//TypeScript không nhận diện trực tiếp  @Logger đang sử dụng.
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    };
};