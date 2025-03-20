import { vi } from 'vitest';

export const createMockChain = (data: unknown) => ({
  insert: vi.fn().mockReturnThis(),
  delete: vi.fn().mockReturnThis(),
  update: vi.fn().mockReturnThis(),
  eq: vi.fn().mockReturnThis(),
  not: vi.fn().mockReturnThis(),
  select: vi.fn().mockReturnThis(),
  then: vi.fn().mockImplementation((callback) => callback({ data })),
});
