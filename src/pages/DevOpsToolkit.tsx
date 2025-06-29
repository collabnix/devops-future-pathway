import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Search, 
  Star, 
  ExternalLink, 
  Download, 
  Users,
  Zap,
  Code2,
  Cloud,
  Shield,
  Monitor,
  Database,
  Settings,
  GitBranch,
  Server,
  Building,
  Network,
  Lock,
  Activity,
  Globe,
  Workflow,
  FileText,
  BookOpen,
  TrendingUp,
  Award,
  Filter,
  Check,
  X
} from "lucide-react";

const DevOpsToolkit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPricing, setSelectedPricing] = useState("all");

  const toolCategories = [
    { id: "all", name: "All Tools", icon: <Settings className="h-4 w-4" /> },
    { id: "version-control", name: "Version Control", icon: <GitBranch className="h-4 w-4" /> },
    { id: "cicd", name: "CI/CD", icon: <Workflow className="h-4 w-4" /> },
    { id: "containers", name: "Containers", icon: <Server className="h-4 w-4" /> },
    { id: "orchestration", name: "Orchestration", icon: <Network className="h-4 w-4" /> },
    { id: "cloud", name: "Cloud Platforms", icon: <Cloud className="h-4 w-4" /> },
    { id: "monitoring", name: "Monitoring", icon: <Monitor className="h-4 w-4" /> },
    { id: "security", name: "Security", icon: <Shield className="h-4 w-4" /> },
    { id: "infrastructure", name: "Infrastructure", icon: <Building className="h-4 w-4" /> },
    { id: "databases", name: "Databases", icon: <Database className="h-4 w-4" /> }
  ];

  const tools = [
    {
      name: "Docker",
      category: "containers",
      description: "Platform for developing, shipping, and running applications in containers",
      pricing: "free",
      popularity: 95,
      difficulty: "beginner",
      website: "https://docker.com",
      documentation: "https://docs.docker.com",
      github: "https://github.com/docker",
      features: [
        "Container creation and management",
        "Image building and sharing",
        "Multi-platform support",
        "Docker Compose for multi-container apps",
        "Integration with CI/CD pipelines"
      ],
      useCases: [
        "Application containerization",
        "Development environment consistency",
        "Microservices deployment",
        "CI/CD pipeline integration"
      ],
      alternatives: ["Podman", "LXC", "rkt"],
      pros: ["Easy to learn", "Large ecosystem", "Great documentation", "Industry standard"],
      cons: ["Resource overhead", "Security considerations", "Learning curve for complex setups"]
    },
    {
      name: "Kubernetes",
      category: "orchestration",
      description: "Container orchestration platform for automating deployment, scaling, and management",
      pricing: "free",
      popularity: 92,
      difficulty: "advanced",
      website: "https://kubernetes.io",
      documentation: "https://kubernetes.io/docs",
      github: "https://github.com/kubernetes/kubernetes",
      features: [
        "Container orchestration",
        "Service discovery and load balancing",
        "Storage orchestration",
        "Automated rollouts and rollbacks",
        "Self-healing capabilities"
      ],
      useCases: [
        "Large-scale container deployment",
        "Microservices architecture",
        "Multi-cloud deployments",
        "Auto-scaling applications"
      ],
      alternatives: ["Docker Swarm", "Apache Mesos", "Nomad"],
      pros: ["Highly scalable", "Rich ecosystem", "Cloud-agnostic", "Active community"],
      cons: ["Complex setup", "Steep learning curve", "Resource intensive", "Over-engineering for simple apps"]
    },
    {
      name: "Terraform",
      category: "infrastructure",
      description: "Infrastructure as Code tool for building, changing, and versioning infrastructure",
      pricing: "freemium",
      popularity: 89,
      difficulty: "intermediate",
      website: "https://terraform.io",
      documentation: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
      github: "https://github.com/hashicorp/terraform",
      features: [
        "Infrastructure as Code",
        "Multi-cloud support",
        "State management",
        "Resource graph",
        "Plan and apply workflow"
      ],
      useCases: [
        "Cloud infrastructure provisioning",
        "Multi-cloud deployments",
        "Infrastructure automation",
        "Environment replication"
      ],
      alternatives: ["CloudFormation", "Pulumi", "Ansible"],
      pros: ["Cloud-agnostic", "Declarative syntax", "Strong community", "Extensive provider ecosystem"],
      cons: ["State management complexity", "Learning curve", "Limited built-in testing"]
    },
    {
      name: "Jenkins",
      category: "cicd",
      description: "Open-source automation server for building, testing, and deploying code",
      pricing: "free",
      popularity: 87,
      difficulty: "intermediate",
      website: "https://jenkins.io",
      documentation: "https://jenkins.io/doc",
      github: "https://github.com/jenkinsci/jenkins",
      features: [
        "Pipeline as Code",
        "Extensive plugin ecosystem",
        "Distributed builds",
        "Blue Ocean interface",
        "Integration with SCM tools"
      ],
      useCases: [
        "Continuous integration",
        "Automated testing",
        "Deployment automation",
        "Code quality checks"
      ],
      alternatives: ["GitLab CI", "GitHub Actions", "CircleCI", "Azure DevOps"],
      pros: ["Highly extensible", "Large plugin library", "Free and open source", "Mature platform"],
      cons: ["UI can be outdated", "Plugin management complexity", "Maintenance overhead"]
    },
    {
      name: "Prometheus",
      category: "monitoring",
      description: "Systems monitoring and alerting toolkit with time series database",
      pricing: "free",
      popularity: 85,
      difficulty: "intermediate",
      website: "https://prometheus.io",
      documentation: "https://prometheus.io/docs",
      github: "https://github.com/prometheus/prometheus",
      features: [
        "Time series data collection",
        "Powerful query language (PromQL)",
        "Service discovery",
        "Alerting capabilities",
        "Integration with Grafana"
      ],
      useCases: [
        "Application monitoring",
        "Infrastructure monitoring",
        "Performance tracking",
        "SRE and reliability engineering"
      ],
      alternatives: ["Datadog", "New Relic", "Nagios", "Zabbix"],
      pros: ["Powerful query language", "Pull-based model", "Great for microservices", "Strong ecosystem"],
      cons: ["High cardinality challenges", "Storage limitations", "Complex setup for large scale"]
    },
    {
      name: "Ansible",
      category: "infrastructure",
      description: "IT automation tool for configuration management, application deployment, and orchestration",
      pricing: "freemium",
      popularity: 82,
      difficulty: "beginner",
      website: "https://ansible.com",
      documentation: "https://docs.ansible.com",
      github: "https://github.com/ansible/ansible",
      features: [
        "Agentless architecture",
        "YAML-based playbooks",
        "Idempotent operations",
        "Extensive module library",
        "Rolling deployments"
      ],
      useCases: [
        "Configuration management",
        "Application deployment",
        "Infrastructure provisioning",
        "Security automation"
      ],
      alternatives: ["Chef", "Puppet", "SaltStack"],
      pros: ["Easy to learn", "Agentless", "Human-readable YAML", "Large module library"],
      cons: ["Performance at scale", "Limited Windows support", "Verbose for complex tasks"]
    },
    {
      name: "AWS",
      category: "cloud",
      description: "Comprehensive cloud computing platform offering infrastructure and platform services",
      pricing: "paid",
      popularity: 94,
      difficulty: "intermediate",
      website: "https://aws.amazon.com",
      documentation: "https://docs.aws.amazon.com",
      github: "https://github.com/aws",
      features: [
        "Compute services (EC2, Lambda)",
        "Storage services (S3, EBS)",
        "Database services (RDS, DynamoDB)",
        "Networking and CDN",
        "Security and identity services"
      ],
      useCases: [
        "Cloud migration",
        "Scalable web applications",
        "Data processing and analytics",
        "Disaster recovery"
      ],
      alternatives: ["Azure", "Google Cloud", "DigitalOcean"],
      pros: ["Comprehensive service offering", "Global infrastructure", "Mature platform", "Strong ecosystem"],
      cons: ["Complex pricing", "Vendor lock-in", "Learning curve", "Cost management challenges"]
    },
    {
      name: "GitLab",
      category: "cicd",
      description: "Complete DevOps platform with Git repository management and CI/CD capabilities",
      pricing: "freemium",
      popularity: 79,
      difficulty: "intermediate",
      website: "https://gitlab.com",
      documentation: "https://docs.gitlab.com",
      github: "https://gitlab.com/gitlab-org/gitlab",
      features: [
        "Git repository hosting",
        "Built-in CI/CD",
        "Issue tracking",
        "Security scanning",
        "Container registry"
      ],
      useCases: [
        "Source code management",
        "CI/CD pipelines",
        "DevOps workflow automation",
        "Security and compliance"
      ],
      alternatives: ["GitHub", "Bitbucket", "Azure DevOps"],
      pros: ["All-in-one platform", "Built-in CI/CD", "Security features", "Self-hosted option"],
      cons: ["Resource intensive", "Complex for simple needs", "Interface can be overwhelming"]
    },
    {
      name: "Grafana",
      category: "monitoring",
      description: "Analytics and interactive visualization web application for monitoring data",
      pricing: "freemium",
      popularity: 83,
      difficulty: "beginner",
      website: "https://grafana.com",
      documentation: "https://grafana.com/docs",
      github: "https://github.com/grafana/grafana",
      features: [
        "Rich visualization options",
        "Multi-data source support",
        "Alerting and notifications",
        "Dashboard sharing",
        "Plugin ecosystem"
      ],
      useCases: [
        "Metrics visualization",
        "Performance dashboards",
        "Business intelligence",
        "Real-time monitoring"
      ],
      alternatives: ["Kibana", "Tableau", "Datadog", "New Relic"],
      pros: ["Beautiful visualizations", "Multiple data sources", "Easy to use", "Strong community"],
      cons: ["Limited data processing", "Dashboard management at scale", "Performance with large datasets"]
    },
    {
      name: "HashiCorp Vault",
      category: "security",
      description: "Tool for securely accessing secrets, encryption as a service, and privileged access management",
      pricing: "freemium",
      popularity: 76,
      difficulty: "advanced",
      website: "https://vaultproject.io",
      documentation: "https://vaultproject.io/docs",
      github: "https://github.com/hashicorp/vault",
      features: [
        "Secret management",
        "Dynamic secrets",
        "Encryption as a service",
        "Identity-based access",
        "Audit logging"
      ],
      useCases: [
        "Secret management",
        "Certificate management",
        "Encryption services",
        "Identity and access management"
      ],
      alternatives: ["AWS Secrets Manager", "Azure Key Vault", "CyberArk"],
      pros: ["Comprehensive security features", "Multi-cloud support", "Dynamic secrets", "Strong encryption"],
      cons: ["Complex setup", "Learning curve", "Operational overhead", "High availability challenges"]
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesPricing = selectedPricing === "all" || tool.pricing === selectedPricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "free": return "bg-green-100 text-green-800";
      case "freemium": return "bg-blue-100 text-blue-800";
      case "paid": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return "text-green-600";
    if (popularity >= 80) return "text-yellow-600";
    return "text-orange-600";
  };

  const topCategories = [
    { name: "CI/CD Tools", count: tools.filter(t => t.category === "cicd").length, icon: <Workflow className="h-5 w-5" /> },
    { name: "Container Tools", count: tools.filter(t => t.category === "containers").length, icon: <Server className="h-5 w-5" /> },
    { name: "Cloud Platforms", count: tools.filter(t => t.category === "cloud").length, icon: <Cloud className="h-5 w-5" /> },
    { name: "Monitoring Tools", count: tools.filter(t => t.category === "monitoring").length, icon: <Monitor className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Settings className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Toolkit
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive directory of DevOps tools with comparisons, use cases, and implementation guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Tools
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="h-5 w-5 mr-2" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">{tools.length}</div>
            <div className="text-gray-600">Total Tools</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{toolCategories.length - 1}</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">{tools.filter(t => t.pricing === "free").length}</div>
            <div className="text-gray-600">Free Tools</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">Updated</div>
            <div className="text-gray-600">Regularly</div>
          </div>
        </div>

        {/* Top Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Popular Categories
            </CardTitle>
            <CardDescription>Most essential DevOps tool categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topCategories.map((category, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 cursor-pointer hover:border-cyan-300 transition-colors"
                  onClick={() => setSelectedCategory(category.name.toLowerCase().split(' ')[0])}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-cyan-600">
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600">{category.count}</div>
                  <div className="text-sm text-gray-600">tools available</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Find Your Tools
            </CardTitle>
            <CardDescription>Search and filter tools by category, pricing, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search tools by name, category, or description..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div>
                <div className="text-sm font-medium mb-2">Category</div>
                <div className="flex flex-wrap gap-2">
                  {toolCategories.map((category) => (
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
              </div>

              {/* Pricing Filter */}
              <div>
                <div className="text-sm font-medium mb-2">Pricing</div>
                <div className="flex gap-2">
                  {["all", "free", "freemium", "paid"].map((pricing) => (
                    <Button
                      key={pricing}
                      variant={selectedPricing === pricing ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPricing(pricing)}
                      className="capitalize"
                    >
                      {pricing}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-sm text-gray-600">
                  Showing {filteredTools.length} of {tools.length} tools
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedPricing("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools Grid */}
        <div className="space-y-6">
          {filteredTools.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </CardContent>
            </Card>
          ) : (
            filteredTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Code2 className="h-6 w-6 text-cyan-600" />
                        {tool.name}
                        <div className="flex gap-2">
                          <Badge className={getPricingColor(tool.pricing)}>
                            {tool.pricing}
                          </Badge>
                          <Badge className={getDifficultyColor(tool.difficulty)}>
                            {tool.difficulty}
                          </Badge>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {tool.description}
                      </CardDescription>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className={`font-bold ${getPopularityColor(tool.popularity)}`}>
                          {tool.popularity}%
                        </span>
                        <span className="text-sm text-gray-500">popularity</span>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {tool.category.replace("-", " ")}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="comparison">Comparison</TabsTrigger>
                      <TabsTrigger value="resources">Resources</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Use Cases</h4>
                          <div className="space-y-2">
                            {tool.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {tool.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="features" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Pros</h4>
                          <div className="space-y-2">
                            {tool.pros.map((pro, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600">Cons</h4>
                          <div className="space-y-2">
                            {tool.cons.map((con, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="comparison" className="mt-4">
                      <div>
                        <h4 className="font-semibold mb-3">Alternative Tools</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tool.alternatives.map((alt, idx) => (
                            <Badge key={idx} variant="secondary">
                              {alt}
                            </Badge>
                          ))}
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-sm">
                            <strong>When to choose {tool.name}:</strong> Consider this tool when you need {tool.useCases[0].toLowerCase()} 
                            and value {tool.pros[0].toLowerCase()}. It's particularly well-suited for teams looking for {tool.pros[1]?.toLowerCase() || "robust functionality"}.
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="resources" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                          <Globe className="h-5 w-5" />
                          <span>Official Website</span>
                        </Button>
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                          <FileText className="h-5 w-5" />
                          <span>Documentation</span>
                        </Button>
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                          <GitBranch className="h-5 w-5" />
                          <span>Source Code</span>
                        </Button>
                      </div>
                      
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Getting Started</h5>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>1. Visit the official website and documentation</div>
                          <div>2. Follow the installation guide for your platform</div>
                          <div>3. Complete the getting started tutorial</div>
                          <div>4. Join the community forums and Discord/Slack</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {tool.difficulty} difficulty • {tool.popularity}% popularity
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Star className="h-4 w-4 mr-2" />
                          Add to Favorites
                        </Button>
                        <Button size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Tool Comparison */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Activity className="h-6 w-6" />
              Quick Tool Comparison
            </CardTitle>
            <CardDescription>
              Compare popular tools in each category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-600" />
                  Container Tools
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Docker</span>
                    <Badge className="bg-green-100 text-green-800">Most Popular</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Podman</span>
                    <Badge variant="secondary">Secure</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>LXC</span>
                    <Badge variant="secondary">Lightweight</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-green-600" />
                  CI/CD Tools
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Jenkins</span>
                    <Badge className="bg-green-100 text-green-800">Most Flexible</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>GitLab CI</span>
                    <Badge variant="secondary">Integrated</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>GitHub Actions</span>
                    <Badge variant="secondary">Simple</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-purple-600" />
                  Cloud Platforms
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>AWS</span>
                    <Badge className="bg-green-100 text-green-800">Market Leader</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Azure</span>
                    <Badge variant="secondary">Enterprise</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>GCP</span>
                    <Badge variant="secondary">AI/ML</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-orange-600" />
                  Monitoring Tools
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Prometheus</span>
                    <Badge className="bg-green-100 text-green-800">Open Source</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Datadog</span>
                    <Badge variant="secondary">SaaS</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>New Relic</span>
                    <Badge variant="secondary">APM</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Build Your DevOps Toolkit</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with the essential tools and gradually expand your toolkit based on your team's needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Download className="h-5 w-5 mr-2" />
              Download Tool Guide
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

export default DevOpsToolkit;