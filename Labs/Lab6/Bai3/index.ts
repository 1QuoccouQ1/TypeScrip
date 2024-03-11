function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product {
    @Log//TypeScript không nhận diện trực tiếp  @Logger đang sử dụng.
    title: string;
    private _price: number;

    set price(val: number) {}

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    };
    getPriceWithTax() {}
}