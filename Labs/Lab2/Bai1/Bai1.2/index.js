function add(x = 5) {
    let phrase = 'Result is';
    phrase = 10; // Lỗi do pharase là kiểu string
    x = '2.8'; // Lỗi do x là kiểu number
    return phrase + x;
}
let result = add(); // Lỗi do result là kiểu number mà kết quả của add() trả về là cả kiểu string và number
