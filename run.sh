docker run -d --name mongo -p 27017:27017 mongo

docker run -p 80:80 \
--link mongo:mongo -t -i \
johnny/docker-hello \
#/bin/bash
