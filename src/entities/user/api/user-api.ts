import { rootApi } from '@/shared/api';
import { userService } from '../services';
import { SessionDto } from '../types';

export const userApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getSession: build.query<SessionDto, void>({
      queryFn: async () => await userService.getSession(),
    }),
  }),
});

export const {
  endpoints: { getSession },
} = userApi;

export const { useGetSessionQuery } = userApi;
