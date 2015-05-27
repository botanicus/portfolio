# TODO: It'd be nice to base it off something really small.
# TODO: With docker bower components doesn't have to be in Git,
# rather as a layer. Use the npm install file.
FROM nginx

COPY vhost.conf /etc/nginx/sites-available/default

RUN mkdir /webs/101ideas.cz
VOLUME /webs/101ideas.cz
ADD .

EXPOSE 80
