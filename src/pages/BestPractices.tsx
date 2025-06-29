import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  Code2, 
  GitBranch, 
  Shield, 
  Monitor, 
  Cloud,
  Users,
  Zap,
  BookOpen,
  Lightbulb,
  FileCheck,
  Workflow,
  Database,
  Settings,
  Lock,
  Activity
} from "lucide-react";

const BestPractices = () => {
  const practiceCategories = [
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      icon: <Workflow className="h-6 w-6" />,
      description: "Build robust, scalable, and secure continuous integration and deployment pipelines",
      practices: [
        {
          title: "Pipeline as Code",
          description: "Store pipeline definitions in version control alongside application code",
          importance: "critical",
          details: [
            "Use YAML/JSON files to define pipelines (e.g., .github/workflows, .gitlab-ci.yml)",
            "Version control all pipeline configurations",
            "Apply code review processes to pipeline changes",
            "Implement branch-based pipeline strategies"
          ]
        },
        {
          title: "Fail Fast Principle",
          description: "Run quick tests first to provide rapid feedback to developers",
          importance: "high",
          details: [
            "Start with syntax/linting checks",
            "Run unit tests before integration tests",
            "Use parallel job execution where possible",
            "Set appropriate timeout values for each stage"
          ]
        },
        {
          title: "Immutable Artifacts",
          description: "Create artifacts once and promote them through environments",
          importance: "critical",
          details: [
            "Build artifacts once in the CI pipeline",
            "Use artifact repositories (Nexus, Artifactory)",
            "Tag artifacts with meaningful versions",
            "Never rebuild artifacts for different environments"
          ]
        },
        {
          title: "Environment Parity",
          description: "Keep development, staging, and production environments as similar as possible",
          importance: "high",
          details: [
            "Use Infrastructure as Code for all environments",
            "Maintain consistent configuration across environments",
            "Use the same deployment process for all environments",
            "Regular environment drift detection and remediation"
          ]
        }
      ]
    },
    {
      id: "security",
      title: "DevSecOps",
      icon: <Shield className="h-6 w-6" />,
      description: "Integrate security practices throughout the development lifecycle",
      practices: [
        {
          title: "Shift Left Security",
          description: "Integrate security testing early in the development process",
          importance: "critical",
          details: [
            "Implement pre-commit hooks for security checks",
            "Run SAST (Static Application Security Testing) in CI",
            "Use IDE plugins for real-time security feedback",
            "Conduct regular security training for developers"
          ]
        },
        {
          title: "Secrets Management",
          description: "Never store secrets in code or configuration files",
          importance: "critical",
          details: [
            "Use dedicated secret management tools (HashiCorp Vault, AWS Secrets Manager)",
            "Implement secret rotation policies",
            "Audit secret access and usage",
            "Use temporary credentials where possible"
          ]
        },
        {
          title: "Container Security",
          description: "Secure container images and runtime environments",
          importance: "high",
          details: [
            "Scan container images for vulnerabilities",
            "Use minimal base images (Alpine, distroless)",
            "Run containers as non-root users",
            "Implement pod security policies/standards"
          ]
        },
        {
          title: "Compliance Automation",
          description: "Automate compliance checks and documentation",
          importance: "medium",
          details: [
            "Implement policy as code",
            "Automate compliance reporting",
            "Use tools like Open Policy Agent (OPA)",
            "Maintain audit trails for all changes"
          ]
        }
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      description: "Implement comprehensive monitoring and observability practices",
      practices: [
        {
          title: "Three Pillars of Observability",
          description: "Implement metrics, logs, and traces for complete system visibility",
          importance: "critical",
          details: [
            "Metrics: RED (Rate, Errors, Duration) and USE (Utilization, Saturation, Errors)",
            "Logs: Structured logging with correlation IDs",
            "Traces: Distributed tracing for microservices",
            "Use correlation between all three pillars"
          ]
        },
        {
          title: "SLIs and SLOs",
          description: "Define Service Level Indicators and Objectives based on user experience",
          importance: "high",
          details: [
            "Focus on user-facing metrics",
            "Set realistic and achievable SLOs",
            "Implement error budgets",
            "Regular SLO review and adjustment"
          ]
        },
        {
          title: "Proactive Alerting",
          description: "Configure meaningful alerts that lead to actionable responses",
          importance: "high",
          details: [
            "Alert on symptoms, not causes",
            "Implement alert fatigue prevention",
            "Use escalation policies",
            "Regular alert review and tuning"
          ]
        },
        {
          title: "Monitoring as Code",
          description: "Version control monitoring configurations and dashboards",
          importance: "medium",
          details: [
            "Store dashboard definitions in code",
            "Automate monitoring setup",
            "Implement monitoring for monitoring tools",
            "Use GitOps for monitoring deployment"
          ]
        }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure Management",
      icon: <Database className="h-6 w-6" />,
      description: "Manage infrastructure efficiently and reliably using modern practices",
      practices: [
        {
          title: "Infrastructure as Code (IaC)",
          description: "Manage infrastructure through code and version control",
          importance: "critical",
          details: [
            "Use tools like Terraform, CloudFormation, or Pulumi",
            "Implement state management best practices",
            "Use modules for reusability",
            "Plan before apply, review infrastructure changes"
          ]
        },
        {
          title: "Immutable Infrastructure",
          description: "Replace infrastructure components rather than modifying them",
          importance: "high",
          details: [
            "Use blue-green or rolling deployments",
            "Avoid configuration drift",
            "Implement proper backup and recovery",
            "Use infrastructure versioning"
          ]
        },
        {
          title: "Cost Optimization",
          description: "Continuously monitor and optimize infrastructure costs",
          importance: "medium",
          details: [
            "Implement resource tagging strategies",
            "Use auto-scaling policies",
            "Regular cost reviews and rightsizing",
            "Implement cost alerts and budgets"
          ]
        },
        {
          title: "Disaster Recovery",
          description: "Plan and test disaster recovery procedures",
          importance: "high",
          details: [
            "Implement automated backups",
            "Regular disaster recovery drills",
            "Document recovery procedures",
            "Maintain Recovery Time Objective (RTO) and Recovery Point Objective (RPO)"
          ]
        }
      ]
    },
    {
      id: "collaboration",
      title: "Team Collaboration",
      icon: <Users className="h-6 w-6" />,
      description: "Foster effective collaboration between development and operations teams",
      practices: [
        {
          title: "Shared Responsibility",
          description: "Development and operations teams share responsibility for application lifecycle",
          importance: "critical",
          details: [
            "Developers participate in on-call rotations",
            "Operations teams involved in design decisions",
            "Shared metrics and goals",
            "Cross-functional team formation"
          ]
        },
        {
          title: "Blameless Post-mortems",
          description: "Conduct blame-free incident reviews focused on learning and improvement",
          importance: "high",
          details: [
            "Focus on process and system improvements",
            "Document lessons learned",
            "Share findings across teams",
            "Implement corrective actions"
          ]
        },
        {
          title: "Knowledge Sharing",
          description: "Promote knowledge sharing and documentation across teams",
          importance: "medium",
          details: [
            "Maintain up-to-date documentation",
            "Conduct regular tech talks and demos",
            "Implement pair programming/operations",
            "Create runbooks and playbooks"
          ]
        },
        {
          title: "Continuous Learning",
          description: "Invest in team learning and skill development",
          importance: "medium",
          details: [
            "Regular training and certification programs",
            "Conference attendance and industry engagement",
            "Internal hackathons and innovation time",
            "Mentorship programs"
          ]
        }
      ]
    }
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      case "high": return "text-orange-600 bg-orange-50 border-orange-200";
      case "medium": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case "critical": return <AlertTriangle className="h-4 w-4" />;
      case "high": return <Target className="h-4 w-4" />;
      case "medium": return <CheckCircle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Best Practices
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Proven practices and patterns for building reliable, secure, and scalable systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Reading
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FileCheck className="h-5 w-5 mr-2" />
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">40+ Best Practices</h3>
              <p className="text-gray-600">Comprehensive practices across all DevOps domains</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Proven</h3>
              <p className="text-gray-600">Practices used by leading technology companies</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Actionable Guidance</h3>
              <p className="text-gray-600">Practical steps you can implement immediately</p>
            </CardContent>
          </Card>
        </div>

        {/* Best Practices Sections */}
        <Tabs defaultValue="cicd" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {practiceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {practiceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-lg">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-6">
                {category.practices.map((practice, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-3">
                            {practice.title}
                            <Badge className={`${getImportanceColor(practice.importance)} border`}>
                              {getImportanceIcon(practice.importance)}
                              <span className="ml-1 capitalize">{practice.importance}</span>
                            </Badge>
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {practice.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="details">
                          <AccordionTrigger className="text-left">
                            <span className="flex items-center gap-2">
                              <Settings className="h-4 w-4" />
                              Implementation Details
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {practice.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Reference Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Activity className="h-6 w-6" />
              Quick Reference Checklist
            </CardTitle>
            <CardDescription>
              Essential practices to implement in every DevOps initiative
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-red-600 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Critical (Must Have)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pipeline as Code
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Immutable Artifacts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Secrets Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Infrastructure as Code
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-600 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  High Priority
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Monitoring & Observability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Container Security
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Environment Parity
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Disaster Recovery
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Medium Priority
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cost Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Knowledge Sharing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Compliance Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Continuous Learning
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Implement These Practices Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with critical practices and gradually adopt the rest to build a mature DevOps culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <FileCheck className="h-5 w-5 mr-2" />
              Get Implementation Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Best Practices Discussion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;