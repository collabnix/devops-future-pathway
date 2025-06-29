import React from 'react';
import { GitBranch, Github, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const RoadmapHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoadmapDropdownOpen, setIsRoadmapDropdownOpen] = useState(false);
  const location = useLocation();

  const roadmapItems = [
    { path: '/roadmaps', label: 'Career Roadmaps' },
    { path: '/learning-paths', label: 'Learning Paths' },
    { path: '/best-practices', label: 'Best Practices' },
    { path: '/labs', label: 'Hands-on Labs' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      path: '/roadmaps', 
      label: 'Roadmaps', 
      hasDropdown: true,
      dropdownItems: roadmapItems
    },
    { path: '/resources', label: 'Resources' },
    { path: '/tools', label: 'Tools' },
    { path: '/careers', label: 'Careers' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/community', label: 'Community' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isRoadmapSectionActive = () => roadmapItems.some(item => location.pathname === item.path);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">DevOps Future Pathway</h1>
              <p className="text-gray-600 text-sm lg:text-base">Your journey to mastering DevOps</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsRoadmapDropdownOpen(true)}
                    onMouseLeave={() => setIsRoadmapDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path) || isRoadmapSectionActive()
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isRoadmapDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                        <div className="py-1">
                          {roadmapItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(dropdownItem.path)
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a 
              href="https://github.com/collabnix/devops-future-pathway" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors ml-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Mobile dropdown items for Roadmaps */}
                  {item.hasDropdown && (isActive(item.path) || isRoadmapSectionActive()) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {roadmapItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive(dropdownItem.path)
                              ? 'bg-blue-100 text-blue-600'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a 
                href="https://github.com/collabnix/devops-future-pathway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 mt-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-fit"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
