docker run -d --name="arcus-admin" -h "arcus" ruo91/arcus
docker run -d --name="arcus-memcached-1" -p 11211:11211 -h "memcached-1" ruo91/arcus:memcached
docker run -d --name="arcus-memcached-2" -h "memcached-2" ruo91/arcus:memcached
docker run -d --name="arcus-memcached-3" -h "memcached-3" ruo91/arcus:memcached
docker run -d --name=mysql -p 3306:3306 --env MYSQL_ROOT_PASSWORD=root --env MYSQL_USER=team6 --env MYSQL_PASSWORD=team6 --env MYSQL_DATABASE=team6 camelia0858/mysql:latestest
docker run -d --name=nbase-arc -p 6000:6000 hyeongseok05/nbase-arc
