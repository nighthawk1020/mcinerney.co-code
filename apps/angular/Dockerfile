# Slim Node TLS version
FROM node:lts-slim

WORKDIR /usr/src/app

ENV NODE_ENV=production

ENV PATH=$PATH:/usr/src/node_modules/.bin

ENV port=4200

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

# Build the app
RUN npm run build-prod:angular

# Build the server
RUN npm run build-prod:angular-server

CMD npm run start-prod:angular-server