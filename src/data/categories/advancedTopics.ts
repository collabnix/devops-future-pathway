
import { Network, GitBranch, Zap, Cloud } from 'lucide-react';

export const advancedTopicsCategory = {
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
};
