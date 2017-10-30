FROM node:latest

RUN mkdir /app
WORKDIR /app

ADD . /app/

RUN npm install -g ethereumjs-testrpc
RUN npm install -g nodemon

RUN npm install

CMD npm start