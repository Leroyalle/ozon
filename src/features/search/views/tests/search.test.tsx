import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Search } from '../search';
import userEvent from '@testing-library/user-event';
import { TestProviders } from '@/shared';

const mocks = vi.hoisted(() => ({
  useSearchProducts: vi.fn(),
}));

vi.mock('../../hooks', () => ({
  useSearchProducts: mocks.useSearchProducts,
}));

describe('Search', () => {
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
  ];

  beforeEach(() => {
    mocks.useSearchProducts.mockReturnValue({ data: mockProducts });
  });

  it('должен менять значение searchInput при вводе текста', async () => {
    render(<TestProviders component={<Search />} />);
    const input = screen.getByTestId('search-field');
    await userEvent.type(input, 'Варежки');
    expect(input).toHaveValue('Варежки');
  });

  it('должен рендерить результаты при успешном поиске', async () => {
    render(<TestProviders component={<Search />} />);
    const input = screen.getByTestId('search-field');
    await userEvent.type(input, 'Phones');
    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByText('Phones')).toBeInTheDocument();
  });
});
