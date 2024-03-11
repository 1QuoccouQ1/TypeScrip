// enum Role {ADMIN, READ_ONLY, AUTHOR};
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: string,
//     roletuple: [number, string]
// } = {
//     name: 'Typescript',
//     age: 11,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN, //Error
//     roletuple: [2, 'author']
// }
// let favouriteActivites: any [];
// favouriteActivites = [5, 'Sports', true];
// if (person.role === Role.AUTHOR) {
//     console.log('is author');
// }
// person.roletuple.push('admin');
// person.roletuple [1]= 10; //Error
// person.roletuple = [0, 'admin', 'user']; //Error



enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role, // Sửa thành kiểu Role
    roletuple: [number, string]
} = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author']
}

let favouriteActivites: any[]; // Sửa thành any[]
favouriteActivites = [5, 'Sports', true];

if (person.role === Role.AUTHOR) {
    console.log('is author');
}

// Sửa các phần gán giá trị cho roletuple để đảm bảo tuân thủ kiểu dữ liệu [number, string]
person.roletuple.push(10); // Thêm số 10 vào roletuple
person.roletuple[1] = 'admin'; // Thay đổi giá trị ở index 1 thành 'admin'
// Sửa thành một mảng có đúng 2 phần tử kiểu [number, string]
person.roletuple = [0, 'admin'];
