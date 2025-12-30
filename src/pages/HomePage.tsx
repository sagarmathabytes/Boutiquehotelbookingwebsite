import { SearchBar } from '../components/SearchBar';
import { StandardIcon } from '../components/StandardIcon';
import { HotelCard } from '../components/HotelCard';
import { hotels } from '../data/hotels';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBOZXBhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjcwNjExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Himalayan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-stone mb-4 text-balance">
            Nepal's Boutique Hotels.<br />Carefully Selected.
          </h1>
          <p className="text-stone/90 text-lg mb-12 max-w-2xl mx-auto">
            Verified comfort standards. Better direct rates. Honest stays.
          </p>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar variant="hero" />
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-stone/80">
            <StandardIcon type="warmWater" label="Verified Warm Water" size="sm" />
            <StandardIcon type="cleanBedding" label="Clean Bedding Standard" size="sm" />
            <StandardIcon type="verified" label="Personally Reviewed" size="sm" />
          </div>
        </div>
      </section>
      
      {/* Curation & Standards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Why These Hotels?</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Every property in our collection meets strict standards. We don't list hotels we wouldn't recommend to friends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Standard 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="warmWater" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Warm Water Guaranteed</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                We verify hot water systems work reliably at all hours. Not "sometimes" or "solar dependent."
              </p>
            </div>
            
            {/* Standard 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="cleanBedding" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Clean Bedding & Bathrooms</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Proper laundering, fresh linens, spotless bathrooms. Standards you'd expect anywhere in the world.
              </p>
            </div>
            
            {/* Standard 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="responsiveManagement" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Responsive Management</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Owners or managers who reply promptly, solve problems quickly, and genuinely care about your stay.
              </p>
            </div>
            
            {/* Standard 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="accuratePhotos" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Accurate Photos</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                What you see is what you get. No "creative angles" or misleading imagery.
              </p>
            </div>
            
            {/* Standard 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="fairPricing" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Fair Pricing Policy</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Direct rates that beat OTA platforms. No inflated "rack rates" to create fake discounts.
              </p>
            </div>
            
            {/* Standard 6 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StandardIcon type="verified" label="" size="lg" />
              </div>
              <h4 className="text-charcoal mb-3">Personally Reviewed</h4>
              <p className="text-sm text-charcoal-light leading-relaxed">
                We visit in person. We stay overnight. We test everything guests would care about.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Hotels Section */}
      <section className="py-24 bg-sand/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Featured Collection</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              A selection of properties we're particularly fond of.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.slice(0, 3).map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/search" 
              className="inline-block px-8 py-3 bg-forest text-stone rounded-lg hover:bg-forest-dark transition-colors"
            >
              View All Hotels
            </a>
          </div>
        </div>
      </section>
      
      {/* Editorial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-charcoal mb-6">Not a Marketplace.<br />A Curation.</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                We're not trying to list every hotel in Nepal. We're building a collection of places that meet genuine standards—properties where international travelers can expect reliability, cleanliness, and honest hospitality.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Every hotel is vetted. Every claim is verified. Every photo is accurate. This is what booking should feel like.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1648031208301-aa38ab57f002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRyYWRpdGlvbmFsJTIwaG90ZWx8ZW58MXx8fHwxNzY3MDYxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Traditional Nepal hotel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
