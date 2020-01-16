FROM node:latest as server
WORKDIR /app
COPY package.json /app
RUN  npm install --silent && npm install -g sucrase --silent && npm install -g nodemon --silent
COPY . .
RUN ps -ef