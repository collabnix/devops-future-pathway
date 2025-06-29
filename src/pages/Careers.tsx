import React, { useState, useEffect } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Footer } from '../components/Footer';
import JobListing from '../components/JobListing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  BookOpen, 
  ExternalLink,
  Briefcase,
  Clock,
  MapPin,
  Star,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

// Import job listings data
import jobListingsData from '../data/jobListings.json';

const Careers = () => {
  const [jobListings, setJobListings] = useState(jobListingsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to reload job listings (in case the data gets updated)
  const refreshJobListings = async () => {
    setLoading(true);
    try {
      // In a real app, this would make an API call
      // For now, we'll just reload the imported data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setJobListings(jobListingsData);
      setError(null);
    } catch (err) {
      setError('Failed to load job listings');
    } finally {
      setLoading(false);
    }
  };

  const careerPaths = [
    {
      title: "DevOps Engineer",
      level: "Mid-Level",
      salaryRange: "$70k - $130k",
      experience: "2-5 years",
      description: "Build and maintain CI/CD pipelines, automate infrastructure, and bridge development and operations",
      keySkills: ["Docker", "Kubernetes", "AWS/Azure", "Jenkins", "Terraform", "Linux"],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Automate infrastructure provisioning",
        "Monitor and troubleshoot production systems",
        "Collaborate with development teams"
      ],
      growthRate: 85
    },
    {
      title: "Site Reliability Engineer (SRE)",
      level: "Senior",
      salaryRange: "$90k - $180k",
      experience: "3-7 years",
      description: "Ensure system reliability, performance, and scalability while reducing toil through automation",
      keySkills: ["Prometheus", "Grafana", "Python", "Go", "Kubernetes", "Incident Management"],
      responsibilities: [
        "Maintain system reliability and uptime",
        "Implement monitoring and alerting",
        "Perform capacity planning",
        "Lead incident response and post-mortems"
      ],
      growthRate: 92
    },
    {
      title: "Cloud Infrastructure Engineer",
      level: "Mid-Level",
      salaryRange: "$75k - $140k",
      experience: "2-6 years",
      description: "Design, implement, and manage cloud infrastructure using various cloud platforms",
      keySkills: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Networking"],
      responsibilities: [
        "Design cloud architecture solutions",
        "Implement infrastructure as code",
        "Optimize cloud costs and performance",
        "Ensure security and compliance"
      ],
      growthRate: 78
    },
    {
      title: "DevSecOps Engineer",
      level: "Senior",
      salaryRange: "$85k - $160k",
      experience: "3-8 years",
      description: "Integrate security practices into DevOps workflows and ensure secure software delivery",
      keySkills: ["Security Scanning", "Vault", "SAST/DAST", "Compliance", "Docker Security"],
      responsibilities: [
        "Implement security in CI/CD pipelines",
        "Conduct security assessments",
        "Automate security compliance",
        "Incident response and forensics"
      ],
      growthRate: 95
    },
    {
      title: "Platform Engineer",
      level: "Senior",
      salaryRange: "$95k - $170k",
      experience: "4-8 years",
      description: "Build and maintain internal developer platforms to improve developer productivity",
      keySkills: ["Platform Design", "API Development", "Microservices", "Developer Experience"],
      responsibilities: [
        "Design internal developer platforms",
        "Build self-service tools",
        "Improve developer experience",
        "Platform strategy and roadmap"
      ],
      growthRate: 88
    },
    {
      title: "DevOps Consultant",
      level: "Expert",
      salaryRange: "$100k - $200k+",
      experience: "5+ years",
      description: "Help organizations adopt DevOps practices and transform their software delivery processes",
      keySkills: ["Leadership", "Strategy", "Change Management", "Multiple Technologies"],
      responsibilities: [
        "Assess current DevOps maturity",
        "Design transformation strategies",
        "Lead implementation projects",
        "Train and mentor teams"
      ],
      growthRate: 90
    }
  ];

  const skillLevels = [
    {
      level: "Entry Level",
      description: "0-2 years experience",
      skills: [
        "Basic Linux/Unix knowledge",
        "Version control (Git)",
        "Basic scripting (Bash, Python)",
        "Understanding of CI/CD concepts",
        "Cloud basics (AWS/Azure fundamentals)"
      ],
      tips: [
        "Start with fundamental concepts",
        "Build projects on GitHub",
        "Get cloud certifications",
        "Practice with virtual labs"
      ]
    },
    {
      level: "Intermediate",
      description: "2-5 years experience",
      skills: [
        "Container technologies (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform, Ansible)",
        "Monitoring and logging tools",
        "CI/CD pipeline implementation",
        "Cloud platform expertise"
      ],
      tips: [
        "Specialize in specific tools/platforms",
        "Contribute to open source projects",
        "Build end-to-end projects",
        "Learn multiple cloud platforms"
      ]
    },
    {
      level: "Advanced",
      description: "5+ years experience",
      skills: [
        "Architecture and design patterns",
        "Advanced automation and orchestration",
        "Security best practices",
        "Team leadership and mentoring",
        "Strategic planning and roadmaps"
      ],
      tips: [
        "Focus on business impact",
        "Develop leadership skills",
        "Stay updated with industry trends",
        "Build and mentor teams"
      ]
    }
  ];

  const industryInsights = [
    {
      title: "Market Demand",
      icon: TrendingUp,
      value: "87%",
      description: "of companies are adopting DevOps practices",
      color: "text-green-600"
    },
    {
      title: "Average Salary Growth",
      icon: DollarSign,
      value: "25%",
      description: "year-over-year salary increase",
      color: "text-blue-600"
    },
    {
      title: "Job Openings",
      icon: Briefcase,
      value: "150k+",
      description: "DevOps positions available globally",
      color: "text-purple-600"
    },
    {
      title: "Remote Opportunities",
      icon: MapPin,
      value: "78%",
      description: "of DevOps roles offer remote work",
      color: "text-orange-600"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Entry-Level': return 'bg-green-100 text-green-800';
      case 'Mid-Level': return 'bg-blue-100 text-blue-800';
      case 'Senior': return 'bg-purple-100 text-purple-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Career Paths</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore different career opportunities in DevOps, understand salary expectations, 
            and learn what skills you need to advance your career.
          </p>
        </div>

        {/* Current Job Openings Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Current Job Openings</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Last updated: {new Date(jobListings.lastUpdated).toLocaleDateString()}
              </span>
              <Button 
                onClick={refreshJobListings} 
                disabled={loading}
                variant="outline"
                size="sm"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center text-red-600">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>{error}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500" />
              <p className="text-gray-600">Loading job listings...</p>
            </div>
          ) : jobListings.jobs && jobListings.jobs.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {jobListings.jobs.map((job, index) => (
                <JobListing key={job.id || index} job={job} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No job listings available</h3>
                <p className="text-gray-600 mb-4">Check back later for new opportunities</p>
                <Button onClick={refreshJobListings} variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Job listings are automatically updated every 6 hours from multiple sources including kube.careers
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <a href="https://kube.careers" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View More Jobs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/jobs/search/?keywords=devops" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  LinkedIn Jobs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Industry Insights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industryInsights.map((insight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <insight.icon className={`w-8 h-8 mx-auto mb-2 ${insight.color}`} />
                <div className={`text-2xl font-bold ${insight.color} mb-1`}>
                  {insight.value}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Roles</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getLevelColor(career.level)}>
                      {career.level}
                    </Badge>
                    <div className="text-right">
                      <div className="font-bold text-lg text-green-600">{career.salaryRange}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {career.experience}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.keySkills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {career.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Growth Potential</span>
                        <span className="text-sm text-gray-600">{career.growthRate}%</span>
                      </div>
                      <Progress value={career.growthRate} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Development Levels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skill Development Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillLevels.map((level, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    {level.level}
                  </CardTitle>
                  <CardDescription>{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Required Skills</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {level.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <Target className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Career Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {level.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Resume Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  DevOps-focused resume templates and examples to help you stand out.
                </p>
                <Button asChild className="w-full">
                  <a href="/resources" className="flex items-center justify-center">
                    View Templates
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-500" />
                  Interview Prep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Common DevOps interview questions and technical challenges.
                </p>
                <Button asChild className="w-full">
                  <a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Practice Questions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-500" />
                  Job Boards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Find DevOps opportunities on specialized job platforms.
                </p>
                <Button asChild className="w-full">
                  <a href="https://www.linkedin.com/jobs/search/?keywords=devops" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Find Jobs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Your DevOps Journey?</h3>
            <p className="text-gray-600 mb-6">
              Begin with our interactive roadmap and start building the skills that will advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/" className="flex items-center justify-center">
                  Start Learning
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/community" className="flex items-center justify-center">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;