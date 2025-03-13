import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { EmailField, RememberMeOption } from '../components';
import { Button, ModalBody, ModalFooter } from '@heroui/react';
import { authSchema, TAuthSchema } from '../services';
import { authService } from '@/features/auth/services';

export const AuthForm: FC = () => {
  const onSubmit = async (data: TAuthSchema, { resetForm }: { resetForm: () => void }) => {
    const res = await authService.login(data.email);
    resetForm();
    console.log(res);
  };

  return (
    <Formik initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={authSchema}>
      {({ values, handleChange, handleBlur, isSubmitting }) => (
        <Form>
          <ModalBody>
            <EmailField
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
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
