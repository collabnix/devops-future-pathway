
import React from 'react';
import { SkillNode } from './SkillNode';

export const RoadmapVisual = ({ 
  data, 
  selectedSkill, 
  onSkillSelect, 
  completedSkills, 
  onToggleCompletion 
}) => {
  return (
    <div className="space-y-12">
      {data.map((category, categoryIndex) => (
        <div key={category.id} className="relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <SkillNode
                key={skill.id}
                skill={skill}
                isSelected={selectedSkill?.id === skill.id}
                isCompleted={completedSkills.has(skill.id)}
                onClick={() => onSkillSelect(skill)}
                onToggleCompletion={() => onToggleCompletion(skill.id)}
              />
            ))}
          </div>
          
          {categoryIndex < data.length - 1 && (
            <div className="flex justify-center mt-12">
              <div className="w-px h-16 bg-gradient-to-b from-blue-300 to-teal-300"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
