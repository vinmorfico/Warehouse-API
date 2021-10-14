#!/usr/bin/env sh

set -e

PROJECT_NAME='warehouse-api'

docker build -t $PROJECT_NAME .
docker-compose --project-name $PROJECT_NAME up -d

