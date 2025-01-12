import { Request, Response } from 'express';
import {
  fetchQuestionsByUser,
  createNewQuestion,
  updateExistingQuestion,
  deleteExistingQuestion,
  fetchQuestionById,
} from './questions.service';

export const getQuestions = async (req: Request, res: Response) => {
  const { userId, lang } = req.query;
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  try {
    const questions = await fetchQuestionsByUser(userId as string, lang as string);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const question = req.body;
    await createNewQuestion(question);
    res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create question' });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = req.body;
    await updateExistingQuestion(id, question);
    res.status(200).json({ message: 'Question updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update question' });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { lang } = req.query;
  try {
    await deleteExistingQuestion(id, lang as string);
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete question' });
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { lang } = req.query;
  try {
    const question = await fetchQuestionById(id, lang as string);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
};
