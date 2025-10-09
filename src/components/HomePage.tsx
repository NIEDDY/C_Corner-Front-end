import { useState, useEffect } from 'react';
import { CategoryCard } from './CategoryCard';
import { ProductCard } from './ProductCard';
import { Product } from '../lib/mockData';
import { Button } from './ui/button';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Truck, HeadphonesIcon, ShieldCheck, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { categories, products, testimonials, banners } from '../lib/mockData';

interface HomePageProps {
  onNavigate: (page: string, categoryId?: string) => void;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export function HomePage({ onNavigate, onAddToCart, onViewProduct }: HomePageProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const featuredProducts = products.slice(0, 8);

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white animate-in fade-in slide-in-from-left-4 duration-700">
                  <div className="inline-block mb-4 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm">Limited Time Offer</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">{banner.title}</h1>
                  <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">{banner.subtitle}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="bg-secondary hover:bg-secondary/90 hover:scale-105 transition-transform rounded-full px-8 shadow-2xl"
                      onClick={() => onNavigate('products')}
                    >
                      {banner.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8"
                      onClick={() => onNavigate('about')}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Banner Navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Banner Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-12' : 'bg-white/50 w-8 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4>Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">Within Kigali</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4>Secure Payment</h4>
                <p className="text-sm text-muted-foreground">MoMo & Cards</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <HeadphonesIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Always here</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <CheckCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4>Quality Products</h4>
                <p className="text-sm text-muted-foreground">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              Categories
            </span>
            <h2 className="text-5xl mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our wide range of products and services tailored for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => onNavigate('products', category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4">
                Best Sellers
              </span>
              <h2 className="text-5xl mb-2">Featured Products</h2>
              <p className="text-muted-foreground text-lg">
                Check out our best-selling items
              </p>
            </div>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate('products')}
              className="rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => onAddToCart(product)}
                onViewProduct={() => onViewProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDYgMCAzLjMxNC0yLjY4NiA2LTYgNi0zLjMxNCAwLTYtMi42ODYtNi02IDAtMy4zMTQgMi42ODYtNiA2LTZ6TTYgMzRjMy4zMTQgMCA2IDIuNjg2IDYgNiAwIDMuMzE0LTIuNjg2IDYtNiA2LTMuMzE0IDAtNi0yLjY4Ni02LTYgMC0zLjMxNCAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                Custom Solutions
              </span>
              <h2 className="text-5xl mb-6 leading-tight">Get Your Custom Quote Today</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Need custom printing or branding solutions? Our team is ready to help you create something amazing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => onNavigate('contact')}
                  className="rounded-full px-8 shadow-xl hover:scale-105 transition-transform"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate('products')}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8"
                >
                  Browse Products
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1OTgwNTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Custom printing"
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-5xl mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10"
                  />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/90 p-12 lg:p-16 rounded-3xl shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDYgMCAzLjMxNC0yLjY4NiA2LTYgNi0zLjMxNCAwLTYtMi42ODYtNi02IDAtMy4zMTQgMi42ODYtNiA2LTZ6TTYgMzRjMy4zMTQgMCA2IDIuNjg2IDYgNiAwIDMuMzE0LTIuNjg2IDYtNiA2LTMuMzE0IDAtNi0yLjY4Ni02LTYgMC0zLjMxNCAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl mb-4">Stay Updated</h2>
              <p className="text-lg mb-8 opacity-90">
                Subscribe to our newsletter for exclusive deals and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-foreground shadow-lg"
                />
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 rounded-full px-8 shadow-lg hover:scale-105 transition-transform"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}