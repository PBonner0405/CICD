#!/bin/bash -l
### Install PM2
npm i -g serverless@$SLS_VERSION
serverless --version
### API Deploy ###
echo "Deploying API Server"
sls deploy --stage $STAGE --verbose --region $REGION