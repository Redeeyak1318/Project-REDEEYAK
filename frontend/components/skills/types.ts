export interface Skill {
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
}

export interface SkillsData {
  title: string;
  subtitle?: string;
  skills: Skill[];
}
