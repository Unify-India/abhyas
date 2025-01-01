#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to print a message and exit with an error code
function error_exit {
  echo -e "\e[31m$1\e[0m" 1>&2
  exit 1
}

# Function to log status
function log_status {
  echo -e "\e[32m✔ $1\e[0m"
  LOGS+="$1\n"
}

# Function to log steps
function log_step {
  echo -e "\e[34m> $1\e[0m"
  LOGS+="$1\n"
}

LOGS=""

# Step 1: Check Node.js version
log_step "Checking Node.js version..."
NODE_VERSION=$(node -v || echo "none")
if [[ $NODE_VERSION == v20* ]]; then
  log_status "Node.js version is 20.x.x, skipping installation."
else
  log_step "Node.js version is not 20.x.x, checking for nvm..."
  if command -v nvm &> /dev/null; then
    log_step "nvm found, installing Node.js 20..."
    nvm install 20 || error_exit "Failed to install Node.js 20."
    nvm use 20 || error_exit "Failed to use Node.js 20."
  else
    error_exit "nvm not found. Please install nvm or Node.js 20 manually."
  fi
fi

# Step 2: Install global packages
log_step "Installing global packages..."
GLOBAL_PACKAGES=( "@angular/cli" "@ionic/cli" "firebase" "firebase-tools" )
for PACKAGE in "${GLOBAL_PACKAGES[@]}"; do
  if npm list -g --depth=0 | grep -q $PACKAGE; then
    log_status "$PACKAGE is already installed."
  else
    log_step "Installing $PACKAGE..."
    npm install -g $PACKAGE || error_exit "Failed to install $PACKAGE."
    log_status "$PACKAGE installed successfully."
  fi
done

# Step 3: Check for Java version
log_step "Checking for Java version..."
if ! command -v java &> /dev/null; then
  error_exit "Java not found. Please install it using the following commands:
  \nLinux: sudo apt-get update && sudo apt-get install -y openjdk-11-jdk
  \nMac: brew update && brew install openjdk@11
  \nWindows: Download and install from https://jdk.java.net/11/"
else
  JAVA_VERSION=$(java --version 2>&1 | head -n 1)
  log_status "Java is installed: $JAVA_VERSION"
fi

# Step 4: Install dependencies
log_step "Installing dependencies..."
npm install || error_exit "Failed to install dependencies."
log_status "Dependencies installed successfully."

# Step 5: Build the Ionic app
log_step "Building the Ionic app..."
ionic build || error_exit "Ionic build failed."
log_status "Ionic app built successfully."
echo -e "\n"

# Step 6: Setup Firebase functions
echo -e "\n\e[1mFirebase Functions:\e[0m"
log_step "Setting up Firebase functions..."
cd functions

# Check Node.js version for functions
log_step "Checking Node.js version for Firebase functions..."
NODE_VERSION=$(node -v || echo "none")
if [[ $NODE_VERSION == v20* ]]; then
  log_status "Node.js version is 20.x.x, skipping installation."
else
  log_step "Node.js version is not 20.x.x, checking for nvm..."
  if command -v nvm &> /dev/null; then
    log_step "nvm found, installing Node.js 20..."
    nvm install 20 || error_exit "Failed to install Node.js 20."
    nvm use 20 || error_exit "Failed to use Node.js 20."
  else
    error_exit "nvm not found. Please install nvm or Node.js 20 manually."
  fi
fi

log_step "Installing Firebase functions dependencies..."
npm install || error_exit "Failed to install Firebase functions dependencies."

echo -e "\n"
log_status "Firebase functions dependencies installed successfully."

log_step "Building Firebase functions..."
npm run build || error_exit "Firebase functions build failed."
log_status "Firebase functions built successfully."
cd ..

# Step 7: Authenticate with Firebase (if needed)
# Uncomment the following lines if you need to authenticate with Firebase
# log_step "Authenticating with Firebase..."
# firebase login || error_exit "Firebase login failed."

log_status "Setup completed successfully."

# Print summary of steps
echo -e "\n\e[1mSummary:\e[0m"
while IFS= read -r line; do
  echo -e "\e[34m- $line\e[0m"
done <<< "$(echo -e "$LOGS")"

# Print disclaimer and usage instructions
echo -e "\n\e[1mProject setup is complete. To run the project, use the following commands in separate terminal windows:\e[0m\n"
echo -e "\e[1m1. Start the Ionic server:\e[0m\n"
echo -e "\e[1;32m\t$ ionic serve\e[0m\n"
echo -e "This command will start the Ionic development server, allowing you to view the app in your browser.\n"
echo -e "\e[1m2. Start the Firebase emulator:\e[0m\n"
echo -e "\e[1;32m\t$ firebase emulators:start --only functions,database,hosting,firestore\e[0m\n"
echo -e "This command will start the Firebase emulator for functions, database, hosting, and Firestore.\n"
echo -e "If you want to use the emulator with static data use the command below.\n"
echo -e "\e[1;32m\t$ firebase emulators:start --project=demo-acharya --import=./firebase/seeds --export-on-exit=./firebase/seeds\e[0m\n"
echo -e "Note: Ensure that you run these commands in separate terminal windows to keep both services running simultaneously."
