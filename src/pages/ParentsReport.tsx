
import { ArrowLeft, FileText, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const ParentsReport = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <Link to="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Kid's Report
        </Button>
      </Link>

      <SectionTitle 
        icon={<FileText />} 
        title="Parent's Guide to Your Child's RIASEC Report" 
        delay={1}
      />

      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-2xl shadow-md">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
            <Users className="mr-2" /> Dear Parents,
          </h3>
          <p className="text-gray-700 mb-4">
            This report is designed to help your child (ages 6-9) explore their natural strengths, 
            interests, and potential career paths in a fun and engaging way. Based on the RIASEC 
            (Realistic, Investigative, Artistic, Social, Enterprising, and Conventional) model, 
            your child's profile gives insight into what activities and future roles might align 
            with their natural inclinations.
          </p>
          <p className="text-gray-700">
            This version of the report has been rewritten in kid-friendly language to:
          </p>
          <ul className="ml-6 mt-2 space-y-1">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Encourage self-exploration in an engaging way.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Foster confidence in their skills.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Suggest age-appropriate activities to nurture their strengths.</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
            <User className="mr-2" /> Understanding Your Child's Profile
          </h3>
          <p className="text-gray-700 mb-4">
            Your child's profile shows their dominant traits, reflecting how they prefer to learn, 
            play, and interact with the world. Here's what it means for their early development:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-bold text-gray-600 border-b">Trait</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-600 border-b">What It Means for Your Child</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-600 border-b">How You Can Support Them</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-blue-600 font-medium">Realistic (Builder)</td>
                  <td className="py-3 px-4 border-b">Hands-on, enjoys making and fixing things, loves working with objects or tools.</td>
                  <td className="py-3 px-4 border-b">Provide LEGOs, craft kits, and science toys. Encourage outdoor play like gardening or simple home DIY projects.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-purple-600 font-medium">Investigative (Thinker)</td>
                  <td className="py-3 px-4 border-b">Curious, loves asking "why?", enjoys solving problems, science, and learning new things.</td>
                  <td className="py-3 px-4 border-b">Encourage science experiments, nature exploration, and puzzle-solving games. Answer their questions with curiosity!</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-pink-600 font-medium">Artistic (Creator)</td>
                  <td className="py-3 px-4 border-b">Enjoys expressing themselves, has a big imagination, loves drawing, music, or storytelling.</td>
                  <td className="py-3 px-4 border-b">Provide art supplies, storytelling games, music instruments, and role-playing activities.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-green-600 font-medium">Social (Helper)</td>
                  <td className="py-3 px-4 border-b">Enjoys working with people, likes teamwork, cares about helping others.</td>
                  <td className="py-3 px-4 border-b">Encourage group activities, volunteering opportunities, and discussions about kindness and empathy.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-yellow-600 font-medium">Enterprising (Leader)</td>
                  <td className="py-3 px-4 border-b">Enjoys leading, making decisions, and coming up with new ideas.</td>
                  <td className="py-3 px-4 border-b">Encourage decision-making at home, role-play leadership (e.g., shopkeeper, teacher), and group projects.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-orange-600 font-medium">Conventional (Organizer)</td>
                  <td className="py-3 px-4 border-b">Likes structure, enjoys sorting and categorizing, follows rules well.</td>
                  <td className="py-3 px-4 border-b">Provide puzzle games, schedules, organizing activities (e.g., sorting books or toys), and structured play.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">🚀</span> Action Plan for Parents
          </h3>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
              <p className="font-bold text-blue-700 mb-2">1️⃣ Observe & Encourage</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>Watch how your child naturally plays and interacts.</li>
                <li>Praise their strengths and efforts instead of just results.</li>
              </ul>
            </div>
            
            <div className="p-4 border border-purple-100 rounded-lg bg-purple-50">
              <p className="font-bold text-purple-700 mb-2">2️⃣ Provide the Right Tools</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>Choose activities and toys that match their dominant interests.</li>
                <li>Offer a mix of structured and free play opportunities.</li>
              </ul>
            </div>
            
            <div className="p-4 border border-green-100 rounded-lg bg-green-50">
              <p className="font-bold text-green-700 mb-2">3️⃣ Expose Them to New Experiences</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>Take them to museums, science centers, art workshops, and nature parks.</li>
                <li>Introduce them to different hobbies (music, sports, storytelling, etc.).</li>
              </ul>
            </div>
            
            <div className="p-4 border border-pink-100 rounded-lg bg-pink-50">
              <p className="font-bold text-pink-700 mb-2">4️⃣ Foster Growth in Weak Areas</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>If they struggle with teamwork, introduce cooperative board games.</li>
                <li>If they get frustrated easily, practice small patience-building tasks like puzzles.</li>
              </ul>
            </div>
            
            <div className="p-4 border border-yellow-100 rounded-lg bg-yellow-50">
              <p className="font-bold text-yellow-700 mb-2">5️⃣ Keep Career Exploration Fun & Light</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>Ask open-ended questions like: What was your favorite thing to do today?</li>
                <li>Let them role-play different jobs (e.g., scientist, artist, teacher) in a playful way.</li>
              </ul>
            </div>
            
            <div className="p-4 border border-orange-100 rounded-lg bg-orange-50">
              <p className="font-bold text-orange-700 mb-2">6️⃣ Revisit & Adapt as They Grow</p>
              <ul className="ml-5 list-disc text-gray-700">
                <li>This report is an early snapshot of their interests—it may change over time!</li>
                <li>Encourage adaptability and a growth mindset by reminding them that skills develop with practice.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Final Note for Parents:</h3>
          <p className="text-gray-700 mb-3">
            At this stage, there's no pressure to push career choices. The goal is to foster curiosity, 
            confidence, and excitement about learning. Let your child enjoy their adventure while discovering 
            what makes them unique!
          </p>
          <p className="text-gray-700 mb-3">
            If you'd like a deeper analysis as your child grows, consider revisiting this assessment 
            every few years to track evolving interests.
          </p>
          <p className="text-gray-700 font-medium flex items-center">
            <span className="mr-2">💡</span> Tip: Share only the kid-friendly report with your child!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsReport;
