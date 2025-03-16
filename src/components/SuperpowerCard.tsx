
import { ReactNode } from 'react';

interface SuperpowerCardProps {
  icon: ReactNode;
  title: string;
  color: string;
  description: string;
  delay: number;
}

const SuperpowerCard = ({ icon, title, color, description, delay }: SuperpowerCardProps) => {
  return (
    <div 
      className={`rounded-2xl p-4 border-2 border-${color} flex items-center gap-4 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0, 
        animation: `fade-in-up 0.6s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <div className={`text-${color} text-4xl animate-float`} style={{ animationDelay: `${delay * 0.2}s` }}>
        {icon}
      </div>
      <div>
        <h3 className={`text-xl font-bold text-${color}`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SuperpowerCard;
