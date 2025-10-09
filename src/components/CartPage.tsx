import { Button } from './ui/button';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Product } from '../lib/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5000 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button onClick={() => onNavigate('products')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        variant="ghost"
        onClick={() => onNavigate('products')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Continue Shopping
      </Button>

      <h1 className="mb-8">Shopping Cart ({cartItems.length} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white border border-border rounded-lg p-4 flex gap-4"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-2">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.product.category}
                </p>
                <p className="text-primary">
                  {item.product.price.toLocaleString()} RWF
                </p>
              </div>

              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveItem(item.product.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-muted p-6 rounded-lg sticky top-24">
            <h3 className="mb-6">Order Summary</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{subtotal.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping.toLocaleString()} RWF</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-primary">{total.toLocaleString()} RWF</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-secondary hover:bg-secondary/90"
              onClick={() => onNavigate('checkout')}
            >
              Proceed to Checkout
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Free shipping on orders over 100,000 RWF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
