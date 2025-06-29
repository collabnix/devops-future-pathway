
import React from 'react';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export const SkillNode = ({ 
  skill, 
  isSelected, 
  isCompleted, 
  onClick, 
  onToggleCompletion 
}) => {
  const handleCompletionToggle = (e) => {
    e.stopPropagation();
    onToggleCompletion();
  };

  return (
    <div
      className={cn(
        "relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105",
        isSelected 
          ? "border-blue-500 shadow-lg bg-blue-50" 
          : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md",
        isCompleted && "bg-green-50 border-green-300"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={cn(
            "p-2 rounded-lg",
            isCompleted ? "bg-green-100" : "bg-blue-100"
          )}>
            <skill.icon className={cn(
              "w-5 h-5",
              isCompleted ? "text-green-600" : "text-blue-600"
            )} />
          </div>
          <h3 className="font-semibold text-gray-900">{skill.name}</h3>
        </div>
        
        <button
          onClick={handleCompletionToggle}
          className={cn(
            "p-1 rounded-full transition-colors",
            isCompleted 
              ? "text-green-500 hover:text-green-600" 
              : "text-gray-300 hover:text-gray-400"
          )}
        >
          {isCompleted ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{skill.description}</p>
      
      <div className="flex items-center justify-between">
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          skill.difficulty === 'Beginner' && "bg-green-100 text-green-800",
          skill.difficulty === 'Intermediate' && "bg-yellow-100 text-yellow-800",
          skill.difficulty === 'Advanced' && "bg-red-100 text-red-800"
        )}>
          {skill.difficulty}
        </span>
        
        {skill.resources && skill.resources.length > 0 && (
          <ExternalLink className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </div>
  );
};
