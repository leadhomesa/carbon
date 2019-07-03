FROM leadhome/react-snap-base-image:1 as build
USER root
WORKDIR /app
ADD package*.json ./
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
