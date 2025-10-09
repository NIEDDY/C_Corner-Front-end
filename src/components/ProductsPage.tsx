import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Filter } from 'lucide-react';
import { products, categories, Product } from '../lib/mockData';

interface ProductsPageProps {
  selectedCategory?: string;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export function ProductsPage({ selectedCategory, onAddToCart, onViewProduct }: ProductsPageProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    selectedCategory ? [selectedCategory] : []
  );
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // newest - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategories, priceRange, sortBy]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Shop
          </span>
          <h1 className="text-5xl mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our complete collection of products and services
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${
            showFilters ? 'block' : 'hidden'
          } lg:block w-full lg:w-72 flex-shrink-0 space-y-6`}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-0">
              <h3 className="mb-6">Filters</h3>

            {/* Categories */}
            <div className="mb-6">
              <Label className="mb-3 block">Categories</Label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryToggle(category.id)}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm cursor-pointer"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="mb-3 block">
                Price Range: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} RWF
              </Label>
              <Slider
                min={0}
                max={2000000}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
            </div>

            {/* Reset Filters */}
            <Button
              variant="outline"
              className="w-full mt-6 rounded-full hover:bg-destructive hover:text-white hover:border-destructive transition-colors"
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 2000000]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-lg border-0">
            <p className="text-muted-foreground">
              <span className="text-foreground">Showing {filteredProducts.length}</span> products
            </p>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                className="lg:hidden rounded-full border-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px] rounded-full border-2">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewProduct={onViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl shadow-lg">
              <div className="max-w-md mx-auto px-6">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  No products match your current filters. Try adjusting your criteria.
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 2000000]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
