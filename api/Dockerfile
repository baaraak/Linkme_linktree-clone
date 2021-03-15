FROM node:alpine

RUN mkdir -p /usr/src/linkme-api && chown -R node:node /usr/src/linkme-api

WORKDIR /usr/src/linkme-api

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000