const sum = (a: number, b: number = 0, ...rest: number[]): number => {
    let total: number = a + b;
    for (let num of rest) {
        total += num;
    }
    return total;
}

// Sử dụng hàm sum
console.log(sum(1, 2)); // Kết quả: 3
console.log(sum(1)); // Kết quả: 1 (sử dụng default value cho b)
console.log(sum(1, 2, 3, 4)); // Kết quả: 10 (cộng thêm các rest parameter)
