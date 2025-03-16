import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AuthModal } from '../auth-modal';
import { TestProviders } from '@/shared';

describe('AuthModal', () => {
  it('должен рендерить AuthForm', () => {
    render(<TestProviders component={<AuthModal />} />);
    expect(screen.getByTestId('authForm')).toBeInTheDocument();
  });
});
