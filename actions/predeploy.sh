#!/bin/bash
# Replace some env varibles according to the environment 
if ["$ENVIRONMENT" == "dev"]; then
    REGION="us-west-2"
else
    REGION="us-east-1"
fi

ACCESS="$AWS_ACCESS_KEY_ID"
SECRET="$AWS_SECRET_ACCESS_KEY"

echo "Adding this region $REGION to this environment $ENVIRONMENT"
echo "::stdout name=region::$REGION"
