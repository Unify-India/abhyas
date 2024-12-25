// In your service file (e.g., api.service.ts)

import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private functions: Functions) {}

  async verifyConnection() {
    const verifyConnection = httpsCallable(this.functions, 'helloWorld');
    const result = await verifyConnection({}).then((result) => {
      return result;
    });
    return result.data;
  }
}
