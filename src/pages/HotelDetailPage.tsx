import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { StandardIcon } from '../components/StandardIcon';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useState } from 'react';

export function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!hotel) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-charcoal mb-2">Hotel not found</h3>
          <button 
            onClick={() => navigate('/search')}
            className="text-forest hover:text-forest-dark"
          >
            Return to search
          </button>
        </div>
      </div>
    );
  }
  
  const savings = hotel.bookingComPrice - hotel.pricePerNight;
  
  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/search')}
            className="flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to search</span>
          </button>
        </div>
      </div>
      
      {/* Image Gallery */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2 aspect-[16/10] rounded-lg overflow-hidden">
              <img 
                src={hotel.images[selectedImage]} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {hotel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-forest' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${hotel.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Hotel Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-charcoal mb-2">{hotel.name}</h1>
                <div className="flex items-center gap-2 text-charcoal-light">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>
              </div>
              
              {/* Editorial Note */}
              <div className="mb-12 p-6 bg-sand/30 rounded-lg border-l-4 border-forest">
                <h5 className="text-charcoal mb-3">Our Take</h5>
                <p className="text-charcoal-light leading-relaxed italic">
                  {hotel.editorialNote}
                </p>
              </div>
              
              {/* Overview */}
              <div className="mb-12">
                <h4 className="text-charcoal mb-4">Overview</h4>
                <p className="text-charcoal-light leading-relaxed">
                  {hotel.description}
                </p>
              </div>
              
              {/* Verified Standards */}
              <div className="mb-12">
                <h4 className="text-charcoal mb-6">Verified Comfort Standards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <StandardIcon type="warmWater" label="Warm water guaranteed" />
                  <StandardIcon type="cleanBedding" label="Clean bedding standard" />
                  <StandardIcon type="responsiveManagement" label="Responsive management" />
                  <StandardIcon type="accuratePhotos" label="Accurate photos" />
                  <StandardIcon type="fairPricing" label="Fair pricing policy" />
                  <StandardIcon type="verified" label="Personally reviewed" />
                </div>
              </div>
              
              {/* Guest Notes */}
              <div className="mb-12">
                <h4 className="text-charcoal mb-6">Honest Guest Notes</h4>
                <div className="space-y-3">
                  {hotel.guestNotes.map((note, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-forest rounded-full mt-2" />
                      <p className="text-charcoal-light leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rooms */}
              <div>
                <h4 className="text-charcoal mb-6">Rooms & Rates</h4>
                <div className="space-y-4">
                  {hotel.rooms.map((room) => (
                    <div key={room.id} className="p-6 border border-charcoal/10 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h5 className="text-charcoal mb-1">{room.name}</h5>
                          <p className="text-sm text-charcoal-light">{room.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl text-charcoal font-serif">${room.pricePerNight}</div>
                          <div className="text-sm text-charcoal-light">per night</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.map((amenity, index) => (
                          <span 
                            key={index}
                            className="text-xs px-3 py-1 bg-sand/50 text-charcoal-light rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      {room.available ? (
                        <span className="text-sm text-forest">Available</span>
                      ) : (
                        <span className="text-sm text-charcoal-light">Currently unavailable</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-sand/30 rounded-lg border border-charcoal/10">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl text-charcoal font-serif">${hotel.pricePerNight}</span>
                    <span className="text-sm text-charcoal-light">per night</span>
                  </div>
                  {savings > 0 && (
                    <div className="inline-block px-3 py-1 bg-forest/10 text-forest text-sm rounded">
                      ${savings} less than Booking.com
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => navigate(`/booking/${hotel.id}`)}
                  disabled={!hotel.available}
                  className={`w-full py-3 px-6 rounded-lg transition-colors mb-4 ${
                    hotel.available
                      ? 'bg-forest text-stone hover:bg-forest-dark'
                      : 'bg-charcoal/20 text-charcoal-light cursor-not-allowed'
                  }`}
                >
                  {hotel.available ? 'Request to Book' : 'Currently Unavailable'}
                </button>
                
                <div className="text-center">
                  <p className="text-xs text-charcoal-light">
                    Direct booking with hotel<br />
                    No hidden fees or commissions
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-charcoal/10">
                  <h5 className="text-charcoal mb-3">Location</h5>
                  <p className="text-sm text-charcoal-light mb-4">{hotel.location}</p>
                  <div className="aspect-video bg-sand rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-sand flex items-center justify-center">
                      <span className="text-sm text-charcoal-light">Map View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
