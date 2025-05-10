
import React, { useState } from 'react';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import { stories } from '../data/stories';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [...new Set(stories.flatMap(story => story.tags))];

  return (
    <Layout>
      <div className="p-4 pb-20">
        <h1 className="text-2xl font-bold text-white mb-6">Descubrir</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="text"
            placeholder="Buscar historias, géneros..."
            className="pl-10 bg-tiktales-dark-gray border-gray-700 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-tiktales-dark-gray w-full overflow-x-auto hide-scrollbar flex space-x-2 p-1">
            <TabsTrigger value="all" className="text-sm data-[state=active]:bg-tiktales-purple">
              Todos
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={category}
                value={category}
                className="text-sm data-[state=active]:bg-tiktales-purple whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            {filteredStories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStories.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No se encontraron resultados para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stories
                  .filter(story => story.tags.includes(category))
                  .filter(story => 
                    searchTerm === '' || 
                    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    story.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map(story => (
                    <StoryCard key={story.id} story={story} />
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Discover;
