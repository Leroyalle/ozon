import { CartItemWithRelations } from '../../types';

export const calcTotalAmount = (items: CartItemWithRelations[], discount: number = 0) => {
  const totalCount = items.reduce((acc, item) => {
    return (acc += item.product_items.price * item.quantity);
  }, 0);

  const totalAmount = Math.round(totalCount - totalCount * discount);
  const discountAmount = Math.round(totalCount * discount);

  return { totalAmount, discountAmount };
};
