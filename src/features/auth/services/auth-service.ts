import { supabase } from '@/shared';

class AuthService {
  public async login(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      throw error;
    }

    return { data };
  }
  public async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return { data };
  }
}

export const authService = new AuthService();
