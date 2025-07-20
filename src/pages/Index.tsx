import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Hammer, Palette, HeartHandshake, Megaphone, ClipboardList,
  Rocket, Puzzle, Handshake, Clock, MessageSquare, PenTool, 
  Telescope, Gamepad, Lightbulb, HardHat, Award, Users, 
  Zap, Heart, Mic, Sparkles, Target, Shield, Building2
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

      {/* Partner Institute Description */}
      <div className="max-w-4xl mx-auto px-6 mt-12 mb-12">
        <div 
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-kid-indigo/20 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-kid-blue to-kid-indigo rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-kid-blue mb-3">About Our Partner Institute</h3>
              <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                This Super Skills Adventure Report is brought to you by our trusted partner institute, 
                dedicated to helping young explorers discover their amazing talents and potential!
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our institute has been specially trained by <span className="font-semibold text-kid-purple">mentorrd</span> in 
                advanced report generation and interpretation techniques, ensuring that every child receives 
                personalized, accurate, and inspiring guidance for their learning journey.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-kid-yellow rounded-full"></div>
                <span className="text-sm text-kid-blue font-medium">Certified by mentorrd for quality assurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6">
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

        {/* AI Skills Section */}
        <div className="mb-16">
          <SectionTitle 
            icon={<Zap />} 
            title="AI Skills - The Future is Here!" 
            delay={35}
          />
          
          <div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 shadow-sm border-2 border-kid-blue animate-fade-in-up mb-8"
            style={{ animationDelay: '3.6s' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-kid-blue mb-2">What is AI?</h3>
                <p className="text-lg">AI (Artificial Intelligence) is like a smart robot brain. It helps computers and machines think and do tasks like humans! You already use it when you ask voice assistants, play smart games, or see recommendations on YouTube.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-4 border border-kid-purple/20">
                <h4 className="font-bold text-kid-purple mb-3 flex items-center">
                  <span className="mr-2">🌟</span> How AI is Used Today
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-kid-green">•</span>
                    <span>Helping doctors understand health better</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-green">•</span>
                    <span>Making cars smarter and safer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-green">•</span>
                    <span>Creating music, art, and stories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-green">•</span>
                    <span>Helping teachers with learning tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-green">•</span>
                    <span>Giving advice in games and apps</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-kid-orange/20">
                <h4 className="font-bold text-kid-orange mb-3 flex items-center">
                  <span className="mr-2">🚀</span> Super Skills to Learn
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-kid-blue">✨</span>
                    <span>Be Curious — always ask 'Why?' and 'How?'</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-blue">✨</span>
                    <span>Learn basic coding with block tools like Scratch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-blue">✨</span>
                    <span>Use smart tools safely and kindly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-kid-blue">✨</span>
                    <span>Play with AI-powered games or art apps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-kid-pink to-kid-purple text-white rounded-2xl p-4">
                <h5 className="font-bold mb-2 flex items-center">
                  <Palette className="mr-2" size={20} />
                  Art & Drawing
                </h5>
                <p className="text-sm mb-2">AI tools can help you color faster or suggest cool drawing ideas!</p>
                <p className="text-xs bg-white/20 rounded p-2">Try drawing apps that suggest shapes!</p>
              </div>
              
              <div className="bg-gradient-to-r from-kid-green to-kid-teal text-white rounded-2xl p-4">
                <h5 className="font-bold mb-2 flex items-center">
                  <Heart className="mr-2" size={20} />
                  Helping People
                </h5>
                <p className="text-sm mb-2">AI helps doctors and teachers give better help!</p>
                <p className="text-xs bg-white/20 rounded p-2">Learn to ask good questions and be kind!</p>
              </div>
              
              <div className="bg-gradient-to-r from-kid-blue to-kid-indigo text-white rounded-2xl p-4">
                <h5 className="font-bold mb-2 flex items-center">
                  <Gamepad className="mr-2" size={20} />
                  Games & Tech
                </h5>
                <p className="text-sm mb-2">Game creators use AI to make smart characters!</p>
                <p className="text-xs bg-white/20 rounded p-2">Try game design tools for kids!</p>
              </div>
            </div>

            <div className="mt-6 bg-kid-yellow/20 rounded-2xl p-4 border border-kid-yellow">
              <p className="text-center font-bold text-kid-blue flex items-center justify-center gap-2">
                <Shield size={20} />
                Always talk to an adult before trying a new website or app!
              </p>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <SectionTitle 
            icon={<Sparkles />} 
            title="Soft Skills - Your Friendly Powers!" 
            delay={37}
          />
          
          <div 
            className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-3xl p-6 shadow-sm border-2 border-kid-pink animate-fade-in-up mb-8"
            style={{ animationDelay: '3.8s' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">💖</div>
              <div>
                <p className="text-lg">Soft skills are friendly powers that help you talk, share, play, and feel great with others! They're like magic manners for life and learning!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 border-2 border-kid-blue/30 hover:border-kid-blue transition-colors">
                <h4 className="font-bold text-kid-blue mb-2 flex items-center">
                  <Users className="mr-2" size={18} />
                  Sharing
                </h4>
                <p className="text-sm mb-2">Letting others use your toys, colors, or games.</p>
                <p className="text-xs bg-kid-blue/10 rounded p-2">Take turns with a toy or let a friend try your favorite game.</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-kid-purple/30 hover:border-kid-purple transition-colors">
                <h4 className="font-bold text-kid-purple mb-2 flex items-center">
                  <MessageSquare className="mr-2" size={18} />
                  Listening
                </h4>
                <p className="text-sm mb-2">Hearing what others say with your ears and your heart.</p>
                <p className="text-xs bg-kid-purple/10 rounded p-2">Look at the person talking and wait your turn to speak.</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-kid-orange/30 hover:border-kid-orange transition-colors">
                <h4 className="font-bold text-kid-orange mb-2 flex items-center">
                  <Heart className="mr-2" size={18} />
                  Being Kind
                </h4>
                <p className="text-sm mb-2">Using nice words and helping hands.</p>
                <p className="text-xs bg-kid-orange/10 rounded p-2">Say 'please', 'thank you', and help someone tie their shoelace.</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-kid-pink/30 hover:border-kid-pink transition-colors">
                <h4 className="font-bold text-kid-pink mb-2 flex items-center">
                  <ClipboardList className="mr-2" size={18} />
                  Following Rules
                </h4>
                <p className="text-sm mb-2">Doing what's right at home or in class.</p>
                <p className="text-xs bg-kid-pink/10 rounded p-2">Stop when the teacher claps or clean up after playtime.</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-kid-green/30 hover:border-kid-green transition-colors">
                <h4 className="font-bold text-kid-green mb-2 flex items-center">
                  <Target className="mr-2" size={18} />
                  Being Brave
                </h4>
                <p className="text-sm mb-2">Trying new things even if they feel a little scary.</p>
                <p className="text-xs bg-kid-green/10 rounded p-2">Speak in front of the class or try a new food!</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-kid-teal/30 hover:border-kid-teal transition-colors">
                <h4 className="font-bold text-kid-teal mb-2 flex items-center">
                  <HeartHandshake className="mr-2" size={18} />
                  Helping Others
                </h4>
                <p className="text-sm mb-2">Doing small things to make someone's day better.</p>
                <p className="text-xs bg-kid-teal/10 rounded p-2">Pick up a dropped pencil or give someone a hug when they're sad.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-kid-yellow mb-4">
              <h4 className="font-bold text-kid-blue mb-3 flex items-center">
                <span className="mr-2">🌟</span> Daily Fun Challenges - Try One Today!
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-kid-pink">💖</span>
                  <span className="text-sm">Say 'Good job!' to a friend today</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-kid-blue">🤝</span>
                  <span className="text-sm">Help your teacher tidy the classroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-kid-purple">🫂</span>
                  <span className="text-sm">Give your family a big thank-you hug!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-kid-green">🍎</span>
                  <span className="text-sm">Try a new food at lunch and smile even if it's weird!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-kid-orange">🎮</span>
                  <span className="text-sm">Let someone else go first in a game</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-kid-green mb-4">
              <h4 className="font-bold text-kid-blue mb-3 flex items-center">
                <span className="mr-2">🎯</span> Play & Learn Ideas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-kid-blue/10 rounded-xl p-3">
                  <h5 className="font-bold text-kid-blue mb-2">Play house or school with friends</h5>
                  <p className="text-xs text-gray-600">Practice: Sharing, Listening, Kindness</p>
                </div>
                <div className="bg-kid-pink/10 rounded-xl p-3">
                  <h5 className="font-bold text-kid-pink mb-2">Make a thank-you card for someone</h5>
                  <p className="text-xs text-gray-600">Practice: Being Kind, Helping Others</p>
                </div>
                <div className="bg-kid-green/10 rounded-xl p-3">
                  <h5 className="font-bold text-kid-green mb-2">Try a new game at recess</h5>
                  <p className="text-xs text-gray-600">Practice: Being Brave, Following Rules</p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-kid-yellow/30 to-kid-orange/30 rounded-2xl p-4">
              <p className="text-center font-bold text-kid-blue">
                These happy skills help you make friends, do better in school, and feel proud of yourself. They turn you into a real-life superhero! 🦸‍♂️
              </p>
            </div>
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
