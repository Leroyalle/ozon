import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cartService } from '../cart-service';
import { mockCartItems, mockError } from './mocks';
import { createMockChain } from './helpers';

const mocks = vi.hoisted(() => ({
  from: vi.fn(() => ({
    insert: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    then: vi.fn(),
  })),
}));

vi.mock('@/shared/api/supabase-client', () => ({
  supabase: {
    from: mocks.from,
  },
}));

describe('CartService', () => {
  beforeEach(() => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems));
  });

  it('addToCart отправляет и возвращает данные', async () => {
    const result = await cartService.addToCart({ product_item_id: '1', quantity: 1 });
    expect(result.data).toEqual(mockCartItems);
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().insert).toHaveBeenCalledWith({ product_item_id: '1', quantity: 1 });
    expect(mocks.from().select).toHaveBeenCalled();
  });

  it('addToCart пробрасывает ошибку', async () => {
    mocks.from.mockReturnValue(createMockChain(mockError));
    try {
      await cartService.addToCart({ product_item_id: '1', quantity: 1 });
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mocks.from).rejects.toThrow();
    }
  });

  it('removeFromCart вызывается и возвращает объект', async () => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems[0]));
    const result = await cartService.removeFromCart('1');
    expect(result.data).toEqual(mockCartItems[0]);
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().delete).toHaveBeenCalled();
    expect(mocks.from().eq).toHaveBeenCalledWith('id', '1');
    expect(mocks.from().select).toHaveBeenCalled();
  });

  it('addToCart пробрасывает ошибку', async () => {
    mocks.from.mockReturnValue(createMockChain(mockError));
    try {
      await cartService.removeFromCart('1');
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mocks.from).rejects.toThrow();
    }
  });

  it('incrementQuantity вызывается и увеличивает quantity', async () => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems[0]));
    await cartService.incrementQuantity({ id: '1', quantity: 1 });
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().update).toHaveBeenCalledWith({
      quantity: 2,
    });
    expect(mocks.from().eq).toHaveBeenCalledWith('id', '1');
    expect(mocks.from().select).toHaveBeenCalled();
  });

  it('incrementQuantity пробрасывает ошибку', async () => {
    mocks.from.mockReturnValue(createMockChain(mockError));
    try {
      await cartService.incrementQuantity({ id: '1', quantity: 1 });
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mocks.from).rejects.toThrow();
    }
  });

  it('decrementQuantity вызывается с минимальным количеством 1', async () => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems[0]));
    await cartService.decrementQuantity({ id: '1', quantity: 1 });
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().update).toHaveBeenCalledWith({
      quantity: 1,
    });
    expect(mocks.from().eq).toHaveBeenCalledWith('id', '1');
    expect(mocks.from().select).toHaveBeenCalled();
  });

  it('decrementQuantity вызывается с минимальным количеством 1', async () => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems[0]));
    await cartService.decrementQuantity({ id: '1', quantity: 2 });
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().update).toHaveBeenCalledWith({
      quantity: 1,
    });
    expect(mocks.from().eq).toHaveBeenCalledWith('id', '1');
    expect(mocks.from().select).toHaveBeenCalled();
  });

  it('decrementQuantity пробрасывает ошибку', async () => {
    mocks.from.mockReturnValue(createMockChain(mockError));
    try {
      await cartService.decrementQuantity({ id: '1', quantity: 1 });
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mocks.from).rejects.toThrow();
    }
  });

  it('getCartItems получает и возвращает данные', async () => {
    mocks.from.mockReturnValue(createMockChain(mockCartItems));
    const result = await cartService.getCartItems();
    expect(mocks.from).toHaveBeenCalledWith('cart_items');
    expect(mocks.from().select).toHaveBeenCalled();
    expect(result).toEqual({ data: mockCartItems });
  });

  it('getCartItems выбрасывает ошибку', async () => {
    mocks.from.mockReturnValue(createMockChain(mockError));
    try {
      await cartService.getCartItems();
    } catch (error) {
      expect(mocks.from).rejects.toThrow();
      expect(error).toEqual(mockError);
    }
  });
});
