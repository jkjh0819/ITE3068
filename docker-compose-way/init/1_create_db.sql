CREATE DATABASE IF NOT EXISTS `team6`;

DROP TABLE IF EXISTS `team6`.`team6`;

CREATE TABLE `team6`.`test` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='hello example';

CREATE TABLE `team6`.`user` (
  `id`         BIGINT(11)   NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(45)  NOT NULL,
  `age`        INT          NULL,
  `email`      VARCHAR(200) NULL,
  `created_at` DATETIME     NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COMMENT ='hello example';