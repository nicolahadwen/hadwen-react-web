#!/usr/bin/env bash
docker build -t hadwen/web-ui:0.0.00 .
docker run --env-file ./dev.env -p 3000:3000 -d hadwen/web-ui:0.0.00
