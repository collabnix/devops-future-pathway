import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Github, Twitter, Slack, Mail, ExternalLink, Heart } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Roadmap', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Tools', path: '/tools' },
    { name: 'Careers', path: '/careers' }
  ];

  const learningLinks = [
    { name: 'Certifications', path: '/certifications' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'GitHub', path: 'https://github.com/collabnix/devops-future-pathway', external: true }
  ];

  const communityLinks = [
    { name: 'Collabnix Slack', url: 'https://launchpass.com/collabnix', icon: Slack },
    { name: 'GitHub Repository', url: 'https://github.com/collabnix/devops-future-pathway', icon: Github },
    { name: 'Twitter', url: 'https://twitter.com/collabnix', icon: Twitter },
    { name: 'Newsletter', url: 'https://collabnix.com/newsletter', icon: Mail }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">DevOps Future Pathway</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your comprehensive guide to mastering DevOps practices, tools, and career development.
            </p>
            <div className="flex space-x-4">
              {communityLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Learning</h4>
            <ul className="space-y-2">
              {learningLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community Stats</h4>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-blue-400">10k+</div>
                <div className="text-gray-400 text-sm">Community Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">250+</div>
                <div className="text-gray-400 text-sm">Learning Resources</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400 text-sm">DevOps Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DevOps Future Pathway. Built with{' '}
              <Heart className="w-4 h-4 inline text-red-500" />{' '}
              by the{' '}
              <a 
                href="https://collabnix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Collabnix Community
              </a>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a 
                href="https://github.com/collabnix/devops-future-pathway/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
