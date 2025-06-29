
import { 
  Settings, 
  Terminal,
  Network
} from 'lucide-react';

export const fundamentalsCategory = {
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
};
