import { rootApi } from '@/shared/api';
import { authService } from '../services';
import { LoginDto, SessionDto } from '../types';

export const authApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginDto, string>({
      queryFn: async (email) => await authService.login(email),
    }),

    getSession: build.query<SessionDto, void>({
      queryFn: async () => await authService.getSession(),
    }),
  }),
});

export const {
  endpoints: { login, getSession },
} = authApi;

export const { useLoginMutation, useGetSessionQuery } = authApi;
