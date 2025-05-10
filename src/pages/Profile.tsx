
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Settings, Bell, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState<'login' | 'signup'>('login');

  // Mock user data
  const user = isLoggedIn ? {
    name: "Usuario TikTales",
    username: "@usuario.tiktales",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    joinDate: "Mayo 2024",
    storiesRead: 12,
    minutesRead: 342,
  } : null;

  // Mock login function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Mock signup function
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Mock logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Layout>
      <div className="p-4 pb-20 max-w-screen-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Perfil</h1>
          {isLoggedIn && (
            <Button variant="ghost" size="icon" className="text-white">
              <Settings size={20} />
            </Button>
          )}
        </div>

        {isLoggedIn ? (
          <>
            {/* User Profile - Instagram-style */}
            <div className="bg-tiktales-dark-gray rounded-2xl p-6 mb-6">
              <div className="flex items-center mb-6">
                <img 
                  src={user?.avatar} 
                  alt={user?.name}
                  className="w-24 h-24 rounded-full border-2 border-tiktales-purple"
                />
                <div className="ml-6">
                  <h2 className="text-white text-xl font-bold mb-1">{user?.name}</h2>
                  <p className="text-gray-400 text-sm mb-3">{user?.username}</p>
                  <p className="text-gray-400 text-xs">Miembro desde {user?.joinDate}</p>
                </div>
              </div>
              
              <div className="flex justify-around border-t border-b border-gray-700 py-3">
                <div className="text-center">
                  <p className="text-white text-xl font-bold">{user?.storiesRead}</p>
                  <p className="text-gray-400 text-xs">Historias</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">4</p>
                  <p className="text-gray-400 text-xs">Siguiendo</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">16</p>
                  <p className="text-gray-400 text-xs">Seguidores</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" className="flex-1 mr-2 bg-transparent text-white border-gray-600">
                  Editar Perfil
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent text-white border-gray-600" onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </div>
            </div>
            
            {/* Reading statistics */}
            <div className="bg-tiktales-dark-gray rounded-2xl p-6 mb-6">
              <h3 className="text-white text-lg font-bold mb-4 flex items-center">
                <BookOpen size={18} className="mr-2 text-tiktales-purple" />
                Estadísticas de lectura
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-tiktales-dark rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Género más leído</p>
                  <p className="text-white font-medium">Fantasía</p>
                </div>
                <div className="bg-tiktales-dark rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Tiempo promedio</p>
                  <p className="text-white font-medium">28 min/día</p>
                </div>
                <div className="bg-tiktales-dark rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Capítulos leídos</p>
                  <p className="text-white font-medium">47</p>
                </div>
                <div className="bg-tiktales-dark rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Historias completadas</p>
                  <p className="text-white font-medium">8</p>
                </div>
              </div>
            </div>
            
            {/* Admin section */}
            <div className="bg-tiktales-dark-gray rounded-2xl p-6">
              <h3 className="text-white text-lg font-bold mb-4">Panel de Administrador</h3>
              <p className="text-gray-400 text-sm mb-4">Accede al panel para administrar historias y contenido.</p>
              <Button className="w-full bg-gradient-to-r from-tiktales-purple to-tiktales-pink hover:opacity-90 text-white">
                Acceder al Panel
              </Button>
            </div>
          </>
        ) : (
          /* Authentication UI - Instagram-style */
          <div className="bg-tiktales-dark-gray rounded-2xl p-6">
            <div className="mb-6 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop" 
                alt="TikTales Logo" 
                className="w-24 h-24 rounded-full border-2 border-tiktales-pink"
              />
            </div>
            
            <h2 className="text-xl text-center text-white font-bold mb-6">
              {activeAuthTab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h2>
            
            <div className="mb-6">
              <Button 
                variant="outline" 
                className={`w-1/2 rounded-r-none ${activeAuthTab === 'login' ? 'bg-tiktales-purple border-tiktales-purple text-white' : 'bg-transparent text-gray-400'}`} 
                onClick={() => setActiveAuthTab('login')}
              >
                <LogIn size={18} className="mr-2" />
                Iniciar Sesión
              </Button>
              <Button 
                variant="outline" 
                className={`w-1/2 rounded-l-none ${activeAuthTab === 'signup' ? 'bg-tiktales-pink border-tiktales-pink text-white' : 'bg-transparent text-gray-400'}`}
                onClick={() => setActiveAuthTab('signup')}
              >
                <UserPlus size={18} className="mr-2" />
                Registrarse
              </Button>
            </div>
            
            {activeAuthTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="bg-tiktales-dark border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Contraseña</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="bg-tiktales-dark border-gray-700 text-white" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-tiktales-purple to-tiktales-pink hover:opacity-90">
                  Iniciar Sesión
                </Button>
                <p className="text-center text-gray-400 text-sm">
                  ¿Olvidaste tu contraseña? <a href="#" className="text-tiktales-pink">Recuperar</a>
                </p>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nombre Completo</Label>
                  <Input id="name" type="text" placeholder="Tu Nombre" className="bg-tiktales-dark border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-white">Correo Electrónico</Label>
                  <Input id="signup-email" type="email" placeholder="tu@email.com" className="bg-tiktales-dark border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-white">Contraseña</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" className="bg-tiktales-dark border-gray-700 text-white" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-tiktales-purple to-tiktales-pink hover:opacity-90">
                  Crear Cuenta
                </Button>
                <p className="text-center text-gray-400 text-xs">
                  Al registrarte, aceptas nuestros <a href="#" className="text-tiktales-pink">Términos y Condiciones</a> y <a href="#" className="text-tiktales-pink">Política de Privacidad</a>.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
