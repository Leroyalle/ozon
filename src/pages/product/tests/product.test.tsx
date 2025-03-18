import { TestProviders } from '@/shared';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductPage } from '../product';
import { mockProducts, mockSession } from './mocks';

const mocks = vi.hoisted(() => ({
  useParams: vi.fn(),
  useGetSessionQuery: vi.fn(),
  useGetProductQuery: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return { ...actual, useParams: mocks.useParams };
});

vi.mock('@/entities/product/api', () => ({
  useGetProductQuery: mocks.useGetProductQuery,
}));

vi.mock('@/entities/user/api', () => ({
  useGetSessionQuery: mocks.useGetSessionQuery,
}));

describe('ProductPage', () => {
  beforeEach(() => {
    mocks.useParams.mockReturnValue({ id: '123' });
    mocks.useGetSessionQuery.mockReturnValue(mockSession);
    mocks.useGetProductQuery.mockReturnValue({ data: mockProducts });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('должен получать данные и рендерить продукт', () => {
    render(<TestProviders component={<ProductPage />} />);
    expect(screen.getByTestId('productPage')).toBeInTheDocument();
    expect(screen.getByTestId('product')).toBeInTheDocument();
    expect(mocks.useParams).toBeCalled();
    expect(mocks.useGetSessionQuery).toBeCalled();
    expect(mocks.useGetProductQuery).toBeCalled();
    expect(mocks.useGetProductQuery).toHaveBeenCalledWith(
      { id: '123', user_id: '321' },
      { skip: false },
    );
  });

  it('useGetProductQuery должен быть вызван со skip true', () => {
    mocks.useParams.mockReturnValue({ id: undefined });
    render(<TestProviders component={<ProductPage />} />);
    expect(screen.getByTestId('productPage')).toBeInTheDocument();
    expect(mocks.useGetSessionQuery).toBeCalled();
    expect(mocks.useGetProductQuery).toHaveBeenCalledWith(
      { id: undefined, user_id: '321' },
      { skip: true },
    );
  });
});
