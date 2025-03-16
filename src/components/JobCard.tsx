
import { ReactNode } from 'react';

interface JobCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const JobCard = ({ icon, title, description, color, delay }: JobCardProps) => {
  return (
    <div 
      className={`rounded-2xl p-4 bg-white border-2 border-${color} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0, 
        animation: `bounce-in 0.8s ease-out ${delay * 0.15}s forwards`
      }}
    >
      <div className={`flex justify-center mb-3`}>
        <div 
          className={`text-4xl text-${color} bg-${color} bg-opacity-10 rounded-full p-4 animate-float`}
          style={{ animationDelay: `${delay * 0.3}s` }}
        >
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-bold text-center text-${color} mb-2`}>{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default JobCard;
