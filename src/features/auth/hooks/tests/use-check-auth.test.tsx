import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RouterMemory } from '@/shared';

const mocks = vi.hoisted(() => ({
  useGetSessionQuery: vi.fn(),
  useGetProductsQuery: vi.fn(),
  useGetCategoriesQuery: vi.fn(),
  useLoginMutation: vi.fn(),
}));

vi.mock('@/features/auth/api', () => ({
  useLoginMutation: mocks.useLoginMutation,
}));

vi.mock('@/entities/user/api', () => ({
  useGetSessionQuery: mocks.useGetSessionQuery,
}));

vi.mock('@/entities/product-item/api', () => ({
  useGetProductsQuery: mocks.useGetProductsQuery,
}));

vi.mock('@/features/catalog/api', () => ({
  useGetCategoriesQuery: mocks.useGetCategoriesQuery,
}));

describe('UseCheckAuth', () => {
  const sessionTrue = {
    data: {
      session: {
        session: {
          example: true,
        },
      },
    },
  };
  const sessionFalse = {
    data: {},
  };

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

  const categories = [
    {
      id: '1',
      name: 'Phones',
      created_at: '2023-03-09T23:55:09.749Z',
    },
    {
      id: '2',
      name: 'Laptops',
      created_at: '2023-03-09T23:55:09.749Z',
    },
  ];

  beforeEach(() => {
    mocks.useGetProductsQuery.mockReturnValue({ data: mockProducts });
    mocks.useGetCategoriesQuery.mockReturnValue({ data: categories });
    mocks.useLoginMutation.mockReturnValue([undefined]);
  });

  it('должен редиректить при пустой сессии', () => {
    mocks.useGetSessionQuery.mockReturnValue(sessionTrue);
    render(<RouterMemory initialRoute="/auth" />);
    expect(screen.getByTestId('feedPage')).toBeInTheDocument();
  });

  it('не должен редиректить при пустой сессии', () => {
    mocks.useGetSessionQuery.mockReturnValue(sessionFalse);
    render(<RouterMemory initialRoute="/auth" />);
    expect(screen.getByTestId('authPage')).toBeInTheDocument();
  });
});
