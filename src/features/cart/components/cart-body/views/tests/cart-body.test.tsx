import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { mockCartItems } from './mocks';
import { render, screen } from '@testing-library/react';
import { TestProviders } from '@/shared';
import { CartBody } from '../cart-body';

const mocks = vi.hoisted(() => ({
  useGetCartItemsQuery: vi.fn(),
  useToggleCartItemSelectionMutation: vi.fn(),
  useRemoveFromCartMutation: vi.fn(),
  useIncrementCartItemQuantityMutation: vi.fn(),
  useDecrementCartItemQuantityMutation: vi.fn(),
}));

vi.mock('../../api', () => ({
  useGetCartItemsQuery: mocks.useGetCartItemsQuery,
  useToggleCartItemSelectionMutation: mocks.useToggleCartItemSelectionMutation,
  useRemoveFromCartMutation: mocks.useRemoveFromCartMutation,
  useIncrementCartItemQuantityMutation: mocks.useIncrementCartItemQuantityMutation,
  useDecrementCartItemQuantityMutation: mocks.useDecrementCartItemQuantityMutation,
}));

describe('Cart', () => {
  let toggleCartItemSelection: Mock;
  beforeEach(() => {
    toggleCartItemSelection = vi.fn();
    mocks.useGetCartItemsQuery.mockReturnValue({ data: mockCartItems });
    mocks.useToggleCartItemSelectionMutation.mockReturnValue([toggleCartItemSelection]);
    mocks.useRemoveFromCartMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
  });

  it('должен рендеить список товаров и общие действия', () => {
    render(<TestProviders component={<CartBody items={mockCartItems} />} />);
    expect(screen.getByTestId('cartBody')).toBeInTheDocument();
    expect(screen.getByTestId('bulkActionsToolbar')).toBeInTheDocument();
    expect(screen.getByTestId('cartItemList')).toBeInTheDocument();
    expect(screen.queryByTestId('emptyCartList')).not.toBeInTheDocument();
  });

  it('должен рендеить заглушку при пустой корзине', () => {
    render(<TestProviders component={<CartBody items={[]} />} />);
    expect(screen.getByTestId('cartBody')).toBeInTheDocument();
    expect(screen.queryByTestId('bulkActionsToolbar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('cartItemList')).not.toBeInTheDocument();
    expect(screen.getByTestId('emptyCartList')).toBeInTheDocument();
  });
});
