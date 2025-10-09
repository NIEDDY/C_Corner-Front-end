import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">CC</span>
              </div>
              <div>
                <h3 className="text-white">Creative Corner</h3>
                <p className="text-xs text-gray-400">Rwanda's Premier Tech Hub</p>
              </div>
            </div>
            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              Your trusted partner for printing services, office supplies, electronics, and branding solutions in Rwanda.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white mb-6">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Printing Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Office Supplies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Computers & Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Printers & Scanners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Cameras & Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                  Branding Materials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">KN 4 Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400">+250 788 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400">info@creativecorner.rw</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-white"
              />
              <Button size="icon" className="bg-secondary hover:bg-secondary/90 rounded-lg">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Creative Corner Rwanda. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
