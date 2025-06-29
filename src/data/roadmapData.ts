
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
          'Collaboration between Development and Operations teams',
          'Continuous Integration and Continuous Deployment (CI/CD)',
          'Infrastructure as Code (IaC) principles',
          'Automation and monitoring practices',
          'Feedback loops and continuous improvement',
          'Breaking down silos between teams'
        ],
        resources: [
          {
            title: 'The DevOps Handbook',
            type: 'book',
            url: 'https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002'
          },
          {
            title: 'What is DevOps? - AWS',
            type: 'article',
            url: 'https://aws.amazon.com/devops/what-is-devops/'
          },
          {
            title: 'DevOps Culture and Practices',
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
          'User and permission management (chmod, chown)',
          'Package management (apt, yum, dnf)',
          'System services and systemd',
          'Log management and troubleshooting',
          'Shell scripting basics',
          'Environment variables and PATH'
        ],
        resources: [
          {
            title: 'Linux Command Line Basics',
            type: 'course',
            url: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
          },
          {
            title: 'Linux Academy - Linux Essentials',
            type: 'course',
            url: 'https://linuxacademy.com'
          },
          {
            title: 'Bash Scripting Tutorial',
            type: 'article',
            url: 'https://linuxconfig.org/bash-scripting-tutorial-for-beginners'
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
          'TCP/IP protocol suite and OSI model',
          'HTTP/HTTPS protocols and status codes',
          'DNS resolution and configuration',
          'Load balancing concepts and techniques',
          'Firewalls and security groups',
          'VPNs and secure connections',
          'Network troubleshooting tools (ping, traceroute, netstat)',
          'Ports and port forwarding'
        ],
        resources: [
          {
            title: 'Computer Networking: A Top-Down Approach',
            type: 'book',
            url: 'https://www.amazon.com/Computer-Networking-Top-Down-Approach-7th/dp/0133594149'
          },
          {
            title: 'Networking Fundamentals',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=cNwEVYkx2Kk'
          }
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
          'Git fundamentals: init, add, commit, push, pull',
          'Branching and merging strategies',
          'Merge vs rebase workflows',
          'Pull requests and code reviews',
          'Git workflows (GitFlow, GitHub Flow, Feature Branch)',
          'Conflict resolution and troubleshooting',
          'Git hooks for automation',
          'Semantic versioning and tagging'
        ],
        resources: [
          {
            title: 'Pro Git Book (Free)',
            type: 'book',
            url: 'https://git-scm.com/book'
          },
          {
            title: 'Git Branching Strategies',
            type: 'article',
            url: 'https://www.atlassian.com/git/tutorials/comparing-workflows'
          },
          {
            title: 'GitHub Skills - Interactive Courses',
            type: 'course',
            url: 'https://skills.github.com/'
          },
          {
            title: 'Git and GitHub Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=RGOj5yH7evk'
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
          'Workflow syntax and YAML configuration',
          'Event triggers (push, pull_request, schedule)',
          'Actions marketplace and custom actions',
          'Secrets and environment management',
          'Matrix builds for multiple environments',
          'Conditional execution and job dependencies',
          'Artifacts and caching strategies',
          'Self-hosted runners'
        ],
        resources: [
          {
            title: 'GitHub Actions Documentation',
            type: 'article',
            url: 'https://docs.github.com/en/actions'
          },
          {
            title: 'GitHub Actions Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=R8_veQiYBjI'
          },
          {
            title: 'Awesome GitHub Actions',
            type: 'article',
            url: 'https://github.com/sdras/awesome-actions'
          }
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
          'Declarative vs Scripted pipelines',
          'Plugin ecosystem and integrations',
          'Distributed builds with master-agent architecture',
          'Blue Ocean modern interface',
          'Pipeline stages and parallel execution',
          'Build triggers and webhooks',
          'Backup and disaster recovery'
        ],
        resources: [
          {
            title: 'Jenkins Official Documentation',
            type: 'article',
            url: 'https://www.jenkins.io/doc/'
          },
          {
            title: 'Jenkins Pipeline Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=7KCS70sCoK0'
          },
          {
            title: 'Jenkins: The Definitive Guide',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/jenkins-the-definitive/9781449311155/'
          }
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
          'Docker architecture and concepts',
          'Dockerfile best practices and optimization',
          'Multi-stage builds for smaller images',
          'Docker Compose for local development',
          'Container networking and port mapping',
          'Volume management and data persistence',
          'Image security scanning',
          'Container registries (Docker Hub, ECR, GCR)'
        ],
        resources: [
          {
            title: 'Docker Official Tutorial',
            type: 'course',
            url: 'https://docs.docker.com/get-started/'
          },
          {
            title: 'Docker Deep Dive',
            type: 'book',
            url: 'https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton/dp/1521822808'
          },
          {
            title: 'Docker Mastery Course',
            type: 'video',
            url: 'https://www.udemy.com/course/docker-mastery/'
          },
          {
            title: 'Dockerfile Best Practices',
            type: 'article',
            url: 'https://docs.docker.com/develop/dev-best-practices/'
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
          'Kubernetes architecture and components',
          'Pods, Services, and Deployments',
          'ConfigMaps and Secrets management',
          'Ingress controllers and networking',
          'Persistent Volumes and storage',
          'Helm charts for package management',
          'RBAC and security policies',
          'Monitoring and logging in K8s',
          'Auto-scaling and resource management'
        ],
        resources: [
          {
            title: 'Kubernetes Official Documentation',
            type: 'article',
            url: 'https://kubernetes.io/docs/'
          },
          {
            title: 'Kubernetes: Up and Running',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/'
          },
          {
            title: 'Kubernetes Tutorial for Beginners',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=X48VuDVv0do'
          },
          {
            title: 'CNCF Kubernetes Certification',
            type: 'course',
            url: 'https://www.cncf.io/certification/cka/'
          }
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
          'EC2 instances and compute services',
          'S3 storage and data management',
          'IAM roles, policies, and security',
          'VPC networking and subnets',
          'RDS and database services',
          'CloudFormation infrastructure as code',
          'Load balancers (ALB, NLB, CLB)',
          'Auto Scaling Groups and policies',
          'CloudWatch monitoring and logging',
          'Lambda serverless functions'
        ],
        resources: [
          {
            title: 'AWS Well-Architected Framework',
            type: 'article',
            url: 'https://aws.amazon.com/architecture/well-architected/'
          },
          {
            title: 'AWS Certified Solutions Architect',
            type: 'course',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
          },
          {
            title: 'AWS Cloud Practitioner Essentials',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=3hLmDS179YE'
          },
          {
            title: 'Amazon Web Services in Action',
            type: 'book',
            url: 'https://www.manning.com/books/amazon-web-services-in-action-second-edition'
          }
        ]
      },
      {
        id: 'terraform',
        name: 'Terraform',
        description: 'Infrastructure as Code tool for cloud resources',
        difficulty: 'Intermediate',
        icon: Code,
        keyPoints: [
          'HCL (HashiCorp Configuration Language) syntax',
          'Resource definitions and providers',
          'State management and remote backends',
          'Variables, outputs, and data sources',
          'Modules for code reusability',
          'Plan, apply, and destroy workflows',
          'Workspace management',
          'Import existing infrastructure',
          'Version constraints and dependency management'
        ],
        resources: [
          {
            title: 'Terraform Official Documentation',
            type: 'article',
            url: 'https://www.terraform.io/docs'
          },
          {
            title: 'Terraform: Up and Running',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/terraform-up/9781492046899/'
          },
          {
            title: 'HashiCorp Terraform Associate Certification',
            type: 'course',
            url: 'https://www.hashicorp.com/certification/terraform-associate'
          },
          {
            title: 'Terraform Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo'
          }
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
          'Prometheus architecture and data model',
          'PromQL query language and functions',
          'Service discovery and target configuration',
          'Exporters for different services',
          'Alerting rules and Alertmanager',
          'Grafana dashboard creation and templating',
          'Data source configuration',
          'High availability and federation',
          'Recording rules for performance optimization'
        ],
        resources: [
          {
            title: 'Prometheus Official Documentation',
            type: 'article',
            url: 'https://prometheus.io/docs/'
          },
          {
            title: 'Prometheus: Up & Running',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/prometheus-up/9781492034131/'
          },
          {
            title: 'Complete Prometheus Monitoring Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg'
          },
          {
            title: 'Grafana Official Tutorials',
            type: 'course',
            url: 'https://grafana.com/tutorials/'
          }
        ]
      },
      {
        id: 'elk-stack',
        name: 'ELK Stack',
        description: 'Centralized logging with Elasticsearch, Logstash, Kibana',
        difficulty: 'Advanced',
        icon: FileText,
        keyPoints: [
          'Elasticsearch cluster architecture',
          'Index management and mapping',
          'Logstash pipeline configuration',
          'Log parsing with Grok patterns',
          'Kibana dashboard and visualization',
          'Beats for data collection (Filebeat, Metricbeat)',
          'Index lifecycle management',
          'Security with X-Pack',
          'Performance tuning and optimization'
        ],
        resources: [
          {
            title: 'Elastic Stack Documentation',
            type: 'article',
            url: 'https://www.elastic.co/guide/index.html'
          },
          {
            title: 'Learning Elastic Stack 7.0',
            type: 'book',
            url: 'https://www.packtpub.com/product/learning-elastic-stack-7-0-second-edition/9781789954395'
          },
          {
            title: 'ELK Stack Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=kaCgUZ-IXHU'
          },
          {
            title: 'Elastic Certified Engineer',
            type: 'course',
            url: 'https://www.elastic.co/training/certification'
          }
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
          'Shift-left security approach',
          'Static Application Security Testing (SAST)',
          'Dynamic Application Security Testing (DAST)',
          'Container and image security scanning',
          'Dependency vulnerability scanning',
          'Security testing in CI/CD pipelines',
          'Infrastructure security scanning',
          'Compliance automation (SOC2, PCI-DSS)',
          'Incident response and security monitoring'
        ],
        resources: [
          {
            title: 'DevSecOps: A Leader\'s Guide',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/devsecops-a-leaders/9781492097549/'
          },
          {
            title: 'OWASP DevSecOps Guideline',
            type: 'article',
            url: 'https://owasp.org/www-project-devsecops-guideline/'
          },
          {
            title: 'DevSecOps Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=nrhxNNH5lt0'
          },
          {
            title: 'SANS DevSecOps Fundamentals',
            type: 'course',
            url: 'https://www.sans.org/cyber-security-courses/devsecops-fundamentals/'
          }
        ]
      },
      {
        id: 'vault',
        name: 'HashiCorp Vault',
        description: 'Secrets management and data protection',
        difficulty: 'Advanced',
        icon: Lock,
        keyPoints: [
          'Secret storage and encryption at rest',
          'Dynamic secrets generation',
          'Secret rotation and lifecycle management',
          'Authentication methods (LDAP, JWT, AWS IAM)',
          'Authorization policies and ACLs',
          'Encryption as a Service (EaaS)',
          'High availability and disaster recovery',
          'Audit logging and compliance',
          'Integration with CI/CD pipelines'
        ],
        resources: [
          {
            title: 'HashiCorp Vault Documentation',
            type: 'article',
            url: 'https://www.vaultproject.io/docs'
          },
          {
            title: 'HashiCorp Vault Associate Certification',
            type: 'course',
            url: 'https://www.hashicorp.com/certification/vault-associate'
          },
          {
            title: 'Vault Tutorial Series',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=VYfl-DpZ5wM'
          },
          {
            title: 'Vault: Securing, Storing, and Tightly Controlling Access',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/vault-securing-storing/9781492043959/'
          }
        ]
      }
    ]
  }
];
