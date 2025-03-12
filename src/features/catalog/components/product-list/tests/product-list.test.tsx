import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductList } from '../product-list';

describe('ProductList', () => {
  it('должен рендерить карточки', () => {
    const mockProducts = [
      {
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
      },
      {
        id: '2',
        name: 'Laptops',
        product_items: [
          {
            id: '1',
            image: 'path',
            price: 123,
            created_at: '2023-03-09T23:55:09.749Z',
            productId: '2',
          },
        ],
        category: '2',
        created_at: '2023-03-09T23:55:09.749Z',
      },
    ];

    render(<ProductList items={mockProducts} />);

    const cards = screen.getAllByTestId('product-item');
    expect(cards).length(2);
  });
});
