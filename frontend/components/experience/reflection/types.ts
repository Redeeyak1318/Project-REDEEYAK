import type { ReactNode } from "react";
export interface ExperienceSkill {
  name: string;
}


export interface SkillCategoryData {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  skills: ExperienceSkill[];
}

export interface ReflectionParagraph {
  id: string;
  text: string;
}

export interface ReflectionSectionData {
  title: string;
  description: string;
  categories: SkillCategoryData[];
  narrative: ReflectionParagraph[];
}
