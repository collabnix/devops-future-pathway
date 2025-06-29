import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ExternalLink, 
  Search,
  TrendingUp,
  BookOpen,
  Star,
  Eye,
  MessageSquare,
  Filter
} from 'lucide-react';
import { blogPosts, featuredPost, categories, BlogPost } from '../data/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Getting Started': 'bg-green-100 text-green-800',
      'Containers': 'bg-blue-100 text-blue-800',
      'Kubernetes': 'bg-purple-100 text-purple-800',
      'Cloud': 'bg-orange-100 text-orange-800',
      'CI/CD': 'bg-yellow-100 text-yellow-800',
      'Monitoring': 'bg-red-100 text-red-800',
      'Security': 'bg-indigo-100 text-indigo-800',
      'Best Practices': 'bg-gray-100 text-gray-800',
      'Career': 'bg-pink-100 text-pink-800',
      'Infrastructure': 'bg-teal-100 text-teal-800',
      'Automation': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest DevOps trends, tutorials, and best practices. 
            Learn from industry experts and community contributors.
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600 mb-1">{blogPosts.length}+</div>
              <h3 className="font-semibold text-gray-900">Articles</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Eye className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600 mb-1">500k+</div>
              <h3 className="font-semibold text-gray-900">Monthly Views</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <User className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
              <h3 className="font-semibold text-gray-900">Contributors</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600 mb-1">2k+</div>
              <h3 className="font-semibold text-gray-900">Comments</h3>
            </CardContent>
          </Card>
        </div>

        {/* Featured Post */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          <Card className="hover:shadow-lg transition-shadow duration-200 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-100 text-blue-800 flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
                <Badge className={getCategoryColor(featuredPost.category)}>
                  {featuredPost.category}
                </Badge>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{featuredPost.image}</div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredPost.views}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {featuredPost.comments}
                  </div>
                </div>
              </div>
              <Button asChild>
                <a 
                  href={featuredPost.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {post.trending && (
                      <Badge className="bg-orange-100 text-orange-800 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{post.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest DevOps articles, tutorials, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a 
                  href="https://collabnix.com/newsletter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Subscribe to Newsletter
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://collabnix.com/rss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  RSS Feed
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
