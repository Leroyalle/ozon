import { render, screen } from '@testing-library/react';
import { Auth } from '../auth';
import { describe, expect, it, vi } from 'vitest';
import { TestProviders } from '@/shared';
const mocks = vi.hoisted(() => ({
  useCheckAuth: vi.fn(),
}));

vi.mock('../../hooks', () => ({
  useCheckAuth: mocks.useCheckAuth,
}));

describe('Auth', () => {
  it('должен вызывать useCheckAuth и рендерить AuthModal', () => {
    render(<TestProviders component={<Auth />} />);

    expect(mocks.useCheckAuth).toHaveBeenCalled();
    expect(screen.getByTestId('authModal')).toBeInTheDocument();
  });
});
