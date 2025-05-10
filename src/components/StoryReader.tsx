
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories, type Chapter } from '../data/stories';
import { ArrowLeft, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const StoryReader = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const story = stories.find(s => s.id === storyId);
  
  if (!story) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Historia no encontrada</h2>
        <Link to="/" className="text-tiktales-pink hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const currentChapter = story.chapters[currentChapterIndex];

  const handleNextChapter = () => {
    if (currentChapterIndex < story.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="min-h-screen bg-tiktales-dark pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-tiktales-dark-gray border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <Link to={`/story/${story.id}`} className="flex items-center text-white">
            <ArrowLeft size={20} className="mr-2" />
            <span>Volver a detalles</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white"
            onClick={toggleLike}
          >
            <Heart 
              size={20} 
              className={cn(
                "transition-colors",
                liked ? "fill-tiktales-pink text-tiktales-pink" : "text-white"
              )} 
            />
          </Button>
        </div>
      </div>

      {/* Chapter title */}
      <div className="bg-tiktales-dark-gray py-6 px-4 mb-4">
        <h1 className="text-xl font-bold text-white mb-1">{currentChapter.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={story.author.avatar}
              alt={story.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-300">{story.author.name}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <BookOpen size={14} className="mr-1" />
            <span>{currentChapter.readTime} min</span>
          </div>
        </div>
      </div>

      {/* Chapter content */}
      <div className="max-w-prose mx-auto px-4">
        {currentChapter.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-white mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Chapter navigation */}
      <div className="max-w-prose mx-auto px-4 mt-8 mb-16">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousChapter}
            disabled={currentChapterIndex === 0}
            className={cn(
              "border-tiktales-purple text-white",
              currentChapterIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            Capítulo anterior
          </Button>
          <Button
            onClick={handleNextChapter}
            disabled={currentChapterIndex === story.chapters.length - 1}
            className={cn(
              "bg-tiktales-purple hover:bg-tiktales-dark-purple text-white",
              currentChapterIndex === story.chapters.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            Siguiente capítulo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryReader;
