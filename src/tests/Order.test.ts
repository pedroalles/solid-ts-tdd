import Item from '../Item';
import Order from '../Order';

test("Deve criar um pedido", function () {

    //given
    const order = new Order();
    order.addItem(new Item('Beer', 'Brahma', 10));
    order.addItem(new Item('Water', 'Fonte Ijuí', 2));

    //when
    const total = order.getTotal();

    //then
    expect(total).toBe(12);
});
