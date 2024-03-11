function AddandHandle(x: number, y: number, cb: (num: number)=>void){
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => { console.log(result);})