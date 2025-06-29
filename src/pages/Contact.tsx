import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Twitter, 
  Slack, 
  ExternalLink,
  Send,
  Heart,
  Bug,
  Lightbulb,
  HelpCircle,
  Star,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const contactMethods = [
    {
      icon: Github,
      title: "GitHub Issues",
      description: "Report bugs, request features, or contribute to discussions",
      action: "Open Issue",
      url: "https://github.com/collabnix/devops-future-pathway/issues",
      color: "bg-gray-100 text-gray-800"
    },
    {
      icon: Slack,
      title: "Slack Community",
      description: "Join our 10k+ member community for real-time discussions",
      action: "Join Slack",
      url: "https://launchpass.com/collabnix",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Follow us for updates and quick questions",
      action: "Follow Us",
      url: "https://twitter.com/ajeetsraina",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For partnership inquiries and official communication",
      action: "Send Email",
      url: "mailto:ajeet.raina@gmail.com",
      color: "bg-green-100 text-green-800"
    }
  ];

  const faqItems = [
    {
      question: "How can I contribute to the DevOps roadmap?",
      answer: "You can contribute by opening issues on GitHub, submitting pull requests, or joining our Slack community to share ideas and feedback."
    },
    {
      question: "Is this platform free to use?",
      answer: "Yes! DevOps Future Pathway is completely free and open-source. Our mission is to democratize DevOps education."
    },
    {
      question: "How often is the content updated?",
      answer: "We regularly update our content based on industry trends and community feedback. Major updates happen monthly, with smaller updates weekly."
    },
    {
      question: "Can I suggest new tools or resources?",
      answer: "Absolutely! We welcome suggestions for new tools, resources, and learning materials. Please open an issue on GitHub or reach out on Slack."
    },
    {
      question: "How can I get certified in DevOps?",
      answer: "Check out our Certifications page for comprehensive guides on various DevOps certifications, study plans, and preparation resources."
    }
  ];

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback', icon: MessageSquare },
    { value: 'bug', label: 'Bug Report', icon: Bug },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'question', label: 'Question', icon: HelpCircle },
    { value: 'appreciation', label: 'Appreciation', icon: Heart }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions, suggestions, or want to contribute? We'd love to hear from you! 
            Choose the best way to connect with our community.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 text-center">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a 
                    href={method.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {method.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-blue-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Message Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {feedbackTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question, suggestion, or feedback..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ and Additional Info */}
          <div className="space-y-6">
            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-sm text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  Community at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10k+</div>
                    <div className="text-sm text-gray-600">Community Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">GitHub Stars</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Contributors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">GitHub Issues:</span>
                    <span className="font-medium">2-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Slack Community:</span>
                    <span className="font-medium">Few hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Inquiries:</span>
                    <span className="font-medium">1-2 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Social Media:</span>
                    <span className="font-medium">Same day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Growing Community</h3>
            <p className="text-gray-600 mb-6">
              Connect with fellow DevOps practitioners, share knowledge, and grow together. 
              Our community is always ready to help and collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a 
                  href="https://launchpass.com/collabnix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Slack className="w-4 h-4 mr-2" />
                  Join Slack Community
                </a>
              </Button>
              <Button asChild variant="outline">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
