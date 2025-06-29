
import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Footer } from '../components/Footer';
import { RoadmapVisual } from '../components/RoadmapVisual';
import { SkillDetails } from '../components/SkillDetails';
import { ProgressBar } from '../components/ProgressBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { roadmapData } from '../data/roadmapData';
import { 
  BookOpen, 
  Wrench, 
  Users, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Star,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [completedSkills, setCompletedSkills] = useState(new Set());

  const toggleSkillCompletion = (skillId) => {
    const newCompleted = new Set(completedSkills);
    if (newCompleted.has(skillId)) {
      newCompleted.delete(skillId);
    } else {
      newCompleted.add(skillId);
    }
    setCompletedSkills(newCompleted);
  };

  const totalSkills = roadmapData.reduce((acc, category) => acc + category.skills.length, 0);
  const completedCount = completedSkills.size;

  const features = [
    {
      title: "Interactive Roadmap",
      description: "Visual learning path with progress tracking and skill assessment",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      title: "Curated Resources",
      description: "Hand-picked books, courses, and tutorials from industry experts",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      title: "Tool Catalog",
      description: "Comprehensive database of DevOps tools with comparisons",
      icon: Wrench,
      color: "bg-purple-500"
    },
    {
      title: "Career Guidance",
      description: "Salary insights, job roles, and career progression paths",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      title: "Certifications",
      description: "Complete guide to DevOps certifications and study plans",
      icon: Award,
      color: "bg-red-500"
    },
    {
      title: "Active Community",
      description: "Connect with 10k+ DevOps practitioners worldwide",
      icon: Users,
      color: "bg-indigo-500"
    }
  ];

  const quickStats = [
    { label: "Learning Paths", value: "6+", icon: Target },
    { label: "Tools Covered", value: "50+", icon: Wrench },
    { label: "Community Members", value: "10k+", icon: Users },
    { label: "Resources", value: "250+", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master DevOps with Our
            <span className="text-blue-600"> Interactive Roadmap</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your complete guide to becoming a DevOps engineer. Learn at your own pace with 
            curated resources, hands-on labs, and community support.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center">
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/community" className="flex items-center">
                Join Community
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Roadmap */}
        <ProgressBar completed={completedCount} total={totalSkills} />
        <div className="grid lg:grid-cols-3 gap-8 mt-8 mb-16">
          <div className="lg:col-span-2">
            <RoadmapVisual 
              data={roadmapData}
              selectedSkill={selectedSkill}
              onSkillSelect={setSelectedSkill}
              completedSkills={completedSkills}
              onToggleCompletion={toggleSkillCompletion}
            />
          </div>
          <div className="lg:col-span-1">
            <SkillDetails 
              skill={selectedSkill}
              isCompleted={selectedSkill && completedSkills.has(selectedSkill.id)}
              onToggleCompletion={() => selectedSkill && toggleSkillCompletion(selectedSkill.id)}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Everything You Need for DevOps Success
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From beginner basics to advanced practices, we've got you covered with comprehensive resources.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their DevOps journey with our platform.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Link to="/resources" className="group">
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">Learning Resources</h4>
                  <p className="text-sm text-gray-600 mt-2">Books, courses & tutorials</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/tools" className="group">
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Wrench className="w-8 h-8 mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">DevOps Tools</h4>
                  <p className="text-sm text-gray-600 mt-2">Complete tool catalog</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/careers" className="group">
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-purple-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">Career Paths</h4>
                  <p className="text-sm text-gray-600 mt-2">Roles & salary insights</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/certifications" className="group">
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Award className="w-8 h-8 mx-auto mb-3 text-orange-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">Certifications</h4>
                  <p className="text-sm text-gray-600 mt-2">Study plans & guides</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/community" className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Join 10k+ Members
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://github.com/collabnix/devops-future-pathway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View on GitHub
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
