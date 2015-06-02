# About

[My portfolio](http://botanicus.me) distributed in a Docker container based on Nginx.

## Setup

Bower packages are part of the container, but not part of the repository, so you need to run `bower install` in `content/` (where the `bower.json` file is).

## Development

```
boot2docker up # Don't forget to export the env variables it prints!

# Build the container and run it.
rake

# Open the app in your browser.
rake open

# Connect to the running container.
rake ssh
```

## Shared folders

Obviously the source code is all baked-in.

For development we shadow `$ROOT` by running `docker run` with `-v #{Dir.pwd}:/webs/botanicus.me:ro`. You need Docker 1.3 or higher for this.

Running `rake` will take care of it, it's just important to know that what you see in development is not necessarily the same as what is in the container at the moment! So for deployment, you have to re-run `rake build`.

## Deployment

Don't forget to update baked-in files by running `rake build`.

## Logs

Since we don't run Nginx in a daemon mode, it logs to STDERR/STDOUT, so logs should never eat up all the diskspace.
