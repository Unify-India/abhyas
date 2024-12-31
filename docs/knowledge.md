# Angular
### Angular configs
These settings in the `angular.json` file are part of the build configuration for the production environment. Here's what each option does:

- optimization: Enables various optimizations like minification and tree-shaking to reduce the size of the output files.
- outputHashing: Adds a hash to the filenames of the output files, which helps with cache busting. The value "all" means that all files will have a hash.
- sourceMap: When set to false, source maps are not generated, which can improve build performance and reduce the size of the output files.
- extractCss: Extracts CSS into separate files instead of embedding it in the JavaScript bundles.
- namedChunks: When set to false, the chunks are not named, which can help with reducing the size of the output files.
- aot: Enables Ahead-of-Time (AOT) compilation, which can improve the performance of the application by compiling the templates during the build process.
- extractLicenses: Extracts third-party licenses into a separate file.
- vendorChunk: When set to false, the vendor files are not separated into a different chunk, which can help with reducing the size of the output files.
- buildOptimizer: Enables Angular's build optimizer, which can further reduce the size of the output files by removing unnecessary code.
These settings are typically used to optimize the application for production deployment, ensuring that the output is as small and efficient as possible.


# Firebase
* **What it is:** Firebase is a comprehensive app development platform from Google that provides a suite of tools and services to help you build, improve, and grow your apps. It offers backend services, SDKs, and a console to manage your app.
* **Key services:**
    * **Realtime Database:**  A NoSQL database for storing and syncing data in real time.
    * **Firestore:** A flexible, scalable NoSQL database for mobile, web, and server development.
    * **Authentication:**  Easy-to-use authentication systems (email/password, social logins).
    * **Storage:**  Secure file storage in the cloud.
    * **Hosting:**  Production-grade web content hosting.
    * **Cloud Functions:** Serverless functions to extend your app's backend.

**Firebase Emulator Suite**

* **What it is:** A set of tools that allow you to run local versions of Firebase services on your machine.
* **Benefits:**
    * **Faster development:** See changes instantly without deploying.
    * **Reduced costs:** Avoid using real Firebase resources during development.
    * **Offline development:** Work without an internet connection.
    * **Improved testing:** Catch bugs early and test integrations with other Firebase services.

**Key Emulators:**

* **Authentication Emulator:** Simulates Firebase Authentication.
* **Realtime Database Emulator:**  Mimics the behavior of the Realtime Database.
* **Firestore Emulator:**  Provides a local instance of Cloud Firestore.
* **Hosting Emulator:**  Serves your web app locally.

**Accessing Emulators**

1. **Installation:**
   * Install the Firebase CLI: `npm install -g firebase-tools`

2. **Initialization:**
   * In your project directory, run: `firebase init emulators`
   * Select the emulators you want to use.

3. **Starting Emulators:**
   * `firebase emulators:start`

4. **Accessing Emulator UI:**
   * Open the Emulator UI in your browser (usually at `localhost:4000`).

5. **Connecting your app:**
   * **SDK:** Configure your Firebase SDK to connect to the emulators (e.g., `connectDatabaseEmulator`, `connectFirestoreEmulator`).
   * **REST API:** Include the `ns` parameter in the URL (e.g., `http://127.0.0.1:9000/?ns=[your-project-id]`).

**Importing/Exporting Data**

* **`--import`:**  Load data into the emulators when starting them (e.g., `firebase emulators:start --import=./data`).
* **`--export`:** Save emulator data to a directory (e.g., `firebase emulators:start --export-on-exit=./data`).
* **Our case:** Import to emulator and export back with changes on exit. `firebase emulators:start --import=./firebase --export-on-exit=./firebase`.

**Important Notes:**

* **Demo project ID:** If you use a demo project ID (like `demo-acharya`), the emulators will use a demo configuration and will not access real Firebase services.
* **Data persistence:** Data in the emulators persists until you clear it or stop the emulators.
* **Security rules:** Test your security rules locally using the emulators.

This summary should provide a good overview for a knowledge transfer session. Remember to adapt it to your specific needs and the level of familiarity of the person you're transferring the knowledge to. Good luck!
