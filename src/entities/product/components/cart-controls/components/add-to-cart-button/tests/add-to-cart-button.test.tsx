import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AddToCartButton } from '../add-to-cart-button';
import userEvent from '@testing-library/user-event';

describe('AddToCartButton', () => {
  it('должен рендериться', () => {
    const addToCart = vi.fn();
    render(<AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={false} />);
    const button = screen.getByTestId('addToCartButton');
    expect(button).toBeInTheDocument();
  });

  it('должен вызывать addToCart при нажатии на кнопку', async () => {
    const addToCart = vi.fn();
    render(<AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={false} />);
    const button = screen.getByTestId('addToCartButton');
    await userEvent.click(button);
    expect(addToCart).toHaveBeenCalledWith({ product_item_id: '123', quantity: 1 });
    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  it('должен отключать кнопку при isLoadingAdd=true', () => {
    const addToCart = vi.fn();
    const { rerender } = render(
      <AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={false} />,
    );
    const button = screen.getByTestId('addToCartButton');
    expect(button).not.toBeDisabled();
    rerender(<AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={true} />);
    expect(button).toBeDisabled();
  });
});
