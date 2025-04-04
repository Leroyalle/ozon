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
import { addToast } from '@heroui/react';
import { SupabaseError } from '@/shared';

export const cartApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation<TCartItem[], AddToCartParams>({
      queryFn: async (params) => await cartService.addToCart(params),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
      onQueryStarted: async (params, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          addToast({
            title: 'Товар успешно добавлен в корзину',
          });
        } catch (error) {
          console.log(error);
          const err = error as SupabaseError;
          if (err.error.code === '42501') {
            addToast({
              title: 'Ошибка',
              description: 'Авторизируйтесь, чтобы добавить товар в корзину',
            });
          } else {
            addToast({
              title: 'Ошибка',
              description: 'Не удалось добавить товар в корзину',
            });
          }
        }
      },
    }),

    removeFromCart: build.mutation<TCartItem[], RemoveFromCartParams>({
      queryFn: async (params) => await cartService.removeFromCart(params.cart_item_id),
      invalidatesTags: (_, __, params) => [
        { type: 'Cart' },
        { type: 'Product', id: params.product_item_id },
      ],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          addToast({
            title: 'Товар успешно удален из корзины',
          });
        } catch {
          addToast({
            title: 'Ошибка',
            description: 'Не удалось удалить товар из корзины',
          });
        }
      },
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
