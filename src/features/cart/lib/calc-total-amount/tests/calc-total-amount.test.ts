import { describe, expect, it } from 'vitest';
import { calcTotalAmount } from '../calc-total-amount';
import { mockCartItems } from './mocks';

describe('calcTotalAmount', () => {
  it('должен считать сумму без скидки', () => {
    const { totalAmount, discountAmount } = calcTotalAmount(mockCartItems);
    expect(totalAmount).toBe(400);
    expect(discountAmount).toBe(0);
  });

  it('должен считать сумму со скидкой', () => {
    const { totalAmount, discountAmount } = calcTotalAmount(mockCartItems, 0.1);
    expect(totalAmount).toBe(360);
    expect(discountAmount).toBe(40);
  });
});
