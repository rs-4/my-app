# ENV EXECUTION
FROM node:18.12.0-alpine

# define the directory app
WORKDIR /app

# copy the package.json to install dependencies
COPY package.json .

# install all dependencies
RUN npm install

# set NODE ENV var env
ENV NODE_ENV=production

# copy all files from current dir to /app in container
COPY . .

# expose the port 3000
EXPOSE 3000

# run the command to start the app
CMD [ "npm", "run", "start" ]