import { rootApi } from '@/shared/api';
import { authService } from '../services';
import { LoginDto } from '../types';

export const authApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginDto, string>({
      queryFn: async (email) => await authService.login(email),
    }),
  }),
});

export const {
  endpoints: { login },
} = authApi;

export const { useLoginMutation } = authApi;
