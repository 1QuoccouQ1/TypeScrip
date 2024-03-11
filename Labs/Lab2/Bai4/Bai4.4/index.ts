// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Typescript';
// userName = userInput;// Lỗi ép kiểu do userInput đang ở dạng dữ liệu unknown
// userName = <string> userInput;
// if(typeof userInput === 'string'){
//     userName = userInput;
// }


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';

if (typeof userInput === 'string') {
    userName = userInput; // Ép kiểu userInput sang string trong phạm vi if
} 
