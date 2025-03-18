import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { productService } from '../product-service';

const mockData = { data: [{ id: '1', name: 'Phones' }] };
const mockError = { message: 'Authentication failed' };

const mocks = vi.hoisted(() => ({
  from: vi.fn(() => ({
    select: vi.fn(() => ({
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockReturnThis(),
      then: vi.fn(),
    })),
  })),
}));

vi.mock('@/shared/api/supabase-client', () => ({
  supabase: {
    from: mocks.from,
  },
}));

describe('ProductService', () => {
  let mockEq: Mock;
  let mockSelect: Mock;

  beforeEach(() => {
    mockEq = vi.fn().mockReturnThis();
    mockSelect = vi.fn().mockReturnThis();
    mocks.from.mockReturnValue({
      select: vi.fn(() => ({
        eq: mockEq,
        single: mockSelect,
        then: vi.fn().mockImplementation((callback) => {
          return callback(mockData);
        }),
      })),
    });
  });

  it('должен возвращать данные', async () => {
    const result = await productService.getById('123', '321');
    expect(result).toEqual(mockData);
    expect(mocks.from).toHaveBeenCalledWith('products');
    expect(mocks.from().select).toHaveBeenCalledWith(`*, product_items (*, cart_items(*))`);
    expect(mockEq).toHaveBeenCalledWith('id', '123');
    expect(mockEq).toHaveBeenCalledWith('product_items.cart_items.user_id', '321');
    expect(mockSelect).toHaveBeenCalled();
  });

  it('должен возвращать ошибку', async () => {
    mockEq = vi.fn().mockReturnThis();
    mockSelect = vi.fn().mockReturnThis();
    mocks.from.mockReturnValue({
      select: vi.fn(() => ({
        eq: mockEq,
        single: mockSelect,
        then: vi.fn().mockImplementation((callback) => {
          return callback(mockError);
        }),
      })),
    });
    try {
      await productService.getById('123', '321');
    } catch (error) {
      expect(mocks.from).rejects.toThrow();
      expect(error).toEqual(mockError);
    }
  });
});
