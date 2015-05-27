# About

[My portfolio](http://101ideas.cz) distributed in a Docker container based on Nginx.

## Setup

Bower packages are part of the container, but not part of the repository, so you need to run `bower install`.

## Development

```
boot2docker up
rake

curl -I "http://$(boot2docker ip)/"
rake ssh
```

## Shared folders

Obviously the source code is all baked-in.

For development we shadow $ROOT by running `docker run` with `-v #{Dir.pwd}:/webs/101ideas.cz`. You need Docker 1.3 or higher for this. You don't need to worry about it, just run `rake` as usual.

## Deployment

Don't forget to update baked-in files by running `rake build`.
