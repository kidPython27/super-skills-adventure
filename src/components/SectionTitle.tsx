
import { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  delay?: number;
}

const SectionTitle = ({ icon, title, delay = 1 }: SectionTitleProps) => {
  return (
    <div 
      className="flex items-center gap-3 mb-6"
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0, 
        animation: `fade-in-up 0.6s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <div className="text-3xl text-kid-blue animate-rotate-bounce">{icon}</div>
      <h2 className="text-3xl font-bold text-kid-blue">{title}</h2>
    </div>
  );
};

export default SectionTitle;
