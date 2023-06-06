DROP DATABASE IF EXISTS 'user';

CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

-- Criar a tabela "usuarios"
CREATE TABLE `usuarios` (
    `id` INT NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `nascto` DATE NOT NULL,
    `cep` VARCHAR(10) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,
    `complemento` VARCHAR(100),
    PRIMARY KEY (`id`)
);

-- Inserir os dados na tabela "usuarios"
INSERT INTO `usuarios` (`id`, `nome`, `cpf`, `email`, `senha`, `nascto`, `cep`, `numero`, `complemento`)
VALUES
    (123, 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', '1234', '2000-03-01', '13914-552', '2925', 'BL16 AP14'),
    (321, 'Ana Aguiar', '987.654.321-99', 'ana@email.com', '1234', '2000-03-20', '13914-552', '2925', 'BL16 AP15'),
    (333, 'Fabiana Silva', '987.654.300-10', 'fabiana@email.com', '1234', '2000-03-20', '13914-552', '2900', NULL),
    (555, 'Maria Santos', '555.666.777-88', 'maria@email.com', '9876', '1995-12-25', '13914-552', '2500', 'Casa 5'),
    (666, 'Carlos Oliveira', '999.888.777-66', 'carlos@email.com', '5432', '1992-08-15', '13914-552', '1001', NULL);

-- Exibir os registros da tabela "usuarios"
SELECT * FROM `usuarios`;
