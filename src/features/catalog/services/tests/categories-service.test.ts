import { describe, expect, it, vi } from 'vitest';
import { categoriesService } from '../categories-service';
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

describe('CategoriesService', () => {
  const mockData = { data: [{ id: '1' }] };
  const mockError = { message: 'Authentication failed' };

  it('должен возвращать данные', async () => {
    mocks.from.mockReturnValue({
      select: vi.fn().mockResolvedValue(mockData),
    });

    const result = await categoriesService.getCategories();
    expect(mocks.from).toHaveBeenCalledWith('categories');
    expect(mocks.from().select).toHaveBeenCalledWith('*');
    expect(result).toEqual(mockData);
  });

  it('должен прокидывать ошибку', async () => {
    mocks.from.mockReturnValue({
      select: vi.fn().mockRejectedValue(mockError),
    });

    try {
      await categoriesService.getCategories();
    } catch (error) {
      expect(mocks.from).toHaveBeenCalledWith('categories');
      expect(mocks.from().select).toHaveBeenCalledWith('*');
      expect(error).toEqual(mockError);
    }
  });
});
