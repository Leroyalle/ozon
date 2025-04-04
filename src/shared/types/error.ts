export type SupabaseError = {
  error: {
    code: string;
    details: string | null;
    hint: string | null;
    message: string;
  };
  isUnhandledError: boolean;
};
