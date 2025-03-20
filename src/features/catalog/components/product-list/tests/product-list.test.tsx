import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductList } from '../product-list';
import { TestProviders } from '@/shared';
import { mockProducts } from './mocks';

describe('ProductList', () => {
  it('должен рендерить карточки', () => {
    render(<TestProviders component={<ProductList items={mockProducts} />} />);
    const cards = screen.getAllByTestId('product-item');
    expect(cards).length(2);
  });
});
