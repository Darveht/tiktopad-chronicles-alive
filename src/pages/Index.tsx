
import React from 'react';
import Layout from '../components/Layout';
import StoryFeed from '../components/StoryFeed';

const Index = () => {
  return (
    <Layout>
      <div className="bg-tiktales-dark">
        <div className="tiktales-gradient py-4 px-3">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">TikTales</h1>
              <div className="text-white text-sm">
                <span className="font-medium">Historias</span>
              </div>
            </div>
          </div>
        </div>
        
        <StoryFeed />
      </div>
    </Layout>
  );
};

export default Index;
