import { ArrowLeft, Calendar, Clock, BookOpen, Heart, Users, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/SectionTitle";

const ExplorationPlan = () => {
  // Sample data - in real app this would come from props or API
  const explorationData = {
    exploration_plan: {
      id: 2,
      created_at: "2025-07-15T17:32:22.818824Z",
      age_range: "6-9"
    },
    tasks: [
      {
        id: 5,
        description: "Try a new song on the guitar",
        due_in_weeks: 4,
        category: "long_term"
      },
      {
        id: 6,
        description: "Draw a comic strip about your favorite superhero",
        due_in_weeks: 2,
        category: "short_term"
      }
    ],
    exploration_items: [
      {
        id: 1,
        text: "music",
        category: "long_term",
        list_type: "interests_to_explore"
      },
      {
        id: 2,
        text: "science experiments",
        category: "long_term",
        list_type: "interests_to_explore"
      },
      {
        id: 3,
        text: "art projects",
        category: "long_term",
        list_type: "interests_to_explore"
      },
      {
        id: 4,
        text: "playing guitar",
        category: "long_term",
        list_type: "fun_skills_to_try"
      },
      {
        id: 5,
        text: "simple coding games",
        category: "long_term",
        list_type: "fun_skills_to_try"
      },
      {
        id: 6,
        text: "drawing",
        category: "long_term",
        list_type: "fun_skills_to_try"
      },
      {
        id: 7,
        text: "learn a new song on the guitar",
        category: "long_term",
        list_type: "future_learning_ideas"
      },
      {
        id: 8,
        text: "create a simple science project",
        category: "long_term",
        list_type: "future_learning_ideas"
      },
      {
        id: 9,
        text: "family art night",
        category: "long_term",
        list_type: "activities_with_family"
      },
      {
        id: 10,
        text: "science experiment day",
        category: "long_term",
        list_type: "activities_with_family"
      },
      {
        id: 11,
        text: "guitar practice",
        category: "short_term",
        list_type: "projects_or_hobbies"
      },
      {
        id: 12,
        text: "drawing comic strips",
        category: "short_term",
        list_type: "projects_or_hobbies"
      },
      {
        id: 13,
        text: "basic chords on guitar",
        category: "short_term",
        list_type: "skills_to_practice"
      },
      {
        id: 14,
        text: "coloring and shading techniques",
        category: "short_term",
        list_type: "skills_to_practice"
      }
    ],
    resources: [
      {
        id: 1,
        title: "The Magic School Bus Series",
        url: "https://www.amazon.com/Magic-School-Bus-Collection-Books/dp/B00B5R4K0E",
        category: "long_term"
      },
      {
        id: 2,
        title: "Guitar for Kids: How to Get Started",
        url: "https://www.youtube.com/watch?v=8X0H9wN2qzM",
        category: "long_term"
      },
      {
        id: 3,
        title: "Guitar for Kids by David M. Barrett",
        url: "https://www.amazon.com/Guitar-Kids-David-M-Barrett/dp/0739097547",
        category: "short_term"
      }
    ]
  };

  const getItemsByType = (listType: string) => {
    return explorationData.exploration_items.filter(item => item.list_type === listType);
  };

  const getItemsByCategory = (category: string) => {
    return explorationData.exploration_items.filter(item => item.category === category);
  };

  const getResourcesByCategory = (category: string) => {
    return explorationData.resources.filter(resource => resource.category === category);
  };

  const getTasksByCategory = (category: string) => {
    return explorationData.tasks.filter(task => task.category === category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 p-6 md:p-10">
      <Link to="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Report
        </Button>
      </Link>

      <SectionTitle 
        icon={<Target />} 
        title="Your Adventure Exploration Plan! 🌟" 
        delay={1}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Upcoming Tasks */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-2xl text-primary flex items-center">
              <Calendar className="mr-2" />
              🎯 Your Next Adventures!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {explorationData.tasks.map((task) => (
                <div key={task.id} className="p-4 bg-white/80 rounded-lg border border-primary/10">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-lg font-medium text-gray-800">{task.description}</p>
                    <Badge 
                      variant={task.category === 'short_term' ? 'default' : 'secondary'}
                      className="ml-2"
                    >
                      {task.category === 'short_term' ? 'Soon!' : 'Later'}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.due_in_weeks} weeks
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interests to Explore */}
        <Card className="border-2 border-pink-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
            <CardTitle className="text-2xl text-pink-600 flex items-center">
              <Heart className="mr-2" />
              💖 Cool Things to Explore!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {getItemsByType('interests_to_explore').map((item) => (
                <Badge key={item.id} variant="secondary" className="text-base p-3 bg-pink-50 text-pink-700">
                  {item.text}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fun Skills to Try */}
        <Card className="border-2 border-yellow-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100">
            <CardTitle className="text-2xl text-yellow-600 flex items-center">
              <Star className="mr-2" />
              ⭐ Fun Skills to Try!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {getItemsByType('fun_skills_to_try').map((item) => (
                <div key={item.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activities with Family */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
            <CardTitle className="text-2xl text-green-600 flex items-center">
              <Users className="mr-2" />
              👨‍👩‍👧‍👦 Family Fun Time!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {getItemsByType('activities_with_family').map((item) => (
                <div key={item.id} className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Projects */}
        <Card className="border-2 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-100">
            <CardTitle className="text-2xl text-blue-600 flex items-center">
              <Target className="mr-2" />
              🎨 Projects You're Working On!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-700 mb-3">Current Projects:</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {getItemsByType('projects_or_hobbies').map((item) => (
                    <div key={item.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 mb-3">Skills to Practice:</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {getItemsByType('skills_to_practice').map((item) => (
                    <div key={item.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="border-2 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100">
            <CardTitle className="text-2xl text-purple-600 flex items-center">
              <BookOpen className="mr-2" />
              📚 Cool Resources to Check Out!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {explorationData.resources.map((resource) => (
                <div key={resource.id} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-purple-800 mb-2">{resource.title}</h4>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 underline text-sm"
                      >
                        Check it out! 🔗
                      </a>
                    </div>
                    <Badge 
                      variant={resource.category === 'short_term' ? 'default' : 'secondary'}
                      className="ml-2"
                    >
                      {resource.category === 'short_term' ? 'Now' : 'Later'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Learning Ideas */}
        <Card className="border-2 border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
            <CardTitle className="text-2xl text-orange-600 flex items-center">
              <Star className="mr-2" />
              🚀 Future Learning Adventures!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {getItemsByType('future_learning_ideas').map((item) => (
                <div key={item.id} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-orange-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Back to My Report
            </Button>
          </Link>
          <Link to="/parents">
            <Button size="lg" variant="outline">
              Parent's Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExplorationPlan;