FROM ubuntu:14.04


RUN apt-get update \
    && apt-get install --yes curl \
    && curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash - \
    && apt-get install --yes nodejs


COPY . /src


RUN cd /src \ 
    && npm install


EXPOSE 3000


WORKDIR /src


CMD ["node", "/src/bin/www"]