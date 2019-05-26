FROM node:10

WORKDIR /usr/local/src/web

COPY ./web/package* /usr/local/src/web/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]