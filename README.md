# About

[My portfolio](http://botanicus.me) distributed in a Docker container based on Nginx.

## Setup

Bower packages are part of the container, but not part of the repository, so you need to run `bower install` in `content/` (where the `bower.json` file is).

## Development

```
boot2docker up # Don't forget to export the env variables it prints!
rake

curl -I "http://$(boot2docker ip)/"
rake ssh
```

## Shared folders

Obviously the source code is all baked-in.

For development we shadow $ROOT by running `docker run` with `-v #{Dir.pwd}:/webs/botanicus.me`. You need Docker 1.3 or higher for this. You don't need to worry about it, just run `rake` as usual.

## Deployment

Don't forget to update baked-in files by running `rake build`.

## Logs

Since we don't run Nginx in a daemon mode, it logs to STDERR/STDOUT, so logs should never eat up all the diskspace.
