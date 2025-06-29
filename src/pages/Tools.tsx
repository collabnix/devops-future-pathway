import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Container, 
  GitBranch, 
  Cloud, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  ExternalLink,
  Search,
  Star,
  Users,
  Zap
} from 'lucide-react';

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toolCategories = [
    {
      name: "Containerization",
      icon: Container,
      color: "bg-blue-500",
      tools: [
        {
          name: "Docker",
          description: "Platform for developing, shipping, and running applications in containers",
          category: "Containerization",
          popularity: "Very High",
          difficulty: "Beginner",
          website: "https://www.docker.com/",
          github: "https://github.com/docker",
          logo: "🐳"
        },
        {
          name: "Podman",
          description: "Daemonless container engine for developing, managing, and running OCI containers",
          category: "Containerization",
          popularity: "High",
          difficulty: "Intermediate",
          website: "https://podman.io/",
          github: "https://github.com/containers/podman",
          logo: "🦭"
        }
      ]
    },
    {
      name: "Orchestration",
      icon: Cpu,
      color: "bg-purple-500",
      tools: [
        {
          name: "Kubernetes",
          description: "Open-source container orchestration platform for automating deployment and scaling",
          category: "Orchestration",
          popularity: "Very High",
          difficulty: "Advanced",
          website: "https://kubernetes.io/",
          github: "https://github.com/kubernetes/kubernetes",
          logo: "⚓"
        },
        {
          name: "Docker Swarm",
          description: "Native clustering and orchestration for Docker containers",
          category: "Orchestration",
          popularity: "Medium",
          difficulty: "Intermediate",
          website: "https://docs.docker.com/engine/swarm/",
          github: "https://github.com/docker/swarmkit",
          logo: "🐝"
        },
        {
          name: "Nomad",
          description: "Simple and flexible workload orchestrator by HashiCorp",
          category: "Orchestration",
          popularity: "Medium",
          difficulty: "Intermediate",
          website: "https://www.nomadproject.io/",
          github: "https://github.com/hashicorp/nomad",
          logo: "🎯"
        }
      ]
    },
    {
      name: "CI/CD",
      icon: GitBranch,
      color: "bg-green-500",
      tools: [
        {
          name: "Jenkins",
          description: "Open-source automation server for building, testing, and deploying code",
          category: "CI/CD",
          popularity: "Very High",
          difficulty: "Intermediate",
          website: "https://www.jenkins.io/",
          github: "https://github.com/jenkinsci/jenkins",
          logo: "🏗️"
        },
        {
          name: "GitHub Actions",
          description: "CI/CD platform integrated with GitHub repositories",
          category: "CI/CD",
          popularity: "Very High",
          difficulty: "Beginner",
          website: "https://github.com/features/actions",
          github: "https://github.com/features/actions",
          logo: "⚡"
        },
        {
          name: "GitLab CI/CD",
          description: "Integrated CI/CD platform with GitLab repositories",
          category: "CI/CD",
          popularity: "High",
          difficulty: "Intermediate",
          website: "https://docs.gitlab.com/ee/ci/",
          github: "https://gitlab.com/gitlab-org/gitlab",
          logo: "🦊"
        },
        {
          name: "CircleCI",
          description: "Cloud-based CI/CD platform for fast software delivery",
          category: "CI/CD",
          popularity: "High",
          difficulty: "Beginner",
          website: "https://circleci.com/",
          github: "https://github.com/circleci",
          logo: "⭕"
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      icon: Cloud,
      color: "bg-orange-500",
      tools: [
        {
          name: "Terraform",
          description: "Infrastructure as code tool for building, changing, and versioning infrastructure",
          category: "Infrastructure as Code",
          popularity: "Very High",
          difficulty: "Intermediate",
          website: "https://www.terraform.io/",
          github: "https://github.com/hashicorp/terraform",
          logo: "🏗️"
        },
        {
          name: "Ansible",
          description: "Simple IT automation platform for configuration management and deployment",
          category: "Infrastructure as Code",
          popularity: "Very High",
          difficulty: "Beginner",
          website: "https://www.ansible.com/",
          github: "https://github.com/ansible/ansible",
          logo: "🔴"
        },
        {
          name: "Pulumi",
          description: "Modern infrastructure as code using familiar programming languages",
          category: "Infrastructure as Code",
          popularity: "Medium",
          difficulty: "Intermediate",
          website: "https://www.pulumi.com/",
          github: "https://github.com/pulumi/pulumi",
          logo: "🌊"
        }
      ]
    },
    {
      name: "Monitoring",
      icon: BarChart3,
      color: "bg-red-500",
      tools: [
        {
          name: "Prometheus",
          description: "Open-source monitoring system with time series database",
          category: "Monitoring",
          popularity: "Very High",
          difficulty: "Intermediate",
          website: "https://prometheus.io/",
          github: "https://github.com/prometheus/prometheus",
          logo: "🔥"
        },
        {
          name: "Grafana",
          description: "Multi-platform analytics and monitoring solution",
          category: "Monitoring",
          popularity: "Very High",
          difficulty: "Beginner",
          website: "https://grafana.com/",
          github: "https://github.com/grafana/grafana",
          logo: "📊"
        },
        {
          name: "Datadog",
          description: "Cloud monitoring and analytics platform",
          category: "Monitoring",
          popularity: "High",
          difficulty: "Beginner",
          website: "https://www.datadoghq.com/",
          github: "https://github.com/DataDog",
          logo: "🐕"
        }
      ]
    },
    {
      name: "Security",
      icon: Shield,
      color: "bg-indigo-500",
      tools: [
        {
          name: "Vault",
          description: "Tool for securely accessing secrets and protecting sensitive data",
          category: "Security",
          popularity: "High",
          difficulty: "Advanced",
          website: "https://www.vaultproject.io/",
          github: "https://github.com/hashicorp/vault",
          logo: "🔒"
        },
        {
          name: "Falco",
          description: "Runtime security monitoring for cloud native environments",
          category: "Security",
          popularity: "Medium",
          difficulty: "Advanced",
          website: "https://falco.org/",
          github: "https://github.com/falcosecurity/falco",
          logo: "🦅"
        }
      ]
    }
  ];

  const allTools = toolCategories.flatMap(category => category.tools);
  const categories = ['All', ...toolCategories.map(cat => cat.name)];

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'Very High': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Tools & Technologies</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive catalog of essential DevOps tools organized by category. 
            Find the right tools for your DevOps pipeline and infrastructure needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{tool.logo}</span>
                  <div className="flex gap-1">
                    <Badge className={getPopularityColor(tool.popularity)} variant="outline">
                      <Star className="w-3 h-3 mr-1" />
                      {tool.popularity}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-sm">
                  <Badge className={getDifficultyColor(tool.difficulty)}>
                    {tool.difficulty}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <a 
                      href={tool.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Website
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a 
                      href={tool.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      GitHub
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tools found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Tool Categories Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tool Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {category.tools.length} tool{category.tools.length !== 1 ? 's' : ''} available
                  </p>
                  <Button 
                    onClick={() => setSelectedCategory(category.name)}
                    variant="outline" 
                    size="sm"
                  >
                    View Tools
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Missing a Tool?</h3>
            <p className="text-gray-600 mb-6">
              Help expand our tool catalog! Suggest new tools or improvements to existing entries.
            </p>
            <Button asChild>
              <a 
                href="https://github.com/collabnix/devops-future-pathway/issues/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Suggest Tool
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
