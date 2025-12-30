import { StandardIcon } from '../components/StandardIcon';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-forest-dark text-stone">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-stone mb-6">Our Standards</h1>
          <p className="text-stone/90 text-lg leading-relaxed">
            Every hotel in our collection meets verifiable standards. We don't list properties we wouldn't stay at ourselves.
          </p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-charcoal mb-6 text-center">Why This Exists</h3>
          <div className="space-y-4 text-charcoal-light leading-relaxed">
            <p>
              Nepal has wonderful boutique hotels. But finding them through traditional booking platforms is frustrating. 
              Photos are misleading. Reviews are incentivized. Listings are cluttered with properties that shouldn't qualify 
              as "boutique" at all.
            </p>
            <p>
              We created this platform to solve a simple problem: help international travelers find genuinely well-managed 
              boutique hotels in Nepal without the noise, inflated pricing, or unreliable claims of mass-market OTAs.
            </p>
            <p>
              This isn't a marketplace. It's a curation. Every property is personally vetted. Every standard is verified. 
              Every photo is accurate. This is what booking should feel like.
            </p>
          </div>
        </div>
      </section>
      
      {/* Standards Detail */}
      <section className="py-20 bg-sand/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-charcoal mb-16 text-center">What We Verify</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Standard 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="warmWater" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Warm Water Guaranteed</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                We test hot water systems at different times of day. We verify backup systems exist. We confirm water 
                pressure is adequate. "Solar heater" without backup is not acceptable. Warm water should work reliably 
                at 6am and 10pm, not just when convenient.
              </p>
            </div>
            
            {/* Standard 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="cleanBedding" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Clean Bedding & Bathrooms</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Fresh linens that are actually laundered, not just smoothed out. Bathrooms cleaned to international 
                standards. No mold. No stains. No excuses. We check under beds, behind toilets, and inside wardrobes. 
                If it wouldn't pass inspection in Tokyo or Copenhagen, it doesn't pass here.
              </p>
            </div>
            
            {/* Standard 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="responsiveManagement" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Responsive Management</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Owners or managers who respond to messages within hours, not days. Staff who solve problems proactively. 
                Management that's accessible without being intrusive. We test this by sending inquiries at different times 
                and observing how quickly and helpfully they respond.
              </p>
            </div>
            
            {/* Standard 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="accuratePhotos" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Accurate Photos</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                What you see is what you get. No creative angles hiding cramped spaces. No filters making old fixtures 
                look new. No photos of "sister properties" when yours is less impressive. We cross-reference listing 
                photos with what we see in person. Misleading imagery disqualifies a hotel immediately.
              </p>
            </div>
            
            {/* Standard 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="fairPricing" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Fair Pricing Policy</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Direct rates that beat OTA platforms. No inflated "rack rates" designed to make discounts look impressive. 
                No surge pricing during peak season that isn't justified by actual demand. Hotels in our collection agree 
                to offer their best rates through direct bookings.
              </p>
            </div>
            
            {/* Standard 6 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <StandardIcon type="verified" label="" size="lg" />
                </div>
                <h4 className="text-charcoal">Personally Reviewed</h4>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                We visit every property before listing it. We stay overnight whenever possible. We test amenities, 
                observe service quality, and verify claims. We also revisit properties annually to ensure standards 
                haven't slipped. If a hotel no longer meets our criteria, we remove it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We're Not */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-charcoal mb-8 text-center">What We're Not</h3>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-forest bg-sand/20 rounded-r-lg">
              <h5 className="text-charcoal mb-2">Not a Mass Marketplace</h5>
              <p className="text-charcoal-light">
                We don't list every hotel in Nepal. We curate. If a property doesn't meet our standards, it's not here—
                regardless of how much they'd pay for placement.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-forest bg-sand/20 rounded-r-lg">
              <h5 className="text-charcoal mb-2">Not Chasing Volume</h5>
              <p className="text-charcoal-light">
                More listings doesn't mean better service. We'd rather have 20 excellent hotels than 200 mediocre ones. 
                Quality over quantity, always.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-forest bg-sand/20 rounded-r-lg">
              <h5 className="text-charcoal mb-2">Not Incentivizing Reviews</h5>
              <p className="text-charcoal-light">
                We don't offer discounts for 5-star reviews. We don't suppress negative feedback. We don't game ratings. 
                Our guest notes are honest observations, not marketing copy.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-forest bg-sand/20 rounded-r-lg">
              <h5 className="text-charcoal mb-2">Not Hiding Behind Commissions</h5>
              <p className="text-charcoal-light">
                We facilitate direct bookings between guests and hotels. No hidden fees. No inflated prices to cover 
                commission structures. Transparent, fair, straightforward.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Hotels */}
      <section className="py-20 bg-forest text-stone">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-stone mb-6">For Hotel Owners</h3>
          <p className="text-stone/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you run a boutique hotel in Nepal that genuinely meets these standards, we'd like to hear from you. 
            We're selective, but if your property qualifies, joining our collection means direct bookings at better 
            rates and guests who value what you offer.
          </p>
          <a 
            href="/partner" 
            className="inline-block px-8 py-3 bg-stone text-forest rounded-lg hover:bg-stone/90 transition-colors"
          >
            Learn About Partnership
          </a>
        </div>
      </section>
    </div>
  );
}
