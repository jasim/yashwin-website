#!/bin/bash

rm -rf _site && npx tailwindcss -i ./src/input.css -o ./src/static/output.css && NODE_ENV=production npx @11ty/eleventy --input ./src

REMOTE_USER=deploy
REMOTE_IP=dbase
REMOTE_DIR=/home/deploy/root_website
ssh ${REMOTE_USER}@${REMOTE_IP} "mkdir ${REMOTE_DIR}"
rsync -acvzh ./_site/* ${REMOTE_USER}@${REMOTE_IP}:${REMOTE_DIR}
