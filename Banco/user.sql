DROP DATABASE IF EXISTS `user`;

CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

-- Criar a tabela "usuarios"
CREATE TABLE `usuarios` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `nascto` DATE NOT NULL,
    `cep` VARCHAR(10) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,
    `complemento` VARCHAR(100),
    `telefone` VARCHAR(100),
    PRIMARY KEY (`id`)
);

INSERT INTO `usuarios` (`nome`, `cpf`, `email`, `senha`, `nascto`, `cep`, `numero`, `complemento`, `telefone`)
VALUES
    ('Passos Dias Aguiar', '123.456.789-01', 'passos@email.com',
    password('josinei123'),
    '2000-03-01', '13914-552', '2925', 'BL16 AP14', '6969-6969, 8915-5564'),
    ('Ana Silva', '987.654.321-99', 'ana@email.com',
    password('123456'),
    '2000-03-20', '13914-552', '2925', 'BL16 AP15', NULL),
    ('Xupaco do Silva', '666.666.666-77', '20comer70correr@email.com',
     password('delicious123'), '1969-01-24', '13999-320', '123', 'FUNDOS', '9992-2424, 9969-2424');

