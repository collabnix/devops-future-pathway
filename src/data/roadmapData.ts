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
      },
      {
        id: 'gitlab-ci',
        name: 'GitLab CI/CD',
        description: 'Integrated CI/CD platform with GitLab',
        difficulty: 'Intermediate',
        icon: GitBranch,
        keyPoints: [
          'GitLab CI/CD pipeline configuration with .gitlab-ci.yml',
          'Runners and executor types (Docker, Shell, Kubernetes)',
          'Pipeline stages, jobs, and dependencies',
          'Variables and secrets management',
          'Merge request pipelines and deployment pipelines',
          'Auto DevOps and predefined templates',
          'Container registry integration',
          'GitLab Pages for static site deployment'
        ],
        resources: [
          {
            title: 'GitLab CI/CD Documentation',
            type: 'article',
            url: 'https://docs.gitlab.com/ee/ci/'
          },
          {
            title: 'GitLab CI/CD Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=1iXFbchozdY'
          },
          {
            title: 'GitLab CI/CD Best Practices',
            type: 'article',
            url: 'https://docs.gitlab.com/ee/ci/pipelines/pipeline_efficiency.html'
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
      },
      {
        id: 'podman',
        name: 'Podman',
        description: 'Daemonless container engine as Docker alternative',
        difficulty: 'Intermediate',
        icon: Container,
        keyPoints: [
          'Podman architecture and rootless containers',
          'Pod creation and management',
          'Podman Compose for multi-container applications',
          'Container image building with Buildah',
          'Systemd integration for container services',
          'Security advantages over Docker',
          'Migration from Docker to Podman',
          'Kubernetes YAML generation'
        ],
        resources: [
          {
            title: 'Podman Official Documentation',
            type: 'article',
            url: 'https://docs.podman.io/en/latest/'
          },
          {
            title: 'Podman Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=Za36qHbrf3g'
          },
          {
            title: 'Podman vs Docker Comparison',
            type: 'article',
            url: 'https://www.redhat.com/en/topics/containers/what-is-podman'
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
        id: 'azure',
        name: 'Microsoft Azure',
        description: 'Microsoft cloud platform with enterprise integration',
        difficulty: 'Intermediate',
        icon: Cloud,
        keyPoints: [
          'Azure Resource Manager (ARM) and resource groups',
          'Virtual Machines and App Services',
          'Azure Active Directory and identity management',
          'Virtual Networks and network security groups',
          'Azure Storage accounts and blob storage',
          'Azure DevOps and CI/CD pipelines',
          'Azure Monitor and Application Insights',
          'Azure Functions serverless computing',
          'Azure Kubernetes Service (AKS)',
          'Cosmos DB and SQL Database'
        ],
        resources: [
          {
            title: 'Azure Fundamentals',
            type: 'course',
            url: 'https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/'
          },
          {
            title: 'Azure Architecture Center',
            type: 'article',
            url: 'https://docs.microsoft.com/en-us/azure/architecture/'
          },
          {
            title: 'Azure DevOps Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=4BibQ69MD8c'
          },
          {
            title: 'Learn Azure in a Month of Lunches',
            type: 'book',
            url: 'https://www.manning.com/books/learn-azure-in-a-month-of-lunches'
          }
        ]
      },
      {
        id: 'gcp',
        name: 'Google Cloud Platform',
        description: 'Google cloud services with strong data and AI capabilities',
        difficulty: 'Intermediate',
        icon: Cloud,
        keyPoints: [
          'Compute Engine and App Engine services',
          'Google Kubernetes Engine (GKE)',
          'Cloud Storage and BigQuery',
          'Identity and Access Management (IAM)',
          'Virtual Private Cloud (VPC) networking',
          'Cloud Build CI/CD and Cloud Deploy',
          'Cloud Monitoring and Cloud Logging',
          'Cloud Functions serverless platform',
          'Firebase for mobile and web apps',
          'AI/ML services (Vertex AI, AutoML)'
        ],
        resources: [
          {
            title: 'Google Cloud Documentation',
            type: 'article',
            url: 'https://cloud.google.com/docs'
          },
          {
            title: 'Google Cloud Associate Cloud Engineer',
            type: 'course',
            url: 'https://cloud.google.com/certification/cloud-engineer'
          },
          {
            title: 'GCP Tutorial for Beginners',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=kzKFuHk8ovk'
          },
          {
            title: 'Google Cloud Platform in Action',
            type: 'book',
            url: 'https://www.manning.com/books/google-cloud-platform-in-action'
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
      },
      {
        id: 'pulumi',
        name: 'Pulumi',
        description: 'Modern Infrastructure as Code using programming languages',
        difficulty: 'Intermediate',
        icon: Code,
        keyPoints: [
          'Infrastructure as Code with TypeScript, Python, Go, C#',
          'Cloud-native programming model',
          'Stack and project organization',
          'Component resources and abstractions',
          'Policy as Code with CrossGuard',
          'Multi-cloud and hybrid deployments',
          'GitOps workflows with Pulumi Deployments',
          'Secrets management and configuration'
        ],
        resources: [
          {
            title: 'Pulumi Documentation',
            type: 'article',
            url: 'https://www.pulumi.com/docs/'
          },
          {
            title: 'Pulumi Tutorial Series',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=vIjeiDcsR3Q'
          },
          {
            title: 'Modern Infrastructure as Code',
            type: 'book',
            url: 'https://www.pulumi.com/resources/modern-infrastructure-as-code/'
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
            url: 'https://www.elastic.co/certification/certification'
          }
        ]
      },
      {
        id: 'datadog',
        name: 'Datadog',
        description: 'Cloud-scale monitoring and analytics platform',
        difficulty: 'Intermediate',
        icon: Monitor,
        keyPoints: [
          'Infrastructure monitoring and host maps',
          'Application Performance Monitoring (APM)',
          'Log management and analysis',
          'Custom metrics and dashboards',
          'Alerting and notification integrations',
          'Synthetic monitoring and RUM',
          'Security monitoring and compliance',
          'Cost optimization and resource tracking'
        ],
        resources: [
          {
            title: 'Datadog Documentation',
            type: 'article',
            url: 'https://docs.datadoghq.com/'
          },
          {
            title: 'Datadog Learning Center',
            type: 'course',
            url: 'https://learn.datadoghq.com/'
          },
          {
            title: 'Datadog Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=1Xgx-NbOPBw'
          }
        ]
      },
      {
        id: 'newrelic',
        name: 'New Relic',
        description: 'Full-stack observability platform',
        difficulty: 'Intermediate',
        icon: Activity,
        keyPoints: [
          'Application Performance Monitoring',
          'Infrastructure monitoring and alerting',
          'Browser and mobile monitoring',
          'Distributed tracing and error tracking',
          'Custom dashboards and queries (NRQL)',
          'Alerts and incident management',
          'Kubernetes and container monitoring',
          'AI-powered insights and anomaly detection'
        ],
        resources: [
          {
            title: 'New Relic Documentation',
            type: 'article',
            url: 'https://docs.newrelic.com/'
          },
          {
            title: 'New Relic University',
            type: 'course',
            url: 'https://learn.newrelic.com/'
          },
          {
            title: 'New Relic Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=aU9-8Cnulr4'
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
      },
      {
        id: 'trivy',
        name: 'Trivy Security Scanner',
        description: 'Comprehensive security scanner for containers and infrastructure',
        difficulty: 'Intermediate',
        icon: Shield,
        keyPoints: [
          'Container image vulnerability scanning',
          'Filesystem and Git repository scanning',
          'Kubernetes cluster security assessment',
          'Infrastructure as Code security scanning',
          'License detection and compliance',
          'SBOM (Software Bill of Materials) generation',
          'CI/CD integration and automation',
          'Custom policy creation with Rego'
        ],
        resources: [
          {
            title: 'Trivy Documentation',
            type: 'article',
            url: 'https://aquasecurity.github.io/trivy/'
          },
          {
            title: 'Trivy Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=bgYrhQ6hPw4'
          },
          {
            title: 'Container Security with Trivy',
            type: 'article',
            url: 'https://blog.aquasec.com/trivy-vulnerability-scanner'
          }
        ]
      },
      {
        id: 'falco',
        name: 'Falco Runtime Security',
        description: 'Runtime security monitoring for cloud-native applications',
        difficulty: 'Advanced',
        icon: Shield,
        keyPoints: [
          'Runtime threat detection for containers',
          'Kubernetes audit log monitoring',
          'Custom security rule creation',
          'Real-time alerting and notifications',
          'Integration with SIEM and monitoring tools',
          'Behavioral analysis and anomaly detection',
          'Cloud provider security event monitoring',
          'Compliance monitoring automation'
        ],
        resources: [
          {
            title: 'Falco Documentation',
            type: 'article',
            url: 'https://falco.org/docs/'
          },
          {
            title: 'Falco Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=VEFaGjfjfyc'
          },
          {
            title: 'Runtime Security with Falco',
            type: 'article',
            url: 'https://sysdig.com/learn-cloud-native/falco-runtime-security/'
          }
        ]
      }
    ]
  },
  {
    id: 'databases',
    title: 'Database Management',
    description: 'Manage and optimize databases in production environments.',
    skills: [
      {
        id: 'mysql-postgresql',
        name: 'MySQL & PostgreSQL',
        description: 'Relational database management and optimization',
        difficulty: 'Intermediate',
        icon: Database,
        keyPoints: [
          'Database installation and configuration',
          'Query optimization and indexing strategies',
          'Backup and recovery procedures',
          'Replication and high availability setup',
          'Performance monitoring and tuning',
          'User management and security',
          'Database migrations and schema changes',
          'Monitoring tools and alerting'
        ],
        resources: [
          {
            title: 'MySQL Official Documentation',
            type: 'article',
            url: 'https://dev.mysql.com/doc/'
          },
          {
            title: 'PostgreSQL Tutorial',
            type: 'course',
            url: 'https://www.postgresqltutorial.com/'
          },
          {
            title: 'Database Performance Tuning',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=HubezKbFL7E'
          },
          {
            title: 'High Performance MySQL',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/high-performance-mysql/9781492080503/'
          }
        ]
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'NoSQL document database management',
        difficulty: 'Intermediate',
        icon: Database,
        keyPoints: [
          'Document-oriented data modeling',
          'Aggregation pipelines and queries',
          'Replica sets and sharding',
          'Performance optimization and indexing',
          'Backup strategies and point-in-time recovery',
          'Security and authentication setup',
          'MongoDB Atlas cloud deployment',
          'Monitoring with MongoDB Compass and ops tools'
        ],
        resources: [
          {
            title: 'MongoDB Official Documentation',
            type: 'article',
            url: 'https://docs.mongodb.com/'
          },
          {
            title: 'MongoDB University',
            type: 'course',
            url: 'https://university.mongodb.com/'
          },
          {
            title: 'MongoDB Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=c2M-rlkkT5o'
          },
          {
            title: 'MongoDB: The Definitive Guide',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/'
          }
        ]
      },
      {
        id: 'redis',
        name: 'Redis',
        description: 'In-memory data structure store for caching and messaging',
        difficulty: 'Intermediate',
        icon: Database,
        keyPoints: [
          'Data types and operations (strings, sets, hashes, lists)',
          'Caching strategies and TTL management',
          'Pub/Sub messaging patterns',
          'Redis Cluster and high availability',
          'Persistence options (RDB, AOF)',
          'Memory optimization and eviction policies',
          'Redis Sentinel for monitoring',
          'Integration patterns with applications'
        ],
        resources: [
          {
            title: 'Redis Official Documentation',
            type: 'article',
            url: 'https://redis.io/documentation'
          },
          {
            title: 'Redis University',
            type: 'course',
            url: 'https://university.redis.com/'
          },
          {
            title: 'Redis Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ'
          },
          {
            title: 'Redis in Action',
            type: 'book',
            url: 'https://www.manning.com/books/redis-in-action'
          }
        ]
      }
    ]
  },
  {
    id: 'advanced-topics',
    title: 'Advanced DevOps Topics',
    description: 'Master advanced concepts for senior DevOps roles.',
    skills: [
      {
        id: 'service-mesh',
        name: 'Service Mesh (Istio)',
        description: 'Microservices communication and security layer',
        difficulty: 'Advanced',
        icon: Network,
        keyPoints: [
          'Service mesh architecture and benefits',
          'Istio installation and configuration',
          'Traffic management and routing rules',
          'Security policies and mTLS',
          'Observability and distributed tracing',
          'Rate limiting and circuit breaking',
          'Canary deployments and A/B testing',
          'Multi-cluster service mesh setup'
        ],
        resources: [
          {
            title: 'Istio Official Documentation',
            type: 'article',
            url: 'https://istio.io/latest/docs/'
          },
          {
            title: 'Istio: Up and Running',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/istio-up-and/9781492043775/'
          },
          {
            title: 'Service Mesh Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=16fgzklcF7Y'
          }
        ]
      },
      {
        id: 'gitops',
        name: 'GitOps',
        description: 'Git-based continuous deployment and operations',
        difficulty: 'Advanced',
        icon: GitBranch,
        keyPoints: [
          'GitOps principles and workflows',
          'ArgoCD installation and configuration',
          'Application deployment automation',
          'Multi-environment management',
          'Configuration drift detection',
          'Rollback and disaster recovery',
          'RBAC and security in GitOps',
          'Progressive delivery patterns'
        ],
        resources: [
          {
            title: 'ArgoCD Documentation',
            type: 'article',
            url: 'https://argo-cd.readthedocs.io/'
          },
          {
            title: 'GitOps and Kubernetes',
            type: 'book',
            url: 'https://www.manning.com/books/gitops-and-kubernetes'
          },
          {
            title: 'GitOps Tutorial with ArgoCD',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=MeU5_k9ssrs'
          }
        ]
      },
      {
        id: 'chaos-engineering',
        name: 'Chaos Engineering',
        description: 'Building resilient systems through controlled failures',
        difficulty: 'Advanced',
        icon: Zap,
        keyPoints: [
          'Chaos engineering principles and benefits',
          'Chaos Monkey and Netflix chaos tools',
          'Litmus for Kubernetes chaos experiments',
          'Failure injection and blast radius control',
          'Monitoring and observability during chaos',
          'Building confidence through experimentation',
          'Incident response and learning culture',
          'GameDays and disaster recovery testing'
        ],
        resources: [
          {
            title: 'Chaos Engineering',
            type: 'book',
            url: 'https://www.oreilly.com/library/view/chaos-engineering/9781491988459/'
          },
          {
            title: 'Principles of Chaos Engineering',
            type: 'article',
            url: 'https://principlesofchaos.org/'
          },
          {
            title: 'Chaos Engineering Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=4LiJzWX-4bA'
          },
          {
            title: 'LitmusChaos Documentation',
            type: 'article',
            url: 'https://docs.litmuschaos.io/'
          }
        ]
      },
      {
        id: 'serverless',
        name: 'Serverless Architecture',
        description: 'Function-as-a-Service and serverless deployment patterns',
        difficulty: 'Advanced',
        icon: Cloud,
        keyPoints: [
          'Serverless architecture patterns and benefits',
          'AWS Lambda, Azure Functions, Google Cloud Functions',
          'Event-driven architecture and triggers',
          'Cold starts and performance optimization',
          'Serverless monitoring and debugging',
          'Cost optimization strategies',
          'Serverless security best practices',
          'Framework tools (Serverless, SAM, CDK)'
        ],
        resources: [
          {
            title: 'Serverless Architectures on AWS',
            type: 'book',
            url: 'https://www.manning.com/books/serverless-architectures-on-aws-second-edition'
          },
          {
            title: 'AWS Lambda Documentation',
            type: 'article',
            url: 'https://docs.aws.amazon.com/lambda/'
          },
          {
            title: 'Serverless Tutorial',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=71cd5XerKss'
          },
          {
            title: 'Serverless Framework Guide',
            type: 'course',
            url: 'https://www.serverless.com/framework/docs'
          }
        ]
      }
    ]
  }
];
