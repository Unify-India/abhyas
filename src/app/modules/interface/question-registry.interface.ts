interface LocalizedStrings {
  [key: string]: string; // key is language code, value is the string
}

interface LocalizedStringArrays {
  [key: string]: string[]; // key is language code, value is array of strings
}

export interface QuestionRegistry {
  questionId: string;
  type: 'Multiple Choice' | 'True/False' | 'Short Answer' | 'Essay' | 'Coding';
  languages: string[]; // e.g., ["en", "hi"]
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  subject: LocalizedStrings;
  keywords: LocalizedStringArrays;
  gradeLevel: number;
  topic: LocalizedStrings;
  subtopic?: LocalizedStrings;
  examType?: 'Competitive Exam' | 'Board Exam' | 'Class Test' | 'Practice';
  previousYear?: number;
  learningObjectives?: LocalizedStringArrays;
  createdBy: string; // userId of the creator
}
