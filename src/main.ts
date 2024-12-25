import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase, connectDatabaseEmulator } from '@angular/fire/database';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { environment } from './environments/environment';
import { connectFirestoreEmulator } from 'firebase/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', environment?.ports?.firestore);
      }
      return firestore;
    }),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, environment?.emulatorUrls?.auth);
      }
      return auth;
    }),
    provideFunctions(() => {
      const functions = getFunctions(undefined, environment?.functionsRegion);
      if (environment.useEmulators) {
        connectFunctionsEmulator(functions, 'localhost', environment?.ports?.functions);
      }
      return functions;
    }),
    provideDatabase(() => {
      const database = getDatabase();
      if (environment.useEmulators) {
        connectDatabaseEmulator(database, 'localhost', environment?.ports?.database);
      }
      return database;
    }),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
  ],
});
