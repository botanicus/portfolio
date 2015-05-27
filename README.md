# About

## First Install

Since we distribute Docker images, we no longer have to put
Bower dependencies into Git, but rather just install them as
an AUFS layer.
```
bower install
```

```
boot2docker up
docker build .
docker run -p 80:80 dedbfa8da583

curl -I "http://$(boot2docker ip)/"
docker exec -it sick_kowalevski /bin/bash
```
