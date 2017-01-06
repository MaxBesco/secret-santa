create table accounts
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR (255) UNIQUE,
	pwd VARCHAR(30) NOT NULL,
	firstName VARCHAR(50),
    lastName VARCHAR(50)
)ENGINE=INNODB;

create table exchanges
(
	exchangeID integer PRIMARY KEY AUTO_INCREMENT,
    creatorID integer,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    FOREIGN KEY(creatorID) REFERENCES accounts(id) ON DELETE CASCADE
)ENGINE=INNODB;

create table participants
(
	exchangeID integer,
    email VARCHAR (255),
    buyingForEmail VARCHAR (255),
    FOREIGN KEY (exchangeID) REFERENCES exchanges(exchangeID) ON DELETE CASCADE
)ENGINE = INNODB;
