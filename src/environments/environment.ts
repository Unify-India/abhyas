// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  emulatorUrls: {
    auth: 'http://127.0.0.1:9099',
    functions: 'http://127.0.0.1:5001',
    firestore: 'http://127.0.0.1:8080',
    database: 'http://127.0.0.1:9000',
    extensions: 'http://127.0.0.1:5001',
  },
  ports: {
    auth: 9099,
    functions: 5001,
    firestore: 8080,
    database: 9000,
    extensions: 5001,
  },
  firebase: {
    apiKey: 'AIzaSyASDlavnQbyYPzTGVKCjgsN8IEqmY3yEH8',
    authDomain: 'acharya-81fcf.firebaseapp.com',
    databaseURL: 'https://acharya-81fcf-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'acharya-81fcf',
    storageBucket: 'acharya-81fcf.firebasestorage.app',
    messagingSenderId: '429806658529',
    appId: '1:429806658529:web:a724cd205e9186d5ade8a0',
    measurementId: 'G-2BEEHQZ4NK',
  },
  functionsRegion: 'asia-south1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
