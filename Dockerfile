# TODO: It'd be nice to base it off something really small.
FROM nginx
# TODO: Uncomment later.
#RUN apt-get update && apt-get -y upgrade

# TODO: Delete default.conf and set up to work
# with sites-available as is the general approach.
COPY vhost.conf /etc/nginx/conf.d/default.conf

ENV APP_HOME /webs/101ideas.cz
RUN mkdir -p $APP_HOME

# Files are baked-in.
# For development we shadow $APP_HOME by
# docker run -p 80:80 -v #{Dir.pwd}:/webs/101ideas.cz portfolio
ADD . $APP_HOME
