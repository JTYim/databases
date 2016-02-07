CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  msgID int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  message VARCHAR(150) NOT NULL, 
  roomID int NOT NULL,
  -- createdAt TIMESTAMP,
  PRIMARY KEY (msgID) 
);

CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT,
  userName VARCHAR(15) NOT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE rooms (
  roomID int NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(25),
  PRIMARY KEY (roomID)
);



/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- char(size)  Fixed-length character string. Size is specified in parenthesis. Max 255 bytes.
-- varchar(size) Variable-length character string. Max size is specified in parenthesis.
-- number(size)  Number value with a max number of column digits specified in parenthesis.
-- date  Date value
-- number(size,d)  Number value with a maximum number of digits of "size" total, with a maximum number of "d" digits to the right of the decimal.

-- CREATE TABLE collection (
--   title VARCHAR(100), 
--   artist VARCHAR(100), 
--   genre VARCHAR(30), 
--   condition VARCHAR(10), 
--   worth DOUBLE(2,2), 
--   notes TEXT, 
--   released DATE, added DATE, opened ENUM('yes','no'), 
--   updated TIMESTAMP(14), ID int(11) NOT NULL auto_increment, PRIMARY KEY (ID))