import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { productItemService } from '../product-item-service';

const mockData = { data: [{ id: '1', name: 'Phones' }] };

const mocks = vi.hoisted(() => ({
  from: vi.fn(() => ({
    select: vi.fn(),
  })),
}));

vi.mock('@/shared/api/supabase-client', () => ({
  supabase: {
    from: mocks.from,
  },
}));

describe('ProductItemService', () => {
  let mockEq: Mock;

  beforeEach(() => {
    mockEq = vi.fn().mockReturnThis();
    mocks.from.mockReturnValue({
      select: vi.fn(() => ({
        eq: mockEq,
        then: vi.fn().mockImplementation((callback) => {
          return callback(mockData);
        }),
      })),
    });
  });

  it('должен возвращать данные без передачи доп параметров', async () => {
    const result = await productItemService.getProducts({});
    expect(result).toEqual(mockData);
    expect(mocks.from).toHaveBeenCalledWith('product_items');
    expect(mocks.from().select).toHaveBeenCalledWith('*, products!inner(*)');
  });

  it('должен применяться фильтр по категории', async () => {
    const result = await productItemService.getProducts({ categoryId: '123' });
    expect(result).toEqual(mockData);
    expect(mockEq).toBeCalledWith('products.category', '123');
  });

  it('должен применяться фильтр по имени', async () => {
    const result = await productItemService.getProducts({ name: 'IPhone' });
    expect(result).toEqual(mockData);
    expect(mockEq).toBeCalledWith('products.name', 'IPhone');
  });
});
