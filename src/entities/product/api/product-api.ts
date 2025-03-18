import { rootApi } from '@/shared/api';
import { productService } from '../services';
import { GetProductParams, ProductWithRelations } from '../types';

export const productApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<ProductWithRelations | undefined, GetProductParams>({
      queryFn: async (params) => {
        if (!params.id || !params.user_id) return { data: undefined };
        return await productService.getById(params.id, params.user_id);
      },
      providesTags: ['Product'],
      keepUnusedDataFor: 60 * 100,
    }),
  }),
});

export const {
  endpoints: { getProduct },
} = productApi;
export const { useGetProductQuery } = productApi;
