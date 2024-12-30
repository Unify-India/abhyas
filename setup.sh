#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to print a message and exit with an error code
function error_exit {
  echo "$1" 1>&2
  exit 1
}

# Step 1: Install dependencies
echo "Installing dependencies..."
npm install || error_exit "Failed to install dependencies."

# Step 2: Install global packages
echo "Installing global packages..."
npm install -g @angular/cli @ionic/cli firebase firebase-tools openjdk-11-jdk || error_exit "Failed to install global packages."

# Step 3: Build the Ionic app
echo "Building the Ionic app..."
ionic build || error_exit "Ionic build failed."

# Step 4: Build Firebase functions
echo "Building Firebase functions..."
cd functions
npm install || error_exit "Failed to install Firebase functions dependencies."
npm run build || error_exit "Firebase functions build failed."
cd ..

# Step 5: Authenticate with Firebase (if needed)
# Uncomment the following lines if you need to authenticate with Firebase
# echo "Authenticating with Firebase..."
# firebase login || error_exit "Firebase login failed."

# Step 6: Start the Firebase emulator and Ionic server
echo "Starting Firebase emulator and Ionic server..."
firebase emulators:start --only functions,database,hosting,firestore & ionic serve --host 0.0.0.0 || error_exit "Failed to start Firebase emulator and Ionic server."

echo "Setup completed successfully."
