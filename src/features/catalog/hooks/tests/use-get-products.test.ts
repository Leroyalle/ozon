import { renderHook } from '@testing-library/react';
import { beforeEach, describe, it, vi, expect } from 'vitest';
import { useGetProducts } from '../use-get-products';

const mocks = vi.hoisted(() => ({
  useGetProductsQuery: vi.fn(),
  useSearchParams: vi.fn(),
}));

vi.mock('@/entities', () => ({
  useGetProductsQuery: mocks.useGetProductsQuery,
}));

vi.mock('react-router-dom', () => ({
  useSearchParams: mocks.useSearchParams,
}));

describe('UseGetProducts', () => {
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
    const mockSearchParams = new URLSearchParams('category=123');
    const mockSetSearchParams = vi.fn();
    mocks.useSearchParams.mockReturnValue([mockSearchParams, mockSetSearchParams]);
    mocks.useGetProductsQuery.mockReturnValue({ data: mockProducts });
  });

  it('должен возвращать данные продуктов и корректно использовать category из searchParams', () => {
    const { result } = renderHook(() => useGetProducts());

    expect(mocks.useGetProductsQuery).toHaveBeenCalledWith(
      { categoryId: '123' },
      { refetchOnMountOrArgChange: true },
    );

    expect(result.current.data).toEqual(mockProducts);
  });

  it('должен возвращать data undefined', () => {
    mocks.useSearchParams.mockReturnValue([new URLSearchParams('category=321'), vi.fn()]);
    mocks.useGetProductsQuery.mockReturnValue({ data: undefined });

    const { result } = renderHook(() => useGetProducts());

    expect(result.current.data).toBeUndefined();
  });
});
