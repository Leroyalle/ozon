import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { mockCartItemsSelectedFalse, mockCartItemsSelectedTrue } from './mocks';
import { render, screen } from '@testing-library/react';
import { TestProviders } from '@/shared';
import { BulkActionsToolbar } from '../bulk-actions-toolbar';
import userEvent from '@testing-library/user-event';

const mocks = vi.hoisted(() => ({
  useGetCartItemsQuery: vi.fn(),
  useToggleCartItemSelectionMutation: vi.fn(),
}));
vi.mock('@/features/cart/api', () => ({
  useToggleCartItemSelectionMutation: mocks.useToggleCartItemSelectionMutation,
}));

describe('BulkActionsToolbar', () => {
  let toggleCartItemSelection: Mock;
  beforeEach(() => {
    toggleCartItemSelection = vi.fn();
    mocks.useToggleCartItemSelectionMutation.mockReturnValue([toggleCartItemSelection]);
  });

  it('должен рендеиться если товары в корзине есть', () => {
    render(
      <TestProviders component={<BulkActionsToolbar initialItems={mockCartItemsSelectedTrue} />} />,
    );
    expect(screen.getByTestId('bulkActionsToolbar')).toBeInTheDocument();
  });

  it('должен вызывать toggleCartItemSelection при клике на чекбокс передавая false', async () => {
    const { rerender } = render(
      <TestProviders component={<BulkActionsToolbar initialItems={mockCartItemsSelectedTrue} />} />,
    );
    const checkbox = screen.getByTestId('selectAllCheckbox');
    await userEvent.click(checkbox);
    expect(toggleCartItemSelection).toHaveBeenCalledTimes(1);
    expect(toggleCartItemSelection).toHaveBeenCalledWith({ isSelected: false });
    rerender(
      <TestProviders
        component={<BulkActionsToolbar initialItems={mockCartItemsSelectedFalse} />}
      />,
    );
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('должен вызывать toggleCartItemSelection при клике на чекбокс передавая false', async () => {
    const { rerender } = render(
      <TestProviders
        component={<BulkActionsToolbar initialItems={mockCartItemsSelectedFalse} />}
      />,
    );
    const checkbox = screen.getByTestId('selectAllCheckbox');
    await userEvent.click(checkbox);
    expect(toggleCartItemSelection).toHaveBeenCalledTimes(1);
    expect(toggleCartItemSelection).toHaveBeenCalledWith({ isSelected: true });
    rerender(
      <TestProviders component={<BulkActionsToolbar initialItems={mockCartItemsSelectedTrue} />} />,
    );
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
