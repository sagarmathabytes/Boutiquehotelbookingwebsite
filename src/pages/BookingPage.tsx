import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { ArrowLeft, Check } from 'lucide-react';

export function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id === id);
  
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  const selectedRoomDetails = hotel.rooms.find(r => r.id === selectedRoom);
  
  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-sand/30">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-forest" />
            </div>
            <h2 className="text-charcoal mb-4">Request Sent</h2>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Your booking request has been sent directly to {hotel.name}. They will respond within 24 hours to confirm availability and provide payment details.
            </p>
            <div className="space-y-3 mb-8 p-6 bg-sand/30 rounded-lg text-left">
              <div className="flex justify-between">
                <span className="text-sm text-charcoal-light">Hotel</span>
                <span className="text-sm text-charcoal">{hotel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-charcoal-light">Room</span>
                <span className="text-sm text-charcoal">{selectedRoomDetails?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-charcoal-light">Confirmation sent to</span>
                <span className="text-sm text-charcoal">{formData.email}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/search')}
              className="px-8 py-3 bg-forest text-stone rounded-lg hover:bg-forest-dark transition-colors"
            >
              Browse More Hotels
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20 bg-sand/30">
      {/* Back Button */}
      <div className="bg-white border-b border-charcoal/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(`/hotel/${id}`)}
            className="flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to hotel</span>
          </button>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-forest text-stone' : 'bg-white border border-charcoal/20 text-charcoal-light'
              }`}>
                1
              </div>
              <span className="text-sm text-charcoal">Select Room</span>
            </div>
            
            <div className="w-12 h-px bg-charcoal/20" />
            
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-forest text-stone' : 'bg-white border border-charcoal/20 text-charcoal-light'
              }`}>
                2
              </div>
              <span className="text-sm text-charcoal">Guest Details</span>
            </div>
            
            <div className="w-12 h-px bg-charcoal/20" />
            
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-forest text-stone' : 'bg-white border border-charcoal/20 text-charcoal-light'
              }`}>
                3
              </div>
              <span className="text-sm text-charcoal">Confirm</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-charcoal mb-8">Book {hotel.name}</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Room */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-charcoal mb-4">Select Your Room</h4>
                {hotel.rooms.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => {
                      setSelectedRoom(room.id);
                      setStep(2);
                    }}
                    disabled={!room.available}
                    className={`w-full p-6 border rounded-lg text-left transition-all ${
                      room.available
                        ? 'border-charcoal/20 hover:border-forest hover:bg-forest/5'
                        : 'border-charcoal/10 bg-charcoal/5 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="text-charcoal mb-1">{room.name}</h5>
                        <p className="text-sm text-charcoal-light">{room.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-charcoal font-serif">${room.pricePerNight}</div>
                        <div className="text-sm text-charcoal-light">per night</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 4).map((amenity, index) => (
                        <span 
                          key={index}
                          className="text-xs px-3 py-1 bg-sand/50 text-charcoal-light rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {/* Step 2: Guest Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h4 className="text-charcoal mb-4">Guest Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-charcoal">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-charcoal">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-charcoal">Check-in</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-charcoal">Check-out</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-charcoal">Special Requests (Optional)</label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:border-forest resize-none"
                    placeholder="Any specific requirements or preferences..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 border border-charcoal/20 text-charcoal rounded-lg hover:bg-sand/30 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 px-6 py-3 bg-forest text-stone rounded-lg hover:bg-forest-dark transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="space-y-6">
                <h4 className="text-charcoal mb-4">Confirm Your Booking</h4>
                
                <div className="p-6 bg-sand/30 rounded-lg space-y-4">
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Hotel</span>
                    <span className="text-sm text-charcoal">{hotel.name}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Room</span>
                    <span className="text-sm text-charcoal">{selectedRoomDetails?.name}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Guest</span>
                    <span className="text-sm text-charcoal">{formData.firstName} {formData.lastName}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Check-in</span>
                    <span className="text-sm text-charcoal">{formData.checkIn}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Check-out</span>
                    <span className="text-sm text-charcoal">{formData.checkOut}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b border-charcoal/10">
                    <span className="text-sm text-charcoal-light">Guests</span>
                    <span className="text-sm text-charcoal">{formData.guests}</span>
                  </div>
                  
                  <div className="flex justify-between pt-3">
                    <span className="text-charcoal">Rate per night</span>
                    <span className="text-2xl text-charcoal font-serif">${selectedRoomDetails?.pricePerNight}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-sky-light/20 rounded-lg border border-sky/30">
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    <strong className="text-charcoal">Direct booking:</strong> Your request will be sent directly to the hotel. 
                    They will confirm availability and provide payment details. No commissions. No hidden fees. 
                    No inflated rates.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 px-6 py-3 border border-charcoal/20 text-charcoal rounded-lg hover:bg-sand/30 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-forest text-stone rounded-lg hover:bg-forest-dark transition-colors"
                  >
                    Send Booking Request
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
