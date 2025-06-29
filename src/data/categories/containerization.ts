
import { Container } from 'lucide-react';

export const containerizationCategory = {
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
};
