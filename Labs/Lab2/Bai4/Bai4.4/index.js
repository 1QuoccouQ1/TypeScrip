let userInput;
let userName;

userInput = 5;
userInput = 'Typescript';
userName = userInput; // không cần ép kiểu trong JavaScript

if (typeof userInput === 'string') {
    userName = userInput;
}
