import { TestProviders } from '@/shared';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { AuthFormInModal } from './auth-form-in-modal';

const mocks = vi.hoisted(() => ({
  useLoginMutation: vi.fn(),
}));

vi.mock('@/features/auth/api', () => ({
  useLoginMutation: mocks.useLoginMutation,
}));

describe('AuthForm', () => {
  let loginFunk: Mock;

  beforeEach(() => {
    loginFunk = vi.fn();
    mocks.useLoginMutation.mockReturnValue([loginFunk]);
  });

  it('должен отправлять введенные данные при сабмите и очищать форму', async () => {
    render(<TestProviders component={<AuthFormInModal />} />);

    const emailInput = screen.getByTestId('emailField');
    const submitButton = screen.getByTestId('loginSubmit');
    await userEvent.type(emailInput, 'leroyalle@example.ru');
    await userEvent.click(submitButton);

    expect(loginFunk).toBeCalledWith('leroyalle@example.ru');
    expect(screen.getByTestId('emailField')).toHaveValue('');
  });

  it('НЕ должен отправлять введенные данные при сабмите', async () => {
    render(<TestProviders component={<AuthFormInModal />} />);

    const submitButton = screen.getByTestId('loginSubmit');
    await userEvent.click(submitButton);

    expect(loginFunk).not.toBeCalled();
  });
});
