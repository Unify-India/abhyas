/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import express from 'express';
import questionsRouter from './modules/questions/questions.routes';
// import authRouter from './modules/auth/auth.routes';
// import usersRouter from './modules/users/users.routes';
// import schoolsRouter from './modules/schools/schools.routes';
// import quizzesRouter from './modules/quizzes/quizzes.routes';
// import examsRouter from './modules/exams/exams.routes';
// import marketplaceRouter from './modules/marketplace/marketplace.routes';
// import paymentsRouter from './modules/payments/payments.routes';
// import rewardsRouter from './modules/rewards/rewards.routes';
// import analyticsRouter from './modules/analytics/analytics.routes';

// Create an Express app
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`Received request: ${req.method} ${req.url}`);
  next();
});

// Define routes
app.use('/questions', questionsRouter);
// app.use('/auth', authRouter);
// app.use('/users', usersRouter);
// app.use('/schools', schoolsRouter);
// app.use('/quizzes', quizzesRouter);
// app.use('/exams', examsRouter);
// app.use('/marketplace', marketplaceRouter);
// app.use('/payments', paymentsRouter);
// app.use('/rewards', rewardsRouter);
// app.use('/analytics', analyticsRouter);

// Export the Express app as a Firebase Function
export const abhyasApi = onRequest(app);
