FROM node:alpine as build

# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-on-alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
RUN apk update && apk upgrade && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories
RUN apk add --no-cache nss@edge
RUN apk add --no-cache chromium@edge

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
WORKDIR /app
ADD package*.json ./
RUN npm install puppeteer@1.14.0
RUN npm install

ADD . ./

# set all env vars now after deps have been installed, but before the build.
ARG PUBLIC_URL=
ARG VERSION=0.0.0

ENV PUBLIC_URL=${PUBLIC_URL}
ENV VERSION=${VERSION}
ENV NODE_ENV=production

RUN npm run build

FROM nginx:alpine as runtime
COPY --from=build /app/build/ /usr/share/nginx/html/

ADD ./nginx-entrypoint.sh /nginx-entrypoint.sh
ADD ./nginx.conf /etc/nginx/nginx.conf.template
RUN chmod +x /nginx-entrypoint.sh
CMD /bin/sh /nginx-entrypoint.sh
