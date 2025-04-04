import { rootApi } from '@/shared/api';
import { authService } from '../services';
import { LoginDto } from '../types';
import { addToast } from '@heroui/react';

export const authApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginDto, string>({
      queryFn: async (email) => await authService.login(email),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          addToast({
            title: 'Письмо отправлено',
            description: 'Проверьте почту и перейдите по ссылке для входа в систему',
          });
        } catch {
          addToast({
            title: 'Ошибка',
            description: 'Не удалось отправить письмо, попробуйте еще раз',
          });
        }
      },
    }),

    logout: build.mutation<null, void>({
      queryFn: async () => await authService.logout(),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(rootApi.util.resetApiState());
          addToast({
            title: 'Успешно',
            description: 'Вы вышли из системы',
          });
        } catch {
          addToast({
            title: 'Ошибка',
            description: 'Не удалось выйти из системы',
          });
        }
      },
    }),
  }),
});

export const {
  endpoints: { login, logout },
} = authApi;

export const { useLoginMutation, useLogoutMutation } = authApi;
