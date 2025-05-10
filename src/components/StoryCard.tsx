
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { type Story } from '../data/stories';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
  fullHeight?: boolean;
  className?: string;
}

const StoryCard = ({ story, fullHeight = false, className }: StoryCardProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  };

  return (
    <Link 
      to={`/story/${story.id}`} 
      className={cn(
        "block rounded-lg overflow-hidden shadow-lg bg-tiktales-dark-gray transition-all hover-scale",
        fullHeight ? "h-full" : "",
        className
      )}
    >
      <div className="relative w-full pb-[150%]">
        <img 
          src={story.coverImage} 
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{story.title}</h3>
          <div className="flex items-center mt-1">
            <img 
              src={story.author.avatar} 
              alt={story.author.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-xs text-gray-300">{story.author.name}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-1.5 flex items-center">
          <Heart size={14} className="text-tiktales-pink mr-1" />
          <span className="text-xs text-white">{formatNumber(story.likes)}</span>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex flex-wrap gap-2 mb-3">
          {story.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-tiktales-purple bg-opacity-20 text-tiktales-purple px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-300 story-container">{story.description}</p>
      </div>
    </Link>
  );
};

export default StoryCard;
