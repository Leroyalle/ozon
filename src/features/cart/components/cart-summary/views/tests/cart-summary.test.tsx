import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CartSummary } from '../cart-summary';
import { mockCartItems } from './mocks';

describe('CartSummary', () => {
  it('должен рендериться если товары есть', () => {
    render(<CartSummary items={mockCartItems} />);
    expect(screen.getByTestId('cartSummary')).toBeInTheDocument();
    expect(screen.getByTestId('checkoutButton')).toBeInTheDocument();
    expect(screen.getByTestId('cartSummaryDetails')).toBeInTheDocument();
    expect(screen.getByText('1 товар')).toBeInTheDocument();
    expect(screen.getByText('360 ₽')).toBeInTheDocument();
    expect(screen.getByText('- 40 ₽')).toBeInTheDocument();
  });

  it('должен дизейблить summary если нет товаров', () => {
    render(<CartSummary items={[]} />);
    expect(screen.getByTestId('checkoutButton')).toBeDisabled();
    expect(screen.queryByTestId('cartSummaryDetails')).not.toBeInTheDocument();
    expect(screen.getByTestId('emptyState')).toBeInTheDocument();
  });
});
