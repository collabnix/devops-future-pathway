import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  url: string;
  posted: string;
  source: string;
}

interface JobListingProps {
  job: Job;
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'kube.careers': return 'bg-blue-100 text-blue-800';
      case 'linkedin': return 'bg-blue-100 text-blue-800';
      case 'curated': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getSourceColor(job.source)}>
            {job.source}
          </Badge>
          <div className="text-right">
            <div className="font-bold text-lg text-green-600">{job.salary}</div>
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatDate(job.posted)}
            </div>
          </div>
        </div>
        <CardTitle className="text-xl">{job.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.company}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {job.experience}
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Job Type</h4>
            <Badge variant="outline">{job.type}</Badge>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
          </div>
          
          {job.skills && job.skills.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 6).map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {job.skills.length > 6 && (
                  <Badge variant="outline" className="text-xs">
                    +{job.skills.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
          )}
          
          <div className="pt-4">
            <Button asChild className="w-full">
              <a 
                href={job.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center"
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListing;