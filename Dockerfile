FROM node:20.9.0-alpine
USER root
VOLUME /var/www/api
COPY ./ /var/www/api/
WORKDIR /var/www/api
EXPOSE 3000
CMD yarn && yarn build && yarn start:prod