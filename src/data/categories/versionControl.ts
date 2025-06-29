
import { GitBranch } from 'lucide-react';

export const versionControlCategory = {
  id: 'version-control',
  title: 'Version Control & Collaboration',
  description: 'Master Git and collaborative development workflows.',
  skills: [
    {
      id: 'git',
      name: 'Git & GitHub',
      description: 'Version control, branching strategies, and collaboration',
      difficulty: 'Beginner',
      icon: GitBranch,
      keyPoints: [
        'Git fundamentals: init, add, commit, push, pull',
        'Branching and merging strategies',
        'Merge vs rebase workflows',
        'Pull requests and code reviews',
        'Git workflows (GitFlow, GitHub Flow, Feature Branch)',
        'Conflict resolution and troubleshooting',
        'Git hooks for automation',
        'Semantic versioning and tagging'
      ],
      resources: [
        {
          title: 'Pro Git Book (Free)',
          type: 'book',
          url: 'https://git-scm.com/book'
        },
        {
          title: 'Git Branching Strategies',
          type: 'article',
          url: 'https://www.atlassian.com/git/tutorials/comparing-workflows'
        },
        {
          title: 'GitHub Skills - Interactive Courses',
          type: 'course',
          url: 'https://skills.github.com/'
        },
        {
          title: 'Git and GitHub Tutorial',
          type: 'video',
          url: 'https://www.youtube.com/watch?v=RGOj5yH7evk'
        }
      ]
    }
  ]
};
