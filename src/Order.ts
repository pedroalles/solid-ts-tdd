export default class Order {
    items: Array<Item>;

    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((prev, curr) => prev + curr);
    }
}
