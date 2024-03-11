function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax() { }
}
__decorate([
    Log3
], Product.prototype, "getPriceWithTax", null);
