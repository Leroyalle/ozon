import { rootApi } from '@/shared';
import { ProductWithItems } from '../types';
import { catalogService } from '../services';

export const catalogApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductWithItems[], void>({
      queryFn: async () => await catalogService.getProducts(),
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = catalogApi;
export const { useGetProductsQuery } = catalogApi;

// queryFn: async () => {
//       const { data, error } = await supabase.from('products').select('*, product_item(*)');

//       if (error) {
//         throw { error };
//       }

//       return {
//         data: data || [],
//       };
//     },
