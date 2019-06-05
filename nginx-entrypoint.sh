envsubst '${API_URL}${PUBLIC_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Replace env vars in html template -- if any
cp /usr/share/nginx/html/index.html /usr/share/nginx/html/index.template.html
envsubst < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.html

exec nginx -g 'daemon off;'
