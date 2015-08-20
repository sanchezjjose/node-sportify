FROM nodesource/trusty:0.12.4
MAINTAINER Jose Sanchez <Jose.Sanchez@mlb.com>

# copy to current working directory [/usr/src/app]
COPY . .


RUN npm install


ENV NODE_ENV development


EXPOSE 3000


CMD ["node", "./bin/www"]
