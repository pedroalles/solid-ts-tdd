import Item from './Item';

export default class Beer extends Item {

    constructor(description: string, price: number) {
        super('Beer', description, price);
    }

    getTax(): number {
        return 10;
    }
}
