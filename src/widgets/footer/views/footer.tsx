import { FC } from 'react';
import { Github, MessageCircle, Instagram, Facebook } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">YYd33 Electronics Store</h3>
            <p className="text-gray-400 mb-4">
              Лучший магазин электроники с широким ассортиментом товаров и отличными ценами.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* ...existing navigation section... */}

          {/* ...existing contacts section... */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} YYd33 Electronics Store. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
