# Use an official Node.js image with a Debian base (compatible with React Native)
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Install Android dependencies (optional – for CI, not needed on local dev)
# For local dev, you’ll use Android Studio outside the container

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Metro bundler port
EXPOSE 8081

# Start Metro bundler
CMD ["npm", "start"]
