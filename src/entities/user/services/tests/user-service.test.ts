import { describe, expect, it, vi } from 'vitest';
import { userService } from '../user-service';

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
}));

vi.mock('@/shared/api/supabase-client', () => ({
  supabase: {
    auth: {
      getSession: mocks.getSession,
    },
  },
}));

describe('UserService', async () => {
  const mockData = { data: { session: true } };
  const mockError = { message: 'Authentication failed' };

  it('должен получать данные', async () => {
    mocks.getSession.mockReturnValue(mockData);
    const result = await userService.getSession();

    expect(result).toEqual(mockData);
    expect(mocks.getSession).toBeCalled();
  });

  it('должен пробрасывать ошибку', async () => {
    mocks.getSession.mockRejectedValue(mockError);
    try {
      await userService.getSession();
    } catch (error) {
      expect(error).toEqual(mockError);
    }

    expect(mocks.getSession).toBeCalled();
  });
});
