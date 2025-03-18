import { supabase } from '@/shared';

class ProductService {
  public async getById(id: string, user_id: string) {
    const { data, error } = await supabase
      .from('products')
      .select(`*, product_items (*, cart_items(*))`)
      .eq('id', id)
      .eq('product_items.cart_items.user_id', user_id)
      .single();

    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const productService = new ProductService();
