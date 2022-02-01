#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
if [[ $ENVIRONMENT_VARIABLE = "local" ]]
then
   cp ./src/config/.env.local .env
elif [[ $ENVIRONMENT_VARIABLE = "dev" ]]
then
   cp ./src/config/.env.dev .env
elif [[ $ENVIRONMENT_VARIABLE = "uat" ]]
then
   cp ./src/config/.env.uat .env
elif [[ $ENVIRONMENT_VARIABLE = "prod" ]]
then
   cp ./src/config/.env.prod .env
elif [[ $ENVIRONMENT_VARIABLE = "mock" ]]
then
   cp ./src/config/.env.mock .env
else
   cp ./src/config/.env.mock .env
fi

echo  >> .env
echo "LOGDNA_PASSPHRASE=$LOGDNA_PASSPHRASE" >> .env
echo "LOCALE=$LOCALE" >> .env

printf "\n.env created with contents:\n"
cat .env