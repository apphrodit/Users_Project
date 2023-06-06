DROP DATABASE IF EXISTS `user`;

CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

-- Criar a tabela "usuarios"
CREATE TABLE `usuarios` (
    `id` BINARY(16) NOT NULL,
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
    (UNHEX(REPLACE('6567dadd-3d7c-46c0-a906-86916bebc823', '-', '')), 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', '1234', '2000-03-01', '13914-552', '2925', 'BL16 AP14'),
    (UNHEX(REPLACE('62dae69e-80f8-4504-9409-0acbe84f6744', '-', '')), 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', '1234', '2000-03-01', '13914-552', '2925', 'BL16 AP14'),
    (UNHEX(REPLACE('0411942e-6e65-4ed8-a2e7-a89845c15236', '-', '')), 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', '1234', '2000-03-01', '13914-552', '2925', 'BL16 AP14'),
    (UNHEX(REPLACE('14c5c112-5808-4b6a-8790-999d0ae1314d', '-', '')), 'Passos Dias Aguiar', '123.456.789-01', 'passos@email.com', '1234', '2000-03-01', '13914-552', '2925', 'BL16 AP14');
-- Exibir os registros da tabela "usuarios"
SELECT * FROM `usuarios`;
