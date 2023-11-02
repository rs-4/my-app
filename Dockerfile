# Use an official Node.js runtime as a parent image
FROM node:18.12.0-alpine

# installer bash
RUN apk update && apk add bash

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed dependencies specified in package.json
RUN npm install

#SET ENV VARIABLES
ENV NODE_ENV=production

# Copy the rest of the application code to the working directory
COPY . .

EXPOSE 3030

# Start the Express.js server with nodemon
CMD ["npm", "run", "start"]
