import { rootApi } from '@/shared/api';
import { cartService } from '../services';
import { AddToCartParams, QuantityChangeParams, TCartItem } from '../types';

export const cartApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation<TCartItem[], AddToCartParams>({
      queryFn: async (params) => await cartService.addToCart(params),
      invalidatesTags: ['Cart', 'Product'],
    }),

    removeFromCart: build.mutation<TCartItem[], string>({
      queryFn: async (id) => await cartService.removeFromCart(id),
      invalidatesTags: ['Cart', 'Product'],
    }),

    incrementCartItemQuantity: build.mutation<TCartItem[], QuantityChangeParams>({
      queryFn: async (params) => await cartService.incrementQuantity(params),
      invalidatesTags: ['Cart', 'Product'],
    }),

    decrementCartItemQuantity: build.mutation<TCartItem[], QuantityChangeParams>({
      queryFn: async (params) => await cartService.decrementQuantity(params),
      invalidatesTags: ['Cart', 'Product'],
    }),
  }),
});

export const {
  endpoints: { addToCart, removeFromCart, incrementCartItemQuantity, decrementCartItemQuantity },
} = cartApi;

export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncrementCartItemQuantityMutation,
  useDecrementCartItemQuantityMutation,
} = cartApi;
