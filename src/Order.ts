import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTaxes() {
        let taxes = 0;
        for (const item of this.items) {
            if (item instanceof TaxItem) {
                taxes += item.calculateTax();
            }
        }
        return taxes;
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
