# Use a Node.js base image
FROM node:20-alpine

# Install Java
RUN apk add --no-cache openjdk11

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install global packages
RUN npm install -g @angular/cli @ionic/cli firebase firebase-tools

# Copy the rest of the application code
COPY . .

# Expose the port your Ionic app runs on (usually 8100)
EXPOSE 8100

# Start the Firebase emulator and Ionic server
CMD sh -c "firebase emulators:start --only functions,database,hosting,firestore & ionic serve --host 0.0.0.0"
