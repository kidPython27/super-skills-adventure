
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  percentage: number;
  delay: number;
  children: ReactNode;
}

const SkillCard = ({ title, icon, color, percentage, delay, children }: SkillCardProps) => {
  return (
    <div 
      className={`skill-card border-${color} bg-white`}
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        opacity: 0,
        animation: `fade-in-up 0.6s ease-out ${delay * 0.1}s forwards`
      }}
    >
      <div className="flex items-center mb-3 gap-2">
        <div className={`text-${color} text-3xl`}>{icon}</div>
        <h3 className={`text-xl text-${color}`}>{title}</h3>
      </div>
      
      <div className={`progress-bar bg-${color}`}>
        <div 
          className={`progress-fill bg-${color}`} 
          style={{ 
            width: '0%',
            transition: 'width 1s ease-out',
            animationDelay: `${(delay + 2) * 0.1}s`,
            animation: `none`
          }}
          onAnimationEnd={() => {
            const element = document.getElementById(`progress-${title}`);
            if (element) {
              element.style.width = `${percentage}%`;
            }
          }}
          id={`progress-${title}`}
        ></div>
      </div>
      
      <div className="mt-2 text-right text-lg font-bold">{percentage}%</div>
      
      <div className="mt-3 text-gray-700">
        {children}
      </div>
      
      <div 
        className={`bubble bg-${color} w-12 h-12 -top-6 -right-6 opacity-30`}
        style={{ animationDelay: `${delay * 0.2}s` }}
      ></div>
      <div 
        className={`bubble bg-${color} w-8 h-8 bottom-4 -left-4 opacity-20`}
        style={{ animationDelay: `${delay * 0.3}s` }}
      ></div>
    </div>
  );
};

export default SkillCard;
