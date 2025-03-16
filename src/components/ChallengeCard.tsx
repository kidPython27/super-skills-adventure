
import { ReactNode } from 'react';

interface ChallengeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ChallengeCard = ({ icon, title, description, delay }: ChallengeCardProps) => {
  return (
    <div 
      className="rounded-2xl p-5 bg-white border-2 border-kid-purple shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0, 
        animation: `fade-in-up 0.6s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl text-kid-purple">{icon}</span>
        <h3 className="text-xl font-bold text-kid-purple">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ChallengeCard;
