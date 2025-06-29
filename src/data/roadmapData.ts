
import { 
  Server, 
  GitBranch, 
  Cloud, 
  Shield, 
  Monitor, 
  Database, 
  Container, 
  Settings, 
  Code, 
  Terminal,
  Network,
  Lock,
  Activity,
  Zap,
  FileText,
  Globe
} from 'lucide-react';

export const roadmapData = [
  {
    id: 'fundamentals',
    title: 'DevOps Fundamentals',
    description: 'Start with the core concepts and principles of DevOps culture and practices.',
    skills: [
      {
        id: 'devops-culture',
        name: 'DevOps Culture',
        description: 'Understanding DevOps principles, collaboration, and mindset',
        difficulty: 'Beginner',
        icon: Settings,
        keyPoints: [
          'Collaboration between Development and Operations',
          'Continuous Integration and Continuous Deployment',
          'Infrastructure as Code principles',
          'Automation and monitoring practices'
        ],
        resources: [
          {
            title: 'The DevOps Handbook',
            type: 'book',
            url: 'https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002'
          },
          {
            title: 'What is DevOps?',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=_I94-tJlovg'
          }
        ]
      },
      {
        id: 'linux-basics',
        name: 'Linux Fundamentals',
        description: 'Master the command line and Linux system administration',
        difficulty: 'Beginner',
        icon: Terminal,
        keyPoints: [
          'Command line navigation and file operations',
          'Process management and system monitoring',
          'User and permission management',
          'Package management and system updates'
        ],
        resources: [
          {
            title: 'Linux Command Line Basics',
            type: 'course',
            url: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
          }
        ]
      },
      {
        id: 'networking',
        name: 'Networking Basics',
        description: 'Understand networking concepts essential for DevOps',
        difficulty: 'Beginner',
        icon: Network,
        keyPoints: [
          'TCP/IP and HTTP protocols',
          'DNS and load balancing',
          'Firewalls and security groups',
          'VPNs and network troubleshooting'
        ]
      }
    ]
  },
  {
    id: 'version-control',
    title: 'Version Control & Collaboration',
    description: 'Master Git and collaborative development workflows.',
    skills: [
      {
        id: 'git',
        name: 'Git & GitHub',
        description: 'Version control, branching strategies, and collaboration',
        difficulty: 'Beginner',
        icon: GitBranch,
        keyPoints: [
          'Git fundamentals and branching',
          'Merge vs rebase strategies',
          'Pull requests and code reviews',
          'Git workflows (GitFlow, GitHub Flow)'
        ],
        resources: [
          {
            title: 'Pro Git Book',
            type: 'book',
            url: 'https://git-scm.com/book'
          },
          {
            title: 'Git Branching Strategies',
            type: 'article',
            url: 'https://www.atlassian.com/git/tutorials/comparing-workflows'
          }
        ]
      }
    ]
  },
  {
    id: 'ci-cd',
    title: 'CI/CD Pipelines',
    description: 'Automate your build, test, and deployment processes.',
    skills: [
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        description: 'Automate workflows directly in GitHub repositories',
        difficulty: 'Intermediate',
        icon: Zap,
        keyPoints: [
          'Workflow syntax and triggers',
          'Actions marketplace and custom actions',
          'Secrets and environment management',
          'Matrix builds and conditional execution'
        ]
      },
      {
        id: 'jenkins',
        name: 'Jenkins',
        description: 'Open-source automation server for CI/CD',
        difficulty: 'Intermediate',
        icon: Settings,
        keyPoints: [
          'Pipeline as Code with Jenkinsfile',
          'Plugin ecosystem and integrations',
          'Distributed builds and agents',
          'Blue Ocean interface'
        ]
      }
    ]
  },
  {
    id: 'containerization',
    title: 'Containerization',
    description: 'Package and deploy applications using containers.',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        description: 'Containerize applications and manage container lifecycle',
        difficulty: 'Intermediate',
        icon: Container,
        keyPoints: [
          'Dockerfile best practices',
          'Multi-stage builds',
          'Docker Compose for local development',
          'Container networking and volumes'
        ],
        resources: [
          {
            title: 'Docker Official Tutorial',
            type: 'course',
            url: 'https://docs.docker.com/get-started/'
          }
        ]
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        description: 'Orchestrate containers at scale',
        difficulty: 'Advanced',
        icon: Container,
        keyPoints: [
          'Pods, Services, and Deployments',
          'ConfigMaps and Secrets management',
          'Ingress controllers and networking',
          'Helm charts for package management'
        ]
      }
    ]
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud Platforms',
    description: 'Deploy and manage applications in the cloud.',
    skills: [
      {
        id: 'aws',
        name: 'Amazon Web Services',
        description: 'Leading cloud platform with comprehensive services',
        difficulty: 'Intermediate',
        icon: Cloud,
        keyPoints: [
          'EC2, S3, and core compute services',
          'IAM and security best practices',
          'CloudFormation for infrastructure',
          'Load balancers and auto-scaling'
        ]
      },
      {
        id: 'terraform',
        name: 'Terraform',
        description: 'Infrastructure as Code tool for cloud resources',
        difficulty: 'Intermediate',
        icon: Code,
        keyPoints: [
          'HCL syntax and resource definitions',
          'State management and remote backends',
          'Modules and code organization',
          'Plan, apply, and destroy workflows'
        ]
      }
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    description: 'Monitor applications and infrastructure health.',
    skills: [
      {
        id: 'prometheus',
        name: 'Prometheus & Grafana',
        description: 'Metrics collection and visualization',
        difficulty: 'Intermediate',
        icon: Activity,
        keyPoints: [
          'Metrics collection and PromQL',
          'Service discovery and exporters',
          'Alerting rules and notifications',
          'Grafana dashboards and visualization'
        ]
      },
      {
        id: 'elk-stack',
        name: 'ELK Stack',
        description: 'Centralized logging with Elasticsearch, Logstash, Kibana',
        difficulty: 'Advanced',
        icon: FileText,
        keyPoints: [
          'Log aggregation and parsing',
          'Elasticsearch indexing and search',
          'Kibana dashboards and analysis',
          'Beats for data collection'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Implement security best practices in your DevOps pipeline.',
    skills: [
      {
        id: 'devsecops',
        name: 'DevSecOps',
        description: 'Integrate security into DevOps practices',
        difficulty: 'Advanced',
        icon: Shield,
        keyPoints: [
          'Security scanning in CI/CD',
          'Container and image security',
          'Secrets management',
          'Compliance automation'
        ]
      },
      {
        id: 'vault',
        name: 'HashiCorp Vault',
        description: 'Secrets management and data protection',
        difficulty: 'Advanced',
        icon: Lock,
        keyPoints: [
          'Secret storage and rotation',
          'Dynamic secrets generation',
          'Authentication and authorization',
          'Encryption as a service'
        ]
      }
    ]
  }
];
