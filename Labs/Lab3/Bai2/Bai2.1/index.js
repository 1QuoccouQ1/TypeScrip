let sum = (x = 5, y) => { return x + Number(y); };
let speech = (output) => {
    console.log("Result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(8, 5)));
