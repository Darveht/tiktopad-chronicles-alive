
import React from 'react';
import { stories } from '../data/stories';
import StoryCard from './StoryCard';

const StoryFeed = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryFeed;
