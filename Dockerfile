FROM node:0.12.4
MAINTAINER Jose Sanchez <Jose.Sanchez@mlb.com>


WORKDIR /usr/src/app


# http://www.clock.co.uk/blog/a-guide-on-how-to-cache-npm-install-with-docker
ADD package.json package.json


RUN npm install


RUN npm install -g \
    gulp-cli \
    browserify \
    uglifyjs


ADD . .


EXPOSE 3000


CMD ["npm", "start"]
