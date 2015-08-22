FROM node:0.12.4
MAINTAINER Jose Sanchez <Jose.Sanchez@mlb.com>


WORKDIR /usr/src/app


# http://www.clock.co.uk/blog/a-guide-on-how-to-cache-npm-install-with-docker
ADD package.json package.json


RUN npm install


ADD . .


EXPOSE 3000


CMD ["node", "./bin/www"]
