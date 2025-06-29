import React from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Globe, 
  ExternalLink, 
  Slack,
  Github,
  Twitter,
  Youtube,
  BookOpen,
  Mic,
  Video,
  Award,
  Heart,
  TrendingUp
} from 'lucide-react';

const Community = () => {
  const communities = [
    {
      name: "Collabnix Community",
      description: "10k+ member community focused on Docker, Kubernetes, and DevOps",
      platform: "Slack",
      icon: Slack,
      members: "10,000+",
      activity: "Very Active",
      topics: ["Docker", "Kubernetes", "DevOps", "Cloud Native"],
      url: "https://launchpass.com/collabnix",
      highlight: true,
      type: "Slack Community"
    },
    {
      name: "DevOps Subreddit",
      description: "Large community discussing DevOps practices, tools, and career advice",
      platform: "Reddit",
      icon: MessageSquare,
      members: "500k+",
      activity: "Very Active",
      topics: ["DevOps", "SRE", "Cloud", "Automation"],
      url: "https://www.reddit.com/r/devops/",
      highlight: false,
      type: "Forum"
    },
    {
      name: "CNCF Slack",
      description: "Official Cloud Native Computing Foundation community",
      platform: "Slack",
      icon: Slack,
      members: "50k+",
      activity: "Very Active",
      topics: ["Kubernetes", "Cloud Native", "CNCF Projects"],
      url: "https://slack.cncf.io/",
      highlight: false,
      type: "Slack Community"
    },
    {
      name: "DevOps Institute",
      description: "Global learning community advancing the human elements of DevOps",
      platform: "Community",
      icon: Globe,
      members: "25k+",
      activity: "Active",
      topics: ["Learning", "Certification", "Best Practices"],
      url: "https://devopsinstitute.com/",
      highlight: false,
      type: "Learning Platform"
    },
    {
      name: "KubeWeekly",
      description: "Weekly newsletter and community for Kubernetes enthusiasts",
      platform: "Newsletter",
      icon: BookOpen,
      members: "15k+",
      activity: "Weekly",
      topics: ["Kubernetes", "News", "Tutorials"],
      url: "https://kubeweekly.io/",
      highlight: false,
      type: "Newsletter"
    },
    {
      name: "DevOps Chat",
      description: "Real-time discussions about DevOps tools and practices",
      platform: "Discord",
      icon: MessageSquare,
      members: "8k+",
      activity: "Active",
      topics: ["CI/CD", "Infrastructure", "Monitoring"],
      url: "https://discord.gg/devops",
      highlight: false,
      type: "Discord Server"
    }
  ];

  const events = [
    {
      name: "KubeCon + CloudNativeCon",
      type: "Conference",
      description: "The flagship conference of the cloud native community",
      frequency: "Bi-annual",
      location: "Global",
      attendees: "12,000+",
      url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/",
      icon: Calendar,
      upcoming: "March 2025 - Paris"
    },
    {
      name: "DevOps Days",
      type: "Conference",
      description: "Self-organizing conferences covering DevOps topics worldwide",
      frequency: "Multiple per year",
      location: "Worldwide",
      attendees: "300-1000 per event",
      url: "https://devopsdays.org/",
      icon: Calendar,
      upcoming: "Various cities monthly"
    },
    {
      name: "DockerCon",
      type: "Conference",
      description: "Premier event for container and DevOps professionals",
      frequency: "Annual",
      location: "Global",
      attendees: "5,000+",
      url: "https://www.docker.com/dockercon/",
      icon: Calendar,
      upcoming: "May 2025 - Los Angeles"
    },
    {
      name: "AWS re:Invent",
      type: "Conference",
      description: "Amazon's premier cloud computing conference",
      frequency: "Annual",
      location: "Las Vegas",
      attendees: "65,000+",
      url: "https://reinvent.awsevents.com/",
      icon: Calendar,
      upcoming: "December 2025 - Las Vegas"
    }
  ];

  const contributors = [
    {
      name: "Ajeet Singh Raina",
      role: "Docker Captain & Community Leader",
      bio: "Founder of Collabnix, Docker Captain, and DevOps enthusiast",
      avatar: "👨‍💻",
      contributions: ["10k+ community members", "Docker Labs", "Technical content"],
      links: {
        twitter: "https://twitter.com/ajeetsraina",
        github: "https://github.com/ajeetraina",
        linkedin: "https://linkedin.com/in/ajeetsraina"
      }
    },
    {
      name: "Kelsey Hightower",
      role: "Cloud Native Advocate",
      bio: "Principal Engineer at Google, Kubernetes co-creator",
      avatar: "🚀",
      contributions: ["Kubernetes development", "Technical talks", "Community building"],
      links: {
        twitter: "https://twitter.com/kelseyhightower",
        github: "https://github.com/kelseyhightower"
      }
    },
    {
      name: "Charity Majors",
      role: "CTO & SRE Expert",
      bio: "CTO at Honeycomb, observability and SRE thought leader",
      avatar: "🔍",
      contributions: ["Observability insights", "SRE practices", "Technical writing"],
      links: {
        twitter: "https://twitter.com/mipsytipsy",
        github: "https://github.com/charity"
      }
    }
  ];

  const learningResources = [
    {
      title: "DevOps Podcasts",
      icon: Mic,
      resources: [
        { name: "DevOps Cafe", description: "Weekly discussions on DevOps culture and practices" },
        { name: "The Ship Show", description: "Conversations about building and shipping software" },
        { name: "PodCTL", description: "Enterprise Kubernetes and cloud native discussions" }
      ]
    },
    {
      title: "YouTube Channels",
      icon: Video,
      resources: [
        { name: "TechWorld with Nana", description: "DevOps and cloud tutorials" },
        { name: "KodeKloud", description: "Hands-on DevOps training content" },
        { name: "Docker", description: "Official Docker tutorials and demos" }
      ]
    },
    {
      title: "Newsletters",
      icon: BookOpen,
      resources: [
        { name: "DevOps Weekly", description: "Weekly DevOps news and articles" },
        { name: "SRE Weekly", description: "Site Reliability Engineering insights" },
        { name: "KubeWeekly", description: "Kubernetes news and updates" }
      ]
    }
  ];

  const getActivityColor = (activity) => {
    switch (activity) {
      case 'Very Active': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Weekly': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Community</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with fellow DevOps practitioners, learn from experts, attend events, 
            and contribute to the growing DevOps community worldwide.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600 mb-1">600k+</div>
              <h3 className="font-semibold text-gray-900">Community Members</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
              <h3 className="font-semibold text-gray-900">Annual Events</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
              <h3 className="font-semibold text-gray-900">Daily Discussions</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
              <h3 className="font-semibold text-gray-900">Countries</h3>
            </CardContent>
          </Card>
        </div>

        {/* Community Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join DevOps Communities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-200 ${community.highlight ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  {community.highlight && (
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">
                      <Heart className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <community.icon className="w-6 h-6 text-blue-600" />
                    <Badge variant="outline">{community.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{community.name}</CardTitle>
                  <CardDescription>{community.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Members</span>
                      <Badge variant="outline">{community.members}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Activity</span>
                      <Badge className={getActivityColor(community.activity)}>
                        {community.activity}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Topics</h4>
                      <div className="flex flex-wrap gap-1">
                        {community.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <a 
                        href={community.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Join Community
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conferences & Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <event.icon className="w-6 h-6 text-blue-600" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Frequency:</span>
                        <div className="font-medium">{event.frequency}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Attendees:</span>
                        <div className="font-medium">{event.attendees}</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Next Event</div>
                      <div className="font-semibold text-blue-800">{event.upcoming}</div>
                    </div>

                    <Button asChild className="w-full">
                      <a 
                        href={event.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Contributors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Leaders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="text-4xl mb-3">{contributor.avatar}</div>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <CardDescription>{contributor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{contributor.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Contributions</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {contributor.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-center justify-center">
                          <Award className="w-3 h-3 text-yellow-500 mr-1" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {contributor.links.twitter && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={contributor.links.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {contributor.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={contributor.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <resource.icon className="w-5 h-5 mr-2 text-blue-600" />
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resource.resources.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-3 border rounded-lg">
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contribute to the Community</h3>
            <p className="text-gray-600 mb-6">
              Help grow the DevOps community by sharing knowledge, mentoring newcomers, 
              or contributing to open source projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a 
                  href="https://github.com/collabnix/devops-future-pathway" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Contribute on GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://launchpass.com/collabnix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Slack className="w-4 h-4 mr-2" />
                  Join Slack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
