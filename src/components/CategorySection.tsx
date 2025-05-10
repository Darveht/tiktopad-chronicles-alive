
import React from 'react';
import { Story } from '../data/stories';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  stories: Story[];
}

const CategorySection = ({ title, stories }: CategorySectionProps) => {
  if (stories.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <Link to="/discover" className="text-tiktales-pink flex items-center text-sm">
          Ver más <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stories.map((story) => (
          <Link to={`/story/${story.id}`} key={story.id} className="block">
            <div className="relative rounded-lg overflow-hidden aspect-[2/3] mb-2 instagram-card-shadow">
              <img 
                src={story.coverImage} 
                alt={story.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-white text-sm font-medium line-clamp-2">{story.title}</h3>
              </div>
            </div>
            <div className="flex items-center">
              <img 
                src={story.author.avatar} 
                alt={story.author.name} 
                className="w-5 h-5 rounded-full mr-2"
              />
              <p className="text-gray-300 text-xs truncate">{story.author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
