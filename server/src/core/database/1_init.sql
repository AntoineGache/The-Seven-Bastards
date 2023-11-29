#CREATE DATABASE sevenBastards;

#DROP USER 'user'@'localhost';
#CREATE USER 'user'@'localhost' IDENTIFIED BY 'root';
#GRANT ALL PRIVILEGES ON sevenBastards.* TO 'user'@'localhost' WITH GRANT OPTION;

use sevenBastards;

drop table test;
create table test(
    id numeric primary key,
    numberTest varchar(50),
    name varchar(50)
);

select * from test;