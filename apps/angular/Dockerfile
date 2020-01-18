# Slim Node TLS version
FROM node:lts-slim

# Install build deps
RUN apt update && apt install -y python build-essential

WORKDIR /tmp/build

ENV NODE_ENV=production

# node-config environment var
ARG NODE_CONFIG_ENV
ENV NODE_CONFIG_ENV ${NODE_CONFIG_ENV:-production}

COPY package.json /tmp/build/

RUN npm install

RUN mv /tmp/build/node_modules /tmp/node_modules

COPY . /tmp/build

RUN rm -rf /tmp/build/node_modules && mv /tmp/node_modules /tmp/build/node_modules

ENV PATH=$PATH:~/tmp/build/node_modules/.bin

# Build the app
RUN npm run build-prod:angular

# Build the server
RUN npm run build-prod:angular-server

WORKDIR /usr/src/app

# Copy only app runtime (required files for app to run)
RUN cp -a /tmp/build/node_modules /tmp/build/dist /tmp/build/package.json /tmp/build/config /usr/src/app/ \
    && rm -rf /tmp/build

ENV port=8080

CMD npm run start-prod:angular-server