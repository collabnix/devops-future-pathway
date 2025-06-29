import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  Cloud, 
  Container, 
  Shield, 
  ExternalLink, 
  Clock, 
  DollarSign, 
  BookOpen,
  Target,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const Certifications = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');

  const certificationProviders = [
    { name: 'All', icon: Award, color: 'bg-gray-500' },
    { name: 'AWS', icon: Cloud, color: 'bg-orange-500' },
    { name: 'Azure', icon: Cloud, color: 'bg-blue-500' },
    { name: 'GCP', icon: Cloud, color: 'bg-green-500' },
    { name: 'Docker', icon: Container, color: 'bg-blue-600' },
    { name: 'Kubernetes', icon: Target, color: 'bg-purple-500' },
    { name: 'HashiCorp', icon: Shield, color: 'bg-indigo-500' },
    { name: 'Red Hat', icon: Shield, color: 'bg-red-500' }
  ];

  const certifications = [
    {
      name: "AWS Certified DevOps Engineer - Professional",
      provider: "AWS",
      level: "Professional",
      duration: "3 hours",
      cost: "$300",
      validFor: "3 years",
      difficulty: "Advanced",
      description: "Validates expertise in provisioning, operating, and managing distributed application systems on AWS",
      topics: [
        "CI/CD pipelines on AWS",
        "Infrastructure as Code",
        "Monitoring and logging",
        "Security and compliance",
        "Incident and event response"
      ],
      prerequisites: ["Associate level certification", "2+ years AWS experience"],
      studyResources: [
        "AWS Training and Certification",
        "A Cloud Guru courses",
        "Practice exams",
        "Hands-on labs"
      ],
      jobRelevance: 95,
      popularity: "Very High"
    },
    {
      name: "Microsoft Azure DevOps Engineer Expert",
      provider: "Azure",
      level: "Expert",
      duration: "3 hours",
      cost: "$165",
      validFor: "1 year",
      difficulty: "Advanced",
      description: "Demonstrates skills in combining people, processes, and technologies to continuously deliver valuable products",
      topics: [
        "Azure DevOps Services",
        "CI/CD pipeline design",
        "Dependency management",
        "Application infrastructure",
        "Continuous feedback"
      ],
      prerequisites: ["Azure Associate certification", "DevOps experience"],
      studyResources: [
        "Microsoft Learn",
        "Pluralsight courses",
        "Azure DevOps Labs",
        "Practice tests"
      ],
      jobRelevance: 88,
      popularity: "High"
    },
    {
      name: "Google Cloud Professional Cloud DevOps Engineer",
      provider: "GCP",
      level: "Professional",
      duration: "2 hours",
      cost: "$200",
      validFor: "2 years",
      difficulty: "Advanced",
      description: "Validates ability to use Google Cloud to build software delivery pipelines and manage deployments",
      topics: [
        "CI/CD pipeline design",
        "Site Reliability Engineering",
        "Google Cloud Platform services",
        "Monitoring and alerting",
        "Service management"
      ],
      prerequisites: ["3+ years industry experience", "1+ year GCP experience"],
      studyResources: [
        "Google Cloud Training",
        "Coursera courses",
        "Qwiklabs",
        "Official study guide"
      ],
      jobRelevance: 82,
      popularity: "High"
    },
    {
      name: "Docker Certified Associate (DCA)",
      provider: "Docker",
      level: "Associate",
      duration: "90 minutes",
      cost: "$195",
      validFor: "2 years",
      difficulty: "Intermediate",
      description: "Validates foundational Docker skills including image management, container orchestration, and security",
      topics: [
        "Docker fundamentals",
        "Image creation and management",
        "Container orchestration",
        "Storage and volumes",
        "Networking and security"
      ],
      prerequisites: ["6+ months Docker experience"],
      studyResources: [
        "Docker official documentation",
        "Docker training courses",
        "Practice labs",
        "Community resources"
      ],
      jobRelevance: 78,
      popularity: "Medium"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      provider: "Kubernetes",
      level: "Administrator",
      duration: "2 hours",
      cost: "$395",
      validFor: "3 years",
      difficulty: "Advanced",
      description: "Hands-on certification that validates skills in Kubernetes administration and troubleshooting",
      topics: [
        "Cluster architecture and installation",
        "Workloads and scheduling",
        "Services and networking",
        "Storage management",
        "Troubleshooting"
      ],
      prerequisites: ["Kubernetes experience", "Linux/container knowledge"],
      studyResources: [
        "Kubernetes.io documentation",
        "Linux Academy",
        "Practice clusters",
        "CNCF training"
      ],
      jobRelevance: 92,
      popularity: "Very High"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      provider: "HashiCorp",
      level: "Associate",
      duration: "1 hour",
      cost: "$70",
      validFor: "2 years",
      difficulty: "Intermediate",
      description: "Validates foundational knowledge and skills with Terraform infrastructure as code",
      topics: [
        "Infrastructure as Code concepts",
        "Terraform basics",
        "Configuration management",
        "State management",
        "Terraform modules"
      ],
      prerequisites: ["Basic Terraform experience"],
      studyResources: [
        "HashiCorp Learn",
        "Terraform documentation",
        "Practice exercises",
        "Community tutorials"
      ],
      jobRelevance: 85,
      popularity: "High"
    },
    {
      name: "Red Hat Certified Engineer in DevOps",
      provider: "Red Hat",
      level: "Expert",
      duration: "4 hours",
      cost: "$400",
      validFor: "3 years",
      difficulty: "Advanced",
      description: "Performance-based certification focusing on DevOps practices using Red Hat technologies",
      topics: [
        "Ansible automation",
        "Container management",
        "OpenShift platform",
        "CI/CD pipelines",
        "System administration"
      ],
      prerequisites: ["RHCSA certification", "DevOps experience"],
      studyResources: [
        "Red Hat Training",
        "Ansible documentation",
        "OpenShift labs",
        "Practice environments"
      ],
      jobRelevance: 80,
      popularity: "Medium"
    },
    {
      name: "Jenkins Engineer Certification",
      provider: "CloudBees",
      level: "Professional",
      duration: "90 minutes",
      cost: "$300",
      validFor: "2 years",
      difficulty: "Intermediate",
      description: "Validates expertise in Jenkins administration, pipeline creation, and best practices",
      topics: [
        "Jenkins administration",
        "Pipeline as code",
        "Plugin management",
        "Security configuration",
        "Distributed builds"
      ],
      prerequisites: ["Jenkins experience", "CI/CD knowledge"],
      studyResources: [
        "Jenkins documentation",
        "CloudBees training",
        "Practice labs",
        "Community resources"
      ],
      jobRelevance: 75,
      popularity: "Medium"
    }
  ];

  const filteredCertifications = selectedProvider === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.provider === selectedProvider);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'Very High': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const certificationBenefits = [
    {
      title: "Career Advancement",
      icon: TrendingUp,
      description: "Certifications can lead to promotions and higher salaries",
      stats: "25% average salary increase"
    },
    {
      title: "Industry Recognition",
      icon: Award,
      description: "Validates your skills and knowledge to employers",
      stats: "89% of hiring managers value certifications"
    },
    {
      title: "Skill Validation",
      icon: CheckCircle,
      description: "Proves competency in specific technologies and practices",
      stats: "Hands-on practical knowledge"
    },
    {
      title: "Networking",
      icon: Users,
      description: "Connect with certified professionals and communities",
      stats: "Access to exclusive communities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Certifications</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Validate your DevOps skills with industry-recognized certifications. 
            Compare options, understand requirements, and plan your certification journey.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificationBenefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <benefit.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                <div className="text-xs font-medium text-blue-600">{benefit.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="space-y-6">
            {/* Provider Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {certificationProviders.map((provider) => (
                <Button
                  key={provider.name}
                  variant={selectedProvider === provider.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedProvider(provider.name)}
                  className="flex items-center space-x-2"
                >
                  <provider.icon className="w-4 h-4" />
                  <span>{provider.name}</span>
                </Button>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredCertifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="font-semibold">
                        {cert.provider}
                      </Badge>
                      <div className="flex gap-2">
                        <Badge className={getDifficultyColor(cert.difficulty)}>
                          {cert.difficulty}
                        </Badge>
                        <Badge className={getPopularityColor(cert.popularity)}>
                          {cert.popularity}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        {cert.duration}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                        {cert.cost}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-gray-500" />
                        Valid {cert.validFor}
                      </div>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-2 text-gray-500" />
                        {cert.jobRelevance}% job relevance
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Topics</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.topics.slice(0, 3).map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {cert.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Prerequisites */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Prerequisites</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {cert.prerequisites.map((prereq, prereqIndex) => (
                          <li key={prereqIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="study-plan" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Study Plan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A strategic approach to earning DevOps certifications based on your experience level and career goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">Beginner Path</CardTitle>
                  <CardDescription className="text-center">0-2 years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">1. Docker Certified Associate</div>
                      <div className="text-sm text-gray-600">Learn containerization fundamentals</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">2. AWS Cloud Practitioner</div>
                      <div className="text-sm text-gray-600">Understand cloud basics</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">3. HashiCorp Terraform Associate</div>
                      <div className="text-sm text-gray-600">Infrastructure as Code foundations</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <strong>Timeline:</strong> 6-12 months<br/>
                      <strong>Cost:</strong> ~$500-800<br/>
                      <strong>Focus:</strong> Fundamentals & Core Concepts
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">Intermediate Path</CardTitle>
                  <CardDescription className="text-center">2-5 years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">1. Certified Kubernetes Administrator</div>
                      <div className="text-sm text-gray-600">Master container orchestration</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">2. AWS Solutions Architect Associate</div>
                      <div className="text-sm text-gray-600">Cloud architecture skills</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">3. Jenkins Engineer</div>
                      <div className="text-sm text-gray-600">CI/CD pipeline expertise</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <strong>Timeline:</strong> 12-18 months<br/>
                      <strong>Cost:</strong> ~$800-1200<br/>
                      <strong>Focus:</strong> Specialized Skills & Tools
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-center text-purple-700">Advanced Path</CardTitle>
                  <CardDescription className="text-center">5+ years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">1. AWS DevOps Engineer Professional</div>
                      <div className="text-sm text-gray-600">Advanced cloud DevOps</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">2. Azure DevOps Engineer Expert</div>
                      <div className="text-sm text-gray-600">Multi-cloud expertise</div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">3. Red Hat Certified Engineer</div>
                      <div className="text-sm text-gray-600">Enterprise DevOps practices</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <strong>Timeline:</strong> 18-24 months<br/>
                      <strong>Cost:</strong> ~$1000-1500<br/>
                      <strong>Focus:</strong> Leadership & Architecture
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Study Tips */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Study Tips for Success</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                      Preparation Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Create a structured study schedule
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Use multiple learning resources
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Practice with hands-on labs
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Join study groups and forums
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-500" />
                      Exam Day Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Take practice exams regularly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Review documentation thoroughly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Manage your time effectively
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Stay calm and read questions carefully
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Certified?</h3>
            <p className="text-gray-600 mb-6">
              Start with our roadmap to build the foundational skills, then pursue certifications that align with your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/" className="flex items-center justify-center">
                  View Roadmap
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resources" className="flex items-center justify-center">
                  Study Resources
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
