
import React, { useState } from 'react';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import { stories } from '../data/stories';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Library = () => {
  // In a real app, these would come from a user's data store
  // For demo purposes, we're using the first 2 stories as "favorites"
  const favoriteStories = stories.slice(0, 2);
  
  // Use the last story as "currently reading"
  const currentlyReading = stories.slice(-1)[0];

  return (
    <Layout>
      <div className="p-4 pb-20">
        <h1 className="text-2xl font-bold text-white mb-6">Mi Biblioteca</h1>
        
        <Tabs defaultValue="reading" className="w-full">
          <TabsList className="bg-tiktales-dark-gray w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="reading" className="data-[state=active]:bg-tiktales-purple">
              Leyendo
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-tiktales-purple">
              Favoritos
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-tiktales-purple">
              Historial
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reading" className="mt-2">
            {currentlyReading ? (
              <div className="mb-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-white text-lg font-medium">Continuar leyendo</h2>
                  <span className="text-tiktales-purple text-sm">Capítulo 1 de {currentlyReading.chapters.length}</span>
                </div>
                <StoryCard story={currentlyReading} />
                <div className="mt-4">
                  <div className="w-full h-2 bg-tiktales-dark-gray rounded-full overflow-hidden">
                    <div className="h-full bg-tiktales-purple rounded-full" style={{ width: '20%' }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">20% completado</span>
                    <span className="text-xs text-gray-400">Actualizado: hace 2 días</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No estás leyendo ninguna historia actualmente</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="favorites" className="mt-2">
            {favoriteStories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {favoriteStories.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No tienes historias favoritas</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history" className="mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stories.slice(0, 3).map(story => (
                <div key={story.id} className="flex items-center p-3 bg-tiktales-dark-gray rounded-lg mb-2">
                  <img 
                    src={story.coverImage} 
                    alt={story.title} 
                    className="w-16 h-24 object-cover rounded mr-4" 
                  />
                  <div>
                    <h3 className="text-white font-medium">{story.title}</h3>
                    <p className="text-sm text-gray-400">{story.author.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Leído hace 3 días</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Library;
