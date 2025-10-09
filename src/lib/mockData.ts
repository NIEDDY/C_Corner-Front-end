export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: 'new' | 'sale' | 'hot';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'printing',
    name: 'Printing Services',
    description: 'Professional printing solutions for all your needs',
    image: 'https://images.unsplash.com/photo-1701522169900-b0bdf455630d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5OTEzNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'Printer'
  },
  {
    id: 'office',
    name: 'Office Supplies',
    description: 'Quality stationery and office essentials',
    image: 'https://images.unsplash.com/photo-1705682644779-ba6b02ae3fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGRlc2t8ZW58MXx8fHwxNzU5OTA5NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'Package'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Computers, printers, cameras and more',
    image: 'https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc1OTg4ODU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'Laptop'
  },
  {
    id: 'branding',
    name: 'Branding Materials',
    description: 'Custom branding solutions for your business',
    image: 'https://images.unsplash.com/photo-1758539197206-f66723e880a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1OTkxMzc0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'Palette'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'HP LaserJet Pro Printer',
    price: 450000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHByaW50ZXJ8ZW58MXx8fHwxNzU5OTA5NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    rating: 4.8,
    reviews: 124,
    description: 'High-speed laser printer perfect for office use with excellent print quality and reliability.',
    features: ['Print speed: 40 ppm', 'Wireless connectivity', 'Duplex printing', 'Energy efficient'],
    inStock: true,
    badge: 'sale'
  },
  {
    id: '2',
    name: 'Dell XPS 15 Laptop',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTk4NDQ4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    rating: 4.9,
    reviews: 256,
    description: 'Powerful laptop for professionals with stunning display and excellent performance.',
    features: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" 4K Display'],
    inStock: true,
    badge: 'hot'
  },
  {
    id: '3',
    name: 'Professional DSLR Camera',
    price: 1200000,
    originalPrice: 1350000,
    image: 'https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmF8ZW58MXx8fHwxNzU5ODM2OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    rating: 4.7,
    reviews: 89,
    description: 'Capture stunning photos with this professional-grade DSLR camera.',
    features: ['24MP sensor', '4K video', 'WiFi enabled', 'Weather sealed'],
    inStock: true,
    badge: 'sale'
  },
  {
    id: '4',
    name: 'Business Card Printing',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
    category: 'printing',
    rating: 4.9,
    reviews: 342,
    description: 'Premium business card printing service with various finishes available.',
    features: ['Multiple finishes', 'Fast turnaround', 'Custom designs', 'Premium cardstock'],
    inStock: true,
    badge: 'new'
  },
  {
    id: '5',
    name: 'Office Desk Organizer Set',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
    category: 'office',
    rating: 4.6,
    reviews: 78,
    description: 'Complete desk organization solution with multiple compartments.',
    features: ['Multiple compartments', 'Durable material', 'Modern design', 'Easy assembly'],
    inStock: true
  },
  {
    id: '6',
    name: 'Banner Printing Service',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
    category: 'printing',
    rating: 4.8,
    reviews: 156,
    description: 'Large format banner printing for events and advertising.',
    features: ['Weather resistant', 'Vibrant colors', 'Various sizes', 'Quick production'],
    inStock: true,
    badge: 'hot'
  },
  {
    id: '7',
    name: 'Branded T-Shirt Printing',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'branding',
    rating: 4.7,
    reviews: 234,
    description: 'Custom t-shirt printing for corporate events and branding.',
    features: ['DTG printing', 'Various colors', 'Bulk discounts', 'Quality fabric'],
    inStock: true
  },
  {
    id: '8',
    name: 'Premium Notebooks Pack',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400',
    category: 'office',
    rating: 4.5,
    reviews: 92,
    description: 'Set of 5 premium quality hardcover notebooks.',
    features: ['Hardcover', '200 pages each', 'Ruled paper', 'Ribbon bookmark'],
    inStock: true,
    badge: 'new'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Jean Claude Mugabo',
    company: 'Tech Solutions Rwanda',
    content: 'Creative Corner provided exceptional printing services for our company branding. Professional and timely delivery!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: '2',
    name: 'Grace Uwase',
    company: 'Kigali Designs',
    content: 'Best place for office supplies in Kigali. Great prices and excellent customer service.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: '3',
    name: 'Patrick Niyonsenga',
    company: 'StartUp Hub',
    content: 'Purchased laptops and printers from Creative Corner. Quality products with competitive pricing.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
  }
];

export const banners = [
  {
    id: '1',
    title: 'Transform Your Business',
    subtitle: 'Premium printing services, cutting-edge technology, and creative solutions',
    image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5ODUxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'Latest Tech & Electronics',
    subtitle: 'Discover premium computers, printers, and cameras for your business',
    image: 'https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc1OTg4ODU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore Tech'
  },
  {
    id: '3',
    title: 'Elevate Your Brand',
    subtitle: 'Custom branding and creative design solutions that make an impact',
    image: 'https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1556727414/1556727413.jpg',
    cta: 'Get Started'
  }
];
