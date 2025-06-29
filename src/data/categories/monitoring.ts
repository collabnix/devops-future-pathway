
import { Activity, FileText, Monitor } from 'lucide-react';

export const monitoringCategory = {
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
};
