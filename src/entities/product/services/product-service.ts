import { supabase } from '@/shared';

class ProductService {
  public async getById(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*, product_items(*)')
      .eq('id', id)
      .single();

    if (error) {
      throw { error };
    }

    console.log('INFUNC', data);

    return { data };
  }
}

export const productService = new ProductService();
