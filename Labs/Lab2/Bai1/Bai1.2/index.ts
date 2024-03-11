// function add ( x = 5) {
//     let phrase = 'Result is';
//     phrase = 10;//Lỗi do pharase là kiểu string 
//     x = '2.8';//Lỗi do x là kiểu number 
//     return phrase + x;
// }
// let result: number = add();//Lỗi do result là kiểu number mà kết quả của add() trả về là cả kiểu string và number 



function add(x: number = 5): string {
    let phrase: string = 'Result is';
    x = 2.8; // Chuyển x về kiểu number
    return phrase + ' ' + x; // Thêm dấu cách sau 'Result is'
}

let result: string = add(); // Đổi kiểu dữ liệu của result từ number sang string


// function add ( x = 5) {
//     let phrase = 'Result is';
//     phrase = '10';//Lỗi do pharase là kiểu string 
//     x = 2.8;//Lỗi do x là kiểu number 
//     return phrase + x;
// }
// let result: string = add();//Lỗi do result là kiểu number mà kết quả của add() trả về là cả kiểu string và number 