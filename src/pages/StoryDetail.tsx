
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share, BookOpen } from 'lucide-react';
import { stories } from '../data/stories';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Layout from '../components/Layout';

const StoryDetail = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  
  const story = stories.find(s => s.id === storyId);
  
  if (!story) {
    return (
      <Layout>
        <div className="h-[80vh] flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-bold mb-4">Historia no encontrada</h2>
          <Link to="/" className="text-tiktales-pink hover:underline">
            Volver al inicio
          </Link>
        </div>
      </Layout>
    );
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const startReading = () => {
    navigate(`/read/${story.id}`);
  };

  return (
    <Layout>
      <div className="pb-20">
        {/* Cover image with gradient overlay */}
        <div className="relative h-72 w-full">
          <img 
            src={story.coverImage} 
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tiktales-dark" />
          <div className="absolute top-4 left-4 flex items-center">
            <Link to="/" className="text-white">
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
        
        {/* Story info */}
        <div className="relative px-4 -mt-16">
          <div className="bg-tiktales-dark-gray rounded-xl p-5 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-2">{story.title}</h1>
            
            <div className="flex items-center mb-4">
              <img 
                src={story.author.avatar} 
                alt={story.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-300">{story.author.name}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {story.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-tiktales-purple bg-opacity-20 text-tiktales-purple px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 mb-6">{story.description}</p>
            
            <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Heart size={16} className="mr-1" />
                <span>{formatNumber(story.likes)} likes</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={16} className="mr-1" />
                <span>{formatNumber(story.views)} lecturas</span>
              </div>
              <div className="flex items-center">
                <span>{story.chapters.length} capítulos</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={startReading}
                className="flex-1 bg-tiktales-pink hover:bg-tiktales-light-pink text-white"
              >
                Comenzar a leer
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600"
                onClick={toggleLike}
              >
                <Heart 
                  size={18} 
                  className={cn(
                    "transition-colors",
                    liked ? "fill-tiktales-pink text-tiktales-pink" : "text-white"
                  )} 
                />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-gray-600 text-white"
              >
                <Share size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Chapters list */}
        <div className="px-4 mt-6">
          <h2 className="text-xl font-bold text-white mb-4">Capítulos</h2>
          
          <div className="space-y-3">
            {story.chapters.map((chapter, index) => (
              <Link 
                key={chapter.id}
                to={`/read/${story.id}`}
                state={{ chapterIndex: index }}
                className="block bg-tiktales-dark-gray rounded-lg p-4 hover:bg-tiktales-dark-gray/80 transition-colors"
              >
                <h3 className="text-white font-medium">{chapter.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-400">Capítulo {index + 1}</span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <BookOpen size={12} className="mr-1" />
                    <span>{chapter.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryDetail;
