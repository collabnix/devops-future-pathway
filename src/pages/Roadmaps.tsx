import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Route, 
  Target, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Code2,
  Cloud,
  Shield,
  Monitor,
  Database,
  Settings,
  Users,
  BookOpen,
  Star,
  TrendingUp,
  Zap
} from "lucide-react";

const Roadmaps = () => {
  const roadmaps = [
    {
      id: "devops-engineer",
      title: "DevOps Engineer Roadmap",
      description: "Complete pathway to becoming a skilled DevOps engineer",
      icon: <Settings className="h-6 w-6" />,
      duration: "6-8 months",
      difficulty: "Intermediate",
      popularity: 95,
      phases: [
        {
          title: "Foundation",
          duration: "4-6 weeks",
          color: "bg-blue-500",
          skills: [
            { name: "Linux Fundamentals", essential: true, time: "2 weeks" },
            { name: "Command Line Mastery", essential: true, time: "1 week" },
            { name: "Networking Basics", essential: true, time: "1 week" },
            { name: "System Administration", essential: false, time: "1 week" }
          ]
        },
        {
          title: "Version Control & Scripting",
          duration: "3-4 weeks",
          color: "bg-green-500",
          skills: [
            { name: "Git & GitHub/GitLab", essential: true, time: "1 week" },
            { name: "Bash Scripting", essential: true, time: "1 week" },
            { name: "Python for DevOps", essential: true, time: "2 weeks" },
            { name: "PowerShell (Windows)", essential: false, time: "1 week" }
          ]
        },
        {
          title: "CI/CD & Automation",
          duration: "4-5 weeks",
          color: "bg-purple-500",
          skills: [
            { name: "Jenkins/GitLab CI", essential: true, time: "2 weeks" },
            { name: "GitHub Actions", essential: true, time: "1 week" },
            { name: "Pipeline as Code", essential: true, time: "1 week" },
            { name: "Automated Testing", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Containerization",
          duration: "4-5 weeks",
          color: "bg-indigo-500",
          skills: [
            { name: "Docker Fundamentals", essential: true, time: "2 weeks" },
            { name: "Kubernetes Basics", essential: true, time: "2 weeks" },
            { name: "Container Security", essential: true, time: "1 week" },
            { name: "Helm Charts", essential: false, time: "1 week" }
          ]
        },
        {
          title: "Infrastructure & Cloud",
          duration: "5-6 weeks",
          color: "bg-orange-500",
          skills: [
            { name: "Infrastructure as Code", essential: true, time: "2 weeks" },
            { name: "Terraform", essential: true, time: "2 weeks" },
            { name: "AWS/Azure/GCP", essential: true, time: "2 weeks" },
            { name: "Configuration Management", essential: false, time: "1 week" }
          ]
        },
        {
          title: "Monitoring & Security",
          duration: "3-4 weeks",
          color: "bg-red-500",
          skills: [
            { name: "Monitoring & Logging", essential: true, time: "2 weeks" },
            { name: "Prometheus & Grafana", essential: true, time: "1 week" },
            { name: "Security Best Practices", essential: true, time: "1 week" },
            { name: "Incident Response", essential: false, time: "1 week" }
          ]
        }
      ]
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer Roadmap", 
      description: "Specialized path for cloud infrastructure and services",
      icon: <Cloud className="h-6 w-6" />,
      duration: "4-6 months",
      difficulty: "Intermediate to Advanced",
      popularity: 88,
      phases: [
        {
          title: "Cloud Fundamentals",
          duration: "3-4 weeks",
          color: "bg-sky-500",
          skills: [
            { name: "Cloud Computing Concepts", essential: true, time: "1 week" },
            { name: "Service Models (IaaS/PaaS/SaaS)", essential: true, time: "1 week" },
            { name: "Cloud Architecture Patterns", essential: true, time: "1 week" },
            { name: "Cost Management", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Major Cloud Platforms",
          duration: "6-8 weeks",
          color: "bg-blue-500",
          skills: [
            { name: "AWS Core Services", essential: true, time: "3 weeks" },
            { name: "Azure Fundamentals", essential: false, time: "2 weeks" },
            { name: "Google Cloud Platform", essential: false, time: "2 weeks" },
            { name: "Multi-cloud Strategies", essential: false, time: "1 week" }
          ]
        },
        {
          title: "Cloud Networking & Security",
          duration: "4-5 weeks",
          color: "bg-green-500",
          skills: [
            { name: "Virtual Networks & VPCs", essential: true, time: "2 weeks" },
            { name: "Load Balancers & CDNs", essential: true, time: "1 week" },
            { name: "Cloud Security", essential: true, time: "2 weeks" },
            { name: "Identity & Access Management", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Serverless & Containers",
          duration: "3-4 weeks",
          color: "bg-purple-500",
          skills: [
            { name: "Serverless Computing", essential: true, time: "2 weeks" },
            { name: "Container Services", essential: true, time: "1 week" },
            { name: "Function as a Service", essential: true, time: "1 week" },
            { name: "Event-Driven Architecture", essential: false, time: "1 week" }
          ]
        },
        {
          title: "Cloud Migration & Optimization",
          duration: "3-4 weeks",
          color: "bg-orange-500",
          skills: [
            { name: "Migration Strategies", essential: true, time: "2 weeks" },
            { name: "Performance Optimization", essential: true, time: "1 week" },
            { name: "Cost Optimization", essential: true, time: "1 week" },
            { name: "Disaster Recovery", essential: true, time: "1 week" }
          ]
        }
      ]
    },
    {
      id: "sre",
      title: "Site Reliability Engineer Roadmap",
      description: "Path to becoming an SRE focused on reliability and performance",
      icon: <Monitor className="h-6 w-6" />,
      duration: "6-9 months", 
      difficulty: "Advanced",
      popularity: 76,
      phases: [
        {
          title: "SRE Foundations",
          duration: "4-5 weeks",
          color: "bg-emerald-500",
          skills: [
            { name: "SRE Principles", essential: true, time: "1 week" },
            { name: "Service Level Objectives", essential: true, time: "1 week" },
            { name: "Error Budgets", essential: true, time: "1 week" },
            { name: "Toil Management", essential: true, time: "1 week" },
            { name: "Reliability Engineering", essential: true, time: "1 week" }
          ]
        },
        {
          title: "System Design & Architecture",
          duration: "6-7 weeks",
          color: "bg-blue-500",
          skills: [
            { name: "Distributed Systems", essential: true, time: "3 weeks" },
            { name: "System Architecture", essential: true, time: "2 weeks" },
            { name: "Performance Engineering", essential: true, time: "2 weeks" },
            { name: "Capacity Planning", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Observability & Monitoring",
          duration: "5-6 weeks",
          color: "bg-purple-500",
          skills: [
            { name: "Monitoring Strategy", essential: true, time: "2 weeks" },
            { name: "Logging & Tracing", essential: true, time: "2 weeks" },
            { name: "Alerting & On-Call", essential: true, time: "1 week" },
            { name: "Observability Tools", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Incident Management",
          duration: "3-4 weeks",
          color: "bg-red-500",
          skills: [
            { name: "Incident Response", essential: true, time: "2 weeks" },
            { name: "Post-Mortem Analysis", essential: true, time: "1 week" },
            { name: "Chaos Engineering", essential: false, time: "1 week" },
            { name: "Crisis Management", essential: true, time: "1 week" }
          ]
        },
        {
          title: "Automation & Optimization",
          duration: "4-5 weeks",
          color: "bg-orange-500",
          skills: [
            { name: "Automation Frameworks", essential: true, time: "2 weeks" },
            { name: "Performance Optimization", essential: true, time: "2 weeks" },
            { name: "Resource Management", essential: true, time: "1 week" },
            { name: "Cost Optimization", essential: false, time: "1 week" }
          ]
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600";
      case "Intermediate": return "text-yellow-600"; 
      case "Advanced": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Route className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Career Roadmaps
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Visual roadmaps to guide your DevOps career journey with structured learning paths
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <MapPin className="h-5 w-5 mr-2" />
                Explore Roadmaps
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="h-5 w-5 mr-2" />
                Find Your Path
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600">Specialized Roadmaps</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Learning Phases</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Skills Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">Visual</div>
            <div className="text-gray-600">Progress Tracking</div>
          </div>
        </div>

        {/* Roadmap Selection */}
        <Tabs defaultValue="devops-engineer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {roadmaps.map((roadmap) => (
              <TabsTrigger key={roadmap.id} value={roadmap.id} className="flex items-center gap-2">
                {roadmap.icon}
                <span className="hidden sm:inline">{roadmap.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roadmaps.map((roadmap) => (
            <TabsContent key={roadmap.id} value={roadmap.id}>
              {/* Roadmap Header */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-600 text-white p-3 rounded-lg">
                        {roadmap.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{roadmap.title}</CardTitle>
                        <CardDescription className="text-lg">{roadmap.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{roadmap.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-gray-500" />
                        <span className={`text-sm font-medium ${getDifficultyColor(roadmap.difficulty)}`}>
                          {roadmap.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{roadmap.popularity}% popularity</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Career Popularity</span>
                      <span className="text-sm text-gray-600">{roadmap.popularity}%</span>
                    </div>
                    <Progress value={roadmap.popularity} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Roadmap Timeline */}
              <div className="space-y-6">
                {roadmap.phases.map((phase, phaseIndex) => (
                  <Card key={phaseIndex} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${phase.color}`}></div>
                          <div>
                            <CardTitle className="text-xl">
                              Phase {phaseIndex + 1}: {phase.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <Clock className="h-4 w-4" />
                              {phase.duration}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {phase.skills.length} skills
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className={`p-4 rounded-lg border-2 ${
                              skill.essential 
                                ? 'border-green-200 bg-green-50' 
                                : 'border-gray-200 bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {skill.essential ? (
                                  <Star className="h-4 w-4 text-green-600" />
                                ) : (
                                  <CheckCircle className="h-4 w-4 text-gray-500" />
                                )}
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <Badge 
                                variant={skill.essential ? "default" : "secondary"} 
                                className="text-xs"
                              >
                                {skill.essential ? "Essential" : "Optional"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="h-3 w-3" />
                              <span>{skill.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            Phase {phaseIndex + 1} • {phase.skills.filter(s => s.essential).length} essential skills
                          </div>
                          <Button variant="outline" size="sm">
                            Start Phase {phaseIndex + 1}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Roadmap Summary */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Roadmap Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {roadmap.phases.length}
                      </div>
                      <div className="text-sm text-gray-600">Total Phases</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {roadmap.phases.reduce((total, phase) => total + phase.skills.filter(s => s.essential).length, 0)}
                      </div>
                      <div className="text-sm text-gray-600">Essential Skills</div>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {roadmap.phases.reduce((total, phase) => total + phase.skills.length, 0)}
                      </div>
                      <div className="text-sm text-gray-600">Total Skills</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t text-center">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Start This Roadmap
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Zap className="h-6 w-6" />
              Accelerate Your Journey
            </CardTitle>
            <CardDescription>
              Additional resources to speed up your learning and career progression
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Learning Resources</h3>
                <p className="text-sm text-gray-600">Curated books, courses, and tutorials</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-sm text-gray-600">Connect with fellow learners</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Practice Labs</h3>
                <p className="text-sm text-gray-600">Hands-on projects and exercises</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Star className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Mentorship</h3>
                <p className="text-sm text-gray-600">Get guidance from experts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Start Your DevOps Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your roadmap and begin building the skills that will advance your career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Route className="h-5 w-5 mr-2" />
              Get Started Now
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

export default Roadmaps;