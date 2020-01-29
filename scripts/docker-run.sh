#!/usr/bin/env bash
docker build -t hadwen/react-web .
docker run -p 49160:3000 -d hadwen/react-web
