import { TProduct, TProductItem } from '@/entities';
import { Database } from '@/shared';

export type TCartItem = Database['public']['Tables']['cart_items']['Row'];

export type AddToCartParams = {
  product_item_id: string;
  quantity: number;
};

export type QuantityChangeParams = {
  product_item_id: string;
  cart_item_id: string;
  quantity: number;
};

export type RemoveFromCartParams = {
  product_item_id: string;
  cart_item_id: string;
};

export type ToggleSelectionParams = {
  isSelected: boolean;
  cart_item_id?: string;
};

export type CartItemWithRelations =
  | TCartItem & {
      product_items: TProductItem & {
        products: TProduct;
      };
    };
