import React from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Users, FileText, ExternalLink, Clock, User } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Books",
      icon: BookOpen,
      color: "bg-blue-500",
      resources: [
        {
          title: "The Phoenix Project",
          author: "Gene Kim, Kevin Behr, George Spafford",
          description: "A novel about IT, DevOps, and helping your business win",
          level: "Beginner",
          type: "Book",
          url: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592"
        },
        {
          title: "The DevOps Handbook",
          author: "Gene Kim, Patrick Debois",
          description: "How to create world-class agility, reliability, and security in technology organizations",
          level: "Intermediate",
          type: "Book",
          url: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002"
        },
        {
          title: "Accelerate",
          author: "Nicole Forsgren, Jez Humble, Gene Kim",
          description: "Building and scaling high performing technology organizations",
          level: "Advanced",
          type: "Book",
          url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339"
        },
        {
          title: "Site Reliability Engineering",
          author: "Google SRE Team",
          description: "How Google runs production systems",
          level: "Advanced",
          type: "Book",
          url: "https://sre.google/sre-book/table-of-contents/"
        }
      ]
    },
    {
      title: "Video Courses",
      icon: Video,
      color: "bg-green-500",
      resources: [
        {
          title: "Docker Mastery",
          author: "Bret Fisher",
          description: "Complete Docker course with hands-on exercises",
          level: "Beginner",
          type: "Course",
          duration: "19 hours",
          url: "https://www.udemy.com/course/docker-mastery/"
        },
        {
          title: "Kubernetes for DevOps",
          author: "TechWorld with Nana",
          description: "Complete Kubernetes course for beginners",
          level: "Intermediate",
          type: "Course",
          duration: "6 hours",
          url: "https://www.youtube.com/watch?v=X48VuDVv0do"
        },
        {
          title: "AWS DevOps Engineer",
          author: "A Cloud Guru",
          description: "Comprehensive AWS DevOps certification preparation",
          level: "Intermediate",
          type: "Course",
          duration: "25 hours",
          url: "https://acloudguru.com/course/aws-certified-devops-engineer-professional"
        },
        {
          title: "Terraform Associate",
          author: "HashiCorp",
          description: "Infrastructure as Code with Terraform",
          level: "Intermediate",
          type: "Course",
          duration: "12 hours",
          url: "https://www.hashicorp.com/certification/terraform-associate"
        }
      ]
    },
    {
      title: "Documentation",
      icon: FileText,
      color: "bg-purple-500",
      resources: [
        {
          title: "Kubernetes Documentation",
          author: "Kubernetes Community",
          description: "Official Kubernetes documentation and tutorials",
          level: "All Levels",
          type: "Documentation",
          url: "https://kubernetes.io/docs/"
        },
        {
          title: "Docker Documentation",
          author: "Docker Inc.",
          description: "Complete Docker documentation and guides",
          level: "All Levels",
          type: "Documentation",
          url: "https://docs.docker.com/"
        },
        {
          title: "AWS Well-Architected",
          author: "Amazon Web Services",
          description: "Best practices for designing and operating reliable systems",
          level: "Intermediate",
          type: "Documentation",
          url: "https://aws.amazon.com/architecture/well-architected/"
        },
        {
          title: "12-Factor App",
          author: "Heroku",
          description: "Methodology for building software-as-a-service apps",
          level: "Intermediate",
          type: "Methodology",
          url: "https://12factor.net/"
        }
      ]
    },
    {
      title: "Community Resources",
      icon: Users,
      color: "bg-orange-500",
      resources: [
        {
          title: "DevOps Subreddit",
          author: "Reddit Community",
          description: "Active community discussing DevOps practices and tools",
          level: "All Levels",
          type: "Community",
          url: "https://www.reddit.com/r/devops/"
        },
        {
          title: "CNCF Slack",
          author: "Cloud Native Computing Foundation",
          description: "Join thousands of cloud native practitioners",
          level: "All Levels",
          type: "Community",
          url: "https://slack.cncf.io/"
        },
        {
          title: "DevOps Institute",
          author: "DevOps Institute",
          description: "Global learning community for DevOps professionals",
          level: "All Levels",
          type: "Community",
          url: "https://devopsinstitute.com/"
        },
        {
          title: "Collabnix Community",
          author: "Ajeet Singh Raina",
          description: "Docker, Kubernetes, and DevOps community with 10k+ members",
          level: "All Levels",
          type: "Community",
          url: "https://collabnix.com/"
        }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated collection of books, courses, documentation, and community resources to accelerate your DevOps journey.
            All resources are carefully selected and regularly updated by the community.
          </p>
        </div>

        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className={`p-3 ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getLevelColor(resource.level)}>
                          {resource.level}
                        </Badge>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {resource.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{resource.description}</p>
                      {resource.duration && (
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Clock className="w-4 h-4 mr-1" />
                          {resource.duration}
                        </div>
                      )}
                      <Button asChild className="w-full">
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          View Resource
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want to Contribute?</h3>
            <p className="text-gray-600 mb-6">
              Know a great resource that's missing from this list? Help the community by suggesting new resources!
            </p>
            <Button asChild>
              <a 
                href="https://github.com/collabnix/devops-future-pathway/issues/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Suggest Resource
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
