docker build --no-cache -f SQL\Dockerfile.PostgreSql -t azs1212-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t azs1212-java/app ../../..
