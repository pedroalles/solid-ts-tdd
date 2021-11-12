export default class Item {
    category: string;
    description: string;
    price: number;

    constructor(category: string, description: string, price: number) {
        this.category = category;
        this.description = description;
        this.price = price;
    }

    calculateTax() {
        if (this.category === 'Beer') {
            return (this.price * 10) / 100;
        }
        if (this.category === 'Whisky') {
            return (this.price * 20) / 100;
        }
        return 0;
    }
}
