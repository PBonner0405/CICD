#!/bin/bash -l
### Install PM2
npm i -g pm2
pm2 --version
### API Deploy ###
echo "Deploying API Server"
sls deploy --stage $STAGE --verbose --region $REGION
pm2 start --name 'Testing Server' index.js