import { render, screen } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';
import { AddToCartButton } from '../add-to-cart-button';
import userEvent from '@testing-library/user-event';

describe('AddToCartButton', () => {
  it('должен рендерить AddToCartButton', async () => {
    const addToCart: Mock = vi.fn();
    const { rerender } = render(
      <AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={false} />,
    );
    const button = screen.getByTestId('addToCartButton');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(addToCart).toHaveBeenCalled();
    rerender(<AddToCartButton productId="123" addToCart={addToCart} isLoadingAdd={true} />);
    expect(button).toBeDisabled();
  });
});
