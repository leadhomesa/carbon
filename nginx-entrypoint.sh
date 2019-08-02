#! /bin/sh
envsubst '${API_URL}${WP_URL}${PUBLIC_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
envsubfolder /usr/share/nginx/html

exec nginx -g 'daemon off;'
