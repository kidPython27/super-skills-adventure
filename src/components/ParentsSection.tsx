
import { useState } from 'react';
import { Printer, Copy, X, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ParentsSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById('parent-content')?.innerText || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-white rounded-3xl border-4 border-kid-teal p-6 mb-12 print:mb-8 print:break-after-page">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 bg-kid-red/20 hover:bg-kid-red/30 p-2 rounded-full transition-colors"
        aria-label="Close parents section"
      >
        <X className="h-5 w-5 text-kid-red" />
      </button>
      
      <div className="flex flex-col gap-3 mb-4">
        <SectionTitle 
          icon={<div className="text-4xl">📄</div>} 
          title="Section for Parents (To Be Removed Before Giving to Kids)" 
          delay={1}
        />
        
        <div className="flex gap-3 mb-2">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-kid-blue/20 hover:bg-kid-blue/30 px-4 py-2 rounded-lg transition-colors"
          >
            <Printer className="h-5 w-5" />
            <span>Print</span>
          </button>
          
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-kid-purple/20 hover:bg-kid-purple/30 px-4 py-2 rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div id="parent-content" className="space-y-6 text-gray-700">
        <p>
          Dear Parents,
        </p>
        <p>
          This report is designed to help your child (ages 6-9) explore their natural strengths, interests, and potential career paths in a fun and engaging way. Based on the RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, and Conventional) model, your child's profile gives insight into what activities and future roles might align with their natural inclinations.
        </p>
        <p>
          This version of the report has been rewritten in kid-friendly language to:
        </p>
        <ul className="list-none space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-kid-green font-bold">✅</span>
            <span>Encourage self-exploration in an engaging way.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-kid-green font-bold">✅</span>
            <span>Foster confidence in their skills.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-kid-green font-bold">✅</span>
            <span>Suggest age-appropriate activities to nurture their strengths.</span>
          </li>
        </ul>

        <div>
          <h3 className="text-xl font-bold text-kid-blue flex items-center gap-2 mb-4">
            <span className="text-xl">🔍</span> Understanding Your Child's Profile
          </h3>
          <p className="mb-4">
            Your child's profile shows their dominant traits, reflecting how they prefer to learn, play, and interact with the world. Here's what it means for their early development:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-kid-blue/10">
                  <th className="p-3 text-left border border-kid-blue/30">Trait</th>
                  <th className="p-3 text-left border border-kid-blue/30">What It Means for Your Child</th>
                  <th className="p-3 text-left border border-kid-blue/30">How You Can Support Them</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-kid-blue/30 font-medium">Realistic (Builder)</td>
                  <td className="p-3 border border-kid-blue/30">Hands-on, enjoys making and fixing things, loves working with objects or tools.</td>
                  <td className="p-3 border border-kid-blue/30">Provide LEGOs, craft kits, and science toys. Encourage outdoor play like gardening or simple home DIY projects.</td>
                </tr>
                <tr className="bg-kid-blue/5">
                  <td className="p-3 border border-kid-blue/30 font-medium">Investigative (Thinker)</td>
                  <td className="p-3 border border-kid-blue/30">Curious, loves asking "why?", enjoys solving problems, science, and learning new things.</td>
                  <td className="p-3 border border-kid-blue/30">Encourage science experiments, nature exploration, and puzzle-solving games. Answer their questions with curiosity!</td>
                </tr>
                <tr>
                  <td className="p-3 border border-kid-blue/30 font-medium">Artistic (Creator)</td>
                  <td className="p-3 border border-kid-blue/30">Enjoys expressing themselves, has a big imagination, loves drawing, music, or storytelling.</td>
                  <td className="p-3 border border-kid-blue/30">Provide art supplies, storytelling games, music instruments, and role-playing activities.</td>
                </tr>
                <tr className="bg-kid-blue/5">
                  <td className="p-3 border border-kid-blue/30 font-medium">Social (Helper)</td>
                  <td className="p-3 border border-kid-blue/30">Enjoys working with people, likes teamwork, cares about helping others.</td>
                  <td className="p-3 border border-kid-blue/30">Encourage group activities, volunteering opportunities, and discussions about kindness and empathy.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-kid-blue/30 font-medium">Enterprising (Leader)</td>
                  <td className="p-3 border border-kid-blue/30">Enjoys leading, making decisions, and coming up with new ideas.</td>
                  <td className="p-3 border border-kid-blue/30">Encourage decision-making at home, role-play leadership (e.g., shopkeeper, teacher), and group projects.</td>
                </tr>
                <tr className="bg-kid-blue/5">
                  <td className="p-3 border border-kid-blue/30 font-medium">Conventional (Organizer)</td>
                  <td className="p-3 border border-kid-blue/30">Likes structure, enjoys sorting and categorizing, follows rules well.</td>
                  <td className="p-3 border border-kid-blue/30">Provide puzzle games, schedules, organizing activities (e.g., sorting books or toys), and structured play.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-kid-blue flex items-center gap-2 mb-4">
            <span className="text-xl">🚀</span> Action Plan for Parents
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="font-bold">1️⃣ Observe & Encourage</p>
              <ul className="list-disc ml-6">
                <li>Watch how your child naturally plays and interacts.</li>
                <li>Praise their strengths and efforts instead of just results.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold">2️⃣ Provide the Right Tools</p>
              <ul className="list-disc ml-6">
                <li>Choose activities and toys that match their dominant interests.</li>
                <li>Offer a mix of structured and free play opportunities.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold">3️⃣ Expose Them to New Experiences</p>
              <ul className="list-disc ml-6">
                <li>Take them to museums, science centers, art workshops, and nature parks.</li>
                <li>Introduce them to different hobbies (music, sports, storytelling, etc.).</li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold">4️⃣ Foster Growth in Weak Areas</p>
              <ul className="list-disc ml-6">
                <li>If they struggle with teamwork, introduce cooperative board games.</li>
                <li>If they get frustrated easily, practice small patience-building tasks like puzzles.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold">5️⃣ Keep Career Exploration Fun & Light</p>
              <ul className="list-disc ml-6">
                <li>Ask open-ended questions like: What was your favorite thing to do today?</li>
                <li>Let them role-play different jobs (e.g., scientist, artist, teacher) in a playful way.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold">6️⃣ Revisit & Adapt as They Grow</p>
              <ul className="list-disc ml-6">
                <li>This report is an early snapshot of their interests—it may change over time!</li>
                <li>Encourage adaptability and a growth mindset by reminding them that skills develop with practice.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-xl font-bold text-kid-blue mb-4">Final Note for Parents:</h3>
          <p>
            At this stage, there's no pressure to push career choices. The goal is to foster curiosity, confidence, and excitement about learning. Let your child enjoy their adventure while discovering what makes them unique!
          </p>
          <p className="mt-3">
            If you'd like a deeper analysis as your child grows, consider revisiting this assessment every few years to track evolving interests.
          </p>
          <p className="mt-6 font-medium text-kid-green">
            💡 Tip: Keep this page for yourself and share only the kid-friendly part with your child! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsSection;
