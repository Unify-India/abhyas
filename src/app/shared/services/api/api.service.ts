// In your service file (e.g., api.service.ts)

import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { getDatabase, ref, get } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private functions: Functions) {
    if (environment.useEmulators) {
      console.log('Using Firebase Realtime Database Emulator');
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
    const db = getDatabase();
    const dbRef = ref(db, path);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('No data available');
    }
  }
}
