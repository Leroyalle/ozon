import { supabase } from '@/shared';

class ProductService {
  public async getById(id: string) {
    const { data, error } = await supabase
      .from('product_items')
      .select('*, products(*), cart_items(*)')
      .eq('id', id)
      .single();

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const productService = new ProductService();
