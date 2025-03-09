import { rootApi } from '@/shared';
import { categoriesService } from '../services';
import { Category } from '../types';

export const categoriesApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      queryFn: async () => await categoriesService.getCategories(),
    }),
  }),
});

export const {
  endpoints: { getCategories },
} = categoriesApi;

export const { useGetCategoriesQuery } = categoriesApi;
