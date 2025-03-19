import { TestProviders } from '@/shared';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { CartControls } from '../cart-controls';
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

describe('CartControls', () => {
  const addToCart: Mock = vi.fn();
  const removeFromCart: Mock = vi.fn();
  const increment: Mock = vi.fn();
  const decrement: Mock = vi.fn();

  beforeEach(() => {
    mocks.useAddToCartMutation.mockReturnValue([addToCart, { isLoading: false }]);
    mocks.useRemoveFromCartMutation.mockReturnValue([removeFromCart, { isLoading: false }]);
    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([increment, { isLoading: false }]);
    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([decrement, { isLoading: false }]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('должен рендерить контролы если товар добавлен в корзину', () => {
    render(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );
    expect(screen.getByTestId('cartControls')).toBeInTheDocument();
    expect(screen.queryByTestId('addToCartButton')).not.toBeInTheDocument();
    expect(screen.getByTestId('cartItemHandlers')).toBeInTheDocument();
  });

  it('должен рендерить кнопку добавления если товар не добавлен в корзину', () => {
    render(
      <TestProviders
        component={
          <CartControls productId="123" cartItemId="321" isAddedToCart={false} quantity={1} />
        }
      />,
    );
    expect(screen.getByTestId('cartControls')).toBeInTheDocument();
    expect(screen.getByTestId('addToCartButton')).toBeInTheDocument();
    expect(screen.queryByTestId('cartItemHandlers')).not.toBeInTheDocument();
  });

  it('должен добавлять в корзину при нажатии на кнопку', async () => {
    const { rerender } = render(
      <TestProviders
        component={
          <CartControls productId="123" cartItemId="321" isAddedToCart={false} quantity={1} />
        }
      />,
    );

    const button = screen.getByTestId('addToCartButton');
    await userEvent.click(button);
    expect(addToCart).toHaveBeenCalledWith({ product_item_id: '123', quantity: 1 });

    mocks.useAddToCartMutation.mockReturnValue([addToCart, { isLoading: true }]);
    rerender(
      <TestProviders
        component={
          <CartControls productId="123" cartItemId="321" isAddedToCart={false} quantity={1} />
        }
      />,
    );
    expect(button).toBeDisabled();
  });

  it('должен удалять из корзины при нажатии на кнопку', async () => {
    const { rerender } = render(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    const button = screen.getByTestId('removeFromCartButton');
    await userEvent.click(button);
    expect(removeFromCart).toHaveBeenCalledWith('321');

    mocks.useRemoveFromCartMutation.mockReturnValue([removeFromCart, { isLoading: true }]);
    rerender(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    expect(button).toBeDisabled();
  });

  it('должен увеличивать количество при нажатии на кнопку', async () => {
    const { rerender } = render(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    const button = screen.getByTestId('incrementButton');
    await userEvent.click(button);
    expect(increment).toHaveBeenCalledWith({ id: '321', quantity: 1 });

    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([increment, { isLoading: true }]);
    rerender(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    expect(button).toBeDisabled();
  });

  it('должен уменьшать количество при нажатии на кнопку', async () => {
    const { rerender } = render(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={2} />}
      />,
    );

    const button = screen.getByTestId('decrementButton');
    await userEvent.click(button);
    expect(decrement).toHaveBeenCalledWith({ id: '321', quantity: 2 });

    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([decrement, { isLoading: true }]);
    rerender(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    expect(button).toBeDisabled();
  });

  it('не должен вызывать decrement при нажатии на кнопку если количество 1', async () => {
    render(
      <TestProviders
        component={<CartControls productId="123" cartItemId="321" isAddedToCart quantity={1} />}
      />,
    );

    const button = screen.getByTestId('decrementButton');
    await userEvent.click(button);
    expect(decrement).not.toHaveBeenCalled();
  });
});
