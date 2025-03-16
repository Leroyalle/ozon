import { TestProviders } from '@/shared';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { AuthForm } from '../auth-form';
import { Modal, ModalContent } from '@heroui/react';

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

  it('должен отправлять введенные данные при сабмите', async () => {
    render(
      <TestProviders
        component={
          <Modal isOpen>
            <ModalContent>
              <AuthForm />
            </ModalContent>
          </Modal>
        }
      />,
    );

    const emailInput = screen.getByTestId('emailField');
    const submitButton = screen.getByTestId('loginSubmit');
    await userEvent.type(emailInput, 'leroyalle@example.ru');
    await userEvent.click(submitButton);

    expect(loginFunk).toBeCalled();
  });
});
