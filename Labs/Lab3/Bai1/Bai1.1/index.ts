// Dùng function
function calculateSum(): number {
    const numbers: number[] = [1, 2, 3, 4, 5];
    let sum: number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
// Dùng arrow function
const calculateSumArrow = (): number => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    let sum: number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
