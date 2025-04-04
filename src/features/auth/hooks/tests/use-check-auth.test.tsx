import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useCheckAuth } from '../use-check-auth';

const mocks = vi.hoisted(() => ({
  useGetSessionQuery: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');

  return {
    ...actual,
    useNavigate: mocks.useNavigate,
  };
});

vi.mock('@/entities/user/api', () => ({
  useGetSessionQuery: mocks.useGetSessionQuery,
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
    data: null,
  };

  let mockNavigate: Mock;

  beforeEach(() => {
    mockNavigate = vi.fn();
    mocks.useNavigate.mockReturnValue(mockNavigate);
  });

  it('должен редиректить при пустой сессии', async () => {
    mocks.useGetSessionQuery.mockReturnValue(sessionTrue);

    renderHook(() => useCheckAuth('auth'));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/');
    });
  });

  it('не должен вызываться если сессия есть', async () => {
    mocks.useGetSessionQuery.mockReturnValue(sessionFalse);

    renderHook(() => useCheckAuth('auth'));
    await waitFor(() => {
      expect(mockNavigate).not.toBeCalled();
    });
  });
});
