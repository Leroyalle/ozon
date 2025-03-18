import { rootApi } from '@/shared/api';
import { cartService } from '../services';
import { AddToCartParams } from '../types';

export const cartApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation<null, AddToCartParams>({
      queryFn: async (params) => await cartService.addToCart(params),
    }),
  }),
});

export const {
  endpoints: { addToCart },
} = cartApi;

export const { useAddToCartMutation } = cartApi;
