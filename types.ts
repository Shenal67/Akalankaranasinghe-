
export interface ScheduleItem {
  id: string;
  grade: string;
  day: string;
  time: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ApplicationFormData {
  name: string;
  grade: string;
  school: string;
  contact: string;
  reason: string;
}
