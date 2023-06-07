DROP DATABASE IF EXISTS `user`;

CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

-- Criar a tabela "usuarios"
CREATE TABLE `usuarios` (
    `id` BINARY(5) NOT NULL,
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

-- Inserir os dados na tabela "usuarios"
INSERT INTO `usuarios` (`id`, `nome`, `cpf`, `email`, `senha`, `nascto`, `cep`, `numero`, `complemento`, `telefone`)
VALUES
    (UNHEX(REPLACE('6567dadd-3d7c-46c0-a906-86916bebc823', '-', '')), 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', 
    password('josinei123'),
    '2000-03-01', '13914-552', '2925', 'BL16 AP14', NULL),
    (UNHEX(REPLACE('62dae69e-80f8-4504-9409-0acbe84f6744', '-', '')), 'Ana Silva', '987.654.321-99', 'ana@email.com',
    password('juvenalnemapau'),
    '2000-03-20', '13914-552', '2925', 'BL16 AP15', NULL);
;
SELECT * FROM `usuarios`;
