
import React from 'react';
import { 
  GraduationCap, 
  Clock, 
  Briefcase, 
  Award, 
  Calendar, 
  CheckCircle,
  Users,
  Baby
} from 'lucide-react';
import { ScheduleItem, Achievement } from './types';

export const TUTOR_INFO = {
  name: "M.R. Akalanka Ranasinghe",
  role: "Private Tutor",
  photo: "https://files.catbox.moe/67otzl.jpg",
  whatsapp: "+94775762639",
  whatsappLink: "http://wa.me/+94775762639",
  experience: "10 Years of Teaching Excellence",
  school: "Teaching in a Government School",
  education: "Completed Professional Diploma",
  developer: {
    name: "Shenal Anuhas",
    contact: "https://t.me/Crypto_RIV"
  }
};

export const SCHEDULE: ScheduleItem[] = [
  {
    id: '1',
    grade: "Grade 10 & Grade 11",
    day: "Wednesday Evenings",
    time: "3:30 PM – 6:30 PM",
    icon: 'GraduationCap'
  },
  {
    id: '2',
    grade: "Primary Grades",
    day: "Friday Evenings",
    time: "Evening Sessions",
    icon: 'Baby'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: "10+ Years Experience",
    description: "Decade of proven track record in student success.",
    icon: 'Clock'
  },
  {
    id: 'a2',
    title: "Gov. School Faculty",
    description: "Bringing professional pedagogical standards.",
    icon: 'Briefcase'
  },
  {
    id: 'a3',
    title: "Diploma Certified",
    description: "Specialized training in modern education systems.",
    icon: 'Award'
  }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'CheckCircle': return <CheckCircle className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Baby': return <Baby className={className} />;
    default: return <CheckCircle className={className} />;
  }
};
