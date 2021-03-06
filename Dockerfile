FROM leadhome/carbon-base:latest as build
USER root
WORKDIR /app

ENV NODE_ENV=production
ARG VERSION=0.0.0
ENV VERSION=${VERSION}

ADD package*.json ./
RUN npm install
ADD . ./
RUN npm run build

FROM docker.io/leadhome/nginx-node-alpine-base-image:1.0.7 as runtime
ARG VERSION=0.0.0
ENV VERSION=${VERSION}
COPY --from=build /app/build/ /usr/share/nginx/html/

ADD ./nginx-entrypoint.sh /nginx-entrypoint.sh
ADD ./nginx.conf /etc/nginx/nginx.conf.template
RUN chmod +x /nginx-entrypoint.sh
CMD /bin/sh /nginx-entrypoint.sh
