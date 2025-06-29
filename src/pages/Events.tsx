import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  Globe, 
  Clock, 
  Star,
  ExternalLink,
  Ticket,
  Video,
  Building,
  Zap,
  Award,
  BookOpen,
  Mic,
  Coffee,
  Network
} from "lucide-react";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      name: "DockerCon 2025",
      type: "Conference",
      date: "March 15-17, 2025",
      location: "San Francisco, CA",
      format: "Hybrid",
      description: "The premier event for container technology and Docker ecosystem",
      topics: ["Containers", "Kubernetes", "Security", "AI/ML"],
      price: "$1,200 - $2,500",
      earlyBird: "Save $300 until Jan 31",
      speakers: 150,
      attendees: "5,000+",
      website: "https://dockercon.com",
      highlights: [
        "Keynotes from Docker leadership",
        "100+ technical sessions",
        "Hands-on workshops",
        "Community networking events"
      ]
    },
    {
      name: "KubeCon + CloudNativeCon Europe",
      type: "Conference",
      date: "April 8-11, 2025",
      location: "Amsterdam, Netherlands",
      format: "In-person",
      description: "The flagship conference of the Cloud Native Computing Foundation",
      topics: ["Kubernetes", "Cloud Native", "Observability", "Security"],
      price: "€950 - €1,850",
      earlyBird: "Early bird until Feb 14",
      speakers: 300,
      attendees: "12,000+",
      website: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe",
      highlights: [
        "CNCF project updates",
        "200+ breakout sessions",
        "Maintainer track sessions",
        "Cloud native marketplace"
      ]
    },
    {
      name: "AWS re:Invent 2025",
      type: "Conference",
      date: "November 30 - December 4, 2025",
      location: "Las Vegas, NV",
      format: "In-person",
      description: "Amazon Web Services' annual cloud computing conference",
      topics: ["Cloud", "AI/ML", "Serverless", "Database"],
      price: "$1,799 - $2,999",
      earlyBird: "Super early bird until July 31",
      speakers: 500,
      attendees: "50,000+",
      website: "https://reinvent.awsevents.com",
      highlights: [
        "AWS service announcements",
        "500+ technical sessions",
        "Certification opportunities",
        "Expo with 400+ exhibitors"
      ]
    },
    {
      name: "DevOps Enterprise Summit",
      type: "Conference",
      date: "October 14-16, 2025",
      location: "Las Vegas, NV",
      format: "Hybrid",
      description: "Enterprise-focused DevOps transformation strategies and case studies",
      topics: ["Enterprise DevOps", "Leadership", "Culture", "Metrics"],
      price: "$2,195 - $3,495",
      earlyBird: "Early registration until Aug 15",
      speakers: 80,
      attendees: "2,500+",
      website: "https://events.itrevolution.com",
      highlights: [
        "Real transformation stories",
        "Executive leadership track",
        "Platform engineering focus",
        "Networking with industry leaders"
      ]
    }
  ];

  const onlineEvents = [
    {
      name: "CNCF Live Webinar Series",
      type: "Webinar Series",
      frequency: "Weekly",
      description: "Regular webinars covering cloud native technologies and best practices",
      topics: ["Cloud Native", "Kubernetes", "Security", "Observability"],
      cost: "Free",
      duration: "1 hour",
      website: "https://community.cncf.io/events"
    },
    {
      name: "DevOps Institute Virtual Events",
      type: "Virtual Conference",
      frequency: "Monthly",
      description: "Online events focusing on DevOps skills, practices, and community",
      topics: ["Skills", "Practices", "Leadership", "Culture"],
      cost: "Free - $99",
      duration: "2-4 hours",
      website: "https://devopsinstitute.com/events"
    },
    {
      name: "HashiCorp User Groups",
      type: "User Group",
      frequency: "Monthly",
      description: "Local and virtual meetups for HashiCorp tools and practices",
      topics: ["Terraform", "Vault", "Consul", "Nomad"],
      cost: "Free",
      duration: "2 hours",
      website: "https://hashicorp.com/community"
    },
    {
      name: "Kubernetes Community Days",
      type: "Community Event",
      frequency: "Various",
      description: "Community-driven events focused on Kubernetes education and networking",
      topics: ["Kubernetes", "Cloud Native", "Best Practices", "Use Cases"],
      cost: "Free - $50",
      duration: "Full day",
      website: "https://kubernetescommunitydays.org"
    }
  ];

  const localMeetups = [
    {
      name: "San Francisco DevOps",
      location: "San Francisco, CA",
      members: "8,500+",
      frequency: "Monthly",
      venue: "Various tech companies",
      topics: ["CI/CD", "Cloud", "Monitoring", "Culture"]
    },
    {
      name: "London DevOps",
      location: "London, UK", 
      members: "12,000+",
      frequency: "Monthly",
      venue: "Skills Matter & others",
      topics: ["Infrastructure", "Automation", "Security", "Platform Engineering"]
    },
    {
      name: "New York DevOps",
      location: "New York, NY",
      members: "6,200+",
      frequency: "Monthly",
      venue: "Manhattan tech hubs",
      topics: ["Enterprise DevOps", "Containers", "Observability", "Career Growth"]
    },
    {
      name: "DevOps India",
      location: "Bangalore, India",
      members: "15,000+",
      frequency: "Bi-weekly",
      venue: "Tech parks & online",
      topics: ["Cloud Migration", "Cost Optimization", "Security", "Skills Development"]
    }
  ];

  const upcomingWebinars = [
    {
      title: "GitOps Best Practices for Enterprise",
      date: "January 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Alexis Richardson, Weaveworks",
      topics: ["GitOps", "Kubernetes", "Enterprise"],
      registrationLink: "#"
    },
    {
      title: "Platform Engineering: Building Developer Experiences",
      date: "January 22, 2025", 
      time: "11:00 AM PST",
      duration: "45 minutes",
      speaker: "Kelsey Hightower, Google",
      topics: ["Platform Engineering", "Developer Experience", "Kubernetes"],
      registrationLink: "#"
    },
    {
      title: "Security in CI/CD Pipelines",
      date: "January 29, 2025",
      time: "10:00 AM EST",
      duration: "60 minutes",
      speaker: "Maya Kaczorowski, Security Expert",
      topics: ["DevSecOps", "CI/CD", "Security", "Best Practices"],
      registrationLink: "#"
    }
  ];

  const conferenceSchedule = [
    {
      time: "9:00 AM",
      session: "Registration & Networking Breakfast",
      type: "networking",
      speaker: "",
      track: "General"
    },
    {
      time: "10:00 AM",
      session: "Opening Keynote: The Future of DevOps",
      type: "keynote",
      speaker: "Gene Kim",
      track: "Main Stage"
    },
    {
      time: "11:00 AM",
      session: "Coffee Break & Expo",
      type: "break",
      speaker: "",
      track: "General"
    },
    {
      time: "11:30 AM",
      session: "Platform Engineering at Scale",
      type: "technical",
      speaker: "Sarah Wells",
      track: "Platform Track"
    },
    {
      time: "12:30 PM",
      session: "Lunch & Networking",
      type: "networking",
      speaker: "",
      track: "General"
    },
    {
      time: "2:00 PM",
      session: "DevSecOps Implementation Strategies",
      type: "technical",
      speaker: "Shannon Lietz",
      track: "Security Track"
    },
    {
      time: "3:00 PM",
      session: "Workshop: Kubernetes Troubleshooting",
      type: "workshop",
      speaker: "Kelsey Hightower",
      track: "Hands-on Lab"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "conference": return "bg-blue-100 text-blue-800";
      case "webinar series": return "bg-green-100 text-green-800";
      case "virtual conference": return "bg-purple-100 text-purple-800";
      case "user group": return "bg-orange-100 text-orange-800";
      case "community event": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case "keynote": return <Mic className="h-4 w-4" />;
      case "technical": return <BookOpen className="h-4 w-4" />;
      case "workshop": return <Zap className="h-4 w-4" />;
      case "networking": return <Network className="h-4 w-4" />;
      case "break": return <Coffee className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <CalendarIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Events & Conferences
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover upcoming conferences, meetups, and online events to advance your DevOps career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Ticket className="h-5 w-5 mr-2" />
                Find Events
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Video className="h-5 w-5 mr-2" />
                Join Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Annual Conferences</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-pink-600 mb-2">200+</div>
            <div className="text-gray-600">Local Meetups</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">Weekly</div>
            <div className="text-gray-600">Online Events</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">Global</div>
            <div className="text-gray-600">Reach</div>
          </div>
        </div>

        {/* Event Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="upcoming">Upcoming Conferences</TabsTrigger>
            <TabsTrigger value="online">Online Events</TabsTrigger>
            <TabsTrigger value="meetups">Local Meetups</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Building className="h-6 w-6 text-purple-600" />
                          {event.name}
                          <Badge className={getEventTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {event.description}
                        </CardDescription>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CalendarIcon className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <Badge variant="outline">{event.format}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Event Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Star className="h-4 w-4" />
                            Event Highlights
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {event.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Topics Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.topics.map((topic, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Event Stats */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="font-bold text-purple-600">{event.speakers}</div>
                            <div className="text-xs text-gray-600">Speakers</div>
                          </div>
                          <div className="text-center p-3 bg-pink-50 rounded-lg">
                            <div className="font-bold text-pink-600">{event.attendees}</div>
                            <div className="text-xs text-gray-600">Attendees</div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="font-medium text-green-800">Pricing</div>
                          <div className="text-green-700">{event.price}</div>
                          {event.earlyBird && (
                            <div className="text-xs text-green-600 mt-1">{event.earlyBird}</div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-4">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          <Ticket className="h-4 w-4 mr-2" />
                          Register Now
                        </Button>
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Event Website
                        </Button>
                        <Button variant="outline" className="w-full">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onlineEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-blue-600" />
                      {event.name}
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Frequency</div>
                          <div className="text-sm text-gray-600">{event.frequency}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Duration</div>
                          <div className="text-sm text-gray-600">{event.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Cost</div>
                          <div className="text-sm text-gray-600">{event.cost}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Topics</div>
                        <div className="flex flex-wrap gap-2">
                          {event.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Join Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meetups">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localMeetups.map((meetup, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-green-600" />
                      {meetup.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {meetup.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Members</div>
                          <div className="text-sm text-gray-600">{meetup.members}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Frequency</div>
                          <div className="text-sm text-gray-600">{meetup.frequency}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700">Venue</div>
                        <div className="text-sm text-gray-600">{meetup.venue}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Topics</div>
                        <div className="flex flex-wrap gap-2">
                          {meetup.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Users className="h-4 w-4 mr-2" />
                          Join Group
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Next Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars">
            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <Video className="h-5 w-5 text-blue-600" />
                          {webinar.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Speaker: {webinar.speaker}
                        </CardDescription>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CalendarIcon className="h-4 w-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {webinar.time} ({webinar.duration})
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-2">Topics</div>
                          <div className="flex flex-wrap gap-2">
                            {webinar.topics.map((topic, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="w-full">
                          <Ticket className="h-4 w-4 mr-2" />
                          Register Free
                        </Button>
                        <Button variant="outline" className="w-full">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Add Reminder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Sample Conference Schedule */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Clock className="h-6 w-6" />
              Sample Conference Schedule
            </CardTitle>
            <CardDescription>
              Example schedule from a typical DevOps conference day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conferenceSchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 text-sm font-medium text-gray-700">
                    {item.time}
                  </div>
                  <div className="flex items-center gap-2">
                    {getSessionTypeIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.session}</div>
                    {item.speaker && (
                      <div className="text-sm text-gray-600">Speaker: {item.speaker}</div>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.track}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Never Miss a DevOps Event</h2>
          <p className="text-xl mb-8 opacity-90">
            Stay updated with the latest conferences, meetups, and online events in the DevOps community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Subscribe to Calendar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Award className="h-5 w-5 mr-2" />
              Submit Your Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;