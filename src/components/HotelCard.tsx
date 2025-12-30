import { Link } from 'react-router-dom';
import { Hotel } from '../data/hotels';
import { CheckCircle } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const savings = hotel.bookingComPrice - hotel.pricePerNight;
  
  return (
    <Link 
      to={`/hotel/${hotel.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-sand">
        <img 
          src={hotel.images[0]} 
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h4 className="text-charcoal mb-1 group-hover:text-forest transition-colors">
              {hotel.name}
            </h4>
            <p className="text-sm text-charcoal-light">{hotel.location}</p>
          </div>
          {hotel.available && (
            <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 ml-2" strokeWidth={1.5} />
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-charcoal-light leading-relaxed mb-4 line-clamp-2">
          {hotel.description}
        </p>
        
        {/* Price */}
        <div className="flex items-end justify-between pt-4 border-t border-charcoal/10">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl text-charcoal font-serif">${hotel.pricePerNight}</span>
              <span className="text-sm text-charcoal-light">per night</span>
            </div>
            {savings > 0 && (
              <div className="text-xs text-forest mt-1">
                ${savings} less than Booking.com
              </div>
            )}
          </div>
          
          <div className="text-sm text-forest group-hover:translate-x-1 transition-transform">
            View Hotel →
          </div>
        </div>
      </div>
    </Link>
  );
}
