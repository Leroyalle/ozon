import { Session } from '@supabase/supabase-js';

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  providers: unknown[];
  createdAt: string;
};

export type SessionDto = { session: Session | null };
