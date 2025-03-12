import { rootApi } from '../../../shared/api';
import { Category } from '../types';
import { categoriesService } from '../services';

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
