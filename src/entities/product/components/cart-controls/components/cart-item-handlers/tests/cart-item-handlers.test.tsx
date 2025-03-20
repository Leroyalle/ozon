import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { CartItemHandlers } from '../cart-item-handlers';
import userEvent from '@testing-library/user-event';

const mocks = vi.hoisted(() => ({
  useAddToCartMutation: vi.fn(),
  useRemoveFromCartMutation: vi.fn(),
  useIncrementCartItemQuantityMutation: vi.fn(),
  useDecrementCartItemQuantityMutation: vi.fn(),
}));

vi.mock('@/features/cart/api', () => ({
  useAddToCartMutation: mocks.useAddToCartMutation,
  useRemoveFromCartMutation: mocks.useRemoveFromCartMutation,
  useIncrementCartItemQuantityMutation: mocks.useIncrementCartItemQuantityMutation,
  useDecrementCartItemQuantityMutation: mocks.useDecrementCartItemQuantityMutation,
}));

describe('CartItemHandlers', () => {
  let removeFromCart: Mock;
  let increment: Mock;
  let decrement: Mock;
  beforeEach(() => {
    removeFromCart = vi.fn();
    increment = vi.fn();
    decrement = vi.fn();
    mocks.useRemoveFromCartMutation.mockReturnValue([removeFromCart, { isLoading: false }]);
    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([increment, { isLoading: false }]);
    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([decrement, { isLoading: false }]);
  });
  it('должен рендерить все кнопки', async () => {
    render(<CartItemHandlers productItemId="321" cartItemId="123" quantity={2} />);

    expect(screen.getByTestId('decrementButton')).toBeInTheDocument();
    expect(screen.getByTestId('incrementButton')).toBeInTheDocument();
    expect(screen.getByTestId('removeFromCartButton')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('decrementButton'));
    await userEvent.click(screen.getByTestId('incrementButton'));
    await userEvent.click(screen.getByTestId('removeFromCartButton'));

    expect(removeFromCart).toHaveBeenCalledWith({ product_item_id: '321', cart_item_id: '123' });
    expect(increment).toHaveBeenCalledWith({
      product_item_id: '321',
      cart_item_id: '123',
      quantity: 2,
    });
    expect(decrement).toHaveBeenCalledWith({
      product_item_id: '321',
      cart_item_id: '123',
      quantity: 2,
    });
  });
});
