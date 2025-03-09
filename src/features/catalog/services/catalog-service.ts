import { supabase } from '@/shared';

class CatalogService {
  public async getProducts(categoryId: string) {
    const query = supabase.from('products').select('*, product_items(*)');

    if (categoryId) {
      query.eq('category', categoryId);
    }

    const { data, error } = await query;

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const catalogService = new CatalogService();
