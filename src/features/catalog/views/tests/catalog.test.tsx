import { render, screen } from '@testing-library/react';
import { Catalog } from '../catalog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TestProviders } from '@/shared';
import { mockCategories, mockProducts } from './mocks';

const mocks = vi.hoisted(() => ({
  useGetCategoriesQuery: vi.fn(),
  useGetProducts: vi.fn(),
}));

vi.mock('../../api/categories-api', () => ({
  useGetCategoriesQuery: mocks.useGetCategoriesQuery,
}));

vi.mock('../../hooks', () => ({
  useGetProducts: mocks.useGetProducts,
}));

describe('Catalog', () => {
  beforeEach(() => {
    mocks.useGetCategoriesQuery.mockReturnValue({ data: mockCategories });
    mocks.useGetProducts.mockReturnValue({
      data: mockProducts,
      setSearchParams: vi.fn(),
      isLoading: false,
    });
  });

  it('должен получить и передать категории и продукты в дочерние компоненты', () => {
    render(<TestProviders component={<Catalog />} />);
    expect(screen.getByTestId('categories')).toBeInTheDocument();
    expect(screen.getByTestId('productList')).toBeInTheDocument();
    expect(screen.getAllByText('Варежки')).toHaveLength(1);
  });

  it('должен включаять в себя sr-only заголовок', () => {
    render(<TestProviders component={<Catalog />} />);
    const title = screen.getByText('Catalog');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('sr-only');
  });
});
