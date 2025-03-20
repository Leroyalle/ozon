import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductItem } from '../product-item';
import { TestProviders } from '@/shared';
import { mockProduct } from './mocks';

describe('ProductItem', () => {
  it('должен корректно отображать данные', () => {
    render(<TestProviders component={<ProductItem item={mockProduct} />} />);

    expect(screen.getByText(mockProduct.products.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price}`)).toBeInTheDocument();

    const image = screen.getByRole('img', { name: mockProduct.products.name });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });
});
