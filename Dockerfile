FROM nginx

COPY vhost.conf /etc/nginx/conf.d/default.conf

ENV ROOT /webs/101ideas.cz

RUN mkdir -p $ROOT
ADD . $ROOT
