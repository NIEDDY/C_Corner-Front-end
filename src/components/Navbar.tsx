import { ShoppingCart, Search, Menu, User, Phone, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onLoginClick: () => void;
}

export function Navbar({ currentPage, onNavigate, cartCount, onLoginClick }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">+250 788 123 456</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>info@creativecorner.rw</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Free Delivery in Kigali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-2xl">CC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-primary">Creative Corner</h1>
                <p className="text-xs text-muted-foreground -mt-1">Rwanda's Premier Tech Hub</p>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products, brands, and more..."
                  className="pl-12 pr-4 h-12 bg-muted/50 border-0 rounded-full focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 mr-6">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentPage === link.page 
                      ? 'text-primary bg-primary/5' 
                      : 'text-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden hover:bg-muted/50 rounded-lg"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onLoginClick}
                className="hidden sm:flex hover:bg-muted/50 rounded-lg"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex hover:bg-muted/50 rounded-lg"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate('cart')}
                className="relative hover:bg-muted/50 rounded-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 min-w-5 px-1 flex items-center justify-center bg-secondary border-2 border-white">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-muted/50 rounded-lg"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-3 bg-muted/30 border-b border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-12 h-11 bg-white rounded-full border-border"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
}
