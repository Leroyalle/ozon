import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { EmailField } from '../components';
import { Button, ModalBody, ModalFooter } from '@heroui/react';
import { authSchema, TAuthSchema } from '../services';
import { useLoginMutation } from '@/features/auth/api';

export const AuthForm: FC = () => {
  const [login] = useLoginMutation();

  const onSubmit = async (data: TAuthSchema, { resetForm }: { resetForm: () => void }) => {
    await login(data.email);
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={authSchema}>
      {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
        <Form data-testid="authForm">
          <ModalBody>
            <EmailField
              data-testid="emailField"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              value={values.email}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              data-testid="loginSubmit"
              color="primary"
              type="submit"
              isLoading={isSubmitting}>
              Отправить
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};
