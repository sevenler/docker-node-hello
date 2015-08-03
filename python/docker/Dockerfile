FROM ubuntu:latest
MAINTAINER Johnny "johnnyxyz@163.com"

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

RUN git clone https://github.com/sevenler/docker-node-hello.git;
RUN cd docker-node-hello/python/;

RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["app.py"]
