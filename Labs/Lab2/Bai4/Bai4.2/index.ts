// type Combinable = number | string;
// function combine(input1: Combinable, input2: number|string, resultConversion: 'as-number'|'as-text'){
//     let result;
//     if(typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number'){
//     result = parseFloat(input1) + parseFloat(input2);
//     } else {//concenated
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }
// const combineNumber = combine(30, 26,'as-number');
// console.log(combineNumber);

// const combineStringNumber = combine('30', '26', 'as-number');
// console.log(combineStringNumber);

// const combineText = combine('Typescript Vs', 'Javascript', 'as-text');
// console.log(combineText);




type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2; // Chuyển input1 và input2 về dạng number bằng cách thêm dấu '+' trước
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);

const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);

const combineText = combine('Typescript Vs', 'Javascript', 'as-text');
console.log(combineText);
