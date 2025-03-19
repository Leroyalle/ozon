import { render, screen } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';
import { CartItemHandlers } from '../cart-item-handlers';
import userEvent from '@testing-library/user-event';

describe('CartItemHandlers', () => {
  it('должен рендерить все кнопки', async () => {
    const removeFromCart: Mock = vi.fn();
    const increment: Mock = vi.fn();
    const decrement: Mock = vi.fn();
    render(
      <CartItemHandlers
        cartItemId="123"
        quantity={1}
        removeFromCart={removeFromCart}
        increment={increment}
        decrement={decrement}
        isLoadingRemove={false}
        isLoadingIncrement={false}
        isLoadingDecrement={false}
      />,
    );

    expect(screen.getByTestId('decrementButton')).toBeInTheDocument();
    expect(screen.getByTestId('incrementButton')).toBeInTheDocument();
    expect(screen.getByTestId('removeFromCartButton')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('decrementButton'));
    await userEvent.click(screen.getByTestId('incrementButton'));
    await userEvent.click(screen.getByTestId('removeFromCartButton'));

    expect(removeFromCart).toHaveBeenCalledWith('123');
    expect(increment).toHaveBeenCalledWith({ id: '123', quantity: 1 });
    expect(decrement).toHaveBeenCalledWith({ id: '123', quantity: 1 });
  });
});
