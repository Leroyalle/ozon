import { supabase } from '@/shared';
import { ProductSort } from '../types';

class ProductItemService {
  public async getProducts({ categoryId, name }: ProductSort) {
    const query = supabase.from('products').select('*, product_items(*)');

    if (categoryId) {
      query.eq('category', categoryId);
    }

    if (name) {
      query.eq('name', name);
    }

    const { data, error } = await query;

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const productItemService = new ProductItemService();
