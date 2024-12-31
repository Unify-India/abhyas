export interface Question {
  questionId: string;
  language: 'en' | 'hi'; // e.g., "en", "hi"
  text: string;
  options?: { [key: string]: string }; // For Multiple Choice
  imageUrl?: string;
  codeSnippet?: string;
  equation?: string; // LaTeX or other format
}
