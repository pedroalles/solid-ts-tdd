import Order from '../Order';
import Beer from '../Beer';
import Whisky from '../Whisky';
import Water from '../Water';

test('Deve criar um pedido e calcular o total', function () {
    const order = new Order();
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const total = order.getTotal();
    expect(total).toBe(112);
});

test('Deve criar um pedido e calcular os impostos', function () {
    const order = new Order();
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const taxes = order.getTaxes();
    expect(taxes).toBe(21);
});
