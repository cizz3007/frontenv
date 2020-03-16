#!/usr/bin/env bash
set -eu
echo 'start'
mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
  var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';

  var admin = db.getSiblingDB('admin');
  admin.auth(rootUser, rootPassword);

  var user = '$MONGO_INITDB_USERNAME';
  db.createUser({user: 'tripbtoz-mongo', pwd: 'tripbtoz', roles: ["readWrite"]});
EOF
echo 'end'
# When change
# use tripbtoz
# db.changeUserPassword("tripbtoz-mongo", "tripbtoz1234")
