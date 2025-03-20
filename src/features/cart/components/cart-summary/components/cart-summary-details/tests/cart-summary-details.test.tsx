import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CartSummaryDetails } from '../cart-summary-details';
import { pluralValues } from '@/features/cart/constants';

const mocks = vi.hoisted(() => ({
  getPluralValues: vi.fn(),
}));

vi.mock('@/shared/lib', () => ({
  getPluralValues: mocks.getPluralValues,
}));

describe('CartSummaryDetails', () => {
  beforeEach(() => {
    mocks.getPluralValues.mockReturnValue('товаров');
  });

  it('должен рендерить количество, сумму и скидку', () => {
    const totalCount = 5;
    const totalAmount = 1000;
    const discountAmount = 200;

    render(
      <CartSummaryDetails
        totalCount={totalCount}
        totalAmount={totalAmount}
        discountAmount={discountAmount}
        className="test-class"
      />,
    );

    expect(screen.getByTestId('cartSummaryDetails')).toBeInTheDocument();
    expect(screen.getByText('Ваша корзина:')).toBeInTheDocument();
    expect(screen.getByText('5 товаров')).toBeInTheDocument();
    expect(screen.getByText('1000 ₽')).toBeInTheDocument();
    expect(screen.getByText('- 200 ₽')).toBeInTheDocument();
  });

  it('должен вызывать getPluralValues', () => {
    const totalCount = 3;
    const totalAmount = 500;
    const discountAmount = 50;

    render(
      <CartSummaryDetails
        totalCount={totalCount}
        totalAmount={totalAmount}
        discountAmount={discountAmount}
        className="test-class"
      />,
    );

    expect(mocks.getPluralValues).toHaveBeenCalledWith(totalCount, pluralValues);
  });
});
