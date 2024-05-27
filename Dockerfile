FROM nginx
LABEL name="nishali"
LABEL email="nishali.wijesinghe@bmo.com"

COPY index.html /usr/share/nginx/html/
COPY health.html /usr/share/nginx/html/health.html
