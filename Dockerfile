FROM node:18.17.1-alpine

ENV USER=angular
ENV USER_HOME=/home/$USER
ENV APP_HOME=$USER_HOME/app

RUN apk add --no-cache aws-cli

COPY . $APP_HOME/

WORKDIR $APP_HOME

RUN mkdir ~/.aws && cp -r .aws/credentials ~/.aws
RUN npm run prepare
RUN npm install

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]
CMD [ "--", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check" ]
