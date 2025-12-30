import { useState } from 'react';
import { HotelCard } from '../components/HotelCard';
import { SearchBar } from '../components/SearchBar';
import { hotels } from '../data/hotels';
import { SlidersHorizontal } from 'lucide-react';

export function SearchPage() {
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="min-h-screen pt-20">
      {/* Search Header */}
      <section className="bg-forest-dark text-stone py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-stone mb-8">Find Your Stay</h2>
          <SearchBar variant="compact" />
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-charcoal/10">
            <div>
              <h4 className="text-charcoal mb-1">{hotels.length} Hotels</h4>
              <p className="text-sm text-charcoal-light">Curated boutique properties across Nepal</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-charcoal/20 rounded-lg hover:border-forest transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-sm">Filters</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-forest transition-colors bg-white"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="location">Location</option>
              </select>
            </div>
          </div>
          
          {/* Filters Panel (if shown) */}
          {showFilters && (
            <div className="mb-8 p-6 bg-sand/30 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Region</label>
                  <select className="w-full px-4 py-2 border border-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-forest bg-white">
                    <option value="">All Regions</option>
                    <option value="kathmandu">Kathmandu Valley</option>
                    <option value="pokhara">Pokhara</option>
                    <option value="chitwan">Chitwan</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Price Range</label>
                  <select className="w-full px-4 py-2 border border-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-forest bg-white">
                    <option value="">Any Price</option>
                    <option value="0-75">Under $75</option>
                    <option value="75-125">$75 - $125</option>
                    <option value="125+">$125+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Availability</label>
                  <select className="w-full px-4 py-2 border border-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-forest bg-white">
                    <option value="all">All Hotels</option>
                    <option value="available">Available Only</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {/* Hotel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Editorial Note */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h4 className="text-charcoal mb-4">Every Hotel is Vetted</h4>
          <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            These aren't paid listings. They're hotels we've personally visited, tested, and determined meet our standards for international travelers. If we wouldn't stay there ourselves, we don't list it.
          </p>
        </div>
      </section>
    </div>
  );
}
