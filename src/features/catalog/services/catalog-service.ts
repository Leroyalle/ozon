import { ApiRoutesEnum, supabase } from '@/shared';

class CatalogService {
  public async getProducts() {
    const { data, error } = await supabase.from('products').select('*, product_items(*)');
    console.log(ApiRoutesEnum.products, 'products');
    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const catalogService = new CatalogService();
