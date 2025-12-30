export interface Hotel {
  id: string;
  name: string;
  location: string;
  region: string;
  description: string;
  editorialNote: string;
  images: string[];
  pricePerNight: number;
  bookingComPrice: number;
  available: boolean;
  standards: {
    warmWater: boolean;
    cleanBedding: boolean;
    responsiveManagement: boolean;
    accuratePhotos: boolean;
    fairPricing: boolean;
  };
  rooms: {
    id: string;
    name: string;
    description: string;
    capacity: number;
    pricePerNight: number;
    amenities: string[];
    available: boolean;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
  guestNotes: string[];
}

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Himalayan Heritage House",
    location: "Thamel, Kathmandu",
    region: "Kathmandu Valley",
    description: "A restored Newari house with contemporary comforts in the heart of Kathmandu. Quiet courtyard, reliable hot water, thoughtful service.",
    editorialNote: "This is not a museum piece pretending to be a hotel. It's a genuinely well-maintained traditional home that happens to host guests exceptionally well. The owner lives on-site, which shows in the details.",
    images: [
      "https://images.unsplash.com/photo-1677818756045-5978b6c827d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBib3V0aXF1ZSUyMGhvdGVsfGVufDF8fHx8MTc2NzA2MTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664360224807-0751368c0c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBOZXBhbHxlbnwxfHx8fDE3NjcwNjExMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1728365743796-ee69341a166d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwTmVwYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwNjExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    pricePerNight: 85,
    bookingComPrice: 110,
    available: true,
    standards: {
      warmWater: true,
      cleanBedding: true,
      responsiveManagement: true,
      accuratePhotos: true,
      fairPricing: true,
    },
    rooms: [
      {
        id: "1-1",
        name: "Heritage Room",
        description: "Traditional carved windows, modern bathroom, mountain views",
        capacity: 2,
        pricePerNight: 85,
        amenities: ["King bed", "En-suite bathroom", "Hot water", "Mountain view", "WiFi"],
        available: true,
      },
      {
        id: "1-2",
        name: "Courtyard Suite",
        description: "Spacious suite overlooking the inner courtyard",
        capacity: 3,
        pricePerNight: 125,
        amenities: ["King bed", "Sofa bed", "Large bathroom", "Courtyard view", "WiFi", "Sitting area"],
        available: true,
      },
    ],
    coordinates: {
      lat: 27.7172,
      lng: 85.3240,
    },
    guestNotes: [
      "Hot water works reliably at all hours",
      "Staff respond to messages within the hour",
      "Breakfast is simple but fresh",
      "Courtyard is genuinely peaceful despite Thamel location",
    ],
  },
  {
    id: "2",
    name: "Lakeside Retreat Pokhara",
    location: "Lakeside, Pokhara",
    region: "Pokhara",
    description: "Calm lakeside property with unobstructed Annapurna views. Modern rooms, consistent service, honest pricing.",
    editorialNote: "No gimmicks here. Clean rooms, helpful staff, and a location that delivers on the promise of lake and mountain views. They don't oversell, which is refreshing.",
    images: [
      "https://images.unsplash.com/photo-1663135628538-c567f6012b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2toYXJhJTIwbGFrZSUyMGhvdGVsfGVufDF8fHx8MTc2NzA2MTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664360224807-0751368c0c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBOZXBhbHxlbnwxfHx8fDE3NjcwNjExMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBOZXBhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjcwNjExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    pricePerNight: 95,
    bookingComPrice: 125,
    available: true,
    standards: {
      warmWater: true,
      cleanBedding: true,
      responsiveManagement: true,
      accuratePhotos: true,
      fairPricing: true,
    },
    rooms: [
      {
        id: "2-1",
        name: "Lake View Room",
        description: "Direct lake views, balcony, spacious bathroom",
        capacity: 2,
        pricePerNight: 95,
        amenities: ["Queen bed", "Private balcony", "Lake view", "Hot water", "WiFi", "Mini fridge"],
        available: true,
      },
      {
        id: "2-2",
        name: "Mountain Panorama Suite",
        description: "Corner suite with 180-degree Annapurna views",
        capacity: 2,
        pricePerNight: 145,
        amenities: ["King bed", "Large balcony", "Mountain view", "Bathtub", "WiFi", "Sitting area"],
        available: false,
      },
    ],
    coordinates: {
      lat: 28.2096,
      lng: 83.9856,
    },
    guestNotes: [
      "Views are exactly as shown in photos",
      "Owner is accessible and helpful with trek planning",
      "Rooms are cleaned daily to a high standard",
      "Good coffee in the morning",
    ],
  },
  {
    id: "3",
    name: "Mountain Garden Lodge",
    location: "Nagarkot",
    region: "Kathmandu Valley",
    description: "Hillside lodge with sunrise Himalayan views. Simple, clean, well-managed. Best for travelers seeking quiet.",
    editorialNote: "This is what a mountain lodge should be: unpretentious, comfortable, and positioned to make the most of the landscape. Management is attentive without being intrusive.",
    images: [
      "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBOZXBhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjcwNjExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1648031208301-aa38ab57f002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRyYWRpdGlvbmFsJTIwaG90ZWx8ZW58MXx8fHwxNzY3MDYxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664360224807-0751368c0c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBOZXBhbHxlbnwxfHx8fDE3NjcwNjExMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    pricePerNight: 70,
    bookingComPrice: 90,
    available: true,
    standards: {
      warmWater: true,
      cleanBedding: true,
      responsiveManagement: true,
      accuratePhotos: true,
      fairPricing: true,
    },
    rooms: [
      {
        id: "3-1",
        name: "Garden Room",
        description: "Ground floor room with garden access",
        capacity: 2,
        pricePerNight: 70,
        amenities: ["Double bed", "Garden view", "Hot water", "WiFi", "Heater"],
        available: true,
      },
      {
        id: "3-2",
        name: "Himalayan View Room",
        description: "Upper floor with sunrise mountain views",
        capacity: 2,
        pricePerNight: 90,
        amenities: ["King bed", "Mountain view", "Private terrace", "Hot water", "WiFi", "Heater"],
        available: true,
      },
    ],
    coordinates: {
      lat: 27.7172,
      lng: 85.5206,
    },
    guestNotes: [
      "Sunrise views are worth the early wake-up",
      "Heating works well in winter months",
      "Staff arrange reliable transport to Kathmandu",
      "Food is home-style and wholesome",
    ],
  },
  {
    id: "4",
    name: "Patan Artisan House",
    location: "Patan Durbar Square, Lalitpur",
    region: "Kathmandu Valley",
    description: "Historic townhouse steps from Patan's artisan workshops. Meticulously restored, culturally immersive, quietly luxurious.",
    editorialNote: "Staying here feels like a privilege. The owners are local historians who've restored this property with genuine care. Every detail tells a story, yet nothing feels precious or overwrought.",
    images: [
      "https://images.unsplash.com/photo-1648031208301-aa38ab57f002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRyYWRpdGlvbmFsJTIwaG90ZWx8ZW58MXx8fHwxNzY3MDYxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1728365743796-ee69341a166d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwTmVwYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwNjExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664360224807-0751368c0c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBOZXBhbHxlbnwxfHx8fDE3NjcwNjExMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    pricePerNight: 110,
    bookingComPrice: 145,
    available: true,
    standards: {
      warmWater: true,
      cleanBedding: true,
      responsiveManagement: true,
      accuratePhotos: true,
      fairPricing: true,
    },
    rooms: [
      {
        id: "4-1",
        name: "Artisan Room",
        description: "Intimate room with traditional woodwork and modern amenities",
        capacity: 2,
        pricePerNight: 110,
        amenities: ["Queen bed", "Traditional architecture", "Modern bathroom", "Hot water", "WiFi", "Handcrafted furniture"],
        available: true,
      },
      {
        id: "4-2",
        name: "Heritage Suite",
        description: "Spacious suite with carved balcony overlooking the square",
        capacity: 2,
        pricePerNight: 160,
        amenities: ["King bed", "Carved balcony", "Square view", "Soaking tub", "WiFi", "Living area", "Library"],
        available: true,
      },
    ],
    coordinates: {
      lat: 27.6734,
      lng: 85.3250,
    },
    guestNotes: [
      "Location offers authentic immersion without tourist chaos",
      "Owners provide insightful cultural context",
      "Breakfast features local ingredients prepared thoughtfully",
      "Soundproofing is excellent despite historic building",
    ],
  },
];
