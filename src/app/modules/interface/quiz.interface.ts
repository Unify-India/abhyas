export interface Quiz {
  quizId: string;
  title: string;
  description?: string;
  teacherId: string;
  questions: { [questionId: string]: boolean } | string[]; // Question IDs or references
  price: number; // Price in your chosen currency
  licenseType: 'Single Use' | 'Classroom' | 'School';
  subject: string;
  gradeLevel: number;
  topic: string;
  examType?: 'Competitive Exam' | 'Board Exam' | 'Class Test' | 'Practice';
}
