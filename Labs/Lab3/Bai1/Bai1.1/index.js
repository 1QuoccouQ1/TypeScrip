// Dùng function
function calculateSum() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// Dùng arrow function
const calculateSumArrow = () => {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
