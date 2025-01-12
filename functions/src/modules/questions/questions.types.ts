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

export interface Question {
  questionId: string;
  language: string; // any language code (e.g., "en", "hi", etc.)
  text: string;
  options?: { [key: string]: string }; // For Multiple Choice
  imageUrl?: string;
  codeSnippet?: string;
  equation?: string; // LaTeX or other format
}

export interface Answer {
  questionId: string;
  answer: string | string[]; // For MCQs, it can be a single string; for multiple correct answers, it can be an array.
  explanation?: LocalizedStrings; // Using LocalizedStrings for dynamic language support
}
