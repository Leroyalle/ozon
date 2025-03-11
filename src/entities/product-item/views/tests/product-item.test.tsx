import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductItem } from '../product-item';

describe('ProductItem', () => {
  it('должен корректно отображать данные', () => {
    const mocks = {
      id: '1',
      name: 'Phones',
      product_items: [
        {
          id: '1',
          image: 'path',
          price: 123,
          created_at: '2023-03-09T23:55:09.749Z',
          productId: '1',
        },
      ],
      category: '1',
      created_at: '2023-03-09T23:55:09.749Z',
    };
    render(<ProductItem item={mocks} />);

    expect(screen.getByText(mocks.name)).toBeInTheDocument();
    expect(screen.getByText(`${mocks.product_items[0].price}`)).toBeInTheDocument();

    const image = screen.getByRole('img', { name: /phones/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mocks.product_items[0].image);
  });
});
