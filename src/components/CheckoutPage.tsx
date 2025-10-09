import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { CartItem } from './CartPage';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onNavigate: (page: string) => void;
  onOrderComplete: () => void;
}

export function CheckoutPage({ cartItems, onNavigate, onOrderComplete }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kigali',
    paymentMethod: 'momo'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 5000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, process payment here
    alert('Order placed successfully! (This is a demo)');
    onOrderComplete();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        variant="ghost"
        onClick={() => onNavigate('cart')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cart
      </Button>

      <h1 className="mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Jean Claude Mugabo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="jean@example.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+250 788 123 456"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">Delivery Address</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="KN 4 Ave, Kigali"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">Payment Method</h3>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange('paymentMethod', value)}
              >
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg mb-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="momo" id="momo" />
                  <Label htmlFor="momo" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <div>
                      <p>Mobile Money (MTN/Airtel)</p>
                      <p className="text-xs text-muted-foreground">
                        Pay with MoMo Pay
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg mb-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p>Credit/Debit Card</p>
                      <p className="text-xs text-muted-foreground">
                        Visa, Mastercard accepted
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                    <div>
                      <p>Cash on Delivery</p>
                      <p className="text-xs text-muted-foreground">
                        Pay when you receive
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
              size="lg"
            >
              Place Order - {total.toLocaleString()} RWF
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-muted p-6 rounded-lg sticky top-24">
            <h3 className="mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm text-primary">
                      {(item.product.price * item.quantity).toLocaleString()} RWF
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{subtotal.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between text-sm">
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
          </div>
        </div>
      </div>
    </div>
  );
}
