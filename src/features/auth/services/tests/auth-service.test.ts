import { describe, expect, it, vi } from 'vitest';
import { authService } from '../auth-service';

const mocks = vi.hoisted(() => ({
  signInWithOtp: vi.fn(),
}));

vi.mock('@/shared/api/supabase-client', () => ({
  supabase: {
    auth: {
      signInWithOtp: mocks.signInWithOtp,
    },
  },
}));

describe('AuthService', () => {
  const mockData = { data: { user: true } };
  const mockError = { message: 'Authentication failed' };

  it('должен вызываться signInWithOtp с передачей email', async () => {
    mocks.signInWithOtp.mockReturnValue(mockData);
    const result = await authService.login('leroy@example.com');

    expect(mocks.signInWithOtp).toHaveBeenCalledWith({ email: 'leroy@example.com' });
    expect(result).toEqual(mockData);
  });

  it('должен возвращать объект ошибки при ошибке', async () => {
    mocks.signInWithOtp.mockRejectedValue(mockError);
    try {
      await authService.login('leroy@example.com');
    } catch (error) {
      expect(error).toEqual(mockError);
    }

    expect(mocks.signInWithOtp).toHaveBeenCalledWith({ email: 'leroy@example.com' });
  });
});
