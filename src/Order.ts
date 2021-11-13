import Item from "./Item";
import TaxItem from "./TaxItem";
import IMessageData from "./IMessageData";

export default class Order {
    items: Item[];
    messageData: IMessageData;

    constructor(messageData: IMessageData) {
        this.items = [];
        this.messageData = messageData;
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

    async printMessage(language: string) {
        const message = await this.messageData.read(language);
        return message
            .replace("{total}", (this.getTotal()).toString())
            .replace("{taxes}", (this.getTaxes()).toString())
            .trim();
    }

}
