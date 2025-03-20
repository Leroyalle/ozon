import { rootApi } from '@/shared/api';
import { cartService } from '../services';
import {
  AddToCartParams,
  CartItemWithRelations,
  QuantityChangeParams,
  RemoveFromCartParams,
  TCartItem,
  ToggleSelectionParams,
} from '../types';

export const cartApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation<TCartItem[], AddToCartParams>({
      queryFn: async (params) => await cartService.addToCart(params),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
    }),

    removeFromCart: build.mutation<TCartItem[], RemoveFromCartParams>({
      queryFn: async (params) => await cartService.removeFromCart(params.cart_item_id),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
    }),

    incrementCartItemQuantity: build.mutation<TCartItem[], QuantityChangeParams>({
      queryFn: async (params) => await cartService.incrementQuantity(params),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
    }),

    decrementCartItemQuantity: build.mutation<TCartItem[], QuantityChangeParams>({
      queryFn: async (params) => await cartService.decrementQuantity(params),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
    }),

    getCartItems: build.query<CartItemWithRelations[] | null, void>({
      queryFn: async () => cartService.getCartItems(),
      providesTags: ['Cart'],
    }),

    toggleCartItemSelection: build.mutation<null, ToggleSelectionParams>({
      queryFn: async (params) => cartService.toggleCartItemSelection(params),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  endpoints: {
    addToCart,
    removeFromCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    getCartItems,
    toggleCartItemSelection,
  },
} = cartApi;

export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncrementCartItemQuantityMutation,
  useDecrementCartItemQuantityMutation,
  useGetCartItemsQuery,
  useToggleCartItemSelectionMutation,
} = cartApi;
