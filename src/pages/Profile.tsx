
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Settings, Bell, BookOpen } from 'lucide-react';

const Profile = () => {
  // Mock user data
  const user = {
    name: "Usuario TikTales",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    joinDate: "Mayo 2024",
    storiesRead: 12,
    minutesRead: 342,
  };

  return (
    <Layout>
      <div className="p-4 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Perfil</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings size={20} />
          </Button>
        </div>
        
        {/* User info */}
        <div className="bg-tiktales-dark-gray rounded-xl p-6 mb-6 text-center">
          <div className="relative mx-auto mb-4">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-tiktales-purple"
            />
            <Button variant="outline" size="icon" className="absolute bottom-0 right-[calc(50%-50px)] bg-tiktales-dark-gray border-tiktales-purple text-white">
              <Bell size={16} />
            </Button>
          </div>
          
          <h2 className="text-white text-xl font-bold mb-1">{user.name}</h2>
          <p className="text-gray-400 text-sm">Miembro desde {user.joinDate}</p>
          
          <div className="flex justify-center mt-6 space-x-6">
            <div className="text-center">
              <p className="text-tiktales-pink text-xl font-bold">{user.storiesRead}</p>
              <p className="text-gray-400 text-xs">Historias leídas</p>
            </div>
            <div className="text-center">
              <p className="text-tiktales-purple text-xl font-bold">{user.minutesRead}</p>
              <p className="text-gray-400 text-xs">Minutos leídos</p>
            </div>
          </div>
        </div>
        
        {/* Reading stats */}
        <div className="bg-tiktales-dark-gray rounded-xl p-6 mb-6">
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
        
        {/* Admin section - simplified for demo */}
        <div className="bg-tiktales-dark-gray rounded-xl p-6">
          <h3 className="text-white text-lg font-bold mb-4">Panel de Administrador</h3>
          <p className="text-gray-400 text-sm mb-4">Accede al panel para administrar historias y contenido.</p>
          <Button className="w-full bg-tiktales-purple hover:bg-tiktales-dark-purple text-white">
            Acceder al Panel
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
