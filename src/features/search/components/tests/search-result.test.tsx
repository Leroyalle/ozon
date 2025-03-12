import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchResult } from '../search-result';
import { ProductWithItems } from '@/entities';

describe('SearchResult', () => {
  const items = [
    {
      id: '1',
      name: 'Phones',
      product_items: [
        {
          id: '23',
          image: 'path',
          price: 123,
          created_at: '2023-03-09T23:55:09.749Z',
          productId: '1',
        },
      ],
      category: '1',
      created_at: '2023-03-09T23:55:09.749Z',
    },
  ];

  it('должен корректно рендериться', () => {
    const isFocused = true;

    render(<SearchResult isFocused={isFocused} items={items} />);

    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByText('Phones')).toBeInTheDocument();
  });

  it('должен возвращать undefined если items undefined', () => {
    const isFocused = true;
    const items = undefined;

    render(<SearchResult isFocused={isFocused} items={items} />);
    const results = screen.queryByTestId('results');
    expect(results).toBeNull();
  });

  it('должен возвращать undefined если isFocused false', () => {
    const isFocused = false;

    render(<SearchResult isFocused={isFocused} items={items} />);
    const results = screen.queryByTestId('results');
    expect(results).toBeNull();
  });

  it('должен возвращать заглушку если ничего не найдено', () => {
    const isFocused = true;
    const items: ProductWithItems[] = [];

    render(<SearchResult isFocused={isFocused} items={items} />);

    expect(screen.getByText(/ничего не найдено/i)).toBeInTheDocument();
  });
});
