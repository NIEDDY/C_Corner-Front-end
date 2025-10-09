import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Product } from '../lib/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewProduct }: ProductCardProps) {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border-0 rounded-2xl">
      <div className="relative overflow-hidden aspect-square bg-muted/30">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <Badge
              className={`${
                product.badge === 'sale' ? 'bg-red-500 hover:bg-red-600' :
                product.badge === 'new' ? 'bg-green-500 hover:bg-green-600' :
                'bg-secondary hover:bg-secondary/90'
              } shadow-lg`}
            >
              {product.badge.toUpperCase()}
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge className="bg-secondary hover:bg-secondary/90 shadow-lg">
              -{discountPercent}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={() => onViewProduct(product)}
            className="rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            className="w-full bg-primary hover:bg-primary/90 shadow-lg rounded-xl"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{product.category}</p>
        <h3 className="mb-2 line-clamp-2 flex-1 hover:text-primary transition-colors cursor-pointer" onClick={() => onViewProduct(product)}>
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-primary">
            {product.price.toLocaleString()} RWF
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString()} RWF
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
