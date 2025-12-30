import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
}

export function SearchBar({ variant = 'hero' }: SearchBarProps) {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };
  
  const isHero = variant === 'hero';
  
  return (
    <form onSubmit={handleSearch} className={`bg-white rounded-xl shadow-lg ${isHero ? 'p-3' : 'p-2'}`}>
      <div className={`grid ${isHero ? 'grid-cols-1 md:grid-cols-4 gap-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'}`}>
        {/* Location */}
        <div className="relative">
          <label className="block text-xs text-charcoal-light mb-1 px-4">Location</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:border-forest transition-colors bg-white"
            >
              <option value="">All of Nepal</option>
              <option value="kathmandu">Kathmandu Valley</option>
              <option value="pokhara">Pokhara</option>
              <option value="chitwan">Chitwan</option>
              <option value="nagarkot">Nagarkot</option>
            </select>
          </div>
        </div>
        
        {/* Check-in */}
        <div className="relative">
          <label className="block text-xs text-charcoal-light mb-1 px-4">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light pointer-events-none" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:border-forest transition-colors"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        {/* Check-out */}
        <div className="relative">
          <label className="block text-xs text-charcoal-light mb-1 px-4">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light pointer-events-none" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:border-forest transition-colors"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        {/* Guests */}
        <div className="relative">
          <label className="block text-xs text-charcoal-light mb-1 px-4">Guests</label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:border-forest transition-colors bg-white"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Search Button */}
      <button
        type="submit"
        className="w-full mt-3 bg-forest text-stone py-3 px-6 rounded-lg hover:bg-forest-dark transition-colors"
      >
        Search Hotels
      </button>
    </form>
  );
}
