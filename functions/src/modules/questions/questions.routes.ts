import { Router } from 'express';
import { getQuestions, createQuestion, updateQuestion, deleteQuestion, getQuestionById } from './questions.controller';

const router = Router();

router.get('/:lang', getQuestions);
router.post('/create', createQuestion);
router.put('/update/:id', updateQuestion);
router.delete('/delete/:id', deleteQuestion);
router.get('/:id', getQuestionById);

export default router;
