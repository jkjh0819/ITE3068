CREATE DATABASE IF NOT EXISTS `team6`;

DROP TABLE IF EXISTS `team6`.`team6`;

CREATE TABLE `team6`.`user` (
  `id`         BIGINT(11)   NOT NULL AUTO_INCREMENT,
  `Username`       VARCHAR(45)  NOT NULL,
  `Age`        INT          NULL,
  `EmailAddress`      VARCHAR(200) NULL,
  `CreatedAt` DATETIME     NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COMMENT ='hello example';