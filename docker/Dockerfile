# VERSION 0.2
# DOCKER-VERSION 0.3.4
# To build:
# 1. Install docker (http://docker.io)
# 2. Checkout source: git@github.com:gasi/docker-node-hello.git
# 3. Build container: docker build .

FROM    centos:6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm
RUN     yum install -y git

# Clone code and install
RUN git clone https://sevenler:tryourbest2015@github.com/sevenler/docker-node-hello.git;
RUN cd docker-node-hello; npm install;

EXPOSE  80
CMD ["node", "/docker-node-hello/index.js"]
