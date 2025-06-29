
import React, { useState } from 'react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { RoadmapVisual } from '../components/RoadmapVisual';
import { SkillDetails } from '../components/SkillDetails';
import { ProgressBar } from '../components/ProgressBar';
import { roadmapData } from '../data/roadmapData';

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [completedSkills, setCompletedSkills] = useState(new Set());

  const toggleSkillCompletion = (skillId) => {
    const newCompleted = new Set(completedSkills);
    if (newCompleted.has(skillId)) {
      newCompleted.delete(skillId);
    } else {
      newCompleted.add(skillId);
    }
    setCompletedSkills(newCompleted);
  };

  const totalSkills = roadmapData.reduce((acc, category) => acc + category.skills.length, 0);
  const completedCount = completedSkills.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RoadmapHeader />
      <div className="container mx-auto px-4 py-8">
        <ProgressBar completed={completedCount} total={totalSkills} />
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <RoadmapVisual 
              data={roadmapData}
              selectedSkill={selectedSkill}
              onSkillSelect={setSelectedSkill}
              completedSkills={completedSkills}
              onToggleCompletion={toggleSkillCompletion}
            />
          </div>
          <div className="lg:col-span-1">
            <SkillDetails 
              skill={selectedSkill}
              isCompleted={selectedSkill && completedSkills.has(selectedSkill.id)}
              onToggleCompletion={() => selectedSkill && toggleSkillCompletion(selectedSkill.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
