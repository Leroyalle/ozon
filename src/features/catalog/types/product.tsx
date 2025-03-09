import { Database } from '@/shared';

export type Product = Database['public']['Tables']['products']['Row'];
export type ProductItem = Database['public']['Tables']['product_items']['Row'];

export type ProductWithItems = Product & { product_items: ProductItem[] };
