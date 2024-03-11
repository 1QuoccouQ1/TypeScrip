function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
}

__decorate([
    Log
], Product.prototype, "title", void 0);

Product = __decorate([
    __param(0, Log),
    __metadata("design:paramtypes", [String, Number])
], Product);
