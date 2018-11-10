DROP TABLE IF EXISTS incuvate.users;
CREATE TABLE incuvate.users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(25),
	PRIMARY KEY (id)
);

INSERT INTO incuvate.users (name) VALUES ('a'), ('b'), ('c'), ('d');


-- SELECT	* FROM incuvate.users;
