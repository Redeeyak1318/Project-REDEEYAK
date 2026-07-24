export interface TimelineItemData {
  id: string;
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  current?: boolean;
}

export interface TimelineSectionData {
  title?: string;
  items: TimelineItemData[];
}
