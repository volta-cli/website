#!/bin/bash

cd $(dirname "$0")/..

node -e 'require("./scripts/example-versions")' > ./subdomains/docs/_data/versions.json
