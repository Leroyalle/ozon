import { render, screen } from '@testing-library/react';
import { Catalog } from '../catalog';
import { describe, expect, it, vi } from 'vitest';

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
  const mockCategories = [
    {
      id: '1',
      name: 'Phones',
    },
    {
      id: '2',
      name: 'Laptops',
    },
  ];
  const mockProducts = [
    {
      id: '1',
      name: 'Phones',
      product_items: ['iPhone', 'Samsung'],
    },
    {
      id: '2',
      name: 'Laptops',
      product_items: ['MacBook', 'Dell'],
    },
  ];

  it('передает категории и продукты в дочерние компоненты', () => {
    mocks.useGetCategoriesQuery.mockReturnValue({ data: mockCategories });
    mocks.useGetProducts.mockReturnValue({
      data: mockProducts,
      setSearchParams: vi.fn(),
    });

    render(<Catalog />);

    expect(screen.getAllByText('Phones')).toHaveLength(2);
  });
});
