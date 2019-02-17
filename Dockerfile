#Based on https://github.com/kevinhughes27/audiogrep-docker
# DOCKER-VERSION 1.4.0
FROM ubuntu:18.04
COPY . .
RUN apt-get update
RUN apt-get install -y software-properties-common

# FFMPEG
#The repository needs updating from the original
RUN apt-get update
RUN apt-get install -y ffmpeg nodejs npm
RUN npm install

EXPOSE 8080
