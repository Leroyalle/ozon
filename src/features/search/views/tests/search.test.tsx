import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Search } from '../search';
import userEvent from '@testing-library/user-event';
import { TestProviders } from '@/shared';
import { mockProducts } from './mocks';

const mocks = vi.hoisted(() => ({
  useSearchProducts: vi.fn(),
}));

vi.mock('../../hooks', () => ({
  useSearchProducts: mocks.useSearchProducts,
}));

describe('Search', () => {
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
    expect(screen.getByText(mockProducts[0].products.name)).toBeInTheDocument();
  });
});
