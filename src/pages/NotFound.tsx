
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-tiktales-dark flex flex-col items-center justify-center p-4 text-center">
      <div className="tiktales-gradient inline-block text-5xl font-bold p-2 rounded mb-6 text-transparent bg-clip-text">
        404
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Página no encontrada</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild className="bg-tiktales-purple hover:bg-tiktales-dark-purple text-white">
        <Link to="/">Volver al inicio</Link>
      </Button>
    </div>
  );
};

export default NotFound;
