import { Droplet, Sparkles, MessageCircle, Camera, DollarSign, CheckCircle } from 'lucide-react';

interface StandardIconProps {
  type: 'warmWater' | 'cleanBedding' | 'responsiveManagement' | 'accuratePhotos' | 'fairPricing' | 'verified';
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StandardIcon({ type, label, size = 'md' }: StandardIconProps) {
  const iconMap = {
    warmWater: Droplet,
    cleanBedding: Sparkles,
    responsiveManagement: MessageCircle,
    accuratePhotos: Camera,
    fairPricing: DollarSign,
    verified: CheckCircle,
  };
  
  const Icon = iconMap[type];
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0">
        <Icon className={`${sizeClasses[size]} text-forest`} strokeWidth={1.5} />
      </div>
      <span className="text-sm text-charcoal-light">{label}</span>
    </div>
  );
}
