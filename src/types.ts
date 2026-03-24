export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  level: number;
  points: number;
  unlockedLevels: number[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface Question {
  id: string;
  level: number;
  type: 'multiple-choice' | 'order' | 'drag-drop';
  instruction: string;
  image?: string;
  options: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface Level {
  id: number;
  title: string;
  topics: string[];
  color: string;
  icon: string;
}
