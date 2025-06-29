import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { 
  CheckCircle, 
  Circle, 
  Play, 
  Lock, 
  Clock, 
  Book, 
  Star,
  ArrowDown,
  ArrowRight,
  Target,
  Award,
  Users,
  Lightbulb,
  Code2,
  Cloud,
  Shield,
  Monitor,
  Database,
  Settings,
  GitBranch,
  Server,
  Zap,
  Building,
  Rocket
} from "lucide-react";

const InteractiveRoadmaps = () => {
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});
  const [selectedRoadmap, setSelectedRoadmap] = useState("devops-engineer");

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const roadmaps = {
    "devops-engineer": {
      title: "DevOps Engineer Roadmap",
      description: "Complete journey from beginner to professional DevOps engineer",
      icon: <Settings className="h-6 w-6" />,
      estimatedTime: "6-9 months",
      difficulty: "Intermediate",
      steps: [
        {
          id: "foundations",
          title: "Foundation Skills",
          phase: 1,
          duration: "4-6 weeks",
          prerequisite: null,
          description: "Essential fundamentals every DevOps engineer must know",
          skills: [
            {
              id: "linux-basics",
              name: "Linux Fundamentals",
              duration: "2 weeks",
              description: "Command line, file systems, permissions, and basic administration",
              resources: ["Linux Command Line Basics", "File System Navigation", "User Management"],
              projects: ["Set up a Linux VM", "Write bash scripts for automation"],
              essential: true
            },
            {
              id: "networking",
              name: "Networking Concepts",
              duration: "1 week",
              description: "TCP/IP, DNS, HTTP/HTTPS, firewalls, and load balancing",
              resources: ["Network Protocols Guide", "DNS Configuration", "Firewall Rules"],
              projects: ["Configure a simple network", "Set up DNS resolution"],
              essential: true
            },
            {
              id: "scripting",
              name: "Scripting Languages",
              duration: "2 weeks",
              description: "Bash, Python basics for automation and tool creation",
              resources: ["Bash Scripting Guide", "Python for DevOps", "Automation Scripts"],
              projects: ["Write deployment scripts", "Create monitoring scripts"],
              essential: true
            },
            {
              id: "version-control",
              name: "Version Control",
              duration: "1 week",
              description: "Git fundamentals, branching strategies, and collaboration",
              resources: ["Git Basics", "Branching Strategies", "Collaboration Workflows"],
              projects: ["Set up Git repository", "Practice merge conflicts"],
              essential: true
            }
          ]
        },
        {
          id: "cicd",
          title: "CI/CD & Automation",
          phase: 2,
          duration: "6-8 weeks",
          prerequisite: "foundations",
          description: "Build automated pipelines and deployment processes",
          skills: [
            {
              id: "ci-concepts",
              name: "CI/CD Concepts",
              duration: "1 week",
              description: "Understanding continuous integration and deployment principles",
              resources: ["CI/CD Fundamentals", "Pipeline Design", "Best Practices"],
              projects: ["Design a CI/CD workflow", "Document deployment process"],
              essential: true
            },
            {
              id: "jenkins",
              name: "Jenkins",
              duration: "3 weeks",
              description: "Installation, configuration, pipeline creation, and plugins",
              resources: ["Jenkins Setup Guide", "Pipeline as Code", "Plugin Management"],
              projects: ["Build a complete pipeline", "Automate testing and deployment"],
              essential: true
            },
            {
              id: "github-actions",
              name: "GitHub Actions",
              duration: "2 weeks",
              description: "Workflow automation, marketplace actions, and CI/CD",
              resources: ["GitHub Actions Basics", "Workflow Syntax", "Custom Actions"],
              projects: ["Create workflow for web app", "Set up automated testing"],
              essential: false
            },
            {
              id: "gitlab-ci",
              name: "GitLab CI/CD",
              duration: "2 weeks",
              description: "GitLab runners, pipelines, and deployment strategies",
              resources: ["GitLab CI Configuration", "Runner Setup", "Pipeline Optimization"],
              projects: ["Configure GitLab pipeline", "Deploy to multiple environments"],
              essential: false
            }
          ]
        },
        {
          id: "containerization",
          title: "Containerization",
          phase: 3,
          duration: "6-8 weeks",
          prerequisite: "cicd",
          description: "Master containers and orchestration platforms",
          skills: [
            {
              id: "docker-basics",
              name: "Docker Fundamentals",
              duration: "3 weeks",
              description: "Images, containers, volumes, networks, and Dockerfile",
              resources: ["Docker Basics", "Dockerfile Best Practices", "Container Networking"],
              projects: ["Containerize an application", "Create multi-stage builds"],
              essential: true
            },
            {
              id: "docker-compose",
              name: "Docker Compose",
              duration: "1 week",
              description: "Multi-container applications and service orchestration",
              resources: ["Compose File Format", "Service Dependencies", "Environment Management"],
              projects: ["Multi-service application", "Development environment setup"],
              essential: true
            },
            {
              id: "kubernetes-basics",
              name: "Kubernetes Fundamentals",
              duration: "3 weeks",
              description: "Pods, services, deployments, and basic cluster management",
              resources: ["Kubernetes Concepts", "Kubectl Commands", "YAML Manifests"],
              projects: ["Deploy app to K8s", "Configure services and ingress"],
              essential: true
            },
            {
              id: "helm",
              name: "Helm Package Manager",
              duration: "1 week",
              description: "Charts, templates, and application packaging",
              resources: ["Helm Charts", "Template Functions", "Chart Repositories"],
              projects: ["Create Helm chart", "Deploy with Helm"],
              essential: false
            }
          ]
        },
        {
          id: "infrastructure",
          title: "Infrastructure as Code",
          phase: 4,
          duration: "6-8 weeks",
          prerequisite: "containerization",
          description: "Automate infrastructure provisioning and management",
          skills: [
            {
              id: "terraform",
              name: "Terraform",
              duration: "4 weeks",
              description: "Infrastructure provisioning, state management, and modules",
              resources: ["Terraform Basics", "State Management", "Module Development"],
              projects: ["Provision AWS infrastructure", "Create reusable modules"],
              essential: true
            },
            {
              id: "ansible",
              name: "Ansible",
              duration: "2 weeks",
              description: "Configuration management and application deployment",
              resources: ["Ansible Playbooks", "Inventory Management", "Role Development"],
              projects: ["Configure servers", "Automate deployments"],
              essential: true
            },
            {
              id: "cloud-platforms",
              name: "Cloud Platforms",
              duration: "3 weeks",
              description: "AWS/Azure/GCP services and cloud-native architectures",
              resources: ["Cloud Fundamentals", "Service Comparison", "Cost Optimization"],
              projects: ["Deploy to cloud", "Implement auto-scaling"],
              essential: true
            }
          ]
        },
        {
          id: "monitoring",
          title: "Monitoring & Observability",
          phase: 5,
          duration: "4-6 weeks",
          prerequisite: "infrastructure",
          description: "Implement comprehensive monitoring and alerting",
          skills: [
            {
              id: "prometheus",
              name: "Prometheus & Grafana",
              duration: "3 weeks",
              description: "Metrics collection, visualization, and alerting",
              resources: ["Prometheus Configuration", "Grafana Dashboards", "Alert Rules"],
              projects: ["Set up monitoring stack", "Create custom dashboards"],
              essential: true
            },
            {
              id: "logging",
              name: "Centralized Logging",
              duration: "2 weeks",
              description: "ELK/EFK stack for log aggregation and analysis",
              resources: ["Elasticsearch Setup", "Logstash Configuration", "Kibana Dashboards"],
              projects: ["Implement log aggregation", "Create log analysis dashboards"],
              essential: true
            },
            {
              id: "distributed-tracing",
              name: "Distributed Tracing",
              duration: "1 week",
              description: "Jaeger/Zipkin for microservices observability",
              resources: ["Tracing Concepts", "Jaeger Setup", "Trace Analysis"],
              projects: ["Implement tracing", "Analyze service dependencies"],
              essential: false
            }
          ]
        },
        {
          id: "security",
          title: "DevSecOps",
          phase: 6,
          duration: "4-6 weeks",
          prerequisite: "monitoring",
          description: "Integrate security throughout the development lifecycle",
          skills: [
            {
              id: "security-fundamentals",
              name: "Security Fundamentals",
              duration: "2 weeks",
              description: "Security principles, threats, and best practices",
              resources: ["Security Basics", "Threat Modeling", "Secure Coding"],
              projects: ["Conduct security assessment", "Implement security policies"],
              essential: true
            },
            {
              id: "secret-management",
              name: "Secret Management",
              duration: "1 week",
              description: "HashiCorp Vault, AWS Secrets Manager, key rotation",
              resources: ["Vault Configuration", "Secret Rotation", "Access Policies"],
              projects: ["Set up Vault", "Implement secret rotation"],
              essential: true
            },
            {
              id: "security-scanning",
              name: "Security Scanning",
              duration: "2 weeks",
              description: "SAST, DAST, container scanning, and vulnerability management",
              resources: ["Security Scanners", "Vulnerability Assessment", "Compliance"],
              projects: ["Integrate security scans", "Set up vulnerability monitoring"],
              essential: true
            }
          ]
        }
      ]
    },
    "cloud-engineer": {
      title: "Cloud Engineer Roadmap",
      description: "Specialized path for cloud infrastructure and services",
      icon: <Cloud className="h-6 w-6" />,
      estimatedTime: "4-6 months",
      difficulty: "Intermediate to Advanced",
      steps: [
        {
          id: "cloud-foundations",
          title: "Cloud Foundations",
          phase: 1,
          duration: "3-4 weeks",
          prerequisite: null,
          description: "Essential cloud computing concepts and principles",
          skills: [
            {
              id: "cloud-concepts",
              name: "Cloud Computing Fundamentals",
              duration: "1 week",
              description: "Service models, deployment models, and cloud characteristics",
              resources: ["Cloud Computing Basics", "Service Models", "Deployment Strategies"],
              projects: ["Compare cloud providers", "Design cloud architecture"],
              essential: true
            },
            {
              id: "networking-cloud",
              name: "Cloud Networking",
              duration: "2 weeks",
              description: "VPCs, subnets, routing, security groups, and load balancing",
              resources: ["Virtual Networks", "Security Groups", "Load Balancers"],
              projects: ["Design network architecture", "Configure VPC"],
              essential: true
            }
          ]
        },
        {
          id: "aws-mastery",
          title: "AWS Mastery",
          phase: 2,
          duration: "8-10 weeks",
          prerequisite: "cloud-foundations",
          description: "Deep dive into Amazon Web Services",
          skills: [
            {
              id: "aws-core",
              name: "AWS Core Services",
              duration: "4 weeks",
              description: "EC2, S3, VPC, RDS, Lambda, and IAM",
              resources: ["AWS Documentation", "Service Guides", "Best Practices"],
              projects: ["Deploy multi-tier application", "Configure auto-scaling"],
              essential: true
            },
            {
              id: "aws-advanced",
              name: "Advanced AWS Services",
              duration: "4 weeks",
              description: "EKS, ECS, CloudFormation, CloudWatch, and Route 53",
              resources: ["Advanced Services", "Infrastructure as Code", "Monitoring"],
              projects: ["Container orchestration", "Infrastructure automation"],
              essential: true
            }
          ]
        }
      ]
    },
    "sre": {
      title: "Site Reliability Engineer",
      description: "Focus on system reliability and performance optimization",
      icon: <Monitor className="h-6 w-6" />,
      estimatedTime: "6-9 months",
      difficulty: "Advanced",
      steps: [
        {
          id: "sre-foundations",
          title: "SRE Fundamentals",
          phase: 1,
          duration: "4-5 weeks",
          prerequisite: null,
          description: "Core SRE principles and practices",
          skills: [
            {
              id: "sre-principles",
              name: "SRE Principles",
              duration: "2 weeks",
              description: "Error budgets, SLIs, SLOs, and toil management",
              resources: ["SRE Book", "Error Budget Policy", "SLI/SLO Guide"],
              projects: ["Define SLIs/SLOs", "Create error budget policy"],
              essential: true
            },
            {
              id: "system-design",
              name: "System Design",
              duration: "3 weeks",
              description: "Distributed systems, scalability, and reliability patterns",
              resources: ["System Design Basics", "Scalability Patterns", "Reliability Engineering"],
              projects: ["Design scalable system", "Plan for failure scenarios"],
              essential: true
            }
          ]
        }
      ]
    }
  };

  const currentRoadmap = roadmaps[selectedRoadmap as keyof typeof roadmaps];

  const getStepStatus = (stepId: string, prerequisite: string | null) => {
    if (completedSteps[stepId]) return "completed";
    if (!prerequisite || completedSteps[prerequisite]) return "available";
    return "locked";
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "available": return <Circle className="h-6 w-6 text-blue-600" />;
      case "locked": return <Lock className="h-6 w-6 text-gray-400" />;
      default: return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStepBorderColor = (status: string) => {
    switch (status) {
      case "completed": return "border-green-500 bg-green-50";
      case "available": return "border-blue-500 bg-blue-50";
      case "locked": return "border-gray-300 bg-gray-50";
      default: return "border-gray-300 bg-gray-50";
    }
  };

  const calculateProgress = () => {
    const totalSteps = currentRoadmap.steps.length;
    const completed = currentRoadmap.steps.filter(step => completedSteps[step.id]).length;
    return Math.round((completed / totalSteps) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Interactive DevOps Roadmaps
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Step-by-step interactive learning paths with progress tracking and hands-on projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="h-5 w-5 mr-2" />
                Choose Your Path
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Roadmap Selection */}
        <Tabs value={selectedRoadmap} onValueChange={setSelectedRoadmap} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(roadmaps).map(([key, roadmap]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                {roadmap.icon}
                <span className="hidden sm:inline">{roadmap.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <TabsContent key={key} value={key}>
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
                        <span className="text-sm text-gray-600">{roadmap.estimatedTime}</span>
                      </div>
                      <Badge variant="outline">{roadmap.difficulty}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-600">{calculateProgress()}% Complete</span>
                    </div>
                    <Progress value={calculateProgress()} className="h-3" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{roadmap.steps.length}</div>
                      <div className="text-xs text-gray-600">Learning Phases</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {roadmap.steps.reduce((total, step) => total + step.skills.length, 0)}
                      </div>
                      <div className="text-xs text-gray-600">Total Skills</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {roadmap.steps.filter(step => completedSteps[step.id]).length}
                      </div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">
                        {roadmap.steps.reduce((total, step) => total + step.skills.filter(skill => skill.essential).length, 0)}
                      </div>
                      <div className="text-xs text-gray-600">Essential Skills</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Roadmap */}
              <div className="space-y-8">
                {roadmap.steps.map((step, stepIndex) => {
                  const stepStatus = getStepStatus(step.id, step.prerequisite);
                  const isAccessible = stepStatus !== "locked";
                  
                  return (
                    <div key={step.id} className="relative">
                      {/* Connection Line */}
                      {stepIndex < roadmap.steps.length - 1 && (
                        <div className="absolute left-6 top-20 w-0.5 h-16 bg-gray-300 z-0"></div>
                      )}
                      
                      {/* Step Card */}
                      <Card className={`relative z-10 ${getStepBorderColor(stepStatus)} border-2 transition-all duration-300 ${
                        isAccessible ? 'hover:shadow-lg cursor-pointer' : 'opacity-60'
                      }`}>
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div 
                              className="flex-shrink-0 mt-1 cursor-pointer"
                              onClick={() => isAccessible && toggleStep(step.id)}
                            >
                              {getStepIcon(stepStatus)}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div>
                                  <CardTitle className="text-xl flex items-center gap-3">
                                    Phase {step.phase}: {step.title}
                                    {stepStatus === "completed" && (
                                      <Badge className="bg-green-100 text-green-800 border-green-200">
                                        <CheckCircle className="h-3 w-3 mr-1" />
                                        Completed
                                      </Badge>
                                    )}
                                    {stepStatus === "locked" && (
                                      <Badge variant="secondary">
                                        <Lock className="h-3 w-3 mr-1" />
                                        Locked
                                      </Badge>
                                    )}
                                  </CardTitle>
                                  <CardDescription className="text-base mt-2">
                                    {step.description}
                                  </CardDescription>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    {step.duration}
                                  </div>
                                  {step.prerequisite && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      Requires: Phase {roadmap.steps.find(s => s.id === step.prerequisite)?.phase}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        {isAccessible && (
                          <CardContent>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {step.skills.map((skill, skillIndex) => (
                                <Card key={skill.id} className="border border-gray-200">
                                  <CardHeader className="pb-3">
                                    <CardTitle className="text-lg flex items-center justify-between">
                                      <span className="flex items-center gap-2">
                                        {skill.essential ? (
                                          <Star className="h-4 w-4 text-yellow-500" />
                                        ) : (
                                          <Book className="h-4 w-4 text-blue-500" />
                                        )}
                                        {skill.name}
                                      </span>
                                      <Badge variant={skill.essential ? "default" : "secondary"} className="text-xs">
                                        {skill.essential ? "Essential" : "Optional"}
                                      </Badge>
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                      {skill.description}
                                    </CardDescription>
                                  </CardHeader>
                                  
                                  <CardContent className="pt-0">
                                    <div className="space-y-3">
                                      <div className="flex items-center gap-2 text-sm">
                                        <Clock className="h-4 w-4 text-gray-500" />
                                        <span>{skill.duration}</span>
                                      </div>
                                      
                                      <div>
                                        <div className="text-sm font-medium mb-2">Learning Resources</div>
                                        <div className="space-y-1">
                                          {skill.resources.map((resource, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                              <Book className="h-3 w-3" />
                                              {resource}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <div className="text-sm font-medium mb-2">Hands-on Projects</div>
                                        <div className="space-y-1">
                                          {skill.projects.map((project, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                              <Zap className="h-3 w-3" />
                                              {project}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div className="pt-2">
                                        <Button size="sm" className="w-full">
                                          <Play className="h-4 w-4 mr-2" />
                                          Start Learning
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                            
                            {isAccessible && (
                              <div className="mt-6 pt-4 border-t">
                                <div className="flex justify-between items-center">
                                  <div className="text-sm text-gray-600">
                                    Phase {step.phase} • {step.skills.filter(s => s.essential).length} essential skills
                                  </div>
                                  <Button
                                    onClick={() => toggleStep(step.id)}
                                    variant={stepStatus === "completed" ? "outline" : "default"}
                                    className={stepStatus === "completed" ? "text-green-600 border-green-600" : ""}
                                  >
                                    {stepStatus === "completed" ? (
                                      <>
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Completed
                                      </>
                                    ) : (
                                      <>
                                        <Target className="h-4 w-4 mr-2" />
                                        Mark Complete
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        )}
                      </Card>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Features Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lightbulb className="h-6 w-6" />
              Interactive Features
            </CardTitle>
            <CardDescription>
              Everything you need for a successful learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-600">Track your completion status for each step</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Guided Learning</h3>
                <p className="text-sm text-gray-600">Step-by-step progression with prerequisites</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hands-on Projects</h3>
                <p className="text-sm text-gray-600">Real-world projects for practical experience</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Skill Validation</h3>
                <p className="text-sm text-gray-600">Essential vs optional skill identification</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your DevOps Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your path and begin building the skills that will transform your career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Rocket className="h-5 w-5 mr-2" />
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Study Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRoadmaps;