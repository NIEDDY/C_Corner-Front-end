import { Card } from './ui/card';
import { Category } from '../lib/mockData';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="mb-2 text-white group-hover:mb-3 transition-all">{category.name}</h3>
          <p className="text-sm text-gray-200 mb-4 opacity-90">{category.description}</p>
          <div className="inline-flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-secondary group-hover:gap-3 transition-all">
            <span>Explore Now</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Card>
  );
}
