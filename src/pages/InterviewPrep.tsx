import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  MessageCircle, 
  Brain, 
  Code2, 
  CheckCircle, 
  Clock, 
  Target, 
  BookOpen,
  Lightbulb,
  Award,
  Star,
  AlertCircle,
  FileText,
  Settings,
  Cloud,
  Shield,
  Monitor,
  Database,
  GitBranch,
  Workflow
} from "lucide-react";

const InterviewPrep = () => {
  const interviewCategories = [
    {
      id: "behavioral",
      title: "Behavioral Questions",
      icon: <Users className="h-6 w-6" />,
      description: "Questions about your experience, teamwork, and problem-solving approach",
      questions: [
        {
          question: "Tell me about a time when you had to troubleshoot a production issue under pressure.",
          tips: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Focus on your systematic approach to problem-solving",
            "Mention collaboration with team members",
            "Highlight what you learned from the experience"
          ],
          sample: "In my previous role, our main application went down during peak hours (Situation). I was responsible for quickly identifying and resolving the issue (Task). I started by checking our monitoring dashboards, identified a database connection issue, coordinated with the DBA team, and implemented a temporary fix while working on the root cause (Action). We restored service within 30 minutes and prevented future occurrences by implementing better connection pooling (Result)."
        },
        {
          question: "Describe a time when you had to implement a new DevOps process or tool.",
          tips: [
            "Explain the business need for the change",
            "Describe your research and evaluation process",
            "Mention stakeholder buy-in and change management",
            "Quantify the results and benefits"
          ],
          sample: "Our team was struggling with manual deployments taking 2-3 hours and frequent rollback issues. I researched CI/CD solutions, evaluated Jenkins and GitLab CI, and created a pilot project. After getting team approval, I implemented automated pipelines that reduced deployment time to 15 minutes and decreased deployment failures by 80%."
        },
        {
          question: "How do you handle disagreements with team members about technical decisions?",
          tips: [
            "Show that you value different perspectives",
            "Demonstrate data-driven decision making",
            "Mention compromise and collaboration",
            "Focus on shared goals and outcomes"
          ],
          sample: "I believe technical disagreements are opportunities for learning. I listen to understand different viewpoints, research pros and cons, and often suggest proof-of-concept implementations to test approaches. If needed, I involve senior team members for guidance, always keeping our shared goals and user needs as the priority."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Questions",
      icon: <Code2 className="h-6 w-6" />,
      description: "Questions about DevOps tools, practices, and technical implementation",
      questions: [
        {
          question: "Explain the difference between blue-green and canary deployments.",
          tips: [
            "Define both deployment strategies clearly",
            "Explain the use cases for each",
            "Mention pros and cons",
            "Give real-world examples"
          ],
          sample: "Blue-green deployment uses two identical environments where you switch all traffic at once, ensuring zero downtime but requiring double infrastructure. Canary deployment gradually routes traffic to the new version, allowing real-world testing with minimal risk but requiring more sophisticated traffic management. I'd use blue-green for critical updates where rollback needs to be instant, and canary for gradual feature rollouts."
        },
        {
          question: "How would you design a CI/CD pipeline for a microservices architecture?",
          tips: [
            "Consider independent service deployment",
            "Mention testing strategies",
            "Discuss orchestration and dependencies",
            "Address monitoring and rollback"
          ],
          sample: "I'd design independent pipelines for each service with shared libraries for common stages. Each pipeline would include unit tests, integration tests, security scans, and container building. I'd use tools like Jenkins or GitLab CI with Kubernetes for orchestration, implement proper service discovery, and ensure comprehensive monitoring and logging for troubleshooting distributed systems."
        },
        {
          question: "Describe your approach to infrastructure monitoring and alerting.",
          tips: [
            "Mention the observability pyramid (logs, metrics, traces)",
            "Discuss proactive vs reactive monitoring",
            "Explain alert fatigue prevention",
            "Include business metrics"
          ],
          sample: "I implement a layered monitoring approach: infrastructure metrics (CPU, memory, disk), application metrics (response time, error rates), and business metrics (user transactions, revenue). I use tools like Prometheus for metrics, ELK stack for logs, and Jaeger for tracing. Alerts are configured based on SLIs and SLOs, with escalation policies and runbooks to prevent alert fatigue."
        }
      ]
    },
    {
      id: "scenario",
      title: "Scenario-Based Questions",
      icon: <Brain className="h-6 w-6" />,
      description: "Real-world scenarios testing your problem-solving and architectural thinking",
      questions: [
        {
          question: "Our application is experiencing high latency during peak hours. How would you investigate and resolve this?",
          tips: [
            "Start with systematic investigation",
            "Use monitoring and observability tools",
            "Consider multiple potential causes",
            "Propose both immediate and long-term solutions"
          ],
          sample: "I'd start by checking our monitoring dashboards to identify patterns - when does latency spike, which services are affected, and what resources are constrained. I'd analyze application logs, database performance, network latency, and infrastructure metrics. Based on findings, I'd implement immediate fixes like scaling, caching, or database optimization, then work on long-term solutions like architecture improvements or capacity planning."
        },
        {
          question: "A critical security vulnerability is discovered in a library used across multiple services. How do you handle this?",
          tips: [
            "Emphasize security incident response process",
            "Mention risk assessment and prioritization",
            "Discuss coordination across teams",
            "Include testing and rollback plans"
          ],
          sample: "I'd immediately assess the vulnerability severity and impact scope using our dependency scanning tools. I'd coordinate with security and development teams to prioritize affected services, create patches or workarounds, and implement emergency deployment procedures if needed. All changes would go through accelerated testing, and I'd ensure we have rollback plans ready. Post-incident, I'd review our dependency management process to prevent similar issues."
        },
        {
          question: "Your team needs to migrate a monolithic application to microservices. What's your approach?",
          tips: [
            "Suggest incremental migration strategy",
            "Mention the strangler fig pattern",
            "Discuss data migration challenges",
            "Include team training and culture aspects"
          ],
          sample: "I'd recommend a strangler fig pattern - gradually extracting services while keeping the monolith running. I'd start by identifying bounded contexts, extracting the least coupled services first, and implementing proper API gateways and service discovery. Data migration would be handled carefully with event sourcing or database per service patterns. Throughout the process, I'd ensure team training on microservices patterns and establish proper monitoring and testing practices."
        }
      ]
    }
  ];

  const studyTopics = [
    {
      category: "Core DevOps Concepts",
      icon: <Target className="h-5 w-5" />,
      topics: [
        "DevOps culture and principles",
        "Continuous Integration/Continuous Deployment",
        "Infrastructure as Code",
        "Configuration Management",
        "Monitoring and Observability",
        "Site Reliability Engineering",
        "DevSecOps practices"
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Settings className="h-5 w-5" />,
      topics: [
        "Version Control (Git, GitHub, GitLab)",
        "CI/CD Tools (Jenkins, GitLab CI, GitHub Actions)",
        "Containerization (Docker, Kubernetes)",
        "Infrastructure Tools (Terraform, Ansible, Chef)",
        "Cloud Platforms (AWS, Azure, GCP)",
        "Monitoring Tools (Prometheus, Grafana, ELK Stack)",
        "Security Tools (Vault, SAST/DAST scanners)"
      ]
    },
    {
      category: "System Design & Architecture",
      icon: <Database className="h-5 w-5" />,
      topics: [
        "Microservices vs Monolithic architecture",
        "Load balancing and scaling strategies",
        "Database design and management",
        "Caching strategies",
        "API design and management",
        "Security architecture",
        "Disaster recovery planning"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="h-5 w-5" />,
      topics: [
        "Cloud service models (IaaS, PaaS, SaaS)",
        "Cloud architecture patterns",
        "Auto-scaling and load balancing",
        "Network security and VPCs",
        "Cost optimization strategies",
        "Multi-cloud and hybrid cloud",
        "Serverless computing"
      ]
    }
  ];

  const interviewTips = [
    {
      title: "Before the Interview",
      icon: <FileText className="h-5 w-5" />,
      tips: [
        "Research the company's tech stack and DevOps maturity",
        "Review the job description and align your experience",
        "Prepare specific examples using the STAR method",
        "Practice explaining complex concepts simply",
        "Prepare thoughtful questions about their DevOps practices"
      ]
    },
    {
      title: "During the Interview",
      icon: <MessageCircle className="h-5 w-5" />,
      tips: [
        "Listen carefully and ask clarifying questions",
        "Think out loud when solving problems",
        "Admit what you don't know and explain how you'd find out",
        "Focus on business impact and team collaboration",
        "Be specific about your role in team achievements"
      ]
    },
    {
      title: "Technical Discussions",
      icon: <Code2 className="h-5 w-5" />,
      tips: [
        "Start with high-level approach, then dive into details",
        "Consider trade-offs and alternative solutions",
        "Mention scalability, security, and maintainability",
        "Use diagrams or whiteboard if available",
        "Connect technical decisions to business outcomes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Interview Preparation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Master DevOps interviews with comprehensive questions, answers, and expert tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Preparing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Award className="h-5 w-5 mr-2" />
                Practice Questions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600">Sample Questions</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Question Types</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">Expert</div>
            <div className="text-gray-600">Tips & Guidance</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">Real</div>
            <div className="text-gray-600">Interview Scenarios</div>
          </div>
        </div>

        {/* Interview Questions */}
        <Tabs defaultValue="behavioral" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {interviewCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {interviewCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-600 text-white p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-lg">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-6">
                {category.questions.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600 flex items-start gap-3">
                        <MessageCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="tips">
                          <AccordionTrigger className="text-left">
                            <span className="flex items-center gap-2">
                              <Lightbulb className="h-4 w-4" />
                              Answer Tips & Strategy
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {item.tips.map((tip, tipIndex) => (
                                <div key={tipIndex} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{tip}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="sample">
                          <AccordionTrigger className="text-left">
                            <span className="flex items-center gap-2">
                              <Star className="h-4 w-4" />
                              Sample Answer
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                              <p className="text-gray-700 leading-relaxed">{item.sample}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Study Guide */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <BookOpen className="h-6 w-6" />
              Study Guide & Key Topics
            </CardTitle>
            <CardDescription>
              Essential topics to review before your DevOps interview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studyTopics.map((topic, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    {topic.icon}
                    {topic.category}
                  </h3>
                  <div className="space-y-2">
                    {topic.topics.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interview Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lightbulb className="h-6 w-6" />
              Interview Success Tips
            </CardTitle>
            <CardDescription>
              Expert advice to help you excel in your DevOps interview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interviewTips.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-blue-600">
                    {section.icon}
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Practice Recommendations */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-6 w-6" />
              Practice Recommendations
            </CardTitle>
            <CardDescription>
              Build confidence through structured practice and mock interviews
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Mock Interviews</h3>
                <p className="text-sm text-gray-600">Practice with peers or use online platforms</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Code2 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hands-on Labs</h3>
                <p className="text-sm text-gray-600">Build projects to demonstrate skills</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Study Groups</h3>
                <p className="text-sm text-gray-600">Learn with other DevOps candidates</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Star className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Review</h3>
                <p className="text-sm text-gray-600">Get feedback from experienced professionals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your DevOps Interview?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful DevOps professionals who used our preparation materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Award className="h-5 w-5 mr-2" />
              Start Mock Interview
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Study Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;