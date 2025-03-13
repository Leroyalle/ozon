import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { EmailField, RememberMeOption } from '../components';
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
        <Form>
          <ModalBody>
            <EmailField
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              value={values.email}
            />
            <RememberMeOption />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" isLoading={isSubmitting}>
              Отправить
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};
