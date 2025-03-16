
import { ReactNode } from 'react';

interface DecorativeImageProps {
  src: string;
  alt: string;
  position: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  rotation?: number;
  className?: string;
  delay?: number;
}

const DecorativeImage = ({ 
  src, 
  alt, 
  position, 
  size = 'medium', 
  rotation = 0,
  className = '',
  delay = 0
}: DecorativeImageProps) => {
  const sizeClasses = {
    small: 'w-16 h-16 md:w-20 md:h-20',
    medium: 'w-24 h-24 md:w-32 md:h-32',
    large: 'w-32 h-32 md:w-40 md:h-40'
  };
  
  const positionClasses = {
    left: 'left-0 -ml-4 md:-ml-8',
    right: 'right-0 -mr-4 md:-mr-8'
  };
  
  return (
    <div
      className={`absolute hidden md:block ${positionClasses[position]} ${sizeClasses[size]} ${className} z-0`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        opacity: 0,
        animation: `float 5s ease-in-out infinite, fade-in-up 0.8s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default DecorativeImage;
