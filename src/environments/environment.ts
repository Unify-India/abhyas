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
    databaseURL: 'http://127.0.0.1:9000',
    authDomain: 'acharya-81fcf.firebaseapp.com',
    projectId: 'acharya-81fcf',
    storageBucket: 'acharya-81fcf.appspot.com',
    messagingSenderId: '1085282617224',
    appId: '1:1085282617224:web:1b5b4f7a0f2b1b3b1d9d0e',
    measurementId: 'G-8XZV0JZQZD',
  },
  functionsRegion: 'asia-southeast1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
