import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Code2, 
  Play, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  BookOpen,
  Terminal,
  Server,
  Cloud,
  Shield,
  Monitor,
  GitBranch,
  Database,
  Settings,
  Award,
  Target,
  ArrowRight,
  ExternalLink,
  Download
} from "lucide-react";

const Labs = () => {
  const labCategories = [
    {
      id: "containers",
      title: "Containers & Orchestration",
      icon: <Server className="h-6 w-6" />,
      description: "Learn Docker, Kubernetes, and container orchestration",
      labCount: 15,
      difficulty: "Beginner to Advanced",
      estimatedTime: "2-4 hours each"
    },
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      icon: <GitBranch className="h-6 w-6" />,
      description: "Build and optimize continuous integration and deployment pipelines",
      labCount: 12,
      difficulty: "Intermediate",
      estimatedTime: "1-3 hours each"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      description: "Work with AWS, Azure, and GCP cloud services",
      labCount: 18,
      difficulty: "Beginner to Advanced",
      estimatedTime: "2-5 hours each"
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      description: "Set up monitoring, logging, and observability solutions",
      labCount: 10,
      difficulty: "Intermediate to Advanced",
      estimatedTime: "2-4 hours each"
    },
    {
      id: "security",
      title: "DevSecOps",
      icon: <Shield className="h-6 w-6" />,
      description: "Implement security practices in DevOps workflows",
      labCount: 8,
      difficulty: "Advanced",
      estimatedTime: "3-6 hours each"
    },
    {
      id: "iac",
      title: "Infrastructure as Code",
      icon: <Settings className="h-6 w-6" />,
      description: "Master Terraform, Ansible, and infrastructure automation",
      labCount: 14,
      difficulty: "Intermediate to Advanced",
      estimatedTime: "2-4 hours each"
    }
  ];

  const popularLabs = [
    {
      title: "Build a Complete CI/CD Pipeline with Jenkins",
      category: "CI/CD",
      difficulty: "Intermediate",
      duration: "3 hours",
      rating: 4.8,
      students: 12450,
      description: "Create a full CI/CD pipeline using Jenkins, Docker, and automated testing",
      objectives: [
        "Set up Jenkins with Docker",
        "Create automated build pipelines",
        "Implement automated testing",
        "Deploy to staging and production"
      ],
      technologies: ["Jenkins", "Docker", "Git", "Maven", "JUnit"],
      prerequisites: ["Basic Linux knowledge", "Git fundamentals", "Java basics"],
      free: true
    },
    {
      title: "Kubernetes Cluster from Scratch",
      category: "Containers",
      difficulty: "Advanced",
      duration: "4 hours",
      rating: 4.9,
      students: 8920,
      description: "Build and configure a production-ready Kubernetes cluster manually",
      objectives: [
        "Set up master and worker nodes",
        "Configure networking with Calico",
        "Deploy applications with Helm",
        "Implement monitoring and logging"
      ],
      technologies: ["Kubernetes", "Docker", "Calico", "Helm", "Prometheus"],
      prerequisites: ["Docker experience", "Linux administration", "Networking basics"],
      free: false
    },
    {
      title: "AWS Infrastructure with Terraform",
      category: "Cloud",
      difficulty: "Intermediate",
      duration: "5 hours",
      rating: 4.7,
      students: 15680,
      description: "Provision and manage AWS infrastructure using Terraform",
      objectives: [
        "Create VPC and networking",
        "Deploy EC2 instances and RDS",
        "Set up load balancers",
        "Implement auto-scaling"
      ],
      technologies: ["Terraform", "AWS", "VPC", "EC2", "RDS"],
      prerequisites: ["AWS account", "Basic cloud knowledge", "Command line experience"],
      free: true
    },
    {
      title: "Complete Monitoring Stack with Prometheus",
      category: "Monitoring",
      difficulty: "Advanced",
      duration: "4 hours",
      rating: 4.6,
      students: 6780,
      description: "Set up comprehensive monitoring with Prometheus, Grafana, and Alertmanager",
      objectives: [
        "Install and configure Prometheus",
        "Set up Grafana dashboards",
        "Configure alerting rules",
        "Monitor applications and infrastructure"
      ],
      technologies: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter"],
      prerequisites: ["Docker knowledge", "Basic monitoring concepts", "Linux experience"],
      free: true
    },
    {
      title: "DevSecOps Pipeline with Security Scanning",
      category: "Security",
      difficulty: "Advanced",
      duration: "6 hours",
      rating: 4.5,
      students: 4320,
      description: "Integrate security testing and scanning into CI/CD pipelines",
      objectives: [
        "Set up SAST and DAST scanning",
        "Implement container security scanning",
        "Configure compliance checks",
        "Create security gates in pipelines"
      ],
      technologies: ["SonarQube", "OWASP ZAP", "Clair", "Jenkins", "Docker"],
      prerequisites: ["CI/CD experience", "Security fundamentals", "Container knowledge"],
      free: false
    },
    {
      title: "GitOps with ArgoCD and Kubernetes",
      category: "CI/CD",
      difficulty: "Advanced",
      duration: "4 hours",
      rating: 4.8,
      students: 7540,
      description: "Implement GitOps workflows using ArgoCD for Kubernetes deployments",
      objectives: [
        "Set up ArgoCD in Kubernetes",
        "Create GitOps repositories",
        "Implement automated deployments",
        "Configure multi-environment promotions"
      ],
      technologies: ["ArgoCD", "Kubernetes", "Git", "Helm", "Kustomize"],
      prerequisites: ["Kubernetes experience", "Git workflows", "YAML knowledge"],
      free: true
    }
  ];

  const practicalScenarios = [
    {
      title: "E-commerce Platform Migration",
      description: "Migrate a legacy e-commerce application to microservices and Kubernetes",
      complexity: "Enterprise",
      duration: "8-12 hours",
      scenario: "multi-part",
      parts: [
        "Assessment and planning",
        "Containerization strategy",
        "Service decomposition",
        "Data migration",
        "Deployment and testing"
      ]
    },
    {
      title: "Startup Infrastructure Setup",
      description: "Build complete infrastructure for a fast-growing startup from scratch",
      complexity: "Mid-size",
      duration: "6-8 hours",
      scenario: "single",
      parts: [
        "Infrastructure planning",
        "CI/CD pipeline setup",
        "Monitoring implementation",
        "Security configuration",
        "Scaling preparation"
      ]
    },
    {
      title: "Financial Services Compliance",
      description: "Implement DevOps practices while meeting strict compliance requirements",
      complexity: "Enterprise",
      duration: "10-15 hours",
      scenario: "multi-part",
      parts: [
        "Compliance assessment",
        "Secure pipeline design",
        "Audit trail implementation",
        "Risk management",
        "Validation and testing"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case "startup": return "bg-blue-100 text-blue-800";
      case "mid-size": return "bg-purple-100 text-purple-800";
      case "enterprise": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hands-on DevOps Labs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Practice DevOps skills with real-world scenarios and guided hands-on exercises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Start Lab
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse All Labs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lab Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">77</div>
            <div className="text-gray-600">Total Labs</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-red-600 mb-2">6</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">4.7★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Lab Categories */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-6 w-6" />
              Lab Categories
            </CardTitle>
            <CardDescription>
              Choose from our comprehensive collection of hands-on DevOps labs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="bg-orange-600 text-white p-2 rounded-lg">
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Labs Available</span>
                        <Badge variant="secondary">{category.labCount}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Difficulty</span>
                        <span className="text-sm font-medium">{category.difficulty}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Time per Lab</span>
                        <span className="text-sm font-medium">{category.estimatedTime}</span>
                      </div>
                      <Button className="w-full mt-4">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Explore Labs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Labs */}
        <Tabs defaultValue="popular" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="popular">Popular Labs</TabsTrigger>
            <TabsTrigger value="scenarios">Real-world Scenarios</TabsTrigger>
            <TabsTrigger value="free">Free Labs</TabsTrigger>
          </TabsList>

          <TabsContent value="popular">
            <div className="space-y-8">
              {popularLabs.map((lab, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-orange-600" />
                          {lab.title}
                          {lab.free && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              FREE
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {lab.description}
                        </CardDescription>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={getDifficultyColor(lab.difficulty)}>
                          {lab.difficulty}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {lab.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {lab.rating} ({lab.students.toLocaleString()} students)
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Lab Objectives */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Learning Objectives
                        </h4>
                        <ul className="space-y-2">
                          {lab.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies & Prerequisites */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Prerequisites</h4>
                          <ul className="space-y-1">
                            {lab.prerequisites.map((prereq, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                {prereq}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-4">
                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-orange-800">Lab Progress</span>
                            <span className="text-sm text-orange-600">0% Complete</span>
                          </div>
                          <Progress value={0} className="h-2" />
                        </div>
                        
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          <Play className="h-4 w-4 mr-2" />
                          Start Lab
                        </Button>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Resources
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <div className="space-y-6">
              {practicalScenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-orange-600" />
                          {scenario.title}
                          <Badge className={getComplexityColor(scenario.complexity)}>
                            {scenario.complexity}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {scenario.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {scenario.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">Scenario Components</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {scenario.parts.map((part, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="bg-orange-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                {idx + 1}
                              </div>
                              <span className="text-sm">{part}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Start Scenario
                        </Button>
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="free">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularLabs.filter(lab => lab.free).map((lab, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Terminal className="h-5 w-5 text-green-600" />
                      {lab.title}
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        FREE
                      </Badge>
                    </CardTitle>
                    <CardDescription>{lab.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{lab.duration}</span>
                        </div>
                        <Badge className={getDifficultyColor(lab.difficulty)}>
                          {lab.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{lab.rating} rating</span>
                        <span className="text-sm text-gray-500">({lab.students.toLocaleString()} students)</span>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Technologies</div>
                        <div className="flex flex-wrap gap-2">
                          {lab.technologies.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {lab.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{lab.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Start Free Lab
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lab Environment Info */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Code2 className="h-6 w-6" />
              Lab Environment Features
            </CardTitle>
            <CardDescription>
              Everything you need for hands-on DevOps learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Terminal className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Cloud-based Labs</h3>
                <p className="text-sm text-gray-600">No local setup required - everything runs in the cloud</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Auto-validation</h3>
                <p className="text-sm text-gray-600">Automatic checking of your progress and solutions</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-sm text-gray-600">Get help from instructors and fellow learners</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Completion Certificates</h3>
                <p className="text-sm text-gray-600">Earn certificates to showcase your skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Start Your Hands-on DevOps Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Practice with real tools and scenarios to build confidence and expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Play className="h-5 w-5 mr-2" />
              Start First Lab
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <BookOpen className="h-5 w-5 mr-2" />
              Browse All Categories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;