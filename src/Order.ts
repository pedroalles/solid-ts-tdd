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
        return this.items.reduce((taxes, item) => {
            if (item instanceof TaxItem) {
                return taxes += item.calculateTax();
            }
            return taxes;
        }, 0);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    async printMessage(language: string) {
        const message = await this.messageData.read(language);
        return message
            .replace("{total}", (this.getTotal()).toString())
            .replace("{taxes}", (this.getTaxes()).toString())
            .trim();
    }
}
