import { supabase } from '@/shared';

class AuthService {
  public async login(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      throw error;
    }

    return { data };
  }

  public async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return { data: null };
  }
}

export const authService = new AuthService();
