import { useState } from 'react';
import { Calendar, DollarSign, MessageCircle, TrendingUp } from 'lucide-react';

export function PartnerPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'dashboard'>('overview');
  
  // Mock dashboard data
  const [bookingRequests] = useState([
    { id: 1, guest: 'Sarah Johnson', checkIn: '2025-01-15', checkOut: '2025-01-18', room: 'Heritage Room', status: 'pending' },
    { id: 2, guest: 'Michael Chen', checkIn: '2025-01-20', checkOut: '2025-01-23', room: 'Courtyard Suite', status: 'confirmed' },
    { id: 3, guest: 'Emma Wilson', checkIn: '2025-01-25', checkOut: '2025-01-28', room: 'Heritage Room', status: 'pending' },
  ]);
  
  return (
    <div className="min-h-screen pt-20">
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-forest text-forest'
                  : 'border-transparent text-charcoal-light hover:text-charcoal'
              }`}
            >
              Partnership Overview
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-forest text-forest'
                  : 'border-transparent text-charcoal-light hover:text-charcoal'
              }`}
            >
              Partner Dashboard Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Hero */}
          <section className="py-24 bg-forest-dark text-stone">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-stone mb-6">Partner With Us</h1>
              <p className="text-stone/90 text-lg leading-relaxed">
                Join a curated collection of Nepal's finest boutique hotels. Better guests, direct bookings, fair terms.
              </p>
            </div>
          </section>
          
          {/* Why Partner */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h2 className="text-charcoal mb-16 text-center">Why Partner With Nepal Boutique</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-charcoal mb-3">Better Economics</h4>
                  <p className="text-charcoal-light leading-relaxed">
                    No commissions on bookings. No inflated OTA fees. Keep more revenue while offering guests better rates. 
                    We facilitate direct relationships between you and your guests.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-charcoal mb-3">Quality Over Volume</h4>
                  <p className="text-charcoal-light leading-relaxed">
                    We attract international travelers who value what boutique hotels offer. These guests appreciate quality, 
                    respect your property, and understand the value of direct booking.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-charcoal mb-3">Simple Partnership</h4>
                  <p className="text-charcoal-light leading-relaxed">
                    No complex contracts or hidden terms. Update your availability and rates through a clean, simple dashboard. 
                    Respond to booking requests directly. No bureaucracy.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-charcoal mb-3">You Control Everything</h4>
                  <p className="text-charcoal-light leading-relaxed">
                    Set your own rates. Manage your own availability. Accept or decline bookings as you see fit. 
                    We facilitate connections; you maintain full control of your property.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Requirements */}
          <section className="py-20 bg-sand/30">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h3 className="text-charcoal mb-8 text-center">Partnership Requirements</h3>
              <p className="text-charcoal-light text-center mb-12 leading-relaxed">
                To maintain the integrity of our collection, every partner hotel must meet and maintain these standards:
              </p>
              
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-charcoal/10">
                  <h5 className="text-charcoal mb-2">Verified Comfort Standards</h5>
                  <p className="text-sm text-charcoal-light">
                    Reliable hot water, clean bedding, spotless bathrooms, and accurate photos. We verify these through 
                    in-person visits.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-charcoal/10">
                  <h5 className="text-charcoal mb-2">Responsive Management</h5>
                  <p className="text-sm text-charcoal-light">
                    Respond to booking inquiries within 24 hours. Address guest concerns promptly. Maintain professional 
                    communication standards.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-charcoal/10">
                  <h5 className="text-charcoal mb-2">Fair Direct Pricing</h5>
                  <p className="text-sm text-charcoal-light">
                    Offer direct rates that meet or beat OTA platforms. No inflated base prices to create fake discounts. 
                    Transparent, fair pricing.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-charcoal/10">
                  <h5 className="text-charcoal mb-2">Honest Representation</h5>
                  <p className="text-sm text-charcoal-light">
                    Photos and descriptions must accurately represent your property. No misleading imagery or exaggerated claims.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-charcoal/10">
                  <h5 className="text-charcoal mb-2">Boutique Character</h5>
                  <p className="text-sm text-charcoal-light">
                    Typically 3-20 rooms. Personally managed with attention to detail. Distinctive character and thoughtful design. 
                    Not a chain or mass-market property.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* How It Works */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h3 className="text-charcoal mb-12 text-center">How Partnership Works</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest text-stone rounded-full flex items-center justify-center font-serif">
                    1
                  </div>
                  <div>
                    <h5 className="text-charcoal mb-2">Application & Review</h5>
                    <p className="text-charcoal-light leading-relaxed">
                      Submit your hotel details. We review your property information, photos, and initial responses to our questions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest text-stone rounded-full flex items-center justify-center font-serif">
                    2
                  </div>
                  <div>
                    <h5 className="text-charcoal mb-2">In-Person Visit</h5>
                    <p className="text-charcoal-light leading-relaxed">
                      If initial review is positive, we schedule an in-person visit. We inspect facilities, test amenities, 
                      and verify all standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest text-stone rounded-full flex items-center justify-center font-serif">
                    3
                  </div>
                  <div>
                    <h5 className="text-charcoal mb-2">Listing Creation</h5>
                    <p className="text-charcoal-light leading-relaxed">
                      Once approved, we create your listing with professional photography and editorial descriptions. 
                      You review and approve before going live.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest text-stone rounded-full flex items-center justify-center font-serif">
                    4
                  </div>
                  <div>
                    <h5 className="text-charcoal mb-2">Direct Bookings</h5>
                    <p className="text-charcoal-light leading-relaxed">
                      Receive booking requests through your dashboard. Respond directly to guests. Manage your availability 
                      and rates as needed. No commissions, no middleman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="py-20 bg-forest text-stone">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h3 className="text-stone mb-6">Ready to Join?</h3>
              <p className="text-stone/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                If your boutique hotel meets our standards and you value quality over volume, we'd like to hear from you.
              </p>
              <a 
                href="mailto:partners@nepalboutique.com" 
                className="inline-block px-8 py-3 bg-stone text-forest rounded-lg hover:bg-stone/90 transition-colors"
              >
                Contact Us About Partnership
              </a>
            </div>
          </section>
        </>
      )}
      
      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <section className="py-12 bg-sand/30 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-charcoal mb-2">Partner Dashboard</h2>
              <p className="text-charcoal-light">Manage your property, availability, and booking requests</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-charcoal-light mb-1">Pending Requests</div>
                <div className="text-3xl text-charcoal font-serif">2</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-charcoal-light mb-1">This Month</div>
                <div className="text-3xl text-charcoal font-serif">8</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-charcoal-light mb-1">Occupancy Rate</div>
                <div className="text-3xl text-charcoal font-serif">72%</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-charcoal-light mb-1">Avg. Response Time</div>
                <div className="text-3xl text-charcoal font-serif">2.3h</div>
              </div>
            </div>
            
            {/* Booking Requests */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-charcoal/10">
                <h4 className="text-charcoal">Booking Requests</h4>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-sand/30">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Guest</th>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Check-in</th>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Check-out</th>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Room</th>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Status</th>
                      <th className="text-left px-6 py-3 text-sm text-charcoal-light">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingRequests.map((request) => (
                      <tr key={request.id} className="border-t border-charcoal/10">
                        <td className="px-6 py-4 text-sm text-charcoal">{request.guest}</td>
                        <td className="px-6 py-4 text-sm text-charcoal-light">{request.checkIn}</td>
                        <td className="px-6 py-4 text-sm text-charcoal-light">{request.checkOut}</td>
                        <td className="px-6 py-4 text-sm text-charcoal-light">{request.room}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                            request.status === 'pending'
                              ? 'bg-sky-light/30 text-sky-dark'
                              : 'bg-forest/10 text-forest'
                          }`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {request.status === 'pending' ? (
                            <div className="flex gap-2">
                              <button className="text-sm text-forest hover:text-forest-dark">
                                Accept
                              </button>
                              <button className="text-sm text-charcoal-light hover:text-charcoal">
                                Decline
                              </button>
                            </div>
                          ) : (
                            <button className="text-sm text-charcoal-light hover:text-charcoal">
                              View
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <button className="p-6 bg-white rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                <h5 className="text-charcoal mb-2">Update Availability</h5>
                <p className="text-sm text-charcoal-light">Manage room availability and blackout dates</p>
              </button>
              
              <button className="p-6 bg-white rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                <h5 className="text-charcoal mb-2">Update Pricing</h5>
                <p className="text-sm text-charcoal-light">Adjust room rates and seasonal pricing</p>
              </button>
              
              <button className="p-6 bg-white rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                <h5 className="text-charcoal mb-2">View Messages</h5>
                <p className="text-sm text-charcoal-light">Respond to guest inquiries</p>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
