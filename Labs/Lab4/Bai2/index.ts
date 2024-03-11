interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet (phrase: string): void;
}



let user1: Greetable;
user1 = new Person();// Chưa có Person() nên ko gọi đc nó 
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);