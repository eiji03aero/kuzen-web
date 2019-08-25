#!/bin/bash

COMMAND=${1:-up}
TRAILING=${@:2:($#-1)}

function execute-docker-compose () {
  docker-compose \
    -f 'docker-compose.yml' \
    $@
}

function execute-docker-sync () {
  docker-sync \
    $@ \
    -c 'docker-sync.yml'
}

function stop-docker-compose () {
  execute-docker-sync stop
  execute-docker-compose stop
}

if [ $COMMAND = 'up' ] && [ $# -le 1 ]; then
  trap 'stop-docker-compose' SIGINT
  execute-docker-compose up -d

  execute-docker-sync start
  execute-docker-compose exec kuzen-web yarn install
  execute-docker-compose exec kuzen-web /bin/bash
elif [ $COMMAND = 'bash' ]; then
  execute-docker-compose exec kuzen-web /bin/bash
elif [ $COMMAND = 'exec' ]; then
  execute-docker-compose exec kuzen-web $TRAILING
elif [ $COMMAND = 'run' ]; then
  execute-docker-compose run --rm kuzen-web $TRAILING
else
  execute-docker-compose $@
fi
