import React from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  Globe, 
  Heart, 
  ExternalLink, 
  Github,
  Star,
  Award,
  BookOpen,
  Lightbulb,
  Rocket,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "10k+",
      label: "Community Members",
      description: "Active learners and practitioners"
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "Learning Resources",
      description: "Curated content and tutorials"
    },
    {
      icon: Award,
      value: "50+",
      label: "Expert Contributors",
      description: "Industry professionals sharing knowledge"
    },
    {
      icon: Globe,
      value: "100+",
      label: "Countries",
      description: "Global DevOps community reach"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community-driven learning and open collaboration."
    },
    {
      icon: Lightbulb,
      title: "Practical Learning",
      description: "Focus on hands-on, real-world skills that matter in today's DevOps landscape."
    },
    {
      icon: Shield,
      title: "Quality Content",
      description: "All resources are curated and reviewed by experienced DevOps professionals."
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description: "We constantly evolve our content to match the fast-paced DevOps ecosystem."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Collabnix Foundation",
      description: "Ajeet Singh Raina founded Collabnix to build a DevOps community"
    },
    {
      year: "2020",
      title: "10k Community Members",
      description: "Reached 10,000 active community members across platforms"
    },
    {
      year: "2022",
      title: "Docker Labs Launch",
      description: "Launched comprehensive Docker learning labs and tutorials"
    },
    {
      year: "2024",
      title: "DevOps Roadmap Creation",
      description: "Created the interactive DevOps learning roadmap"
    },
    {
      year: "2025",
      title: "Future Pathway Platform",
      description: "Launched the comprehensive DevOps Future Pathway platform"
    }
  ];

  const team = [
    {
      name: "Ajeet Singh Raina",
      role: "Founder & Docker Captain",
      bio: "Docker Captain, DevOps evangelist, and community builder with 15+ years in tech",
      avatar: "👨‍💻",
      social: {
        github: "https://github.com/ajeetraina",
        twitter: "https://twitter.com/ajeetsraina",
        linkedin: "https://linkedin.com/in/ajeetsraina"
      }
    },
    {
      name: "Community Contributors",
      role: "Global DevOps Experts",
      bio: "50+ industry professionals contributing content, reviews, and mentorship",
      avatar: "🌍",
      social: {
        github: "https://github.com/collabnix"
      }
    },
    {
      name: "You!",
      role: "Future Contributor",
      bio: "Join our community of contributors and help shape the future of DevOps education",
      avatar: "🚀",
      social: {
        github: "https://github.com/collabnix/devops-future-pathway"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About DevOps Future Pathway
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We're building the world's most comprehensive and community-driven DevOps learning platform. 
            Our mission is to democratize DevOps education and help professionals at every stage of their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/community" className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://github.com/collabnix/devops-future-pathway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                Contribute on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="pt-6">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100">
              <CardContent className="pt-8 text-center">
                <Target className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Empowering DevOps Professionals Worldwide
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe that DevOps knowledge should be accessible to everyone, regardless of their background 
                  or experience level. Our platform provides structured learning paths, hands-on resources, 
                  and a supportive community to help individuals and organizations succeed in their DevOps journey.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Community Driven</Badge>
                  <Badge variant="secondary">Practical Learning</Badge>
                  <Badge variant="secondary">Industry Relevant</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge className="mr-3">{item.year}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Star className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Partnerships</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">🐳</div>
                <h3 className="font-semibold text-gray-900 mb-2">Docker Captain Program</h3>
                <p className="text-sm text-gray-600">Official recognition from Docker for community contributions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="font-semibold text-gray-900 mb-2">CNCF Community</h3>
                <p className="text-sm text-gray-600">Active participation in Cloud Native Computing Foundation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-sm text-gray-600">Featured in major DevOps publications and conferences</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Whether you're a beginner starting your DevOps journey or an expert looking to give back, 
              there's a place for you in our community. Let's build the future of DevOps education together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/" className="flex items-center justify-center">
                  Start Learning
                  <Rocket className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://github.com/collabnix/devops-future-pathway/blob/main/CONTRIBUTING.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Contribute
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
