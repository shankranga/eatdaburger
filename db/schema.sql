CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);