#!/bin/bash

docker run \
    --publish 1234:3000 \
    --detach \
    --rm \
    --name hello-world \
    takumab/node-hello-world-app