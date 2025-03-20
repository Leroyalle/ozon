import { Database } from '@/shared';

export type TProduct = Database['public']['Tables']['products']['Row'];
export type TProductItem = Database['public']['Tables']['product_items']['Row'];

export type ProductItemWithProduct = TProductItem & { products: TProduct };
