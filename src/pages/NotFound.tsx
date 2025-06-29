import React from 'react';
import { Link } from 'react-router-dom';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft, Search, BookOpen, Users, Wrench } from 'lucide-react';

const NotFound = () => {
  const suggestions = [
    {
      title: "Interactive Roadmap",
      description: "Start your DevOps learning journey with our comprehensive roadmap",
      icon: Home,
      path: "/",
      color: "bg-blue-500"
    },
    {
      title: "Learning Resources",
      description: "Explore curated books, courses, and documentation",
      icon: BookOpen,
      path: "/resources",
      color: "bg-green-500"
    },
    {
      title: "DevOps Tools",
      description: "Discover essential tools for your DevOps pipeline",
      icon: Wrench,
      path: "/tools",
      color: "bg-purple-500"
    },
    {
      title: "Join Community",
      description: "Connect with 10k+ DevOps practitioners worldwide",
      icon: Users,
      path: "/community",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! Page not found
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist. But don't worry, there's plenty to explore in the DevOps Future Pathway!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/" className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <button onClick={() => window.history.back()} className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
        </div>

        {/* Suggested Pages */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Explore These Popular Sections
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className={`w-12 h-12 ${suggestion.color} rounded-lg flex items-center justify-center mb-4`}>
                    <suggestion.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{suggestion.title}</CardTitle>
                  <CardDescription className="text-base">
                    {suggestion.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={suggestion.path}>
                      Explore
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Don't Miss Out on Our DevOps Platform
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals advancing their DevOps skills
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Learning Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">250+</div>
                <div className="text-sm text-gray-600">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">10k+</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/">
                Start Learning Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;