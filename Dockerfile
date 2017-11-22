# Dockerfile for arcus

# based image
FROM ubuntu:12.04

LABEL maintainer1 = "2015004257" \
      maintainer2 = "2015004120"

# environment for arcus
RUN   apt-get update
RUN   apt-get install -y build-essential autoconf git openjdk-7-jdk \
      automake libtool libcppunit-dev python-setuptools python-dev curl tar 

# clone arcus from repository
RUN useradd -m arcus
RUN git clone https://github.com/naver/arcus.git /arcus
RUN chown -R arcus:arcus /arcus

USER arcus

WORKDIR /home/arcus
RUN mkdir project

# ant and jdk is required for arcus
WORKDIR /home/arcus/project
RUN curl -OL http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.3-bin.tar.gz
RUN tar xf apache-ant-1.9.3-bin.tar.gz
RUN ln -s apache-ant-1.9.3 ant
RUN rm apache-ant-1.9.3-bin.tar.gz

ENV JAVA_HOME /usr/lib/jvm/java-7-openjdk-amd64
ENV ANT_HOME /home/arcus/project/ant
ENV PATH $JAVA_HOME/bin:$ANT_HOME/bin:$PATH

WORKDIR /arcus/scripts
RUN ./build.sh

WORKDIR /arcus
VOLUME ["/arcus"]
