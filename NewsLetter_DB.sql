CREATE DATABASE NewsLetter;

USE NewsLetter;

CREATE TABLE CadastroEmail (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255)
);

INSERT INTO CadastroEmail (Email) VALUES(
    'Exemplo@gmail.com'
    );


SELECT * FROM CadastroEmail;
