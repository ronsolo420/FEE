#!/bin/bash
#work in progress ronsolo
 
if [ "$#" -ne 3 ];
    then
    echo "illegal number of parameters"
    echo "Usage: $0 console username password"
fi
 
console=$1
#username=$2
#password=$3
MATERIAL_SET=com.amazon.networking.managed.prod-pdx.console.local-user.neteng
CONSOLE_USERNAME=$(curl -s "http://localhost:2009/query?Operation=retrieve&ContentType=JSON&material.materialName=$MATERIAL_SET&material.materialType=Principal" | tr '{},' '\n\n\n' | sed -n 's/"materialData":"\(.*\)"/\1/p' | base64 -di; echo)
CONSOLE_PASSWORD=$(curl -s "http://localhost:2009/query?Operation=retrieve&ContentType=JSON&material.materialName=$MATERIAL_SET&material.materialType=Credential" | tr '{},' '\n\n\n' | sed -n 's/"materialData":"\(.*\)"/\1/p' | base64 -di; echo)
 
for port in $(seq 2001 2034)
do
echo "connecting to port $port"
./telnet.expect $console $port $CONSOLE_USERNAME $CONSOLE_PASSWORD
sleep 3
done