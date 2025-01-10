import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
const serviceAccount: ServiceAccount = require('/path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acharya-81fcf-default-rtdb.asia-southeast1.firebasedatabase.app',
});

const db = admin.database();

export default db;

import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;
const databaseURL = process.env.DATABASE_URL;
const useEmulator = process.env.USE_EMULATOR === 'true';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath!)),
    databaseURL: databaseURL,
  });

  console.log('Firebase Admin initialized successfully.');
}

// Get a reference to the Realtime Database
const database = admin.database();

// Use Emulator for RTDB if specified
if (useEmulator) {
  const emulatorHost = 'localhost';
  const emulatorPort = 9000; // Default RTDB Emulator port
  database.useEmulator(emulatorHost, emulatorPort);
  console.log(`RTDB Emulator connected at ${emulatorHost}:${emulatorPort}`);
}

export { database };
