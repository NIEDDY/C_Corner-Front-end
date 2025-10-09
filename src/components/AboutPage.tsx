import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="mb-4">About Creative Corner</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner for printing services, office supplies, electronics, and branding solutions in Rwanda
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2018, Creative Corner has grown to become Rwanda's leading provider of printing services, 
            office supplies, and technology solutions. We're passionate about empowering businesses and individuals 
            with the tools they need to succeed.
          </p>
          <p className="text-muted-foreground mb-4">
            Based in the heart of Kigali, we serve customers across Rwanda with our comprehensive range of products 
            and services. From small startups to established enterprises, we've helped countless businesses bring 
            their vision to life through quality printing and professional branding.
          </p>
          <p className="text-muted-foreground">
            Our commitment to excellence, combined with competitive pricing and exceptional customer service, 
            has made us the go-to destination for all your creative and office needs.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5ODUxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative Corner Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-primary text-primary-foreground p-8 rounded-lg">
          <h3 className="mb-4 text-white">Our Mission</h3>
          <p className="text-gray-100">
            To provide high-quality printing, office supplies, and technology solutions that help businesses 
            and individuals in Rwanda achieve their goals through innovative and affordable services.
          </p>
        </div>
        <div className="bg-secondary text-secondary-foreground p-8 rounded-lg">
          <h3 className="mb-4 text-white">Our Vision</h3>
          <p className="text-gray-100">
            To be the most trusted and innovative provider of creative and office solutions in East Africa, 
            setting the standard for quality, service, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Printing Services',
              items: ['Business cards', 'Banners & Posters', 'Brochures', 'Large format prints']
            },
            {
              title: 'Office Supplies',
              items: ['Stationery', 'Desk organizers', 'Filing systems', 'Writing instruments']
            },
            {
              title: 'Electronics',
              items: ['Laptops & Computers', 'Printers & Scanners', 'Cameras', 'Accessories']
            },
            {
              title: 'Branding',
              items: ['Logo design', 'Corporate branding', 'Promotional items', 'Branded apparel']
            }
          ].map((service, index) => (
            <div key={index} className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-muted p-12 rounded-lg mb-16">
        <h2 className="mb-8 text-center">Why Choose Creative Corner?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-muted-foreground">
              We use only premium materials and state-of-the-art equipment to ensure the highest quality output.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2">Fast Turnaround</h3>
            <p className="text-sm text-muted-foreground">
              Quick delivery times without compromising on quality. Most orders ready within 24-48 hours.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Our knowledgeable team is ready to help you find the perfect solution for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
        <h2 className="mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-gray-100">
          Visit our store in Kigali or contact us today to discuss your project
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <p className="text-lg">📞 +250 788 123 456</p>
          <p className="text-lg">📧 info@creativecorner.rw</p>
        </div>
      </div>
    </div>
  );
}
