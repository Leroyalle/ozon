import { describe, expect, it, vi } from 'vitest';
import { mockCartItems } from './mocks';
import { render, screen } from '@testing-library/react';
import { TestProviders } from '@/shared';
import { Cart } from '../cart';

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
  it('должен рендеить хук и секции корзины', () => {
    mocks.useGetCartItemsQuery.mockReturnValue({ data: mockCartItems });
    mocks.useToggleCartItemSelectionMutation.mockReturnValue([vi.fn()]);
    mocks.useRemoveFromCartMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useIncrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);
    mocks.useDecrementCartItemQuantityMutation.mockReturnValue([vi.fn(), { isLoading: false }]);

    render(<TestProviders component={<Cart />} />);
    expect(screen.getByTestId('cart')).toBeInTheDocument();
    expect(screen.getByTestId('cartHeader')).toBeInTheDocument();
    expect(screen.getByTestId('cartBody')).toBeInTheDocument();
    expect(screen.getByTestId('cartSummary')).toBeInTheDocument();
  });
});
