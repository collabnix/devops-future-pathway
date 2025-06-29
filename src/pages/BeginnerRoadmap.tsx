import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Award,
  Code2,
  Server,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BeginnerRoadmap = () => {
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const toggleStepCompletion = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const roadmapSteps = [
    {
      id: 1,
      phase: "Foundation",
      title: "Understanding DevOps Culture",
      duration: "1 week",
      difficulty: "Beginner",
      icon: Users,
      description: "Learn the cultural and philosophical foundations of DevOps",
      skills: [
        "DevOps principles and culture",
        "Collaboration vs traditional silos",
        "Continuous improvement mindset",
        "Communication best practices"
      ],
      resources: [
        { type: "Book", title: "The Phoenix Project", author: "Gene Kim" },
        { type: "Course", title: "DevOps Foundations", platform: "LinkedIn Learning" },
        { type: "Video", title: "What is DevOps?", platform: "YouTube" }
      ]
    },
    {
      id: 2,
      phase: "Foundation",
      title: "Command Line Mastery",
      duration: "2 weeks",
      difficulty: "Beginner",
      icon: Code2,
      description: "Master essential command line operations for DevOps work",
      skills: [
        "Linux/Unix basics",
        "File system navigation",
        "Text processing (grep, sed, awk)",
        "Process management",
        "Environment variables"
      ],
      resources: [
        { type: "Interactive", title: "Linux Journey", platform: "linuxjourney.com" },
        { type: "Book", title: "The Linux Command Line", author: "William Shotts" },
        { type: "Practice", title: "OverTheWire", platform: "overthewire.org" }
      ]
    },
    {
      id: 3,
      phase: "Version Control",
      title: "Git & GitHub Fundamentals",
      duration: "1 week",
      difficulty: "Beginner",
      icon: BookOpen,
      description: "Master version control with Git and collaborative development",
      skills: [
        "Git basics (add, commit, push, pull)",
        "Branching and merging",
        "GitHub workflow",
        "Pull requests and code reviews",
        "Git best practices"
      ],
      resources: [
        { type: "Interactive", title: "Learn Git Branching", platform: "learngitbranching.js.org" },
        { type: "Book", title: "Pro Git", author: "Scott Chacon" },
        { type: "Course", title: "Git Complete", platform: "Udemy" }
      ]
    },
    {
      id: 4,
      phase: "Scripting",
      title: "Bash Scripting Basics",
      duration: "2 weeks",
      difficulty: "Beginner",
      icon: Server,
      description: "Automate tasks with shell scripting",
      skills: [
        "Bash syntax and variables",
        "Conditional statements",
        "Loops and functions",
        "Error handling",
        "Script debugging"
      ],
      resources: [
        { type: "Book", title: "Learning the Bash Shell", author: "Cameron Newham" },
        { type: "Course", title: "Bash Scripting", platform: "Codecademy" },
        { type: "Practice", title: "Bash Scripting Challenges", platform: "HackerRank" }
      ]
    },
    {
      id: 5,
      phase: "Networking",
      title: "Networking Fundamentals",
      duration: "2 weeks",
      difficulty: "Beginner",
      icon: Shield,
      description: "Understanding networking concepts essential for DevOps",
      skills: [
        "OSI model basics",
        "TCP/IP fundamentals",
        "DNS and DHCP",
        "Firewalls and security groups",
        "Load balancing concepts"
      ],
      resources: [
        { type: "Course", title: "Networking Fundamentals", platform: "Pluralsight" },
        { type: "Book", title: "Computer Networking", author: "Kurose & Ross" },
        { type: "Lab", title: "Packet Tracer", platform: "Cisco" }
      ]
    },
    {
      id: 6,
      phase: "Cloud Basics",
      title: "Cloud Computing Introduction",
      duration: "2 weeks",
      difficulty: "Beginner",
      icon: Target,
      description: "Get started with cloud platforms and services",
      skills: [
        "Cloud service models (IaaS, PaaS, SaaS)",
        "AWS/Azure/GCP basics",
        "Virtual machines and storage",
        "Identity and access management",
        "Cloud security basics"
      ],
      resources: [
        { type: "Course", title: "AWS Cloud Practitioner", platform: "AWS Training" },
        { type: "Lab", title: "AWS Free Tier", platform: "AWS" },
        { type: "Book", title: "Cloud Computing Concepts", author: "Dan C. Marinescu" }
      ]
    }
  ];

  const phases = [...new Set(roadmapSteps.map(step => step.phase))];
  const totalSteps = roadmapSteps.length;
  const completedCount = completedSteps.size;
  const progressPercentage = (completedCount / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <RoadmapHeader />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Beginner Roadmap
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Start your DevOps journey with this carefully crafted learning path designed for complete beginners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Target className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <BookOpen className="h-5 w-5 mr-2" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="h-6 w-6" />
              Your Progress
            </CardTitle>
            <CardDescription>
              Track your learning journey through the DevOps beginner roadmap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{totalSteps}</div>
                <div className="text-sm text-gray-600">Total Steps</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">{completedCount}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-gray-600">Progress</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Overall Progress</span>
                <span>{completedCount}/{totalSteps} completed</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Steps */}
        <div className="space-y-6">
          {phases.map((phase, phaseIndex) => (
            <div key={phase}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Phase {phaseIndex + 1}: {phase}
              </h2>
              
              <div className="grid gap-6">
                {roadmapSteps
                  .filter(step => step.phase === phase)
                  .map((step, stepIndex) => {
                    const isCompleted = completedSteps.has(step.id);
                    
                    return (
                      <Card key={step.id} className={`overflow-hidden ${isCompleted ? 'ring-2 ring-green-500' : ''}`}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                isCompleted ? 'bg-green-500' : 'bg-blue-500'
                              }`}>
                                {isCompleted ? (
                                  <CheckCircle className="h-6 w-6 text-white" />
                                ) : (
                                  <step.icon className="h-6 w-6 text-white" />
                                )}
                              </div>
                              <div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <CardDescription className="flex items-center gap-4 mt-2">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {step.duration}
                                  </span>
                                  <Badge variant={step.difficulty === 'Beginner' ? 'secondary' : 'default'}>
                                    {step.difficulty}
                                  </Badge>
                                </CardDescription>
                              </div>
                            </div>
                            <Button
                              variant={isCompleted ? "default" : "outline"}
                              onClick={() => toggleStepCompletion(step.id)}
                              className={isCompleted ? "bg-green-500 hover:bg-green-600" : ""}
                            >
                              {isCompleted ? "Completed" : "Mark Complete"}
                            </Button>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-gray-600 mb-6">{step.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Skills */}
                            <div>
                              <h4 className="font-semibold mb-3">Skills You'll Learn</h4>
                              <ul className="space-y-2">
                                {step.skills.map((skill, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Resources */}
                            <div>
                              <h4 className="font-semibold mb-3">Recommended Resources</h4>
                              <div className="space-y-2">
                                {step.resources.map((resource, index) => (
                                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <Badge variant="outline" className="text-xs mb-1">
                                          {resource.type}
                                        </Badge>
                                        <p className="font-medium text-sm">{resource.title}</p>
                                        <p className="text-xs text-gray-600">
                                          {resource.author || resource.platform}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Step {stepIndex + 1} of {roadmapSteps.filter(s => s.phase === phase).length} in {phase}
                            </span>
                            <Button variant="outline" size="sm">
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl">Ready for the Next Level?</CardTitle>
            <CardDescription>
              Once you've completed the beginner roadmap, explore these advanced paths
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/roadmaps" className="group">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Full DevOps Engineer</h3>
                    <p className="text-sm text-gray-600">Complete end-to-end DevOps mastery</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/roadmaps" className="group">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Cloud Engineer</h3>
                    <p className="text-sm text-gray-600">Specialize in cloud infrastructure</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/roadmaps" className="group">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <Server className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Site Reliability Engineer</h3>
                    <p className="text-sm text-gray-600">Focus on system reliability</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BeginnerRoadmap;
