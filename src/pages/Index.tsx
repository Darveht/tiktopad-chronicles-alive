
import React from 'react';
import Layout from '../components/Layout';
import StoryFeed from '../components/StoryFeed';

const Index = () => {
  return (
    <Layout>
      <header className="tiktales-gradient py-6 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">TikTales</h1>
            <div className="text-white text-sm">
              <span className="font-medium">Historias en Tendencia</span>
            </div>
          </div>
          <p className="text-white text-lg max-w-xl">
            Explora historias inmersivas en un formato diseñado para la era digital.
          </p>
        </div>
      </header>
      
      <StoryFeed />
    </Layout>
  );
};

export default Index;
