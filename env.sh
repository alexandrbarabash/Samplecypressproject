#!/bin/bash

./build.sh
./stop.sh
docker-compose -p sample-cypress-project up -d
