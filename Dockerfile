FROM node:alpine as build

# Installs latest Chromium (73) package.
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge=~73.0.3683.103 \
      nss@edge \
      freetype@edge \
      harfbuzz@edge \
      ttf-freefont@edge

# skip chromium download as we did that manually
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
WORKDIR /app
RUN npm install puppeteer@1.12.2

# add package json and install deps
ADD package.json ./
ADD package-lock.json ./
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
