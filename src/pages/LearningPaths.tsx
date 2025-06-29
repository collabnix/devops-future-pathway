import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Cloud, 
  Shield, 
  GitBranch, 
  Database, 
  Monitor, 
  Settings,
  BookOpen,
  Clock,
  Users,
  Trophy,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb
} from "lucide-react";

const LearningPaths = () => {
  const learningPaths = [
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      description: "Master the core DevOps practices and tools for CI/CD, automation, and infrastructure management",
      icon: <Settings className="h-6 w-6" />,
      duration: "6-8 months",
      difficulty: "Intermediate",
      students: "12,450",
      completionRate: 85,
      modules: [
        { name: "Linux Fundamentals", duration: "2 weeks", status: "available" },
        { name: "Version Control with Git", duration: "1 week", status: "available" },
        { name: "Scripting (Bash/Python)", duration: "3 weeks", status: "available" },
        { name: "CI/CD Pipelines", duration: "4 weeks", status: "available" },
        { name: "Docker & Containerization", duration: "3 weeks", status: "available" },
        { name: "Kubernetes Orchestration", duration: "4 weeks", status: "available" },
        { name: "Infrastructure as Code", duration: "3 weeks", status: "available" },
        { name: "Monitoring & Logging", duration: "2 weeks", status: "available" },
        { name: "Cloud Platforms (AWS/Azure)", duration: "4 weeks", status: "available" }
      ]
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      description: "Specialize in cloud infrastructure, migration strategies, and cloud-native technologies",
      icon: <Cloud className="h-6 w-6" />,
      duration: "4-6 months",
      difficulty: "Intermediate to Advanced",
      students: "8,320",
      completionRate: 78,
      modules: [
        { name: "Cloud Computing Fundamentals", duration: "2 weeks", status: "available" },
        { name: "AWS/Azure/GCP Essentials", duration: "4 weeks", status: "available" },
        { name: "Cloud Security Basics", duration: "2 weeks", status: "available" },
        { name: "Serverless Computing", duration: "3 weeks", status: "available" },
        { name: "Cloud Storage Solutions", duration: "2 weeks", status: "available" },
        { name: "Cloud Networking", duration: "3 weeks", status: "available" },
        { name: "Cloud Migration Strategies", duration: "2 weeks", status: "available" },
        { name: "Cost Optimization", duration: "1 week", status: "available" }
      ]
    },
    {
      id: "security-engineer",
      title: "DevSecOps Engineer",
      description: "Integrate security practices into DevOps workflows and build secure CI/CD pipelines",
      icon: <Shield className="h-6 w-6" />,
      duration: "5-7 months",
      difficulty: "Advanced",
      students: "5,680",
      completionRate: 72,
      modules: [
        { name: "Cybersecurity Fundamentals", duration: "3 weeks", status: "available" },
        { name: "Secure Coding Practices", duration: "2 weeks", status: "available" },
        { name: "Container Security", duration: "2 weeks", status: "available" },
        { name: "Security Testing & SAST/DAST", duration: "3 weeks", status: "available" },
        { name: "Compliance & Governance", duration: "2 weeks", status: "available" },
        { name: "Incident Response", duration: "2 weeks", status: "available" },
        { name: "Security Monitoring", duration: "2 weeks", status: "available" },
        { name: "Threat Modeling", duration: "1 week", status: "available" }
      ]
    },
    {
      id: "sre",
      title: "Site Reliability Engineer (SRE)",
      description: "Focus on system reliability, performance optimization, and operational excellence",
      icon: <Monitor className="h-6 w-6" />,
      duration: "6-9 months",
      difficulty: "Advanced",
      students: "4,890",
      completionRate: 68,
      modules: [
        { name: "SRE Principles & Practices", duration: "2 weeks", status: "available" },
        { name: "System Design & Architecture", duration: "4 weeks", status: "available" },
        { name: "Monitoring & Observability", duration: "3 weeks", status: "available" },
        { name: "Incident Management", duration: "2 weeks", status: "available" },
        { name: "Capacity Planning", duration: "2 weeks", status: "available" },
        { name: "Performance Optimization", duration: "3 weeks", status: "available" },
        { name: "Automation & Toil Reduction", duration: "2 weeks", status: "available" },
        { name: "Error Budgets & SLIs/SLOs", duration: "1 week", status: "available" }
      ]
    },
    {
      id: "platform-engineer",
      title: "Platform Engineer",
      description: "Build and maintain internal developer platforms and infrastructure abstractions",
      icon: <Database className="h-6 w-6" />,
      duration: "7-10 months",
      difficulty: "Advanced",
      students: "3,420",
      completionRate: 65,
      modules: [
        { name: "Platform Engineering Fundamentals", duration: "2 weeks", status: "available" },
        { name: "Kubernetes Platform Building", duration: "4 weeks", status: "available" },
        { name: "Developer Experience (DX)", duration: "2 weeks", status: "available" },
        { name: "Service Mesh & APIs", duration: "3 weeks", status: "available" },
        { name: "Internal Developer Portals", duration: "2 weeks", status: "available" },
        { name: "GitOps & Configuration Management", duration: "3 weeks", status: "available" },
        { name: "Multi-tenancy & Resource Management", duration: "2 weeks", status: "available" },
        { name: "Platform Security & Compliance", duration: "2 weeks", status: "available" }
      ]
    },
    {
      id: "beginner",
      title: "DevOps Beginner Track",
      description: "Start your DevOps journey with fundamental concepts and hands-on practices",
      icon: <BookOpen className="h-6 w-6" />,
      duration: "3-4 months",
      difficulty: "Beginner",
      students: "18,750",
      completionRate: 92,
      modules: [
        { name: "What is DevOps?", duration: "1 week", status: "available" },
        { name: "Command Line Basics", duration: "2 weeks", status: "available" },
        { name: "Version Control Essentials", duration: "2 weeks", status: "available" },
        { name: "Basic Scripting", duration: "2 weeks", status: "available" },
        { name: "Introduction to Containers", duration: "2 weeks", status: "available" },
        { name: "Basic Cloud Concepts", duration: "1 week", status: "available" },
        { name: "Simple CI/CD", duration: "2 weeks", status: "available" },
        { name: "Monitoring Basics", duration: "1 week", status: "available" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCompletionColor = (rate: number) => {
    if (rate >= 80) return "bg-green-500";
    if (rate >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Learning Paths
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Structured career paths to guide your DevOps journey from beginner to expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Lightbulb className="h-5 w-5 mr-2" />
                Find Your Path
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse All Paths
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Learning Paths</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">53K+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
            <div className="text-gray-600">Avg Completion</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">120+</div>
            <div className="text-gray-600">Hours Content</div>
          </div>
        </div>

        {/* Learning Paths Grid */}
        <div className="space-y-8">
          {learningPaths.map((path) => (
            <Card key={path.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      {path.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{path.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{path.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={`${getDifficultyColor(path.difficulty)} border-0`}>
                    {path.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600">Duration: {path.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{path.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{path.completionRate}% completion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress 
                      value={path.completionRate} 
                      className={`h-2 ${getCompletionColor(path.completionRate)}`}
                    />
                  </div>
                </div>

                <Tabs defaultValue="modules" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                    <TabsTrigger value="skills">Skills You'll Gain</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="modules" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {path.modules.map((module, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <div>
                              <div className="font-medium text-sm">{module.name}</div>
                              <div className="text-xs text-gray-500">{module.duration}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="skills" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {path.id === "devops-engineer" && (
                        <>
                          <Badge variant="secondary">CI/CD Pipelines</Badge>
                          <Badge variant="secondary">Docker</Badge>
                          <Badge variant="secondary">Kubernetes</Badge>
                          <Badge variant="secondary">Infrastructure as Code</Badge>
                          <Badge variant="secondary">Monitoring</Badge>
                          <Badge variant="secondary">Cloud Platforms</Badge>
                          <Badge variant="secondary">Scripting</Badge>
                          <Badge variant="secondary">Linux Administration</Badge>
                        </>
                      )}
                      {path.id === "cloud-engineer" && (
                        <>
                          <Badge variant="secondary">AWS/Azure/GCP</Badge>
                          <Badge variant="secondary">Serverless</Badge>
                          <Badge variant="secondary">Cloud Security</Badge>
                          <Badge variant="secondary">Cloud Migration</Badge>
                          <Badge variant="secondary">Cost Optimization</Badge>
                          <Badge variant="secondary">Cloud Networking</Badge>
                          <Badge variant="secondary">Storage Solutions</Badge>
                        </>
                      )}
                      {path.id === "security-engineer" && (
                        <>
                          <Badge variant="secondary">Security Testing</Badge>
                          <Badge variant="secondary">SAST/DAST</Badge>
                          <Badge variant="secondary">Container Security</Badge>
                          <Badge variant="secondary">Compliance</Badge>
                          <Badge variant="secondary">Incident Response</Badge>
                          <Badge variant="secondary">Threat Modeling</Badge>
                          <Badge variant="secondary">Security Monitoring</Badge>
                        </>
                      )}
                      {path.id === "sre" && (
                        <>
                          <Badge variant="secondary">System Design</Badge>
                          <Badge variant="secondary">Observability</Badge>
                          <Badge variant="secondary">Incident Management</Badge>
                          <Badge variant="secondary">Performance Optimization</Badge>
                          <Badge variant="secondary">SLIs/SLOs</Badge>
                          <Badge variant="secondary">Capacity Planning</Badge>
                          <Badge variant="secondary">Automation</Badge>
                        </>
                      )}
                      {path.id === "platform-engineer" && (
                        <>
                          <Badge variant="secondary">Platform Design</Badge>
                          <Badge variant="secondary">Developer Experience</Badge>
                          <Badge variant="secondary">Kubernetes</Badge>
                          <Badge variant="secondary">Service Mesh</Badge>
                          <Badge variant="secondary">GitOps</Badge>
                          <Badge variant="secondary">Multi-tenancy</Badge>
                          <Badge variant="secondary">API Design</Badge>
                        </>
                      )}
                      {path.id === "beginner" && (
                        <>
                          <Badge variant="secondary">Command Line</Badge>
                          <Badge variant="secondary">Git</Badge>
                          <Badge variant="secondary">Basic Scripting</Badge>
                          <Badge variant="secondary">Containers</Badge>
                          <Badge variant="secondary">Cloud Basics</Badge>
                          <Badge variant="secondary">CI/CD Basics</Badge>
                          <Badge variant="secondary">Monitoring</Badge>
                        </>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-500">
                    {path.modules.length} modules • {path.duration}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Start Learning
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your DevOps Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose a learning path that matches your goals and experience level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Target className="h-5 w-5 mr-2" />
              Take Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;