import { rootApi } from '@/shared/api';
import { productService } from '../services';
import { GetProductParams, ProductItemWithRelations } from '../types';

export const productApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<ProductItemWithRelations | undefined, GetProductParams>({
      queryFn: async (params) => {
        if (!params.id) return { data: undefined };
        return await productService.getById(params.id);
      },
      providesTags: (_, __, { id }) => [{ type: 'Product', id }],
      keepUnusedDataFor: 60 * 100,
    }),
  }),
});

export const {
  endpoints: { getProduct },
} = productApi;
export const { useGetProductQuery } = productApi;
