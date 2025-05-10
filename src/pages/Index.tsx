
import React from 'react';
import Layout from '../components/Layout';
import StoryFeed from '../components/StoryFeed';
import CategorySection from '../components/CategorySection';
import { stories } from '../data/stories';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  // Group stories by tag for different categories
  const romanceStories = stories.filter(story => story.tags.includes('Romance'));
  const fantasyStories = stories.filter(story => story.tags.includes('Fantasía'));
  const popularStories = [...stories].sort((a, b) => b.views - a.views).slice(0, 4);
  const mostReadStories = [...stories].sort((a, b) => b.likes - a.likes).slice(0, 4);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-tiktales-dark to-black">
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
        
        <div className="max-w-screen-lg mx-auto p-3">
          <Tabs defaultValue="para-ti" className="w-full">
            <TabsList className="w-full bg-transparent border-b border-gray-800 justify-center mb-4">
              <TabsTrigger 
                value="para-ti" 
                className="text-base data-[state=active]:text-tiktales-pink data-[state=active]:border-b-2 data-[state=active]:border-tiktales-pink rounded-none"
              >
                Para Ti
              </TabsTrigger>
              <TabsTrigger 
                value="siguiendo" 
                className="text-base data-[state=active]:text-tiktales-pink data-[state=active]:border-b-2 data-[state=active]:border-tiktales-pink rounded-none"
              >
                Siguiendo
              </TabsTrigger>
              <TabsTrigger 
                value="descubrir" 
                className="text-base data-[state=active]:text-tiktales-pink data-[state=active]:border-b-2 data-[state=active]:border-tiktales-pink rounded-none"
              >
                Descubrir
              </TabsTrigger>
            </TabsList>

            <TabsContent value="para-ti" className="space-y-6 mt-2">
              <CategorySection title="Recomendados para ti" stories={popularStories} />
              <CategorySection title="Más leídos" stories={mostReadStories} />
              <CategorySection title="Romance" stories={romanceStories} />
              <CategorySection title="Fantasía" stories={fantasyStories} />
            </TabsContent>

            <TabsContent value="siguiendo" className="mt-2">
              <div className="text-center py-16">
                <h3 className="text-white text-xl mb-4">Sigue a tus autores favoritos</h3>
                <p className="text-gray-400">Inicia sesión para ver las historias de los autores que sigues.</p>
              </div>
            </TabsContent>

            <TabsContent value="descubrir" className="mt-2">
              <StoryFeed />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
