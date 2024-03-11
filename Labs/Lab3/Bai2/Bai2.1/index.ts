let sum = (x: number=5, y?: number) => { return x + <number>y; }
let speech = (output: any): void => {
    console.log("Result:" + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));
