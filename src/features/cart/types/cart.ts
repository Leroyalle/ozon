import { TProduct, TProductItem } from '@/entities';
import { Database } from '@/shared';

export type TCartItem = Database['public']['Tables']['cart_items']['Row'];

export type AddToCartParams = {
  product_item_id: string;
  quantity: number;
};

export type QuantityChangeParams = {
  id: string;
  quantity: number;
};

export type CartItemsWithRelations =
  | (TCartItem & {
      product_items: TProductItem & {
        products: TProduct;
      };
    })[]
  | null;
