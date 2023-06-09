#!/bin/zsh
kubectl delete -f learn-typescript-deploy.yaml -n dev
kubectl apply -f learn-typescript-deploy.yaml -n dev