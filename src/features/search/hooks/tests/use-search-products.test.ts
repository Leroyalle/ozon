import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useSearchProducts } from '../use-search-products';

const mocks = vi.hoisted(() => ({
  useGetProductsQuery: vi.fn(),
}));

vi.mock('@/entities', () => ({
  useGetProductsQuery: mocks.useGetProductsQuery,
}));

describe('UseSearchProducts', () => {
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
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {
    mocks.useGetProductsQuery.mockReturnValue({ data: mockProducts });
  });

  it('должен дебаунсить последующие запросы', () => {
    const { rerender } = renderHook(({ query }) => useSearchProducts(query), {
      initialProps: { query: 'phone' },
    });

    expect(mocks.useGetProductsQuery).toHaveBeenCalledTimes(1);
    expect(mocks.useGetProductsQuery).toHaveBeenCalledWith({ name: 'phone' });

    rerender({ query: 'laptop' });

    expect(mocks.useGetProductsQuery).toHaveBeenCalledWith({ name: 'phone' });
    waitFor(() => expect(mocks.useGetProductsQuery).toHaveBeenCalledTimes(1));

    act(() => {
      vi.advanceTimersByTime(500);
    });

    waitFor(() => {
      expect(mocks.useGetProductsQuery).toHaveBeenCalledTimes(2);
      expect(mocks.useGetProductsQuery).toHaveBeenCalledWith({ name: 'laptop' });
    });
  });
});
