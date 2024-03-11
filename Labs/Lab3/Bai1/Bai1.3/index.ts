const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];
activehobbies.push(hobbies);//Ko thêm được mảng này vào mảng kia , phải thêm từng phần tử của mảng vào mới đc 
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);