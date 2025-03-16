
import { useEffect } from 'react';
import { 
  Brain, Hammer, Palette, HeartHandshake, Megaphone, ClipboardList,
  Rocket, Puzzle, Handshake, Clock, MessageSquare, PenTool, 
  Telescope, Gamepad, Lightbulb, HardHat, Award, Users, Bird, Cat, Dog, ToyBrick, Star, Rainbow, Fish, Sun, TreeDeciduous
} from 'lucide-react';
import SkillCard from '@/components/SkillCard';
import SuperpowerCard from '@/components/SuperpowerCard';
import ChallengeCard from '@/components/ChallengeCard';
import JobCard from '@/components/JobCard';
import SectionTitle from '@/components/SectionTitle';
import NextStepCard from '@/components/NextStepCard';
import ParentsSection from '@/components/ParentsSection';
import DecorativeImage from '@/components/DecorativeImage';

const Index = () => {
  // Run animations after component is mounted
  useEffect(() => {
    // Trigger progress bar animations after a delay
    const timeout = setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-fill');
      progressBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          const parentId = bar.id;
          const percentage = parentId.includes('Realistic') ? 85 :
                            parentId.includes('Investigative') ? 92 :
                            parentId.includes('Artistic') ? 78 :
                            parentId.includes('Social') ? 60 :
                            parentId.includes('Enterprising') ? 50 :
                            45;
          bar.style.width = `${percentage}%`;
        }
      });
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-16">
      {/* Hero Section with animated clouds */}
      <div className="relative overflow-hidden bg-gradient-to-b from-kid-blue to-kid-indigo text-white py-20 px-6 rounded-b-[3rem] shadow-lg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div 
            className="inline-block text-5xl md:text-6xl mb-2 animate-bounce-in"
            style={{ animationDelay: '0.1s' }}
          >
            🚀
          </div>
          <h1 
            className="text-4xl md:text-5xl mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Your Super Skills Adventure!
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Discover your amazing superpowers and see what kind of explorer you are!
          </p>
        </div>
        
        {/* Decorative bubbles */}
        <div className="bubble w-32 h-32 top-10 left-10 bg-white"></div>
        <div className="bubble w-24 h-24 bottom-10 right-10 bg-white" style={{ animationDelay: '2s' }}></div>
        <div className="bubble w-16 h-16 top-20 right-20 bg-white" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        {/* Parents Section (Detachable) */}
        <ParentsSection />

        {/* What Is This Report */}
        <div className="mb-16 relative">
          <DecorativeImage 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
            alt="Two deer in nature" 
            position="right"
            size="large"
            rotation={-5}
            delay={4}
          />
          
          <SectionTitle 
            icon={<Rocket />} 
            title="What Is This Report?" 
            delay={5}
          />
          <div 
            className="bg-white rounded-3xl p-6 shadow-sm border-2 border-kid-blue animate-fade-in-up relative z-10"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-lg mb-4">
              This is your Super Skills Adventure! The RIASEC test helps you find out what kind of explorer you are.
            </p>
            <p className="text-lg">
              Are you a builder, a thinker, or a creator? Or maybe a mix of all three! Let's find out what makes YOU awesome!
            </p>
          </div>
        </div>

        {/* Your Superpowers */}
        <div className="mb-16 relative">
          <DecorativeImage 
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
            alt="Cute orange and white cat" 
            position="left"
            size="medium"
            rotation={5}
            delay={6}
          />
          
          <SectionTitle 
            icon={<Lightbulb />} 
            title="Your Superpowers!" 
            delay={7}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <SuperpowerCard
              icon={<Brain />}
              title="Super Thinker"
              color="kid-blue"
              description="You love puzzles and figuring things out!"
              delay={8}
            />
            <SuperpowerCard
              icon={<Hammer />}
              title="Hands-On Hero"
              color="kid-orange"
              description="You like to build, fix, and explore!"
              delay={9}
            />
            <SuperpowerCard
              icon={<Palette />}
              title="Creative Whiz"
              color="kid-purple"
              description="You have a big imagination and love to create!"
              delay={10}
            />
          </div>
        </div>

        {/* Your Explorer Profile */}
        <div className="mb-16 relative">
          <div className="absolute -right-8 top-40 md:top-20 z-0 opacity-70 w-32 h-32 md:w-48 md:h-48"
              style={{ 
                animation: `float 6s ease-in-out infinite`,
                animationDelay: '1s'
              }}>
            <Rainbow className="w-full h-full text-kid-pink" />
          </div>
          
          <div className="absolute -left-4 bottom-10 z-0 opacity-60 w-20 h-20 md:w-32 md:h-32"
              style={{ 
                animation: `float 7s ease-in-out infinite`,
                animationDelay: '0.5s'
              }}>
            <Sun className="w-full h-full text-kid-yellow" />
          </div>
          
          <SectionTitle 
            icon={<Award />} 
            title="Your Explorer Profile!" 
            delay={11}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <SkillCard
              title="Builder (Realistic)"
              icon={<HardHat />}
              color="kid-blue"
              percentage={85}
              delay={12}
            >
              Loves making and building things!
            </SkillCard>
            
            <SkillCard
              title="Detective (Investigative)"
              icon={<Puzzle />}
              color="kid-purple"
              percentage={92}
              delay={13}
            >
              Loves solving mysteries and figuring things out!
            </SkillCard>
            
            <SkillCard
              title="Artist (Artistic)"
              icon={<PenTool />}
              color="kid-pink"
              percentage={78}
              delay={14}
            >
              Loves creating stories, art, and using imagination!
            </SkillCard>
            
            <SkillCard
              title="Helper (Social)"
              icon={<HeartHandshake />}
              color="kid-green"
              percentage={60}
              delay={15}
            >
              Enjoys being kind and helping others!
            </SkillCard>
            
            <SkillCard
              title="Leader (Enterprising)"
              icon={<Megaphone />}
              color="kid-orange"
              percentage={50}
              delay={16}
            >
              Enjoys leading a team and making plans!
            </SkillCard>
            
            <SkillCard
              title="Organizer (Conventional)"
              icon={<ClipboardList />}
              color="kid-teal"
              percentage={45}
              delay={17}
            >
              Loves keeping things neat and organized!
            </SkillCard>
          </div>
        </div>

        {/* Super Strengths */}
        <div className="mb-16 relative">
          <DecorativeImage 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
            alt="Cute kitten" 
            position="right"
            size="medium"
            rotation={-5}
            delay={17}
          />
          
          <SectionTitle 
            icon={<Award />} 
            title="Super Strengths!" 
            delay={18}
          />
          <div 
            className="bg-white rounded-3xl p-6 shadow-sm border-2 border-kid-purple animate-fade-in-up relative z-10"
            style={{ animationDelay: '1.9s' }}
          >
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="text-kid-yellow text-xl">🌟</div>
                <span className="text-lg">You are great at figuring things out!</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-kid-yellow text-xl">🌟</div>
                <span className="text-lg">You love making cool things with your hands!</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-kid-yellow text-xl">🌟</div>
                <span className="text-lg">You use your imagination to make amazing ideas!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Missions */}
        <div className="mb-16 relative">
          <div className="absolute -left-4 top-10 z-0 opacity-70 w-24 h-24 md:w-40 md:h-40"
              style={{ 
                animation: `float 8s ease-in-out infinite`,
                animationDelay: '1.2s'
              }}>
            <Star className="w-full h-full text-kid-yellow" />
          </div>
          
          <SectionTitle 
            icon={<Rocket />} 
            title="Challenge Missions!" 
            delay={20}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <ChallengeCard
              icon={<Users />}
              title="Teamwork Time"
              description="Try working with a friend to build something cool together!"
              delay={21}
            />
            <ChallengeCard
              icon={<Clock />}
              title="Patience Power"
              description="Some challenges take time – try a new hobby and don't give up!"
              delay={22}
            />
            <ChallengeCard
              icon={<MessageSquare />}
              title="Talk & Share"
              description="Tell someone about your ideas and ask for their thoughts!"
              delay={23}
            />
          </div>
        </div>

        {/* Fun Jobs */}
        <div className="mb-16 relative">
          <DecorativeImage 
            src="https://images.unsplash.com/photo-1441057206919-63d19fac2369" 
            alt="Penguins" 
            position="left"
            size="medium"
            rotation={5}
            delay={24}
          />
          
          <div className="absolute -right-4 bottom-10 z-0 opacity-60 w-24 h-24 md:w-36 md:h-36"
              style={{ 
                animation: `float 7s ease-in-out infinite`,
                animationDelay: '0.7s'
              }}>
            <TreeDeciduous className="w-full h-full text-kid-green" />
          </div>
          
          <SectionTitle 
            icon={<Rocket />} 
            title="Fun Jobs You Might Like!" 
            delay={24}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            <JobCard
              icon={<Telescope />}
              title="Space Scientist"
              description="Discover new planets!"
              color="kid-blue"
              delay={25}
            />
            <JobCard
              icon={<PenTool />}
              title="Artist"
              description="Draw, paint, and create!"
              color="kid-purple"
              delay={26}
            />
            <JobCard
              icon={<Lightbulb />}
              title="Inventor"
              description="Build new gadgets!"
              color="kid-orange"
              delay={27}
            />
            <JobCard
              icon={<Rocket />}
              title="Nature Explorer"
              description="Learn about animals and plants!"
              color="kid-green"
              delay={28}
            />
            <JobCard
              icon={<Users />}
              title="Team Leader"
              description="Guide and inspire others!"
              color="kid-teal"
              delay={29}
            />
          </div>
        </div>

        {/* What Next */}
        <div className="mb-8 relative">
          <div className="absolute -left-8 top-10 z-0 opacity-50 w-24 h-24 md:w-40 md:h-40"
              style={{ 
                animation: `float 9s ease-in-out infinite`,
                animationDelay: '1.5s'
              }}>
            <Bird className="w-full h-full text-kid-blue" />
          </div>
          
          <div className="absolute -right-8 top-40 z-0 opacity-50 w-28 h-28 md:w-44 md:h-44"
              style={{ 
                animation: `float 8s ease-in-out infinite`,
                animationDelay: '0.8s'
              }}>
            <Dog className="w-full h-full text-kid-orange" />
          </div>
          
          <SectionTitle 
            icon={<Rocket />} 
            title="What Can You Do Next?" 
            delay={30}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <NextStepCard
              icon={<Puzzle />}
              description="Try puzzles – Play brain games!"
              delay={31}
            />
            <NextStepCard
              icon={<PenTool />}
              description="Create something cool – A story, model, or painting!"
              delay={32}
            />
            <NextStepCard
              icon={<Lightbulb />}
              description="Do an experiment – Mix colors or grow a plant!"
              delay={33}
            />
            <NextStepCard
              icon={<Rocket />}
              description="Explore – Visit a zoo, park, or museum!"
              delay={34}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center relative">
        <div className="absolute left-1/2 -ml-40 -top-10 z-0 opacity-60 w-20 h-20 md:w-32 md:h-32"
            style={{ 
              animation: `float 10s ease-in-out infinite`,
              animationDelay: '1.2s'
            }}>
          <Fish className="w-full h-full text-kid-blue" />
        </div>
        
        <div className="absolute right-1/4 -top-20 z-0 opacity-50 w-24 h-24 md:w-36 md:h-36"
            style={{ 
              animation: `float 9s ease-in-out infinite`,
              animationDelay: '0.3s'
            }}>
          <ToyBrick className="w-full h-full text-kid-red" />
        </div>
        
        <div 
          className="text-4xl mb-3 animate-bounce-in relative z-10"
          style={{ animationDelay: '3.5s' }}
        >
          🎯
        </div>
        <p 
          className="text-lg text-gray-600 animate-fade-in-up relative z-10"
          style={{ animationDelay: '3.6s' }}
        >
          Keep exploring and using your amazing skills!
        </p>
      </div>
    </div>
  );
};

export default Index;
