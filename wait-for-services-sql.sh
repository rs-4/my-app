./wait-for-it.sh my-app-sql:3306 -t 0 -- echo "my-app-sql is up"

node ./src/index.js