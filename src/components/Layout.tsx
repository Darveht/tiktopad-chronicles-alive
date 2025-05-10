
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Home, User, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-tiktales-dark flex flex-col">
      {/* Main content */}
      <main className="flex-1 pb-16">
        {children}
      </main>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-tiktales-dark-gray border-t border-gray-800 py-2 px-4">
        <div className="max-w-screen-md mx-auto flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center p-2 text-white hover:text-tiktales-purple">
            <Home size={22} />
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          <Link to="/discover" className="flex flex-col items-center p-2 text-white hover:text-tiktales-purple">
            <Search size={22} />
            <span className="text-xs mt-1">Descubrir</span>
          </Link>
          <Link to="/library" className="flex flex-col items-center p-2 text-white hover:text-tiktales-purple">
            <Book size={22} />
            <span className="text-xs mt-1">Biblioteca</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center p-2 text-white hover:text-tiktales-purple">
            <User size={22} />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
