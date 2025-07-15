
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Hammer, Palette, HeartHandshake, Megaphone, ClipboardList,
  Rocket, Puzzle, Handshake, Clock, MessageSquare, PenTool, 
  Telescope, Gamepad, Lightbulb, HardHat, Award, Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillCard from '@/components/SkillCard';
import SuperpowerCard from '@/components/SuperpowerCard';
import ChallengeCard from '@/components/ChallengeCard';
import JobCard from '@/components/JobCard';
import SectionTitle from '@/components/SectionTitle';
import NextStepCard from '@/components/NextStepCard';

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
        {/* What Is This Report */}
        <div className="mb-16">
          <SectionTitle 
            icon={<Rocket />} 
            title="What Is This Report?" 
            delay={5}
          />
          <div 
            className="bg-white rounded-3xl p-6 shadow-sm border-2 border-kid-blue animate-fade-in-up"
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
        <div className="mb-16">
          <SectionTitle 
            icon={<Lightbulb />} 
            title="Your Superpowers!" 
            delay={7}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="mb-16">
          <SectionTitle 
            icon={<Award />} 
            title="Your Explorer Profile!" 
            delay={11}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="mb-16">
          <SectionTitle 
            icon={<Award />} 
            title="Super Strengths!" 
            delay={18}
          />
          <div 
            className="bg-white rounded-3xl p-6 shadow-sm border-2 border-kid-purple animate-fade-in-up"
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
        <div className="mb-16">
          <SectionTitle 
            icon={<Rocket />} 
            title="Challenge Missions!" 
            delay={20}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="mb-16">
          <SectionTitle 
            icon={<Rocket />} 
            title="Fun Jobs You Might Like!" 
            delay={24}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
        <div className="mb-8">
          <SectionTitle 
            icon={<Rocket />} 
            title="What Can You Do Next?" 
            delay={30}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
      <div className="mt-16 text-center">
        <div 
          className="text-4xl mb-3 animate-bounce-in"
          style={{ animationDelay: '3.5s' }}
        >
          🎯
        </div>
        <p 
          className="text-lg text-gray-600 animate-fade-in-up"
          style={{ animationDelay: '3.6s' }}
        >
          Keep exploring and using your amazing skills!
        </p>
        
        <div className="flex gap-4 justify-center mt-6">
          <Link to="/exploration-plan">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-kid-blue to-kid-purple hover:from-kid-blue/90 hover:to-kid-purple/90 text-white"
            >
              My Adventure Plan! 🚀
            </Button>
          </Link>
          <Link to="/parents">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-kid-blue text-kid-blue hover:bg-kid-blue/10"
            >
              Parent's Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
