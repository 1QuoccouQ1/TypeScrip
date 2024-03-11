let something: void = undefined;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}