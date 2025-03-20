import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { AddToCartButton } from '../add-to-cart-button';
import userEvent from '@testing-library/user-event';
import { TestProviders } from '@/shared';

const mocks = vi.hoisted(() => ({
  useAddToCartMutation: vi.fn(),
}));

vi.mock('@/features/cart/api', () => ({
  useAddToCartMutation: mocks.useAddToCartMutation,
}));

describe('AddToCartButton', () => {
  let addToCart: Mock;

  beforeEach(() => {
    addToCart = vi.fn();
    mocks.useAddToCartMutation.mockReturnValue([addToCart, { isLoading: false }]);
  });

  it('должен рендериться', () => {
    render(<TestProviders component={<AddToCartButton productId="123" />} />);
    const button = screen.getByTestId('addToCartButton');
    expect(button).toBeInTheDocument();
  });

  it('должен вызывать addToCart при нажатии на кнопку', async () => {
    render(<TestProviders component={<AddToCartButton productId="123" />} />);
    const button = screen.getByTestId('addToCartButton');
    await userEvent.click(button);
    expect(addToCart).toHaveBeenCalledWith({ product_item_id: '123', quantity: 1 });
    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  it('должен отключать кнопку при isLoadingAdd=true', () => {
    const { rerender } = render(<TestProviders component={<AddToCartButton productId="123" />} />);
    const button = screen.getByTestId('addToCartButton');
    expect(button).not.toBeDisabled();
    mocks.useAddToCartMutation.mockReturnValue([addToCart, { isLoading: true }]);
    rerender(<TestProviders component={<AddToCartButton productId="123" />} />);
    expect(button).toBeDisabled();
  });
});
