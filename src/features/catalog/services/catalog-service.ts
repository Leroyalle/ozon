import { supabase } from '@/shared';

class CatalogService {
  public async getProducts() {
    const { data, error } = await supabase.from('products').select('*, product_items(*)');

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const catalogService = new CatalogService();
