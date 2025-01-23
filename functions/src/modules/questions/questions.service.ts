import { Question, QuestionRegistry } from './questions.types';
import db from '../../services/rtdb';

export const fetchQuestions = async (): Promise<any> => {
  const snapshot = await db.ref('questions/').once('value');
  const questions = snapshot.val();
  return questions ? Object.values(questions) : [];
};

export const fetchQuestionsByUser = async (userId: string, lang?: string): Promise<Question[]> => {
  const snapshot = await db.ref('questionRegistry').orderByChild('createdBy').equalTo(userId).once('value');
  const questionRegistry: { [key: string]: QuestionRegistry } = snapshot.val();
  const questionIds = questionRegistry ? Object.keys(questionRegistry) : [];

  const questionsSnapshot = await db.ref(`questions/${lang || 'all'}`).once('value');
  const allQuestions: { [key: string]: Question } = questionsSnapshot.val();

  // Ensure you filter out undefined or null values before returning
  const userQuestions = questionIds.map((id) => allQuestions[id]).filter(Boolean);

  return userQuestions;
};

export const addToRegistry = async (registryData: QuestionRegistry): Promise<void> => {
  const { questionId } = registryData;
  await db.ref(`registry/${questionId}`).set(registryData);
};

export const createNewQuestion = async (language: string, questionData: Question): Promise<void> => {
  const { questionId } = questionData;
  await db.ref(`questions/${language}/${questionId}`).set(questionData);
};

export const updateExistingQuestion = async (questionId: string, question: Question): Promise<void> => {
  await db.ref(`questions/${question.language}/${questionId}`).update(question);
};

export const deleteExistingQuestion = async (questionId: string, lang: string): Promise<void> => {
  await db.ref(`questions/${lang}/${questionId}`).remove();
};

export const fetchQuestionById = async (questionId: string, lang: string): Promise<Question | null> => {
  const snapshot = await db.ref(`questions/${lang}/${questionId}`).once('value');
  return snapshot.val();
};
