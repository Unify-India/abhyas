import { Request, Response } from 'express';
import {
  fetchQuestionsByUser,
  createNewQuestion,
  updateExistingQuestion,
  deleteExistingQuestion,
  fetchQuestionById,
  addToRegistry,
} from './questions.service';
import { validateQuestionData } from './questions.utils';
import * as logger from 'firebase-functions/logger';

import { v4 as uuidv4 } from 'uuid';

export const getQuestions = async (req: Request, res: Response) => {
  const { userId, lang } = req.query;
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  try {
    const questions = await fetchQuestionsByUser(userId as string, lang as string);
    return res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { registryData, question, answer } = req.body;
    logger.info(`Received request: ${JSON.stringify({ registryData, question, answer })}`);

    // Validate incoming data
    if (!validateQuestionData({ registryData, question, answer })) {
      return res.status(400).json({ error: 'Invalid question data' });
    }

    // Generate a unique question ID
    const questionId = uuidv4();
    logger.info(`Generated questionId: ${questionId}`);

    // Add registry data
    await addToRegistry({ ...registryData, questionId });

    // Process and save questions by language
    const languages = Object.keys(question);
    for (const lang of languages) {
      const questionData = {
        ...question[lang],
        answer,
        questionId, // Attach the generated questionId
      };
      await createNewQuestion(lang, questionData);
    }

    return res.status(201).json({ message: 'Question created and saved successfully' });
  } catch (error) {
    console.error('Error creating question:', error);
    return res.status(500).json({ error: 'Failed to create question' });
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
