function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    message= 'This works!';
    @Autobind //TypeScript không nhận diện trực tiếp  @Logger đang sử dụng.
    showMessage() {
    console.log(this.message);
    }
};