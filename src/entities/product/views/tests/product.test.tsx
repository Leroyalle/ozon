import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Product } from '../product';
import { mockProducts } from './mocks';
import { TestProviders } from '@/shared';

describe('Product', () => {
  it('должен возвращать null если item не передан', () => {
    render(<Product item={undefined} />);
    expect(screen.queryByTestId('product')).toBeNull();
  });

  it('должен рендерить галарею, информацию о продукте и контроллеры', () => {
    render(<TestProviders component={<Product item={mockProducts} />} />);
    expect(screen.queryByTestId('product')).toBeInTheDocument();
    expect(screen.queryByTestId('mediaGallery')).toBeInTheDocument();
    expect(screen.queryByTestId('productInfo')).toBeInTheDocument();
    expect(screen.queryByTestId('cartControls')).toBeInTheDocument();
  });
});
