
import { ReactNode } from 'react';

interface NextStepCardProps {
  icon: ReactNode;
  description: string;
  delay: number;
}

const NextStepCard = ({ icon, description, delay }: NextStepCardProps) => {
  return (
    <div 
      className="flex flex-col items-center p-4 rounded-2xl bg-white border-2 border-kid-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0, 
        animation: `scale-in 0.5s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <div className="text-3xl text-kid-blue mb-2 animate-float" style={{ animationDelay: `${delay * 0.2}s` }}>
        {icon}
      </div>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default NextStepCard;
