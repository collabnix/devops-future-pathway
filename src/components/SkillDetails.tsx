
import React from 'react';
import { ExternalLink, BookOpen, Play, CheckCircle, Circle } from 'lucide-react';

export const SkillDetails = ({ skill, isCompleted, onToggleCompletion }) => {
  if (!skill) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border h-fit">
        <div className="text-center text-gray-500">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">Select a Skill</h3>
          <p className="text-sm">Click on any skill in the roadmap to see detailed information and resources.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border h-fit sticky top-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <skill.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
              skill.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
              skill.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {skill.difficulty}
            </span>
          </div>
        </div>
        
        <button
          onClick={onToggleCompletion}
          className={`p-2 rounded-full transition-colors ${
            isCompleted 
              ? 'text-green-500 hover:text-green-600' 
              : 'text-gray-300 hover:text-gray-400'
          }`}
        >
          {isCompleted ? (
            <CheckCircle className="w-8 h-8" />
          ) : (
            <Circle className="w-8 h-8" />
          )}
        </button>
      </div>
      
      <p className="text-gray-600 mb-6">{skill.description}</p>
      
      {skill.keyPoints && skill.keyPoints.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Concepts:</h4>
          <ul className="space-y-2">
            {skill.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {skill.resources && skill.resources.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Learning Resources:</h4>
          <div className="space-y-3">
            {skill.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 bg-blue-100 rounded">
                    {resource.type === 'video' ? (
                      <Play className="w-4 h-4 text-blue-600" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{resource.title}</div>
                    <div className="text-xs text-gray-500 capitalize">{resource.type}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
