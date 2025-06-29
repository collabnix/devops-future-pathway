
import { Database } from 'lucide-react';

export const databasesCategory = {
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
};
