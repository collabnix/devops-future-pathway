
import { Shield, Lock } from 'lucide-react';

export const securityCategory = {
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
};
