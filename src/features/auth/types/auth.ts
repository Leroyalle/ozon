export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  providers: unknown[];
  createdAt: string;
};

export type LoginDto =
  | {
      user: null;
      session: null;
      messageId?: string | null;
    }
  | {
      user: null;
      session: null;
      messageId?: string | null;
    };
