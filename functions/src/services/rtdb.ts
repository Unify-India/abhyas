import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ServiceAccount } from 'firebase-admin';
import * as logger from 'firebase-functions/logger';

// Load environment variables from a specific path
dotenv.config({ path: './src/env/.env' });

logger.info('Loading environment variables...');

// Log all environment variables for debugging
// logger.info(`Environment variables: ${JSON.stringify(process.env)}`);

if (!process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
  logger.error('FIREBASE_SERVICE_ACCOUNT_PATH environment variable is not set');
  throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH environment variable is not set');
}

// logger.info(`FIREBASE_SERVICE_ACCOUNT_PATH: ${process.env.FIREBASE_SERVICE_ACCOUNT_PATH}`);

let serviceAccount: ServiceAccount;
try {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  // logger.info('Reading service account file...', serviceAccountPath);
  const serviceAccountContent = fs.readFileSync(serviceAccountPath, 'utf8');
  serviceAccount = JSON.parse(serviceAccountContent);
  logger.info('Service account file read successfully');
} catch (error) {
  logger.error('Error reading service account file:', error);
  throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH environment variable is not valid JSON or file cannot be read');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

logger.info('Firebase admin initialized');

const db = admin.database();

// Use emulator if specified in the environment variables
if (process.env.USE_EMULATOR === 'true') {
  db.useEmulator('localhost', 9000);
  logger.info('Using RTDB emulator at localhost:9000');
}

export default db;
