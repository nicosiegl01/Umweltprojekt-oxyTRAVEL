INSERT INTO Customer(id,mail,password) VALUES (1, 'sieglnico@gmail.com','passme');
INSERT INTO Customer(id,mail,password) VALUES (2, 'elias.ganglberger12345@gmail.com','passme');
INSERT INTO Customer(id,mail,password) VALUES (3, 'sieglnico@gmail.com','passme');

INSERT INTO Airport(id,name,shortName,recordid,latitude,longitude) VALUES(1, 'test','test','test',1,2);

DROP SEQUENCE Hibernate_Sequence RESTRICT;
CREATE SEQUENCE Hibernate_Sequence START WITH 100;