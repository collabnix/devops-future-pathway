export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: string;
  comments: string;
  trending?: boolean;
  featured?: boolean;
  url: string;
}

export const categories = [
  'All', 'Getting Started', 'Containers', 'Kubernetes', 'Cloud', 'CI/CD', 
  'Monitoring', 'Security', 'Best Practices', 'Career', 'Infrastructure', 'Automation'
];

export const featuredPost: BlogPost = {
  title: "The Complete DevOps Beginner's Guide 2025",
  excerpt: "Everything you need to know to start your DevOps journey, from basic concepts to advanced practices. Learn the fundamentals that will set you up for success in the modern DevOps landscape.",
  author: "Ajeet Singh Raina",
  date: "2025-01-15",
  readTime: "12 min read",
  category: "Getting Started",
  image: "🚀",
  views: "15.2k",
  comments: "89",
  featured: true,
  url: "https://docs.docker.com/get-started/"
};

export const blogPosts: BlogPost[] = [
  {
    title: "Docker Best Practices for Production Deployments",
    excerpt: "Learn essential Docker practices for secure, efficient, and scalable production deployments. From multi-stage builds to security scanning.",
    author: "Sarah Chen",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "Containers",
    image: "🐳",
    views: "8.4k",
    comments: "42",
    trending: true,
    url: "https://docs.docker.com/develop/dev-best-practices/"
  },
  {
    title: "Kubernetes Security: A Comprehensive Guide",
    excerpt: "Secure your Kubernetes clusters with these essential security practices and tools. Cover RBAC, network policies, and container security.",
    author: "Mike Rodriguez",
    date: "2025-01-08",
    readTime: "15 min read",
    category: "Security",
    image: "🔒",
    views: "12.1k",
    comments: "67",
    trending: false,
    url: "https://kubernetes.io/docs/concepts/security/"
  },
  {
    title: "Building Efficient CI/CD Pipelines with GitHub Actions",
    excerpt: "Step-by-step guide to creating robust CI/CD pipelines using GitHub Actions. Learn workflows, secrets management, and deployment strategies.",
    author: "Jennifer Kim",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "CI/CD",
    image: "⚡",
    views: "9.7k",
    comments: "31",
    trending: true,
    url: "https://docs.github.com/en/actions/learn-github-actions"
  },
  {
    title: "Monitoring Microservices: Tools and Best Practices",
    excerpt: "Essential monitoring strategies for microservices architectures using modern tools like Prometheus, Grafana, and distributed tracing.",
    author: "David Park",
    date: "2025-01-03",
    readTime: "12 min read",
    category: "Monitoring",
    image: "📊",
    views: "6.8k",
    comments: "28",
    trending: false,
    url: "https://prometheus.io/docs/introduction/overview/"
  },
  {
    title: "Infrastructure as Code with Terraform: Advanced Patterns",
    excerpt: "Advanced Terraform patterns and best practices for managing complex infrastructure. Learn modules, state management, and testing strategies.",
    author: "Lisa Wang",
    date: "2024-12-30",
    readTime: "14 min read",
    category: "Infrastructure",
    image: "🏗️",
    views: "7.2k",
    comments: "39",
    trending: false,
    url: "https://developer.hashicorp.com/terraform/tutorials"
  },
  {
    title: "DevOps Career Transition: From Developer to DevOps Engineer",
    excerpt: "A practical roadmap for developers looking to transition into DevOps roles. Learn the essential skills and career progression strategies.",
    author: "Alex Thompson",
    date: "2024-12-28",
    readTime: "9 min read",
    category: "Career",
    image: "🎯",
    views: "11.3k",
    comments: "85",
    trending: false,
    url: "https://roadmap.sh/devops"
  },
  {
    title: "Kubernetes Troubleshooting: Common Issues and Solutions",
    excerpt: "Debug and resolve common Kubernetes problems with practical troubleshooting techniques. From pod failures to network issues.",
    author: "Robert Lee",
    date: "2024-12-25",
    readTime: "11 min read",
    category: "Kubernetes",
    image: "🔧",
    views: "9.1k",
    comments: "52",
    trending: false,
    url: "https://kubernetes.io/docs/tasks/debug/"
  },
  {
    title: "GitOps: Implementing Continuous Deployment with ArgoCD",
    excerpt: "Learn how to implement GitOps workflows using ArgoCD for continuous deployment. From setup to advanced configuration.",
    author: "Maria Garcia",
    date: "2024-12-22",
    readTime: "13 min read",
    category: "CI/CD",
    image: "🔄",
    views: "5.9k",
    comments: "24",
    trending: false,
    url: "https://argo-cd.readthedocs.io/en/stable/"
  },
  {
    title: "Cloud Cost Optimization: Strategies for AWS, Azure, and GCP",
    excerpt: "Practical strategies to optimize cloud costs across major cloud platforms. Learn about rightsizing, reserved instances, and automation.",
    author: "James Wilson",
    date: "2024-12-20",
    readTime: "16 min read",
    category: "Cloud",
    image: "💰",
    views: "8.7k",
    comments: "41",
    trending: false,
    url: "https://aws.amazon.com/aws-cost-management/"
  },
  {
    title: "Setting Up a Complete DevOps Toolchain from Scratch",
    excerpt: "Build a complete DevOps toolchain including version control, CI/CD, monitoring, and deployment. Perfect for teams starting their DevOps journey.",
    author: "Emily Rodriguez",
    date: "2024-12-18",
    readTime: "18 min read",
    category: "Getting Started",
    image: "🛠️",
    views: "13.5k",
    comments: "78",
    trending: true,
    url: "https://about.gitlab.com/topics/devops/"
  },
  {
    title: "Container Security Scanning with Trivy and Snyk",
    excerpt: "Implement comprehensive container security scanning in your CI/CD pipelines. Learn vulnerability detection and remediation strategies.",
    author: "Michael Chang",
    date: "2024-12-15",
    readTime: "10 min read",
    category: "Security",
    image: "🛡️",
    views: "6.3k",
    comments: "33",
    trending: false,
    url: "https://aquasecurity.github.io/trivy/latest/"
  },
  {
    title: "Helm Charts: Package Management for Kubernetes",
    excerpt: "Master Kubernetes application deployment with Helm charts. Learn templating, values, and chart development best practices.",
    author: "Anna Chen",
    date: "2024-12-12",
    readTime: "11 min read",
    category: "Kubernetes",
    image: "⛵",
    views: "7.8k",
    comments: "45",
    trending: false,
    url: "https://helm.sh/docs/"
  },
  {
    title: "Ansible Automation: Configuration Management at Scale",
    excerpt: "Automate infrastructure configuration and management using Ansible. Learn playbooks, roles, and automation best practices.",
    author: "Chris Thompson",
    date: "2024-12-10",
    readTime: "14 min read",
    category: "Automation",
    image: "🤖",
    views: "9.2k",
    comments: "56",
    trending: false,
    url: "https://docs.ansible.com/ansible/latest/user_guide/"
  },
  {
    title: "Observability vs Monitoring: Understanding the Difference",
    excerpt: "Deep dive into observability principles and how they differ from traditional monitoring. Learn metrics, logs, and traces implementation.",
    author: "Sophie Miller",
    date: "2024-12-08",
    readTime: "12 min read",
    category: "Monitoring",
    image: "👁️",
    views: "8.1k",
    comments: "37",
    trending: true,
    url: "https://opentelemetry.io/docs/"
  },
  {
    title: "Multi-Cloud Strategy: Benefits and Implementation",
    excerpt: "Explore multi-cloud strategies for better resilience and vendor diversification. Learn implementation patterns and management tools.",
    author: "David Kim",
    date: "2024-12-05",
    readTime: "15 min read",
    category: "Cloud",
    image: "☁️",
    views: "10.4k",
    comments: "62",
    trending: false,
    url: "https://cloud.google.com/learn/what-is-multicloud"
  },
  {
    title: "DevSecOps: Integrating Security into DevOps Pipelines",
    excerpt: "Implement security practices throughout your DevOps lifecycle. Learn static analysis, dependency scanning, and security testing.",
    author: "Rachel Adams",
    date: "2024-12-03",
    readTime: "13 min read",
    category: "Security",
    image: "🔐",
    views: "11.7k",
    comments: "71",
    trending: true,
    url: "https://owasp.org/www-project-devsecops-guideline/"
  },
  {
    title: "Kubernetes Operators: Extending Kubernetes Functionality",
    excerpt: "Build and deploy custom Kubernetes operators to automate application management. Learn the operator pattern and development tools.",
    author: "Tom Johnson",
    date: "2024-12-01",
    readTime: "16 min read",
    category: "Kubernetes",
    image: "🎛️",
    views: "5.7k",
    comments: "29",
    trending: false,
    url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"
  },
  {
    title: "Database DevOps: Managing Schemas and Migrations",
    excerpt: "Apply DevOps practices to database management including schema versioning, automated migrations, and database testing strategies.",
    author: "Jessica Lee",
    date: "2024-11-28",
    readTime: "11 min read",
    category: "Best Practices",
    image: "🗄️",
    views: "7.9k",
    comments: "48",
    trending: false,
    url: "https://flywaydb.org/documentation/"
  },
  {
    title: "Service Mesh with Istio: Traffic Management and Security",
    excerpt: "Implement service mesh architecture with Istio for microservices communication, security, and observability.",
    author: "Mark Davis",
    date: "2024-11-25",
    readTime: "17 min read",
    category: "Infrastructure",
    image: "🕸️",
    views: "6.5k",
    comments: "34",
    trending: false,
    url: "https://istio.io/latest/docs/"
  },
  {
    title: "Disaster Recovery Planning for Cloud Infrastructure",
    excerpt: "Design and implement comprehensive disaster recovery strategies for cloud-based infrastructure and applications.",
    author: "Karen Brown",
    date: "2024-11-22",
    readTime: "14 min read",
    category: "Best Practices",
    image: "🚨",
    views: "9.8k",
    comments: "55",
    trending: false,
    url: "https://aws.amazon.com/disaster-recovery/"
  }
];

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
};

export const getTrendingPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.trending);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};