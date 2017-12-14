docker run -d --net=ite3068 --name="arcus-admin" -h "arcus" jkjh0819/ite3068:arcus-admin
docker run -d --net=ite3068 --name="arcus-memcached-1" -p 11211:11211 -p 4120:4120 -h "memcached-1" jkjh0819/ite3068:arcus-hubble
docker run -d --net=ite3068 --name="arcus-memcached-2" -h "memcached-2" ruo91/arcus:memcached
docker run -d --net=ite3068 --name="arcus-memcached-3" -h "memcached-3" ruo91/arcus:memcached
docker run -d --net=ite3068 --name=mysql -p 3306:3306 -p 4257:4257 --env MYSQL_ROOT_PASSWORD=root --env MYSQL_USER=team6 --env MYSQL_PASSWORD=team6 --env MYSQL_DATABASE=team6 jkjh0819/ite3068:mysql-hubble
docker run -d --net=ite3068 --name=nbase-arc -p 6000:6000 -p 4142:4142 jkjh0819/ite3068:nbase-hubble
#docker run -d --net=ite3068 --name="hubblemon" -h "hubblemon" -p 40000:40000 jkjh0819/ite3068:hubblemon
