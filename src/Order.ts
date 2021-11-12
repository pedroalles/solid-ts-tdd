import Item from "./Item";

export default class Order {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal() {
        // return this.items.reduce<Item[]>((prev, curr) => prev.price + curr.price, 0);
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}
