CREATE DATABASE IF NOT EXISTS api_data;

USE api_data;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE users;

INSERT INTO users values 
  (1, 'Ryan Ray', 'ryan1234', 'ryan@ibm.com', 'active'),
  (2, 'Joe McMillan', 'joe1234', 'joe@ibm.com', 'unactive'),
  (3, 'John Carter', 'john1234', 'john@ibm.com', 'active');

SELECT * FROM users;
