
import React, { useState } from 'react';
import { stories } from '../data/stories';
import StoryCard from './StoryCard';
import { cn } from '@/lib/utils';

const StoryFeed = () => {
  const [activeTab, setActiveTab] = useState('para-ti');
  
  return (
    <div className="max-w-screen-lg mx-auto pb-20">
      {/* Tabs de navegación estilo TikTok */}
      <div className="sticky top-0 z-10 bg-tiktales-dark px-4 pt-2 pb-3 border-b border-tiktales-dark-gray">
        <div className="flex justify-center space-x-12">
          <button 
            onClick={() => setActiveTab('para-ti')}
            className={cn(
              "text-base font-semibold relative px-2",
              activeTab === 'para-ti' ? "text-white" : "text-gray-400"
            )}
          >
            Para ti
            {activeTab === 'para-ti' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tiktales-pink mt-1"></span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('siguiendo')}
            className={cn(
              "text-base font-semibold relative px-2",
              activeTab === 'siguiendo' ? "text-white" : "text-gray-400"
            )}
          >
            Siguiendo
            {activeTab === 'siguiendo' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tiktales-pink mt-1"></span>
            )}
          </button>
        </div>
      </div>

      {/* Feed de historias al estilo TikTok */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">
        {stories.map((story) => (
          <StoryCard 
            key={story.id} 
            story={story} 
            className="hover:translate-y-[-5px]"
          />
        ))}
      </div>
    </div>
  );
};

export default StoryFeed;
