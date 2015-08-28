#!/bin/bash
if [ -z "$VCAP_APP_PORT" ];
then SERVER_PORT=5000;
else SERVER_PORT="$VCAP_APP_PORT";
fi

# npm install sails --save
# # npm install grunt --save
# npm install sails-disk --save
# npm install

echo port is $SERVER_PORT
# sails lift --prod --port $SERVER_PORT
npm start
# echo failed