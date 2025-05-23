import { supabase } from '@/shared';
import { ProductSort } from '../types';

class ProductItemService {
  public async getProducts({ categoryId, name }: ProductSort) {
    const query = supabase.from('product_items').select('*, products!inner(*)');

    if (categoryId) {
      query.eq('products.category', categoryId);
    }

    if (name) {
      query.eq('products.name', name);
    }

    const { data, error } = await query;

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const productItemService = new ProductItemService();
