import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Clock,
  Users,
  Building,
  Target,
  Star,
  ArrowUp,
  Globe,
  Award,
  BarChart3,
  PieChart
} from "lucide-react";

const SalaryGuide = () => {
  const rolesSalary = [
    {
      title: "DevOps Engineer",
      levels: [
        { level: "Entry Level (0-2 years)", salary: "$65,000 - $85,000", demand: 92 },
        { level: "Mid Level (3-5 years)", salary: "$85,000 - $120,000", demand: 95 },
        { level: "Senior Level (6+ years)", salary: "$120,000 - $160,000", demand: 88 },
        { level: "Lead/Principal", salary: "$160,000 - $220,000", demand: 78 }
      ],
      description: "Build and maintain CI/CD pipelines, infrastructure automation, and deployment processes",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS/Azure", "Terraform", "Jenkins"],
      growth: "+18% YoY",
      locations: {
        "San Francisco": "$140,000 - $200,000",
        "New York": "$125,000 - $180,000", 
        "Seattle": "$120,000 - $175,000",
        "Austin": "$100,000 - $145,000",
        "Remote": "$90,000 - $160,000"
      }
    },
    {
      title: "Site Reliability Engineer (SRE)",
      levels: [
        { level: "Entry Level (0-2 years)", salary: "$75,000 - $95,000", demand: 85 },
        { level: "Mid Level (3-5 years)", salary: "$95,000 - $135,000", demand: 90 },
        { level: "Senior Level (6+ years)", salary: "$135,000 - $180,000", demand: 92 },
        { level: "Lead/Principal", salary: "$180,000 - $250,000", demand: 85 }
      ],
      description: "Focus on system reliability, performance optimization, and incident management",
      skills: ["Monitoring", "Observability", "Incident Response", "System Design", "SLIs/SLOs"],
      growth: "+22% YoY",
      locations: {
        "San Francisco": "$160,000 - $220,000",
        "New York": "$140,000 - $200,000",
        "Seattle": "$135,000 - $190,000", 
        "Austin": "$110,000 - $160,000",
        "Remote": "$100,000 - $175,000"
      }
    },
    {
      title: "Cloud Engineer",
      levels: [
        { level: "Entry Level (0-2 years)", salary: "$70,000 - $90,000", demand: 94 },
        { level: "Mid Level (3-5 years)", salary: "$90,000 - $125,000", demand: 96 },
        { level: "Senior Level (6+ years)", salary: "$125,000 - $170,000", demand: 90 },
        { level: "Lead/Principal", salary: "$170,000 - $230,000", demand: 82 }
      ],
      description: "Design and manage cloud infrastructure, migration strategies, and cloud-native solutions",
      skills: ["AWS/Azure/GCP", "Cloud Architecture", "Serverless", "IaC", "Security"],
      growth: "+25% YoY",
      locations: {
        "San Francisco": "$150,000 - $210,000",
        "New York": "$135,000 - $190,000",
        "Seattle": "$130,000 - $185,000",
        "Austin": "$105,000 - $155,000",
        "Remote": "$95,000 - $170,000"
      }
    },
    {
      title: "Platform Engineer",
      levels: [
        { level: "Entry Level (0-2 years)", salary: "$80,000 - $100,000", demand: 88 },
        { level: "Mid Level (3-5 years)", salary: "$100,000 - $140,000", demand: 91 },
        { level: "Senior Level (6+ years)", salary: "$140,000 - $185,000", demand: 89 },
        { level: "Lead/Principal", salary: "$185,000 - $260,000", demand: 86 }
      ],
      description: "Build internal developer platforms and infrastructure abstractions",
      skills: ["Kubernetes", "Platform Design", "Developer Experience", "GitOps", "API Design"],
      growth: "+30% YoY",
      locations: {
        "San Francisco": "$170,000 - $240,000",
        "New York": "$150,000 - $210,000",
        "Seattle": "$145,000 - $200,000",
        "Austin": "$120,000 - $170,000",
        "Remote": "$110,000 - $185,000"
      }
    },
    {
      title: "DevSecOps Engineer",
      levels: [
        { level: "Entry Level (0-2 years)", salary: "$75,000 - $95,000", demand: 89 },
        { level: "Mid Level (3-5 years)", salary: "$95,000 - $130,000", demand: 93 },
        { level: "Senior Level (6+ years)", salary: "$130,000 - $175,000", demand: 91 },
        { level: "Lead/Principal", salary: "$175,000 - $240,000", demand: 87 }
      ],
      description: "Integrate security practices into DevOps workflows and CI/CD pipelines",
      skills: ["Security Testing", "SAST/DAST", "Compliance", "Container Security", "Incident Response"],
      growth: "+28% YoY",
      locations: {
        "San Francisco": "$155,000 - $220,000",
        "New York": "$140,000 - $200,000",
        "Seattle": "$135,000 - $190,000",
        "Austin": "$115,000 - $165,000",
        "Remote": "$105,000 - $180,000"
      }
    }
  ];

  const salaryFactors = [
    {
      factor: "Experience Level",
      impact: "High",
      description: "Years of experience directly correlate with salary increases",
      details: [
        "0-2 years: Entry level positions",
        "3-5 years: Mid-level with specialization",
        "6+ years: Senior roles with leadership responsibilities",
        "10+ years: Principal/Staff level with strategic influence"
      ]
    },
    {
      factor: "Location",
      impact: "High", 
      description: "Geographic location significantly affects compensation",
      details: [
        "Silicon Valley: Highest compensation, high cost of living",
        "Major tech hubs: Competitive salaries with varying costs",
        "Remote work: Location-independent but potentially adjusted",
        "International: Varies greatly by country and local market"
      ]
    },
    {
      factor: "Company Size",
      impact: "Medium",
      description: "Company type and size influence salary ranges",
      details: [
        "FAANG/Tech Giants: Premium compensation packages",
        "Startups: Equity compensation, variable base salary",
        "Mid-size companies: Balanced packages with growth potential",
        "Enterprise: Stable compensation with comprehensive benefits"
      ]
    },
    {
      factor: "Skills & Certifications",
      impact: "Medium",
      description: "Specialized skills and certifications command higher salaries",
      details: [
        "Cloud certifications (AWS, Azure, GCP): +$10k-20k",
        "Security expertise: Premium for DevSecOps roles",
        "Kubernetes/Container expertise: High demand skill",
        "Programming skills (Python, Go): Additional value"
      ]
    }
  ];

  const benefitsPackage = [
    {
      category: "Health & Wellness",
      items: [
        "Health insurance (medical, dental, vision)",
        "Mental health support and counseling",
        "Wellness stipends and gym memberships",
        "Flexible PTO and sick leave"
      ]
    },
    {
      category: "Financial Benefits",
      items: [
        "Stock options or equity participation",
        "401(k) matching and retirement planning",
        "Bonuses and performance incentives",
        "Professional development budgets"
      ]
    },
    {
      category: "Work-Life Balance",
      items: [
        "Remote work flexibility",
        "Flexible working hours",
        "Parental leave policies",
        "Sabbatical opportunities"
      ]
    },
    {
      category: "Growth & Development",
      items: [
        "Conference and training budgets",
        "Certification reimbursements",
        "Internal mobility programs",
        "Mentorship and coaching"
      ]
    }
  ];

  const negotiationTips = [
    {
      tip: "Research Market Rates",
      description: "Use salary data from multiple sources to understand your market value",
      action: "Gather data from Glassdoor, Levels.fyi, PayScale, and industry reports"
    },
    {
      tip: "Highlight Unique Skills",
      description: "Emphasize specialized skills and certifications that are in high demand",
      action: "Prepare examples of how your skills directly impact business outcomes"
    },
    {
      tip: "Consider Total Compensation",
      description: "Look beyond base salary to include equity, benefits, and perks",
      action: "Calculate the total value of the compensation package offered"
    },
    {
      tip: "Time Your Negotiations",
      description: "Best times to negotiate are during hiring, performance reviews, or role changes",
      action: "Plan your approach and gather supporting evidence in advance"
    },
    {
      tip: "Practice Your Pitch",
      description: "Prepare and practice your negotiation conversation",
      action: "Role-play with friends or mentors to build confidence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <DollarSign className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps Salary Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive salary data, negotiation tips, and career insights for DevOps professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Salary Data
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="h-5 w-5 mr-2" />
                Negotiation Tips
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">$127K</div>
            <div className="text-gray-600">Average DevOps Salary</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">+23%</div>
            <div className="text-gray-600">YoY Growth</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-gray-600">Job Demand</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
            <div className="text-gray-600">Hot Role Categories</div>
          </div>
        </div>

        {/* Salary by Role */}
        <Tabs defaultValue="roles" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="roles">By Role</TabsTrigger>
            <TabsTrigger value="factors">Salary Factors</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="negotiation">Negotiation</TabsTrigger>
          </TabsList>

          <TabsContent value="roles">
            <div className="space-y-8">
              {rolesSalary.map((role, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Briefcase className="h-6 w-6 text-blue-600" />
                          {role.title}
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {role.growth}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {role.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    {/* Salary Levels */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Salary by Experience Level
                      </h3>
                      <div className="space-y-4">
                        {role.levels.map((level, levelIndex) => (
                          <div key={levelIndex} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">{level.level}</div>
                              <div className="text-sm text-gray-600">Market demand: {level.demand}%</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">{level.salary}</div>
                              <Progress value={level.demand} className="w-20 h-2 mt-1" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Location-based Salaries */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Salary by Location (Senior Level)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(role.locations).map(([location, salary]) => (
                          <div key={location} className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-medium">{location}</div>
                            <div className="text-blue-600 font-semibold">{salary}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Skills */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        Key Skills in Demand
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="factors">
            <div className="space-y-6">
              {salaryFactors.map((factor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        {factor.factor}
                      </span>
                      <Badge className={
                        factor.impact === "High" ? "bg-red-100 text-red-800" :
                        factor.impact === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }>
                        {factor.impact} Impact
                      </Badge>
                    </CardTitle>
                    <CardDescription>{factor.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {factor.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsPackage.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="negotiation">
            <div className="space-y-6">
              {negotiationTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {tip.tip}
                    </CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-medium text-green-800 mb-2">Action Step:</div>
                      <div className="text-green-700">{tip.action}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Market Trends */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <TrendingUp className="h-6 w-6" />
              DevOps Market Trends 2025
            </CardTitle>
            <CardDescription>
              Key trends shaping DevOps compensation and career opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold">Remote Work Premium</h3>
                </div>
                <p className="text-gray-700">Companies offering 10-15% premium for top remote DevOps talent</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold">Platform Engineering Boom</h3>
                </div>
                <p className="text-gray-700">Fastest growing DevOps specialty with 30%+ salary increases</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PieChart className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold">Security Integration</h3>
                </div>
                <p className="text-gray-700">DevSecOps skills commanding 15-20% salary premiums</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Negotiate Your Worth?</h2>
          <p className="text-xl mb-8 opacity-90">
            Use this data to confidently discuss your compensation and advance your DevOps career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <BarChart3 className="h-5 w-5 mr-2" />
              Download Salary Report
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="h-5 w-5 mr-2" />
              Join Salary Discussions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryGuide;