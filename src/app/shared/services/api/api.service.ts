// In your service file (e.g., api.service.ts)

import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { getDatabase, ref, get, push, set, connectDatabaseEmulator } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private db;

  constructor(private functions: Functions) {
    this.db = getDatabase();
    if (environment.useEmulators) {
      console.log('Using Firebase Realtime Database Emulator');
      connectDatabaseEmulator(this.db, 'localhost', environment.ports.database);
    } else {
      console.log('Using Firebase Realtime Database Cloud');
    }
  }

  async verifyConnection() {
    const verifyConnection = httpsCallable(this.functions, 'helloWorld');
    const result = await verifyConnection({}).then((result) => {
      return result;
    });
    return result.data;
  }

  async getDataFromRealtimeDB(path: string) {
    const dbRef = ref(this.db, path);
    console.log('dbRef:', dbRef);

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('No data available');
    }
  }

  async createQuestion(question: any): Promise<string> {
    try {
      const questionsRef = ref(this.db, 'questions');
      const newQuestionRef = push(questionsRef);
      await set(newQuestionRef, {
        ...question,
        id: newQuestionRef.key,
        createdAt: Date.now(),
      });
      return newQuestionRef.key || '';
    } catch (error) {
      console.error('Error creating question:', error);
      throw error;
    }
  }
}
