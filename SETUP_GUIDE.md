# Setup Guide for Abhyas Project

## Prerequisites

1. **Node.js and npm**: Ensure you have Node.js (version 20) and npm installed. You can use `nvm` (Node Version Manager) to manage Node.js versions.

2. **Git**: Ensure you have Git installed to clone the repository.

3. **Firebase CLI**: Install the Firebase CLI to manage Firebase services.

4. **Java**: Ensure you have Java installed for Firebase Emulator.

## Steps

### 1. Clone the Repository

First, clone the repository from GitHub:

```sh
git clone https://github.com/your-repo/abhyas.git
cd abhyas
```

### 2. Install Node.js and npm

Use `nvm` to install and use the correct Node.js version:

```sh
nvm install 20
nvm use 20
```

Verify the installation:

```sh
node -v
npm -v
```

### 3. Install Global Dependencies

Install the global dependencies required for the project:

```sh
npm install -g @angular/cli @ionic/cli firebase-tools
```

### 4. Install Project Dependencies

Navigate to the project root directory and install the dependencies:

```sh
npm install
```

### 5. Install Firebase Functions Dependencies

Navigate to the `functions` directory and install the dependencies:

```sh
cd functions
npm install
cd ..
```

### 6. Set Up Environment Configuration

Ensure you have the correct environment configuration files. You should have `src/environments/environment.ts`, `src/environments/environment.prod.ts`, and `src/environments/environment.staging.ts`.

1. Create a project on firebase
2. Replace the firebase config on `environment.ts`

### 7. Running the Ionic App

To run the Ionic app in development mode:

```sh
ionic serve --host 0.0.0.0
```

This will start the Ionic development server and you can access the app at `http://localhost:8100`.

### 8. Running Firebase Emulators

To run the Firebase emulators, ensure you are authenticated with Firebase CLI:

```sh
firebase login
```

Then, start the Firebase emulators:

```sh
firebase emulators:start --only functions,database,hosting,firestore
```

To load the working data to emulator:
```sh
firebase emulators:start --project=demo-acharya --import=./firebase/seeds --export-on-exit=./firebase/seeds
```

### 9. Linting and Formatting

To lint the code and fix issues:

```sh
npm run lint
```

To format the code using Prettier:

```sh
npm run format
```

### 10. Building the Project

To build the project for production:

```sh
npm run build
```

To build the project for staging:

```sh
npm run build:staging
```

### 11. Running Tests

To run the unit tests:

```sh
npm run test
```

### 12. Firebase Deployment

To deploy the Firebase functions:

```sh
cd functions
npm run deploy
cd ..
```

## Summary of Commands

Here is a summary of the commands you will use frequently:

- **Clone Repository**: `git clone https://github.com/your-repo/abhyas.git`
- **Install Node.js**: `nvm install 20 && nvm use 20`
- **Install Global Dependencies**: `npm install -g @angular/cli @ionic/cli firebase-tools`
- **Install Project Dependencies**: `npm install`
- **Install Functions Dependencies**: `cd functions && npm install && cd ..`
- **Run Ionic App**: `ionic serve --host 0.0.0.0`
- **Run Firebase Emulators**: `firebase emulators:start --only functions,database,hosting,firestore`
- **Lint Code**: `npm run lint`
- **Format Code**: `npm run format`
- **Build Project**: `npm run build`
- **Build Staging**: `npm run build:staging`
- **Run Tests**: `npm run test`
- **Deploy Firebase Functions**: `cd functions && npm run deploy && cd ..`

By following this guide, a new developer should be able to set up the project from scratch, run the Ionic app, and use the Firebase emulators effectively.

## Executable Approach

To streamline the setup process, you can use the automated `setup.sh` script provided in the project. This script will install dependencies, build the Ionic app and Firebase functions, and start the necessary services. Follow the steps below to use the `setup.sh` script:

### Step 1: Make the Script Executable

Before running the script, you need to make it executable. Run the following command in your terminal:

```sh
chmod +x setup.sh
```

To use this script:

find the setup.sh file:
Make the script executable:

Make the script executable by running the following command:

#### Run the script:

Run the script to perform the setup:
```bash 
./setup.sh
```

**What the Script Does**

The `setup.sh` script performs the following steps:

1. Install Dependencies:
    - Runs npm install to install project dependencies.
2. Install Global Packages:
    - Installs the global packages @angular/cli, @ionic/cli, firebase-tools, and openjdk-11-jdk using npm install -g.
3. Build the Ionic App:
    - Runs ionic build to build the Ionic application.
4. Build Firebase Functions:
    - Changes directory to functions and installs dependencies using npm install.
    - Builds the Firebase functions using npm run build.
    - Returns to the root directory.
5. Authenticate with Firebase (Optional):
    - Uncomment the lines to authenticate with Firebase if needed.
6. Start the Firebase Emulator and Ionic Server:
    - Starts the Firebase emulator and the Ionic server using firebase emulators:start and ionic serve.
7. If any command fails, the script will print an error message and exit with a non-zero status code. This ensures that the setup process stops immediately if any step encounters an error.
