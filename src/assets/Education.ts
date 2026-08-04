export type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Lovely Professional University",
    duration: "Dec 2025 - Present",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Kurukshetra University",
    duration: "Aug 2022 - July 2025",
  },
  {
    id: 3,
    degree: "Senior Secondary (12th) & Higher Secondary (10th)",
    institution: "HBSE",
    duration: "2019 - 2022",
  },
];
