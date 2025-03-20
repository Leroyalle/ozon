import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import { TestProviders } from '@/shared';
import { CartItemList } from '../cart-item-list';
import { mockCartItems } from './mocks';

const mocks = vi.hoisted(() => ({
  useToggleCartItemSelectionMutation: vi.fn(),
  useRemoveFromCartMutation: vi.fn(),
  useIncrementCartItemQuantityMutation: vi.fn(),
  useDecrementCartItemQuantityMutation: vi.fn(),
}));
vi.mock('@/features/cart/api', () => ({
  useToggleCartItemSelectionMutation: mocks.useToggleCartItemSelectionMutation,
  useRemoveFromCartMutation: mocks.useRemoveFromCartMutation,
  useIncrementCartItemQuantityMutation: mocks.useIncrementCartItemQuantityMutation,
  useDecrementCartItemQuantityMutation: mocks.useDecrementCartItemQuantityMutation,
}));

describe('CartItemList', () => {
  let toggleCartItemSelection: Mock;
  beforeEach(() => {
    toggleCartItemSelection = vi.fn();
    mocks.useToggleCartItemSelectionMutation.mockReturnValue([toggleCartItemSelection]);
    mocks.useRemoveFromCartMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
  });

  it('должен рендеиться если переданы товары в пропсах', () => {
    render(<TestProviders component={<CartItemList items={mockCartItems} />} />);
    expect(screen.getByTestId('cartItemList')).toBeInTheDocument();
  });

  it('должен рендеить заглушку при пустом массиве', () => {
    render(<TestProviders component={<CartItemList items={[]} />} />);
    expect(screen.getByTestId('emptyCartList')).toBeInTheDocument();
    expect(screen.queryByTestId('cartItemList')).not.toBeInTheDocument();
  });
});
