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

describe('ProductService', () => {
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
    expect(mocks.from).toHaveBeenCalledWith('products');
    expect(mocks.from().select).toHaveBeenCalledWith('*, product_items(*)');
  });

  it('должен применяться фильтр по категории', async () => {
    const result = await productItemService.getProducts({ categoryId: '123' });
    expect(result).toEqual(mockData);
    expect(mockEq).toBeCalledWith('category', '123');
  });

  it('должен применяться фильтр по имени', async () => {
    const result = await productItemService.getProducts({ name: 'IPhone' });
    expect(result).toEqual(mockData);
    expect(mockEq).toBeCalledWith('name', 'IPhone');
  });
});
