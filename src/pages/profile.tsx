import { User } from '@/entities';
import { useCheckAuth, useLogoutMutation } from '@/features/auth';
import { Button } from '@heroui/react';
import { LogOut } from 'lucide-react';

export function Profile() {
  useCheckAuth('auth');
  const [logout] = useLogoutMutation();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b">
            <h1 className="text-2xl font-semibold">Профиль пользователя</h1>
            <Button onClick={() => logout()} color="danger" className="flex items-center gap-2">
              <LogOut size={18} />
              Выйти
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <LogOut size={24} className="text-gray-600" />
              </div>
              <User className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
