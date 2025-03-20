import { render, screen } from '@testing-library/react';
import { Catalog } from '../catalog';
import { describe, expect, it, vi } from 'vitest';
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
  it('должен получить и передать категории и продукты в дочерние компоненты', () => {
    mocks.useGetCategoriesQuery.mockReturnValue({ data: mockCategories });
    mocks.useGetProducts.mockReturnValue({
      data: mockProducts,
      setSearchParams: vi.fn(),
    });

    render(<TestProviders component={<Catalog />} />);

    expect(screen.getAllByText('Варежки')).toHaveLength(1);
  });
});
