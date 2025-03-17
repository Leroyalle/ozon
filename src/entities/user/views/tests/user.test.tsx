import { TestProviders } from '@/shared';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { User } from '../user';

const mocks = vi.hoisted(() => ({
  useGetSessionQuery: vi.fn().mockReturnValue({ data: true }),
}));

vi.mock('../../api', () => ({
  useGetSessionQuery: mocks.useGetSessionQuery,
}));

describe('User', () => {
  it('должен вызывать useGetSessionQuery и рендериться', () => {
    render(<TestProviders component={<User />} />);
    expect(mocks.useGetSessionQuery).toBeCalled();
    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
