
import { Cloud, Code } from 'lucide-react';

export const cloudPlatformsCategory = {
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
};
