FROM nginx
LABEL name="nishali"
LABEL email="nishali.wijesinghe@bmo.com"

COPY . /usr/share/nginx/html/
