import Item from '../Item';
import Order from '../Order';

test('Deve criar um pedido e calcular o total', function () {
    const order = new Order();
    order.addItem(new Item('Beer', 'Brahma', 10));
    order.addItem(new Item('Whisky', ' Jack Daniels', 100));
    order.addItem(new Item('Water', 'Fonte Ijuí', 2));
    const total = order.getTotal();
    expect(total).toBe(112);
});

test('Deve criar um pedido e calcular os impostos', function () {
    const order = new Order();
    order.addItem(new Item('Beer', 'Brahma', 10));
    order.addItem(new Item('Whisky', ' Jack Daniels', 100));
    order.addItem(new Item('Water', 'Fonte Ijuí', 2));
    const taxes = order.getTaxes();
    expect(taxes).toBe(21);
});
