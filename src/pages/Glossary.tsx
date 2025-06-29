import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  Search, 
  BookOpen, 
  Code2, 
  Cloud, 
  Shield, 
  Monitor, 
  GitBranch,
  Database,
  Settings,
  Workflow,
  Users,
  Zap,
  Filter,
  Hash,
  ExternalLink
} from "lucide-react";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const glossaryTerms = [
    {
      term: "Agile Development",
      definition: "A software development methodology that emphasizes iterative development, collaboration, and responding to change over following a rigid plan.",
      category: "methodology",
      tags: ["development", "methodology", "collaboration"],
      relatedTerms: ["Scrum", "Kanban", "DevOps"]
    },
    {
      term: "API Gateway",
      definition: "A server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service and then passing the response back to the requester.",
      category: "architecture",
      tags: ["api", "microservices", "gateway"],
      relatedTerms: ["Microservices", "Load Balancer", "Service Mesh"]
    },
    {
      term: "Artifact Repository",
      definition: "A repository manager that stores and manages binary artifacts such as JARs, WARs, NPM packages, Docker images, and other software components.",
      category: "tools",
      tags: ["artifacts", "repository", "storage"],
      relatedTerms: ["CI/CD", "Package Manager", "Binary Repository"]
    },
    {
      term: "Blue-Green Deployment",
      definition: "A deployment strategy that reduces downtime and risk by running two identical production environments called Blue and Green, switching traffic between them.",
      category: "deployment",
      tags: ["deployment", "strategy", "zero-downtime"],
      relatedTerms: ["Canary Deployment", "Rolling Deployment", "Zero-Downtime Deployment"]
    },
    {
      term: "Canary Deployment",
      definition: "A deployment strategy where new software versions are released to a small subset of users before rolling out to the entire infrastructure.",
      category: "deployment",
      tags: ["deployment", "strategy", "gradual"],
      relatedTerms: ["Blue-Green Deployment", "A/B Testing", "Feature Flags"]
    },
    {
      term: "CI/CD",
      definition: "Continuous Integration/Continuous Deployment - practices that enable frequent, reliable, and automated software releases through automated testing and deployment pipelines.",
      category: "practice",
      tags: ["automation", "pipeline", "integration", "deployment"],
      relatedTerms: ["Pipeline", "Automation", "DevOps"]
    },
    {
      term: "Configuration Drift",
      definition: "The phenomenon where running systems become increasingly different from their original configuration over time due to manual changes and updates.",
      category: "infrastructure",
      tags: ["configuration", "drift", "consistency"],
      relatedTerms: ["Infrastructure as Code", "Immutable Infrastructure", "Configuration Management"]
    },
    {
      term: "Container",
      definition: "A lightweight, standalone, executable package that includes everything needed to run a piece of software: code, runtime, system tools, libraries, and settings.",
      category: "technology",
      tags: ["containerization", "docker", "packaging"],
      relatedTerms: ["Docker", "Kubernetes", "Containerization"]
    },
    {
      term: "Container Orchestration",
      definition: "The automated management of containerized applications, including deployment, scaling, networking, and availability.",
      category: "technology",
      tags: ["containers", "orchestration", "management"],
      relatedTerms: ["Kubernetes", "Docker Swarm", "Container"]
    },
    {
      term: "DevOps",
      definition: "A cultural and professional movement that emphasizes communication, collaboration, integration, and automation between software developers and IT operations teams.",
      category: "methodology",
      tags: ["culture", "collaboration", "methodology"],
      relatedTerms: ["Agile", "CI/CD", "Automation"]
    },
    {
      term: "Docker",
      definition: "A platform that enables developers to package applications and their dependencies into lightweight, portable containers.",
      category: "tools",
      tags: ["containerization", "platform", "packaging"],
      relatedTerms: ["Container", "Kubernetes", "Containerization"]
    },
    {
      term: "GitOps",
      definition: "An operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation.",
      category: "methodology",
      tags: ["git", "operations", "infrastructure"],
      relatedTerms: ["Infrastructure as Code", "Git", "CI/CD"]
    },
    {
      term: "Infrastructure as Code (IaC)",
      definition: "The practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration.",
      category: "practice",
      tags: ["infrastructure", "automation", "code"],
      relatedTerms: ["Terraform", "CloudFormation", "Configuration Management"]
    },
    {
      term: "Kubernetes",
      definition: "An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
      category: "tools",
      tags: ["orchestration", "containers", "platform"],
      relatedTerms: ["Container", "Docker", "Container Orchestration"]
    },
    {
      term: "Load Balancer",
      definition: "A device or software that distributes network or application traffic across multiple servers to ensure no single server bears too much demand.",
      category: "infrastructure",
      tags: ["networking", "distribution", "performance"],
      relatedTerms: ["High Availability", "Scaling", "Traffic Management"]
    },
    {
      term: "Microservices",
      definition: "An architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services.",
      category: "architecture",
      tags: ["architecture", "services", "distributed"],
      relatedTerms: ["Service-Oriented Architecture", "API", "Distributed Systems"]
    },
    {
      term: "Monitoring",
      definition: "The practice of collecting, analyzing, and acting on performance data and logs from applications and infrastructure to ensure system health and performance.",
      category: "practice",
      tags: ["observability", "performance", "health"],
      relatedTerms: ["Observability", "Logging", "Metrics"]
    },
    {
      term: "Observability",
      definition: "The ability to understand the internal state of a system by examining its outputs, typically through logs, metrics, and traces.",
      category: "practice",
      tags: ["monitoring", "visibility", "debugging"],
      relatedTerms: ["Monitoring", "Logging", "Tracing"]
    },
    {
      term: "Pipeline",
      definition: "An automated sequence of processes that takes source code through building, testing, and deployment stages.",
      category: "practice",
      tags: ["automation", "ci/cd", "workflow"],
      relatedTerms: ["CI/CD", "Automation", "Workflow"]
    },
    {
      term: "Service Mesh",
      definition: "A dedicated infrastructure layer that handles service-to-service communication in a microservices architecture, providing features like load balancing, encryption, and observability.",
      category: "architecture",
      tags: ["microservices", "networking", "communication"],
      relatedTerms: ["Microservices", "Istio", "API Gateway"]
    },
    {
      term: "Site Reliability Engineering (SRE)",
      definition: "A discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems to create scalable and highly reliable software systems.",
      category: "methodology",
      tags: ["reliability", "engineering", "operations"],
      relatedTerms: ["DevOps", "Monitoring", "Incident Management"]
    },
    {
      term: "Terraform",
      definition: "An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.",
      category: "tools",
      tags: ["infrastructure", "automation", "cloud"],
      relatedTerms: ["Infrastructure as Code", "Cloud", "Automation"]
    }
  ];

  const categories = [
    { id: "all", name: "All Terms", icon: <BookOpen className="h-4 w-4" /> },
    { id: "methodology", name: "Methodology", icon: <Users className="h-4 w-4" /> },
    { id: "practice", name: "Practices", icon: <Settings className="h-4 w-4" /> },
    { id: "technology", name: "Technology", icon: <Code2 className="h-4 w-4" /> },
    { id: "tools", name: "Tools", icon: <Workflow className="h-4 w-4" /> },
    { id: "architecture", name: "Architecture", icon: <Database className="h-4 w-4" /> },
    { id: "deployment", name: "Deployment", icon: <Zap className="h-4 w-4" /> },
    { id: "infrastructure", name: "Infrastructure", icon: <Cloud className="h-4 w-4" /> }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      methodology: "bg-blue-100 text-blue-800",
      practice: "bg-green-100 text-green-800",
      technology: "bg-purple-100 text-purple-800",
      tools: "bg-orange-100 text-orange-800",
      architecture: "bg-indigo-100 text-indigo-800",
      deployment: "bg-red-100 text-red-800",
      infrastructure: "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Glossary
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive dictionary of DevOps terms, concepts, and technologies
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search terms..." 
                  className="pl-10 py-3 text-gray-900 bg-white/90 border-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">{glossaryTerms.length}+</div>
            <div className="text-gray-600">Terms Defined</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">Updated</div>
            <div className="text-gray-600">Regularly</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">Free</div>
            <div className="text-gray-600">Always</div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter by Category
                </CardTitle>
                <CardDescription>Browse terms by specific DevOps domains</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Hash className="h-4 w-4" />
                Showing {filteredTerms.length} of {glossaryTerms.length} terms
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terms List */}
        <div className="space-y-6">
          {filteredTerms.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No terms found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </CardContent>
            </Card>
          ) : (
            filteredTerms.map((term, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-blue-600 mb-2">{term.term}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {term.definition}
                      </CardDescription>
                    </div>
                    <Badge className={`${getCategoryColor(term.category)} border-0 shrink-0`}>
                      {term.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Related Terms */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Related Terms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm, relatedIndex) => (
                          <Button
                            key={relatedIndex}
                            variant="outline"
                            size="sm"
                            className="text-xs h-7"
                            onClick={() => setSearchTerm(relatedTerm)}
                          >
                            {relatedTerm}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Alphabet Navigation */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hash className="h-5 w-5" />
              Quick Navigation
            </CardTitle>
            <CardDescription>Jump to terms starting with specific letters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
                const hasTerms = glossaryTerms.some(term => term.term.toUpperCase().startsWith(letter));
                return (
                  <Button
                    key={letter}
                    variant={hasTerms ? "outline" : "ghost"}
                    size="sm"
                    disabled={!hasTerms}
                    onClick={() => setSearchTerm("")}
                    className="w-10 h-10 p-0"
                  >
                    {letter}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Contribute Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Help Improve This Glossary</h2>
          <p className="text-xl mb-8 opacity-90">
            Know a term that's missing? Found an error? Help us make this resource better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <BookOpen className="h-5 w-5 mr-2" />
              Suggest a Term
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Discussions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;