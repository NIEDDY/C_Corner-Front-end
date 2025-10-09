import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage, CartItem } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LoginModal } from './components/LoginModal';
import { Product } from './lib/mockData';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'checkout' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart from localStorage');
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleNavigate = (page: string, categoryId?: string) => {
    setCurrentPage(page as Page);
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        toast.success(`Updated ${product.name} quantity in cart`);
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`Added ${product.name} to cart`);
        return [...prev, { product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    toast.success('Item removed from cart');
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setCurrentPage('home');
    toast.success('Order placed successfully! Thank you for shopping with us.');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartCount}
        onLoginClick={() => setShowLoginModal(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            selectedCategory={selectedCategory}
            onAddToCart={handleAddToCart}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={() => setCurrentPage('products')}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage
            cartItems={cartItems}
            onNavigate={handleNavigate}
            onOrderComplete={handleOrderComplete}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      <Toaster position="bottom-right" richColors />
    </div>
  );
}
