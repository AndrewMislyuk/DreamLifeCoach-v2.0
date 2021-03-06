FROM node:lts-alpine

RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn generate

EXPOSE 8080

CMD [ "http-server", "dist" ]