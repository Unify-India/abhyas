export interface Result {
  resultId: string; // You might want to generate IDs for results
  studentId: string;
  testId: string; // Can be a quizId or an ID for a specific test instance
  answers: { [questionId: string]: string | string[] };
  score: number;
  submittedAt: Date;
}
