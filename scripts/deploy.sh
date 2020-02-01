#!/usr/bin/env bash
docker build -t hadwen/web-ui:0.0.00 .
docker push hadwen/web-ui:0.0.00
kubectl apply -f ./deployment.yaml
