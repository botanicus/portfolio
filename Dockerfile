# TODO: It'd be nice to base it off something really small.
FROM nginx
RUN apt-get update && apt-get -y upgrade

# TODO: Delete default.conf and set up to work
# with sites-available as is the general approach.
COPY vhost.conf /etc/nginx/conf.d/default.conf

ENV APP_HOME /webs/101ideas.cz
RUN mkdir -p $APP_HOME
VOLUME $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME

EXPOSE 80
