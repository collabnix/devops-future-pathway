
import { GitBranch, Settings, Zap } from 'lucide-react';

export const cicdCategory = {
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
};
