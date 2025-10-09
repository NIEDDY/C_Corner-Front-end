import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Star, ShoppingCart, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { Product, products } from '../lib/mockData';
import { ProductCard } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBack: () => void;
  onViewProduct: (product: Product) => void;
}

export function ProductDetailPage({ product, onAddToCart, onBack, onViewProduct }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="mb-4 aspect-square overflow-hidden rounded-lg border border-border">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex gap-2 mb-4">
            {product.badge && (
              <Badge
                className={`${
                  product.badge === 'sale' ? 'bg-red-500' :
                  product.badge === 'new' ? 'bg-green-500' :
                  'bg-secondary'
                }`}
              >
                {product.badge.toUpperCase()}
              </Badge>
            )}
            {product.inStock ? (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Check className="h-3 w-3 mr-1" />
                In Stock
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                Out of Stock
              </Badge>
            )}
          </div>

          <h1 className="mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl text-primary">
                {product.price.toLocaleString()} RWF
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString()} RWF
                  </span>
                  <Badge className="bg-secondary">
                    Save {discountPercent}%
                  </Badge>
                </>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <Label className="mb-2 block">Quantity</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 mb-4"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>

          {/* Features */}
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-6">
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </TabsContent>
        <TabsContent value="specs" className="py-6">
          <div className="space-y-2">
            {product.features.map((feature, index) => (
              <div key={index} className="flex py-2 border-b border-border">
                <span className="w-1/3 text-muted-foreground">Feature {index + 1}</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-6">
          <p className="text-muted-foreground">Customer reviews will be displayed here.</p>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(p) => onAddToCart(p, 1)}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}
