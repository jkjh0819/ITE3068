FROM camelia0858/mysql:latestest

COPY ./ /hubblemon

RUN apt-get update && apt-get install -y python3-pip python-pip python3 python librrd-dev  libpython3-dev libpython-dev git net-tools

RUN pip3 install psutil rrdtool
WORKDIR /hubblemon
RUN pip3 install -r requirements.txt
WORKDIR /
