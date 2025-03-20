import { TProduct, TProductItem } from '@/entities';
import { TCartItem } from '@/features';

export type GetProductParams = { id: string | undefined };
export type ProductWithRelations = TProduct & {
  product_items: (TProductItem & { cart_items: TCartItem[] })[];
};

export type ProductItemWithRelations = TProductItem & {
  products: TProduct;
  cart_items: TCartItem[];
};
