#!/usr/bin/env sh

set -e

PROJECT_NAME='warehouse-api'

docker-compose --project-name $PROJECT_NAME up -d
